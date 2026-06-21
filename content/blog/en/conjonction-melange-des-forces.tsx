import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import { AUTHOR_PERSON, PUBLISHER_ORG } from "@/lib/seo";

const SITE_URL = "https://www.astro-cours.com";
const ARTICLE_URL = `${SITE_URL}/blog/conjonction-melange-des-forces`;
const COVER_URL = `${SITE_URL}/images/blog/conjonction.webp`;

export const meta = {
  slug: "conjonction-melange-des-forces",
  title:
    "The Conjunction in Astrology: Meaning & Effects",
  // ✅ Ahrefs SERP rewrite — Google uses a simple dash " - Astro Cours".
  seoTitle: "The Conjunction in Astrology: Meaning & Effects - Astro Cours",
  description:
    "What is a conjunction in astrology? Orbs, reading it in a natal chart or transit, examples and a method to interpret this major aspect correctly.",
  date: "2026-01-01",
  tags: ["aspects", "bases", "débutant", "thème astral", "transits"],
  readingLevel: "débutant" as const,
  cover: "/images/blog/conjonction.webp",
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
  children,
  subtitle,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-white/10 bg-black/20 p-6 shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div>
          <H3>{title}</H3>
          {subtitle ? <p className="mt-1 text-sm text-text/60">{subtitle}</p> : null}
        </div>
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

function Divider() {
  return <hr className="border-white/10" />;
}

function TwoCols({
  left,
  right,
}: {
  left: ReactNode;
  right: ReactNode;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-6">{left}</div>
      <div className="space-y-6">{right}</div>
    </div>
  );
}

function Row({
  a,
  b,
  c,
}: {
  a: string;
  b: string;
  c: string;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 border-b border-white/10 last:border-b-0">
      <div className="p-4 font-semibold text-text/90">{a}</div>
      <div className="p-4 text-text/85">{b}</div>
      <div className="p-4 text-text/85">{c}</div>
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
        image: [COVER_URL],
        datePublished: `${meta.date}T12:00:00Z`,
        dateModified: `${meta.date}T12:00:00Z`,
        inLanguage: "en",
        mainEntityOfPage: ARTICLE_URL,
        articleSection: "Astrology",
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
            name: "Is the conjunction a good or a bad aspect?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Neither one nor the other — the conjunction is neutral by nature. It merges and amplifies. The outcome depends entirely on the planets involved, the sign and the house.",
            },
          },
          {
            "@type": "Question",
            name: "What is the difference between a conjunction and a parallel of declination?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The conjunction is measured in longitude (position along the zodiac). The parallel concerns declination (north/south of the ecliptic). Both merge energies, but the conjunction is far more widely used in practice.",
            },
          },
          {
            "@type": "Question",
            name: "How do I know if I have a conjunction in my natal chart?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Cast your natal chart (free on many sites) and look for two planet symbols very close to each other — or an aspect table showing a gap of 0 to 6°.",
            },
          },
          {
            "@type": "Question",
            name: "Does the conjunction work in synastry?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, and it is even central in synastry. When your Venus is conjunct the other person's Mars, the attraction is immediate. But merging does not mean lasting compatibility — the other aspects matter too.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphJsonLd) }}
      />

      <div className="space-y-10">
      {/* HERO */}
      <header className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-7 shadow-soft">
        {/* glows */}
        <div aria-hidden="true" className={`pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl ${glow}`} />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

        {/* overlays */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-transparent" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        <div className="relative">
          <Kicker>Major aspect • Natal chart & transits • Step-by-step guide</Kicker>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            A <strong>conjunction in astrology</strong> is two planets
            occupying the same degree of the zodiac in your{" "}
            <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline decoration-white/30 hover:decoration-white/60 transition">
              natal chart
            </Link>{" "}
            — their energies merge into a single dynamic that is impossible to
            pull apart. You may have spotted it in your chart without knowing
            whether it was a gift or a knot to untangle. The real challenge:
            misread, this fusion looks "good" or "bad" when it is actually
            neutral — it all depends on the context. This guide gives you the
            exact definition, the{" "}
            orbs, a step-by-step reading method (natal <em>and</em>{" "}
            <Link href="/transits" className="underline decoration-white/30 hover:decoration-white/60 transition">
              transits
            </Link>), concrete examples and the pitfalls to avoid.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <Pill tone="violet">Keyword: Fusion</Pill>
            <Pill tone="orange">Risk: Confusion</Pill>
            <Pill tone="emerald">Leverage: Integration</Pill>
            <Pill tone="sky">Level: beginner</Pill>
          </div>

          <div className="mt-3">
            <TagPillsInline tags={meta.tags} />
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <Stat label="Reference orb" value="0–6° (≤3° = very strong)" />
            <Stat label="Key question" value="Who leads? Who colors?" />
            <Stat label="Remember" value="Planet + sign + house + aspects" />
          </div>
        </div>
      </header>

      {/* ── Definition (Featured Snippet) ── */}
      <section className="rounded-2xl border border-violet-400/25 bg-violet-400/5 p-5 sm:p-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-3">Definition</p>
        <p className="text-sm leading-relaxed text-text/80 md:text-base">
          The <strong>conjunction in astrology</strong> is a major <Link href="/aspects" className="text-violet-300 underline decoration-violet-300/30 underline-offset-2 transition-colors hover:text-violet-200">aspect</Link> formed when two planets occupy the same degree (or nearly so) of the zodiac. It merges the energies of the two planets involved, creating an intense blend whose quality depends on the nature of the bodies at play.
        </p>
      </section>

      {/* ── APP intro ── */}
      <p className="text-text/85 leading-relaxed">
        Two planets glued together in your natal chart — what does that mean? The <strong>conjunction</strong> is the most powerful aspect in astrology, and yet the most misunderstood. Neither positive nor negative by nature, it fuses two planetary forces into one. This complete guide teaches you to interpret it correctly, with orbs, examples and a summary table.
      </p>

      {/* 1) Definition */}
      <section className="space-y-4">
        <H2>1) Conjunction in astrology: definition and core principle</H2>

        <div className="rounded-2xl border border-white/10 bg-black/20 p-6 leading-relaxed text-text/85">
          <p>
            An <strong>astrological conjunction</strong> occurs when
            two planets occupy the same zone of the zodiac — in practice,
            they are separated by just a few degrees. The result: their
            energies <strong>blend together</strong> and one almost never
            expresses itself without the other. It is one of the most
            important{" "}
            <Link href="/aspects" className="underline decoration-white/30 hover:decoration-white/60 transition">
              astrological aspects
            </Link>{" "}
            to understand when you are starting out.
          </p>
          <p className="mt-3">
            Careful: it is not automatically "positive" or "negative".
            The conjunction <strong>intensifies and concentrates</strong>.
            Depending on the planets involved, it can be a natural talent, a
            driving force in life… or a knot to work through. It all depends on
            the context — the{" "}
            <Link href="/blog/comprendre-signe-astrologique-ascendant-12-exemples" className="underline decoration-white/30 hover:decoration-white/60 transition">
              sign
            </Link>, the{" "}
            <Link href="/maisons/maison-1" className="underline decoration-white/30 hover:decoration-white/60 transition">
              astrological house
            </Link>{" "}
            and the other aspects received.
          </p>
        </div>

        <Callout tone="note" title="A mental image">
          <p>
            Picture two inks poured into the same glass: you get a single
            color, impossible to separate. The result is stable and rich,
            but sometimes hard to untangle — and that is exactly why you
            need to learn how to read it.
          </p>
        </Callout>
      </section>

      {/* 2) Orbs */}
      <section className="space-y-4">
        <H2>2) The conjunction's orb: when does it really "count"?</H2>

        <p className="text-text/80 leading-relaxed">
          The orb is the gap in degrees between the two planets. The tighter
          the orb, the more powerful the conjunction. But beyond how many
          degrees can we still speak of a conjunction? Here is a simple — and
          reliable — guideline you can apply every time.
        </p>

        <TwoCols
          left={
            <Card
              title="Simple rule (beginner)"
              subtitle="A steady benchmark for reading without getting lost."
            >
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>≤ 3°</strong>: very strong conjunction — often
                  obvious in behavior and events.
                </li>
                <li>
                  <strong>3–6°</strong>: strong to moderate, depends on the
                  sign and the house.
                </li>
                <li>
                  <strong>6–8°</strong>: possible but diffuse (use caution!).
                </li>
              </ul>

              <Callout tone="ok" title="Pro tip (simple)">
                <p>
                  The tighter the orb, the more you can "build" on it. If
                  the orb is wide, demand more evidence:{" "}
                  an angular house{" "}
                  (I, IV, VII, X), recurring themes, supporting aspects.
                </p>
              </Callout>
            </Card>
          }
          right={
            <>
              <Callout tone="warn" title="Classic mistake">
                <p>
                  Seeing a conjunction and jumping to conclusions too fast. A
                  conjunction without a strong house and without repetition
                  can be entirely secondary. It is a common trap when you{" "}
                  <Link href="/blog/pourquoi-votre-horoscope-ne-vous-ressemble-pas" className="underline decoration-white/30 hover:decoration-white/60 transition">
                    are starting to read a chart
                  </Link>.
                </p>
              </Callout>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm text-text/60">Tip</p>
                <p className="mt-2 text-text/85 leading-relaxed">
                  When in doubt, ask yourself this question:{" "}
                  <strong>"In which area of life does it show?"</strong> —
                  it is the astrological house that answers. If no clear area
                  emerges, this conjunction is probably not central.
                </p>
              </div>
            </>
          }
        />
      </section>

      <Divider />

      {/* 3) Natal method */}
      <section className="space-y-4">
        <H2>3) How to interpret a conjunction in a natal chart</H2>

        <p className="text-text/80 leading-relaxed">
          Here is a 6-step method you can apply to <em>all</em>{" "}
          the conjunctions in your natal chart. It works whether you are a beginner or more advanced — the
          depth will come with practice.
        </p>

        <Card title="A repeatable method" subtitle="The same grid for every conjunction.">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              Identify the <strong>2 planets</strong> at play — each one
              represents a psychological function.
            </li>
            <li>
              Determine <strong>who leads</strong>: usually the slower one
              (or the one that is{" "}
              <Link href="/maitrises" className="underline decoration-white/30 hover:decoration-white/60 transition">
                the ruler of the sign
              </Link>).
            </li>
            <li>
              Read the <strong>sign</strong>: it is the shared "style" of the
              fusion — think{" "}
              <Link href="/blog/qualites-defauts-12-signes-zodiaque" className="underline decoration-white/30 hover:decoration-white/60 transition">
                strengths and weaknesses of the sign
              </Link>.
            </li>
            <li>
              Read the <strong>house</strong>: it is the area of life where all
              of this manifests concretely (finances, relationships, career…).
            </li>
            <li>
              Check the <strong>other aspects</strong>{" "}
              received: they stabilize, strain or nuance the conjunction.
            </li>
            <li>
              Reframe it in one sentence:{" "}
              <strong>"When A activates, B activates automatically."</strong>
            </li>
          </ol>

          <Callout tone="note" title="Template sentence (super useful)">
            <p>
              "The <strong>slow</strong> planet sets the direction, the{" "}
              <strong>fast</strong> planet sets the manner. The whole thing
              plays out in <strong>[house]</strong>."
            </p>
          </Callout>
        </Card>
      </section>

      {/* 4) Nuances */}
      <section className="space-y-4">
        <H2>4) Conjunction and planet type: the thing that changes everything</H2>

        <p className="text-text/80 leading-relaxed">
          Not all conjunctions are experienced the same way. The key
          is knowing which <em>type</em> of planets is involved. Here are
          the three main families — and why this radically changes
          the interpretation.
        </p>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card title="Personal planets" subtitle="Subjective, psychological, everyday.">
            <p>
              Sun, Moon, Mercury,{" "}
              <Link href="/planetes/venus" className="underline decoration-white/30 hover:decoration-white/60 transition">Venus</Link>,{" "}
              <Link href="/planetes/mars" className="underline decoration-white/30 hover:decoration-white/60 transition">Mars</Link>{" "}
              : the conjunction speaks of identity, emotions, desire,
              relationships and thinking. You feel it day to day.
            </p>
            <p className="text-sm text-text/70">
              Example: Moon–Mars = emotion triggers action
              immediately.
            </p>
          </Card>

          <Card title="Jupiter & Saturn" subtitle="Social: framework & expansion.">
            <p>
              Jupiter amplifies and gives confidence. Saturn structures and
              brings responsibility. In conjunction with a personal planet, it gives
              a very pronounced "life theme".
            </p>
            <p className="text-sm text-text/70">
              Example: Mercury–Saturn = rigorous thinking, sometimes
              self-censorship. Ideal for{" "}
              <Link href="/blog/orientation-professionnelle-theme-astral" className="underline decoration-white/30 hover:decoration-white/60 transition">
                career guidance
              </Link>.
            </p>
          </Card>

          <Card title="Uranus / Neptune / Pluto" subtitle="Transpersonal: slow and deep.">
            <p>
              Uranus, Neptune, Pluto: they color a personal planet
              intensely — reorientation, idealization, transformation.
              Experienced in phases, often tied to major transits.
            </p>
            <p className="text-sm text-text/70">
              Example: Venus–Neptune = romantic ideal, inspiration but
              a risk of projection ({" "}
              <Link href="/blog/venus-en-signes-style-amoureux" className="underline decoration-white/30 hover:decoration-white/60 transition">
                see Venus in signs
              </Link>).
            </p>
          </Card>
        </div>
      </section>

      {/* 5) Examples */}
      <section className="space-y-4">
        <H2>5) Concrete examples of conjunctions (with interpretation)</H2>

        <p className="text-text/80 leading-relaxed">
          Theory is fine, but nothing beats real examples. Here are
          three very common conjunctions and how to read them — you will
          probably find them in your chart or in those of your loved ones.
        </p>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card title="Moon–Mars conjunction" subtitle="Reaction + action glued together">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Strength</strong>: courage, frankness, instinct.</li>
              <li><strong>Risk</strong>: impulsiveness, irritability.</li>
              <li><strong>To watch</strong>: emotional rhythm, energy
                management and the impact of lunar cycles.
              </li>
            </ul>
            <p className="text-sm text-text/70 mt-2">
              Read also:{" "}
              <Link href="/blog/mars-en-signes-desir-libido-action" className="underline decoration-white/30 hover:decoration-white/60 transition">
                Mars in signs
              </Link>{" "}
              to refine according to the sign occupied.
            </p>
          </Card>

          <Card title="Mercury–Saturn conjunction" subtitle="Structured thinking">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Strength</strong>: rigor, precision, solid learning.</li>
              <li><strong>Risk</strong>: rigidity, pessimism, self-censorship.</li>
              <li><strong>Leverage</strong>: routines, structure, writing, method.</li>
            </ul>
            <p className="text-sm text-text/70 mt-2">
              Associated profiles:{" "}
              Mercurial & Saturnian.
            </p>
          </Card>

          <Card title="Venus–Neptune conjunction" subtitle="Idealization / inspiration">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Strength</strong>: empathy, artistic sense, deep romanticism.</li>
              <li><strong>Risk</strong>: projection, blur, a tendency to "rescue".</li>
              <li><strong>Leverage</strong>: clarifying your values and setting boundaries.</li>
            </ul>
            <p className="text-sm text-text/70 mt-2">
              To go further:{" "}
              <Link href="/synastrie" className="underline decoration-white/30 hover:decoration-white/60 transition">
                synastry
              </Link>{" "}
              and love compatibility.
            </p>
          </Card>
        </div>

        <Callout tone="ok" title="The time-saving trick">
          <p>
            For each conjunction, identify three things: the <strong>stake</strong>{" "}
            (keyword), the <strong>risk</strong> and the <strong>leverage</strong>.
            It is an ultra-efficient "functional" reading — and it is
            exactly what professional astrologers do when they run
            consultation after consultation.
          </p>
        </Callout>
      </section>

      {/* 6) Table */}
      <section className="space-y-4">
        <H2>6) Table of the most frequent conjunctions</H2>

        <p className="text-text/80 leading-relaxed">
          This table gives you a quick starting point for the conjunctions
          most often found in a natal chart. Keep it handy — it is a
          cheat sheet you will consult regularly.
        </p>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-white/10">
            <div className="p-4 text-sm text-text/60">Conjunction</div>
            <div className="p-4 text-sm text-text/60">Strength</div>
            <div className="p-4 text-sm text-text/60">Risk</div>
          </div>

          <Row a="Sun–Mercury" b="Mental clarity, fluent expression" c="Mind too dominant" />
          <Row a="Sun–Venus" b="Natural charm, owned values" c="Need for approval" />
          <Row a="Mars–Jupiter" b="Momentum, boldness, self-confidence" c="Excess, overestimating yourself" />
          <Row a="Moon–Saturn" b="Emotional maturity (with work)" c="Restraint, hardness toward yourself" />
          <Row a="Mercury–Neptune" b="Imagination, fine intuition" c="Vagueness, distractions" />
          <Row a="Venus–Pluto" b="Intensity, depth, magnetism" c="Control, jealousy" />
        </div>

        <Callout tone="note" title="Important">
          <p>
            This table gives you a direction, not a verdict. A
            professional reading always adds the sign, the ascendant, the house
            and the other aspects. It is the combination of all of this that
            creates precision.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* 7) Transits */}
      <section className="space-y-4">
        <H2>7) Conjunction in transit: when it activates over time</H2>

        <p className="text-text/80 leading-relaxed">
          In the natal chart, the conjunction is "fixed". But in the
          current sky, the planets move — and when a transiting planet comes
          to land on one of your natal planets, it is like a spotlight
          switching on over a specific area of your life.
        </p>

        <TwoCols
          left={
            <Card title="The effect of a conjunction in transit" subtitle="A spotlight: impossible to ignore.">
              <ul className="list-disc pl-5 space-y-2">
                <li>brings a subject to the forefront of your life</li>
                <li>triggers a decision or a realization</li>
                <li>increases intensity — builds or reveals an imbalance</li>
              </ul>

              <Callout tone="note" title="A good reflex">
                <p>
                  Think "period" rather than "event". A transit describes
                  a process — sometimes spread over months for slow
                  planets. See also the{" "}
                  <Link href="/revolution-solaire" className="underline decoration-white/30 hover:decoration-white/60 transition">
                    solar return
                  </Link>{" "}
                  for the annual analysis.
                </p>
              </Callout>
            </Card>
          }
          right={
            <Card title="Quick checklist (transits)" subtitle="5 questions that are often enough.">
              <ol className="list-decimal pl-5 space-y-2">
                <li>Which planet is transiting? (slow = structuring effect, fast = trigger)</li>
                <li>Which natal planet is touched?</li>
                <li>In which house is it happening?</li>
                <li>Which aspects support or complicate it?</li>
                <li>Which theme has been recurring in your life for the past 2–3 weeks?</li>
              </ol>
            </Card>
          }
        />

        <Callout tone="warn" title="A frequent mistake">
          <p>
            Looking for "the exact date" of the effect. Important transits
            often have <strong>several passes</strong>{" "}
            (approach, exact, separation) and a gradual effect.{" "}
            <Link href="/retrogrades" className="underline decoration-white/30 hover:decoration-white/60 transition">
              Retrograde
            </Link>{" "}
            planets amplify this phenomenon even more.
          </p>
        </Callout>
      </section>

      {/* 8) Summary */}
      <section className="space-y-4">
        <H2>8) Recap: what to remember about the conjunction</H2>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="p-5 border-b md:border-b-0 md:border-r border-white/10">
              <p className="text-sm text-text/60">Essence</p>
              <p className="mt-2 font-semibold text-text/90">Fusion</p>
              <p className="mt-2 text-text/80">
                Two functions act together, sometimes inseparable. It is
                the most "raw" aspect in astrology.
              </p>
            </div>

            <div className="p-5 border-b md:border-b-0 md:border-r border-white/10">
              <p className="text-sm text-text/60">Risk</p>
              <p className="mt-2 font-semibold text-text/90">Saturation</p>
              <p className="mt-2 text-text/80">
                Excess, confusion, intensity too concentrated in one place.
                When it overflows, it can look like obsession.
              </p>
            </div>

            <div className="p-5">
              <p className="text-sm text-text/60">Leverage</p>
              <p className="mt-2 font-semibold text-text/90">Integration</p>
              <p className="mt-2 text-text/80">
                Clarify "who leads", set a framework and learn to channel it.
                Awareness makes all the difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9) FAQ SEO */}
      <section className="space-y-4">
        <H2>9) FAQ: frequently asked questions about the conjunction in astrology</H2>

        <Card title="Is the conjunction a good or a bad aspect?" subtitle="The question everyone asks.">
          <p>
            Neither one nor the other — the conjunction is <strong>neutral
            by nature</strong>. It merges and amplifies. The outcome depends
            entirely on the planets involved, the sign and the house.
            For example, a Venus–Jupiter conjunction is often very
            pleasant, whereas a Mars–Pluto conjunction calls for genuine
            integration work.
          </p>
        </Card>

        <Card title="What is the difference between a conjunction and a parallel of declination?" subtitle="For the curious.">
          <p>
            The conjunction is measured in <strong>longitude</strong> (position
            along the zodiac). The parallel concerns{" "}
            <strong>declination</strong>{" "}
            (north/south of the ecliptic). Both merge energies, but the
            conjunction is far more widely used in practice. To
            dig deeper, check out the{" "}
            <Link href="/dictionnaire-astrologique" className="underline decoration-white/30 hover:decoration-white/60 transition">
              astrological dictionary
            </Link>.
          </p>
        </Card>

        <Card title="How do I know if I have a conjunction in my natal chart?" subtitle="The simplest way.">
          <p>
            Cast your natal chart (free on many sites) and
            look for two planet symbols very close to each other —
            or an aspect table showing a gap of 0 to 6°. If you
            are starting out, begin by understanding your Sun sign and your
            ascendant.
          </p>
        </Card>

        <Card title="Does the conjunction work in synastry?" subtitle="Between two charts.">
          <p>
            Yes, and it is even central in synastry (comparing
            charts). When your Venus is conjunct the other person's Mars,
            the attraction is immediate. But beware: merging does not mean
            lasting compatibility — the other aspects matter too.
          </p>
        </Card>
      </section>

      {/* End CTA */}
      <section className="rounded-2xl border border-white/10 bg-black/20 p-6">
        <p className="text-sm text-text/60">Want to keep going?</p>
        <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
          <p className="text-text/85">
            The logical next step: discover the other astrological aspects
            (square, trine, opposition…) to round out your toolbox.
          </p>
          <Link
            href="/blog"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-text/90 hover:bg-white/10 transition"
          >
            All articles
          </Link>
        </div>
      </section>
    </div>
    </>
  );
}
