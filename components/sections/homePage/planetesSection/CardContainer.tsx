import ContentCard from "@/components/sections/homePage/ContentCard";
import planetes from "@/data/planetes.json";

type Planet = (typeof planetes)[number];

/** Inline orbit icon */
function OrbitIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}
      strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <circle cx="19" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
      <path d="M10.4 21.9a10 10 0 0 0 9.941-15.416" />
      <path d="M13.5 2.1a10 10 0 0 0-9.841 15.416" />
    </svg>
  );
}

export default function PlanetsCardContainer() {
  return (
    <section
      id="planetes"
      aria-labelledby="planetes-title"
      className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8"
    >
      {/* ── Section header ─────────────────────────────── */}
      <div className="group mb-14 flex items-center gap-4">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-sky-500/25 bg-gradient-to-br from-sky-500/15 to-transparent text-sky-300 shadow-[0_0_20px_rgba(14,165,233,.1)] transition-transform duration-500 motion-reduce:transition-none group-hover:rotate-6 group-hover:scale-110 sm:size-14 sm:rounded-2xl">
          <OrbitIcon className="size-6 sm:size-7" />
        </span>
        <h2
          id="planetes-title"
          className="font-serif text-3xl tracking-tight text-white md:text-5xl"
        >
          Les 10 Planètes en Astrologie
        </h2>
        <div
          aria-hidden="true"
          className="ml-4 hidden h-px flex-1 bg-gradient-to-r from-sky-500/25 via-sky-500/[.04] to-transparent md:block"
        />
      </div>

      {/* ── Card grid ──────────────────────────────────── */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {(planetes as Planet[]).map((item) => (
          <ContentCard
            key={item.slug}
            item={item}
            basePath="planetes"
            accent="sky"
            layout="landscape"
          />
        ))}
      </div>
    </section>
  );
}