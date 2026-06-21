import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import Image from "next/image";
import { AUTHOR_PERSON, PUBLISHER_ORG } from "@/lib/seo";
import UranienImage from "@/public/images/blog/uranien.webp";
import Uranien2Image from "@/public/images/blog/uranien2.webp";

export const meta = {
  slug: "uranien",
  title:
    "The Uranian: The Awakener & The Visionary",
  description:
    "Astrological portrait of the Uranian: independence, originality, rebellion, vocation, rupture, destiny, the pioneer, the Uranian woman in a natal chart.",
  date: "2026-03-31",
  tags: [
    "Uranus",
    "uranien",
    "portrait astrologique",
    "originalité",
    "indépendance",
    "thème astral",
    "psychologie astrologique",
    "vocation",
    "révolution",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/uranien.webp",
};

function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-violet-300">
      <span
        className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-300"
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
        className="mr-4 block h-px w-8 bg-gradient-to-r from-violet-400/60 to-transparent"
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
      box: "border-violet-500/30 bg-violet-500/10 shadow-[0_0_30px_rgba(167,139,250,0.05)]",
      icon: "text-violet-300",
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
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-sm transition-all hover:border-violet-300/30">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-300/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
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
    <div className="group grid grid-cols-1 border-b border-white/10 transition-colors hover:bg-violet-300/[0.03] md:grid-cols-3">
      <div className="p-4 font-serif text-lg text-violet-200/90">{title}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{effect}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{reading}</div>
    </div>
  );
}

export default function UranienPost() {
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
                  name: "What is a Uranian in astrology?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Uranus-dominant planetary type: intellectual brilliance, revolutionary spirit, originality, a radical need for freedom and a vision of the future.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which careers for a Uranus dominant?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Scientific research, new technologies, astrology, aviation, electronics, invention, social reform, computing.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the risks with an afflicted Uranus?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Chronic instability, destructive eccentricity, repeated ruptures, marginality, pointless provocations, relational chaos.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I know if I am a Uranian?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Angular Uranus (house I, IV, VII, X), in Aquarius, aspects to the Sun or the Ascendant, a stellium in Aquarius.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(167,139,250,0.12)] aspect-[7/3]">
        <Image
          src={UranienImage}
          alt="Symbolic portrait of the Uranian temperament in astrology"
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
          className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-violet-300/5 blur-[80px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-300/5 via-transparent to-black/50"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <Kicker>Uranus • future • rupture • independence • vision</Kicker>

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

          <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.04] px-6 py-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300/80">Definition</p>
            <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
              The <strong>Uranian in astrology</strong> refers to an individual whose <Link href="/planetes/uranus" className="underline decoration-cyan-400/40 underline-offset-2 hover:decoration-cyan-400">Uranus</Link> occupies a dominant position in the <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline decoration-cyan-400/40 underline-offset-2 hover:decoration-cyan-400">natal chart</Link> (angular, well aspected, in Aquarius or Scorpio). They are characterized by a lightning intelligence, a revolutionary spirit and an irrepressible need for freedom that always places them ahead of their time.
            </p>
          </div>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            Do you have <strong>Uranus dominant</strong> in your natal chart and the persistent feeling of never being in your place in this world? This intellectual brilliance fascinates as much as it isolates: eccentricity, instability, ruptures in series. This complete portrait of the <strong>Uranian temperament</strong> — psychology, career, love, morphopsychology — decodes the mechanisms of this extraordinary planetary dominant, from the archetype of Prometheus to the trap of sterile marginality.
          </p>

          <div className="mt-8 border-t border-white/5 pt-6">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-3" aria-label="Key points of the Uranian portrait">
        <Stat label="Core strength" value="Independence & originality" />
        <Stat label="Natural ground" value="Future & rupture" />
        <Stat label="Main shadow" value="Isolation & marginality" />
      </section>

      <section className="space-y-6">
        <H2>Uranian intelligence: brilliance, innovation and avant-garde vision</H2>

        <Card title="The essence">
          <p>
            To understand the Uranian, you must engrave two words in letters of fire in your mind: Independence and Originality.
          </p>
          <p>
            The major problem of the individual strongly marked by Uranus in their natal chart is a visceral, almost vital, need to tear themselves away from their roots. The Uranian suffocates in the norm. To exist, they must escape their origins, their social milieu, their formative frameworks, but also the customs, habits and laws in force.
          </p>
          <p>
            However, this is not a baseless adolescent rebellion. The Uranian possesses an implacable internal logic. They rethink the world for themselves. They refuse to accept an idea, a rule or a concept whose validity they have not long debated in the privacy of their own mind. This assertion of hyper-individuality is an arduous path, which almost always unfolds in two great karmic phases.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>The Cycle of the Uranian: The Two Phases of Individuation</H2>

        <Card title="The First Phase: Voluntary Exile and Condensation (Before 40)">
          <p>
            In the first part of their life, the Uranian often goes through a period that could be described as negative or introverted, but which is in reality an indispensable springboard. Faced with a world they judge obsolete or stifling, the Uranian withdraws.
          </p>
          <p>
            They distance themselves from those around them. Make no mistake: this is in no way a resignation or a depression. It is a strategic movement. The Uranian gathers all their inner forces. To survive the general incomprehension, they condense their being around its core. They make themselves, to use the traditional image, &quot;hard as a rock and narrow as a blade&quot; the better to impose their future power.
          </p>
          <p>
            During this period, the Uranian often cuts the figure of a misfit, an eccentric or a marginal. Out of deep intransigence, they refuse to be &quot;someone&quot; if it means being &quot;like everyone else.&quot;
          </p>
        </Card>

        <Card title="The Threshold of 42: The Uranus Opposition and the Revelation">
          <p>
            The major turning point in the destiny of the Uranian almost always occurs around the age of 42. In astrology, this corresponds to the opposition of celestial Uranus to natal Uranus (often called &quot;the midlife crisis&quot;). It is the spark that sets fire to the powder.
          </p>
        </Card>

        <Card title="The Second Phase: The Builder of the Future (After 42)">
          <p>
            This second phase is eminently positive, active and constructive. Yesterday's maladjusted eccentric has finished gathering their forces: they become &quot;Someone.&quot; They have drawn themselves together and enter into their absolute as into a fortress. They have become their own stronghold.
          </p>
          <p>
            The crucial problem of the Uranian is finally solved: since they could not integrate into society from the outset through conformity, they integrate into it by forcing society to recognize their worth. This is successful sublimation. Not being &quot;like the others&quot; demands a colossal power, for one can only get the unusual and the avant-garde accepted on the strict condition of making it real, useful and brilliant.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>The Uranian in society: marginal, provocateur and free thinker</H2>

        <Card title="Love and relationships">
          <p>
            In the romantic domain, the Uranian is a disconcerting, fascinating, but demanding partner. The traditional model of the couple — fusional, possessive or routine — gives them hives.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>The Uranian in love: radical freedom, ruptures and atypical love</H2>

        <Card title="Love and relationships">
          <p>
            They conceive of love as an alliance between two free spirits. To seduce and keep a Uranian, you must never try to lock them in a cage, even a gilded one. They need to admire their partner intellectually and demand absolute respect for their secret garden and their personal space. In return, they are a partner of incredible tolerance, free of prejudice, who will always encourage the other to emancipate themselves and become the best version of themselves.
          </p>
          <p>
            Lightning friendships, unexpected love at first sight, or clean and final ruptures: their relational life is often marked by the seal of surprise.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Uranian careers: which professions for a Uranus dominant?</H2>

        <Card title="The vocation">
          <p>
            The Uranian does not choose a job to pay the bills; they answer a calling. They are the man or woman with a marked destiny, the individual who has received a mission.
          </p>
          <p>
            The reach of Uranus's influence is such that it acts like a genetic amplifier: it allows the individual to force the expression of their latent talents and bring them to their maximum efficiency. The Uranian excels wherever the old must be destroyed to build the new:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Technology and the avant-garde: space engineering, computing, artificial intelligence, cutting-edge sciences.</li>
            <li>The disciplines of the invisible: astrology (Uranus is its ruling planet), cognitive psychology, neurosciences.</li>
            <li>Social reform: politics (in its revolutionary sense), activism, civil rights, humanitarian work.</li>
            <li>The visual arts: science-fiction cinema, abstract or conceptual art, electronic music.</li>
          </ul>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Afflicted Uranus in the natal chart: instability, eccentricity and chaos</H2>

        <Callout tone="warn" title="The shadow of Uranus">
          <p>
            But what happens if the Uranian fails? If Uranus is heavily dissonant in the chart (afflicted by Saturn or a heavy planet), the demand for freedom turns into sterile marginality.
          </p>
          <p>
            The myth of Prometheus — the one who stole fire from the Gods to give it to humankind — perfectly illustrates the Uranian archetype. Not all Uranians manage to distribute their fire. If they fail in their social sublimation, the Uranian risks a tragic destiny.
          </p>
          <p>
            Like Prometheus chained to his rock, they will be gnawed by the eagle of emotional dryness and bitterness. Unable to bend to the world, but unable to transform it, they shut themselves into a sclerotic destiny, becoming a perpetual contestant, cynical, proud, and dramatically isolated before the sea, under the icy gaze of the stars.
          </p>
        </Callout>
      </section>

    <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(167,139,250,0.12)] aspect-[7/3]">
        <Image
          src={Uranien2Image}
          alt="Portrait of Ouranos in astrology"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>

      <section className="space-y-6">
        <H2>The Uranian woman in astrology: portrait of the woman with a Uranus dominant</H2>

        <Card title="The Yin expression">
          <p>
            The Uranian woman (or the Yin Uranian energy) is a force of nature that shatters glass ceilings. She is the archetype of the Pioneer, the Suffragette, the woman of science or the innovator.
          </p>
          <p>
            Categorically refusing to submit to patriarchal dictates or to the traditional expectations tied to her gender, she invents her own rules. Whether she chooses to be a mother with alternative and avant-garde parenting methods, or a relentless businesswoman, she will always do it her own way. She disturbs as much as she fascinates by her total refusal to compromise her intellectual freedom.
          </p>
          <p>
            If Uranus is afflicted, this thirst for emancipation can become chaotic. She risks sabotaging all her relationships through a panic fear of commitment, confusing independence with a headlong flight.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Morphopsychology of the Uranian: physical portrait and appearance</H2>

        <Card title="The physical portrait">
          <p>
            Physically, the Uranian never goes unnoticed — not through classic criteria of beauty, but through an undeniable electric and magnetic &quot;aura.&quot;
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>General bearing: an often lanky, taut silhouette, animated by a nervous energy. Their gait is rapid, jerky, sometimes unpredictable.</li>
            <li>The gaze: this is their most distinctive trait. The Uranian gaze is piercing, clear, brilliant, sometimes called an &quot;eagle's gaze.&quot; It always seems to be fixed on a point at the celestial horizon that others do not see.</li>
            <li>The face: angular, asymmetrical or original features. The forehead is often high and prominent, signaling hyper-cerebrality.</li>
            <li>The style: the Uranian's dress style is made of contrasts. It can be of a totally assumed eccentricity (a forerunner of fashions) or, on the contrary, of an absolute utilitarianism (the famous identical black turtleneck worn every day by Steve Jobs, a Uranian figure par excellence, so as not to waste time choosing his clothes).</li>
          </ul>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>What to remember about the Uranian profile in astrology</H2>

        <Callout tone="ok" title="Conclusion">
          <p>
            In conclusion: the Uranian is the lightning rod of humanity. Having a Uranian dominant in your natal chart is no easy ride; it means accepting to live traversed by cosmic electricity. Their mission is not to reassure, but to awaken. Without the Uranians, humanity would still be lighting itself with candles, frightened by the darkness, unable to look up at the stars.
          </p>
        </Callout>
      </section>

      <section
        aria-label="Summary of the Uranian portrait"
        className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm"
      >
        <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
          <div className="p-5 font-serif text-lg font-medium text-white/90">Axis</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Expression</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Risk</div>
        </div>

        <TableRow
          title="Essence"
          effect="Independence, originality, refusal of the mold"
          reading="Sterile marginality, unproductive intransigence"
        />
        <TableRow
          title="Life cycle"
          effect="Strategic withdrawal then brilliant assertion"
          reading="Failure to integrate, lasting isolation"
        />
        <TableRow
          title="Love"
          effect="Free alliance, mental admiration, respect for space"
          reading="Clean ruptures, fear of confinement"
        />
        <TableRow
          title="Vocation"
          effect="Avant-garde, reform, technology, the future"
          reading="Perpetual contestant with no real work"
        />
      </section>

      <section id="faq-uranien" className="space-y-6">
        <H2>Frequently asked questions about the Uranian</H2>

        <div className="space-y-4">
          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
            <summary className="flex cursor-pointer items-center gap-3 font-serif text-lg font-medium text-white/90 transition-colors hover:text-cyan-200">
              <svg className="h-5 w-5 shrink-0 text-cyan-300/60 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              What is a Uranian in astrology?
            </summary>
            <p className="mt-4 pl-8 text-sm leading-relaxed text-white/70 md:text-base">
              Uranus-dominant planetary type: intellectual brilliance, revolutionary spirit, originality, a radical need for freedom and a vision of the future.
            </p>
          </details>

          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
            <summary className="flex cursor-pointer items-center gap-3 font-serif text-lg font-medium text-white/90 transition-colors hover:text-cyan-200">
              <svg className="h-5 w-5 shrink-0 text-cyan-300/60 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              Which careers for a Uranus dominant?
            </summary>
            <p className="mt-4 pl-8 text-sm leading-relaxed text-white/70 md:text-base">
              Scientific research, new technologies, astrology, aviation, electronics, invention, social reform, computing.
            </p>
          </details>

          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
            <summary className="flex cursor-pointer items-center gap-3 font-serif text-lg font-medium text-white/90 transition-colors hover:text-cyan-200">
              <svg className="h-5 w-5 shrink-0 text-cyan-300/60 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              What are the risks with an afflicted Uranus?
            </summary>
            <p className="mt-4 pl-8 text-sm leading-relaxed text-white/70 md:text-base">
              Chronic instability, destructive eccentricity, repeated ruptures, marginality, pointless provocations, relational chaos.
            </p>
          </details>

          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
            <summary className="flex cursor-pointer items-center gap-3 font-serif text-lg font-medium text-white/90 transition-colors hover:text-cyan-200">
              <svg className="h-5 w-5 shrink-0 text-cyan-300/60 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              How do I know if I am a Uranian?
            </summary>
            <p className="mt-4 pl-8 text-sm leading-relaxed text-white/70 md:text-base">
              Angular Uranus (house I, IV, VII, X), in Aquarius, aspects to the Sun or the Ascendant, a stellium in Aquarius.
            </p>
          </details>
        </div>
      </section>

      <footer className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md sm:p-12">
        <H3>To go further into the planetary portraits</H3>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Pill>Uranus</Pill>
          <Pill tone="sky">Astrological portrait</Pill>
          <Pill tone="violet">Vision</Pill>
          <Pill tone="emerald">Natal chart</Pill>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/blog/saturnien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Read the portrait of the Saturnian
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/blog/neptunien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Read the portrait of the Neptunian
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}
