import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";

export const metadata: Metadata = {
  title: "Blog — Cours d’astrologie",
  description:
    "Articles premium et structurés : bases, aspects, planètes, transits. Des cours lisibles, concrets et progressifs.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — Cours d’astrologie",
    description:
      "Bases, aspects, planètes, transits : cours clairs, exemples, méthode.",
    url: "/blog",
    type: "website",
  },
};

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

export default function BlogPage({
  searchParams,
}: {
  searchParams?: { tag?: string };
}) {
  const posts = getAllPosts();
  const tags = uniqTags(posts);

  const selectedTag = searchParams?.tag?.trim() || "";
  const filtered = selectedTag
    ? posts.filter((p) => (p.meta.tags ?? []).includes(selectedTag))
    : posts;

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-10">
      {/* HERO (plus premium + couleur subtile) */}
      <header className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-7 shadow-soft">
        {/* glow */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

        {/* overlay gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        <div className="relative">

          <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
              Blog d’astrologie
            </h1>

            {/* mini stats */}
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

          {/* Filtres tags */}
          {tags.length ? (
            <div className="mt-6 flex flex-wrap gap-2">
              <Chip href="/blog" active={!selectedTag}>
                Tous
              </Chip>

              {tags.map((t) => (
                <Chip
                  key={t}
                  href={`/blog?tag=${encodeURIComponent(t)}`}
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

      {/* Résultat filtre */}
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

      {/* Titre section */}
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Derniers articles</h2>
          <p className="mt-1 text-sm text-text/70">
            Commence par un thème qui t’attire, puis suis les tags pour progresser.
          </p>
        </div>
      </div>

      {/* Fond subtil derrière la grille */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.04] via-transparent to-transparent" />

        <section className="relative grid gap-6 md:grid-cols-2">
          {filtered.map((p) => (
            <BlogCard key={p.meta.slug} meta={p.meta} />
          ))}
        </section>
      </div>

      {/* Empty state */}
      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-black/20 p-6 text-text/80">
          Aucun article pour ce tag pour le moment.
        </div>
      ) : null}
    </main>
  );
}
