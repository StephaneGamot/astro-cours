import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import Image from "next/image";
import { AUTHOR_PERSON, PUBLISHER_ORG } from "@/lib/seo";

const SITE_URL = "https://www.astro-cours.com";
const ARTICLE_URL = `${SITE_URL}/blog/amour-fidelite-signes-zodiaque`;
const COVER_URL = `${SITE_URL}/images/blog/amour-fidelite-signes-zodiaque.webp`;

export const meta = {
  slug: "amour-fidelite-signes-zodiaque",
  title: "Love and Fidelity of the 12 Zodiac Signs",
  description:
    "How each zodiac sign experiences love and fidelity: emotional needs, romantic compatibility. Discover the love patterns of your sign.",
  date: "2026-03-18",
  tags: ["amour", "relations", "signe", "psychologie astrologique", "compatibilité"],
  readingLevel: "débutant" as const,
  cover: "/images/blog/amour-fidelite-signes-zodiaque.webp",
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
        alt: "Love and fidelity according to the zodiac signs",
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
          "group relative block h-full overflow-hidden rounded-2xl",
          "border bg-black/20 p-6 shadow-soft transition",
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
            Read the sign profile
          </span>
        </div>
      </Link>
    </article>
  );
}

type CompatibilityTone =
  | "feu"
  | "terre"
  | "air"
  | "eau"
  | "feu-air"
  | "terre-eau";

  function getCompatibilityStyles(tone: CompatibilityTone) {
  if (tone === "feu") {
    return {
      border: "border-red-500/30",
      bg: "bg-red-500/[0.06]",
      badge: "border-red-500/25 bg-red-500/10 text-red-200",
      title: "text-red-100",
      glow: "from-red-500/10 to-transparent",
    };
  }

  if (tone === "terre") {
    return {
      border: "border-emerald-500/30",
      bg: "bg-emerald-500/[0.06]",
      badge: "border-emerald-500/25 bg-emerald-500/10 text-emerald-200",
      title: "text-emerald-100",
      glow: "from-emerald-500/10 to-transparent",
    };
  }

  if (tone === "air") {
    return {
      border: "border-sky-500/30",
      bg: "bg-sky-500/[0.06]",
      badge: "border-sky-500/25 bg-sky-500/10 text-sky-200",
      title: "text-sky-100",
      glow: "from-sky-500/10 to-transparent",
    };
  }

  if (tone === "eau") {
    return {
      border: "border-violet-500/30",
      bg: "bg-violet-500/[0.06]",
      badge: "border-violet-500/25 bg-violet-500/10 text-violet-200",
      title: "text-violet-100",
      glow: "from-violet-500/10 to-transparent",
    };
  }

  if (tone === "feu-air") {
    return {
      border: "border-orange-400/30",
      bg: "bg-gradient-to-br from-red-500/[0.06] to-sky-500/[0.06]",
      badge: "border-orange-400/25 bg-orange-400/10 text-orange-100",
      title: "text-orange-100",
      glow: "from-orange-400/10 to-transparent",
    };
  }

  return {
    border: "border-teal-400/30",
    bg: "bg-gradient-to-br from-emerald-500/[0.06] to-violet-500/[0.06]",
    badge: "border-teal-400/25 bg-teal-400/10 text-teal-100",
    title: "text-teal-100",
    glow: "from-teal-400/10 to-transparent",
  };
}

function Badge({
  children,
  tone = "default",
  className = "",
}: {
  children: ReactNode;
  tone?: "default" | "soft" | "strong";
  className?: string;
}) {
  const styles =
    tone === "strong"
      ? "border-white/20 bg-white/10 text-white"
      : tone === "soft"
        ? "border-white/10 bg-white/5 text-text/85"
        : "border-white/10 bg-black/20 text-text/90";

  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium tracking-wide ${styles} ${className}`}
    >
      {children}
    </span>
  );
}

const signsOverview = [
  {
    sign: "Aries",
    href: "/signes/belier",
    fidelity: "Moderate to strong",
    need: "Passion, movement, intensity",
    risk: "Impulsiveness, quick boredom",
  },
  {
    sign: "Taurus",
    href: "/signes/taureau",
    fidelity: "Very strong",
    need: "Security, stability, sensuality",
    risk: "Possessiveness, inertia",
  },
  {
    sign: "Gemini",
    href: "/signes/gemeaux",
    fidelity: "Variable",
    need: "Dialogue, lightness, stimulation",
    risk: "Scattered focus, ambiguity",
  },
  {
    sign: "Cancer",
    href: "/signes/cancer",
    fidelity: "Strong",
    need: "Protection, emotional bond, tenderness",
    risk: "Emotional dependency, withdrawal",
  },
  {
    sign: "Leo",
    href: "/signes/lion",
    fidelity: "Strong when the heart is nourished",
    need: "Admiration, warmth, loyalty",
    risk: "Pride, excessive need for attention",
  },
  {
    sign: "Virgo",
    href: "/signes/vierge",
    fidelity: "Strong",
    need: "Trust, consistency, everyday stability",
    risk: "Criticism, emotional restraint",
  },
  {
    sign: "Libra",
    href: "/signes/balance",
    fidelity: "Moderate to strong",
    need: "Harmony, relational elegance, dialogue",
    risk: "Indecision, diffuse charm",
  },
  {
    sign: "Scorpio",
    href: "/signes/scorpion",
    fidelity: "Very strong or a clean break",
    need: "Fusion, truth, emotional intensity",
    risk: "Jealousy, control, obsession",
  },
  {
    sign: "Sagittarius",
    href: "/signes/sagittaire",
    fidelity: "Good when free",
    need: "Space, enthusiasm, a shared horizon",
    risk: "Flight, instability, rejection of constraints",
  },
  {
    sign: "Capricorn",
    href: "/signes/capricorne",
    fidelity: "Very strong",
    need: "Commitment, solidity, mutual respect",
    risk: "Coldness, emotional rigidity",
  },
  {
    sign: "Aquarius",
    href: "/signes/verseau",
    fidelity: "Particular but real",
    need: "Freedom, mental complicity, uniqueness",
    risk: "Distance, unpredictability",
  },
  {
    sign: "Pisces",
    href: "/signes/poissons",
    fidelity: "Sensitive but shifting",
    need: "Fusion, gentleness, inspiration, empathy",
    risk: "Vagueness, idealization, lack of boundaries",
  },
];

const compatibilities = [
  {
    title: "Fire unions: passion and momentum",
    signs: "Aries, Leo, Sagittarius",
    tone: "feu" as const,
    text: "Between fire signs, love feeds on enthusiasm, desire, vital momentum and mutual admiration. These relationships can be very alive and very stimulating, but also more unstable if no one regulates the intensity or the ego.",
  },
  {
    title: "Earth unions: stability and building together",
    signs: "Taurus, Virgo, Capricorn",
    tone: "terre" as const,
    text: "Earth signs often seek serious, concrete and lasting relationships. Attachment is expressed through reliability, continuity and presence. The bond is solid, but it can lack spontaneity if the relationship becomes too predictable.",
  },
  {
    title: "Air unions: exchange and mental affinity",
    signs: "Gemini, Libra, Aquarius",
    tone: "air" as const,
    text: "Air signs come together through dialogue, relational intelligence and the flow of ideas. Love is often born from mental complicity. The risk is staying in a conceptual or social relationship without always descending deep enough into emotion.",
  },
  {
    title: "Water unions: sensitivity and depth",
    signs: "Cancer, Scorpio, Pisces",
    tone: "eau" as const,
    text: "Between water signs, the emotional bond can be powerful, intuitive and deeply enveloping. There is a strong need for fusion, trust and emotional sharing. These relationships are often profound, but they can become too intense or too fusional without a clear framework.",
  },
  {
    title: "Fire and air: natural attraction",
    signs: "Aries/Leo/Sagittarius with Gemini/Libra/Aquarius",
    tone: "feu-air" as const,
    text: "Fire is often stimulated by air. One brings the momentum, the other the movement and the thinking. This combination favors seduction, mobility and lightness. It works very well when emotional depth is not neglected.",
  },
  {
    title: "Earth and water: constructive compatibility",
    signs: "Taurus/Virgo/Capricorn with Cancer/Scorpio/Pisces",
    tone: "terre-eau" as const,
    text: "Earth secures water, and water humanizes earth. This is one of the most fertile combinations for building over time: one brings structure, the other sensitivity. The challenge is to avoid excessive dependency or emotional control.",
  },
];

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
        name: "Which zodiac sign is the most faithful in love?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "There is no single sign that is universally the most faithful. In astrology, fidelity depends on the structure of the sign, but also on the natal chart, emotional maturity and the way the relationship meets one's deepest needs.",
        },
      },
      {
        "@type": "Question",
        name: "Are water signs more loving?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Water signs often express love with more sensitivity, emotional depth and a need for fusion. This does not mean they love better, but that they love differently.",
        },
      },
      {
        "@type": "Question",
        name: "Does romantic compatibility depend only on the Sun sign?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The Sun sign gives a first indication, but a serious study of compatibility also requires examining Venus, Mars, the Moon, the Ascendant and the overall dynamics of the natal chart.",
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
        {/* HERO */}
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
            <p className="text-sm text-text/65">Relational astrology</p>



            <p className="mt-4 max-w-2xl text-text/80 leading-relaxed">
              Loving does not mean the same thing to everyone. Some signs seek
              above all
              <strong> emotional security</strong>, others
              <strong> passion</strong>,
              <strong> freedom</strong>,
              <strong> psychological depth</strong> or
              <strong> emotional fusion</strong>.
            </p>

            <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
              Looking at love through the zodiac signs helps us better understand
              how each one bonds, commits, protects, desires or sometimes turns
              away from the relationship.
            </p>

            <div
              className="mt-5 flex flex-wrap gap-2"
              aria-label="Summary of the article's themes"
            >
              <Pill tone="rose">Love</Pill>
              <Pill tone="violet">Fidelity</Pill>
              <Pill tone="sky">Compatibilities</Pill>
              <Pill tone="emerald">Psychological reading</Pill>
            </div>

            <div className="mt-4" aria-label="Article keywords">
              <TagPillsInline tags={meta.tags} />
            </div>
          </div>
        </header>

        {/* DEFINITION BOX — Featured Snippet */}
        <div className="rounded-2xl border border-rose-400/20 bg-rose-400/[0.04] px-6 py-5">
          <p className="text-sm font-semibold uppercase tracking-widest text-rose-300/80">Definition</p>
          <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
            <strong>Love and fidelity in astrology</strong> are analyzed through the Sun sign, the position of <Link href="/planetes/venus">Venus</Link> and the <Link href="/maisons/maison-7">seventh house</Link> of the <Link href="/blog/qu-est-ce-qu-un-theme-astral">natal chart</Link>. Each zodiac sign has a distinct emotional pattern that deeply influences the way it loves, commits and stays faithful.
          </p>
        </div>

        {/* APP INTRO */}
        <p className="text-lg leading-relaxed text-text/85">
          Is your partner <strong>faithful according to their zodiac sign</strong>? This burning question deserves better than the usual clichés. In reality, each zodiac sign experiences love according to an emotional pattern of its own — and fidelity does not mean the same thing for an Aries as it does for a Scorpio. Discover the 12 complete love portraits, with emotional needs, strengths and areas of fragility.
        </p>

        {/* INTRO */}
        <section className="space-y-4" aria-labelledby="intro-article">
          <H2 id="intro-article">Loving is not only feeling</H2>

          <p className="text-text/85 leading-relaxed">
            In astrology, love is not reduced to an abstract feeling. It
            expresses itself through a psychological structure: the way we
            desire, bond, trust, endure over time or accept the other person's
            freedom.
          </p>

          <p className="text-text/85 leading-relaxed">
            Fidelity, too, takes several forms. For some signs, it means
            continuity and security. For others, it requires above all
            sincerity, intensity or inner loyalty, even if the relationship must
            stay mobile in order not to fade away.
          </p>
        </section>

        {/* TABLEAU */}
        <section className="space-y-6" aria-labelledby="tableau-comparatif">
          <H2 id="tableau-comparatif">
            Comparison table: fidelity, emotional need and relational risk
          </H2>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-soft">
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-sm">
                <thead className="bg-white/[0.04]">
                  <tr className="text-left">
                    <th scope="col" className="px-5 py-4 font-semibold text-white">Sign</th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Fidelity
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Main need
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Relational risk
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {signsOverview.map((item, index) => (
                    <tr
                      key={item.sign}
                      className={
                        index % 2 === 0
                          ? "border-t border-white/10"
                          : "border-t border-white/10 bg-white/[0.02]"
                      }
                    >
                      <td className="px-5 py-4 align-top">
                        <Link
                          href={item.href}
                          className="font-medium text-white transition hover:text-text"
                        >
                          {item.sign}
                        </Link>
                      </td>
                      <td className="px-5 py-4 align-top text-text/85">
                        {item.fidelity}
                      </td>
                      <td className="px-5 py-4 align-top text-text/85">
                        {item.need}
                      </td>
                      <td className="px-5 py-4 align-top text-text/85">
                        {item.risk}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-sm text-text/65 leading-relaxed">
            This table gives an overview. In practice, a more serious romantic
            analysis also requires observing Venus, Mars, the Moon, the
            Ascendant and the aspects of the natal chart.
          </p>
        </section>

        {/* LES 12 SIGNES */}
        <section className="space-y-6" aria-labelledby="les-12-signes">
          <H2 id="les-12-signes">How each sign experiences love and fidelity</H2>

          <div className="grid gap-6 lg:grid-cols-2">
      <Card
  title="Aries"
  href="/signes/belier"
  imageSrc="/images/zodiaque/belier.webp"
  imageAlt="Astrological symbol of Aries"
  element="feu"
>
              <p>
                Aries loves with frankness, intensity and immediacy. It seeks
                the living fire of the relationship, the momentum, the conquest,
                the feeling of being fully engaged in something that vibrates.
              </p>
              <p>
                Its fidelity exists when it feels alive within the bond. This
                sign is not necessarily unfaithful by nature, but it copes
                poorly with routine, passivity or emotional stagnation.
              </p>
              <p>
                <strong>Essential need:</strong> passion, direct truth,
                shared energy.
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
                Taurus loves over the long haul. It seeks a concrete,
                reassuring, embodied, stable bond. Its love is often expressed
                through presence, constancy, sensuality and the capacity to
                endure.
              </p>
              <p>
                It is one of the most naturally faithful signs once it is deeply
                attached. It dislikes instability and prefers to build rather
                than scatter its energy.
              </p>
              <p>
                <strong>Essential need:</strong> security, trust,
                emotional continuity.
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
                Gemini often falls in love through the mind. Words, curiosity,
                the liveliness of the exchange, humor and the sensation of
                movement are essential to them.
              </p>
              <p>
                Their fidelity depends largely on the quality of the mental
                bond. If the relationship becomes heavy, repetitive or closed
                off, they may detach — not for lack of heart, but out of a need
                for air and renewal.
              </p>
              <p>
                <strong>Essential need:</strong> dialogue, mobility,
                intellectual stimulation.
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
                Cancer loves deeply, emotionally, often with a great emotional
                memory. It invests in the bond as a space of protection, trust
                and belonging.
              </p>
              <p>
                Its fidelity is generally strong when it feels secure. It needs
                a love that reassures, envelops and respects its sensitivity.
              </p>
              <p>
                <strong>Essential need:</strong> tenderness, attachment,
                emotional security.
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
                Leo loves with warmth, nobility, generosity and intensity of
                heart. It needs to live a clear, owned, proud love that gives
                meaning to its radiance.
              </p>
              <p>
                It can be very faithful when it feels loved, admired and chosen
                with sincerity. But it suffers when love becomes lukewarm,
                ordinary or belittling.
              </p>
              <p>
                <strong>Essential need:</strong> loyalty, admiration, warmth
                of the heart.
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
                Virgo loves in a more discreet, more subtle, sometimes more
                restrained way. It shows its attachment through constancy, care,
                attention to detail and reliability.
              </p>
              <p>
                Its fidelity is often real, founded on consistency and
                seriousness. It does, however, need a clear, honest, stable bond
                that does not force it to live in uncertainty.
              </p>
              <p>
                <strong>Essential need:</strong> trust, precision,
                everyday security.
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
                Libra experiences love through the relationship itself: dialogue,
                balance, emotional elegance, the search for harmony and
                reciprocity.
              </p>
              <p>
                It often sincerely aspires to fidelity, but it can be troubled
                when the relationship loses its beauty, its sweetness or its
                quality of connection. The need to be loved and validated plays
                a central role.
              </p>
              <p>
                <strong>Essential need:</strong> harmony, relational
                refinement, balance.
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
                Scorpio loves with intensity, depth, totality. It does not seek
                a superficial bond but a relationship that engages the soul,
                desire, trust and inner truth.
              </p>
              <p>
                When it commits, its fidelity can be very strong. But it copes
                poorly with betrayal, ambivalence or pretense. For Scorpio, love
                must be true or not exist at all.
              </p>
              <p>
                <strong>Essential need:</strong> fusion, truth, emotional
                intensity.
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
                Sagittarius loves with enthusiasm, spontaneity and openness. It
                needs the relationship to be a living, evolving, free space, able
                to accompany its drive toward something greater.
              </p>
              <p>
                It can be faithful, but rarely within a stifling framework. Its
                loyalty grows when the couple allows room to breathe, explore,
                learn and grow.
              </p>
              <p>
                <strong>Essential need:</strong> freedom, joy, a shared
                horizon.
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
                Capricorn loves seriously. It does not always enter a
                relationship quickly, but once it commits, it brings weight,
                composure, continuity and responsibility.
              </p>
              <p>
                Its fidelity ranks among the most solid of the zodiac. It loves
                to build a lasting bond, demanding yet worthy of trust.
              </p>
              <p>
                <strong>Essential need:</strong> commitment, respect, solidity
                of the bond.
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
                Aquarius loves in a singular way. It needs a relationship that
                respects its autonomy, its freedom of thought and its sometimes
                atypical way of creating connection.
              </p>
              <p>
                Its fidelity is not always demonstrative or possessive, but it
                can be very real on the level of mental, moral or friendly
                loyalty. Above all, it flees confinement.
              </p>
              <p>
                <strong>Essential need:</strong> freedom, mental complicity,
                inner space.
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
                Pisces loves with sensitivity, imagination, gentleness and
                depth. It often seeks a form of emotional, spiritual or intuitive
                communion.
              </p>
              <p>
                Its fidelity depends greatly on its inner balance. It can be
                very devoted, but also lose itself in vagueness, dreaming or
                idealization if the relationship lacks a framework.
              </p>
              <p>
                <strong>Essential need:</strong> fusion, empathy, gentleness,
                inspiration.
              </p>
            </Card>
          </div>
        </section>

        {/* COMPATIBILITÉS */}
        <section className="space-y-6" aria-labelledby="compatibilites-amoureuses">
          <H2 id="compatibilites-amoureuses">Romantic compatibility between the signs</H2>

          <p className="text-text/85 leading-relaxed">
            Romantic compatibility is never reduced to a simple recipe. It rests
            on an alchemy between needs, rhythms, values and the way each person
            handles commitment, closeness and difference. The Sun sign gives a
            first useful tendency, especially for understanding the general
            climate of a relationship.
          </p>

     <div className="grid gap-6 lg:grid-cols-2">
  {compatibilities.map((item) => {
    const styles = getCompatibilityStyles(item.tone);

    return (
      <section
        key={item.title}
        className={[
          "relative overflow-hidden rounded-2xl border p-6 shadow-soft",
          styles.border,
          styles.bg,
        ].join(" ")}
      >
        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${styles.glow} opacity-80`}
          aria-hidden="true"
        />

        <div className="relative">
          <h3 className={`text-lg md:text-xl font-semibold tracking-tight ${styles.title}`}>
            {item.title}
          </h3>

          <div className="mt-3">
            <Badge className={styles.badge}>{item.signs}</Badge>
          </div>

          <p className="mt-4 text-text/85 leading-relaxed">
            {item.text}
          </p>
        </div>
      </section>
    );
  })}
</div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-lg md:text-xl font-semibold tracking-tight text-white">
              What to remember
            </h3>
            <p className="mt-4 text-text/85 leading-relaxed">
              Some combinations seem more natural, but no compatibility is
              guaranteed or doomed in advance. A strong relationship also depends
              on maturity, life context, the ability to communicate and the
              genuine willingness to build together.
            </p>
            <p className="mt-3 text-text/85 leading-relaxed">
              In serious astrology, compatibilities are always read with more
              precision through synastry and the study of the complete natal
              chart.
            </p>
          </div>
        </section>

        {/* FAQ / CONCLUSION */}
        <section className="space-y-4" aria-labelledby="conclusion-article">
          <H2 id="conclusion-article">Conclusion</H2>

          <p className="text-text/85 leading-relaxed">
            No sign loves in a superior way to the others. Each loves according
            to its nature: through the heart, through security, through the mind,
            through fusion, through freedom or through commitment.
          </p>

          <p className="text-text/85 leading-relaxed">
            Understanding the love logic of the signs helps us better grasp what
            each one expects from a relationship, what it can offer, and the
            tensions that appear when an essential need is not recognized.
          </p>

          <p className="text-text/85 leading-relaxed">
            To go further, you must move beyond the Sun sign alone and observe
            the entire natal chart. That is often where emotional reality becomes
            far more nuanced, far more accurate, and far more revealing.
          </p>
        </section>

        {/* FAQ */}
        <section className="space-y-6" aria-labelledby="faq-amour-fidelite">
          <H2 id="faq-amour-fidelite">Frequently asked questions about love and fidelity of the signs</H2>

          <div className="space-y-4">
            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">Which is the most faithful sign in love?</summary>
              <p className="text-text/85 leading-relaxed">
                <Link href="/signes/taureau" className="underline decoration-white/30 hover:decoration-white/60 transition">Taurus</Link>, <Link href="/signes/scorpion" className="underline decoration-white/30 hover:decoration-white/60 transition">Scorpio</Link> and <Link href="/signes/cancer" className="underline decoration-white/30 hover:decoration-white/60 transition">Cancer</Link> are generally considered the most faithful signs. Taurus out of a need for stability, Scorpio out of the intensity of the bond, and Cancer out of deep emotional attachment.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">Which sign cheats the most?</summary>
              <p className="text-text/85 leading-relaxed">
                <Link href="/signes/gemeaux" className="underline decoration-white/30 hover:decoration-white/60 transition">Gemini</Link>, <Link href="/signes/sagittaire" className="underline decoration-white/30 hover:decoration-white/60 transition">Sagittarius</Link> and <Link href="/signes/verseau" className="underline decoration-white/30 hover:decoration-white/60 transition">Aquarius</Link> are often cited, but this reputation is reductive. The position of <Link href="/planetes/venus">Venus</Link> in the natal chart influences romantic behavior far more than the Sun sign alone.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">Does fidelity depend only on the Sun sign?</summary>
              <p className="text-text/85 leading-relaxed">
                No. Fidelity in astrology is analyzed through several factors: the position of <Link href="/planetes/venus">Venus</Link>, the <Link href="/maisons/maison-7">seventh house</Link>, the planetary aspects and the overall dynamics of the <Link href="/blog/qu-est-ce-qu-un-theme-astral">natal chart</Link>. The Sun sign alone is not enough to determine romantic behavior.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">Which signs are the most compatible in love?</summary>
              <p className="text-text/85 leading-relaxed">
                Compatible elements form good foundations: fire (Aries, Leo, Sagittarius) with air (Gemini, Libra, Aquarius), and earth (Taurus, Virgo, Capricorn) with water (Cancer, Scorpio, Pisces). But a complete <Link href="/synastrie" className="underline decoration-white/30 hover:decoration-white/60 transition">synastry</Link> remains essential to assess real compatibility.
              </p>
            </details>
          </div>
        </section>

        <nav aria-label="End-of-article navigation">
          <Link
            href="/blog"
            className="inline-flex rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-text/90 hover:bg-white/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            ← See all articles
          </Link>
        </nav>
      </article>
    </>
  );
}
