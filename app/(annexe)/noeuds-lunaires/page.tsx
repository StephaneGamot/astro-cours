import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import TeteDuDragon from "./../../../public/images/noeuds-lunaires.webp";

export const metadata: Metadata = {
  title: "Nœuds lunaires — Nœud Nord, Nœud Sud & axe évolutif",
  description:
    "Cours clair sur les Nœuds lunaires : axe NN/NS, sens évolutif, lecture par signe/maison/aspects, pièges fréquents et méthode d’interprétation.",
  alternates: { canonical: "/noeuds-lunaires" },
  openGraph: {
    title: "Nœuds lunaires — Axe NN/NS, lecture et méthode",
    description:
      "Nœud Nord & Nœud Sud : sens, axe évolutif, lecture par signe/maison/aspects, pièges et méthode pro pour interpréter sans surinterpréter.",
    url: "/noeuds-lunaires",
    type: "article",
  },
};


const pill =
  "rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-text/90 hover:bg-white/10";
const card = "rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur";
const dot = "mt-2 h-1.5 w-1.5 shrink-0 rounded-full";

/* ✅ on ajoute moon + angle (comme tes autres pages) */
type AccentKind = "north" | "south" | "axis" | "method" | "moon" | "angle";

function accent(kind: AccentKind) {
  switch (kind) {
    case "north":
      return {
        border: "border-emerald-400/25",
        glow: "shadow-[0_0_0_1px_rgba(52,211,153,0.10)]",
        dot: "bg-emerald-400/70",
        line: "bg-emerald-400/35",
        text: "text-emerald-200",
        bg: "bg-emerald-500/10",
        ring: "focus-visible:ring-emerald-400/35",
      };
    case "south":
      return {
        border: "border-amber-400/25",
        glow: "shadow-[0_0_0_1px_rgba(251,191,36,0.10)]",
        dot: "bg-amber-400/70",
        line: "bg-amber-400/35",
        text: "text-amber-200",
        bg: "bg-amber-500/10",
        ring: "focus-visible:ring-amber-400/35",
      };
    case "axis":
      return {
        border: "border-violet-400/25",
        glow: "shadow-[0_0_0_1px_rgba(167,139,250,0.10)]",
        dot: "bg-violet-400/70",
        line: "bg-violet-400/35",
        text: "text-violet-200",
        bg: "bg-violet-500/10",
        ring: "focus-visible:ring-violet-400/35",
      };
    case "moon":
      return {
        border: "border-sky-400/25",
        glow: "shadow-[0_0_0_1px_rgba(56,189,248,0.10)]",
        dot: "bg-sky-400/70",
        line: "bg-sky-400/35",
        text: "text-sky-200",
        bg: "bg-sky-500/10",
        ring: "focus-visible:ring-sky-400/35",
      };
    case "angle":
      return {
        border: "border-fuchsia-400/25",
        glow: "shadow-[0_0_0_1px_rgba(232,121,249,0.10)]",
        dot: "bg-fuchsia-400/70",
        line: "bg-fuchsia-400/35",
        text: "text-fuchsia-200",
        bg: "bg-fuchsia-500/10",
        ring: "focus-visible:ring-fuchsia-400/35",
      };
    default:
      return {
        border: "border-sky-400/25",
        glow: "shadow-[0_0_0_1px_rgba(56,189,248,0.10)]",
        dot: "bg-sky-400/70",
        line: "bg-sky-400/35",
        text: "text-sky-200",
        bg: "bg-sky-500/10",
        ring: "focus-visible:ring-sky-400/35",
      };
  }
}

function H2({
  id,
  children,
  kind = "method",
}: {
  id: string;
  children: React.ReactNode;
  kind?: AccentKind;
}) {
  const a = accent(kind);
  return (
    <h2 id={id} className="font-serif text-2xl sm:text-3xl">
      <span className={`mr-3 inline-block h-2 w-2 rounded-full ${a.dot}`} />
      {children}
    </h2>
  );
}

export default function NoeudsLunairesPage() {
  const sections = [
    { id: "definition", label: "Définition" },
    { id: "axe", label: "L’axe NN/NS" },
    { id: "signe-maison", label: "Signe & Maison" },
    { id: "aspects", label: "Aspects" },
    { id: "transits", label: "Transits" },
    { id: "piges", label: "Pièges" },
    { id: "faq", label: "FAQ" },
  ];

  const heroHighlights = [
    "Noeud Nord = direction de croissance",
    "Noeud Sud = zone connue / automatique",
    "Lecture par axe (toujours)",
    "Signe + maison + aspects = synthèse",
  ];

  return (
    <main className="mx-auto max-w-5xl px-6 pb-16 pt-10 text-text">
      {/* HERO premium (avec image) */}
      <header className="mb-10 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5">
        <div className="relative">
          <div className="relative h-[38vh] min-h-[320px] w-full">
       
          </div>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/10" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_10%,rgba(255,255,255,0.18),transparent_55%)]" />

          <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
            <p className="text-xs uppercase tracking-[0.18em] text-white/70">
              Cours d’astrologie — Noeuds lunaires
            </p>

            <h1 className="mt-3 font-serif text-4xl text-white sm:text-5xl">
              Noeud Nord & Noeud Sud
            </h1>

            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/80">
              Les noeuds lunaires ne sont pas des “planètes”. Ce sont des points
              d’intersection (orbite de la Lune / écliptique) qui décrivent un{" "}
              <span className="text-white">axe d’évolution</span> : ce qui est
              familier (NS) et ce qui fait grandir (NN).
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {heroHighlights.map((x) => (
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

        <div className="h-1 w-full bg-gradient-to-r from-amber-400/35 via-emerald-400/35 to-violet-400/35" />
      </header>
<div className={"mb-12 overflow-hidden rounded-3xl border bg-white/20 "}> <div className="relative"> <Image src={TeteDuDragon} alt={"Illustration symbolique "} width={1600} height={900} priority className="h-auto w-full object-cover" sizes="(max-width: 768px) 100vw, 896px" /> <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" /> <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-full" /> </div> </div>
      {/* Définition */}
      <section id="definition" className="mb-10 scroll-mt-24">
        <H2 id="definition" kind="axis">
          Définition (simple et pro)
        </H2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className={`${card} ${accent("axis").border} ${accent("axis").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">Ce que c’est</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {[
                "Deux points : Noeud Nord (NN) et Noeud Sud (NS), toujours opposés (axe).",
                "Un axe = un apprentissage : quitter l’automatisme (NS) sans renier ses compétences.",
                "Lecture moderne : dynamique de croissance / maturité, très utile en coaching.",
              ].map((x) => (
                <li key={x} className="flex gap-3">
                  <span className={`${dot} ${accent("axis").dot}`} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${card} ${accent("method").border} ${accent("method").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">Ce que ce n’est pas</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {[
                "Un “destin figé” : c’est une direction, pas une condamnation.",
                "Une planète maléfique ou bénéfique : ça ne marche pas comme ça.",
                "Un jugement moral : on parle de facilité/automatisme vs effort conscient.",
              ].map((x) => (
                <li key={x} className="flex gap-3">
                  <span className={`${dot} ${accent("method").dot}`} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Axe NN/NS */}
      <section id="axe" className="mb-10 scroll-mt-24">
        <H2 id="axe" kind="axis">
          L’axe Noeud Nord / Noeud Sud
        </H2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className={`${card} ${accent("north").border} ${accent("north").glow}`}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wide text-muted">Noeud Nord (NN)</p>
                <p className="mt-2 font-serif text-3xl">Cap de croissance</p>
              </div>
              <span
                className={`rounded-full border ${accent("north").border} ${accent("north").bg} px-3 py-1 text-sm ${accent("north").text}`}
              >
                Expansion
              </span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-text/85">
              Le Noeud Nord décrit la direction dans laquelle on devient plus complet :
              effort conscient, nouvelles compétences, posture plus mature.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-text/85">
              {[
                "Zone moins automatique → apprentissage réel",
                "Décisions qui te font grandir (pas seulement te rassurer)",
                "Tu y gagnes en maîtrise avec le temps",
              ].map((x) => (
                <li key={x} className="flex gap-3">
                  <span className={`${dot} ${accent("north").dot}`} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${card} ${accent("south").border} ${accent("south").glow}`}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wide text-muted">Noeud Sud (NS)</p>
                <p className="mt-2 font-serif text-3xl">Zone connue</p>
              </div>
              <span
                className={`rounded-full border ${accent("south").border} ${accent("south").bg} px-3 py-1 text-sm ${accent("south").text}`}
              >
                Automatisme
              </span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-text/85">
              Le Noeud Sud décrit ce qui est déjà intégré : talents naturels, réflexes,
              “mode survie”. Excellent… mais parfois enfermant.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-text/85">
              {[
                "Compétence acquise → confort",
                "Tendance à répéter (même quand ça ne marche plus)",
                "À garder comme ressource, pas comme prison",
              ].map((x) => (
                <li key={x} className="flex gap-3">
                  <span className={`${dot} ${accent("south").dot}`} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`${card} mt-4 ${accent("axis").border} ${accent("axis").glow}`}>
          <p className="text-xs uppercase tracking-wide text-muted">Règle d’or</p>
          <p className="mt-3 text-sm leading-relaxed text-text/85">
            On lit toujours <span className="text-text">l’axe</span> : NN = direction, NS = base.
            Le travail consiste à transférer le talent NS vers la posture NN.
          </p>
        </div>
      </section>

      {/* Signe & Maison */}
      <section id="signe-maison" className="mb-10 scroll-mt-24">
        <H2 id="signe-maison" kind="method">
          Lire par signe & maison (méthode)
        </H2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className={`${card} ${accent("method").border} ${accent("method").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">Signe (le style)</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
              <li>NN en signe = la manière de grandir (style, posture, énergie).</li>
              <li>NS en signe = réflexe naturel (confort, sécurité, “déjà vu”).</li>
              <li>On cherche l’équilibre : maturité du NN, sans caricature du NS.</li>
            </ul>
          </div>

          <div className={`${card} ${accent("axis").border} ${accent("axis").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">Maison (le domaine)</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
              <li>NN en maison = là où la vie pousse à évoluer (expériences-clés).</li>
              <li>NS en maison = domaine déjà maîtrisé, parfois surinvesti.</li>
              <li>Les événements “marquants” activent souvent l’axe par transits.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Aspects */}
      <section id="aspects" className="mb-10 scroll-mt-24">
        {/* ✅ ici tu avais kind="angle" : maintenant c’est OK */}
        <H2 id="aspects" kind="angle">
          Aspects aux noeuds (très important)
        </H2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className={`${card} ${accent("angle").border} ${accent("angle").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">Conjonctions</p>
            <p className="mt-3 text-sm leading-relaxed text-text/85">
              Une planète conjointe au NN “ouvre la porte” : elle devient un levier de croissance.
              Conjointe au NS : réflexe puissant (talent, mais aussi attachements).
            </p>
          </div>

          <div className={`${card} ${accent("method").border} ${accent("method").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">Carrés / oppositions</p>
            <p className="mt-3 text-sm leading-relaxed text-text/85">
              Friction, choix, arbitrage. Très formateur : incarner le NN sans renier les ressources du NS.
            </p>
          </div>
        </div>
      </section>

      {/* Transits */}
      <section id="transits" className="mb-10 scroll-mt-24">
        {/* ✅ ici tu avais kind="moon" : maintenant c’est OK */}
        <H2 id="transits" kind="moon">
          Transits : quand ça s’active
        </H2>

        <div className={`${card} mt-4 ${accent("moon").border} ${accent("moon").glow}`}>
          <p className="text-xs uppercase tracking-wide text-muted">Ce que tu cherches</p>
          <ul className="mt-3 space-y-2 text-sm text-text/85">
            {[
              "Transits sur l’axe NN/NS : périodes charnières (rencontres, décisions, virages).",
              "Transits des luminaires (Soleil/Lune) : activation rapide, événementielle.",
              "Transits de Saturne/Uranus/Pluton : réorientation profonde (plus lent, plus durable).",
            ].map((x) => (
              <li key={x} className="flex gap-3">
                <span className={`${dot} ${accent("moon").dot}`} />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pièges */}
      <section id="piges" className="mb-10 scroll-mt-24">
        <H2 id="piges" kind="method">
          Pièges & bonnes pratiques
        </H2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className={`${card} ${accent("south").border} ${accent("south").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">Erreurs fréquentes</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {[
                "Chercher une “prédiction” au lieu d’une direction d’évolution.",
                "Diaboliser le Noeud Sud (alors que c’est une ressource).",
                "Lire NN/NS sans signe/maison/aspects (trop vague).",
                "Croire que NN = réussite immédiate (c’est progressif).",
              ].map((x) => (
                <li key={x} className="flex gap-3">
                  <span className={`${dot} ${accent("south").dot}`} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${card} ${accent("north").border} ${accent("north").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">Bonnes pratiques</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {[
                "Toujours raisonner en axe (NN + NS).",
                "Traduire l’axe en comportements concrets (habitudes).",
                "S’appuyer sur les forces NS pour servir un objectif NN.",
                "Regarder les transits pour dater les phases d’activation.",
              ].map((x) => (
                <li key={x} className="flex gap-3">
                  <span className={`${dot} ${accent("north").dot}`} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-10 scroll-mt-24">
        <H2 id="faq" kind="axis">
          FAQ
        </H2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {[
            {
              q: "Est-ce que les noeuds = “karma” ?",
              a: "Approche symbolique oui ; en pratique moderne : un axe d’apprentissage (automatisme vs croissance).",
            },
            {
              q: "NN = “bien” et NS = “mal” ?",
              a: "Non. NS = talent et confort. NN = direction qui fait grandir. Le but = intégrer les deux.",
            },
            {
              q: "Qu’est-ce qui compte le plus : signe ou maison ?",
              a: "Les deux : signe = style, maison = domaine. Les aspects montrent comment c’est vécu.",
            },
            {
              q: "Les transits aux noeuds sont-ils importants ?",
              a: "Oui : ils marquent souvent des virages, surtout s’ils touchent aussi Soleil/Lune/Ascendant/angles.",
            },
          ].map((x) => (
            <div key={x.q} className={`${card} ${accent("axis").border} ${accent("axis").glow}`}>
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
            <Link className={pill} href="/#maisons">Maisons</Link>
            <Link className={pill} href="/transits">Transits</Link>
          </div>
        </div>
      </footer>

      {/* JSON-LD SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Noeuds lunaires — Noeud Nord & Noeud Sud",
            description:
              "Cours pro sur l’axe des noeuds lunaires : définition, lecture par signe/maison, aspects, transits et méthode.",
            mainEntityOfPage: { "@type": "WebPage", "@id": "/noeuds-lunaires" },
            author: { "@type": "Person", name: "Stéphane Gamot" },
          }),
        }}
      />
    </main>
  );
}
