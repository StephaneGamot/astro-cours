import type { ReactNode } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import { AUTHOR_PERSON, PUBLISHER_ORG, SITE_URL } from "@/lib/seo";

const ARTICLE_SLUG = "mensonge-prefere-chaque-signe-zodiaque";
const LOCALIZED_SLUG = "favorite-lie-of-each-zodiac-sign";
const ARTICLE_URL = `${SITE_URL}/en/blog/${LOCALIZED_SLUG}`;
const COVER_URL = `${SITE_URL}/images/blog/mensonge-prefere-chaque-signe-zodiaque.webp`;

export const meta = {
  slug: ARTICLE_SLUG,
  title: "The Favorite Lie of Each Zodiac Sign",
  seoTitle: "The Favorite Lie of Each Zodiac Sign — Astro Cours",
  description:
    "\"I'm calm\", \"I forgave you\", \"I'm on my way\"… The favorite lie of each zodiac sign — and the truth hiding behind it. Funny, sharp, surprisingly accurate.",
  date: "2026-07-17",
  tags: ["signe", "zodiaque", "psychologie astrologique", "astrologie"],
  readingLevel: "débutant" as const,
  cover: "/images/blog/mensonge-prefere-chaque-signe-zodiaque.webp",
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
        alt: "The favorite lie of each zodiac sign",
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

function LieSection({
  id,
  title,
  href,
  imageSrc,
  imageAlt,
  element,
  tagline,
  lie,
  lieContext,
  verite,
  reperage,
}: {
  id: string;
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  element: ZodiacElement;
  tagline: string;
  lie: ReactNode;
  lieContext: string;
  verite: ReactNode;
  reperage: ReactNode;
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
          <p>{lie}</p>
          <footer className="mt-1 text-[11px] uppercase tracking-widest opacity-60">
            {lieContext}
          </footer>
        </blockquote>

        <div className="relative mt-5 rounded-xl border border-white/10 bg-black/30 p-4 text-text/85 leading-relaxed">
          <p className="text-xs font-semibold uppercase tracking-widest text-text/55">
            The truth behind it
          </p>
          <div className="mt-1 space-y-2">{verite}</div>
        </div>

        <div className="relative mt-3 rounded-xl border border-white/10 bg-black/30 p-4 text-text/80 leading-relaxed">
          <p className="text-xs font-semibold uppercase tracking-widest text-text/55">
            How to spot it
          </p>
          <div className="mt-1 text-sm space-y-2">{reperage}</div>
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
        item: `${SITE_URL}/en`,
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
        name: "Which zodiac sign lies the most?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No sign lies \"more\" than the others: each one lies differently. Gemini embellishes, Pisces escapes into vagueness, Scorpio conceals, Libra bends the truth to preserve harmony. A sign's lie reflects its main fragility, not a moral flaw specific to that sign.",
        },
      },
      {
        "@type": "Question",
        name: "Why does each sign have a \"favorite\" lie?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Because a person's most frequent lie protects what matters most to them: their image (Leo), their independence (Aquarius), their comfort (Taurus) or their vulnerability (Cancer, Scorpio). In astrology, that sensitive spot corresponds to the sign's elemental nature and its ruling planet.",
        },
      },
      {
        "@type": "Question",
        name: "Can astrology detect a lie?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No — astrology is not a lie detector. However, knowing a sign's temperament helps you understand what it protects when it lies: an \"I'm fine\" from a Cancer doesn't mean the same thing as an \"I'm fine\" from a Capricorn. It's a reading grid, not evidence.",
        },
      },
      {
        "@type": "Question",
        name: "Is frequent lying written in the natal chart?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The natal chart doesn't doom anyone to lying. Certain placements (Mercury or Neptune in hard aspect) make embellishing or dodging easier, but how you use them remains a choice. A chart shows tendencies, never fate.",
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
            <p className="text-sm text-text/65">Astrology &amp; psychology</p>

            <p className="mt-4 max-w-2xl text-text/80 leading-relaxed">
              &ldquo;I&apos;m calm.&rdquo; &ldquo;I forgave you.&rdquo;
              &ldquo;I&apos;m on my way, 10 minutes.&rdquo; We all have
              <strong> a signature lie</strong> — the one we repeat so often that
              we&apos;ve ended up believing it ourselves.
            </p>

            <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
              And that lie isn&apos;t chosen at random: it protects exactly what each
              sign holds most fragile. Here is the
              <strong> favorite lie of the 12 zodiac signs</strong> — with the truth
              hiding behind it, and how to spot it.
            </p>

            <div className="mt-5 flex flex-wrap gap-2" aria-label="Article topics">
              <Pill tone="violet">12 lies</Pill>
              <Pill tone="rose">Little weaknesses</Pill>
              <Pill tone="sky">Astro psychology</Pill>
              <Pill tone="orange">Light &amp; sharp</Pill>
            </div>

            <div className="mt-4" aria-label="Article keywords">
              <TagPillsInline tags={meta.tags} />
            </div>
          </div>
        </header>

        {/* DEFINITION BOX — Featured Snippet */}
        <div className="rounded-2xl border border-violet-400/20 bg-violet-400/[0.04] px-6 py-5">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-300/80">
            In short
          </p>
          <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
            A sign&apos;s <strong>favorite lie</strong> protects its sensitive spot:
            <strong> Fire</strong> signs lie about their emotions (&ldquo;I&apos;m
            calm&rdquo;), <strong>Earth</strong> signs about their availability
            (&ldquo;I&apos;m on it&rdquo;), <strong>Air</strong> signs about their
            detachment (&ldquo;I don&apos;t care&rdquo;), <strong>Water</strong> signs
            about their vulnerability (&ldquo;I&apos;m fine&rdquo;).
          </p>
        </div>

        {/* INTRO */}
        <section className="space-y-3" aria-labelledby="intro">
          <H2 id="intro">Why our lies give away our sign</H2>
          <p className="text-text/85 leading-relaxed">
            An everyday lie is almost never calculated deception: it&apos;s a
            <strong> protective reflex</strong>. We lie to preserve our image, our
            peace, or the harmony of a relationship. And what we try to protect
            depends directly on temperament — in astrology, on the sign&apos;s
            <strong> element</strong> and its ruling planet, such as
            <Link href="/blog/mercurien" className="underline decoration-white/30 hover:decoration-white/60 transition"> Mercury</Link>,
            the planet of language.
          </p>
          <p className="text-text/85 leading-relaxed">
            What follows is deliberately exaggerated — like our
            <Link href="/blog/qualites-defauts-12-signes-zodiaque" className="underline decoration-white/30 hover:decoration-white/60 transition"> qualities and flaws of the 12 signs</Link> —
            but each lie is rooted in the sign&apos;s real inner mechanics.
            You&apos;re going to recognize someone. Probably yourself.
          </p>
        </section>

        {/* 12 SIGNS */}
        <section className="space-y-6" aria-labelledby="the-12-lies">
          <H2 id="the-12-lies">The 12 signs, one lie each</H2>

          <div className="grid gap-6">
            <LieSection
              id="aries"
              title="♈ Aries — “I'm calm.”"
              href="/signes/belier"
              imageSrc="/images/zodiaque/belier.webp"
              imageAlt="Astrological symbol of Aries"
              element="feu"
              tagline="Said through clenched teeth"
              lie={<>&ldquo;No but it&apos;s fine, I&apos;m <strong>totally calm</strong>.&rdquo;</>}
              lieContext="Aries · volume: +20%"
              verite={
                <>
                  <p>
                    <strong>Aries</strong> is not calm. Aries is boiling. Mars, its
                    planet, turns every annoyance into a national emergency — but
                    admitting they lost their temper means admitting they lost
                    control. Unthinkable.
                  </p>
                </>
              }
              reperage={
                <>
                  <p>
                    The more they repeat &ldquo;I&apos;m calm&rdquo;, the less they
                    are. Bonus: the sentence is usually followed by a very calm door
                    slam.
                  </p>
                </>
              }
            />

            <LieSection
              id="taurus"
              title="♉ Taurus — “Coming, I'm getting up.”"
              href="/signes/taureau"
              imageSrc="/images/zodiaque/taureau.webp"
              imageAlt="Astrological symbol of Taurus"
              element="terre"
              tagline="Hasn't moved an inch"
              lie={<>&ldquo;Yeah yeah, <strong>I&apos;m getting up</strong>, five minutes.&rdquo;</>}
              lieContext="Taurus · still under the blanket"
              verite={
                <>
                  <p>
                    <strong>Taurus</strong> doesn&apos;t lie out of malice: they lie
                    out of optimism about their own inertia. Venus in Earth loves
                    present comfort — and &ldquo;five minutes&rdquo; is a Venusian
                    unit of time that can contain an entire movie.
                  </p>
                </>
              }
              reperage={
                <>
                  <p>
                    If they add &ldquo;promise&rdquo;, add an hour. The only thing
                    that truly gets them up: the smell of food.
                  </p>
                </>
              }
            />

            <LieSection
              id="gemini"
              title="♊ Gemini — “I won't tell anyone.”"
              href="/signes/gemeaux"
              imageSrc="/images/zodiaque/gemeaux.webp"
              imageAlt="Astrological symbol of Gemini"
              element="air"
              tagline="Already drafting the message"
              lie={<>&ldquo;Don&apos;t worry, <strong>this stays between us</strong>.&rdquo;</>}
              lieContext="Gemini · 3 chats open"
              verite={
                <>
                  <p>
                    <strong>Gemini</strong> is sincere… at the moment they say it.
                    But Mercury, planet of information flow, considers that a good
                    story <em>must</em> circulate. It&apos;s not betrayal, it&apos;s
                    logistics.
                  </p>
                </>
              }
              reperage={
                <>
                  <p>
                    If the info is truly juicy, it will have made the rounds of the
                    group chat before midnight — with narrative improvements.
                  </p>
                </>
              }
            />

            <LieSection
              id="cancer"
              title="♋ Cancer — “I'm fine.”"
              href="/signes/cancer"
              imageSrc="/images/zodiaque/cancer.webp"
              imageAlt="Astrological symbol of Cancer"
              element="eau"
              tagline="Is not fine at all"
              lie={<>&ldquo;It&apos;s okay, <strong>I&apos;m fine</strong> 🙂&rdquo;</>}
              lieContext="Cancer · on the verge of tears"
              verite={
                <>
                  <p>
                    <strong>Cancer</strong> is not fine, and secretly hopes
                    you&apos;ll insist. A lunar sign, it protects its vulnerability
                    behind a shell — but always lets one clue stick out, in case
                    someone loves them enough to dig.
                  </p>
                </>
              }
              reperage={
                <>
                  <p>
                    The &ldquo;🙂&rdquo; is the red flag. A Cancer who is fine tells
                    you about their day; a Cancer who is &ldquo;fine&rdquo; answers
                    in three words.
                  </p>
                </>
              }
            />

            <LieSection
              id="leo"
              title="♌ Leo — “I don't care what people think of me.”"
              href="/signes/lion"
              imageSrc="/images/zodiaque/lion.webp"
              imageAlt="Astrological symbol of Leo"
              element="feu"
              tagline="Checks their notifications every 4 minutes"
              lie={<>&ldquo;Honestly, <strong>other people&apos;s opinions</strong> don&apos;t affect me.&rdquo;</>}
              lieContext="Leo · just re-read their comments"
              verite={
                <>
                  <p>
                    <strong>Leo</strong> is solar: it <em>needs</em> to shine and be
                    seen. The displayed indifference is a spare crown — because
                    admitting an opinion hurt them means stepping off the stage.
                  </p>
                </>
              }
              reperage={
                <>
                  <p>
                    They remember, word for word, the criticism they received three
                    years ago. But it doesn&apos;t affect them, right.
                  </p>
                </>
              }
            />

            <LieSection
              id="virgo"
              title="♍ Virgo — “It's fine, I'm letting go.”"
              href="/signes/vierge"
              imageSrc="/images/zodiaque/vierge.webp"
              imageAlt="Astrological symbol of Virgo"
              element="terre"
              tagline="Just redid the list a third time"
              lie={<>&ldquo;No no, <strong>I&apos;m letting go</strong>, whatever happens happens.&rdquo;</>}
              lieContext="Virgo · has a plan B, C and D"
              verite={
                <>
                  <p>
                    <strong>Virgo</strong> never lets go: she delegates to her
                    night-shift brain. Mercury in Earth analyzes everything, all the
                    time — &ldquo;letting go&rdquo; is just the silent version of her
                    quality control.
                  </p>
                </>
              }
              reperage={
                <>
                  <p>
                    Ask &ldquo;so we&apos;re winging it?&rdquo; and watch the left
                    eye. It twitches.
                  </p>
                </>
              }
            />

            <LieSection
              id="libra"
              title="♎ Libra — “I don't mind, you choose.”"
              href="/signes/balance"
              imageSrc="/images/zodiaque/balance.webp"
              imageAlt="Astrological symbol of Libra"
              element="air"
              tagline="Has a very precise preference"
              lie={<>&ldquo;Really, <strong>I don&apos;t mind</strong>, whatever you want 🙂&rdquo;</>}
              lieContext="Libra · hates the option you're about to pick"
              verite={
                <>
                  <p>
                    <strong>Libra</strong> has a preference. Has had one from the
                    start. But Venus in Air places harmony above everything: imposing
                    a choice might create friction, and friction is her intimate
                    enemy.
                  </p>
                </>
              }
              reperage={
                <>
                  <p>
                    Pick &ldquo;at random&rdquo; and watch the micro-silence. If it
                    lasts more than two seconds, you picked the wrong option.
                  </p>
                </>
              }
            />

            <LieSection
              id="scorpio"
              title="♏ Scorpio — “I forgave you.”"
              href="/signes/scorpion"
              imageSrc="/images/zodiaque/scorpion.webp"
              imageAlt="Astrological symbol of Scorpio"
              element="eau"
              tagline="File archived, never deleted"
              lie={<>&ldquo;It&apos;s forgotten, <strong>I forgave you</strong>.&rdquo;</>}
              lieContext="Scorpio · date, time and witnesses memorized"
              verite={
                <>
                  <p>
                    <strong>Scorpio</strong> may indeed have forgiven. But forgotten?
                    Never. Pluto archives every wound in a dated, sorted file,
                    retrievable at the slightest repeat offense. The forgiveness is
                    real — it&apos;s the probation period that is eternal.
                  </p>
                </>
              }
              reperage={
                <>
                  <p>
                    Six months later, mid-conversation: &ldquo;like on March 14th,
                    you mean?&rdquo;. There it is.
                  </p>
                </>
              }
            />

            <LieSection
              id="sagittarius"
              title="♐ Sagittarius — “On my way, 10 minutes.”"
              href="/signes/sagittaire"
              imageSrc="/images/zodiaque/sagittaire.webp"
              imageAlt="Astrological symbol of Sagittarius"
              element="feu"
              tagline="Just got out of the shower"
              lie={<>&ldquo;<strong>On my way</strong>! 10 minutes max.&rdquo;</>}
              lieContext="Sagittarius · wet hair, mismatched socks"
              verite={
                <>
                  <p>
                    <strong>Sagittarius</strong> sincerely believes they are 10
                    minutes away. Jupiter inflates everything — enthusiasm, plans,
                    and above all their perception of time. In their head, they are
                    already with you. Their body is still looking for its keys.
                  </p>
                </>
              }
              reperage={
                <>
                  <p>
                    &ldquo;10 minutes&rdquo; = 40. &ldquo;Leaving now&rdquo; =
                    they&apos;ll grab a bite first. Bring a book.
                  </p>
                </>
              }
            />

            <LieSection
              id="capricorn"
              title="♑ Capricorn — “Work isn't my whole life.”"
              href="/signes/capricorne"
              imageSrc="/images/zodiaque/capricorne.webp"
              imageAlt="Astrological symbol of Capricorn"
              element="terre"
              tagline="Answers an email while saying it"
              lie={<>&ldquo;You know, <strong>work isn&apos;t my whole life</strong>.&rdquo;</>}
              lieContext="Capricorn · Sunday, 10:47 pm, laptop open"
              verite={
                <>
                  <p>
                    <strong>Capricorn</strong> wishes it were true. But Saturn
                    measures a day&apos;s worth by what it has built — and rest
                    without a goal gives them hives. Their vacations have a schedule.
                    Their schedule has sub-sections.
                  </p>
                </>
              }
              reperage={
                <>
                  <p>
                    Ask them about their last weekend of &ldquo;doing
                    nothing&rdquo;. There will be a comparison table.
                  </p>
                </>
              }
            />

            <LieSection
              id="aquarius"
              title="♒ Aquarius — “It doesn't affect me.”"
              href="/signes/verseau"
              imageSrc="/images/zodiaque/verseau.webp"
              imageAlt="Astrological symbol of Aquarius"
              element="air"
              tagline="Will think about it again at 3 am"
              lie={<>&ldquo;Feelings, all that… <strong>it doesn&apos;t affect me</strong> that much.&rdquo;</>}
              lieContext="Aquarius · mid-analysis of the thing that doesn't affect them"
              verite={
                <>
                  <p>
                    <strong>Aquarius</strong> feels everything — but on a delay, and
                    through the intellect. Uranus prefers to turn emotion into
                    concept: it&apos;s cleaner, more manageable, less… damp.
                    Detachment is their protective suit.
                  </p>
                </>
              }
              reperage={
                <>
                  <p>
                    Three days later, they send you a psychology article
                    &ldquo;unrelated&rdquo; to anything. That&apos;s their way of
                    saying it touched them.
                  </p>
                </>
              }
            />

            <LieSection
              id="pisces"
              title="♓ Pisces — “Yes yes, I was listening.”"
              href="/signes/poissons"
              imageSrc="/images/zodiaque/poissons.webp"
              imageAlt="Astrological symbol of Pisces"
              element="eau"
              tagline="Was on another planet"
              lie={<>&ldquo;Of course <strong>I was listening</strong>! You were saying that… uh…&rdquo;</>}
              lieContext="Pisces · back from an inner journey"
              verite={
                <>
                  <p>
                    <strong>Pisces</strong> was listening… at first. Then a word
                    triggered an image, the image a memory, the memory an entire
                    world. Neptune never really cuts contact with the inner ocean —
                    your sentence was just the boarding gate.
                  </p>
                </>
              }
              reperage={
                <>
                  <p>
                    The blurry gaze and the off-beat nod. Repeat your last sentence:
                    the real listening starts now.
                  </p>
                </>
              }
            />
          </div>
        </section>

        {/* SUMMARY BY ELEMENT */}
        <section className="space-y-4" aria-labelledby="summary-elements">
          <H2 id="summary-elements">The summary by element</H2>

          <p className="text-text/85 leading-relaxed">
            Behind the 12 lies, four <strong>protection strategies</strong> — one
            per element.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-red-300/80">
                Fire · Aries · Leo · Sagittarius
              </p>
              <p className="mt-2 text-text/85 leading-relaxed">
                Lie to protect their <strong>image of strength</strong>:
                &ldquo;I&apos;m calm&rdquo;, &ldquo;it doesn&apos;t affect
                me&rdquo;, &ldquo;on my way&rdquo;. Fire never wants to look
                overwhelmed — not by its emotions, not by the clock.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300/80">
                Earth · Taurus · Virgo · Capricorn
              </p>
              <p className="mt-2 text-text/85 leading-relaxed">
                Lie to protect their <strong>tempo and control</strong>:
                &ldquo;I&apos;m getting up&rdquo;, &ldquo;I&apos;m letting
                go&rdquo;, &ldquo;work isn&apos;t my whole life&rdquo;. Earth
                promises change… in order to stay exactly where it is.
              </p>
            </div>
            <div className="rounded-2xl border border-sky-500/30 bg-sky-500/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-sky-300/80">
                Air · Gemini · Libra · Aquarius
              </p>
              <p className="mt-2 text-text/85 leading-relaxed">
                Lie to protect their <strong>lightness</strong>: &ldquo;this stays
                between us&rdquo;, &ldquo;I don&apos;t mind&rdquo;, &ldquo;it
                doesn&apos;t affect me&rdquo;. Air dodges anything that could weigh
                it down: conflict, commitment, raw emotion.
              </p>
            </div>
            <div className="rounded-2xl border border-violet-500/30 bg-violet-500/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-violet-300/80">
                Water · Cancer · Scorpio · Pisces
              </p>
              <p className="mt-2 text-text/85 leading-relaxed">
                Lie to protect their <strong>vulnerability</strong>: &ldquo;I&apos;m
                fine&rdquo;, &ldquo;I forgave you&rdquo;, &ldquo;I was
                listening&rdquo;. Water doesn&apos;t lie about facts — it lies about
                the depth of what it feels.
              </p>
            </div>
          </div>

          <p className="text-text/80 leading-relaxed">
            As always, the sun sign is only part of the story: the
            <Link href="/blog/comprendre-signe-astrologique-ascendant-12-exemples" className="underline decoration-white/30 hover:decoration-white/60 transition"> ascendant</Link>,
            the <Link href="/blog/lunarien" className="underline decoration-white/30 hover:decoration-white/60 transition">Moon</Link> and
            <Link href="/blog/mercurien" className="underline decoration-white/30 hover:decoration-white/60 transition"> Mercury</Link> greatly
            refine the way we tell — or don&apos;t tell — the truth. That&apos;s the
            whole point of a complete
            <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline decoration-white/30 hover:decoration-white/60 transition"> natal chart</Link>.
          </p>
        </section>

        {/* NUANCE */}
        <section className="space-y-3" aria-labelledby="lie-vs-manipulation">
          <H2 id="lie-vs-manipulation">Little lie or real manipulation?</H2>
          <p className="text-text/85 leading-relaxed">
            The lies in this article are <strong>protective lies</strong>: they
            defend a fragility, not an interest. Manipulation, on the other hand,
            aims to obtain something from the other person — a very different
            subject, which we covered in our article on
            <Link href="/blog/manipulateurs-pervers-narcissiques-astrologie" className="underline decoration-white/30 hover:decoration-white/60 transition"> manipulators and narcissists in astrology</Link>.
            If someone&apos;s lies cost you more than they protect them, it&apos;s no
            longer fun astrology: it&apos;s a signal.
          </p>
        </section>

        {/* CONCLUSION */}
        <section className="space-y-3" aria-labelledby="conclusion">
          <H2 id="conclusion">So, which one is your lie?</H2>
          <p className="text-text/85 leading-relaxed">
            If you winced while reading your sign, that&apos;s a good sign: your Sun
            is running at full power. If nothing sounds like you, look at your
            ascendant or your Moon — our little arrangements with the truth often
            come from there. And if your
            <Link href="/blog/pourquoi-votre-horoscope-ne-vous-ressemble-pas" className="underline decoration-white/30 hover:decoration-white/60 transition"> horoscope doesn&apos;t fit you at all</Link>,
            we have an explanation for that too.
          </p>
          <p className="text-text/85 leading-relaxed">
            Next time someone tells you &ldquo;I&apos;m calm&rdquo; through clenched
            teeth, you&apos;ll know: it&apos;s not a lie. It&apos;s an Aries doing
            their best.
          </p>
        </section>

        {/* FAQ */}
        <section className="space-y-6" aria-labelledby="faq-lies-signs">
          <H2 id="faq-lies-signs">Frequently asked questions</H2>

          <div className="space-y-4">
            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">
                Which zodiac sign lies the most?
              </summary>
              <p className="text-text/85 leading-relaxed">
                No sign lies &ldquo;more&rdquo; than the others: each one lies
                <strong> differently</strong>. Gemini embellishes, Pisces escapes
                into vagueness, Scorpio conceals, Libra bends the truth to preserve
                harmony. A sign&apos;s lie reflects its main fragility, not a moral
                flaw specific to that sign.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">
                Why does each sign have a &ldquo;favorite&rdquo; lie?
              </summary>
              <p className="text-text/85 leading-relaxed">
                Because a person&apos;s most frequent lie protects what matters most
                to them: their <strong>image</strong> (Leo), their
                <strong> independence</strong> (Aquarius), their
                <strong> comfort</strong> (Taurus) or their
                <strong> vulnerability</strong> (Cancer, Scorpio). In astrology, that
                sensitive spot corresponds to the sign&apos;s elemental nature and
                its ruling planet.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">
                Can astrology detect a lie?
              </summary>
              <p className="text-text/85 leading-relaxed">
                No — astrology is not a lie detector. However, knowing a sign&apos;s
                temperament helps you understand <strong>what it protects</strong>
                when it lies: an &ldquo;I&apos;m fine&rdquo; from a Cancer
                doesn&apos;t mean the same thing as an &ldquo;I&apos;m fine&rdquo;
                from a Capricorn. It&apos;s a reading grid, not evidence.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">
                Is frequent lying written in the natal chart?
              </summary>
              <p className="text-text/85 leading-relaxed">
                The <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline decoration-white/30 hover:decoration-white/60 transition">natal chart</Link> doesn&apos;t
                doom anyone to lying. Certain placements
                (<Link href="/blog/mercurien" className="underline decoration-white/30 hover:decoration-white/60 transition">Mercury</Link> or
                <Link href="/blog/neptunien" className="underline decoration-white/30 hover:decoration-white/60 transition"> Neptune</Link> in
                hard aspect) make embellishing or dodging easier, but how you use
                them remains a choice. A chart shows tendencies, never fate.
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
