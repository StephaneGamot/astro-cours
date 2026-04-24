import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { SITE_NAME, absoluteUrl, buildTitle } from "@/lib/seo";
import { ArticleLayout } from "@/components/blog/ArticleLayout";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.meta.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const m = post.meta;
  const canonical = `/blog/${m.slug}`;
  const ogImage = m.cover
    ? {
        url: absoluteUrl(m.cover),
        width: 1200,
        height: 630,
        alt: m.title,
      }
    : {
        url: absoluteUrl("/og/cover.jpg"),
        width: 1200,
        height: 630,
        alt: buildTitle("Blog"),
      };

  return {
    title: buildTitle(m.title),
    description: m.description,
    alternates: { canonical: absoluteUrl(canonical) },
    robots: { index: true, follow: true },

    openGraph: {
      title: m.title,
      description: m.description,
      url: absoluteUrl(canonical),
      siteName: SITE_NAME,
      locale: "fr_FR",
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
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  const { Component, meta } = post;

  return (
    <ArticleLayout meta={meta}>
      <Component />
    </ArticleLayout>
  );
}
