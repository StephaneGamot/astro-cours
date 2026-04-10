export const SIGNE_COLORS = {
  // ── FEU ──────────────────────────────────────────
  belier: {
    primaire: "#DC2626",     // Rouge vif — Mars, l'élan, le feu premier
    secondaire: "#F97316",   // Orange — L'énergie, la chaleur
    accent: "#FBBF24",       // Or — Le Soleil en exaltation
    gradient: "from-red-600 via-orange-500 to-amber-400",
  },
  lion: {
    primaire: "#F59E0B",     // Or chaud — Le Soleil, la royauté
    secondaire: "#EF4444",   // Rouge royal — La passion, la fierté
    accent: "#FCD34D",       // Or clair — L'éclat, le rayonnement
    gradient: "from-amber-500 via-orange-500 to-red-500",
  },
  sagittaire: {
    primaire: "#7C3AED",     // Violet profond — Jupiter, la sagesse
    secondaire: "#EC4899",   // Rose vif — L'aventure, l'expansion
    accent: "#F97316",       // Orange — Le feu de l'exploration
    gradient: "from-violet-600 via-purple-500 to-pink-500",
  },
 
  // ── TERRE ────────────────────────────────────────
  taureau: {
    primaire: "#059669",     // Émeraude — Vénus terrestre, la nature
    secondaire: "#84CC16",   // Vert lime — La fertilité, la croissance
    accent: "#D4A574",       // Terre dorée — La matière, la richesse
    gradient: "from-emerald-600 via-green-500 to-lime-400",
  },
  vierge: {
    primaire: "#0D9488",     // Teal — Mercure terrestre, l'analyse
    secondaire: "#6EE7B7",   // Menthe — La pureté, la précision
    accent: "#A3E635",       // Vert vif — L'efficacité
    gradient: "from-teal-600 via-emerald-500 to-green-400",
  },
  capricorne: {
    primaire: "#57534E",     // Pierre — Saturne, la structure
    secondaire: "#78716C",   // Granit — L'endurance, le temps
    accent: "#D4A574",       // Bronze — La récompense, la sagesse
    gradient: "from-stone-600 via-stone-500 to-amber-700",
  },
 
  // ── AIR ──────────────────────────────────────────
  gemeaux: {
    primaire: "#06B6D4",     // Cyan — Mercure aérien, la vivacité
    secondaire: "#38BDF8",   // Bleu ciel — La légèreté, le vent
    accent: "#A78BFA",       // Lavande — La dualité, l'esprit
    gradient: "from-cyan-500 via-sky-400 to-blue-400",
  },
  balance: {
    primaire: "#EC4899",     // Rose — Vénus aérienne, l'harmonie
    secondaire: "#A78BFA",   // Lavande — L'élégance, l'équilibre
    accent: "#F9A8D4",       // Rose pâle — La douceur, la grâce
    gradient: "from-pink-500 via-rose-400 to-violet-400",
  },
  verseau: {
    primaire: "#3B82F6",     // Bleu électrique — Uranus, l'innovation
    secondaire: "#06B6D4",   // Cyan — La liberté, le futur
    accent: "#818CF8",       // Indigo clair — L'originalité
    gradient: "from-blue-500 via-cyan-400 to-teal-400",
  },
 
  // ── EAU ──────────────────────────────────────────
  cancer: {
    primaire: "#8B5CF6",     // Violet doux — La Lune, la sensibilité
    secondaire: "#C4B5FD",   // Lavande pâle — La tendresse, le foyer
    accent: "#E0E7FF",       // Bleu nacré — L'intuition, la mère
    gradient: "from-violet-500 via-purple-400 to-indigo-300",
  },
  scorpion: {
    primaire: "#991B1B",     // Rouge sombre — Pluton/Mars, l'intensité
    secondaire: "#6B21A8",   // Pourpre — La profondeur, le mystère
    accent: "#F43F5E",       // Rouge rose — La passion, la transformation
    gradient: "from-red-900 via-purple-800 to-violet-700",
  },
  poissons: {
    primaire: "#6366F1",     // Indigo — Neptune, le rêve
    secondaire: "#818CF8",   // Indigo clair — L'imaginaire, la fluidité
    accent: "#C4B5FD",       // Lavande — La spiritualité, la dissolution
    gradient: "from-indigo-600 via-violet-500 to-purple-400",
  },
} as const;
 
export type SigneSlug = keyof typeof SIGNE_COLORS;
 