import { getAllPosts } from "@/lib/blog";

/**
 * Maillage descendant piliers → blog (audit SEO 07/2026).
 *
 * Avant : aucune page maison/signe/planète ne linkait le blog ; les
 * articles ne recevaient d'autorité que du footer « Derniers articles ».
 * Ce module fournit un mapping ÉDITORIAL (curation manuelle, stable)
 * entité → slugs canoniques FR d'articles pertinents.
 *
 * À maintenir : lors de la publication d'un article lié à une entité,
 * ajouter son slug ici.
 */

/** Planète → articles (portrait planétaire d'abord). */
const PLANET_ARTICLES: Record<string, string[]> = {
  soleil: ["solarien", "qu-est-ce-qu-un-theme-astral", "pourquoi-votre-horoscope-ne-vous-ressemble-pas"],
  lune: ["lunarien", "pleine-lune-nouvelle-lune-cycles-astrologie", "manipulateurs-pervers-narcissiques-astrologie"],
  mercure: ["mercurien", "ton-signe-astro-selon-ta-facon-de-repondre-aux-messages", "qualites-defauts-12-signes-zodiaque"],
  venus: ["venusien", "venus-en-signes-style-amoureux", "amour-fidelite-signes-zodiaque"],
  mars: ["martien", "mars-en-signes-desir-libido-action", "quel-type-de-sportif-selon-signe-astrologique"],
  jupiter: ["jupiterien", "chance-jeux-argent-loterie-astrologie", "finances-theme-astral"],
  saturne: ["saturnien", "longevite-vie-astrologie", "orientation-professionnelle-theme-astral"],
  uranus: ["uranien", "pourquoi-votre-horoscope-ne-vous-ressemble-pas", "conjonction-melange-des-forces"],
  neptune: ["neptunien", "manipulateurs-pervers-narcissiques-astrologie", "astrologie-medicale-renaissance"],
  pluton: ["plutonien", "longevite-vie-astrologie", "manipulateurs-pervers-narcissiques-astrologie"],
};

/** Maison (slug maison-N) → articles thématiques. */
const HOUSE_ARTICLES: Record<string, string[]> = {
  "maison-1": ["comprendre-signe-astrologique-ascendant-12-exemples", "qu-est-ce-qu-un-theme-astral", "qualites-defauts-12-signes-zodiaque"],
  "maison-2": ["finances-theme-astral", "chance-jeux-argent-loterie-astrologie"],
  "maison-3": ["ton-signe-astro-selon-ta-facon-de-repondre-aux-messages", "mercurien"],
  "maison-4": ["vendre-une-maison-demenager-astrologie-methodes", "lunarien"],
  "maison-5": ["amour-fidelite-signes-zodiaque", "chance-jeux-argent-loterie-astrologie", "solarien"],
  "maison-6": ["quel-type-de-sportif-selon-signe-astrologique", "longevite-vie-astrologie", "astrologie-medicale-renaissance"],
  "maison-7": ["amour-fidelite-signes-zodiaque", "venus-en-signes-style-amoureux", "manipulateurs-pervers-narcissiques-astrologie"],
  "maison-8": ["longevite-vie-astrologie", "finances-theme-astral", "plutonien"],
  "maison-9": ["qu-est-ce-qu-un-theme-astral", "astrologie-medicale-renaissance", "jupiterien"],
  "maison-10": ["orientation-professionnelle-theme-astral", "finances-theme-astral", "saturnien"],
  "maison-11": ["ton-signe-astro-selon-ta-facon-de-repondre-aux-messages", "uranien"],
  "maison-12": ["manipulateurs-pervers-narcissiques-astrologie", "astrologie-medicale-renaissance", "neptunien"],
};

/** Signe → portrait de sa planète maîtresse (maillage maître ↔ signe). */
const SIGN_RULER_PORTRAIT: Record<string, string> = {
  belier: "martien",
  taureau: "venusien",
  gemeaux: "mercurien",
  cancer: "lunarien",
  lion: "solarien",
  vierge: "mercurien",
  balance: "venusien",
  scorpion: "plutonien",
  sagittaire: "jupiterien",
  capricorne: "saturnien",
  verseau: "uranien",
  poissons: "neptunien",
};

/** Articles génériques pertinents pour toutes les pages signes. */
const SIGN_GENERIC: string[] = [
  "qualites-defauts-12-signes-zodiaque",
  "comprendre-signe-astrologique-ascendant-12-exemples",
  "pourquoi-votre-horoscope-ne-vous-ressemble-pas",
];

export type PillarKind = "planetes" | "maisons" | "signes";

/** Slugs canoniques d'articles pour une entité pilier. */
export function articleSlugsForPillar(kind: PillarKind, slug: string): string[] {
  if (kind === "planetes") return PLANET_ARTICLES[slug] ?? [];
  if (kind === "maisons") return HOUSE_ARTICLES[slug] ?? [];
  const ruler = SIGN_RULER_PORTRAIT[slug];
  return ruler ? [ruler, ...SIGN_GENERIC] : SIGN_GENERIC;
}

/** Posts (métadonnées localisées) pour une entité pilier, ordre du mapping. */
export function getArticlesForPillar(kind: PillarKind, slug: string, locale?: string, max = 3) {
  const wanted = articleSlugsForPillar(kind, slug);
  const all = getAllPosts(locale);
  return wanted
    .map((s) => all.find((p) => p.meta.slug === s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .slice(0, max);
}
