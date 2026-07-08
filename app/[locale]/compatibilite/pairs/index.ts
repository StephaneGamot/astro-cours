import type { PairContent } from "./types";
import { belierLion } from "./belier-lion";
import { taureauCancer } from "./taureau-cancer";
import { gemeauxBalance } from "./gemeaux-balance";
import { cancerScorpion } from "./cancer-scorpion";
import { scorpionPoissons } from "./scorpion-poissons";

/**
 * Registre des contenus de paires. La clé est `${a}-${b}` en slugs FR
 * canoniques, dans l'ordre défini par PAIRS (lib/compatibility.ts).
 * Pour publier une nouvelle paire : créer le fichier de contenu,
 * l'enregistrer ici ET ajouter la clé dans PAIRS.
 */
export const PAIR_CONTENTS: Record<string, PairContent> = {
  "belier-lion": belierLion,
  "taureau-cancer": taureauCancer,
  "gemeaux-balance": gemeauxBalance,
  "cancer-scorpion": cancerScorpion,
  "scorpion-poissons": scorpionPoissons,
};
