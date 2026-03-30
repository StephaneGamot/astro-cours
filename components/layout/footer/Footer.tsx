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
  ArrowUpRight 
} from "lucide-react";

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
  { name: "Lilith (Lune Noire)", href: "/lilith" },
  { name: "Maîtrises", href: "/maitrises" },
  { name: "Planète rétrograde", href: "/retrogrades" },
  { name: "Synastrie", href: "/synastrie" },
  { name: "Révolutions solaires", href: "/revolution-solaire" },
  { name: "Astéroïdes", href: "/asteroides" },
];

const legal = [
  { name: "Mentions légales", href: "/mentions-legales" },
  { name: "Confidentialité", href: "/confidentialite" },
  { name: "Sitemap", href: "/sitemap.xml" },
];

function FooterLink({ item }: { item: { name: string; href: string } }) {
  return (
    <li>
      <Link
        href={item.href}
        className="group flex items-center gap-3 text-[15px] text-slate-400 hover:text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-md py-1"
      >
        <span className="h-1 w-1 rounded-full bg-sky-500/40 group-hover:w-3 group-hover:bg-sky-400 transition-all duration-300" />
        <span className="leading-relaxed">{item.name}</span>
      </Link>
    </li>
  );
}

function DesktopCol({
  title,
  items,
  max = 12,
  icon: Icon,
}: {
  title: string;
  items: Array<{ name: string; href: string }>;
  max?: number;
  icon?: any;
}) {
  return (
    <nav aria-label={`Navigation ${title}`} className="hidden lg:block">
      <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-white mb-6">
        {Icon && <Icon className="h-4 w-4 text-sky-400" />}
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
  max = 10,
}: {
  title: string;
  items: Array<{ name: string; href: string }>;
  max?: number;
}) {
  return (
    <details className="group rounded-2xl border border-white/5 bg-white/[0.02] px-5 py-4 open:bg-white/[0.05] transition-all duration-300 lg:hidden">
      <summary className="cursor-pointer list-none select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-[15px] font-bold text-white tracking-wide">{title}</h3>
          <ChevronDown className="h-5 w-5 text-slate-500 group-open:rotate-180 transition-transform duration-300" />
        </div>
      </summary>
      <ul role="list" className="mt-6 space-y-4 border-t border-white/5 pt-6">
        {items.slice(0, max).map((item) => (
          <FooterLink key={item.href} item={item} />
        ))}
      </ul>
    </details>
  );
}

export default function Footer() {
  const posts = getAllPosts()
    .sort((a, b) => +new Date(b.meta.date) - +new Date(a.meta.date))
    .slice(0, 5)
    .map((p) => ({
      name: p.meta.title,
      href: `/blog/${p.meta.slug}`,
    }));

  return (
    <footer className="relative bg-[#020617] border-t border-white/10 overflow-hidden" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      {/* Glows Premium (Nébuleuses) */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-sky-500/10 blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/5 blur-[100px] rounded-full" />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-12 lg:px-8">
        
        {/* TOP BLOCK: Branding & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5 space-y-8">
            <Link 
              href="/" 
              className="inline-flex items-center gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-xl p-1"
              aria-label="Astro Cours - Retour à l'accueil"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-sky-500/10">
                <Sparkles className="h-6 w-6 text-sky-400" />
              </div>
              <span className="font-serif text-3xl tracking-tight text-white">Astro Cours</span>
            </Link>
            <p className="text-lg text-slate-400 max-w-md font-light leading-relaxed">
              Explorez les profondeurs du ciel avec des cours d’astrologie clairs, 
              modernes et structurés pour passionnés et chercheurs.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm group transition-all duration-500 hover:border-white/20">
              <div className="absolute top-0 right-0 -mr-12 -mt-12 w-40 h-40 bg-sky-500/10 blur-3xl rounded-full" />
              <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="space-y-2">
                  <p className="text-xl font-bold text-white tracking-tight">Besoin d’un sujet précis ?</p>
                  <p className="text-slate-400 font-light italic">Explorez notre bibliothèque de savoirs stellaires.</p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-6 py-3 text-sm font-medium text-white hover:bg-white/[0.12] transition-all duration-300"
                  >
                    <BookOpen className="h-4 w-4" />
                    Le Blog
                  </Link>
                  <Link
                    href="/#zodiaque"
                    className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-sm font-bold text-white hover:bg-sky-500 shadow-lg shadow-sky-900/20 transition-all duration-300"
                  >
                    <Compass className="h-4 w-4" />
                    Parcourir le Zodiaque
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE ACCORDIONS */}
        <div className="grid gap-4 lg:hidden mb-12">
          <MobileAccordion title="Signes du Zodiaque" items={baseColumns.signes} max={12} />
          <MobileAccordion title="Planètes & Astres" items={baseColumns.planetes} max={10} />
          <MobileAccordion title="Maisons Astrologiques" items={baseColumns.maisons} max={12} />
          <MobileAccordion title="Annexes Pédagogiques" items={annexes} max={10} />
          <MobileAccordion title="Derniers Articles" items={posts} max={5} />
        </div>

        {/* DESKTOP COLUMNS */}
        <div className="hidden lg:grid gap-8 lg:grid-cols-5 border-y border-white/5 py-16">
          <DesktopCol title="Signes" items={baseColumns.signes} max={12} icon={Star} />
          <DesktopCol title="Planètes" items={baseColumns.planetes} max={10} icon={Sparkles} />
          <DesktopCol title="Maisons" items={baseColumns.maisons} max={12} icon={Compass} />
          <DesktopCol title="Annexes" items={annexes} max={10} icon={BookOpen} />
          <DesktopCol title="Blog" items={posts} max={5} icon={ArrowUpRight} />
        </div>

        {/* BOTTOM LINE */}
        <div className="mt-16 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-4">
            <p className="text-sm text-slate-500 font-light">
              © {new Date().getFullYear()} Astro Cours — Tous droits réservés.
            </p>
            <address className="not-italic">
              <a
                href="https://www.stephanegamot.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-sky-400 transition-colors duration-300 group"
              >
                Architecture & Design par Stéphane Gamot
                <ExternalLink className="h-3 w-3 opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
            </address>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-4" aria-label="Liens légaux">
            {legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-slate-500 hover:text-white transition-colors duration-300 underline-offset-4 hover:underline"
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