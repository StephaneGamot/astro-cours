/* ================================================================== */
/*  LetterSection — Server Component (i18n)                            */
/*                                                                    */
/*  Tout SSR (contenu indexable). Les libellés (catégories, « voir     */
/*  aussi », compteur) sont passés en props depuis la page localisée.  */
/*  Les liens « voir aussi » utilisent les slugs canoniques            */
/*  (relatedSlugs) → stables quelle que soit la langue.                */
/* ================================================================== */

import type { DictCategory, DictEntryLocalized } from "@/lib/dictionnaire";

/* ── Styles par catégorie (clé logique FR) ── */
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

interface Labels {
  seeAlso: string;
  catLabel: Record<DictCategory, string>;
  slugToTerm: Record<string, string>;
}

/* ── EntryCard ── */
function EntryCard({ entry, labels }: { entry: DictEntryLocalized; labels: Labels }) {
  const s = CS[entry.category];
  if (!s) return null;

  return (
    <div id={entry.slug} className={`scroll-mt-24 rounded-2xl border bg-white/[0.02] p-5 sm:p-6 lg:p-7 ${s.border}`}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="font-serif text-xl font-semibold tracking-tight text-white sm:text-2xl">
          {entry.term}
        </h3>
        <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider sm:text-xs ${s.bg} ${s.text} ${s.border}`}>
          <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} aria-hidden />
          {labels.catLabel[entry.category] ?? entry.category}
        </span>
      </div>
      <p className={`mt-2 text-sm font-medium italic ${s.text} opacity-80`}>
        {entry.short}
      </p>
      <p className="mt-4 text-[0.92rem] leading-[1.8] text-white/70 sm:text-[0.95rem]">
        {entry.body}
      </p>
      {entry.relatedSlugs && entry.relatedSlugs.length > 0 && (
        <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-white/[0.06] pt-4">
          <span className="text-[0.65rem] font-semibold uppercase tracking-widest text-white/50 sm:text-xs">
            {labels.seeAlso}
          </span>
          {entry.relatedSlugs.map((slug) => (
            <a
              key={slug}
              href={`#${slug}`}
              className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-xs text-white/60 transition-colors hover:border-white/20 hover:text-white/80"
            >
              {labels.slugToTerm[slug] ?? slug}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── LetterSection ── */
interface Props {
  letter: string;
  entries: DictEntryLocalized[];
  countLabel: string;
  labels: Labels;
  /** Si true (1re lettre), pas de content-visibility (au-dessus du fold). */
  eager?: boolean;
}

export default function LetterSection({ letter, entries, countLabel, labels, eager = false }: Props) {
  return (
    <section
      id={`letter-${letter}`}
      className="scroll-mt-28"
      style={
        !eager
          ? {
              contentVisibility: "auto",
              containIntrinsicSize: `auto ${entries.length * 220}px`,
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
        <span className="text-xs text-white/50">{countLabel}</span>
      </div>

      {/* Cartes — toutes rendues server-side */}
      <div className="space-y-4">
        {entries.map((entry) => (
          <EntryCard key={entry.slug} entry={entry} labels={labels} />
        ))}
      </div>
    </section>
  );
}
