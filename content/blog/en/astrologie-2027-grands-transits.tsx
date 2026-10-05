import type { ReactNode } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";

export const meta = {
  slug: "astrologie-2027-grands-transits",
  seoTitle: "Astrology 2027: The Major Transits and Where They Land",
  title: "Astrology 2027: where the major transits land in your chart",
  description:
    "Mars retrograde, Saturn in Aries, Jupiter in Virgo, the 2 August eclipse: the major transits of 2027 in UK time, and where each one lands in your chart.",
  date: "2026-10-04",
  tags: [
    "transits",
    "2027",
    "méthode",
    "éclipses",
    "rétrograde",
    "Saturne",
    "Jupiter",
    "Uranus",
    "maisons astrologiques",
    "thème astral",
    "exemples",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/astrologie-2027-grands-transits.webp",
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
            ◐
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

/** Outbound link to a primary source (no nofollow: institutional sources). */
function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="underline decoration-white/30 hover:decoration-white/60 transition"
    >
      {children}
    </a>
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

/** Accessible table: caption, column and row headers, keyboard-scrollable region. */
function DataTable({
  label,
  caption,
  head,
  rows,
}: {
  label: string;
  caption: string;
  head: string[];
  rows: ReactNode[][];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
      <div
        className="overflow-x-auto"
        role="region"
        aria-label={label}
        tabIndex={0}
      >
        <table className="min-w-full border-collapse text-sm">
          <caption className="sr-only">{caption}</caption>
          <thead className="bg-white/[0.04]">
            <tr className="text-left">
              {head.map((h) => (
                <th
                  key={h}
                  scope="col"
                  className="px-5 py-4 font-semibold text-white"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr
                key={i}
                className={`border-t border-white/10 ${i % 2 === 1 ? "bg-white/[0.02]" : ""}`}
              >
                {r.map((cell, k) =>
                  k === 0 ? (
                    <th
                      key={k}
                      scope="row"
                      className="px-5 py-4 text-left align-top font-medium text-white"
                    >
                      {cell}
                    </th>
                  ) : (
                    <td key={k} className="px-5 py-4 align-top text-text/85">
                      {cell}
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ── Table of contents ───────────────────────────────────────── */

const toc = [
  { id: "year", label: "2027 in six movements" },
  { id: "mars-retrograde", label: "Mars retrograde, 10 January to 1 April" },
  { id: "saturn-aries", label: "Saturn in Aries all year" },
  { id: "jupiter", label: "Jupiter: from Leo to Virgo on 26 July" },
  { id: "outer-planets", label: "Uranus, Neptune, Pluto: the backdrop" },
  { id: "eclipses", label: "The two solar eclipses" },
  { id: "sensitive-degrees", label: "The 2027 sensitive-degree map" },
  { id: "method", label: "Reading 2027 in your chart in four steps" },
  { id: "example", label: "The example: 2027 on a real chart" },
  { id: "faq", label: "Frequently asked questions" },
];

/* ── FAQ (display + JSON-LD from the same source) ────────────── */

const faq = [
  {
    q: "Do I need my birth time to use this calendar?",
    a: "Not for the Sun or the planets: your birth date places them to the degree, the Moon apart. The time becomes necessary as soon as you want the natal house a transit crosses, or contacts to the Ascendant and the Midheaven. Without it, read the sensitive-degree map against your planets only, and leave the houses aside.",
  },
  {
    q: "What orb should I use for a transit?",
    a: "Three degrees for a conjunction, opposition or square from Saturn, Uranus, Neptune or Pluto; two degrees for their trines and sextiles; one degree for Mars and for lunations. Either way, what happens clusters around the exact dates and the stations, when the planet slows down until it stands still.",
  },
  {
    q: "Does a transit that touches nothing in my chart still count?",
    a: "Yes, but differently. It colours the natal house it moves through, an area of life, for its whole stay: Saturn in the 4th house throughout 2027, for instance, weighs on home and foundations even without an exact aspect. What it does not produce is a dated period, the way a contact to a planet or an angle does.",
  },
  {
    q: "Why do dates differ from one website to another?",
    a: "Three reasons. Time zone: Neptune stations on 9 July at 23:41 in London, but on 10 July at 00:41 in Paris or Madrid. The event chosen: the retrograde station, the change of sign and the exact aspect do not fall on the same day. And the ephemeris used, which can shift a time by a few minutes. The dates here are calculated with the Swiss Ephemeris and given in UK time.",
  },
  {
    q: "Is Mars retrograde in 2027 “bad” for Leos and Virgos?",
    a: "No. A transit does not target a sign; it passes over degrees, here between 20° 56′ Leo and 10° 26′ Virgo. By conjunction it concerns people born between 13 August and 3 September, and by hard aspect those with a natal point at the same degrees of Aquarius, Pisces, Taurus, Gemini, Scorpio or Sagittarius. A Leo born on 25 July is not touched by conjunction.",
  },
  {
    q: "Does the 2 August eclipse affect me if I can’t see it?",
    a: "Visibility is a matter of astronomy: totality crosses the far south of Andalusia, Gibraltar, North Africa and Egypt. In astrology it is the degree that counts, 9° 55′ Leo, whether or not you can see it from where you live. The eclipse touches a chart if a natal point lies within three degrees of that point, of its opposite or of its squares.",
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

/* ── The six movements of 2027 ───────────────────────────────── */

const movements = [
  {
    what: "Mars retrograde",
    when: "10 January → 1 April",
    where: "10° 26′ Virgo → 20° 56′ Leo",
    note: "The only one of the year. Zone crossed three times, from 5 November 2026 to 8 June 2027.",
  },
  {
    what: "Jupiter changes sign",
    when: "26 July, 05:49",
    where: "Leo → Virgo",
    note: "Direct on 13 April at 17° 00′ Leo; in Virgo until 24 August 2028.",
  },
  {
    what: "Saturn in Aries",
    when: "All year",
    where: "8° 20′ → 27° 53′ Aries",
    note: "Retrograde from 9 August to 24 December; leaves Aries on 13 April 2028.",
  },
  {
    what: "Uranus in Gemini",
    when: "All year",
    where: "1° 41′ → 9° 57′ Gemini",
    note: "Direct on 8 February, retrograde on 15 September.",
  },
  {
    what: "Neptune in Aries, Pluto in Aquarius",
    when: "All year",
    where: "1° 43′ → 6° 40′ Aries · 4° 21′ → 7° 11′ Aquarius",
    note: "Neptune retrograde from 9 July to 15 December; Pluto from 8 May to 18 October.",
  },
  {
    what: "Two solar eclipses",
    when: "6 February · 2 August",
    where: "17° 38′ Aquarius · 9° 55′ Leo",
    note: "Annular, then total; three penumbral lunar eclipses (20 February, 18 July, 17 August).",
  },
];

/* ── The 2027 sensitive-degree map ───────────────────────────── */

const map = [
  {
    transit: "Mars retrograde (10 Jan → 1 Apr)",
    degrees: "20° 56′ Leo → 10° 26′ Virgo, crossed three times (5 Nov 2026 → 8 Jun 2027)",
    conj: "Born 13 August – 3 September",
    hard: "Opposition: 9 February – 1 March · Squares: 11 May – 1 June, 12 November – 3 December",
  },
  {
    transit: "Saturn in Aries (all year)",
    degrees: "8° 20′ → 27° 53′ Aries; triple pass from 21° 01′ to 27° 53′ (4 May 2027 → 27 Mar 2028)",
    conj: "Born 28 March – 18 April",
    hard: "Opposition: 1 – 22 October · Squares: 29 June – 21 July, 29 December – 19 January",
  },
  {
    transit: "Jupiter in Leo (until 26 Jul)",
    degrees: "17° 00′ → 27° 18′ Leo; triple pass from 17° to 27° (Sep 2026 → Jul 2027)",
    conj: "Born 9 – 21 August",
    hard: "Opposition: 5 – 17 February · Squares: 7 – 19 May, 9 – 20 November",
  },
  {
    transit: "Jupiter in Virgo (from 26 Jul)",
    degrees: "0° → 27° 18′ Virgo; triple pass from 17° 32′ to 27° 31′ (Oct 2027 → Aug 2028)",
    conj: "Born 22 August – 21 September",
    hard: "Opposition: 18 February – 18 March · Squares: 20 May – 19 June, 21 November – 20 December",
  },
  {
    transit: "Uranus in Gemini",
    degrees: "1° 41′ → 9° 57′ Gemini; triple pass from 5° 56′ to 9° 57′ (May 2027 → May 2028)",
    conj: "Born 22 May – 1 June",
    hard: "Opposition: 23 November – 2 December · Squares: 20 February – 1 March, 24 August – 3 September",
  },
  {
    transit: "Neptune in Aries",
    degrees: "1° 43′ → 6° 40′ Aries; triple pass from 3° 51′ to 6° 40′ (Mar 2027 → Apr 2028)",
    conj: "Born 21 – 28 March",
    hard: "Opposition: 24 – 30 September · Squares: 22 – 29 June, 23 – 29 December",
  },
  {
    transit: "Pluto in Aquarius",
    degrees: "4° 21′ → 7° 11′ Aquarius; triple pass from 4° 45′ to 7° 11′ (Jan 2027 → Feb 2028)",
    conj: "Born 24 – 28 January",
    hard: "Opposition: 27 – 31 July · Squares: 24 – 28 April, 27 – 31 October",
  },
  {
    transit: "Annular eclipse, 6 February",
    degrees: "17° 38′ Aquarius, 3° orb",
    conj: "Born 3 – 10 February",
    hard: "Opposition: 6 – 14 August · Squares: 4 – 12 May, 6 – 13 November",
  },
  {
    transit: "Total eclipse, 2 August",
    degrees: "9° 55′ Leo, 3° orb",
    conj: "Born 29 July – 6 August",
    hard: "Opposition: 26 January – 2 February · Squares: 26 April – 4 May, 29 October – 6 November",
  },
];

/* ── The example: 1 November 1971, 10:15, Troyes ─────────────── */

const example = [
  {
    rank: "1",
    transit: "Uranus opposite the Ascendant (8° 07′ Sagittarius) and Jupiter (8° 54′ Sagittarius)",
    dates: "8 July and 25 November 2027, then 27 April 2028 · 26 July and 6 November 2027, then 11 May 2028",
    why: "Slow planet, chart angle, triple pass: all three criteria at once. Uranus settles on the natal Descendant (8° 07′ Gemini) and stays there until spring 2028.",
  },
  {
    rank: "2",
    transit: "Saturn conjunct the Moon (16° 52′ Aries, 4th house)",
    dates: "1 April 2027, single pass; preceded by Saturn opposite natal Uranus (15° 28′ Libra) on 21 March",
    why: "One pass only, but a luminary in an angular house. Saturn crosses the 4th house all year: foundations, home, what one leans on.",
  },
  {
    rank: "3",
    transit: "Pluto trine natal Saturn (4° 56′ Gemini, 6th house)",
    dates: "19 January, 19 September and 15 November 2027",
    why: "Slow and triple, but harmonious: background support rather than an event. Pluto square the natal Sun (8° 17′ Scorpio) comes within 1° 07′ on 8 May, without becoming exact before 21 March 2028.",
  },
  {
    rank: "4",
    transit: "Total eclipse at 9° 55′ Leo, 8th house",
    dates: "2 August 2027",
    why: "Square the natal Sun within 1° 38′, trine the Ascendant and Jupiter. A heavily weighted lunation in the house of shared resources, debts and transformation.",
  },
  {
    rank: "5",
    transit: "Retrograde Mars opposite natal Mars (27° 22′ Aquarius, 3rd house)",
    dates: "19 November 2026, 28 February and 7 May 2027",
    why: "Triple pass, but a fast planet: seven months in which drive is replayed, in the chart’s 8th and 9th houses, without the reach of a slow transit.",
  },
  {
    rank: "6",
    transit: "Jupiter in Virgo, 9th house; square the Ascendant and natal Jupiter",
    dates: "2 and 5 September 2027, single pass",
    why: "A brief contact of Jupiter with its own natal place and with the Ascendant: worth noting, not worth inflating.",
  },
  {
    rank: "7",
    transit: "Neptune opposite the Midheaven (3° 05′ Libra)",
    dates: "25 February 2027, third and last pass (after 25 April and 22 September 2026)",
    why: "A transit that is ending: 2027 writes its last line, not its first.",
  },
];

/* ── Timeline: the landmarks of 2027 (positions computed over 365 days) ─ */

const ticks = [
  { x: 60, l: "Jan" },
  { x: 126.6, l: "Feb" },
  { x: 185, l: "Mar" },
  { x: 249.5, l: "Apr" },
  { x: 312, l: "May" },
  { x: 376.5, l: "Jun" },
  { x: 439, l: "Jul" },
  { x: 503.5, l: "Aug" },
  { x: 568, l: "Sep" },
  { x: 630.5, l: "Oct" },
  { x: 695, l: "Nov" },
  { x: 757.5, l: "Dec" },
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
        {/* ── COVER IMAGE (LCP) ────────────────────────────── */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f13]">
          <Image
            src={meta.cover}
            alt="Paper birth chart wheel on a desk at night, a brass compass and ruler tracing an arc between two positions, a year planner in the background"
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
              Calculated dates · Method · Real chart
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-text/85">
              You will find a 2027 astrology calendar almost anywhere: dates,
              degrees, a paragraph per sign. What you rarely find is the
              question that changes everything:{" "}
              <strong>
                where do these transits land in your chart, and which of them
                deserve your attention?
              </strong>
            </p>

            <p className="mt-3 max-w-2xl leading-relaxed text-text/80">
              This article gives the dates of 2027 in UK time, calculated from
              the ephemeris, then a four-step method for reading them in your
              own chart: the sensitive-degree map, the triple-pass zones, the
              natal house being crossed. With a real chart, mine, to show the
              reasoning from start to finish.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <Pill tone="violet">UK time</Pill>
              <Pill tone="sky">Six movements</Pill>
              <Pill tone="emerald">Four-step method</Pill>
              <Pill tone="orange">No sign-by-sign forecasts</Pill>
            </div>

            <div className="mt-4">
              <TagPillsInline tags={meta.tags} />
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <Stat label="The only Mars retrograde" value="10 January → 1 April" />
              <Stat label="The turning point" value="Jupiter into Virgo, 26 July" />
              <Stat label="The eclipse" value="2 August, 9° 55′ Leo, total" />
            </div>
          </div>
        </header>

        {/* ── SHORT ANSWER ─────────────────────────────────── */}
        <div className="relative overflow-hidden rounded-2xl border border-violet-400/25 bg-gradient-to-br from-violet-500/[0.12] via-indigo-500/[0.06] to-transparent px-6 py-5">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-200/10 blur-2xl"
          />
          <p className="relative text-sm font-semibold uppercase tracking-[0.2em] text-amber-200/80">
            The short answer
          </p>
          <p className="relative mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
            In <strong>astrology, 2027</strong> comes down to six movements:
            Mars retrograde in Virgo and Leo from 10 January to 1 April, the
            only one of the year; Jupiter leaving Leo for Virgo on 26 July;
            Saturn in Aries from start to finish, retrograde from 9 August to
            24 December; Uranus in Gemini, Neptune in Aries and Pluto in
            Aquarius continuing their course; two solar eclipses, annular on 6
            February at 17° 38′ Aquarius and total on 2 August at 9° 55′ Leo;
            and no Venus retrograde. None of these dates affects you the way it
            affects your neighbour: it all depends on the degree where it falls
            in your chart. That is what this article teaches you to read.
          </p>
        </div>

        {/* ── KEY POINTS ───────────────────────────────────── */}
        <section
          className="rounded-2xl border border-emerald-400/25 bg-gradient-to-br from-emerald-500/[0.09] via-sky-500/[0.04] to-transparent p-6"
          aria-labelledby="key-points"
        >
          <h2
            id="key-points"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200/80"
          >
            Key points
          </h2>
          <ul className="mt-4 space-y-2 leading-relaxed text-text/90">
            <li>
              A transit does not target a sign; it passes over{" "}
              <strong>degrees</strong>. It touches your chart if it comes
              within 3° of a natal planet or angle, by conjunction, opposition
              or square.
            </li>
            <li>
              <strong>The sensitive-degree map</strong> brings together, for
              each transit of 2027, the degrees it sweeps and the birth dates
              whose Sun lies on its path.
            </li>
            <li>
              The transits that weigh are those that cross the same degree{" "}
              <strong>three times</strong>, because of retrogradation. Each
              section gives that zone.
            </li>
            <li>
              Four steps: <strong>list</strong> your degrees,{" "}
              <strong>overlay</strong> the map, <strong>locate</strong> the
              natal house, <strong>rank</strong> with the three-pass rule.
            </li>
            <li>
              No forecasts by Sun sign: a Leo born on 25 July and a Leo born on
              15 August will not live the same Mars retrograde.
            </li>
          </ul>
        </section>

        {/* ── TABLE OF CONTENTS ────────────────────────────── */}
        <nav
          aria-label="Article contents"
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

        {/* ── 1. SIX MOVEMENTS ─────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="year">
          <H2 id="year">2027 in six movements</H2>

          <p className="text-lg leading-relaxed text-text/85">
            Six movements shape the year: a Mars retrograde in winter, a change
            of sign for Jupiter in summer, Saturn moving forward then back
            through Aries, three outer planets continuing a stay begun in 2026,
            and two solar eclipses on the Aquarius–Leo axis. Mercury goes
            retrograde three times, Venus not once.
          </p>

          <DataTable
            label="The six astrological movements of 2027"
            caption="For each movement of 2027, the period in UK time, the degrees involved and a useful detail."
            head={["Movement", "When", "Where", "Worth knowing"]}
            rows={movements.map((m) => [m.what, m.when, m.where, m.note])}
          />

          <figure className="rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-6">
            <div
              className="overflow-x-auto"
              role="region"
              aria-label="Timeline of the astrological landmarks of 2027"
              tabIndex={0}
            >
              <svg
                viewBox="0 0 840 290"
                role="img"
                aria-label="Timeline of 2027: Mars retrograde from 10 January to 1 April; Jupiter in Leo until 26 July, then in Virgo; Saturn in Aries all year, retrograde from 9 August to 24 December; Mercury retrograde from 9 February to 3 March, from 10 June to 4 July and from 7 to 28 October; solar eclipses on 6 February and 2 August."
                className="min-w-[640px] w-full"
              >
                <g fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="12" fill="#d4d4d8">
                  {ticks.map((t) => (
                    <g key={t.l}>
                      <line x1={t.x} y1={40} x2={t.x} y2={262} stroke="#ffffff" strokeOpacity="0.08" />
                      <text x={t.x + 4} y={32} fill="#a1a1aa">{t.l}</text>
                    </g>
                  ))}
                  <line x1={820} y1={40} x2={820} y2={262} stroke="#ffffff" strokeOpacity="0.08" />

                  {/* Mars retrograde: 10 Jan → 1 Apr */}
                  <text x={4} y={74} fontWeight="600">Mars ℞</text>
                  <rect x={80.8} y={62} width={168.7} height={16} rx={8} fill="#f87171" fillOpacity="0.85" />
                  <text x={258} y={74} fill="#fca5a5">10 Jan → 1 Apr</text>

                  {/* Jupiter: Leo until 26 Jul, then Virgo */}
                  <text x={4} y={118} fontWeight="600">Jupiter</text>
                  <rect x={60} y={106} width={431} height={16} rx={8} fill="#fbbf24" fillOpacity="0.8" />
                  <rect x={491} y={106} width={329} height={16} rx={8} fill="#34d399" fillOpacity="0.8" />
                  <text x={200} y={118} fill="#1c1917" fontWeight="600">Leo</text>
                  <text x={620} y={118} fill="#052e16" fontWeight="600">Virgo (26 Jul)</text>

                  {/* Saturn: Aries all year, ℞ 9 Aug → 24 Dec */}
                  <text x={4} y={162} fontWeight="600">Saturn</text>
                  <rect x={60} y={153} width={760} height={6} rx={3} fill="#a78bfa" fillOpacity="0.45" />
                  <rect x={520} y={150} width={285} height={16} rx={8} fill="#a78bfa" fillOpacity="0.9" />
                  <text x={530} y={162} fill="#1e1b4b" fontWeight="600">℞ 9 Aug → 24 Dec</text>
                  <text x={70} y={147} fill="#c4b5fd">Aries all year</text>

                  {/* Mercury retrograde ×3 */}
                  <text x={4} y={206} fontWeight="600">Mercury ℞</text>
                  <rect x={143.3} y={194} width={45.7} height={16} rx={8} fill="#60a5fa" fillOpacity="0.85" />
                  <rect x={395} y={194} width={50} height={16} rx={8} fill="#60a5fa" fillOpacity="0.85" />
                  <rect x={643} y={194} width={44} height={16} rx={8} fill="#60a5fa" fillOpacity="0.85" />
                  <text x={196} y={206} fill="#93c5fd">9 Feb → 3 Mar</text>
                  <text x={452} y={206} fill="#93c5fd">10 Jun → 4 Jul</text>
                  <text x={694} y={206} fill="#93c5fd">7 → 28 Oct</text>

                  {/* Solar eclipses */}
                  <text x={4} y={250} fontWeight="600">Eclipses</text>
                  <circle cx={137} cy={246} r={7} fill="none" stroke="#fde68a" strokeWidth="2.5" />
                  <text x={150} y={250} fill="#fde68a">6 Feb · annular · 17° 38′ ♒</text>
                  <circle cx={505.5} cy={246} r={7} fill="#fde68a" />
                  <text x={518} y={250} fill="#fde68a">2 Aug · total · 9° 55′ ♌</text>
                </g>
              </svg>
            </div>
            <figcaption className="mt-3 text-center text-xs text-text/50">
              The landmarks of 2027 on a single timeline, plotted from the
              actual dates.
            </figcaption>
          </figure>

          <p className="leading-relaxed text-text/85">
            Mercury’s three retrogrades (9 February → 3 March, 10 June → 4
            July, 7 → 28 October) have{" "}
            <A href="/blog/mercure-retrograde-2027-dates">their own article</A>,
            with dates and shadow periods. New and full moons are in the{" "}
            <A href="/blog/calendrier-pleine-lune-nouvelle-lune-2026-2027">
              2026–2027 lunar calendar
            </A>
            . Here we deal with what lasts: the slow-planet transits, the Mars
            retrograde, the eclipses, and above all how to relate them to your
            own chart.
          </p>
        </section>

        {/* ── 2. MARS RETROGRADE ───────────────────────────── */}
        <section className="space-y-5" aria-labelledby="mars-retrograde">
          <H2 id="mars-retrograde">Mars retrograde, 10 January to 1 April</H2>

          <p className="text-lg leading-relaxed text-text/85">
            Mars stations on 10 January at 12:59, at 10° 26′ Virgo, backs into
            Leo on 21 February and turns direct on 1 April at 15:08, at 20° 56′
            Leo. It is the only Mars retrograde of 2027, and the last before
            2029. Between those dates, on 19 February, Mars is opposite the
            Sun, and the next day at its closest to Earth: it shines all night,
            brighter than at any other time of the year.
          </p>

          <p className="leading-relaxed text-text/85">
            Twelve weeks of retrograde motion, but the zone involved is
            occupied for much longer. Mars reaches 20° 56′ Leo on 5 November
            2026, gets to 10° 26′ Virgo on 10 January, returns to 20° 56′ Leo
            on 1 April, then passes 10° 26′ Virgo again on 8 June. Anyone with a
            natal point between those two degrees sees Mars cross it{" "}
            <strong>three times in seven months</strong>. That is the first
            thing to check, before any comment about the sign.
          </p>

          <Box title="What Mars retrograde asks of you" tone="amber">
            <p>
              Mars is drive: decision, action, the capacity to assert yourself.
              Retrograde, that drive turns back towards what has already been
              launched. Projects begun in November and December 2026 come back
              to the table, and so do disagreements left hanging. You move less
              fast and more accurately. In Virgo this goes through detail and
              work; in Leo, from 21 February, through pride and what you want
              to show.
            </p>
          </Box>

          <H3>Where it lands for you</H3>
          <p className="leading-relaxed text-text/85">
            By conjunction, Mars retrograde touches any natal point between
            20° 56′ Leo and 10° 26′ Virgo. For the Sun, that means people born{" "}
            <strong>between 13 August and 3 September</strong>, whatever the
            year. By opposition, the same degrees of Aquarius and Pisces (born
            9 February – 1 March); by square, Taurus and Gemini (11 May – 1
            June), Scorpio and Sagittarius (12 November – 3 December). The natal
            house that holds late Leo and early Virgo tells you the area of
            life concerned.
          </p>
        </section>

        {/* ── 3. SATURN IN ARIES ───────────────────────────── */}
        <section className="space-y-5" aria-labelledby="saturn-aries">
          <H2 id="saturn-aries">Saturn in Aries all year</H2>

          <p className="text-lg leading-relaxed text-text/85">
            Saturn starts 2027 at 8° 20′ Aries and ends it at 21° 04′. In
            between it climbs to 27° 53′, where it stations on 9 August at
            19:05, then moves back until 02:47 on 24 December, at 21° 01′. It
            entered Aries on 14 February 2026 and will leave for Taurus on 13
            April 2028: 2027 is the core year of the stay.
          </p>

          <p className="leading-relaxed text-text/85">
            Two rhythms follow each other. From January to early May, Saturn
            covers degrees 8 to 21 of Aries in a single pass, without coming
            back. From 4 May it enters the zone it will visit three times,{" "}
            <strong>from 21° 01′ to 27° 53′</strong>: moving forward until 9
            August, retrograde until 24 December, then forward again until 27
            March 2028. A natal point in that zone lives an eleven-month Saturn
            transit; a point between 8° and 21° gets a shorter pass, but a
            Saturn pass is still a Saturn pass.
          </p>

          <Box title="What Saturn in Aries asks of you" tone="violet">
            <p>
              Saturn is structure: the frame, duration, the responsibility you
              end up accepting. Aries is the sign of initiative, where you
              start without waiting. The two do not get on naturally: Saturn is
              in <A href="/maitrises">fall</A> there. The transit asks you to
              learn to start with method, to hold on to what you have launched,
              to accept being alone at the outset. Its ally this year is
              Jupiter, in exact trine on 3 April and 12 July: the confidence
              that sustains the effort.
            </p>
          </Box>

          <H3>Where it lands for you</H3>
          <p className="leading-relaxed text-text/85">
            A natal Sun between 8° and 28° Aries, that is a birth{" "}
            <strong>between 28 March and 18 April</strong>, receives Saturn by
            conjunction during the year. A birth between 1 and 22 October
            receives it by opposition, a birth between 29 June and 21 July or
            between 29 December and 19 January by square. For everyone else,
            Saturn crosses one natal house all year long, and that is the house
            to look at: <A href="/transits">Saturn transits by house</A> are
            covered in the course.
          </p>
        </section>

        {/* ── 4. JUPITER ───────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="jupiter">
          <H2 id="jupiter">Jupiter: from Leo to Virgo on 26 July</H2>

          <p className="text-lg leading-relaxed text-text/85">
            Jupiter has been in Leo since 30 June 2026 and retrograde since 13
            December, at 27° 01′. It turns direct on 13 April 2027 at 17° 00′
            Leo, is back at 27° on 11 July, then enters Virgo on 26 July at
            05:49. It ends the year there at 27° 16′ and stays until 24 August
            2028.
          </p>

          <p className="leading-relaxed text-text/85">
            Degrees 17 to 27 of Leo are therefore crossed three times, from
            September 2026 to July 2027. The same mechanism repeats on the other
            side: Jupiter will station on 12 January 2028 at 27° 31′ Virgo and
            move back to 17° 32′, making degrees 17 to 27 of Virgo a triple-pass
            zone between October 2027 and August 2028. Degrees 0 to 17 of
            Virgo, covered from late July to mid-October 2027, are visited only
            once.
          </p>

          <Box title="What the move into Virgo changes" tone="emerald">
            <p>
              Jupiter enlarges whatever it touches: meaning, confidence,
              opportunity. In Leo it enlarges visibility and creation, whatever
              you sign with your own name. In Virgo it enlarges craft, health,
              service, the art of doing things well. The year moves from the
              spotlight to the workbench. On 10 September, Jupiter in Virgo
              makes an exact square to Uranus in Gemini at 9° 57′: a widening
              method meets a disruptive novelty.
            </p>
          </Box>

          <H3>Where it lands for you</H3>
          <p className="leading-relaxed text-text/85">
            Jupiter in Leo concerns by conjunction births from 9 to 21 August;
            Jupiter in Virgo, births from 22 August to 21 September. By
            opposition, births from 5 to 17 February and from 18 February to 18
            March respectively. Jupiter is fast: a single contact lasts two to
            three weeks, a triple contact stretches over nearly ten months. The
            two natal houses crossed, the one holding late Leo and the one
            holding Virgo, each receive a year of its attention.
          </p>
        </section>

        {/* ── 5. THE OUTER PLANETS ─────────────────────────── */}
        <section className="space-y-5" aria-labelledby="outer-planets">
          <H2 id="outer-planets">Uranus, Neptune, Pluto: the backdrop</H2>

          <p className="text-lg leading-relaxed text-text/85">
            The three outer planets are not the headline in 2027: they were
            between 2024 and 2026, when all three changed sign. Uranus has
            been in Gemini since 26 April 2026, Neptune in Aries since 26
            January 2026, Pluto in Aquarius since 19 November 2024. In 2027 they
            move on by three to eight degrees, and that is precisely what makes
            them powerful for anyone with a natal point in their path: their
            transits last twelve to eighteen months, almost always in three
            passes.
          </p>

          <DataTable
            label="The three outer planets in 2027"
            caption="For Uranus, Neptune and Pluto: the degrees covered in 2027, the retrograde period and the zone crossed three times."
            head={["Planet", "Degrees in 2027", "Retrograde", "Triple-pass zone"]}
            rows={[
              ["Uranus in Gemini", "1° 41′ → 9° 57′", "15 September → mid-February 2028", "5° 56′ → 9° 57′ (May 2027 → May 2028)"],
              ["Neptune in Aries", "1° 43′ → 6° 40′", "9 July → 15 December", "3° 51′ → 6° 40′ (March 2027 → April 2028)"],
              ["Pluto in Aquarius", "4° 21′ → 7° 11′", "8 May → 18 October", "4° 45′ → 7° 11′ (January 2027 → February 2028)"],
            ]}
          />

          <p className="leading-relaxed text-text/85">
            Among themselves, the three get along. Uranus and Pluto form an
            exact trine on 15 June, at 6° 52′ Gemini and Aquarius: two air
            signs, technical novelty and collective transformation pulling the
            same way. Uranus and Neptune are in exact sextile on 15 January and
            6 June, Neptune and Pluto on 29 June and 16 October. These are
            background harmonies, read on the scale of a generation rather than
            a year; they take on a personal meaning when one of the three
            touches your chart.
          </p>

          <H3>Where it lands for you</H3>
          <p className="leading-relaxed text-text/85">
            Uranus by conjunction for births from 22 May to 1 June, Neptune from
            21 to 28 March, Pluto from 24 to 28 January. By opposition, Uranus
            targets births from 23 November to 2 December, Neptune from 24 to
            30 September, Pluto from 27 to 31 July. The squares are in the map
            below. Beyond the Sun, the same reasoning applies to the Moon, the
            Ascendant and every planet: you then need the calculated chart.
            Meanings by planet are in the courses on{" "}
            <A href="/planetes/uranus">Uranus</A>,{" "}
            <A href="/planetes/neptune">Neptune</A> and{" "}
            <A href="/planetes/pluton">Pluto</A>.
          </p>
        </section>

        {/* ── 6. ECLIPSES ──────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="eclipses">
          <H2 id="eclipses">The two solar eclipses</H2>

          <p className="text-lg leading-relaxed text-text/85">
            On 6 February at 15:59, the Aquarius new moon is an annular eclipse,
            at 17° 38′ of the sign, visible from South America and West Africa,
            not from Europe. On 2 August at 11:06, the Leo new moon is a total
            eclipse at 9° 55′: one of the longest of the century, a little over
            six minutes of darkness in broad daylight at its maximum, in Egypt.
            Its path of totality crosses the far south of Andalusia, in the
            provinces of Cádiz and Málaga, then Gibraltar, Tangier, North
            Africa, Libya and Egypt.
          </p>

          <p className="leading-relaxed text-text/85">
            The two eclipses answer each other on the Aquarius–Leo axis, where
            the <A href="/noeuds-lunaires">lunar nodes</A> travel in 2027 (from
            22° 51′ to 3° 34′ Aquarius for the mean node). The 2 August eclipse
            falls in the same part of the zodiac as the total eclipse of 12
            August 2026, ten degrees lower in the sign: people with planets in
            the first half of Leo or Aquarius have already begun the chapter.
            The year’s three lunar eclipses, on 20 February at 2° Virgo, 18 July
            at 26° Capricorn and 17 August at 24° Aquarius, are penumbral: mark
            them in the calendar, without giving them the weight of a total
            eclipse.
          </p>

          <Callout tone="note" title="How to read an eclipse in a chart">
            <p>
              An eclipse is a heavily weighted lunation. It counts for you if
              its degree falls within three degrees of a natal point, by
              conjunction, opposition or square, and the natal house where it
              occurs names the area concerned. The rest of the time it is a new
              moon slightly more marked than the others. Whether you can see it
              from home changes nothing in the calculation.
            </p>
          </Callout>

          <H3>Where it lands for you</H3>
          <p className="leading-relaxed text-text/85">
            With a three-degree orb, the 6 February eclipse concerns by
            conjunction births from 3 to 10 February, by opposition births from
            6 to 14 August, by square births from 4 to 12 May and from 6 to 13
            November. The 2 August eclipse concerns by conjunction births from
            29 July to 6 August, by opposition births from 26 January to 2
            February, by square births from 26 April to 4 May and from 29
            October to 6 November. The eclipse point stays sensitive for
            several months: Mars reactivates the 2 August point by square, from
            Scorpio, on 17 September 2027.
          </p>
        </section>

        {/* ── 7. SENSITIVE-DEGREE MAP ──────────────────────── */}
        <section className="space-y-5" aria-labelledby="sensitive-degrees">
          <H2 id="sensitive-degrees">The 2027 sensitive-degree map</H2>

          <p className="text-lg leading-relaxed text-text/85">
            Everything above fits into one table. For each transit, the
            “Degrees swept” column gives the stretch of zodiac covered in 2027
            and, where there is one, the zone crossed three times. The last two
            columns translate those degrees into <strong>birth dates</strong>,
            for the Sun: the one point of the chart everyone knows without a
            calculation.
          </p>

          <DataTable
            label="The 2027 sensitive-degree map"
            caption="For each transit of 2027: the degrees swept, then the birth dates whose Sun is touched by conjunction, and those touched by opposition or square. Windows valid to within a day for any year of birth."
            head={["Transit", "Degrees swept", "Sun touched by conjunction", "By opposition or square"]}
            rows={map.map((r) => [r.transit, r.degrees, r.conj, r.hard])}
          />

          <p className="leading-relaxed text-text/85">
            The date windows are calculated over the years 1950 to 2010 and
            hold to within a day for any year of birth. A date inside a window
            means that the natal Sun lies on the transit’s path during 2027;
            the exact date of contact depends on the precise degree, which any
            chart software will give you. For the other points of your chart,
            the Moon, the Ascendant, the planets, read the degrees column with
            your positions to hand.
          </p>

          <figure className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <Image
              src="/images/blog/degres-sensibles-2027-roue.webp"
              alt="Zodiac wheel drawn in ink on cream paper, watercolour arcs highlighting stretches of the circle, a hand placing a brass protractor against its edge"
              width={1600}
              height={900}
              sizes="(max-width: 768px) 100vw, 800px"
              className="h-auto w-full"
            />
            <figcaption className="px-5 py-4 text-center text-xs text-text/50">
              Highlight the stretches swept in 2027 on your own wheel: whatever
              is touched jumps out.
            </figcaption>
          </figure>
        </section>

        {/* ── 8. METHOD ────────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="method">
          <H2 id="method">Reading 2027 in your chart in four steps</H2>

          <p className="text-lg leading-relaxed text-text/85">
            The method comes down to four verbs: list, overlay, locate, rank.
            Twenty minutes with your chart in front of you, and you know which
            transits of 2027 concern you, on which dates and in what order of
            importance.
          </p>

          <H3>1. List your degrees</H3>
          <p className="leading-relaxed text-text/85">
            Note the position of your twelve points: Sun, Moon, Mercury, Venus,
            Mars, Jupiter, Saturn, Uranus, Neptune, Pluto, Ascendant and
            Midheaven, in degree and minute of sign. A calculated{" "}
            <A href="/theme-astral">birth chart</A> gives you all of them.
            Without a birth time, the Ascendant, the Midheaven and the houses
            are missing: the article on the{" "}
            <A href="/blog/theme-astral-sans-heure-de-naissance">
              birth chart without a birth time
            </A>{" "}
            explains what remains readable.
          </p>

          <H3>2. Overlay the map</H3>
          <p className="leading-relaxed text-text/85">
            For each line of the sensitive-degree map, a natal point is touched
            if it lies within 3° of a swept degree (conjunction), within 3° of
            the same degree in the opposite sign (opposition), or in one of the
            two signs at 90° (square). Trines and sextiles count with a 2° orb:
            they support more than they trigger events. For Mars, bring
            everything down to 1°.
          </p>

          <H3>3. Locate the natal house</H3>
          <p className="leading-relaxed text-text/85">
            Find which house of your chart holds the degrees swept. The{" "}
            <A href="/cuspides-des-maisons">cusps</A> of your chart divide the
            zodiac into twelve areas; a slow transit colours the one it
            crosses for its whole stay, whether or not it forms an exact
            aspect. Saturn in the 2nd house throughout 2027 speaks of money and
            resources, in the 7th of partnership and contracts, in the 10th of
            career. The course on the <A href="/maisons">twelve houses</A>{" "}
            covers each one.
          </p>

          <H3>4. Rank with the three-pass rule</H3>
          <p className="leading-relaxed text-text/85">
            You now have a list, sometimes a long one. Three criteria sort it,
            in this order. <strong>Speed</strong>: Saturn, Uranus, Neptune and
            Pluto come before Jupiter, which comes before Mars and the
            eclipses. <strong>Target</strong>: a contact to the Sun, the Moon,
            the Ascendant or the Midheaven comes before a contact to another
            planet; a conjunction or an opposition comes before a square, which
            comes before a trine. <strong>Number of passes</strong>: a transit
            that crosses the same degree three times, thanks to
            retrogradation, comes before a single pass. Keep the top two or
            three: they are the transits of your year. The rest are footnotes.
          </p>

          <aside className="rounded-2xl border border-amber-400/25 bg-amber-500/[0.07] p-5">
            <p className="text-lg leading-relaxed text-amber-100/90">
              “A transit that passes three times is not three times stronger.
              It is three times longer, and it is duration that transforms.”
            </p>
          </aside>

          <Callout tone="warn" title="What the method does not do">
            <p>
              It does not predict events. A Saturn transit to the Moon
              describes a period in which emotional security is tested by time;
              it says neither how, nor with whom, nor whether it will go well.
              Astrology is not an experimental science, and I use it as a
              calendar of attention, not as an oracle. The course on{" "}
              <A href="/transits">transits</A> gives the reading of each
              transiting planet, planet by planet and house by house.
            </p>
          </Callout>
        </section>

        {/* ── 9. EXAMPLE ───────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="example">
          <H2 id="example">The example: 2027 on a real chart</H2>

          <p className="text-lg leading-relaxed text-text/85">
            The chart is mine, the one I published for the{" "}
            <A href="/blog/planete-dominante-methode-calcul">
              dominant planet method
            </A>
            : 1 November 1971, 10:15, Troyes (France). Ascendant 8° 07′
            Sagittarius, Midheaven 3° 05′ Libra, Placidus houses. I ran it
            through the sensitive-degree map, then through the three-pass
            rule. The result is the list below, in the order in which I keep
            it.
          </p>

          <DataTable
            label="The transits of 2027 on the chart of 1 November 1971, ranked"
            caption="For the reference chart, the transits of 2027 ranked by the three-pass rule: the transit, its exact dates in UK time, and the reason for its rank."
            head={["Rank", "Transit", "Exact dates", "Why this rank"]}
            rows={example.map((r) => [r.rank, r.transit, r.dates, r.why])}
          />

          <p className="leading-relaxed text-text/85">
            What the list teaches me first is what is not on it. My Sun is at
            8° 17′ Scorpio: no slow transit touches it exactly in 2027. Pluto
            comes within a degree of the square in May, the 2 August eclipse
            squares it within a degree and a half, but the real appointment,
            Pluto square the Sun, waits until March 2028. A hurried reader
            looking at my Sun sign would conclude that 2027 is a quiet year.
            The map says the opposite: Uranus on the Descendant all year,
            Saturn on the Moon in spring.
          </p>

          <p className="leading-relaxed text-text/85">
            Next, the order. Retrograde Mars opposes my natal Mars three times,
            from November 2026 to May 2027, and yet it is fifth on the list:
            speed comes first. Conversely, Saturn touches my Moon only once, on
            1 April, and it is second: a slow planet on a luminary, in an
            angular house, weighs more than a repeated fast transit. That is
            what the rule is for: not being impressed by the number of lines.
          </p>

          <p className="leading-relaxed text-text/85">
            What I do with it, finally. I predict nothing. I note that the year
            is about the other, partnerships and contracts (Uranus in the 7th
            house), and about foundations and security (Saturn in the 4th, on
            the Moon), and that these two themes cross in April and July. I
            reread the two relevant courses, I write down my dates, and I let
            the year take care of the rest. That is exactly the use I recommend
            to everyone: a calendar of attention, kept with rigour, read with
            modesty.
          </p>
        </section>

        {/* ── 10. FAQ ──────────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="faq">
          <H2 id="faq">Frequently asked questions about 2027 astrology</H2>

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

        {/* ── SOURCES ──────────────────────────────────────── */}
        <section className="rounded-2xl border border-white/10 bg-black/20 p-6" aria-labelledby="sources">
          <h2 id="sources" className="text-sm font-semibold uppercase tracking-[0.18em] text-text/70">
            Sources
          </h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-text/75">
            <li>
              Positions, stations, changes of sign, exact aspects and
              birth-date windows: the author’s calculations with the{" "}
              <Ext href="https://www.astro.com/swisseph/swephinfo_e.htm">
                Swiss Ephemeris
              </Ext>{" "}
              (Astrodienst), converted to UK time (GMT, then BST from 28 March
              to 31 October 2027). In New York, subtract five hours (four for a
              couple of weeks in March and early November). Times are accurate
              to within a few minutes depending on the ephemeris used.
            </li>
            <li>
              <Ext href="https://promenade.imcce.fr/fr/images/pdf/eclsol-2aout2027.pdf">
                <span lang="fr">Éclipse totale de Soleil du 2 août 2027</span>
              </Ext>{" "}
              (IMCCE, Paris Observatory): circumstances, path of totality,
              magnitude.
            </li>
            <li>
              <Ext href="https://eclipse.gsfc.nasa.gov/SEgoogle/SEgoogle2001/SE2027Feb06Agoogle.html">
                Annular Solar Eclipse of 2027 Feb 06
              </Ext>{" "}
              (NASA Goddard Space Flight Center): path and duration of
              annularity.
            </li>
            <li>
              Meanings of transits by planet and by house: the{" "}
              <A href="/transits">Transits: complete guide</A> course on this
              site.
            </li>
          </ul>
        </section>

        {/* ── CTA / INTERNAL LINKS ─────────────────────────── */}
        <section className="rounded-2xl border border-white/10 bg-black/20 p-6">
          <p className="text-sm text-text/60">Keep reading</p>
          <div className="mt-3 space-y-3 leading-relaxed text-text/85">
            <p>
              To apply the method you need your degrees: the{" "}
              <A href="/theme-astral">birth chart</A> page explains how to get
              them and what they contain. The course on{" "}
              <A href="/transits">transits</A> then gives the reading of each
              passing planet, and the one on{" "}
              <A href="/retrogrades">retrograde planets</A> explains why a
              transit passes three times.
            </p>
            <p>
              The finer dates of the year are in{" "}
              <A href="/blog/mercure-retrograde-2027-dates">
                Mercury retrograde 2027
              </A>{" "}
              and in the{" "}
              <A href="/blog/calendrier-pleine-lune-nouvelle-lune-2026-2027">
                2026–2027 lunar calendar
              </A>
              . The{" "}
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
