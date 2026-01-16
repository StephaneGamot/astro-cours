import ImageOnly from "@/components/images/ImageOnly";
import HeroHomePage from "@/components/sections/homePage/hero";
import PlanetsCardContainer from "@/components/sections/homePage/planetesSection/CardContainer";
import Constelations from "@/components/images/Constelations";
import ZodiacCardContainer from "@/components/sections/homePage/zodiaqueSection/CardContainer";
import MaisonsCardContainer from "@/components/sections/homePage/maisonsSection/CardContainer";
import type { Metadata } from "next";

const SITE_URL = "https://www.astro-cours.com";
const SITE_NAME = "Astro Cours";
const OG_IMAGE = `${SITE_URL}/og/cover.jpg`; // mets bien ce fichier dans /public/og/cover.jpg

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

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <ImageOnly />
      <HeroHomePage />
      <Constelations />
      <ZodiacCardContainer />
      <Constelations />
      <MaisonsCardContainer />
      <Constelations />
      <PlanetsCardContainer />
    </main>
  );
}
