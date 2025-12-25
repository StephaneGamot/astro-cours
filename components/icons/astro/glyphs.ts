export type AstroGlyphName =
  // Signes
  | "aries" | "taurus" | "gemini" | "cancer" | "leo" | "virgo"
  | "libra" | "scorpio" | "sagittarius" | "capricorn" | "aquarius" | "pisces"
  // Planètes / points
  | "sun" | "moon" | "mercury" | "venus" | "mars"
  | "jupiter" | "saturn" | "uranus" | "neptune" | "pluto";

type Glyph = {
  paths?: string[];
  circles?: Array<{ cx: number; cy: number; r: number }>;
  lines?: Array<{ x1: number; y1: number; x2: number; y2: number }>;
  // optionnel: arcs/extra en path
};

export const ASTRO_GLYPHS: Record<AstroGlyphName, Glyph> = {
  /* =========================
     SIGNES (style outline / minimal)
     ========================= */

  aries: {
    paths: [
      "M7 19c0-6 2-11 5-11s5 5 5 11",
      "M7 9c-2 0-3-2-3-4 0-1.7 1.3-3 3-3",
      "M17 9c2 0 3-2 3-4 0-1.7-1.3-3-3-3",
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

  cancer: {
    circles: [
      { cx: 9, cy: 9, r: 2.2 },
      { cx: 15, cy: 15, r: 2.2 },
    ],
    paths: [
      "M13 7c0-2.2-1.8-4-4-4-2.2 0-4 1.8-4 4 0 3.5 5 2.5 5 6",
      "M11 17c0 2.2 1.8 4 4 4s4-1.8 4-4c0-3.5-5-2.5-5-6",
    ],
  },

  leo: {
    circles: [{ cx: 8.5, cy: 11, r: 2 }],
    paths: [
      "M10.5 11c2.6 0 4.5 1.8 4.5 4.4V18c0 1.7 1.3 3 3 3",
      "M8.5 13c-2.2 0-4-1.8-4-4s1.8-4 4-4c1.7 0 3.2 1 3.7 2.5",
    ],
  },

  virgo: {
    paths: [
      "M7 5v14",
      "M11 5v14c0 1.7-1.3 3-3 3",
      "M15 5v10c0 2.2 1.8 4 4 4",
      "M19 19v-2",
    ],
  },

  libra: {
    paths: [
      "M6 17h12",
      "M7 17c1.2-3.5 3.2-5 5-5s3.8 1.5 5 5",
      "M8 7h8",
    ],
  },

  scorpio: {
    paths: [
      "M7 5v14",
      "M11 5v14",
      "M15 5v10c0 2.2 1.8 4 4 4",
      "M19 19l2 2",
      "M21 19l-2 2",
    ],
  },

  sagittarius: {
    paths: [
      "M7 17L17 7",
      "M12 7h5v5",
      "M7 12v5h5",
    ],
  },

  capricorn: {
    paths: [
      "M7 5v9c0 2.8 2.2 5 5 5s5-2.2 5-5V9",
      "M17 9c0-2.2 1.8-4 4-4",
      "M21 5v14",
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

  /* =========================
     PLANÈTES / POINTS (minimal outline)
     ========================= */

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
    paths: [
      "M21 14.5A7.5 7.5 0 0 1 9.5 3a6.5 6.5 0 1 0 11.5 11.5z",
    ],
  },

  mercury: {
    circles: [{ cx: 12, cy: 11, r: 3.2 }],
    paths: [
      "M9 6c0-1.8 1.3-3 3-3s3 1.2 3 3",
      "M12 14.2V21",
      "M9.5 18.5h5",
    ],
  },

  venus: {
    circles: [{ cx: 12, cy: 10, r: 3.5 }],
    paths: [
      "M12 13.5V21",
      "M9.5 18.5h5",
    ],
  },

  mars: {
    circles: [{ cx: 10.5, cy: 13.5, r: 3.5 }],
    paths: [
      "M13 11l7-7",
      "M16 4h4v4",
    ],
  },

  jupiter: {
    paths: [
      "M10 5v16",
      "M10 10c0-3 2.5-5 6-5",
      "M14 15c-1.2 0-2.2.3-3 .8",
    ],
  },

  saturn: {
    paths: [
      "M14 5v16",
      "M14 10c0-3-2.5-5-6-5",
      "M10 15c1.2 0 2.2.3 3 .8",
    ],
  },

  uranus: {
    paths: [
      "M8 7v7",
      "M16 7v7",
      "M12 9v12",
      "M9 9h6",
      "M10 21h4",
    ],
    circles: [{ cx: 12, cy: 5, r: 1.6 }],
  },

  neptune: {
    paths: [
      "M12 3v18",
      "M7 8c2.5 0 4-2 5-4 1 2 2.5 4 5 4",
      "M8 21h8",
    ],
  },

  pluto: {
    circles: [{ cx: 12, cy: 9, r: 2.2 }],
    paths: [
      "M12 11.2V21",
      "M9.5 18.5h5",
      "M9 6c.8-1.8 2.1-3 3-3s2.2 1.2 3 3",
    ],
  },
};
