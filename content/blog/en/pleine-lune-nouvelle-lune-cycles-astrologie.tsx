import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import { AUTHOR_PERSON, PUBLISHER_ORG, SITE_URL } from "@/lib/seo";

export const meta = {
  slug: "pleine-lune-nouvelle-lune-cycles-astrologie",
  title: "Full & New Moon: The Lunar Cycles",
  description:
    "New Moon and Full Moon in astrology: emotions, cycles, intentions, release, sleep, hypersensitivity. A simple and concrete method.",
  date: "2026-02-07",
  tags: ["lune", "émotions", "cycles", "bases", "débutant"],
  readingLevel: "débutant" as const,
  cover: "/images/blog/lune-cycles.jpg",
};

const ARTICLE_SLUG = meta.slug;
const ARTICLE_URL = `${SITE_URL}/blog/${ARTICLE_SLUG}`;
const COVER_URL = `${SITE_URL}${meta.cover}`;

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

function Divider() {
  return <hr className="border-white/10" />;
}

function Row({
  a,
  b,
  c,
  d,
}: {
  a: string;
  b: string;
  c: string;
  d: string;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 border-b border-white/10 last:border-b-0">
      <div className="p-4 font-semibold text-text/90">{a}</div>
      <div className="p-4 text-text/85">{b}</div>
      <div className="p-4 text-text/85">{c}</div>
      <div className="p-4 text-text/85">{d}</div>
    </div>
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
            name: "What is the difference between the New Moon and the Full Moon?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The New Moon is a phase of introspection and intention. The Full Moon is a phase of revelation and release. Together, they form a 29-day cycle.",
            },
          },
          {
            "@type": "Question",
            name: "Why do we feel strange during the Full Moon?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The Full Moon acts as an emotional amplifier: lighter sleep, hypersensitivity, irritability. It doesn't create the problem, it turns up the volume of what was already there.",
            },
          },
          {
            "@type": "Question",
            name: "How do you use the lunar cycles day to day?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "At the New Moon, write a clear intention and take one concrete micro-step. At the Full Moon, release what weighs on you: a habit, an unspoken truth, mental load.",
            },
          },
          {
            "@type": "Question",
            name: "Does the Moon really influence emotions?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "In astrology, the Moon represents the inner climate: deep emotions, instinctive reactivity, the need for security. The lunar phases offer a natural rhythm for observing and channeling your emotions.",
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
        {/* glows */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl ${glow}`}
        />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

        {/* overlays */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-transparent" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        <div className="relative">
          <Kicker>Emotions • Cycles • Intuition • Inner energy</Kicker>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            The <strong>Full Moon</strong> and the <strong>New Moon</strong>{" "}
            set the rhythm of your emotional energy every 29 days. In your{" "}
            <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline decoration-white/30 hover:decoration-white/60 transition">natal chart</Link>,
            the <Link href="/planetes/lune" className="underline decoration-white/30 hover:decoration-white/60 transition">Moon</Link>{" "}
            describes your <strong>inner world</strong> — and its cycles act
            like a breath.
          </p>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            The problem? Many people endure these phases without
            understanding them: disrupted sleep, frayed nerves, the urge to drop everything…
            then the guilt of “not coping”.
          </p>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            Here, you&apos;ll find a <strong>simple and concrete</strong> method to
            use each lunar phase to your advantage — without a complicated ritual,
            without superstition.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <Pill tone="violet">Keyword: Cycle</Pill>
            <Pill tone="orange">Risk: Reactivity</Pill>
            <Pill tone="emerald">Lever: Awareness</Pill>
            <Pill tone="sky">Level: beginner</Pill>
          </div>

          <div className="mt-3">
            <TagPillsInline tags={meta.tags} />
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <Stat label="Celestial body" value="The Moon" />
            <Stat label="What it describes" value="Emotions + security + intuition" />
            <Stat label="Key question" value="What do I (really) feel?" />
          </div>
        </div>
      </header>

      {/* ── D&eacute;finition (Featured Snippet) ── */}
      <section className="rounded-2xl border border-indigo-400/25 bg-indigo-400/5 p-5 sm:p-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-3">Definition</p>
        <p className="text-sm leading-relaxed text-text/80 md:text-base">
          The <strong>lunar cycles in astrology</strong> alternate between the <strong>new moon</strong> (Sun-<Link href="/planetes/lune" className="text-indigo-300 underline decoration-indigo-300/30 underline-offset-2 transition-colors hover:text-indigo-200">Moon</Link> conjunction) and the <strong>full moon</strong> (Sun-Moon opposition). This 29.5-day rhythm influences collective energies, emotions and the right moments to act or to withdraw.
        </p>
      </section>

      {/* ── APP intro ── */}
      <p className="text-text/85 leading-relaxed">
        Do you feel &laquo;&nbsp;strange&nbsp;&raquo; at every <strong>full moon</strong>? You&apos;re not crazy — astrology explains it very well. The <strong>lunar cycles</strong> shape our energy, our emotions and our decisions far more than we think. This guide decodes the new moon and the full moon, their real effects and how to use them concretely.
      </p>

      {/* 1) base */}
      <section className="space-y-4">
        <H2>1) The Moon in astrology: what does it represent?</H2>

        <div className="rounded-2xl border border-white/10 bg-black/20 p-6 leading-relaxed text-text/85 space-y-3">
          <p>
            The Moon speaks of your <strong>inner climate</strong>. It describes:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>your <strong>deep emotions</strong> (and their intensity)</li>
            <li>your <strong>instinctive reactivity</strong> (your{" "}
            <Link href="/blog/mars-en-signes-desir-libido-action" className="underline decoration-white/30 hover:decoration-white/60 transition">Mars</Link>{" "}
            plays a part too)</li>
            <li>your need for <strong>security</strong> (linked to your{" "}
            <Link href="/maisons/maison-4" className="underline decoration-white/30 hover:decoration-white/60 transition">4th house</Link>) and for a “cocoon”</li>
            <li>your relationship to the <strong>past</strong> and to memories</li>
            <li>your <strong>rhythm</strong> (sleep, mood, fluctuations)</li>
          </ul>
        </div>

        <Callout tone="note" title="Key phrase">
          <p>
            The Moon = your <strong>inner world</strong>. <Link href="/planetes/soleil" className="underline decoration-white/30 hover:decoration-white/60 transition">The Sun</Link> = your{" "}
            <strong>conscious identity</strong>. The lunar phases = a{" "}
            <strong>shared emotional weather</strong>.
          </p>
        </Callout>
      </section>

      {/* 2) méthode */}
      <section className="space-y-4">
        <H2>2) The lunar cycle explained simply</H2>

        <Card title="A 29-day wave" subtitle="It rises, it peaks, it falls back. Just like you.">
          <p>
            A complete cycle lasts about <strong>29 days</strong>. The Moon
            behaves like a <strong>wave</strong>: it rises (building),
            reaches a peak (revelation), then falls back (sorting / release).
          </p>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <div className="grid grid-cols-1 md:grid-cols-4 border-b border-white/10">
              <div className="p-4 text-sm text-text/60">Phase</div>
              <div className="p-4 text-sm text-text/60">Energy</div>
              <div className="p-4 text-sm text-text/60">Feeling</div>
              <div className="p-4 text-sm text-text/60">Focus</div>
            </div>

            <Row a="🌑 New Moon" b="beginning" c="introspection" d="intention" />
            <Row a="🌓 First Quarter" b="tension" c="decision" d="action" />
            <Row a="🌕 Full Moon" b="peak" c="amplified emotions" d="revelation" />
            <Row a="🌗 Last Quarter" b="descent" c="sorting / fatigue" d="release" />
          </div>

          <Callout tone="ok" title="A useful tip">
            <p>
              Observe yourself: you don&apos;t need to be “mystical”.
              You just need to be <strong>honest</strong> about your inner state.
            </p>
          </Callout>
        </Card>
      </section>

      <Divider />

      {/* 3) Nouvelle Lune */}
      <section className="space-y-4">
        <H2>3) The New Moon 🌑</H2>

        <Card title="Energy: begin again, sow, turn inward" subtitle="The fertile void. Barely visible, very powerful.">
          <p>
            The New Moon is a phase of <strong>silence</strong>. It
            can give the impression of “nothing”, but in reality everything is{" "}
            <strong>getting ready</strong>.
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>a need for calm / withdrawal</li>
            <li>mental fatigue or a desire to slow down</li>
            <li>sharper intuition</li>
            <li>a need for inner clarity</li>
          </ul>

          <Callout tone="warn" title="Classic mistake">
            <p>
              Wanting immediate results.
              The New Moon is not a phase of “feats”: it&apos;s a phase of{" "}
              <strong>preparation</strong>.
            </p>
          </Callout>
        </Card>

        <Callout tone="note" title="What to do (simple, effective)">
          <ul className="list-disc pl-5 space-y-2">
            <li>write 1 intention (just one) clearly</li>
            <li>take a minimal action (a micro-step)</li>
            <li>tidy up / simplify (space = energy)</li>
          </ul>
        </Callout>
      </section>

      {/* 4) Pleine Lune */}
      <section className="space-y-4">
        <H2>4) The Full Moon 🌕</H2>

        <Card title="Energy: revelation, intensity, culmination" subtitle="Emotional amplifier. Everything becomes visible.">
          <p>
            The Full Moon brings to light what you were avoiding. It acts like a{" "}
            <strong>spotlight</strong>: emotions, tensions, truths, needs.
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>amplified emotions / impatience</li>
            <li>lighter sleep, intense dreams</li>
            <li>quick realizations</li>
            <li>conflicts that erupt if they were brewing</li>
          </ul>

          <Callout tone="ok" title="A mature reading">
            <p>
              The Full Moon doesn&apos;t “create” the chaos.
              It <strong>reveals</strong> what is already there — and pushes you to look.
            </p>
          </Callout>
        </Card>

        <Callout tone="note" title="What to do (release rather than fight)">
          <ul className="list-disc pl-5 space-y-2">
            <li>write down what you no longer want to carry</li>
            <li>have an honest conversation (without aggression) — {" "}
            <Link href="/synastrie" className="underline decoration-white/30 hover:decoration-white/60 transition">synastry</Link>{" "}
            can help to understand the tensions</li>
            <li>cut out a habit that drains you</li>
          </ul>
        </Callout>
      </section>

      <Divider />

      {/* 5) comparaison */}
      <section className="space-y-4">
        <H2>5) New Moon vs Full Moon (the real difference)</H2>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <div className="grid grid-cols-1 md:grid-cols-4 border-b border-white/10">
            <div className="p-4 text-sm text-text/60">Phase</div>
            <div className="p-4 text-sm text-text/60">Orientation</div>
            <div className="p-4 text-sm text-text/60">Movement</div>
            <div className="p-4 text-sm text-text/60">Goal</div>
          </div>

          <Row a="New Moon 🌑" b="inward" c="begin" d="intention" />
          <Row a="Full Moon 🌕" b="outward" c="culminate" d="revelation / release" />
          <Row a="In between" b="building" c="adjust" d="stay the course" />
          <Row a="End of cycle" b="sorting" c="let go" d="simplify" />
        </div>

        <Callout tone="note" title="A simple tip">
          <p>
            If you don&apos;t know what to do:
            New Moon = <strong>I choose</strong>. Full Moon ={" "}
            <strong>I release</strong>.
          </p>
        </Callout>
      </section>

      {/* 6) pourquoi on ressent */}
      <section className="space-y-4">
        <H2>6) Why do we feel “strange” during Full Moons?</H2>

        <Card
          title="Because the Moon amplifies your system"
          subtitle="Sleep, emotions, reactivity… it shows up fast."
        >
          <p>
            Many people notice it: restlessness, lighter sleep,
            hypersensitivity, irritability… The Full Moon acts like an{" "}
            <strong>amplifier</strong>.
          </p>
          <p>
            The key point: it doesn&apos;t “create” a problem, it{" "}
            <strong>turns up the volume</strong> of what was already there.
          </p>

          <Callout tone="ok" title="A smart approach">
            <p>
              Instead of fighting against the emotion, ask yourself:{" "}
              <strong>“What is this trying to show me?”</strong>
            </p>
          </Callout>
        </Card>
      </section>

      <Divider />

      {/* 7) méthode concrète */}
      <section className="space-y-4">
        <H2>7) How to use the lunar cycles in real life</H2>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card title="New Moon: intention (1 sentence)">
            <p>
              No need for a complicated ritual. Write a clear intention:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>“I want to break out of a relationship pattern.”</li>
              <li>“I take care of my body.”</li>
              <li>“I launch this project without overloading myself.”</li>
            </ul>
            <p>
              Add a <strong>micro-step</strong> (10 minutes max): that&apos;s what anchors it.
            </p>
          </Card>

          <Card title="Full Moon: release (sorting + truth)">
            <p>
              The Full Moon is perfect for “unloading” without violence:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>write down what you&apos;re letting go of (fear, mental load)</li>
              <li>cut out a habit that exhausts you</li>
              <li>express an unspoken truth (calmly, clearly)</li>
            </ul>
            <p>
              The goal: <strong>declutter</strong> your energy.
            </p>
          </Card>
        </div>

        <Callout tone="warn" title="The trap">
          <p>
            Over-ritualizing to avoid taking action.
            Astrology (and reading the{" "}
            <Link href="/aspects" className="underline decoration-white/30 hover:decoration-white/60 transition">aspects</Link>) helps when it makes you <strong>more lucid</strong>, not when it freezes you.
          </p>
        </Callout>
      </section>

      {/* 8) secret */}
      <section className="space-y-4">
        <H2>8) The real secret of the lunar cycles in astrology</H2>

        <div className="rounded-2xl border border-white/10 bg-black/20 p-6 leading-relaxed text-text/85 space-y-3">
          <p>
            The Moon doesn&apos;t decide for you. It shows you a rhythm — follow your{" "}
            <Link href="/transits" className="underline decoration-white/30 hover:decoration-white/60 transition">transits</Link>{" "}
            to see it in action.
          </p>
          <p>
            If you resist: <strong>tension</strong>.
            If you listen: <strong>transformation</strong>.
          </p>
          <p>
            The Moon teaches you that life isn&apos;t linear (as a{" "}
            <Link href="/blog/conjonction-melange-des-forces" className="underline decoration-white/30 hover:decoration-white/60 transition">conjunction</Link> shows): it&apos;s{" "}
            <strong>cyclical</strong>. And so are you.
          </p>
        </div>
      </section>

      {/* 9) résumé */}
      <section className="space-y-4">
        <H2>9) Summary: full moon and new moon in brief</H2>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="p-5 border-b md:border-b-0 md:border-r border-white/10">
              <p className="text-sm text-text/60">Essence</p>
              <p className="mt-2 font-semibold text-text/90">Emotional cycle</p>
              <p className="mt-2 text-text/80">
                New Moon = intention. Full Moon = revelation / release. Discover the{" "}
              <Link href="/blog/lunarien" className="underline decoration-white/30 hover:decoration-white/60 transition">Lunarian profile</Link>.
              </p>
            </div>

            <div className="p-5 border-b md:border-b-0 md:border-r border-white/10">
              <p className="text-sm text-text/60">Risk</p>
              <p className="mt-2 font-semibold text-text/90">Reactivity</p>
              <p className="mt-2 text-text/80">
                Fatigue, conflicts, emotional overload if you force it. Also read the{" "}
              <Link href="/blog/qualites-defauts-12-signes-zodiaque" className="underline decoration-white/30 hover:decoration-white/60 transition">strengths and weaknesses of the 12 signs</Link>.
              </p>
            </div>

            <div className="p-5">
              <p className="text-sm text-text/60">Lever</p>
              <p className="mt-2 font-semibold text-text/90">Awareness</p>
              <p className="mt-2 text-text/80">
                Observe → choose → release. The cycle becomes a tool. Consult the{" "}
              <Link href="/dictionnaire-astrologique" className="underline decoration-white/30 hover:decoration-white/60 transition">astrology dictionary</Link>{" "}
              to dig deeper.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ visible ── */}
      <section className="space-y-4">
        <H2>Frequently asked questions about the lunar cycles</H2>

        <Card title="What is the difference between the New Moon and the Full Moon?">
          <p>
            The New Moon is a phase of introspection and intention. The Full Moon is a phase of revelation and release. Together, they form a 29-day cycle.
          </p>
        </Card>

        <Card title="Why do we feel strange during the Full Moon?">
          <p>
            The Full Moon acts as an emotional amplifier: lighter sleep, hypersensitivity, irritability. It doesn&apos;t create the problem, it turns up the volume of what was already there.
          </p>
        </Card>

        <Card title="How do you use the lunar cycles day to day?">
          <p>
            At the New Moon, write a clear intention and take one concrete micro-step. At the Full Moon, release what weighs on you: a habit, an unspoken truth, mental load.
          </p>
        </Card>

        <Card title="Does the Moon really influence emotions?">
          <p>
            In astrology, the <Link href="/planetes/lune" className="underline decoration-white/30 hover:decoration-white/60 transition">Moon</Link> represents the inner climate: deep emotions, instinctive reactivity, the need for security. The lunar phases offer a natural rhythm for observing and channeling your emotions.
          </p>
        </Card>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-white/10 bg-black/20 p-6">
        <p className="text-sm text-text/60">Keep reading</p>
        <div className="mt-3 space-y-2 text-text/85">
          <p>
            Discover{" "}
            <Link href="/blog/amour-fidelite-signes-zodiaque" className="underline decoration-white/30 hover:decoration-white/60 transition font-semibold text-text/95">love and fidelity by sign</Link>{" "}
            or explore{" "}
            <Link href="/blog/venus-en-signes-style-amoureux" className="underline decoration-white/30 hover:decoration-white/60 transition font-semibold text-text/95">Venus in signs</Link>{" "}
            to round out your understanding of emotions and love.
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
