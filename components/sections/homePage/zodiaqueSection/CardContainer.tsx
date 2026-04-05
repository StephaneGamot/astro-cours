import Cards from "./Cards"; 
import zodiaque from "@/data/zodiaque.json";
import { Sparkles } from "lucide-react";

type Zodiac = (typeof zodiaque)[number];

export default function ZodiacCardContainer() {
  return (
    <section 
      id="zodiaque"
      aria-labelledby="zodiaque-title"
      className="mx-auto max-w-7xl px-6 py-12 lg:px-8"
    >
      {/* Titre de Section Stylisé */}
      <div className="group mb-16 flex items-center gap-5">
        <div aria-hidden="true" className="flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-500/20 to-transparent text-violet-300 shadow-[0_0_20px_rgba(167,139,250,0.15)] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
          <Sparkles size={26} strokeWidth={1.5} />
        </div>
        <h2 id="zodiaque-title" className="font-serif text-3xl md:text-5xl tracking-tight text-white">
          Les 12 Signes du Zodiaque
        </h2>
        <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-violet-500/30 via-violet-500/5 to-transparent ml-4" />
      </div>

      {/* Grille des Cartes */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {(zodiaque as Zodiac[]).map((item) => (
          <Cards key={item.slug} item={item} basePath="signes" />
        ))}
      </div>
    </section>
  );
}