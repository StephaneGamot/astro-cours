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
import {
  aspectsContent,
  type Aspect,
  type AspectKind,
  type AspectTone,
} from "./content";

/**
 * Page « Aspects astrologiques » — cours premium, i18n (fr/en/es).
 * Tout le texte vient de ./content.tsx ; ici uniquement la présentation.
 */

const INTERNAL_PATH = "/aspects";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = toSeoLocale(locale);
  const c = aspectsContent[loc];
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
const dot = "inline-block h-2 w-2 rounded-full bg-white/60";

function toneBadge(tone: AspectTone) {
  switch (tone) {
    case "harmonique":
      return "bg-emerald-500/10 text-emerald-200 border-emerald-400/20";
    case "tendu":
      return "bg-rose-500/10 text-rose-200 border-rose-400/20";
    default:
      return "bg-sky-500/10 text-sky-200 border-sky-400/20";
  }
}

function kindBadge(kind: AspectKind) {
  return kind === "majeur"
    ? "bg-violet-500/10 text-violet-200 border-violet-400/20"
    : "bg-amber-500/10 text-amber-200 border-amber-400/20";
}

function aspectHref(a: Aspect) {
  return `#${a.slug}`;
}

export default async function AspectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = toSeoLocale(locale);
  const c = aspectsContent[loc];
  const ASPECTS = c.aspects;

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />

      {/* HERO */}
      <header className="mb-10 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5">
        <div className="p-7 sm:p-10">
          <p className="text-xs uppercase tracking-[0.18em] text-muted">{c.hero.eyebrow}</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl">{c.hero.h1}</h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-text/80">{c.hero.intro}</p>

          <nav aria-label={c.hero.tocLabel} className="mt-6 flex flex-wrap gap-2">
            {ASPECTS.map((a) => (
              <a key={a.slug} href={aspectHref(a)} className={`${pill} hover:bg-white/10`}>
                {a.nom}
              </a>
            ))}
          </nav>
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-emerald-400/35 via-sky-400/35 to-rose-400/35" />
      </header>

      {/* Définition SEO */}
      <div className="mt-8 rounded-2xl border border-violet-400/20 bg-violet-400/[0.04] px-6 py-5">
        <p className="text-sm font-semibold uppercase tracking-widest text-violet-300/80">{c.defBox.label}</p>
        <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">{c.defBox.body}</p>
      </div>

      {/* APP Intro */}
      <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">{c.appIntro}</p>

      {/* Récap rapide */}
      <section className="mb-10 grid gap-4 sm:grid-cols-2">
        <div className={card}>
          <h2 className="font-serif text-2xl">{c.recap.card1Title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-text/80">{c.recap.card1Intro}</p>
          <ul className="mt-4 space-y-2 text-sm text-text/80">
            {c.recap.card1Items.map((it) => (
              <li key={it}>• {it}</li>
            ))}
          </ul>
        </div>

        <div className={card}>
          <h2 className="font-serif text-2xl">{c.recap.card2Title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-text/80">{c.recap.card2Intro}</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-xs uppercase tracking-wide text-muted">{c.recap.natalLabel}</p>
              <p className="mt-1 text-sm text-text/85">{c.recap.natalVal}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-xs uppercase tracking-wide text-muted">{c.recap.transitLabel}</p>
              <p className="mt-1 text-sm text-text/85">{c.recap.transitVal}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Table récap */}
      <section className={`${card} mb-10`}>
        <h2 className="font-serif text-2xl">{c.tableTitle}</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[720px] border-separate border-spacing-0">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-muted">
                <th scope="col" className="border-b border-white/10 py-3 pr-4">{c.tableHeaders.aspect}</th>
                <th scope="col" className="border-b border-white/10 py-3 pr-4">{c.tableHeaders.angle}</th>
                <th scope="col" className="border-b border-white/10 py-3 pr-4">{c.tableHeaders.type}</th>
                <th scope="col" className="border-b border-white/10 py-3 pr-4">{c.tableHeaders.tone}</th>
                <th scope="col" className="border-b border-white/10 py-3 pr-4">{c.tableHeaders.keywords}</th>
              </tr>
            </thead>
            <tbody>
              {ASPECTS.map((a) => (
                <tr key={a.slug} className="align-top">
                  <td className="border-b border-white/10 py-4 pr-4">
                    <a href={aspectHref(a)} className="font-serif text-lg hover:underline">
                      {a.nom}
                    </a>
                  </td>
                  <td className="border-b border-white/10 py-4 pr-4 text-sm text-text/80">{a.angle}</td>
                  <td className="border-b border-white/10 py-4 pr-4">
                    <span className={`inline-flex rounded-full border px-3 py-1 text-xs ${kindBadge(a.kind)}`}>
                      {c.kindLabel[a.kind]}
                    </span>
                  </td>
                  <td className="border-b border-white/10 py-4 pr-4">
                    <span className={`inline-flex rounded-full border px-3 py-1 text-xs ${toneBadge(a.tone)}`}>
                      {c.toneLabel[a.tone]}
                    </span>
                  </td>
                  <td className="border-b border-white/10 py-4 pr-4">
                    <div className="flex flex-wrap gap-2">
                      {a.keywords.slice(0, 4).map((k) => (
                        <span key={k} className={pill}>
                          {k}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Cartes détaillées */}
      <div className="space-y-8">
        {ASPECTS.map((a) => (
          <section key={a.slug} id={a.slug} className={`scroll-mt-24 ${card}`}>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted">{c.card.eyebrow}</p>
                <h2 className="mt-2 font-serif text-4xl">{a.nom}</h2>

                <div className="mt-3 flex flex-wrap gap-2">
                  <span className={pill}>{c.card.angleLabel} : {a.angle}</span>
                  <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm ${kindBadge(a.kind)}`}>
                    <span className="h-2 w-2 rounded-full bg-white/60" />
                    {c.kindLabel[a.kind]}
                  </span>
                  <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm ${toneBadge(a.tone)}`}>
                    <span className="h-2 w-2 rounded-full bg-white/60" />
                    {c.toneLabel[a.tone]}
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {a.keywords.map((k) => (
                    <span key={k} className={pill}>
                      {k}
                    </span>
                  ))}
                </div>
              </div>

              <a href="#top" className={`${pill} hover:bg-white/10`}>
                {c.card.topLabel}
              </a>
            </div>

            {/* Définition + Pourquoi */}
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
                <h3 className={h2}>
                  <span className={dot} /> {c.card.defTitle}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text/85">{a.definition}</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
                <h3 className={h2}>
                  <span className={dot} /> {c.card.whyTitle}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text/85">{a.why}</p>
              </div>
            </div>

            {/* Orbes */}
            <div className="mt-4 rounded-3xl border border-white/10 bg-black/20 p-6">
              <h3 className={h2}>
                <span className={dot} /> {c.card.orbTitle}
              </h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-wide text-muted">{c.card.natalLabel}</p>
                  <p className="mt-1 text-sm text-text/85">{a.orbs.natal}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-wide text-muted">{c.card.transitLabel}</p>
                  <p className="mt-1 text-sm text-text/85">{a.orbs.transit}</p>
                </div>
              </div>
              {a.orbs.notes?.length ? (
                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-text/80">
                  {a.orbs.notes.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              ) : null}
            </div>

            {/* Méthode + Exemples + Erreurs */}
            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className={h2}>
                  <span className={dot} /> {c.card.howTitle}
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-text/85">
                  {a.howToRead.map((x) => (
                    <li key={x} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className={h2}>
                  <span className={dot} /> {c.card.examplesTitle}
                </h3>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
                  {a.examples.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className={h2}>
                  <span className={dot} /> {c.card.pitfallsTitle}
                </h3>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
                  {a.pitfalls.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-14 border-t border-white/10 pt-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-text/70">{c.footer.next}</p>
          <div className="flex flex-wrap gap-2">
            <Link className={`${pill} hover:bg-white/10`} href="/#zodiaque">{c.footer.signs}</Link>
            <Link className={`${pill} hover:bg-white/10`} href="/#planetes">{c.footer.planets}</Link>
            <Link className={`${pill} hover:bg-white/10`} href="/#maisons">{c.footer.houses}</Link>
          </div>
        </div>
      </footer>

      {/* FAQ visible */}
      <section className="mt-16 space-y-6" aria-labelledby="faq-aspects">
        <h2 id="faq-aspects" className={h2}>{c.faqTitle}</h2>
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
