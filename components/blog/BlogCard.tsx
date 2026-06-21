import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { TagPills } from "./TagPills";
import { postSlugFor } from "@/lib/blog";

type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date?: string;
  tags?: string[];
  cover?: string;
  readingLevel?: "débutant" | "intermédiaire" | "avancé";
};

function formatDate(dateStr: string | undefined, locale: string) {
  if (!dateStr) return null;
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return null;
  return d.toLocaleDateString(locale, { year: "numeric", month: "long", day: "2-digit" });
}

export async function BlogCard({ meta }: { meta: PostMeta }) {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "blog" });
  const prettyDate = formatDate(meta.date, locale);
  const href = `/blog/${postSlugFor(meta.slug, locale)}`;

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
            <span className="min-h-[1.25rem]">
              {prettyDate ? (
                <time dateTime={meta.date}>{prettyDate}</time>
              ) : (
                <span className="opacity-0 select-none">—</span>
              )}
            </span>

            {meta.readingLevel ? (
              <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-text/75">
                {t(`level.${meta.readingLevel}`)}
              </span>
            ) : null}
          </div>

          <span className="text-text/65">—</span>
        </div>

        <h2 className="text-xl font-semibold tracking-tight leading-snug">
          <Link href={href} className="hover:underline underline-offset-4">
            {meta.title}
          </Link>
        </h2>

        <p className="text-text/80 leading-relaxed">{meta.description}</p>

        <TagPills tags={meta.tags} />
      </div>
    </article>
  );
}
