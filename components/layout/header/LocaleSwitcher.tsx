"use client";

import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { Link, usePathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

/**
 * Sélecteur de langue.
 *
 * `usePathname()` (next-intl, avec pathnames) renvoie le chemin INTERNE, qui
 * pour une route dynamique est le TEMPLATE (ex: "/blog/[slug]"). On le remplit
 * avec les params concrets (useParams) AVANT de le passer au Link, sinon
 * next/link rejette un href dynamique.
 */
const SHORT: Record<Locale, string> = { fr: "FR", en: "EN", es: "ES" };

function fillTemplate(
  template: string,
  params: Record<string, string | string[] | undefined>,
): string {
  return template.replace(/\[(?:\.\.\.)?([^\]]+)\]/g, (_, key: string) => {
    const v = params[key];
    return Array.isArray(v) ? v.join("/") : (v ?? "");
  });
}

export default function LocaleSwitcher({
  className = "",
}: {
  className?: string;
}) {
  const pathname = usePathname();
  const params = useParams();
  const concrete = fillTemplate(pathname, params as Record<string, string | string[] | undefined>);
  const active = useLocale();
  const t = useTranslations("localeSwitcher");

  return (
    <nav
      aria-label={t("label")}
      className={`flex items-center gap-0.5 rounded-lg border border-white/[.08] bg-white/[.02] p-0.5 ${className}`}
    >
      {routing.locales.map((loc) => {
        const isActive = loc === active;
        return (
          <Link
            key={loc}
            href={concrete}
            locale={loc}
            hrefLang={loc}
            aria-current={isActive ? "true" : undefined}
            className={`rounded-md px-2 py-1 text-xs font-semibold uppercase tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 ${
              isActive
                ? "bg-violet-500/15 text-violet-300"
                : "text-slate-400 hover:bg-white/[.05] hover:text-white"
            }`}
          >
            {SHORT[loc]}
          </Link>
        );
      })}
    </nav>
  );
}
