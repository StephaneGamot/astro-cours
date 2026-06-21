import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import {
  buildMeta,
  localizedPathUrl,
  pathLanguageAlternates,
  toSeoLocale,
  SITE_URL,
  AUTHOR_PERSON,
  PUBLISHER_ORG,
} from "@/lib/seo";
import { retrogradesContent, type Tone, type RetroBlock } from "./content";

/**
 * Page « Planètes rétrogrades » — cours premium, i18n (fr/en/es).
 * Tout le texte vient de ./content.tsx ; ici uniquement la présentation.
 * Images attendues :
 * public/images/planetes/mercure.webp
 * public/images/planetes/venus.webp
 * public/images/planetes/mars.webp
 * public/images/planetes/jupiter.webp
 * public/images/planetes/saturne.webp
 * public/images/planetes/uranus.webp
 * public/images/planetes/neptune.webp
 * public/images/planetes/pluton.webp
 */

const INTERNAL_PATH = "/retrogrades";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = toSeoLocale(locale);
  const c = retrogradesContent[loc];
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
  "rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-text/90";
const card = "rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur";
const h2 = "font-serif text-2xl sm:text-3xl flex items-center gap-3";

/* -------------------- Couleurs par “tone” -------------------- */
function toneAccent(t: Tone) {
  switch (t) {
    case "mental":
      return {
        border: "border-sky-400/25",
        ring: "focus-visible:ring-sky-400/35",
        pill: "bg-sky-500/10 text-sky-200 border-sky-400/20",
        dot: "bg-sky-400/70",
        line: "bg-sky-400/40",
        glow: "shadow-[0_0_0_1px_rgba(56,189,248,0.12)]",
        aura:
          "bg-[radial-gradient(70%_60%_at_20%_10%,rgba(56,189,248,0.18),transparent_55%)]",
      };
    case "affectif":
      return {
        border: "border-violet-400/25",
        ring: "focus-visible:ring-violet-400/35",
        pill: "bg-violet-500/10 text-violet-200 border-violet-400/20",
        dot: "bg-violet-400/70",
        line: "bg-violet-400/40",
        glow: "shadow-[0_0_0_1px_rgba(167,139,250,0.12)]",
        aura:
          "bg-[radial-gradient(70%_60%_at_20%_10%,rgba(167,139,250,0.18),transparent_55%)]",
      };
    case "action":
      return {
        border: "border-rose-400/25",
        ring: "focus-visible:ring-rose-400/35",
        pill: "bg-rose-500/10 text-rose-200 border-rose-400/20",
        dot: "bg-rose-400/70",
        line: "bg-rose-400/40",
        glow: "shadow-[0_0_0_1px_rgba(251,113,133,0.12)]",
        aura:
          "bg-[radial-gradient(70%_60%_at_20%_10%,rgba(251,113,133,0.18),transparent_55%)]",
      };
    case "social":
      return {
        border: "border-amber-400/25",
        ring: "focus-visible:ring-amber-400/35",
        pill: "bg-amber-500/10 text-amber-200 border-amber-400/20",
        dot: "bg-amber-400/70",
        line: "bg-amber-400/40",
        glow: "shadow-[0_0_0_1px_rgba(251,191,36,0.12)]",
        aura:
          "bg-[radial-gradient(70%_60%_at_20%_10%,rgba(251,191,36,0.16),transparent_55%)]",
      };
    default:
      return {
        border: "border-emerald-400/25",
        ring: "focus-visible:ring-emerald-400/35",
        pill: "bg-emerald-500/10 text-emerald-200 border-emerald-400/20",
        dot: "bg-emerald-400/70",
        line: "bg-emerald-400/40",
        glow: "shadow-[0_0_0_1px_rgba(52,211,153,0.12)]",
        aura:
          "bg-[radial-gradient(70%_60%_at_20%_10%,rgba(52,211,153,0.16),transparent_55%)]",
      };
  }
}

function planetImg(slug: string) {
  return `/images/planetes/${slug}.webp`;
}

/* TOC label : on retire le mot « rétrograde » (localisé) pour ne garder que le nom de la planète. */
function tocLabel(nom: string) {
  return nom.replace(/\s+(rétrograde|retrograde|retrógrado)$/i, "");
}

export default async function RetrogradesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = toSeoLocale(locale);
  const c = retrogradesContent[loc];
  const RETRO: RetroBlock[] = c.retro;

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
    <main className="mx-auto max-w-5xl px-6 pb-16 pt-10 text-text" id="main-content">
      {/* JSON-LD Article */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />
      {/* HERO */}
      <header className="mb-10 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5">
        <div className="relative p-7 sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_20%_10%,rgba(255,255,255,0.10),transparent_55%)]" />
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
            {RETRO.map((p) => (
              <a key={p.slug} href={`#${p.slug}`} className={`${pill} hover:bg-white/10`}>
                {tocLabel(p.nom)}
              </a>
            ))}
            <a href="#faq" className={`${pill} hover:bg-white/10`}>
              {c.hero.faqLabel}
            </a>
          </nav>
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-sky-400/35 via-violet-400/35 to-emerald-400/35" />
      </header>

      {/* Définition — Featured Snippet */}
      <div className="mt-8 rounded-2xl border border-rose-400/20 bg-rose-400/[0.04] px-6 py-5">
        <p className="text-sm font-semibold uppercase tracking-widest text-rose-300/80">{c.defBox.label}</p>
        <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
          {c.defBox.body}
        </p>
      </div>

      {/* APP Intro */}
      <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
        {c.appIntro}
      </p>

      {/* Bases */}
      <section className="mb-10 grid gap-4 sm:grid-cols-2">
        <div className={card}>
          <h2 className="font-serif text-2xl">{c.basics.card1Title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-text/80">
            {c.basics.card1Intro}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-text/80">
            {c.basics.card1Items.map((it, i) => (
              <li key={i}>{it}</li>
            ))}
          </ul>
        </div>

        <div className={card}>
          <h2 className="font-serif text-2xl">{c.basics.card2Title}</h2>
          <ol className="mt-3 space-y-2 text-sm text-text/80">
            {c.basics.card2Items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ol>
        </div>
      </section>

      {/* Planète par planète */}
      <div className="space-y-8">
        {RETRO.map((p) => {
          const a = toneAccent(p.tone);

          return (
            <section
              key={p.slug}
              id={p.slug}
              className={`scroll-mt-24 rounded-3xl border ${a.border} bg-white/5 p-6 backdrop-blur ${a.glow} relative overflow-hidden`}
            >
              {/* aura colorée */}
              <div className={`pointer-events-none absolute inset-0 ${a.aura}`} />
              <div className={`pointer-events-none absolute top-0 left-0 h-1 w-full ${a.line}`} />

              <div className="relative flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  {/* ✅ Image planète */}
                  <div
  className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-full border ${a.border} bg-black/20`}
  aria-hidden="true"
>
  <Image
    src={planetImg(p.slug)}
    alt={p.nom}
    fill
    className="object-cover"
    sizes="64px"
  />
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
</div>


                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted">
                      {c.card.eyebrow}
                    </p>
                    <h2 className="mt-2 font-serif text-4xl">{p.nom}</h2>

                    <div className="mt-3 flex flex-wrap gap-2">
                      <span
                        className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm ${a.pill}`}
                      >
                        <span className={`h-2 w-2 rounded-full ${a.dot}`} />
                        {c.toneLabel[p.tone]}
                      </span>
                      <span className={pill}>{p.whatItDoes}</span>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.keywords.map((k) => (
                        <span key={k} className={pill}>
                          {k}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <a className={`${pill} hover:bg-white/10`} href="#top">
                  {c.card.topLabel}
                </a>
              </div>

              <div className="relative mt-6 grid gap-4 lg:grid-cols-2">
                <div className={`rounded-3xl border ${a.border} bg-black/20 p-6`}>
                  <h3 className={h2}>
                    <span className={`h-2 w-2 rounded-full ${a.dot}`} />
                    {c.card.natalTitle}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text/85">
                    {p.retroMeaningNatal}
                  </p>
                </div>

                <div className={`rounded-3xl border ${a.border} bg-black/20 p-6`}>
                  <h3 className={h2}>
                    <span className={`h-2 w-2 rounded-full ${a.dot}`} />
                    {c.card.transitTitle}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text/85">
                    {p.retroMeaningTransit}
                  </p>
                </div>
              </div>

              <div className="relative mt-4 grid gap-4 lg:grid-cols-3">
                <div className={`rounded-3xl border ${a.border} bg-white/5 p-6`}>
                  <h3 className={h2}>
                    <span className={`h-2 w-2 rounded-full ${a.dot}`} />
                    {c.card.stationsTitle}
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-text/85">
                    {p.stations.map((x) => (
                      <li key={x} className="flex gap-3">
                        <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${a.dot}`} />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`rounded-3xl border ${a.border} bg-white/5 p-6`}>
                  <h3 className={h2}>
                    <span className={`h-2 w-2 rounded-full ${a.dot}`} />
                    {c.card.greenTitle}
                  </h3>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
                    {p.greenFlags.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>

                <div className={`rounded-3xl border ${a.border} bg-white/5 p-6`}>
                  <h3 className={h2}>
                    <span className={`h-2 w-2 rounded-full ${a.dot}`} />
                    {c.card.redTitle}
                  </h3>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
                    {p.redFlags.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={`relative mt-4 rounded-3xl border ${a.border} bg-black/20 p-6`}>
                <h3 className={h2}>
                  <span className={`h-2 w-2 rounded-full ${a.dot}`} />
                  {c.card.howTitle}
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-text/85">
                  {p.howToWorkWithIt.map((x) => (
                    <li key={x} className="flex gap-3">
                      <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${a.dot}`} />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          );
        })}
      </div>

      {/* Footer */}
      <footer className="mt-14 border-t border-white/10 pt-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-text/70">
            {c.footer.next}
          </p>
          <div className="flex flex-wrap gap-2">
            <Link className={`${pill} hover:bg-white/10`} href="/aspects">
              {c.footer.aspects}
            </Link>
            <Link className={`${pill} hover:bg-white/10`} href="/#planetes">
              {c.footer.planets}
            </Link>
            <Link className={`${pill} hover:bg-white/10`} href="/#maisons">
              {c.footer.houses}
            </Link>
          </div>
        </div>
      </footer>

      {/* FAQ Accordion SEO */}
      <section id="faq" className="scroll-mt-24 mt-16 space-y-6" aria-labelledby="faq-retrogrades">
        <h2 id="faq-retrogrades" className="font-serif text-2xl sm:text-3xl">{c.faqTitle}</h2>
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
                  <span className="ml-3 text-rose-300/60 transition-transform group-open:rotate-45">+</span>
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
  );
}
