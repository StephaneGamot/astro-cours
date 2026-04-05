import type { Metadata } from "next";
import ImageOnly from "@/components/images/ImageOnly";
import HeroHomePage from "@/components/sections/homePage/hero";
import PlanetsCardContainer from "@/components/sections/homePage/planetesSection/CardContainer";
import Constelations from "@/components/images/Constelations";
import ZodiacCardContainer from "@/components/sections/homePage/zodiaqueSection/CardContainer";
import MaisonsCardContainer from "@/components/sections/homePage/maisonsSection/CardContainer";

const SITE_URL = "https://www.astro-cours.com";
const SITE_NAME = "Astro Cours";
const OG_IMAGE = `${SITE_URL}/og/cover.jpg`;

export const metadata: Metadata = {
  title: "Cours d’astrologie premium — Signes, planètes, maisons, transits",
  description:
    "Cours d’astrologie premium : 12 signes, planètes, maisons, aspects et transits. Une méthode claire, moderne et structurée, avec repères et exemples concrets.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `Cours d’astrologie premium — ${SITE_NAME}`,
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
        alt: `${SITE_NAME} — Cours d’astrologie premium`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Cours d’astrologie premium — ${SITE_NAME}`,
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
  description: "Encyclopédie et cours d'astrologie premium : signes, planètes, maisons, transits.",
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.webp` }
  }
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />

      <main className="relative min-h-screen bg-[#09090b] text-slate-200 selection:bg-violet-500/30 overflow-hidden" id="main-content">
        
        {/* --- LUEURS D'AMBIANCE (Background) --- */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[800px] w-[1000px] rounded-full bg-violet-600/10 blur-[150px]" />
          <div className="absolute top-[40%] left-[-10%] h-[600px] w-[600px] rounded-full bg-emerald-600/5 blur-[150px]" />
          <div className="absolute top-[70%] right-[-10%] h-[700px] w-[700px] rounded-full bg-amber-600/5 blur-[150px]" />
        </div>

        <ImageOnly />
        <HeroHomePage />
        
        <div className="flex justify-center opacity-50 py-10"><Constelations aria-hidden="true" /></div>
        <ZodiacCardContainer />
        
        <div className="flex justify-center opacity-50 py-10"><Constelations aria-hidden="true" /></div>
        <MaisonsCardContainer />
        
        <div className="flex justify-center opacity-50 py-10"><Constelations aria-hidden="true" /></div>
        <PlanetsCardContainer />

      </main>
    </>
  );
}