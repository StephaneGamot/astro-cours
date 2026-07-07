import Image from "next/image";
import { notFound, permanentRedirect } from "next/navigation";

import type { Metadata } from "next";
import type { ReactNode } from "react";

import {
  buildMeta,
  absoluteUrl,
  AUTHOR_PERSON,
  PUBLISHER_ORG,
  pillarUrl,
  pillarLanguageAlternates,
  toSeoLocale,
} from "@/lib/seo";
import { canonicalSlug, localizeSlug } from "@/i18n/slugs";
import { buildCourseNode } from "@/lib/courseSchema";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  PLANETS,
  getPlanet,
  getPlanetIndex,
  getPlanetsForLocale,
  has,
  planetTheme,
  planetThumbSrc,
  planetHeroSrc,
  normalizeDignitesExpliquees,
  buildBreadcrumbs,
  sectionId,
} from "./helpers";

/** Traducteur simplifié (namespace "planet"). */
type T = (key: string, values?: Record<string, string | number>) => string;
/** Traducteur avec support rich (balises) pour le composant page. */
type TR = T & {
  rich: (
    key: string,
    values?: Record<string, string | number | ((chunks: ReactNode) => ReactNode)>
  ) => ReactNode;
  has: (key: string) => boolean;
};

/** Pronom genré FR pour la Lune / Vénus (sinon « il »). */
function planetPronoun(slug: string): string {
  return slug === "lune" || slug === "venus" ? "elle" : "il";
}

import {
  AuraGlow,
  Section,
  SectionHeading,
  GlassCard,
  ProseBlock,
  TagList,
  DetailList,
  StatBadge,
  QuoteBlock,
  AspectCard,
  PlanetNav,
  TableOfContents,
} from "./ui";

import { Link } from "@/i18n/navigation";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

import {
  Sparkles,
  Sun,
  Moon,
  Zap,
  Compass,
  Shield,
  Activity,
  Star,
  Target,
  User,
  Eye,
  BookOpen,
  Globe,
  ZapOff,
  Fingerprint,
  HeartPulse,
  Layers,
  Brain,
  Heart,
  Crown,
  Telescope,
  Palette,
  Briefcase,
  Gem,
  Flame,
  ScrollText,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Static params                                                      */
/* ------------------------------------------------------------------ */

// dynamicParams reste activé : un slug d'une autre langue (ex. /en/planets/pluton)
// est redirigé 308 vers le slug localisé canonique au lieu de renvoyer 404.

export function generateStaticParams({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return PLANETS.filter(
    (p) => typeof p.slug === "string" && p.slug.trim() !== ""
  ).map((p) => ({ slug: localizeSlug("planetes", p.slug, locale) }));
}

/* ------------------------------------------------------------------ */
/*  Metadata + SEO                                                     */
/* ------------------------------------------------------------------ */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const planet = getPlanet(canonicalSlug("planetes", slug.toLowerCase()), locale);
  if (!planet) return {};

  const t = (await getTranslations({ locale, namespace: "planet" })) as T;

  /* ── Title 50-60 chars ────────────────────────────────── */
  const title = t("metaTitle", { name: planet.name });

  /* ── Per-slug SEO title override (Ahrefs SERP rewrite fix, FR only) ─
       Si Google réécrit le titre dans la SERP, on force ici la version
       exacte avec `title: { absolute }` pour matcher au pixel près. */
  const TITLE_OVERRIDES: Record<string, string> =
    locale === "fr"
      ? { jupiter: "Jupiter en astrologie : symbolique & aspects - Astro Cours" }
      : {};
  const titleOverride = TITLE_OVERRIDES[planet.slug];

  /* ── Description 140-155 chars avec CTA ────────────────── */
  const rawDesc = planet.identite?.symbolique || "";
  const fallbackDesc = t("metaDescFallback", { name: planet.name });
  const description = rawDesc.length >= 140 && rawDesc.length <= 155
    ? rawDesc
    : fallbackDesc.length <= 155
      ? fallbackDesc
      : fallbackDesc.slice(0, 152) + "...";

  return {
    ...buildMeta({
      title,
      description,
      canonicalPath: `/planetes/${planet.slug}`,
      type: "article",
      ogImage: planetHeroSrc(planet.slug),
      locale,
      canonicalUrl: pillarUrl("planetes", planet.slug, toSeoLocale(locale)),
      languages: pillarLanguageAlternates("planetes", planet.slug),
    }),
    ...(titleOverride ? { title: { absolute: titleOverride } } : {}),
  };
}

/* ------------------------------------------------------------------ */
/*  Schema.org JSON-LD                                                 */
/* ------------------------------------------------------------------ */

function buildJsonLd(
  planet: ReturnType<typeof getPlanet>,
  locale: string,
  t: T
) {
  if (!planet) return null;

  const heroSrc = planetHeroSrc(planet.slug);
  const descFallback = t("jsonldDesc", { name: planet.name });

  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: t("jsonldHeadline", { name: planet.name }),
        description: planet.identite?.symbolique || descFallback,
        image: [absoluteUrl(heroSrc)],
        author: AUTHOR_PERSON,
        publisher: PUBLISHER_ORG,
        mainEntityOfPage: absoluteUrl(`/planetes/${planet.slug}`),
        datePublished: "2026-04-09T12:00:00Z",
        dateModified: "2026-05-08T12:00:00Z",
        inLanguage: locale,
      },
      buildCourseNode({
        path: `/planetes/${planet.slug}`,
        name: t("jsonldCourseName", { name: planet.name }),
        description: planet.identite?.symbolique || descFallback,
        image: heroSrc,
        teaches: t("jsonldTeaches", { name: planet.name }),
        topicName: t("jsonldTopic", { name: planet.name }),
      }),
      {
        "@type": "BreadcrumbList",
        itemListElement: buildBreadcrumbs(planet, {
          home: t("bcHome"),
          planets: t("breadcrumbPlanets"),
        }).map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: absoluteUrl(item.href),
        })),
      },
      ...(planet.faq && planet.faq.length > 0
        ? [
            {
              "@type": "FAQPage",
              mainEntity: planet.faq.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: { "@type": "Answer", text: f.reponse },
              })),
            },
          ]
        : []),
    ],
  };

  return [jsonLdGraph];
}

/* ------------------------------------------------------------------ */
/*  Build sections list for TOC                                        */
/* ------------------------------------------------------------------ */

function buildTocSections(
  planet: NonNullable<ReturnType<typeof getPlanet>>,
  t: T
) {
  const sections: { id: string; label: string }[] = [];

  sections.push({ id: "archetype", label: t("toc.archetype") });

  if (has(planet.introductionLongue))
    sections.push({ id: "genese", label: t("toc.genese") });

  if (has(planet.fonctionEssentielle))
    sections.push({ id: "fonction", label: t("toc.fonction") });

  if (has(planet.mythologie))
    sections.push({ id: "mythologie", label: t("toc.mythologie") });

  sections.push({ id: "psyche", label: t("toc.psyche") });

  if (has(planet.lecturePsychologiqueProfonde) || has(planet.dansUnTheme))
    sections.push({ id: "profondeur", label: t("toc.profondeur") });

  if (has(planet.rapportAuPere) || has(planet.rapportPereAutorite))
    sections.push({ id: "pere-autorite", label: t("toc.pereAutorite") });

  if (has(planet.champsExperience))
    sections.push({ id: "champs", label: t("toc.champs") });

  if (has(planet.etatFortFaible))
    sections.push({ id: "configurations", label: t("toc.configurations") });

  if (has(planet.correspondances))
    sections.push({ id: "correspondances", label: t("toc.correspondances") });

  if (has(planet.medical))
    sections.push({ id: "medical", label: t("toc.medical") });

  if (has(planet.social))
    sections.push({ id: "social", label: t("toc.social") });

  if (has(planet.apparence))
    sections.push({ id: "apparence", label: t("toc.apparence") });

  if (has(planet.portraitDuSolarien))
    sections.push({ id: "portrait", label: t("toc.portrait") });

  if (has(planet.professions))
    sections.push({ id: "professions", label: t("toc.professions") });

  if (has(planet.destinSentimental))
    sections.push({ id: "destin-sentimental", label: t("toc.destinSentimental") });

  if (has(planet.destinFinancier))
    sections.push({ id: "destin-financier", label: t("toc.destinFinancier") });

  if (has(planet.dansLesSignes))
    sections.push({ id: "signes", label: t("toc.signes") });

  if (has(planet.dansLesMaisons))
    sections.push({ id: "maisons", label: t("toc.maisons") });

  if (has(planet.aspects))
    sections.push({ id: "aspects", label: t("toc.aspects") });

  if (has(planet.faq))
    sections.push({ id: "faq", label: t("toc.faq") });

  return sections;
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default async function PlanetPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug: raw } = await params;
  setRequestLocale(locale);
  const slug = canonicalSlug("planetes", raw.toLowerCase());
  const planets = getPlanetsForLocale(locale);
  const planet = planets.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
  if (!planet) notFound();

  // Slug d'une autre langue sous ce segment → 308 vers le slug localisé canonique.
  const loc = toSeoLocale(locale);
  const expectedSlug = localizeSlug("planetes", planet.slug, loc);
  if (raw.toLowerCase() !== expectedSlug) permanentRedirect(pillarUrl("planetes", planet.slug, loc));

  const tr = (await getTranslations({ locale, namespace: "planet" })) as TR;
  const pronoun = planetPronoun(planet.slug);

  const t = planetTheme(planet.slug);
  const index = planets.findIndex(
    (p) => p.slug.toLowerCase() === slug.toLowerCase()
  );
  const prev = planets[(index - 1 + planets.length) % planets.length];
  const next = planets[(index + 1) % planets.length];

  const heroSrc = planetHeroSrc(planet.slug);
  const thumbSrc = planetThumbSrc(planet.slug);

  const dignitesExpliquees = normalizeDignitesExpliquees(
    planet.identite?.dignitesExpliquees
  );

  const rapportAutorite =
    planet.rapportPereAutorite ||
    planet.rapportAuPere ||
    planet.rapportALAutorite;

  const configFortFaible = planet.etatFortFaible ?? null;
  const analyseProfonde =
    planet.lecturePsychologiqueProfonde || planet.dansUnTheme;

  const jsonLd = buildJsonLd(planet, locale, tr);
  const tocSections = buildTocSections(planet, tr);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#010409] text-slate-300 selection:bg-white/10 selection:text-white">
      {/* ✅ Preload LCP avec fetchpriority="high" — Audit Lighthouse 31/05/2026
            <Image priority> de Next.js 16 ne pose pas `fetchpriority=high` sur
            le <link rel="preload"> qu'il génère. On reproduit manuellement le
            preload (hissé en <head> par React 19) avec fetchPriority, et on
            retire `priority` côté <Image> ci-dessous pour éviter un double
            preload concurrent. Pattern identique à app/maisons/[slug]/page.tsx
            et components/images/ImageOnly.tsx (homepage). */}
      <link
        rel="preload"
        as="image"
        imageSrcSet={[640, 750, 828, 1080, 1200, 1920]
          .map((w) => `/_next/image?url=${encodeURIComponent(heroSrc)}&w=${w}&q=75 ${w}w`)
          .join(", ")}
        imageSizes="(max-width:768px) 100vw, (max-width:1024px) 768px, 1200px"
        fetchPriority="high"
      />

      {/* Schema.org */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

  

      {/* Background aura */}
      <AuraGlow aura="50% 20%" color={t.color} />

      <main
        id="main-content"
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24 md:pb-36"
      >
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { name: tr("breadcrumbPlanets"), href: "/planetes" },
            { name: planet.name, href: `/planetes/${planet.slug}` },
          ]}
          accentClass="text-sky-400"
        />

        {/* ============================================================ */}
        {/*  HERO                                                        */}
        {/* ============================================================ */}

        <header className="relative pt-8 md:pt-16 mb-20 md:mb-28 text-center">
          {/* Radial glow */}
          <div
            className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-full max-w-4xl opacity-20 blur-[100px]"
            style={{ background: `radial-gradient(circle, ${t.color} 0%, transparent 72%)` }}
            aria-hidden="true"
          />

          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 rounded-full border px-5 py-2 text-xs uppercase tracking-[0.4em] ${t.border} ${t.bg} ${t.text} mb-6`}
          >
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            {planet.famille || tr("badgeFallback")}
          </div>

          {/* Planet name — H1 enrichi SEO (20-70 chars) */}
          <h1 className="font-serif text-[clamp(3.5rem,11vw,8.5rem)] leading-[0.9] tracking-tight text-white">
            {planet.name}
            <span className="block mt-3 font-serif text-xl md:text-3xl italic text-slate-300 leading-normal">
              {tr("heroSubtitle")}
            </span>
          </h1>

          {/* Hero image */}
          <div className="relative mt-10 md:mt-14 group">
            <div
              className={`absolute -inset-3 rounded-[36px] opacity-20 blur-3xl ${t.bg}`}
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-3xl md:rounded-[36px] border border-white/10 bg-[#0a0f1e] shadow-2xl ">
              <Image
                src={heroSrc}
                alt={tr("altHero", { name: planet.name })}
                width={1200}
                height={800}
                // `priority` retiré (cf. preload manuel + fetchPriority en haut
                // du composant). On reproduit ses deux autres effets ici :
                fetchPriority="high"
                loading="eager"
                quality={75}
                sizes="(max-width:768px) 100vw, (max-width:1024px) 768px, 1200px"
                className="w-full h-[280px] sm:h-[380px] md:h-[560px] object-cover transition-transform duration-[2s] group-hover:scale-[1.02]"
              />

              {/* Stats overlay */}
              <div className=" bottom-3 left-3 right-3 md:bottom-6 md:left-6 md:right-6 grid grid-cols-3 gap-3 rounded-2xl md:rounded-3xl border border-white/10 bg-black/60 p-4 md:p-6 backdrop-blur-xl lg:mt-12 ">
                <StatBadge
                  label={tr("statFamily")}
                  value={planet.famille}
                  accentText={t.text}
                  icon={Layers}
                />
                <StatBadge
                  label={tr("statRevolution")}
                  value={planet.revolution}
                  accentText={t.text}
                  icon={Compass}
                />
                <StatBadge
                  label={tr("statDomicile")}
                  value={planet.identite?.dignites?.domicile || planet.domicile}
                  accentText={t.text}
                  icon={Sun}
                />
              </div>
            </div>
          </div>
        </header>

        {/* ━━━━━━━━━━━ DÉFINITION SEO (Featured Snippet) ━━━━━━━━━━━ */}
        <div className="mx-auto max-w-4xl mb-12">
          <div className="rounded-2xl border px-6 py-5"
               style={{ borderColor: `${t.color}`, background: `${t.color.replace(/[\d.]+\)$/, '0.06)')}` }}>
            <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: `${t.color.replace(/[\d.]+\)$/, '0.8)')}` }}>
              {tr("definitionLabel")}
            </p>
            <p className="mt-2 text-base leading-relaxed text-slate-300 sm:text-lg">
              {tr("defPrefix")} <strong className="text-white">{planet.name}</strong> {tr("defIs")}{" "}
              {planet.famille === "Luminaire"
                ? tr("famLuminary")
                : tr("famPlanet", { famille: (planet.famille || "").toLowerCase() })}{" "}
              {tr("defWhose")}{" "}
              <Link href="/aspects" className="underline decoration-1 underline-offset-2" style={{ color: t.color }}>{tr("defSymbolicFunction")}</Link>{" "}
              {tr("defLinkedTo")} {planet.identite?.fonction || planet.identite?.symbolique?.slice(0, 80) || tr("defSelfExpression")}.{" "}
              {planet.identite?.dignites?.domicile && <>{tr("defDomicile")} <strong className="text-white">{planet.identite.dignites.domicile}</strong>.</>}
            </p>
          </div>

          {/* APP Intro */}
          <p className="mt-8 text-base leading-relaxed text-slate-400 sm:text-lg">
            {tr.rich("appIntro", {
              name: planet.name,
              b: (chunks: ReactNode) => <strong className="text-white">{chunks}</strong>,
            })}
          </p>
        </div>

        {/* ============================================================ */}
        {/*  MAIN CONTENT (with optional TOC sidebar)                    */}
        {/* ============================================================ */}

        <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-12 xl:gap-16">
          {/* LEFT: Content */}
          <div className="min-w-0">
            {/* ──── ARCHETYPE SACRÉ ──── */}
            <Section id="archetype">
              <SectionHeading
                title={tr("archetypeTitle", { name: planet.name })}
                id="archetype"
                accentDot={t.dot}
                accentText={t.text}
              />

              <GlassCard accent={t} className="p-6 md:p-10">
                <QuoteBlock
                  text={planet.identite?.symbolique || planet.introductionLongue?.[0]}
                  accentBorder={t.border}
                />

                {/* Analogies grid */}
                {planet.identite?.analogies && (
                  <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 border-t border-white/5 pt-8">
                    {Object.entries(planet.identite.analogies).map(([k, v]) => (
                      <div key={k}>
                        <p className="mb-1 text-xs uppercase tracking-widest text-slate-500 font-semibold">
                          {tr.has(`ana.${k}`) ? tr(`ana.${k}`) : k}
                        </p>
                        <p className="font-serif text-lg text-white leading-tight">
                          {v}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Ce que l'astre représente */}
                {has(planet.ceQueLeSoleilRepresente) && (
                  <div className="mt-8 border-t border-white/5 pt-8">
                    <DetailList
                      title={tr("embodies")}
                      items={planet.ceQueLeSoleilRepresente || planet.resume}
                      accentDot={t.dot}
                      accentText={t.text}
                      icon={Fingerprint}
                    />
                  </div>
                )}

                {/* Dignités */}
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-5 border-t border-white/5 pt-8">
                  {(
                    [
                      [tr("dignDomicile"), planet.identite?.dignites?.domicile || planet.domicile],
                      [tr("dignExaltation"), planet.identite?.dignites?.exaltation || planet.exaltation],
                      [tr("dignExil"), planet.identite?.dignites?.exil || planet.exil],
                      [tr("dignChute"), planet.identite?.dignites?.chute || planet.chute],
                    ] as const
                  ).map(([label, value]) => (
                    <div key={label}>
                      <p className="mb-1 text-xs uppercase tracking-widest text-slate-500 font-semibold">
                        {label}
                      </p>
                      <p className="font-serif text-xl text-white">
                        {value || "—"}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Dignités expliquées */}
                {has(dignitesExpliquees) && (
                  <div className="mt-8 border-t border-white/5 pt-8 space-y-3">
                    <p className="mb-3 text-xs uppercase tracking-widest text-slate-500 font-semibold italic">
                      {tr("dignitiesLogic")}
                    </p>
                    {dignitesExpliquees.map((txt, i) => (
                      <blockquote
                        key={i}
                        className="border-l-2 border-white/10 pl-4 text-base italic text-slate-400"
                      >
                        {txt}
                      </blockquote>
                    ))}
                  </div>
                )}
              </GlassCard>
            </Section>

            {/* ──── GENÈSE ──── */}
            {has(planet.introductionLongue) && (
              <Section id="genese">
                <SectionHeading
                  title={tr("genesisTitle", { name: planet.name })}
                  icon={BookOpen}
                  id="genese"
                  accentDot={t.dot}
                  accentText={t.text}
                />
                <ProseBlock
                  paragraphs={planet.introductionLongue!}
                  firstLetterDrop
                />
              </Section>
            )}

            {/* ──── FONCTION ESSENTIELLE ──── */}
            {has(planet.fonctionEssentielle) && (
              <Section id="fonction">
                <SectionHeading
                  title={tr("functionTitle", { name: planet.name })}
                  icon={Target}
                  id="fonction"
                  accentDot={t.dot}
                  accentText={t.text}
                  subtitle={planet.identite?.fonction}
                />
                <ProseBlock paragraphs={planet.fonctionEssentielle!} />
              </Section>
            )}

            {/* ──── MOTS-CLÉS ──── */}
            {has(planet.motsCles) && (
              <Section id="mots-cles">
                <SectionHeading
                  title={tr("keywordsTitle")}
                  id="mots-cles"
                  accentDot={t.dot}
                  accentText={t.text}
                />
                <TagList
                  items={planet.motsCles!}
                  accentBorder={t.border}
                  accentText={t.text}
                />
              </Section>
            )}

            {/* ──── MYTHOLOGIE ──── */}
            {has(planet.mythologie) && (
              <Section id="mythologie">
                <SectionHeading
                  title={tr("mythologyTitle", { name: planet.name })}
                  icon={Crown}
                  id="mythologie"
                  accentDot={t.dot}
                  accentText={t.text}
                  subtitle={tr("mythologySubtitle")}
                />
                <ProseBlock paragraphs={planet.mythologie!} firstLetterDrop />
              </Section>
            )}

            {/* ──── SYMBOLE GRAPHIQUE ──── */}
            {planet.symboliqueGraphique && (
              <Section id="symbole">
                <GlassCard accent={t} className="p-6 md:p-10">
                  <h2 className="mb-4 font-serif text-2xl text-white" id="symbole-heading">
                    {tr("graphicSymbolTitle")}
                  </h2>
                  <p className="text-lg leading-relaxed text-slate-300">
                    {planet.symboliqueGraphique}
                  </p>
                </GlassCard>
              </Section>
            )}

            {/* ──── DONNÉES ASTRONOMIQUES ──── */}
            {has(planet.donneesAstronomiques) && (
              <Section id="astronomie">
                <SectionHeading
                  title={tr("astronomyTitle")}
                  icon={Telescope}
                  id="astronomie"
                  accentDot={t.dot}
                  accentText={t.text}
                />
                <ProseBlock paragraphs={planet.donneesAstronomiques!} />
              </Section>
            )}

            {/* ──── PSYCHÉ HUMAINE ──── */}
            <Section id="psyche">
              <SectionHeading
                title={tr("psycheTitle", { name: planet.name })}
                icon={Brain}
                id="psyche"
                accentDot={t.dot}
                accentText={t.text}
              />

              {/* Niveaux psychologiques */}
              <div className="mb-8 grid gap-5 md:grid-cols-3">
                {(
                  [
                    {
                      label: tr("levelLow"),
                      cls: "border-red-500/20 bg-red-500/5 text-red-200",
                      data: planet.lectureHumaine?.psychologie?.niveauBas,
                    },
                    {
                      label: tr("levelMid"),
                      cls: "border-slate-500/20 bg-slate-500/5 text-slate-200",
                      data: planet.lectureHumaine?.psychologie?.niveauMoyen,
                    },
                    {
                      label: tr("levelHigh"),
                      cls: "border-emerald-500/20 bg-emerald-500/5 text-emerald-200",
                      data: planet.lectureHumaine?.psychologie?.niveauEleve,
                    },
                  ] as const
                )
                  .filter((b) => has(b.data))
                  .map((b) => (
                    <div
                      key={b.label}
                      className={`rounded-2xl border p-6 ${b.cls}`}
                    >
                      <h3 className="mb-5 text-center text-xs uppercase tracking-widest font-semibold opacity-80">
                        {b.label}
                      </h3>
                      <ul className="space-y-3">
                        {b.data?.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm leading-relaxed">
                            <span className="opacity-40" aria-hidden="true">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>

              {/* Forces / Ombres / Expression */}
              <GlassCard accent={t} className="p-6 md:p-10">
                <div className="grid gap-10 md:grid-cols-2">
                  <DetailList
                    title={tr("strengthsPotentials")}
                    items={planet.lectureHumaine?.forces}
                    accentDot={t.dot}
                    accentText={t.text}
                    icon={Sun}
                  />
                  <DetailList
                    title={tr("shadowZones")}
                    items={planet.lectureHumaine?.ombres}
                    accentDot={t.dot}
                    accentText={t.text}
                    icon={Shield}
                  />
                </div>

                {planet.lectureHumaine?.expression && (
                  <div className="mt-10 grid gap-10 border-t border-white/5 pt-10 md:grid-cols-3">
                    <DetailList
                      title={tr("aligned")}
                      items={planet.lectureHumaine.expression.aligne}
                      accentDot={t.dot}
                      accentText={t.text}
                      icon={Target}
                    />
                    <DetailList
                      title={tr("excess")}
                      items={planet.lectureHumaine.expression.exces}
                      accentDot={t.dot}
                      accentText={t.text}
                      icon={Zap}
                    />
                    <DetailList
                      title={tr("lack")}
                      items={planet.lectureHumaine.expression.manque}
                      accentDot={t.dot}
                      accentText={t.text}
                      icon={ZapOff}
                    />
                  </div>
                )}
              </GlassCard>
            </Section>

            {/* ──── PROFONDEUR ──── */}
            {has(analyseProfonde) && (
              <Section id="profondeur">
                <SectionHeading
                  title={tr("depthTitle", { name: planet.name })}
                  icon={Eye}
                  id="profondeur"
                  accentDot={t.dot}
                  accentText={t.text}
                />
                <GlassCard accent={t} className="p-6 md:p-10">
                  <ProseBlock paragraphs={analyseProfonde!} />
                </GlassCard>
              </Section>
            )}

            {/* ──── PÈRE & AUTORITÉ ──── */}
            {(has(rapportAutorite) || has(planet.rapportALaReussite)) && (
              <Section id="pere-autorite">
                <SectionHeading
                  title={tr("fatherTitle", { name: planet.name })}
                  icon={User}
                  id="pere-autorite"
                  accentDot={t.dot}
                  accentText={t.text}
                />

                <div className="grid gap-6 md:grid-cols-2">
                  {has(rapportAutorite) && (
                    <GlassCard accent={t} className="p-6 md:p-8">
                      <DetailList
                        title={tr("fatherAuthority")}
                        items={rapportAutorite}
                        accentDot={t.dot}
                        accentText={t.text}
                        icon={User}
                      />
                    </GlassCard>
                  )}
                  {has(planet.rapportALaReussite) && (
                    <GlassCard accent={t} className="p-6 md:p-8">
                      <DetailList
                        title={tr("relationSuccess")}
                        items={planet.rapportALaReussite}
                        accentDot={t.dot}
                        accentText={t.text}
                        icon={Target}
                      />
                    </GlassCard>
                  )}
                </div>

                {has(planet.rapportAuPere) && (
                  <GlassCard accent={t} className="mt-6 p-6 md:p-10">
                    <h3 className="mb-6 font-serif text-2xl text-white">
                      {tr("paternalArchetype")}
                    </h3>
                    <ProseBlock paragraphs={planet.rapportAuPere!} />
                  </GlassCard>
                )}
              </Section>
            )}

            {/* ──── QUOTIDIEN ──── */}
        {has(planet.lectureHumaine?.quotidien) && (
  <Section id="quotidien">
    <SectionHeading
      title={tr("dailyTitle")}
      icon={Moon}
      id="quotidien"
      accentDot={t.dot}
      accentText={t.text}
    />
    <GlassCard accent={t} className="p-6 md:p-10">
      <DetailList
        title={tr("dailyTitle")}
        items={planet.lectureHumaine?.quotidien}
        accentDot={t.dot}
        accentText={t.text}
        icon={Moon}
      />
    </GlassCard>
  </Section>
)}

            {/* ──── CHAMPS D'EXPÉRIENCE ──── */}
            {has(planet.champsExperience) && (
              <Section id="champs">
                <SectionHeading
                  title={tr("fieldsTitle", { name: planet.name, pronoun })}
                  subtitle={tr("fieldsSubtitle")}
                  icon={Globe}
                  id="champs"
                  accentDot={t.dot}
                  accentText={t.text}
                />
                <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
                  {Object.entries(planet.champsExperience || {}).map(
                    ([key, value]) => (
                      <div key={key} className="break-inside-avoid">
                        <GlassCard accent={t} className="p-5">
                          <DetailList
                            title={tr.has(`champ.${key}`) ? tr(`champ.${key}`) : key}
                            items={value}
                            accentDot={t.dot}
                            accentText={t.text}
                          />
                        </GlassCard>
                      </div>
                    )
                  )}
                </div>
              </Section>
            )}

            {/* ──── CONFIGURATIONS ──── */}
            {configFortFaible && (
              <Section id="configurations">
                <SectionHeading
                  title={tr("configTitle", { name: planet.name })}
                  icon={HeartPulse}
                  id="configurations"
                  accentDot={t.dot}
                  accentText={t.text}
                />
                <div className="grid gap-5 md:grid-cols-3">
                  <GlassCard accent={t} className="p-6 border-emerald-500/20 bg-emerald-500/[0.03]">
                    <DetailList
                      title={tr("strong")}
                      items={configFortFaible.fort}
                      accentDot="bg-emerald-400"
                      accentText="text-emerald-400"
                    />
                  </GlassCard>
                  <GlassCard accent={t} className="p-6 border-orange-500/20 bg-orange-500/[0.03]">
                    <DetailList
                      title={tr("weak")}
                      items={configFortFaible.faible}
                      accentDot="bg-orange-400"
                      accentText="text-orange-400"
                    />
                  </GlassCard>
                  <GlassCard accent={t} className="p-6 border-red-500/20 bg-red-500/[0.03]">
                    <DetailList
                      title={tr("afflicted")}
                      items={configFortFaible.afflige}
                      accentDot="bg-red-400"
                      accentText="text-red-400"
                    />
                  </GlassCard>
                </div>
              </Section>
            )}

            {/* ──── CORRESPONDANCES ──── */}
            {has(planet.correspondances) && (
              <Section id="correspondances">
                <SectionHeading
                  title={tr("correspTitle", { name: planet.name })}
                  icon={Gem}
                  id="correspondances"
                  accentDot={t.dot}
                  accentText={t.text}
                />
                <GlassCard accent={t} className="p-6 md:p-10">
                  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <DetailList title={tr("corrBody")} items={planet.correspondances?.corps} accentDot={t.dot} accentText={t.text} icon={HeartPulse} />
                    <DetailList title={tr("corrMetals")} items={planet.correspondances?.metaux} accentDot={t.dot} accentText={t.text} icon={Gem} />
                    <DetailList title={tr("corrColors")} items={planet.correspondances?.couleurs} accentDot={t.dot} accentText={t.text} icon={Palette} />
                    <DetailList title={tr("corrStones")} items={planet.correspondances?.pierres} accentDot={t.dot} accentText={t.text} icon={Sparkles} />
                    <DetailList title={tr("corrAnimals")} items={planet.correspondances?.animaux} accentDot={t.dot} accentText={t.text} icon={Globe} />
                    <DetailList title={tr("corrPlaces")} items={planet.correspondances?.lieux} accentDot={t.dot} accentText={t.text} icon={Crown} />
                  </div>
                  {planet.correspondances?.jour && (
                    <p className="mt-6 border-t border-white/5 pt-6 text-center text-lg text-slate-400">
                      {tr("dayOfWeek", { day: planet.correspondances.jour })}
                    </p>
                  )}
                </GlassCard>
              </Section>
            )}

            {/* ──── PLAN MÉDICAL ──── */}
            {has(planet.medical) && (
              <Section id="medical">
                <SectionHeading title={tr("medicalTitle", { name: planet.name })} icon={HeartPulse} id="medical" accentDot={t.dot} accentText={t.text} />
                <GlassCard accent={t} className="p-6 md:p-10">
                  <ProseBlock paragraphs={planet.medical!} />
                </GlassCard>
              </Section>
            )}

            {/* ──── SOCIABILITÉ ──── */}
            {has(planet.social) && (
              <Section id="social">
                <SectionHeading title={tr("socialTitle", { name: planet.name })} icon={Activity} id="social" accentDot={t.dot} accentText={t.text} />
                <GlassCard accent={t} className="p-6 md:p-10">
                  <ProseBlock paragraphs={planet.social!} />
                </GlassCard>
              </Section>
            )}

            {/* ──── SPIRITUEL ──── */}
            {has(planet.spirituel) && (
              <Section id="spirituel">
                <SectionHeading title={tr("spiritualTitle", { name: planet.name })} icon={Flame} id="spirituel" accentDot={t.dot} accentText={t.text} />
                <GlassCard accent={t} className="p-6 md:p-10">
                  <ProseBlock paragraphs={planet.spirituel!} />
                </GlassCard>
              </Section>
            )}

            {/* ──── APPARENCE ──── */}
            {has(planet.apparence) && (
              <Section id="apparence">
                <SectionHeading title={tr("appearanceTitle", { name: planet.name })} icon={Eye} id="apparence" accentDot={t.dot} accentText={t.text} />
                <GlassCard accent={t} className="p-6 md:p-10">
                  <ProseBlock paragraphs={planet.apparence!} />
                </GlassCard>
              </Section>
            )}

            {/* ──── PORTRAIT DU SOLARIEN ──── */}
            {has(planet.portraitDuSolarien) && (
              <Section id="portrait">
                <SectionHeading title={tr("portraitTitle")} icon={Crown} id="portrait" accentDot={t.dot} accentText={t.text} subtitle={tr("portraitSubtitle")} />
                <GlassCard accent={t} className="p-6 md:p-10">
                  <ProseBlock paragraphs={planet.portraitDuSolarien!} firstLetterDrop />
                </GlassCard>
              </Section>
            )}

            {/* ──── PROFESSIONS ──── */}
            {has(planet.professions) && (
              <Section id="professions">
                <SectionHeading title={tr("professionsTitle", { name: planet.name })} icon={Briefcase} id="professions" accentDot={t.dot} accentText={t.text} />
                <GlassCard accent={t} className="p-6 md:p-10">
                  <DetailList title={tr("jobsVocations")} items={planet.professions} accentDot={t.dot} accentText={t.text} icon={Briefcase} />
                </GlassCard>
              </Section>
            )}

            {/* ──── DESTIN SENTIMENTAL ──── */}
            {has(planet.destinSentimental) && (
              <Section id="destin-sentimental">
                <SectionHeading title={tr("loveTitle", { name: planet.name })} icon={Heart} id="destin-sentimental" accentDot={t.dot} accentText={t.text} />
                <GlassCard accent={t} className="p-6 md:p-10">
                  <ProseBlock paragraphs={planet.destinSentimental!} />
                </GlassCard>
              </Section>
            )}

            {/* ──── DESTIN FINANCIER ──── */}
            {has(planet.destinFinancier) && (
              <Section id="destin-financier">
                <SectionHeading title={tr("financeTitle", { name: planet.name })} icon={Briefcase} id="destin-financier" accentDot={t.dot} accentText={t.text} />
                <GlassCard accent={t} className="p-6 md:p-10">
                  <ProseBlock paragraphs={planet.destinFinancier!} />
                </GlassCard>
              </Section>
            )}

            {/* ──── ÂGE DE LA VIE ──── */}
            {planet.ageDeLaVie && (
              <Section id="age">
                <GlassCard accent={t} className="p-6 md:p-10 text-center">
                  <h2 className="mb-4 font-serif text-2xl text-white" id="age-heading">
                    {tr("ageTitle")}
                  </h2>
                  <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-300">
                    {planet.ageDeLaVie}
                  </p>
                </GlassCard>
              </Section>
            )}

            {/* ============================================================ */}
            {/*  DANS LES SIGNES                                             */}
            {/* ============================================================ */}

            {has(planet.dansLesSignes) && (
              <Section id="signes">
                <SectionHeading
                  title={tr("signsTitle", { name: planet.name })}
                  subtitle={tr("signsSubtitle")}
                  icon={Star}
                  id="signes"
                  accentDot={t.dot}
                  accentText={t.text}
                />
                <div className="space-y-6">
                  {planet.dansLesSignes!.map((sign, i) => (
                    <GlassCard key={i} accent={t} className="p-6 md:p-8" id={sectionId(`signe-${sign.signe}`)}>
                      <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
                        <div className="flex flex-col items-center lg:w-[25%] text-center">
                          <Image
                            src={`/images/zodiaque/${sign.signe}.webp`}
                            alt={tr("altSign", { sign: sign.signe })}
                            width={100}
                            height={100}
                            className="drop-shadow-xl"
                          />
                          <h3 className="mt-4 font-serif text-3xl text-white capitalize">
                            {localizeSlug("signes", sign.signe, locale)}
                          </h3>
                          <span className={`mt-3 inline-block rounded-full border px-4 py-1.5 text-xs uppercase tracking-widest font-semibold ${t.border} ${t.text}`}>
                            {sign.titre}
                          </span>
                        </div>
                        <div className="lg:w-[75%]">
                          <QuoteBlock text={sign.resume} accentBorder={t.border} />
                          <div className="mt-6 grid gap-6 md:grid-cols-3">
                            <DetailList title={tr("strengths")} items={sign.forces} accentDot={t.dot} accentText={t.text} />
                            <DetailList title={tr("challenges")} items={sign.defis} accentDot="bg-red-400" accentText="text-red-400" />
                            <DetailList title={tr("manifestations")} items={sign.manifestations} accentDot="bg-slate-400" accentText="text-slate-300" />
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </Section>
            )}

            {/* ============================================================ */}
            {/*  DANS LES MAISONS                                            */}
            {/* ============================================================ */}

            {has(planet.dansLesMaisons) && (
              <Section id="maisons">
                <SectionHeading
                  title={tr("housesTitle", { name: planet.name })}
                  subtitle={tr("housesSubtitle")}
                  icon={Target}
                  id="maisons"
                  accentDot={t.dot}
                  accentText={t.text}
                />
                <div className="space-y-6">
                  {planet.dansLesMaisons!.map((house, i) => (
                    <GlassCard key={i} accent={t} className="p-6 md:p-8" id={sectionId(`maison-${house.maison}`)}>
                      <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
                        <div className="flex flex-col items-center justify-center lg:w-[18%]">
                          <div className="font-serif text-7xl md:text-8xl leading-none text-white/10" aria-hidden="true">
                            {house.maison}
                          </div>
                          <div className={`-mt-1 font-serif text-lg ${t.text}`}>
                            {tr("house", { n: house.maison })}
                          </div>
                        </div>
                        <div className="lg:w-[82%]">
                          <h3 className="mb-3 font-serif text-2xl text-white">{house.titre}</h3>
                          <QuoteBlock text={house.resume} accentBorder={t.border} />
                          <div className="mt-6 grid gap-6 md:grid-cols-3">
                            <DetailList title={tr("potentials")} items={house.forces} accentDot={t.dot} accentText={t.text} />
                            <DetailList title={tr("shadowPoints")} items={house.defis} accentDot="bg-red-400" accentText="text-red-400" />
                            <DetailList title={tr("manifestations")} items={house.manifestations} accentDot="bg-slate-400" accentText="text-slate-300" />
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </Section>
            )}

            {/* ============================================================ */}
            {/*  ASPECTS                                                      */}
            {/* ============================================================ */}

            {has(planet.aspects) && (
              <Section id="aspects">
                <SectionHeading title={tr("aspectsTitle", { name: planet.name })} icon={Sparkles} id="aspects" accentDot={t.dot} accentText={t.text} />
                <div className="space-y-6">
                  {Object.entries(planet.aspects || {}).map(([key, aspect]) => (
                    <GlassCard key={key} accent={t} className="p-6 md:p-8" id={sectionId(`aspect-${key}`)}>
                      {/* Header */}
                      <div className="mb-6 flex flex-col items-center gap-4 border-b border-white/5 pb-6 md:flex-row md:justify-center">
                        <div className="flex items-center gap-3">
                         <Image
  src={thumbSrc}
  alt={tr("altAspect", { name: planet.name, aspect: aspect.titre ?? "" })}
  width={52}
  height={52}
  className="rounded-full"
/>

<span className="text-slate-600" aria-hidden={true}>×</span>

<Image
  src={planetThumbSrc(key)}
  alt={tr("altAspectWith", { key, name: planet.name, aspect: aspect.titre ?? "" })}
  width={52}
  height={52}
  className="rounded-full"
/>  </div>
                        <h3 className="font-serif text-2xl md:text-3xl text-white">{aspect.titre}</h3>
                      </div>

                      {aspect.resume && (
                        <p className="mx-auto mb-6 max-w-4xl text-center text-lg italic text-slate-400">{aspect.resume}</p>
                      )}

                      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
                        {([
                          { label: tr("aspConjunction"), value: aspect.conjonction, variant: "harmonious" as const },
                          { label: tr("aspSextile"), value: aspect.sextile, variant: "harmonious" as const },
                          { label: tr("aspSquare"), value: aspect.carre, variant: "tense" as const },
                          { label: tr("aspTrigone"), value: aspect.trigone, variant: "harmonious" as const },
                          { label: tr("aspOpposition"), value: aspect.opposition, variant: "tense" as const },
                        ])
                          .filter((a) => has(a.value))
                          .map((a) => (
                            <AspectCard key={a.label} label={a.label} text={a.value!} variant={a.variant} />
                          ))}
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </Section>
            )}

            {/* ──── DANS UN THÈME ──── */}
            {has(planet.dansUnTheme) && !has(planet.lecturePsychologiqueProfonde) && (
              <Section id="dans-un-theme">
                <SectionHeading title={tr("inThemeTitle")} icon={ScrollText} id="dans-un-theme" accentDot={t.dot} accentText={t.text} />
                <GlassCard accent={t} className="p-6 md:p-10">
                  <ProseBlock paragraphs={planet.dansUnTheme!} />
                </GlassCard>
              </Section>
            )}
          </div>

          {/* RIGHT: TOC sidebar (desktop) */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents sections={tocSections} accentText={t.text} title={tr("tocTitle")} contentsLabel={tr("tocContents")} />
            </div>
          </aside>
        </div>

        {/* ============================================================ */}
        {/*  FAQ                                                          */}
        {/* ============================================================ */}

        {has(planet.faq) && (
          <Section id="faq">
            <SectionHeading
              title={tr("faqTitle", { name: planet.name })}
              id="faq"
              accentDot={t.dot}
              accentText={t.text}
            />
            <div className="space-y-4">
              {planet.faq!.map((f, i) => (
                <details
                  key={i}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md"
                  {...(i === 0 ? { open: true } : {})}
                >
                  <summary className="cursor-pointer list-none p-6 font-serif text-lg font-medium text-white/90 [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center justify-between">
                      {f.question}
                      <span className={`ml-3 ${t.text} opacity-60 transition-transform group-open:rotate-45`}>+</span>
                    </span>
                  </summary>
                  <p className="px-6 pb-6 text-sm leading-relaxed text-slate-400 md:text-base">
                    {f.reponse}
                  </p>
                </details>
              ))}
            </div>
          </Section>
        )}

        {/* ============================================================ */}
        {/*  Articles liés (maillage pilier → blog — audit 07/2026)      */}
        {/* ============================================================ */}
        <RelatedArticles kind="planetes" slug={planet.slug} />

        {/* ============================================================ */}
        {/*  FOOTER / MOT-CLÉ + NAV                                      */}
        {/* ============================================================ */}

        <footer className={`mt-20 border-t pt-16 md:pt-20 ${t.border}`}>
          {(planet.motCle || planet.identite?.motCle) && (
            <div className="mb-14 text-center">
              <div className={`inline-flex rounded-full border px-8 py-5 md:px-12 md:py-7 ${t.border} ${t.bg}`}>
                <p className="font-serif text-3xl md:text-5xl uppercase tracking-[0.16em] text-white">
                  {planet.motCle || planet.identite?.motCle}
                </p>
              </div>
            </div>
          )}

          <PlanetNav
            prev={{
              name: prev.name,
              slug: prev.slug,
              subtitle: prev.identite?.motCle || prev.motCle,
              imageSrc: planetHeroSrc(prev.slug),
            }}
            next={{
              name: next.name,
              slug: next.slug,
              subtitle: next.identite?.motCle || next.motCle,
              imageSrc: planetHeroSrc(next.slug),
            }}
            labels={{
              nav: tr("navAria"),
              prev: tr("navPrev"),
              next: tr("navNext"),
              prevAria: tr("navPrevAria", { name: prev.name }),
              nextAria: tr("navNextAria", { name: next.name }),
            }}
          />
        </footer>
      </main>
    </div>
  );
}
