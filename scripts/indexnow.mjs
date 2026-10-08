#!/usr/bin/env node
/**
 * IndexNow — prévient Bing, Yandex, Naver, Seznam, Yep… (via api.indexnow.org)
 * des URLs du site qui ont changé, en lisant le sitemap EN LIGNE.
 *
 * Détection : une URL est soumise si elle est nouvelle ou si son <lastmod> a
 * changé depuis la dernière exécution (état mémorisé dans .indexnow/state.json,
 * ignoré par git). Les URLs disparues du sitemap sont soumises aussi, pour que
 * les moteurs constatent le 404/410 et les retirent.
 *
 * Usage :
 *   node scripts/indexnow.mjs                 # diff vs dernière exécution (1re fois : fenêtre de 30 jours)
 *   node scripts/indexnow.mjs --all           # tout le sitemap (amorçage, refonte)
 *   node scripts/indexnow.mjs --since 2026-10-01
 *   node scripts/indexnow.mjs --url https://www.astro-cours.com/blog/xxx [--url …]
 *   node scripts/indexnow.mjs --dry-run       # affiche la sélection sans rien envoyer
 *
 * Options : --sitemap <url>  --key <clé>  --state <fichier>  --window <jours>
 * Env     : SITE_URL (défaut https://www.astro-cours.com), INDEXNOW_KEY
 *
 * Aucun secret nécessaire : la clé IndexNow est publique par construction
 * (fichier /<clé>.txt à la racine du site) ; elle est lue dans public/.
 * Doc : https://www.indexnow.org/documentation
 */

import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ENDPOINT = process.env.INDEXNOW_ENDPOINT ?? "https://api.indexnow.org/indexnow"; // surchargeable pour les tests
const MAX_PER_REQUEST = 10_000; // limite du protocole
const STATUS = {
  200: "OK — URLs reçues",
  202: "Accepté — clé en cours de validation par les moteurs",
  400: "Requête invalide",
  403: "Clé refusée (fichier /<clé>.txt introuvable ou contenu différent)",
  422: "URLs hors du domaine, ou clé/keyLocation incohérents",
  429: "Trop de requêtes — réessayer plus tard",
};

function fail(message) {
  console.error(`✖ ${message}`);
  process.exit(1);
}

function printHelp() {
  console.log(`IndexNow — soumet à api.indexnow.org les URLs du sitemap qui ont changé.

Usage :
  node scripts/indexnow.mjs                 diff vs dernière exécution (1re fois : fenêtre de 30 jours)
  node scripts/indexnow.mjs --all           tout le sitemap (amorçage, refonte)
  node scripts/indexnow.mjs --since <date>  URLs dont le lastmod ≥ date (ex. 2026-10-01)
  node scripts/indexnow.mjs --url <url>     URL(s) précise(s), option répétable
  node scripts/indexnow.mjs --dry-run       affiche la sélection sans rien envoyer

Options :
  --sitemap <url>   sitemap à lire (défaut : SITE_URL/sitemap.xml)
  --key <clé>       clé IndexNow (défaut : INDEXNOW_KEY, sinon public/<clé>.txt)
  --state <fichier> fichier d'état (défaut : .indexnow/state.json)
  --window <jours>  fenêtre utilisée quand aucun état n'existe (défaut : 30)

Env : SITE_URL (défaut https://www.astro-cours.com), INDEXNOW_KEY`);
}

// ---------- Arguments ----------
function parseArgs(argv) {
  const opts = {
    urls: [],
    all: false,
    dryRun: false,
    since: null,
    window: 30,
    sitemap: null,
    key: null,
    state: null,
  };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    const next = () => {
      const v = argv[++i];
      if (v === undefined) fail(`Valeur manquante pour ${a}`);
      return v;
    };
    switch (a) {
      case "--all":
        opts.all = true;
        break;
      case "--dry-run":
        opts.dryRun = true;
        break;
      case "--url":
        opts.urls.push(next());
        break;
      case "--since":
        opts.since = next();
        break;
      case "--window":
        opts.window = Number(next());
        if (!Number.isFinite(opts.window) || opts.window < 0) fail("--window attend un nombre de jours");
        break;
      case "--sitemap":
        opts.sitemap = next();
        break;
      case "--key":
        opts.key = next();
        break;
      case "--state":
        opts.state = next();
        break;
      case "-h":
      case "--help":
        printHelp();
        process.exit(0);
        break;
      default:
        fail(`Option inconnue : ${a} (voir --help)`);
    }
  }
  return opts;
}

// ---------- Clé ----------
async function resolveKey(explicit) {
  const key = (explicit ?? process.env.INDEXNOW_KEY ?? "").trim();
  if (key) return key;
  const dir = path.join(ROOT, "public");
  for (const name of await readdir(dir)) {
    const m = /^([a-f0-9]{32})\.txt$/i.exec(name);
    if (!m) continue;
    const content = (await readFile(path.join(dir, name), "utf8")).trim();
    if (content === m[1]) return m[1];
  }
  return fail("Clé IndexNow introuvable : passez --key, INDEXNOW_KEY, ou placez public/<clé>.txt (contenu = clé).");
}

// ---------- Sitemap ----------
async function fetchText(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "astro-cours-indexnow/1.0", "Cache-Control": "no-cache" },
  });
  if (!res.ok) fail(`Impossible de lire ${url} : HTTP ${res.status}`);
  return res.text();
}

function decodeEntities(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}

/** Map<url, lastmod | null>. Suit les index de sitemaps si besoin. */
async function readSitemap(url, seen = new Set()) {
  if (seen.has(url)) return new Map();
  seen.add(url);
  const xml = await fetchText(url);
  const entries = new Map();

  if (/<sitemapindex[\s>]/i.test(xml)) {
    if (!/<\/sitemapindex>/i.test(xml)) fail(`Index de sitemaps tronqué : ${url}`);
    for (const m of xml.matchAll(/<sitemap>[\s\S]*?<loc>\s*([^<]+?)\s*<\/loc>[\s\S]*?<\/sitemap>/gi)) {
      for (const [u, d] of await readSitemap(decodeEntities(m[1]), seen)) entries.set(u, d);
    }
    return entries;
  }

  if (!/<\/urlset>/i.test(xml)) fail(`Sitemap tronqué ou invalide : ${url}`);
  for (const m of xml.matchAll(/<url>([\s\S]*?)<\/url>/gi)) {
    const block = m[1];
    const loc = /<loc>\s*([^<]+?)\s*<\/loc>/i.exec(block);
    if (!loc) continue;
    const lastmod = /<lastmod>\s*([^<]+?)\s*<\/lastmod>/i.exec(block);
    entries.set(decodeEntities(loc[1]), lastmod ? lastmod[1] : null);
  }
  return entries;
}

// ---------- État ----------
async function loadState(file) {
  try {
    const json = JSON.parse(await readFile(file, "utf8"));
    return new Map(Object.entries(json.urls ?? {}));
  } catch (e) {
    if (e.code === "ENOENT") return null;
    return fail(`État illisible (${file}) : ${e.message}`);
  }
}

async function saveState(file, current) {
  await mkdir(path.dirname(file), { recursive: true });
  const json = { updatedAt: new Date().toISOString(), urls: Object.fromEntries(current) };
  await writeFile(file, JSON.stringify(json, null, 2) + "\n");
}

// ---------- Sélection ----------
function selectUrls(opts, current, previous) {
  if (opts.urls.length) return { urls: opts.urls, reason: "URLs passées en argument" };
  if (opts.all) return { urls: [...current.keys()], reason: "tout le sitemap (--all)" };

  const byDate = (sinceMs, label) => ({
    urls: [...current].filter(([, d]) => d && Date.parse(d) >= sinceMs).map(([u]) => u),
    reason: label,
  });

  if (opts.since) {
    const since = Date.parse(opts.since);
    if (Number.isNaN(since)) fail(`--since invalide : ${opts.since}`);
    return byDate(since, `lastmod ≥ ${opts.since}`);
  }

  if (previous) {
    const changed = [...current].filter(([u, d]) => !previous.has(u) || previous.get(u) !== d).map(([u]) => u);
    const removed = [...previous.keys()].filter((u) => !current.has(u));
    return {
      urls: [...changed, ...removed],
      reason: `${changed.length} nouvelle(s)/modifiée(s), ${removed.length} disparue(s) du sitemap depuis la dernière exécution`,
    };
  }

  return byDate(Date.now() - opts.window * 86_400_000, `pas d'état précédent → lastmod dans les ${opts.window} derniers jours`);
}

// ---------- Envoi ----------
async function submit(payload) {
  return fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });
}

// ---------- Main ----------
const opts = parseArgs(process.argv.slice(2));
const siteUrl = (process.env.SITE_URL ?? "https://www.astro-cours.com").replace(/\/+$/, "");
const host = new URL(siteUrl).host;
const sitemapUrl = opts.sitemap ?? `${siteUrl}/sitemap.xml`;
const key = await resolveKey(opts.key);
const keyLocation = `${siteUrl}/${key}.txt`;
const stateFile = path.resolve(ROOT, opts.state ?? ".indexnow/state.json");
const explicitSelection = opts.urls.length > 0 || opts.all || Boolean(opts.since);

console.log(`Sitemap   : ${sitemapUrl}`);
const current = await readSitemap(sitemapUrl);
console.log(`Entrées   : ${current.size}`);

const previous = explicitSelection ? null : await loadState(stateFile);
let { urls, reason } = selectUrls(opts, current, previous);

// Garde-fous : même hôte, pas de doublons.
const foreign = urls.filter((u) => {
  try {
    return new URL(u).host !== host;
  } catch {
    return true;
  }
});
if (foreign.length) fail(`URLs hors de ${host} :\n  ${foreign.join("\n  ")}`);
urls = [...new Set(urls)];

console.log(`Sélection : ${urls.length} URL(s) — ${reason}`);
const shown = urls.slice(0, 40);
for (const u of shown) console.log(`  ${u}`);
if (urls.length > shown.length) console.log(`  … et ${urls.length - shown.length} autre(s)`);

const persistState = !opts.dryRun && opts.urls.length === 0;

if (urls.length === 0) {
  console.log("Rien à soumettre.");
  if (persistState) await saveState(stateFile, current);
  process.exit(0);
}

if (opts.dryRun) {
  console.log("(--dry-run : rien n'a été envoyé)");
  process.exit(0);
}

for (let i = 0; i < urls.length; i += MAX_PER_REQUEST) {
  const batch = urls.slice(i, i + MAX_PER_REQUEST);
  const res = await submit({ host, key, keyLocation, urlList: batch });
  const label = STATUS[res.status] ?? `réponse inattendue`;
  console.log(`IndexNow  : HTTP ${res.status} — ${label} (${batch.length} URL(s))`);
  if (res.status !== 200 && res.status !== 202) {
    const body = (await res.text()).trim().slice(0, 300);
    if (body) console.error(body);
    process.exit(1);
  }
}

if (persistState) {
  await saveState(stateFile, current);
  console.log(`État      : ${path.relative(ROOT, stateFile)} mis à jour`);
}
