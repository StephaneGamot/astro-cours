import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import Image from "next/image";
import { AUTHOR_PERSON, PUBLISHER_ORG } from "@/lib/seo";
import MercurienImage from "@/public/images/blog/mercurien.webp";
import Mercurien2Image from "@/public/images/blog/mercurien2.webp";

export const meta = {
  slug: "mercurien",
  title:
    "The Mercurian: The Master of Communication",
  // ✅ Ahrefs SERP rewrite — extended version (Google derives this label from the page content).
  seoTitle: "The Mercurian: master of communication — Astro Cours",
  description:
    "Astrological portrait of the Mercurian: intelligence, communication, curiosity and adaptation. Discover the influence of Mercury on love and career.",
  date: "2026-04-05",
  tags: [
    "Mercure",
    "mercurien",
    "portrait astrologique",
    "communication",
    "intellect",
    "thème astral",
    "psychologie astrologique",
    "carrière",
    "amour",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/mercurien.webp",
};

function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-300">
      <span
        className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-300"
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
        className="mr-4 block h-px w-8 bg-gradient-to-r from-sky-400/60 to-transparent"
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
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-sm transition-all hover:border-sky-400/30">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
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
    <div className="group grid grid-cols-1 border-b border-white/10 transition-colors hover:bg-sky-400/[0.03] md:grid-cols-3">
      <div className="p-4 font-serif text-lg text-sky-200/90">{title}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{effect}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{reading}</div>
    </div>
  );
}

export default function MercurienPost() {
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
                  name: "What is a Mercurian in astrology?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Mercurian is a planetary type whose natal chart is dominated by Mercury. They stand out for a quick intelligence, natural eloquence, constant curiosity and great social and professional adaptability.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which careers suit a Mercury dominant?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ideal careers for a Mercurian include commerce, journalism, teaching, writing, diplomacy, interpreting and, more broadly, all professions of communication and negotiation.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the risks of an afflicted Mercury?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A poorly aspected Mercury can produce nervousness, a tendency to lie, chronic scattering, emotional instability, verbal manipulation and superficiality in both relationships and projects.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I know if I am a Mercurian in my natal chart?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Check whether Mercury is angular (houses I, IV, VII or X), well aspected, placed in Gemini or Virgo, or whether you have a stellium in Gemini. An astrologer can confirm this dominant using your complete natal chart.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(56,189,248,0.12)] aspect-[7/3]">
        <Image
          src={MercurienImage}
          alt="Symbolic portrait of the Mercurian temperament in astrology"
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
          className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-sky-400/5 blur-[80px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-400/5 via-transparent to-black/50"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <Kicker>Mercury • movement • communication • curiosity • youth</Kicker>

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
          <div className="mt-8 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.04] px-6 py-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300/80">Definition</p>
            <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
              The <strong>Mercurian in astrology</strong> refers to an individual whose <Link href="/planetes/mercure" className="underline decoration-emerald-400/40 underline-offset-2 hover:decoration-emerald-400">Mercury</Link> occupies a dominant position in the <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline decoration-emerald-400/40 underline-offset-2 hover:decoration-emerald-400">natal chart</Link> (angular, well aspected, in Gemini or Virgo). They are characterized by a sharp intelligence, formidable eloquence and an insatiable curiosity that drives them to understand everything, analyze everything and communicate everything.
            </p>
          </div>

          {/* ── APP Introduction (Hook → Problem → Promise) ── */}
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            Do you have <strong>Mercury dominant</strong> in your natal chart, and does your mind work at lightning speed? This mental agility is fascinating, but it hides a trap: scattering, nervousness, difficulty going deep. Where is the line between communicating genius and chronic superficiality? This complete portrait of the <strong>Mercurian temperament</strong> — psychology, career, love, morphopsychology — decodes the workings of this planetary dominant, from the archetype of Hermes to the jack-of-all-trades syndrome.
          </p>

          <div className="mt-8 border-t border-white/5 pt-6">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-3" aria-label="Key points of the Mercurian portrait">
        <Stat label="Core strength" value="Mental quickness" />
        <Stat label="Natural ground" value="Communication & movement" />
        <Stat label="Main shadow" value="Instability & scattering" />
      </section>

      <section className="space-y-6">
        <H2>Mercurian intelligence: quickness, eloquence and cunning</H2>

        <Card title="The intellect">
          <p>
            If you are looking for someone able to grasp a complex idea before you have even finished your sentence, turn to a Mercurian. The mind of this planetary type is a genuine fireworks display. Its major trait is a lightning-fast understanding coupled with an exceptional capacity for assimilation.
          </p>
          <p>
            The Mercurian does not need superhuman effort to learn; they absorb information like a sponge. However, this natural ease has its flip side. Carried away by their insatiable curiosity, the Mercurian flits about. They move from one subject to another at lightning speed, which makes them the holder of an encyclopedic but sometimes superficial knowledge.
          </p>
          <p>
            Austere studies, solitary lab work or dreary advanced mathematics bore them deeply. They need rhythm, contact, living matter! Their brilliant and supple mind flourishes in:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Words and letters: literature, poetry, creative writing.</li>
            <li>Information: journalism, media, content creation, where their need for the latest news is satisfied.</li>
            <li>Stage expression: comedy, humor, theater.</li>
          </ul>
          <p>
            A fascinating fact: this mental quickness has a direct impact on their body. The Mercurian keeps such a playful and curious mind that they seem to enjoy a true fountain of youth. The Mercurian almost always looks younger than their actual age, so much do their eyes sparkle with adolescent mischief.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>The Mercurian in society: verbal seducer and social chameleon</H2>

        <Card title="Social life">
          <p>
            In society, the Mercurian is the person everyone wants around. They have lively, pleasant, funny and always sharp conversation. They are the one who breathes life into a family meal or eases the atmosphere during a tense meeting.
          </p>
          <p>
            Gifted with a formidable psychological sense, they read their interlocutors with disconcerting ease. This ingenuity makes them the king of adaptations. They are a born diplomat, an outstanding intermediary and a natural conciliator. Even faced with a problem outside their area of expertise, they will always find an innovative angle to advise you.
          </p>
          <p>
            That said, do not expect unshakeable fidelity from them if the relationship becomes routine. The Mercurian has a holy horror of boredom. They are drawn to novelty, new encounters and change. Their friendship is delightful, but it demands constant stimulation.
          </p>
        </Card>
      </section>

    <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(56,189,248,0.12)] aspect-[7/3]">
        <Image
          src={Mercurien2Image}
          alt="Portrait of the god Mercury in astrology"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>

      <section className="space-y-6">
        <H2>The Mercurian in love: fickle, cerebral or sincerely curious?</H2>

        <Card title="Love">
          <p>
            That lightness which characterizes their intellect is found trait for trait in their love life. The Mercurian is not the sign of heavy, destructive passions (like the Plutonian) or rigid loyalty (like the Saturnian). They conceive of love as an exchange, an intellectual game, a joyful complicity.
          </p>
          <p>
            Committing in a lasting way is often their greatest challenge. They tend to multiply superficial affections or flirtations before settling down. The very idea of traditional marriage, with its legal obligations and routine duties, can stifle them. It is not uncommon to see this astrological signature associated with several unions over a single lifetime.
          </p>
          <p>
            In love, they are what is called a &quot;sapiosexual&quot; (attracted to intelligence), but they are also vitally drawn to youth. They will often seek a younger partner, or at least a partner with a fresh, dynamic soul, able to keep up with their perpetual movements.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Mercurian careers: which professions for a Mercury dominant?</H2>

        <Card title="The vocation">
          <p>
            The destiny of a harmonious Mercurian is rarely tragic, for they are the very archetype of resourcefulness. They will always find an opportunity, a gap, a contact to bounce back and make the most of a situation.
          </p>
          <p>Their professional field of action is immense:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Commerce and negotiation: sales, representation, import-export, marketing. There is no better presenter than them.</li>
            <li>Movement: travel agencies, tourism, transport, logistics.</li>
            <li>Art and the stage: it is almost impossible to take to the boards or become a famous artist/singer without a strong Mercurian dominant in one's natal chart.</li>
          </ul>
          <p>
            Esoteric note: astrological tradition often considers Mercury a neutral planet. Yet the mystic Meister Eckhart attributed Luck to Mercury. Modern astrological research tends to confirm this point: Mercury often acts as a highly beneficial planet (on a par with Jupiter or Venus), offering its protégés the opportunity to open the doors of success through their sheer gift of the gab and their network.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Afflicted Mercury in the natal chart: nervousness, lying and scattering</H2>

        <Callout tone="warn" title="The shadow of Mercury">
          <p>
            When the energy of Mercury is blocked or very poorly aspected in the chart, the lovely mental agility turns into a vice. The brilliant communicator becomes an inexhaustible chatterbox and a braggart.
          </p>
          <p>
            Ancient myth reminds us that Hermes (Mercury) was the god of travelers, but also... of thieves. A dissonant Mercurian can develop a very elastic morality. Lying becomes second nature, and respect for the property of others an abstract notion.
          </p>
          <p>
            Psychologically, they are an unstable, irresolute and capricious being, incapable of imposing the slightest discipline on themselves, which often condemns them to languish. In a group environment (company, family), they can become the worst of elements: a troublemaker who spreads gossip, slander and backbiting, sometimes for the simple &quot;pleasure&quot; of creating chaos and amusing themselves with it.
          </p>
        </Callout>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>The Mercurian woman in astrology: portrait of the woman with a Mercury dominant</H2>

        <Card title="The Yin expression">
          <p>
            In a chart where feminine or receptive (Yin) energy dominates, a beautiful Mercury gives rise to a fascinating personality: the brilliant collaborator and the diplomatic muse.
          </p>
          <p>
            Seductive not through dramatic artifice but through her sparkling wit, she divines the thoughts of others before they are even formulated. It is almost impossible to lie to her. In everyday life, she knows how to get exactly what she wants from those around her thanks to flawless tact and psychology. She shines in communication roles, in high-level executive assistance, or in the spotlight as an actress. (Note: she will always prefer the company of young and dynamic people, fleeing the heaviness of aging mentalities.)
          </p>
          <p>
            If Mercury is very dissonant, this same intelligence turns into calculation. The archetype becomes that of the schemer. Péladan, the famous occultist, described this dark side perfectly: &quot;To profit from others, to ask everything of skill and nothing of work, to live off the gullible and as a parasite.&quot; Unscrupulous, fleeing family or marital responsibilities, she uses her fine psychology to manipulate, to swindle intellectually or to take advantage of the weaknesses of the more passionate.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Morphopsychology of the Mercurian: physical portrait and appearance</H2>

        <Card title="The physical portrait">
          <p>
            Traditional astrology has defined with great precision the physical traits associated with the Mercurian signature. The body reflects the quickness of the mind:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>General bearing: fine, slender, sinuous forms. A medium or short stature, but always with a slim body and a particularly light, airy gait.</li>
            <li>The face: an elongated oval, with a convex and finely knobbed forehead (a sign of intelligence). The complexion is often pale, greyish or sallow, but it has the peculiarity of coming alive intensely at the slightest emotion.</li>
            <li>The features: prominent brow ridges sheltering lively eyes. Long, thin eyebrows. The nose is typical: fine, fairly long and slightly hooked. The lips are often thin, the chin small and pointed.</li>
            <li>The expression: the Mercurian is recognized above all by their behavior: a lively, crisp diction, accompanied by numerous, rapid gestures and great manual dexterity.</li>
          </ul>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>What to remember about the Mercurian profile in astrology</H2>

        <Callout tone="ok" title="Conclusion">
          <p>
            In conclusion: the Mercurian is the indispensable messenger of our humanity. They link ideas, connect beings and keep life circulating. Having a Mercurian dominant is receiving the gift of the eternal youth of the mind. Their only true karmic work? To learn to slow down from time to time, in order to transform their thousands of gathered pieces of information into genuine wisdom.
          </p>
        </Callout>
      </section>

      <section
        aria-label="Summary of the Mercurian portrait"
        className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm"
      >
        <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
          <div className="p-5 font-serif text-lg font-medium text-white/90">Axis</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Expression</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Risk</div>
        </div>

        <TableRow
          title="Intellect"
          effect="Lightning understanding, curiosity, rapid assimilation"
          reading="Superficiality, scattering, flitting about"
        />
        <TableRow
          title="Social life"
          effect="Lively conversation, diplomacy, humor, adaptation"
          reading="Relational instability if boredom sets in"
        />
        <TableRow
          title="Love"
          effect="Complicity, play, mental stimulation"
          reading="Difficulty with duration, structure and routine"
        />
        <TableRow
          title="Vocation"
          effect="Commerce, media, stage, mobility, network"
          reading="Restlessness, cunning, lack of discipline if Mercury is afflicted"
        />
      </section>

      {/* ── Visible FAQ ── */}
      <section className="space-y-4">
        <H2>Frequently asked questions about the Mercurian</H2>
        {[
          {
            q: "What is a Mercurian in astrology?",
            a: "The Mercurian is a planetary type whose natal chart is dominated by Mercury. They stand out for a quick intelligence, natural eloquence, constant curiosity and great social and professional adaptability.",
          },
          {
            q: "Which careers suit a Mercury dominant?",
            a: "Ideal careers for a Mercurian include commerce, journalism, teaching, writing, diplomacy, interpreting and, more broadly, all professions of communication and negotiation.",
          },
          {
            q: "What are the risks of an afflicted Mercury?",
            a: "A poorly aspected Mercury can produce nervousness, a tendency to lie, chronic scattering, emotional instability, verbal manipulation and superficiality in both relationships and projects.",
          },
          {
            q: "How do I know if I am a Mercurian in my natal chart?",
            a: "Check whether Mercury is angular (houses I, IV, VII or X), well aspected, placed in Gemini or Virgo, or whether you have a stellium in Gemini. An astrologer can confirm this dominant using your complete natal chart.",
          },
        ].map(({ q, a }) => (
          <details
            key={q}
            className="group rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 backdrop-blur-md transition-colors hover:bg-white/[0.04]"
          >
            <summary className="flex cursor-pointer items-center justify-between text-base font-medium text-white/90 sm:text-lg [&::-webkit-details-marker]:hidden">
              {q}
              <span className="ml-4 text-xl leading-none text-emerald-300/60 transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">{a}</p>
          </details>
        ))}
      </section>

      <footer className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md sm:p-12">
        <H3>To go further into the planetary portraits</H3>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Pill>Mercury</Pill>
          <Pill tone="sky">Astrological portrait</Pill>
          <Pill tone="violet">Communication</Pill>
          <Pill tone="emerald">Natal chart</Pill>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/blog/lunarien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Read the portrait of the Lunarian
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/blog/venusien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Read the portrait of the Venusian
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}
