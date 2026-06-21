import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { localizeSlug, type PillarType } from "@/i18n/slugs";

export const SITE_URL = "https://www.astro-cours.com";
export const SITE_NAME = "Astro Cours";

// ✅ image OG par défaut
export const DEFAULT_OG_IMAGE = "/og/cover.jpg";

/* ──────────────────────────────────────────────────────────────
   i18n SEO helpers
   ──────────────────────────────────────────────────────────────
   FR = racine sans préfixe ; EN/ES = préfixés (localePrefix "as-needed").
   ────────────────────────────────────────────────────────────── */
export type SeoLocale = "fr" | "en" | "es";
const SEO_DEFAULT_LOCALE: SeoLocale = "fr";

/** Normalise une valeur quelconque (params) vers une SeoLocale valide. */
export function toSeoLocale(value?: string): SeoLocale {
  return value === "en" || value === "es" ? value : SEO_DEFAULT_LOCALE;
}

const OG_LOCALE: Record<SeoLocale, string> = {
  fr: "fr_FR",
  en: "en_US",
  es: "es_ES",
};

/** URL absolue d'un chemin pour une locale donnée. */
export function localeUrl(locale: SeoLocale, path: string): string {
  if (!path) path = "/";
  if (!path.startsWith("/")) path = `/${path}`;
  return locale === SEO_DEFAULT_LOCALE
    ? `${SITE_URL}${path === "/" ? "" : path}`
    : `${SITE_URL}/${locale}${path === "/" ? "" : path}`;
}

/** Map hreflang complète (fr/en/es + x-default) pour un chemin. */
export function languageAlternates(path: string): Record<string, string> {
  return {
    "fr-FR": localeUrl("fr", path),
    "en-US": localeUrl("en", path),
    "es-ES": localeUrl("es", path),
    "x-default": localeUrl("fr", path),
  };
}

/* ──────────────────────────────────────────────────────────────
   URL des pages piliers (segment ET slug traduits par langue).
   ────────────────────────────────────────────────────────────── */

function localizedSegment(type: PillarType, locale: SeoLocale): string {
  const template = `/${type}/[slug]`;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const p = (routing.pathnames as any)[template];
  return typeof p === "string" ? p : p[locale];
}

/** URL absolue d'une page pilier pour une locale (segment + slug traduits). */
export function pillarUrl(
  type: PillarType,
  canonSlug: string,
  locale: SeoLocale,
): string {
  const seg = localizedSegment(type, locale).replace(
    "[slug]",
    localizeSlug(type, canonSlug, locale),
  );
  return locale === SEO_DEFAULT_LOCALE
    ? `${SITE_URL}${seg}`
    : `${SITE_URL}/${locale}${seg}`;
}

/** hreflang complet (fr/en/es + x-default) pour une page pilier. */
export function pillarLanguageAlternates(
  type: PillarType,
  canonSlug: string,
): Record<string, string> {
  return {
    "fr-FR": pillarUrl(type, canonSlug, "fr"),
    "en-US": pillarUrl(type, canonSlug, "en"),
    "es-ES": pillarUrl(type, canonSlug, "es"),
    "x-default": pillarUrl(type, canonSlug, "fr"),
  };
}

/* ──────────────────────────────────────────────────────────────
   URL des pages "annexe" (segment traduit, sans slug dynamique).
   Lit routing.pathnames pour un chemin interne donné (ex: "/aspects").
   ────────────────────────────────────────────────────────────── */

/** URL absolue d'un chemin interne pour une locale (segment traduit via pathnames). */
export function localizedPathUrl(internalPath: string, locale: SeoLocale): string {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const p = (routing.pathnames as any)[internalPath];
  const seg = typeof p === "string" ? p : p?.[locale] ?? internalPath;
  return localeUrl(locale, seg);
}

/** hreflang complet (fr/en/es + x-default) pour un chemin interne. */
export function pathLanguageAlternates(internalPath: string): Record<string, string> {
  return {
    "fr-FR": localizedPathUrl(internalPath, "fr"),
    "en-US": localizedPathUrl(internalPath, "en"),
    "es-ES": localizedPathUrl(internalPath, "es"),
    "x-default": localizedPathUrl(internalPath, "fr"),
  };
}

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
  locale?: string; // ✅ optionnel: locale de la page (normalisée; défaut "fr")
  canonicalUrl?: string; // ✅ optionnel: canonical absolu déjà localisé (override)
  languages?: Record<string, string>; // ✅ optionnel: hreflang déjà calculé (override)
}): Metadata {
  const locale = toSeoLocale(opts.locale);

  // ✅ canonical localisé (override possible pour segment+slug traduits)
  const canonicalAbs = opts.canonicalUrl ?? localeUrl(locale, opts.canonicalPath);

  const imgPath = opts.ogImage ?? DEFAULT_OG_IMAGE;
  const imgAbs = absoluteUrl(imgPath);

  // opts.title is the bare page title (no branding suffix).
  // The layout template adds " — Astro Cours" to metadata.title automatically.
  // og/twitter titles need the full branded title, so we build it here.
  const brandedTitle = buildTitle(opts.title);

  return {
    title: opts.title,
    description: opts.description,

    // ✅ canonical ABS + hreflang (fr/en/es + x-default)
    alternates: {
      canonical: canonicalAbs,
      languages: opts.languages ?? languageAlternates(opts.canonicalPath),
    },

    openGraph: {
      title: brandedTitle,
      description: opts.description,
      url: canonicalAbs, // ✅ ABS
      siteName: SITE_NAME,
      locale: OG_LOCALE[locale],
      type: opts.type ?? "article",

      // ✅ indispensable pour "Open Graph complete"
      images: [
        {
          url: imgAbs,
          width: 1200,
          height: 630,
          alt: brandedTitle,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: brandedTitle,
      description: opts.description,

      // ✅ twitter image (sinon certains audits râlent)
      images: [imgAbs],
    },
  };
}
