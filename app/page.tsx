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
  title: {
    absolute: "Cours d'astrologie : signes, planètes, maisons — Astro Cours",
  },
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

/**
 * ✅ Audit 31/05/2026 — R1 : Schema.org enrichi
 *    - Organization : ajout du logo dimensionné + sameAs (Facebook),
 *      coordonnées de l'auteur, et description.
 *    - WebSite : ajout d'un SearchAction (sitelinks searchbox éligible).
 *    - Course (× 3) : positionnement explicite du site comme « cours »,
 *      un nœud par grand pilier (signes, planètes, maisons).
 *    - Tout est exposé dans un seul `@graph` avec des `@id` croisés,
 *      ce qui permet à Google de relier les entités proprement.
 */
const ORGANIZATION_ID = `${SITE_URL}#organization`;
const WEBSITE_ID = `${SITE_URL}#website`;
const PERSON_ID = `${SITE_URL}/auteur/stephane-gamot#person`;

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: SITE_NAME,
      url: SITE_URL,
      description:
        "Encyclopédie et cours d'astrologie premium : signes, planètes, maisons, transits.",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/astro-cours-logo.webp`,
        width: 512,
        height: 512,
      },
      founder: { "@id": PERSON_ID },
      sameAs: [
        "https://www.facebook.com/profile.php?id=61577719253973",
      ],
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Stéphane Gamot",
      url: `${SITE_URL}/auteur/stephane-gamot`,
      jobTitle: "Astrologue & enseignant",
      worksFor: { "@id": ORGANIZATION_ID },
      knowsAbout: [
        "Astrologie",
        "Thème natal",
        "Astrologie traditionnelle",
        "Astrologie psychologique",
        "Transits",
        "Synastrie",
      ],
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      name: SITE_NAME,
      url: SITE_URL,
      description:
        "Encyclopédie et cours d'astrologie premium : signes, planètes, maisons, transits.",
      inLanguage: "fr-FR",
      publisher: { "@id": ORGANIZATION_ID },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/blog?tag={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Course",
      "@id": `${SITE_URL}#course-signes`,
      name: "Les 12 signes du zodiaque — Cours complet",
      description:
        "Cours structuré sur les 12 signes du zodiaque : portrait, élément, mode, maître, mythologie, compatibilités et interprétation du thème natal.",
      url: `${SITE_URL}/#zodiaque`,
      inLanguage: "fr-FR",
      isAccessibleForFree: true,
      educationalLevel: "Beginner",
      learningResourceType: "Lesson",
      about: { "@type": "Thing", name: "Zodiaque" },
      teaches:
        "Reconnaître et interpréter les 12 signes du zodiaque dans un thème natal.",
      provider: { "@id": ORGANIZATION_ID },
      author: { "@id": PERSON_ID },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "Online",
        courseWorkload: "PT6H",
        inLanguage: "fr-FR",
        instructor: { "@id": PERSON_ID },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR",
          category: "free",
          availability: "https://schema.org/InStock",
        },
      },
    },
    {
      "@type": "Course",
      "@id": `${SITE_URL}#course-planetes`,
      name: "Les 10 planètes en astrologie — Cours complet",
      description:
        "Cours sur les 10 planètes : Soleil, Lune, Mercure, Vénus, Mars, Jupiter, Saturne, Uranus, Neptune, Pluton. Fonctions, dignités, interprétation par signe et par maison.",
      url: `${SITE_URL}/#planetes`,
      inLanguage: "fr-FR",
      isAccessibleForFree: true,
      educationalLevel: "Beginner",
      learningResourceType: "Lesson",
      about: { "@type": "Thing", name: "Planètes astrologiques" },
      teaches:
        "Comprendre la fonction symbolique des 10 planètes et leur rôle dans le thème.",
      provider: { "@id": ORGANIZATION_ID },
      author: { "@id": PERSON_ID },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "Online",
        courseWorkload: "PT5H",
        inLanguage: "fr-FR",
        instructor: { "@id": PERSON_ID },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR",
          category: "free",
          availability: "https://schema.org/InStock",
        },
      },
    },
    {
      "@type": "Course",
      "@id": `${SITE_URL}#course-maisons`,
      name: "Les 12 maisons astrologiques — Cours complet",
      description:
        "Cours sur les 12 maisons : sens traditionnel, conception moderne, axe, triangle et carré, planètes en maison, exercices pratiques.",
      url: `${SITE_URL}/#maisons`,
      inLanguage: "fr-FR",
      isAccessibleForFree: true,
      educationalLevel: "Beginner",
      learningResourceType: "Lesson",
      about: { "@type": "Thing", name: "Maisons astrologiques" },
      teaches:
        "Interpréter le rôle des 12 maisons dans un thème natal et leurs interactions avec les planètes.",
      provider: { "@id": ORGANIZATION_ID },
      author: { "@id": PERSON_ID },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "Online",
        courseWorkload: "PT6H",
        inLanguage: "fr-FR",
        instructor: { "@id": PERSON_ID },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR",
          category: "free",
          availability: "https://schema.org/InStock",
        },
      },
    },
  ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
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
