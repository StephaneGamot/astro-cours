import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import {
  buildMeta,
  localizedPathUrl,
  pathLanguageAlternates,
  toSeoLocale,
  SITE_URL,
  AUTHOR_PERSON,
  PUBLISHER_ORG,
} from "@/lib/seo";
import { transitsContent, type TransitPlanet } from "./content";

/**
 * Page « Transits » — cours premium, i18n (fr/en/es).
 * Tout le texte vient de ./content.tsx ; ici uniquement la présentation.
 */

const INTERNAL_PATH = "/transits";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = toSeoLocale(locale);
  const c = transitsContent[loc];
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

/* ---------------- UI helpers ---------------- */

const pill =
  "rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-text/90 hover:bg-white/10";
const card =
  "rounded-3xl border border-sky-400/25 bg-white/5 p-6 backdrop-blur shadow-[0_0_0_1px_rgba(56,189,248,0.10)]";
const dot = "bg-sky-400/70";

function planetAccent(cat: TransitPlanet["categorie"]) {
  // sans imposer des couleurs partout : on reste subtil mais lisible
  if (cat === "rapide") {
    return {
      border: "border-emerald-400/25",
      glow: "shadow-[0_0_0_1px_rgba(52,211,153,0.10)]",
      dot: "bg-emerald-400/70",
      line: "bg-emerald-400/35",
      ring: "focus-visible:ring-emerald-400/35",
    };
  }
  if (cat === "sociale") {
    return {
      border: "border-sky-400/25",
      glow: "shadow-[0_0_0_1px_rgba(56,189,248,0.10)]",
      dot: "bg-sky-400/70",
      line: "bg-sky-400/35",
      ring: "focus-visible:ring-sky-400/35",
    };
  }
  return {
    border: "border-violet-400/25",
    glow: "shadow-[0_0_0_1px_rgba(167,139,250,0.10)]",
    dot: "bg-violet-400/70",
    line: "bg-violet-400/35",
    ring: "focus-visible:ring-violet-400/35",
  };
}

function sectionTitle(id: string, label: string) {
  return (
    <h2 id={id} className="font-serif text-2xl sm:text-3xl">
      <span className={`mr-3 inline-block h-2 w-2 rounded-full ${dot}`} />
      {label}
    </h2>
  );
}

function planetImageSrc(slug: string) {
  // Tu as déjà tes images : public/images/planetes/jupiter.webp etc.
  // on garde la même convention
  const map: Record<string, string> = {
    soleil: "soleil",
    lune: "lune",
    mercure: "mercure",
    venus: "venus",
    mars: "mars",
    jupiter: "jupiter",
    saturne: "saturne",
    uranus: "uranus",
    neptune: "neptune",
    pluton: "pluton",
  };
  const file = map[slug] ?? slug;
  return `/images/planetes/${file}.webp`;
}

export default async function TransitsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = toSeoLocale(locale);
  const c = transitsContent[loc];
  const COURSE = c;
  const sections = c.sections;

  const ARTICLE_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.jsonld.headline,
    description: c.jsonld.description,
    mainEntityOfPage: { "@type": "WebPage", "@id": localizedPathUrl(INTERNAL_PATH, loc) },
    author: AUTHOR_PERSON,
    publisher: PUBLISHER_ORG,
    image: [`${SITE_URL}/og/cover.jpg`],
    datePublished: "2026-04-09T12:00:00Z",
    dateModified: "2026-04-22T12:00:00Z",
    inLanguage: loc,
    articleSection: c.jsonld.articleSection,
  };

  const FAQ_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqJsonLd.map((f) => ({
      "@type": "Question",
      name: f.name,
      acceptedAnswer: { "@type": "Answer", text: f.text },
    })),
  };

  return (
    <main id="main-content" className="mx-auto max-w-5xl px-6 pb-16 pt-10 text-text">
      {/* HERO */}
      <header className="mb-10 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5">
        <div className="p-7 sm:p-10">
          <p className="text-xs uppercase tracking-[0.18em] text-muted">{c.hero.eyebrow}</p>

          <h1 className="mt-3 font-serif text-4xl sm:text-5xl">{c.hero.h1}</h1>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-text/80">{c.hero.intro}</p>

          {/* Sommaire */}
          <nav aria-label={c.hero.tocLabel} className="mt-6 flex flex-wrap gap-2">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className={pill}>
                {s.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-emerald-400/35 via-sky-400/35 to-violet-400/35" />
      </header>

      {/* Définition — Featured Snippet */}
      <div className="mt-8 rounded-2xl border border-sky-400/20 bg-sky-400/[0.04] px-6 py-5">
        <p className="text-sm font-semibold uppercase tracking-widest text-sky-300/80">{c.defBox.label}</p>
        <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">{c.defBox.body}</p>
      </div>

      {/* APP Intro */}
      <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">{c.appIntro}</p>

      {/* Définition */}
      <section id="definition" className="mb-10 scroll-mt-24">
        {sectionTitle("definition", c.sectionTitles.definition)}

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className={card}>
            <p className="text-xs uppercase tracking-wide text-muted">{c.labels.definition}</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {COURSE.intro.resume.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={card}>
            <p className="text-xs uppercase tracking-wide text-muted">{c.labels.aQuoiCaSert}</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {COURSE.intro.aquoiCaSert.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Méthode */}
      <section id="methode" className="mb-10 scroll-mt-24">
        {sectionTitle("methode", c.sectionTitles.methode)}

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className={card}>
            <p className="text-xs uppercase tracking-wide text-muted">{c.labels.reglesOr}</p>
            <ul className="mt-3 space-y-2 text-sm text-text/85">
              {COURSE.methode.reglesOr.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={card}>
            <p className="text-xs uppercase tracking-wide text-muted">{c.labels.checklist}</p>
            <ol className="mt-3 space-y-2 text-sm text-text/85">
              {COURSE.methode.checklistLecture.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="mt-0.5 font-mono text-xs text-text/60">•</span>
                  <span>{x}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className={`${card} mt-4`}>
          <p className="text-xs uppercase tracking-wide text-muted">{c.labels.orbesTitle}</p>

          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-sm text-text/85">{COURSE.methode.orbes.principes[0]}</p>
              <p className="mt-2 text-sm text-text/85">{COURSE.methode.orbes.principes[1]}</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <ul className="space-y-2 text-sm text-text/85">
                {COURSE.methode.orbes.recommandes.map((o) => (
                  <li key={o.label} className="flex items-start justify-between gap-4">
                    <span className="text-text/80">{o.label}</span>
                    <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-text/85">
                      {o.orbe}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Aspects */}
      <section id="aspects" className="mb-10 scroll-mt-24">
        {sectionTitle("aspects", c.sectionTitles.aspects)}

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COURSE.aspectsMajeurs.map((a) => (
            <article key={a.slug} className={card}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted">{a.angle}</p>
                  <h3 className="mt-1 font-serif text-2xl">{a.nom}</h3>
                </div>
                <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs uppercase tracking-wide text-muted">
                  {a.slug}
                </span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-text/85">{a.sens}</p>

              {a.motsCles?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {a.motsCles.map((k) => (
                    <span key={k} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-text/85">
                      {k}
                    </span>
                  ))}
                </div>
              ) : null}

              {a.tips?.length ? (
                <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-wide text-muted">{c.labels.conseils}</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-text/85">
                    {a.tips.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      {/* Planètes */}
      <section id="planetes" className="mb-10 scroll-mt-24">
        {sectionTitle("planetes", c.sectionTitles.planetes)}

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {COURSE.planetes.map((p) => {
            const a = planetAccent(p.categorie);
            return (
              <article
                key={p.slug}
                className={`rounded-3xl border ${a.border} bg-white/5 p-6 backdrop-blur ${a.glow}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {/* ✅ Image planète (ronde même en GSM) */}
                    <div
                      className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-full border ${a.border} bg-black/20`}
                      aria-hidden="true"
                    >
                      <Image
                        src={planetImageSrc(p.slug)}
                        alt={p.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                    </div>

                    <div>
                      <h3 className="font-serif text-3xl">{p.name}</h3>
                      <p className="mt-1 text-sm text-text/70">
                        {p.categorieLabel} • {p.rythme}
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs uppercase tracking-wide text-muted">
                    {p.slug}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-text/85">{p.roleTransit}</p>

                {p.themes?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.themes.map((x) => (
                      <span key={x} className={`rounded-full border ${a.border} bg-white/5 px-3 py-1 text-xs text-text/85`}>
                        {x}
                      </span>
                    ))}
                  </div>
                ) : null}

                {p.quandFort?.length ? (
                  <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-xs uppercase tracking-wide text-muted">{c.labels.quandFort}</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-text/85">
                      {p.quandFort.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {p.mantra ? (
                  <div className="mt-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
                    <span className={`h-2 w-2 rounded-full ${a.dot}`} />
                    <p className="text-sm text-text/85">
                      <span className="text-text">{c.labels.mantra}</span> {p.mantra}
                    </p>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </section>

      {/* Transit sur planète natale */}
      <section id="natal" className="mb-10 scroll-mt-24">
        {sectionTitle("natal", c.sectionTitles.natal)}

        <div className={`${card} mt-4`}>
          <p className="text-sm leading-relaxed text-text/85">{COURSE.transitSurPlaneteNatale.intro}</p>

          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {COURSE.transitSurPlaneteNatale.grille.map((g) => (
              <div key={g.titre} className="rounded-3xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-wide text-muted">{g.titre}</p>
                <p className="mt-2 text-sm text-text/85">{g.texte}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-3xl border border-white/10 bg-black/20 p-5">
            <p className="text-xs uppercase tracking-wide text-muted">{c.labels.exemples}</p>
            <div className="mt-3 space-y-3">
              {COURSE.transitSurPlaneteNatale.exemples.map((e) => (
                <div key={e.titre} className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="font-serif text-xl">{e.titre}</p>
                  <p className="mt-2 text-sm leading-relaxed text-text/85">{e.texte}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-10 scroll-mt-24">
        {sectionTitle("faq", c.sectionTitles.faq)}

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {COURSE.faq.map((x) => (
            <div key={x.q} className={card}>
              <p className="font-serif text-xl">{x.q}</p>
              <p className="mt-3 text-sm leading-relaxed text-text/85">{x.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-14 border-t border-white/10 pt-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-text/70">{c.footer.next}</p>

          <div className="flex flex-wrap gap-2">
            <Link className={pill} href="/aspects">{c.footer.aspects}</Link>
            <Link className={pill} href="/maitrises">{c.footer.dignities}</Link>
            <Link className={pill} href="/#maisons">{c.footer.houses}</Link>
            <Link className={pill} href="/#planetes">{c.footer.planets}</Link>
          </div>
        </div>
      </footer>

      {/* FAQ Accordion SEO */}
      <section className="mt-16 space-y-6" aria-labelledby="faq-transits">
        <h2 id="faq-transits" className="font-serif text-2xl sm:text-3xl">{c.faqVisibleTitle}</h2>
        <div className="space-y-4">
          {c.faqVisible.map((f, i) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md"
              open={i === 0}
            >
              <summary className="cursor-pointer list-none p-6 font-serif text-lg font-medium text-white/90 [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between">
                  {f.q}
                  <span className="ml-3 text-sky-300/60 transition-transform group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="px-6 pb-6 text-sm leading-relaxed text-white/75 md:text-base">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* JSON-LD FAQPage */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />

      {/* JSON-LD SEO */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }}
      />
    </main>
  );
}
