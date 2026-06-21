import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import Asteroides from "@/public/images/asteroides/asteroides.webp"
import {
  buildMeta,
  localizedPathUrl,
  pathLanguageAlternates,
  toSeoLocale,
  AUTHOR_PERSON,
  PUBLISHER_ORG,
  SITE_URL,
} from "@/lib/seo";
import { asteroidesContent, type AccentKind } from "./content";

/**
 * Page “Astéroïdes” — cours pro, i18n (fr/en/es).
 * Tout le texte vient de ./content.tsx ; ici uniquement la présentation.
 * - Cérès, Pallas, Junon, Vesta + Chiron (souvent enseigné avec)
 * - Méthode de lecture (thème natal, transits, synastrie)
 */

const INTERNAL_PATH = "/asteroides";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = toSeoLocale(locale);
  const c = asteroidesContent[loc];
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
  "rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-text/90 hover:bg-white/10";
const card =
  "rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur";
const dot = "mt-2 h-1.5 w-1.5 shrink-0 rounded-full";

function accent(kind: AccentKind) {
  switch (kind) {
    case "earth":
      return {
        border: "border-emerald-400/25",
        glow: "shadow-[0_0_0_1px_rgba(52,211,153,0.10)]",
        dot: "bg-emerald-400/70",
        line: "bg-emerald-400/35",
        text: "text-emerald-200",
        bg: "bg-emerald-500/10",
        ring: "focus-visible:ring-emerald-400/35",
      };
    case "mind":
      return {
        border: "border-sky-400/25",
        glow: "shadow-[0_0_0_1px_rgba(56,189,248,0.10)]",
        dot: "bg-sky-400/70",
        line: "bg-sky-400/35",
        text: "text-sky-200",
        bg: "bg-sky-500/10",
        ring: "focus-visible:ring-sky-400/35",
      };
    case "bond":
      return {
        border: "border-violet-400/25",
        glow: "shadow-[0_0_0_1px_rgba(167,139,250,0.10)]",
        dot: "bg-violet-400/70",
        line: "bg-violet-400/35",
        text: "text-violet-200",
        bg: "bg-violet-500/10",
        ring: "focus-visible:ring-violet-400/35",
      };
    case "flame":
      return {
        border: "border-amber-400/25",
        glow: "shadow-[0_0_0_1px_rgba(251,191,36,0.10)]",
        dot: "bg-amber-400/70",
        line: "bg-amber-400/35",
        text: "text-amber-200",
        bg: "bg-amber-500/10",
        ring: "focus-visible:ring-amber-400/35",
      };
    case "wound":
      return {
        border: "border-rose-400/25",
        glow: "shadow-[0_0_0_1px_rgba(251,113,133,0.10)]",
        dot: "bg-rose-400/70",
        line: "bg-rose-400/35",
        text: "text-rose-200",
        bg: "bg-rose-500/10",
        ring: "focus-visible:ring-rose-400/35",
      };
    default:
      return {
        border: "border-white/10",
        glow: "",
        dot: "bg-white/60",
        line: "bg-white/20",
        text: "text-text/90",
        bg: "bg-white/5",
        ring: "focus-visible:ring-white/20",
      };
  }
}

function H2({
  id,
  children,
  kind = "method",
}: {
  id: string;
  children: React.ReactNode;
  kind?: AccentKind;
}) {
  const a = accent(kind);
  return (
    <h2 id={id} className="font-serif text-2xl sm:text-3xl">
      <span className={`mr-3 inline-block h-2 w-2 rounded-full ${a.dot}`} />
      {children}
    </h2>
  );
}

function asteroidImageSrc(slug: string) {
  return `/images/asteroides/${slug}.webp`;
}

export default async function AsteroidesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = toSeoLocale(locale);
  const c = asteroidesContent[loc];
  const sections = c.sections;
  const ASTEROIDS = c.asteroids;

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
    <main id="main-content" className="mx-auto max-w-5xl px-6 pb-16 pt-10 text-text">
      {/* JSON-LD Article */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />
      {/* HERO */}
      <header className="mb-10 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5">
        <div className="relative">
          <div className="relative h-[38vh] min-h-[320px] w-full">

          </div>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/10" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_10%,rgba(255,255,255,0.18),transparent_55%)]" />

          <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
            <p className="text-xs uppercase tracking-[0.18em] text-white/70">
              {c.hero.eyebrow}
            </p>
            <h1 className="mt-3 font-serif text-4xl text-white sm:text-5xl">
              {c.hero.h1}
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/80">
              {c.hero.intro}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {c.hero.tags.map((x) => (
                <span
                  key={x}
                  className="rounded-full border border-white/15 bg-black/25 px-3 py-1 text-sm text-white/90 backdrop-blur hover:bg-black/35"
                >
                  {x}
                </span>
              ))}
            </div>

            <nav aria-label={c.hero.tocLabel} className="mt-7 flex flex-wrap gap-2">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="rounded-full border border-white/15 bg-black/25 px-3 py-1 text-sm text-white/90 backdrop-blur hover:bg-black/35"
                >
                  {s.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="h-1 w-full bg-gradient-to-r from-emerald-400/35 via-sky-400/35 to-violet-400/35" />
      </header>

      {/* Définition SEO */}
      <div className="mt-8 rounded-2xl border border-sky-400/20 bg-sky-400/[0.04] px-6 py-5">
        <p className="text-sm font-semibold uppercase tracking-widest text-sky-300/80">{c.defBox.label}</p>
        <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
          {c.defBox.body}
        </p>
      </div>

      {/* APP Intro */}
      <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
        {c.appIntro}
      </p>

   <div className={"mb-12 overflow-hidden rounded-3xl border bg-white/20 "}>
        <div className="relative">
          <Image
            src={Asteroides}
            alt={c.illustrationAlt}
            width={1600}
            height={900}
            priority
            className="h-auto w-full object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
          <div className={`pointer-events-none absolute bottom-0 left-0 h-1 w-full`} />
        </div>
      </div>

      {/* Définition */}
      <section id="definition" className="mb-10 scroll-mt-24">
        <H2 id="definition" kind="method">{c.definition.title}</H2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className={`${card} ${accent("method").border} ${accent("method").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">{c.definition.bringTitle}</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {c.definition.bringItems.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className={`${dot} ${accent("method").dot}`} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${card} ${accent("mind").border} ${accent("mind").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">{c.definition.proRuleTitle}</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {c.definition.proRuleItems.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className={`${dot} ${accent("mind").dot}`} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Les principaux */}
      <section id="les-asteroides" className="mb-10 scroll-mt-24">
        <H2 id="les-asteroides" kind="method">{c.principaux.title}</H2>

        <div className="mt-4 grid gap-4">
          {ASTEROIDS.map((a) => {
            const t = accent(a.kind);

            return (
              <article key={a.slug} className={`${card} ${t.border} ${t.glow}`}>
                <div className={`mb-4 h-1 w-full rounded-full ${t.line}`} />

                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    {/* Image (optionnelle) */}
                    <div
                      className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border ${t.border} bg-white/50`}
                      aria-hidden="true"
                    >
                      <Image
                        src={asteroidImageSrc(a.slug)}
                        alt={c.principaux.symbolAlt(a.name)}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wide text-muted">{c.principaux.eyebrow}</p>
                      <h3 className="mt-1 font-serif text-3xl">{a.name}</h3>
                      <p className="mt-2 text-sm text-text/80">{a.core}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className={`rounded-full border ${t.border} ${t.bg} px-3 py-1 text-sm ${t.text}`}>
                          {a.badge}
                        </span>
                        {a.keywords.slice(0, 4).map((k) => (
                          <span key={k} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-text/85">
                            {k}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/#planetes"
                    className={`rounded-full border ${t.border} bg-white/5 px-5 py-2 text-sm hover:bg-white/10`}
                  >
                    {c.principaux.backToPlanets}
                  </Link>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <p className="text-xs uppercase tracking-wide text-muted">{c.principaux.signLabel}</p>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
                      {a.sign.map((x) => <li key={x}>{x}</li>)}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <p className="text-xs uppercase tracking-wide text-muted">{c.principaux.houseLabel}</p>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
                      {a.house.map((x) => <li key={x}>{x}</li>)}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <p className="text-xs uppercase tracking-wide text-muted">{c.principaux.aspectsLabel}</p>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
                      {a.aspects.map((x) => <li key={x}>{x}</li>)}
                    </ul>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="text-xs uppercase tracking-wide text-muted">{c.principaux.pitfallsLabel}</p>
                  <ul className="mt-3 space-y-2 text-sm text-text/85">
                    {a.pitfalls.map((x) => (
                      <li key={x} className="flex gap-3">
                        <span className={`${dot} ${t.dot}`} />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Méthode */}
      <section id="methode" className="mb-10 scroll-mt-24">
        <H2 id="methode" kind="method">{c.methode.title}</H2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className={`${card} ${accent("method").border} ${accent("method").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">{c.methode.prioritiesLabel}</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {c.methode.priorities.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className={`${dot} ${accent("method").dot}`} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${card} ${accent("mind").border} ${accent("mind").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">{c.methode.synthesisLabel}</p>
            <p className="mt-3 text-sm leading-relaxed text-text/85">
              {c.methode.synthesisBody}
            </p>
          </div>
        </div>
      </section>

      {/* Transits */}
      <section id="transits" className="mb-10 scroll-mt-24">
        <H2 id="transits" kind="earth">{c.transits.title}</H2>

        <div className={`${card} mt-4 ${accent("earth").border} ${accent("earth").glow}`}>
          <p className="text-xs uppercase tracking-wide text-muted">{c.transits.watchLabel}</p>
          <ul className="mt-3 space-y-2 text-sm text-text/85">
            {c.transits.items.map((x) => (
              <li key={x} className="flex gap-3">
                <span className={`${dot} ${accent("earth").dot}`} />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Synastrie */}
      <section id="synastrie" className="mb-10 scroll-mt-24">
        <H2 id="synastrie" kind="bond">{c.synastrie.title}</H2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className={`${card} ${accent("bond").border} ${accent("bond").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">{c.synastrie.junoLabel}</p>
            <p className="mt-3 text-sm leading-relaxed text-text/85">
              {c.synastrie.junoBody}
            </p>
          </div>

          <div className={`${card} ${accent("flame").border} ${accent("flame").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">{c.synastrie.vestaLabel}</p>
            <p className="mt-3 text-sm leading-relaxed text-text/85">
              {c.synastrie.vestaBody}
            </p>
          </div>
        </div>
      </section>

      {/* Pièges */}
      <section id="piges" className="mb-10 scroll-mt-24">
        <H2 id="piges" kind="method">{c.pieges.title}</H2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className={`${card} ${accent("wound").border} ${accent("wound").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">{c.pieges.mistakesLabel}</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {c.pieges.mistakes.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className={`${dot} ${accent("wound").dot}`} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${card} ${accent("mind").border} ${accent("mind").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">{c.pieges.goodPracticeLabel}</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {c.pieges.goodPractice.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className={`${dot} ${accent("mind").dot}`} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-16 space-y-6 scroll-mt-24" aria-labelledby="faq-asteroides">
        <h2 id="faq-asteroides" className="font-serif text-2xl sm:text-3xl">
          <span className={`mr-3 inline-block h-2 w-2 rounded-full ${accent("method").dot}`} />
          {c.faqTitle}
        </h2>
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
                  <span className="ml-3 text-sky-300/60 transition-transform group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="px-6 pb-6 text-sm leading-relaxed text-white/75 md:text-base">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-14 border-t border-white/10 pt-8">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="flex flex-wrap gap-2">
            <Link className={pill} href="/aspects">{c.footer.aspects}</Link>
            <Link className={pill} href="/synastrie">{c.footer.synastrie}</Link>
            <Link className={pill} href="/transits">{c.footer.transits}</Link>
          </div>
        </div>
      </footer>

      {/* JSON-LD FAQPage */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />

      {/* JSON-LD SEO */}
          </main>
  );
}
