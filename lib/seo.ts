import type { Metadata } from "next";

export const SITE_URL = "https://www.astro-cours.com";
export const SITE_NAME = "Astro Cours";

// ✅ image OG par défaut
export const DEFAULT_OG_IMAGE = "/og/cover.jpg";

// ✅ Auteur & Publisher centralisés (E-E-A-T)
export const AUTHOR_PERSON = {
  "@type": "Person" as const,
  name: "Stéphane Gamot",
  url: `${SITE_URL}/auteur/stephane-gamot`,
};

export const PUBLISHER_ORG = {
  "@type": "Organization" as const,
  name: SITE_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject" as const,
    url: `${SITE_URL}/astro-cours-logo.webp`,
  },
};

export function absoluteUrl(path: string) {
  if (!path) return SITE_URL;
  if (path.startsWith("http")) return path;
  if (!path.startsWith("/")) path = `/${path}`;
  return `${SITE_URL}${path}`;
}

/**
 * Titre complet avec branding — utilisé pour og:title, twitter:title, alt d'images.
 * Ne PAS l'utiliser pour metadata.title (le template du layout ajoute déjà " — Astro Cours").
 */
export function buildTitle(pageTitle: string) {
  return `${pageTitle} — ${SITE_NAME}`;
}

/**
 * Titre page seul — utilisé pour metadata.title (le template layout ajoute le suffixe marque).
 */
export function pageTitle(title: string) {
  return title;
}

export function buildMeta(opts: {
  title: string;
  description: string;
  canonicalPath: string; // ex: "/maisons/maison-8"
  type?: "website" | "article";
  ogImage?: string; // ✅ optionnel: "/images/..." ou URL complète
}): Metadata {
  const canonicalAbs = absoluteUrl(opts.canonicalPath);

  const imgPath = opts.ogImage ?? DEFAULT_OG_IMAGE;
  const imgAbs = absoluteUrl(imgPath);

  return {
    title: opts.title,
    description: opts.description,

    // ✅ canonical ABS (les outils SEO aiment ça)
    alternates: { canonical: canonicalAbs },

    openGraph: {
      title: opts.title,
      description: opts.description,
      url: canonicalAbs, // ✅ ABS
      siteName: SITE_NAME,
      locale: "fr_FR",
      type: opts.type ?? "article",

      // ✅ indispensable pour "Open Graph complete"
      images: [
        {
          url: imgAbs,
          width: 1200,
          height: 630,
          alt: opts.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,

      // ✅ twitter image (sinon certains audits râlent)
      images: [imgAbs],
    },
  };
}
