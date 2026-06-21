import type { CardData } from "@/components/sections/homePage/ContentCard";

import zfr from "@/data/zodiaque.json";
import zen from "@/data/en/zodiaque.json";
import zes from "@/data/es/zodiaque.json";

import mfr from "@/data/maisons.json";
import men from "@/data/en/maisons.json";
import mes from "@/data/es/maisons.json";

import pfr from "@/data/planetes.json";
import pen from "@/data/en/planetes.json";
import pes from "@/data/es/planetes.json";

export type HomeCards = {
  zodiaque: CardData[];
  maisons: CardData[];
  planetes: CardData[];
};

/**
 * Données des cartes de la home, par locale.
 * Le français est la source ; en/es vivent dans data/<locale>/.
 * Le slug et le chemin d'image restent identiques entre langues
 * (seuls name/headline/description/alt sont traduits).
 */
const MAP: Record<string, HomeCards> = {
  fr: { zodiaque: zfr as CardData[], maisons: mfr as CardData[], planetes: pfr as CardData[] },
  en: { zodiaque: zen as CardData[], maisons: men as CardData[], planetes: pen as CardData[] },
  es: { zodiaque: zes as CardData[], maisons: mes as CardData[], planetes: pes as CardData[] },
};

export function getHomeCards(locale: string): HomeCards {
  return MAP[locale] ?? MAP.fr;
}
