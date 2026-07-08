import { localizeSlug, canonicalSlug } from "@/i18n/slugs";
import { routing } from "@/i18n/routing";
import { SITE_URL, type SeoLocale } from "@/lib/seo";

/**
 * Pages « compatibilité amoureuse [signe] + [signe] » (audit SEO 07/2026).
 *
 * - Le slug de paire est `${signeA}-${signeB}` avec les slugs de signes
 *   LOCALISÉS (fr: belier-lion · en: aries-leo · es: aries-leo).
 *   Aucun slug de signe ne contient de tiret, dans aucune langue, donc le
 *   découpage est non ambigu.
 * - La clé canonique d'une paire est le couple FR ordonné selon PAIRS.
 * - Pour ajouter une paire : ajouter la clé ici + son contenu dans
 *   app/[locale]/compatibilite/pairs/.
 */

/** Paires publiées (slugs FR canoniques, ordre éditorial fixe). */
export const PAIRS: [string, string][] = [
  ["belier", "lion"],
  ["taureau", "cancer"],
  ["gemeaux", "balance"],
  ["cancer", "scorpion"],
  ["scorpion", "poissons"],
];

export function pairKey(a: string, b: string): string {
  return `${a}-${b}`;
}

/** Slug d'URL localisé d'une paire canonique. */
export function pairSlugFor(a: string, b: string, locale: SeoLocale): string {
  return `${localizeSlug("signes", a, locale)}-${localizeSlug("signes", b, locale)}`;
}

/**
 * Slug de paire (dans n'importe quelle langue) → clé canonique FR, ou null.
 * Essaie chaque position de tiret ; les deux moitiés doivent être des slugs
 * de signes valides et la paire doit être publiée.
 */
export function canonicalPairFromSlug(slug: string): [string, string] | null {
  const parts = slug.split("-");
  for (let i = 1; i < parts.length; i++) {
    const left = parts.slice(0, i).join("-");
    const right = parts.slice(i).join("-");
    const a = canonicalSlug("signes", left);
    const b = canonicalSlug("signes", right);
    if (!a || !b) continue;
    if (PAIRS.some(([pa, pb]) => pa === a && pb === b)) return [a, b];
    // Ordre inversé accepté → on renvoie l'ordre canonique (redirect côté page).
    if (PAIRS.some(([pa, pb]) => pa === b && pb === a)) return [b, a];
  }
  return null;
}

/** Segment localisé de la route hub (ex: /compatibilite, /compatibility). */
function hubSegment(locale: SeoLocale): string {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const p = (routing.pathnames as any)["/compatibilite"];
  return typeof p === "string" ? p : p?.[locale] ?? "/compatibilite";
}

/** URL absolue localisée d'une page paire. */
export function pairUrl(a: string, b: string, locale: SeoLocale): string {
  const seg = `${hubSegment(locale)}/${pairSlugFor(a, b, locale)}`;
  return locale === "fr" ? `${SITE_URL}${seg}` : `${SITE_URL}/${locale}${seg}`;
}

/** hreflang complet (fr/en/es + x-default) pour une paire. */
export function pairLanguageAlternates(a: string, b: string): Record<string, string> {
  return {
    "fr-FR": pairUrl(a, b, "fr"),
    "en-US": pairUrl(a, b, "en"),
    "es-ES": pairUrl(a, b, "es"),
    "x-default": pairUrl(a, b, "fr"),
  };
}
