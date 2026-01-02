import Link from "next/link";
import Image from "next/image";
import { TagPills } from "./TagPills";

type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date?: string;
  tags?: string[];
  cover?: string;
  readingLevel?: "débutant" | "intermédiaire" | "avancé";
};

function formatFrDate(dateStr?: string) {
  if (!dateStr) return null;
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return null;

  return d.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
}

export function BlogCard({ meta }: { meta: PostMeta }) {
  const prettyDate = formatFrDate(meta.date);

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-black/20 transition hover:bg-white/5">
      {meta.cover ? (
        <div className="relative h-48 w-full">
          <Image
            src={meta.cover}
            alt={meta.title}
            fill
            className="object-cover transition duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
        </div>
      ) : null}

      <div className="space-y-3 p-5">
        <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-text/70">
          <div className="flex flex-wrap items-center gap-2">
            {/* date discrète */}
            <span className="min-h-[1.25rem]">
              {prettyDate ? (
                <time dateTime={meta.date}>{prettyDate}</time>
              ) : (
                <span className="opacity-0 select-none">—</span>
              )}
            </span>

            {/* niveau discret si présent */}
            {meta.readingLevel ? (
              <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-text/75">
                {meta.readingLevel}
              </span>
            ) : null}
          </div>

          {/* petit “temps de lecture” si tu veux le brancher plus tard */}
          <span className="text-text/65">—</span>
        </div>

        <h2 className="text-xl font-semibold tracking-tight leading-snug">
          <Link
            href={`/blog/${meta.slug}`}
            className="hover:underline underline-offset-4"
          >
            {meta.title}
          </Link>
        </h2>

        <p className="text-text/80 leading-relaxed">{meta.description}</p>

        <TagPills tags={meta.tags} />
      </div>
    </article>
  );
}
