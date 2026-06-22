import type { ReactNode } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import { AUTHOR_PERSON, PUBLISHER_ORG, SITE_URL } from "@/lib/seo";

const ARTICLE_SLUG = "quel-type-de-sportif-selon-signe-astrologique";
const ARTICLE_URL = `${SITE_URL}/blog/${ARTICLE_SLUG}`;
const COVER_URL = `${SITE_URL}/images/blog/le-sporti-que-vous-etres-selon-votre-signe-astrologique.webp`;

export const meta = {
  slug: ARTICLE_SLUG,
  title: "Which sport suits your zodiac sign?",
  description:
    "Which sport suits your zodiac sign? A serious analysis of the 12 signs: relationship to effort, competitive spirit, endurance and ideal sports.",
  date: "2026-02-18",
  tags: ["sport", "signe", "psychologie astrologique", "astrologie"],
  readingLevel: "débutant" as const,
  cover: "/images/blog/le-sporti-que-vous-etres-selon-votre-signe-astrologique.webp",
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
        alt: "What kind of athlete are you according to your zodiac sign?",
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
      subtitle: "text-red-200/80",
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
      subtitle: "text-emerald-200/80",
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
      subtitle: "text-sky-200/80",
    };
  }

  return {
    border: "border-violet-500/30",
    hoverBorder: "group-hover:border-violet-400/50",
    iconWrap: "border-violet-500/25 bg-violet-500/10",
    glow: "from-violet-500/10 to-transparent",
    titleHover: "group-hover:text-violet-200",
    linkText: "group-hover:text-violet-100",
    subtitle: "text-violet-200/80",
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

function SignSportCard({
  title,
  href,
  imageSrc,
  imageAlt,
  subtitle,
  element,
  children,
}: {
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  subtitle: string;
  element: ZodiacElement;
  children: ReactNode;
}) {
  const titleId = `sport-card-${title.toLowerCase()}`;
  const styles = getElementCardStyles(element);

  return (
    <article aria-labelledby={titleId} className="h-full">
      <Link
        href={href}
        aria-labelledby={titleId}
        aria-describedby={`${titleId}-desc`}
        className={[
          "group relative block h-full overflow-hidden rounded-2xl border bg-black/20 p-6 shadow-soft transition",
          "hover:bg-white/[0.04] focus:outline-none focus-visible:ring-2",
          "focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
          styles.border,
          styles.hoverBorder,
        ].join(" ")}
      >
        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${styles.glow} opacity-0 transition duration-300 group-hover:opacity-100`}
          aria-hidden="true"
        />

        <div className="relative flex items-start gap-4">
          <div
            className={`relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border ${styles.iconWrap}`}
            aria-hidden="true"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={64}
              height={64}
              className="h-auto w-auto object-contain opacity-95 transition group-hover:scale-[1.03]"
              sizes="64px"
            />
          </div>

          <div className="min-w-0 flex-1">
            <h3
              id={titleId}
              className={[
                "text-lg md:text-xl font-semibold tracking-tight leading-tight text-text transition",
                styles.titleHover,
              ].join(" ")}
            >
              {title}
            </h3>
            <p className={`mt-1 text-sm ${styles.subtitle}`}>{subtitle}</p>
          </div>
        </div>

        <div
          id={`${titleId}-desc`}
          className="relative mt-5 space-y-3 text-text/85 leading-relaxed"
        >
          {children}
        </div>

        <div className="relative mt-5 flex items-center justify-end">
          <span className={["text-sm text-text/70 transition", styles.linkText].join(" ")}>
            Read the sign's profile →
          </span>
        </div>
      </Link>
    </article>
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
        inLanguage: "en",
        mainEntityOfPage: { "@type": "WebPage", "@id": ARTICLE_URL },
        author: AUTHOR_PERSON,
        publisher: PUBLISHER_ORG,
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
            name: "Which sport should you choose based on your zodiac sign?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Each sign has a different relationship to effort. Fire signs (Aries, Leo, Sagittarius) prefer intensity and competition. Earth signs (Taurus, Virgo, Capricorn) excel at endurance. Air signs (Gemini, Libra, Aquarius) enjoy technical sports. Water signs (Cancer, Scorpio, Pisces) look for feeling.",
            },
          },
          {
            "@type": "Question",
            name: "Does the zodiac sign determine athletic performance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No, the sign doesn't determine performance. It sheds light on a way of inhabiting effort: competition, endurance, technique or the search for harmony. The complete natal chart (Mars, ascendant, houses) gives a more precise picture.",
            },
          },
          {
            "@type": "Question",
            name: "Which planet influences sport in astrology?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Mars is the main planet of sport and physical effort. It describes how we take action, the way we expend ourselves and the type of energy we mobilize. The Sun sign rounds out this reading.",
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

      <article className="space-y-10">
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
            <p className="text-sm text-text/65">Astrology & personality</p>



            <p className="mt-4 max-w-2xl text-text/80 leading-relaxed">
              <strong>Which sport suits your zodiac sign?</strong> Each
              sign has a different relationship to effort, competition and the
              joy of movement. In your{" "}
              <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline decoration-white/30 hover:decoration-white/60 transition">natal chart</Link>,
              it's mainly{" "}
              <Link href="/blog/mars-en-signes-desir-libido-action" className="underline decoration-white/30 hover:decoration-white/60 transition">Mars</Link>{" "}
              that describes the way you expend your energy.
            </p>

            <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
              The problem? You're often told "Aries = boxing" or "Pisces =
              yoga" with no nuance. The result: you don't recognize yourself, and you miss
              a practice that would truly suit you.
            </p>

            <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
              Here is a serious analysis of the 12 athletic profiles: relationship to effort,
              motivation, endurance, ideal type of discipline — without clichés.
            </p>

            <div className="mt-5 flex flex-wrap gap-2" aria-label="Article summary">
              <Pill tone="violet">Sport & energy</Pill>
              <Pill tone="orange">Temperament</Pill>
              <Pill tone="emerald">Motivation</Pill>
              <Pill tone="sky">Psychology</Pill>
            </div>

            <div className="mt-4" aria-label="Article keywords">
              <TagPillsInline tags={meta.tags} />
            </div>
          </div>
        </header>

        {/* ── Definition (Featured Snippet) ── */}
        <section className="rounded-2xl border border-emerald-400/25 bg-emerald-400/5 p-5 sm:p-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400 mb-3">Definition</p>
          <p className="text-sm leading-relaxed text-text/80 md:text-base">
            <strong>Sport and astrology</strong> are connected through the elements (fire, earth, air, water), the position of <Link href="/planetes/mars" className="text-emerald-300 underline decoration-emerald-300/30 underline-offset-2 transition-colors hover:text-emerald-200">Mars</Link> and the Sun sign. Each zodiac sign has distinct physical aptitudes and an athletic temperament that naturally point toward certain disciplines.
          </p>
        </section>

        {/* ── APP intro ── */}
        <p className="text-text/85 leading-relaxed">
          Which <strong>sport should you practice based on your zodiac sign</strong>? Beyond mere entertainment, your sign reveals physical aptitudes and an athletic temperament that predispose you to certain disciplines. Discover the athletic profile of the 12 zodiac signs, with concrete recommendations and strengths.
        </p>

        <section className="space-y-4" aria-labelledby="sport-et-astrologie">
          <H2 id="sport-et-astrologie">Sport and astrology: a logic of energy</H2>

          <p className="text-text/85 leading-relaxed">
            Sport isn't experienced the same way by everyone.
            Some people love head-on competition, others technical mastery,
            duration, exploration or flow.
          </p>

          <p className="text-text/85 leading-relaxed">
            The Sun sign isn't enough to sum up a natal chart (the <Link href="/blog/comprendre-signe-astrologique-ascendant-12-exemples" className="underline decoration-white/30 hover:decoration-white/60 transition">ascendant</Link> and the{" "}
            <Link href="/aspects" className="underline decoration-white/30 hover:decoration-white/60 transition">aspects</Link> count too), but it already gives
            an interesting indication of the general style with which a person
            approaches effort and movement.
          </p>
        </section>

        <section className="space-y-6" aria-labelledby="les-12-profils">
          <H2 id="les-12-profils">The 12 athletic profiles by sign</H2>

          <div className="grid gap-6 lg:grid-cols-2">
            <SignSportCard
              title="Bélier"
              href="/signes/belier"
              imageSrc="/images/zodiaque/belier.webp"
              imageAlt="Astrological symbol of Aries"
              subtitle="The instinctive competitor"
              element="feu"
            >
              <p>
                Aries loves immediate action, challenges and the intensity of the present.
                It often has a spontaneous relationship to sport: moving, measuring up,
                gaining ground.
              </p>
              <p>
                Fast, competitive disciplines suit it particularly well:
                martial arts, sprinting, boxing, cross-training or high-tempo team sports.
              </p>
              <p>
                Its main challenge is to channel its impulse so as not to confuse
                performance with haste.
              </p>
            </SignSportCard>

            <SignSportCard
              title="Taureau"
              href="/signes/taureau"
              imageSrc="/images/zodiaque/taureau.webp"
              imageAlt="Astrological symbol of Taurus"
              subtitle="The endurance athlete"
              element="terre"
            >
              <p>
                Taurus advances less through explosiveness than through continuity.
                It may take a while to get going, but it holds on.
              </p>
              <p>
                It appreciates regular, concrete, embodied disciplines:
                hiking, swimming, cycling, strength training, endurance practices.
              </p>
              <p>
                Its challenge isn't so much brutal overreaching as perseverance
                and the quality of the rhythm.
              </p>
            </SignSportCard>

            <SignSportCard
              title="Gémeaux"
              href="/signes/gemeaux"
              imageSrc="/images/zodiaque/gemeaux.webp"
              imageAlt="Astrological symbol of Gemini"
              subtitle="The agile athlete"
              element="air"
            >
              <p>
                Gemini loves activities that stimulate both the body
                and the mind. Its energy flows through movement, coordination,
                quickness of response.
              </p>
              <p>
                It often feels at ease in technical, playful or mobile sports:
                tennis, badminton, climbing, varied disciplines.
              </p>
              <p>
                The challenge is to avoid scattering its focus and to keep enough consistency
                to truly progress.
              </p>
            </SignSportCard>

            <SignSportCard
              title="Cancer"
              href="/signes/cancer"
              imageSrc="/images/zodiaque/cancer.webp"
              imageAlt="Astrological symbol of Cancer"
              subtitle="The emotional athlete"
              element="eau"
            >
              <p>
                Cancer rarely practices physical activity solely for performance.
                It needs to feel a connection with the body, with well-being or inner security.
              </p>
              <p>
                Sports linked to water, breath or recentering often suit it:
                swimming, water aerobics, walking, yoga, practices of gentle activity.
              </p>
              <p>
                Its motivation increases when sport becomes a way of taking care of itself.
              </p>
            </SignSportCard>

            <SignSportCard
              title="Lion"
              href="/signes/lion"
              imageSrc="/images/zodiaque/lion.webp"
              imageAlt="Astrological symbol of Leo"
              subtitle="The spectacular athlete"
              element="feu"
            >
              <p>
                Leo loves to express its power and feel that it shines through its body.
                It often needs a sport that lets it push itself with flair.
              </p>
              <p>
                Dance, athletics, team sports, stage disciplines or visible
                practices suit it well.
              </p>
              <p>
                Its challenge is to learn that progress matters as much as recognition.
              </p>
            </SignSportCard>

            <SignSportCard
              title="Vierge"
              href="/signes/vierge"
              imageSrc="/images/zodiaque/vierge.webp"
              imageAlt="Astrological symbol of Virgo"
              subtitle="The methodical athlete"
              element="terre"
            >
              <p>
                Virgo loves to understand movements, improve technique,
                refine efficiency. It often approaches sport with seriousness.
              </p>
              <p>
                Pilates, fitness, technical sports, progression routines
                and precision disciplines suit it particularly well.
              </p>
              <p>
                The risk is turning physical activity into excessive demands
                or constant self-assessment.
              </p>
            </SignSportCard>

            <SignSportCard
              title="Balance"
              href="/signes/balance"
              imageSrc="/images/zodiaque/balance.webp"
              imageAlt="Astrological symbol of Libra"
              subtitle="The aesthetic athlete"
              element="air"
            >
              <p>
                Libra seeks harmony, balance and the beauty of movement.
                It is often drawn to disciplines where the gesture matters as much as the effort.
              </p>
              <p>
                Dance, yoga, skating, artistic sports or practices linked to alignment
                suit it well.
              </p>
              <p>
                Its main driver isn't the brutality of performance,
                but the quality of the form.
              </p>
            </SignSportCard>

            <SignSportCard
              title="Scorpion"
              href="/signes/scorpion"
              imageSrc="/images/zodiaque/scorpion.webp"
              imageAlt="Astrological symbol of Scorpio"
              subtitle="The intense athlete"
              element="eau"
            >
              <p>
                Scorpio possesses a deep energy, often more powerful
                than it appears. It handles intensity and pushing limits well.
              </p>
              <p>
                Combat sports, committed training, intense effort,
                extreme practices or physical transformation speak to it more.
              </p>
              <p>
                Its challenge is not to use sport solely as a release,
                but also as a discipline of mastery.
              </p>
            </SignSportCard>

            <SignSportCard
              title="Sagittaire"
              href="/signes/sagittaire"
              imageSrc="/images/zodiaque/sagittaire.webp"
              imageAlt="Astrological symbol of Sagittarius"
              subtitle="The explorer athlete"
              element="feu"
            >
              <p>
                Sagittarius naturally connects sport, freedom and space.
                It loves moving outdoors, feeling alive, exploring.
              </p>
              <p>
                Hiking, skiing, horse riding, trail running, adventure sports or outdoor activities
                suit it very well.
              </p>
              <p>
                It needs meaning and horizon: pure effort without openness bores it quickly.
              </p>
            </SignSportCard>

            <SignSportCard
              title="Capricorne"
              href="/signes/capricorne"
              imageSrc="/images/zodiaque/capricorne.webp"
              imageAlt="Astrological symbol of Capricorn"
              subtitle="The disciplined athlete"
              element="terre"
            >
              <p>
                Capricorn instinctively understands that progress takes time.
                It can excel in sports that reward consistency.
              </p>
              <p>
                Weight training, endurance, mountaineering, structured training,
                progressive work and measurable goals suit it well.
              </p>
              <p>
                Its trap is being too hard on itself or reducing sport to performance.
              </p>
            </SignSportCard>

            <SignSportCard
              title="Verseau"
              href="/signes/verseau"
              imageSrc="/images/zodiaque/verseau.webp"
              imageAlt="Astrological symbol of Aquarius"
              subtitle="The original athlete"
              element="air"
            >
              <p>
                Aquarius doesn't always like classic athletic frameworks.
                It often prefers alternative, original or freer practices.
              </p>
              <p>
                Board sports, urban sports, new disciplines, unconventional group practices
                or innovative formats attract it more.
              </p>
              <p>
                It needs to feel free in its relationship to movement.
              </p>
            </SignSportCard>

            <SignSportCard
              title="Poissons"
              href="/signes/poissons"
              imageSrc="/images/zodiaque/poissons.webp"
              imageAlt="Astrological symbol of Pisces"
              subtitle="The intuitive athlete"
              element="eau"
            >
              <p>
                Pisces often experiences sport as an experience of feeling.
                It needs a practice that connects body, breath, emotion or imagination.
              </p>
              <p>
                Swimming, dance, yoga, fluid practices, activities linked to water
                or to letting go often suit it.
              </p>
              <p>
                The challenge is to keep a framework stable enough that motivation doesn't dissolve.
              </p>
            </SignSportCard>
          </div>
        </section>

        <section className="space-y-4" aria-labelledby="conclusion-article">
          <H2 id="conclusion-article">Conclusion</H2>

          <p className="text-text/85 leading-relaxed">
            The zodiac sign doesn't determine a single sport,
            but it sheds light on a way of inhabiting effort:
            competition, endurance, technique, exploration or the search for harmony.
            For a more complete reading, also look at the position of your{" "}
            <Link href="/maisons/maison-1" className="underline decoration-white/30 hover:decoration-white/60 transition">house 1</Link>{" "}
            (relationship to the body) and your current{" "}
            <Link href="/transits" className="underline decoration-white/30 hover:decoration-white/60 transition">transits</Link>.
          </p>

          <p className="text-text/85 leading-relaxed">
            Understanding this dynamic often makes it possible to choose a practice
            that is more natural, more motivating and more sustainable. Discover also the{" "}
            <Link href="/blog/qualites-defauts-12-signes-zodiaque" className="underline decoration-white/30 hover:decoration-white/60 transition">strengths and weaknesses of the 12 signs</Link>{" "}
            or the{" "}
            <Link href="/dictionnaire-astrologique" className="underline decoration-white/30 hover:decoration-white/60 transition">astrological dictionary</Link>{" "}
            to dig deeper.
          </p>
        </section>

        {/* ── FAQ ── */}
        <section className="space-y-4" aria-labelledby="faq-sport-astrologie">
          <h2 id="faq-sport-astrologie" className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
            Frequently asked questions: sport and astrology
          </h2>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-6 space-y-5">
            <div>
              <p className="font-semibold text-text/90">Which sign is the most athletic?</p>
              <p className="mt-2 text-text/80 leading-relaxed">
                Aries and Sagittarius (fire signs, ruled or stimulated by <Link href="/planetes/mars" className="underline decoration-white/30 hover:decoration-white/60 transition">Mars</Link>) are often the most competitive and the most drawn to sport. But each sign has its own strengths: endurance for earth, technique for air, fluidity for water.
              </p>
            </div>

            <div>
              <p className="font-semibold text-text/90">Does Mars influence athletic abilities?</p>
              <p className="mt-2 text-text/80 leading-relaxed">
                Yes, Mars by sign and by house indicates the type of physical energy you mobilize. A Mars in Aries will be explosive, a Mars in Taurus enduring, a Mars in Gemini versatile.
              </p>
            </div>

            <div>
              <p className="font-semibold text-text/90">Can you become good at a sport that goes against your sign?</p>
              <p className="mt-2 text-text/80 leading-relaxed">
                Yes, the ascendant, the position of Mars and personal will count too. The Sun sign gives a natural tendency, but it doesn't set a limit.
              </p>
            </div>

            <div>
              <p className="font-semibold text-text/90">Which element has the most endurance?</p>
              <p className="mt-2 text-text/80 leading-relaxed">
                Earth (Taurus, Virgo, Capricorn) excels at endurance and resistance. These signs last over time and recover well thanks to their natural consistency.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-black/20 p-6">
          <p className="text-sm text-text/60">Continue reading</p>
          <div className="mt-3 space-y-2 text-text/85">
            <p>
              Explore{" "}
              <Link href="/blog/venus-en-signes-style-amoureux" className="underline decoration-white/30 hover:decoration-white/60 transition font-semibold text-text/95">Venus through the signs</Link>{" "}
              to understand your love style, or{" "}
              <Link href="/blog/amour-fidelite-signes-zodiaque" className="underline decoration-white/30 hover:decoration-white/60 transition font-semibold text-text/95">love and faithfulness by sign</Link>.
            </p>
          </div>
          <div className="mt-4">
            <Link
              href="/blog"
              className="inline-flex rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-text/90 transition hover:bg-white/10"
            >
              ← All articles
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
