import type { Metadata } from "next";
import Link from "next/link";
import data from "../../../data/revolution-solaire.details.json";
import Image from "next/image";
import HeroSrc from "./../../public/images/revolution-solaire.webp"

 
type PageData = typeof data;
const RS = data as PageData;

export const metadata: Metadata = {
  title: RS.meta.title,
  description: RS.meta.description,
  alternates: { canonical: RS.meta.canonical },
  openGraph: {
    title: RS.meta.title,
    description: RS.meta.description,
    url: RS.meta.canonical,
    type: "article",
  },
};

const pill =
  "rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-text/90 hover:bg-white/10";
const card =
  "rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur";
const dot = "mt-2 h-1.5 w-1.5 shrink-0 rounded-full";

function accent(kind: "sun" | "moon" | "angle" | "method" | "real" ) {
  switch (kind) {
    case "sun":
      return {
        border: "border-amber-400/25",
        glow: "shadow-[0_0_0_1px_rgba(251,191,36,0.10)]",
        dot: "bg-amber-400/70",
        line: "bg-amber-400/35",
      };
    case "moon":
      return {
        border: "border-sky-400/25",
        glow: "shadow-[0_0_0_1px_rgba(56,189,248,0.10)]",
        dot: "bg-sky-400/70",
        line: "bg-sky-400/35",
      };
    case "angle":
      return {
        border: "border-violet-400/25",
        glow: "shadow-[0_0_0_1px_rgba(167,139,250,0.10)]",
        dot: "bg-violet-400/70",
        line: "bg-violet-400/35",
      };
          case "real":
      return {
        border: "border-rose-400/25",
        glow: "shadow-[0_0_0_1px_rgba(251,113,133,0.10)]",
        dot: "bg-rose-400/70",
        line: "bg-rose-400/35",
      };

    default:
      return {
        border: "border-emerald-400/25",
        glow: "shadow-[0_0_0_1px_rgba(52,211,153,0.10)]",
        dot: "bg-emerald-400/70",
        line: "bg-emerald-400/35",
      };
  }
}

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="font-serif text-2xl sm:text-3xl">
      <span className="mr-3 inline-block h-2 w-2 rounded-full bg-white/60" />
      {children}
    </h2>
  );
}

export default function RevolutionSolairePage() {
  const sections = [
    { id: "definition", label: "Définition" },
    { id: "methode", label: "Méthode pro" },
    { id: "piliers", label: "Piliers de lecture" },
    { id: "piges", label: "Pièges & bonnes pratiques" },
    { id: "exemples", label: "Exemples" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <main className="mx-auto max-w-5xl px-6 pb-16 pt-10 text-text">
      {/* HERO */}
            {/* HERO avec image */}
      <header className="mb-10 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5">
        <div className="relative">
          {/* Image */}
          <div className="relative h-[38vh] min-h-[320px] w-full">
            
          </div>

          {/* Overlays pour lisibilité */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/10" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_10%,rgba(255,255,255,0.18),transparent_55%)]" />

          {/* Contenu */}
          <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
            <p className="text-xs uppercase tracking-[0.18em] text-white/70">
              {RS.hero.badge}
            </p>

            <h1 className="mt-3 font-serif text-4xl text-white sm:text-5xl">
              {RS.hero.title}
            </h1>

            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/80">
              {RS.hero.subtitle}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {RS.hero.highlights.map((x) => (
                <span
                  key={x}
                  className="rounded-full border border-white/15 bg-black/25 px-3 py-1 text-sm text-white/90 backdrop-blur hover:bg-black/35"
                >
                  {x}
                </span>
              ))}
            </div>

            <nav aria-label="Sommaire" className="mt-7 flex flex-wrap gap-2">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="rounded-full border border-white/15 bg-black/25 px-3 py-1 text-sm text-white/90 backdrop-blur hover:bg-black/35"
                >
                  {s.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Ligne couleur */}
        <div className="h-1 w-full bg-gradient-to-r from-amber-400/35 via-sky-400/35 to-violet-400/35" />
      </header>

      <div className={"mb-12 overflow-hidden rounded-3xl border bg-white/20 "}>
        <div className="relative">
          <Image
            src={HeroSrc}
            alt={"Illustration symbolique "}
            width={1600}
            height={900}
            priority
            className="h-auto w-full object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
          <div className={`pointer-events-none absolute bottom-0 left-0 h-1 w-full`} />
        </div>
      </div>
      {/* Définition */}
      <section id="definition" className="mb-10 scroll-mt-24">
        <H2 id="definition">Définition</H2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className={`${card} ${accent("method").border} ${accent("method").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">Résumé</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {RS.definition.resume.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className={`${dot} ${accent("method").dot}`} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${card} ${accent("angle").border} ${accent("angle").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">Ce que ce n’est pas</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {RS.definition.ceQueCeNestPas.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className={`${dot} ${accent("angle").dot}`} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Méthode */}
      <section id="methode" className="mb-10 scroll-mt-24">
        <H2 id="methode">Méthode pro</H2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className={`${card} ${accent("method").border} ${accent("method").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">Règles d’or</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {RS.methode.reglesOr.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className={`${dot} ${accent("method").dot}`} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${card} ${accent("moon").border} ${accent("moon").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">Checklist</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {RS.methode.checklist.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className={`${dot} ${accent("moon").dot}`} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`${card} mt-4 ${accent("sun").border} ${accent("sun").glow}`}>
          <p className="text-xs uppercase tracking-wide text-muted">Orbes recommandés</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {RS.methode.orbes.recommandes.map((o) => (
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
        <H2 id="piliers">Piliers de lecture</H2>

        <div className="mt-4 grid gap-4">
          {RS.sections.map((s) => {
            const a =
              s.slug === "soleil" ? accent("sun")
              : s.slug === "lune" ? accent("moon")
              : s.slug === "angles" ? accent("angle")
              : accent("method");

            return (
              <article key={s.slug} className={`${card} ${a.border} ${a.glow}`}>
                <div className={`mb-4 h-1 w-full rounded-full ${a.line}`} />
                <h3 className="font-serif text-3xl">{s.title}</h3>
                <p className="mt-2 text-sm text-text/80">{s.why}</p>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <p className="text-xs uppercase tracking-wide text-muted">Points clés</p>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
                      {s.points.map((x: string) => <li key={x}>{x}</li>)}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <p className="text-xs uppercase tracking-wide text-muted">À faire</p>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
                      {s.aFaire.map((x: string) => <li key={x}>{x}</li>)}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Pièges */}
      <section id="piges" className="mb-10 scroll-mt-24">
        <H2 id="piges">Pièges & bonnes pratiques</H2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className={`${card} ${accent("angle").border} ${accent("angle").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">Erreurs fréquentes</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {RS.piges.erreurs.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className={`${dot} ${accent("angle").dot}`} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${card} ${accent("real").border} ${accent("real").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">Bonnes pratiques</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {RS.piges.bonnesPratiques.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className={`${dot} ${accent("real").dot}`} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Exemples */}
      <section id="exemples" className="mb-10 scroll-mt-24">
        <H2 id="exemples">Exemples</H2>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {RS.exemples.map((e) => (
            <article
              key={e.titre}
              className={`${card} border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]`}
            >
              <h3 className="font-serif text-2xl">{e.titre}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text/85">{e.texte}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-10 scroll-mt-24">
        <H2 id="faq">FAQ</H2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {RS.faq.map((x) => (
            <div key={x.q} className={`${card} ${accent("moon").border} ${accent("moon").glow}`}>
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
            <Link className={pill} href="/transits">Transits</Link>
            <Link className={pill} href="/aspects">Aspects</Link>
            <Link className={pill} href="/planetes">Planètes</Link>
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
            headline: "Révolution solaire — Lecture annuelle",
            description: RS.meta.description,
            mainEntityOfPage: { "@type": "WebPage", "@id": RS.meta.canonical },
            author: { "@type": "Person", name: "Stéphane Gamot" }
          })
        }}
      />
    </main>
  );
}
