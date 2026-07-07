import type { MetadataRoute } from "next";
import maisons from "@/data/maisons.details.json";
import planetes from "@/data/planetes.details.json";
import signes from "@/data/signes.details.json";
import { getAllPosts, getPostsByTagSlug, postSlugFor, TAG_PAGES } from "@/lib/blog";
import { localeUrl, localizedPathUrl, pillarUrl, type SeoLocale } from "@/lib/seo";
import { localizeBlogTagSlug } from "@/i18n/blogTagSlugs";

const LOCALES: SeoLocale[] = ["fr", "en", "es"];

type SitemapEntry = {
  /** URL absolue localisée pour une locale donnée (segment ET slug traduits). */
  url: (loc: SeoLocale) => string;
  lastModified: Date;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
};

/**
 * Décline chaque entrée dans les 3 langues (FR racine, EN/ES préfixés),
 * avec les balises hreflang (alternates.languages) pointant sur les URL
 * réellement localisées (segment + slug) — alignées sur les canoniques.
 */
function expand(entries: SitemapEntry[]): MetadataRoute.Sitemap {
  const out: MetadataRoute.Sitemap = [];
  for (const e of entries) {
    const languages = {
      "fr-FR": e.url("fr"),
      "en-US": e.url("en"),
      "es-ES": e.url("es"),
      "x-default": e.url("fr"),
    };
    for (const loc of LOCALES) {
      out.push({
        url: e.url(loc),
        lastModified: e.lastModified,
        changeFrequency: e.changeFrequency,
        priority: e.priority,
        alternates: { languages },
      });
    }
  }
  return out;
}

type House = { slug: string; updated?: string };
type Planet = { slug: string; updated?: string };
type Sign = { slug: string; updated?: string };

/**
 * Dates de dernière modification fonctionnelle (PAS un timestamp de build).
 * À mettre à jour manuellement quand une page change de manière significative.
 * Format ISO 8601.
 *
 * Pourquoi pas `new Date()` partout ? Google considérait toutes les pages
 * comme modifiées à chaque crawl → bruit, perte du signal de fraîcheur sur
 * les vraies mises à jour. Audit du 31 mai 2026 — W2.
 */
const STATIC_PAGE_DATES: Record<string, string> = {
  "": "2026-05-31",
  blog: "2026-05-27",
  // Hubs piliers (audit SEO 07/2026)
  signes: "2026-07-07",
  maisons: "2026-07-07",
  planetes: "2026-07-07",
  "theme-astral": "2026-07-07",
  aspects: "2026-05-08",
  transits: "2026-05-08",
  "points-fictifs": "2026-04-22",
  "noeuds-lunaires": "2026-04-22",
  lilith: "2026-04-22",
  maitrises: "2026-04-22",
  retrogrades: "2026-04-22",
  synastrie: "2026-05-08",
  "astrologie-horaire": "2026-06-13",
  "astrologie-medicale": "2026-06-13",
  "astrologie-mondiale": "2026-06-26",
  "maisons-dominantes": "2026-06-26",
  "signes-dominants": "2026-06-26",
  significateurs: "2026-06-13",
  "astro-psychologie": "2026-06-13",
  "revolution-solaire": "2026-04-22",
  asteroides: "2026-04-22",
  "cuspides-des-maisons": "2026-04-22",
  "les-decans": "2026-04-22",
  "maisons-derivees": "2026-04-22",
  confidentialite: "2026-04-22",
  "mentions-legales": "2026-04-22",
  "dictionnaire-astrologique": "2026-05-15",
  "a-propos": "2026-05-15",
  "auteur/stephane-gamot": "2026-05-15",
};

/** Date de mise à jour de la collection (fallback si pas de `updated` par entité). */
const COLLECTION_DATES = {
  maisons: "2026-05-31",
  signes: "2026-05-08",
  planetes: "2026-05-08",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: SitemapEntry[] = Object.entries(STATIC_PAGE_DATES).map(
    ([page, date]) => {
      const internalPath = page === "" ? "/" : `/${page}`;
      return {
        url: (loc: SeoLocale) => localizedPathUrl(internalPath, loc),
        lastModified: new Date(date),
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority:
          page === ""
            ? 1.0
            : ["blog", "signes", "maisons", "planetes", "theme-astral"].includes(page)
              ? 0.9
              : 0.5,
      };
    },
  );

  const houseRoutes: SitemapEntry[] = (maisons as House[]).map((h) => ({
    url: (loc: SeoLocale) => pillarUrl("maisons", h.slug, loc),
    lastModified: new Date(h.updated ?? COLLECTION_DATES.maisons),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const planetRoutes: SitemapEntry[] = (planetes as Planet[]).map((p) => ({
    url: (loc: SeoLocale) => pillarUrl("planetes", p.slug, loc),
    lastModified: new Date(p.updated ?? COLLECTION_DATES.planetes),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const signRoutes: SitemapEntry[] = (signes as Sign[]).map((s) => ({
    url: (loc: SeoLocale) => pillarUrl("signes", s.slug, loc),
    lastModified: new Date(s.updated ?? COLLECTION_DATES.signes),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const postRoutes: SitemapEntry[] = getAllPosts().map((p) => ({
    url: (loc: SeoLocale) => localeUrl(loc, `/blog/${postSlugFor(p.meta.slug, loc)}`),
    lastModified: new Date(p.meta.date),
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  // ✅ Pages de tags indexables uniquement (TAG_PAGES). Les tags « fins »
  //    restent en noindex et ne figurent pas dans le sitemap.
  //    lastModified = date de l'article le plus récent du tag.
  const tagRoutes: SitemapEntry[] = Object.keys(TAG_PAGES).map((slug) => {
    const posts = getPostsByTagSlug(slug, "fr");
    const latest = posts[0]?.meta.date;
    return {
      url: (loc: SeoLocale) => localeUrl(loc, `/blog/tag/${localizeBlogTagSlug(slug, loc)}`),
      lastModified: new Date(latest ?? COLLECTION_DATES.maisons),
      changeFrequency: "monthly",
      priority: 0.6,
    };
  });

  return expand([
    ...staticRoutes,
    ...houseRoutes,
    ...planetRoutes,
    ...signRoutes,
    ...postRoutes,
    ...tagRoutes,
  ]);
}
