import ContentCard from "@/components/sections/homePage/ContentCard";
import maisons from "@/data/maisons.json";

type House = (typeof maisons)[number];

/** Inline layers icon */
function LayersIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}
      strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22.18 12.09-8.58 3.91a2 2 0 0 1-1.66 0L2.6 12.09" />
      <path d="m22.18 16.09-8.58 3.91a2 2 0 0 1-1.66 0L2.6 16.09" />
    </svg>
  );
}

export default function MaisonsCardContainer() {
  return (
    <section
      id="maisons"
      aria-labelledby="maisons-title"
      className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8"
    >
      {/* ── Section header ─────────────────────────────── */}
      <div className="group mb-14 flex items-center gap-4">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-emerald-500/25 bg-gradient-to-br from-emerald-500/15 to-transparent text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,.1)] transition-transform duration-500 motion-reduce:transition-none group-hover:rotate-6 group-hover:scale-110 sm:size-14 sm:rounded-2xl">
          <LayersIcon className="size-6 sm:size-7" />
        </span>
        <h2
          id="maisons-title"
          className="font-serif text-3xl tracking-tight text-white md:text-5xl"
        >
          Les 12 Maisons Astrologiques
        </h2>
        <div
          aria-hidden="true"
          className="ml-4 hidden h-px flex-1 bg-gradient-to-r from-emerald-500/25 via-emerald-500/[.04] to-transparent md:block"
        />
      </div>

      {/* ── Card grid ──────────────────────────────────── */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {(maisons as House[]).map((item) => (
          <ContentCard
            key={item.slug}
            item={item}
            basePath="maisons"
            accent="emerald"
          />
        ))}
      </div>
    </section>
  );
}