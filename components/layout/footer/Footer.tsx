import Link from "next/link";
import maisons from "@/data/maisons.details.json";
import planetes from "@/data/planetes.details.json";
import signes from "@/data/signes.details.json";
import { getAllPosts } from "@/lib/blog";
import { 
  Sparkles, 
  ChevronDown, 
  Star, 
  ExternalLink, 
  BookOpen, 
  Compass,
  ArrowUpRight,
  Library
} from "lucide-react";

// ==========================================
// 1. TYPAGES ET DONNÉES
// ==========================================
type Item = { slug: string; nom?: string; name?: string };

const baseColumns = {
  signes: (signes as Item[]).map((s) => ({
    name: s.nom ?? s.name ?? s.slug,
    href: `/signes/${s.slug}`,
  })),
  planetes: (planetes as Item[]).map((p) => ({
    name: p.nom ?? p.name ?? p.slug,
    href: `/planetes/${p.slug}`,
  })),
  maisons: (maisons as Item[]).map((m) => ({
    name: m.nom ?? m.name ?? m.slug,
    href: `/maisons/${m.slug}`,
  })),
};

const annexes = [
  { name: "Aspects", href: "/aspects" },
  { name: "Transits", href: "/transits" },
  { name: "Points fictifs", href: "/points-fictifs" },
  { name: "Nœuds lunaires", href: "/noeuds-lunaires" },
  { name: "Cuspides des Maisons", href: "/cuspides-des-maisons" },
  { name: "Maisons Dérivées", href: "/maisons-derivees" },
  { name: "Lilith (Lune Noire)", href: "/lilith" },
  { name: "Maîtrises", href: "/maitrises" },
  { name: "Planètes rétrogrades", href: "/retrogrades" },
  { name: "Synastrie", href: "/synastrie" },
  { name: "Révolutions solaires", href: "/revolution-solaire" },
  { name: "Astéroïdes", href: "/asteroides" },
  { name: "Décans du zodiaque", href: "/les-decans" },
];

const legal = [
  { name: "Mentions légales", href: "/mentions-legales" },
  { name: "Confidentialité", href: "/confidentialite" },
  { name: "Sitemap", href: "/sitemap.xml" },
];

// ==========================================
// 2. SOUS-COMPOSANTS (Liens & Colonnes)
// ==========================================
function FooterLink({ item }: { item: { name: string; href: string } }) {
  return (
    <li>
      <Link
        href={item.href}
        className="group flex items-center gap-3 text-[14px] md:text-[15px] text-slate-400 hover:text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b] rounded-md py-1"
      >
        <span aria-hidden="true" className="h-1 w-1 rounded-full bg-violet-500/40 group-hover:w-3 group-hover:bg-violet-400 transition-all duration-300" />
        <span className="leading-relaxed">{item.name}</span>
      </Link>
    </li>
  );
}

function DesktopCol({
  title,
  items,
  max = 20,
  icon: Icon,
}: {
  title: string;
  items: Array<{ name: string; href: string }>;
  max?: number;
  icon?: any;
}) {
  return (
    <nav aria-label={`Navigation ${title}`} className="hidden lg:block">
      <h3 className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.15em] text-white mb-6 border-b border-white/5 pb-4">
        {Icon && <Icon className="h-4 w-4 text-violet-400" aria-hidden="true" />}
        {title}
      </h3>
      <ul role="list" className="space-y-3">
        {items.slice(0, max).map((item) => (
          <FooterLink key={item.href} item={item} />
        ))}
      </ul>
    </nav>
  );
}

function MobileAccordion({
  title,
  items,
  max = 20,
}: {
  title: string;
  items: Array<{ name: string; href: string }>;
  max?: number;
}) {
  return (
    <details className="group rounded-2xl border border-white/5 bg-white/[0.02] px-5 py-4 open:bg-white/[0.04] transition-all duration-300 lg:hidden">
      <summary className="cursor-pointer list-none select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-4 focus-visible:ring-offset-[#09090b] rounded-lg">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-[15px] font-bold text-white tracking-wide">{title}</h3>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 group-open:bg-violet-500/10 transition-colors">
            <ChevronDown className="h-4 w-4 text-slate-400 group-open:text-violet-400 group-open:rotate-180 transition-all duration-300" aria-hidden="true" />
          </span>
        </div>
      </summary>
      <ul role="list" className="mt-6 space-y-4 border-t border-white/10 pt-6">
        {items.slice(0, max).map((item) => (
          <FooterLink key={item.href} item={item} />
        ))}
      </ul>
    </details>
  );
}

// ==========================================
// 3. COMPOSANT FOOTER PRINCIPAL
// ==========================================
export default function Footer() {
  const posts = getAllPosts()
    .sort((a, b) => +new Date(b.meta.date) - +new Date(a.meta.date))
    .slice(0, 5)
    .map((p) => ({
      name: p.meta.title,
      href: `/blog/${p.meta.slug}`,
    }));

  return (
    <footer className="relative bg-[#09090b] border-t border-white/10 overflow-hidden mt-24" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Pied de page et navigation secondaire</h2>

      {/* LUEURS D'AMBIANCE (Background) */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-violet-600/10 blur-[120px] rounded-full" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 right-[-10%] w-96 h-96 bg-sky-600/10 blur-[120px] rounded-full" />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-12 lg:px-8">
        
        {/* --- SECTION HAUTE : Branding & CTA --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Logo et Description */}
          <div className="lg:col-span-5 space-y-8">
            <Link 
              href="/" 
              className="inline-flex items-center gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-xl p-1"
              aria-label="Astro Cours - Retour à l'accueil"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] group-hover:bg-violet-500/10 group-hover:scale-105 transition-all duration-500 shadow-xl">
                <Sparkles className="h-7 w-7 text-violet-400" aria-hidden="true" />
              </div>
              <span className="font-serif text-3xl md:text-4xl tracking-tight text-white">Astro Cours</span>
            </Link>
            <p className="text-lg text-slate-400 max-w-md font-light leading-relaxed">
              Explorez les profondeurs du ciel avec des cours d’astrologie clairs, 
              modernes et structurés pour les passionnés et les chercheurs.
            </p>
          </div>

          {/* Call to Action (Glassmorphism Premium) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-8 md:p-10 backdrop-blur-md group transition-all duration-500 hover:border-violet-500/30 hover:shadow-[0_0_40px_rgba(167,139,250,0.1)]">
              <div aria-hidden="true" className="absolute top-0 right-0 -mr-12 -mt-12 w-40 h-40 bg-violet-500/10 blur-3xl rounded-full" />
              <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="space-y-3">
                  <p className="text-2xl font-serif text-white tracking-tight">Soif de savoirs stellaires ?</p>
                  <p className="text-slate-400 font-light italic">Explorez notre bibliothèque ou reprenez les bases.</p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
                  >
                    <BookOpen className="h-4 w-4 text-slate-400" aria-hidden="true" />
                    Le Blog
                  </Link>
                  <Link
                    href="/#zodiaque"
                    className="inline-flex items-center gap-2 rounded-full bg-violet-600/90 px-6 py-3 text-sm font-bold text-white hover:bg-violet-500 shadow-lg shadow-violet-900/20 transition-all duration-300"
                  >
                    <Compass className="h-4 w-4" aria-hidden="true" />
                    Explorer le Zodiaque
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- NAVIGATION MOBILE (Accordéons) --- */}
        <nav aria-label="Navigation secondaire mobile" className="grid gap-4 lg:hidden mb-16">
          <MobileAccordion title="Signes du Zodiaque" items={baseColumns.signes} />
          <MobileAccordion title="Planètes & Astres" items={baseColumns.planetes} />
          <MobileAccordion title="Maisons Astrologiques" items={baseColumns.maisons} />
          <MobileAccordion title="Annexes Pédagogiques" items={annexes} />
          <MobileAccordion title="Derniers Articles" items={posts} max={5} />
        </nav>

        {/* --- NAVIGATION DESKTOP (Colonnes) --- */}
        <div className="hidden lg:grid gap-8 lg:grid-cols-5 border-y border-white/5 py-16">
          <DesktopCol title="Signes" items={baseColumns.signes} max={12} icon={Star} />
          <DesktopCol title="Planètes" items={baseColumns.planetes} max={12} icon={Sparkles} />
          <DesktopCol title="Maisons" items={baseColumns.maisons} max={12} icon={Compass} />
          {/* Note : max={20} par défaut permet d'afficher les 13 annexes sans les couper */}
          <DesktopCol title="Annexes" items={annexes} icon={Library} />
          <DesktopCol title="Blog" items={posts} max={5} icon={ArrowUpRight} />
        </div>

        {/* --- LIGNE LÉGALE & COPYRIGHT --- */}
        <div className="mt-16 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-4">
            <p className="text-sm text-slate-400 font-light">
              © {new Date().getFullYear()} Astro Cours — Sagesse Céleste. Tous droits réservés.
            </p>
            <address className="not-italic">
              <a
                href="https://www.stephanegamot.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-violet-400 transition-colors duration-300 group focus-visible:outline-none focus-visible:underline"
              >
                Architecture & Code par Stéphane Gamot
                <ExternalLink className="h-3 w-3 opacity-50 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              </a>
            </address>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-4" aria-label="Liens légaux">
            {legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-slate-500 hover:text-white transition-colors duration-300 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:text-white"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}