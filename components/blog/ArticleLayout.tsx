import { getLocale, getTranslations } from "next-intl/server";
import { TagPills } from "./TagPills";
// ShareBar supprimé — pas de partage social sur le site.
import { AuthorBox } from "./AuthorBox";
import { RelatedPosts } from "./RelatedPosts";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  AUTHOR_PERSON,
  PUBLISHER_ORG,
  localeUrl,
  toSeoLocale,
  absoluteUrl,
} from "@/lib/seo";
import { postSlugFor } from "@/lib/blog";

type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updatedAt?: string;
  tags?: string[];
  cover?: string;
  readingLevel?: "débutant" | "intermédiaire" | "avancé";
};

function formatDate(dateStr: string | undefined, locale: string) {
  if (!dateStr) return null;
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return null;
  return d.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
}

function toIsoDate(dateStr: string): string {
  if (/T\d{2}:\d{2}/.test(dateStr)) return dateStr;
  return `${dateStr}T12:00:00Z`;
}

const ARTICLE_SECTION: Record<string, string> = {
  fr: "Astrologie",
  en: "Astrology",
  es: "Astrología",
};
const HOME_NAME: Record<string, string> = { fr: "Accueil", en: "Home", es: "Inicio" };

export async function ArticleLayout({
  meta,
  children,
}: {
  meta: PostMeta;
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const loc = toSeoLocale(locale);
  const t = await getTranslations({ locale: loc, namespace: "blog" });
  const prettyDate = formatDate(meta.date, loc);
  const localizedSlug = postSlugFor(meta.slug, loc);
  const canonical = localeUrl(loc, `/blog/${localizedSlug}`);

  /* ── JSON-LD Article (E-E-A-T complet) ────────────────── */
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    url: canonical,
    datePublished: toIsoDate(meta.date),
    dateModified: toIsoDate(meta.updatedAt ?? meta.date),
    inLanguage: loc,
    author: AUTHOR_PERSON,
    publisher: PUBLISHER_ORG,
    articleSection: ARTICLE_SECTION[loc],
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    ...(meta.cover
      ? { image: [absoluteUrl(meta.cover)] }
      : {}),
  };

  /* ── JSON-LD BreadcrumbList ────────────────────────────── */
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: HOME_NAME[loc], item: localeUrl(loc, "/") },
      { "@type": "ListItem", position: 2, name: t("tagBreadcrumb"), item: localeUrl(loc, "/blog") },
      { "@type": "ListItem", position: 3, name: meta.title },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main id="main-content" className="mx-auto max-w-6xl px-4 py-10 space-y-8">
        <Breadcrumbs
          items={[
            { name: t("tagBreadcrumb"), href: "/blog" },
            { name: meta.title, href: `/blog/${localizedSlug}` },
          ]}
          accentClass="text-rose-400"
        />

        <article>
          <header className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
              {meta.title}
            </h1>

            <p className="max-w-2xl text-text/80 leading-relaxed">
              {meta.description}
            </p>

            <div className="flex flex-wrap items-center gap-2 text-sm text-text/70">
              {prettyDate ? (
                <time
                  dateTime={meta.date}
                  className="rounded-full border border-white/10 bg-black/20 px-3 py-1"
                >
                  {prettyDate}
                </time>
              ) : null}

              {meta.readingLevel ? (
                <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1">
                  {t("author.niveau")} : {t(`level.${meta.readingLevel}`)}
                </span>
              ) : null}
            </div>

            <TagPills tags={meta.tags} />
          </header>

          <div className="prose">{children}</div>

          <AuthorBox />

          <RelatedPosts currentSlug={meta.slug} />
        </article>
      </main>
    </>
  );
}
