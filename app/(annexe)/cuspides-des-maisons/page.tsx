import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  Compass, 
  BookOpen, 
  Sparkles, 
  UserCircle2, 
  Network, 
  Layers, 
  HelpCircle, 
  ArrowLeft,
  ChevronRight,
  Zap,
  MapPin,
  GitCompare,
  CheckCircle2,
  Quote,
  Star,
  Key
} from "lucide-react";

import article from "@/data/cuspides-maisons.json";
import { buildMeta, buildTitle } from "@/lib/seo";
import CupsidesImage from "@/public/images/maisons/maisons-cuspides.webp"
// ==========================================
// 1. TYPAGE STRICT (Basé sur ton JSON exact)
// ==========================================
type Angle = { maison: number; nom: string; titre: string; texte: string; };
type MaisonItem = { maison: number; titre: string; texte: string; };
type Signe = { signe: string; texte: string; };
type SignGroup = { element: string; signes: Signe[]; };
type ConjunctionExample = { titre: string; texte: string; };
type CaseStudy = { titre: string; porte: string; gerant: string; interpretation: string; };
type MasterInHouse = { titre: string; texte: string; };
type MasterAspect = { titre: string; texte: string; };
type FaqItem = { question: string; answer: string; };

type ArticleData = {
  slug: string;
  title: string;
  description: string;
  introduction: string[];
  definition: string[];
  anglesTitle: string;
  anglesIntro: string;
  angles: Angle[];
  maisonsTitle: string;
  maisons: MaisonItem[];
  signesTitle: string;
  signesIntro: string;
  signesParElement: SignGroup[];
  conjunctionsTitle: string;
  conjunctionsIntro: string;
  conjunctions: ConjunctionExample[];
  maitreTitle: string;
  maitreIntro: string[];
  caseStudiesTitle: string;
  caseStudies: CaseStudy[];
  masterInHouseTitle: string;
  masterInHouse: MasterInHouse[];
  masterAspectsTitle: string;
  masterAspects: MasterAspect[];
  interceptedTitle: string;
  intercepted: string[];
  conclusionTitle: string;
  conclusion: string[];
  methodeTitle: string;
  methode: string[];
  faqTitle: string;
  faq: FaqItem[];
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
  ogImage: "/images/articles/cuspides-maisons/a.webp",
});

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: content.title,
  description: content.description,
  inLanguage: "fr-FR",
  mainEntityOfPage: { "@type": "WebPage", "@id": `https://www.astro-cours.com/${content.slug}` },
  author: { "@type": "Organization", name: "Astro Cours" },
  publisher: { "@type": "Organization", name: "Astro Cours" },
  image: ["https://www.astro-cours.com/images/articles/cuspides-maisons/a.webp"],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.astro-cours.com" },
    { "@type": "ListItem", position: 2, name: "Articles", item: "https://www.astro-cours.com/articles" },
    { "@type": "ListItem", position: 3, name: content.title, item: `https://www.astro-cours.com/${content.slug}` },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: content.faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

// ==========================================
// 3. HELPERS VISUELS
// ==========================================
function RomanHouse({ n }: { n: number }) {
  const romans = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];
  return <span>{romans[n - 1] ?? n}</span>;
}

function houseImageSrc(maison: number) {
  const romans = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];
  const roman = romans[maison - 1];
  return roman ? `/images/maisons/${roman}.webp` : null;
}

function SectionTitle({ children, id, icon: Icon }: { children: React.ReactNode; id: string; icon?: any }) {
  return (
    <div className="group mb-12 mt-28 flex items-center gap-5 scroll-mt-28" id={id}>
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-500/20 to-transparent text-violet-300 shadow-[0_0_20px_rgba(167,139,250,0.15)] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
        {Icon ? <Icon size={26} strokeWidth={1.5} /> : <Sparkles size={26} strokeWidth={1.5} />}
      </div>
      <h2 className="font-serif text-3xl md:text-5xl tracking-tight text-white">{children}</h2>
      <div className="h-px flex-1 bg-gradient-to-r from-violet-500/30 via-violet-500/5 to-transparent ml-4" />
    </div>
  );
}

// ==========================================
// 4. COMPOSANT PRINCIPAL DE LA PAGE
// ==========================================
export default function CuspidesMaisonsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main id="main-content" className="relative mx-auto max-w-6xl px-6 pb-24 text-text selection:bg-violet-500/30">
        
        {/* LUEURS D'AMBIANCE (Background) */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-15%] top-0 h-[800px] w-[800px] rounded-full bg-violet-600/15 blur-[150px]" />
          <div className="absolute right-[-10%] top-[25%] h-[600px] w-[600px] rounded-full bg-amber-600/10 blur-[120px]" />
          <div className="absolute left-[20%] bottom-[10%] h-[500px] w-[500px] rounded-full bg-fuchsia-600/10 blur-[120px]" />
        </div>

        {/* --- HERO SECTION --- */}
        <header className="relative mb-24 pt-16 text-center md:text-left">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/40 bg-violet-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-violet-300 backdrop-blur-md">
                <Sparkles size={16} className="animate-pulse text-amber-300" />
                Encyclopédie Astrologique
              </div>
              <h1 className="mt-8 font-serif text-5xl font-light leading-[1.1] text-white md:text-7xl lg:text-[5rem]">
                {content.title.split(':').map((part, i) => (
                  <span key={i} className={i === 1 ? "block mt-2 text-violet-300 font-normal italic" : ""}>
                    {part}{i === 0 && content.title.includes(':') ? ':' : ''}
                  </span>
                ))}
              </h1>
              <p className="mt-8 max-w-2xl text-lg md:text-xl font-light leading-relaxed text-slate-300">
                {content.description}
              </p>
            </div>
            <div className="relative w-full max-w-md aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(167,139,250,0.15)]">
              <Image
                src={CupsidesImage}
                alt="Illustration des cuspides des maisons"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            </div>
          </div>
        </header>

        {/* --- INTRODUCTION & DÉFINITION --- */}
        <section className="mb-28 grid gap-8 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 backdrop-blur-md transition-all hover:bg-white/[0.04]">
            <div className="absolute -right-4 -top-4 text-white/5"><BookOpen size={120} strokeWidth={1} /></div>
            <h3 className="relative z-10 font-serif text-3xl text-white mb-8 border-b border-white/10 pb-4">Introduction</h3>
            <div className="relative z-10 space-y-6 text-[15px] md:text-base leading-relaxed text-slate-300">
              {content.introduction.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] border border-violet-500/20 bg-gradient-to-br from-violet-500/5 to-transparent p-10 backdrop-blur-md transition-all hover:border-violet-500/40">
            <div className="absolute -right-4 -top-4 text-violet-500/5"><Layers size={120} strokeWidth={1} /></div>
            <h3 className="relative z-10 font-serif text-3xl text-white mb-8 border-b border-white/10 pb-4">Nature des Cuspides</h3>
            <div className="relative z-10 space-y-6 text-[15px] md:text-base leading-relaxed text-slate-300">
              {content.definition.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </section>

        {/* --- LES 4 ANGLES --- */}
        <section>
          <SectionTitle id="angles" icon={Compass}>{content.anglesTitle}</SectionTitle>
          <p className="mb-10 text-lg text-slate-300 font-light italic max-w-4xl leading-relaxed">{content.anglesIntro}</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {content.angles.map((item) => (
              <div key={item.maison} className="group rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 transition-all duration-500 hover:border-amber-500/40 hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(245,158,11,0.05)]">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-5xl font-serif text-white/10 group-hover:text-amber-500/20 transition-colors">
                    <RomanHouse n={item.maison} />
                  </span>
                  <div className="h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.8)]" />
                </div>
                <h3 className="font-serif text-2xl text-white mb-1">{item.nom}</h3>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-400 mb-5">{item.titre}</p>
                <p className="text-[15px] leading-relaxed text-slate-300">{item.texte}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- LES 12 MAISONS (LISTE PREMIUM) --- */}
        <section>
          <SectionTitle id="maisons" icon={Layers}>{content.maisonsTitle}</SectionTitle>
          <div className="grid gap-5">
            {content.maisons.map((item) => (
              <div key={item.maison} className="group flex items-center gap-6 rounded-[2rem] border border-white/5 bg-white/[0.015] p-4 pr-8 transition-all hover:bg-white/[0.04] hover:border-violet-500/30">
                <div className="relative h-28 w-28 md:h-36 md:w-36 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-black/50 p-2 shadow-inner">
                  <Image
                    src={houseImageSrc(item.maison) || ""}
                    alt={`Maison ${item.maison}`}
                    fill
                    className="object-contain p-2 transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 112px, 144px"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-violet-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex-1 py-2">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-violet-400">
                      Cuspide <RomanHouse n={item.maison} />
                    </span>
                    <div className="h-[1px] flex-1 max-w-[60px] bg-gradient-to-r from-violet-500/50 to-transparent" />
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-white mb-3 group-hover:text-violet-200 transition-colors">{item.titre}</h3>
                  <p className="text-[15px] md:text-base leading-relaxed text-slate-300">{item.texte}</p>
                </div>
                <div className="hidden lg:flex h-12 w-12 items-center justify-center rounded-full border border-white/5 bg-white/5 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                   <ChevronRight size={24} className="text-violet-400" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SIGNES PAR ÉLÉMENT (COULEURS) --- */}
        <section>
          <SectionTitle id="signes" icon={Zap}>{content.signesTitle}</SectionTitle>
          <div className="mb-12 rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 text-lg text-slate-300 font-light italic leading-relaxed max-w-4xl shadow-lg">
            {content.signesIntro}
          </div>
          <div className="grid gap-14">
            {content.signesParElement.map((group) => {
              const style = group.element === "Signes de Feu" ? "text-orange-400 border-orange-500/30 bg-orange-500/10" :
                            group.element === "Signes de Terre" ? "text-emerald-400 border-emerald-500/30 bg-emerald-500/10" :
                            group.element === "Signes d’Air" ? "text-sky-400 border-sky-500/30 bg-sky-500/10" :
                            "text-indigo-400 border-indigo-500/30 bg-indigo-500/10"; 
              const dotStyle = style.split(' ')[0].replace('text-', 'bg-');

              return (
                <div key={group.element} className="space-y-8">
                  <div className="flex items-center gap-6">
                    <h3 className={`font-serif text-3xl px-6 py-2 rounded-full border backdrop-blur-sm shadow-lg ${style}`}>
                      {group.element}
                    </h3>
                    <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                  </div>
                  <div className="grid gap-6 md:grid-cols-3">
                    {group.signes.map((s) => (
                      <div key={s.signe} className="relative group rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 transition-all hover:bg-white/[0.05] hover:border-white/30 hover:shadow-xl">
                        <div className={`absolute top-8 right-8 h-2 w-2 rounded-full opacity-60 shadow-[0_0_10px_currentColor] ${dotStyle}`} />
                        <h4 className="text-sm font-bold uppercase tracking-[0.25em] text-white mb-4">{s.signe}</h4>
                        <p className="text-[15px] leading-relaxed text-slate-300">{s.texte}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* --- CONJONCTIONS --- */}
        <section>
          <SectionTitle id="conjonctions" icon={Star}>{content.conjunctionsTitle}</SectionTitle>
          <p className="mb-10 text-lg text-slate-300 font-light italic max-w-4xl leading-relaxed">{content.conjunctionsIntro}</p>
          <div className="grid gap-6 md:grid-cols-3">
            {content.conjunctions.map((item) => (
              <div key={item.titre} className="group rounded-[2rem] border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-transparent p-8 transition-all hover:border-amber-500/50 hover:bg-amber-500/10">
                <Star className="text-amber-500 mb-6 transition-transform duration-500 group-hover:rotate-[144deg] group-hover:scale-110" size={32} />
                <h3 className="font-serif text-2xl text-white mb-4">{item.titre}</h3>
                <p className="text-[15px] leading-relaxed text-slate-300">{item.texte}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- LE MAÎTRE DE MAISON --- */}
        <section>
          <SectionTitle id="maitre" icon={Key}>{content.maitreTitle}</SectionTitle>
          <div className="rounded-[2.5rem] border border-violet-500/30 bg-gradient-to-br from-violet-500/10 to-transparent p-10 max-w-4xl shadow-[0_0_40px_rgba(167,139,250,0.1)]">
            <div className="space-y-6 text-base md:text-lg leading-relaxed text-slate-200">
              {content.maitreIntro.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </section>

        {/* --- CAS PRATIQUES (MASTERCLASS DASHBOARD) --- */}
        <section>
          <SectionTitle id="cas-pratiques" icon={UserCircle2}>{content.caseStudiesTitle}</SectionTitle>
          <div className="grid gap-12">
            {content.caseStudies.map((item, i) => (
              <div key={i} className="group relative overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-1 shadow-2xl transition-all duration-500 hover:border-violet-500/40">
                <div className="rounded-[2.9rem] bg-[#0c0c0c] p-8 md:p-12">
                  <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 pb-8">
                    <h3 className="font-serif text-3xl md:text-4xl text-white">{item.titre}</h3>
                    <div className="inline-flex shrink-0 items-center gap-2 rounded-full bg-violet-500/20 px-5 py-2 text-xs font-bold uppercase tracking-widest text-violet-300">
                      <Zap size={16} /> Cas pratique {i + 1}
                    </div>
                  </div>
                  <div className="grid gap-10 lg:grid-cols-2">
                    <div className="space-y-6">
                      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 block mb-3">La Porte (Cuspide)</span>
                        <p className="font-serif text-2xl text-slate-200">{item.porte}</p>
                      </div>
                      <div className="rounded-3xl border border-violet-500/30 bg-violet-500/10 p-8 shadow-[0_0_20px_rgba(167,139,250,0.1)]">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-300 block mb-3">Le Gérant (Maître)</span>
                        <p className="font-serif text-2xl text-violet-100">{item.gerant}</p>
                      </div>
                    </div>
                    <div className="relative flex flex-col justify-center rounded-3xl bg-amber-500/5 p-10 border border-amber-500/20">
                        <div className="absolute top-8 right-8 text-amber-500/10"><BookOpen size={80} strokeWidth={1} /></div>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-500 block mb-6">Verdict de l'Astrologue</span>
                        <p className="relative z-10 text-xl md:text-2xl leading-relaxed text-amber-100/90 font-light italic">&ldquo; {item.interpretation} &rdquo;</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- LE MAÎTRE EN MAISON (THÉORÈMES) --- */}
        <section>
          <SectionTitle id="maitre-en-maison" icon={MapPin}>{content.masterInHouseTitle}</SectionTitle>
          <div className="grid gap-8 md:grid-cols-2">
            {content.masterInHouse.map((item, i) => (
              <div key={i} className="group rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 transition-all hover:border-sky-500/40 hover:bg-sky-500/5 hover:shadow-[0_0_30px_rgba(14,165,233,0.1)]">
                <div className="flex items-center gap-5 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-400 font-serif text-2xl border border-sky-500/20">
                    {item.titre.split(' ')[2]} 
                  </div>
                  <h3 className="font-serif text-2xl text-white">{item.titre}</h3>
                </div>
                <p className="text-[15px] md:text-base leading-relaxed text-slate-300 pl-4 border-l-2 border-white/10 group-hover:border-sky-500/40 transition-colors">
                  {item.texte}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* --- ASPECTS ENTRE MAÎTRES (CONNEXIONS) --- */}
        <section>
          <SectionTitle id="aspects-maitres" icon={GitCompare}>{content.masterAspectsTitle}</SectionTitle>
          <div className="grid gap-8">
            {content.masterAspects.map((item, i) => (
              <div key={i} className="relative overflow-hidden rounded-[2.5rem] border border-emerald-500/20 bg-gradient-to-r from-emerald-500/5 to-transparent p-10 transition-all hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                <div className="absolute -right-10 -top-10 text-emerald-500/5 rotate-12"><Network size={250} /></div>
                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.5rem] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <GitCompare size={30} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-white mb-3">{item.titre}</h3>
                    <p className="text-[15px] md:text-base leading-relaxed text-slate-300 max-w-4xl">{item.texte}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- MAISONS INTERCEPTÉES --- */}
        <section>
          <SectionTitle id="interceptees" icon={Layers}>{content.interceptedTitle}</SectionTitle>
          <div className="relative rounded-[3rem] border border-dashed border-white/20 bg-black/40 p-10 md:p-14 backdrop-blur-sm">
            <div className="grid md:grid-cols-3 gap-12 items-center">
              <div className="md:col-span-2 space-y-6">
                {content.intercepted.map((p, i) => <p key={i} className="text-[15px] md:text-base leading-relaxed text-slate-300">{p}</p>)}
              </div>
              <div className="hidden md:flex flex-col items-center justify-center gap-6 rounded-[2rem] bg-white/[0.02] p-10 border border-white/5">
                <Layers className="text-slate-500" size={80} strokeWidth={1} />
                <span className="text-xs uppercase tracking-[0.3em] text-center text-slate-400 font-bold">L'Énergie <br /> Cachée</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- MÉTHODE --- */}
        <section>
          <SectionTitle id="methode" icon={CheckCircle2}>{content.methodeTitle}</SectionTitle>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {content.methode.map((item, i) => (
              <div key={i} className="relative overflow-hidden group p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/10 hover:bg-violet-500/5 hover:border-violet-500/30 transition-all">
                <span className="absolute -top-4 -right-4 font-serif text-[6rem] leading-none text-white/5 group-hover:text-violet-500/10 transition-colors">
                  {i + 1}
                </span>
                <div className="relative z-10 mb-6 text-violet-400"><CheckCircle2 size={32} /></div>
                <p className="relative z-10 text-[15px] font-medium leading-relaxed text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- CONCLUSION --- */}
        <section className="mt-32">
          <div className="relative p-[2px] rounded-[3.5rem] bg-gradient-to-br from-violet-500/40 via-white/10 to-amber-500/40 shadow-[0_0_50px_rgba(167,139,250,0.15)]">
            <div className="rounded-[3.4rem] bg-[#0c0c0c] p-12 md:p-20 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/20 to-transparent border border-violet-500/20 text-violet-300 mb-10">
                <Quote size={36} fill="currentColor" />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-10">{content.conclusionTitle}</h2>
              <div className="max-w-4xl mx-auto space-y-8">
                {content.conclusion.map((p, i) => <p key={i} className="text-xl md:text-2xl font-light leading-relaxed text-slate-300 italic">&ldquo; {p} &rdquo;</p>)}
              </div>
            </div>
          </div>
        </section>

        {/* --- FAQ --- */}
        <section>
          <SectionTitle id="faq" icon={HelpCircle}>{content.faqTitle}</SectionTitle>
          <div className="grid gap-6 md:grid-cols-2">
            {content.faq.map((item, i) => (
              <details key={i} className="group rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 transition-all hover:bg-white/[0.05] hover:border-white/20">
                <summary className="flex cursor-pointer list-none items-center justify-between font-serif text-xl md:text-2xl text-white outline-none">
                  {item.question}
                  <span className="text-violet-400 transition-transform duration-300 group-open:rotate-180 bg-violet-500/10 p-2 rounded-full"><ChevronRight size={20} /></span>
                </summary>
                <p className="mt-6 text-[15px] md:text-base leading-relaxed text-slate-300 border-t border-white/10 pt-6">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

 

      </main>
    </>
  );
}