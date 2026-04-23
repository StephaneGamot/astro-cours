"use client";

import { useState, useCallback, useRef, useEffect } from "react";

/**
 * Tooltip de glossaire — UX "Dwell Time".
 * Survol (desktop) ou tap (mobile) pour afficher la définition.
 * Usage avec parcimonie : 3-5 par article max.
 */
export default function GlossaryTooltip({
  children,
  definition,
}: {
  children: React.ReactNode;
  definition: string;
}) {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const ref = useRef<HTMLSpanElement>(null);

  const show = useCallback(() => {
    if (timeout.current) clearTimeout(timeout.current);
    setOpen(true);
  }, []);

  const hide = useCallback(() => {
    timeout.current = setTimeout(() => setOpen(false), 120);
  }, []);

  /* Fermer si clic ailleurs (mobile) */
  useEffect(() => {
    if (!open) return;
    function handler(e: MouseEvent | TouchEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("pointerdown", handler);
    return () => document.removeEventListener("pointerdown", handler);
  }, [open]);

  return (
    <span
      ref={ref}
      className="relative inline"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      <button
        type="button"
        aria-expanded={open}
        className="inline cursor-help border-b border-dotted border-white/40 text-inherit font-inherit transition-colors hover:border-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]"
        onClick={() => setOpen((v) => !v)}
      >
        {children}
      </button>

      {open && (
        <span
          role="tooltip"
          className="absolute bottom-full left-1/2 z-50 mb-2 w-64 -translate-x-1/2 rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-sm leading-relaxed text-white/85 shadow-2xl"
        >
          {definition}
          {/* triangle */}
          <span
            aria-hidden="true"
            className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-zinc-900"
          />
        </span>
      )}
    </span>
  );
}
