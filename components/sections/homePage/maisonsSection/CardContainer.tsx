import Cards from "./Cards";
import maisons from "@/data/maisons.json";
import { Layers } from "lucide-react";

type House = (typeof maisons)[number];

export default function MaisonsCardContainer() {
  return (
    <section 
      id="maisons"
      aria-labelledby="maisons-title"
      className="mx-auto max-w-7xl px-6 py-12 lg:px-8"
    >
      <div className="group mb-16 flex items-center gap-5">
        <div aria-hidden="true" className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/20 to-transparent text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
          <Layers size={26} strokeWidth={1.5} />
        </div>
        <h2 id="maisons-title" className="font-serif text-3xl md:text-5xl tracking-tight text-white">
          Les 12 Maisons Astrologiques
        </h2>
        <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-emerald-500/30 via-emerald-500/5 to-transparent ml-4" />
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {(maisons as House[]).map((item) => (
          <Cards key={item.slug} item={item} basePath="maisons" />
        ))}
      </div>
    </section>
  );
}