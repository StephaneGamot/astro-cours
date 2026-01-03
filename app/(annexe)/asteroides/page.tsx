import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Asteroides from "./../../../public/images/asteroides/asteroides.webp"

/**
 * Page “Astéroïdes”
 * - Cours pro : Cérès, Pallas, Junon, Vesta + Chiron (souvent enseigné avec)
 * - Méthode de lecture (thème natal, transits, synastrie)
 * - Images optionnelles :
 *    /public/images/asteroides/hero.webp
 *    /public/images/asteroides/ceres.webp, pallas.webp, juno.webp, vesta.webp, chiron.webp
 */

export const metadata: Metadata = {
  title: "Astéroïdes en astrologie — Cérès, Pallas, Junon, Vesta (et Chiron)",
  description:
    "Cours clair et pro sur les astéroïdes : signification, lecture par signe/maison/aspects, transits, synastrie, erreurs fréquentes. Focus sur Cérès, Pallas, Junon, Vesta + Chiron.",
  alternates: { canonical: "/asteroides" },
  openGraph: {
    title: "Astéroïdes — Cérès, Pallas, Junon, Vesta (et Chiron)",
    description:
      "Interprétation pro : signe, maison, aspects, transits et synastrie.",
    url: "/asteroides",
    type: "article",
  },
};

type AccentKind = "earth" | "mind" | "bond" | "flame" | "wound" | "method";

const pill =
  "rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-text/90 hover:bg-white/10";
const card =
  "rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur";
const dot = "mt-2 h-1.5 w-1.5 shrink-0 rounded-full";

function accent(kind: AccentKind) {
  switch (kind) {
    case "earth":
      return {
        border: "border-emerald-400/25",
        glow: "shadow-[0_0_0_1px_rgba(52,211,153,0.10)]",
        dot: "bg-emerald-400/70",
        line: "bg-emerald-400/35",
        text: "text-emerald-200",
        bg: "bg-emerald-500/10",
        ring: "focus-visible:ring-emerald-400/35",
      };
    case "mind":
      return {
        border: "border-sky-400/25",
        glow: "shadow-[0_0_0_1px_rgba(56,189,248,0.10)]",
        dot: "bg-sky-400/70",
        line: "bg-sky-400/35",
        text: "text-sky-200",
        bg: "bg-sky-500/10",
        ring: "focus-visible:ring-sky-400/35",
      };
    case "bond":
      return {
        border: "border-violet-400/25",
        glow: "shadow-[0_0_0_1px_rgba(167,139,250,0.10)]",
        dot: "bg-violet-400/70",
        line: "bg-violet-400/35",
        text: "text-violet-200",
        bg: "bg-violet-500/10",
        ring: "focus-visible:ring-violet-400/35",
      };
    case "flame":
      return {
        border: "border-amber-400/25",
        glow: "shadow-[0_0_0_1px_rgba(251,191,36,0.10)]",
        dot: "bg-amber-400/70",
        line: "bg-amber-400/35",
        text: "text-amber-200",
        bg: "bg-amber-500/10",
        ring: "focus-visible:ring-amber-400/35",
      };
    case "wound":
      return {
        border: "border-rose-400/25",
        glow: "shadow-[0_0_0_1px_rgba(251,113,133,0.10)]",
        dot: "bg-rose-400/70",
        line: "bg-rose-400/35",
        text: "text-rose-200",
        bg: "bg-rose-500/10",
        ring: "focus-visible:ring-rose-400/35",
      };
    default:
      return {
        border: "border-white/10",
        glow: "",
        dot: "bg-white/60",
        line: "bg-white/20",
        text: "text-text/90",
        bg: "bg-white/5",
        ring: "focus-visible:ring-white/20",
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

type Asteroid = {
  slug: "ceres" | "pallas" | "juno" | "vesta" | "chiron";
  name: string;
  badge: string;
  kind: AccentKind;
  keywords: string[];
  core: string; // définition courte
  sign: string[]; // lecture signe
  house: string[]; // lecture maison
  aspects: string[]; // lecture aspects
  pitfalls: string[]; // erreurs
};

const ASTEROIDS: Asteroid[] = [
  {
    slug: "ceres",
    name: "Cérès",
    badge: "Soin • Ressources • Nourrir",
    kind: "earth",
    keywords: ["nourrir", "sécurité", "corps", "rythmes", "attachement", "autosoin"],
    core:
      "Cérès décrit la manière de donner/recevoir du soin, de réguler le manque et de construire la sécurité concrète (corps, nourriture, rythmes, protection).",
    sign: [
      "En signe : le style de soin (directif, tendre, mental, pragmatique…), et ce qui rassure vraiment.",
      "On observe aussi l’ombre : surprotection, contrôle, compensation par le confort.",
    ],
    house: [
      "En maison : le domaine où tu apprends à nourrir, réparer, créer de la sécurité et de la stabilité.",
      "Très utile pour la relation au corps, au foyer, au temps et aux routines.",
    ],
    aspects: [
      "Aspects au Soleil/Lune : besoin vital (identité/émotion) lié au soin et à la sécurité.",
      "Aspects à Vénus/Mars : comment le soin s’exprime en relation/désir (donner vs exiger).",
    ],
    pitfalls: [
      "Réduire Cérès à ‘maman’ : c’est plus large (autosoin, ressources, rythmes, régulation).",
      "Interpréter sans maison : la maison est souvent le vrai ‘terrain’ de Cérès.",
    ],
  },
  {
    slug: "pallas",
    name: "Pallas",
    badge: "Stratégie • Intelligence • Motifs",
    kind: "mind",
    keywords: ["pattern", "tactique", "vision", "résolution", "créativité", "justice"],
    core:
      "Pallas décrit l’intelligence stratégique : voir les motifs, résoudre, optimiser, défendre une cause, et agir avec précision plutôt qu’à l’instinct.",
    sign: [
      "En signe : ta manière d’analyser (rapide, intuitive, structurée, imaginative…).",
      "Le ‘talent signature’ : repérer ce que les autres ne voient pas.",
    ],
    house: [
      "En maison : là où tu joues ‘aux échecs’ plutôt qu’aux dés ; domaine de maîtrise, conseil, architecture mentale.",
      "Très parlant en carrière : stratégie, expertise, positionnement.",
    ],
    aspects: [
      "Aspects à Mercure : style cognitif très marqué (conceptualisation, logique, communication).",
      "Aspects à Uranus : insight, innovation, rupture intelligente (attention au sur-mental).",
    ],
    pitfalls: [
      "Confondre Pallas avec Mercure : Mercure relie/échange ; Pallas conçoit et planifie.",
      "Lire Pallas comme ‘froid’ : en réalité, c’est une intelligence appliquée.",
    ],
  },
  {
    slug: "juno",
    name: "Junon",
    badge: "Engagement • Pacte • Égalité",
    kind: "bond",
    keywords: ["contrat", "fidélité", "répartition", "respect", "pouvoir", "alliances"],
    core:
      "Junon décrit l’engagement : ce que tu attends d’un pacte, comment tu gères l’égalité, la loyauté, et les rapports de pouvoir en relation.",
    sign: [
      "En signe : la ‘forme’ de l’engagement (stabilité, liberté, intensité, projet commun…).",
      "Ce qui déclenche la jalousie ou la crispation : là où le pacte n’est pas respecté.",
    ],
    house: [
      "En maison : le lieu de vie où l’engagement se joue (couple, finances, statut, foyer, mission…).",
      "Très utile en synastrie : ce que l’autre active sur ton terrain d’engagement.",
    ],
    aspects: [
      "Aspects à Vénus : style affectif + pacte (harmonie vs attentes).",
      "Aspects à Saturne : sérieux/contrat ; peut être solide mais exigeant.",
    ],
    pitfalls: [
      "Réduire Junon au mariage : c’est la logique de pacte (pro/perso), pas juste l’institution.",
      "Oublier la question du pouvoir : Junon parle souvent de rééquilibrage.",
    ],
  },
  {
    slug: "vesta",
    name: "Vesta",
    badge: "Feu sacré • Focus • Dévotion",
    kind: "flame",
    keywords: ["concentration", "discipline", "sacré", "service", "purifier", "réserve"],
    core:
      "Vesta décrit le feu intérieur : capacité de focus, de dévotion, de purification et de service. C’est la ‘flamme’ qui tient quand le reste lâche.",
    sign: [
      "En signe : ton style de focus (méthode, foi, passion, rigueur, inspiration…).",
      "Peut donner une grande maîtrise… ou une tendance à l’isolement si trop strict.",
    ],
    house: [
      "En maison : domaine où tu peux devenir ‘excellent’ par dévotion (métier, art, santé, spiritualité, foyer…).",
      "Très fort pour les routines, la pratique quotidienne, la constance.",
    ],
    aspects: [
      "Aspects à Mars : puissance d’effort / endurance ; attention à la rigidité.",
      "Aspects à Neptune : dévotion inspirée ; attention aux illusions et au sacrifice.",
    ],
    pitfalls: [
      "Lire Vesta comme ‘privation’ uniquement : c’est surtout le focus et la constance.",
      "Oublier l’équilibre : Vesta trop forte = obsession / dureté envers soi.",
    ],
  },
  {
    slug: "chiron",
    name: "Chiron",
    badge: "Blessure • Sens • Transmission",
    kind: "wound",
    keywords: ["vulnérabilité", "compétence", "sens", "guérison", "mentor", "intégration"],
    core:
      "Chiron décrit une blessure structurante qui pousse à développer une compétence, une sagesse et une capacité de transmission. Ce n’est pas ‘tragique’ : c’est formateur.",
    sign: [
      "En signe : la coloration de la blessure (identité, émotion, relation, action…).",
      "On cherche la bascule : de la douleur à l’expertise (sans se définir par la blessure).",
    ],
    house: [
      "En maison : domaine où tu apprends par expérience directe, puis où tu peux guider.",
      "Souvent un terrain d’inconfort au début, puis une force avec le temps.",
    ],
    aspects: [
      "Aspects au Soleil/Lune : très identitaire/émotionnel ; demande douceur et maturité.",
      "Aspects à Saturne : travail long, solide ; attention au jugement sévère de soi.",
    ],
    pitfalls: [
      "Interpréter Chiron comme ‘malheur’ : c’est une dynamique, pas une fatalité.",
      "Ne pas relier à l’action : la guérison passe par des choix concrets et répétés.",
    ],
  },
];

function asteroidImageSrc(slug: string) {
  return `/images/asteroides/${slug}.webp`;
}

export default function AsteroidesPage() {
  const sections = [
    { id: "definition", label: "Définition" },
    { id: "les-asteroides", label: "Les principaux" },
    { id: "methode", label: "Méthode de lecture" },
    { id: "transits", label: "Transits" },
    { id: "synastrie", label: "Synastrie" },
    { id: "piges", label: "Pièges" },
    { id: "faq", label: "FAQ" },
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
              Cours d’astrologie — Astéroïdes
            </p>
            <h1 className="mt-3 font-serif text-4xl text-white sm:text-5xl">
              Cérès, Pallas, Junon, Vesta & Chiron
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/80">
              Les astéroïdes donnent de la précision :{" "}
              <span className="text-white">soin</span> (Cérès),{" "}
              <span className="text-white">stratégie</span> (Pallas),{" "}
              <span className="text-white">engagement</span> (Junon),{" "}
              <span className="text-white">focus</span> (Vesta) et{" "}
              <span className="text-white">blessure/maîtrise</span> (Chiron).
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Lecture pro", "Signe • Maison • Aspects", "Transits & synastrie"].map((x) => (
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

        <div className="h-1 w-full bg-gradient-to-r from-emerald-400/35 via-sky-400/35 to-violet-400/35" />
      </header>

   <div className={"mb-12 overflow-hidden rounded-3xl border bg-white/20 "}>
        <div className="relative">
          <Image
            src={Asteroides}
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
        <H2 id="definition" kind="method">Pourquoi utiliser les astéroïdes ?</H2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className={`${card} ${accent("method").border} ${accent("method").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">Ce qu’ils apportent</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {[
                "Ils affinent les thèmes : soin, engagement, stratégie, focus…",
                "Ils donnent des ‘angles psychologiques’ souvent très parlants en consultation.",
                "Ils brillent quand ils sont en aspects serrés aux luminaires/angles/maîtres d’Ascendant.",
              ].map((x) => (
                <li key={x} className="flex gap-3">
                  <span className={`${dot} ${accent("method").dot}`} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${card} ${accent("mind").border} ${accent("mind").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">Règle pro</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {[
                "Toujours lire : signe (style) + maison (domaine) + aspects (comment c’est vécu).",
                "Priorité aux aspects exacts : conjonction, opposition, carré, trigone, sextile.",
                "Ne pas ‘surcharger’ : 4–6 astéroïdes bien choisis valent mieux qu’une liste infinie.",
              ].map((x) => (
                <li key={x} className="flex gap-3">
                  <span className={`${dot} ${accent("mind").dot}`} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Les principaux */}
      <section id="les-asteroides" className="mb-10 scroll-mt-24">
<H2 id="les-asteroides" kind="method">Les astéroïdes “indispensables”</H2>


        <div className="mt-4 grid gap-4">
          {ASTEROIDS.map((a) => {
            const t = accent(a.kind);

            return (
              <article key={a.slug} className={`${card} ${t.border} ${t.glow}`}>
                <div className={`mb-4 h-1 w-full rounded-full ${t.line}`} />

                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    {/* Image (optionnelle) */}
                    <div
                      className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border ${t.border} bg-white/50`}
                      aria-hidden="true"
                    >
                      <Image
                        src={asteroidImageSrc(a.slug)}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wide text-muted">Astéroïde</p>
                      <h3 className="mt-1 font-serif text-3xl">{a.name}</h3>
                      <p className="mt-2 text-sm text-text/80">{a.core}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className={`rounded-full border ${t.border} ${t.bg} px-3 py-1 text-sm ${t.text}`}>
                          {a.badge}
                        </span>
                        {a.keywords.slice(0, 4).map((k) => (
                          <span key={k} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-text/85">
                            {k}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/#planetes"
                    className={`rounded-full border ${t.border} bg-white/5 px-5 py-2 text-sm hover:bg-white/10`}
                  >
                    Revoir les planètes →
                  </Link>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <p className="text-xs uppercase tracking-wide text-muted">En signe</p>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
                      {a.sign.map((x) => <li key={x}>{x}</li>)}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <p className="text-xs uppercase tracking-wide text-muted">En maison</p>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
                      {a.house.map((x) => <li key={x}>{x}</li>)}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <p className="text-xs uppercase tracking-wide text-muted">Aspects</p>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
                      {a.aspects.map((x) => <li key={x}>{x}</li>)}
                    </ul>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="text-xs uppercase tracking-wide text-muted">À éviter</p>
                  <ul className="mt-3 space-y-2 text-sm text-text/85">
                    {a.pitfalls.map((x) => (
                      <li key={x} className="flex gap-3">
                        <span className={`${dot} ${t.dot}`} />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Méthode */}
      <section id="methode" className="mb-10 scroll-mt-24">
        <H2 id="methode" kind="method">Méthode de lecture (pro)</H2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className={`${card} ${accent("method").border} ${accent("method").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">Priorités</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {[
                "Angles (ASC/MC) + luminaires (Soleil/Lune) : priorité 1.",
                "Maîtres d’ASC/MC + planètes personnelles : priorité 2.",
                "Aspects serrés : 0°–2° (très fort), 3°–5° (ok), au-delà = plus léger.",
              ].map((x) => (
                <li key={x} className="flex gap-3">
                  <span className={`${dot} ${accent("method").dot}`} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${card} ${accent("mind").border} ${accent("mind").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">Question de synthèse</p>
            <p className="mt-3 text-sm leading-relaxed text-text/85">
              “Quelle fonction précise est ajoutée au thème ?”
              <br />
              Exemple : Cérès n’ajoute pas “de l’émotion” (Lune) mais un style de{" "}
              <span className="text-text">soin</span> et de <span className="text-text">régulation</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Transits */}
      <section id="transits" className="mb-10 scroll-mt-24">
        <H2 id="transits" kind="earth">Transits : quand ça parle vraiment</H2>

        <div className={`${card} mt-4 ${accent("earth").border} ${accent("earth").glow}`}>
          <p className="text-xs uppercase tracking-wide text-muted">À surveiller</p>
          <ul className="mt-3 space-y-2 text-sm text-text/85">
            {[
              "Transit exact sur Soleil/Lune/ASC/MC : évènementiel et très lisible.",
              "Transit sur Vénus/Mars : relation/désir/action (Juno/Vesta très parlants).",
              "Transit avec Saturne/Pluton : maturation, contrats, profondeur (Juno/Chiron souvent activés).",
            ].map((x) => (
              <li key={x} className="flex gap-3">
                <span className={`${dot} ${accent("earth").dot}`} />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Synastrie */}
      <section id="synastrie" className="mb-10 scroll-mt-24">
        <H2 id="synastrie" kind="bond">Synastrie : ultra utile</H2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className={`${card} ${accent("bond").border} ${accent("bond").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">Junon (pacte)</p>
            <p className="mt-3 text-sm leading-relaxed text-text/85">
              Junon de l’un sur le Soleil/ASC/Vénus de l’autre : sensation de “contrat”, attentes,
              besoin de clarté sur les règles du jeu.
            </p>
          </div>

          <div className={`${card} ${accent("flame").border} ${accent("flame").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">Vesta (focus)</p>
            <p className="mt-3 text-sm leading-relaxed text-text/85">
              Vesta active le dévouement, la constance… mais peut créer une dynamique “tout ou rien”.
              Très puissant si c’est aligné, dur si c’est subi.
            </p>
          </div>
        </div>
      </section>

      {/* Pièges */}
      <section id="piges" className="mb-10 scroll-mt-24">
        <H2 id="piges" kind="method">Pièges & bonnes pratiques</H2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className={`${card} ${accent("wound").border} ${accent("wound").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">Erreurs fréquentes</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {[
                "Lire 20 astéroïdes : bruit > signal.",
                "Oublier l’orbe : si c’est large, c’est souvent faible.",
                "Ne pas relier aux planètes principales : l’astéroïde colore, il ne remplace pas.",
              ].map((x) => (
                <li key={x} className="flex gap-3">
                  <span className={`${dot} ${accent("wound").dot}`} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${card} ${accent("mind").border} ${accent("mind").glow}`}>
            <p className="text-xs uppercase tracking-wide text-muted">Bonnes pratiques</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {[
                "Choisir 4 principaux + 1 ou 2 spécifiques selon la question.",
                "Donner un rôle clair : soin, stratégie, pacte, focus, guérison.",
                "Toujours valider avec maison + aspects + transits (si timing).",
              ].map((x) => (
                <li key={x} className="flex gap-3">
                  <span className={`${dot} ${accent("mind").dot}`} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-10 scroll-mt-24">
        <H2 id="faq" kind="method">FAQ</H2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {[
            {
              q: "Pourquoi Chiron est ici ?",
              a: "On l’enseigne souvent avec les astéroïdes car il apporte une lecture très précise de la blessure/maîtrise et de la transmission.",
            },
            {
              q: "Quels astéroïdes choisir au début ?",
              a: "Cérès, Pallas, Junon, Vesta (les ‘4 majeurs’). Ajoute Chiron si tu fais du coaching/psycho-astro.",
            },
            {
              q: "Est-ce que ça marche vraiment ?",
              a: "Oui quand c’est serré en aspects et relié aux points principaux (Soleil/Lune/ASC/MC). Sinon, c’est plus secondaire.",
            },
            {
              q: "Quel orbe utiliser ?",
              a: "Pro : 0–2° fort, 3–5° acceptable. Au-delà, lis en toile de fond uniquement.",
            },
          ].map((x) => (
            <div key={x.q} className={`${card} ${accent("method").border} ${accent("method").glow}`}>
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
            <Link className={pill} href="/synastrie">Synastrie</Link>
            <Link className={pill} href="/transits">Transits</Link>
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
            headline: "Astéroïdes en astrologie — Cérès, Pallas, Junon, Vesta (et Chiron)",
            description:
              "Cours pro : signification des astéroïdes, lecture par signe/maison/aspects, transits et synastrie.",
            mainEntityOfPage: { "@type": "WebPage", "@id": "/asteroides" },
            author: { "@type": "Person", name: "Stéphane Gamot" },
          }),
        }}
      />
    </main>
  );
}
