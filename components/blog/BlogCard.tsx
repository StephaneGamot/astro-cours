import Link from "next/link";
import Image from "next/image";
import { TagPills } from "./TagPills";
import type { BlogPost } from "@/lib/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  const { slug, frontmatter, stats } = post;

  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-black/20 hover:bg-white/5 transition">
      {frontmatter.cover ? (
        <div className="relative h-48 w-full">
          <Image
            src={frontmatter.cover}
            alt={frontmatter.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
          />
        </div>
      ) : null}

      <div className="p-5 space-y-3">
        <div className="flex items-center justify-between gap-3 text-sm text-text/70">
          <time dateTime={frontmatter.date}>
            {new Date(frontmatter.date).toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            })}
          </time>
          <span>{stats.minutes} min</span>
        </div>

        <h2 className="text-xl font-semibold tracking-tight">
          <Link href={`/blog/${slug}`} className="hover:underline">
            {frontmatter.title}
          </Link>
        </h2>

        <p className="text-text/80">{frontmatter.description}</p>

        <TagPills tags={frontmatter.tags} />
      </div>
    </article>
  );
}
