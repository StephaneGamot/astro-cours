import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Star,
  Orbit,
  Compass,
  Layers,
  ArrowLeft,
  HelpCircle,
  MoonStar,
  Target,
  CircleDot,
} from "lucide-react";

import HeroSrc from "@/public/images/points-fictifs.webp";

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
    images: [
      {
        url: "/images/points-fictifs.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const pill =
  "rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/90 backdrop-blur-md transition-all hover:bg-white/15 hover:border-white/20";

const card =
  "relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c0c0e] p-8 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-[#111114]";

const softCard =
  "relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0c0c0e] p-10 backdrop-blur-md transition-all duration-300 hover:border-white/20";

const dot =
  "mt-2 h-1.5 w-1.5 shrink-0 rounded-full shadow-[0_0_8px_currentColor]";

type AccentKind = "core" | "math" | "angle" | "destiny" | "method";

function accent(kind: AccentKind) {
  switch (kind) {
    case "core":
      return {
        border: "border-emerald-400/25",
        glow: "shadow-[0_0_30px_rgba(52,211,153,0.08)]",
        dot: "bg-emerald-400 text-emerald-400",
        line: "bg-gradient-to-r from-emerald-500/20 via-emerald-400/60 to-transparent",
        text: "text-emerald-200",
        badge: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
      };
    case "math":
      return {
        border: "border-sky-400/25",
        glow: "shadow-[0_0_30px_rgba(56,189,248,0.08)]",
        dot: "bg-sky-400 text-sky-400",
        line: "bg-gradient-to-r from-sky-500/20 via-sky-400/60 to-transparent",
        text: "text-sky-200",
        badge: "border-sky-500/30 bg-sky-500/10 text-sky-300",
      };
    case "angle":
      return {
        border: "border-violet-400/25",
        glow: "shadow-[0_0_30px_rgba(167,139,250,0.08)]",
        dot: "bg-violet-400 text-violet-400",
        line: "bg-gradient-to-r from-violet-500/20 via-violet-400/60 to-transparent",
        text: "text-violet-200",
        badge: "border-violet-500/30 bg-violet-500/10 text-violet-300",
      };
    case "destiny":
      return {
        border: "border-amber-400/25",
        glow: "shadow-[0_0_30px_rgba(251,191,36,0.08)]",
        dot: "bg-amber-400 text-amber-400",
        line: "bg-gradient-to-r from-amber-500/20 via-amber-400/60 to-transparent",
        text: "text-amber-200",
        badge: "border-amber-500/30 bg-amber-500/10 text-amber-300",
      };
    default:
      return {
        border: "border-fuchsia-400/25",
        glow: "shadow-[0_0_30px_rgba(232,121,249,0.08)]",
        dot: "bg-fuchsia-400 text-fuchsia-400",
        line: "bg-gradient-to-r from-fuchsia-500/20 via-fuchsia-400/60 to-transparent",
        text: "text-fuchsia-200",
        badge: "border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-300",
      };
  }
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
    "Pas des “planètes” : points, angles, calculs",
    "Maison d’abord, signe ensuite",
    "Aspects = déclencheurs",
    "Transits = timing",
  ];

  return (
    <>
      <main id="main-content" className="relative mx-auto max-w-7xl px-6 pb-24 text-slate-200 selection:bg-amber-500/30">
        {/* BACKGROUND GLOWS */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-10%] top-[-5%] h-[800px] w-[800px] rounded-full bg-amber-600/10 blur-[150px]" />
          <div className="absolute right-[-10%] top-[25%] h-[700px] w-[700px] rounded-full bg-violet-600/10 blur-[150px]" />
          <div className="absolute left-[20%] bottom-[-10%] h-[600px] w-[600px] rounded-full bg-sky-600/10 blur-[150px]" />
        </div>

        {/* HERO */}
        <header className="relative mb-28 pt-16 text-center md:text-left">
          <div className="flex flex-col items-center gap-16 lg:flex-row">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-amber-300 backdrop-blur-md">
                <Star size={16} className="animate-pulse text-amber-300" aria-hidden="true" />
                <span>Cours d’astrologie — Techniques de lecture</span>
              </div>

              <h1 className="mt-8 font-serif text-5xl font-light leading-[1.05] text-white md:text-6xl lg:text-[5rem]">
                Les points fictifs
              </h1>

              <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-slate-300 md:text-xl">
                Les points fictifs sont des repères subtils mais puissants :
                angles, points calculés, axes karmiques, zones de déclenchement
                relationnel ou d’orientation intérieure. Ce cours propose une lecture
                claire, hiérarchisée et vraiment exploitable.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {heroHighlights.map((x) => (
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
                alt="Illustration symbolique des points fictifs en astrologie"
                fill
                priority
                className="object-cover transition duration-[2s] hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </header>

        {/* SOMMAIRE */}
        <nav aria-label="Sommaire" className="mb-20 flex flex-wrap justify-center gap-3">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className={pill}>
              {s.label}
            </a>
          ))}
        </nav>

        {/* DEFINITION */}
        <section className="max-w-6xl mx-auto">
          <SectionTitle id="definition" icon={Compass}>
            Définition
          </SectionTitle>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className={`${softCard} ${accent("core").border} ${accent("core").glow}`}>
              <div
                className={`mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] ${accent("core").badge}`}
              >
                <CircleDot size={14} />
                Ce que c’est
              </div>

              <ul className="space-y-4 text-[15px] leading-relaxed text-slate-300">
                {[
                  "Un point fictif n’est pas un corps céleste : c’est un repère géométrique, un axe ou un point calculé.",
                  "Il décrit une fonction : angle de manifestation, point de flux, déclencheur relationnel ou axe d’évolution.",
                  "On le lit comme une structure symbolique : signe, maison, maître, aspects, activation temporelle.",
                ].map((x) => (
                  <li key={x} className="flex gap-3">
                    <span className={`${dot} ${accent("core").dot}`} />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`${softCard} ${accent("method").border} ${accent("method").glow}`}>
              <div
                className={`mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] ${accent("method").badge}`}
              >
                <Target size={14} />
                Ce que ce n’est pas
              </div>

              <ul className="space-y-4 text-[15px] leading-relaxed text-slate-300">
                {[
                  "Ce n’est pas une planète cachée ni un objet autonome.",
                  "Ce n’est pas un verdict absolu : sa lecture dépend du thème global.",
                  "Ce n’est pas un remplacement des fondamentaux : il complète, il ne remplace pas.",
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

        {/* CATEGORIES */}
        <section className="max-w-6xl mx-auto">
          <SectionTitle id="classification" icon={Layers}>
            Catégories de points fictifs
          </SectionTitle>

          <div className="grid gap-6 md:grid-cols-2">
            <article className={`${card} ${accent("angle").border} ${accent("angle").glow}`}>
              <div className={`mb-4 h-1 w-full rounded-full ${accent("angle").line}`} />
              <h3 className="font-serif text-2xl text-white">Angles / axes</h3>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-300">
                <li>ASC / DSC : entrée dans la vie et relation à l’autre.</li>
                <li>MC / IC : vocation, statut, racines et base intérieure.</li>
                <li>Vertex / Anti-Vertex : événements et rencontres marquantes.</li>
              </ul>
            </article>

            <article className={`${card} ${accent("math").border} ${accent("math").glow}`}>
              <div className={`mb-4 h-1 w-full rounded-full ${accent("math").line}`} />
              <h3 className="font-serif text-2xl text-white">Points calculés</h3>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-300">
                <li>Part de Fortune : fluidité, rendement, zone de circulation naturelle.</li>
                <li>Part d’Esprit : direction mentale, visée, stratégie intérieure.</li>
                <li>Autres parts arabes : intéressantes, mais à lire avec rigueur.</li>
              </ul>
            </article>

            <article className={`${card} ${accent("destiny").border} ${accent("destiny").glow}`}>
              <div className={`mb-4 h-1 w-full rounded-full ${accent("destiny").line}`} />
              <h3 className="font-serif text-2xl text-white">Facteurs symboliques modernes</h3>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-300">
                <li>Chiron : blessure, compétence, transmission.</li>
                <li>Lilith : intensité, refus, désir non domestiqué.</li>
                <li>Nœuds lunaires : croissance, trajectoire, automatismes du passé.</li>
              </ul>
            </article>

            <article className={`${card} ${accent("method").border} ${accent("method").glow}`}>
              <div className={`mb-4 h-1 w-full rounded-full ${accent("method").line}`} />
              <h3 className="font-serif text-2xl text-white">Règle pro</h3>
              <p className="mt-5 text-sm leading-relaxed text-slate-300">
                Plus le point est structurel, plus il est central. Plus il est calculé ou symbolique,
                plus il devient pertinent quand il est relié à une maison, un maître et des aspects précis.
              </p>
            </article>
          </div>
        </section>

        {/* POINTS MAJEURS */}
        <section className="max-w-6xl mx-auto">
          <SectionTitle id="points" icon={Orbit}>
            Points majeurs à connaître
          </SectionTitle>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                kind: "angle" as AccentKind,
                title: "Vertex",
                subtitle: "Rencontres marquantes / tournants relationnels",
                points: [
                  "Souvent activé lors d’événements relationnels importants.",
                  "La maison montre le domaine où la vie provoque une rencontre-clé.",
                  "Les aspects à Vénus, Mars ou la Lune renforcent fortement l’impact vécu.",
                ],
              },
              {
                kind: "math" as AccentKind,
                title: "Part de Fortune",
                subtitle: "Flux, rendement, aisance naturelle",
                points: [
                  "À lire comme un point de circulation ou d’efficacité.",
                  "La maison indique le domaine, le signe montre le style.",
                  "Le maître du signe explique comment l’activer concrètement.",
                ],
              },
              {
                kind: "destiny" as AccentKind,
                title: "Chiron",
                subtitle: "Blessure, compétence, transmission",
                points: [
                  "Zone sensible mais très formatrice.",
                  "Aspect à Soleil, Lune ou ASC : vécu profondément identitaire.",
                  "Excellent point d’analyse en pédagogie, accompagnement ou soin.",
                ],
              },
              {
                kind: "core" as AccentKind,
                title: "ASC / MC",
                subtitle: "Manifestation et direction",
                points: [
                  "ASC : posture, tempérament, manière d’entrer dans le monde.",
                  "MC : trajectoire, visibilité, vocation et sommet de thème.",
                  "Tout transit lourd sur ces points devient généralement concret.",
                ],
              },
            ].map((x) => {
              const a = accent(x.kind);
              return (
                <article key={x.title} className={`${card} ${a.border} ${a.glow}`}>
                  <div className={`mb-4 h-1 w-full rounded-full ${a.line}`} />
                  <h3 className={`font-serif text-3xl ${a.text}`}>{x.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{x.subtitle}</p>
                  <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-300">
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

        {/* METHODE */}
        <section className="max-w-6xl mx-auto">
          <SectionTitle id="methode" icon={Sparkles}>
            Méthode pro
          </SectionTitle>

          <div className={`${softCard} ${accent("method").border} ${accent("method").glow}`}>
            <ol className="grid gap-4 md:grid-cols-2">
              {[
                {
                  t: "1) Maison d’abord",
                  d: "La maison donne le domaine de vie. Sans elle, la lecture devient abstraite.",
                },
                {
                  t: "2) Signe ensuite",
                  d: "Le signe colore la posture, la tonalité, la manière dont le point s’exprime.",
                },
                {
                  t: "3) Maître du signe",
                  d: "Le maître explique comment accéder concrètement à la fonction du point.",
                },
                {
                  t: "4) Aspects",
                  d: "Les aspects montrent comment ce point dialogue avec le reste du thème.",
                },
                {
                  t: "5) Timing",
                  d: "Les transits et progressions indiquent quand le point s’active réellement.",
                },
              ].map((x) => (
                <li
                  key={x.t}
                  className="rounded-[1.75rem] border border-white/10 bg-black/20 p-6 transition-all hover:border-white/15"
                >
                  <p className="font-serif text-2xl text-white">{x.t}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{x.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ASPECTS */}
        <section className="max-w-6xl mx-auto">
          <SectionTitle id="aspects" icon={MoonStar}>
            Aspects
          </SectionTitle>

          <div className="grid gap-6 md:grid-cols-2">
            <article className={`${card} ${accent("angle").border} ${accent("angle").glow}`}>
              <div className={`mb-4 h-1 w-full rounded-full ${accent("angle").line}`} />
              <h3 className="font-serif text-2xl text-white">Conjonction</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                La conjonction fusionne la planète et le point. C’est la forme d’activation la plus
                directe et souvent la plus visible psychologiquement.
              </p>
            </article>

            <article className={`${card} ${accent("method").border} ${accent("method").glow}`}>
              <div className={`mb-4 h-1 w-full rounded-full ${accent("method").line}`} />
              <h3 className="font-serif text-2xl text-white">Carré / opposition</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                Les tensions obligent à choisir, réajuster ou mûrir. Sur Vertex, Nœuds, ASC ou MC,
                elles correspondent souvent à des virages structurants.
              </p>
            </article>
          </div>
        </section>

        {/* TRANSITS */}
        <section className="max-w-6xl mx-auto">
          <SectionTitle id="transits" icon={Star}>
            Transits
          </SectionTitle>

          <div className={`${softCard} ${accent("math").border} ${accent("math").glow}`}>
            <ul className="space-y-4 text-[15px] leading-relaxed text-slate-300">
              {[
                "Transits sur ASC / MC : changements visibles dans la vie concrète.",
                "Transits sur Vertex : rencontres, événements, basculements relationnels.",
                "Transits sur Fortune : opportunités, circulation, réajustement du flux.",
                "Saturne, Uranus ou Pluton sur un point : périodes longues, décisives et structurantes.",
              ].map((x) => (
                <li key={x} className="flex gap-3">
                  <span className={`${dot} ${accent("math").dot}`} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PIEGES */}
        <section className="max-w-6xl mx-auto">
          <SectionTitle id="piges" icon={Target}>
            Pièges & bonnes pratiques
          </SectionTitle>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className={`${softCard} ${accent("destiny").border} ${accent("destiny").glow}`}>
              <div
                className={`mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] ${accent("destiny").badge}`}
              >
                Erreurs fréquentes
              </div>

              <ul className="space-y-4 text-[15px] leading-relaxed text-slate-300">
                {[
                  "Lire un point sans maison : la lecture devient vague.",
                  "Surinterpréter un facteur secondaire comme s’il remplaçait une planète.",
                  "Oublier le maître du signe, donc la véritable clé d’accès.",
                  "Chercher une prophétie au lieu d’un mécanisme symbolique lisible.",
                ].map((x) => (
                  <li key={x} className="flex gap-3">
                    <span className={`${dot} ${accent("destiny").dot}`} />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`${softCard} ${accent("core").border} ${accent("core").glow}`}>
              <div
                className={`mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] ${accent("core").badge}`}
              >
                Bonnes pratiques
              </div>

              <ul className="space-y-4 text-[15px] leading-relaxed text-slate-300">
                {[
                  "Toujours suivre : maison → signe → maître → aspects → timing.",
                  "Relier la lecture à des comportements et domaines concrets.",
                  "Garder une hiérarchie entre points structurants et points secondaires.",
                  "Croiser les transits avec les progressions si tu veux raffiner le timing.",
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
        <section className="max-w-6xl mx-auto">
          <SectionTitle id="faq" icon={HelpCircle}>
            FAQ
          </SectionTitle>

          <div className="grid gap-6 lg:grid-cols-2">
            {[
              {
                q: "Est-ce que Chiron est un point fictif ?",
                a: "Techniquement non : c’est un corps. Mais dans la pratique moderne, il est souvent traité comme un facteur symbolique proche d’un point clé.",
              },
              {
                q: "La Part de Fortune est-elle fiable ?",
                a: "Oui, à condition d’être cohérent sur la méthode et de toujours la relier à la maison, au signe, au maître et aux aspects.",
              },
              {
                q: "Vertex = destin ?",
                a: "Mieux vaut parler de rencontres marquantes, de basculements ou d’événements relationnels significatifs, surtout lors d’activations.",
              },
              {
                q: "Faut-il tous les lire ?",
                a: "Non. Il faut prioriser : ASC/MC d’abord, puis Nœuds, Chiron, Lilith selon le sujet, puis Vertex et Fortune en complément.",
              },
            ].map((x) => (
              <article
                key={x.q}
                className={`${card} ${accent("destiny").border} ${accent("destiny").glow}`}
              >
                <div className={`mb-4 h-1 w-full rounded-full ${accent("destiny").line}`} />
                <h3 className="font-serif text-2xl text-white">{x.q}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-300">{x.a}</p>
              </article>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-32 border-t border-white/10 pt-16 flex flex-col items-center gap-8">
          <Link
            href="/aspects"
            className="group flex items-center gap-4 rounded-full border border-amber-500/30 bg-amber-500/10 px-8 py-5 text-[15px] font-bold uppercase tracking-widest text-amber-300 transition-all hover:border-amber-400 hover:bg-amber-500/20 focus:ring-2 focus:ring-amber-500"
          >
            <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-2" />
            Explorer les aspects
          </Link>

          <div className="flex flex-wrap gap-3">
            <Link className={pill} href="/aspects">
              Aspects
            </Link>
            <Link className={pill} href="/#maisons">
              Maisons
            </Link>
            <Link className={pill} href="/transits">
              Transits
            </Link>
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
                "Cours pro sur les points fictifs : définition, méthode, points majeurs, lecture par maison, signe, aspects et transits.",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://www.astro-cours.com/points-fictifs",
              },
              author: { "@type": "Person", name: "Stéphane Gamot" },
              publisher: { "@type": "Organization", name: "Astro-Cours" },
            }),
          }}
        />
      </main>
    </>
  );
}