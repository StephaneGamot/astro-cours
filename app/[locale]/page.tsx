import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import ImageOnly from "@/components/images/ImageOnly";
import HeroHomePage from "@/components/sections/homePage/hero";
import ZodiacCardContainer from "@/components/sections/homePage/zodiaqueSection/CardContainer";
import MaisonsCardContainer from "@/components/sections/homePage/maisonsSection/CardContainer";
import PlanetsCardContainer from "@/components/sections/homePage/planetesSection/CardContainer";
import { getHomeCards } from "@/lib/homeCards";
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  localeUrl,
  localizedPathUrl,
  languageAlternates,
  toSeoLocale,
  type SeoLocale,
} from "@/lib/seo";

const OG_IMAGE = `${SITE_URL}${DEFAULT_OG_IMAGE}`;

/* ────────────────────────────────────────────────────────────────
   SEO — Metadata localisée
   ──────────────────────────────────────────────────────────────── */

const META: Record<
  SeoLocale,
  {
    title: string;
    desc: string;
    ogTitle: string;
    ogDesc: string;
    twDesc: string;
    ogLocale: string;
    alt: string;
  }
> = {
  fr: {
    title: "Cours d'astrologie : signes, planètes, maisons — Astro Cours",
    desc: "Cours d'astrologie premium : 12 signes, planètes, maisons, aspects et transits. Méthode claire et structurée, repères et exemples concrets.",
    ogTitle: "Cours d'astrologie premium — Astro Cours",
    ogDesc:
      "Signes, planètes, maisons, aspects et transits : cours clairs + méthode + repères, pour comprendre et interpréter un thème.",
    twDesc:
      "Une méthode claire et moderne : signes, planètes, maisons, aspects et transits. Repères + exemples concrets.",
    ogLocale: "fr_FR",
    alt: "Astro Cours — Cours d'astrologie premium",
  },
  en: {
    title: "Astrology courses: signs, planets, houses — Astro Cours",
    desc: "Premium astrology courses: 12 signs, planets, houses, aspects and transits. A clear, structured method with landmarks and concrete examples.",
    ogTitle: "Premium astrology courses — Astro Cours",
    ogDesc:
      "Signs, planets, houses, aspects and transits: clear courses + method + landmarks, to understand and interpret a chart.",
    twDesc:
      "A clear and modern method: signs, planets, houses, aspects and transits. Landmarks + concrete examples.",
    ogLocale: "en_US",
    alt: "Astro Cours — Premium astrology courses",
  },
  es: {
    title: "Cursos de astrología: signos, planetas, casas — Astro Cours",
    desc: "Cursos de astrología premium: 12 signos, planetas, casas, aspectos y tránsitos. Un método claro y estructurado, con referencias y ejemplos concretos.",
    ogTitle: "Cursos de astrología premium — Astro Cours",
    ogDesc:
      "Signos, planetas, casas, aspectos y tránsitos: cursos claros + método + referencias, para comprender e interpretar una carta.",
    twDesc:
      "Un método claro y moderno: signos, planetas, casas, aspectos y tránsitos. Referencias + ejemplos concretos.",
    ogLocale: "es_ES",
    alt: "Astro Cours — Cursos de astrología premium",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = toSeoLocale(locale);
  const m = META[loc];
  const canonical = localeUrl(loc, "/");

  return {
    title: { absolute: m.title },
    description: m.desc,
    alternates: { canonical, languages: languageAlternates("/") },
    openGraph: {
      title: m.ogTitle,
      description: m.ogDesc,
      url: canonical,
      siteName: SITE_NAME,
      locale: m.ogLocale,
      type: "website",
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: m.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: m.ogTitle,
      description: m.twDesc,
      images: [OG_IMAGE],
    },
  };
}

/* ────────────────────────────────────────────────────────────────
   JSON-LD localisé
   ──────────────────────────────────────────────────────────────── */

const IN_LANGUAGE: Record<SeoLocale, string> = {
  fr: "fr-FR",
  en: "en-US",
  es: "es-ES",
};

const JSONLD_TEXT: Record<
  SeoLocale,
  {
    orgDesc: string;
    jobTitle: string;
    knowsAbout: string[];
    courses: {
      signes: { name: string; description: string; teaches: string; about: string };
      planetes: { name: string; description: string; teaches: string; about: string };
      maisons: { name: string; description: string; teaches: string; about: string };
    };
  }
> = {
  fr: {
    orgDesc:
      "Encyclopédie et cours d'astrologie premium : signes, planètes, maisons, transits.",
    jobTitle: "Astrologue & enseignant",
    knowsAbout: [
      "Astrologie",
      "Thème natal",
      "Astrologie traditionnelle",
      "Astrologie psychologique",
      "Transits",
      "Synastrie",
    ],
    courses: {
      signes: {
        name: "Les 12 signes du zodiaque — Cours complet",
        description:
          "Cours structuré sur les 12 signes du zodiaque : portrait, élément, mode, maître, mythologie, compatibilités et interprétation du thème natal.",
        teaches:
          "Reconnaître et interpréter les 12 signes du zodiaque dans un thème natal.",
        about: "Zodiaque",
      },
      planetes: {
        name: "Les 10 planètes en astrologie — Cours complet",
        description:
          "Cours sur les 10 planètes : Soleil, Lune, Mercure, Vénus, Mars, Jupiter, Saturne, Uranus, Neptune, Pluton. Fonctions, dignités, interprétation par signe et par maison.",
        teaches:
          "Comprendre la fonction symbolique des 10 planètes et leur rôle dans le thème.",
        about: "Planètes astrologiques",
      },
      maisons: {
        name: "Les 12 maisons astrologiques — Cours complet",
        description:
          "Cours sur les 12 maisons : sens traditionnel, conception moderne, axe, triangle et carré, planètes en maison, exercices pratiques.",
        teaches:
          "Interpréter le rôle des 12 maisons dans un thème natal et leurs interactions avec les planètes.",
        about: "Maisons astrologiques",
      },
    },
  },
  en: {
    orgDesc:
      "Premium astrology encyclopedia and courses: signs, planets, houses, transits.",
    jobTitle: "Astrologer & teacher",
    knowsAbout: [
      "Astrology",
      "Natal chart",
      "Traditional astrology",
      "Psychological astrology",
      "Transits",
      "Synastry",
    ],
    courses: {
      signes: {
        name: "The 12 zodiac signs — Complete course",
        description:
          "Structured course on the 12 zodiac signs: portrait, element, mode, ruler, mythology, compatibilities and natal chart interpretation.",
        teaches:
          "Recognise and interpret the 12 zodiac signs in a natal chart.",
        about: "Zodiac",
      },
      planetes: {
        name: "The 10 planets in astrology — Complete course",
        description:
          "Course on the 10 planets: Sun, Moon, Mercury, Venus, Mars, Jupiter, Saturn, Uranus, Neptune, Pluto. Functions, dignities, interpretation by sign and by house.",
        teaches:
          "Understand the symbolic function of the 10 planets and their role in the chart.",
        about: "Astrological planets",
      },
      maisons: {
        name: "The 12 astrological houses — Complete course",
        description:
          "Course on the 12 houses: traditional meaning, modern conception, axis, triangle and square, planets in houses, practical exercises.",
        teaches:
          "Interpret the role of the 12 houses in a natal chart and their interactions with the planets.",
        about: "Astrological houses",
      },
    },
  },
  es: {
    orgDesc:
      "Enciclopedia y cursos de astrología premium: signos, planetas, casas, tránsitos.",
    jobTitle: "Astrólogo y profesor",
    knowsAbout: [
      "Astrología",
      "Carta natal",
      "Astrología tradicional",
      "Astrología psicológica",
      "Tránsitos",
      "Sinastría",
    ],
    courses: {
      signes: {
        name: "Los 12 signos del zodiaco — Curso completo",
        description:
          "Curso estructurado sobre los 12 signos del zodiaco: retrato, elemento, modo, regente, mitología, compatibilidades e interpretación de la carta natal.",
        teaches:
          "Reconocer e interpretar los 12 signos del zodiaco en una carta natal.",
        about: "Zodiaco",
      },
      planetes: {
        name: "Los 10 planetas en astrología — Curso completo",
        description:
          "Curso sobre los 10 planetas: Sol, Luna, Mercurio, Venus, Marte, Júpiter, Saturno, Urano, Neptuno, Plutón. Funciones, dignidades, interpretación por signo y por casa.",
        teaches:
          "Comprender la función simbólica de los 10 planetas y su papel en la carta.",
        about: "Planetas astrológicos",
      },
      maisons: {
        name: "Las 12 casas astrológicas — Curso completo",
        description:
          "Curso sobre las 12 casas: sentido tradicional, concepción moderna, eje, triángulo y cuadrado, planetas en casa, ejercicios prácticos.",
        teaches:
          "Interpretar el papel de las 12 casas en una carta natal y sus interacciones con los planetas.",
        about: "Casas astrológicas",
      },
    },
  },
};

const ORGANIZATION_ID = `${SITE_URL}#organization`;
const WEBSITE_ID = `${SITE_URL}#website`;
const PERSON_ID = `${SITE_URL}/auteur/stephane-gamot#person`;

function buildHomeJsonLd(loc: SeoLocale) {
  const txt = JSONLD_TEXT[loc];
  const lang = IN_LANGUAGE[loc];

  const course = (
    id: string,
    c: { name: string; description: string; teaches: string; about: string },
    anchor: string,
    workload: string,
  ) => ({
    "@type": "Course",
    "@id": `${SITE_URL}#${id}`,
    name: c.name,
    description: c.description,
    // Hubs piliers : URL localisée (segment traduit) — audit 07/2026.
    url: localizedPathUrl(anchor, loc),
    inLanguage: lang,
    isAccessibleForFree: true,
    educationalLevel: "Beginner",
    learningResourceType: "Lesson",
    about: { "@type": "Thing", name: c.about },
    teaches: c.teaches,
    provider: { "@id": ORGANIZATION_ID },
    author: { "@id": PERSON_ID },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Online",
      courseWorkload: workload,
      inLanguage: lang,
      instructor: { "@id": PERSON_ID },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
        category: "free",
        availability: "https://schema.org/InStock",
      },
    },
  });

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
        name: SITE_NAME,
        url: SITE_URL,
        description: txt.orgDesc,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/astro-cours-logo.webp`,
          width: 512,
          height: 512,
        },
        founder: { "@id": PERSON_ID },
        sameAs: ["https://www.facebook.com/profile.php?id=61577719253973"],
      },
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: "Stéphane Gamot",
        url: `${SITE_URL}/auteur/stephane-gamot`,
        jobTitle: txt.jobTitle,
        worksFor: { "@id": ORGANIZATION_ID },
        knowsAbout: txt.knowsAbout,
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        name: SITE_NAME,
        url: localeUrl(loc, "/"),
        description: txt.orgDesc,
        inLanguage: lang,
        publisher: { "@id": ORGANIZATION_ID },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${localeUrl(loc, "/blog")}?tag={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      course("course-signes", txt.courses.signes, "/signes", "PT6H"),
      course("course-planetes", txt.courses.planetes, "/planetes", "PT5H"),
      course("course-maisons", txt.courses.maisons, "/maisons", "PT6H"),
    ],
  };
}

/* ────────────────────────────────────────────────────────────────
   Celestial divider — minimal dots + gradient lines
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

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const loc = toSeoLocale(locale);
  const cards = getHomeCards(locale);
  const homeJsonLd = buildHomeJsonLd(loc);

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
        <ZodiacCardContainer items={cards.zodiaque} />

        <CelestialDivider />
        <MaisonsCardContainer items={cards.maisons} />

        <CelestialDivider />
        <PlanetsCardContainer items={cards.planetes} />
      </main>
    </>
  );
}
