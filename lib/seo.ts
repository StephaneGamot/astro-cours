import type { Metadata } from "next";

export const SITE_URL = "https://www.astro-cours.com";
export const SITE_NAME = "Astro Cours";

export function absoluteUrl(path: string) {
  if (!path.startsWith("/")) path = `/${path}`;
  return `${SITE_URL}${path}`;
}

export function buildTitle(pageTitle: string) {
  // homogène partout, premium
  return `${pageTitle} — ${SITE_NAME}`;
}

export function buildMeta(opts: {
  title: string;
  description: string;
  canonicalPath: string; // ex: "/maisons/maison-8"
  type?: "website" | "article";
}): Metadata {
  const url = opts.canonicalPath.startsWith("http")
    ? opts.canonicalPath
    : absoluteUrl(opts.canonicalPath);

  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: opts.canonicalPath }, // relatif (metadataBase fera le reste)
    openGraph: {
      title: opts.title,
      description: opts.description,
      url: opts.canonicalPath,
      siteName: SITE_NAME,
      locale: "fr_FR",
      type: opts.type ?? "article",
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
    },
  };
}
