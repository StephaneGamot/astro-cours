import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import Image from "next/image";
import { AUTHOR_PERSON, PUBLISHER_ORG } from "@/lib/seo";
import OrientationProImage from "@/public/images/blog/orientation-professionnelle-theme-astral.webp";

export const meta = {
  slug: "orientation-professionnelle-theme-astral",
  title: "Career Direction and the Natal Chart",
  description:
    "Analyse career direction in a natal chart: the 10th House, 1st House, Part of Fortune and Midheaven to define vocation and social standing.",
  date: "2026-03-28",
  tags: [
    "orientation professionnelle",
    "vocation",
    "métier",
    "carrière",
    "maison X",
    "milieu du ciel",
    "thème astral",
    "interprétation",
    "Mercure",
    "mars",
    "Vénus",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/orientation-professionnelle-theme-astral.webp",
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

export default function OrientationProfessionnelleThemeAstralPost() {
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
                  name: "Which house should I look at for career direction in astrology?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The 10th House remains the priority for social recognition and career, but the 1st House is just as essential for temperament, identity and the way one takes one's place in life.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which planets give the fundamental nature of a vocation?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In this method, Mars, Venus and Mercury are the three lords of action that describe the fundamental nature of a vocation: action, art or intellect.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the Midheaven enough to find a profession?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. The Midheaven is very important, but a serious reading also cross-references the 1st, 7th, 4th, 2nd and 6th Houses, the Part of Fortune, the aspects, the ruler of the MC and the hierarchy of the planets involved.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(251,191,36,0.1)] aspect-[7/3]">
        <Image
          src={OrientationProImage}
          alt="Symbolic illustration of career direction in astrology"
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
          <Kicker>Vocation • Profession • 10th House • 1st House • Midheaven</Kicker>

          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="font-serif text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl md:max-w-3xl">
              Finding your career direction in a natal chart
            </h2>

            <div className="flex flex-wrap gap-3 text-sm text-white/70">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                Intermediate read
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                Pro method
              </span>
            </div>
          </div>

          <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            <strong className="font-medium text-amber-200">Career direction in astrology</strong>{" "}
            cannot be reduced to "a job written in the stars". Professional indicators
            show, rather, what draws us in — sometimes very early, sometimes
            unconsciously — and the areas where we develop certain skills more
            naturally. To read vocation, profession or career, you have to cross-reference the{" "}
            <strong className="font-medium text-white">10th House</strong>, the{" "}
            <strong className="font-medium text-white">1st House</strong>, the{" "}
            <strong className="font-medium text-white">lords of action</strong>, the{" "}
            <strong className="font-medium text-white">Part of Fortune</strong>, the{" "}
            <strong className="font-medium text-white">Midheaven</strong> and the actual
            strength of the planets concerned.
          </p>

          <div className="mt-8 border-t border-white/5 pt-6">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-3" aria-label="Key points of the article">
        <Stat label="Priority house" value="10th House" />
        <Stat label="House of identity" value="1st House" />
        <Stat label="Key planets" value="Mars • Venus • Mercury" />
      </section>

      <Callout tone="note" title="The right angle of interpretation">
        <p>
          Professional indicators do not just hand you a "possible" job.
          Above all, they reveal a{" "}
          <strong className="text-white">nature of action</strong>, a way of setting
          oneself in motion, a type of skill that develops more easily and a
          style of commitment to work.
        </p>
        <p>
          Ideally, the actual profession is in tune with the deep vocation.
          When it is not, it often becomes harder to flourish over the long term.
        </p>
      </Callout>

      <Divider />

      <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 shadow-2xl backdrop-blur-md sm:p-12">
        <div
          className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-amber-500/10 blur-[60px]"
          aria-hidden="true"
        />

        <h2 className="relative z-10 font-serif text-2xl font-medium text-white sm:text-3xl">
          The complete method for seeking a vocation
        </h2>

        <div className="relative z-10 mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "1. Look for a planet in the 10th House or the 1st House",
            "2. Failing that, check the 7th House then the 4th House",
            "3. Only then look at the 2nd House and the 6th House",
            "4. Give weight to the house where the Part of Fortune sits",
            "5. Check the aspects to the Midheaven or its ruler",
            "6. Examine the heliacal risings around the birth",
            "7. Look at the applications of the Sun and the Moon",
            "8. Check the dignities on the Moon, the MC and the Ascendant",
          ].map((item, index) => (
            <div
              key={item}
              className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-black/40 px-5 py-4 transition-colors hover:border-amber-500/30 hover:bg-white/5"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500/10 font-serif text-sm font-bold text-amber-400 group-hover:bg-amber-500/20">
                {index + 1}
              </span>
              <span className="text-sm font-medium text-white/85 sm:text-base">{item.replace(/^\d+\.\s/, "")}</span>
            </div>
          ))}
        </div>
      </section>

      {/* DEFINITION BOX – Featured Snippet */}
      <aside className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6 leading-relaxed text-white/85">
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-emerald-400">Definition</p>
        <p><strong>Career direction in astrology</strong> is determined by analysing the &laquo;&nbsp;lord of actions&nbsp;&raquo; (the highest or most dignified planet), the <Link href="/maisons/maison-10">10th House</Link> (the Midheaven), its ruler and the aspects it receives in the <Link href="/blog/qu-est-ce-qu-un-theme-astral">natal chart</Link>.</p>
      </aside>

      {/* APP intro */}
      <p className="text-base leading-relaxed text-white/80 md:text-lg">
        Looking for your <strong>vocation</strong> and wondering whether your natal chart can guide you? Forget your Sun sign — it is the <strong>lord of actions</strong>, the 10th House and the Part of Fortune that hold the answer. This methodical 8-step guide teaches you to identify your professional path through traditional astrology.
      </p>

      <section className="space-y-6">
        <H2>1) The three lords of action: how to identify your vocation</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          In this method, three planets give the{" "}
          <strong className="font-medium text-amber-200">fundamental nature of the vocation</strong>.
          Every planet refines the reading, but Mars, Venus and Mercury
          describe particularly well the type of action the native is driven
          to develop.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Mars" subtitle="Action • strength • concrete commitment">
            <p>
              Mars favours manual, physical, technical, competitive,
              operational and risky trades, or those that demand courage and initiative.
            </p>
            <p>
              It can also support roles of command, leadership,
              management or decision-making.
            </p>
          </Card>

          <Card title="Venus" subtitle="Art • aesthetics • pleasure • quality">
            <p>
              Venus favours artistic, aesthetic, creative,
              culinary, vocal, decorative, relational or sensory activities.
            </p>
            <p>
              It speaks of taste, harmony, beauty and elegance, but also
              of attractiveness and refinement.
            </p>
          </Card>

          <Card title="Mercury" subtitle="Thought • analysis • mental know-how">
            <p>
              Mercury favours trades where one thinks, calculates, analyses,
              communicates, teaches, writes, organises, classifies, translates or explains.
            </p>
            <p>
              It points to practical intelligence, information processing
              and professions founded on the mind or intellectual technique.
            </p>
          </Card>
        </div>

        <Callout tone="ok" title="Core idea">
          <p>
            Mars, Venus and Mercury do not give an exact job title.
            Instead, they give the{" "}
            <strong className="text-white">fundamental tone of the vocation</strong>:
            to act, to create or to think.
          </p>
        </Callout>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>2) Where to look for the lord of action?</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          The hierarchy of the houses is not neutral. Some houses make
          the planet more visible, more operative, more manifest in social life
          or in the native's deep identity.
        </p>

        <section
          aria-label="Hierarchy of the houses"
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
            <div className="p-5 font-serif text-lg font-medium text-white/90">House</div>
            <div className="p-5 font-serif text-lg font-medium text-white/90">Role</div>
            <div className="p-5 font-serif text-lg font-medium text-white/90">Importance</div>
          </div>

          <TableRow
            title="10th House"
            effect="Recognition, career, success, status"
            reading="Top priority for the profession"
          />
          <TableRow
            title="1st House"
            effect="Temperament, identity, talents, way of being"
            reading="Very important for vocation"
          />
          <TableRow
            title="7th House"
            effect="The other, the outside world, interaction"
            reading="Secondary but still useful"
          />
          <TableRow
            title="4th House"
            effect="Intimate base, foundation, rootedness"
            reading="Worth considering, but less socially telling"
          />
          <TableRow
            title="2nd House"
            effect="Resources, material support"
            reading="Succedent, but more important than the other succedents"
          />
          <TableRow
            title="6th House"
            effect="Service, tasks, daily routine, usefulness"
            reading="The only cadent house to keep here"
          />
        </section>

        <Callout title="Practical summary">
          <p>
            In order of importance, focus mainly on the{" "}
            <strong className="text-white">10th</strong>, the{" "}
            <strong className="text-white">1st</strong>, then the{" "}
            <strong className="text-white">7th</strong>, the{" "}
            <strong className="text-white">4th</strong>, the{" "}
            <strong className="text-white">2nd</strong> and finally the{" "}
            <strong className="text-white">6th</strong>.
          </p>
        </Callout>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>3) The 10th House and Midheaven: why they are not enough on their own</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          The 10th House speaks of social recognition, visible success,
          position, accomplishment and honour. It therefore remains the priority.
          But the 1st House is just as crucial, because it describes the way
          a person experiences themselves, shows up, acts spontaneously and takes their place.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="10th House" subtitle="The visible summit">
            <p>
              It shows the career, status, recognition, ambition,
              reputation and the way action can be seen publicly.
            </p>
          </Card>

          <Card title="1st House" subtitle="The embodied engine">
            <p>
              It shows the temperament, natural talents, identity,
              personal style and the way the native concretely engages with life.
            </p>
          </Card>
        </div>

        <Callout tone="warn" title="Common mistake">
          <p>
            Reducing the profession to the Midheaven alone impoverishes the reading.
            A vocation needs a{" "}
            <strong className="text-white">visible summit</strong>, but also an{" "}
            <strong className="text-white">identity foundation</strong>.
          </p>
        </Callout>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>4) Part of Fortune, Midheaven and ruler of the MC</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          A refined reading of career direction does not stop at the
          occupied houses. The <strong className="text-white">Part of Fortune</strong>,
          the <strong className="text-white">Midheaven</strong> and the{" "}
          <strong className="text-white">ruler of the MC</strong> reinforce or rank
          certain planets.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Part of Fortune">
            <p>
              The house where the Part of Fortune sits deserves particular weight.
              It can point to an area of concrete realisation, efficiency or
              material accomplishment.
            </p>
          </Card>

          <Card title="Midheaven">
            <p>
              A planet that aspects the MC becomes more relevant to the career,
              social visibility and career direction.
            </p>
          </Card>

          <Card title="Ruler of the MC">
            <p>
              A planet strongly connected to the ruler of the MC takes on greater weight
              in the reading of vocation and professional trajectory.
            </p>
          </Card>
        </div>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>5) Sun, Moon and the relationship to the lights</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          The luminaries reinforce the professional reach of a planet.
          A planet to which the Moon or the Sun applies, a planet in exact aspect
          with the luminary that rules the sect, or a planet strongly
          linked to the Sun, can become far more important in the vocational reading.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="The Sun" subtitle="Public light, authority, visibility">
            <p>
              The Sun points towards things that are heroic, public, mediatised,
              valued, centralised or tied to will and radiance.
            </p>
          </Card>

          <Card title="The Moon" subtitle="Protection, adaptation, living matter">
            <p>
              The Moon refers more to things that are particular, nourishing,
              protective, natural, sensitive, subjective or tied to needs.
            </p>
          </Card>
        </div>

        <Callout title="A useful relationship to remember">
          <p>
            A planet closely linked to the Sun or the Moon often becomes more
            telling for the profession, because it receives greater{" "}
            <strong className="text-white">existential weight</strong>.
          </p>
        </Callout>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>6) Dignities, combustion and stationing</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          A planet is not valued only by its house: it is also valued by its
          actual strength. To judge the vocation, you must measure its dignities, its
          relationship to the Sun, and even its stationing around the birth.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="What reinforces">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-emerald-400">✔</span>
                <span>A planet in its domicile acts more according to its own nature</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-emerald-400">✔</span>
                <span>A planet with strong dignities at the MC or Ascendant is reinforced</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-emerald-400">✔</span>
                <span>A planet stationing before turning direct again near the birth can be very powerful</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-emerald-400">✔</span>
                <span>A cazimi planet can be exceptionally reinforced</span>
              </li>
            </ul>
          </Card>

          <Card title="What weakens">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-red-400">✘</span>
                <span>A combust planet loses expressive strength</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-red-400">✘</span>
                <span>A station close to retrogradation tends to weaken the planet</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-red-400">✘</span>
                <span>A poor celestial state reduces the clarity of the professional promises</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>7) The sign of the lord of actions</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          The sign in which the lord of actions sits strongly alters
          the way the vocation is expressed. You must look at the nature of the sign,
          its type, its rhythm and its quadruplicity.
        </p>

        <section
          aria-label="Table of sign types"
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
            <div className="p-5 font-serif text-lg font-medium text-white/90">Type</div>
            <div className="p-5 font-serif text-lg font-medium text-white/90">Tendency</div>
            <div className="p-5 font-serif text-lg font-medium text-white/90">Professional reading</div>
          </div>

          <TableRow
            title="Cardinal"
            effect="Impact, movement, extraversion, change"
            reading="Ability to initiate, launch, drive, act quickly"
          />
          <TableRow
            title="Fixed"
            effect="Stability, depth, duration, persistence"
            reading="Deep work, slow building, long-term mastery"
          />
          <TableRow
            title="Mutable"
            effect="Duality, blending, interaction, adaptation"
            reading="Flexibility, versatility, back-and-forth, continual adjustment"
          />
        </section>

        <Callout tone="ok" title="A simple example">
          <p>
            A <strong className="text-white">Mars in Cancer</strong> can be brave,
            helpful, active, protective, sometimes handy, but rarely reckless in
            the raw sense of the word. The sign always nuances the nature of the planet.
          </p>
        </Callout>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>8) The influence of social status and the role of the other planets</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          The same planet will not give exactly the same profession depending on the
          social environment, the real opportunities and the overall structure of the chart.
          The symbolism stays stable, but its level of manifestation varies.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Mars according to context">
            <p>
              With high status, Mars can point towards military leaders,
              managers, decision-makers or executives. In a more
              modest context, it may instead favour manual, technical,
              physical or field trades.
            </p>
          </Card>

          <Card title="Jupiter, Saturn, Sun, Moon">
            <p>
              <strong className="text-white">Jupiter</strong> points towards the ideal,
              the law, truth, religion, transmission, vision.
            </p>
            <p>
              <strong className="text-white">Saturn</strong> speaks of management,
              discipline, earth, structure, administration, control, public service,
              resources, constraints and responsibilities.
            </p>
            <p>
              <strong className="text-white">The Sun and Moon</strong> add a weight
              of light, status, centrality or vital necessity to the role.
            </p>
          </Card>
        </div>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Synthesis: the complete method for analysing career direction</H2>

        <section className="rounded-[2rem] border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-transparent p-8 shadow-2xl backdrop-blur-md">
          <ol className="list-decimal space-y-4 pl-6 text-lg text-white/90 marker:font-serif marker:font-bold marker:text-emerald-400">
            <li>Spot the planets in the 10th House and the 1st House</li>
            <li>Complete with the 7th, 4th, 2nd and 6th Houses if necessary</li>
            <li>Identify Mars, Venus and Mercury as the lords of action</li>
            <li>Look at the Part of Fortune, the MC and the ruler of the MC</li>
            <li>Measure the aspects, the dignities and the links to the luminaries</li>
            <li>Nuance with the sign, the house and the social status</li>
            <li>
              <strong className="text-emerald-300">
                Make an overall synthesis between vocation, profession and way of acting
              </strong>
            </li>
          </ol>
        </section>

        <Callout tone="ok" title="Professional conclusion">
          <p>
            A serious vocational reading does not only ask "which job".
            It also asks{" "}
            <strong className="text-white">how the person acts, why they act,
            and within which framework they can truly flourish</strong>.
          </p>
          <p>
            The visible profession, the deep vocation and the style of action must
            be read together. It is this cross-reading that makes astrological career
            direction useful, concrete and intelligent.
          </p>
        </Callout>
      </section>

      <section className="mt-16 space-y-8">
        <H2>FAQ — Career direction and the natal chart</H2>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Which house should I look at for a career?">
            <p>
              The 10th House remains the priority for career, status and
              recognition. But the 1st House is essential for understanding the
              way you concretely carry that vocation.
            </p>
          </Card>

          <Card title="Are Mars, Venus and Mercury enough?">
            <p>
              No. They give the fundamental nature of the action, but the whole chart
              must then be nuanced by the other planets, the signs, the aspects
              and the houses.
            </p>
          </Card>

          <Card title="Why look at the Part of Fortune?">
            <p>
              Because it can point to a place of efficiency, realisation or
              concrete potential that supports the profession.
            </p>
          </Card>

          <Card title="Can a vocation be out of line with the actual job?">
            <p>
              Yes. That is even one of the great uses of this reading: to reveal
              the possible gap between what one does and what one is
              naturally built for.
            </p>
          </Card>
        </div>
      </section>

      <footer className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md sm:p-12">
        <H3>Going further in professional analysis</H3>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Pill>10th House</Pill>
          <Pill tone="sky">Midheaven</Pill>
          <Pill tone="violet">Vocation</Pill>
          <Pill tone="emerald">Natal chart</Pill>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/blog/qu-est-ce-qu-un-theme-astral"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Understand the natal chart
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/blog/finances-theme-astral"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Read the article on finances
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* ============================================================ */}
        {/*  Maillage interne enrichi — Audit 31/05/2026 (R3)            */}
        {/*  9 liens contextuels supplémentaires vers les hubs concernés */}
        {/* ============================================================ */}
        <div className="mt-12 grid gap-3 text-left sm:grid-cols-2 lg:grid-cols-3">
          <Link href="/maisons/maison-1" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">House</span>
            <span className="mt-1 block font-medium text-white/90">1st House — Identity</span>
            <span className="mt-1 block text-xs text-white/60">What you embody before any job</span>
          </Link>
          <Link href="/maisons/maison-6" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">House</span>
            <span className="mt-1 block font-medium text-white/90">6th House — Daily life</span>
            <span className="mt-1 block text-xs text-white/60">The concrete work of every day</span>
          </Link>
          <Link href="/maisons/maison-10" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">House</span>
            <span className="mt-1 block font-medium text-white/90">10th House — Vocation</span>
            <span className="mt-1 block text-xs text-white/60">The heart of your social direction</span>
          </Link>
          <Link href="/planetes/saturne" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Planet</span>
            <span className="mt-1 block font-medium text-white/90">Saturn — Structure</span>
            <span className="mt-1 block text-xs text-white/60">Building a long career</span>
          </Link>
          <Link href="/planetes/jupiter" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Planet</span>
            <span className="mt-1 block font-medium text-white/90">Jupiter — Expansion</span>
            <span className="mt-1 block text-xs text-white/60">Opportunities for promotion</span>
          </Link>
          <Link href="/planetes/mars" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Planet</span>
            <span className="mt-1 block font-medium text-white/90">Mars — Action</span>
            <span className="mt-1 block text-xs text-white/60">Combativeness, spirit of initiative</span>
          </Link>
          <Link href="/transits" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Method</span>
            <span className="mt-1 block font-medium text-white/90">Transits</span>
            <span className="mt-1 block text-xs text-white/60">Timing your career change</span>
          </Link>
          <Link href="/revolution-solaire" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Method</span>
            <span className="mt-1 block font-medium text-white/90">Solar return</span>
            <span className="mt-1 block text-xs text-white/60">Chart of the year — a vocational highlight</span>
          </Link>
          <Link href="/blog/saturnien" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Article</span>
            <span className="mt-1 block font-medium text-white/90">Portrait of the Saturnian</span>
            <span className="mt-1 block text-xs text-white/60">Silent ambition, long building</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}
