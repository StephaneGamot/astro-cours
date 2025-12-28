import Image from "next/image";
import ImageOnly from "@/components/images/ImageOnly";
import ImageOnly2 from "@/components/images/ImageOnly2";
import HeroHomePage from "@/components/sections/homePage/hero";
import PlanetsCardContainer from "@/components/sections/homePage/planetesSection/CardContainer";
import Constelations from "@/components/images/Constelations";
import ZodiacCardContainer from "@/components/sections/homePage/zodiaqueSection/CardContainer";
import MaisonsCardContainer from "@/components/sections/homePage/maisonsSection/CardContainer";

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
