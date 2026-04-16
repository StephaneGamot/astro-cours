import Link from "next/link";
import maisons from "@/data/maisons.details.json";
import planetes from "@/data/planetes.details.json";
import signes from "@/data/signes.details.json";
import { getAllPosts } from "@/lib/blog";
import type { ComponentType, SVGProps } from "react";

/* ────────────────────────────────────────────────────────────────
   Typages
   ──────────────────────────────────────────────────────────────── */

type FooterItem = { name: string; href: string };
type SvgIcon = ComponentType<SVGProps<SVGSVGElement>>;

/* ────────────────────────────────────────────────────────────────
   Accent tokens — one palette per section, literal strings for purge
   Mirrors the NavBar colour language:
     Signes → violet   Planètes → sky   Maisons → emerald
     Annexes → amber   Blog → rose (new)
   ──────────────────────────────────────────────────────────────── */

type Accent = {
  heading: string;          // section heading colour
  dot: string;              // bullet idle
  dotHover: string;         // bullet on link hover
  linkHover: string;        // link text on hover
  chevron: string;          // mobile chevron idle
  chevronOpen: string;      // mobile chevron when open
  mobileBgOpen: string;     // mobile card tint when open
  divider: string;          // inner divider in mobile panel
};

const ACCENT: Record<string, Accent> = {
  signes: {
    heading: "text-violet-400",
    dot: "bg-violet-500/30",
    dotHover: "group-hover:bg-violet-400",
    linkHover: "group-hover:text-violet-300",
    chevron: "text-violet-400/50",
    chevronOpen: "group-open:text-violet-400",
    mobileBgOpen: "group-open:bg-violet-500/[.05]",
    divider: "border-violet-500/10",
  },
  planetes: {
    heading: "text-sky-400",
    dot: "bg-sky-500/30",
    dotHover: "group-hover:bg-sky-400",
    linkHover: "group-hover:text-sky-300",
    chevron: "text-sky-400/50",
    chevronOpen: "group-open:text-sky-400",
    mobileBgOpen: "group-open:bg-sky-500/[.05]",
    divider: "border-sky-500/10",
  },
  maisons: {
    heading: "text-emerald-400",
    dot: "bg-emerald-500/30",
    dotHover: "group-hover:bg-emerald-400",
    linkHover: "group-hover:text-emerald-300",
    chevron: "text-emerald-400/50",
    chevronOpen: "group-open:text-emerald-400",
    mobileBgOpen: "group-open:bg-emerald-500/[.05]",
    divider: "border-emerald-500/10",
  },
  annexes: {
    heading: "text-amber-400",
    dot: "bg-amber-500/30",
    dotHover: "group-hover:bg-amber-400",
    linkHover: "group-hover:text-amber-300",
    chevron: "text-amber-400/50",
    chevronOpen: "group-open:text-amber-400",
    mobileBgOpen: "group-open:bg-amber-500/[.05]",
    divider: "border-amber-500/10",
  },
  blog: {
    heading: "text-rose-400",
    dot: "bg-rose-500/30",
    dotHover: "group-hover:bg-rose-400",
    linkHover: "group-hover:text-rose-300",
    chevron: "text-rose-400/50",
    chevronOpen: "group-open:text-rose-400",
    mobileBgOpen: "group-open:bg-rose-500/[.05]",
    divider: "border-rose-500/10",
  },
};

/* ────────────────────────────────────────────────────────────────
   Inline SVG icons — avoids shipping lucide-react JS to the client
   since the Footer is a pure Server Component.
   ──────────────────────────────────────────────────────────────── */

const IconStar: SvgIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}
    strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
  </svg>
);

const IconSparkles: SvgIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}
    strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" />
  </svg>
);

const IconCompass: SvgIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}
    strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

const IconLibrary: SvgIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}
    strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m16 6 4 14" /><path d="M12 6v14" /><path d="M8 8v12" /><path d="M4 4v16" />
  </svg>
);

const IconPen: SvgIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}
    strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
  </svg>
);

const IconBookOpen: SvgIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}
    strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const IconChevronDown: SvgIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
    strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const IconExternal: SvgIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}
    strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const SECTION_ICON: Record<string, SvgIcon> = {
  signes: IconStar,
  planetes: IconSparkles,
  maisons: IconCompass,
  annexes: IconLibrary,
  blog: IconPen,
};

/* ────────────────────────────────────────────────────────────────
   Data
   ──────────────────────────────────────────────────────────────── */

type RawItem = { slug: string; nom?: string; name?: string };

const NAV_COLUMNS: Record<string, { title: string; mobileTitle: string; items: FooterItem[] }> = {
  signes: {
    title: "Signes",
    mobileTitle: "Signes du Zodiaque",
  items: (signes as RawItem[])
  .filter(s => s.slug && s.slug !== "index") // <-- Ajout de cette sécurité
  .map((s) => ({
    name: s.nom ?? s.name ?? s.slug,
    href: `/signes/${s.slug}`,
  })),
  },
  planetes: {
    title: "Planètes",
    mobileTitle: "Planètes & Astres",
    items: (planetes as RawItem[]).map((p) => ({
      name: p.nom ?? p.name ?? p.slug,
      href: `/planetes/${p.slug}`,
    })),
  },
  maisons: {
    title: "Maisons",
    mobileTitle: "Maisons Astrologiques",
    items: (maisons as RawItem[]).map((m) => ({
      name: m.nom ?? m.name ?? m.slug,
      href: `/maisons/${m.slug}`,
    })),
  },
};

const ANNEXES: FooterItem[] = [
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

const LEGAL: FooterItem[] = [
  { name: "Mentions légales", href: "/mentions-legales" },
  { name: "Confidentialité", href: "/confidentialite" },
  { name: "Sitemap", href: "/sitemap.xml" },
    { name: "A propos", href: "/a-propos" },
];

/* ────────────────────────────────────────────────────────────────
   Sub-components
   ──────────────────────────────────────────────────────────────── */

/** Individual link with accent-coloured bullet that widens on hover */
function FooterLink({ item, accent: a }: { item: FooterItem; accent: Accent }) {
  return (
    <li>
      <Link
        href={item.href}
        className={[
          "group flex items-center gap-2.5 rounded-lg py-1.5 text-[14px] leading-relaxed",
          "text-slate-400 transition-colors duration-200 motion-reduce:transition-none",
          a.linkHover,
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400",
          "focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]",
        ].join(" ")}
      >
        <span
          aria-hidden="true"
          className={[
            "h-1 w-1 shrink-0 rounded-full transition-all duration-200 motion-reduce:transition-none",
            a.dot,
            "group-hover:w-2.5",
            a.dotHover,
          ].join(" ")}
        />
        <span>{item.name}</span>
      </Link>
    </li>
  );
}

/** Desktop column — accent icon + coloured heading + link list */
function DesktopCol({
  sectionKey,
  items,
  max = 20,
}: {
  sectionKey: string;
  items: FooterItem[];
  max?: number;
}) {
  const a = ACCENT[sectionKey];
  const Icon = SECTION_ICON[sectionKey];
  const title =
    sectionKey === "annexes"
      ? "Annexes"
      : sectionKey === "blog"
        ? "Blog"
        : NAV_COLUMNS[sectionKey]?.title ?? sectionKey;

  return (
    <nav aria-label={`Navigation ${title}`} className="hidden lg:block">
      <h3 className="mb-5 flex items-center gap-2.5 border-b border-white/[.05] pb-3">
        {Icon && <Icon className={`size-4 ${a.heading}`} aria-hidden="true" />}
        <span className={`text-xs font-bold uppercase tracking-[.16em] ${a.heading}`}>
          {title}
        </span>
      </h3>
      <ul role="list" className="space-y-0.5">
        {items.slice(0, max).map((item) => (
          <FooterLink key={item.href} item={item} accent={a} />
        ))}
      </ul>
    </nav>
  );
}

/**
 * Mobile accordion — native <details> with CSS grid-rows trick
 * for smooth height animation. Zero JS, works without hydration.
 *
 * The grid-rows technique:
 *   grid-rows-[0fr] → content collapsed (overflow-hidden clips it)
 *   group-open:grid-rows-[1fr] → content revealed, smoothly animated
 */
function MobileAccordion({
  sectionKey,
  title,
  items,
  max = 20,
}: {
  sectionKey: string;
  title: string;
  items: FooterItem[];
  max?: number;
}) {
  const a = ACCENT[sectionKey];
  const Icon = SECTION_ICON[sectionKey];

  return (
    <details
      className={[
        "group rounded-2xl border border-white/[.05] transition-colors duration-300",
        "motion-reduce:transition-none lg:hidden",
        a.mobileBgOpen,
      ].join(" ")}
    >
      <summary
        className={[
          "flex cursor-pointer list-none select-none items-center justify-between gap-4",
          "px-5 py-4 rounded-2xl",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400",
          "focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]",
        ].join(" ")}
      >
        <span className="flex items-center gap-3">
          {Icon && (
            <Icon
              className={`size-4 text-slate-500 transition-colors duration-200 ${a.chevronOpen}`}
              aria-hidden="true"
            />
          )}
          <span className="text-[15px] font-semibold tracking-wide text-slate-200">
            {title}
          </span>
        </span>
        <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-white/[.04] transition-colors duration-200 group-open:bg-white/[.06]">
          <IconChevronDown
            className={[
              "size-3.5 transition-transform duration-200 motion-reduce:transition-none",
              "group-open:rotate-180",
              a.chevron,
              a.chevronOpen,
            ].join(" ")}
            aria-hidden="true"
          />
        </span>
      </summary>

      {/* Smooth height animation via CSS grid */}
      <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none group-open:grid-rows-[1fr]">
        <div className="overflow-hidden">
          <ul
            role="list"
            className={`mx-4 space-y-0.5 border-t pb-5 pt-3 ${a.divider}`}
          >
            {items.slice(0, max).map((item) => (
              <FooterLink key={item.href} item={item} accent={a} />
            ))}
          </ul>
        </div>
      </div>
    </details>
  );
}

/* ════════════════════════════════════════════════════════════════
   Footer — pure Server Component, zero client JS
   ════════════════════════════════════════════════════════════════ */

export default function Footer() {
  const posts = getAllPosts()
    .sort((a, b) => +new Date(b.meta.date) - +new Date(a.meta.date))
    .slice(0, 5)
    .map((p) => ({ name: p.meta.title, href: `/blog/${p.meta.slug}` }));

  const mobileSections = [
    { key: "signes",   title: "Signes du Zodiaque",    items: NAV_COLUMNS.signes.items },
    { key: "planetes", title: "Planètes & Astres",     items: NAV_COLUMNS.planetes.items },
    { key: "maisons",  title: "Maisons Astrologiques",  items: NAV_COLUMNS.maisons.items },
    { key: "annexes",  title: "Annexes",                items: ANNEXES },
    { key: "blog",     title: "Derniers Articles",      items: posts, max: 5 },
  ];

  return (
    <footer
      className="relative mt-24 overflow-hidden border-t border-white/[.06] bg-[#09090b]"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Pied de page et navigation secondaire
      </h2>

      {/* ── Gradient accent line (mirrors NavBar) ─────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent"
      />

      {/* ── Ambient glows ─────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/4 h-72 w-[32rem] rounded-full bg-violet-600/[.06] blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-[8%] h-64 w-80 rounded-full bg-sky-600/[.05] blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-20 sm:px-6 lg:px-8">

        {/* ────────── Branding + CTA ────────── */}
        <div className="mb-16 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">

          {/* Logo & tagline */}
          <div className="space-y-6 lg:col-span-4">
            <Link
              href="/"
              className="group inline-flex items-center gap-3.5 rounded-xl p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]"
              aria-label="Astro Cours — Accueil"
            >
              <span className="flex size-12 items-center justify-center rounded-xl border border-white/[.08] bg-white/[.02] shadow-lg transition-all duration-300 motion-reduce:transition-none group-hover:scale-105 group-hover:border-violet-500/20 group-hover:bg-violet-500/10">
                <IconSparkles className="size-6 text-violet-400" aria-hidden="true" />
              </span>
              <span className="font-serif text-2xl tracking-tight text-white sm:text-3xl">
                Astro Cours
              </span>
            </Link>

            <p className="max-w-sm text-[15px] leading-relaxed text-slate-400">
              Explorez les profondeurs du ciel avec des cours d'astrologie
              clairs, modernes et structurés pour les passionnés et les
              chercheurs.
            </p>
          </div>

          {/* CTA card — glass morphism */}
          <div className="flex items-center lg:col-span-8">
            <div className="relative w-full overflow-hidden rounded-2xl border border-white/[.07] bg-gradient-to-br from-white/[.03] to-transparent p-6 backdrop-blur-md transition-all duration-500 motion-reduce:transition-none hover:border-violet-500/20 hover:shadow-[0_0_48px_-12px_rgba(139,92,246,.12)] sm:p-8">
              {/* Decorative orb */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 size-36 rounded-full bg-violet-500/[.07] blur-3xl"
              />

              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-1.5">
                  <p className="font-serif text-xl tracking-tight text-white sm:text-2xl">
                    Soif de savoirs stellaires ?
                  </p>
                  <p className="text-sm italic text-slate-400">
                    Explorez notre bibliothèque ou reprenez les bases.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/blog"
                    className={[
                      "inline-flex items-center gap-2 rounded-full border border-white/[.08] bg-white/[.03]",
                      "px-5 py-2.5 text-sm font-medium text-slate-200",
                      "transition-all duration-200 hover:border-white/[.14] hover:bg-white/[.07] hover:text-white",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400",
                      "focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]",
                    ].join(" ")}
                  >
                    <IconBookOpen className="size-4 text-slate-400" aria-hidden="true" />
                    Le Blog
                  </Link>
                  <Link
                    href="/#zodiaque"
                    className={[
                      "inline-flex items-center gap-2 rounded-full bg-[#8F5BF7] px-5 py-2.5",
                      "text-sm font-semibold !text-black shadow-lg shadow-violet-950/30",
                      "transition-all duration-200 hover:bg-violet-500 hover:shadow-violet-900/30",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400",
                      "focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]",
                    ].join(" ")}
                  >
                    <IconCompass className="size-4" aria-hidden="true" />
                    Explorer le Zodiaque
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ────────── Mobile accordions ────────── */}
        <nav
          aria-label="Navigation secondaire mobile"
          className="mb-14 grid gap-2.5 lg:hidden"
        >
          {mobileSections.map((s) => (
            <MobileAccordion
              key={s.key}
              sectionKey={s.key}
              title={s.title}
              items={s.items}
              max={s.max}
            />
          ))}
        </nav>

        {/* ────────── Desktop columns ────────── */}
        <div className="hidden gap-10 border-y border-white/[.05] py-14 lg:grid lg:grid-cols-5">
          <DesktopCol sectionKey="signes"   items={NAV_COLUMNS.signes.items}   max={12} />
          <DesktopCol sectionKey="planetes" items={NAV_COLUMNS.planetes.items} max={12} />
          <DesktopCol sectionKey="maisons"  items={NAV_COLUMNS.maisons.items}  max={12} />
          <DesktopCol sectionKey="annexes"  items={ANNEXES} />
          <DesktopCol sectionKey="blog"     items={posts} max={5} />
        </div>

        {/* ────────── Legal bar ────────── */}
        <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} Astro Cours — Sagesse Céleste.
              Tous droits réservés.
            </p>
            <address className="not-italic">
              <a
                href="https://www.creation-site-internet-pays-basque.com/fr"
                target="_blank"
                rel="noopener noreferrer"
                className={[
                  "group inline-flex items-center gap-1.5 rounded-md text-sm text-slate-400",
                  "transition-colors duration-200 hover:text-violet-300",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400",
                  "focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]",
                ].join(" ")}
              >
                Architecture &amp; Code par Stéphane Gamot
                <IconExternal
                  className="size-3 text-slate-500 transition-colors duration-200 group-hover:text-violet-400"
                  aria-hidden="true"
                />
              </a>
            </address>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Liens légaux">
            {LEGAL.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "rounded-sm text-sm text-slate-400 underline-offset-4",
                  "transition-colors duration-200 hover:text-white hover:underline",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400",
                  "focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]",
                ].join(" ")}
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