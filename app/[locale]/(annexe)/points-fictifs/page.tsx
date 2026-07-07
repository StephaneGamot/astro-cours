import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import {
  Sparkles,
  Star,
  Orbit,
  Compass,
  Layers,
  ArrowLeft,
  HelpCircle,
  MoonStar,
  Target,
  CircleDot,
} from "lucide-react";

import HeroSrc from "@/public/images/points-fictifs.webp";
import {
  buildMeta,
  localizedPathUrl,
  pathLanguageAlternates,
  toSeoLocale,
  SITE_URL,
  AUTHOR_PERSON,
  PUBLISHER_ORG,
} from "@/lib/seo";
import { pointsFictifsContent, type AccentKind } from "./content";

/**
 * Page « Points fictifs » — cours premium, i18n (fr/en/es).
 * Tout le texte vient de ./content.tsx ; ici uniquement la présentation.
 */

const INTERNAL_PATH = "/points-fictifs";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = toSeoLocale(locale);
  const c = pointsFictifsContent[loc];
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

const pill =
  "rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/90 backdrop-blur-md transition-all hover:bg-white/15 hover:border-white/20";

const card =
  "relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c0c0e] p-8 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-[#111114]";

const softCard =
  "relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0c0c0e] p-10 backdrop-blur-md transition-all duration-300 hover:border-white/20";

const dot =
  "mt-2 h-1.5 w-1.5 shrink-0 rounded-full shadow-[0_0_8px_currentColor]";

function accent(kind: AccentKind) {
  switch (kind) {
    case "core":
      return {
        border: "border-emerald-400/25",
        glow: "shadow-[0_0_30px_rgba(52,211,153,0.08)]",
        dot: "bg-emerald-400 text-emerald-400",
        line: "bg-gradient-to-r from-emerald-500/20 via-emerald-400/60 to-transparent",
        text: "text-emerald-200",
        badge: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
      };
    case "math":
      return {
        border: "border-sky-400/25",
        glow: "shadow-[0_0_30px_rgba(56,189,248,0.08)]",
        dot: "bg-sky-400 text-sky-400",
        line: "bg-gradient-to-r from-sky-500/20 via-sky-400/60 to-transparent",
        text: "text-sky-200",
        badge: "border-sky-500/30 bg-sky-500/10 text-sky-300",
      };
    case "angle":
      return {
        border: "border-violet-400/25",
        glow: "shadow-[0_0_30px_rgba(167,139,250,0.08)]",
        dot: "bg-violet-400 text-violet-400",
        line: "bg-gradient-to-r from-violet-500/20 via-violet-400/60 to-transparent",
        text: "text-violet-200",
        badge: "border-violet-500/30 bg-violet-500/10 text-violet-300",
      };
    case "destiny":
      return {
        border: "border-amber-400/25",
        glow: "shadow-[0_0_30px_rgba(251,191,36,0.08)]",
        dot: "bg-amber-400 text-amber-400",
        line: "bg-gradient-to-r from-amber-500/20 via-amber-400/60 to-transparent",
        text: "text-amber-200",
        badge: "border-amber-500/30 bg-amber-500/10 text-amber-300",
      };
    default:
      return {
        border: "border-fuchsia-400/25",
        glow: "shadow-[0_0_30px_rgba(232,121,249,0.08)]",
        dot: "bg-fuchsia-400 text-fuchsia-400",
        line: "bg-gradient-to-r from-fuchsia-500/20 via-fuchsia-400/60 to-transparent",
        text: "text-fuchsia-200",
        badge: "border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-300",
      };
  }
}

function SectionTitle({
  children,
  id,
  icon: Icon,
}: {
  children: React.ReactNode;
  id: string;
  icon?: React.ElementType;
}) {
  return (
    <div className="group mb-12 mt-28 flex items-center gap-5 scroll-mt-28" id={id}>
      <div
        aria-hidden="true"
        className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/20 to-transparent text-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.15)] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
      >
        {Icon ? <Icon size={26} strokeWidth={1.5} /> : <Sparkles size={26} strokeWidth={1.5} />}
      </div>
      <h2 className="font-serif text-3xl tracking-tight text-white md:text-5xl">
        {children}
      </h2>
      <div className="ml-4 h-px flex-1 bg-gradient-to-r from-amber-500/30 via-amber-500/5 to-transparent" />
    </div>
  );
}

export default async function PointsFictifsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const loc = toSeoLocale(locale);
  const c = pointsFictifsContent[loc];

  const ARTICLE_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.jsonld.headline,
    description: c.jsonld.description,
    inLanguage: loc,
    mainEntityOfPage: { "@type": "WebPage", "@id": localizedPathUrl(INTERNAL_PATH, loc) },
    author: AUTHOR_PERSON,
    publisher: PUBLISHER_ORG,
    image: [`${SITE_URL}/og/cover.jpg`],
    datePublished: "2026-04-09T12:00:00Z",
    dateModified: "2026-05-08T12:00:00Z",
    articleSection: c.jsonld.articleSection,
  };

  const FAQ_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqJsonLd.map((f) => ({
      "@type": "Question",
      name: f.name,
      acceptedAnswer: { "@type": "Answer", text: f.text },
    })),
  };

  return (
    <>
      <main id="main-content" className="relative mx-auto max-w-7xl px-6 pb-24 text-slate-200 selection:bg-amber-500/30">
        {/* BACKGROUND GLOWS */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-10%] top-[-5%] h-[800px] w-[800px] rounded-full bg-amber-600/10 blur-[150px]" />
          <div className="absolute right-[-10%] top-[25%] h-[700px] w-[700px] rounded-full bg-violet-600/10 blur-[150px]" />
          <div className="absolute left-[20%] bottom-[-10%] h-[600px] w-[600px] rounded-full bg-sky-600/10 blur-[150px]" />
        </div>

        {/* JSON-LD Article */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />
      {/* HERO */}
        <header className="relative mb-28 pt-16 text-center md:text-left">
          <div className="flex flex-col items-center gap-16 lg:flex-row">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-amber-300 backdrop-blur-md">
                <Star size={16} className="animate-pulse text-amber-300" aria-hidden="true" />
                <span>{c.hero.eyebrow}</span>
              </div>

              <h1 className="mt-8 font-serif text-5xl font-light leading-[1.05] text-white md:text-6xl lg:text-[5rem]">
                {c.hero.h1}
              </h1>

              <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-slate-300 md:text-xl">
                {c.hero.intro}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {c.hero.highlights.map((x) => (
                  <span
                    key={x}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/10"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative flex w-full max-w-lg items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(251,191,36,0.1)] aspect-[4/5]">
              <Image
                src={HeroSrc}
                alt={c.hero.imgAlt}
                fill
                priority
                className="object-cover transition duration-[2s] hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </header>

        {/* Définition — Featured Snippet */}
        <div className="mt-8 rounded-2xl border border-violet-400/20 bg-violet-400/[0.04] px-6 py-5">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-300/80">{c.defBox.label}</p>
          <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
            {c.defBox.body}
          </p>
        </div>

        {/* APP Intro */}
        <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
          {c.appIntro}
        </p>

        {/* SOMMAIRE */}
        <nav aria-label={c.tocLabel} className="mb-20 flex flex-wrap justify-center gap-3">
          {c.sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className={pill}>
              {s.label}
            </a>
          ))}
        </nav>

        {/* DEFINITION */}
        <section className="max-w-6xl mx-auto">
          <SectionTitle id="definition" icon={Compass}>
            {c.definition.title}
          </SectionTitle>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className={`${softCard} ${accent("core").border} ${accent("core").glow}`}>
              <div
                className={`mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] ${accent("core").badge}`}
              >
                <CircleDot size={14} />
                {c.definition.isBadge}
              </div>

              <ul className="space-y-4 text-[15px] leading-relaxed text-slate-300">
                {c.definition.isItems.map((x) => (
                  <li key={x} className="flex gap-3">
                    <span className={`${dot} ${accent("core").dot}`} />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`${softCard} ${accent("method").border} ${accent("method").glow}`}>
              <div
                className={`mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] ${accent("method").badge}`}
              >
                <Target size={14} />
                {c.definition.isNotBadge}
              </div>

              <ul className="space-y-4 text-[15px] leading-relaxed text-slate-300">
                {c.definition.isNotItems.map((x) => (
                  <li key={x} className="flex gap-3">
                    <span className={`${dot} ${accent("method").dot}`} />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="max-w-6xl mx-auto">
          <SectionTitle id="classification" icon={Layers}>
            {c.classification.title}
          </SectionTitle>

          <div className="grid gap-6 md:grid-cols-2">
            <article className={`${card} ${accent("angle").border} ${accent("angle").glow}`}>
              <div className={`mb-4 h-1 w-full rounded-full ${accent("angle").line}`} />
              <h3 className="font-serif text-2xl text-white">{c.classification.angles.h}</h3>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-300">
                {c.classification.angles.items.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </article>

            <article className={`${card} ${accent("math").border} ${accent("math").glow}`}>
              <div className={`mb-4 h-1 w-full rounded-full ${accent("math").line}`} />
              <h3 className="font-serif text-2xl text-white">{c.classification.calculated.h}</h3>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-300">
                {c.classification.calculated.items.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </article>

            <article className={`${card} ${accent("destiny").border} ${accent("destiny").glow}`}>
              <div className={`mb-4 h-1 w-full rounded-full ${accent("destiny").line}`} />
              <h3 className="font-serif text-2xl text-white">{c.classification.modern.h}</h3>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-300">
                {c.classification.modern.items.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </article>

            <article className={`${card} ${accent("method").border} ${accent("method").glow}`}>
              <div className={`mb-4 h-1 w-full rounded-full ${accent("method").line}`} />
              <h3 className="font-serif text-2xl text-white">{c.classification.proRule.h}</h3>
              <p className="mt-5 text-sm leading-relaxed text-slate-300">
                {c.classification.proRule.body}
              </p>
            </article>
          </div>
        </section>

        {/* POINTS MAJEURS */}
        <section className="max-w-6xl mx-auto">
          <SectionTitle id="points" icon={Orbit}>
            {c.majorPoints.title}
          </SectionTitle>

          <div className="grid gap-6 md:grid-cols-2">
            {c.majorPoints.items.map((x) => {
              const a = accent(x.kind);
              return (
                <article key={x.title} className={`${card} ${a.border} ${a.glow}`}>
                  <div className={`mb-4 h-1 w-full rounded-full ${a.line}`} />
                  <h3 className={`font-serif text-3xl ${a.text}`}>{x.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{x.subtitle}</p>
                  <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-300">
                    {x.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span className={`${dot} ${a.dot}`} />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        {/* METHODE */}
        <section className="max-w-6xl mx-auto">
          <SectionTitle id="methode" icon={Sparkles}>
            {c.method.title}
          </SectionTitle>

          <div className={`${softCard} ${accent("method").border} ${accent("method").glow}`}>
            <ol className="grid gap-4 md:grid-cols-2">
              {c.method.steps.map((x) => (
                <li
                  key={x.t}
                  className="rounded-[1.75rem] border border-white/10 bg-black/20 p-6 transition-all hover:border-white/15"
                >
                  <p className="font-serif text-2xl text-white">{x.t}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{x.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ASPECTS */}
        <section className="max-w-6xl mx-auto">
          <SectionTitle id="aspects" icon={MoonStar}>
            {c.aspects.title}
          </SectionTitle>

          <div className="grid gap-6 md:grid-cols-2">
            <article className={`${card} ${accent("angle").border} ${accent("angle").glow}`}>
              <div className={`mb-4 h-1 w-full rounded-full ${accent("angle").line}`} />
              <h3 className="font-serif text-2xl text-white">{c.aspects.conj.h}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                {c.aspects.conj.body}
              </p>
            </article>

            <article className={`${card} ${accent("method").border} ${accent("method").glow}`}>
              <div className={`mb-4 h-1 w-full rounded-full ${accent("method").line}`} />
              <h3 className="font-serif text-2xl text-white">{c.aspects.tension.h}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                {c.aspects.tension.body}
              </p>
            </article>
          </div>
        </section>

        {/* TRANSITS */}
        <section className="max-w-6xl mx-auto">
          <SectionTitle id="transits" icon={Star}>
            {c.transits.title}
          </SectionTitle>

          <div className={`${softCard} ${accent("math").border} ${accent("math").glow}`}>
            <ul className="space-y-4 text-[15px] leading-relaxed text-slate-300">
              {c.transits.items.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className={`${dot} ${accent("math").dot}`} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PIEGES */}
        <section className="max-w-6xl mx-auto">
          <SectionTitle id="piges" icon={Target}>
            {c.pitfalls.title}
          </SectionTitle>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className={`${softCard} ${accent("destiny").border} ${accent("destiny").glow}`}>
              <div
                className={`mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] ${accent("destiny").badge}`}
              >
                {c.pitfalls.mistakesBadge}
              </div>

              <ul className="space-y-4 text-[15px] leading-relaxed text-slate-300">
                {c.pitfalls.mistakes.map((x) => (
                  <li key={x} className="flex gap-3">
                    <span className={`${dot} ${accent("destiny").dot}`} />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`${softCard} ${accent("core").border} ${accent("core").glow}`}>
              <div
                className={`mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] ${accent("core").badge}`}
              >
                {c.pitfalls.goodBadge}
              </div>

              <ul className="space-y-4 text-[15px] leading-relaxed text-slate-300">
                {c.pitfalls.good.map((x) => (
                  <li key={x} className="flex gap-3">
                    <span className={`${dot} ${accent("core").dot}`} />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-6xl mx-auto">
          <SectionTitle id="faq" icon={HelpCircle}>
            {c.faqTopTitle}
          </SectionTitle>

          <div className="grid gap-6 lg:grid-cols-2">
            {c.faqTop.map((x) => (
              <article
                key={x.q}
                className={`${card} ${accent("destiny").border} ${accent("destiny").glow}`}
              >
                <div className={`mb-4 h-1 w-full rounded-full ${accent("destiny").line}`} />
                <h3 className="font-serif text-2xl text-white">{x.q}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-300">{x.a}</p>
              </article>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-32 border-t border-white/10 pt-16 flex flex-col items-center gap-8">
          <Link
            href="/aspects"
            className="group flex items-center gap-4 rounded-full border border-amber-500/30 bg-amber-500/10 px-8 py-5 text-[15px] font-bold uppercase tracking-widest text-amber-300 transition-all hover:border-amber-400 hover:bg-amber-500/20 focus:ring-2 focus:ring-amber-500"
          >
            <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-2" />
            {c.footer.cta}
          </Link>

          <div className="flex flex-wrap gap-3">
            <Link className={pill} href="/aspects">
              {c.footer.aspects}
            </Link>
            <Link className={pill} href="/maisons">
              {c.footer.houses}
            </Link>
            <Link className={pill} href="/transits">
              {c.footer.transits}
            </Link>
          </div>
        </footer>

        {/* FAQ Accordion SEO */}
        <section className="mt-16 max-w-6xl mx-auto space-y-6" aria-labelledby="faq-points-fictifs">
          <h2 id="faq-points-fictifs" className="font-serif text-2xl sm:text-3xl text-white">{c.faqTitle}</h2>
          <div className="space-y-4">
            {c.faq.map((f, i) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md"
                open={i === 0}
              >
                <summary className="cursor-pointer list-none p-6 font-serif text-lg font-medium text-white/90 [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between">
                    {f.q}
                    <span className="ml-3 text-violet-300/60 transition-transform group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="px-6 pb-6 text-sm leading-relaxed text-white/75 md:text-base">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* JSON-LD FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
        />

        {/* JSON-LD SEO */}
              </main>
    </>
  );
}
