import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { permanentRedirect } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { getAllPosts, getAllTags, tagToSlug, slugToTag } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import {
  SITE_NAME,
  PUBLISHER_ORG,
  buildMeta,
  localizedPathUrl,
  pathLanguageAlternates,
  toSeoLocale,
} from "@/lib/seo";

const INTERNAL_PATH = "/blog";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = toSeoLocale(locale);
  const t = await getTranslations({ locale: loc, namespace: "blog" });
  return buildMeta({
    title: t("metaTitle"),
    description: t("metaDescription"),
    canonicalPath: INTERNAL_PATH,
    type: "website",
    locale: loc,
    canonicalUrl: localizedPathUrl(INTERNAL_PATH, loc),
    languages: pathLanguageAlternates(INTERNAL_PATH),
  });
}

function Chip({
  href,
  active,
  children,
}: {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={[
        "inline-flex items-center rounded-full border px-3 py-1 text-sm transition",
        active
          ? "border-white/25 bg-white/10 text-text"
          : "border-white/10 bg-black/20 text-text/85 hover:bg-white/10",
      ].join(" ")}
    >
      {children}
    </Link>
  );
}

export default async function BlogPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams?: Promise<{ tag?: string }>;
}) {
  const { locale } = await params;
  const loc = toSeoLocale(locale);
  const t = await getTranslations({ locale: loc, namespace: "blog" });

  const resolved = (await searchParams) ?? {};
  const rawTag = resolved.tag?.trim();
  if (rawTag) {
    const slug = tagToSlug(rawTag);
    permanentRedirect(slugToTag(slug, loc) ? `/blog/tag/${slug}` : "/blog");
  }

  const posts = getAllPosts(loc);
  const tags = getAllTags(loc);
  const canonical = localizedPathUrl(INTERNAL_PATH, loc);

  return (
    <main id="main-content" className="mx-auto max-w-6xl px-4 py-10 space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: t("jsonldName"),
            description: t("metaDescription"),
            url: canonical,
            inLanguage: loc,
            isPartOf: { "@type": "WebSite", name: SITE_NAME, url: canonical.split("/blog")[0] || canonical },
            publisher: PUBLISHER_ORG,
          }),
        }}
      />
      <header className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-7 shadow-soft">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        <div className="relative">
          <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
              {t("h1")}
            </h1>

            <div className="flex flex-wrap gap-2 text-sm text-text/70">
              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1">
                {t("count", { count: posts.length })}
              </span>
              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1">
                {t("fast")}
              </span>
              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1">
                {t("examples")}
              </span>
            </div>
          </div>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">{t("intro")}</p>

          {tags.length ? (
            <div className="mt-6 flex flex-wrap gap-2">
              <Chip href="/blog" active>
                {t("all")}
              </Chip>

              {tags.map((tg) => (
                <Chip key={tg.slug} href={`/blog/tag/${tg.slug}`}>
                  <span className="mr-1 opacity-70">#</span>
                  {tg.label}
                </Chip>
              ))}
            </div>
          ) : null}
        </div>
      </header>

      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">{t("latest")}</h2>
          <p className="mt-1 text-sm text-text/70">{t("latestSub")}</p>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.04] via-transparent to-transparent" />
        <section className="relative grid gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <BlogCard key={p.meta.slug} meta={p.meta} />
          ))}
        </section>
      </div>

      {posts.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-black/20 p-6 text-text/80">
          {t("empty")}
        </div>
      ) : null}
    </main>
  );
}
