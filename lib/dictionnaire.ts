/* ================================================================== */
/*  Loader — Dictionnaire astrologique                                */
/*  Fusionne les 26 fichiers JSON (A–Z) de data/dictionnaire/        */
/* ================================================================== */

import A from "@/data/dictionnaire/A.json";
import B from "@/data/dictionnaire/B.json";
import C from "@/data/dictionnaire/C.json";
import D from "@/data/dictionnaire/D.json";
import E from "@/data/dictionnaire/E.json";
import F from "@/data/dictionnaire/F.json";
import G from "@/data/dictionnaire/G.json";
import H from "@/data/dictionnaire/H.json";
import I from "@/data/dictionnaire/I.json";
import J from "@/data/dictionnaire/J.json";
import K from "@/data/dictionnaire/K.json";
import L from "@/data/dictionnaire/L.json";
import M from "@/data/dictionnaire/M.json";
import N from "@/data/dictionnaire/N.json";
import O from "@/data/dictionnaire/O.json";
import P from "@/data/dictionnaire/P.json";
import Q from "@/data/dictionnaire/Q.json";
import R from "@/data/dictionnaire/R.json";
import S from "@/data/dictionnaire/S.json";
import T from "@/data/dictionnaire/T.json";
import U from "@/data/dictionnaire/U.json";
import V from "@/data/dictionnaire/V.json";
import W from "@/data/dictionnaire/W.json";
import X from "@/data/dictionnaire/X.json";
import Y from "@/data/dictionnaire/Y.json";
import Z from "@/data/dictionnaire/Z.json";

/* ── Types ── */
export type DictCategory =
  | "planète"
  | "signe"
  | "maison"
  | "aspect"
  | "concept"
  | "point fictif"
  | "technique"
  | "personnalité"
  | "astronomique"
  | "branche"
  | "constellation";
  

export interface DictEntry {
  term: string;
  slug: string;
  category: DictCategory;
  short: string;
  body: string;
  related?: string[];
  seeAlso?: string;
}

/* ── Fusion ── */
const ALL_RAW = [
  ...A,
  ...B,
  ...C,
  ...D,
  ...E,
  ...F,
  ...G,
  ...H,
  ...I,
  ...J,
  ...K,
  ...L,
  ...M,
  ...N,
  ...O,
  ...P,
  ...Q,
  ...R,
  ...S,
  ...T,
  ...U,
  ...V,
  ...W,
  ...X,
  ...Y,
  ...Z,
] as DictEntry[];

/** Toutes les entrées triées alphabétiquement (français). */
export const ENTRIES: DictEntry[] = ALL_RAW.sort((a, b) =>
  a.term.localeCompare(b.term, "fr", { sensitivity: "base" }),
);

/** Regroupe les entrées par première lettre. */
export function groupByLetter(entries: DictEntry[] = ENTRIES) {
  const groups: Record<string, DictEntry[]> = {};
  for (const e of entries) {
    const letter = e.term
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .charAt(0)
      .toUpperCase();
    if (!groups[letter]) groups[letter] = [];
    groups[letter].push(e);
  }
  return groups;
}
