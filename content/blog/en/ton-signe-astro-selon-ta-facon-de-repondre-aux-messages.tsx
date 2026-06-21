import type { ReactNode } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import { AUTHOR_PERSON, PUBLISHER_ORG, SITE_URL } from "@/lib/seo";

const ARTICLE_SLUG = "ton-signe-astro-selon-ta-facon-de-repondre-aux-messages";
const ARTICLE_URL = `${SITE_URL}/blog/${ARTICLE_SLUG}`;
const COVER_URL = `${SITE_URL}/images/blog/ton-signe-astro-selon-ta-facon-de-repondre-aux-messages.webp`;

export const meta = {
  slug: ARTICLE_SLUG,
  title: "Your Star Sign Based on How You Reply to Texts",
  seoTitle: "Your Sign Based on How You Reply to Texts — Astro Cours",
  description:
    "Seen, left on read, a 4-minute voice note or a one-word reply? Your star sign based on how you answer texts and DMs. Light, funny, surprisingly accurate.",
  date: "2026-05-19",
  tags: ["signe", "zodiaque", "psychologie astrologique", "astrologie"],
  readingLevel: "débutant" as const,
  cover: "/images/blog/ton-signe-astro-selon-ta-facon-de-repondre-aux-messages.webp",
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
        alt: "Your star sign based on how you reply to texts",
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
      bubbleOut: "bg-red-500/15 border-red-400/30 text-red-50",
    };
  }

  if (element === "terre") {
    return {
      border: "border-emerald-500/30",
      iconWrap: "border-emerald-500/25 bg-emerald-500/10",
      glow: "from-emerald-500/10 to-transparent",
      title: "text-emerald-200",
      bubbleOut: "bg-emerald-500/15 border-emerald-400/30 text-emerald-50",
    };
  }

  if (element === "air") {
    return {
      border: "border-sky-500/30",
      iconWrap: "border-sky-500/25 bg-sky-500/10",
      glow: "from-sky-500/10 to-transparent",
      title: "text-sky-200",
      bubbleOut: "bg-sky-500/15 border-sky-400/30 text-sky-50",
    };
  }

  return {
    border: "border-violet-500/30",
    iconWrap: "border-violet-500/25 bg-violet-500/10",
    glow: "from-violet-500/10 to-transparent",
    title: "text-violet-200",
    bubbleOut: "bg-violet-500/15 border-violet-400/30 text-violet-50",
  };
}

function H2({
  children,
  id,
}: {
  children: ReactNode;
  id: string;
}) {
  return (
    <h2
      id={id}
      className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight"
    >
      {children}
    </h2>
  );
}

function MessageBubble({
  side,
  meta: bubbleMeta,
  children,
  bubbleClass,
}: {
  side: "in" | "out";
  meta: string;
  children: ReactNode;
  bubbleClass?: string;
}) {
  const isOut = side === "out";

  return (
    <div className={`flex ${isOut ? "justify-end" : "justify-start"}`}>
      <div className="max-w-[85%]">
        <div
          className={[
            "rounded-2xl border px-4 py-3 text-[15px] leading-relaxed shadow-soft",
            isOut
              ? bubbleClass ?? "bg-white/10 border-white/15 text-white/90"
              : "bg-black/30 border-white/10 text-text/85",
            isOut ? "rounded-br-md" : "rounded-bl-md",
          ].join(" ")}
        >
          {children}
        </div>
        <p
          className={[
            "mt-1 text-[11px] uppercase tracking-widest text-text/45",
            isOut ? "text-right" : "text-left",
          ].join(" ")}
        >
          {bubbleMeta}
        </p>
      </div>
    </div>
  );
}

function SignSection({
  id,
  title,
  href,
  imageSrc,
  imageAlt,
  element,
  tagline,
  scenarioMessage,
  scenarioMeta,
  replyMessage,
  replyMeta,
  decryptage,
}: {
  id: string;
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  element: ZodiacElement;
  tagline: string;
  scenarioMessage: ReactNode;
  scenarioMeta: string;
  replyMessage: ReactNode;
  replyMeta: string;
  decryptage: ReactNode;
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

        <div className="relative mt-5 space-y-3">
          <MessageBubble side="in" meta={scenarioMeta}>
            {scenarioMessage}
          </MessageBubble>
          <MessageBubble
            side="out"
            meta={replyMeta}
            bubbleClass={styles.bubbleOut}
          >
            {replyMessage}
          </MessageBubble>
        </div>

        <div className="relative mt-5 rounded-xl border border-white/10 bg-black/30 p-4 text-text/85 leading-relaxed">
          <p className="text-xs font-semibold uppercase tracking-widest text-text/55">
            Astro breakdown
          </p>
          <div className="mt-1 space-y-2">{decryptage}</div>
        </div>

        <div className="relative mt-4 flex justify-end">
          <Link
            href={href}
            className="text-sm text-text/70 underline decoration-white/30 hover:decoration-white/60 transition"
          >
            Read the sign profile →
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
    inLanguage: "en",
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
        item: `${SITE_URL}/blog`,
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
        name: "Is my Sun sign enough to explain how I reply to texts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The Sun sign gives a broad tendency, but the ascendant, the position of Mercury (communication) and that of the Moon (emotions) fine-tune your relational style enormously. An Aries with a Virgo ascendant won't reply like an Aries with a Sagittarius ascendant.",
        },
      },
      {
        "@type": "Question",
        name: "Why do some signs take so long to reply?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Earth signs (Taurus, Capricorn) take their time by temperament: they reply when they're available, not before. Scorpio observes before acting. Aquarius simply forgets. It's not a lack of interest, it's a different relationship to time.",
        },
      },
      {
        "@type": "Question",
        name: "Which sign sends the never-ending voice notes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Leo, without hesitation. They'd rather tell the story than type it. Sagittarius and Pisces are also big voice-note fans, but for different reasons: one out of enthusiasm, the other out of emotion.",
        },
      },
      {
        "@type": "Question",
        name: "Does the position of Mercury really change the way you write?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, enormously. Mercury governs thought, language and communication. Mercury in an Air sign (Gemini, Libra, Aquarius) gives a fast, fluid, sometimes scattered style. Mercury in a Water sign (Cancer, Scorpio, Pisces) gives a style loaded with emotion, allusive, sometimes ambiguous.",
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
            <p className="text-sm text-text/65">Astrology &amp; communication</p>

            <p className="mt-4 max-w-2xl text-text/80 leading-relaxed">
              Seen at 2:32 pm. A 4-minute voice note. <strong>Four bubbles in a row</strong>.
              An &laquo; ok. &raquo; with a period. The way we reply to texts
              often says more than the content itself — and astrology has
              a few very funny theories on the subject.
            </p>

            <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
              We went through all 12 zodiac signs to decode their
              <strong> texting style</strong>. With a serious idea behind the wink:
              a sign&apos;s communication really flows from its <strong>elemental
              nature</strong> and from Mercury.
            </p>

            <div className="mt-5 flex flex-wrap gap-2" aria-label="Article themes">
              <Pill tone="rose">Texting style</Pill>
              <Pill tone="violet">12 archetypes</Pill>
              <Pill tone="sky">Communication</Pill>
              <Pill tone="orange">Light &amp; funny</Pill>
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
            The <strong>way you reply to texts</strong> reflects a person&apos;s astrological
            temperament: <strong>Fire</strong> signs reply fast and loud, <strong>Earth</strong>
            signs reply when it suits them, <strong>Air</strong> signs
            reply a lot and quickly, <strong>Water</strong> signs reply
            in subtext. Mercury and the Moon then fine-tune the individual style.
          </p>
        </div>

        {/* INTRO */}
        <section className="space-y-3" aria-labelledby="intro">
          <H2 id="intro">Why our texts give away our sign</H2>
          <p className="text-text/85 leading-relaxed">
            A text is three micro-decisions: <strong>when</strong> to reply,
            <strong> what</strong> to reply, <strong>how</strong> to write it. And those
            three decisions are driven by very precise psychic functions
            — our relationship to time, to others, to emotion. In other words, by the
            <strong> astrological elements</strong> and by the position of
            <Link href="/blog/mercurien" className="underline decoration-white/30 hover:decoration-white/60 transition"> Mercury</Link>.
          </p>
          <p className="text-text/85 leading-relaxed">
            What follows is deliberately exaggerated, but make no mistake:
            each description is rooted in the sign&apos;s real temperament. You&apos;re going to
            recognize someone. Probably yourself.
          </p>
        </section>

        {/* 12 SIGNES */}
        <section className="space-y-6" aria-labelledby="les-12-signes">
          <H2 id="les-12-signes">The 12 signs faced with an unread message</H2>

          <div className="grid gap-6">
            <SignSection
              id="belier"
              title="♈ Aries — replies before finishing reading"
              href="/signes/belier"
              imageSrc="/images/zodiaque/belier.webp"
              imageAlt="Astrological symbol of Aries"
              element="feu"
              tagline="“So, are we going out or not?”"
              scenarioMessage={<>Hey, what are you doing tonight?</>}
              scenarioMeta="You · 7:42 pm"
              replyMessage={<>Nothing im down where we going</>}
              replyMeta="Aries · 7:42 pm"
              decryptage={
                <>
                  <p>
                    Eleven seconds. No period, no comma, no neatly worded
                    follow-up question. <strong>Aries</strong> doesn&apos;t think, they act.
                    Mars, their planet, hates waiting.
                  </p>
                  <p className="text-text/70 text-sm">
                    Tip: if you want to see them hesitate, offer three options. They&apos;ll
                    pick one in under a minute. A good one? Not necessarily.
                  </p>
                </>
              }
            />

            <SignSection
              id="taureau"
              title="♉ Taurus — reads it, tidies up, will reply later"
              href="/signes/taureau"
              imageSrc="/images/zodiaque/taureau.webp"
              imageAlt="Astrological symbol of Taurus"
              element="terre"
              tagline="“I&apos;ll reply when I get a moment 🙂”"
              scenarioMessage={<>Did you see my message from yesterday?</>}
              scenarioMeta="You · 9:12 am"
              replyMessage={
                <>Yeah yeah I&apos;ll reply as soon as I get a moment 🙂</>
              }
              replyMeta="Taurus · 9:38 pm (12h later)"
              decryptage={
                <>
                  <p>
                    <strong>Taurus</strong> saw it. Taurus took note. Taurus
                    will reply. Just not now. Venus in Earth hates having
                    its tempo rushed: the reply will come when the context is comfortable —
                    not before.
                  </p>
                  <p className="text-text/70 text-sm">
                    Don&apos;t push. You won&apos;t speed anything up and you risk total
                    radio silence.
                  </p>
                </>
              }
            />

            <SignSection
              id="gemeaux"
              title="♊ Gemini — replies in four bubbles"
              href="/signes/gemeaux"
              imageSrc="/images/zodiaque/gemeaux.webp"
              imageAlt="Astrological symbol of Gemini"
              element="air"
              tagline="“wait / actually / no but basically”"
              scenarioMessage={<>Can you explain the thing to me?</>}
              scenarioMeta="You · 2:01 pm"
              replyMessage={
                <>
                  <span className="block">So</span>
                  <span className="block">wait</span>
                  <span className="block">basically it&apos;s this but</span>
                  <span className="block">no actually it depends</span>
                </>
              }
              replyMeta="Gemini · 2:01 pm (×4)"
              decryptage={
                <>
                  <p>
                    Four bubbles, two ideas, six tangents.
                    <strong> Gemini</strong> is ruled by Mercury — fast, associative
                    thought that bounces from one idea to the next. Typing
                    a single complete sentence would be a betrayal of their mental style.
                  </p>
                  <p className="text-text/70 text-sm">
                    Good news: they&apos;ll never ignore you. Bad news: they may also
                    answer something other than your original question.
                  </p>
                </>
              }
            />

            <SignSection
              id="cancer"
              title="♋ Cancer — “it&apos;s fine” (it&apos;s not fine)"
              href="/signes/cancer"
              imageSrc="/images/zodiaque/cancer.webp"
              imageAlt="Astrological symbol of Cancer"
              element="eau"
              tagline="The emoji that hides everything"
              scenarioMessage={<>Let&apos;s cancel tonight, I&apos;m wiped out.</>}
              scenarioMeta="You · 6:55 pm"
              replyMessage={<>Ah ok 😌 it&apos;s fine</>}
              replyMeta="Cancer · 6:56 pm"
              decryptage={
                <>
                  <p>
                    &laquo; it&apos;s fine &raquo; = it&apos;s not fine. The emoji is a trap.
                    <strong>Cancer</strong>, a lunar Water sign, takes it in silence
                    and leaves you to guess what&apos;s really going on.
                  </p>
                  <p className="text-text/70 text-sm">
                    If you get this message: call. Really. A 30-second voice note
                    is enough to dissolve 80% of the awkwardness.
                  </p>
                </>
              }
            />

            <SignSection
              id="lion"
              title="♌ Leo — replies with a 4-minute voice note"
              href="/signes/lion"
              imageSrc="/images/zodiaque/lion.webp"
              imageAlt="Astrological symbol of Leo"
              element="feu"
              tagline="“Hold on I&apos;ll send you a voice note it&apos;s easier”"
              scenarioMessage={<>Can you sum up the situation for me?</>}
              scenarioMeta="You · 11:14 am"
              replyMessage={<>🎙️ Voice note · 4:12</>}
              replyMeta="Leo · 11:14 am"
              decryptage={
                <>
                  <p>
                    <strong>Leo</strong> doesn&apos;t type, Leo tells the story. Solar, they
                    need to exist through their voice, their presence, their timing. The voice note
                    isn&apos;t a shortcut: it&apos;s a performance.
                  </p>
                  <p className="text-text/70 text-sm">
                    You&apos;ll listen, you&apos;ll smile, you&apos;ll forgive. That&apos;s the power
                    of Leo.
                  </p>
                </>
              }
            />

            <SignSection
              id="vierge"
              title="♍ Virgo — fixes your typo before replying"
              href="/signes/vierge"
              imageSrc="/images/zodiaque/vierge.webp"
              imageAlt="Astrological symbol of Virgo"
              element="terre"
              tagline="The asterisk is a declaration of love"
              scenarioMessage={<>Do you wanna come over saturday?</>}
              scenarioMeta="You · 5:00 pm"
              replyMessage={<>*want to. Yes, I&apos;d love to.</>}
              replyMeta="Virgo · 5:01 pm"
              decryptage={
                <>
                  <p>
                    The asterisk is love. <strong>Virgo</strong>, ruled
                    by Mercury in Earth, can&apos;t stand imprecision. Correcting you,
                    to them, is taking care of you.
                  </p>
                  <p className="text-text/70 text-sm">
                    A little advice: don&apos;t ask them &laquo; how are you? &raquo;,
                    they&apos;ll actually tell you.
                  </p>
                </>
              }
            />

            <SignSection
              id="balance"
              title="♎ Libra — replies by asking you the question back"
              href="/signes/balance"
              imageSrc="/images/zodiaque/balance.webp"
              imageAlt="Astrological symbol of Libra"
              element="air"
              tagline="“Whatever you prefer 🙂”"
              scenarioMessage={<>Which restaurant do you prefer?</>}
              scenarioMeta="You · 12:30 pm"
              replyMessage={
                <>Whatever you prefer works for me 🙂 and which ones are you torn between?</>
              }
              replyMeta="Libra · 1:02 pm"
              decryptage={
                <>
                  <p>
                    <strong>Libra</strong> doesn&apos;t decide, Libra harmonizes. Venus
                    in Air seeks consensus above all — and sometimes prefers not
                    to choose rather than risk disappointing.
                  </p>
                  <p className="text-text/70 text-sm">
                    If you really want an answer: offer <em>two</em> closed
                    options. Three, and you trigger an existential crisis.
                  </p>
                </>
              }
            />

            <SignSection
              id="scorpion"
              title="♏ Scorpio — seen, not answered, stays online"
              href="/signes/scorpion"
              imageSrc="/images/zodiaque/scorpion.webp"
              imageAlt="Astrological symbol of Scorpio"
              element="eau"
              tagline="Seen at 2:32 pm"
              scenarioMessage={<>Can we talk?</>}
              scenarioMeta="You · 2:31 pm"
              replyMessage={<>👁️ Seen at 2:32 pm</>}
              replyMeta="Scorpio · silence"
              decryptage={
                <>
                  <p>
                    <strong>Scorpio</strong> observes. Scorpio will decide. Not right
                    away. Pluto, their planet, hates replying in a rush —
                    and loves making you wait.
                  </p>
                  <p className="text-text/70 text-sm">
                    The silence is never innocent. It&apos;s a reply. It&apos;s up to you to
                    read it.
                  </p>
                </>
              }
            />

            <SignSection
              id="sagittaire"
              title="♐ Sagittarius — replies off-topic, but with enthusiasm"
              href="/signes/sagittaire"
              imageSrc="/images/zodiaque/sagittaire.webp"
              imageAlt="Astrological symbol of Sagittarius"
              element="feu"
              tagline="“Lol I forgot, but anyway you know what…”"
              scenarioMessage={<>Can you send me the doc we looked at yesterday?</>}
              scenarioMeta="You · 10:00 am"
              replyMessage={
                <>
                  Lol I totally forgot 😅 but anyway you know what, I saw a crazy
                  thing this morning
                </>
              }
              replyMeta="Sagittarius · 10:04 am"
              decryptage={
                <>
                  <p>
                    The doc will come. Maybe. Tomorrow. Next week.
                    <strong> Sagittarius</strong>, ruled by Jupiter, lives in the wide
                    angle: the little everyday details slip through their
                    fingers.
                  </p>
                  <p className="text-text/70 text-sm">
                    Tip: if you want the doc, ask again while offering them a coffee.
                    Then they&apos;ll think of it.
                  </p>
                </>
              }
            />

            <SignSection
              id="capricorne"
              title="♑ Capricorn — replies in one word"
              href="/signes/capricorne"
              imageSrc="/images/zodiaque/capricorne.webp"
              imageAlt="Astrological symbol of Capricorn"
              element="terre"
              tagline="“Ok.”"
              scenarioMessage={<>Want to grab lunch tomorrow?</>}
              scenarioMeta="You · 4:45 pm"
              replyMessage={<>Ok.</>}
              replyMeta="Capricorn · 4:46 pm"
              decryptage={
                <>
                  <p>
                    <strong>Capricorn</strong> said yes. No need for more. Subject
                    closed. Saturn, their planet, saves verbal energy the way you
                    save the resources of a long expedition.
                  </p>
                  <p className="text-text/70 text-sm">
                    Don&apos;t read coldness where there&apos;s only efficiency. If
                    Capricorn meant no, you&apos;d know it.
                  </p>
                </>
              }
            />

            <SignSection
              id="verseau"
              title="♒ Aquarius — replies 3 days later, about something else"
              href="/signes/verseau"
              imageSrc="/images/zodiaque/verseau.webp"
              imageAlt="Astrological symbol of Aquarius"
              element="air"
              tagline="“Here, check this thing out”"
              scenarioMessage={<>Did you get my message from Monday?</>}
              scenarioMeta="You · Thursday · 10:00 am"
              replyMessage={
                <>Here check out this article it&apos;s wild I just stumbled on it 👽</>
              }
              replyMeta="Aquarius · Thursday · 11:47 pm"
              decryptage={
                <>
                  <p>
                    <strong>Aquarius</strong> forgot your message. Aquarius has a
                    new obsession. Uranus, their planet, lives in the dazzling present —
                    ongoing conversations already belong to the past.
                  </p>
                  <p className="text-text/70 text-sm">
                    It&apos;s not contempt. It&apos;s just a brain that changes channel
                    without warning.
                  </p>
                </>
              }
            />

            <SignSection
              id="poissons"
              title="♓ Pisces — replies with a heart and an existential feeling"
              href="/signes/poissons"
              imageSrc="/images/zodiaque/poissons.webp"
              imageAlt="Astrological symbol of Pisces"
              element="eau"
              tagline="“I&apos;m listening to a song that makes me cry 💗”"
              scenarioMessage={<>What are you up to?</>}
              scenarioMeta="You · 10:14 pm"
              replyMessage={
                <>
                  I&apos;m not really sure, I&apos;m listening to a song that makes me cry 💗 how
                  are you?
                </>
              }
              replyMeta="Pisces · 10:16 pm"
              decryptage={
                <>
                  <p>
                    You didn&apos;t ask. And yet, everything is said.
                    <strong> Pisces</strong>, ruled by Neptune, don&apos;t separate
                    the practical from the emotional: every message is a chance for
                    a micro-confession.
                  </p>
                  <p className="text-text/70 text-sm">
                    Reply to them with a real question. They&apos;ll open up like rarely before.
                  </p>
                </>
              }
            />
          </div>
        </section>

        {/* SYNTHÈSE PAR ÉLÉMENT */}
        <section className="space-y-4" aria-labelledby="synthese-elements">
          <H2 id="synthese-elements">The summary by element</H2>

          <p className="text-text/85 leading-relaxed">
            If you remember four things about how people reply to texts according
            to astrology, they&apos;re the four <strong>elements</strong>.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-red-300/80">
                Fire · Aries · Leo · Sagittarius
              </p>
              <p className="mt-2 text-text/85 leading-relaxed">
                Reply <strong>fast</strong>, <strong>loud</strong>, and often
                before finishing reading. Voice notes, exclamations, typos owned.
                Energy first, precision after.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300/80">
                Earth · Taurus · Virgo · Capricorn
              </p>
              <p className="mt-2 text-text/85 leading-relaxed">
                Reply <strong>when it suits them</strong>. Short, clean,
                efficient. No frills. If you get an &laquo; ok. &raquo;, it&apos;s
                not cold: it&apos;s complete agreement.
              </p>
            </div>
            <div className="rounded-2xl border border-sky-500/30 bg-sky-500/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-sky-300/80">
                Air · Gemini · Libra · Aquarius
              </p>
              <p className="mt-2 text-text/85 leading-relaxed">
                Reply <strong>a lot</strong>, in several bubbles, and often
                with a question back. Conversation is their natural element —
                the conclusion, far less so.
              </p>
            </div>
            <div className="rounded-2xl border border-violet-500/30 bg-violet-500/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-violet-300/80">
                Water · Cancer · Scorpio · Pisces
              </p>
              <p className="mt-2 text-text/85 leading-relaxed">
                Reply <strong>in subtext</strong>. Emojis, silences, moods.
                The message says one thing, the emotion says three. To be read between the
                lines — always.
              </p>
            </div>
          </div>

          <p className="text-text/80 leading-relaxed">
            This communication style is further fine-tuned by the position of
            <Link href="/blog/mercurien" className="underline decoration-white/30 hover:decoration-white/60 transition"> Mercury</Link> and
            that of the <Link href="/blog/lunarien" className="underline decoration-white/30 hover:decoration-white/60 transition">Moon</Link> in
            the natal chart. A solar Scorpio with Mercury in Gemini won&apos;t be
            silent — they&apos;ll be intense <em>and</em> talkative. That&apos;s the whole point of a
            complete <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline decoration-white/30 hover:decoration-white/60 transition"> natal chart</Link>.
          </p>
        </section>

        {/* CONCLUSION */}
        <section className="space-y-3" aria-labelledby="conclusion">
          <H2 id="conclusion">And you, do you recognize yourself?</H2>
          <p className="text-text/85 leading-relaxed">
            If you laughed (or gritted your teeth) reading your sign, it&apos;s probably
            because your Sun sign is strongly dominant in you. If nothing
            resembles you, look toward your ascendant or your Mercury: that&apos;s
            often where your real communication style hides.
          </p>
          <p className="text-text/85 leading-relaxed">
            And next time someone leaves you on &laquo; seen &raquo; for
            three hours, ask yourself: maybe it&apos;s just a Taurus finishing
            their meal.
          </p>
        </section>

        {/* FAQ */}
        <section className="space-y-6" aria-labelledby="faq-messages-signes">
          <H2 id="faq-messages-signes">Frequently asked questions</H2>

          <div className="space-y-4">
            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">
                Is my Sun sign enough to explain how I reply to texts?
              </summary>
              <p className="text-text/85 leading-relaxed">
                No. The Sun sign gives a broad tendency, but the
                <Link href="/blog/comprendre-signe-astrologique-ascendant-12-exemples" className="underline decoration-white/30 hover:decoration-white/60 transition">
                  ascendant
                </Link>, the position of
                <Link href="/blog/mercurien" className="underline decoration-white/30 hover:decoration-white/60 transition"> Mercury</Link> (communication) and that of the
                <Link href="/blog/lunarien" className="underline decoration-white/30 hover:decoration-white/60 transition"> Moon</Link> (emotions) fine-tune
                your relational style enormously. An Aries with a Virgo ascendant won&apos;t reply like
                an Aries with a Sagittarius ascendant.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">
                Why do some signs take so long to reply?
              </summary>
              <p className="text-text/85 leading-relaxed">
                <strong>Earth</strong> signs (Taurus, Capricorn) take their
                time by temperament: they reply when they&apos;re available, not
                before. <strong>Scorpio</strong> observes before acting.
                <strong> Aquarius</strong> simply forgets. It&apos;s not a lack of
                interest, it&apos;s a different relationship to time.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">
                Which sign sends the never-ending voice notes?
              </summary>
              <p className="text-text/85 leading-relaxed">
                <strong>Leo</strong>, without hesitation. They&apos;d rather tell the story than type it.
                <strong>Sagittarius</strong> and <strong>Pisces</strong> are also
                big voice-note fans, but for different reasons:
                one out of enthusiasm, the other out of emotion.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">
                Does the position of Mercury really change the way you write?
              </summary>
              <p className="text-text/85 leading-relaxed">
                Yes, enormously. <strong>Mercury</strong> governs thought, language
                and communication. Mercury in an Air sign (Gemini, Libra, Aquarius)
                gives a fast, fluid, sometimes scattered style. Mercury in a Water
                sign (Cancer, Scorpio, Pisces) gives a style loaded with emotion,
                allusive, sometimes ambiguous. It&apos;s often Mercury, more than the Sun, that
                decides your “texting style.”
              </p>
            </details>
          </div>
        </section>

        <nav aria-label="End-of-article navigation">
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
