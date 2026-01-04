import Link from "next/link";
import maisons from "@/data/maisons.details.json";
import planetes from "@/data/planetes.details.json";
import signes from "@/data/signes.details.json";
import { getAllPosts } from "@/lib/blog";

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
  { name: "Planete rétrograde", href: "/retrogrades" },
  { name: "Synastrie", href: "/synastrie" },
  { name: "Révolutions solaires", href: "/revolution-solaire" },
  { name: "Astéroïdes", href: "/asteroides" },
];

const legal = [
  { name: "Mentions légales", href: "/mentions-legales" },
  { name: "Confidentialité", href: "/confidentialite" },
  { name: "Sitemap", href: "/sitemap.xml" },
];

function List({
  items,
  max = 10,
}: {
  items: Array<{ name: string; href: string }>;
  max?: number;
}) {
  return (
    <ul role="list" className="mt-4 space-y-2">
      {items.slice(0, max).map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="group inline-flex items-center gap-2 text-sm text-gray-300/80 hover:text-white transition"
          >
            <span className="h-1 w-1 rounded-full bg-white/25 group-hover:bg-white/60 transition" />
            <span className="leading-6">{item.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function DesktopCol({
  title,
  items,
  max = 10,
}: {
  title: string;
  items: Array<{ name: string; href: string }>;
  max?: number;
}) {
  return (
    <div className="hidden lg:block">
      <h3 className="text-sm font-semibold text-white/90 tracking-wide">
        {title}
      </h3>
      <List items={items} max={max} />
    </div>
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
    <details className="group rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 open:bg-white/[0.06] transition lg:hidden">
      <summary className="cursor-pointer list-none select-none">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-sm font-semibold text-white/90">{title}</h3>
          <span className="text-white/40 group-open:rotate-180 transition">
            ▾
          </span>
        </div>
        <div className="mt-1 text-xs text-gray-400">
          {Math.min(items.length, max)} liens
        </div>
      </summary>

      <div className="mt-3 pb-1">
        <List items={items} max={max} />
      </div>
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
    <footer className="relative bg-gray-950 border-t border-white/10">
      {/* glow premium */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_380px_at_50%_0%,rgba(56,189,248,0.18),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_320px_at_20%_20%,rgba(255,255,255,0.06),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-14 lg:px-8">
        {/* Top block */}
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                ✦
              </span>
              <span className="font-serif text-xl text-white">Astro Cours</span>
            </Link>
            <p className="text-sm text-gray-400 max-w-xl">
              Cours d’astrologie clairs, structurés et modernes. Signes, planètes,
              maisons et annexes pédagogiques.
            </p>
          </div>

          {/* mini CTA */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
            <p className="text-sm text-white/90 font-semibold">
              Besoin d’un sujet précis ?
            </p>
            <p className="mt-1 text-xs text-gray-400">
              Explore le blog ou commence par une maison.
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <Link
                href="/blog"
                className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs text-gray-200 hover:bg-white/[0.10] transition"
              >
                Voir le blog
              </Link>
              <Link
                href="/#zodiaque"
                className="rounded-full border border-sky-400/25 bg-sky-500/10 px-4 py-2 text-xs text-sky-100 hover:bg-sky-500/15 transition"
              >
                Parcourir le zodiaque
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile accordions */}
        <div className="grid gap-3 lg:hidden">
          <MobileAccordion title="Signes" items={baseColumns.signes} max={12} />
          <MobileAccordion title="Planètes" items={baseColumns.planetes} max={10} />
          <MobileAccordion title="Maisons" items={baseColumns.maisons} max={12} />
          <MobileAccordion title="Annexes" items={annexes} max={12} />
          <MobileAccordion title="Derniers articles" items={posts} max={5} />
        </div>

        {/* Desktop 5 columns */}
        <div className="hidden lg:grid gap-10 lg:grid-cols-5">
          <DesktopCol title="Signes" items={baseColumns.signes} max={12} />
          <DesktopCol title="Planètes" items={baseColumns.planetes} max={10} />
          <DesktopCol title="Maisons" items={baseColumns.maisons} max={12} />
          <DesktopCol title="Annexes" items={annexes} max={12} />
          <DesktopCol title="Derniers articles" items={posts} max={5} />
        </div>

        {/* Bottom line */}
        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-400 leading-relaxed">
            © {new Date().getFullYear()} Astro Cours
            <span className="hidden sm:inline mx-3 text-white/15">•</span>
            <a
              href="https://www.stephanegamot.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
             &emsp;-&emsp;Site créé par Stéphane Gamot
            </a>
          </p>

          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-gray-400 hover:text-gray-200 transition"
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
