import type { Metadata } from "next";
import ImageOnly from "@/components/images/ImageOnly";
import HeroHomePage from "@/components/sections/homePage/hero";
import ZodiacCardContainer from "@/components/sections/homePage/zodiaqueSection/CardContainer";
import MaisonsCardContainer from "@/components/sections/homePage/maisonsSection/CardContainer";
import PlanetsCardContainer from "@/components/sections/homePage/planetesSection/CardContainer";

/* ────────────────────────────────────────────────────────────────
   SEO — Metadata & JSON-LD
   ──────────────────────────────────────────────────────────────── */

const SITE_URL = "https://www.astro-cours.com";
const SITE_NAME = "Astro Cours";
const OG_IMAGE = `${SITE_URL}/og/cover.jpg`;

export const metadata: Metadata = {
  title: "Cours d'astrologie : signes, planètes, maisons — Astro Cours",
  description:
    "Cours d'astrologie premium : 12 signes, planètes, maisons, aspects et transits. Une méthode claire, moderne et structurée, avec repères et exemples concrets.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: `Cours d'astrologie premium — ${SITE_NAME}`,
    description:
      "Signes, planètes, maisons, aspects et transits : cours clairs + méthode + repères, pour comprendre et interpréter un thème.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Cours d'astrologie premium`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Cours d'astrologie premium — ${SITE_NAME}`,
    description:
      "Une méthode claire et moderne : signes, planètes, maisons, aspects et transits. Repères + exemples concrets.",
    images: [OG_IMAGE],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Encyclopédie et cours d'astrologie premium : signes, planètes, maisons, transits.",
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/astro-cours-logo.webp` },
  },
};

/* ────────────────────────────────────────────────────────────────
   Celestial divider — minimal dots + gradient lines
   Replaces the repeated heavy Constellations image.
   ──────────────────────────────────────────────────────────────── */

function CelestialDivider() {
  return (
    <div
      aria-hidden="true"
      className="mx-auto flex max-w-xs items-center gap-3 py-14 sm:py-16"
    >
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-white/[.06]" />
      <span className="size-1 rounded-full bg-violet-400/20" />
      <span className="size-1.5 rounded-full bg-violet-400/40 shadow-[0_0_6px_theme(colors.violet.400/30)]" />
      <span className="size-1 rounded-full bg-violet-400/20" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-white/[.06]" />
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   Home — Server Component
   ════════════════════════════════════════════════════════════════ */

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      <main
        id="main-content"
        className="relative min-h-screen overflow-hidden bg-[#09090b] text-slate-200 selection:bg-violet-500/30"
      >
        {/* ── Ambient glows ─────────────────────────────── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute left-1/2 top-0 h-[800px] w-[1000px] -translate-x-1/2 rounded-full bg-violet-600/[.08] blur-[160px]" />
          <div className="absolute left-[-8%] top-[40%] h-[600px] w-[600px] rounded-full bg-emerald-600/[.04] blur-[140px]" />
          <div className="absolute right-[-8%] top-[70%] h-[700px] w-[700px] rounded-full bg-amber-600/[.04] blur-[140px]" />
        </div>

        <ImageOnly />
        <HeroHomePage />

        <CelestialDivider />
        <ZodiacCardContainer />

        <CelestialDivider />
        <MaisonsCardContainer />

        <CelestialDivider />
        <PlanetsCardContainer />
      </main>
    </>
  );
}