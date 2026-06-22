import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import { AUTHOR_PERSON, PUBLISHER_ORG, SITE_URL } from "@/lib/seo";
import CoverImage from "@/public/images/blog/astrologie-medicale-renaissance.webp";

export const meta = {
  slug: "astrologie-medicale-renaissance",
  title: "Why Renaissance physicians read the sky",
  description:
    "A history of medical astrology: why Middle Ages and Renaissance physicians read the sky before treating patients. A historical account (not medical).",
  date: "2026-06-19",
  tags: [
    "astrologie médicale",
    "histoire",
    "Renaissance",
    "humeurs",
    "homme zodiacal",
    "tempéraments",
    "tradition",
    "Lune",
    "débutant",
  ],
  readingLevel: "débutant" as const,
  cover: "/images/blog/astrologie-medicale-renaissance.webp",
};

// -- COMPOSANTS D'INTERFACE PREMIUM --

function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" aria-hidden="true" />
      {children}
    </span>
  );
}

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-6 flex items-center font-serif text-3xl font-light text-white md:text-4xl">
      <span className="mr-4 block h-px w-8 bg-gradient-to-r from-amber-500/50 to-transparent" aria-hidden="true" />
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
      box: "border-sky-500/30 bg-sky-500/10 shadow-[0_0_30px_rgba(56,189,248,0.05)]",
      icon: "text-sky-400",
      svg: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  };

  const current = styles[tone];

  return (
    <aside aria-label={title} className={`relative overflow-hidden rounded-2xl border p-6 backdrop-blur-md ${current.box}`}>
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-current opacity-30 to-transparent" />
      <div className={`mb-3 flex items-center gap-3 font-serif text-lg font-medium ${current.icon}`}>
        {current.svg}
        <span>{title}</span>
      </div>
      <div className="space-y-3 text-sm leading-relaxed text-white/80 md:text-base">{children}</div>
    </aside>
  );
}

function Card({
  title,
  subtitle,
  children,
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
      <div className="mt-5 space-y-4 text-sm leading-relaxed text-white/80 md:text-base">{children}</div>
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

export default function AstrologieMedicaleRenaissancePost() {
  const glow = getGlowFromTags(meta.tags);

  return (
    <article className="mx-auto max-w-4xl space-y-12 pb-20 pt-8 text-white">
      {/* DONNÉES STRUCTURÉES (SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: meta.title,
              description: meta.description,
              image: `${SITE_URL}${meta.cover}`,
              datePublished: `${meta.date}T12:00:00Z`,
              dateModified: `${meta.date}T12:00:00Z`,
              author: AUTHOR_PERSON,
              publisher: PUBLISHER_ORG,
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `${SITE_URL}/blog/${meta.slug}`,
              },
              inLanguage: "en",
              keywords: meta.tags.join(", "),
              articleSection: "History of astrology",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Why did Renaissance physicians use astrology?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Because the medicine of the time rested on the theory of the humours inherited from Hippocrates and Galen. The sky was seen as a dial governing the balance of the humours: physicians therefore consulted the stars to choose the right moment for a bloodletting, a purge or a remedy.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the zodiac man (homo signorum)?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "It is an image, omnipresent in medieval and Renaissance almanacs, that links each sign of the zodiac to a part of the body, from Aries (the head) to Pisces (the feet). It served as a memory aid to avoid treating an organ while the Moon was passing through its sign.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is medical astrology a recognised medicine today?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. Medical astrology is a subject of history and symbolism, not a validated healing practice. No health decision should rely on it. In the case of a symptom or a medical question, you should consult a doctor.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      {/* IMAGE DE COUVERTURE */}
      <div className="relative w-full aspect-[7/3] rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(251,191,36,0.1)] bg-[#0f0f13] flex items-center justify-center">
        <Image src={CoverImage} alt="A Renaissance physician studying a chart of the sky and a zodiac man by candlelight" fill sizes="100vw" priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent z-10 pointer-events-none" />
      </div>

      {/* HERO */}
      <header className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
        <div
          className={`pointer-events-none absolute -right-24 -top-24 h-[500px] w-[500px] rounded-full opacity-30 mix-blend-screen blur-[100px] ${glow}`}
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-[80px]" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/50" aria-hidden="true" />

        <div className="relative z-10">
          <Kicker>History • Humours • Zodiac man</Kicker>

          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="font-serif text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl md:max-w-3xl">
              When to heal was first of all to read the sky
            </h2>

            <div className="flex flex-wrap gap-3 text-sm text-white/70">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">Historical account</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">Non-medical</span>
            </div>
          </div>

          <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            For nearly fifteen centuries, a European physician worthy of the name did not merely examine his patient: he also
            consulted a <strong className="font-medium text-amber-200">chart of the sky</strong>. Far from being a charlatan's whim,
            <strong className="font-medium text-white"> medical astrology</strong> was taught at university,
            woven into learned thought from Hippocrates to the Renaissance. Here is the story of this alliance between the sky and the
            body — and the reasons, perfectly logical for the time, that made it indispensable.
          </p>

          <div className="mt-8 pt-6 border-t border-white/5">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      {/* AVERTISSEMENT MÉDICAL */}
      <Callout tone="warn" title="Read this first: this is history, not health advice">
        <p>
          This article recounts a <strong className="text-white">practice of the past</strong> and its symbolism. Medical astrology
          is not a medicine: it diagnoses nothing, heals nothing and in no way replaces professional advice.
        </p>
        <p>
          In the case of a symptom, pain, doubt or a question about a treatment, <strong className="text-white">consult a
          doctor</strong>. Never modify any course of care on the basis of an astrological reading.
        </p>
      </Callout>

      {/* STATS RAPIDES */}
      <section className="grid gap-4 sm:grid-cols-3" aria-label="Key takeaways of the article">
        <Stat label="Framework of thought" value="The 4 humours" />
        <Stat label="Emblematic tool" value="The zodiac man" />
        <Stat label="Key star for timing" value="The Moon" />
      </section>

      {/* DEFINITION BOX */}
      <aside className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-6 leading-relaxed text-white/85">
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-amber-400">Definition</p>
        <p>
          <strong>Medical astrology</strong> (or <em>iatromathematics</em>) is the historical branch of astrology that
          linked the human body, the <Link href="/astrologie-medicale">temperaments and the humours</Link> to the movement of the planets and
          the signs. It structured Western medicine from Greek antiquity until the 17th century, before being
          set aside by experimental medicine.
        </p>
      </aside>

      {/* INTRO */}
      <p className="text-base leading-relaxed text-white/80 md:text-lg">
        To understand why a doctor in 1550 opened his ephemeris before his medical bag, you have to forget modern medicine and enter
        a vision of the world in which everything hangs together: the sky and the earth, the great universe and the little universe that is the human body.
        In this logic, reading the stars was not &quot;believing in your horoscope&quot; — it was applying the most
        serious science of its time.
      </p>

      {/* 1. LE CADRE DE PENSÉE */}
      <section className="space-y-6">
        <H2>1) The body as a &quot;little world&quot;</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          The master idea fits in a single word: <strong className="font-medium text-amber-200">correspondence</strong>. For the medieval
          and Renaissance scholars, the human being was a <em>microcosm</em>, a universe in miniature that reflected the great
          <em> macrocosm</em> of the sky. What played out up there inevitably resonated down here, in the flesh.
        </p>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          This intuition was not absurd to observation. The Sun governs the seasons, hence the fevers and the
          harvests. The <Link href="/planetes/lune">Moon</Link> governs the tides: why not, then, the liquid &quot;humours&quot;
          of the body? From this analogical reasoning is born a medicine in which the sky serves as a <strong>calendar</strong> and a{" "}
          <strong>compass</strong>.
        </p>
      </section>

      <Divider />

      {/* 2. LES HUMEURS */}
      <section className="space-y-6">
        <H2>2) The four humours, the foundation of all medicine</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Before astrology, there is a medical theory: that of the <strong className="font-medium text-amber-200">humours</strong>,
          inherited from <strong className="text-white">Hippocrates</strong> (5th century BC) and then codified by{" "}
          <strong className="text-white">Galen</strong> in the 2nd century. According to it, health is the balance of four fluids;
          illness, their imbalance. The whole work of the physician consisted in <em>restoring the balance</em>.
        </p>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
          <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.04] md:grid-cols-3">
            <div className="p-4 text-xs font-semibold uppercase tracking-widest text-white/50">Humour</div>
            <div className="p-4 text-xs font-semibold uppercase tracking-widest text-white/50">Temperament &amp; element</div>
            <div className="p-4 text-xs font-semibold uppercase tracking-widest text-white/50">Associated qualities</div>
          </div>
          <TableRow title="Blood" effect="Sanguine — Air" reading="Hot and moist; jovial, sociable, linked to Jupiter and to spring." />
          <TableRow title="Yellow bile" effect="Choleric — Fire" reading="Hot and dry; lively, irritable, linked to Mars and to summer." />
          <TableRow title="Black bile" effect="Melancholic — Earth" reading="Cold and dry; pensive, sombre, linked to Saturn and to autumn." />
          <TableRow title="Phlegm" effect="Phlegmatic — Water" reading="Cold and moist; calm, slow, linked to the Moon and to winter." />
        </div>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Here we recognise a vocabulary still alive today: to call someone &quot;sanguine&quot;,
          &quot;phlegmatic&quot; or &quot;melancholic&quot; is to speak of the humours without knowing it. It is precisely here that
          astrology plugs into medicine: each planet and each sign carries the same{" "}
          <strong className="text-white">qualities</strong> — hot/cold, dry/moist — as the humours. The sky becomes a grid for
          reading the patient's temperament.
        </p>

        <Callout tone="note" title="The bridge between sky and body">
          <p>
            If Saturn is &quot;cold and dry&quot; like black bile, then a chart marked by Saturn signals a{" "}
            <em>melancholic</em> terrain to watch. The reasoning was not &quot;magical&quot;: it applied to the sky the same
            physics of qualities that governed, it was believed, the body. The whole system was coherent from within.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* 3. L'HOMME ZODIACAL */}
      <section className="space-y-6">
        <H2>3) The zodiac man: the body mapped by the signs</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          The most famous image of this medicine is the <strong className="font-medium text-amber-200">&quot;zodiac
          man&quot;</strong> (<em>homo signorum</em>, the &quot;man of the signs&quot;). It is found everywhere: in
          illuminated manuscripts, such as the <em>Très Riches Heures du Duc de Berry</em>, and then in the printed almanacs sold by the thousand.
          The principle is simple and visual: each sign governs a region of the body, from top to bottom.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="From head to feet" subtitle="The zodiac laid over anatomy.">
            <p>
              <strong className="text-white">Aries</strong> rules the head, <strong className="text-white">Taurus</strong> the throat,{" "}
              <strong className="text-white">Gemini</strong> the arms and lungs, <strong className="text-white">Cancer</strong> the
              chest… and so on down to <strong className="text-white">Pisces</strong>, which rules the feet. The
              whole body was thus covered, sign after sign.
            </p>
          </Card>

          <Card title="A memo, not a decoration" subtitle="What this image really served for.">
            <p>
              The zodiac man was a <strong className="text-white">practical memory aid</strong>. The golden rule:
              intervene on a part of the body only when the <Link href="/planetes/lune">Moon</Link> was not passing through the sign
              that governs it. One avoided, for example, bleeding the arm when the Moon was in Gemini.
            </p>
          </Card>
        </div>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          This correspondence of signs and organs remains the backbone of the tradition. It is found, explained in detail, in the{" "}
          <Link href="/astrologie-medicale">complete dossier on medical astrology</Link>, alongside the temperaments and the
          houses known as &quot;the houses of health&quot;.
        </p>
      </section>

      <Divider />

      {/* 4. LE TIMING : LUNE, JOURS CRITIQUES, DÉCOMBITURE */}
      <section className="space-y-6">
        <H2>4) Choosing the right moment: the Moon and the &quot;critical days&quot;</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          The great concern of medical astrology was not so much the <em>what</em> as the <em>when</em>. Bloodletting, purge,
          administering a remedy, gathering plants: each act had its favourable moment, and the{" "}
          <strong className="font-medium text-amber-200">Moon</strong>, the swiftest of the heavenly bodies, was its great regulator.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="The critical days" subtitle="Inherited from Hippocrates, read in the sky.">
            <p>
              Hippocrates had already observed that fevers evolved in stages — the famous <strong className="text-white">critical
              days</strong>. The astrologer-physicians tied them to the lunar cycle: the Moon returning roughly every seven days
              to a major aspect, they saw in it the key to the phases of worsening or improvement.
            </p>
          </Card>

          <Card title="The decumbiture" subtitle="A chart for the moment one falls ill.">
            <p>
              A more technical practice, the <strong className="text-white">decumbiture</strong> consisted in drawing up a chart of the sky for
              the exact moment the patient took to his bed (or for the taking of a urine sample). In it one sought the prognosis: recovery,
              relapse, or a grave outcome. The English physician Nicholas Culpeper left, in the 17th century, detailed examples of it.
            </p>
          </Card>
        </div>

        <Callout tone="note" title="A medicine of the calendar">
          <p>
            We understand better the appeal of the system: unable to measure much, it offered the physician a{" "}
            <strong className="text-white">method</strong>, temporal landmarks and a common language with the patient. The sky played the
            role that protocols and tests play today.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* 5. POURQUOI ÇA A DURÉ — ET LA RENAISSANCE */}
      <section className="space-y-6">
        <H2>5) Why the Renaissance believed in it so strongly</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Far from retreating, medical astrology reached its <strong className="font-medium text-amber-200">apogee</strong> in the 15th and
          16th centuries. The printing press disseminated almanacs and bloodletting calendars on a large scale; the universities — Bologna, Paris,
          Montpellier — taught astrology to future physicians as a normal discipline of the curriculum.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Ficino and melancholy">
            <p>
              In Florence, <strong className="text-white">Marsilio Ficino</strong> wrote the <em>De vita</em>, a health manual for
              &quot;Saturnian&quot; intellectuals, seeking jovial and solar remedies for an excess of black bile.
            </p>
          </Card>
          <Card title="Paracelsus, the iconoclast">
            <p>
              <strong className="text-white">Paracelsus</strong> overturns Galen but keeps the sky: for him, the physician must know
              astronomy as much as the chemistry of remedies. The star and the mineral answer each other.
            </p>
          </Card>
          <Card title="A scholarly requirement">
            <p>
              Certain faculties required notions of astrology in order to practise. Consulting the sky was not marginal:
              it was the <strong className="text-white">norm</strong> of the learned physician.
            </p>
          </Card>
        </div>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Why this allegiance? Because the system was <strong>coherent, teachable and socially useful</strong>. It
          gave meaning to illness, reassured the sick, provided a prognosis and connected the body to a cosmic order shared by
          the whole culture of the time — theology, music, architecture included.
        </p>
      </section>

      <Divider />

      {/* 6. LE DÉCLIN ET CE QU'ON EN GARDE */}
      <section className="space-y-6">
        <H2>6) The decline — and what remains of it</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          From the 17th century onwards, everything changes. The <strong className="font-medium text-amber-200">experimental method</strong>, the
          discovery of the circulation of the blood by Harvey, then the rise of anatomy and chemistry render the theory of the
          humours progressively untenable. The sky ceases to be an instrument of healing to become an object of pure astronomy.
        </p>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          But the legacy is not entirely erased. It survives in the <strong>language</strong> (a
          &quot;lunatic&quot;, &quot;saturnine&quot;, &quot;jovial&quot; character), in the <strong>history of ideas</strong>, and in
          the symbolism that contemporary astrology continues to explore — not to heal, but to describe{" "}
          <em>temperaments</em> and psychological <em>terrains</em>.
        </p>

        <Callout tone="ok" title="What medical astrology can (and cannot) illuminate today">
          <p>
            <strong className="text-white">What it illuminates:</strong> a fascinating history, a vocabulary of the
            temperaments, a symbolic grid linking signs, planets and parts of the body.
          </p>
          <p>
            <strong className="text-white">What it does not do:</strong> diagnose, predict an illness or guide a
            treatment. For that, there is only one interlocutor — your doctor.
          </p>
        </Callout>
      </section>

      {/* RAPPEL FINAL */}
      <Callout tone="warn" title="Reminder">
        <p>
          This account is <strong className="text-white">historical and symbolic</strong>. It constitutes neither a diagnosis, nor medical
          advice. Any health question falls to a <strong className="text-white">health professional</strong>: when in
          doubt, consult a doctor.
        </p>
      </Callout>

      {/* POUR ALLER PLUS LOIN */}
      <footer className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md sm:p-12">
        <H3>To go further</H3>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Pill tone="yellow">Humours</Pill>
          <Pill tone="violet">Zodiac man</Pill>
          <Pill tone="sky">Temperaments</Pill>
          <Pill tone="orange">Tradition</Pill>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/astrologie-medicale"
            className="group relative inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-6 py-3 text-sm font-medium text-amber-100 backdrop-blur-md transition-all hover:border-amber-400/60 hover:bg-amber-400/20"
          >
            The complete dossier: medical astrology
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/blog/qu-est-ce-qu-un-theme-astral"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Understanding the natal chart
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="mt-12 grid gap-3 text-left sm:grid-cols-2 lg:grid-cols-3">
          <Link href="/astrologie-medicale" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Dossier</span>
            <span className="mt-1 block font-medium text-white/90">Medical astrology</span>
            <span className="mt-1 block text-xs text-white/60">Humours, temperaments, zodiac man</span>
          </Link>
          <Link href="/planetes/lune" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Planet</span>
            <span className="mt-1 block font-medium text-white/90">The Moon</span>
            <span className="mt-1 block text-xs text-white/60">The star of timing and of phlegm</span>
          </Link>
          <Link href="/planetes/saturne" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Planet</span>
            <span className="mt-1 block font-medium text-white/90">Saturn</span>
            <span className="mt-1 block text-xs text-white/60">The cold, the dry, melancholy</span>
          </Link>
          <Link href="/blog/saturnien" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Article</span>
            <span className="mt-1 block font-medium text-white/90">The Saturnian type</span>
            <span className="mt-1 block text-xs text-white/60">Melancholic temperament</span>
          </Link>
          <Link href="/blog/lunarien" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Article</span>
            <span className="mt-1 block font-medium text-white/90">The Lunarian type</span>
            <span className="mt-1 block text-xs text-white/60">Phlegmatic temperament</span>
          </Link>
          <Link href="/#zodiaque" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Reference</span>
            <span className="mt-1 block font-medium text-white/90">The 12 signs</span>
            <span className="mt-1 block text-xs text-white/60">From Aries (the head) to Pisces (the feet)</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}
