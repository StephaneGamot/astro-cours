import { TagPills } from "./TagPills";
import { ShareBar } from "./ShareBar";




type PostMeta = {
  slug: string; // ✅ important
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
  return d.toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "2-digit" });
}

export function ArticleLayout({
  meta,
  children,
}: {
  meta: PostMeta;
  children: React.ReactNode;
}) {
  const prettyDate = formatFrDate(meta.date);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-8">
      <header className="space-y-4">
        <p className="text-sm text-text/60">
          <span className="opacity-70">Blog</span>
        </p>

        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
          {meta.title}
        </h1>

        <p className="max-w-2xl text-text/80 leading-relaxed">{meta.description}</p>

        <div className="flex flex-wrap items-center gap-2 text-sm text-text/70">
          {prettyDate ? (
            <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1">
              {prettyDate}
            </span>
          ) : null}

          {meta.readingLevel ? (
            <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1">
              Niveau : {meta.readingLevel}
            </span>
          ) : null}

          {/* ✅ vues réelles (avec seed 125) */}

        </div>

        <TagPills tags={meta.tags} />
        <ShareBar />
      </header>

      <div>{children}</div>
    </main>
  );
}
