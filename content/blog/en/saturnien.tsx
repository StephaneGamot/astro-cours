import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import Image from "next/image";
import { AUTHOR_PERSON, PUBLISHER_ORG } from "@/lib/seo";
import SaturnienImage from "@/public/images/blog/saturnien.webp";
import Saturnien2Image from "@/public/images/blog/saturnien2.webp";
import Saturnien3Image from "@/public/images/blog/saturnien3.webp";

export const meta = {
  slug: "saturnien",
  title:
    "The Saturnian: The Sage, the Master of Time",
  description:
    "A portrait of the Saturnian in astrology: depth, loyalty, solitude and wisdom. Discover their silent ambition and their impact in the natal chart.",
  date: "2026-04-01",
  tags: [
    "Saturne",
    "saturnien",
    "portrait astrologique",
    "résilience",
    "temps",
    "thème astral",
    "psychologie astrologique",
    "vocation",
    "amour",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/saturnien.webp",
};

function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-300">
      <span
        className="h-1.5 w-1.5 animate-pulse rounded-full bg-slate-300"
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
        className="mr-4 block h-px w-8 bg-gradient-to-r from-slate-400/60 to-transparent"
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
      box: "border-amber-500/30 bg-amber-500/10 shadow-[0_0_30px_rgba(245,158,11,0.05)]",
      icon: "text-amber-400",
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
      box: "border-slate-500/30 bg-slate-500/10 shadow-[0_0_30px_rgba(148,163,184,0.05)]",
      icon: "text-slate-300",
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
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-sm transition-all hover:border-slate-300/30">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-300/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
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
    <div className="group grid grid-cols-1 border-b border-white/10 transition-colors hover:bg-slate-300/[0.03] md:grid-cols-3">
      <div className="p-4 font-serif text-lg text-slate-200/90">{title}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{effect}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{reading}</div>
    </div>
  );
}

export default function SaturnienPost() {
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
                  name: "What is a Saturnian in astrology?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Saturnian is a planetary type with a dominant Saturn: rigour, depth, endurance, a sense of duty and early maturity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which careers suit a Saturn dominant?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Exact sciences, research, architecture, law, administration, agriculture, archaeology, geology.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the risks of an afflicted Saturn?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Depression, mental rigidity, chronic isolation, pessimism, avarice, emotional coldness.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I know if I am Saturnian?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Saturn angular, in Capricorn or Aquarius, aspects to the Sun or Moon, a stellium in Capricorn.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(148,163,184,0.12)] aspect-[7/3]">
        <Image
          src={SaturnienImage}
          alt="Portrait of the god Saturn in astrology"
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
          className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-slate-300/5 blur-[80px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-300/5 via-transparent to-black/50"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <Kicker>Saturn • time • structure • endurance • wisdom</Kicker>

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

          <div className="mt-8 max-w-3xl rounded-xl border border-slate-400/20 bg-slate-400/5 p-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-300">Definition</p>
            <p className="mt-2 text-base leading-relaxed text-white/80 sm:text-lg">
              The <strong>Saturnian in astrology</strong> refers to an individual whose <Link href="/planetes/saturne" className="text-slate-300 underline decoration-slate-300/30 hover:decoration-slate-300">Saturn</Link> occupies a dominant position in the <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="text-slate-300 underline decoration-slate-300/30 hover:decoration-slate-300">natal chart</Link> (angular, well aspected, in Capricorn or Aquarius). They are marked by exceptional intellectual depth, a keen sense of duty and a capacity for concentration that time only strengthens.
            </p>
          </div>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            Do you have <strong>a dominant Saturn</strong> in your natal chart and the feeling that you have always carried the world on your shoulders? This natural gravity commands respect, but it hides a trap: isolation, rigidity, chronic depression. This complete portrait of the <strong>Saturnian temperament</strong> — psychology, career, love, morphopsychology — explores the inner workings of this planetary dominant, from the archetype of Chronos to the challenge of lightening the inner load.
          </p>

          <div className="mt-8 border-t border-white/5 pt-6">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-3" aria-label="Key points of the Saturnian portrait">
        <Stat label="Core strength" value="Depth & endurance" />
        <Stat label="Natural ground" value="Structure & the long term" />
        <Stat label="Main shadow" value="Bitterness & isolation" />
      </section>

      <section className="space-y-6">
        <H2>The Saturnian intelligence: depth, rigour and systemic thinking</H2>

        <Card title="The intellect">
          <p>
            Do not look in the Saturnian for the lightning-quick repartee or the instant absorption of the Mercurian. Their intelligence does not shine through speed, but through a depth and a capacity for concentration that are absolutely beyond the ordinary.
          </p>
          <p>
            Faced with new information, the Saturnian takes their time. They dissect, analyse, structure. The absorption is slow, true, but once the concepts are acquired they become embedded in the mind as if carved in marble. They possess a prodigious memory, often defying the ravages of age.
          </p>
          <p>
            On the intellectual level, this is a relentless worker. During their schooling, they are rarely the "lucky" child who passes their exams on talent. Their success they owe to no one but themselves, to their merit and their stubborn patience. Faced with an obstacle, where others give up, the Saturnian persists. They are naturally gifted at:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>The exact sciences and mathematics: where rigour outweighs imagination.</li>
            <li>Long-haul research: this is the researcher capable of spending twenty years on the same subject to reach the truth.</li>
            <li>The great philosophical works: it is, moreover, impossible to leave a major historical mark on scientific or philosophical thought without a strong Saturnian dominant in one's natal chart.</li>
          </ul>
          <p>
            Their weak point? A deficit of intuition and fantasy. The Saturnian is a pragmatist of thought; they need the concrete.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>The Saturnian in society: chosen solitude, integrity and gravity</H2>

        <Card title="Social life">
          <p>
            A first meeting with a Saturnian is rarely an instant friendly connection. Lacking the solar magnetism or the jovial charm of the Jupiterian, they often come across as gruff, distant, even icy. They are the archetype of the deeply shy person who protects themselves.
          </p>
          <p>
            However, stopping at this first impression would be a fatal mistake. The Saturnian does not give themselves to just anyone; they have to be earned. It is over time (Saturn's eternal ally) that their true nature is revealed. You then discover:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>A friend of unshakeable loyalty: they speak little, but every word is weighed, sensible and inspired by a formidable observation of their surroundings.</li>
            <li>A peerless adviser: their judgement is impartial and of a relentless lucidity.</li>
            <li>A trustworthy collaborator: if they make a promise, they keep it. They are the pillar you can lean on when everything collapses. (Provided you give them a structured working framework, for they hate improvising.)</li>
          </ul>
        </Card>
      </section>

         <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(148,163,184,0.12)] aspect-[7/3]">
        <Image
          src={Saturnien3Image}
          alt="Symbolic portrait of the Saturnian temperament in astrology"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>

      <section className="space-y-6">
        <H2>The Saturnian in love: austere fidelity, modesty and lasting commitment</H2>

        <Card title="Love">
          <p>
            It must be admitted honestly: in matters of the heart, Saturn's signature is reputed to be one of the most austere. The Saturnian is neither a great romantic nor a fiery seducer. Their language of love is made not of grand effusions, but of fidelity and concrete acts.
          </p>
          <p>
            With little interest in emotional wandering, their youthful affairs are often rare. This is explained by their nature: they do not seek attention, lack "know-how" in seduction, and often hide a paralysing inferiority complex beneath their apparent coldness. It is not unusual for the young Saturnian to be initiated into love by an older person, or one endowed with strong Martian/Venusian energy, capable of piercing their shell and sensing the fire that smoulders beneath the ice.
          </p>
        </Card>

        <Card title="The Saturnian marriage: the test of time">
          <p>
            While they supply the largest contingent of single people (often by choice or resignation), the Saturnian often does end up marrying, but late. This is the sign of the "late bloomers" (those who flower late in life).
          </p>
          <p>
            If the astrological sky is kind, their union will be peaceful, reassuring and of an unshakeable solidity, each respecting their duties. However, in case of major dissonances, the absence of verbal passion can create a slow erosion. It is not unusual to see Saturnian unions dissolve or turn into tacit cohabitations after 20 or 25 years of marriage, worn down by the weight of habit.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Careers of the Saturnian: which paths for a Saturn dominant?</H2>

        <Card title="Vocation">
          <p>
            Beneath their modest, self-effacing air, the Saturnian harbours a colossal ambition. They do not seek fleeting glory; they seek permanence. Their success is a staircase they climb step by step, never letting themselves be discouraged by failures, criticism or the slowness of results.
          </p>
          <p>
            The Saturnian's recognition generally arrives late, often after the age of 50 or 60 (the famous period of Saturn's second return). Professionally, they excel in:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>The professions of structure and architecture (construction, engineering).</li>
            <li>The management of order and figures (chartered accountant, notary, archivist, librarian).</li>
            <li>The link with the Earth and time (agriculture, archaeology, geology).</li>
            <li>Spiritual elevation (the priesthood, monastic life).</li>
          </ul>
          <p>
            A social note: in more modest destinies, the Saturnian's immense capacity for resilience often leads them to accept the most thankless tasks that other archetypes flee. This is the solitary night watchman, the sewer worker, the labourer, the palliative-care nurse. They carry out these difficult jobs with absolute professional conscientiousness and a dignity that command respect.
          </p>
          <p>
            (Be careful, however, with the position of Saturn on the Midheaven: although it does not prevent supreme elevation, it often symbolises the risk of a fall or a reversal of fortune at the end of life.)
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>An afflicted Saturn in the natal chart: depression, rigidity and isolation</H2>

        <Callout tone="warn" title="The shadow of Saturn">
          <p>
            Like any planet of such density, a very dissonant Saturn in the natal chart produces heavy blockages. Introversion turns into misanthropy, and wisdom into bitterness.
          </p>
          <p>
            The "bad" Saturnian is a surly, devious being, deeply envious of others' happiness. Believing themselves cursed or the eternal victim of an unjust fate, they never question themselves, preferring to rail against their professional or family entourage. They wallow in the role of killjoy. In extreme cases (and historically documented by the tradition), this sense of injustice, coupled with a thirst for isolation, could lead to toxic resentment, slanderous gossip, even, in former times, an attraction to dark magic (vengeful witchcraft).
          </p>
          <p>
            One thing must be conceded to them, however: the famous Saturnian "bad luck" is not always an illusion. With difficult transits, this is the archetype that takes the most undeserved blows.
          </p>
        </Callout>
      </section>

     <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(148,163,184,0.12)] aspect-[7/3]">
        <Image
          src={Saturnien2Image}
          alt="Portrait of the god of time in astrology"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>

      <section className="space-y-6">
        <H2>The Saturnian woman in astrology: portrait of the woman with a Saturn dominant</H2>

        <Card title="The Yin expression">
          <p>
            In a woman, or in a chart dominated by Yin energy, a fine Saturn dominant gives the archetype of the Guardian. Often wary of destructive passions, her youthful affairs are rare. She will find her fulfilment in a marriage of reason, often late, with a mature, reassuring man (or sometimes a widower). There she will prove to be a peerless mistress of the house, organised, whose meticulous work will ensure the prosperity of the home.
          </p>
          <p>
            She is also the archetype of the deeply devoted woman: the one who, in former times, sacrificed her own love life to remain the benevolent pillar caring for her elderly parents or other family members.
          </p>
          <p>
            If Saturn is "afflicted", the tradition, through the pen of the occultist Péladan, describes her with terrible but psychologically accurate words: "A taciturn and disquieting figure, of a misanthropy that never wavers [...] envious of others' happiness." Having become tyrannical in the intimacy of the home, driven by avarice and a constant bitterness, she is the one who casts a chill by her mere presence, sometimes earning the sad nickname of the family "raven".
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>What to remember about the Saturnian profile in astrology</H2>

        <Callout tone="ok" title="Conclusion">
          <p>
            In conclusion: having a strong Saturnian dominant in one's natal chart is not a curse, quite the contrary — it is a diploma of karmic excellence. The universe entrusts this soul with the power of resilience. The Saturnian is like coal subjected to extreme pressure: the process is long, dark and painful, but they are the only one of the zodiac capable, at the end of their life, of transforming into a pure and indestructible diamond.
          </p>
        </Callout>
      </section>

      <section
        aria-label="Synthesis of the Saturnian portrait"
        className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm"
      >
        <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
          <div className="p-5 font-serif text-lg font-medium text-white/90">Axis</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Expression</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Risk</div>
        </div>

        <TableRow
          title="Intellect"
          effect="Concentration, depth, lasting memory"
          reading="Slowness, rigidity, lack of intuition"
        />
        <TableRow
          title="Social life"
          effect="Loyalty, sense of duty, reliability"
          reading="Coldness, distance, isolation"
        />
        <TableRow
          title="Love"
          effect="Fidelity, solidity, late commitment"
          reading="Emotional austerity, erosion through habit"
        />
        <TableRow
          title="Vocation"
          effect="Patience, structure, long-term ambition"
          reading="Delays, late falls, karmic heaviness"
        />
      </section>

      <section id="faq-saturnien" className="space-y-6" aria-label="Frequently asked questions about the Saturnian">
        <H2>Frequently asked questions about the Saturnian</H2>

        {[
          {
            q: "What is a Saturnian in astrology?",
            a: "The Saturnian is a planetary type with a dominant Saturn: rigour, depth, endurance, a sense of duty and early maturity.",
          },
          {
            q: "Which careers suit a Saturn dominant?",
            a: "Exact sciences, research, architecture, law, administration, agriculture, archaeology, geology.",
          },
          {
            q: "What are the risks of an afflicted Saturn?",
            a: "Depression, mental rigidity, chronic isolation, pessimism, avarice, emotional coldness.",
          },
          {
            q: "How do I know if I am Saturnian?",
            a: "Saturn angular, in Capricorn or Aquarius, aspects to the Sun or Moon, a stellium in Capricorn.",
          },
        ].map(({ q, a }) => (
          <details
            key={q}
            className="group rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md transition-colors open:bg-white/[0.04]"
          >
            <summary className="flex cursor-pointer items-center gap-3 p-5 text-base font-medium text-white/90 hover:text-slate-200 md:text-lg">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-300/60 text-sm text-white" aria-hidden="true">?</span>
              {q}
            </summary>
            <div className="px-5 pb-5 pl-14 text-sm leading-relaxed text-white/70 md:text-base">
              {a}
            </div>
          </details>
        ))}
      </section>

      <footer className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md sm:p-12">
        <H3>To go further with the planetary portraits</H3>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Pill>Saturn</Pill>
          <Pill tone="sky">Astrological portrait</Pill>
          <Pill tone="violet">Resilience</Pill>
          <Pill tone="emerald">Natal chart</Pill>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/blog/jupiterien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Read the portrait of the Jupiterian
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/blog/uranien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Read the portrait of the Uranian
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}
