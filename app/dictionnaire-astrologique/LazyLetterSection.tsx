"use client";

import { useRef, useState, useEffect } from "react";
import type { DictCategory, DictEntry } from "@/lib/dictionnaire";

/* ================================================================== */
/*  Styles par catégorie (dupliqué ici car composant client)          */
/* ================================================================== */
const CATEGORY_STYLE: Record<
  DictCategory,
  { bg: string; text: string; border: string; dot: string }
> = {
  planète: {
    bg: "bg-amber-500/10",
    text: "text-amber-300",
    border: "border-amber-400/20",
    dot: "bg-amber-400",
  },
  signe: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-300",
    border: "border-emerald-400/20",
    dot: "bg-emerald-400",
  },
  maison: {
    bg: "bg-sky-500/10",
    text: "text-sky-300",
    border: "border-sky-400/20",
    dot: "bg-sky-400",
  },
  aspect: {
    bg: "bg-violet-500/10",
    text: "text-violet-300",
    border: "border-violet-400/20",
    dot: "bg-violet-400",
  },
  concept: {
    bg: "bg-rose-500/10",
    text: "text-rose-300",
    border: "border-rose-400/20",
    dot: "bg-rose-400",
  },
  "point fictif": {
    bg: "bg-fuchsia-500/10",
    text: "text-fuchsia-300",
    border: "border-fuchsia-400/20",
    dot: "bg-fuchsia-400",
  },
  technique: {
    bg: "bg-cyan-500/10",
    text: "text-cyan-300",
    border: "border-cyan-400/20",
    dot: "bg-cyan-400",
  },
  personnalité: {
    bg: "bg-orange-500/10",
    text: "text-orange-300",
    border: "border-orange-400/20",
    dot: "bg-orange-400",
  },
  astronomique: {
    bg: "bg-indigo-500/10",
    text: "text-indigo-300",
    border: "border-indigo-400/20",
    dot: "bg-indigo-400",
  },
  branche: {
    bg: "bg-lime-500/10",
    text: "text-lime-300",
    border: "border-lime-400/20",
    dot: "bg-lime-400",
  },
  constellation: {
    bg: "bg-teal-500/10",
    text: "text-teal-300",
    border: "border-teal-400/20",
    dot: "bg-teal-400",
  },
  personnage: {
    bg: "bg-yellow-500/10",
    text: "text-yellow-300",
    border: "border-yellow-400/20",
    dot: "bg-yellow-400",
  },
};

/* ================================================================== */
/*  Sous-composants                                                   */
/* ================================================================== */
function CategoryBadge({ category }: { category: DictCategory }) {
  const s = CATEGORY_STYLE[category];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider sm:text-xs ${s.bg} ${s.text} ${s.border}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} aria-hidden />
      {category}
    </span>
  );
}

function EntryCard({ entry }: { entry: DictEntry }) {
  const s = CATEGORY_STYLE[entry.category];

  if (!s) {
    return (
      <div
        id={entry.slug}
        className="scroll-mt-24 rounded-2xl border border-red-500/40 bg-red-500/10 p-5 text-red-200 sm:p-6 lg:p-7"
      >
        <p className="font-semibold">
          Entrée sans style détectée : {entry.term}
        </p>
      </div>
    );
  }

  return (
    <div
      id={entry.slug}
      className={`group scroll-mt-24 rounded-2xl border bg-white/[0.02] p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.04] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] sm:p-6 lg:p-7 ${s.border}`}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="font-serif text-xl font-semibold tracking-tight text-white sm:text-2xl">
          {entry.term}
        </h3>
        <CategoryBadge category={entry.category} />
      </div>

      <p className={`mt-2 text-sm font-medium italic ${s.text} opacity-80`}>
        {entry.short}
      </p>

      <p className="mt-4 text-[0.92rem] leading-[1.8] text-white/70 sm:text-[0.95rem]">
        {entry.body}
      </p>

      {entry.related && entry.related.length > 0 && (
        <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-white/[0.06] pt-4">
          <span className="text-[0.65rem] font-semibold uppercase tracking-widest text-white/50 sm:text-xs">
            Voir aussi
          </span>
          {entry.related.map((r) => {
            const relatedSlug = r
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .replace(/\s+/g, "-")
              .replace(/[^a-z0-9-]/g, "");
            return (
              <a
                key={r}
                href={`#${relatedSlug}`}
                className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-xs text-white/60 transition-colors hover:border-white/20 hover:text-white/80"
              >
                {r}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ================================================================== */
/*  LazyLetterSection — n'affiche les cartes qu'au scroll             */
/* ================================================================== */
interface LazyLetterSectionProps {
  letter: string;
  entries: DictEntry[];
  /** Les 3 premières lettres sont rendues immédiatement (above the fold) */
  eager?: boolean;
}

export default function LazyLetterSection({
  letter,
  entries,
  eager = false,
}: LazyLetterSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(eager);

  useEffect(() => {
    if (eager) return;                // déjà visible, pas besoin d'observer
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();      // une fois visible, on arrête
        }
      },
      { rootMargin: "300px" }         // charge 300px avant d'arriver dans le viewport
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [eager]);

  // Hauteur estimée du placeholder : ~150px par carte
  const placeholderHeight = entries.length * 150;

  return (
    <section
      ref={sectionRef}
      id={`letter-${letter}`}
      className="scroll-mt-28"
    >
      {/* En-tête de lettre — toujours visible */}
      <div className="mb-5 flex items-center gap-3 sm:mb-6">
        <h2 className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-accent/10 to-violet-500/10 font-serif text-xl font-bold text-white sm:h-12 sm:w-12 sm:text-2xl">
          {letter}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
        <span className="text-xs text-white/50">
          {entries.length} terme{entries.length > 1 ? "s" : ""}
        </span>
      </div>

      {/* Cartes — rendues seulement quand la section est visible */}
      {visible ? (
        <div className="space-y-4">
          {entries.map((entry) => (
            <EntryCard key={entry.slug} entry={entry} />
          ))}
        </div>
      ) : (
        <div
          style={{ minHeight: placeholderHeight }}
          className="flex items-center justify-center rounded-2xl border border-white/[0.04] bg-white/[0.01]"
        >
          <span className="text-sm text-white/20">
            {entries.length} terme{entries.length > 1 ? "s" : ""} …
          </span>
        </div>
      )}
    </section>
  );
}