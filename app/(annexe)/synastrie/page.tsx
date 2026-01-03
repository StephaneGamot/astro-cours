import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import data from "../../../data/synastrie.details.json";

/* ---------------- Types ---------------- */

type SynData = typeof data;

const COURSE = data as SynData;

export const metadata: Metadata = {
  title: COURSE.meta.title,
  description: COURSE.meta.description,
  alternates: { canonical: COURSE.meta.canonical },
  openGraph: {
    title: COURSE.meta.title,
    description: COURSE.meta.description,
    url: COURSE.meta.canonical,
    type: "article",
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
    <main className="mx-auto max-w-5xl px-6 pb-16 pt-10 text-text">
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

      {/* Définition */}
      <section id="definition" className="mb-10 scroll-mt-24">
        <H2 id="definition" label="Définition" />

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
        <H2 id="methode" label="Méthode pro" />

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
        <H2 id="piliers" label="Piliers" />

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
        <H2 id="aspects" label="Aspects en synastrie" />

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
        <H2 id="drapeaux" label="Drapeaux rouges & verts" />

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
        <H2 id="exemples" label="Exemples de lecture" />

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
        <H2 id="faq" label="FAQ" />

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
            mainEntityOfPage: { "@type": "WebPage", "@id": COURSE.meta.canonical },
            author: { "@type": "Person", name: "Stéphane Gamot" }
          })
        }}
      />
    </main>
  );
}
