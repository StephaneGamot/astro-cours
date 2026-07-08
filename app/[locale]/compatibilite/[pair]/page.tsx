import { Link } from "@/i18n/navigation";
import { notFound, permanentRedirect } from "next/navigation";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import {
  PAIRS,
  pairKey,
  pairSlugFor,
  canonicalPairFromSlug,
  pairUrl,
  pairLanguageAlternates,
} from "@/lib/compatibility";
import { PAIR_CONTENTS } from "../pairs";
import {
  buildMeta,
  toSeoLocale,
  AUTHOR_PERSON,
  PUBLISHER_ORG,
  SITE_URL,
  localizedPathUrl,
} from "@/lib/seo";

/**
 * Page « Compatibilité [signe] – [signe] » (audit SEO 07/2026).
 * Longue traîne : requêtes « compatibilité belier lion », « aries leo
 * compatibility »… Slug localisé par langue, redirection 308 si l'ordre
 * des signes est inversé ou si le slug n'est pas dans la langue courante.
 */

export function generateStaticParams({ params }: { params: { locale: string } }) {
  const loc = toSeoLocale(params?.locale);
  return PAIRS.map(([a, b]) => ({ pair: pairSlugFor(a, b, loc) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; pair: string }>;
}): Promise<Metadata> {
  const { locale, pair } = await params;
  const loc = toSeoLocale(locale);
  const canon = canonicalPairFromSlug(pair.toLowerCase());
  if (!canon) return {};
  const [a, b] = canon;
  const c = PAIR_CONTENTS[pairKey(a, b)]?.[loc];
  if (!c) return {};
  return buildMeta({
    title: c.meta.title,
    description: c.meta.description,
    canonicalPath: `/compatibilite/${pairSlugFor(a, b, loc)}`,
    type: "article",
    locale: loc,
    canonicalUrl: pairUrl(a, b, loc),
    languages: pairLanguageAlternates(a, b),
  });
}

const card = "rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8";

function Score({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-black/20 px-4 py-3">
      <span className="text-sm text-text/80">{label}</span>
      <span aria-label={`${value}/5`} className="text-sm tracking-widest text-rose-300">
        {"♥".repeat(value)}
        <span className="text-white/20">{"♥".repeat(5 - value)}</span>
      </span>
    </div>
  );
}

export default async function PairPage({
  params,
}: {
  params: Promise<{ locale: string; pair: string }>;
}) {
  const { locale, pair } = await params;
  setRequestLocale(locale);
  const loc = toSeoLocale(locale);

  const canon = canonicalPairFromSlug(pair.toLowerCase());
  if (!canon) notFound();
  const [a, b] = canon;

  // Slug non canonique pour la locale (ordre inversé ou autre langue) → 308.
  const expected = pairSlugFor(a, b, loc);
  if (pair !== expected) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const p = (routing.pathnames as any)["/compatibilite"];
    const seg = typeof p === "string" ? p : p?.[loc] ?? "/compatibilite";
    permanentRedirect(loc === "fr" ? `${seg}/${expected}` : `/${loc}${seg}/${expected}`);
  }

  const content = PAIR_CONTENTS[pairKey(a, b)];
  if (!content) notFound();
  const c = content[loc];
  const pageUrl = pairUrl(a, b, loc);

  const scoreLabels =
    loc === "en"
      ? { amour: "Love", communication: "Communication", duree: "Longevity" }
      : loc === "es"
        ? { amour: "Amor", communication: "Comunicación", duree: "Duración" }
        : { amour: "Amour", communication: "Communication", duree: "Durée" };

  const ui =
    loc === "en"
      ? {
          eyebrow: "Sign compatibility",
          strengths: "Strengths of the couple",
          frictions: "Points of friction",
          love: "Love & sexuality",
          work: "Friendship & work",
          advice: "The astrologer's advice",
          faq: "Frequently asked questions",
          allPairs: "All compatibilities",
          signA: "All about",
          hub: "Compatibility",
          home: "Home",
        }
      : loc === "es"
        ? {
            eyebrow: "Compatibilidad de signos",
            strengths: "Fortalezas de la pareja",
            frictions: "Puntos de fricción",
            love: "Amor y sexualidad",
            work: "Amistad y trabajo",
            advice: "El consejo del astrólogo",
            faq: "Preguntas frecuentes",
            allPairs: "Todas las compatibilidades",
            signA: "Todo sobre",
            hub: "Compatibilidad",
            home: "Inicio",
          }
        : {
            eyebrow: "Compatibilité des signes",
            strengths: "Forces du couple",
            frictions: "Points de friction",
            love: "Amour & sexualité",
            work: "Amitié & travail",
            advice: "Le conseil de l'astrologue",
            faq: "Questions fréquentes",
            allPairs: "Toutes les compatibilités",
            signA: "Tout savoir sur",
            hub: "Compatibilité",
            home: "Accueil",
          };

  const ARTICLE_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.meta.title,
    description: c.meta.description,
    inLanguage: loc,
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    author: AUTHOR_PERSON,
    publisher: PUBLISHER_ORG,
    image: [`${SITE_URL}/og/cover.jpg`],
    datePublished: "2026-07-07T12:00:00Z",
    dateModified: "2026-07-07T12:00:00Z",
    articleSection: ui.eyebrow,
  };

  const BREADCRUMB_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: ui.home, item: localizedPathUrl("/", loc) },
      { "@type": "ListItem", position: 2, name: ui.hub, item: localizedPathUrl("/compatibilite", loc) },
      { "@type": "ListItem", position: 3, name: c.h1, item: pageUrl },
    ],
  };

  const FAQ_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main id="main-content" className="mx-auto max-w-4xl px-6 pb-16 pt-10 text-text">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />

      {/* HERO */}
      <header className="mb-10 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-7 sm:p-10">
        <p className="text-xs uppercase tracking-[0.18em] text-muted">{ui.eyebrow}</p>
        <h1 className="mt-3 font-serif text-4xl sm:text-5xl">{c.h1}</h1>
        <p className="mt-2 text-lg text-rose-200/90">{c.tagline}</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <Score label={scoreLabels.amour} value={c.scores.amour} />
          <Score label={scoreLabels.communication} value={c.scores.communication} />
          <Score label={scoreLabels.duree} value={c.scores.duree} />
        </div>
        <div className="mt-6 max-w-3xl text-sm leading-relaxed text-text/80 sm:text-base [&_a]:text-rose-300 [&_a]:underline [&_a]:decoration-1 [&_a]:underline-offset-2">
          {c.intro}
        </div>
      </header>

      {/* DYNAMIQUE */}
      <section className={card}>
        <div className="space-y-4 text-sm leading-relaxed text-text/80 sm:text-base [&_a]:text-rose-300 [&_a]:underline [&_a]:decoration-1 [&_a]:underline-offset-2">
          {c.dynamique}
        </div>
      </section>

      {/* FORCES / FRICTIONS */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <section className="rounded-3xl border border-emerald-400/20 bg-emerald-500/[0.05] p-6">
          <h2 className="font-serif text-xl text-emerald-200 sm:text-2xl">{ui.strengths}</h2>
          <ul role="list" className="mt-4 space-y-3">
            {c.forces.map((f) => (
              <li key={f} className="flex gap-2 text-sm leading-relaxed text-text/80">
                <span aria-hidden="true" className="text-emerald-300">+</span> {f}
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-3xl border border-rose-400/20 bg-rose-500/[0.05] p-6">
          <h2 className="font-serif text-xl text-rose-200 sm:text-2xl">{ui.frictions}</h2>
          <ul role="list" className="mt-4 space-y-3">
            {c.frictions.map((f) => (
              <li key={f} className="flex gap-2 text-sm leading-relaxed text-text/80">
                <span aria-hidden="true" className="text-rose-300">−</span> {f}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* AMOUR / TRAVAIL / CONSEIL */}
      <section className={`mt-8 ${card}`}>
        <h2 className="font-serif text-2xl sm:text-3xl">{ui.love}</h2>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-text/80 sm:text-base [&_a]:text-rose-300 [&_a]:underline [&_a]:decoration-1 [&_a]:underline-offset-2">
          {c.amourSexe}
        </div>
      </section>
      <section className={`mt-8 ${card}`}>
        <h2 className="font-serif text-2xl sm:text-3xl">{ui.work}</h2>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-text/80 sm:text-base [&_a]:text-rose-300 [&_a]:underline [&_a]:decoration-1 [&_a]:underline-offset-2">
          {c.amitieTravail}
        </div>
      </section>
      <section className="mt-8 rounded-3xl border border-violet-400/20 bg-violet-500/[0.06] p-6 sm:p-8">
        <h2 className="font-serif text-2xl text-violet-200 sm:text-3xl">{ui.advice}</h2>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-text/80 sm:text-base [&_a]:text-violet-300 [&_a]:underline [&_a]:decoration-1 [&_a]:underline-offset-2">
          {c.conseil}
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="font-serif text-2xl sm:text-3xl">{ui.faq}</h2>
        <dl className="mt-6 space-y-4">
          {c.faq.map((f) => (
            <div key={f.q} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <dt className="font-medium text-text">{f.q}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-text/80">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* MAILLAGE — signes + hub */}
      <nav className="mt-12 flex flex-wrap gap-3">
        <Link
          href={`/signes/${a}`}
          className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-text/90 transition hover:bg-white/10"
        >
          {ui.signA} {c.names.a} →
        </Link>
        <Link
          href={`/signes/${b}`}
          className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-text/90 transition hover:bg-white/10"
        >
          {ui.signA} {c.names.b} →
        </Link>
        <Link
          href="/compatibilite"
          className="rounded-full border border-rose-400/30 bg-rose-400/10 px-5 py-2 text-sm text-rose-200 transition hover:bg-rose-400/20"
        >
          {ui.allPairs} →
        </Link>
      </nav>
    </main>
  );
}
