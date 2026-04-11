import Image from "next/image";
import { notFound } from "next/navigation";

import type { Metadata } from "next";

import { buildMeta, buildTitle, absoluteUrl, SITE_NAME } from "@/lib/seo";
import {
  PLANETS,
  getPlanet,
  getPlanetIndex,
  has,
  planetTheme,
  planetThumbSrc,
  planetHeroSrc,
  normalizeDignitesExpliquees,
  buildBreadcrumbs,
  sectionId,
} from "./helpers";

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
  Breadcrumbs,
  TableOfContents,
} from "./ui";

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

export const dynamicParams = false;

export function generateStaticParams() {
  return PLANETS.filter(
    (p) => typeof p.slug === "string" && p.slug.trim() !== ""
  ).map((p) => ({ slug: p.slug }));
}

/* ------------------------------------------------------------------ */
/*  Metadata + SEO                                                     */
/* ------------------------------------------------------------------ */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const planet = getPlanet(slug.toLowerCase());
  if (!planet) return {};

  const title = buildTitle(
    `${planet.name} en astrologie : symbolique, signes, maisons et aspects`
  );
  const description =
    planet.identite?.symbolique?.slice(0, 155) ||
    `Étude approfondie de ${planet.name} en astrologie : symbolisme, interprétation dans les signes, les maisons et les aspects.`;

  return {
    ...buildMeta({
      title,
      description,
      canonicalPath: `/planetes/${planet.slug}`,
      type: "article",
      ogImage: planetHeroSrc(planet.slug),
    }),
    keywords: [
      `${planet.name} astrologie`,
      `${planet.name} thème natal`,
      `${planet.name} dans les signes`,
      `${planet.name} dans les maisons`,
      `aspects ${planet.name}`,
      "astrologie",
      "thème natal",
      "interprétation astrologique",
    ],
    alternates: {
      canonical: absoluteUrl(`/planetes/${planet.slug}`),
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Schema.org JSON-LD                                                 */
/* ------------------------------------------------------------------ */

function buildJsonLd(planet: ReturnType<typeof getPlanet>) {
  if (!planet) return null;

  const heroSrc = planetHeroSrc(planet.slug);

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${planet.name} en astrologie : symbolique et interprétation complète`,
    description:
      planet.identite?.symbolique ||
      `Étude approfondie de ${planet.name} en astrologie.`,
    image: [absoluteUrl(heroSrc)],
    author: { "@type": "Person", name: "Stéphane Gamot" },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: "https://www.astro-cours.com",
    },
    mainEntityOfPage: absoluteUrl(`/planetes/${planet.slug}`),
    inLanguage: "fr",
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: buildBreadcrumbs(planet).map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };

  return [article, breadcrumb];
}

/* ------------------------------------------------------------------ */
/*  Build sections list for TOC                                        */
/* ------------------------------------------------------------------ */

function buildTocSections(planet: NonNullable<ReturnType<typeof getPlanet>>) {
  const sections: { id: string; label: string }[] = [];

  sections.push({ id: "archetype", label: "L'archétype sacré" });

  if (has(planet.introductionLongue))
    sections.push({ id: "genese", label: "La genèse" });

  if (has(planet.fonctionEssentielle))
    sections.push({ id: "fonction", label: "Fonction essentielle" });

  if (has(planet.mythologie))
    sections.push({ id: "mythologie", label: "Mythologie" });

  sections.push({ id: "psyche", label: "La psyché humaine" });

  if (has(planet.lecturePsychologiqueProfonde) || has(planet.dansUnTheme))
    sections.push({ id: "profondeur", label: "Analyse de profondeur" });

  if (has(planet.rapportAuPere) || has(planet.rapportPereAutorite))
    sections.push({ id: "pere-autorite", label: "Père et autorité" });

  if (has(planet.champsExperience))
    sections.push({ id: "champs", label: "Champs d'expérience" });

  if (has(planet.etatFortFaible))
    sections.push({ id: "configurations", label: "Configurations" });

  if (has(planet.correspondances))
    sections.push({ id: "correspondances", label: "Correspondances" });

  if (has(planet.medical))
    sections.push({ id: "medical", label: "Plan médical" });

  if (has(planet.social))
    sections.push({ id: "social", label: "Sociabilité" });

  if (has(planet.apparence))
    sections.push({ id: "apparence", label: "Apparence physique" });

  if (has(planet.portraitDuSolarien))
    sections.push({ id: "portrait", label: "Portrait" });

  if (has(planet.professions))
    sections.push({ id: "professions", label: "Professions" });

  if (has(planet.destinSentimental))
    sections.push({ id: "destin-sentimental", label: "Destin sentimental" });

  if (has(planet.destinFinancier))
    sections.push({ id: "destin-financier", label: "Destin financier" });

  if (has(planet.dansLesSignes))
    sections.push({ id: "signes", label: "Dans les signes" });

  if (has(planet.dansLesMaisons))
    sections.push({ id: "maisons", label: "Dans les maisons" });

  if (has(planet.aspects))
    sections.push({ id: "aspects", label: "Alchimie des aspects" });

  return sections;
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default async function PlanetPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug: raw } = await params;
  const slug = raw.toLowerCase();
  const planet = getPlanet(slug);
  if (!planet) notFound();

  const t = planetTheme(planet.slug);
  const index = getPlanetIndex(planet.slug);
  const prev = PLANETS[(index - 1 + PLANETS.length) % PLANETS.length];
  const next = PLANETS[(index + 1) % PLANETS.length];

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

  const jsonLd = buildJsonLd(planet);
  const tocSections = buildTocSections(planet);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#010409] text-slate-300 selection:bg-white/10 selection:text-white">
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
        id="contenu-principal"
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24 md:pb-36"
      >
        {/* Breadcrumbs */}
   

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
            {planet.famille || "Astre"}
          </div>

          {/* Planet name */}
          <h1 className="font-serif text-[clamp(3.5rem,11vw,8.5rem)] leading-[0.9] tracking-tight text-white">
            {planet.name}
          </h1>

          {/* Keyword */}
          {(planet.motCle || planet.identite?.motCle) && (
            <p className="!mx-auto mt-4 max-w-3xl  font-serif text-xl md:text-3xl italic text-slate-400">
              « {planet.motCle || planet.identite?.motCle} »
            </p>
          )}

          {/* Hero image */}
          <div className="relative mt-10 md:mt-14 group">
            <div
              className={`absolute -inset-3 rounded-[36px] opacity-20 blur-3xl ${t.bg}`}
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-3xl md:rounded-[36px] border border-white/10 bg-[#0a0f1e] shadow-2xl ">
              <Image
                src={heroSrc}
                alt={`Illustration de ${planet.name} en astrologie`}
                width={1200}
                height={800}
                priority
                className="w-full h-[280px] sm:h-[380px] md:h-[560px] object-cover transition-transform duration-[2s] group-hover:scale-[1.02]"
              />

              {/* Stats overlay */}
              <div className=" bottom-3 left-3 right-3 md:bottom-6 md:left-6 md:right-6 grid grid-cols-3 gap-3 rounded-2xl md:rounded-3xl border border-white/10 bg-black/60 p-4 md:p-6 backdrop-blur-xl lg:mt-12 ">
                <StatBadge
                  label="Famille"
                  value={planet.famille}
                  accentText={t.text}
                  icon={Layers}
                />
                <StatBadge
                  label="Révolution"
                  value={planet.revolution}
                  accentText={t.text}
                  icon={Compass}
                />
                <StatBadge
                  label="Domicile"
                  value={planet.identite?.dignites?.domicile || planet.domicile}
                  accentText={t.text}
                  icon={Sun}
                />
              </div>
            </div>
          </div>
        </header>

        {/* ============================================================ */}
        {/*  MAIN CONTENT (with optional TOC sidebar)                    */}
        {/* ============================================================ */}

        <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-12 xl:gap-16">
          {/* LEFT: Content */}
          <div className="min-w-0">
            {/* ──── ARCHETYPE SACRÉ ──── */}
            <Section id="archetype">
              <SectionHeading
                title="L'archétype sacré"
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
                          {k}
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
                      title="Ce que l'astre incarne"
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
                      ["Domicile", planet.identite?.dignites?.domicile || planet.domicile],
                      ["Exaltation", planet.identite?.dignites?.exaltation || planet.exaltation],
                      ["Exil", planet.identite?.dignites?.exil || planet.exil],
                      ["Chute", planet.identite?.dignites?.chute || planet.chute],
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
                      Logique des dignités
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
                  title="La genèse"
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
                  title="Fonction essentielle"
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
                  title="Mots-clés"
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
                  title="Mythologie"
                  icon={Crown}
                  id="mythologie"
                  accentDot={t.dot}
                  accentText={t.text}
                  subtitle="Dieux, héros et archétypes solaires"
                />
                <ProseBlock paragraphs={planet.mythologie!} firstLetterDrop />
              </Section>
            )}

            {/* ──── SYMBOLE GRAPHIQUE ──── */}
            {planet.symboliqueGraphique && (
              <Section id="symbole">
                <GlassCard accent={t} className="p-6 md:p-10">
                  <h2 className="mb-4 font-serif text-2xl text-white" id="symbole-heading">
                    Symbole graphique
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
                  title="Données astronomiques"
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
                title="La psyché humaine"
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
                      label: "Niveau bas",
                      cls: "border-red-500/20 bg-red-500/5 text-red-200",
                      data: planet.lectureHumaine?.psychologie?.niveauBas,
                    },
                    {
                      label: "Niveau moyen",
                      cls: "border-slate-500/20 bg-slate-500/5 text-slate-200",
                      data: planet.lectureHumaine?.psychologie?.niveauMoyen,
                    },
                    {
                      label: "Niveau élevé",
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
                    title="Forces et potentiels"
                    items={planet.lectureHumaine?.forces}
                    accentDot={t.dot}
                    accentText={t.text}
                    icon={Sun}
                  />
                  <DetailList
                    title="Zones d'ombre"
                    items={planet.lectureHumaine?.ombres}
                    accentDot={t.dot}
                    accentText={t.text}
                    icon={Shield}
                  />
                </div>

                {planet.lectureHumaine?.expression && (
                  <div className="mt-10 grid gap-10 border-t border-white/5 pt-10 md:grid-cols-3">
                    <DetailList
                      title="Alignement"
                      items={planet.lectureHumaine.expression.aligne}
                      accentDot={t.dot}
                      accentText={t.text}
                      icon={Target}
                    />
                    <DetailList
                      title="En excès"
                      items={planet.lectureHumaine.expression.exces}
                      accentDot={t.dot}
                      accentText={t.text}
                      icon={Zap}
                    />
                    <DetailList
                      title="En manque"
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
                  title="Analyse de profondeur"
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
                  title="Père, autorité et réussite"
                  icon={User}
                  id="pere-autorite"
                  accentDot={t.dot}
                  accentText={t.text}
                />

                <div className="grid gap-6 md:grid-cols-2">
                  {has(rapportAutorite) && (
                    <GlassCard accent={t} className="p-6 md:p-8">
                      <DetailList
                        title="Le père et l'autorité"
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
                        title="Rapport à la réussite"
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
                      L&apos;archétype paternel en profondeur
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
      title="Dans le quotidien"
      icon={Moon}
      id="quotidien"
      accentDot={t.dot}
      accentText={t.text}
    />
    <GlassCard accent={t} className="p-6 md:p-10">
      <DetailList
        title="Dans le quotidien"
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
                  title="Champs d'expérience"
                  subtitle="Comment l'astre active les grands domaines de vie."
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
                            title={key}
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
                  title="Configurations de force"
                  icon={HeartPulse}
                  id="configurations"
                  accentDot={t.dot}
                  accentText={t.text}
                />
                <div className="grid gap-5 md:grid-cols-3">
                  <GlassCard accent={t} className="p-6 border-emerald-500/20 bg-emerald-500/[0.03]">
                    <DetailList
                      title="L'astre fort"
                      items={configFortFaible.fort}
                      accentDot="bg-emerald-400"
                      accentText="text-emerald-400"
                    />
                  </GlassCard>
                  <GlassCard accent={t} className="p-6 border-orange-500/20 bg-orange-500/[0.03]">
                    <DetailList
                      title="L'astre faible"
                      items={configFortFaible.faible}
                      accentDot="bg-orange-400"
                      accentText="text-orange-400"
                    />
                  </GlassCard>
                  <GlassCard accent={t} className="p-6 border-red-500/20 bg-red-500/[0.03]">
                    <DetailList
                      title="L'astre affligé"
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
                  title="Correspondances traditionnelles"
                  icon={Gem}
                  id="correspondances"
                  accentDot={t.dot}
                  accentText={t.text}
                />
                <GlassCard accent={t} className="p-6 md:p-10">
                  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <DetailList title="Corps" items={planet.correspondances?.corps} accentDot={t.dot} accentText={t.text} icon={HeartPulse} />
                    <DetailList title="Métaux" items={planet.correspondances?.metaux} accentDot={t.dot} accentText={t.text} icon={Gem} />
                    <DetailList title="Couleurs" items={planet.correspondances?.couleurs} accentDot={t.dot} accentText={t.text} icon={Palette} />
                    <DetailList title="Pierres" items={planet.correspondances?.pierres} accentDot={t.dot} accentText={t.text} icon={Sparkles} />
                    <DetailList title="Animaux" items={planet.correspondances?.animaux} accentDot={t.dot} accentText={t.text} icon={Globe} />
                    <DetailList title="Lieux" items={planet.correspondances?.lieux} accentDot={t.dot} accentText={t.text} icon={Crown} />
                  </div>
                  {planet.correspondances?.jour && (
                    <p className="mt-6 border-t border-white/5 pt-6 text-center text-lg text-slate-400">
                      Jour de la semaine : <strong className="text-white">{planet.correspondances.jour}</strong>
                    </p>
                  )}
                </GlassCard>
              </Section>
            )}

            {/* ──── PLAN MÉDICAL ──── */}
            {has(planet.medical) && (
              <Section id="medical">
                <SectionHeading title="Plan médical et vitalité" icon={HeartPulse} id="medical" accentDot={t.dot} accentText={t.text} />
                <GlassCard accent={t} className="p-6 md:p-10">
                  <ProseBlock paragraphs={planet.medical!} />
                </GlassCard>
              </Section>
            )}

            {/* ──── SOCIABILITÉ ──── */}
            {has(planet.social) && (
              <Section id="social">
                <SectionHeading title="Sociabilité et magnétisme" icon={Activity} id="social" accentDot={t.dot} accentText={t.text} />
                <GlassCard accent={t} className="p-6 md:p-10">
                  <ProseBlock paragraphs={planet.social!} />
                </GlassCard>
              </Section>
            )}

            {/* ──── SPIRITUEL ──── */}
            {has(planet.spirituel) && (
              <Section id="spirituel">
                <SectionHeading title="Plan spirituel" icon={Flame} id="spirituel" accentDot={t.dot} accentText={t.text} />
                <GlassCard accent={t} className="p-6 md:p-10">
                  <ProseBlock paragraphs={planet.spirituel!} />
                </GlassCard>
              </Section>
            )}

            {/* ──── APPARENCE ──── */}
            {has(planet.apparence) && (
              <Section id="apparence">
                <SectionHeading title="Apparence physique du type" icon={Eye} id="apparence" accentDot={t.dot} accentText={t.text} />
                <GlassCard accent={t} className="p-6 md:p-10">
                  <ProseBlock paragraphs={planet.apparence!} />
                </GlassCard>
              </Section>
            )}

            {/* ──── PORTRAIT DU SOLARIEN ──── */}
            {has(planet.portraitDuSolarien) && (
              <Section id="portrait">
                <SectionHeading title="Portrait du type solaire" icon={Crown} id="portrait" accentDot={t.dot} accentText={t.text} subtitle="L'archétype solaire dans sa plénitude." />
                <GlassCard accent={t} className="p-6 md:p-10">
                  <ProseBlock paragraphs={planet.portraitDuSolarien!} firstLetterDrop />
                </GlassCard>
              </Section>
            )}

            {/* ──── PROFESSIONS ──── */}
            {has(planet.professions) && (
              <Section id="professions">
                <SectionHeading title="Professions" icon={Briefcase} id="professions" accentDot={t.dot} accentText={t.text} />
                <GlassCard accent={t} className="p-6 md:p-10">
                  <DetailList title="Métiers et vocations" items={planet.professions} accentDot={t.dot} accentText={t.text} icon={Briefcase} />
                </GlassCard>
              </Section>
            )}

            {/* ──── DESTIN SENTIMENTAL ──── */}
            {has(planet.destinSentimental) && (
              <Section id="destin-sentimental">
                <SectionHeading title="Destin sentimental" icon={Heart} id="destin-sentimental" accentDot={t.dot} accentText={t.text} />
                <GlassCard accent={t} className="p-6 md:p-10">
                  <ProseBlock paragraphs={planet.destinSentimental!} />
                </GlassCard>
              </Section>
            )}

            {/* ──── DESTIN FINANCIER ──── */}
            {has(planet.destinFinancier) && (
              <Section id="destin-financier">
                <SectionHeading title="Destin financier" icon={Briefcase} id="destin-financier" accentDot={t.dot} accentText={t.text} />
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
                    Âge de la vie
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
                  title="Le zodiaque"
                  subtitle="L'influence de l'astre à travers les douze signes."
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
                            alt={`Signe du ${sign.signe}`}
                            width={100}
                            height={100}
                            className="drop-shadow-xl"
                          />
                          <h3 className="mt-4 font-serif text-3xl text-white capitalize">
                            {sign.signe}
                          </h3>
                          <span className={`mt-3 inline-block rounded-full border px-4 py-1.5 text-xs uppercase tracking-widest font-semibold ${t.border} ${t.text}`}>
                            {sign.titre}
                          </span>
                        </div>
                        <div className="lg:w-[75%]">
                          <QuoteBlock text={sign.resume} accentBorder={t.border} />
                          <div className="mt-6 grid gap-6 md:grid-cols-3">
                            <DetailList title="Forces" items={sign.forces} accentDot={t.dot} accentText={t.text} />
                            <DetailList title="Défis" items={sign.defis} accentDot="bg-red-400" accentText="text-red-400" />
                            <DetailList title="Manifestations" items={sign.manifestations} accentDot="bg-slate-400" accentText="text-slate-300" />
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
                  title="Les maisons"
                  subtitle="Les théâtres de vie où l'astre se manifeste."
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
                            Maison {house.maison}
                          </div>
                        </div>
                        <div className="lg:w-[82%]">
                          <h3 className="mb-3 font-serif text-2xl text-white">{house.titre}</h3>
                          <QuoteBlock text={house.resume} accentBorder={t.border} />
                          <div className="mt-6 grid gap-6 md:grid-cols-3">
                            <DetailList title="Potentiels" items={house.forces} accentDot={t.dot} accentText={t.text} />
                            <DetailList title="Points d'ombre" items={house.defis} accentDot="bg-red-400" accentText="text-red-400" />
                            <DetailList title="Manifestations" items={house.manifestations} accentDot="bg-slate-400" accentText="text-slate-300" />
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
                <SectionHeading title="Alchimie des aspects" icon={Sparkles} id="aspects" accentDot={t.dot} accentText={t.text} />
                <div className="space-y-6">
                  {Object.entries(planet.aspects || {}).map(([key, aspect]) => (
                    <GlassCard key={key} accent={t} className="p-6 md:p-8" id={sectionId(`aspect-${key}`)}>
                      {/* Header */}
                      <div className="mb-6 flex flex-col items-center gap-4 border-b border-white/5 pb-6 md:flex-row md:justify-center">
                        <div className="flex items-center gap-3">
                         <Image
  src={thumbSrc}
  alt={`Planète ${planet.name} impliquée dans l’aspect ${aspect.titre}`}
  width={52}
  height={52}
  className="rounded-full"
/>

<span className="text-slate-600" aria-hidden={true}>×</span>

<Image
  src={planetThumbSrc(key)}
  alt={`Planète ${key} en interaction avec ${planet.name} (${aspect.titre})`}
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
                          { label: "Conjonction", value: aspect.conjonction, variant: "harmonious" as const },
                          { label: "Sextile", value: aspect.sextile, variant: "harmonious" as const },
                          { label: "Carré", value: aspect.carre, variant: "tense" as const },
                          { label: "Trigone", value: aspect.trigone, variant: "harmonious" as const },
                          { label: "Opposition", value: aspect.opposition, variant: "tense" as const },
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
                <SectionHeading title="Lire l'astre dans un thème" icon={ScrollText} id="dans-un-theme" accentDot={t.dot} accentText={t.text} />
                <GlassCard accent={t} className="p-6 md:p-10">
                  <ProseBlock paragraphs={planet.dansUnTheme!} />
                </GlassCard>
              </Section>
            )}
          </div>

          {/* RIGHT: TOC sidebar (desktop) */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents sections={tocSections} accentText={t.text} />
            </div>
          </aside>
        </div>

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
          />
        </footer>
      </main>
    </div>
  );
}
