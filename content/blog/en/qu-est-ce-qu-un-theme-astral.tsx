import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import { AUTHOR_PERSON, PUBLISHER_ORG } from "@/lib/seo";

const SITE_URL = "https://www.astro-cours.com";
const ARTICLE_URL = `${SITE_URL}/blog/qu-est-ce-qu-un-theme-astral`;
const COVER_URL = `${SITE_URL}/images/blog/theme-astral.jpg`;

export const meta = {
  slug: "qu-est-ce-qu-un-theme-astral",
  title:
    "Natal chart: definition and method",
  description:
    "What is a natal chart? Planets, signs, houses and aspects: discover what your chart of the sky contains and how to read it step by step.",
  socialTitle:
    "What is a natal chart? Simple definition and complete guide",
  socialDescription:
    "Finally understand what a natal chart is, what it really contains and why it can't be reduced to your Sun sign or your ascendant. Reading method included.",
  date: "2026-01-05",
  tags: ["bases", "thème astral", "débutant"],
  readingLevel: "débutant" as const,
  cover: "/images/blog/theme-astral.webp",
  ogImage: COVER_URL,
  ogImageAlt: "Educational illustration of the natal chart",
  type: "article" as const,
  articleSection: "Astrology",
  readingTime: "5–7 min",
};

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

function Card({
  title,
  icon,
  children,
  subtitle,
}: {
  title: string;
  icon?: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-white/10 bg-black/20 p-6 shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div>
          <H3>
            {icon ? <span className="mr-2">{icon}</span> : null}
            {title}
          </H3>
          {subtitle ? (
            <p className="mt-1 text-sm text-text/60">{subtitle}</p>
          ) : null}
        </div>
      </div>
      <div className="mt-4 space-y-3 text-text/85 leading-relaxed">
        {children}
      </div>
    </section>
  );
}

function Callout({
  kind = "note",
  title,
  children,
}: {
  kind?: "note" | "warn" | "ok";
  title: string;
  children: ReactNode;
}) {
  const box =
    kind === "warn"
      ? "border-yellow-500/30 bg-yellow-500/10"
      : kind === "ok"
      ? "border-emerald-500/30 bg-emerald-500/10"
      : "border-white/10 bg-white/5";

  const emoji = kind === "warn" ? "⚠️" : kind === "ok" ? "✅" : "📌";

  return (
    <div className={`rounded-2xl border p-4 ${box}`}>
      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-text/90">
        <span>{emoji}</span>
        <span>{title}</span>
      </div>
      <div className="space-y-2 text-text/85 leading-relaxed">{children}</div>
    </div>
  );
}

export default function Post() {
  const glow = getGlowFromTags(meta.tags);

  const graphJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: meta.title,
        description: meta.description,
        image: [meta.ogImage],
        datePublished: `${meta.date}T12:00:00Z`,
        dateModified: `${meta.date}T12:00:00Z`,
        inLanguage: "en",
        mainEntityOfPage: ARTICLE_URL,
        articleSection: meta.articleSection,
        keywords: meta.tags.join(", "),
        educationalLevel: meta.readingLevel,
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
            name: "What is a natal chart?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A natal chart is a chart of the sky calculated for a precise moment and place, most often the moment of birth. It describes a symbolic structure of functioning, not a prediction.",
            },
          },
          {
            "@type": "Question",
            name: "What are the main components of a natal chart?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The four main building blocks are the planets, the signs, the houses and the aspects. The planets describe the functions, the signs the style, the houses the area of expression and the aspects the dynamic between the functions.",
            },
          },
          {
            "@type": "Question",
            name: "Does a natal chart come down to the Sun sign?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. The Sun sign is just one element among others. The ascendant, the Moon, the houses and the aspects profoundly change the whole reading.",
            },
          },
        ],
      },
      {
        "@type": "HowTo",
        name: "How to understand the basics of a natal chart",
        description:
          "A simple method for understanding the structure of a natal chart through its four fundamental building blocks.",
        image: meta.ogImage,
        totalTime: "PT7M",
        step: [
          {
            "@type": "HowToStep",
            name: "Read the Sun and the Moon",
            text: "Start with the Sun for identity and the Moon for emotional reflexes.",
          },
          {
            "@type": "HowToStep",
            name: "Observe the ascendant",
            text: "Spot the ascendant to understand the style of contact with the world.",
          },
          {
            "@type": "HowToStep",
            name: "Identify the dominant planets",
            text: "Look for the dominant planets, the angles and the major repetitions of the chart.",
          },
          {
            "@type": "HowToStep",
            name: "Connect function, style, area and dynamic",
            text: "Link planets, signs, houses and aspects to build a coherent synthesis.",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphJsonLd) }}
      />

      <div className="space-y-10">
        <header className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-7 shadow-soft">
          <div
            className={`pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl ${glow}`}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-3xl"
            aria-hidden="true"
          />

          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-transparent" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

          <div className="relative">
            <p className="text-sm text-text/60">Foundational course • Astrology basics</p>

            <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
              A <strong>natal chart</strong> is a photograph of the sky
              at the exact moment of your birth — planets, signs and houses
              positioned over 360°. Have you been told "I'm a{" "}
              <Link href="/signes/balance" className="underline decoration-white/30 hover:decoration-white/60 transition">
                Libra
              </Link>" or "my{" "}
              <Link href="/blog/comprendre-signe-astrologique-ascendant-12-exemples" className="underline decoration-white/30 hover:decoration-white/60 transition">
                ascendant
              </Link>{" "}
              is Leo" without really understanding what that
              meant? That's normal: the Sun sign is just one piece of the
              puzzle. Without reading your whole chart of the sky, you miss
              what matters most. This guide gives you the complete
              definition, the 4 fundamental components, a 7-step reading
              method and the mistakes to avoid.
            </p>

            <section className="mt-5" aria-labelledby="article-summary-title">
              <h2 id="article-summary-title" className="sr-only">
                Article summary
              </h2>
              <div className="flex flex-wrap gap-2">
                <Pill tone="violet">Level: beginner</Pill>
                <Pill tone="sky">≈ {meta.readingTime}</Pill>
              </div>
            </section>

            <section className="mt-3" aria-labelledby="article-tags-title">
              <h2 id="article-tags-title" className="sr-only">
                Article keywords
              </h2>
              <TagPillsInline tags={meta.tags} />
            </section>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-text/60">Goal</p>
                <p className="mt-1 font-semibold text-text/90">
                  Understand the structure
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-text/60">Key takeaway</p>
                <p className="mt-1 font-semibold text-text/90">
                  Chart ≠ prediction
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-text/60">Method</p>
                <p className="mt-1 font-semibold text-text/90">
                  Planets • Signs • Houses • Aspects
                </p>
              </div>
            </div>
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            {/* APP intro */}
            <p className="text-base leading-relaxed text-text/85 md:text-lg">
              You hear about the <strong>natal chart</strong> everywhere, but you don&apos;t know exactly what it is or how to read it? You&apos;re not alone: most people confuse the natal chart with the horoscope. This accessible guide explains what a natal chart really is, its 4 essential components and a 7-step method to start decoding it.
            </p>

            <section className="space-y-4">
              <H2>Natal chart: definition and fundamental principles</H2>

              <Card
                title="The most accurate way to put it"
                icon="🧭"
                subtitle="If you remember only one thing, remember this."
              >
                <p>
                  A <strong>natal chart</strong> (also called a <strong>birth
                  chart</strong>, or <strong>chart of the sky at birth</strong>)
                  is a photograph of the sky calculated for a precise{" "}
                  <strong>moment</strong> and <strong>place</strong>
                  — most often the moment you were born. It
                  shows the exact position of the{" "}
                  <Link href="/planetes/soleil" className="underline decoration-white/30 hover:decoration-white/60 transition">
                    planets
                  </Link>,{" "}
                  the{" "}
                  <Link href="/signes/belier" className="underline decoration-white/30 hover:decoration-white/60 transition">
                    zodiac signs
                  </Link>{" "}
                  and the{" "}
                  <Link href="/maisons/maison-1" className="underline decoration-white/30 hover:decoration-white/60 transition">
                    astrological houses
                  </Link>{" "}
                  at that precise moment.
                </p>
                <Callout kind="note" title="Central idea">
                  <p>
                    It isn't a prediction: it's a{" "}
                    <strong>structure of functioning</strong>. The natal
                    chart describes <em>how</em> you function, not what's
                    going to happen to you.
                  </p>
                </Callout>
              </Card>
            </section>

            <section className="space-y-4">
              <H2>The 4 components of a natal chart explained simply</H2>

              <div className="grid gap-6 md:grid-cols-2">
                <Card title="1) The planets" icon="☀️" subtitle="What? (the psychological function)">
                  <p>
                    Each planet symbolizes a <strong>function</strong>:
                    the Sun{" "}
                    for identity, the Moon{" "}
                    for emotions, Venus{" "}
                    for values and love, Mars{" "}
                    for action and desire…
                  </p>
                  <p className="text-sm text-text/70">
                    Example:{" "}
                    <Link href="/blog/mars-en-signes-desir-libido-action" className="underline decoration-white/30 hover:decoration-white/60 transition">
                      Mars through the signs
                    </Link>{" "}
                    = your way of acting and defending yourself.
                  </p>
                </Card>

                <Card title="2) The zodiac signs" icon="♈" subtitle="How? (the style, the tone)">
                  <p>
                    The{" "}
                    <Link href="/blog/qualites-defauts-12-signes-zodiaque" className="underline decoration-white/30 hover:decoration-white/60 transition">
                      12 zodiac signs
                    </Link>{" "}
                    color each planet: <strong>tone</strong>,{" "}
                    <strong>style</strong>, <strong>reflex</strong>. It's
                    the "how" of the function.
                  </p>
                  <p className="text-sm text-text/70">
                    Example: Mars in Aries{" "}
                    (fire, impulsive) ≠ Mars in Taurus{" "}
                    (earth, enduring).
                  </p>
                </Card>

                <Card title="3) The astrological houses" icon="🏠" subtitle="Where? (the area of life)">
                  <p>
                    The 12 houses{" "}
                    show <strong>where</strong> the planet expresses itself
                    in life: house VII{" "}
                    for relationships, house X{" "}
                    for career, house IV{" "}
                    for family…
                  </p>
                  <Callout kind="ok" title="Mini-example">
                    <p>
                      <strong>Mercury</strong>{" "}
                      in <strong>House 10</strong>{" "}
                      : communication linked to <strong>profession</strong> and
                      public image. Ideal for{" "}
                      <Link href="/blog/orientation-professionnelle-theme-astral" className="underline decoration-white/30 hover:decoration-white/60 transition">
                        career guidance
                      </Link>.
                    </p>
                  </Callout>
                </Card>

                <Card title="4) The aspects" icon="🔗" subtitle="Dynamic (relationships between planets)">
                  <p>
                    The{" "}
                    aspects{" "}
                    describe the relationship between planets: ease,
                    tension, contradictions, cooperation.
                  </p>
                  <p className="text-sm text-text/70">
                    Example: a square can "push you to grow," not "punish."
                  </p>
                </Card>
              </div>
            </section>

            <section className="space-y-4">
              <H2>How to read a natal chart: a 7-step method for beginners</H2>

              <Card title="The simplest method (7 steps)" icon="🧠">
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    First read the <strong>Sun</strong>{" "}
                    (identity, ego), then the <strong>Moon</strong>{" "}
                    (emotional reflexes, deep needs). These are the
                    solar{" "}
                    and lunar profiles.
                  </li>
                  <li>
                    Look at the <strong>ascendant</strong>{" "}
                    (entry point, style of contact with the world).
                  </li>
                  <li>
                    Spot the <strong>dominant</strong> planets (angular,{" "}
                    stelliums,{" "}
                    <Link href="/maitrises" className="underline decoration-white/30 hover:decoration-white/60 transition">
                      angle rulers
                    </Link>).
                  </li>
                  <li>
                    Identify 2–3 <strong>major themes</strong> (loaded houses,
                    repetitions).
                  </li>
                  <li>
                    Read the{" "}
                    <Link href="/aspects" className="underline decoration-white/30 hover:decoration-white/60 transition">
                      <strong>strong aspects</strong>
                    </Link>{" "}
                    (tight orbs:{" "}
                    <Link href="/blog/conjonction-melange-des-forces" className="underline decoration-white/30 hover:decoration-white/60 transition">
                      conjunctions
                    </Link>, squares, oppositions).
                  </li>
                  <li>
                    Connect: "function (planet) → style (sign) → area (house)
                    → dynamic (aspects)".
                  </li>
                  <li>
                    Finish with a synthesis sentence: "This person functions
                    mainly through…".
                  </li>
                </ol>

                <Callout kind="note" title="Golden rule">
                  <p>
                    Don't get lost in the details: you're looking for a{" "}
                    <strong>structure</strong>, then you refine afterwards.
                  </p>
                </Callout>
              </Card>
            </section>

            <section className="space-y-4">
              <H2>What the natal chart does not predict (and what it really reveals)</H2>

              <Card title="The limits (important)" icon="🛡️">
                <ul className="list-disc space-y-2 pl-5">
                  <li>an exact date for an event</li>
                  <li>a mandatory destiny</li>
                  <li>"what is bound to happen"</li>
                </ul>

                <Callout kind="warn" title="Important">
                  <p>
                    The chart describes <strong>tendencies</strong> and{" "}
                    <strong>cycles</strong>. Free will remains central.
                  </p>
                </Callout>
              </Card>
            </section>

            <section className="space-y-4">
              <H2>FAQ: frequently asked questions about the natal chart</H2>

              <div className="grid gap-6 md:grid-cols-2">
                <Card
                  title="Why are two people of the same sign different?"
                  icon="❓"
                >
                  <p>
                    Because they don't have the same <strong>ascendant</strong>, not the same <strong>Moon</strong>, not the same <strong>houses</strong>{" "}
                    and not the same <strong>aspects</strong>.
                    That's exactly what the article{" "}
                    <Link href="/blog/pourquoi-votre-horoscope-ne-vous-ressemble-pas" className="underline decoration-white/30 hover:decoration-white/60 transition">
                      why your horoscope doesn't look like you
                    </Link>{" "}
                    explains.
                  </p>
                </Card>

                <Card title="Is astrology scientific?" icon="🧾">
                  <p>
                    Serious astrology is a <strong>symbolic reading</strong>{" "}
                    : it describes patterns of functioning, not verified
                    physical causalities. This course teaches you a
                    coherent method, not fatalism.
                  </p>
                </Card>

                <Card title="Are natal chart and birth chart the same thing?" icon="📖">
                  <p>
                    Yes, both terms refer to the same chart of the sky —
                    the one calculated for your birth. It's also called the
                    "birth map." The term "natal chart" is the most common
                    one. Check the{" "}
                    <Link href="/dictionnaire-astrologique" className="underline decoration-white/30 hover:decoration-white/60 transition">
                      astrological dictionary
                    </Link>{" "}
                    for other definitions.
                  </p>
                </Card>

                <Card title="Can you use the natal chart to predict the future?" icon="🔮">
                  <p>
                    The natal chart is fixed. It's the{" "}
                    <Link href="/transits" className="underline decoration-white/30 hover:decoration-white/60 transition">
                      planetary transits
                    </Link>{" "}
                    (the current movements of the planets) and the{" "}
                    <Link href="/revolution-solaire" className="underline decoration-white/30 hover:decoration-white/60 transition">
                      solar return
                    </Link>{" "}
                    that allow you to analyze upcoming tendencies — but
                    they are never fatalistic predictions.
                  </p>
                </Card>

                <Card title="Can you compare two natal charts?" icon="❤️">
                  <p>
                    Yes! This is what's called{" "}
                    <Link href="/synastrie" className="underline decoration-white/30 hover:decoration-white/60 transition">
                      synastry
                    </Link>{" "}
                    : you overlay two charts to analyze compatibility,
                    the areas of complementarity and the points of friction.
                    The article{" "}
                    <Link href="/blog/amour-fidelite-signes-zodiaque" className="underline decoration-white/30 hover:decoration-white/60 transition">
                      love and faithfulness by sign
                    </Link>{" "}
                    gives a first overview.
                  </p>
                </Card>

                <Card title="And finances, can we see those?" icon="💰">
                  <p>
                    Yes, mainly through house II{" "}
                    (resources, values) and house VIII{" "}
                    (shared money, inheritances). The article on finances in a natal chart{" "}
                    covers all of this in detail.
                  </p>
                </Card>
              </div>
            </section>




            <section className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <p className="text-sm text-text/60">Want to keep going?</p>
              <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
                <p className="text-text/85">
                  Logical next step: understanding your sign and your ascendant.
                </p>
                <Link
                  href="/blog"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-text/90 transition hover:bg-white/10"
                >
                  All articles
                </Link>
              </div>
            </section>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-sm text-text/60">Course outline</p>
              <ul className="mt-3 space-y-2 text-text/85">
                <li>• Simple definition</li>
                <li>• The 4 building blocks</li>
                <li>• Reading method</li>
                <li>• Limits & mistakes</li>
                <li>• FAQ</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-sm text-text/60">Key takeaway</p>
              <p className="mt-2 text-text/85 leading-relaxed">
                A natal chart is a <strong>structure</strong>: it explains{" "}
                <strong>how</strong> you function, not "what's going to happen."
              </p>
            </div>


          </aside>
        </div>
      </div>
    </>
  );
}
