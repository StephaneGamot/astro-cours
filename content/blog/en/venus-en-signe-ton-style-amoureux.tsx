import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import { AUTHOR_PERSON, PUBLISHER_ORG, SITE_URL } from "@/lib/seo";

export const meta = {
  slug: "venus-en-signes-style-amoureux",
  title: "Venus in the signs: your love style",
  description:
    "Understand Venus in astrology: love style, emotional needs, the way you seduce and your love language. Strengths and pitfalls, sign by sign.",
  date: "2026-01-08",
  tags: ["amour", "Vénus", "bases", "débutant"],
  readingLevel: "débutant" as const,
  cover: "/images/blog/cupidon.webp",
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
            name: "What does Venus represent in astrology?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Venus represents your love style, the way you seduce, your emotional values and what you consider to be love. It describes how you love, not who you end up with.",
            },
          },
          {
            "@type": "Question",
            name: "How do you read Venus in a natal chart?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You look at the sign (love style), the house (area of life), the aspects (ease or tension) and the Venus-Mars combination to understand the love-desire dynamic.",
            },
          },
          {
            "@type": "Question",
            name: "What is the difference between Venus and Mars in love?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Venus describes what we call love (receptivity, pleasure, values). Mars describes what we call desire (impulse, conquest, action). Together they form the complete relational dynamic.",
            },
          },
          {
            "@type": "Question",
            name: "Does Venus determine fidelity?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Venus shows your love style and emotional needs, not fidelity itself. Fidelity depends on the chart as a whole, especially Saturn, the Moon and the aspects.",
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
        <div aria-hidden="true" className={`pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl ${glow}`} />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-transparent" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        <div className="relative">
          <Kicker>Love • Seduction • Relationships • Practical reading</Kicker>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            <strong>Venus in the signs</strong> reveals how you love, what
            attracts you and what you call &laquo; love &raquo;. In your{" "}
            <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline decoration-white/30 hover:decoration-white/60 transition">natal chart</Link>,
            this planet describes your <strong>emotional style</strong>, your
            way of seducing and the kind of relationship that truly nourishes you.
          </p>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            The problem? We often reduce Venus to &laquo; you&rsquo;re
            romantic &raquo; or &laquo; you&rsquo;re faithful &raquo;. In reality, it answers a far
            deeper question: <strong>what do you consider to be love?</strong>
          </p>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            Here: a sign-by-sign reading <strong>without clichés</strong>, with
            strengths, pitfalls and practical advice to finally understand your
            love language.
          </p>

<div className="mt-5 flex flex-wrap gap-2">
            <Pill tone="violet">Keyword: Values</Pill>
            <Pill tone="orange">Risk: Projection</Pill>
            <Pill tone="emerald">Lever: Mature relationship</Pill>
            <Pill tone="sky">Level: beginner</Pill>
          </div>

          <div className="mt-3">
            <TagPillsInline tags={meta.tags} />
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <Stat label="Planet" value="Venus" />
            <Stat label="What it describes" value="Love style + seduction" />
            <Stat label="Key question" value="What makes me say YES?" />
          </div>
        </div>
      </header>

      {/* DEFINITION BOX — Featured Snippet */}
      <div className="rounded-2xl border border-rose-400/20 bg-rose-400/[0.04] px-6 py-5">
        <p className="text-sm font-semibold uppercase tracking-widest text-rose-300/80">Definition</p>
        <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
          <strong>Venus in astrology</strong> represents your love style, your emotional needs and the way you seduce. Its position by sign in your <Link href="/blog/qu-est-ce-qu-un-theme-astral">natal chart</Link> reveals how you love, what you look for in a relationship and your natural love language.
        </p>
      </div>

      {/* APP INTRO */}
      <p className="text-lg leading-relaxed text-text/85">
        Still confusing your <strong>Sun sign</strong> with your love style? Classic mistake. It&apos;s <strong><Link href="/planetes/venus">Venus</Link></strong> that dictates your emotional needs, your way of seducing and your love language — not the Sun. This guide decodes Venus across the 12 signs, with interpretation, strengths, pitfalls and practical advice.
      </p>

      {/* 1) base */}
      <section className="space-y-4">
        <H2>1) Venus in astrology: what does it represent in your chart?</H2>

        <div className="rounded-2xl border border-white/10 bg-black/20 p-6 leading-relaxed text-text/85 space-y-3">
          <p>
            Venus represents your <strong>relationship to pleasure</strong>, to love,
            to beauty and to connection. It describes:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>your way of seducing (or attracting)</li>
            <li>what gives you confidence in love</li>
            <li>your tastes, your values, your need for harmony</li>
            <li>the kind of relationship that nourishes you</li>
          </ul>
        </div>

        <Callout tone="note" title="Without clichés">
          <p>
            Venus doesn&rsquo;t say &ldquo;you&rsquo;re romantic&rdquo; or &ldquo;you&rsquo;re faithful&rdquo;. It says:
            <strong>what do you consider to be love</strong>.
          </p>
        </Callout>
      </section>

      {/* 2) méthode */}
      <section className="space-y-4">
        <H2>2) How to interpret Venus in your natal chart</H2>

        <Card title="Pro reading in 4 points" subtitle="Simple, but extremely reliable.">
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong>Sign</strong> = the style (how you love)</li>
            <li><strong><Link href="/maisons/maison-1" className="underline decoration-white/30 hover:decoration-white/60 transition">House</Link></strong> = the area of life (where you live out love)</li>
            <li><strong><Link href="/aspects" className="underline decoration-white/30 hover:decoration-white/60 transition">Aspects</Link></strong> = ease / tension / repetition</li>
            <li><strong>Venus + <Link href="/blog/mars-en-signes-desir-libido-action" className="underline decoration-white/30 hover:decoration-white/60 transition">Mars</Link></strong> = love + desire (essential combo)</li>
          </ol>

          <Callout tone="ok" title="Golden rule">
            <p>
              You can have a very gentle Venus… but very harsh aspects.
              So: <strong>the sign gives the color</strong>, the aspects give the reality.
            </p>
          </Callout>
        </Card>
      </section>

      <Divider />

      {/* 3) tableau signes */}
      <section className="space-y-4">
        <H2>3) Venus in the signs: your love style decoded</H2>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <div className="grid grid-cols-1 md:grid-cols-4 border-b border-white/10 display-none lg:display-grid">
            <div className="p-4 text-sm text-text/60">Venus in…</div>
            <div className="p-4 text-sm text-text/60">Style</div>
            <div className="p-4 text-sm text-text/60">Need</div>
            <div className="p-4 text-sm text-text/60">Pitfall</div>
          </div>

          <Row a="Aries" b="direct, spontaneous" c="thrill, desire" d="bored quickly" />
          <Row a="Taurus" b="sensual, stable" c="security, constancy" d="possessiveness" />
          <Row a="Gemini" b="light, curious" c="exchange, humor" d="inconstancy" />
          <Row a="Cancer" b="protective, tender" c="attachment, home" d="dependency" />
          <Row a="Leo" b="warm, proud" c="admiration, loyalty" d="ego / drama" />
          <Row a="Virgo" b="discreet, helpful" c="concrete proof" d="criticism, restraint" />
          <Row a="Libra" b="harmonious, social" c="couple, elegance" d="avoiding conflict" />
          <Row a="Scorpio" b="merging, intense" c="truth, depth" d="control" />
          <Row a="Sagittarius" b="free, enthusiastic" c="adventure, meaning" d="fear of commitment" />
          <Row a="Capricorn" b="serious, loyal" c="duration, respect" d="coldness / caution" />
          <Row a="Aquarius" b="different, mental" c="freedom, friendship" d="distance" />
          <Row a="Pisces" b="romantic, inspired" c="soul, connection" d="illusion / rescuing" />
        </div>

        <Callout tone="note" title="Ultra important">
          <p>
            The sign gives the <strong>style</strong> (explore the{" "}
            <Link href="/blog/qualites-defauts-12-signes-zodiaque" className="underline decoration-white/30 hover:decoration-white/60 transition">strengths and weaknesses of the 12 signs</Link>) but the house indicates the &ldquo;terrain&rdquo;.
            For example: Venus in Scorpio <strong><Link href="/maisons/maison-10" className="underline decoration-white/30 hover:decoration-white/60 transition">House 10</Link></strong>: relationships + status / image.
          </p>
        </Callout>
      </section>

      {/* 4) interprétations */}
      <section className="space-y-4">
        <H2>4) The 12 Venus placements (interpretation + advice)</H2>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card title={<>Venus in <Link href="/signes/belier" className="underline decoration-white/30 hover:decoration-white/60 transition">Aries</Link></>} subtitle="loves fast, loves hard">
            <p><strong>Signature:</strong> love = desire + movement.</p>
            <p><strong>Strength:</strong> honesty, passion.</p>
            <p><strong>Pitfall:</strong> mistaking excitement for love.</p>
            <p><strong>Advice:</strong> choose someone who keeps pace, without drama.</p>
          </Card>

          <Card title={<>Venus in <Link href="/signes/taureau" className="underline decoration-white/30 hover:decoration-white/60 transition">Taurus</Link></>} subtitle="loves with the body and with stability">
            <p><strong>Signature:</strong> love = security + sensuality.</p>
            <p><strong>Strength:</strong> loyalty, patience.</p>
            <p><strong>Pitfall:</strong> possessiveness.</p>
            <p><strong>Advice:</strong> nourish the bond through simple rituals.</p>
          </Card>

          <Card title="Venus in Gemini" subtitle="loves through the mind">
            <p><strong>Signature:</strong> love = exchange.</p>
            <p><strong>Strength:</strong> lightness, humor.</p>
            <p><strong>Pitfall:</strong> fleeing depth.</p>
            <p><strong>Advice:</strong> learn to stay when it gets serious.</p>
          </Card>

          <Card title="Venus in Cancer" subtitle="loves by caring">
            <p><strong>Signature:</strong> love = attachment.</p>
            <p><strong>Strength:</strong> tenderness, devotion.</p>
            <p><strong>Pitfall:</strong> dependency / fear of abandonment.</p>
            <p><strong>Advice:</strong> secure the inside first, then the relationship.</p>
          </Card>

          <Card title="Venus in Leo" subtitle="loves big">
            <p><strong>Signature:</strong> love = pride + warmth.</p>
            <p><strong>Strength:</strong> loyalty, generosity.</p>
            <p><strong>Pitfall:</strong> need for constant admiration.</p>
            <p><strong>Advice:</strong> love without testing the other.</p>
          </Card>

          <Card title="Venus in Virgo" subtitle="loves with discretion">
            <p><strong>Signature:</strong> love = usefulness + reliability.</p>
            <p><strong>Strength:</strong> attention to detail.</p>
            <p><strong>Pitfall:</strong> over-analyzing.</p>
            <p><strong>Advice:</strong> say what you feel, not just what you do.</p>
          </Card>

          <Card title="Venus in Libra" subtitle="loves the beauty of the couple">
            <p><strong>Signature:</strong> love = duo.</p>
            <p><strong>Strength:</strong> diplomacy.</p>
            <p><strong>Pitfall:</strong> losing yourself in the other.</p>
            <p><strong>Advice:</strong> learn to choose even when it displeases.</p>
          </Card>

          <Card title={<>Venus in <Link href="/signes/scorpion" className="underline decoration-white/30 hover:decoration-white/60 transition">Scorpio</Link></>} subtitle="loves in depth">
            <p><strong>Signature:</strong> love = truth + merging.</p>
            <p><strong>Strength:</strong> magnetism.</p>
            <p><strong>Pitfall:</strong> jealousy / control.</p>
            <p><strong>Advice:</strong> replace control with transparency.</p>
          </Card>

          <Card title="Venus in Sagittarius" subtitle="loves with freedom">
            <p><strong>Signature:</strong> love = adventure.</p>
            <p><strong>Strength:</strong> enthusiasm.</p>
            <p><strong>Pitfall:</strong> fear of being trapped.</p>
            <p><strong>Advice:</strong> a couple isn&rsquo;t a prison when the space is clear.</p>
          </Card>

          <Card title="Venus in Capricorn" subtitle="loves seriously">
            <p><strong>Signature:</strong> love = duration.</p>
            <p><strong>Strength:</strong> stability.</p>
            <p><strong>Pitfall:</strong> excessive reserve.</p>
            <p><strong>Advice:</strong> express affection without waiting to be &ldquo;sure&rdquo;.</p>
          </Card>

          <Card title="Venus in Aquarius" subtitle="loves differently">
            <p><strong>Signature:</strong> love = friendship + freedom.</p>
            <p><strong>Strength:</strong> modernity, openness.</p>
            <p><strong>Pitfall:</strong> emotional distance.</p>
            <p><strong>Advice:</strong> stay original without avoiding intimacy.</p>
          </Card>

          <Card title={<>Venus in <Link href="/signes/poissons" className="underline decoration-white/30 hover:decoration-white/60 transition">Pisces</Link></>} subtitle="loves the soul">
            <p><strong>Signature:</strong> love = magic.</p>
            <p><strong>Strength:</strong> romanticism, compassion.</p>
            <p><strong>Pitfall:</strong> illusion / rescuing.</p>
            <p><strong>Advice:</strong> tell love apart from the storyline.</p>
          </Card>
        </div>
      </section>

      {/* 5) conclusion */}
      <section className="space-y-4">
        <H2>5) The key takeaways on Venus in the signs</H2>

        <Callout tone="ok" title="What Venus really says">
          <p>
            Venus describes your <strong>love language</strong>. Once you understand that,
            you stop chasing &ldquo;the right person&rdquo; and you understand how
            <strong>you build a stable relationship</strong>. Follow your{" "}
            <Link href="/transits" className="underline decoration-white/30 hover:decoration-white/60 transition">transits</Link>{" "}
            to understand the key periods, and to go
            further, explore{" "}
            <Link href="/synastrie" className="underline decoration-white/30 hover:decoration-white/60 transition">synastry</Link>{" "}
            (compatibility between two charts) or check out the{" "}
            <Link href="/dictionnaire-astrologique" className="underline decoration-white/30 hover:decoration-white/60 transition">astrology dictionary</Link>.
          </p>
        </Callout>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-white/10 bg-black/20 p-6">
        <p className="text-sm text-text/60">Keep reading</p>
        <div className="mt-3 space-y-2 text-text/85">
          <p>
            Discover{" "}
            <Link href="/blog/amour-fidelite-signes-zodiaque" className="underline decoration-white/30 hover:decoration-white/60 transition font-semibold text-text/95">love and fidelity by sign</Link>{" "}
            or read{" "}
            <Link href="/blog/venusien" className="underline decoration-white/30 hover:decoration-white/60 transition font-semibold text-text/95">the Venusian profile</Link>{" "}
            to understand the energy of Venus day to day.
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
