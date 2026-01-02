"use client";

import { useMemo, useState } from "react";

export function ShareBar() {
  const [copied, setCopied] = useState(false);

  const url = useMemo(() => {
    if (typeof window === "undefined") return "";
    return window.location.href;
  }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {}
  }

  const encoded = encodeURIComponent(url);

  return (
    <div className="flex flex-wrap items-center gap-2 pt-2">
      <button
        onClick={copy}
        className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-text/90 hover:bg-white/10"
      >
        {copied ? "Lien copié ✅" : "Copier le lien"}
      </button>

      <a
        className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-text/90 hover:bg-white/10"
        href={`https://www.facebook.com/sharer/sharer.php?u=${encoded}`}
        target="_blank"
        rel="noreferrer"
      >
        Facebook
      </a>

      <a
        className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-text/90 hover:bg-white/10"
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`}
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>

      <a
        className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-text/90 hover:bg-white/10"
        href={`https://twitter.com/intent/tweet?url=${encoded}`}
        target="_blank"
        rel="noreferrer"
      >
        X
      </a>
    </div>
  );
}
