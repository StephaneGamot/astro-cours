import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import Image from "next/image";
import { AUTHOR_PERSON, PUBLISHER_ORG } from "@/lib/seo";
import FinanceAstroImage from "@/public/images/blog/finances-theme-astral.webp";

export const meta = {
  slug: "finances-theme-astral",
  title: "Finances in the natal chart: the complete guide",
  description:
    "Learn how to analyse your finances through the natal chart: studying the 2nd House, its planets and aspects to understand financial gains and losses.",
  date: "2026-03-27",
  tags: [
    "finances",
    "argent",
    "maison II",
    "thème astral",
    "astrologie financière",
    "interprétation",
    "aspects",
    "maisons astrologiques",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/finances-theme-astral.webp",
};

// -- PREMIUM INTERFACE COMPONENTS --

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
    <h3 className="font-serif text-2xl font-medium text-white/90">
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

export default function FinancesThemeAstralPost() {
  const glow = getGlowFromTags(meta.tags);

  return (
    <article className="mx-auto max-w-4xl space-y-12 pb-20 pt-8 text-white">
      {/* STRUCTURED DATA (SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: meta.title,
              description: meta.description,
              image: `https://www.astro-cours.com${meta.cover}`,
              datePublished: `${meta.date}T12:00:00Z`,
              dateModified: `${meta.date}T12:00:00Z`,
              author: AUTHOR_PERSON,
              publisher: PUBLISHER_ORG,
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `https://www.astro-cours.com/blog/${meta.slug}`,
              },
              inLanguage: "en",
              keywords: meta.tags.join(", "),
              articleSection: "Astrology",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Which house should you look at for money in a natal chart?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You generally start with the 2nd House, its cusp sign, its ruler, the planets occupying the 2nd House and the aspects they receive.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the ruler of the 2nd House more important than a planet in the 2nd House?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "These are two different pieces of information. The ruler shows the origin and deeper logic of one's finances; a planet in the 2nd House shows what acts directly in that area.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can financial stability be seen in a natal chart?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, in part, by cross-referencing the 2nd House, its ruler, the quality of the planets, the signs, the aspects and the repetition of indicators throughout the chart.",
                  },
                },
              ],
            },
          ]),
        }}
      />
<div className="relative w-full aspect-[7/3] rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(251,191,36,0.1)] bg-[#0f0f13] flex items-center justify-center">
              <Image src={FinanceAstroImage} alt="An astrological symbol surrounded by coins" fill sizes="100vw" priority className="object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent z-10 pointer-events-none" />
            </div>
      {/* HERO SECTION BLOG */}
      <header className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
        {/* Glow effects */}
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
          <Kicker>
            Money • 2nd House • Income • Stability
          </Kicker>

          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="font-serif text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl md:max-w-3xl">
              The 2nd House, its ruler, aspects and a method of interpretation
            </h2>

            <div className="flex flex-wrap gap-3 text-sm text-white/70">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                Intermediate read
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                Pro method
              </span>
            </div>
          </div>

          <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            To assess <strong className="font-medium text-amber-200">finances in a natal chart</strong>,
            it is not enough to look at a single "money planet" or some isolated
            indicator. A serious reading rests first on the{" "}
            <strong className="font-medium text-white">2nd House</strong>, then on the{" "}
            <strong className="font-medium text-white">sign on its cusp</strong>, the{" "}
            <strong className="font-medium text-white">ruler of the 2nd House</strong>, the{" "}
            <strong className="font-medium text-white">planets present in the 2nd House</strong>, their{" "}
            <strong className="font-medium text-white">aspects</strong>, as well as the houses they
            rule. It is this hierarchy that lets you understand how a
            person earns, keeps, secures or weakens their money.
          </p>

          <div className="mt-8 pt-6 border-t border-white/5">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>



      {/* QUICK STATS */}
      <section className="grid gap-4 sm:grid-cols-3" aria-label="Key points of the article">
        <Stat label="Key house" value="2nd House" />
        <Stat label="Pivot of analysis" value="The ruler of the 2nd" />
        <Stat label="Common mistake" value="Presence ≠ Rulership" />
      </section>

      {/* INTRODUCTION CALLOUT */}
      <Callout tone="note" title="The right starting point">
        <p>
          In some textbooks you read that a planet present in a house
          "takes precedence" over the ruler of that house. In reality, these are{" "}
          <strong className="text-white">two different pieces of information</strong>.
        </p>
        <p>
          A planet located in the 2nd House shows{" "}
          <strong className="text-white">what acts directly</strong> on the finances.
          The ruler of the 2nd House shows{" "}
          <strong className="text-white">the origin, the motivation and the deeper logic</strong>{" "}
          behind how money works.
        </p>
      </Callout>

      <Divider />


{/* QUICK METHOD */}
      <section aria-labelledby="methode-titre" className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 shadow-2xl backdrop-blur-md sm:p-12">
        <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-amber-500/10 blur-[60px]" aria-hidden="true" />

        <h2 id="methode-titre" className="relative z-10 font-serif text-2xl font-medium text-white sm:text-3xl">
          The complete method for analysing money in a chart
        </h2>

        <div className="relative z-10 mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "1. Read the sign on the cusp of the 2nd House",
            "2. Study the ruler of the 2nd House",
            "3. Check whether the 2nd House is occupied",
            "4. Assess the celestial state of the planet in the 2nd",
            "5. Look at that planet's sign",
            "6. Examine the aspects it receives",
            "7. See which houses it carries with it",
            "8. Produce a layered synthesis",
          ].map((item, index) => (
            <div
              key={item}
              className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-black/40 px-5 py-4 transition-colors hover:border-amber-500/30 hover:bg-white/5"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500/10 font-serif text-sm font-bold text-amber-400 group-hover:bg-amber-500/20">
                {index + 1}
              </span>
              <span className="text-sm font-medium text-white/85 sm:text-base">{item.replace(/^\d+\.\s/, "")}</span>
            </div>
          ))}
        </div>
      </section>

      {/* DEFINITION BOX – Featured Snippet */}
      <aside className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-6 leading-relaxed text-white/85">
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-amber-400">Definition</p>
        <p><strong>Finances in the natal chart</strong> are analysed primarily through the <Link href="/maisons/maison-2">2nd House</Link> (income, possessions), its cusp sign, the planets that occupy it and the aspects they receive. This study reveals your natural relationship with money, your sources of income and your zones of financial fragility.</p>
      </aside>

      {/* APP intro */}
      <p className="text-base leading-relaxed text-white/80 md:text-lg">
        Do you want to understand your relationship with <strong>money</strong> through astrology? The answer is not found in your Sun sign, but in the <strong>2nd House</strong> of your <Link href="/blog/qu-est-ce-qu-un-theme-astral">natal chart</Link>. This methodical guide teaches you to analyse your finances in 7 steps, from the cusp sign to the aspects received, in order to decode gains, losses and financial potential.
      </p>

      {/* 1. CUSP SIGN */}
      <section className="space-y-6">
        <H2>1) The sign on the cusp of the 2nd House: your natural relationship with money</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          The sign placed on the cusp of the 2nd House indicates your{" "}
          <strong className="font-medium text-amber-200">personal conception of money</strong>:
          how you picture material security, how you reassure yourself, how
          you spend, how you protect your resources, and in what spirit you want
          to earn your living.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card
            title="What the sign reveals"
            subtitle="The sign gives the financial style and the underlying psychology."
          >
            <p>
              It does not yet tell you where the money comes from, nor whether finances will
              be easy or hard. Above all it shows{" "}
              <strong className="text-white">how the subject experiences money</strong>:
              caution, fear of lacking, need for control, taste for comfort,
              search for freedom, need for security or appetite for risk.
            </p>
          </Card>

          <Card
            title="Two simple examples"
            subtitle="Two cusps, two very different money logics."
          >
            <p className="mb-3">
              <strong className="text-white">Scorpio on the 2nd House</strong>:
              fear of losing, need to lock things down, need for security before
              spending, a strategy of protection.
            </p>
            <p>
              <strong className="text-white">Aquarius on the 2nd House</strong>:
              money is tied to freedom, to room for manoeuvre, sometimes with
              an instinctive confidence in the ability to find solutions again.
            </p>
          </Card>
        </div>

        <Callout tone="ok" title="Reading reflex">
          <p>
            The sign of the 2nd House first describes{" "}
            <strong className="text-white">a subjective relationship with money</strong>.
            On its own it is not enough to draw conclusions about real wealth.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* 2. RULER OF THE 2ND HOUSE */}
      <section className="space-y-6">
        <H2>2) The ruler of the 2nd House</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          The ruler of the 2nd House is central. It shows{" "}
          <strong className="font-medium text-amber-200">the origin of the finances</strong>, the deep
          motivation to earn money, as well as the concrete area through which
          resources are built, triggered or complicated.
        </p>

        <Card
          title="Fundamental rule"
          subtitle="The origin and motivation of a house lie where its ruler is found."
        >
          <div className="space-y-4">
            <p>
              <span className="text-amber-400">✦</span> If the ruler of the 2nd House is found in the <strong className="text-white">5th House</strong>, finances may
              be linked to children, passions, creativity, leisure, personal
              visibility, art or production inspired by pleasure.
            </p>
            <p>
              <span className="text-amber-400">✦</span> If the ruler of the 2nd is in the <strong className="text-white">10th House</strong>, money may come from career,
              status, social role, reputation or authority.
            </p>
            <p>
              <span className="text-amber-400">✦</span> If the ruler of the 2nd is in the <strong className="text-white">6th House</strong>, income flows more readily
              through daily work, service, concrete usefulness, routines or
              professional discipline.
            </p>
          </div>
        </Card>

        <Callout title="What to do next">
          <p>
            Spotting the ruler of the 2nd is not enough. You also need to{" "}
            <strong className="text-white">analyse the house where it sits</strong>,
            its sign, its quality and its aspects. That is where the real
            engine of the finances lies.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* 3. OCCUPIED HOUSE */}
      <section className="space-y-6">
        <H2>3) Is the 2nd House occupied by a planet?</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          When a planet is found in the 2nd House, it becomes active in the
          financial area. It acts directly on income, money management,
          spending, material priorities or financial stability.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card
            title="What it means"
            subtitle="The planet becomes committed to the affairs of the 2nd House."
          >
            <p className="mb-3">
              A planet in the 2nd House shows a concrete actor in the financial
              question. It colours the way one earns, spends, protects or
              transforms resources.
            </p>
            <p>
              Its celestial state therefore becomes crucial: a strong planet does not promise
              the same thing as a weak, thwarted or poorly supported one.
            </p>
          </Card>

          <Card
            title="What to assess"
            subtitle="Presence alone is never enough."
          >
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-emerald-400">✔</span>
                <span><strong className="text-white">Domicile or exaltation:</strong> greater ease in keeping its promises</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-sky-400">✔</span>
                <span><strong className="text-white">Term or triplicity:</strong> useful but more moderate support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-amber-400">✔</span>
                <span><strong className="text-white">Good link with its ruler:</strong> greater coherence</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-red-400">✘</span>
                <span><strong className="text-white">Poor celestial state:</strong> more fragile or unstable results</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      <Divider />

      {/* 4. SIGN OF THE PLANET IN THE 2ND */}
      <section className="space-y-6">
        <H2>4) The sign of the planet located in the 2nd House</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          The sign of the planet in the 2nd House changes the way financial
          events unfold over time. It tells you about stability, the
          frequency of changes and the durability of results.
        </p>

        <section aria-label="Table of signs" className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm">
          <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
            <div className="p-5 font-serif text-lg font-medium text-white/90">Type of sign</div>
            <div className="p-5 font-serif text-lg font-medium text-white/90">Dominant effect</div>
            <div className="p-5 font-serif text-lg font-medium text-white/90">Financial reading</div>
          </div>

          <TableRow
            title="Cardinal (Aries, Cancer...)"
            effect="Triggers, moves, reacts quickly"
            reading="Intensity and fast starts, but not always durable"
          />
          <TableRow
            title="Fixed (Taurus, Leo...)"
            effect="Stabilises, holds, consolidates"
            reading="Durability, greater capacity to preserve"
          />
          <TableRow
            title="Mutable (Gemini, Virgo...)"
            effect="Adapts, varies, changes often"
            reading="Genuine flexibility, but a risk of instability or fluctuation"
          />
        </section>

        <Callout tone="warn" title="An important nuance">
          <p>
            A mutable sign is not "bad" for finances. It points rather
            to a logic of variation, adaptation, frequent change or
            mobility. You then have to compensate with good structure elsewhere in the chart.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* 5. SUCCEDENT HOUSE */}
      <section className="space-y-6">
        <H2>5) The 2nd House is a succedent house</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          The 2nd House is a house of consolidation. It holds, organises,
          stabilises, accumulates and secures more than it launches. In the tradition,
          a planet in a succedent house does not always deploy its full force
          immediately.
        </p>

        <Card
          title="Reading consequence"
          subtitle="The 2nd House speaks of building, maintaining and solidifying."
        >
          <p className="mb-3">
            A planet in the 2nd House does indeed act, but often in a more
            gradual, more settled, more material way. It builds more than it
            bursts forth.
          </p>
          <p>
            On the other hand, if the{" "}
            <strong className="font-medium text-amber-200">ruler of the 2nd House is itself placed in the 2nd House</strong>,
            it gains in power: it can then more easily accomplish the
            attributes of the house.
          </p>
        </Card>
      </section>

      <Divider />

      {/* 6. ASPECTS RECEIVED */}
      <section className="space-y-6">
        <H2>6) The aspects received by the planet in the 2nd House</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Aspects show whether the planet present in the 2nd House is supported,
          reinforced, complicated, slowed down or fought against. You must judge both the
          nature of the aspect, the quality of the planet that sends it and the house
          it speaks from.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="General reading of the planets">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-white/50">✦</span>
                <span><strong className="text-white">Jupiter and Venus</strong> tend to strengthen finances</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-white/50">✦</span>
                <span><strong className="text-white">Sun, Moon, Mercury</strong> can help in a moderate way</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-white/50">✦</span>
                <span><strong className="text-white">Mars and Saturn</strong> more often create tensions or restrictions</span>
              </li>
            </ul>
          </Card>

          <Card title="General reading of the aspects">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-emerald-400">△</span>
                <span><strong className="text-white">Trine:</strong> very favourable, a more natural flow</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-sky-400">✱</span>
                <span><strong className="text-white">Sextile:</strong> positive, real help but more modest</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-amber-400">□</span>
                <span><strong className="text-white">Square:</strong> tension, effort, expense, struggle or instability</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-red-400">☍</span>
                <span><strong className="text-white">Opposition:</strong> polarisation, blockage, possible losses</span>
              </li>
            </ul>
          </Card>
        </div>

        <section aria-label="Table of celestial states" className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm">
          <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
            <div className="p-5 font-serif text-lg font-medium text-white/90">Situation of the aspect</div>
            <div className="p-5 font-serif text-lg font-medium text-white/90">Effect</div>
            <div className="p-5 font-serif text-lg font-medium text-white/90">Reading</div>
          </div>

          <TableRow
            title="Benefic well disposed"
            effect="Strengthens clearly"
            reading="Real support, a more solid promise"
          />
          <TableRow
            title="Benefic badly disposed"
            effect="Weakened help"
            reading="Partial support, less stable results"
          />
          <TableRow
            title="Malefic well disposed"
            effect="Restrains without breaking everything"
            reading="Manageable difficulty, structure possible"
          />
          <TableRow
            title="Malefic badly disposed"
            effect="Weakens markedly"
            reading="Strong tension, heavier pressure or blockages"
          />
        </section>

        <Callout title="The house the aspect comes from changes everything">
          <p>
            The house occupied by the planet sending the aspect shows{" "}
            <strong className="text-white">the area of life that helps or hinders the finances</strong>.
          </p>
          <p>
            A good aspect from Jupiter in the 10th House can support finances
            through career, status or recognition. A helpful aspect from Venus
            can favour money via relationships, image, art, connections or
            social support, depending on the house involved.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* 7. RULERSHIP OF THE PLANET */}
      <section className="space-y-6">
        <H2>7) The rulership of the planet in the 2nd House: where does the money come from?</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          A classic rule says that{" "}
          <strong className="font-medium text-amber-200">the ruler of a house carries its house with it</strong>.
          In other words, the planet present in the 2nd House brings with it the
          meanings of the houses it rules.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="An example of interpretation">
            <p>
              If a planet placed in the 2nd House rules the <strong className="text-white">12th House</strong>, it may
              bring heavy burdens, losses, ordeals, hidden expenses, obstacles
              or a kind of erosion into the finances.
            </p>
          </Card>

          <Card title="Deeper reading">
            <p>
              The house or houses ruled by the planet in the 2nd often become
              the <strong className="font-medium text-amber-200">cause</strong> of how the finances work:
              what feeds, motivates, disturbs, opens or blocks the money.
            </p>
          </Card>
        </div>
      </section>

      <Divider />

      {/* OVERALL SYNTHESIS */}
      <section className="space-y-6">
        <H2>Synthesis: the complete method for analysing finances in a chart</H2>

        <section className="rounded-[2rem] border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-transparent p-8 shadow-2xl backdrop-blur-md">
          <ol className="list-decimal space-y-4 pl-6 text-lg text-white/90 marker:font-serif marker:font-bold marker:text-emerald-400">
            <li>Read the sign on the cusp of the 2nd House</li>
            <li>Study the ruler of the 2nd House and the house where it sits</li>
            <li>Check for any planet present in the 2nd House</li>
            <li>Assess its celestial quality and its sign</li>
            <li>Analyse the aspects it receives</li>
            <li>Examine the houses it rules</li>
            <li><strong className="text-emerald-300">Produce an overall synthesis, never isolating a single factor.</strong></li>
          </ol>
        </section>

        <Callout tone="ok" title="A professional conclusion">
          <p>
            A good reading of money in astrology never rests on a single
            indicator. It rests on a{" "}
            <strong className="text-white">layered, cross-referenced reading</strong>.
          </p>
          <p>
            The 2nd House says <em>how</em> the financial question is posed. Its ruler says
            <em> where</em> it comes from. The planet in the 2nd says <em>what</em> acts directly. The aspects
            say what <em>supports or thwarts</em> it. The rulerships say what is
            <em> its deeper cause</em>.
          </p>
        </Callout>
      </section>

      {/* FAQ */}
      <section className="mt-16 space-y-8">
        <H2>FAQ — Money and the natal chart</H2>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Which house should you look at for money?">
            <p>
              The basis is the <strong className="text-white">2nd House</strong>. Then,
              depending on the question, you can add the 8th House (other people's money/banks), the 10th House (career)
              or other houses of the chart.
            </p>
          </Card>

          <Card title="Is a planet in the 2nd House always favourable?">
            <p>
              No. It all depends on its nature, its celestial state, its sign, its
              aspects and the houses it rules. An afflicted malefic can mean money leaks.
            </p>
          </Card>

          <Card title="Is the ruler of the 2nd more important than a planet in the 2nd?">
            <p>
              They do not say the same thing. You have to read them together, not
              mechanically set them against each other. The ruler shows the root, the planet shows the action.
            </p>
          </Card>

          <Card title="Can financial stability be seen?">
            <p>
              Yes, partially, by cross-referencing the 2nd House, its ruler, the nature of the
              signs (fixed = lasting), the aspects and the repetition of indicators throughout the chart.
            </p>
          </Card>
        </div>
      </section>

      {/* GO FURTHER */}
      <footer className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md sm:p-12">
        <H3>To go further in your analysis</H3>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Pill>2nd House</Pill>
          <Pill tone="sky">Astrological houses</Pill>
          <Pill tone="violet">Aspects</Pill>
          <Pill tone="emerald">Natal chart</Pill>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/blog/qu-est-ce-qu-un-theme-astral"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Understand the natal chart
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/blog/conjonction-melange-des-forces"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Master the conjunction
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* ============================================================ */}
        {/*  Enriched internal linking — Audit 31/05/2026 (R3)            */}
        {/*  9 additional contextual links to the relevant hubs          */}
        {/* ============================================================ */}
        <div className="mt-12 grid gap-3 text-left sm:grid-cols-2 lg:grid-cols-3">
          <Link href="/maisons/maison-2" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">House</span>
            <span className="mt-1 block font-medium text-white/90">2nd House — Resources</span>
            <span className="mt-1 block text-xs text-white/60">Earned money, personal values</span>
          </Link>
          <Link href="/maisons/maison-8" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">House</span>
            <span className="mt-1 block font-medium text-white/90">8th House — Shared money</span>
            <span className="mt-1 block text-xs text-white/60">Inheritances, taxes, joint debts</span>
          </Link>
          <Link href="/maisons/maison-10" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">House</span>
            <span className="mt-1 block font-medium text-white/90">10th House — Vocation</span>
            <span className="mt-1 block text-xs text-white/60">Income tied to social status</span>
          </Link>
          <Link href="/planetes/venus" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Planet</span>
            <span className="mt-1 block font-medium text-white/90">Venus — Pleasure and values</span>
            <span className="mt-1 block text-xs text-white/60">Natural ruler of Taurus / 2nd House</span>
          </Link>
          <Link href="/planetes/jupiter" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Planet</span>
            <span className="mt-1 block font-medium text-white/90">Jupiter — Expansion</span>
            <span className="mt-1 block text-xs text-white/60">Opportunities, gains, financial luck</span>
          </Link>
          <Link href="/planetes/saturne" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Planet</span>
            <span className="mt-1 block font-medium text-white/90">Saturn — Building</span>
            <span className="mt-1 block text-xs text-white/60">Patience, wealth, discipline</span>
          </Link>
          <Link href="/transits" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Method</span>
            <span className="mt-1 block font-medium text-white/90">Transits</span>
            <span className="mt-1 block text-xs text-white/60">Anticipating financial windows</span>
          </Link>
          <Link href="/aspects" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Method</span>
            <span className="mt-1 block font-medium text-white/90">Aspects</span>
            <span className="mt-1 block text-xs text-white/60">Squares and trines to the ruler of the 2nd</span>
          </Link>
          <Link href="/blog/orientation-professionnelle-theme-astral" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Article</span>
            <span className="mt-1 block font-medium text-white/90">Career path &amp; chart</span>
            <span className="mt-1 block text-xs text-white/60">The 10th House and a profitable vocation</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}
