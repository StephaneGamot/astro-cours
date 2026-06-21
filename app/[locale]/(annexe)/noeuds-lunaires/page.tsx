import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import TeteDuDragon from "@/public/images/noeuds-lunaires.webp";
import {
  buildMeta,
  localizedPathUrl,
  pathLanguageAlternates,
  toSeoLocale,
  AUTHOR_PERSON,
  PUBLISHER_ORG,
} from "@/lib/seo";
import { noeudsContent } from "./content";

/**
 * Page « Noeuds lunaires » — cours premium, i18n (fr/en/es).
 * Tout le texte vient de ./content.tsx ; ici uniquement la présentation.
 */

const INTERNAL_PATH = "/noeuds-lunaires";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = toSeoLocale(locale);
  const c = noeudsContent[loc];
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
const card = "rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur";
const dot = "mt-2 h-1.5 w-1.5 shrink-0 rounded-full";

/* ✅ on ajoute moon + angle (comme tes autres pages) */
type AccentKind = "north" | "south" | "axis" | "method" | "moon" | "angle";

function accent(kind: AccentKind) {
  switch (kind) {
    case "north":
      return {
        border: "border-emerald-400/25",
        glow: "shadow-[0_0_0_1px_rgba(52,211,153,0.10)]",
        dot: "bg-emerald-400/70",
        line: "bg-emerald-400/35",
        text: "text-emerald-200",
        bg: "bg-emerald-500/10",
        ring: "focus-visible:ring-emerald-400/35",
      };
    case "south":
      return {
        border: "border-amber-400/25",
        glow: "shadow-[0_0_0_1px_rgba(251,191,36,0.10)]",
        dot: "bg-amber-400/70",
        line: "bg-amber-400/35",
        text: "text-amber-200",
        bg: "bg-amber-500/10",
        ring: "focus-visible:ring-amber-400/35",
      };
    case "axis":
      return {
        border: "border-violet-400/25",
        glow: "shadow-[0_0_0_1px_rgba(167,139,250,0.10)]",
        dot: "bg-violet-400/70",
        line: "bg-violet-400/35",
        text: "text-violet-200",
        bg: "bg-violet-500/10",
        ring: "focus-visible:ring-violet-400/35",
      };
    case "moon":
      return {
        border: "border-sky-400/25",
        glow: "shadow-[0_0_0_1px_rgba(56,189,248,0.10)]",
        dot: "bg-sky-400/70",
        line: "bg-sky-400/35",
        text: "text-sky-200",
        bg: "bg-sky-500/10",
        ring: "focus-visible:ring-sky-400/35",
      };
    case "angle":
      return {
        border: "border-fuchsia-400/25",
        glow: "shadow-[0_0_0_1px_rgba(232,121,249,0.10)]",
        dot: "bg-fuchsia-400/70",
        line: "bg-fuchsia-400/35",
        text: "text-fuchsia-200",
        bg: "bg-fuchsia-500/10",
        ring: "focus-visible:ring-fuchsia-400/35",
      };
    default:
      return {
        border: "border-sky-400/25",
        glow: "shadow-[0_0_0_1px_rgba(56,189,248,0.10)]",
        dot: "bg-sky-400/70",
        line: "bg-sky-400/35",
        text: "text-sky-200",
        bg: "bg-sky-500/10",
        ring: "focus-visible:ring-sky-400/35",
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


export default async function NoeudsLunairesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = toSeoLocale(locale);
  const c = noeudsContent[loc];

  const sections = c.sections;
  const heroHighlights = c.hero.highlights;

  const ARTICLE_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.jsonld.headline,
    description: c.jsonld.description,
    mainEntityOfPage: { "@type": "WebPage", "@id": localizedPathUrl(INTERNAL_PATH, loc) },
    author: AUTHOR_PERSON,
    publisher: PUBLISHER_ORG,
    datePublished: "2026-04-09T12:00:00Z",
    dateModified: "2026-04-22T12:00:00Z",
    inLanguage: loc,
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
      {/* HERO premium (avec image) */}
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
              {heroHighlights.map((x) => (
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

        <div className="h-1 w-full bg-gradient-to-r from-amber-400/35 via-emerald-400/35 to-violet-400/35" />
      </header>

      {/* Définition — Featured Snippet */}
      <div className="mt-8 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.04] px-6 py-5">
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300/80">{c.defBox.label}</p>
        <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
          {c.defBox.body}
        </p>
      </div>

      {/* APP Intro */}
      <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
        {c.appIntro}
      </p>

<div className={"mb-12 overflow-hidden rounded-3xl border bg-white/20 "}> <div className="relative"> <Image src={TeteDuDragon} alt={c.imageAlt} width={1600} height={900} priority className="h-auto w-full object-cover" sizes="(max-width: 768px) 100vw, 896px" /> <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" /> <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-full" /> </div> </div>
      {/* Définition */}
      <section id="definition" className="mb-10 scroll-mt-24">
        <H2 id="definition" kind="axis">
          {c.definition.title}
        </H2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className={`${card} ${accent("axis").border} ${accent("axis").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">{c.definition.isLabel}</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {c.definition.isItems.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className={`${dot} ${accent("axis").dot}`} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${card} ${accent("method").border} ${accent("method").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">{c.definition.isNotLabel}</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
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

      {/* Axe NN/NS */}
      <section id="axe" className="mb-10 scroll-mt-24">
        <H2 id="axe" kind="axis">
          {c.axe.title}
        </H2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className={`${card} ${accent("north").border} ${accent("north").glow}`}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wide text-muted">{c.axe.nnEyebrow}</p>
                <p className="mt-2 font-serif text-3xl">{c.axe.nnTitle}</p>
              </div>
              <span
                className={`rounded-full border ${accent("north").border} ${accent("north").bg} px-3 py-1 text-sm ${accent("north").text}`}
              >
                {c.axe.nnBadge}
              </span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-text/85">
              {c.axe.nnIntro}
            </p>

            <ul className="mt-4 space-y-2 text-sm text-text/85">
              {c.axe.nnItems.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className={`${dot} ${accent("north").dot}`} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${card} ${accent("south").border} ${accent("south").glow}`}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wide text-muted">{c.axe.nsEyebrow}</p>
                <p className="mt-2 font-serif text-3xl">{c.axe.nsTitle}</p>
              </div>
              <span
                className={`rounded-full border ${accent("south").border} ${accent("south").bg} px-3 py-1 text-sm ${accent("south").text}`}
              >
                {c.axe.nsBadge}
              </span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-text/85">
              {c.axe.nsIntro}
            </p>

            <ul className="mt-4 space-y-2 text-sm text-text/85">
              {c.axe.nsItems.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className={`${dot} ${accent("south").dot}`} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`${card} mt-4 ${accent("axis").border} ${accent("axis").glow}`}>
          <p className="text-xs uppercase tracking-wide text-muted">{c.axe.ruleLabel}</p>
          <p className="mt-3 text-sm leading-relaxed text-text/85">
            {c.axe.ruleBody}
          </p>
        </div>
      </section>

      {/* Signe & Maison */}
      <section id="signe-maison" className="mb-10 scroll-mt-24">
        <H2 id="signe-maison" kind="method">
          {c.signeMaison.title}
        </H2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className={`${card} ${accent("method").border} ${accent("method").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">{c.signeMaison.signLabel}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
              {c.signeMaison.signItems.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>

          <div className={`${card} ${accent("axis").border} ${accent("axis").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">{c.signeMaison.houseLabel}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
              {c.signeMaison.houseItems.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Aspects */}
      <section id="aspects" className="mb-10 scroll-mt-24">
        {/* ✅ ici tu avais kind="angle" : maintenant c’est OK */}
        <H2 id="aspects" kind="angle">
          {c.aspects.title}
        </H2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className={`${card} ${accent("angle").border} ${accent("angle").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">{c.aspects.conjLabel}</p>
            <p className="mt-3 text-sm leading-relaxed text-text/85">
              {c.aspects.conjBody}
            </p>
          </div>

          <div className={`${card} ${accent("method").border} ${accent("method").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">{c.aspects.squareLabel}</p>
            <p className="mt-3 text-sm leading-relaxed text-text/85">
              {c.aspects.squareBody}
            </p>
          </div>
        </div>
      </section>

      {/* Transits */}
      <section id="transits" className="mb-10 scroll-mt-24">
        {/* ✅ ici tu avais kind="moon" : maintenant c’est OK */}
        <H2 id="transits" kind="moon">
          {c.transits.title}
        </H2>

        <div className={`${card} mt-4 ${accent("moon").border} ${accent("moon").glow}`}>
          <p className="text-xs uppercase tracking-wide text-muted">{c.transits.label}</p>
          <ul className="mt-3 space-y-2 text-sm text-text/85">
            {c.transits.items.map((x) => (
              <li key={x} className="flex gap-3">
                <span className={`${dot} ${accent("moon").dot}`} />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pièges */}
      <section id="piges" className="mb-10 scroll-mt-24">
        <H2 id="piges" kind="method">
          {c.pitfalls.title}
        </H2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className={`${card} ${accent("south").border} ${accent("south").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">{c.pitfalls.errorsLabel}</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {c.pitfalls.errorsItems.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className={`${dot} ${accent("south").dot}`} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${card} ${accent("north").border} ${accent("north").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">{c.pitfalls.goodLabel}</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {c.pitfalls.goodItems.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className={`${dot} ${accent("north").dot}`} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-10 scroll-mt-24">
        <H2 id="faq" kind="axis">
          {c.faqShort.title}
        </H2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {c.faqShort.items.map((x) => (
            <div key={x.q} className={`${card} ${accent("axis").border} ${accent("axis").glow}`}>
              <p className="font-serif text-xl">{x.q}</p>
              <p className="mt-3 text-sm leading-relaxed text-text/85">{x.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-14 border-t border-white/10 pt-8">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="flex flex-wrap gap-2">
            <Link className={pill} href="/aspects">{c.footer.aspects}</Link>
            <Link className={pill} href="/#maisons">{c.footer.houses}</Link>
            <Link className={pill} href="/transits">{c.footer.transits}</Link>
          </div>
        </div>
      </footer>

      {/* FAQ Accordion SEO */}
      <section className="mt-16 space-y-6" aria-labelledby="faq-noeuds-lunaires">
        <h2 id="faq-noeuds-lunaires" className="font-serif text-2xl sm:text-3xl">{c.faqTitle}</h2>
        <div className="space-y-4">
          {c.faq.map((f, i) => (
            <details
              key={i}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md"
              open={i === 0}
            >
              <summary className="cursor-pointer list-none p-6 font-serif text-lg font-medium text-white/90 [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between">
                  {f.q}
                  <span className="ml-3 text-emerald-300/60 transition-transform group-open:rotate-45">+</span>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }}
      />
    </main>
  );
}
