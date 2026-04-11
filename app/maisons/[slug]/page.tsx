import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { buildMeta, buildTitle, absoluteUrl, SITE_NAME } from "@/lib/seo";
import {
  HOUSES,
  PLANETS,
  getHouse,
  getHouseIndex,
  has,
  houseTheme,
  quadrantLabel,
  toRoman,
  buildBreadcrumbs,
  sectionId,
  planetInHouseText,
  planetInHouseKeywords,
  planetInHouseTitle,
} from "./helpers";

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

export const dynamicParams = false;

export function generateStaticParams() {
  return HOUSES.filter(
    (h) => typeof h.slug === "string" && h.slug.trim() !== ""
  ).map((h) => ({ slug: h.slug }));
}

/* ------------------------------------------------------------------ */
/*  Metadata + SEO                                                     */
/* ------------------------------------------------------------------ */

function clampMeta(s: string, max = 170) {
  const clean = s.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  const last = cut.lastIndexOf(".");
  return last > 80 ? cut.slice(0, last + 1) : cut.trimEnd() + "…";
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const house = getHouse(slug.toLowerCase());
  if (!house) return {};

  const titreCourt = house.titreCourt ?? `Maison ${toRoman(house.numero)}`;
  const title = buildTitle(
    `${titreCourt} en astrologie : signification, planètes et interprétation`
  );

  const arena = house.niveauLecture?.arena?.trim();
  const motsCles = (house.niveauLecture?.motsCles ?? []).slice(0, 3);
  const principaux = (house.domaines?.principaux ?? []).slice(0, 4);

  const description = clampMeta(
    `${titreCourt} (${house.nom}) : sens et interprétation. ` +
      (house.type ? `Maison ${house.type}. ` : "") +
      (arena ? `Thème : ${arena}. ` : "") +
      (motsCles.length ? `Mots-clés : ${motsCles.join(", ")}. ` : "") +
      (principaux.length ? `Domaines : ${principaux.join(", ")}. ` : "") +
      "Significations traditionnelles et modernes, les 10 planètes dans cette maison.",
    170
  );

  const keywords = [
    `maison ${house.numero}`,
    `maison ${toRoman(house.numero)}`,
    house.nom.toLowerCase(),
    "astrologie",
    "maison astrologique",
    ...(house.niveauLecture?.motsCles ?? []),
  ];

  return {
    ...buildMeta({
      title,
      description,
      canonicalPath: `/maisons/${house.slug}`,
      type: "article",
      ogImage: `/images/maisons/${toRoman(house.numero)}.webp`,
    }),
    keywords,
  };
}

/* ------------------------------------------------------------------ */
/*  Schema.org JSON-LD                                                 */
/* ------------------------------------------------------------------ */

function buildJsonLd(house: typeof HOUSES[number]) {
  const titreCourt = house.titreCourt ?? `Maison ${toRoman(house.numero)}`;
  const url = absoluteUrl(`/maisons/${house.slug}`);

  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: `${titreCourt} — ${house.nom}`,
      description:
        house.niveauLecture?.fonction ??
        `Étude approfondie de la ${titreCourt} en astrologie.`,
      url,
      image: absoluteUrl(`/images/maisons/hero/${toRoman(house.numero)}.webp`),
      author: { "@type": "Organization", name: SITE_NAME },
      publisher: { "@type": "Organization", name: SITE_NAME },
      inLanguage: "fr",
      mainEntityOfPage: url,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: buildBreadcrumbs(house).map((crumb, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: crumb.name,
        item: absoluteUrl(crumb.href),
      })),
    },
  ];
}

/* ------------------------------------------------------------------ */
/*  Dynamic TOC builder                                                */
/* ------------------------------------------------------------------ */

function buildTocSections(house: typeof HOUSES[number]) {
  const sections: Array<{ id: string; label: string }> = [];
  const push = (label: string) => sections.push({ id: sectionId(label), label });

  if (has(house.niveauLecture?.fonction)) push("Fonction");
  if (has(house.significationTraditionnelle)) push("Signification traditionnelle");
  if (has(house.conceptionModerne)) push("Conception moderne");
  if (has(house.niveauLecture?.questions)) push("Questions clés");
  if (has(house.domaines?.principaux) || has(house.domaines?.secondaires)) push("Domaines");
  if (has(house.polarites?.forces) || has(house.polarites?.ombres)) push("Repères");
  if (has(house.axeAnalyse)) push("Axe");
  if (has(house.triangle) || has(house.carre)) push("Triangle et Carré");
  if (has(house.pedagogie?.aRetenir)) push("Pédagogie");
  if (has(house.pratique?.phrasesCles)) push("Pratique");
  push("Planètes dans cette maison");

  return sections;
}

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */

export default async function HousePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const house = getHouse(slug);
  if (!house) notFound();

  const theme = houseTheme(house);
  const idx = getHouseIndex(house.slug);
  if (idx === -1) notFound();

  const prev = HOUSES[(idx - 1 + HOUSES.length) % HOUSES.length];
  const next = HOUSES[(idx + 1) % HOUSES.length];

  const titreCourt = house.titreCourt ?? `Maison ${toRoman(house.numero)}`;
  const heroSrc = `/images/maisons/hero/${toRoman(house.numero)}.webp`;
  const breadcrumbs = buildBreadcrumbs(house);
  const tocSections = buildTocSections(house);
  const jsonLd = buildJsonLd(house);

  const chips: Array<{ label: string; value?: string }> = [
    { label: "Axe", value: house.axe },
    { label: "Type", value: house.type },
    { label: "Quadrant", value: quadrantLabel(house.quadrant) },
    { label: "Arena", value: house.niveauLecture?.arena },
  ].filter((x): x is { label: string; value: string } => !!x.value);

  return (
    <>
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
        Aller au contenu principal
      </a>

      {/* Background aura */}
      <AuraGlow aura={theme.aura} />

      <div className="relative mx-auto max-w-6xl px-4 pb-16 sm:px-6">
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
                priority
                className="object-cover"
                sizes="(max-width:768px) 100vw, 1152px"
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
                {house.type ?? "cadente"}
              </span>
            </div>

            {/* Title over hero */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.18em] text-white/70">
                Maisons astrologiques
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
                  title="Fonction"
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
                  title="Signification traditionnelle"
                  subtitle="D'après Ptolémée, Fludd, Alchabitius, Gadbury"
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
                          En astrologie mondiale
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
                  title="Conception moderne"
                  subtitle="Synthèse contemporaine"
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
                  title="Questions clés"
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
                  title="Domaines"
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
                          Principaux
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
                          Secondaires
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
                          Dans la vie
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
                  title="Repères"
                  subtitle="Forces, ombres et besoins"
                  icon={Shield}
                  dot={theme.dot}
                  text={theme.text}
                  id={sectionId("Repères")}
                />
                <TriplePanels
                  panels={[
                    { label: "Forces", items: house.polarites?.forces },
                    { label: "Ombres", items: house.polarites?.ombres },
                    { label: "Besoins", items: house.polarites?.besoins },
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
                  title="Axe"
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
                  title="Triangle et Carré"
                  subtitle="Classification de Bailey"
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
                          Triangle
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
                          Carré
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
                  title="Pédagogie"
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
                          title="À retenir"
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
                          title="Erreurs fréquentes"
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
                          title="Repères d'interprétation"
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
                  title="Pratique"
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
                          title="Phrases clés"
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
                          title="Exemples concrets"
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
                          title="Exercices"
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

            {/* ---- Planètes dans cette maison ---- */}
            <Section id={sectionId("Planètes dans cette maison")}>
              <SectionHeading
                title="Planètes dans cette maison"
                subtitle={`Interprétation des 10 planètes en ${titreCourt}`}
                icon={Sparkles}
                dot={theme.dot}
                text={theme.text}
                id={sectionId("Planètes dans cette maison")}
              />
              <div className="grid gap-4 sm:grid-cols-2">
                {PLANETS.map((p) => (
                  <PlanetInHouseCard
                    key={p.slug}
                    planetName={p.name}
                    planetSlug={p.slug}
                    title={planetInHouseTitle(p, house)}
                    text={planetInHouseText(p, house)}
                    keywords={planetInHouseKeywords(p, house)}
                    border={theme.border}
                  />
                ))}
              </div>
            </Section>
          </div>

          {/* ---------- Sticky TOC sidebar ---------- */}
          <aside className="hidden lg:block">
            <TableOfContents sections={tocSections} text={theme.text} />
          </aside>
        </div>

        {/* Mobile TOC (above footer) */}
        <div className="mb-12 lg:hidden">
          <TableOfContents sections={tocSections} text={theme.text} />
        </div>

        {/* ============================================================ */}
        {/*  Footer nav                                                   */}
        {/* ============================================================ */}
        <footer className="border-t border-white/10 pt-10">
          <HouseNav
            prev={
              prev
                ? {
                    slug: prev.slug,
                    titreCourt: prev.titreCourt ?? `Maison ${toRoman(prev.numero)}`,
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
                    titreCourt: next.titreCourt ?? `Maison ${toRoman(next.numero)}`,
                    nom: next.nom,
                    numero: next.numero,
                    roman: toRoman(next.numero),
                  }
                : undefined
            }
            border={theme.border}
            ring={theme.ring}
          />

          <div className="mt-8 flex justify-center">
            <Link
              href="/#maisons"
              className={`rounded-full border ${theme.border} bg-white/5 px-5 py-2 text-sm text-text/90 transition hover:bg-white/10`}
            >
              ← Retour aux maisons
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}
