import { Link } from "@/i18n/navigation";
import type { ReactNode } from "react";
import type { SeoLocale } from "@/lib/seo";

/* ====================================================================
   Synastrie — contenu localisé (fr / en / es)
   Les clés logiques (slug, angle, id de section) sont identiques dans
   chaque langue ; seuls les textes sont traduits.
   ==================================================================== */

export type SynPilier = {
  slug: string;
  title: string;
  why: string;
  points: string[];
  aFaire: string[];
};

export type SynAspect = {
  slug: string;
  nom: string;
  angle: string;
  sens: string;
  bonus: string[];
  risques: string[];
};

export type SynastrieContent = {
  meta: { title: string; description: string };
  jsonld: { headline: string; description: string; articleSection: string };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    highlights: string[];
  };
  sections: { id: string; label: string }[];
  tocLabel: string;
  defBox: { label: string; body: ReactNode };
  appIntro: ReactNode;
  labels: {
    resume: string;
    ceQueCeNestPas: string;
    reglesOr: string;
    checklist: string;
    orbesRecommandes: string;
    pointsCles: string;
    aFaire: string;
    bonus: string;
    risques: string;
    rouges: string;
    verts: string;
  };
  sectionTitles: {
    definition: string;
    methode: string;
    piliers: string;
    aspects: string;
    drapeaux: string;
    exemples: string;
    faq: string;
  };
  definition: { resume: string[]; ceQueCeNestPas: string[] };
  methode: {
    reglesOr: string[];
    orbes: { recommandes: { label: string; orbe: string }[] };
    checklist: string[];
  };
  piliers: SynPilier[];
  aspectsSynastrie: SynAspect[];
  drapeaux: { rouges: string[]; verts: string[] };
  exemplesLecture: { titre: string; texte: string }[];
  faq: { q: string; a: string }[];
  faqVisibleTitle: string;
  faqVisible: { q: string; a: ReactNode }[];
  footer: { aspects: string; planets: string; transits: string; houses: string };
};

/* ============================== FR ============================== */
const fr: SynastrieContent = {
  meta: {
    title: "Synastrie : compatibilité relationnelle",
    description:
      "Synastrie en astrologie : méthode, aspects entre planètes, axes relationnels, maisons activées et drapeaux rouges. Découvrez notre cours complet !",
  },
  jsonld: {
    headline: "Synastrie : compatibilité relationnelle",
    description:
      "Synastrie en astrologie : méthode, aspects entre planètes, axes relationnels, maisons activées et drapeaux rouges.",
    articleSection: "Astrologie",
  },
  hero: {
    badge: "Cours d’astrologie — Relations",
    title: "Synastrie : compatibilité et dynamique",
    subtitle:
      "Comparer deux thèmes pour comprendre la dynamique : attraction, sécurité, défis, long terme. Pas un score — une lecture.",
    highlights: [
      "Méthode pro (ordre de priorité)",
      "Aspects entre planètes (les plus importants)",
      "Maisons activées (où ça se vit)",
      "Stabilité, passion, conflits & réparations",
    ],
  },
  sections: [
    { id: "definition", label: "Définition" },
    { id: "methode", label: "Méthode pro" },
    { id: "piliers", label: "Piliers" },
    { id: "aspects", label: "Aspects en synastrie" },
    { id: "drapeaux", label: "Drapeaux rouges/verts" },
    { id: "exemples", label: "Exemples" },
    { id: "faq", label: "FAQ" },
  ],
  tocLabel: "Sommaire",
  defBox: {
    label: "Définition",
    body: (
      <>
        La <strong>synastrie</strong> est la technique astrologique qui compare deux{" "}
        <Link href="/theme-astral">thèmes natals</Link> pour analyser la compatibilité amoureuse, les
        dynamiques relationnelles et les tensions entre partenaires.
      </>
    ),
  },
  appIntro: (
    <>
      Vous cherchez à comprendre la <strong>synastrie astrologique</strong> et ce qu'elle révèle sur votre
      couple ? Beaucoup de personnes confondent compatibilité de signes et véritable étude comparative des
      thèmes. Ce cours complet vous guide pas à pas dans la lecture des aspects, des maisons activées et des
      signaux d'alerte à surveiller.
    </>
  ),
  labels: {
    resume: "Résumé",
    ceQueCeNestPas: "Ce que ce n’est pas",
    reglesOr: "Règles d’or",
    checklist: "Checklist",
    orbesRecommandes: "Orbes recommandés",
    pointsCles: "Points clés",
    aFaire: "À faire",
    bonus: "Bonus",
    risques: "Risques",
    rouges: "Rouges (vigilance)",
    verts: "Verts (solidité)",
  },
  sectionTitles: {
    definition: "Qu'est-ce que la synastrie en astrologie ?",
    methode: "Comment faire une synastrie : méthode professionnelle",
    piliers: "Les piliers planétaires de la compatibilité amoureuse",
    aspects: "Quels aspects observer entre deux thèmes natals ?",
    drapeaux: "Drapeaux rouges et verts : signes d'alerte en synastrie",
    exemples: "Exemples concrets de lecture de synastrie",
    faq: "Questions fréquentes sur la synastrie",
  },
  definition: {
    resume: [
      "La synastrie compare deux thèmes natals pour voir comment deux psychés interagissent.",
      "Elle décrit la dynamique : ce qui attire, ce qui rassure, ce qui agace, ce qui transforme.",
      "Elle ne remplace pas la communication : elle met en lumière les zones sensibles et les leviers.",
    ],
    ceQueCeNestPas: [
      "Un verdict (oui/non).",
      "Un test de compatibilité simpliste.",
      "Une excuse pour accepter l’inacceptable.",
    ],
  },
  methode: {
    reglesOr: [
      "1) Lire chaque thème séparément (maturité, blessures, besoins).",
      "2) Regarder les luminaires (Soleil/Lune) + ASC/DSC/MC/FC : socle et relation.",
      "3) Prioriser : conjonctions/oppositions/carrés puis trigones/sextiles.",
      "4) Ensuite : Vénus/Mars (désir), Mercure (communication), Saturne (durée), Uranus/Neptune/Pluton (chapitres).",
      "5) Finir par les maisons : où la relation “atterrit” dans la vie.",
    ],
    orbes: {
      recommandes: [
        { label: "Angles + Soleil/Lune", orbe: "jusqu’à 5° (parfois 6° si très exacts ailleurs)" },
        { label: "Planètes personnelles (Mercure/Vénus/Mars)", orbe: "3° à 4°" },
        { label: "Jupiter/Saturne", orbe: "3°" },
        { label: "Uranus/Neptune/Pluton", orbe: "2° à 3° (surtout si exact)" },
      ],
    },
    checklist: [
      "Les 4 axes : ASC/DSC et MC/FC (bascule relationnelle + projet de vie)",
      "Soleil ↔ Lune (compréhension des besoins)",
      "Vénus ↔ Mars (chimie)",
      "Mercure ↔ Mercure / Mercure ↔ Lune (parole & émotions)",
      "Saturne ↔ personnelles (durée, engagement, tests)",
      "Neptune/Pluton (idéalisme & intensité) : lucidité indispensable",
      "Maisons : où l’autre active chez moi (7, 5, 4, 8, 10…) ",
    ],
  },
  piliers: [
    {
      slug: "axes",
      title: "Axes relationnels (ASC/DSC/MC/FC)",
      why: "Les angles donnent la structure : attraction, projection, quotidien, futur.",
      points: [
        "Planètes de l’autre sur ton DSC : relation évidente (partenariat).",
        "Planètes sur ton ASC : attraction immédiate, identité stimulée.",
        "Sur MC : ambition / direction / image sociale influencée.",
        "Sur FC : intimité, foyer, famille, sentiment d’appartenance.",
      ],
      aFaire: [
        "Repérer ce qui touche ton DSC (couple) et ton FC (sécurité).",
        "Si Pluton/Neptune/Uranus touchent un angle : lecture adulte obligatoire.",
      ],
    },
    {
      slug: "soleil-lune",
      title: "Soleil–Lune (sécurité & reconnaissance)",
      why: "Le Soleil veut être reconnu. La Lune veut se sentir en sécurité.",
      points: [
        "Harmonie : sentiment d’être “vu” et “accueilli”.",
        "Tension : incompréhension des besoins et des rythmes affectifs.",
        "Conjonction : lien très fort, parfois fusionnel.",
      ],
      aFaire: [
        "Nommer le besoin lunaire (sécurité) + la direction solaire (but).",
        "Créer des rituels de réparation après conflit.",
      ],
    },
    {
      slug: "venus-mars",
      title: "Vénus–Mars (chimie, désir, style amoureux)",
      why: "Vénus = ce que j’aime. Mars = comment je poursuis et je veux.",
      points: [
        "Aspects faciles : désir naturel, plaisir partagé.",
        "Aspects durs : passion + friction, jalousie ou compétition possible.",
        "Maisons 5/7/8 activées : forte charge affective/sexuelle.",
      ],
      aFaire: [
        "Clarifier les langages d’amour (Vénus) et le style de désir (Mars).",
        "Mettre des règles claires sur les conflits (Mars).",
      ],
    },
    {
      slug: "mercure",
      title: "Mercure (communication & mental)",
      why: "Sans Mercure, tout le reste se brouille.",
      points: [
        "Mercure ↔ Mercure : même logique / rythme mental.",
        "Mercure ↔ Lune : parole qui apaise (ou qui blesse).",
        "Neptune en aspect à Mercure : risque de flou, malentendus, promesses.",
      ],
      aFaire: [
        "Écrire ce qui est important (contrats relationnels).",
        "Se forcer à reformuler (anti-projection).",
      ],
    },
    {
      slug: "saturne",
      title: "Saturne (durée, engagement, tests)",
      why: "Saturne donne du réel : structure, loyauté, responsabilités.",
      points: [
        "Saturne sur Vénus/Lune : attachement sérieux, mais peut refroidir si peur.",
        "Saturne sur Mars : frustration ou discipline (selon maturité).",
        "Saturne harmonique : relation qui tient dans le temps.",
      ],
      aFaire: [
        "Définir des limites saines et des attentes réalistes.",
        "Surveiller la honte, la critique, la dureté.",
      ],
    },
    {
      slug: "uranus-neptune-pluton",
      title: "Uranus / Neptune / Pluton (chapitres de vie)",
      why: "Ces planètes transforment : liberté, idéal, intensité.",
      points: [
        "Uranus : excitation, instabilité, besoin d’espace.",
        "Neptune : idéalisation, romantisme, flou et sauvetage possible.",
        "Pluton : magnétisme, contrôle, mue, jalousie possible.",
      ],
      aFaire: [
        "Avec Neptune : vérifier les faits, rester concret.",
        "Avec Pluton : travailler le pouvoir, les limites et la sécurité.",
        "Avec Uranus : instaurer des règles d’espace et de liberté.",
      ],
    },
  ],
  aspectsSynastrie: [
    {
      slug: "conjonction",
      nom: "Conjonction",
      angle: "0°",
      sens: "Fusion. Très fort. Amplifie et colore la relation.",
      bonus: ["sentiment de destin", "compréhension immédiate"],
      risques: ["fusion, dépendance", "perte de frontières si Neptune/Pluton"],
    },
    {
      slug: "sextile",
      nom: "Sextile",
      angle: "60°",
      sens: "Facilité qui demande un geste. Très bon pour construire.",
      bonus: ["coopération", "solutions simples"],
      risques: ["passivité, laisser faire"],
    },
    {
      slug: "carre",
      nom: "Carré",
      angle: "90°",
      sens: "Tension. Défi d’ajustement. Très formateur si maturité.",
      bonus: ["énergie", "stimulation"],
      risques: ["conflits récurrents", "réactivité"],
    },
    {
      slug: "trigone",
      nom: "Trigone",
      angle: "120°",
      sens: "Alignement. Ça coule. Très bon pour durer.",
      bonus: ["confiance", "facilité naturelle"],
      risques: ["manque d’effort", "routine"],
    },
    {
      slug: "opposition",
      nom: "Opposition",
      angle: "180°",
      sens: "Polarité. Miroir relationnel. Apprentissage de l’équilibre.",
      bonus: ["complémentarité", "forte attraction"],
      risques: ["projection", "tiraillage"],
    },
  ],
  drapeaux: {
    rouges: [
      "Neptune dominant sur Mercure/Vénus : flou, promesses, malentendus.",
      "Pluton dur sur Lune/Vénus/ASC : contrôle, jalousie, intensité difficile.",
      "Mars dur sur Lune : disputes émotionnelles, insécurité.",
      "Saturne dur + manque de douceur : relation lourde, critique, honte.",
    ],
    verts: [
      "Soleil/Lune harmonieux + Mercure correct : sécurité + dialogue.",
      "Saturne harmonique : engagement réel, respect des limites.",
      "Vénus/Mars harmonieux : désir + affection compatibles.",
      "Maisons 4/7/10 activées sainement : foyer, couple, projet.",
    ],
  },
  exemplesLecture: [
    {
      titre: "Synastrie “stable et durable”",
      texte:
        "Saturne harmonique sur Vénus/Lune, Mercure fluide, axes touchés sans domination Neptune/Pluton : relation construite, fiable, temps long.",
    },
    {
      titre: "Synastrie “passion + montagnes russes”",
      texte:
        "Mars et Pluton très présents, carrés et oppositions : magnétisme énorme, mais besoin de règles de conflit et de limites strictes.",
    },
    {
      titre: "Synastrie “idéale… puis floue”",
      texte:
        "Neptune fort sur Vénus/Mercure : romantisme, projection, promesses. Nécessite une hygiène de réalité : faits, temporalité, engagement concret.",
    },
  ],
  faq: [
    {
      q: "Synastrie ou composite ?",
      a: "Synastrie = comment deux thèmes s’affectent. Composite = “le thème de la relation” comme entité. Les deux se complètent.",
    },
    {
      q: "Peut-on “réparer” une synastrie difficile ?",
      a: "Oui si les deux sont matures : règles de conflit, communication, limites, et un objectif commun. Sinon, les aspects durs deviennent répétitifs.",
    },
    {
      q: "Quel est le trio le plus important ?",
      a: "Soleil/Lune + Mercure + Saturne. Sans sécurité, dialogue et réel… Vénus/Mars ne suffit pas.",
    },
  ],
  faqVisibleTitle: "Questions fréquentes sur la synastrie astrologique",
  faqVisible: [
    {
      q: "Quelle est la différence entre synastrie et thème composite ?",
      a: (
        <>
          La <strong>synastrie</strong> compare deux thèmes natals pour voir comment chaque personne affecte
          l'autre. Le <strong>thème composite</strong> fusionne les deux cartes en une seule et représente
          la relation comme entité. Les deux approches se complètent pour une analyse relationnelle complète.
        </>
      ),
    },
    {
      q: "Peut-on améliorer une synastrie difficile entre deux partenaires ?",
      a: (
        <>
          Oui, si les deux partenaires font preuve de maturité. Avec des règles de communication claires, le
          respect des limites et un objectif commun, les <strong>aspects difficiles</strong> deviennent des
          leviers de croissance. Sinon, les tensions se répètent. Consultez notre cours sur les{" "}
          <Link href="/aspects">aspects planétaires</Link> pour mieux comprendre.
        </>
      ),
    },
    {
      q: "Quelles planètes sont les plus importantes en synastrie ?",
      a: (
        <>
          Le trio essentiel est <strong>Soleil/Lune</strong> (sécurité émotionnelle), <strong>Mercure</strong>{" "}
          (communication) et <strong>Saturne</strong> (durabilité). Sans ces fondations, les aspects
          Vénus-Mars seuls ne suffisent pas à maintenir une relation stable. Découvrez le rôle de chaque{" "}
          <Link href="/planetes">planète</Link> dans notre cours.
        </>
      ),
    },
    {
      q: "A-t-on besoin de l'heure de naissance exacte pour une synastrie ?",
      a: (
        <>
          L'heure de naissance est indispensable pour connaître l'<strong>Ascendant</strong> et les{" "}
          <Link href="/maisons">maisons astrologiques</Link> activées. Sans elle, on peut analyser les
          aspects entre planètes, mais on perd les informations sur les domaines de vie concernés et les
          angles relationnels.
        </>
      ),
    },
  ],
  footer: {
    aspects: "Aspects",
    planets: "Planètes",
    transits: "Transits",
    houses: "Maisons",
  },
};

/* ============================== EN ============================== */
const en: SynastrieContent = {
  meta: {
    title: "Synastry: relationship compatibility",
    description:
      "Synastry in astrology: method, aspects between planets, relational axes, activated houses and red flags. Discover our complete course!",
  },
  jsonld: {
    headline: "Synastry: relationship compatibility",
    description:
      "Synastry in astrology: method, aspects between planets, relational axes, activated houses and red flags.",
    articleSection: "Astrology",
  },
  hero: {
    badge: "Astrology course — Relationships",
    title: "Synastry: compatibility and dynamics",
    subtitle:
      "Comparing two charts to understand the dynamic: attraction, security, challenges, the long term. Not a score — a reading.",
    highlights: [
      "Pro method (order of priority)",
      "Aspects between planets (the most important)",
      "Activated houses (where it plays out)",
      "Stability, passion, conflicts & repairs",
    ],
  },
  sections: [
    { id: "definition", label: "Definition" },
    { id: "methode", label: "Pro method" },
    { id: "piliers", label: "Pillars" },
    { id: "aspects", label: "Aspects in synastry" },
    { id: "drapeaux", label: "Red/green flags" },
    { id: "exemples", label: "Examples" },
    { id: "faq", label: "FAQ" },
  ],
  tocLabel: "Contents",
  defBox: {
    label: "Definition",
    body: (
      <>
        <strong>Synastry</strong> is the astrological technique that compares two{" "}
        <Link href="/theme-astral">natal charts</Link> to analyse romantic compatibility, relational dynamics
        and tensions between partners.
      </>
    ),
  },
  appIntro: (
    <>
      Are you trying to understand <strong>astrological synastry</strong> and what it reveals about your
      relationship? Many people confuse sign compatibility with a true comparative study of the charts. This
      complete course guides you step by step through reading the aspects, the activated houses and the
      warning signs to watch for.
    </>
  ),
  labels: {
    resume: "Summary",
    ceQueCeNestPas: "What it is not",
    reglesOr: "Golden rules",
    checklist: "Checklist",
    orbesRecommandes: "Recommended orbs",
    pointsCles: "Key points",
    aFaire: "What to do",
    bonus: "Bonus",
    risques: "Risks",
    rouges: "Red (caution)",
    verts: "Green (solidity)",
  },
  sectionTitles: {
    definition: "What is synastry in astrology?",
    methode: "How to do a synastry: professional method",
    piliers: "The planetary pillars of romantic compatibility",
    aspects: "Which aspects to observe between two natal charts?",
    drapeaux: "Red and green flags: warning signs in synastry",
    exemples: "Concrete examples of synastry reading",
    faq: "Frequently asked questions about synastry",
  },
  definition: {
    resume: [
      "Synastry compares two natal charts to see how two psyches interact.",
      "It describes the dynamic: what attracts, what reassures, what irritates, what transforms.",
      "It does not replace communication: it highlights the sensitive areas and the levers.",
    ],
    ceQueCeNestPas: [
      "A verdict (yes/no).",
      "A simplistic compatibility test.",
      "An excuse to accept the unacceptable.",
    ],
  },
  methode: {
    reglesOr: [
      "1) Read each chart separately (maturity, wounds, needs).",
      "2) Look at the luminaries (Sun/Moon) + ASC/DSC/MC/IC: foundation and relationship.",
      "3) Set priorities: conjunctions/oppositions/squares, then trines/sextiles.",
      "4) Then: Venus/Mars (desire), Mercury (communication), Saturn (duration), Uranus/Neptune/Pluto (chapters).",
      "5) Finish with the houses: where the relationship “lands” in life.",
    ],
    orbes: {
      recommandes: [
        { label: "Angles + Sun/Moon", orbe: "up to 5° (sometimes 6° if very exact elsewhere)" },
        { label: "Personal planets (Mercury/Venus/Mars)", orbe: "3° to 4°" },
        { label: "Jupiter/Saturn", orbe: "3°" },
        { label: "Uranus/Neptune/Pluto", orbe: "2° to 3° (especially if exact)" },
      ],
    },
    checklist: [
      "The 4 axes: ASC/DSC and MC/IC (relational pivot + life project)",
      "Sun ↔ Moon (understanding of needs)",
      "Venus ↔ Mars (chemistry)",
      "Mercury ↔ Mercury / Mercury ↔ Moon (words & emotions)",
      "Saturn ↔ personal planets (duration, commitment, tests)",
      "Neptune/Pluto (idealism & intensity): clear-sightedness is essential",
      "Houses: where the other activates things in me (7, 5, 4, 8, 10…) ",
    ],
  },
  piliers: [
    {
      slug: "axes",
      title: "Relational axes (ASC/DSC/MC/IC)",
      why: "The angles give the structure: attraction, projection, daily life, the future.",
      points: [
        "The other's planets on your DSC: an obvious relationship (partnership).",
        "Planets on your ASC: immediate attraction, identity stimulated.",
        "On the MC: ambition / direction / social image influenced.",
        "On the IC: intimacy, home, family, a sense of belonging.",
      ],
      aFaire: [
        "Spot what touches your DSC (couple) and your IC (security).",
        "If Pluto/Neptune/Uranus touch an angle: an adult reading is mandatory.",
      ],
    },
    {
      slug: "soleil-lune",
      title: "Sun–Moon (security & recognition)",
      why: "The Sun wants to be recognised. The Moon wants to feel safe.",
      points: [
        "Harmony: the feeling of being “seen” and “welcomed”.",
        "Tension: a misunderstanding of emotional needs and rhythms.",
        "Conjunction: a very strong bond, sometimes fusional.",
      ],
      aFaire: [
        "Name the lunar need (security) + the solar direction (the goal).",
        "Create repair rituals after conflict.",
      ],
    },
    {
      slug: "venus-mars",
      title: "Venus–Mars (chemistry, desire, love style)",
      why: "Venus = what I love. Mars = how I pursue and what I want.",
      points: [
        "Easy aspects: natural desire, shared pleasure.",
        "Hard aspects: passion + friction, possible jealousy or competition.",
        "Houses 5/7/8 activated: a strong emotional/sexual charge.",
      ],
      aFaire: [
        "Clarify the love languages (Venus) and the style of desire (Mars).",
        "Set clear rules around conflicts (Mars).",
      ],
    },
    {
      slug: "mercure",
      title: "Mercury (communication & mind)",
      why: "Without Mercury, everything else gets muddled.",
      points: [
        "Mercury ↔ Mercury: the same logic / mental rhythm.",
        "Mercury ↔ Moon: words that soothe (or that wound).",
        "Neptune in aspect to Mercury: a risk of haze, misunderstandings, promises.",
      ],
      aFaire: [
        "Write down what is important (relational contracts).",
        "Make yourself rephrase (anti-projection).",
      ],
    },
    {
      slug: "saturne",
      title: "Saturn (duration, commitment, tests)",
      why: "Saturn brings reality: structure, loyalty, responsibilities.",
      points: [
        "Saturn on Venus/Moon: serious attachment, but can cool down if there is fear.",
        "Saturn on Mars: frustration or discipline (depending on maturity).",
        "Harmonious Saturn: a relationship that lasts over time.",
      ],
      aFaire: [
        "Define healthy boundaries and realistic expectations.",
        "Watch out for shame, criticism, harshness.",
      ],
    },
    {
      slug: "uranus-neptune-pluton",
      title: "Uranus / Neptune / Pluto (life chapters)",
      why: "These planets transform: freedom, ideal, intensity.",
      points: [
        "Uranus: excitement, instability, a need for space.",
        "Neptune: idealisation, romance, haze and possible rescuing.",
        "Pluto: magnetism, control, metamorphosis, possible jealousy.",
      ],
      aFaire: [
        "With Neptune: check the facts, stay concrete.",
        "With Pluto: work on power, boundaries and security.",
        "With Uranus: establish rules of space and freedom.",
      ],
    },
  ],
  aspectsSynastrie: [
    {
      slug: "conjonction",
      nom: "Conjunction",
      angle: "0°",
      sens: "Fusion. Very strong. Amplifies and colours the relationship.",
      bonus: ["a sense of destiny", "immediate understanding"],
      risques: ["fusion, dependency", "loss of boundaries if Neptune/Pluto"],
    },
    {
      slug: "sextile",
      nom: "Sextile",
      angle: "60°",
      sens: "Ease that calls for a step. Very good for building.",
      bonus: ["cooperation", "simple solutions"],
      risques: ["passivity, letting things slide"],
    },
    {
      slug: "carre",
      nom: "Square",
      angle: "90°",
      sens: "Tension. A challenge of adjustment. Very formative with maturity.",
      bonus: ["energy", "stimulation"],
      risques: ["recurring conflicts", "reactivity"],
    },
    {
      slug: "trigone",
      nom: "Trine",
      angle: "120°",
      sens: "Alignment. It flows. Very good for lasting.",
      bonus: ["trust", "natural ease"],
      risques: ["lack of effort", "routine"],
    },
    {
      slug: "opposition",
      nom: "Opposition",
      angle: "180°",
      sens: "Polarity. A relational mirror. Learning to find balance.",
      bonus: ["complementarity", "strong attraction"],
      risques: ["projection", "tug-of-war"],
    },
  ],
  drapeaux: {
    rouges: [
      "Neptune dominant over Mercury/Venus: haze, promises, misunderstandings.",
      "Hard Pluto over Moon/Venus/ASC: control, jealousy, difficult intensity.",
      "Hard Mars over the Moon: emotional arguments, insecurity.",
      "Hard Saturn + a lack of gentleness: a heavy relationship, criticism, shame.",
    ],
    verts: [
      "Harmonious Sun/Moon + a decent Mercury: security + dialogue.",
      "Harmonious Saturn: real commitment, respect for boundaries.",
      "Harmonious Venus/Mars: compatible desire + affection.",
      "Houses 4/7/10 activated in a healthy way: home, couple, project.",
    ],
  },
  exemplesLecture: [
    {
      titre: "A “stable and lasting” synastry",
      texte:
        "Harmonious Saturn on Venus/Moon, fluid Mercury, angles touched without Neptune/Pluto domination: a built, reliable, long-term relationship.",
    },
    {
      titre: "A “passion + rollercoaster” synastry",
      texte:
        "Mars and Pluto very present, squares and oppositions: enormous magnetism, but a need for conflict rules and strict boundaries.",
    },
    {
      titre: "An “ideal… then hazy” synastry",
      texte:
        "Strong Neptune on Venus/Mercury: romance, projection, promises. It requires a reality hygiene: facts, timeline, concrete commitment.",
    },
  ],
  faq: [
    {
      q: "Synastry or composite?",
      a: "Synastry = how two charts affect each other. Composite = “the chart of the relationship” as an entity. The two complement each other.",
    },
    {
      q: "Can you “repair” a difficult synastry?",
      a: "Yes, if both are mature: conflict rules, communication, boundaries, and a common goal. Otherwise, the hard aspects become repetitive.",
    },
    {
      q: "What is the most important trio?",
      a: "Sun/Moon + Mercury + Saturn. Without security, dialogue and reality… Venus/Mars is not enough.",
    },
  ],
  faqVisibleTitle: "Frequently asked questions about astrological synastry",
  faqVisible: [
    {
      q: "What is the difference between synastry and a composite chart?",
      a: (
        <>
          <strong>Synastry</strong> compares two natal charts to see how each person affects the other. The{" "}
          <strong>composite chart</strong> merges the two charts into one and represents the relationship as
          an entity. The two approaches complement each other for a complete relational analysis.
        </>
      ),
    },
    {
      q: "Can a difficult synastry between two partners be improved?",
      a: (
        <>
          Yes, if both partners show maturity. With clear communication rules, respect for boundaries and a
          common goal, the <strong>difficult aspects</strong> become levers for growth. Otherwise, the
          tensions repeat themselves. See our course on{" "}
          <Link href="/aspects">planetary aspects</Link> to understand them better.
        </>
      ),
    },
    {
      q: "Which planets are the most important in synastry?",
      a: (
        <>
          The essential trio is <strong>Sun/Moon</strong> (emotional security), <strong>Mercury</strong>{" "}
          (communication) and <strong>Saturn</strong> (durability). Without these foundations, Venus-Mars
          aspects alone are not enough to maintain a stable relationship. Discover the role of each{" "}
          <Link href="/planetes">planet</Link> in our course.
        </>
      ),
    },
    {
      q: "Do you need the exact birth time for a synastry?",
      a: (
        <>
          The birth time is essential to know the <strong>Ascendant</strong> and the activated{" "}
          <Link href="/maisons">astrological houses</Link>. Without it, you can analyse the aspects between
          planets, but you lose the information about the areas of life concerned and the relational angles.
        </>
      ),
    },
  ],
  footer: {
    aspects: "Aspects",
    planets: "Planets",
    transits: "Transits",
    houses: "Houses",
  },
};

/* ============================== ES ============================== */
const es: SynastrieContent = {
  meta: {
    title: "Sinastría: compatibilidad relacional",
    description:
      "Sinastría en astrología: método, aspectos entre planetas, ejes relacionales, casas activadas y banderas rojas. ¡Descubre nuestro curso completo!",
  },
  jsonld: {
    headline: "Sinastría: compatibilidad relacional",
    description:
      "Sinastría en astrología: método, aspectos entre planetas, ejes relacionales, casas activadas y banderas rojas.",
    articleSection: "Astrología",
  },
  hero: {
    badge: "Curso de astrología — Relaciones",
    title: "Sinastría: compatibilidad y dinámica",
    subtitle:
      "Comparar dos cartas para entender la dinámica: atracción, seguridad, desafíos, largo plazo. No un puntaje — una lectura.",
    highlights: [
      "Método pro (orden de prioridad)",
      "Aspectos entre planetas (los más importantes)",
      "Casas activadas (dónde se vive)",
      "Estabilidad, pasión, conflictos y reparaciones",
    ],
  },
  sections: [
    { id: "definition", label: "Definición" },
    { id: "methode", label: "Método pro" },
    { id: "piliers", label: "Pilares" },
    { id: "aspects", label: "Aspectos en sinastría" },
    { id: "drapeaux", label: "Banderas rojas/verdes" },
    { id: "exemples", label: "Ejemplos" },
    { id: "faq", label: "FAQ" },
  ],
  tocLabel: "Índice",
  defBox: {
    label: "Definición",
    body: (
      <>
        La <strong>sinastría</strong> es la técnica astrológica que compara dos{" "}
        <Link href="/theme-astral">cartas natales</Link> para analizar la compatibilidad amorosa, las dinámicas
        relacionales y las tensiones entre parejas.
      </>
    ),
  },
  appIntro: (
    <>
      ¿Buscas entender la <strong>sinastría astrológica</strong> y lo que revela sobre tu relación? Mucha
      gente confunde la compatibilidad de signos con un verdadero estudio comparativo de las cartas. Este
      curso completo te guía paso a paso en la lectura de los aspectos, las casas activadas y las señales de
      alerta que hay que vigilar.
    </>
  ),
  labels: {
    resume: "Resumen",
    ceQueCeNestPas: "Lo que no es",
    reglesOr: "Reglas de oro",
    checklist: "Checklist",
    orbesRecommandes: "Orbes recomendados",
    pointsCles: "Puntos clave",
    aFaire: "Qué hacer",
    bonus: "Bonus",
    risques: "Riesgos",
    rouges: "Rojas (vigilancia)",
    verts: "Verdes (solidez)",
  },
  sectionTitles: {
    definition: "¿Qué es la sinastría en astrología?",
    methode: "Cómo hacer una sinastría: método profesional",
    piliers: "Los pilares planetarios de la compatibilidad amorosa",
    aspects: "¿Qué aspectos observar entre dos cartas natales?",
    drapeaux: "Banderas rojas y verdes: señales de alerta en sinastría",
    exemples: "Ejemplos concretos de lectura de sinastría",
    faq: "Preguntas frecuentes sobre la sinastría",
  },
  definition: {
    resume: [
      "La sinastría compara dos cartas natales para ver cómo interactúan dos psiques.",
      "Describe la dinámica: lo que atrae, lo que tranquiliza, lo que irrita, lo que transforma.",
      "No reemplaza la comunicación: pone de relieve las zonas sensibles y las palancas.",
    ],
    ceQueCeNestPas: [
      "Un veredicto (sí/no).",
      "Un test de compatibilidad simplista.",
      "Una excusa para aceptar lo inaceptable.",
    ],
  },
  methode: {
    reglesOr: [
      "1) Leer cada carta por separado (madurez, heridas, necesidades).",
      "2) Mirar los luminares (Sol/Luna) + ASC/DSC/MC/FC: base y relación.",
      "3) Priorizar: conjunciones/oposiciones/cuadraturas y luego trígonos/sextiles.",
      "4) Después: Venus/Marte (deseo), Mercurio (comunicación), Saturno (duración), Urano/Neptuno/Plutón (capítulos).",
      "5) Terminar por las casas: dónde “aterriza” la relación en la vida.",
    ],
    orbes: {
      recommandes: [
        { label: "Ángulos + Sol/Luna", orbe: "hasta 5° (a veces 6° si son muy exactos en otros lugares)" },
        { label: "Planetas personales (Mercurio/Venus/Marte)", orbe: "3° a 4°" },
        { label: "Júpiter/Saturno", orbe: "3°" },
        { label: "Urano/Neptuno/Plutón", orbe: "2° a 3° (sobre todo si es exacto)" },
      ],
    },
    checklist: [
      "Los 4 ejes: ASC/DSC y MC/FC (báscula relacional + proyecto de vida)",
      "Sol ↔ Luna (comprensión de las necesidades)",
      "Venus ↔ Marte (química)",
      "Mercurio ↔ Mercurio / Mercurio ↔ Luna (palabra y emociones)",
      "Saturno ↔ personales (duración, compromiso, pruebas)",
      "Neptuno/Plutón (idealismo e intensidad): la lucidez es indispensable",
      "Casas: dónde activa el otro en mí (7, 5, 4, 8, 10…) ",
    ],
  },
  piliers: [
    {
      slug: "axes",
      title: "Ejes relacionales (ASC/DSC/MC/FC)",
      why: "Los ángulos dan la estructura: atracción, proyección, cotidiano, futuro.",
      points: [
        "Planetas del otro sobre tu DSC: relación evidente (pareja).",
        "Planetas sobre tu ASC: atracción inmediata, identidad estimulada.",
        "Sobre el MC: ambición / dirección / imagen social influida.",
        "Sobre el FC: intimidad, hogar, familia, sentimiento de pertenencia.",
      ],
      aFaire: [
        "Detectar lo que toca tu DSC (pareja) y tu FC (seguridad).",
        "Si Plutón/Neptuno/Urano tocan un ángulo: lectura adulta obligatoria.",
      ],
    },
    {
      slug: "soleil-lune",
      title: "Sol–Luna (seguridad y reconocimiento)",
      why: "El Sol quiere ser reconocido. La Luna quiere sentirse segura.",
      points: [
        "Armonía: sensación de ser “visto” y “acogido”.",
        "Tensión: incomprensión de las necesidades y los ritmos afectivos.",
        "Conjunción: vínculo muy fuerte, a veces fusional.",
      ],
      aFaire: [
        "Nombrar la necesidad lunar (seguridad) + la dirección solar (la meta).",
        "Crear rituales de reparación tras el conflicto.",
      ],
    },
    {
      slug: "venus-mars",
      title: "Venus–Marte (química, deseo, estilo amoroso)",
      why: "Venus = lo que amo. Marte = cómo persigo y lo que quiero.",
      points: [
        "Aspectos fáciles: deseo natural, placer compartido.",
        "Aspectos duros: pasión + fricción, posibles celos o competencia.",
        "Casas 5/7/8 activadas: fuerte carga afectiva/sexual.",
      ],
      aFaire: [
        "Clarificar los lenguajes del amor (Venus) y el estilo de deseo (Marte).",
        "Establecer reglas claras sobre los conflictos (Marte).",
      ],
    },
    {
      slug: "mercure",
      title: "Mercurio (comunicación y mente)",
      why: "Sin Mercurio, todo lo demás se enturbia.",
      points: [
        "Mercurio ↔ Mercurio: la misma lógica / ritmo mental.",
        "Mercurio ↔ Luna: palabra que calma (o que hiere).",
        "Neptuno en aspecto a Mercurio: riesgo de neblina, malentendidos, promesas.",
      ],
      aFaire: [
        "Escribir lo que es importante (contratos relacionales).",
        "Obligarse a reformular (anti-proyección).",
      ],
    },
    {
      slug: "saturne",
      title: "Saturno (duración, compromiso, pruebas)",
      why: "Saturno aporta realidad: estructura, lealtad, responsabilidades.",
      points: [
        "Saturno sobre Venus/Luna: apego serio, pero puede enfriar si hay miedo.",
        "Saturno sobre Marte: frustración o disciplina (según la madurez).",
        "Saturno armónico: relación que se sostiene en el tiempo.",
      ],
      aFaire: [
        "Definir límites sanos y expectativas realistas.",
        "Vigilar la vergüenza, la crítica, la dureza.",
      ],
    },
    {
      slug: "uranus-neptune-pluton",
      title: "Urano / Neptuno / Plutón (capítulos de vida)",
      why: "Estos planetas transforman: libertad, ideal, intensidad.",
      points: [
        "Urano: excitación, inestabilidad, necesidad de espacio.",
        "Neptuno: idealización, romanticismo, neblina y posible rescate.",
        "Plutón: magnetismo, control, metamorfosis, posibles celos.",
      ],
      aFaire: [
        "Con Neptuno: verificar los hechos, mantenerse concreto.",
        "Con Plutón: trabajar el poder, los límites y la seguridad.",
        "Con Urano: instaurar reglas de espacio y de libertad.",
      ],
    },
  ],
  aspectsSynastrie: [
    {
      slug: "conjonction",
      nom: "Conjunción",
      angle: "0°",
      sens: "Fusión. Muy fuerte. Amplifica y colorea la relación.",
      bonus: ["sentimiento de destino", "comprensión inmediata"],
      risques: ["fusión, dependencia", "pérdida de fronteras si Neptuno/Plutón"],
    },
    {
      slug: "sextile",
      nom: "Sextil",
      angle: "60°",
      sens: "Facilidad que pide un gesto. Muy buena para construir.",
      bonus: ["cooperación", "soluciones simples"],
      risques: ["pasividad, dejar pasar"],
    },
    {
      slug: "carre",
      nom: "Cuadratura",
      angle: "90°",
      sens: "Tensión. Desafío de ajuste. Muy formativa con madurez.",
      bonus: ["energía", "estimulación"],
      risques: ["conflictos recurrentes", "reactividad"],
    },
    {
      slug: "trigone",
      nom: "Trígono",
      angle: "120°",
      sens: "Alineación. Fluye. Muy bueno para durar.",
      bonus: ["confianza", "facilidad natural"],
      risques: ["falta de esfuerzo", "rutina"],
    },
    {
      slug: "opposition",
      nom: "Oposición",
      angle: "180°",
      sens: "Polaridad. Espejo relacional. Aprendizaje del equilibrio.",
      bonus: ["complementariedad", "fuerte atracción"],
      risques: ["proyección", "tira y afloja"],
    },
  ],
  drapeaux: {
    rouges: [
      "Neptuno dominante sobre Mercurio/Venus: neblina, promesas, malentendidos.",
      "Plutón duro sobre Luna/Venus/ASC: control, celos, intensidad difícil.",
      "Marte duro sobre la Luna: discusiones emocionales, inseguridad.",
      "Saturno duro + falta de dulzura: relación pesada, crítica, vergüenza.",
    ],
    verts: [
      "Sol/Luna armoniosos + un Mercurio correcto: seguridad + diálogo.",
      "Saturno armónico: compromiso real, respeto de los límites.",
      "Venus/Marte armoniosos: deseo + afecto compatibles.",
      "Casas 4/7/10 activadas de forma sana: hogar, pareja, proyecto.",
    ],
  },
  exemplesLecture: [
    {
      titre: "Sinastría “estable y duradera”",
      texte:
        "Saturno armónico sobre Venus/Luna, Mercurio fluido, ejes tocados sin dominación Neptuno/Plutón: relación construida, fiable, de largo plazo.",
    },
    {
      titre: "Sinastría “pasión + montaña rusa”",
      texte:
        "Marte y Plutón muy presentes, cuadraturas y oposiciones: magnetismo enorme, pero con necesidad de reglas de conflicto y límites estrictos.",
    },
    {
      titre: "Sinastría “ideal… luego difusa”",
      texte:
        "Neptuno fuerte sobre Venus/Mercurio: romanticismo, proyección, promesas. Requiere una higiene de realidad: hechos, temporalidad, compromiso concreto.",
    },
  ],
  faq: [
    {
      q: "¿Sinastría o composite?",
      a: "Sinastría = cómo se afectan dos cartas. Composite = “la carta de la relación” como entidad. Ambas se complementan.",
    },
    {
      q: "¿Se puede “reparar” una sinastría difícil?",
      a: "Sí, si ambos son maduros: reglas de conflicto, comunicación, límites y un objetivo común. Si no, los aspectos duros se vuelven repetitivos.",
    },
    {
      q: "¿Cuál es el trío más importante?",
      a: "Sol/Luna + Mercurio + Saturno. Sin seguridad, diálogo y realidad… Venus/Marte no basta.",
    },
  ],
  faqVisibleTitle: "Preguntas frecuentes sobre la sinastría astrológica",
  faqVisible: [
    {
      q: "¿Cuál es la diferencia entre sinastría y carta composite?",
      a: (
        <>
          La <strong>sinastría</strong> compara dos cartas natales para ver cómo cada persona afecta a la
          otra. La <strong>carta composite</strong> fusiona las dos cartas en una sola y representa la
          relación como entidad. Ambos enfoques se complementan para un análisis relacional completo.
        </>
      ),
    },
    {
      q: "¿Se puede mejorar una sinastría difícil entre dos parejas?",
      a: (
        <>
          Sí, si ambos miembros muestran madurez. Con reglas de comunicación claras, el respeto de los
          límites y un objetivo común, los <strong>aspectos difíciles</strong> se convierten en palancas de
          crecimiento. Si no, las tensiones se repiten. Consulta nuestro curso sobre los{" "}
          <Link href="/aspects">aspectos planetarios</Link> para entenderlo mejor.
        </>
      ),
    },
    {
      q: "¿Qué planetas son los más importantes en sinastría?",
      a: (
        <>
          El trío esencial es <strong>Sol/Luna</strong> (seguridad emocional), <strong>Mercurio</strong>{" "}
          (comunicación) y <strong>Saturno</strong> (durabilidad). Sin estos cimientos, los aspectos
          Venus-Marte por sí solos no bastan para mantener una relación estable. Descubre el papel de cada{" "}
          <Link href="/planetes">planeta</Link> en nuestro curso.
        </>
      ),
    },
    {
      q: "¿Se necesita la hora de nacimiento exacta para una sinastría?",
      a: (
        <>
          La hora de nacimiento es indispensable para conocer el <strong>Ascendente</strong> y las{" "}
          <Link href="/maisons">casas astrológicas</Link> activadas. Sin ella, se pueden analizar los
          aspectos entre planetas, pero se pierde la información sobre los ámbitos de vida implicados y los
          ángulos relacionales.
        </>
      ),
    },
  ],
  footer: {
    aspects: "Aspectos",
    planets: "Planetas",
    transits: "Tránsitos",
    houses: "Casas",
  },
};

export const synastrieContent: Record<SeoLocale, SynastrieContent> = { fr, en, es };
