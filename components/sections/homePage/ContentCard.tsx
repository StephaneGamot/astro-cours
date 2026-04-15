import Image from "next/image";
import Link from "next/link";

export type CardData = {
  slug: string;
  name: string;
  headline: string;
  description: string;
  image: { src: string; alt: string };
};

type AccentKey = "violet" | "sky" | "emerald";
type ImageLayout = "icon" | "landscape";

type Props = {
  item: CardData;
  basePath: "planetes" | "signes" | "maisons";
  accent?: AccentKey;
  layout?: ImageLayout;
  priority?: boolean;
};

/* ────────────────────────────────────────────────────────────────
   Accent tokens — literal class strings for Tailwind purge safety
   ──────────────────────────────────────────────────────────────── */

type AccentTokens = {
  hoverBorder: string;
  hoverShadow: string;
  glowFrom: string;
  titleHover: string;
  badge: string;
  chevronBg: string;
  chevronText: string;
  focusRing: string;
};

const ACCENT: Record<AccentKey, AccentTokens> = {
  violet: {
    hoverBorder: "hover:border-violet-500/25",
    hoverShadow: "hover:shadow-[0_12px_40px_-8px_rgba(139,92,246,.12)]",
    glowFrom: "group-hover:from-violet-500/[.08]",
    titleHover: "group-hover:text-violet-200",
    badge: "text-violet-400",
    chevronBg: "group-hover:bg-violet-500/15",
    chevronText: "group-hover:text-violet-300",
    focusRing: "focus-within:ring-violet-400",
  },
  sky: {
    hoverBorder: "hover:border-sky-500/25",
    hoverShadow: "hover:shadow-[0_12px_40px_-8px_rgba(14,165,233,.12)]",
    glowFrom: "group-hover:from-sky-500/[.08]",
    titleHover: "group-hover:text-sky-200",
    badge: "text-sky-400",
    chevronBg: "group-hover:bg-sky-500/15",
    chevronText: "group-hover:text-sky-300",
    focusRing: "focus-within:ring-sky-400",
  },
  emerald: {
    hoverBorder: "hover:border-emerald-500/25",
    hoverShadow: "hover:shadow-[0_12px_40px_-8px_rgba(16,185,129,.12)]",
    glowFrom: "group-hover:from-emerald-500/[.08]",
    titleHover: "group-hover:text-emerald-200",
    badge: "text-emerald-400",
    chevronBg: "group-hover:bg-emerald-500/15",
    chevronText: "group-hover:text-emerald-300",
    focusRing: "focus-within:ring-emerald-400",
  },
};

/** Inline chevron-right icon */
function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

/* ════════════════════════════════════════════════════════════════
   ContentCard
   ════════════════════════════════════════════════════════════════ */

export default function ContentCard({
  item,
  basePath,
  accent: accentKey = "violet",
  layout = "icon",
  priority = false
}: Props) {
  const a = ACCENT[accentKey];
  const titleId = `${basePath}-title-${item.slug}`;
  const descId = `${basePath}-desc-${item.slug}`;

  /** Label for the card link — adapts to section context */
  const linkLabel =
    basePath === "planetes"
      ? `Lire le cours complet sur la planète ${item.name}`
      : basePath === "maisons"
        ? `Lire le cours complet sur la ${item.name}`
        : `Lire le cours complet sur le signe ${item.name}`;

  return (
    <article
      aria-labelledby={titleId}
      aria-describedby={descId}
      className={[
        "group relative flex flex-col overflow-hidden rounded-2xl border border-white/[.05]",
        "bg-[#0c0c0e] p-5 shadow-lg sm:p-6",
        /* hover lift + accent border/shadow */
        "transition-all duration-500 motion-reduce:transition-none",
        "hover:-translate-y-1.5 hover:bg-[#0e0e11]",
        a.hoverBorder,
        a.hoverShadow,
        /* focus-within for keyboard: accent ring, consistent offset */
        a.focusRing,
        "focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-[#09090b]",
      ].join(" ")}
    >
      {/* Inner glow on hover */}
      <div
        aria-hidden="true"
        className={[
          "pointer-events-none absolute -inset-px rounded-2xl",
          "bg-gradient-to-b from-transparent to-transparent",
          "opacity-0 transition-opacity duration-500 motion-reduce:transition-none",
          "group-hover:opacity-100",
          a.glowFrom,
        ].join(" ")}
      />

      {/* ── Header ───────────────────────────────────── */}
      <header className="relative z-10 mb-5 flex items-center justify-between">
        <h3
          id={titleId}
          className={[
            "font-serif text-2xl text-white transition-colors duration-300",
            "motion-reduce:transition-none",
            a.titleHover,
          ].join(" ")}
        >
          <Link
            href={`/${basePath}/${item.slug}`}
            className="focus-visible:outline-none after:absolute after:inset-0"
            aria-label={linkLabel}
          >
            {item.name}
          </Link>
        </h3>
        <span
          aria-hidden="true"
          className={[
            "flex size-8 items-center justify-center rounded-full",
            "bg-white/[.04] text-white/30",
            "transition-all duration-300 motion-reduce:transition-none",
            "group-hover:translate-x-0.5",
            a.chevronBg,
            a.chevronText,
          ].join(" ")}
        >
          <ChevronRightIcon className="size-4" />
        </span>
      </header>

      {/* ── Image ────────────────────────────────────── */}
      {layout === "landscape" ? (
        /* Landscape — planets: 3:2 aspect, cover, gradient overlay */
        <div className="relative z-10 mb-5 w-full overflow-hidden rounded-xl border border-white/[.05] bg-black/30 aspect-[3/2] transition-colors duration-300 group-hover:border-white/[.08]">
          <Image
            src={item.image.src}
            alt={item.image.alt}
            fill
            className="object-cover transition-transform duration-700 motion-reduce:transition-none group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
          />
        </div>
      ) : (
        /* Icon — zodiac & maisons: square, contain, centred */
        <div className="relative z-10 mb-5 flex justify-center overflow-hidden rounded-xl border border-white/[.05] bg-black/30 p-4 transition-colors duration-300 group-hover:border-white/[.08]">
          <div className="relative size-40 sm:size-48 transition-transform duration-700 motion-reduce:transition-none group-hover:scale-110">
            <Image
              src={item.image.src}
              alt={item.image.alt}
              fill
              quality={50}
              className="object-contain"
              sizes="(max-width: 640px) 160px, 192px"
            />
          </div>
        </div>
      )}

      {/* ── Description ──────────────────────────────── */}
      <footer className="relative z-10 flex flex-1 flex-col">
        <p
          className={[
            "mb-3 border-b border-white/[.06] pb-3 text-[13px] font-bold uppercase tracking-widest",
            a.badge,
          ].join(" ")}
        >
          {item.headline}
        </p>
        <p
          id={descId}
          className="text-[15px] leading-relaxed text-slate-400 transition-colors duration-300 motion-reduce:transition-none group-hover:text-slate-300"
        >
          {item.description}
        </p>
      </footer>
    </article>
  );
}