import ImageOnly from "@/components/images/ImageOnly";
import HeroHomePage from "@/components/sections/homePage/hero";
import PlanetsCardContainer from "@/components/sections/homePage/planetesSection/CardContainer";
import Constelations from "@/components/images/Constelations";
import ZodiacCardContainer from "@/components/sections/homePage/zodiaqueSection/CardContainer";
import MaisonsCardContainer from "@/components/sections/homePage/maisonsSection/CardContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cours d’astrologie premium — Signes, planètes, maisons",
  description: "Cours d’astrologie clairs, structurés et modernes : Les 12 signes, les 10 planètes, les 12 maisons, les principaux aspects et et d'autres sujets tels que les transits.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Cours d’astrologie premium — Signes, planètes, maisons",
    description: "Cours clairs : signes, planètes, maisons, aspects et transits. Méthode + repères.",
    url: "/",
    type: "website",
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
