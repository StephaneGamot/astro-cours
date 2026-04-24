import maisons from "@/data/maisons.details.json";
import planetes from "@/data/planetes.details.json";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export type HouseType = "angulaire" | "succedente" | "cadente";
export type Quadrant = "Est" | "Ouest" | "Nord" | "Sud";

export type PlanetInHouse = {
  texte: string;
  motsCles?: string[];
  angle?: string;
};

export type House = {
  numero: number;
  slug: string;
  titreCourt?: string;
  nom: string;
  axe?: string;
  type?: HouseType;
  quadrant?: Quadrant;

  /* — Niveau lecture — */
  niveauLecture?: {
    motsCles?: string[];
    fonction?: string;
    arena?: string;
    verbes?: string[];
    questions?: string[];
  };

  /* — Domaines — */
  domaines?: {
    principaux?: string[];
    secondaires?: string[];
    dansLaVie?: string[];
  };

  /* — Polarités — */
  polarites?: {
    forces?: string[];
    ombres?: string[];
    besoins?: string[];
  };

  /* — Pédagogie — */
  pedagogie?: {
    aRetenir?: string[];
    erreursFrequences?: string[];
    repereInterpretation?: string[];
  };

  /* — Pratique — */
  pratique?: {
    phrasesCles?: string[];
    exemplesConcrets?: string[];
    exercices?: string[];
  };

  /* — NEW: Traditional & modern significations — */
  significationTraditionnelle?: string;
  sensSocial?: string;
  conceptionModerne?: string;

  /* — NEW: Axis, triangle, square — */
  axeAnalyse?: {
    nom: string;
    description: string;
  };
  triangle?: {
    nom: string;
    role: string;
  };
  carre?: {
    nom: string;
    role: string;
  };

  /* — Planet in house (legacy string OR rich object) — */
  planetesDansLaMaison?: Record<string, string | PlanetInHouse>;
  planetesDansLaMaisonOverrides?: Record<string, PlanetInHouse>;

  /* — FAQ — */
  faq?: Array<{ question: string; reponse: string }>;
};

export type Planet = {
  slug: string;
  name: string;
  motCle?: string;
  fonction?: string;
  categorie?: string;
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

export const HOUSES = maisons as unknown as House[];
export const PLANETS = planetes as unknown as Planet[];

const ROMAN = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"] as const;

export function toRoman(n: number): string {
  return ROMAN[n] ?? String(n);
}

/* ------------------------------------------------------------------ */
/*  Lookups                                                            */
/* ------------------------------------------------------------------ */

export function getHouse(slug: string): House | undefined {
  const s = decodeURIComponent(slug).trim().toLowerCase();
  return HOUSES.find((h) => h.slug === s);
}

export function getHouseIndex(slug: string): number {
  return HOUSES.findIndex((h) => h.slug === slug);
}

/* ------------------------------------------------------------------ */
/*  Utility                                                            */
/* ------------------------------------------------------------------ */

export function has<T>(value: T | undefined | null): value is T {
  if (Array.isArray(value)) return value.length > 0;
  if (typeof value === "object" && value !== null)
    return Object.keys(value).length > 0;
  return value !== undefined && value !== null && value !== "";
}

export function sectionId(label: string): string {
  return label
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function buildBreadcrumbs(house: House) {
  return [
    { name: "Accueil", href: "/" },
    { name: "Maisons", href: "/#maisons" },
    { name: house.titreCourt ?? `Maison ${toRoman(house.numero)}`, href: `/maisons/${house.slug}` },
  ];
}

/* ------------------------------------------------------------------ */
/*  Planet-in-house text                                               */
/* ------------------------------------------------------------------ */

export function planetInHouseText(planet: Planet, house: House): string {
  // Check overrides first
  const override = house.planetesDansLaMaisonOverrides?.[planet.slug];
  if (override?.texte) return override.texte;

  // Check planetesDansLaMaison
  const entry = house.planetesDansLaMaison?.[planet.slug];
  if (typeof entry === "string") return entry;
  if (entry && typeof entry === "object" && "texte" in entry) return entry.texte;

  // Fallback
  const arena = house.niveauLecture?.arena ?? `Maison ${house.numero}`;
  const pf = planet.fonction ?? planet.name;
  const motCle = planet.motCle ? ` (${planet.motCle})` : "";
  return `${planet.name}${motCle} en ${arena} : la fonction de ${pf} s'exprime ici de manière concrète, colorant les expériences liées à cette maison.`;
}

export function planetInHouseKeywords(planet: Planet, house: House): string[] {
  const override = house.planetesDansLaMaisonOverrides?.[planet.slug];
  if (override?.motsCles?.length) return override.motsCles;
  const entry = house.planetesDansLaMaison?.[planet.slug];
  if (entry && typeof entry === "object" && "motsCles" in entry) return entry.motsCles ?? [];
  return [];
}

export function planetInHouseTitle(planet: Planet, house: House): string {
  const override = house.planetesDansLaMaisonOverrides?.[planet.slug];
  if (override?.angle) return override.angle;
  const entry = house.planetesDansLaMaison?.[planet.slug];
  if (entry && typeof entry === "object" && "angle" in entry && entry.angle) return entry.angle;
  return `${planet.name} en Maison ${toRoman(house.numero)}`;
}

/* ------------------------------------------------------------------ */
/*  Theme                                                              */
/* ------------------------------------------------------------------ */

export type HouseTheme = {
  border: string;
  pill: string;
  dot: string;
  ring: string;
  text: string;
  bg: string;
  glow: string;
  aura: string;
};

export function houseTheme(h: House): HouseTheme {
  const byType: Record<HouseType, HouseTheme> = {
    angulaire: {
      border: "border-emerald-400/25",
      pill: "bg-emerald-500/10 text-emerald-200 border-emerald-400/20",
      dot: "bg-emerald-400/70",
      ring: "focus-visible:ring-emerald-400/35",
      text: "text-emerald-200",
      bg: "bg-emerald-500/5",
      glow: "shadow-[0_0_50px_-12px_rgba(52,211,153,0.3)]",
      aura: "from-emerald-600/20 via-green-600/5 to-transparent",
    },
    succedente: {
      border: "border-sky-400/25",
      pill: "bg-sky-500/10 text-sky-200 border-sky-400/20",
      dot: "bg-sky-400/70",
      ring: "focus-visible:ring-sky-400/35",
      text: "text-sky-200",
      bg: "bg-sky-500/5",
      glow: "shadow-[0_0_50px_-12px_rgba(56,189,248,0.3)]",
      aura: "from-sky-500/20 via-blue-600/5 to-transparent",
    },
    cadente: {
      border: "border-violet-400/25",
      pill: "bg-violet-500/10 text-violet-200 border-violet-400/20",
      dot: "bg-violet-400/70",
      ring: "focus-visible:ring-violet-400/35",
      text: "text-violet-200",
      bg: "bg-violet-500/5",
      glow: "shadow-[0_0_50px_-12px_rgba(167,139,250,0.3)]",
      aura: "from-violet-500/20 via-purple-600/5 to-transparent",
    },
  };

  return byType[h.type ?? "cadente"];
}

export function quadrantLabel(q?: Quadrant): string | undefined {
  const map: Record<Quadrant, string> = {
    Est: "Est (le moi)",
    Ouest: "Ouest (l'autre)",
    Nord: "Nord (les racines)",
    Sud: "Sud (le monde)",
  };
  return q ? map[q] : undefined;
}
