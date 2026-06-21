import { Link } from "@/i18n/navigation";
import type { ReactNode } from "react";
import type { SeoLocale } from "@/lib/seo";

/* ====================================================================
   Points fictifs — contenu localisé (fr / en / es)
   Les clés logiques (id de section, kind) sont identiques dans chaque
   langue ; seuls les textes sont traduits.
   ==================================================================== */

export type AccentKind = "core" | "math" | "angle" | "destiny" | "method";

export type PointsFictifsContent = {
  meta: { title: string; description: string };
  jsonld: { headline: string; description: string; articleSection: string };
  hero: {
    eyebrow: string;
    h1: string;
    intro: string;
    highlights: string[];
    imgAlt: string;
  };
  defBox: { label: string; body: ReactNode };
  appIntro: ReactNode;
  tocLabel: string;
  sections: { id: string; label: string }[];
  definition: {
    title: string;
    isBadge: string;
    isItems: string[];
    isNotBadge: string;
    isNotItems: string[];
  };
  classification: {
    title: string;
    angles: { h: string; items: string[] };
    calculated: { h: string; items: string[] };
    modern: { h: string; items: string[] };
    proRule: { h: string; body: string };
  };
  majorPoints: {
    title: string;
    items: { kind: AccentKind; title: string; subtitle: string; points: string[] }[];
  };
  method: { title: string; steps: { t: string; d: string }[] };
  aspects: {
    title: string;
    conj: { h: string; body: string };
    tension: { h: string; body: string };
  };
  transits: { title: string; items: string[] };
  pitfalls: {
    title: string;
    mistakesBadge: string;
    mistakes: string[];
    goodBadge: string;
    good: string[];
  };
  faqTopTitle: string;
  faqTop: { q: string; a: string }[];
  footer: { cta: string; aspects: string; houses: string; transits: string };
  faqTitle: string;
  faq: { q: string; a: ReactNode }[];
  faqJsonLd: { name: string; text: string }[];
};

/* ============================== FR ============================== */
const fr: PointsFictifsContent = {
  meta: {
    title: "Points fictifs — Vertex, Fortune, Chiron : méthode",
    description:
      "Points fictifs en astrologie : Vertex, Part de Fortune, Chiron, ASC/MC, Noeuds et Lilith. Lecture par signe, maison et aspects. Explorez notre méthode !",
  },
  jsonld: {
    headline: "Points fictifs, Vertex, Fortune, Chiron, angle & méthode",
    description:
      "Points fictifs en astrologie : Vertex, Part de Fortune, Chiron, ASC/MC, Noeuds et Lilith. Lecture par signe, maison et aspects.",
    articleSection: "Astrologie",
  },
  hero: {
    eyebrow: "Cours d’astrologie — Techniques de lecture",
    h1: "Les points fictifs en astrologie",
    intro:
      "Les points fictifs sont des repères subtils mais puissants : angles, points calculés, axes karmiques, zones de déclenchement relationnel ou d’orientation intérieure. Ce cours propose une lecture claire, hiérarchisée et vraiment exploitable.",
    highlights: [
      "Pas des “planètes” : points, angles, calculs",
      "Maison d’abord, signe ensuite",
      "Aspects = déclencheurs",
      "Transits = timing",
    ],
    imgAlt: "Illustration symbolique des points fictifs en astrologie",
  },
  defBox: {
    label: "Définition",
    body: (
      <>
        Les <strong>points fictifs en astrologie</strong> sont des repères géométriques ou calculés (angles, axes, lots) qui ne correspondent pas à un corps céleste mais décrivent des fonctions symboliques essentielles comme la manifestation (<Link href="/points-fictifs#points">Vertex</Link>), le flux (<Link href="/points-fictifs#points">Part de Fortune</Link>) ou la blessure formatrice (<Link href="/points-fictifs#points">Chiron</Link>).
      </>
    ),
  },
  appIntro: (
    <>
      Vous cherchez à comprendre le rôle des <strong>points fictifs</strong> dans un thème astral ? Ces repères subtils sont souvent mal hiérarchisés ou surinterpretés, ce qui brouille la lecture. Cette page vous donne une classification claire, une méthode de lecture point par point, et les erreurs les plus courantes à éviter.
    </>
  ),
  tocLabel: "Sommaire",
  sections: [
    { id: "definition", label: "Définition" },
    { id: "classification", label: "Catégories" },
    { id: "points", label: "Points majeurs" },
    { id: "methode", label: "Méthode pro" },
    { id: "aspects", label: "Aspects" },
    { id: "transits", label: "Transits" },
    { id: "piges", label: "Pièges" },
    { id: "faq", label: "FAQ" },
  ],
  definition: {
    title: "Qu'est-ce qu'un point fictif en astrologie ?",
    isBadge: "Ce que c’est",
    isItems: [
      "Un point fictif n’est pas un corps céleste : c’est un repère géométrique, un axe ou un point calculé.",
      "Il décrit une fonction : angle de manifestation, point de flux, déclencheur relationnel ou axe d’évolution.",
      "On le lit comme une structure symbolique : signe, maison, maître, aspects, activation temporelle.",
    ],
    isNotBadge: "Ce que ce n’est pas",
    isNotItems: [
      "Ce n’est pas une planète cachée ni un objet autonome.",
      "Ce n’est pas un verdict absolu : sa lecture dépend du thème global.",
      "Ce n’est pas un remplacement des fondamentaux : il complète, il ne remplace pas.",
    ],
  },
  classification: {
    title: "Quelles sont les catégories de points fictifs ?",
    angles: {
      h: "Angles / axes",
      items: [
        "ASC / DSC : entrée dans la vie et relation à l’autre.",
        "MC / IC : vocation, statut, racines et base intérieure.",
        "Vertex / Anti-Vertex : événements et rencontres marquantes.",
      ],
    },
    calculated: {
      h: "Points calculés",
      items: [
        "Part de Fortune : fluidité, rendement, zone de circulation naturelle.",
        "Part d’Esprit : direction mentale, visée, stratégie intérieure.",
        "Autres parts arabes : intéressantes, mais à lire avec rigueur.",
      ],
    },
    modern: {
      h: "Facteurs symboliques modernes",
      items: [
        "Chiron : blessure, compétence, transmission.",
        "Lilith : intensité, refus, désir non domestiqué.",
        "Nœuds lunaires : croissance, trajectoire, automatismes du passé.",
      ],
    },
    proRule: {
      h: "Règle pro",
      body:
        "Plus le point est structurel, plus il est central. Plus il est calculé ou symbolique, plus il devient pertinent quand il est relié à une maison, un maître et des aspects précis.",
    },
  },
  majorPoints: {
    title: "Quels sont les points fictifs majeurs à connaître ?",
    items: [
      {
        kind: "angle",
        title: "Vertex",
        subtitle: "Rencontres marquantes / tournants relationnels",
        points: [
          "Souvent activé lors d’événements relationnels importants.",
          "La maison montre le domaine où la vie provoque une rencontre-clé.",
          "Les aspects à Vénus, Mars ou la Lune renforcent fortement l’impact vécu.",
        ],
      },
      {
        kind: "math",
        title: "Part de Fortune",
        subtitle: "Flux, rendement, aisance naturelle",
        points: [
          "À lire comme un point de circulation ou d’efficacité.",
          "La maison indique le domaine, le signe montre le style.",
          "Le maître du signe explique comment l’activer concrètement.",
        ],
      },
      {
        kind: "destiny",
        title: "Chiron",
        subtitle: "Blessure, compétence, transmission",
        points: [
          "Zone sensible mais très formatrice.",
          "Aspect à Soleil, Lune ou ASC : vécu profondément identitaire.",
          "Excellent point d’analyse en pédagogie, accompagnement ou soin.",
        ],
      },
      {
        kind: "core",
        title: "ASC / MC",
        subtitle: "Manifestation et direction",
        points: [
          "ASC : posture, tempérament, manière d’entrer dans le monde.",
          "MC : trajectoire, visibilité, vocation et sommet de thème.",
          "Tout transit lourd sur ces points devient généralement concret.",
        ],
      },
    ],
  },
  method: {
    title: "Comment interpréter un point fictif dans un thème ?",
    steps: [
      { t: "1) Maison d’abord", d: "La maison donne le domaine de vie. Sans elle, la lecture devient abstraite." },
      { t: "2) Signe ensuite", d: "Le signe colore la posture, la tonalité, la manière dont le point s’exprime." },
      { t: "3) Maître du signe", d: "Le maître explique comment accéder concrètement à la fonction du point." },
      { t: "4) Aspects", d: "Les aspects montrent comment ce point dialogue avec le reste du thème." },
      { t: "5) Timing", d: "Les transits et progressions indiquent quand le point s’active réellement." },
    ],
  },
  aspects: {
    title: "Quels aspects activer sur les points fictifs ?",
    conj: {
      h: "Conjonction",
      body:
        "La conjonction fusionne la planète et le point. C’est la forme d’activation la plus directe et souvent la plus visible psychologiquement.",
    },
    tension: {
      h: "Carré / opposition",
      body:
        "Les tensions obligent à choisir, réajuster ou mûrir. Sur Vertex, Nœuds, ASC ou MC, elles correspondent souvent à des virages structurants.",
    },
  },
  transits: {
    title: "Comment les transits activent-ils les points fictifs ?",
    items: [
      "Transits sur ASC / MC : changements visibles dans la vie concrète.",
      "Transits sur Vertex : rencontres, événements, basculements relationnels.",
      "Transits sur Fortune : opportunités, circulation, réajustement du flux.",
      "Saturne, Uranus ou Pluton sur un point : périodes longues, décisives et structurantes.",
    ],
  },
  pitfalls: {
    title: "Quelles erreurs éviter avec les points fictifs ?",
    mistakesBadge: "Erreurs fréquentes",
    mistakes: [
      "Lire un point sans maison : la lecture devient vague.",
      "Surinterpréter un facteur secondaire comme s’il remplaçait une planète.",
      "Oublier le maître du signe, donc la véritable clé d’accès.",
      "Chercher une prophétie au lieu d’un mécanisme symbolique lisible.",
    ],
    goodBadge: "Bonnes pratiques",
    good: [
      "Toujours suivre : maison → signe → maître → aspects → timing.",
      "Relier la lecture à des comportements et domaines concrets.",
      "Garder une hiérarchie entre points structurants et points secondaires.",
      "Croiser les transits avec les progressions si tu veux raffiner le timing.",
    ],
  },
  faqTopTitle: "Questions fréquentes sur les points fictifs",
  faqTop: [
    {
      q: "Est-ce que Chiron est un point fictif ?",
      a: "Techniquement non : c’est un corps. Mais dans la pratique moderne, il est souvent traité comme un facteur symbolique proche d’un point clé.",
    },
    {
      q: "La Part de Fortune est-elle fiable ?",
      a: "Oui, à condition d’être cohérent sur la méthode et de toujours la relier à la maison, au signe, au maître et aux aspects.",
    },
    {
      q: "Vertex = destin ?",
      a: "Mieux vaut parler de rencontres marquantes, de basculements ou d’événements relationnels significatifs, surtout lors d’activations.",
    },
    {
      q: "Faut-il tous les lire ?",
      a: "Non. Il faut prioriser : ASC/MC d’abord, puis Nœuds, Chiron, Lilith selon le sujet, puis Vertex et Fortune en complément.",
    },
  ],
  footer: {
    cta: "Explorer les aspects",
    aspects: "Aspects",
    houses: "Maisons",
    transits: "Transits",
  },
  faqTitle: "Questions fréquentes sur les points fictifs en astrologie",
  faq: [
    {
      q: "Chiron est-il vraiment un point fictif ?",
      a: (
        <>
          Techniquement, <strong>Chiron</strong> est un petit corps céleste (astéroïde/comète). Cependant, en pratique astrologique, il est souvent classé parmi les <strong>points fictifs</strong> car il joue un rôle symbolique proche : blessure, compétence et transmission. Il se lit comme une fonction, pas comme une planète classique. Voir aussi les <Link href="/aspects">aspects</Link> pour comprendre ses interactions.
        </>
      ),
    },
    {
      q: "Comment calculer la Part de Fortune dans un thème natal ?",
      a: (
        <>
          La <strong>Part de Fortune</strong> se calcule à partir de la position de l'Ascendant, du Soleil et de la Lune. La formule classique est : ASC + Lune - Soleil (de jour). Ce qui compte en interprétation, c'est sa maison, son signe et le maître du signe pour savoir comment l'activer.
        </>
      ),
    },
    {
      q: "Le Vertex est-il lié au destin en astrologie ?",
      a: (
        <>
          Le <strong>Vertex</strong> est souvent associé aux rencontres marquantes et aux tournants relationnels. Plutôt que de parler de destin, on préfère dire qu'il indique des moments où la vie provoque un basculement, surtout lorsqu'il est activé par des <Link href="/transits">transits</Link> de planètes lentes.
        </>
      ),
    },
    {
      q: "Faut-il lire tous les points fictifs dans un thème astral ?",
      a: (
        <>
          Non. Il faut prioriser : <strong>ASC/MC</strong> d'abord (structurels), puis les <Link href="/noeuds-lunaires">noeuds lunaires</Link>, Chiron et Lilith selon le sujet, enfin Vertex et Part de Fortune en complément. L'erreur serait de tout lire sans hiérarchie.
        </>
      ),
    },
  ],
  faqJsonLd: [
    {
      name: "Chiron est-il vraiment un point fictif ?",
      text: "Techniquement, Chiron est un petit corps céleste (astéroïde/comète). Cependant, en pratique astrologique, il est souvent classé parmi les points fictifs car il joue un rôle symbolique proche : blessure, compétence et transmission. Il se lit comme une fonction, pas comme une planète classique.",
    },
    {
      name: "Comment calculer la Part de Fortune dans un thème natal ?",
      text: "La Part de Fortune se calcule à partir de la position de l'Ascendant, du Soleil et de la Lune. La formule classique est : ASC + Lune - Soleil (de jour). Ce qui compte en interprétation, c'est sa maison, son signe et le maître du signe pour savoir comment l'activer.",
    },
    {
      name: "Le Vertex est-il lié au destin en astrologie ?",
      text: "Le Vertex est souvent associé aux rencontres marquantes et aux tournants relationnels. Plutôt que de parler de destin, on préfère dire qu'il indique des moments où la vie provoque un basculement, surtout lorsqu'il est activé par des transits de planètes lentes.",
    },
    {
      name: "Faut-il lire tous les points fictifs dans un thème astral ?",
      text: "Non. Il faut prioriser : ASC/MC d'abord (structurels), puis les noeuds lunaires, Chiron et Lilith selon le sujet, enfin Vertex et Part de Fortune en complément. L'erreur serait de tout lire sans hiérarchie.",
    },
  ],
};

/* ============================== EN ============================== */
const en: PointsFictifsContent = {
  meta: {
    title: "Sensitive points — Vertex, Fortune, Chiron: method",
    description:
      "Sensitive points in astrology: Vertex, Part of Fortune, Chiron, ASC/MC, Nodes and Lilith. Reading by sign, house and aspects. Explore our method!",
  },
  jsonld: {
    headline: "Sensitive points: Vertex, Fortune, Chiron, angles & method",
    description:
      "Sensitive points in astrology: Vertex, Part of Fortune, Chiron, ASC/MC, Nodes and Lilith. Reading by sign, house and aspects.",
    articleSection: "Astrology",
  },
  hero: {
    eyebrow: "Astrology course — Reading techniques",
    h1: "Sensitive points in astrology",
    intro:
      "Sensitive points are subtle yet powerful markers: angles, calculated points, karmic axes, zones of relational triggering or of inner orientation. This course offers a clear, prioritised and genuinely usable reading.",
    highlights: [
      "Not “planets”: points, angles, calculations",
      "House first, sign next",
      "Aspects = triggers",
      "Transits = timing",
    ],
    imgAlt: "Symbolic illustration of sensitive points in astrology",
  },
  defBox: {
    label: "Definition",
    body: (
      <>
        <strong>Sensitive points in astrology</strong> are geometric or calculated markers (angles, axes, lots) that do not correspond to a celestial body but describe essential symbolic functions such as manifestation (<Link href="/points-fictifs#points">Vertex</Link>), flow (<Link href="/points-fictifs#points">Part of Fortune</Link>) or the formative wound (<Link href="/points-fictifs#points">Chiron</Link>).
      </>
    ),
  },
  appIntro: (
    <>
      Trying to understand the role of <strong>sensitive points</strong> in a birth chart? These subtle markers are often poorly prioritised or over-interpreted, which clouds the reading. This page gives you a clear classification, a point-by-point reading method, and the most common mistakes to avoid.
    </>
  ),
  tocLabel: "Contents",
  sections: [
    { id: "definition", label: "Definition" },
    { id: "classification", label: "Categories" },
    { id: "points", label: "Major points" },
    { id: "methode", label: "Pro method" },
    { id: "aspects", label: "Aspects" },
    { id: "transits", label: "Transits" },
    { id: "piges", label: "Pitfalls" },
    { id: "faq", label: "FAQ" },
  ],
  definition: {
    title: "What is a sensitive point in astrology?",
    isBadge: "What it is",
    isItems: [
      "A sensitive point is not a celestial body: it is a geometric marker, an axis or a calculated point.",
      "It describes a function: an angle of manifestation, a point of flow, a relational trigger or an axis of evolution.",
      "You read it as a symbolic structure: sign, house, ruler, aspects, temporal activation.",
    ],
    isNotBadge: "What it is not",
    isNotItems: [
      "It is not a hidden planet nor an autonomous object.",
      "It is not an absolute verdict: its reading depends on the chart as a whole.",
      "It is not a replacement for the fundamentals: it complements, it does not replace.",
    ],
  },
  classification: {
    title: "What are the categories of sensitive points?",
    angles: {
      h: "Angles / axes",
      items: [
        "ASC / DSC: your entry into life and your relationship to the other.",
        "MC / IC: vocation, status, roots and inner foundation.",
        "Vertex / Anti-Vertex: significant events and encounters.",
      ],
    },
    calculated: {
      h: "Calculated points",
      items: [
        "Part of Fortune: fluidity, yield, a natural zone of circulation.",
        "Part of Spirit: mental direction, aim, inner strategy.",
        "Other Arabic Parts: interesting, but to be read with rigour.",
      ],
    },
    modern: {
      h: "Modern symbolic factors",
      items: [
        "Chiron: wound, skill, transmission.",
        "Lilith: intensity, refusal, untamed desire.",
        "Lunar nodes: growth, trajectory, automatisms from the past.",
      ],
    },
    proRule: {
      h: "Pro rule",
      body:
        "The more structural the point, the more central it is. The more calculated or symbolic it is, the more relevant it becomes once it is linked to a house, a ruler and precise aspects.",
    },
  },
  majorPoints: {
    title: "Which major sensitive points should you know?",
    items: [
      {
        kind: "angle",
        title: "Vertex",
        subtitle: "Significant encounters / relational turning points",
        points: [
          "Often activated during important relational events.",
          "The house shows the area where life brings about a key encounter.",
          "Aspects to Venus, Mars or the Moon strongly reinforce the impact felt.",
        ],
      },
      {
        kind: "math",
        title: "Part of Fortune",
        subtitle: "Flow, yield, natural ease",
        points: [
          "Read it as a point of circulation or efficiency.",
          "The house indicates the area, the sign shows the style.",
          "The ruler of the sign explains how to activate it concretely.",
        ],
      },
      {
        kind: "destiny",
        title: "Chiron",
        subtitle: "Wound, skill, transmission",
        points: [
          "A sensitive but very formative zone.",
          "Aspect to the Sun, the Moon or the ASC: deeply tied to identity.",
          "An excellent point of analysis in teaching, mentoring or care.",
        ],
      },
      {
        kind: "core",
        title: "ASC / MC",
        subtitle: "Manifestation and direction",
        points: [
          "ASC: posture, temperament, the way you enter the world.",
          "MC: trajectory, visibility, vocation and the summit of the chart.",
          "Any heavy transit over these points generally becomes concrete.",
        ],
      },
    ],
  },
  method: {
    title: "How do you interpret a sensitive point in a chart?",
    steps: [
      { t: "1) House first", d: "The house gives the area of life. Without it, the reading becomes abstract." },
      { t: "2) Sign next", d: "The sign colours the posture, the tone, the way the point expresses itself." },
      { t: "3) Ruler of the sign", d: "The ruler explains how to access the point’s function concretely." },
      { t: "4) Aspects", d: "Aspects show how this point dialogues with the rest of the chart." },
      { t: "5) Timing", d: "Transits and progressions indicate when the point actually activates." },
    ],
  },
  aspects: {
    title: "Which aspects activate sensitive points?",
    conj: {
      h: "Conjunction",
      body:
        "The conjunction merges the planet and the point. It is the most direct form of activation and often the most visible psychologically.",
    },
    tension: {
      h: "Square / opposition",
      body:
        "Tensions force you to choose, readjust or mature. On the Vertex, the Nodes, the ASC or the MC, they often correspond to structuring turning points.",
    },
  },
  transits: {
    title: "How do transits activate sensitive points?",
    items: [
      "Transits over ASC / MC: changes that are visible in concrete life.",
      "Transits over the Vertex: encounters, events, relational shifts.",
      "Transits over Fortune: opportunities, circulation, a readjustment of the flow.",
      "Saturn, Uranus or Pluto over a point: long, decisive and structuring periods.",
    ],
  },
  pitfalls: {
    title: "Which mistakes should you avoid with sensitive points?",
    mistakesBadge: "Common mistakes",
    mistakes: [
      "Reading a point without its house: the reading becomes vague.",
      "Over-interpreting a secondary factor as if it replaced a planet.",
      "Forgetting the ruler of the sign, and so the true key of access.",
      "Looking for a prophecy instead of a readable symbolic mechanism.",
    ],
    goodBadge: "Best practices",
    good: [
      "Always follow: house → sign → ruler → aspects → timing.",
      "Tie the reading to concrete behaviours and areas.",
      "Keep a hierarchy between structuring points and secondary points.",
      "Cross transits with progressions if you want to refine the timing.",
    ],
  },
  faqTopTitle: "Frequently asked questions about sensitive points",
  faqTop: [
    {
      q: "Is Chiron a sensitive point?",
      a: "Technically no: it is a body. But in modern practice, it is often treated as a symbolic factor close to a key point.",
    },
    {
      q: "Is the Part of Fortune reliable?",
      a: "Yes, provided you are consistent about the method and always link it to the house, the sign, the ruler and the aspects.",
    },
    {
      q: "Vertex = destiny?",
      a: "It is better to speak of significant encounters, shifts or meaningful relational events, especially during activations.",
    },
    {
      q: "Should you read them all?",
      a: "No. You have to prioritise: ASC/MC first, then the Nodes, Chiron, Lilith depending on the subject, then the Vertex and Fortune as a complement.",
    },
  ],
  footer: {
    cta: "Explore the aspects",
    aspects: "Aspects",
    houses: "Houses",
    transits: "Transits",
  },
  faqTitle: "Frequently asked questions about sensitive points in astrology",
  faq: [
    {
      q: "Is Chiron really a sensitive point?",
      a: (
        <>
          Technically, <strong>Chiron</strong> is a small celestial body (asteroid/comet). However, in astrological practice, it is often classed among the <strong>sensitive points</strong> because it plays a similar symbolic role: wound, skill and transmission. It is read as a function, not as a classic planet. See also the <Link href="/aspects">aspects</Link> to understand its interactions.
        </>
      ),
    },
    {
      q: "How do you calculate the Part of Fortune in a natal chart?",
      a: (
        <>
          The <strong>Part of Fortune</strong> is calculated from the positions of the Ascendant, the Sun and the Moon. The classic formula is: ASC + Moon − Sun (by day). What matters in interpretation is its house, its sign and the ruler of the sign, in order to know how to activate it.
        </>
      ),
    },
    {
      q: "Is the Vertex linked to destiny in astrology?",
      a: (
        <>
          The <strong>Vertex</strong> is often associated with significant encounters and relational turning points. Rather than speaking of destiny, we prefer to say that it indicates moments when life brings about a shift, especially when it is activated by <Link href="/transits">transits</Link> of slow planets.
        </>
      ),
    },
    {
      q: "Should you read all the sensitive points in a birth chart?",
      a: (
        <>
          No. You have to prioritise: <strong>ASC/MC</strong> first (structural), then the <Link href="/noeuds-lunaires">lunar nodes</Link>, Chiron and Lilith depending on the subject, and finally the Vertex and the Part of Fortune as a complement. The mistake would be to read everything without a hierarchy.
        </>
      ),
    },
  ],
  faqJsonLd: [
    {
      name: "Is Chiron really a sensitive point?",
      text: "Technically, Chiron is a small celestial body (asteroid/comet). However, in astrological practice, it is often classed among the sensitive points because it plays a similar symbolic role: wound, skill and transmission. It is read as a function, not as a classic planet.",
    },
    {
      name: "How do you calculate the Part of Fortune in a natal chart?",
      text: "The Part of Fortune is calculated from the positions of the Ascendant, the Sun and the Moon. The classic formula is: ASC + Moon − Sun (by day). What matters in interpretation is its house, its sign and the ruler of the sign, in order to know how to activate it.",
    },
    {
      name: "Is the Vertex linked to destiny in astrology?",
      text: "The Vertex is often associated with significant encounters and relational turning points. Rather than speaking of destiny, we prefer to say that it indicates moments when life brings about a shift, especially when it is activated by transits of slow planets.",
    },
    {
      name: "Should you read all the sensitive points in a birth chart?",
      text: "No. You have to prioritise: ASC/MC first (structural), then the lunar nodes, Chiron and Lilith depending on the subject, and finally the Vertex and the Part of Fortune as a complement. The mistake would be to read everything without a hierarchy.",
    },
  ],
};

/* ============================== ES ============================== */
const es: PointsFictifsContent = {
  meta: {
    title: "Puntos ficticios — Vértex, Fortuna, Quirón: método",
    description:
      "Puntos ficticios en astrología: Vértex, Parte de la Fortuna, Quirón, ASC/MC, Nodos y Lilith. Lectura por signo, casa y aspectos. ¡Explora nuestro método!",
  },
  jsonld: {
    headline: "Puntos ficticios: Vértex, Fortuna, Quirón, ángulos y método",
    description:
      "Puntos ficticios en astrología: Vértex, Parte de la Fortuna, Quirón, ASC/MC, Nodos y Lilith. Lectura por signo, casa y aspectos.",
    articleSection: "Astrología",
  },
  hero: {
    eyebrow: "Curso de astrología — Técnicas de lectura",
    h1: "Los puntos ficticios en astrología",
    intro:
      "Los puntos ficticios son referencias sutiles pero potentes: ángulos, puntos calculados, ejes kármicos, zonas de activación relacional o de orientación interior. Este curso propone una lectura clara, jerarquizada y realmente aprovechable.",
    highlights: [
      "No son “planetas”: puntos, ángulos, cálculos",
      "Primero la casa, luego el signo",
      "Aspectos = desencadenantes",
      "Tránsitos = timing",
    ],
    imgAlt: "Ilustración simbólica de los puntos ficticios en astrología",
  },
  defBox: {
    label: "Definición",
    body: (
      <>
        Los <strong>puntos ficticios en astrología</strong> son referencias geométricas o calculadas (ángulos, ejes, partes) que no corresponden a un cuerpo celeste, sino que describen funciones simbólicas esenciales como la manifestación (<Link href="/points-fictifs#points">Vértex</Link>), el flujo (<Link href="/points-fictifs#points">Parte de la Fortuna</Link>) o la herida formadora (<Link href="/points-fictifs#points">Quirón</Link>).
      </>
    ),
  },
  appIntro: (
    <>
      ¿Quieres entender el papel de los <strong>puntos ficticios</strong> en una carta astral? Estas referencias sutiles suelen estar mal jerarquizadas o sobreinterpretadas, lo que enturbia la lectura. Esta página te ofrece una clasificación clara, un método de lectura punto por punto y los errores más comunes que conviene evitar.
    </>
  ),
  tocLabel: "Índice",
  sections: [
    { id: "definition", label: "Definición" },
    { id: "classification", label: "Categorías" },
    { id: "points", label: "Puntos mayores" },
    { id: "methode", label: "Método pro" },
    { id: "aspects", label: "Aspectos" },
    { id: "transits", label: "Tránsitos" },
    { id: "piges", label: "Trampas" },
    { id: "faq", label: "FAQ" },
  ],
  definition: {
    title: "¿Qué es un punto ficticio en astrología?",
    isBadge: "Lo que es",
    isItems: [
      "Un punto ficticio no es un cuerpo celeste: es una referencia geométrica, un eje o un punto calculado.",
      "Describe una función: ángulo de manifestación, punto de flujo, desencadenante relacional o eje de evolución.",
      "Se lee como una estructura simbólica: signo, casa, regente, aspectos, activación temporal.",
    ],
    isNotBadge: "Lo que no es",
    isNotItems: [
      "No es un planeta oculto ni un objeto autónomo.",
      "No es un veredicto absoluto: su lectura depende de la carta en su conjunto.",
      "No es un sustituto de los fundamentos: complementa, no reemplaza.",
    ],
  },
  classification: {
    title: "¿Cuáles son las categorías de puntos ficticios?",
    angles: {
      h: "Ángulos / ejes",
      items: [
        "ASC / DSC: la entrada en la vida y la relación con el otro.",
        "MC / IC: vocación, estatus, raíces y base interior.",
        "Vértex / Anti-Vértex: acontecimientos y encuentros marcantes.",
      ],
    },
    calculated: {
      h: "Puntos calculados",
      items: [
        "Parte de la Fortuna: fluidez, rendimiento, zona de circulación natural.",
        "Parte del Espíritu: dirección mental, objetivo, estrategia interior.",
        "Otras partes árabes: interesantes, pero a leer con rigor.",
      ],
    },
    modern: {
      h: "Factores simbólicos modernos",
      items: [
        "Quirón: herida, competencia, transmisión.",
        "Lilith: intensidad, rechazo, deseo no domesticado.",
        "Nodos lunares: crecimiento, trayectoria, automatismos del pasado.",
      ],
    },
    proRule: {
      h: "Regla pro",
      body:
        "Cuanto más estructural es el punto, más central resulta. Cuanto más calculado o simbólico es, más pertinente se vuelve cuando se relaciona con una casa, un regente y aspectos precisos.",
    },
  },
  majorPoints: {
    title: "¿Cuáles son los puntos ficticios mayores que conviene conocer?",
    items: [
      {
        kind: "angle",
        title: "Vértex",
        subtitle: "Encuentros marcantes / giros relacionales",
        points: [
          "A menudo se activa en acontecimientos relacionales importantes.",
          "La casa muestra el ámbito donde la vida provoca un encuentro clave.",
          "Los aspectos a Venus, Marte o la Luna refuerzan con fuerza el impacto vivido.",
        ],
      },
      {
        kind: "math",
        title: "Parte de la Fortuna",
        subtitle: "Flujo, rendimiento, soltura natural",
        points: [
          "A leer como un punto de circulación o de eficacia.",
          "La casa indica el ámbito, el signo muestra el estilo.",
          "El regente del signo explica cómo activarla concretamente.",
        ],
      },
      {
        kind: "destiny",
        title: "Quirón",
        subtitle: "Herida, competencia, transmisión",
        points: [
          "Una zona sensible pero muy formadora.",
          "Aspecto al Sol, la Luna o el ASC: vivido de forma profundamente identitaria.",
          "Un excelente punto de análisis en pedagogía, acompañamiento o cuidado.",
        ],
      },
      {
        kind: "core",
        title: "ASC / MC",
        subtitle: "Manifestación y dirección",
        points: [
          "ASC: postura, temperamento, manera de entrar en el mundo.",
          "MC: trayectoria, visibilidad, vocación y cúspide de la carta.",
          "Todo tránsito pesado sobre estos puntos suele volverse concreto.",
        ],
      },
    ],
  },
  method: {
    title: "¿Cómo interpretar un punto ficticio en una carta?",
    steps: [
      { t: "1) Primero la casa", d: "La casa da el ámbito de vida. Sin ella, la lectura se vuelve abstracta." },
      { t: "2) Luego el signo", d: "El signo colorea la postura, la tonalidad, la manera en que el punto se expresa." },
      { t: "3) Regente del signo", d: "El regente explica cómo acceder concretamente a la función del punto." },
      { t: "4) Aspectos", d: "Los aspectos muestran cómo dialoga este punto con el resto de la carta." },
      { t: "5) Timing", d: "Los tránsitos y las progresiones indican cuándo se activa realmente el punto." },
    ],
  },
  aspects: {
    title: "¿Qué aspectos activar sobre los puntos ficticios?",
    conj: {
      h: "Conjunción",
      body:
        "La conjunción fusiona el planeta y el punto. Es la forma de activación más directa y a menudo la más visible psicológicamente.",
    },
    tension: {
      h: "Cuadratura / oposición",
      body:
        "Las tensiones obligan a elegir, reajustar o madurar. Sobre Vértex, Nodos, ASC o MC, suelen corresponder a giros estructurantes.",
    },
  },
  transits: {
    title: "¿Cómo activan los tránsitos los puntos ficticios?",
    items: [
      "Tránsitos sobre ASC / MC: cambios visibles en la vida concreta.",
      "Tránsitos sobre el Vértex: encuentros, acontecimientos, vuelcos relacionales.",
      "Tránsitos sobre la Fortuna: oportunidades, circulación, reajuste del flujo.",
      "Saturno, Urano o Plutón sobre un punto: periodos largos, decisivos y estructurantes.",
    ],
  },
  pitfalls: {
    title: "¿Qué errores evitar con los puntos ficticios?",
    mistakesBadge: "Errores frecuentes",
    mistakes: [
      "Leer un punto sin su casa: la lectura se vuelve vaga.",
      "Sobreinterpretar un factor secundario como si reemplazara a un planeta.",
      "Olvidar el regente del signo, es decir, la verdadera clave de acceso.",
      "Buscar una profecía en lugar de un mecanismo simbólico legible.",
    ],
    goodBadge: "Buenas prácticas",
    good: [
      "Seguir siempre: casa → signo → regente → aspectos → timing.",
      "Vincular la lectura a comportamientos y ámbitos concretos.",
      "Mantener una jerarquía entre puntos estructurantes y puntos secundarios.",
      "Cruzar los tránsitos con las progresiones si quieres afinar el timing.",
    ],
  },
  faqTopTitle: "Preguntas frecuentes sobre los puntos ficticios",
  faqTop: [
    {
      q: "¿Quirón es un punto ficticio?",
      a: "Técnicamente no: es un cuerpo. Pero en la práctica moderna, suele tratarse como un factor simbólico cercano a un punto clave.",
    },
    {
      q: "¿Es fiable la Parte de la Fortuna?",
      a: "Sí, a condición de ser coherente con el método y de relacionarla siempre con la casa, el signo, el regente y los aspectos.",
    },
    {
      q: "¿Vértex = destino?",
      a: "Es mejor hablar de encuentros marcantes, de vuelcos o de acontecimientos relacionales significativos, sobre todo en las activaciones.",
    },
    {
      q: "¿Hay que leerlos todos?",
      a: "No. Hay que priorizar: ASC/MC primero, luego los Nodos, Quirón, Lilith según el tema, y después el Vértex y la Fortuna como complemento.",
    },
  ],
  footer: {
    cta: "Explorar los aspectos",
    aspects: "Aspectos",
    houses: "Casas",
    transits: "Tránsitos",
  },
  faqTitle: "Preguntas frecuentes sobre los puntos ficticios en astrología",
  faq: [
    {
      q: "¿Es Quirón realmente un punto ficticio?",
      a: (
        <>
          Técnicamente, <strong>Quirón</strong> es un pequeño cuerpo celeste (asteroide/cometa). Sin embargo, en la práctica astrológica, suele clasificarse entre los <strong>puntos ficticios</strong> porque desempeña un papel simbólico cercano: herida, competencia y transmisión. Se lee como una función, no como un planeta clásico. Consulta también los <Link href="/aspects">aspectos</Link> para entender sus interacciones.
        </>
      ),
    },
    {
      q: "¿Cómo calcular la Parte de la Fortuna en una carta natal?",
      a: (
        <>
          La <strong>Parte de la Fortuna</strong> se calcula a partir de la posición del Ascendente, el Sol y la Luna. La fórmula clásica es: ASC + Luna − Sol (de día). Lo que cuenta en la interpretación es su casa, su signo y el regente del signo para saber cómo activarla.
        </>
      ),
    },
    {
      q: "¿Está el Vértex ligado al destino en astrología?",
      a: (
        <>
          El <strong>Vértex</strong> suele asociarse a los encuentros marcantes y a los giros relacionales. En lugar de hablar de destino, preferimos decir que indica momentos en los que la vida provoca un vuelco, sobre todo cuando lo activan <Link href="/transits">tránsitos</Link> de planetas lentos.
        </>
      ),
    },
    {
      q: "¿Hay que leer todos los puntos ficticios en una carta astral?",
      a: (
        <>
          No. Hay que priorizar: <strong>ASC/MC</strong> primero (estructurales), luego los <Link href="/noeuds-lunaires">nodos lunares</Link>, Quirón y Lilith según el tema, y por último el Vértex y la Parte de la Fortuna como complemento. El error sería leerlo todo sin jerarquía.
        </>
      ),
    },
  ],
  faqJsonLd: [
    {
      name: "¿Es Quirón realmente un punto ficticio?",
      text: "Técnicamente, Quirón es un pequeño cuerpo celeste (asteroide/cometa). Sin embargo, en la práctica astrológica, suele clasificarse entre los puntos ficticios porque desempeña un papel simbólico cercano: herida, competencia y transmisión. Se lee como una función, no como un planeta clásico.",
    },
    {
      name: "¿Cómo calcular la Parte de la Fortuna en una carta natal?",
      text: "La Parte de la Fortuna se calcula a partir de la posición del Ascendente, el Sol y la Luna. La fórmula clásica es: ASC + Luna − Sol (de día). Lo que cuenta en la interpretación es su casa, su signo y el regente del signo para saber cómo activarla.",
    },
    {
      name: "¿Está el Vértex ligado al destino en astrología?",
      text: "El Vértex suele asociarse a los encuentros marcantes y a los giros relacionales. En lugar de hablar de destino, preferimos decir que indica momentos en los que la vida provoca un vuelco, sobre todo cuando lo activan tránsitos de planetas lentos.",
    },
    {
      name: "¿Hay que leer todos los puntos ficticios en una carta astral?",
      text: "No. Hay que priorizar: ASC/MC primero (estructurales), luego los nodos lunares, Quirón y Lilith según el tema, y por último el Vértex y la Parte de la Fortuna como complemento. El error sería leerlo todo sin jerarquía.",
    },
  ],
};

export const pointsFictifsContent: Record<SeoLocale, PointsFictifsContent> = { fr, en, es };
