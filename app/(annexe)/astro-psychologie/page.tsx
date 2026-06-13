import type { Metadata } from "next";
import Link from "next/link";

import data from "../../../data/astro-psychologie.details.json";
import { absoluteUrl, AUTHOR_PERSON, PUBLISHER_ORG, SITE_URL } from "@/lib/seo";

/* ---------------- Types ---------------- */

type PsyData = typeof data;

const COURSE = data as PsyData;

export const metadata: Metadata = {
  title: "Astro-psychologie : le thème comme carte de la psyché",
  description:
    "Astro-psychologie : approche jungienne et humaniste de l'astrologie. Fonctions psychiques, typologie jungienne et 16 types (MBTI), maisons psychologiques, ombre et individuation. Cours complet !",
  alternates: { canonical: absoluteUrl("/astro-psychologie") },
  openGraph: {
    title: "Astro-psychologie : le thème comme carte de la psyché",
    description:
      "Astro-psychologie : approche jungienne et humaniste de l'astrologie. Fonctions psychiques, typologie jungienne et 16 types (MBTI), maisons psychologiques, ombre et individuation. Cours complet !",
    url: absoluteUrl("/astro-psychologie"),
    type: "article",
    siteName: "Astro Cours",
    locale: "fr_FR",
    images: [{ url: absoluteUrl("/og/cover.jpg"), width: 1200, height: 630, alt: "Astro Cours" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Astro-psychologie : le thème comme carte de la psyché",
    description:
      "Astro-psychologie : approche jungienne et humaniste de l'astrologie. Fonctions psychiques, typologie jungienne et 16 types (MBTI), maisons psychologiques, ombre et individuation. Cours complet !",
    images: [absoluteUrl("/og/cover.jpg")],
  },
};

const pill =
  "rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-text/90 hover:bg-white/10";
const cardBase = "rounded-3xl border bg-white/5 p-6 backdrop-blur";

/* Palette à classes littérales (Tailwind ne détecte pas les classes construites dynamiquement). */
type Accent = { card: string; chip: string; dot: string; bar: string };

const ACCENTS: Record<string, Accent> = {
  violet: {
    card: "border-violet-400/30 shadow-[0_0_0_1px_rgba(167,139,250,0.12)]",
    chip: "border-violet-400/30 bg-violet-400/10 text-violet-200",
    dot: "bg-violet-400",
    bar: "bg-violet-400/60",
  },
  fuchsia: {
    card: "border-fuchsia-400/30 shadow-[0_0_0_1px_rgba(232,121,249,0.12)]",
    chip: "border-fuchsia-400/30 bg-fuchsia-400/10 text-fuchsia-200",
    dot: "bg-fuchsia-400",
    bar: "bg-fuchsia-400/60",
  },
  emerald: {
    card: "border-emerald-400/30 shadow-[0_0_0_1px_rgba(52,211,153,0.12)]",
    chip: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
    dot: "bg-emerald-400",
    bar: "bg-emerald-400/60",
  },
  amber: {
    card: "border-amber-400/30 shadow-[0_0_0_1px_rgba(251,191,36,0.12)]",
    chip: "border-amber-400/30 bg-amber-400/10 text-amber-200",
    dot: "bg-amber-400",
    bar: "bg-amber-400/60",
  },
  orange: {
    card: "border-orange-400/30 shadow-[0_0_0_1px_rgba(251,146,60,0.12)]",
    chip: "border-orange-400/30 bg-orange-400/10 text-orange-200",
    dot: "bg-orange-400",
    bar: "bg-orange-400/60",
  },
  sky: {
    card: "border-sky-400/30 shadow-[0_0_0_1px_rgba(56,189,248,0.12)]",
    chip: "border-sky-400/30 bg-sky-400/10 text-sky-200",
    dot: "bg-sky-400",
    bar: "bg-sky-400/60",
  },
  indigo: {
    card: "border-indigo-400/30 shadow-[0_0_0_1px_rgba(129,140,248,0.12)]",
    chip: "border-indigo-400/30 bg-indigo-400/10 text-indigo-200",
    dot: "bg-indigo-400",
    bar: "bg-indigo-400/60",
  },
};

function accentOf(key: string): Accent {
  return ACCENTS[key] ?? ACCENTS.violet;
}

/* Couleur par élément et par groupe planétaire. */
const ELEMENT_COLOR: Record<string, string> = {
  Feu: "orange",
  Terre: "emerald",
  Air: "sky",
  Eau: "indigo",
};

const GROUPE_COLOR: Record<string, string> = {
  Luminaire: "amber",
  Personnelle: "fuchsia",
  Sociale: "emerald",
  Transpersonnelle: "violet",
  "Point sensible": "sky",
  "Axe d’évolution": "indigo",
};

function H2({ id, label, dot = "bg-white/60" }: { id: string; label: string; dot?: string }) {
  return (
    <h2 id={id} className="font-serif text-2xl sm:text-3xl">
      <span className={`mr-3 inline-block h-2.5 w-2.5 rounded-full ${dot}`} />
      {label}
    </h2>
  );
}

const ARTICLE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Astro-psychologie : le thème comme carte de la psyché",
  description:
    "Astro-psychologie : approche jungienne et humaniste de l'astrologie. Fonctions psychiques, typologie jungienne et 16 types (MBTI), maisons psychologiques, ombre et individuation.",
  inLanguage: "fr",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/astro-psychologie` },
  author: AUTHOR_PERSON,
  publisher: PUBLISHER_ORG,
  image: [`${SITE_URL}/og/cover.jpg`],
  datePublished: "2026-06-13T12:00:00Z",
  dateModified: "2026-06-13T12:00:00Z",
  articleSection: "Astrologie",
};

export default function AstroPsychologiePage() {
  const sections = [
    { id: "definition", label: "Définition" },
    { id: "origines", label: "Origines" },
    { id: "principes", label: "Principes" },
    { id: "concepts", label: "Concepts clés" },
    { id: "fonctions", label: "Planètes & psyché" },
    { id: "elements", label: "Typologie jungienne" },
    { id: "triade", label: "Triade" },
    { id: "lettres", label: "Les 4 lettres" },
    { id: "types16", label: "16 types (MBTI)" },
    { id: "aspects", label: "Aspects" },
    { id: "maisons-psy", label: "Maisons psy" },
    { id: "ombre", label: "Ombre & projection" },
    { id: "cycles", label: "Cycles de vie" },
    { id: "tradition", label: "Tradition vs psy" },
    { id: "pratique", label: "Pratique" },
    { id: "exemples", label: "Exemples" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <main id="main-content" className="mx-auto max-w-5xl px-6 pb-16 pt-10 text-text">
      {/* JSON-LD Article */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />
      {/* JSON-LD FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: COURSE.faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      {/* HERO */}
      <header className="mb-10 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5">
        <div className="p-7 sm:p-10">
          <p className="text-xs uppercase tracking-[0.18em] text-muted">{COURSE.hero.badge}</p>

          <h1 className="mt-3 font-serif text-4xl sm:text-5xl">{COURSE.hero.title}</h1>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-text/80">{COURSE.hero.subtitle}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {COURSE.hero.highlights.map((x) => (
              <span key={x} className={pill}>
                {x}
              </span>
            ))}
          </div>

          {/* Sommaire */}
          <nav aria-label="Sommaire" className="mt-7 flex flex-wrap gap-2">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className={pill}>
                {s.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="h-1 w-full bg-gradient-to-r from-fuchsia-400/35 via-violet-400/35 to-sky-400/35" />
      </header>

      {/* Encadré Définition SEO */}
      <div className="mt-8 rounded-2xl border border-fuchsia-400/20 bg-fuchsia-400/[0.04] px-6 py-5">
        <p className="text-sm font-semibold uppercase tracking-widest text-fuchsia-300/80">Définition</p>
        <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
          L’<strong>astro-psychologie</strong> lit le <Link href="/#planetes">thème astral</Link> comme une carte de la
          psyché : un portrait des dynamiques intérieures et des potentiels de croissance, plutôt qu’une prédiction.
        </p>
      </div>

      {/* Intro */}
      <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
        Et si le thème ne disait pas <em>ce qui va arriver</em>, mais <em>qui l’on est</em> ? L’
        <strong>astro-psychologie</strong> — héritière de Carl Jung, Dane Rudhyar et Liz Greene — déplace l’astrologie du
        terrain de la divination vers celui de la connaissance de soi. Les planètes y deviennent des fonctions psychiques,
        les aspects des dynamiques intérieures, et le thème, un chemin d’individuation.
      </p>

      {/* Définition */}
      <section id="definition" className="mb-10 scroll-mt-24">
        <H2 id="definition" label="Qu’est-ce que l’astro-psychologie ?" dot="bg-fuchsia-400" />

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className={`${cardBase} border border-violet-400/25 shadow-[0_0_0_1px_rgba(167,139,250,0.10)]`}>
            <p className="text-xs uppercase tracking-wide text-muted">Résumé</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {COURSE.definition.resume.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400/70" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${cardBase} border border-rose-400/25 shadow-[0_0_0_1px_rgba(251,113,133,0.10)]`}>
            <p className="text-xs uppercase tracking-wide text-muted">Ce que ce n’est pas</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {COURSE.definition.ceQueCeNestPas.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400/70" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Origines */}
      <section id="origines" className="mb-10 scroll-mt-24">
        <H2 id="origines" label="Origines : Jung, Rudhyar, Liz Greene" dot="bg-sky-400" />

        <div className="mt-4 space-y-3">
          {COURSE.origines.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {COURSE.origines.reperes.map((r) => (
            <div
              key={r.label}
              className={`${cardBase} border border-sky-400/25 shadow-[0_0_0_1px_rgba(56,189,248,0.10)]`}
            >
              <p className="font-serif text-xl">{r.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-text/85">{r.sens}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Principes */}
      <section id="principes" className="mb-10 scroll-mt-24">
        <H2 id="principes" label="Les principes clés" dot="bg-emerald-400" />

        <div className="mt-4 space-y-3">
          {COURSE.principes.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {COURSE.principes.items.map((r) => (
            <div key={r.label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-sm font-medium text-white/90">{r.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-text/80">{r.sens}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Concepts clés */}
      <section id="concepts" className="mb-10 scroll-mt-24">
        <H2 id="concepts" label="Les concepts jungiens essentiels" dot="bg-violet-400" />

        <div className="mt-4 space-y-3">
          {COURSE.concepts.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {COURSE.concepts.items.map((c) => (
            <div key={c.terme} className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-sm font-semibold text-white/90">{c.terme}</p>
              <p className="mt-2 text-sm leading-relaxed text-text/80">{c.def}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Planètes & psyché */}
      <section id="fonctions" className="mb-10 scroll-mt-24">
        <H2 id="fonctions" label="Les planètes comme fonctions psychiques" dot="bg-indigo-400" />

        <div className="mt-4 space-y-3">
          {COURSE.planetesFonctions.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {COURSE.planetesFonctions.table.map((p) => {
            const a = accentOf(GROUPE_COLOR[p.groupe] ?? "violet");
            return (
              <div key={p.astre} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-serif text-lg text-white/90">
                    <span className={`mr-2 inline-block h-2 w-2 rounded-full align-middle ${a.dot}`} />
                    {p.astre}
                  </p>
                  <span className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium ${a.chip}`}>
                    {p.groupe}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-text/80">{p.fonction}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Typologie jungienne / éléments */}
      <section id="elements" className="mb-10 scroll-mt-24">
        <H2 id="elements" label="Typologie jungienne : éléments & fonctions" dot="bg-amber-400" />

        <div className="mt-4 space-y-3">
          {COURSE.elementsFonctions.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {COURSE.elementsFonctions.items.map((el) => {
            const a = accentOf(ELEMENT_COLOR[el.element] ?? "violet");
            return (
              <article key={el.element} className={`${cardBase} border ${a.card}`}>
                <div className={`mb-4 h-1 w-full rounded-full ${a.bar}`} />
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-serif text-2xl">{el.element}</h3>
                  <span className={`rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide ${a.chip}`}>
                    {el.fonction}
                  </span>
                </div>
                <p className="mt-2 text-xs text-muted">{el.signes}</p>
                <p className="mt-3 text-sm leading-relaxed text-text/85">{el.sens}</p>
              </article>
            );
          })}
        </div>

        <p className="mt-4 max-w-3xl text-sm italic leading-relaxed text-white/70">{COURSE.elementsFonctions.note}</p>
      </section>

      {/* Triade */}
      <section id="triade" className="mb-10 scroll-mt-24">
        <H2 id="triade" label="La triade Soleil – Lune – Ascendant" dot="bg-fuchsia-400" />

        <div className="mt-4 space-y-3">
          {COURSE.triade.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {COURSE.triade.items.map((r) => (
            <div
              key={r.label}
              className={`${cardBase} border border-fuchsia-400/25 shadow-[0_0_0_1px_rgba(232,121,249,0.10)]`}
            >
              <p className="font-serif text-2xl">{r.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-text/85">{r.sens}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Les 4 lettres */}
      <section id="lettres" className="mb-10 scroll-mt-24">
        <H2 id="lettres" label="Les 4 lettres : décoder un type" dot="bg-rose-400" />

        <div className="mt-4 space-y-3">
          {COURSE.lettres.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {COURSE.lettres.axes.map((ax) => {
            const a = accentOf(ax.couleur);
            return (
              <article key={ax.paire} className={`${cardBase} border ${a.card}`}>
                <div className="flex items-center gap-3">
                  <span className={`rounded-lg border px-3 py-1 font-mono text-base font-bold tracking-widest ${a.chip}`}>
                    {ax.paire}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl leading-tight">{ax.titre}</h3>
                    <p className="text-xs text-muted">{ax.question}</p>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  {ax.poles.map((po) => (
                    <div key={po.lettre} className="flex gap-3 rounded-2xl border border-white/10 bg-black/20 p-3">
                      <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border font-mono text-sm font-bold ${a.chip}`}>
                        {po.lettre}
                      </span>
                      <p className="text-sm leading-relaxed text-text/85">
                        <span className="font-medium text-white/90">{po.nom}</span> — {po.sens}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-3 text-xs italic leading-relaxed text-white/65">↳ {ax.astro}</p>
              </article>
            );
          })}
        </div>

        <p className="mt-4 max-w-3xl text-sm italic leading-relaxed text-white/70">{COURSE.lettres.note}</p>
      </section>

      {/* 16 types (MBTI) */}
      <section id="types16" className="mb-10 scroll-mt-24">
        <H2 id="types16" label="Les 16 types (typologie jungienne / MBTI)" dot="bg-rose-400" />

        <div className="mt-4 space-y-3">
          {COURSE.types16.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-5 space-y-6">
          {COURSE.types16.familles.map((f) => {
            const a = accentOf(f.couleur);
            return (
              <div key={f.nom} className={`${cardBase} border ${a.card}`}>
                <div className={`mb-4 h-1 w-full rounded-full ${a.bar}`} />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-serif text-2xl">{f.nom}</h3>
                </div>
                <p className="mt-1 text-xs text-muted">{f.resonance}</p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {f.types.map((t) => (
                    <details key={t.code} className="group rounded-2xl border border-white/10 bg-black/20 p-4 open:bg-black/30">
                      <summary className="flex cursor-pointer list-none items-center gap-3 [&::-webkit-details-marker]:hidden">
                        <span className={`rounded-lg border px-2.5 py-1 font-mono text-xs font-bold tracking-wider ${a.chip}`}>
                          {t.code}
                        </span>
                        <p className="font-serif text-lg text-white/90">{t.surnom}</p>
                        <span className="ml-auto text-lg text-white/40 transition-transform group-open:rotate-45">+</span>
                      </summary>

                      <p className="mt-2 text-[11px] uppercase tracking-wide text-muted">{t.dominante}</p>
                      <p className="mt-2 text-sm leading-relaxed text-text/80">{t.trait}</p>

                      {/* Décodage des 4 lettres */}
                      <ul className="mt-3 space-y-1.5 border-t border-white/10 pt-3">
                        {t.code.split("").map((ch, i) => (
                          <li key={`${t.code}-${i}`} className="flex gap-2.5 text-xs leading-relaxed text-text/80">
                            <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border font-mono font-bold ${a.chip}`}>
                              {ch}
                            </span>
                            <span>{(COURSE.legende as Record<string, string>)[ch]}</span>
                          </li>
                        ))}
                      </ul>

                      <p className="mt-3 text-sm leading-relaxed text-white/85">{t.synthese}</p>
                      <p className="mt-2 text-xs italic leading-relaxed text-white/65">↳ {t.astro}</p>
                    </details>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-4 max-w-3xl text-sm italic leading-relaxed text-white/70">{COURSE.types16.note}</p>
      </section>

      {/* Aspects */}
      <section id="aspects" className="mb-10 scroll-mt-24">
        <H2 id="aspects" label="Les aspects comme dynamiques internes" dot="bg-sky-400" />

        <div className="mt-4 space-y-3">
          {COURSE.aspects.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {COURSE.aspects.items.map((r) => (
            <div key={r.label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-sm font-medium text-white/90">{r.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-text/80">{r.sens}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Maisons psychologiques */}
      <section id="maisons-psy" className="mb-10 scroll-mt-24">
        <H2 id="maisons-psy" label="Les maisons comme domaines d’expérience" dot="bg-teal-400" />

        <div className="mt-4 space-y-3">
          {COURSE.maisonsPsy.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {COURSE.maisonsPsy.items.map((m) => (
            <article
              key={m.maison}
              className={`${cardBase} border border-sky-400/25 shadow-[0_0_0_1px_rgba(56,189,248,0.10)]`}
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/30 font-serif text-sm text-white/90">
                  {m.maison}
                </span>
                <p className="text-sm font-medium text-white/90">Maison {m.maison}</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-text/85">{m.theme}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Ombre & projection */}
      <section id="ombre" className="mb-10 scroll-mt-24">
        <H2 id="ombre" label="Ombre, projection et individuation" dot="bg-violet-400" />

        <div className="mt-4 space-y-3">
          {COURSE.ombreProjection.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {COURSE.ombreProjection.items.map((r) => (
            <div
              key={r.label}
              className={`${cardBase} border border-fuchsia-400/25 shadow-[0_0_0_1px_rgba(232,121,249,0.10)]`}
            >
              <p className="font-serif text-xl">{r.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-text/85">{r.sens}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cycles de vie */}
      <section id="cycles" className="mb-10 scroll-mt-24">
        <H2 id="cycles" label="Les grands cycles de vie" dot="bg-amber-400" />

        <div className="mt-4 space-y-3">
          {COURSE.cyclesVie.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {COURSE.cyclesVie.items.map((c) => (
            <article
              key={c.nom}
              className={`${cardBase} border border-violet-400/25 shadow-[0_0_0_1px_rgba(167,139,250,0.10)]`}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-serif text-xl">{c.nom}</h3>
                <span className="shrink-0 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-text/85">
                  {c.age}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-text/85">{c.sens}</p>
            </article>
          ))}
        </div>

        <p className="mt-4 max-w-3xl text-sm italic leading-relaxed text-white/70">{COURSE.cyclesVie.note}</p>
      </section>

      {/* Tradition vs psy */}
      <section id="tradition" className="mb-10 scroll-mt-24">
        <H2 id="tradition" label="Astro-psychologie ou astrologie traditionnelle ?" dot="bg-emerald-400" />

        <div className="mt-4 space-y-3">
          {COURSE.traditionVsPsy.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {COURSE.traditionVsPsy.items.map((r) => (
            <div
              key={r.label}
              className={`${cardBase} border border-sky-400/25 shadow-[0_0_0_1px_rgba(56,189,248,0.10)]`}
            >
              <p className="font-serif text-xl">{r.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-text/85">{r.sens}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pratique */}
      <section id="pratique" className="mb-10 scroll-mt-24">
        <H2 id="pratique" label="Lire son thème : une trame en six temps" dot="bg-emerald-400" />

        <div className="mt-4 space-y-3">
          {COURSE.pratique.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className={`${cardBase} mt-4 border border-emerald-400/25 shadow-[0_0_0_1px_rgba(52,211,153,0.10)]`}>
          <p className="text-xs uppercase tracking-wide text-muted">Étapes</p>
          <ul className="mt-3 space-y-2 text-sm text-text/85">
            {COURSE.pratique.etapes.map((x) => (
              <li key={x} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/70" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Exemples */}
      <section id="exemples" className="mb-10 scroll-mt-24">
        <H2 id="exemples" label="Exemples de lecture psychologique" dot="bg-violet-400" />

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {COURSE.exemplesLecture.map((e) => (
            <article
              key={e.titre}
              className={`${cardBase} border border-violet-400/25 shadow-[0_0_0_1px_rgba(167,139,250,0.10)]`}
            >
              <h3 className="font-serif text-2xl">{e.titre}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text/85">{e.texte}</p>
            </article>
          ))}
        </div>

        <div className={`${cardBase} mt-6 border border-rose-400/25 shadow-[0_0_0_1px_rgba(251,113,133,0.10)]`}>
          <p className="text-xs uppercase tracking-wide text-muted">Limites & précautions</p>
          <ul className="mt-3 space-y-2 text-sm text-text/85">
            {COURSE.limites.map((x) => (
              <li key={x} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400/70" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ (data) */}
      <section id="faq" className="mb-10 scroll-mt-24">
        <H2 id="faq" label="Questions fréquentes sur l’astro-psychologie" dot="bg-fuchsia-400" />

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {COURSE.faq.map((x) => (
            <div key={x.q} className={`${cardBase} border border-violet-400/25 shadow-[0_0_0_1px_rgba(167,139,250,0.10)]`}>
              <p className="font-serif text-xl">{x.q}</p>
              <p className="mt-3 text-sm leading-relaxed text-text/85">{x.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Visible (SEO) */}
      <section className="mt-16 space-y-6" aria-labelledby="faq-astropsy">
        <h2 id="faq-astropsy" className="font-serif text-2xl sm:text-3xl">
          Questions fréquentes sur l’astro-psychologie
        </h2>
        <div className="space-y-4">
          {COURSE.faqVisible.map((x, i) => (
            <details
              key={x.q}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md"
              open={i === 0}
            >
              <summary className="cursor-pointer list-none p-6 font-serif text-lg font-medium text-white/90 [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between">
                  {x.q}
                  <span className="ml-3 text-fuchsia-300/60 transition-transform group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="px-6 pb-6 text-sm leading-relaxed text-white/75 md:text-base">{x.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-14 border-t border-white/10 pt-8">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="flex flex-wrap gap-2">
            <Link className={pill} href="/#planetes">
              Planètes
            </Link>
            <Link className={pill} href="/aspects">
              Aspects
            </Link>
            <Link className={pill} href="/significateurs">
              Significateurs
            </Link>
            <Link className={pill} href="/#maisons">
              Maisons
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
