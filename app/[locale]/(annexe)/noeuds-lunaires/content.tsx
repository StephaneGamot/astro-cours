import { Link } from "@/i18n/navigation";
import type { ReactNode } from "react";
import type { SeoLocale } from "@/lib/seo";

/* ====================================================================
   Noeuds lunaires — contenu localisé (fr / en / es)
   Les clés logiques (id de section, kind d'accent) sont identiques
   dans chaque langue ; seuls les textes sont traduits.
   ==================================================================== */

export type NoeudsContent = {
  meta: { title: string; description: string };
  jsonld: { headline: string; description: string; articleSection: string };
  hero: {
    eyebrow: string;
    h1: string;
    intro: ReactNode;
    highlights: string[];
    tocLabel: string;
  };
  sections: { id: string; label: string }[];
  defBox: { label: string; body: ReactNode };
  appIntro: ReactNode;
  imageAlt: string;
  definition: {
    title: string;
    isLabel: string;
    isItems: string[];
    isNotLabel: string;
    isNotItems: string[];
  };
  axe: {
    title: string;
    nnEyebrow: string;
    nnTitle: string;
    nnBadge: string;
    nnIntro: string;
    nnItems: string[];
    nsEyebrow: string;
    nsTitle: string;
    nsBadge: string;
    nsIntro: string;
    nsItems: string[];
    ruleLabel: string;
    ruleBody: ReactNode;
  };
  signeMaison: {
    title: string;
    signLabel: string;
    signItems: string[];
    houseLabel: string;
    houseItems: string[];
  };
  aspects: {
    title: string;
    conjLabel: string;
    conjBody: string;
    squareLabel: string;
    squareBody: string;
  };
  transits: {
    title: string;
    label: string;
    items: string[];
  };
  pitfalls: {
    title: string;
    errorsLabel: string;
    errorsItems: string[];
    goodLabel: string;
    goodItems: string[];
  };
  faqShort: {
    title: string;
    items: { q: string; a: string }[];
  };
  footer: { aspects: string; houses: string; transits: string };
  faqTitle: string;
  faq: { q: string; a: ReactNode }[];
  faqJsonLd: { name: string; text: string }[];
};

/* ============================== FR ============================== */
const fr: NoeudsContent = {
  meta: {
    title: "Nœuds lunaires : axe karmique & méthode",
    description:
      "Noeuds lunaires (Noeud Nord et Sud) : sens, axe évolutif, lecture par signe, maison et aspects, pièges courants. Découvrez notre méthode d'interprétation !",
  },
  jsonld: {
    headline: "Noeuds lunaires — Noeud Nord & Noeud Sud",
    description:
      "Cours pro sur l’axe des noeuds lunaires : définition, lecture par signe/maison, aspects, transits et méthode.",
    articleSection: "Astrologie",
  },
  hero: {
    eyebrow: "Cours d’astrologie — Noeuds lunaires",
    h1: "Noeud Nord & Noeud Sud",
    intro: (
      <>
        Les noeuds lunaires ne sont pas des “planètes”. Ce sont des points
        d’intersection (orbite de la Lune / écliptique) qui décrivent un{" "}
        <span className="text-white">axe d’évolution</span> : ce qui est
        familier (NS) et ce qui fait grandir (NN).
      </>
    ),
    highlights: [
      "Noeud Nord = direction de croissance",
      "Noeud Sud = zone connue / automatique",
      "Lecture par axe (toujours)",
      "Signe + maison + aspects = synthèse",
    ],
    tocLabel: "Sommaire",
  },
  sections: [
    { id: "definition", label: "Définition" },
    { id: "axe", label: "L’axe NN/NS" },
    { id: "signe-maison", label: "Signe & Maison" },
    { id: "aspects", label: "Aspects" },
    { id: "transits", label: "Transits" },
    { id: "piges", label: "Pièges" },
    { id: "faq", label: "FAQ" },
  ],
  defBox: {
    label: "Définition",
    body: (
      <>
        Les <strong>noeuds lunaires</strong> sont deux points d'intersection entre l'orbite de la Lune et l'écliptique ; en astrologie, ils forment un axe d'évolution reliant le <strong>Noeud Nord</strong> (direction de croissance) au <strong>Noeud Sud</strong> (zone d'automatisme), à lire en lien avec les <Link href="/transits">transits</Link> et les <Link href="/aspects">aspects</Link>.
      </>
    ),
  },
  appIntro: (
    <>
      Vous voulez comprendre ce que révèlent les <strong>noeuds lunaires</strong> dans votre thème natal ? Beaucoup de sources confondent karma, destin et prédiction sans donner de méthode exploitable. Cette page propose une lecture claire de l'axe Noeud Nord / Noeud Sud par signe, maison et aspects, avec les pièges à éviter et les bonnes pratiques.
    </>
  ),
  imageAlt: "Illustration symbolique des nœuds lunaires nord et sud en astrologie",
  definition: {
    title: "Qu'est-ce que les noeuds lunaires en astrologie ?",
    isLabel: "Ce que c’est",
    isItems: [
      "Deux points : Noeud Nord (NN) et Noeud Sud (NS), toujours opposés (axe).",
      "Un axe = un apprentissage : quitter l’automatisme (NS) sans renier ses compétences.",
      "Lecture moderne : dynamique de croissance / maturité, très utile en coaching.",
    ],
    isNotLabel: "Ce que ce n’est pas",
    isNotItems: [
      "Un “destin figé” : c’est une direction, pas une condamnation.",
      "Une planète maléfique ou bénéfique : ça ne marche pas comme ça.",
      "Un jugement moral : on parle de facilité/automatisme vs effort conscient.",
    ],
  },
  axe: {
    title: "Comment fonctionne l’axe Noeud Nord / Noeud Sud ?",
    nnEyebrow: "Noeud Nord (NN)",
    nnTitle: "Cap de croissance",
    nnBadge: "Expansion",
    nnIntro:
      "Le Noeud Nord décrit la direction dans laquelle on devient plus complet : effort conscient, nouvelles compétences, posture plus mature.",
    nnItems: [
      "Zone moins automatique → apprentissage réel",
      "Décisions qui te font grandir (pas seulement te rassurer)",
      "Tu y gagnes en maîtrise avec le temps",
    ],
    nsEyebrow: "Noeud Sud (NS)",
    nsTitle: "Zone connue",
    nsBadge: "Automatisme",
    nsIntro:
      "Le Noeud Sud décrit ce qui est déjà intégré : talents naturels, réflexes, “mode survie”. Excellent… mais parfois enfermant.",
    nsItems: [
      "Compétence acquise → confort",
      "Tendance à répéter (même quand ça ne marche plus)",
      "À garder comme ressource, pas comme prison",
    ],
    ruleLabel: "Règle d’or",
    ruleBody: (
      <>
        On lit toujours <span className="text-text">l’axe</span> : NN = direction, NS = base.
        Le travail consiste à transférer le talent NS vers la posture NN.
      </>
    ),
  },
  signeMaison: {
    title: "Comment lire les noeuds lunaires par signe et maison ?",
    signLabel: "Signe (le style)",
    signItems: [
      "NN en signe = la manière de grandir (style, posture, énergie).",
      "NS en signe = réflexe naturel (confort, sécurité, “déjà vu”).",
      "On cherche l’équilibre : maturité du NN, sans caricature du NS.",
    ],
    houseLabel: "Maison (le domaine)",
    houseItems: [
      "NN en maison = là où la vie pousse à évoluer (expériences-clés).",
      "NS en maison = domaine déjà maîtrisé, parfois surinvesti.",
      "Les événements “marquants” activent souvent l’axe par transits.",
    ],
  },
  aspects: {
    title: "Quels aspects aux noeuds lunaires faut-il surveiller ?",
    conjLabel: "Conjonctions",
    conjBody:
      "Une planète conjointe au NN “ouvre la porte” : elle devient un levier de croissance. Conjointe au NS : réflexe puissant (talent, mais aussi attachements).",
    squareLabel: "Carrés / oppositions",
    squareBody:
      "Friction, choix, arbitrage. Très formateur : incarner le NN sans renier les ressources du NS.",
  },
  transits: {
    title: "Quand les transits activent-ils les noeuds lunaires ?",
    label: "Ce que tu cherches",
    items: [
      "Transits sur l’axe NN/NS : périodes charnières (rencontres, décisions, virages).",
      "Transits des luminaires (Soleil/Lune) : activation rapide, événementielle.",
      "Transits de Saturne/Uranus/Pluton : réorientation profonde (plus lent, plus durable).",
    ],
  },
  pitfalls: {
    title: "Quelles erreurs éviter avec les noeuds lunaires ?",
    errorsLabel: "Erreurs fréquentes",
    errorsItems: [
      "Chercher une “prédiction” au lieu d’une direction d’évolution.",
      "Diaboliser le Noeud Sud (alors que c’est une ressource).",
      "Lire NN/NS sans signe/maison/aspects (trop vague).",
      "Croire que NN = réussite immédiate (c’est progressif).",
    ],
    goodLabel: "Bonnes pratiques",
    goodItems: [
      "Toujours raisonner en axe (NN + NS).",
      "Traduire l’axe en comportements concrets (habitudes).",
      "S’appuyer sur les forces NS pour servir un objectif NN.",
      "Regarder les transits pour dater les phases d’activation.",
    ],
  },
  faqShort: {
    title: "Questions fréquentes sur les noeuds lunaires",
    items: [
      {
        q: "Est-ce que les noeuds = “karma” ?",
        a: "Approche symbolique oui ; en pratique moderne : un axe d’apprentissage (automatisme vs croissance).",
      },
      {
        q: "NN = “bien” et NS = “mal” ?",
        a: "Non. NS = talent et confort. NN = direction qui fait grandir. Le but = intégrer les deux.",
      },
      {
        q: "Qu’est-ce qui compte le plus : signe ou maison ?",
        a: "Les deux : signe = style, maison = domaine. Les aspects montrent comment c’est vécu.",
      },
      {
        q: "Les transits aux noeuds sont-ils importants ?",
        a: "Oui : ils marquent souvent des virages, surtout s’ils touchent aussi Soleil/Lune/Ascendant/angles.",
      },
    ],
  },
  footer: { aspects: "Aspects", houses: "Maisons", transits: "Transits" },
  faqTitle: "Questions fréquentes sur les noeuds lunaires",
  faq: [
    {
      q: "Les noeuds lunaires sont-ils liés au karma ?",
      a: (
        <>
          Dans l'approche traditionnelle, on parle souvent de <strong>karma</strong>. En astrologie moderne, les <strong>noeuds lunaires</strong> décrivent plutôt un axe d'apprentissage : le <Link href="/noeuds-lunaires#axe">Noeud Sud</Link> représente les automatismes acquis, tandis que le Noeud Nord indique la direction de croissance consciente.
        </>
      ),
    },
    {
      q: "Faut-il lire le Noeud Nord par signe ou par maison ?",
      a: (
        <>
          Les deux sont complémentaires : le <strong>signe</strong> donne le style (comment grandir), la <strong>maison</strong> donne le domaine (où grandir). Les <Link href="/aspects">aspects</Link> aux noeuds montrent comment l'axe est vécu concrètement.
        </>
      ),
    },
    {
      q: "Que se passe-t-il lors d'un transit sur les noeuds lunaires ?",
      a: (
        <>
          Un <strong>transit sur les noeuds lunaires</strong> marque souvent un virage : rencontre, décision importante ou réorientation. Les <Link href="/transits">transits lents</Link> (Saturne, Uranus, Pluton) sur cet axe sont particulièrement structurants et durables.
        </>
      ),
    },
    {
      q: "Le Noeud Sud est-il négatif en astrologie ?",
      a: (
        <>
          Non. Le <strong>Noeud Sud</strong> représente un talent acquis et une zone de confort, pas un défaut. Le travail consiste à transférer ces compétences au service de la direction du <strong>Noeud Nord</strong>, sans rejeter ce qui est déjà maîtrisé.
        </>
      ),
    },
  ],
  faqJsonLd: [
    {
      name: "Les noeuds lunaires sont-ils liés au karma ?",
      text: "Dans l'approche traditionnelle, on parle souvent de karma. En astrologie moderne, les noeuds lunaires décrivent plutôt un axe d'apprentissage : le Noeud Sud représente les automatismes acquis, tandis que le Noeud Nord indique la direction de croissance consciente.",
    },
    {
      name: "Faut-il lire le Noeud Nord par signe ou par maison ?",
      text: "Les deux sont complémentaires : le signe donne le style (comment grandir), la maison donne le domaine (où grandir). Les aspects aux noeuds montrent comment l'axe est vécu concrètement.",
    },
    {
      name: "Que se passe-t-il lors d'un transit sur les noeuds lunaires ?",
      text: "Un transit sur les noeuds lunaires marque souvent un virage : rencontre, décision importante ou réorientation. Les transits lents (Saturne, Uranus, Pluton) sur cet axe sont particulièrement structurants et durables.",
    },
    {
      name: "Le Noeud Sud est-il négatif en astrologie ?",
      text: "Non. Le Noeud Sud représente un talent acquis et une zone de confort, pas un défaut. Le travail consiste à transférer ces compétences au service de la direction du Noeud Nord, sans rejeter ce qui est déjà maîtrisé.",
    },
  ],
};

/* ============================== EN ============================== */
const en: NoeudsContent = {
  meta: {
    title: "Lunar nodes: karmic axis & method",
    description:
      "Lunar nodes (North Node and South Node): meaning, evolutionary axis, reading by sign, house and aspects, common pitfalls. Discover our interpretation method!",
  },
  jsonld: {
    headline: "Lunar nodes — North Node & South Node",
    description:
      "Professional course on the axis of the lunar nodes: definition, reading by sign/house, aspects, transits and method.",
    articleSection: "Astrology",
  },
  hero: {
    eyebrow: "Astrology course — Lunar nodes",
    h1: "North Node & South Node",
    intro: (
      <>
        The lunar nodes are not “planets”. They are intersection points
        (the Moon’s orbit / the ecliptic) that describe an{" "}
        <span className="text-white">axis of evolution</span>: what is
        familiar (SN) and what makes you grow (NN).
      </>
    ),
    highlights: [
      "North Node = direction of growth",
      "South Node = known / automatic zone",
      "Always read as an axis",
      "Sign + house + aspects = synthesis",
    ],
    tocLabel: "Contents",
  },
  sections: [
    { id: "definition", label: "Definition" },
    { id: "axe", label: "The NN/SN axis" },
    { id: "signe-maison", label: "Sign & House" },
    { id: "aspects", label: "Aspects" },
    { id: "transits", label: "Transits" },
    { id: "piges", label: "Pitfalls" },
    { id: "faq", label: "FAQ" },
  ],
  defBox: {
    label: "Definition",
    body: (
      <>
        The <strong>lunar nodes</strong> are two intersection points between the Moon’s orbit and the ecliptic; in astrology, they form an axis of evolution linking the <strong>North Node</strong> (direction of growth) to the <strong>South Node</strong> (zone of automatism), to be read together with the <Link href="/transits">transits</Link> and the <Link href="/aspects">aspects</Link>.
      </>
    ),
  },
  appIntro: (
    <>
      Do you want to understand what the <strong>lunar nodes</strong> reveal in your natal chart? Many sources confuse karma, fate and prediction without offering a workable method. This page provides a clear reading of the North Node / South Node axis by sign, house and aspects, with the pitfalls to avoid and the best practices.
    </>
  ),
  imageAlt: "Symbolic illustration of the north and south lunar nodes in astrology",
  definition: {
    title: "What are the lunar nodes in astrology?",
    isLabel: "What it is",
    isItems: [
      "Two points: North Node (NN) and South Node (SN), always opposed (an axis).",
      "An axis = a lesson: leaving automatism (SN) behind without disowning your skills.",
      "Modern reading: a dynamic of growth / maturity, very useful in coaching.",
    ],
    isNotLabel: "What it is not",
    isNotItems: [
      "A “fixed destiny”: it is a direction, not a sentence.",
      "A malefic or benefic planet: that is not how it works.",
      "A moral judgement: we speak of ease/automatism vs conscious effort.",
    ],
  },
  axe: {
    title: "How does the North Node / South Node axis work?",
    nnEyebrow: "North Node (NN)",
    nnTitle: "Bearing of growth",
    nnBadge: "Expansion",
    nnIntro:
      "The North Node describes the direction in which you become more complete: conscious effort, new skills, a more mature stance.",
    nnItems: [
      "A less automatic zone → real learning",
      "Decisions that make you grow (not only reassure you)",
      "You gain mastery here over time",
    ],
    nsEyebrow: "South Node (SN)",
    nsTitle: "Known zone",
    nsBadge: "Automatism",
    nsIntro:
      "The South Node describes what is already integrated: natural talents, reflexes, “survival mode”. Excellent… but sometimes confining.",
    nsItems: [
      "Acquired skill → comfort",
      "A tendency to repeat (even when it no longer works)",
      "To keep as a resource, not as a prison",
    ],
    ruleLabel: "Golden rule",
    ruleBody: (
      <>
        Always read <span className="text-text">the axis</span>: NN = direction, SN = base.
        The work consists of transferring the SN talent toward the NN stance.
      </>
    ),
  },
  signeMaison: {
    title: "How do you read the lunar nodes by sign and house?",
    signLabel: "Sign (the style)",
    signItems: [
      "NN in a sign = the way you grow (style, stance, energy).",
      "SN in a sign = natural reflex (comfort, security, “déjà vu”).",
      "Seek balance: the maturity of the NN, without a caricature of the SN.",
    ],
    houseLabel: "House (the field)",
    houseItems: [
      "NN in a house = where life pushes you to evolve (key experiences).",
      "SN in a house = a field already mastered, sometimes over-invested.",
      "“Defining” events often activate the axis through transits.",
    ],
  },
  aspects: {
    title: "Which aspects to the lunar nodes should you watch?",
    conjLabel: "Conjunctions",
    conjBody:
      "A planet conjunct the NN “opens the door”: it becomes a lever for growth. Conjunct the SN: a powerful reflex (talent, but also attachments).",
    squareLabel: "Squares / oppositions",
    squareBody:
      "Friction, choice, arbitration. Highly formative: embodying the NN without disowning the resources of the SN.",
  },
  transits: {
    title: "When do transits activate the lunar nodes?",
    label: "What you are looking for",
    items: [
      "Transits to the NN/SN axis: pivotal periods (encounters, decisions, turning points).",
      "Transits of the luminaries (Sun/Moon): fast, event-driven activation.",
      "Transits of Saturn/Uranus/Pluto: deep reorientation (slower, more lasting).",
    ],
  },
  pitfalls: {
    title: "Which mistakes should you avoid with the lunar nodes?",
    errorsLabel: "Common mistakes",
    errorsItems: [
      "Looking for a “prediction” instead of a direction of evolution.",
      "Demonising the South Node (when it is a resource).",
      "Reading NN/SN without sign/house/aspects (too vague).",
      "Believing that the NN = immediate success (it is gradual).",
    ],
    goodLabel: "Best practices",
    goodItems: [
      "Always reason in terms of the axis (NN + SN).",
      "Translate the axis into concrete behaviours (habits).",
      "Lean on the SN strengths to serve an NN goal.",
      "Watch the transits to date the activation phases.",
    ],
  },
  faqShort: {
    title: "Frequently asked questions about the lunar nodes",
    items: [
      {
        q: "Do the nodes = “karma”?",
        a: "Symbolically, yes; in modern practice: an axis of learning (automatism vs growth).",
      },
      {
        q: "Is NN = “good” and SN = “bad”?",
        a: "No. SN = talent and comfort. NN = the direction that makes you grow. The goal = integrate both.",
      },
      {
        q: "What matters most: sign or house?",
        a: "Both: sign = style, house = field. The aspects show how it is experienced.",
      },
      {
        q: "Are transits to the nodes important?",
        a: "Yes: they often mark turning points, especially when they also touch the Sun/Moon/Ascendant/angles.",
      },
    ],
  },
  footer: { aspects: "Aspects", houses: "Houses", transits: "Transits" },
  faqTitle: "Frequently asked questions about the lunar nodes",
  faq: [
    {
      q: "Are the lunar nodes linked to karma?",
      a: (
        <>
          In the traditional approach, people often speak of <strong>karma</strong>. In modern astrology, the <strong>lunar nodes</strong> describe instead an axis of learning: the <Link href="/noeuds-lunaires#axe">South Node</Link> represents acquired automatisms, while the North Node indicates the direction of conscious growth.
        </>
      ),
    },
    {
      q: "Should you read the North Node by sign or by house?",
      a: (
        <>
          The two are complementary: the <strong>sign</strong> gives the style (how to grow), the <strong>house</strong> gives the field (where to grow). The <Link href="/aspects">aspects</Link> to the nodes show how the axis is experienced in practice.
        </>
      ),
    },
    {
      q: "What happens during a transit to the lunar nodes?",
      a: (
        <>
          A <strong>transit to the lunar nodes</strong> often marks a turning point: an encounter, an important decision or a reorientation. The <Link href="/transits">slow transits</Link> (Saturn, Uranus, Pluto) over this axis are particularly structuring and lasting.
        </>
      ),
    },
    {
      q: "Is the South Node negative in astrology?",
      a: (
        <>
          No. The <strong>South Node</strong> represents an acquired talent and a comfort zone, not a flaw. The work consists of transferring those skills in service of the direction of the <strong>North Node</strong>, without rejecting what is already mastered.
        </>
      ),
    },
  ],
  faqJsonLd: [
    {
      name: "Are the lunar nodes linked to karma?",
      text: "In the traditional approach, people often speak of karma. In modern astrology, the lunar nodes describe instead an axis of learning: the South Node represents acquired automatisms, while the North Node indicates the direction of conscious growth.",
    },
    {
      name: "Should you read the North Node by sign or by house?",
      text: "The two are complementary: the sign gives the style (how to grow), the house gives the field (where to grow). The aspects to the nodes show how the axis is experienced in practice.",
    },
    {
      name: "What happens during a transit to the lunar nodes?",
      text: "A transit to the lunar nodes often marks a turning point: an encounter, an important decision or a reorientation. The slow transits (Saturn, Uranus, Pluto) over this axis are particularly structuring and lasting.",
    },
    {
      name: "Is the South Node negative in astrology?",
      text: "No. The South Node represents an acquired talent and a comfort zone, not a flaw. The work consists of transferring those skills in service of the direction of the North Node, without rejecting what is already mastered.",
    },
  ],
};

/* ============================== ES ============================== */
const es: NoeudsContent = {
  meta: {
    title: "Nodos lunares: eje kármico y método",
    description:
      "Nodos lunares (Nodo Norte y Sur): sentido, eje evolutivo, lectura por signo, casa y aspectos, trampas frecuentes. ¡Descubre nuestro método de interpretación!",
  },
  jsonld: {
    headline: "Nodos lunares — Nodo Norte y Nodo Sur",
    description:
      "Curso profesional sobre el eje de los nodos lunares: definición, lectura por signo/casa, aspectos, tránsitos y método.",
    articleSection: "Astrología",
  },
  hero: {
    eyebrow: "Curso de astrología — Nodos lunares",
    h1: "Nodo Norte y Nodo Sur",
    intro: (
      <>
        Los nodos lunares no son “planetas”. Son puntos de intersección
        (órbita de la Luna / eclíptica) que describen un{" "}
        <span className="text-white">eje de evolución</span>: lo que resulta
        familiar (NS) y lo que te hace crecer (NN).
      </>
    ),
    highlights: [
      "Nodo Norte = dirección de crecimiento",
      "Nodo Sur = zona conocida / automática",
      "Lectura por eje (siempre)",
      "Signo + casa + aspectos = síntesis",
    ],
    tocLabel: "Índice",
  },
  sections: [
    { id: "definition", label: "Definición" },
    { id: "axe", label: "El eje NN/NS" },
    { id: "signe-maison", label: "Signo y Casa" },
    { id: "aspects", label: "Aspectos" },
    { id: "transits", label: "Tránsitos" },
    { id: "piges", label: "Trampas" },
    { id: "faq", label: "FAQ" },
  ],
  defBox: {
    label: "Definición",
    body: (
      <>
        Los <strong>nodos lunares</strong> son dos puntos de intersección entre la órbita de la Luna y la eclíptica; en astrología forman un eje de evolución que une el <strong>Nodo Norte</strong> (dirección de crecimiento) con el <strong>Nodo Sur</strong> (zona de automatismo), que se lee en relación con los <Link href="/transits">tránsitos</Link> y los <Link href="/aspects">aspectos</Link>.
      </>
    ),
  },
  appIntro: (
    <>
      ¿Quieres entender qué revelan los <strong>nodos lunares</strong> en tu carta natal? Muchas fuentes confunden karma, destino y predicción sin ofrecer un método aplicable. Esta página propone una lectura clara del eje Nodo Norte / Nodo Sur por signo, casa y aspectos, con las trampas que evitar y las buenas prácticas.
    </>
  ),
  imageAlt: "Ilustración simbólica de los nodos lunares norte y sur en astrología",
  definition: {
    title: "¿Qué son los nodos lunares en astrología?",
    isLabel: "Lo que es",
    isItems: [
      "Dos puntos: Nodo Norte (NN) y Nodo Sur (NS), siempre opuestos (un eje).",
      "Un eje = un aprendizaje: dejar el automatismo (NS) sin renegar de tus competencias.",
      "Lectura moderna: una dinámica de crecimiento / madurez, muy útil en coaching.",
    ],
    isNotLabel: "Lo que no es",
    isNotItems: [
      "Un “destino fijo”: es una dirección, no una condena.",
      "Un planeta maléfico o benéfico: no funciona así.",
      "Un juicio moral: hablamos de facilidad/automatismo vs esfuerzo consciente.",
    ],
  },
  axe: {
    title: "¿Cómo funciona el eje Nodo Norte / Nodo Sur?",
    nnEyebrow: "Nodo Norte (NN)",
    nnTitle: "Rumbo de crecimiento",
    nnBadge: "Expansión",
    nnIntro:
      "El Nodo Norte describe la dirección en la que uno se vuelve más completo: esfuerzo consciente, nuevas competencias, una postura más madura.",
    nnItems: [
      "Zona menos automática → aprendizaje real",
      "Decisiones que te hacen crecer (no solo tranquilizarte)",
      "Aquí ganas maestría con el tiempo",
    ],
    nsEyebrow: "Nodo Sur (NS)",
    nsTitle: "Zona conocida",
    nsBadge: "Automatismo",
    nsIntro:
      "El Nodo Sur describe lo que ya está integrado: talentos naturales, reflejos, “modo supervivencia”. Excelente… pero a veces aprisiona.",
    nsItems: [
      "Competencia adquirida → comodidad",
      "Tendencia a repetir (incluso cuando ya no funciona)",
      "Conservarlo como recurso, no como prisión",
    ],
    ruleLabel: "Regla de oro",
    ruleBody: (
      <>
        Siempre se lee <span className="text-text">el eje</span>: NN = dirección, NS = base.
        El trabajo consiste en transferir el talento NS hacia la postura NN.
      </>
    ),
  },
  signeMaison: {
    title: "¿Cómo leer los nodos lunares por signo y casa?",
    signLabel: "Signo (el estilo)",
    signItems: [
      "NN en signo = la manera de crecer (estilo, postura, energía).",
      "NS en signo = reflejo natural (comodidad, seguridad, “déjà vu”).",
      "Se busca el equilibrio: la madurez del NN, sin la caricatura del NS.",
    ],
    houseLabel: "Casa (el ámbito)",
    houseItems: [
      "NN en casa = donde la vida empuja a evolucionar (experiencias clave).",
      "NS en casa = un ámbito ya dominado, a veces sobreinvertido.",
      "Los acontecimientos “marcantes” suelen activar el eje por tránsitos.",
    ],
  },
  aspects: {
    title: "¿Qué aspectos a los nodos lunares hay que vigilar?",
    conjLabel: "Conjunciones",
    conjBody:
      "Un planeta en conjunción con el NN “abre la puerta”: se convierte en una palanca de crecimiento. En conjunción con el NS: un reflejo potente (talento, pero también apegos).",
    squareLabel: "Cuadraturas / oposiciones",
    squareBody:
      "Fricción, elección, arbitraje. Muy formativo: encarnar el NN sin renegar de los recursos del NS.",
  },
  transits: {
    title: "¿Cuándo activan los tránsitos los nodos lunares?",
    label: "Lo que buscas",
    items: [
      "Tránsitos sobre el eje NN/NS: periodos bisagra (encuentros, decisiones, giros).",
      "Tránsitos de los luminares (Sol/Luna): activación rápida, ligada a acontecimientos.",
      "Tránsitos de Saturno/Urano/Plutón: reorientación profunda (más lenta, más duradera).",
    ],
  },
  pitfalls: {
    title: "¿Qué errores evitar con los nodos lunares?",
    errorsLabel: "Errores frecuentes",
    errorsItems: [
      "Buscar una “predicción” en lugar de una dirección de evolución.",
      "Demonizar el Nodo Sur (cuando es un recurso).",
      "Leer NN/NS sin signo/casa/aspectos (demasiado vago).",
      "Creer que NN = éxito inmediato (es progresivo).",
    ],
    goodLabel: "Buenas prácticas",
    goodItems: [
      "Razonar siempre por eje (NN + NS).",
      "Traducir el eje en comportamientos concretos (hábitos).",
      "Apoyarse en las fuerzas del NS para servir un objetivo NN.",
      "Mirar los tránsitos para fechar las fases de activación.",
    ],
  },
  faqShort: {
    title: "Preguntas frecuentes sobre los nodos lunares",
    items: [
      {
        q: "¿Los nodos = “karma”?",
        a: "De forma simbólica sí; en la práctica moderna: un eje de aprendizaje (automatismo vs crecimiento).",
      },
      {
        q: "¿NN = “bueno” y NS = “malo”?",
        a: "No. NS = talento y comodidad. NN = la dirección que hace crecer. El objetivo = integrar ambos.",
      },
      {
        q: "¿Qué cuenta más: el signo o la casa?",
        a: "Ambos: signo = estilo, casa = ámbito. Los aspectos muestran cómo se vive.",
      },
      {
        q: "¿Son importantes los tránsitos a los nodos?",
        a: "Sí: suelen marcar giros, sobre todo si también tocan el Sol/Luna/Ascendente/ángulos.",
      },
    ],
  },
  footer: { aspects: "Aspectos", houses: "Casas", transits: "Tránsitos" },
  faqTitle: "Preguntas frecuentes sobre los nodos lunares",
  faq: [
    {
      q: "¿Están los nodos lunares ligados al karma?",
      a: (
        <>
          En el enfoque tradicional se habla a menudo de <strong>karma</strong>. En astrología moderna, los <strong>nodos lunares</strong> describen más bien un eje de aprendizaje: el <Link href="/noeuds-lunaires#axe">Nodo Sur</Link> representa los automatismos adquiridos, mientras que el Nodo Norte indica la dirección de crecimiento consciente.
        </>
      ),
    },
    {
      q: "¿Hay que leer el Nodo Norte por signo o por casa?",
      a: (
        <>
          Ambos son complementarios: el <strong>signo</strong> da el estilo (cómo crecer), la <strong>casa</strong> da el ámbito (dónde crecer). Los <Link href="/aspects">aspectos</Link> a los nodos muestran cómo se vive el eje en la práctica.
        </>
      ),
    },
    {
      q: "¿Qué ocurre durante un tránsito a los nodos lunares?",
      a: (
        <>
          Un <strong>tránsito a los nodos lunares</strong> marca a menudo un giro: un encuentro, una decisión importante o una reorientación. Los <Link href="/transits">tránsitos lentos</Link> (Saturno, Urano, Plutón) sobre este eje son especialmente estructurantes y duraderos.
        </>
      ),
    },
    {
      q: "¿Es negativo el Nodo Sur en astrología?",
      a: (
        <>
          No. El <strong>Nodo Sur</strong> representa un talento adquirido y una zona de confort, no un defecto. El trabajo consiste en transferir esas competencias al servicio de la dirección del <strong>Nodo Norte</strong>, sin rechazar lo que ya se domina.
        </>
      ),
    },
  ],
  faqJsonLd: [
    {
      name: "¿Están los nodos lunares ligados al karma?",
      text: "En el enfoque tradicional se habla a menudo de karma. En astrología moderna, los nodos lunares describen más bien un eje de aprendizaje: el Nodo Sur representa los automatismos adquiridos, mientras que el Nodo Norte indica la dirección de crecimiento consciente.",
    },
    {
      name: "¿Hay que leer el Nodo Norte por signo o por casa?",
      text: "Ambos son complementarios: el signo da el estilo (cómo crecer), la casa da el ámbito (dónde crecer). Los aspectos a los nodos muestran cómo se vive el eje en la práctica.",
    },
    {
      name: "¿Qué ocurre durante un tránsito a los nodos lunares?",
      text: "Un tránsito a los nodos lunares marca a menudo un giro: un encuentro, una decisión importante o una reorientación. Los tránsitos lentos (Saturno, Urano, Plutón) sobre este eje son especialmente estructurantes y duraderos.",
    },
    {
      name: "¿Es negativo el Nodo Sur en astrología?",
      text: "No. El Nodo Sur representa un talento adquirido y una zona de confort, no un defecto. El trabajo consiste en transferir esas competencias al servicio de la dirección del Nodo Norte, sin rechazar lo que ya se domina.",
    },
  ],
};

export const noeudsContent: Record<SeoLocale, NoeudsContent> = { fr, en, es };
