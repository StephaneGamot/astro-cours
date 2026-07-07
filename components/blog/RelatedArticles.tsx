import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { postSlugFor } from "@/lib/blog";
import { getArticlesForPillar, type PillarKind } from "@/lib/pillarArticles";

/**
 * Bloc « À lire aussi » sur les pages piliers (maisons / signes / planètes).
 * Maillage descendant piliers → blog — audit SEO 07/2026.
 * Mapping éditorial dans lib/pillarArticles.ts.
 */
export async function RelatedArticles({
  kind,
  slug,
  max = 3,
}: {
  kind: PillarKind;
  slug: string;
  max?: number;
}) {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "blog" });
  const posts = getArticlesForPillar(kind, slug, locale, max);
  if (posts.length === 0) return null;

  return (
    <aside
      aria-labelledby="related-articles-heading"
      className="mx-auto max-w-5xl px-6 py-12"
    >
      <header className="mb-6 flex items-baseline justify-between gap-4">
        <h2
          id="related-articles-heading"
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

      <ul role="list" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map(({ meta }) => (
          <li key={meta.slug}>
            <Link
              href={`/blog/${postSlugFor(meta.slug, locale)}`}
              className="group block h-full overflow-hidden rounded-2xl border border-white/10 bg-black/20 transition hover:border-rose-400/30 hover:bg-white/[0.04]"
            >
              {meta.cover ? (
                <div className="relative h-36 w-full overflow-hidden">
                  <Image
                    src={meta.cover}
                    alt={meta.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
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
