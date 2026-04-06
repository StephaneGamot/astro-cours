import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { readFile } from "node:fs/promises";
import path from "node:path";
import type { ReactNode } from "react";

// Icônes Professionnelles pour le design Premium
import { 
  Star, Sparkles, Heart, Zap, Moon, Sun, 
  Compass, Target, Gem, Leaf, User, Briefcase, 
  Coins, HelpCircle, Droplets, Anchor, Activity, 
  Layers, Globe, BookOpen
} from "lucide-react";

import { elementTheme } from "@/components/sections/zodiaque/Helpers";
import signesIndex from "@/data/signes/index.json";

// ==========================================
// 1. TYPAGES
// ==========================================
type PlanetKey = "soleil" | "lune" | "mercure" | "venus" | "mars" | "jupiter" | "saturne" | "uranus" | "neptune" | "pluton";
type CompatibilityLevel = "fluide" | "stimulante" | "complementaire" | "intense" | "delicate" | "variable";

interface Sign {
  slug: string; nom?: string; name?: string; element?: string; periode?: string; polarite?: string; mode?: string; maitre?: string;
  exaltation?: string | null; exil?: string | null; chute?: string | null; motCle?: string; mythologie?: string;
  analogie?: { animal?: string; objet?: string; fonction?: string }; anatomie?: string[]; generalites?: string[];
  caractere?: string[]; aptitudesNaturelles?: string[]; ceQuIlRegitDansLeMonde?: string[]; forces?: string[];
  ombres?: string[]; besoins?: string[]; aTravailler?: string[]; quandCestEquilibre?: string[];
  maisonCorrespondante?: { numero: number; nom: string; resume: string; themes: string[] };
  amour?: { intro: string; qualites: string[]; vigilances: string[]; compatibleAvec?: string[]; attirePar?: string[] };
  travail?: { intro: string; qualites: string[]; vigilances: string[]; domainesFavorables?: string[] };
  argent?: { intro: string; forces: string[]; risques: string[]; rapportTypique: string[] };
  planeteDansLeSigne?: { intro?: string; planetes?: Record<PlanetKey, any> };
  relationsAuxAutresSignes?: { sign: string; level: CompatibilityLevel; title: string; summary: string; pointsFortes?: string[]; pointsDeTension?: string[] }[];
  pierresEtMetaux?: { nom: string; description: string; motsCles?: string[] }[];
  plantes?: { nom: string; description: string; usagesSymboliques?: string[] }[];
  animaux?: { nom: string; description: string; motsCles?: string[] }[];
  celebrites?: { nom: string; dateNaissance?: string; domaine?: string; description?: string }[];
  faq?: { question: string; answer: string }[];
  ascendant?: { intro: string; apparence?: string[]; temperament?: string[]; enRelation?: string[]; pointsDeVigilance?: string[] };
  signeDominant?: { intro: string; forces: string[]; vigilances: string[]; dansLaVie: string[]; enAmour?: string[]; auTravail?: string[] };
  dansUnTheme?: string[];
  etoilesFixes?: { nom: string; nature?: string; motsCles?: string[]; description: string }[];
  paysAssocies?: { pays: string; niveau: string; justification: string }[];
}

// ==========================================
// 2. CONSTANTES & HELPERS
// ==========================================
const SITE_URL = "https://www.astro-cours.com";
const SITE_NAME = "Astro Cours";
const SIGNS = signesIndex as any[];

function normalizeSlug(raw: string) { return decodeURIComponent(raw).trim().toLowerCase(); }
function getSignLabel(sign: Sign) { return sign.nom ?? sign.name ?? sign.slug; }
function hasItems<T>(value?: T[] | null): value is T[] { return Array.isArray(value) && value.length > 0; }

function humanizePlanetKey(planet: PlanetKey) {
  const map: Record<PlanetKey, string> = { soleil: "Soleil", lune: "Lune", mercure: "Mercure", venus: "Vénus", mars: "Mars", jupiter: "Jupiter", saturne: "Saturne", uranus: "Uranus", neptune: "Neptune", pluton: "Pluton" };
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

async function readSignFile(slug: string): Promise<Sign | null> {
  try {
    const filePath = path.join(process.cwd(), "data", "signes", `${slug}.json`);
    const file = await readFile(filePath, "utf8");
    return JSON.parse(file) as Sign;
  } catch { return null; }
}

// ==========================================
// 3. COMPOSANTS UI PREMIUM
// ==========================================
const PremiumCard = ({ children, accent, className = "" }: { children: ReactNode, accent: any, className?: string }) => (
  <article className={`relative overflow-hidden rounded-[2.5rem] border ${accent.border} bg-[#0c0c0e]/80 backdrop-blur-2xl p-8 md:p-12 transition-all duration-700 hover:shadow-2xl hover:bg-[#111] focus-within:ring-2 ${accent.ring} ${className}`}>
    {children}
  </article>
);

const SectionHeader = ({ title, subtitle, icon: Icon, accent, id }: any) => (
  <header id={id} className="mb-16 mt-32 flex flex-col items-center text-center scroll-mt-28">
    {Icon && <Icon className={`mb-6 h-12 w-12 ${accent.text} opacity-80`} aria-hidden={true} />}
    <h2 className="font-serif text-4xl md:text-6xl tracking-tight text-white">{title}</h2>
    <div aria-hidden={true} className={`mt-8 h-1 w-24 ${accent.dot} rounded-full shadow-[0_0_15px_currentColor]`} />
    {subtitle && <p className="mt-8 max-w-3xl text-slate-400 font-light italic text-xl md:text-2xl leading-relaxed">{subtitle}</p>}
  </header>
);

const BulletList = ({ title, items, accent, icon: Icon }: any) => (
  <div className="flex flex-col space-y-6">
    <div className="flex items-center gap-3 border-b border-white/5 pb-3">
      {Icon && <Icon className={`h-5 w-5 ${accent.text}`} aria-hidden={true} />}
      <h3 className="text-[13px] uppercase tracking-[0.3em] text-slate-300 font-bold">{title}</h3>
    </div>
    <ul className="space-y-4">
      {items?.map((item: string, i: number) => (
        <li key={i} className="text-slate-400 hover:text-slate-300 transition-colors font-light flex items-start gap-4 text-base md:text-lg leading-relaxed">
          <span aria-hidden={true} className={`${accent.dot} mt-2.5 h-1.5 w-1.5 rounded-full shrink-0 shadow-[0_0_8px_currentColor]`} />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const PillList = ({ items, accent, soft = false }: { items: string[], accent: any, soft?: boolean }) => (
  <div className="flex flex-wrap gap-3">
    {items.map((item, i) => (
      <span key={i} className={soft 
        ? "px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-400" 
        : `px-5 py-2 rounded-full border ${accent.border} ${accent.bgSolid} text-sm font-medium ${accent.text}`}>
        {item}
      </span>
    ))}
  </div>
);

// ==========================================
// 4. METADATA & SEO GENERATION
// ==========================================
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug: raw } = await params;
  const slug = normalizeSlug(raw);
  const sign = await readSignFile(slug);
  if (!sign) return {};
  
  const label = getSignLabel(sign);
  return {
    title: `${label} : Caractère, Amour et Symbolique Astrologique`,
    description: sign.generalites?.[0]?.slice(0, 160) || `Découvrez le portrait complet du signe ${label}. Caractère, amour, travail et correspondances.`,
    alternates: { canonical: `${SITE_URL}/signes/${slug}` },
    openGraph: {
      title: `${label} — Signe astrologique complet`,
      description: `Explorez la personnalité, le karma et la symbolique du signe ${label}.`,
      images: [`${SITE_URL}/images/zodiaque/${slug}.webp`],
    }
  };
}

export const dynamicParams = false;
export async function generateStaticParams() {
  return SIGNS.map((s) => ({ slug: s.slug }));
}

// ==========================================
// 5. COMPOSANT PAGE PRINCIPAL
// ==========================================
export default async function SignPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug: raw } = await params;
  const slug = normalizeSlug(raw);
  const sign = await readSignFile(slug);
  if (!sign) notFound();

  const label = getSignLabel(sign);
  const accent = elementTheme(sign.element);
  
  // Chemins d'images adaptables selon ta structure
  const heroSrc = `/images/signes/${sign.slug}/a.webp`;

  // Pagination Zodiaque
  const idx = SIGNS.findIndex((s) => s.slug === slug);
  const prevSign = SIGNS[(idx - 1 + SIGNS.length) % SIGNS.length];
  const nextSign = SIGNS[(idx + 1) % SIGNS.length];

  // Schema.org
  const canonical = `${SITE_URL}/signes/${slug}`;
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${label} — Signe astrologique`,
    description: sign.generalites?.[0] || "",
    url: canonical,
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Tout savoir sur le signe astrologique : ${label}`,
    image: [`${SITE_URL}/images/zodiaque/${slug}.webp`],
    author: { "@type": "Person", name: "Stéphane Gamot" },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Signes du Zodiaque", item: `${SITE_URL}/#zodiaque` },
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
    <div className={`bg-[#09090b] min-h-screen text-slate-300 selection:${accent.bgSolid} selection:text-white`}>
      {/* Scripts SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}

      <main className="mx-auto max-w-7xl px-6 pb-40" id="main-content">
        
        {/* --- HERO SECTION --- */}
        <header className="relative pt-24 mb-40 flex flex-col items-center text-center">
          <div aria-hidden={true} className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-20 blur-[150px] pointer-events-none" style={{ background: `radial-gradient(circle, ${accent.dot} 0%, transparent 70%)` }} />
          
          <div className={`px-6 py-2 rounded-full border ${accent.border} ${accent.bgSolid} text-[11px] uppercase tracking-[0.6em] font-bold ${accent.text} mb-12 flex items-center gap-3 backdrop-blur-md`}>
            <Sparkles className="h-3 w-3" aria-hidden={true} />
            Signe du Zodiaque
          </div>
          
          <h1 className="font-serif text-[6rem] md:text-[10rem] lg:text-[12rem] text-white tracking-tighter leading-[0.8] mb-10 drop-shadow-2xl">
            {label}
          </h1>
          
          <p className="font-serif text-3xl md:text-5xl italic text-slate-400 opacity-90 mb-20 max-w-3xl">
            « {sign.motCle} »
          </p>

          <div className="w-full relative group">
            {/* Image Placeholder ou réelle */}
            <div className={`absolute -inset-4 rounded-[4rem] opacity-20 blur-3xl transition duration-1000 group-hover:opacity-40 ${accent.bg}`} aria-hidden={true} />
            <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-[#0c0c0e] shadow-2xl flex items-center justify-center min-h-[400px] md:min-h-[600px]">
              <Image src={heroSrc} alt={`Illustration cosmique du signe ${label}`} width={2000} height={1000} priority className="w-full h-full object-cover transition duration-[2s] group-hover:scale-105" sizes="100vw" /> 

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
              
              {/* Floating Stats Dashboard */}
              <div className="absolute bottom-6 md:bottom-12 w-[90%] md:w-[85%] grid grid-cols-2 md:grid-cols-4 gap-6 p-6 md:p-10 backdrop-blur-3xl bg-black/50 rounded-[2.5rem] border border-white/10 shadow-2xl z-20">
                  {[
                    { l: "Élément", v: sign.element, i: Droplets },
                    { l: "Maître", v: sign.maitre, i: Sun },
                    { l: "Mode", v: sign.mode, i: Zap },
                    { l: "Période", v: sign.periode, i: Moon },
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center text-center">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-2 font-bold">{item.l}</span>
                      <span className="text-sm md:text-lg font-medium text-white flex flex-col md:flex-row items-center gap-2">
                         <item.i className={`h-5 w-5 ${accent.text}`} aria-hidden={true} /> {item.v}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </header>

        {/* --- SECTION 1 : ESSENTIEL & ANALOGIES --- */}
        <section aria-labelledby="fondations" className="grid lg:grid-cols-12 gap-8 mb-24">
          <div className="lg:col-span-8">
            <PremiumCard accent={accent} className="h-full">
               <h3 id="fondations" className="font-serif text-3xl text-white mb-8 flex items-center gap-4">
                 <Target className={accent.text} aria-hidden={true} /> Fondations Cosmiques
               </h3>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    ["Maître", sign.maitre],
                    ["Exaltation", sign.exaltation],
                    ["Exil", sign.exil],
                    ["Chute", sign.chute],
                  ].map(([title, val], i) => (
                    <div key={i} className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                      <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-2 font-bold">{title}</p>
                      <p className="text-lg text-white font-serif">{val || "—"}</p>
                    </div>
                  ))}
               </div>
            </PremiumCard>
          </div>
          <div className="lg:col-span-4">
            <PremiumCard accent={accent} className="h-full flex flex-col justify-center">
              <h3 className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-8 font-bold flex items-center gap-3 border-b border-white/5 pb-4">
                <Layers className="h-4 w-4" aria-hidden={true} /> Analogies
              </h3>
              <div className="space-y-6">
                {Object.entries(sign.analogie || {}).map(([key, val]) => (
                  <div key={key} className="flex justify-between items-center">
                    <p className="text-[11px] text-slate-500 uppercase tracking-widest">{key}</p>
                    <p className="text-white text-base font-serif text-right max-w-[60%]">{val}</p>
                  </div>
                ))}
              </div>
            </PremiumCard>
          </div>
        </section>

        {/* --- MAISON & MYTHOLOGIE --- */}
        <section className="grid md:grid-cols-2 gap-8 mb-36">
           {sign.maisonCorrespondante && (
             <PremiumCard accent={accent}>
                <div className="flex items-center gap-5 mb-8">
                  <div className={`w-14 h-14 rounded-2xl ${accent.bgSolid} flex items-center justify-center border ${accent.border}`}>
                    <span className={`text-2xl font-serif font-bold ${accent.text}`}>{sign.maisonCorrespondante.numero}</span>
                  </div>
                  <h3 className="text-3xl font-serif text-white">Maison {sign.maisonCorrespondante.nom}</h3>
                </div>
                <p className="text-lg text-slate-400 italic mb-8 leading-relaxed border-l-2 border-white/10 pl-6">"{sign.maisonCorrespondante.resume}"</p>
                <PillList items={sign.maisonCorrespondante.themes} accent={accent} />
             </PremiumCard>
           )}
           {sign.mythologie && (
             <PremiumCard accent={accent}>
                <h3 className="text-3xl font-serif text-white mb-8 flex items-center gap-4 border-b border-white/5 pb-4">
                  <BookOpen className={accent.text} aria-hidden={true} /> Référence Mythologique
                </h3>
                <p className="text-[15px] md:text-base text-slate-400 font-light leading-relaxed">{sign.mythologie}</p>
             </PremiumCard>
           )}
        </section>

        {/* --- PORTRAIT PSYCHOLOGIQUE --- */}
        <section className="grid lg:grid-cols-12 gap-16 items-start mb-40">
          <div className="lg:col-span-5 space-y-12 sticky top-32">
             <SectionHeader title="Portrait Intime" accent={accent} className="!mt-0 !text-left !items-start" />
             <p className="text-2xl md:text-3xl text-slate-300 font-light leading-relaxed italic border-l-4 border-white/10 pl-8">
               {sign.generalites?.[0]}
             </p>
             {hasItems(sign.anatomie) && (
               <div className="pt-8">
                 <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500 mb-4 font-bold flex items-center gap-3">
                   <Activity className="h-4 w-4" aria-hidden={true} /> Gouvernance Physique
                 </p>
                 <PillList items={sign.anatomie} accent={accent} soft />
               </div>
             )}
          </div>
          <div className="lg:col-span-7">
            <PremiumCard accent={accent}>
              <div className="grid md:grid-cols-2 gap-12">
                <BulletList title="Tempérament" items={sign.caractere} icon={User} accent={accent} />
                <BulletList title="Aptitudes" items={sign.aptitudesNaturelles} icon={Zap} accent={accent} />
              </div>
              <div className="mt-16 pt-12 border-t border-white/5">
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500 mb-6 font-bold flex items-center gap-3">
                  <Globe className="h-4 w-4" aria-hidden={true} /> Ce qu'il régit dans le monde
                </p>
                <PillList items={sign.ceQuIlRegitDansLeMonde || []} accent={accent} />
              </div>
            </PremiumCard>
          </div>
        </section>

        {/* --- DYNAMIQUE ÉVOLUTIVE --- */}
        <section className="mb-40">
           <div className="grid md:grid-cols-3 gap-6 mb-6">
              <PremiumCard accent={accent} className="!p-8"><BulletList title="Les Forces" items={sign.forces} accent={accent} /></PremiumCard>
              <PremiumCard accent={accent} className="!p-8"><BulletList title="Les Ombres" items={sign.ombres} accent={accent} /></PremiumCard>
              <PremiumCard accent={accent} className="!p-8"><BulletList title="Besoins Vitaux" items={sign.besoins} accent={accent} /></PremiumCard>
           </div>
           <div className="grid md:grid-cols-2 gap-6">
              <PremiumCard accent={accent} className="!p-8"><BulletList title="À Travailler" items={sign.aTravailler} accent={accent} /></PremiumCard>
              <PremiumCard accent={accent} className="!p-8"><BulletList title="État d'Équilibre" items={sign.quandCestEquilibre} accent={accent} /></PremiumCard>
           </div>
        </section>

        {/* --- AMOUR --- */}
        <SectionHeader title="Cœur & Alchimie" subtitle="L'art d'aimer, de s'unir et de fusionner." icon={Heart} accent={accent} />
        <section className="grid lg:grid-cols-3 gap-8 mb-40">
          <PremiumCard className="lg:col-span-2 flex flex-col justify-center" accent={accent}>
            <p className="text-2xl md:text-3xl text-white font-serif italic leading-[1.5] mb-12 border-l-2 border-white/10 pl-6">"{sign.amour?.intro}"</p>
            <div className="grid md:grid-cols-2 gap-12 pt-8 border-t border-white/5">
              <BulletList title="Qualités du Cœur" items={sign.amour?.qualites} accent={accent} />
              <BulletList title="Points de Vigilance" items={sign.amour?.vigilances} accent={accent} />
            </div>
          </PremiumCard>
          <div className={`rounded-[2.5rem] border ${accent.border} ${accent.bg} p-10 flex flex-col items-center text-center justify-center space-y-10 shadow-inner`}>
            <Gem className={`h-12 w-12 ${accent.text}`} aria-hidden={true} />
            <div className="space-y-6">
              <h4 className="text-white font-serif text-2xl border-b border-white/10 pb-4">Affinités Naturelles</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {sign.amour?.compatibleAvec?.map(c => (
                  <span key={c} className="px-5 py-2.5 rounded-xl bg-[#09090b]/80 border border-white/10 text-sm font-medium text-white shadow-sm">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- VOCATION & MATIÈRE --- */}
        <SectionHeader title="Réalisation & Matière" subtitle="Vocation professionnelle et gestion des ressources." icon={Briefcase} accent={accent} />
        <section className="grid lg:grid-cols-2 gap-8 mb-40">
          <PremiumCard accent={accent}>
            <div className="flex items-center gap-5 mb-8">
              <div className={`p-3 rounded-xl ${accent.bgSolid} border ${accent.border}`}><Briefcase className={`h-6 w-6 ${accent.text}`} aria-hidden={true} /></div>
              <h3 className="text-3xl font-serif text-white">L'Œuvre au Travail</h3>
            </div>
            <p className="text-lg text-slate-400 mb-10 italic leading-relaxed">{sign.travail?.intro}</p>
            <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
               <BulletList title="Atouts" items={sign.travail?.qualites} accent={accent} />
               <BulletList title="Défis" items={sign.travail?.vigilances} accent={accent} />
            </div>
          </PremiumCard>
          <PremiumCard accent={accent}>
            <div className="flex items-center gap-5 mb-8">
              <div className={`p-3 rounded-xl ${accent.bgSolid} border ${accent.border}`}><Coins className={`h-6 w-6 ${accent.text}`} aria-hidden={true} /></div>
              <h3 className="text-3xl font-serif text-white">Énergie de l'Argent</h3>
            </div>
            <p className="text-lg text-slate-400 mb-10 italic leading-relaxed">{sign.argent?.intro}</p>
            <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
               <BulletList title="Forces" items={sign.argent?.forces} accent={accent} />
               <BulletList title="Risques" items={sign.argent?.risques} accent={accent} />
            </div>
          </PremiumCard>
        </section>

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

        {/* --- PLANÈTES --- */}
        <section className="mb-56">
          <SectionHeader title="Influences Planétaires" icon={Compass} accent={accent} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {Object.entries(sign.planeteDansLeSigne?.planetes || {}).map(([planet, entry]: any) => {
              const pTheme = getPlanetTheme(planet as PlanetKey);
              return (
                <div key={planet} className={`group rounded-[3rem] border ${pTheme.border} bg-[#0c0c0e] p-10 md:p-12 transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]`}>
                  <div className="flex items-center gap-6 mb-10">
                    <div className={`w-20 h-20 rounded-[1.5rem]  flex items-center justify-center border ${pTheme.border}`}>
                       <Image src={`/images/planetes/${planet}.webp`} alt={planet} width={80} height={80} className="object-contain drop-shadow-lg" />
                    </div>
                    <h3 className="font-serif text-3xl md:text-4xl text-white tracking-tight">{humanizePlanetKey(planet as PlanetKey)}</h3>
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
                          <div className="w-20 h-20 rounded-full border border-white/10 overflow-hidden bg-[#09090b]">
                             <Image src={`/images/zodiaque/${rel.sign}.webp`} alt={rel.sign} width={80} height={80} className="object-cover" />
                          </div>
                          <div>
                             <div className="flex flex-wrap items-center gap-3 mb-2">
                               <h4 className="text-2xl md:text-3xl font-serif text-white">{relMeta?.name || rel.sign}</h4>
                               <span className={`text-[10px] border ${relAccent.border} ${relAccent.text} px-3 py-1 rounded-full uppercase font-bold tracking-wider`}>{rel.level}</span>
                             </div>
                             <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">{rel.title}</p>
                          </div>
                       </div>
                       <p className="text-slate-400 leading-relaxed mb-8 italic">{rel.summary}</p>
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

        {/* --- SIGNE DOMINANT & DANS UN THÈME --- */}
        <section className="grid lg:grid-cols-2 gap-12 mb-56">
           {sign.signeDominant && (
             <PremiumCard accent={accent}>
                <SectionHeader title="Signe Dominant" accent={accent} className="!mt-0 !mb-12 !text-left !items-start" />
                <p className="text-xl text-slate-300 italic mb-12 leading-relaxed">"{sign.signeDominant.intro}"</p>
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                   <BulletList title="Forces" items={sign.signeDominant.forces} accent={accent} />
                   <BulletList title="Vigilances" items={sign.signeDominant.vigilances} accent={accent} />
                   <BulletList title="Dans la Vie" items={sign.signeDominant.dansLaVie} accent={accent} />
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
                <div className="space-y-6 flex-1">
                   {sign.dansUnTheme.map((p, i) => (
                     <p key={i} className="text-lg md:text-xl text-slate-400 font-light leading-relaxed border-l-2 border-white/10 pl-6">{p}</p>
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
                   {sign.celebrites?.map((c, i) => (
                     <div key={i} className="p-8 rounded-[2rem] border border-white/5 bg-[#0c0c0e] hover:bg-[#111] hover:border-white/20 transition-all duration-500">
                        <p className="text-white font-serif text-2xl md:text-3xl mb-2">{c.nom}</p>
                        <p className={`text-[10px] uppercase tracking-[0.3em] ${accent.text} font-bold mb-4`}>
                          {c.domaine} {c.dateNaissance ? `• ${c.dateNaissance}` : ''}
                        </p>
                        <p className="text-[15px] text-slate-400 font-light italic leading-relaxed">"{c.description}"</p>
                     </div>
                   ))}
                 </div>
              </div>
              <div className="lg:col-span-4">
                 <SectionHeader title="Géographie" icon={Globe} accent={accent} className="!text-left !items-start" />
                 <div className="space-y-6">
                   {sign.paysAssocies?.map((p, i) => (
                     <div key={i} className="p-8 rounded-[2rem] border border-white/5 bg-[#0c0c0e] hover:bg-[#111] transition-colors">
                        <div className="flex justify-between items-center mb-4">
                           <h4 className="text-xl md:text-2xl font-serif text-white">{p.pays}</h4>
                           <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold bg-white/5 px-3 py-1 rounded-full">{p.niveau}</span>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed italic">{p.justification}</p>
                     </div>
                   ))}
                 </div>
              </div>
           </div>
        </section>

        {/* --- ASCENDANT --- */}
        {sign.ascendant && (
          <section className="mb-40">
             <SectionHeader title={`L'Ascendant ${label}`} accent={accent} icon={User} subtitle="Votre masque social et votre force vitale." />
             <PremiumCard accent={accent}>
               <p className="text-xl md:text-2xl text-slate-300 italic mb-12 text-center max-w-4xl mx-auto leading-relaxed">"{sign.ascendant.intro}"</p>
               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 pt-10 border-t border-white/5">
                 <BulletList title="Apparence" items={sign.ascendant.apparence} accent={accent} />
                 <BulletList title="Tempérament" items={sign.ascendant.temperament} accent={accent} />
                 <BulletList title="En Relation" items={sign.ascendant.enRelation} accent={accent} />
                 <BulletList title="Vigilances" items={sign.ascendant.pointsDeVigilance} accent={accent} />
               </div>
             </PremiumCard>
          </section>
        )}

        {/* --- RÈGNES --- */}
        <section className="grid md:grid-cols-3 gap-8 mb-40">
           {hasItems(sign.pierresEtMetaux) && (
             <div className="space-y-6">
                <SectionHeader title="Minéral" icon={Gem} accent={accent} className="!mt-0 !mb-8" />
                {sign.pierresEtMetaux.map((p, i) => (
                  <PremiumCard key={i} accent={accent} className="!p-8">
                    <h4 className="text-xl font-serif text-white mb-3">{p.nom}</h4>
                    <p className="text-sm text-slate-400 font-light leading-relaxed mb-6">{p.description}</p>
                    <PillList items={p.motsCles || []} accent={accent} soft />
                  </PremiumCard>
                ))}
             </div>
           )}
           {hasItems(sign.plantes) && (
             <div className="space-y-6">
                <SectionHeader title="Végétal" icon={Leaf} accent={accent} className="!mt-0 !mb-8" />
                {sign.plantes.map((p, i) => (
                  <PremiumCard key={i} accent={accent} className="!p-8">
                    <h4 className="text-xl font-serif text-white mb-3">{p.nom}</h4>
                    <p className="text-sm text-slate-400 font-light leading-relaxed mb-6">{p.description}</p>
                    <PillList items={p.usagesSymboliques || []} accent={accent} soft />
                  </PremiumCard>
                ))}
             </div>
           )}
           {hasItems(sign.animaux) && (
             <div className="space-y-6">
                <SectionHeader title="Animal" icon={Anchor} accent={accent} className="!mt-0 !mb-8" />
                {sign.animaux.map((p, i) => (
                  <PremiumCard key={i} accent={accent} className="!p-8">
                    <h4 className="text-xl font-serif text-white mb-3">{p.nom}</h4>
                    <p className="text-sm text-slate-400 font-light leading-relaxed mb-6">{p.description}</p>
                    <PillList items={p.motsCles || []} accent={accent} soft />
                  </PremiumCard>
                ))}
             </div>
           )}
        </section>

        {/* --- FAQ --- */}
        {hasItems(sign.faq) && (
          <section className="mb-40 max-w-4xl mx-auto">
            <SectionHeader title="Foire Aux Questions" icon={HelpCircle} accent={accent} />
            <div className="space-y-6">
              {sign.faq.map((item, i) => (
                <details key={i} className="group rounded-[2rem] border border-white/10 bg-[#0c0c0e] p-8 transition-all hover:bg-[#111] hover:border-white/20">
                  <summary className={`flex cursor-pointer list-none items-center justify-between font-serif text-xl md:text-2xl text-white outline-none focus-visible:ring-2 ${accent.ring} rounded-lg`}>
                    <span className="pr-6 flex items-center gap-4"><span className={`${accent.text} font-bold`}>?</span> {item.question}</span>
                  </summary>
                  <p className="mt-6 text-[15px] md:text-base leading-relaxed text-slate-400 border-t border-white/5 pt-6">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* --- NAVIGATION FOOTER --- */}
        <footer className={`mt-40 pt-20 border-t border-white/10 flex flex-col items-center`}>
           <div className="mb-24 px-10 py-6 rounded-full border border-white/5 bg-white/[0.02] shadow-inner backdrop-blur-sm">
             <p className={`font-serif text-3xl md:text-5xl ${accent.text} tracking-[0.3em] uppercase opacity-80`}>{sign.motCle}</p>
           </div>
           
           <nav aria-label="Pagination des signes" className="w-full flex flex-col md:flex-row justify-between items-center gap-12">
              <Link href={`/signes/${prevSign.slug}`} className={`group flex flex-col md:flex-row items-center gap-8 focus-visible:outline-none focus-visible:ring-2 ${accent.ring} rounded-3xl p-4 transition-all hover:bg-white/[0.02]`}>
                <div className="text-center md:text-right order-2 md:order-1">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500 mb-2 font-bold group-hover:text-slate-400 transition-colors">Signe Précédent</p>
                  <p className="text-3xl md:text-4xl text-white font-serif">{prevSign.name}</p>
                </div>
                <div className="w-20 h-20 rounded-full border border-white/10 overflow-hidden bg-[#09090b] order-1 md:order-2 group-hover:border-white/30 transition-colors">
                  <Image src={`/images/zodiaque/${prevSign.slug}.webp`} alt={prevSign.name} width={80} height={80} className="object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
              
              <div className="hidden md:block h-20 w-px bg-white/10" aria-hidden={true} />
              
              <Link href={`/signes/${nextSign.slug}`} className={`group flex flex-col md:flex-row items-center gap-8 focus-visible:outline-none focus-visible:ring-2 ${accent.ring} rounded-3xl p-4 transition-all hover:bg-white/[0.02]`}>
                <div className="w-20 h-20 rounded-full border border-white/10 overflow-hidden bg-[#09090b] group-hover:border-white/30 transition-colors">
                  <Image src={`/images/zodiaque/${nextSign.slug}.webp`} alt={nextSign.name} width={80} height={80} className="object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-center md:text-left">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500 mb-2 font-bold group-hover:text-slate-400 transition-colors">Signe Suivant</p>
                  <p className="text-3xl md:text-4xl text-white font-serif">{nextSign.name}</p>
                </div>
              </Link>
           </nav>
        </footer>
      </main>
    </div>
  );
}