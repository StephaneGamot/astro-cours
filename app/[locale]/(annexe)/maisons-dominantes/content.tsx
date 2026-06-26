import type { ReactNode } from "react";
import type { SeoLocale } from "@/lib/seo";

/* ====================================================================
   Les 12 maisons dominantes — contenu localisé (fr / en / es)
   Rédaction française complète ; en/es pointent provisoirement sur le
   français (à traduire ultérieurement).
   ==================================================================== */

export type MaisonsDominantesContent = {
  meta: { title: string; description: string };
  jsonld: { headline: string; description: string; articleSection: string };
  hero: { badge: string; title: string; subtitle: string; highlights: string[] };
  tocLabel: string;
  sections: { id: string; label: string }[];
  defBox: { label: string; body: ReactNode };
  intro: ReactNode;
  definition: {
    title: string;
    resumeLabel: string;
    resume: string[];
    notLabel: string;
    ceQueCeNestPas: string[];
  };
  reperer: { title: string; intro: string[]; criteresLabel: string; criteres: { label: string; sens: string }[]; astuceLabel: string; astuce: string };
  maisons: {
    title: string;
    intro: string[];
    houseLabel: string;
    apporteLabel: string;
    ombreLabel: string;
    items: { maison: string; nom: string; apporte: string; ombre: string }[];
  };
  angularite: { title: string; intro: string[]; items: { label: string; sens: string }[] };
  exemples: { title: string; items: { titre: string; texte: string }[]; erreursLabel: string; erreurs: string[] };
  faqDataTitle: string;
  faq: { q: string; a: string }[];
  faqVisibleTitle: string;
  faqVisible: { q: string; a: string }[];
  related: { title: string; items: { href: string; label: string }[] };
  footer: { maisons: string; planetes: string; signes: string; cuspides: string };
};

/* ============================== FR ============================== */
const fr: MaisonsDominantesContent = {
  meta: {
    title: "Les 12 maisons dominantes : sens et repérage",
    description:
      "Maison dominante : comment la trouver dans son thème (amas, maître, angles) et ce que chacune des 12 maisons signifie et apporte quand elle domine.",
  },
  jsonld: {
    headline: "Les 12 maisons dominantes : repérage et signification",
    description:
      "Qu'est-ce qu'une maison dominante, comment la repérer dans un thème (amas de planètes, maître du thème, angularité), et le profil de chacune des douze maisons quand elle domine.",
    articleSection: "Astrologie",
  },
  hero: {
    badge: "Cours d'astrologie — Lecture du thème",
    title: "Les 12 maisons dominantes",
    subtitle:
      "Dans un thème, une ou deux maisons « pèsent » plus que les autres : elles concentrent l'énergie et colorent toute une vie. Apprends à repérer ta maison dominante, puis découvre ce que chacune des douze signifie et apporte quand elle prend le dessus.",
    highlights: [
      "Comment repérer sa maison dominante",
      "Amas, maître du thème & angularité",
      "Les 12 profils (force & ombre)",
      "Angulaire, succédente, cadente",
    ],
  },
  tocLabel: "Sommaire",
  sections: [
    { id: "definition", label: "Définition" },
    { id: "reperer", label: "Comment la repérer" },
    { id: "maisons", label: "Les 12 profils" },
    { id: "angularite", label: "Force des maisons" },
    { id: "exemples", label: "Exemples" },
    { id: "faq", label: "FAQ" },
  ],
  defBox: {
    label: "Définition express",
    body: (
      <>
        Une <strong>maison dominante</strong> est le secteur du thème qui concentre le plus d'énergie :
        par un <strong>amas de planètes</strong>, la présence du <strong>Soleil</strong>, de la{" "}
        <strong>Lune</strong>, de l'<strong>Ascendant</strong> ou de son <strong>maître</strong>, ou encore
        par sa proximité d'un <strong>angle</strong>. Elle indique le domaine de vie où la personne investit
        le plus naturellement son attention et son énergie.
      </>
    ),
  },
  intro: (
    <>
      Les douze maisons découpent le thème en domaines d'existence — le soi, l'argent, le couple, le travail,
      la vocation… Mais elles ne se valent pas toutes : selon les planètes qui les occupent et leur position,
      certaines deviennent <strong>dominantes</strong> et donnent le ton de toute une vie. Repérer sa maison
      dominante, c'est comprendre <em>où</em> se joue l'essentiel pour soi. Voici la méthode, puis les douze
      profils.
    </>
  ),
  definition: {
    title: "Qu'est-ce qu'une maison dominante ?",
    resumeLabel: "Ce que c'est",
    resume: [
      "Le secteur du thème qui concentre le plus d'énergie et d'attention.",
      "Un domaine de vie mis en avant par les planètes, les angles ou le maître du thème.",
      "Un fil conducteur qui colore la personnalité et les choix de vie.",
      "Un repère de lecture : par où commencer pour comprendre un thème.",
    ],
    notLabel: "Ce que ce n'est pas",
    ceQueCeNestPas: [
      "Forcément la maison qui contient le plus de planètes (l'Ascendant et le maître comptent aussi).",
      "Une étiquette unique : on a souvent deux ou trois maisons fortes.",
      "Une maison « meilleure » que les autres : chacune a sa force et son ombre.",
      "Un destin figé : la maison dominante s'exprime, elle ne contraint pas.",
    ],
  },
  reperer: {
    title: "Comment repérer sa maison dominante",
    intro: [
      "Aucune planète unique ne décide à elle seule : on additionne plusieurs indices. Quand ils pointent la même maison, elle domine clairement ; quand ils se répartissent, plusieurs maisons co-dominent.",
    ],
    criteresLabel: "Les critères, du plus fort au plus fin",
    criteres: [
      { label: "L'amas (stellium)", sens: "Trois planètes ou plus dans une même maison : c'est le signe le plus visible d'une maison dominante." },
      { label: "Soleil, Lune & Ascendant", sens: "Les maisons qui abritent le Soleil, la Lune et l'Ascendant pèsent plus lourd que les autres : pondère-les fortement." },
      { label: "Le maître du thème", sens: "Le maître de l'Ascendant attire l'attention sur la maison où il se trouve : elle devient un foyer central du thème." },
      { label: "L'angularité", sens: "Une planète proche d'un angle (Ascendant, Fond du Ciel, Descendant, Milieu du Ciel) renforce nettement sa maison." },
      { label: "Les planètes rapides vs lentes", sens: "Une personnelle (Mercure, Vénus, Mars) marque le vécu quotidien ; une lente (Saturne à Pluton) imprime un thème de fond." },
    ],
    astuceLabel: "Astuce",
    astuce:
      "Fais simple : attribue des points (amas = 3, Soleil/Lune/Asc = 2, maître ou angle = 2, autre planète = 1) et regarde quelle maison cumule le plus. Tu obtiens vite la — ou les — maison(s) dominante(s).",
  },
  maisons: {
    title: "Les 12 maisons dominantes, une à une",
    intro: [
      "Pour chaque maison : ce qu'elle signifie quand elle domine, ce qu'elle apporte de meilleur, et son revers quand elle prend trop de place. À croiser toujours avec le signe sur la cuspide et les planètes présentes.",
    ],
    houseLabel: "Maison",
    apporteLabel: "Ce que ça apporte",
    ombreLabel: "L'ombre",
    items: [
      { maison: "I", nom: "Le soi, le corps, l'élan", apporte: "Une identité affirmée, de la présence, de l'initiative et une vraie vitalité. La personne s'impose naturellement et avance par elle-même.", ombre: "Égocentrisme, impatience, tendance à foncer sans écouter." },
      { maison: "II", nom: "Les ressources & les valeurs", apporte: "Un sens concret, de la persévérance et le talent de bâtir du solide. Rapport sain à la sécurité et aux talents personnels.", ombre: "Possessivité, matérialisme, peur de manquer." },
      { maison: "III", nom: "Le mental & les échanges", apporte: "Curiosité, agilité d'esprit, aisance verbale et facilité à apprendre et relier les gens.", ombre: "Dispersion, superficialité, mental qui s'agite sans se poser." },
      { maison: "IV", nom: "Le foyer & les racines", apporte: "Profondeur émotionnelle, ancrage, mémoire et sens de l'appartenance. Le foyer est une force et un refuge.", ombre: "Repli, dépendance au passé et à la famille, difficulté à s'émanciper." },
      { maison: "V", nom: "La création & le plaisir", apporte: "Créativité, joie de vivre, charisme, élan romantique et goût d'exprimer ce qu'on est.", ombre: "Ego théâtral, besoin d'être admiré, fuite dans le plaisir." },
      { maison: "VI", nom: "Le travail & le soin", apporte: "Sens du devoir, rigueur, compétence et envie d'être utile. La personne se réalise dans le concret bien fait.", ombre: "Perfectionnisme, anxiété, surmenage, critique de soi." },
      { maison: "VII", nom: "L'autre & le partenariat", apporte: "Diplomatie, sens du couple et de l'association, écoute et art de la relation.", ombre: "Dépendance affective, peur de la solitude, perte de soi dans l'autre." },
      { maison: "VIII", nom: "Les crises & la transformation", apporte: "Profondeur psychologique, résilience, intensité et pouvoir de se régénérer après les épreuves.", ombre: "Obsession, besoin de contrôle, attirance pour le drame et l'extrême." },
      { maison: "IX", nom: "Le sens & les horizons", apporte: "Quête de sens, ouverture, optimisme, goût des voyages, des études et des grandes visions.", ombre: "Dogmatisme, fuite en avant, théories déconnectées du réel." },
      { maison: "X", nom: "La vocation & le statut", apporte: "Ambition saine, sens des responsabilités, autorité naturelle et capacité d'accomplir quelque chose de visible.", ombre: "Ambition froide, image avant l'être, vie sacrifiée à la carrière." },
      { maison: "XI", nom: "Les amis & les projets", apporte: "Esprit d'équipe, vision sociale, réseau, idéaux et goût de construire l'avenir avec d'autres.", ombre: "Dilution dans le groupe, idéalisme déconnecté, fuite de l'intime." },
      { maison: "XII", nom: "L'intérieur & l'invisible", apporte: "Intuition, compassion, créativité spirituelle, vie intérieure riche et capacité de retrait fécond.", ombre: "Fuite, isolement, confusion, sacrifice de soi, sensibilité débordée." },
    ],
  },
  angularite: {
    title: "Pourquoi certaines maisons pèsent plus",
    intro: [
      "Avant même les planètes, la structure des maisons crée une hiérarchie de force. Les maisons se classent en trois groupes, et une planète gagne ou perd en puissance selon le groupe où elle tombe.",
    ],
    items: [
      { label: "Angulaires — I, IV, VII, X", sens: "Les plus puissantes : elles touchent les angles du thème. Action directe, visible, structurante. Une planète y est mise en avant." },
      { label: "Succédentes — II, V, VIII, XI", sens: "Elles stabilisent et consolident ce que les angulaires lancent. Énergie de durée, de ressources et d'ancrage." },
      { label: "Cadentes — III, VI, IX, XII", sens: "Plus mentales et adaptatives, leur action est diffuse, en arrière-plan : apprentissage, ajustement, préparation." },
    ],
  },
  exemples: {
    title: "Exemples de lecture",
    items: [
      {
        titre: "Amas en V",
        texte:
          "Trois planètes en maison V, dont Vénus : un tempérament créatif et romantique, qui a besoin de créer, de plaire et de briller pour se sentir vivant.",
      },
      {
        titre: "Maître d'Ascendant en X",
        texte:
          "L'Ascendant Vierge a pour maître Mercure, placé en maison X : la vie s'oriente vers la réussite, la reconnaissance et la place sociale.",
      },
      {
        titre: "Lune & Vénus en IV",
        texte:
          "Deux personnelles dans le secteur du foyer : la famille, les racines et l'intimité passent avant tout, et nourrissent l'équilibre intérieur.",
      },
    ],
    erreursLabel: "Pièges à éviter",
    erreurs: [
      "Ne compter que les planètes et oublier l'Ascendant et son maître.",
      "Donner le même poids à une lente lointaine et au Soleil.",
      "Réduire quelqu'un à une seule maison : on est toujours un mélange.",
      "Négliger l'angularité, qui change tout.",
      "Croire qu'une maison dominante est « mieux » : chacune a son ombre.",
      "Lire la maison sans le signe ni les planètes qui s'y trouvent.",
    ],
  },
  faqDataTitle: "Questions fréquentes sur la maison dominante",
  faq: [
    { q: "Qu'est-ce qu'une maison dominante ?", a: "C'est le secteur du thème qui concentre le plus d'énergie — par un amas de planètes, la présence du Soleil, de la Lune, de l'Ascendant ou de son maître, ou par l'angularité. Elle indique le domaine de vie le plus investi." },
    { q: "Comment savoir quelle maison domine mon thème ?", a: "On additionne les indices : amas de planètes, maisons du Soleil, de la Lune et de l'Ascendant, position du maître du thème et angularité. La maison qui cumule le plus de poids domine." },
    { q: "Une maison vide peut-elle être dominante ?", a: "Oui. Si elle porte l'Ascendant, son maître ou un angle important, une maison sans planète peut très bien dominer le thème." },
    { q: "Peut-on avoir plusieurs maisons dominantes ?", a: "Tout à fait. Beaucoup de thèmes ont deux ou trois maisons fortes qui se partagent l'énergie : on parle alors de co-dominance." },
    { q: "Maison dominante ou signe dominant : lequel compte le plus ?", a: "Les deux se complètent. Le signe dominant décrit le « comment » (le style), la maison dominante le « où » (le domaine de vie). On les lit ensemble." },
    { q: "Qu'est-ce qu'un stellium ?", a: "Un amas d'au moins trois planètes dans une même maison (ou un même signe). C'est l'un des signaux les plus nets d'une maison dominante." },
  ],
  faqVisibleTitle: "Questions fréquentes sur la maison dominante",
  faqVisible: [
    {
      q: "Quelle différence entre signe dominant et maison dominante ?",
      a: "Le signe dominant colore la manière d'être (le tempérament, le style). La maison dominante indique le terrain de jeu — le domaine de vie où cette énergie se déploie. Un même Lion dominant ne vivra pas pareil en maison V (création, scène) ou en maison X (carrière, statut).",
    },
    {
      q: "Comment l'Ascendant influence-t-il la maison dominante ?",
      a: "L'Ascendant marque la maison I et désigne le maître du thème ; la maison où ce maître se trouve devient un foyer d'attention majeur. L'Ascendant est donc l'un des premiers indices à regarder pour repérer la maison dominante.",
    },
    {
      q: "La maison dominante peut-elle changer avec le temps ?",
      a: "Le thème natal ne change pas, donc la maison dominante de fond reste. Mais les transits et les progressions activent tour à tour différentes maisons : telle période met en avant le travail, telle autre le couple ou le foyer.",
    },
    {
      q: "Faut-il un logiciel pour trouver sa maison dominante ?",
      a: "Un thème calculé suffit. À partir de là, un simple comptage pondéré (amas, Soleil/Lune/Ascendant, maître, angles) permet de repérer la maison dominante à la main, sans outil spécialisé.",
    },
  ],
  related: {
    title: "À voir aussi",
    items: [
      { href: "/signes-dominants", label: "Les signes dominants" },
      { href: "/astrologie-mondiale", label: "L'astrologie mondiale" },
    ],
  },
  footer: { maisons: "Les maisons", planetes: "Planètes", signes: "Signes", cuspides: "Cuspides des maisons" },
};

/* ============================== EN ============================== */
const en: MaisonsDominantesContent = {
  meta: {
    title: "The 12 dominant houses: meaning & spotting",
    description:
      "Dominant house in astrology: how to find it in your chart (stellium, chart ruler, angles) and what each of the 12 houses means and brings when it dominates.",
  },
  jsonld: {
    headline: "The 12 dominant houses: spotting and meaning",
    description:
      "What a dominant house is, how to spot it in a chart (stellium, chart ruler, angularity), and the profile of each of the twelve houses when it dominates.",
    articleSection: "Astrology",
  },
  hero: {
    badge: "Astrology course — Reading the chart",
    title: "The 12 dominant houses",
    subtitle:
      "In a chart, one or two houses 'weigh' more than the others: they concentrate the energy and colour a whole life. Learn to spot your dominant house, then discover what each of the twelve means and brings when it takes the lead.",
    highlights: [
      "How to spot your dominant house",
      "Stellium, chart ruler & angularity",
      "The 12 profiles (gift & shadow)",
      "Angular, succedent, cadent",
    ],
  },
  tocLabel: "Contents",
  sections: [
    { id: "definition", label: "Definition" },
    { id: "reperer", label: "How to spot it" },
    { id: "maisons", label: "The 12 profiles" },
    { id: "angularite", label: "House strength" },
    { id: "exemples", label: "Examples" },
    { id: "faq", label: "FAQ" },
  ],
  defBox: {
    label: "Quick definition",
    body: (
      <>
        A <strong>dominant house</strong> is the sector of the chart that concentrates the most energy:
        through a <strong>stellium</strong>, the presence of the <strong>Sun</strong>, the{" "}
        <strong>Moon</strong>, the <strong>Ascendant</strong> or its <strong>ruler</strong>, or through
        closeness to an <strong>angle</strong>. It points to the area of life where a person most naturally
        invests their attention and energy.
      </>
    ),
  },
  intro: (
    <>
      The twelve houses divide the chart into areas of life — the self, money, the couple, work, vocation…
      But they are not all equal: depending on the planets that occupy them and their position, some become{" "}
      <strong>dominant</strong> and set the tone of an entire life. Spotting your dominant house means
      understanding <em>where</em> the essential plays out for you. Here is the method, then the twelve
      profiles.
    </>
  ),
  definition: {
    title: "What is a dominant house?",
    resumeLabel: "What it is",
    resume: [
      "The sector of the chart that concentrates the most energy and attention.",
      "An area of life highlighted by the planets, the angles or the chart ruler.",
      "A through-line that colours the personality and life choices.",
      "A reading anchor: where to start to understand a chart.",
    ],
    notLabel: "What it is not",
    ceQueCeNestPas: [
      "Necessarily the house with the most planets (the Ascendant and ruler count too).",
      "A single label: you often have two or three strong houses.",
      "A house that is 'better' than the others: each has its gift and its shadow.",
      "A fixed fate: the dominant house expresses itself, it does not compel.",
    ],
  },
  reperer: {
    title: "How to spot your dominant house",
    intro: [
      "No single planet decides on its own: you add up several clues. When they point to the same house, it clearly dominates; when they spread out, several houses co-dominate.",
    ],
    criteresLabel: "The criteria, from strongest to finest",
    criteres: [
      { label: "The stellium", sens: "Three planets or more in the same house: the most visible sign of a dominant house." },
      { label: "Sun, Moon & Ascendant", sens: "The houses hosting the Sun, the Moon and the Ascendant weigh more than the others: give them strong weight." },
      { label: "The chart ruler", sens: "The ruler of the Ascendant draws attention to the house it sits in: that house becomes a central focus of the chart." },
      { label: "Angularity", sens: "A planet close to an angle (Ascendant, IC, Descendant, Midheaven) markedly strengthens its house." },
      { label: "Fast vs slow planets", sens: "A personal planet (Mercury, Venus, Mars) marks daily life; a slow one (Saturn to Pluto) imprints an underlying theme." },
    ],
    astuceLabel: "Tip",
    astuce:
      "Keep it simple: assign points (stellium = 3, Sun/Moon/Asc = 2, ruler or angle = 2, other planet = 1) and see which house adds up to the most. You quickly find the dominant house — or houses.",
  },
  maisons: {
    title: "The 12 dominant houses, one by one",
    intro: [
      "For each house: what it means when it dominates, what it brings at its best, and its downside when it takes up too much room. Always cross-reference with the sign on the cusp and the planets present.",
    ],
    houseLabel: "House",
    apporteLabel: "What it brings",
    ombreLabel: "The shadow",
    items: [
      { maison: "I", nom: "The self, the body, the drive", apporte: "An assertive identity, presence, initiative and real vitality. The person stands out naturally and moves forward on their own.", ombre: "Self-centredness, impatience, a tendency to rush in without listening." },
      { maison: "II", nom: "Resources & values", apporte: "A concrete sense, perseverance and the talent to build something solid. A healthy relationship to security and personal gifts.", ombre: "Possessiveness, materialism, fear of lacking." },
      { maison: "III", nom: "The mind & exchanges", apporte: "Curiosity, mental agility, verbal ease and a flair for learning and connecting people.", ombre: "Scattering, superficiality, a mind that stirs without settling." },
      { maison: "IV", nom: "Home & roots", apporte: "Emotional depth, grounding, memory and a sense of belonging. The home is a strength and a refuge.", ombre: "Withdrawal, dependence on the past and family, difficulty becoming independent." },
      { maison: "V", nom: "Creation & pleasure", apporte: "Creativity, joy of living, charisma, romantic drive and a taste for expressing who you are.", ombre: "Theatrical ego, need to be admired, escaping into pleasure." },
      { maison: "VI", nom: "Work & care", apporte: "A sense of duty, rigour, competence and the wish to be useful. The person thrives in concrete work well done.", ombre: "Perfectionism, anxiety, overwork, self-criticism." },
      { maison: "VII", nom: "The other & partnership", apporte: "Diplomacy, a sense of the couple and of partnership, listening and the art of relating.", ombre: "Emotional dependence, fear of solitude, losing oneself in the other." },
      { maison: "VIII", nom: "Crises & transformation", apporte: "Psychological depth, resilience, intensity and the power to regenerate after ordeals.", ombre: "Obsession, need for control, attraction to drama and extremes." },
      { maison: "IX", nom: "Meaning & horizons", apporte: "A quest for meaning, openness, optimism, a taste for travel, study and grand visions.", ombre: "Dogmatism, headlong flight, theories disconnected from reality." },
      { maison: "X", nom: "Vocation & status", apporte: "Healthy ambition, a sense of responsibility, natural authority and the ability to achieve something visible.", ombre: "Cold ambition, image over substance, a life sacrificed to career." },
      { maison: "XI", nom: "Friends & projects", apporte: "Team spirit, social vision, network, ideals and a taste for building the future with others.", ombre: "Dilution in the group, disconnected idealism, avoidance of intimacy." },
      { maison: "XII", nom: "The inner & the invisible", apporte: "Intuition, compassion, spiritual creativity, a rich inner life and a capacity for fruitful retreat.", ombre: "Escape, isolation, confusion, self-sacrifice, overflowing sensitivity." },
    ],
  },
  angularite: {
    title: "Why some houses weigh more",
    intro: [
      "Even before the planets, the structure of the houses creates a hierarchy of strength. The houses fall into three groups, and a planet gains or loses power depending on the group it lands in.",
    ],
    items: [
      { label: "Angular — I, IV, VII, X", sens: "The most powerful: they touch the angles of the chart. Direct, visible, structuring action. A planet here is brought to the fore." },
      { label: "Succedent — II, V, VIII, XI", sens: "They stabilise and consolidate what the angular houses launch. Energy of duration, resources and grounding." },
      { label: "Cadent — III, VI, IX, XII", sens: "More mental and adaptive, their action is diffuse, in the background: learning, adjustment, preparation." },
    ],
  },
  exemples: {
    title: "Reading examples",
    items: [
      {
        titre: "Stellium in the 5th",
        texte:
          "Three planets in the 5th house, including Venus: a creative and romantic temperament that needs to create, to please and to shine to feel alive.",
      },
      {
        titre: "Chart ruler in the 10th",
        texte:
          "A Virgo Ascendant has Mercury as ruler, placed in the 10th house: life orients towards success, recognition and social standing.",
      },
      {
        titre: "Moon & Venus in the 4th",
        texte:
          "Two personal planets in the home sector: family, roots and intimacy come first, and nourish inner balance.",
      },
    ],
    erreursLabel: "Pitfalls to avoid",
    erreurs: [
      "Counting only the planets and forgetting the Ascendant and its ruler.",
      "Giving a distant slow planet the same weight as the Sun.",
      "Reducing someone to a single house: we are always a blend.",
      "Neglecting angularity, which changes everything.",
      "Believing a dominant house is 'better': each has its shadow.",
      "Reading the house without the sign or the planets in it.",
    ],
  },
  faqDataTitle: "Frequently asked questions about the dominant house",
  faq: [
    { q: "What is a dominant house?", a: "It is the sector of the chart that concentrates the most energy — through a stellium, the presence of the Sun, the Moon, the Ascendant or its ruler, or through angularity. It points to the most invested area of life." },
    { q: "How do I know which house dominates my chart?", a: "You add up the clues: stellium, the houses of the Sun, Moon and Ascendant, the position of the chart ruler and angularity. The house that gathers the most weight dominates." },
    { q: "Can an empty house be dominant?", a: "Yes. If it carries the Ascendant, its ruler or an important angle, a house with no planet can perfectly well dominate the chart." },
    { q: "Can you have several dominant houses?", a: "Absolutely. Many charts have two or three strong houses sharing the energy: this is called co-dominance." },
    { q: "Dominant house or dominant sign: which counts most?", a: "Both complement each other. The dominant sign describes the 'how' (the style), the dominant house the 'where' (the area of life). They are read together." },
    { q: "What is a stellium?", a: "A cluster of at least three planets in the same house (or the same sign). It is one of the clearest signals of a dominant house." },
  ],
  faqVisibleTitle: "Frequently asked questions about the dominant house",
  faqVisible: [
    {
      q: "What is the difference between a dominant sign and a dominant house?",
      a: "The dominant sign colours the way of being (the temperament, the style). The dominant house indicates the playing field — the area of life where that energy unfolds. The same dominant Leo will not live the same way in the 5th house (creation, stage) or the 10th (career, status).",
    },
    {
      q: "How does the Ascendant influence the dominant house?",
      a: "The Ascendant marks the 1st house and designates the chart ruler; the house where that ruler sits becomes a major focus of attention. The Ascendant is therefore one of the first clues to check when spotting the dominant house.",
    },
    {
      q: "Can the dominant house change over time?",
      a: "The natal chart does not change, so the underlying dominant house remains. But transits and progressions activate different houses in turn: one period highlights work, another the couple or the home.",
    },
    {
      q: "Do you need software to find your dominant house?",
      a: "A calculated chart is enough. From there, a simple weighted count (stellium, Sun/Moon/Ascendant, ruler, angles) lets you spot the dominant house by hand, with no specialised tool.",
    },
  ],
  related: {
    title: "See also",
    items: [
      { href: "/signes-dominants", label: "Dominant signs" },
      { href: "/astrologie-mondiale", label: "Mundane astrology" },
    ],
  },
  footer: { maisons: "The houses", planetes: "Planets", signes: "Signs", cuspides: "House cusps" },
};

/* ============================== ES ============================== */
const es: MaisonsDominantesContent = {
  meta: {
    title: "Las 12 casas dominantes: significado y método",
    description:
      "Casa dominante en astrología: cómo encontrarla en tu carta (stellium, regente, ángulos) y qué significa y aporta cada una de las 12 casas cuando domina.",
  },
  jsonld: {
    headline: "Las 12 casas dominantes: detección y significado",
    description:
      "Qué es una casa dominante, cómo detectarla en una carta (stellium, regente de la carta, angularidad) y el perfil de cada una de las doce casas cuando domina.",
    articleSection: "Astrología",
  },
  hero: {
    badge: "Curso de astrología — Lectura de la carta",
    title: "Las 12 casas dominantes",
    subtitle:
      "En una carta, una o dos casas «pesan» más que las demás: concentran la energía y colorean toda una vida. Aprende a detectar tu casa dominante y descubre qué significa y aporta cada una de las doce cuando toma la delantera.",
    highlights: [
      "Cómo detectar tu casa dominante",
      "Stellium, regente y angularidad",
      "Los 12 perfiles (don y sombra)",
      "Angular, sucedente, cadente",
    ],
  },
  tocLabel: "Índice",
  sections: [
    { id: "definition", label: "Definición" },
    { id: "reperer", label: "Cómo detectarla" },
    { id: "maisons", label: "Los 12 perfiles" },
    { id: "angularite", label: "Fuerza de las casas" },
    { id: "exemples", label: "Ejemplos" },
    { id: "faq", label: "FAQ" },
  ],
  defBox: {
    label: "Definición exprés",
    body: (
      <>
        Una <strong>casa dominante</strong> es el sector de la carta que concentra más energía:
        por un <strong>stellium</strong>, la presencia del <strong>Sol</strong>, la{" "}
        <strong>Luna</strong>, el <strong>Ascendente</strong> o su <strong>regente</strong>, o por su
        cercanía a un <strong>ángulo</strong>. Señala el área de la vida donde la persona invierte de forma
        más natural su atención y su energía.
      </>
    ),
  },
  intro: (
    <>
      Las doce casas dividen la carta en áreas de existencia — el yo, el dinero, la pareja, el trabajo, la
      vocación… Pero no todas valen lo mismo: según los planetas que las ocupan y su posición, algunas se
      vuelven <strong>dominantes</strong> y dan el tono a toda una vida. Detectar tu casa dominante es
      entender <em>dónde</em> se juega lo esencial para ti. Aquí está el método y luego los doce perfiles.
    </>
  ),
  definition: {
    title: "¿Qué es una casa dominante?",
    resumeLabel: "Lo que es",
    resume: [
      "El sector de la carta que concentra más energía y atención.",
      "Un área de la vida resaltada por los planetas, los ángulos o el regente de la carta.",
      "Un hilo conductor que colorea la personalidad y las elecciones de vida.",
      "Una referencia de lectura: por dónde empezar para entender una carta.",
    ],
    notLabel: "Lo que no es",
    ceQueCeNestPas: [
      "Necesariamente la casa con más planetas (el Ascendente y el regente también cuentan).",
      "Una etiqueta única: a menudo se tienen dos o tres casas fuertes.",
      "Una casa «mejor» que las demás: cada una tiene su don y su sombra.",
      "Un destino fijado: la casa dominante se expresa, no obliga.",
    ],
  },
  reperer: {
    title: "Cómo detectar tu casa dominante",
    intro: [
      "Ningún planeta único decide por sí solo: se suman varias pistas. Cuando apuntan a la misma casa, esta domina con claridad; cuando se reparten, varias casas codominan.",
    ],
    criteresLabel: "Los criterios, del más fuerte al más fino",
    criteres: [
      { label: "El stellium", sens: "Tres planetas o más en una misma casa: la señal más visible de una casa dominante." },
      { label: "Sol, Luna y Ascendente", sens: "Las casas que albergan el Sol, la Luna y el Ascendente pesan más que las demás: pondéralas con fuerza." },
      { label: "El regente de la carta", sens: "El regente del Ascendente atrae la atención sobre la casa donde se encuentra: esa casa se vuelve un foco central de la carta." },
      { label: "La angularidad", sens: "Un planeta cercano a un ángulo (Ascendente, Fondo del Cielo, Descendente, Medio Cielo) refuerza notablemente su casa." },
      { label: "Planetas rápidos vs lentos", sens: "Un planeta personal (Mercurio, Venus, Marte) marca la vivencia cotidiana; uno lento (de Saturno a Plutón) imprime un tema de fondo." },
    ],
    astuceLabel: "Truco",
    astuce:
      "Hazlo simple: asigna puntos (stellium = 3, Sol/Luna/Asc = 2, regente o ángulo = 2, otro planeta = 1) y mira qué casa acumula más. Encuentras enseguida la — o las — casa(s) dominante(s).",
  },
  maisons: {
    title: "Las 12 casas dominantes, una a una",
    intro: [
      "Para cada casa: qué significa cuando domina, qué aporta de mejor y su reverso cuando ocupa demasiado espacio. Cruzar siempre con el signo en la cúspide y los planetas presentes.",
    ],
    houseLabel: "Casa",
    apporteLabel: "Lo que aporta",
    ombreLabel: "La sombra",
    items: [
      { maison: "I", nom: "El yo, el cuerpo, el impulso", apporte: "Una identidad afirmada, presencia, iniciativa y verdadera vitalidad. La persona se impone con naturalidad y avanza por sí misma.", ombre: "Egocentrismo, impaciencia, tendencia a lanzarse sin escuchar." },
      { maison: "II", nom: "Los recursos y los valores", apporte: "Un sentido concreto, perseverancia y el talento de construir algo sólido. Relación sana con la seguridad y los talentos personales.", ombre: "Posesividad, materialismo, miedo a la carencia." },
      { maison: "III", nom: "La mente y los intercambios", apporte: "Curiosidad, agilidad mental, soltura verbal y facilidad para aprender y conectar a la gente.", ombre: "Dispersión, superficialidad, una mente que se agita sin asentarse." },
      { maison: "IV", nom: "El hogar y las raíces", apporte: "Profundidad emocional, arraigo, memoria y sentido de pertenencia. El hogar es una fuerza y un refugio.", ombre: "Repliegue, dependencia del pasado y de la familia, dificultad para emanciparse." },
      { maison: "V", nom: "La creación y el placer", apporte: "Creatividad, alegría de vivir, carisma, impulso romántico y gusto por expresar lo que se es.", ombre: "Ego teatral, necesidad de ser admirado, huida en el placer." },
      { maison: "VI", nom: "El trabajo y el cuidado", apporte: "Sentido del deber, rigor, competencia y ganas de ser útil. La persona se realiza en lo concreto bien hecho.", ombre: "Perfeccionismo, ansiedad, agotamiento, autocrítica." },
      { maison: "VII", nom: "El otro y la asociación", apporte: "Diplomacia, sentido de la pareja y de la asociación, escucha y arte de la relación.", ombre: "Dependencia afectiva, miedo a la soledad, perderse en el otro." },
      { maison: "VIII", nom: "Las crisis y la transformación", apporte: "Profundidad psicológica, resiliencia, intensidad y poder de regenerarse tras las pruebas.", ombre: "Obsesión, necesidad de control, atracción por el drama y lo extremo." },
      { maison: "IX", nom: "El sentido y los horizontes", apporte: "Búsqueda de sentido, apertura, optimismo, gusto por los viajes, los estudios y las grandes visiones.", ombre: "Dogmatismo, huida hacia adelante, teorías desconectadas de lo real." },
      { maison: "X", nom: "La vocación y el estatus", apporte: "Ambición sana, sentido de la responsabilidad, autoridad natural y capacidad de lograr algo visible.", ombre: "Ambición fría, imagen antes que ser, vida sacrificada a la carrera." },
      { maison: "XI", nom: "Los amigos y los proyectos", apporte: "Espíritu de equipo, visión social, red, ideales y gusto por construir el futuro con otros.", ombre: "Dilución en el grupo, idealismo desconectado, huida de la intimidad." },
      { maison: "XII", nom: "El interior y lo invisible", apporte: "Intuición, compasión, creatividad espiritual, vida interior rica y capacidad de retiro fecundo.", ombre: "Huida, aislamiento, confusión, sacrificio de sí, sensibilidad desbordada." },
    ],
  },
  angularite: {
    title: "Por qué algunas casas pesan más",
    intro: [
      "Antes incluso de los planetas, la estructura de las casas crea una jerarquía de fuerza. Las casas se clasifican en tres grupos, y un planeta gana o pierde potencia según el grupo en el que cae.",
    ],
    items: [
      { label: "Angulares — I, IV, VII, X", sens: "Las más potentes: tocan los ángulos de la carta. Acción directa, visible, estructurante. Un planeta aquí queda destacado." },
      { label: "Sucedentes — II, V, VIII, XI", sens: "Estabilizan y consolidan lo que lanzan las angulares. Energía de duración, de recursos y de arraigo." },
      { label: "Cadentes — III, VI, IX, XII", sens: "Más mentales y adaptativas, su acción es difusa, en segundo plano: aprendizaje, ajuste, preparación." },
    ],
  },
  exemples: {
    title: "Ejemplos de lectura",
    items: [
      {
        titre: "Stellium en la V",
        texte:
          "Tres planetas en la casa V, entre ellos Venus: un temperamento creativo y romántico, que necesita crear, gustar y brillar para sentirse vivo.",
      },
      {
        titre: "Regente del Ascendente en la X",
        texte:
          "El Ascendente Virgo tiene a Mercurio como regente, ubicado en la casa X: la vida se orienta hacia el éxito, el reconocimiento y el lugar social.",
      },
      {
        titre: "Luna y Venus en la IV",
        texte:
          "Dos planetas personales en el sector del hogar: la familia, las raíces y la intimidad están por delante de todo y nutren el equilibrio interior.",
      },
    ],
    erreursLabel: "Errores a evitar",
    erreurs: [
      "Contar solo los planetas y olvidar el Ascendente y su regente.",
      "Dar el mismo peso a un lento lejano que al Sol.",
      "Reducir a alguien a una sola casa: siempre somos una mezcla.",
      "Descuidar la angularidad, que lo cambia todo.",
      "Creer que una casa dominante es «mejor»: cada una tiene su sombra.",
      "Leer la casa sin el signo ni los planetas que contiene.",
    ],
  },
  faqDataTitle: "Preguntas frecuentes sobre la casa dominante",
  faq: [
    { q: "¿Qué es una casa dominante?", a: "Es el sector de la carta que concentra más energía — por un stellium, la presencia del Sol, la Luna, el Ascendente o su regente, o por la angularidad. Señala el área de la vida más invertida." },
    { q: "¿Cómo saber qué casa domina mi carta?", a: "Se suman las pistas: stellium, las casas del Sol, la Luna y el Ascendente, la posición del regente de la carta y la angularidad. La casa que reúne más peso domina." },
    { q: "¿Puede una casa vacía ser dominante?", a: "Sí. Si lleva el Ascendente, su regente o un ángulo importante, una casa sin planeta puede perfectamente dominar la carta." },
    { q: "¿Se pueden tener varias casas dominantes?", a: "Por supuesto. Muchas cartas tienen dos o tres casas fuertes que se reparten la energía: se habla entonces de codominancia." },
    { q: "¿Casa dominante o signo dominante: cuál cuenta más?", a: "Ambos se complementan. El signo dominante describe el «cómo» (el estilo), la casa dominante el «dónde» (el área de la vida). Se leen juntos." },
    { q: "¿Qué es un stellium?", a: "Un cúmulo de al menos tres planetas en una misma casa (o un mismo signo). Es una de las señales más claras de una casa dominante." },
  ],
  faqVisibleTitle: "Preguntas frecuentes sobre la casa dominante",
  faqVisible: [
    {
      q: "¿Qué diferencia hay entre signo dominante y casa dominante?",
      a: "El signo dominante colorea la manera de ser (el temperamento, el estilo). La casa dominante indica el terreno de juego — el área de la vida donde esa energía se despliega. Un mismo Leo dominante no vivirá igual en la casa V (creación, escena) que en la X (carrera, estatus).",
    },
    {
      q: "¿Cómo influye el Ascendente en la casa dominante?",
      a: "El Ascendente marca la casa I y designa al regente de la carta; la casa donde se encuentra ese regente se vuelve un foco de atención mayor. El Ascendente es, por tanto, una de las primeras pistas a mirar para detectar la casa dominante.",
    },
    {
      q: "¿Puede cambiar la casa dominante con el tiempo?",
      a: "La carta natal no cambia, así que la casa dominante de fondo permanece. Pero los tránsitos y las progresiones activan por turnos distintas casas: un periodo resalta el trabajo, otro la pareja o el hogar.",
    },
    {
      q: "¿Hace falta un programa para encontrar la casa dominante?",
      a: "Basta con una carta calculada. A partir de ahí, un simple conteo ponderado (stellium, Sol/Luna/Ascendente, regente, ángulos) permite detectar la casa dominante a mano, sin herramienta especializada.",
    },
  ],
  related: {
    title: "Ver también",
    items: [
      { href: "/signes-dominants", label: "Signos dominantes" },
      { href: "/astrologie-mondiale", label: "Astrología mundial" },
    ],
  },
  footer: { maisons: "Las casas", planetes: "Planetas", signes: "Signos", cuspides: "Cúspides de las casas" },
};

export const maisonsDominantesContent: Record<SeoLocale, MaisonsDominantesContent> = { fr, en, es };
