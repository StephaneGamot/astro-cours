import type { ReactNode } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import CoverImage from "@/public/images/blog/les-dominantes-planetaire.webp";
import GrilleImage from "@/public/images/blog/astrological-chart-wheel-in-pencil.webp";

/** Printable worksheet (2 A4 pages). */
const FICHE_PDF = "/fiches/dominant-planet-worksheet.pdf";

export const meta = {
  slug: "planete-dominante-methode-calcul",
  seoTitle: "Dominant Planet: Find Yours in 7 Criteria — Astro Cours",
  title: "Dominant planet: finding it with the seven-weights grid",
  description:
    "Find your dominant planet without an opaque calculator: a published seven-criteria scoring grid, a real chart worked end to end, and a rule for breaking ties.",
  date: "2026-09-21",
  tags: [
    "planètes",
    "méthode",
    "thème astral",
    "ascendant",
    "aspects",
    "luminaires",
    "interprétation",
    "exemples",
    "tempéraments",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/les-dominantes-planetaire.webp",
};

/* ────────────────────────────────────────────────────────────
   Layout components
   ──────────────────────────────────────────────────────────── */

function H2({ children, id }: { children: ReactNode; id: string }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="relative inline-flex h-7 w-7 shrink-0 items-center justify-center"
        >
          <span className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-200/50 via-violet-300/25 to-transparent blur-[6px]" />
          <span className="relative text-base leading-none text-amber-100/90">
            ⚖
          </span>
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
        className="h-px w-full bg-gradient-to-r from-violet-400/40 via-white/10 to-transparent"
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

  const emoji = tone === "warn" ? "⚠️" : tone === "ok" ? "✅" : "🔭";

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
      <span className="text-sm tracking-[0.3em] text-amber-200/50">♃ ♄ ♇</span>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-white/15 to-white/10" />
    </div>
  );
}

function Box({
  title,
  children,
  tone = "neutral",
}: {
  title: string;
  children: ReactNode;
  tone?: "neutral" | "violet" | "emerald" | "amber";
}) {
  const box =
    tone === "violet"
      ? "border-violet-400/25 bg-violet-500/[0.07]"
      : tone === "emerald"
        ? "border-emerald-400/25 bg-emerald-500/[0.07]"
        : tone === "amber"
          ? "border-amber-400/25 bg-amber-500/[0.07]"
          : "border-white/10 bg-black/20";

  return (
    <div className={`rounded-2xl border p-5 ${box}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-text/70">
        {title}
      </p>
      <div className="mt-3 space-y-2 leading-relaxed text-text/85">
        {children}
      </div>
    </div>
  );
}

/* ── Table of contents ───────────────────────────────────────── */

const toc = [
  { id: "definition", label: "What a dominant planet is" },
  { id: "chart-ruler", label: "Chart ruler vs dominant planet" },
  { id: "no-standard", label: "Why no calculation is official" },
  { id: "grid", label: "The seven-weights grid" },
  { id: "chart", label: "The worked chart" },
  { id: "scoring", label: "Scoring, planet by planet" },
  { id: "ranking", label: "The ranking and how to read it" },
  { id: "tie", label: "Breaking a tie" },
  { id: "birth-time", label: "The birth-time check" },
  { id: "portraits", label: "The ten planetary types" },
  { id: "limits", label: "What the grid does not tell you" },
  { id: "mistakes", label: "Six common mistakes" },
  { id: "takeaways", label: "Key takeaways" },
  { id: "faq", label: "Frequently asked questions" },
];

/* ── FAQ (display + JSON-LD from one source) ─────────────────── */

const faq = [
  {
    q: "How do I find my dominant planet?",
    a: "Score every planet in the chart on seven criteria: rulership of the Ascendant, angularity, link to the luminaries, membership of a stellium, essential dignity, aspects received from the chart’s strong points, and total number of aspects. The planet with the highest total is the dominant one. You need a reliable birth time.",
  },
  {
    q: "Is my chart ruler the same as my dominant planet?",
    a: "No, and this is the most common confusion in English-language astrology. The chart ruler is the planet that rules your Ascendant sign — one criterion out of seven. It is the heaviest single criterion, so the two often coincide, but a chart ruler that is peregrine, cadent and unaspected can easily be outscored by a planet sitting on the Midheaven.",
  },
  {
    q: "Can you have two dominant planets?",
    a: "Yes, and it is common. When the top two totals are equal or one point apart, you do not have a dominant planet but a dominant pair. You read them together: one gives the drive, the other the brake or the relay.",
  },
  {
    q: "Can the Sun be the dominant planet?",
    a: "It can, but less often than people assume. The Sun only wins when it is angular, in Leo, or heavily aspected. In the chart worked through in this article the Sun comes eighth out of ten — which is precisely why Sun-sign horoscopes so rarely sound like anyone.",
  },
  {
    q: "Do I need an exact birth time?",
    a: "Yes. Three of the seven criteria depend on the Ascendant and the Midheaven, which move about one degree every four minutes. In the worked chart, shifting the birth time by one hour moves the dominant from Jupiter to Mars.",
  },
  {
    q: "Why do online calculators disagree with each other?",
    a: "Because they do not use the same scoring scale, and they rarely publish it. Some weight the luminaries heavily, others angularity, others count asteroids. None of them is wrong — they are answering slightly different questions.",
  },
  {
    q: "Does the dominant planet change over time?",
    a: "The natal chart does not move, so the calculation does not either. What changes is the expression: a Saturn dominant is rarely lived the same way at twenty and at sixty. Transits and solar returns bring other planets forward for a season, but they do not rewrite the ranking.",
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

/* ── Worked chart data ───────────────────────────────────────── */

const positions = [
  { p: "Sun", g: "☉", pos: "8° 17′ Scorpio", h: "XI", note: "Peregrine" },
  { p: "Moon", g: "☽", pos: "16° 52′ Aries", h: "IV", note: "Angular house" },
  { p: "Mercury", g: "☿", pos: "22° 47′ Scorpio", h: "XII", note: "Peregrine" },
  { p: "Venus", g: "♀", pos: "25° 28′ Scorpio", h: "XII", note: "Detriment" },
  { p: "Mars", g: "♂", pos: "27° 22′ Aquarius", h: "III", note: "Peregrine" },
  { p: "Jupiter", g: "♃", pos: "8° 54′ Sagittarius", h: "I", note: "Domicile · conjunct ASC 0° 47′" },
  { p: "Saturn", g: "♄", pos: "4° 56′ Gemini ℞", h: "VI", note: "Conjunct DS 3° 11′" },
  { p: "Uranus", g: "♅", pos: "15° 28′ Libra", h: "X", note: "Angular house" },
  { p: "Neptune", g: "♆", pos: "1° 54′ Sagittarius", h: "XII", note: "Conjunct ASC 6° 13′" },
  { p: "Pluto", g: "♇", pos: "0° 57′ Libra", h: "IX", note: "Conjunct MC 2° 08′" },
];

const bareme = [
  {
    n: "1",
    nom: "Rulership of the Ascendant",
    quoi: "The planet that rules the Ascendant sign — your chart ruler.",
    pts: "5 pts — or 3 + 3 where the sign has two rulers (Scorpio, Aquarius, Pisces).",
  },
  {
    n: "2",
    nom: "Angularity",
    quoi: "Distance to the nearest of the four angles: Ascendant, Midheaven, Descendant, IC.",
    pts: "4 pts within a 3° orb, 2 pts between 3 and 8°. Failing that, 2 pts for a planet in house I, IV, VII or X.",
  },
  {
    n: "3",
    nom: "Link to the luminaries",
    quoi: "The Sun and Moon themselves, and the planets ruling the signs they occupy.",
    pts: "2 pts for each luminary · 2 pts to the Sun’s dispositor · 2 pts to the Moon’s dispositor (1 + 1 where the sign has two rulers).",
  },
  {
    n: "4",
    nom: "Stellium",
    quoi: "Three or more planets gathered in one sign or in one house.",
    pts: "1 pt to each member · 2 pts to the ruler of the sign involved (1 + 1 where there are two).",
  },
  {
    n: "5",
    nom: "Essential dignity",
    quoi: "How strong the planet is in the sign it occupies.",
    pts: "Domicile + 3 · exaltation + 2 · peregrine 0 · fall − 1 · detriment − 2.",
  },
  {
    n: "6",
    nom: "Aspects received from the strong points",
    quoi: "Major aspects to the Sun, the Moon, the Ascendant or the Midheaven.",
    pts: "2 pts per aspect within 3°, 1 pt out to 8° (6° for the sextile). Capped at 4 pts.",
  },
  {
    n: "7",
    nom: "Most aspected planet",
    quoi: "The highest count of major aspects to the other planets.",
    pts: "2 pts, shared in the event of a tie.",
  },
];

const classement = [
  { r: 1, p: "Jupiter", t: 16, d: "Chart ruler (+5), conjunct the Ascendant within 47′ (+4), in domicile (+3), aspects to the strong points (+4)." },
  { r: 2, p: "Pluto", t: 8, d: "Conjunct the Midheaven within 2° 08′ (+4 and +2), co-dispositor of the Sun and ruler of both stelliums (+3), in fall in Libra (−1)." },
  { r: 3, p: "Neptune", t: 8, d: "Conjunct the Ascendant within 6° 13′ (+2 and +1), tight sextile to the Midheaven (+2), member of the 12th-house stellium (+1), joint most aspected (+2)." },
  { r: 4, p: "Mars", t: 7, d: "Dispositor of the Moon (+2) and co-dispositor of the Sun (+1), ruler of both stelliums (+2), joint most aspected (+2)." },
  { r: 5, p: "Saturn", t: 7, d: "Conjunct the Descendant within 3° 11′ (+2 and +1), tight trine to the Midheaven (+2), joint most aspected (+2)." },
  { r: 6, p: "Moon", t: 4, d: "Luminary (+2), in the angular 4th house (+2)." },
  { r: 7, p: "Uranus", t: 4, d: "In the angular 10th house (+2), tight opposition to the Moon (+2)." },
  { r: 8, p: "Sun", t: 3, d: "Luminary (+2), member of the Scorpio stellium (+1)." },
  { r: 9, p: "Mercury", t: 2, d: "Member of both stelliums (+2)." },
  { r: 10, p: "Venus", t: 0, d: "Member of both stelliums (+2), in detriment in Scorpio (−2)." },
];

const portraits = [
  { p: "Sun", slug: "solarien", type: "Solarian", cle: "To shine, preside, embody" },
  { p: "Moon", slug: "lunarien", type: "Lunarian", cle: "To feel, protect, remember" },
  { p: "Mercury", slug: "mercurien", type: "Mercurian", cle: "To connect, explain, circulate" },
  { p: "Venus", slug: "venusien", type: "Venusian", cle: "To please, harmonise, savour" },
  { p: "Mars", slug: "martien", type: "Martian", cle: "To attack, cut through, advance" },
  { p: "Jupiter", slug: "jupiterien", type: "Jupiterian", cle: "To teach, widen, give meaning" },
  { p: "Saturn", slug: "saturnien", type: "Saturnian", cle: "To structure, endure, demand" },
  { p: "Uranus", slug: "uranien", type: "Uranian", cle: "To break, invent, break free" },
  { p: "Neptune", slug: "neptunien", type: "Neptunian", cle: "To dissolve, imagine, empathise" },
  { p: "Pluto", slug: "plutonien", type: "Plutonian", cle: "To probe, transform, rebuild" },
];

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
        {/* ── COVER (LCP) ──────────────────────────────────── */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f13]">
          <Image
            src={CoverImage}
            alt="An antique balance weighing glowing astrological symbols, one golden body clearly heavier than the rest"
            fill
            sizes="(max-width: 768px) 100vw, 900px"
            priority
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09090b]/80 via-transparent to-transparent"
          />
        </div>

        {/* ── HERO ─────────────────────────────────────────── */}
        <header className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/[0.10] via-black/20 to-black/30 p-7 shadow-soft">
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl ${glow}`}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-3xl"
          />

          <div className="relative">
            <p className="text-sm text-text/65">
              Method · Scoring · Worked example
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-text/85">
              You type your birth date into a calculator, it announces
              “Uranus dominant”, and you have no idea how it got there.{" "}
              <strong>
                That is not a problem of belief. It is a problem of method.
              </strong>
            </p>

            <p className="mt-3 max-w-2xl leading-relaxed text-text/80">
              Here is the scoring grid I have used in consultation for years:
              seven criteria, explicit point values, and a result you can
              reproduce by hand. So that it does not stay theoretical, I run it
              end to end on a real chart — my own — and publish the birth data
              so you can check every line.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <Pill tone="violet">Criteria: 7</Pill>
              <Pill tone="sky">Time: 20 minutes by hand</Pill>
              <Pill tone="emerald">You need: a full natal chart</Pill>
              <Pill tone="orange">The trap: birth time</Pill>
            </div>

            <div className="mt-4">
              <TagPillsInline tags={meta.tags} />
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <Stat label="What we are after" value="The planet running the chart" />
              <Stat label="What we measure" value="Position, rulership, aspects" />
              <Stat
                label="The key question"
                value="Which planet would be missed most if it vanished?"
              />
            </div>
          </div>
        </header>

        {/* ── DEFINITION (direct answer) ───────────────────── */}
        <div className="relative overflow-hidden rounded-2xl border border-violet-400/25 bg-gradient-to-br from-violet-500/[0.12] via-indigo-500/[0.06] to-transparent px-6 py-5">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-200/10 blur-2xl"
          />
          <p className="relative text-sm font-semibold uppercase tracking-[0.2em] text-amber-200/80">
            Definition
          </p>
          <p className="relative mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
            The <strong>dominant planet</strong> of a natal chart is the one
            that accumulates the most factors of strength: it rules the
            Ascendant, sits on an angle, holds a direct link to the Sun or the
            Moon, occupies a sign where it is at home, and receives many
            aspects. You find it by scoring every planet on those criteria and
            adding up. It describes a person’s main drive — what they do
            spontaneously when nobody is telling them what to do.
          </p>
        </div>

        {/* ── KEY TAKEAWAYS ────────────────────────────────── */}
        <section
          className="rounded-2xl border border-emerald-400/25 bg-gradient-to-br from-emerald-500/[0.09] via-sky-500/[0.04] to-transparent p-6"
          aria-labelledby="in-short"
        >
          <h2
            id="in-short"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200/80"
          >
            In short
          </h2>
          <ul className="mt-4 space-y-2 leading-relaxed text-text/90">
            <li>
              There is <strong>no official scoring scale</strong>. The one worth
              using is the one that is published, and therefore checkable.
            </li>
            <li>
              The two heaviest criteria are{" "}
              <strong>rulership of the Ascendant</strong> and{" "}
              <strong>conjunction to an angle</strong>.
            </li>
            <li>
              Your <strong>chart ruler is not automatically your dominant</strong>{" "}
              planet — it is one criterion out of seven.
            </li>
            <li>
              A gap of <strong>4 points or more</strong> between first and second
              means a clear dominant. Under 2 points, you have two.
            </li>
            <li>
              <strong>
                Without a reliable birth time the calculation is worthless
              </strong>
              : one hour is enough to change the answer.
            </li>
          </ul>
        </section>

        {/* ── TOC ──────────────────────────────────────────── */}
        <nav
          aria-label="Table of contents"
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/[0.07] to-transparent p-6"
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
                  <span className="text-xs font-semibold tabular-nums text-violet-300/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-text/85 underline decoration-white/15 transition group-hover:decoration-violet-300/60">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* ── 1. DEFINITION ────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="definition">
          <H2 id="definition">What a dominant planet is</H2>

          <p className="text-lg leading-relaxed text-text/85">
            A dominant planet is not your favourite planet, and it is not the
            ruler of your Sun sign. It is the one whose voice drowns out the
            others in the{" "}
            <A href="/blog/qu-est-ce-qu-un-theme-astral">natal chart</A>: it
            sets the tempo, the question, the way problems get solved. When
            someone who barely knows you describes you in three words, they are
            almost always describing your dominant — not your Sun.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <Box title="What it is" tone="emerald">
              <ul className="space-y-2">
                <li>The engine: what the person does by default.</li>
                <li>
                  The outcome of a <strong>weighted score</strong>, not an
                  impression.
                </li>
                <li>
                  An actor, named by a planet — and therefore a{" "}
                  <A href="/blog/jupiterien">planetary type</A> described since
                  antiquity.
                </li>
                <li>Often two planets rather than one.</li>
              </ul>
            </Box>

            <Box title="What it is not" tone="amber">
              <ul className="space-y-2">
                <li>
                  The <A href="/signes-dominants">dominant sign</A>: that gives
                  the manner, not the engine.
                </li>
                <li>
                  The <A href="/maisons-dominantes">dominant house</A>: that
                  gives the field of play.
                </li>
                <li>The planet closest to the Sun, or the fastest one.</li>
                <li>
                  A fixed label: it describes how someone works, not what they
                  are worth.
                </li>
              </ul>
            </Box>
          </div>

          <Callout tone="note" title="The one-question test">
            <p>
              If you removed this planet from the chart, what would collapse
              first? A Saturn dominant gone is the backbone gone. A Mercury
              dominant gone is the link to other people. The test does not
              replace the calculation, but it validates its result.
            </p>
          </Callout>
        </section>

        <Divider />

        {/* ── 2. CHART RULER ───────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="chart-ruler">
          <H2 id="chart-ruler">Chart ruler vs dominant planet</H2>

          <p className="leading-relaxed text-text/85">
            In English-language astrology these two get used interchangeably,
            and several popular calculators even put them in the same sentence.
            They are not the same thing, and the difference matters.
          </p>

          <p className="leading-relaxed text-text/85">
            Your <strong>chart ruler</strong> is the planet that rules your
            Ascendant sign. It is a single fact, read off the chart in two
            seconds, and it does not depend on anything else. Your{" "}
            <strong>dominant planet</strong> is the result of weighing the whole
            chart. The chart ruler is one of the seven criteria below — the
            heaviest one, worth 5 points — which is why the two frequently
            coincide. Frequently is not always.
          </p>

          <Callout tone="ok" title="When they come apart">
            <p>
              Picture a Virgo Ascendant whose Mercury sits in the 12th house, in
              Leo, with no major aspect — a chart ruler with 5 points and
              nothing else. Now put Saturn on the Midheaven, in Capricorn, square
              the Sun. Saturn collects angularity, dignity and aspects, and
              finishes well ahead. The chart ruler still describes the doorway;
              Saturn describes the person walking through it.
            </p>
          </Callout>
        </section>

        <Divider />

        {/* ── 3. NO OFFICIAL METHOD ────────────────────────── */}
        <section className="space-y-5" aria-labelledby="no-standard">
          <H2 id="no-standard">Why no calculation is official</H2>

          <p className="leading-relaxed text-text/85">
            Three online calculators, three different dominants for the same
            chart. It is a routine experience, and a discouraging one. The
            explanation is simple: no astrological authority ever fixed a
            scoring scale the way a standards body fixes a paper size. Each
            school built its own, around whatever it considers decisive.
          </p>

          <p className="leading-relaxed text-text/85">
            Traditions before the twentieth century reasoned in{" "}
            <A href="/maitrises">essential dignities</A> and{" "}
            <A href="/significateurs">significators</A>: a strong planet was a
            planet in its domicile or exaltation. Twentieth-century astrology
            added the weight of angularity — the idea that a planet sitting on
            an angle shows up in behaviour. Psychological astrology favours
            aspects to the luminaries. None of these three is refuting the
            others; they are answering slightly different questions.
          </p>

          <Callout tone="warn" title="What to demand of a scoring scale">
            <p>
              Not that it be true — nobody can demonstrate that — but that it be{" "}
              <strong>explicit</strong>. A published scale can be argued with,
              corrected, reproduced by anyone. A calculator that will not say
              how it counts is asking you to take its word for it. The grid
              below is published in full, so you can contest every point value
              in it. That is exactly the point.
            </p>
          </Callout>
        </section>

        <Divider />

        {/* ── 4. THE GRID ──────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="grid">
          <H2 id="grid">The seven-weights grid</H2>

          <p className="leading-relaxed text-text/85">
            Seven criteria, each measuring a different way of being strong in a
            chart. You score the ten planets on every row, add up, and rank. A
            table of ten rows and seven columns is all it takes, and the full
            calculation runs to about twenty minutes the first time.
          </p>

          <p className="mb-2 font-semibold text-white/90">
            The complete scale, criterion by criterion
          </p>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <div
              className="overflow-x-auto"
              role="region"
              aria-label="Scoring scale of the seven-weights grid"
              tabIndex={0}
            >
              <table className="min-w-full border-collapse text-sm">
                <caption className="sr-only">
                  The seven scoring criteria and the points awarded to each.
                </caption>
                <thead className="bg-white/[0.04]">
                  <tr className="text-left">
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Criterion
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      What you look at
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Points
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {bareme.map((b, i) => (
                    <tr
                      key={b.n}
                      className={`border-t border-white/10 ${i % 2 === 1 ? "bg-white/[0.02]" : ""}`}
                    >
                      <th
                        scope="row"
                        className="px-5 py-4 text-left align-top font-medium text-white"
                      >
                        <span className="text-violet-300/80 tabular-nums">
                          {b.n}.
                        </span>{" "}
                        {b.nom}
                      </th>
                      <td className="px-5 py-4 align-top text-text/85">{b.quoi}</td>
                      <td className="px-5 py-4 align-top text-text/85">{b.pts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <figure className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <Image
              src={GrilleImage}
              alt="A hand-drawn astrological chart wheel in pencil beside a blank scoring grid and a brass compass"
              sizes="(max-width: 768px) 100vw, 800px"
              className="h-auto w-full"
            />
            <figcaption className="px-5 py-4 text-center text-xs text-text/50">
              The wheel on one side, the grid on the other. That is the working
              layout — and the one the printable worksheet reproduces.
            </figcaption>
          </figure>

          <div className="rounded-2xl border border-amber-400/25 bg-gradient-to-br from-amber-500/[0.10] to-transparent p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-200/80">
              Worksheet
            </p>
            <p className="mt-2 leading-relaxed text-text/85">
              The blank table to fill in by hand: ten planets, seven columns,
              the full scale on the back. Print two — one for your chart, one
              for someone you know well.
            </p>
            <a
              href={FICHE_PDF}
              download
              className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-xl border border-amber-400/30 bg-amber-400/10 px-4 py-2.5 text-sm font-medium text-amber-100 transition hover:bg-amber-400/20"
            >
              <span aria-hidden="true">↓</span>
              Download the worksheet (PDF, 2 A4 pages)
            </a>
          </div>

          <H3>Three scoring decisions, stated out loud</H3>

          <p className="leading-relaxed text-text/85">
            <strong>Rulership of the Ascendant costs the most.</strong> In the
            tradition, the ruler of the Ascendant is the ruler of the whole
            chart. A planet that governs the doorway governs what comes in and
            what goes out.
          </p>

          <p className="leading-relaxed text-text/85">
            <strong>
              A conjunction to an angle counts twice, and that is deliberate.
            </strong>{" "}
            It scores under criterion 2 (position) and under criterion 6 (aspect
            received). A planet glued to the Ascendant is the single most
            immediately visible thing in a chart: you read it in the face, the
            walk, the first three minutes of a conversation. It is the only
            double-count in the scale.
          </p>

          <p className="leading-relaxed text-text/85">
            <strong>The luminaries do not start out ahead.</strong> The Sun and
            Moon get a base of 2 points each, no more. What gives them weight is
            their <A href="/maitrises">dispositors</A> — the planet ruling the
            sign they sit in. A Sun in Scorpio strengthens Mars and Pluto, not
            the Sun.
          </p>

          <Callout tone="note" title="Orbs used">
            <p>
              8° for major aspects involving the Sun, Moon, Ascendant or
              Midheaven, 6° between two other planets, and 2° less for the
              sextile. These are classical orbs, deliberately tight: a scale
              that is generous with orbs ends up giving points to everybody. See
              the <A href="/aspects">aspects</A> page for the detail.
            </p>
          </Callout>
        </section>

        <Divider />

        {/* ── 5. THE CHART ─────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="chart">
          <H2 id="chart">The worked chart</H2>

          <p className="leading-relaxed text-text/85">
            A grid without a finished example is useless. So here is mine, birth
            data included, so you can recalculate it in whatever software you
            use and check every line.
          </p>

          <Box title="Birth data" tone="violet">
            <p>
              <strong>1 November 1971, 10:15, Troyes (Aube, France)</strong> —
              48° 18′ N, 4° 04′ E.
            </p>
            <p>
              French legal time was UTC+1. France observed no summer time
              between 1945 and 1976 — it was only reinstated by decree
              no. 75-866 of 19 September 1975, effective March 1976. Universal
              time of birth is therefore <strong>09:15 UT</strong>, with no
              further correction.
            </p>
            <p className="text-text/70">
              Positions calculated with the Swiss Ephemeris, tropical zodiac,
              Placidus houses.
            </p>
          </Box>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <div
              className="overflow-x-auto"
              role="region"
              aria-label="Planetary positions of the worked chart"
              tabIndex={0}
            >
              <table className="min-w-full border-collapse text-sm">
                <caption className="sr-only">
                  Sign, house and dignity of the ten planets in the chart of
                  1 November 1971.
                </caption>
                <thead className="bg-white/[0.04]">
                  <tr className="text-left">
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Planet
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Position
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      House
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Worth noting
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {positions.map((row, i) => (
                    <tr
                      key={row.p}
                      className={`border-t border-white/10 ${i % 2 === 1 ? "bg-white/[0.02]" : ""}`}
                    >
                      <th
                        scope="row"
                        className="whitespace-nowrap px-5 py-4 text-left align-top font-medium text-white"
                      >
                        <span aria-hidden="true" className="mr-2 text-amber-100/80">
                          {row.g}
                        </span>
                        {row.p}
                      </th>
                      <td className="whitespace-nowrap px-5 py-4 align-top text-text/85">
                        {row.pos}
                      </td>
                      <td className="px-5 py-4 align-top tabular-nums text-text/85">
                        {row.h}
                      </td>
                      <td className="px-5 py-4 align-top text-text/85">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="leading-relaxed text-text/85">
            Ascendant <strong>8° 07′ Sagittarius</strong>, Midheaven{" "}
            <strong>3° 05′ Libra</strong>. Two stelliums: three planets in
            Scorpio (Sun, Mercury, Venus) and three in the 12th house (Mercury,
            Venus, Neptune), whose cusp falls in Scorpio.
          </p>

          <figure className="rounded-2xl border border-white/10 bg-black/20 p-6">
            <svg
              viewBox="0 0 400 400"
              className="mx-auto h-auto w-full max-w-sm text-violet-100"
              role="img"
              aria-label="Chart wheel for 1 November 1971: Jupiter sits on the Ascendant at the left; Pluto borders the Midheaven at the upper left; Saturn faces Jupiter from the Descendant."
            >
              <g
                fill="none"
                stroke="currentColor"
                textAnchor="middle"
                dominantBaseline="central"
              >
                <circle cx="200" cy="200" r="170" strokeOpacity="0.35" />
                <circle cx="200" cy="200" r="116" strokeOpacity="0.2" />
                <line x1="84.0" y1="200.0" x2="30.0" y2="200.0" strokeWidth="1.8" strokeOpacity="0.6" />
                <line x1="104.8" y1="266.2" x2="60.4" y2="297.1" strokeWidth="0.7" strokeOpacity="0.2" />
                <line x1="174.8" y1="313.2" x2="163.0" y2="365.9" strokeWidth="0.7" strokeOpacity="0.2" />
                <line x1="249.0" y1="305.2" x2="271.8" y2="354.1" strokeWidth="1.8" strokeOpacity="0.6" />
                <line x1="291.9" y1="270.8" x2="334.6" y2="303.8" strokeWidth="0.7" strokeOpacity="0.2" />
                <line x1="310.9" y1="234.1" x2="362.5" y2="250.0" strokeWidth="0.7" strokeOpacity="0.2" />
                <line x1="316.0" y1="200.0" x2="370.0" y2="200.0" strokeWidth="1.8" strokeOpacity="0.6" />
                <line x1="295.2" y1="133.8" x2="339.6" y2="102.9" strokeWidth="0.7" strokeOpacity="0.2" />
                <line x1="225.2" y1="86.8" x2="237.0" y2="34.1" strokeWidth="0.7" strokeOpacity="0.2" />
                <line x1="151.0" y1="94.8" x2="128.2" y2="45.9" strokeWidth="1.8" strokeOpacity="0.6" />
                <line x1="108.1" y1="129.2" x2="65.4" y2="96.2" strokeWidth="0.7" strokeOpacity="0.2" />
                <line x1="89.1" y1="165.9" x2="37.5" y2="150.0" strokeWidth="0.7" strokeOpacity="0.2" />

                <line x1="82.0" y1="132.4" x2="52.5" y2="115.4" strokeWidth="0.8" strokeOpacity="0.35" />
                <line x1="285.1" y1="306.1" x2="306.4" y2="332.6" strokeWidth="0.8" strokeOpacity="0.35" />
                <line x1="68.8" y1="164.0" x2="36.0" y2="155.1" strokeWidth="0.8" strokeOpacity="0.35" />
                <line x1="82.9" y1="173.7" x2="34.1" y2="162.8" strokeWidth="0.8" strokeOpacity="0.35" />
                <line x1="174.6" y1="333.6" x2="168.3" y2="367.0" strokeWidth="0.8" strokeOpacity="0.35" />
                <line x1="64.0" y1="201.8" x2="30.0" y2="202.3" strokeWidth="0.8" strokeOpacity="0.35" />
                <line x1="335.8" y1="207.6" x2="369.7" y2="209.5" strokeWidth="0.8" strokeOpacity="0.35" />
                <line x1="117.5" y1="91.9" x2="96.9" y2="64.9" strokeWidth="0.8" strokeOpacity="0.35" />
                <line x1="96.6" y1="188.7" x2="31.0" y2="181.6" strokeWidth="0.8" strokeOpacity="0.35" />
                <line x1="147.2" y1="74.7" x2="134.0" y2="43.3" strokeWidth="0.8" strokeOpacity="0.35" />

                <g fill="currentColor" stroke="none" fontSize="16">
                  <text x="74.2" y="127.9">☉</text>
                  <text x="290.7" y="313.1">☽</text>
                  <text x="60.2" y="161.7">☿</text>
                  <text x="74.1" y="171.8">♀</text>
                  <text x="172.9" y="342.5">♂</text>
                  <text x="55.0" y="202.0" className="fill-amber-200">♃</text>
                  <text x="344.8" y="208.1">♄</text>
                  <text x="112.0" y="84.7">♅</text>
                  <text x="87.7" y="187.8">♆</text>
                  <text x="143.7" y="66.4">♇</text>
                </g>

                <g
                  fill="currentColor"
                  stroke="none"
                  fontSize="12"
                  fontWeight="600"
                  className="fill-white/60"
                >
                  <text x="15.0" y="200.0">ASC</text>
                  <text x="121.1" y="30.5">MC</text>
                  <text x="385.0" y="200.0">DS</text>
                  <text x="278.9" y="369.5">IC</text>
                </g>
              </g>
            </svg>
            <figcaption className="mt-5 text-center text-xs text-text/50">
              The chart of 1 November 1971 drawn to scale, Ascendant on the
              left. Jupiter (♃) sits on the Ascendant; Pluto (♇) borders the
              Midheaven; Saturn (♄) faces them from the Descendant. Three
              planets on angles — that is where the calculation is decided.
            </figcaption>
          </figure>
        </section>

        <Divider />

        {/* ── 6. SCORING ───────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="scoring">
          <H2 id="scoring">Scoring, planet by planet</H2>

          <p className="leading-relaxed text-text/85">
            Only the top five are detailed here: beyond that the scores no
            longer change the outcome. The full ranking follows.
          </p>

          <H3>Jupiter: 16 points</H3>
          <p className="leading-relaxed text-text/85">
            The Ascendant is in Sagittarius, and Sagittarius has only one ruler
            — <A href="/planetes/jupiter">Jupiter</A> takes the 5 points of
            criterion 1. It is also conjunct that Ascendant within{" "}
            <strong>47 minutes of arc</strong>, comfortably inside the 3° band:
            4 points under criterion 2, then 2 more under criterion 6 for the
            same aspect. It sits in Sagittarius, so it is in domicile: 3 points.
            A sextile to the Midheaven and a trine to the Moon add 1 point each,
            which caps criterion 6 at 4.
          </p>
          <p className="leading-relaxed text-text/85">
            Total: 5 + 4 + 3 + 4 = <strong>16 points</strong>. No other planet
            reaches half of that.
          </p>

          <H3>Pluto: 8 points</H3>
          <p className="leading-relaxed text-text/85">
            <A href="/planetes/pluton">Pluto</A> borders the Midheaven within
            2° 08′: 4 points of angularity, 2 points of aspect received. As the
            modern ruler of Scorpio it is co-dispositor of the Sun (1 pt) and
            ruler of both stelliums (1 + 1). Against that, it is in fall in
            Libra, which costs 1 point. Total: 8.
          </p>

          <H3>Neptune: 8 points</H3>
          <p className="leading-relaxed text-text/85">
            <A href="/planetes/neptune">Neptune</A> is conjunct the Ascendant
            too, but at 6° 13′ — in the second band, so 2 points only, plus 1
            for the aspect. Its sextile to the Midheaven, however, is tight at
            1° 11′: 2 points. A member of the 12th-house stellium (1 pt), it is
            also one of the three most aspected planets in the chart (2 pts).
            Total: 8, level with Pluto.
          </p>

          <H3>Mars and Saturn: 7 points each</H3>
          <p className="leading-relaxed text-text/85">
            <A href="/planetes/mars">Mars</A> touches no angle and holds no
            dignity, but it rules Aries where the Moon sits (2 pts), co-rules
            Scorpio where the Sun sits (1 pt), rules both stelliums (2 pts) and
            is among the most aspected (2 pts). It climbs to 7 without ever
            being visible — the textbook case of a planet that weighs through
            rulership rather than position.{" "}
            <A href="/planetes/saturne">Saturn</A> reaches the same total by the
            opposite route: conjunct the Descendant within 3° 11′ and tightly
            trine the Midheaven.
          </p>
        </section>

        <Divider />

        {/* ── 7. RANKING ───────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="ranking">
          <H2 id="ranking">The ranking and how to read it</H2>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <div
              className="overflow-x-auto"
              role="region"
              aria-label="Ranking of the ten planets by score"
              tabIndex={0}
            >
              <table className="min-w-full border-collapse text-sm">
                <caption className="sr-only">
                  Total score of each planet and where the points come from.
                </caption>
                <thead className="bg-white/[0.04]">
                  <tr className="text-left">
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Rank
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Planet
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Total
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Where the points come from
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {classement.map((row) => (
                    <tr
                      key={row.p}
                      className={`border-t border-white/10 ${row.r === 1 ? "bg-amber-400/[0.06]" : row.r % 2 === 1 ? "bg-white/[0.02]" : ""}`}
                    >
                      <td className="px-5 py-4 align-top tabular-nums text-text/70">
                        {row.r}
                      </td>
                      <th
                        scope="row"
                        className="whitespace-nowrap px-5 py-4 text-left align-top font-medium text-white"
                      >
                        {row.p}
                      </th>
                      <td className="px-5 py-4 align-top font-semibold tabular-nums text-white">
                        {row.t}
                      </td>
                      <td className="px-5 py-4 align-top text-text/85">{row.d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <H3>Read the gap, not just the winner</H3>

          <p className="leading-relaxed text-text/85">
            The number that matters is not the winner’s total but the distance
            to second place. Three cases:
          </p>

          <ul className="space-y-2 leading-relaxed text-text/85">
            <li>
              <strong>A gap of 4 points or more</strong>: a clear dominant. One
              planet leads, and the portrait of that type fits closely.
            </li>
            <li>
              <strong>A gap of 1 to 3 points</strong>: a qualified dominant. The
              first gives the drive, the second colours everything it produces.
            </li>
            <li>
              <strong>A dead heat</strong>: no dominant, a dominant pair. You
              read both planets together, and the portrait of a single type will
              never be enough.
            </li>
          </ul>

          <p className="leading-relaxed text-text/85">
            Here the gap is 8 points: the dominant is clear and not open to
            argument. What is open to argument is second place — which brings us
            to the next section.
          </p>

          <Callout tone="ok" title="What the ranking says about the Sun">
            <p>
              Eighth out of ten, with 3 points. A Sun in the 11th house, with no
              major aspect to any other planet, in a sign it does not rule. That
              is, in numbers, why{" "}
              <A href="/blog/pourquoi-votre-horoscope-ne-vous-ressemble-pas">
                Sun-sign horoscopes do not sound like anyone
              </A>
              : they comment on an actor who, in a great many charts, does not
              have the leading role.
            </p>
          </Callout>
        </section>

        <Divider />

        {/* ── 8. TIE ───────────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="tie">
          <H2 id="tie">Breaking a tie</H2>

          <p className="leading-relaxed text-text/85">
            Pluto and Neptune both come out at 8 points. This happens often, and
            it is the moment most methods stop and leave the reader to decide
            alone. Here is the rule I apply, in three steps, in this order.
          </p>

          <div className="space-y-4">
            <Box title="Step 1 — the angle wins" tone="violet">
              <p>
                At equal totals, the planet closer to an angle goes ahead. It is
                the one other people see first.{" "}
                <strong>
                  Pluto is 2° 08′ from the Midheaven, Neptune 6° 13′ from the
                  Ascendant: Pluto takes second place.
                </strong>{" "}
                The rule settles it here, so the next two never have to run.
              </p>
            </Box>

            <Box title="Step 2 — dignity wins">
              <p>
                If neither touches an angle, the one in domicile or exaltation
                goes ahead: it acts without an intermediary, where a peregrine
                planet has to borrow another planet’s means.
              </p>
            </Box>

            <Box title="Step 3 — the tightest aspect decides">
              <p>
                If nothing has separated them, compare the tightest orb to the
                Sun, the Moon or the Ascendant. And if the difference stays
                under half a minute of arc: do not decide. Two dominants in a
                strict dead heat is information in itself — a two-engine way of
                working, usually experienced as an inner contradiction long
                before it is experienced as a richness.
              </p>
            </Box>
          </div>

          <Callout tone="warn" title="The mistake to avoid">
            <p>
              Adding an eighth criterion because the seventh did not settle it.
              That is the open door to the bespoke scale — the one that always
              ends up producing the answer you were hoping for. The tie-break
              rule has to be decided <em>before</em> you see the scores, not
              after.
            </p>
          </Callout>
        </section>

        <Divider />

        {/* ── 9. BIRTH TIME ────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="birth-time">
          <H2 id="birth-time">The birth-time check</H2>

          <p className="leading-relaxed text-text/85">
            This is the check nobody runs, and the only one that can invalidate
            the whole calculation. The Ascendant moves roughly one degree every
            four minutes, and three of the seven criteria depend on it directly.
            I ran the full grid again on the same chart, moving the birth time.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            <Stat label="10:15 (time on record)" value="Jupiter 16 — Pluto 8" />
            <Stat label="± 30 minutes" value="Jupiter still first" />
            <Stat label="09:15, one hour earlier" value="Mars 11 — Jupiter 7" />
          </div>

          <p className="leading-relaxed text-text/85">
            One hour earlier, the Ascendant leaves Sagittarius for Scorpio.
            Jupiter loses the 5 points of rulership and the 4 points of
            conjunction in one move: it drops from 16 to 7. Mars, which rules
            Scorpio, inherits the rulership and takes the lead with 11 points.{" "}
            <strong>Same chart, same scale, opposite dominant.</strong>
          </p>

          <Callout tone="warn" title="The safety rule">
            <p>
              Always rerun the calculation at plus and minus thirty minutes. If
              the dominant holds, you can lean on it. If it changes, your birth
              time is not solid enough for this calculation — go to the official
              record rather than trusting a family recollection.
            </p>
          </Callout>
        </section>

        <Divider />

        {/* ── 10. PORTRAITS ────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="portraits">
          <H2 id="portraits">The ten planetary types</H2>

          <p className="leading-relaxed text-text/85">
            The calculation gives you a name. The portrait tells you what that
            name covers: how a person thinks, works, loves, and the shadow that
            comes with it. Read the one for your dominant, then the one for your
            runner-up — it is the crossing of the two that actually resembles
            somebody.
          </p>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <div
              className="overflow-x-auto"
              role="region"
              aria-label="The ten planetary types and their portraits"
              tabIndex={0}
            >
              <table className="min-w-full border-collapse text-sm">
                <caption className="sr-only">
                  How each dominant planet maps to a planetary type and its
                  keyword.
                </caption>
                <thead className="bg-white/[0.04]">
                  <tr className="text-left">
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Dominant
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Type
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      What it does by default
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {portraits.map((row, i) => (
                    <tr
                      key={row.slug}
                      className={`border-t border-white/10 ${i % 2 === 1 ? "bg-white/[0.02]" : ""}`}
                    >
                      <th
                        scope="row"
                        className="whitespace-nowrap px-5 py-4 text-left align-top font-medium text-white"
                      >
                        {row.p}
                      </th>
                      <td className="whitespace-nowrap px-5 py-4 align-top text-text/85">
                        <A href={`/blog/${row.slug}`}>{row.type}</A>
                      </td>
                      <td className="px-5 py-4 align-top text-text/85">{row.cle}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="leading-relaxed text-text/85">
            In the chart above the dominant is Jupiter and the runner-up is
            Pluto. A <A href="/blog/jupiterien">Jupiterian</A> who teaches and
            widens, doubled with a <A href="/blog/plutonien">Plutonian</A> who
            digs and rebuilds: someone who teaches, but cannot bear to teach at
            the surface.
          </p>
        </section>

        <Divider />

        {/* ── 11. LIMITS ───────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="limits">
          <H2 id="limits">What the grid does not tell you</H2>

          <p className="leading-relaxed text-text/85">
            A scale claiming to measure everything measures nothing. Four
            limits, worth keeping in mind before you use the result.
          </p>

          <ul className="space-y-3 leading-relaxed text-text/85">
            <li>
              <strong>It does not say whether the dominant is lived well.</strong>{" "}
              A dominant Saturn can produce a backbone or a lead weight. The
              score is identical; the <A href="/aspects">aspects</A> it receives
              and the person’s history make the difference.
            </li>
            <li>
              <strong>It does not replace reading the chart.</strong> The
              dominant is a way in, not a summary. A chart is read with its
              twelve <A href="/maisons">houses</A>, its{" "}
              <A href="/transits">transits</A> and its contradictions.
            </li>
            <li>
              <strong>It rests on debatable technical choices.</strong> Placidus
              rather than another{" "}
              <A href="/cuspides-des-maisons">house system</A>, modern
              rulerships rather than traditional ones alone: change those and
              some scores move.
            </li>
            <li>
              <strong>It is not a scientific measurement.</strong> Astrology is
              not a science, and this scale is not a demonstration: it is a
              reading tool, explicit and therefore open to criticism. It throws
              light on how someone works; it predicts nothing and replaces no
              professional advice.
            </li>
          </ul>
        </section>

        <Divider />

        {/* ── 12. MISTAKES ─────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="mistakes">
          <H2 id="mistakes">Six common mistakes</H2>

          <div className="space-y-4">
            <div>
              <H3>1. Confusing the dominant planet with the dominant sign</H3>
              <p className="leading-relaxed text-text/85">
                The planet gives the engine, the{" "}
                <A href="/signes-dominants">sign</A> gives the manner. A Mars
                dominant in a Libra-toned chart is a fighter who negotiates.
                That is not the same person as a Venus dominant in an
                Aries-toned chart.
              </p>
            </div>

            <div>
              <H3>2. Forgetting the ruler of the Ascendant</H3>
              <p className="leading-relaxed text-text/85">
                The heaviest criterion, and the one most often left out, because
                it requires knowing the{" "}
                <A href="/maitrises">rulerships</A>. Without it, Jupiter would
                have lost 5 of its 16 points in the example above.
              </p>
            </div>

            <div>
              <H3>3. Counting aspects without an orb</H3>
              <p className="leading-relaxed text-text/85">
                A trine at 9° is not a trine. With no declared orb limit, every
                planet ends up “heavily aspected” and the criterion stops
                discriminating between anything.
              </p>
            </div>

            <div>
              <H3>4. Letting fictitious points into the scale</H3>
              <p className="leading-relaxed text-text/85">
                <A href="/lilith">Lilith</A>, the{" "}
                <A href="/noeuds-lunaires">lunar nodes</A>, Chiron and the{" "}
                <A href="/asteroides">asteroids</A> have their uses, but they
                are not planets: adding them to the calculation inflates certain
                signs artificially and makes two charts impossible to compare.
              </p>
            </div>

            <div>
              <H3>5. Accepting a result without knowing the method</H3>
              <p className="leading-relaxed text-text/85">
                If a calculator does not publish its scale, its result is not
                wrong: it is unverifiable. That is not the same thing, but it is
                not much better either.
              </p>
            </div>

            <div>
              <H3>6. Calculating without a reliable birth time</H3>
              <p className="leading-relaxed text-text/85">
                No time means no Ascendant, no Midheaven, no houses — three of
                the seven criteria disappear. Better not to conclude at all than
                to conclude on half the data.
              </p>
            </div>
          </div>
        </section>

        <Divider />

        {/* ── 13. TAKEAWAYS ────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="takeaways">
          <H2 id="takeaways">Key takeaways</H2>

          <div className="relative overflow-hidden rounded-2xl border border-emerald-400/25 bg-gradient-to-br from-emerald-500/[0.10] via-sky-500/[0.05] to-transparent p-6">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl"
            />
            <ul className="relative space-y-3 leading-relaxed text-text/90">
              <li>
                ⚖ <strong>Seven criteria, one published scale.</strong> A method
                is worth what it can be checked against, not how old it is.
              </li>
              <li>
                ⚖{" "}
                <strong>
                  Rulership of the Ascendant and angularity decide it
                </strong>{" "}
                almost every time. Start with those two rows.
              </li>
              <li>
                ⚖ <strong>Your chart ruler is one criterion</strong>, not the
                answer. It wins often, but it has to win on points.
              </li>
              <li>
                ⚖ <strong>Read the gap, not the total</strong>: 4 points or
                more, clear dominant; under 2, a dominant pair.
              </li>
              <li>
                ⚖ <strong>Always check at ± 30 minutes.</strong> One hour moved
                the worked example from Jupiter to Mars.
              </li>
            </ul>
          </div>

          <p className="leading-relaxed text-text/85">
            Run the grid on your own chart, then on the chart of someone you
            know well: calculating another person’s dominant is how you find out
            whether the method holds. On yourself, you recognise a bit of
            everything. The{" "}
            <a
              href={FICHE_PDF}
              download
              className="underline decoration-amber-300/40 transition hover:decoration-amber-300/80"
            >
              printable worksheet
            </a>{" "}
            has the blank table and the scale on the back.
          </p>
        </section>

        {/* ── 14. FAQ ──────────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="faq">
          <H2 id="faq">Frequently asked questions about the dominant planet</H2>

          <div className="space-y-4">
            {faq.map((item) => (
              <details
                key={item.q}
                open
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

        {/* ── CTA / INTERNAL LINKS ─────────────────────────── */}
        <section className="rounded-2xl border border-white/10 bg-black/20 p-6">
          <p className="text-sm text-text/60">Keep reading</p>
          <div className="mt-3 space-y-3 leading-relaxed text-text/85">
            <p>
              To apply the grid you first need a complete chart: the{" "}
              <A href="/theme-astral">birth chart</A> page explains what it
              contains, and{" "}
              <A href="/blog/comprendre-signe-astrologique-ascendant-12-exemples">
                Sun and Ascendant in twelve examples
              </A>{" "}
              shows why the two do not tell the same story.
            </p>
            <p>
              The other two dominants of a chart are calculated the same way:
              the <A href="/signes-dominants">dominant sign</A> for the manner,
              the <A href="/maisons-dominantes">dominant house</A> for the field
              of play. Taken together, the three give a far truer reading than
              an isolated Sun sign. The{" "}
              <A href="/dictionnaire-astrologique">astrology dictionary</A>{" "}
              covers every term used here.
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
