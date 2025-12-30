import { AstroGlyphTextIcon } from "@/components/icons/astro/AstroGlyphTextIcon";
import { HouseRomanIcon } from "@/components/icons/astro/HouseRomanIcon";
import type { ComponentType } from "react";
import type { Route } from "next";

type IconComp = ComponentType<{ className?: string; "aria-hidden"?: boolean }>;

type Item = {
  name: string;
  description: string;
  href: Route;
  icon: IconComp;
};


/** helper : transforme un Astro glyph en composant "Heroicons-like" */
export function glyph(symbol: string): IconComp {
  return function Glyph({ className, ...props }) {
    return (
      <AstroGlyphTextIcon symbol={symbol} className={className} {...props} />
    );
  };
}

/** helper : HouseIcon en composant "Heroicons-like" */
export function roman(r: string): IconComp {
  return function House({ className, ...props }) {
    return (
      <HouseRomanIcon roman={r} className={className} boxed={true} {...props} />
    );
  };
}

export const planetes = [
  {
    name: "Soleil",
    description: "Identité, vitalité et direction intérieure",
    href: "/planetes/soleil",
    icon: glyph("☉"),
  },
  {
    name: "Lune",
    description: "Émotions, besoins profonds et sécurité",
    href: "/planetes/lune",
    icon: glyph("☾"),
  }, // ou "☽"
  {
    name: "Mercure",
    description: "Mental, communication et apprentissage",
    href: "/planetes/mercure",
    icon: glyph("☿"),
  },
  {
    name: "Vénus",
    description: "Amour, valeurs et harmonie",
    href: "/planetes/venus",
    icon: glyph("♀"),
  },
  {
    name: "Mars",
    description: "Action, désir et courage",
    href: "/planetes/mars",
    icon: glyph("♂"),
  },
  {
    name: "Jupiter",
    description: "Expansion, chance et sens",
    href: "/planetes/jupiter",
    icon: glyph("♃"),
  },
  {
    name: "Saturne",
    description: "Structure, limites et maturité",
    href: "/planetes/saturne",
    icon: glyph("♄"),
  },
  {
    name: "Uranus",
    description: "Changement, liberté et intuition",
    href: "/planetes/uranus",
    icon: glyph("♅"),
  },
  {
    name: "Neptune",
    description: "Rêve, inspiration et idéal",
    href: "/planetes/neptune",
    icon: glyph("♆"),
  },
  {
    name: "Pluton",
    description: "Transformation, puissance et profondeur",
    href: "/planetes/pluton",
    icon: glyph("♇"),
  },
];

export const zodiaque = [
  {
    name: "Bélier",
    description: "Élan, initiative, courage",
    href: "/signes/belier",
    icon: glyph("♈"),
  },
  {
    name: "Taureau",
    description: "Stabilité, sens, constance",
    href: "/signes/taureau",
    icon: glyph("♉"),
  },
  {
    name: "Gémeaux",
    description: "Curiosité, échange, mobilité",
    href: "/signes/gemeaux",
    icon: glyph("♊"),
  },
  {
    name: "Cancer",
    description: "Protection, émotion, mémoire",
    href: "/signes/cancer",
    icon: glyph("♋"),
  },
  {
    name: "Lion",
    description: "Créativité, fierté, expression",
    href: "/signes/lion",
    icon: glyph("♌"),
  },
  {
    name: "Vierge",
    description: "Analyse, méthode, amélioration",
    href: "/signes/vierge",
    icon: glyph("♍"),
  },
  {
    name: "Balance",
    description: "Harmonie, relation, justice",
    href: "/signes/balance",
    icon: glyph("♎"),
  },
  {
    name: "Scorpion",
    description: "Intensité, vérité, régénération",
    href: "/signes/scorpion",
    icon: glyph("♏"),
  },
  {
    name: "Sagittaire",
    description: "Sens, aventure, foi",
    href: "/signes/sagittaire",
    icon: glyph("♐"),
  },
  {
    name: "Capricorne",
    description: "Ambition, endurance, responsabilité",
    href: "/signes/capricorne",
    icon: glyph("♑"),
  },
  {
    name: "Verseau",
    description: "Vision, liberté, collectif",
    href: "/signes/verseau",
    icon: glyph("♒"),
  },
  {
    name: "Poissons",
    description: "Empathie, imaginaire, spiritualité",
    href: "/signes/poissons",
    icon: glyph("♓"),
  },
];

export const maisons: Item[] = [
  {
    name: "Maison I",
    description: "Identité, apparence, élan vital",
    href: "/maisons/1",
    icon: roman("I"),
  },
  {
    name: "Maison II",
    description: "Valeurs, ressources, sécurité",
    href: "/maisons/2",
    icon: roman("II"),
  },
  {
    name: "Maison III",
    description: "Communication, proches, apprentissages",
    href: "/maisons/3",
    icon: roman("III"),
  },
  {
    name: "Maison IV",
    description: "Racines, foyer, intimité",
    href: "/maisons/4",
    icon: roman("IV"),
  },
  {
    name: "Maison V",
    description: "Créativité, plaisir, amour",
    href: "/maisons/5",
    icon: roman("V"),
  },
  {
    name: "Maison VI",
    description: "Habitudes, travail, santé",
    href: "/maisons/6",
    icon: roman("VI"),
  },
  {
    name: "Maison VII",
    description: "Relations, partenariats",
    href: "/maisons/7",
    icon: roman("VII"),
  },
  {
    name: "Maison VIII",
    description: "Transformations, liens, profondeur",
    href: "/maisons/8",
    icon: roman("VIII"),
  },
  {
    name: "Maison IX",
    description: "Sens, études, horizons",
    href: "/maisons/9",
    icon: roman("IX"),
  },
  {
    name: "Maison X",
    description: "Carrière, image, vocation",
    href: "/maisons/10",
    icon: roman("X"),
  },
  {
    name: "Maison XI",
    description: "Projets, amis, collectif",
    href: "/maisons/11",
    icon: roman("XI"),
  },
  {
    name: "Maison XII",
    description: "Inconscient, retrait, spiritualité",
    href: "/maisons/12",
    icon: roman("XII"),
  },
];

export const blog: Item[] = [
  {
    name: "Débuter l’astrologie",
    description: "Les bases pour comprendre un thème astral",
    href: "/blog/debuter",
    icon: glyph("☉"),
  },
  {
    name: "Signes & éléments",
    description: "Feu, Terre, Air, Eau ",
    href: "/blog/elements",
    icon: glyph("🜃"),
  },
  {
    name: "Planètes personnelles",
    description: "Soleil, Lune, Mercure, Vénus, Mars",
    href: "/blog/planetes-personnelles",
    icon: glyph("❈"),
  },
  {
    name: "Lexique astro",
    description: "Définitions simples des termes clés",
    href: "/blog/lexique",
    icon: glyph("⚴"),
  },
];

export const autre: Item[] = [
  {
    name: "Maîtrises",
    description: "Planète maîtresse d’un signe",
    href: "/outils/maitrises",
    icon: glyph("🜊"),
  },
  {
    name: "Aspects majeurs",
    description: "Conjonction, opposition, carré, trigone, sextile",
    href: "/blog/aspects",
    icon: glyph("△"),
  },
  {
    name: "Planete rétrograde",
    description: "",
    href: "/blog/aspects",
    icon: glyph("△"),
  },{
    name: "Lilith",
    description: "",
    href: "/blog/aspects",
    icon: glyph("△"),
  },
  {
    name: "Transits",
    description: "Comprendre le timing",
    href: "/blog/transits",
    icon: glyph("⚹"),
  },
  {
    name: "Synastrie",
    description: "Compatibilité entre deux thèmes.",
    href: "/blog/synastrie",
    icon: glyph("⚕"),
  },
  {
    name: "Révolutions solaires",
    description: "Ta météo annuelle",
    href: "/blog/revolution-solaire",
    icon: glyph("℞"),
  },
  {
    name: "Nœuds lunaires",
    description: "Axe karmique",
    href: "/blog/noeuds",
    icon: glyph("☊"),
  },
  {
    name: "Astéroïdes",
    description: "Chiron, Cérès, Junon…",
    href: "/outils/asteroides",
    icon: glyph("⚷"),
  },
  {
    name: "Points fictifs",
    description: "Lilith, Part de Fortune… ",
    href: "/outils/points-fictifs",
    icon: glyph("⚸"),
  },
];