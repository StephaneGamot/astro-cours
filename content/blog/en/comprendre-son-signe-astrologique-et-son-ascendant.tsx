import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import { AUTHOR_PERSON, PUBLISHER_ORG, SITE_URL } from "@/lib/seo";

const ARTICLE_URL = `${SITE_URL}/blog/comprendre-signe-astrologique-ascendant-12-exemples`;
const COVER_URL = `${SITE_URL}/images/blog/soleil-et-asc.webp`;

export const meta = {
  slug: "comprendre-signe-astrologique-ascendant-12-exemples",
  title: "Astrological Sign and Ascendant: Understanding the Difference",
  seoTitle: "Sun sign & ascendant: the difference — Astro Cours",
  description:
    "Understand the difference between Sun sign and ascendant through 12 concrete, hands-on examples. Test your knowledge right now!",
  socialTitle:
    "Astrological sign and ascendant: finally understand the difference",
  socialDescription:
    "The Sun sign and the ascendant do not say the same thing. Discover their difference through 12 clear, concrete and hands-on examples.",
  date: "2026-03-08",
  tags: ["bases", "signe", "ascendant", "débutant", "exemples"],
  readingLevel: "débutant" as const,
  cover: "/images/blog/soleil-et-asc.webp",
  ogImage: COVER_URL,
  ogImageAlt:
    "Educational illustration on the difference between astrological sign and ascendant",
  type: "article" as const,
  articleSection: "Astrology",
  readingTime: "6–8 min",
  articleUrl: ARTICLE_URL,
};



function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm text-text/65">
      <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
      {children}
    </span>
  );
}

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
      {children}
    </h2>
  );
}

function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-lg md:text-xl font-semibold tracking-tight leading-tight">
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
  const box =
    tone === "warn"
      ? "border-yellow-500/30 bg-yellow-500/10"
      : tone === "ok"
      ? "border-emerald-500/30 bg-emerald-500/10"
      : "border-white/10 bg-white/5";

  const emoji = tone === "warn" ? "⚠️" : tone === "ok" ? "✅" : "📌";

  return (
    <div className={`rounded-2xl border p-4 ${box}`}>
      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-text/90">
        <span>{emoji}</span>
        <span>{title}</span>
      </div>
      <div className="text-text/85 leading-relaxed space-y-2">{children}</div>
    </div>
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
    <section className="rounded-2xl border border-white/10 bg-black/20 p-6 shadow-soft">
      <div>
        <H3>{title}</H3>
        {subtitle ? <p className="mt-1 text-sm text-text/60">{subtitle}</p> : null}
      </div>
      <div className="mt-4 space-y-3 text-text/85 leading-relaxed">{children}</div>
    </section>
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




function PortraitCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-white/10 bg-black/20 p-6 shadow-soft">
      <h3 className="text-lg md:text-xl font-semibold tracking-tight leading-tight">
        {title}
      </h3>
      <div className="mt-4 space-y-3 text-text/85 leading-relaxed">
        {children}
      </div>
    </section>
  );
}
export default function Post() {
  const glow = getGlowFromTags(meta.tags);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: meta.title,
        description: meta.description,
        image: COVER_URL,
        datePublished: `${meta.date}T12:00:00Z`,
        dateModified: `${meta.date}T12:00:00Z`,
        url: ARTICLE_URL,
        mainEntityOfPage: { "@type": "WebPage", "@id": ARTICLE_URL },
        author: AUTHOR_PERSON,
        publisher: PUBLISHER_ORG,
        inLanguage: "en",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: meta.title, item: ARTICLE_URL },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the difference between an astrological sign and an ascendant?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The Sun sign describes the deep identity, what one seeks to become. The ascendant describes the way one presents oneself to the world, the visible style and spontaneous behaviour.",
            },
          },
          {
            "@type": "Question",
            name: "Why can two people of the same sign seem very different?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Because the ascendant changes the way one enters the world. A Cancer with an Aries ascendant will seem more direct, while a Cancer with a Virgo ascendant will seem more discreet. The core may be similar, but the appearance changes.",
            },
          },
          {
            "@type": "Question",
            name: "How do you read the Sun + Ascendant combination?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The Sun answers “who am I deep down?” and the ascendant answers “how do I present myself and react spontaneously?”. Combining the two gives a more accurate reading than the sign alone.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <div className="space-y-10">
      {/* HERO */}
      <header className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-7 shadow-soft">
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl ${glow}`}
        />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

        <div className="relative">
          <Kicker>Sun sign &amp; Ascendant</Kicker>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            <strong>Astrological sign and ascendant</strong>: you probably
            know your Sun sign, but you do not always recognise yourself
            in the general descriptions. That is often because
            you are not taking your{" "}
            <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline decoration-white/30 hover:decoration-white/60 transition">ascendant</Link> into account.
          </p>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            The problem? Without this piece, you read your{" "}
            <Link href="/planetes/soleil" className="underline decoration-white/30 hover:decoration-white/60 transition">Sun</Link>{" "}
            as if it were the whole chart. The result: you miss
            what makes you unique (and recognisable).
          </p>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            Here you will find the difference between the two, then{" "}
            <strong>12 concrete combinations</strong> to finally place yourself
            — without clichés, with nuance.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <Pill tone="violet">Sun = identity</Pill>
            <Pill tone="orange">Ascendant = the way you enter the world</Pill>
            <Pill tone="emerald">144 combinations</Pill>
            <Pill tone="sky">Level: beginner</Pill>
          </div>

          <div className="mt-3">
            <TagPillsInline tags={meta.tags} />
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <Stat label="Sun sign" value="Centre of the personality" />
            <Stat label="Ascendant" value="Visible style / behaviour" />
            <Stat label="Goal" value="Recognise yourself concretely" />
          </div>
        </div>
      </header>

      {/* DEFINITION BOX — Featured Snippet */}
      <div className="rounded-2xl border border-amber-400/20 bg-amber-400/[0.04] px-6 py-5">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-300/80">Definition</p>
        <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
          The <strong>astrological sign</strong> (or Sun sign) corresponds to the position of the Sun at birth, while the <strong>ascendant</strong> reflects the sign that was rising on the horizon at the exact moment of birth. Together, they form the fundamental pair of any interpretation of the <Link href="/blog/qu-est-ce-qu-un-theme-astral">natal chart</Link>.
        </p>
      </div>

      {/* APP INTRO */}
      <p className="text-lg leading-relaxed text-text/85">
        Are you a Leo but you do not recognise yourself at all in the descriptions of your <strong>astrological sign</strong>? It is probably because your <strong>ascendant</strong> tells a whole other story. This confusion affects 90% of astrology beginners. Thanks to 12 concrete Sun + Ascendant combinations, you will finally understand why these two elements change everything.
      </p>

      <section className="space-y-4">
        <H2>1) Astrological sign: why it does not describe your whole personality</H2>

        <Card title="The Sun is only one part of the chart">
          <p>
            The <strong>Sun sign</strong> shows the deep identity,
            the way of existing at the centre, what one seeks to become.
          </p>
          <p>
            But in real life, others do not first perceive your Sun:
            they often meet your <strong>ascendant</strong>.
          </p>
          <p>
            That is why two people of the same sign can seem very different.
          </p>
        </Card>

        <Callout title="Key takeaway">
          The Sun sign describes the <strong>centre</strong>.
          The ascendant describes the <strong>doorway</strong>.
        </Callout>
      </section>

      <section className="space-y-4">
        <H2>2) Sun sign and ascendant: what is the real difference?</H2>

        <Card title="The combination that makes the reading come alive">
          <p>
            A <strong>Cancer Sun</strong> with an <strong>Aries ascendant</strong>
            will not approach the world like a <strong>Cancer Sun</strong> with a
            <strong> Virgo ascendant</strong>.
          </p>
          <p>
            The first may seem more direct, more combative, more incisive.
            The second will often seem more discreet, more attentive, more measured.
          </p>
          <p>
            The core may be similar, but the way of acting and showing oneself changes a great deal.
          </p>
        </Card>

        <Callout tone="ok" title="A good reading method">
          Always read it this way:
          <br />
          <strong>Who am I deep down?</strong> → Sun
          <br />
          <strong>How do I present myself and react spontaneously?</strong> → Ascendant
        </Callout>
      </section>

     <section className="space-y-4">
  <H2>3) 12 concrete examples of Sun + Ascendant combinations</H2>

  <div className="grid gap-6 lg:grid-cols-2">
    <PortraitCard title="Aries Sun — Cancer Ascendant">
      <p>
        At first glance, this person does not always give the image of a pure Aries.
        They may seem more sensitive, more cautious, more protective than outright combative.
        Yet, inside, there is indeed an Aries will: a need to move forward, to make decisions, not to stay passive.
      </p>
      <p>
        The contrast comes from the fact that the Sun in Aries wants to act fast,
        while the Cancer ascendant filters everything through emotion and the need for security.
        The result: you often have someone who can seem gentle or reserved at first,
        but who becomes surprisingly firm when it comes to defending their loved ones, their space or what matters to them.
      </p>
      <p>
        The strength of this combination lies in a rare alliance between protective instinct and the capacity for action.
        The challenge is to avoid swinging between emotional restraint and abrupt reactions.
      </p>
    </PortraitCard>

    <PortraitCard title="Taurus Sun — Leo Ascendant">
      <p>
        Here, the stability of Taurus meets the radiance of Leo.
        Above all, the person seeks something solid, lasting, concrete,
        but they do so with a more assertive, warmer, sometimes more visible presence than a classic Taurus.
      </p>
      <p>
        The Taurus Sun wants to build, preserve, put down roots.
        The Leo ascendant gives a way of presenting oneself that draws more attention:
        a taste for the beautiful, a need to be esteemed, a nobler or more expressive way of occupying space.
      </p>
      <p>
        You often find someone loyal to their values, attached to quality, but who does not only want to own:
        they also want to shine through what they build. The point to watch concerns wounded pride,
        or the difficulty of letting go of what feeds the self-image.
      </p>
    </PortraitCard>

    <PortraitCard title="Gemini Sun — Scorpio Ascendant">
      <p>
        This combination is often deeper than it looks.
        The Sun in Gemini gives a taste for ideas, exchanges, mental movement,
        but the Scorpio ascendant brings an intensity, a psychological density and a capacity for observation that completely change the colour of the whole (a bit like a{" "}
        <Link href="/blog/conjonction-melange-des-forces" className="underline decoration-white/30 hover:decoration-white/60 transition">conjunction</Link>).
      </p>
      <p>
        Seen from the outside, the person can seem hard to read, selective, almost secretive.
        Yet, inside, the mind moves a lot, questions, compares, connects.
        This is not a "light" Gemini: it is a Gemini who wants to understand what lies behind the words.
      </p>
      <p>
        The strength of this combination lies in a very fine psychological intelligence.
        The challenge is not to turn curiosity into mistrust or over-analysis.
      </p>
    </PortraitCard>

    <PortraitCard title="Cancer Sun — Aries Ascendant">
      <p>
        This is one of the most interesting blends of sensitivity and combativeness.
        The Cancer Sun seeks security, attachment, a stable inner world.
        The Aries ascendant gives a much more direct way of reacting and entering the world.
      </p>
      <p>
        The person can be very emotional, yet not appear fragile.
        On the contrary, they often come across as lively, quick, able to make decisions on the spot.
        Deep down, however, they are more sensitive than they let on.
      </p>
      <p>
        This combination often produces very good protectors: people who fight not only for themselves,
        but for what they love. The point to watch concerns emotional anger,
        or defensive reactions when an intimate wound is touched.
      </p>
    </PortraitCard>

    <PortraitCard title="Leo Sun — Virgo Ascendant">
      <p>
        Leo wants to shine, to create, to express its singularity.
        But with a Virgo ascendant, this light passes through a more discreet filter,
        more controlled, more concerned with doing things well.
      </p>
      <p>
        Here you do not have a purely flamboyant Leo.
        You often have someone who wants to be recognised, but who cannot bear being approximate.
        The person wants to shine, yes, but on something serious, mastered, dignified.
      </p>
      <p>
        This can produce very fine personalities: creative but precise, generous but useful,
        solar but not superficial. The main challenge (as the{" "}
        <Link href="/dictionnaire-astrologique" className="underline decoration-white/30 hover:decoration-white/60 transition">astrological dictionary</Link> shows) is not to stifle the creative impulse
        through excessive self-criticism or perfectionism.
      </p>
    </PortraitCard>

    <PortraitCard title="Virgo Sun — Sagittarius Ascendant">
      <p>
        Here is a combination that seeks to connect precision and horizon.
        The Sun in Virgo wants to understand, sort, improve, make things useful.
        The Sagittarius ascendant brings more openness, frankness, movement and sometimes visible optimism.
      </p>
      <p>
        On first contact, the person often appears freer or more expansive than a classic Virgo.
        But deep down, they remain very attentive to detail, to consistency, to the real quality of things.
        This is often someone who needs meaning, but also method.
      </p>
      <p>
        This combination can produce excellent teachers, mentors or educational profiles:
        people able to explain complex things clearly.
        Also discover the{" "}
        <Link href="/blog/qualites-defauts-12-signes-zodiaque" className="underline decoration-white/30 hover:decoration-white/60 transition">qualities and flaws of the 12 signs</Link>.
        The point of attention lies in the tension between rigour and the endless urge to broaden.
      </p>
    </PortraitCard>

    <PortraitCard title="Libra Sun — Capricorn Ascendant">
      <p>
        The Libra Sun seeks harmony, balance and relational fairness.
        With a Capricorn ascendant, this quest becomes more restrained, more structured, more controlled.
      </p>
      <p>
        The person does not immediately give an impression of lightness or sociability.
        They may seem serious, sober, sometimes distant.
        Yet, deep down, they have a real need for connection, relational elegance, a fair accord with others.
      </p>
      <p>
        This blend often gives a strong sense of bearing, respect and responsibility in{" "}
        <Link href="/blog/amour-fidelite-signes-zodiaque" className="underline decoration-white/30 hover:decoration-white/60 transition">relationships</Link>.
        The challenge is not to lock down emotional expression too much, nor to confuse control with maturity.
      </p>
    </PortraitCard>

    <PortraitCard title="Scorpio Sun — Sagittarius Ascendant">
      <p>
        This combination is often more open in appearance than one would imagine.
        The Scorpio Sun experiences things intensely, seeks truth, refuses the superficial.
        The Sagittarius ascendant brings a more mobile, franker, sometimes more joyful way of entering the world.
      </p>
      <p>
        You may face someone who smiles easily, speaks with momentum, gives an impression of movement,
        whereas deep down they analyse, feel and go through far more than they show.
        This often creates very lively personalities, but also more complex ones than they appear.
      </p>
      <p>
        The strength here is the ability to combine depth and breath.
        The challenge is not to flee inner intensity through a need for escape or immediate space.
      </p>
    </PortraitCard>

    <PortraitCard title="Sagittarius Sun — Pisces Ascendant">
      <p>
        Sagittarius wants to understand, to go further, to widen its horizon.
        The Pisces ascendant adds sensitivity, intuition, a form of porosity to the world.
      </p>
      <p>
        This often gives idealistic, inspired people drawn to the quest for meaning,
        but less loud or demonstrative than a more "pure fire" Sagittarius.
        They advance less by enthusiasm alone than by inner feeling.
      </p>
      <p>
        It is a beautiful combination for everything to do with transmission, spirituality,
        mentoring or inspired creation. The point to watch concerns the risk
        of idealising the path instead of truly embodying the chosen direction.
      </p>
    </PortraitCard>

    <PortraitCard title="Capricorn Sun — Libra Ascendant">
      <p>
        Here, the solidity of Capricorn is tinged with relational elegance.
        The Sun in Capricorn wants to build, to hold, to advance over time.
        The Libra ascendant gives a softer, more diplomatic, more socially fluid way of presenting oneself.
      </p>
      <p>
        The person may seem more approachable than a classic Capricorn,
        while keeping a strong inner standard.
        They do not charge ahead any old way: they measure, observe, adjust, then advance.
      </p>
      <p>
        This combination often gives fine maturity in human relations:
        an ability to cooperate without giving up one's goals. The challenge lies in the tendency to smooth over tensions too much
        or to sacrifice one's personal axis to keep the peace.
      </p>
    </PortraitCard>

    <PortraitCard title="Aquarius Sun — Taurus Ascendant">
      <p>
        The Aquarius Sun seeks freedom, originality, a way of thinking outside the box.
        The Taurus ascendant gives a much calmer, stable, reassuring and embodied presence.
      </p>
      <p>
        Here you often have someone who appears calm, consistent, almost classic at first sight,
        whereas deep down the mind works differently, with a real need for independence and singularity.
        This creates a very interesting contrast between the outside and the inside.
      </p>
      <p>
        The strength of this combination lies in its ability to make concrete what, in other Aquarians,
        would remain only conceptual. The point to watch concerns the tension between the need for stability and the need for rupture.
      </p>
    </PortraitCard>

    <PortraitCard title="Pisces Sun — Capricorn Ascendant">
      <p>
        This combination unites a very sensitive inner world with a more structured façade.
        The Sun in Pisces perceives atmospheres, feels subtly, picks up what circulates between people.
        The Capricorn ascendant gives a more controlled, serious and reserved way of appearing.
      </p>
      <p>
        The person can therefore seem solid, almost distant, while in reality they are very receptive.
        They show little, filter a lot, but feel deeply (the{" "}
        <Link href="/blog/pleine-lune-nouvelle-lune-cycles-astrologie" className="underline decoration-white/30 hover:decoration-white/60 transition">Full Moon</Link>{" "}
        can amplify this feeling).
        This often gives sensitive personalities who learned early to stand on their own.
      </p>
      <p>
        The strength of this combination lies in the ability to give a form to intuition,
        to channel the imagination, to make a great sensitivity useful.
        The challenge is not to harden the protection so much that it stifles the inner life.
      </p>
    </PortraitCard>
  </div>
</section>


      <section className="space-y-4">
        <H2>4) How to interpret your sign and ascendant together</H2>

        <Card title="The true meaning of this reading">
          <p>
            The Sun sign shows <strong>the inner direction</strong>.
          </p>
          <p>
            The ascendant shows <strong>the way of existing in the visible world</strong>.
          </p>
          <p>
            When you combine the two (and add the{" "}
            <Link href="/transits" className="underline decoration-white/30 hover:decoration-white/60 transition">transits</Link>), you finally move beyond descriptions that are too general
            and enter a more accurate, more human, more recognisable astrology.
            To go even further, explore{" "}
            <Link href="/synastrie" className="underline decoration-white/30 hover:decoration-white/60 transition">synastry</Link>{" "}
            (compatibility between charts).
          </p>
        </Card>

        <Callout tone="warn" title="An important limit">
          <p>
            Even with 12 examples, this does not replace the complete reading of the chart:
            the{" "}
            <Link href="/planetes/lune" className="underline decoration-white/30 hover:decoration-white/60 transition">Moon</Link>, Mercury,{" "}
            <Link href="/blog/venus-en-signes-style-amoureux" className="underline decoration-white/30 hover:decoration-white/60 transition">Venus</Link>,{" "}
            <Link href="/blog/mars-en-signes-desir-libido-action" className="underline decoration-white/30 hover:decoration-white/60 transition">Mars</Link>, the{" "}
            <Link href="/maisons/maison-1" className="underline decoration-white/30 hover:decoration-white/60 transition">houses</Link> and the{" "}
            <Link href="/aspects" className="underline decoration-white/30 hover:decoration-white/60 transition">aspects</Link> strongly modify the whole.
          </p>
        </Callout>
      </section>

      <section className="rounded-2xl border border-white/10 bg-black/20 p-6">
        <p className="text-sm text-text/60">Continue reading</p>
        <div className="mt-3 space-y-2 text-text/85">
          <p>
            Discover{" "}
            <Link href="/blog/venus-en-signes-style-amoureux" className="underline decoration-white/30 hover:decoration-white/60 transition font-semibold text-text/95">Venus in the signs</Link>{" "}
            to understand your love style, or{" "}
            <Link href="/blog/quel-type-de-sportif-selon-signe-astrologique" className="underline decoration-white/30 hover:decoration-white/60 transition font-semibold text-text/95">what athlete you are by your sign</Link>.
          </p>
        </div>
        <div className="mt-4">
          <Link
            href="/blog"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-text/90 hover:bg-white/10 transition"
          >
            ← All articles
          </Link>
        </div>
      </section>

    </div>
    </>
  );
}
