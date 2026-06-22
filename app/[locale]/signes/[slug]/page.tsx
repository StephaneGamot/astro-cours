// app/signes/[slug]/page.tsx

import { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import fs from "fs";
import path from "path";
import ScrollReveal from "@/components/ScrollReveal";
import {
  absoluteUrl,
  AUTHOR_PERSON,
  PUBLISHER_ORG,
  SITE_NAME,
  SITE_URL,
  pillarUrl,
  pillarLanguageAlternates,
  toSeoLocale,
} from "@/lib/seo";
import { canonicalSlug, localizeSlug } from "@/i18n/slugs";
import { getHomeCards } from "@/lib/homeCards";
import { buildCourseNode } from "@/lib/courseSchema";
import { getTranslations } from "next-intl/server";

const OG_LOCALE: Record<string, string> = { fr: "fr_FR", en: "en_US", es: "es_ES" };

/** Traducteur simplifié transmis aux sous-composants. */
type T = (key: string, values?: Record<string, string | number>) => string;

/** Ordinal localisé (2e / 2nd / 2.º). */
function ordinalLabel(n: number, locale: string): string {
  if (locale === "en") {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return `${n}${s[(v - 20) % 10] || s[v] || s[0]}`;
  }
  if (locale === "es") return `${n}.º`;
  return `${n}e`;
}
import Breadcrumbs from "@/components/Breadcrumbs";

// ─── Types ──────────────────────────────────────────────────────────────────

interface SigneData {
  slug: string;
  nom: string;
  sousTitre: string;
  devise: string;
  periode: string;
  element: string;
  mode: string;
  maitre: string;
  exaltation: string;
  exil: string;
  chute: string;
  polarite: string;
  temperament: string;
  maisonNaturelle: number;
  couleur: {
    primaire: string;
    secondaire: string;
    accent: string;
    gradient: string;
  };
  navigation: {
    precedent: { slug: string; nom: string };
    suivant: { slug: string; nom: string };
  };
  images: {
    signe: string;
    planete: string;
  };
  introduction: string;
  fondationsCosmiques: {
    texte: string;
    courteAscension: string;
    pluton: string;
  };
  analogies: {
    animal: string;
    objet: string;
    fonction: string;
    texte: string;
  };
  mythologie: {
    titre: string;
    texte: string;
    civilisations: string;
  };
  portrait: {
    temperament: string;
    forces: string[];
    ombres: string[];
    besoinsVitaux: string[];
    aTravailler: string[];
    equilibre: string;
  };
  sante: {
    zones: string[];
    texte: string;
  };
  maisons: Array<{
    numero: number;
    titre: string;
    texte: string;
  }>;
  amour: {
    texte: string;
    qualites: string[];
    vigilances: string[];
    affinites: string[];
  };
  travail: {
    texte: string;
    atouts: string[];
    defis: string[];
  };
  argent: {
    texte: string;
    forces: string[];
    risques: string[];
  };
  planetes: Array<{
    nom: string;
    slug: string;
    description: string;
    manifestations: string[];
  }>;
  compatibilites: Array<{
    signe: string;
    nom: string;
    type: string;
    titre: string;
    texte: string;
    forces: string[];
    frictions: string[];
  }>;
  ascendant: {
    texte: string;
    apparence: string[];
    temperament: string[];
    vigilances: string[];
  };
  etoilesFixes: Array<{
    nom: string;
    nature: string;
    texte: string;
    motsCles: string[];
  }>;
  correspondances: {
    mineraux: Array<{ nom: string; motsCles: string[] }>;
    vegetaux: Array<{ nom: string; motsCles: string[] }>;
    animaux: Array<{ nom: string; motsCles: string[] }>;
  };
  geographie: Array<{ pays: string; texte: string }>;
  figuresCelebres: Array<{
    nom: string;
    domaine: string;
    date: string;
    texte: string;
  }>;
  faq: Array<{ question: string; reponse: string }>;
}

// ─── Data loader ────────────────────────────────────────────────────────────

function getSigneData(slug: string, locale?: string): SigneData | null {
  // Essaie data/<locale>/signes/<slug>.json puis repli FR (data/signes/<slug>.json).
  const candidates: string[] = [];
  if (locale && locale !== "fr") {
    candidates.push(path.join(process.cwd(), "data", locale, "signes", `${slug}.json`));
  }
  candidates.push(path.join(process.cwd(), "data", "signes", `${slug}.json`));
  for (const fp of candidates) {
    try {
      return JSON.parse(fs.readFileSync(fp, "utf-8")) as SigneData;
    } catch {
      /* essaie le suivant */
    }
  }
  return null;
}

function getAllSigneSlugs(): string[] {
  const dir = path.join(process.cwd(), "data", "signes");
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.replace(".json", ""))
    .filter((slug) => slug !== "index");
}

// ─── Static params (Next.js 16) ────────────────────────────────────────────

// dynamicParams activé : slug d'une autre langue → 308 vers le slug localisé.

export async function generateStaticParams({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return getAllSigneSlugs().map((slug) => ({
    slug: localizeSlug("signes", slug, locale),
  }));
}

// ─── Metadata + SEO ─────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const data = getSigneData(canonicalSlug("signes", slug), locale);
  if (!data) return {};
  const loc = toSeoLocale(locale);
  const tm = await getTranslations({ locale, namespace: "sign" });

  // maitreCourt : premier maître seulement (évite les longues chaînes "Mars & Pluton", "Jupiter & Neptune (moderne)")
  const maitreCourt = data.maitre.replace(/\s*[(&/].*$/, "").trim();
  const title = tm("metaTitle", { name: data.nom });
  const description = tm("metaDescription", {
    name: data.nom,
    periode: data.periode,
    element: data.element,
    mode: data.mode,
    master: maitreCourt,
  });
  const url = pillarUrl("signes", data.slug, loc);

  return {
    // ✅ Absolute : Ahrefs SERP rewrite — on retire le suffixe " — Astro Cours"
    //    car le titre signe est déjà long (60+ chars) et Google tronque sinon.
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
      languages: pillarLanguageAlternates("signes", data.slug),
    },
    openGraph: {
      type: "article",
      title,
      description,
      url,
      images: [{ url: data.images.signe, alt: `Signe du ${data.nom}` }],
      locale: OG_LOCALE[loc],
      siteName: SITE_NAME,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [data.images.signe],
    },
  };
}

// ─── Compat type styles ─────────────────────────────────────────────────────

const COMPAT_TYPE_STYLES: Record<string, { label: string; color: string }> = {
  intense:        { label: "Intense",        color: "#EF4444" },
  fluide:         { label: "Fluide",         color: "#10B981" },
  delicate:       { label: "Délicate",       color: "#F59E0B" },
  stimulante:     { label: "Stimulante",     color: "#06B6D4" },
  complementaire: { label: "Complémentaire", color: "#8B5CF6" },
  variable:       { label: "Variable",       color: "#94A3B8" },
};

// ═══════════════════════════════════════════════════════════════════════════════
// HELPER — Maître(s) links (handles multi-ruler signs like Scorpion, Verseau, Poissons)
// ═══════════════════════════════════════════════════════════════════════════════

function slugify(name: string): string {
  return name.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function MaitreLinks({ maitre, color }: { maitre: string; color: string }) {
  // Patterns: "Pluton & Mars", "Saturne (tradition) / Uranus (moderne)"
  const parts = maitre.split(/\s*[&/]\s*/);

  return (
    <>
      {parts.map((part, i) => {
        // Extract planet name (strip parenthetical like "(tradition)")
        const planetName = part.replace(/\s*\(.*?\)\s*/g, "").trim();
        const label = part.trim(); // keep full label for display
        return (
          <span key={planetName}>
            {i > 0 && " & "}
            <Link
              href={`/planetes/${slugify(planetName)}`}
              className="underline decoration-1 underline-offset-2"
              style={{ color }}
            >
              {label}
            </Link>
          </span>
        );
      })}
    </>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PAGE COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

export default async function SignePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const data = getSigneData(canonicalSlug("signes", slug), locale);
   if (!data) {
    notFound();
  }
  // Slug d'une autre langue sous ce segment → 308 vers le slug localisé canonique.
  const locSign = toSeoLocale(locale);
  const expectedSign = localizeSlug("signes", data.slug, locSign);
  if (slug.toLowerCase() !== expectedSign) permanentRedirect(pillarUrl("signes", data.slug, locSign));

  const t = await getTranslations({ locale, namespace: "sign" });

  // Noms de signes localisés (slug FR → nom traduit) pour les affinités.
  const signNames = new Map(
    getHomeCards(locale).zodiaque.map((s) => [s.slug, s.name]),
  );

  // Description identique à la meta (évite la désynchronisation JSON-LD / meta)
  const loc = toSeoLocale(locale);
  const maitreCourt = data.maitre.replace(/\s*[(&/].*$/, "").trim();
  const pageDescription = t("metaDescription", {
    name: data.nom,
    periode: data.periode,
    element: data.element,
    mode: data.mode,
    master: maitreCourt,
  });
  const articleSectionLabel = loc === "en" ? "Astrology" : loc === "es" ? "Astrología" : "Astrologie";

  // Schema.org JSON-LD — @graph unique (réduit le DOM, recommandé Google)
  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: t("metaTitle", { name: data.nom }),
        description: pageDescription,
        image: absoluteUrl(data.images.signe),
        author: AUTHOR_PERSON,
        publisher: PUBLISHER_ORG,
        mainEntityOfPage: pillarUrl("signes", data.slug, loc),
        datePublished: "2026-04-09T12:00:00Z",
        dateModified: "2026-05-08T12:00:00Z",
        articleSection: articleSectionLabel,
        inLanguage: loc,
      },
      buildCourseNode({
        path: `/signes/${data.slug}`,
        name: `${data.nom} — Signe astrologique : ${data.element}, ${data.mode}`,
        description: pageDescription,
        image: data.images.signe,
        teaches: `Comprendre la symbolique du ${data.nom} et savoir l'interpréter dans un thème natal`,
        topicName: `${data.nom} (signe astrologique)`,
      }),
      {
        "@type": "FAQPage",
        mainEntity: data.faq.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.reponse },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: "Signes", item: `${SITE_URL}/signes` },
          { "@type": "ListItem", position: 3, name: data.nom, item: absoluteUrl(`/signes/${data.slug}`) },
        ],
      },
    ],
  };

  return (
    <>
      {/* Schema.org — @graph unique */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }} />

      <article id="main-content" className="min-h-screen antialiased">

        {/* ━━━━━━━━━━━ BREADCRUMBS ━━━━━━━━━━━ */}
        <Breadcrumbs
          items={[
            { name: t("breadcrumbSigns"), href: "/#zodiaque" },
            { name: data.nom, href: `/signes/${data.slug}` },
          ]}
          accentClass={`text-[${data.couleur.primaire}]`}
        />

        {/* ━━━━━━━━━━━ HERO ━━━━━━━━━━━ */}
        <HeroSection data={data} t={t} />

        {/* ━━━━━━━━━━━ QUICK FACTS ━━━━━━━━━━━ */}
        <QuickFacts data={data} t={t} />

        {/* ━━━━━━━━━━━ DÉFINITION SEO (Featured Snippet) ━━━━━━━━━━━ */}
        <div className="mx-auto max-w-3xl px-6 pt-16 md:pt-24">
          <div className="rounded-2xl border px-6 py-5"
               style={{ borderColor: `${data.couleur.primaire}33`, background: `${data.couleur.primaire}0A` }}>
            <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: `${data.couleur.primaire}CC` }}>
              {t("definitionLabel")}
            </p>
            <p className="mt-2 text-base leading-relaxed sm:text-lg" style={{ color: "rgb(var(--text) / 0.85)" }}>
              {t.rich("definitionText", {
                name: data.nom,
                ordinal: ordinalLabel(data.maisonNaturelle, locale),
                period: data.periode,
                polarity: data.polarite.toLowerCase(),
                element: data.element,
                mode: data.mode,
                houseNum: data.maisonNaturelle,
                b: (c) => <strong>{c}</strong>,
                polLink: (c) => (
                  <Link href="/#zodiaque" className="underline decoration-1 underline-offset-2" style={{ color: data.couleur.primaire }}>{c}</Link>
                ),
                master: () => <MaitreLinks maitre={data.maitre} color={data.couleur.primaire} />,
                houseLink: (c) => (
                  <Link href="/#maisons" className="underline decoration-1 underline-offset-2" style={{ color: data.couleur.primaire }}>{c}</Link>
                ),
              })}
            </p>
          </div>

          {/* APP Intro */}
          <p className="mt-8 text-base leading-relaxed sm:text-lg" style={{ color: "rgb(var(--text) / 0.75)" }}>
            {t.rich("appIntro", {
              name: data.nom,
              b: (c) => <strong>{c}</strong>,
            })}
          </p>
        </div>

        {/* ━━━━━━━━━━━ INTRODUCTION ━━━━━━━━━━━ */}
        <ContentSection id="introduction" className="pt-20 md:pt-28">
          <ScrollReveal>
            <SectionTitle title={t("sectionIntro", { name: data.nom })} color={data.couleur.primaire} />
            <Prose>{data.introduction}</Prose>
          </ScrollReveal>
        </ContentSection>

        {/* ━━━━━━━━━━━ FONDATIONS COSMIQUES ━━━━━━━━━━━ */}
        <ContentSection id="fondations">
          <ScrollReveal>
            <SectionTitle title={t("sectionFoundations", { name: data.nom })} color={data.couleur.primaire} />
            <Prose>{data.fondationsCosmiques.texte}</Prose>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <CosmicCard label={t("cosmic.master")} value={data.maitre} sub={t("cosmic.domicile")} color={data.couleur.primaire} />
              <CosmicCard label={t("cosmic.exaltation")} value={data.exaltation} sub={t("cosmic.maxForce")} color={data.couleur.secondaire} />
              <CosmicCard label={t("cosmic.exil")} value={data.exil} sub={t("cosmic.difficulty")} color="rgb(var(--muted))" />
              <CosmicCard label={t("cosmic.chute")} value={data.chute} sub={t("cosmic.fall")} color="rgb(var(--muted) / 0.8)" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <aside className="mt-8 rounded-2xl border border-[rgb(var(--border)/0.08)] bg-[rgb(var(--surface))] p-5 text-sm leading-relaxed italic"
                   style={{ color: "rgb(var(--muted))" }}>
              {data.fondationsCosmiques.courteAscension}
            </aside>
          </ScrollReveal>
        </ContentSection>

        {/* ━━━━━━━━━━━ MYTHOLOGIE ━━━━━━━━━━━ */}
        <ContentSection id="mythologie">
          <ScrollReveal>
            <SectionTitle title={t("sectionMythology", { title: data.mythologie.titre })} color={data.couleur.primaire} />
            <Prose>{data.mythologie.texte}</Prose>
            <Prose className="mt-4 opacity-70">{data.mythologie.civilisations}</Prose>
          </ScrollReveal>
        </ContentSection>

        {/* ━━━━━━━━━━━ PORTRAIT INTIME ━━━━━━━━━━━ */}
        <ContentSection id="portrait">
          <ScrollReveal>
            <SectionTitle title={t("sectionPortrait", { name: data.nom })} color={data.couleur.primaire} />
            <Prose>{data.portrait.temperament}</Prose>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <TagListCard title={t("strengths")} items={data.portrait.forces} color="#10B981" />
              <TagListCard title={t("shadows")} items={data.portrait.ombres} color="#EF4444" />
              <TagListCard title={t("vitalNeeds")} items={data.portrait.besoinsVitaux} color="#F59E0B" />
              <TagListCard title={t("toWorkOn")} items={data.portrait.aTravailler} color="#38BDF8" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mt-10 rounded-2xl border border-[rgb(var(--border)/0.1)] p-6 md:p-8"
                 style={{ background: `linear-gradient(135deg, ${data.couleur.primaire}08, transparent)` }}>
              <h3 className="mb-3 text-lg font-semibold">{t("balanceTitle")}</h3>
              <p className="leading-relaxed" style={{ color: "rgb(var(--text) / 0.84)" }}>{data.portrait.equilibre}</p>
            </div>
          </ScrollReveal>
        </ContentSection>

        {/* ━━━━━━━━━━━ SANTÉ ━━━━━━━━━━━ */}
        <ContentSection id="sante">
          <ScrollReveal>
            <SectionTitle title={t("sectionHealth", { name: data.nom })} color={data.couleur.primaire} />
            <div className="mb-6 flex flex-wrap gap-2">
              {data.sante.zones.map((z) => (
                <span key={z} className="rounded-full border border-[rgb(var(--border)/0.1)] px-4 py-1.5 text-sm font-medium"
                      style={{ color: data.couleur.primaire, borderColor: `${data.couleur.primaire}30` }}>
                  {z}
                </span>
              ))}
            </div>
            <Prose>{data.sante.texte}</Prose>
          </ScrollReveal>
        </ContentSection>

        {/* ━━━━━━━━━━━ 12 MAISONS ━━━━━━━━━━━ */}
        <ContentSection id="maisons">
          <ScrollReveal>
            <SectionTitle title={t("sectionHouses", { name: data.nom })} color={data.couleur.primaire} />
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.maisons.map((m, i) => (
              <ScrollReveal key={m.numero} delay={i * 50}>
                <MaisonCard maison={m} color={data.couleur.primaire} />
              </ScrollReveal>
            ))}
          </div>
        </ContentSection>

        {/* ━━━━━━━━━━━ AMOUR ━━━━━━━━━━━ */}
        <ContentSection id="amour">
          <ScrollReveal>
            <SectionTitle title={t("sectionLove", { name: data.nom })} color={data.couleur.primaire} />
            <Prose>{data.amour.texte}</Prose>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <TagListCard title={t("heartQualities")} items={data.amour.qualites} color="#F43F5E" />
              <TagListCard title={t("cautions")} items={data.amour.vigilances} color="#F59E0B" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mt-8">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest" style={{ color: "rgb(var(--muted))" }}>
                {t("naturalAffinities")}
              </h3>
              <div className="flex flex-wrap gap-3 md:justify-center">
                {data.amour.affinites.map((a) => (
                  <Link
                    key={a}
                    href={`/signes/${a}`}
                    className="group flex items-center gap-2 rounded-xl border border-[rgb(var(--border)/0.08)] bg-[rgb(var(--surface))] px-4 py-2.5 transition-all duration-300 hover:border-[rgb(var(--border)/0.18)] hover:scale-[1.03]"
                  >
                    <Image
                      src={`/images/zodiaque/${a}.webp`}
                      alt={`${a} + (${data.nom})`}
                      width={28}
                      height={28}
                      className="rounded-full opacity-70 transition-opacity group-hover:opacity-100"
                    />
                    <span className="text-sm font-medium capitalize transition-colors group-hover:text-[rgb(var(--accent))]">
                      {signNames.get(a) ?? a}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </ContentSection>

        {/* ━━━━━━━━━━━ TRAVAIL & ARGENT ━━━━━━━━━━━ */}
        <ContentSection id="travail">
          <ScrollReveal>
            <SectionTitle title={t("sectionWork", { name: data.nom })} color={data.couleur.primaire} />
            <Prose>{data.travail.texte}</Prose>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <TagListCard title={t("proStrengths")} items={data.travail.atouts} color="#10B981" />
              <TagListCard title={t("challenges")} items={data.travail.defis} color="#F59E0B" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mt-10 rounded-2xl border border-[rgb(var(--border)/0.08)] bg-[rgb(var(--surface))] p-6 md:p-8">
              <h3 className="mb-3 text-lg font-semibold">{t("moneyTitle")}</h3>
              <p className="mb-6 leading-relaxed" style={{ color: "rgb(var(--text) / 0.84)" }}>{data.argent.texte}</p>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "#10B981" }}>{t("moneyForces")}</h4>
                  <ul className="space-y-2">
                    {data.argent.forces.map((f) => (
                      <li key={f} className="text-sm" style={{ color: "rgb(var(--text) / 0.7)" }}>— {f}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "#EF4444" }}>{t("moneyRisks")}</h4>
                  <ul className="space-y-2">
                    {data.argent.risques.map((r) => (
                      <li key={r} className="text-sm" style={{ color: "rgb(var(--text) / 0.7)" }}>— {r}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </ContentSection>

        {/* ━━━━━━━━━━━ PLANÈTES ━━━━━━━━━━━ */}
        <ContentSection id="planetes">
          <ScrollReveal>
            <SectionTitle title={t("sectionPlanets", { name: data.nom })} color={data.couleur.primaire} />
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.planetes.map((p, i) => (
              <ScrollReveal key={p.slug} delay={i * 60}>
                <PlaneteCard planete={p} accentColor={data.couleur.primaire} t={t} />
              </ScrollReveal>
            ))}
          </div>
        </ContentSection>

        {/* ━━━━━━━━━━━ COMPATIBILITÉS ━━━━━━━━━━━ */}
        <ContentSection id="compatibilites">
          <ScrollReveal>
            <SectionTitle title={t("sectionCompat", { name: data.nom })} color={data.couleur.primaire} />
            <p className="mb-8" style={{ color: "rgb(var(--muted))" }}>
              {t("compatIntro", { name: data.nom })}
            </p>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.compatibilites.map((c, i) => (
              <ScrollReveal key={c.signe} delay={i * 50}>
                <CompatCard compat={c} currentSlug={data.slug} t={t} />
              </ScrollReveal>
            ))}
          </div>
        </ContentSection>

        {/* ━━━━━━━━━━━ ASCENDANT ━━━━━━━━━━━ */}
        <ContentSection id="ascendant">
          <ScrollReveal>
            <SectionTitle title={t("sectionAscendant", { name: data.nom })} color={data.couleur.primaire} />
            <Prose>{data.ascendant.texte}</Prose>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <MiniListCard title={t("appearance")} items={data.ascendant.apparence} color={data.couleur.primaire} />
              <MiniListCard title={t("ascTemperament")} items={data.ascendant.temperament} color={data.couleur.secondaire} />
              <MiniListCard title={t("ascCautions")} items={data.ascendant.vigilances} color="#F59E0B" />
            </div>
          </ScrollReveal>
        </ContentSection>

        {/* ━━━━━━━━━━━ CORRESPONDANCES ━━━━━━━━━━━ */}
        <ContentSection id="correspondances">
          <ScrollReveal>
            <SectionTitle title={t("sectionCorrespondences", { name: data.nom })} color={data.couleur.primaire} />
          </ScrollReveal>

          {/* Étoiles fixes */}
          {data.etoilesFixes.length > 0 && (
            <ScrollReveal delay={100}>
              <div className="mb-10">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest" style={{ color: "rgb(var(--muted))" }}>
                  {t("fixedStars")}
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {data.etoilesFixes.map((e) => (
                    <div key={e.nom} className="rounded-2xl border border-[rgb(var(--border)/0.06)] bg-[rgb(var(--surface))] p-5">
                      <div className="mb-2 flex items-baseline gap-2">
                        <span className="text-base font-semibold">{e.nom}</span>
                        <span className="text-xs" style={{ color: "rgb(var(--muted))" }}>{e.nature}</span>
                      </div>
                      <p className="mb-3 text-sm leading-relaxed" style={{ color: "rgb(var(--text) / 0.7)" }}>{e.texte}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {e.motsCles.map((m) => (
                          <span key={m} className="rounded-full border border-[rgb(var(--border)/0.08)] px-2.5 py-0.5 text-xs"
                                style={{ color: "rgb(var(--muted))" }}>
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Minéraux / Végétaux / Animaux */}
          <ScrollReveal delay={200}>
            <div className="grid gap-6 sm:grid-cols-3">
              <CorrespondanceGroup title={t("minerals")} icon="◆" items={data.correspondances.mineraux} color={data.couleur.primaire} />
              <CorrespondanceGroup title={t("plants")} icon="❁" items={data.correspondances.vegetaux} color={data.couleur.secondaire} />
              <CorrespondanceGroup title={t("animals")} icon="◈" items={data.correspondances.animaux} color={data.couleur.accent} />
            </div>
          </ScrollReveal>
        </ContentSection>

        {/* ━━━━━━━━━━━ GÉOGRAPHIE ━━━━━━━━━━━ */}
        {data.geographie.length > 0 && (
          <ContentSection id="geographie">
            <ScrollReveal>
              <SectionTitle title={t("sectionGeography", { name: data.nom })} color={data.couleur.primaire} />
              <div className="grid gap-3 sm:grid-cols-2">
                {data.geographie.map((g) => (
                  <div key={g.pays} className="rounded-xl border border-[rgb(var(--border)/0.06)] bg-[rgb(var(--surface))] px-5 py-4">
                    <span className="text-sm font-semibold">{g.pays}</span>
                    <p className="mt-1 text-sm" style={{ color: "rgb(var(--muted))" }}>{g.texte}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </ContentSection>
        )}

        {/* ━━━━━━━━━━━ FIGURES CÉLÈBRES ━━━━━━━━━━━ */}
        {data.figuresCelebres.length > 0 && (
          <ContentSection id="celebrites">
            <ScrollReveal>
              <SectionTitle title={t("sectionCelebrities", { name: data.nom })} color={data.couleur.primaire} />
            </ScrollReveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {data.figuresCelebres.map((f, i) => (
                <ScrollReveal key={f.nom} delay={i * 80}>
                  <div className="rounded-2xl border border-[rgb(var(--border)/0.06)] bg-[rgb(var(--surface))] p-5 transition-all duration-300 hover:border-[rgb(var(--border)/0.14)]">
                    <div className="mb-1 flex items-baseline gap-2">
                      <span className="text-base font-semibold">{f.nom}</span>
                      <span className="text-xs" style={{ color: data.couleur.primaire }}>{f.domaine}</span>
                    </div>
                    <p className="mb-2 text-xs" style={{ color: "rgb(var(--muted) / 0.8)" }}>{f.date}</p>
                    <p className="text-sm italic leading-relaxed" style={{ color: "rgb(var(--text) / 0.7)" }}>{f.texte}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ContentSection>
        )}

        {/* ━━━━━━━━━━━ FAQ ━━━━━━━━━━━ */}
        <ContentSection id="faq">
          <ScrollReveal>
            <SectionTitle title={t("sectionFaq", { name: data.nom })} color={data.couleur.primaire} />
          </ScrollReveal>
          <div className="space-y-4">
            {data.faq.map((f, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <details className="group rounded-2xl border border-[rgb(var(--border)/0.06)] bg-[rgb(var(--surface))] transition-colors open:border-[rgb(var(--border)/0.14)]">
                  <summary className="cursor-pointer select-none px-6 py-5 text-base font-medium transition-colors hover:opacity-80">
                    {f.question}
                  </summary>
                  <div className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "rgb(var(--text) / 0.7)" }}>
                    {f.reponse}
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </ContentSection>

        {/* ━━━━━━━━━━━ NAVIGATION SIGNES ━━━━━━━━━━━ */}
        <nav className="border-t border-[rgb(var(--border)/0.08)]" style={{ background: "rgb(var(--surface))" }}>
          <div className="mx-auto flex max-w-5xl items-stretch">
            <Link
              href={`/signes/${data.navigation.precedent.slug}`}
              className="group flex flex-1 items-center gap-3 px-6 py-8 no-underline transition-all duration-300 hover:bg-[rgb(var(--border)/0.03)] md:px-10"
            >
              <span className="text-xl transition-transform group-hover:-translate-x-1" style={{ color: "rgb(var(--muted))" }}>←</span>
              <div>
                <span className="block text-xs uppercase tracking-widest" style={{ color: "rgb(var(--muted) / 0.8)" }}>{t("previous")}</span>
                <span className="text-base font-semibold transition-colors group-hover:text-[rgb(var(--accent))]">
                  {data.navigation.precedent.nom}
                </span>
              </div>
            </Link>

            <div className="w-px" style={{ background: "rgb(var(--border) / 0.08)" }} />

            <Link
              href={`/signes/${data.navigation.suivant.slug}`}
              className="group flex flex-1 items-center justify-end gap-3 px-6 py-8 no-underline transition-all duration-300 hover:bg-[rgb(var(--border)/0.03)] md:px-10"
            >
              <div className="text-right">
                <span className="block text-xs uppercase tracking-widest" style={{ color: "rgb(var(--muted) / 0.7)" }}>{t("next")}</span>
                <span className="text-base font-semibold transition-colors group-hover:text-[rgb(var(--accent))]">
                  {data.navigation.suivant.nom}
                </span>
              </div>
              <span className="text-xl transition-transform group-hover:translate-x-1" style={{ color: "rgb(var(--muted))" }}>→</span>
            </Link>
          </div>
        </nav>

      </article>
    </>
  );
}


// ═══════════════════════════════════════════════════════════════════════════════
// SUB-COMPONENTS
// ═══════════════════════════════════════════════════════════════════════════════

/* ── Hero ───────────────────────────────────────────────────────────────────── */

function HeroSection({ data, t }: { data: SigneData; t: T }) {
  return (
    <header className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-6 text-center md:min-h-[90vh]">

      {/* Orbe de couleur du signe — glow animé */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full animate-glow-pulse blur-[120px] md:h-[800px] md:w-[800px]"
        style={{
          background: `radial-gradient(circle, ${data.couleur.primaire}25, ${data.couleur.secondaire}15, transparent 70%)`,
        }}
      />

      {/* Vignette sombre */}
      <div className="pointer-events-none absolute inset-0 -z-20"
           style={{ background: "radial-gradient(ellipse at center, transparent 0%, rgb(var(--bg)) 70%)" }} />

      {/* Image du signe — petite (128/176px), peu probable d'être LCP, mais
           on garde priority + fetchPriority pour cohérence avec maisons/planètes.
           Audit Lighthouse 31/05/2026. */}
      <div className="animate-fade-in-up relative mb-8 h-32 w-32 md:h-44 md:w-44">
        <Image
          src={data.images.signe}
          alt={t("altSign", { name: data.nom })}
          fill
          sizes="(min-width: 768px) 176px, 128px"
          className="object-contain"
          style={{ filter: `drop-shadow(0 0 40px ${data.couleur.primaire}30)` }}
          priority
          fetchPriority="high"
        />
      </div>

      {/* Titre principal — H1 enrichi SEO (20-70 chars) */}
      <h1 className="animate-fade-in-up animation-delay-100 mb-3">
        {data.nom}
        <span className="block text-lg font-light tracking-wide md:text-xl mt-2"
              style={{ color: "rgb(var(--muted))" }}>
          {t("heroSubtitle")}
        </span>
      </h1>

      {/* Devise */}
      <p className="animate-fade-in-up animation-delay-300 text-2xl font-light italic md:text-3xl"
         style={{ color: "rgb(var(--muted) / 0.8)" }}>
        « {data.devise} »
      </p>

      {/* Badge période / élément / mode */}
      <div className="animate-fade-in-up animation-delay-400 mt-8 inline-flex items-center gap-3 rounded-full border border-[rgb(var(--border)/0.1)] px-5 py-2.5"
           style={{ background: "rgb(var(--surface) / 0.6)", backdropFilter: "blur(12px)" }}>
        <span className="text-sm" style={{ color: "rgb(var(--text) / 0.7)" }}>{data.periode}</span>
        <span className="h-1 w-1 rounded-full" style={{ background: "rgb(var(--muted) / 0.7)" }} />
        <span className="text-sm font-medium" style={{ color: data.couleur.primaire }}>{data.element}</span>
        <span className="h-1 w-1 rounded-full" style={{ background: "rgb(var(--muted) / 0.7)" }} />
        <span className="text-sm" style={{ color: "rgb(var(--text) / 0.7)" }}>{data.mode}</span>
      </div>

      {/* Indicateur scroll */}
      <div className="absolute bottom-10 animate-bounce">
        <div className="h-8 w-5 rounded-full border-2" style={{ borderColor: "rgb(var(--border) / 0.15)" }}>
          <div className="mx-auto mt-1.5 h-2 w-1 rounded-full animate-pulse" style={{ background: "rgb(var(--border) / 0.25)" }} />
        </div>
      </div>
    </header>
  );
}

/* ── Quick Facts ────────────────────────────────────────────────────────────── */

function QuickFacts({ data, t }: { data: SigneData; t: T }) {
  const facts = [
    { label: t("facts.element"), value: data.element },
    { label: t("facts.mode"), value: data.mode },
    { label: t("facts.master"), value: data.maitre },
    { label: t("facts.exaltation"), value: data.exaltation },
    { label: t("facts.polarity"), value: data.polarite },
    { label: t("facts.house"), value: t("houseValue", { n: data.maisonNaturelle }) },
  ];

  return (
    <div className="border-y border-[rgb(var(--border)/0.08)]" style={{ background: "rgb(var(--surface))" }}>
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 py-5">
        {facts.map((f) => (
          <div key={f.label} className="flex items-center gap-2 text-sm">
            <span style={{ color: "rgb(var(--muted) )" }}>{f.label}</span>
            <span className="font-medium ">{f.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Content section ────────────────────────────────────────────────────────── */

function ContentSection({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-3xl px-6 py-16 md:py-24 ${className}`}>
      {children}
    </section>
  );
}

/* ── Section title ──────────────────────────────────────────────────────────── */

function SectionTitle({ title, color }: { title: string; color: string }) {
  return (
    <div className="mb-8 flex items-center gap-3">
      <div className="h-6 w-1 rounded-full" style={{ background: color }} />
      <h2 className="!mt-0 !border-b-0 !pb-0">{title}</h2>
    </div>
  );
}

/* ── Prose ───────────────────────────────────────────────────────────────────── */

function Prose({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const cls = `text-base leading-relaxed md:text-lg md:leading-8 ${className}`;
  const style = { color: "rgb(var(--text) / 0.84)" };

  if (typeof children === "string" && children.includes("\n\n")) {
    return (
      <>
        {children.split("\n\n").map((p, i) => (
          <p key={i} className={cls} style={style}>{p}</p>
        ))}
      </>
    );
  }

  return (
    <p className={cls} style={style}>
      {children}
    </p>
  );
}

/* ── Cosmic card ────────────────────────────────────────────────────────────── */

function CosmicCard({ label, value, sub, color }: { label: string; value: string; sub: string; color: string }) {
  return (
    <div className="group rounded-2xl border border-[rgb(var(--border)/0.06)] bg-[rgb(var(--surface))] p-5 transition-all duration-300 hover:border-[rgb(var(--border)/0.14)] hover:scale-[1.02]">
      <span className="mb-1 block text-xs font-semibold uppercase tracking-widest" style={{ color: "rgb(var(--muted))" }}>
        {label}
      </span>
      <span className="text-xl font-bold" style={{ color }}>{value}</span>
      <span className="mt-0.5 block text-xs" style={{ color: "rgb(var(--muted) / 0.7)" }}>{sub}</span>
    </div>
  );
}

/* ── Tag list card ──────────────────────────────────────────────────────────── */

function TagListCard({ title, items, color }: { title: string; items: string[]; color: string }) {
  return (
    <div className="rounded-2xl border border-[rgb(var(--border)/0.06)] bg-[rgb(var(--surface))] p-5">
      <h3 className="!mt-0 !border-b-0 !pb-0 mb-4 !text-xs !font-semibold uppercase tracking-widest" style={{ color }}>
        {title}
      </h3>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: "rgb(var(--text) / 0.7)" }}>
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: `${color}40`, border: `1px solid ${color}60` }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ── Maison card ────────────────────────────────────────────────────────────── */

function MaisonCard({ maison, color }: { maison: { numero: number; titre: string; texte: string }; color: string }) {
  return (
    <div className="group rounded-2xl border border-[rgb(var(--border)/0.06)] bg-[rgb(var(--surface))] p-5 transition-all duration-300 hover:border-[rgb(var(--border)/0.14)] hover:scale-[1.02]">
      <div className="mb-3 flex items-center gap-3">
        <span
          className="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold"
          style={{ backgroundColor: `${color}18`, color }}
        >
          {maison.numero}
        </span>
        <h3 className="!mt-0 !border-b-0 !pb-0 !text-sm !font-semibold">{maison.titre}</h3>
      </div>
      <p className="text-sm leading-relaxed" style={{ color: "rgb(var(--text) / 0.7)" }}>{maison.texte}</p>
    </div>
  );
}

/* ── Planete card ───────────────────────────────────────────────────────────── */

function PlaneteCard({ planete, accentColor, t }: { planete: SigneData["planetes"][number]; accentColor: string; t: T }) {
  return (
    <div className="group rounded-2xl border border-[rgb(var(--border)/0.06)] bg-[rgb(var(--surface))] p-5 transition-all duration-300 hover:border-[rgb(var(--border)/0.14)] hover:scale-[1.02]">
      <div className="mb-3 flex items-center gap-3">
        <div className="relative h-9 w-9 overflow-hidden rounded-full" style={{ boxShadow: `0 0 12px ${accentColor}25` }}>
          <Image src={`/images/planetes/${planete.slug}.webp`} alt={t("altPlanet", { name: planete.nom })} fill sizes="36px" className="object-cover" />
        </div>
        <h3 className="!mt-0 !border-b-0 !pb-0 !text-sm !font-semibold">{planete.nom}</h3>
      </div>
      <p className="mb-3 text-sm italic leading-relaxed" style={{ color: "rgb(var(--text) / 0.7)" }}>
        {planete.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {planete.manifestations.map((m) => (
          <span key={m} className="rounded-full border border-[rgb(var(--border)/0.08)] px-2.5 py-0.5 text-xs"
                style={{ color: "rgb(var(--muted))" }}>
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Compat card ────────────────────────────────────────────────────────────── */

function CompatCard({ compat, currentSlug, t }: { compat: SigneData["compatibilites"][number]; currentSlug: string; t: T }) {
  const style = COMPAT_TYPE_STYLES[compat.type] || COMPAT_TYPE_STYLES.variable;
  const typeLabel = t(`compatType.${compat.type}`);

  return (
    <Link
      href={compat.signe === currentSlug ? "#compatibilites" : `/signes/${compat.signe}`}
      className="group block rounded-2xl border border-[rgb(var(--border)/0.06)] bg-[rgb(var(--surface))] p-5 no-underline transition-all duration-300 hover:border-[rgb(var(--border)/0.14)] hover:scale-[1.02]"
    >
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-8 w-8 overflow-hidden rounded-full">
            <Image src={`/images/zodiaque/${compat.signe}.webp`} alt={t("altCompat", { name: compat.nom })} fill sizes="32px" className="object-cover opacity-70 transition-opacity group-hover:opacity-100" />
          </div>
          <h3 className="!mt-0 !border-b-0 !pb-0 !text-sm !font-semibold">{compat.nom}</h3>
        </div>
        <span className="rounded-full px-2.5 py-0.5 text-xs font-medium"
              style={{ background: `${style.color}20`, color: style.color }}>
          {typeLabel}
        </span>
      </div>
      <p className="mb-1 text-xs font-medium" style={{ color: "rgb(var(--muted) / 0.8)" }}>{compat.titre}</p>
      <p className="text-sm leading-relaxed" style={{ color: "rgb(var(--text) / 0.7)" }}>{compat.texte}</p>
    </Link>
  );
}

/* ── Mini list card ─────────────────────────────────────────────────────────── */

function MiniListCard({ title, items, color }: { title: string; items: string[]; color: string }) {
  return (
    <div className="rounded-2xl border border-[rgb(var(--border)/0.06)] bg-[rgb(var(--surface))] p-5">
      <h3 className="!mt-0 !border-b-0 !pb-0 mb-3 !text-xs !font-semibold uppercase tracking-widest" style={{ color }}>
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="text-sm" style={{ color: "rgb(var(--text) / 0.7)" }}>— {item}</li>
        ))}
      </ul>
    </div>
  );
}

/* ── Correspondance group ───────────────────────────────────────────────────── */

function CorrespondanceGroup({
  title,
  icon,
  items,
  color,
}: {
  title: string;
  icon: string;
  items: Array<{ nom: string; motsCles: string[] }>;
  color: string;
}) {
  return (
    <div>
      <h3 className="!mt-0 !border-b-0 !pb-0 mb-4 flex items-center gap-2 !text-sm !font-semibold uppercase tracking-widest" style={{ color }}>
        <span>{icon}</span> {title}
      </h3>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.nom} className="rounded-xl border border-[rgb(var(--border)/0.06)] bg-[rgb(var(--surface))] px-4 py-3">
            <span className="mb-1.5 block text-sm font-medium">{item.nom}</span>
            <div className="flex flex-wrap gap-1.5">
              {item.motsCles.map((m) => (
                <span key={m} className="rounded-full border border-[rgb(var(--border)/0.06)] px-2 py-0.5 text-xs"
                      style={{ color: "rgb(var(--muted))" }}>
                  {m}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}