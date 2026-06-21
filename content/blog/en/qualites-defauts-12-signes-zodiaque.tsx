import type { ReactNode } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import { AUTHOR_PERSON, PUBLISHER_ORG } from "@/lib/seo";

const SITE_URL = "https://www.astro-cours.com";
const ARTICLE_URL = `${SITE_URL}/blog/qualites-defauts-12-signes-zodiaque`;
const COVER_URL = `${SITE_URL}/images/blog/sun-moon.webp`;

export const meta = {
  slug: "qualites-defauts-12-signes-zodiaque",
  title: "Strengths and weaknesses of the 12 zodiac signs",
  // ✅ Ahrefs SERP rewrite — Google uses a simple dash " - Astro Cours".
  seoTitle: "Strengths and weaknesses of the 12 zodiac signs - Astro Cours",
  description:
    "A serious, nuanced and educational study of the 12 zodiac signs: strengths, weaknesses, possible excesses, psychological dynamics and paths for growth.",
  date: "2026-03-11",
  tags: ["bases", "signe", "psychologie astrologique", "astrologie"],
  readingLevel: "débutant" as const,
  cover: "/images/blog/qualite-et-defaut-de-chaque-signe-du-zodiaque.webp",
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
        url: `${SITE_URL}/images/blog/sun-moon.webp`,
        width: 1200,
        height: 630,
        alt: "Illustration of the strengths and weaknesses of the 12 zodiac signs",
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
      hoverBorder: "group-hover:border-red-400/50",
      iconWrap: "border-red-500/25 bg-red-500/10",
      glow: "from-red-500/10 to-transparent",
      titleHover: "group-hover:text-red-200",
      linkText: "group-hover:text-red-100",
    };
  }

  if (element === "terre") {
    return {
      border: "border-emerald-500/30",
      hoverBorder: "group-hover:border-emerald-400/50",
      iconWrap: "border-emerald-500/25 bg-emerald-500/10",
      glow: "from-emerald-500/10 to-transparent",
      titleHover: "group-hover:text-emerald-200",
      linkText: "group-hover:text-emerald-100",
    };
  }

  if (element === "air") {
    return {
      border: "border-sky-500/30",
      hoverBorder: "group-hover:border-sky-400/50",
      iconWrap: "border-sky-500/25 bg-sky-500/10",
      glow: "from-sky-500/10 to-transparent",
      titleHover: "group-hover:text-sky-200",
      linkText: "group-hover:text-sky-100",
    };
  }

  return {
    border: "border-violet-500/30",
    hoverBorder: "group-hover:border-violet-400/50",
    iconWrap: "border-violet-500/25 bg-violet-500/10",
    glow: "from-violet-500/10 to-transparent",
    titleHover: "group-hover:text-violet-200",
    linkText: "group-hover:text-violet-100",
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

function Card({
  title,
  href,
  imageSrc,
  imageAlt,
  element,
  children,
}: {
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  element: ZodiacElement;
  children: ReactNode;
}) {
  const cardTitleId = `card-title-${title.toLowerCase()}`;
  const styles = getElementCardStyles(element);

  return (
    <article aria-labelledby={cardTitleId} className="h-full">
      <Link
        href={href}
        aria-labelledby={cardTitleId}
        aria-describedby={`${cardTitleId}-desc`}
        className={[
          "group relative block h-full overflow-hidden rounded-2xl border bg-black/20 p-6 shadow-soft transition",
          "hover:bg-white/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
          styles.border,
          styles.hoverBorder,
        ].join(" ")}
      >
        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${styles.glow} opacity-0 transition duration-300 group-hover:opacity-100`}
          aria-hidden="true"
        />

        <div className="relative flex justify-between">

          <h3
            id={cardTitleId}
            className={[
              "mt-4 text-lg md:text-xl font-semibold tracking-tight leading-tight text-text transition",
              styles.titleHover,
            ].join(" ")}
          >
            {title}
          </h3>
          <div
            className={`relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border ${styles.iconWrap}`}
            aria-hidden="true"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={72}
              height={72}
              className="h-auto w-auto object-contain opacity-95 transition group-hover:scale-[1.03]"
              sizes="72px"
            />
          </div>

        </div>

        <div
          id={`${cardTitleId}-desc`}
          className="relative mt-4 space-y-3 text-text/85 leading-relaxed"
        >
          {children}
        </div>

        <div className="relative mt-5 flex items-center justify-end">
          <span className={["text-sm text-text/70 transition", styles.linkText].join(" ")}>
            Read the sign's profile
          </span>
        </div>
      </Link>
    </article>
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

      <article className="space-y-10" >
        <header
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-7 shadow-soft"

        >
          <div
            className={`pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl ${glow}`}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative">
            <p className="text-sm text-text/65">Fundamental astrology</p>



            <p className="mt-4 max-w-2xl text-text/80 leading-relaxed">
              Each zodiac sign represents a particular way of
              relating to the world. These dynamics always have
              two sides:
              <strong> a constructive strength</strong> and
              <strong> a possible excess</strong>.
            </p>

            <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
              Understanding these polarities lets us move beyond the caricatures
              and approach the astrological signs as genuine
              <strong> psychological structures</strong>.
            </p>

            <div
              className="mt-5 flex flex-wrap gap-2"
              aria-label="Summary of the article's themes"
            >
              <Pill tone="violet">12 archetypes</Pill>
              <Pill tone="orange">Strengths</Pill>
              <Pill tone="emerald">Possible excesses</Pill>
              <Pill tone="sky">Psychological reading</Pill>
            </div>

            <div className="mt-4" aria-label="Article keywords">
              <TagPillsInline tags={meta.tags} />
            </div>
          </div>
        </header>

        {/* DEFINITION BOX — Featured Snippet */}
        <div className="rounded-2xl border border-violet-400/20 bg-violet-400/[0.04] px-6 py-5">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-300/80">Definition</p>
          <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
            The <strong>strengths and weaknesses of the zodiac signs</strong> correspond to the psychological traits associated with each Sun sign in astrology. Each of the 12 signs has natural strengths and shadow areas that color the personality, relationships and life choices.
          </p>
        </div>

        {/* APP INTRO */}
        <p className="text-lg leading-relaxed text-text/85">
          You know your <strong>star sign</strong>, but do you really know its strengths and weaknesses? Beyond the clichés, each zodiac sign has a unique blend of <strong>strengths and weaknesses</strong> that shapes its deeper personality. This guide reviews the 12 signs with clear eyes: strengths, flaws and paths for growth.
        </p>

        <section className="space-y-4" aria-labelledby="comprendre-dualite">
          <H2 id="comprendre-dualite">Understanding the duality of the signs</H2>

          <p className="text-text/85 leading-relaxed">
            No astrological sign is &ldquo;good&rdquo; or &ldquo;bad&rdquo;.
            Each sign represents a function of life.
            When it is balanced, it becomes a strength.
            When it is pushed to excess or poorly integrated,
            it can turn into a weakness.
          </p>

          <p className="text-text/85 leading-relaxed">
            Traditional astrology often speaks of
            <strong> virtues and vices</strong>, not to judge the person,
            but to show how one and the same energy can evolve toward its
            constructive form or toward its caricature.
          </p>
        </section>

        <section className="space-y-6" aria-labelledby="les-12-signes">
          <H2 id="les-12-signes">Strengths and weaknesses of the 12 signs</H2>

          <div
            className="grid gap-6 lg:grid-cols-2"
            role="list"
            aria-label="List of the 12 zodiac signs"
          >
            <Card
              title="Aries"
              href="/signes/belier"
              imageSrc="/images/zodiaque/belier.webp"
              imageAlt="Astrological symbol of Aries"
              element="feu"
            >
              <p>
                <strong>Strengths:</strong> courage, initiative, spontaneity,
                a capacity for quick action.
              </p>
              <p>
                Aries represents the initial impulse. It gives the energy to
                begin, to dive in, to make decisions when
                others hesitate.
              </p>
              <p>
                <strong>Possible weaknesses:</strong> impulsiveness, impatience,
                reactions that are too quick.
              </p>
              <p>
                When the energy of Aries is not mastered, action can
                become haste or pointless conflict.
              </p>
            </Card>

            <Card
              title="Taurus"
              href="/signes/taureau"
              imageSrc="/images/zodiaque/taureau.webp"
              imageAlt="Astrological symbol of Taurus"
              element="terre"
            >
              <p>
                <strong>Strengths:</strong> stability, constancy, endurance,
                a sense of the concrete.
              </p>
              <p>
                Taurus represents the ability to build over time,
                to preserve and to give solidity to things.
              </p>
              <p>
                <strong>Possible weaknesses:</strong> rigidity, inertia,
                excessive attachment.
              </p>
              <p>
                When stability becomes fixation, the person can resist
                change even when it becomes necessary.
              </p>
            </Card>

            <Card
              title="Gemini"
              href="/signes/gemeaux"
              imageSrc="/images/zodiaque/gemeaux.webp"
              imageAlt="Astrological symbol of Gemini"
              element="air"
            >
              <p>
                <strong>Strengths:</strong> quick intelligence, curiosity,
                adaptability, communication.
              </p>
              <p>
                Gemini symbolizes the mind in motion, able to observe,
                to connect and to understand quickly.
              </p>
              <p>
                <strong>Possible weaknesses:</strong> scattering, superficiality,
                mental restlessness.
              </p>
              <p>
                An excess of movement can prevent depth.
              </p>
            </Card>

            <Card
              title="Cancer"
              href="/signes/cancer"
              imageSrc="/images/zodiaque/cancer.webp"
              imageAlt="Astrological symbol of Cancer"
              element="eau"
            >
              <p>
                <strong>Strengths:</strong> sensitivity, intuition, protection,
                attachment.
              </p>
              <p>
                Cancer represents the emotional home, memory and the ability
                to nourish bonds.
              </p>
              <p>
                <strong>Possible weaknesses:</strong> touchiness, withdrawal,
                emotional dependence.
              </p>
              <p>
                When security becomes a fear of the world, emotion can lead
                to retreat.
              </p>
            </Card>

            <Card
              title="Leo"
              href="/signes/lion"
              imageSrc="/images/zodiaque/lion.webp"
              imageAlt="Astrological symbol of Leo"
              element="feu"
            >
              <p>
                <strong>Strengths:</strong> generosity, creativity, leadership,
                radiance.
              </p>
              <p>
                Leo represents the expression of individuality and the ability
                to inspire others.
              </p>
              <p>
                <strong>Possible weaknesses:</strong> pride, an excessive need
                for attention.
              </p>
              <p>
                When the need for recognition dominates, creativity can turn
                into a quest for validation.
              </p>
            </Card>

            <Card
              title="Virgo"
              href="/signes/vierge"
              imageSrc="/images/zodiaque/vierge.webp"
              imageAlt="Astrological symbol of Virgo"
              element="terre"
            >
              <p>
                <strong>Strengths:</strong> analysis, precision, an eye for detail,
                efficiency.
              </p>
              <p>
                Virgo represents the practical intelligence that improves and
                organizes the concrete world.
              </p>
              <p>
                <strong>Possible weaknesses:</strong> excessive criticism, anxiety,
                perfectionism.
              </p>
              <p>
                The pursuit of precision can become a difficulty in accepting
                imperfection.
              </p>
            </Card>

            <Card
              title="Libra"
              href="/signes/balance"
              imageSrc="/images/zodiaque/balance.webp"
              imageAlt="Astrological symbol of Libra"
              element="air"
            >
              <p>
                <strong>Strengths:</strong> diplomacy, a sense of justice,
                relational harmony.
              </p>
              <p>
                Libra symbolizes awareness of the other and the search
                for balance in relationships.
              </p>
              <p>
                <strong>Possible weaknesses:</strong> indecision, dependence on
                others' opinion.
              </p>
              <p>
                An excessive search for harmony can lead to avoiding necessary
                conflicts.
              </p>
            </Card>

            <Card
              title="Scorpio"
              href="/signes/scorpion"
              imageSrc="/images/zodiaque/scorpion.webp"
              imageAlt="Astrological symbol of Scorpio"
              element="eau"
            >
              <p>
                <strong>Strengths:</strong> lucidity, psychological depth,
                a power of transformation.
              </p>
              <p>
                Scorpio represents the ability to move through crises and to
                reach what is hidden.
              </p>
              <p>
                <strong>Possible weaknesses:</strong> mistrust, control,
                excessive intensity.
              </p>
              <p>
                When intensity becomes obsession, it can lead to
                conflict-ridden relationships.
              </p>
            </Card>

            <Card
              title="Sagittarius"
              href="/signes/sagittaire"
              imageSrc="/images/zodiaque/sagittaire.webp"
              imageAlt="Astrological symbol of Sagittarius"
              element="feu"
            >
              <p>
                <strong>Strengths:</strong> optimism, a broad vision, a spirit
                of adventure.
              </p>
              <p>
                Sagittarius symbolizes the expansion of consciousness, the quest
                for meaning and the exploration of the world.
              </p>
              <p>
                <strong>Possible weaknesses:</strong> excess, impatience, a tendency
                to flee limits.
              </p>
              <p>
                Enthusiasm can become recklessness when measure disappears.
              </p>
            </Card>

            <Card
              title="Capricorn"
              href="/signes/capricorne"
              imageSrc="/images/zodiaque/capricorne.webp"
              imageAlt="Astrological symbol of Capricorn"
              element="terre"
            >
              <p>
                <strong>Strengths:</strong> discipline, perseverance, a sense of
                responsibility.
              </p>
              <p>
                Capricorn represents patient building and the ability to
                reach a goal over the long term.
              </p>
              <p>
                <strong>Possible weaknesses:</strong> rigidity, harshness, pessimism.
              </p>
              <p>
                When caution becomes closure, the person can lose
                touch with spontaneity.
              </p>
            </Card>

            <Card
              title="Aquarius"
              href="/signes/verseau"
              imageSrc="/images/zodiaque/verseau.webp"
              imageAlt="Astrological symbol of Aquarius"
              element="air"
            >
              <p>
                <strong>Strengths:</strong> independence, originality, a collective
                vision.
              </p>
              <p>
                Aquarius represents the ability to think differently and to imagine
                new structures for society.
              </p>
              <p>
                <strong>Possible weaknesses:</strong> emotional distance,
                unpredictability.
              </p>
              <p>
                Independence can become excessive detachment or a difficulty in
                getting involved in relationships.
              </p>
            </Card>

            <Card
              title="Pisces"
              href="/signes/poissons"
              imageSrc="/images/zodiaque/poissons.webp"
              imageAlt="Astrological symbol of Pisces"
              element="eau"
            >
              <p>
                <strong>Strengths:</strong> empathy, imagination, intuition.
              </p>
              <p>
                Pisces represents sensitivity to the invisible world, to
                collective emotions and to the spiritual dimension of life.
              </p>
              <p>
                <strong>Possible weaknesses:</strong> confusion, escape, a lack of
                boundaries.
              </p>
              <p>
                When sensitivity becomes too great, the person can struggle
                to distinguish their own emotions from those of others.
              </p>
            </Card>
          </div>
        </section>

        <section className="space-y-4" aria-labelledby="conclusion-article">
          <H2 id="conclusion-article">Conclusion</H2>

          <p className="text-text/85 leading-relaxed">
            Astrological signs do not describe a whole person, but
            a <strong>fundamental energy</strong> that runs through their personality.
          </p>

          <p className="text-text/85 leading-relaxed">
            Maturity consists of developing the strengths of one's sign while
            recognizing its possible excesses.
          </p>

          <p className="text-text/85 leading-relaxed">
            It is in this tension between strength and excess that
            personal growth takes shape.
          </p>
        </section>

        {/* FAQ */}
        <section className="space-y-6" aria-labelledby="faq-qualites-defauts">
          <H2 id="faq-qualites-defauts">Frequently asked questions about the signs' strengths and weaknesses</H2>

          <div className="space-y-4">
            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">Which is the most intelligent sign?</summary>
              <p className="text-text/85 leading-relaxed">
                There is no single answer. <Link href="/signes/gemeaux" className="underline decoration-white/30 hover:decoration-white/60 transition">Gemini</Link> shines through mental quickness, <Link href="/signes/scorpion" className="underline decoration-white/30 hover:decoration-white/60 transition">Scorpio</Link> through depth of analysis, <Link href="/signes/vierge" className="underline decoration-white/30 hover:decoration-white/60 transition">Virgo</Link> through analytical rigor and <Link href="/signes/verseau" className="underline decoration-white/30 hover:decoration-white/60 transition">Aquarius</Link> through a sense of innovation. Intelligence takes different forms depending on each sign.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">Which sign has the most flaws?</summary>
              <p className="text-text/85 leading-relaxed">
                No sign has more flaws than another. Each sign has balanced strengths and weaknesses. What matters is awareness of one's patterns and the overall dynamic of the complete <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline decoration-white/30 hover:decoration-white/60 transition">natal chart</Link>.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">Do a sign's strengths change with the ascendant?</summary>
              <p className="text-text/85 leading-relaxed">
                Yes, the ascendant strongly nuances the personality of the Sun sign. An Aries with a Virgo ascendant will not express the same strengths as an Aries with a Sagittarius ascendant. See our guide on the <Link href="/blog/comprendre-signe-astrologique-ascendant-12-exemples" className="underline decoration-white/30 hover:decoration-white/60 transition">sign and ascendant</Link> to go deeper.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">Can you improve the weaknesses of your sign?</summary>
              <p className="text-text/85 leading-relaxed">
                Yes. Awareness of one's patterns is the first step toward growth. The complete <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline decoration-white/30 hover:decoration-white/60 transition">natal chart</Link> offers concrete paths for growth, and the <Link href="/transits" className="underline decoration-white/30 hover:decoration-white/60 transition">transits</Link> show the favorable periods for this inner work.
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
