import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Sun,
  Moon,
  Compass,
  Layers,
  ArrowLeft,
  Clock3,
  HelpCircle,
  BookOpen,
  Star,
} from "lucide-react";

import data from "../../../data/revolution-solaire.details.json";
import HeroSrc from "./../../../public/images/revolution-solaire.webp";

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
    siteName: "Astro-Cours",
    type: "article",
    images: [
      {
        url: "/images/revolution-solaire.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: RS.meta.title,
    description: RS.meta.description,
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

function accent(kind: "sun" | "moon" | "angle" | "method" | "time") {
  switch (kind) {
    case "sun":
      return {
        border: "border-amber-500/30",
        glow: "shadow-[0_0_30px_rgba(245,158,11,0.08)]",
        dot: "bg-amber-400 text-amber-400",
        line: "bg-gradient-to-r from-amber-500/20 via-amber-400/60 to-transparent",
        title: "text-amber-200",
        badge: "border-amber-500/30 bg-amber-500/10 text-amber-300",
      };
    case "moon":
      return {
        border: "border-sky-400/30",
        glow: "shadow-[0_0_30px_rgba(56,189,248,0.08)]",
        dot: "bg-sky-400 text-sky-400",
        line: "bg-gradient-to-r from-sky-500/20 via-sky-400/60 to-transparent",
        title: "text-sky-200",
        badge: "border-sky-500/30 bg-sky-500/10 text-sky-300",
      };
    case "time":
      return {
        border: "border-fuchsia-500/30",
        glow: "shadow-[0_0_30px_rgba(217,70,239,0.08)]",
        dot: "bg-fuchsia-400 text-fuchsia-400",
        line: "bg-gradient-to-r from-fuchsia-500/20 via-fuchsia-400/60 to-transparent",
        title: "text-fuchsia-200",
        badge: "border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-300",
      };
    case "angle":
      return {
        border: "border-emerald-500/30",
        glow: "shadow-[0_0_30px_rgba(16,185,129,0.08)]",
        dot: "bg-emerald-400 text-emerald-400",
        line: "bg-gradient-to-r from-emerald-500/20 via-emerald-400/60 to-transparent",
        title: "text-emerald-200",
        badge: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
      };
    default:
      return {
        border: "border-white/20",
        glow: "shadow-[0_0_30px_rgba(255,255,255,0.03)]",
        dot: "bg-white text-white",
        line: "bg-gradient-to-r from-white/10 via-white/40 to-transparent",
        title: "text-white",
        badge: "border-white/20 bg-white/10 text-white",
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

export default function RevolutionSolairePage() {
  const sections = [
    { id: "definition", label: "Définition" },
    { id: "origine", label: "Origine & Calcul" },
    { id: "lieu", label: "Où la calculer ?" },
    { id: "temps", label: "Maîtres du temps" },
    { id: "methode", label: "Méthode pro" },
    { id: "piliers", label: "Piliers de lecture" },
    { id: "exemples", label: "Exemples" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: RS.meta.title,
              description: RS.meta.description,
              image: "https://astro-cours.com/images/revolution-solaire.webp",
              author: { "@type": "Organization", name: "Astro-Cours" },
              publisher: {
                "@type": "Organization",
                name: "Astro-Cours",
                logo: {
                  "@type": "ImageObject",
                  url: "https://astro-cours.com/logo.png",
                },
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": RS.meta.canonical,
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: RS.faq.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.a,
                },
              })),
            },
          ]),
        }}
      />

      <main className="relative mx-auto max-w-7xl px-6 pb-24 text-slate-200 selection:bg-amber-500/30" id="main-content">
        {/* BACKGROUND GLOWS */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-10%] top-[-5%] h-[800px] w-[800px] rounded-full bg-amber-600/10 blur-[150px]" />
          <div className="absolute right-[-10%] top-[30%] h-[700px] w-[700px] rounded-full bg-fuchsia-600/10 blur-[150px]" />
          <div className="absolute left-[20%] bottom-[-10%] h-[600px] w-[600px] rounded-full bg-sky-600/10 blur-[150px]" />
        </div>

        {/* HERO */}
        <header className="relative mb-28 pt-16 text-center md:text-left">
          <div className="flex flex-col items-center gap-16 lg:flex-row">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-amber-300 backdrop-blur-md">
                <Star size={16} className="animate-pulse text-amber-300" aria-hidden="true" />
                <span>{RS.hero.badge}</span>
              </div>

              <h1 className="mt-8 font-serif text-5xl font-light leading-[1.05] text-white md:text-6xl lg:text-[5rem]">
                {RS.hero.title}
              </h1>

              <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-slate-300 md:text-xl">
                {RS.hero.subtitle}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {RS.hero.highlights.map((x) => (
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
                alt="Illustration symbolique de la révolution solaire"
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

        {/* DÉFINITION */}
        <section className="max-w-6xl mx-auto">
          <SectionTitle id="definition" icon={BookOpen}>
            Définition
          </SectionTitle>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className={`${softCard} ${accent("method").border} ${accent("method").glow}`}>
              <div
                className={`mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] ${accent("method").badge}`}
              >
                <Sparkles size={14} />
                Résumé
              </div>

              <ul className="space-y-4 text-[15px] leading-relaxed text-slate-300">
                {RS.definition.resume.map((x) => (
                  <li key={x} className="flex gap-3">
                    <span className={`${dot} ${accent("method").dot}`} />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`${softCard} ${accent("angle").border} ${accent("angle").glow}`}>
              <div
                className={`mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] ${accent("angle").badge}`}
              >
                <Compass size={14} />
                Ce que ce n’est pas
              </div>

              <ul className="space-y-4 text-[15px] leading-relaxed text-slate-300">
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

        {/* MÉTHODE */}
        <section className="max-w-6xl mx-auto">
          <SectionTitle id="methode" icon={Layers}>
            Méthode pro
          </SectionTitle>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className={`${card} ${accent("method").border} ${accent("method").glow}`}>
              <div className={`mb-4 h-1 w-full rounded-full ${accent("method").line}`} />
              <h3 className="font-serif text-2xl text-white">Règles d’or</h3>
              <ul className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-300">
                {RS.methode.reglesOr.map((x) => (
                  <li key={x} className="flex gap-3">
                    <span className={`${dot} ${accent("method").dot}`} />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`${card} ${accent("moon").border} ${accent("moon").glow}`}>
              <div className={`mb-4 h-1 w-full rounded-full ${accent("moon").line}`} />
              <h3 className="font-serif text-2xl text-white">Checklist</h3>
              <ul className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-300">
                {RS.methode.checklist.map((x) => (
                  <li key={x} className="flex gap-3">
                    <span className={`${dot} ${accent("moon").dot}`} />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={`${softCard} mt-8 ${accent("sun").border} ${accent("sun").glow}`}>
            <div
              className={`mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] ${accent("sun").badge}`}
            >
              <Sun size={14} />
              Orbes recommandés
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {RS.methode.orbes.recommandes.map((o) => (
                <div
                  key={o.label}
                  className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5 transition-all hover:border-amber-500/20"
                >
                  <p className="text-sm text-slate-300">{o.label}</p>
                  <p className="mt-3 inline-flex rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-medium text-slate-200">
                    {o.orbe}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PILIERS */}
        <section className="max-w-6xl mx-auto">
          <SectionTitle id="piliers" icon={Sun}>
            Piliers de lecture
          </SectionTitle>

          <div className="grid gap-6">
            {RS.sections.map((s) => {
              const a =
                s.slug === "soleil"
                  ? accent("sun")
                  : s.slug === "lune"
                    ? accent("moon")
                    : s.slug === "angles"
                      ? accent("angle")
                      : accent("method");

              return (
                <article key={s.slug} className={`${softCard} ${a.border} ${a.glow}`}>
                  <div className={`mb-5 h-1 w-full rounded-full ${a.line}`} />
                  <h3 className={`font-serif text-3xl ${a.title}`}>{s.title}</h3>
                  <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-slate-300">
                    {s.why}
                  </p>

                  <div className="mt-8 grid gap-5 sm:grid-cols-2">
                    <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-6">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                        Points clés
                      </p>
                      <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
                        {s.points.map((x: string) => (
                          <li key={x} className="flex gap-3">
                            <span className={`${dot} ${a.dot}`} />
                            <span>{x}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-6">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                        À faire
                      </p>
                      <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
                        {s.aFaire.map((x: string) => (
                          <li key={x} className="flex gap-3">
                            <span className={`${dot} ${a.dot}`} />
                            <span>{x}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* EXEMPLES */}
        <section className="max-w-6xl mx-auto">
          <SectionTitle id="exemples" icon={Clock3}>
            Exemples
          </SectionTitle>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {RS.exemples.map((e, i) => (
              <article
                key={e.titre}
                className="group relative rounded-[2rem] border border-white/10 bg-[#09090b] p-8 transition-colors hover:border-amber-500/30"
              >
                <span className="absolute right-6 top-6 text-4xl font-serif text-white/5 transition-colors group-hover:text-amber-500/20">
                  0{i + 1}
                </span>
                <h3 className="pr-8 font-serif text-2xl text-white">{e.titre}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-400">{e.texte}</p>
              </article>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-6xl mx-auto">
          <SectionTitle id="faq" icon={HelpCircle}>
            FAQ
          </SectionTitle>

          <div className="grid gap-6 lg:grid-cols-2">
            {RS.faq.map((x) => (
              <article
                key={x.q}
                className={`${card} ${accent("moon").border} ${accent("moon").glow}`}
              >
                <div className={`mb-4 h-1 w-full rounded-full ${accent("moon").line}`} />
                <h3 className="font-serif text-2xl text-white">{x.q}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-300">{x.a}</p>
              </article>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-32 border-t border-white/10 pt-16 flex flex-col items-center gap-8">
          <Link
            href="/transits"
            className="group flex items-center gap-4 rounded-full border border-amber-500/30 bg-amber-500/10 px-8 py-5 text-[15px] font-bold uppercase tracking-widest text-amber-300 transition-all hover:border-amber-400 hover:bg-amber-500/20 focus:ring-2 focus:ring-amber-500"
          >
            <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-2" />
            Explorer les transits
          </Link>

          <div className="flex flex-wrap justify-center gap-3">
            <Link className={pill} href="/transits">
              Transits
            </Link>
            <Link className={pill} href="/aspects">
              Aspects
            </Link>
            <Link className={pill} href="/#planetes">
              Planètes
            </Link>
          </div>
        </footer>
      </main>
    </>
  );
}