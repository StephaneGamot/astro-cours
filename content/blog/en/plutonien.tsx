import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import Image from "next/image";
import { AUTHOR_PERSON, PUBLISHER_ORG } from "@/lib/seo";
import PlutonienImage from "@/public/images/blog/plutonien.webp";
import Plutonien2Image from "@/public/images/blog/plutonien2.webp";

export const meta = {
  slug: "plutonien",
  title:
    "The Plutonian: Master of Shadow and Renewal",
  description:
    "A portrait of the Plutonian in astrology: intensity, truth, crisis and resilience. Discover the transformation and impact of Pluto in a natal chart.",
  date: "2026-03-29",
  tags: [
    "Pluton",
    "plutonien",
    "portrait astrologique",
    "transformation",
    "intensité",
    "thème astral",
    "psychologie astrologique",
    "amour",
    "karma",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/plutonien.webp",
};

function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-fuchsia-300">
      <span
        className="h-1.5 w-1.5 animate-pulse rounded-full bg-fuchsia-300"
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
        className="mr-4 block h-px w-8 bg-gradient-to-r from-fuchsia-500/60 to-transparent"
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
      box: "border-fuchsia-500/30 bg-fuchsia-500/10 shadow-[0_0_30px_rgba(217,70,239,0.06)]",
      icon: "text-fuchsia-300",
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
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-sm transition-all hover:border-fuchsia-300/30">
      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-300/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
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
    <div className="group grid grid-cols-1 border-b border-white/10 transition-colors hover:bg-fuchsia-300/[0.03] md:grid-cols-3">
      <div className="p-4 font-serif text-lg text-fuchsia-200/90">{title}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{effect}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{reading}</div>
    </div>
  );
}

export default function PlutonienPost() {
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
                  name: "What is a Plutonian in astrology?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A planetary type with Pluto dominant: intensity, magnetism, psychological penetration, a capacity for regeneration, and the power of transformation.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What careers suit a Pluto dominant?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Psychoanalysis, research, surgery, criminology, crisis finance, the occult, and the professions of shadow and power.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the risks of an afflicted Pluto?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Manipulation, destructive obsessions, paranoia, psychological domination, underground violence, and self-destruction.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I know if I'm Plutonian?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Pluto angular, in Scorpio, in aspect to the Sun or the Ascendant, a stellium in Scorpio, or the Sun in the 8th house.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(217,70,239,0.12)] aspect-[7/3]">
        <Image
          src={PlutonienImage}
          alt="Symbolic portrait of the Plutonian temperament in astrology"
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
          className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-fuchsia-300/5 blur-[80px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-fuchsia-300/5 via-transparent to-black/50"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <Kicker>Pluto • shadow • truth • crisis • rebirth</Kicker>

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

          <div className="mt-8 rounded-2xl border border-purple-400/20 bg-purple-400/[0.04] px-6 py-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-purple-300/80">Definition</p>
            <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
              The <strong>Plutonian in astrology</strong> is a person whose <Link href="/planetes/pluton" className="underline hover:text-purple-200">Pluto</Link> holds a dominant position in the <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline hover:text-purple-200">natal chart</Link> (angular, well aspected, in Scorpio). They are marked by an extraordinary psychological intensity, a hypnotic magnetism, and a capacity for regeneration that drives them to move through — and transform — the deepest crises.
            </p>
          </div>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            Do you have <strong>Pluto dominant</strong> in your natal chart and a gaze that seems to pierce souls? This magnetic power fascinates and unsettles in equal measure: manipulation, obsession, destructive impulses. This complete portrait of the <strong>Plutonian temperament</strong> — psychology, career, love, morphopsychology — plunges into the depths of this extreme planetary dominant, from the archetype of Hades to the challenge of inner transmutation.
          </p>

          <div className="mt-8 border-t border-white/5 pt-6">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-3" aria-label="Key points of the Plutonian portrait">
        <Stat label="Core strength" value="Intensity & truth" />
        <Stat label="Natural ground" value="Crisis & transformation" />
        <Stat label="Chief shadow" value="Vengeance & control" />
      </section>

      <section className="space-y-6">
        <H2>Plutonian intelligence: psychological penetration and abyssal thinking</H2>

        <Card title="The intellect">
          <p>
            The Plutonian mind is a laser able to pierce straight through matter. It may lack the lightness of Mercury or the idealism of Neptune, but it possesses an intellectual faculty that the average person finds terrifying: absolute insight.
          </p>
          <p>
            The Plutonian is obsessed with what lies hidden. Appearances, polished speech and surface pleasantries bore them deeply — sometimes they hold them in contempt. Their intellect works like that of a detective or a psychoanalyst: they want to get to the bottom of things, unearth secrets, understand taboos, and bring to light everything society works to sweep under the rug.
          </p>
          <p>
            They come equipped with a built-in lie detector. Trying to lie to a Plutonian is an insult to their intelligence; they read the unconscious, the unspoken and the cracks in those they speak with in a split second. As a result, their mind shines in complex investigation, occult research, criminology, shadow strategy, and the study of the mysteries of the human psyche.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>The Plutonian in society: dark magnetism, power and intimidation</H2>

        <Card title="Social life">
          <p>
            In company, the Plutonian never goes unnoticed, even when they say nothing at all. They give off an aura of mystery, a density and an animal magnetism that immediately polarize those around them. The old saying in astrology holds true: a Plutonian is either adored or detested, but they leave no one indifferent.
          </p>
          <p>
            Their temperament is governed by the law of &quot;All or Nothing.&quot; Lukewarmness, half-measures and compromise are unbearable to them. In their relationships, they are extraordinarily demanding. A Plutonian&apos;s friendship is a blood pact: if you earn their trust, they will go to hell to save you. They will show indestructible loyalty and unshakeable support through the worst ordeals.
          </p>
          <p>
            The flip side? Betrayal is unforgivable. If you break their trust, the Plutonian doesn&apos;t simply cross you off their life — they erase you from their reality. And if they feel threatened, their capacity to strike back (often psychologically) is surgically precise and formidable.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>The Plutonian in love: total passion, possession and transformation</H2>

        <Card title="Love">
          <p>
            The Plutonian&apos;s love life is anything but a calm, untroubled river. It&apos;s a volcano in full eruption. For them, love is not a pastime — it is a transformative crisis.
          </p>
          <p>
            The Plutonian does not look for a partner to split the bills and share Sunday lunches; they seek the fusion of souls and of bodies. They long to possess the other as much as they long to be possessed. This intensity gives rise to a love life that is passionate, carnal (sexuality, the domain of Pluto and Scorpio, is often central and liberating for them), but also perilous.
          </p>
          <p>
            Their greatest challenge is not to sink into obsession, jealousy or the need for control. The Plutonian often fears being abandoned or left vulnerable, which can push them to &quot;test&quot; their partner to gauge how solid their love really is. But when they find a partner able to hold their intensity without taking fright, the Plutonian offers the deepest, most protective and most transformative love in the entire zodiac.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Plutonian careers: which paths suit a Pluto dominant?</H2>

        <Card title="Vocation">
          <p>
            If one word sums up a Plutonian&apos;s destiny, it is Resilience. The life of this native is often punctuated by major crises: symbolic bereavements, ruin, psychological collapse, or radical changes of life.
          </p>
          <p>
            But where such ordeals would destroy any other sign, the Plutonian finds their true strength in them. This is the myth of the Phoenix. They are built to survive hell. They need everything to burn in order to rise again from the ashes — stronger, purer and more lucid than before.
          </p>
          <p>
            Professionally, the Plutonian excels wherever there is a crisis to manage, a secret to crack, or a transformation to carry out:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Depth psychology: psychiatrist, psychoanalyst, hypnotherapist.</li>
            <li>The cutting edge and the vital: surgeons, forensic pathologists, life-or-death emergencies.</li>
            <li>Occult and financial power: complex wealth management, crisis audits, trading, tax investigation (Pluto rules underground riches).</li>
            <li>Esotericism: karmic astrology, the occult, shamanism.</li>
          </ul>
          <p>
            It&apos;s simple: when all is well, the Plutonian grows bored or anxious. When everything collapses and everyone else panics, they take control with absolute composure.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Afflicted Pluto in the natal chart: obsessions, manipulation and self-destruction</H2>

        <Callout tone="warn" title="The shadow of Pluto">
          <p>
            When Pluto is heavily dissonant (through hard aspects with Mars, the Moon or the Sun), the shadow swallows the light. The thirst for truth becomes a destructive paranoia, and the need for fusion becomes a psychological tyranny.
          </p>
          <p>
            The afflicted Plutonian is Machiavellian. If they cannot sublimate their energy, they may develop a genuine fascination with raw power, with manipulation, even with destruction (of the other or of themselves). This is the archetype of the emotional tormentor or the compulsive self-saboteur.
          </p>
          <p>
            Refusing to let go, they can lock themselves into eternal grudges, seeking revenge rather than healing. The karma of the dissonant Plutonian is to realize that the venom they intend for others always ends up poisoning themselves.
          </p>
        </Callout>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>The Plutonian woman in astrology: a portrait of the Pluto-dominant female</H2>

        <Card title="The Yin expression">
          <p>
            In a natal chart dominated by Yin (or feminine) energy, a strong Pluto gives rise to one of the most powerful figures of the collective unconscious: the Medicine Woman, the Witch (in the noble sense), or the Priestess.
          </p>
          <p>
            She possesses a visceral intuition and a hypnotic charisma. People come to her to be healed of their most unspeakable traumas, because she radiates an aura of absolute understanding in the face of pain. She is not afraid of the &quot;dirty,&quot; the complicated, or tears.
          </p>
          <p>
            She is often a femme fatale in spite of herself, whose mere presence awakens the buried desires and the anxieties of those around her. If Pluto is afflicted, she becomes the manipulator, the expert in toxic relationships, or the figure of the &quot;black widow,&quot; using her emotional clairvoyance to enslave rather than to liberate.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Plutonian morphopsychology: physical portrait and appearance</H2>

        <Card title="The physical portrait">
          <p>
            You don&apos;t recognize a Plutonian by the shape of their nose or their stature, but by the intensity of their presence.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>The gaze: this is the absolute signature of the Plutonian. The gaze is unfathomable, dark (even with light-colored eyes), piercing and hypnotic. When they fix their eyes on you, you have the strange sense that they are reading directly into your soul, or stripping you bare.</li>
            <li>The overall bearing: an aura of impenetrability. The Plutonian radiates a contained force, like a volcano beneath ice. Their movements are often slow, calculated, silent. They can cross a room without a sound, yet everyone will notice their presence.</li>
            <li>The face: the features are often dense, marked by a heavy brow ridge (the &quot;dark gaze&quot;). The face is rarely smooth; it carries the marks of a seething inner world.</li>
            <li>The style: a strong leaning toward dark colors, black (the color that absorbs light and mystery), or deep blood red. They flee anything garish, superficial, or too trendy.</li>
          </ul>
        </Card>
      </section>


      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(217,70,239,0.12)] aspect-[7/3]">
        <Image
          src={Plutonien2Image}
          alt="Portrait of Hades in astrology"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>

      <section className="space-y-6">
        <H2>What to remember about the Plutonian profile in astrology</H2>

        <Callout tone="ok" title="Conclusion">
          <p>
            In conclusion: carrying a strong Plutonian dominant in your natal chart is a path of extreme demands. It means being charged with the mission of a spiritual alchemist: turning lead into gold, and pain into power. If the Plutonian agrees to walk through their own darkness without wallowing in it, they become the most luminous being of the zodiac, proving to the whole world that no night is eternal and that one can rise again from anything.
          </p>
        </Callout>
      </section>

      <section
        aria-label="Summary of the Plutonian portrait"
        className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm"
      >
        <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
          <div className="p-5 font-serif text-lg font-medium text-white/90">Axis</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Expression</div>
          <div className="p-5 text-lg font-medium text-white/90">Risk</div>
        </div>

        <TableRow
          title="Intellect"
          effect="Insight, hidden truth, X-ray vision"
          reading="Paranoia, suspicion, obsession with the unspoken"
        />
        <TableRow
          title="Social life"
          effect="Magnetism, absolute loyalty, intensity"
          reading="Brutal erasure of the other, vengeance, total rupture"
        />
        <TableRow
          title="Love"
          effect="Fusion, passion, transformation, central sexuality"
          reading="Jealousy, control, obsession, destructive tests"
        />
        <TableRow
          title="Vocation"
          effect="Crisis, the psyche, surgery, occult finance, esotericism"
          reading="Manipulation, self-sabotage, fascination with power"
        />
      </section>

      <section id="faq-plutonien" className="space-y-6">
        <H2>Frequently asked questions about the Plutonian</H2>

        <div className="space-y-4">
          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
            <summary className="flex cursor-pointer items-center gap-3 font-serif text-lg font-medium text-white/90 transition-colors hover:text-purple-200">
              <svg className="h-5 w-5 shrink-0 text-purple-300/60 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              What is a Plutonian in astrology?
            </summary>
            <p className="mt-4 pl-8 text-sm leading-relaxed text-white/70 md:text-base">
              A planetary type with Pluto dominant: intensity, magnetism, psychological penetration, a capacity for regeneration, and the power of transformation.
            </p>
          </details>

          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
            <summary className="flex cursor-pointer items-center gap-3 font-serif text-lg font-medium text-white/90 transition-colors hover:text-purple-200">
              <svg className="h-5 w-5 shrink-0 text-purple-300/60 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              What careers suit a Pluto dominant?
            </summary>
            <p className="mt-4 pl-8 text-sm leading-relaxed text-white/70 md:text-base">
              Psychoanalysis, research, surgery, criminology, crisis finance, the occult, and the professions of shadow and power.
            </p>
          </details>

          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
            <summary className="flex cursor-pointer items-center gap-3 font-serif text-lg font-medium text-white/90 transition-colors hover:text-purple-200">
              <svg className="h-5 w-5 shrink-0 text-purple-300/60 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              What are the risks of an afflicted Pluto?
            </summary>
            <p className="mt-4 pl-8 text-sm leading-relaxed text-white/70 md:text-base">
              Manipulation, destructive obsessions, paranoia, psychological domination, underground violence, and self-destruction.
            </p>
          </details>

          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
            <summary className="flex cursor-pointer items-center gap-3 font-serif text-lg font-medium text-white/90 transition-colors hover:text-purple-200">
              <svg className="h-5 w-5 shrink-0 text-purple-300/60 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              How do I know if I&apos;m Plutonian?
            </summary>
            <p className="mt-4 pl-8 text-sm leading-relaxed text-white/70 md:text-base">
              Pluto angular, in Scorpio, in aspect to the Sun or the Ascendant, a stellium in Scorpio, or the Sun in the 8th house.
            </p>
          </details>
        </div>
      </section>

      <footer className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md sm:p-12">
        <H3>Going further with the planetary portraits</H3>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Pill>Pluto</Pill>
          <Pill tone="sky">Astrological portrait</Pill>
          <Pill tone="violet">Transformation</Pill>
          <Pill tone="emerald">Natal chart</Pill>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/blog/neptunien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Read the portrait of the Neptunian
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/blog/solarien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Read the portrait of the Solarian
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}