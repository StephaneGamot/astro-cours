import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { TagPills } from "@/components/blog/TagPills";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  const { title, description, cover } = post.frontmatter;

  return {
    title: `${title} — Blog`,
    description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title,
      description,
      url: `/blog/${post.slug}`,
      type: "article",
      images: cover ? [{ url: cover }] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  const MDXContent = (await import(`@/content/blog/${post.slug}.mdx`)).default;

  const { title, date, tags, readingLevel } = post.frontmatter;

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-text/70">
          <time dateTime={date}>
            {new Date(date).toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            })}
          </time>
          {readingLevel ? <span>• Niveau : {readingLevel}</span> : null}
          <span>• {post.stats.minutes} min</span>
        </div>

        <TagPills tags={tags} />
      </header>

      <article className="prose prose-invert max-w-none">
        <MDXContent />
      </article>
    </main>
  );
}
