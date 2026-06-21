import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import Image from "next/image";
import { AUTHOR_PERSON, PUBLISHER_ORG } from "@/lib/seo";
import NeptunienImage from "@/public/images/blog/neptunien.webp";
import Neptunien2Image from "@/public/images/blog/neptunien2.webp";
import Neptunien3Image from "@/public/images/blog/neptunien3.webp";

export const meta = {
  slug: "neptunien",
  title: "The Neptunian: The Elusive Visionary",
  description:
    "Portrait of the Neptunian in astrology: intuition, spirituality, hypersensitivity and art. Explore the impact of Neptune's mysticism in a natal chart.",
  date: "2026-03-30",
  tags: [
    "Neptune",
    "neptunien",
    "portrait astrologique",
    "intuition",
    "spiritualité",
    "thème astral",
    "psychologie astrologique",
    "mysticisme",
    "amour",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/neptunien.webp",
};

function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
      <span
        className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400"
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
        className="mr-4 block h-px w-8 bg-gradient-to-r from-amber-500/50 to-transparent"
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
      box: "border-sky-500/30 bg-sky-500/10 shadow-[0_0_30px_rgba(56,189,248,0.05)]",
      icon: "text-sky-400",
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
  children,
  subtitle,
}: {
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-md transition-colors hover:bg-white/[0.05]">
      <div>

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

export default function NeptunienPost() {
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
                  name: "What is a Neptunian in astrology?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A Neptune-dominant planetary type: intuition, imagination, universal empathy, mediumistic sensitivity, permeability to atmospheres.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which careers suit a Neptune dominant?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Music, film, photography, spirituality, sea-related trades, pharmacy, holistic care, poetry.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the risks of an afflicted Neptune?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Addictions, lies, illusions, escape from reality, identity confusion, scams, emotional manipulation.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I know if I am a Neptunian?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Angular Neptune, in Pisces, aspects to the Sun or Moon, a stellium in Pisces, the Sun in the 12th House.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(251,191,36,0.1)] aspect-[7/3]">
        <Image
          src={NeptunienImage}
          alt="Symbolic portrait of the Neptunian temperament in astrology"
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
          className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-[80px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/50"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <Kicker>Neptune • intuition • mysticism • ideal • dissolution</Kicker>

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

          <div className="mt-8 rounded-2xl border border-indigo-400/20 bg-indigo-400/[0.04] px-6 py-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-300/80">Definition</p>
            <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
              The <strong>Neptunian in astrology</strong> refers to an individual whose <Link href="/planetes/neptune" className="underline hover:text-indigo-200">Neptune</Link> holds a dominant position in the <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline hover:text-indigo-200">natal chart</Link> (angular, well aspected, in Pisces or Cancer). They are marked by an extraordinary intuition, a boundless imagination and a permeability to subtle worlds that makes them both visionary and vulnerable.
            </p>
          </div>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            Do you have <strong>Neptune dominant</strong> in your natal chart, and does the concrete world often feel unreal, foreign, out of step? This mediumistic sensitivity is an extraordinary gift, but also a trap: confusion, addictions, escape from reality. This complete portrait of the <strong>Neptunian temperament</strong> — psychology, career, love, morphopsychology — explores the depths of this elusive planetary dominant, from the archetype of Poseidon to the risk of self-dissolution.
          </p>

          <div className="mt-8 border-t border-white/5 pt-6">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-3" aria-label="Key points of the Neptunian portrait">
        <Stat label="Central strength" value="Intuition & clairvoyance" />
        <Stat label="Natural ground" value="The invisible & inspiration" />
        <Stat label="Main shadow" value="Escape from reality" />
      </section>

      <section className="space-y-6">
        <H2>Neptunian intelligence: intuition, imagination and symbolic thought</H2>

        <Card>
          <p>
            Grasping the essence of the Neptunian calls for a certain humility. Classical astrological tradition sometimes struggles to define them precisely, and for good reason: the Neptunian does not live in the world of certainties, but in that of feelings.
          </p>
          <p>
            Where other planetary types (such as the Saturnian or the Mercurian) rely on logic, mathematics or absolute pragmatism, the Neptunian's intellect works like an ultra-sensitive radar. Its main feature? A dazzling intuition that very often borders on foresight or clairvoyance. This astral signature is, in fact, naturally credited with clear gifts of mediumship or telepathy.
          </p>
          <p>On this basis, it is obvious that the material world — cold and numerical — bores them deeply. The Neptunian finds their oxygen in:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Artistic creation: poetry, literature, painting, or the novel of anticipation and imagination.</li>
            <li>The exploration of the invisible: the occult, astrology, mystical studies or initiatory paths.</li>
          </ul>
          <p>
            It is not uncommon for the Neptunian to produce avant-garde works, perceived as "out there" or incomprehensible by their contemporaries. If they are cultivated, they can put forward dazzling theories, dictated by an inner flash of insight, far ahead of their time. This is the very archetype of the genius misunderstood in their lifetime, whose brilliance is often recognised and celebrated only after they have left this world.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>The Neptunian in society: universal empathy, vagueness and idealism</H2>

        <Card>
          <p>
            In their day-to-day relationships, the Neptunian is a soul of rare gentleness. Conciliatory, kind, deeply compassionate and always ready to help, they are an exceptionally attentive ear. However, do not ask them to keep their feet on the ground or to conform to the norm.
          </p>
          <p>
            The Neptunian is fundamentally ill at ease in our hyper-materialistic modern civilisation, centred on consumption, competition and profitability. They are a great dreamer, an absolute idealist, even a utopian.
          </p>
          <p>
            Faced with the harshness of the world, they do not choose warlike confrontation (typical of the Martian), but rather ideological engagement. Neptunian dominants are very often found among people who join idealistic political movements, unions, humanitarian associations or alternative collectives (especially if Neptune is connected to Mars in the natal chart). Their intellectual and social driving force? The visceral hope of healing society and creating a better world.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>The Neptunian in love: mystical fusion, sacrifice and sentimental illusions</H2>

        <Card>
          <p>
            On the emotional level, the Neptunian is an emotional sponge. Ultra-sensitive and impressionable, they are not looking for a simple life partnership: they are looking for the fusion of souls.
          </p>
          <p>
            However, this quest for an absolute ideal often makes them unstable in the reality of a couple. They are prone to many hesitations, torn between their dreams and prosaic reality. In daily life, they naturally tend to let themselves drift. In a union, it is very often their partner who takes the reins, makes the clear-cut decisions and "steers the ship" of the household.
          </p>
          <p>
            The Neptunian's Achilles' heel in love? The material side. Their lack of aptitude for financial affairs, administration or running daily life can become a major source of marital tension. If they do not find a partner able to anchor the couple in reality with kindness, this planetary signature can bring painful disillusionment or emotional sacrifices.
          </p>
        </Card>
      </section>

       <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(251,191,36,0.1)] aspect-[7/3]">
        <Image
          src={Neptunien2Image}
          alt="Portrait of the God of the 7 oceans in astrology"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>

      <section className="space-y-6">
        <H2>Neptunian careers: which paths for a Neptune dominant?</H2>

        <Card>
          <p>
            Apparently devoid of material ambition (power for power's sake does not interest them), the Neptunian often follows a winding life path. Yet they sometimes reach immense fame. This success does not come from a calculated career plan, but often arises through an almost magical alignment with collective circumstances (the Neptunian captures the "spirit of the times" like no one else) or thanks to unexplained flashes of genius.
          </p>
          <p>In a more "ordinary" destiny, the Neptunian will flourish far from grey offices and alienating routines. They find their true calling in:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Care and healing: medicine, paramedical professions, psychology, energy work.</li>
            <li>Mysticism: divinatory sciences, astrology, tarot reading.</li>
            <li>Words and images: literary collaboration, photography, film.</li>
            <li>The Water element: navigation, oceanography, or even, more pragmatically, industries related to liquids and fuels.</li>
          </ul>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>An afflicted Neptune in the natal chart: addictions, lies and escape from reality</H2>

        <Callout tone="warn" title="The shadow of Neptune">
          <p>
            Like every astrological archetype, the Neptunian has their share of shadow. When Neptune is severely afflicted (by major dissonances in the natal chart), hypersensitivity becomes a toxic vulnerability.
          </p>
          <p>
            Unable to bear the harshness of the world, the dissonant Neptunian seeks to escape. This need for flight can sadly lead them towards artificial paradises: alcoholism, drug addiction, or modern addictions (screens, video games, virtual illusions).
          </p>
          <p>
            In extreme cases, they may become fully desocialised, unable to secure a decent material life. Psychologically, this imbalance can show up as a paradoxical mindset: a complex of spiritual superiority where the individual believes themselves "too pure" or "too intelligent" to stoop to material tasks they deem unworthy of them.
          </p>
        </Callout>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Morphopsychology of the Neptunian: physical portrait and appearance</H2>

        <Card>
          <p>
            Encyclopaedic note: Neptune's influence can also be read on a global scale. One cannot help but link Neptune's transit through the intense, transgressive sign of Scorpio (from 1957 to 1970) with the upheavals of that era. This was the great period of the explosion of the hippie movement, the normalisation of psychedelic drugs, utopian protest and the emergence of "far-fetched" ideals seeking to overthrow the established order (notably during the five historic oppositions between Saturn and Neptune of that period).
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>The Neptunian woman in astrology: portrait of the Neptune-dominant woman</H2>

        <Card>
          <p>
            In a natal chart where feminine energy (the Yin, the inward turn) is predominant, a harmonious Neptune gives rise to a fascinating archetype: that of the priestess or the muse.
          </p>
          <p>
            Intuition is no longer merely a tool, it is an absolute guide. This person will never build their life on purely logical or positivist reasoning. They will let themselves be carried by "inner voices", synchronicities and inspirations whose rational origin they would be unable to explain, but which will prove formidably accurate. They will possess exceptional aptitudes for spiritual development and clairvoyance.
          </p>
          <p>
            On the other hand, if Neptune is strongly afflicted in this polarity, the danger is the total dissolution of the personality. Lacking practical sense, the person becomes too unstable to maintain a coherent course in life. The natural attraction to mystery can then sink into darker spheres: irrational fears, paranoia, belief in curses, a persecution complex or an unhealthy attraction to dubious magical practices. A poorly aspected Neptune always demands a conscious effort of grounding to maintain good mental balance, whatever the person's gender.
          </p>
        </Card>
      </section>

     <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(251,191,36,0.1)] aspect-[7/3]">
        <Image
          src={Neptunien3Image}
          alt="Portrait of Neptune in astrology"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>

      <section className="space-y-6">
        <H2>What to remember about the Neptunian profile in astrology</H2>

        <Callout tone="ok" title="Neptunian dominant">
          <p>
            In conclusion: having a Neptunian dominant in your natal chart is both a material challenge and an immense spiritual gift. It means carrying the entire ocean within you, with its invisible storms and its sunken treasures. To flourish, the Neptunian has only one duty: to find an anchor solid enough not to drown in their own dreams, so they can bring back to the surface the wonders that only they can perceive.
          </p>
        </Callout>
      </section>

      <section
        aria-label="Synthesis of the Neptunian portrait"
        className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm"
      >
        <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
          <div className="p-5 font-serif text-lg font-medium text-white/90">Axis</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Expression</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Risk</div>
        </div>

        <TableRow
          title="Intellect"
          effect="Intuition, clairvoyance, flashes of insight"
          reading="Confusion or drifting if Neptune is afflicted"
        />
        <TableRow
          title="Social life"
          effect="Compassion, utopia, idealistic engagement"
          reading="Out of step with material reality"
        />
        <TableRow
          title="Love"
          effect="Fusion, sensitivity, surrender"
          reading="Disillusionment, dependence, sacrifice"
        />
        <TableRow
          title="Vocation"
          effect="Art, care, mysticism, image, water"
          reading="Winding trajectory, lack of grounding"
        />
      </section>

      <section id="faq-neptunien" className="space-y-6">
        <H2>Frequently asked questions about the Neptunian</H2>

        <div className="space-y-4">
          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
            <summary className="flex cursor-pointer items-center gap-3 font-serif text-lg font-medium text-white/90 transition-colors hover:text-indigo-200">
              <svg className="h-5 w-5 shrink-0 text-indigo-300/60 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              What is a Neptunian in astrology?
            </summary>
            <p className="mt-4 pl-8 text-sm leading-relaxed text-white/70 md:text-base">
              A Neptune-dominant planetary type: intuition, imagination, universal empathy, mediumistic sensitivity, permeability to atmospheres.
            </p>
          </details>

          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
            <summary className="flex cursor-pointer items-center gap-3 font-serif text-lg font-medium text-white/90 transition-colors hover:text-indigo-200">
              <svg className="h-5 w-5 shrink-0 text-indigo-300/60 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              Which careers suit a Neptune dominant?
            </summary>
            <p className="mt-4 pl-8 text-sm leading-relaxed text-white/70 md:text-base">
              Music, film, photography, spirituality, sea-related trades, pharmacy, holistic care, poetry.
            </p>
          </details>

          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
            <summary className="flex cursor-pointer items-center gap-3 font-serif text-lg font-medium text-white/90 transition-colors hover:text-indigo-200">
              <svg className="h-5 w-5 shrink-0 text-indigo-300/60 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              What are the risks of an afflicted Neptune?
            </summary>
            <p className="mt-4 pl-8 text-sm leading-relaxed text-white/70 md:text-base">
              Addictions, lies, illusions, escape from reality, identity confusion, scams, emotional manipulation.
            </p>
          </details>

          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
            <summary className="flex cursor-pointer items-center gap-3 font-serif text-lg font-medium text-white/90 transition-colors hover:text-indigo-200">
              <svg className="h-5 w-5 shrink-0 text-indigo-300/60 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              How do I know if I am a Neptunian?
            </summary>
            <p className="mt-4 pl-8 text-sm leading-relaxed text-white/70 md:text-base">
              Angular Neptune, in Pisces, aspects to the Sun or Moon, a stellium in Pisces, the Sun in the 12th House.
            </p>
          </details>
        </div>
      </section>

      <footer className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md sm:p-12">
        <H3>Going further into the planetary portraits</H3>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Pill>Neptune</Pill>
          <Pill tone="sky">Astrological portrait</Pill>
          <Pill tone="violet">Spirituality</Pill>
          <Pill tone="emerald">Natal chart</Pill>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/blog/uranien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Read the portrait of the Uranian
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/blog/plutonien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Read the portrait of the Plutonian
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}
