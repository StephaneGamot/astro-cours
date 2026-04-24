import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  Compass, 
  BookOpen, 
  Sparkles, 
  Users, 
  Layers, 
  HelpCircle, 
  ArrowLeft,
  ChevronRight,
  Zap,
  CheckCircle2,
  Quote,
  Calculator,
  AlertTriangle,
  TreeDeciduous,
  Waypoints,
  Network
} from "lucide-react";

import article from "@/data/maisons-derivees.json";
import { buildMeta, buildTitle } from "@/lib/seo";
import Engrenages from "@/public/images/maisons/roue-astrologique-engrenage-imbriques.webp"
import Maisonsderivees from "@/public/images/maisons/maisons-derivees.webp"

// ==========================================
// 1. TYPAGE STRICT
// ==========================================
type Regle = { etape: number; nom: string; texte: string; };
type Application = { maisonNatale: number; derivation: string; titre: string; texte: string; };
type Membre = { nom: string; maison: string; texte: string; };
type FamilleGroup = { groupe: string; membres: Membre[]; };
type CaseStudy = { titre: string; question: string; donnees: string; interpretation: string; };
type FaqItem = { question: string; answer: string; };

type ArticleData = {
  slug: string;
  title: string;
  description: string;
  introduction: string[];
  definition: string[];
  reglesTitle: string;
  reglesIntro: string;
  regles: Regle[];
  applicationsTitle: string;
  applicationsIntro: string;
  applications: Application[];
  familleTitle: string;
  familleIntro: string;
  famille: FamilleGroup[];
  caseStudiesTitle: string;
  caseStudies: CaseStudy[];
  limitesTitle: string;
  limites: string[];
  conclusionTitle: string;
  conclusion: string[];
  faqTitle: string;
  faq: FaqItem[];
};

const content = article as ArticleData;

// ==========================================
// 2. SEO & META (Optimisé Google & Next 16)
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
  author: { "@type": "Organization", name: "Astro Cours", url: "https://www.astro-cours.com" },
  publisher: { 
    "@type": "Organization", 
    name: "Astro Cours", 
    logo: { "@type": "ImageObject", url: "https://www.astro-cours.com/logo.webp" } 
  },
  image: [`https://www.astro-cours.com/images/articles/${content.slug}/cover.webp`],
  datePublished: "2024-05-20T08:00:00+08:00",
  dateModified: "2024-05-20T08:00:00+08:00",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    ...content.faq.map((item) => ({
      "@type": "Question" as const,
      name: item.question,
      acceptedAnswer: { "@type": "Answer" as const, text: item.answer },
    })),
    {
      "@type": "Question" as const,
      name: "Peut-on utiliser les maisons dérivées en synastrie ?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Oui, les maisons dérivées enrichissent considérablement l'analyse en synastrie. Par exemple, la Maison VIII (dérivée de la VII) représente les finances du partenaire, et la Maison IX (dérivée 3 de la VII) sa fratrie. Cette technique permet de lire dans votre propre thème des informations sur les proches de votre conjoint.",
      },
    },
  ],
};

// ==========================================
// 3. HELPERS VISUELS
// ==========================================
function RomanHouse({ n }: { n: number }) {
  const romans = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];
  return <span aria-label={`Maison ${n}`} className="font-serif">{romans[n - 1] ?? n}</span>;
}

function SectionTitle({ children, id, icon: Icon }: { children: React.ReactNode; id: string; icon?: any }) {
  return (
    <div className="group mb-12 mt-32 flex items-center gap-5 scroll-mt-28" id={id}>
      <div aria-hidden="true" className="flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-500/20 to-transparent text-violet-300 shadow-[0_0_20px_rgba(167,139,250,0.15)] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
        {Icon ? <Icon size={26} strokeWidth={1.5} /> : <Sparkles size={26} strokeWidth={1.5} />}
      </div>
      <h2 className="font-serif text-3xl md:text-5xl tracking-tight text-white">{children}</h2>
      <div className="h-px flex-1 bg-gradient-to-r from-violet-500/30 via-violet-500/5 to-transparent ml-4" />
    </div>
  );
}

// ==========================================
// 4. COMPOSANT PRINCIPAL
// ==========================================
export default function MaisonsDeriveesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main className="relative mx-auto max-w-7xl px-6 pb-24 text-slate-200 selection:bg-violet-500/30" id="main-content">
        
        {/* --- LUEURS BACKGROUND --- */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-10%] top-[-5%] h-[800px] w-[800px] rounded-full bg-violet-600/10 blur-[150px]" />
          <div className="absolute right-[-10%] top-[30%] h-[700px] w-[700px] rounded-full bg-emerald-600/10 blur-[150px]" />
          <div className="absolute left-[15%] bottom-[10%] h-[600px] w-[600px] rounded-full bg-amber-600/10 blur-[150px]" />
        </div>

        {/* --- HERO SECTION --- */}
        <header className="relative mb-28 pt-16 text-center md:text-left">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-violet-300 backdrop-blur-md">
                <Sparkles size={16} className="animate-pulse text-amber-300" aria-hidden="true" />
                <span>Encyclopédie Astrologique</span>
              </div>
              <h1 className="mt-8 font-serif text-5xl font-light leading-[1.1] text-white md:text-6xl lg:text-[5rem]">
                {content.title.split(':').map((part, i) => (
                  <span key={i} className={i === 1 ? "block mt-4 text-violet-300 font-normal italic text-4xl md:text-5xl lg:text-[3.5rem]" : ""}>
                    {part}{i === 0 && content.title.includes(':') ? ':' : ''}
                  </span>
                ))}
              </h1>
              <p className="mt-8 max-w-2xl text-lg md:text-xl font-light leading-relaxed text-slate-300">
                {content.description}
              </p>
            </div>
            
          {/* EMPLACEMENT IMAGE HERO (ENGRENAGES) */}
            <div className="relative w-full max-w-lg aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(167,139,250,0.15)] bg-[#0f0f13]">
              <Image 
                src={Engrenages} 
                alt="Roue astrologique tridimensionnelle montrant des engrenages imbriqués représentant les multiples dimensions de la famille et des maisons dérivées"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/90 via-[#09090b]/20 to-transparent z-10 pointer-events-none" />
            </div>
          </div>
        </header>

        {/* Encadré Définition SEO */}
        <div className="mt-8 rounded-2xl border border-violet-400/20 bg-violet-400/[0.04] px-6 py-5">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-300/80">Définition</p>
          <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
            Les <strong>maisons dérivées</strong> sont une technique astrologique qui consiste à compter depuis une <Link href="/#maisons">maison natale</Link> pour obtenir des informations sur les proches, les finances d'autrui ou les événements liés à un tiers dans le thème.
          </p>
        </div>

        {/* Intro APP */}
        <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
          Vous souhaitez comprendre comment fonctionnent les <strong>maisons dérivées en astrologie</strong> ? Beaucoup d'astrologues ignorent cette technique pourtant essentielle pour lire les événements touchant l'entourage dans un thème natal. Ce guide complet vous enseigne la règle de comptage, les dérivations fondamentales et la cartographie familiale complète.
        </p>

        {/* --- INTRODUCTION & DÉFINITION --- */}
        <section aria-labelledby="intro-heading" className="mb-32 grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 backdrop-blur-md transition-all hover:bg-white/[0.04]">
            <div aria-hidden="true" className="absolute -right-4 -top-4 text-white/5"><BookOpen size={120} strokeWidth={1} /></div>
            <h2 id="intro-heading" className="relative z-10 font-serif text-3xl text-white mb-8 border-b border-white/10 pb-4">Comment les maisons dérivées révèlent un hologramme cosmique</h2>
            <div className="relative z-10 space-y-6 text-[15px] md:text-base leading-relaxed text-slate-300">
              {content.introduction.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-transparent p-10 backdrop-blur-md transition-all hover:border-emerald-500/40">
            <div aria-hidden="true" className="absolute -right-4 -top-4 text-emerald-500/5"><Layers size={120} strokeWidth={1} /></div>
            <h3 className="relative z-10 font-serif text-3xl text-white mb-8 border-b border-emerald-500/20 pb-4">Axiome et Définition</h3>
            <div className="relative z-10 space-y-6 text-[15px] md:text-base leading-relaxed text-slate-300">
              {content.definition.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </section>

        {/* --- LA RÈGLE D'OR (COMPTAGE) --- */}
        <section className="max-w-6xl mx-auto">
          <SectionTitle id="regles" icon={Calculator}>{content.reglesTitle}</SectionTitle>
          <p className="mb-12 text-lg text-slate-300 font-light italic max-w-4xl leading-relaxed">{content.reglesIntro}</p>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 relative">
            {content.regles.map((item, i) => (
              <article key={item.etape} className="group relative z-10 rounded-[2rem] border border-white/10 bg-[#0c0c0c] p-8 transition-all duration-500 hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(167,139,250,0.1)]">
                <div className="flex justify-between items-start mb-8">
                  <span className="text-6xl font-serif text-white/5 group-hover:text-violet-500/20 transition-colors leading-none">
                    {item.etape}
                  </span>
                  <div className="h-3 w-3 rounded-full bg-violet-500 shadow-[0_0_15px_rgba(167,139,250,0.8)]" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">{item.nom}</h3>
                <p className="text-[15px] leading-relaxed text-slate-400">{item.texte}</p>
              </article>
            ))}
            {/* Ligne connectrice décorative desktop */}
            <div aria-hidden="true" className="hidden lg:block absolute top-[4.5rem] left-10 right-10 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent z-0" />
          </div>

        {/* EMPLACEMENT IMAGE INFOGRAPHIE COMPTAGE (MAISONS DÉRIVÉES) */}
          <div className="mt-16 mb-8 relative w-full h-[350px] md:h-[500px] rounded-[3rem] border border-white/10 overflow-hidden bg-[#111] shadow-2xl group">
               <Image 
                 src={Maisonsderivees}
                 alt="Infographie visuelle expliquant le comptage inclusif étape par étape sur une roue du zodiaque"
                 fill
                 className="object-cover transition-transform duration-700 group-hover:scale-105"
                 sizes="(max-width: 1024px) 100vw, 80vw"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/80 via-transparent to-transparent pointer-events-none" />
          </div>
        </section>

 {/* --- LES DÉRIVATIONS FONDAMENTALES (ENCYCLOPÉDIE) --- */}
        <section>
          <SectionTitle id="applications" icon={Compass}>{content.applicationsTitle}</SectionTitle>
          <p className="mb-12 text-lg text-slate-300 font-light italic max-w-4xl leading-relaxed">{content.applicationsIntro}</p>
          
          <div className="grid gap-6 md:grid-cols-2">
            {content.applications.map((item, index) => (
              <article key={index} className="group relative overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.015] p-8 transition-all hover:bg-white/[0.03] hover:border-amber-500/30">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Network size={100} className="text-amber-500" strokeWidth={0.5} aria-hidden="true" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#0c0c0c] shadow-inner group-hover:border-amber-500/40 transition-colors">
                      <span className="font-serif text-2xl text-amber-100/60 group-hover:text-amber-300 transition-colors">
                        <RomanHouse n={item.maisonNatale} />
                      </span>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400 bg-amber-400/10 border border-amber-400/20 px-4 py-1.5 rounded-full">
                      {item.derivation}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-white mb-4 group-hover:text-amber-100 transition-colors">{item.titre}</h3>
                  <p className="text-[15px] leading-relaxed text-slate-300">{item.texte}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* --- CARTOGRAPHIE FAMILIALE (COMPLÈTE) --- */}
        <section>
          <SectionTitle id="famille" icon={TreeDeciduous}>{content.familleTitle}</SectionTitle>
          <div className="mb-14 rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 md:p-10 text-lg text-slate-300 font-light italic leading-relaxed max-w-5xl shadow-lg backdrop-blur-sm">
            {content.familleIntro}
          </div>
          
          <div className="grid gap-12 lg:grid-cols-3">
            {content.famille.map((group, idx) => (
              <div key={idx} className="space-y-8 rounded-[2.5rem] border border-white/5 bg-[#09090b] p-8 md:p-10 shadow-2xl relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-500">
                <div className="absolute -right-12 -top-12 text-white/5 pointer-events-none group-hover:text-emerald-500/5 transition-colors">
                  <Users size={200} strokeWidth={0.5} aria-hidden="true" />
                </div>
                
                <h3 className="relative z-10 font-serif text-2xl text-emerald-300 border-b border-emerald-500/20 pb-4">
                  {group.groupe}
                </h3>
                
                <div className="relative z-10 space-y-6">
                  {group.membres.map((m, mIdx) => (
                    <div key={mIdx} className="relative pl-6 border-l-2 border-white/10 hover:border-emerald-400 transition-colors">
                      <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-[#09090b] border-2 border-white/20" aria-hidden="true" />
                      <h4 className="text-lg font-bold text-white mb-2 flex flex-wrap items-center gap-3">
                        {m.nom}
                        <span className="text-[10px] uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md shrink-0">
                          {m.maison}
                        </span>
                      </h4>
                      <p className="text-[14px] leading-relaxed text-slate-400">{m.texte}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- MASTERCLASS: 5 CAS PRATIQUES --- */}
        <section>
          <SectionTitle id="cas-pratiques" icon={BookOpen}>{content.caseStudiesTitle}</SectionTitle>
          <div className="grid gap-10">
            {content.caseStudies.map((item, i) => (
              <article key={i} className="group relative overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-[2px] shadow-2xl transition-all duration-500 hover:border-sky-500/40">
                <div className="rounded-[2.9rem] bg-[#0c0c0e] p-8 md:p-12">
                  
                  <div className="mb-10 flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-white/10 pb-8">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 border border-sky-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-300 mb-5">
                        <Zap size={14} aria-hidden="true" /> Cas Pratique #{i + 1}
                      </div>
                      <h3 className="font-serif text-3xl md:text-4xl text-white">{item.titre}</h3>
                    </div>
                  </div>
                  
                  <div className="grid gap-8 lg:grid-cols-5">
                    <div className="lg:col-span-2 space-y-6">
                      <div className="rounded-3xl border border-white/10 bg-[#111] p-6 shadow-inner h-full flex flex-col justify-center">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 block mb-3">Question posée</span>
                        <p className="font-serif text-xl text-slate-200">{item.question}</p>
                      </div>
                      <div className="rounded-3xl border border-sky-500/30 bg-sky-500/5 p-6 shadow-[0_0_30px_rgba(14,165,233,0.05)]">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-sky-400 block mb-3">Données Célestes</span>
                        <p className="text-[15px] leading-relaxed text-sky-100">{item.donnees}</p>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-3 relative flex flex-col justify-center rounded-3xl bg-slate-800/20 p-8 md:p-10 border border-white/5 backdrop-blur-md">
                        <div className="absolute top-6 right-6 text-white/5"><Quote size={80} strokeWidth={0.5} aria-hidden="true" /></div>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 block mb-5">Analyse Astrologique</span>
                        <p className="relative z-10 text-lg md:text-xl leading-relaxed text-slate-300 font-light">&ldquo; {item.interpretation} &rdquo;</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* --- LIMITES & ÉTHIQUE --- */}
        <section className="max-w-5xl mx-auto">
          <SectionTitle id="ethique" icon={AlertTriangle}>{content.limitesTitle}</SectionTitle>
          <div className="relative rounded-[3rem] border border-dashed border-rose-500/30 bg-rose-950/10 p-8 md:p-14 backdrop-blur-sm shadow-2xl">
            <div className="grid md:grid-cols-3 gap-12 items-center">
              <div className="md:col-span-2 space-y-8">
                {content.limites.map((p, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="text-rose-500 shrink-0 mt-1 bg-rose-500/10 p-2 rounded-full h-fit">
                      <CheckCircle2 size={20} aria-hidden="true" />
                    </div>
                    <p className="text-[15px] md:text-base leading-relaxed text-slate-300">{p}</p>
                  </div>
                ))}
              </div>
              <div className="hidden md:flex flex-col items-center justify-center gap-6 rounded-[2rem] bg-rose-500/5 p-10 border border-rose-500/20 shadow-[0_0_40px_rgba(225,29,72,0.1)]">
                <AlertTriangle className="text-rose-500/80 animate-pulse" size={80} strokeWidth={1} aria-hidden="true" />
                <span className="text-xs uppercase tracking-[0.3em] text-center text-rose-300 font-bold leading-relaxed">
                  Ligne Rouge <br /> Astrologique
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* --- CONCLUSION --- */}
        <section className="mt-36 max-w-5xl mx-auto">
          <div className="relative p-[2px] rounded-[3.5rem] bg-gradient-to-br from-violet-500/40 via-emerald-500/20 to-amber-500/40 shadow-[0_0_80px_rgba(167,139,250,0.1)]">
            <div className="rounded-[3.4rem] bg-[#09090b] p-12 md:p-24 text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/20 to-transparent border border-violet-500/30 text-violet-300 mb-10 shadow-[0_0_30px_rgba(167,139,250,0.2)]">
                <Sparkles size={40} fill="currentColor" aria-hidden="true" />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-12">{content.conclusionTitle}</h2>
              <div className="max-w-3xl mx-auto space-y-10">
                {content.conclusion.map((p, i) => (
                  <p key={i} className="text-xl md:text-2xl font-light leading-relaxed text-slate-300 italic">&ldquo; {p} &rdquo;</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- FAQ --- */}
        <section className="max-w-4xl mx-auto mt-20">
          <SectionTitle id="faq" icon={HelpCircle}>{content.faqTitle}</SectionTitle>
          <div className="grid gap-6">
            {content.faq.map((item, i) => (
              <details key={i} className="group rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 transition-all hover:bg-white/[0.04] hover:border-violet-500/30 cursor-pointer">
                <summary className="flex list-none items-center justify-between font-serif text-xl md:text-2xl text-white outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-4 focus-visible:ring-offset-[#09090b] rounded-xl">
                  <span className="pr-6">{item.question}</span>
                  <span className="text-violet-400 transition-transform duration-500 group-open:rotate-180 bg-violet-500/10 p-3 rounded-full shrink-0 border border-violet-500/20">
                    <ChevronRight size={24} aria-hidden="true" />
                  </span>
                </summary>
                <p className="mt-8 text-[15px] md:text-base leading-relaxed text-slate-300 border-t border-white/10 pt-8">
                  {item.answer}
                </p>
              </details>
            ))}
            <details className="group rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 transition-all hover:bg-white/[0.04] hover:border-violet-500/30 cursor-pointer">
              <summary className="flex list-none items-center justify-between font-serif text-xl md:text-2xl text-white outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-4 focus-visible:ring-offset-[#09090b] rounded-xl">
                <span className="pr-6">Peut-on utiliser les maisons dérivées en synastrie ?</span>
                <span className="text-violet-400 transition-transform duration-500 group-open:rotate-180 bg-violet-500/10 p-3 rounded-full shrink-0 border border-violet-500/20">
                  <ChevronRight size={24} aria-hidden="true" />
                </span>
              </summary>
              <p className="mt-8 text-[15px] md:text-base leading-relaxed text-slate-300 border-t border-white/10 pt-8">
                Oui, les maisons dérivées enrichissent considérablement l'analyse en <Link href="/synastrie">synastrie</Link>. Par exemple, la Maison VIII (dérivée de la VII) représente les finances du partenaire, et la Maison IX (dérivée 3 de la VII) sa fratrie. Cette technique permet de lire dans votre propre thème des informations sur les proches de votre conjoint.
              </p>
            </details>
          </div>
        </section>

        {/* --- FOOTER DE L'ARTICLE --- */}
        <footer className="mt-32 border-t border-white/10 pt-16 flex flex-col items-center gap-8">
          <Link
            href="/blog"
            aria-label="Retour à la liste des articles d'astrologie"
            className="group flex items-center gap-4 rounded-full border border-violet-500/30 bg-violet-500/10 px-8 py-5 text-[15px] font-bold uppercase tracking-widest text-violet-300 transition-all duration-300 hover:bg-violet-500/20 hover:border-violet-400 hover:shadow-[0_0_30px_rgba(167,139,250,0.2)] focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-4 focus:ring-offset-black"
          >
            <ArrowLeft size={20} className="transition-transform duration-300 group-hover:-translate-x-2" aria-hidden="true" />
            Explorer d'autres concepts
          </Link>
          <p className="text-xs text-slate-600 uppercase tracking-[0.4em] font-bold mt-4" aria-hidden="true">
            Astro Cours — L'Encyclopédie
          </p>
        </footer>

      </main>
    </>
  );
}