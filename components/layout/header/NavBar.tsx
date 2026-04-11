"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/public/astro-cours-logo.webp";
import { planetes, zodiaque, maisons, autre, type Item } from "./ConfigNav";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/* ────────────────────────────────────────────────────────────────
   Utility
   ──────────────────────────────────────────────────────────────── */

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/* ────────────────────────────────────────────────────────────────
   Theme tokens — one per section, all literal strings for Tailwind
   ──────────────────────────────────────────────────────────────── */

type Accent = {
  text: string;
  textHover: string;
  bg: string;
  bgHover: string;
  border: string;
  borderHover: string;
  dot: string;
  glow: string;
  ring: string;
};

const ACCENT: Record<string, Accent> = {
  planetes: {
    text: "text-sky-400",
    textHover: "group-hover:text-sky-300",
    bg: "bg-sky-500/10",
    bgHover: "group-hover:bg-sky-500/10",
    border: "border-sky-500/20",
    borderHover: "group-hover:border-sky-500/30",
    dot: "bg-sky-400",
    glow: "shadow-[0_0_6px_theme(colors.sky.400)]",
    ring: "focus-visible:ring-sky-400",
  },
  zodiaque: {
    text: "text-violet-400",
    textHover: "group-hover:text-violet-300",
    bg: "bg-violet-500/10",
    bgHover: "group-hover:bg-violet-500/10",
    border: "border-violet-500/20",
    borderHover: "group-hover:border-violet-500/30",
    dot: "bg-violet-400",
    glow: "shadow-[0_0_6px_theme(colors.violet.400)]",
    ring: "focus-visible:ring-violet-400",
  },
  maisons: {
    text: "text-emerald-400",
    textHover: "group-hover:text-emerald-300",
    bg: "bg-emerald-500/10",
    bgHover: "group-hover:bg-emerald-500/10",
    border: "border-emerald-500/20",
    borderHover: "group-hover:border-emerald-500/30",
    dot: "bg-emerald-400",
    glow: "shadow-[0_0_6px_theme(colors.emerald.400)]",
    ring: "focus-visible:ring-emerald-400",
  },
  annexes: {
    text: "text-amber-400",
    textHover: "group-hover:text-amber-300",
    bg: "bg-amber-500/10",
    bgHover: "group-hover:bg-amber-500/10",
    border: "border-amber-500/20",
    borderHover: "group-hover:border-amber-500/30",
    dot: "bg-amber-400",
    glow: "shadow-[0_0_6px_theme(colors.amber.400)]",
    ring: "focus-visible:ring-amber-400",
  },
};

/* ────────────────────────────────────────────────────────────────
   Section catalogue
   ──────────────────────────────────────────────────────────────── */

type Section = {
  key: string;
  label: string;
  items: Item[];
  columns: 1 | 2;
  pathPrefix: string | null;
  panelAlign: "start" | "center" | "end";
};

const SECTIONS: Section[] = [
  { key: "planetes", label: "Planètes", items: planetes, columns: 2, pathPrefix: "/planetes", panelAlign: "start" },
  { key: "zodiaque", label: "Zodiaque", items: zodiaque, columns: 2, pathPrefix: "/signes", panelAlign: "center" },
  { key: "maisons", label: "Maisons", items: maisons, columns: 2, pathPrefix: "/maisons", panelAlign: "center" },
  { key: "annexes", label: "Annexes", items: autre, columns: 2, pathPrefix: null, panelAlign: "end" },
];

/* ────────────────────────────────────────────────────────────────
   Active-state helpers
   ──────────────────────────────────────────────────────────────── */

function isSectionActive(pathname: string, s: Section): boolean {
  if (s.pathPrefix) return pathname.startsWith(s.pathPrefix);
  return s.items.some((i) => pathname === i.href || pathname.startsWith(i.href + "/"));
}

function isItemActive(pathname: string, href: string): boolean {
  return pathname === href || pathname.startsWith(href + "/");
}

const PANEL_ALIGN = {
  start: "left-0",
  center: "left-1/2 -translate-x-1/2",
  end: "right-0",
} as const;

/* ════════════════════════════════════════════════════════════════
   NavBar — root component
   ════════════════════════════════════════════════════════════════ */

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const check = () => setScrolled(window.scrollY > 4);
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  return (
    <>
      {/* Skip-to-content — WCAG 2.4.1 */}
  

      <header
        className={cn(
          "sticky top-0 z-50 w-full",
          "transition-[background-color,box-shadow,border-color] duration-500 ease-out motion-reduce:duration-0",
          scrolled
            ? "bg-[#09090b]/[.92] shadow-[0_1px_20px_rgba(0,0,0,.4)] border-b border-white/[.06]"
            : "bg-transparent border-b border-transparent",
        )}
      >
        {/* Gradient accent line */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent"
        />

        {/* Blur layer */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 backdrop-blur-2xl"
        />

        <nav
          aria-label="Navigation principale"
          className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8 lg:py-3.5"
        >
          {/* ── Logo ───────────────────────────── */}
          <div className="flex shrink-0 lg:flex-1">
            <Link
              href="/"
              aria-current={pathname === "/" ? "page" : undefined}
              className="group rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]"
            >
              <span className="sr-only">Astro Cours — Accueil</span>
              <Image
                alt="Pleine lune permettant d'illustrer le logo d'Astro Cours"
                src={Logo}
                className="h-9 w-auto sm:h-10 lg:h-11 transition-[filter] duration-300 drop-shadow-[0_0_10px_rgba(139,92,246,.12)] group-hover:drop-shadow-[0_0_18px_rgba(139,92,246,.3)]"
                priority
              />
            </Link>
          </div>

          {/* ── Desktop navigation ─────────────── */}
          <PopoverGroup className="hidden lg:flex lg:items-center lg:gap-x-0.5">
            {SECTIONS.map((section) => (
              <DesktopDropdown
                key={section.key}
                section={section}
                accent={ACCENT[section.key]}
                active={isSectionActive(pathname, section)}
                pathname={pathname}
              />
            ))}

            <Link
              href="/blog"
              aria-current={pathname.startsWith("/blog") ? "page" : undefined}
              className={cn(
                "relative mx-1 flex items-center rounded-lg px-3 py-2 text-[15px] font-medium transition-colors duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]",
                pathname.startsWith("/blog")
                  ? "text-white"
                  : "text-slate-300 hover:text-white hover:bg-white/[.04]",
              )}
            >
              Blog
              {pathname.startsWith("/blog") && <ActiveDot dot="bg-violet-400" glow="shadow-[0_0_6px_theme(colors.violet.400)]" />}
            </Link>
          </PopoverGroup>

          {/* Spacer */}
          <div className="hidden lg:flex lg:flex-1" />

          {/* ── Mobile toggle ──────────────────── */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            className="lg:hidden rounded-lg p-2.5 text-slate-300 transition-colors hover:bg-white/[.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]"
          >
            <span className="sr-only">Ouvrir le menu</span>
            <Bars3Icon className="size-6" aria-hidden="true" />
          </button>
        </nav>
      </header>

      {/* ── Mobile drawer ────────────────────── */}
      <Dialog
        id="mobile-nav"
        open={mobileOpen}
        onClose={setMobileOpen}
        className="lg:hidden"
      >
        {/* Scrim */}
        <div
          aria-hidden="true"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
        />

        <DialogPanel
          transition
          className={cn(
            "fixed inset-y-0 right-0 z-50 w-full overflow-y-auto overscroll-contain sm:max-w-sm",
            "bg-[#0a0a0c] border-l border-white/[.06] shadow-2xl",
            "transition duration-300 ease-out data-[closed]:translate-x-full",
          )}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/[.06]">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            >
              <span className="sr-only">Astro Cours — Accueil</span>
              <Image alt="" src={Logo} className="h-9 w-auto" />
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg p-2.5 text-slate-400 transition-colors hover:bg-white/[.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            >
              <span className="sr-only">Fermer le menu</span>
              <XMarkIcon className="size-6" aria-hidden="true" />
            </button>
          </div>

          {/* Body */}
          <nav aria-label="Menu mobile" className="px-4 py-3">
            <div className="space-y-1">
              {SECTIONS.map((section) => (
                <MobileSection
                  key={section.key}
                  section={section}
                  accent={ACCENT[section.key]}
                  active={isSectionActive(pathname, section)}
                  pathname={pathname}
                  onNavigate={() => setMobileOpen(false)}
                />
              ))}

              <Link
                href="/blog"
                onClick={() => setMobileOpen(false)}
                aria-current={pathname.startsWith("/blog") ? "page" : undefined}
                className={cn(
                  "flex items-center rounded-xl px-4 py-3.5 text-[15px] font-semibold transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400",
                  pathname.startsWith("/blog")
                    ? "text-white bg-white/[.04]"
                    : "text-slate-200 hover:text-white hover:bg-white/[.04]",
                )}
              >
                Blog
              </Link>
            </div>
          </nav>
        </DialogPanel>
      </Dialog>
    </>
  );
}

/* ════════════════════════════════════════════════════════════════
   Desktop dropdown (Popover)
   ════════════════════════════════════════════════════════════════ */

function DesktopDropdown({
  section,
  accent: a,
  active,
  pathname,
}: {
  section: Section;
  accent: Accent;
  active: boolean;
  pathname: string;
}) {
  return (
    <Popover className="relative">
      {/* Trigger */}
      <PopoverButton
        className={cn(
          "group relative flex items-center gap-x-1 rounded-lg px-3 py-2 text-[15px] font-medium outline-none transition-colors duration-200",
          "focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]",
          active
            ? "text-white"
            : "text-slate-300 hover:text-white hover:bg-white/[.04] data-[open]:text-white",
        )}
      >
        {section.label}
        <ChevronDownIcon
          className="ml-0.5 size-3.5 text-slate-500 transition-transform duration-200 group-data-[open]:rotate-180 group-data-[open]:text-slate-300"
          aria-hidden="true"
        />
        {active && <ActiveDot dot={a.dot} glow={a.glow} />}
      </PopoverButton>

      {/* Panel */}
      <PopoverPanel
        transition
        className={cn(
          "absolute z-20 mt-3 overflow-hidden rounded-2xl",
          "bg-[#0c0c0f]/[.97] backdrop-blur-2xl",
          "border border-white/[.07] shadow-[0_24px_64px_-16px_rgba(0,0,0,.65)]",
          "ring-1 ring-inset ring-white/[.03]",
          /* transition */
          "transition duration-200 ease-out",
          "data-[closed]:translate-y-1.5 data-[closed]:opacity-0 data-[closed]:scale-[.98]",
          /* width */
          section.columns === 2 ? "w-[min(560px,calc(100vw-2rem))]" : "w-80",
          /* alignment */
          PANEL_ALIGN[section.panelAlign],
        )}
      >
        <div
          className={cn(
            "p-2.5 grid gap-0.5",
            section.columns === 2 ? "grid-cols-2" : "grid-cols-1",
          )}
        >
          {section.items.map((item) => {
            const itemActive = isItemActive(pathname, item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                aria-current={itemActive ? "page" : undefined}
                className={cn(
                  "group flex items-center gap-x-3 rounded-xl px-3 py-2.5 transition-all duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset",
                  a.ring,
                  itemActive
                    ? cn(a.bg, "border", a.border)
                    : "border border-transparent hover:bg-white/[.03]",
                )}
              >
                {/* Icon */}
                <span
                  className={cn(
                    "flex size-10 shrink-0 items-center justify-center rounded-lg border transition-colors duration-200",
                    itemActive
                      ? cn(a.bg, a.border)
                      : cn("bg-white/[.02] border-white/[.06]", a.bgHover, a.borderHover),
                  )}
                >
                  <item.icon
                    className={cn(
                      "size-5 transition-colors duration-200",
                      itemActive ? a.text : cn("text-slate-400", a.textHover),
                    )}
                    aria-hidden={true}
                  />
                </span>

                {/* Label */}
                <span className="min-w-0">
                  <span
                    className={cn(
                      "block text-sm font-semibold leading-tight transition-colors duration-200",
                      itemActive ? "text-white" : cn("text-slate-200", a.textHover),
                    )}
                  >
                    {item.name}
                  </span>
                  <span className="block mt-0.5 text-[13px] leading-snug text-slate-400 truncate">
                    {item.description}
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </PopoverPanel>
    </Popover>
  );
}

/* ════════════════════════════════════════════════════════════════
   Mobile section (Disclosure accordion)
   ════════════════════════════════════════════════════════════════ */

function MobileSection({
  section,
  accent: a,
  active,
  pathname,
  onNavigate,
}: {
  section: Section;
  accent: Accent;
  active: boolean;
  pathname: string;
  onNavigate: () => void;
}) {
  return (
    <Disclosure as="div" defaultOpen={active}>
      <DisclosureButton
        className={cn(
          "group flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-semibold transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400",
          active
            ? cn("text-white", a.bg)
            : "text-slate-200 hover:text-white hover:bg-white/[.04]",
        )}
      >
        <span className="flex items-center gap-2">
          {section.label}
          {active && (
            <span
              aria-hidden="true"
              className={cn("inline-block size-1.5 rounded-full", a.dot)}
            />
          )}
        </span>
        <ChevronDownIcon
          className="size-4 text-slate-500 transition-transform duration-200 group-data-[open]:rotate-180 group-data-[open]:text-slate-300"
          aria-hidden="true"
        />
      </DisclosureButton>

      <DisclosurePanel
        transition
        className="origin-top transition duration-200 ease-out data-[closed]:opacity-0 data-[closed]:-translate-y-1"
      >
        <div className="grid grid-cols-1 gap-0.5 px-2 pb-3 pt-1">
          {section.items.map((item) => {
            const itemActive = isItemActive(pathname, item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onNavigate}
                aria-current={itemActive ? "page" : undefined}
                className={cn(
                  "group flex items-center gap-x-3 rounded-xl px-3 py-2.5 transition-colors duration-150",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset",
                  a.ring,
                  itemActive
                    ? cn(a.bg, "border", a.border)
                    : "border border-transparent hover:bg-white/[.03]",
                )}
              >
                <span
                  className={cn(
                    "flex size-9 shrink-0 items-center justify-center rounded-lg border transition-colors duration-150",
                    itemActive
                      ? cn(a.bg, a.border)
                      : "bg-white/[.02] border-white/[.06]",
                  )}
                >
                  <item.icon
                    className={cn(
                      "size-5 transition-colors duration-150",
                      itemActive ? a.text : "text-slate-400",
                    )}
                    aria-hidden={true}
                  />
                </span>

                <span className="min-w-0">
                  <span
                    className={cn(
                      "block text-sm font-semibold transition-colors duration-150",
                      itemActive ? "text-white" : "text-slate-200 group-hover:text-white",
                    )}
                  >
                    {item.name}
                  </span>
                  <span className="block text-xs text-slate-400 truncate">
                    {item.description}
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}

/* ════════════════════════════════════════════════════════════════
   Active indicator — glowing dot under section label
   ════════════════════════════════════════════════════════════════ */

function ActiveDot({ dot, glow }: { dot: string; glow: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "absolute -bottom-1 left-1/2 size-1 -translate-x-1/2 rounded-full",
        dot,
        glow,
      )}
    />
  );
}