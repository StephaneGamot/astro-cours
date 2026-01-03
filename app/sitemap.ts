import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.astro-cours.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/blog`, lastModified: new Date() },
  ];

  const posts = getAllPosts().map((p) => ({
    url: `${base}/blog/${p.meta.slug}`,
    lastModified: new Date(p.meta.date),
  }));

  return [...staticRoutes, ...posts];
}
