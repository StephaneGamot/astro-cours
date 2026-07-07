import type { Metadata } from "next";
import { BookOpen, Search, Sparkles } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  buildMeta,
  localizedPathUrl,
  pathLanguageAlternates,
  toSeoLocale,
} from "@/lib/seo";
import {
  getDictForLocale,
  groupByLetter,
  type DictCategory,
  type DictEntryLocalized,
} from "@/lib/dictionnaire";
import LetterSection from "./LetterSection";

const INTERNAL_PATH = "/dictionnaire-astrologique";

/* ================================================================== */
/*  SEO — Metadata (localisé)                                          */
/* ================================================================== */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = toSeoLocale(locale);
  const t = await getTranslations({ locale: loc, namespace: "dict" });
  return buildMeta({
    title: t("metaTitle"),
    description: t("metaDescription"),
    canonicalPath: INTERNAL_PATH,
    type: "website",
    locale: loc,
    canonicalUrl: localizedPathUrl(INTERNAL_PATH, loc),
    languages: pathLanguageAlternates(INTERNAL_PATH),
    ogImage: "/og/dico.jpg",
  });
}

/* ================================================================== */
/*  Styles catégories (légende) — clé logique FR                      */
/* ================================================================== */
const CAT_STYLE: Record<DictCategory, { bg: string; text: string; border: string; dot: string }> = {
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

const CATEGORIES = Object.keys(CAT_STYLE) as DictCategory[];

/* ================================================================== */
/*  Page (Server Component)                                           */
/* ================================================================== */
export default async function DictionnairePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const loc = toSeoLocale(locale);
  const t = await getTranslations({ locale: loc, namespace: "dict" });

  const entries = getDictForLocale(loc);
  const grouped = groupByLetter(entries) as Record<string, DictEntryLocalized[]>;
  const letters = Object.keys(grouped).sort((a, b) => a.localeCompare(b, loc));
  const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const letterData = letters.map((l) => ({ letter: l, entries: grouped[l] }));

  const catLabel = Object.fromEntries(
    CATEGORIES.map((c) => [c, t(`cat.${c}`)]),
  ) as Record<DictCategory, string>;

  const slugToTerm: Record<string, string> = {};
  for (const e of entries) slugToTerm[e.slug] = e.term;

  const labels = { seeAlso: t("seeAlso"), catLabel, slugToTerm };

  const canonical = localizedPathUrl(INTERNAL_PATH, loc);

  return (
    <main id="main-content" className="relative mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DefinedTermSet",
            name: t("jsonldName"),
            description: t("metaDescription"),
            url: canonical,
            inLanguage: loc,
            hasDefinedTerm: entries.map((e) => ({
              "@type": "DefinedTerm",
              name: e.term,
              description: e.short,
              url: `${canonical}#${e.slug}`,
              inDefinedTermSet: canonical,
            })),
          }),
        }}
      />

      {/* Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(108,124,255,.4) 0%, rgba(139,92,246,.2) 40%, transparent 70%)" }}
      />

      {/* En-tête */}
      <header className="relative mb-10 space-y-5 text-center sm:mb-14">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5">
          <BookOpen className="h-3.5 w-3.5 text-accent" />
          <span className="text-xs font-medium tracking-wide text-accent">{t("badge")}</span>
        </div>

        <h1 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem]">
          {t("h1Pre")}{" "}
          <span className="bg-gradient-to-r from-amber-300 via-violet-400 to-sky-400 bg-clip-text text-transparent">
            {t("h1Accent")}
          </span>
        </h1>

        <p className="mx-auto max-w-xl text-sm leading-relaxed text-text/70 sm:text-[0.94rem]">
          {t("intro")}
        </p>

        <div className="flex items-center justify-center gap-2 pt-1">
          <Sparkles className="h-4 w-4 text-violet-400" />
          <span className="text-sm text-text/60">{t("count", { count: entries.length })}</span>
        </div>
      </header>

      {/* Nav alphabétique */}
      <nav
        aria-label={t("navAria")}
        className="sticky top-16 z-30 -mx-4 mb-10 overflow-x-auto border-b border-white/[0.06] bg-[var(--bg)]/80 px-4 py-3 backdrop-blur-xl sm:mb-12 sm:rounded-xl sm:border sm:border-white/[0.06]"
      >
        <div className="flex gap-1 sm:flex-wrap sm:justify-center sm:gap-1.5">
          {allLetters.map((l) => {
            const active = letters.includes(l);
            const base = "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-semibold transition-colors sm:h-9 sm:w-9 sm:text-sm";
            return active ? (
              <a key={l} href={`#letter-${l}`} className={`${base} border border-white/10 bg-white/[0.04] text-white/80 hover:border-accent/30 hover:bg-accent/10 hover:text-accent`}>{l}</a>
            ) : (
              <span key={l} aria-hidden="true" className={`${base} cursor-default text-white/15`}>{l}</span>
            );
          })}
        </div>
      </nav>

      {/* Légende */}
      <div className="mb-8 flex flex-wrap justify-center gap-2 sm:mb-10 sm:gap-3">
        {CATEGORIES.map((cat) => {
          const s = CAT_STYLE[cat];
          return (
            <span key={cat} className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider sm:text-xs ${s.bg} ${s.text} ${s.border}`}>
              <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} aria-hidden />{catLabel[cat]}
            </span>
          );
        })}
      </div>

      {/* Entrées */}
      <div className="space-y-12 sm:space-y-16">
        {letterData.map(({ letter, entries: ent }, i) => (
          <LetterSection
            key={letter}
            letter={letter}
            entries={ent}
            countLabel={t("letterCount", { count: ent.length })}
            labels={labels}
            eager={i === 0}
          />
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-14 border-t border-white/[0.06] pt-8 text-center sm:mt-16">
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-violet-500/[0.05] via-accent/[0.03] to-amber-500/[0.05] px-6 py-8 sm:px-10 sm:py-10">
          <Search className="relative mx-auto h-6 w-6 text-accent/60" />
          <p className="relative mt-3 font-serif text-base italic text-text/65 sm:text-lg">
            {t("footerLine")}
          </p>
          <p className="relative mt-2 text-xs text-text/50 sm:text-sm">
            {t("footerAsk")}{" "}
            <a href="mailto:white-wolf-web@outlook.com" className="text-accent/70 underline decoration-accent/40 underline-offset-2 transition-colors hover:text-accent hover:decoration-accent/60">
              white-wolf-web@outlook.com
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
