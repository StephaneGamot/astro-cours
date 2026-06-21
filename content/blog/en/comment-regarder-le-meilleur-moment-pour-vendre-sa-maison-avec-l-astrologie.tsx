import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import { AUTHOR_PERSON, PUBLISHER_ORG, SITE_URL } from "@/lib/seo";

export const meta = {
  slug: "vendre-une-maison-demenager-astrologie-methodes",
  title: "Selling a house: what to look at in astrology?",
  description:
    "A serious guide to analyzing a property sale or a move: houses IV/VII/X, rulers, transits, progressions, triggers, retrogrades",
  date: "2026-03-03",
  tags: ["immobilier", "déménagement", "transits", "maisons astrologiques", "méthode"],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/immobilier-demenagement.webp",
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
        inLanguage: "en",
        url: ARTICLE_URL,
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
            name: "Can you use astrology to sell a house?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Astrology does not replace a lawyer or a real estate agent, but it can help spot periods of change, understand what is blocking things and choose smoother windows to sign or move.",
            },
          },
          {
            "@type": "Question",
            name: "Which astrological houses should you look at for a move?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The key houses are the IV (home, anchoring), the VII (contracts, negotiation), the X (formalization) and the II/VIII (finances, credit, sharing). The IV is the heart of the real estate matter.",
            },
          },
          {
            "@type": "Question",
            name: "Should you avoid signing during Mercury retrograde?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Retrogrades do not prevent you from signing, but they increase the likelihood of delays or misunderstandings. If you have no choice, compensate with more preparation, proofreading and time buffers.",
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
          <Kicker>Real estate • Moving • Timing • Method</Kicker>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            <strong>Selling a house with astrology</strong>: how do you
            spot the right time to sign, move or launch
            renovations? In your{" "}
            <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline decoration-white/30 hover:decoration-white/60 transition">natal chart</Link>,
            it is{" "}
            <Link href="/maisons/maison-4" className="underline decoration-white/30 hover:decoration-white/60 transition">houses IV</Link>, VII and X
            that carry the real estate matter.
          </p>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            The problem? Most astro guides limit themselves to
            "avoid Mercury retrograde" without explaining where to look
            or how to prioritize the indicators.
          </p>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            Here, a <strong>serious</strong> 7-step method: key zones
            of the chart, timing, retrogrades, real cases and a checklist
            — without promising the impossible.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <Pill tone="violet">Keyword: Transition</Pill>
            <Pill tone="orange">Risk: Delays</Pill>
            <Pill tone="emerald">Leverage: Timing + preparation</Pill>
            <Pill tone="sky">Level: intermediate</Pill>
          </div>

          <div className="mt-3">
            <TagPillsInline tags={meta.tags} />
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <Stat label="Topic" value="Sale / purchase / move" />
            <Stat label="Key houses" value="IV, VII, X, II/VIII" />
            <Stat label="Key question" value="What triggers it + when does it materialize?" />
          </div>
        </div>
      </header>

      {/* DEFINITION BOX – Featured Snippet */}
      <aside className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6 leading-relaxed text-text/85">
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-emerald-400">Definition</p>
        <p><strong>Real estate astrology</strong> uses planetary <Link href="/transits">transits</Link>, <Link href="/maisons/maison-4">house IV</Link> (home, patrimony) and <Link href="/maisons/maison-2">house II</Link> (finances) of the natal chart to identify periods favorable to selling a property.</p>
      </aside>

      {/* APP intro */}
      <p className="text-base leading-relaxed text-text/85 md:text-lg">
        Do you want to <strong>sell your house</strong> and wonder whether astrology can help you choose the right moment? This is not magic: <strong>planetary transits</strong> on your houses IV and II create windows that are more or less favorable to real estate transactions. This practical guide shows you where to look in your natal chart, which transits to watch and how to use planetary cycles to your advantage.
      </p>

      {/* 1) frame */}
      <section className="space-y-4">
        <H2>1) Astrology and real estate: what the natal chart can (and cannot) predict</H2>

        <div className="rounded-2xl border border-white/10 bg-black/20 p-6 leading-relaxed text-text/85 space-y-3">
          <p>
            A birth chart does not replace a bank, a lawyer, or a property
            market. But it can help you:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>spot <strong>periods of change</strong> (transition, rupture, new cycle)</li>
            <li>understand <strong>what is blocking things</strong> (fear, inertia, conflict, constraint)</li>
            <li>choose smoother <strong>windows</strong> to sign, negotiate, move</li>
            <li>adjust the strategy: pace, communication, preparation</li>
          </ul>
        </div>

        <Callout tone="warn" title="Important (really)">
          <p>
            If your case involves joint ownership, a conflict, or legal proceedings,
            the{" "}
            <Link href="/maisons/maison-7" className="underline decoration-white/30 hover:decoration-white/60 transition">VII</Link> / VIII axis (contracts / sharing) becomes central, but the outcome
            also depends on the law and the evidence. Astrology (as our article on{" "}
            <Link href="/blog/pleine-lune-nouvelle-lune-cycles-astrologie" className="underline decoration-white/30 hover:decoration-white/60 transition">lunar cycles</Link> explains) helps you manage the{" "}
            <strong>timing</strong> and the <strong>attitude</strong>, not bypass reality.
          </p>
        </Callout>
      </section>

      {/* 2) where to look */}
      <section className="space-y-4">
        <H2>2) House IV and house II: the &laquo;&nbsp;real estate&nbsp;&raquo; zones of your chart</H2>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card title="House IV: home, roots, hearth" subtitle="The heart of the matter">
            <p>
              The IV describes your <strong>place of anchoring</strong>: home, family,
              need for security, the feeling of "home".
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>the sign in IV: your style of dwelling (need for calm, space, control, etc.)</li>
              <li>the ruler of IV: where the question "plays out" in your life</li>
              <li>planets in IV: what charges the subject (renovations, secrets, family, moves)</li>
            </ul>
          </Card>

          <Card title="House VII: contract, negotiation, buyer / agency" subtitle="The face-to-face">
            <p>
              The VII = <strong>the other party</strong>: buyers, agency, lawyer,
              ex-spouse if joint ownership, and contractual logic.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>conflict / cooperation:{" "}
              <Link href="/aspects" className="underline decoration-white/30 hover:decoration-white/60 transition">aspects</Link> to the ruler of VII</li>
              <li>ease of signing: Venus / Jupiter vs Saturn / Mars</li>
              <li>if the relationship is tense: look at Saturn, Mars, Pluto in aspect</li>
            </ul>
          </Card>

          <Card title="House X: status, official passage, calendar" subtitle="The concrete / the administration">
            <p>
              The X marks <strong>formalization</strong>: official decisions,
              appointments, administrations, "visible" steps.
            </p>
            <p>
              Very useful for the <strong>timing</strong> of the deed / the formalities.
            </p>
          </Card>

          <Card title="Houses II & VIII: money, sharing, credit" subtitle="The crux of the matter">
            <p>
              II = your resources / your margin. VIII = bank, debts, credit, sharing,
              compensation, joint ownership, inheritance.
            </p>
            <p>
              When things get blocked "for no reason", it is often here (conditions, guarantees,
              deadlines, paperwork, bank).
            </p>
          </Card>
        </div>

        <Callout tone="note" title="Simple tip">
          <p>
            For a sale/move, start with:{" "}
            <strong>IV (home) + VII (contract) + X (formalization)</strong>.
            Then add II/VIII if money becomes central.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* 3) timing method */}
      <section className="space-y-4">
        <H2>3) Transits and timing: how to spot the right moment to sell</H2>

        <Card
          title="Premium method in 4 layers"
          subtitle="Stack them up: background → context → trigger → practical date."
        >
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>The background</strong> (slowness): Saturn / Uranus / Pluto / Neptune on IV/VII/X or their rulers.
            </li>
            <li>
              <strong>The context</strong> (6–12 months): progressions / solar arcs (if you use them).
            </li>
            <li>
              <strong>The trigger</strong> (weeks):{" "}
            fast <Link href="/transits" className="underline decoration-white/30 hover:decoration-white/60 transition">transits</Link>{" "}
            (Mars/Venus/Mercury) on the activated points.
            </li>
            <li>
              <strong>The practical date</strong>: choose a "clean" moment (paperwork ok, schedule ok, retrograde handled).
            </li>
          </ol>

          <Callout tone="ok" title="What works well for timing">
            <p>
              A sale often materializes when there is <strong>a double signal</strong>:
              activation of IV/VII/X (a{" "}
              <Link href="/blog/conjonction-melange-des-forces" className="underline decoration-white/30 hover:decoration-white/60 transition">conjunction</Link>{" "}
              can be enough) + a facilitating transit ({" "}
              <Link href="/blog/venus-en-signes-style-amoureux" className="underline decoration-white/30 hover:decoration-white/60 transition">Venus</Link>/Jupiter) or a structuring transit (Saturn).
            </p>
          </Callout>
        </Card>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-white/10">
            <div className="p-4 text-sm text-text/60">Signal</div>
            <div className="p-4 text-sm text-text/60">Often it means…</div>
            <div className="p-4 text-sm text-text/60">Concrete action</div>
          </div>

          <Row
            a="Jupiter on IV/VII/X"
            b="opening, opportunities, ease of contact"
            c="multiply viewings, follow up, widen networks"
          />
          <Row
            a="Saturn on IV/VII/X"
            b="delay, structuring, responsibility, procedures"
            c="rock-solid file, patience, lawyer/bank steps"
          />
          <Row
            a="Uranus on IV"
            b="rapid change, need to move"
            c="prepare plan B, flexibility, logistics"
          />
          <Row
            a="Pluto on IV/VIII"
            b="deep transformation, tension, power stakes"
            c="clarify, secure, avoid an ego war"
          />
          <Row
            a="Mercury retro (period)"
            b="documents to review, delays, misunderstandings"
            c="reread, verify, sign when everything is clear"
          />
        </div>
      </section>

      {/* 4) retrogrades */}
      <section className="space-y-4">
        <H2>4) <Link href="/retrogrades" className="underline decoration-white/30 hover:decoration-white/60 transition">Retrogrades</Link>: should you avoid signing?</H2>

        <Card title="A realistic approach (not superstitious)" subtitle="No panic. We manage it.">
          <p>
            Retrogrades do not "block" things by magic. They mainly increase the likelihood of:
            <strong>delays</strong>, <strong>last-minute changes</strong>,
            <strong>revisions</strong> or <strong>misunderstandings</strong>.
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Mercury retro</strong>: contracts, exchanges, papers → reread + verify.</li>
            <li><strong>Venus retro</strong>: values/prices/aesthetics → renegotiations, hesitations.</li>
            <li><strong><Link href="/blog/mars-en-signes-desir-libido-action" className="underline decoration-white/30 hover:decoration-white/60 transition">Mars</Link> retro</strong>: energy/conflicts → tensions, slowness, fatigue.</li>
          </ul>

          <Callout tone="note" title="Pro rule">
            <p>
              If you have no choice (lawyer's schedule, bank), it is not a problem:
              you compensate with <strong>more preparation</strong> and <strong>more margin</strong> (time, clauses, proofreading).
            </p>
          </Callout>
        </Card>
      </section>

      <Divider />

      {/* 5) frequent cases */}
      <section className="space-y-4">
        <H2>5) The most frequent astrological configurations in property sales</H2>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card title="Plenty of viewings but no signing" subtitle="The most common symptom">
            <ul className="list-disc pl-5 space-y-2">
              <li>VII (other party) activated but VIII (bank) under tension</li>
              <li>Mercury/Neptune: vagueness, lack of clarity, incomplete documents</li>
              <li>Saturn: delay, requirements, steps</li>
            </ul>
            <p>
              <strong>Action:</strong> an ultra-clean file, photos, inspections, transparency, structured follow-up.
            </p>
          </Card>

          <Card title="Joint ownership / conflict" subtitle="Read VII + VIII + Saturn/Mars/Pluto">
            <ul className="list-disc pl-5 space-y-2">
              <li>VII: the relationship to the other ({" "}
              <Link href="/synastrie" className="underline decoration-white/30 hover:decoration-white/60 transition">synastry</Link> / tug-of-war)</li>
              <li>VIII: sharing, credit, lawyer, obligations</li>
              <li>Saturn/Mars/Pluto: rigidity, anger, control</li>
            </ul>
            <p>
              <strong>Action:</strong> formalize, document, reduce emotion in the exchange.
            </p>
          </Card>

          <Card title="I want to move, but I can't manage it" subtitle="Uranus/Neptune = desire; Saturn = reality">
            <p>
              Uranus gives the urge to move. Neptune idealizes "elsewhere".
              Saturn calls for a structure (budget, job, file, timing).
            </p>
            <p>
              <strong>Action:</strong> turn the desire into a plan (see also{" "}
            <Link href="/blog/comprendre-signe-astrologique-ascendant-12-exemples" className="underline decoration-white/30 hover:decoration-white/60 transition">sign and ascendant</Link>) (3 steps + dates + documents).
            </p>
          </Card>

          <Card title="Renovation / works" subtitle="IV + Mars + Saturn (and sometimes Pluto)">
            <p>
              Mars: the worksite, energy, surprises. Saturn: structure, cost, delay.
              Pluto: demolition/reconstruction in the broad sense.
            </p>
            <p>
              <strong>Action:</strong> time/money margins, priorities, compared quotes.
            </p>
          </Card>
        </div>
      </section>

      {/* 6) checklist */}
      <section className="space-y-4">
        <H2>6) An astrological checklist before selling your property</H2>

        <Card title="Before looking for an astrological date" subtitle="Timing works better when the file is 'clean'.">
          <ul className="list-disc pl-5 space-y-2">
            <li>inspections / documents ready, consistent, accessible</li>
            <li>price aligned with the market (comparables + negotiation margin)</li>
            <li>photos + viewing: a "readable" house (order, light, smell, neutrality)</li>
            <li>follow-up process (agency / viewings / feedback)</li>
            <li>plan B (in case of delay: rental, storage, schedule)</li>
          </ul>

          <Callout tone="ok" title="The key point">
            <p>
              In applied astrology, the "right moment" is not a magic date:
              it is a period when <strong>the conditions are in place</strong> + when the sky is consistent with your movement.
            </p>
          </Callout>
        </Card>
      </section>

      {/* 7) conclusion */}
      <section className="space-y-4">
        <H2>7) Recap: selling your house with astrology</H2>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="p-5 border-b md:border-b-0 md:border-r border-white/10">
              <p className="text-sm text-text/60">The heart</p>
              <p className="mt-2 font-semibold text-text/90">House IV</p>
              <p className="mt-2 text-text/80">
                The home: what needs to move and why.
              </p>
            </div>

            <div className="p-5 border-b md:border-b-0 md:border-r border-white/10">
              <p className="text-sm text-text/60">The signature</p>
              <p className="mt-2 font-semibold text-text/90">Houses VII + X</p>
              <p className="mt-2 text-text/80">
                Contract + formalization: steps, deadlines, appointments.
              </p>
            </div>

            <div className="p-5">
              <p className="text-sm text-text/60">The crux</p>
              <p className="mt-2 font-semibold text-text/90">Houses II + VIII</p>
              <p className="mt-2 text-text/80">
                Bank, credit, sharing: where it freezes up… or breaks free. Check the{" "}
              <Link href="/dictionnaire-astrologique" className="underline decoration-white/30 hover:decoration-white/60 transition">astrological dictionary</Link>{" "}
              to dig deeper.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-white/10 bg-black/20 p-6">
        <p className="text-sm text-text/60">Continue your reading</p>
        <div className="mt-3 space-y-2 text-text/85">
          <p>
            Explore{" "}
            <Link href="/blog/finances-theme-astral" className="underline decoration-white/30 hover:decoration-white/60 transition font-semibold text-text/95">finances and the natal chart</Link>{" "}
            or discover{" "}
            <Link href="/blog/qualites-defauts-12-signes-zodiaque" className="underline decoration-white/30 hover:decoration-white/60 transition font-semibold text-text/95">strengths and weaknesses of the 12 signs</Link>.
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
