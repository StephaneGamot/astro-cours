import ContentCard from "@/components/sections/homePage/ContentCard";
import zodiaque from "@/data/zodiaque.json";

type Zodiac = (typeof zodiaque)[number];

/** Inline sparkles icon */
function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}
      strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" />
    </svg>
  );
}

export default function ZodiacCardContainer() {
  return (
    <section
      id="zodiaque"
      aria-labelledby="zodiaque-title"
      className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8"
    >
      {/* ── Section header ─────────────────────────────── */}
      <div className="group mb-14 flex items-center gap-4">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-violet-500/25 bg-gradient-to-br from-violet-500/15 to-transparent text-violet-300 shadow-[0_0_20px_rgba(139,92,246,.1)] transition-transform duration-500 motion-reduce:transition-none group-hover:rotate-6 group-hover:scale-110 sm:size-14 sm:rounded-2xl">
          <SparklesIcon className="size-6 sm:size-7" />
        </span>
        <h2
          id="zodiaque-title"
          className="font-serif text-3xl tracking-tight text-white md:text-5xl"
        >
          Les 12 Signes du Zodiaque
        </h2>
        <div
          aria-hidden="true"
          className="ml-4 hidden h-px flex-1 bg-gradient-to-r from-violet-500/25 via-violet-500/[.04] to-transparent md:block"
        />
      </div>

      {/* ── Card grid ──────────────────────────────────── */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {(zodiaque as Zodiac[]).map((item) => (
          <ContentCard
            key={item.slug}
            item={item}
            basePath="signes"
            accent="violet"
          />
        ))}
      </div>
    </section>
  );
}