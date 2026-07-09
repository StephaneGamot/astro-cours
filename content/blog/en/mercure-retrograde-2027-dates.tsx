import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { MERCURY_RX, NEXT_RX_2028 } from "../data/ephemerides-2026-2027";

export const meta = {
  slug: "mercure-retrograde-2027-dates",
  title: "Mercury Retrograde 2027: Exact Dates and Signs",
  description:
    "The 3 Mercury retrogrades of 2027: precise dates (Paris time), signs crossed, pre/post shadows and concrete advice — without pointless panic.",
  date: "2026-07-07",
  tags: ["Mercure", "rétrograde", "transits", "2027", "calendrier", "débutant"],
  readingLevel: "débutant" as const,
  cover: "/images/blog/mercurien2.webp",
};

const SIGNS = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-6 mt-12 flex items-center font-serif text-3xl font-light text-white md:text-4xl">
      <span className="mr-4 block h-px w-8 bg-gradient-to-r from-sky-500/50 to-transparent" aria-hidden="true" />
      {children}
    </h2>
  );
}

function P({ children }: { children: ReactNode }) {
  return <p className="mb-4 leading-relaxed text-text/85">{children}</p>;
}

function Callout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="my-6 rounded-2xl border border-sky-400/20 bg-sky-500/[0.06] p-5">
      <p className="mb-2 text-sm font-semibold text-sky-200">📌 {title}</p>
      <div className="space-y-2 leading-relaxed text-text/85">{children}</div>
    </div>
  );
}

const fmt = (d: string) =>
  new Date(`${d}T12:00:00Z`).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" });

function RxTable() {
  const rows = MERCURY_RX.filter((r) => r.start.startsWith("2027"));
  return (
    <div className="my-6 overflow-x-auto rounded-2xl border border-white/10">
      <table className="w-full min-w-[560px] text-left text-sm">
        <thead className="bg-white/5 text-text/70">
          <tr>
            <th className="p-3">Retrograde from</th>
            <th className="p-3">until</th>
            <th className="p-3">Zodiacal path</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.start} className="border-t border-white/10 text-text/85">
              <td className="p-3">
                <strong>{fmt(r.start)}</strong> at {r.startTime} (Paris time)
              </td>
              <td className="p-3">
                <strong>{fmt(r.end)}</strong> at {r.endTime}
              </td>
              <td className="p-3">
                {SIGNS[r.startSignIndex]} {r.startDegree.toFixed(0)}° → {SIGNS[r.endSignIndex]}{" "}
                {r.endDegree.toFixed(0)}°
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function MercuryRetrograde2027Post() {
  const rx2026 = MERCURY_RX[0];
  return (
    <article>
      <P>
        About three times a year, <Link href="/planetes/mercure">Mercury</Link> appears to move
        backwards through the zodiac — a mere optical effect seen from Earth, yet an appointment
        every astrology enthusiast watches. Here are the <strong>exact dates of Mercury&apos;s
        2027 retrogrades</strong>, computed in Paris time, with the signs crossed and, above all,
        the intelligent way to live them.
      </P>
      <Callout title="Still in 2026">
        <p>
          Before 2027, one last retrograde runs from <strong>{fmt(rx2026.start)}</strong> to{" "}
          <strong>{fmt(rx2026.end)}</strong>, entirely in {SIGNS[rx2026.startSignIndex]} (
          {rx2026.startDegree.toFixed(0)}° → {rx2026.endDegree.toFixed(0)}°).
        </p>
      </Callout>

      <H2>Why does Mercury “move backwards”? The mechanics</H2>
      <P>
        No planet actually reverses: retrogradation is an illusion of perspective. Mercury
        orbits the Sun in 88 days, the Earth in 365. About every 116 days (its synodic cycle),
        Mercury overtakes us “on the inside” — like a faster car in the next lane which, at the
        moment of overtaking, <em>seems</em> to move backwards against the landscape. Seen from
        Earth, its position projected onto the zodiac slows down, stops (the{" "}
        <strong>station</strong>), backs up for about three weeks, stops again, then resumes
        forward motion. That is why there are three retrogrades a year (sometimes four), and why
        they always occur when Mercury passes <em>between</em> the Earth and the Sun — never
        elsewhere.
      </P>
      <P>
        A detail that matters for interpretation: at its stations, Mercury is nearly motionless
        in the zodiac. In astrology, a stationary planet is considered <strong>more
        powerful</strong> — its symbolism saturates the degree it occupies. The station days (the
        dates in the table below) are therefore the most sensitive moments of each period, far
        more than the middle of the retrograde.
      </P>

      <H2>The 3 Mercury retrogrades of 2027</H2>
      <RxTable />
      <P>
        Notable fact of 2027: all three periods begin in <strong>water signs</strong> (Pisces,
        Cancer, Scorpio), each backing into the previous air or water sign. The collective mind
        thus stumbles less on pure logistics than on what is said <em>between</em> the lines:
        poorly worded emotions, resurfacing memories, conversations to resume with more tact.
      </P>

      <H2>The reading key: the loop in YOUR chart</H2>
      <P>
        Here is what date lists never tell you: a Mercury retrograde does not mean the same
        thing for everyone. What matters is the <strong>zone of the zodiac swept three
        times</strong> (forward, backward, forward again) — the “loop” — and where it falls in
        your chart. The three-step method:
      </P>
      <P>
        <strong>1. Locate the house.</strong> Take the degrees of the loop (e.g. 21° Aquarius →
        6° Pisces for February 2027) and find which <Link href="/maisons">house</Link> of your{" "}
        <Link href="/theme-astral">birth chart</Link> contains those degrees. In the 3rd house,
        the retrograde will be about contracts and paperwork; in the 7th, couple conversations to
        resume; in the 10th, a professional file back on the table. The house, not the sign,
        gives the concrete domain.
      </P>
      <P>
        <strong>2. Look for exact contacts.</strong> If the loop passes over one of your natal
        planets (within 2-3°), Mercury “visits” it three times: the corresponding topic also
        returns three times — often as problem / re-examination / resolution. A square to your
        natal Venus? Three episodes of the same emotional conversation. Nothing on your sensitive
        points? The period will probably be uneventful for you.
      </P>
      <P>
        <strong>3. Check your natal Mercury.</strong> About one person in five was born with
        Mercury retrograde. For them, these periods are often more comfortable than for others:
        the mind works “in its own direction”. Our portrait of the{" "}
        <Link href="/blog/mercurian">Mercurian</Link> explores this configuration.
      </P>

      <H2>February – March: Pisces → Aquarius</H2>
      <P>
        From <strong>February 9 to March 3, 2027</strong>, Mercury retrogrades from Pisces (6°)
        to Aquarius (21°). An ideal phase to resume a creative project or a file left vague, to
        rephrase what was misunderstood, to clear up a misunderstanding among friends (Aquarius
        register). To avoid: signing in the fog — retrograde Pisces excels at making contracts
        poetic and imprecise.
      </P>

      <P>
        Reading example: if 21° Aquarius – 6° Pisces falls in your 2nd house, expect to re-check
        an invoice, renegotiate a subscription, recover a forgotten sum. In the 9th house, a
        long-distance trip or a training course gets rescheduled. Same Mercurial symbolism,
        totally different terrains.
      </P>

      <H2>June – July: Cancer → Gemini</H2>
      <P>
        From <strong>June 10 to July 4, 2027</strong>, Mercury backs from Cancer (6°) into Gemini
        (28°) — its own domicile. Family conversations to reopen, memories and archives to sort,
        real-estate files to double-check (Cancer register). The return into Gemini at the end of
        the period puts the focus back on journeys, emails and double bookings: read everything
        twice.
      </P>

      <H2>October: Scorpio → Libra</H2>
      <P>
        From <strong>October 7 to 28, 2027</strong>, Mercury retrogrades from Scorpio (5°) to
        Libra (19°). Secrets resurfacing, joint accounts to re-examine, negotiations and
        contracts to rebalance (Libra register). It is the most “strategic” retrograde of the
        year: excellent for renegotiating, risky for settling a conflict in the heat of the
        moment.
      </P>

      <H2>Pre and post-retrograde shadows</H2>
      <P>
        The real turbulence zone exceeds the official dates: Mercury first crosses in forward
        motion the degrees it will retrograde (<em>pre-shadow</em>, ~2 weeks before), then crosses
        them a third time after its direct station (<em>post-shadow</em>, ~2 weeks after). If a
        sensitive file derails just “before the dates”, that is often where it plays out. Our
        course on <Link href="/retrogrades">retrogrades</Link> details this mechanism.
      </P>

      <H2>What Mercury retrograde does NOT mean</H2>
      <P>
        No, the world does not stop three times a year. Mercury retrograde forbids neither
        signing, nor travelling, nor launching a project — millions of contracts are signed
        perfectly well during these periods. Symbolically, the Mercurial function turns inward:
        it is a time of <strong>re-</strong> (reread, revise, renegotiate, reconnect, resume)
        rather than of first times. In a <Link href="/theme-astral">birth chart</Link>, everything
        depends anyway on the exact <Link href="/transits">transits</Link> to YOUR planets: a
        retrograde that touches no sensitive point of your chart will go unnoticed.
      </P>

      <Callout title="Retrograde-period checklist">
        <p>Back up your files and confirm appointments in writing.</p>
        <p>Read contracts twice — and accept that deadlines slip.</p>
        <p>Enjoy the “re-” climate: reconnect, revise, finish the unfinished.</p>
        <p>Dramatize nothing: observe, note, check against your own chart.</p>
      </Callout>

      <P>
        Next deadline after 2027: Mercury stations retrograde again on{" "}
        <strong>{fmt(NEXT_RX_2028.start)}</strong> in {SIGNS[NEXT_RX_2028.signIndex]}. To
        understand how a strongly Mercurial profile lives these phases, read our portrait of the{" "}
        <Link href="/blog/mercurian">Mercurian</Link>.
      </P>
    </article>
  );
}
