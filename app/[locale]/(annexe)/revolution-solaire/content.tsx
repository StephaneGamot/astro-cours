import { Link } from "@/i18n/navigation";
import type { ReactNode } from "react";
import type { SeoLocale } from "@/lib/seo";

/* ====================================================================
   Révolution solaire — contenu localisé (fr / en / es)
   Les clés logiques (slug, id de section, orbes/degrés, images, href,
   dates) sont identiques dans chaque langue ; seuls les textes sont
   traduits.
   ==================================================================== */

export type RsSection = {
  slug: string;
  title: string;
  why: string;
  points: string[];
  aFaire: string[];
};

export type RsOrbe = { label: string; orbe: string };
export type RsExemple = { titre: string; texte: string };
export type RsFaqCard = { q: string; a: string };
export type RsDetailsFaq = { q: ReactNode; a: ReactNode };

export type RevolutionSolaireContent = {
  meta: { title: string; description: string };
  jsonld: { headline: string; description: string; articleSection: string };
  hero: { badge: string; title: string; subtitle: string; highlights: string[]; imageAlt: string };
  defBox: { label: string; body: ReactNode };
  appIntro: ReactNode;
  navLabel: string;
  sectionsNav: { id: string; label: string }[];
  defTitle: string;
  definition: {
    resumeLabel: string;
    resume: string[];
    notLabel: string;
    ceQueCeNestPas: string[];
  };
  methodeTitle: string;
  methode: {
    reglesOrTitle: string;
    reglesOr: string[];
    checklistTitle: string;
    checklist: string[];
    orbesLabel: string;
    orbesRecommandes: RsOrbe[];
  };
  pilarsTitle: string;
  sections: RsSection[];
  sectionLabels: { points: string; aFaire: string };
  exemplesTitle: string;
  exemples: RsExemple[];
  faqCardsTitle: string;
  faq: RsFaqCard[];
  faqVisibleTitle: string;
  detailsFaq: RsDetailsFaq[];
  detailsFaqJsonLd: { name: string; text: string }[];
  footer: { cta: string; transits: string; aspects: string; planets: string };
};

/* ============================== FR ============================== */
const fr: RevolutionSolaireContent = {
  meta: {
    title: "Révolution solaire : guide complet",
    description:
      "Maîtrisez la Révolution Solaire en astrologie. Calcul, lieu de montage, maîtres du temps (profections, diviseur), et les 12 règles d'or d'interprétation.",
  },
  jsonld: {
    headline: "Révolution Solaire : Guide complet et Interprétation",
    description:
      "Maîtrisez la Révolution Solaire en astrologie. Calcul, lieu de montage, maîtres du temps (profections, diviseur), et les 12 règles d'or d'interprétation.",
    articleSection: "Astrologie",
  },
  hero: {
    badge: "Cours d’astrologie — Prévisionnel",
    title: "Révolution solaire : guide complet",
    subtitle:
      "Ton “thème anniversaire” : la météo de l’année. On ne prédit pas au hasard — on lit une dynamique annuelle avec méthode.",
    highlights: [
      "Méthode pro en 10 étapes",
      "Maison du Soleil et axes de l’année",
      "Maître de l’Ascendant RS",
      "Planètes dominantes & périodes",
      "Pièges + bonnes pratiques",
    ],
    imageAlt: "Illustration symbolique de la révolution solaire",
  },
  defBox: {
    label: "Définition",
    body: (
      <>
        La <strong>révolution solaire</strong> est le thème astral dressé au moment exact où le Soleil
        revient à sa position natale chaque année, permettant de prévoir les grandes tendances des 12
        mois à venir grâce aux <Link href="/#maisons">maisons</Link> et aux{" "}
        <Link href="/transits">transits</Link> activés.
      </>
    ),
  },
  appIntro: (
    <>
      Vous souhaitez apprendre à interpréter votre <strong>révolution solaire</strong> pour anticiper
      les événements de l'année ? Beaucoup d'astrologues débutants peinent à distinguer ce thème
      annuel des transits classiques. Ce cours vous dévoile la méthode complète : calcul, lieu,
      piliers de lecture et exemples concrets pour décrypter votre RS comme un professionnel.
    </>
  ),
  navLabel: "Sommaire",
  sectionsNav: [
    { id: "definition", label: "Définition" },
    { id: "origine", label: "Origine & Calcul" },
    { id: "lieu", label: "Où la calculer ?" },
    { id: "temps", label: "Maîtres du temps" },
    { id: "methode", label: "Méthode pro" },
    { id: "piliers", label: "Piliers de lecture" },
    { id: "exemples", label: "Exemples" },
    { id: "faq", label: "FAQ" },
  ],
  defTitle: "Qu'est-ce qu'une révolution solaire en astrologie ?",
  definition: {
    resumeLabel: "Résumé",
    resume: [
      "La Révolution Solaire (RS) est un thème calculé au moment exact où le Soleil revient au même degré/minute que dans ton thème natal.",
      "Elle décrit la dynamique de l’année : priorités, ambiance, axes de vie, opportunités et points de vigilance.",
      "Elle se lit toujours en lien avec le thème natal et, idéalement, avec les transits/progressions.",
    ],
    notLabel: "Ce que ce n’est pas",
    ceQueCeNestPas: [
      "Un destin figé : la RS montre des tendances, pas une fatalité.",
      "Un thème “meilleur” que le natal : le natal reste la base.",
      "Un horoscope général : la RS est individuelle.",
    ],
  },
  methodeTitle: "Comment interpréter sa révolution solaire : méthode pro",
  methode: {
    reglesOrTitle: "Règles d’or",
    reglesOr: [
      "1) Toujours partir du thème natal (maturité, enjeux, cycles).",
      "2) Regarder l’Ascendant RS + son maître : ton style d’année.",
      "3) Regarder la maison du Soleil RS : ton centre de gravité.",
      "4) Prioriser les angles (ASC/DSC/MC/FC) : ce qui devient concret.",
      "5) Étudier la Lune RS : besoins, humeur, sécurité.",
      "6) Repérer les planètes dominantes (proches des angles, stelliums).",
      "7) Lire les aspects majeurs RS (Soleil/Lune/Maître ASC).",
      "8) Regarder les maisons activées (1/4/7/10 + celle du Soleil).",
      "9) Croiser RS ↔ Natal : sur quoi ça “tombe” chez toi.",
      "10) Finir par une synthèse : 3 thèmes majeurs + 3 conseils pratiques.",
    ],
    checklistTitle: "Checklist",
    checklist: [
      "Maison du Soleil RS = thème central de l’année",
      "Maître de l’ASC RS : où va l’énergie (maison) + comment (aspects)",
      "Lune RS : humeur + sécurité + besoins relationnels",
      "Planètes sur angles : événements concrets",
      "Stellium : zone “surchargée” (priorité)",
      "Saturne : responsabilités / structure",
      "Jupiter : croissance / opportunités",
      "Uranus : changements / liberté",
      "Neptune : flou / inspiration",
      "Pluton : intensité / transformation",
    ],
    orbesLabel: "Orbes recommandés",
    orbesRecommandes: [
      { label: "Planètes sur angles (ASC/DSC/MC/FC)", orbe: "jusqu’à 3° (4° si très parlant)" },
      { label: "Soleil/Lune", orbe: "4° à 5°" },
      { label: "Planètes personnelles", orbe: "3° à 4°" },
      { label: "Sociales / Transpersonnelles", orbe: "2° à 3°" },
    ],
  },
  pilarsTitle: "Les piliers de lecture d'une révolution solaire annuelle",
  sections: [
    {
      slug: "ascendant",
      title: "Ascendant RS & maître d’ASC",
      why:
        "L’Ascendant RS montre le ton de l’année. Le maître d’ASC dit où l’énergie va se concentrer et comment tu réagis.",
      points: [
        "ASC RS = attitude, style, manière d’aborder l’année.",
        "Maître d’ASC en maison RS = domaine principal activé.",
        "Maître d’ASC aspecté = facilité/défi + style d’intégration.",
        "Maître d’ASC sur un angle = année très “visible” et concrète.",
      ],
      aFaire: [
        "Identifier la maison du maître d’ASC (domaine n°1).",
        "Lire ses aspects principaux (2 ou 3 max).",
        "Comparer au natal : la RS “appuie” quel secteur chez toi ?",
      ],
    },
    {
      slug: "soleil",
      title: "Maison du Soleil RS",
      why:
        "Le Soleil RS indique le centre de gravité : ce que tu dois développer, assumer, rendre vivant.",
      points: [
        "Le domaine de la maison du Soleil devient prioritaire.",
        "Aspects au Soleil = facilités / tensions qui structurent l’année.",
        "Soleil proche d’un angle : année charnière.",
      ],
      aFaire: [
        "Noter la maison du Soleil RS + le signe (style).",
        "Chercher les liens avec ton natal (maison natal activée).",
      ],
    },
    {
      slug: "lune",
      title: "La Lune RS",
      why: "La Lune RS parle du vécu : émotions, sécurité, besoins, rythme de vie.",
      points: [
        "Maison de la Lune = ce qui touche l’intime et le quotidien.",
        "Aspects Lune = climat émotionnel (apaisé ou réactif).",
        "Lune en lien à Saturne/Neptune/Pluton : maturité, flou ou intensité.",
      ],
      aFaire: [
        "Définir ton besoin lunaire de l’année (sécurité, affection, liberté…).",
        "Mettre en place 1 rituel hebdo de régulation (sport, repos, écriture…).",
      ],
    },
    {
      slug: "angles",
      title: "Angles & planètes dominantes",
      why:
        "Les angles rendent l’année concrète. Les planètes proches des angles deviennent “dominantes”.",
      points: [
        "Planète sur MC : carrière, direction, visibilité.",
        "Sur FC : famille, maison, racines, intimité.",
        "Sur DSC : couple/associations/contrats.",
        "Sur ASC : identité, corps, santé, style de vie.",
      ],
      aFaire: [
        "Lister les planètes à moins de 3° d’un angle.",
        "Choisir 1 à 2 dominantes max pour ton “fil rouge”.",
      ],
    },
    {
      slug: "croisements",
      title: "Croiser RS ↔ Natal",
      why:
        "La RS seule peut être vague. Le croisement montre “où ça tombe” réellement chez toi.",
      points: [
        "Superposer les maisons : RS maison X tombe dans quel secteur natal ?",
        "Aspects RS aux planètes natales : déclencheurs et thèmes.",
        "Angles RS sur planètes natales : année décisive.",
      ],
      aFaire: [
        "Comparer maison du Soleil RS avec ton natal.",
        "Comparer maître d’ASC RS avec ton natal (aspects/maison).",
      ],
    },
  ],
  sectionLabels: { points: "Points clés", aFaire: "À faire" },
  exemplesTitle: "Exemples d'interprétation de révolution solaire",
  exemples: [
    {
      titre: "Année “professionnelle”",
      texte:
        "Soleil RS en maison 10, planète dominante sur MC, aspects structurants à Saturne : responsabilités, visibilité, choix de direction. La clé : cadrer et prioriser.",
    },
    {
      titre: "Année “relationnelle”",
      texte:
        "ASC RS en Balance, planètes en maison 7, maître d’ASC en 7 : couple/associations au centre. La clé : contrats clairs, communication (Mercure) + limites (Saturne).",
    },
    {
      titre: "Année “intérieure / transformation”",
      texte:
        "Dominante Pluton/8 ou FC chargé : tri, fin d’un cycle, travail émotionnel profond. La clé : sobriété, thérapie/écriture, et simplification.",
    },
  ],
  faqCardsTitle: "Questions fréquentes sur la révolution solaire",
  faq: [
    {
      q: "La RS commence le jour de mon anniversaire ?",
      a: "Elle commence au moment exact du retour solaire (qui peut être avant/après l’heure de naissance). Dans la pratique : autour de l’anniversaire.",
    },
    {
      q: "Faut-il calculer la RS au lieu où je vis ou où je suis né ?",
      a: "En général, on calcule la RS pour le lieu où tu te trouves au moment de ton anniversaire (ou là où tu passes le retour solaire). Cela modifie les maisons, donc l’accent de l’année.",
    },
    {
      q: "Comment trouver la “planète maîtresse de l’année” ?",
      a: "Souvent : le maître d’ASC RS + les planètes dominantes (sur angles). On évite d’en avoir 5 : on choisit 1 à 2 piliers.",
    },
  ],
  faqVisibleTitle: "Questions fréquentes sur la révolution solaire",
  detailsFaq: [
    {
      q: "La révolution solaire commence-t-elle le jour de mon anniversaire ?",
      a: (
        <>
          La <strong>révolution solaire</strong> commence au moment exact du retour solaire, qui peut
          survenir quelques heures avant ou après l'heure de naissance. En pratique, cela se situe
          autour de votre anniversaire. Ce retour marque le début de votre année astrologique
          personnelle.
        </>
      ),
    },
    {
      q: "Faut-il calculer la RS au lieu de résidence ou au lieu de naissance ?",
      a: (
        <>
          On calcule généralement la <strong>révolution solaire</strong> pour le lieu où vous vous
          trouvez au moment de votre anniversaire. Cela modifie les{" "}
          <Link href="/#maisons">maisons astrologiques</Link>, donc l'accent thématique de l'année.
          Certains astrologues voyagent volontairement pour optimiser leur RS.
        </>
      ),
    },
    {
      q: "Comment trouver la planète maîtresse de l'année en révolution solaire ?",
      a: (
        <>
          La <strong>planète maîtresse de l'année</strong> est souvent le maître de l'Ascendant de la
          RS, combiné aux planètes dominantes placées sur les angles. L'idéal est de se concentrer sur
          1 à 2 piliers plutôt que de disperser l'analyse sur 5 planètes.
        </>
      ),
    },
    {
      q: "Quelle est la différence entre révolution solaire et transits ?",
      a: (
        <>
          Les <Link href="/transits">transits</Link> décrivent les mouvements planétaires actuels par
          rapport à votre thème natal et sont précis dans le temps. La{" "}
          <strong>révolution solaire</strong> offre une vue d'ensemble des tendances de l'année
          entière. Les deux techniques se complètent : la RS donne le cadre, les transits précisent le
          calendrier.
        </>
      ),
    },
  ],
  detailsFaqJsonLd: [
    {
      name: "La révolution solaire commence-t-elle le jour de mon anniversaire ?",
      text: "La révolution solaire commence au moment exact du retour solaire, qui peut survenir quelques heures avant ou après l'heure de naissance. En pratique, cela se situe autour de votre anniversaire. Ce retour marque le début de votre année astrologique personnelle.",
    },
    {
      name: "Faut-il calculer la RS au lieu de résidence ou au lieu de naissance ?",
      text: "On calcule généralement la révolution solaire pour le lieu où vous vous trouvez au moment de votre anniversaire. Cela modifie les maisons astrologiques, donc l'accent thématique de l'année. Certains astrologues voyagent volontairement pour optimiser leur RS.",
    },
    {
      name: "Comment trouver la planète maîtresse de l'année en révolution solaire ?",
      text: "La planète maîtresse de l'année est souvent le maître de l'Ascendant de la RS, combiné aux planètes dominantes placées sur les angles. L'idéal est de se concentrer sur 1 à 2 piliers plutôt que de disperser l'analyse sur 5 planètes.",
    },
    {
      name: "Quelle est la différence entre révolution solaire et transits ?",
      text: "Les transits décrivent les mouvements planétaires actuels par rapport à votre thème natal et sont précis dans le temps. La révolution solaire offre une vue d'ensemble des tendances de l'année entière. Les deux techniques se complètent : la RS donne le cadre, les transits précisent le calendrier.",
    },
  ],
  footer: { cta: "Explorer les transits", transits: "Transits", aspects: "Aspects", planets: "Planètes" },
};

/* ============================== EN ============================== */
const en: RevolutionSolaireContent = {
  meta: {
    title: "Solar Return: Complete Guide and Interpretation",
    description:
      "Master the Solar Return in astrology. Calculation, relocation, time-lords (profections, time-lord ruler), and the 12 golden rules of interpretation.",
  },
  jsonld: {
    headline: "Solar Return: Complete Guide and Interpretation",
    description:
      "Master the Solar Return in astrology. Calculation, relocation, time-lords (profections, time-lord ruler), and the 12 golden rules of interpretation.",
    articleSection: "Astrology",
  },
  hero: {
    badge: "Astrology course — Forecasting",
    title: "Solar return: the complete guide",
    subtitle:
      "Your “birthday chart”: the weather of the year. We don't predict at random — we read an annual dynamic with method.",
    highlights: [
      "Pro method in 10 steps",
      "House of the Sun and axes of the year",
      "Ruler of the Solar Return Ascendant",
      "Dominant planets & periods",
      "Pitfalls + best practices",
    ],
    imageAlt: "Symbolic illustration of the solar return",
  },
  defBox: {
    label: "Definition",
    body: (
      <>
        The <strong>solar return</strong> is the birth chart cast at the exact moment when the Sun
        returns to its natal position each year, allowing you to forecast the major trends of the next
        12 months thanks to the activated <Link href="/#maisons">houses</Link> and{" "}
        <Link href="/transits">transits</Link>.
      </>
    ),
  },
  appIntro: (
    <>
      Want to learn how to interpret your <strong>solar return</strong> to anticipate the year's
      events? Many beginner astrologers struggle to distinguish this annual chart from ordinary
      transits. This course reveals the complete method: calculation, location, pillars of reading and
      concrete examples to decode your SR like a professional.
    </>
  ),
  navLabel: "Contents",
  sectionsNav: [
    { id: "definition", label: "Definition" },
    { id: "origine", label: "Origin & Calculation" },
    { id: "lieu", label: "Where to calculate it?" },
    { id: "temps", label: "Time-lords" },
    { id: "methode", label: "Pro method" },
    { id: "piliers", label: "Pillars of reading" },
    { id: "exemples", label: "Examples" },
    { id: "faq", label: "FAQ" },
  ],
  defTitle: "What is a solar return in astrology?",
  definition: {
    resumeLabel: "Summary",
    resume: [
      "The Solar Return (SR) is a chart calculated at the exact moment when the Sun returns to the same degree/minute as in your natal chart.",
      "It describes the dynamic of the year: priorities, mood, life axes, opportunities and points to watch.",
      "It is always read in connection with the natal chart and, ideally, with transits/progressions.",
    ],
    notLabel: "What it is not",
    ceQueCeNestPas: [
      "A fixed fate: the SR shows trends, not an inevitability.",
      "A chart “better” than the natal: the natal remains the foundation.",
      "A general horoscope: the SR is individual.",
    ],
  },
  methodeTitle: "How to interpret your solar return: the pro method",
  methode: {
    reglesOrTitle: "Golden rules",
    reglesOr: [
      "1) Always start from the natal chart (maturity, stakes, cycles).",
      "2) Look at the SR Ascendant + its ruler: your style of year.",
      "3) Look at the house of the SR Sun: your centre of gravity.",
      "4) Prioritise the angles (ASC/DSC/MC/IC): what becomes concrete.",
      "5) Study the SR Moon: needs, mood, security.",
      "6) Spot the dominant planets (close to the angles, stelliums).",
      "7) Read the major SR aspects (Sun/Moon/ASC ruler).",
      "8) Look at the activated houses (1/4/7/10 + the Sun's house).",
      "9) Cross-reference SR ↔ Natal: where it “lands” for you.",
      "10) Finish with a synthesis: 3 major themes + 3 practical tips.",
    ],
    checklistTitle: "Checklist",
    checklist: [
      "House of the SR Sun = central theme of the year",
      "Ruler of the SR ASC: where the energy goes (house) + how (aspects)",
      "SR Moon: mood + security + relational needs",
      "Planets on angles: concrete events",
      "Stellium: “overloaded” zone (priority)",
      "Saturn: responsibilities / structure",
      "Jupiter: growth / opportunities",
      "Uranus: changes / freedom",
      "Neptune: haze / inspiration",
      "Pluto: intensity / transformation",
    ],
    orbesLabel: "Recommended orbs",
    orbesRecommandes: [
      { label: "Planets on angles (ASC/DSC/MC/IC)", orbe: "up to 3° (4° if very telling)" },
      { label: "Sun/Moon", orbe: "4° to 5°" },
      { label: "Personal planets", orbe: "3° to 4°" },
      { label: "Social / Transpersonal", orbe: "2° to 3°" },
    ],
  },
  pilarsTitle: "The pillars of reading an annual solar return",
  sections: [
    {
      slug: "ascendant",
      title: "SR Ascendant & ASC ruler",
      why:
        "The SR Ascendant shows the tone of the year. The ASC ruler tells where the energy will concentrate and how you react.",
      points: [
        "SR ASC = attitude, style, way of approaching the year.",
        "ASC ruler in an SR house = main activated area.",
        "ASC ruler aspected = ease/challenge + style of integration.",
        "ASC ruler on an angle = a very “visible” and concrete year.",
      ],
      aFaire: [
        "Identify the house of the ASC ruler (area no. 1).",
        "Read its main aspects (2 or 3 max).",
        "Compare with the natal: which sector does the SR “press on” for you?",
      ],
    },
    {
      slug: "soleil",
      title: "House of the SR Sun",
      why:
        "The SR Sun indicates the centre of gravity: what you must develop, take on, bring to life.",
      points: [
        "The area of the Sun's house becomes the priority.",
        "Aspects to the Sun = ease / tensions that structure the year.",
        "Sun close to an angle: a pivotal year.",
      ],
      aFaire: [
        "Note the house of the SR Sun + the sign (style).",
        "Look for the links with your natal (activated natal house).",
      ],
    },
    {
      slug: "lune",
      title: "The SR Moon",
      why: "The SR Moon speaks of lived experience: emotions, security, needs, pace of life.",
      points: [
        "House of the Moon = what touches the intimate and the everyday.",
        "Moon aspects = emotional climate (soothed or reactive).",
        "Moon linked to Saturn/Neptune/Pluto: maturity, haze or intensity.",
      ],
      aFaire: [
        "Define your lunar need for the year (security, affection, freedom…).",
        "Set up 1 weekly regulating ritual (sport, rest, writing…).",
      ],
    },
    {
      slug: "angles",
      title: "Angles & dominant planets",
      why:
        "The angles make the year concrete. Planets close to the angles become “dominant”.",
      points: [
        "Planet on MC: career, direction, visibility.",
        "On IC: family, home, roots, intimacy.",
        "On DSC: partnership/associations/contracts.",
        "On ASC: identity, body, health, lifestyle.",
      ],
      aFaire: [
        "List the planets within 3° of an angle.",
        "Choose 1 to 2 dominants max for your “thread”.",
      ],
    },
    {
      slug: "croisements",
      title: "Cross-referencing SR ↔ Natal",
      why:
        "The SR alone can be vague. Cross-referencing shows “where it actually lands” for you.",
      points: [
        "Overlay the houses: SR house X falls into which natal sector?",
        "SR aspects to natal planets: triggers and themes.",
        "SR angles on natal planets: a decisive year.",
      ],
      aFaire: [
        "Compare the house of the SR Sun with your natal.",
        "Compare the SR ASC ruler with your natal (aspects/house).",
      ],
    },
  ],
  sectionLabels: { points: "Key points", aFaire: "To do" },
  exemplesTitle: "Examples of solar return interpretation",
  exemples: [
    {
      titre: "A “professional” year",
      texte:
        "SR Sun in house 10, dominant planet on MC, structuring aspects to Saturn: responsibilities, visibility, choices of direction. The key: frame and prioritise.",
    },
    {
      titre: "A “relational” year",
      texte:
        "SR ASC in Libra, planets in house 7, ASC ruler in 7: partnership/associations at the centre. The key: clear contracts, communication (Mercury) + boundaries (Saturn).",
    },
    {
      titre: "An “inner / transformation” year",
      texte:
        "Pluto/8 dominant or a loaded IC: sorting out, end of a cycle, deep emotional work. The key: sobriety, therapy/writing, and simplification.",
    },
  ],
  faqCardsTitle: "Frequently asked questions about the solar return",
  faq: [
    {
      q: "Does the SR begin on my birthday?",
      a: "It begins at the exact moment of the solar return (which can be before/after the time of birth). In practice: around the birthday.",
    },
    {
      q: "Should I calculate the SR where I live or where I was born?",
      a: "Generally, you calculate the SR for the place where you are at the moment of your birthday (or where you spend the solar return). This changes the houses, and therefore the emphasis of the year.",
    },
    {
      q: "How do you find the “ruling planet of the year”?",
      a: "Often: the SR ASC ruler + the dominant planets (on angles). Avoid having 5 of them: choose 1 to 2 pillars.",
    },
  ],
  faqVisibleTitle: "Frequently asked questions about the solar return",
  detailsFaq: [
    {
      q: "Does the solar return begin on my birthday?",
      a: (
        <>
          The <strong>solar return</strong> begins at the exact moment of the solar return, which can
          occur a few hours before or after the time of birth. In practice, it falls around your
          birthday. This return marks the start of your personal astrological year.
        </>
      ),
    },
    {
      q: "Should the SR be calculated at your place of residence or place of birth?",
      a: (
        <>
          The <strong>solar return</strong> is generally calculated for the place where you are at the
          moment of your birthday. This changes the{" "}
          <Link href="/#maisons">astrological houses</Link>, and therefore the thematic emphasis of
          the year. Some astrologers deliberately travel to optimise their SR.
        </>
      ),
    },
    {
      q: "How do you find the ruling planet of the year in a solar return?",
      a: (
        <>
          The <strong>ruling planet of the year</strong> is often the ruler of the SR Ascendant,
          combined with the dominant planets placed on the angles. The ideal is to focus on 1 to 2
          pillars rather than scattering the analysis across 5 planets.
        </>
      ),
    },
    {
      q: "What is the difference between a solar return and transits?",
      a: (
        <>
          <Link href="/transits">Transits</Link> describe the current planetary movements relative to
          your natal chart and are precise in time. The <strong>solar return</strong> offers an
          overview of the trends for the whole year. The two techniques complement each other: the SR
          gives the framework, the transits pin down the calendar.
        </>
      ),
    },
  ],
  detailsFaqJsonLd: [
    {
      name: "Does the solar return begin on my birthday?",
      text: "The solar return begins at the exact moment of the solar return, which can occur a few hours before or after the time of birth. In practice, it falls around your birthday. This return marks the start of your personal astrological year.",
    },
    {
      name: "Should the SR be calculated at your place of residence or place of birth?",
      text: "The solar return is generally calculated for the place where you are at the moment of your birthday. This changes the astrological houses, and therefore the thematic emphasis of the year. Some astrologers deliberately travel to optimise their SR.",
    },
    {
      name: "How do you find the ruling planet of the year in a solar return?",
      text: "The ruling planet of the year is often the ruler of the SR Ascendant, combined with the dominant planets placed on the angles. The ideal is to focus on 1 to 2 pillars rather than scattering the analysis across 5 planets.",
    },
    {
      name: "What is the difference between a solar return and transits?",
      text: "Transits describe the current planetary movements relative to your natal chart and are precise in time. The solar return offers an overview of the trends for the whole year. The two techniques complement each other: the SR gives the framework, the transits pin down the calendar.",
    },
  ],
  footer: { cta: "Explore transits", transits: "Transits", aspects: "Aspects", planets: "Planets" },
};

/* ============================== ES ============================== */
const es: RevolutionSolaireContent = {
  meta: {
    title: "Revolución Solar: Guía completa e Interpretación",
    description:
      "Domina la Revolución Solar en astrología: cálculo, lugar de levantamiento, señores del tiempo y las 12 reglas de oro de interpretación.",
  },
  jsonld: {
    headline: "Revolución Solar: Guía completa e Interpretación",
    description:
      "Domina la Revolución Solar en astrología. Cálculo, lugar de levantamiento, señores del tiempo (profecciones, regente del tiempo) y las 12 reglas de oro de interpretación.",
    articleSection: "Astrología",
  },
  hero: {
    badge: "Curso de astrología — Predictivo",
    title: "Revolución solar: guía completa",
    subtitle:
      "Tu “carta de cumpleaños”: la previsión del año. No predecimos al azar — leemos una dinámica anual con método.",
    highlights: [
      "Método pro en 10 pasos",
      "Casa del Sol y ejes del año",
      "Regente del Ascendente de la RS",
      "Planetas dominantes y periodos",
      "Trampas + buenas prácticas",
    ],
    imageAlt: "Ilustración simbólica de la revolución solar",
  },
  defBox: {
    label: "Definición",
    body: (
      <>
        La <strong>revolución solar</strong> es la carta astral levantada en el momento exacto en que
        el Sol vuelve a su posición natal cada año, lo que permite prever las grandes tendencias de
        los 12 meses siguientes gracias a las <Link href="/#maisons">casas</Link> y a los{" "}
        <Link href="/transits">tránsitos</Link> activados.
      </>
    ),
  },
  appIntro: (
    <>
      ¿Quieres aprender a interpretar tu <strong>revolución solar</strong> para anticipar los
      acontecimientos del año? Muchos astrólogos principiantes tienen dificultades para distinguir
      esta carta anual de los tránsitos clásicos. Este curso te revela el método completo: cálculo,
      lugar, pilares de lectura y ejemplos concretos para descifrar tu RS como un profesional.
    </>
  ),
  navLabel: "Índice",
  sectionsNav: [
    { id: "definition", label: "Definición" },
    { id: "origine", label: "Origen & Cálculo" },
    { id: "lieu", label: "¿Dónde calcularla?" },
    { id: "temps", label: "Señores del tiempo" },
    { id: "methode", label: "Método pro" },
    { id: "piliers", label: "Pilares de lectura" },
    { id: "exemples", label: "Ejemplos" },
    { id: "faq", label: "FAQ" },
  ],
  defTitle: "¿Qué es una revolución solar en astrología?",
  definition: {
    resumeLabel: "Resumen",
    resume: [
      "La Revolución Solar (RS) es una carta calculada en el momento exacto en que el Sol vuelve al mismo grado/minuto que en tu carta natal.",
      "Describe la dinámica del año: prioridades, ambiente, ejes de vida, oportunidades y puntos de atención.",
      "Se lee siempre en relación con la carta natal e, idealmente, con los tránsitos/progresiones.",
    ],
    notLabel: "Lo que no es",
    ceQueCeNestPas: [
      "Un destino fijo: la RS muestra tendencias, no una fatalidad.",
      "Una carta “mejor” que la natal: la natal sigue siendo la base.",
      "Un horóscopo general: la RS es individual.",
    ],
  },
  methodeTitle: "Cómo interpretar tu revolución solar: método pro",
  methode: {
    reglesOrTitle: "Reglas de oro",
    reglesOr: [
      "1) Partir siempre de la carta natal (madurez, retos, ciclos).",
      "2) Mirar el Ascendente de la RS + su regente: tu estilo de año.",
      "3) Mirar la casa del Sol de la RS: tu centro de gravedad.",
      "4) Priorizar los ángulos (ASC/DSC/MC/FC): lo que se vuelve concreto.",
      "5) Estudiar la Luna de la RS: necesidades, humor, seguridad.",
      "6) Detectar los planetas dominantes (cerca de los ángulos, stelliums).",
      "7) Leer los aspectos mayores de la RS (Sol/Luna/regente del ASC).",
      "8) Mirar las casas activadas (1/4/7/10 + la del Sol).",
      "9) Cruzar RS ↔ Natal: sobre qué “cae” en ti.",
      "10) Terminar con una síntesis: 3 temas mayores + 3 consejos prácticos.",
    ],
    checklistTitle: "Checklist",
    checklist: [
      "Casa del Sol de la RS = tema central del año",
      "Regente del ASC de la RS: adónde va la energía (casa) + cómo (aspectos)",
      "Luna de la RS: humor + seguridad + necesidades relacionales",
      "Planetas en ángulos: acontecimientos concretos",
      "Stellium: zona “sobrecargada” (prioridad)",
      "Saturno: responsabilidades / estructura",
      "Júpiter: crecimiento / oportunidades",
      "Urano: cambios / libertad",
      "Neptuno: difuminado / inspiración",
      "Plutón: intensidad / transformación",
    ],
    orbesLabel: "Orbes recomendados",
    orbesRecommandes: [
      { label: "Planetas en ángulos (ASC/DSC/MC/FC)", orbe: "hasta 3° (4° si es muy elocuente)" },
      { label: "Sol/Luna", orbe: "4° a 5°" },
      { label: "Planetas personales", orbe: "3° a 4°" },
      { label: "Sociales / Transpersonales", orbe: "2° a 3°" },
    ],
  },
  pilarsTitle: "Los pilares de lectura de una revolución solar anual",
  sections: [
    {
      slug: "ascendant",
      title: "Ascendente de la RS & regente del ASC",
      why:
        "El Ascendente de la RS muestra el tono del año. El regente del ASC dice dónde se concentrará la energía y cómo reaccionas.",
      points: [
        "ASC de la RS = actitud, estilo, manera de abordar el año.",
        "Regente del ASC en casa de la RS = ámbito principal activado.",
        "Regente del ASC aspectado = facilidad/desafío + estilo de integración.",
        "Regente del ASC en un ángulo = año muy “visible” y concreto.",
      ],
      aFaire: [
        "Identificar la casa del regente del ASC (ámbito n.º 1).",
        "Leer sus aspectos principales (2 o 3 como máximo).",
        "Comparar con la natal: ¿qué sector “refuerza” la RS en ti?",
      ],
    },
    {
      slug: "soleil",
      title: "Casa del Sol de la RS",
      why:
        "El Sol de la RS indica el centro de gravedad: lo que debes desarrollar, asumir, dar vida.",
      points: [
        "El ámbito de la casa del Sol se vuelve prioritario.",
        "Aspectos al Sol = facilidades / tensiones que estructuran el año.",
        "Sol cerca de un ángulo: año bisagra.",
      ],
      aFaire: [
        "Anotar la casa del Sol de la RS + el signo (estilo).",
        "Buscar los vínculos con tu natal (casa natal activada).",
      ],
    },
    {
      slug: "lune",
      title: "La Luna de la RS",
      why: "La Luna de la RS habla de lo vivido: emociones, seguridad, necesidades, ritmo de vida.",
      points: [
        "Casa de la Luna = lo que toca lo íntimo y lo cotidiano.",
        "Aspectos de la Luna = clima emocional (apaciguado o reactivo).",
        "Luna en relación con Saturno/Neptuno/Plutón: madurez, difuminado o intensidad.",
      ],
      aFaire: [
        "Definir tu necesidad lunar del año (seguridad, afecto, libertad…).",
        "Establecer 1 ritual semanal de regulación (deporte, descanso, escritura…).",
      ],
    },
    {
      slug: "angles",
      title: "Ángulos & planetas dominantes",
      why:
        "Los ángulos hacen el año concreto. Los planetas cercanos a los ángulos se vuelven “dominantes”.",
      points: [
        "Planeta en el MC: carrera, dirección, visibilidad.",
        "En el FC: familia, hogar, raíces, intimidad.",
        "En el DSC: pareja/asociaciones/contratos.",
        "En el ASC: identidad, cuerpo, salud, estilo de vida.",
      ],
      aFaire: [
        "Listar los planetas a menos de 3° de un ángulo.",
        "Elegir 1 o 2 dominantes como máximo para tu “hilo conductor”.",
      ],
    },
    {
      slug: "croisements",
      title: "Cruzar RS ↔ Natal",
      why:
        "La RS sola puede ser vaga. El cruce muestra “dónde cae” realmente en ti.",
      points: [
        "Superponer las casas: la casa X de la RS, ¿en qué sector natal cae?",
        "Aspectos de la RS a los planetas natales: detonantes y temas.",
        "Ángulos de la RS sobre planetas natales: año decisivo.",
      ],
      aFaire: [
        "Comparar la casa del Sol de la RS con tu natal.",
        "Comparar el regente del ASC de la RS con tu natal (aspectos/casa).",
      ],
    },
  ],
  sectionLabels: { points: "Puntos clave", aFaire: "Por hacer" },
  exemplesTitle: "Ejemplos de interpretación de revolución solar",
  exemples: [
    {
      titre: "Año “profesional”",
      texte:
        "Sol de la RS en casa 10, planeta dominante en el MC, aspectos estructurantes a Saturno: responsabilidades, visibilidad, elecciones de dirección. La clave: encuadrar y priorizar.",
    },
    {
      titre: "Año “relacional”",
      texte:
        "ASC de la RS en Libra, planetas en casa 7, regente del ASC en 7: pareja/asociaciones en el centro. La clave: contratos claros, comunicación (Mercurio) + límites (Saturno).",
    },
    {
      titre: "Año “interior / transformación”",
      texte:
        "Dominante Plutón/8 o FC cargado: depuración, fin de un ciclo, trabajo emocional profundo. La clave: sobriedad, terapia/escritura y simplificación.",
    },
  ],
  faqCardsTitle: "Preguntas frecuentes sobre la revolución solar",
  faq: [
    {
      q: "¿La RS empieza el día de mi cumpleaños?",
      a: "Empieza en el momento exacto del retorno solar (que puede ser antes/después de la hora de nacimiento). En la práctica: en torno al cumpleaños.",
    },
    {
      q: "¿Hay que calcular la RS en el lugar donde vivo o donde nací?",
      a: "En general, se calcula la RS para el lugar donde te encuentras en el momento de tu cumpleaños (o donde pasas el retorno solar). Esto modifica las casas, y por tanto el acento del año.",
    },
    {
      q: "¿Cómo encontrar el “planeta regente del año”?",
      a: "A menudo: el regente del ASC de la RS + los planetas dominantes (en ángulos). Conviene evitar tener 5: se eligen 1 o 2 pilares.",
    },
  ],
  faqVisibleTitle: "Preguntas frecuentes sobre la revolución solar",
  detailsFaq: [
    {
      q: "¿La revolución solar empieza el día de mi cumpleaños?",
      a: (
        <>
          La <strong>revolución solar</strong> empieza en el momento exacto del retorno solar, que
          puede producirse unas horas antes o después de la hora de nacimiento. En la práctica, se
          sitúa en torno a tu cumpleaños. Este retorno marca el inicio de tu año astrológico personal.
        </>
      ),
    },
    {
      q: "¿Hay que calcular la RS en el lugar de residencia o en el lugar de nacimiento?",
      a: (
        <>
          Generalmente se calcula la <strong>revolución solar</strong> para el lugar donde te
          encuentras en el momento de tu cumpleaños. Esto modifica las{" "}
          <Link href="/#maisons">casas astrológicas</Link>, y por tanto el acento temático del año.
          Algunos astrólogos viajan deliberadamente para optimizar su RS.
        </>
      ),
    },
    {
      q: "¿Cómo encontrar el planeta regente del año en revolución solar?",
      a: (
        <>
          El <strong>planeta regente del año</strong> es a menudo el regente del Ascendente de la RS,
          combinado con los planetas dominantes situados en los ángulos. Lo ideal es concentrarse en 1
          o 2 pilares en lugar de dispersar el análisis en 5 planetas.
        </>
      ),
    },
    {
      q: "¿Cuál es la diferencia entre revolución solar y tránsitos?",
      a: (
        <>
          Los <Link href="/transits">tránsitos</Link> describen los movimientos planetarios actuales
          respecto a tu carta natal y son precisos en el tiempo. La{" "}
          <strong>revolución solar</strong> ofrece una visión de conjunto de las tendencias de todo el
          año. Ambas técnicas se complementan: la RS da el marco, los tránsitos precisan el calendario.
        </>
      ),
    },
  ],
  detailsFaqJsonLd: [
    {
      name: "¿La revolución solar empieza el día de mi cumpleaños?",
      text: "La revolución solar empieza en el momento exacto del retorno solar, que puede producirse unas horas antes o después de la hora de nacimiento. En la práctica, se sitúa en torno a tu cumpleaños. Este retorno marca el inicio de tu año astrológico personal.",
    },
    {
      name: "¿Hay que calcular la RS en el lugar de residencia o en el lugar de nacimiento?",
      text: "Generalmente se calcula la revolución solar para el lugar donde te encuentras en el momento de tu cumpleaños. Esto modifica las casas astrológicas, y por tanto el acento temático del año. Algunos astrólogos viajan deliberadamente para optimizar su RS.",
    },
    {
      name: "¿Cómo encontrar el planeta regente del año en revolución solar?",
      text: "El planeta regente del año es a menudo el regente del Ascendente de la RS, combinado con los planetas dominantes situados en los ángulos. Lo ideal es concentrarse en 1 o 2 pilares en lugar de dispersar el análisis en 5 planetas.",
    },
    {
      name: "¿Cuál es la diferencia entre revolución solar y tránsitos?",
      text: "Los tránsitos describen los movimientos planetarios actuales respecto a tu carta natal y son precisos en el tiempo. La revolución solar ofrece una visión de conjunto de las tendencias de todo el año. Ambas técnicas se complementan: la RS da el marco, los tránsitos precisan el calendario.",
    },
  ],
  footer: { cta: "Explorar los tránsitos", transits: "Tránsitos", aspects: "Aspectos", planets: "Planetas" },
};

export const revolutionSolaireContent: Record<SeoLocale, RevolutionSolaireContent> = { fr, en, es };
