import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllTags,
  getPostsByTagSlug,
  slugToTag,
  TAG_PAGES,
  isIndexableTag,
} from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import {
  SITE_NAME,
  SITE_URL,
  PUBLISHER_ORG,
  absoluteUrl,
  buildTitle,
} from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

/**
 * Pages de tags du blog.
 *
 * ✅ Tags « forts » (présents dans TAG_PAGES) : vraies pages de destination
 *    indexables, avec H1 + intro propres et canonical sur elles-mêmes.
 * ⛔ Tags « fins » (peu d'articles) : noindex + canonical → /blog, pour éviter
 *    le thin content / near-duplicate tout en gardant une page fonctionnelle.
 */
export function generateStaticParams() {
  return getAllTags().map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tag = slugToTag(slug);
  if (!tag) return {};

  const cfg = TAG_PAGES[slug];
  const indexable = isIndexableTag(slug);
  const selfPath = `/blog/tag/${slug}`;

  const title = cfg?.title ?? `Articles sur « ${tag} »`;
  const description =
    cfg?.description ??
    `Tous les articles d'astrologie associés au tag « ${tag} » sur ${SITE_NAME}.`;

  return {
    title,
    description,
    // Indexable → canonical sur elle-même. Sinon → /blog (consolidation).
    alternates: { canonical: absoluteUrl(indexable ? selfPath : "/blog") },
    robots: indexable
      ? { index: true, follow: true }
      : { index: false, follow: true, googleBot: { index: false, follow: true } },
    openGraph: {
      title: buildTitle(title),
      description,
      url: absoluteUrl(indexable ? selfPath : "/blog"),
      type: "website",
      siteName: SITE_NAME,
      locale: "fr_FR",
      images: [
        { url: absoluteUrl("/og/cover.jpg"), width: 1200, height: 630, alt: "Astro Cours" },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: buildTitle(title),
      description,
      images: [absoluteUrl("/og/cover.jpg")],
    },
  };
}

export default async function BlogTagPage({ params }: Props) {
  const { slug } = await params;
  const tag = slugToTag(slug);
  if (!tag) return notFound();

  const cfg = TAG_PAGES[slug];
  const posts = getPostsByTagSlug(slug);
  const h1 = cfg?.h1 ?? tag;
  const intro =
    cfg?.intro ??
    `Retrouvez tous nos articles d'astrologie associés au tag « ${tag} ».`;
  const selfPath = `/blog/tag/${slug}`;

  return (
    <main id="main-content" className="mx-auto max-w-6xl px-4 py-10 space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: cfg?.title ?? `Articles sur « ${tag} »`,
            description: intro,
            url: `${SITE_URL}${selfPath}`,
            isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
            publisher: PUBLISHER_ORG,
          }),
        }}
      />

      <nav aria-label="Fil d'Ariane" className="text-sm text-text/60">
        <Link href="/blog" className="hover:text-text hover:underline underline-offset-4">
          Blog
        </Link>
        <span className="mx-2 opacity-50">/</span>
        <span className="text-text/80">{h1}</span>
      </nav>

      <header className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-7 shadow-soft">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
        <div className="relative">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
            {h1}
          </h1>
          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">{intro}</p>
          <div className="mt-4 flex flex-wrap gap-2 text-sm text-text/70">
            <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1">
              {posts.length} article(s)
            </span>
            <Link
              href="/blog"
              className="rounded-full border border-white/10 bg-black/20 px-3 py-1 hover:bg-white/10"
            >
              ← Tous les articles
            </Link>
          </div>
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {posts.map((p) => (
          <BlogCard key={p.meta.slug} meta={p.meta} />
        ))}
      </section>

      {posts.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-black/20 p-6 text-text/80">
          Aucun article pour ce tag pour le moment.
        </div>
      ) : null}
    </main>
  );
}
