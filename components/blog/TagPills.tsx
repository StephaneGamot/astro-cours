import Link from "next/link";

function tagStyle(tag: string) {
  const t = tag.toLowerCase();

  if (t === "bases") return "border-sky-500/25 bg-sky-500/10 text-sky-200";
  if (t.includes("plan")) return "border-yellow-500/25 bg-yellow-500/10 text-yellow-200";
  if (t.includes("zodia")) return "border-emerald-500/25 bg-emerald-500/10 text-emerald-200";
  if (t.includes("maison")) return "border-cyan-500/25 bg-cyan-500/10 text-cyan-200";
  if (t.includes("aspect")) return "border-violet-500/25 bg-violet-500/10 text-violet-200";
  if (t.includes("transit")) return "border-orange-500/25 bg-orange-500/10 text-orange-200";
  if (t.includes("début")) return "border-sky-500/25 bg-sky-500/10 text-sky-200";

  return "border-white/10 bg-black/20 text-text/85";
}


export function TagPills({ tags }: { tags?: string[] }) {
  if (!tags?.length) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Link
          key={tag}
          href={`/blog?tag=${encodeURIComponent(tag)}`}
          className={[
            "rounded-full border px-3 py-1 text-sm transition hover:brightness-110 hover:shadow-[0_0_0_3px_rgba(255,255,255,0.04)]",
            tagStyle(tag),
          ].join(" ")}
          title={`Voir les articles tagués ${tag}`}
        >
          <span className="opacity-80 mr-1">#</span>
          {tag}
        </Link>
      ))}
    </div>
  );
}
