import Link from "next/link";

export function TagPills({ tags }: { tags?: string[] }) {
  if (!tags?.length) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Link
          key={tag}
          href={`/tags/${encodeURIComponent(tag)}`}
          className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-text/90 hover:bg-white/10"
        >
          #{tag}
        </Link>
      ))}
    </div>
  );
}
