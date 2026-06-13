import type { Metadata } from "next";
import Link from "next/link";

import data from "../../../data/significateurs.details.json";
import { absoluteUrl, AUTHOR_PERSON, PUBLISHER_ORG, SITE_URL } from "@/lib/seo";

/* ---------------- Types ---------------- */

type SignifData = typeof data;

const COURSE = data as SignifData;

export const metadata: Metadata = {
  title: "Les significateurs : qui représente quoi dans un thème",
  description:
    "Les significateurs en astrologie : significateur principal et co-significateur, significateurs naturels, almuten, méthode d'attribution, force et réceptions. Cours complet !",
  alternates: { canonical: absoluteUrl("/significateurs") },
  openGraph: {
    title: "Les significateurs : qui représente quoi dans un thème",
    description:
      "Les significateurs en astrologie : significateur principal et co-significateur, significateurs naturels, almuten, méthode d'attribution, force et réceptions. Cours complet !",
    url: absoluteUrl("/significateurs"),
    type: "article",
    siteName: "Astro Cours",
    locale: "fr_FR",
    images: [{ url: absoluteUrl("/og/cover.jpg"), width: 1200, height: 630, alt: "Astro Cours" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Les significateurs : qui représente quoi dans un thème",
    description:
      "Les significateurs en astrologie : significateur principal et co-significateur, significateurs naturels, almuten, méthode d'attribution, force et réceptions. Cours complet !",
    images: [absoluteUrl("/og/cover.jpg")],
  },
};

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

const ARTICLE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Les significateurs : qui représente quoi dans un thème",
  description:
    "Les significateurs en astrologie : significateur principal et co-significateur, significateurs naturels, almuten, méthode d'attribution, force et réceptions.",
  inLanguage: "fr",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/significateurs` },
  author: AUTHOR_PERSON,
  publisher: PUBLISHER_ORG,
  image: [`${SITE_URL}/og/cover.jpg`],
  datePublished: "2026-06-13T12:00:00Z",
  dateModified: "2026-06-13T12:00:00Z",
  articleSection: "Astrologie",
};

export default function SignificateursPage() {
  const sections = [
    { id: "definition", label: "Définition" },
    { id: "types", label: "Types" },
    { id: "methode", label: "Méthode" },
    { id: "querent", label: "Querent & quésité" },
    { id: "naturels", label: "Significateurs naturels" },
    { id: "force", label: "Force" },
    { id: "accidentels", label: "Témoins accidentels" },
    { id: "maisons-derivees", label: "Maisons dérivées" },
    { id: "exemples", label: "Exemples" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <main id="main-content" className="mx-auto max-w-5xl px-6 pb-16 pt-10 text-text">
      {/* JSON-LD Article */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />
      {/* JSON-LD FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: COURSE.faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      {/* HERO */}
      <header className="mb-10 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5">
        <div className="p-7 sm:p-10">
          <p className="text-xs uppercase tracking-[0.18em] text-muted">{COURSE.hero.badge}</p>

          <h1 className="mt-3 font-serif text-4xl sm:text-5xl">{COURSE.hero.title}</h1>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-text/80">{COURSE.hero.subtitle}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {COURSE.hero.highlights.map((x) => (
              <span key={x} className={pill}>
                {x}
              </span>
            ))}
          </div>

          {/* Sommaire */}
          <nav aria-label="Sommaire" className="mt-7 flex flex-wrap gap-2">
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
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-300/80">Définition</p>
        <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
          Un <strong>significateur</strong> est la <Link href="/#planetes">planète</Link> qui représente un acteur ou une
          chose dans un thème : on l’identifie à partir de la <Link href="/#maisons">maison</Link> qui gouverne le sujet,
          avant toute interprétation.
        </p>
      </div>

      {/* Intro */}
      <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
        Avant d’interpréter quoi que ce soit, l’astrologue traditionnel se pose une question simple : <strong>qui représente
        qui ?</strong> Le consultant, le partenaire, l’argent, le voyage… chacun a son <strong>significateur</strong>. Ce
        cours vous apprend à les attribuer correctement, à distinguer significateur principal, co-significateur et
        significateur naturel, puis à juger leur force.
      </p>

      {/* Définition */}
      <section id="definition" className="mb-10 scroll-mt-24">
        <H2 id="definition" label="Qu’est-ce qu’un significateur ?" />

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className={`${cardBase} border border-sky-400/25 shadow-[0_0_0_1px_rgba(56,189,248,0.10)]`}>
            <p className="text-xs uppercase tracking-wide text-muted">Résumé</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {COURSE.definition.resume.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400/70" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${cardBase} border border-rose-400/25 shadow-[0_0_0_1px_rgba(251,113,133,0.10)]`}>
            <p className="text-xs uppercase tracking-wide text-muted">Ce que ce n’est pas</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {COURSE.definition.ceQueCeNestPas.map((x) => (
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
        <H2 id="types" label="Les quatre types de significateurs" />

        <div className="mt-4 space-y-3">
          {COURSE.types.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {COURSE.types.items.map((it) => (
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
        <H2 id="methode" label="Méthode : attribuer un significateur" />

        <div className="mt-4 space-y-3">
          {COURSE.methode.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className={`${cardBase} mt-4 border border-emerald-400/25 shadow-[0_0_0_1px_rgba(52,211,153,0.10)]`}>
          <p className="text-xs uppercase tracking-wide text-muted">Étapes</p>
          <ul className="mt-3 space-y-2 text-sm text-text/85">
            {COURSE.methode.etapes.map((x) => (
              <li key={x} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/70" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 rounded-2xl border border-sky-400/20 bg-sky-400/[0.04] px-6 py-4">
          <p className="text-sm leading-relaxed text-white/85">{COURSE.methode.regleCle}</p>
        </div>
      </section>

      {/* Querent & quésité */}
      <section id="querent" className="mb-10 scroll-mt-24">
        <H2 id="querent" label="Querent et quésité : les deux pôles" />

        <div className="mt-4 space-y-3">
          {COURSE.querentQuesite.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {COURSE.querentQuesite.items.map((r) => (
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
        <H2 id="naturels" label="Table des significateurs naturels" />

        <div className="mt-4 space-y-3">
          {COURSE.naturels.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {COURSE.naturels.table.map((n) => (
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
        <H2 id="force" label="La force d’un significateur" />

        <div className="mt-4 space-y-3">
          {COURSE.force.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className={`${cardBase} border border-emerald-400/25 shadow-[0_0_0_1px_rgba(52,211,153,0.10)]`}>
            <p className="text-xs uppercase tracking-wide text-muted">Dignité essentielle</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {COURSE.force.essentielle.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/70" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${cardBase} border border-sky-400/25 shadow-[0_0_0_1px_rgba(56,189,248,0.10)]`}>
            <p className="text-xs uppercase tracking-wide text-muted">Dignité accidentelle</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {COURSE.force.accidentelle.map((x) => (
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
            {COURSE.force.lien} <Link href="/maitrises" className="text-violet-300 underline-offset-4 hover:underline">Voir les maîtrises planétaires →</Link>
          </p>
        </div>
      </section>

      {/* Témoins accidentels */}
      <section id="accidentels" className="mb-10 scroll-mt-24">
        <H2 id="accidentels" label="Les témoins accidentels d’un sujet" />

        <div className="mt-4 space-y-3">
          {COURSE.accidentels.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {COURSE.accidentels.items.map((r) => (
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
        <H2 id="maisons-derivees" label="Significateurs des tiers : tourner les maisons" />

        <div className="mt-4 space-y-3">
          {COURSE.maisonsDerivees.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className={`${cardBase} mt-4 border border-indigo-400/25 shadow-[0_0_0_1px_rgba(129,140,248,0.10)]`}>
          <p className="text-xs uppercase tracking-wide text-muted">Exemples</p>
          <ul className="mt-3 space-y-2 text-sm text-text/85">
            {COURSE.maisonsDerivees.exemples.map((x) => (
              <li key={x} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400/70" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 px-6 py-4">
          <p className="text-sm leading-relaxed text-white/80">
            {COURSE.maisonsDerivees.lien}{" "}
            <Link href="/maisons-derivees" className="text-violet-300 underline-offset-4 hover:underline">
              Voir les maisons dérivées →
            </Link>
          </p>
        </div>
      </section>

      {/* Exemples */}
      <section id="exemples" className="mb-10 scroll-mt-24">
        <H2 id="exemples" label="Exemples d’attribution des significateurs" />

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {COURSE.exemplesLecture.map((e) => (
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
          <p className="text-xs uppercase tracking-wide text-muted">Erreurs fréquentes à éviter</p>
          <ul className="mt-3 space-y-2 text-sm text-text/85">
            {COURSE.erreurs.map((x) => (
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
        <H2 id="faq" label="Questions fréquentes sur les significateurs" />

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {COURSE.faq.map((x) => (
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
          Questions fréquentes sur les significateurs
        </h2>
        <div className="space-y-4">
          {COURSE.faqVisible.map((x, i) => (
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
              Maîtrises
            </Link>
            <Link className={pill} href="/astrologie-horaire">
              Astrologie horaire
            </Link>
            <Link className={pill} href="/maisons-derivees">
              Maisons dérivées
            </Link>
            <Link className={pill} href="/aspects">
              Aspects
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
