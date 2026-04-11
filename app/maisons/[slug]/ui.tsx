import Image from "next/image";
import Link from "next/link";
import type { ReactNode, ComponentType } from "react";

/* ================================================================== */
/*  AuraGlow                                                          */
/* ================================================================== */

export function AuraGlow({ aura }: { aura: string }) {
  return (
    <div
      className={`pointer-events-none fixed inset-0 bg-gradient-to-b ${aura}`}
      aria-hidden="true"
      style={{ opacity: 0.12 }}
    />
  );
}

/* ================================================================== */
/*  Section — semantic wrapper with aria-labelledby                   */
/* ================================================================== */

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
      className={`mb-16 md:mb-24 ${className}`}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      {children}
    </section>
  );
}

/* ================================================================== */
/*  SectionHeading                                                     */
/* ================================================================== */

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  icon?: ComponentType<{ className?: string }>;
  dot: string;
  text: string;
  id?: string;
  tag?: "h2" | "h3";
}

export function SectionHeading({
  title,
  subtitle,
  icon: Icon,
  dot,
  text,
  id,
  tag: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div className="mb-10 text-center md:mb-14">
      {Icon && (
        <div className="mb-4 flex justify-center">
          <Icon className={`h-10 w-10 ${text}`} />
        </div>
      )}
      <Tag
        id={id ? `${id}-heading` : undefined}
        className="mb-3 font-serif text-3xl font-bold md:text-4xl"
      >
        {title}
      </Tag>
      <div className={`mx-auto mb-4 h-1 w-16 rounded-full ${dot}`} />
      {subtitle && <p className={`text-base ${text}`}>{subtitle}</p>}
    </div>
  );
}

/* ================================================================== */
/*  GlassCard                                                          */
/* ================================================================== */

export function GlassCard({
  children,
  border,
  className = "",
  id,
}: {
  children: ReactNode;
  border: string;
  className?: string;
  id?: string;
}) {
  return (
    <div
      id={id}
      className={`group relative overflow-hidden rounded-3xl border ${border} bg-white/[0.02] backdrop-blur-xl transition-all duration-300 hover:border-white/10 hover:shadow-2xl hover:shadow-white/5 ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

/* ================================================================== */
/*  ProseBlock                                                         */
/* ================================================================== */

export function ProseBlock({
  text,
  className = "",
}: {
  text: string | string[];
  className?: string;
}) {
  const paragraphs = Array.isArray(text) ? text : [text];
  return (
    <div className={`space-y-5 ${className}`}>
      {paragraphs.map((p, i) => (
        <p key={i} className="text-sm leading-relaxed text-text/85 md:text-base">
          {i === 0 ? (
            <>
              <span className="float-left mr-2 font-serif text-4xl font-bold leading-none text-white/80">
                {p[0]}
              </span>
              {p.slice(1)}
            </>
          ) : (
            p
          )}
        </p>
      ))}
    </div>
  );
}

/* ================================================================== */
/*  TagList                                                            */
/* ================================================================== */

export function TagList({
  items,
  border,
  text,
}: {
  items: string[];
  border: string;
  text: string;
}) {
  if (!items?.length) return null;
  return (
    <div role="list" className="flex flex-wrap gap-2">
      {items.map((item, i) => (
        <span
          key={i}
          role="listitem"
          className={`rounded-full border ${border} bg-white/[0.03] px-3.5 py-1.5 text-sm font-medium ${text} transition-colors hover:bg-white/[0.07]`}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

/* ================================================================== */
/*  DetailList — bullet list with optional icon                        */
/* ================================================================== */

export function DetailList({
  title,
  items,
  dot,
  text,
  icon: Icon,
}: {
  title: string;
  items?: string[];
  dot: string;
  text: string;
  icon?: ComponentType<{ className?: string }>;
}) {
  if (!items?.length) return null;
  return (
    <div>
      <div className="mb-5 flex items-center gap-3">
        {Icon && <Icon className={`h-5 w-5 ${text}`} />}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <ul className="space-y-2.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span
              className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`}
              aria-hidden="true"
            />
            <span className="text-sm text-slate-300">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ================================================================== */
/*  TriplePanels — Forces / Ombres / Besoins layout                    */
/* ================================================================== */

export function TriplePanels({
  panels,
  border,
  dot,
}: {
  panels: Array<{ label: string; items?: string[] }>;
  border: string;
  dot: string;
}) {
  const populated = panels.filter((p) => p.items && p.items.length > 0);
  if (populated.length === 0) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {populated.map((panel) => (
        <div
          key={panel.label}
          className={`rounded-3xl border ${border} bg-white/[0.02] p-6`}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted">
            {panel.label}
          </p>
          <ul className="space-y-2">
            {panel.items!.map((x, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-text/85">
                <span
                  className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`}
                  aria-hidden="true"
                />
                {x}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/* ================================================================== */
/*  PlanetInHouseCard                                                  */
/* ================================================================== */

export function PlanetInHouseCard({
  planetName,
  planetSlug,
  title,
  text,
  keywords,
  border,
}: {
  planetName: string;
  planetSlug: string;
  title: string;
  text: string;
  keywords?: string[];
  border: string;
}) {
  return (
    <article className={`rounded-3xl border ${border} bg-white/[0.02] p-6`}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="font-serif text-xl font-semibold">{title}</h3>
        </div>
        <div
          className={`relative h-12 w-12 shrink-0 overflow-hidden rounded-2xl border ${border} bg-white/5`}
          aria-hidden="true"
        >
          <Image
            src={`/images/planetes/${planetSlug}.webp`}
            alt={planetName}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
      </div>

      {keywords && keywords.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {keywords.map((k, i) => (
            <span
              key={i}
              className={`rounded-full border ${border} bg-white/5 px-2.5 py-0.5 text-xs`}
            >
              {k}
            </span>
          ))}
        </div>
      )}

      <p className="mt-4 text-sm leading-relaxed text-text/85">{text}</p>
    </article>
  );
}

/* ================================================================== */
/*  TableOfContents — native details/summary (no JS)                   */
/* ================================================================== */

export function TableOfContents({
  sections,
  text,
}: {
  sections: Array<{ id: string; label: string }>;
  text: string;
}) {
  if (!sections?.length) return null;

  return (
    <nav aria-label="Table des matières" className="lg:sticky lg:top-8">
      {/* Mobile */}
      <details className="lg:hidden rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur">
        <summary className="flex cursor-pointer items-center justify-between px-5 py-3 text-sm font-medium text-slate-300 list-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400">
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
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`block rounded px-3 py-2 text-sm transition-colors ${text} hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400`}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </details>

      {/* Desktop */}
      <div className="hidden lg:block rounded-2xl border border-white/5 bg-white/[0.02] p-5 backdrop-blur">
        <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Contenu
        </p>
        <ul className="space-y-1">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="block rounded px-3 py-1.5 text-[13px] text-slate-400 transition-colors hover:text-slate-200 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

/* ================================================================== */
/*  HouseNav — Previous / Next navigation                              */
/* ================================================================== */

export function HouseNav({
  prev,
  next,
  border,
  ring,
}: {
  prev?: { slug: string; titreCourt: string; nom: string; numero: number; roman: string };
  next?: { slug: string; titreCourt: string; nom: string; numero: number; roman: string };
  border: string;
  ring: string;
}) {
  return (
    <nav
      className="grid gap-4 sm:grid-cols-2"
      aria-label="Navigation entre les maisons"
    >
      {prev ? (
        <Link
          href={`/maisons/${prev.slug}`}
          className={`group rounded-3xl border ${border} bg-white/[0.02] p-5 transition hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 ${ring}`}
          aria-label={`Maison précédente : ${prev.titreCourt}`}
        >
          <div className="flex items-center gap-4">
            <div className="min-w-0 flex-1">
              <p className="text-xs uppercase tracking-wide text-muted">Précédent</p>
              <p className="mt-1 font-serif text-xl group-hover:underline underline-offset-4 decoration-white/30">
                {prev.titreCourt} — {prev.nom}
              </p>
            </div>
            <div
              className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-2xl border ${border} bg-white/5`}
              aria-hidden="true"
            >
              <Image
                src={`/images/maisons/${prev.roman}.webp`}
                alt={prev.titreCourt}
                fill
                className="object-cover transition duration-300 group-hover:scale-[1.04]"
                sizes="96px"
              />
            </div>
          </div>
        </Link>
      ) : (
        <div className="hidden sm:block" />
      )}

      {next ? (
        <Link
          href={`/maisons/${next.slug}`}
          className={`group rounded-3xl border ${border} bg-white/[0.02] p-5 transition hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 ${ring}`}
          aria-label={`Maison suivante : ${next.titreCourt}`}
        >
          <div className="flex items-center gap-4">
            <div
              className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-2xl border ${border} bg-white/5`}
              aria-hidden="true"
            >
              <Image
                src={`/images/maisons/${next.roman}.webp`}
                alt={next.titreCourt}
                fill
                className="object-cover transition duration-300 group-hover:scale-[1.04]"
                sizes="96px"
              />
            </div>
            <div className="min-w-0 flex-1 text-right">
              <p className="text-xs uppercase tracking-wide text-muted">Suivant</p>
              <p className="mt-1 font-serif text-xl group-hover:underline underline-offset-4 decoration-white/30">
                {next.titreCourt} — {next.nom}
              </p>
            </div>
          </div>
        </Link>
      ) : (
        <div className="hidden sm:block" />
      )}
    </nav>
  );
}

/* ================================================================== */
/*  Breadcrumbs                                                        */
/* ================================================================== */

export function Breadcrumbs({
  items,
}: {
  items: Array<{ name: string; href: string }>;
}) {
  if (!items?.length) return null;
  return (
    <nav aria-label="Fil d'Ariane" className="mb-8 md:mb-12">
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {items.map((item, i) => (
          <li key={item.href} className="flex items-center gap-2">
            <Link
              href={item.href}
              className="text-slate-400 transition-colors hover:text-slate-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
            >
              {item.name}
            </Link>
            {i < items.length - 1 && (
              <span aria-hidden="true" className="text-slate-600">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
