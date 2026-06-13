import type { Metadata } from "next";
import Link from "next/link";

import data from "../../../data/astrologie-medicale.details.json";
import { absoluteUrl, AUTHOR_PERSON, PUBLISHER_ORG, SITE_URL } from "@/lib/seo";

/* ---------------- Types ---------------- */

type MedicaleData = typeof data;

const COURSE = data as MedicaleData;

export const metadata: Metadata = {
  title: "Astrologie médicale : tempéraments, humeurs et homme zodiacal",
  description:
    "Astrologie médicale : tradition complète. Homme zodiacal, tempéraments, quatre humeurs, planètes, maisons de la santé et décombiture. Cours complet (symbolique, non médical) !",
  alternates: { canonical: absoluteUrl("/astrologie-medicale") },
  openGraph: {
    title: "Astrologie médicale : tempéraments, humeurs et homme zodiacal",
    description:
      "Astrologie médicale : tradition complète. Homme zodiacal, tempéraments, quatre humeurs, planètes, maisons de la santé et décombiture. Cours complet (symbolique, non médical) !",
    url: absoluteUrl("/astrologie-medicale"),
    type: "article",
    siteName: "Astro Cours",
    locale: "fr_FR",
    images: [{ url: absoluteUrl("/og/cover.jpg"), width: 1200, height: 630, alt: "Astro Cours" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Astrologie médicale : tempéraments, humeurs et homme zodiacal",
    description:
      "Astrologie médicale : tradition complète. Homme zodiacal, tempéraments, quatre humeurs, planètes, maisons de la santé et décombiture. Cours complet (symbolique, non médical) !",
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
  headline: "Astrologie médicale : tempéraments, humeurs et homme zodiacal",
  description:
    "Astrologie médicale : homme zodiacal, tempéraments, quatre humeurs, planètes, maisons de la santé et décombiture. Approche symbolique et historique, non médicale.",
  inLanguage: "fr",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/astrologie-medicale` },
  author: AUTHOR_PERSON,
  publisher: PUBLISHER_ORG,
  image: [`${SITE_URL}/og/cover.jpg`],
  datePublished: "2026-06-13T12:00:00Z",
  dateModified: "2026-06-13T12:00:00Z",
  articleSection: "Astrologie",
};

export default function AstrologieMedicalePage() {
  const sections = [
    { id: "definition", label: "Définition" },
    { id: "histoire", label: "Histoire & humeurs" },
    { id: "homme-zodiacal", label: "Homme zodiacal" },
    { id: "temperaments", label: "Tempéraments" },
    { id: "planetes", label: "Planètes" },
    { id: "maisons", label: "Maisons de la santé" },
    { id: "decombiture", label: "Décombiture" },
    { id: "jours-critiques", label: "Jours critiques" },
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

        <div className="h-1 w-full bg-gradient-to-r from-emerald-400/35 via-teal-400/35 to-sky-400/35" />
      </header>

      {/* Avertissement médical */}
      <div className="mt-8 rounded-2xl border border-rose-400/30 bg-rose-400/[0.06] px-6 py-5">
        <p className="text-sm font-semibold uppercase tracking-widest text-rose-300/90">{COURSE.avertissement.titre}</p>
        <p className="mt-2 text-sm leading-relaxed text-white/85 sm:text-base">{COURSE.avertissement.texte}</p>
      </div>

      {/* Encadré Définition SEO */}
      <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.04] px-6 py-5">
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300/80">Définition</p>
        <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
          L’<strong>astrologie médicale</strong> est la tradition qui relie les signes, les{" "}
          <Link href="/#planetes">planètes</Link> et les <Link href="/#maisons">maisons</Link> aux parties du corps, aux
          tempéraments et aux quatre humeurs. C’est un système symbolique et historique, non un outil de diagnostic.
        </p>
      </div>

      {/* Intro */}
      <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
        De l’Antiquité à la Renaissance, médecine et astrologie étaient inséparables : la santé se pensait comme l’équilibre
        de quatre <strong>humeurs</strong>, et chaque signe gouvernait une région du corps. Ce cours présente l’
        <strong>astrologie médicale</strong> en tant que patrimoine symbolique — l’homme zodiacal, les tempéraments, les
        correspondances planétaires et la décombiture — sans jamais se substituer à la médecine.
      </p>

      {/* Définition */}
      <section id="definition" className="mb-10 scroll-mt-24">
        <H2 id="definition" label="Qu’est-ce que l’astrologie médicale ?" />

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className={`${cardBase} border border-emerald-400/25 shadow-[0_0_0_1px_rgba(52,211,153,0.10)]`}>
            <p className="text-xs uppercase tracking-wide text-muted">Résumé</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {COURSE.definition.resume.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/70" />
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

      {/* Histoire & humeurs */}
      <section id="histoire" className="mb-10 scroll-mt-24">
        <H2 id="histoire" label="Histoire : la médecine des humeurs" />

        <div className="mt-4 space-y-3">
          {COURSE.histoire.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {COURSE.histoire.reperes.map((r) => (
            <div
              key={r.label}
              className={`${cardBase} border border-sky-400/25 shadow-[0_0_0_1px_rgba(56,189,248,0.10)]`}
            >
              <p className="font-serif text-xl">{r.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-text/85">{r.sens}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Homme zodiacal */}
      <section id="homme-zodiacal" className="mb-10 scroll-mt-24">
        <H2 id="homme-zodiacal" label="L’homme zodiacal : les signes et le corps" />

        <div className="mt-4 space-y-3">
          {COURSE.hommeZodiacal.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {COURSE.hommeZodiacal.signes.map((s) => (
            <article
              key={s.signe}
              className={`${cardBase} border border-emerald-400/25 shadow-[0_0_0_1px_rgba(52,211,153,0.10)]`}
            >
              <p className="font-serif text-2xl">{s.signe}</p>
              <p className="mt-2 text-sm leading-relaxed text-text/85">{s.partie}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Tempéraments */}
      <section id="temperaments" className="mb-10 scroll-mt-24">
        <H2 id="temperaments" label="Les quatre tempéraments et humeurs" />

        <div className="mt-4 space-y-3">
          {COURSE.tempéraments.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {COURSE.tempéraments.items.map((t) => (
            <article
              key={t.nom}
              className={`${cardBase} border border-violet-400/25 shadow-[0_0_0_1px_rgba(167,139,250,0.10)]`}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-serif text-2xl">{t.nom}</h3>
                <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs uppercase tracking-wide text-muted">
                  {t.element}
                </span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-text/85">
                  {t.qualites}
                </span>
                <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-text/85">
                  Humeur : {t.humeur}
                </span>
                <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-text/85">
                  {t.planetes}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-text/85">{t.traits}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Planètes */}
      <section id="planetes" className="mb-10 scroll-mt-24">
        <H2 id="planetes" label="Les planètes et leurs domaines physiologiques" />

        <div className="mt-4 space-y-3">
          {COURSE.planetes.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {COURSE.planetes.items.map((p) => (
            <div key={p.astre} className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="font-serif text-lg text-white/90">{p.astre}</p>
                <span className="rounded-full border border-white/10 bg-black/30 px-2.5 py-0.5 text-xs text-text/85">
                  {p.qualites}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-text/80">{p.domaine}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Maisons de la santé */}
      <section id="maisons" className="mb-10 scroll-mt-24">
        <H2 id="maisons" label="Les maisons de la santé" />

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {COURSE.maisonsSante.map((m) => (
            <article
              key={m.maison}
              className={`${cardBase} border border-sky-400/25 shadow-[0_0_0_1px_rgba(56,189,248,0.10)]`}
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/30 font-serif text-sm text-white/90">
                  {m.maison}
                </span>
                <p className="text-sm font-medium text-white/90">Maison {m.maison}</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-text/85">{m.domaine}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Décombiture */}
      <section id="decombiture" className="mb-10 scroll-mt-24">
        <H2 id="decombiture" label="La décombiture : le thème de l’alitement" />

        <div className="mt-4 space-y-3">
          {COURSE.decombiture.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {COURSE.decombiture.elements.map((e) => (
            <div
              key={e.label}
              className={`${cardBase} border border-violet-400/25 shadow-[0_0_0_1px_rgba(167,139,250,0.10)]`}
            >
              <p className="font-serif text-xl">{e.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-text/85">{e.sens}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Jours critiques */}
      <section id="jours-critiques" className="mb-10 scroll-mt-24">
        <H2 id="jours-critiques" label="Les jours critiques et la Lune" />

        <div className="mt-4 space-y-3">
          {COURSE.joursCritiques.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className={`${cardBase} mt-4 border border-emerald-400/25 shadow-[0_0_0_1px_rgba(52,211,153,0.10)]`}>
          <p className="text-xs uppercase tracking-wide text-muted">Principes traditionnels</p>
          <ul className="mt-3 space-y-2 text-sm text-text/85">
            {COURSE.joursCritiques.regles.map((x) => (
              <li key={x} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/70" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Exemples */}
      <section id="exemples" className="mb-10 scroll-mt-24">
        <H2 id="exemples" label="Exemples de lecture symbolique" />

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
        <H2 id="faq" label="Questions fréquentes sur l’astrologie médicale" />

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {COURSE.faq.map((x) => (
            <div key={x.q} className={`${cardBase} border border-emerald-400/25 shadow-[0_0_0_1px_rgba(52,211,153,0.10)]`}>
              <p className="font-serif text-xl">{x.q}</p>
              <p className="mt-3 text-sm leading-relaxed text-text/85">{x.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Visible (SEO) */}
      <section className="mt-16 space-y-6" aria-labelledby="faq-medicale">
        <h2 id="faq-medicale" className="font-serif text-2xl sm:text-3xl">
          Questions fréquentes sur l’astrologie médicale
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
                  <span className="ml-3 text-emerald-300/60 transition-transform group-open:rotate-45">+</span>
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
            <Link className={pill} href="/#planetes">
              Planètes
            </Link>
            <Link className={pill} href="/#signes">
              Signes
            </Link>
            <Link className={pill} href="/astrologie-horaire">
              Astrologie horaire
            </Link>
            <Link className={pill} href="/#maisons">
              Maisons
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
