import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { LUNATIONS_2026_2027, type Lunation } from "../data/ephemerides-2026-2027";

export const meta = {
  slug: "calendrier-pleine-lune-nouvelle-lune-2026-2027",
  title: "Lunar Calendar 2026-2027: Full Moons and New Moons",
  description:
    "Every full moon and new moon from July 2026 to December 2027: dates, times (Paris), signs, eclipses — and how to use each lunation.",
  date: "2026-07-07",
  tags: ["Lune", "pleine lune", "nouvelle lune", "calendrier", "cycles", "éclipses", "débutant"],
  readingLevel: "débutant" as const,
  cover: "/images/blog/lune-cycles.webp",
};

const SIGNS = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];

const ECLIPSE_LABEL: Record<NonNullable<Lunation["eclipse"]>, string> = {
  "solar-total": "Total solar eclipse",
  "solar-annular": "Annular solar eclipse",
  "lunar-partial": "Partial lunar eclipse",
  "lunar-penumbral": "Penumbral lunar eclipse",
};

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-6 mt-12 flex items-center font-serif text-3xl font-light text-white md:text-4xl">
      <span className="mr-4 block h-px w-8 bg-gradient-to-r from-violet-500/50 to-transparent" aria-hidden="true" />
      {children}
    </h2>
  );
}

function P({ children }: { children: ReactNode }) {
  return <p className="mb-4 leading-relaxed text-text/85">{children}</p>;
}

const fmt = (d: string) =>
  new Date(`${d}T12:00:00Z`).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" });

function LunationTable({ year }: { year: "2026" | "2027" }) {
  const rows = LUNATIONS_2026_2027.filter((l) => l.date.startsWith(year));
  return (
    <div className="my-6 overflow-x-auto rounded-2xl border border-white/10">
      <table className="w-full min-w-[560px] text-left text-sm">
        <thead className="bg-white/5 text-text/70">
          <tr>
            <th className="p-3">Date (Paris time)</th>
            <th className="p-3">Lunation</th>
            <th className="p-3">Sign</th>
            <th className="p-3">Special</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((l) => (
            <tr key={`${l.date}${l.type}`} className="border-t border-white/10 text-text/85">
              <td className="p-3">
                <strong>{fmt(l.date)}</strong> at {l.time}
              </td>
              <td className="p-3">{l.type === "NL" ? "🌑 New moon" : "🌕 Full moon"}</td>
              <td className="p-3">
                {SIGNS[l.signIndex]} {l.degree.toFixed(0)}°
              </td>
              <td className="p-3">{l.eclipse ? <strong className="text-amber-300">{ECLIPSE_LABEL[l.eclipse]}</strong> : "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function LunarCalendar20262027Post() {
  return (
    <article>
      <P>
        Here is the <strong>complete calendar of lunations</strong> from July 2026 to December
        2027: every new moon and full moon, with the exact time (Paris time), the sign occupied
        by the <Link href="/planetes/lune">Moon</Link> and the eclipses. Positions are computed
        from astronomical ephemerides — not copied from an approximate almanac.
      </P>

      <H2>How to use this calendar</H2>
      <P>
        The logic of the cycle is simple, and we detail it in our course on{" "}
        <Link href="/blog/full-moon-new-moon-cycles-astrology">lunar cycles</Link>: the{" "}
        <strong>new moon</strong> (Sun-Moon conjunction) opens the cycle — the moment for
        intentions and quiet beginnings; the <strong>full moon</strong> (Sun-Moon opposition)
        culminates it — a moment of visibility, assessment and release. The sign of the lunation
        colours the domain: a new moon in Virgo invites you to reorganize daily life, a full moon
        in Aries bursts open whatever was stalling. For personal use, find the{" "}
        <Link href="/maisons">house</Link> of your <Link href="/theme-astral">birth chart</Link>{" "}
        where the lunation falls: that is where the cycle concretely plays out for you.
      </P>

      <H2>Lunations from July to December 2026</H2>
      <LunationTable year="2026" />
      <P>
        The great summer appointment: the <strong>total solar eclipse of August 12, 2026</strong>,
        on the new moon in Leo — visible notably from Iceland and Spain. Eclipses are amplified
        lunations: their symbolic effects unfold over several months, especially if they touch a
        sensitive point of your chart. It is followed by a partial lunar eclipse on August 28, on
        the full moon in Pisces.
      </P>

      <H2>Lunations of 2027</H2>
      <LunationTable year="2027" />
      <P>
        2027 is a year of remarkable eclipses: the annular one of <strong>February 6</strong> (new
        moon in Aquarius), then above all the <strong>total solar eclipse of August 2, 2027</strong>{" "}
        — one of the longest of the century, visible from southern Spain to North Africa — on the
        new moon in Leo, at the same place of the zodiac as in August 2026: a true “chapter 2”
        for people strongly marked in Leo.
      </P>

      <H2>Three concrete uses</H2>
      <P>
        <strong>Intention ritual (new moon).</strong> Within 48 hours after the conjunction,
        formulate one to three intentions linked to the activated sign and house — written,
        dated, re-readable at the corresponding full moon six months later.
      </P>
      <P>
        <strong>Mid-cycle assessment (full moon).</strong> The full moon lights up what has
        matured since the new moon of the same sign: the moment to finalize, celebrate or close —
        not to open a new construction site.
      </P>
      <P>
        <strong>Transit tracking.</strong> A lunation falling within 3° of one of your natal
        planets is a real trigger: our course on <Link href="/transits">transits</Link> explains
        how to prioritize these contacts, and the portrait of the{" "}
        <Link href="/blog/lunarian">Lunarian</Link> describes those for whom the Moon sets the
        tempo of the whole year.
      </P>
    </article>
  );
}
