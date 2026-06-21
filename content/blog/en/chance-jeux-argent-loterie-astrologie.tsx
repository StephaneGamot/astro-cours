import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import { AUTHOR_PERSON, PUBLISHER_ORG, SITE_URL } from "@/lib/seo";
import ChanceImage from "@/public/images/blog/chance-jeux-argent-loterie.webp";

export const meta = {
  slug: "chance-jeux-argent-loterie-astrologie",
  title: "Luck in Gambling in Astrology: Houses & Jupiter",
  description:
    "Lottery, betting, gambling: what astrology says (and doesn't say) about luck. House 5, House 2, Jupiter, Part of Fortune and transits. Guide & responsible gaming.",
  date: "2026-06-13",
  tags: [
    "chance",
    "jeux d'argent",
    "loterie",
    "maison V",
    "maison II",
    "Jupiter",
    "Part de Fortune",
    "spéculation",
    "transits",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/chance-jeux-argent-loterie.webp",
};

// -- PREMIUM INTERFACE COMPONENTS --

function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" aria-hidden="true" />
      {children}
    </span>
  );
}

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-6 flex items-center font-serif text-3xl font-light text-white md:text-4xl">
      <span className="mr-4 block h-px w-8 bg-gradient-to-r from-amber-500/50 to-transparent" aria-hidden="true" />
      {children}
    </h2>
  );
}

function H3({ children }: { children: ReactNode }) {
  return <h3 className="font-serif text-2xl font-medium text-white/90">{children}</h3>;
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
  const styles = {
    warn: {
      box: "border-amber-500/30 bg-amber-500/10 shadow-[0_0_30px_rgba(245,158,11,0.05)]",
      icon: "text-amber-400",
      svg: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
    },
    ok: {
      box: "border-emerald-500/30 bg-emerald-500/10 shadow-[0_0_30px_rgba(16,185,129,0.05)]",
      icon: "text-emerald-400",
      svg: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    note: {
      box: "border-sky-500/30 bg-sky-500/10 shadow-[0_0_30px_rgba(56,189,248,0.05)]",
      icon: "text-sky-400",
      svg: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  };

  const current = styles[tone];

  return (
    <aside aria-label={title} className={`relative overflow-hidden rounded-2xl border p-6 backdrop-blur-md ${current.box}`}>
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-current opacity-30 to-transparent" />
      <div className={`mb-3 flex items-center gap-3 font-serif text-lg font-medium ${current.icon}`}>
        {current.svg}
        <span>{title}</span>
      </div>
      <div className="space-y-3 text-sm leading-relaxed text-white/80 md:text-base">{children}</div>
    </aside>
  );
}

function Card({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-md transition-colors hover:bg-white/[0.05]">
      <div>
        <H3>{title}</H3>
        {subtitle && <p className="mt-2 text-sm text-white/50">{subtitle}</p>}
      </div>
      <div className="mt-5 space-y-4 text-sm leading-relaxed text-white/80 md:text-base">{children}</div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-sm transition-all hover:border-white/20">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <p className="text-xs uppercase tracking-widest text-white/50">{label}</p>
      <p className="mt-2 font-serif text-xl text-white/90">{value}</p>
    </div>
  );
}

function Divider() {
  return <hr className="my-12 border-t border-white/10" aria-hidden="true" />;
}

function TableRow({
  title,
  effect,
  reading,
}: {
  title: string;
  effect: string;
  reading: string;
}) {
  return (
    <div className="group grid grid-cols-1 border-b border-white/10 transition-colors hover:bg-white/[0.02] md:grid-cols-3">
      <div className="p-4 font-serif text-lg text-amber-200/90">{title}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{effect}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{reading}</div>
    </div>
  );
}

export default function ChanceJeuxArgentLoteriePost() {
  const glow = getGlowFromTags(meta.tags);

  return (
    <article className="mx-auto max-w-4xl space-y-12 pb-20 pt-8 text-white">
      {/* STRUCTURED DATA (SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: meta.title,
              description: meta.description,
              image: `${SITE_URL}${meta.cover}`,
              datePublished: `${meta.date}T12:00:00Z`,
              dateModified: `${meta.date}T12:00:00Z`,
              author: AUTHOR_PERSON,
              publisher: PUBLISHER_ORG,
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `${SITE_URL}/blog/${meta.slug}`,
              },
              inLanguage: "en",
              keywords: meta.tags.join(", "),
              articleSection: "Astrology",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Which house should you look at for luck in gambling in astrology?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "House 5 governs gaming, betting and speculation. It is read together with House 2 (winnings) and House 8 (unexpected money), Jupiter, Venus and the Part of Fortune.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can astrology help you win the lottery?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. Astrology does not predict winning numbers and guarantees no winnings. Gambling is based on chance. At best, the chart describes a symbolic relationship to risk, not an outcome.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does Jupiter make you lucky at gambling?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Jupiter symbolizes expansion, optimism and opportunities. Well placed, it describes a confident and generous attitude, but it does not ensure winnings: it is a symbolic clue, not a promise of victory.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      {/* COVER IMAGE */}
      <div className="relative w-full aspect-[7/3] rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(251,191,36,0.1)] bg-[#0f0f13] flex items-center justify-center">
        <Image src={ChanceImage} alt="Luck in gambling in astrology: Jupiter, dice and gold coins on a cosmic background" fill sizes="100vw" priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent z-10 pointer-events-none" />
      </div>

      {/* HERO */}
      <header className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
        <div
          className={`pointer-events-none absolute -right-24 -top-24 h-[500px] w-[500px] rounded-full opacity-30 mix-blend-screen blur-[100px] ${glow}`}
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-[80px]" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/50" aria-hidden="true" />

        <div className="relative z-10">
          <Kicker>Luck • House 5 • Jupiter • Speculation</Kicker>

          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="font-serif text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl md:max-w-3xl">
              Lottery, betting, gambling: what your chart really reveals
            </h2>

            <div className="flex flex-wrap gap-3 text-sm text-white/70">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">Intermediate read</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">Responsible gaming</span>
            </div>
          </div>

          <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            &laquo; Am I lucky at gambling? &raquo; is one of the questions most often asked of astrology. The honest answer comes in two parts:
            the chart describes a <strong className="font-medium text-amber-200">relationship to chance, risk and speculation</strong> — through the{" "}
            <strong className="font-medium text-white">5th house</strong>, the <strong className="font-medium text-white">2nd house</strong>,{" "}
            <strong className="font-medium text-white">Jupiter</strong> and the <strong className="font-medium text-white">Part of Fortune</strong> — but it does not
            predict any winning number and guarantees no winnings. Here is how to read these clues with method, and with clear eyes.
          </p>

          <div className="mt-8 pt-6 border-t border-white/5">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      {/* RESPONSIBLE GAMING WARNING */}
      <Callout tone="warn" title="Read this first: gambling remains chance">
        <p>
          Gambling (lottery, scratch cards, betting, casino) is based on <strong className="text-white">chance</strong>. No
          astrological technique can predict a draw or &laquo; force &raquo; a win. This article describes a{" "}
          <strong className="text-white">symbolism</strong>, not a method to make money.
        </p>
        <p>
          Only gamble with money you can afford to lose, set yourself limits, and never try to &laquo; win it back &raquo;. If gambling
          becomes a source of stress, debt or irrepressible cravings, that is a signal to take seriously. In France,{" "}
          <strong className="text-white">Joueurs Info Service (09 74 75 13 13)</strong> offers free, anonymous and confidential help.
        </p>
      </Callout>

      {/* QUICK STATS */}
      <section className="grid gap-4 sm:grid-cols-3" aria-label="Key points of the article">
        <Stat label="Key house" value="House 5" />
        <Stat label="Planet of luck" value="Jupiter" />
        <Stat label="What it is not" value="A prediction of winnings" />
      </section>

      {/* DEFINITION BOX */}
      <aside className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-6 leading-relaxed text-white/85">
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-amber-400">Definition</p>
        <p>
          In astrology, <strong>luck in gambling</strong> is observed through <Link href="/maisons/maison-5">House 5</Link> (gaming, betting,
          speculation, risk-taking), <Link href="/maisons/maison-2">House 2</Link> (winnings), the{" "}
          <Link href="/maisons/maison-8">8th house</Link> (unexpected money), <Link href="/planetes/jupiter">Jupiter</Link> and the Part of
          Fortune. These clues describe an <strong>attitude toward risk</strong> — not a guaranteed outcome.
        </p>
      </aside>

      {/* INTRO */}
      <p className="text-base leading-relaxed text-white/80 md:text-lg">
        Before looking for &laquo; luck &raquo;, you need to understand what astrology can actually shed light on: your{" "}
        <strong>gambler's temperament</strong>, your relationship to risk, the areas where you tend to dare or to get burned, and the{" "}
        <strong>periods</strong> when the speculative urge is stronger. It is a psychological and symbolic reading, always to be weighed against
        common sense.
      </p>

      {/* 1. HOUSE 5 */}
      <section className="space-y-6">
        <H2>1) The 5th house: the playing field of gaming and betting</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          The <strong className="font-medium text-amber-200">5th house</strong> governs everything we undertake &laquo; just to see &raquo;: gaming,
          betting, speculation, risky impulses of the heart. It is the house of pleasure and creative risk-taking — the one where we place our bets,
          both literally and figuratively.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="What the 5th house reveals" subtitle="The spontaneous relationship to risk and gaming.">
            <p>
              Its cusp sign and its ruler show <strong className="text-white">how</strong> you play: cautiously, on impulse,
              superstitiously, by calculation or out of a need for thrills. A 5th house supported by Jupiter or Venus describes an optimistic gambler;
              strained by Saturn, a more fearful or more disciplined relationship.
            </p>
          </Card>

          <Card title="The ruler of the 5th house" subtitle="Where it sits orients the playing field.">
            <p>
              The ruler of the 5th in House 2 can link gaming to personal money; in the 8th, to sudden gains (or losses); in the 12th, to a
              risk of excess or self-sabotage. The <strong className="text-white">house where it lands</strong> tells the story.
            </p>
          </Card>
        </div>

        <Callout tone="note" title="Reading reflex">
          <p>
            The 5th house describes a <strong className="text-white">style of play</strong>, not a guarantee of winning. A fine placement does not announce
            the jackpot: it describes an attitude, a frequency, a motivation.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* 2. HOUSES 2 AND 8 */}
      <section className="space-y-6">
        <H2>2) Houses 2 and 8: where the money comes in</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Gaming happens in the 5th, but money lodges elsewhere. <Link href="/maisons/maison-2">House 2</Link> concerns what we earn and
          keep through ourselves; <Link href="/maisons/maison-8">House 8</Link> concerns <em>other people's</em> money and{" "}
          <strong className="font-medium text-amber-200">unexpected</strong> sums: inheritances, refunds… and, symbolically, sudden winnings.
        </p>

        <section aria-label="Table of money houses" className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm">
          <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
            <div className="p-5 font-serif text-lg font-medium text-white/90">House</div>
            <div className="p-5 font-serif text-lg font-medium text-white/90">Domain</div>
            <div className="p-5 font-serif text-lg font-medium text-white/90">&laquo; Gaming &raquo; reading</div>
          </div>

          <TableRow title="House 2" effect="Money earned & kept" reading="Ability to turn a win into a lasting resource" />
          <TableRow title="House 5" effect="Gaming, betting, speculation" reading="Attitude and frequency of risk-taking" />
          <TableRow title="House 8" effect="Sudden & others' money" reading="Unexpected gains… but also brutal losses" />
        </section>

        <Callout tone="warn" title="The flip side of the 8th">
          <p>
            The 8th house governs <strong className="text-white">sudden gains</strong> just as much as <strong className="text-white">brutal
            losses</strong> and debts. That is exactly why gaming is ambivalent here: the same door lets money in and out.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* 3. JUPITER AND VENUS */}
      <section className="space-y-6">
        <H2>3) Jupiter and Venus: the &laquo; benefics &raquo;</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          <Link href="/planetes/jupiter">Jupiter</Link> is the planet of <strong className="font-medium text-amber-200">expansion,
          optimism and opportunities</strong>. Tradition calls it the &laquo; great benefic &raquo;. Venus, the &laquo; lesser benefic &raquo;, softens and
          attracts. Connected to the 5th, the 2nd or the Part of Fortune, these planets describe a favorable tone — a confidence, an ease.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Jupiter well placed">
            <p>
              Optimism, a sense of opportunity, generosity, the ability to bounce back. Beware, however: Jupiter can also push you to{" "}
              <strong className="text-white">overestimate your chances</strong> and to bet too big. Excess is its flip side.
            </p>
          </Card>

          <Card title="Venus in support">
            <p>
              A taste for pleasure, for the elegant move, for agreeable situations. It often describes a &laquo; relational &raquo; luck (gains tied to others,
              to gifts, to perks) rather than raw luck in a draw.
            </p>
          </Card>
        </div>

        <Callout tone="ok" title="Essential nuance">
          <p>
            &laquo; Benefic &raquo; does not mean &laquo; winning &raquo;. Jupiter describes an <strong className="text-white">attitude</strong> and an inner{" "}
            <strong className="text-white">climate</strong>, not a lottery result. A radiant Jupiter makes you confident — which has never
            changed the odds of a draw.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* 4. PART OF FORTUNE */}
      <section className="space-y-6">
        <H2>4) The Part of Fortune: the point of &laquo; luck &raquo;</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          The <strong className="font-medium text-amber-200">Part of Fortune</strong> is a calculated point (from the Sun, the Moon and the
          Ascendant) that tradition associates with material well-being and a form of luck &laquo; that flows naturally &raquo;. Its house indicates the
          area where abundance comes most naturally.
        </p>

        <Card title="How to read it" subtitle="The house of the Part of Fortune orients the favorable area.">
          <div className="space-y-4">
            <p>
              <span className="text-amber-400">✦</span> In <strong className="text-white">House 2</strong>: an ease in generating your own
              resources.
            </p>
            <p>
              <span className="text-amber-400">✦</span> In <strong className="text-white">House 5</strong>: a field of luck tied to gaming, to
              creation, to children or to pleasures — to handle with caution on the gambling side.
            </p>
            <p>
              <span className="text-amber-400">✦</span> In <strong className="text-white">House 8 or 11</strong>: gains through others, support,
              networks or unexpected income.
            </p>
          </div>
        </Card>

        <p className="text-sm leading-relaxed text-white/70">
          For the exact calculation and the other calculated points, see our appendix on{" "}
          <Link href="/points-fictifs" className="text-amber-200 underline-offset-4 hover:underline">fictitious points (Parts, Vertex…)</Link>.
        </p>
      </section>

      <Divider />

      {/* 5. TRANSITS / TIMING */}
      <section className="space-y-6">
        <H2>5) Transits: &laquo; windows &raquo;, not certainties</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          <Link href="/transits">Timing</Link> is the most requested dimension — and the most overinterpreted. When Jupiter transits your
          2nd or 5th house, or forms a good aspect to the ruler of those houses, tradition speaks of a{" "}
          <strong className="font-medium text-amber-200">favorable window</strong>: a climate of openness, of opportunities, of confidence.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="What a favorable transit describes">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-emerald-400">✔</span>
                <span>A more confident state of mind, open to opportunities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-emerald-400">✔</span>
                <span>A period when you try, you launch, you dare more</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-emerald-400">✔</span>
                <span>A symbolic context of expansion (2, 5, 8, 11)</span>
              </li>
            </ul>
          </Card>

          <Card title="What a transit never does">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-red-400">✘</span>
                <span>Guarantee a win or &laquo; unlock &raquo; a jackpot</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-red-400">✘</span>
                <span>Indicate numbers, a grid or a horse</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-red-400">✘</span>
                <span>Justify betting more than is reasonable</span>
              </li>
            </ul>
          </Card>
        </div>

        <Callout tone="warn" title="The trap of the &laquo; right moment &raquo;">
          <p>
            Believing that a transit &laquo; permits &raquo; you to bet big is one of the most costly mistakes. A good transit does not change the
            odds of a game of chance. At best, it describes your <strong className="text-white">mood</strong> — not the outcome.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* 6. LIMITS */}
      <section className="space-y-6">
        <H2>6) What astrology will never tell you</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Let's be clear, because this is what separates a serious reading from an illusion. Astrology is a{" "}
          <strong className="font-medium text-amber-200">symbolic and psychological</strong> language. Its predictive validity is not scientifically
          demonstrated, and it is utterly powerless before a random draw.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="No winning numbers">
            <p>
              No one can pull lottery numbers from a chart. Any such promise is a{" "}
              <strong className="text-white">scam</strong> or an illusion. Beware of &laquo; psychics &raquo; who sell grids.
            </p>
          </Card>

          <Card title="Chance remains chance">
            <p>
              Gambling has a negative mathematical expectation: over time, you lose statistically. No star changes that
              reality. The only truly &laquo; winning &raquo; decision is to play <strong className="text-white">little and for fun</strong>.
            </p>
          </Card>
        </div>
      </section>

      <Divider />

      {/* SUMMARY */}
      <section className="space-y-6">
        <H2>Summary: reading &laquo; luck in gambling &raquo; with method</H2>

        <section className="rounded-[2rem] border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-transparent p-8 shadow-2xl backdrop-blur-md">
          <ol className="list-decimal space-y-4 pl-6 text-lg text-white/90 marker:font-serif marker:font-bold marker:text-emerald-400">
            <li>Read the 5th house (cusp sign, ruler, planets): the style of play</li>
            <li>Cross-reference with House 2 (lasting gains) and the 8th (sudden gains/losses)</li>
            <li>Assess Jupiter and Venus: the tone, the optimism, the possible excess</li>
            <li>Locate the Part of Fortune: the area where abundance comes most easily</li>
            <li>Look at transits as windows of mood, never as guarantees</li>
            <li><strong className="text-emerald-300">Conclude on a temperament, not on an outcome.</strong></li>
          </ol>
        </section>

        <Callout tone="ok" title="A clear-eyed conclusion">
          <p>
            The chart can describe a <strong className="text-white">gambler</strong>: cautious or bold, superstitious or strategic, drawn to
            risk or repelled by it. That is precious for self-knowledge.
          </p>
          <p>
            But it does not describe a <strong className="text-white">winner</strong>. The best &laquo; luck &raquo;, astrologically as well as
            humanly, is to keep control: play for fun, with limits, without ever betting your balance.
          </p>
        </Callout>
      </section>

      {/* FAQ */}
      <section className="mt-16 space-y-8">
        <H2>FAQ — Luck, gaming and astrology</H2>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Which house for luck in gambling?">
            <p>
              <strong className="text-white">House 5</strong> (gaming, betting, speculation), cross-referenced with the 2nd (winnings), the 8th (sudden money),
              Jupiter and the Part of Fortune.
            </p>
          </Card>

          <Card title="Can a lottery win be predicted?">
            <p>
              No. No astrological method predicts a draw. Gambling is a matter of <strong className="text-white">chance</strong>; the
              chart describes an attitude, not an outcome.
            </p>
          </Card>

          <Card title="Does Jupiter in House 5 make you lucky?">
            <p>
              It describes an optimistic and confident gambler, sometimes too much so. It is a clue to a favorable temperament — not a promise of winning, and a
              risk of excess to watch.
            </p>
          </Card>

          <Card title="And if gambling becomes a problem?">
            <p>
              That is a signal to take seriously. In France, <strong className="text-white">Joueurs Info Service (09 74 75 13 13)</strong> offers
              free and anonymous help. Talking to a loved one or a professional also helps.
            </p>
          </Card>
        </div>
      </section>

      {/* GOING FURTHER */}
      <footer className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md sm:p-12">
        <H3>Going further in your analysis</H3>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Pill tone="yellow">House 5</Pill>
          <Pill>House 2</Pill>
          <Pill tone="violet">Jupiter</Pill>
          <Pill tone="orange">Transits</Pill>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/blog/finances-theme-astral"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Finances in the natal chart
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/blog/qu-est-ce-qu-un-theme-astral"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Understanding the natal chart
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="mt-12 grid gap-3 text-left sm:grid-cols-2 lg:grid-cols-3">
          <Link href="/maisons/maison-5" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">House</span>
            <span className="mt-1 block font-medium text-white/90">House 5 — Gaming &amp; pleasure</span>
            <span className="mt-1 block text-xs text-white/60">Betting, speculation, risk-taking</span>
          </Link>
          <Link href="/maisons/maison-2" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">House</span>
            <span className="mt-1 block font-medium text-white/90">House 2 — Resources</span>
            <span className="mt-1 block text-xs text-white/60">Kept winnings, values</span>
          </Link>
          <Link href="/maisons/maison-8" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">House</span>
            <span className="mt-1 block font-medium text-white/90">House 8 — Sudden money</span>
            <span className="mt-1 block text-xs text-white/60">Unexpected gains, brutal losses</span>
          </Link>
          <Link href="/planetes/jupiter" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Planet</span>
            <span className="mt-1 block font-medium text-white/90">Jupiter — Expansion</span>
            <span className="mt-1 block text-xs text-white/60">Optimism, opportunities, excess</span>
          </Link>
          <Link href="/planetes/venus" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Planet</span>
            <span className="mt-1 block font-medium text-white/90">Venus — Pleasure</span>
            <span className="mt-1 block text-xs text-white/60">Relational luck, perks</span>
          </Link>
          <Link href="/points-fictifs" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Appendix</span>
            <span className="mt-1 block font-medium text-white/90">Part of Fortune</span>
            <span className="mt-1 block text-xs text-white/60">Fictitious points &amp; calculation</span>
          </Link>
          <Link href="/transits" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Method</span>
            <span className="mt-1 block font-medium text-white/90">Transits</span>
            <span className="mt-1 block text-xs text-white/60">Timing windows</span>
          </Link>
          <Link href="/aspects" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Method</span>
            <span className="mt-1 block font-medium text-white/90">Aspects</span>
            <span className="mt-1 block text-xs text-white/60">Links to the ruler of the 5th</span>
          </Link>
          <Link href="/blog/orientation-professionnelle-theme-astral" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Article</span>
            <span className="mt-1 block font-medium text-white/90">Career path &amp; chart</span>
            <span className="mt-1 block text-xs text-white/60">House 10 and income</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}
