import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { ReactNode } from "react";

// Icônes Professionnelles pour le design Premium
import { 
  Star, Sparkles, Heart, Zap, Shield, Moon, Sun, 
  Info, Compass, Target, Gem, Leaf, User, Briefcase, 
  Coins, MapPin, HelpCircle, ArrowRight, ArrowLeft,
  Flame, Droplets, Wind, Mountain, Anchor, Activity, 
  BookOpen, Layers, Globe, Gift
} from "lucide-react";

import {
  elementTheme,
  getZodiaqueItemBySlug,
} from "@/components/sections/zodiaque/Helpers";

import signesIndex from "@/data/signes/index.json";

// --- TYPES COMPLETS ---
type PlanetKey = "soleil" | "lune" | "mercure" | "venus" | "mars" | "jupiter" | "saturne" | "uranus" | "neptune" | "pluton";
type CompatibilityLevel = "fluide" | "stimulante" | "complementaire" | "intense" | "delicate" | "variable";

interface Sign {
  slug: string;
  nom?: string;
  name?: string;
  element?: string;
  periode?: string;
  polarite?: string;
  mode?: string;
  maitre?: string;
  exaltation?: string | null;
  exil?: string | null;
  chute?: string | null;
  motCle?: string;
  mythologie?: string;
  analogie?: { animal?: string; objet?: string; fonction?: string };
  anatomie?: string[];
  generalites?: string[];
  caractere?: string[];
  aptitudesNaturelles?: string[];
  ceQuIlRegitDansLeMonde?: string[];
  forces?: string[];
  ombres?: string[];
  besoins?: string[];
  aTravailler?: string[];
  quandCestEquilibre?: string[];
  aptitudes?: { atouts?: string[]; defis?: string[] };
  maisonCorrespondante?: { numero: number; nom: string; resume: string; themes: string[] };
  amour?: { intro: string; qualites: string[]; vigilances: string[]; compatibleAvec?: string[]; attirePar?: string[] };
  travail?: { intro: string; qualites: string[]; vigilances: string[]; domainesFavorables?: string[] };
  argent?: { intro: string; forces: string[]; risques: string[]; rapportTypique: string[] };
  planeteDansLeSigne?: { intro?: string; motsCles?: string[]; exemples?: string[]; planetes?: Record<PlanetKey, any> };
  relationsAuxAutresSignes?: { sign: string; level: CompatibilityLevel; title: string; summary: string; pointsFortes?: string[]; pointsDeTension?: string[] }[];
  pierresEtMetaux?: { nom: string; type?: string; description: string; motsCles?: string[] }[];
  plantes?: { nom: string; type?: string; description: string; usagesSymboliques?: string[] }[];
  animaux?: { nom: string; type?: string; description: string; motsCles?: string[] }[];
  celebrites?: { nom: string; dateNaissance?: string; domaine?: string; description?: string }[];
  faq?: { question: string; answer: string }[];
  ascendant?: { intro: string; apparence?: string[]; temperament?: string[]; enRelation?: string[]; pointsDeVigilance?: string[] };
  signeDominant?: { intro: string; forces: string[]; vigilances: string[]; dansLaVie: string[]; enAmour?: string[]; auTravail?: string[] };
  dansUnTheme?: string[];
  etoilesFixes?: { nom: string; nature?: string; motsCles?: string[]; description: string }[];
  paysAssocies?: { pays: string; niveau: string; justification: string }[];
}

// --- CONSTANTES & HELPERS ---
const SITE_URL = "https://www.astro-cours.com";
const SITE_NAME = "Astro Cours";
const SIGNS = signesIndex as any[];

function normalizeSlug(raw: string) { return decodeURIComponent(raw).trim().toLowerCase(); }
function getSignLabel(sign: Sign) { return sign.nom ?? sign.name ?? sign.slug; }
function hasItems<T>(value?: T[] | null): value is T[] { return Array.isArray(value) && value.length > 0; }

function humanizePlanetKey(planet: PlanetKey) {
  const map: Record<PlanetKey, string> = {
    soleil: "Soleil", lune: "Lune", mercure: "Mercure", venus: "Vénus",
    mars: "Mars", jupiter: "Jupiter", saturne: "Saturne",
    uranus: "Uranus", neptune: "Neptune", pluton: "Pluton",
  };
  return map[planet];
}

function getPlanetTheme(planet: PlanetKey) {
  const themes: Record<string, any> = {
    soleil: { border: "border-amber-400/30", bg: "bg-amber-400/10", text: "text-amber-400" },
    lune: { border: "border-slate-300/30", bg: "bg-slate-300/10", text: "text-slate-200" },
    venus: { border: "border-pink-400/30", bg: "bg-pink-400/10", text: "text-pink-300" },
    mars: { border: "border-red-500/30", bg: "bg-red-500/10", text: "text-red-400" },
    jupiter: { border: "border-purple-400/30", bg: "bg-purple-400/10", text: "text-purple-300" },
  };
  return themes[planet] || { border: "border-sky-400/30", bg: "bg-sky-400/10", text: "text-sky-300" };
}

function humanizeRelationLevel(level: CompatibilityLevel) {
  const map: Record<CompatibilityLevel, string> = {
    fluide: "Fluide", stimulante: "Stimulante", complementaire: "Complémentaire",
    intense: "Intense", delicate: "Délicate", variable: "Variable",
  };
  return map[level];
}

async function readSignFile(slug: string): Promise<Sign | null> {
  try {
    const filePath = path.join(process.cwd(), "data", "signes", `${slug}.json`);
    const file = await readFile(filePath, "utf8");
    return JSON.parse(file) as Sign;
  } catch { return null; }
}

// --- COMPOSANTS UI PREMIUM ---
const PremiumCard = ({ children, accent, className = "" }: { children: ReactNode, accent: any, className?: string }) => (
  <div className={`relative overflow-hidden rounded-[40px] border ${accent.border} bg-[#0a0f1e]/80 backdrop-blur-2xl p-8 md:p-12 transition-all duration-700 hover:shadow-2xl ${className}`}>
    {children}
  </div>
);

const SectionHeader = ({ title, subtitle, icon: Icon, accent, id }: any) => (
  <div id={id} className="mb-16 mt-32 flex flex-col items-center text-center">
    {Icon && <Icon className={`mb-6 h-12 w-12 ${accent.text} opacity-80`} />}
    <h2 className="font-serif text-5xl md:text-7xl tracking-tight text-white">{title}</h2>
    <div className={`mt-8 h-1.5 w-32 ${accent.dot} rounded-full`} />
    {subtitle && <p className="mt-8 max-w-3xl text-slate-400 font-light italic text-xl md:text-2xl leading-relaxed">{subtitle}</p>}
  </div>
);

const BulletList = ({ title, items, accent, icon: Icon }: any) => (
  <div className="flex flex-col space-y-6">
    <div className="flex items-center gap-3">
      {Icon && <Icon className={`h-5 w-5 ${accent.text}`} />}
      <h3 className="text-xs uppercase tracking-[0.4em] text-slate-500 font-bold">{title}</h3>
    </div>
    <ul className="space-y-4">
      {items?.map((item: string) => (
        <li key={item} className="text-slate-300 font-light flex items-start gap-4 text-lg leading-relaxed">
          <span className={`${accent.dot} mt-2.5 h-1.5 w-1.5 rounded-full shrink-0 shadow-[0_0_8px_currentColor]`} />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const PillList = ({ items, accent, soft = false }: { items: string[], accent: any, soft?: boolean }) => (
  <div className="flex flex-wrap gap-3">
    {items.map((item) => (
      <span key={item} className={soft 
        ? "px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-400" 
        : `px-5 py-2 rounded-full border ${accent.border} ${accent.bg} text-sm ${accent.text}`}>
        {item}
      </span>
    ))}
  </div>
);

// --- METADATA (SEO) ---
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug: raw } = await params;
  const slug = normalizeSlug(raw);
  const sign = await readSignFile(slug);
  if (!sign) return {};
  const label = getSignLabel(sign);
  return {
    title: `${label} — Signe astrologique | ${SITE_NAME}`,
    description: sign.generalites?.[0]?.slice(0, 160) || `Découvrez le portrait complet du signe ${label}.`,
    alternates: { canonical: `${SITE_URL}/signes/${slug}` },
  };
}

export const dynamicParams = false;
export async function generateStaticParams() {
  return SIGNS.map((s) => ({ slug: s.slug }));
}

// --- PAGE PRINCIPALE ---
export default async function SignPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug: raw } = await params;
  const slug = normalizeSlug(raw);
  const sign = await readSignFile(slug);
  if (!sign) notFound();

  const label = getSignLabel(sign);
  const accent = elementTheme(sign.element);
  const heroSrc = `/images/signes/${sign.slug}/a.webp`;
  const elementSrc = `/images/signes/${sign.slug}/b.webp`;

  const idx = SIGNS.findIndex((s) => s.slug === slug);
  const prevSign = SIGNS[(idx - 1 + SIGNS.length) % SIGNS.length];
  const nextSign = SIGNS[(idx + 1) % SIGNS.length];

  // --- SCHEMA.ORG (JSON-LD) ---
  const introText = sign.generalites?.[0] || "";
  const canonical = `${SITE_URL}/signes/${slug}`;
  const ogImage = `${SITE_URL}/images/zodiaque/png/${slug}.png`;

  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${label} — Signe astrologique`,
    description: introText,
    url: canonical,
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${label} : personnalité, amour, travail et symbolique`,
    image: [ogImage],
    author: { "@type": "Person", name: "Stéphane Gamot" },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Signes", item: `${SITE_URL}/signes` },
      { "@type": "ListItem", position: 3, name: label, item: canonical },
    ],
  };

  const faqJsonLd = sign.faq ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: sign.faq.map(f => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer }
    }))
  } : null;

  return (
    <div className="bg-[#010409] min-h-screen text-slate-300 selection:bg-white/10 selection:text-white">
      {/* Scripts JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}

      <main className="mx-auto max-w-7xl px-6 pb-40">
        
        {/* --- HERO SECTION --- */}
        <section className="relative pt-24 mb-48 flex flex-col items-center text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[700px] opacity-20 blur-[140px] pointer-events-none" 
               style={{ background: `radial-gradient(circle, ${accent.dot} 0%, transparent 75%)` }} />
          
          <div className={`px-6 py-2 rounded-full border ${accent.border} ${accent.bg} text-[11px] uppercase tracking-[0.6em] ${accent.text} mb-12 flex items-center gap-3`}>
            <Sparkles className="h-3 w-3" />
            Signe du Zodiaque
          </div>
          
          <h1 className="font-serif text-[9rem] md:text-[14rem] text-white tracking-tighter leading-[0.7] mb-12 drop-shadow-2xl">
            {label}
          </h1>
          
          <p className="font-serif text-4xl md:text-6xl italic text-slate-400 opacity-90 mb-24 max-w-4xl">
            « {sign.motCle} »
          </p>

          <div className="w-full relative group">
            <div className={`absolute -inset-4 rounded-[60px] opacity-10 blur-3xl transition group-hover:opacity-30 ${accent.bg}`} />
            <div className="relative overflow-hidden rounded-[56px] border border-white/10 bg-[#0a0f1e] shadow-2xl">
              <Image src={heroSrc} alt={label} width={2000} height={1000} priority className="w-full h-[600px] md:h-[800px] object-cover transition duration-[2s] group-hover:scale-110" />
              
              {/* Floating Stats Dashboard */}
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[94%] grid grid-cols-2 md:grid-cols-4 gap-8 p-12 backdrop-blur-3xl bg-black/60 rounded-[40px] border border-white/10 shadow-3xl">
                  {[
                    { l: "Élément", v: sign.element, i: Droplets },
                    { l: "Maître", v: sign.maitre, i: Sun },
                    { l: "Mode", v: sign.mode, i: Zap },
                    { l: "Période", v: sign.periode, i: Moon },
                  ].map((item) => (
                    <div key={item.l} className="flex flex-col items-center">
                      <span className="text-[10px] uppercase tracking-[0.4em] text-slate-500 mb-4 font-bold">{item.l}</span>
                      <span className="text-xl font-medium text-white flex items-center gap-4">
                         <item.i className={`h-6 w-6 ${accent.text}`} /> {item.v}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 1 : ESSENTIEL & ANALOGIES --- */}
        <div className="grid lg:grid-cols-12 gap-12 mb-32">
          <div className="lg:col-span-8">
            <PremiumCard accent={accent}>
               <h3 className="font-serif text-3xl text-white mb-8 flex items-center gap-4">
                 <Target className={accent.text} /> Fondations Cosmiques
               </h3>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    ["Maître", sign.maitre],
                    ["Exaltation", sign.exaltation],
                    ["Exil", sign.exil],
                    ["Chute", sign.chute],
                  ].map(([title, val]) => (
                    <div key={title} className="p-6 rounded-3xl bg-white/[0.03] border border-white/5">
                      <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-2">{title}</p>
                      <p className="text-lg text-white font-serif">{val || "—"}</p>
                    </div>
                  ))}
               </div>
            </PremiumCard>
          </div>
          <div className="lg:col-span-4">
            <PremiumCard accent={accent} className="h-full flex flex-col justify-center">
              <h3 className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-8 font-bold flex items-center gap-3">
                <Layers className="h-4 w-4" /> Analogies
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] text-slate-500 uppercase mb-1">Animal</p>
                  <p className="text-white text-lg font-serif">{sign.analogie?.animal}</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase mb-1">Objet</p>
                  <p className="text-white text-lg font-serif">{sign.analogie?.objet}</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase mb-1">Fonction</p>
                  <p className="text-white text-lg font-serif">{sign.analogie?.fonction}</p>
                </div>
              </div>
            </PremiumCard>
          </div>
        </div>

        {/* --- MAISON CORRESPONDANTE & MYTHOLOGIE --- */}
        <section className="grid md:grid-cols-2 gap-12 mb-40">
           {sign.maisonCorrespondante && (
             <PremiumCard accent={accent}>
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 rounded-2xl ${accent.bg} flex items-center justify-center text-2xl font-serif ${accent.text}`}>
                    {sign.maisonCorrespondante.numero}
                  </div>
                  <h3 className="text-3xl font-serif text-white">Maison {sign.maisonCorrespondante.nom}</h3>
                </div>
                <p className="text-lg text-slate-400 italic mb-8 leading-relaxed">"{sign.maisonCorrespondante.resume}"</p>
                <PillList items={sign.maisonCorrespondante.themes} accent={accent} />
             </PremiumCard>
           )}
           {sign.mythologie && (
             <PremiumCard accent={accent}>
                <h3 className="text-3xl font-serif text-white mb-8 flex items-center gap-4">
                  <BookOpen className={accent.text} /> Référence Mythologique
                </h3>
                <p className="text-lg text-slate-400 font-light leading-relaxed">{sign.mythologie}</p>
             </PremiumCard>
           )}
        </section>

        {/* --- CARACTÈRE & GÉNÉRALITÉS --- */}
        <section className="grid lg:grid-cols-12 gap-24 items-start mb-56">
          <div className="lg:col-span-5 space-y-16">
             <SectionHeader title="Portrait & Essence" accent={accent} className="!mt-0 !text-left !items-start" />
             <p className="text-3xl md:text-4xl text-slate-400 font-light leading-relaxed italic border-l-[6px] border-white/5 pl-10">
               {sign.generalites?.[0]}
             </p>
             {hasItems(sign.anatomie) && (
               <div className="pt-10">
                 <p className="text-[10px] uppercase tracking-[0.4em] text-slate-500 mb-6 font-bold flex items-center gap-3">
                   <Activity className="h-4 w-4" /> Gouvernance Physique
                 </p>
                 <PillList items={sign.anatomie} accent={accent} soft />
               </div>
             )}
          </div>
          <div className="lg:col-span-7">
            <PremiumCard accent={accent}>
              <div className="grid md:grid-cols-2 gap-20">
                <BulletList title="Tempérament" items={sign.caractere} icon={User} accent={accent} />
                <BulletList title="Aptitudes" items={sign.aptitudesNaturelles} icon={Zap} accent={accent} />
              </div>
              <div className="mt-20 pt-12 border-t border-white/5">
                <p className="text-[10px] uppercase tracking-[0.4em] text-slate-500 mb-6 font-bold flex items-center gap-3">
                  <Globe className="h-4 w-4" /> Ce qu'il régit dans le monde
                </p>
                <PillList items={sign.ceQuIlRegitDansLeMonde || []} accent={accent} />
              </div>
            </PremiumCard>
          </div>
        </section>

        {/* --- REPERES & EVOLUTION --- */}
        <section className="mb-40">
           <div className="grid md:grid-cols-3 gap-8 mb-8">
              <PremiumCard accent={accent} className="!p-8"><BulletList title="Forces" items={sign.forces} accent={accent} /></PremiumCard>
              <PremiumCard accent={accent} className="!p-8"><BulletList title="Ombres" items={sign.ombres} accent={accent} /></PremiumCard>
              <PremiumCard accent={accent} className="!p-8"><BulletList title="Besoins" items={sign.besoins} accent={accent} /></PremiumCard>
           </div>
           <div className="grid md:grid-cols-2 gap-8">
              <PremiumCard accent={accent} className="!p-8"><BulletList title="À Travailler" items={sign.aTravailler} accent={accent} /></PremiumCard>
              <PremiumCard accent={accent} className="!p-8"><BulletList title="Quand c'est équilibré" items={sign.quandCestEquilibre} accent={accent} /></PremiumCard>
           </div>
        </section>

        {/* --- AMOUR & PASSION --- */}
        <SectionHeader title="Cœur & Alchimie" subtitle="L'art d'aimer, de s'unir et de fusionner." icon={Heart} accent={accent} />
        <div className="grid lg:grid-cols-3 gap-12 mb-56">
          <PremiumCard className="lg:col-span-2 flex flex-col justify-center" accent={accent}>
            <p className="text-4xl text-white font-serif italic leading-[1.4] mb-16">"{sign.amour?.intro}"</p>
            <div className="grid md:grid-cols-2 gap-16">
              <BulletList title="Qualités du Cœur" items={sign.amour?.qualites} accent={accent} />
              <BulletList title="Points de Vigilance" items={sign.amour?.vigilances} accent={accent} />
            </div>
          </PremiumCard>
          <div className={`rounded-[48px] border ${accent.border} ${accent.bg} p-12 flex flex-col items-center text-center justify-center space-y-12`}>
            <Gem className={`h-16 w-16 ${accent.text}`} />
            <div className="space-y-6">
              <h4 className="text-white font-serif text-3xl">Affinités</h4>
              <div className="flex flex-wrap justify-center gap-4">
                {sign.amour?.compatibleAvec?.map(c => (
                  <span key={c} className="px-6 py-3 rounded-2xl bg-black/40 border border-white/10 text-base text-white">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- VOCATION & MATIÈRE --- */}
        <SectionHeader title="Réalisation & Matière" subtitle="Impact professionnel et gestion des ressources." icon={Briefcase} accent={accent} />
        <div className="grid lg:grid-cols-2 gap-12 mb-56">
          <PremiumCard accent={accent}>
            <div className="flex items-center gap-6 mb-10">
              <Briefcase className={`h-8 w-8 ${accent.text}`} />
              <h3 className="text-3xl font-serif text-white">L'Œuvre au Travail</h3>
            </div>
            <p className="text-2xl text-slate-400 mb-12 italic leading-relaxed">{sign.travail?.intro}</p>
            <div className="grid md:grid-cols-2 gap-12">
               <BulletList title="Atouts" items={sign.travail?.qualites} accent={accent} />
               <BulletList title="Défis" items={sign.travail?.vigilances} accent={accent} />
            </div>
          </PremiumCard>
          <PremiumCard accent={accent}>
            <div className="flex items-center gap-6 mb-10">
              <Coins className={`h-8 w-8 ${accent.text}`} />
              <h3 className="text-3xl font-serif text-white">Énergie de l'Argent</h3>
            </div>
            <p className="text-2xl text-slate-400 mb-12 italic leading-relaxed">{sign.argent?.intro}</p>
            <div className="grid md:grid-cols-2 gap-12">
               <BulletList title="Forces" items={sign.argent?.forces} accent={accent} />
               <BulletList title="Risques" items={sign.argent?.risques} accent={accent} />
            </div>
          </PremiumCard>
        </div>

        {/* --- ÉTOILES FIXES --- */}
        {hasItems(sign.etoilesFixes) && (
          <section className="mb-40">
             <SectionHeader title="Étoiles Fixes" accent={accent} icon={Star} />
             <div className="grid md:grid-cols-2 gap-8">
               {sign.etoilesFixes.map(star => (
                 <PremiumCard key={star.nom} accent={accent}>
                    <div className="flex justify-between items-start mb-6">
                      <h4 className="text-3xl font-serif text-white">{star.nom}</h4>
                      <span className="text-[10px] uppercase tracking-widest text-slate-500 border border-white/10 px-3 py-1 rounded-full">{star.nature}</span>
                    </div>
                    <p className="text-slate-400 leading-relaxed mb-6 italic">{star.description}</p>
                    <PillList items={star.motsCles || []} accent={accent} soft />
                 </PremiumCard>
               ))}
             </div>
          </section>
        )}

        {/* --- ASCENDANT SECTION --- */}
        {sign.ascendant && (
          <section className="mb-56">
             <SectionHeader title={`L'Ascendant ${label}`} accent={accent} icon={User} subtitle="Votre masque social et votre vitalité." />
             <PremiumCard accent={accent}>
               <p className="text-2xl text-slate-400 italic mb-12 text-center max-w-4xl mx-auto leading-relaxed">{sign.ascendant.intro}</p>
               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                 <BulletList title="Apparence" items={sign.ascendant.apparence} accent={accent} />
                 <BulletList title="Tempérament" items={sign.ascendant.temperament} accent={accent} />
                 <BulletList title="En Relation" items={sign.ascendant.enRelation} accent={accent} />
                 <BulletList title="Vigilances" items={sign.ascendant.pointsDeVigilance} accent={accent} />
               </div>
             </PremiumCard>
          </section>
        )}

        {/* --- PLANÈTES --- */}
        <section className="mb-56">
          <SectionHeader title="Influences Planétaires" icon={Compass} accent={accent} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {Object.entries(sign.planeteDansLeSigne?.planetes || {}).map(([planet, entry]: any) => {
              const pTheme = getPlanetTheme(planet as PlanetKey);
              return (
                <div key={planet} className={`group rounded-[48px] border ${pTheme.border} bg-[#0a0f1e] p-12 transition-all duration-700 hover:-translate-y-4`}>
                  <div className="flex items-center gap-6 mb-10">
                    <div className={`w-20 h-20 rounded-[28px] ${pTheme.bg} flex items-center justify-center border ${pTheme.border}`}>
                       <Image src={`/images/planetes/${planet}.webp`} alt={planet} width={50} height={50} />
                    </div>
                    <h3 className="font-serif text-4xl text-white tracking-tight">{humanizePlanetKey(planet as PlanetKey)}</h3>
                  </div>
                  <p className="text-lg text-slate-400 italic mb-10 leading-relaxed opacity-90">"{entry.tonalite}"</p>
                  <div className="space-y-4 border-t border-white/5 pt-10">
                    <BulletList title="Manifestations" items={entry.forces} accent={accent} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* --- RELATIONS --- */}
        {hasItems(sign.relationsAuxAutresSignes) && (
          <section className="mb-40">
             <SectionHeader title="Duo & Dynamiques" accent={accent} icon={Globe} />
             <div className="grid md:grid-cols-2 gap-8">
               {sign.relationsAuxAutresSignes.map(rel => {
                  const relMeta = SIGNS.find(s => s.slug === rel.sign);
                  const relAccent = elementTheme(relMeta?.element);
                  return (
                    <PremiumCard key={rel.sign} accent={relAccent}>
                       <div className="flex items-center gap-6 mb-8">
                          <div className="w-20 h-20 rounded-full border border-white/10 overflow-hidden bg-black/40">
                             <Image src={`/images/zodiaque/${rel.sign}.webp`} alt={rel.sign} width={80} height={80} />
                          </div>
                          <div>
                             <div className="flex items-center gap-3">
                               <h4 className="text-3xl font-serif text-white">{relMeta?.name || rel.sign}</h4>
                               <span className={`text-[10px] border ${relAccent.border} ${relAccent.text} px-3 py-1 rounded-full uppercase`}>{rel.level}</span>
                             </div>
                             <p className="text-sm text-slate-500 font-bold mt-1 uppercase tracking-widest">{rel.title}</p>
                          </div>
                       </div>
                       <p className="text-slate-400 leading-relaxed mb-8">{rel.summary}</p>
                       <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
                          <BulletList title="Forces" items={rel.pointsFortes} accent={relAccent} />
                          <BulletList title="Frictions" items={rel.pointsDeTension} accent={relAccent} />
                       </div>
                    </PremiumCard>
                  )
               })}
             </div>
          </section>
        )}

        {/* --- RÈGNES : PIERRES, PLANTES, ANIMAUX --- */}
        <section className="grid md:grid-cols-3 gap-12 mb-56">
           {hasItems(sign.pierresEtMetaux) && (
             <div className="space-y-8">
                <SectionHeader title="Règne Minéral" icon={Gem} accent={accent} className="!mt-0 !mb-10" />
                {sign.pierresEtMetaux.map(p => (
                  <PremiumCard key={p.nom} accent={accent} className="!p-8">
                    <h4 className="text-2xl font-serif text-white mb-4">{p.nom}</h4>
                    <p className="text-sm text-slate-400 font-light leading-relaxed mb-6">{p.description}</p>
                    <PillList items={p.motsCles || []} accent={accent} soft />
                  </PremiumCard>
                ))}
             </div>
           )}
           {hasItems(sign.plantes) && (
             <div className="space-y-8">
                <SectionHeader title="Règne Végétal" icon={Leaf} accent={accent} className="!mt-0 !mb-10" />
                {sign.plantes.map(p => (
                  <PremiumCard key={p.nom} accent={accent} className="!p-8">
                    <h4 className="text-2xl font-serif text-white mb-4">{p.nom}</h4>
                    <p className="text-sm text-slate-400 font-light leading-relaxed mb-6">{p.description}</p>
                    <PillList items={p.usagesSymboliques || []} accent={accent} soft />
                  </PremiumCard>
                ))}
             </div>
           )}
           {hasItems(sign.animaux) && (
             <div className="space-y-8">
                <SectionHeader title="Règne Animal" icon={Anchor} accent={accent} className="!mt-0 !mb-10" />
                {sign.animaux.map(p => (
                  <PremiumCard key={p.nom} accent={accent} className="!p-8">
                    <h4 className="text-2xl font-serif text-white mb-4">{p.nom}</h4>
                    <p className="text-sm text-slate-400 font-light leading-relaxed mb-6">{p.description}</p>
                    <PillList items={p.motsCles || []} accent={accent} soft />
                  </PremiumCard>
                ))}
             </div>
           )}
        </section>

        {/* --- SIGNE DOMINANT & DANS UN THÈME --- */}
        <section className="grid lg:grid-cols-2 gap-12 mb-56">
           {sign.signeDominant && (
             <PremiumCard accent={accent}>
                <SectionHeader title="Signe Dominant" accent={accent} className="!mt-0 !mb-12 !text-left !items-start" />
                <p className="text-xl text-slate-400 italic mb-12 leading-relaxed">{sign.signeDominant.intro}</p>
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                   <BulletList title="Forces" items={sign.signeDominant.forces} accent={accent} />
                   <BulletList title="Vigilances" items={sign.signeDominant.vigilances} accent={accent} />
                   <BulletList title="Vie" items={sign.signeDominant.dansLaVie} accent={accent} />
                </div>
                <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
                   <BulletList title="En Amour" items={sign.signeDominant.enAmour} accent={accent} />
                   <BulletList title="Au Travail" items={sign.signeDominant.auTravail} accent={accent} />
                </div>
             </PremiumCard>
           )}
           {hasItems(sign.dansUnTheme) && (
             <PremiumCard accent={accent} className="flex flex-col">
                <SectionHeader title="Dans un Thème" accent={accent} icon={Compass} className="!mt-0 !mb-12 !text-left !items-start" />
                <div className="space-y-8 flex-1">
                   {sign.dansUnTheme.map((p, i) => (
                     <p key={i} className="text-xl text-slate-300 font-light leading-relaxed border-l border-white/10 pl-8">{p}</p>
                   ))}
                </div>
             </PremiumCard>
           )}
        </section>

        {/* --- CÉLÉBRITÉS & PAYS --- */}
        <section className="mb-40">
           <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8">
                 <SectionHeader title="Figures de Légende" icon={User} accent={accent} className="!text-left !items-start" />
                 <div className="grid md:grid-cols-2 gap-6">
                   {sign.celebrites?.map(c => (
                     <div key={c.nom} className="p-8 rounded-[32px] border border-white/5 bg-white/[0.02] hover:bg-white/[0.08] transition-all duration-500 group relative">
                        <p className="text-white font-serif text-3xl mb-3">{c.nom}</p>
                        <p className={`text-[10px] uppercase tracking-[0.3em] ${accent.text} font-bold mb-4`}>{c.domaine} {c.dateNaissance ? `• ${c.dateNaissance}` : ''}</p>
                        <p className="text-base text-slate-500 font-light italic leading-relaxed">"{c.description}"</p>
                     </div>
                   ))}
                 </div>
              </div>
              <div className="lg:col-span-4">
                 <SectionHeader title="Géographie Cosmique" icon={Globe} accent={accent} className="!text-left !items-start" />
                 <div className="space-y-6">
                   {sign.paysAssocies?.map(p => (
                     <div key={p.pays} className="p-8 rounded-[32px] border border-white/5 bg-white/[0.02]">
                        <div className="flex justify-between items-center mb-4">
                           <h4 className="text-2xl font-serif text-white">{p.pays}</h4>
                           <span className="text-[10px] text-slate-500 uppercase font-bold">{p.niveau}</span>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed italic">{p.justification}</p>
                     </div>
                   ))}
                 </div>
              </div>
           </div>
        </section>

        {/* --- FAQ --- */}
        {hasItems(sign.faq) && (
          <section className="mb-56 max-w-5xl mx-auto">
            <SectionHeader title="Questions Fréquentes" icon={HelpCircle} accent={accent} />
            <div className="space-y-8">
              {sign.faq.map((item, i) => (
                <PremiumCard key={i} accent={accent} className="p-12">
                  <h4 className="text-3xl text-white font-serif mb-6 flex gap-6 items-start">
                    <span className={`${accent.text} font-bold`}>?</span> {item.question}
                  </h4>
                  <p className="text-xl text-slate-400 leading-relaxed font-light pl-10 border-l border-white/10">{item.answer}</p>
                </PremiumCard>
              ))}
            </div>
          </section>
        )}

        {/* --- NAVIGATION FOOTER --- */}
        <footer className={`mt-56 pt-32 border-t ${accent.border}`}>
           <div className="flex flex-col items-center mb-48">
              <div className={`px-16 py-10 rounded-full border ${accent.border} ${accent.bg} shadow-3xl`}>
                <p className="font-serif text-6xl md:text-[6rem] text-white tracking-[0.4em] uppercase">{sign.motCle}</p>
              </div>
           </div>
           
           <nav className="flex flex-col md:flex-row justify-between items-center gap-20">
              <Link href={`/signes/${prevSign.slug}`} className="group flex items-center gap-12 max-w-lg transition-all">
                <div className="text-right">
                  <p className="text-[12px] uppercase tracking-[0.5em] text-slate-500 mb-4 font-bold">Précédent</p>
                  <p className="text-5xl md:text-6xl text-white font-serif group-hover:text-slate-400 transition underline-offset-[20px] group-hover:underline">{prevSign.name}</p>
                </div>
                <div className="w-28 h-28 rounded-full border border-white/10 overflow-hidden grayscale group-hover:grayscale-0 transition duration-1000 ring-[12px] ring-transparent group-hover:ring-white/5">
                  <Image src={`/images/zodiaque/${prevSign.slug}.webp`} alt={prevSign.name} width={120} height={120} className="object-cover scale-125" />
                </div>
              </Link>
              <div className="hidden md:block h-40 w-px bg-white/10" />
              <Link href={`/signes/${nextSign.slug}`} className="group flex items-center gap-12 max-w-lg transition-all">
                <div className="w-28 h-28 rounded-full border border-white/10 overflow-hidden grayscale group-hover:grayscale-0 transition duration-1000 ring-[12px] ring-transparent group-hover:ring-white/5">
                  <Image src={`/images/zodiaque/${nextSign.slug}.webp`} alt={nextSign.name} width={120} height={120} className="object-cover scale-125" />
                </div>
                <div className="text-left">
                  <p className="text-[12px] uppercase tracking-[0.5em] text-slate-500 mb-4 font-bold">Suivant</p>
                  <p className="text-5xl md:text-6xl text-white font-serif group-hover:text-slate-400 transition underline-offset-[20px] group-hover:underline">{nextSign.name}</p>
                </div>
              </Link>
           </nav>
        </footer>
      </main>
    </div>
  );
}