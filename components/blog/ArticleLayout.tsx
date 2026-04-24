import { TagPills } from "./TagPills";
import { ShareBar } from "./ShareBar";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  SITE_URL,
  SITE_NAME,
  AUTHOR_PERSON,
  PUBLISHER_ORG,
  absoluteUrl,
} from "@/lib/seo";

type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
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

export function ArticleLayout({
  meta,
  children,
}: {
  meta: PostMeta;
  children: React.ReactNode;
}) {
  const prettyDate = formatFrDate(meta.date);
  const canonical = absoluteUrl(`/blog/${meta.slug}`);

  /* ── JSON-LD Article (E-E-A-T complet) ────────────────── */
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    url: canonical,
    datePublished: meta.date,
    dateModified: meta.date,
    inLanguage: "fr",
    author: AUTHOR_PERSON,
    publisher: PUBLISHER_ORG,
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    ...(meta.cover
      ? { image: [absoluteUrl(meta.cover)] }
      : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <main id="main-content" className="mx-auto max-w-6xl px-4 py-10 space-y-8">
        <Breadcrumbs
          items={[
            { name: "Blog", href: "/blog" },
            { name: meta.title, href: `/blog/${meta.slug}` },
          ]}
          accentClass="text-rose-400"
        />

        <article>
          <header className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
              {meta.title}
            </h1>

            <p className="max-w-2xl text-text/80 leading-relaxed">
              {meta.description}
            </p>

            <div className="flex flex-wrap items-center gap-2 text-sm text-text/70">
              {prettyDate ? (
                <time
                  dateTime={meta.date}
                  className="rounded-full border border-white/10 bg-black/20 px-3 py-1"
                >
                  {prettyDate}
                </time>
              ) : null}

              {meta.readingLevel ? (
                <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1">
                  Niveau : {meta.readingLevel}
                </span>
              ) : null}
            </div>

            <TagPills tags={meta.tags} />
            <ShareBar />
          </header>

          <div className="prose">{children}</div>
        </article>
      </main>
    </>
  );
}
