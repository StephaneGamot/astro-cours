import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import Image from "next/image";
import { AUTHOR_PERSON, PUBLISHER_ORG } from "@/lib/seo";
import LunarienImage from "@/public/images/blog/lunarien.webp";
import Lunarien2Image from "@/public/images/blog/lunarien2.webp";
import Lunarien3Image from "@/public/images/blog/lunarien3.webp";

export const meta = {
  slug: "lunarien",
  title:
    "The Lunar Type in Astrology: Memory & Intuition",
  // ✅ Ahrefs SERP rewrite — title that Google displays, without the " — Astro Cours" suffix.
  seoTitle: "The Lunar Type: Dreamer, Keeper of Memory & Intuition",
  description:
    "Portrait of the Lunar type in astrology: memory, intuition, home and gentleness. Discover the Moon's impact on love, vocation and the natal chart",
  date: "2026-04-06",
  tags: [
    "lune",
    "lunarien",
    "portrait astrologique",
    "intuition",
    "mémoire",
    "thème astral",
    "psychologie astrologique",
    "foyer",
    "amour",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/lunarien.webp",
};

function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-200">
      <span
        className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-200"
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
        className="mr-4 block h-px w-8 bg-gradient-to-r from-sky-300/60 to-transparent"
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
      box: "border-sky-400/30 bg-sky-400/10 shadow-[0_0_30px_rgba(125,211,252,0.05)]",
      icon: "text-sky-200",
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
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-sm transition-all hover:border-sky-200/30">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-200/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
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
    <div className="group grid grid-cols-1 border-b border-white/10 transition-colors hover:bg-sky-200/[0.03] md:grid-cols-3">
      <div className="p-4 font-serif text-lg text-sky-100/90">{title}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{effect}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{reading}</div>
    </div>
  );
}

export default function LunarienPost() {
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
                  name: "What is a Lunar type in astrology?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Lunar type is a planetary type defined by the dominance of the Moon in the natal chart. Extreme sensitivity, remarkable memory, powerful imagination and a need for emotional security characterize this profile, often considered the most receptive of the zodiac.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which careers suit a Moon-dominant person?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Lunar type excels in professions linked to care, listening and creativity: psychology, literature, poetry, history, archaeology, narrative journalism, early childhood and any career where empathy is a major asset.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the risks of an afflicted Moon?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A Moon in a dissonant aspect (square or opposition to Saturn, Mars) can cause passivity, emotional dependence, emotional instability, escapism and vulnerability to addictions — the Lunar type then loses touch with reality.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I know if I am a Lunar type in my natal chart?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Check whether your Moon is angular (in House 1, 4, 7 or 10), whether it receives harmonious aspects (trine, sextile) and whether it is in dignity (Cancer, Taurus). A stellium in Cancer also reinforces the lunar profile.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(125,211,252,0.12)] aspect-[7/3]">
        <Image
          src={LunarienImage}
          alt="Symbolic portrait of the lunar temperament in astrology"
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
          className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-sky-200/5 blur-[80px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-200/5 via-transparent to-black/50"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <Kicker>Moon • memory • intuition • home • gentleness</Kicker>

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

          {/* ── Definition block (Featured Snippet) ── */}
          <div className="mt-8 rounded-2xl border border-sky-400/20 bg-sky-400/[0.04] px-6 py-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-300/80">Definition</p>
            <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
              The <strong>Lunar type in astrology</strong> describes an individual whose <Link href="/planetes/lune" className="underline decoration-sky-400/40 underline-offset-2 hover:decoration-sky-400">Moon</Link> holds a dominant position in the <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline decoration-sky-400/40 underline-offset-2 hover:decoration-sky-400">natal chart</Link> (angular, well aspected, in Cancer or Taurus). They stand out for an extreme sensitivity, a teeming imagination and a visceral need for emotional security.
            </p>
          </div>

          {/* ── APP Introduction (Hook → Problem → Promise) ── */}
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            Do you have a <strong>dominant Moon</strong> in your natal chart, and does your inner world feel like a bottomless ocean? This hypersensitivity, at times a mediumistic gift, at times an emotional prison, often remains misunderstood — even by the one who lives it. This complete portrait of the <strong>lunar temperament</strong> — psychology, career, love, morphopsychology — helps you transform this apparent fragility into deep strength, from the archetype of Selene to the traps of emotional dependence.
          </p>

          <div className="mt-8 border-t border-white/5 pt-6">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-3" aria-label="Key points of the lunar portrait">
        <Stat label="Core strength" value="Memory & sensitivity" />
        <Stat label="Natural ground" value="Home & imagination" />
        <Stat label="Main shadow" value="Passivity & escape" />
      </section>

      <section className="space-y-6">
        <H2>How the Moon influences the Lunar type's intelligence and memory</H2>

        <Card title="The intellect">
          <p>
            The Lunar type's intellect works neither through mathematical deduction (Saturn) nor through logical brilliance (Mercury). Their mind is a vast library of impressions. Their master faculties are inspiration, imagination, intuition and, above all, an absolutely exceptional memory.
          </p>
          <p>
            The Lunar type is generally not someone thirsty for pure knowledge. They do not like to &quot;force&quot; their mind. Yet they assimilate things without apparent effort, because everything that touches them emotionally is imprinted on them forever. This is the student capable of saving their school year thanks to an extraordinary ability to learn by heart, thus making up for a certain lack of drive or punctuality.
          </p>
          <p>
            The Lunar type's mind is fundamentally contemplative and turned toward the past (in direct analogy with the sign of Cancer). As a result, cold mathematics or the hard sciences often put them off. They will shine brightly, on the other hand, in:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Literature and Poetry: Where their dreamy soul can pour itself out freely.</li>
            <li>History: Nothing fascinates a Lunar type more than plunging into humanity's memories — archaeology, genealogy or the safeguarding of heritage.</li>
            <li>Journalism or Storytelling: Wherever sensitivity and life stories must be called upon.</li>
          </ul>
        </Card>
      </section>

      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(125,211,252,0.12)] aspect-[7/3]">
        <Image
          src={Lunarien2Image}
          alt="Portrait of a modern-day Selene"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>

      <section className="space-y-6">
        <H2>Sensitivity and social life: why the Lunar type absorbs emotions</H2>

        <Card title="Social life">
          <p>
            The Lunar type is the embodiment of gentleness. Sensitive, impressionable, often shy and deeply pacifist, they flee heated discussions, ego battles and conflict. Their primary need is calm, security and tranquility.
          </p>
          <p>
            They are a true &quot;emotional sponge&quot;. In their youth, it is essential to watch over their circle, because they literally absorb the energy, the habits and sometimes even the morality of the people they spend time with. The Lunar type is highly malleable: the imprint they receive from their family and their original environment often conditions the whole of their adult life.
          </p>
          <p>
            In society, they are much appreciated for their conciliatory nature. However, their relationships can sometimes be thrown off by their cyclical, moody side. Like the phases of the Moon, their mood is perpetually changing. They can promise things one day with sincere enthusiasm, and &quot;forget&quot; the next — not out of malice, but out of pure carelessness or dreamy nonchalance. And yet they are always forgiven, so evident is their natural kindness.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>The Lunar type in love: fusional, protective and emotionally dependent</H2>

        <Card title="Love">
          <p>
            In the realm of feelings, the Lunar type's life revolves around a single word: Home. The fling with no tomorrow does not interest them; they thirst for a cozy, protective and reassuring nest.
          </p>
          <p>
            However, their shyness and indecision can sometimes slow the realization of their loves. Particularly attached to their roots, it is not unusual to see a Lunar type deliberately delay their own marriage out of loyalty to their family of origin (to care for an aging parent, for example).
          </p>
          <p>
            Once married, they are one of the most faithful archetypes of the zodiac. Kind and home-loving, they avoid quarrels at all costs. Indeed, with the influence of Jupiter, the Moon signature records the lowest divorce rate in astrology. If there are marital tensions, the Lunar type will adapt, bow their head or sacrifice themselves so as not to break the home, and above all to protect the emotional well-being of their children, who will always be the absolute love of their life.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Careers of the Lunar type: which paths for a Moon-dominant person?</H2>

        <Card title="Vocation">
          <p>
            The Lunar type's destiny is intimately tied to cosmic rhythms (one often observes major turning points linked to cycles of about 28 years). Professionally, they cannot bear ultra-competitive atmospheres. They need a job that does not do violence to their nature.
          </p>
          <p>
            They will often favor secure paths: taking over a family business, teaching, social work, early childhood professions (nursery, education), the hotel trade, or professions linked to their element of choice: Water (sailors, fishermen, oceanographers, or simply a life centered around a home near a body of water).
          </p>
          <p>
            But beware: the social gap can be immense among Lunar types. While most flourish in simple and modest lives, a powerfully lunar natal chart (supported by the Sun or Jupiter) can propel the individual toward extraordinary fame. The Moon represents &quot;the Crowd&quot; and &quot;the collective Unconscious&quot;. A great Lunar type (comic actor, writer, politician) possesses the magical gift of captivating the goodwill of the masses. It is, moreover, a formidable sign of victory in political astrology.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>An afflicted Moon in the natal chart: the dangers of the lunar temperament</H2>

        <Callout tone="warn" title="The Moon's shadow">
          <p>
            When the Moon is very poorly aspected in the natal chart (notably by dissonances with Saturn), sensitivity becomes weakness, and the dream becomes escape.
          </p>
          <p>
            The afflicted Lunar type is the archetype of the lazy waverer. Unable to maintain a course of action, indecisive in the extreme, they never finish what they start. Without outside support, they risk vegetating in obscurity, letting themselves be carried entirely by their life partner, who will have to take on all the responsibilities alone (steering the financial and administrative ship).
          </p>
          <p>
            To flee the harshness of the real world they cannot bear, this dissonant type may develop a strong inclination toward toxic escape (notably alcoholism). Astrological tradition notes that in very marginal destinies, or among &quot;celestial vagabonds&quot;, the Saturn-Moon dissonance is often predominant, symbolizing an individual crushed by reality and taking refuge in total passivity.
          </p>
        </Callout>
      </section>

    <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(125,211,252,0.12)] aspect-[7/3]">
        <Image
          src={Lunarien3Image}
          alt="Statue of Selene in Greek mythology"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>

      <section className="space-y-6">
        <H2>The Lunar woman in astrology: portrait of the Moon-dominant woman</H2>

        <Card title="The Yin expression">
          <p>
            In a feminine chart (or one of Yin energy), a beautiful Moon is considered by traditional astrology to be the most natural and gentle position. She is the Mother and the Wife par excellence: devoted, protective, able to turn any place into a cozy cocoon (the famous &quot;hygge&quot; is a deeply lunar concept).
          </p>
          <p>
            The ancient authors claim that &quot;every woman is first under the influence of the Moon&quot;, so closely is the ancestral feminine archetype tied to it. She is the poetic muse who, by her soothing presence alone, heals the anxieties of those around her.
          </p>
          <p>
            If the Moon is very dissonant, this same energy turns against itself. Imagination becomes chimerical, even paranoid. Gentleness becomes gossip. She may then become lazy, slanderous, envious of others' lives, fleeing her family responsibilities and reveling in the role of the eternal misunderstood victim.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Morphopsychology of the Lunar type: physical portrait and appearance</H2>

        <Card title="The physical portrait">
          <p>
            The Lunar type's physical typology is dominated by a single geometric form: roundness and curve. The physical body translates the soul's gentleness.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>The general look: Soft, full forms, sometimes plump (&quot;à la Van Loo&quot;). The Lunar type easily puts on weight, as water and emotions tend to stagnate in their body.</li>
            <li>The face: A &quot;frank round&quot;, often lunar. A rounded skull without hard angles. The complexion is generally very fair, milky or pale, fearful of the burning sun.</li>
            <li>The gaze: Large eyes, often round or slightly bulging, very moist, giving a constant expression of wonder, gentleness, even prolonged childhood. The brow arch describes a perfect curve.</li>
            <li>The details: A domed, smooth forehead. A broad, short nose, sometimes turned up or hollowed in the middle. A strong, full-lipped mouth in pale tones, and a rounded chin that melts gently into the oval of the face.</li>
          </ul>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>What to remember about the Lunar profile in astrology</H2>

        <Callout tone="ok" title="Conclusion">
          <p>
            In conclusion: In a society obsessed with performance, the Lunar type is the keeper of our humanity and our share of childhood. To have a strong lunar dominance in one's chart is to possess the rare gift of knowing how to marvel, to cherish the past and to offer the world a refuge. The Lunar type's only great challenge? Learning to forge a shell sturdy enough to protect their extreme sensitivity, without ever ceasing to dream.
          </p>
        </Callout>
      </section>

      <section
        aria-label="Summary of the lunar portrait"
        className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm"
      >
        <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
          <div className="p-5 font-serif text-lg font-medium text-white/90">Axis</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Expression</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Risk</div>
        </div>

        <TableRow
          title="Intellect"
          effect="Memory, imagination, inspiration, storytelling"
          reading="Lack of intellectual effort or flight from rigid frameworks"
        />
        <TableRow
          title="Social life"
          effect="Gentleness, receptivity, conciliation"
          reading="Lability, excessive influence of one's environment"
        />
        <TableRow
          title="Love"
          effect="Fidelity, home, protection, children"
          reading="Sacrifice, dependence, self-effacement"
        />
        <TableRow
          title="Vocation"
          effect="Education, care, hospitality, water, crowds"
          reading="Passivity, drinking, inability to stand alone"
        />
      </section>

      {/* ── Visible FAQ (Featured Snippet + People Also Ask) ── */}
      <section className="space-y-6" aria-labelledby="faq-lunarien">
        <H2>Frequently asked questions about the Lunar type</H2>
        <div id="faq-lunarien" className="space-y-4">
          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md" open>
            <summary className="cursor-pointer list-none p-6 font-serif text-lg font-medium text-white/90 transition-colors hover:text-sky-200 [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between">
                What is a Lunar type in astrology?
                <span className="ml-3 text-sky-300/60 transition-transform group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="px-6 pb-6 text-sm leading-relaxed text-white/75 md:text-base">
              The Lunar type is a <strong>planetary type</strong> defined by the dominance of the Moon in the natal chart. Extreme sensitivity, remarkable memory, powerful imagination and a need for emotional security characterize this profile, often considered the most receptive of the zodiac.
            </p>
          </details>
          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md">
            <summary className="cursor-pointer list-none p-6 font-serif text-lg font-medium text-white/90 transition-colors hover:text-sky-200 [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between">
                Which careers suit a Moon-dominant person?
                <span className="ml-3 text-sky-300/60 transition-transform group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="px-6 pb-6 text-sm leading-relaxed text-white/75 md:text-base">
              The Lunar type excels in professions linked to care, listening and creativity: psychology, literature, poetry, history, archaeology, narrative journalism, early childhood and any career where empathy is a major asset.
            </p>
          </details>
          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md">
            <summary className="cursor-pointer list-none p-6 font-serif text-lg font-medium text-white/90 transition-colors hover:text-sky-200 [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between">
                What are the risks of an afflicted Moon?
                <span className="ml-3 text-sky-300/60 transition-transform group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="px-6 pb-6 text-sm leading-relaxed text-white/75 md:text-base">
              A Moon in a dissonant aspect (square or opposition to Saturn, Mars) can cause passivity, emotional dependence, emotional instability, escapism and vulnerability to addictions — the Lunar type then loses touch with reality.
            </p>
          </details>
          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md">
            <summary className="cursor-pointer list-none p-6 font-serif text-lg font-medium text-white/90 transition-colors hover:text-sky-200 [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between">
                How do I know if I am a Lunar type in my natal chart?
                <span className="ml-3 text-sky-300/60 transition-transform group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="px-6 pb-6 text-sm leading-relaxed text-white/75 md:text-base">
              Check whether your Moon is angular (in House 1, 4, 7 or 10), whether it receives harmonious aspects (trine, sextile) and whether it is in dignity (Cancer, Taurus). A stellium in Cancer also reinforces the lunar profile.
            </p>
          </details>
        </div>
      </section>

      <footer className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md sm:p-12">
        <H3>Going further into the planetary portraits</H3>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Pill>Moon</Pill>
          <Pill tone="sky">Astrological portrait</Pill>
          <Pill tone="violet">Intuition</Pill>
          <Pill tone="emerald">Natal chart</Pill>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/blog/solarien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Read the portrait of the Solar type
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/blog/mercurien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Read the portrait of the Mercurial type
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}
