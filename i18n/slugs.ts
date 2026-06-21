/**
 * Traduction des SLUGS des pages piliers (signes / planètes / maisons).
 *
 * Le slug FR est le "canonique" (= la donnée et le folder de route sont en FR).
 * Les URL localisées utilisent le slug traduit :
 *   /signes/balance · /en/signs/libra · /es/signos/libra
 *
 * - localizeSlug(type, slugCanoniqueOuAutre, target) → slug pour `target`
 * - canonicalSlug(type, slugQuelconque) → slug FR canonique
 */

export type PillarType = "signes" | "planetes" | "maisons";
type Triple = { fr: string; en: string; es: string };

const SIGNS: Triple[] = [
  { fr: "belier", en: "aries", es: "aries" },
  { fr: "taureau", en: "taurus", es: "tauro" },
  { fr: "gemeaux", en: "gemini", es: "geminis" },
  { fr: "cancer", en: "cancer", es: "cancer" },
  { fr: "lion", en: "leo", es: "leo" },
  { fr: "vierge", en: "virgo", es: "virgo" },
  { fr: "balance", en: "libra", es: "libra" },
  { fr: "scorpion", en: "scorpio", es: "escorpio" },
  { fr: "sagittaire", en: "sagittarius", es: "sagitario" },
  { fr: "capricorne", en: "capricorn", es: "capricornio" },
  { fr: "verseau", en: "aquarius", es: "acuario" },
  { fr: "poissons", en: "pisces", es: "piscis" },
];

const PLANETS: Triple[] = [
  { fr: "soleil", en: "sun", es: "sol" },
  { fr: "lune", en: "moon", es: "luna" },
  { fr: "mercure", en: "mercury", es: "mercurio" },
  { fr: "venus", en: "venus", es: "venus" },
  { fr: "mars", en: "mars", es: "marte" },
  { fr: "jupiter", en: "jupiter", es: "jupiter" },
  { fr: "saturne", en: "saturn", es: "saturno" },
  { fr: "uranus", en: "uranus", es: "urano" },
  { fr: "neptune", en: "neptune", es: "neptuno" },
  { fr: "pluton", en: "pluto", es: "pluton" },
];

const HOUSES: Triple[] = Array.from({ length: 12 }, (_, i) => ({
  fr: `maison-${i + 1}`,
  en: `house-${i + 1}`,
  es: `casa-${i + 1}`,
}));

const TABLES: Record<PillarType, Triple[]> = {
  signes: SIGNS,
  planetes: PLANETS,
  maisons: HOUSES,
};

// Index inverse : n'importe quel slug (fr/en/es) → slug canonique FR.
const CANON: Record<PillarType, Record<string, string>> = {
  signes: {},
  planetes: {},
  maisons: {},
};
(Object.keys(TABLES) as PillarType[]).forEach((type) => {
  for (const t of TABLES[type]) {
    CANON[type][t.fr] = t.fr;
    CANON[type][t.en] = t.fr;
    CANON[type][t.es] = t.fr;
  }
});

const FORWARD: Record<PillarType, Record<string, Triple>> = {
  signes: {},
  planetes: {},
  maisons: {},
};
(Object.keys(TABLES) as PillarType[]).forEach((type) => {
  for (const t of TABLES[type]) FORWARD[type][t.fr] = t;
});

type Loc = "fr" | "en" | "es";
function asLoc(locale: string): Loc {
  return locale === "en" || locale === "es" ? locale : "fr";
}

/** Slug FR canonique à partir d'un slug dans n'importe quelle langue. */
export function canonicalSlug(type: PillarType, slug: string): string {
  return CANON[type][slug] ?? slug;
}

/** Slug localisé pour `target` (entrée canonique ou dans une autre langue). */
export function localizeSlug(type: PillarType, slug: string, target: string): string {
  const canon = canonicalSlug(type, slug);
  const triple = FORWARD[type][canon];
  return triple ? triple[asLoc(target)] : slug;
}

/** Tous les slugs canoniques (FR) d'un type. */
export function canonicalSlugs(type: PillarType): string[] {
  return TABLES[type].map((t) => t.fr);
}

/** Type de pilier depuis un template pathnames ("/signes/[slug]" → "signes"). */
export function pillarTypeFromTemplate(template: string): PillarType | null {
  if (template === "/signes/[slug]") return "signes";
  if (template === "/planetes/[slug]") return "planetes";
  if (template === "/maisons/[slug]") return "maisons";
  return null;
}
