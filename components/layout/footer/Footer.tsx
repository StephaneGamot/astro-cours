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


function Section({
  title,
  items,
  max = 8,
}: {
  title: string;
  items: Array<{ name: string; href: string }>;
  max?: number;
}) {
  return (
    <div>
      <h3 className="text-sm/6 font-semibold text-white">{title}</h3>
      <ul role="list" className="mt-6 space-y-3">
        {items.slice(0, max).map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-sm/6 text-gray-400 hover:text-gray-200 transition"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      {items.length > max ? (
        <div className="mt-4">
          <Link
            href={
              items[0].href.split("/")[1]
                ? `/${items[0].href.split("/")[1]}`
                : "/"
            }
            className="text-xs text-gray-400 hover:text-gray-200 underline underline-offset-4"
          >
            Voir tout →
          </Link>
        </div>
      ) : null}
    </div>
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
    <footer className="bg-gray-900 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        {/* Mini CTA */}
    

        {/* 5 colonnes */}
        <div className="grid gap-10 lg:grid-cols-5">
          <Section title="Signes" items={baseColumns.signes} max={12} />
          <Section title="Planètes" items={baseColumns.planetes} max={10} />
          <Section title="Maisons" items={baseColumns.maisons} max={12} />
          <Section title="Annexes" items={annexes} max={12} />
          <Section title="Derniers articles" items={posts} max={12} />
        </div>

        {/* Ligne basse */}
<div className="mt-12 border-t border-white/10 pt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
  <p className="text-xs leading-relaxed text-gray-400">
    © {new Date().getFullYear()} Astro Cours{" "}
    <span className="hidden sm:inline mx-3 text-white/15">|</span>
    <a
      href="https://www.stephanegamot.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-white transition"
    >
      Créé par Stéphane Gamot
    </a>
  </p>

  <nav className="flex flex-wrap gap-x-5 gap-y-2 sm:justify-end">
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
