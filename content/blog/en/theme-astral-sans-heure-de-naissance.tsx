import type { ReactNode } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import CoverImage from "@/public/images/blog/theme-astral-sans-heure-de-naissance.webp";
import RegistreImage from "@/public/images/blog/registre-etat-civil-heure-naissance.webp";
import BandeauImage from "@/public/images/blog/montre-sans-aiguilles-bandeau.webp";

export const meta = {
  slug: "theme-astral-sans-heure-de-naissance",
  seoTitle: "Birth Chart Without a Birth Time: What You Can Still Read",
  title: "Birth chart without a birth time: what holds, what falls",
  description:
    "No birth time? Where to find it in the UK, the US and Europe, what a chart without one still tells you, and what you should not read into it.",
  date: "2026-10-03",
  tags: [
    "thème astral",
    "méthode",
    "bases",
    "ascendant",
    "lune",
    "maisons astrologiques",
    "signe solaire",
    "exemples",
    "débutant",
  ],
  readingLevel: "débutant" as const,
  cover: "/images/blog/theme-astral-sans-heure-de-naissance.webp",
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

function Divider() {
  return (
    <div className="flex items-center gap-4" aria-hidden="true">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-white/10" />
      <span className="text-sm tracking-[0.3em] text-amber-200/50">☉ ☽ ☿</span>
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

/* ── Contents ────────────────────────────────────────────────── */

const toc = [
  { id: "find-the-time", label: "Find the time before giving up on it" },
  { id: "what-holds", label: "What holds, what falls" },
  { id: "two-midnights", label: "The two-midnights test" },
  { id: "example", label: "An example drawn at random" },
  { id: "moon", label: "The Moon, a case apart" },
  { id: "conventions", label: "Noon chart, solar chart" },
  { id: "rectification", label: "Rectification" },
  { id: "checklist", label: "The checklist" },
  { id: "faq", label: "Frequently asked questions" },
];

/* ── FAQ (display + JSON-LD from the same source) ────────────── */

const faq = [
  {
    q: "Can you do a birth chart without a birth time?",
    a: "Yes, but only half of it. The date is enough to place the Sun and planets in their signs and to read their aspects, which already gives a psychological portrait. The Ascendant, Midheaven and houses stay unknown, and the Moon changes sign on 44% of days: check yours with the two-midnights test.",
  },
  {
    q: "How can I find my rising sign without a birth time?",
    a: "You can’t deduce it. The Ascendant goes round the whole zodiac in twenty-four hours and, in Britain, stays anywhere from about 40 minutes to just over 3 hours in a sign, depending on the sign and the latitude. Without a time, no sign gets more than about a 13% chance. The only routes are finding the time or reconstructing it through rectification.",
  },
  {
    q: "Where can I find my birth time?",
    a: "On your birth record, depending on where you were born. In Scotland it appears on every birth register entry; in the US, on the long-form certificate from the state vital records office. In England and Wales it is usually missing, except for twins and other multiple births, so ask the hospital and look through family papers. In France, Belgium and Spain, it is on the full copy of the birth record.",
  },
  {
    q: "What time should I enter if I don’t know mine?",
    a: "By convention, noon: it keeps the error on the Moon to eight degrees at most. Then ignore the Ascendant, Midheaven and houses the software shows, and check the signs by recalculating the chart for 00:00 and 23:59. Anything that changes between the two remains uncertain.",
  },
  {
    q: "Is the time on a birth record reliable?",
    a: "It is the time declared at registration, in the legal clock time of the day, and the best source there is. A round time such as 10:00 or 15:30 may have been rounded: rerun any sensitive calculation thirty minutes either side. Enter it as written, with the place of birth: good software applies the history of daylight saving time.",
  },
  {
    q: "Can a solar chart replace the natal chart?",
    a: "No. It puts the Sun on the Ascendant and derives symbolic houses from it, identical for everyone born within a few days. It is a handy grid for following transits, the one behind Sun-sign columns, not a description of your actual life.",
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

/* ── Where the time is recorded, country by country ──────────── */

const countries = [
  {
    country: "England and Wales",
    doc: "Birth certificate (General Register Office)",
    time: "Usually not. A time appears only for twins, triplets and other multiple births.",
    where: "Order online from the GRO. For a single birth, go straight to hospital and family records.",
  },
  {
    country: "Scotland",
    doc: "Birth certificate (extract of the register entry)",
    time: "Yes, on every statutory birth entry, not just multiple births.",
    where: "National Records of Scotland or the local registrar.",
  },
  {
    country: "United States",
    doc: "Long-form (full) birth certificate",
    time: "Yes: “time of birth” is item 2 of the U.S. Standard Certificate of Live Birth. Short abstracts may leave it out.",
    where: "The vital records office of the state of birth.",
  },
  {
    country: "France, Belgium, Spain",
    doc: "Copie intégrale · copie de l’acte · certificado literal",
    time: "Yes. In France the law has required it since 1803.",
    where: "Town hall, municipality or civil registry, often online. Free in all three countries.",
  },
];

/* ── What holds, what falls ──────────────────────────────────── */

const holds = [
  {
    el: "Sun sign",
    verdict: "Reliable",
    why: "1° a day. It changes sign twelve days a year (3.3% of days): only on those days is there any doubt.",
    ok: true,
  },
  {
    el: "Mercury, Venus, Mars signs",
    verdict: "Almost always reliable",
    why: "They change sign on 4.1%, 3.5% and 1.9% of days.",
    ok: true,
  },
  {
    el: "Jupiter to Pluto",
    verdict: "Reliable",
    why: "A few hundredths of a degree a day, sometimes less.",
    ok: true,
  },
  {
    el: "Aspects between planets (Moon excluded)",
    verdict: "Reliable",
    why: "In twenty-four hours, the distances between planets shift by a degree or two at most.",
    ok: true,
  },
  {
    el: "Moon sign",
    verdict: "One day in two",
    why: "12 to 15° a day: it changes sign on 43.9% of days.",
    ok: false,
  },
  {
    el: "Moon aspects",
    verdict: "Handle with care",
    why: "Its position floats six to eight degrees either side of noon: tight aspects may or may not exist.",
    ok: false,
  },
  {
    el: "Ascendant, Midheaven",
    verdict: "Unknown",
    why: "They go round the whole zodiac in twenty-four hours.",
    ok: false,
  },
  {
    el: "Houses",
    verdict: "Unknown",
    why: "They are counted from the Ascendant.",
    ok: false,
  },
  {
    el: "Dominant planet",
    verdict: "Can’t be calculated",
    why: "Three of the seven criteria depend on the chart’s angles.",
    ok: false,
  },
  {
    el: "Transits to the angles, solar return",
    verdict: "Unusable",
    why: "They rely on the Ascendant, the Midheaven and the houses.",
    ok: false,
  },
];

/* ── The random example: 25 February 1966, Clermont-Ferrand ──── */

const positions = [
  { p: "Sun", g: "☉", a: "5° 53′ Pisces", b: "6° 53′ Pisces", v: "Holds", ok: true },
  { p: "Moon", g: "☽", a: "25° 27′ Aries", b: "7° 47′ Taurus", v: "Falls: Taurus from 08:53", ok: false },
  { p: "Mercury", g: "☿", a: "20° 51′ Pisces", b: "22° 31′ Pisces", v: "Holds", ok: true },
  { p: "Venus", g: "♀", a: "29° 49′ Capricorn", b: "0° 10′ Aquarius", v: "Falls: Aquarius from 11:54", ok: false },
  { p: "Mars", g: "♂", a: "20° 11′ Pisces", b: "20° 58′ Pisces", v: "Holds", ok: true },
  { p: "Jupiter", g: "♃", a: "21° 24′ Gemini", b: "21° 26′ Gemini", v: "Holds", ok: true },
  { p: "Saturn", g: "♄", a: "18° 09′ Pisces", b: "18° 16′ Pisces", v: "Holds", ok: true },
  { p: "Uranus", g: "♅", a: "18° 05′ Virgo ℞", b: "18° 03′ Virgo ℞", v: "Holds", ok: true },
  { p: "Neptune", g: "♆", a: "22° 10′ Scorpio ℞", b: "22° 10′ Scorpio ℞", v: "Holds", ok: true },
  { p: "Pluto", g: "♇", a: "17° 27′ Virgo ℞", b: "17° 26′ Virgo ℞", v: "Holds", ok: true },
  { p: "Ascendant", g: "AS", a: "9° 19′ Scorpio", b: "9° 52′ Scorpio", v: "Falls: all twelve signs pass in between", ok: false },
];

/* ── The component ───────────────────────────────────────────── */

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
            src={CoverImage}
            alt="Open pocket watch with a blank dial and no hands, between a golden sun and a crescent moon reflected in its glass"
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
              Straight answer · Checklist · Worked example
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-text/85">
              You want your birth chart, the software asks for your time of
              birth, and nobody in the family remembers it.{" "}
              <strong>
                Good news: a chart without a time can still be half read.
                Better news: the time can often be found.
              </strong>
            </p>

            <p className="mt-3 max-w-2xl leading-relaxed text-text/80">
              This article brings together what you rarely find in one place:
              where your birth time is officially recorded in the UK, the US
              and continental Europe, a simple test to see what remains
              readable in your chart, and an example drawn at random, worked
              from start to finish, with what I would say about it and what I
              would refuse to say.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <Pill tone="violet">Countries: UK, US, Europe</Pill>
              <Pill tone="sky">Test: two minutes</Pill>
              <Pill tone="emerald">Data: 21,915 days</Pill>
              <Pill tone="orange">Trap: the Moon</Pill>
            </div>

            <div className="mt-4">
              <TagPillsInline tags={meta.tags} />
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <Stat label="Still readable" value="Planets’ signs and aspects" />
              <Stat label="Gone" value="Ascendant, angles, houses" />
              <Stat label="Where the time is" value="On the full birth record" />
            </div>
          </div>
        </header>

        {/* ── STRAIGHT ANSWER ──────────────────────────────── */}
        <div className="relative overflow-hidden rounded-2xl border border-violet-400/25 bg-gradient-to-br from-violet-500/[0.12] via-indigo-500/[0.06] to-transparent px-6 py-5">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-200/10 blur-2xl"
          />
          <p className="relative text-sm font-semibold uppercase tracking-[0.2em] text-amber-200/80">
            The short answer
          </p>
          <p className="relative mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
            Yes, you can read a <strong>birth chart without a birth
            time</strong>, but only half of it. The date is enough to place
            the Sun, Mercury, Venus, Mars and the slow planets in their signs,
            and to read their aspects. Without the time there is no
            Ascendant, no Midheaven and no houses, and the Moon changes sign
            on 44% of days. Before giving up, check your full birth record: in
            Scotland and on US long-form certificates, the time is there.
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
              The time is on the <strong>Scottish register entry</strong>, the{" "}
              <strong>US long-form certificate</strong> and the full birth
              record in France, Belgium and Spain. In{" "}
              <strong>England and Wales</strong>, usually not.
            </li>
            <li>
              Without a time, you can read the <strong>planets’ signs and
              their aspects</strong>. Not the Ascendant, not the houses, not
              the dominant planet.
            </li>
            <li>
              <strong>The two-midnights test</strong>: calculate the chart for
              00:00 and 23:59. Read only what is identical in both.
            </li>
            <li>
              <strong>One day in two</strong> (50.9% from 1950 to 2009), the
              Moon or a personal planet changes sign.
            </li>
            <li>
              The noon chart and the solar chart are{" "}
              <strong>conventions</strong>: useful, as long as you know what
              they decide for you.
            </li>
          </ul>
        </section>

        {/* ── CONTENTS ─────────────────────────────────────── */}
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

        {/* ── 1. FIND THE TIME ─────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="find-the-time">
          <H2 id="find-the-time">Find the time before giving up on it</H2>

          <p className="text-lg leading-relaxed text-text/85">
            Often the time isn’t lost: it was written down when your birth was
            registered. Scotland records it for every birth, the United States
            puts it on the long-form certificate, and France has required it
            since 1803. England and Wales are the notable exception: their
            certificates show a time only for multiple births. So the right
            first step depends on where you were born.
          </p>

          <p className="leading-relaxed text-text/85">
            Whatever the country, ask for the full record rather than the short
            version. A short certificate or abstract summarises the entry and
            may leave the time out; the long form reproduces it.
          </p>

          <p className="mb-2 font-semibold text-white/90">
            Where your time of birth is recorded, country by country
          </p>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <div
              className="overflow-x-auto"
              role="region"
              aria-label="Where to find your time of birth by country"
              tabIndex={0}
            >
              <table className="min-w-full border-collapse text-sm">
                <caption className="sr-only">
                  For each country, the birth record to ask for, whether it
                  shows the time of birth, and where to request it.
                </caption>
                <thead className="bg-white/[0.04]">
                  <tr className="text-left">
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Country
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Document
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Time of birth?
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Where to ask
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {countries.map((r, i) => (
                    <tr
                      key={r.country}
                      className={`border-t border-white/10 ${i % 2 === 1 ? "bg-white/[0.02]" : ""}`}
                    >
                      <th
                        scope="row"
                        className="px-5 py-4 text-left align-top font-medium text-white"
                      >
                        {r.country}
                      </th>
                      <td className="px-5 py-4 align-top text-text/85">{r.doc}</td>
                      <td className="px-5 py-4 align-top text-text/85">{r.time}</td>
                      <td className="px-5 py-4 align-top text-text/85">{r.where}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <figure className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <Image
              src={RegistreImage}
              alt="Old civil register open on a wooden desk, a magnifying glass resting on a handwritten column, next to a fountain pen and a pocket watch"
              sizes="(max-width: 768px) 100vw, 800px"
              className="h-auto w-full"
            />
            <figcaption className="px-5 py-4 text-center text-xs text-text/50">
              The time often sits in a register: asking for the right document
              is enough to get it back.
            </figcaption>
          </figure>

          <H3>If the record doesn’t have it</H3>
          <p className="leading-relaxed text-text/85">
            That is the usual situation in England and Wales, and it also
            happens for births registered abroad. Three leads remain, from the
            most reliable to the most fragile.
          </p>
          <ul className="list-disc space-y-2 pl-5 leading-relaxed text-text/85">
            <li>
              <strong>Hospital maternity records.</strong> They are not kept
              forever: in the NHS, maternity records are kept for 25 years
              after care has ended, and US rules vary from state to state.
              Beyond that, nothing guarantees they still exist, but asking only
              costs a letter.
            </li>
            <li>
              <strong>Family papers.</strong> Birth announcements, letters, a
              baby book: sometimes a time, often an approximation.
            </li>
            <li>
              <strong>Your parents’ memory.</strong> “In the morning”, “just
              after lunch”: not a time but a window. Write it down; it will
              come in handy later.
            </li>
          </ul>

          <H3>Check the time you have</H3>
          <p className="leading-relaxed text-text/85">
            A birth record gives the legal clock time of the day. Enter it
            exactly as written, with the place of birth: good software applies
            the history of daylight saving time by itself. Don’t convert it by
            hand, which is the commonest source of error. Britain has traps of
            its own: double summer time in the 1940s, and the British Standard
            Time experiment, when clocks stayed an hour ahead of GMT all year
            round, from 27 October 1968 to 31 October 1971. Be wary of round
            times such as 10:00 or 15:30: they may have been rounded.
          </p>
        </section>

        <Divider />

        {/* ── 2. WHAT HOLDS, WHAT FALLS ────────────────────── */}
        <section className="space-y-5" aria-labelledby="what-holds">
          <H2 id="what-holds">What a chart without a birth time still tells you, and what it no longer does</H2>

          <p className="text-lg leading-relaxed text-text/85">
            Without a time, everything that depends on the Earth’s rotation
            disappears: the Ascendant, the Midheaven and the twelve houses turn
            through a full circle in twenty-four hours. Everything that depends
            on the planets’ own motion stays readable, because they move
            slowly: the Sun one degree a day, Pluto a few hundredths.
          </p>

          <p className="leading-relaxed text-text/85">
            In the terms of the <A href="/theme-astral">natal chart</A> page:
            without a time you keep the actors (the planets), their styles (the
            signs) and their conversations (the <A href="/aspects">aspects</A>
            ). You lose the stages they play on: the{" "}
            <A href="/maisons">houses</A>.
          </p>

          <aside className="rounded-2xl border border-amber-400/25 bg-amber-500/[0.06] px-6 py-5">
            <p className="text-lg font-semibold leading-relaxed text-amber-100/90 sm:text-xl">
              Without a birth time, you can read who you are, not where it
              plays out.
            </p>
          </aside>

          <p className="mb-2 font-semibold text-white/90">
            Element by element, what stays reliable without a birth time
          </p>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <div
              className="overflow-x-auto"
              role="region"
              aria-label="Reliability of each chart element without a birth time"
              tabIndex={0}
            >
              <table className="min-w-full border-collapse text-sm">
                <caption className="sr-only">
                  For each element of the birth chart, how reliable it is when
                  the time of birth is unknown, and why.
                </caption>
                <thead className="bg-white/[0.04]">
                  <tr className="text-left">
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Element
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Without a time
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Why
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {holds.map((r, i) => (
                    <tr
                      key={r.el}
                      className={`border-t border-white/10 ${i % 2 === 1 ? "bg-white/[0.02]" : ""}`}
                    >
                      <th
                        scope="row"
                        className="px-5 py-4 text-left align-top font-medium text-white"
                      >
                        {r.el}
                      </th>
                      <td
                        className={`px-5 py-4 align-top font-semibold ${r.ok ? "text-emerald-300" : "text-amber-300"}`}
                      >
                        <span aria-hidden="true">{r.ok ? "✓ " : "✗ "}</span>
                        {r.verdict}
                      </td>
                      <td className="px-5 py-4 align-top text-text/85">{r.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="leading-relaxed text-text/85">
            Astrology is not an experimental science: all the more reason not
            to invent the data that is missing. An honest chart without a time
            says less, but it says nothing false.
          </p>
        </section>

        <Divider />

        {/* ── 3. THE TWO-MIDNIGHTS TEST ────────────────────── */}
        <section className="space-y-5" aria-labelledby="two-midnights">
          <H2 id="two-midnights">The two-midnights test</H2>

          <p className="text-lg leading-relaxed text-text/85">
            Calculate your chart twice for your place of birth: once for 00:00
            and once for 23:59 on the day you were born. Whatever is identical
            in both charts is readable. Whatever differs, a sign or an aspect,
            stays open. The test takes two minutes.
          </p>

          <figure className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <Image
              src={BandeauImage}
              alt="Pocket watch with a blank dial and no hands, to the right of an indigo sky crossed by an arc of golden light"
              sizes="(max-width: 768px) 100vw, 800px"
              className="h-auto w-full"
            />
            <figcaption className="px-5 py-4 text-center text-xs text-text/50">
              Without a time, the dial stays blank: the test reads only what
              the sky keeps unchanged from the first to the last moment of the
              day.
            </figcaption>
          </figure>

          <ol className="list-decimal space-y-2 pl-5 leading-relaxed text-text/85">
            <li>
              Enter your date and place of birth with the time 00:00. Note the
              sign of every planet.
            </li>
            <li>Do it again with 23:59.</li>
            <li>
              Compare line by line. Same sign: settled. Different sign: keep
              both possibilities.
            </li>
            <li>
              Ignore the Ascendant, Midheaven and houses in both charts: they
              are bound to differ, and neither is yours.
            </li>
          </ol>

          <p className="leading-relaxed text-text/85">
            If your family gave you a window, “in the morning” for instance,
            the test tightens: calculate the start and end of the window,
            06:00 and 12:00, instead of the two midnights. The narrower the
            window, the more you can read.
          </p>

          <p className="leading-relaxed text-text/85">
            To see how much the test matters, I ran it over sixty years of
            calendar: every day from 1 January 1950 to 31 December 2009, with
            the Swiss Ephemeris library. The figures barely move whether the
            days are counted in London, Paris, Madrid or New York time.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            <Stat label="Days studied" value="21,915 (1950–2009)" />
            <Stat label="The Moon changes sign" value="43.9% of days" />
            <Stat label="Moon, Sun, Mercury, Venus or Mars" value="50.9% of days" />
          </div>

          <p className="leading-relaxed text-text/85">
            In other words, one person in two who doesn’t know their birth time
            cannot be sure of their Moon sign or of a personal planet’s sign.
            Leave the Moon out and the risk falls to 12.3% of days. The test
            tells you which half you are in.
          </p>
        </section>

        <Divider />

        {/* ── 4. THE EXAMPLE ───────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="example">
          <H2 id="example">An example drawn at random: 25 February 1966</H2>

          <p className="text-lg leading-relaxed text-text/85">
            To show the test on a case I didn’t choose, I drew a date between
            1950 and 2005 and a French city at random: 25 February 1966,
            Clermont-Ferrand, time unknown. It is nobody’s chart in particular;
            it belongs to every child born in the area that day. Chance did its
            job well: it is a hard case.
          </p>

          <p className="mb-2 font-semibold text-white/90">
            The chart of 25 February 1966 at 00:00 and at 23:59
          </p>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <div
              className="overflow-x-auto"
              role="region"
              aria-label="Positions on 25 February 1966 at midnight and at 23:59"
              tabIndex={0}
            >
              <table className="min-w-full border-collapse text-sm">
                <caption className="sr-only">
                  Position of each planet at the start and end of 25 February
                  1966, Paris time, and what stays readable without a time.
                </caption>
                <thead className="bg-white/[0.04]">
                  <tr className="text-left">
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Planet
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      00:00
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      23:59
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Without a time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {positions.map((r, i) => (
                    <tr
                      key={r.p}
                      className={`border-t border-white/10 ${i % 2 === 1 ? "bg-white/[0.02]" : ""}`}
                    >
                      <th
                        scope="row"
                        className="whitespace-nowrap px-5 py-4 text-left align-top font-medium text-white"
                      >
                        <span aria-hidden="true" className="mr-2 text-violet-300/80">
                          {r.g}
                        </span>
                        {r.p}
                      </th>
                      <td className="whitespace-nowrap px-5 py-4 align-top text-text/85">{r.a}</td>
                      <td className="whitespace-nowrap px-5 py-4 align-top text-text/85">{r.b}</td>
                      <td
                        className={`px-5 py-4 align-top font-semibold ${r.ok ? "text-emerald-300" : "text-amber-300"}`}
                      >
                        {r.v}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-xs leading-relaxed text-text/55">
            Positions calculated with Swiss Ephemeris, tropical zodiac, French
            legal time in 1966 (UTC+1, no daylight saving). Ascendant in
            Placidus houses for Clermont-Ferrand. ℞: retrograde.
          </p>

          <p className="leading-relaxed text-text/85">
            Look at the last row: the Ascendant is in Scorpio at both
            midnights, after going round the whole zodiac in between. That is
            why the test rules it out from the start, even when both ends seem
            to agree.
          </p>

          <p className="leading-relaxed text-text/85">
            Eight of the ten bodies stay in their sign. Two fall, and not just
            any two: the Moon moves from Aries into Taurus at 08:53, and Venus,
            which had just slipped back into Capricorn, re-enters Aquarius at
            11:54. The day splits into three possible charts.
          </p>

          <figure className="rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-6">
            <div
              className="overflow-x-auto"
              role="region"
              aria-label="Timeline of 25 February 1966"
              tabIndex={0}
            >
              <svg
                viewBox="0 0 720 222"
                className="h-auto w-full min-w-[640px] text-violet-100"
                role="img"
                aria-label="Hour-by-hour timeline of 25 February 1966. The Moon is in Aries until 08:53, then in Taurus. Venus is in Capricorn until 11:54, then in Aquarius. The Ascendant passes through all twelve signs during the day. The noon line falls six minutes after Venus changes sign."
              >
                <g fontSize="13" dominantBaseline="central">
                  {/* Row labels */}
                  <g fill="currentColor" className="fill-white/70" fontWeight="600">
                    <text x="8" y="43">Moon</text>
                    <text x="8" y="97">Venus</text>
                    <text x="8" y="163">Ascendant</text>
                  </g>

                  {/* Moon */}
                  <rect x="96" y="28" width="225" height="30" rx="4" className="fill-amber-400/25" />
                  <rect x="321" y="28" width="383" height="30" rx="4" className="fill-emerald-400/20" />
                  <g fill="currentColor" className="fill-white/85" textAnchor="middle">
                    <text x="208.5" y="43">Aries</text>
                    <text x="512.5" y="43">Taurus</text>
                  </g>
                  <text x="321" y="70" textAnchor="middle" fontSize="11" fill="currentColor" className="fill-amber-200/80">
                    08:53
                  </text>

                  {/* Venus */}
                  <rect x="96" y="82" width="301.5" height="30" rx="4" className="fill-sky-400/20" />
                  <rect x="397.5" y="82" width="306.5" height="30" rx="4" className="fill-violet-400/30" />
                  <g fill="currentColor" className="fill-white/85" textAnchor="middle">
                    <text x="246.8" y="97">Capricorn</text>
                    <text x="550.8" y="97">Aquarius</text>
                  </g>
                  <text x="393" y="124" textAnchor="end" fontSize="11" fill="currentColor" className="fill-amber-200/80">
                    11:54
                  </text>

                  {/* Ascendant: all twelve signs pass */}
                  <g>
                    <rect x="96.0" y="148" width="46.4" height="30" rx="3" className="fill-violet-400/25" />
                    <rect x="142.4" y="148" width="61.7" height="30" rx="3" className="fill-violet-400/10" />
                    <rect x="204.1" y="148" width="46.9" height="30" rx="3" className="fill-violet-400/25" />
                    <rect x="251.0" y="148" width="33.3" height="30" rx="3" className="fill-violet-400/10" />
                    <rect x="284.3" y="148" width="26.6" height="30" rx="3" className="fill-violet-400/25" />
                    <rect x="310.9" y="148" width="27.0" height="30" rx="3" className="fill-violet-400/10" />
                    <rect x="337.9" y="148" width="33.4" height="30" rx="3" className="fill-violet-400/25" />
                    <rect x="371.3" y="148" width="46.9" height="30" rx="3" className="fill-violet-400/10" />
                    <rect x="418.2" y="148" width="61.2" height="30" rx="3" className="fill-violet-400/25" />
                    <rect x="479.4" y="148" width="67.5" height="30" rx="3" className="fill-violet-400/10" />
                    <rect x="546.9" y="148" width="67.2" height="30" rx="3" className="fill-violet-400/25" />
                    <rect x="614.1" y="148" width="67.5" height="30" rx="3" className="fill-violet-400/10" />
                    <rect x="681.6" y="148" width="22.4" height="30" rx="3" className="fill-violet-400/25" />
                  </g>
                  <g fill="currentColor" className="fill-white/75" textAnchor="middle" fontSize="11">
                    <text x="119.2" y="163">Sco</text>
                    <text x="173.2" y="163">Sag</text>
                    <text x="227.6" y="163">Cap</text>
                    <text x="267.6" y="163">Aqu</text>
                    <text x="297.6" y="163">Pis</text>
                    <text x="324.4" y="163">Ari</text>
                    <text x="354.6" y="163">Tau</text>
                    <text x="385" y="163">Gem</text>
                    <text x="448.8" y="163">Can</text>
                    <text x="513.1" y="163">Leo</text>
                    <text x="580.5" y="163">Vir</text>
                    <text x="647.9" y="163">Lib</text>
                  </g>

                  {/* Noon line */}
                  <line x1="400" y1="18" x2="400" y2="186" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className="stroke-amber-200/80" />
                  <text x="406" y="12" fontSize="11" fill="currentColor" className="fill-amber-200/90">
                    noon
                  </text>

                  {/* Hour axis */}
                  <line x1="96" y1="192" x2="704" y2="192" stroke="currentColor" strokeOpacity="0.3" />
                  <g fill="currentColor" className="fill-white/55" textAnchor="middle" fontSize="11">
                    <text x="96" y="208">00:00</text>
                    <text x="172" y="208">03:00</text>
                    <text x="248" y="208">06:00</text>
                    <text x="324" y="208">09:00</text>
                    <text x="400" y="208">12:00</text>
                    <text x="476" y="208">15:00</text>
                    <text x="552" y="208">18:00</text>
                    <text x="628" y="208">21:00</text>
                    <text x="704" y="208">24:00</text>
                  </g>
                </g>
              </svg>
            </div>
            <figcaption className="mt-4 text-center text-xs leading-relaxed text-text/50">
              The day of 25 February 1966 in Clermont-Ferrand. Three possible
              combinations: Moon in Aries and Venus in Capricorn before 08:53
              (37% of the day), Moon in Taurus and Venus in Capricorn until
              11:54 (12.6%), Moon in Taurus and Venus in Aquarius after that
              (50.4%). The Ascendant passes through all twelve signs.
            </figcaption>
          </figure>

          <div className="grid gap-4 md:grid-cols-2">
            <Box title="What I would say" tone="emerald">
              <p>
                <strong>Four bodies in Pisces</strong>: the Sun, Mercury, Mars
                and Saturn. One sign colours identity, thinking, action and the
                sense of duty. Someone who perceives before analysing, and who
                acts better when carried by a cause than by a plan.
              </p>
              <p>
                <strong>Mars conjunct Saturn</strong>, within three degrees:
                energy that holds itself back, toughens through effort and can
                brood for a long time before acting. Mercury joins them, a
                degree or two from Mars: measured speech, sometimes cutting
                when it comes out.
              </p>
              <p>
                <strong>Jupiter in Gemini square the whole group</strong>: the
                temptation to scatter, too many leads open at once.{" "}
                <strong>Neptune in Scorpio trine</strong> Mercury and Mars:
                imagination feeds action instead of dissolving it.
              </p>
            </Box>

            <Box title="What I would refuse to say" tone="amber">
              <p>
                <strong>The Ascendant.</strong> In Clermont-Ferrand that day it
                stays 63 minutes in Pisces and 163 in Scorpio: no sign gets
                more than an 11.3% chance.
              </p>
              <p>
                <strong>The setting.</strong> Do these four Pisces placements
                speak about work, relationships, family? The houses would say,
                and they are missing.
              </p>
              <p>
                <strong>The dominant planet.</strong> Mars and Saturn on an
                angle or hidden in the twelfth house make two different charts.
                The{" "}
                <A href="/blog/planete-dominante-methode-calcul">
                  seven-weights method
                </A>{" "}
                doesn’t work without a time.
              </p>
              <p>
                <strong>The Moon and Venus.</strong> An Aries Moon discharges
                fast, a Taurus Moon absorbs slowly. A Capricorn{" "}
                <A href="/blog/venus-en-signes-style-amoureux">Venus</A> loves
                by committing, an Aquarius Venus by staying free. Here,
                choosing would be guessing.
              </p>
            </Box>
          </div>

          <Callout tone="warn" title="The slow-planet trap">
            <p>
              This chart also shows Uranus and Pluto conjunct in Virgo, with
              Saturn opposite. Striking, but not personal: Uranus and Pluto are
              within a degree of each other for every child born from late
              January to mid-August 1966, and Saturn opposes them within three
              degrees from early February to mid-March. Neptune is in Scorpio
              from 1957 to 1970.
            </p>
            <p>
              The more a reading leans on the slow planets, the less it
              describes you. Without a time this is the main trap, because
              they are almost all you have left: what makes one day different
              from the next is the Sun, the Moon, Mercury, Venus and Mars.
            </p>
          </Callout>
        </section>

        <Divider />

        {/* ── 5. THE MOON ──────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="moon">
          <H2 id="moon">The Moon: the case that comes down to a coin toss</H2>

          <p className="text-lg leading-relaxed text-text/85">
            The Moon moves 12 to 15 degrees a day. If it stays in the same sign
            from the first to the last moment of your birthday, as it does on
            56% of days, your Moon sign is certain. Only its degree floats, six
            to eight degrees either side of its noon position.
          </p>

          <p className="leading-relaxed text-text/85">
            In that case you can read your{" "}
            <A href="/blog/lune-en-signes-emotions-besoins">Moon sign</A>{" "}
            without reservation. Its aspects need more care: keep only those
            present at both midnights. A square with a 3° orb at noon may well
            not exist in the morning.
          </p>

          <p className="leading-relaxed text-text/85">
            If it changes sign, you have two possible Moons. Read both
            portraits and ask yourself the question from the article on the
            Moon: what do you actually do in the ten minutes after something
            upsets you? The answer often points the way. Still, keep some
            reserve: we readily recognise ourselves a little everywhere, and a
            clue is not proof. If you know a time window, applying the
            two-midnights test to that window sometimes settles the question
            for you.
          </p>
        </section>

        <Divider />

        {/* ── 6. CONVENTIONS ───────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="conventions">
          <H2 id="conventions">
            Noon chart, solar chart: two conventions and what they decide for
            you
          </H2>

          <p className="text-lg leading-relaxed text-text/85">
            Without a time, two conventions dominate. The noon chart places the
            planets at their average position for the day: it limits the error
            on the Moon. The solar chart puts the Sun on the Ascendant and
            derives symbolic houses from it. Both are legitimate, as long as
            you never read them as a real chart.
          </p>

          <H3>The noon chart</H3>
          <p className="leading-relaxed text-text/85">
            It is the most widespread convention, and it is sensible for
            degrees. Its flaw lies elsewhere: it settles open questions without
            telling you. In the example, the noon chart shows the Moon at
            1°&nbsp;35′ Taurus and Venus at 0°&nbsp;00′ Aquarius, having
            entered the sign six minutes earlier. It also shows an Ascendant at
            19° Gemini, which is worthless.
          </p>

          <aside className="rounded-2xl border border-amber-400/25 bg-amber-500/[0.06] px-6 py-5">
            <p className="text-lg font-semibold leading-relaxed text-amber-100/90 sm:text-xl">
              The noon chart looks as if it answers. It has tossed a coin.
            </p>
          </aside>

          <p className="leading-relaxed text-text/85">
            Good practice fits in one sentence: degrees from noon, signs from
            the two-midnights test, and a mental line through the Ascendant and
            the houses.
          </p>

          <H3>The solar chart</H3>
          <p className="leading-relaxed text-text/85">
            Take the Sun’s degree as a notional Ascendant, then count twelve
            30° houses from it. In the example, the Sun at 6° Pisces opens the
            first solar house: the Sun, Mercury, Mars and Saturn fall there,
            Jupiter in the fourth, Uranus and Pluto in the seventh, Neptune in
            the ninth, Venus in the eleventh under both hypotheses. Some prefer
            to cast the chart for sunrise, which comes to almost the same
            thing.
          </p>
          <p className="leading-relaxed text-text/85">
            It is a finer version of the grid behind Sun-sign columns, which
            take your Sun sign as the first house. It is useful for following
            transits symbolically. It does not describe your life, since
            everyone born within a few days has the same solar houses. That is
            one of the reasons why{" "}
            <A href="/blog/pourquoi-votre-horoscope-ne-vous-ressemble-pas">
              your horoscope doesn’t sound like you
            </A>
            .
          </p>
        </section>

        <Divider />

        {/* ── 7. RECTIFICATION ─────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="rectification">
          <H2 id="rectification">Rectification: recovering the time from a life</H2>

          <p className="leading-relaxed text-text/85">
            Rectification reconstructs the time of birth from the person’s
            biography. You start from a window, even a wide one, and a list of
            events dated to the day: marriage, the birth of a child, a parent’s
            death, a move, an accident, a change of career. For each candidate
            time, you calculate the chart’s angles, the Ascendant and the
            Midheaven, the only points that move with the time, then check
            whether the events coincide with{" "}
            <A href="/transits">transits</A>, progressions or directions to
            those angles. The window narrows as you eliminate the times that
            explain the fewest events, until you keep the one that explains the
            most with the fewest exceptions. The result is a working time, to
            be tested against new events, not a registered fact.
          </p>
        </section>

        <Divider />

        {/* ── 8. CHECKLIST ─────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="checklist">
          <H2 id="checklist">The checklist before reading a chart without a birth time</H2>

          <p className="leading-relaxed text-text/85">
            Seven steps, in order. The first two often make the other five
            unnecessary.
          </p>

          <div className="relative overflow-hidden rounded-2xl border border-emerald-400/25 bg-gradient-to-br from-emerald-500/[0.10] via-sky-500/[0.05] to-transparent p-6">
            <ol className="relative list-decimal space-y-3 pl-5 leading-relaxed text-text/90">
              <li>
                <strong>Get the full record.</strong> Long-form certificate in
                the US, register entry in Scotland,{" "}
                <span lang="fr">copie intégrale</span> in France,{" "}
                <span lang="es">certificado literal</span> in Spain. In England
                and Wales, go to hospital and family records.
              </li>
              <li>
                <strong>Enter the time exactly as written</strong>, with the
                place. The software handles daylight saving; you convert
                nothing.
              </li>
              <li>
                <strong>No time?</strong> Write down the window your family
                remembers, however vague.
              </li>
              <li>
                <strong>Run the two-midnights test</strong>, or the window
                test.
              </li>
              <li>
                <strong>Read what holds</strong>: the Sun, the planets’ signs,
                the aspects present at both ends.
              </li>
              <li>
                <strong>Treat the Moon separately</strong>: one sign if the
                test confirms it, two hypotheses otherwise.
              </li>
              <li>
                <strong>Cross out the rest</strong>: Ascendant, Midheaven,
                houses, dominant planet, transits to the angles.
              </li>
            </ol>
          </div>

          <p className="leading-relaxed text-text/85">
            Send this list to the friend who “doesn’t know their time”: unless
            they were born in England or Wales, step 1 often settles it within
            days.
          </p>
        </section>

        {/* ── 9. FAQ ───────────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="faq">
          <H2 id="faq">Frequently asked questions about charts without a birth time</H2>

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
              <Ext href="https://www.gov.uk/government/publications/family-tree-guide-to-birth-certificates/guide-to-birth-certificates-accessible-version">
                Guide to birth certificates
              </Ext>{" "}
              (GOV.UK, General Register Office): time of birth and multiple
              births in England and Wales.
            </li>
            <li>
              <Ext href="https://www.scotlandspeople.gov.uk/guides/record-guides/statutory-register-births">
                Statutory register of births
              </Ext>{" "}
              (ScotlandsPeople): time recorded on every Scottish birth entry.
            </li>
            <li>
              <Ext href="https://www.cdc.gov/nchs/data/dvs/BIRTH1.pdf">
                U.S. Standard Certificate of Live Birth
              </Ext>{" "}
              (CDC, National Center for Health Statistics): item 2, time of
              birth.
            </li>
            <li>
              <Ext href="https://www.themdu.com/guidance-and-advice/latest-updates-and-advice/updated-guidance-on-medical-records-management-and-retention">
                Medical records retention
              </Ext>{" "}
              (MDU, on the NHS Records Management Code of Practice 2021).
            </li>
            <li>
              <Ext href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043896203">
                <span lang="fr">Code civil</span>, article 57
              </Ext>{" "}
              (Légifrance) and{" "}
              <Ext href="https://www.boe.es/buscar/act.php?id=BOE-A-2011-12628">
                <span lang="es">Ley 20/2011 del Registro Civil</span>, article 44
              </Ext>{" "}
              (BOE): time of birth on French and Spanish birth records.
            </li>
            <li>
              Positions and statistics: the author’s calculations with Swiss
              Ephemeris (Astrodienst), every day from 1 January 1950 to 31
              December 2009.
            </li>
          </ul>
        </section>

        {/* ── CTA / INTERNAL LINKS ─────────────────────────── */}
        <section className="rounded-2xl border border-white/10 bg-black/20 p-6">
          <p className="text-sm text-text/60">Keep reading</p>
          <div className="mt-3 space-y-3 leading-relaxed text-text/85">
            <p>
              Once the time is found, the whole chart opens up: the{" "}
              <A href="/theme-astral">natal chart</A> page explains what it
              contains, and{" "}
              <A href="/blog/comprendre-signe-astrologique-ascendant-12-exemples">
                Sun and Ascendant in twelve examples
              </A>{" "}
              shows what the Ascendant changes in a reading.
            </p>
            <p>
              If you are starting out, begin with{" "}
              <A href="/blog/qu-est-ce-qu-un-theme-astral">
                what a natal chart is
              </A>
              , then the <A href="/maisons">twelve houses</A>, the part of the
              chart that only a birth time opens up. The{" "}
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
