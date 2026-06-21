import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { getRelatedPosts, postSlugFor } from "@/lib/blog";

/**
 * Bloc « Articles liés » — maillage interne sémantique localisé.
 */
export async function RelatedPosts({
  currentSlug,
  max = 4,
}: {
  currentSlug: string;
  max?: number;
}) {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "blog" });
  const related = getRelatedPosts(currentSlug, locale, max);
  if (related.length === 0) return null;

  return (
    <aside
      aria-labelledby="related-posts-heading"
      className="mt-16 border-t border-white/10 pt-12"
    >
      <header className="mb-6 flex items-baseline justify-between gap-4">
        <h2
          id="related-posts-heading"
          className="font-serif text-2xl tracking-tight text-text sm:text-3xl"
        >
          {t("related")}
        </h2>
        <Link
          href="/blog"
          className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-text/70 transition hover:border-rose-400/30 hover:bg-rose-400/10 hover:text-rose-300"
        >
          {t("all")} →
        </Link>
      </header>

      <ul role="list" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
        {related.map(({ meta }) => (
          <li key={meta.slug}>
            <Link
              href={`/blog/${postSlugFor(meta.slug, locale)}`}
              className="group block overflow-hidden rounded-2xl border border-white/10 bg-black/20 transition hover:border-rose-400/30 hover:bg-white/[0.04]"
            >
              {meta.cover ? (
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={meta.cover}
                    alt={meta.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent"
                  />
                </div>
              ) : null}

              <div className="space-y-2 p-5">
                <h3 className="font-serif text-lg leading-snug tracking-tight text-text transition-colors group-hover:text-rose-300">
                  {meta.title}
                </h3>
                <p className="line-clamp-2 text-sm leading-relaxed text-text/70">
                  {meta.description}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
