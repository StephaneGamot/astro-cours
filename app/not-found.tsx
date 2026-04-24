import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page introuvable — Erreur 404, découvrez nos cours",
  description:
    "La page que vous cherchez n'existe pas ou a été déplacée. Retrouvez nos cours d'astrologie : signes, planètes, maisons et aspects. Explorez le site !",
  robots: { index: false, follow: true },
  openGraph: {
    title: "Page introuvable — Erreur 404",
    description:
      "La page que vous cherchez n'existe pas ou a été déplacée. Retrouvez nos cours d'astrologie : signes, planètes, maisons et aspects.",
    url: "https://www.astro-cours.com",
    type: "website",
    siteName: "Astro Cours",
    locale: "fr_FR",
    images: [{ url: "https://www.astro-cours.com/og/cover.jpg", width: 1200, height: 630, alt: "Astro Cours" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Page introuvable — Erreur 404",
    description:
      "La page que vous cherchez n'existe pas ou a été déplacée. Retrouvez nos cours d'astrologie : signes, planètes, maisons et aspects.",
    images: ["https://www.astro-cours.com/og/cover.jpg"],
  },
};

/** Inline sparkle — Server Component, zero JS */
function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  );
}

const SECTIONS = [
  {
    title: "Les 12 Signes",
    href: "/#zodiaque",
    description: "Bélier, Taureau, Gémeaux et les 9 autres",
    color: "text-violet-400",
    border: "border-violet-500/20 hover:border-violet-500/40",
    bg: "hover:bg-violet-500/5",
  },
  {
    title: "Les Planètes",
    href: "/#planetes",
    description: "Soleil, Lune, Mercure, Vénus, Mars…",
    color: "text-sky-400",
    border: "border-sky-500/20 hover:border-sky-500/40",
    bg: "hover:bg-sky-500/5",
  },
  {
    title: "Les 12 Maisons",
    href: "/#maisons",
    description: "Les secteurs de votre thème astral",
    color: "text-emerald-400",
    border: "border-emerald-500/20 hover:border-emerald-500/40",
    bg: "hover:bg-emerald-500/5",
  },
  {
    title: "Le Blog",
    href: "/blog",
    description: "Articles, guides et analyses astrologiques",
    color: "text-rose-400",
    border: "border-rose-500/20 hover:border-rose-500/40",
    bg: "hover:bg-rose-500/5",
  },
  {
    title: "Dictionnaire",
    href: "/dictionnaire-astrologique",
    description: "Tous les termes astrologiques expliqués",
    color: "text-amber-400",
    border: "border-amber-500/20 hover:border-amber-500/40",
    bg: "hover:bg-amber-500/5",
  },
];

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="relative mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 py-20 text-center"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[.06] blur-[160px]"
      />

      {/* Icon */}
      <div className="relative mb-8">
        <SparkleIcon className="mx-auto size-12 text-violet-400/60" />
        <div
          aria-hidden="true"
          className="absolute inset-0 animate-ping"
          style={{ animationDuration: "3s" }}
        >
          <SparkleIcon className="mx-auto size-12 text-violet-400/20" />
        </div>
      </div>

      {/* Heading */}
      <p className="mb-3 text-sm font-bold uppercase tracking-[.25em] text-violet-400/70">
        Erreur 404
      </p>
      <h1 className="mb-4 font-serif text-4xl text-white md:text-5xl">
        Page introuvable sur Astro Cours
      </h1>
      <p className="mb-12 max-w-md text-lg leading-relaxed text-slate-400">
        Cette page n'existe pas ou a été déplacée. Mais l'univers a sûrement
        prévu autre chose pour vous.
      </p>

      {/* CTA principal */}
      <Link
        href="/"
        className="mb-14 inline-flex items-center gap-2 rounded-full bg-violet-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-950/30 transition-all duration-200 hover:bg-violet-500 hover:shadow-violet-900/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]"
      >
        Retour à l'accueil
      </Link>

      {/* Maillage interne — sections du site */}
      <div className="w-full">
        <p className="mb-5 text-xs font-bold uppercase tracking-[.2em] text-slate-500">
          Explorer le site
        </p>
        <nav aria-label="Sections principales du site">
          <ul className="grid gap-3 sm:grid-cols-2">
            {SECTIONS.map((section) => (
              <li key={section.href}>
                <Link
                  href={section.href}
                  className={`group flex flex-col rounded-xl border p-5 text-left transition-all duration-200 ${section.border} ${section.bg} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]`}
                >
                  <span
                    className={`text-sm font-semibold ${section.color} transition-colors`}
                  >
                    {section.title}
                  </span>
                  <span className="mt-1 text-sm text-slate-400">
                    {section.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  );
}
