import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import data from "../../../data/synastrie.details.json";

/* ---------------- Types ---------------- */

type SynData = typeof data;

const COURSE = data as SynData;

export const metadata: Metadata = {
  title: "Synastrie — Compatibilité & dynamique relationnelle",
  description:
    "Synastrie en astrologie : méthode, aspects entre planètes, axes relationnels, maisons activées et drapeaux rouges. Découvrez notre cours complet !",
  alternates: { canonical: "https://www.astro-cours.com/synastrie" },
  openGraph: {
    title: "Synastrie — Compatibilité & dynamique relationnelle",
    description:
      "Synastrie en astrologie : méthode, aspects entre planètes, axes relationnels, maisons activées et drapeaux rouges. Découvrez notre cours complet !",
    url: "https://www.astro-cours.com/synastrie",
    type: "article",
    siteName: "Astro Cours",
    locale: "fr_FR",
    images: [{ url: "https://www.astro-cours.com/og/cover.jpg", width: 1200, height: 630, alt: "Astro Cours" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Synastrie — Compatibilité & dynamique relationnelle",
    description:
      "Synastrie en astrologie : méthode, aspects entre planètes, axes relationnels, maisons activées et drapeaux rouges. Découvrez notre cours complet !",
    images: ["https://www.astro-cours.com/og/cover.jpg"],
  },
};

const pill =
  "rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-text/90 hover:bg-white/10";
const cardBase =
  "rounded-3xl border bg-white/5 p-6 backdrop-blur";

function accent(kind: "love" | "mind" | "real" | "deep") {
  // palette relationnelle (subtile mais premium)
  switch (kind) {
    case "love":
      return {
        border: "border-rose-400/25",
        glow: "shadow-[0_0_0_1px_rgba(251,113,133,0.10)]",
        dot: "bg-rose-400/70",
        ring: "focus-visible:ring-rose-400/35",
        line: "bg-rose-400/35",
      };
    case "mind":
      return {
        border: "border-sky-400/25",
        glow: "shadow-[0_0_0_1px_rgba(56,189,248,0.10)]",
        dot: "bg-sky-400/70",
        ring: "focus-visible:ring-sky-400/35",
        line: "bg-sky-400/35",
      };
    case "real":
      return {
        border: "border-emerald-400/25",
        glow: "shadow-[0_0_0_1px_rgba(52,211,153,0.10)]",
        dot: "bg-emerald-400/70",
        ring: "focus-visible:ring-emerald-400/35",
        line: "bg-emerald-400/35",
      };
    default:
      return {
        border: "border-violet-400/25",
        glow: "shadow-[0_0_0_1px_rgba(167,139,250,0.10)]",
        dot: "bg-violet-400/70",
        ring: "focus-visible:ring-violet-400/35",
        line: "bg-violet-400/35",
      };
  }
}

function H2({ id, label }: { id: string; label: string }) {
  return (
    <h2 id={id} className="font-serif text-2xl sm:text-3xl">
      <span className="mr-3 inline-block h-2 w-2 rounded-full bg-white/60" />
      {label}
    </h2>
  );
}

export default function SynastriePage() {
  const sections = [
    { id: "definition", label: "Définition" },
    { id: "methode", label: "Méthode pro" },
    { id: "piliers", label: "Piliers" },
    { id: "aspects", label: "Aspects en synastrie" },
    { id: "drapeaux", label: "Drapeaux rouges/verts" },
    { id: "exemples", label: "Exemples" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <main id="main-content" className="mx-auto max-w-5xl px-6 pb-16 pt-10 text-text">
      {/* HERO */}
      <header className="mb-10 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5">
        <div className="p-7 sm:p-10">
          <p className="text-xs uppercase tracking-[0.18em] text-muted">
            {COURSE.hero.badge}
          </p>

          <h1 className="mt-3 font-serif text-4xl sm:text-5xl">
            {COURSE.hero.title}
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-text/80">
            {COURSE.hero.subtitle}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {COURSE.hero.highlights.map((x) => (
              <span key={x} className={pill}>{x}</span>
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

        <div className="h-1 w-full bg-gradient-to-r from-rose-400/35 via-sky-400/35 to-violet-400/35" />
      </header>

      {/* Encadré Définition SEO */}
      <div className="mt-8 rounded-2xl border border-rose-400/20 bg-rose-400/[0.04] px-6 py-5">
        <p className="text-sm font-semibold uppercase tracking-widest text-rose-300/80">Définition</p>
        <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
          La <strong>synastrie</strong> est la technique astrologique qui compare deux <Link href="/#planetes">thèmes natals</Link> pour analyser la compatibilité amoureuse, les dynamiques relationnelles et les tensions entre partenaires.
        </p>
      </div>

      {/* Intro APP */}
      <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
        Vous cherchez à comprendre la <strong>synastrie astrologique</strong> et ce qu'elle révèle sur votre couple ? Beaucoup de personnes confondent compatibilité de signes et véritable étude comparative des thèmes. Ce cours complet vous guide pas à pas dans la lecture des aspects, des maisons activées et des signaux d'alerte à surveiller.
      </p>

      {/* Définition */}
      <section id="definition" className="mb-10 scroll-mt-24">
        <H2 id="definition" label="Qu'est-ce que la synastrie en astrologie ?" />

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

      {/* Méthode */}
      <section id="methode" className="mb-10 scroll-mt-24">
        <H2 id="methode" label="Comment faire une synastrie : méthode professionnelle" />

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className={`${cardBase} border border-emerald-400/25 shadow-[0_0_0_1px_rgba(52,211,153,0.10)]`}>
            <p className="text-xs uppercase tracking-wide text-muted">Règles d’or</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {COURSE.methode.reglesOr.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/70" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${cardBase} border border-sky-400/25 shadow-[0_0_0_1px_rgba(56,189,248,0.10)]`}>
            <p className="text-xs uppercase tracking-wide text-muted">Checklist</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {COURSE.methode.checklist.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400/70" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`${cardBase} mt-4 border border-violet-400/25 shadow-[0_0_0_1px_rgba(167,139,250,0.10)]`}>
          <p className="text-xs uppercase tracking-wide text-muted">Orbes recommandés</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {COURSE.methode.orbes.recommandes.map((o) => (
              <div key={o.label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-sm text-text/85">{o.label}</p>
                <p className="mt-2 inline-flex rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-text/85">
                  {o.orbe}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Piliers */}
      <section id="piliers" className="mb-10 scroll-mt-24">
        <H2 id="piliers" label="Les piliers planétaires de la compatibilité amoureuse" />

        <div className="mt-4 grid gap-4">
          {COURSE.piliers.map((p) => {
            const a =
              p.slug === "venus-mars"
                ? accent("love")
                : p.slug === "mercure"
                ? accent("mind")
                : p.slug === "saturne"
                ? accent("real")
                : p.slug === "uranus-neptune-pluton"
                ? accent("deep")
                : accent("mind");

            return (
              <article
                key={p.slug}
                className={`${cardBase} border ${a.border} ${a.glow}`}
              >
                <div className={`mb-4 h-1 w-full rounded-full ${a.line}`} />

                <h3 className="font-serif text-3xl">{p.title}</h3>
                <p className="mt-2 text-sm text-text/80">{p.why}</p>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <p className="text-xs uppercase tracking-wide text-muted">Points clés</p>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
                      {p.points.map((x: string) => <li key={x}>{x}</li>)}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <p className="text-xs uppercase tracking-wide text-muted">À faire</p>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
                      {p.aFaire.map((x: string) => <li key={x}>{x}</li>)}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Aspects */}
      <section id="aspects" className="mb-10 scroll-mt-24">
        <H2 id="aspects" label="Quels aspects observer entre deux thèmes natals ?" />

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COURSE.aspectsSynastrie.map((a) => (
            <article
              key={a.slug}
              className={`${cardBase} border border-sky-400/25 shadow-[0_0_0_1px_rgba(56,189,248,0.10)]`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted">{a.angle}</p>
                  <h3 className="mt-1 font-serif text-2xl">{a.nom}</h3>
                </div>
                <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs uppercase tracking-wide text-muted">
                  {a.slug}
                </span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-text/85">{a.sens}</p>

              <div className="mt-4 grid gap-3">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-wide text-muted">Bonus</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-text/85">
                    {a.bonus.map((x: string) => <li key={x}>{x}</li>)}
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-wide text-muted">Risques</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-text/85">
                    {a.risques.map((x: string) => <li key={x}>{x}</li>)}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Drapeaux */}
      <section id="drapeaux" className="mb-10 scroll-mt-24">
        <H2 id="drapeaux" label="Drapeaux rouges et verts : signes d'alerte en synastrie" />

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className={`${cardBase} border border-rose-400/25 shadow-[0_0_0_1px_rgba(251,113,133,0.10)]`}>
            <p className="text-xs uppercase tracking-wide text-muted">Rouges (vigilance)</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {COURSE.drapeaux.rouges.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400/70" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${cardBase} border border-emerald-400/25 shadow-[0_0_0_1px_rgba(52,211,153,0.10)]`}>
            <p className="text-xs uppercase tracking-wide text-muted">Verts (solidité)</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {COURSE.drapeaux.verts.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/70" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Exemples */}
      <section id="exemples" className="mb-10 scroll-mt-24">
        <H2 id="exemples" label="Exemples concrets de lecture de synastrie" />

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
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-10 scroll-mt-24">
        <H2 id="faq" label="Questions fréquentes sur la synastrie" />

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {COURSE.faq.map((x) => (
            <div
              key={x.q}
              className={`${cardBase} border border-sky-400/25 shadow-[0_0_0_1px_rgba(56,189,248,0.10)]`}
            >
              <p className="font-serif text-xl">{x.q}</p>
              <p className="mt-3 text-sm leading-relaxed text-text/85">{x.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Visible (SEO) */}
      <section className="mt-16 space-y-6" aria-labelledby="faq-synastrie">
        <h2 id="faq-synastrie" className="font-serif text-2xl sm:text-3xl">Questions fréquentes sur la synastrie astrologique</h2>
        <div className="space-y-4">
          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md" open>
            <summary className="cursor-pointer list-none p-6 font-serif text-lg font-medium text-white/90 [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between">
                Quelle est la différence entre synastrie et thème composite ?
                <span className="ml-3 text-rose-300/60 transition-transform group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="px-6 pb-6 text-sm leading-relaxed text-white/75 md:text-base">La <strong>synastrie</strong> compare deux thèmes natals pour voir comment chaque personne affecte l'autre. Le <strong>thème composite</strong> fusionne les deux cartes en une seule et représente la relation comme entité. Les deux approches se complètent pour une analyse relationnelle complète.</p>
          </details>
          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md">
            <summary className="cursor-pointer list-none p-6 font-serif text-lg font-medium text-white/90 [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between">
                Peut-on améliorer une synastrie difficile entre deux partenaires ?
                <span className="ml-3 text-rose-300/60 transition-transform group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="px-6 pb-6 text-sm leading-relaxed text-white/75 md:text-base">Oui, si les deux partenaires font preuve de maturité. Avec des règles de communication claires, le respect des limites et un objectif commun, les <strong>aspects difficiles</strong> deviennent des leviers de croissance. Sinon, les tensions se répètent. Consultez notre cours sur les <Link href="/aspects">aspects planétaires</Link> pour mieux comprendre.</p>
          </details>
          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md">
            <summary className="cursor-pointer list-none p-6 font-serif text-lg font-medium text-white/90 [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between">
                Quelles planètes sont les plus importantes en synastrie ?
                <span className="ml-3 text-rose-300/60 transition-transform group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="px-6 pb-6 text-sm leading-relaxed text-white/75 md:text-base">Le trio essentiel est <strong>Soleil/Lune</strong> (sécurité émotionnelle), <strong>Mercure</strong> (communication) et <strong>Saturne</strong> (durabilité). Sans ces fondations, les aspects Vénus-Mars seuls ne suffisent pas à maintenir une relation stable. Découvrez le rôle de chaque <Link href="/#planetes">planète</Link> dans notre cours.</p>
          </details>
          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md">
            <summary className="cursor-pointer list-none p-6 font-serif text-lg font-medium text-white/90 [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between">
                A-t-on besoin de l'heure de naissance exacte pour une synastrie ?
                <span className="ml-3 text-rose-300/60 transition-transform group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="px-6 pb-6 text-sm leading-relaxed text-white/75 md:text-base">L'heure de naissance est indispensable pour connaître l'<strong>Ascendant</strong> et les <Link href="/#maisons">maisons astrologiques</Link> activées. Sans elle, on peut analyser les aspects entre planètes, mais on perd les informations sur les domaines de vie concernés et les angles relationnels.</p>
          </details>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-14 border-t border-white/10 pt-8">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="flex flex-wrap gap-2">
            <Link className={pill} href="/aspects">Aspects</Link>
            <Link className={pill} href="/#planetes">Planètes</Link>
            <Link className={pill} href="/transits">Transits</Link>
            <Link className={pill} href="/#maisons">Maisons</Link>
          </div>
        </div>
      </footer>

      {/* JSON-LD SEO */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Synastrie — Compatibilité & dynamique relationnelle",
            description: COURSE.meta.description,
            mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.astro-cours.com/synastrie" },
            author: { "@type": "Person", name: "Stéphane Gamot", url: "https://www.astro-cours.com/auteur/stephane-gamot" },
            publisher: { "@type": "Organization", name: "Astro Cours", url: "https://www.astro-cours.com", logo: { "@type": "ImageObject", url: "https://www.astro-cours.com/astro-cours-logo.webp" } },
            datePublished: "2026-04-09",
            dateModified: "2026-04-22",
            inLanguage: "fr",
            articleSection: "Astrologie",
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "Quelle est la différence entre synastrie et thème composite ?", acceptedAnswer: { "@type": "Answer", text: "La synastrie compare deux thèmes natals pour voir comment chaque personne affecte l'autre. Le thème composite fusionne les deux cartes en une seule et représente la relation comme entité. Les deux approches se complètent pour une analyse relationnelle complète." } },
              { "@type": "Question", name: "Peut-on améliorer une synastrie difficile entre deux partenaires ?", acceptedAnswer: { "@type": "Answer", text: "Oui, si les deux partenaires font preuve de maturité. Avec des règles de communication claires, le respect des limites et un objectif commun, les aspects difficiles deviennent des leviers de croissance. Sinon, les tensions se répètent." } },
              { "@type": "Question", name: "Quelles planètes sont les plus importantes en synastrie ?", acceptedAnswer: { "@type": "Answer", text: "Le trio essentiel est Soleil/Lune (sécurité émotionnelle), Mercure (communication) et Saturne (durabilité). Sans ces fondations, les aspects Vénus-Mars seuls ne suffisent pas à maintenir une relation stable." } },
              { "@type": "Question", name: "A-t-on besoin de l'heure de naissance exacte pour une synastrie ?", acceptedAnswer: { "@type": "Answer", text: "L'heure de naissance est indispensable pour connaître l'Ascendant et les maisons astrologiques activées. Sans elle, on peut analyser les aspects entre planètes, mais on perd les informations sur les domaines de vie concernés et les angles relationnels." } },
            ]
          })
        }}
      />
    </main>
  );
}
