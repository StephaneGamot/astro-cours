import type { Metadata } from "next";
import {
  Sparkles,
  BookOpen,
  GraduationCap,
  Library,
  Compass,
} from "lucide-react";
import {
  SITE_NAME,
  SITE_URL,
  AUTHOR_PERSON,
  buildMeta,
  localizedPathUrl,
  pathLanguageAlternates,
  toSeoLocale,
} from "@/lib/seo";
import { aProposContent } from "./content";

/* ------------------------------------------------------------------ */
/*  SEO                                                               */
/* ------------------------------------------------------------------ */
const INTERNAL_PATH = "/a-propos";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = toSeoLocale(locale);
  const c = aProposContent[loc];
  return buildMeta({
    title: c.meta.title,
    description: c.meta.description,
    canonicalPath: INTERNAL_PATH,
    type: "website",
    locale: loc,
    canonicalUrl: localizedPathUrl(INTERNAL_PATH, loc),
    languages: pathLanguageAlternates(INTERNAL_PATH),
  });
}

/* ------------------------------------------------------------------ */
/*  Données — icônes & couleurs (identiques à toutes les langues)     */
/* ------------------------------------------------------------------ */
const CHAPTER_META = [
  { icon: Sparkles, color: "amber" as const },
  { icon: BookOpen, color: "sky" as const },
  { icon: GraduationCap, color: "violet" as const },
  { icon: Library, color: "rose" as const },
  { icon: Compass, color: "emerald" as const },
];

const AUTHOR_STYLES = [
  { color: "from-indigo-500/20 to-blue-500/10", border: "border-indigo-400/20" },
  { color: "from-violet-500/20 to-purple-500/10", border: "border-violet-400/20" },
  { color: "from-amber-500/15 to-orange-500/10", border: "border-amber-400/20" },
  { color: "from-sky-500/15 to-cyan-500/10", border: "border-sky-400/20" },
  { color: "from-emerald-500/15 to-teal-500/10", border: "border-emerald-400/20" },
];

/* ------------------------------------------------------------------ */
/*  Couleurs par chapitre                                             */
/* ------------------------------------------------------------------ */
const PALETTE = {
  amber: {
    badge: "bg-amber-500/10 text-amber-400",
    icon: "text-amber-400",
    line: "from-amber-500/40 via-amber-500/10 to-transparent",
    dot: "bg-amber-400 shadow-amber-400/40",
  },
  sky: {
    badge: "bg-sky-500/10 text-sky-400",
    icon: "text-sky-400",
    line: "from-sky-500/40 via-sky-500/10 to-transparent",
    dot: "bg-sky-400 shadow-sky-400/40",
  },
  violet: {
    badge: "bg-violet-500/10 text-violet-400",
    icon: "text-violet-400",
    line: "from-violet-500/40 via-violet-500/10 to-transparent",
    dot: "bg-violet-400 shadow-violet-400/40",
  },
  rose: {
    badge: "bg-rose-500/10 text-rose-400",
    icon: "text-rose-400",
    line: "from-rose-500/40 via-rose-500/10 to-transparent",
    dot: "bg-rose-400 shadow-rose-400/40",
  },
  emerald: {
    badge: "bg-emerald-500/10 text-emerald-400",
    icon: "text-emerald-400",
    line: "from-emerald-500/40 via-emerald-500/10 to-transparent",
    dot: "bg-emerald-400 shadow-emerald-400/40",
  },
};

/* ------------------------------------------------------------------ */
/*  Chapter (timeline style)                                          */
/* ------------------------------------------------------------------ */
function Chapter({
  index,
  icon: Icon,
  label,
  color,
  title,
  children,
  isLast,
}: {
  index: number;
  icon: React.ElementType;
  label: string;
  color: keyof typeof PALETTE;
  title: string;
  children: React.ReactNode;
  isLast?: boolean;
}) {
  const p = PALETTE[color];

  return (
    <div className="relative flex gap-4 sm:gap-6">
      {/* ── Timeline verticale ── */}
      <div className="relative flex flex-col items-center">
        {/* Dot */}
        <div
          className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-surface/80 backdrop-blur-sm sm:h-12 sm:w-12`}
        >
          <Icon className={`h-4 w-4 sm:h-5 sm:w-5 ${p.icon}`} />
        </div>
        {/* Ligne */}
        {!isLast && (
          <div
            className={`mt-2 w-px flex-1 bg-gradient-to-b ${p.line}`}
          />
        )}
      </div>

      {/* ── Carte contenu ── */}
      <div
        className={`group relative mb-8 flex-1 rounded-2xl border border-white/[0.06] bg-surface/60 backdrop-blur-sm px-5 py-5 transition-all duration-300 hover:border-white/[0.12] hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] sm:mb-10 sm:px-7 sm:py-6`}
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {/* Badge + titre */}
        <div className="mb-3 flex flex-wrap items-center gap-2 sm:gap-3">
          <span
            className={`inline-flex items-center rounded-lg px-2.5 py-0.5 text-[0.7rem] font-semibold uppercase tracking-wider ${p.badge}`}
          >
            {label}
          </span>
          <h2 className="font-serif text-lg font-semibold tracking-tight text-text sm:text-xl">
            {title}
          </h2>
        </div>

        <div className="space-y-3 text-[0.92rem] leading-[1.75] text-text/70 sm:text-[0.935rem]">
          {children}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */
export default async function AProposPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = toSeoLocale(locale);
  const c = aProposContent[loc];

  return (
    <main id="main-content" className="relative mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: c.jsonld.name,
            description: c.jsonld.description,
            inLanguage: loc,
            url: localizedPathUrl(INTERNAL_PATH, loc),
            mainEntity: AUTHOR_PERSON,
            isPartOf: {
              "@type": "WebSite",
              name: SITE_NAME,
              url: SITE_URL,
            },
          }),
        }}
      />
      {/* ── Glow décoratif ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(108,124,255,.45) 0%, rgba(139,92,246,.25) 40%, transparent 70%)",
        }}
      />

      {/* ── En-tête ─────────────────────────────────────────────── */}
      <header className="relative mb-10 space-y-5 text-center sm:mb-14">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5">
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          <span className="text-xs font-medium tracking-wide text-accent">
            {c.badge}
          </span>
        </div>

        <h1 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem]">
          {c.h1.before}
          <span className="bg-gradient-to-r from-violet-400 via-accent to-sky-400 bg-clip-text text-transparent">
            {c.h1.highlight}
          </span>
          {c.h1.after}
        </h1>

        <p className="mx-auto max-w-lg text-sm leading-relaxed text-text/55 sm:text-[0.94rem]">
          {c.intro}
        </p>

        {/* Chiffres clés */}
        <div className="mx-auto flex max-w-md justify-center gap-6 pt-2 sm:gap-10">
          {c.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-2xl font-bold text-text sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-0.5 text-[0.7rem] uppercase tracking-wider text-text/40 sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </header>

      {/* ── Timeline / Chapitres ────────────────────────────────── */}
      <div className="relative">
        {c.chapters.map((chapter, i) => (
          <Chapter
            key={chapter.label}
            index={i}
            icon={CHAPTER_META[i].icon}
            color={CHAPTER_META[i].color}
            label={chapter.label}
            title={chapter.title}
            isLast={i === c.chapters.length - 1}
          >
            {chapter.body}

            {/* Auteurs (chapitre « Les racines ») */}
            {i === 3 && (
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {c.authors.map((a, j) => (
                  <div
                    key={a.name}
                    className={`rounded-xl border ${AUTHOR_STYLES[j].border} bg-gradient-to-br ${AUTHOR_STYLES[j].color} px-4 py-3.5 transition-colors duration-300 hover:border-white/[0.15]`}
                  >
                    <p className="text-sm font-semibold text-text/90">{a.name}</p>
                    <p className="mt-1 text-[0.78rem] leading-relaxed text-text/50">
                      {a.note}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </Chapter>
        ))}
      </div>

      {/* ── Citation de clôture ─────────────────────────────────── */}
      <footer className="mt-6 sm:mt-10">
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-violet-500/[0.06] via-accent/[0.04] to-sky-500/[0.06] px-6 py-8 text-center sm:px-10 sm:py-10">
          {/* Glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(108,124,255,.15) 0%, transparent 60%)",
            }}
          />

          <blockquote className="relative mx-auto max-w-md font-serif text-base italic leading-relaxed text-text/60 sm:text-lg">
            {c.quote}
          </blockquote>
          <p className="relative mt-3 text-xs font-medium tracking-wide text-text/30 sm:text-sm">
            {c.quoteAuthor}
          </p>
        </div>
      </footer>
    </main>
  );
}
