import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

import {
  buildMeta,
  localizedPathUrl,
  pathLanguageAlternates,
  toSeoLocale,
  SITE_URL,
  AUTHOR_PERSON,
  PUBLISHER_ORG,
} from "@/lib/seo";
import { significateursContent } from "./content";

/**
 * Page « Les significateurs » — cours premium, i18n (fr/en/es).
 * Tout le texte vient de ./content.tsx ; ici uniquement la présentation.
 */

const INTERNAL_PATH = "/significateurs";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = toSeoLocale(locale);
  const c = significateursContent[loc];
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
const cardBase = "rounded-3xl border bg-white/5 p-6 backdrop-blur";

function H2({ id, label }: { id: string; label: string }) {
  return (
    <h2 id={id} className="font-serif text-2xl sm:text-3xl">
      <span className="mr-3 inline-block h-2 w-2 rounded-full bg-white/60" />
      {label}
    </h2>
  );
}

export default async function SignificateursPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const loc = toSeoLocale(locale);
  const c = significateursContent[loc];
  const sections = c.sections;

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
    datePublished: "2026-06-13T12:00:00Z",
    dateModified: "2026-06-13T12:00:00Z",
    articleSection: c.jsonld.articleSection,
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
    <main id="main-content" className="mx-auto max-w-5xl px-6 pb-16 pt-10 text-text">
      {/* JSON-LD Article */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />
      {/* JSON-LD FAQPage */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />

      {/* HERO */}
      <header className="mb-10 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5">
        <div className="p-7 sm:p-10">
          <p className="text-xs uppercase tracking-[0.18em] text-muted">{c.hero.badge}</p>

          <h1 className="mt-3 font-serif text-4xl sm:text-5xl">{c.hero.title}</h1>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-text/80">{c.hero.subtitle}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {c.hero.highlights.map((x) => (
              <span key={x} className={pill}>
                {x}
              </span>
            ))}
          </div>

          {/* Sommaire */}
          <nav aria-label={c.tocLabel} className="mt-7 flex flex-wrap gap-2">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className={pill}>
                {s.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="h-1 w-full bg-gradient-to-r from-indigo-400/35 via-sky-400/35 to-violet-400/35" />
      </header>

      {/* Encadré Définition SEO */}
      <div className="mt-8 rounded-2xl border border-indigo-400/20 bg-indigo-400/[0.04] px-6 py-5">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-300/80">{c.defBox.label}</p>
        <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">{c.defBox.body}</p>
      </div>

      {/* Intro */}
      <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">{c.intro}</p>

      {/* Définition */}
      <section id="definition" className="mb-10 scroll-mt-24">
        <H2 id="definition" label={c.definition.title} />

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className={`${cardBase} border border-sky-400/25 shadow-[0_0_0_1px_rgba(56,189,248,0.10)]`}>
            <p className="text-xs uppercase tracking-wide text-muted">{c.definition.resumeLabel}</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {c.definition.resume.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400/70" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${cardBase} border border-rose-400/25 shadow-[0_0_0_1px_rgba(251,113,133,0.10)]`}>
            <p className="text-xs uppercase tracking-wide text-muted">{c.definition.notLabel}</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {c.definition.ceQueCeNestPas.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400/70" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Types */}
      <section id="types" className="mb-10 scroll-mt-24">
        <H2 id="types" label={c.types.title} />

        <div className="mt-4 space-y-3">
          {c.types.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {c.types.items.map((it) => (
            <article
              key={it.slug}
              className={`${cardBase} border border-violet-400/25 shadow-[0_0_0_1px_rgba(167,139,250,0.10)]`}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-serif text-2xl">{it.nom}</h3>
                <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs uppercase tracking-wide text-muted">
                  {it.slug}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-text/85">{it.sens}</p>
              <p className="mt-3 inline-flex rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-text/85">
                {it.cle}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Méthode */}
      <section id="methode" className="mb-10 scroll-mt-24">
        <H2 id="methode" label={c.methode.title} />

        <div className="mt-4 space-y-3">
          {c.methode.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className={`${cardBase} mt-4 border border-emerald-400/25 shadow-[0_0_0_1px_rgba(52,211,153,0.10)]`}>
          <p className="text-xs uppercase tracking-wide text-muted">{c.methode.etapesLabel}</p>
          <ul className="mt-3 space-y-2 text-sm text-text/85">
            {c.methode.etapes.map((x) => (
              <li key={x} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/70" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 rounded-2xl border border-sky-400/20 bg-sky-400/[0.04] px-6 py-4">
          <p className="text-sm leading-relaxed text-white/85">{c.methode.regleCle}</p>
        </div>
      </section>

      {/* Querent & quésité */}
      <section id="querent" className="mb-10 scroll-mt-24">
        <H2 id="querent" label={c.querentQuesite.title} />

        <div className="mt-4 space-y-3">
          {c.querentQuesite.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {c.querentQuesite.items.map((r) => (
            <div
              key={r.label}
              className={`${cardBase} border border-indigo-400/25 shadow-[0_0_0_1px_rgba(129,140,248,0.10)]`}
            >
              <p className="font-serif text-xl">{r.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-text/85">{r.sens}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Significateurs naturels */}
      <section id="naturels" className="mb-10 scroll-mt-24">
        <H2 id="naturels" label={c.naturels.title} />

        <div className="mt-4 space-y-3">
          {c.naturels.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {c.naturels.table.map((n) => (
            <div key={n.domaine} className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-sm leading-relaxed text-text/85">{n.domaine}</p>
              <span className="shrink-0 rounded-full border border-violet-400/25 bg-black/30 px-3 py-1 text-xs font-medium text-white/90">
                {n.astre}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Force */}
      <section id="force" className="mb-10 scroll-mt-24">
        <H2 id="force" label={c.force.title} />

        <div className="mt-4 space-y-3">
          {c.force.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className={`${cardBase} border border-emerald-400/25 shadow-[0_0_0_1px_rgba(52,211,153,0.10)]`}>
            <p className="text-xs uppercase tracking-wide text-muted">{c.force.essentielleLabel}</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {c.force.essentielle.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/70" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${cardBase} border border-sky-400/25 shadow-[0_0_0_1px_rgba(56,189,248,0.10)]`}>
            <p className="text-xs uppercase tracking-wide text-muted">{c.force.accidentelleLabel}</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {c.force.accidentelle.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400/70" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 px-6 py-4">
          <p className="text-sm leading-relaxed text-white/80">
            {c.force.lien} <Link href="/maitrises" className="text-violet-300 underline-offset-4 hover:underline">{c.force.lienCta}</Link>
          </p>
        </div>
      </section>

      {/* Témoins accidentels */}
      <section id="accidentels" className="mb-10 scroll-mt-24">
        <H2 id="accidentels" label={c.accidentels.title} />

        <div className="mt-4 space-y-3">
          {c.accidentels.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {c.accidentels.items.map((r) => (
            <div
              key={r.label}
              className={`${cardBase} border border-violet-400/25 shadow-[0_0_0_1px_rgba(167,139,250,0.10)]`}
            >
              <p className="font-serif text-xl">{r.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-text/85">{r.sens}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Maisons dérivées */}
      <section id="maisons-derivees" className="mb-10 scroll-mt-24">
        <H2 id="maisons-derivees" label={c.maisonsDerivees.title} />

        <div className="mt-4 space-y-3">
          {c.maisonsDerivees.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className={`${cardBase} mt-4 border border-indigo-400/25 shadow-[0_0_0_1px_rgba(129,140,248,0.10)]`}>
          <p className="text-xs uppercase tracking-wide text-muted">{c.maisonsDerivees.exemplesLabel}</p>
          <ul className="mt-3 space-y-2 text-sm text-text/85">
            {c.maisonsDerivees.exemples.map((x) => (
              <li key={x} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400/70" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 px-6 py-4">
          <p className="text-sm leading-relaxed text-white/80">
            {c.maisonsDerivees.lien}{" "}
            <Link href="/maisons-derivees" className="text-violet-300 underline-offset-4 hover:underline">
              {c.maisonsDerivees.lienCta}
            </Link>
          </p>
        </div>
      </section>

      {/* Exemples */}
      <section id="exemples" className="mb-10 scroll-mt-24">
        <H2 id="exemples" label={c.exemples.title} />

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {c.exemples.items.map((e) => (
            <article
              key={e.titre}
              className={`${cardBase} border border-violet-400/25 shadow-[0_0_0_1px_rgba(167,139,250,0.10)]`}
            >
              <h3 className="font-serif text-2xl">{e.titre}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text/85">{e.texte}</p>
            </article>
          ))}
        </div>

        <div className={`${cardBase} mt-6 border border-rose-400/25 shadow-[0_0_0_1px_rgba(251,113,133,0.10)]`}>
          <p className="text-xs uppercase tracking-wide text-muted">{c.exemples.erreursLabel}</p>
          <ul className="mt-3 space-y-2 text-sm text-text/85">
            {c.exemples.erreurs.map((x) => (
              <li key={x} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400/70" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ (data) */}
      <section id="faq" className="mb-10 scroll-mt-24">
        <H2 id="faq" label={c.faqDataTitle} />

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {c.faq.map((x) => (
            <div key={x.q} className={`${cardBase} border border-sky-400/25 shadow-[0_0_0_1px_rgba(56,189,248,0.10)]`}>
              <p className="font-serif text-xl">{x.q}</p>
              <p className="mt-3 text-sm leading-relaxed text-text/85">{x.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Visible (SEO) */}
      <section className="mt-16 space-y-6" aria-labelledby="faq-significateurs">
        <h2 id="faq-significateurs" className="font-serif text-2xl sm:text-3xl">
          {c.faqVisibleTitle}
        </h2>
        <div className="space-y-4">
          {c.faqVisible.map((x, i) => (
            <details
              key={x.q}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md"
              open={i === 0}
            >
              <summary className="cursor-pointer list-none p-6 font-serif text-lg font-medium text-white/90 [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between">
                  {x.q}
                  <span className="ml-3 text-indigo-300/60 transition-transform group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="px-6 pb-6 text-sm leading-relaxed text-white/75 md:text-base">{x.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-14 border-t border-white/10 pt-8">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="flex flex-wrap gap-2">
            <Link className={pill} href="/maitrises">
              {c.footer.maitrises}
            </Link>
            <Link className={pill} href="/astrologie-horaire">
              {c.footer.horaire}
            </Link>
            <Link className={pill} href="/maisons-derivees">
              {c.footer.maisonsDerivees}
            </Link>
            <Link className={pill} href="/aspects">
              {c.footer.aspects}
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
