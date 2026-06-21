/* ════════════════════════════════════════════════════════════════
   HeroHomePage — Server Component (zero client JS)
   ════════════════════════════════════════════════════════════════ */

import { getTranslations } from "next-intl/server";

/** Inline sparkle icon — avoids shipping lucide-react to the client */
function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}

export default async function HeroHomePage() {
  const t = await getTranslations("home");
  return (
    <section
      aria-labelledby="hero-title"
      className="relative z-10 mx-auto max-w-4xl px-6 py-16 -mt-32 text-center sm:px-12 md:px-16 md:text-left lg:px-24"
    >
      <div className="flex flex-col items-center md:items-start">
        {/* ── Badge ────────────────────────────────────── */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[.25em] text-violet-300 backdrop-blur-md">
          <SparkleIcon className="size-3.5 text-amber-300" />
          <span>{t("badge")}</span>
        </div>

        {/* ── Heading ─────────────────────────────────── */}
        <h1
          id="hero-title"
          className="mb-12 pt-8 font-serif text-4xl leading-[1.1] text-white md:text-5xl lg:text-6xl"
        >
          {t.rich("heroTitle", {
            em: (chunks) => (
              <span className="italic text-violet-300">{chunks}</span>
            ),
          })}
        </h1>
      </div>

      {/* ── Body copy ─────────────────────────────────── */}
      <div className="space-y-7 text-[17px] leading-relaxed text-slate-300 md:text-lg">
        <p className="first-letter:float-left first-letter:pr-3.5 first-letter:font-serif first-letter:text-6xl first-letter:leading-[.78] first-letter:text-violet-400">
          {t("p1")}
        </p>

        <p>
          {t.rich("p2", {
            strong: (chunks) => (
              <strong className="font-medium text-white">{chunks}</strong>
            ),
          })}
        </p>

        <p>{t("p3")}</p>

        {/* ── Pull quote ────────────────────────────────── */}
        <figure className="mt-12 rounded-2xl border border-white/[.07] bg-white/[.02] p-7 shadow-xl backdrop-blur-sm sm:p-8 md:text-left">
          <blockquote>
            <p className="font-serif text-lg italic leading-relaxed text-white md:text-xl">
              {t("quote")}
            </p>
          </blockquote>
        </figure>
      </div>
    </section>
  );
}