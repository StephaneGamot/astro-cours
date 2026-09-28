"use client";

import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { Link, usePathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { localizeParamsForLocale } from "@/i18n/localizedSlug";

/**
 * Sélecteur de langue.
 *
 * `usePathname()` (next-intl, avec pathnames) renvoie le chemin INTERNE, qui
 * pour une route dynamique est le TEMPLATE (ex: "/blog/[slug]"). On le remplit
 * avec les params concrets (useParams) AVANT de le passer au Link, sinon
 * next/link rejette un href dynamique.
 */
const SHORT: Record<Locale, string> = { fr: "FR", en: "EN", es: "ES" };

/**
 * Au rendu SERVEUR des pages prérendues dont le segment est traduit (constaté
 * sur /en/compatibility/[pair] et /es/compatibilidad/[pair], 09/2026),
 * usePathname() ne renvoie pas le template « /compatibilite/[pair] » mais le
 * chemin interne déjà rempli (« /compatibilite/taurus-cancer ») : next-intl ne
 * reconnaît pas ce chemin dans la locale courante. Le slug n'était alors pas
 * traduit dans le HTML servi à Google → liens FR/ES vers des URL en 308.
 * Le rendu client (après navigation) était, lui, correct.
 *
 * On reconstitue le template interne à partir des params dynamiques.
 */
function resolveTemplate(
  pathname: string,
  params: Record<string, string | string[] | undefined>,
): string {
  if (pathname.includes("[")) return pathname;
  for (const [key, value] of Object.entries(params)) {
    if (key === "locale" || typeof value !== "string") continue;
    const suffix = `/${value}`;
    if (!pathname.endsWith(suffix)) continue;
    const base = pathname.slice(0, -suffix.length);
    for (const [internal, localized] of Object.entries(routing.pathnames)) {
      if (!internal.endsWith(`/[${key}]`)) continue;
      const candidates = [internal, ...(typeof localized === "string" ? [localized] : Object.values(localized))];
      if (candidates.includes(`${base}/[${key}]`)) return internal;
    }
  }
  return pathname;
}

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
  const params = useParams() as Record<string, string | string[] | undefined>;
  const pathname = resolveTemplate(usePathname(), params);
  const active = useLocale();
  const t = useTranslations("localeSwitcher");

  return (
    <nav
      aria-label={t("label")}
      className={`flex items-center gap-0.5 rounded-lg border border-white/[.08] bg-white/[.02] p-0.5 ${className}`}
    >
      {routing.locales.map((loc) => {
        const isActive = loc === active;
        // Traduit le slug dynamique vers la locale cible → URL canonique
        // directe (évite les redirections 308 « links to redirect »).
        const href = fillTemplate(pathname, localizeParamsForLocale(pathname, params, loc));
        return (
          <Link
            key={loc}
            href={href}
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
