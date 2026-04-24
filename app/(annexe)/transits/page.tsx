import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE_NAME, absoluteUrl, buildTitle } from "@/lib/seo";

import data from "../../../data/transits.details.json";

/* ---------------- Types ---------------- */

type Aspect = {
  slug: string;
  nom: string;
  angle: string;
  motsCles: string[];
  sens: string;
  aSurveiller?: string[];
  tips?: string[];
};

type Planet = {
  slug: string;
  name: string;
  categorie: "rapide" | "sociale" | "transpersonnelle";
  rythme: string;
  roleTransit: string;
  quandFort?: string[];
  themes?: string[];
  mantra?: string;
};

type TransitData = {
  meta: { title: string; description: string; canonical: string };
  intro: { resume: string[]; aquoiCaSert: string[] };
  methode: {
    reglesOr: string[];
    orbes: { principes: string[]; recommandes: { label: string; orbe: string }[] };
    checklistLecture: string[];
  };
  aspectsMajeurs: Aspect[];
  planetes: Planet[];
  transitSurPlaneteNatale: {
    intro: string;
    grille: { titre: string; texte: string }[];
    exemples: { titre: string; texte: string }[];
  };
  faq: { q: string; a: string }[];
};

const COURSE = data as unknown as TransitData;

/* ---------------- SEO ---------------- */

const TRANSIT_TITLE = "Transits : guide complet, méthode et lecture";
const TRANSIT_DESC =
  "Guide complet des transits astrologiques : définition, méthode, orbes et interprétation planète par planète. Découvrez notre cours structuré et concret !";

export const metadata: Metadata = {
  title: buildTitle(TRANSIT_TITLE),
  description: TRANSIT_DESC,
  alternates: { canonical: absoluteUrl("/transits") },
  openGraph: {
    title: buildTitle(TRANSIT_TITLE),
    description: TRANSIT_DESC,
    url: absoluteUrl("/transits"),
    type: "article",
    siteName: SITE_NAME,
    locale: "fr_FR",
    images: [{ url: "https://www.astro-cours.com/og/cover.jpg", width: 1200, height: 630, alt: "Astro Cours" }],
  },
  twitter: {
    card: "summary_large_image",
    title: buildTitle(TRANSIT_TITLE),
    description: TRANSIT_DESC,
    images: ["https://www.astro-cours.com/og/cover.jpg"],
  },
};

/* ---------------- UI helpers ---------------- */

const pill =
  "rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-text/90 hover:bg-white/10";
const card =
  "rounded-3xl border border-sky-400/25 bg-white/5 p-6 backdrop-blur shadow-[0_0_0_1px_rgba(56,189,248,0.10)]";
const dot = "bg-sky-400/70";
const ring = "focus-visible:ring-2 focus-visible:ring-sky-400/35";

function planetAccent(cat: Planet["categorie"]) {
  // sans imposer des couleurs partout : on reste subtil mais lisible
  if (cat === "rapide") {
    return {
      border: "border-emerald-400/25",
      glow: "shadow-[0_0_0_1px_rgba(52,211,153,0.10)]",
      dot: "bg-emerald-400/70",
      line: "bg-emerald-400/35",
      ring: "focus-visible:ring-emerald-400/35",
    };
  }
  if (cat === "sociale") {
    return {
      border: "border-sky-400/25",
      glow: "shadow-[0_0_0_1px_rgba(56,189,248,0.10)]",
      dot: "bg-sky-400/70",
      line: "bg-sky-400/35",
      ring: "focus-visible:ring-sky-400/35",
    };
  }
  return {
    border: "border-violet-400/25",
    glow: "shadow-[0_0_0_1px_rgba(167,139,250,0.10)]",
    dot: "bg-violet-400/70",
    line: "bg-violet-400/35",
    ring: "focus-visible:ring-violet-400/35",
  };
}

function sectionTitle(id: string, label: string) {
  return (
    <h2 id={id} className="font-serif text-2xl sm:text-3xl">
      <span className={`mr-3 inline-block h-2 w-2 rounded-full ${dot}`} />
      {label}
    </h2>
  );
}

function planetImageSrc(slug: string) {
  // Tu as déjà tes images : public/images/planetes/jupiter.webp etc.
  // on garde la même convention
  const map: Record<string, string> = {
    soleil: "soleil",
    lune: "lune",
    mercure: "mercure",
    venus: "venus",
    mars: "mars",
    jupiter: "jupiter",
    saturne: "saturne",
    uranus: "uranus",
    neptune: "neptune",
    pluton: "pluton",
  };
  const file = map[slug] ?? slug;
  return `/images/planetes/${file}.webp`;
}

export default function TransitsPage() {
  const sections = [
    { id: "definition", label: "Définition" },
    { id: "methode", label: "Méthode" },
    { id: "aspects", label: "Aspects" },
    { id: "planetes", label: "Planètes" },
    { id: "natal", label: "Natal" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <main id="main-content" className="mx-auto max-w-5xl px-6 pb-16 pt-10 text-text">
      {/* HERO */}
      <header className="mb-10 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5">
        <div className="p-7 sm:p-10">
          <p className="text-xs uppercase tracking-[0.18em] text-muted">
            Cours d’astrologie — Timing & lecture du ciel
          </p>

          <h1 className="mt-3 font-serif text-4xl sm:text-5xl">Les transits en astrologie : guide complet</h1>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-text/80">
            Une page <span className="text-text">100% méthode</span> : comment lire un transit proprement,
            comment hiérarchiser, quels orbes utiliser, et comment interpréter{" "}
            <span className="text-text">planète par planète</span> sans tomber dans le flou.
          </p>

          {/* Sommaire */}
          <nav aria-label="Sommaire" className="mt-6 flex flex-wrap gap-2">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className={pill}>
                {s.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-emerald-400/35 via-sky-400/35 to-violet-400/35" />
      </header>

      {/* Définition — Featured Snippet */}
      <div className="mt-8 rounded-2xl border border-sky-400/20 bg-sky-400/[0.04] px-6 py-5">
        <p className="text-sm font-semibold uppercase tracking-widest text-sky-300/80">Définition</p>
        <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
          Un <strong>transit astrologique</strong> est le passage d'une planète en mouvement sur un point sensible du thème natal ; il active temporairement un domaine de vie et se lit en fonction de la <Link href="/#maisons">maison</Link>, des <Link href="/aspects">aspects</Link> formés et de la vitesse de la planète.
        </p>
      </div>

      {/* APP Intro */}
      <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
        Vous voulez apprendre à lire les <strong>transits en astrologie</strong> avec une vraie méthode ? La plupart des ressources en ligne restent vagues sur les orbes, la hiérarchie des planètes et l'interprétation concrète. Ce guide complet vous donne les règles d'or, les aspects clés et une lecture planète par planète pour interpréter chaque transit avec rigueur.
      </p>

      {/* Définition */}
      <section id="definition" className="mb-10 scroll-mt-24">
        {sectionTitle("definition", "Qu'est-ce qu'un transit en astrologie ?")}

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className={card}>
            <p className="text-xs uppercase tracking-wide text-muted">Définition</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {COURSE.intro.resume.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={card}>
            <p className="text-xs uppercase tracking-wide text-muted">À quoi ça sert</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {COURSE.intro.aquoiCaSert.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Méthode */}
      <section id="methode" className="mb-10 scroll-mt-24">
        {sectionTitle("methode", "Comment interpréter un transit astrologique ?")}

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className={card}>
            <p className="text-xs uppercase tracking-wide text-muted">Règles d’or</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {COURSE.methode.reglesOr.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={card}>
            <p className="text-xs uppercase tracking-wide text-muted">Checklist</p>
            <ol className="mt-3 space-y-2 text-sm text-text/85">
              {COURSE.methode.checklistLecture.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="mt-0.5 font-mono text-xs text-text/60">•</span>
                  <span>{x}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className={`${card} mt-4`}>
          <p className="text-xs uppercase tracking-wide text-muted">Orbes (simple + pro)</p>

          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-sm text-text/85">{COURSE.methode.orbes.principes[0]}</p>
              <p className="mt-2 text-sm text-text/85">{COURSE.methode.orbes.principes[1]}</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <ul className="space-y-2 text-sm text-text/85">
                {COURSE.methode.orbes.recommandes.map((o) => (
                  <li key={o.label} className="flex items-start justify-between gap-4">
                    <span className="text-text/80">{o.label}</span>
                    <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-text/85">
                      {o.orbe}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Aspects */}
      <section id="aspects" className="mb-10 scroll-mt-24">
        {sectionTitle("aspects", "Quels aspects surveiller lors d'un transit ?")}

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COURSE.aspectsMajeurs.map((a) => (
            <article key={a.slug} className={card}>
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

              {a.motsCles?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {a.motsCles.map((k) => (
                    <span key={k} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-text/85">
                      {k}
                    </span>
                  ))}
                </div>
              ) : null}

              {a.tips?.length ? (
                <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-wide text-muted">Conseils</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-text/85">
                    {a.tips.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      {/* Planètes */}
      <section id="planetes" className="mb-10 scroll-mt-24">
        {sectionTitle("planetes", "Comment chaque planète agit-elle en transit ?")}

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {COURSE.planetes.map((p) => {
            const a = planetAccent(p.categorie);
            return (
              <article
                key={p.slug}
                className={`rounded-3xl border ${a.border} bg-white/5 p-6 backdrop-blur ${a.glow}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {/* ✅ Image planète (ronde même en GSM) */}
                    <div
                      className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-full border ${a.border} bg-black/20`}
                      aria-hidden="true"
                    >
                      <Image
                        src={planetImageSrc(p.slug)}
                        alt={p.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                    </div>

                    <div>
                      <h3 className="font-serif text-3xl">{p.name}</h3>
                      <p className="mt-1 text-sm text-text/70">
                        {p.categorie} • {p.rythme}
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs uppercase tracking-wide text-muted">
                    {p.slug}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-text/85">{p.roleTransit}</p>

                {p.themes?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.themes.map((x) => (
                      <span key={x} className={`rounded-full border ${a.border} bg-white/5 px-3 py-1 text-xs text-text/85`}>
                        {x}
                      </span>
                    ))}
                  </div>
                ) : null}

                {p.quandFort?.length ? (
                  <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-xs uppercase tracking-wide text-muted">Quand c’est fort</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-text/85">
                      {p.quandFort.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {p.mantra ? (
                  <div className="mt-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
                    <span className={`h-2 w-2 rounded-full ${a.dot}`} />
                    <p className="text-sm text-text/85">
                      <span className="text-text">Mantra :</span> {p.mantra}
                    </p>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </section>

      {/* Transit sur planète natale */}
      <section id="natal" className="mb-10 scroll-mt-24">
        {sectionTitle("natal", "Comment lire un transit sur une planète natale ?")}

        <div className={`${card} mt-4`}>
          <p className="text-sm leading-relaxed text-text/85">{COURSE.transitSurPlaneteNatale.intro}</p>

          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {COURSE.transitSurPlaneteNatale.grille.map((g) => (
              <div key={g.titre} className="rounded-3xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-wide text-muted">{g.titre}</p>
                <p className="mt-2 text-sm text-text/85">{g.texte}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-3xl border border-white/10 bg-black/20 p-5">
            <p className="text-xs uppercase tracking-wide text-muted">Exemples</p>
            <div className="mt-3 space-y-3">
              {COURSE.transitSurPlaneteNatale.exemples.map((e) => (
                <div key={e.titre} className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="font-serif text-xl">{e.titre}</p>
                  <p className="mt-2 text-sm leading-relaxed text-text/85">{e.texte}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-10 scroll-mt-24">
        {sectionTitle("faq", "Questions fréquentes sur les transits")}

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {COURSE.faq.map((x) => (
            <div key={x.q} className={card}>
              <p className="font-serif text-xl">{x.q}</p>
              <p className="mt-3 text-sm leading-relaxed text-text/85">{x.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-14 border-t border-white/10 pt-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-text/70">
            Prochaine étape : relier les transits aux <span className="text-text">dignités</span>,{" "}
            <span className="text-text">maisons</span> et <span className="text-text">aspects</span>.
          </p>

          <div className="flex flex-wrap gap-2">
            <Link className={pill} href="/aspects">Aspects</Link>
            <Link className={pill} href="/maitrises">Dignités</Link>
            <Link className={pill} href="/#maisons">Maisons</Link>
            <Link className={pill} href="/#planetes">Planètes</Link>
          </div>
        </div>
      </footer>

      {/* FAQ Accordion SEO */}
      <section className="mt-16 space-y-6" aria-labelledby="faq-transits">
        <h2 id="faq-transits" className="font-serif text-2xl sm:text-3xl">Questions fréquentes sur les transits astrologiques</h2>
        <div className="space-y-4">
          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md" open>
            <summary className="cursor-pointer list-none p-6 font-serif text-lg font-medium text-white/90 [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between">
                Qu’est-ce qu’un transit en astrologie et comment le lire ?
                <span className="ml-3 text-sky-300/60 transition-transform group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="px-6 pb-6 text-sm leading-relaxed text-white/75 md:text-base">Un <strong>transit astrologique</strong> est le passage d’une planète en mouvement sur un point du thème natal. Pour le lire, on identifie la planète (quoi), la <Link href="/#maisons">maison</Link> activée (où), les <Link href="/aspects">aspects</Link> formés (comment) et la durée du passage. Les transits lents (Saturne, Uranus, Pluton) ont plus d’impact que les rapides.</p>
          </details>
          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md">
            <summary className="cursor-pointer list-none p-6 font-serif text-lg font-medium text-white/90 [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between">
                Quels orbes utiliser pour les transits astrologiques ?
                <span className="ml-3 text-sky-300/60 transition-transform group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="px-6 pb-6 text-sm leading-relaxed text-white/75 md:text-base">Les orbes dépendent de la planète : environ 1 à 2 degres pour les <strong>transits lents</strong> (Saturne a Pluton) et jusqu’à 5 degres pour les luminaires. Plus l’orbe est serré, plus l’effet est concentré. La conjonction et l’opposition demandent des orbes légèrement plus larges que le carré ou le trigone.</p>
          </details>
          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md">
            <summary className="cursor-pointer list-none p-6 font-serif text-lg font-medium text-white/90 [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between">
                Quelle différence entre un transit rapide et un transit lent ?
                <span className="ml-3 text-sky-300/60 transition-transform group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="px-6 pb-6 text-sm leading-relaxed text-white/75 md:text-base">Les <strong>transits rapides</strong> (Soleil, Lune, Mercure, Venus, Mars) durent quelques jours à quelques semaines et activent des événements ponctuels. Les <strong>transits lents</strong> (Jupiter à Pluton) durent des mois voire des années et provoquent des transformations profondes et structurantes. Voir aussi les <Link href="/retrogrades">rétrogrades</Link> pour comprendre les allers-retours.</p>
          </details>
          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md">
            <summary className="cursor-pointer list-none p-6 font-serif text-lg font-medium text-white/90 [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between">
                Comment hiérarchiser les transits dans un thème natal ?
                <span className="ml-3 text-sky-300/60 transition-transform group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="px-6 pb-6 text-sm leading-relaxed text-white/75 md:text-base">Priorisez les transits lents sur les points sensibles : <strong>Soleil, Lune, ASC, MC</strong> et les <Link href="/noeuds-lunaires">noeuds lunaires</Link>. Ensuite, regardez les aspects exacts (conjonction, opposition, carré). Enfin, croisez avec les transits rapides pour affiner le timing des événements.</p>
          </details>
        </div>
      </section>

      {/* JSON-LD FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Qu’est-ce qu’un transit en astrologie et comment le lire ?",
                acceptedAnswer: { "@type": "Answer", text: "Un transit astrologique est le passage d’une planète en mouvement sur un point du thème natal. Pour le lire, on identifie la planète (quoi), la maison activée (où), les aspects formés (comment) et la durée du passage. Les transits lents (Saturne, Uranus, Pluton) ont plus d’impact que les rapides." }
              },
              {
                "@type": "Question",
                name: "Quels orbes utiliser pour les transits astrologiques ?",
                acceptedAnswer: { "@type": "Answer", text: "Les orbes dépendent de la planète : environ 1 à 2 degrés pour les transits lents (Saturne à Pluton) et jusqu’à 5 degrés pour les luminaires. Plus l’orbe est serré, plus l’effet est concentré." }
              },
              {
                "@type": "Question",
                name: "Quelle différence entre un transit rapide et un transit lent ?",
                acceptedAnswer: { "@type": "Answer", text: "Les transits rapides (Soleil, Lune, Mercure, Vénus, Mars) durent quelques jours à quelques semaines et activent des événements ponctuels. Les transits lents (Jupiter à Pluton) durent des mois voire des années et provoquent des transformations profondes et structurantes." }
              },
              {
                "@type": "Question",
                name: "Comment hiérarchiser les transits dans un thème natal ?",
                acceptedAnswer: { "@type": "Answer", text: "Priorisez les transits lents sur les points sensibles : Soleil, Lune, ASC, MC et les noeuds lunaires. Ensuite, regardez les aspects exacts (conjonction, opposition, carré). Enfin, croisez avec les transits rapides pour affiner le timing des événements." }
              }
            ]
          })
        }}
      />

      {/* JSON-LD SEO */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Transits — Cours d’astrologie",
            description: COURSE.meta.description,
            mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.astro-cours.com/transits" },
            author: { "@type": "Person", name: "Stéphane Gamot", url: "https://www.astro-cours.com/auteur/stephane-gamot" },
            publisher: { "@type": "Organization", name: "Astro Cours", url: "https://www.astro-cours.com", logo: { "@type": "ImageObject", url: "https://www.astro-cours.com/astro-cours-logo.webp" } },
            datePublished: "2026-04-09",
            dateModified: "2026-04-22",
            inLanguage: "fr",
            articleSection: "Astrologie",
          }),
        }}
      />
    </main>
  );
}
