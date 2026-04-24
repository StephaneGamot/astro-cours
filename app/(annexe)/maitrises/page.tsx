import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import {
  Sparkles,
  Star,
  Crown,
  ArrowLeft,
  Shield,
  Flame,
  Orbit,
  BookOpen,
} from "lucide-react";

import signes from "../../../data/signes.details.json";
import HeroSrc from "@/public/images/dignites-planetaires.webp";

type Sign = (typeof signes)[number];

export const metadata: Metadata = {
  title: "Maîtrises, exaltations, exils & chutes — Les dignités",
  description:
    "Dignités essentielles signe par signe : planète maîtresse, exaltation, exil et chute. Logique astrologique et repères clairs. Découvrez notre cours !",
  alternates: { canonical: "https://www.astro-cours.com/maitrises" },
  openGraph: {
    title: "Maîtrises, exaltations, exils & chutes — Les dignités",
    description:
      "Dignités essentielles signe par signe : planète maîtresse, exaltation, exil et chute. Logique astrologique et repères clairs. Découvrez notre cours !",
    url: "https://www.astro-cours.com/maitrises",
    type: "article",
    siteName: "Astro Cours",
    locale: "fr_FR",
    images: [{ url: "https://www.astro-cours.com/og/cover.jpg", width: 1200, height: 630, alt: "Astro Cours" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maîtrises, exaltations, exils & chutes — Les dignités",
    description:
      "Dignités essentielles signe par signe : planète maîtresse, exaltation, exil et chute. Logique astrologique et repères clairs. Découvrez notre cours !",
    images: ["https://www.astro-cours.com/og/cover.jpg"],
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
  rulers: Planet[];
  exaltations?: Planet[];
  detrimentsExtra?: Planet[];
  fallsExtra?: Planet[];
};

const has = <T,>(v: T | undefined | null): v is T => v !== undefined && v !== null;

const pill =
  "rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/90 backdrop-blur-md transition-all hover:bg-white/15 hover:border-white/20";

const card =
  "relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c0c0e] p-8 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-[#111114]";

const softCard =
  "relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0c0c0e] p-10 backdrop-blur-md transition-all duration-300 hover:border-white/20";

const dot =
  "mt-2 h-1.5 w-1.5 shrink-0 rounded-full shadow-[0_0_8px_currentColor]";

const SIGN_GLYPHS: Record<string, string> = {
  belier: "♈",
  taureau: "♉",
  gemeaux: "♊",
  cancer: "♋",
  lion: "♌",
  vierge: "♍",
  balance: "♎",
  scorpion: "♏",
  sagittaire: "♐",
  capricorne: "♑",
  verseau: "♒",
  poissons: "♓",
};

const DIGNITIES_BY_SIGN: Record<string, Dignities> = {
  belier: {
    rulers: ["Mars"],
    exaltations: ["Soleil", "Pluton"],
  },
  taureau: {
    rulers: ["Vénus"],
    exaltations: ["Lune"],
    detrimentsExtra: ["Pluton"],
    fallsExtra: ["Uranus"],
  },
  gemeaux: { rulers: ["Mercure"] },
  cancer: { rulers: ["Lune"], exaltations: ["Jupiter"] },
  lion: {
    rulers: ["Soleil"],
    exaltations: ["Neptune"],
    detrimentsExtra: ["Uranus"],
  },
  vierge: {
    rulers: ["Mercure"],
    exaltations: ["Mercure"],
  },
  balance: { rulers: ["Vénus"], exaltations: ["Saturne"] },
  scorpion: {
    rulers: ["Mars", "Pluton"],
    exaltations: ["Uranus"],
  },
  sagittaire: { rulers: ["Jupiter"] },
  capricorne: { rulers: ["Saturne"], exaltations: ["Mars"] },
  verseau: { rulers: ["Saturne", "Uranus"] },
  poissons: {
    rulers: ["Jupiter", "Neptune"],
    exaltations: ["Vénus"],
    detrimentsExtra: ["Mercure"],
    fallsExtra: ["Mercure"],
  },
};

const MODERN_RULERS: Partial<Record<string, Planet>> = {
  scorpion: "Pluton",
  verseau: "Uranus",
  poissons: "Neptune",
};

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

function meaningDomicile(planet: Planet, signName: string) {
  return `En domicile, ${planet} “est chez elle” : sa fonction s’exprime de façon naturelle, stable et cohérente. Dans ${signName}, cela indique une affinité profonde entre la planète et le style du signe.`;
}

function meaningExaltation(planet: Planet, signName: string) {
  return `En exaltation, ${planet} est “mise en valeur” : elle dispose d’un terrain favorable pour exprimer son meilleur potentiel. Dans ${signName}, son énergie gagne en noblesse, en amplitude ou en efficacité.`;
}

function meaningDetriment(planet: Planet, oppositeSignName: string) {
  return `En exil, ${planet} se trouve dans le signe opposé à son domicile (${oppositeSignName}). La fonction reste possible, mais elle demande davantage d’ajustement, de conscience et de maturité.`;
}

function meaningFall(planet: Planet, oppositeOfExaltSignName: string) {
  return `En chute, ${planet} est dans le signe opposé à son exaltation (${oppositeOfExaltSignName}). C’est un terrain d’apprentissage : la planète progresse en se simplifiant et en devenant plus consciente.`;
}

function whyRuler(planet: Planet, element?: string, mode?: string) {
  const el = element ? `l’élément ${element}` : "l’élément du signe";
  const mo = mode ? `le mode ${mode}` : "le mode du signe";

  const base =
    `Pourquoi ${planet} ? Parce que la fonction de ${planet} résonne avec ${el} et ${mo} : elle donne au signe sa méthode d’expression.`;

  const byPlanet: Record<Planet, string> = {
    Soleil:
      " Le Soleil symbolise identité, volonté, rayonnement : il structure le “je” et donne une direction.",
    Lune:
      " La Lune symbolise besoins, sécurité, mémoire : elle parle d’attachement, de soin et de régulation émotionnelle.",
    Mercure:
      " Mercure symbolise pensée, langage, liens : il gouverne l’apprentissage, l’analyse et les échanges.",
    Vénus:
      " Vénus symbolise valeur, désir, harmonie : elle parle de relation, d’art, d’attirance et de plaisir.",
    Mars:
      " Mars symbolise action, désir, combat : il gouverne l’initiative, le courage et la capacité à trancher.",
    Jupiter:
      " Jupiter symbolise expansion, sens, confiance : il gouverne la croissance, la vision et la quête de sens.",
    Saturne:
      " Saturne symbolise structure, limite, responsabilité : il gouverne la consolidation, le temps et la rigueur.",
    Uranus:
      " Uranus symbolise rupture, liberté, innovation : il gouverne l’indépendance et la réinvention.",
    Neptune:
      " Neptune symbolise inspiration, idéal, dissolution : il gouverne l’empathie, le rêve et la porosité.",
    Pluton:
      " Pluton symbolise intensité, transformation, pouvoir : il gouverne les crises, les mues et la profondeur.",
  };

  return base + byPlanet[planet];
}

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
        glow: "shadow-[0_0_30px_rgba(251,191,36,0.08)]",
        line: "bg-gradient-to-r from-amber-500/20 via-amber-400/60 to-transparent",
        chip: "bg-amber-500/10 text-amber-200 border-amber-400/20",
        dot: "bg-amber-400 text-amber-400",
        title: "text-amber-200",
      };
    case "Terre":
      return {
        border: "border-emerald-400/25",
        glow: "shadow-[0_0_30px_rgba(52,211,153,0.08)]",
        line: "bg-gradient-to-r from-emerald-500/20 via-emerald-400/60 to-transparent",
        chip: "bg-emerald-500/10 text-emerald-200 border-emerald-400/20",
        dot: "bg-emerald-400 text-emerald-400",
        title: "text-emerald-200",
      };
    case "Air":
      return {
        border: "border-sky-400/25",
        glow: "shadow-[0_0_30px_rgba(56,189,248,0.08)]",
        line: "bg-gradient-to-r from-sky-500/20 via-sky-400/60 to-transparent",
        chip: "bg-sky-500/10 text-sky-200 border-sky-400/20",
        dot: "bg-sky-400 text-sky-400",
        title: "text-sky-200",
      };
    case "Eau":
      return {
        border: "border-violet-400/25",
        glow: "shadow-[0_0_30px_rgba(167,139,250,0.08)]",
        line: "bg-gradient-to-r from-violet-500/20 via-violet-400/60 to-transparent",
        chip: "bg-violet-500/10 text-violet-200 border-violet-400/20",
        dot: "bg-violet-400 text-violet-400",
        title: "text-violet-200",
      };
    default:
      return {
        border: "border-white/10",
        glow: "",
        line: "bg-gradient-to-r from-white/10 via-white/40 to-transparent",
        chip: "bg-white/5 text-white border-white/10",
        dot: "bg-white text-white",
        title: "text-white",
      };
  }
}

function uniqPlanets(list: Planet[]) {
  return Array.from(new Set(list));
}

const FALL_BY_SIGN: Partial<Record<string, Planet[]>> = {};
for (const [signSlug, d] of Object.entries(DIGNITIES_BY_SIGN)) {
  const exalts = d.exaltations ?? [];
  if (!exalts.length) continue;

  const fallSlug = OPPOSITE_SIGN[signSlug];
  const existing = FALL_BY_SIGN[fallSlug] ?? [];
  FALL_BY_SIGN[fallSlug] = uniqPlanets([...existing, ...exalts]);
}

function signNameBySlug(slug: string) {
  return SIGNS.find((x) => getSlug(x) === slug)?.name ?? slug;
}

function PlanetPills({ planets }: { planets: Planet[] }) {
  if (!planets.length) {
    return <p className="mt-3 font-serif text-3xl text-white/50">—</p>;
  }

  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {planets.map((pl) => (
        <span key={pl} className={pill}>
          {pl}
        </span>
      ))}
    </div>
  );
}

function SectionTitle({
  children,
  id,
  icon: Icon,
}: {
  children: React.ReactNode;
  id: string;
  icon?: React.ElementType;
}) {
  return (
    <div className="group mb-12 mt-28 flex items-center gap-5 scroll-mt-28" id={id}>
      <div
        aria-hidden="true"
        className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/20 to-transparent text-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.15)] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
      >
        {Icon ? <Icon size={26} strokeWidth={1.5} /> : <Sparkles size={26} strokeWidth={1.5} />}
      </div>
      <h2 className="font-serif text-3xl tracking-tight text-white md:text-5xl">
        {children}
      </h2>
      <div className="ml-4 h-px flex-1 bg-gradient-to-r from-amber-500/30 via-amber-500/5 to-transparent" />
    </div>
  );
}

export default function MaitrisesCoursPage() {
  return (
    <>
      <main id="main-content" className="relative mx-auto max-w-7xl px-6 pb-24 text-slate-200 selection:bg-amber-500/30">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-10%] top-[-5%] h-[800px] w-[800px] rounded-full bg-amber-600/10 blur-[150px]" />
          <div className="absolute right-[-10%] top-[30%] h-[700px] w-[700px] rounded-full bg-violet-600/10 blur-[150px]" />
          <div className="absolute left-[20%] bottom-[-10%] h-[600px] w-[600px] rounded-full bg-sky-600/10 blur-[150px]" />
        </div>

        <header className="relative mb-28 pt-16 text-center md:text-left">
          <div className="flex flex-col items-center gap-16 lg:flex-row">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-amber-300 backdrop-blur-md">
                <Star size={16} className="animate-pulse text-amber-300" aria-hidden="true" />
                <span>Cours d’astrologie — Dignités essentielles</span>
              </div>

              <h1 className="mt-8 font-serif text-5xl font-light leading-[1.05] text-white md:text-6xl lg:text-[5rem]">
                Maîtrises, exaltations, exils & chutes
              </h1>

              <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-slate-300 md:text-xl">
                Comprendre les dignités planétaires, ce n’est pas réciter un tableau :
                c’est saisir la logique profonde entre une planète, un signe, un style
                d’expression et un terrain d’apprentissage.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Domicile = terrain naturel",
                  "Exaltation = mise en valeur",
                  "Exil = adaptation",
                  "Chute = apprentissage",
                ].map((x) => (
                  <span
                    key={x}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/10"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative flex w-full max-w-lg items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(251,191,36,0.1)] aspect-[4/5]">
              <Image
                src={HeroSrc}
                alt="Illustration symbolique des dignités planétaires"
                fill
                priority
                className="object-cover transition duration-[2s] hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </header>

        <nav aria-label="Sommaire" className="mb-20 flex flex-wrap justify-center gap-3">
          {SIGNS.map((s) => (
            <a key={getSlug(s)} href={`#${getSlug(s)}`} className={pill}>
              {s.name}
            </a>
          ))}
        </nav>

        <section className="max-w-6xl mx-auto">
          <SectionTitle id="bases" icon={BookOpen}>
            Bases pédagogiques
          </SectionTitle>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className={softCard}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
                <Crown size={14} />
                Définitions rapides
              </div>

              <ul className="space-y-4 text-[15px] leading-relaxed text-slate-300">
                <li><span className="text-white">Domicile</span> : terrain naturel, expression fluide.</li>
                <li><span className="text-white">Exaltation</span> : potentiel fort, mise en valeur.</li>
                <li><span className="text-white">Exil</span> : opposé au domicile, adaptation nécessaire.</li>
                <li><span className="text-white">Chute</span> : opposé à l’exaltation, apprentissage et sobriété.</li>
              </ul>
            </div>

            <div className={softCard}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-sky-300">
                <Shield size={14} />
                Comment l’enseigner
              </div>

              <p className="text-[15px] leading-relaxed text-slate-300">
                Une dignité ne juge pas une personne. Elle décrit la facilité, la noblesse,
                la tension ou le travail nécessaire pour qu’une fonction planétaire s’exprime
                pleinement. Dans un thème réel, on nuance toujours avec la maison, les aspects,
                le maître, le contexte et le niveau d’intégration.
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto mt-8 max-w-6xl space-y-10">
          {SIGNS.map((sign) => {
            const slug = getSlug(sign);
            const glyph = SIGN_GLYPHS[slug] ?? "✦";
            const element = getElement(sign);
            const mode = getMode(sign);
            const polarite = getPolarite(sign);
            const a = elementAccent(element);

            const d = DIGNITIES_BY_SIGN[slug];
            const rulers = d?.rulers ?? [];
            const exaltations = d?.exaltations ?? [];

            const oppositeSlug = OPPOSITE_SIGN[slug];
            const oppositeName = signNameBySlug(oppositeSlug);

            const oppRulers = DIGNITIES_BY_SIGN[oppositeSlug]?.rulers ?? [];
            const detriments = uniqPlanets([
              ...oppRulers,
              ...(d?.detrimentsExtra ?? []),
            ]);

            const fallsFromTable = FALL_BY_SIGN[slug] ?? [];
            const falls = uniqPlanets([...(fallsFromTable ?? []), ...(d?.fallsExtra ?? [])]);

            const modernLabel = MODERN_RULERS[slug];

            return (
              <section
                key={slug}
                id={slug}
                className={`${softCard} scroll-mt-28 ${a.border} ${a.glow}`}
              >
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute right-8 top-6 font-serif text-7xl md:text-8xl ${a.title} opacity-[0.07]`}
                >
                  {glyph}
                </div>

                <div className={`mb-5 h-1 w-full rounded-full ${a.line}`} />

                <div className="flex flex-wrap items-start justify-between gap-6 border-b border-white/10 pb-6">
                  <div className="flex items-start gap-5">
                    <div
                      aria-hidden="true"
                      className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border ${a.border} bg-white/5 text-3xl md:text-4xl ${a.title} shadow-[0_0_20px_rgba(255,255,255,0.04)]`}
                    >
                      {glyph}
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                        Dignités du signe
                      </p>

                      <h2 className={`mt-2 font-serif text-4xl md:text-5xl ${a.title}`}>
                        {sign.name}
                      </h2>

                      <div className="mt-4 flex flex-wrap gap-2 text-sm">
                        {has(element) && (
                          <span className={`rounded-full border px-3 py-1 ${a.chip}`}>
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
                        <p className="mt-4 text-sm leading-relaxed text-slate-400">
                          Note : certaines écoles ajoutent un <span className="text-white">maître moderne</span> ici : {modernLabel}.
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <Link
                    href={`/signes/${slug}`}
                    className={`rounded-full border ${a.border} bg-white/5 px-5 py-2 text-sm text-white transition-all hover:bg-white/10`}
                  >
                    Voir la page du signe →
                  </Link>
                </div>

                <div className="mt-8 grid gap-6 xl:grid-cols-2">
                  <article className={`rounded-[2rem] border ${a.border} bg-black/20 p-6`}>
                    <div className="mb-4 flex items-center gap-3">
                      <Crown size={18} className={a.title} />
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                        Maîtrise
                      </p>
                    </div>

                    <PlanetPills planets={rulers} />

                    {rulers.length ? (
                      <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-300">
                        {rulers.map((pl) => (
                          <div key={pl} className="rounded-[1.5rem] border border-white/10 bg-[#111114] p-5">
                            <p>{meaningDomicile(pl, sign.name)}</p>
                            <p className="mt-3 text-slate-400">
                              <span className="text-white">Pourquoi ?</span> {whyRuler(pl, element, mode)}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </article>

                  <article className={`rounded-[2rem] border ${a.border} bg-black/20 p-6`}>
                    <div className="mb-4 flex items-center gap-3">
                      <Star size={18} className={a.title} />
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                        Exaltation
                      </p>
                    </div>

                    <PlanetPills planets={exaltations} />

                    {exaltations.length ? (
                      <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-300">
                        {exaltations.map((pl) => (
                          <div key={pl} className="rounded-[1.5rem] border border-white/10 bg-[#111114] p-5">
                            <p>{meaningExaltation(pl, sign.name)}</p>
                            <p className="mt-3 text-slate-400">
                              <span className="text-white">Pourquoi ?</span>{" "}
                              En exaltation, la planète trouve un cadre qui amplifie sa meilleure expression : elle gagne en portée, mais demande une direction claire.
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="mt-5 text-sm text-slate-400">Aucune exaltation retenue ici dans cette grille.</p>
                    )}
                  </article>

                  <article className={`rounded-[2rem] border ${a.border} bg-black/20 p-6`}>
                    <div className="mb-4 flex items-center gap-3">
                      <Orbit size={18} className={a.title} />
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                        Exil
                      </p>
                    </div>

                    <PlanetPills planets={detriments} />

                    {detriments.length ? (
                      <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-300">
                        {detriments.map((pl) => (
                          <div key={pl} className="rounded-[1.5rem] border border-white/10 bg-[#111114] p-5">
                            <p>{meaningDetriment(pl, oppositeName)}</p>
                            <p className="mt-3 text-slate-400">
                              <span className="text-white">Pourquoi ?</span>{" "}
                              Le signe demande ici une méthode différente de celle du domicile. L’expression devient moins immédiate, mais souvent plus formatrice.
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </article>

                  <article className={`rounded-[2rem] border ${a.border} bg-black/20 p-6`}>
                    <div className="mb-4 flex items-center gap-3">
                      <Flame size={18} className={a.title} />
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                        Chute
                      </p>
                    </div>

                    <PlanetPills planets={falls} />

                    {falls.length ? (
                      <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-300">
                        {falls.map((pl) => {
                          const exaltSignSlug = Object.keys(DIGNITIES_BY_SIGN).find((s) =>
                            (DIGNITIES_BY_SIGN[s].exaltations ?? []).includes(pl)
                          );
                          const exaltSignName = exaltSignSlug
                            ? signNameBySlug(exaltSignSlug)
                            : "son signe d’exaltation";

                          return (
                            <div key={pl} className="rounded-[1.5rem] border border-white/10 bg-[#111114] p-5">
                              <p>{meaningFall(pl, exaltSignName)}</p>
                              <p className="mt-3 text-slate-400">
                                <span className="text-white">Pourquoi ?</span>{" "}
                                La chute invite à dépouiller, simplifier, discipliner. La planète s’y affine avec le temps et l’expérience.
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <p className="mt-5 text-sm text-slate-400">Aucune chute retenue ici dans cette grille.</p>
                    )}
                  </article>
                </div>
              </section>
            );
          })}
        </div>

        <footer className="mt-32 border-t border-white/10 pt-16 flex flex-col items-center gap-8">
          <p className="max-w-2xl text-center text-sm leading-relaxed text-slate-400">
            Prochaine étape : relier ces dignités aux <span className="text-white">maisons</span>, aux{" "}
            <span className="text-white">aspects</span> et au niveau réel d’intégration dans le thème.
          </p>

          <Link
            href="/blog"
            className="group flex items-center gap-4 rounded-full border border-amber-500/30 bg-amber-500/10 px-8 py-5 text-[15px] font-bold uppercase tracking-widest text-amber-300 transition-all hover:border-amber-400 hover:bg-amber-500/20 focus:ring-2 focus:ring-amber-500"
          >
            <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-2" />
            Explorer le blog
          </Link>

          <div className="flex flex-wrap gap-3">
            <Link className={pill} href="/#zodiaque">
              Signes
            </Link>
            <Link className={pill} href="/#planetes">
              Planètes
            </Link>
            <Link className={pill} href="/#maisons">
              Maisons
            </Link>
          </div>
        </footer>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "Maîtrises, exaltations, exils & chutes — Dignités planétaires",
              description:
                "Pour chaque signe : maître(s), exaltation(s), exil(s) et chute(s), avec explication et logique symbolique.",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://www.astro-cours.com/maitrises",
              },
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
    </>
  );
}