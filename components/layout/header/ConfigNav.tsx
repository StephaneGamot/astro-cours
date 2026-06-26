import { AstroGlyphTextIcon } from "@/components/icons/astro/AstroGlyphTextIcon";
import { HouseRomanIcon } from "@/components/icons/astro/HouseRomanIcon";
import type { ComponentType } from "react";

export type Item = {
  name: string;
  description: string;
  href: string;
  icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
};

type NavLocale = "fr" | "en" | "es";

export function glyph(symbol: string): Item["icon"] {
  return function GlyphIcon({ className, ...props }) {
    return <AstroGlyphTextIcon symbol={symbol} className={className} {...props} />;
  };
}

export function roman(r: string): Item["icon"] {
  return function RomanIcon({ className, ...props }) {
    return <HouseRomanIcon roman={r} className={className} boxed={true} {...props} />;
  };
}

/* ────────────────────────────────────────────────────────────────
   Base (clé + href + icône) — identique quelle que soit la langue.
   Les noms/descriptions traduits vivent dans TR plus bas.
   ──────────────────────────────────────────────────────────────── */

type Base = { key: string; href: string; icon: Item["icon"] };
type Tr = { name: string; description: string };

const PLANETS_BASE: Base[] = [
  { key: "soleil", href: "/planetes/soleil", icon: glyph("☉") },
  { key: "lune", href: "/planetes/lune", icon: glyph("☾") },
  { key: "mercure", href: "/planetes/mercure", icon: glyph("☿") },
  { key: "venus", href: "/planetes/venus", icon: glyph("♀") },
  { key: "mars", href: "/planetes/mars", icon: glyph("♂") },
  { key: "jupiter", href: "/planetes/jupiter", icon: glyph("♃") },
  { key: "saturne", href: "/planetes/saturne", icon: glyph("♄") },
  { key: "uranus", href: "/planetes/uranus", icon: glyph("♅") },
  { key: "neptune", href: "/planetes/neptune", icon: glyph("♆") },
  { key: "pluton", href: "/planetes/pluton", icon: glyph("♇") },
];

const ZODIAC_BASE: Base[] = [
  { key: "belier", href: "/signes/belier", icon: glyph("♈") },
  { key: "taureau", href: "/signes/taureau", icon: glyph("♉") },
  { key: "gemeaux", href: "/signes/gemeaux", icon: glyph("♊") },
  { key: "cancer", href: "/signes/cancer", icon: glyph("♋") },
  { key: "lion", href: "/signes/lion", icon: glyph("♌") },
  { key: "vierge", href: "/signes/vierge", icon: glyph("♍") },
  { key: "balance", href: "/signes/balance", icon: glyph("♎") },
  { key: "scorpion", href: "/signes/scorpion", icon: glyph("♏") },
  { key: "sagittaire", href: "/signes/sagittaire", icon: glyph("♐") },
  { key: "capricorne", href: "/signes/capricorne", icon: glyph("♑") },
  { key: "verseau", href: "/signes/verseau", icon: glyph("♒") },
  { key: "poissons", href: "/signes/poissons", icon: glyph("♓") },
];

const ROMANS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];
const HOUSES_BASE: Base[] = ROMANS.map((r, i) => ({
  key: `maison-${i + 1}`,
  href: `/maisons/maison-${i + 1}`,
  icon: roman(r),
}));

const AUTRE_BASE: Base[] = [
  { key: "cuspides", href: "/cuspides-des-maisons", icon: glyph("⌂") },
  { key: "maisons-derivees", href: "/maisons-derivees", icon: glyph("⟲") },
  { key: "revolution-solaire", href: "/revolution-solaire", icon: glyph("↻") },
  { key: "points-fictifs", href: "/points-fictifs", icon: glyph("⊗") },
  { key: "les-decans", href: "/les-decans", icon: glyph("★") },
  { key: "maitrises", href: "/maitrises", icon: glyph("🜊") },
  { key: "aspects", href: "/aspects", icon: glyph("△") },
  { key: "retrogrades", href: "/retrogrades", icon: glyph("℞") },
  { key: "lilith", href: "/lilith", icon: glyph("⚸") },
  { key: "synastrie", href: "/synastrie", icon: glyph("⚕") },
  { key: "transits", href: "/transits", icon: glyph("⚹") },
  { key: "noeuds-lunaires", href: "/noeuds-lunaires", icon: glyph("☊") },
  { key: "asteroides", href: "/asteroides", icon: glyph("⚷") },
  { key: "astrologie-horaire", href: "/astrologie-horaire", icon: glyph("?") },
  { key: "astrologie-medicale", href: "/astrologie-medicale", icon: glyph("☤") },
  { key: "astrologie-mondiale", href: "/astrologie-mondiale", icon: glyph("⊕") },
  { key: "maisons-dominantes", href: "/maisons-dominantes", icon: glyph("⌖") },
  { key: "signes-dominants", href: "/signes-dominants", icon: glyph("✶") },
  { key: "significateurs", href: "/significateurs", icon: glyph("☌") },
  { key: "astro-psychologie", href: "/astro-psychologie", icon: glyph("☽") },
];

/* ────────────────────────────────────────────────────────────────
   Traductions (nom + description courte) par clé et par langue.
   ──────────────────────────────────────────────────────────────── */

const HOUSE_WORD: Record<NavLocale, string> = { fr: "Maison", en: "House", es: "Casa" };
const HOUSE_DESC: Record<NavLocale, string[]> = {
  fr: ["Identité", "Ressources", "Communication", "Racines", "Plaisir", "Santé", "Relations", "Transformation", "Horizons", "Vocation", "Projets", "Inconscient"],
  en: ["Identity", "Resources", "Communication", "Roots", "Pleasure", "Health", "Relationships", "Transformation", "Horizons", "Vocation", "Projects", "The unconscious"],
  es: ["Identidad", "Recursos", "Comunicación", "Raíces", "Placer", "Salud", "Relaciones", "Transformación", "Horizontes", "Vocación", "Proyectos", "Inconsciente"],
};

const TR: Record<NavLocale, Record<string, Tr>> = {
  fr: {
    soleil: { name: "Soleil", description: "Identité et vitalité" },
    lune: { name: "Lune", description: "Émotions et besoins" },
    mercure: { name: "Mercure", description: "Mental et échange" },
    venus: { name: "Vénus", description: "Amour et valeurs" },
    mars: { name: "Mars", description: "Action et désir" },
    jupiter: { name: "Jupiter", description: "Expansion et chance" },
    saturne: { name: "Saturne", description: "Structure et limites" },
    uranus: { name: "Uranus", description: "Changement et intuition" },
    neptune: { name: "Neptune", description: "Rêve et inspiration" },
    pluton: { name: "Pluton", description: "Transformation" },
    belier: { name: "Bélier", description: "Élan et initiative" },
    taureau: { name: "Taureau", description: "Stabilité et sens" },
    gemeaux: { name: "Gémeaux", description: "Curiosité et échange" },
    cancer: { name: "Cancer", description: "Protection et mémoire" },
    lion: { name: "Lion", description: "Créativité et fierté" },
    vierge: { name: "Vierge", description: "Analyse et méthode" },
    balance: { name: "Balance", description: "Harmonie et justice" },
    scorpion: { name: "Scorpion", description: "Intensité et vérité" },
    sagittaire: { name: "Sagittaire", description: "Sens et aventure" },
    capricorne: { name: "Capricorne", description: "Ambition et endurance" },
    verseau: { name: "Verseau", description: "Vision et collectif" },
    poissons: { name: "Poissons", description: "Empathie et imaginaire" },
    cuspides: { name: "Cuspides", description: "Portes des maisons" },
    "maisons-derivees": { name: "Maisons Dérivées", description: "Le thème de l'entourage" },
    "revolution-solaire": { name: "Rév. Solaire", description: "Le thème de l'année" },
    "points-fictifs": { name: "Points fictifs", description: "Parts, Vertex, Mi-points..." },
    "les-decans": { name: "Les Décans", description: "Les 36 visages du zodiaque" },
    maitrises: { name: "Maîtrises", description: "Dignités planétaires" },
    aspects: { name: "Aspects", description: "Géométrie céleste" },
    retrogrades: { name: "Rétrogrades", description: "Mouvements de recul" },
    lilith: { name: "Lilith", description: "Lune Noire & parts d'ombre" },
    synastrie: { name: "Synastrie", description: "Compatibilité relationnelle" },
    transits: { name: "Transits", description: "Timing astrologique" },
    "noeuds-lunaires": { name: "Nœuds lunaires", description: "Axe karmique" },
    asteroides: { name: "Astéroïdes", description: "Chiron, Cérès..." },
    "astrologie-horaire": { name: "Astrologie horaire", description: "La carte d'une question" },
    "astrologie-medicale": { name: "Astrologie médicale", description: "Tempéraments & humeurs" },
    "astrologie-mondiale": { name: "Astrologie mondiale", description: "Cycles & nations" },
    "maisons-dominantes": { name: "Maisons dominantes", description: "Repérer & interpréter" },
    "signes-dominants": { name: "Signes dominants", description: "Au-delà du signe solaire" },
    significateurs: { name: "Significateurs", description: "Qui représente quoi" },
    "astro-psychologie": { name: "Astro-psychologie", description: "Le thème & la psyché" },
  },
  en: {
    soleil: { name: "Sun", description: "Identity and vitality" },
    lune: { name: "Moon", description: "Emotions and needs" },
    mercure: { name: "Mercury", description: "Mind and exchange" },
    venus: { name: "Venus", description: "Love and values" },
    mars: { name: "Mars", description: "Action and desire" },
    jupiter: { name: "Jupiter", description: "Expansion and luck" },
    saturne: { name: "Saturn", description: "Structure and limits" },
    uranus: { name: "Uranus", description: "Change and intuition" },
    neptune: { name: "Neptune", description: "Dreams and inspiration" },
    pluton: { name: "Pluto", description: "Transformation" },
    belier: { name: "Aries", description: "Drive and initiative" },
    taureau: { name: "Taurus", description: "Stability and the senses" },
    gemeaux: { name: "Gemini", description: "Curiosity and exchange" },
    cancer: { name: "Cancer", description: "Protection and memory" },
    lion: { name: "Leo", description: "Creativity and pride" },
    vierge: { name: "Virgo", description: "Analysis and method" },
    balance: { name: "Libra", description: "Harmony and justice" },
    scorpion: { name: "Scorpio", description: "Intensity and truth" },
    sagittaire: { name: "Sagittarius", description: "Meaning and adventure" },
    capricorne: { name: "Capricorn", description: "Ambition and endurance" },
    verseau: { name: "Aquarius", description: "Vision and the collective" },
    poissons: { name: "Pisces", description: "Empathy and imagination" },
    cuspides: { name: "Cusps", description: "Gateways of the houses" },
    "maisons-derivees": { name: "Derived Houses", description: "The chart of those around you" },
    "revolution-solaire": { name: "Solar Return", description: "The chart of the year" },
    "points-fictifs": { name: "Fictitious Points", description: "Parts, Vertex, midpoints..." },
    "les-decans": { name: "The Decans", description: "The 36 faces of the zodiac" },
    maitrises: { name: "Rulerships", description: "Planetary dignities" },
    aspects: { name: "Aspects", description: "Celestial geometry" },
    retrogrades: { name: "Retrogrades", description: "Backward motion" },
    lilith: { name: "Lilith", description: "Black Moon & shadow parts" },
    synastrie: { name: "Synastry", description: "Relationship compatibility" },
    transits: { name: "Transits", description: "Astrological timing" },
    "noeuds-lunaires": { name: "Lunar Nodes", description: "The karmic axis" },
    asteroides: { name: "Asteroids", description: "Chiron, Ceres..." },
    "astrologie-horaire": { name: "Horary Astrology", description: "The chart of a question" },
    "astrologie-medicale": { name: "Medical Astrology", description: "Temperaments & humours" },
    "astrologie-mondiale": { name: "Mundane Astrology", description: "Cycles & nations" },
    "maisons-dominantes": { name: "Dominant Houses", description: "Spot & interpret" },
    "signes-dominants": { name: "Dominant Signs", description: "Beyond the Sun sign" },
    significateurs: { name: "Significators", description: "Who represents what" },
    "astro-psychologie": { name: "Astro-psychology", description: "The chart & the psyche" },
  },
  es: {
    soleil: { name: "Sol", description: "Identidad y vitalidad" },
    lune: { name: "Luna", description: "Emociones y necesidades" },
    mercure: { name: "Mercurio", description: "Mente e intercambio" },
    venus: { name: "Venus", description: "Amor y valores" },
    mars: { name: "Marte", description: "Acción y deseo" },
    jupiter: { name: "Júpiter", description: "Expansión y suerte" },
    saturne: { name: "Saturno", description: "Estructura y límites" },
    uranus: { name: "Urano", description: "Cambio e intuición" },
    neptune: { name: "Neptuno", description: "Sueño e inspiración" },
    pluton: { name: "Plutón", description: "Transformación" },
    belier: { name: "Aries", description: "Impulso e iniciativa" },
    taureau: { name: "Tauro", description: "Estabilidad y sentidos" },
    gemeaux: { name: "Géminis", description: "Curiosidad e intercambio" },
    cancer: { name: "Cáncer", description: "Protección y memoria" },
    lion: { name: "Leo", description: "Creatividad y orgullo" },
    vierge: { name: "Virgo", description: "Análisis y método" },
    balance: { name: "Libra", description: "Armonía y justicia" },
    scorpion: { name: "Escorpio", description: "Intensidad y verdad" },
    sagittaire: { name: "Sagitario", description: "Sentido y aventura" },
    capricorne: { name: "Capricornio", description: "Ambición y resistencia" },
    verseau: { name: "Acuario", description: "Visión y colectivo" },
    poissons: { name: "Piscis", description: "Empatía e imaginación" },
    cuspides: { name: "Cúspides", description: "Puertas de las casas" },
    "maisons-derivees": { name: "Casas Derivadas", description: "La carta del entorno" },
    "revolution-solaire": { name: "Rev. Solar", description: "La carta del año" },
    "points-fictifs": { name: "Puntos ficticios", description: "Partes, Vértex, puntos medios..." },
    "les-decans": { name: "Los Decanos", description: "Los 36 rostros del zodiaco" },
    maitrises: { name: "Regencias", description: "Dignidades planetarias" },
    aspects: { name: "Aspectos", description: "Geometría celeste" },
    retrogrades: { name: "Retrógrados", description: "Movimientos de retroceso" },
    lilith: { name: "Lilith", description: "Luna Negra y zonas de sombra" },
    synastrie: { name: "Sinastría", description: "Compatibilidad relacional" },
    transits: { name: "Tránsitos", description: "Timing astrológico" },
    "noeuds-lunaires": { name: "Nodos lunares", description: "Eje kármico" },
    asteroides: { name: "Asteroides", description: "Quirón, Ceres..." },
    "astrologie-horaire": { name: "Astrología horaria", description: "La carta de una pregunta" },
    "astrologie-medicale": { name: "Astrología médica", description: "Temperamentos y humores" },
    "astrologie-mondiale": { name: "Astrología mundial", description: "Ciclos y naciones" },
    "maisons-dominantes": { name: "Casas dominantes", description: "Detectar e interpretar" },
    "signes-dominants": { name: "Signos dominantes", description: "Más allá del signo solar" },
    significateurs: { name: "Significadores", description: "Quién representa qué" },
    "astro-psychologie": { name: "Astro-psicología", description: "La carta y la psique" },
  },
};

function toNavLocale(locale: string): NavLocale {
  return locale === "en" || locale === "es" ? locale : "fr";
}

function fill(base: Base[], loc: NavLocale): Item[] {
  return base.map((b) => ({
    href: b.href,
    icon: b.icon,
    name: TR[loc][b.key].name,
    description: TR[loc][b.key].description,
  }));
}

function fillHouses(loc: NavLocale): Item[] {
  return HOUSES_BASE.map((b, i) => ({
    href: b.href,
    icon: b.icon,
    name: `${HOUSE_WORD[loc]} ${ROMANS[i]}`,
    description: HOUSE_DESC[loc][i],
  }));
}

/** Sections du menu, traduites selon la locale. */
export function getNavSections(locale: string) {
  const loc = toNavLocale(locale);
  return {
    planetes: fill(PLANETS_BASE, loc),
    zodiaque: fill(ZODIAC_BASE, loc),
    maisons: fillHouses(loc),
    autre: fill(AUTRE_BASE, loc),
  };
}
