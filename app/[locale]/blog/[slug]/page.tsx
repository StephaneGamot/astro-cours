import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, postSlugFor } from "@/lib/blog";
import {
  SITE_NAME,
  absoluteUrl,
  buildTitle,
  localeUrl,
  toSeoLocale,
} from "@/lib/seo";
import { localizeBlogSlug } from "@/i18n/blogSlugs";
import { ArticleLayout } from "@/components/blog/ArticleLayout";

type Props = { params: Promise<{ locale: string; slug: string }> };

const OG_LOCALE: Record<string, string> = { fr: "fr_FR", en: "en_US", es: "es_ES" };

export const dynamicParams = false;

export function generateStaticParams({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const loc = toSeoLocale(locale);
  return getAllPosts(loc).map((p) => ({ slug: postSlugFor(p.meta.slug, loc) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const loc = toSeoLocale(locale);
  const post = getPostBySlug(slug, loc);
  if (!post) return {};

  const m = post.meta;
  // Ahrefs SERP rewrite : titre court absolu (bypasse le template " — Astro Cours").
  const seoTitle = (m as unknown as { seoTitle?: string }).seoTitle;
  const canonicalAbs = localeUrl(loc, `/blog/${localizeBlogSlug(m.slug, loc)}`);
  const languages = {
    "fr-FR": localeUrl("fr", `/blog/${localizeBlogSlug(m.slug, "fr")}`),
    "en-US": localeUrl("en", `/blog/${localizeBlogSlug(m.slug, "en")}`),
    "es-ES": localeUrl("es", `/blog/${localizeBlogSlug(m.slug, "es")}`),
    "x-default": localeUrl("fr", `/blog/${localizeBlogSlug(m.slug, "fr")}`),
  };

  const ogImage = m.cover
    ? { url: absoluteUrl(m.cover), width: 1200, height: 630, alt: m.title }
    : { url: absoluteUrl("/og/cover.jpg"), width: 1200, height: 630, alt: buildTitle("Blog") };

  return {
    title: seoTitle ? { absolute: seoTitle } : m.title,
    description: m.description,
    alternates: { canonical: canonicalAbs, languages },
    robots: { index: true, follow: true },
    openGraph: {
      title: m.title,
      description: m.description,
      url: canonicalAbs,
      siteName: SITE_NAME,
      locale: OG_LOCALE[loc],
      type: "article",
      publishedTime: m.date,
      authors: ["Stéphane Gamot"],
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
      images: [ogImage.url],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  const loc = toSeoLocale(locale);
  const post = getPostBySlug(slug, loc);
  if (!post) return notFound();

  const { Component, meta } = post;

  return (
    <ArticleLayout meta={meta}>
      <Component />
    </ArticleLayout>
  );
}
