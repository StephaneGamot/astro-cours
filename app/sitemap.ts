import type { MetadataRoute } from "next";
import maisons from "@/data/maisons.details.json";
import planetes from "@/data/planetes.details.json";
import signes from "@/data/signes.details.json";
import { getAllPosts } from "@/lib/blog";

type House = { slug: string };
type Planet = { slug: string };
type Sign = { slug: string };

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.astro-cours.com";
  const now = new Date();

  // Pages statiques
  const staticPages = [
    "",
    "blog",
    "aspects",
    "transits",
    "points-fictifs",
    "noeuds-lunaires",
    "lilith",
    "maitrises",
    "retrogrades",
    "synastrie",
    "revolution-solaire",
    "asteroides",
    "cuspides-des-maisons",
    "les-decans",
    "maisons-derivees",
    "confidentialite",
    "mentions-legales",
    "dictionnaire-astrologique",
    "a-propos",
    "auteur/stephane-gamot",
  ];

  const staticRoutes: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${base}/${page}`,
    lastModified: now,
  }));

  const houseRoutes: MetadataRoute.Sitemap = (maisons as House[]).map((h) => ({
    url: `${base}/maisons/${h.slug}`,
    lastModified: now,
  }));

  const planetRoutes: MetadataRoute.Sitemap = (planetes as Planet[]).map(
    (p) => ({
      url: `${base}/planetes/${p.slug}`,
      lastModified: now,
    }),
  );

  const signRoutes: MetadataRoute.Sitemap = (signes as Sign[]).map((s) => ({
    url: `${base}/signes/${s.slug}`,
    lastModified: now,
  }));

  const postRoutes: MetadataRoute.Sitemap = getAllPosts().map((p) => ({
    url: `${base}/blog/${p.meta.slug}`,
    lastModified: new Date(p.meta.date),
  }));

  return [
    ...staticRoutes,
    ...houseRoutes,
    ...planetRoutes,
    ...signRoutes,
    ...postRoutes,
  ];
}
