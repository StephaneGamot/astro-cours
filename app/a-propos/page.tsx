import type { Metadata } from "next";
import {
  Sparkles,
  BookOpen,
  GraduationCap,
  Library,
  Compass,
} from "lucide-react";
import { SITE_NAME, absoluteUrl, buildTitle } from "@/lib/seo";

/* ------------------------------------------------------------------ */
/*  SEO                                                               */
/* ------------------------------------------------------------------ */
const CANONICAL = "/a-propos";
const TITLE = "À propos";
const DESCRIPTION =
  "Découvrez le parcours de Stéphane Gamot, passionné d'astrologie depuis plus de 40 ans : de la mythologie grecque à une pratique rigoureuse et pédagogique.";

export const metadata: Metadata = {
  title: buildTitle(TITLE),
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true },

  openGraph: {
    title: buildTitle(TITLE),
    description: DESCRIPTION,
    url: absoluteUrl(CANONICAL),
    siteName: SITE_NAME,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: absoluteUrl("/og/cover.jpg"),
        width: 1200,
        height: 630,
        alt: buildTitle(TITLE),
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: buildTitle(TITLE),
    description: DESCRIPTION,
    images: [absoluteUrl("/og/cover.jpg")],
  },
};

/* ------------------------------------------------------------------ */
/*  Données                                                           */
/* ------------------------------------------------------------------ */
const CHAPTERS = [
  {
    icon: Sparkles,
    label: "L\u2019\u00e9veil",
    color: "amber" as const,
    title: "Quand les dieux portaient le nom des plan\u00e8tes",
  },
  {
    icon: BookOpen,
    label: "La rencontre",
    color: "sky" as const,
    title: "Les livres qui trouvent leur lecteur",
  },
  {
    icon: GraduationCap,
    label: "La formation",
    color: "violet" as const,
    title: "Trois ann\u00e9es aupr\u00e8s de Jean-Marie\u00a0Michiels",
  },
  {
    icon: Library,
    label: "Les racines",
    color: "rose" as const,
    title: "Des ma\u00eetres \u00e0 penser",
  },
  {
    icon: Compass,
    label: "La vision",
    color: "emerald" as const,
    title: "L\u2019esprit d\u2019Astro Cours",
  },
];

const AUTHORS = [
  {
    name: "Andr\u00e9 Barbault",
    note: "Pionnier de l\u2019astrologie mondiale et pr\u00e9visionnelle",
    color: "from-indigo-500/20 to-blue-500/10",
    border: "border-indigo-400/20",
  },
  {
    name: "Liz Greene",
    note: "Pont entre Jung et le th\u00e8me natal, astrologie psychologique",
    color: "from-violet-500/20 to-purple-500/10",
    border: "border-violet-400/20",
  },
  {
    name: "Denis Labour\u00e9",
    note: "Historien et gardien de la tradition astrologique classique",
    color: "from-amber-500/15 to-orange-500/10",
    border: "border-amber-400/20",
  },
  {
    name: "Georges Antar\u00e8s",
    note: "Astrologue belge, auteur du Manuel pratique d\u2019astrologie",
    color: "from-sky-500/15 to-cyan-500/10",
    border: "border-sky-400/20",
  },
  {
    name: "Henri-Joseph Gouchon",
    note: "R\u00e9f\u00e9rence technique, auteur du Dictionnaire astrologique",
    color: "from-emerald-500/15 to-teal-500/10",
    border: "border-emerald-400/20",
  },
];

/* ------------------------------------------------------------------ */
/*  Couleurs par chapitre                                             */
/* ------------------------------------------------------------------ */
const PALETTE = {
  amber: {
    badge: "bg-amber-500/10 text-amber-400",
    icon: "text-amber-400",
    line: "from-amber-500/40 via-amber-500/10 to-transparent",
    dot: "bg-amber-400 shadow-amber-400/40",
  },
  sky: {
    badge: "bg-sky-500/10 text-sky-400",
    icon: "text-sky-400",
    line: "from-sky-500/40 via-sky-500/10 to-transparent",
    dot: "bg-sky-400 shadow-sky-400/40",
  },
  violet: {
    badge: "bg-violet-500/10 text-violet-400",
    icon: "text-violet-400",
    line: "from-violet-500/40 via-violet-500/10 to-transparent",
    dot: "bg-violet-400 shadow-violet-400/40",
  },
  rose: {
    badge: "bg-rose-500/10 text-rose-400",
    icon: "text-rose-400",
    line: "from-rose-500/40 via-rose-500/10 to-transparent",
    dot: "bg-rose-400 shadow-rose-400/40",
  },
  emerald: {
    badge: "bg-emerald-500/10 text-emerald-400",
    icon: "text-emerald-400",
    line: "from-emerald-500/40 via-emerald-500/10 to-transparent",
    dot: "bg-emerald-400 shadow-emerald-400/40",
  },
};

/* ------------------------------------------------------------------ */
/*  Chapter (timeline style)                                          */
/* ------------------------------------------------------------------ */
function Chapter({
  index,
  icon: Icon,
  label,
  color,
  title,
  children,
  isLast,
}: {
  index: number;
  icon: React.ElementType;
  label: string;
  color: keyof typeof PALETTE;
  title: string;
  children: React.ReactNode;
  isLast?: boolean;
}) {
  const p = PALETTE[color];

  return (
    <div className="relative flex gap-4 sm:gap-6">
      {/* ── Timeline verticale ── */}
      <div className="relative flex flex-col items-center">
        {/* Dot */}
        <div
          className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-surface/80 backdrop-blur-sm sm:h-12 sm:w-12`}
        >
          <Icon className={`h-4 w-4 sm:h-5 sm:w-5 ${p.icon}`} />
        </div>
        {/* Ligne */}
        {!isLast && (
          <div
            className={`mt-2 w-px flex-1 bg-gradient-to-b ${p.line}`}
          />
        )}
      </div>

      {/* ── Carte contenu ── */}
      <div
        className={`group relative mb-8 flex-1 rounded-2xl border border-white/[0.06] bg-surface/60 backdrop-blur-sm px-5 py-5 transition-all duration-300 hover:border-white/[0.12] hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] sm:mb-10 sm:px-7 sm:py-6`}
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {/* Badge + titre */}
        <div className="mb-3 flex flex-wrap items-center gap-2 sm:gap-3">
          <span
            className={`inline-flex items-center rounded-lg px-2.5 py-0.5 text-[0.7rem] font-semibold uppercase tracking-wider ${p.badge}`}
          >
            {label}
          </span>
          <h2 className="font-serif text-lg font-semibold tracking-tight text-text sm:text-xl">
            {title}
          </h2>
        </div>

        <div className="space-y-3 text-[0.92rem] leading-[1.75] text-text/70 sm:text-[0.935rem]">
          {children}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */
export default function AProposPage() {
  return (
    <main id="main-content" className="relative mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      {/* ── Glow décoratif ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(108,124,255,.45) 0%, rgba(139,92,246,.25) 40%, transparent 70%)",
        }}
      />

      {/* ── En-tête ─────────────────────────────────────────────── */}
      <header className="relative mb-10 space-y-5 text-center sm:mb-14">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5">
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          <span className="text-xs font-medium tracking-wide text-accent">
            Le passeur
          </span>
        </div>

        <h1 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem]">
          Plus de{" "}
          <span className="bg-gradient-to-r from-violet-400 via-accent to-sky-400 bg-clip-text text-transparent">
            quarante ans
          </span>{" "}
          de passion
        </h1>

        <p className="mx-auto max-w-lg text-sm leading-relaxed text-text/55 sm:text-[0.94rem]">
          Un chemin qui m&egrave;ne de la mythologie des dieux anciens
          &agrave;&nbsp;une astrologie rigoureuse, vivante et transmissible.
        </p>

        {/* Chiffres clés */}
        <div className="mx-auto flex max-w-md justify-center gap-6 pt-2 sm:gap-10">
          {[
            { value: "40+", label: "ans de pratique" },
            { value: "3", label: "ans de formation" },
            { value: "5", label: "auteurs de r\u00e9f\u00e9rence" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-2xl font-bold text-text sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-0.5 text-[0.7rem] uppercase tracking-wider text-text/40 sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </header>

      {/* ── Timeline / Chapitres ────────────────────────────────── */}
      <div className="relative">
        {/* 1 — L'éveil */}
        <Chapter {...CHAPTERS[0]} index={0}>
          <p>
            Tout commence &agrave; l&apos;&acirc;ge de dix ans, par un
            &eacute;merveillement simple&nbsp;: la mythologie grecque et
            romaine. Zeus, Ar&egrave;s, Aphrodite, Herm&egrave;s&hellip;
            Derri&egrave;re chaque r&eacute;cit se cache une plan&egrave;te,
            derri&egrave;re chaque plan&egrave;te un arch&eacute;type.
          </p>
          <p>
            Sans le savoir encore, l&apos;enfant qui d&eacute;vore ces mythes
            pose les premi&egrave;res pierres d&apos;un langage qu&apos;il ne
            cessera plus d&apos;approfondir &mdash; un fil rouge qui court
            depuis l&apos;Antiquit&eacute; jusqu&apos;&agrave;
            l&apos;astrologie d&apos;aujourd&apos;hui.
          </p>
        </Chapter>

        {/* 2 — La rencontre */}
        <Chapter {...CHAPTERS[1]} index={1}>
          <p>
            &Agrave; l&apos;adolescence, les premiers ouvrages d&apos;astrologie
            arrivent presque d&apos;eux-m&ecirc;mes &mdash; offerts,
            trouv&eacute;s, d&eacute;couverts au hasard d&apos;une
            &eacute;tag&egrave;re. Ce qui est s&ucirc;r, c&apos;est que chaque
            livre en appelle un autre, et que la curiosit&eacute; se transforme
            vite en passion m&eacute;thodique.
          </p>
          <p>
            Premi&egrave;res lectures, premi&egrave;res
            interpr&eacute;tations, premiers th&egrave;mes mont&eacute;s
            &agrave; la main&nbsp;: l&apos;astrologie cesse d&apos;&ecirc;tre
            un sujet de fascination pour devenir une pratique quotidienne.
          </p>
        </Chapter>

        {/* 3 — La formation */}
        <Chapter {...CHAPTERS[2]} index={2}>
          <p>
            Vient ensuite le temps de la rigueur. Pendant trois ans,
            St&eacute;phane suit la formation dispens&eacute;e par{" "}
            <strong className="text-text/90">Jean-Marie Michiels</strong>,
            astrologue, chercheur et p&eacute;dagogue belge reconnu. Fondateur
            d&apos;une plateforme d&apos;enseignement compl&egrave;te, Michiels
            enseigne aussi bien l&apos;astrologie natale que l&apos;astrologie
            m&eacute;dicale, horaire et pr&eacute;visionnelle.
          </p>
          <p>
            Ce parcours structur&eacute; consolide les bases, affine la
            m&eacute;thode d&apos;interpr&eacute;tation et ancre la conviction
            que l&apos;astrologie, pour &ecirc;tre cr&eacute;dible, doit
            s&apos;enseigner avec clart&eacute;, exigence et
            honn&ecirc;tet&eacute; intellectuelle.
          </p>
        </Chapter>

        {/* 4 — Les racines (auteurs) */}
        <Chapter {...CHAPTERS[3]} index={3}>
          <p>
            Au fil des ann&eacute;es, certains auteurs deviennent des compagnons
            de route. Leurs ouvrages, lus et relus, forment le socle d&apos;une
            pratique &agrave; la fois traditionnelle et ouverte&nbsp;:
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {AUTHORS.map((a) => (
              <div
                key={a.name}
                className={`rounded-xl border ${a.border} bg-gradient-to-br ${a.color} px-4 py-3.5 transition-colors duration-300 hover:border-white/[0.15]`}
              >
                <p className="text-sm font-semibold text-text/90">{a.name}</p>
                <p className="mt-1 text-[0.78rem] leading-relaxed text-text/50">
                  {a.note}
                </p>
              </div>
            ))}
          </div>
        </Chapter>

        {/* 5 — L'esprit */}
        <Chapter {...CHAPTERS[4]} index={4} isLast>
          <p>
            Astro Cours est n&eacute; de cette conviction&nbsp;:
            l&apos;astrologie m&eacute;rite d&apos;&ecirc;tre transmise avec la
            m&ecirc;me rigueur qu&apos;elle demande &agrave; &ecirc;tre
            pratiqu&eacute;e. Pas de pr&eacute;dictions sensationnelles ni de
            promesses inv&eacute;rifiables &mdash; une m&eacute;thode
            p&eacute;dagogique claire et structur&eacute;e, des rep&egrave;res
            solides et des exemples concrets.
          </p>
          <p>
            L&apos;objectif est simple&nbsp;: donner &agrave; chacun les
            cl&eacute;s pour comprendre le langage du ciel par lui-m&ecirc;me.
            Apprendre &agrave; lire un th&egrave;me, saisir les cycles
            plan&eacute;taires, relier les symboles &agrave; la vie
            r&eacute;elle &mdash; sans d&eacute;pendre d&apos;un
            interpr&egrave;te.
          </p>
          <p>
            C&apos;est cette exigence, forg&eacute;e par plus de quarante ans de
            pratique, de formation et de lectures, qui guide chaque page de ce
            site.
          </p>
        </Chapter>
      </div>

      {/* ── Citation de clôture ─────────────────────────────────── */}
      <footer className="mt-6 sm:mt-10">
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-violet-500/[0.06] via-accent/[0.04] to-sky-500/[0.06] px-6 py-8 text-center sm:px-10 sm:py-10">
          {/* Glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(108,124,255,.15) 0%, transparent 60%)",
            }}
          />

          <blockquote className="relative mx-auto max-w-md font-serif text-base italic leading-relaxed text-text/60 sm:text-lg">
            &laquo;&nbsp;L&apos;astrologie est un langage. Si vous comprenez ce
            langage, le ciel vous parle.&nbsp;&raquo;
          </blockquote>
          <p className="relative mt-3 text-xs font-medium tracking-wide text-text/30 sm:text-sm">
            &mdash; Dane Rudhyar
          </p>
        </div>
      </footer>
    </main>
  );
}
