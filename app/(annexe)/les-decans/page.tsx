import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  BookOpen, 
  Layers, 
  ArrowLeft,
  Star,
  Telescope,
  Hourglass,
  MoonStar
} from "lucide-react";

import article from "@/data/les-decans.json";
import { buildMeta, buildTitle } from "@/lib/seo";

// IMPORTS DE TES IMAGES (À placer dans ton dossier public)
import DecansHero from "@/public/images/decans-zodiaque-egyptien.webp";
import DecansRoue from "@/public/images/36-decans-zodiaque.webp";

// ==========================================
// 1. TYPAGE STRICT
// ==========================================
type Utilisation = { domaine: string; texte: string; };
type Decan = { numero: number; degres: string; planete: string; titre: string; texte: string; facilites: string; difficultes: string; };
type Signe = { nom: string; essence: string; decans: Decan[]; };

type ArticleData = {
  slug: string;
  title: string;
  description: string;
  introduction: string[];
  definition: string[];
  utilisationsTitle: string;
  utilisationsIntro: string;
  utilisations: Utilisation[];
  signesTitle: string;
  signesIntro: string;
  signes: Signe[];
};

const content = article as ArticleData;

// ==========================================
// 2. SEO & META
// ==========================================
export const metadata: Metadata = buildMeta({
  title: buildTitle(content.title),
  description: content.description,
  canonicalPath: `/${content.slug}`,
  type: "article",
  ogImage: `/images/articles/${content.slug}/cover.webp`,
});

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: content.title,
  description: content.description,
  inLanguage: "fr-FR",
  mainEntityOfPage: { "@type": "WebPage", "@id": `https://www.astro-cours.com/${content.slug}` },
  author: { "@type": "Organization", name: "Astro Cours" },
  publisher: { "@type": "Organization", name: "Astro Cours" }
};

// ==========================================
// 3. HELPERS VISUELS (COULEURS PLANÈTES)
// ==========================================
function getPlanetColor(planet: string) {
  switch (planet.toLowerCase()) {
    case 'mars': return "text-red-400 border-red-500/30 bg-red-500/10 shadow-[0_0_15px_rgba(248,113,113,0.15)]";
    case 'soleil': return "text-amber-400 border-amber-500/30 bg-amber-500/10 shadow-[0_0_15px_rgba(251,191,36,0.15)]";
    case 'vénus': return "text-emerald-400 border-emerald-500/30 bg-emerald-500/10 shadow-[0_0_15px_rgba(52,211,153,0.15)]";
    case 'mercure': return "text-sky-400 border-sky-500/30 bg-sky-500/10 shadow-[0_0_15px_rgba(56,189,248,0.15)]";
    case 'lune': return "text-slate-200 border-slate-400/30 bg-slate-400/10 shadow-[0_0_15px_rgba(148,163,184,0.15)]";
    case 'saturne': return "text-zinc-400 border-zinc-500/30 bg-zinc-800/50 shadow-[0_0_15px_rgba(113,113,122,0.15)]";
    case 'jupiter': return "text-violet-400 border-violet-500/30 bg-violet-500/10 shadow-[0_0_15px_rgba(167,139,250,0.15)]";
    default: return "text-white border-white/20 bg-white/5";
  }
}

function SectionTitle({ children, id, icon: Icon }: { children: React.ReactNode; id: string; icon?: any }) {
  return (
    <div className="group mb-12 mt-32 flex items-center gap-5 scroll-mt-28" id={id}>
      <div aria-hidden="true" className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/20 to-transparent text-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.15)] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
        {Icon ? <Icon size={26} strokeWidth={1.5} /> : <Sparkles size={26} strokeWidth={1.5} />}
      </div>
      <h2 className="font-serif text-3xl md:text-5xl tracking-tight text-white">{children}</h2>
      <div className="h-px flex-1 bg-gradient-to-r from-amber-500/30 via-amber-500/5 to-transparent ml-4" />
    </div>
  );
}

// ==========================================
// 4. COMPOSANT PRINCIPAL
// ==========================================
export default function DecansPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />

      <main className="relative mx-auto max-w-7xl px-6 pb-24 text-slate-200 selection:bg-amber-500/30" id="main-content">
        
        {/* BACKGROUND GLOWS */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-10%] top-[-5%] h-[800px] w-[800px] rounded-full bg-amber-600/10 blur-[150px]" />
          <div className="absolute right-[-10%] top-[30%] h-[700px] w-[700px] rounded-full bg-violet-600/10 blur-[150px]" />
        </div>

        {/* --- HERO SECTION --- */}
        <header className="relative mb-28 pt-16 text-center md:text-left">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-amber-300 backdrop-blur-md">
                <Star size={16} className="animate-pulse text-amber-300" aria-hidden="true" />
                <span>Précision Astrologique</span>
              </div>
              <h1 className="mt-8 font-serif text-5xl font-light leading-[1.1] text-white md:text-6xl lg:text-[5rem]">
                {content.title.split(':').map((part, i) => (
                  <span key={i} className={i === 1 ? "block mt-4 text-amber-200 font-normal italic text-4xl md:text-5xl lg:text-[3.5rem]" : ""}>
                    {part}{i === 0 && content.title.includes(':') ? ':' : ''}
                  </span>
                ))}
              </h1>
              <p className="mt-8 max-w-2xl text-lg md:text-xl font-light leading-relaxed text-slate-300">
                {content.description}
              </p>
            </div>
            
            {/* EMPLACEMENT IMAGE HERO */}
            <div className="relative w-full max-w-lg aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(251,191,36,0.1)] bg-[#0f0f13] flex items-center justify-center">
              <Image src={DecansHero} alt="Le zodiaque de Denderah illustrant l'origine égyptienne des 36 décans" fill priority className="object-cover" /> 
            
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent z-10 pointer-events-none" />
            </div>
          </div>
        </header>

        {/* --- HISTOIRE & DÉFINITION --- */}
        <section className="mb-32 grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0c0c0e] p-10 backdrop-blur-md transition-all hover:border-white/20">
            <div aria-hidden="true" className="absolute -right-4 -top-4 text-white/5"><Hourglass size={120} strokeWidth={1} /></div>
            <h2 className="relative z-10 font-serif text-3xl text-white mb-8 border-b border-white/10 pb-4">L'Héritage Égyptien</h2>
            <div className="relative z-10 space-y-6 text-[15px] md:text-base leading-relaxed text-slate-300">
              {content.introduction.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-transparent p-10 backdrop-blur-md transition-all hover:border-amber-500/40">
            <div aria-hidden="true" className="absolute -right-4 -top-4 text-amber-500/5"><Telescope size={120} strokeWidth={1} /></div>
            <h3 className="relative z-10 font-serif text-3xl text-white mb-8 border-b border-amber-500/20 pb-4">La Matrice Mathématique</h3>
            <div className="relative z-10 space-y-6 text-[15px] md:text-base leading-relaxed text-slate-300">
              {content.definition.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </section>

        {/* --- UTILISATIONS TECHNIQUES --- */}
        <section className="max-w-6xl mx-auto">
          <SectionTitle id="utilisations" icon={Layers}>{content.utilisationsTitle}</SectionTitle>
          <p className="mb-12 text-lg text-slate-300 font-light italic max-w-4xl leading-relaxed">{content.utilisationsIntro}</p>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {content.utilisations.map((item, i) => (
              <article key={i} className="group relative rounded-[2rem] border border-white/10 bg-[#09090b] p-8 hover:border-amber-500/30 transition-colors">
                <span className="text-4xl font-serif text-white/5 group-hover:text-amber-500/20 transition-colors absolute top-6 right-6">
                  0{i + 1}
                </span>
                <h3 className="font-serif text-xl text-white mb-4 pr-8">{item.domaine}</h3>
                <p className="text-[14px] leading-relaxed text-slate-400">{item.texte}</p>
              </article>
            ))}
          </div>

          {/* EMPLACEMENT IMAGE ROUE */}
          <div className="mt-16 mb-16 relative w-full h-[350px] md:h-[450px] rounded-[3rem] border border-white/10 overflow-hidden bg-[#111] flex items-center justify-center shadow-2xl">
              <Image src={DecansRoue} alt="Roue astrologique affichant les 36 décans et leurs maîtres planétaires" fill className="object-cover" />
               <MoonStar className="text-slate-700 absolute" size={100} strokeWidth={0.5} />
              
          </div>
        </section>

        {/* --- L'ENCYCLOPÉDIE DES 36 DÉCANS --- */}
        <section>
          <SectionTitle id="encyclopedie" icon={BookOpen}>{content.signesTitle}</SectionTitle>
          <p className="mb-16 text-lg text-slate-300 font-light italic max-w-5xl leading-relaxed">{content.signesIntro}</p>
          
          <div className="space-y-24">
            {content.signes.map((signe, idx) => (
              <div key={idx} className="scroll-mt-32" id={`signe-${signe.nom.toLowerCase()}`}>
                {/* En-tête du Signe */}
                <div className="mb-10 flex flex-col md:flex-row md:items-end gap-6 border-b border-white/10 pb-6">
                  <h3 className="font-serif text-4xl md:text-5xl text-white">{signe.nom}</h3>
                  <p className="text-amber-200/80 font-light italic md:mb-1">{signe.essence}</p>
                </div>

                {/* Grille des 3 Décans */}
                <div className="grid gap-8 lg:grid-cols-3">
                  {signe.decans.map((decan) => {
                    const stylePlanete = getPlanetColor(decan.planete);
                    
                    return (
                      <article key={decan.numero} className="relative flex flex-col rounded-[2.5rem] border border-white/5 bg-[#0c0c0e] p-8 shadow-xl transition-all hover:bg-[#111] hover:border-white/15">
                        
                        {/* Degrés & Planète */}
                        <div className="flex items-center justify-between mb-6">
                          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                            {decan.degres}
                          </span>
                          <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border ${stylePlanete}`}>
                            {decan.planete}
                          </span>
                        </div>

                        {/* Titre du décan */}
                        <h4 className="font-serif text-2xl text-white mb-4 leading-tight">
                          {decan.titre.split(' / ')[0]}
                          <span className="block text-lg text-slate-500 mt-1">{decan.titre.split(' / ')[1]}</span>
                        </h4>

                        {/* Description */}
                        <p className="text-[15px] leading-relaxed text-slate-300 mb-8 flex-1">
                          {decan.texte}
                        </p>

                        {/* Points Forts / Faibles */}
                        <div className="space-y-4 pt-6 border-t border-white/5">
                          <div>
                            <span className="text-[10px] uppercase tracking-widest text-emerald-500 font-bold block mb-1">Forces</span>
                            <p className="text-sm text-slate-400 leading-relaxed">{decan.facilites}</p>
                          </div>
                          <div>
                            <span className="text-[10px] uppercase tracking-widest text-rose-500 font-bold block mb-1">Défis</span>
                            <p className="text-sm text-slate-400 leading-relaxed">{decan.difficultes}</p>
                          </div>
                        </div>

                      </article>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- FOOTER DE L'ARTICLE --- */}
        <footer className="mt-32 border-t border-white/10 pt-16 flex flex-col items-center gap-8">
          <Link
            href="/blog"
            className="group flex items-center gap-4 rounded-full border border-amber-500/30 bg-amber-500/10 px-8 py-5 text-[15px] font-bold uppercase tracking-widest text-amber-300 transition-all hover:bg-amber-500/20 hover:border-amber-400 focus:ring-2 focus:ring-amber-500"
          >
            <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-2" />
            Retour à l'encyclopédie
          </Link>
        </footer>

      </main>
    </>
  );
}