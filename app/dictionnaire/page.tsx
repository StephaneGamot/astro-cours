import type { Metadata } from "next";
import { BookOpen, Search, Sparkles } from "lucide-react";
import { SITE_NAME, absoluteUrl, buildTitle } from "@/lib/seo";
import {
  ENTRIES,
  groupByLetter,
  type DictCategory,
  type DictEntry,
} from "@/lib/dictionnaire";

/* ================================================================== */
/*  SEO — Metadata                                                    */
/* ================================================================== */
const CANONICAL = "/dictionnaire";
const TITLE = "Dictionnaire astrologique";
const DESCRIPTION =
  "Dictionnaire astrologique complet : définitions claires et accessibles des termes essentiels de l'astrologie — planètes, signes, maisons, aspects, transits et plus encore.";

export const metadata: Metadata = {
  title: buildTitle(TITLE),
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true },

  openGraph: {
    title: buildTitle(TITLE),
    description: DESCRIPTION,
    url: absoluteUrl(CANONICAL),
    siteName: SITE_NAME,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: absoluteUrl("/og/cover.jpg"),
        width: 1200,
        height: 630,
        alt: buildTitle(TITLE),
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: buildTitle(TITLE),
    description: DESCRIPTION,
    images: [absoluteUrl("/og/cover.jpg")],
  },
};

/* ================================================================== */
/*  Styles par catégorie                                              */
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
};

/* ================================================================== */
/*  Composants                                                        */
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

  return (
    <div
      id={entry.slug}
      className={`group scroll-mt-24 rounded-2xl border bg-white/[0.02] p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.04] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] sm:p-6 lg:p-7 ${s.border}`}
    >
      {/* Titre + badge */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="font-serif text-xl font-semibold tracking-tight text-white sm:text-2xl">
          {entry.term}
        </h3>
        <CategoryBadge category={entry.category} />
      </div>

      {/* Définition courte */}
      <p className={`mt-2 text-sm font-medium italic ${s.text} opacity-80`}>
        {entry.short}
      </p>

      {/* Corps */}
      <p className="mt-4 text-[0.92rem] leading-[1.8] text-white/70 sm:text-[0.95rem]">
        {entry.body}
      </p>

      {/* Termes liés */}
      {entry.related && entry.related.length > 0 && (
        <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-white/[0.06] pt-4">
          <span className="text-[0.65rem] font-semibold uppercase tracking-widest text-white/30 sm:text-xs">
            Voir aussi
          </span>
          {entry.related.map((r) => (
            <span
              key={r}
              className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-xs text-white/50 transition-colors hover:border-white/20 hover:text-white/70"
            >
              {r}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

/* ================================================================== */
/*  Page                                                              */
/* ================================================================== */
export default function DictionnairePage() {
  const grouped = groupByLetter(ENTRIES);
  const letters = Object.keys(grouped).sort((a, b) =>
    a.localeCompare(b, "fr")
  );
  const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <main className="relative mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      {/* ── Schema.org DefinedTermSet ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DefinedTermSet",
            name: "Dictionnaire astrologique — Astro Cours",
            description: DESCRIPTION,
            url: absoluteUrl(CANONICAL),
            inLanguage: "fr-FR",
            hasDefinedTerm: ENTRIES.map((e) => ({
              "@type": "DefinedTerm",
              name: e.term,
              description: e.short,
              url: `${absoluteUrl(CANONICAL)}#${e.slug}`,
              inDefinedTermSet: absoluteUrl(CANONICAL),
            })),
          }),
        }}
      />

      {/* ── Glow décoratif ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(108,124,255,.4) 0%, rgba(139,92,246,.2) 40%, transparent 70%)",
        }}
      />

      {/* ── En-tête ── */}
      <header className="relative mb-10 space-y-5 text-center sm:mb-14">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5">
          <BookOpen className="h-3.5 w-3.5 text-accent" />
          <span className="text-xs font-medium tracking-wide text-accent">
            Référence
          </span>
        </div>

        <h1 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem]">
          Dictionnaire{" "}
          <span className="bg-gradient-to-r from-amber-300 via-violet-400 to-sky-400 bg-clip-text text-transparent">
            astrologique
          </span>
        </h1>

        <p className="mx-auto max-w-xl text-sm leading-relaxed text-text/55 sm:text-[0.94rem]">
          D&eacute;finitions claires et accessibles des termes essentiels
          de l&rsquo;astrologie. Un outil de r&eacute;f&eacute;rence &agrave;
          consulter &agrave; tout moment pour accompagner votre apprentissage.
        </p>

        {/* Compteur */}
        <div className="flex items-center justify-center gap-2 pt-1">
          <Sparkles className="h-4 w-4 text-violet-400" />
          <span className="text-sm text-text/40">
            {ENTRIES.length} termes d&eacute;finis &mdash; dictionnaire en
            construction
          </span>
        </div>
      </header>

      {/* ── Navigation alphabétique ── */}
      <nav
        aria-label="Navigation alphab&eacute;tique"
        className="sticky top-16 z-30 -mx-4 mb-10 overflow-x-auto border-b border-white/[0.06] bg-[var(--bg)]/80 px-4 py-3 backdrop-blur-xl sm:mb-12 sm:rounded-xl sm:border sm:border-white/[0.06]"
      >
        <div className="flex gap-1 sm:flex-wrap sm:justify-center sm:gap-1.5">
          {allLetters.map((l) => {
            const active = letters.includes(l);
            return (
              <a
                key={l}
                href={active ? `#letter-${l}` : undefined}
                aria-disabled={!active}
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-semibold transition-colors sm:h-9 sm:w-9 sm:text-sm ${
                  active
                    ? "border border-white/10 bg-white/[0.04] text-white/80 hover:border-accent/30 hover:bg-accent/10 hover:text-accent"
                    : "cursor-default text-white/15"
                }`}
              >
                {l}
              </a>
            );
          })}
        </div>
      </nav>

      {/* ── Légende catégories ── */}
      <div className="mb-8 flex flex-wrap justify-center gap-2 sm:mb-10 sm:gap-3">
        {(Object.keys(CATEGORY_STYLE) as DictCategory[]).map((cat) => (
          <CategoryBadge key={cat} category={cat} />
        ))}
      </div>

      {/* ── Entrées par lettre ── */}
      <div className="space-y-12 sm:space-y-16">
        {letters.map((letter) => (
          <section key={letter} id={`letter-${letter}`} className="scroll-mt-28">
            {/* Lettre */}
            <div className="mb-5 flex items-center gap-3 sm:mb-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-accent/10 to-violet-500/10 font-serif text-xl font-bold text-white sm:h-12 sm:w-12 sm:text-2xl">
                {letter}
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
              <span className="text-xs text-white/25">
                {grouped[letter].length} terme
                {grouped[letter].length > 1 ? "s" : ""}
              </span>
            </div>

            {/* Cartes */}
            <div className="space-y-4">
              {grouped[letter].map((entry) => (
                <EntryCard key={entry.slug} entry={entry} />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* ── Footer ── */}
      <footer className="mt-14 border-t border-white/[0.06] pt-8 text-center sm:mt-16">
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-violet-500/[0.05] via-accent/[0.03] to-amber-500/[0.05] px-6 py-8 sm:px-10 sm:py-10">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-25"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(108,124,255,.12) 0%, transparent 60%)",
            }}
          />
          <Search className="relative mx-auto h-6 w-6 text-accent/40" />
          <p className="relative mt-3 font-serif text-base italic text-text/50 sm:text-lg">
            Ce dictionnaire s&rsquo;enrichit r&eacute;guli&egrave;rement.
          </p>
          <p className="relative mt-2 text-xs text-text/30 sm:text-sm">
            Un terme manque&nbsp;? &Eacute;crivez-nous &agrave;{" "}
            <a
              href="mailto:white-wolf-web@outlook.com"
              className="text-accent/50 underline decoration-accent/20 underline-offset-2 transition-colors hover:text-accent hover:decoration-accent/40"
            >
              white-wolf-web@outlook.com
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
