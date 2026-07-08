import type { ReactNode } from "react";
import type { SeoLocale } from "@/lib/seo";

/** Contenu localisé d'une page « compatibilité [signe] + [signe] ». */
export type PairLangContent = {
  meta: { title: string; description: string };
  names: { a: string; b: string };
  h1: string;
  tagline: string;
  /** Notes sur 5 — affichage éditorial, PAS de schema Rating (pas de vraie agrégation d'avis). */
  scores: { amour: number; communication: number; duree: number };
  intro: ReactNode;
  dynamique: ReactNode;
  forces: string[];
  frictions: string[];
  amourSexe: ReactNode;
  amitieTravail: ReactNode;
  conseil: ReactNode;
  faq: { q: string; a: string }[];
};

export type PairContent = Record<SeoLocale, PairLangContent>;
