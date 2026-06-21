"use client";

import { useRef, useState, useEffect } from "react";
import type { DictCategory, DictEntry } from "@/lib/dictionnaire";

/* ================================================================== */
/*  Chargement dynamique — chaque lettre = un chunk séparé            */
/* ================================================================== */
const LETTER_LOADERS: Record<string, () => Promise<{ default: unknown[] }>> = {
  A: () => import("@/data/dictionnaire/A.json"),
  B: () => import("@/data/dictionnaire/B.json"),
  C: () => import("@/data/dictionnaire/C.json"),
  D: () => import("@/data/dictionnaire/D.json"),
  E: () => import("@/data/dictionnaire/E.json"),
  F: () => import("@/data/dictionnaire/F.json"),
  G: () => import("@/data/dictionnaire/G.json"),
  H: () => import("@/data/dictionnaire/H.json"),
  I: () => import("@/data/dictionnaire/I.json"),
  J: () => import("@/data/dictionnaire/J.json"),
  K: () => import("@/data/dictionnaire/K.json"),
  L: () => import("@/data/dictionnaire/L.json"),
  M: () => import("@/data/dictionnaire/M.json"),
  N: () => import("@/data/dictionnaire/N.json"),
  O: () => import("@/data/dictionnaire/O.json"),
  P: () => import("@/data/dictionnaire/P.json"),
  Q: () => import("@/data/dictionnaire/Q.json"),
  R: () => import("@/data/dictionnaire/R.json"),
  S: () => import("@/data/dictionnaire/S.json"),
  T: () => import("@/data/dictionnaire/T.json"),
  U: () => import("@/data/dictionnaire/U.json"),
  V: () => import("@/data/dictionnaire/V.json"),
  W: () => import("@/data/dictionnaire/W.json"),
  X: () => import("@/data/dictionnaire/X.json"),
  Y: () => import("@/data/dictionnaire/Y.json"),
  Z: () => import("@/data/dictionnaire/Z.json"),
};

/* ================================================================== */
/*  Styles par catégorie                                              */
/* ================================================================== */
const CS: Record<DictCategory, { bg: string; text: string; border: string; dot: string }> = {
  planète:       { bg: "bg-amber-500/10",   text: "text-amber-300",   border: "border-amber-400/20",   dot: "bg-amber-400" },
  signe:         { bg: "bg-emerald-500/10", text: "text-emerald-300", border: "border-emerald-400/20", dot: "bg-emerald-400" },
  maison:        { bg: "bg-sky-500/10",     text: "text-sky-300",     border: "border-sky-400/20",     dot: "bg-sky-400" },
  aspect:        { bg: "bg-violet-500/10",  text: "text-violet-300",  border: "border-violet-400/20",  dot: "bg-violet-400" },
  concept:       { bg: "bg-rose-500/10",    text: "text-rose-300",    border: "border-rose-400/20",    dot: "bg-rose-400" },
  "point fictif":{ bg: "bg-fuchsia-500/10", text: "text-fuchsia-300", border: "border-fuchsia-400/20", dot: "bg-fuchsia-400" },
  technique:     { bg: "bg-cyan-500/10",    text: "text-cyan-300",    border: "border-cyan-400/20",    dot: "bg-cyan-400" },
  personnalité:  { bg: "bg-orange-500/10",  text: "text-orange-300",  border: "border-orange-400/20",  dot: "bg-orange-400" },
  astronomique:  { bg: "bg-indigo-500/10",  text: "text-indigo-300",  border: "border-indigo-400/20",  dot: "bg-indigo-400" },
  branche:       { bg: "bg-lime-500/10",    text: "text-lime-300",    border: "border-lime-400/20",    dot: "bg-lime-400" },
  constellation: { bg: "bg-teal-500/10",    text: "text-teal-300",    border: "border-teal-400/20",    dot: "bg-teal-400" },
  personnage:    { bg: "bg-yellow-500/10",  text: "text-yellow-300",  border: "border-yellow-400/20",  dot: "bg-yellow-400" },
};

/* ================================================================== */
/*  EntryCard                                                         */
/* ================================================================== */
function EntryCard({ entry }: { entry: DictEntry }) {
  const s = CS[entry.category];
  if (!s) return null;

  return (
    <div id={entry.slug} className={`scroll-mt-24 rounded-2xl border bg-white/[0.02] p-5 sm:p-6 lg:p-7 ${s.border}`}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="font-serif text-xl font-semibold tracking-tight text-white sm:text-2xl">{entry.term}</h3>
        <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider sm:text-xs ${s.bg} ${s.text} ${s.border}`}>
          <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} aria-hidden />{entry.category}
        </span>
      </div>
      <p className={`mt-2 text-sm font-medium italic ${s.text} opacity-80`}>{entry.short}</p>
      <p className="mt-4 text-[0.92rem] leading-[1.8] text-white/70 sm:text-[0.95rem]">{entry.body}</p>
      {entry.related && entry.related.length > 0 && (
        <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-white/[0.06] pt-4">
          <span className="text-[0.65rem] font-semibold uppercase tracking-widest text-white/50 sm:text-xs">Voir aussi</span>
          {entry.related.map((r) => {
            const slug = r.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
            return <a key={r} href={`#${slug}`} className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-xs text-white/60 transition-colors hover:border-white/20 hover:text-white/80">{r}</a>;
          })}
        </div>
      )}
    </div>
  );
}

/* ================================================================== */
/*  Constantes                                                        */
/* ================================================================== */
const INITIAL_BATCH = 5;
const LOAD_BATCH = 10;

/* ================================================================== */
/*  LazyLetterSection                                                 */
/* ================================================================== */
interface Props {
  letter: string;
  count: number;
  eager?: boolean;
}

export default function LazyLetterSection({ letter, count, eager = false }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const [entries, setEntries] = useState<DictEntry[]>([]);
  const [rendered, setRendered] = useState(0);
  const loadingRef = useRef(false);

  /* ── Charge le JSON de la lettre ── */
  const loadData = () => {
    if (loadingRef.current || entries.length > 0) return;
    loadingRef.current = true;
    const loader = LETTER_LOADERS[letter];
    if (!loader) return;
    loader().then((mod) => {
      const data = (mod.default as DictEntry[]).sort((a, b) =>
        a.term.localeCompare(b.term, "fr", { sensitivity: "base" })
      );
      setEntries(data);
      setRendered(Math.min(INITIAL_BATCH, data.length));
    });
  };

  /* ── Eager : charge dès le mount ── */
  useEffect(() => {
    if (eager) loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ── Non-eager : charge quand la section approche du viewport ── */
  useEffect(() => {
    if (eager || entries.length > 0) return;
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { loadData(); obs.disconnect(); } },
      { rootMargin: "400px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eager, entries.length]);

  /* ── Charge + de cartes au scroll ── */
  useEffect(() => {
    if (rendered >= entries.length || rendered === 0) return;
    const el = sentinelRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setRendered((prev) => Math.min(prev + LOAD_BATCH, entries.length)); },
      { rootMargin: "300px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [rendered, entries.length]);

  const visibleEntries = entries.slice(0, rendered);
  const allLoaded = entries.length > 0 && rendered >= entries.length;

  return (
    <section
      ref={sectionRef}
      id={`letter-${letter}`}
      className="scroll-mt-28"
      /* ─────────────────────────────────────────────────────────────
       * FIX CLS : content-visibility + contain-intrinsic-size
       * Le navigateur réserve l'espace SANS créer de nœuds DOM.
       * Pas de min-height dynamique → pas de layout shift.
       * ───────────────────────────────────────────────────────────── */
      style={
        !eager
          ? {
              contentVisibility: "auto",
              containIntrinsicSize: `auto 200px`,
            }
          : undefined
      }
    >
      {/* En-tête */}
      <div className="mb-5 flex items-center gap-3 sm:mb-6">
        <h2 className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-accent/10 to-violet-500/10 font-serif text-xl font-bold text-white sm:h-12 sm:w-12 sm:text-2xl">
          {letter}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
        <span className="text-xs text-white/50">
          {count} terme{count > 1 ? "s" : ""}
        </span>
      </div>

      {/* Cartes */}
      {rendered > 0 && (
        <div className="space-y-4">
          {visibleEntries.map((entry) => (
            <EntryCard key={entry.slug} entry={entry} />
          ))}
        </div>
      )}

      {/* ────────────────────────────────────────────────────────────
       * FIX CLS : plus de div géant avec min-height: Xpx
       * Juste une petite sentinelle de 64px qui déclenche le chargement.
       * ──────────────────────────────────────────────────────────── */}
      {!allLoaded && (
        <div
          ref={sentinelRef}
          className="mt-4 flex h-16 items-center justify-center rounded-2xl border border-dashed border-white/[0.06]"
        >
          <span className="text-sm text-white/20">
            {entries.length > 0
              ? `${entries.length - rendered} terme${entries.length - rendered > 1 ? "s" : ""} …`
              : `${count} terme${count > 1 ? "s" : ""} …`}
          </span>
        </div>
      )}
    </section>
  );
}