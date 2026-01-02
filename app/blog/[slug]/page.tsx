import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
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

  return {
    title: `${m.title} — Blog`,
    description: m.description,
    alternates: { canonical: `/blog/${m.slug}` },
    openGraph: {
      title: m.title,
      description: m.description,
      url: `/blog/${m.slug}`,
      type: "article",
      images: m.cover ? [{ url: m.cover }] : undefined,
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
