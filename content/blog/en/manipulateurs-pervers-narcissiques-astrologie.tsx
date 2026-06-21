import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { TagPillsInline, getGlowFromTags } from "../ui";
import { AUTHOR_PERSON, PUBLISHER_ORG } from "@/lib/seo";

/* ================================================================== */
/*  META / SEO                                                        */
/* ================================================================== */
export const meta = {
  slug: "manipulateurs-pervers-narcissiques-astrologie",
  title:
    "Narcissistic abusers: astrological clues",
  description:
    "How astrology helps spot manipulative and narcissistic profiles in a natal chart. Learn to identify the key clues.",
  date: "2026-04-16",
  tags: [
    "psychologie astrologique",
    "manipulation",
    "pervers narcissique",
    "Pluton",
    "Neptune",
    "aspects",
    "thème astral",
    "relations",
    "protection",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/manipulateurs-pn.webp",
};

/* ================================================================== */
/*  COMPOSANTS LOCAUX                                                 */
/* ================================================================== */
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
    <h2 className="mb-6 flex items-center font-serif text-2xl font-light text-white sm:text-3xl md:text-4xl">
      <span
        className="mr-4 block h-px w-8 bg-gradient-to-r from-violet-400/60 to-transparent"
        aria-hidden="true"
      />
      {children}
    </h2>
  );
}

function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-serif text-xl font-medium text-white/90 sm:text-2xl">
      {children}
    </h3>
  );
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
    },
    ok: {
      box: "border-emerald-500/30 bg-emerald-500/10 shadow-[0_0_30px_rgba(16,185,129,0.05)]",
      icon: "text-emerald-400",
      svg: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    note: {
      box: "border-violet-400/25 bg-violet-400/10 shadow-[0_0_30px_rgba(139,92,246,0.05)]",
      icon: "text-violet-200",
      svg: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  };
  const current = styles[tone];

  return (
    <aside
      aria-label={title}
      className={`relative overflow-hidden rounded-2xl border p-5 backdrop-blur-md sm:p-6 ${current.box}`}
    >
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-current opacity-30 to-transparent" />
      <div className={`mb-3 flex items-center gap-3 font-serif text-base font-medium sm:text-lg ${current.icon}`}>
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
    <section className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md transition-colors hover:bg-white/[0.05] sm:rounded-3xl sm:p-7">
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
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-sm transition-all hover:border-violet-300/30 sm:p-5">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-300/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <p className="text-[0.65rem] uppercase tracking-widest text-white/50 sm:text-xs">{label}</p>
      <p className="mt-1.5 font-serif text-lg text-white/90 sm:mt-2 sm:text-xl">{value}</p>
    </div>
  );
}

function Divider() {
  return <hr className="my-10 border-t border-white/10 sm:my-12" aria-hidden="true" />;
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
      <div className="px-3 py-3 font-serif text-base text-violet-200/90 sm:px-4 sm:py-4 sm:text-lg">{title}</div>
      <div className="px-3 py-3 text-sm leading-relaxed text-white/80 sm:px-4 sm:py-4">{effect}</div>
      <div className="px-3 py-3 text-sm leading-relaxed text-white/80 sm:px-4 sm:py-4">{reading}</div>
    </div>
  );
}

function SignCard({
  sign,
  why,
  tone,
}: {
  sign: string;
  why: string;
  tone: "rose" | "sky" | "amber" | "emerald" | "violet";
}) {
  const colors = {
    rose: "border-rose-400/20 bg-rose-500/[0.06] hover:border-rose-400/30",
    sky: "border-sky-400/20 bg-sky-500/[0.06] hover:border-sky-400/30",
    amber: "border-amber-400/20 bg-amber-500/[0.06] hover:border-amber-400/30",
    emerald: "border-emerald-400/20 bg-emerald-500/[0.06] hover:border-emerald-400/30",
    violet: "border-violet-400/20 bg-violet-500/[0.06] hover:border-violet-400/30",
  };
  const dots = {
    rose: "bg-rose-400",
    sky: "bg-sky-400",
    amber: "bg-amber-400",
    emerald: "bg-emerald-400",
    violet: "bg-violet-400",
  };
  return (
    <div className={`rounded-xl border p-4 transition-colors sm:p-5 ${colors[tone]}`}>
      <div className="flex items-center gap-2">
        <span className={`h-2 w-2 rounded-full ${dots[tone]}`} aria-hidden />
        <p className="font-serif text-base font-semibold text-white/90 sm:text-lg">{sign}</p>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-white/60">{why}</p>
    </div>
  );
}

/* ================================================================== */
/*  ARTICLE                                                           */
/* ================================================================== */
export default function ManipulateursPNPost() {
  const glow = getGlowFromTags(meta.tags);

  return (
    <article className="mx-auto max-w-4xl space-y-10 pb-20 pt-8 text-white sm:space-y-12">
      {/* ── Schema.org ── */}
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
              wordCount: 4500,
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Can you see a narcissistic abuser in a natal chart?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Astrology does not diagnose a psychiatric disorder. However, certain planetary configurations — notably Pluto, Neptune and Lilith in hard aspects to the luminaries — signal manipulative tendencies, an excessive need for control or difficulty respecting other people's boundaries.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which planets are linked to manipulation in astrology?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Pluto (power, control, coercive hold), Neptune (illusion, lies, confusion) and to a lesser extent Lilith (boundary transgression) are the main markers. An afflicted Mars can add a dimension of aggression and domination.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which astrological profiles attract narcissistic abusers?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Profiles with a strong Neptune or Moon emphasis (empathy, receptivity, sacrifice) as well as Venus or Sun in water signs or in Pisces are particularly targeted. The abuser seeks a source of emotional energy — they are drawn to luminous, empathetic and generous personalities.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can astrology protect you from a manipulator?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Astrology is a tool of awareness, not a magic shield. By identifying in your own chart the zones of vulnerability (strong Neptune, fragile Moon, loaded 12th house) and the triggering transits, you can anticipate periods of emotional fragility and reinforce your boundaries.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      {/* ── Header ── */}
      <header className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6 shadow-2xl backdrop-blur-xl sm:rounded-[2.5rem] sm:p-8 md:p-12">
        <div
          className={`pointer-events-none absolute -right-24 -top-24 h-[500px] w-[500px] rounded-full opacity-30 mix-blend-screen blur-[100px] ${glow}`}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-violet-300/5 blur-[80px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-rose-500/5"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <Kicker>Pluto &bull; Neptune &bull; Coercive hold &bull; Protection &bull; Awareness</Kicker>

          <h2 className="mt-4 font-serif text-2xl font-light leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
            Manipulators and Narcissistic Abusers&nbsp;:{" "}
            <span className="bg-gradient-to-r from-violet-400 via-rose-400 to-amber-300 bg-clip-text text-transparent">
              Recognizing Them through Astrology
            </span>
          </h2>

          <div className="mt-6 flex flex-wrap gap-2 text-sm text-white/70 sm:gap-3">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs backdrop-blur-md sm:px-4 sm:py-1.5 sm:text-sm">
              Intermediate read
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs backdrop-blur-md sm:px-4 sm:py-1.5 sm:text-sm">
              Astrological psychology
            </span>
            <span className="rounded-full border border-rose-400/20 bg-rose-500/10 px-3 py-1 text-xs text-rose-200 backdrop-blur-md sm:px-4 sm:py-1.5 sm:text-sm">
              Toxic relationships
            </span>
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-white/70 sm:mt-8 sm:text-base sm:leading-relaxed lg:text-lg">
            Astrology does not make a clinical diagnosis. But it offers a powerful
            light on the mechanisms of power, coercive hold and fascination that
            certain individuals exert over those around them. This article explores the
            planetary signatures of manipulative profiles, the targets they favor
            and the tools that the natal chart puts at our disposal to
            protect ourselves.
          </p>

          <div className="mt-6 border-t border-white/5 pt-5 sm:mt-8 sm:pt-6">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      {/* ── Stats ── */}
      <section className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4" aria-label="Key points">
        <Stat label="Key planet" value="Pluto" />
        <Stat label="Accomplice planet" value="Neptune" />
        <Stat label="Hunting ground" value="Houses VII &amp; VIII" />
        <Stat label="Shield" value="Saturn &amp; Moon" />
      </section>

      {/* ── Définition (Featured Snippet) ── */}
      <section className="rounded-2xl border border-red-400/25 bg-red-400/5 p-5 sm:p-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-red-400 mb-3">Definition</p>
        <p className="text-sm leading-relaxed text-white/80 md:text-base">
          <strong>Astrology and narcissistic manipulators</strong>: the natal chart makes it possible to identify certain planetary configurations (Pluto-Moon, dissonant Neptune, <Link href="/planetes/pluton" className="text-red-300 underline decoration-red-300/30 underline-offset-2 transition-colors hover:text-red-200">Pluto</Link> in <Link href="/maisons/maison-7" className="text-red-300 underline decoration-red-300/30 underline-offset-2 transition-colors hover:text-red-200">house VII</Link>) that signal a vulnerability to coercive hold or, conversely, manipulative tendencies. Astrology accuses no one, but it illuminates relational dynamics.
        </p>
      </section>

      {/* ── APP intro ── */}
      <p className="text-sm leading-relaxed text-white/80 md:text-base">
        Coming out of a toxic relationship and wondering whether your <strong>natal chart</strong> could have warned you? <strong>Narcissistic abusers in astrology</strong> leave identifiable planetary signatures: Pluto-Moon configurations, dissonant Neptune, aspects of domination. This guide analyzes the astrological indicators of coercive hold, vulnerable profiles and the tools of protection your chart contains.
      </p>

      {/* ================================================================ */}
      {/*  PARTIE 1 — COMPRENDRE                                          */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>Astrology and manipulation: why the natal chart accuses no one</H2>

        <Card title="A compass, not a verdict">
          <p>
            It is essential to set a clear framework from the outset. Astrology is a symbolic tool for self-knowledge and for observing relational dynamics. It has neither the pretension nor the legitimacy to replace a psychiatric or psychological diagnosis. A natal chart does not turn an individual into a &laquo;&nbsp;narcissistic abuser&nbsp;&raquo; &mdash; that term designates a personality disorder recognized by psychiatry, and only a mental health professional is qualified to make that diagnosis.
          </p>
          <p>
            That said, astrology brings to light <strong className="text-white/90">tendencies</strong>, <strong className="text-white/90">potentials</strong> and <strong className="text-white/90">energetic patterns</strong> which, when they are not made conscious, can express themselves in destructive forms. That is precisely where its value lies: it offers a reading grid for recognizing the mechanisms before they wreak havoc.
          </p>
          <p>
            The aim of this article is not to single out culprits among the signs of the zodiac, but to understand the planetary configurations that foster manipulative behaviors &mdash; and above all, to identify in your own chart the zones of vulnerability that could make you sensitive to this type of personality.
          </p>
        </Card>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTIE 2 — LES PLANÈTES DE L'EMPRISE                          */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>Which planets reveal a manipulative tendency?</H2>

        <Card title="Pluto: the Master of invisible Power" subtitle="The planet of transformation... or of destruction">
          <p>
            Pluto is the key planet when approaching the subject of manipulation. Ruler of Scorpio, governor of the 8th house (symbolic death, crises, emotional inheritances, deep sexuality), Pluto embodies power in its most raw form.
          </p>
          <p>
            In its high expression, Pluto is the capacity for inner transformation, resilience, rebirth after the ordeal. It is the phoenix rising from its ashes. But in its dark expression, Pluto becomes an obsession with control, psychological domination, emotional blackmail and a fascination with power over others.
          </p>
          <p>
            A strongly aspected Pluto in a natal chart &mdash; in conjunction with the Sun, the Moon, Venus or the Ascendant &mdash; confers an undeniable magnetic intensity. The person attracts, fascinates, hypnotizes. This power of fascination is precisely the manipulator&rsquo;s primary tool. The Plutonian gaze is penetrating, the intuition surgical: it instinctively detects the other&rsquo;s flaws and knows exactly where to press to get what it wants.
          </p>
          <p>
            The hard aspects of Pluto (square, opposition) to the luminaries or to Venus indicate a problematic handling of power in intimate relationships. The native may swing between two poles: controlling the other or being controlled by them. This is the terrain of coercive hold.
          </p>
        </Card>

        <Card title="Neptune: the Great Illusionist" subtitle="The art of blurring reality">
          <p>
            If Pluto controls, Neptune bewitches. Ruler of Pisces and of the 12th house, Neptune reigns over the imagination, illusion, the dissolution of boundaries and sacrifice. In its harmonious expression, Neptune is universal compassion, art, spirituality, poetry. But in its shadow, Neptune is the lie disguised as a dream, deliberate confusion, cosmic gaslighting.
          </p>
          <p>
            The Neptunian manipulator does not operate by force. They seduce through haze. They create a parallel world where the victim loses their bearings: &laquo;&nbsp;You dreamed it&nbsp;&raquo;, &laquo;&nbsp;You&rsquo;re imagining things&nbsp;&raquo;, &laquo;&nbsp;That&rsquo;s not what I said&nbsp;&raquo;. All these phrases are Neptunian signatures. The victim ends up doubting their own perception of reality.
          </p>
          <p>
            A Neptune in hard aspect to the Sun, to Mercury or to the Moon in the manipulator&rsquo;s chart signals a natural capacity to alter the truth without even realizing it sometimes &mdash; so internalized is the Neptunian haze. The lie becomes second nature, a reflex of emotional survival that turns against those around them.
          </p>
        </Card>

        <Card title="Lilith: the Transgression of Boundaries" subtitle="The point of absolute rebellion">
          <p>
            Lilith (the black Moon) is not a planet but a fictitious point of the natal chart. It represents what one refuses to submit, the zone of absolute rebellion, raw non-negotiable desire. Well lived, Lilith is the assertion of self beyond conventions. Poorly lived, it is the systematic transgression of others&rsquo; boundaries.
          </p>
          <p>
            A Lilith conjunct the Sun, Mars or Pluto considerably reinforces the mechanisms of domination. The native may exert a murky, unsettling seduction that mixes attraction and unease &mdash; a frequent signature among the profiles labeled &laquo;&nbsp;toxic&nbsp;&raquo; in everyday language.
          </p>
        </Card>

        <Card title="Afflicted Mars: Violence as a Tool" subtitle="When action turns into aggression">
          <p>
            Mars, in its healthy expression, is courage, initiative, the ability to defend one&rsquo;s boundaries. But a Mars in very hard aspects (square or opposition to Pluto, square to Saturn, conjunction to Lilith) can produce a cold, calculated aggression, a verbal or psychological violence used as an instrument of control.
          </p>
          <p>
            The Mars-Pluto combination in tension is particularly telling. It confers a will to power which, if it is not channeled (sport, enterprise, commitment), turns against loved ones in the form of domination, intimidation or cold and devastating rage.
          </p>
        </Card>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTIE 3 — LES ASPECTS RÉVÉLATEURS                             */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>Planetary aspects and coercive hold: the configurations to watch</H2>

        <Card title="Table of aspects to watch">
          <div className="overflow-hidden rounded-xl border border-white/10">
            <div className="hidden border-b border-white/15 bg-white/[0.04] md:grid md:grid-cols-3">
              <div className="p-4 text-xs font-semibold uppercase tracking-widest text-white/60">Aspect</div>
              <div className="p-4 text-xs font-semibold uppercase tracking-widest text-white/60">Dynamic</div>
              <div className="p-4 text-xs font-semibold uppercase tracking-widest text-white/60">Dark expression</div>
            </div>
            <TableRow
              title="Pluto &#9744; Sun"
              effect="Power struggle with the deep identity"
              reading="Outsized ego, need for absolute control, inability to share power"
            />
            <TableRow
              title="Pluto &#9744; Moon"
              effect="Emotional control, hold over the intimate"
              reading="Emotional manipulation, sentimental blackmail, devouring jealousy"
            />
            <TableRow
              title="Pluto &#9744; Venus"
              effect="Obsessional passion, possession"
              reading="Toxic love, sexuality used as a weapon, destruction of the other&rsquo;s self-esteem"
            />
            <TableRow
              title="Neptune &#9744; Mercury"
              effect="Scrambling of communication"
              reading="Chronic lying, double talk, gaslighting"
            />
            <TableRow
              title="Neptune &#9744; Sun"
              effect="Blurry identity, permanent mask"
              reading="Mythomania, constructed false-self, inability to be authentic"
            />
            <TableRow
              title="Mars &#9744; Pluto"
              effect="Extreme will to power"
              reading="Cold psychological violence, intimidation, need to crush the other"
            />
            <TableRow
              title="Lilith conj. Sun"
              effect="Absolute identity rebellion"
              reading="Predatory seduction, transgression of boundaries, refusal of any relational rule"
            />
          </div>

          <p className="mt-4 text-xs italic text-white/50 sm:text-sm">
            &#9744; = square or opposition. A single aspect is never enough to conclude. It is the repetition of the &laquo;&nbsp;power-control-illusion&nbsp;&raquo; theme across several points of the chart that creates the pattern.
          </p>
        </Card>

        <Callout tone="warn" title="Caution: an aspect ≠ a diagnosis">
          <p>
            Having a Pluto-Sun square does not make you a narcissistic abuser. Millions of people carry this aspect and live perfectly healthy lives. The expression of an aspect depends on <strong className="text-white/90">upbringing</strong>, <strong className="text-white/90">free will</strong>, <strong className="text-white/90">inner work</strong> and the native&rsquo;s <strong className="text-white/90">level of awareness</strong>. Astrology shows the potential, not the inevitability.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTIE 4 — LES MAISONS IMPLIQUÉES                             */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>In which astrological houses does coercive hold play out?</H2>

        <Card title="House VII: the Mirror of the Other">
          <p>
            House VII is the house of partnerships, associations and the couple. It is the terrain of the relationship to the other par excellence. When Pluto transits or is found natally in house VII, the relational dynamic is intense, passionate, often marked by power games.
          </p>
          <p>
            A Pluto in VII can indicate a native who systematically attracts dominant or manipulative partners &mdash; or, in the projected version, a native who himself exerts a hold over his partners without being aware of it. House VII is a mirror: what one sees in the other is often what one refuses to see in oneself.
          </p>
          <p>
            Neptune in house VII produces another kind of danger: the idealization of the partner. The native projects a dreamed-up image onto the other, refuses to see the warning signals, excuses unacceptable behaviors in the name of &laquo;&nbsp;unconditional love&nbsp;&raquo;. It is the ideal terrain for a manipulator.
          </p>
        </Card>

        <Card title="House VIII: the Arena of intimate Crises">
          <p>
            House VIII is the domain of symbolic death, deep transformations, sexuality, other people&rsquo;s money and psychological inheritances. It is a water house, deep and often unconscious.
          </p>
          <p>
            A planetary concentration in house VIII (especially involving Pluto, Mars or Neptune) signals intense relational dynamics where power, sexuality and money intertwine. The manipulator with a powerful house VIII will use these three levers &mdash; often simultaneously &mdash; to establish their hold.
          </p>
        </Card>

        <Card title="House XII: the hidden Enemies">
          <p>
            House XII is traditionally called the &laquo;&nbsp;house of hidden enemies&nbsp;&raquo;. It represents the collective unconscious, karma, self-sabotage and everything that operates in the shadows. A loaded house XII (several planets) in the chart of an abuse victim can indicate a vulnerability to invisible enemies, muffled betrayals and emotional traps.
          </p>
          <p>
            Conversely, a manipulator with strong planets in XII excels in the art of operating behind the scenes, pulling the strings without ever appearing directly, denying all responsibility by invoking circumstances or the other&rsquo;s emotions.
          </p>
        </Card>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTIE 5 — LES SIGNES ET LE PN                                */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>Which Sun signs have manipulative tendencies?</H2>

        <Card title="An indispensable preamble">
          <p>
            Let us say it forcefully: <strong className="text-white/90">no sign of the zodiac produces narcissistic abusers</strong>. The Sun sign alone represents only a fraction of the natal chart. It is the aspects, the planetary emphases and the native&rsquo;s lived experience that determine the expression of a potential.
          </p>
          <p>
            That said, certain signs, <em>when the planets described above are afflicted</em>, present characteristic modes of operation that are worth knowing in order to recognize them better.
          </p>
        </Card>

        <Card title="The modes of operation by element">
          <p className="text-white/60 italic">
            Reminder: this is about the dark expression of each element, not its general expression.
          </p>

          <div className="mt-4 space-y-5">
            <div>
              <p className="font-serif text-lg text-rose-300">Fire <span className="text-sm text-white/40">(Aries, Leo, Sagittarius)</span></p>
              <p className="mt-1">
                The Fire manipulator operates through <strong className="text-white/90">brilliance</strong>. They impose their version of reality through the force of their personality, through spectacular rages or through a charisma so dazzling that you end up doubting your own perception. An afflicted Leo can develop a flamboyant narcissism: the world is a stage and others are only extras at the service of their glory.
              </p>
            </div>

            <div>
              <p className="font-serif text-lg text-amber-300">Earth <span className="text-sm text-white/40">(Taurus, Virgo, Capricorn)</span></p>
              <p className="mt-1">
                The Earth manipulator operates through <strong className="text-white/90">material control</strong>. Money, housing, practical resources become levers of hold. An afflicted Capricorn can exert a cold, methodical, almost administrative domination, where the other is progressively isolated and made dependent. The dark Taurus can develop an absolute possessiveness: the other becomes an object, a property.
              </p>
            </div>

            <div>
              <p className="font-serif text-lg text-sky-300">Air <span className="text-sm text-white/40">(Gemini, Libra, Aquarius)</span></p>
              <p className="mt-1">
                The Air manipulator operates through <strong className="text-white/90">words</strong>. They excel in double talk, rhetoric, the rewriting of history. An afflicted Gemini can switch from one mask to another with disconcerting ease, charming each interlocutor differently. The dark Libra uses the appearance of harmony as a trap: everything seems perfect on the surface while the hold takes root deep down.
              </p>
            </div>

            <div>
              <p className="font-serif text-lg text-emerald-300">Water <span className="text-sm text-white/40">(Cancer, Scorpio, Pisces)</span></p>
              <p className="mt-1">
                The Water manipulator operates through <strong className="text-white/90">emotion</strong>. They exploit guilt, pity, emotional debt. The afflicted Scorpio is the most feared: their instinctive knowledge of the human soul allows them to touch the weak points with surgical precision. The dark Cancer uses the victim within themselves to reverse the roles: they are the one suffering, you are the one who is guilty. The afflicted Pisces drowns the other in an emotional fog where nothing is clear anymore.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTIE 6 — LES PROFILS CIBLÉS                                 */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>Which astrological profiles attract narcissistic abusers?</H2>

        <Card title="The manipulator&rsquo;s hunting ground" subtitle="The energy they feed on">
          <p>
            The narcissistic abuser does not choose their victims at random. They are instinctively drawn to the personalities who possess what they cruelly lack: <strong className="text-white/90">emotional light</strong>, <strong className="text-white/90">authentic empathy</strong>, <strong className="text-white/90">natural generosity</strong>. In astrological terms, they seek an inexhaustible source of emotional energy &mdash; someone who will give without counting, forgive endlessly and doubt themselves before doubting the other.
          </p>
          <p>
            Here are the most frequently targeted astrological profiles:
          </p>
        </Card>

        <div className="grid gap-3 sm:grid-cols-2">
          <SignCard
            sign="Moon / Cancer emphasis"
            why="Natural empathy, need to nurture the other, easy guilt, difficulty setting boundaries. The Moon seeks emotional fusion &mdash; the abuser turns it into a trap."
            tone="sky"
          />
          <SignCard
            sign="Neptune / Pisces emphasis"
            why="Bottomless compassion, tendency toward sacrifice, idealization of the partner, blurred perception of boundaries. Neptune wants to save the other &mdash; the abuser presents themselves as a soul in distress."
            tone="violet"
          />
          <SignCard
            sign="Venus in Pisces / in XII"
            why="Sacrificial love, absolute romanticism, the belief that love can heal everything. Venus in exaltation gives everything unconditionally &mdash; the abuser takes everything without giving back."
            tone="rose"
          />
          <SignCard
            sign="Sun or Moon in house XII"
            why="Vulnerability to hidden enemies, tendency toward self-sabotage, difficulty seeing oneself clearly. The native may not see the hold taking root."
            tone="amber"
          />
          <SignCard
            sign="Venus / Libra emphasis"
            why="Need for harmony at all costs, horror of conflict, tendency to give in to preserve the peace. Libra would rather bend than break &mdash; the abuser exploits this fear of rupture."
            tone="emerald"
          />
          <SignCard
            sign="Jupiter in aspect to Venus"
            why="Boundless generosity, faith in the other, optimism that prevents seeing the warning signals. Jupiter amplifies benevolence &mdash; the abuser feeds on it."
            tone="amber"
          />
        </div>

        <Callout tone="note" title="A sensitive profile is not a weak profile">
          <p>
            Being empathetic, generous or dreamy is not a flaw. These are magnificent qualities that make you a deeply human being. The problem is never sensitivity &mdash; it is the <strong className="text-white/90">absence of boundaries</strong>. Astrology helps you precisely to identify where to reinforce those boundaries in your chart.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTIE 7 — LES TRANSITS DÉCLENCHEURS                          */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>Planetary transits and coercive hold: when the sky makes you fragile</H2>

        <Card title="Periods of vulnerability">
          <p>
            Even a solidly built natal chart can go through periods of fragility. Planetary transits create temporary windows where natural defenses lower. To know these periods is to be able to anticipate and redouble vigilance.
          </p>

          <ul className="mt-3 space-y-3">
            <li>
              <strong className="text-violet-300">Transit of Pluto over the natal Moon:</strong> a period of deep emotional upheaval. The native unconsciously seeks transformation through the other &mdash; the ideal terrain for a toxic encounter that promises rebirth.
            </li>
            <li>
              <strong className="text-sky-300">Transit of Neptune over the natal Venus:</strong> romantic discernment is at its lowest. The native idealizes, projects, refuses to see reality. It is often under this transit that one falls madly in love with an illusion.
            </li>
            <li>
              <strong className="text-amber-300">Transit of Saturn in house VII:</strong> a period of loneliness, of painful relational reckoning. The fear of being alone can push one to accept any partner, including a manipulator.
            </li>
            <li>
              <strong className="text-rose-300">Transit of Pluto in house VII or VIII:</strong> the call toward intense, transformative relationships. The danger is to confuse intensity with love, passion with coercive hold.
            </li>
            <li>
              <strong className="text-emerald-300">Eclipse on the I-VII axis:</strong> eclipses on the relational axis bring karmic encounters, abrupt closings and openings. It is a pivotal moment where vigilance is called for.
            </li>
          </ul>
        </Card>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTIE 8 — SE PROTÉGER                                        */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>How to protect yourself from a manipulator through astrology</H2>

        <Card title="Saturn: the Guardian of Boundaries" subtitle="Your best ally against coercive hold">
          <p>
            If Pluto is the planet of coercive hold, <strong className="text-white/90">Saturn is the planet of protection</strong>. Saturn embodies the limit, the structure, the framework, the firm and definitive &laquo;&nbsp;no&nbsp;&raquo;. A well-aspected Saturn in the chart &mdash; especially in connection with the Moon, Venus or the Ascendant &mdash; confers a natural ability to set healthy boundaries.
          </p>
          <p>
            To reinforce one&rsquo;s Saturn is to learn to say no without guilt, to observe before committing, to require reciprocity as a non-negotiable condition of a relationship. In practical astrology, this means knowing the position of Saturn in one&rsquo;s chart and consciously cultivating its qualities: discernment, patience, healthy demandingness.
          </p>
        </Card>

        <Card title="Reinforcing your Moon" subtitle="The emotional center">
          <p>
            The Moon represents our emotional vulnerability, our inner child, our need for security. A fragile Moon (Moon in Capricorn, in XII, square to Pluto or to Saturn) is a privileged entry point for the manipulator, because it indicates a need for love often tied to old wounds.
          </p>
          <p>
            To reinforce one&rsquo;s Moon is to take care of one&rsquo;s emotional balance <em>before</em> entrusting it to a partner. It is to build a safe inner space that does not depend on the other&rsquo;s validation. Concretely, this goes through therapy, meditation, work on family wounds &mdash; and through a clear awareness of the position and aspects of one&rsquo;s natal Moon.
          </p>
        </Card>

        <Card title="The Warning Signals in a Synastry">
          <p>
            In synastry (comparison of two charts), certain planetary contacts should awaken vigilance:
          </p>
          <ul className="mt-3 space-y-2">
            <li><strong className="text-white/90">One person&rsquo;s Pluto conjunct the other&rsquo;s Venus or Moon:</strong> magnetic fascination, risk of emotional hold. The attraction is irresistible but the balance of power is uneven.</li>
            <li><strong className="text-white/90">One person&rsquo;s Neptune on the other&rsquo;s Sun:</strong> massive idealization. One bewitches, the other dissolves. The relationship may seem magical at first then become confusing and exhausting.</li>
            <li><strong className="text-white/90">One person&rsquo;s Lilith on the other&rsquo;s Mars:</strong> powerful sexual tension, a domination-submission dynamic that can escape conscious control.</li>
            <li><strong className="text-white/90">One person&rsquo;s Saturn on the other&rsquo;s Moon:</strong> if Saturn is badly aspected, the relationship can become an emotional straitjacket where one stifles the other under the guise of &laquo;&nbsp;protection&nbsp;&raquo;.</li>
          </ul>
          <p>
            These contacts do not condemn the relationship. But they require an acute awareness of the dynamics at play and an open communication about the balance of power.
          </p>
        </Card>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTIE 9 — LE CYCLE DE L'EMPRISE                              */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>The 4 phases of narcissistic hold seen through astrology</H2>

        <Card title="The three planetary phases">
          <div className="space-y-5">
            <div>
              <p className="font-serif text-lg text-violet-300">Phase 1 &mdash; The Seduction (Neptune)</p>
              <p className="mt-1">
                The cycle always begins with a Neptunian phase. The manipulator creates an ideal world, a cocoon where everything seems perfect. This is love bombing: excessive compliments, outsized attention, grandiose promises. The victim is overwhelmed by a tsunami of positive emotions and loses their usual bearings. Neptune dissolves the boundaries: one gives oneself entirely, one merges, one forgets where the &laquo;&nbsp;I&nbsp;&raquo; ends and where the &laquo;&nbsp;we&nbsp;&raquo; begins.
              </p>
            </div>

            <div>
              <p className="font-serif text-lg text-rose-300">Phase 2 &mdash; The Destabilization (Pluto)</p>
              <p className="mt-1">
                Once emotional dependency is established, Pluto enters the scene. The mask falls progressively. Criticisms appear, subtle at first, then more and more frequent. Punitive silence alternates with cold rages. The victim finds themselves in permanent hypervigilance, desperately seeking to recover the &laquo;&nbsp;good&nbsp;&raquo; partner of phase 1. This is the Plutonian bite: control takes root through the fear of losing the promised love.
              </p>
            </div>

            <div>
              <p className="font-serif text-lg text-amber-300">Phase 3 &mdash; Destruction / Rebirth (Mars-Pluto)</p>
              <p className="mt-1">
                The final phase is Mars-Plutonian. The hold reaches its peak: social isolation, destruction of self-esteem, psychological violence (sometimes physical). The victim no longer recognizes themselves. But it is also there &mdash; a Plutonian paradox &mdash; that rebirth can arise. The breaking point is often triggered by a major transit (Uranus, Pluto or an eclipse) that breaks the cycle and frees the native from the hold.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTIE 10 — GUÉRIR                                            */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>After the hold: rebuilding and resilience in the natal chart</H2>

        <Card title="The transits of liberation">
          <p>
            After the ordeal of a toxic relationship, the natal chart also holds the keys to healing. Certain transits facilitate the rebuilding:
          </p>
          <ul className="mt-3 space-y-2">
            <li><strong className="text-emerald-300">Transit of Jupiter over the Moon or the Ascendant:</strong> emotional renewal, regained confidence, a feeling of expansion and protection.</li>
            <li><strong className="text-emerald-300">Transit of Saturn trine Venus or Moon:</strong> a renewed capacity to structure one&rsquo;s emotions, to choose with discernment. Boundaries become healthy and natural.</li>
            <li><strong className="text-emerald-300">Transit of Uranus over Venus or the Ascendant:</strong> sudden liberation, an electrifying realization. The native rediscovers themselves, dares independence, breaks definitively with the old patterns.</li>
            <li><strong className="text-emerald-300">Transit of Pluto sextile or trine the Sun:</strong> a deep but constructive transformation. The native integrates the lived experience and comes out of it stronger, more lucid, more anchored in their identity.</li>
          </ul>
        </Card>

        <Card title="Chiron: the Wound that heals" subtitle="The wounded healer of the natal chart">
          <p>
            Chiron, the asteroid of the &laquo;&nbsp;wounded healer&nbsp;&raquo;, plays an essential role in rebuilding after a coercive hold. Its position in the natal chart indicates the nature of the fundamental wound &mdash; and the path of healing.
          </p>
          <p>
            A Chiron in house VII signals that the wound runs through the relationship to the other. Healing will come precisely from the capacity to build healthy, balanced and respectful relationships &mdash; beginning with the relationship to oneself.
          </p>
          <p>
            A Chiron in house VIII indicates that the wound touches intimacy, shared power, deep trust. The rebuilding will go through therapeutic work on the patterns of emotional dependency and the reconquest of one&rsquo;s own inner power.
          </p>
        </Card>

        <Callout tone="ok" title="You have the right to heal">
          <p>
            If you recognize yourself in these descriptions &mdash; whether as a victim or as a carrier of certain described aspects &mdash; know that awareness is the first step. Astrology condemns no one: it illuminates the mechanisms to better overcome them. If you are going through a situation of coercive hold, do not hesitate to consult a mental health professional.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* ── FAQ visible ── */}
      <section className="space-y-6">
        <H2>Frequently asked questions: astrology and narcissistic manipulation</H2>

        <Card title="Can you see a narcissistic abuser in a natal chart?">
          <p>
            Astrology does not diagnose a psychiatric disorder. However, certain planetary configurations &mdash; notably Pluto, Neptune and Lilith in hard aspects to the luminaries &mdash; signal manipulative tendencies, an excessive need for control or difficulty respecting other people&rsquo;s boundaries.
          </p>
        </Card>

        <Card title="Which planets are linked to manipulation in astrology?">
          <p>
            <Link href="/planetes/pluton" className="text-violet-300 underline decoration-violet-300/30 underline-offset-2 transition-colors hover:text-violet-200">Pluto</Link> (power, control, coercive hold), Neptune (illusion, lies, confusion) and to a lesser extent Lilith (transgression of boundaries) are the main markers. An afflicted Mars can add a dimension of aggression and domination.
          </p>
        </Card>

        <Card title="Which astrological profiles attract narcissistic abusers?">
          <p>
            Profiles with a strong Neptune or Moon emphasis (empathy, receptivity, sacrifice) as well as Venus or Sun in water signs or in Pisces are particularly targeted. The abuser seeks a source of emotional energy &mdash; they are drawn to luminous, empathetic and generous personalities.
          </p>
        </Card>

        <Card title="Can astrology protect you from a manipulator?">
          <p>
            Astrology is a tool of awareness, not a magic shield. By identifying in one&rsquo;s own chart the zones of vulnerability (strong Neptune, fragile Moon, loaded house XII) and the triggering transits, one can anticipate the periods of emotional fragility and reinforce one&rsquo;s boundaries.
          </p>
        </Card>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTIE 11 — CONCLUSION                                        */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>The natal chart as a tool of vigilance against manipulators</H2>

        <Card title="To know your chart is to protect yourself">
          <p>
            Astrology is not a weapon of denunciation. It is a mirror that reveals our luminous potentials as much as our shadow zones. To understand the planetary signatures of manipulation is to give oneself the means to recognize them &mdash; in the other, but also in oneself.
          </p>
          <p>
            Knowing the position of Pluto, Neptune and Lilith in your natal chart, knowing where your Moon is and what state it is in, understanding the strength of your Saturn and of your natural boundaries: all of this constitutes a form of concrete astrological protection.
          </p>
          <p>
            The narcissistic abuser thrives in unconsciousness. They exploit what you do not see in yourself. Astrology, by illuminating these blind spots, considerably reduces their playing field.
          </p>
          <p>
            Stay luminous. Stay empathetic. But stay lucid. Your natal chart is your most faithful ally in this quest for balance between openness and protection.
          </p>
        </Card>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  Maillage interne — Audit 31/05/2026 (R3)                       */}
      {/*  Renforce les liens contextuels vers les hubs cités dans l'article */}
      {/* ================================================================ */}
      <section className="space-y-6">
        <H2>To go further: the astrological pillars of this article</H2>
        <Card title="Planets at play in coercive hold and manipulation">
          <ul className="space-y-2">
            <li>
              <Link href="/planetes/pluton" className="text-red-300 underline decoration-red-300/30 underline-offset-2 transition-colors hover:text-red-200">Pluto</Link>
              {" "}&mdash; power, control, magnetic fascination
            </li>
            <li>
              <Link href="/planetes/neptune" className="text-red-300 underline decoration-red-300/30 underline-offset-2 transition-colors hover:text-red-200">Neptune</Link>
              {" "}&mdash; illusion, blurring of boundaries, gaslighting
            </li>
            <li>
              <Link href="/planetes/mars" className="text-red-300 underline decoration-red-300/30 underline-offset-2 transition-colors hover:text-red-200">Mars</Link>
              {" "}&mdash; cold aggression, instrument of domination when afflicted
            </li>
            <li>
              <Link href="/planetes/lune" className="text-red-300 underline decoration-red-300/30 underline-offset-2 transition-colors hover:text-red-200">The Moon</Link>
              {" "}&mdash; receptivity, emotional vulnerability, a favored target
            </li>
            <li>
              <Link href="/planetes/saturne" className="text-red-300 underline decoration-red-300/30 underline-offset-2 transition-colors hover:text-red-200">Saturn</Link>
              {" "}&mdash; the capacity to set boundaries and protect oneself
            </li>
            <li>
              <Link href="/lilith" className="text-red-300 underline decoration-red-300/30 underline-offset-2 transition-colors hover:text-red-200">Lilith (Black Moon)</Link>
              {" "}&mdash; transgression, shadow parts, murky seduction
            </li>
          </ul>
        </Card>

        <Card title="Houses and axes to watch">
          <ul className="space-y-2">
            <li>
              <Link href="/maisons/maison-7" className="text-red-300 underline decoration-red-300/30 underline-offset-2 transition-colors hover:text-red-200">House VII</Link>
              {" "}&mdash; partners, associations, the &laquo;&nbsp;declared enemies&nbsp;&raquo;
            </li>
            <li>
              <Link href="/maisons/maison-8" className="text-red-300 underline decoration-red-300/30 underline-offset-2 transition-colors hover:text-red-200">House VIII</Link>
              {" "}&mdash; intimacy, shared power, deep transformations
            </li>
            <li>
              <Link href="/maisons/maison-12" className="text-red-300 underline decoration-red-300/30 underline-offset-2 transition-colors hover:text-red-200">House XII</Link>
              {" "}&mdash; hidden enemies, self-sabotage, forced retreat
            </li>
          </ul>
        </Card>

        <Card title="Complementary tools of analysis">
          <ul className="space-y-2">
            <li>
              <Link href="/aspects" className="text-red-300 underline decoration-red-300/30 underline-offset-2 transition-colors hover:text-red-200">The aspects</Link>
              {" "}&mdash; understanding the Pluto/Moon squares and oppositions
            </li>
            <li>
              <Link href="/synastrie" className="text-red-300 underline decoration-red-300/30 underline-offset-2 transition-colors hover:text-red-200">Synastry</Link>
              {" "}&mdash; reading the relational dynamic between two charts
            </li>
            <li>
              <Link href="/transits" className="text-red-300 underline decoration-red-300/30 underline-offset-2 transition-colors hover:text-red-200">The transits</Link>
              {" "}&mdash; spotting the periods of vulnerability
            </li>
            <li>
              <Link href="/blog/plutonien" className="text-red-300 underline decoration-red-300/30 underline-offset-2 transition-colors hover:text-red-200">Portrait of the Plutonian</Link>
              {" "}&mdash; detailed psychology of Pluto emphases
            </li>
          </ul>
        </Card>
      </section>
    </article>
  );
}
