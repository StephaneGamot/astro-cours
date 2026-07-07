import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import {
  buildMeta,
  localizedPathUrl,
  pathLanguageAlternates,
  toSeoLocale,
  AUTHOR_PERSON,
  PUBLISHER_ORG,
  SITE_URL,
} from "@/lib/seo";
import { lilithContent } from "./content";

/**
 * Page "Lilith / Lune Noire" — cours premium, i18n (fr/en/es)
 * Tout le texte vient de ./content.tsx ; ici uniquement la présentation.
 */

const INTERNAL_PATH = "/lilith";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = toSeoLocale(locale);
  const c = lilithContent[loc];
  const meta = buildMeta({
    title: c.meta.title,
    description: c.meta.description,
    canonicalPath: INTERNAL_PATH,
    type: "article",
    locale: loc,
    canonicalUrl: localizedPathUrl(INTERNAL_PATH, loc),
    languages: pathLanguageAlternates(INTERNAL_PATH),
  });
  // ✅ Absolute : Ahrefs SERP rewrite — on retire le suffixe " — Astro Cours"
  //    pour matcher exactement le titre que Google affiche.
  return { ...meta, title: { absolute: c.meta.title } };
}

const pill =
  "rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-text/90 hover:bg-white/10";
const card =
  "rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur";
const h2 =
  "font-serif text-2xl sm:text-3xl flex items-center gap-3 scroll-mt-24";
const dot = "inline-block h-2 w-2 rounded-full bg-violet-400/70";
const accentBorder = "border-violet-400/25";
const accentGlow = "shadow-[0_0_0_1px_rgba(167,139,250,0.12)]";
const accentLine = "bg-violet-400/40";

function Anchor({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <a href={`#${id}`} className={pill}>
      {children}
    </a>
  );
}

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className={h2}>
      <span className={dot} />
      {children}
    </h2>
  );
}

export default async function LilithPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const loc = toSeoLocale(locale);
  const c = lilithContent[loc];

  // Optionnel : mets cette image dans public/images/points/lilith.webp
  const heroSrc = "/images/points/lilith.webp";

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
      <header className={`mb-10 overflow-hidden rounded-[2.5rem] border ${accentBorder} bg-white/5 ${accentGlow}`}>
        <div className="grid gap-6 p-7 sm:grid-cols-[1.2fr_.8fr] sm:p-10">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted">
              {c.hero.eyebrow}
            </p>

            <h1 className="mt-3 font-serif text-4xl sm:text-5xl">
              {c.hero.h1}
            </h1>

            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-text/80">
              {c.hero.intro}
            </p>

            {/* Sommaire */}
            <nav aria-label={c.hero.tocLabel} className="mt-6 flex flex-wrap gap-2">
              {c.sections.map((s) => (
                <Anchor key={s.id} id={s.id}>
                  {s.label}
                </Anchor>
              ))}
            </nav>
          </div>

          {/* Image hero (optionnelle) */}
          <div className="relative hidden sm:block">
            <div className={`relative h-full min-h-[260px] overflow-hidden rounded-3xl border ${accentBorder} bg-black/20`}>
              <Image
                src={heroSrc}
                alt={c.hero.imgAlt}
                fill
                className="object-cover"
                sizes="420px"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
              <div className={`pointer-events-none absolute bottom-0 left-0 h-1 w-full ${accentLine}`} />
            </div>
          </div>
        </div>
        <div className={`h-1 w-full ${accentLine}`} />
      </header>

      {/* Définition SEO */}
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

      {/* DEFINITION */}
      <section className="mb-10">
        <H2 id="definition">{c.definition.title}</H2>
        <div className={`${card} mt-4`}>
          <p className="text-sm leading-relaxed text-text/85">
            {c.definition.body}
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-xs uppercase tracking-wide text-muted">{c.definition.fonctionLabel}</p>
              <p className="mt-2 text-sm text-text/85">
                {c.definition.fonction}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-xs uppercase tracking-wide text-muted">{c.definition.piqueLabel}</p>
              <p className="mt-2 text-sm text-text/85">
                {c.definition.pique}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-xs uppercase tracking-wide text-muted">{c.definition.eleveLabel}</p>
              <p className="mt-2 text-sm text-text/85">
                {c.definition.eleve}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VRAIE VS MOYENNE */}
      <section className="mb-10">
        <H2 id="vraie-moyenne">{c.vraieMoyenne.title}</H2>
        <div className={`${card} mt-4`}>
          <p className="text-sm leading-relaxed text-text/85">
            {c.vraieMoyenne.intro}
          </p>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className={`rounded-3xl border ${accentBorder} bg-white/5 p-5 ${accentGlow}`}>
              <p className="text-xs uppercase tracking-wide text-muted">{c.vraieMoyenne.vraieLabel}</p>
              <p className="mt-2 text-sm leading-relaxed text-text/85">
                {c.vraieMoyenne.vraie}
              </p>
            </div>
            <div className={`rounded-3xl border ${accentBorder} bg-white/5 p-5 ${accentGlow}`}>
              <p className="text-xs uppercase tracking-wide text-muted">{c.vraieMoyenne.moyenneLabel}</p>
              <p className="mt-2 text-sm leading-relaxed text-text/85">
                {c.vraieMoyenne.moyenne}
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm text-text/75">
            {c.vraieMoyenne.conseil}
          </p>
        </div>
      </section>

      {/* Mythologie & traditions */}
      <section className="mb-10">
        <H2 id="mythologie">{c.mythologie.title}</H2>

        <div className={`${card} mt-4`}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-xs uppercase tracking-wide text-muted">{c.mythologie.originLabel}</p>
              <p className="mt-2 text-sm leading-relaxed text-text/85">
                {c.mythologie.origin}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-xs uppercase tracking-wide text-muted">{c.mythologie.bibleLabel}</p>
              <p className="mt-2 text-sm leading-relaxed text-text/85">
                {c.mythologie.bible}
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="text-xs uppercase tracking-wide text-muted">{c.mythologie.whyLabel}</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-text/85">
              {c.mythologie.whyItems.map((it, i) => (
                <li key={i}>{it}</li>
              ))}
            </ul>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {c.mythologie.cards.map(([t, v]) => (
              <div key={t} className={`rounded-3xl border ${accentBorder} bg-white/5 p-5 ${accentGlow}`}>
                <p className="text-xs uppercase tracking-wide text-muted">{t}</p>
                <p className="mt-2 text-sm text-text/85">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYMBOLIQUE */}
      <section className="mb-10">
        <H2 id="symbolique">{c.symbolique.title}</H2>
        <div className={`${card} mt-4`}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-xs uppercase tracking-wide text-muted">{c.symbolique.themesLabel}</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-text/85">
                {c.symbolique.themes.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-xs uppercase tracking-wide text-muted">{c.symbolique.piegeLabel}</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-text/85">
                {c.symbolique.piege.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="text-xs uppercase tracking-wide text-muted">{c.symbolique.memoLabel}</p>
            <p className="mt-2 font-serif text-xl text-text/90">
              {c.symbolique.memo}
            </p>
          </div>
        </div>
      </section>

      {/* METHODO */}
      <section className="mb-10">
        <H2 id="methodo">{c.methodo.title}</H2>
        <div className={`${card} mt-4`}>
          <ol className="space-y-3 text-sm leading-relaxed text-text/85">
            {c.methodo.steps.map((x, i) => (
              <li key={i}>{x}</li>
            ))}
          </ol>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {c.methodo.levels.map(([t, v]) => (
              <div key={t} className={`rounded-3xl border ${accentBorder} bg-white/5 p-5 ${accentGlow}`}>
                <p className="text-xs uppercase tracking-wide text-muted">{t}</p>
                <p className="mt-2 text-sm text-text/85">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAR SIGNE */}
      <section className="mb-10">
        <H2 id="signe">{c.signe.title}</H2>
        <div className={`${card} mt-4`}>
          <p className="text-sm text-text/75">
            {c.signe.intro}
          </p>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {c.signe.items.map(([sign, txt]) => (
              <div key={sign} className="rounded-3xl border border-white/10 bg-black/20 p-5">
                <p className="font-serif text-2xl">{sign}</p>
                <p className="mt-2 text-sm leading-relaxed text-text/85">{txt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAR MAISON */}
      <section className="mb-10">
        <H2 id="maison">{c.maison.title}</H2>
        <div className={`${card} mt-4`}>
          <div className="grid gap-4 sm:grid-cols-2">
            {c.maison.items.map(([m, txt]) => (
              <div key={m} className={`rounded-3xl border ${accentBorder} bg-white/5 p-5 ${accentGlow}`}>
                <p className="text-xs uppercase tracking-wide text-muted">{m}</p>
                <p className="mt-2 text-sm text-text/85">{txt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ASPECTS */}
      <section className="mb-10">
        <H2 id="aspects">{c.aspects.title}</H2>
        <div className={`${card} mt-4`}>
          <div className="grid gap-4 sm:grid-cols-2">
            {c.aspects.items.map(([asp, txt]) => (
              <div key={asp} className="rounded-3xl border border-white/10 bg-black/20 p-5">
                <p className="font-serif text-2xl">{asp}</p>
                <p className="mt-2 text-sm leading-relaxed text-text/85">{txt}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="text-xs uppercase tracking-wide text-muted">{c.aspects.tipLabel}</p>
            <p className="mt-2 text-sm text-text/85">
              {c.aspects.tip}
            </p>
          </div>
        </div>
      </section>

      {/* ERREURS */}
      <section className="mb-10">
        <H2 id="erreurs">{c.erreurs.title}</H2>
        <div className={`${card} mt-4`}>
          <ul className="list-disc space-y-2 pl-5 text-sm text-text/85">
            {c.erreurs.items.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* EXEMPLES */}
      <section className="mb-10">
        <H2 id="exemples">{c.exemples.title}</H2>
        <div className={`${card} mt-4`}>
          <div className="grid gap-4 sm:grid-cols-2">
            {c.exemples.items.map(([t, txt]) => (
              <div key={t} className={`rounded-3xl border ${accentBorder} bg-white/5 p-5 ${accentGlow}`}>
                <p className="font-serif text-2xl">{t}</p>
                <p className="mt-2 text-sm leading-relaxed text-text/85">{txt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Navigation */}
     <footer className="mt-14 border-t border-white/10 pt-10">
  <div className="grid gap-6 lg:grid-cols-3">
    {/* Col 1 */}
    <div className={`${card} ${accentGlow}`}>
      <p className="text-xs uppercase tracking-[0.18em] text-muted">{c.footer.col1Label}</p>
      <p className="mt-3 text-sm leading-relaxed text-text/80">
        {c.footer.col1Body}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        <Link className={pill} href="/aspects">{c.footer.col1Aspects}</Link>
        <Link className={pill} href="/maisons">{c.footer.col1Maisons}</Link>
        <Link className={pill} href="/planetes">{c.footer.col1Planetes}</Link>
      </div>
    </div>

    {/* Col 2 */}
    <div className={`${card} ${accentGlow}`}>
      <p className="text-xs uppercase tracking-[0.18em] text-muted">{c.footer.col2Label}</p>
      <ul className="mt-4 space-y-2 text-sm text-text/85">
        {c.footer.col2Items.map((x) => (
          <li key={x} className="flex gap-3">
            <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
            <span>{x}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
        <p className="text-xs uppercase tracking-wide text-muted">{c.footer.col2ExerciseLabel}</p>
        <p className="mt-2 text-sm text-text/85">
          {c.footer.col2Exercise}
        </p>
      </div>
    </div>

    {/* Col 3 */}
    <div className={`${card} ${accentGlow}`}>
      <p className="text-xs uppercase tracking-[0.18em] text-muted">{c.footer.col3Label}</p>
      <p className="mt-3 text-sm text-text/75">
        {c.footer.col3Body}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        <Link className={pill} href="/signes">{c.footer.col3Signes}</Link>
        <Link className={pill} href="/planetes">{c.footer.col3Planetes}</Link>
        <Link className={pill} href="/maisons">{c.footer.col3Maisons}</Link>
        <Link className={pill} href="/maitrises">{c.footer.col3Dignites}</Link>
      </div>

      <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
        <p className="text-xs uppercase tracking-wide text-muted">{c.footer.col3SuggestionLabel}</p>
        <p className="mt-2 text-sm text-text/85">
          {c.footer.col3Suggestion}
        </p>
      </div>
    </div>
  </div>

  {/* bas de footer */}
  <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6">
    <p className="text-xs text-text/60">
      © {new Date().getFullYear()} — {c.footer.copyright}
    </p>
    <div className="flex flex-wrap gap-2">
      <a className={pill} href="#definition">{c.footer.topLabel}</a>
      <a className={pill} href="#mythologie">{c.footer.mythologieLabel}</a>
    </div>
  </div>
</footer>


      {/* FAQ visible */}
      <section className="mt-16 space-y-6" aria-labelledby="faq-lilith">
        <h2 id="faq-lilith" className={h2}>
          <span className={dot} />
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
                  <span className="ml-3 text-violet-300/60 transition-transform group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="px-6 pb-6 text-sm leading-relaxed text-white/75 md:text-base">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* JSON-LD FAQPage */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />
    </main>
  );
}
