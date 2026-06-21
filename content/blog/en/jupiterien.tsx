import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import Image from "next/image";
import { AUTHOR_PERSON, PUBLISHER_ORG } from "@/lib/seo";
import JupiterienImage from "@/public/images/blog/jupiterien1.webp";
import JupiterienImage2 from "@/public/images/blog/jupiterien2.webp";

export const meta = {
  slug: "jupiterien",
  title:
    "The Jupiterian: the Guide & the Benefactor",
  description:
    "Astrological portrait of the Jupiterian: abundance, law, optimism and power. Discover the influence and the excesses of Jupiter in a natal chart.",
  date: "2026-04-02",
  tags: [
    "Jupiter",
    "jupiterien",
    "portrait astrologique",
    "thème astral",
    "psychologie astrologique",
    "vocation",
    "amour",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/jupiterien1.webp",
};

function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-300">
      <span
        className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-300"
        aria-hidden="true"
      />
      {children}
    </span>
  );
}

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-6 flex items-center font-serif text-3xl font-light text-white md:text-4xl">
      <span
        className="mr-4 block h-px w-8 bg-gradient-to-r from-amber-400/60 to-transparent"
        aria-hidden="true"
      />
      {children}
    </h2>
  );
}

function H3({ children }: { children: ReactNode }) {
  return <h3 className="font-serif text-2xl font-medium text-white/90">{children}</h3>;
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
      box: "border-red-500/30 bg-red-500/10 shadow-[0_0_30px_rgba(239,68,68,0.06)]",
      icon: "text-red-300",
      svg: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
    },
    ok: {
      box: "border-emerald-500/30 bg-emerald-500/10 shadow-[0_0_30px_rgba(16,185,129,0.05)]",
      icon: "text-emerald-400",
      svg: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    note: {
      box: "border-amber-500/30 bg-amber-500/10 shadow-[0_0_30px_rgba(245,158,11,0.05)]",
      icon: "text-amber-300",
      svg: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  };

  const current = styles[tone];

  return (
    <aside
      aria-label={title}
      className={`relative overflow-hidden rounded-2xl border p-6 backdrop-blur-md ${current.box}`}
    >
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-current opacity-30 to-transparent" />
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
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-sm transition-all hover:border-amber-300/30">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-300/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
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
    <div className="group grid grid-cols-1 border-b border-white/10 transition-colors hover:bg-amber-300/[0.03] md:grid-cols-3">
      <div className="p-4 font-serif text-lg text-amber-200/90">{title}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{effect}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{reading}</div>
    </div>
  );
}

export default function JupiterienPost() {
  const glow = getGlowFromTags(meta.tags);

  return (
    <article className="mx-auto max-w-4xl space-y-12 pb-20 pt-8 text-white">
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
                  name: "What is a Jupiterian in astrology?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Jupiterian is a planetary type with Jupiter dominant: vision, generosity, benevolent authority, optimism and intellectual breadth.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which careers suit a Jupiter dominant?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The judiciary, higher education, diplomacy, banking, large corporations, religion, publishing.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the risks with an afflicted Jupiter?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Megalomania, excess in everything, wastefulness, arrogance, broken promises, lawsuits.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I know if I am a Jupiterian?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Jupiter angular, in Sagittarius or Pisces, trine/sextile to the Sun or the Moon, a stellium in Sagittarius.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(245,158,11,0.12)] aspect-[7/3]">
        <Image
          src={JupiterienImage}
          alt="Symbolic portrait of the Jupiterian temperament in astrology"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>

      <header className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
        <div
          className={`pointer-events-none absolute -right-24 -top-24 h-[500px] w-[500px] rounded-full opacity-30 mix-blend-screen blur-[100px] ${glow}`}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-amber-300/5 blur-[80px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-300/5 via-transparent to-black/50"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <Kicker>Jupiter • order • law • abundance • protection</Kicker>

          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">


            <div className="flex flex-wrap gap-3 text-sm text-white/70">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                Intermediate read
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                Psychological portrait
              </span>
            </div>
          </div>

          <div className="mt-8 max-w-3xl rounded-xl border border-violet-400/20 bg-violet-400/5 p-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet-300">Definition</p>
            <p className="mt-2 text-base leading-relaxed text-white/80 sm:text-lg">
              The <strong>Jupiterian in astrology</strong> refers to an individual whose <Link href="/planetes/jupiter" className="text-violet-300 underline decoration-violet-300/30 hover:decoration-violet-300">Jupiter</Link> holds a dominant position in the <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="text-violet-300 underline decoration-violet-300/30 hover:decoration-violet-300">natal chart</Link> (angular, well aspected, in Sagittarius or Pisces). They stand out through a broadened vision, an innate sense of justice and an expansive generosity that drives them toward high responsibilities.
            </p>
          </div>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            Do you have <strong>Jupiter dominant</strong> in your natal chart, along with an unshakeable optimism that pushes you toward the heights? This natural breadth inspires trust, but it conceals a trap: excess, arrogance, wasted resources. This complete portrait of the <strong>Jupiterian temperament</strong> — psychology, career, love, morphopsychology — reveals the inner workings of this major planetary dominant, from the archetype of Zeus to the risk of hubris.
          </p>

          <div className="mt-8 border-t border-white/5 pt-6">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-3" aria-label="Key points of the Jupiterian portrait">
        <Stat label="Core strength" value="Order & abundance" />
        <Stat label="Natural ground" value="Protection & organization" />
        <Stat label="Main shadow" value="Excess & pretension" />
      </section>

      <section className="space-y-6">
        <H2>Jupiterian intelligence: global vision, synthesis and optimism</H2>

        <Card title="The intellect">
          <p>
            The Jupiterian&apos;s intelligence has neither the hyperactive flash of the Mercurian nor the aridity of the Saturnian. Their mind stands out through three major qualities: discernment, judgment and method.
          </p>
          <p>
            It is one of the best-organized brains in the zodiac. If they don&apos;t always have an instant photographic memory, it doesn&apos;t matter in the least: their mind works like a perfectly catalogued library. Faced with a complex problem, the Jupiterian never panics. They sort, prioritize, separate the essential from the superfluous and find the solution with a disconcerting ease.
          </p>
          <p>
            Throughout their youth and schooling, this is the student for whom everything works out (they even have a reputation for being &quot;lucky&quot; at exams). In reality, this luck is often the result of their innate respect for instructions and their absolute common sense. Their thirst to learn is vast, but they shine especially in the fields that give society its structure:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Law and Justice: the law, the judiciary, diplomacy.</li>
            <li>Organization: public administration, the management of large companies, financial economics.</li>
            <li>The Elevation of Thought: sociology, philosophy, theology or high religious responsibilities.</li>
          </ul>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>The Jupiterian in society: generosity, prestige and a sense of command</H2>

        <Card title="Social life">
          <p>
            In society, the Jupiterian radiates a natural good humor, sincerity and tolerance. They are the pillar around which others gather. They naturally (and sometimes unconsciously) adopt a protective tone.
          </p>
          <p>
            Their heart is on their sleeve. If they have made a success of their own life (which is usually the case), they will make it a point of honor to use their influence or their money to protect the weakest, to give useful advice or to console. Traditional astrology rightly affirms that without the Jupiterians, there would be neither charitable associations nor philanthropic foundations. They are the ones who smooth the rough edges of a world that is often too harsh.
          </p>
          <p>
            Their Achilles&apos; heel? Pride and the need for esteem. The Jupiterian is very particular about their honor and their respectability. Fundamentally generous, they like to be noticed and thanked. To keep their friendship and their favor, you must avoid at all costs criticizing them in public or doubting their integrity. They are, let&apos;s admit it, very susceptible to flattery, for they are convinced (often rightly) of their own moral worth.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>The Jupiterian in love: greatness of soul, fidelity and a need for admiration</H2>

        <Card title="Love">
          <p>
            The Jupiterian&apos;s love life mirrors their social life: orderly, warm and respectful of public opinion. They have a holy horror of romantic scandals.
          </p>
          <p>
            The Jupiterian loves regularity, comfort and legality. As a result, this is an astral signature that very often leads to marriage, and that under excellent conditions. The Jupiterian&apos;s home is conceived as a haven of peace, often marked by ample material ease, fine gatherings and a generous table open to friends. Children hold a central place there.
          </p>
          <p>
            It is most certainly under the aegis of Jupiter that one finds the lowest rate of divorces and shattering separations. Even in the case of a brilliant social rise that exposes them to countless temptations, the Jupiterian will always prefer to preserve the balance, the prestige and the comfort of their lawful home rather than destroy everything for a passing affair.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Careers of the Jupiterian: which paths for a Jupiter dominant?</H2>

        <Card title="Vocation">
          <p>
            The destiny of a good Jupiterian almost always sits &quot;above average.&quot; This is not the sign of thankless tasks carried out in the shadows. Their natural fulfillment lies in leadership, management and power.
          </p>
          <p>
            You will find them with disconcerting ease in positions of leadership: CEOs, senior executives, bankers, administrators, or high-ranking politicians. (A fascinating historical fact: mundane astrology often associates periods of great prosperity, such as the &quot;Belle Époque,&quot; with Jupiterian cycles, characterized by economic expansion and diplomacy, as opposed to the cycles of Mars or Saturn, which give rise to wars and crises.)
          </p>
          <p>
            They are, of course, a &quot;bon vivant.&quot; They love the comfort of a fine home, the pleasures of the table, good wines and leisure travel, all while knowing (if they are balanced) how to keep a sense of measure.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>An afflicted Jupiter in the natal chart: excess, megalomania and waste</H2>

        <Callout tone="warn" title="The shadow of Jupiter">
          <p>
            When Jupiter is severely dissonant in the chart (in square or opposition to difficult planets), optimism turns into pretension, and abundance becomes excess.
          </p>
          <p>
            The &quot;bad&quot; Jupiterian suffers from an unbearable superiority complex. Their distorted judgment drives them to overestimate their abilities. They draw up grandiose, megalomaniacal projects that end up collapsing, bringing ruin upon their collaborators or their family (the blame for which they will always shift onto others or onto &quot;bad luck&quot;).
          </p>
          <p>
            If they fail to reach the social position they believe to be theirs by divine right, this dissonant type can turn cynical. Instead of being a pillar of the law, they may be tempted by financial fraud, intellectual &quot;bluff,&quot; or transform into an armchair revolutionary, seeking to tear down a system that refused to crown them. It is also in these configurations that one finds the major physical excesses: irrepressible gluttony, obesity or an addiction to luxury.
          </p>
        </Callout>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>The Jupiterian woman in astrology: a portrait of the woman with a Jupiter dominant</H2>

        <Card title="The Yin expression">
          <p>
            In a natal chart with a strong Yin dominant, or in a woman, a fine Jupiterian signature embodies the &quot;Grande Dame,&quot; the brilliant organizer and the perfect mistress of the house.
          </p>
          <p>
            The French occultist Péladan said of her: &quot;In evoking the women of the court of Louis XIV, one finds the finest specimens of this influence. It unites the qualities of seriousness and elegance required for any public role.&quot;
          </p>
          <p>
            Today, if she is not supporting the career of an influential husband, the Jupiterian woman takes the reins herself. She excels in the liberal professions, the judiciary or company management. She commands respect through her natural authority, always tempered with benevolence.
          </p>
          <p>
            If Jupiter is afflicted, pride takes over. Convinced that &quot;everything is owed to her,&quot; she demands honors and a luxurious lifestyle from life without being willing to put in the effort. She can ruin her household through reckless prestige spending (the famous &quot;keeping up appearances at all costs&quot;) and cry cosmic injustice if she is denied the slightest of her demands.
          </p>
        </Card>
      </section>

        <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(245,158,11,0.12)] aspect-[7/3]">
        <Image
          src={JupiterienImage2}
          alt="Portrait of Zeus in astrology"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>

      <section className="space-y-6">
        <H2>Morphopsychology of the Jupiterian: physical portrait and appearance</H2>

        <Card title="The physical portrait">
          <p>
            The morphology of the Jupiterian exudes abundance, quiet authority and health. Everything about them is conceived on the scale of expansion:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>General bearing: powerful, ample and majestic forms. An often imposing build, tending naturally toward stoutness with the years (Jupiter dilates what it touches). Their gait is measured, grounded, never hurried.</li>
            <li>The face: a fleshy complexion, often rosy or fresh. The outline of the face recalls a trapezoid. The forehead is broad, slightly convex, signaling a great capacity for intellectual synthesis.</li>
            <li>The gaze: large, wide-open eyes, smiling and deeply benevolent. The eyebrows are generally very developed, sometimes shaped like a &quot;circumflex,&quot; lending the face an expression of natural authority.</li>
            <li>The details: a fleshy nose, a large, sinuous mouth with colored, gourmand lips (the very signature of the bons vivants). The Jupiterian&apos;s voice is unforgettable: deep, warm, with a clear and sometimes slightly emphatic diction, ideal for captivating an audience. (In men, the wearing of a beard — recalling the mythological figure of Zeus — is very common.)</li>
          </ul>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>What to remember about the Jupiterian profile in astrology</H2>

        <Callout tone="ok" title="Conclusion">
          <p>
            In conclusion: having a strong Jupiterian dominant in your natal chart is an immense privilege, but also a great social responsibility. The Jupiterian is the shepherd of the zodiac. Their true karmic mission is not merely to accumulate success and comfort for themselves, but to ensure that prosperity, justice and human warmth flow down upon all those who cross their path.
          </p>
        </Callout>
      </section>

      <section
        aria-label="Summary of the Jupiterian portrait"
        className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm"
      >
        <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
          <div className="p-5 font-serif text-lg font-medium text-white/90">Axis</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Expression</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Risk</div>
        </div>

        <TableRow
          title="Intellect"
          effect="Method, discernment, synthesis, judgment"
          reading="Overestimation, excessive certainties, smugness"
        />
        <TableRow
          title="Social life"
          effect="Protection, generosity, warmth, influence"
          reading="Pride, need for esteem, flattery"
        />
        <TableRow
          title="Love"
          effect="Stable home, respectability, peace, comfort"
          reading="Social rigidity, excessive attachment to prestige"
        />
        <TableRow
          title="Vocation"
          effect="Leadership, law, administration, diplomacy"
          reading="Megalomania, bluff, material excess and luxury"
        />
      </section>

      <section id="faq-jupiterien" className="space-y-6" aria-label="Frequently asked questions about the Jupiterian">
        <H2>Frequently asked questions about the Jupiterian</H2>

        {[
          {
            q: "What is a Jupiterian in astrology?",
            a: "The Jupiterian is a planetary type with Jupiter dominant: vision, generosity, benevolent authority, optimism and intellectual breadth.",
          },
          {
            q: "Which careers suit a Jupiter dominant?",
            a: "The judiciary, higher education, diplomacy, banking, large corporations, religion, publishing.",
          },
          {
            q: "What are the risks with an afflicted Jupiter?",
            a: "Megalomania, excess in everything, wastefulness, arrogance, broken promises, lawsuits.",
          },
          {
            q: "How do I know if I am a Jupiterian?",
            a: "Jupiter angular, in Sagittarius or Pisces, trine/sextile to the Sun or the Moon, a stellium in Sagittarius.",
          },
        ].map(({ q, a }) => (
          <details
            key={q}
            className="group rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md transition-colors open:bg-white/[0.04]"
          >
            <summary className="flex cursor-pointer items-center gap-3 p-5 text-base font-medium text-white/90 hover:text-violet-200 md:text-lg">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-300/60 text-sm text-white" aria-hidden="true">?</span>
              {q}
            </summary>
            <div className="px-5 pb-5 pl-14 text-sm leading-relaxed text-white/70 md:text-base">
              {a}
            </div>
          </details>
        ))}
      </section>

      <footer className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md sm:p-12">
        <H3>To go further into the planetary portraits</H3>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Pill>Jupiter</Pill>
          <Pill tone="sky">Astrological portrait</Pill>
          <Pill tone="violet">Organization</Pill>
          <Pill tone="emerald">Natal chart</Pill>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/blog/martien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Read the portrait of the Martian
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/blog/saturnien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Read the portrait of the Saturnian
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}
