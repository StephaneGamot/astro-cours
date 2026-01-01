import type { Metadata } from "next";
import { getAllPosts, getAllTags } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Cours d’astrologie",
  description:
    "Articles clairs et structurés : aspects, planètes, transits, points fictifs, méthodes d’interprétation.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — Cours d’astrologie",
    description:
      "Aspects, planètes, transits et méthode : un blog de cours astro clair et progressif.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
        <p className="text-text/80 max-w-2xl">
          Des cours “lisibles”, pensés pour apprendre vite : définitions, exemples,
          pièges classiques, et méthode d’interprétation.
        </p>
      </header>

      {tags.length ? (
        <section className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <Link
              key={t}
              href={`/tags/${encodeURIComponent(t)}`}
              className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-text/90 hover:bg-white/10"
            >
              #{t}
            </Link>
          ))}
        </section>
      ) : null}

      <section className="grid gap-6 md:grid-cols-2">
        {posts.map((p) => (
          <BlogCard key={p.slug} post={p} />
        ))}
      </section>
    </main>
  );
}
