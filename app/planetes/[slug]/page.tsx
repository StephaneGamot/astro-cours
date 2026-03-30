import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
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
  Swords,
  Layers,
} from "lucide-react";

import { buildMeta, buildTitle, absoluteUrl } from "@/lib/seo";
import {
  PLANETS,
  getPlanet,
  getPlanetIndex,
  has,
  planetTheme,
  planetThumbSrc,
  planetHeroSrc,
  normalizeDignitesExpliquees,
} from "./helpers";

type Accent = ReturnType<typeof planetTheme>;

const SITE_NAME = "Astro Cours";

// --------------------------------------------------
// UI
// --------------------------------------------------

function AuraEffect({ aura }: { aura: string }) {
  return (
    <div
      className={`fixed inset-0 pointer-events-none opacity-[0.12] bg-gradient-to-b ${aura}`}
    />
  );
}

function PremiumCard({
  children,
  accent,
  className = "",
  id,
}: {
  children: React.ReactNode;
  accent: Accent;
  className?: string;
  id?: string;
}) {
  return (
    <div
      id={id}
      className={`relative overflow-hidden rounded-[28px] md:rounded-[36px] border ${accent.border} bg-[#0a0f1e]/80 backdrop-blur-2xl p-6 md:p-8 xl:p-10 transition-all duration-500 hover:shadow-2xl ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_35%,transparent)]" />
      <div className="relative">{children}</div>
    </div>
  );
}

function SectionHeader({
  title,
  subtitle,
  icon: Icon,
  accent,
  id,
  className = "",
}: {
  title: string;
  subtitle?: string;
  icon?: React.ComponentType<{ className?: string }>;
  accent: Accent;
  id?: string;
  className?: string;
}) {
  return (
    <div id={id} className={`mb-14 md:mb-16 flex flex-col items-center text-center ${className}`}>
      {Icon ? <Icon className={`mb-4 h-10 w-10 md:h-12 md:w-12 ${accent.text} opacity-90`} /> : null}
      <h2 className="font-serif text-4xl md:text-5xl xl:text-6xl tracking-tight text-white">
        {title}
      </h2>
      <div className={`mt-5 h-1.5 w-24 md:w-28 rounded-full ${accent.dot}`} />
      {subtitle ? (
        <p className="mt-6 max-w-3xl text-slate-400 text-lg md:text-xl italic font-light leading-relaxed">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function BulletList({
  title,
  items,
  accent,
  icon: Icon,
}: {
  title: string;
  items?: string[];
  accent: Accent;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  if (!items || items.length === 0) return null;

  return (
    <div className="flex flex-col space-y-5">
      <div className="flex items-center gap-3">
        {Icon ? <Icon className={`h-5 w-5 ${accent.text}`} /> : null}
        <h3 className="text-[11px] uppercase tracking-[0.35em] text-slate-500 font-semibold">
          {title}
        </h3>
      </div>

      <ul className="space-y-3.5">
        {items.map((item, index) => (
          <li
            key={`${title}-${index}`}
            className="text-slate-300 font-light flex items-start gap-3 text-base md:text-[17px] leading-relaxed"
          >
            <span className={`${accent.dot} mt-2 h-1.5 w-1.5 rounded-full shrink-0`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function InfoStat({
  label,
  value,
  accent,
  icon: Icon,
}: {
  label: string;
  value?: string;
  accent: Accent;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="mb-2 text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-slate-500 font-semibold">
        {label}
      </span>
      <span className="flex items-center gap-2 text-sm md:text-base text-white">
        <Icon className={`h-4 w-4 ${accent.text}`} />
        {value || "—"}
      </span>
    </div>
  );
}

function QuoteBlock({ text }: { text?: string }) {
  if (!text) return null;

  return (
    <p className="border-l-4 border-white/8 pl-5 md:pl-6 text-lg md:text-2xl italic font-light leading-relaxed text-slate-400">
      “{text}”
    </p>
  );
}

// --------------------------------------------------
// SEO
// --------------------------------------------------

export const dynamicParams = false;

export function generateStaticParams() {
  const invalidPlanets = PLANETS.filter(
    (planet) => typeof planet.slug !== "string" || planet.slug.trim() === ""
  );

  console.log("PLANETS INVALIDES :", invalidPlanets);

  return PLANETS
    .filter((planet) => typeof planet.slug === "string" && planet.slug.trim() !== "")
    .map((planet) => ({ slug: planet.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const planet = getPlanet(slug.toLowerCase());

  if (!planet) return {};

  return buildMeta({
    title: buildTitle(`${planet.name} : symbolique et interprétation complète`),
    description:
      planet.identite?.symbolique?.slice(0, 160) ||
      `Étude approfondie de l’astre ${planet.name}.`,
    canonicalPath: `/planetes/${planet.slug}`,
    type: "article",
    ogImage: planetHeroSrc(planet.slug),
  });
}

// --------------------------------------------------
// PAGE
// --------------------------------------------------

export default async function PlanetPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug: raw } = await params;
  const slug = raw.toLowerCase();

  const planet = getPlanet(slug);
  if (!planet) notFound();

  const accent = planetTheme(planet.slug);
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

  const etatFortFaible = planet.etatFortFaible;
const configFortFaible = planet.etatFortFaible ?? null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${planet.name} en astrologie : symbolique et interprétation`,
    description: planet.identite?.symbolique || "",
    image: [absoluteUrl(heroSrc)],
    author: {
      "@type": "Person",
      name: "Stéphane Gamot",
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
  };

  const analyseProfonde = planet.lecturePsychologiqueProfonde || planet.dansUnTheme;
  
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#010409] text-slate-300 selection:bg-white/10 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <AuraEffect aura={accent.aura} />

      <main className="relative mx-auto max-w-7xl px-4 md:px-6 pb-28 md:pb-36">
        {/* HERO */}
        <section className="relative pt-20 md:pt-28 mb-24 md:mb-32 flex flex-col items-center text-center">
          <div
            className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full h-[460px] md:h-[620px] opacity-20 blur-[130px]"
            style={{
              background: `radial-gradient(circle, ${accent.color} 0%, transparent 72%)`,
            }}
          />

          <div
            className={`px-5 py-2 rounded-full border ${accent.border} ${accent.bg} text-[11px] uppercase tracking-[0.45em] ${accent.text} mb-8 flex items-center gap-3`}
          >
            <Sparkles className="h-3 w-3" />
            Astre
          </div>

          <h1 className="font-serif text-[clamp(3.8rem,12vw,9.2rem)] leading-[0.9] tracking-tight text-white">
            {planet.name}
          </h1>

          {(planet.motCle || planet.identite?.motCle) && (
            <p className="mx-auto mt-5 max-w-4xl font-serif text-2xl md:text-4xl italic text-slate-400">
              « {planet.motCle || planet.identite?.motCle} »
            </p>
          )}

          <div className="w-full relative mt-10 md:mt-14 group">
            <div className={`absolute -inset-2 rounded-[40px] opacity-20 blur-3xl ${accent.bg}`} />

            <div className="relative overflow-hidden rounded-[30px] md:rounded-[40px] border border-white/10 bg-[#0a0f1e] shadow-2xl">
              <Image
                src={heroSrc}
                alt={planet.name}
                width={2000}
                height={1100}
                priority
                className="w-full h-[320px] sm:h-[420px] md:h-[620px] object-cover transition duration-[2.2s] group-hover:scale-[1.03]"
              />

              <div className="absolute bottom-4 left-4 right-4 md:bottom-7 md:left-7 md:right-7 grid grid-cols-3 gap-3 md:gap-5 rounded-[22px] md:rounded-[28px] border border-white/10 bg-black/55 p-4 md:p-6 backdrop-blur-2xl">
  <InfoStat
    label="Famille"
    value={planet.famille}
    accent={accent}
    icon={Layers}
  />
  <InfoStat
    label="Révolution"
    value={planet.revolution}
    accent={accent}
    icon={Compass}
  />
  <InfoStat
    label="Domicile"
    value={planet.identite?.dignites?.domicile || planet.domicile}
    accent={accent}
    icon={Sun}
  />
</div>
            </div>
          </div>
        </section>

        {/* IDENTITE + DIGNITES */}
        <section className="grid  gap-8 md:gap-12 items-stretch mb-24 md:mb-32">
          <div className="lg:col-span-5 flex flex-col justify-center space-y-7">
            <SectionHeader
              title="L’archétype sacré"
              accent={accent}
              className="!mb-0 !items-start !text-left"
            />

            <QuoteBlock text={planet.identite?.symbolique || planet.introductionLongue?.[0]} />

            {planet.identite?.analogies && (
              <div className="grid grid-cols-2 gap-5 border-t border-white/5 pt-7">
                {Object.entries(planet.identite.analogies).map(([key, value]) => (
                  <div key={key}>
                    <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-slate-500 font-semibold">
                      {key}
                    </p>
                    <p className="font-serif text-lg md:text-xl text-white leading-tight">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>





          <div className="lg:col-span-7">
            <PremiumCard accent={accent} className="h-full">
              <div className="space-y-8">
                <BulletList
                  title="Ce que l’astre incarne"
                  items={planet.ceQueLeSoleilRepresente || planet.resume}
                  accent={accent}
                  icon={Fingerprint}
                />

                {has(dignitesExpliquees) && (
                  <div className="border-t border-white/5 pt-8">
                    <p className="mb-4 text-[11px] uppercase tracking-[0.35em] text-slate-500 font-semibold italic">
                      Logique des dignités
                    </p>

                    <ul className="space-y-3">
                      {dignitesExpliquees.map((txt, index) => (
                        <li
                          key={index}
                          className="text-base md:text-lg italic font-light leading-relaxed text-slate-300"
                        >
                          “{txt}”
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 border-t border-white/5 pt-8">
                  {[
                    ["Domicile", planet.identite?.dignites?.domicile || planet.domicile],
                    ["Exaltation", planet.identite?.dignites?.exaltation || planet.exaltation],
                    ["Exil", planet.identite?.dignites?.exil || planet.exil],
                    ["Chute", planet.identite?.dignites?.chute || planet.chute],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-slate-500 font-semibold">
                        {label}
                      </p>
                      <p className="font-serif text-lg md:text-xl text-white">{value || "—"}</p>
                    </div>
                  ))}
                </div>
              </div>
            </PremiumCard>
          </div>
        </section>

        {/* INTRODUCTION */}
        {has(planet.introductionLongue) && (
          <section className="mx-auto mb-24 md:mb-32 max-w-6xl">
            <SectionHeader title="La genèse" icon={BookOpen} accent={accent} />

            <div className="columns-1 md:columns-2 gap-10 space-y-8">
              {planet.introductionLongue.map((paragraph, index) => (
                <p
                  key={index}
                  className="break-inside-avoid text-lg md:text-xl font-light leading-relaxed text-slate-400 first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-6xl first-letter:text-white"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        )}

        {/* PSYCHE */}
        <SectionHeader title="La psyché humaine" icon={Activity} accent={accent} />

        <div className="mb-8 grid gap-5 md:grid-cols-3">
          {[
            {
              label: "Niveau bas",
              className: "bg-red-500/5 border-red-500/20 text-red-200",
              data: planet.lectureHumaine?.psychologie?.niveauBas,
            },
            {
              label: "Niveau moyen",
              className: "bg-slate-500/5 border-slate-500/20 text-slate-200",
              data: planet.lectureHumaine?.psychologie?.niveauMoyen,
            },
            {
              label: "Niveau élevé",
              className: "bg-emerald-500/5 border-emerald-500/20 text-emerald-200",
              data: planet.lectureHumaine?.psychologie?.niveauEleve,
            },
          ]
            .filter((block) => has(block.data))
            .map((block) => (
              <div
                key={block.label}
                className={`rounded-[24px] border p-6 md:p-7 ${block.className}`}
              >
                <h3 className="mb-6 text-center text-[11px] uppercase tracking-[0.35em] font-semibold opacity-75">
                  {block.label}
                </h3>

                <ul className="space-y-3.5">
                  {block.data?.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-base md:text-[17px] font-light leading-relaxed"
                    >
                      <span className="opacity-30">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>

        <PremiumCard accent={accent} className="mb-24 md:mb-32">
          <div className="grid gap-10 md:grid-cols-2 md:gap-12">
            <BulletList
              title="Forces & potentiels"
              items={planet.lectureHumaine?.forces}
              accent={accent}
              icon={Sun}
            />
            <BulletList
              title="Zones d’ombre"
              items={planet.lectureHumaine?.ombres}
              accent={accent}
              icon={Shield}
            />
          </div>

          {planet.lectureHumaine?.expression && (
            <div className="mt-10 grid gap-10 border-t border-white/5 pt-10 md:grid-cols-3">
              <BulletList
                title="Alignement"
                items={planet.lectureHumaine.expression.aligne}
                accent={accent}
                icon={Target}
              />
              <BulletList
                title="En excès"
                items={planet.lectureHumaine.expression.exces}
                accent={accent}
                icon={Zap}
              />
              <BulletList
                title="En manque"
                items={planet.lectureHumaine.expression.manque}
                accent={accent}
                icon={ZapOff}
              />
            </div>
          )}
        </PremiumCard>

        {/* PROFONDEUR + AUTORITE */}
       {(has(analyseProfonde) || has(rapportAutorite) || has(planet.lectureHumaine?.quotidien)) && (
<section className="flex flex-col lg:flex-row lg:justify-between gap-8 md:gap-10 mb-24 md:mb-32 max-w-6xl mx-auto">
    
    {has(analyseProfonde) && (
      <PremiumCard accent={accent} className="h-full">
        <h3 className="mb-7 flex items-center gap-3 font-serif text-3xl md:text-4xl text-white">
          <Eye className={accent.text} />
          Analyse de profondeur
        </h3>

        <div className="space-y-5">
          {analyseProfonde.map((paragraph, index) => (
            <p
              key={index}
              className="border-l-4 border-white/10 pl-5 text-lg md:text-xl italic font-light leading-relaxed text-slate-300"
            >
              “{paragraph}”
            </p>
          ))}
        </div>
      </PremiumCard>
    )}

   {(has(planet.lectureHumaine?.quotidien) || has(rapportAutorite)) && (
  <div className="grid md:grid-cols-2 gap-8 h-full">
    {has(planet.lectureHumaine?.quotidien) && (
      <PremiumCard accent={accent} className="h-full">
        <BulletList
          title="Dans le quotidien"
          items={planet.lectureHumaine?.quotidien}
          accent={accent}
          icon={Moon}
        />
      </PremiumCard>
    )}

    {has(rapportAutorite) && (
      <PremiumCard accent={accent} className="h-full">
        <BulletList
          title="Le père & l’autorité"
          items={rapportAutorite}
          accent={accent}
          icon={User}
        />
      </PremiumCard>
    )}
  </div>
)}
  </section>
)}

        {/* CHAMPS D'EXPERIENCE */}
        {has(planet.champsExperience) && (
          <>
            <SectionHeader
              title="Champs d’expérience"
              subtitle="Comment l’astre active les grands domaines de vie."
              icon={Globe}
              accent={accent}
            />

            <div className="mb-24 md:mb-32 columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {Object.entries(planet.champsExperience || {}).map(([key, value]) => (
                <div key={key} className="break-inside-avoid">
                  <PremiumCard accent={accent} className="bg-white/[0.02]">
                    <BulletList title={key} items={value} accent={accent} />
                  </PremiumCard>
                </div>
              ))}
            </div>
          </>
        )}

        {/* CONFIGURATIONS */}
        {configFortFaible && (
          <section className="mb-24 md:mb-32">
            <SectionHeader title="Configurations de force" icon={HeartPulse} accent={accent} />

            <div className="grid gap-5 md:grid-cols-3">
              <PremiumCard accent={accent} className="border-emerald-500/20 bg-emerald-500/5">
                <BulletList title="L’astre fort" items={configFortFaible.fort} accent={accent} />
              </PremiumCard>

              <PremiumCard accent={accent} className="border-orange-500/20 bg-orange-500/5">
                <BulletList
                  title="L’astre blessé / faible"
                  items={configFortFaible.faible}
                  accent={accent}
                />
              </PremiumCard>

              <PremiumCard accent={accent} className="border-red-500/20 bg-red-500/5">
                <BulletList
                  title="L’astre affligé"
                  items={configFortFaible.afflige}
                  accent={accent}
                />
              </PremiumCard>
            </div>
          </section>
        )}

        {/* SIGNES */}
        {has(planet.dansLesSignes) && (
          <>
            <SectionHeader
              id="signes"
              title="Le zodiaque"
              subtitle="L’influence de l’astre à travers les douze signes."
              icon={Star}
              accent={accent}
            />

            <div className="mb-24 md:mb-32 space-y-8">
              {planet.dansLesSignes.map((sign, index) => (
                <PremiumCard key={index} accent={accent}>
                  <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
                    <div className="lg:w-[30%] text-center lg:text-left">
                      <Image
                        src={`/images/zodiaque/${sign.signe}.webp`}
                        alt={sign.signe}
                        width={120}
                        height={120}
                        className="mx-auto drop-shadow-2xl "
                      />

                      <h3 className="mt-5 font-serif text-4xl md:text-5xl text-white text-center capitalize">
                        {sign.signe}
                      </h3>

                      <div
                        className={`mt-4 inline-flex rounded-full border px-5 py-2 text-[11px] uppercase tracking-[0.2em] font-semibold ${accent.border} ${accent.text}`}
                      >
                        {sign.titre}
                      </div>
                    </div>

                    <div className="lg:w-[70%]">
                      <QuoteBlock text={sign.resume} />

                      <div className="mt-8 grid gap-8 md:grid-cols-3">
                        <BulletList title="Forces" items={sign.forces} accent={accent} />
                        <BulletList title="Défis" items={sign.defis} accent={accent} />
                        <BulletList
                          title="Manifestations"
                          items={sign.manifestations}
                          accent={accent}
                        />
                      </div>
                    </div>
                  </div>
                </PremiumCard>
              ))}
            </div>
          </>
        )}

        {/* MAISONS */}
        {has(planet.dansLesMaisons) && (
          <>
            <SectionHeader
              id="maisons"
              title="Les maisons"
              subtitle="Les théâtres de vie où l’astre se manifeste."
              icon={Target}
              accent={accent}
            />

            <div className="mb-24 md:mb-32 space-y-8">
              {planet.dansLesMaisons.map((house, index) => (
                <PremiumCard key={index} accent={accent}>
                  <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
                    <div className="flex flex-col items-center justify-center lg:w-[22%]">
                      <div className="font-serif text-[6rem] md:text-[8rem] leading-none text-white/10">
                        {house.maison}
                      </div>
                      <div className={`-mt-2 font-serif text-lg md:text-xl ${accent.text}`}>
                        Maison {house.maison}
                      </div>
                    </div>

                    <div className="lg:w-[78%]">
                      <h3 className="mb-4 font-serif text-2xl md:text-3xl text-white">
                        {house.titre}
                      </h3>

                      <QuoteBlock text={house.resume} />

                      <div className="mt-8 grid gap-8 md:grid-cols-3">
                        <BulletList title="Potentiels" items={house.forces} accent={accent} />
                        <BulletList title="Points d’ombre" items={house.defis} accent={accent} />
                        <BulletList
                          title="Manifestations"
                          items={house.manifestations}
                          accent={accent}
                        />
                      </div>
                    </div>
                  </div>
                </PremiumCard>
              ))}
            </div>
          </>
        )}

        {/* ASPECTS */}
        {has(planet.aspects) && (
          <section className="mb-24 md:mb-32">
            <SectionHeader title="Alchimie des aspects" icon={Sparkles} accent={accent} />

            <div className="space-y-8">
              {Object.entries(planet.aspects || {}).map(([key, aspect]) => (
                <PremiumCard key={key} accent={accent}>
                  <div className="mb-8 flex flex-col items-center gap-6 border-b border-white/5 pb-8 md:flex-row">
                    <div className="flex items-center gap-4">
                      <Image
                        src={thumbSrc}
                        alt={planet.name}
                        width={64}
                        height={64}
                      />
                      <Swords className="h-7 w-7 text-slate-600" />
                      <Image
                        src={planetThumbSrc(key)}
                        alt={key}
                        width={64}
                        height={64}
                      />
                    </div>

                    <h3 className="font-serif text-3xl md:text-4xl text-white">
                      {aspect.titre}
                    </h3>
                  </div>

                  {aspect.resume && (
                    <p className="mx-auto mb-8 max-w-5xl text-center text-lg md:text-2xl italic font-light leading-relaxed text-slate-400">
                      “{aspect.resume}”
                    </p>
                  )}

                  <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
                    {[
                      { label: "Conjonction", value: aspect.conjonction },
                      { label: "Sextile", value: aspect.sextile },
                      { label: "Carré", value: aspect.carre },
                      { label: "Trigone", value: aspect.trigone },
                      { label: "Opposition", value: aspect.opposition },
                    ]
                      .filter((item) => has(item.value))
                      .map((item) => (
                        <div
                          key={item.label}
                          className="h-full rounded-[22px] border border-white/5 bg-white/[0.03] p-5"
                        >
                          <p
                            className={`mb-3 text-[10px] uppercase tracking-[0.2em] font-semibold ${
                              item.label === "Carré" || item.label === "Opposition"
                                ? "text-red-400"
                                : "text-emerald-400"
                            }`}
                          >
                            {item.label}
                          </p>
                          <p className="text-sm md:text-[15px] font-light leading-relaxed text-slate-300">
                            {item.value}
                          </p>
                        </div>
                      ))}
                  </div>
                </PremiumCard>
              ))}
            </div>
          </section>
        )}

        {/* FOOTER NAV */}
        <footer className={`border-t pt-16 md:pt-20 ${accent.border}`}>
          {(planet.motCle || planet.identite?.motCle) && (
            <div className="mb-14 text-center md:mb-16">
              <div
                className={`inline-flex rounded-full border px-8 py-6 md:px-12 md:py-8 ${accent.border} ${accent.bg}`}
              >
                <p className="font-serif text-3xl md:text-5xl xl:text-6xl uppercase tracking-[0.16em] text-white">
                  {planet.motCle || planet.identite?.motCle}
                </p>
              </div>
            </div>
          )}

          <nav className="grid gap-8 md:grid-cols-2">
            <Link href={`/planetes/${prev.slug}`} className="group flex items-center gap-5">
              <div className="flex-1 text-right">
                <p className="mb-2 text-[11px] uppercase tracking-[0.32em] text-slate-500 font-semibold">
                  Précédent
                </p>
                <p className="font-serif text-3xl md:text-4xl text-white group-hover:underline underline-offset-[12px] decoration-white/30">
                  {prev.name}
                </p>
              </div>

              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border border-white/10 grayscale transition duration-700 group-hover:grayscale-0">
                <Image
                  src={planetThumbSrc(prev.slug)}
                  alt={prev.name}
                  width={128}
                  height={128}
                  className="h-full w-full object-cover scale-110"
                />
              </div>
            </Link>

            <Link
              href={`/planetes/${next.slug}`}
              className="group flex items-center gap-5 md:justify-self-end"
            >
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border border-white/10 grayscale transition duration-700 group-hover:grayscale-0">
                <Image
                  src={planetThumbSrc(next.slug)}
                  alt={next.name}
                  width={128}
                  height={128}
                  className="h-full w-full object-cover scale-110"
                />
              </div>

              <div className="text-left">
                <p className="mb-2 text-[11px] uppercase tracking-[0.32em] text-slate-500 font-semibold">
                  Suivant
                </p>
                <p className="font-serif text-3xl md:text-4xl text-white group-hover:underline underline-offset-[12px] decoration-white/30">
                  {next.name}
                </p>
              </div>
            </Link>
          </nav>
        </footer>
      </main>
    </div>
  );
}