import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, tagToSlug } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import { SITE_NAME, SITE_URL, PUBLISHER_ORG, absoluteUrl, buildTitle } from "@/lib/seo";

const CANONICAL = "/blog";
const TITLE = "Blog astrologie : cours, aspects et transits";
const DESCRIPTION =
  "Articles d'astrologie structurés : bases, aspects, planètes et transits expliqués avec méthode et exemples concrets. Explorez nos cours progressifs !";

/**
 * ✅ Audit 31/05/2026 — W6 : les URLs /blog?tag=xxx sont des facettes filtrées
 *    qui renvoient une liste de 1–3 articles avec le même H1 que /blog
 *    → risque de near-duplicate / thin content vu par Google.
 *    Solution : noindex + canonical → /blog quand un paramètre `tag` est présent.
 *    À terme : créer de vraies pages /blog/tag/[slug] avec H1 et intro propres.
 */
export async function generateMetadata({
  searchParams,
}: {
  searchParams?: Promise<{ tag?: string }>;
}): Promise<Metadata> {
  const sp = (await searchParams) ?? {};
  const hasTag = Boolean(sp.tag?.trim());

  return {
    title: TITLE,
    description: DESCRIPTION,
    // canonical TOUJOURS vers /blog (jamais vers /blog?tag=...) pour
    // consolider la valeur SEO sur l'URL canonique unique.
    alternates: { canonical: absoluteUrl(CANONICAL) },
    robots: hasTag
      ? {
          index: false,
          follow: true,
          googleBot: { index: false, follow: true },
        }
      : undefined,
    openGraph: {
      title: buildTitle(TITLE),
      description: DESCRIPTION,
      url: absoluteUrl(CANONICAL),
      type: "website",
      siteName: SITE_NAME,
      locale: "fr_FR",
      images: [
        { url: absoluteUrl("/og/cover.jpg"), width: 1200, height: 630, alt: "Astro Cours" },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: buildTitle(TITLE),
      description: DESCRIPTION,
      images: [absoluteUrl("/og/cover.jpg")],
    },
  };
}

function uniqTags(posts: ReturnType<typeof getAllPosts>) {
  const set = new Set<string>();
  posts.forEach((p) => (p.meta.tags ?? []).forEach((t) => set.add(t)));
  return Array.from(set).sort((a, b) => a.localeCompare(b));
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
  searchParams,
}: {
  searchParams?: Promise<{ tag?: string }>;
}) {
  const resolvedSearchParams = (await searchParams) ?? {};

  const posts = getAllPosts();
  const tags = uniqTags(posts);

  // Le paramètre d'URL est un slug (ex. "maison-viii"). On retrouve le tag
  // lisible correspondant pour l'affichage et le filtrage.
  const selectedSlug = resolvedSearchParams.tag?.trim() || "";
  const selectedTag = selectedSlug
    ? tags.find((t) => tagToSlug(t) === selectedSlug) || ""
    : "";
  const filtered = selectedTag
    ? posts.filter((p) => (p.meta.tags ?? []).includes(selectedTag))
    : posts;

  return (
    <main id="main-content" className="mx-auto max-w-6xl px-4 py-10 space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Blog d'astrologie : cours et méthodes",
            description: DESCRIPTION,
            url: `${SITE_URL}${CANONICAL}`,
            isPartOf: {
              "@type": "WebSite",
              name: SITE_NAME,
              url: SITE_URL,
            },
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
              Blog d’astrologie : cours et m&eacute;thodes
            </h1>

            <div className="flex flex-wrap gap-2 text-sm text-text/70">
              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1">
                {posts.length} article(s)
              </span>
              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1">
                lecture rapide
              </span>
              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1">
                exemples & méthode
              </span>
            </div>
          </div>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            Des cours “lisibles” : définitions claires, exemples, pièges fréquents et
            méthode d’interprétation. Format premium, pensé pour apprendre vite.
          </p>

          {tags.length ? (
            <div className="mt-6 flex flex-wrap gap-2">
              <Chip href="/blog" active={!selectedTag}>
                Tous
              </Chip>

              {tags.map((t) => (
                <Chip
                  key={t}
                  href={`/blog/tag/${tagToSlug(t)}`}
                  active={t === selectedTag}
                >
                  <span className="mr-1 opacity-70">#</span>
                  {t}
                </Chip>
              ))}
            </div>
          ) : null}
        </div>
      </header>

      {selectedTag ? (
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm text-text/70">
            Filtre : <span className="text-text">#{selectedTag}</span> —{" "}
            {filtered.length} article(s)
          </p>
          <Link
            href="/blog"
            className="text-sm text-text/70 hover:text-text hover:underline underline-offset-4"
          >
            Réinitialiser
          </Link>
        </div>
      ) : null}

      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Derniers articles</h2>
          <p className="mt-1 text-sm text-text/70">
            Commence par un thème qui t’attire, puis suis les tags pour progresser.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.04] via-transparent to-transparent" />

        <section className="relative grid gap-6 md:grid-cols-2">
          {filtered.map((p) => (
            <BlogCard key={p.meta.slug} meta={p.meta} />
          ))}
        </section>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-black/20 p-6 text-text/80">
          Aucun article pour ce tag pour le moment.
        </div>
      ) : null}
    </main>
  );
}