import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import Image from "next/image";
import { AUTHOR_PERSON, PUBLISHER_ORG } from "@/lib/seo";
import VenusienImage from "@/public/images/blog/venus1.webp";
import VenusienImage2 from "@/public/images/blog/venus2.webp";

export const meta = {
  slug: "venusien",
  title:
    "The Venusian: Aesthete, Lover and Artist",
  description:
    "An astrological portrait of the Venusian: charm, love, beauty, art, harmony, seduction, the muse and the siren. Explore this profile in your chart.",
  date: "2026-04-04",
  tags: [
    "Vénus",
    "vénusien",
    "portrait astrologique",
    "amour",
    "beauté",
    "thème astral",
    "psychologie astrologique",
    "séduction",
    "art",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/venus2.webp",
};

function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-rose-300">
      <span
        className="h-1.5 w-1.5 animate-pulse rounded-full bg-rose-300"
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
        className="mr-4 block h-px w-8 bg-gradient-to-r from-rose-400/60 to-transparent"
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
      box: "border-rose-500/30 bg-rose-500/10 shadow-[0_0_30px_rgba(244,114,182,0.05)]",
      icon: "text-rose-300",
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
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-sm transition-all hover:border-rose-300/30">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-300/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
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
    <div className="group grid grid-cols-1 border-b border-white/10 transition-colors hover:bg-rose-300/[0.03] md:grid-cols-3">
      <div className="p-4 font-serif text-lg text-rose-200/90">{title}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{effect}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{reading}</div>
    </div>
  );
}

export default function VenusienPost() {
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
                  name: "What is a Venusian in astrology?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Venusian is a planetary type in whom Venus dominates the natal chart. He is marked by a refined aesthetic sense, natural charm, a constant search for harmony and a deep need for love and beauty in every area of his life.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which careers suit a Venus dominant?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A Venus dominant thrives in the arts, fashion, design, diplomacy, gastronomy, aesthetics, luxury, jewelry, public relations and any profession where one must beautify, connect and create harmony.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the risks of an afflicted Venus?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "An afflicted Venus in the natal chart can lead to laziness, jealousy, emotional dependency, sentimental manipulation and complacency, turning the pursuit of pleasure into destructive hedonism.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I know if I am a Venusian?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You are probably a Venusian if Venus is angular in your chart (conjunct the Ascendant, the Midheaven, the Descendant or the IC), if it is in Taurus or Libra, if it receives harmonious trines or sextiles, or if you have a stellium in Taurus or Libra.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(244,114,182,0.12)] aspect-[7/3]">
        <Image
          src={VenusienImage}
          alt="Symbolic portrait of the Venusian temperament in astrology"
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
          className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-rose-300/5 blur-[80px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-rose-300/5 via-transparent to-black/50"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <Kicker>Venus • beauty • love • art • harmony</Kicker>

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

          <div className="mt-8 rounded-2xl border border-rose-400/30 bg-rose-400/10 p-5 shadow-[0_0_30px_rgba(251,113,133,0.06)]">
            <p className="text-sm font-medium text-rose-300 mb-2">Definition</p>
            <p className="text-sm leading-relaxed text-white/80 sm:text-base">
              The <strong>Venusian in astrology</strong> describes an individual in whom <Link href="/planetes/venus" className="text-rose-300 underline decoration-rose-300/30 hover:decoration-rose-300/60 transition-colors">Venus</Link> holds a dominant position in the <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="text-rose-300 underline decoration-rose-300/30 hover:decoration-rose-300/60 transition-colors">natal chart</Link> (angular, well-aspected, in Taurus or Libra). He stands out for a refined aesthetic sense, a powerful emotional magnetism and a deep need for harmony in every area of his life.
            </p>
          </div>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            Do you have <strong>Venus dominant</strong> in your natal chart, with beauty, love and harmony guiding your every choice? This emotional magnetism is a rare gift, but it hides a flip side: dependence on the gaze of others, seductive laziness, fleeing from conflict. This complete portrait of the <strong>Venusian temperament</strong> — psychology, career, love, morphopsychology — explores the many facets of this planetary dominance, from the archetype of Aphrodite to the trap of complacency.
          </p>

          <div className="mt-8 border-t border-white/5 pt-6">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-3" aria-label="Key points of the Venusian portrait">
        <Stat label="Core strength" value="Charm & harmony" />
        <Stat label="Natural ground" value="Love & beauty" />
        <Stat label="Main shadow" value="Laziness & hedonism" />
      </section>

      <section className="space-y-6">
        <H2>Venusian intelligence: aesthetic sensitivity and harmonious thinking</H2>

        <Card title="The intellect">
          <p>
            Ancient astrological tradition has sometimes been harsh on the Venusian's intellect, judging him shallow or lazy. It is time to set the record straight: the Venusian is not devoid of intelligence — he possesses an aesthetic and emotional intelligence.
          </p>
          <p>
            Where the Saturnian excels through effort and discipline, the Venusian operates on the "pleasure principle". On the school benches, the exact sciences, the dryness of advanced mathematics or long, drawn-out work bore him deeply. Why? Because to absorb a piece of information, the Venusian needs it to be beautiful, harmonious or linked to people.
          </p>
          <p>
            Very early on, his studies can be "hijacked" by what truly matters to him: art, music and, above all, his first stirrings of love. The Venusian is an epicurean of the mind. If he must make an intellectual effort, he will shine brilliantly in creative fields: art history, romantic literature, music, design or public relations. He understands the world through his senses and emotions, which makes him a born diplomat, gifted with a formidable psychological finesse.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>The Venusian in society: charm, seduction and the art of pleasing</H2>

        <Card title="Social life">
          <p>
            In society, the Venusian is a blessing. Cheerful, optimistic, fundamentally likable, he is the glue that binds groups together.
          </p>
          <p>
            Solitude is his worst nightmare. He has a vital need to be surrounded, to organize gatherings, dinners or outings. And everyone asks for him! From the very first contact, he inspires fondness thanks to an aura of gentleness and forbearance.
          </p>
          <p>
            The Venusian has a holy dread of conflict. He is the great pacifist of the zodiac. He hates heated arguments, raised voices and tense atmospheres. Faced with aggression, he will not respond with violence (like Mars), but with charm, conciliation, or at worst, with flight. Always ready to lend a hand, he easily forgives the weaknesses of others because he is perfectly aware of his own.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>The Venusian in love: romance, sensuality and the ideal of beauty</H2>

        <Card title="Love">
          <p>
            Let us step into the Venusian's field of excellence: the love life. He is the undisputed champion of love and seduction.
          </p>
          <p>
            The Venusian lives only through and for love. From adolescence onward, his adventures are early and numerous. He is literally intoxicated by the thrill of romance. As soon as he crosses paths with someone who matches his ideal of beauty (physical or moral), he cannot help but enter a game of seduction, even if he has no chance of success or if the person is not available.
          </p>
          <p>
            The challenge of fidelity: The Venusian is in love with Love. Because of this, committing to a blind, eternal fidelity is his greatest karmic challenge. If he grows bored in his relationship or feels neglected, outside temptations ("straying from the contract") are frequent. And yet, the Venusian signature is brazenly lucky: blessed with infinite tact and a flight from drama, he often manages to shield his home from storms that other signs could not avoid. If he finds the wife or husband of his dreams very early — someone who knows how to reassure him, admire him and keep the flame alive — he becomes the tenderest and most devoted partner there is.
          </p>
        </Card>
      </section>

       <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(244,114,182,0.12)] aspect-[7/3]">
        <Image
          src={VenusienImage2}
          alt="Portrait of the goddess Venus in astrology"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>

      <section className="space-y-6">
        <H2>Venusian careers: which paths for a Venus dominant?</H2>

        <Card title="The calling">
          <p>
            For the Venusian to succeed in his professional life, there is one golden rule: never force him into thankless, dirty, violent or hyper-competitive tasks. The harshness of the business world or party politics tends to crush him.
          </p>
          <p>
            He needs a "clean", light, aesthetic working environment, or one centered on the well-being of others. He will find brilliant and often easy success (because his network of contacts is immense) in:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>The Beauty and Fashion trades: haute couture, cosmetics, hairdressing, interior decoration, perfumery.</li>
            <li>The social bond: public relations, human resources, travel agencies, events, luxury hospitality.</li>
            <li>The Arts and the Stage: acting, cinema, singing, music. (Almost all icons of film and music carry a powerful Venusian dominance in their natal chart.)</li>
          </ul>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>An afflicted Venus in the natal chart: laziness, jealousy and manipulation</H2>

        <Callout tone="warn" title="The shadow of Venus">
          <p>
            When the energy of Venus is corrupted by hard aspects (notably with Saturn, Mars or Jupiter), the pursuit of pleasure turns into destructive hedonism and idleness.
          </p>
          <p>
            The dissonant Venusian slips into absolute ease. He becomes a slave to his senses: extreme gluttony, insurmountable laziness, compulsive spending. Lacking willpower, unable to face the material realities of life, he risks turning into a parasite (the charming "freeloader"). He will then use his greatest gift — his power of seduction and flattery — no longer to create harmony, but to manipulate those around him into providing for his needs, fleeing every form of personal effort.
          </p>
        </Callout>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>The Venusian woman in astrology: portrait of the Venus-dominant woman</H2>

        <Card title="The Yin expression">
          <p>
            In a feminine chart (or one of Yin energy), a harmonious Venus gives rise to the archetype of the Muse and the Ideal Wife.
          </p>
          <p>
            Gentle, loving and exquisitely devoted, she has the power to soothe the roughest of characters. She is the beating heart of the home, creating around her an environment steeped in art, comfort and warmth. But beware, she functions like a flower: without the daily water of attention, compliments and tenderness from her partner, she wilts… or turns toward someone else's sun.
          </p>
          <p>
            If Venus is gravely "maleficed" (afflicted by Pluto or Mars), she then embodies the myth of the Siren or the Femme Fatale. The occultist Péladan described her with a poetic darkness: "A courtesan by vocation, she knows how to awaken the senses and identify with them with a prodigious art. She is the one we love to the point of killing ourselves."
          </p>
          <p>
            Psychologically, this is someone who has understood that her power of seduction is her only weapon for survival. She uses the desire of others to dominate, unable to invest emotionally out of laziness or fear, letting herself be confined to the role of a beautiful object of desire, often at the cost of her own balance.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Morphopsychology of the Venusian: physical portrait and appearance</H2>

        <Card title="The physical portrait">
          <p>
            Physically, the Venusian is the embodiment of grace, symmetry and softness. The keyword of his physiognomy is the curve.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>General appearance: a height that is often average, but endowed with an immense harmony of proportions. The forms are rounded, supple, sometimes slightly plump (Venus loves good flesh). The gait and gestures have a natural, almost dancing grace.</li>
            <li>The face: a perfect, softened oval. The complexion is generally fair, rosy or of a very gentle radiance. The Venusian very often sports the famous "dimple" in the chin or cheeks (the hallmark of Venus).</li>
            <li>The gaze: large, almond-shaped eyes, lively and often moist, framed by exceptionally long and thick lashes (the famous "cinema lashes"). The gaze is never piercing — it is caressing, imbued with a voluptuous languor or an exquisite tenderness.</li>
            <li>The details: an abundant, supple head of hair, often wavy. An elegant, finely fleshy nose. The mouth is often the major asset: small, drawn in a "Cupid's bow", full and sensual. Finally, the Venusian's voice is always measured, melodious, like music that instantly reassures the listener.</li>
          </ul>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>What to remember about the Venusian profile in astrology</H2>

        <Callout tone="ok" title="Conclusion">
          <p>
            In conclusion: having a strong Venusian dominance in your natal chart is a gift from the heavens, provided you do not rest on your laurels. The Venusian is here to remind us that life is not only about duty and struggle. His true karmic mission is spiritual: to inject beauty, gentleness and love into a world that sorely lacks them, and to prove that peace is always the greatest of victories.
          </p>
        </Callout>
      </section>

      <section
        aria-label="Summary of the Venusian portrait"
        className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm"
      >
        <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
          <div className="p-5 font-serif text-lg font-medium text-white/90">Axis</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Expression</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Risk</div>
        </div>

        <TableRow
          title="Intellect"
          effect="Aesthetic, emotional, diplomatic intelligence"
          reading="Refusal of dry effort, distraction by pleasure"
        />
        <TableRow
          title="Social life"
          effect="Charm, pacifism, connection, forbearance"
          reading="Flight from conflict, dependence on approval"
        />
        <TableRow
          title="Love"
          effect="Seduction, tenderness, romance, flame"
          reading="Infidelity, addiction to being in love, temptations"
        />
        <TableRow
          title="Calling"
          effect="Beauty, luxury, art, relationships, hospitality"
          reading="Laziness, gentle manipulation, charming parasite"
        />
      </section>

      <section id="faq-venusien" className="space-y-6" aria-label="Frequently asked questions about the Venusian">
        <H2>Frequently asked questions about the Venusian</H2>

        <div className="divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md">
          <details className="group">
            <summary className="flex cursor-pointer items-center gap-4 p-6 text-left font-serif text-lg font-medium text-white/90 transition-colors hover:text-rose-200">
              <svg className="h-5 w-5 shrink-0 text-rose-300/60 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              What is a Venusian in astrology?
            </summary>
            <div className="px-6 pb-6 pl-[3.25rem] text-sm leading-relaxed text-white/70 md:text-base">
              The Venusian is a planetary type in whom Venus dominates the natal chart. He is marked by a refined aesthetic sense, natural charm, a constant search for harmony and a deep need for love and beauty in every area of his life.
            </div>
          </details>

          <details className="group">
            <summary className="flex cursor-pointer items-center gap-4 p-6 text-left font-serif text-lg font-medium text-white/90 transition-colors hover:text-rose-200">
              <svg className="h-5 w-5 shrink-0 text-rose-300/60 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              Which careers suit a Venus dominant?
            </summary>
            <div className="px-6 pb-6 pl-[3.25rem] text-sm leading-relaxed text-white/70 md:text-base">
              A Venus dominant thrives in the arts, fashion, design, diplomacy, gastronomy, aesthetics, luxury, jewelry, public relations and any profession where one must beautify, connect and create harmony.
            </div>
          </details>

          <details className="group">
            <summary className="flex cursor-pointer items-center gap-4 p-6 text-left font-serif text-lg font-medium text-white/90 transition-colors hover:text-rose-200">
              <svg className="h-5 w-5 shrink-0 text-rose-300/60 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              What are the risks of an afflicted Venus?
            </summary>
            <div className="px-6 pb-6 pl-[3.25rem] text-sm leading-relaxed text-white/70 md:text-base">
              An afflicted Venus in the natal chart can lead to laziness, jealousy, emotional dependency, sentimental manipulation and complacency, turning the pursuit of pleasure into destructive hedonism.
            </div>
          </details>

          <details className="group">
            <summary className="flex cursor-pointer items-center gap-4 p-6 text-left font-serif text-lg font-medium text-white/90 transition-colors hover:text-rose-200">
              <svg className="h-5 w-5 shrink-0 text-rose-300/60 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              How do I know if I am a Venusian?
            </summary>
            <div className="px-6 pb-6 pl-[3.25rem] text-sm leading-relaxed text-white/70 md:text-base">
              You are probably a Venusian if Venus is angular in your chart (conjunct the Ascendant, the Midheaven, the Descendant or the IC), if it is in Taurus or Libra, if it receives harmonious trines or sextiles, or if you have a stellium in Taurus or Libra.
            </div>
          </details>
        </div>
      </section>

      <footer className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md sm:p-12">
        <H3>Going further with the planetary portraits</H3>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Pill>Venus</Pill>
          <Pill tone="sky">Astrological portrait</Pill>
          <Pill tone="violet">Love</Pill>
          <Pill tone="emerald">Natal chart</Pill>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/blog/mercurien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Read the portrait of the Mercurial
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/blog/martien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Read the portrait of the Martian
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}
