/* ================================================================== */
/*  Loader — Dictionnaire astrologique                                */
/*  Fusionne les 26 fichiers JSON (A–Z) de data/dictionnaire/        */
/* ================================================================== */

import A from "@/data/dictionnaire/A.json";
import B from "@/data/dictionnaire/B.json";
import C from "@/data/dictionnaire/C.json";
import D from "@/data/dictionnaire/D.json";
import E from "@/data/dictionnaire/E.json";
import F from "@/data/dictionnaire/F.json";
import G from "@/data/dictionnaire/G.json";
import H from "@/data/dictionnaire/H.json";
import I from "@/data/dictionnaire/I.json";
import J from "@/data/dictionnaire/J.json";
import K from "@/data/dictionnaire/K.json";
import L from "@/data/dictionnaire/L.json";
import M from "@/data/dictionnaire/M.json";
import N from "@/data/dictionnaire/N.json";
import O from "@/data/dictionnaire/O.json";
import P from "@/data/dictionnaire/P.json";
import Q from "@/data/dictionnaire/Q.json";
import R from "@/data/dictionnaire/R.json";
import S from "@/data/dictionnaire/S.json";
import T from "@/data/dictionnaire/T.json";
import U from "@/data/dictionnaire/U.json";
import V from "@/data/dictionnaire/V.json";
import W from "@/data/dictionnaire/W.json";
import X from "@/data/dictionnaire/X.json";
import Y from "@/data/dictionnaire/Y.json";
import Z from "@/data/dictionnaire/Z.json";

/* ── Types ── */
export type DictCategory =
  | "planète"
  | "signe"
  | "maison"
  | "aspect"
  | "concept"
  | "point fictif"
  | "technique"
  | "personnalité"
  | "astronomique"
  | "branche"
  | "constellation"
  | "personnage";

export interface DictEntry {
  term: string;
  slug: string;
  category: DictCategory;
  short: string;
  body: string;
  related?: string[];
  seeAlso?: string;
}

/* ── Fusion ── */
const ALL_RAW = [
  ...A,
  ...B,
  ...C,
  ...D,
  ...E,
  ...F,
  ...G,
  ...H,
  ...I,
  ...J,
  ...K,
  ...L,
  ...M,
  ...N,
  ...O,
  ...P,
  ...Q,
  ...R,
  ...S,
  ...T,
  ...U,
  ...V,
  ...W,
  ...X,
  ...Y,
  ...Z,
] as DictEntry[];

/** Toutes les entrées triées alphabétiquement (français). */
export const ENTRIES: DictEntry[] = ALL_RAW.sort((a, b) =>
  a.term.localeCompare(b.term, "fr", { sensitivity: "base" }),
);

/* ================================================================== */
/*  i18n — overlay par locale + résolution des liens « voir aussi »   */
/* ================================================================== */

import fs from "fs";
import path from "path";

/** Entrée enrichie : slug canonique + slugs des termes liés (langue-agnostiques). */
export interface DictEntryLocalized extends DictEntry {
  relatedSlugs: string[];
}

/** Slug canonique d'un nom de terme (même algo que l'ancien rendu client). */
function slugifyName(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

/** Map nom FR normalisé → slug canonique (pour résoudre les `related`). */
const FR_NAME_TO_SLUG = new Map<string, string>();
const FR_SLUGS = new Set<string>();
for (const e of ENTRIES) {
  FR_NAME_TO_SLUG.set(slugifyName(e.term), e.slug);
  FR_SLUGS.add(e.slug);
}

/** Résout les `related` (noms FR) en slugs canoniques valides. */
function resolveRelatedSlugs(entry: DictEntry): string[] {
  const out: string[] = [];
  for (const name of entry.related ?? []) {
    const s = FR_NAME_TO_SLUG.get(slugifyName(name)) ?? slugifyName(name);
    if (FR_SLUGS.has(s) && !out.includes(s)) out.push(s);
  }
  return out;
}

const dictCache = new Map<string, DictEntryLocalized[]>();

/**
 * Entrées du dictionnaire pour une locale.
 * FR = source ; en/es = overlay (term/short/body traduits) par slug, fallback FR.
 * relatedSlugs est dérivé du FR → liens « voir aussi » stables quelle que soit
 * la langue (pas de dépendance à la cohérence des traductions de noms).
 */
export function getDictForLocale(locale?: string): DictEntryLocalized[] {
  const loc = locale === "en" || locale === "es" ? locale : "fr";
  const cached = dictCache.get(loc);
  if (cached) return cached;

  let entries: DictEntryLocalized[];

  if (loc === "fr") {
    entries = ENTRIES.map((e) => ({ ...e, relatedSlugs: resolveRelatedSlugs(e) }));
  } else {
    // Overlay : on lit les 26 fichiers traduits et on fusionne par slug.
    const bySlug = new Map<string, Partial<DictEntry>>();
    const dir = path.join(process.cwd(), "data", loc, "dictionnaire");
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    for (const L of letters) {
      const file = path.join(dir, `${L}.json`);
      if (!fs.existsSync(file)) continue;
      try {
        const arr = JSON.parse(fs.readFileSync(file, "utf-8")) as DictEntry[];
        for (const t of arr) if (t?.slug) bySlug.set(t.slug, t);
      } catch {
        /* fichier absent/illisible → fallback FR */
      }
    }
    entries = ENTRIES.map((e) => {
      const tr = bySlug.get(e.slug);
      return {
        ...e,
        term: tr?.term ?? e.term,
        short: tr?.short ?? e.short,
        body: tr?.body ?? e.body,
        relatedSlugs: resolveRelatedSlugs(e),
      };
    });
  }

  // Tri alphabétique sur le terme localisé.
  entries.sort((a, b) => a.term.localeCompare(b.term, loc, { sensitivity: "base" }));
  dictCache.set(loc, entries);
  return entries;
}

/** Regroupe les entrées par première lettre. */
export function groupByLetter(entries: DictEntry[] = ENTRIES) {
  const groups: Record<string, DictEntry[]> = {};
  for (const e of entries) {
    const letter = e.term
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .charAt(0)
      .toUpperCase();
    if (!groups[letter]) groups[letter] = [];
    groups[letter].push(e);
  }
  return groups;
}
