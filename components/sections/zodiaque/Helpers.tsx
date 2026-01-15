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
    case "feu":
      return {
        ring: "focus-visible:ring-red-600/60",
        border: "border-red-600/60",
        bg: "bg-red-600/10",
        text: "text-red-600/70",
        glow:
          "shadow-[0_0_0_1px_rgba(251,146,60,0.22),0_14px_40px_rgba(251,146,60,0.10)]",
        dot: "bg-red-600/70",
        line: "bg-red-600/30",
      };
    case "terre":
      return {
        ring: "focus-visible:ring-amber-300/35",
        border: "border-amber-300/75",
        bg: "bg-amber-300/10",
        text: "text-amber-300",
        glow:
          "shadow-[0_0_0_1px_rgba(52,211,153,0.20),0_14px_40px_rgba(52,211,153,0.08)]",
        dot: "bg-amber-300/70",
        line: "bg-amber-300/25",
      };
    case "air":
      return {
        ring: "focus-visible:ring-green-500/65",
        border: "border-green-500/60",
        bg: "bg-green-500/15",
        text: "text-green-500",
        glow:
          "shadow-[0_0_0_1px_rgba(56,189,248,0.20),0_14px_40px_rgba(56,189,248,0.08)]",
        dot: "bg-green-500/70",
        line: "bg-green-500/25",
      };
    case "eau":
      return {
        ring: "focus-visible:ring-blue-700/35",
        border: "border-blue-700/60",
        bg: "bg-blue-700/20",
        text: "text-blue-700",
        glow:
          "shadow-[0_0_0_1px_rgba(129,140,248,0.20),0_14px_40px_rgba(129,140,248,0.08)]",
        dot: "bg-blue-700/70",
        line: "bg-blue-700/25",
      };
    default:
      return {
        ring: "focus-visible:ring-white/20",
        border: "border-white/10",
        bg: "bg-white/5",
        text: "text-text/90",
        glow: "",
        dot: "bg-white/30",
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