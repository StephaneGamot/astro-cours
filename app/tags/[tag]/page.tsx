import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";

type Props = { params: { tag: string } };

export function generateStaticParams() {
  const posts = getAllPosts();
  const set = new Set<string>();
  posts.forEach((p) => (p.frontmatter.tags ?? []).forEach((t) => set.add(t)));
  return Array.from(set).map((tag) => ({ tag }));
}

export function generateMetadata({ params }: Props): Metadata {
  const tag = decodeURIComponent(params.tag);
  return {
    title: `Tag #${tag} — Blog`,
    description: `Tous les articles du blog liés au tag "${tag}".`,
    alternates: { canonical: `/tags/${encodeURIComponent(tag)}` },
  };
}

export default function TagPage({ params }: Props) {
  const tag = decodeURIComponent(params.tag);
  const posts = getAllPosts().filter((p) => (p.frontmatter.tags ?? []).includes(tag));

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-8">
      <header className="space-y-2">
        <p className="text-text/70">
          <Link href="/blog" className="hover:underline">← Retour au blog</Link>
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">#{tag}</h1>
        <p className="text-text/80">{posts.length} article(s)</p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {posts.map((p) => (
          <BlogCard key={p.slug} post={p} />
        ))}
      </section>
    </main>
  );
}
