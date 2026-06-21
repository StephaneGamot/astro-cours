import Image from "next/image";
import { Link } from "@/i18n/navigation";
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
  // ⚡ className "mb-20 md:mb-28" remplacé par "ui-section" (cf globals.css)
  //    → ~16 bytes économisés par section × ~25 sections × 2 (HTML+RSC) = ~800 B
  return (
    <section
      id={id}
      className={className ? `ui-section ${className}` : "ui-section"}
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
  /** @deprecated Plus utilisé — l'accent était quasi-invisible au hover.
      Gardé pour compat ascendante avec page.tsx (passé partout). */
  accent?: { border: string };
  className?: string;
  id?: string;
  role?: string;
  ariaLabel?: string;
}

export function GlassCard({
  children,
  className = "",
  id,
  role,
  ariaLabel,
}: GlassCardProps) {
  // ⚡ Avant: 1 div outer (~190 chars) + 2 divs décoratifs (~200 chars)
  //          + 1 div wrapper "relative z-10" (~25 chars) × 50 GlassCards
  //          = ~21 KB d'attributs + duplication RSC = ~42 KB.
  //    Maintenant: 1 div + classe .ui-glass (~10 chars), effets gérés
  //                en CSS ::before (cf globals.css). Pas de wrapper interne.
  //    Le param `accent` n'est plus utilisé (l'effet hover de bordure était
  //    quasi-invisible et ne justifiait pas un div + style inline par carte).
  return (
    <div
      id={id}
      role={role}
      aria-label={ariaLabel}
      className={className ? `ui-glass ${className}` : "ui-glass"}
    >
      {children}
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
    <div role="list" className="ui-tag-row">
      {items.map((item, idx) => (
        <span
          key={idx}
          role="listitem"
          className={`ui-tag ${accentBorder} ${accentText}`}
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

  // ⚡ Avant: chaque <li> = ~85 chars de className × 333 items × 2 (HTML+RSC)
  //          ≈ 56 KB rien que pour les puces.
  //    Maintenant: classes courtes .ui-dl-* (cf globals.css).
  return (
    <div>
      <div className="ui-dl-head">
        {Icon && <Icon className={`h-6 w-6 ${accentText}`} />}
        <h3 className="ui-dl-title">{title}</h3>
      </div>

      <ul className="ui-dl-list">
        {items.map((item, idx) => (
          <li key={idx} className="ui-dl-item">
            <span
              className={`ui-dl-dot ${accentDot}`}
              aria-hidden="true"
            />
            <span className="ui-dl-text">{item}</span>
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

  // ⚡ Classe .ui-quote remplace 57 chars × 50 occurrences (cf globals.css)
  return (
    <blockquote className={`ui-quote ${accentBorder}`}>
      &quot;{text}&quot;
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
  // ⚡ Avant : ~170 chars de className × 54 cartes × 2 (HTML+RSC) = ~18 KB
  //    Maintenant : .ui-aspect-card + .ui-aspect-label (cf globals.css).
  const styles =
    variant === "harmonious"
      ? { label: "bg-emerald-500/20 text-emerald-400", border: "border-emerald-500/30" }
      : { label: "bg-red-500/20 text-red-400", border: "border-red-500/30" };

  return (
    <div className={`ui-aspect-card ${styles.border}`}>
      <div className={`ui-aspect-label ${styles.label}`}>{label}</div>
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
  title?: string;
  contentsLabel?: string;
}

export function TableOfContents({
  sections,
  accentText,
  title = "Table des matières",
  contentsLabel = "Contenu",
}: TableOfContentsProps) {
  if (!sections || sections.length === 0) return null;

  return (
    <nav aria-label={title} className="md:sticky md:top-8">
      {/* Mobile: collapsible via native <details> — no JS needed */}
      <details className="md:hidden rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur">
        <summary className="cursor-pointer px-5 py-3 text-sm font-medium text-slate-300 list-none flex items-center justify-between focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400">
          {title}
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
          {contentsLabel}
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
  labels?: { nav: string; prev: string; next: string; prevAria: string; nextAria: string };
}

export function PlanetNav({
  prev,
  next,
  labels = {
    nav: "Navigation entre planètes",
    prev: "Précédent",
    next: "Suivant",
    prevAria: "",
    nextAria: "",
  },
}: PlanetNavProps) {
  return (
    <nav
      aria-label={labels.nav}
      className="grid grid-cols-2 gap-4 md:gap-6"
    >
      {/* Previous planet */}
      {prev ? (
        <Link
          href={`/planetes/${prev.slug}`}
          className="group relative overflow-hidden rounded-2xl border border-white/10 transition-all duration-300 hover:border-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
          aria-label={labels.prevAria || `${labels.prev} : ${prev.name}`}
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
            <p className="text-xs font-medium text-slate-400">{labels.prev}</p>
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
          aria-label={labels.nextAria || `${labels.next} : ${next.name}`}
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
            <p className="text-xs font-medium text-slate-400">{labels.next}</p>
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
