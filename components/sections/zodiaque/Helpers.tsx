import zodiaque from "@/data/zodiaque.json";
// Utilisons l'index ou la liste des signes selon ta structure
import signes from "@/data/signes.details.json";

type Sign = (typeof signes)[number];
type ZItem = (typeof zodiaque)[number];

export function normalizeSlug(raw: string) {
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

/**
 * Thèmes chromatiques "Haute Couture" pour le zodiaque.
 * Utilise ces classes pour styliser dynamiquement les pages des signes.
 */
export function elementTheme(el?: string) {
  const e = normalizeElement(el);
  switch (e) {
    case "feu": // Or Brûlé / Rouge Royal
      return {
        ring: "focus-visible:ring-orange-500/50",
        border: "border-orange-500/20",
        bg: "bg-gradient-to-br from-orange-500/10 to-red-600/5",
        bgSolid: "bg-orange-500/10",
        text: "text-orange-400",
        accent: "text-orange-300",
        glow: "shadow-[0_0_40px_rgba(234,88,12,0.15)]",
        dot: "bg-orange-500",
        line: "bg-gradient-to-r from-transparent via-orange-500/50 to-transparent",
      };
    case "terre": // Vert Émeraude / Ambre Profond
      return {
        ring: "focus-visible:ring-emerald-500/50",
        border: "border-emerald-500/20",
        bg: "bg-gradient-to-br from-emerald-500/10 to-amber-600/5",
        bgSolid: "bg-emerald-500/10",
        text: "text-emerald-400",
        accent: "text-emerald-300",
        glow: "shadow-[0_0_40px_rgba(16,185,129,0.15)]",
        dot: "bg-emerald-500",
        line: "bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent",
      };
    case "air": // Bleu Céleste / Argent
      return {
        ring: "focus-visible:ring-sky-400/50",
        border: "border-sky-400/20",
        bg: "bg-gradient-to-br from-sky-400/10 to-indigo-600/5",
        bgSolid: "bg-sky-400/10",
        text: "text-sky-400",
        accent: "text-sky-300",
        glow: "shadow-[0_0_40px_rgba(56,189,248,0.15)]",
        dot: "bg-sky-400",
        line: "bg-gradient-to-r from-transparent via-sky-400/50 to-transparent",
      };
    case "eau": // Indigo Profond / Améthyste
      return {
        ring: "focus-visible:ring-violet-500/50",
        border: "border-violet-500/20",
        bg: "bg-gradient-to-br from-violet-500/10 to-fuchsia-600/5",
        bgSolid: "bg-violet-500/10",
        text: "text-violet-400",
        accent: "text-violet-300",
        glow: "shadow-[0_0_40px_rgba(139,92,246,0.15)]",
        dot: "bg-violet-500",
        line: "bg-gradient-to-r from-transparent via-violet-500/50 to-transparent",
      };
    default:
      return {
        ring: "focus-visible:ring-white/30",
        border: "border-white/10",
        bg: "bg-white/5",
        bgSolid: "bg-white/5",
        text: "text-slate-300",
        accent: "text-white",
        glow: "shadow-[0_0_40px_rgba(255,255,255,0.05)]",
        dot: "bg-white",
        line: "bg-gradient-to-r from-transparent via-white/20 to-transparent",
      };
  }
}

export function getSign(slug: string): Sign | undefined {
  return (signes as Sign[]).find((s) => s.slug === slug);
}

export function getZodiaqueItemBySlug(slug: string): ZItem | undefined {
  const s = normalizeSlug(slug);
  return (zodiaque as ZItem[]).find((x) => x.slug === s);
}

export function generateStaticParams() {
  return (signes as Sign[]).map((s) => ({ slug: s.slug }));
}