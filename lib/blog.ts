import { posts as posts_fr } from "@/content/blog/posts";
import { posts_en } from "@/content/blog/posts.en";
import { posts_es } from "@/content/blog/posts.es";
import { canonicalBlogSlug, localizeBlogSlug } from "@/i18n/blogSlugs";
import TAGS from "@/data/blog-tags.json";

type Loc = "fr" | "en" | "es";
function asLoc(locale?: string): Loc {
  return locale === "en" || locale === "es" ? locale : "fr";
}
function registry(locale?: string) {
  const l = asLoc(locale);
  return l === "en" ? posts_en : l === "es" ? posts_es : posts_fr;
}

const TAG_MAP = TAGS as Record<string, { en: string; es: string }>;

/**
 * Convertit un libellé lisible en slug d'URL propre (accents retirés,
 * minuscules, espaces → tirets).
 */
export function tagToSlug(tag: string): string {
  return tag
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Libellé d'affichage d'un tag (canonique FR) dans une locale. */
export function tagLabel(tag: string, locale?: string): string {
  const l = asLoc(locale);
  if (l === "fr") return tag;
  return TAG_MAP[tag]?.[l] ?? tag;
}

/** Slug d'URL localisé d'un tag (canonique FR). */
export function tagSlugFor(tag: string, locale?: string): string {
  return tagToSlug(tagLabel(tag, locale));
}

/** Slug d'URL localisé d'un article (depuis son slug canonique FR). */
export function postSlugFor(canonSlug: string, locale?: string): string {
  return localizeBlogSlug(canonSlug, asLoc(locale));
}

export function getAllPosts(locale?: string) {
  return [...registry(locale)].sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));
}

export function getPostBySlug(slug: string, locale?: string) {
  const canon = canonicalBlogSlug(slug);
  return registry(locale).find((p) => p.meta.slug === canon) ?? null;
}

export function getRelatedPosts(currentSlug: string, locale?: string, max = 4) {
  const canon = canonicalBlogSlug(currentSlug);
  const all = getAllPosts(locale);
  const current = all.find((p) => p.meta.slug === canon);
  if (!current) return [];

  const currentTags = new Set(current.meta.tags ?? []);

  const related = all
    .filter((p) => p.meta.slug !== canon)
    .map((p) => {
      const score = (p.meta.tags ?? []).reduce(
        (acc, t) => acc + (currentTags.has(t) ? 1 : 0),
        0,
      );
      return { post: p, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, max)
    .map((x) => x.post);

  if (related.length < max) {
    const taken = new Set([canon, ...related.map((p) => p.meta.slug)]);
    for (const p of all) {
      if (related.length >= max) break;
      if (taken.has(p.meta.slug)) continue;
      related.push(p);
      taken.add(p.meta.slug);
    }
  }

  return related;
}

/* -------------------------------------------------------------------------- */
/*  Tags                                                                       */
/* -------------------------------------------------------------------------- */

export type TagInfo = { tag: string; label: string; slug: string; count: number };

/** Inventaire des tags pour une locale (libellé + slug localisés). */
export function getAllTags(locale?: string): TagInfo[] {
  const map = new Map<string, TagInfo>();
  for (const p of registry(locale)) {
    for (const tag of p.meta.tags ?? []) {
      const slug = tagSlugFor(tag, locale);
      const existing = map.get(slug);
      if (existing) existing.count += 1;
      else map.set(slug, { tag, label: tagLabel(tag, locale), slug, count: 1 });
    }
  }
  return Array.from(map.values()).sort(
    (a, b) => b.count - a.count || a.label.localeCompare(b.label),
  );
}

/** Tag canonique (FR) depuis un slug localisé. */
export function slugToTag(slug: string, locale?: string): string | null {
  return getAllTags(locale).find((t) => t.slug === slug)?.tag ?? null;
}

/** Articles associés à un slug de tag localisé. */
export function getPostsByTagSlug(slug: string, locale?: string) {
  const canon = slugToTag(slug, locale);
  if (!canon) return [];
  return getAllPosts(locale).filter((p) => (p.meta.tags ?? []).includes(canon));
}

/* -------------------------------------------------------------------------- */
/*  Pages de tags « fortes » (indexables) — clé = slug FR canonique du tag    */
/* -------------------------------------------------------------------------- */

type TagPageCopy = { title: string; description: string; h1: string; intro: string };

export const TAG_PAGES: Record<string, Record<Loc, TagPageCopy>> = {
  "theme-astral": {
    fr: {
      title: "Thème astral : comprendre sa carte du ciel",
      description:
        "Tous nos articles sur le thème astral : lecture de la carte du ciel, planètes, maisons et aspects expliqués avec méthode et exemples concrets.",
      h1: "Thème astral",
      intro:
        "Le thème astral est la photographie du ciel à l'instant exact de votre naissance : position des planètes, signes et maisons. Retrouvez ici nos articles pour apprendre à le lire pas à pas et en tirer une interprétation claire.",
    },
    en: {
      title: "Natal chart: understanding your sky map",
      description:
        "All our articles on the natal chart: reading the sky map, planets, houses and aspects explained with method and concrete examples.",
      h1: "Natal chart",
      intro:
        "The natal chart is the photograph of the sky at the exact moment of your birth: the position of the planets, signs and houses. Find here our articles to learn how to read it step by step and draw a clear interpretation from it.",
    },
    es: {
      title: "Carta natal: entender tu mapa del cielo",
      description:
        "Todos nuestros artículos sobre la carta natal: lectura del mapa del cielo, planetas, casas y aspectos explicados con método y ejemplos concretos.",
      h1: "Carta natal",
      intro:
        "La carta natal es la fotografía del cielo en el instante exacto de tu nacimiento: la posición de los planetas, signos y casas. Encuentra aquí nuestros artículos para aprender a leerla paso a paso y extraer de ella una interpretación clara.",
    },
  },
  "psychologie-astrologique": {
    fr: {
      title: "Psychologie astrologique : profils & caractère",
      description:
        "Articles de psychologie astrologique : portraits planétaires, tempéraments et mécanismes intérieurs lus à travers le thème natal.",
      h1: "Psychologie astrologique",
      intro:
        "La psychologie astrologique relie les symboles du thème natal au fonctionnement intérieur : motivations, besoins affectifs, forces et points de tension. Voici nos articles pour mieux se comprendre, signe et planète à la fois.",
    },
    en: {
      title: "Astrological psychology: profiles & character",
      description:
        "Astrological psychology articles: planetary portraits, temperaments and inner mechanisms read through the natal chart.",
      h1: "Astrological psychology",
      intro:
        "Astrological psychology links the symbols of the natal chart to inner workings: motivations, emotional needs, strengths and points of tension. Here are our articles to understand yourself better, one sign and planet at a time.",
    },
    es: {
      title: "Psicología astrológica: perfiles y carácter",
      description:
        "Artículos de psicología astrológica: retratos planetarios, temperamentos y mecanismos internos leídos a través de la carta natal.",
      h1: "Psicología astrológica",
      intro:
        "La psicología astrológica vincula los símbolos de la carta natal con el funcionamiento interior: motivaciones, necesidades afectivas, fuerzas y puntos de tensión. Aquí están nuestros artículos para comprenderse mejor, signo y planeta a la vez.",
    },
  },
  amour: {
    fr: {
      title: "Amour et astrologie : compatibilité et relations",
      description:
        "Astrologie de l'amour : style amoureux, compatibilité des signes, Vénus, Mars et relations décryptés avec méthode.",
      h1: "Amour",
      intro:
        "Comment chacun aime, séduit et s'attache : nos articles explorent l'amour à travers Vénus, Mars et la dynamique des signes, pour éclairer compatibilités et relations sans tomber dans les clichés.",
    },
    en: {
      title: "Love and astrology: compatibility and relationships",
      description:
        "Astrology of love: love style, sign compatibility, Venus, Mars and relationships decoded with method.",
      h1: "Love",
      intro:
        "How each person loves, seduces and bonds: our articles explore love through Venus, Mars and the dynamics of the signs, to shed light on compatibilities and relationships without falling into clichés.",
    },
    es: {
      title: "Amor y astrología: compatibilidad y relaciones",
      description:
        "Astrología del amor: estilo amoroso, compatibilidad de los signos, Venus, Marte y relaciones descifrados con método.",
      h1: "Amor",
      intro:
        "Cómo ama, seduce y se vincula cada uno: nuestros artículos exploran el amor a través de Venus, Marte y la dinámica de los signos, para iluminar compatibilidades y relaciones sin caer en los clichés.",
    },
  },
  "portrait-astrologique": {
    fr: {
      title: "Portrait astrologique : les profils planétaires",
      description:
        "Portraits astrologiques détaillés : solarien, lunarien, martien, vénusien… Comprendre chaque profil planétaire et ses nuances.",
      h1: "Portrait astrologique",
      intro:
        "Chaque planète dominante dessine un profil de personnalité. Cette série de portraits — solarien, lunarien, martien, vénusien et les autres — décrit forces, fragilités et façon d'être propres à chaque type.",
    },
    en: {
      title: "Astrological portrait: the planetary profiles",
      description:
        "Detailed astrological portraits: solarian, lunarian, martian, venusian… Understand each planetary profile and its nuances.",
      h1: "Astrological portrait",
      intro:
        "Each dominant planet draws a personality profile. This series of portraits — solarian, lunarian, martian, venusian and the others — describes the strengths, fragilities and way of being proper to each type.",
    },
    es: {
      title: "Retrato astrológico: los perfiles planetarios",
      description:
        "Retratos astrológicos detallados: solariano, lunariano, marciano, venusiano… Comprender cada perfil planetario y sus matices.",
      h1: "Retrato astrológico",
      intro:
        "Cada planeta dominante dibuja un perfil de personalidad. Esta serie de retratos — solariano, lunariano, marciano, venusiano y los demás — describe las fuerzas, fragilidades y forma de ser propias de cada tipo.",
    },
  },
  bases: {
    fr: {
      title: "Les bases de l'astrologie pour débuter",
      description:
        "Les fondamentaux de l'astrologie expliqués simplement : signes, planètes, maisons et aspects pour bien démarrer.",
      h1: "Les bases de l'astrologie",
      intro:
        "Tout ce qu'il faut pour commencer l'astrologie sur des fondations solides : signes, planètes, maisons et aspects, expliqués avec des mots clairs et des exemples concrets.",
    },
    en: {
      title: "The basics of astrology to get started",
      description:
        "The fundamentals of astrology explained simply: signs, planets, houses and aspects to get off to a good start.",
      h1: "The basics of astrology",
      intro:
        "Everything you need to start astrology on solid foundations: signs, planets, houses and aspects, explained with clear words and concrete examples.",
    },
    es: {
      title: "Las bases de la astrología para empezar",
      description:
        "Los fundamentos de la astrología explicados de forma sencilla: signos, planetas, casas y aspectos para empezar bien.",
      h1: "Las bases de la astrología",
      intro:
        "Todo lo necesario para empezar la astrología sobre cimientos sólidos: signos, planetas, casas y aspectos, explicados con palabras claras y ejemplos concretos.",
    },
  },
  vocation: {
    fr: {
      title: "Vocation et orientation dans le thème astral",
      description:
        "Astrologie de la vocation : repérer talents, métier et orientation professionnelle à partir du thème natal (maison X, milieu du ciel).",
      h1: "Vocation",
      intro:
        "Le thème natal donne des indices précieux sur la vocation : maison X, milieu du ciel et planètes dominantes orientent vers un métier aligné. Nos articles aident à décoder ces signatures professionnelles.",
    },
    en: {
      title: "Vocation and direction in the natal chart",
      description:
        "Astrology of vocation: spotting talents, career and professional direction from the natal chart (house X, Midheaven).",
      h1: "Vocation",
      intro:
        "The natal chart gives valuable clues about vocation: house X, the Midheaven and the dominant planets point toward an aligned career. Our articles help decode these professional signatures.",
    },
    es: {
      title: "Vocación y orientación en la carta natal",
      description:
        "Astrología de la vocación: detectar talentos, profesión y orientación profesional a partir de la carta natal (casa X, Medio Cielo).",
      h1: "Vocación",
      intro:
        "La carta natal da pistas valiosas sobre la vocación: la casa X, el Medio Cielo y los planetas dominantes orientan hacia una profesión alineada. Nuestros artículos ayudan a descifrar estas firmas profesionales.",
    },
  },
  signe: {
    fr: {
      title: "Signes du zodiaque : traits et interprétation",
      description:
        "Les signes du zodiaque décryptés : qualités, défauts, nuances et façon de les interpréter dans un thème astral.",
      h1: "Signes du zodiaque",
      intro:
        "Au-delà du signe solaire, chaque signe du zodiaque porte une couleur, des qualités et des pièges. Retrouvez ici nos articles pour les comprendre finement et les replacer dans l'ensemble du thème.",
    },
    en: {
      title: "Zodiac signs: traits and interpretation",
      description:
        "The zodiac signs decoded: qualities, flaws, nuances and how to interpret them in a natal chart.",
      h1: "Zodiac signs",
      intro:
        "Beyond the sun sign, each zodiac sign carries a color, qualities and pitfalls. Find here our articles to understand them finely and place them back within the whole chart.",
    },
    es: {
      title: "Signos del zodíaco: rasgos e interpretación",
      description:
        "Los signos del zodíaco descifrados: cualidades, defectos, matices y cómo interpretarlos en una carta natal.",
      h1: "Signos del zodíaco",
      intro:
        "Más allá del signo solar, cada signo del zodíaco lleva un color, cualidades y trampas. Encuentra aquí nuestros artículos para comprenderlos con finura y situarlos dentro del conjunto de la carta.",
    },
  },
};

/** Config localisée d'une page de tag depuis son slug localisé. */
export function getTagPageConfig(localizedSlug: string, locale?: string) {
  const canon = slugToTag(localizedSlug, locale);
  if (!canon) return null;
  const frSlug = tagToSlug(canon);
  const entry = TAG_PAGES[frSlug];
  return entry ? { copy: entry[asLoc(locale)], indexable: true } : null;
}

export function isIndexableTag(localizedSlug: string, locale?: string): boolean {
  const canon = slugToTag(localizedSlug, locale);
  if (!canon) return false;
  return Object.prototype.hasOwnProperty.call(TAG_PAGES, tagToSlug(canon));
}
