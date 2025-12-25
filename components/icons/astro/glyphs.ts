export type AstroGlyphName =
  // Signes
  | "aries" | "taurus" | "gemini" | "cancer" | "leo" | "virgo"
  | "libra" | "scorpio" | "sagittarius" | "capricorn" | "aquarius" | "pisces"
  // Planètes
  | "sun" | "moon" | "mercury" | "venus" | "mars"
  | "jupiter" | "saturn" | "uranus" | "neptune" | "pluto";

type Glyph = {
  paths?: string[];
  circles?: Array<{ cx: number; cy: number; r: number }>;
  lines?: Array<{ x1: number; y1: number; x2: number; y2: number }>;
};

export const ASTRO_GLYPHS: Record<AstroGlyphName, Glyph> = {
  /* ============ SIGNES (corrigés) ============ */

  // Bélier ♈ (cornes nettes)
  aries: {
    paths: [
      "M6 20c0-7 2.2-12 6-12s6 5 6 12",
      "M6 9C4.5 9 3 7.6 3 5.8 3 4.2 4.2 3 5.8 3",
      "M18 9c1.5 0 3-1.4 3-3.2C21 4.2 19.8 3 18.2 3",
    ],
  },

  taurus: {
    circles: [{ cx: 12, cy: 14, r: 5 }],
    paths: [
      "M7 6c0 2.8 2.2 5 5 5s5-2.2 5-5",
      "M7 6C7 4.3 5.7 3 4 3",
      "M17 6c0-1.7 1.3-3 3-3",
    ],
  },

  gemini: {
    lines: [
      { x1: 7, y1: 5, x2: 17, y2: 5 },
      { x1: 7, y1: 19, x2: 17, y2: 19 },
      { x1: 9, y1: 5, x2: 9, y2: 19 },
      { x1: 15, y1: 5, x2: 15, y2: 19 },
    ],
  },

  // Cancer ♋ (deux “6” opposés)
  cancer: {
    circles: [
      { cx: 9, cy: 9, r: 2.1 },
      { cx: 15, cy: 15, r: 2.1 },
    ],
    paths: [
      "M7.8 13.2c-1.7-1.2-2.8-3.1-2.8-5.2C5 5.2 7.2 3 10 3c2 0 3.7 1 4.6 2.4",
      "M16.2 10.8c1.7 1.2 2.8 3.1 2.8 5.2 0 2.8-2.2 5-5 5-2 0-3.7-1-4.6-2.4",
    ],
  },

  // Lion ♌ (boucle + queue)
  leo: {
    circles: [{ cx: 9, cy: 10, r: 2.1 }],
    paths: [
      "M11.1 10c1.6-2.6 4-4 6.2-4 2.7 0 4.7 2 4.7 4.7 0 2.2-1.2 3.6-3.2 4.3",
      "M12 14c2.2 0 4 1.8 4 4v1c0 1.7 1.3 3 3 3",
      "M7 12.2c-1.6-.6-3-2.1-3-4.2C4 5.2 6.2 3 9 3c1.4 0 2.7.6 3.6 1.5",
    ],
  },

  // Vierge ♍ (m + boucle)
  virgo: {
    paths: [
      "M6.5 5v14",
      "M10.5 5v14",
      "M14.5 5v10c0 2.2 1.8 4 4 4",
      "M18.5 19c-1 0-2-.5-2.6-1.2-.6-.7-.9-1.6-.9-2.6v-1.2",
      "M18.5 19c0 1.7-1.3 3-3 3",
    ],
  },

  // Balance ♎ (ligne + arche)
  libra: {
    paths: [
      "M6 17h12",
      "M7 17c1.3-3.3 3.2-5 5-5s3.7 1.7 5 5",
      "M8 8h8",
      "M8 8c.7-2.5 2.2-4 4-4s3.3 1.5 4 4",
    ],
  },

  scorpio: {
    paths: [
      "M6.5 5v14",
      "M10.5 5v14",
      "M14.5 5v10c0 2.2 1.8 4 4 4",
      // flèche
      "M19.5 19l2 2",
      "M21.5 19l-2 2",
    ],
  },

  // Sagittaire ♐ (flèche diagonale + empennage)
  sagittarius: {
    paths: [
      "M7 17L19 5",
      "M14 5h5v5",
      "M7 12v5h5",
    ],
  },

  // Capricorne ♑ (n + boucle)
  capricorn: {
    paths: [
      "M6.5 6v8c0 2.8 2.2 5 5 5s5-2.2 5-5V9",
      "M16.5 9c0-2.8 2.2-5 5-5",
      "M21.5 4v16",
    ],
  },

  aquarius: {
    paths: [
      "M5 10c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2",
      "M5 16c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2",
    ],
  },

  pisces: {
    paths: [
      "M7 6c2.5 1.5 4 3.8 4 6s-1.5 4.5-4 6",
      "M17 6c-2.5 1.5-4 3.8-4 6s1.5 4.5 4 6",
      "M7 12h10",
    ],
  },

  /* ============ PLANÈTES (corrigées) ============ */

  sun: {
    circles: [{ cx: 12, cy: 12, r: 3.2 }],
    paths: [
      "M12 2v3",
      "M12 19v3",
      "M2 12h3",
      "M19 12h3",
      "M4.2 4.2l2.1 2.1",
      "M17.7 17.7l2.1 2.1",
      "M19.8 4.2l-2.1 2.1",
      "M6.3 17.7l-2.1 2.1",
    ],
  },

  moon: {
    paths: ["M21 14.5A7.5 7.5 0 0 1 9.5 3a6.5 6.5 0 1 0 11.5 11.5z"],
  },

  // Mercure ☿ (croissant + cercle + croix)
  mercury: {
    circles: [{ cx: 12, cy: 10, r: 3.0 }],
    paths: [
      "M9 6.2c0-1.8 1.3-3.2 3-3.2s3 1.4 3 3.2",
      "M12 13v8",
      "M9.5 18h5",
    ],
  },

  // Vénus ♀
  venus: {
    circles: [{ cx: 12, cy: 10, r: 3.2 }],
    paths: ["M12 13.2V21", "M9.5 18h5"],
  },

  // Mars ♂
  mars: {
    circles: [{ cx: 10.5, cy: 13.5, r: 3.2 }],
    paths: ["M13 11l7-7", "M16 4h4v4"],
  },

  // Jupiter ♃ (courbe + croix)
  jupiter: {
    paths: [
      "M10 6c3 0 5 2.2 5 5 0 3.5-3 5.7-7 5.7",
      "M14.5 6v16",
      "M12.5 14h6",
    ],
  },

  // Saturne ♄ (croix + courbe)
  saturn: {
    paths: [
      "M14 6c-3 0-5 2.2-5 5 0 3.5 3 5.7 7 5.7",
      "M10 6v16",
      "M9 14h6",
    ],
  },

  // Uranus ♅ (H + cercle)
  uranus: {
    circles: [{ cx: 12, cy: 6, r: 1.7 }],
    paths: [
      "M8 9v11",
      "M16 9v11",
      "M8 14h8",
      "M12 9v12",
      "M10 21h4",
    ],
  },

  // Neptune ♆ (trident + base)
  neptune: {
    paths: [
      "M12 3v18",
      "M7 8c2.5 0 4-2 5-4 1 2 2.5 4 5 4",
      "M8 21h8",
    ],
  },

  // Pluton ♇ (P + croix simplifiée)
  pluto: {
    circles: [{ cx: 11, cy: 9, r: 2.0 }],
    paths: [
      "M11 11v10",
      "M9 18h4",
      "M13 7c1.7 0 3 1.3 3 3s-1.3 3-3 3",
      "M11 7h2",
    ],
  },
};
