import type { Metadata } from "next";
import Link from "next/link";

import data from "../../../data/astrologie-horaire.details.json";
import { absoluteUrl, AUTHOR_PERSON, PUBLISHER_ORG, SITE_URL } from "@/lib/seo";

/* ---------------- Types ---------------- */

type HoraireData = typeof data;

const COURSE = data as HoraireData;

export const metadata: Metadata = {
  title: "Astrologie horaire : poser une question, lire la réponse",
  description:
    "Astrologie horaire : méthode complète. Conditions de validité, significateurs, maisons des questions, mouvements de lumière, dignités, Lune et timing. Cours complet !",
  alternates: { canonical: absoluteUrl("/astrologie-horaire") },
  openGraph: {
    title: "Astrologie horaire : poser une question, lire la réponse",
    description:
      "Astrologie horaire : méthode complète. Conditions de validité, significateurs, maisons des questions, mouvements de lumière, dignités, Lune et timing. Cours complet !",
    url: absoluteUrl("/astrologie-horaire"),
    type: "article",
    siteName: "Astro Cours",
    locale: "fr_FR",
    images: [{ url: absoluteUrl("/og/cover.jpg"), width: 1200, height: 630, alt: "Astro Cours" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Astrologie horaire : poser une question, lire la réponse",
    description:
      "Astrologie horaire : méthode complète. Conditions de validité, significateurs, maisons des questions, mouvements de lumière, dignités, Lune et timing. Cours complet !",
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
  headline: "Astrologie horaire : poser une question, lire la réponse",
  description:
    "Astrologie horaire : méthode complète. Conditions de validité, significateurs, maisons des questions, mouvements de lumière, dignités, Lune et timing.",
  inLanguage: "fr",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/astrologie-horaire` },
  author: AUTHOR_PERSON,
  publisher: PUBLISHER_ORG,
  image: [`${SITE_URL}/og/cover.jpg`],
  datePublished: "2026-06-13T12:00:00Z",
  dateModified: "2026-06-13T12:00:00Z",
  articleSection: "Astrologie",
};

export default function AstrologieHorairePage() {
  const sections = [
    { id: "definition", label: "Définition" },
    { id: "principe", label: "Principe" },
    { id: "validite", label: "Validité" },
    { id: "significateurs", label: "Significateurs" },
    { id: "maisons", label: "Maisons & questions" },
    { id: "lumiere", label: "Mouvements de lumière" },
    { id: "dignites", label: "Dignités" },
    { id: "lune", label: "La Lune" },
    { id: "receptions", label: "Réceptions" },
    { id: "timing", label: "Timing" },
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

        <div className="h-1 w-full bg-gradient-to-r from-amber-400/35 via-sky-400/35 to-violet-400/35" />
      </header>

      {/* Encadré Définition SEO */}
      <div className="mt-8 rounded-2xl border border-amber-400/20 bg-amber-400/[0.04] px-6 py-5">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-300/80">Définition</p>
        <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
          L’<strong>astrologie horaire</strong> est la technique traditionnelle qui répond à une question précise en dressant
          le <Link href="/#planetes">thème astrologique</Link> de l’instant et du lieu où la question est posée et comprise.
        </p>
      </div>

      {/* Intro */}
      <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
        Vous voulez savoir si une affaire aboutira, si une personne reviendra, si un objet perdu sera retrouvé ? L’
        <strong>astrologie horaire</strong> (de l’ancienne tradition de Bonatti et William Lilly) ne décrit pas un caractère
        comme le thème natal : elle juge une <strong>situation concrète</strong> à partir de la carte du ciel au moment exact
        de la question. Ce cours complet vous guide des conditions de validité jusqu’au calcul du délai de réalisation.
      </p>

      {/* Définition */}
      <section id="definition" className="mb-10 scroll-mt-24">
        <H2 id="definition" label="Qu’est-ce que l’astrologie horaire ?" />

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

      {/* Principe */}
      <section id="principe" className="mb-10 scroll-mt-24">
        <H2 id="principe" label="Le principe : la carte d’un instant" />

        <div className="mt-4 space-y-3">
          {COURSE.principe.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className={`${cardBase} mt-4 border border-emerald-400/25 shadow-[0_0_0_1px_rgba(52,211,153,0.10)]`}>
          <p className="text-xs uppercase tracking-wide text-muted">Conditions d’une bonne question</p>
          <ul className="mt-3 space-y-2 text-sm text-text/85">
            {COURSE.principe.conditions.map((x) => (
              <li key={x} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/70" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Validité / strictures */}
      <section id="validite" className="mb-10 scroll-mt-24">
        <H2 id="validite" label="La carte est-elle valable ? (radicalité)" />

        <div className="mt-4 space-y-3">
          {COURSE.validite.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {COURSE.validite.strictures.map((s) => (
            <div key={s.label} className="rounded-2xl border border-amber-400/20 bg-black/20 p-4">
              <p className="text-sm font-medium text-white/90">{s.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-text/80">{s.sens}</p>
            </div>
          ))}
        </div>

        <p className="mt-4 max-w-3xl text-sm italic leading-relaxed text-white/70">{COURSE.validite.note}</p>
      </section>

      {/* Significateurs */}
      <section id="significateurs" className="mb-10 scroll-mt-24">
        <H2 id="significateurs" label="Les significateurs : qui est qui dans la carte" />

        <div className="mt-4 space-y-3">
          {COURSE.significateurs.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {COURSE.significateurs.regles.map((r) => (
            <div
              key={r.label}
              className={`${cardBase} border border-violet-400/25 shadow-[0_0_0_1px_rgba(167,139,250,0.10)]`}
            >
              <p className="font-serif text-xl">{r.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-text/85">{r.sens}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-2xl border border-sky-400/20 bg-sky-400/[0.04] px-6 py-4">
          <p className="text-sm leading-relaxed text-white/85">{COURSE.significateurs.aspectsCles}</p>
        </div>
      </section>

      {/* Maisons & questions */}
      <section id="maisons" className="mb-10 scroll-mt-24">
        <H2 id="maisons" label="Quelle maison pour quelle question ?" />

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {COURSE.maisonsQuestions.map((m) => (
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
              <p className="mt-2 text-xs italic leading-relaxed text-muted">{m.exemples}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Mouvements de lumière */}
      <section id="lumiere" className="mb-10 scroll-mt-24">
        <H2 id="lumiere" label="Les mouvements de lumière entre planètes" />

        <div className="mt-4 space-y-3">
          {COURSE.mouvementsLumiere.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {COURSE.mouvementsLumiere.items.map((it) => (
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

      {/* Dignités */}
      <section id="dignites" className="mb-10 scroll-mt-24">
        <H2 id="dignites" label="Dignités essentielles et accidentelles" />

        <div className="mt-4 space-y-3">
          {COURSE.dignites.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className={`${cardBase} mt-4 border border-emerald-400/25 shadow-[0_0_0_1px_rgba(52,211,153,0.10)]`}>
          <p className="text-xs uppercase tracking-wide text-muted">Dignités essentielles (force intrinsèque)</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {COURSE.dignites.essentielles.map((d) => (
              <div key={d.label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-medium text-white/90">{d.label}</p>
                  <span className="rounded-full border border-white/10 bg-black/30 px-2.5 py-0.5 text-xs text-text/85">
                    {d.score}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-text/80">{d.sens}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className={`${cardBase} border border-sky-400/25 shadow-[0_0_0_1px_rgba(56,189,248,0.10)]`}>
            <p className="text-xs uppercase tracking-wide text-muted">Accidentelles fortifiantes</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {COURSE.dignites.accidentelles.fortifiantes.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400/70" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${cardBase} border border-rose-400/25 shadow-[0_0_0_1px_rgba(251,113,133,0.10)]`}>
            <p className="text-xs uppercase tracking-wide text-muted">Accidentelles débilitantes</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {COURSE.dignites.accidentelles.debilitantes.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400/70" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* La Lune */}
      <section id="lune" className="mb-10 scroll-mt-24">
        <H2 id="lune" label="Le rôle central de la Lune" />

        <div className="mt-4 space-y-3">
          {COURSE.lune.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {COURSE.lune.points.map((p) => (
            <div key={p.label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-sm font-medium text-white/90">{p.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-text/80">{p.sens}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Réceptions */}
      <section id="receptions" className="mb-10 scroll-mt-24">
        <H2 id="receptions" label="Les réceptions : la disposition des planètes" />

        <div className="mt-4 space-y-3">
          {COURSE.receptions.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {COURSE.receptions.items.map((r) => (
            <div
              key={r.label}
              className={`${cardBase} border border-violet-400/25 shadow-[0_0_0_1px_rgba(167,139,250,0.10)]`}
            >
              <p className="font-serif text-xl">{r.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-text/85">{r.sens}</p>
            </div>
          ))}
        </div>

        <p className="mt-4 max-w-3xl text-sm italic leading-relaxed text-white/70">{COURSE.receptions.note}</p>
      </section>

      {/* Timing */}
      <section id="timing" className="mb-10 scroll-mt-24">
        <H2 id="timing" label="Le timing : quand cela arrivera-t-il ?" />

        <div className="mt-4 space-y-3">
          {COURSE.timing.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className={`${cardBase} mt-4 border border-emerald-400/25 shadow-[0_0_0_1px_rgba(52,211,153,0.10)]`}>
          <p className="text-xs uppercase tracking-wide text-muted">Règles d’estimation</p>
          <ul className="mt-3 space-y-2 text-sm text-text/85">
            {COURSE.timing.regles.map((x) => (
              <li key={x} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/70" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 rounded-2xl border border-sky-400/20 bg-sky-400/[0.04] px-6 py-4">
          <p className="text-xs uppercase tracking-wide text-muted">Exemple</p>
          <p className="mt-2 text-sm leading-relaxed text-white/85">{COURSE.timing.exemple}</p>
        </div>
      </section>

      {/* Exemples */}
      <section id="exemples" className="mb-10 scroll-mt-24">
        <H2 id="exemples" label="Exemples concrets de questions horaires" />

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
        <H2 id="faq" label="Questions fréquentes sur l’astrologie horaire" />

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
      <section className="mt-16 space-y-6" aria-labelledby="faq-horaire">
        <h2 id="faq-horaire" className="font-serif text-2xl sm:text-3xl">
          Questions fréquentes sur l’astrologie horaire
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
                  <span className="ml-3 text-amber-300/60 transition-transform group-open:rotate-45">+</span>
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
            <Link className={pill} href="/aspects">
              Aspects
            </Link>
            <Link className={pill} href="/#planetes">
              Planètes
            </Link>
            <Link className={pill} href="/maitrises">
              Maîtrises
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
