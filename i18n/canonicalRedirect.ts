/**
 * Redirection 308 « slug dans une autre langue → slug localisé canonique »,
 * calculée dans le proxy AVANT tout rendu.
 *
 * PROBLÈME (Search Console, 28/09/2026) : les pages /blog/[slug],
 * /blog/tag/[slug], /signes|planetes|maisons/[slug] appellent
 * permanentRedirect() quand le slug n'est pas celui de la locale
 * (ex : /blog/plutonian, /en/signs/belier, /blog/tag/sign). Ces slugs ne sont
 * pas prérendus : le redirect() survient pendant le streaming et Next ne peut
 * plus émettre de 3xx → page 200 + <meta http-equiv="refresh">, avec en plus
 * un canonical hérité du layout (l'ACCUEIL) sur les pages de tags. Google les
 * classe en « Autre page avec balise canonique correcte » ou « Explorée,
 * actuellement non indexée ».
 *
 * SOLUTION : même principe que compatibilityRedirects() (next.config.mjs),
 * mais en réutilisant les tables de slugs existantes (source unique de vérité).
 * Les permanentRedirect() des pages restent en filet de sécurité.
 *
 * Module PUR (aucun accès fs/serveur).
 */
import { routing } from "@/i18n/routing";
import { localizeSlug, type PillarType } from "@/i18n/slugs";
import { localizeBlogSlug } from "@/i18n/blogSlugs";
import { isKnownBlogTagSlug, localizeBlogTagSlug, tagToSlug } from "@/i18n/blogTagSlugs";

type Loc = "fr" | "en" | "es";

const PILLAR_TEMPLATES: Record<string, PillarType> = {
  "/signes/[slug]": "signes",
  "/planetes/[slug]": "planetes",
  "/maisons/[slug]": "maisons",
};

/** Segment d'URL localisé (« signs », « casas »…) → type de pilier, par locale. */
const PILLAR_SEGMENTS: Record<Loc, Record<string, PillarType>> = { fr: {}, en: {}, es: {} };
for (const [template, type] of Object.entries(PILLAR_TEMPLATES)) {
  const entry = (routing.pathnames as Record<string, string | Record<Loc, string>>)[template];
  for (const loc of ["fr", "en", "es"] as Loc[]) {
    const localized = typeof entry === "string" ? entry : entry[loc];
    const segment = localized.split("/").filter(Boolean)[0];
    PILLAR_SEGMENTS[loc][segment] = type;
  }
}

/**
 * Renvoie le chemin canonique si `pathname` utilise le slug d'une autre
 * langue, sinon null. `pathname` est le chemin PUBLIC (FR sans préfixe,
 * EN/ES préfixés : /en/…, /es/…).
 */
function splitLocale(pathname: string): { loc: Loc; prefix: string } {
  const m = pathname.match(/^\/(en|es)(?=\/|$)/);
  const loc: Loc = m ? (m[1] as Loc) : "fr";
  return { loc, prefix: m ? `/${loc}` : "" };
}

/**
 * Anciennes URL de filtre /blog?tag=… (encore explorées par Google) → 308
 * vers la page de tag localisée, ou vers /blog si le tag est inconnu.
 * Remplace le permanentRedirect() de la page /blog (même souci de meta refresh).
 */
export function legacyBlogTagRedirect(pathname: string, rawTag: string): string | null {
  const { loc, prefix } = splitLocale(pathname);
  if (pathname !== `${prefix}/blog`) return null;
  const slug = tagToSlug(rawTag);
  return slug && isKnownBlogTagSlug(slug)
    ? `${prefix}/blog/tag/${localizeBlogTagSlug(slug, loc)}`
    : `${prefix}/blog`;
}

export function canonicalSlugRedirect(pathname: string): string | null {
  const { loc, prefix } = splitLocale(pathname);
  const parts = pathname.slice(prefix.length).split("/").filter(Boolean);

  let target: string[] | null = null;

  if (parts.length === 2 && parts[0] === "blog") {
    const slug = localizeBlogSlug(parts[1], loc);
    if (slug !== parts[1]) target = ["blog", slug];
  } else if (parts.length === 3 && parts[0] === "blog" && parts[1] === "tag") {
    const slug = localizeBlogTagSlug(parts[2], loc);
    if (slug !== parts[2]) target = ["blog", "tag", slug];
  } else if (parts.length === 2) {
    const type = PILLAR_SEGMENTS[loc][parts[0]];
    if (type) {
      const slug = localizeSlug(type, parts[1], loc);
      if (slug !== parts[1]) target = [parts[0], slug];
    }
  }

  return target ? `${prefix}/${target.join("/")}` : null;
}
