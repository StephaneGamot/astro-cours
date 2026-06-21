import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import Image from "next/image";
import { AUTHOR_PERSON, PUBLISHER_ORG } from "@/lib/seo";
import MartienImage from "@/public/images/blog/martien.webp";
import Martien2Image from "@/public/images/blog/martien2.webp";

export const meta = {
  slug: "martien",
  title:
    "The Martian: Warrior & Builder of Action",
  description:
    "A portrait of the Martian in astrology: action, courage, sport and passionate love. Discover the influence of an afflicted Mars in the natal chart.",
  date: "2026-04-03",
  tags: [
    "mars",
    "martien",
    "portrait astrologique",
    "courage",
    "action",
    "thème astral",
    "psychologie astrologique",
    "vocation",
    "amour",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/martien.webp",
};

function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-300">
      <span
        className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-300"
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
        className="mr-4 block h-px w-8 bg-gradient-to-r from-red-400/60 to-transparent"
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
      box: "border-red-400/25 bg-red-400/10 shadow-[0_0_30px_rgba(248,113,113,0.05)]",
      icon: "text-red-200",
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
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-sm transition-all hover:border-red-300/30">
      <div className="absolute inset-0 bg-gradient-to-br from-red-300/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
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
    <div className="group grid grid-cols-1 border-b border-white/10 transition-colors hover:bg-red-300/[0.03] md:grid-cols-3">
      <div className="p-4 font-serif text-lg text-red-200/90">{title}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{effect}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{reading}</div>
    </div>
  );
}

export default function MartienPost() {
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
                  name: "What is a Martian in astrology?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Martian is a planetary type with a dominant Mars: raw energy, courage, competition, direct action and a combative instinct.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which careers suit a Mars dominant?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The military, high-level sport, surgery, entrepreneurship, fire-related trades, law enforcement, competition.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the risks of an afflicted Mars?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Violence, explosive anger, self-destruction, accidents, chronic impatience, permanent conflict.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I know if I am Martian?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mars angular (1st, 4th, 7th, 10th House), in Aries or Scorpio, harmonious aspects, a stellium in Aries.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(248,113,113,0.12)] aspect-[7/3]">
        <Image
          src={MartienImage}
          alt="Symbolic portrait of the Martian temperament in astrology"
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
          className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-red-300/5 blur-[80px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-red-300/5 via-transparent to-black/50"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <Kicker>Mars • action • courage • combat • decision</Kicker>

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

          <div className="mt-8 max-w-3xl rounded-xl border border-red-400/20 bg-red-400/5 p-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-300">Definition</p>
            <p className="mt-2 text-base leading-relaxed text-white/80 sm:text-lg">
              The <strong>Martian in astrology</strong> refers to an individual whose <Link href="/planetes/mars" className="text-red-300 underline decoration-red-300/30 hover:decoration-red-300">Mars</Link> occupies a dominant position in the <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="text-red-300 underline decoration-red-300/30 hover:decoration-red-300">natal chart</Link> (angular, well aspected, in Aries or Scorpio). They are marked by raw energy, instinctive courage and an iron will that drives them to act, conquer and fight.
            </p>
          </div>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            Do you have <strong>a dominant Mars</strong> in your natal chart and a volcanic energy that nothing seems able to contain? This force of action fascinates, but it hides a trap: violence, impatience, self-destruction. Where does the line lie between warrior and brute? This complete portrait of the <strong>Martian temperament</strong> — psychology, career, love, morphopsychology — reveals the keys to this planetary dominant, from the archetype of Ares to the challenge of self-mastery.
          </p>

          <div className="mt-8 border-t border-white/5 pt-6">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-3" aria-label="Key points of the Martian portrait">
        <Stat label="Core strength" value="Action & courage" />
        <Stat label="Natural ground" value="Decision & combat" />
        <Stat label="Main shadow" value="Brutality & recklessness" />
      </section>

      <section className="space-y-6">
        <H2>The essence of the Martian: beyond the myth of war</H2>

        <Card title="The essence">
          <p>
            Before drawing their portrait, it is essential to put paid to a stubborn cliché. Astrological tradition long reduced Mars to war, destruction and military conflict. Yet statistical astrological studies (notably those of Michel Gauquelin or André Barbault) have demonstrated a fascinating reality: while Mars is indeed present in great soldiers, it is just as dominant in high-level athletes, great surgeons and company directors.
          </p>
          <p>
            The true essence of Mars is therefore not destruction, but Combativeness, Decision and pure Action. To be a good surgeon, you need the audacity to cut into flesh to save a life. To be a great athlete, you need the rage to win. The Martian is above all the man or woman who refuses stagnation.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>The Martian intelligence: instinct, strategy and a combative spirit</H2>

        <Card title="The intellect">
          <p>
            The Martian's intellect burdens itself with no frills. While they have neither the carefree quickness of the Mercurian nor the long patience of the Saturnian, the Martian possesses a formidable intellectual quality: absolute pragmatism.
          </p>
          <p>
            Their mind is oriented towards positive, tangible data, immediately applicable in everyday life. When they study a subject, they carry out an automatic and instinctive sorting: they retain only what is useful to achieving their goals. Grand, nebulous theories bore them.
          </p>
          <p>
            If they take an interest in more esoteric or abstract fields (such as astrology or philosophy), it will never be out of mere intellectual curiosity, but always with a question in mind: "How can I use this to better steer my life or reach my goals?"
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>The Martian in society: raw authority and uncompromising loyalty</H2>

        <Card title="Social life">
          <p>
            In their relations with others, the Martian is a wholehearted, direct and spontaneous being. With them, you always know where you stand. Their frankness is total, sometimes even too blunt, for they detest hypocrisy, innuendo and social niceties.
          </p>
          <p>
            This is a fundamentally "fast" temperament. If there is a problem to solve, the Martian does not dither: they roll up their sleeves. This is the helpful, loyal friend par excellence, the one you call in the middle of the night when everything collapses, for they will never spare themselves any effort.
          </p>
          <p>
            Their weak point? Impatience and anger. If they are attacked or unjustly criticised, the Martian explodes. Their bursts of anger are impetuous, volcanic, and their words can be cuttingly aggressive. However, unlike the Plutonian or the Saturnian, the Martian holds no grudges. Once the storm has passed and the fight is over (always fought fairly if their Mars is well aspected), they move on, light of heart.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>The Martian in love: devouring passion, jealousy and conquest</H2>

        <Card title="Love">
          <p>
            The Martian's love life mirrors their temperament: impetuous, fast and burning. They are far more carnal and passionate than sentimental.
          </p>
          <p>
            In love, they do not beat about the bush. If they desire someone, they will go straight for it, fully owning their wants. This ardour, this self-confidence and this vital force are, moreover, their best assets in seduction. They care very little about "what people will say" or social conventions.
          </p>
          <p>
            In a relationship, they need things to move quickly. It is often they who make the major decisions (marriage, buying a house) without hesitating. If they start a family, they will be its natural head, embodying a protective authority.
          </p>
          <p>
            For their relationship to last, it is ideal that they unite with a partner possessing a strong Lunar dominant (for gentleness) or Venusian dominant (for diplomacy). Such profiles will naturally admire the Martian's strength, and in return the Martian — often exhausted by their professional battles — will find in the home the one haven of peace where they agree to lay down their arms and show an immense tenderness.
          </p>
        </Card>
      </section>

    <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(248,113,113,0.12)] aspect-[7/3]">
        <Image
          src={Martien2Image}
          alt="Portrait of the god Ares, god of war, in astrology"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>

      <section className="space-y-6">
        <H2>Careers of the Martian: which paths for a Mars dominant?</H2>

        <Card title="Vocation">
          <p>
            Make no mistake: the Martian's destiny is never a long, quiet river. Unlike Jupiter or Venus, Mars is not a "planet of luck". The Martian obtains nothing by chance; everything they own they have earned by the sweat of their brow, through relentless work and countless battles.
          </p>
          <p>
            Fortunately, where other signs would give up in the face of adversity, the Martian catches fire. The obstacle is their best stimulant. They possess an audacity, a courage and a resilience that command absolute respect.
          </p>
          <p>
            Professionally, the modern world no longer offers them many epic battlefields (except in military careers). Today's Martian will therefore find an outlet for their powerful energy in trades requiring decision, force, or the use of sharp, metallic instruments:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>The medical field: surgeons, dentists, emergency doctors.</li>
            <li>Command: company directors, works managers, independent entrepreneurs.</li>
            <li>Hard matter: engineers, sculptors, metalworking craftsmen, brilliant mechanics.</li>
            <li>The physical body: professional athletes, firefighters, stunt performers.</li>
          </ul>
          <p>
            If they suffer a reversal of fortune or a dismissal (often due to an impulsive act or an impatient stroke of recklessness), they will always rise again. Their vitality is indestructible.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>An afflicted Mars in the natal chart: violence, anger and self-destruction</H2>

        <Callout tone="warn" title="The shadow of Mars">
          <p>
            When Mars is severely dissonant in the natal chart (through bad aspects with Saturn, Uranus or Pluto), the vital energy becomes corrupted. Courage turns into blind recklessness, and frankness mutates into brutality.
          </p>
          <p>
            The "bad" Martian is a being dangerous to themselves and to others. Devoid of the nobility of the true warrior, they become a perpetual quarreller, incapable of the slightest diplomacy. Lacking any moral sense, they may be tempted to obtain by force, intimidation or violence what others obtain through work.
          </p>
          <p>
            This is the archetype of the surly malcontent, the "hothead" who sows disorder in their family or company out of a pure need for opposition, often ending up totally isolated or drawing serious legal troubles upon themselves.
          </p>
        </Callout>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>The Martian woman in astrology: portrait of the woman with a Mars dominant</H2>

        <Card title="The Yin expression">
          <p>
            The harmonious Martian woman is one of the most fascinating figures of the zodiac. She is the Powerful Woman, the modern Amazon, the indomitable entrepreneur.
          </p>
          <p>
            Endowed with unfailing courage, she is capable of moving mountains. If fate imposes ordeals on her (widowhood, separation, financial crisis), she will face all her family obligations without ever feeling sorry for herself. In love, she is an exceptional life partner: she does not stay in her husband's shadow — she stimulates him, encourages him, even "boosts" him in moments of doubt. It is often said of her that "she is the woman who would know how to save the crew on the Raft of the Medusa."
          </p>
          <p>
            If Mars is very dissonant in her chart, cohabitation becomes a hell. Combativeness turns into aggressive jealousy and continual quarrels. Unjust, brutal in her words, rejecting any form of gentleness she judges as weakness, she becomes incapable of sociability. Her love stories are often fields of ruins, and she risks exhausting herself in vain battles all her life.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Morphopsychology of the Martian: physical portrait and appearance</H2>

        <Card title="The physical portrait">
          <p>
            Physically, the Martian gives off an immediate impression of power, density and nervous energy. The body is literally built for action:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>General bearing: a complexion that highlights the muscle mass, even at rest. The torso is often longer than the thighs, with prominent pectorals. The whole gives a sense of strong rootedness, ready to spring. The stature is often above average.</li>
            <li>The face: it radiates an impression of angularity. The complexion is vivid, sanguine, and flushes easily under the impact of emotion. The chin is square, strong-willed, a symbol of stubbornness.</li>
            <li>The gaze: the eyes are dark, wide open. But what is most striking in the Martian is their fixity: when they listen or when they confront, they hold the gaze with a bold intensity, sometimes hard and aggressive, beneath thick, arched eyebrows.</li>
            <li>The details: the head is often held back, proud and lofty. The nose is strong (sometimes aquiline) with broad nostrils flared by the breath of action. The voice is strong, rough, sometimes gravelly. Their gestures are always decisive, ample, which some astrologers humorously call "devastating gestures", so much space do they take up when they speak.</li>
          </ul>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>What to remember about the Martian profile in astrology</H2>

        <Callout tone="ok" title="Conclusion">
          <p>
            In conclusion: having a strong Martian dominant in one's natal chart is a call to everyday heroism. The Martian is the sacred Fire of humanity. Without them, no conquest would have been possible, no injustice would be fought, no stone would be lifted. The Martian's one great karmic duty? To learn to master their sword, so as to cut only what must be cut, and protect what must be protected.
          </p>
        </Callout>
      </section>

      <section
        aria-label="Synthesis of the Martian portrait"
        className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm"
      >
        <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
          <div className="p-5 font-serif text-lg font-medium text-white/90">Axis</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Expression</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Risk</div>
        </div>

        <TableRow
          title="Essence"
          effect="Combativeness, decision, pure action"
          reading="Destruction or opposition if Mars is poorly integrated"
        />
        <TableRow
          title="Social life"
          effect="Frankness, loyalty, fast reaction"
          reading="Impatience, anger, verbal brutality"
        />
        <TableRow
          title="Love"
          effect="Conquest, fire, protective authority"
          reading="Domination, haste, lack of delicacy"
        />
        <TableRow
          title="Vocation"
          effect="Surgery, sport, command, metal"
          reading="Dismissals, conflicts, legal problems"
        />
      </section>

      <section id="faq-martien" className="space-y-6" aria-label="Frequently asked questions about the Martian">
        <H2>Frequently asked questions about the Martian</H2>

        {[
          {
            q: "What is a Martian in astrology?",
            a: "The Martian is a planetary type with a dominant Mars: raw energy, courage, competition, direct action and a combative instinct.",
          },
          {
            q: "Which careers suit a Mars dominant?",
            a: "The military, high-level sport, surgery, entrepreneurship, fire-related trades, law enforcement, competition.",
          },
          {
            q: "What are the risks of an afflicted Mars?",
            a: "Violence, explosive anger, self-destruction, accidents, chronic impatience, permanent conflict.",
          },
          {
            q: "How do I know if I am Martian?",
            a: "Mars angular (1st, 4th, 7th, 10th House), in Aries or Scorpio, harmonious aspects, a stellium in Aries.",
          },
        ].map(({ q, a }) => (
          <details
            key={q}
            className="group rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md transition-colors open:bg-white/[0.04]"
          >
            <summary className="flex cursor-pointer items-center gap-3 p-5 text-base font-medium text-white/90 hover:text-red-200 md:text-lg">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-300/60 text-sm text-white" aria-hidden="true">?</span>
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
          <Pill>Mars</Pill>
          <Pill tone="sky">Astrological portrait</Pill>
          <Pill tone="violet">Action</Pill>
          <Pill tone="emerald">Natal chart</Pill>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/blog/venusien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Read the portrait of the Venusian
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/blog/jupiterien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Read the portrait of the Jupiterian
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}
