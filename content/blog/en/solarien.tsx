import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import Image from "next/image";
import { AUTHOR_PERSON, PUBLISHER_ORG } from "@/lib/seo";
import SolarienImage from "@/public/images/blog/solarien.webp";
import Solarien2Image from "@/public/images/blog/solarien2.webp";
import Solarien3Image from "@/public/images/blog/solarien3.webp";

export const meta = {
  slug: "solarien",
  title:
    "The Solarian: the Sovereign, Master of Light",
  description:
    "Astrological portrait of the Solarian: genius, radiance, charisma, power, vocation, love, grandeur, downfall — the solar dominant in a natal chart.",
  date: "2026-04-07",
  tags: [
    "Soleil",
    "solarien",
    "portrait astrologique",
    "charisme",
    "pouvoir",
    "thème astral",
    "psychologie astrologique",
    "vocation",
    "amour",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/solarien.webp",
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
      box: "border-red-500/25 bg-red-500/10 shadow-[0_0_30px_rgba(239,68,68,0.05)]",
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

export default function SolarienPost() {
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
                  name: "What is a Solarian in astrology?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Solarian is a planetary type defined by the dominance of the Sun in the natal chart. Charisma, natural authority, a genius for synthesis and a vocation for excellence characterize this profile, considered by astrological tradition to be the most complete and the rarest.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which careers suit a Sun dominant?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Solarian thrives in leadership positions, high strategy, the judiciary, politics and the major arts (film directing, classical painting). They excel wherever breadth of vision and leadership are required.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the risk of an afflicted Sun in a natal chart?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A Sun in a dissonant aspect (square or opposition to Mars, Saturn) can turn nobility of soul into megalomania, destructive pride, tyranny and spectacular downfalls — the Icarus complex.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I know if I am a Solarian in my natal chart?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Check whether your Sun is angular (house I, IV, VII or X), whether it receives harmonious aspects from Jupiter or the Moon, and whether it is in dignity (Leo, Aries). The more these criteria add up, the more your chart is of the Solarian type.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(251,191,36,0.12)] aspect-[7/3]">
        <Image
          src={SolarienImage}
          alt="Portrait of the Sun God"
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
          <Kicker>Sun • radiance • authority • excellence • nobility</Kicker>

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

          {/* ── Bloc définition (Featured Snippet) ── */}
          <div className="mt-8 rounded-2xl border border-amber-400/20 bg-amber-400/[0.04] px-6 py-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-300/80">Definition</p>
            <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
              The <strong>Solarian in astrology</strong> refers to an individual whose <Link href="/planetes/soleil" className="underline decoration-amber-400/40 underline-offset-2 hover:decoration-amber-400">Sun</Link> holds a dominant position in the <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline decoration-amber-400/40 underline-offset-2 hover:decoration-amber-400">natal chart</Link> (angular, well aspected, in Leo or Aries). They stand out for a natural charisma, an innate sense of command and a vocation for excellence that drives them to shine in everything they undertake.
            </p>
          </div>

          {/* ── Introduction APP (Accroche → Problème → Promesse) ── */}
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            Do you have a <strong>dominant Sun</strong> in your natal chart and feel a flame burning within you that nothing seems able to extinguish? Yet this solar power remains a mystery: where does charisma end and where does pride begin? How can you channel this royal energy without tipping into megalomania? This complete portrait of the <strong>Solarian temperament</strong> — psychology, career, love, morphopsychology — reveals the keys to this exceedingly rare planetary dominant, from the archetype of Apollo to the fall of Icarus.
          </p>

          <div className="mt-8 border-t border-white/5 pt-6">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-3" aria-label="Key points of the Solarian portrait">
        <Stat label="Central strength" value="Synthesis & radiance" />
        <Stat label="Natural ground" value="Power & excellence" />
        <Stat label="Main shadow" value="Pride & downfall" />
      </section>

      <section className="space-y-6">
        <H2>Why does the Solarian dominate the natal chart?</H2>

        <Card title="The intellect">
          <p>
            To grasp the Solarian&apos;s intellect is to understand that they do not possess a single form of intelligence, but that they are its supreme synthesis. Astrological tradition rightly holds that solar influence gathers the best of the other planetary dominants:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>The quickness and brilliance of the Mercurian.</li>
            <li>The depth, concentration and memory of the Saturnian.</li>
            <li>The organizing spirit and scope of the Jupiterian.</li>
            <li>The aesthetic and artistic sensibility of the Venusian.</li>
          </ul>
          <p>
            Faced with such alchemy, we are in the presence of the most powerful and most gifted mind there is. The Solarian is not content merely to succeed: they are destined to emerge, to surpass their contemporaries and to leave a mark on their era. Whether they move in the higher spheres of philosophy, scientific research, sociology, strategy or the major arts, it does not seem possible to leave a work of genius to posterity without a strong solar dominant in the natal chart.
          </p>
          <p>
            An essential encyclopedic note: the esotericist and military thinker Colonel Caslant asserted that &quot;The solar type is rarely encountered in humanity, unfortunately for it&quot;. The modern world, often governed by confusion, sorely lacks these authentic &quot;spiritual kings&quot;, these superior minds capable of making decisions at the summit with dazzling accuracy in order to avoid chaos. The truly pure Solarian is a rare pearl.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Charisma and magnetism: how the Solarian radiates in society</H2>

        <Card title="Social life">
          <p>
            The Solarian possesses an attractive magnetism of unheard-of power. However, unlike the Venusian who seduces through gentleness and charm, the Solarian attracts through admiration, and very often, through the natural domination they exert.
          </p>
          <p>
            They are not easy to approach. Why? Because their mere presence, radiating superiority and assurance, tends to trigger an inferiority complex in those who come near. In society, they are neither hyper-expansive nor familiar at first glance. They seek the company of their peers, of leading personalities. They flee mediocrity, pettiness and vulgarity like the plague.
          </p>
          <p>
            However, once they grant their friendship and esteem (a rare favor that must be earned), they are a friend of absolute loyalty. Aware of their strength, they naturally adopt the role of protector toward those they love, using their social position or their authority to lift up those around them.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>The Solarian in love: an unattainable ideal and emotional solitude</H2>

        <Card title="Love">
          <p>
            One might think that with such assets, the Solarian&apos;s love life is a perpetual fairy tale. It is in fact their greatest Achilles&apos; heel.
          </p>
          <p>
            The Solarian&apos;s intimate drama lies in their demands. They set their romantic ideal so high that it is almost impossible for a human being of flesh and blood to reach it. They are not simply looking for a partner; they are looking for a soul on their level, a queen or a king capable of sharing their throne.
          </p>
          <p>
            Confronted with the rarity of this profile, the Solarian often faces multiple disillusions. Very often, in desperation, they resign themselves to a marriage &quot;of reason&quot; or of &quot;prestige&quot;, choosing a partner who presents well socially and who will support their ascent. But in the intimacy of their heart, they will often keep a certain dissatisfaction, a hidden melancholy. The karmic compensation for their social brilliance is often a profound loneliness in love.
          </p>
        </Card>
      </section>

   <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(251,191,36,0.12)] aspect-[7/3]">
        <Image
          src={Solarien3Image}
          alt="Portrait of the Sun God in astrology"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>

      <section className="space-y-6">
        <H2>Careers and vocation of the Solarian: which paths for a Sun dominant?</H2>

        <Card title="Vocation">
          <p>
            The destiny of a harmonious Solarian can only be brilliant. From the schoolyard onward, one spots in this child a superior fabric. Without even having to raise their voice, they become the natural leader, catching the light through their innate magnetism.
          </p>
          <p>
            In the professional world, the Solarian suffocates if confined to subordinate tasks, to repetitive chores, or if forced to obey superiors they judge incompetent. These situations never last: propelled by a noble ambition, they rise quickly. Their favorite fields are:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Power and Leadership: high-level politics, boards of directors, corporate management, the supreme judiciary.</li>
            <li>The Major Arts: particularly where breadth and nobility are required (classical painting, film directing, especially if the Sun is conjunct Jupiter in the natal chart).</li>
          </ul>
          <p>
            Their secret weapon? An exceptional vitality. The Solarian enjoys an unmatched capacity for physical and nervous recovery, allowing them to put in a colossal amount of work that would instantly fell any other sign. (Beware, however: if a setback occurs in maturity for a Solarian, the fall is often brutal and definitive.)
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>An afflicted Sun in the natal chart: the dark side of the Solarian</H2>

        <Callout tone="warn" title="The shadow of the Sun">
          <p>
            When the Sun is heavily aspected by dissonant planets (notably Mars or Saturn), nobility of soul turns into destructive megalomania.
          </p>
          <p>
            The &quot;bad&quot; Solarian retains their ideas of grandeur, but no longer has the capacity or the nobility to realize them. Judgment is distorted by boundless pride and blinding vanity. They become a domestic or professional tyrant, incapable of bearing the slightest criticism, isolating themselves in their own ivory tower.
          </p>
          <p>
            This is the Icarus complex: if they manage to rise through some stratagem or illusion of grandeur, they inexorably end up burning their wings. &quot;Immanent justice&quot; always ends up catching up with them in the form of spectacular falls, resounding scandals or a total loss of reputation.
          </p>
        </Callout>
      </section>

   <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(251,191,36,0.12)] aspect-[7/3]">
        <Image
          src={Solarien2Image}
          alt="Portrait of Apollo, Sun God, in astrology"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>

      <section className="space-y-6">
        <H2>The Solarian woman in astrology: portrait of the Sun-dominant woman</H2>

        <Card title="The Yin expression">
          <p>
            The harmonious Solarian woman is a majestic and exceedingly rare figure. As the famous occultist Péladan wrote: &quot;This woman offers the finest guarantees. Her great accuracy of reasoning rarely deceives her about a man&apos;s merits.&quot;
          </p>
          <p>
            She is the woman who can only love in admiration. She is organically incapable of falling for a mediocre, cowardly or unremarkable man. She needs her partner to carry within him the spark of glory. The drama of her life? She often inspires violent and devouring passions in &quot;ordinary&quot; men whom she is forced to turn away, while she seeks the gaze of &quot;the powerful&quot; who do not know their own worth. If she does not find someone to match her, she will prefer to remain solitary, dignified and proud, marrying her own career or her own renown rather than compromising herself.
          </p>
          <p>
            If the Sun is afflicted, she turns into a ruthless social climber. Endowed with a dangerous charisma, she uses her ability to inspire passions in order to manipulate, not hesitating to trample morality to satisfy her immeasurable need for power and social recognition.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Morphopsychology of the Solarian: physical portrait and appearance</H2>

        <Card title="The physical portrait">
          <p>
            The Solarian&apos;s beauty is legendary in astrological tradition. Their physical appearance instantly evokes perfect harmony, elegance and the tranquil strength of the statues of Greek Antiquity (the absolute archetype being the Apollo Belvedere).
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>The general bearing: a noble, easy, sometimes majestic gait. The body is of harmonious slenderness, exuding grace and a formidable vitality. The chest is often well developed (the Sun governs the heart and the back), with a very upright posture, naturally arched.</li>
            <li>The face: a pure and refined oval. The most striking feature is the forehead: vast, harmonious, free of the wrinkles of anxiety or nervous tension that mark other archetypes. It is the forehead of the serene intellectual.</li>
            <li>The gaze: wide-open, magnetic eyes, framed by gently curved brow ridges. The iris is sometimes adorned with golden hues or reflections. It is a gaze that blends an unshakeable energy with a deep benevolence (&quot;The eyes alone announced the great man&quot;, it was said of Napoleon).</li>
            <li>The details: a slightly aquiline nose, fine at the tip. An admirably chiseled mouth opening onto a sober but radiant smile. The Solarian&apos;s voice is composed, sonorous, pleasant and measured. The whole exudes a natural aristocracy impossible to imitate.</li>
          </ul>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>What to remember about the Solarian profile in astrology</H2>

        <Callout tone="ok" title="Conclusion">
          <p>
            In conclusion: to be born with a powerful Solar dominant is not only a privilege, it is a cosmic responsibility. The Solarian is not here to selfishly amass power, but to become a beacon. Their true karmic mission is to radiate, to warm and to guide those around them, always remembering that true nobility lies not in crushing others, but in raising the whole world toward the light.
          </p>
        </Callout>
      </section>

      <section
        aria-label="Summary of the Solarian portrait"
        className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm"
      >
        <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
          <div className="p-5 font-serif text-lg font-medium text-white/90">Axis</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Expression</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Risk</div>
        </div>

        <TableRow
          title="Intellect"
          effect="Synthesis, mental power, genius, vision"
          reading="Intellectual pride or disconnection if Sun afflicted"
        />
        <TableRow
          title="Social life"
          effect="Charisma, natural authority, protection"
          reading="Distance, intimidation, relational solitude"
        />
        <TableRow
          title="Love"
          effect="Demands, ideal, admiration"
          reading="Dissatisfaction, melancholy, the loneliness of the summit"
        />
        <TableRow
          title="Vocation"
          effect="Leadership, power, major arts, radiance"
          reading="Spectacular fall in case of pride or misalignment"
        />
      </section>

      {/* ── FAQ visible (Featured Snippet + People Also Ask) ── */}
      <section className="space-y-6" aria-labelledby="faq-solarien">
        <H2>Frequently asked questions about the Solarian</H2>
        <div id="faq-solarien" className="space-y-4">
          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md" open>
            <summary className="cursor-pointer list-none p-6 font-serif text-lg font-medium text-white/90 transition-colors hover:text-amber-200 [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between">
                What is a Solarian in astrology?
                <span className="ml-3 text-amber-300/60 transition-transform group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="px-6 pb-6 text-sm leading-relaxed text-white/75 md:text-base">
              The Solarian is a <strong>planetary type</strong> defined by the dominance of the Sun in the natal chart. Charisma, natural authority, a genius for synthesis and a vocation for excellence characterize this profile, considered by astrological tradition to be the most complete and the rarest.
            </p>
          </details>
          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md">
            <summary className="cursor-pointer list-none p-6 font-serif text-lg font-medium text-white/90 transition-colors hover:text-amber-200 [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between">
                Which careers suit a Sun dominant?
                <span className="ml-3 text-amber-300/60 transition-transform group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="px-6 pb-6 text-sm leading-relaxed text-white/75 md:text-base">
              The Solarian thrives in leadership positions, high strategy, the judiciary, politics and the major arts (film directing, classical painting). They excel wherever breadth of vision and leadership are required.
            </p>
          </details>
          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md">
            <summary className="cursor-pointer list-none p-6 font-serif text-lg font-medium text-white/90 transition-colors hover:text-amber-200 [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between">
                What is the risk of an afflicted Sun in a natal chart?
                <span className="ml-3 text-amber-300/60 transition-transform group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="px-6 pb-6 text-sm leading-relaxed text-white/75 md:text-base">
              A Sun in a dissonant <Link href="/aspects" className="underline decoration-amber-400/40 underline-offset-2 hover:decoration-amber-400">aspect</Link> (square or opposition to Mars, Saturn) can turn nobility of soul into megalomania, destructive pride, tyranny and spectacular downfalls — the &quot;Icarus complex&quot;.
            </p>
          </details>
          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md">
            <summary className="cursor-pointer list-none p-6 font-serif text-lg font-medium text-white/90 transition-colors hover:text-amber-200 [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between">
                How do I know if I am a Solarian in my natal chart?
                <span className="ml-3 text-amber-300/60 transition-transform group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="px-6 pb-6 text-sm leading-relaxed text-white/75 md:text-base">
              Check whether your Sun is angular (in <Link href="/maisons/maison-1" className="underline decoration-amber-400/40 underline-offset-2 hover:decoration-amber-400">house I</Link>, IV, VII or X), whether it receives harmonious aspects (trine, sextile) from Jupiter or the Moon, and whether it is in dignity (Leo, Aries). The more these criteria add up, the more your <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline decoration-amber-400/40 underline-offset-2 hover:decoration-amber-400">chart</Link> is of the Solarian type.
            </p>
          </details>
        </div>
      </section>

      <footer className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md sm:p-12">
        <H3>To go further with the planetary portraits</H3>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Pill>Sun</Pill>
          <Pill tone="sky">Astrological portrait</Pill>
          <Pill tone="violet">Charisma</Pill>
          <Pill tone="emerald">Natal chart</Pill>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/blog/plutonien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Read the Plutonian portrait
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/blog/lunarien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Read the Lunarian portrait
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}
