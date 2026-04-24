import Link from "next/link";

export type BreadcrumbItem = {
  name: string;
  href: string;
};

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  /** Couleur de l'accent pour le chevron et le dernier item */
  accentClass?: string;
}

/**
 * Breadcrumbs visuels accessibles.
 * Complète le JSON-LD BreadcrumbList déjà injecté côté serveur.
 *
 * - WCAG : `<nav aria-label>` + `aria-current="page"` sur le dernier item
 * - SEO  : renforce le maillage interne, cohérent avec le structured data
 */
export default function Breadcrumbs({
  items,
  accentClass = "text-violet-400",
}: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Fil d'Ariane"
      className="mx-auto max-w-7xl px-6 pt-6 pb-2 lg:px-8"
    >
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-300">
        {/* Accueil toujours en premier */}
        <li className="flex items-center gap-1.5">
          <Link
            href="/"
            className="transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b] rounded-sm"
          >
            Accueil
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.href} className="flex items-center gap-1.5">
              {/* Séparateur chevron */}
              <svg
                className={`size-3 shrink-0 ${accentClass} opacity-40`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>

              {isLast ? (
                <span
                  aria-current="page"
                  className={`font-medium ${accentClass}`}
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b] rounded-sm"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
