import type { ReactNode } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import { AUTHOR_PERSON, PUBLISHER_ORG, SITE_URL } from "@/lib/seo";

const ARTICLE_SLUG = "comment-seduire-chaque-signe-du-zodiaque";
const LOCALIZED_SLUG = "how-to-seduce-each-zodiac-sign";
const ARTICLE_URL = `${SITE_URL}/en/blog/${LOCALIZED_SLUG}`;
const COVER_URL = `${SITE_URL}/images/blog/comment-seduire-chaque-signe-du-zodiaque.webp`;

export const meta = {
  slug: ARTICLE_SLUG,
  title: "How to Seduce Each Zodiac Sign",
  seoTitle: "How to Seduce Each Zodiac Sign — Astro Cours",
  description:
    "A challenge for Aries, patience for Capricorn, truth for Scorpio… What makes each zodiac sign fall for you, what makes them run, and the line that works. A sign-by-sign seduction guide.",
  date: "2026-07-21",
  tags: ["amour", "séduction", "zodiaque", "signe"],
  readingLevel: "débutant" as const,
  cover: "/images/blog/comment-seduire-chaque-signe-du-zodiaque.webp",
};

export const metadata = {
  title: `${meta.title} | Astro Cours`,
  description: meta.description,
  alternates: {
    canonical: `/blog/${meta.slug}`,
  },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: ARTICLE_URL,
    type: "article",
    siteName: "Astro Cours",
    locale: "en_US",
    publishedTime: `${meta.date}T12:00:00Z`,
    images: [
      {
        url: COVER_URL,
        width: 1200,
        height: 630,
        alt: "How to seduce each zodiac sign",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
    images: [COVER_URL],
  },
};

type ZodiacElement = "feu" | "terre" | "air" | "eau";

function getElementCardStyles(element: ZodiacElement) {
  if (element === "feu") {
    return {
      border: "border-red-500/30",
      iconWrap: "border-red-500/25 bg-red-500/10",
      glow: "from-red-500/10 to-transparent",
      title: "text-red-200",
      quote: "border-red-400/30 bg-red-500/10 text-red-50",
    };
  }

  if (element === "terre") {
    return {
      border: "border-emerald-500/30",
      iconWrap: "border-emerald-500/25 bg-emerald-500/10",
      glow: "from-emerald-500/10 to-transparent",
      title: "text-emerald-200",
      quote: "border-emerald-400/30 bg-emerald-500/10 text-emerald-50",
    };
  }

  if (element === "air") {
    return {
      border: "border-sky-500/30",
      iconWrap: "border-sky-500/25 bg-sky-500/10",
      glow: "from-sky-500/10 to-transparent",
      title: "text-sky-200",
      quote: "border-sky-400/30 bg-sky-500/10 text-sky-50",
    };
  }

  return {
    border: "border-violet-500/30",
    iconWrap: "border-violet-500/25 bg-violet-500/10",
    glow: "from-violet-500/10 to-transparent",
    title: "text-violet-200",
    quote: "border-violet-400/30 bg-violet-500/10 text-violet-50",
  };
}

function H2({ children, id }: { children: ReactNode; id: string }) {
  return (
    <h2
      id={id}
      className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight"
    >
      {children}
    </h2>
  );
}

function SeduireSection({
  id,
  title,
  href,
  imageSrc,
  imageAlt,
  element,
  tagline,
  phrase,
  phraseContext,
  craquer,
  fuir,
  rdv,
}: {
  id: string;
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  element: ZodiacElement;
  tagline: string;
  phrase: ReactNode;
  phraseContext: string;
  craquer: ReactNode;
  fuir: ReactNode;
  rdv: ReactNode;
}) {
  const styles = getElementCardStyles(element);

  return (
    <section aria-labelledby={id} className="scroll-mt-20">
      <article
        className={[
          "relative overflow-hidden rounded-2xl border bg-black/20 p-6 shadow-soft",
          styles.border,
        ].join(" ")}
      >
        <div
          className={`pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-gradient-to-br ${styles.glow} blur-3xl`}
          aria-hidden="true"
        />

        <header className="relative flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3
              id={id}
              className={[
                "text-xl md:text-2xl font-semibold tracking-tight leading-tight",
                styles.title,
              ].join(" ")}
            >
              {title}
            </h3>
            <p className="mt-1 text-sm text-text/70 italic">{tagline}</p>
          </div>
          <div
            className={[
              "shrink-0 relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border",
              styles.iconWrap,
            ].join(" ")}
            aria-hidden="true"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={64}
              height={64}
              className="h-auto w-auto object-contain opacity-95"
              sizes="64px"
            />
          </div>
        </header>

        <blockquote
          className={[
            "relative mt-5 rounded-2xl rounded-bl-md border px-5 py-4 text-lg leading-relaxed shadow-soft",
            styles.quote,
          ].join(" ")}
        >
          <p>{phrase}</p>
          <footer className="mt-1 text-[11px] uppercase tracking-widest opacity-60">
            {phraseContext}
          </footer>
        </blockquote>

        <div className="relative mt-5 rounded-xl border border-white/10 bg-black/30 p-4 text-text/85 leading-relaxed">
          <p className="text-xs font-semibold uppercase tracking-widest text-text/55">
            What makes them fall
          </p>
          <div className="mt-1 space-y-2">{craquer}</div>
        </div>

        <div className="relative mt-3 rounded-xl border border-white/10 bg-black/30 p-4 text-text/80 leading-relaxed">
          <p className="text-xs font-semibold uppercase tracking-widest text-text/55">
            What makes them run
          </p>
          <div className="mt-1 text-sm space-y-2">{fuir}</div>
        </div>

        <div className="relative mt-3 rounded-xl border border-white/10 bg-black/30 p-4 text-text/80 leading-relaxed">
          <p className="text-xs font-semibold uppercase tracking-widest text-text/55">
            The date they will remember
          </p>
          <div className="mt-1 text-sm space-y-2">{rdv}</div>
        </div>

        <div className="relative mt-4 flex justify-end">
          <Link
            href={href}
            className="text-sm text-text/70 underline decoration-white/30 hover:decoration-white/60 transition"
          >
            Read the sign&apos;s profile →
          </Link>
        </div>
      </article>
    </section>
  );
}

export default function Post() {
  const glow = getGlowFromTags(meta.tags);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    image: [COVER_URL],
    datePublished: `${meta.date}T12:00:00Z`,
    dateModified: `${meta.date}T12:00:00Z`,
    inLanguage: "en-US",
    mainEntityOfPage: ARTICLE_URL,
    author: AUTHOR_PERSON,
    publisher: PUBLISHER_ORG,
    keywords: meta.tags.join(", "),
    articleSection: "Astrology",
    educationalLevel: meta.readingLevel,
  };

  const breadcrumbJsonLd = {
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
        item: `${SITE_URL}/en/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: meta.title,
        item: ARTICLE_URL,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do you seduce someone based on their zodiac sign?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "By speaking to their element: Fire signs (Aries, Leo, Sagittarius) are won over by challenge and enthusiasm, Earth signs (Taurus, Virgo, Capricorn) by the senses and consistency, Air signs (Gemini, Libra, Aquarius) by conversation and lightness, Water signs (Cancer, Scorpio, Pisces) by emotion and trust. The sign tells you what a person needs to feel in order to open up — it is not a magic formula.",
        },
      },
      {
        "@type": "Question",
        name: "Which zodiac sign is the hardest to seduce?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No sign is impossible to seduce, but three take their time: Capricorn (they test reliability before opening up), Scorpio (they check that you are not playing games) and Aquarius (they reject any imposed script). In return, these are often the most solid attachments once trust is established.",
        },
      },
      {
        "@type": "Question",
        name: "Should you look at the Sun sign or Venus to seduce someone?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Both. The Sun sign gives the general temperament and the first reading grid. But in love, Venus describes how a person loves and wants to be touched, and Mars describes the nature of their desire. If someone does not react the way their Sun sign suggests, their Venus is probably in another sign.",
        },
      },
      {
        "@type": "Question",
        name: "Does astrological compatibility guarantee that seduction will work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Astrology offers a reading grid for temperaments, not a guarantee. Two 'incompatible' signs can live a great love story, and two signs 'made for each other' can bore each other. The sign helps you understand how to approach someone — sincerity does the rest.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <article className="space-y-10">
        {/* HEADER */}
        <header className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-7 shadow-soft">
          <div
            className={`pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl ${glow}`}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative">
            <p className="text-sm text-text/65">Love &amp; seduction</p>

            <p className="mt-4 max-w-2xl text-text/80 leading-relaxed">
              You have tried everything: the perfect restaurant, the message
              reread twelve times, the strategic 48-hour silence. And nothing.
              Maybe the problem is not <em>what</em> you are doing — but
              <strong> who</strong> you are doing it to.
            </p>

            <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
              Because you do not seduce a Scorpio the way you seduce a Gemini.
              One wants the truth, the other wants to laugh — and mixing them up
              is the fastest way to end up in the &laquo; that was nice &raquo;
              category. Here is <strong>how to seduce each zodiac
              sign</strong>: what makes them fall, what makes them run, and the
              date they will remember.
            </p>

            <div className="mt-5 flex flex-wrap gap-2" aria-label="Article topics">
              <Pill tone="rose">12 user manuals</Pill>
              <Pill tone="violet">What makes them fall</Pill>
              <Pill tone="orange">What makes them run</Pill>
              <Pill tone="sky">Lines that work</Pill>
            </div>

            <div className="mt-4" aria-label="Article keywords">
              <TagPillsInline tags={meta.tags} />
            </div>
          </div>
        </header>

        {/* DEFINITION BOX — Featured Snippet */}
        <div className="rounded-2xl border border-rose-400/20 bg-rose-400/[0.04] px-6 py-5">
          <p className="text-sm font-semibold uppercase tracking-widest text-rose-300/80">
            In short
          </p>
          <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
            To <strong>seduce someone according to their zodiac sign</strong>,
            speak to their element: <strong>Fire</strong> signs are won over by
            challenge and momentum (Aries, Leo, Sagittarius),
            <strong> Earth</strong> signs by the senses and consistency (Taurus,
            Virgo, Capricorn), <strong>Air</strong> signs by words and lightness
            (Gemini, Libra, Aquarius), <strong>Water</strong> signs by emotion
            and trust (Cancer, Scorpio, Pisces).
          </p>
        </div>

        {/* INTRO */}
        <section className="space-y-3" aria-labelledby="intro">
          <H2 id="intro">Why seduction depends on the sign</H2>
          <p className="text-text/85 leading-relaxed">
            Seduction is not about reciting techniques: it is about making
            someone feel they can <strong>open up safely</strong>. And what each
            person needs in order to open up depends on their temperament — in
            astrology, on their <strong>element</strong> and ruling planet. Fire
            needs intensity, Earth needs proof, Air needs space, Water needs
            trust.
          </p>
          <p className="text-text/85 leading-relaxed">
            Two planets run the show backstage:
            <Link href="/blog/venus-en-signes-style-amoureux" className="underline decoration-white/30 hover:decoration-white/60 transition"> Venus, which describes how we love</Link>,
            and
            <Link href="/blog/mars-en-signes-desir-libido-action" className="underline decoration-white/30 hover:decoration-white/60 transition"> Mars, which describes the nature of desire</Link>.
            The Sun sign gives the front door: the way a person wants to be
            <em> approached</em>. That is the door we open here, sign by sign.
          </p>
          <p className="text-text/85 leading-relaxed">
            One note before we start: nothing below replaces sincerity. These
            portraits — deliberately sharpened, like our
            <Link href="/blog/qualites-defauts-12-signes-zodiaque" className="underline decoration-white/30 hover:decoration-white/60 transition"> qualities and flaws of the 12 signs</Link> —
            help you understand the other person, not manipulate them. The
            nuance matters.
          </p>
        </section>

        {/* 12 SIGNS */}
        <section className="space-y-6" aria-labelledby="les-12-signes">
          <H2 id="les-12-signes">How to seduce each sign, a user manual</H2>

          <div className="grid gap-6">
            <SeduireSection
              id="belier"
              title="♈ Aries — Challenge them, they love it"
              href="/signes/belier"
              imageSrc="/images/zodiaque/belier.webp"
              imageAlt="Astrological symbol of Aries"
              element="feu"
              tagline="Seduced at first sight or never"
              phrase={<>&laquo; I don&apos;t feel like waiting until Saturday to see you again. <strong>Tomorrow, 7pm?</strong> &raquo;</>}
              phraseContext="Say it to an Aries · immediate effect"
              craquer={
                <>
                  <p>
                    <strong>Aries</strong> is ruled by Mars: they fall for
                    boldness, frankness and a hint of challenge. Say what you
                    think, say what you want, and do not apologize for existing.
                    They are not looking for someone comfortable — they are
                    looking for someone <em>alive</em>.
                  </p>
                  <p>
                    And leave them territory to conquer: be sincere without
                    being a done deal. An Aries with nothing left to win falls
                    asleep; a stimulated Aries moves mountains.
                  </p>
                </>
              }
              fuir={
                <>
                  <p>
                    Lukewarmness. The &laquo; we&apos;ll see &raquo;, the
                    three-day reply, the war of attrition. Play the waiting game
                    with an Aries and they will not wait: they will already be
                    elsewhere, without looking back.
                  </p>
                </>
              }
              rdv={
                <>
                  <p>
                    Movement: a game, a hike, go-karting, a standing bar —
                    anything but three hours sitting face to face. Aries falls
                    in love in action, not in a job interview.
                  </p>
                </>
              }
            />

            <SeduireSection
              id="taureau"
              title="♉ Taurus — Feed them, in every sense"
              href="/signes/taureau"
              imageSrc="/images/zodiaque/taureau.webp"
              imageAlt="Astrological symbol of Taurus"
              element="terre"
              tagline="Slow to start, unforgettable after"
              phrase={<>&laquo; Stay a little longer. <strong>I made dessert.</strong> &raquo;</>}
              phraseContext="Say it to a Taurus · guaranteed win"
              craquer={
                <>
                  <p>
                    <strong>Taurus</strong> is Venus&apos;s protégé: they are
                    seduced through the <strong>five senses</strong>. A good
                    meal, a scent, a calm voice, a hand that brushes theirs
                    without rushing. With them, the body decides before the
                    head — slowly, and with no turning back.
                  </p>
                  <p>
                    The other key: consistency. Be there when you say you will
                    be there. Every kept promise is a brick; Taurus does not
                    fall in love with a person, they fall in love with a
                    building.
                  </p>
                </>
              }
              fuir={
                <>
                  <p>
                    Rush and chaos. Pressuring them, changing plans at the last
                    minute, blowing hot and cold: all you will get is a wall.
                    And a walled-up Taurus can last for years.
                  </p>
                </>
              }
              rdv={
                <>
                  <p>
                    A dinner — cooked by you if possible, in a warm place
                    otherwise. Or a morning market, a walk in nature, anything
                    savored without a watch. Taurus&apos;s luxury is time.
                  </p>
                </>
              }
            />

            <SeduireSection
              id="gemeaux"
              title="♊ Gemini — Make their mind work"
              href="/signes/gemeaux"
              imageSrc="/images/zodiaque/gemeaux.webp"
              imageAlt="Astrological symbol of Gemini"
              element="air"
              tagline="Falls in love with a conversation"
              phrase={<>&laquo; I thought of you while reading something ridiculous. <strong>Wait, let me tell you.</strong> &raquo;</>}
              phraseContext="Say it to a Gemini · they are already curious"
              craquer={
                <>
                  <p>
                    <strong>Gemini</strong> belongs to Mercury: their main
                    erogenous zone is the <strong>brain</strong>. Make them
                    laugh, surprise them, bounce back, contradict them with wit.
                    A conversation that keeps rebounding is worth all the
                    candlelit dinners in the world.
                  </p>
                  <p>
                    And keep things moving: suggest, improvise, change the
                    scenery. Gemini does not run from commitment — they run
                    from repetition. As long as you remain a story whose ending
                    they do not know, they stay.
                  </p>
                </>
              }
              fuir={
                <>
                  <p>
                    Boredom and possessiveness. Heavy silences, identical
                    evenings, the &laquo; where were you? &raquo;. Lock up a
                    Gemini and they become a draft of air.
                  </p>
                </>
              }
              rdv={
                <>
                  <p>
                    Two places in one evening — a planned start, an improvised
                    sequel. A strange exhibition, a hidden bar, a silly bet on
                    the way. The venue does not matter: what matters is having a
                    story to tell afterwards.
                  </p>
                </>
              }
            />

            <SeduireSection
              id="cancer"
              title="♋ Cancer — Open your door first"
              href="/signes/cancer"
              imageSrc="/images/zodiaque/cancer.webp"
              imageAlt="Astrological symbol of Cancer"
              element="eau"
              tagline="Won by gentleness, lost by bluntness"
              phrase={<>&laquo; This is my favorite place. <strong>I hardly ever bring anyone here.</strong> &raquo;</>}
              phraseContext="Say it to a Cancer · you just entered the inner circle"
              craquer={
                <>
                  <p>
                    <strong>Cancer</strong> is the Moon&apos;s child: they need
                    <strong> emotional safety</strong> before anything else. To
                    seduce them, show your vulnerability first. Share a real
                    memory, a real doubt — not your résumé. Every confidence you
                    offer is a key they keep.
                  </p>
                  <p>
                    Pay attention to the details they drop: Cancer tests in
                    silence. Remembering that they hate cilantro is worth ten
                    compliments.
                  </p>
                </>
              }
              fuir={
                <>
                  <p>
                    Irony about their feelings, and inconstancy. A &laquo; you
                    are too sensitive &raquo; can end the story before it
                    starts. Cancer forgives a lot, but forgets nothing — it is
                    practically their specialty.
                  </p>
                </>
              }
              rdv={
                <>
                  <p>
                    A cocoon: a small familiar restaurant, a shared kitchen, a
                    couch and a movie they have loved since childhood. Cancer
                    does not want to be impressed — they want to be
                    <em> welcomed</em>.
                  </p>
                </>
              }
            />

            <SeduireSection
              id="lion"
              title="♌ Leo — Admire them, but truly"
              href="/signes/lion"
              imageSrc="/images/zodiaque/lion.webp"
              imageAlt="Astrological symbol of Leo"
              element="feu"
              tagline="Sees through flattery, melts at sincere admiration"
              phrase={<>&laquo; Everyone noticed you when you walked in. <strong>I only saw you.</strong> &raquo;</>}
              phraseContext="Say it to a Leo · the sun just rose"
              craquer={
                <>
                  <p>
                    <strong>Leo</strong> is ruled by the Sun: they need to
                    shine — and above all to be <strong>seen</strong>. But
                    beware: mass-produced flattery does not work. Notice what
                    they are truly proud of, what they have built, what it cost
                    them. Precise admiration is their mother tongue.
                  </p>
                  <p>
                    And have presence yourself: Leo wants a partner they are
                    proud of, not a spectator. Shine beside them — never in
                    their place.
                  </p>
                </>
              }
              fuir={
                <>
                  <p>
                    Indifference and pettiness. Looking down on them, keeping
                    score, minimizing their achievements in front of others: the
                    curtain falls, and it does not rise again. A humiliated Leo
                    does not take revenge — they erase you.
                  </p>
                </>
              }
              rdv={
                <>
                  <p>
                    Somewhere with a little theater: a beautiful restaurant, a
                    concert, a terrace at sunset. Dress up — for Leo, the
                    sartorial effort is a declaration.
                  </p>
                </>
              }
            />

            <SeduireSection
              id="vierge"
              title="♍ Virgo — Seduce them with details"
              href="/signes/vierge"
              imageSrc="/images/zodiaque/vierge.webp"
              imageAlt="Astrological symbol of Virgo"
              element="terre"
              tagline="Doesn't believe words, believes proof"
              phrase={<>&laquo; I booked for 8pm, it&apos;s quiet, and I saved you <strong>the seat by the wall — you prefer it</strong>. &raquo;</>}
              phraseContext="Say it to a Virgo · they noticed that you noticed"
              craquer={
                <>
                  <p>
                    <strong>Virgo</strong>, ruled by Mercury, is not dazzled:
                    they <strong>observe</strong>. What touches them are the
                    details proving you pay attention — the respected schedule,
                    the remembered preference, the well-written morning-after
                    message. For them, love is a sum of small exact things.
                  </p>
                  <p>
                    Talk to them for real: about ideas, projects, what drives
                    you. Beneath the reserve, Virgo is deliciously funny — but
                    you have to earn their second degree.
                  </p>
                </>
              }
              fuir={
                <>
                  <p>
                    Grand empty declarations and disorder. Promising the moon on
                    the first night, arriving late, being vague: they will say
                    nothing, but the &laquo; no &raquo; box is already ticked.
                    In pencil, admittedly. But ticked.
                  </p>
                </>
              }
              rdv={
                <>
                  <p>
                    A quiet place where you can hear each other talk, chosen
                    with care, without excess. Virgo does not judge the price —
                    they judge the <em>relevance</em>. A place that fits them is
                    worth every palace.
                  </p>
                </>
              }
            />

            <SeduireSection
              id="balance"
              title="♎ Libra — Charm them, they'll charm you back"
              href="/signes/balance"
              imageSrc="/images/zodiaque/balance.webp"
              imageAlt="Astrological symbol of Libra"
              element="air"
              tagline="Falls for elegance — of gestures and words"
              phrase={<>&laquo; I love how you always see <strong>both sides of everything</strong>. But right now, choose me. &raquo;</>}
              phraseContext="Say it to a Libra · smile guaranteed, heart follows"
              craquer={
                <>
                  <p>
                    <strong>Libra</strong> is Venus&apos;s other protégé: they
                    are seduced by <strong>beauty</strong> — of places, manners,
                    conversations. Be elegant in the broad sense: considerate,
                    courteous, funny without cruelty. They notice everything
                    harmonious, and everything that is not.
                  </p>
                  <p>
                    And play the two-player game of charm: Libra loves the art
                    of seduction itself, that delicate tennis of glances and
                    innuendo. Do not skip steps — the dance is precisely what
                    they love.
                  </p>
                </>
              }
              fuir={
                <>
                  <p>
                    Vulgarity and pressure. Raised voices, ultimatums, the
                    &laquo; make up your mind &raquo;. Libra needs time to
                    choose — rush them and they will choose the exit, smiling,
                    but for good.
                  </p>
                </>
              }
              rdv={
                <>
                  <p>
                    Something beautiful: an exhibition, a rooftop, a restaurant
                    with soft light. Take care of the aesthetics of
                    everything — including your own. For a Libra, a failed
                    setting is a failed message.
                  </p>
                </>
              }
            />

            <SeduireSection
              id="scorpion"
              title="♏ Scorpio — Don't play games. Ever."
              href="/signes/scorpion"
              imageSrc="/images/zodiaque/scorpion.webp"
              imageAlt="Astrological symbol of Scorpio"
              element="eau"
              tagline="Detects the lie before you finish telling it"
              phrase={<>&laquo; I don&apos;t play games. <strong>If I&apos;m here, it&apos;s because I want to be.</strong> &raquo;</>}
              phraseContext="Say it to a Scorpio · their guard just dropped a millimeter"
              craquer={
                <>
                  <p>
                    <strong>Scorpio</strong>, ruled by Pluto, does not want a
                    flirt: they want the <strong>real thing</strong>. What makes
                    them fall is quiet intensity — someone who holds their
                    gaze, answers honestly, and is not afraid of deep subjects
                    on the first night.
                  </p>
                  <p>
                    Keep your share of mystery too: Scorpio loves to decipher.
                    Reveal yourself in layers, sincerely but gradually. Deep
                    water attracts deep water.
                  </p>
                </>
              }
              fuir={
                <>
                  <p>
                    Games and half-truths. Flirting with others to make them
                    jealous, lying about an insignificant detail: they will
                    know — they always know — and the trust will not come
                    back. With a Scorpio, you only get one first chance.
                  </p>
                </>
              }
              rdv={
                <>
                  <p>
                    A tête-à-tête, low light, no crowd and no witnesses.
                    Scorpio does not want to watch you socialize — they want to
                    see <em>you</em>. One real 1am conversation is worth ten
                    brilliant outings.
                  </p>
                </>
              }
            />

            <SeduireSection
              id="sagittaire"
              title="♐ Sagittarius — Offer them a horizon"
              href="/signes/sagittaire"
              imageSrc="/images/zodiaque/sagittaire.webp"
              imageAlt="Astrological symbol of Sagittarius"
              element="feu"
              tagline="Gets attached to those who don't try to attach them"
              phrase={<>&laquo; I have two tickets. <strong>I&apos;m not telling you where to.</strong> Are you coming? &raquo;</>}
              phraseContext="Say it to a Sagittarius · they are already packing"
              craquer={
                <>
                  <p>
                    <strong>Sagittarius</strong>, Jupiter&apos;s child, falls
                    for <strong>adventure</strong> and for those who are one.
                    Make them laugh, take them elsewhere, talk about what you
                    want to live rather than what you want to own. They are not
                    looking for a better half — they are looking for a travel
                    companion.
                  </p>
                  <p>
                    Above all: have your own life. Your passions, your travels,
                    your projects. Sagittarius gets attached precisely to those
                    who do not need them to be happy.
                  </p>
                </>
              }
              fuir={
                <>
                  <p>
                    Jealousy and five-year plans. The &laquo; where is this
                    going? &raquo; in week three, the reproaches about their
                    freedom: you will see a cloud of dust and a silhouette in
                    the distance.
                  </p>
                </>
              }
              rdv={
                <>
                  <p>
                    Outside, elsewhere, on your feet: a surprise getaway, a
                    festival, food from the other side of the world. If the date
                    feels like a mini-trip, you have won.
                  </p>
                </>
              }
            />

            <SeduireSection
              id="capricorne"
              title="♑ Capricorn — Prove, don't promise"
              href="/signes/capricorne"
              imageSrc="/images/zodiaque/capricorne.webp"
              imageAlt="Astrological symbol of Capricorn"
              element="terre"
              tagline="Slowest to open up, most solid after"
              phrase={<>&laquo; Take your time. <strong>I&apos;m not in a hurry, I&apos;m serious.</strong> &raquo;</>}
              phraseContext="Say it to a Capricorn · something just unlocked"
              craquer={
                <>
                  <p>
                    <strong>Capricorn</strong>, ruled by Saturn, tests before
                    loving. What seduces them: <strong>demonstrated
                    reliability</strong>. Being on time, doing what you said,
                    staying consistent for three weeks — it is spectacularly
                    banal, and it is exactly what they have almost never seen.
                  </p>
                  <p>
                    Discover their humor too: dry, deadpan, reserved for those
                    who deserve it. The day a Capricorn jokes with you, know
                    this: it is a declaration.
                  </p>
                </>
              }
              fuir={
                <>
                  <p>
                    Drama and inconsistency. Crises, emotional tests, endless
                    plan changes. Capricorn does not fight chaos: they withdraw
                    from it, politely, and reinvest their time elsewhere.
                  </p>
                </>
              }
              rdv={
                <>
                  <p>
                    Sober and high quality: a good restaurant without show, a
                    walk with a real conversation. Arrive on time. Ask about
                    what they are building. You will watch the mountain melt —
                    slowly, but for good.
                  </p>
                </>
              }
            />

            <SeduireSection
              id="verseau"
              title="♒ Aquarius — Become their friend, then their mystery"
              href="/signes/verseau"
              imageSrc="/images/zodiaque/verseau.webp"
              imageAlt="Astrological symbol of Aquarius"
              element="air"
              tagline="Flees scripted romance, falls for the unexpected"
              phrase={<>&laquo; I&apos;ve never heard you say anything banal. <strong>That&apos;s suspicious.</strong> &raquo;</>}
              phraseContext="Say it to an Aquarius · you intrigue them, which is exactly the point"
              craquer={
                <>
                  <p>
                    <strong>Aquarius</strong>, ruled by Uranus, does not follow
                    the manual — throw yours away too, by the way. They are
                    seduced by <strong>mind</strong> and originality: unexpected
                    ideas, causes you care about, a conversation that takes off
                    at 11pm and lands at 3am without anyone noticing the time.
                  </p>
                  <p>
                    And start with friendship — really. Aquarius falls in love
                    with their best friend every other time. Their wariness is
                    not about love: it is about imposed roles.
                  </p>
                </>
              }
              fuir={
                <>
                  <p>
                    Jealousy and conventions. The mandatory candlelit dinner,
                    the boxes to tick, the &laquo; that&apos;s how it&apos;s
                    done &raquo;. Impose a script on them and they will
                    improvise an emergency exit.
                  </p>
                </>
              }
              rdv={
                <>
                  <p>
                    Unusual: a strange venue, an improbable talk, a night
                    remaking the world on a rooftop. Aquarius does not remember
                    restaurants — they remember conversations.
                  </p>
                </>
              }
            />

            <SeduireSection
              id="poissons"
              title="♓ Pisces — Dream with them, not for them"
              href="/signes/poissons"
              imageSrc="/images/zodiaque/poissons.webp"
              imageAlt="Astrological symbol of Pisces"
              element="eau"
              tagline="Won by tenderness, lost to cynicism"
              phrase={<>&laquo; I thought of you when I heard this song. <strong>Listen to it and tell me where it takes you.</strong> &raquo;</>}
              phraseContext="Say it to a Pisces · they are already dreaming of you"
              craquer={
                <>
                  <p>
                    <strong>Pisces</strong>, Neptune&apos;s children, are
                    seduced by the <strong>poetry of everyday life</strong>: a
                    shared song, a message that lands just right, true
                    listening. They do not want to be conquered — they want to
                    be <em>guessed</em>. Pay attention to what they do not say:
                    that is where they live.
                  </p>
                  <p>
                    Offer them gentleness without sappiness, and a little
                    magic: Pisces still believe love is an extraordinary story.
                    With them, it can become one.
                  </p>
                </>
              }
              fuir={
                <>
                  <p>
                    Cynicism and pragmatic bluntness. Mocking their dreams,
                    reducing their intuitions to &laquo; weird stuff &raquo;,
                    bringing everything back to logic. Pisces will not slam the
                    door — they will evaporate.
                  </p>
                </>
              }
              rdv={
                <>
                  <p>
                    Near water if possible, with music for sure: an intimate
                    concert, a riverside walk, an art-house film. Leave part of
                    the plan blurry — blur is where Pisces swim best.
                  </p>
                </>
              }
            />
          </div>
        </section>

        {/* SUMMARY BY ELEMENT */}
        <section className="space-y-4" aria-labelledby="synthese-elements">
          <H2 id="synthese-elements">The summary by element</H2>

          <p className="text-text/85 leading-relaxed">
            Behind the 12 approaches, four <strong>languages of
            seduction</strong> — one per element.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-red-300/80">
                Fire · Aries · Leo · Sagittarius
              </p>
              <p className="mt-2 text-text/85 leading-relaxed">
                Won over by <strong>momentum</strong>: challenge (Aries),
                admiration (Leo), adventure (Sagittarius). Be direct, alive,
                enthusiastic. Fire only goes out one way: boredom.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5">
              <p className="mt-0 text-sm font-semibold uppercase tracking-widest text-emerald-300/80">
                Earth · Taurus · Virgo · Capricorn
              </p>
              <p className="mt-2 text-text/85 leading-relaxed">
                Won over by <strong>proof</strong>: the senses (Taurus), the
                details (Virgo), reliability (Capricorn). Take your time, keep
                your promises. Earth does not listen to what you say — it
                watches what you do.
              </p>
            </div>
            <div className="rounded-2xl border border-sky-500/30 bg-sky-500/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-sky-300/80">
                Air · Gemini · Libra · Aquarius
              </p>
              <p className="mt-2 text-text/85 leading-relaxed">
                Won over by <strong>words</strong>: humor (Gemini), charm
                (Libra), ideas (Aquarius). Converse, surprise, leave space. Air
                gets attached to those who do not try to hold it.
              </p>
            </div>
            <div className="rounded-2xl border border-violet-500/30 bg-violet-500/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-violet-300/80">
                Water · Cancer · Scorpio · Pisces
              </p>
              <p className="mt-2 text-text/85 leading-relaxed">
                Won over by <strong>trust</strong>: safety (Cancer), truth
                (Scorpio), tenderness (Pisces). Open up first, be patient,
                never play games. Water gives everything — but only to those
                who have proved they will not run.
              </p>
            </div>
          </div>
        </section>

        {/* BEYOND THE SUN SIGN */}
        <section className="space-y-3" aria-labelledby="au-dela-du-signe">
          <H2 id="au-dela-du-signe">If it doesn&apos;t work: check their Venus</H2>
          <p className="text-text/85 leading-relaxed">
            You apply everything to the letter and the person does not react as
            expected? Normal: the Sun sign is only the front door. In love,
            <Link href="/blog/venus-en-signes-style-amoureux" className="underline decoration-white/30 hover:decoration-white/60 transition"> Venus describes how we love</Link> and
            <Link href="/blog/mars-en-signes-desir-libido-action" className="underline decoration-white/30 hover:decoration-white/60 transition"> Mars describes desire</Link> —
            a Capricorn with Venus in Pisces is far more seduced by tenderness
            than by proof. The
            <Link href="/blog/comprendre-signe-astrologique-ascendant-12-exemples" className="underline decoration-white/30 hover:decoration-white/60 transition"> ascendant</Link> also
            colors first impressions. For the full picture, you need a
            <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline decoration-white/30 hover:decoration-white/60 transition"> natal chart</Link>.
          </p>
          <p className="text-text/85 leading-relaxed">
            And once seduction has worked, two questions come fast: do our
            signs get along — answer in our
            <Link href="/compatibilite" className="underline decoration-white/30 hover:decoration-white/60 transition"> love compatibility between signs</Link> —
            and will it last — answer in our article on
            <Link href="/blog/amour-fidelite-signes-zodiaque" className="underline decoration-white/30 hover:decoration-white/60 transition"> love and fidelity by zodiac sign</Link>.
          </p>
        </section>

        {/* CONCLUSION */}
        <section className="space-y-3" aria-labelledby="conclusion">
          <H2 id="conclusion">Seduction is translation</H2>
          <p className="text-text/85 leading-relaxed">
            Deep down, this guide says one thing: seduction is not a
            performance, it is a <strong>translation</strong>. The same &laquo; I
            care about you &raquo; is said as a challenge to an Aries, a dessert
            to a Taurus, a truth to a Scorpio, a song to a Pisces. Failing at
            seduction is often just speaking the wrong language to the right
            person.
          </p>
          <p className="text-text/85 leading-relaxed">
            So learn their language — but keep your voice. Because the moment
            the other person truly falls, whatever the sign, is when they
            understand you are not playing a role. Even the Gemini. Especially
            the Scorpio. And if you want to know what they will hide from you
            next, we have also catalogued
            <Link href="/blog/mensonge-prefere-chaque-signe-zodiaque" className="underline decoration-white/30 hover:decoration-white/60 transition"> the favorite lie of each zodiac sign</Link>.
          </p>
        </section>

        {/* FAQ */}
        <section className="space-y-6" aria-labelledby="faq-seduire-signes">
          <H2 id="faq-seduire-signes">Frequently asked questions</H2>

          <div className="space-y-4">
            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">
                How do you seduce someone based on their zodiac sign?
              </summary>
              <p className="text-text/85 leading-relaxed">
                By speaking to their <strong>element</strong>: Fire signs are
                won over by challenge and enthusiasm, Earth signs by the senses
                and consistency, Air signs by conversation and lightness, Water
                signs by emotion and trust. The sign tells you what a person
                needs to <em>feel</em> in order to open up — it is not a magic
                formula.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">
                Which zodiac sign is the hardest to seduce?
              </summary>
              <p className="text-text/85 leading-relaxed">
                No sign is impossible to seduce, but three take their time:
                <strong> Capricorn</strong> (they test reliability before
                opening up), <strong>Scorpio</strong> (they check that you are
                not playing games) and <strong>Aquarius</strong> (they reject
                any imposed script). In return, these are often the most solid
                attachments once trust is established.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">
                Should you look at the Sun sign or Venus to seduce someone?
              </summary>
              <p className="text-text/85 leading-relaxed">
                Both. The Sun sign gives the general temperament and the first
                reading grid. But in love,
                <Link href="/blog/venus-en-signes-style-amoureux" className="underline decoration-white/30 hover:decoration-white/60 transition"> Venus describes how we love</Link> and
                <Link href="/blog/mars-en-signes-desir-libido-action" className="underline decoration-white/30 hover:decoration-white/60 transition"> Mars the nature of desire</Link>.
                If someone does not react the way their Sun sign suggests,
                their Venus is probably in another sign.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">
                Does astrological compatibility guarantee that seduction will
                work?
              </summary>
              <p className="text-text/85 leading-relaxed">
                No. Astrology offers a reading grid for temperaments, not a
                guarantee. Two &laquo; incompatible &raquo; signs can live a
                great love story, and two signs &laquo; made for each
                other &raquo; can bore each other. Browse our
                <Link href="/compatibilite" className="underline decoration-white/30 hover:decoration-white/60 transition"> compatibility between signs</Link> as
                a lens — sincerity does the rest.
              </p>
            </details>
          </div>
        </section>

        <nav aria-label="End of article navigation">
          <Link
            href="/blog"
            className="inline-flex rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-text/90 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            ← See all articles
          </Link>
        </nav>
      </article>
    </>
  );
}
