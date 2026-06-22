/**
 * Localisation des SLUGS de tags de blog — module PUR (aucun import de
 * registre/article), utilisable côté client (SmartLink).
 *
 * Le tag canonique est la chaîne FR ; le slug d'URL est dérivé du libellé
 * traduit. On indexe par slug DANS N'IMPORTE QUELLE langue → triple {fr,en,es},
 * pour pouvoir convertir un slug es/en vers une autre locale (sélecteur de
 * langue, liens croisés).
 */
import TAGS from "@/data/blog-tags.json";

const MAP = TAGS as Record<string, { en: string; es: string }>;

export function tagToSlug(tag: string): string {
  return tag
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

type Loc = "fr" | "en" | "es";
function asLoc(locale: string): Loc {
  return locale === "en" || locale === "es" ? locale : "fr";
}

// N'importe quel slug (fr/en/es) → { fr, en, es }
const BY_ANY_SLUG: Record<string, { fr: string; en: string; es: string }> = {};
for (const [frTag, t] of Object.entries(MAP)) {
  const triple = { fr: tagToSlug(frTag), en: tagToSlug(t.en), es: tagToSlug(t.es) };
  BY_ANY_SLUG[triple.fr] = triple;
  BY_ANY_SLUG[triple.en] = triple;
  BY_ANY_SLUG[triple.es] = triple;
}

/** Slug de tag localisé. Accepte un slug dans n'importe quelle langue. */
export function localizeBlogTagSlug(slug: string, target: string): string {
  const entry = BY_ANY_SLUG[slug];
  return entry ? entry[asLoc(target)] : slug;
}
