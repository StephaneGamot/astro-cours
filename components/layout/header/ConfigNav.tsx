import { AstroGlyphTextIcon } from "@/components/icons/astro/AstroGlyphTextIcon";
import { HouseRomanIcon } from "@/components/icons/astro/HouseRomanIcon";
import type { ComponentType } from "react";
import type { Route } from "next";

export type Item = {
  name: string;
  description: string;
  href: Route;
  icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
};

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

export const planetes: Item[] = [
  { name: "Soleil", description: "Identité et vitalité", href: "/planetes/soleil", icon: glyph("☉") },
  { name: "Lune", description: "Émotions et besoins", href: "/planetes/lune", icon: glyph("☾") },
  { name: "Mercure", description: "Mental et échange", href: "/planetes/mercure", icon: glyph("☿") },
  { name: "Vénus", description: "Amour et valeurs", href: "/planetes/venus", icon: glyph("♀") },
  { name: "Mars", description: "Action et désir", href: "/planetes/mars", icon: glyph("♂") },
  { name: "Jupiter", description: "Expansion et chance", href: "/planetes/jupiter", icon: glyph("♃") },
  { name: "Saturne", description: "Structure et limites", href: "/planetes/saturne", icon: glyph("♄") },
  { name: "Uranus", description: "Changement et intuition", href: "/planetes/uranus", icon: glyph("♅") },
  { name: "Neptune", description: "Rêve et inspiration", href: "/planetes/neptune", icon: glyph("♆") },
  { name: "Pluton", description: "Transformation", href: "/planetes/pluton", icon: glyph("♇") },
];

export const zodiaque: Item[] = [
  { name: "Bélier", description: "Élan et initiative", href: "/signes/belier", icon: glyph("♈") },
  { name: "Taureau", description: "Stabilité et sens", href: "/signes/taureau", icon: glyph("♉") },
  { name: "Gémeaux", description: "Curiosité et échange", href: "/signes/gemeaux", icon: glyph("♊") },
  { name: "Cancer", description: "Protection et mémoire", href: "/signes/cancer", icon: glyph("♋") },
  { name: "Lion", description: "Créativité et fierté", href: "/signes/lion", icon: glyph("♌") },
  { name: "Vierge", description: "Analyse et méthode", href: "/signes/vierge", icon: glyph("♍") },
  { name: "Balance", description: "Harmonie et justice", href: "/signes/balance", icon: glyph("♎") },
  { name: "Scorpion", description: "Intensité et vérité", href: "/signes/scorpion", icon: glyph("♏") },
  { name: "Sagittaire", description: "Sens et aventure", href: "/signes/sagittaire", icon: glyph("♐") },
  { name: "Capricorne", description: "Ambition et endurance", href: "/signes/capricorne", icon: glyph("♑") },
  { name: "Verseau", description: "Vision et collectif", href: "/signes/verseau", icon: glyph("♒") },
  { name: "Poissons", description: "Empathie et imaginaire", href: "/signes/poissons", icon: glyph("♓") },
];

export const maisons: Item[] = Array.from({ length: 12 }, (_, i) => {
  const romans = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];
  const descriptions = [
    "Identité", "Ressources", "Communication", "Racines", "Plaisir", "Santé",
    "Relations", "Transformation", "Horizons", "Vocation", "Projets", "Inconscient"
  ];
  return {
    name: `Maison ${romans[i]}`,
    description: descriptions[i],
    href: `/maisons/maison-${i + 1}` as Route,
    icon: roman(romans[i]),
  };
});

export const autre: Item[] = [
  { name: "Cuspides", description: "Portes des maisons", href: "/cuspides-des-maisons", icon: glyph("⌂") },
  { name: "Maisons Dérivées", description: "Le thème de l'entourage", href: "/maisons-derivees", icon: glyph("⟲") },
  { name: "Rév. Solaire", description: "Le thème de l'année", href: "/revolution-solaire", icon: glyph("↻") },
  { name: "Points fictifs", description: "Parts, Vertex, Mi-points...", href: "/points-fictifs", icon: glyph("⊗") },
  { name: "Les Décans", description: "Les 36 visages du zodiaque", href: "/les-decans", icon: glyph("★") },
  { name: "Maîtrises", description: "Dignités planétaires", href: "/maitrises", icon: glyph("🜊") },
  { name: "Aspects", description: "Géométrie céleste", href: "/aspects", icon: glyph("△") },
  { name: "Rétrogrades", description: "Mouvements de recul", href: "/retrogrades", icon: glyph("℞") },
  { name: "Lilith", description: "Lune Noire & parts d'ombre", href: "/lilith", icon: glyph("⚸") },
  { name: "Synastrie", description: "Compatibilité relationnelle", href: "/synastrie", icon: glyph("⚕") },
  { name: "Transits", description: "Timing astrologique", href: "/transits", icon: glyph("⚹") },
  { name: "Nœuds lunaires", description: "Axe karmique", href: "/noeuds-lunaires", icon: glyph("☊") },
  { name: "Astéroïdes", description: "Chiron, Cérès...", href: "/asteroides", icon: glyph("⚷") },
];