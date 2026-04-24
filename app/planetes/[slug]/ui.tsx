import Image from "next/image";
import Link from "next/link";
import type { ReactNode, ComponentType } from "react";

// ============================================================================
// AuraGlow - Background gradient glow effect
// ============================================================================

export function AuraGlow({
  aura,
  color,
}: {
  aura: string;
  color: string;
}) {
  return (
    <div
      className="pointer-events-none fixed inset-0"
      aria-hidden="true"
      style={{
        background: `radial-gradient(circle at ${aura}, ${color} 0%, transparent 70%)`,
        opacity: 0.15,
        animation: "glow 8s ease-in-out infinite",
      }}
    />
  );
}

// ============================================================================
// Section - Semantic section wrapper
// ============================================================================

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`mb-20 md:mb-28 ${className}`}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      {children}
    </section>
  );
}

// ============================================================================
// SectionHeading - Section title with icon, subtitle, and decorative line
// ============================================================================

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  icon?: ComponentType<{ className?: string }>;
  accentDot: string;
  accentText: string;
  id?: string;
  tag?: "h2" | "h3";
}

export function SectionHeading({
  title,
  subtitle,
  icon: Icon,
  accentDot,
  accentText,
  id,
  tag: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center md:mb-16">
      {Icon && (
        <div className="mb-4 flex justify-center">
          <Icon className={`h-12 w-12 ${accentText}`} />
        </div>
      )}

      <Tag
        id={id ? `${id}-heading` : undefined}
        className="mb-3 text-3xl font-bold md:text-4xl"
      >
        {title}
      </Tag>

      {/* Decorative colored bar */}
      <div className={`mx-auto mb-4 h-1 w-16 rounded-full ${accentDot}`} />

      {subtitle && (
        <p className={`text-lg ${accentText}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ============================================================================
// GlassCard - Premium glass-morphism card
// ============================================================================

interface GlassCardProps {
  children: ReactNode;
  accent: { border: string };
  className?: string;
  id?: string;
  role?: string;
  ariaLabel?: string;
}

export function GlassCard({
  children,
  accent,
  className = "",
  id,
  role,
  ariaLabel,
}: GlassCardProps) {
  return (
    <div
      id={id}
      role={role}
      aria-label={ariaLabel}
      className={`group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-xl transition-all duration-300 hover:border-white/10 hover:shadow-2xl hover:shadow-white/5 ${className}`}
    >
      {/* Inner gradient overlay for glass effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Accent border highlight on hover */}
      <div
        className={`absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${accent.border}`}
        style={{
          borderRadius: "inherit",
          pointerEvents: "none",
          boxShadow: `inset 0 0 2px ${accent.border}`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

// ============================================================================
// ProseBlock - For long text paragraphs
// ============================================================================

interface ProseBlockProps {
  paragraphs: string[];
  accentText?: string;
  firstLetterDrop?: boolean;
}

export function ProseBlock({
  paragraphs,
  accentText = "text-slate-300",
  firstLetterDrop = false,
}: ProseBlockProps) {
  const shouldUseColumns = paragraphs.length > 3;

  return (
    <div
      className={shouldUseColumns ? "columns-1 gap-6 md:columns-2" : "space-y-6"}
    >
      {paragraphs.map((paragraph, idx) => (
        <p
          key={idx}
          className={`leading-relaxed ${accentText} text-base md:text-lg`}
        >
          {firstLetterDrop && idx === 0 ? (
            <>
              <span className="float-left mr-2 text-5xl font-bold leading-none">
                {paragraph[0]}
              </span>
              {paragraph.slice(1)}
            </>
          ) : (
            paragraph
          )}
        </p>
      ))}
    </div>
  );
}

// ============================================================================
// TagList - Horizontal scrollable tag/keyword list
// ============================================================================

interface TagListProps {
  items: string[];
  accentBorder: string;
  accentText: string;
}

export function TagList({
  items,
  accentBorder,
  accentText,
}: TagListProps) {
  if (!items || items.length === 0) return null;

  return (
    <div
      role="list"
      className="flex flex-wrap gap-3"
    >
      {items.map((item, idx) => (
        <span
          key={idx}
          role="listitem"
          className={`rounded-full border ${accentBorder} bg-white/[0.03] px-4 py-2 text-sm font-medium ${accentText} transition-colors duration-200 hover:bg-white/[0.08]`}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

// ============================================================================
// DetailList - Bullet list with icon and title
// ============================================================================

interface DetailListProps {
  title: string;
  items?: string[];
  accentDot: string;
  accentText: string;
  icon?: ComponentType<{ className?: string }>;
}

export function DetailList({
  title,
  items = [],
  accentDot,
  accentText,
  icon: Icon,
}: DetailListProps) {
  if (!items || items.length === 0) return null;

  return (
    <div>
      <div className="mb-6 flex items-center gap-3">
        {Icon && <Icon className={`h-6 w-6 ${accentText}`} />}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>

      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex items-start gap-3"
          >
            <span
              className={`mt-2 h-2 w-2 rounded-full flex-shrink-0 ${accentDot}`}
              aria-hidden="true"
            />
            <span className="text-slate-300">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ============================================================================
// StatBadge - Small info stat display
// ============================================================================

interface StatBadgeProps {
  label: string;
  value?: string;
  accentText: string;
  icon: ComponentType<{ className?: string }>;
}

export function StatBadge({
  label,
  value,
  accentText,
  icon: Icon,
}: StatBadgeProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <p className="mb-3 text-sm font-medium text-slate-400">{label}</p>
      <div className="flex items-center gap-2">
        <Icon className={`h-5 w-5 ${accentText}`} />
        {value && <p className={`text-lg font-semibold ${accentText}`}>{value}</p>}
      </div>
    </div>
  );
}

// ============================================================================
// QuoteBlock - Italic blockquote
// ============================================================================

interface QuoteBlockProps {
  text?: string;
  accentBorder?: string;
}

export function QuoteBlock({
  text,
  accentBorder = "border-slate-600",
}: QuoteBlockProps) {
  if (!text) return null;

  return (
    <blockquote
      className={`border-l-4 ${accentBorder} pl-6 italic text-slate-300`}
    >
      "{text}"
    </blockquote>
  );
}

// ============================================================================
// AspectCard - Individual aspect type display
// ============================================================================

interface AspectCardProps {
  label: string;
  text: string;
  variant: "harmonious" | "tense";
}

export function AspectCard({
  label,
  text,
  variant,
}: AspectCardProps) {
  const variantStyles = {
    harmonious: {
      label: "bg-emerald-500/20 text-emerald-400",
      border: "border-emerald-500/30",
    },
    tense: {
      label: "bg-red-500/20 text-red-400",
      border: "border-red-500/30",
    },
  };

  const styles = variantStyles[variant];

  return (
    <div
      className={`rounded-2xl border ${styles.border} bg-white/[0.02] p-4 backdrop-blur`}
    >
      <div className={`mb-2 inline-block rounded-lg ${styles.label} px-3 py-1 text-sm font-semibold`}>
        {label}
      </div>
      <p className="text-sm text-slate-300">{text}</p>
    </div>
  );
}

// ============================================================================
// TableOfContents - Sticky sidebar or collapsible TOC
// ============================================================================

interface TOCSection {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  sections: TOCSection[];
  accentText: string;
}

export function TableOfContents({
  sections,
  accentText,
}: TableOfContentsProps) {
  if (!sections || sections.length === 0) return null;

  return (
    <nav aria-label="Table des matières" className="md:sticky md:top-8">
      {/* Mobile: collapsible via native <details> — no JS needed */}
      <details className="md:hidden rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur">
        <summary className="cursor-pointer px-5 py-3 text-sm font-medium text-slate-300 list-none flex items-center justify-between focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400">
          Table des matières
          <svg
            className="toc-chevron h-4 w-4 text-slate-500 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <ul className="space-y-1 px-3 pb-4">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`block rounded px-3 py-2 text-sm transition-colors ${accentText} hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400`}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </details>

      {/* Desktop: always visible */}
      <div className="hidden md:block rounded-2xl border border-white/5 bg-white/[0.02] p-5 backdrop-blur">
        <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Contenu
        </p>
        <ul className="space-y-1">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="block rounded px-3 py-1.5 text-[13px] transition-colors text-slate-400 hover:text-slate-200 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

// ============================================================================
// PlanetNav - Previous/Next navigation
// ============================================================================

interface PlanetNavItem {
  name: string;
  slug: string;
  subtitle?: string;
  imageSrc: string;
}

interface PlanetNavProps {
  prev?: PlanetNavItem;
  next?: PlanetNavItem;
}

export function PlanetNav({ prev, next }: PlanetNavProps) {
  return (
    <nav
      aria-label="Navigation entre planètes"
      className="grid grid-cols-2 gap-4 md:gap-6"
    >
      {/* Previous planet */}
      {prev ? (
        <Link
          href={`/planetes/${prev.slug}`}
          className="group relative overflow-hidden rounded-2xl border border-white/10 transition-all duration-300 hover:border-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
          aria-label={`Précédent : ${prev.name}`}
        >
          <div className="relative aspect-video overflow-hidden bg-white/5 backdrop-blur">
            <Image
              src={prev.imageSrc}
              alt={`planete ${prev.name}`}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div className="absolute inset-x-0 bottom-0 p-4">
            <p className="text-xs font-medium text-slate-400">Précédent</p>
            <p className="font-serif text-xl text-white group-hover:underline underline-offset-4 decoration-white/30">{prev.name}</p>
            {prev.subtitle && <p className="mt-1 text-xs text-slate-400">{prev.subtitle}</p>}
          </div>
        </Link>
      ) : (
        <div />
      )}

      {/* Next planet */}
      {next ? (
        <Link
          href={`/planetes/${next.slug}`}
          className="group relative overflow-hidden rounded-2xl border border-white/10 transition-all duration-300 hover:border-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
          aria-label={`Suivant : ${next.name}`}
        >
          <div className="relative aspect-video overflow-hidden bg-white/5 backdrop-blur">
            <Image
              src={next.imageSrc}
                  alt={`planete ${next.name}`}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div className="absolute inset-x-0 bottom-0 p-4 text-right">
            <p className="text-xs font-medium text-slate-400">Suivant</p>
            <p className="font-serif text-xl text-white group-hover:underline underline-offset-4 decoration-white/30">{next.name}</p>
            {next.subtitle && <p className="mt-1 text-xs text-slate-400">{next.subtitle}</p>}
          </div>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}

// ============================================================================
// Breadcrumbs - Schema.org compatible breadcrumbs
// ============================================================================

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Fil d'Ariane" className="mb-8 md:mb-12">
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {items.map((item, idx) => (
          <li key={item.href} className="flex items-center gap-2">
            <Link
              href={item.href}
              className="text-slate-400 transition-colors hover:text-slate-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
            >
              {item.name}
            </Link>
            {idx < items.length - 1 && (
              <span aria-hidden="true" className="text-slate-600">
                /
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
