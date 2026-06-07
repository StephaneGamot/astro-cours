import { posts } from "@/content/blog/posts";

/**
 * Convertit un tag lisible ("maison VIII", "thème astral") en slug d'URL
 * propre ("maison-viii", "theme-astral") : accents retirés, minuscules,
 * espaces → tirets. Évite les %20 dans /blog?tag= (audit Screaming Frog).
 */
export function tagToSlug(tag: string): string {
  return tag
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getAllPosts() {
  return [...posts].sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));
}

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.meta.slug === slug) ?? null;
}

export function getRelatedPosts(currentSlug: string, max = 4) {
  const posts = getAllPosts();
  const current = posts.find((p) => p.meta.slug === currentSlug);
  if (!current) return [];

  const currentTags = new Set(current.meta.tags ?? []);

  return posts
    .filter((p) => p.meta.slug !== currentSlug)
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
}

/* -------------------------------------------------------------------------- */
/*  Tags                                                                       */
/* -------------------------------------------------------------------------- */

export type TagInfo = { tag: string; slug: string; count: number };

/** Inventaire de tous les tags (libellé lisible + slug + nombre d'articles). */
export function getAllTags(): TagInfo[] {
  const map = new Map<string, TagInfo>();
  for (const p of posts) {
    for (const tag of p.meta.tags ?? []) {
      const slug = tagToSlug(tag);
      const existing = map.get(slug);
      if (existing) existing.count += 1;
      else map.set(slug, { tag, slug, count: 1 });
    }
  }
  return Array.from(map.values()).sort(
    (a, b) => b.count - a.count || a.tag.localeCompare(b.tag, "fr"),
  );
}

/** Retrouve le libellé lisible d'un tag à partir de son slug d'URL. */
export function slugToTag(slug: string): string | null {
  return getAllTags().find((t) => t.slug === slug)?.tag ?? null;
}

/** Articles associés à un slug de tag, triés par date décroissante. */
export function getPostsByTagSlug(slug: string) {
  return getAllPosts().filter((p) =>
    (p.meta.tags ?? []).some((t) => tagToSlug(t) === slug),
  );
}

/**
 * Pages de tags « fortes » : assez d'articles pour être de vraies pages de
 * destination indexables (H1 + intro propres), sans thin content.
 * Les autres tags restent en noindex + canonical → /blog.
 * Seuls les slugs présents ici sont indexables.
 */
export const TAG_PAGES: Record<
  string,
  { title: string; description: string; h1: string; intro: string }
> = {
  "theme-astral": {
    title: "Thème astral : comprendre sa carte du ciel",
    description:
      "Tous nos articles sur le thème astral : lecture de la carte du ciel, planètes, maisons et aspects expliqués avec méthode et exemples concrets.",
    h1: "Thème astral",
    intro:
      "Le thème astral est la photographie du ciel à l’instant exact de votre naissance : position des planètes, signes et maisons. Retrouvez ici nos articles pour apprendre à le lire pas à pas et en tirer une interprétation claire.",
  },
  "psychologie-astrologique": {
    title: "Psychologie astrologique : profils et personnalité",
    description:
      "Articles de psychologie astrologique : portraits planétaires, tempéraments et mécanismes intérieurs lus à travers le thème natal.",
    h1: "Psychologie astrologique",
    intro:
      "La psychologie astrologique relie les symboles du thème natal au fonctionnement intérieur : motivations, besoins affectifs, forces et points de tension. Voici nos articles pour mieux se comprendre, signe et planète à la fois.",
  },
  amour: {
    title: "Amour et astrologie : compatibilité et relations",
    description:
      "Astrologie de l’amour : style amoureux, compatibilité des signes, Vénus, Mars et relations décryptés avec méthode.",
    h1: "Amour",
    intro:
      "Comment chacun aime, séduit et s’attache : nos articles explorent l’amour à travers Vénus, Mars et la dynamique des signes, pour éclairer compatibilités et relations sans tomber dans les clichés.",
  },
  "portrait-astrologique": {
    title: "Portrait astrologique : les profils planétaires",
    description:
      "Portraits astrologiques détaillés : solarien, lunarien, martien, vénusien… Comprendre chaque profil planétaire et ses nuances.",
    h1: "Portrait astrologique",
    intro:
      "Chaque planète dominante dessine un profil de personnalité. Cette série de portraits — solarien, lunarien, martien, vénusien et les autres — décrit forces, fragilités et façon d’être propres à chaque type.",
  },
  bases: {
    title: "Les bases de l’astrologie pour débuter",
    description:
      "Les fondamentaux de l’astrologie expliqués simplement : signes, planètes, maisons et aspects pour bien démarrer.",
    h1: "Les bases de l’astrologie",
    intro:
      "Tout ce qu’il faut pour commencer l’astrologie sur des fondations solides : signes, planètes, maisons et aspects, expliqués avec des mots clairs et des exemples concrets.",
  },
  vocation: {
    title: "Vocation et orientation dans le thème astral",
    description:
      "Astrologie de la vocation : repérer talents, métier et orientation professionnelle à partir du thème natal (maison X, milieu du ciel).",
    h1: "Vocation",
    intro:
      "Le thème natal donne des indices précieux sur la vocation : maison X, milieu du ciel et planètes dominantes orientent vers un métier aligné. Nos articles aident à décoder ces signatures professionnelles.",
  },
  signe: {
    title: "Signes du zodiaque : traits et interprétation",
    description:
      "Les signes du zodiaque décryptés : qualités, défauts, nuances et façon de les interpréter dans un thème astral.",
    h1: "Signes du zodiaque",
    intro:
      "Au-delà du signe solaire, chaque signe du zodiaque porte une couleur, des qualités et des pièges. Retrouvez ici nos articles pour les comprendre finement et les replacer dans l’ensemble du thème.",
  },
};

export function isIndexableTag(slug: string): boolean {
  return Object.prototype.hasOwnProperty.call(TAG_PAGES, slug);
}
