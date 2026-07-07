import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { notFound, permanentRedirect } from "next/navigation";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";

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
import {
  HOUSES,
  getHouse,
  getHouseIndex,
  getHousesForLocale,
  getPlanetsForLocale,
  has,
  houseTheme,
  toRoman,
  buildBreadcrumbs,
  sectionId,
  planetInHouseText,
  planetInHouseKeywords,
  planetInHouseTitle,
} from "./helpers";

/** Traducteur simplifié (namespace "house"). */
type T = (key: string, values?: Record<string, string | number>) => string;
type TR = T & {
  rich: (
    key: string,
    values?: Record<string, string | number | ((chunks: ReactNode) => ReactNode)>
  ) => ReactNode;
};

import {
  AuraGlow,
  Section,
  SectionHeading,
  GlassCard,
  ProseBlock,
  TagList,
  DetailList,
  TriplePanels,
  PlanetInHouseCard,
  TableOfContents,
  HouseNav,
  Breadcrumbs,
} from "./ui";
import { RelatedHouses } from "./RelatedHouses";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

import {
  Sparkles,
  Compass,
  Target,
  BookOpen,
  Brain,
  Shield,
  Activity,
  Layers,
  ScrollText,
  Scale,
  Star,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Static generation                                                  */
/* ------------------------------------------------------------------ */

// dynamicParams activé : slug d'une autre langue → 308 vers le slug localisé.

export function generateStaticParams({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return HOUSES.filter(
    (h) => typeof h.slug === "string" && h.slug.trim() !== ""
  ).map((h) => ({ slug: localizeSlug("maisons", h.slug, locale) }));
}

/* ------------------------------------------------------------------ */
/*  Metadata + SEO                                                     */
/* ------------------------------------------------------------------ */

function clampMeta(s: string, max = 155) {
  const clean = s.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  const last = cut.lastIndexOf(".");
  return last > 80 ? cut.slice(0, last + 1) : cut.trimEnd() + "…";
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const house = getHouse(canonicalSlug("maisons", slug.toLowerCase()), locale);
  if (!house) return {};

  const tr = (await getTranslations({ locale, namespace: "house" })) as T;
  const titreCourt =
    house.titreCourt ?? tr("houseShort", { roman: toRoman(house.numero) });
  const title = tr("metaTitle", { titreCourt });

  const arena = house.niveauLecture?.arena?.trim();
  const motsCles = (house.niveauLecture?.motsCles ?? []).slice(0, 3);
  const principaux = (house.domaines?.principaux ?? []).slice(0, 4);
  const typeLabel = house.type ? tr(`type.${house.type}`) : "";

  const description = clampMeta(
    tr("metaDescIntro", { titreCourt, nom: house.nom }) + " " +
      (house.type ? tr("metaDescType", { type: typeLabel }) + " " : "") +
      (arena ? tr("metaDescTheme", { arena }) + " " : "") +
      (motsCles.length ? tr("metaDescKeywords", { list: motsCles.join(", ") }) + " " : "") +
      (principaux.length ? tr("metaDescDomains", { list: principaux.join(", ") }) + " " : "") +
      tr("metaDescOutro"),
    155
  );

  // ✅ Suppression du champ `keywords` — Google ignore meta-keywords depuis 2009
  //    et leur présence envoie un signal "SEO d'il y a 15 ans". Audit 31/05/2026.

  return {
    ...buildMeta({
      title,
      description,
      canonicalPath: `/maisons/${house.slug}`,
      type: "article",
      ogImage: `/images/maisons/${toRoman(house.numero)}.webp`,
      locale,
      canonicalUrl: pillarUrl("maisons", house.slug, toSeoLocale(locale)),
      languages: pillarLanguageAlternates("maisons", house.slug),
    }),
    // ✅ Ahrefs "title too long" fix — on retire le suffixe " — Astro Cours"
    //    pour rester ≤ 60 chars (sinon 71 chars avec template).
    title: { absolute: title },
  };
}

/* ------------------------------------------------------------------ */
/*  Schema.org JSON-LD                                                 */
/* ------------------------------------------------------------------ */

function buildJsonLd(house: typeof HOUSES[number], locale: string, tr: T) {
  const titreCourt =
    house.titreCourt ?? tr("houseShort", { roman: toRoman(house.numero) });
  const url = absoluteUrl(`/maisons/${house.slug}`);
  const descFallback = tr("jsonldDescFallback", { titreCourt });

  return [{
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: tr("jsonldTopic", { titreCourt, nom: house.nom }),
        description: house.niveauLecture?.fonction ?? descFallback,
        url,
        image: absoluteUrl(`/images/maisons/hero/${toRoman(house.numero)}.webp`),
        author: AUTHOR_PERSON,
        publisher: PUBLISHER_ORG,
        datePublished: "2026-04-09T12:00:00Z",
        // ✅ Audit 31/05/2026 — dateModified dynamique sur le champ `updated` du JSON
        dateModified: house.updated
          ? `${house.updated}T12:00:00Z`
          : "2026-05-31T12:00:00Z",
        inLanguage: locale,
        mainEntityOfPage: url,
      },
      buildCourseNode({
        path: `/maisons/${house.slug}`,
        name: tr("jsonldCourseName", { titreCourt, nom: house.nom }),
        description: house.niveauLecture?.fonction ?? descFallback,
        image: `/images/maisons/hero/${toRoman(house.numero)}.webp`,
        teaches: tr("jsonldTeaches", { titreCourt }),
        topicName: tr("jsonldTopic", { titreCourt, nom: house.nom }),
      }),
      {
        "@type": "BreadcrumbList",
        itemListElement: buildBreadcrumbs(house, {
          home: tr("bcHome"),
          houses: tr("bcHouses"),
        }).map((crumb, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: crumb.name,
          item: absoluteUrl(crumb.href),
        })),
      },
      ...(house.faq && house.faq.length > 0
        ? [
            {
              "@type": "FAQPage",
              mainEntity: house.faq.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: { "@type": "Answer", text: f.reponse },
              })),
            },
          ]
        : []),
    ],
  }];
}

/* ------------------------------------------------------------------ */
/*  Dynamic TOC builder                                                */
/* ------------------------------------------------------------------ */

function buildTocSections(house: typeof HOUSES[number], tr: T) {
  const sections: Array<{ id: string; label: string }> = [];
  // id dérivé du libellé FR (anchors stables, identiques aux Section ids) ;
  // affichage via le namespace house.toc.
  const push = (frLabel: string, tocKey: string) =>
    sections.push({ id: sectionId(frLabel), label: tr(`toc.${tocKey}`) });

  if (has(house.niveauLecture?.fonction)) push("Fonction", "fonction");
  if (has(house.significationTraditionnelle)) push("Signification traditionnelle", "tradi");
  if (has(house.conceptionModerne)) push("Conception moderne", "moderne");
  if (has(house.niveauLecture?.questions)) push("Questions clés", "questions");
  if (has(house.domaines?.principaux) || has(house.domaines?.secondaires)) push("Domaines", "domaines");
  if (has(house.polarites?.forces) || has(house.polarites?.ombres)) push("Repères", "reperes");
  if (has(house.axeAnalyse)) push("Axe", "axe");
  if (has(house.triangle) || has(house.carre)) push("Triangle et Carré", "triangleCarre");
  if (has(house.pedagogie?.aRetenir)) push("Pédagogie", "pedagogie");
  if (has(house.pratique?.phrasesCles)) push("Pratique", "pratique");
  // ✅ Audit 31/05/2026 — nouvelles sections enrichies
  if (has(house.vieQuotidienne)) push("Au quotidien", "quotidien");
  if (has(house.carriere)) push("Carrière et argent", "carriere");
  if (has(house.transitsNotables)) push("Transits notables", "transits");
  if (has(house.exercicePratique)) push("Exercice approfondi", "exercice");
  if (has(house.personnagesEmblematiques)) push("Personnages emblématiques", "personnages");
  push("Planètes dans cette maison", "planetes");

  if (has(house.faq))
    sections.push({ id: "faq", label: tr("toc.faq") });

  return sections;
}

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */

export default async function HousePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const houses = getHousesForLocale(locale);
  const planets = getPlanetsForLocale(locale);
  const house = houses.find((h) => h.slug === canonicalSlug("maisons", slug));
  if (!house) notFound();

  // Slug d'une autre langue sous ce segment → 308 vers le slug localisé canonique.
  const locHouse = toSeoLocale(locale);
  const expectedHouse = localizeSlug("maisons", house.slug, locHouse);
  if (slug.toLowerCase() !== expectedHouse) permanentRedirect(pillarUrl("maisons", house.slug, locHouse));

  const tr = (await getTranslations({ locale, namespace: "house" })) as TR;

  const theme = houseTheme(house);
  const idx = houses.findIndex((h) => h.slug === house.slug);
  if (idx === -1) notFound();

  const prev = houses[(idx - 1 + houses.length) % houses.length];
  const next = houses[(idx + 1) % houses.length];

  const titreCourt =
    house.titreCourt ?? tr("houseShort", { roman: toRoman(house.numero) });
  const typeLabel = tr(`type.${house.type ?? "cadente"}`);
  const heroSrc = `/images/maisons/hero/${toRoman(house.numero)}.webp`;
  const breadcrumbs = buildBreadcrumbs(house, {
    home: tr("bcHome"),
    houses: tr("bcHouses"),
  });
  const tocSections = buildTocSections(house, tr);
  const jsonLd = buildJsonLd(house, locale, tr);

  const chips: Array<{ label: string; value?: string }> = [
    { label: tr("chipAxe"), value: house.axe },
    { label: tr("chipType"), value: typeLabel },
    { label: tr("chipQuadrant"), value: house.quadrant ? tr(`quadrant.${house.quadrant}`) : undefined },
    { label: tr("chipArena"), value: house.niveauLecture?.arena },
  ].filter((x): x is { label: string; value: string } => !!x.value);

  /* ------------------------------------------------------------------ */
  /*  LCP preload — Audit Lighthouse 31/05/2026                          */
  /*  Next.js 16 + <Image priority> insère bien un <link rel="preload">  */
  /*  mais SANS fetchpriority="high" → Lighthouse râle. On reproduit ici */
  /*  exactement le preload manuel d'ImageOnly.tsx (homepage) avec       */
  /*  fetchPriority="high". React 19 hisse automatiquement les <link>    */
  /*  en <head>. On retire `priority` côté <Image /> ci-dessous pour     */
  /*  éviter un double preload concurrent.                               */
  /* ------------------------------------------------------------------ */
  const LCP_SRC_ENC = encodeURIComponent(heroSrc);
  const LCP_DEVICE_SIZES = [640, 750, 828, 1080, 1200, 1920] as const;
  const lcpImageSrcSet = LCP_DEVICE_SIZES.map(
    (w) => `/_next/image?url=${LCP_SRC_ENC}&w=${w}&q=75 ${w}w`,
  ).join(", ");

  return (
    <>
      {/* ✅ Preload LCP avec fetchpriority="high" (hissé en <head> par React 19) */}
      <link
        rel="preload"
        as="image"
        imageSrcSet={lcpImageSrcSet}
        imageSizes="(max-width:768px) 100vw, 1152px"
        fetchPriority="high"
      />

      {/* Schema.org JSON-LD */}
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Skip link */}
      <a
        href="#contenu-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-black focus:shadow-lg"
      >
        {tr("skipToContent")}
      </a>

      {/* Background aura */}
      <AuraGlow aura={theme.aura} />

      <main id="main-content" className="relative mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbs} />

        {/* ============================================================ */}
        {/*  HERO                                                        */}
        {/* ============================================================ */}
        <section className="mb-12">
          <div
            className={`relative overflow-hidden rounded-[2.5rem] border ${theme.border} bg-white/5`}
          >
            <div className="relative h-[38vh] min-h-[320px] w-full">
              <Image
                src={heroSrc}
                alt={`${titreCourt} — ${house.nom}`}
                fill
                /* alt localisé via titreCourt/nom localisés */
                // `priority` retiré (cf. preload manuel + fetchPriority en haut
                // du composant). On reproduit ses deux autres effets ici :
                fetchPriority="high"
                loading="eager"
                className="object-cover"
                sizes="(max-width:768px) 100vw, 1152px"
                quality={75}
              />
            </div>

            {/* Gradient overlays */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_10%,rgba(255,255,255,0.14),transparent_55%)]" />

            {/* Type badge */}
            <div className="absolute right-5 top-5 sm:right-7 sm:top-7">
              <span
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm ${theme.pill} backdrop-blur`}
              >
                <span className={`h-2 w-2 rounded-full ${theme.dot}`} />
                {typeLabel}
              </span>
            </div>

            {/* Title over hero */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.18em] text-white/70">
                {tr("heroEyebrow")}
              </p>
              <h1 className="mt-2 font-serif text-4xl text-white sm:text-5xl">
                {titreCourt}{" "}
                <span className="text-white/70">— {house.nom}</span>
              </h1>
              {house.niveauLecture?.arena && (
                <p className="mt-3 max-w-2xl text-sm text-white/80">
                  {house.niveauLecture.arena}
                </p>
              )}
            </div>
          </div>

          {/* Chips + keywords card */}
          <header
            className={`mt-6 rounded-3xl border ${theme.border} bg-white/[0.02] p-6 backdrop-blur`}
          >
            {chips.length > 0 && (
              <div className="flex flex-wrap gap-2 text-sm">
                {chips.map((c) => (
                  <span
                    key={c.label}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-text/90"
                  >
                    <span className="text-muted">{c.label} :</span> {c.value}
                  </span>
                ))}
              </div>
            )}
            {has(house.niveauLecture?.motsCles) && (
              <div className="mt-4">
                <TagList
                  items={house.niveauLecture!.motsCles!}
                  border={theme.border}
                  text={theme.text}
                />
              </div>
            )}
          </header>
        </section>

        {/* ━━━━━━━━━━━ DÉFINITION SEO (Featured Snippet) ━━━━━━━━━━━ */}
        <div className="mb-12">
          <div className={`rounded-2xl border ${theme.border} bg-white/[0.04] px-6 py-5`}>
            <p className={`text-sm font-semibold uppercase tracking-widest ${theme.text} opacity-80`}>
              {tr("definitionLabel")}
            </p>
            <p className="mt-2 text-base leading-relaxed text-text/85 sm:text-lg">
              {tr("defIntro")} <strong>{titreCourt}</strong> ({house.nom}) {tr("defIs")}{" "}
              {tr("defType", { type: typeLabel })} {tr("defOfThe")}{" "}
              <Link href="/theme-astral" className={`underline decoration-1 underline-offset-2 ${theme.text}`}>{tr("defNatalChart")}</Link>.
              {house.niveauLecture?.arena && <> {tr("defDomain")} <strong>{house.niveauLecture.arena.toLowerCase()}</strong>.</>}
              {house.axe && <> {tr("defAxis")} <strong>{house.axe}</strong>.</>}
            </p>
          </div>

          {/* APP Intro */}
          <p className="mt-8 text-base leading-relaxed text-text/75 sm:text-lg">
            {tr.rich("appIntro", {
              titreCourt,
              nom: house.nom.toLowerCase(),
              b: (chunks: ReactNode) => <strong>{chunks}</strong>,
            })}
          </p>
        </div>

        {/* ============================================================ */}
        {/*  MAIN LAYOUT: content + sticky TOC                           */}
        {/* ============================================================ */}
        <div
          id="contenu-principal"
          className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-10"
        >
          {/* ---------- Content column ---------- */}
          <div className="min-w-0">
            {/* ---- Fonction ---- */}
            {has(house.niveauLecture?.fonction) && (
              <Section id={sectionId("Fonction")}>
                <SectionHeading
                  title={tr("functionTitle", { titreCourt })}
                  subtitle={house.niveauLecture?.arena}
                  icon={Target}
                  dot={theme.dot}
                  text={theme.text}
                  id={sectionId("Fonction")}
                />
                <GlassCard border={theme.border}>
                  <div className="p-6 md:p-8">
                    <ProseBlock text={house.niveauLecture!.fonction!} />
                    {has(house.niveauLecture?.verbes) && (
                      <div className="mt-6">
                        <TagList
                          items={house.niveauLecture!.verbes!}
                          border={theme.border}
                          text={theme.text}
                        />
                      </div>
                    )}
                  </div>
                </GlassCard>
              </Section>
            )}

            {/* ---- Signification traditionnelle ---- */}
            {has(house.significationTraditionnelle) && (
              <Section id={sectionId("Signification traditionnelle")}>
                <SectionHeading
                  title={tr("tradTitle", { titreCourt })}
                  subtitle={tr("tradSubtitle")}
                  icon={ScrollText}
                  dot={theme.dot}
                  text={theme.text}
                  id={sectionId("Signification traditionnelle")}
                />
                <GlassCard border={theme.border}>
                  <div className="p-6 md:p-8">
                    <ProseBlock text={house.significationTraditionnelle!} />
                    {has(house.sensSocial) && (
                      <div className={`mt-6 rounded-2xl border ${theme.border} bg-white/[0.02] p-5`}>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
                          {tr("mundaneLabel")}
                        </p>
                        <p className="text-sm leading-relaxed text-text/85">
                          {house.sensSocial}
                        </p>
                      </div>
                    )}
                  </div>
                </GlassCard>
              </Section>
            )}

            {/* ---- Conception moderne ---- */}
            {has(house.conceptionModerne) && (
              <Section id={sectionId("Conception moderne")}>
                <SectionHeading
                  title={tr("modernTitle", { titreCourt })}
                  subtitle={tr("modernSubtitle")}
                  icon={Brain}
                  dot={theme.dot}
                  text={theme.text}
                  id={sectionId("Conception moderne")}
                />
                <GlassCard border={theme.border}>
                  <div className="p-6 md:p-8">
                    <ProseBlock text={house.conceptionModerne!} />
                  </div>
                </GlassCard>
              </Section>
            )}

            {/* ---- Questions clés ---- */}
            {has(house.niveauLecture?.questions) && (
              <Section id={sectionId("Questions clés")}>
                <SectionHeading
                  title={tr("questionsTitle", { titreCourt })}
                  icon={Compass}
                  dot={theme.dot}
                  text={theme.text}
                  id={sectionId("Questions clés")}
                />
                <GlassCard border={theme.border}>
                  <div className="p-6 md:p-8">
                    <ul className="space-y-3">
                      {house.niveauLecture!.questions!.map((q, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span
                            className={`mt-2 h-2 w-2 shrink-0 rounded-full ${theme.dot}`}
                            aria-hidden="true"
                          />
                          <span className="text-sm text-text/85 md:text-base">{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlassCard>
              </Section>
            )}

            {/* ---- Domaines ---- */}
            {(has(house.domaines?.principaux) ||
              has(house.domaines?.secondaires) ||
              has(house.domaines?.dansLaVie)) && (
              <Section id={sectionId("Domaines")}>
                <SectionHeading
                  title={tr("domainsTitle", { titreCourt })}
                  icon={Layers}
                  dot={theme.dot}
                  text={theme.text}
                  id={sectionId("Domaines")}
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  {has(house.domaines?.principaux) && (
                    <GlassCard border={theme.border}>
                      <div className="p-6">
                        <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted">
                          {tr("domMain")}
                        </p>
                        <TagList
                          items={house.domaines!.principaux!}
                          border={theme.border}
                          text={theme.text}
                        />
                      </div>
                    </GlassCard>
                  )}
                  {has(house.domaines?.secondaires) && (
                    <GlassCard border={theme.border}>
                      <div className="p-6">
                        <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted">
                          {tr("domSecondary")}
                        </p>
                        <TagList
                          items={house.domaines!.secondaires!}
                          border={theme.border}
                          text={theme.text}
                        />
                      </div>
                    </GlassCard>
                  )}
                  {has(house.domaines?.dansLaVie) && (
                    <GlassCard border={theme.border} className="sm:col-span-2">
                      <div className="p-6">
                        <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted">
                          {tr("domInLife")}
                        </p>
                        <TagList
                          items={house.domaines!.dansLaVie!}
                          border={theme.border}
                          text={theme.text}
                        />
                      </div>
                    </GlassCard>
                  )}
                </div>
              </Section>
            )}

            {/* ---- Repères (Forces / Ombres / Besoins) ---- */}
            {(has(house.polarites?.forces) ||
              has(house.polarites?.ombres) ||
              has(house.polarites?.besoins)) && (
              <Section id={sectionId("Repères")}>
                <SectionHeading
                  title={tr("polaritiesTitle", { titreCourt })}
                  subtitle={tr("polaritiesSubtitle")}
                  icon={Shield}
                  dot={theme.dot}
                  text={theme.text}
                  id={sectionId("Repères")}
                />
                <TriplePanels
                  panels={[
                    { label: tr("pForces"), items: house.polarites?.forces },
                    { label: tr("pOmbres"), items: house.polarites?.ombres },
                    { label: tr("pBesoins"), items: house.polarites?.besoins },
                  ]}
                  border={theme.border}
                  dot={theme.dot}
                />
              </Section>
            )}

            {/* ---- Axe ---- */}
            {has(house.axeAnalyse) && (
              <Section id={sectionId("Axe")}>
                <SectionHeading
                  title={tr("axisTitle", { nom: house.axeAnalyse!.nom })}
                  subtitle={house.axeAnalyse!.nom}
                  icon={Scale}
                  dot={theme.dot}
                  text={theme.text}
                  id={sectionId("Axe")}
                />
                <GlassCard border={theme.border}>
                  <div className="p-6 md:p-8">
                    <ProseBlock text={house.axeAnalyse!.description} />
                  </div>
                </GlassCard>
              </Section>
            )}

            {/* ---- Triangle et Carré ---- */}
            {(has(house.triangle) || has(house.carre)) && (
              <Section id={sectionId("Triangle et Carré")}>
                <SectionHeading
                  title={tr("triSquareTitle", { titreCourt })}
                  subtitle={tr("triSquareSubtitle")}
                  icon={Star}
                  dot={theme.dot}
                  text={theme.text}
                  id={sectionId("Triangle et Carré")}
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  {has(house.triangle) && (
                    <GlassCard border={theme.border}>
                      <div className="p-6">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
                          {tr("triLabel")}
                        </p>
                        <p className={`mb-3 font-serif text-xl ${theme.text}`}>
                          {house.triangle!.nom}
                        </p>
                        <p className="text-sm text-text/85">
                          {house.triangle!.role}
                        </p>
                      </div>
                    </GlassCard>
                  )}
                  {has(house.carre) && (
                    <GlassCard border={theme.border}>
                      <div className="p-6">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
                          {tr("squareLabel")}
                        </p>
                        <p className={`mb-3 font-serif text-xl ${theme.text}`}>
                          {house.carre!.nom}
                        </p>
                        <p className="text-sm text-text/85">
                          {house.carre!.role}
                        </p>
                      </div>
                    </GlassCard>
                  )}
                </div>
              </Section>
            )}

            {/* ---- Pédagogie ---- */}
            {(has(house.pedagogie?.aRetenir) ||
              has(house.pedagogie?.erreursFrequences) ||
              has(house.pedagogie?.repereInterpretation)) && (
              <Section id={sectionId("Pédagogie")}>
                <SectionHeading
                  title={tr("pedagogyTitle", { titreCourt })}
                  icon={BookOpen}
                  dot={theme.dot}
                  text={theme.text}
                  id={sectionId("Pédagogie")}
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  {has(house.pedagogie?.aRetenir) && (
                    <GlassCard border={theme.border}>
                      <div className="p-6">
                        <DetailList
                          title={tr("pedRetenir")}
                          items={house.pedagogie!.aRetenir}
                          dot={theme.dot}
                          text={theme.text}
                        />
                      </div>
                    </GlassCard>
                  )}
                  {has(house.pedagogie?.erreursFrequences) && (
                    <GlassCard border={theme.border}>
                      <div className="p-6">
                        <DetailList
                          title={tr("pedErreurs")}
                          items={house.pedagogie!.erreursFrequences}
                          dot={theme.dot}
                          text={theme.text}
                        />
                      </div>
                    </GlassCard>
                  )}
                  {has(house.pedagogie?.repereInterpretation) && (
                    <GlassCard border={theme.border} className="sm:col-span-2">
                      <div className="p-6">
                        <DetailList
                          title={tr("pedReperes")}
                          items={house.pedagogie!.repereInterpretation}
                          dot={theme.dot}
                          text={theme.text}
                        />
                      </div>
                    </GlassCard>
                  )}
                </div>
              </Section>
            )}

            {/* ---- Pratique ---- */}
            {(has(house.pratique?.phrasesCles) ||
              has(house.pratique?.exemplesConcrets) ||
              has(house.pratique?.exercices)) && (
              <Section id={sectionId("Pratique")}>
                <SectionHeading
                  title={tr("practiceTitle", { titreCourt })}
                  icon={Activity}
                  dot={theme.dot}
                  text={theme.text}
                  id={sectionId("Pratique")}
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  {has(house.pratique?.phrasesCles) && (
                    <GlassCard border={theme.border}>
                      <div className="p-6">
                        <DetailList
                          title={tr("pPhrases")}
                          items={house.pratique!.phrasesCles}
                          dot={theme.dot}
                          text={theme.text}
                        />
                      </div>
                    </GlassCard>
                  )}
                  {has(house.pratique?.exemplesConcrets) && (
                    <GlassCard border={theme.border}>
                      <div className="p-6">
                        <DetailList
                          title={tr("pExemples")}
                          items={house.pratique!.exemplesConcrets}
                          dot={theme.dot}
                          text={theme.text}
                        />
                      </div>
                    </GlassCard>
                  )}
                  {has(house.pratique?.exercices) && (
                    <GlassCard border={theme.border} className="sm:col-span-2">
                      <div className="p-6">
                        <DetailList
                          title={tr("pExercices")}
                          items={house.pratique!.exercices}
                          dot={theme.dot}
                          text={theme.text}
                        />
                      </div>
                    </GlassCard>
                  )}
                </div>
              </Section>
            )}

            {/* ============================================================ */}
            {/*  ⚠️ Audit 31/05/2026 — W4/R2 : sections enrichies            */}
            {/*  Original par maison : ~1500 mots ajoutés.                   */}
            {/* ============================================================ */}

            {/* ---- Au quotidien ---- */}
            {has(house.vieQuotidienne) && (
              <Section id={sectionId("Au quotidien")}>
                <SectionHeading
                  title={tr("dailyTitle", { titreCourt })}
                  subtitle={tr("dailySubtitle")}
                  icon={Activity}
                  dot={theme.dot}
                  text={theme.text}
                  id={sectionId("Au quotidien")}
                />
                <GlassCard border={theme.border}>
                  <div className="p-6 md:p-8">
                    <ProseBlock text={house.vieQuotidienne!} />
                  </div>
                </GlassCard>
              </Section>
            )}

            {/* ---- Carrière et argent ---- */}
            {has(house.carriere) && (
              <Section id={sectionId("Carrière et argent")}>
                <SectionHeading
                  title={tr("careerTitle", { titreCourt })}
                  subtitle={tr("careerSubtitle")}
                  icon={Compass}
                  dot={theme.dot}
                  text={theme.text}
                  id={sectionId("Carrière et argent")}
                />
                <GlassCard border={theme.border}>
                  <div className="p-6 md:p-8">
                    <ProseBlock text={house.carriere!.texte} />
                    {has(house.carriere?.metiers) && (
                      <div className="mt-6">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">
                          {tr("careerJobs")}
                        </p>
                        <TagList
                          items={house.carriere!.metiers!}
                          border={theme.border}
                          text={theme.text}
                        />
                      </div>
                    )}
                  </div>
                </GlassCard>
              </Section>
            )}

            {/* ---- Transits notables ---- */}
            {has(house.transitsNotables) && (
              <Section id={sectionId("Transits notables")}>
                <SectionHeading
                  title={tr("transitsTitle", { titreCourt })}
                  subtitle={tr("transitsSubtitle")}
                  icon={Star}
                  dot={theme.dot}
                  text={theme.text}
                  id={sectionId("Transits notables")}
                />
                <GlassCard border={theme.border}>
                  <div className="p-6 md:p-8">
                    <ProseBlock text={house.transitsNotables!} />
                  </div>
                </GlassCard>
              </Section>
            )}

            {/* ---- Exercice approfondi ---- */}
            {has(house.exercicePratique) && (
              <Section id={sectionId("Exercice approfondi")}>
                <SectionHeading
                  title={tr("exerciseTitle", { titre: house.exercicePratique!.titre })}
                  subtitle={tr("exerciseSubtitle")}
                  icon={Brain}
                  dot={theme.dot}
                  text={theme.text}
                  id={sectionId("Exercice approfondi")}
                />
                <GlassCard border={theme.border}>
                  <div className="p-6 md:p-8">
                    <ol className="space-y-4">
                      {house.exercicePratique!.etapes.map((etape, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <span
                            className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border ${theme.border} bg-white/[0.04] text-sm font-semibold ${theme.text}`}
                          >
                            {i + 1}
                          </span>
                          <span className="text-sm leading-relaxed text-text/85 md:text-base">
                            {etape}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </GlassCard>
              </Section>
            )}

            {/* ---- Personnages emblématiques ---- */}
            {has(house.personnagesEmblematiques) && (
              <Section id={sectionId("Personnages emblématiques")}>
                <SectionHeading
                  title={tr("figuresTitle", { titreCourt })}
                  subtitle={tr("figuresSubtitle")}
                  icon={ScrollText}
                  dot={theme.dot}
                  text={theme.text}
                  id={sectionId("Personnages emblématiques")}
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  {house.personnagesEmblematiques!.map((p, i) => (
                    <GlassCard key={i} border={theme.border}>
                      <div className="p-6">
                        <p className={`font-serif text-lg ${theme.text}`}>{p.nom}</p>
                        {p.naissance && (
                          <p className="mt-1 text-xs uppercase tracking-wide text-muted">
                            {tr("figuresBorn", { date: p.naissance })}
                          </p>
                        )}
                        <p className="mt-3 text-sm leading-relaxed text-text/85">
                          {p.raison}
                        </p>
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </Section>
            )}

            {/* ---- Planètes dans cette maison ---- */}
            <Section id={sectionId("Planètes dans cette maison")}>
              <SectionHeading
                title={tr("planetsTitle", { titreCourt })}
                subtitle={tr("planetsSubtitle")}
                icon={Sparkles}
                dot={theme.dot}
                text={theme.text}
                id={sectionId("Planètes dans cette maison")}
              />
              <div className="grid gap-4 sm:grid-cols-2">
                {planets.map((p) => (
                  <PlanetInHouseCard
                    key={p.slug}
                    planetName={p.name}
                    planetSlug={p.slug}
                    title={planetInHouseTitle(p, house, tr("planetInHouse", { planet: p.name, house: titreCourt }))}
                    text={planetInHouseText(p, house)}
                    keywords={planetInHouseKeywords(p, house)}
                    border={theme.border}
                  />
                ))}
              </div>
            </Section>
          </div>

          {/* ---------- TOC sidebar (responsive géré en interne) ---------- */}
          {/* ⚠️ Audit 31/05/2026 : le composant TableOfContents rend déjà
                 deux variantes (mobile details + desktop sticky) via Tailwind.
                 On n'enveloppe plus avec <aside lg:block> + <div lg:hidden> :
                 ça créait 4 versions du sommaire dans le DOM (signal
                 near-duplicate côté Google). */}
          <aside>
            <TableOfContents sections={tocSections} text={theme.text} title={tr("tocTitle")} />
          </aside>
        </div>

        {/* ============================================================ */}
        {/*  FAQ                                                          */}
        {/* ============================================================ */}
        {has(house.faq) && (
          <Section id="faq">
            <SectionHeading
              title={tr("faqTitle", { titreCourt })}
              dot={theme.dot}
              text={theme.text}
              id="faq"
            />
            <div className="space-y-4">
              {house.faq!.map((f, i) => (
                <details
                  key={i}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md"
                  {...(i === 0 ? { open: true } : {})}
                >
                  <summary className="cursor-pointer list-none p-6 font-serif text-lg font-medium text-white/90 [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center justify-between">
                      {f.question}
                      <span className={`ml-3 ${theme.text} opacity-60 transition-transform group-open:rotate-45`}>+</span>
                    </span>
                  </summary>
                  <p className="px-6 pb-6 text-sm leading-relaxed text-text/75 md:text-base">
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
        <RelatedArticles kind="maisons" slug={house.slug} />

        {/* ============================================================ */}
        {/*  Maisons connexes (maillage interne sémantique)              */}
        {/* ============================================================ */}
        <RelatedHouses
          house={house}
          houses={houses}
          border={theme.border}
          text={theme.text}
          dot={theme.dot}
          tr={tr}
        />

        {/* ============================================================ */}
        {/*  Footer nav                                                   */}
        {/* ============================================================ */}
        <footer className="border-t border-white/10 pt-10">
          <HouseNav
            prev={
              prev
                ? {
                    slug: prev.slug,
                    titreCourt: prev.titreCourt ?? tr("houseShort", { roman: toRoman(prev.numero) }),
                    nom: prev.nom,
                    numero: prev.numero,
                    roman: toRoman(prev.numero),
                  }
                : undefined
            }
            next={
              next
                ? {
                    slug: next.slug,
                    titreCourt: next.titreCourt ?? tr("houseShort", { roman: toRoman(next.numero) }),
                    nom: next.nom,
                    numero: next.numero,
                    roman: toRoman(next.numero),
                  }
                : undefined
            }
            border={theme.border}
            ring={theme.ring}
            labels={{
              nav: tr("navAria"),
              prev: tr("navPrev"),
              next: tr("navNext"),
              prevAria: prev ? tr("navPrevAria", { titreCourt: prev.titreCourt ?? tr("houseShort", { roman: toRoman(prev.numero) }) }) : "",
              nextAria: next ? tr("navNextAria", { titreCourt: next.titreCourt ?? tr("houseShort", { roman: toRoman(next.numero) }) }) : "",
            }}
          />

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/maisons"
              className={`rounded-full border ${theme.border} bg-white/5 px-5 py-2 text-sm text-text/90 transition hover:bg-white/10`}
            >
              {tr("backToHouses")}
            </Link>
            <Link
              href="/maisons-dominantes"
              className={`rounded-full border ${theme.border} bg-white/5 px-5 py-2 text-sm text-text/90 transition hover:bg-white/10`}
            >
              {locHouse === "en"
                ? "Dominant houses"
                : locHouse === "es"
                ? "Casas dominantes"
                : "Les maisons dominantes"}
            </Link>
          </div>
        </footer>
      </main>
    </>
  );
}
