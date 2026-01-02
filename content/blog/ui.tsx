import type { ReactNode } from "react";

export type PillTone =
  | "neutral"
  | "violet"
  | "sky"
  | "emerald"
  | "yellow"
  | "orange";

function pillClass(tone: PillTone = "neutral") {
  return tone === "violet"
    ? "border-violet-500/25 bg-violet-500/10 text-violet-200"
    : tone === "sky"
    ? "border-sky-500/25 bg-sky-500/10 text-sky-200"
    : tone === "emerald"
    ? "border-emerald-500/25 bg-emerald-500/10 text-emerald-200"
    : tone === "yellow"
    ? "border-yellow-500/25 bg-yellow-500/10 text-yellow-200"
    : tone === "orange"
    ? "border-orange-500/25 bg-orange-500/10 text-orange-200"
    : "border-white/10 bg-black/20 text-text/80";
}

export function Pill({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: PillTone;
}) {
  return (
    <span className={`rounded-full border px-3 py-1 text-sm ${pillClass(tone)}`}>
      {children}
    </span>
  );
}

export function tagStyle(tag: string) {
  const t = tag.toLowerCase();

  if (t === "bases") return pillClass("sky");
  if (t.includes("thème")) return pillClass("emerald");
  if (t.includes("début")) return pillClass("violet");

  if (t.includes("aspect")) return pillClass("violet");
  if (t.includes("transit")) return pillClass("orange");
  if (t.includes("plan")) return pillClass("yellow");
  if (t.includes("zodia")) return pillClass("emerald");
  if (t.includes("maison")) return pillClass("sky");

  return "border-white/10 bg-black/20 text-text/85";
}

export function TagPillsInline({ tags }: { tags?: string[] }) {
  if (!tags?.length) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((t) => (
        <span
          key={t}
          className={`rounded-full border px-3 py-1 text-sm ${tagStyle(t)}`}
        >
          <span className="opacity-80 mr-1">#</span>
          {t}
        </span>
      ))}
    </div>
  );
}

export function getGlowFromTags(tags?: string[]) {
  const list = (tags ?? []).map((x) => x.toLowerCase());

  if (list.some((t) => t.includes("thème"))) return "bg-emerald-500/15";
  if (list.some((t) => t.includes("plan"))) return "bg-yellow-500/15";
  if (list.some((t) => t.includes("aspect"))) return "bg-violet-500/15";
  if (list.some((t) => t.includes("transit"))) return "bg-orange-500/15";
  if (list.some((t) => t.includes("bases") || t.includes("début")))
    return "bg-sky-500/15";

  return "bg-white/10";
}

