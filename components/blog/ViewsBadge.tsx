"use client";

import { useEffect, useState } from "react";

export function ViewsBadge({ slug, seed = 125 }: { slug: string; seed?: number }) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      // 1) récupère le count
      const r1 = await fetch(`/api/views?slug=${encodeURIComponent(slug)}`, { cache: "no-store" });
      const j1 = await r1.json();
      const current = typeof j1.count === "number" ? j1.count : 0;

      // 2) incrémente (anti-doublon côté API)
      const r2 = await fetch(`/api/views?slug=${encodeURIComponent(slug)}`, { method: "POST" });
      const j2 = await r2.json();
      const after = typeof j2.count === "number" ? j2.count : current;

      if (!cancelled) setCount(Math.max(seed, after));
    })();

    return () => {
      cancelled = true;
    };
  }, [slug, seed]);

  // rendu discret premium
  return (
    <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-text/75">
      👁️ {count ?? "—"} lectures
    </span>
  );
}
