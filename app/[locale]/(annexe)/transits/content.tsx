import { Link } from "@/i18n/navigation";
import type { ReactNode } from "react";
import type { SeoLocale } from "@/lib/seo";

/* ====================================================================
   Transits — contenu localisé (fr / en / es)
   Les clés logiques (slug, angle, categorie, id de section) sont
   identiques dans chaque langue ; seuls les textes sont traduits.
   ==================================================================== */

export type TransitAspect = {
  slug: string;
  nom: string;
  angle: string;
  motsCles: string[];
  sens: string;
  aSurveiller?: string[];
  tips?: string[];
};

export type TransitPlanet = {
  slug: string;
  name: string;
  categorie: "rapide" | "sociale" | "transpersonnelle";
  categorieLabel: string;
  rythme: string;
  roleTransit: string;
  quandFort?: string[];
  themes?: string[];
  mantra?: string;
};

export type TransitsContent = {
  meta: { title: string; description: string };
  jsonld: { headline: string; description: string; articleSection: string };
  hero: {
    eyebrow: string;
    h1: string;
    intro: ReactNode;
    tocLabel: string;
  };
  sections: { id: string; label: string }[];
  defBox: { label: string; body: ReactNode };
  appIntro: ReactNode;
  labels: {
    definition: string;
    aQuoiCaSert: string;
    reglesOr: string;
    checklist: string;
    orbesTitle: string;
    conseils: string;
    quandFort: string;
    mantra: string;
    exemples: string;
  };
  sectionTitles: {
    definition: string;
    methode: string;
    aspects: string;
    planetes: string;
    natal: string;
    faq: string;
  };
  intro: { resume: string[]; aquoiCaSert: string[] };
  methode: {
    reglesOr: string[];
    orbes: { principes: string[]; recommandes: { label: string; orbe: string }[] };
    checklistLecture: string[];
  };
  aspectsMajeurs: TransitAspect[];
  planetes: TransitPlanet[];
  transitSurPlaneteNatale: {
    intro: string;
    grille: { titre: string; texte: string }[];
    exemples: { titre: string; texte: string }[];
  };
  faq: { q: string; a: string }[];
  footer: { next: ReactNode; aspects: string; dignities: string; houses: string; planets: string };
  faqVisibleTitle: string;
  faqVisible: { q: string; a: ReactNode }[];
  faqJsonLd: { name: string; text: string }[];
};

/* ============================== FR ============================== */
const fr: TransitsContent = {
  meta: {
    title: "Transits : guide complet, méthode et lecture",
    description:
      "Guide complet des transits astrologiques : définition, méthode, orbes et interprétation planète par planète. Découvrez notre cours structuré et concret !",
  },
  jsonld: {
    headline: "Transits — Cours d’astrologie",
    description:
      "Guide complet des transits : définition, méthode, orbes, rétrogrades, transit sur planète natale, et interprétation planète par planète avec aspects majeurs.",
    articleSection: "Astrologie",
  },
  hero: {
    eyebrow: "Cours d’astrologie — Timing & lecture du ciel",
    h1: "Les transits en astrologie : guide complet",
    intro: (
      <>
        Une page <span className="text-text">100% méthode</span> : comment lire un transit proprement,
        comment hiérarchiser, quels orbes utiliser, et comment interpréter{" "}
        <span className="text-text">planète par planète</span> sans tomber dans le flou.
      </>
    ),
    tocLabel: "Sommaire",
  },
  sections: [
    { id: "definition", label: "Définition" },
    { id: "methode", label: "Méthode" },
    { id: "aspects", label: "Aspects" },
    { id: "planetes", label: "Planètes" },
    { id: "natal", label: "Natal" },
    { id: "faq", label: "FAQ" },
  ],
  defBox: {
    label: "Définition",
    body: (
      <>
        Un <strong>transit astrologique</strong> est le passage d'une planète en mouvement sur un point
        sensible du thème natal ; il active temporairement un domaine de vie et se lit en fonction de la{" "}
        <Link href="/maisons">maison</Link>, des <Link href="/aspects">aspects</Link> formés et de la
        vitesse de la planète.
      </>
    ),
  },
  appIntro: (
    <>
      Vous voulez apprendre à lire les <strong>transits en astrologie</strong> avec une vraie méthode ?
      La plupart des ressources en ligne restent vagues sur les orbes, la hiérarchie des planètes et
      l'interprétation concrète. Ce guide complet vous donne les règles d'or, les aspects clés et une
      lecture planète par planète pour interpréter chaque transit avec rigueur.
    </>
  ),
  labels: {
    definition: "Définition",
    aQuoiCaSert: "À quoi ça sert",
    reglesOr: "Règles d’or",
    checklist: "Checklist",
    orbesTitle: "Orbes (simple + pro)",
    conseils: "Conseils",
    quandFort: "Quand c’est fort",
    mantra: "Mantra :",
    exemples: "Exemples",
  },
  sectionTitles: {
    definition: "Qu'est-ce qu'un transit en astrologie ?",
    methode: "Comment interpréter un transit astrologique ?",
    aspects: "Quels aspects surveiller lors d'un transit ?",
    planetes: "Comment chaque planète agit-elle en transit ?",
    natal: "Comment lire un transit sur une planète natale ?",
    faq: "Questions fréquentes sur les transits",
  },
  intro: {
    resume: [
      "Un transit est le passage d’une planète du ciel du moment qui forme un aspect à un point de ton thème natal (planète, angle, maison).",
      "Les transits ne “créent” pas forcément un événement : ils activent une période, une tension ou une opportunité — et montrent ce qui est mûr pour évoluer.",
    ],
    aquoiCaSert: [
      "Saisir le timing : quand une dynamique devient plus visible.",
      "Donner du sens : quelles fonctions psychologiques sont en réajustement.",
      "Prioriser : distinguer l’important (lents/angles) du bruit (rapides).",
    ],
  },
  methode: {
    reglesOr: [
      "Toujours partir du natal : la promesse du thème prime sur le transit.",
      "Hiérarchie : angles (ASC/MC/DSC/FC) > Soleil/Lune > planètes personnelles > sociales > transpersonnelles.",
      "Plus c’est lent, plus c’est structurant (Uranus/Neptune/Pluton).",
      "Un transit devient fort s’il se répète : passage direct + rétrograde + direct (triptyque).",
    ],
    orbes: {
      principes: [
        "Les orbes dépendent de l’expérience et du contexte. On peut commencer simple et affiner ensuite.",
        "Plus l’astre natal est “fort” (Soleil/Lune/ASC/MC), plus on tolère un orbe large.",
      ],
      recommandes: [
        { label: "Planètes rapides (Soleil, Mercure, Vénus, Mars)", orbe: "0°30 à 2°" },
        { label: "Jupiter / Saturne", orbe: "1° à 3°" },
        { label: "Uranus / Neptune / Pluton", orbe: "1° à 2° (jusqu’à 3° sur angles)" },
      ],
    },
    checklistLecture: [
      "1) Quelle planète transite ? (fonction activée)",
      "2) Quel point natal est touché ? (domaine interne / besoin / volonté / relation…)",
      "3) Quel aspect ? (tension, opportunité, intégration)",
      "4) Dans quelle maison du thème natal passe la planète en transit ? (décor de la période)",
      "5) Contexte : répétitions (rétrograde), thèmes de fond (lents), déclencheurs (rapides)",
    ],
  },
  aspectsMajeurs: [
    {
      slug: "conjonction",
      nom: "Conjonction",
      angle: "0°",
      motsCles: ["fusion", "nouveau cycle", "intensification"],
      sens: "La planète en transit “colle” au point natal : amplification, démarrage, mise en lumière. C’est un reset.",
      aSurveiller: ["sur-identification", "excès", "décisions trop rapides si planète impulsive"],
      tips: ["nommer l’enjeu", "poser une intention claire", "canaliser dans un geste concret"],
    },
    {
      slug: "sextile",
      nom: "Sextile",
      angle: "60°",
      motsCles: ["opportunité", "fluidité", "ouverture"],
      sens: "Porte qui s’ouvre : ça aide, mais il faut agir. Opportunité légère mais réelle.",
      aSurveiller: ["passivité", "laisser passer la fenêtre"],
      tips: ["faire un pas", "dire oui à une proposition raisonnable", "tester sans surinvestir"],
    },
    {
      slug: "carre",
      nom: "Carré",
      angle: "90°",
      motsCles: ["tension", "ajustement", "déclencheur"],
      sens: "Conflit utile : friction qui oblige à évoluer. Ça montre où le système est trop rigide.",
      aSurveiller: ["réactivité", "entêtement", "conflits inutiles"],
      tips: ["changer une habitude", "clarifier une limite", "éviter la fuite ou la provocation"],
    },
    {
      slug: "trigone",
      nom: "Trigone",
      angle: "120°",
      motsCles: ["aisance", "talent", "alignement"],
      sens: "Fluidité naturelle : les choses coulent. Très bon pour consolider et stabiliser.",
      aSurveiller: ["confort", "manque d’effort", "occasion non exploitée"],
      tips: ["ancrer dans le réel", "formaliser", "transformer le facile en durable"],
    },
    {
      slug: "opposition",
      nom: "Opposition",
      angle: "180°",
      motsCles: ["miroir", "relation", "polarité"],
      sens: "Ce qui est en face révèle un déséquilibre : l’autre, le monde, la contrainte. Demande intégration.",
      aSurveiller: ["projection", "victimisation", "ruptures impulsives"],
      tips: ["négocier", "écouter l’autre comme un miroir", "chercher le milieu"],
    },
  ],
  planetes: [
    {
      slug: "soleil",
      name: "Soleil",
      categorie: "rapide",
      categorieLabel: "rapide",
      rythme: "jours",
      roleTransit: "Déclencheur de clarté : identité, direction, volonté.",
      quandFort: ["sur Soleil natal, ASC, MC", "en conjonction/opposition/carré"],
      themes: ["affirmation", "visibilité", "décision", "égo sain"],
      mantra: "Je me recentre et je choisis.",
    },
    {
      slug: "lune",
      name: "Lune",
      categorie: "rapide",
      categorieLabel: "rapide",
      rythme: "heures/jours",
      roleTransit: "Météo émotionnelle : besoins, sécurité, réactivité.",
      quandFort: ["sur Lune natale", "sur angles", "en phase avec un transit lent"],
      themes: ["humeur", "famille", "intimité", "corps"],
      mantra: "J’écoute mon besoin sans me confondre avec lui.",
    },
    {
      slug: "mercure",
      name: "Mercure",
      categorie: "rapide",
      categorieLabel: "rapide",
      rythme: "jours/semaines",
      roleTransit: "Pensée & communication : décisions, échanges, contrats, trajets.",
      quandFort: ["rétrograde sur un point natal", "sur Mercure natal"],
      themes: ["messages", "organisation", "apprentissage", "clarification"],
      mantra: "Je clarifie avant d’accélérer.",
    },
    {
      slug: "venus",
      name: "Vénus",
      categorie: "rapide",
      categorieLabel: "rapide",
      rythme: "semaines",
      roleTransit: "Valeur & relation : harmonie, désir, argent, esthétique.",
      quandFort: ["sur Vénus natale", "sur ASC/DSC", "avec Mars"],
      themes: ["attirance", "plaisir", "accord", "estime"],
      mantra: "Je choisis ce qui nourrit ma valeur.",
    },
    {
      slug: "mars",
      name: "Mars",
      categorie: "rapide",
      categorieLabel: "rapide",
      rythme: "semaines",
      roleTransit: "Action & désir : énergie, courage, conflit, initiative.",
      quandFort: ["conjonction à Mars natal", "carrés aux angles"],
      themes: ["déclic", "urgence", "sport", "colère"],
      mantra: "J’agis proprement, sans brûler.",
    },
    {
      slug: "jupiter",
      name: "Jupiter",
      categorie: "sociale",
      categorieLabel: "sociale",
      rythme: "mois",
      roleTransit: "Expansion & sens : croissance, protection, vision.",
      quandFort: ["sur Soleil/MC", "trigone/sextile aux personnelles"],
      themes: ["chance", "opportunité", "études", "voyage", "confiance"],
      mantra: "J’agrandis sans perdre ma boussole.",
    },
    {
      slug: "saturne",
      name: "Saturne",
      categorie: "sociale",
      categorieLabel: "sociale",
      rythme: "mois/années",
      roleTransit: "Structure & réalité : responsabilité, limites, maturité.",
      quandFort: ["sur ASC/MC", "carrés/oppositions", "retour de Saturne"],
      themes: ["devoir", "temps", "cadre", "profession", "solidification"],
      mantra: "Je construis ce qui tient.",
    },
    {
      slug: "uranus",
      name: "Uranus",
      categorie: "transpersonnelle",
      categorieLabel: "transpersonnelle",
      rythme: "années",
      roleTransit: "Libération & rupture : nouveauté, imprévu, réveil.",
      quandFort: ["sur Vénus/Mars/Soleil", "sur angles", "conjonction"],
      themes: ["changement", "indépendance", "réinvention", "vérité"],
      mantra: "Je change sans casser l’essentiel.",
    },
    {
      slug: "neptune",
      name: "Neptune",
      categorie: "transpersonnelle",
      categorieLabel: "transpersonnelle",
      rythme: "années",
      roleTransit: "Dissolution & idéal : inspiration, empathie, flou, foi.",
      quandFort: ["sur Soleil/Lune", "carrés", "conjonction"],
      themes: ["spiritualité", "rêve", "illusion", "fatigue", "hyper-sensibilité"],
      mantra: "Je garde les pieds sur terre, le cœur ouvert.",
    },
    {
      slug: "pluton",
      name: "Pluton",
      categorie: "transpersonnelle",
      categorieLabel: "transpersonnelle",
      rythme: "années",
      roleTransit: "Transformation & pouvoir : crise, profondeur, mue.",
      quandFort: ["sur angles", "sur Soleil/Lune", "aspects exacts répétés"],
      themes: ["contrôle", "vérité", "deuil", "renaissance", "intensité"],
      mantra: "Je me transforme au lieu de résister.",
    },
  ],
  transitSurPlaneteNatale: {
    intro:
      "Interpréter un transit = planète transite (verbe) + planète natale (fonction touchée) + aspect (dynamique) + maison (décor).",
    grille: [
      {
        titre: "Transiteuse rapide → déclencheur",
        texte:
          "Le Soleil/Mercure/Vénus/Mars déclenchent, précisent, accélèrent. Ils donnent des dates et des événements concrets.",
      },
      {
        titre: "Sociales → étapes",
        texte:
          "Jupiter/Saturne marquent des cycles : expansion, consolidation, épreuve utile. Très visibles dans la vie concrète.",
      },
      {
        titre: "Transpersonnelles → chapitres",
        texte:
          "Uranus/Neptune/Pluton changent la structure du personnage. On parle souvent d’années, pas de semaines.",
      },
    ],
    exemples: [
      {
        titre: "Saturne carré Vénus natale",
        texte:
          "Test de valeur et de relation : on clarifie ce qui est solide, on renégocie ce qui est flou. Moins de “plaisir immédiat”, plus d’engagement réel.",
      },
      {
        titre: "Jupiter conjonction Soleil natal",
        texte:
          "Période de confiance : visibilité, expansion, opportunité. Attention aux promesses trop grandes : garder une direction.",
      },
      {
        titre: "Pluton sur l’ASC",
        texte:
          "Mue identitaire : changement d’image, de rapport au corps, de manière d’exister. Intensité, vérité, tri naturel.",
      },
    ],
  },
  faq: [
    {
      q: "Faut-il absolument une heure de naissance exacte ?",
      a: "Pour les angles/maisons, oui c’est idéal. Sinon on travaille déjà très bien avec les planètes et aspects principaux.",
    },
    {
      q: "Les rétrogrades changent-ils tout ?",
      a: "Ils répètent et approfondissent. On observe souvent un “aller-retour” : comprendre, revoir, décider, puis valider.",
    },
    {
      q: "Transits ou progressions ?",
      a: "Transits = météo externe + timing. Progressions = maturation interne. Ensemble : très puissant.",
    },
  ],
  footer: {
    next: (
      <>
        Prochaine étape : relier les transits aux <span className="text-text">dignités</span>,{" "}
        <span className="text-text">maisons</span> et <span className="text-text">aspects</span>.
      </>
    ),
    aspects: "Aspects",
    dignities: "Dignités",
    houses: "Maisons",
    planets: "Planètes",
  },
  faqVisibleTitle: "Questions fréquentes sur les transits astrologiques",
  faqVisible: [
    {
      q: "Qu’est-ce qu’un transit en astrologie et comment le lire ?",
      a: (
        <>
          Un <strong>transit astrologique</strong> est le passage d’une planète en mouvement sur un
          point du thème natal. Pour le lire, on identifie la planète (quoi), la{" "}
          <Link href="/maisons">maison</Link> activée (où), les <Link href="/aspects">aspects</Link>{" "}
          formés (comment) et la durée du passage. Les transits lents (Saturne, Uranus, Pluton) ont plus
          d’impact que les rapides.
        </>
      ),
    },
    {
      q: "Quels orbes utiliser pour les transits astrologiques ?",
      a: (
        <>
          Les orbes dépendent de la planète : environ 1 à 2 degres pour les <strong>transits lents</strong>{" "}
          (Saturne a Pluton) et jusqu’à 5 degres pour les luminaires. Plus l’orbe est serré, plus l’effet
          est concentré. La conjonction et l’opposition demandent des orbes légèrement plus larges que le
          carré ou le trigone.
        </>
      ),
    },
    {
      q: "Quelle différence entre un transit rapide et un transit lent ?",
      a: (
        <>
          Les <strong>transits rapides</strong> (Soleil, Lune, Mercure, Venus, Mars) durent quelques jours
          à quelques semaines et activent des événements ponctuels. Les <strong>transits lents</strong>{" "}
          (Jupiter à Pluton) durent des mois voire des années et provoquent des transformations profondes
          et structurantes. Voir aussi les <Link href="/retrogrades">rétrogrades</Link> pour comprendre les
          allers-retours.
        </>
      ),
    },
    {
      q: "Comment hiérarchiser les transits dans un thème natal ?",
      a: (
        <>
          Priorisez les transits lents sur les points sensibles : <strong>Soleil, Lune, ASC, MC</strong> et
          les <Link href="/noeuds-lunaires">noeuds lunaires</Link>. Ensuite, regardez les aspects exacts
          (conjonction, opposition, carré). Enfin, croisez avec les transits rapides pour affiner le timing
          des événements.
        </>
      ),
    },
  ],
  faqJsonLd: [
    {
      name: "Qu’est-ce qu’un transit en astrologie et comment le lire ?",
      text: "Un transit astrologique est le passage d’une planète en mouvement sur un point du thème natal. Pour le lire, on identifie la planète (quoi), la maison activée (où), les aspects formés (comment) et la durée du passage. Les transits lents (Saturne, Uranus, Pluton) ont plus d’impact que les rapides.",
    },
    {
      name: "Quels orbes utiliser pour les transits astrologiques ?",
      text: "Les orbes dépendent de la planète : environ 1 à 2 degrés pour les transits lents (Saturne à Pluton) et jusqu’à 5 degrés pour les luminaires. Plus l’orbe est serré, plus l’effet est concentré.",
    },
    {
      name: "Quelle différence entre un transit rapide et un transit lent ?",
      text: "Les transits rapides (Soleil, Lune, Mercure, Vénus, Mars) durent quelques jours à quelques semaines et activent des événements ponctuels. Les transits lents (Jupiter à Pluton) durent des mois voire des années et provoquent des transformations profondes et structurantes.",
    },
    {
      name: "Comment hiérarchiser les transits dans un thème natal ?",
      text: "Priorisez les transits lents sur les points sensibles : Soleil, Lune, ASC, MC et les noeuds lunaires. Ensuite, regardez les aspects exacts (conjonction, opposition, carré). Enfin, croisez avec les transits rapides pour affiner le timing des événements.",
    },
  ],
};

/* ============================== EN ============================== */
const en: TransitsContent = {
  meta: {
    title: "Transits: complete guide, method and reading",
    description:
      "Complete guide to astrological transits: definition, method, orbs and planet-by-planet interpretation. Discover our structured, hands-on course!",
  },
  jsonld: {
    headline: "Transits — Astrology course",
    description:
      "Complete guide to transits: definition, method, orbs, retrogrades, transit over a natal planet, and planet-by-planet interpretation with the major aspects.",
    articleSection: "Astrology",
  },
  hero: {
    eyebrow: "Astrology course — Timing & reading the sky",
    h1: "Transits in astrology: the complete guide",
    intro: (
      <>
        A <span className="text-text">100% method</span> page: how to read a transit cleanly, how to set
        priorities, which orbs to use, and how to interpret{" "}
        <span className="text-text">planet by planet</span> without slipping into vagueness.
      </>
    ),
    tocLabel: "Contents",
  },
  sections: [
    { id: "definition", label: "Definition" },
    { id: "methode", label: "Method" },
    { id: "aspects", label: "Aspects" },
    { id: "planetes", label: "Planets" },
    { id: "natal", label: "Natal" },
    { id: "faq", label: "FAQ" },
  ],
  defBox: {
    label: "Definition",
    body: (
      <>
        An <strong>astrological transit</strong> is the passage of a moving planet over a sensitive point
        of the natal chart; it temporarily activates an area of life and is read according to the{" "}
        <Link href="/maisons">house</Link>, the <Link href="/aspects">aspects</Link> formed and the
        planet's speed.
      </>
    ),
  },
  appIntro: (
    <>
      Do you want to learn to read <strong>transits in astrology</strong> with a real method? Most online
      resources stay vague about orbs, the hierarchy of the planets and concrete interpretation. This
      complete guide gives you the golden rules, the key aspects and a planet-by-planet reading so you can
      interpret each transit with rigour.
    </>
  ),
  labels: {
    definition: "Definition",
    aQuoiCaSert: "What it's for",
    reglesOr: "Golden rules",
    checklist: "Checklist",
    orbesTitle: "Orbs (simple + pro)",
    conseils: "Tips",
    quandFort: "When it's strong",
    mantra: "Mantra:",
    exemples: "Examples",
  },
  sectionTitles: {
    definition: "What is a transit in astrology?",
    methode: "How do you interpret an astrological transit?",
    aspects: "Which aspects should you watch during a transit?",
    planetes: "How does each planet act in transit?",
    natal: "How do you read a transit over a natal planet?",
    faq: "Frequently asked questions about transits",
  },
  intro: {
    resume: [
      "A transit is the passage of a planet in the current sky that forms an aspect to a point of your natal chart (planet, angle, house).",
      "Transits don't necessarily “create” an event: they activate a period, a tension or an opportunity — and show what is ripe to evolve.",
    ],
    aquoiCaSert: [
      "Grasp the timing: when a dynamic becomes more visible.",
      "Give meaning: which psychological functions are being readjusted.",
      "Set priorities: tell the important (slow planets/angles) from the noise (fast planets).",
    ],
  },
  methode: {
    reglesOr: [
      "Always start from the natal chart: the chart's promise takes priority over the transit.",
      "Hierarchy: angles (ASC/MC/DSC/IC) > Sun/Moon > personal planets > social > transpersonal.",
      "The slower it is, the more structuring it is (Uranus/Neptune/Pluto).",
      "A transit becomes strong when it repeats: direct pass + retrograde + direct (the triptych).",
    ],
    orbes: {
      principes: [
        "Orbs depend on experience and context. You can start simple and refine afterwards.",
        "The “stronger” the natal body (Sun/Moon/ASC/MC), the wider the orb you can allow.",
      ],
      recommandes: [
        { label: "Fast planets (Sun, Mercury, Venus, Mars)", orbe: "0°30 to 2°" },
        { label: "Jupiter / Saturn", orbe: "1° to 3°" },
        { label: "Uranus / Neptune / Pluto", orbe: "1° to 2° (up to 3° on angles)" },
      ],
    },
    checklistLecture: [
      "1) Which planet is transiting? (function activated)",
      "2) Which natal point is touched? (inner domain / need / will / relationship…)",
      "3) Which aspect? (tension, opportunity, integration)",
      "4) Which house of the natal chart is the transiting planet passing through? (the setting of the period)",
      "5) Context: repetitions (retrograde), background themes (slow), triggers (fast)",
    ],
  },
  aspectsMajeurs: [
    {
      slug: "conjonction",
      nom: "Conjunction",
      angle: "0°",
      motsCles: ["fusion", "new cycle", "intensification"],
      sens: "The transiting planet “sticks” to the natal point: amplification, kick-off, spotlight. It's a reset.",
      aSurveiller: ["over-identification", "excess", "decisions made too fast if the planet is impulsive"],
      tips: ["name the stake", "set a clear intention", "channel it into a concrete action"],
    },
    {
      slug: "sextile",
      nom: "Sextile",
      angle: "60°",
      motsCles: ["opportunity", "fluidity", "opening"],
      sens: "A door that opens: it helps, but you have to act. A light yet real opportunity.",
      aSurveiller: ["passivity", "letting the window pass"],
      tips: ["take a step", "say yes to a reasonable proposal", "test without over-investing"],
    },
    {
      slug: "carre",
      nom: "Square",
      angle: "90°",
      motsCles: ["tension", "adjustment", "trigger"],
      sens: "Useful conflict: friction that forces growth. It shows where the system is too rigid.",
      aSurveiller: ["reactivity", "stubbornness", "pointless conflicts"],
      tips: ["change a habit", "clarify a boundary", "avoid fleeing or provoking"],
    },
    {
      slug: "trigone",
      nom: "Trine",
      angle: "120°",
      motsCles: ["ease", "talent", "alignment"],
      sens: "Natural flow: things move smoothly. Very good for consolidating and stabilising.",
      aSurveiller: ["comfort", "lack of effort", "an opportunity left untapped"],
      tips: ["anchor it in reality", "formalise it", "turn the easy into the lasting"],
    },
    {
      slug: "opposition",
      nom: "Opposition",
      angle: "180°",
      motsCles: ["mirror", "relationship", "polarity"],
      sens: "What stands opposite reveals an imbalance: the other, the world, the constraint. It calls for integration.",
      aSurveiller: ["projection", "victimhood", "impulsive break-ups"],
      tips: ["negotiate", "listen to the other as a mirror", "look for the middle ground"],
    },
  ],
  planetes: [
    {
      slug: "soleil",
      name: "Sun",
      categorie: "rapide",
      categorieLabel: "fast",
      rythme: "days",
      roleTransit: "Trigger of clarity: identity, direction, will.",
      quandFort: ["on natal Sun, ASC, MC", "in conjunction/opposition/square"],
      themes: ["assertion", "visibility", "decision", "healthy ego"],
      mantra: "I re-centre myself and I choose.",
    },
    {
      slug: "lune",
      name: "Moon",
      categorie: "rapide",
      categorieLabel: "fast",
      rythme: "hours/days",
      roleTransit: "Emotional weather: needs, security, reactivity.",
      quandFort: ["on the natal Moon", "on the angles", "in phase with a slow transit"],
      themes: ["mood", "family", "intimacy", "body"],
      mantra: "I listen to my need without merging with it.",
    },
    {
      slug: "mercure",
      name: "Mercury",
      categorie: "rapide",
      categorieLabel: "fast",
      rythme: "days/weeks",
      roleTransit: "Thought & communication: decisions, exchanges, contracts, journeys.",
      quandFort: ["retrograde on a natal point", "on natal Mercury"],
      themes: ["messages", "organisation", "learning", "clarification"],
      mantra: "I clarify before I accelerate.",
    },
    {
      slug: "venus",
      name: "Venus",
      categorie: "rapide",
      categorieLabel: "fast",
      rythme: "weeks",
      roleTransit: "Value & relationship: harmony, desire, money, aesthetics.",
      quandFort: ["on natal Venus", "on ASC/DSC", "with Mars"],
      themes: ["attraction", "pleasure", "agreement", "self-worth"],
      mantra: "I choose what nourishes my worth.",
    },
    {
      slug: "mars",
      name: "Mars",
      categorie: "rapide",
      categorieLabel: "fast",
      rythme: "weeks",
      roleTransit: "Action & desire: energy, courage, conflict, initiative.",
      quandFort: ["conjunction to natal Mars", "squares to the angles"],
      themes: ["spark", "urgency", "sport", "anger"],
      mantra: "I act cleanly, without burning out.",
    },
    {
      slug: "jupiter",
      name: "Jupiter",
      categorie: "sociale",
      categorieLabel: "social",
      rythme: "months",
      roleTransit: "Expansion & meaning: growth, protection, vision.",
      quandFort: ["on Sun/MC", "trine/sextile to the personal planets"],
      themes: ["luck", "opportunity", "studies", "travel", "confidence"],
      mantra: "I expand without losing my compass.",
    },
    {
      slug: "saturne",
      name: "Saturn",
      categorie: "sociale",
      categorieLabel: "social",
      rythme: "months/years",
      roleTransit: "Structure & reality: responsibility, limits, maturity.",
      quandFort: ["on ASC/MC", "squares/oppositions", "Saturn return"],
      themes: ["duty", "time", "framework", "career", "solidification"],
      mantra: "I build what lasts.",
    },
    {
      slug: "uranus",
      name: "Uranus",
      categorie: "transpersonnelle",
      categorieLabel: "transpersonal",
      rythme: "years",
      roleTransit: "Liberation & rupture: novelty, the unexpected, awakening.",
      quandFort: ["on Venus/Mars/Sun", "on the angles", "conjunction"],
      themes: ["change", "independence", "reinvention", "truth"],
      mantra: "I change without breaking what is essential.",
    },
    {
      slug: "neptune",
      name: "Neptune",
      categorie: "transpersonnelle",
      categorieLabel: "transpersonal",
      rythme: "years",
      roleTransit: "Dissolution & ideal: inspiration, empathy, haze, faith.",
      quandFort: ["on Sun/Moon", "squares", "conjunction"],
      themes: ["spirituality", "dream", "illusion", "fatigue", "hyper-sensitivity"],
      mantra: "I keep my feet on the ground and my heart open.",
    },
    {
      slug: "pluton",
      name: "Pluto",
      categorie: "transpersonnelle",
      categorieLabel: "transpersonal",
      rythme: "years",
      roleTransit: "Transformation & power: crisis, depth, metamorphosis.",
      quandFort: ["on the angles", "on Sun/Moon", "repeated exact aspects"],
      themes: ["control", "truth", "grief", "rebirth", "intensity"],
      mantra: "I transform myself instead of resisting.",
    },
  ],
  transitSurPlaneteNatale: {
    intro:
      "Interpreting a transit = transiting planet (the verb) + natal planet (the function touched) + aspect (the dynamic) + house (the setting).",
    grille: [
      {
        titre: "Fast transiting planet → trigger",
        texte:
          "The Sun/Mercury/Venus/Mars trigger, pinpoint, accelerate. They give dates and concrete events.",
      },
      {
        titre: "Social planets → stages",
        texte:
          "Jupiter/Saturn mark cycles: expansion, consolidation, a useful ordeal. Very visible in everyday life.",
      },
      {
        titre: "Transpersonal planets → chapters",
        texte:
          "Uranus/Neptune/Pluto change the structure of the character. We often speak of years, not weeks.",
      },
    ],
    exemples: [
      {
        titre: "Saturn square natal Venus",
        texte:
          "A test of value and relationship: you clarify what is solid, you renegotiate what is hazy. Less “immediate pleasure”, more real commitment.",
      },
      {
        titre: "Jupiter conjunct natal Sun",
        texte:
          "A period of confidence: visibility, expansion, opportunity. Beware of promises that are too big: keep a direction.",
      },
      {
        titre: "Pluto on the ASC",
        texte:
          "Identity metamorphosis: a change of image, of relationship to the body, of way of existing. Intensity, truth, a natural sorting.",
      },
    ],
  },
  faq: [
    {
      q: "Do you absolutely need an exact birth time?",
      a: "For the angles/houses, yes, it's ideal. Otherwise you can already work very well with the main planets and aspects.",
    },
    {
      q: "Do retrogrades change everything?",
      a: "They repeat and deepen. You often see a “back and forth”: understand, review, decide, then confirm.",
    },
    {
      q: "Transits or progressions?",
      a: "Transits = external weather + timing. Progressions = inner maturation. Together: very powerful.",
    },
  ],
  footer: {
    next: (
      <>
        Next step: connect the transits to <span className="text-text">dignities</span>,{" "}
        <span className="text-text">houses</span> and <span className="text-text">aspects</span>.
      </>
    ),
    aspects: "Aspects",
    dignities: "Dignities",
    houses: "Houses",
    planets: "Planets",
  },
  faqVisibleTitle: "Frequently asked questions about astrological transits",
  faqVisible: [
    {
      q: "What is a transit in astrology and how do you read it?",
      a: (
        <>
          An <strong>astrological transit</strong> is the passage of a moving planet over a point of the
          natal chart. To read it, you identify the planet (what), the activated{" "}
          <Link href="/maisons">house</Link> (where), the <Link href="/aspects">aspects</Link> formed
          (how) and the duration of the passage. Slow transits (Saturn, Uranus, Pluto) have more impact
          than fast ones.
        </>
      ),
    },
    {
      q: "Which orbs should you use for astrological transits?",
      a: (
        <>
          Orbs depend on the planet: about 1 to 2 degrees for <strong>slow transits</strong> (Saturn to
          Pluto) and up to 5 degrees for the luminaries. The tighter the orb, the more concentrated the
          effect. The conjunction and the opposition call for slightly wider orbs than the square or the
          trine.
        </>
      ),
    },
    {
      q: "What is the difference between a fast transit and a slow transit?",
      a: (
        <>
          <strong>Fast transits</strong> (Sun, Moon, Mercury, Venus, Mars) last a few days to a few weeks
          and activate one-off events. <strong>Slow transits</strong> (Jupiter to Pluto) last months or
          even years and bring deep, structuring transformations. See also{" "}
          <Link href="/retrogrades">retrogrades</Link> to understand the back-and-forth motion.
        </>
      ),
    },
    {
      q: "How do you prioritise transits in a natal chart?",
      a: (
        <>
          Prioritise slow transits on the sensitive points: <strong>Sun, Moon, ASC, MC</strong> and the{" "}
          <Link href="/noeuds-lunaires">lunar nodes</Link>. Then look at the exact aspects (conjunction,
          opposition, square). Finally, cross-reference with the fast transits to fine-tune the timing of
          events.
        </>
      ),
    },
  ],
  faqJsonLd: [
    {
      name: "What is a transit in astrology and how do you read it?",
      text: "An astrological transit is the passage of a moving planet over a point of the natal chart. To read it, you identify the planet (what), the activated house (where), the aspects formed (how) and the duration of the passage. Slow transits (Saturn, Uranus, Pluto) have more impact than fast ones.",
    },
    {
      name: "Which orbs should you use for astrological transits?",
      text: "Orbs depend on the planet: about 1 to 2 degrees for slow transits (Saturn to Pluto) and up to 5 degrees for the luminaries. The tighter the orb, the more concentrated the effect.",
    },
    {
      name: "What is the difference between a fast transit and a slow transit?",
      text: "Fast transits (Sun, Moon, Mercury, Venus, Mars) last a few days to a few weeks and activate one-off events. Slow transits (Jupiter to Pluto) last months or even years and bring deep, structuring transformations.",
    },
    {
      name: "How do you prioritise transits in a natal chart?",
      text: "Prioritise slow transits on the sensitive points: Sun, Moon, ASC, MC and the lunar nodes. Then look at the exact aspects (conjunction, opposition, square). Finally, cross-reference with the fast transits to fine-tune the timing of events.",
    },
  ],
};

/* ============================== ES ============================== */
const es: TransitsContent = {
  meta: {
    title: "Tránsitos: guía completa, método y lectura",
    description:
      "Guía completa de los tránsitos astrológicos: definición, método, orbes e interpretación planeta por planeta. ¡Curso estructurado y concreto!",
  },
  jsonld: {
    headline: "Tránsitos — Curso de astrología",
    description:
      "Guía completa de los tránsitos: definición, método, orbes, retrógrados, tránsito sobre un planeta natal e interpretación planeta por planeta con los aspectos mayores.",
    articleSection: "Astrología",
  },
  hero: {
    eyebrow: "Curso de astrología — Timing y lectura del cielo",
    h1: "Los tránsitos en astrología: guía completa",
    intro: (
      <>
        Una página <span className="text-text">100% método</span>: cómo leer un tránsito con limpieza,
        cómo jerarquizar, qué orbes usar y cómo interpretar{" "}
        <span className="text-text">planeta por planeta</span> sin caer en la vaguedad.
      </>
    ),
    tocLabel: "Índice",
  },
  sections: [
    { id: "definition", label: "Definición" },
    { id: "methode", label: "Método" },
    { id: "aspects", label: "Aspectos" },
    { id: "planetes", label: "Planetas" },
    { id: "natal", label: "Natal" },
    { id: "faq", label: "FAQ" },
  ],
  defBox: {
    label: "Definición",
    body: (
      <>
        Un <strong>tránsito astrológico</strong> es el paso de un planeta en movimiento sobre un punto
        sensible de la carta natal; activa temporalmente un ámbito de la vida y se lee en función de la{" "}
        <Link href="/maisons">casa</Link>, de los <Link href="/aspects">aspectos</Link> formados y de la
        velocidad del planeta.
      </>
    ),
  },
  appIntro: (
    <>
      ¿Quieres aprender a leer los <strong>tránsitos en astrología</strong> con un método de verdad? La
      mayoría de los recursos en línea son vagos sobre los orbes, la jerarquía de los planetas y la
      interpretación concreta. Esta guía completa te ofrece las reglas de oro, los aspectos clave y una
      lectura planeta por planeta para interpretar cada tránsito con rigor.
    </>
  ),
  labels: {
    definition: "Definición",
    aQuoiCaSert: "Para qué sirve",
    reglesOr: "Reglas de oro",
    checklist: "Checklist",
    orbesTitle: "Orbes (simple + pro)",
    conseils: "Consejos",
    quandFort: "Cuándo es fuerte",
    mantra: "Mantra:",
    exemples: "Ejemplos",
  },
  sectionTitles: {
    definition: "¿Qué es un tránsito en astrología?",
    methode: "¿Cómo interpretar un tránsito astrológico?",
    aspects: "¿Qué aspectos vigilar durante un tránsito?",
    planetes: "¿Cómo actúa cada planeta en tránsito?",
    natal: "¿Cómo leer un tránsito sobre un planeta natal?",
    faq: "Preguntas frecuentes sobre los tránsitos",
  },
  intro: {
    resume: [
      "Un tránsito es el paso de un planeta del cielo del momento que forma un aspecto a un punto de tu carta natal (planeta, ángulo, casa).",
      "Los tránsitos no “crean” necesariamente un acontecimiento: activan un periodo, una tensión o una oportunidad — y muestran lo que está maduro para evolucionar.",
    ],
    aquoiCaSert: [
      "Captar el timing: cuándo una dinámica se vuelve más visible.",
      "Dar sentido: qué funciones psicológicas están en reajuste.",
      "Priorizar: distinguir lo importante (lentos/ángulos) del ruido (rápidos).",
    ],
  },
  methode: {
    reglesOr: [
      "Partir siempre de la carta natal: la promesa de la carta prevalece sobre el tránsito.",
      "Jerarquía: ángulos (ASC/MC/DSC/FC) > Sol/Luna > planetas personales > sociales > transpersonales.",
      "Cuanto más lento, más estructurante (Urano/Neptuno/Plutón).",
      "Un tránsito se vuelve fuerte si se repite: paso directo + retrógrado + directo (el tríptico).",
    ],
    orbes: {
      principes: [
        "Los orbes dependen de la experiencia y del contexto. Se puede empezar simple y afinar después.",
        "Cuanto más “fuerte” es el astro natal (Sol/Luna/ASC/MC), más amplio es el orbe que se tolera.",
      ],
      recommandes: [
        { label: "Planetas rápidos (Sol, Mercurio, Venus, Marte)", orbe: "0°30 a 2°" },
        { label: "Júpiter / Saturno", orbe: "1° a 3°" },
        { label: "Urano / Neptuno / Plutón", orbe: "1° a 2° (hasta 3° en ángulos)" },
      ],
    },
    checklistLecture: [
      "1) ¿Qué planeta transita? (función activada)",
      "2) ¿Qué punto natal está tocado? (ámbito interno / necesidad / voluntad / relación…)",
      "3) ¿Qué aspecto? (tensión, oportunidad, integración)",
      "4) ¿Por qué casa de la carta natal pasa el planeta en tránsito? (el decorado del periodo)",
      "5) Contexto: repeticiones (retrógrado), temas de fondo (lentos), detonantes (rápidos)",
    ],
  },
  aspectsMajeurs: [
    {
      slug: "conjonction",
      nom: "Conjunción",
      angle: "0°",
      motsCles: ["fusión", "nuevo ciclo", "intensificación"],
      sens: "El planeta en tránsito se “pega” al punto natal: amplificación, arranque, puesta en luz. Es un reinicio.",
      aSurveiller: ["sobreidentificación", "exceso", "decisiones demasiado rápidas si el planeta es impulsivo"],
      tips: ["nombrar lo que está en juego", "plantear una intención clara", "canalizarlo en un gesto concreto"],
    },
    {
      slug: "sextile",
      nom: "Sextil",
      angle: "60°",
      motsCles: ["oportunidad", "fluidez", "apertura"],
      sens: "Puerta que se abre: ayuda, pero hay que actuar. Una oportunidad ligera pero real.",
      aSurveiller: ["pasividad", "dejar pasar la ventana"],
      tips: ["dar un paso", "decir sí a una propuesta razonable", "probar sin sobreinvertir"],
    },
    {
      slug: "carre",
      nom: "Cuadratura",
      angle: "90°",
      motsCles: ["tensión", "ajuste", "detonante"],
      sens: "Conflicto útil: fricción que obliga a evolucionar. Muestra dónde el sistema es demasiado rígido.",
      aSurveiller: ["reactividad", "obstinación", "conflictos inútiles"],
      tips: ["cambiar un hábito", "clarificar un límite", "evitar la huida o la provocación"],
    },
    {
      slug: "trigone",
      nom: "Trígono",
      angle: "120°",
      motsCles: ["soltura", "talento", "alineación"],
      sens: "Fluidez natural: las cosas fluyen. Muy bueno para consolidar y estabilizar.",
      aSurveiller: ["comodidad", "falta de esfuerzo", "ocasión no aprovechada"],
      tips: ["anclar en lo real", "formalizar", "transformar lo fácil en duradero"],
    },
    {
      slug: "opposition",
      nom: "Oposición",
      angle: "180°",
      motsCles: ["espejo", "relación", "polaridad"],
      sens: "Lo que está enfrente revela un desequilibrio: el otro, el mundo, la restricción. Pide integración.",
      aSurveiller: ["proyección", "victimismo", "rupturas impulsivas"],
      tips: ["negociar", "escuchar al otro como un espejo", "buscar el punto medio"],
    },
  ],
  planetes: [
    {
      slug: "soleil",
      name: "Sol",
      categorie: "rapide",
      categorieLabel: "rápido",
      rythme: "días",
      roleTransit: "Detonante de claridad: identidad, dirección, voluntad.",
      quandFort: ["sobre Sol natal, ASC, MC", "en conjunción/oposición/cuadratura"],
      themes: ["afirmación", "visibilidad", "decisión", "ego sano"],
      mantra: "Me recentro y elijo.",
    },
    {
      slug: "lune",
      name: "Luna",
      categorie: "rapide",
      categorieLabel: "rápido",
      rythme: "horas/días",
      roleTransit: "Meteorología emocional: necesidades, seguridad, reactividad.",
      quandFort: ["sobre la Luna natal", "sobre los ángulos", "en fase con un tránsito lento"],
      themes: ["humor", "familia", "intimidad", "cuerpo"],
      mantra: "Escucho mi necesidad sin confundirme con ella.",
    },
    {
      slug: "mercure",
      name: "Mercurio",
      categorie: "rapide",
      categorieLabel: "rápido",
      rythme: "días/semanas",
      roleTransit: "Pensamiento y comunicación: decisiones, intercambios, contratos, trayectos.",
      quandFort: ["retrógrado sobre un punto natal", "sobre Mercurio natal"],
      themes: ["mensajes", "organización", "aprendizaje", "clarificación"],
      mantra: "Clarifico antes de acelerar.",
    },
    {
      slug: "venus",
      name: "Venus",
      categorie: "rapide",
      categorieLabel: "rápido",
      rythme: "semanas",
      roleTransit: "Valor y relación: armonía, deseo, dinero, estética.",
      quandFort: ["sobre Venus natal", "sobre ASC/DSC", "con Marte"],
      themes: ["atracción", "placer", "acuerdo", "autoestima"],
      mantra: "Elijo lo que nutre mi valor.",
    },
    {
      slug: "mars",
      name: "Marte",
      categorie: "rapide",
      categorieLabel: "rápido",
      rythme: "semanas",
      roleTransit: "Acción y deseo: energía, valor, conflicto, iniciativa.",
      quandFort: ["conjunción a Marte natal", "cuadraturas a los ángulos"],
      themes: ["chispa", "urgencia", "deporte", "ira"],
      mantra: "Actúo con limpieza, sin quemarme.",
    },
    {
      slug: "jupiter",
      name: "Júpiter",
      categorie: "sociale",
      categorieLabel: "social",
      rythme: "meses",
      roleTransit: "Expansión y sentido: crecimiento, protección, visión.",
      quandFort: ["sobre Sol/MC", "trígono/sextil a los personales"],
      themes: ["suerte", "oportunidad", "estudios", "viaje", "confianza"],
      mantra: "Crezco sin perder mi brújula.",
    },
    {
      slug: "saturne",
      name: "Saturno",
      categorie: "sociale",
      categorieLabel: "social",
      rythme: "meses/años",
      roleTransit: "Estructura y realidad: responsabilidad, límites, madurez.",
      quandFort: ["sobre ASC/MC", "cuadraturas/oposiciones", "retorno de Saturno"],
      themes: ["deber", "tiempo", "marco", "profesión", "solidificación"],
      mantra: "Construyo lo que se sostiene.",
    },
    {
      slug: "uranus",
      name: "Urano",
      categorie: "transpersonnelle",
      categorieLabel: "transpersonal",
      rythme: "años",
      roleTransit: "Liberación y ruptura: novedad, imprevisto, despertar.",
      quandFort: ["sobre Venus/Marte/Sol", "sobre los ángulos", "conjunción"],
      themes: ["cambio", "independencia", "reinvención", "verdad"],
      mantra: "Cambio sin romper lo esencial.",
    },
    {
      slug: "neptune",
      name: "Neptuno",
      categorie: "transpersonnelle",
      categorieLabel: "transpersonal",
      rythme: "años",
      roleTransit: "Disolución e ideal: inspiración, empatía, neblina, fe.",
      quandFort: ["sobre Sol/Luna", "cuadraturas", "conjunción"],
      themes: ["espiritualidad", "sueño", "ilusión", "fatiga", "hipersensibilidad"],
      mantra: "Mantengo los pies en la tierra y el corazón abierto.",
    },
    {
      slug: "pluton",
      name: "Plutón",
      categorie: "transpersonnelle",
      categorieLabel: "transpersonal",
      rythme: "años",
      roleTransit: "Transformación y poder: crisis, profundidad, metamorfosis.",
      quandFort: ["sobre los ángulos", "sobre Sol/Luna", "aspectos exactos repetidos"],
      themes: ["control", "verdad", "duelo", "renacimiento", "intensidad"],
      mantra: "Me transformo en lugar de resistir.",
    },
  ],
  transitSurPlaneteNatale: {
    intro:
      "Interpretar un tránsito = planeta que transita (el verbo) + planeta natal (la función tocada) + aspecto (la dinámica) + casa (el decorado).",
    grille: [
      {
        titre: "Transitante rápido → detonante",
        texte:
          "El Sol/Mercurio/Venus/Marte detonan, precisan, aceleran. Dan fechas y acontecimientos concretos.",
      },
      {
        titre: "Sociales → etapas",
        texte:
          "Júpiter/Saturno marcan ciclos: expansión, consolidación, prueba útil. Muy visibles en la vida concreta.",
      },
      {
        titre: "Transpersonales → capítulos",
        texte:
          "Urano/Neptuno/Plutón cambian la estructura del personaje. Se habla a menudo de años, no de semanas.",
      },
    ],
    exemples: [
      {
        titre: "Saturno cuadratura Venus natal",
        texte:
          "Prueba de valor y de relación: se clarifica lo que es sólido, se renegocia lo que es difuso. Menos “placer inmediato”, más compromiso real.",
      },
      {
        titre: "Júpiter conjunción Sol natal",
        texte:
          "Periodo de confianza: visibilidad, expansión, oportunidad. Cuidado con las promesas demasiado grandes: mantener una dirección.",
      },
      {
        titre: "Plutón sobre el ASC",
        texte:
          "Metamorfosis de identidad: cambio de imagen, de relación con el cuerpo, de manera de existir. Intensidad, verdad, una criba natural.",
      },
    ],
  },
  faq: [
    {
      q: "¿Es imprescindible una hora de nacimiento exacta?",
      a: "Para los ángulos/casas, sí, es lo ideal. Si no, ya se trabaja muy bien con los planetas y aspectos principales.",
    },
    {
      q: "¿Los retrógrados lo cambian todo?",
      a: "Repiten y profundizan. Se observa a menudo un “ir y venir”: comprender, revisar, decidir y luego validar.",
    },
    {
      q: "¿Tránsitos o progresiones?",
      a: "Tránsitos = meteorología externa + timing. Progresiones = maduración interna. Juntos: muy potente.",
    },
  ],
  footer: {
    next: (
      <>
        Siguiente paso: vincular los tránsitos con las <span className="text-text">dignidades</span>, las{" "}
        <span className="text-text">casas</span> y los <span className="text-text">aspectos</span>.
      </>
    ),
    aspects: "Aspectos",
    dignities: "Dignidades",
    houses: "Casas",
    planets: "Planetas",
  },
  faqVisibleTitle: "Preguntas frecuentes sobre los tránsitos astrológicos",
  faqVisible: [
    {
      q: "¿Qué es un tránsito en astrología y cómo se lee?",
      a: (
        <>
          Un <strong>tránsito astrológico</strong> es el paso de un planeta en movimiento sobre un punto de
          la carta natal. Para leerlo, se identifica el planeta (qué), la{" "}
          <Link href="/maisons">casa</Link> activada (dónde), los <Link href="/aspects">aspectos</Link>{" "}
          formados (cómo) y la duración del paso. Los tránsitos lentos (Saturno, Urano, Plutón) tienen más
          impacto que los rápidos.
        </>
      ),
    },
    {
      q: "¿Qué orbes usar para los tránsitos astrológicos?",
      a: (
        <>
          Los orbes dependen del planeta: alrededor de 1 a 2 grados para los <strong>tránsitos lentos</strong>{" "}
          (Saturno a Plutón) y hasta 5 grados para los luminares. Cuanto más cerrado es el orbe, más
          concentrado es el efecto. La conjunción y la oposición piden orbes ligeramente más amplios que la
          cuadratura o el trígono.
        </>
      ),
    },
    {
      q: "¿Qué diferencia hay entre un tránsito rápido y un tránsito lento?",
      a: (
        <>
          Los <strong>tránsitos rápidos</strong> (Sol, Luna, Mercurio, Venus, Marte) duran de unos días a
          unas semanas y activan acontecimientos puntuales. Los <strong>tránsitos lentos</strong> (Júpiter
          a Plutón) duran meses e incluso años y provocan transformaciones profundas y estructurantes. Mira
          también los <Link href="/retrogrades">retrógrados</Link> para entender los idas y vueltas.
        </>
      ),
    },
    {
      q: "¿Cómo jerarquizar los tránsitos en una carta natal?",
      a: (
        <>
          Prioriza los tránsitos lentos sobre los puntos sensibles: <strong>Sol, Luna, ASC, MC</strong> y
          los <Link href="/noeuds-lunaires">nodos lunares</Link>. Después, observa los aspectos exactos
          (conjunción, oposición, cuadratura). Por último, cruza con los tránsitos rápidos para afinar el
          timing de los acontecimientos.
        </>
      ),
    },
  ],
  faqJsonLd: [
    {
      name: "¿Qué es un tránsito en astrología y cómo se lee?",
      text: "Un tránsito astrológico es el paso de un planeta en movimiento sobre un punto de la carta natal. Para leerlo, se identifica el planeta (qué), la casa activada (dónde), los aspectos formados (cómo) y la duración del paso. Los tránsitos lentos (Saturno, Urano, Plutón) tienen más impacto que los rápidos.",
    },
    {
      name: "¿Qué orbes usar para los tránsitos astrológicos?",
      text: "Los orbes dependen del planeta: alrededor de 1 a 2 grados para los tránsitos lentos (Saturno a Plutón) y hasta 5 grados para los luminares. Cuanto más cerrado es el orbe, más concentrado es el efecto.",
    },
    {
      name: "¿Qué diferencia hay entre un tránsito rápido y un tránsito lento?",
      text: "Los tránsitos rápidos (Sol, Luna, Mercurio, Venus, Marte) duran de unos días a unas semanas y activan acontecimientos puntuales. Los tránsitos lentos (Júpiter a Plutón) duran meses e incluso años y provocan transformaciones profundas y estructurantes.",
    },
    {
      name: "¿Cómo jerarquizar los tránsitos en una carta natal?",
      text: "Prioriza los tránsitos lentos sobre los puntos sensibles: Sol, Luna, ASC, MC y los nodos lunares. Después, observa los aspectos exactos (conjunción, oposición, cuadratura). Por último, cruza con los tránsitos rápidos para afinar el timing de los acontecimientos.",
    },
  ],
};

export const transitsContent: Record<SeoLocale, TransitsContent> = { fr, en, es };
