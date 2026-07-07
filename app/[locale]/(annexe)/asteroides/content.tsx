import { Link } from "@/i18n/navigation";
import type { ReactNode } from "react";
import type { SeoLocale } from "@/lib/seo";

/* ====================================================================
   Astéroïdes — contenu localisé (fr / en / es)
   Les clés logiques (slug, kind) sont identiques dans chaque langue ;
   seuls les textes sont traduits.
   ==================================================================== */

export type AccentKind = "earth" | "mind" | "bond" | "flame" | "wound" | "method";

export type Asteroid = {
  slug: "ceres" | "pallas" | "juno" | "vesta" | "chiron";
  name: string;
  badge: string;
  kind: AccentKind;
  keywords: string[];
  core: string;
  sign: string[];
  house: string[];
  aspects: string[];
  pitfalls: string[];
};

export type AsteroidesContent = {
  meta: { title: string; description: string };
  jsonld: { headline: string; description: string; articleSection: string };
  sections: { id: string; label: string }[];
  hero: {
    eyebrow: string;
    h1: string;
    intro: ReactNode;
    tags: string[];
    tocLabel: string;
    heroImageAlt: string;
  };
  defBox: { label: string; body: ReactNode };
  appIntro: ReactNode;
  illustrationAlt: string;
  definition: {
    title: string;
    bringTitle: string;
    bringItems: string[];
    proRuleTitle: string;
    proRuleItems: string[];
  };
  principaux: {
    title: string;
    eyebrow: string;
    backToPlanets: string;
    signLabel: string;
    houseLabel: string;
    aspectsLabel: string;
    pitfallsLabel: string;
    symbolAlt: (name: string) => string;
  };
  methode: {
    title: string;
    prioritiesLabel: string;
    priorities: string[];
    synthesisLabel: string;
    synthesisBody: ReactNode;
  };
  transits: {
    title: string;
    watchLabel: string;
    items: string[];
  };
  synastrie: {
    title: string;
    junoLabel: string;
    junoBody: string;
    vestaLabel: string;
    vestaBody: string;
  };
  pieges: {
    title: string;
    mistakesLabel: string;
    mistakes: string[];
    goodPracticeLabel: string;
    goodPractice: string[];
  };
  faqTitle: string;
  faq: { q: string; a: ReactNode }[];
  faqJsonLd: { name: string; text: string }[];
  footer: { aspects: string; synastrie: string; transits: string };
  asteroids: Asteroid[];
};

/* ============================== FR ============================== */
const fr: AsteroidesContent = {
  meta: {
    title: "Astéroïdes en astrologie : Cérès & Chiron",
    description:
      "Astéroïdes en astrologie : Cérès, Pallas, Junon, Vesta et Chiron. Sens, lecture par signe, maison et aspects, transits et synastrie. Explorez notre cours !",
  },
  jsonld: {
    headline: "Astéroïdes en astrologie : Cérès & Chiron",
    description:
      "Astéroïdes en astrologie : Cérès, Pallas, Junon, Vesta et Chiron. Sens, lecture par signe, maison et aspects, transits et synastrie.",
    articleSection: "Astrologie",
  },
  sections: [
    { id: "definition", label: "Définition" },
    { id: "les-asteroides", label: "Les principaux" },
    { id: "methode", label: "Méthode de lecture" },
    { id: "transits", label: "Transits" },
    { id: "synastrie", label: "Synastrie" },
    { id: "piges", label: "Pièges" },
    { id: "faq", label: "FAQ" },
  ],
  hero: {
    eyebrow: "Cours d’astrologie — Astéroïdes",
    h1: "Cérès, Pallas, Junon, Vesta & Chiron",
    intro: (
      <>
        Les astéroïdes donnent de la précision :{" "}
        <span className="text-white">soin</span> (Cérès),{" "}
        <span className="text-white">stratégie</span> (Pallas),{" "}
        <span className="text-white">engagement</span> (Junon),{" "}
        <span className="text-white">focus</span> (Vesta) et{" "}
        <span className="text-white">blessure/maîtrise</span> (Chiron).
      </>
    ),
    tags: ["Lecture pro", "Signe • Maison • Aspects", "Transits & synastrie"],
    tocLabel: "Sommaire",
    heroImageAlt: "",
  },
  defBox: {
    label: "Définition",
    body: (
      <>
        Les <strong>astéroïdes en astrologie</strong> (Cérès, Pallas, Junon, Vesta et Chiron) sont des corps célestes situés entre Mars et Jupiter qui affinent l'interprétation du <Link href="/#theme-natal">thème natal</Link> en précisant des thèmes comme le soin, la stratégie, l'engagement et la guérison.
      </>
    ),
  },
  appIntro: (
    <>
      <strong>Les astéroïdes en astrologie</strong> restent souvent négligés par les débutants alors qu'ils apportent une finesse d'interprétation remarquable. Comment lire Cérès dans un thème natal ? Que révèle Chiron sur vos blessures et vos talents ? Cette page vous guide à travers les 5 astéroïdes essentiels, avec leur signification, leur lecture par signe et maison, et des conseils pour les utiliser en transit et en synastrie.
    </>
  ),
  illustrationAlt:
    "Illustration symbolique des astéroïdes Cérès, Pallas, Junon, Vesta et Chiron en astrologie",
  definition: {
    title: "Pourquoi utiliser les astéroïdes dans un thème natal ?",
    bringTitle: "Ce qu’ils apportent",
    bringItems: [
      "Ils affinent les thèmes : soin, engagement, stratégie, focus…",
      "Ils donnent des ‘angles psychologiques’ souvent très parlants en consultation.",
      "Ils brillent quand ils sont en aspects serrés aux luminaires/angles/maîtres d’Ascendant.",
    ],
    proRuleTitle: "Règle pro",
    proRuleItems: [
      "Toujours lire : signe (style) + maison (domaine) + aspects (comment c’est vécu).",
      "Priorité aux aspects exacts : conjonction, opposition, carré, trigone, sextile.",
      "Ne pas ‘surcharger’ : 4–6 astéroïdes bien choisis valent mieux qu’une liste infinie.",
    ],
  },
  principaux: {
    title: "Quels sont les 5 astéroïdes majeurs en astrologie ?",
    eyebrow: "Astéroïde",
    backToPlanets: "Revoir les planètes →",
    signLabel: "En signe",
    houseLabel: "En maison",
    aspectsLabel: "Aspects",
    pitfallsLabel: "À éviter",
    symbolAlt: (name) => `symbole de ${name}`,
  },
  methode: {
    title: "Comment interpréter les astéroïdes en astrologie ?",
    prioritiesLabel: "Priorités",
    priorities: [
      "Angles (ASC/MC) + luminaires (Soleil/Lune) : priorité 1.",
      "Maîtres d’ASC/MC + planètes personnelles : priorité 2.",
      "Aspects serrés : 0°–2° (très fort), 3°–5° (ok), au-delà = plus léger.",
    ],
    synthesisLabel: "Question de synthèse",
    synthesisBody: (
      <>
        “Quelle fonction précise est ajoutée au thème ?”
        <br />
        Exemple : Cérès n’ajoute pas “de l’émotion” (Lune) mais un style de{" "}
        <span className="text-text">soin</span> et de <span className="text-text">régulation</span>.
      </>
    ),
  },
  transits: {
    title: "Comment lire les transits des astéroïdes ?",
    watchLabel: "À surveiller",
    items: [
      "Transit exact sur Soleil/Lune/ASC/MC : évènementiel et très lisible.",
      "Transit sur Vénus/Mars : relation/désir/action (Juno/Vesta très parlants).",
      "Transit avec Saturne/Pluton : maturation, contrats, profondeur (Juno/Chiron souvent activés).",
    ],
  },
  synastrie: {
    title: "Quel rôle jouent les astéroïdes en synastrie ?",
    junoLabel: "Junon (pacte)",
    junoBody:
      "Junon de l’un sur le Soleil/ASC/Vénus de l’autre : sensation de “contrat”, attentes, besoin de clarté sur les règles du jeu.",
    vestaLabel: "Vesta (focus)",
    vestaBody:
      "Vesta active le dévouement, la constance… mais peut créer une dynamique “tout ou rien”. Très puissant si c’est aligné, dur si c’est subi.",
  },
  pieges: {
    title: "Quelles erreurs éviter avec les astéroïdes en astrologie ?",
    mistakesLabel: "Erreurs fréquentes",
    mistakes: [
      "Lire 20 astéroïdes : bruit > signal.",
      "Oublier l’orbe : si c’est large, c’est souvent faible.",
      "Ne pas relier aux planètes principales : l’astéroïde colore, il ne remplace pas.",
    ],
    goodPracticeLabel: "Bonnes pratiques",
    goodPractice: [
      "Choisir 4 principaux + 1 ou 2 spécifiques selon la question.",
      "Donner un rôle clair : soin, stratégie, pacte, focus, guérison.",
      "Toujours valider avec maison + aspects + transits (si timing).",
    ],
  },
  faqTitle: "Questions fréquentes sur les astéroïdes en astrologie",
  faq: [
    {
      q: "Pourquoi Chiron est-il étudié avec les astéroïdes ?",
      a: (
        <>
          <strong>Chiron</strong> est techniquement un planétoïde (entre astéroïde et comète), mais on l’enseigne avec les astéroïdes car il apporte une lecture très précise de la <strong>blessure structurante</strong>, de la maîtrise et de la transmission. En consultation, il est aussi parlant que les 4 astéroïdes majeurs.
        </>
      ),
    },
    {
      q: "Quels astéroïdes utiliser quand on débute en astrologie ?",
      a: (
        <>
          Commencez par les 4 astéroïdes majeurs : <strong>Cérès</strong> (soin), <strong>Pallas</strong> (stratégie), <strong>Junon</strong> (engagement) et <strong>Vesta</strong> (focus). Ajoutez <strong>Chiron</strong> si vous travaillez en coaching ou en psycho-astrologie. Ne surchargez pas : 4 à 6 astéroïdes bien choisis suffisent.
        </>
      ),
    },
    {
      q: "Quel orbe utiliser pour les astéroïdes dans un thème natal ?",
      a: (
        <>
          En pratique professionnelle : <strong>0-2° pour un aspect fort</strong>, 3-5° pour un aspect acceptable. Au-delà, l’astéroïde fonctionne davantage en toile de fond. Privilégiez les <Link href="/aspects">aspects</Link> exacts aux <Link href="/planetes">luminaires</Link> (Soleil/Lune) et aux angles (ASC/MC).
        </>
      ),
    },
    {
      q: "Que signifie Cérès dans un thème astral ?",
      a: (
        <>
          <strong>Cérès</strong> décrit la manière dont vous donnez et recevez du soin : sécurité concrète, relation au corps, nourriture, rythmes de vie et autosoin. En <Link href="/maisons">maison</Link>, elle indique le domaine où vous apprenez à nourrir, réparer et stabiliser. Elle ne se réduit pas au rôle maternel.
        </>
      ),
    },
  ],
  faqJsonLd: [
    {
      name: "Pourquoi Chiron est-il étudié avec les astéroïdes ?",
      text: "Chiron est techniquement un planétoïde (entre astéroïde et comète), mais on l'enseigne avec les astéroïdes car il apporte une lecture très précise de la blessure structurante, de la maîtrise et de la transmission. En consultation, il est aussi parlant que les 4 astéroïdes majeurs.",
    },
    {
      name: "Quels astéroïdes utiliser quand on débute en astrologie ?",
      text: "Commencez par les 4 astéroïdes majeurs : Cérès (soin), Pallas (stratégie), Junon (engagement) et Vesta (focus). Ajoutez Chiron si vous travaillez en coaching ou en psycho-astrologie. Ne surchargez pas : 4 à 6 astéroïdes bien choisis suffisent.",
    },
    {
      name: "Quel orbe utiliser pour les astéroïdes dans un thème natal ?",
      text: "En pratique professionnelle : 0-2° pour un aspect fort, 3-5° pour un aspect acceptable. Au-delà, l'astéroïde fonctionne davantage en toile de fond. Privilégiez les aspects exacts aux luminaires (Soleil/Lune) et aux angles (ASC/MC).",
    },
    {
      name: "Que signifie Cérès dans un thème astral ?",
      text: "Cérès décrit la manière dont vous donnez et recevez du soin : sécurité concrète, relation au corps, nourriture, rythmes de vie et autosoin. En maison, elle indique le domaine où vous apprenez à nourrir, réparer et stabiliser. Elle ne se réduit pas au rôle maternel.",
    },
  ],
  footer: { aspects: "Aspects", synastrie: "Synastrie", transits: "Transits" },
  asteroids: [
    {
      slug: "ceres",
      name: "Cérès",
      badge: "Soin • Ressources • Nourrir",
      kind: "earth",
      keywords: ["nourrir", "sécurité", "corps", "rythmes", "attachement", "autosoin"],
      core:
        "Cérès décrit la manière de donner/recevoir du soin, de réguler le manque et de construire la sécurité concrète (corps, nourriture, rythmes, protection).",
      sign: [
        "En signe : le style de soin (directif, tendre, mental, pragmatique…), et ce qui rassure vraiment.",
        "On observe aussi l’ombre : surprotection, contrôle, compensation par le confort.",
      ],
      house: [
        "En maison : le domaine où tu apprends à nourrir, réparer, créer de la sécurité et de la stabilité.",
        "Très utile pour la relation au corps, au foyer, au temps et aux routines.",
      ],
      aspects: [
        "Aspects au Soleil/Lune : besoin vital (identité/émotion) lié au soin et à la sécurité.",
        "Aspects à Vénus/Mars : comment le soin s’exprime en relation/désir (donner vs exiger).",
      ],
      pitfalls: [
        "Réduire Cérès à ‘maman’ : c’est plus large (autosoin, ressources, rythmes, régulation).",
        "Interpréter sans maison : la maison est souvent le vrai ‘terrain’ de Cérès.",
      ],
    },
    {
      slug: "pallas",
      name: "Pallas",
      badge: "Stratégie • Intelligence • Motifs",
      kind: "mind",
      keywords: ["pattern", "tactique", "vision", "résolution", "créativité", "justice"],
      core:
        "Pallas décrit l’intelligence stratégique : voir les motifs, résoudre, optimiser, défendre une cause, et agir avec précision plutôt qu’à l’instinct.",
      sign: [
        "En signe : ta manière d’analyser (rapide, intuitive, structurée, imaginative…).",
        "Le ‘talent signature’ : repérer ce que les autres ne voient pas.",
      ],
      house: [
        "En maison : là où tu joues ‘aux échecs’ plutôt qu’aux dés ; domaine de maîtrise, conseil, architecture mentale.",
        "Très parlant en carrière : stratégie, expertise, positionnement.",
      ],
      aspects: [
        "Aspects à Mercure : style cognitif très marqué (conceptualisation, logique, communication).",
        "Aspects à Uranus : insight, innovation, rupture intelligente (attention au sur-mental).",
      ],
      pitfalls: [
        "Confondre Pallas avec Mercure : Mercure relie/échange ; Pallas conçoit et planifie.",
        "Lire Pallas comme ‘froid’ : en réalité, c’est une intelligence appliquée.",
      ],
    },
    {
      slug: "juno",
      name: "Junon",
      badge: "Engagement • Pacte • Égalité",
      kind: "bond",
      keywords: ["contrat", "fidélité", "répartition", "respect", "pouvoir", "alliances"],
      core:
        "Junon décrit l’engagement : ce que tu attends d’un pacte, comment tu gères l’égalité, la loyauté, et les rapports de pouvoir en relation.",
      sign: [
        "En signe : la ‘forme’ de l’engagement (stabilité, liberté, intensité, projet commun…).",
        "Ce qui déclenche la jalousie ou la crispation : là où le pacte n’est pas respecté.",
      ],
      house: [
        "En maison : le lieu de vie où l’engagement se joue (couple, finances, statut, foyer, mission…).",
        "Très utile en synastrie : ce que l’autre active sur ton terrain d’engagement.",
      ],
      aspects: [
        "Aspects à Vénus : style affectif + pacte (harmonie vs attentes).",
        "Aspects à Saturne : sérieux/contrat ; peut être solide mais exigeant.",
      ],
      pitfalls: [
        "Réduire Junon au mariage : c’est la logique de pacte (pro/perso), pas juste l’institution.",
        "Oublier la question du pouvoir : Junon parle souvent de rééquilibrage.",
      ],
    },
    {
      slug: "vesta",
      name: "Vesta",
      badge: "Feu sacré • Focus • Dévotion",
      kind: "flame",
      keywords: ["concentration", "discipline", "sacré", "service", "purifier", "réserve"],
      core:
        "Vesta décrit le feu intérieur : capacité de focus, de dévotion, de purification et de service. C’est la ‘flamme’ qui tient quand le reste lâche.",
      sign: [
        "En signe : ton style de focus (méthode, foi, passion, rigueur, inspiration…).",
        "Peut donner une grande maîtrise… ou une tendance à l’isolement si trop strict.",
      ],
      house: [
        "En maison : domaine où tu peux devenir ‘excellent’ par dévotion (métier, art, santé, spiritualité, foyer…).",
        "Très fort pour les routines, la pratique quotidienne, la constance.",
      ],
      aspects: [
        "Aspects à Mars : puissance d’effort / endurance ; attention à la rigidité.",
        "Aspects à Neptune : dévotion inspirée ; attention aux illusions et au sacrifice.",
      ],
      pitfalls: [
        "Lire Vesta comme ‘privation’ uniquement : c’est surtout le focus et la constance.",
        "Oublier l’équilibre : Vesta trop forte = obsession / dureté envers soi.",
      ],
    },
    {
      slug: "chiron",
      name: "Chiron",
      badge: "Blessure • Sens • Transmission",
      kind: "wound",
      keywords: ["vulnérabilité", "compétence", "sens", "guérison", "mentor", "intégration"],
      core:
        "Chiron décrit une blessure structurante qui pousse à développer une compétence, une sagesse et une capacité de transmission. Ce n’est pas ‘tragique’ : c’est formateur.",
      sign: [
        "En signe : la coloration de la blessure (identité, émotion, relation, action…).",
        "On cherche la bascule : de la douleur à l’expertise (sans se définir par la blessure).",
      ],
      house: [
        "En maison : domaine où tu apprends par expérience directe, puis où tu peux guider.",
        "Souvent un terrain d’inconfort au début, puis une force avec le temps.",
      ],
      aspects: [
        "Aspects au Soleil/Lune : très identitaire/émotionnel ; demande douceur et maturité.",
        "Aspects à Saturne : travail long, solide ; attention au jugement sévère de soi.",
      ],
      pitfalls: [
        "Interpréter Chiron comme ‘malheur’ : c’est une dynamique, pas une fatalité.",
        "Ne pas relier à l’action : la guérison passe par des choix concrets et répétés.",
      ],
    },
  ],
};

/* ============================== EN ============================== */
const en: AsteroidesContent = {
  meta: {
    title: "Asteroids in astrology: Ceres & Chiron",
    description:
      "Asteroids in astrology: Ceres, Pallas, Juno, Vesta and Chiron. Meaning, reading by sign, house and aspects, transits and synastry. Explore our course!",
  },
  jsonld: {
    headline: "Asteroids in astrology: Ceres & Chiron",
    description:
      "Asteroids in astrology: Ceres, Pallas, Juno, Vesta and Chiron. Meaning, reading by sign, house and aspects, transits and synastry.",
    articleSection: "Astrology",
  },
  sections: [
    { id: "definition", label: "Definition" },
    { id: "les-asteroides", label: "The main ones" },
    { id: "methode", label: "Reading method" },
    { id: "transits", label: "Transits" },
    { id: "synastrie", label: "Synastry" },
    { id: "piges", label: "Pitfalls" },
    { id: "faq", label: "FAQ" },
  ],
  hero: {
    eyebrow: "Astrology course — Asteroids",
    h1: "Ceres, Pallas, Juno, Vesta & Chiron",
    intro: (
      <>
        Asteroids add precision:{" "}
        <span className="text-white">care</span> (Ceres),{" "}
        <span className="text-white">strategy</span> (Pallas),{" "}
        <span className="text-white">commitment</span> (Juno),{" "}
        <span className="text-white">focus</span> (Vesta) and{" "}
        <span className="text-white">wound/mastery</span> (Chiron).
      </>
    ),
    tags: ["Pro reading", "Sign • House • Aspects", "Transits & synastry"],
    tocLabel: "Contents",
    heroImageAlt: "",
  },
  defBox: {
    label: "Definition",
    body: (
      <>
        <strong>Asteroids in astrology</strong> (Ceres, Pallas, Juno, Vesta and Chiron) are celestial bodies located between Mars and Jupiter that refine the interpretation of the <Link href="/#theme-natal">natal chart</Link> by adding precision to themes such as care, strategy, commitment and healing.
      </>
    ),
  },
  appIntro: (
    <>
      <strong>Asteroids in astrology</strong> are often overlooked by beginners, yet they bring a remarkable subtlety to interpretation. How do you read Ceres in a natal chart? What does Chiron reveal about your wounds and your talents? This page guides you through the 5 essential asteroids, with their meaning, their reading by sign and house, and tips for using them in transit and in synastry.
    </>
  ),
  illustrationAlt:
    "Symbolic illustration of the asteroids Ceres, Pallas, Juno, Vesta and Chiron in astrology",
  definition: {
    title: "Why use asteroids in a natal chart?",
    bringTitle: "What they bring",
    bringItems: [
      "They refine themes: care, commitment, strategy, focus…",
      "They offer ‘psychological angles’ that are often very telling in a consultation.",
      "They shine when they form tight aspects to the luminaries/angles/Ascendant rulers.",
    ],
    proRuleTitle: "Pro rule",
    proRuleItems: [
      "Always read: sign (style) + house (area) + aspects (how it is experienced).",
      "Prioritise exact aspects: conjunction, opposition, square, trine, sextile.",
      "Do not ‘overload’: 4–6 well-chosen asteroids are worth more than an endless list.",
    ],
  },
  principaux: {
    title: "What are the 5 major asteroids in astrology?",
    eyebrow: "Asteroid",
    backToPlanets: "Review the planets →",
    signLabel: "In sign",
    houseLabel: "In house",
    aspectsLabel: "Aspects",
    pitfallsLabel: "To avoid",
    symbolAlt: (name) => `symbol of ${name}`,
  },
  methode: {
    title: "How do you interpret asteroids in astrology?",
    prioritiesLabel: "Priorities",
    priorities: [
      "Angles (ASC/MC) + luminaries (Sun/Moon): priority 1.",
      "ASC/MC rulers + personal planets: priority 2.",
      "Tight aspects: 0°–2° (very strong), 3°–5° (ok), beyond = lighter.",
    ],
    synthesisLabel: "Synthesis question",
    synthesisBody: (
      <>
        “What precise function is being added to the chart?”
        <br />
        Example: Ceres does not add “emotion” (Moon) but a style of{" "}
        <span className="text-text">care</span> and <span className="text-text">regulation</span>.
      </>
    ),
  },
  transits: {
    title: "How do you read the transits of asteroids?",
    watchLabel: "What to watch",
    items: [
      "Exact transit on Sun/Moon/ASC/MC: eventful and very readable.",
      "Transit on Venus/Mars: relationship/desire/action (Juno/Vesta very telling).",
      "Transit with Saturn/Pluto: maturation, contracts, depth (Juno/Chiron often activated).",
    ],
  },
  synastrie: {
    title: "What role do asteroids play in synastry?",
    junoLabel: "Juno (pact)",
    junoBody:
      "One person’s Juno on the other’s Sun/ASC/Venus: a feeling of a “contract”, expectations, a need for clarity about the rules of the game.",
    vestaLabel: "Vesta (focus)",
    vestaBody:
      "Vesta activates devotion and constancy… but it can create an “all or nothing” dynamic. Very powerful when aligned, harsh when endured.",
  },
  pieges: {
    title: "What mistakes should you avoid with asteroids in astrology?",
    mistakesLabel: "Common mistakes",
    mistakes: [
      "Reading 20 asteroids: noise > signal.",
      "Forgetting the orb: if it is wide, it is often weak.",
      "Not linking to the main planets: the asteroid colours, it does not replace.",
    ],
    goodPracticeLabel: "Best practices",
    goodPractice: [
      "Choose 4 main ones + 1 or 2 specific ones depending on the question.",
      "Give a clear role: care, strategy, pact, focus, healing.",
      "Always confirm with house + aspects + transits (if timing matters).",
    ],
  },
  faqTitle: "Frequently asked questions about asteroids in astrology",
  faq: [
    {
      q: "Why is Chiron studied alongside the asteroids?",
      a: (
        <>
          <strong>Chiron</strong> is technically a planetoid (between an asteroid and a comet), but it is taught alongside the asteroids because it offers a very precise reading of the <strong>structuring wound</strong>, of mastery and of transmission. In a consultation, it is just as telling as the 4 major asteroids.
        </>
      ),
    },
    {
      q: "Which asteroids should you use when starting out in astrology?",
      a: (
        <>
          Begin with the 4 major asteroids: <strong>Ceres</strong> (care), <strong>Pallas</strong> (strategy), <strong>Juno</strong> (commitment) and <strong>Vesta</strong> (focus). Add <strong>Chiron</strong> if you work in coaching or psycho-astrology. Don’t overload: 4 to 6 well-chosen asteroids are enough.
        </>
      ),
    },
    {
      q: "Which orb should you use for asteroids in a natal chart?",
      a: (
        <>
          In professional practice: <strong>0-2° for a strong aspect</strong>, 3-5° for an acceptable aspect. Beyond that, the asteroid works more as a backdrop. Favour exact <Link href="/aspects">aspects</Link> to the <Link href="/planetes">luminaries</Link> (Sun/Moon) and to the angles (ASC/MC).
        </>
      ),
    },
    {
      q: "What does Ceres mean in a birth chart?",
      a: (
        <>
          <strong>Ceres</strong> describes the way you give and receive care: concrete security, your relationship to the body, food, life rhythms and self-care. In a <Link href="/maisons">house</Link>, it indicates the area where you learn to nourish, repair and stabilise. It is not reduced to the maternal role.
        </>
      ),
    },
  ],
  faqJsonLd: [
    {
      name: "Why is Chiron studied alongside the asteroids?",
      text: "Chiron is technically a planetoid (between an asteroid and a comet), but it is taught alongside the asteroids because it offers a very precise reading of the structuring wound, of mastery and of transmission. In a consultation, it is just as telling as the 4 major asteroids.",
    },
    {
      name: "Which asteroids should you use when starting out in astrology?",
      text: "Begin with the 4 major asteroids: Ceres (care), Pallas (strategy), Juno (commitment) and Vesta (focus). Add Chiron if you work in coaching or psycho-astrology. Don't overload: 4 to 6 well-chosen asteroids are enough.",
    },
    {
      name: "Which orb should you use for asteroids in a natal chart?",
      text: "In professional practice: 0-2° for a strong aspect, 3-5° for an acceptable aspect. Beyond that, the asteroid works more as a backdrop. Favour exact aspects to the luminaries (Sun/Moon) and to the angles (ASC/MC).",
    },
    {
      name: "What does Ceres mean in a birth chart?",
      text: "Ceres describes the way you give and receive care: concrete security, your relationship to the body, food, life rhythms and self-care. In a house, it indicates the area where you learn to nourish, repair and stabilise. It is not reduced to the maternal role.",
    },
  ],
  footer: { aspects: "Aspects", synastrie: "Synastry", transits: "Transits" },
  asteroids: [
    {
      slug: "ceres",
      name: "Ceres",
      badge: "Care • Resources • Nourish",
      kind: "earth",
      keywords: ["nourish", "security", "body", "rhythms", "attachment", "self-care"],
      core:
        "Ceres describes how you give/receive care, how you regulate lack and how you build concrete security (body, food, rhythms, protection).",
      sign: [
        "In sign: the style of care (directive, tender, mental, pragmatic…), and what truly reassures.",
        "Watch the shadow too: overprotection, control, compensating through comfort.",
      ],
      house: [
        "In house: the area where you learn to nourish, repair, create security and stability.",
        "Very useful for the relationship to the body, the home, time and routines.",
      ],
      aspects: [
        "Aspects to the Sun/Moon: vital need (identity/emotion) tied to care and security.",
        "Aspects to Venus/Mars: how care is expressed in relationship/desire (giving vs demanding).",
      ],
      pitfalls: [
        "Reducing Ceres to ‘mum’: it is broader (self-care, resources, rhythms, regulation).",
        "Interpreting without the house: the house is often the real ‘ground’ of Ceres.",
      ],
    },
    {
      slug: "pallas",
      name: "Pallas",
      badge: "Strategy • Intelligence • Patterns",
      kind: "mind",
      keywords: ["pattern", "tactics", "vision", "resolution", "creativity", "justice"],
      core:
        "Pallas describes strategic intelligence: seeing patterns, solving, optimising, defending a cause, and acting with precision rather than on instinct.",
      sign: [
        "In sign: your way of analysing (fast, intuitive, structured, imaginative…).",
        "The ‘signature talent’: spotting what others do not see.",
      ],
      house: [
        "In house: where you play ‘chess’ rather than dice; an area of mastery, advice, mental architecture.",
        "Very telling in a career: strategy, expertise, positioning.",
      ],
      aspects: [
        "Aspects to Mercury: a very marked cognitive style (conceptualisation, logic, communication).",
        "Aspects to Uranus: insight, innovation, intelligent disruption (beware of over-thinking).",
      ],
      pitfalls: [
        "Confusing Pallas with Mercury: Mercury connects/exchanges; Pallas designs and plans.",
        "Reading Pallas as ‘cold’: in reality, it is an applied intelligence.",
      ],
    },
    {
      slug: "juno",
      name: "Juno",
      badge: "Commitment • Pact • Equality",
      kind: "bond",
      keywords: ["contract", "fidelity", "sharing", "respect", "power", "alliances"],
      core:
        "Juno describes commitment: what you expect from a pact, how you handle equality, loyalty, and power dynamics in a relationship.",
      sign: [
        "In sign: the ‘form’ of commitment (stability, freedom, intensity, shared project…).",
        "What triggers jealousy or tension: where the pact is not respected.",
      ],
      house: [
        "In house: the area of life where commitment plays out (couple, finances, status, home, mission…).",
        "Very useful in synastry: what the other activates on your terrain of commitment.",
      ],
      aspects: [
        "Aspects to Venus: affective style + pact (harmony vs expectations).",
        "Aspects to Saturn: seriousness/contract; can be solid but demanding.",
      ],
      pitfalls: [
        "Reducing Juno to marriage: it is the logic of the pact (work/personal), not just the institution.",
        "Forgetting the question of power: Juno often speaks of rebalancing.",
      ],
    },
    {
      slug: "vesta",
      name: "Vesta",
      badge: "Sacred fire • Focus • Devotion",
      kind: "flame",
      keywords: ["concentration", "discipline", "sacred", "service", "purify", "reserve"],
      core:
        "Vesta describes the inner fire: the capacity for focus, devotion, purification and service. It is the ‘flame’ that holds when everything else gives way.",
      sign: [
        "In sign: your style of focus (method, faith, passion, rigour, inspiration…).",
        "It can grant great mastery… or a tendency to isolation if too strict.",
      ],
      house: [
        "In house: the area where you can become ‘excellent’ through devotion (profession, art, health, spirituality, home…).",
        "Very strong for routines, daily practice, constancy.",
      ],
      aspects: [
        "Aspects to Mars: power of effort / endurance; beware of rigidity.",
        "Aspects to Neptune: inspired devotion; beware of illusions and sacrifice.",
      ],
      pitfalls: [
        "Reading Vesta only as ‘deprivation’: it is above all focus and constancy.",
        "Forgetting balance: too strong a Vesta = obsession / harshness toward oneself.",
      ],
    },
    {
      slug: "chiron",
      name: "Chiron",
      badge: "Wound • Meaning • Transmission",
      kind: "wound",
      keywords: ["vulnerability", "skill", "meaning", "healing", "mentor", "integration"],
      core:
        "Chiron describes a structuring wound that pushes you to develop a skill, a wisdom and a capacity for transmission. It is not ‘tragic’: it is formative.",
      sign: [
        "In sign: the colouring of the wound (identity, emotion, relationship, action…).",
        "You look for the shift: from pain to expertise (without defining yourself by the wound).",
      ],
      house: [
        "In house: the area where you learn through direct experience, then where you can guide.",
        "Often uncomfortable ground at first, then a strength over time.",
      ],
      aspects: [
        "Aspects to the Sun/Moon: very identity-based/emotional; calls for gentleness and maturity.",
        "Aspects to Saturn: long, solid work; beware of harsh self-judgement.",
      ],
      pitfalls: [
        "Interpreting Chiron as ‘misfortune’: it is a dynamic, not a fate.",
        "Not linking it to action: healing comes through concrete, repeated choices.",
      ],
    },
  ],
};

/* ============================== ES ============================== */
const es: AsteroidesContent = {
  meta: {
    title: "Asteroides en astrología: Ceres y Quirón",
    description:
      "Asteroides en astrología: Ceres, Palas, Juno, Vesta y Quirón. Sentido, lectura por signo, casa y aspectos, tránsitos y sinastría. ¡Explora nuestro curso!",
  },
  jsonld: {
    headline: "Asteroides en astrología: Ceres y Quirón",
    description:
      "Asteroides en astrología: Ceres, Palas, Juno, Vesta y Quirón. Sentido, lectura por signo, casa y aspectos, tránsitos y sinastría.",
    articleSection: "Astrología",
  },
  sections: [
    { id: "definition", label: "Definición" },
    { id: "les-asteroides", label: "Los principales" },
    { id: "methode", label: "Método de lectura" },
    { id: "transits", label: "Tránsitos" },
    { id: "synastrie", label: "Sinastría" },
    { id: "piges", label: "Trampas" },
    { id: "faq", label: "FAQ" },
  ],
  hero: {
    eyebrow: "Curso de astrología — Asteroides",
    h1: "Ceres, Palas, Juno, Vesta y Quirón",
    intro: (
      <>
        Los asteroides aportan precisión:{" "}
        <span className="text-white">cuidado</span> (Ceres),{" "}
        <span className="text-white">estrategia</span> (Palas),{" "}
        <span className="text-white">compromiso</span> (Juno),{" "}
        <span className="text-white">foco</span> (Vesta) y{" "}
        <span className="text-white">herida/maestría</span> (Quirón).
      </>
    ),
    tags: ["Lectura pro", "Signo • Casa • Aspectos", "Tránsitos y sinastría"],
    tocLabel: "Índice",
    heroImageAlt: "",
  },
  defBox: {
    label: "Definición",
    body: (
      <>
        Los <strong>asteroides en astrología</strong> (Ceres, Palas, Juno, Vesta y Quirón) son cuerpos celestes situados entre Marte y Júpiter que afinan la interpretación de la <Link href="/#theme-natal">carta natal</Link> al precisar temas como el cuidado, la estrategia, el compromiso y la sanación.
      </>
    ),
  },
  appIntro: (
    <>
      <strong>Los asteroides en astrología</strong> suelen quedar descuidados por los principiantes, aunque aportan una finura de interpretación notable. ¿Cómo se lee Ceres en una carta natal? ¿Qué revela Quirón sobre tus heridas y tus talentos? Esta página te guía a través de los 5 asteroides esenciales, con su significado, su lectura por signo y casa, y consejos para usarlos en tránsito y en sinastría.
    </>
  ),
  illustrationAlt:
    "Ilustración simbólica de los asteroides Ceres, Palas, Juno, Vesta y Quirón en astrología",
  definition: {
    title: "¿Por qué usar los asteroides en una carta natal?",
    bringTitle: "Lo que aportan",
    bringItems: [
      "Afinan los temas: cuidado, compromiso, estrategia, foco…",
      "Ofrecen ‘ángulos psicológicos’ a menudo muy elocuentes en consulta.",
      "Brillan cuando forman aspectos cerrados con los luminares/ángulos/regentes del Ascendente.",
    ],
    proRuleTitle: "Regla pro",
    proRuleItems: [
      "Leer siempre: signo (estilo) + casa (ámbito) + aspectos (cómo se vive).",
      "Prioridad a los aspectos exactos: conjunción, oposición, cuadratura, trígono, sextil.",
      "No ‘sobrecargar’: 4–6 asteroides bien elegidos valen más que una lista infinita.",
    ],
  },
  principaux: {
    title: "¿Cuáles son los 5 asteroides mayores en astrología?",
    eyebrow: "Asteroide",
    backToPlanets: "Volver a los planetas →",
    signLabel: "En signo",
    houseLabel: "En casa",
    aspectsLabel: "Aspectos",
    pitfallsLabel: "A evitar",
    symbolAlt: (name) => `símbolo de ${name}`,
  },
  methode: {
    title: "¿Cómo interpretar los asteroides en astrología?",
    prioritiesLabel: "Prioridades",
    priorities: [
      "Ángulos (ASC/MC) + luminares (Sol/Luna): prioridad 1.",
      "Regentes de ASC/MC + planetas personales: prioridad 2.",
      "Aspectos cerrados: 0°–2° (muy fuerte), 3°–5° (ok), más allá = más leve.",
    ],
    synthesisLabel: "Pregunta de síntesis",
    synthesisBody: (
      <>
        “¿Qué función precisa se añade a la carta?”
        <br />
        Ejemplo: Ceres no añade “emoción” (Luna) sino un estilo de{" "}
        <span className="text-text">cuidado</span> y de <span className="text-text">regulación</span>.
      </>
    ),
  },
  transits: {
    title: "¿Cómo leer los tránsitos de los asteroides?",
    watchLabel: "A vigilar",
    items: [
      "Tránsito exacto sobre Sol/Luna/ASC/MC: con sucesos y muy legible.",
      "Tránsito sobre Venus/Marte: relación/deseo/acción (Juno/Vesta muy elocuentes).",
      "Tránsito con Saturno/Plutón: maduración, contratos, profundidad (Juno/Quirón a menudo activados).",
    ],
  },
  synastrie: {
    title: "¿Qué papel juegan los asteroides en sinastría?",
    junoLabel: "Juno (pacto)",
    junoBody:
      "Juno de uno sobre el Sol/ASC/Venus del otro: sensación de “contrato”, expectativas, necesidad de claridad sobre las reglas del juego.",
    vestaLabel: "Vesta (foco)",
    vestaBody:
      "Vesta activa la entrega y la constancia… pero puede crear una dinámica de “todo o nada”. Muy potente si está alineada, dura si se padece.",
  },
  pieges: {
    title: "¿Qué errores evitar con los asteroides en astrología?",
    mistakesLabel: "Errores frecuentes",
    mistakes: [
      "Leer 20 asteroides: ruido > señal.",
      "Olvidar el orbe: si es amplio, suele ser débil.",
      "No vincularlos con los planetas principales: el asteroide colorea, no sustituye.",
    ],
    goodPracticeLabel: "Buenas prácticas",
    goodPractice: [
      "Elegir 4 principales + 1 o 2 específicos según la pregunta.",
      "Dar un papel claro: cuidado, estrategia, pacto, foco, sanación.",
      "Validar siempre con casa + aspectos + tránsitos (si hay timing).",
    ],
  },
  faqTitle: "Preguntas frecuentes sobre los asteroides en astrología",
  faq: [
    {
      q: "¿Por qué se estudia Quirón junto con los asteroides?",
      a: (
        <>
          <strong>Quirón</strong> es técnicamente un planetoide (entre asteroide y cometa), pero se enseña con los asteroides porque aporta una lectura muy precisa de la <strong>herida estructurante</strong>, de la maestría y de la transmisión. En consulta, es tan elocuente como los 4 asteroides mayores.
        </>
      ),
    },
    {
      q: "¿Qué asteroides usar cuando se empieza en astrología?",
      a: (
        <>
          Empieza por los 4 asteroides mayores: <strong>Ceres</strong> (cuidado), <strong>Palas</strong> (estrategia), <strong>Juno</strong> (compromiso) y <strong>Vesta</strong> (foco). Añade <strong>Quirón</strong> si trabajas en coaching o en psico-astrología. No sobrecargues: 4 a 6 asteroides bien elegidos bastan.
        </>
      ),
    },
    {
      q: "¿Qué orbe usar para los asteroides en una carta natal?",
      a: (
        <>
          En la práctica profesional: <strong>0-2° para un aspecto fuerte</strong>, 3-5° para un aspecto aceptable. Más allá, el asteroide funciona más como telón de fondo. Prioriza los <Link href="/aspects">aspectos</Link> exactos con los <Link href="/planetes">luminares</Link> (Sol/Luna) y con los ángulos (ASC/MC).
        </>
      ),
    },
    {
      q: "¿Qué significa Ceres en una carta astral?",
      a: (
        <>
          <strong>Ceres</strong> describe la manera en que das y recibes cuidado: seguridad concreta, relación con el cuerpo, alimentación, ritmos de vida y autocuidado. En <Link href="/maisons">casa</Link>, indica el ámbito donde aprendes a nutrir, reparar y estabilizar. No se reduce al rol materno.
        </>
      ),
    },
  ],
  faqJsonLd: [
    {
      name: "¿Por qué se estudia Quirón junto con los asteroides?",
      text: "Quirón es técnicamente un planetoide (entre asteroide y cometa), pero se enseña con los asteroides porque aporta una lectura muy precisa de la herida estructurante, de la maestría y de la transmisión. En consulta, es tan elocuente como los 4 asteroides mayores.",
    },
    {
      name: "¿Qué asteroides usar cuando se empieza en astrología?",
      text: "Empieza por los 4 asteroides mayores: Ceres (cuidado), Palas (estrategia), Juno (compromiso) y Vesta (foco). Añade Quirón si trabajas en coaching o en psico-astrología. No sobrecargues: 4 a 6 asteroides bien elegidos bastan.",
    },
    {
      name: "¿Qué orbe usar para los asteroides en una carta natal?",
      text: "En la práctica profesional: 0-2° para un aspecto fuerte, 3-5° para un aspecto aceptable. Más allá, el asteroide funciona más como telón de fondo. Prioriza los aspectos exactos con los luminares (Sol/Luna) y con los ángulos (ASC/MC).",
    },
    {
      name: "¿Qué significa Ceres en una carta astral?",
      text: "Ceres describe la manera en que das y recibes cuidado: seguridad concreta, relación con el cuerpo, alimentación, ritmos de vida y autocuidado. En casa, indica el ámbito donde aprendes a nutrir, reparar y estabilizar. No se reduce al rol materno.",
    },
  ],
  footer: { aspects: "Aspectos", synastrie: "Sinastría", transits: "Tránsitos" },
  asteroids: [
    {
      slug: "ceres",
      name: "Ceres",
      badge: "Cuidado • Recursos • Nutrir",
      kind: "earth",
      keywords: ["nutrir", "seguridad", "cuerpo", "ritmos", "apego", "autocuidado"],
      core:
        "Ceres describe la manera de dar/recibir cuidado, de regular la carencia y de construir seguridad concreta (cuerpo, alimentación, ritmos, protección).",
      sign: [
        "En signo: el estilo de cuidado (directivo, tierno, mental, pragmático…), y lo que de verdad tranquiliza.",
        "También se observa la sombra: sobreprotección, control, compensación por el confort.",
      ],
      house: [
        "En casa: el ámbito donde aprendes a nutrir, reparar, crear seguridad y estabilidad.",
        "Muy útil para la relación con el cuerpo, el hogar, el tiempo y las rutinas.",
      ],
      aspects: [
        "Aspectos al Sol/Luna: necesidad vital (identidad/emoción) ligada al cuidado y a la seguridad.",
        "Aspectos a Venus/Marte: cómo se expresa el cuidado en la relación/deseo (dar vs exigir).",
      ],
      pitfalls: [
        "Reducir Ceres a ‘mamá’: es más amplio (autocuidado, recursos, ritmos, regulación).",
        "Interpretar sin la casa: la casa suele ser el verdadero ‘terreno’ de Ceres.",
      ],
    },
    {
      slug: "pallas",
      name: "Palas",
      badge: "Estrategia • Inteligencia • Patrones",
      kind: "mind",
      keywords: ["patrón", "táctica", "visión", "resolución", "creatividad", "justicia"],
      core:
        "Palas describe la inteligencia estratégica: ver los patrones, resolver, optimizar, defender una causa y actuar con precisión más que por instinto.",
      sign: [
        "En signo: tu manera de analizar (rápida, intuitiva, estructurada, imaginativa…).",
        "El ‘talento firma’: detectar lo que los demás no ven.",
      ],
      house: [
        "En casa: donde juegas ‘al ajedrez’ más que a los dados; ámbito de maestría, asesoría, arquitectura mental.",
        "Muy elocuente en la carrera: estrategia, experiencia, posicionamiento.",
      ],
      aspects: [
        "Aspectos a Mercurio: estilo cognitivo muy marcado (conceptualización, lógica, comunicación).",
        "Aspectos a Urano: insight, innovación, ruptura inteligente (cuidado con el exceso mental).",
      ],
      pitfalls: [
        "Confundir Palas con Mercurio: Mercurio conecta/intercambia; Palas concibe y planifica.",
        "Leer Palas como ‘fría’: en realidad, es una inteligencia aplicada.",
      ],
    },
    {
      slug: "juno",
      name: "Juno",
      badge: "Compromiso • Pacto • Igualdad",
      kind: "bond",
      keywords: ["contrato", "fidelidad", "reparto", "respeto", "poder", "alianzas"],
      core:
        "Juno describe el compromiso: lo que esperas de un pacto, cómo gestionas la igualdad, la lealtad y las relaciones de poder en la relación.",
      sign: [
        "En signo: la ‘forma’ del compromiso (estabilidad, libertad, intensidad, proyecto común…).",
        "Lo que dispara los celos o la tensión: donde el pacto no se respeta.",
      ],
      house: [
        "En casa: el ámbito de vida donde se juega el compromiso (pareja, finanzas, estatus, hogar, misión…).",
        "Muy útil en sinastría: lo que el otro activa en tu terreno de compromiso.",
      ],
      aspects: [
        "Aspectos a Venus: estilo afectivo + pacto (armonía vs expectativas).",
        "Aspectos a Saturno: seriedad/contrato; puede ser sólido pero exigente.",
      ],
      pitfalls: [
        "Reducir Juno al matrimonio: es la lógica del pacto (pro/personal), no solo la institución.",
        "Olvidar la cuestión del poder: Juno habla a menudo de reequilibrio.",
      ],
    },
    {
      slug: "vesta",
      name: "Vesta",
      badge: "Fuego sagrado • Foco • Devoción",
      kind: "flame",
      keywords: ["concentración", "disciplina", "sagrado", "servicio", "purificar", "reserva"],
      core:
        "Vesta describe el fuego interior: capacidad de foco, de devoción, de purificación y de servicio. Es la ‘llama’ que se sostiene cuando lo demás cede.",
      sign: [
        "En signo: tu estilo de foco (método, fe, pasión, rigor, inspiración…).",
        "Puede dar una gran maestría… o una tendencia al aislamiento si es demasiado estricta.",
      ],
      house: [
        "En casa: ámbito donde puedes volverte ‘excelente’ por devoción (profesión, arte, salud, espiritualidad, hogar…).",
        "Muy fuerte para las rutinas, la práctica diaria, la constancia.",
      ],
      aspects: [
        "Aspectos a Marte: potencia de esfuerzo / resistencia; cuidado con la rigidez.",
        "Aspectos a Neptuno: devoción inspirada; cuidado con las ilusiones y el sacrificio.",
      ],
      pitfalls: [
        "Leer Vesta solo como ‘privación’: es sobre todo foco y constancia.",
        "Olvidar el equilibrio: una Vesta demasiado fuerte = obsesión / dureza hacia uno mismo.",
      ],
    },
    {
      slug: "chiron",
      name: "Quirón",
      badge: "Herida • Sentido • Transmisión",
      kind: "wound",
      keywords: ["vulnerabilidad", "competencia", "sentido", "sanación", "mentor", "integración"],
      core:
        "Quirón describe una herida estructurante que empuja a desarrollar una competencia, una sabiduría y una capacidad de transmisión. No es ‘trágico’: es formativo.",
      sign: [
        "En signo: la coloración de la herida (identidad, emoción, relación, acción…).",
        "Se busca la báscula: del dolor a la pericia (sin definirse por la herida).",
      ],
      house: [
        "En casa: ámbito donde aprendes por experiencia directa, y luego donde puedes guiar.",
        "A menudo un terreno incómodo al principio, y luego una fuerza con el tiempo.",
      ],
      aspects: [
        "Aspectos al Sol/Luna: muy identitario/emocional; pide dulzura y madurez.",
        "Aspectos a Saturno: trabajo largo, sólido; cuidado con el juicio severo hacia uno mismo.",
      ],
      pitfalls: [
        "Interpretar Quirón como ‘desgracia’: es una dinámica, no una fatalidad.",
        "No vincularlo con la acción: la sanación pasa por elecciones concretas y repetidas.",
      ],
    },
  ],
};

export const asteroidesContent: Record<SeoLocale, AsteroidesContent> = { fr, en, es };
