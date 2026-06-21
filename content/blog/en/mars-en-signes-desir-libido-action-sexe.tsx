import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import { AUTHOR_PERSON, PUBLISHER_ORG, SITE_URL } from "@/lib/seo";

export const meta = {
  slug: "mars-en-signes-desir-libido-action",
  title: "Mars in the signs: desire, libido, sex, action",
  description:
    "Understand Mars in astrology: desire, libido, energy, anger, the way you act & follow through. Strengths, pitfalls and practical advice.",
  date: "2026-01-10",
  tags: ["amour", "mars", "désir", "bases", "débutant"],
  readingLevel: "débutant" as const,
  cover: "/images/blog/mars-desir.webp",
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
  title: ReactNode;
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
            name: "What does Mars represent in astrology?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Mars represents desire, instinct, libido, anger and the way we take action. It's the planet that shows how we claim our place and what motivates us.",
            },
          },
          {
            "@type": "Question",
            name: "How do you read Mars in a natal chart?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You look at the sign (style of action), the house (area of life involved), the aspects (flow or tension), the direct or retrograde state, and the combination with Venus to understand the relational dynamic.",
            },
          },
          {
            "@type": "Question",
            name: "What is the difference between Mars and Venus in astrology?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Mars represents the way we desire and act (impulse, conquest). Venus represents the way we love and attract (receptivity, pleasure). Together they form the complete love dynamic.",
            },
          },
          {
            "@type": "Question",
            name: "Does Mars influence fidelity in a relationship?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Mars shows the impulse, not fidelity itself. Relational maturity depends on the chart as a whole (Saturn, the Moon, the aspects). Mars reveals how we handle frustration, conflict and desire.",
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
        <div aria-hidden="true" className={`pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl ${glow}`} />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

        {/* overlays */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-transparent" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        <div className="relative">
          <Kicker>Desire • Sexuality • Energy • Action</Kicker>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            <strong>Mars in the signs</strong> is the key to understanding what
            turns you on, what makes you angry and how you take action in
            bed as in life. In your{" "}
            <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline decoration-white/30 hover:decoration-white/60 transition">natal chart</Link>,
            this planet reveals your <strong>desire</strong>, your{" "}
            <strong>libido</strong>, your courage… and your relational pitfalls.
          </p>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            The problem? Most descriptions of Mars stick to
            clichés (&laquo; Aries = aggressive &raquo;, &laquo; Scorpio = obsessed &raquo;). The result:
            you don&rsquo;t recognize yourself — and you miss the essentials.
          </p>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            Here, you&rsquo;ll find an <strong>honest</strong> reading of Mars in
            each sign: real strengths, concrete pitfalls, seduction style
            and sexual dynamic — unfiltered, without judgment.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <Pill tone="violet">Keyword: Impulse</Pill>
            <Pill tone="orange">Risk: Conflict</Pill>
            <Pill tone="emerald">Lever: Mastery</Pill>
            <Pill tone="sky">Level: beginner</Pill>
          </div>

          <div className="mt-3">
            <TagPillsInline tags={meta.tags} />
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <Stat label="Planet" value="Mars" />
            <Stat label="What it describes" value="Desire + action + libido" />
            <Stat label="Key question" value="What turns me on and motivates me?" />
          </div>
        </div>
      </header>

      {/* DEFINITION BOX — Featured Snippet */}
      <div className="rounded-2xl border border-red-400/20 bg-red-400/[0.04] px-6 py-5">
        <p className="text-sm font-semibold uppercase tracking-widest text-red-300/80">Definition</p>
        <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
          <strong>Mars in astrology</strong> governs desire, libido, action energy and sexual style. Its position by sign in your <Link href="/blog/qu-est-ce-qu-un-theme-astral">natal chart</Link> reveals how you act, what sets you in motion and your relationship to physical desire.
        </p>
      </div>

      {/* APP INTRO */}
      <p className="text-lg leading-relaxed text-text/85">
        Do you think your <strong>libido</strong> and your action energy depend on your Sun sign? Not at all. It&apos;s <strong><Link href="/planetes/mars">Mars</Link></strong> that commands desire, drive and sexual style in your natal chart. This guide analyzes Mars across the 12 signs: urges, strengths, pitfalls and couple dynamics.
      </p>

      {/* 1) base */}
      <section className="space-y-4">
        <H2>1) Mars in astrology: what does this planet represent in your chart?</H2>

        <div className="rounded-2xl border border-white/10 bg-black/20 p-6 leading-relaxed text-text/85 space-y-3">
          <p>
            Mars is your <strong>engine</strong>. It&rsquo;s not just &ldquo;sex&rdquo;.
            It&rsquo;s also:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>how you desire (attraction, arousal, instinct)</li>
            <li>how you act (taking initiative, courage)</li>
            <li>how you defend yourself (anger, conflict, boundaries)</li>
            <li>how you pursue what you want (perseverance)</li>
          </ul>
        </div>

        <Callout tone="note" title="Key phrase">
          <p>
            Mars = <strong>the way you take</strong>.{" "}
            <Link href="/blog/venus-en-signes-style-amoureux" className="underline decoration-white/30 hover:decoration-white/60 transition">Venus</Link> ={" "}
            <strong>the way you love</strong>. Together they give
            your complete relational dynamic.
          </p>
        </Callout>
      </section>

      {/* 2) méthode */}
      <section className="space-y-4">
        <H2>2) How to interpret Mars in your natal chart</H2>

        <Card title="Pro method in 5 points" subtitle="Mars = energy. So we observe the facts.">
          <ol className="list-decimal pl-5 space-y-2">
            <li>The <strong>sign</strong>: style of action / desire</li>
            <li>The <strong><Link href="/maisons/maison-1" className="underline decoration-white/30 hover:decoration-white/60 transition">house</Link></strong>: where you put your energy (battle zone)</li>
            <li>The <strong><Link href="/aspects" className="underline decoration-white/30 hover:decoration-white/60 transition">aspects</Link></strong>: control / excess / blockage / flow</li>
            <li>The state of Mars: direct or <Link href="/retrogrades" className="underline decoration-white/30 hover:decoration-white/60 transition">retrograde</Link> (if natal)</li>
            <li>Mars + Venus: attraction + pleasure = compatibility</li>
          </ol>

          <Callout tone="ok" title="Mature reading">
            <p>
              Healthy Mars = <strong>assertion</strong>. Toxic Mars ={" "}
              <strong>domination</strong>. It&rsquo;s not the sign that is &ldquo;good&rdquo;
              or &ldquo;bad&rdquo;, it&rsquo;s the level of awareness.
            </p>
          </Callout>
        </Card>
      </section>

      <Divider />

      {/* 3) tableau rapide */}
      <section className="space-y-4">
        <H2>3) <Link href="/planetes/mars" className="underline decoration-white/30 hover:decoration-white/60 transition">Mars</Link> in the signs: quick reading</H2>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <div className="grid grid-cols-1 md:grid-cols-4 border-b border-white/10">
            <div className="p-4 text-sm text-text/60">Mars in…</div>
            <div className="p-4 text-sm text-text/60">Style</div>
            <div className="p-4 text-sm text-text/60">Arousal / desire</div>
            <div className="p-4 text-sm text-text/60">Pitfall</div>
          </div>

          <Row a="Aries" b="direct, fast" c="challenge, conquest" d="impulsiveness" />
          <Row a="Taurus" b="slow, steady" c="sensations, body" d="inertia / jealousy" />
          <Row a="Gemini" b="mental, playful" c="games, words, humor" d="scattering" />
          <Row a="Cancer" b="protective" c="emotional security" d="passive-aggressive" />
          <Row a="Leo" b="proud, solar" c="admiration, passion" d="ego / control" />
          <Row a="Virgo" b="precise, helpful" c="cleanliness, mastery" d="perfectionism" />
          <Row a="Libra" b="seductive, tactful" c="harmony, aesthetics" d="indecision" />
          <Row a="Scorpio" b="intense, total" c="merging, taboo" d="obsession" />
          <Row a="Sagittarius" b="free, spontaneous" c="adventure, novelty" d="flight" />
          <Row a="Capricorn" b="enduring" c="control, respect" d="harshness" />
          <Row a="Aquarius" b="original" c="difference, mental" d="detachment" />
          <Row a="Pisces" b="fluid" c="fantasy, imagination" d="vagueness / escape" />
        </div>

        <Callout tone="note" title="Tip for quick reading">
          <p>
            For Mars, ask yourself:{" "}
            <strong>&ldquo;How do I get what I want?&rdquo;</strong>{" "}
            That&rsquo;s often the best summary of the sign.
          </p>
        </Callout>
      </section>

      {/* 4) interprétations détaillées */}
      <section className="space-y-4">
        <H2>4) The 12 Mars placements (desire + action + sexual style)</H2>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card title={<>Mars in <Link href="/signes/belier" className="underline decoration-white/30 hover:decoration-white/60 transition">Aries</Link></>} subtitle="fast desire, pure instinct">
            <p><strong>Signature:</strong> I want, I take, I go for it.</p>
            <p><strong>Strength:</strong> courage, direct sexuality.</p>
            <p><strong>Pitfall:</strong> acting before feeling.</p>
            <p><strong>Advice:</strong> learn to slow down to last.</p>
          </Card>

          <Card title={<>Mars in <Link href="/signes/taureau" className="underline decoration-white/30 hover:decoration-white/60 transition">Taurus</Link></>} subtitle="constant desire, very sensual">
            <p><strong>Signature:</strong> I build pleasure.</p>
            <p><strong>Strength:</strong> stamina, strong sensuality.</p>
            <p><strong>Pitfall:</strong> rigidity / possessiveness.</p>
            <p><strong>Advice:</strong> move the body (sport, dance) to release the energy.</p>
          </Card>

          <Card title="Mars in Gemini" subtitle="mental desire, aroused by play">
            <p><strong>Signature:</strong> I want to understand and play.</p>
            <p><strong>Strength:</strong> flirting, creativity.</p>
            <p><strong>Pitfall:</strong> getting bored quickly.</p>
            <p><strong>Advice:</strong> depth = also a kind of fun (when you dare).</p>
          </Card>

          <Card title="Mars in Cancer" subtitle="protective, emotional desire">
            <p><strong>Signature:</strong> I want when I feel safe.</p>
            <p><strong>Strength:</strong> great tenderness, loyalty.</p>
            <p><strong>Pitfall:</strong> bottled-up anger.</p>
            <p><strong>Advice:</strong> say things before exploding.</p>
          </Card>

          <Card title="Mars in Leo" subtitle="flamboyant desire">
            <p><strong>Signature:</strong> I want to shine and be chosen.</p>
            <p><strong>Strength:</strong> passion, generosity.</p>
            <p><strong>Pitfall:</strong> ego, tests.</p>
            <p><strong>Advice:</strong> love without &ldquo;staging&rdquo; the relationship.</p>
          </Card>

          <Card title="Mars in Virgo" subtitle="controlled, precise desire">
            <p><strong>Signature:</strong> I want to do it well.</p>
            <p><strong>Strength:</strong> attention to detail, consistency.</p>
            <p><strong>Pitfall:</strong> blockage / judgment.</p>
            <p><strong>Advice:</strong> let go: desire isn&rsquo;t a performance.</p>
          </Card>

          <Card title="Mars in Libra" subtitle="desire through charm">
            <p><strong>Signature:</strong> I want to seduce without brutality.</p>
            <p><strong>Strength:</strong> tact, aesthetics.</p>
            <p><strong>Pitfall:</strong> not daring to ask.</p>
            <p><strong>Advice:</strong> express your wishes clearly.</p>
          </Card>

          <Card title={<>Mars in <Link href="/signes/scorpion" className="underline decoration-white/30 hover:decoration-white/60 transition">Scorpio</Link></>} subtitle="total, magnetic desire">
            <p><strong>Signature:</strong> I want everything, not half.</p>
            <p><strong>Strength:</strong> sexual intensity, transformation.</p>
            <p><strong>Pitfall:</strong> obsession / domination.</p>
            <p><strong>Advice:</strong> replace control with trust.</p>
          </Card>

          <Card title="Mars in Sagittarius" subtitle="free, adventurous desire">
            <p><strong>Signature:</strong> I want to explore.</p>
            <p><strong>Strength:</strong> spontaneity, humor.</p>
            <p><strong>Pitfall:</strong> fleeing when it gets heavy.</p>
            <p><strong>Advice:</strong> freedom ≠ absence of commitment (you can have both).</p>
          </Card>

          <Card title={<>Mars in <Link href="/signes/capricorne" className="underline decoration-white/30 hover:decoration-white/60 transition">Capricorn</Link></>} subtitle="disciplined, powerful desire">
            <p><strong>Signature:</strong> I want to master and succeed.</p>
            <p><strong>Strength:</strong> stamina, efficiency.</p>
            <p><strong>Pitfall:</strong> harshness / emotional shutdown.</p>
            <p><strong>Advice:</strong> allow pleasure without &ldquo;earning&rdquo; it.</p>
          </Card>

          <Card title="Mars in Aquarius" subtitle="original, mental desire">
            <p><strong>Signature:</strong> I want it differently.</p>
            <p><strong>Strength:</strong> surprise, openness.</p>
            <p><strong>Pitfall:</strong> distance / coldness.</p>
            <p><strong>Advice:</strong> dare intimacy (not just the concept).</p>
          </Card>

          <Card title="Mars in Pisces" subtitle="imaginary, merging desire">
            <p><strong>Signature:</strong> I want to feel.</p>
            <p><strong>Strength:</strong> subtle sensuality, rich fantasy.</p>
            <p><strong>Pitfall:</strong> vagueness, escape.</p>
            <p><strong>Advice:</strong> state your boundaries and your desires clearly.</p>
          </Card>
        </div>
      </section>

      <Divider />

      {/* 5) compatibilité */}
      <section className="space-y-4">
        <H2>5) Mars in a relationship: what it really changes</H2>

        <Card title="What Mars shows in a relationship" subtitle="Very concrete. Very observable.">
          <ul className="list-disc pl-5 space-y-2">
            <li>how you handle frustration</li>
            <li>how you react to conflict</li>
            <li>how you express desire</li>
            <li>what makes you irresistible / what cools you off</li>
          </ul>

          <Callout tone="warn" title="The classic trap">
            <p>
              Believing that Mars = &ldquo;you&rsquo;re faithful / not faithful&rdquo;.{" "}
              Mars is the <strong>impulse</strong>. Maturity depends on your chart as a whole (Saturn, Moon,{" "}
            <Link href="/blog/conjonction-melange-des-forces" className="underline decoration-white/30 hover:decoration-white/60 transition">conjunctions</Link>…).
            </p>
          </Callout>
        </Card>

        <Callout tone="ok" title="Winning combo">
          <p>
            The real thing that works: <strong>Venus + Mars</strong>.
            Venus tells you what you call &ldquo;love&rdquo;. Mars tells you what you call &ldquo;desire&rdquo;.
            If the two don&rsquo;t speak the same language, you feel like you&rsquo;re &ldquo;missing something&rdquo;.
            To understand this alchemy between two people, look at{" "}
            <Link href="/synastrie" className="underline decoration-white/30 hover:decoration-white/60 transition">synastry</Link>.
          </p>
        </Callout>
      </section>

      {/* 6) résumé */}
      <section className="space-y-4">
        <H2>6) The key takeaways on Mars in the signs</H2>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="p-5 border-b md:border-b-0 md:border-r border-white/10">
              <p className="text-sm text-text/60">Essence</p>
              <p className="mt-2 font-semibold text-text/90">Desire / Action</p>
              <p className="mt-2 text-text/80">
                Mars shows your engine: what makes you move, want, dare. Check the{" "}
              <Link href="/dictionnaire-astrologique" className="underline decoration-white/30 hover:decoration-white/60 transition">astrology dictionary</Link>{" "}
              to go deeper.
              </p>
            </div>

            <div className="p-5 border-b md:border-b-0 md:border-r border-white/10">
              <p className="text-sm text-text/60">Risk</p>
              <p className="mt-2 font-semibold text-text/90">Conflict</p>
              <p className="mt-2 text-text/80">
                Impulsiveness, domination, poorly managed anger, flight. Also read{" "}
              <Link href="/blog/qualites-defauts-12-signes-zodiaque" className="underline decoration-white/30 hover:decoration-white/60 transition">strengths and weaknesses of the 12 signs</Link>.
              </p>
            </div>

            <div className="p-5">
              <p className="text-sm text-text/60">Lever</p>
              <p className="mt-2 font-semibold text-text/90">Mastery</p>
              <p className="mt-2 text-text/80">
                Channel the energy → stable desire + effective action. Follow your{" "}
              <Link href="/transits" className="underline decoration-white/30 hover:decoration-white/60 transition">transits</Link>{" "}
              to know when to act.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-white/10 bg-black/20 p-6">
        <p className="text-sm text-text/60">Keep reading</p>
        <div className="mt-3 space-y-2 text-text/85">
          <p>
            Discover{" "}
            <Link href="/blog/amour-fidelite-signes-zodiaque" className="underline decoration-white/30 hover:decoration-white/60 transition font-semibold text-text/95">love and fidelity by sign</Link>{" "}
            or explore{" "}
            <Link href="/blog/martien" className="underline decoration-white/30 hover:decoration-white/60 transition font-semibold text-text/95">the Martian profile</Link>{" "}
            to better understand the energy of Mars day to day.
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
