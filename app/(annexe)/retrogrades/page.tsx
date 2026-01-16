import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

/**
 * Page “Planètes rétrogrades” (premium + couleurs + images)
 * Images attendues :
 * public/images/planetes/mercure.webp
 * public/images/planetes/venus.webp
 * public/images/planetes/mars.webp
 * public/images/planetes/jupiter.webp
 * public/images/planetes/saturne.webp
 * public/images/planetes/uranus.webp
 * public/images/planetes/neptune.webp
 * public/images/planetes/pluton.webp
 */

export const metadata: Metadata = {
  title: "Planètes rétrogrades — Définition, stations & interprétation (méthode)",
  description:
    "Cours complet sur la rétrogradation : définition, stations, natal vs transit, effets concrets et lecture planète par planète avec repères et pièges.",
  alternates: { canonical: "/retrogrades" },
  openGraph: {
    title: "Planètes rétrogrades — Natal vs transit, stations & méthode",
    description:
      "Comprendre les rétrogrades : définition, stations, différences natal/transit, effets concrets, repères et erreurs fréquentes. Lecture planète par planète.",
    url: "/retrogrades",
    type: "article",
  },
};


type Tone = "mental" | "affectif" | "action" | "social" | "transpersonnel";

type RetroBlock = {
  slug: string;
  nom: string;
  tone: Tone;
  keywords: string[];
  whatItDoes: string;
  retroMeaningNatal: string;
  retroMeaningTransit: string;
  stations: string[];
  greenFlags: string[];
  redFlags: string[];
  howToWorkWithIt: string[];
};

const pill =
  "rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-text/90";
const card = "rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur";
const h2 = "font-serif text-2xl sm:text-3xl flex items-center gap-3";
const dot = "inline-block h-2 w-2 rounded-full bg-white/60";

/* -------------------- Couleurs par “tone” -------------------- */
function toneAccent(t: Tone) {
  switch (t) {
    case "mental":
      return {
        border: "border-sky-400/25",
        ring: "focus-visible:ring-sky-400/35",
        pill: "bg-sky-500/10 text-sky-200 border-sky-400/20",
        dot: "bg-sky-400/70",
        line: "bg-sky-400/40",
        glow: "shadow-[0_0_0_1px_rgba(56,189,248,0.12)]",
        aura:
          "bg-[radial-gradient(70%_60%_at_20%_10%,rgba(56,189,248,0.18),transparent_55%)]",
      };
    case "affectif":
      return {
        border: "border-violet-400/25",
        ring: "focus-visible:ring-violet-400/35",
        pill: "bg-violet-500/10 text-violet-200 border-violet-400/20",
        dot: "bg-violet-400/70",
        line: "bg-violet-400/40",
        glow: "shadow-[0_0_0_1px_rgba(167,139,250,0.12)]",
        aura:
          "bg-[radial-gradient(70%_60%_at_20%_10%,rgba(167,139,250,0.18),transparent_55%)]",
      };
    case "action":
      return {
        border: "border-rose-400/25",
        ring: "focus-visible:ring-rose-400/35",
        pill: "bg-rose-500/10 text-rose-200 border-rose-400/20",
        dot: "bg-rose-400/70",
        line: "bg-rose-400/40",
        glow: "shadow-[0_0_0_1px_rgba(251,113,133,0.12)]",
        aura:
          "bg-[radial-gradient(70%_60%_at_20%_10%,rgba(251,113,133,0.18),transparent_55%)]",
      };
    case "social":
      return {
        border: "border-amber-400/25",
        ring: "focus-visible:ring-amber-400/35",
        pill: "bg-amber-500/10 text-amber-200 border-amber-400/20",
        dot: "bg-amber-400/70",
        line: "bg-amber-400/40",
        glow: "shadow-[0_0_0_1px_rgba(251,191,36,0.12)]",
        aura:
          "bg-[radial-gradient(70%_60%_at_20%_10%,rgba(251,191,36,0.16),transparent_55%)]",
      };
    default:
      return {
        border: "border-emerald-400/25",
        ring: "focus-visible:ring-emerald-400/35",
        pill: "bg-emerald-500/10 text-emerald-200 border-emerald-400/20",
        dot: "bg-emerald-400/70",
        line: "bg-emerald-400/40",
        glow: "shadow-[0_0_0_1px_rgba(52,211,153,0.12)]",
        aura:
          "bg-[radial-gradient(70%_60%_at_20%_10%,rgba(52,211,153,0.16),transparent_55%)]",
      };
  }
}

function planetImg(slug: string) {
  return `/images/planetes/${slug}.webp`;
}

/* -------------------- Contenu -------------------- */
const RETRO: RetroBlock[] = [
  {
    slug: "mercure",
    nom: "Mercure rétrograde",
    tone: "mental",
    keywords: ["révision", "relecture", "retour d’infos", "bugs", "réorganisation"],
    whatItDoes:
      "Mercure = pensée, langage, échanges, apprentissage, contrats, déplacements, outils du quotidien.",
    retroMeaningNatal:
      "En natal, Mercure rétrograde indique une pensée plus intérieure : on traite l’info en profondeur, parfois à contre-temps. Besoin de relire, reformuler, vérifier. Potentiel : nuance, précision. Défi : rumination si l’ancrage manque.",
    retroMeaningTransit:
      "En transit, Mercure rétrograde = révision : dossiers, messages, contrats, outils. Idéal pour corriger et simplifier. Moins idéal pour signer vite sans relecture.",
    stations: [
      "Station rétrograde : ralentir, relire, éviter les décisions sous stress.",
      "Cœur de rétro : corriger, reprendre un dossier, nettoyer l’info.",
      "Station directe : clarifier, valider, lancer ce qui a été ajusté.",
    ],
    greenFlags: [
      "Audit des process, du site, des contrats, des contenus.",
      "Retrouver une idée oubliée, faire une V2 plus propre.",
      "Revenir aux bases et apprendre autrement.",
    ],
    redFlags: [
      "Signer sans relire / mal communiquer / s’énerver sur des retards.",
      "Multiplier les changements au lieu d’optimiser l’existant.",
      "Confondre ralentissement et échec.",
    ],
    howToWorkWithIt: [
      "Avant : sauvegardes, check-lists, marges de délai.",
      "Pendant : relecture, tests, QA, tri mails/notes.",
      "Après : mise en ligne / signature / lancement si tout est clair.",
    ],
  },
  {
    slug: "venus",
    nom: "Vénus rétrograde",
    tone: "affectif",
    keywords: ["valeurs", "désir", "relation", "estime", "réévaluation"],
    whatItDoes:
      "Vénus = amour, attirance, valeurs, plaisir, argent “relationnel”, esthétique, accord/compromis.",
    retroMeaningNatal:
      "En natal, Vénus rétrograde : désir plus intérieur, critères personnels, besoin d’authenticité. Travail fréquent : estime, dépendance affective, valeur personnelle.",
    retroMeaningTransit:
      "En transit : réévaluer relations, choix affectifs, plaisirs, dépenses. Anciennes histoires peuvent revenir pour clarifier. On ajuste les limites et les standards.",
    stations: [
      "Station rétrograde : éviter les décisions radicales à chaud.",
      "Cœur de rétro : aligner valeurs ↔ actions.",
      "Station directe : décisions plus stables et assumées.",
    ],
    greenFlags: [
      "Redéfinir tes standards amoureux et tes limites.",
      "Rebranding / style plus cohérent.",
      "Dépenses plaisir : mieux et moins.",
    ],
    redFlags: [
      "Retour par manque plutôt que par lucidité.",
      "Validation externe au lieu d’estime interne.",
      "Achats impulsifs pour compenser.",
    ],
    howToWorkWithIt: [
      "Lister : non-négociables / compromis possibles.",
      "Tri financier (abonnements, achats).",
      "Décisions importantes après la station directe si possible.",
    ],
  },
  {
    slug: "mars",
    nom: "Mars rétrograde",
    tone: "action",
    keywords: ["ralentissement", "stratégie", "colère", "recalibrage", "endurance"],
    whatItDoes: "Mars = action, désir, courage, conflit, capacité à trancher.",
    retroMeaningNatal:
      "En natal : action plus stratégique, timing important. Potentiel : endurance, puissance contrôlée. Défi : colère accumulée si refoulée.",
    retroMeaningTransit:
      "En transit : recaler l’élan, revoir la stratégie. Bien pour corriger une méthode, reprendre un objectif. Moins bon pour foncer tête baissée.",
    stations: [
      "Station rétrograde : irritation/fatigue → choisir une priorité.",
      "Cœur de rétro : discipline et révision d’objectifs.",
      "Station directe : reprise progressive, action plus juste.",
    ],
    greenFlags: [
      "Reprendre une discipline avec méthode.",
      "Améliorer ton pipeline pro (process, priorités).",
      "Dire non sans exploser.",
    ],
    redFlags: ["Forcer malgré l’usure", "Conflits inutiles", "Décisions impulsives"],
    howToWorkWithIt: [
      "Petits pas constants.",
      "Décharger le stress (corps) + clarifier la colère.",
      "Planifier : objectifs, étapes, métriques.",
    ],
  },
  {
    slug: "jupiter",
    nom: "Jupiter rétrograde",
    tone: "social",
    keywords: ["révision de croyances", "sens", "éthique", "croissance intérieure"],
    whatItDoes: "Jupiter = expansion, vision, sens, opportunités, enseignement.",
    retroMeaningNatal:
      "En natal : quête de sens intérieure, sagesse par expérience. Défi : hésiter à prendre sa place.",
    retroMeaningTransit:
      "En transit : revoir une direction (études, projet, vision). Consolidation > gonflement. On corrige le cap avant d’accélérer.",
    stations: [
      "Station rétrograde : ralentir l’expansion, revoir le cap.",
      "Cœur de rétro : cohérence valeurs ↔ objectifs.",
      "Station directe : croissance plus alignée.",
    ],
    greenFlags: ["Refaire un plan propre", "Clarifier positionnement/offre", "Approfondir l’apprentissage"],
    redFlags: ["Promettre trop", "Se disperser", "Se raconter une histoire"],
    howToWorkWithIt: ["Audit vision/objectifs", "Limiter à 1–2 axes", "Mesurer le réel (faits)"],
  },
  {
    slug: "saturne",
    nom: "Saturne rétrograde",
    tone: "social",
    keywords: ["responsabilité", "structure", "maturité", "réparation", "autorité intérieure"],
    whatItDoes: "Saturne = limites, cadre, engagements, construction durable.",
    retroMeaningNatal:
      "En natal : autorité intérieure, rigueur. Défi : auto-critique, peur de mal faire, devoir prouver.",
    retroMeaningTransit:
      "En transit : réparer une structure (contrat, cadre, organisation). On consolide ce qui doit durer.",
    stations: [
      "Station rétrograde : pression → revoir les fondations.",
      "Cœur de rétro : simplifier, réparer, recadrer.",
      "Station directe : on repart sur du solide.",
    ],
    greenFlags: ["Assainir finances/planning", "Stabiliser un projet", "Limites claires"],
    redFlags: ["Rigidité", "Pessimisme", "Tout porter seul"],
    howToWorkWithIt: ["Moins mais mieux", "Renégocier si besoin", "Créer des routines/process"],
  },
  {
    slug: "uranus",
    nom: "Uranus rétrograde",
    tone: "transpersonnel",
    keywords: ["liberté intérieure", "déclic", "mise à jour", "désidentification"],
    whatItDoes: "Uranus = rupture, liberté, innovation, réveil.",
    retroMeaningNatal:
      "En natal : singularité intérieure, autonomie. Défi : instabilité nerveuse, se sentir différent.",
    retroMeaningTransit:
      "En transit : changement interne (mise à jour du “logiciel”). Le mouvement externe vient après.",
    stations: [
      "Station rétrograde : nervosité → réduire la surcharge.",
      "Cœur de rétro : tester petit, itérer.",
      "Station directe : mise en acte plus visible si prêt.",
    ],
    greenFlags: ["Moderniser sans tout casser", "Se libérer d’une identité", "Innovation progressive"],
    redFlags: ["Changer pour fuir", "Sur-stimulation", "Rupture impulsive"],
    howToWorkWithIt: ["Tester à petite échelle", "Garder une base stable", "Intuition + vérif"],
  },
  {
    slug: "neptune",
    nom: "Neptune rétrograde",
    tone: "transpersonnel",
    keywords: ["clarification", "désillusion", "inspiration", "sensibilité", "vérité"],
    whatItDoes: "Neptune = idéal, inspiration, compassion, imagination.",
    retroMeaningNatal:
      "En natal : hypersensibilité, imagination, intuition. Défi : frontières floues, idéalisation.",
    retroMeaningTransit:
      "En transit : enlever le brouillard. On clarifie un rêve, une foi, une relation à l’idéal.",
    stations: [
      "Station rétrograde : hygiène, sommeil, limites.",
      "Cœur de rétro : réel vs fantasme.",
      "Station directe : inspiration plus incarnée.",
    ],
    greenFlags: ["Clarifier un idéal", "Nettoyer dépendances", "Créer avec vérité"],
    redFlags: ["Fuite", "Projection", "Promesses vagues", "Sauveur/victime"],
    howToWorkWithIt: ["Vérifier les faits", "Limiter l’énergie donnée", "Ancrage corps/routine"],
  },
  {
    slug: "pluton",
    nom: "Pluton rétrograde",
    tone: "transpersonnel",
    keywords: ["transformation", "détox", "pouvoir", "mue", "vérité profonde"],
    whatItDoes: "Pluton = crise, mue, intensité, vérité, régénération.",
    retroMeaningNatal:
      "En natal : puissance intérieure, lucidité. Défi : contrôle, peur de perdre, obsession.",
    retroMeaningTransit:
      "En transit : détox profonde et lente. Effets subtils au départ, très nets sur la durée.",
    stations: [
      "Station rétrograde : observer sans forcer.",
      "Cœur de rétro : nettoyage (habitudes, attachements).",
      "Station directe : décisions irréversibles si mûres.",
    ],
    greenFlags: ["Thérapie/purge", "Reprendre son pouvoir", "Alignement profond"],
    redFlags: ["Jeux de pouvoir", "Manipulation", "Tout brûler"],
    howToWorkWithIt: ["Nommer la vérité", "Détox progressive", "Discipline + choix clairs"],
  },
];

const FAQ = [
  {
    q: "Une planète rétrograde, c’est négatif ?",
    a: "Non. Rétrograde = révision/intériorisation. Ça devient pénible si on force le mauvais timing ou si on refuse d’ajuster.",
  },
  {
    q: "Soleil et Lune rétrogradent ?",
    a: "Non, pas dans le sens utilisé en astrologie. Seules certaines planètes peuvent rétrograder (effet apparent).",
  },
  {
    q: "Stations : pourquoi c’est plus fort ?",
    a: "La planète ralentit : son symbolisme devient plus perceptible. Les jours autour de la station sont souvent marquants.",
  },
  {
    q: "Natal vs transit : c’est la même chose ?",
    a: "Non. Natal = style intérieur durable. Transit = timing/période d’ajustement sur un domaine (maison) et un thème (aspects).",
  },
];

export default function RetrogradesPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 pb-16 pt-10 text-text" id="top">
      {/* HERO */}
      <header className="mb-10 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5">
        <div className="relative p-7 sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_20%_10%,rgba(255,255,255,0.10),transparent_55%)]" />
          <p className="text-xs uppercase tracking-[0.18em] text-muted">
            Cours d’astrologie — Rétrogradations
          </p>

          <h1 className="mt-3 font-serif text-4xl sm:text-5xl">
            Planètes rétrogrades : sens réel & interprétation
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-text/80">
            Rétrograde = <span className="text-text">changement de rythme</span> : on réévalue, on révise,
            on intègre. Ici : méthode claire + lecture <span className="text-text">natal</span> /{" "}
            <span className="text-text">transit</span> + planète par planète.
          </p>

          {/* Sommaire */}
          <nav aria-label="Sommaire" className="mt-6 flex flex-wrap gap-2">
            {RETRO.map((p) => (
              <a key={p.slug} href={`#${p.slug}`} className={`${pill} hover:bg-white/10`}>
                {p.nom.replace(" rétrograde", "")}
              </a>
            ))}
            <a href="#faq" className={`${pill} hover:bg-white/10`}>
              FAQ
            </a>
          </nav>
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-sky-400/35 via-violet-400/35 to-emerald-400/35" />
      </header>

      {/* Bases */}
      <section className="mb-10 grid gap-4 sm:grid-cols-2">
        <div className={card}>
          <h2 className="font-serif text-2xl">Ce que c’est (simple & vrai)</h2>
          <p className="mt-3 text-sm leading-relaxed text-text/80">
            La rétrogradation est un <span className="text-text">effet apparent</span> : une planète semble
            reculer sur le zodiaque. Astrologiquement :{" "}
            <span className="text-text">intériorisation</span>, révision, maturation.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-text/80">
            <li>• <span className="text-text">Natal</span> : style intérieur durable.</li>
            <li>• <span className="text-text">Transit</span> : timing d’ajustement, retours, relectures.</li>
            <li>• <span className="text-text">Stations</span> : moments plus visibles.</li>
          </ul>
        </div>

        <div className={card}>
          <h2 className="font-serif text-2xl">Méthode d’interprétation</h2>
          <ol className="mt-3 space-y-2 text-sm text-text/80">
            <li>1) Planète = fonction (quoi).</li>
            <li>2) Signe = style (comment).</li>
            <li>3) Maison = domaine (où).</li>
            <li>4) Aspects = dynamique (tension/aide).</li>
            <li>5) Transit : orb + station + retours sur les mêmes degrés.</li>
          </ol>
        </div>
      </section>

      {/* Planète par planète */}
      <div className="space-y-8">
        {RETRO.map((p) => {
          const a = toneAccent(p.tone);

          return (
            <section
              key={p.slug}
              id={p.slug}
              className={`scroll-mt-24 rounded-3xl border ${a.border} bg-white/5 p-6 backdrop-blur ${a.glow} relative overflow-hidden`}
            >
              {/* aura colorée */}
              <div className={`pointer-events-none absolute inset-0 ${a.aura}`} />
              <div className={`pointer-events-none absolute top-0 left-0 h-1 w-full ${a.line}`} />

              <div className="relative flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  {/* ✅ Image planète */}
                  <div
  className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-full border ${a.border} bg-black/20`}
  aria-hidden="true"
>
  <Image
    src={planetImg(p.slug)}
    alt=""
    fill
    className="object-cover"
    sizes="64px"
  />
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
</div>


                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted">
                      Planète rétrograde
                    </p>
                    <h2 className="mt-2 font-serif text-4xl">{p.nom}</h2>

                    <div className="mt-3 flex flex-wrap gap-2">
                      <span
                        className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm ${a.pill}`}
                      >
                        <span className={`h-2 w-2 rounded-full ${a.dot}`} />
                        {p.tone}
                      </span>
                      <span className={pill}>{p.whatItDoes}</span>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.keywords.map((k) => (
                        <span key={k} className={pill}>
                          {k}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <a className={`${pill} hover:bg-white/10`} href="#top">
                  ↑ Haut
                </a>
              </div>

              <div className="relative mt-6 grid gap-4 lg:grid-cols-2">
                <div className={`rounded-3xl border ${a.border} bg-black/20 p-6`}>
                  <h3 className={h2}>
                    <span className={`h-2 w-2 rounded-full ${a.dot}`} />
                    Natal
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text/85">
                    {p.retroMeaningNatal}
                  </p>
                </div>

                <div className={`rounded-3xl border ${a.border} bg-black/20 p-6`}>
                  <h3 className={h2}>
                    <span className={`h-2 w-2 rounded-full ${a.dot}`} />
                    Transit
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text/85">
                    {p.retroMeaningTransit}
                  </p>
                </div>
              </div>

              <div className="relative mt-4 grid gap-4 lg:grid-cols-3">
                <div className={`rounded-3xl border ${a.border} bg-white/5 p-6`}>
                  <h3 className={h2}>
                    <span className={`h-2 w-2 rounded-full ${a.dot}`} />
                    Stations
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-text/85">
                    {p.stations.map((x) => (
                      <li key={x} className="flex gap-3">
                        <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${a.dot}`} />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`rounded-3xl border ${a.border} bg-white/5 p-6`}>
                  <h3 className={h2}>
                    <span className={`h-2 w-2 rounded-full ${a.dot}`} />
                    Version haute
                  </h3>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
                    {p.greenFlags.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>

                <div className={`rounded-3xl border ${a.border} bg-white/5 p-6`}>
                  <h3 className={h2}>
                    <span className={`h-2 w-2 rounded-full ${a.dot}`} />
                    Dérives
                  </h3>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
                    {p.redFlags.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={`relative mt-4 rounded-3xl border ${a.border} bg-black/20 p-6`}>
                <h3 className={h2}>
                  <span className={`h-2 w-2 rounded-full ${a.dot}`} />
                  Comment travailler avec
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-text/85">
                  {p.howToWorkWithIt.map((x) => (
                    <li key={x} className="flex gap-3">
                      <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${a.dot}`} />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          );
        })}
      </div>

      {/* FAQ */}
      <section id="faq" className={`scroll-mt-24 mt-10 ${card}`}>
        <h2 className="font-serif text-3xl">FAQ</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {FAQ.map((f) => (
            <div key={f.q} className="rounded-3xl border border-white/10 bg-black/20 p-6">
              <p className="font-serif text-xl">{f.q}</p>
              <p className="mt-3 text-sm leading-relaxed text-text/85">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-14 border-t border-white/10 pt-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-text/70">
            Ensuite : relier les rétrogradations aux <span className="text-text">transits</span> (cas pratiques) et aux{" "}
            <span className="text-text">aspects</span>.
          </p>
          <div className="flex flex-wrap gap-2">
            <Link className={`${pill} hover:bg-white/10`} href="/aspects">
              Aspects
            </Link>
            <Link className={`${pill} hover:bg-white/10`} href="/#planetes">
              Planètes
            </Link>
            <Link className={`${pill} hover:bg-white/10`} href="/#maisons">
              Maisons
            </Link>
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
            headline: "Planètes rétrogrades — sens, interprétation & méthode",
            description:
              "Cours complet sur les planètes rétrogrades : définition, stations, natal vs transit, et interprétation planète par planète.",
            mainEntityOfPage: { "@type": "WebPage", "@id": "/retrogrades" },
            author: { "@type": "Person", name: "Stéphane Gamot" },
          }),
        }}
      />
    </main>
  );
}
