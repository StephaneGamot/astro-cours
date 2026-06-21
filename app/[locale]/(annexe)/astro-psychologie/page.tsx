import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";

import {
  buildMeta,
  localizedPathUrl,
  pathLanguageAlternates,
  toSeoLocale,
  SITE_URL,
  AUTHOR_PERSON,
  PUBLISHER_ORG,
} from "@/lib/seo";
import { astroPsyContent } from "./content";

/**
 * Page « Astro-psychologie » — cours premium, i18n (fr/en/es).
 * Tout le texte vient de ./content.tsx ; ici uniquement la présentation.
 */

const INTERNAL_PATH = "/astro-psychologie";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = toSeoLocale(locale);
  const c = astroPsyContent[loc];
  return buildMeta({
    title: c.meta.title,
    description: c.meta.description,
    canonicalPath: INTERNAL_PATH,
    type: "article",
    locale: loc,
    canonicalUrl: localizedPathUrl(INTERNAL_PATH, loc),
    languages: pathLanguageAlternates(INTERNAL_PATH),
  });
}

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

export default async function AstroPsychologiePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = toSeoLocale(locale);
  const c = astroPsyContent[loc];
  const sections = c.sections;

  const ARTICLE_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.jsonld.headline,
    description: c.jsonld.description,
    inLanguage: loc,
    mainEntityOfPage: { "@type": "WebPage", "@id": localizedPathUrl(INTERNAL_PATH, loc) },
    author: AUTHOR_PERSON,
    publisher: PUBLISHER_ORG,
    image: [`${SITE_URL}/og/cover.jpg`],
    datePublished: "2026-06-13T12:00:00Z",
    dateModified: "2026-06-13T12:00:00Z",
    articleSection: c.jsonld.articleSection,
  };

  const FAQ_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main id="main-content" className="mx-auto max-w-5xl px-6 pb-16 pt-10 text-text">
      {/* JSON-LD Article */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />
      {/* JSON-LD FAQPage */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />

      {/* HERO */}
      <header className="mb-10 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5">
        <div className="p-7 sm:p-10">
          <p className="text-xs uppercase tracking-[0.18em] text-muted">{c.hero.badge}</p>

          <h1 className="mt-3 font-serif text-4xl sm:text-5xl">{c.hero.title}</h1>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-text/80">{c.hero.subtitle}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {c.hero.highlights.map((x) => (
              <span key={x} className={pill}>
                {x}
              </span>
            ))}
          </div>

          {/* Sommaire */}
          <nav aria-label={c.labels.toc} className="mt-7 flex flex-wrap gap-2">
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
        <p className="text-sm font-semibold uppercase tracking-widest text-fuchsia-300/80">{c.labels.defEyebrow}</p>
        <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">{c.defBoxBody}</p>
      </div>

      {/* Intro */}
      <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">{c.introBody}</p>

      {/* Définition */}
      <section id="definition" className="mb-10 scroll-mt-24">
        <H2 id="definition" label={c.labels.h2Definition} dot="bg-fuchsia-400" />

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className={`${cardBase} border border-violet-400/25 shadow-[0_0_0_1px_rgba(167,139,250,0.10)]`}>
            <p className="text-xs uppercase tracking-wide text-muted">{c.labels.resume}</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {c.definition.resume.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400/70" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${cardBase} border border-rose-400/25 shadow-[0_0_0_1px_rgba(251,113,133,0.10)]`}>
            <p className="text-xs uppercase tracking-wide text-muted">{c.labels.ceQueCeNestPas}</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {c.definition.ceQueCeNestPas.map((x) => (
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
        <H2 id="origines" label={c.labels.h2Origines} dot="bg-sky-400" />

        <div className="mt-4 space-y-3">
          {c.origines.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {c.origines.reperes.map((r) => (
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
        <H2 id="principes" label={c.labels.h2Principes} dot="bg-emerald-400" />

        <div className="mt-4 space-y-3">
          {c.principes.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {c.principes.items.map((r) => (
            <div key={r.label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-sm font-medium text-white/90">{r.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-text/80">{r.sens}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Concepts clés */}
      <section id="concepts" className="mb-10 scroll-mt-24">
        <H2 id="concepts" label={c.labels.h2Concepts} dot="bg-violet-400" />

        <div className="mt-4 space-y-3">
          {c.concepts.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {c.concepts.items.map((concept) => (
            <div key={concept.terme} className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-sm font-semibold text-white/90">{concept.terme}</p>
              <p className="mt-2 text-sm leading-relaxed text-text/80">{concept.def}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Planètes & psyché */}
      <section id="fonctions" className="mb-10 scroll-mt-24">
        <H2 id="fonctions" label={c.labels.h2Fonctions} dot="bg-indigo-400" />

        <div className="mt-4 space-y-3">
          {c.planetesFonctions.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {c.planetesFonctions.table.map((p) => {
            const a = accentOf(GROUPE_COLOR[p.groupe] ?? "violet");
            return (
              <div key={p.astre} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-serif text-lg text-white/90">
                    <span className={`mr-2 inline-block h-2 w-2 rounded-full align-middle ${a.dot}`} />
                    {p.astre}
                  </p>
                  <span className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium ${a.chip}`}>
                    {p.groupeLabel}
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
        <H2 id="elements" label={c.labels.h2Elements} dot="bg-amber-400" />

        <div className="mt-4 space-y-3">
          {c.elementsFonctions.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {c.elementsFonctions.items.map((el) => {
            const a = accentOf(ELEMENT_COLOR[el.element] ?? "violet");
            return (
              <article key={el.element} className={`${cardBase} border ${a.card}`}>
                <div className={`mb-4 h-1 w-full rounded-full ${a.bar}`} />
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-serif text-2xl">{el.elementLabel}</h3>
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

        <p className="mt-4 max-w-3xl text-sm italic leading-relaxed text-white/70">{c.elementsFonctions.note}</p>
      </section>

      {/* Triade */}
      <section id="triade" className="mb-10 scroll-mt-24">
        <H2 id="triade" label={c.labels.h2Triade} dot="bg-fuchsia-400" />

        <div className="mt-4 space-y-3">
          {c.triade.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {c.triade.items.map((r) => (
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
        <H2 id="lettres" label={c.labels.h2Lettres} dot="bg-rose-400" />

        <div className="mt-4 space-y-3">
          {c.lettres.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {c.lettres.axes.map((ax) => {
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

        <p className="mt-4 max-w-3xl text-sm italic leading-relaxed text-white/70">{c.lettres.note}</p>
      </section>

      {/* 16 types (MBTI) */}
      <section id="types16" className="mb-10 scroll-mt-24">
        <H2 id="types16" label={c.labels.h2Types16} dot="bg-rose-400" />

        <div className="mt-4 space-y-3">
          {c.types16.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-5 space-y-6">
          {c.types16.familles.map((f) => {
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
                            <span>{(c.legende as Record<string, string>)[ch]}</span>
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

        <p className="mt-4 max-w-3xl text-sm italic leading-relaxed text-white/70">{c.types16.note}</p>
      </section>

      {/* Aspects */}
      <section id="aspects" className="mb-10 scroll-mt-24">
        <H2 id="aspects" label={c.labels.h2Aspects} dot="bg-sky-400" />

        <div className="mt-4 space-y-3">
          {c.aspects.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {c.aspects.items.map((r) => (
            <div key={r.label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-sm font-medium text-white/90">{r.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-text/80">{r.sens}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Maisons psychologiques */}
      <section id="maisons-psy" className="mb-10 scroll-mt-24">
        <H2 id="maisons-psy" label={c.labels.h2MaisonsPsy} dot="bg-teal-400" />

        <div className="mt-4 space-y-3">
          {c.maisonsPsy.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {c.maisonsPsy.items.map((m) => (
            <article
              key={m.maison}
              className={`${cardBase} border border-sky-400/25 shadow-[0_0_0_1px_rgba(56,189,248,0.10)]`}
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/30 font-serif text-sm text-white/90">
                  {m.maison}
                </span>
                <p className="text-sm font-medium text-white/90">{c.labels.maison} {m.maison}</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-text/85">{m.theme}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Ombre & projection */}
      <section id="ombre" className="mb-10 scroll-mt-24">
        <H2 id="ombre" label={c.labels.h2Ombre} dot="bg-violet-400" />

        <div className="mt-4 space-y-3">
          {c.ombreProjection.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {c.ombreProjection.items.map((r) => (
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
        <H2 id="cycles" label={c.labels.h2Cycles} dot="bg-amber-400" />

        <div className="mt-4 space-y-3">
          {c.cyclesVie.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {c.cyclesVie.items.map((cy) => (
            <article
              key={cy.nom}
              className={`${cardBase} border border-violet-400/25 shadow-[0_0_0_1px_rgba(167,139,250,0.10)]`}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-serif text-xl">{cy.nom}</h3>
                <span className="shrink-0 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-text/85">
                  {cy.age}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-text/85">{cy.sens}</p>
            </article>
          ))}
        </div>

        <p className="mt-4 max-w-3xl text-sm italic leading-relaxed text-white/70">{c.cyclesVie.note}</p>
      </section>

      {/* Tradition vs psy */}
      <section id="tradition" className="mb-10 scroll-mt-24">
        <H2 id="tradition" label={c.labels.h2Tradition} dot="bg-emerald-400" />

        <div className="mt-4 space-y-3">
          {c.traditionVsPsy.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {c.traditionVsPsy.items.map((r) => (
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
        <H2 id="pratique" label={c.labels.h2Pratique} dot="bg-emerald-400" />

        <div className="mt-4 space-y-3">
          {c.pratique.intro.map((p) => (
            <p key={p} className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className={`${cardBase} mt-4 border border-emerald-400/25 shadow-[0_0_0_1px_rgba(52,211,153,0.10)]`}>
          <p className="text-xs uppercase tracking-wide text-muted">{c.labels.etapes}</p>
          <ul className="mt-3 space-y-2 text-sm text-text/85">
            {c.pratique.etapes.map((x) => (
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
        <H2 id="exemples" label={c.labels.h2Exemples} dot="bg-violet-400" />

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {c.exemplesLecture.map((e) => (
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
          <p className="text-xs uppercase tracking-wide text-muted">{c.labels.limites}</p>
          <ul className="mt-3 space-y-2 text-sm text-text/85">
            {c.limites.map((x) => (
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
        <H2 id="faq" label={c.labels.h2FaqData} dot="bg-fuchsia-400" />

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {c.faq.map((x) => (
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
          {c.labels.h2FaqVisible}
        </h2>
        <div className="space-y-4">
          {c.faqVisible.map((x, i) => (
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
              {c.labels.footerPlanetes}
            </Link>
            <Link className={pill} href="/aspects">
              {c.labels.footerAspects}
            </Link>
            <Link className={pill} href="/significateurs">
              {c.labels.footerSignificateurs}
            </Link>
            <Link className={pill} href="/#maisons">
              {c.labels.footerMaisons}
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
