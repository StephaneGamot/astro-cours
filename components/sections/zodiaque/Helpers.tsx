import zodiaque from "./../../../data/zodiaque.json";
import signes from "../../../data/signes.details.json";

type Sign = (typeof signes)[number];
type ZItem = (typeof zodiaque)[number];


function normalizeSlug(raw: string) {
  return decodeURIComponent(raw).trim().toLowerCase();
}

export function normalizeElement(el?: string) {
  const v = (el ?? "").toLowerCase();
  if (v.includes("feu")) return "feu";
  if (v.includes("terre")) return "terre";
  if (v.includes("air")) return "air";
  if (v.includes("eau")) return "eau";
  return "neutre";
}

export function elementTheme(el?: string) {
  const e = normalizeElement(el);
  switch (e) {
    case "feu": // Or Brûlé / Rouge Royal
      return {
        ring: "focus-visible:ring-orange-500/30",
        border: "border-orange-500/20",
        bg: "bg-gradient-to-br from-orange-500/10 to-red-600/5",
        text: "text-orange-200",
        accent: "text-orange-400",
        glow: "shadow-[0_0_50px_-12px_rgba(234,88,12,0.3)]",
        dot: "bg-orange-500",
        line: "bg-gradient-to-r from-transparent via-orange-500/50 to-transparent",
      };
    case "terre": // Vert Émeraude / Ambre Profond
      return {
        ring: "focus-visible:ring-emerald-500/30",
        border: "border-emerald-500/20",
        bg: "bg-gradient-to-br from-emerald-500/10 to-amber-600/5",
        text: "text-emerald-100",
        accent: "text-emerald-400",
        glow: "shadow-[0_0_50px_-12px_rgba(16,185,129,0.25)]",
        dot: "bg-emerald-500",
        line: "bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent",
      };
    case "air": // Bleu Céleste / Argent
      return {
        ring: "focus-visible:ring-sky-400/30",
        border: "border-sky-400/20",
        bg: "bg-gradient-to-br from-sky-400/10 to-indigo-600/5",
        text: "text-sky-100",
        accent: "text-sky-400",
        glow: "shadow-[0_0_50px_-12px_rgba(56,189,248,0.25)]",
        dot: "bg-sky-400",
        line: "bg-gradient-to-r from-transparent via-sky-400/50 to-transparent",
      };
    case "eau": // Indigo Profond / Améthyste
      return {
        ring: "focus-visible:ring-indigo-500/30",
        border: "border-indigo-500/20",
        bg: "bg-gradient-to-br from-indigo-500/10 to-purple-600/5",
        text: "text-indigo-100",
        accent: "text-indigo-400",
        glow: "shadow-[0_0_50px_-12px_rgba(99,102,241,0.25)]",
        dot: "bg-indigo-500",
        line: "bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent",
      };
    default:
      return {
        ring: "focus-visible:ring-white/20",
        border: "border-white/10",
        bg: "bg-white/5",
        text: "text-slate-200",
        accent: "text-white",
        glow: "",
        dot: "bg-white",
        line: "bg-white/10",
      };
  }
}

export function getSign(slug: string): Sign | undefined {
  return (signes as Sign[]).find((s) => s.slug === slug);
}

export function getSignIndex(slug: string) {
  return (signes as Sign[]).findIndex((s) => s.slug === slug);
}

export function getZodiaqueItemBySlug(slug: string): ZItem | undefined {
  const s = normalizeSlug(slug);
  return (zodiaque as ZItem[]).find((x) => x.slug === s);
}

export function generateStaticParams() {
  return (signes as Sign[]).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const sign = getSign(slug);
  if (!sign) return {};

  return {
    title: `${sign.name} — Cours d’astrologie`,
    description: `${sign.name} : période, polarité, mode, élément, maîtrises, symbolique et interprétation.`,
  };
}