import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import {
  Sparkles,
  BookOpen,
  GraduationCap,
  Compass,
  Shield,
  Eye,
  Lock,
  Heart,
  Target,
  Layers,
  Code,
  Leaf,
} from "lucide-react";
import {
  absoluteUrl,
  buildMeta,
  localizedPathUrl,
  pathLanguageAlternates,
  toSeoLocale,
} from "@/lib/seo";
import { auteurContent } from "./content";

/* ================================================================== */
/*  SEO — Metadata Next.js                                            */
/* ================================================================== */
const INTERNAL_PATH = "/auteur/stephane-gamot";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = toSeoLocale(locale);
  const c = auteurContent[loc];
  return buildMeta({
    title: c.meta.title,
    description: c.meta.description,
    canonicalPath: INTERNAL_PATH,
    type: "article",
    locale: loc,
    canonicalUrl: localizedPathUrl(INTERNAL_PATH, loc),
    languages: pathLanguageAlternates(INTERNAL_PATH),
  });
}

/* ================================================================== */
/*  Icônes Éthique (identiques à toutes les langues)                  */
/* ================================================================== */
const ETHIQUE_ICONS = [Shield, Eye, Lock];

/* ================================================================== */
/*  Composants internes                                               */
/* ================================================================== */

function SectionBlock({
  icon: Icon,
  badge,
  badgeColor,
  title,
  children,
}: {
  icon: React.ElementType;
  badge: string;
  badgeColor: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="relative rounded-2xl border border-white/[0.06] bg-surface/60 backdrop-blur-sm px-5 py-6 transition-all duration-300 hover:border-white/[0.12] hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] sm:px-7 sm:py-8">
      <div className="mb-4 flex flex-wrap items-center gap-2 sm:gap-3">
        <span
          className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-0.5 text-[0.7rem] font-semibold uppercase tracking-wider ${badgeColor}`}
        >
          <Icon className="h-3 w-3" />
          {badge}
        </span>
        <h2 className="font-serif text-lg font-semibold tracking-tight text-text sm:text-xl">
          {title}
        </h2>
      </div>
      <div className="space-y-4 text-[0.92rem] leading-[1.78] text-text/70 sm:text-[0.935rem]">
        {children}
      </div>
    </section>
  );
}

/* ================================================================== */
/*  Page                                                              */
/* ================================================================== */

export default async function AuteurPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const loc = toSeoLocale(locale);
  const c = auteurContent[loc];
  const s = c.sections;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Stéphane Gamot",
    url: localizedPathUrl(INTERNAL_PATH, loc),
    sameAs: [
      absoluteUrl("/a-propos"),
      "https://www.facebook.com/profile.php?id=61577719253973",
    ],
    jobTitle: c.jsonld.jobTitle,
    description: c.jsonld.description,
    knowsAbout: c.jsonld.knowsAbout,
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "AstroCours.be",
      url: "https://www.astrocours.be",
      description: c.jsonld.alumniDescription,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": localizedPathUrl(INTERNAL_PATH, loc),
    },
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main
        id="main-content"
        className="relative mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20"
      >
        {/* ── Glow décoratif ── */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(108,124,255,.45) 0%, rgba(139,92,246,.25) 40%, transparent 70%)",
          }}
        />

        {/* ── En-tête ──────────────────────────────────────────── */}
        <header className="relative mb-10 space-y-5 text-center sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span className="text-xs font-medium tracking-wide text-accent">
              {c.badge}
            </span>
          </div>

          <h1 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem]">
            {c.h1.first}{" "}
            <span className="bg-gradient-to-r from-violet-400 via-accent to-sky-400 bg-clip-text text-transparent">
              {c.h1.highlight}
            </span>
            <span className="block mt-2 text-lg font-normal text-text/60 sm:text-xl">
              {c.h1.subtitle}
            </span>
          </h1>

          <p className="mx-auto max-w-xl text-sm leading-relaxed text-text/55 sm:text-[0.94rem]">
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

        {/* ── Contenu ───────────────────────────────────────────────── */}
        <div className="space-y-6 sm:space-y-8">
          {/* ─── Ma philosophie ─── */}
          <SectionBlock
            icon={Heart}
            badge={s.philosophy.badge}
            badgeColor="bg-rose-500/10 text-rose-400"
            title={s.philosophy.title}
          >
            {s.philosophy.body}

            {/* Astro-psychologie — principes */}
            <div className="mt-3 rounded-xl border border-rose-400/10 bg-rose-500/[0.04] px-5 py-4">
              <p className="mb-3 text-sm font-semibold text-text/85">
                {s.philosophy.principlesTitle}
              </p>
              <div className="space-y-2 text-[0.82rem] leading-relaxed text-text/60">
                {s.philosophy.principles}
              </div>
            </div>

            <p className="mt-3 text-[0.82rem] leading-relaxed text-text/50 italic">
              {s.philosophy.note}
            </p>
          </SectionBlock>

          {/* ─── Parcours parallèle ─── */}
          <SectionBlock
            icon={Code}
            badge={s.profile.badge}
            badgeColor="bg-cyan-500/10 text-cyan-400"
            title={s.profile.title}
          >
            <p>{s.profile.intro}</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <div className="flex gap-3 rounded-xl border border-cyan-400/10 bg-cyan-500/[0.04] px-4 py-3.5">
                <Code className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400/70" />
                <div>
                  <p className="text-sm font-semibold text-text/85">
                    {s.profile.cardEngTitle}
                  </p>
                  <p className="mt-1 text-[0.82rem] leading-relaxed text-text/55">
                    {s.profile.cardEngText}
                  </p>
                </div>
              </div>
              <div className="flex gap-3 rounded-xl border border-cyan-400/10 bg-cyan-500/[0.04] px-4 py-3.5">
                <Leaf className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400/70" />
                <div>
                  <p className="text-sm font-semibold text-text/85">
                    {s.profile.cardTcmTitle}
                  </p>
                  <p className="mt-1 text-[0.82rem] leading-relaxed text-text/55">
                    {s.profile.cardTcmText}
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-3">{s.profile.outro}</p>
          </SectionBlock>

          {/* ─── La naissance de cette passion ─── */}
          <SectionBlock
            icon={Sparkles}
            badge={s.origins.badge}
            badgeColor="bg-amber-500/10 text-amber-400"
            title={s.origins.title}
          >
            {s.origins.body}
          </SectionBlock>

          {/* ─── Formation ─── */}
          <SectionBlock
            icon={GraduationCap}
            badge={s.formation.badge}
            badgeColor="bg-violet-500/10 text-violet-400"
            title={s.formation.title}
          >
            <p>{s.formation.intro}</p>
            <p>{s.formation.themesLead}</p>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {s.formation.themes.map((t) => (
                <div
                  key={t}
                  className="flex items-start gap-2 rounded-lg border border-violet-400/10 bg-violet-500/[0.04] px-3 py-2"
                >
                  <BookOpen className="mt-0.5 h-3.5 w-3.5 shrink-0 text-violet-400/60" />
                  <span className="text-[0.82rem] leading-snug text-text/60">
                    {t}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-3">{s.formation.outro}</p>
          </SectionBlock>

          {/* ─── Pourquoi ─── */}
          <SectionBlock
            icon={Compass}
            badge={s.motivation.badge}
            badgeColor="bg-sky-500/10 text-sky-400"
            title={s.motivation.title}
          >
            {s.motivation.body}
          </SectionBlock>

          {/* ─── Approche et méthode ─── */}
          <SectionBlock
            icon={Target}
            badge={s.method.badge}
            badgeColor="bg-emerald-500/10 text-emerald-400"
            title={s.method.title}
          >
            {s.method.body}
          </SectionBlock>

          {/* ─── Éthique ─── */}
          <SectionBlock
            icon={Layers}
            badge={s.ethics.badge}
            badgeColor="bg-indigo-500/10 text-indigo-400"
            title={s.ethics.title}
          >
            <p>{s.ethics.intro}</p>
            <div className="mt-3 space-y-3">
              {s.ethics.items.map((item, i) => {
                const Icon = ETHIQUE_ICONS[i];
                return (
                  <div
                    key={item.title}
                    className="flex gap-3 rounded-xl border border-indigo-400/10 bg-indigo-500/[0.04] px-4 py-3.5"
                  >
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400/70" />
                    <div>
                      <p className="text-sm font-semibold text-text/85">
                        {item.title}
                      </p>
                      <p className="mt-1 text-[0.82rem] leading-relaxed text-text/55">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </SectionBlock>

          {/* ─── Ce que je cherche à faire ─── */}
          <SectionBlock
            icon={Compass}
            badge={s.mission.badge}
            badgeColor="bg-teal-500/10 text-teal-400"
            title={s.mission.title}
          >
            {s.mission.body}
          </SectionBlock>
        </div>

        {/* ── Citation de clôture ─────────────────────────────── */}
        <footer className="mt-8 sm:mt-12">
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-violet-500/[0.06] via-accent/[0.04] to-sky-500/[0.06] px-6 py-8 text-center sm:px-10 sm:py-10">
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
    </>
  );
}
