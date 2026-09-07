import type { ReactNode } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";

export const meta = {
  slug: "lune-en-signes-emotions-besoins",
  seoTitle: "Moon in Signs: The Complete Guide to the 12 Moons",
  title: "The Moon in the signs: emotions and the need for safety",
  description:
    "Your Moon sign reveals your core emotional need, your inner safety and your protective reflexes. The complete guide to the 12 Moons, sign by sign.",
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
   Layout components
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

/* ── Sign card, coloured by element ──────────────────────────── */

type ZodiacElement = "fire" | "earth" | "air" | "water";

function elementStyles(element: ZodiacElement) {
  if (element === "fire")
    return {
      border: "border-red-500/30",
      hoverBorder: "group-hover:border-red-400/50",
      iconWrap: "border-red-500/25 bg-red-500/10",
      glow: "from-red-500/10 to-transparent",
      titleHover: "group-hover:text-red-200",
      linkText: "group-hover:text-red-100",
      label: "text-red-200/80",
    };
  if (element === "earth")
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
      <strong className="text-text/95">{label}:</strong> {children}
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
  const id = `moon-in-${slug}`;
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
              Moon in {sign}
            </h3>
            <p className="mt-1 text-sm italic text-text/65">“{motto}”</p>
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
            Read the {sign} profile →
          </Link>
        </div>
      </div>
    </article>
  );
}

/* ── Overview table data ─────────────────────────────────────── */

const overview = [
  {
    sign: "Aries",
    slug: "belier",
    need: "To act right now",
    safe: "It can react without asking permission",
    shuts: "It is slowed down or mothered",
    word: "Impulse",
  },
  {
    sign: "Taurus",
    slug: "taureau",
    need: "For nothing to change",
    safe: "Daily life is steady and the body is at ease",
    shuts: "Sudden change, material insecurity",
    word: "Constancy",
  },
  {
    sign: "Gemini",
    slug: "gemeaux",
    need: "To put things into words",
    safe: "It understands what is going on and can talk about it",
    shuts: "Silence, unspoken things, a closed room",
    word: "Explanation",
  },
  {
    sign: "Cancer",
    slug: "cancer",
    need: "To belong",
    safe: "There is a place, people, continuity",
    shuts: "Rejection, indifference, uprooting",
    word: "Attachment",
  },
  {
    sign: "Leo",
    slug: "lion",
    need: "To matter to someone",
    safe: "It is seen, chosen, acknowledged",
    shuts: "Humiliation, indifference, comparison",
    word: "Recognition",
  },
  {
    sign: "Virgo",
    slug: "vierge",
    need: "To be useful, and for things to be tidy",
    safe: "Things are in order and predictable",
    shuts: "Chaos, the unexpected, feeling useless",
    word: "Adjustment",
  },
  {
    sign: "Libra",
    slug: "balance",
    need: "Harmony in the bond",
    safe: "The other person is fine and the mood is gentle",
    shuts: "Open conflict, tension, roughness",
    word: "Agreement",
  },
  {
    sign: "Scorpio",
    slug: "scorpion",
    need: "The truth, unfiltered",
    safe: "Nothing is hidden and the bond goes all the way",
    shuts: "Lies, lukewarmness, betrayal",
    word: "Depth",
  },
  {
    sign: "Sagittarius",
    slug: "sagittaire",
    need: "Space and meaning",
    safe: "The horizon stays open",
    shuts: "Confinement, control, pettiness",
    word: "Momentum",
  },
  {
    sign: "Capricorn",
    slug: "capricorne",
    need: "To stand on its own",
    safe: "It is in control, it carries the load, it owes nothing",
    shuts: "Forced dependence, emotional flooding",
    word: "Mastery",
  },
  {
    sign: "Aquarius",
    slug: "verseau",
    need: "To keep its freedom and its clarity",
    safe: "It can step back whenever it wants",
    shuts: "Possessiveness, fusion, emotional blackmail",
    word: "Distance",
  },
  {
    sign: "Pisces",
    slug: "poissons",
    need: "To connect to something larger",
    safe: "The bond is soft, porous, without aggression",
    shuts: "Harshness, cynicism, the brutality of reality",
    word: "Merging",
  },
];

const toc = [
  { id: "definition", label: "What the Moon really describes" },
  { id: "sun-moon-rising", label: "Sun, Moon, Rising: who does what" },
  { id: "method", label: "Reading your Moon in 5 steps" },
  { id: "find-your-moon", label: "Finding your Moon (and the birth-time trap)" },
  { id: "table", label: "The 12 Moons at a glance" },
  { id: "the-12-moons", label: "The 12 Moons in depth" },
  { id: "moon-sun", label: "When the Moon contradicts the Sun" },
  { id: "moon-houses", label: "The Moon in the houses" },
  { id: "aspects", label: "The aspects that change everything" },
  { id: "phase", label: "Your natal Moon phase" },
  { id: "dignities", label: "Domicile, exaltation, detriment, fall" },
  { id: "cycles", label: "Cycles: transits and progressed Moon" },
  { id: "mistakes", label: "The 6 most common mistakes" },
  { id: "takeaways", label: "Key takeaways" },
  { id: "faq", label: "Frequently asked questions" },
];

/* ── FAQ (display + JSON-LD from one source) ─────────────────── */

const faq = [
  {
    q: "How do I find out my Moon sign?",
    a: "You need to calculate your natal chart from your date, time and place of birth. The Moon changes sign roughly every two and a half days, so the date alone is not enough — the time of birth is often decisive.",
  },
  {
    q: "What does the Moon represent in a natal chart?",
    a: "The Moon describes your basic emotional need, the way you feel safe, your protective reflexes and your emotional memory. Where the Sun says who you are trying to become, the Moon says what you need in order to be well.",
  },
  {
    q: "What is the difference between the Sun, the Moon and the Rising sign?",
    a: "The Sun is your conscious direction and identity. The Moon is your intimate need and emotional reflex. The Rising sign is how you approach the outside world. The three are always read together, never in isolation.",
  },
  {
    q: "Can the Moon be in the same sign as the Sun?",
    a: "Yes. It means the person was born around a new Moon. Identity and need then pull in the same direction: a great deal of inner coherence, but usually less self-distance and little inner counterweight.",
  },
  {
    q: "Which is the most difficult Moon sign?",
    a: "No Moon is bad. Tradition speaks of detriment in Capricorn and fall in Scorpio because the need for safety is the least spontaneously met there. In practice these are often the strongest Moons in adulthood, once the mechanism is understood.",
  },
  {
    q: "Does the Moon describe the relationship with the mother?",
    a: "It describes how care was received and integrated in childhood, which includes the mother but is not limited to her. It speaks of the emotional climate you came from and of what you learned to do in order to feel safe.",
  },
  {
    q: "How long does the Moon stay in one sign?",
    a: "About two and a half days. It travels through the twelve signs in 27.3 days and moves 12 to 15 degrees per day, which makes it the fastest body in the natal chart.",
  },
  {
    q: "What if I do not know my birth time?",
    a: "Calculate the chart for noon. If the Moon does not change sign that day, its sign is reliable. If it does change, weigh the two portraits against your lived experience, or have your birth time rectified.",
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
              Emotions · Inner safety · Emotional memory
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-text/85">
              There is the person you are when everything is fine. And there is
              the one who shows up at 11 p.m., when you are tired, hurt or
              worried. <strong>That second person is your Moon.</strong>
            </p>

            <p className="mt-3 max-w-2xl leading-relaxed text-text/80">
              Your Sun sign describes who you are trying to become. Your Moon
              describes what you <em>need</em> in order to stay standing — and
              what you do automatically when that need goes unmet. It is the
              least chosen part of the{" "}
              <A href="/blog/qu-est-ce-qu-un-theme-astral">natal chart</A>, and
              by far the most decisive one day to day.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <Pill tone="violet">Keyword: Need</Pill>
              <Pill tone="sky">Pace: 2.5 days per sign</Pill>
              <Pill tone="emerald">Lever: Inner safety</Pill>
              <Pill tone="orange">Risk: Automatic reflex</Pill>
            </div>

            <div className="mt-4">
              <TagPillsInline tags={meta.tags} />
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <Stat label="Body" value="The Moon" />
              <Stat label="What it describes" value="The emotional need" />
              <Stat
                label="Key question"
                value="What do I need in order to feel safe?"
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
            Definition
          </p>
          <p className="relative mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
            <strong>The Moon in astrology</strong> represents the fundamental
            emotional need, the way a person feels safe and their protective
            reflexes. Its sign in the natal chart shows{" "}
            <strong>what someone needs in order to be well</strong> and how they
            react when that need is not met. The Moon changes sign roughly every
            two and a half days: two people born on the same day can have two
            different Moons.
          </p>
        </div>

        {/* ── TOC ──────────────────────────────────────────── */}
        <nav
          aria-label="Table of contents"
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/[0.07] to-transparent p-6"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200/70">
            Contents
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

        {/* ── 1. WHAT THE MOON DESCRIBES ───────────────────── */}
        <section className="space-y-5" aria-labelledby="definition">
          <H2 id="definition">
            What the Moon really describes (and what it does not)
          </H2>

          <p className="text-lg leading-relaxed text-text/85">
            Most articles will tell you the <A href="/planetes/lune">Moon</A>{" "}
            represents “emotions”. True, but far too vague to be useful. A
            sharper definition fits in one sentence:{" "}
            <strong>
              the Moon describes what you do automatically in order to feel
              safe.
            </strong>
          </p>

          <p className="leading-relaxed text-text/85">
            It is not a choice. It is a reflex, installed very early, before
            language, and it fires without passing through thought. When someone
            is tired, stung, anxious or in love, they do not respond with their
            Sun sign: they respond with their Moon. That is why the Moon is the
            easiest part of a chart to verify in real life — and often the most
            unsettling to discover.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <Box title="What the Moon describes">
              <ul className="list-disc space-y-2 pl-5">
                <li>the baseline emotional need, the one that is not negotiable</li>
                <li>how you reassure yourself, comfort yourself, withdraw</li>
                <li>emotional memory: what the body kept from childhood</li>
                <li>the inner climate, the background mood, the rhythm</li>
                <li>
                  how you care for others — we tend to care the way we would
                  like to be cared for
                </li>
              </ul>
            </Box>

            <Box title="What the Moon does not describe">
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  today’s mood — that is the Moon by{" "}
                  <A href="/transits">transit</A>, not the natal Moon
                </li>
                <li>
                  your love style: that is{" "}
                  <A href="/blog/venus-en-signes-style-amoureux">Venus</A>
                </li>
                <li>
                  how you desire and take action: that is{" "}
                  <A href="/blog/mars-en-signes-desir-libido-action">Mars</A>
                </li>
                <li>
                  your visible personality: that is the{" "}
                  <A href="/blog/comprendre-signe-astrologique-ascendant-12-exemples">
                    Rising sign
                  </A>
                </li>
                <li>your worth, your maturity or your mental health</li>
              </ul>
            </Box>
          </div>

          <Callout tone="note" title="The one line to keep">
            <p>
              The Sun says <strong>“this is where I am going”</strong>. The Moon
              says <strong>“this is what I need in order to get there”</strong>.
              When the Moon is not fed, the Sun stops moving. It really is that
              simple.
            </p>
          </Callout>
        </section>

        {/* ── 2. SUN / MOON / RISING ───────────────────────── */}
        <section className="space-y-5" aria-labelledby="sun-moon-rising">
          <H2 id="sun-moon-rising">
            Sun, Moon, Rising: who does what in your chart
          </H2>

          <p className="leading-relaxed text-text/85">
            These three points form the tripod of any natal chart. Confusing
            them is the most common mistake, and the reason{" "}
            <A href="/blog/pourquoi-votre-horoscope-ne-vous-ressemble-pas">
              horoscopes never sound like anyone
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
                      It answers…
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      When it shows
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      If you ignore it
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-white/10">
                    <td className="px-5 py-4 align-top font-medium text-white">
                      <A href="/planetes/soleil">Sun</A>
                    </td>
                    <td className="px-5 py-4 align-top text-text/85">
                      Who I want to become
                    </td>
                    <td className="px-5 py-4 align-top text-text/85">
                      In life choices, over the long run
                    </td>
                    <td className="px-5 py-4 align-top text-text/85">
                      Boredom, the feeling of living beside your own life
                    </td>
                  </tr>
                  <tr className="border-t border-white/10 bg-white/[0.02]">
                    <td className="px-5 py-4 align-top font-medium text-white">
                      <A href="/planetes/lune">Moon</A>
                    </td>
                    <td className="px-5 py-4 align-top text-text/85">
                      What I need in order to feel well
                    </td>
                    <td className="px-5 py-4 align-top text-text/85">
                      When you are tired, hurt, in a relationship, unwell
                    </td>
                    <td className="px-5 py-4 align-top text-text/85">
                      Exhaustion, somatising, the same conflicts on repeat
                    </td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-5 py-4 align-top font-medium text-white">
                      Rising sign
                    </td>
                    <td className="px-5 py-4 align-top text-text/85">
                      How I approach the world
                    </td>
                    <td className="px-5 py-4 align-top text-text/85">
                      In the first five minutes of any meeting
                    </td>
                    <td className="px-5 py-4 align-top text-text/85">
                      Never quite feeling understood at first sight
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="leading-relaxed text-text/85">
            A telling example: someone with a{" "}
            <A href="/signes/sagittaire">Sagittarius</A> Sun and a{" "}
            <A href="/signes/cancer">Cancer</A> Moon dreams of six months in
            Asia… and cries on the third day because they miss their own
            kitchen. Both are true. That is not a contradiction, it is an
            architecture.
          </p>
        </section>

        <Divider />

        {/* ── 3. METHOD ────────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="method">
          <H2 id="method">Reading your Moon in 5 steps (the full method)</H2>

          <p className="leading-relaxed text-text/85">
            A Moon is never read from the sign alone. Here is the order serious
            astrologers use — from the most general to the most precise. Keep it
            at hand: it works for any planet.
          </p>

          <div className="space-y-4">
            <Box title="1. The sign — the colour of the need">
              <p>
                It gives the <strong>nature</strong> of the need: material
                safety, truth, freedom, recognition. That is what the long
                section below unpacks. The sign answers:{" "}
                <em>what do I need?</em>
              </p>
            </Box>

            <Box title="2. The house — the ground where the need plays out">
              <p>
                It shows <strong>where</strong>, concretely, a person goes
                looking for safety: the relationship, work, the home, the group.
                An <A href="/signes/verseau">Aquarius</A> Moon in the{" "}
                <A href="/maisons/maison-4">4th house</A> and the same Moon in
                the <A href="/maisons/maison-10">10th</A> do not produce the same
                life. The house answers: <em>where do I go looking for it?</em>
              </p>
            </Box>

            <Box title="3. The aspects — ease or friction">
              <p>
                <A href="/aspects">Aspects</A> tell you whether the need flows
                freely or meets an inner obstacle. A soft{" "}
                <A href="/signes/poissons">Pisces</A> Moon square{" "}
                <A href="/planetes/saturne">Saturn</A> is still a Pisces Moon —
                simply one with a permanent brake. Aspects answer:{" "}
                <em>what helps me, what blocks me?</em>
              </p>
            </Box>

            <Box title="4. The phase — the relationship to the Sun">
              <p>
                The angular distance between the Moon and the{" "}
                <A href="/planetes/soleil">Sun</A> at birth gives the{" "}
                <strong>natal lunar phase</strong>: new Moon, first quarter,
                full Moon and so on. It describes the relationship between
                identity and need, between instinct and awareness. Most readings
                skip it. That is a mistake.
              </p>
            </Box>

            <Box title="5. Dignity and speed — the state of the Moon">
              <p>
                Is the Moon at home (Cancer), exalted (Taurus), in detriment
                (Capricorn), in fall (Scorpio)? Was it moving fast or slowly on
                the day of birth? These technical details refine everything. See{" "}
                <A href="/maitrises">planetary rulerships</A>.
              </p>
            </Box>
          </div>

          <Callout tone="ok" title="The golden rule">
            <p>
              The <strong>sign gives the need</strong>, the{" "}
              <strong>house gives the ground</strong>, the{" "}
              <strong>aspects give the lived reality</strong>. A reading that
              skips two of those three floors is not an interpretation, it is a
              horoscope.
            </p>
          </Callout>
        </section>

        {/* ── 4. FIND YOUR MOON ────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="find-your-moon">
          <H2 id="find-your-moon">
            Finding your Moon — and the birth-time trap
          </H2>

          <p className="leading-relaxed text-text/85">
            The Moon is the fastest body in the sky: it moves 12 to 15 degrees a
            day and crosses a sign in{" "}
            <strong>roughly two and a half days</strong>. It circles the zodiac
            in 27.3 days. The direct consequence:{" "}
            <strong>
              your Moon cannot be deduced from your birth date alone
            </strong>
            .
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <Stat label="Average speed" value="≈ 13° per day" />
            <Stat label="Time in one sign" value="≈ 2.5 days" />
            <Stat label="Full zodiac cycle" value="27.3 days" />
          </div>

          <p className="leading-relaxed text-text/85">
            If you were born on a day the Moon changed sign, one hour is enough
            to shift you from a Leo Moon to a Virgo Moon — two opposite
            emotional worlds. That is the case for roughly one birth in three.
            Hence the procedure:
          </p>

          <div className="space-y-4">
            <Box title="You know your birth time">
              <p>
                Calculate your <A href="/theme-astral">natal chart</A>: the
                Moon’s position will be exact to the degree, and you will also
                be able to read its house and its aspects. That is the only
                complete reading.
              </p>
            </Box>

            <Box title="You do not know it">
              <p>
                Calculate the chart for <strong>noon</strong>. Two cases:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong>The Moon stays in the same sign all day</strong> —
                  your Moon sign is reliable and you can read this guide without
                  reservation. You will only be missing the house.
                </li>
                <li>
                  <strong>The Moon changes sign that day</strong> — read both
                  portraits below and see which one describes what you do{" "}
                  <em>when things go badly</em>, not what you would like to be.
                  The answer is almost always obvious.
                </li>
              </ul>
            </Box>
          </div>

          <Callout tone="warn" title="The test that never fails">
            <p>
              To identify a Moon, never ask “what are you like?”. Ask:{" "}
              <strong>
                “what do you actually do in the ten minutes after something
                upsets you?”
              </strong>{" "}
              Do you call someone, tidy up, go for a walk, eat, go silent,
              analyse, slam a door? That raw, unfiltered reaction is your Moon.
            </p>
          </Callout>
        </section>

        <Divider />

        {/* ── 5. TABLE ─────────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="table">
          <H2 id="table">The 12 Moons at a glance</H2>

          <p className="leading-relaxed text-text/85">
            An overview to skim. Each row unfolds into a full portrait below.
          </p>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-soft">
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-sm">
                <thead className="bg-white/[0.04]">
                  <tr className="text-left">
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Moon in…
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Core need
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Feels safe when…
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Shuts down when…
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Keyword
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
                            href={`#moon-in-${row.slug}`}
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
            This table gives the general colour. It does not replace the house
            and the aspects: two people with the same Moon sign can lead very
            different emotional lives.
          </p>
        </section>

        <Divider />

        {/* ── 6. THE 12 MOONS ──────────────────────────────── */}
        <section className="space-y-6" aria-labelledby="the-12-moons">
          <H2 id="the-12-moons">The 12 Moons in depth</H2>

          <p className="leading-relaxed text-text/85">
            Every portrait follows the same frame: the need, what soothes it,
            what tips it over, how it loves, the childhood memory, the trap, the
            lever — and the line it hears wrongly. Read yours first; then read
            the one belonging to the person you live with. That is usually where
            things click.
          </p>

          <div className="grid gap-6 lg:grid-cols-2">
            <MoonCard
              sign="Aries"
              slug="belier"
              element="fire"
              modality="cardinal"
              motto="I react, therefore I am fine"
            >
              <p>
                Emotion arrives in one block, with no warning, and leaves just
                as fast. This Moon does not ruminate: it discharges. It needs
                something to <em>move</em> in order to feel alive, and readily
                mistakes intensity for safety.
              </p>
              <Line label="Core need">
                to act immediately, without asking permission.
              </Line>
              <Line label="Feels safe when">
                it is free to say no, to leave, to decide.
              </Line>
              <Line label="Tips over when">
                it is slowed down, mothered, told to wait.
              </Line>
              <Line label="In love">
                blunt to the point of bruising, incapable of pretending. Quick
                anger, zero grudge. It needs to be answered, not soothed.
              </Line>
              <Line label="The memory">
                an environment where you had to react fast, defend yourself
                alone and never show fear.
              </Line>
              <Line label="The trap">
                treating every emotion as an emergency to settle within the
                minute.
              </Line>
              <Line label="The lever">
                twenty seconds between the feeling and the action. Twenty
                seconds are enough.
              </Line>
              <Line label="Told wrongly">
                “you are aggressive”. No: they are <em>fast</em>, and other
                people’s slowness frightens them.
              </Line>
            </MoonCard>

            <MoonCard
              sign="Taurus"
              slug="taureau"
              element="earth"
              modality="fixed"
              motto="As long as nothing moves, I am fine"
            >
              <p>
                This is the steadiest Moon of the zodiac — tradition calls it{" "}
                <strong>exalted</strong>, meaning at its best. It digests
                slowly, does not panic, and brings every emotion back to
                something concrete: the body, the meal, the bed, the bank
                account.
              </p>
              <Line label="Core need">
                continuity. For tomorrow to look like today.
              </Line>
              <Line label="Feels safe when">
                daily life is steady, the body is at ease, the home is in order.
              </Line>
              <Line label="Tips over when">
                change is sudden, imposed, or threatens material security.
              </Line>
              <Line label="In love">
                reassured by regularity far more than by declarations. It
                measures love in presence, in repeated gestures, in skin.
              </Line>
              <Line label="The memory">
                safety was counted in physical presence and tangible things — or
                was cruelly missing.
              </Line>
              <Line label="The trap">
                mistaking comfort for happiness, and staying ten years in a
                situation that no longer hurts but no longer does anything
                either.
              </Line>
              <Line label="The lever">
                rituals that are chosen rather than endured: they truly nourish
                without immobilising.
              </Line>
              <Line label="Told wrongly">
                “you are materialistic”. No: they need ground under their feet
                before they can feel anything at all.
              </Line>
            </MoonCard>

            <MoonCard
              sign="Gemini"
              slug="gemeaux"
              element="air"
              modality="mutable"
              motto="If I can explain it, I can bear it"
            >
              <p>
                This Moon routes every emotion through language. It names,
                comments, narrates — and calms down by understanding. Its
                anxiety is mental: it circles, it hunts for the missing piece of
                information, it does not sleep while an unspoken thing lingers.
              </p>
              <Line label="Core need">
                to put things into words. All of them. Right away.
              </Line>
              <Line label="Feels safe when">
                it understands what is happening and can tell someone.
              </Line>
              <Line label="Tips over when">
                people go quiet, sulk, or withhold information.
              </Line>
              <Line label="In love">
                needs to talk in order to feel loved. A conversation is worth an
                embrace. Prolonged silence is experienced as abandonment.
              </Line>
              <Line label="The memory">
                a child who reassured the household by explaining, translating,
                bridging between adults.
              </Line>
              <Line label="The trap">
                commenting on the emotion instead of going through it. One can
                talk for years beside what one actually feels.
              </Line>
              <Line label="The lever">
                writing instead of rehashing, and agreeing to sit ten minutes
                inside a feeling without naming it.
              </Line>
              <Line label="Told wrongly">
                “you are superficial”. No: they handle pain from above, because
                that is the only place they know how to hold it.
              </Line>
            </MoonCard>

            <MoonCard
              sign="Cancer"
              slug="cancer"
              element="water"
              modality="cardinal"
              motto="I belong, therefore I exist"
            >
              <p>
                Here the Moon is <strong>at home</strong>: this is its{" "}
                <A href="/maitrises">rulership</A>. Everything is amplified —
                sensitivity, memory, the protective instinct. This Moon feels
                before it understands, and it is rarely wrong.
              </p>
              <Line label="Core need">
                to belong to someone, to a place, to a story.
              </Line>
              <Line label="Feels safe when">
                the bond is stable and there is a home to come back to.
              </Line>
              <Line label="Tips over when">
                it senses the slightest cooling. Its radar is merciless.
              </Line>
              <Line label="In love">
                nurtures, anticipates, protects. It gives a great deal and waits
                for others to guess what it does not dare ask for.
              </Line>
              <Line label="The memory">
                oversized. It remembers the exact tone of a sentence spoken
                fifteen years ago, and what it was wearing that day.
              </Line>
              <Line label="The trap">
                feeding the other person so as not to be left, then quietly
                resenting not receiving as much.
              </Line>
              <Line label="The lever">
                asking clearly, once, instead of hoping for a long time.
              </Line>
              <Line label="Told wrongly">
                “you are fragile”. No: they are often the most solid person in
                the family when a crisis hits.
              </Line>
            </MoonCard>

            <MoonCard
              sign="Leo"
              slug="lion"
              element="fire"
              modality="fixed"
              motto="If I matter to you, everything is fine"
            >
              <p>
                This Moon needs a gaze. Not an audience — a gaze. It warms up
                when it is chosen and freezes when it feels like a rounding
                error. Its generosity is real, and always slightly addressed to
                someone.
              </p>
              <Line label="Core need">to matter to someone, and to know it.</Line>
              <Line label="Feels safe when">
                it is seen, named, preferred.
              </Line>
              <Line label="Tips over when">
                it is humiliated, ignored, or compared to someone else.
              </Line>
              <Line label="In love">
                loyal, warm, slightly theatrical. It needs mutual admiration,
                and silence costs it more than conflict.
              </Line>
              <Line label="The memory">
                it existed through what it gave, what it achieved, what it made
                shine in others.
              </Line>
              <Line label="The trap">
                mistaking attention for love, then asking for a little more each
                time to make sure.
              </Line>
              <Line label="The lever">
                asking for recognition instead of endlessly trying to earn it.
              </Line>
              <Line label="Told wrongly">
                “you are self-centred”. No: they need to be seen in order to
                give — and they give enormously.
              </Line>
            </MoonCard>

            <MoonCard
              sign="Virgo"
              slug="vierge"
              element="earth"
              modality="mutable"
              motto="If it is tidy, I can breathe"
            >
              <p>
                This Moon’s anxiety is not spoken, it is organised. Tidying,
                sorting, correcting, planning ahead: those are its soothing
                gestures. It expresses affection through service, and feels
                loved when someone pays attention to the details that concern
                it.
              </p>
              <Line label="Core need">
                to be useful, and for things to be clean.
              </Line>
              <Line label="Feels safe when">
                the frame is predictable and there is a task to complete.
              </Line>
              <Line label="Tips over when">
                everything is chaos, unplanned, or it feels useless.
              </Line>
              <Line label="In love">
                shows love through concrete acts and struggles with grand words.
                It corrects what bothers it instead of saying it is afraid.
              </Line>
              <Line label="The memory">
                it learned very early that affection was earned by being good,
                helpful and beyond reproach.
              </Line>
              <Line label="The trap">
                criticism — its own and other people’s. It is anxiety talking,
                never contempt.
              </Line>
              <Line label="The lever">
                naming the worry out loud before correcting anyone. The body,
                too, speaks fast on its behalf.
              </Line>
              <Line label="Told wrongly">
                “you are cold”. No: they are reserved, and they have already
                made you dinner.
              </Line>
            </MoonCard>

            <MoonCard
              sign="Libra"
              slug="balance"
              element="air"
              modality="cardinal"
              motto="If the mood is good, I am fine"
            >
              <p>
                This Moon calibrates itself on other people like a thermostat.
                It picks up tension in a room instantly and takes it upon itself
                to dissolve it. Its need is not to be loved: it is for the air
                to be breathable.
              </p>
              <Line label="Core need">
                harmony in the bond, elegance in relations.
              </Line>
              <Line label="Feels safe when">
                the other person is fine and nothing grates.
              </Line>
              <Line label="Tips over when">
                conflict breaks out, or a choice means disappointing someone.
              </Line>
              <Line label="In love">
                attentive, accommodating, remarkably good at adjusting. It says
                yes too quickly and presents the bill much later.
              </Line>
              <Line label="The memory">
                a mediating child, often placed between two adults whose mood it
                monitored.
              </Line>
              <Line label="The trap">
                no longer knowing what it feels when alone, with no one to
                calibrate on.
              </Line>
              <Line label="The lever">
                voicing disagreement early and small, before it becomes a clean
                break.
              </Line>
              <Line label="Told wrongly">
                “you are indecisive”. No: they are weighing the relational cost
                of each option, and it is real.
              </Line>
            </MoonCard>

            <MoonCard
              sign="Scorpio"
              slug="scorpion"
              element="water"
              modality="fixed"
              motto="Tell me the truth, even if it hurts"
            >
              <p>
                Tradition speaks of <strong>fall</strong>: the need for safety
                is the least comfortably housed here. This Moon knows no half
                measures. It feels everything at extreme intensity, and shows as
                little of it as possible.
              </p>
              <Line label="Core need">
                truth and depth. Anything superficial suffocates it.
              </Line>
              <Line label="Feels safe when">
                nothing is hidden and the bond goes all the way.
              </Line>
              <Line label="Tips over when">
                it detects a lie, a lukewarmness, an exit route.
              </Line>
              <Line label="In love">
                all or nothing. It tests, often without knowing, to check that
                you stay. Its loyalty, once given, is total.
              </Line>
              <Line label="The memory">
                something unspoken in childhood — a secret, a disappearance, a
                forbidden subject it sensed without being told.
              </Line>
              <Line label="The trap">
                control, jealousy, then the radical and final cut. It does not
                slam the door: it walls it up.
              </Line>
              <Line label="The lever">
                saying the intensity out loud instead of carrying it alone. Put
                into words, it becomes a rare strength.
              </Line>
              <Line label="Told wrongly">
                “you are toxic”. No: they demand a level of authenticity very
                few people can sustain.
              </Line>
            </MoonCard>

            <MoonCard
              sign="Sagittarius"
              slug="sagittaire"
              element="fire"
              modality="mutable"
              motto="As long as there is a horizon, I can breathe"
            >
              <p>
                This Moon reassures itself through meaning. It turns sorrow into
                a lesson, failure into experience, a break-up into a journey.
                That is a genuine strength — and sometimes a very well-disguised
                escape.
              </p>
              <Line label="Core need">
                space, movement, and a reason to believe it is worth it.
              </Line>
              <Line label="Feels safe when">
                the horizon stays open and a door is always available.
              </Line>
              <Line label="Tips over when">
                it is confined, monitored, or its world is made smaller.
              </Line>
              <Line label="In love">
                warm, generous, funny. It loves a great deal, provided it is not
                kept on a leash.
              </Line>
              <Line label="The memory">
                a family that moved a lot, or on the contrary a closed world it
                had to escape through imagination.
              </Line>
              <Line label="The trap">
                converting every sadness into a project and never sitting down
                inside what hurts.
              </Line>
              <Line label="The lever">
                staying. One hour, one evening. Without leaving, without
                reframing, without a joke.
              </Line>
              <Line label="Told wrongly">
                “you do not care”. No: they absorb by moving forward, because
                stopping frightens them.
              </Line>
            </MoonCard>

            <MoonCard
              sign="Capricorn"
              slug="capricorne"
              element="earth"
              modality="cardinal"
              motto="I have got this, do not worry about me"
            >
              <p>
                Tradition calls it <strong>in detriment</strong>: the emotional
                need is the least spontaneously expressed here. This Moon shuts
                the tap and holds. In adulthood it is often the most reliable in
                the zodiac — and the loneliest.
              </p>
              <Line label="Core need">
                to stand upright without depending on anyone.
              </Line>
              <Line label="Feels safe when">
                it is in control, carrying the load, holding a clear
                responsibility.
              </Line>
              <Line label="Tips over when">
                it is put in a position of dependence or emotional flooding.
              </Line>
              <Line label="In love">
                undemonstrative, extremely faithful. It proves through duration
                what it will never say in words.
              </Line>
              <Line label="The memory">
                it grew up too fast. An absent, ill or overwhelmed parent, or a
                very early demand for seriousness.
              </Line>
              <Line label="The trap">
                believing that asking for help is an admission of weakness — and
                collapsing alone, silently, very late.
              </Line>
              <Line label="The lever">
                accepting one piece of help a week. Just one. It is training,
                not surrender.
              </Line>
              <Line label="Told wrongly">
                “you are unfeeling”. No: they are reserved, and they will still
                be there in twenty years when everyone else has gone.
              </Line>
            </MoonCard>

            <MoonCard
              sign="Aquarius"
              slug="verseau"
              element="air"
              modality="fixed"
              motto="Let me breathe and I will come back"
            >
              <p>
                This Moon watches its own emotion from the ceiling. It
                understands perfectly what it feels — and feels it with a slight
                delay, as though it belonged to someone else. That is its
                protection.
              </p>
              <Line label="Core need">
                freedom and clarity. Being able to step back at will.
              </Line>
              <Line label="Feels safe when">
                no one demands an account of what it feels.
              </Line>
              <Line label="Tips over when">
                it is possessed, crowded, emotionally blackmailed.
              </Line>
              <Line label="In love">
                loving friendship, fidelity chosen rather than owed. It needs a
                space of its own in order to stay present.
              </Line>
              <Line label="The memory">
                it felt different very early — an unusual family, or a strangely
                cold emotional climate it had to rationalise.
              </Line>
              <Line label="The trap">
                intellectualising until nothing is felt, then breaking off
                abruptly, cleanly, with no way back.
              </Line>
              <Line label="The lever">
                five minutes in the body, without commentary. Breath before
                analysis.
              </Line>
              <Line label="Told wrongly">
                “you are detached”. No: they hold at arm’s length whatever
                reaches them too deeply, and it reaches them deeply.
              </Line>
            </MoonCard>

            <MoonCard
              sign="Pisces"
              slug="poissons"
              element="water"
              modality="mutable"
              motto="I feel everything, including what is not mine"
            >
              <p>
                An emotional sponge. This Moon picks up the state of a room on
                entering it and cannot always tell what belongs to it from what
                it has absorbed. Hence its immense compassion — and a tiredness
                that is hard to explain.
              </p>
              <Line label="Core need">
                to connect to something larger: art, care, silence, love.
              </Line>
              <Line label="Feels safe when">
                the bond is gentle, porous, without aggression or demand.
              </Line>
              <Line label="Tips over when">
                reality turns hard, cynical or brutal. It dissolves.
              </Line>
              <Line label="In love">
                devoted, intuitive, romantic. It sees the other as they could
                become, which is as beautiful as it is dangerous.
              </Line>
              <Line label="The memory">
                it picked up the household’s emotions very early, including the
                ones nobody put into words.
              </Line>
              <Line label="The trap">
                carrying other people’s feelings, rescuing, then escaping — into
                daydream, idealisation or worse.
              </Line>
              <Line label="The lever">
                one question, several times a day: <em>is this mine?</em>{" "}
                Everything changes when the answer is no.
              </Line>
              <Line label="Told wrongly">
                “you are weak”. No: they absorb what most people do not even
                perceive.
              </Line>
            </MoonCard>
          </div>

          <Callout tone="note" title="One clarification that changes everything">
            <p>
              None of these portraits is a fate. They are{" "}
              <strong>protective mechanisms</strong>, learned when we had no
              other option. Recognising them is already the end of being ruled
              by them: you can keep the need and change the reflex. That, quite
              precisely, is the work of{" "}
              <A href="/astro-psychologie">astrological psychology</A>.
            </p>
          </Callout>
        </section>

        <Divider />

        {/* ── 7. MOON / SUN ────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="moon-sun">
          <H2 id="moon-sun">
            When the Moon contradicts the Sun: the most useful tension in the
            chart
          </H2>

          <p className="leading-relaxed text-text/85">
            This is where astrology gets genuinely interesting. The Sun points
            to a direction; the Moon to a need. When the two sit in
            incompatible elements, a person spends their life wanting one thing
            and needing its opposite. That is not a manufacturing defect: it is
            the engine of a life.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <Box title="Sun and Moon in the same element">
              <p>
                Strong inner coherence: what the person wants and what they need
                pull the same way. They move fast and know themselves well… and
                sometimes lack a counterweight. Little inner conflict also means
                little self-distance.
              </p>
            </Box>

            <Box title="Fire with Air, Earth with Water">
              <p>
                Allied elements. Fire needs Air to burn, Earth needs Water to be
                fertile. The Moon supports the solar impulse instead of braking
                it: comfortable, and it makes for surprisingly steady people.
              </p>
            </Box>

            <Box title="Fire with Water, Earth with Air">
              <p>
                Fertile tension. An <A href="/signes/belier">Aries</A> Sun with a{" "}
                <A href="/signes/cancer">Cancer</A> Moon charges ahead and then
                needs to go home. A{" "}
                <A href="/signes/capricorne">Capricorn</A> Sun with a{" "}
                <A href="/signes/poissons">Pisces</A> Moon builds a solid career
                while dreaming of dropping everything. Life consists of giving
                each one its turn — never of choosing.
              </p>
            </Box>

            <Box title="Sun and Moon in the same sign">
              <p>
                Born around a <strong>new Moon</strong>: identity and need merge.
                Plenty of instinct and a very clear direction, but little
                distance from oneself. These people often discover themselves
                late — all at once, and intensely.
              </p>
            </Box>
          </div>

          <Callout tone="ok" title="The quick diagnosis">
            <p>
              If you are exhausting yourself inside a life that, on paper,
              matches your goals:{" "}
              <strong>look at your Moon, not your Sun</strong>. Nine times out
              of ten, the lunar need is fed nowhere in your schedule.
            </p>
          </Callout>
        </section>

        {/* ── 8. MOON IN HOUSES ────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="moon-houses">
          <H2 id="moon-houses">
            The Moon in the houses: where you go looking for safety
          </H2>

          <p className="leading-relaxed text-text/85">
            The sign says <em>what</em> you need. The{" "}
            <A href="/maisons">house</A> says <em>where</em> you go looking for
            it — often the most actionable piece of the chart. Here are the
            twelve grounds, one line each.
          </p>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <ul className="divide-y divide-white/10">
              <li className="p-4 text-text/85">
                <strong className="text-white">
                  <A href="/maisons/maison-1">1st house</A>
                </strong>{" "}
                — safety comes through direct self-expression. The mood shows on
                the face, instantly.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">
                  <A href="/maisons/maison-2">2nd house</A>
                </strong>{" "}
                — reassured by the concrete: money, what belongs to them. The{" "}
                <A href="/blog/finances-theme-astral">relationship to money</A>{" "}
                is emotional before it is rational.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">
                  <A href="/maisons/maison-3">3rd house</A>
                </strong>{" "}
                — needs to talk, exchange, move around. Silence is a punishment.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">
                  <A href="/maisons/maison-4">4th house</A>
                </strong>{" "}
                — a position of strength: home, family and roots feed the need
                directly. The house is not a backdrop, it is an organ.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">
                  <A href="/maisons/maison-5">5th house</A>
                </strong>{" "}
                — refuels by creating, playing, loving, being around children.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">
                  <A href="/maisons/maison-6">6th house</A>
                </strong>{" "}
                — safety through an ordered routine, useful work, the body.
                Emotions and health are closely tied here.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">
                  <A href="/maisons/maison-7">7th house</A>
                </strong>{" "}
                — needs the other person in order to feel whole. The
                relationship is where everything happens; see{" "}
                <A href="/synastrie">synastry</A>.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">
                  <A href="/maisons/maison-8">8th house</A>
                </strong>{" "}
                — safety through intensity, transformation, what is deeply
                shared. Nothing lukewarm feeds it.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">
                  <A href="/maisons/maison-9">9th house</A>
                </strong>{" "}
                — needs meaning, elsewhere, beliefs. Heals by widening the
                horizon.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">
                  <A href="/maisons/maison-10">10th house</A>
                </strong>{" "}
                — the emotional life plays out in public, in the career, in
                reputation. See{" "}
                <A href="/blog/orientation-professionnelle-theme-astral">
                  vocation in the natal chart
                </A>
                .
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">
                  <A href="/maisons/maison-11">11th house</A>
                </strong>{" "}
                — reassured by the group, friends, collective projects.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">
                  <A href="/maisons/maison-12">12th house</A>
                </strong>{" "}
                — needs withdrawal, silence, interiority. Immense sensitivity,
                rarely shown.
              </li>
            </ul>
          </div>
        </section>

        <Divider />

        {/* ── 9. ASPECTS ───────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="aspects">
          <H2 id="aspects">Moon aspects: what changes everything</H2>

          <p className="leading-relaxed text-text/85">
            An <A href="/aspects">aspect</A> is an angle between two planets.
            Applied to the Moon, it shows what eases or complicates access to
            the need. <em>Hard</em> angles (square, opposition) are not curses:
            they force you to build consciously what others receive for free.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <Box tone="amber" title="Moon – Saturn">
              <p>
                The need contracts. You learned not to be a nuisance, not to
                ask. Restraint, seriousness, an early sense of solitude — and
                real emotional maturity after 30. See{" "}
                <A href="/blog/saturnien">the Saturnian profile</A>.
              </p>
            </Box>
            <Box tone="teal" title="Moon – Neptune">
              <p>
                Maximum porosity. Compassion, intuition, art — but blurred
                boundaries, idealisation, difficulty telling what is yours.
                Classic ground for rescue relationships.
              </p>
            </Box>
            <Box tone="fuchsia" title="Moon – Pluto">
              <p>
                Extreme intensity and control issues. Attachment engages
                everything. These Moons go through radical emotional
                transformations — see also{" "}
                <A href="/blog/manipulateurs-pervers-narcissiques-astrologie">
                  coercive relational dynamics
                </A>
                .
              </p>
            </Box>
            <Box tone="sky" title="Moon – Uranus">
              <p>
                An unpredictable need for independence. Clean break-ups, mood
                swings, horror of emotional routine. Great inner freedom,
                provided the rhythm is owned.
              </p>
            </Box>
            <Box tone="red" title="Moon – Mars">
              <p>
                Immediate reactivity. Emotion comes out fast and frankly,
                sometimes too much so. Plenty of emotional courage, little
                patience.
              </p>
            </Box>
            <Box tone="rose" title="Moon – Venus">
              <p>
                Softness and a taste for harmonious bonds. Real charm, a need to
                please, little tolerance for relational ugliness.
              </p>
            </Box>
          </div>

          <p className="text-sm leading-relaxed text-text/65">
            An aspect never replaces the sign: it modulates it. A Taurus Moon
            square Uranus is still a Taurus Moon — its stability will simply be
            tested on a regular basis.
          </p>
        </section>

        {/* ── 10. PHASE ────────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="phase">
          <H2 id="phase">Your natal Moon phase</H2>

          <p className="leading-relaxed text-text/85">
            The phase is the angular distance between Sun and Moon at birth. It
            describes the <strong>relationship</strong> between identity and
            need — a layer of interpretation most mainstream readings ignore,
            although it speaks immediately. For the full mechanism, see{" "}
            <A href="/blog/pleine-lune-nouvelle-lune-cycles-astrologie">
              the cycles of the Moon
            </A>
            .
          </p>

          <PhaseStrip
            labels={["New", "Crescent", "First quarter", "Gibbous", "Full", "Disseminating", "Last quarter", "Balsamic"]}
            caption="The eight phases of the lunar cycle, from the new Moon to the balsamic Moon."
          />

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <ul className="divide-y divide-white/10">
              <li className="p-4 text-text/85">
                <strong className="text-white">New Moon (0–45°)</strong> —
                instinct, impulse, beginnings. Acts first, understands after.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">Crescent (45–90°)</strong> —
                struggle against the past, a drive to break free.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">First quarter (90–135°)</strong> —
                fertile crisis, a need to build, a taste for action.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">Gibbous (135–180°)</strong> —
                refinement, analysis, the search for the right meaning.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">Full Moon (180–225°)</strong> —
                awareness through others. Everything happens in relationship, in
                mirrors.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">Disseminating (225–270°)</strong> —
                a need to transmit, to teach, to share what has been understood.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">Last quarter (270–315°)</strong> —
                questioning inherited values, reorientation.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">Balsamic (315–360°)</strong> —
                closure, interiority, sensitivity to endings. Often mystical.
              </li>
            </ul>
          </div>
        </section>

        {/* ── 11. DIGNITIES ────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="dignities">
          <H2 id="dignities">
            Domicile, exaltation, detriment, fall: what it actually means
          </H2>

          <p className="leading-relaxed text-text/85">
            These four words frighten beginners. They simply describe how{" "}
            <strong>comfortable</strong> a planet is in a given sign — not its
            value, and certainly not yours.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <Box tone="violet" title="Domicile — Moon in Cancer">
              <p>
                The Moon is at home. The need expresses itself naturally,
                sensitivity flows, instinct is reliable. Downside: little
                distance, difficulty letting go.
              </p>
            </Box>
            <Box tone="emerald" title="Exaltation — Moon in Taurus">
              <p>
                The steadiest position in the zodiac. The need is simple to
                feed, the mood even, the presence calming. Downside: inertia.
              </p>
            </Box>
            <Box tone="amber" title="Detriment — Moon in Capricorn">
              <p>
                The emotional need finds no spontaneous outlet. You learn to do
                without what you did not receive. Upside: uncommon emotional
                reliability and endurance.
              </p>
            </Box>
            <Box tone="fuchsia" title="Fall — Moon in Scorpio">
              <p>
                The need is lived at an intensity that is hard to regulate.
                Nothing is light. Upside: psychological depth and lucidity that
                nothing else replaces.
              </p>
            </Box>
          </div>

          <Callout tone="warn" title="Do not confuse">
            <p>
              Detriment and fall do <strong>not</strong> mean “bad person” or
              “difficult life”. They flag a need that will have to be built
              consciously rather than received. In practice, these are often the
              strongest Moons in adulthood.
            </p>
          </Callout>
        </section>

        {/* ── 12. CYCLES ───────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="cycles">
          <H2 id="cycles">
            Cycles: Moon by transit, lunar return, progressed Moon
          </H2>

          <div className="space-y-4">
            <Box title="The Moon by transit — the two-and-a-half-day rhythm">
              <p>
                Every two and a half days the Moon in the sky changes sign and
                colours the collective mood. That is what explains the days when
                “everyone is on edge” for no identifiable reason. It has nothing
                to do with your natal Moon: it is the weather, not the climate.
                Track the dates in the{" "}
                <A href="/blog/calendrier-pleine-lune-nouvelle-lune-2026-2027">
                  2026-2027 lunar calendar
                </A>
                .
              </p>
            </Box>

            <Box title="The lunar return — every 27.3 days">
              <p>
                Each month the Moon comes back to its exact natal position. Many
                sensitive people notice an emotional peak or a particular
                clarity around that date. It is the shortest and most verifiable
                of all <A href="/transits">transits</A>.
              </p>
            </Box>

            <Box title="The progressed Moon — a 27-year cycle">
              <p>
                In secondary progressions the Moon moves about one sign every{" "}
                <strong>two and a half years</strong> and completes its round in
                27 to 28 years. It describes the <em>emotional climate</em> of a
                life period: what you need right now, which is not what you
                needed three years ago. One of the most reliable — and gentlest
                — predictive tools there is.
              </p>
            </Box>
          </div>
        </section>

        <Divider />

        {/* ── 13. MISTAKES ─────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="mistakes">
          <H2 id="mistakes">The 6 most common mistakes about the Moon</H2>

          <div className="space-y-3">
            <Box title="1. Treating your Moon as your “real sign”">
              <p>
                The Moon is not a hidden sign, more authentic than the Sun. It
                is a different function. You do not swap one for the other: you
                read them together.
              </p>
            </Box>
            <Box title="2. Confusing the natal Moon with today’s Moon">
              <p>
                Your natal Moon never moves. The Moon in the sky changes every
                two and a half days. Daily horoscopes talk about the second one;
                this guide is about the first.
              </p>
            </Box>
            <Box title="3. Reading the Moon without the house">
              <p>
                The sign without the house is a need with no address. You know
                what the person needs but not where they go looking for it — so
                you cannot give them anything useful.
              </p>
            </Box>
            <Box title="4. Reducing the Moon to the mother">
              <p>
                The Moon describes the <em>function of care</em> as it was
                received and integrated. That includes the mother, but also the
                general climate of childhood, and sometimes someone else
                entirely.
              </p>
            </Box>
            <Box title="5. Believing a difficult Moon is a sentence">
              <p>
                A hard aspect describes a learning curve, not a verdict. The
                most constrained part of a chart is very often where the person
                ends up most competent.
              </p>
            </Box>
            <Box title="6. Interpreting someone else’s Moon for them">
              <p>
                Two people with the same Moon sign do not live the same thing.
                History, the house and the aspects do the rest. A chart gives
                the structure, never the script.
              </p>
            </Box>
          </div>
        </section>

        {/* ── 14. TAKEAWAYS ────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="takeaways">
          <H2 id="takeaways">Key takeaways</H2>

          <div className="relative overflow-hidden rounded-2xl border border-emerald-400/25 bg-gradient-to-br from-emerald-500/[0.10] via-sky-500/[0.05] to-transparent p-6">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl"
            />
            <ul className="relative space-y-3 leading-relaxed text-text/90">
              <li>
                🌙 <strong>The Moon is the need</strong>, not the mood. It says
                what it takes for you to stay standing.
              </li>
              <li>
                🌙 <strong>It shows when things go badly</strong>, not when all
                is well. That is the best identification test.
              </li>
              <li>
                🌙 <strong>It changes sign every 2.5 days</strong>: without a
                birth time, the reading stays uncertain.
              </li>
              <li>
                🌙 <strong>Sign + house + aspects</strong>: three floors, none of
                them optional.
              </li>
              <li>
                🌙 <strong>No Moon is bad.</strong> Detriment and fall describe a
                need to be built, not a defect.
              </li>
              <li>
                🌙{" "}
                <strong>
                  When the Moon is not fed, nothing else works
                </strong>{" "}
                — not the relationship, not the work, not the Sun’s projects.
              </li>
            </ul>
          </div>

          <p className="leading-relaxed text-text/85">
            If you keep only one question from this whole article, make it this
            one:{" "}
            <strong>
              what am I doing, concretely, this week, to feed my Moon?
            </strong>{" "}
            Not symbolically. Concretely. A Taurus Moon needs a real meal and a
            real night’s sleep; a Gemini Moon needs a conversation; a Capricorn
            Moon needs permission, just once, not to handle everything.
          </p>
        </section>

        {/* ── 15. FAQ ──────────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="faq">
          <H2 id="faq">Frequently asked questions about the Moon in signs</H2>

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

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="rounded-2xl border border-white/10 bg-black/20 p-6">
          <p className="text-sm text-text/60">Keep reading</p>
          <div className="mt-3 space-y-3 leading-relaxed text-text/85">
            <p>
              To complete the emotional portrait, read{" "}
              <A href="/blog/venus-en-signes-style-amoureux">
                Venus in the signs: your love style
              </A>{" "}
              and{" "}
              <A href="/blog/mars-en-signes-desir-libido-action">
                Mars in the signs: desire and action
              </A>
              . Moon, Venus and Mars form the complete relational triangle: the
              need, the taste, the drive.
            </p>
            <p>
              If the Moon is dominant in your chart, the detailed{" "}
              <A href="/blog/lunarien">Lunarian profile</A> concerns you
              directly. And to place your Moon within the whole, start with{" "}
              <A href="/blog/qu-est-ce-qu-un-theme-astral">
                what a natal chart is
              </A>{" "}
              or browse the{" "}
              <A href="/dictionnaire-astrologique">astrological dictionary</A>.
            </p>
          </div>
          <div className="mt-5">
            <Link
              href="/blog"
              className="inline-flex rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-text/90 transition hover:bg-white/10"
            >
              ← All articles
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
