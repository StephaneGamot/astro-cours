import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import { AUTHOR_PERSON, PUBLISHER_ORG, SITE_URL } from "@/lib/seo";

export const meta = {
  slug: "longevite-vie-astrologie",
  // ⚠ Title court : 43 chars + " — Astro Cours" (14) = 57 chars total
  //   Avant : 81 chars → SERP tronqué + signalé "Title too long" par Ahrefs.
  title: "Longevity in Astrology: Hyleg & Alcocoden",
  // ⚠ Meta description : 152 chars (max recommandé : 155).
  //   Avant : 165 chars → tronquée par Google en SERP.
  description:
    "Assessing longevity in traditional astrology: Hyleg, Alcocoden, luminaries, houses I and VIII. A concrete method and indicators to cross-reference.",
  date: "2026-05-27",
  tags: [
    "longévité",
    "vitalité",
    "Hyleg",
    "Alcocoden",
    "maison I",
    "maison VIII",
    "luminaires",
    "Saturne",
    "thème astral",
    "interprétation",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/longevite-vie-astrologie.webp",
};

// -- COMPOSANTS D'INTERFACE PREMIUM --

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
  return (
    <h3 className="font-serif text-2xl font-medium text-white/90">{children}</h3>
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
    <section className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-md transition-colors hover:bg-white/[0.05]">
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

export default function LongeviteVieAstrologiePost() {
  const glow = getGlowFromTags(meta.tags);
  const ARTICLE_URL = `${SITE_URL}/blog/${meta.slug}`;
  const COVER_URL = `${SITE_URL}${meta.cover}`;

  return (
    <article className="mx-auto max-w-4xl space-y-12 pb-20 pt-8 text-white">
      {/* DONNÉES STRUCTURÉES (SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: meta.title,
              name: meta.title,
              description: meta.description,
              image: {
                "@type": "ImageObject",
                url: COVER_URL,
                width: 1024,
                height: 439,
                caption: meta.title,
              },
              datePublished: `${meta.date}T12:00:00Z`,
              dateModified: `${meta.date}T12:00:00Z`,
              author: AUTHOR_PERSON,
              publisher: PUBLISHER_ORG,
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": ARTICLE_URL,
              },
              url: ARTICLE_URL,
              inLanguage: "en",
              isAccessibleForFree: true,
              keywords: meta.tags.join(", "),
              articleSection: "Astrology",
              wordCount: 1500,
              about: [
                { "@type": "Thing", name: "Longevity" },
                { "@type": "Thing", name: "Traditional astrology" },
                { "@type": "Thing", name: "Hyleg" },
                { "@type": "Thing", name: "Alcocoden" },
              ],
              audience: {
                "@type": "Audience",
                audienceType: "Readers interested in astrology",
              },
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
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How does astrology assess life longevity?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Traditional astrology assesses longevity from the Hyleg (the giver of life), the Alcocoden (the giver of years), the condition of the luminaries (Sun and Moon), house I (vitality) and house VIII (trials, ends of cycles).",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the main astrological indicators of vitality?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The main indicators are the strength of the Sun, the condition of the Moon, the quality of the Ascendant and its ruler, the planets occupying house I, as well as the aspects received by the luminaries (favourable or afflicted).",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can astrology predict the exact age of death?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. Even traditional astrologers consider that one can only estimate a probable lifespan, never a precise date. Longevity also results from lifestyle, medicine and genetics.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the Sun enough to judge vitality in a chart?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. The Sun is central, but it must be cross-referenced with the Moon, the Ascendant, house I and the quality of Saturn to obtain a complete picture of vitality.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What role does Saturn play in longevity?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Saturn is the planet of duration, of bone structure and of endurance over time. A strong, well-aspected Saturn often signals a good capacity for endurance and a structural longevity.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      {/* HERO SECTION BLOG */}
      <header className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
        <div
          className={`pointer-events-none absolute -right-24 -top-24 h-[500px] w-[500px] rounded-full opacity-30 mix-blend-screen blur-[100px] ${glow}`}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-[80px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/50"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <Kicker>Longevity • Vitality • Hyleg • Luminaries</Kicker>

          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            {/* ⚠ h1 → h2 (Ahrefs flag "Multiple H1") :
                ArticleLayout rend déjà meta.title comme h1 unique en haut
                de page. On garde un h2 sémantique pour la hiérarchie SEO. */}
            <h2 className="font-serif text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl md:max-w-3xl">
              How astrology observes longevity: the essential indicators
            </h2>

            <div className="flex flex-wrap gap-3 text-sm text-white/70">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                Intermediate read
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                Traditional method
              </span>
            </div>
          </div>

          <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            The question of <strong className="font-medium text-amber-200">life longevity</strong> is one
            of the oldest and most delicate in astrology. It is never read
            from a single clue: it is observed through a cluster of{" "}
            <strong className="font-medium text-white">cross-referenced indicators</strong> — the{" "}
            <strong className="font-medium text-white">Hyleg</strong> (the giver of life), the{" "}
            <strong className="font-medium text-white">Alcocoden</strong> (the giver of years), the condition of the{" "}
            <strong className="font-medium text-white">luminaries</strong>, the quality of{" "}
            <strong className="font-medium text-white">house I</strong>, and the nature of the{" "}
            <strong className="font-medium text-white">aspects</strong> received. This guide shows you
            how to read these signs rigorously, without falling into mechanical
            prediction.
          </p>

          <div className="mt-8 pt-6 border-t border-white/5">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      {/* STATS RAPIDES */}
      <section className="grid gap-4 sm:grid-cols-3" aria-label="Key takeaways of the article">
        <Stat label="Giver of life" value="The Hyleg" />
        <Stat label="Giver of years" value="The Alcocoden" />
        <Stat label="Key house" value="House I & VIII" />
      </section>

      {/* CALLOUT D'INTRODUCTION */}
      <Callout tone="warn" title="Preliminary ethical disclaimer">
        <p>
          Traditional astrology speaks of longevity as a{" "}
          <strong className="text-white">probable tendency</strong>, never as a
          certainty. No chart sets a date of death. What can be observed is
          a <strong className="text-white">terrain of vitality</strong>, strengths
          and fragilities, which must always be cross-referenced with lifestyle,
          medicine and genetics.
        </p>
      </Callout>

      <Divider />

      {/* DEFINITION BOX */}
      <aside className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-6 leading-relaxed text-white/85">
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-amber-400">Definition</p>
        <p>
          <strong>Longevity in astrology</strong> is analysed from a
          coherent whole: the <strong>Hyleg</strong> (the vital point, usually the
          daytime Sun, the night-time Moon, or the Ascendant), the{" "}
          <strong>Alcocoden</strong> (ruler of the sign of the Hyleg, which
          distributes the years), the general condition of <Link href="/maisons/maison-1">house I</Link>{" "}
          and the <Link href="/blog/conjonction-melange-des-forces">aspects</Link>{" "}
          received by the luminaries.
        </p>
      </aside>

      {/* INTRO */}
      <p className="text-base leading-relaxed text-white/80 md:text-lg">
        Before getting into the technique, one thing must be understood: longevity
        does not depend on a single planet. It rests on the{" "}
        <strong>overall solidity of the chart</strong>. A well-placed Hyleg that is
        afflicted by the malefics can indicate a strong but tested vitality.
        A weak but supported Hyleg can give fragile health but
        a decent lifespan. It is all a matter of balance.
      </p>

      {/* 1. LE HYLEG */}
      <section className="space-y-6">
        <H2>1) The Hyleg: the vital point of the chart</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          The <strong className="font-medium text-amber-200">Hyleg</strong> (also
          called the <em>apheta</em> or <em>giver of life</em>) is the point of the chart
          that carries the vital force. It is the first thing observed
          when judging vitality, resilience and potential lifespan.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="How to determine it?" subtitle="Traditional order of selection.">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-amber-400">✦</span>
                <span><strong className="text-white">By day</strong>: first look at the Sun if it is well placed (houses I, VII, X, XI, IX).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-amber-400">✦</span>
                <span><strong className="text-white">By night</strong>: first look at the Moon under the same conditions.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-amber-400">✦</span>
                <span>Otherwise, take the <strong className="text-white">Ascendant</strong>, then the <strong className="text-white">Part of Fortune</strong>.</span>
              </li>
            </ul>
          </Card>

          <Card title="What it reveals" subtitle="The quality of the Hyleg = the quality of the terrain.">
            <p className="mb-3">
              A strong Hyleg (in dignity, well aspected, in an angular house)
              indicates a <strong className="text-white">generous vital capital</strong>.
            </p>
            <p>
              An afflicted Hyleg (square or opposition from Mars or Saturn, combust,
              in fall) signals <strong className="text-white">fragilities to watch</strong>,
              without thereby condemning the lifespan.
            </p>
          </Card>
        </div>
      </section>

      <Divider />

      {/* 2. ALCOCODEN */}
      <section className="space-y-6">
        <H2>2) The Alcocoden: the giver of years</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Once the Hyleg is found, you identify its{" "}
          <strong className="font-medium text-amber-200">ruler</strong>: this is
          the <strong>Alcocoden</strong>. According to tradition (Ptolemy, Bonatti, Lilly),
          it grants a number of years according to its essential dignity.
        </p>

        <section aria-label="Table of years granted" className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm">
          <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
            <div className="p-5 font-serif text-lg font-medium text-white/90">Dignity of the Alcocoden</div>
            <div className="p-5 font-serif text-lg font-medium text-white/90">Type of years</div>
            <div className="p-5 font-serif text-lg font-medium text-white/90">Reading</div>
          </div>

          <TableRow
            title="In domicile"
            effect="Great years"
            reading="Indicates a potentially significant longevity"
          />
          <TableRow
            title="In exaltation"
            effect="Great years"
            reading="Sustained vital force, good resilience"
          />
          <TableRow
            title="In triplicity"
            effect="Mean years"
            reading="Decent lifespan, balanced vitality"
          />
          <TableRow
            title="In term / face"
            effect="Lesser years"
            reading="Average vitality, to be supported by lifestyle"
          />
          <TableRow
            title="In fall / detriment"
            effect="Diminished years"
            reading="Fragilities to compensate for, caution required"
          />
        </section>

        <Callout tone="note" title="Keep in mind">
          <p>
            These numbers are never exact predictions. They serve to
            <strong className="text-white"> rank</strong> the clues: a
            strong Alcocoden reinforces the Hyleg, a weak Alcocoden calls for more
            preventive vigilance.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* 3. LUMINAIRES */}
      <section className="space-y-6">
        <H2>3) The condition of the luminaries: Sun and Moon</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Beyond the Hyleg, the <strong>Sun</strong> and the <strong>Moon</strong>{" "}
          are the two great indicators of vitality. The Sun carries the underlying
          energy, the vital breath; the Moon carries the body's regulation, the
          rhythms, the immunity, the moods.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Strong Sun" subtitle="Positive signs.">
            <p>
              The Sun in Leo, in Aries (exaltation), well aspected by Jupiter or
              Venus, in an angular house: signals a{" "}
              <strong className="text-white">deeply anchored fundamental
              vitality</strong>, a good capacity for recovery.
            </p>
          </Card>

          <Card title="Strong Moon" subtitle="Positive signs.">
            <p>
              The Moon in Cancer, in Taurus (exaltation), well aspected, free of combustion:
              indicates a <strong className="text-white">stable bodily regulation</strong>,
              good defences, balanced sleep and digestion.
            </p>
          </Card>

          <Card title="Afflicted Sun" subtitle="Signs calling for vigilance.">
            <p>
              The Sun in Aquarius (detriment), Libra (fall), besieged between Mars and
              Saturn, square or opposed to the malefics: may signal a{" "}
              <strong className="text-white">lower underlying energy</strong>, or
              cardiac tensions to watch.
            </p>
          </Card>

          <Card title="Afflicted Moon" subtitle="Signs calling for vigilance.">
            <p>
              The Moon in Scorpio (fall), Capricorn (detriment), combust, poorly aspected
              by Saturn or Mars: may indicate{" "}
              <strong className="text-white">immune, digestive</strong> or emotional
              fragilities to support.
            </p>
          </Card>
        </div>
      </section>

      <Divider />

      {/* 4. MAISON I */}
      <section className="space-y-6">
        <H2>4) House I: the physical constitution</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          <Link href="/maisons/maison-1" className="text-amber-200 underline-offset-2 hover:underline">House I</Link>{" "}
          is the house of the body, of the constitution, of the temperament. Its quality
          determines the base on which the Hyleg can rely.
        </p>

        <Card title="What to observe">
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="mt-1 text-emerald-400">✔</span>
              <span><strong className="text-white">The sign of the Ascendant</strong>: it gives the complexion (hot/cold, dry/moist).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-emerald-400">✔</span>
              <span><strong className="text-white">The ruler of the Ascendant</strong>: its dignity, its house, its aspects.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-emerald-400">✔</span>
              <span><strong className="text-white">The planets in house I</strong>: their nature strengthens or weakens the body.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-red-400">✘</span>
              <span><strong className="text-white">Mars or Saturn in I, poorly disposed</strong>: tension, accidents, a more fragile structure.</span>
            </li>
          </ul>
        </Card>
      </section>

      <Divider />

      {/* 5. MAISON VIII */}
      <section className="space-y-6">
        <H2>5) House VIII: trials and ends of cycles</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          <strong>House VIII</strong> is traditionally the house of
          crises, of deep transformations and, in the classical reading, of
          the end of life. It does not predict death, but it signals the{" "}
          <strong className="font-medium text-amber-200">type of trials</strong>{" "}
          a person might go through and the way they can
          regenerate from them.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Supported house VIII">
            <p>
              Cusp in a stable sign, well-placed ruler, harmonious aspects:
              strong <strong className="text-white">capacity for regeneration</strong>,
              a smoother passage through crises.
            </p>
          </Card>
          <Card title="Afflicted house VIII">
            <p>
              Ruler in fall, malefics poorly disposed in VIII: more
              <strong className="text-white"> intense or recurring</strong> crises, heightened vigilance
              regarding prevention.
            </p>
          </Card>
        </div>
      </section>

      <Divider />

      {/* 6. SATURNE */}
      <section className="space-y-6">
        <H2>6) Saturn: the planet of duration</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          <strong>Saturn</strong> is the planet that structures time, the bones,
          duration. A <strong className="font-medium text-amber-200">strong Saturn</strong>{" "}
          (in Capricorn, Aquarius, Libra) that is well aspected often signals a{" "}
          <strong>capacity for endurance</strong> and a structural longevity.
          A fragile Saturn (in Aries, Cancer, Leo) or one that is afflicted may instead indicate
          bone, joint or resilience limits.
        </p>

        <Callout tone="ok" title="The Saturnian paradox">
          <p>
            Exceptional longevities are often accompanied by a Saturn that is
            <strong className="text-white"> demanding but structured</strong>. The
            discipline, the sobriety and the regularity — Saturnian qualities — are
            themselves concrete factors of longevity.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* METHODE COMPLETE */}
      <section aria-labelledby="methode-titre" className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 shadow-2xl backdrop-blur-md sm:p-12">
        <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-amber-500/10 blur-[60px]" aria-hidden="true" />

        <h2 id="methode-titre" className="relative z-10 font-serif text-2xl font-medium text-white sm:text-3xl">
          The complete method for assessing longevity in a chart
        </h2>

        <div className="relative z-10 mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Determine the Hyleg according to the chart's diurnal nature",
            "Identify the Alcocoden (ruler of the Hyleg) and judge its dignity",
            "Assess the strength of the Sun (underlying energy)",
            "Assess the strength of the Moon (bodily regulation)",
            "Read house I: sign, ruler, planets present",
            "Examine house VIII and its ruler",
            "Measure the quality of Saturn (structure and duration)",
            "Synthesise the clues: an overall tendency, not a date",
          ].map((item, index) => (
            <div
              key={item}
              className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-black/40 px-5 py-4 transition-colors hover:border-amber-500/30 hover:bg-white/5"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500/10 font-serif text-sm font-bold text-amber-400 group-hover:bg-amber-500/20">
                {index + 1}
              </span>
              <span className="text-sm font-medium text-white/85 sm:text-base">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SYNTHESE */}
      <section className="space-y-6">
        <H2>Synthesis: cross-reference the clues, never isolate one</H2>

        <section className="rounded-[2rem] border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-transparent p-8 shadow-2xl backdrop-blur-md">
          <p className="text-lg text-white/90">
            Longevity in astrology is a{" "}
            <strong className="text-emerald-300">reading of the terrain</strong>, not a
            prediction. A strong Hyleg, a well-dignified Alcocoden, supported
            luminaries, a solid house I and a structured Saturn outline a{" "}
            <strong className="text-white">terrain of lasting vitality</strong>.
            Conversely, several afflicted clues call for more{" "}
            <strong className="text-white">prevention</strong> — a healthy lifestyle,
            medical follow-up, stress management.
          </p>
        </section>

        <Callout tone="ok" title="A responsible conclusion">
          <p>
            The astrology of longevity sheds light on{" "}
            <strong className="text-white">tendencies</strong>, never on destinies.
            It invites you to know your fragilities the better to support them, and your
            strengths the better to cultivate them.
          </p>
        </Callout>
      </section>

      {/* FAQ */}
      <section className="mt-16 space-y-8">
        <H2>FAQ — Longevity and astrology</H2>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Can you read the age of death in a chart?">
            <p>
              No. Serious astrologers refuse this kind of prediction. You read
              a <strong className="text-white">quality of vitality</strong> and
              more sensitive periods, never a date.
            </p>
          </Card>

          <Card title="Is the Sun enough to judge vitality?">
            <p>
              No. The Sun is central, but it must be cross-referenced with the Moon,
              the Ascendant, house I and the quality of Saturn to get a
              complete picture.
            </p>
          </Card>

          <Card title="What if my chart shows fragilities?">
            <p>
              See it as <strong className="text-white">preventive information</strong>:
              take care of your lifestyle, sleep, diet, medical
              follow-up. Astrology never replaces medicine.
            </p>
          </Card>

          <Card title="Do transits play a role?">
            <p>
              Yes. The major transits of Saturn, Uranus and Pluto over the
              sensitive points of the chart often mark{" "}
              <strong className="text-white">pivotal periods</strong> to
              be handled with attention.
            </p>
          </Card>
        </div>
      </section>

      {/* POUR ALLER PLUS LOIN */}
      <footer className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md sm:p-12">
        <H3>To go further in your analysis</H3>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Pill>Hyleg</Pill>
          <Pill tone="sky">House I</Pill>
          <Pill tone="violet">Aspects</Pill>
          <Pill tone="emerald">Luminaries</Pill>
          <Pill tone="yellow">Saturn</Pill>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/blog/qu-est-ce-qu-un-theme-astral"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Understanding the natal chart
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/blog/conjonction-melange-des-forces"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Mastering the aspects
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}
