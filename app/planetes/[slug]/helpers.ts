import planetes from "@/data/planetes.details.json";

export type PlanetAspectSet = {
  titre?: string;
  resume?: string;
  conjonction?: string;
  sextile?: string;
  carre?: string;
  trigone?: string;
  opposition?: string;
};

export type PlanetTheme = {
  border: string;
  bg: string;
  text: string;
  accent: string;
  dot: string;
  glow: string;
  aura: string;
  color: string;
};

export type Planet = {
  slug: string;
  name: string;

  famille?: string;
  revolution?: string;

  categorie?: string;
  fonction?: string;
  motCle?: string;
  rythme?: string;

  domicile?: string;
  exaltation?: string;
  exil?: string;
  chute?: string;

  hero?: {
    src: string;
    alt?: string;
  };

  identite?: {
    symbolique?: string;
    fonction?: string;
    motCle?: string;
    analogies?: {
      symbole?: string;
      principe?: string;
      polarite?: string;
      element?: string;
      qualite?: string;
    };
    dignites?: {
      domicile?: string;
      exaltation?: string;
      exil?: string;
      chute?: string;
    };
    dignitesExpliquees?: string[] | Record<string, string>;
  };

  introductionLongue?: string[];
  resume?: string[];
  motsCles?: string[];
  fonctionEssentielle?: string[];
  ceQueLeSoleilRepresente?: string[];

  mythologie?: string[];
  symboliqueGraphique?: string;
  donneesAstronomiques?: string[];
  ageDeLaVie?: string;
  professions?: string[];

  lectureHumaine?: {
    psychologie?: {
      niveauBas?: string[];
      niveauMoyen?: string[];
      niveauEleve?: string[];
    };
    quotidien?: string[];
    forces?: string[];
    ombres?: string[];
    expression?: {
      aligne?: string[];
      exces?: string[];
      manque?: string[];
    };
  };

  lecturePsychologiqueProfonde?: string[];
  champsExperience?: Record<string, string[]>;

  destinSentimental?: string[];
  destinFinancier?: string[];
  portraitDuSolarien?: string[];

  rapportPereAutorite?: string[];
  rapportAuPere?: string[];
  rapportALAutorite?: string[];
  rapportALaReussite?: string[];

  etatFortFaible?: {
    fort?: string[];
    faible?: string[];
    afflige?: string[];
  };

  correspondances?: {
    corps?: string[];
    metaux?: string[];
    couleurs?: string[];
    animaux?: string[];
    lieux?: string[];
    pierres?: string[];
    jour?: string;
  };

  apparence?: string[];
  medical?: string[];
  social?: string[];
  spirituel?: string[];

  dansLesSignes?: Array<{
    signe: string;
    titre: string;
    resume: string;
    manifestations?: string[];
    forces?: string[];
    defis?: string[];
  }>;

  dansLesMaisons?: Array<{
    maison: number;
    titre: string;
    resume: string;
    manifestations?: string[];
    forces?: string[];
    defis?: string[];
  }>;

  aspects?: Record<string, PlanetAspectSet>;
  dansUnTheme?: string[];
  faq?: Array<{ question: string; reponse: string }>;
};

export const PLANETS = planetes as unknown as Planet[];

export function getPlanet(slug: string): Planet | undefined {
  return PLANETS.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
}

export function getPlanetIndex(slug: string): number {
  return PLANETS.findIndex((p) => p.slug.toLowerCase() === slug.toLowerCase());
}

export function has<T>(value: T | undefined | null): value is T {
  if (Array.isArray(value)) return value.length > 0;
  if (typeof value === "object" && value !== null) return Object.keys(value).length > 0;
  return value !== undefined && value !== null && value !== "";
}

export function planetThumbSrc(slug: string): string {
  return `/images/planetes/${slug}.webp`;
}

export function planetHeroSrc(slug: string): string {
  return `/images/planetes/${slug}/a.webp`;
}

export function normalizeDignitesExpliquees(
  value?: string[] | Record<string, string>
): string[] {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  return Object.values(value).filter((v): v is string => Boolean(v));
}

export function buildBreadcrumbs(planet: Planet) {
  return [
    { name: "Accueil", href: "/" },
    { name: "Planètes", href: "/planetes" },
    { name: planet.name, href: `/planetes/${planet.slug}` },
  ];
}

export function sectionId(label: string): string {
  return label
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function planetTheme(slug?: string): PlanetTheme {
  const s = (slug ?? "").toLowerCase();

  const map: Record<string, PlanetTheme> = {
    soleil: {
      border: "border-amber-500/30",
      bg: "bg-amber-500/5",
      text: "text-amber-200",
      accent: "text-amber-400",
      dot: "bg-amber-500",
      glow: "shadow-[0_0_50px_-12px_rgba(245,158,11,0.4)]",
      aura: "from-amber-600/20 via-orange-600/5 to-transparent",
      color: "rgba(245,158,11,0.45)",
    },
    lune: {
      border: "border-slate-300/30",
      bg: "bg-slate-300/5",
      text: "text-slate-100",
      accent: "text-slate-300",
      dot: "bg-slate-300",
      glow: "shadow-[0_0_50px_-12px_rgba(203,213,225,0.4)]",
      aura: "from-slate-400/20 via-slate-600/5 to-transparent",
      color: "rgba(203,213,225,0.4)",
    },
    mercure: {
      border: "border-sky-400/30",
      bg: "bg-sky-400/5",
      text: "text-sky-100",
      accent: "text-sky-400",
      dot: "bg-sky-400",
      glow: "shadow-[0_0_50px_-12px_rgba(56,189,248,0.4)]",
      aura: "from-sky-500/20 via-indigo-600/5 to-transparent",
      color: "rgba(56,189,248,0.42)",
    },
    venus: {
      border: "border-pink-500/30",
      bg: "bg-pink-500/5",
      text: "text-pink-100",
      accent: "text-pink-400",
      dot: "bg-pink-400",
      glow: "shadow-[0_0_50px_-12px_rgba(244,114,182,0.4)]",
      aura: "from-pink-500/20 via-rose-600/5 to-transparent",
      color: "rgba(244,114,182,0.42)",
    },
    mars: {
      border: "border-red-500/30",
      bg: "bg-red-500/5",
      text: "text-red-100",
      accent: "text-red-400",
      dot: "bg-red-400",
      glow: "shadow-[0_0_50px_-12px_rgba(239,68,68,0.4)]",
      aura: "from-red-500/20 via-orange-600/5 to-transparent",
      color: "rgba(239,68,68,0.42)",
    },
    jupiter: {
      border: "border-purple-500/30",
      bg: "bg-purple-500/5",
      text: "text-purple-100",
      accent: "text-purple-400",
      dot: "bg-purple-400",
      glow: "shadow-[0_0_50px_-12px_rgba(168,85,247,0.4)]",
      aura: "from-purple-500/20 via-indigo-600/5 to-transparent",
      color: "rgba(168,85,247,0.42)",
    },
    saturne: {
      border: "border-stone-400/30",
      bg: "bg-stone-400/5",
      text: "text-stone-100",
      accent: "text-stone-300",
      dot: "bg-stone-300",
      glow: "shadow-[0_0_50px_-12px_rgba(168,162,158,0.35)]",
      aura: "from-stone-400/20 via-slate-700/5 to-transparent",
      color: "rgba(168,162,158,0.35)",
    },
    uranus: {
      border: "border-cyan-400/30",
      bg: "bg-cyan-400/5",
      text: "text-cyan-100",
      accent: "text-cyan-300",
      dot: "bg-cyan-300",
      glow: "shadow-[0_0_50px_-12px_rgba(34,211,238,0.35)]",
      aura: "from-cyan-400/20 via-sky-700/5 to-transparent",
      color: "rgba(34,211,238,0.35)",
    },
    neptune: {
      border: "border-indigo-400/30",
      bg: "bg-indigo-400/5",
      text: "text-indigo-100",
      accent: "text-indigo-300",
      dot: "bg-indigo-300",
      glow: "shadow-[0_0_50px_-12px_rgba(129,140,248,0.35)]",
      aura: "from-indigo-500/20 via-blue-700/5 to-transparent",
      color: "rgba(129,140,248,0.35)",
    },
    pluton: {
      border: "border-fuchsia-500/30",
      bg: "bg-fuchsia-500/5",
      text: "text-fuchsia-100",
      accent: "text-fuchsia-400",
      dot: "bg-fuchsia-400",
      glow: "shadow-[0_0_50px_-12px_rgba(217,70,239,0.35)]",
      aura: "from-fuchsia-500/20 via-purple-700/5 to-transparent",
      color: "rgba(217,70,239,0.35)",
    },
  };

  return (
    map[s] ?? {
      border: "border-white/10",
      bg: "bg-white/5",
      text: "text-slate-200",
      accent: "text-white",
      dot: "bg-white",
      glow: "",
      aura: "from-white/5 to-transparent",
      color: "rgba(255,255,255,0.3)",
    }
  );
}
