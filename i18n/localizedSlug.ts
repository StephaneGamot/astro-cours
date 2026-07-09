/**
 * Traduction du SLUG dynamique d'une route lors d'un changement de locale.
 *
 * next-intl traduit le SEGMENT d'URL (/compatibilite → /compatibility) mais PAS
 * la VALEUR du [slug]/[pair]. Sans ce helper, le sélecteur de langue génère des
 * URL non canoniques (ex: /en/compatibility/tauro-cancer au lieu de
 * .../taurus-cancer) qui déclenchent une redirection 308 → Ahrefs « Page has
 * links to redirect ». On traduit donc le slug vers la locale cible AVANT de
 * construire le lien, pour pointer directement sur l'URL canonique.
 *
 * Module PUR (aucun accès fs/serveur) → utilisable côté client.
 */
import { localizeSlug, pillarTypeFromTemplate } from "@/i18n/slugs";
import { localizeBlogSlug } from "@/i18n/blogSlugs";
import { localizeBlogTagSlug } from "@/i18n/blogTagSlugs";
import { canonicalPairFromSlug, pairSlugFor } from "@/lib/compatibility";
import type { SeoLocale } from "@/lib/seo";

type Params = Record<string, string | string[] | undefined>;

function asSeoLocale(target: string): SeoLocale {
  return target === "en" || target === "es" ? target : "fr";
}

/**
 * Renvoie les `params` avec le slug dynamique traduit vers `target`.
 * Pour les routes sans slug traduisible, renvoie les params inchangés.
 *
 * @param template Chemin interne next-intl (ex: "/compatibilite/[pair]", "/signes/[slug]").
 */
export function localizeParamsForLocale(template: string, params: Params, target: string): Params {
  const loc = asSeoLocale(target);

  // Piliers : /signes/[slug], /planetes/[slug], /maisons/[slug]
  const pillar = pillarTypeFromTemplate(template);
  if (pillar && typeof params.slug === "string") {
    return { ...params, slug: localizeSlug(pillar, params.slug, loc) };
  }

  // Compatibilité : /compatibilite/[pair]
  if (template === "/compatibilite/[pair]" && typeof params.pair === "string") {
    const canon = canonicalPairFromSlug(params.pair.toLowerCase());
    if (canon) return { ...params, pair: pairSlugFor(canon[0], canon[1], loc) };
    return params;
  }

  // Blog : /blog/[slug]
  if (template === "/blog/[slug]" && typeof params.slug === "string") {
    return { ...params, slug: localizeBlogSlug(params.slug, loc) };
  }

  // Tags de blog : /blog/tag/[slug]
  if (template === "/blog/tag/[slug]" && typeof params.slug === "string") {
    return { ...params, slug: localizeBlogTagSlug(params.slug, loc) };
  }

  return params;
}
