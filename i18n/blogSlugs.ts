/**
 * Traduction des SLUGS d'articles de blog.
 * Le slug FR (meta.slug) est canonique ; l'URL localisée utilise le slug traduit.
 *   /blog/venusien · /en/blog/venusian · /es/blog/venusiano
 */

type Triple = { fr: string; en: string; es: string };

const POSTS: Triple[] = [
  { fr: "amour-fidelite-signes-zodiaque", en: "love-fidelity-zodiac-signs", es: "amor-fidelidad-signos-zodiaco" },
  { fr: "astrologie-medicale-renaissance", en: "medical-astrology-renaissance", es: "astrologia-medica-renacimiento" },
  { fr: "chance-jeux-argent-loterie-astrologie", en: "luck-gambling-money-lottery-astrology", es: "suerte-juegos-dinero-loteria-astrologia" },
  { fr: "vendre-une-maison-demenager-astrologie-methodes", en: "selling-house-moving-astrology-methods", es: "vender-casa-mudanza-astrologia-metodos" },
  { fr: "comprendre-signe-astrologique-ascendant-12-exemples", en: "understanding-sun-sign-ascendant-12-examples", es: "entender-signo-ascendente-12-ejemplos" },
  { fr: "conjonction-melange-des-forces", en: "conjunction-blending-of-forces", es: "conjuncion-mezcla-de-fuerzas" },
  { fr: "finances-theme-astral", en: "finances-natal-chart", es: "finanzas-carta-natal" },
  { fr: "jupiterien", en: "jupiterian", es: "jupiteriano" },
  { fr: "longevite-vie-astrologie", en: "longevity-life-astrology", es: "longevidad-vida-astrologia" },
  { fr: "lunarien", en: "lunarian", es: "lunariano" },
  { fr: "manipulateurs-pervers-narcissiques-astrologie", en: "manipulators-narcissists-astrology", es: "manipuladores-narcisistas-astrologia" },
  { fr: "mars-en-signes-desir-libido-action", en: "mars-in-signs-desire-libido-action", es: "marte-en-signos-deseo-libido-accion" },
  { fr: "martien", en: "martian", es: "marciano" },
  { fr: "mercurien", en: "mercurian", es: "mercuriano" },
  { fr: "neptunien", en: "neptunian", es: "neptuniano" },
  { fr: "orientation-professionnelle-theme-astral", en: "career-vocation-natal-chart", es: "orientacion-profesional-carta-natal" },
  { fr: "pleine-lune-nouvelle-lune-cycles-astrologie", en: "full-moon-new-moon-cycles-astrology", es: "luna-llena-luna-nueva-ciclos-astrologia" },
  { fr: "plutonien", en: "plutonian", es: "plutoniano" },
  { fr: "pourquoi-votre-horoscope-ne-vous-ressemble-pas", en: "why-your-horoscope-doesnt-fit-you", es: "por-que-tu-horoscopo-no-te-representa" },
  { fr: "qu-est-ce-qu-un-theme-astral", en: "what-is-a-natal-chart", es: "que-es-una-carta-natal" },
  { fr: "qualites-defauts-12-signes-zodiaque", en: "qualities-flaws-12-zodiac-signs", es: "cualidades-defectos-12-signos-zodiaco" },
  { fr: "quel-type-de-sportif-selon-signe-astrologique", en: "what-type-of-athlete-by-zodiac-sign", es: "que-tipo-de-deportista-segun-signo" },
  { fr: "saturnien", en: "saturnian", es: "saturniano" },
  { fr: "solarien", en: "solarian", es: "solariano" },
  { fr: "ton-signe-astro-selon-ta-facon-de-repondre-aux-messages", en: "your-zodiac-sign-by-how-you-text", es: "tu-signo-segun-como-respondes-mensajes" },
  { fr: "uranien", en: "uranian", es: "uraniano" },
  { fr: "venus-en-signes-style-amoureux", en: "venus-in-signs-love-style", es: "venus-en-signos-estilo-amoroso" },
  { fr: "venusien", en: "venusian", es: "venusiano" },
];

type Loc = "fr" | "en" | "es";
function asLoc(locale: string): Loc {
  return locale === "en" || locale === "es" ? locale : "fr";
}

const CANON: Record<string, string> = {};
const FORWARD: Record<string, Triple> = {};
for (const t of POSTS) {
  CANON[t.fr] = t.fr;
  CANON[t.en] = t.fr;
  CANON[t.es] = t.fr;
  FORWARD[t.fr] = t;
}

/** Slug FR canonique depuis n'importe quel slug (fr/en/es). */
export function canonicalBlogSlug(slug: string): string {
  return CANON[slug] ?? slug;
}

/** Slug localisé pour `target` (entrée canonique ou dans une autre langue). */
export function localizeBlogSlug(slug: string, target: string): string {
  const canon = canonicalBlogSlug(slug);
  const triple = FORWARD[canon];
  return triple ? triple[asLoc(target)] : slug;
}
