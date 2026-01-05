import planetes from "../../../data/planetes.details.json";

export type Planet = {
  slug: string;
  name: string;
  categorie?: string;
  fonction?: string;
  motCle?: string;
  rythme?: string;
  domicile?: string;
  exaltation?: string;
  exil?: string;
  chute?: string;
  symbolique?: string;
  resume?: string[];
  motsCles?: string[];
  forces?: string[];
  ombres?: string[];
  expression?: {
    aligne?: string[];
    exces?: string[];
    manque?: string[];
  };
  dansLesMaisons?: { maison: number; texte: string }[];
  aspects?: { aspect: string; texte: string }[];
  dansUnTheme?: string[];
  image?: { src: string; alt?: string };
  hero?: { src: string; alt?: string };
};

export const PLANETS = planetes as Planet[];

export function getPlanet(slug: string): Planet | undefined {
  return PLANETS.find((p) => p.slug === slug);
}

export function getPlanetIndex(slug: string) {
  return PLANETS.findIndex((p) => p.slug === slug);
}

export function has<T>(v: T | undefined | null): v is T {
  return v !== undefined && v !== null;
}

export function planetThumbSrc(slug: string) {
  return `/images/planetes/${slug}.webp`;
}

/** Thème premium par planète */
export function planetTheme(slug?: string) {
  const s = (slug ?? "").toLowerCase();

  const map: Record<
    string,
    {
      border: string;
      bg: string;
      text: string;
      dot: string;
      line: string;
      ring: string;
      glow: string;
      aura: string;
    }
  > = {
    soleil: {
      border: "border-amber-400/30",
      bg: "bg-amber-500/10",
      text: "text-amber-200",
      dot: "bg-amber-400/70",
      line: "bg-amber-400/25",
      ring: "focus-visible:ring-amber-400/40",
      glow:
        "shadow-[0_0_0_1px_rgba(251,191,36,0.18),0_14px_40px_rgba(251,191,36,0.10)]",
      aura: "from-amber-500/18 via-yellow-500/10 to-transparent",
    },
    lune: {
      border: "border-slate-300/20",
      bg: "bg-slate-200/10",
      text: "text-slate-100",
      dot: "bg-slate-200/60",
      line: "bg-slate-200/15",
      ring: "focus-visible:ring-slate-200/30",
      glow:
        "shadow-[0_0_0_1px_rgba(226,232,240,0.16),0_14px_40px_rgba(226,232,240,0.06)]",
      aura: "from-slate-200/14 via-slate-300/8 to-transparent",
    },
    mercure: {
      border: "border-sky-400/25",
      bg: "bg-sky-500/10",
      text: "text-sky-200",
      dot: "bg-sky-400/70",
      line: "bg-sky-400/20",
      ring: "focus-visible:ring-sky-400/35",
      glow:
        "shadow-[0_0_0_1px_rgba(56,189,248,0.16),0_14px_40px_rgba(56,189,248,0.08)]",
      aura: "from-sky-500/18 via-cyan-500/10 to-transparent",
    },
    venus: {
      border: "border-pink-400/25",
      bg: "bg-pink-500/10",
      text: "text-pink-200",
      dot: "bg-pink-400/70",
      line: "bg-pink-400/20",
      ring: "focus-visible:ring-pink-400/35",
      glow:
        "shadow-[0_0_0_1px_rgba(244,114,182,0.16),0_14px_40px_rgba(244,114,182,0.08)]",
      aura: "from-pink-500/18 via-rose-500/10 to-transparent",
    },
    mars: {
      border: "border-red-400/25",
      bg: "bg-red-500/10",
      text: "text-red-200",
      dot: "bg-red-400/70",
      line: "bg-red-400/20",
      ring: "focus-visible:ring-red-400/35",
      glow:
        "shadow-[0_0_0_1px_rgba(248,113,113,0.16),0_14px_40px_rgba(248,113,113,0.08)]",
      aura: "from-red-500/18 via-orange-500/10 to-transparent",
    },
    jupiter: {
      border: "border-violet-400/25",
      bg: "bg-violet-500/10",
      text: "text-violet-200",
      dot: "bg-violet-400/70",
      line: "bg-violet-400/20",
      ring: "focus-visible:ring-violet-400/35",
      glow:
        "shadow-[0_0_0_1px_rgba(167,139,250,0.16),0_14px_40px_rgba(167,139,250,0.08)]",
      aura: "from-violet-500/18 via-fuchsia-500/10 to-transparent",
    },
    saturne: {
      border: "border-indigo-400/25",
      bg: "bg-indigo-500/10",
      text: "text-indigo-200",
      dot: "bg-indigo-400/70",
      line: "bg-indigo-400/20",
      ring: "focus-visible:ring-indigo-400/35",
      glow:
        "shadow-[0_0_0_1px_rgba(129,140,248,0.16),0_14px_40px_rgba(129,140,248,0.08)]",
      aura: "from-indigo-500/18 via-blue-500/10 to-transparent",
    },
    uranus: {
      border: "border-cyan-400/25",
      bg: "bg-cyan-500/10",
      text: "text-cyan-200",
      dot: "bg-cyan-400/70",
      line: "bg-cyan-400/20",
      ring: "focus-visible:ring-cyan-400/35",
      glow:
        "shadow-[0_0_0_1px_rgba(34,211,238,0.16),0_14px_40px_rgba(34,211,238,0.08)]",
      aura: "from-cyan-500/18 via-sky-500/10 to-transparent",
    },
    neptune: {
      border: "border-blue-400/25",
      bg: "bg-blue-500/10",
      text: "text-blue-200",
      dot: "bg-blue-400/70",
      line: "bg-blue-400/20",
      ring: "focus-visible:ring-blue-400/35",
      glow:
        "shadow-[0_0_0_1px_rgba(96,165,250,0.16),0_14px_40px_rgba(96,165,250,0.08)]",
      aura: "from-blue-500/18 via-indigo-500/10 to-transparent",
    },
    pluton: {
      border: "border-fuchsia-400/20",
      bg: "bg-fuchsia-500/10",
      text: "text-fuchsia-200",
      dot: "bg-fuchsia-400/65",
      line: "bg-fuchsia-400/15",
      ring: "focus-visible:ring-fuchsia-400/30",
      glow:
        "shadow-[0_0_0_1px_rgba(232,121,249,0.14),0_14px_40px_rgba(232,121,249,0.07)]",
      aura: "from-fuchsia-500/18 via-purple-500/10 to-transparent",
    },
  };

  return (
    map[s] ?? {
      border: "border-white/10",
      bg: "bg-white/5",
      text: "text-text/90",
      dot: "bg-white/30",
      line: "bg-white/10",
      ring: "focus-visible:ring-white/20",
      glow: "",
      aura: "from-white/10 via-white/5 to-transparent",
    }
  );
}
