import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { TagPillsInline, getGlowFromTags } from "../ui";
import { AUTHOR_PERSON, PUBLISHER_ORG } from "@/lib/seo";

/* ================================================================== */
/*  META / SEO                                                        */
/* ================================================================== */
export const meta = {
  slug: "pourquoi-votre-horoscope-ne-vous-ressemble-pas",
  title:
    "Why your horoscope doesn't sound like you",
  description:
    "Don't recognize yourself in your daily horoscope? Discover why only your natal chart reveals who you truly are.",
  date: "2026-04-20",
  tags: [
    "thème astral",
    "signe solaire",
    "ascendant",
    "lune",
    "planètes",
    "horoscope",
    "débutant",
    "bases",
  ],
  readingLevel: "débutant" as const,
  cover: "/images/blog/horoscope-ne-vous-ressemble-pas.webp",
};

const SITE_URL = "https://www.astro-cours.com";
const ARTICLE_URL = `${SITE_URL}/blog/${meta.slug}`;

/* ================================================================== */
/*  LOCAL COMPONENTS                                                  */
/* ================================================================== */
function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-300">
      <span
        className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-300"
        aria-hidden="true"
      />
      {children}
    </span>
  );
}

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-6 flex items-center font-serif text-2xl font-light text-white sm:text-3xl md:text-4xl">
      <span
        className="mr-4 block h-px w-8 bg-gradient-to-r from-sky-400/60 to-transparent"
        aria-hidden="true"
      />
      {children}
    </h2>
  );
}

function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-serif text-xl font-medium text-white/90 sm:text-2xl">
      {children}
    </h3>
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
  const styles = {
    warn: {
      box: "border-red-500/30 bg-red-500/10 shadow-[0_0_30px_rgba(239,68,68,0.06)]",
      icon: "text-red-300",
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
      box: "border-sky-400/25 bg-sky-400/10 shadow-[0_0_30px_rgba(56,189,248,0.05)]",
      icon: "text-sky-200",
      svg: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  };
  const current = styles[tone];

  return (
    <aside
      aria-label={title}
      className={`relative overflow-hidden rounded-2xl border p-5 backdrop-blur-md sm:p-6 ${current.box}`}
    >
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-current opacity-30 to-transparent" />
      <div className={`mb-3 flex items-center gap-3 font-serif text-base font-medium sm:text-lg ${current.icon}`}>
        {current.svg}
        <span>{title}</span>
      </div>
      <div className="space-y-3 text-sm leading-relaxed text-white/80 md:text-base">
        {children}
      </div>
    </aside>
  );
}

function Card({
  title,
  children,
  subtitle,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md transition-colors hover:bg-white/[0.05] sm:rounded-3xl sm:p-7">
      <div>
        <H3>{title}</H3>
        {subtitle && <p className="mt-2 text-sm text-white/50">{subtitle}</p>}
      </div>
      <div className="mt-5 space-y-4 text-sm leading-relaxed text-white/80 md:text-base">
        {children}
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-sm transition-all hover:border-sky-300/30 sm:p-5">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-300/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <p className="text-[0.65rem] uppercase tracking-widest text-white/50 sm:text-xs">{label}</p>
      <p className="mt-1.5 font-serif text-lg text-white/90 sm:mt-2 sm:text-xl">{value}</p>
    </div>
  );
}

function Divider() {
  return <hr className="my-10 border-t border-white/10 sm:my-12" aria-hidden="true" />;
}

function PlanetRow({
  planet,
  role,
  example,
}: {
  planet: string;
  role: string;
  example: string;
}) {
  return (
    <div className="group grid grid-cols-1 border-b border-white/10 transition-colors hover:bg-sky-300/[0.03] md:grid-cols-3">
      <div className="px-3 py-3 font-serif text-base text-sky-200/90 sm:px-4 sm:py-4 sm:text-lg">{planet}</div>
      <div className="px-3 py-3 text-sm leading-relaxed text-white/80 sm:px-4 sm:py-4">{role}</div>
      <div className="px-3 py-3 text-sm leading-relaxed text-white/80 sm:px-4 sm:py-4">{example}</div>
    </div>
  );
}

function MythCard({
  myth,
  reality,
  tone,
}: {
  myth: string;
  reality: string;
  tone: "rose" | "sky" | "amber" | "emerald" | "violet";
}) {
  const colors = {
    rose: "border-rose-400/20 bg-rose-500/[0.06] hover:border-rose-400/30",
    sky: "border-sky-400/20 bg-sky-500/[0.06] hover:border-sky-400/30",
    amber: "border-amber-400/20 bg-amber-500/[0.06] hover:border-amber-400/30",
    emerald: "border-emerald-400/20 bg-emerald-500/[0.06] hover:border-emerald-400/30",
    violet: "border-violet-400/20 bg-violet-500/[0.06] hover:border-violet-400/30",
  };
  const dots = {
    rose: "bg-rose-400",
    sky: "bg-sky-400",
    amber: "bg-amber-400",
    emerald: "bg-emerald-400",
    violet: "bg-violet-400",
  };
  return (
    <div className={`rounded-xl border p-4 transition-colors sm:p-5 ${colors[tone]}`}>
      <div className="flex items-center gap-2">
        <span className={`h-2 w-2 rounded-full ${dots[tone]}`} aria-hidden />
        <p className="font-serif text-base font-semibold text-white/90 sm:text-lg">&laquo;&nbsp;{myth}&nbsp;&raquo;</p>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-white/60">{reality}</p>
    </div>
  );
}

/* ================================================================== */
/*  ARTICLE                                                           */
/* ================================================================== */
export default function HoroscopeNeVousRessemblePasPost() {
  const glow = getGlowFromTags(meta.tags);

  return (
    <article className="mx-auto max-w-4xl space-y-10 pb-20 pt-8 text-white sm:space-y-12">
      {/* ── Schema.org ── */}
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
                "@id": ARTICLE_URL,
              },
              inLanguage: "en",
              keywords: meta.tags.join(", "),
              articleSection: "Astrology",
              wordCount: 3800,
              about: [
                { "@type": "Thing", name: "Astrology" },
                { "@type": "Thing", name: "Natal chart" },
                { "@type": "Thing", name: "Horoscope" },
                { "@type": "Thing", name: "Sun sign" },
                { "@type": "Thing", name: "Ascendant" },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Why don't I recognize myself in my zodiac sign?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Your Sun sign represents only a fraction of your astrological identity. Your ascendant, the position of your Moon, of Mercury, Venus, Mars and the slow planets, the houses occupied and the aspects between planets all create a portrait that is infinitely more nuanced than the Sun sign alone used by mainstream horoscopes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the difference between Sun sign and ascendant?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Sun sign corresponds to the position of the Sun at the moment of your birth and represents your deep identity, your ego. The ascendant is the sign that was rising on the eastern horizon at the precise instant of your birth. It defines your social mask, your appearance and the way others perceive you. It changes sign roughly every two hours.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does the newspaper horoscope have any astrological value?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The mainstream horoscope divides humanity into 12 groups based on the Sun sign alone. It is an extreme simplification that takes into account neither the ascendant, nor the Moon, nor the personal planets, nor the houses. To a serious astrologer, it is entertainment, not astrology.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the role of the Moon in the natal chart?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Moon represents your emotions, your emotional needs, your relationship to the mother and to inner security. It deeply colors the way you react, love and feel safe. In many cases, the Moon influences daily feeling more than the Sun sign does.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How many factors make up a complete natal chart?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A complete natal chart includes 10 planets (among them the Sun and the Moon), 12 signs, 12 houses, the ascendant, the Midheaven, the lunar nodes, the aspects between planets (conjunction, sextile, square, trine, opposition) and possibly the fictitious points such as Lilith. That represents hundreds of possible combinations — making each chart as unique as a fingerprint.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I be more marked by my ascendant than by my Sun sign?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely. When several planets fall in the sign of the ascendant or in the 1st house, or when the ruler of the ascendant is very dominant in the chart, a person often identifies more with their ascendant than with their Sun sign. It is one of the most common reasons for the felt gap with the horoscope.",
                  },
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: SITE_URL,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Blog",
                  item: `${SITE_URL}/blog`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: meta.title,
                  item: ARTICLE_URL,
                },
              ],
            },
          ]),
        }}
      />

      {/* ── Header ── */}
      <header className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6 shadow-2xl backdrop-blur-xl sm:rounded-[2.5rem] sm:p-8 md:p-12">
        <div
          className={`pointer-events-none absolute -right-24 -top-24 h-[500px] w-[500px] rounded-full opacity-30 mix-blend-screen blur-[100px] ${glow}`}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-sky-300/5 blur-[80px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-violet-500/5"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <Kicker>Sun sign &bull; Ascendant &bull; Moon &bull; Natal chart &bull; Truth</Kicker>

          <h2 className="mt-4 font-serif text-2xl font-light leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
            Why this daily Horoscope doesn&rsquo;t speak to you&nbsp;:{" "}
            <span className="bg-gradient-to-r from-sky-400 via-violet-400 to-emerald-300 bg-clip-text text-transparent">
              the hidden Truth behind your Sign
            </span>
          </h2>

          <div className="mt-6 flex flex-wrap gap-2 text-sm text-white/70 sm:gap-3">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs backdrop-blur-md sm:px-4 sm:py-1.5 sm:text-sm">
              Beginner read
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs backdrop-blur-md sm:px-4 sm:py-1.5 sm:text-sm">
              Astrology basics
            </span>
            <span className="rounded-full border border-sky-400/20 bg-sky-500/10 px-3 py-1 text-xs text-sky-200 backdrop-blur-md sm:px-4 sm:py-1.5 sm:text-sm">
              Complete natal chart
            </span>
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-white/70 sm:mt-8 sm:text-base sm:leading-relaxed lg:text-lg">
            &laquo;&nbsp;I&rsquo;m a Gemini but I don&rsquo;t recognize myself at all.&nbsp;&raquo;
            Every astrologer hears this sentence. And for good reason: the horoscope
            you read every morning represents only one twelfth of what you
            truly are. Discover why your Sun sign is a summary
            that is far too simplistic, and how your complete natal chart tells a story infinitely
            richer &mdash; your own.
          </p>

          <div className="mt-6 border-t border-white/5 pt-5 sm:mt-8 sm:pt-6">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      {/* ── Stats ── */}
      <section className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4" aria-label="Key points">
        <Stat label="Planets in a chart" value="10" />
        <Stat label="Astrological houses" value="12" />
        <Stat label="Possible aspects" value="50+" />
        <Stat label="Unique combinations" value="&infin;" />
      </section>

      {/* ── Definition (Featured Snippet) ── */}
      <section className="rounded-2xl border border-amber-400/25 bg-amber-400/5 p-5 sm:p-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-400 mb-3">Definition</p>
        <p className="text-sm leading-relaxed text-white/80 md:text-base">
          The <strong>horoscope</strong> is based solely on the Sun sign, whereas the <strong><Link href="/blog/qu-est-ce-qu-un-theme-astral" className="text-amber-300 underline decoration-amber-300/30 underline-offset-2 transition-colors hover:text-amber-200">natal chart</Link></strong> takes into account the position of all the planets, the ascendant, the houses and the aspects. This is why most people don&apos;t recognize themselves in their daily horoscope.
        </p>
      </section>

      {/* ── APP intro ── */}
      <p className="text-sm leading-relaxed text-white/80 md:text-base">
        Do you read your <strong>horoscope</strong> every morning and find absolutely nothing of yourself in it? You are not alone — and above all, you are not wrong. The problem is that the horoscope reduces your identity to a single sign out of twelve. This guide shows you why your complete <strong>natal chart</strong> is the only reliable key to your astrological personality.
      </p>

      {/* ================================================================ */}
      {/*  PART 1 — THE FUNDAMENTAL MISUNDERSTANDING                       */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>Why you aren&rsquo;t &laquo;&nbsp;just&nbsp;&raquo; your Sun sign</H2>

        <Card title="The Horoscope, a recent invention" subtitle="How an entertainment tool became the face of astrology">
          <p>
            Most people confuse <strong className="text-white/90">astrology</strong> with <strong className="text-white/90">horoscope</strong>. It&rsquo;s a bit like confusing medicine with the health tip printed on the back of a cereal box. The horoscope as we know it today &mdash; those few lines sorted by sign in the newspapers &mdash; is an invention of the 1930s. It was the British astrologer R.&nbsp;H.&nbsp;Naylor who, in the <em>Sunday Express</em>, came up with the idea of slicing humanity into 12&nbsp;groups based on the Sun sign alone to create a column accessible to the general public.
          </p>
          <p>
            Before that, astrology had never worked that way. For millennia, from Babylon to the Renaissance, an astrologer would draw up a complete chart &mdash; a precise snapshot of the sky at the exact moment and exact place of birth. No serious astrologer would have reduced a person to their Sun sign alone. It was unthinkable.
          </p>
          <p>
            The problem is that this simplified version worked so well commercially that it became, in the collective mind, <em>astrology itself</em>. The result: millions of people judge a millennia-old discipline through a filter that represents only a caricature of it. And when they don&rsquo;t find themselves in it, instead of questioning the filter, they reject astrology as a whole.
          </p>
        </Card>

        <Card title="The Sun sign: important, but not sovereign" subtitle="A major player among ten">
          <p>
            Your zodiac sign &mdash; the one you know, the one you give when asked &mdash; corresponds to the position of the <Link href="/planetes/soleil" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Sun</Link> in the zodiac at the moment of your birth. It is your <strong className="text-white/90">Sun sign</strong>. And it is unquestionably important: the Sun represents your deep identity, your will, your ego, the direction your soul seeks to take in this life.
          </p>
          <p>
            But imagine a symphony orchestra where you only listened to the first violin. It would be beautiful, certainly &mdash; but you would miss the brass, the woodwinds, the percussion, the double basses. You would lose the richness of the harmony, the tensions between the instruments, the silences that give the melody room to breathe. Your Sun sign is that first violin: essential, but incomplete.
          </p>
          <p>
            In a natal chart, ten planets each occupy a sign and a house, and weave between themselves a network of aspects (geometric angles) that create harmonies or tensions. It is the whole of this celestial score that makes you <em>you</em> &mdash; not a single instrument played as a solo.
          </p>
        </Card>

        <Callout tone="note" title="Did you know?">
          <p>
            Two people born on the same day but a few hours apart can have a completely different ascendant, a Moon in another sign, and reorganized houses. Their life experience, their personality and their destiny will be radically different &mdash; despite an identical Sun sign.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PART 2 — THE REAL LAYERS OF YOUR IDENTITY                       */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>The different layers of your astrological identity</H2>

        <Card title="The Ascendant: the Mask and the Filter" subtitle="What the world sees first">
          <p>
            The <Link href="/maisons/maison-1" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">ascendant</Link> is perhaps the most underestimated factor in popular astrology &mdash; and yet it is decisive. It corresponds to the sign that was rising on the eastern horizon at the precise instant of your birth. Because it changes sign roughly every two hours, it requires knowing your exact birth time &mdash; a piece of information the morning horoscope will never ask you for.
          </p>
          <p>
            The ascendant plays a triple role. First, it defines your <strong className="text-white/90">physical appearance and your bearing</strong>: the way you enter a room, your gestures, the impression you make at first glance. Then, it acts as a <strong className="text-white/90">filter of perception</strong>: it colors the way you grasp the world, the way you spontaneously react to events. Finally, it <strong className="text-white/90">organizes all the houses of your chart</strong>, redistributing the planets across the various areas of your life.
          </p>
          <p>
            Let&rsquo;s take a concrete example. A Sun in Cancer (sensitive, protective, home-oriented) with a Capricorn ascendant will produce a person who, on first impression, appears cold, reserved, very professional. If this person reads the Cancer horoscope &mdash; which talks to them about sensitivity, of cocoons and emotions &mdash; they don&rsquo;t recognize themselves in it, because the world doesn&rsquo;t see them that way, and because they themselves have learned to filter their emotions through the Capricornian rigidity of their ascendant.
          </p>
          <p>
            This is why many astrologers recommend reading the horoscope of your ascendant rather than that of your Sun sign. But even this trick remains a simplification: it merely replaces one piece of the puzzle with another.
          </p>
        </Card>

        <Card title="The Moon: your inner Landscape" subtitle="The emotion that lives in you when no one is watching">
          <p>
            If the Sun is what you aspire to be and the ascendant what you show, the <Link href="/planetes/lune" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Moon</Link> is what you <em>feel</em>. It represents your deep emotions, your emotional reflexes, your needs for security, your relationship to the mother, to food, to comfort. The Moon is you at 3&nbsp;a.m. when the masks fall away.
          </p>
          <p>
            And it is precisely there that the gap with the horoscope becomes obvious. A Sun in Aries (charging forward, leading, conquering) with a Moon in Pisces (dreaming, absorbing, sympathizing) is a deeply paradoxical person: a warrior in appearance, in reality a poet who cries during a film. The Aries horoscope will talk to them about courage and boldness, but it will never touch that intimate, watery, dreamy fiber that makes up half of their being.
          </p>
          <p>
            The position of the Moon in sign is just as important as the Sun sign &mdash; and in daily life, it probably matters <em>more</em>, because it governs automatic reactions, habits, emotional comfort. If you feel out of sync with your sign, look to your Moon: there&rsquo;s a strong chance that it is the missing piece of the puzzle.
          </p>
        </Card>

        <Card title="Mercury, Venus, Mars: the personal Planets" subtitle="Your way of thinking, loving and acting">
          <p>
            Beyond the Sun-Moon-Ascendant trio, three personal planets color your daily life in very concrete ways. <Link href="/planetes/mercure" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Mercury</Link> governs your intelligence, your communication, your humor. <Link href="/planetes/venus" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Venus</Link> reigns over your tastes, your aesthetics, your way of loving and attracting. <Link href="/planetes/mars" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Mars</Link> determines your energy, your combativeness, your desire and your way of taking action.
          </p>
          <p>
            These three planets are not necessarily in the same sign as your Sun. A Taurus with Mercury in Gemini will speak quickly, with wit and lightness &mdash; the very opposite of the slow, silent Taurean stereotype. A Scorpio with Venus in Libra will be, in love, of a gentleness, a diplomacy and an elegance that no one spontaneously associates with Scorpio. A Pisces with Mars in Capricorn will deploy a discipline and an ambition that totally contradict the image of the passive dreamer that gets stuck on them.
          </p>
          <p>
            Each of these planets brings a decisive <em>nuance</em>. And since Mercury and Venus never stray very far from the Sun, they are often found in the preceding or following sign &mdash; already creating, on their own, a significant gap with the &laquo;&nbsp;pure&nbsp;&raquo; description of your sign.
          </p>
        </Card>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PART 3 — THE TABLE OF PLANETS                                   */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>What does each planet reveal in your natal chart?</H2>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md">
          {/* Header */}
          <div className="grid grid-cols-1 border-b border-white/15 bg-white/[0.04] md:grid-cols-3">
            <div className="px-3 py-3 text-xs font-bold uppercase tracking-widest text-sky-200 sm:px-4 sm:py-4">Planet</div>
            <div className="px-3 py-3 text-xs font-bold uppercase tracking-widest text-sky-200 sm:px-4 sm:py-4">What it represents</div>
            <div className="px-3 py-3 text-xs font-bold uppercase tracking-widest text-sky-200 sm:px-4 sm:py-4">Example of a gap</div>
          </div>
          <PlanetRow planet="Sun &#x2609;" role="Identity, ego, will, life direction" example="A discreet Leo Sun if conjunct Saturn" />
          <PlanetRow planet="Moon &#x263D;" role="Emotions, needs, mother, security" example="A cold Aquarius Sun but an ultra-sensitive Cancer Moon" />
          <PlanetRow planet="Ascendant" role="Social mask, appearance, filter of the world" example="A dreamy Pisces Sun but a methodical Virgo ASC" />
          <PlanetRow planet="Mercury &#x263F;" role="Thought, communication, humor" example="A composed Taurus Sun but a talkative Gemini Mercury" />
          <PlanetRow planet="Venus &#x2640;" role="Love, aesthetics, values, tastes" example="An intense Scorpio Sun but a gentle Libra Venus" />
          <PlanetRow planet="Mars &#x2642;" role="Action, desire, energy, combativeness" example="A peaceful Libra Sun but an explosive Aries Mars" />
          <PlanetRow planet="Jupiter &#x2643;" role="Expansion, luck, philosophy, excess" example="Jupiter in the 12th: growth through inwardness" />
          <PlanetRow planet="Saturn &#x2644;" role="Structure, limits, maturity, lessons" example="Saturn conjunct Sun: early gravity" />
          <PlanetRow planet="Uranus" role="Originality, rebellion, flashes of genius" example="Uranus in the 1st: an atypical, electric personality" />
          <PlanetRow planet="Neptune &#x2646;" role="Imagination, spirituality, illusion" example="Neptune conjunct ASC: a hazy, hard-to-pin-down aura" />
          <PlanetRow planet="Pluto &#x2647;" role="Transformation, power, regeneration" example="Pluto in the 1st: a magnetic gaze, an intense presence" />
        </div>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PART 4 — THE HOUSES                                             */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>The 12 astrological houses: the backdrop of your life</H2>

        <Card title="12 Scenes, 12 Areas of Life" subtitle="Where your planets play their part">
          <p>
            If the signs are the <em>how</em> (in what manner an energy expresses itself), the houses are the <em>where</em> (in which area of life it manifests). The 12&nbsp;astrological houses divide your existence into sectors: identity, finances, communication, home, creativity, work, relationships, transformation, travel, career, friendships, the unconscious.
          </p>
          <p>
            When your Sun is in Leo but in the <Link href="/maisons/maison-12" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">12th house</Link> (the unconscious, withdrawal, spirituality), your solar radiance does not express itself at the front of the stage. You shine in the shadows, in discreet help, in meditation, in solitary art. The Leo horoscope, which talks to you about spotlights and applause, will feel completely foreign to you.
          </p>
          <p>
            Conversely, a Sun in Pisces in the <Link href="/maisons/maison-10" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">10th house</Link> (career, public reputation) will push that dreamy Pisces toward unexpected professional visibility. It won&rsquo;t be the self-effacing Pisces of the clichés, but an artist, a therapist or a publicly recognized creative. The house transforms the expression of the sign.
          </p>
        </Card>

        <Callout tone="ok" title="Reading tip">
          <p>
            To understand why your horoscope doesn&rsquo;t speak to you, identify which house your Sun falls in. A Sun in the 1st house will look a lot like the classic description of the sign. A Sun in the 4th, 7th or 12th house will be experienced very differently, because the solar energy is channeled toward specific areas of your life, not toward your visible personality.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PART 5 — THE ASPECTS                                            */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>Planetary aspects: when your planets converse</H2>

        <Card title="The secret Score of the Natal chart" subtitle="Harmonies, tensions and inner contradictions">
          <p>
            Aspects are the angles formed between two planets in your chart. An <Link href="/blog/conjonction-melange-des-forces" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">aspect</Link> like the trine (120&deg;) creates a natural fluidity between two energies. A square (90&deg;) generates tension, an inner conflict that pushes toward action. An opposition (180&deg;) confronts two parts of you that seem irreconcilable.
          </p>
          <p>
            These aspects often explain why a person doesn&rsquo;t match their sign. A Sun in Sagittarius (optimism, expansion, freedom) square Saturn will be a restrained, disciplined, sometimes anxious Sagittarius &mdash; the very opposite of the carefree adventurer image. A Sun in Virgo (discretion, analysis, modesty) conjunct Jupiter will become an expansive, generous, ambitious Virgo &mdash; far from the obsessive stereotype hunched over their Excel spreadsheets.
          </p>
          <p>
            Aspects are the finest key to the personalization of your chart. They are what make two Scorpios, two Tauruses or two Geminis radically different. The horoscope cannot account for them &mdash; to do so would require knowing the position of every planet of every reader, which amounts to drawing up a complete chart.
          </p>
        </Card>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PART 6 — THE PLANETARY DOMINANT                                 */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>The planetary dominant: your deep astrological signature</H2>

        <Card title="Beyond the Sign, the Planet that defines you" subtitle="The least-known concept &mdash; and the most revealing">
          <p>
            The planetary dominant is a central concept of traditional French astrology, popularized by authors such as Jean-Pierre Nicola and André Barbault. The idea is simple: in every natal chart, one or two planets stand out by their position (angular, in domicile, strongly aspected) and color the whole personality more than the Sun sign itself.
          </p>
          <p>
            We have devoted entire articles to each planetary dominant &mdash; the <Link href="/blog/solarien" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Solarian</Link>, the <Link href="/blog/lunarien" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Lunarian</Link>, the <Link href="/blog/mercurien" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Mercurian</Link>, the <Link href="/blog/venusien" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Venusian</Link>, the <Link href="/blog/martien" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Martian</Link>, the <Link href="/blog/jupiterien" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Jupiterian</Link>, the <Link href="/blog/saturnien" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Saturnian</Link>, the <Link href="/blog/uranien" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Uranian</Link>, the <Link href="/blog/neptunien" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Neptunian</Link>, the <Link href="/blog/plutonien" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Plutonian</Link>. If you don&rsquo;t recognize yourself in your sign, try to determine your planetary dominant. There&rsquo;s a good chance you&rsquo;ll find yourself saying: &laquo;&nbsp;Ah, <em>that</em>, that&rsquo;s me.&nbsp;&raquo;
          </p>
          <p>
            For example, a person with a Sun in Virgo but a Neptune dominant (Neptune angular, aspected to several planets, in Pisces or in the 12th house) will recognize themselves far more in the description of the <Link href="/blog/neptunien" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Neptunian type</Link> &mdash; dreamy, intuitive, artistic, hazy &mdash; than in that of the analytical, down-to-earth Virgo.
          </p>
        </Card>

        <Callout tone="warn" title="Beware of the trap">
          <p>
            Determining a planetary dominant requires a complete reading of the chart. Don&rsquo;t rely on a single factor (such as the planet closest to the ascendant). You have to cross-reference the position in sign, in house, the rulership, the aspects received and the essential dignity. It is an exercise that requires practice &mdash; or the guidance of a competent astrologer.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PART 7 — MYTHS AND REALITIES                                    */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>Myths about astrology: the received ideas to forget</H2>

        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          <MythCard
            myth="I&rsquo;m an Aries, so I&rsquo;m aggressive"
            reality="Only if Mars is dominant and in a tense aspect. An Aries with Venus conjunct the Sun can be disarmingly gentle."
            tone="rose"
          />
          <MythCard
            myth="Pisces are all dreamy and lost"
            reality="A Pisces with a dominant Saturn or a Capricorn ascendant will be hyper-structured, pragmatic and ambitious. The sign doesn&rsquo;t do everything."
            tone="sky"
          />
          <MythCard
            myth="Virgos are obsessive and boring"
            reality="A Virgo with Uranus conjunct the Sun will be original, inventive, nonconformist. A strong Neptune will add an artistic and visionary dimension."
            tone="emerald"
          />
          <MythCard
            myth="Geminis are superficial"
            reality="A Gemini with Pluto aspecting Mercury will have a formidable psychological depth. A Moon in Scorpio will add an unsuspected emotional intensity."
            tone="amber"
          />
          <MythCard
            myth="Tauruses hate change"
            reality="A Taurus with several planets in mutable signs or a dominant Uranus will be curious, adaptable and in love with novelty."
            tone="violet"
          />
          <MythCard
            myth="Scorpios are dark and vengeful"
            reality="A Scorpio with a dominant Jupiter or Venus in Sagittarius will be generous, cheerful, optimistic and passionately in love with freedom."
            tone="rose"
          />
        </div>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PART 8 — CONCRETE CASES                                         */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>Concrete examples: when the chart contradicts the Sun sign</H2>

        <Card title="Marie, Taurus Sun &mdash; but nothing of a classic Taurus" subtitle="A textbook case in consultation">
          <p>
            Marie comes to a consultation saying: &laquo;&nbsp;I&rsquo;m a <Link href="/signes/taureau" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Taurus</Link>, but I&rsquo;m anything but stable. I change jobs, cities, relationships. I get bored quickly. Astrology is nonsense.&nbsp;&raquo; Looking at her chart, everything becomes clear.
          </p>
          <p>
            Her ascendant is in Sagittarius (a need for movement, discovery, horizon). Her Moon is in Gemini (insatiable curiosity, a need for intellectual stimulation). Her Mars is in Aquarius (fierce independence, a taste for experimentation). And her Taurus Sun is in the 6th house &mdash; the domain of daily work, not of visible identity.
          </p>
          <p>
            The Taurus is indeed there, but it expresses itself in her relationship to work: Marie needs comfortable material conditions, a secure salary, a pleasant office. It is the only area where she seeks stability. For the rest, her nature is dominated by fire, air and movement &mdash; energies that the Taurus horoscope will never capture.
          </p>
        </Card>

        <Card title="Thomas, Cancer Sun &mdash; and no apparent sensitivity" subtitle="The weight of Saturn and of the ascendant">
          <p>
            Thomas describes himself as &laquo;&nbsp;rational, distant, hardly emotional.&nbsp;&raquo; He hates effusions and displays of affection. When he&rsquo;s told he&rsquo;s a Cancer &mdash; the sign of sensitivity, of the mother, of the home &mdash; he laughs: &laquo;&nbsp;Not me at all.&nbsp;&raquo;
          </p>
          <p>
            His chart reveals a <Link href="/signes/capricorne" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Capricorn</Link> ascendant, with Saturn conjunct the Sun. This configuration acts like a stone wall around the Cancerian sensitivity. The emotions are there, intense, deep, but locked behind a Saturnian dam built since childhood. The Moon in Aquarius confirms it: the emotional need intellectualizes itself, distances itself, keeps itself at a safe remove.
          </p>
          <p>
            Thomas <em>is</em> a Cancer. But he is so in an invisible, underground, protected way. His sensitivity shows in his unwavering loyalty to his loved ones, in his impressive emotional memory, in his ability to sense when someone is not doing well. But he will never show it openly. Saturn keeps watch.
          </p>
        </Card>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PART 9 — WHAT NOW?                                              */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>How to read your true astrological portrait</H2>

        <Card title="The Steps to finally recognize yourself" subtitle="A practical guide to go beyond the sign">
          <p>
            If this article spoke to you, here&rsquo;s how to go further. Start by calculating your <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">complete natal chart</Link>. You will need your date of birth, your time of birth (as precise as possible, ideally to the quarter hour) and your place of birth.
          </p>
          <p>
            Once you have your chart in hand, look for the following elements, in order of priority. First, <strong className="text-white/90">your ascendant and its ruler</strong>: the sign of the ascendant and the planet that governs it often tell you more than your Sun sign. Then, <strong className="text-white/90">your Moon</strong>: identify its sign and its house to understand your deep emotional life. Next, <strong className="text-white/90">Mercury and Venus</strong>: these are the keys to your communication and your affectivity. Finally, <strong className="text-white/90">the major aspects to your Sun</strong>: are they harmonious or tense? A Sun conjunct Saturn or square Neptune will not express itself like a Sun free of any aspect.
          </p>
          <p>
            And if you want to go even further, explore your <strong className="text-white/90">planetary dominant</strong>. It is often the one that holds the key to that feeling of being out of sync. When you discover your dominant, it&rsquo;s like finding the right musical genre to describe your life: everything suddenly makes sense.
          </p>
        </Card>

        <Card title="Why this understanding changes everything" subtitle="Astrology as a mirror, not a label">
          <p>
            The true purpose of astrology has never been to predict the future or to sort people into boxes. Its genius lies in its ability to offer a <em>symbolic mirror</em> of unsettling precision &mdash; a mirror that doesn&rsquo;t tell you who you must be, but invites you to recognize who you already are.
          </p>
          <p>
            When you move from &laquo;&nbsp;I&rsquo;m an Aries&nbsp;&raquo; to &laquo;&nbsp;I have an Aries Sun in the 9th house, with a Cancer Moon, a Libra ascendant, Venus conjunct Neptune and Mars in Capricorn&nbsp;&raquo;, you no longer reduce your identity to a single word. You discover a landscape, a score, an inner architecture. And in that landscape, every contradiction, every paradox, every tension has its place and its reason for being.
          </p>
          <p>
            Your newspaper horoscope doesn&rsquo;t sound like you. That&rsquo;s normal. Because you are not one twelfth of humanity. You are a unique combination, an unrepeatable arrangement of planets, signs, houses and aspects that will never exist twice in the history of the universe. And that, no horoscope will ever be able to capture in three lines.
          </p>
        </Card>

        <Callout tone="ok" title="In summary">
          <p>
            Your Sun sign is a doorway, not a house. To find your way, explore your ascendant, your Moon, your personal planets, your houses and your aspects. It is there, in that complexity, that you will finally find the portrait that sounds like you.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* ── Visible FAQ ── */}
      <section className="space-y-6">
        <H2>Frequently asked questions about the horoscope and the natal chart</H2>

        <Card title="Why don&rsquo;t I recognize myself in my zodiac sign?">
          <p>
            Your Sun sign represents only a fraction of your astrological identity. Your ascendant, the position of your Moon, of Mercury, Venus, Mars and the slow planets, the houses occupied and the aspects between planets all create a portrait that is infinitely more nuanced than the Sun sign alone used by mainstream horoscopes.
          </p>
        </Card>

        <Card title="What is the difference between Sun sign and ascendant?">
          <p>
            The Sun sign corresponds to the position of the Sun at the moment of your birth and represents your deep identity. The ascendant is the sign that was rising on the eastern horizon at the precise instant of your birth. It defines your social mask, your appearance and the way others perceive you. It changes sign roughly every two hours.
          </p>
        </Card>

        <Card title="Does the newspaper horoscope have any astrological value?">
          <p>
            The mainstream horoscope divides humanity into 12 groups based on the Sun sign alone. It is an extreme simplification that takes into account neither the ascendant, nor the Moon, nor the personal planets, nor the houses. To a serious astrologer, it is entertainment, not astrology.
          </p>
        </Card>

        <Card title="Can I be more marked by my ascendant than by my Sun sign?">
          <p>
            Absolutely. When several planets fall in the sign of the ascendant or in the 1st house, or when the ruler of the ascendant is very dominant in the chart, a person often identifies more with their ascendant than with their Sun sign. It is one of the most common reasons for the felt gap with the horoscope.
          </p>
        </Card>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PART 10 — TO GO FURTHER                                         */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>To deepen your natal chart</H2>

        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          <Link
            href="/blog/qu-est-ce-qu-un-theme-astral"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:bg-white/[0.06] sm:p-6"
          >
            <p className="font-serif text-lg text-white/90 transition-colors group-hover:text-sky-200">
              What is a natal chart?
            </p>
            <p className="mt-2 text-sm text-white/50">
              The basics to understand the map of your birth sky.
            </p>
          </Link>

          <Link
            href="/blog/comprendre-signe-astrologique-ascendant-12-exemples"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:bg-white/[0.06] sm:p-6"
          >
            <p className="font-serif text-lg text-white/90 transition-colors group-hover:text-sky-200">
              Understanding your sign and your ascendant
            </p>
            <p className="mt-2 text-sm text-white/50">
              The difference between these two pillars of your astrological identity.
            </p>
          </Link>

          <Link
            href="/blog/venus-en-signes-style-amoureux"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:bg-white/[0.06] sm:p-6"
          >
            <p className="font-serif text-lg text-white/90 transition-colors group-hover:text-sky-200">
              Venus in sign: your love style
            </p>
            <p className="mt-2 text-sm text-white/50">
              Discover how Venus colors your way of loving.
            </p>
          </Link>

          <Link
            href="/blog/mars-en-signes-desir-libido-action"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:bg-white/[0.06] sm:p-6"
          >
            <p className="font-serif text-lg text-white/90 transition-colors group-hover:text-sky-200">
              Mars in sign: desire, energy, action
            </p>
            <p className="mt-2 text-sm text-white/50">
              Your way of charging ahead, desiring and asserting yourself.
            </p>
          </Link>
        </div>
      </section>
    </article>
  );
}
