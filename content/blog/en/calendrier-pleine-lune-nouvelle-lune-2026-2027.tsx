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

      <H2>The mechanics: why 29.5 days</H2>
      <P>
        A lunation is the complete cycle of phases: 29 days, 12 hours and 44 minutes on average
        (the “synodic month”). The <strong>new moon</strong> is the exact moment when the Moon
        reaches <strong>conjunction</strong> with the Sun — same degree of the zodiac, lit face
        turned towards the Sun, hence invisible to us. The <strong>full moon</strong> is the
        exact <strong>opposition</strong>: Earth between the two bodies, disc fully lit. These
        are not “days” but precise instants — hence the to-the-minute times in our tables. And
        since the Moon advances about 12° per day, the sign shown is that of the exact instant: a
        few hours later, it may already have changed sign.
      </P>
      <P>
        Symbolically, astrology reads this cycle as a breath: the conjunction fuses will (Sun)
        and need (Moon) — you sow without yet seeing; the opposition puts them face to face —
        what was sown becomes visible, gets harvested or corrected. Our course on{" "}
        <Link href="/blog/full-moon-new-moon-cycles-astrology">lunar cycles</Link> develops the
        eight intermediate phases.
      </P>

      <H2>New moon, full moon: what it changes concretely</H2>
      <P>
        The <strong>new moon</strong> opens the cycle. Low energy, turned inward: a bad time to
        launch with fanfare, an excellent time to decide in silence. The sign of the conjunction
        sets the tone: a new moon in Virgo (August 31, 2027) favours decisions about
        organization, health, method; in Scorpio (October 29, 2027), deep decisions — cutting,
        cleaning up, transforming.
      </P>
      <P>
        The <strong>full moon</strong> culminates the cycle opened by the new moon of the same
        sign six months earlier — that is the real pair to watch. The Taurus full moon of
        November 14, 2027 lights up what was sown at the Taurus new moon of May 6, 2027.
        Emotionally, the Sun-Moon opposition stretches the thread between two poles of your life
        (self/other, work/home depending on the sign axis): hence the restless nights and
        impulsive decisions of full moons — culminate, celebrate, finish, but avoid deciding in
        the heat of the moment.
      </P>

      <H2>Finding the activated house in your chart: the method</H2>
      <P>
        The sign gives the general mood, but it is the <Link href="/maisons">house</Link> of your{" "}
        <Link href="/theme-astral">birth chart</Link> that says <em>where it happens for you</em>.
        The method: take the degree of the lunation from the table (e.g. full moon of November
        14, 2027 at 21° Taurus), open your chart, find between which cusps 21° Taurus falls. Your
        2nd house: a financial culmination — money coming in, an invoice, a realization about
        your resources. 7th house: a couple matter reaches maturity. 12th house: fatigue, need
        for withdrawal, end of an inner cycle. The same full moon tells twelve different stories
        depending on the chart — which is why generic horoscopes so often miss.
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

      <H2>Why eclipses in some months and not others?</H2>
      <P>
        There is a new moon every month, but a solar eclipse only about twice a year. The
        reason: the Moon&apos;s orbit is tilted 5° from the Earth&apos;s. Most of the time, the
        conjunction happens “above” or “below” the Sun — no perfect alignment, no eclipse. Twice
        a year, the lunation occurs near the <Link href="/noeuds-lunaires">lunar nodes</Link> —
        the points where the two orbits cross — and there the alignment is real: a new moon near
        a node = solar eclipse, a full moon near a node = lunar eclipse. That is why eclipses
        come in pairs two weeks apart (look at August 2026 in the table) and return in “seasons”
        roughly every six months.
      </P>
      <P>
        In interpretation, an eclipse is a lunation with a high coefficient: because it involves
        the nodal axis — the evolutionary axis of the chart — its effects are read as unfolding
        over six months to a year, with sharper turning points than usual (beginnings, endings,
        revelations). A counter-intuitive practical tip: you do not “ritualize” an eclipse like
        an ordinary new moon. The energy is considered unstable — observe, note what gets
        triggered, and let decisions settle for a few days.
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

      <H2>What each lunation sign activates</H2>
      <P>
        A mini-guide for reading the tables above. <strong>Aries</strong>: impulses, quick
        decisions, whatever requires courage. <strong>Taurus</strong>: money, body, what must
        last. <strong>Gemini</strong>: exchanges, contracts, siblings, information.{" "}
        <strong>Cancer</strong>: family, home, memory, emotional security. <strong>Leo</strong>:
        creation, visibility, children, pride. <strong>Virgo</strong>: daily work, health,
        sorting and method. <strong>Libra</strong>: partnership, contracts, balances to
        renegotiate. <strong>Scorpio</strong>: shared finances, intimacy, what must end.{" "}
        <strong>Sagittarius</strong>: studies, travel, meaning, horizons.{" "}
        <strong>Capricorn</strong>: career, structures, responsibilities.{" "}
        <strong>Aquarius</strong>: friendships, collective projects, freedoms.{" "}
        <strong>Pisces</strong>: rest, spirituality, cycle closures. Cross this register with the
        house of your chart (method above) to get a truly personal reading.
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
