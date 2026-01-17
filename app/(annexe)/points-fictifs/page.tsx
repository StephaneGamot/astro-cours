import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Points fictifs, Vertex, Fortune, Chiron, angle & méthode",
  description:
    "Cours pro sur les points fictifs : Vertex, Part de Fortune, Chiron, ASC/MC, Nœuds, Lilith. Méthode de lecture par signe/maison/aspects/transits.",
  alternates: { canonical: "/points-fictifs" },
  openGraph: {
    title: "Points fictifs — Vertex, Fortune, Chiron, angles : méthode claire",
    description:
      "Définition + méthode : lire Vertex, Part de Fortune, Chiron, angles (ASC/MC), Nœuds, Lilith par signe/maison/aspects et transits, sans confusion.",
    url: "/points-fictifs",
    type: "article",
  },
};


const pill =
  "rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-text/90 hover:bg-white/10";
const card = "rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur";
const dot = "mt-2 h-1.5 w-1.5 shrink-0 rounded-full";

type AccentKind = "core" | "math" | "angle" | "destiny" | "method";

function accent(kind: AccentKind) {
  switch (kind) {
    case "core":
      return {
        border: "border-emerald-400/25",
        glow: "shadow-[0_0_0_1px_rgba(52,211,153,0.10)]",
        dot: "bg-emerald-400/70",
        line: "bg-emerald-400/35",
        ring: "focus-visible:ring-emerald-400/35",
        text: "text-emerald-200",
        bg: "bg-emerald-500/10",
      };
    case "math":
      return {
        border: "border-sky-400/25",
        glow: "shadow-[0_0_0_1px_rgba(56,189,248,0.10)]",
        dot: "bg-sky-400/70",
        line: "bg-sky-400/35",
        ring: "focus-visible:ring-sky-400/35",
        text: "text-sky-200",
        bg: "bg-sky-500/10",
      };
    case "angle":
      return {
        border: "border-violet-400/25",
        glow: "shadow-[0_0_0_1px_rgba(167,139,250,0.10)]",
        dot: "bg-violet-400/70",
        line: "bg-violet-400/35",
        ring: "focus-visible:ring-violet-400/35",
        text: "text-violet-200",
        bg: "bg-violet-500/10",
      };
    case "destiny":
      return {
        border: "border-amber-400/25",
        glow: "shadow-[0_0_0_1px_rgba(251,191,36,0.10)]",
        dot: "bg-amber-400/70",
        line: "bg-amber-400/35",
        ring: "focus-visible:ring-amber-400/35",
        text: "text-amber-200",
        bg: "bg-amber-500/10",
      };
    default:
      return {
        border: "border-fuchsia-400/25",
        glow: "shadow-[0_0_0_1px_rgba(232,121,249,0.10)]",
        dot: "bg-fuchsia-400/70",
        line: "bg-fuchsia-400/35",
        ring: "focus-visible:ring-fuchsia-400/35",
        text: "text-fuchsia-200",
        bg: "bg-fuchsia-500/10",
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

export default function PointsFictifsPage() {
  const sections = [
    { id: "definition", label: "Définition" },
    { id: "classification", label: "Catégories" },
    { id: "points", label: "Points majeurs" },
    { id: "methode", label: "Méthode pro" },
    { id: "aspects", label: "Aspects" },
    { id: "transits", label: "Transits" },
    { id: "piges", label: "Pièges" },
    { id: "faq", label: "FAQ" },
  ];

  const heroHighlights = [
    "Pas des “planètes” : points/angles/calculs",
    "Lecture par maison d’abord",
    "Aspects = déclencheurs",
    "Transits = timing",
  ];

  return (
    <main className="mx-auto max-w-5xl px-6 pb-16 pt-10 text-text">
      {/* HERO */}
      <header className="mb-10 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5">
        <div className="relative">
          <div className="relative h-[38vh] min-h-[320px] w-full">
           
          </div>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/10" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_10%,rgba(255,255,255,0.18),transparent_55%)]" />

          <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
            <p className="text-xs uppercase tracking-[0.18em] text-white/70">
              Cours d’astrologie — Techniques de lecture
            </p>
            <h1 className="mt-3 font-serif text-4xl text-white sm:text-5xl">
              Les points fictifs
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/80">
              Les “points fictifs” sont des <span className="text-white">repères</span> :
              angles (ASC/MC), points calculés (Part de Fortune), points de relation
              (Vertex) ou facteurs symboliques modernes (Chiron, Lilith, Nœuds…).
              Ce cours te donne une lecture <span className="text-white">pro, claire et utilisable</span>.
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

        <div className="h-1 w-full bg-gradient-to-r from-amber-400/35 via-sky-400/35 to-violet-400/35" />
      </header>

      {/* Définition */}
      <section id="definition" className="mb-10 scroll-mt-24">
        <H2 id="definition" kind="core">
          Définition (simple & pro)
        </H2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className={`${card} ${accent("core").border} ${accent("core").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">Ce que c’est</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {[
                "Un point fictif n’est pas un corps céleste : c’est un repère géométrique ou un point calculé.",
                "Il décrit une fonction : angle de manifestation (ASC/MC), point de “destin relationnel” (Vertex), zone de “flux” (Fortune), etc.",
                "On le lit comme une thématique : style (signe), domaine (maison), activation (aspects/transits).",
              ].map((x) => (
                <li key={x} className="flex gap-3">
                  <span className={`${dot} ${accent("core").dot}`} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${card} ${accent("method").border} ${accent("method").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">Ce que ce n’est pas</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {[
                "Une “planète cachée” : il n’a pas de masse, pas de mouvement propre (sauf si calcul d’un point mobile).",
                "Un verdict : c’est une lecture symbolique, contextualisée par le thème complet.",
                "Un substitut aux bases (maison/maître/aspects) : c’est un complément, pas le socle.",
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

      {/* Catégories */}
      <section id="classification" className="mb-10 scroll-mt-24">
        <H2 id="classification" kind="math">
          Catégories de points fictifs
        </H2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className={`${card} ${accent("angle").border} ${accent("angle").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">Angles / axes</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
              <li>ASC / DSC : comment tu entres dans la vie & comment tu rencontres l’autre.</li>
              <li>MC / IC : vocation, statut & racines, base intime.</li>
              <li>Vertex / Anti-Vertex : rencontres marquantes (souvent relationnelles).</li>
            </ul>
          </div>

          <div className={`${card} ${accent("math").border} ${accent("math").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">Points calculés</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
              <li>Part de Fortune : “flux”, aisance, efficacité naturelle (selon méthode jour/nuit).</li>
              <li>Part d’Esprit (Spirit) : direction mentale, intention, stratégie.</li>
              <li>Autres parts arabes : très utiles, mais à manier avec méthode.</li>
            </ul>
          </div>

          <div className={`${card} ${accent("destiny").border} ${accent("destiny").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">Facteurs symboliques modernes</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
              <li>Chiron : blessure/compétence — ce qui fait mal mais devient “outil”.</li>
              <li>Lilith (Lune Noire) : intensité, refus, désir brut, zones non domestiquées.</li>
              <li>Nœuds lunaires : axe de croissance (NN) / automatisme (NS).</li>
            </ul>
          </div>

          <div className={`${card} ${accent("method").border} ${accent("method").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">Règle pro</p>
            <p className="mt-3 text-sm leading-relaxed text-text/85">
              Plus le point est “structurel” (ASC/MC), plus il est central. Plus il est “calculé”
              (Fortune), plus il est contextuel : il devient excellent quand tu le relies à une maison,
              un maître et des aspects.
            </p>
          </div>
        </div>
      </section>

      {/* Points majeurs */}
      <section id="points" className="mb-10 scroll-mt-24">
        <H2 id="points" kind="destiny">
          Points majeurs à connaître
        </H2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {[
            {
              kind: "angle" as AccentKind,
              title: "Vertex",
              subtitle: "Rencontres marquantes / tournants relationnels",
              points: [
                "Souvent activé par transits/progressions = “événements” clés.",
                "À lire en maison : le domaine où la vie te met face à une expérience.",
                "En aspect à Vénus/Mars/Lune = vécu relationnel très fort.",
              ],
            },
            {
              kind: "math" as AccentKind,
              title: "Part de Fortune",
              subtitle: "Flux, aisance, efficacité naturelle",
              points: [
                "À lire comme un “point de facilité” : là où ça circule mieux.",
                "Maison = domaine ; signe = style ; maître = comment y accéder.",
                "Jour/nuit : la formule peut varier → être cohérent avec ton logiciel.",
              ],
            },
            {
              kind: "destiny" as AccentKind,
              title: "Chiron",
              subtitle: "Blessure → compétence / transmission",
              points: [
                "Une zone sensible, mais formatrice.",
                "Aspect à Soleil/Lune/ASC = très identitaire.",
                "Excellent en pédagogie/coaching : nommer la blessure, développer l’outil.",
              ],
            },
            {
              kind: "core" as AccentKind,
              title: "ASC / MC",
              subtitle: "Manifestation & direction de vie",
              points: [
                "ASC = posture, tempérament, “entrée dans le monde”.",
                "MC = vocation, visibilité, trajectoire.",
                "Tout transit fort sur ASC/MC se voit dans la vie concrète.",
              ],
            },
          ].map((x) => {
            const a = accent(x.kind);
            return (
              <article key={x.title} className={`${card} ${a.border} ${a.glow}`}>
                <div className={`mb-4 h-1 w-full rounded-full ${a.line}`} />
                <h3 className="font-serif text-3xl">{x.title}</h3>
                <p className="mt-2 text-sm text-text/80">{x.subtitle}</p>
                <ul className="mt-4 space-y-2 text-sm text-text/85">
                  {x.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className={`${dot} ${a.dot}`} />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      {/* Méthode */}
      <section id="methode" className="mb-10 scroll-mt-24">
        <H2 id="methode" kind="method">
          Méthode pro (en 5 étapes)
        </H2>

        <div className={`${card} mt-4 ${accent("method").border} ${accent("method").glow}`}>
          <ol className="space-y-4 text-sm text-text/85">
            {[
              {
                t: "1) Maison d’abord",
                d: "Le domaine de vie : c’est la base la plus concrète. Sans maison = lecture floue.",
              },
              {
                t: "2) Signe ensuite",
                d: "Le style : comment ça se vit, quelle posture, quelle énergie.",
              },
              {
                t: "3) Maître du signe",
                d: "La clé d’accès : où est le maître, comment il fonctionne, ses aspects.",
              },
              {
                t: "4) Aspects (réalité psychologique)",
                d: "Les aspects montrent comment le point “dialogue” avec le reste du thème.",
              },
              {
                t: "5) Timing (transits/progressions)",
                d: "Quand ça s’active : périodes, rencontres, décisions, virages.",
              },
            ].map((x) => (
              <li key={x.t} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="font-serif text-xl text-text">{x.t}</p>
                <p className="mt-2 leading-relaxed">{x.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Aspects */}
      <section id="aspects" className="mb-10 scroll-mt-24">
        <H2 id="aspects" kind="angle">
          Aspects : comment ça se déclenche
        </H2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className={`${card} ${accent("angle").border} ${accent("angle").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">Conjonction</p>
            <p className="mt-3 text-sm leading-relaxed text-text/85">
              La conjonction “colle” la planète au point : c’est le scénario le plus fort.
              Ex : Fortune conjointe Jupiter = aisance quand tu joues la croissance.
            </p>
          </div>

          <div className={`${card} ${accent("method").border} ${accent("method").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">Carré / opposition</p>
            <p className="mt-3 text-sm leading-relaxed text-text/85">
              Tension structurante : on doit choisir, ajuster, mûrir. Sur Vertex/NN/ASC, ce sont
              souvent des “virages” (relations, décisions, repositionnement).
            </p>
          </div>
        </div>
      </section>

      {/* Transits */}
      <section id="transits" className="mb-10 scroll-mt-24">
        <H2 id="transits" kind="math">
          Transits : le timing (quand ça devient concret)
        </H2>

        <div className={`${card} mt-4 ${accent("math").border} ${accent("math").glow}`}>
          <ul className="space-y-2 text-sm text-text/85">
            {[
              "Transits sur ASC/MC : visibles (nouveau cap, visibilité, changement de rythme).",
              "Transits sur Vertex : rencontres/événements relationnels marquants.",
              "Transits sur Fortune : opportunités, flux, “ça circule” (ou nécessité d’ajuster).",
              "Saturne/Uranus/Pluton sur un point : périodes longues et structurantes.",
            ].map((x) => (
              <li key={x} className="flex gap-3">
                <span className={`${dot} ${accent("math").dot}`} />
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
          <div className={`${card} ${accent("destiny").border} ${accent("destiny").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">Erreurs fréquentes</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {[
                "Lire un point sans maison (ça devient mystique et vague).",
                "Surinterpréter : un point complète, il ne remplace pas les planètes.",
                "Oublier le maître du signe (c’est la “clé d’accès”).",
                "Chercher une prophétie au lieu d’un mécanisme de lecture.",
              ].map((x) => (
                <li key={x} className="flex gap-3">
                  <span className={`${dot} ${accent("destiny").dot}`} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${card} ${accent("core").border} ${accent("core").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">Bonnes pratiques</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {[
                "Maison → signe → maître → aspects → timing.",
                "Toujours relier à une action concrète (comportement/domaine).",
                "Prioriser : ASC/MC d’abord, puis Vertex/Fortune/Chiron selon ton sujet.",
                "Dater les événements : transits + progressions (si tu veux être précis).",
              ].map((x) => (
                <li key={x} className="flex gap-3">
                  <span className={`${dot} ${accent("core").dot}`} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-10 scroll-mt-24">
        <H2 id="faq" kind="destiny">
          FAQ
        </H2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {[
            {
              q: "Est-ce que Chiron est un point fictif ?",
              a: "Techniquement c’est un corps (centaure), mais en lecture moderne on l’utilise comme “facteur symbolique” proche d’un point clé.",
            },
            {
              q: "La Part de Fortune est-elle fiable ?",
              a: "Oui si tu es cohérent : méthode jour/nuit, maison, maître du signe et aspects. Sinon ça devient du “tableau” sans vie.",
            },
            {
              q: "Vertex = destin ?",
              a: "Dis plutôt : un point de rencontres/événements relationnels marquants, surtout quand activé par transits.",
            },
            {
              q: "Je dois tous les lire ?",
              a: "Non. Garde une hiérarchie : ASC/MC → Nœuds/Lilith/Chiron selon le sujet → Vertex/Fortune en complément.",
            },
          ].map((x) => (
            <div key={x.q} className={`${card} ${accent("destiny").border} ${accent("destiny").glow}`}>
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
            headline: "Points fictifs — Vertex, Part de Fortune, Chiron, angles…",
            description:
              "Cours pro sur les points fictifs : définition, méthode, points majeurs, lecture par maison/signe/aspects et transits.",
            mainEntityOfPage: { "@type": "WebPage", "@id": "/points-fictifs" },
            author: { "@type": "Person", name: "Stéphane Gamot" },
          }),
        }}
      />
    </main>
  );
}
