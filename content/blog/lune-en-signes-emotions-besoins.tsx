import type { ReactNode } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "./ui";

export const meta = {
  slug: "lune-en-signes-emotions-besoins",
  seoTitle: "Lune en signes : le guide complet des 12 Lunes",
  title: "La Lune en signes : émotions et besoin de sécurité",
  description:
    "La Lune en signes révèle votre besoin émotionnel, votre sécurité intérieure et vos réflexes de protection. Le guide complet des 12 Lunes, signe par signe.",
  date: "2026-09-06",
  tags: [
    "Lune",
    "émotions",
    "sécurité affective",
    "psychologie astrologique",
    "thème astral",
    "bases",
  ],
  readingLevel: "débutant" as const,
  cover: "/images/blog/lunarien2.webp",
};

/* ────────────────────────────────────────────────────────────
   Composants de mise en page
   ──────────────────────────────────────────────────────────── */

function MoonGlyph({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M15.6 3.2a9 9 0 1 0 5.2 12.2A7.2 7.2 0 0 1 15.6 3.2Z"
        fill="#F3DFAE"
      />
    </svg>
  );
}

function H2({ children, id }: { children: ReactNode; id: string }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="relative inline-flex h-7 w-7 shrink-0 items-center justify-center"
        >
          <span className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-200/60 via-indigo-300/25 to-transparent blur-[6px]" />
          <MoonGlyph className="relative h-4 w-4" />
        </span>
        <h2
          id={id}
          className="scroll-mt-24 text-2xl md:text-3xl font-semibold tracking-tight leading-tight"
        >
          {children}
        </h2>
      </div>
      <div
        aria-hidden="true"
        className="h-px w-full bg-gradient-to-r from-indigo-400/40 via-white/10 to-transparent"
      />
    </div>
  );
}

function H3({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h3
      id={id}
      className="scroll-mt-24 text-lg md:text-xl font-semibold tracking-tight leading-tight"
    >
      {children}
    </h3>
  );
}

function A({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="underline decoration-white/30 hover:decoration-white/60 transition"
    >
      {children}
    </Link>
  );
}

function Callout({
  tone = "note",
  title,
  children,
}: {
  tone?: "note" | "warn" | "ok";
  title: string;
  children: ReactNode;
}) {
  const box =
    tone === "warn"
      ? "border-yellow-500/30 bg-yellow-500/10"
      : tone === "ok"
        ? "border-emerald-500/30 bg-emerald-500/10"
        : "border-white/10 bg-white/5";

  const emoji = tone === "warn" ? "⚠️" : tone === "ok" ? "✅" : "🌙";

  return (
    <div className={`rounded-2xl border p-5 ${box}`}>
      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-text/90">
        <span aria-hidden="true">{emoji}</span>
        <span>{title}</span>
      </div>
      <div className="space-y-2 leading-relaxed text-text/85">{children}</div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-xs text-text/60">{label}</p>
      <p className="mt-1 font-semibold text-text/90">{value}</p>
    </div>
  );
}

function Divider() {
  return (
    <div className="flex items-center gap-4" aria-hidden="true">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-white/10" />
      <span className="text-sm tracking-[0.3em] text-amber-200/50">☾ ☽</span>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-white/15 to-white/10" />
    </div>
  );
}

type BoxTone =
  | "neutral"
  | "amber"
  | "teal"
  | "fuchsia"
  | "sky"
  | "red"
  | "rose"
  | "violet"
  | "emerald"
  | "indigo";

const BOX_TONES: Record<BoxTone, string> = {
  neutral: "border-white/10 bg-black/20",
  amber:
    "border-amber-400/25 bg-gradient-to-br from-amber-400/[0.08] to-transparent",
  teal: "border-teal-400/25 bg-gradient-to-br from-teal-400/[0.08] to-transparent",
  fuchsia:
    "border-fuchsia-400/25 bg-gradient-to-br from-fuchsia-400/[0.08] to-transparent",
  sky: "border-sky-400/25 bg-gradient-to-br from-sky-400/[0.08] to-transparent",
  red: "border-red-400/25 bg-gradient-to-br from-red-400/[0.08] to-transparent",
  rose: "border-rose-400/25 bg-gradient-to-br from-rose-400/[0.08] to-transparent",
  violet:
    "border-violet-400/25 bg-gradient-to-br from-violet-400/[0.08] to-transparent",
  emerald:
    "border-emerald-400/25 bg-gradient-to-br from-emerald-400/[0.08] to-transparent",
  indigo:
    "border-indigo-400/25 bg-gradient-to-br from-indigo-400/[0.08] to-transparent",
};

function Box({
  title,
  children,
  id,
  tone = "neutral",
}: {
  title: string;
  children: ReactNode;
  id?: string;
  tone?: BoxTone;
}) {
  return (
    <section
      className={`rounded-2xl border p-6 shadow-soft ${BOX_TONES[tone]}`}
    >
      <H3 id={id}>{title}</H3>
      <div className="mt-4 space-y-3 leading-relaxed text-text/85">
        {children}
      </div>
    </section>
  );
}

/* ── Couleur d'élément par signe (pastilles du tableau) ──────── */

const SIGN_TONE: Record<string, { dot: string; pill: string }> = {
  belier: { dot: "bg-red-400", pill: "border-red-400/25 bg-red-400/10 text-red-100" },
  taureau: { dot: "bg-emerald-400", pill: "border-emerald-400/25 bg-emerald-400/10 text-emerald-100" },
  gemeaux: { dot: "bg-sky-400", pill: "border-sky-400/25 bg-sky-400/10 text-sky-100" },
  cancer: { dot: "bg-violet-400", pill: "border-violet-400/25 bg-violet-400/10 text-violet-100" },
  lion: { dot: "bg-red-400", pill: "border-red-400/25 bg-red-400/10 text-red-100" },
  vierge: { dot: "bg-emerald-400", pill: "border-emerald-400/25 bg-emerald-400/10 text-emerald-100" },
  balance: { dot: "bg-sky-400", pill: "border-sky-400/25 bg-sky-400/10 text-sky-100" },
  scorpion: { dot: "bg-violet-400", pill: "border-violet-400/25 bg-violet-400/10 text-violet-100" },
  sagittaire: { dot: "bg-red-400", pill: "border-red-400/25 bg-red-400/10 text-red-100" },
  capricorne: { dot: "bg-emerald-400", pill: "border-emerald-400/25 bg-emerald-400/10 text-emerald-100" },
  verseau: { dot: "bg-sky-400", pill: "border-sky-400/25 bg-sky-400/10 text-sky-100" },
  poissons: { dot: "bg-violet-400", pill: "border-violet-400/25 bg-violet-400/10 text-violet-100" },
};

/* ── Frise des 8 phases lunaires (SVG pur) ───────────────────── */

const PHASE_RX = 31.82;
const PHASE_SHAPES: { key: string; d: string | null; mirror: boolean }[] = [
  { key: "new", d: null, mirror: false },
  { key: "waxing-crescent", d: `M 50 5 A 45 45 0 0 1 50 95 A ${PHASE_RX} 45 0 0 0 50 5 Z`, mirror: false },
  { key: "first-quarter", d: "M 50 5 A 45 45 0 0 1 50 95 Z", mirror: false },
  { key: "waxing-gibbous", d: `M 50 5 A 45 45 0 0 1 50 95 A ${PHASE_RX} 45 0 0 1 50 5 Z`, mirror: false },
  { key: "full", d: "FULL", mirror: false },
  { key: "waning-gibbous", d: `M 50 5 A 45 45 0 0 1 50 95 A ${PHASE_RX} 45 0 0 1 50 5 Z`, mirror: true },
  { key: "last-quarter", d: "M 50 5 A 45 45 0 0 1 50 95 Z", mirror: true },
  { key: "waning-crescent", d: `M 50 5 A 45 45 0 0 1 50 95 A ${PHASE_RX} 45 0 0 0 50 5 Z`, mirror: true },
];

function PhaseStrip({ labels, caption }: { labels: string[]; caption: string }) {
  return (
    <figure className="rounded-2xl border border-white/10 bg-gradient-to-b from-indigo-500/[0.08] to-transparent p-6">
      <svg width="0" height="0" aria-hidden="true" className="absolute">
        <defs>
          <radialGradient id="moonGold" cx="35%" cy="30%">
            <stop offset="0%" stopColor="#FFF6DF" />
            <stop offset="60%" stopColor="#F5D998" />
            <stop offset="100%" stopColor="#D9B15F" />
          </radialGradient>
        </defs>
      </svg>

      <div className="grid grid-cols-4 gap-4 sm:grid-cols-8">
        {PHASE_SHAPES.map((phase, i) => (
          <div key={phase.key} className="flex flex-col items-center gap-2">
            <svg
              viewBox="0 0 100 100"
              className="h-12 w-12 sm:h-14 sm:w-14"
              role="img"
              aria-label={labels[i]}
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="#0E1430"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="1.5"
              />
              {phase.d === "FULL" ? (
                <circle cx="50" cy="50" r="45" fill="url(#moonGold)" />
              ) : phase.d ? (
                <path
                  d={phase.d}
                  fill="url(#moonGold)"
                  transform={phase.mirror ? "translate(100,0) scale(-1,1)" : undefined}
                />
              ) : null}
            </svg>
            <span className="text-center text-[11px] leading-tight text-text/65">
              {labels[i]}
            </span>
          </div>
        ))}
      </div>

      <figcaption className="mt-5 text-center text-xs text-text/50">
        {caption}
      </figcaption>
    </figure>
  );
}

/* ── Carte de signe, colorée par élément ─────────────────────── */

type ZodiacElement = "feu" | "terre" | "air" | "eau";

function elementStyles(element: ZodiacElement) {
  if (element === "feu")
    return {
      border: "border-red-500/30",
      hoverBorder: "group-hover:border-red-400/50",
      iconWrap: "border-red-500/25 bg-red-500/10",
      glow: "from-red-500/10 to-transparent",
      titleHover: "group-hover:text-red-200",
      linkText: "group-hover:text-red-100",
      label: "text-red-200/80",
    };
  if (element === "terre")
    return {
      border: "border-emerald-500/30",
      hoverBorder: "group-hover:border-emerald-400/50",
      iconWrap: "border-emerald-500/25 bg-emerald-500/10",
      glow: "from-emerald-500/10 to-transparent",
      titleHover: "group-hover:text-emerald-200",
      linkText: "group-hover:text-emerald-100",
      label: "text-emerald-200/80",
    };
  if (element === "air")
    return {
      border: "border-sky-500/30",
      hoverBorder: "group-hover:border-sky-400/50",
      iconWrap: "border-sky-500/25 bg-sky-500/10",
      glow: "from-sky-500/10 to-transparent",
      titleHover: "group-hover:text-sky-200",
      linkText: "group-hover:text-sky-100",
      label: "text-sky-200/80",
    };
  return {
    border: "border-violet-500/30",
    hoverBorder: "group-hover:border-violet-400/50",
    iconWrap: "border-violet-500/25 bg-violet-500/10",
    glow: "from-violet-500/10 to-transparent",
    titleHover: "group-hover:text-violet-200",
    linkText: "group-hover:text-violet-100",
    label: "text-violet-200/80",
  };
}

function Line({ label, children }: { label: string; children: ReactNode }) {
  return (
    <p>
      <strong className="text-text/95">{label} :</strong> {children}
    </p>
  );
}

function MoonCard({
  sign,
  slug,
  element,
  modality,
  motto,
  children,
}: {
  sign: string;
  slug: string;
  element: ZodiacElement;
  modality: string;
  motto: string;
  children: ReactNode;
}) {
  const id = `lune-en-${slug}`;
  const styles = elementStyles(element);

  return (
    <article
      id={id}
      aria-labelledby={`${id}-title`}
      className="h-full scroll-mt-24"
    >
      <div
        className={[
          "group relative flex h-full flex-col overflow-hidden rounded-2xl",
          "border bg-black/20 p-6 shadow-soft transition hover:bg-white/[0.04]",
          styles.border,
          styles.hoverBorder,
        ].join(" ")}
      >
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${styles.glow} opacity-0 transition duration-300 group-hover:opacity-100`}
        />

        <div className="relative flex items-start justify-between gap-4">
          <div>
            <p className={`text-xs uppercase tracking-widest ${styles.label}`}>
              {element} · {modality}
            </p>
            <h3
              id={`${id}-title`}
              className={[
                "mt-2 text-xl font-semibold tracking-tight leading-tight text-text transition",
                styles.titleHover,
              ].join(" ")}
            >
              Lune en {sign}
            </h3>
            <p className="mt-1 text-sm italic text-text/65">« {motto} »</p>
          </div>

          <div
            aria-hidden="true"
            className={`relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border ${styles.iconWrap}`}
          >
            <Image
              src={`/images/zodiaque/${slug}.webp`}
              alt=""
              width={64}
              height={64}
              className="h-auto w-auto object-contain opacity-95 transition group-hover:scale-[1.03]"
              sizes="64px"
            />
          </div>
        </div>

        <div className="relative mt-4 space-y-2 leading-relaxed text-text/85">
          {children}
        </div>

        <div className="relative mt-5 flex items-center justify-end">
          <Link
            href={`/signes/${slug}`}
            className={[
              "text-sm text-text/70 underline decoration-white/20 transition hover:decoration-white/50",
              styles.linkText,
            ].join(" ")}
          >
            Lire la fiche du {sign} →
          </Link>
        </div>
      </div>
    </article>
  );
}

/* ── Données du tableau comparatif ───────────────────────────── */

const overview = [
  {
    sign: "Bélier",
    slug: "belier",
    need: "Agir tout de suite",
    safe: "Elle peut réagir sans demander la permission",
    shuts: "On la ralentit ou on la materne",
    word: "Impulsion",
  },
  {
    sign: "Taureau",
    slug: "taureau",
    need: "Que rien ne bouge",
    safe: "Le quotidien est stable, le corps est apaisé",
    shuts: "Changement brutal, insécurité matérielle",
    word: "Constance",
  },
  {
    sign: "Gémeaux",
    slug: "gemeaux",
    need: "Mettre des mots",
    safe: "Elle comprend ce qui se passe et peut en parler",
    shuts: "Silence, non-dit, huis clos",
    word: "Explication",
  },
  {
    sign: "Cancer",
    slug: "cancer",
    need: "Appartenir",
    safe: "Un lieu, des gens, une continuité",
    shuts: "Rejet, indifférence, déracinement",
    word: "Attachement",
  },
  {
    sign: "Lion",
    slug: "lion",
    need: "Compter pour quelqu’un",
    safe: "Elle est vue, choisie, reconnue",
    shuts: "Humiliation, indifférence, comparaison",
    word: "Reconnaissance",
  },
  {
    sign: "Vierge",
    slug: "vierge",
    need: "Être utile et que ce soit net",
    safe: "Les choses sont en ordre et prévisibles",
    shuts: "Chaos, imprévu, sentiment d’inutilité",
    word: "Ajustement",
  },
  {
    sign: "Balance",
    slug: "balance",
    need: "L’harmonie du lien",
    safe: "L’autre va bien et l’ambiance est douce",
    shuts: "Conflit ouvert, tension, brutalité",
    word: "Accord",
  },
  {
    sign: "Scorpion",
    slug: "scorpion",
    need: "La vérité, sans filtre",
    safe: "Rien n’est caché, le lien est total",
    shuts: "Mensonge, tiédeur, trahison",
    word: "Profondeur",
  },
  {
    sign: "Sagittaire",
    slug: "sagittaire",
    need: "De l’espace et du sens",
    safe: "L’horizon reste ouvert",
    shuts: "Enfermement, contrôle, petitesse",
    word: "Élan",
  },
  {
    sign: "Capricorne",
    slug: "capricorne",
    need: "Tenir debout seul",
    safe: "Elle maîtrise, elle assume, elle ne dépend de personne",
    shuts: "Dépendance imposée, débordement affectif",
    word: "Maîtrise",
  },
  {
    sign: "Verseau",
    slug: "verseau",
    need: "Garder sa liberté et sa lucidité",
    safe: "Elle peut prendre du recul quand elle veut",
    shuts: "Possession, fusion, chantage affectif",
    word: "Distance",
  },
  {
    sign: "Poissons",
    slug: "poissons",
    need: "Se relier à plus grand qu’elle",
    safe: "Le lien est doux, poreux, sans agression",
    shuts: "Dureté, cynisme, brutalité du réel",
    word: "Fusion",
  },
];

const toc = [
  { id: "definition", label: "Ce que la Lune décrit vraiment" },
  { id: "soleil-lune-ascendant", label: "Soleil, Lune, Ascendant : qui fait quoi" },
  { id: "methode", label: "Lire sa Lune en 5 points" },
  { id: "trouver-sa-lune", label: "Trouver sa Lune (et le piège de l’heure)" },
  { id: "tableau", label: "Les 12 Lunes en un tableau" },
  { id: "les-12-lunes", label: "Les 12 Lunes en profondeur" },
  { id: "lune-soleil", label: "Quand la Lune contredit le Soleil" },
  { id: "lune-maisons", label: "La Lune en maisons : où va la sécurité" },
  { id: "aspects", label: "Les aspects qui changent tout" },
  { id: "phase", label: "Votre phase de Lune de naissance" },
  { id: "dignites", label: "Domicile, exaltation, exil, chute" },
  { id: "cycles", label: "Les cycles : transits et Lune progressée" },
  { id: "erreurs", label: "Les 6 erreurs les plus fréquentes" },
  { id: "retenir", label: "Ce qu’il faut retenir" },
  { id: "faq", label: "Questions fréquentes" },
];

/* ── FAQ (affichage + JSON-LD depuis la même source) ─────────── */

const faq = [
  {
    q: "Comment connaître sa Lune en astrologie ?",
    a: "Il faut calculer son thème natal à partir de la date, de l’heure et du lieu de naissance. La Lune change de signe tous les 2 jours et demi environ : la date seule ne suffit pas, l’heure est souvent déterminante.",
  },
  {
    q: "Que représente la Lune dans un thème astral ?",
    a: "La Lune décrit le besoin émotionnel de base, la façon de se sentir en sécurité, les réflexes de protection et la mémoire affective. Là où le Soleil dit qui l’on cherche à devenir, la Lune dit ce dont on a besoin pour aller bien.",
  },
  {
    q: "Quelle est la différence entre le Soleil, la Lune et l’Ascendant ?",
    a: "Le Soleil est la direction consciente et l’identité. La Lune est le besoin intime et le réflexe émotionnel. L’Ascendant est la manière d’entrer en contact avec le monde extérieur. Les trois se lisent ensemble, jamais séparément.",
  },
  {
    q: "Peut-on avoir la Lune dans le même signe que le Soleil ?",
    a: "Oui. Cela signifie que la personne est née autour d’une nouvelle Lune. Identité et besoin vont alors dans le même sens : beaucoup de cohérence intérieure, mais souvent moins de recul sur soi et peu de contrepoids intérieur.",
  },
  {
    q: "Quelle est la Lune la plus difficile du zodiaque ?",
    a: "Aucune Lune n’est mauvaise. La tradition parle d’exil en Capricorne et de chute en Scorpion parce que le besoin de sécurité y est le moins spontanément nourri. Ce sont souvent les Lunes les plus solides à l’âge adulte, une fois le mécanisme compris.",
  },
  {
    q: "La Lune décrit-elle la relation à la mère ?",
    a: "Elle décrit la façon dont on a reçu et intégré le soin dans l’enfance, ce qui inclut la figure maternelle mais ne s’y réduit pas. Elle parle du climat affectif d’origine et de ce qu’on a appris à faire pour se sentir en sécurité.",
  },
  {
    q: "Combien de temps la Lune reste-t-elle dans un signe ?",
    a: "Environ 2 jours et demi. Elle parcourt les douze signes en 27,3 jours et se déplace de 12 à 15 degrés par jour, ce qui en fait l’astre le plus rapide du thème natal.",
  },
  {
    q: "Que faire si je ne connais pas mon heure de naissance ?",
    a: "On calcule le thème pour midi. Si la Lune ne change pas de signe ce jour-là, sa position en signe est fiable. Si elle change, il faut départager les deux hypothèses par le vécu ou faire rectifier l’heure de naissance.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

/* ────────────────────────────────────────────────────────────
   Article
   ──────────────────────────────────────────────────────────── */

export default function Post() {
  const glow = getGlowFromTags(meta.tags);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="space-y-12">
        {/* ── HERO ─────────────────────────────────────────── */}
        <header className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/[0.10] via-black/20 to-black/30 p-7 shadow-soft">
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl ${glow}`}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 top-6 hidden h-40 w-40 opacity-[0.18] sm:block"
          >
            <MoonGlyph className="h-full w-full" />
          </div>

          <div className="relative">
            <p className="text-sm text-text/65">
              Émotions · Sécurité intérieure · Mémoire affective
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-text/85">
              Il y a la personne que vous êtes quand tout va bien. Et il y a
              celle qui apparaît à 23 h, quand vous êtes fatigué, blessé ou
              inquiet. <strong>Cette seconde personne, c’est votre Lune.</strong>
            </p>

            <p className="mt-3 max-w-2xl leading-relaxed text-text/80">
              Le signe solaire décrit ce que vous cherchez à devenir. La Lune,
              elle, décrit ce dont vous avez <em>besoin</em> pour tenir debout —
              et ce que vous faites automatiquement quand ce besoin n’est pas
              rempli. C’est la partie la moins choisie du{" "}
              <A href="/blog/qu-est-ce-qu-un-theme-astral">thème natal</A>, et
              de très loin la plus décisive au quotidien.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <Pill tone="violet">Mot-clé : Besoin</Pill>
              <Pill tone="sky">Rythme : 2,5 jours par signe</Pill>
              <Pill tone="emerald">Levier : Sécurité intérieure</Pill>
              <Pill tone="orange">Risque : Réflexe automatique</Pill>
            </div>

            <div className="mt-4">
              <TagPillsInline tags={meta.tags} />
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <Stat label="Astre" value="La Lune" />
              <Stat label="Ce qu’elle décrit" value="Le besoin émotionnel" />
              <Stat
                label="Question clé"
                value="De quoi ai-je besoin pour me sentir en sécurité ?"
              />
            </div>
          </div>
        </header>

        {/* ── DEFINITION (featured snippet) ────────────────── */}
        <div className="relative overflow-hidden rounded-2xl border border-indigo-400/25 bg-gradient-to-br from-indigo-500/[0.12] via-violet-500/[0.06] to-transparent px-6 py-5">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-200/10 blur-2xl"
          />
          <p className="relative text-sm font-semibold uppercase tracking-[0.2em] text-amber-200/80">
            Définition
          </p>
          <p className="relative mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
            <strong>La Lune en astrologie</strong> représente le besoin
            émotionnel fondamental, la façon de se sentir en sécurité et les
            réflexes de protection. Sa position en signe dans le thème natal
            indique <strong>ce dont une personne a besoin pour aller bien</strong>{" "}
            et comment elle réagit quand ce besoin n’est pas comblé. La Lune
            change de signe tous les 2 jours et demi environ : deux personnes
            nées le même jour peuvent avoir deux Lunes différentes.
          </p>
        </div>

        {/* ── SOMMAIRE ─────────────────────────────────────── */}
        <nav
          aria-label="Sommaire de l’article"
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/[0.07] to-transparent p-6"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200/70">
            Sommaire
          </p>
          <ol className="mt-4 grid gap-x-8 gap-y-1 sm:grid-cols-2">
            {toc.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="group flex items-baseline gap-3 rounded-lg px-2 py-1.5 transition hover:bg-white/[0.04]"
                >
                  <span className="text-xs font-semibold tabular-nums text-indigo-300/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-text/85 underline decoration-white/15 transition group-hover:decoration-indigo-300/60">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* ── 1. CE QUE LA LUNE DÉCRIT ─────────────────────── */}
        <section className="space-y-5" aria-labelledby="definition">
          <H2 id="definition">Ce que la Lune décrit vraiment (et ce qu’elle ne décrit pas)</H2>

          <p className="text-lg leading-relaxed text-text/85">
            La plupart des articles vous diront que la{" "}
            <A href="/planetes/lune">Lune</A> représente « les émotions ». C’est
            vrai, mais c’est trop vague pour être utile. Une définition plus
            juste tiendrait en une phrase :{" "}
            <strong>
              la Lune décrit ce que vous faites automatiquement pour vous sentir
              en sécurité.
            </strong>
          </p>

          <p className="leading-relaxed text-text/85">
            Ce n’est pas un choix. C’est un réflexe, installé très tôt, avant le
            langage, et qui se déclenche sans passer par la réflexion. Quand
            quelqu’un est fatigué, vexé, inquiet ou amoureux, il ne réagit pas
            avec son signe solaire : il réagit avec sa Lune. C’est pour cette
            raison que la Lune est l’élément du thème le plus facile à vérifier
            dans la vie réelle — et souvent le plus troublant à découvrir.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <Box title="Ce que la Lune décrit">
              <ul className="list-disc space-y-2 pl-5">
                <li>le besoin affectif de base, celui qui ne se négocie pas</li>
                <li>la façon de se rassurer, de se consoler, de se retirer</li>
                <li>
                  la mémoire émotionnelle : ce que le corps a retenu de
                  l’enfance
                </li>
                <li>le climat intérieur, l’humeur de fond, le rythme</li>
                <li>
                  la manière de prendre soin des autres — on soigne souvent
                  comme on voudrait être soigné
                </li>
              </ul>
            </Box>

            <Box title="Ce que la Lune ne décrit pas">
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  votre humeur d’aujourd’hui — ça, c’est la Lune en{" "}
                  <A href="/transits">transit</A>, pas la Lune natale
                </li>
                <li>
                  votre style amoureux : c’est{" "}
                  <A href="/blog/venus-en-signes-style-amoureux">Vénus</A>
                </li>
                <li>
                  votre façon de désirer et de passer à l’action : c’est{" "}
                  <A href="/blog/mars-en-signes-desir-libido-action">Mars</A>
                </li>
                <li>
                  votre personnalité visible : c’est l’
                  <A href="/blog/comprendre-signe-astrologique-ascendant-12-exemples">
                    Ascendant
                  </A>
                </li>
                <li>votre valeur, votre maturité ou votre santé mentale</li>
              </ul>
            </Box>
          </div>

          <Callout tone="note" title="La phrase à retenir">
            <p>
              Le Soleil dit <strong>« voilà où je vais »</strong>. La Lune dit{" "}
              <strong>« voilà ce qu’il me faut pour y aller »</strong>. Quand la
              Lune n’est pas nourrie, le Soleil n’avance plus. C’est aussi
              simple que ça.
            </p>
          </Callout>
        </section>

        {/* ── 2. SOLEIL / LUNE / ASCENDANT ─────────────────── */}
        <section className="space-y-5" aria-labelledby="soleil-lune-ascendant">
          <H2 id="soleil-lune-ascendant">
            Soleil, Lune, Ascendant : qui fait quoi dans votre thème
          </H2>

          <p className="leading-relaxed text-text/85">
            Ces trois points forment le trépied de tout thème natal. Les
            confondre est l’erreur la plus courante, et c’est la raison pour
            laquelle{" "}
            <A href="/blog/pourquoi-votre-horoscope-ne-vous-ressemble-pas">
              les horoscopes ne ressemblent à personne
            </A>
            .
          </p>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-sm">
                <thead className="bg-white/[0.04]">
                  <tr className="text-left">
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Point
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Il répond à…
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Quand il se voit
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Si on l’ignore
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-white/10">
                    <td className="px-5 py-4 align-top font-medium text-white">
                      <A href="/planetes/soleil">Soleil</A>
                    </td>
                    <td className="px-5 py-4 align-top text-text/85">
                      Qui je veux devenir
                    </td>
                    <td className="px-5 py-4 align-top text-text/85">
                      Dans les choix de vie, sur la durée
                    </td>
                    <td className="px-5 py-4 align-top text-text/85">
                      On s’ennuie, on se sent à côté de sa vie
                    </td>
                  </tr>
                  <tr className="border-t border-white/10 bg-white/[0.02]">
                    <td className="px-5 py-4 align-top font-medium text-white">
                      <A href="/planetes/lune">Lune</A>
                    </td>
                    <td className="px-5 py-4 align-top text-text/85">
                      Ce dont j’ai besoin pour me sentir bien
                    </td>
                    <td className="px-5 py-4 align-top text-text/85">
                      Quand on est fatigué, blessé, en couple, malade
                    </td>
                    <td className="px-5 py-4 align-top text-text/85">
                      On s’épuise, on somatise, on répète les mêmes conflits
                    </td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-5 py-4 align-top font-medium text-white">
                      Ascendant
                    </td>
                    <td className="px-5 py-4 align-top text-text/85">
                      Comment j’aborde le monde
                    </td>
                    <td className="px-5 py-4 align-top text-text/85">
                      Dans les cinq premières minutes d’une rencontre
                    </td>
                    <td className="px-5 py-4 align-top text-text/85">
                      On ne se sent jamais compris du premier coup
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="leading-relaxed text-text/85">
            Un exemple parlant : quelqu’un avec un Soleil{" "}
            <A href="/signes/sagittaire">Sagittaire</A> et une Lune{" "}
            <A href="/signes/cancer">Cancer</A> rêve de partir six mois en
            Asie… et pleure le troisième jour parce que sa cuisine lui manque.
            Les deux sont vrais. Ce n’est pas une contradiction, c’est une
            architecture.
          </p>
        </section>

        <Divider />

        {/* ── 3. MÉTHODE ───────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="methode">
          <H2 id="methode">Lire sa Lune en 5 points (la méthode complète)</H2>

          <p className="leading-relaxed text-text/85">
            Une Lune ne se lit jamais avec le seul signe. Voici l’ordre de
            lecture qu’utilisent les astrologues sérieux — du plus général au
            plus précis. Gardez-le sous la main, il vaut pour n’importe quelle
            planète.
          </p>

          <div className="space-y-4">
            <Box title="1. Le signe — la couleur du besoin">
              <p>
                Il donne la <strong>nature</strong> du besoin : sécurité
                matérielle, vérité, liberté, reconnaissance… C’est ce que
                détaille la grande section suivante. Le signe répond à la
                question : <em>de quoi ai-je besoin ?</em>
              </p>
            </Box>

            <Box title="2. La maison — le terrain où le besoin se joue">
              <p>
                Elle indique <strong>où</strong>, concrètement, la personne va
                chercher sa sécurité : le couple, le travail, la maison, le
                groupe. Une Lune en{" "}
                <A href="/signes/verseau">Verseau</A> en{" "}
                <A href="/maisons/maison-4">maison 4</A> et la même Lune en{" "}
                <A href="/maisons/maison-10">maison 10</A> ne produisent pas la
                même vie. La maison répond à : <em>où vais-je le chercher ?</em>
              </p>
            </Box>

            <Box title="3. Les aspects — la facilité ou la friction">
              <p>
                Les <A href="/aspects">aspects</A> disent si le besoin circule
                librement ou s’il rencontre un obstacle intérieur. Une Lune
                douce en <A href="/signes/poissons">Poissons</A> carrée à{" "}
                <A href="/planetes/saturne">Saturne</A> reste une Lune Poissons,
                mais avec un frein permanent. Les aspects répondent à :{" "}
                <em>qu’est-ce qui m’empêche ou m’aide ?</em>
              </p>
            </Box>

            <Box title="4. La phase — le rapport au Soleil">
              <p>
                La distance entre la Lune et le{" "}
                <A href="/planetes/soleil">Soleil</A> à la naissance donne la{" "}
                <strong>phase lunaire natale</strong> : nouvelle Lune, premier
                quartier, pleine Lune, etc. Elle décrit le rapport entre
                l’identité et le besoin, entre l’instinct et la conscience. La
                plupart des lectures l’oublient ; c’est une erreur.
              </p>
            </Box>

            <Box title="5. La dignité et la vitesse — l’état de la Lune">
              <p>
                La Lune est-elle chez elle (Cancer), exaltée (Taureau), en exil
                (Capricorne), en chute (Scorpion) ? Se déplaçait-elle vite ou
                lentement le jour de la naissance ? Ces détails techniques
                affinent l’interprétation. Voir les{" "}
                <A href="/maitrises">maîtrises planétaires</A>.
              </p>
            </Box>
          </div>

          <Callout tone="ok" title="La règle d’or">
            <p>
              Le <strong>signe donne le besoin</strong>, la{" "}
              <strong>maison donne le terrain</strong>, les{" "}
              <strong>aspects donnent la réalité vécue</strong>. Une
              interprétation qui saute deux de ces trois étages n’est pas une
              interprétation, c’est un horoscope.
            </p>
          </Callout>
        </section>

        {/* ── 4. TROUVER SA LUNE ───────────────────────────── */}
        <section className="space-y-5" aria-labelledby="trouver-sa-lune">
          <H2 id="trouver-sa-lune">
            Trouver sa Lune — et le piège de l’heure de naissance
          </H2>

          <p className="leading-relaxed text-text/85">
            La Lune est l’astre le plus rapide du ciel : elle avance de 12 à 15
            degrés par jour et traverse un signe en{" "}
            <strong>2 jours et demi environ</strong>. Elle boucle le zodiaque en
            27,3 jours. Conséquence directe :{" "}
            <strong>
              votre Lune ne se déduit pas de votre date de naissance seule
            </strong>
            .
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <Stat label="Vitesse moyenne" value="≈ 13° par jour" />
            <Stat label="Séjour dans un signe" value="≈ 2 jours et demi" />
            <Stat label="Tour complet du zodiaque" value="27,3 jours" />
          </div>

          <p className="leading-relaxed text-text/85">
            Si vous êtes né un jour où la Lune changeait de signe, une heure
            d’écart suffit à basculer d’une Lion à une Vierge — deux univers
            affectifs opposés. C’est le cas d’environ une naissance sur trois.
            D’où la marche à suivre :
          </p>

          <div className="space-y-4">
            <Box title="Vous connaissez votre heure de naissance">
              <p>
                Calculez votre <A href="/theme-astral">thème astral</A> : la
                position de la Lune sera exacte au degré près, et vous pourrez
                lire aussi sa maison et ses aspects. C’est la seule lecture
                complète.
              </p>
            </Box>

            <Box title="Vous ne la connaissez pas">
              <p>
                Calculez le thème pour <strong>12 h</strong>. Deux cas :
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong>La Lune reste toute la journée dans le même
                  signe</strong> — votre Lune en signe est fiable. Vous pouvez
                  lire ce guide sans réserve. Il vous manquera seulement la
                  maison.
                </li>
                <li>
                  <strong>La Lune change de signe ce jour-là</strong> — lisez
                  les deux portraits ci-dessous et voyez lequel décrit ce que
                  vous faites <em>quand vous allez mal</em>, pas ce que vous
                  aimeriez être. La réponse est presque toujours évidente.
                </li>
              </ul>
            </Box>
          </div>

          <Callout tone="warn" title="Le test qui ne trompe pas">
            <p>
              Pour identifier une Lune, ne demandez jamais « comment
              êtes-vous ? ». Demandez :{" "}
              <strong>
                « que faites-vous, concrètement, dans les dix minutes qui
                suivent une contrariété ? »
              </strong>{" "}
              Vous appelez quelqu’un, vous rangez, vous partez marcher, vous
              mangez, vous vous taisez, vous analysez, vous claquez une porte ?
              Cette réaction-là, brute, non filtrée, c’est votre Lune.
            </p>
          </Callout>
        </section>

        <Divider />

        {/* ── 5. TABLEAU ───────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="tableau">
          <H2 id="tableau">Les 12 Lunes en un tableau</H2>

          <p className="leading-relaxed text-text/85">
            Vue d’ensemble, à lire en diagonale. Chaque ligne se déplie ensuite
            en portrait complet.
          </p>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-soft">
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-sm">
                <thead className="bg-white/[0.04]">
                  <tr className="text-left">
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Lune en…
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Besoin vital
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Se sent en sécurité quand…
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Se referme quand…
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Mot-clé
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {overview.map((row, i) => (
                    <tr
                      key={row.slug}
                      className={
                        i % 2 === 0
                          ? "border-t border-white/10"
                          : "border-t border-white/10 bg-white/[0.02]"
                      }
                    >
                      <td className="px-5 py-4 align-top">
                        <span className="inline-flex items-center gap-2">
                          <span
                            aria-hidden="true"
                            className={`h-2 w-2 shrink-0 rounded-full ${SIGN_TONE[row.slug].dot}`}
                          />
                          <a
                            href={`#lune-en-${row.slug}`}
                            className="font-medium text-white underline decoration-white/20 transition hover:decoration-white/60"
                          >
                            {row.sign}
                          </a>
                        </span>
                      </td>
                      <td className="px-5 py-4 align-top text-text/85">
                        {row.need}
                      </td>
                      <td className="px-5 py-4 align-top text-text/85">
                        {row.safe}
                      </td>
                      <td className="px-5 py-4 align-top text-text/85">
                        {row.shuts}
                      </td>
                      <td className="px-5 py-4 align-top">
                        <span
                          className={`inline-flex rounded-full border px-2.5 py-1 text-xs ${SIGN_TONE[row.slug].pill}`}
                        >
                          {row.word}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-text/65">
            Ce tableau donne la couleur générale. Il ne remplace pas la lecture
            de la maison et des aspects : deux personnes avec la même Lune en
            signe peuvent avoir des vies affectives très différentes.
          </p>
        </section>

        <Divider />

        {/* ── 6. LES 12 LUNES ──────────────────────────────── */}
        <section className="space-y-6" aria-labelledby="les-12-lunes">
          <H2 id="les-12-lunes">Les 12 Lunes en profondeur</H2>

          <p className="leading-relaxed text-text/85">
            Chaque portrait suit la même trame : le besoin, ce qui rassure, ce
            qui fait basculer, la manière d’aimer, la mémoire d’enfance, le
            piège, le levier — et la phrase qu’on entend à tort. Lisez d’abord
            la vôtre ; puis celle de la personne avec qui vous vivez. C’est
            généralement là que les choses s’éclairent.
          </p>

          <div className="grid gap-6 lg:grid-cols-2">
            <MoonCard
              sign="Bélier"
              slug="belier"
              element="feu"
              modality="cardinal"
              motto="Je réagis, donc je vais bien"
            >
              <p>
                L’émotion arrive d’un bloc, sans préavis, et repart aussi vite.
                Cette Lune ne rumine pas : elle décharge. Elle a besoin que
                quelque chose <em>bouge</em> pour se sentir vivante, et confond
                volontiers l’intensité avec la sécurité.
              </p>
              <Line label="Besoin vital">
                pouvoir agir immédiatement, sans demander la permission.
              </Line>
              <Line label="En sécurité quand">
                elle est libre de dire non, de partir, de trancher.
              </Line>
              <Line label="Bascule quand">
                on la ralentit, on la materne, on lui demande d’attendre.
              </Line>
              <Line label="En couple">
                franche jusqu’à la brutalité, incapable de faire semblant.
                Colère rapide, rancune nulle. Elle a besoin qu’on lui réponde,
                pas qu’on l’apaise.
              </Line>
              <Line label="La mémoire">
                un environnement où il fallait réagir vite, se défendre seul,
                ne pas montrer sa peur.
              </Line>
              <Line label="Le piège">
                traiter chaque émotion comme une urgence à régler dans la
                minute.
              </Line>
              <Line label="Le levier">
                vingt secondes entre le ressenti et l’action. Vingt secondes
                suffisent.
              </Line>
              <Line label="On lui dit à tort">
                « tu es agressif ». Non : il est <em>rapide</em>, et la
                lenteur des autres lui fait peur.
              </Line>
            </MoonCard>

            <MoonCard
              sign="Taureau"
              slug="taureau"
              element="terre"
              modality="fixe"
              motto="Tant que rien ne bouge, je vais bien"
            >
              <p>
                C’est la Lune la plus solide du zodiaque — la tradition la dit
                <strong> exaltée</strong>, c’est-à-dire à son meilleur. Elle
                digère lentement, ne s’affole pas, et ramène toute émotion au
                concret : le corps, le repas, le lit, le compte en banque.
              </p>
              <Line label="Besoin vital">
                la continuité. Que demain ressemble à aujourd’hui.
              </Line>
              <Line label="En sécurité quand">
                le quotidien est stable, le corps apaisé, la maison en ordre.
              </Line>
              <Line label="Bascule quand">
                le changement est brutal, imposé, ou touche à la sécurité
                matérielle.
              </Line>
              <Line label="En couple">
                rassurée par la régularité bien plus que par les déclarations.
                Elle mesure l’amour en présence, en gestes répétés, en peau.
              </Line>
              <Line label="La mémoire">
                la sécurité s’est comptée en présence physique et en choses
                tangibles — ou, à l’inverse, en a cruellement manqué.
              </Line>
              <Line label="Le piège">
                confondre confort et bonheur, et rester dix ans dans une
                situation qui ne fait plus mal mais ne fait plus rien.
              </Line>
              <Line label="Le levier">
                des rituels choisis plutôt que subis : ils la nourrissent
                vraiment, sans l’immobiliser.
              </Line>
              <Line label="On lui dit à tort">
                « tu es matérialiste ». Non : elle a besoin d’un sol sous les
                pieds pour ressentir quoi que ce soit.
              </Line>
            </MoonCard>

            <MoonCard
              sign="Gémeaux"
              slug="gemeaux"
              element="air"
              modality="mutable"
              motto="Si je peux l’expliquer, je peux le supporter"
            >
              <p>
                Cette Lune fait passer toute émotion par le langage. Elle
                nomme, commente, raconte — et se calme en comprenant. Son
                inquiétude est mentale : elle tourne, elle cherche
                l’information manquante, elle ne dort pas tant qu’un non-dit
                traîne.
              </p>
              <Line label="Besoin vital">
                mettre des mots. Sur tout. Immédiatement.
              </Line>
              <Line label="En sécurité quand">
                elle comprend ce qui se passe et peut en parler à quelqu’un.
              </Line>
              <Line label="Bascule quand">
                on se tait, on boude, on lui cache une information.
              </Line>
              <Line label="En couple">
                a besoin de parler pour se sentir aimée. Une conversation vaut
                une étreinte. Le silence prolongé est vécu comme un abandon.
              </Line>
              <Line label="La mémoire">
                un enfant qui a rassuré son entourage en expliquant, en
                traduisant, en faisant le lien entre les adultes.
              </Line>
              <Line label="Le piège">
                commenter l’émotion au lieu de la traverser. On peut parler
                pendant des années à côté de ce qu’on ressent.
              </Line>
              <Line label="Le levier">
                écrire plutôt que ressasser, et accepter de rester dix minutes
                dans un ressenti sans le nommer.
              </Line>
              <Line label="On lui dit à tort">
                « tu es superficiel ». Non : il traite la douleur par le haut,
                parce que c’est le seul endroit où il sait la manier.
              </Line>
            </MoonCard>

            <MoonCard
              sign="Cancer"
              slug="cancer"
              element="eau"
              modality="cardinal"
              motto="J’appartiens, donc j’existe"
            >
              <p>
                La Lune est ici <strong>chez elle</strong> : c’est sa
                <A href="/maitrises"> maîtrise</A>. Tout est amplifié — la
                sensibilité, la mémoire, l’instinct de protection. Cette Lune
                ressent avant de comprendre, et elle a rarement tort.
              </p>
              <Line label="Besoin vital">
                appartenir à quelqu’un, à un lieu, à une histoire.
              </Line>
              <Line label="En sécurité quand">
                le lien est stable et qu’il y a une maison où revenir.
              </Line>
              <Line label="Bascule quand">
                elle sent un refroidissement, même minuscule. Son radar est
                imparable.
              </Line>
              <Line label="En couple">
                materne, anticipe, protège. Elle donne beaucoup et attend qu’on
                devine ce qu’elle n’ose pas demander.
              </Line>
              <Line label="La mémoire">
                hypertrophiée. Elle se souvient du ton exact d’une phrase dite
                il y a quinze ans, et de ce qu’elle portait ce jour-là.
              </Line>
              <Line label="Le piège">
                nourrir l’autre pour ne pas être quittée, puis en vouloir
                silencieusement de ne pas recevoir autant.
              </Line>
              <Line label="Le levier">
                demander clairement, une fois, au lieu d’espérer longtemps.
              </Line>
              <Line label="On lui dit à tort">
                « tu es fragile ». Non : c’est souvent la personne la plus
                solide de la famille en temps de crise.
              </Line>
            </MoonCard>

            <MoonCard
              sign="Lion"
              slug="lion"
              element="feu"
              modality="fixe"
              motto="Si je compte pour toi, tout va bien"
            >
              <p>
                Cette Lune a besoin d’un regard. Pas d’un public — d’un regard.
                Elle se réchauffe quand on la choisit, elle se glace quand elle
                se sent quantité négligeable. Sa générosité est réelle, et
                toujours un peu adressée.
              </p>
              <Line label="Besoin vital">
                compter pour quelqu’un, et le savoir.
              </Line>
              <Line label="En sécurité quand">
                elle est vue, nommée, préférée.
              </Line>
              <Line label="Bascule quand">
                on l’humilie, on l’ignore, ou on la compare à un autre.
              </Line>
              <Line label="En couple">
                loyale, chaleureuse, un peu théâtrale. Elle a besoin
                d’admiration réciproque, et le silence lui coûte plus que le
                conflit.
              </Line>
              <Line label="La mémoire">
                a existé par ce qu’elle donnait, ce qu’elle réussissait, ce
                qu’elle faisait briller chez les autres.
              </Line>
              <Line label="Le piège">
                confondre attention et amour, puis en demander toujours un peu
                plus pour être sûre.
              </Line>
              <Line label="Le levier">
                demander la reconnaissance au lieu d’essayer de la mériter en
                boucle.
              </Line>
              <Line label="On lui dit à tort">
                « tu es égocentrique ». Non : elle a besoin d’être vue pour
                pouvoir donner, et elle donne énormément.
              </Line>
            </MoonCard>

            <MoonCard
              sign="Vierge"
              slug="vierge"
              element="terre"
              modality="mutable"
              motto="Si c’est en ordre, je peux respirer"
            >
              <p>
                L’anxiété de cette Lune ne se dit pas, elle s’organise. Ranger,
                trier, corriger, prévoir : ce sont ses gestes d’apaisement. Elle
                exprime l’affection par le service, et se sent aimée quand on
                fait attention aux détails qui la concernent.
              </p>
              <Line label="Besoin vital">
                être utile, et que les choses soient nettes.
              </Line>
              <Line label="En sécurité quand">
                le cadre est prévisible et qu’elle a une tâche à accomplir.
              </Line>
              <Line label="Bascule quand">
                c’est le chaos, l’imprévu, ou qu’elle se sent inutile.
              </Line>
              <Line label="En couple">
                montre l’amour par des actes concrets et supporte mal les
                grands mots. Corrige ce qui la dérange au lieu de dire qu’elle
                a peur.
              </Line>
              <Line label="La mémoire">
                a appris très tôt que l’affection se méritait en étant sage,
                serviable, irréprochable.
              </Line>
              <Line label="Le piège">
                la critique — la sienne comme celle des autres. C’est
                l’inquiétude qui parle, jamais le mépris.
              </Line>
              <Line label="Le levier">
                nommer l’inquiétude à voix haute avant de corriger l’autre. Le
                corps, aussi, parle vite pour elle.
              </Line>
              <Line label="On lui dit à tort">
                « tu es froide ». Non : elle est pudique, et elle vous a préparé
                à manger.
              </Line>
            </MoonCard>

            <MoonCard
              sign="Balance"
              slug="balance"
              element="air"
              modality="cardinal"
              motto="Si l’ambiance est bonne, je vais bien"
            >
              <p>
                Cette Lune se règle sur l’autre comme un thermostat. Elle capte
                immédiatement une tension dans une pièce et se met en devoir de
                la dissoudre. Son besoin n’est pas d’être aimée : c’est que
                l’air soit respirable.
              </p>
              <Line label="Besoin vital">
                l’harmonie du lien, l’élégance des rapports.
              </Line>
              <Line label="En sécurité quand">
                l’autre va bien et que rien ne grince.
              </Line>
              <Line label="Bascule quand">
                le conflit éclate, ou qu’il faut choisir en décevant quelqu’un.
              </Line>
              <Line label="En couple">
                attentive, conciliante, très douée pour l’ajustement. Elle dit
                oui trop vite et présente la facture bien plus tard.
              </Line>
              <Line label="La mémoire">
                un enfant médiateur, souvent placé entre deux adultes dont il
                surveillait l’ambiance.
              </Line>
              <Line label="Le piège">
                ne plus savoir ce qu’elle ressent quand elle est seule, faute
                de quelqu’un sur qui se régler.
              </Line>
              <Line label="Le levier">
                dire le désaccord tôt et petit, avant qu’il ne devienne une
                rupture nette.
              </Line>
              <Line label="On lui dit à tort">
                « tu es indécise ». Non : elle pèse le coût relationnel de
                chaque option, et il est réel.
              </Line>
            </MoonCard>

            <MoonCard
              sign="Scorpion"
              slug="scorpion"
              element="eau"
              modality="fixe"
              motto="Dis-moi la vérité, même si elle fait mal"
            >
              <p>
                La tradition parle de <strong>chute</strong> : le besoin de
                sécurité y est le moins confortablement logé. Cette Lune ne
                connaît pas les demi-mesures. Elle ressent tout à une intensité
                extrême, et le montre le moins possible.
              </p>
              <Line label="Besoin vital">
                la vérité et la profondeur. Le superficiel l’asphyxie.
              </Line>
              <Line label="En sécurité quand">
                rien n’est caché et que le lien va jusqu’au bout.
              </Line>
              <Line label="Bascule quand">
                elle détecte un mensonge, une tiédeur, une porte de sortie.
              </Line>
              <Line label="En couple">
                fusion ou rien. Elle teste, souvent sans le savoir, pour vérifier
                qu’on reste. Sa loyauté, une fois donnée, est totale.
              </Line>
              <Line label="La mémoire">
                un non-dit dans l’enfance — un secret, une disparition, un sujet
                interdit qu’elle a senti sans qu’on le lui dise.
              </Line>
              <Line label="Le piège">
                le contrôle, la jalousie, puis la coupure radicale et
                définitive. Elle ne claque pas la porte : elle mure.
              </Line>
              <Line label="Le levier">
                dire l’intensité au lieu de la porter seule. Verbalisée, elle
                devient une force rare.
              </Line>
              <Line label="On lui dit à tort">
                « tu es toxique ». Non : elle exige une authenticité que très
                peu de gens savent soutenir.
              </Line>
            </MoonCard>

            <MoonCard
              sign="Sagittaire"
              slug="sagittaire"
              element="feu"
              modality="mutable"
              motto="Tant qu’il y a un horizon, je respire"
            >
              <p>
                Cette Lune se rassure par le sens. Elle transforme une peine en
                leçon, un échec en expérience, une rupture en voyage. C’est une
                vraie force — et parfois une fuite très bien déguisée.
              </p>
              <Line label="Besoin vital">
                de l’espace, du mouvement, et une raison de croire que ça vaut
                le coup.
              </Line>
              <Line label="En sécurité quand">
                l’horizon reste ouvert et qu’une porte est toujours possible.
              </Line>
              <Line label="Bascule quand">
                on l’enferme, on la surveille, on rétrécit son monde.
              </Line>
              <Line label="En couple">
                chaleureuse, généreuse, drôle. Elle aime beaucoup, à condition
                de ne pas se sentir tenue en laisse.
              </Line>
              <Line label="La mémoire">
                une famille qui bougeait beaucoup, ou au contraire un huis clos
                dont il a fallu s’échapper par l’imagination.
              </Line>
              <Line label="Le piège">
                convertir toute tristesse en projet et ne jamais s’asseoir dans
                ce qui fait mal.
              </Line>
              <Line label="Le levier">
                rester. Une heure, un soir. Sans partir, sans relativiser, sans
                faire de blague.
              </Line>
              <Line label="On lui dit à tort">
                « tu t’en fiches ». Non : il encaisse en avançant, parce que
                s’arrêter lui fait peur.
              </Line>
            </MoonCard>

            <MoonCard
              sign="Capricorne"
              slug="capricorne"
              element="terre"
              modality="cardinal"
              motto="Je gère, ne t’inquiète pas pour moi"
            >
              <p>
                La tradition la dit <strong>en exil</strong> : le besoin
                affectif y est le moins spontanément exprimé. Cette Lune ferme
                le robinet et tient. Elle est souvent, à l’âge adulte, la plus
                fiable du zodiaque — et la plus seule.
              </p>
              <Line label="Besoin vital">
                tenir debout sans dépendre de personne.
              </Line>
              <Line label="En sécurité quand">
                elle maîtrise, elle assume, elle a une responsabilité claire.
              </Line>
              <Line label="Bascule quand">
                on la met en position de dépendance ou de débordement
                émotionnel.
              </Line>
              <Line label="En couple">
                peu démonstrative, extrêmement fidèle. Elle prouve par la durée
                ce qu’elle ne dira jamais en mots.
              </Line>
              <Line label="La mémoire">
                a grandi trop vite. Un parent absent, malade, débordé, ou une
                exigence de sérieux très précoce.
              </Line>
              <Line label="Le piège">
                croire que demander de l’aide est un aveu de faiblesse — et
                s’effondrer seule, en silence, très tard.
              </Line>
              <Line label="Le levier">
                accepter une aide par semaine. Une seule. C’est un
                entraînement, pas une capitulation.
              </Line>
              <Line label="On lui dit à tort">
                « tu es insensible ». Non : elle est pudique, et elle sera là
                dans vingt ans quand les autres seront partis.
              </Line>
            </MoonCard>

            <MoonCard
              sign="Verseau"
              slug="verseau"
              element="air"
              modality="fixe"
              motto="Laisse-moi respirer et je reviens"
            >
              <p>
                Cette Lune observe sa propre émotion depuis le plafond. Elle
                comprend parfaitement ce qu’elle ressent — et le ressent avec
                un léger décalage, comme si c’était le cas de quelqu’un
                d’autre. C’est sa protection.
              </p>
              <Line label="Besoin vital">
                la liberté et la lucidité. Pouvoir prendre du recul à volonté.
              </Line>
              <Line label="En sécurité quand">
                personne ne lui réclame de comptes sur ce qu’elle ressent.
              </Line>
              <Line label="Bascule quand">
                on la possède, on la colle, on lui fait du chantage affectif.
              </Line>
              <Line label="En couple">
                amitié amoureuse, fidélité choisie plutôt que due. Elle a besoin
                d’un espace à elle pour rester présente.
              </Line>
              <Line label="La mémoire">
                s’est sentie différente très tôt — famille atypique, ou climat
                affectif étrangement froid, qu’il a fallu rationaliser.
              </Line>
              <Line label="Le piège">
                intellectualiser jusqu’à ne plus rien sentir, puis rompre d’un
                coup, proprement, sans retour.
              </Line>
              <Line label="Le levier">
                cinq minutes dans le corps, sans commentaire. La respiration
                avant l’analyse.
              </Line>
              <Line label="On lui dit à tort">
                « tu es détaché ». Non : il tient à distance ce qui l’atteint
                trop, et il y tient énormément.
              </Line>
            </MoonCard>

            <MoonCard
              sign="Poissons"
              slug="poissons"
              element="eau"
              modality="mutable"
              motto="Je ressens tout, y compris ce qui n’est pas à moi"
            >
              <p>
                Éponge émotionnelle. Cette Lune capte l’état d’une pièce en y
                entrant et ne sait pas toujours distinguer ce qui lui
                appartient de ce qu’elle a absorbé. D’où une immense
                compassion — et une fatigue difficile à expliquer.
              </p>
              <Line label="Besoin vital">
                se relier à quelque chose de plus grand : l’art, le soin, le
                silence, l’amour.
              </Line>
              <Line label="En sécurité quand">
                le lien est doux, poreux, sans agression ni exigence.
              </Line>
              <Line label="Bascule quand">
                le réel est dur, cynique ou brutal. Elle se dissout.
              </Line>
              <Line label="En couple">
                dévouée, intuitive, romanesque. Elle voit l’autre tel qu’il
                pourrait devenir, ce qui est aussi beau que dangereux.
              </Line>
              <Line label="La mémoire">
                a capté très tôt les émotions de la maison, y compris celles
                que personne ne formulait.
              </Line>
              <Line label="Le piège">
                porter l’émotion des autres, sauver, puis s’échapper — dans le
                rêve, l’idéalisation ou pire.
              </Line>
              <Line label="Le levier">
                une question, plusieurs fois par jour :{" "}
                <em>est-ce que c’est à moi ?</em> Tout change quand la réponse
                est non.
              </Line>
              <Line label="On lui dit à tort">
                « tu es faible ». Non : elle absorbe ce que la plupart des gens
                ne perçoivent même pas.
              </Line>
            </MoonCard>
          </div>

          <Callout tone="note" title="Une précision qui change tout">
            <p>
              Aucun de ces portraits n’est une fatalité. Ce sont des{" "}
              <strong>mécanismes de protection</strong>, appris quand nous
              n’avions pas d’autre choix. Les reconnaître, c’est déjà cesser de
              les subir : on peut garder le besoin et changer le réflexe. C’est
              même, très exactement, ce que travaille l’
              <A href="/astro-psychologie">astro-psychologie</A>.
            </p>
          </Callout>
        </section>

        <Divider />

        {/* ── 7. LUNE / SOLEIL ─────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="lune-soleil">
          <H2 id="lune-soleil">
            Quand la Lune contredit le Soleil : la tension la plus utile du
            thème
          </H2>

          <p className="leading-relaxed text-text/85">
            C’est là que l’astrologie devient vraiment intéressante. Le Soleil
            indique une direction ; la Lune, un besoin. Quand les deux sont dans
            des éléments incompatibles, la personne passe sa vie à vouloir une
            chose et à avoir besoin de son contraire. Ce n’est pas un défaut de
            fabrication : c’est le moteur d’une vie.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <Box title="Soleil et Lune dans le même élément">
              <p>
                Grande cohérence intérieure : ce que la personne veut et ce dont
                elle a besoin vont dans le même sens. Elle avance vite, se
                connaît bien… et manque parfois de contrepoids. Peu de conflit
                intérieur signifie aussi peu de recul sur soi.
              </p>
            </Box>

            <Box title="Feu avec Air, Terre avec Eau">
              <p>
                Éléments complices. Le Feu a besoin d’Air pour brûler, la Terre
                d’Eau pour être fertile. La Lune soutient l’élan solaire au lieu
                de le freiner : c’est confortable, et cela donne des gens
                étonnamment constants.
              </p>
            </Box>

            <Box title="Feu avec Eau, Terre avec Air">
              <p>
                Tension féconde. Un Soleil{" "}
                <A href="/signes/belier">Bélier</A> avec une Lune{" "}
                <A href="/signes/cancer">Cancer</A> fonce puis a besoin de
                rentrer. Un Soleil <A href="/signes/capricorne">Capricorne</A>{" "}
                avec une Lune <A href="/signes/poissons">Poissons</A> construit
                une carrière solide en rêvant de tout laisser tomber. La vie
                consiste à donner sa place à chacun des deux, en alternance —
                jamais à choisir.
              </p>
            </Box>

            <Box title="Soleil et Lune dans le même signe">
              <p>
                Naissance autour d’une <strong>nouvelle Lune</strong> :
                identité et besoin fusionnent. Beaucoup d’instinct, une
                direction très claire, mais peu de distance vis-à-vis de
                soi-même. Ces personnes se découvrent souvent tard — d’un coup,
                et très fort.
              </p>
            </Box>
          </div>

          <Callout tone="ok" title="Le diagnostic express">
            <p>
              Si vous vous épuisez dans une vie qui, sur le papier, correspond à
              vos objectifs :{" "}
              <strong>
                regardez votre Lune, pas votre Soleil
              </strong>
              . Neuf fois sur dix, le besoin lunaire n’est nourri nulle part
              dans votre emploi du temps.
            </p>
          </Callout>
        </section>

        {/* ── 8. LUNE EN MAISONS ───────────────────────────── */}
        <section className="space-y-5" aria-labelledby="lune-maisons">
          <H2 id="lune-maisons">
            La Lune en maisons : où vous allez chercher votre sécurité
          </H2>

          <p className="leading-relaxed text-text/85">
            Le signe dit <em>de quoi</em> vous avez besoin. La{" "}
            <A href="/maisons">maison</A> dit <em>où</em> vous allez le
            chercher — et c’est souvent l’information la plus opérationnelle du
            thème. Voici les douze terrains, en une ligne chacun.
          </p>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <ul className="divide-y divide-white/10">
              <li className="p-4 text-text/85">
                <strong className="text-white">
                  <A href="/maisons/maison-1">Maison 1</A>
                </strong>{" "}
                — la sécurité passe par l’expression directe de soi. L’humeur
                se voit sur le visage, tout de suite.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">
                  <A href="/maisons/maison-2">Maison 2</A>
                </strong>{" "}
                — se rassure par le concret, l’argent, ce qui est à soi.{" "}
                <A href="/blog/finances-theme-astral">Le rapport aux finances</A>{" "}
                est émotionnel avant d’être rationnel.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">
                  <A href="/maisons/maison-3">Maison 3</A>
                </strong>{" "}
                — a besoin de parler, d’échanger, de circuler. Le silence est
                une punition.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">
                  <A href="/maisons/maison-4">Maison 4</A>
                </strong>{" "}
                — position de force : le foyer, la famille et les racines
                nourrissent directement le besoin. La maison n’est pas un décor,
                c’est un organe.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">
                  <A href="/maisons/maison-5">Maison 5</A>
                </strong>{" "}
                — se ressource en créant, en jouant, en aimant, avec les
                enfants.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">
                  <A href="/maisons/maison-6">Maison 6</A>
                </strong>{" "}
                — la sécurité passe par le quotidien réglé, le travail utile,
                le corps. Émotions et santé sont ici étroitement liées.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">
                  <A href="/maisons/maison-7">Maison 7</A>
                </strong>{" "}
                — a besoin de l’autre pour se sentir entière. Le couple est le
                lieu où tout se joue ; voir la{" "}
                <A href="/synastrie">synastrie</A>.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">
                  <A href="/maisons/maison-8">Maison 8</A>
                </strong>{" "}
                — sécurité par l’intensité, la transformation, ce qui est
                partagé en profondeur. Rien de tiède ne la nourrit.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">
                  <A href="/maisons/maison-9">Maison 9</A>
                </strong>{" "}
                — a besoin de sens, d’ailleurs, de croyances. Se soigne en
                élargissant l’horizon.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">
                  <A href="/maisons/maison-10">Maison 10</A>
                </strong>{" "}
                — l’émotionnel se joue en public, dans le métier, dans la
                réputation. Voir{" "}
                <A href="/blog/orientation-professionnelle-theme-astral">
                  l’orientation professionnelle
                </A>
                .
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">
                  <A href="/maisons/maison-11">Maison 11</A>
                </strong>{" "}
                — se rassure dans le groupe, les amis, les projets collectifs.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">
                  <A href="/maisons/maison-12">Maison 12</A>
                </strong>{" "}
                — besoin de retrait, de silence, d’intériorité. Une sensibilité
                immense, rarement montrée.
              </li>
            </ul>
          </div>
        </section>

        <Divider />

        {/* ── 9. ASPECTS ───────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="aspects">
          <H2 id="aspects">Les aspects de la Lune : ce qui change tout</H2>

          <p className="leading-relaxed text-text/85">
            Un <A href="/aspects">aspect</A> est un angle entre deux planètes.
            Appliqué à la Lune, il indique ce qui facilite ou complique
            l’accès au besoin. Les angles <em>durs</em> (carré, opposition) ne
            sont pas des malédictions : ils obligent à construire consciemment
            ce que d’autres reçoivent sans effort.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <Box tone="amber" title="Lune – Saturne">
              <p>
                Contraction du besoin. On a appris à ne pas déranger, à ne pas
                demander. Retenue, sérieux, sentiment de solitude précoce — et
                une maturité affective réelle après 30 ans. Voir{" "}
                <A href="/blog/saturnien">le profil saturnien</A>.
              </p>
            </Box>
            <Box tone="teal" title="Lune – Neptune">
              <p>
                Porosité maximale. Compassion, intuition, art — mais frontières
                floues, idéalisation, difficulté à savoir ce qui est à soi.
                Terrain classique des relations de sauvetage.
              </p>
            </Box>
            <Box tone="fuchsia" title="Lune – Pluton">
              <p>
                Intensité extrême et enjeux de contrôle. L’attachement engage
                tout. Ce sont des Lunes qui traversent des transformations
                affectives radicales — voir aussi{" "}
                <A href="/blog/manipulateurs-pervers-narcissiques-astrologie">
                  les dynamiques d’emprise
                </A>
                .
              </p>
            </Box>
            <Box tone="sky" title="Lune – Uranus">
              <p>
                Besoin d’indépendance imprévisible. Ruptures nettes, humeurs en
                dents de scie, horreur de la routine affective. Grande liberté
                intérieure, à condition d’assumer le rythme.
              </p>
            </Box>
            <Box tone="red" title="Lune – Mars">
              <p>
                Réactivité immédiate. L’émotion sort vite, franchement, parfois
                trop. Beaucoup de courage affectif, peu de patience.
              </p>
            </Box>
            <Box tone="rose" title="Lune – Vénus">
              <p>
                Douceur et goût du lien harmonieux. Charme réel, besoin de
                plaire, difficulté à supporter la laideur relationnelle.
              </p>
            </Box>
          </div>

          <p className="text-sm leading-relaxed text-text/65">
            Un aspect ne remplace jamais le signe : il le module. Une Lune
            Taureau carrée à Uranus reste une Lune Taureau — simplement, sa
            stabilité sera régulièrement mise à l’épreuve.
          </p>
        </section>

        {/* ── 10. PHASE ────────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="phase">
          <H2 id="phase">Votre phase de Lune de naissance</H2>

          <p className="leading-relaxed text-text/85">
            La phase est la distance angulaire entre le Soleil et la Lune au
            moment de la naissance. Elle décrit le <strong>rapport</strong>{" "}
            entre l’identité et le besoin — une couche d’interprétation que la
            plupart des lectures grand public ignorent, alors qu’elle est
            immédiatement parlante. Pour le mécanisme complet, voir{" "}
            <A href="/blog/pleine-lune-nouvelle-lune-cycles-astrologie">
              les cycles de la Lune
            </A>
            .
          </p>

          <PhaseStrip
            labels={["Nouvelle", "Croissant", "Premier quartier", "Gibbeuse", "Pleine", "Disséminante", "Dernier quartier", "Balsamique"]}
            caption="Les huit phases du cycle lunaire, de la nouvelle Lune à la Lune balsamique."
          />

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <ul className="divide-y divide-white/10">
              <li className="p-4 text-text/85">
                <strong className="text-white">Nouvelle Lune (0–45°)</strong> —
                instinct, élan, démarrage. Agit d’abord, comprend ensuite.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">Croissant (45–90°)</strong> —
                lutte contre le passé, volonté d’émancipation.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">
                  Premier quartier (90–135°)
                </strong>{" "}
                — crise fertile, besoin de construire, goût de l’action.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">Gibbeuse (135–180°)</strong> —
                perfectionnement, analyse, quête du sens juste.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">Pleine Lune (180–225°)</strong> —
                conscience par l’autre. Tout se joue en relation, en miroir.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">
                  Disséminante (225–270°)
                </strong>{" "}
                — besoin de transmettre, d’enseigner, de partager ce qui a été
                compris.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">
                  Dernier quartier (270–315°)
                </strong>{" "}
                — remise en question des valeurs reçues, réorientation.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">Balsamique (315–360°)</strong> —
                clôture, intériorité, sensibilité aux fins de cycle. Souvent
                mystique.
              </li>
            </ul>
          </div>
        </section>

        {/* ── 11. DIGNITÉS ─────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="dignites">
          <H2 id="dignites">
            Domicile, exaltation, exil, chute : ce que ça veut vraiment dire
          </H2>

          <p className="leading-relaxed text-text/85">
            Ces quatre mots effraient les débutants. Ils décrivent simplement
            le <strong>confort</strong> d’une planète dans un signe donné — pas
            sa valeur, et encore moins la vôtre.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <Box tone="violet" title="Domicile — Lune en Cancer">
              <p>
                La Lune est chez elle. Le besoin s’exprime naturellement, la
                sensibilité est fluide, l’instinct fiable. Revers : peu de
                distance, difficulté à se détacher.
              </p>
            </Box>
            <Box tone="emerald" title="Exaltation — Lune en Taureau">
              <p>
                Position la plus stable du zodiaque. Le besoin est simple à
                nourrir, l’humeur régulière, la présence apaisante. Revers :
                l’inertie.
              </p>
            </Box>
            <Box tone="amber" title="Exil — Lune en Capricorne">
              <p>
                Le besoin affectif ne trouve pas d’expression spontanée. On
                apprend à se passer de ce qu’on n’a pas reçu. Revers positif :
                une fiabilité et une endurance affectives peu communes.
              </p>
            </Box>
            <Box tone="fuchsia" title="Chute — Lune en Scorpion">
              <p>
                Le besoin est vécu à une intensité difficile à réguler. Rien
                n’est léger. Revers positif : une profondeur et une lucidité
                psychologiques que rien ne remplace.
              </p>
            </Box>
          </div>

          <Callout tone="warn" title="À ne pas confondre">
            <p>
              Exil et chute ne signifient <strong>pas</strong> « mauvaise
              personne » ni « vie difficile ». Elles signalent un besoin qui
              devra être construit consciemment plutôt que reçu. Dans les faits,
              ce sont fréquemment les Lunes les plus fortes à l’âge adulte.
            </p>
          </Callout>
        </section>

        {/* ── 12. CYCLES ───────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="cycles">
          <H2 id="cycles">
            Les cycles : Lune en transit, retour lunaire, Lune progressée
          </H2>

          <div className="space-y-4">
            <Box title="La Lune en transit — le rythme des 2 jours et demi">
              <p>
                Tous les deux jours et demi, la Lune du ciel change de signe et
                colore l’humeur collective. C’est ce qui explique les journées
                « où tout le monde est à cran » sans raison identifiable. Rien à
                voir avec votre Lune natale : c’est la météo, pas le climat.
                Suivez les dates dans le{" "}
                <A href="/blog/calendrier-pleine-lune-nouvelle-lune-2026-2027">
                  calendrier lunaire 2026-2027
                </A>
                .
              </p>
            </Box>

            <Box title="Le retour lunaire — tous les 27,3 jours">
              <p>
                Chaque mois, la Lune revient exactement sur sa position de
                naissance. Beaucoup de personnes sensibles remarquent un pic
                émotionnel ou une clarté particulière autour de cette date.
                C’est le cycle le plus court et le plus vérifiable des{" "}
                <A href="/transits">transits</A>.
              </p>
            </Box>

            <Box title="La Lune progressée — le cycle de 27 ans">
              <p>
                En progressions secondaires, la Lune avance d’environ un signe
                tous les <strong>deux ans et demi</strong> et boucle son tour en
                27 à 28 ans. Elle décrit le <em>climat affectif</em> d’une
                période de vie : ce dont vous avez besoin en ce moment, et qui
                n’est pas ce dont vous aviez besoin il y a trois ans. C’est l’un
                des outils prévisionnels les plus fiables — et les plus doux.
              </p>
            </Box>
          </div>
        </section>

        <Divider />

        {/* ── 13. ERREURS ──────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="erreurs">
          <H2 id="erreurs">Les 6 erreurs les plus fréquentes sur la Lune</H2>

          <div className="space-y-3">
            <Box title="1. Prendre sa Lune pour « son vrai signe »">
              <p>
                La Lune n’est pas un signe caché plus authentique que le
                Soleil. C’est une fonction différente. On ne remplace pas l’un
                par l’autre : on les lit ensemble.
              </p>
            </Box>
            <Box title="2. Confondre Lune natale et Lune du jour">
              <p>
                Votre Lune natale ne bouge jamais. La Lune du ciel change tous
                les deux jours et demi. Les horoscopes quotidiens parlent de la
                seconde ; ce guide parle de la première.
              </p>
            </Box>
            <Box title="3. Lire la Lune sans la maison">
              <p>
                Le signe sans la maison, c’est un besoin sans adresse. On sait
                de quoi la personne a besoin, mais pas où elle va le chercher —
                donc on ne peut rien lui conseiller d’utile.
              </p>
            </Box>
            <Box title="4. Réduire la Lune à la mère">
              <p>
                La Lune décrit la <em>fonction de soin</em> telle qu’elle a été
                reçue et intégrée. Cela inclut la mère, mais aussi le climat
                général de l’enfance, et parfois quelqu’un de tout autre.
              </p>
            </Box>
            <Box title="5. Croire qu’une Lune difficile condamne">
              <p>
                Un aspect dur décrit un apprentissage, pas un verdict. La partie
                la plus contrainte d’un thème est très souvent celle où la
                personne finit par devenir la plus compétente.
              </p>
            </Box>
            <Box title="6. Interpréter la Lune d’un autre à sa place">
              <p>
                Deux personnes avec la même Lune en signe ne vivent pas la même
                chose. L’histoire, la maison et les aspects font le reste. Le
                thème donne la structure, jamais le scénario.
              </p>
            </Box>
          </div>
        </section>

        {/* ── 14. À RETENIR ────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="retenir">
          <H2 id="retenir">Ce qu’il faut retenir</H2>

          <div className="relative overflow-hidden rounded-2xl border border-emerald-400/25 bg-gradient-to-br from-emerald-500/[0.10] via-sky-500/[0.05] to-transparent p-6">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl"
            />
            <ul className="relative space-y-3 leading-relaxed text-text/90">
              <li>
                🌙 <strong>La Lune, c’est le besoin</strong>, pas l’humeur. Elle
                dit ce qu’il vous faut pour tenir debout.
              </li>
              <li>
                🌙 <strong>Elle se voit quand vous allez mal</strong>, pas quand
                tout va bien. C’est le meilleur test d’identification.
              </li>
              <li>
                🌙 <strong>Elle change de signe tous les 2 jours et demi</strong>{" "}
                : sans l’heure de naissance, la lecture reste incertaine.
              </li>
              <li>
                🌙 <strong>Signe + maison + aspects</strong> : trois étages, et
                aucun n’est facultatif.
              </li>
              <li>
                🌙 <strong>Aucune Lune n’est mauvaise.</strong> Exil et chute
                décrivent un besoin à construire, pas un défaut.
              </li>
              <li>
                🌙{" "}
                <strong>
                  Quand la Lune n’est pas nourrie, rien d’autre ne fonctionne
                </strong>{" "}
                — ni le couple, ni le travail, ni les projets du Soleil.
              </li>
            </ul>
          </div>

          <p className="leading-relaxed text-text/85">
            Si vous ne deviez garder qu’une question de tout cet article, ce
            serait celle-ci :{" "}
            <strong>
              qu’est-ce que je fais, concrètement, cette semaine, pour nourrir
              ma Lune ?
            </strong>{" "}
            Pas symboliquement. Concrètement. Une Lune Taureau a besoin d’un
            vrai repas et d’une vraie nuit ; une Lune Gémeaux d’une
            conversation ; une Lune Capricorne d’avoir le droit, une fois, de
            ne pas gérer.
          </p>
        </section>

        {/* ── 15. FAQ ──────────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="faq">
          <H2 id="faq">Questions fréquentes sur la Lune en signes</H2>

          <div className="space-y-4">
            {faq.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-white/10 bg-black/20 p-5"
              >
                <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">
                  {item.q}
                </summary>
                <p className="leading-relaxed text-text/85">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ── CTA / MAILLAGE ───────────────────────────────── */}
        <section className="rounded-2xl border border-white/10 bg-black/20 p-6">
          <p className="text-sm text-text/60">Continuer la lecture</p>
          <div className="mt-3 space-y-3 leading-relaxed text-text/85">
            <p>
              Pour compléter le portrait affectif, lisez{" "}
              <A href="/blog/venus-en-signes-style-amoureux">
                Vénus en signes : votre style amoureux
              </A>{" "}
              et{" "}
              <A href="/blog/mars-en-signes-desir-libido-action">
                Mars en signes : désir et passage à l’action
              </A>
              . Lune, Vénus et Mars forment le triangle complet de la vie
              relationnelle : le besoin, le goût, l’élan.
            </p>
            <p>
              Si la Lune est dominante dans votre thème, le portrait détaillé
              du <A href="/blog/lunarien">type lunarien</A> vous concerne
              directement. Et pour situer votre Lune dans l’ensemble, commencez
              par{" "}
              <A href="/blog/qu-est-ce-qu-un-theme-astral">
                qu’est-ce qu’un thème astral
              </A>{" "}
              ou explorez le{" "}
              <A href="/dictionnaire-astrologique">dictionnaire astrologique</A>
              .
            </p>
          </div>
          <div className="mt-5">
            <Link
              href="/blog"
              className="inline-flex rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-text/90 transition hover:bg-white/10"
            >
              ← Tous les articles
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
