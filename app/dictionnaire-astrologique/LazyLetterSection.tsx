"use client";

import { useRef, useState, useEffect } from "react";
import type { DictCategory, DictEntry } from "@/lib/dictionnaire";

/* ================================================================== */
/*  Styles par catégorie                                              */
/* ================================================================== */
const CATEGORY_STYLE: Record<
  DictCategory,
  { bg: string; text: string; border: string; dot: string }
> = {
  planète: { bg: "bg-amber-500/10", text: "text-amber-300", border: "border-amber-400/20", dot: "bg-amber-400" },
  signe: { bg: "bg-emerald-500/10", text: "text-emerald-300", border: "border-emerald-400/20", dot: "bg-emerald-400" },
  maison: { bg: "bg-sky-500/10", text: "text-sky-300", border: "border-sky-400/20", dot: "bg-sky-400" },
  aspect: { bg: "bg-violet-500/10", text: "text-violet-300", border: "border-violet-400/20", dot: "bg-violet-400" },
  concept: { bg: "bg-rose-500/10", text: "text-rose-300", border: "border-rose-400/20", dot: "bg-rose-400" },
  "point fictif": { bg: "bg-fuchsia-500/10", text: "text-fuchsia-300", border: "border-fuchsia-400/20", dot: "bg-fuchsia-400" },
  technique: { bg: "bg-cyan-500/10", text: "text-cyan-300", border: "border-cyan-400/20", dot: "bg-cyan-400" },
  personnalité: { bg: "bg-orange-500/10", text: "text-orange-300", border: "border-orange-400/20", dot: "bg-orange-400" },
  astronomique: { bg: "bg-indigo-500/10", text: "text-indigo-300", border: "border-indigo-400/20", dot: "bg-indigo-400" },
  branche: { bg: "bg-lime-500/10", text: "text-lime-300", border: "border-lime-400/20", dot: "bg-lime-400" },
  constellation: { bg: "bg-teal-500/10", text: "text-teal-300", border: "border-teal-400/20", dot: "bg-teal-400" },
  personnage: { bg: "bg-yellow-500/10", text: "text-yellow-300", border: "border-yellow-400/20", dot: "bg-yellow-400" },
};

/* ================================================================== */
/*  EntryCard — markup allégé (moins de nœuds DOM)                    */
/* ================================================================== */
function EntryCard({ entry }: { entry: DictEntry }) {
  const s = CATEGORY_STYLE[entry.category];
  if (!s) return null;

  return (
    <div id={entry.slug} className={`scroll-mt-24 rounded-2xl border bg-white/[0.02] p-5 sm:p-6 lg:p-7 ${s.border}`}>
      {/* Titre + badge sur la même ligne */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="font-serif text-xl font-semibold tracking-tight text-white sm:text-2xl">
          {entry.term}
        </h3>
        <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider sm:text-xs ${s.bg} ${s.text} ${s.border}`}>
          <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} aria-hidden />
          {entry.category}
        </span>
      </div>

      <p className={`mt-2 text-sm font-medium italic ${s.text} opacity-80`}>{entry.short}</p>
      <p className="mt-4 text-[0.92rem] leading-[1.8] text-white/70 sm:text-[0.95rem]">{entry.body}</p>

      {entry.related && entry.related.length > 0 && (
        <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-white/[0.06] pt-4">
          <span className="text-[0.65rem] font-semibold uppercase tracking-widest text-white/50 sm:text-xs">Voir aussi</span>
          {entry.related.map((r) => {
            const slug = r.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
            return (
              <a key={r} href={`#${slug}`} className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-xs text-white/60 transition-colors hover:border-white/20 hover:text-white/80">
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
/*  BATCH_SIZE — nombre de cartes chargées par vague                  */
/* ================================================================== */
const INITIAL_BATCH = 5;   // cartes affichées immédiatement (eager)
const LOAD_BATCH = 10;     // cartes ajoutées à chaque intersection

/* ================================================================== */
/*  LazyLetterSection                                                 */
/* ================================================================== */
interface Props {
  letter: string;
  entries: DictEntry[];
  /** true = première lettre, on affiche INITIAL_BATCH cartes tout de suite */
  eager?: boolean;
}

export default function LazyLetterSection({ letter, entries, eager = false }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  // Nombre de cartes actuellement rendues
  const [rendered, setRendered] = useState(eager ? Math.min(INITIAL_BATCH, entries.length) : 0);

  const allLoaded = rendered >= entries.length;

  // Observer pour déclencher le premier affichage (sections non-eager)
  useEffect(() => {
    if (eager || rendered > 0) return;
    const el = sectionRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRendered(Math.min(LOAD_BATCH, entries.length));
          obs.disconnect();
        }
      },
      { rootMargin: "400px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [eager, rendered, entries.length]);

  // Observer sur la sentinelle pour charger les cartes suivantes
  useEffect(() => {
    if (allLoaded || rendered === 0) return;
    const el = sentinelRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRendered((prev) => Math.min(prev + LOAD_BATCH, entries.length));
        }
      },
      { rootMargin: "300px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [rendered, allLoaded, entries.length]);

  const visibleEntries = entries.slice(0, rendered);
  const remaining = entries.length - rendered;
  const placeholderHeight = remaining * 140;

  return (
    <section ref={sectionRef} id={`letter-${letter}`} className="scroll-mt-28">
      {/* En-tête de lettre */}
      <div className="mb-5 flex items-center gap-3 sm:mb-6">
        <h2 className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-accent/10 to-violet-500/10 font-serif text-xl font-bold text-white sm:h-12 sm:w-12 sm:text-2xl">
          {letter}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
        <span className="text-xs text-white/50">
          {entries.length} terme{entries.length > 1 ? "s" : ""}
        </span>
      </div>

      {/* Cartes rendues progressivement */}
      {rendered > 0 && (
        <div className="space-y-4">
          {visibleEntries.map((entry) => (
            <EntryCard key={entry.slug} entry={entry} />
          ))}
        </div>
      )}

      {/* Sentinelle + placeholder pour le reste */}
      {!allLoaded && (
        <div ref={sentinelRef} style={{ minHeight: placeholderHeight }} className="mt-4 flex items-center justify-center rounded-2xl border border-dashed border-white/[0.06]">
          <span className="text-sm text-white/20">
            {remaining} terme{remaining > 1 ? "s" : ""} …
          </span>
        </div>
      )}
    </section>
  );
}