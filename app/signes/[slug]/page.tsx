// app/signes/[slug]/page.tsx

import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";
import ScrollReveal from "@/components/ScrollReveal";

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

function getSigneData(slug: string): SigneData | null {
  try {
    const filePath = path.join(process.cwd(), "data", "signes", `${slug}.json`);
    const raw = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(raw) as SigneData;
  } catch {
    return null;
  }
}

function getAllSigneSlugs(): string[] {
  const dir = path.join(process.cwd(), "data", "signes");
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.replace(".json", ""));
}

// ─── Static params (Next.js 16) ────────────────────────────────────────────

export async function generateStaticParams() {
  return getAllSigneSlugs().map((slug) => ({ slug }));
}

// ─── Metadata + SEO ─────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = getSigneData(slug);
  if (!data) return {};

  const title = `${data.nom} — Encyclopédie complète du signe astrologique`;
  const description = `Tout savoir sur le signe du ${data.nom} : portrait, tempérament, compatibilités, planètes, 12 maisons, mythologie. Guide astrologique de référence.`;
  const url = `https://www.astro-cours.com/signes/${data.slug}`;

  return {
    title,
    description,
    keywords: [
      `signe du ${data.nom}`,
      `${data.nom} astrologie`,
      `compatibilité ${data.nom}`,
      `Ascendant ${data.nom}`,
      `${data.nom} ${data.element}`,
      `${data.maitre} astrologie`,
      `portrait ${data.nom}`,
      `${data.nom} amour`,
      `${data.nom} travail`,
      `thème astral ${data.nom}`,
    ],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title,
      description,
      url,
      images: [{ url: data.images.signe, alt: `Signe du ${data.nom}` }],
      locale: "fr_FR",
      siteName: "Astro-Cours",
    },
    twitter: {
      card: "summary_large_image",
      title: `${data.nom} — Premier signe du Zodiaque`,
      description,
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
// PAGE COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

export default async function SignePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getSigneData(slug);
  if (!data) notFound();

  // Schema.org JSON-LD
  const schemaArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${data.nom} — Encyclopédie complète du signe astrologique`,
    description: `Tout savoir sur le signe du ${data.nom} : portrait, tempérament, compatibilités, planètes, 12 maisons.`,
    image: `https://www.astro-cours.com${data.images.signe}`,
    author: { "@type": "Organization", name: "Astro-Cours" },
    publisher: {
      "@type": "Organization",
      name: "Astro-Cours",
      logo: { "@type": "ImageObject", url: "https://www.astro-cours.com/logo.png" },
    },
    mainEntityOfPage: `https://www.astro-cours.com/signes/${data.slug}`,
    datePublished: "2026-04-09",
    dateModified: new Date().toISOString().split("T")[0],
    articleSection: "Astrologie",
    inLanguage: "fr",
  };

  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.reponse },
    })),
  };

  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.astro-cours.com/" },
      { "@type": "ListItem", position: 2, name: "Signes", item: "https://www.astro-cours.com/signes" },
      { "@type": "ListItem", position: 3, name: data.nom, item: `https://www.astro-cours.com/signes/${data.slug}` },
    ],
  };

  return (
    <>
      {/* Schema.org */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />

      <article className="min-h-screen antialiased">

        {/* ━━━━━━━━━━━ HERO ━━━━━━━━━━━ */}
        <HeroSection data={data} />

        {/* ━━━━━━━━━━━ QUICK FACTS ━━━━━━━━━━━ */}
        <QuickFacts data={data} />

        {/* ━━━━━━━━━━━ INTRODUCTION ━━━━━━━━━━━ */}
        <ContentSection id="introduction" className="pt-20 md:pt-28">
          <ScrollReveal>
            <SectionTitle title="Introduction" color={data.couleur.primaire} />
            <Prose>{data.introduction}</Prose>
          </ScrollReveal>
        </ContentSection>

        {/* ━━━━━━━━━━━ FONDATIONS COSMIQUES ━━━━━━━━━━━ */}
        <ContentSection id="fondations">
          <ScrollReveal>
            <SectionTitle title="Fondations cosmiques" color={data.couleur.primaire} />
            <Prose>{data.fondationsCosmiques.texte}</Prose>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <CosmicCard label="Maître" value={data.maitre} sub="Domicile" color={data.couleur.primaire} />
              <CosmicCard label="Exaltation" value={data.exaltation} sub="Force maximale" color={data.couleur.secondaire} />
              <CosmicCard label="Exil" value={data.exil} sub="En difficulté" color="rgb(var(--muted))" />
              <CosmicCard label="Chute" value={data.chute} sub="Contrariée" color="rgb(var(--muted) / 0.8)" />
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
            <SectionTitle title={`Mythologie — ${data.mythologie.titre}`} color={data.couleur.primaire} />
            <Prose>{data.mythologie.texte}</Prose>
            <Prose className="mt-4 opacity-70">{data.mythologie.civilisations}</Prose>
          </ScrollReveal>
        </ContentSection>

        {/* ━━━━━━━━━━━ PORTRAIT INTIME ━━━━━━━━━━━ */}
        <ContentSection id="portrait">
          <ScrollReveal>
            <SectionTitle title="Portrait intime" color={data.couleur.primaire} />
            <Prose>{data.portrait.temperament}</Prose>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <TagListCard title="Forces" items={data.portrait.forces} color="#10B981" />
              <TagListCard title="Ombres" items={data.portrait.ombres} color="#EF4444" />
              <TagListCard title="Besoins vitaux" items={data.portrait.besoinsVitaux} color="#F59E0B" />
              <TagListCard title="À travailler" items={data.portrait.aTravailler} color="#38BDF8" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mt-10 rounded-2xl border border-[rgb(var(--border)/0.1)] p-6 md:p-8"
                 style={{ background: `linear-gradient(135deg, ${data.couleur.primaire}08, transparent)` }}>
              <h3 className="mb-3 text-lg font-semibold">État d&apos;équilibre</h3>
              <p className="leading-relaxed" style={{ color: "rgb(var(--text) / 0.84)" }}>{data.portrait.equilibre}</p>
            </div>
          </ScrollReveal>
        </ContentSection>

        {/* ━━━━━━━━━━━ SANTÉ ━━━━━━━━━━━ */}
        <ContentSection id="sante">
          <ScrollReveal>
            <SectionTitle title="Correspondances anatomiques" color={data.couleur.primaire} />
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
            <SectionTitle title={`Le ${data.nom} dans les 12 Maisons`} color={data.couleur.primaire} />
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
            <SectionTitle title="Cœur & Alchimie" color={data.couleur.primaire} />
            <Prose>{data.amour.texte}</Prose>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <TagListCard title="Qualités du cœur" items={data.amour.qualites} color="#F43F5E" />
              <TagListCard title="Points de vigilance" items={data.amour.vigilances} color="#F59E0B" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mt-8">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest" style={{ color: "rgb(var(--muted))" }}>
                Affinités naturelles
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
                      {a}
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
            <SectionTitle title="Réalisation & Matière" color={data.couleur.primaire} />
            <Prose>{data.travail.texte}</Prose>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <TagListCard title="Atouts professionnels" items={data.travail.atouts} color="#10B981" />
              <TagListCard title="Défis à relever" items={data.travail.defis} color="#F59E0B" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mt-10 rounded-2xl border border-[rgb(var(--border)/0.08)] bg-[rgb(var(--surface))] p-6 md:p-8">
              <h3 className="mb-3 text-lg font-semibold">Énergie de l&apos;argent</h3>
              <p className="mb-6 leading-relaxed" style={{ color: "rgb(var(--text) / 0.84)" }}>{data.argent.texte}</p>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "#10B981" }}>Forces</h4>
                  <ul className="space-y-2">
                    {data.argent.forces.map((f) => (
                      <li key={f} className="text-sm" style={{ color: "rgb(var(--text) / 0.7)" }}>— {f}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "#EF4444" }}>Risques</h4>
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
            <SectionTitle title={`Les planètes en ${data.nom}`} color={data.couleur.primaire} />
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.planetes.map((p, i) => (
              <ScrollReveal key={p.slug} delay={i * 60}>
                <PlaneteCard planete={p } accentColor={data.couleur.primaire} />
              </ScrollReveal>
            ))}
          </div>
        </ContentSection>

        {/* ━━━━━━━━━━━ COMPATIBILITÉS ━━━━━━━━━━━ */}
        <ContentSection id="compatibilites">
          <ScrollReveal>
            <SectionTitle title="Duo & Dynamiques" color={data.couleur.primaire} />
            <p className="mb-8" style={{ color: "rgb(var(--muted))" }}>
              Comment le {data.nom} interagit avec chacun des 12 signes du Zodiaque.
            </p>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.compatibilites.map((c, i) => (
              <ScrollReveal key={c.signe} delay={i * 50}>
                <CompatCard compat={c} currentSlug={data.slug} />
              </ScrollReveal>
            ))}
          </div>
        </ContentSection>

        {/* ━━━━━━━━━━━ ASCENDANT ━━━━━━━━━━━ */}
        <ContentSection id="ascendant">
          <ScrollReveal>
            <SectionTitle title={`L'Ascendant ${data.nom}`} color={data.couleur.primaire} />
            <Prose>{data.ascendant.texte}</Prose>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <MiniListCard title="Apparence" items={data.ascendant.apparence} color={data.couleur.primaire} />
              <MiniListCard title="Tempérament" items={data.ascendant.temperament} color={data.couleur.secondaire} />
              <MiniListCard title="Vigilances" items={data.ascendant.vigilances} color="#F59E0B" />
            </div>
          </ScrollReveal>
        </ContentSection>

        {/* ━━━━━━━━━━━ CORRESPONDANCES ━━━━━━━━━━━ */}
        <ContentSection id="correspondances">
          <ScrollReveal>
            <SectionTitle title="Correspondances symboliques" color={data.couleur.primaire} />
          </ScrollReveal>

          {/* Étoiles fixes */}
          {data.etoilesFixes.length > 0 && (
            <ScrollReveal delay={100}>
              <div className="mb-10">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest" style={{ color: "rgb(var(--muted))" }}>
                  Étoiles fixes
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
              <CorrespondanceGroup title="Minéraux" icon="◆" items={data.correspondances.mineraux} color={data.couleur.primaire} />
              <CorrespondanceGroup title="Végétaux" icon="❁" items={data.correspondances.vegetaux} color={data.couleur.secondaire} />
              <CorrespondanceGroup title="Animaux" icon="◈" items={data.correspondances.animaux} color={data.couleur.accent} />
            </div>
          </ScrollReveal>
        </ContentSection>

        {/* ━━━━━━━━━━━ GÉOGRAPHIE ━━━━━━━━━━━ */}
        {data.geographie.length > 0 && (
          <ContentSection id="geographie">
            <ScrollReveal>
              <SectionTitle title="Géographie traditionnelle" color={data.couleur.primaire} />
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
              <SectionTitle title="Figures de légende" color={data.couleur.primaire} />
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
            <SectionTitle title="Foire aux questions" color={data.couleur.primaire} />
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
                <span className="block text-xs uppercase tracking-widest" style={{ color: "rgb(var(--muted) / 0.8)" }}>Précédent</span>
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
                <span className="block text-xs uppercase tracking-widest" style={{ color: "rgb(var(--muted) / 0.7)" }}>Suivant</span>
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

function HeroSection({ data }: { data: SigneData }) {
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

      {/* Image du signe */}
      <div className="animate-fade-in-up relative mb-8 h-32 w-32 md:h-44 md:w-44">
        <Image
          src={data.images.signe}
          alt={`Signe du ${data.nom}`}
          fill
          className="object-contain"
          style={{ filter: `drop-shadow(0 0 40px ${data.couleur.primaire}30)` }}
          priority
        />
      </div>

      {/* Titre principal */}
      <h1 className="animate-fade-in-up animation-delay-100 mb-3">
        {data.nom}
      </h1>

      {/* Sous-titre */}
      <p className="animate-fade-in-up animation-delay-200 mb-2 text-lg font-light tracking-wide md:text-xl"
         style={{ color: "rgb(var(--muted))" }}>
        {data.sousTitre}
      </p>

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
        <span className="text-sm" style={{ color: "rgb(var(--text) / 0.7)" }}>{data.mode}</span>sub
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

function QuickFacts({ data }: { data: SigneData }) {
  const facts = [
    { label: "Élément", value: data.element },
    { label: "Mode", value: data.mode },
    { label: "Maître", value: data.maitre },
    { label: "Exaltation", value: data.exaltation },
    { label: "Polarité", value: data.polarite },
    { label: "Maison", value: `Maison ${data.maisonNaturelle}` },
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
  return (
    <p className={`text-base leading-relaxed md:text-lg md:leading-8 ${className}`}
       style={{ color: "rgb(var(--text) / 0.84)" }}>
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

function PlaneteCard({ planete, accentColor }: { planete: SigneData["planetes"][number]; accentColor: string }) {
  return (
    <div className="group rounded-2xl border border-[rgb(var(--border)/0.06)] bg-[rgb(var(--surface))] p-5 transition-all duration-300 hover:border-[rgb(var(--border)/0.14)] hover:scale-[1.02]">
      <div className="mb-3 flex items-center gap-3">
        <div className="relative h-9 w-9 overflow-hidden rounded-full" style={{ boxShadow: `0 0 12px ${accentColor}25` }}>
          <Image src={`/images/planetes/${planete.slug}.webp`} alt={`Illustration de la planète ${planete.nom}`} fill className="object-cover" />
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

function CompatCard({ compat, currentSlug }: { compat: SigneData["compatibilites"][number]; currentSlug: string }) {
  const style = COMPAT_TYPE_STYLES[compat.type] || COMPAT_TYPE_STYLES.variable;

  return (
    <Link
      href={compat.signe === currentSlug ? "#compatibilites" : `/signes/${compat.signe}`}
      className="group block rounded-2xl border border-[rgb(var(--border)/0.06)] bg-[rgb(var(--surface))] p-5 no-underline transition-all duration-300 hover:border-[rgb(var(--border)/0.14)] hover:scale-[1.02]"
    >
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-8 w-8 overflow-hidden rounded-full">
            <Image src={`/images/zodiaque/${compat.signe}.webp`} alt={`Illustration de la planète ${compat.nom}`} fill className="object-cover opacity-70 transition-opacity group-hover:opacity-100" />
          </div>
          <h3 className="!mt-0 !border-b-0 !pb-0 !text-sm !font-semibold">{compat.nom}</h3>
        </div>
        <span className="rounded-full px-2.5 py-0.5 text-xs font-medium"
              style={{ background: `${style.color}20`, color: style.color }}>
          {style.label}
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