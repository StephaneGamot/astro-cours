import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import {
  getAllTags,
  getPostsByTagSlug,
  slugToTag,
  tagLabel,
  getTagPageConfig,
  isIndexableTag,
} from "@/lib/blog";
import { tagToSlug } from "@/lib/blog";
import { localizeBlogTagSlug } from "@/i18n/blogTagSlugs";
import { BlogCard } from "@/components/blog/BlogCard";
import {
  SITE_NAME,
  PUBLISHER_ORG,
  absoluteUrl,
  buildTitle,
  localeUrl,
  toSeoLocale,
} from "@/lib/seo";

type Props = { params: Promise<{ locale: string; slug: string }> };

const OG_LOCALE: Record<string, string> = { fr: "fr_FR", en: "en_US", es: "es_ES" };

export const dynamicParams = false;

export function generateStaticParams({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const loc = toSeoLocale(locale);
  return getAllTags(loc).map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const loc = toSeoLocale(locale);
  const canon = slugToTag(slug, loc);
  if (!canon) return {};

  const t = await getTranslations({ locale: loc, namespace: "blog" });
  const cfg = getTagPageConfig(slug, loc);
  const indexable = isIndexableTag(slug, loc);
  const label = tagLabel(canon, loc);
  const selfAbs = localeUrl(loc, `/blog/tag/${slug}`);

  const title = cfg?.copy.title ?? t("tagFallbackTitle", { tag: label });
  const description = cfg?.copy.description ?? t("tagFallbackDesc", { tag: label });

  // hreflang : slug du tag localisé pour chaque langue (depuis le slug FR canonique).
  const frSlug = tagToSlug(canon);
  const languages = {
    "fr-FR": localeUrl("fr", `/blog/tag/${localizeBlogTagSlug(frSlug, "fr")}`),
    "en-US": localeUrl("en", `/blog/tag/${localizeBlogTagSlug(frSlug, "en")}`),
    "es-ES": localeUrl("es", `/blog/tag/${localizeBlogTagSlug(frSlug, "es")}`),
    "x-default": localeUrl("fr", `/blog/tag/${localizeBlogTagSlug(frSlug, "fr")}`),
  };

  return {
    title,
    description,
    alternates: { canonical: selfAbs, languages },
    robots: indexable
      ? { index: true, follow: true }
      : { index: false, follow: true, googleBot: { index: false, follow: true } },
    openGraph: {
      title: buildTitle(title),
      description,
      url: selfAbs,
      type: "website",
      siteName: SITE_NAME,
      locale: OG_LOCALE[loc],
      images: [{ url: absoluteUrl("/og/cover.jpg"), width: 1200, height: 630, alt: "Astro Cours" }],
    },
    twitter: {
      card: "summary_large_image",
      title: buildTitle(title),
      description,
      images: [absoluteUrl("/og/cover.jpg")],
    },
  };
}

export default async function BlogTagPage({ params }: Props) {
  const { locale, slug } = await params;
  const loc = toSeoLocale(locale);
  const canon = slugToTag(slug, loc);
  if (!canon) return notFound();

  const t = await getTranslations({ locale: loc, namespace: "blog" });
  const cfg = getTagPageConfig(slug, loc);
  const posts = getPostsByTagSlug(slug, loc);
  const label = tagLabel(canon, loc);
  const h1 = cfg?.copy.h1 ?? label;
  const intro = cfg?.copy.intro ?? t("tagFallbackIntro", { tag: label });
  const selfAbs = localeUrl(loc, `/blog/tag/${slug}`);

  return (
    <main id="main-content" className="mx-auto max-w-6xl px-4 py-10 space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: cfg?.copy.title ?? t("tagFallbackTitle", { tag: label }),
            description: intro,
            url: selfAbs,
            inLanguage: loc,
            isPartOf: { "@type": "WebSite", name: SITE_NAME, url: localeUrl(loc, "/") },
            publisher: PUBLISHER_ORG,
          }),
        }}
      />

      <nav aria-label="breadcrumb" className="text-sm text-text/60">
        <Link href="/blog" className="hover:text-text hover:underline underline-offset-4">
          {t("tagBreadcrumb")}
        </Link>
        <span className="mx-2 opacity-50">/</span>
        <span className="text-text/80">{h1}</span>
      </nav>

      <header className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-7 shadow-soft">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
        <div className="relative">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">{h1}</h1>
          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">{intro}</p>
          <div className="mt-4 flex flex-wrap gap-2 text-sm text-text/70">
            <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1">
              {t("count", { count: posts.length })}
            </span>
            <Link
              href="/blog"
              className="rounded-full border border-white/10 bg-black/20 px-3 py-1 hover:bg-white/10"
            >
              {t("backAll")}
            </Link>
          </div>
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {posts.map((p) => (
          <BlogCard key={p.meta.slug} meta={p.meta} />
        ))}
      </section>

      {posts.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-black/20 p-6 text-text/80">
          {t("empty")}
        </div>
      ) : null}
    </main>
  );
}
