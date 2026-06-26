import type { Metadata } from "next";
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
import { maisonsDominantesContent } from "./content";

/**
 * Page « Les 12 maisons dominantes » — cours, i18n (fr/en/es).
 * Tout le texte vient de ./content.tsx ; ici uniquement la présentation.
 */

const INTERNAL_PATH = "/maisons-dominantes";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = toSeoLocale(locale);
  const c = maisonsDominantesContent[loc];
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

/* Palette tournante pour colorer les cartes (bordure + halo). */
const ACCENTS = [
  "border-rose-400/30 shadow-[0_0_0_1px_rgba(251,113,133,0.12)]",
  "border-amber-400/30 shadow-[0_0_0_1px_rgba(251,191,36,0.12)]",
  "border-emerald-400/30 shadow-[0_0_0_1px_rgba(52,211,153,0.12)]",
  "border-sky-400/30 shadow-[0_0_0_1px_rgba(56,189,248,0.12)]",
  "border-indigo-400/30 shadow-[0_0_0_1px_rgba(129,140,248,0.12)]",
  "border-violet-400/30 shadow-[0_0_0_1px_rgba(167,139,250,0.12)]",
];

/* Pastilles colorées pour les points forts du hero. */
const HL_PILLS = [
  "rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-sm text-amber-100",
  "rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-100",
  "rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-sm text-sky-100",
  "rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1 text-sm text-violet-100",
];

function H2({ id, label, dot = "bg-white/60" }: { id: string; label: string; dot?: string }) {
  return (
    <h2 id={id} className="font-serif text-2xl sm:text-3xl">
      <span className={`mr-3 inline-block h-2 w-2 rounded-full ${dot}`} />
      {label}
    </h2>
  );
}

export default async function MaisonsDominantesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = toSeoLocale(locale);
  const c = maisonsDominantesContent[loc];
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
    datePublished: "2026-06-26T12:00:00Z",
    dateModified: "2026-06-26T12:00:00Z",
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
            {c.hero.highlights.map((x, i) => (
              <span key={x} className={HL_PILLS[i % HL_PILLS.length]}>
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

        <div className="h-1 w-full bg-gradient-to-r from-violet-400/35 via-sky-400/35 to-emerald-300/35" />
      </header>

      {/* Encadré Définition SEO */}
      <div className="mt-8 rounded-2xl border border-violet-400/20 bg-violet-400/[0.04] px-6 py-5">
        <p className="text-sm font-semibold uppercase tracking-widest text-violet-300/80">{c.defBox.label}</p>
        <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">{c.defBox.body}</p>
      </div>

      {/* Intro */}
      <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">{c.intro}</p>

      {/* Définition */}
      <section id="definition" className="mb-10 scroll-mt-24">
        <H2 id="definition" label={c.definition.title} dot="bg-violet-400" />

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className={`${cardBase} border border-emerald-400/25 shadow-[0_0_0_1px_rgba(52,211,153,0.10)]`}>
            <p className="text-xs uppercase tracking-wide text-muted">{c.definition.resumeLabel}</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {c.definition.resume.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/70" />
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

      {/* Comment la repérer */}
      <section id="reperer" className="mb-10 scroll-mt-24">
        <H2 id="reperer" label={c.reperer.title} dot="bg-sky-400" />

        <div className="mt-4 space-y-3">
          {c.reperer.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <p className="mt-6 text-xs uppercase tracking-wide text-muted">{c.reperer.criteresLabel}</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {c.reperer.criteres.map((r, i) => (
            <div key={r.label} className={`${cardBase} ${ACCENTS[i % ACCENTS.length]}`}>
              <p className="font-serif text-lg text-white/90">{r.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-text/85">{r.sens}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-2xl border border-amber-400/30 bg-amber-400/[0.06] px-6 py-5">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-300/90">{c.reperer.astuceLabel}</p>
          <p className="mt-2 text-sm leading-relaxed text-white/85 sm:text-base">{c.reperer.astuce}</p>
        </div>
      </section>

      {/* Les 12 profils */}
      <section id="maisons" className="mb-10 scroll-mt-24">
        <H2 id="maisons" label={c.maisons.title} dot="bg-emerald-400" />

        <div className="mt-4 space-y-3">
          {c.maisons.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {c.maisons.items.map((m, i) => (
            <article key={m.maison} className={`${cardBase} ${ACCENTS[i % ACCENTS.length]}`}>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/30 font-serif text-sm text-white/90">
                  {m.maison}
                </span>
                <p className="font-serif text-xl text-white/95">{m.nom}</p>
              </div>

              <p className="mt-3 text-xs uppercase tracking-wide text-emerald-300/70">{c.maisons.apporteLabel}</p>
              <p className="mt-1 text-sm leading-relaxed text-text/85">{m.apporte}</p>

              <p className="mt-3 text-xs uppercase tracking-wide text-rose-300/70">{c.maisons.ombreLabel}</p>
              <p className="mt-1 text-sm leading-relaxed text-text/75">{m.ombre}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Force des maisons */}
      <section id="angularite" className="mb-10 scroll-mt-24">
        <H2 id="angularite" label={c.angularite.title} dot="bg-amber-400" />

        <div className="mt-4 space-y-3">
          {c.angularite.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {c.angularite.items.map((a, i) => (
            <div key={a.label} className={`${cardBase} ${ACCENTS[(i + 3) % ACCENTS.length]}`}>
              <p className="font-serif text-lg text-white/90">{a.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-text/85">{a.sens}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Exemples */}
      <section id="exemples" className="mb-10 scroll-mt-24">
        <H2 id="exemples" label={c.exemples.title} dot="bg-indigo-400" />

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {c.exemples.items.map((e, i) => (
            <article key={e.titre} className={`${cardBase} ${ACCENTS[(i + 1) % ACCENTS.length]}`}>
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
        <H2 id="faq" label={c.faqDataTitle} dot="bg-sky-400" />

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {c.faq.map((x, i) => (
            <div key={x.q} className={`${cardBase} ${ACCENTS[i % ACCENTS.length]}`}>
              <p className="font-serif text-xl">{x.q}</p>
              <p className="mt-3 text-sm leading-relaxed text-text/85">{x.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Visible (SEO) */}
      <section className="mt-16 space-y-6" aria-labelledby="faq-dominantes">
        <h2 id="faq-dominantes" className="font-serif text-2xl sm:text-3xl">
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
                  <span className="ml-3 text-violet-300/60 transition-transform group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="px-6 pb-6 text-sm leading-relaxed text-white/75 md:text-base">{x.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* À voir aussi */}
      <section className="mt-16" aria-label={c.related.title}>
        <h2 className="font-serif text-xl sm:text-2xl">{c.related.title}</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {c.related.items.map((r) => (
            <Link key={r.href} href={r.href} className={pill}>
              {r.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-14 border-t border-white/10 pt-8">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="flex flex-wrap gap-2">
            <Link className={pill} href="/#maisons">
              {c.footer.maisons}
            </Link>
            <Link className={pill} href="/#planetes">
              {c.footer.planetes}
            </Link>
            <Link className={pill} href="/#signes">
              {c.footer.signes}
            </Link>
            <Link className={pill} href="/cuspides-des-maisons">
              {c.footer.cuspides}
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
