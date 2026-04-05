import Cards from "./Cards";
import planetes from "@/data/planetes.json";
import { Globe } from "lucide-react";

type Planet = (typeof planetes)[number];

export default function CardContainer() {
  return (
    <section
      id="planetes"
      aria-labelledby="planetes-title"
      className="mx-auto max-w-7xl px-6 py-12 lg:px-8"
    >
      {/* Titre de Section Stylisé (Thème Sky/Azur) */}
      <div className="group mb-16 flex items-center gap-5">
        <div aria-hidden="true" className="flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-500/30 bg-gradient-to-br from-sky-500/20 to-transparent text-sky-300 shadow-[0_0_20px_rgba(14,165,233,0.15)] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
          <Globe size={26} strokeWidth={1.5} />
        </div>
        <h2 id="planetes-title" className="font-serif text-3xl md:text-5xl tracking-tight text-white">
          Les Planètes
        </h2>
        <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-sky-500/30 via-sky-500/5 to-transparent ml-4" />
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {(planetes as Planet[]).map((item) => (
          <Cards key={item.slug} item={item} />
        ))}
      </div>
    </section>
  );
}