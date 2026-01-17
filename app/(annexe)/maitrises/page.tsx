import Link from "next/link";
import type { Metadata } from "next";
import signes from "../../../data/signes.details.json";

/**
 * Page “Dignités planétaires”
 * - 12 cartes (une par signe)
 * - Maîtrise / Exaltation / Exil / Chute + explications + “pourquoi”
 * - Sommaire + SEO + JSON-LD
 */

type Sign = (typeof signes)[number];

export const metadata: Metadata = {
  title: "Maîtrises, exaltations, exils & chutes — Dignités",
  description:
    "Dignités essentielles signe par signe : planète maîtresse, exaltation, exil et chute. Sens, logique astrologique, repères et erreurs à éviter.",
  alternates: { canonical: "/maitrises" },
  openGraph: {
    title: "Dignités essentielles — Maîtrises, exaltations, exils & chutes",
    description:
      "Comprendre les dignités : maître, exaltation, exil et chute pour chaque signe. Sens, logique, repères d’interprétation et pièges fréquents.",
    url: "/maitrises",
    type: "article",
  },
};


const SIGNS = signes as Sign[];

type Planet =
  | "Soleil"
  | "Lune"
  | "Mercure"
  | "Vénus"
  | "Mars"
  | "Jupiter"
  | "Saturne"
  | "Uranus"
  | "Neptune"
  | "Pluton";

type Element = "Feu" | "Terre" | "Air" | "Eau";
type Mode = "Cardinal" | "Fixe" | "Mutable";
type Polarite = "Masculin" | "Féminin";

type Dignities = {
  rulers: Planet[]; // plusieurs maîtres possibles
  exaltations?: Planet[]; // plusieurs exaltations possibles
  detrimentsExtra?: Planet[]; // ajouts manuels (en plus des oppositions automatiques)
  fallsExtra?: Planet[]; // ajouts manuels (en plus des oppositions automatiques)
};

const has = <T,>(v: T | undefined | null): v is T => v !== undefined && v !== null;

/* ------------------------
   Style helpers (premium)
   ------------------------ */
const pill =
  "rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-text/90";
const card = "rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur";

/* ---------------------------------------
   1) DIGNITIES (TES AJOUTS INCLUS)
   --------------------------------------- */
const DIGNITIES_BY_SIGN: Record<string, Dignities> = {
  belier: {
    rulers: ["Mars"],
    exaltations: ["Soleil", "Pluton"], // ✅ ajout Pluton
  },
  taureau: {
    rulers: ["Vénus"],
    exaltations: ["Lune"],
    detrimentsExtra: ["Pluton"], // ✅ exil + Pluton
    fallsExtra: ["Uranus"], // ✅ chute + Uranus
  },
  gemeaux: { rulers: ["Mercure"] },
  cancer: { rulers: ["Lune"], exaltations: ["Jupiter"] },
  lion: {
    rulers: ["Soleil"],
    exaltations: ["Neptune"], // ✅ exaltation Neptune
    detrimentsExtra: ["Uranus"], // ✅ exil Uranus
  },
  vierge: {
    rulers: ["Mercure"],
    exaltations: ["Mercure"], // ✅ Mercure exaltation aussi
  },
  balance: { rulers: ["Vénus"], exaltations: ["Saturne"] },
  scorpion: {
    rulers: ["Mars", "Pluton"], // ✅ 2 maîtrises (Mars + Pluton)
    exaltations: ["Uranus"], // ✅ Uranus exaltation
  },
  sagittaire: { rulers: ["Jupiter"] },
  capricorne: { rulers: ["Saturne"], exaltations: ["Mars"] },
  verseau: { rulers: ["Saturne", "Uranus"] }, // ✅ 2e maîtrise Uranus
  poissons: {
    rulers: ["Jupiter", "Neptune"], // ✅ 2e maîtrise Neptune
    exaltations: ["Vénus"],
    detrimentsExtra: ["Mercure"], // ✅ Mercure exil
    fallsExtra: ["Mercure"], // ✅ Mercure chute
  },
};

// Option : maîtres modernes (si tu veux afficher “moderne” en plus)
const MODERN_RULERS: Partial<Record<string, Planet>> = {
  scorpion: "Pluton",
  verseau: "Uranus",
  poissons: "Neptune",
};

/* ---------------------------------------
   2) Oppositions (pour exil/chute)
   --------------------------------------- */
const OPPOSITE_SIGN: Record<string, string> = {
  belier: "balance",
  taureau: "scorpion",
  gemeaux: "sagittaire",
  cancer: "capricorne",
  lion: "verseau",
  vierge: "poissons",
  balance: "belier",
  scorpion: "taureau",
  sagittaire: "gemeaux",
  capricorne: "cancer",
  verseau: "lion",
  poissons: "vierge",
};

/* ---------------------------------------
   3) Explications pédagogiques (pro)
   --------------------------------------- */
function meaningDomicile(planet: Planet, signName: string) {
  return `En domicile, ${planet} “est chez elle” : sa fonction s’exprime de façon naturelle, stable et cohérente. Dans ${signName}, cela indique une affinité profonde entre la planète et le style du signe (ce que le signe cherche, et comment la planète agit).`;
}

function meaningExaltation(planet: Planet, signName: string) {
  return `En exaltation, ${planet} est “mise en valeur” : elle dispose d’un terrain favorable pour exprimer son meilleur potentiel. Dans ${signName}, l’énergie de la planète gagne en noblesse, en amplitude ou en efficacité — à condition d’être canalisée (sinon, on peut surjouer).`;
}

function meaningDetriment(planet: Planet, oppositeSignName: string) {
  return `En exil (détriment), ${planet} est dans le signe opposé à son domicile (${oppositeSignName}). La fonction reste possible, mais demande plus d’ajustement : on apprend à exprimer la planète autrement, parfois par compensation, parfois par maturité.`;
}

function meaningFall(planet: Planet, oppositeOfExaltSignName: string) {
  return `En chute, ${planet} est dans le signe opposé à son exaltation (${oppositeOfExaltSignName}). C’est un terrain d’apprentissage : la planète ne “rayonne” pas spontanément, et l’on progresse en simplifiant, en disciplinant et en rendant l’expression plus consciente.`;
}

/**
 * “Pourquoi ?” — version pédagogique, pas ésotérique floue.
 * On s’appuie sur : cohérence élément/mode + fonction planétaire.
 */
function whyRuler(planet: Planet, element?: string, mode?: string) {
  const el = element ? `l’élément ${element}` : "l’élément du signe";
  const mo = mode ? `le mode ${mode}` : "le mode du signe";

  const base =
    `Pourquoi ${planet} ? Parce que la fonction de ${planet} résonne avec ${el} et ${mo} : elle “donne la méthode” au signe pour agir et se réaliser.`;

  const byPlanet: Record<Planet, string> = {
    Soleil:
      " Le Soleil symbolise identité, volonté, rayonnement : il structure le “je” et donne une direction.",
    Lune:
      " La Lune symbolise besoins, sécurité, mémoire : elle parle d’attachement, de soin et de régulation émotionnelle.",
    Mercure:
      " Mercure symbolise pensée, langage, liens : il gouverne l’apprentissage, l’analyse et les échanges.",
    Vénus:
      " Vénus symbolise valeur, désir, harmonie : elle parle d’attirance, d’art, de relation et de plaisir.",
    Mars:
      " Mars symbolise action, désir, combat : il gouverne l’initiative, le courage et la capacité à trancher.",
    Jupiter:
      " Jupiter symbolise expansion, sens, confiance : il gouverne la croissance, la vision et la quête de sens.",
    Saturne:
      " Saturne symbolise structure, limite, responsabilité : il gouverne la consolidation, le temps et la rigueur.",
    Uranus:
      " Uranus symbolise rupture, liberté, innovation : il gouverne l’indépendance et la réinvention.",
    Neptune:
      " Neptune symbolise inspiration, idéal, dissolution : il gouverne l’empathie, le rêve et le mystique.",
    Pluton:
      " Pluton symbolise intensité, transformation, pouvoir : il gouverne les crises, les mues et la profondeur.",
  };

  return base + byPlanet[planet];
}

/* ------------------------
   Utilitaires affichage
   ------------------------ */
function getSlug(sign: Sign) {
  return (sign as any).slug as string;
}

function getElement(sign: Sign) {
  return (sign as any).element as Element | undefined;
}

function getMode(sign: Sign) {
  return (sign as any).mode as Mode | undefined;
}

function getPolarite(sign: Sign) {
  return (sign as any).polarite as Polarite | undefined;
}

function elementAccent(element?: Element) {
  switch (element) {
    case "Feu":
      return {
        border: "border-amber-400/25",
        glow: "shadow-[0_0_0_1px_rgba(251,191,36,0.12)]",
        line: "bg-amber-400/40",
        chip: "bg-amber-500/10 text-amber-200 border-amber-400/20",
      };
    case "Terre":
      return {
        border: "border-emerald-400/25",
        glow: "shadow-[0_0_0_1px_rgba(52,211,153,0.12)]",
        line: "bg-emerald-400/40",
        chip: "bg-emerald-500/10 text-emerald-200 border-emerald-400/20",
      };
    case "Air":
      return {
        border: "border-sky-400/25",
        glow: "shadow-[0_0_0_1px_rgba(56,189,248,0.12)]",
        line: "bg-sky-400/40",
        chip: "bg-sky-500/10 text-sky-200 border-sky-400/20",
      };
    case "Eau":
      return {
        border: "border-violet-400/25",
        glow: "shadow-[0_0_0_1px_rgba(167,139,250,0.12)]",
        line: "bg-violet-400/40",
        chip: "bg-violet-500/10 text-violet-200 border-violet-400/20",
      };
    default:
      return {
        border: "border-white/10",
        glow: "",
        line: "bg-white/20",
        chip: "bg-white/5 text-text border-white/10",
      };
  }
}

function uniqPlanets(list: Planet[]) {
  return Array.from(new Set(list));
}

/* ---------------------------------------
   4) FALL_BY_SIGN : chute(s) calculée(s)
   - si une planète est exaltée en X
     alors elle est en chute dans l'opposé de X
   --------------------------------------- */
const FALL_BY_SIGN: Partial<Record<string, Planet[]>> = {};
for (const [signSlug, d] of Object.entries(DIGNITIES_BY_SIGN)) {
  const exalts = d.exaltations ?? [];
  if (!exalts.length) continue;

  const fallSlug = OPPOSITE_SIGN[signSlug];
  const existing = FALL_BY_SIGN[fallSlug] ?? [];
  FALL_BY_SIGN[fallSlug] = uniqPlanets([...existing, ...exalts]);
}

/* ---------------------------------------
   5) Helper : nom du signe par slug
   --------------------------------------- */
function signNameBySlug(slug: string) {
  return SIGNS.find((x) => getSlug(x) === slug)?.name ?? slug;
}

/* ---------------------------------------
   6) Blocs d’affichage
   --------------------------------------- */
function PlanetPills({ planets }: { planets: Planet[] }) {
  if (!planets.length) return <p className="mt-2 font-serif text-3xl">—</p>;
  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {planets.map((pl) => (
        <span key={pl} className={pill}>
          {pl}
        </span>
      ))}
    </div>
  );
}

export default function MaitrisesCoursPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 pb-16 pt-10 text-text">
      {/* HERO */}
      <header className="mb-10 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5">
        <div className="p-7 sm:p-10">
          <p className="text-xs uppercase tracking-[0.18em] text-muted">
            Cours d’astrologie — Dignités essentielles
          </p>

          <h1 className="mt-3 font-serif text-4xl sm:text-5xl">
            Maîtrises, exaltations, exils & chutes
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-text/80">
            Pour chaque signe : <span className="text-text">planète(s) maîtresse(s)</span>,
            <span className="text-text"> exaltation(s)</span>, et le sens de l’
            <span className="text-text">exil</span> et de la <span className="text-text">chute</span>.
            C’est une page “cours” (pas juste un tableau).
          </p>

          {/* Sommaire */}
          <nav aria-label="Sommaire" className="mt-6 flex flex-wrap gap-2">
            {SIGNS.map((s) => (
              <a
                key={getSlug(s)}
                href={`#${getSlug(s)}`}
                className={`${pill} hover:bg-white/10`}
              >
                {s.name}
              </a>
            ))}
          </nav>
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-emerald-400/35 via-sky-400/35 to-violet-400/35" />
      </header>

      {/* Rappel pédagogique */}
      <section className="mb-10 grid gap-4 sm:grid-cols-2">
        <div className={card}>
          <h2 className="font-serif text-2xl">Définitions rapides</h2>
          <ul className="mt-3 space-y-2 text-sm text-text/80">
            <li>
              <span className="text-text">Domicile (maître)</span> : terrain naturel, expression fluide.
            </li>
            <li>
              <span className="text-text">Exaltation</span> : potentiel fort, “mise en valeur”.
            </li>
            <li>
              <span className="text-text">Exil (détriment)</span> : opposé au domicile, adaptation nécessaire.
            </li>
            <li>
              <span className="text-text">Chute</span> : opposé à l’exaltation, apprentissage & sobriété.
            </li>
          </ul>
        </div>

        <div className={card}>
          <h2 className="font-serif text-2xl">Comment l’enseigner</h2>
          <p className="mt-3 text-sm leading-relaxed text-text/80">
            Une dignité ne “juge” pas : elle décrit la <span className="text-text">facilité</span> d’expression.
            Dans un thème : on nuance avec la maison, les aspects, la vitesse, et surtout l’intégration.
          </p>
        </div>
      </section>

      {/* 12 cartes */}
      <div className="space-y-8">
        {SIGNS.map((sign) => {
          const slug = getSlug(sign);
          const element = getElement(sign);
          const mode = getMode(sign);
          const polarite = getPolarite(sign);
          const accent = elementAccent(element);

          const d = DIGNITIES_BY_SIGN[slug];

          const rulers = d?.rulers ?? [];
          const exaltations = d?.exaltations ?? [];

          const oppositeSlug = OPPOSITE_SIGN[slug];
          const oppositeName = signNameBySlug(oppositeSlug);

          // EXIL = maîtres du signe opposé + extras
          const oppRulers = DIGNITIES_BY_SIGN[oppositeSlug]?.rulers ?? [];
          const detriments = uniqPlanets([
            ...oppRulers,
            ...(d?.detrimentsExtra ?? []),
          ]);

          // CHUTE = planètes exaltées dans le signe opposé + extras
          const fallsFromTable = FALL_BY_SIGN[slug] ?? [];
          const falls = uniqPlanets([...(fallsFromTable ?? []), ...(d?.fallsExtra ?? [])]);

          const modernLabel = MODERN_RULERS[slug];

          return (
            <section
              key={slug}
              id={slug}
              className={`scroll-mt-24 ${card} ${accent.glow}`}
            >
              <div className={`mb-4 h-1 w-full rounded-full ${accent.line}`} />

              {/* Titre */}
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted">
                    Dignités du signe
                  </p>
                  <h2 className="mt-2 font-serif text-4xl">{sign.name}</h2>

                  <div className="mt-3 flex flex-wrap gap-2 text-sm">
                    {has(element) && (
                      <span className={`rounded-full border px-3 py-1 ${accent.chip}`}>
                        Élément : {element}
                      </span>
                    )}
                    {has(mode) && <span className={pill}>Mode : {mode}</span>}
                    {has(polarite) && <span className={pill}>Polarité : {polarite}</span>}
                    <span className={pill}>
                      Opposé :{" "}
                      <Link
                        className="underline decoration-white/20 hover:decoration-white/60"
                        href={`/signes/${oppositeSlug}`}
                      >
                        {oppositeName}
                      </Link>
                    </span>
                  </div>

                  {modernLabel ? (
                    <p className="mt-3 text-sm text-text/70">
                      Note : certaines écoles ajoutent un <span className="text-text">maître moderne</span> (ici : {modernLabel}).
                    </p>
                  ) : null}
                </div>

                <Link
                  href={`/signes/${slug}`}
                  className={`rounded-full border ${accent.border} bg-white/5 px-5 py-2 text-sm hover:bg-white/10`}
                >
                  Voir la page du signe →
                </Link>
              </div>

              {/* 4 blocs */}
              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {/* MAÎTRISE */}
                <div className={`rounded-3xl border ${accent.border} bg-white/5 p-6`}>
                  <p className="text-xs uppercase tracking-wide text-muted">
                    Maîtrise (domicile)
                  </p>

                  <PlanetPills planets={rulers} />

                  {rulers.length ? (
                    <div className="mt-4 space-y-4 text-sm leading-relaxed text-text/85">
                      {rulers.map((pl) => (
                        <div key={pl} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                          <p className="text-text/90">{meaningDomicile(pl, sign.name)}</p>
                          <p className="mt-3 text-text/80">
                            <span className="text-text">Pourquoi ?</span>{" "}
                            {whyRuler(pl, element, mode)}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>

                {/* EXALTATION */}
                <div className={`rounded-3xl border ${accent.border} bg-white/5 p-6`}>
                  <p className="text-xs uppercase tracking-wide text-muted">Exaltation</p>

                  <PlanetPills planets={exaltations} />

                  {exaltations.length ? (
                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-text/85">
                      {exaltations.map((pl) => (
                        <div key={pl} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                          <p>{meaningExaltation(pl, sign.name)}</p>
                          <p className="mt-3 text-text/80">
                            <span className="text-text">Pourquoi ?</span>{" "}
                            En exaltation, la planète trouve dans ce signe un “cadre” qui amplifie sa meilleure
                            expression : l’énergie est élevée, mais demande une direction claire (sinon excès).
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-4 text-sm text-text/70">
                      
                    </p>
                  )}
                </div>

                {/* EXIL */}
                <div className={`rounded-3xl border ${accent.border} bg-white/5 p-6`}>
                  <p className="text-xs uppercase tracking-wide text-muted">
                    Exil (détriment)
                  </p>

                  <PlanetPills planets={detriments} />

                  {detriments.length ? (
                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-text/85">
                      {detriments.map((pl) => (
                        <div key={pl} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                          <p>{meaningDetriment(pl, oppositeName)}</p>
                          <p className="mt-3 text-text/80">
                            <span className="text-text">Pourquoi ?</span>{" "}
                            L’exil vient de l’opposition : le signe demande une méthode inverse à celle du domicile.
                            Ce n’est pas “mauvais” : c’est moins automatique — donc très formateur.
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>

                {/* CHUTE */}
                <div className={`rounded-3xl border ${accent.border} bg-white/5 p-6`}>
                  <p className="text-xs uppercase tracking-wide text-muted">Chute</p>

                  <PlanetPills planets={falls} />

                  {falls.length ? (
                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-text/85">
                      {falls.map((pl) => {
                        // Pour expliquer “opposé à son exaltation en …”
                        const exaltSignSlug = Object.keys(DIGNITIES_BY_SIGN).find((s) =>
                          (DIGNITIES_BY_SIGN[s].exaltations ?? []).includes(pl)
                        );
                        const exaltSignName = exaltSignSlug ? signNameBySlug(exaltSignSlug) : "son signe d’exaltation";

                        return (
                          <div key={pl} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                            <p>{meaningFall(pl, exaltSignName)}</p>
                            <p className="mt-3 text-text/80">
                              <span className="text-text">Pourquoi ?</span>{" "}
                              La chute est l’opposé exact de l’exaltation : on apprend à faire plus simple,
                              plus vrai, sans forcer. C’est un placement qui se solidifie avec l’expérience.
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="mt-4 text-sm text-text/70">
                     
                    </p>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Footer */}
      <footer className="mt-14 border-t border-white/10 pt-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-text/70">
            Prochaine étape : relier ces dignités aux{" "}
            <span className="text-text">maisons</span> et aux{" "}
            <span className="text-text">aspects</span>.
          </p>
          <div className="flex flex-wrap gap-2">
            <Link className={`${pill} hover:bg-white/10`} href="/#zodiaque">
              Signes
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
            headline: "Maîtrises, exaltations, exils & chutes — Dignités planétaires",
            description:
              "Pour chaque signe : maître(s), exaltation(s), exil(s) et chute(s) — avec explication et logique symbolique (le “pourquoi”).",
            mainEntityOfPage: { "@type": "WebPage", "@id": "/maitrises" },
            author: { "@type": "Person", name: "Stéphane Gamot" },
          }),
        }}
      />
    </main>
  );
}
