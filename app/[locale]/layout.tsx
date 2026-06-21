import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import { routing, type Locale } from "@/i18n/routing";
import NavBAr from "@/components/layout/header/NavBar";
import Footer from "@/components/layout/footer/Footer";

const SITE_URL = "https://www.astro-cours.com";
const SITE_NAME = "Astro Cours";

const OG_IMAGE = `${SITE_URL}/og/cover.jpg`;

/* ──────────────────────────────────────────────────────────────
   Métadonnées localisées (description + og:locale par langue).
   ────────────────────────────────────────────────────────────── */
const META: Record<Locale, { desc: string; ogLocale: string }> = {
  fr: {
    desc: "Cours d'astrologie clairs, structurés et modernes : signes, planètes, maisons, aspects et transits.",
    ogLocale: "fr_FR",
  },
  en: {
    desc: "Clear, structured and modern astrology courses: signs, planets, houses, aspects and transits.",
    ogLocale: "en_US",
  },
  es: {
    desc: "Cursos de astrología claros, estructurados y modernos: signos, planetas, casas, aspectos y tránsitos.",
    ogLocale: "es_ES",
  },
};

/**
 * Chemin absolu d'une locale (FR = racine sans préfixe, EN/ES préfixés).
 * Utilisé pour le canonical et les balises hreflang.
 */
function localeUrl(locale: Locale): string {
  return locale === routing.defaultLocale ? SITE_URL : `${SITE_URL}/${locale}`;
}

/** Map hreflang complète (fr/en/es + x-default) pour la home. */
function languageAlternates(): Record<string, string> {
  return {
    "fr-FR": localeUrl("fr"),
    "en-US": localeUrl("en"),
    "es-ES": localeUrl("es"),
    "x-default": localeUrl("fr"),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = (routing.locales as readonly string[]).includes(locale)
    ? (locale as Locale)
    : routing.defaultLocale;
  const conf = META[loc];
  const canonical = localeUrl(loc);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: `Cours d'astrologie — ${SITE_NAME}`,
      template: `%s — ${SITE_NAME}`,
    },
    description: conf.desc,
    applicationName: SITE_NAME,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: SITE_NAME,
      description: conf.desc,
      url: canonical,
      siteName: SITE_NAME,
      locale: conf.ogLocale,
      type: "website",
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — cours d'astrologie`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: SITE_NAME,
      description: conf.desc,
      images: [OG_IMAGE],
    },
    manifest: "/manifest.json",
    alternates: {
      canonical,
      languages: languageAlternates(),
    },
    verification: {
      google: "ihg3LVKNM0DKUMbESaivmUlpEYI6_asrhZirUGlQH8Y",
    },
    other: {
      "theme-color": "#8B5CF6",
    },
  };
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  // ⚠️ Audit Lighthouse 31/05/2026 — voir note historique : display "optional"
  //    pour éliminer le CLS de police (pas de swap après ~100 ms).
  display: "optional",
  preload: true,
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "optional",
  preload: true,
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Locale inconnue → 404
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // ✅ Active le rendu statique pour cette locale
  setRequestLocale(locale);

  return (
    <html lang={locale} className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        {/* ✅ Hints de connexion vers Ahrefs (économise un RTT) */}
        <link rel="dns-prefetch" href="https://analytics.ahrefs.com" />
        <link
          rel="preconnect"
          href="https://analytics.ahrefs.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {/* ✅ lazyOnload : ne charge qu'après que la page est totalement prête */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="JNM0DqC2SHxBN/ZLlVz+xA"
          strategy="lazyOnload"
        />
        <NextIntlClientProvider>
          <NavBAr />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
