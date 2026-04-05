import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type CardData = {
  slug: string;
  name: string;
  headline: string;
  description: string;
  image: { src: string; alt: string };
};

type Props = {
  item: CardData;
  basePath: "planetes" | "signes" | "maisons";
};

export default function Cards({ item, basePath }: Props) {
  const titleId = `${basePath}-title-${item.slug}`;
  const descId = `${basePath}-desc-${item.slug}`;

  return (
    <article
      aria-labelledby={titleId}
      aria-describedby={descId}
      className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/5 bg-[#0c0c0e] p-6 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:bg-[#111] hover:border-emerald-500/30 hover:shadow-[0_15px_40px_rgba(16,185,129,0.1)] focus-within:ring-2 focus-within:ring-emerald-500 focus-within:ring-offset-4 focus-within:ring-offset-[#09090b]"
    >
      {/* Lueur interne au survol */}
      <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-b from-emerald-500/0 to-emerald-500/0 opacity-0 transition-opacity duration-500 group-hover:from-emerald-500/10 group-hover:opacity-100 pointer-events-none" aria-hidden="true" />

      {/* En-tête */}
      <header className="relative z-10 flex items-center justify-between mb-6">
        <h3
          id={titleId}
          className="font-serif text-2xl text-white group-hover:text-emerald-200 transition-colors"
        >
          {/* Lien global (WCAG & UX) */}
          <Link 
            href={`/${basePath}/${item.slug}`}
            className="focus:outline-none after:absolute after:inset-0"
            aria-label={`Lire le cours complet sur la ${item.name}`}
          >
            {item.name}
          </Link>
        </h3>
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/40 transition-all duration-300 group-hover:bg-emerald-500/20 group-hover:text-emerald-300 group-hover:translate-x-1" aria-hidden="true">
          <ChevronRight size={16} />
        </span>
      </header>

      {/* Image (Format carré/iconique) */}
      <div className="relative z-10 flex justify-center mb-6 overflow-hidden rounded-2xl bg-black/30 p-4 border border-white/5 group-hover:border-white/10 transition-colors">
        <div className="relative h-40 w-40 sm:h-48 sm:w-48 transition-transform duration-700 group-hover:scale-110">
          <Image
            src={item.image.src}
            alt={item.image.alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 160px, 192px"
          />
        </div>
      </div>

      {/* Description */}
      <footer className="relative z-10 flex-1 flex flex-col">
        <h4 className="text-[13px] font-bold uppercase tracking-widest text-emerald-400/90 mb-3 border-b border-white/10 pb-3">
          {item.headline}
        </h4>
        <p
          id={descId}
          className="text-[15px] leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors"
        >
          {item.description}
        </p>
      </footer>
    </article>
  );
}