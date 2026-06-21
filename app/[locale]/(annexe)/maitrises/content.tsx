import { Link } from "@/i18n/navigation";
import type { ReactNode } from "react";
import type { SeoLocale } from "@/lib/seo";

/* ====================================================================
   Maîtrises & dignités planétaires — contenu localisé (fr / en / es)
   Les clés logiques (slug de signe, noms de planètes côté data,
   id de section) restent identiques ; seuls les textes sont traduits.
   Les noms de planètes affichés viennent d'un label map (planetLabel).
   ==================================================================== */

export type Planet =
  | "Soleil"
  | "Lune"
  | "Mercure"
  | "Vénus"
  | "Mars"
  | "Jupiter"
  | "Saturne"
  | "Uranus"
  | "Neptune"
  | "Pluton";

export type MaitrisesContent = {
  meta: { title: string; description: string };
  jsonld: { headline: string; description: string; articleSection: string };
  hero: {
    eyebrow: string;
    h1: string;
    intro: string;
    tags: string[];
    imgAlt: string;
  };
  defBox: { label: string; body: ReactNode };
  appIntro: ReactNode;
  tocLabel: string;
  bases: {
    title: string;
    quickLabel: string;
    quick: ReactNode[];
    teachLabel: string;
    teach: string;
  };
  /** Label map pour les noms de planètes affichés (clé logique = FR). */
  planetLabel: Record<Planet, string>;
  signCard: {
    dignityEyebrow: string;
    elementLabel: string;
    modeLabel: string;
    polariteLabel: string;
    oppositeLabel: string;
    modernNote: (planet: string) => string;
    seeSignLink: string;
    maitriseLabel: string;
    exaltationLabel: string;
    exilLabel: string;
    chuteLabel: string;
    whyLabel: string;
    noExaltation: string;
    noChute: string;
    fallbackExaltSign: string;
  };
  meanings: {
    domicile: (planet: string, signName: string) => string;
    exaltation: (planet: string, signName: string) => string;
    detriment: (planet: string, oppositeSignName: string) => string;
    fall: (planet: string, oppositeOfExaltSignName: string) => string;
    whyRuler: (planet: Planet, element?: string, mode?: string) => string;
    whyExaltation: string;
    whyDetriment: string;
    whyFall: string;
  };
  footer: {
    next: ReactNode;
    blogCta: string;
    signs: string;
    planets: string;
    houses: string;
  };
  faqTitle: string;
  faq: { q: string; a: ReactNode }[];
  faqJsonLd: { name: string; text: string }[];
};

/* ====================================================================
   Descriptions par planète (utilisées dans whyRuler) — par langue.
   ==================================================================== */

const byPlanetFr: Record<Planet, string> = {
  Soleil:
    " Le Soleil symbolise identité, volonté, rayonnement : il structure le “je” et donne une direction.",
  Lune:
    " La Lune symbolise besoins, sécurité, mémoire : elle parle d’attachement, de soin et de régulation émotionnelle.",
  Mercure:
    " Mercure symbolise pensée, langage, liens : il gouverne l’apprentissage, l’analyse et les échanges.",
  Vénus:
    " Vénus symbolise valeur, désir, harmonie : elle parle de relation, d’art, d’attirance et de plaisir.",
  Mars:
    " Mars symbolise action, désir, combat : il gouverne l’initiative, le courage et la capacité à trancher.",
  Jupiter:
    " Jupiter symbolise expansion, sens, confiance : il gouverne la croissance, la vision et la quête de sens.",
  Saturne:
    " Saturne symbolise structure, limite, responsabilité : il gouverne la consolidation, le temps et la rigueur.",
  Uranus:
    " Uranus symbolise rupture, liberté, innovation : il gouverne l’indépendance et la réinvention.",
  Neptune:
    " Neptune symbolise inspiration, idéal, dissolution : il gouverne l’empathie, le rêve et la porosité.",
  Pluton:
    " Pluton symbolise intensité, transformation, pouvoir : il gouverne les crises, les mues et la profondeur.",
};

const byPlanetEn: Record<Planet, string> = {
  Soleil:
    " The Sun symbolises identity, will, radiance: it structures the “I” and gives a direction.",
  Lune:
    " The Moon symbolises needs, security, memory: it speaks of attachment, care and emotional regulation.",
  Mercure:
    " Mercury symbolises thought, language, links: it governs learning, analysis and exchanges.",
  Vénus:
    " Venus symbolises worth, desire, harmony: it speaks of relationship, art, attraction and pleasure.",
  Mars:
    " Mars symbolises action, desire, combat: it governs initiative, courage and the ability to decide.",
  Jupiter:
    " Jupiter symbolises expansion, meaning, confidence: it governs growth, vision and the quest for meaning.",
  Saturne:
    " Saturn symbolises structure, limit, responsibility: it governs consolidation, time and rigour.",
  Uranus:
    " Uranus symbolises rupture, freedom, innovation: it governs independence and reinvention.",
  Neptune:
    " Neptune symbolises inspiration, ideal, dissolution: it governs empathy, dream and porosity.",
  Pluton:
    " Pluto symbolises intensity, transformation, power: it governs crises, moltings and depth.",
};

const byPlanetEs: Record<Planet, string> = {
  Soleil:
    " El Sol simboliza identidad, voluntad, irradiación: estructura el “yo” y da una dirección.",
  Lune:
    " La Luna simboliza necesidades, seguridad, memoria: habla de apego, cuidado y regulación emocional.",
  Mercure:
    " Mercurio simboliza pensamiento, lenguaje, vínculos: gobierna el aprendizaje, el análisis y los intercambios.",
  Vénus:
    " Venus simboliza valor, deseo, armonía: habla de relación, arte, atracción y placer.",
  Mars:
    " Marte simboliza acción, deseo, combate: gobierna la iniciativa, el coraje y la capacidad de decidir.",
  Jupiter:
    " Júpiter simboliza expansión, sentido, confianza: gobierna el crecimiento, la visión y la búsqueda de sentido.",
  Saturne:
    " Saturno simboliza estructura, límite, responsabilidad: gobierna la consolidación, el tiempo y el rigor.",
  Uranus:
    " Urano simboliza ruptura, libertad, innovación: gobierna la independencia y la reinvención.",
  Neptune:
    " Neptuno simboliza inspiración, ideal, disolución: gobierna la empatía, el sueño y la porosidad.",
  Pluton:
    " Plutón simboliza intensidad, transformación, poder: gobierna las crisis, las mudas y la profundidad.",
};

/* ============================== FR ============================== */
const fr: MaitrisesContent = {
  meta: {
    title: "Maîtrises, exils & dignités planétaires",
    description:
      "Dignités essentielles signe par signe : planète maîtresse, exaltation, exil et chute. Logique astrologique et repères clairs. Découvrez notre cours !",
  },
  jsonld: {
    headline: "Maîtrises, exils & dignités planétaires",
    description:
      "Dignités essentielles signe par signe : planète maîtresse, exaltation, exil et chute. Logique astrologique et repères clairs.",
    articleSection: "Astrologie",
  },
  hero: {
    eyebrow: "Cours d’astrologie — Dignités essentielles",
    h1: "Maîtrises, exaltations, exils & chutes",
    intro:
      "Comprendre les dignités planétaires, ce n’est pas réciter un tableau : c’est saisir la logique profonde entre une planète, un signe, un style d’expression et un terrain d’apprentissage.",
    tags: [
      "Domicile = terrain naturel",
      "Exaltation = mise en valeur",
      "Exil = adaptation",
      "Chute = apprentissage",
    ],
    imgAlt: "Illustration symbolique des dignités planétaires",
  },
  defBox: {
    label: "Définition",
    body: (
      <>
        Les <strong>dignités planétaires</strong> (ou maîtrises) désignent le lien entre une <Link href="/#planetes">planète</Link> et un <Link href="/#zodiaque">signe du zodiaque</Link> : domicile, exaltation, exil ou chute. Elles indiquent si une planète s'exprime facilement ou si elle demande un travail d'intégration.
      </>
    ),
  },
  appIntro: (
    <>
      <strong>Les maîtrises planétaires en astrologie</strong> sont souvent présentées comme un tableau à mémoriser, sans explication de la logique sous-jacente. Pourquoi le Soleil est-il en domicile en Lion ? Pourquoi Saturne est-il en chute en Bélier ? Cette page vous donne les clés pour comprendre chaque dignité signe par signe, avec la logique symbolique qui les relie aux éléments et aux modes.
    </>
  ),
  tocLabel: "Sommaire",
  bases: {
    title: "Comment fonctionnent les dignités planétaires ?",
    quickLabel: "Définitions rapides",
    quick: [
      <><span className="text-white">Domicile</span> : terrain naturel, expression fluide.</>,
      <><span className="text-white">Exaltation</span> : potentiel fort, mise en valeur.</>,
      <><span className="text-white">Exil</span> : opposé au domicile, adaptation nécessaire.</>,
      <><span className="text-white">Chute</span> : opposé à l’exaltation, apprentissage et sobriété.</>,
    ],
    teachLabel: "Comment l’enseigner",
    teach:
      "Une dignité ne juge pas une personne. Elle décrit la facilité, la noblesse, la tension ou le travail nécessaire pour qu’une fonction planétaire s’exprime pleinement. Dans un thème réel, on nuance toujours avec la maison, les aspects, le maître, le contexte et le niveau d’intégration.",
  },
  planetLabel: {
    Soleil: "Soleil",
    Lune: "Lune",
    Mercure: "Mercure",
    Vénus: "Vénus",
    Mars: "Mars",
    Jupiter: "Jupiter",
    Saturne: "Saturne",
    Uranus: "Uranus",
    Neptune: "Neptune",
    Pluton: "Pluton",
  },
  signCard: {
    dignityEyebrow: "Dignités du signe",
    elementLabel: "Élément",
    modeLabel: "Mode",
    polariteLabel: "Polarité",
    oppositeLabel: "Opposé",
    modernNote: (planet) =>
      `Note : certaines écoles ajoutent un maître moderne ici : ${planet}.`,
    seeSignLink: "Voir la page du signe →",
    maitriseLabel: "Maîtrise",
    exaltationLabel: "Exaltation",
    exilLabel: "Exil",
    chuteLabel: "Chute",
    whyLabel: "Pourquoi ?",
    noExaltation: "Aucune exaltation retenue ici dans cette grille.",
    noChute: "Aucune chute retenue ici dans cette grille.",
    fallbackExaltSign: "son signe d’exaltation",
  },
  meanings: {
    domicile: (planet, signName) =>
      `En domicile, ${planet} “est chez elle” : sa fonction s’exprime de façon naturelle, stable et cohérente. Dans ${signName}, cela indique une affinité profonde entre la planète et le style du signe.`,
    exaltation: (planet, signName) =>
      `En exaltation, ${planet} est “mise en valeur” : elle dispose d’un terrain favorable pour exprimer son meilleur potentiel. Dans ${signName}, son énergie gagne en noblesse, en amplitude ou en efficacité.`,
    detriment: (planet, oppositeSignName) =>
      `En exil, ${planet} se trouve dans le signe opposé à son domicile (${oppositeSignName}). La fonction reste possible, mais elle demande davantage d’ajustement, de conscience et de maturité.`,
    fall: (planet, oppositeOfExaltSignName) =>
      `En chute, ${planet} est dans le signe opposé à son exaltation (${oppositeOfExaltSignName}). C’est un terrain d’apprentissage : la planète progresse en se simplifiant et en devenant plus consciente.`,
    whyRuler: (planet, element, mode) => {
      const el = element ? `l’élément ${element}` : "l’élément du signe";
      const mo = mode ? `le mode ${mode}` : "le mode du signe";
      const base = `Pourquoi ${planet} ? Parce que la fonction de ${planet} résonne avec ${el} et ${mo} : elle donne au signe sa méthode d’expression.`;
      return base + byPlanetFr[planet];
    },
    whyExaltation:
      "En exaltation, la planète trouve un cadre qui amplifie sa meilleure expression : elle gagne en portée, mais demande une direction claire.",
    whyDetriment:
      "Le signe demande ici une méthode différente de celle du domicile. L’expression devient moins immédiate, mais souvent plus formatrice.",
    whyFall:
      "La chute invite à dépouiller, simplifier, discipliner. La planète s’y affine avec le temps et l’expérience.",
  },
  footer: {
    next: (
      <>
        Prochaine étape : relier ces dignités aux <span className="text-white">maisons</span>, aux{" "}
        <span className="text-white">aspects</span> et au niveau réel d’intégration dans le thème.
      </>
    ),
    blogCta: "Explorer le blog",
    signs: "Signes",
    planets: "Planètes",
    houses: "Maisons",
  },
  faqTitle: "Questions fréquentes sur les dignités planétaires",
  faq: [
    {
      q: "Qu'est-ce qu'une planète en domicile en astrologie ?",
      a: (
        <>
          Une <strong>planète en domicile</strong> se trouve dans le signe qu'elle gouverne : elle s'y exprime de manière naturelle, fluide et stable. Par exemple, <strong>Mars</strong> est en domicile en <Link href="/signes/belier">Bélier</Link> car son énergie d'action et d'initiative résonne parfaitement avec le style du signe.
        </>
      ),
    },
    {
      q: "Quelle différence entre exaltation et domicile en astrologie ?",
      a: (
        <>
          Le <strong>domicile</strong> est le terrain naturel de la planète (expression stable et cohérente). L'<strong>exaltation</strong> est un terrain favorable qui amplifie la planète mais de manière plus intense, parfois excessive. En domicile, la planète est "chez elle" ; en exaltation, elle est "mise en valeur".
        </>
      ),
    },
    {
      q: "Une planète en exil ou en chute est-elle forcément négative ?",
      a: (
        <>
          Non. Une planète en <strong>exil</strong> ou en <strong>chute</strong> n'est pas "faible" ou condamnée. Elle demande simplement plus de conscience, d'adaptation et de maturité. Avec le temps et l'expérience, elle peut devenir une force remarquable dans le <Link href="/#theme-natal">thème natal</Link>.
        </>
      ),
    },
    {
      q: "Comment utiliser les dignités planétaires pour interpréter un thème ?",
      a: (
        <>
          Identifiez d'abord la dignité de chaque <Link href="/#planetes">planète</Link> dans votre thème (domicile, exaltation, exil, chute ou pérégrine). Puis nuancez avec la <Link href="/#maisons">maison</Link>, les <Link href="/aspects">aspects</Link> et le niveau d'intégration. Les dignités donnent le "terrain" ; le reste du thème précise comment la planète joue sur ce terrain.
        </>
      ),
    },
  ],
  faqJsonLd: [
    {
      name: "Qu'est-ce qu'une planète en domicile en astrologie ?",
      text: "Une planète en domicile se trouve dans le signe qu'elle gouverne : elle s'y exprime de manière naturelle, fluide et stable. Par exemple, Mars est en domicile en Bélier car son énergie d'action et d'initiative résonne parfaitement avec le style du signe.",
    },
    {
      name: "Quelle différence entre exaltation et domicile en astrologie ?",
      text: 'Le domicile est le terrain naturel de la planète (expression stable et cohérente). L\'exaltation est un terrain favorable qui amplifie la planète mais de manière plus intense, parfois excessive. En domicile, la planète est "chez elle" ; en exaltation, elle est "mise en valeur".',
    },
    {
      name: "Une planète en exil ou en chute est-elle forcément négative ?",
      text: 'Non. Une planète en exil ou en chute n\'est pas "faible" ou condamnée. Elle demande simplement plus de conscience, d\'adaptation et de maturité. Avec le temps et l\'expérience, elle peut devenir une force remarquable dans le thème natal.',
    },
    {
      name: "Comment utiliser les dignités planétaires pour interpréter un thème ?",
      text: 'Identifiez d\'abord la dignité de chaque planète dans votre thème (domicile, exaltation, exil, chute ou pérégrine). Puis nuancez avec la maison, les aspects et le niveau d\'intégration. Les dignités donnent le "terrain" ; le reste du thème précise comment la planète joue sur ce terrain.',
    },
  ],
};

/* ============================== EN ============================== */
const en: MaitrisesContent = {
  meta: {
    title: "Rulerships, detriments & planetary dignities",
    description:
      "Essential dignities sign by sign: ruling planet, exaltation, detriment and fall. Astrological logic and clear benchmarks. Discover our course!",
  },
  jsonld: {
    headline: "Rulerships, detriments & planetary dignities",
    description:
      "Essential dignities sign by sign: ruling planet, exaltation, detriment and fall. Astrological logic and clear benchmarks.",
    articleSection: "Astrology",
  },
  hero: {
    eyebrow: "Astrology course — Essential dignities",
    h1: "Rulerships, exaltations, detriments & falls",
    intro:
      "Understanding planetary dignities is not about reciting a table: it is about grasping the deep logic between a planet, a sign, a style of expression and a field of learning.",
    tags: [
      "Domicile = natural ground",
      "Exaltation = enhancement",
      "Detriment = adaptation",
      "Fall = learning",
    ],
    imgAlt: "Symbolic illustration of planetary dignities",
  },
  defBox: {
    label: "Definition",
    body: (
      <>
        <strong>Planetary dignities</strong> (or rulerships) describe the link between a <Link href="/#planetes">planet</Link> and a <Link href="/#zodiaque">zodiac sign</Link>: domicile, exaltation, detriment or fall. They indicate whether a planet expresses itself easily or whether it requires integration work.
      </>
    ),
  },
  appIntro: (
    <>
      <strong>Planetary rulerships in astrology</strong> are often presented as a table to memorise, with no explanation of the underlying logic. Why is the Sun in domicile in Leo? Why is Saturn in fall in Aries? This page gives you the keys to understand each dignity sign by sign, with the symbolic logic that links them to the elements and the modes.
    </>
  ),
  tocLabel: "Contents",
  bases: {
    title: "How do planetary dignities work?",
    quickLabel: "Quick definitions",
    quick: [
      <><span className="text-white">Domicile</span>: natural ground, fluid expression.</>,
      <><span className="text-white">Exaltation</span>: strong potential, enhancement.</>,
      <><span className="text-white">Detriment</span>: opposite the domicile, adaptation needed.</>,
      <><span className="text-white">Fall</span>: opposite the exaltation, learning and sobriety.</>,
    ],
    teachLabel: "How to teach it",
    teach:
      "A dignity does not judge a person. It describes the ease, the nobility, the tension or the work required for a planetary function to express itself fully. In a real chart, you always nuance it with the house, the aspects, the ruler, the context and the level of integration.",
  },
  planetLabel: {
    Soleil: "Sun",
    Lune: "Moon",
    Mercure: "Mercury",
    Vénus: "Venus",
    Mars: "Mars",
    Jupiter: "Jupiter",
    Saturne: "Saturn",
    Uranus: "Uranus",
    Neptune: "Neptune",
    Pluton: "Pluto",
  },
  signCard: {
    dignityEyebrow: "Dignities of the sign",
    elementLabel: "Element",
    modeLabel: "Mode",
    polariteLabel: "Polarity",
    oppositeLabel: "Opposite",
    modernNote: (planet) =>
      `Note: some schools add a modern ruler here: ${planet}.`,
    seeSignLink: "See the sign's page →",
    maitriseLabel: "Rulership",
    exaltationLabel: "Exaltation",
    exilLabel: "Detriment",
    chuteLabel: "Fall",
    whyLabel: "Why?",
    noExaltation: "No exaltation retained here in this grid.",
    noChute: "No fall retained here in this grid.",
    fallbackExaltSign: "its sign of exaltation",
  },
  meanings: {
    domicile: (planet, signName) =>
      `In domicile, ${planet} “is at home”: its function expresses itself naturally, stably and coherently. In ${signName}, this indicates a deep affinity between the planet and the style of the sign.`,
    exaltation: (planet, signName) =>
      `In exaltation, ${planet} is “enhanced”: it has favourable ground to express its best potential. In ${signName}, its energy gains in nobility, in scope or in efficiency.`,
    detriment: (planet, oppositeSignName) =>
      `In detriment, ${planet} is in the sign opposite its domicile (${oppositeSignName}). The function remains possible, but it requires more adjustment, awareness and maturity.`,
    fall: (planet, oppositeOfExaltSignName) =>
      `In fall, ${planet} is in the sign opposite its exaltation (${oppositeOfExaltSignName}). It is a field of learning: the planet progresses by simplifying itself and becoming more aware.`,
    whyRuler: (planet, element, mode) => {
      const el = element ? `the element ${element}` : "the element of the sign";
      const mo = mode ? `the ${mode} mode` : "the mode of the sign";
      const base = `Why ${planet}? Because the function of ${planet} resonates with ${el} and ${mo}: it gives the sign its method of expression.`;
      return base + byPlanetEn[planet];
    },
    whyExaltation:
      "In exaltation, the planet finds a frame that amplifies its best expression: it gains reach, but requires a clear direction.",
    whyDetriment:
      "Here the sign calls for a method different from that of the domicile. Expression becomes less immediate, but often more formative.",
    whyFall:
      "The fall invites you to strip down, simplify, discipline. The planet refines itself there with time and experience.",
  },
  footer: {
    next: (
      <>
        Next step: connect these dignities to the <span className="text-white">houses</span>, the{" "}
        <span className="text-white">aspects</span> and the real level of integration in the chart.
      </>
    ),
    blogCta: "Explore the blog",
    signs: "Signs",
    planets: "Planets",
    houses: "Houses",
  },
  faqTitle: "Frequently asked questions about planetary dignities",
  faq: [
    {
      q: "What is a planet in domicile in astrology?",
      a: (
        <>
          A <strong>planet in domicile</strong> is in the sign it rules: it expresses itself there naturally, fluidly and stably. For example, <strong>Mars</strong> is in domicile in <Link href="/signes/belier">Aries</Link> because its energy of action and initiative resonates perfectly with the style of the sign.
        </>
      ),
    },
    {
      q: "What is the difference between exaltation and domicile in astrology?",
      a: (
        <>
          The <strong>domicile</strong> is the planet's natural ground (stable and coherent expression). The <strong>exaltation</strong> is a favourable ground that amplifies the planet but in a more intense, sometimes excessive way. In domicile, the planet is "at home"; in exaltation, it is "enhanced".
        </>
      ),
    },
    {
      q: "Is a planet in detriment or fall necessarily negative?",
      a: (
        <>
          No. A planet in <strong>detriment</strong> or in <strong>fall</strong> is not "weak" or doomed. It simply requires more awareness, adaptation and maturity. With time and experience, it can become a remarkable strength in the <Link href="/#theme-natal">natal chart</Link>.
        </>
      ),
    },
    {
      q: "How do you use planetary dignities to interpret a chart?",
      a: (
        <>
          First identify the dignity of each <Link href="/#planetes">planet</Link> in your chart (domicile, exaltation, detriment, fall or peregrine). Then nuance it with the <Link href="/#maisons">house</Link>, the <Link href="/aspects">aspects</Link> and the level of integration. The dignities give the "ground"; the rest of the chart specifies how the planet plays out on that ground.
        </>
      ),
    },
  ],
  faqJsonLd: [
    {
      name: "What is a planet in domicile in astrology?",
      text: "A planet in domicile is in the sign it rules: it expresses itself there naturally, fluidly and stably. For example, Mars is in domicile in Aries because its energy of action and initiative resonates perfectly with the style of the sign.",
    },
    {
      name: "What is the difference between exaltation and domicile in astrology?",
      text: 'The domicile is the planet\'s natural ground (stable and coherent expression). The exaltation is a favourable ground that amplifies the planet but in a more intense, sometimes excessive way. In domicile, the planet is "at home"; in exaltation, it is "enhanced".',
    },
    {
      name: "Is a planet in detriment or fall necessarily negative?",
      text: 'No. A planet in detriment or in fall is not "weak" or doomed. It simply requires more awareness, adaptation and maturity. With time and experience, it can become a remarkable strength in the natal chart.',
    },
    {
      name: "How do you use planetary dignities to interpret a chart?",
      text: 'First identify the dignity of each planet in your chart (domicile, exaltation, detriment, fall or peregrine). Then nuance it with the house, the aspects and the level of integration. The dignities give the "ground"; the rest of the chart specifies how the planet plays out on that ground.',
    },
  ],
};

/* ============================== ES ============================== */
const es: MaitrisesContent = {
  meta: {
    title: "Regencias, exilios y dignidades planetarias",
    description:
      "Dignidades esenciales signo a signo: planeta regente, exaltación, exilio y caída. Lógica astrológica y referencias claras. ¡Descubre nuestro curso!",
  },
  jsonld: {
    headline: "Regencias, exilios y dignidades planetarias",
    description:
      "Dignidades esenciales signo a signo: planeta regente, exaltación, exilio y caída. Lógica astrológica y referencias claras.",
    articleSection: "Astrología",
  },
  hero: {
    eyebrow: "Curso de astrología — Dignidades esenciales",
    h1: "Regencias, exaltaciones, exilios y caídas",
    intro:
      "Comprender las dignidades planetarias no es recitar una tabla: es captar la lógica profunda entre un planeta, un signo, un estilo de expresión y un terreno de aprendizaje.",
    tags: [
      "Domicilio = terreno natural",
      "Exaltación = puesta en valor",
      "Exilio = adaptación",
      "Caída = aprendizaje",
    ],
    imgAlt: "Ilustración simbólica de las dignidades planetarias",
  },
  defBox: {
    label: "Definición",
    body: (
      <>
        Las <strong>dignidades planetarias</strong> (o regencias) designan el vínculo entre un <Link href="/#planetes">planeta</Link> y un <Link href="/#zodiaque">signo del zodíaco</Link>: domicilio, exaltación, exilio o caída. Indican si un planeta se expresa con facilidad o si requiere un trabajo de integración.
      </>
    ),
  },
  appIntro: (
    <>
      <strong>Las regencias planetarias en astrología</strong> se presentan a menudo como una tabla que memorizar, sin explicar la lógica subyacente. ¿Por qué el Sol está en domicilio en Leo? ¿Por qué Saturno está en caída en Aries? Esta página te da las claves para entender cada dignidad signo a signo, con la lógica simbólica que las vincula a los elementos y a los modos.
    </>
  ),
  tocLabel: "Índice",
  bases: {
    title: "¿Cómo funcionan las dignidades planetarias?",
    quickLabel: "Definiciones rápidas",
    quick: [
      <><span className="text-white">Domicilio</span>: terreno natural, expresión fluida.</>,
      <><span className="text-white">Exaltación</span>: potencial fuerte, puesta en valor.</>,
      <><span className="text-white">Exilio</span>: opuesto al domicilio, adaptación necesaria.</>,
      <><span className="text-white">Caída</span>: opuesto a la exaltación, aprendizaje y sobriedad.</>,
    ],
    teachLabel: "Cómo enseñarlo",
    teach:
      "Una dignidad no juzga a una persona. Describe la facilidad, la nobleza, la tensión o el trabajo necesario para que una función planetaria se exprese plenamente. En una carta real, siempre se matiza con la casa, los aspectos, el regente, el contexto y el nivel de integración.",
  },
  planetLabel: {
    Soleil: "Sol",
    Lune: "Luna",
    Mercure: "Mercurio",
    Vénus: "Venus",
    Mars: "Marte",
    Jupiter: "Júpiter",
    Saturne: "Saturno",
    Uranus: "Urano",
    Neptune: "Neptuno",
    Pluton: "Plutón",
  },
  signCard: {
    dignityEyebrow: "Dignidades del signo",
    elementLabel: "Elemento",
    modeLabel: "Modo",
    polariteLabel: "Polaridad",
    oppositeLabel: "Opuesto",
    modernNote: (planet) =>
      `Nota: algunas escuelas añaden aquí un regente moderno: ${planet}.`,
    seeSignLink: "Ver la página del signo →",
    maitriseLabel: "Regencia",
    exaltationLabel: "Exaltación",
    exilLabel: "Exilio",
    chuteLabel: "Caída",
    whyLabel: "¿Por qué?",
    noExaltation: "Ninguna exaltación considerada aquí en esta tabla.",
    noChute: "Ninguna caída considerada aquí en esta tabla.",
    fallbackExaltSign: "su signo de exaltación",
  },
  meanings: {
    domicile: (planet, signName) =>
      `En domicilio, ${planet} “está en su casa”: su función se expresa de forma natural, estable y coherente. En ${signName}, esto indica una afinidad profunda entre el planeta y el estilo del signo.`,
    exaltation: (planet, signName) =>
      `En exaltación, ${planet} está “puesto en valor”: dispone de un terreno favorable para expresar su mejor potencial. En ${signName}, su energía gana en nobleza, en amplitud o en eficacia.`,
    detriment: (planet, oppositeSignName) =>
      `En exilio, ${planet} se encuentra en el signo opuesto a su domicilio (${oppositeSignName}). La función sigue siendo posible, pero exige más ajuste, conciencia y madurez.`,
    fall: (planet, oppositeOfExaltSignName) =>
      `En caída, ${planet} está en el signo opuesto a su exaltación (${oppositeOfExaltSignName}). Es un terreno de aprendizaje: el planeta progresa simplificándose y volviéndose más consciente.`,
    whyRuler: (planet, element, mode) => {
      const el = element ? `el elemento ${element}` : "el elemento del signo";
      const mo = mode ? `el modo ${mode}` : "el modo del signo";
      const base = `¿Por qué ${planet}? Porque la función de ${planet} resuena con ${el} y ${mo}: le da al signo su método de expresión.`;
      return base + byPlanetEs[planet];
    },
    whyExaltation:
      "En exaltación, el planeta encuentra un marco que amplifica su mejor expresión: gana alcance, pero requiere una dirección clara.",
    whyDetriment:
      "Aquí el signo exige un método diferente al del domicilio. La expresión se vuelve menos inmediata, pero a menudo más formadora.",
    whyFall:
      "La caída invita a despojar, simplificar, disciplinar. El planeta se afina ahí con el tiempo y la experiencia.",
  },
  footer: {
    next: (
      <>
        Siguiente paso: vincular estas dignidades con las <span className="text-white">casas</span>, los{" "}
        <span className="text-white">aspectos</span> y el nivel real de integración en la carta.
      </>
    ),
    blogCta: "Explorar el blog",
    signs: "Signos",
    planets: "Planetas",
    houses: "Casas",
  },
  faqTitle: "Preguntas frecuentes sobre las dignidades planetarias",
  faq: [
    {
      q: "¿Qué es un planeta en domicilio en astrología?",
      a: (
        <>
          Un <strong>planeta en domicilio</strong> se encuentra en el signo que rige: se expresa de forma natural, fluida y estable. Por ejemplo, <strong>Marte</strong> está en domicilio en <Link href="/signes/belier">Aries</Link> porque su energía de acción e iniciativa resuena perfectamente con el estilo del signo.
        </>
      ),
    },
    {
      q: "¿Qué diferencia hay entre exaltación y domicilio en astrología?",
      a: (
        <>
          El <strong>domicilio</strong> es el terreno natural del planeta (expresión estable y coherente). La <strong>exaltación</strong> es un terreno favorable que amplifica el planeta pero de forma más intensa, a veces excesiva. En domicilio, el planeta está "en su casa"; en exaltación, está "puesto en valor".
        </>
      ),
    },
    {
      q: "¿Un planeta en exilio o en caída es forzosamente negativo?",
      a: (
        <>
          No. Un planeta en <strong>exilio</strong> o en <strong>caída</strong> no es "débil" ni está condenado. Simplemente exige más conciencia, adaptación y madurez. Con el tiempo y la experiencia, puede convertirse en una fuerza notable en la <Link href="/#theme-natal">carta natal</Link>.
        </>
      ),
    },
    {
      q: "¿Cómo usar las dignidades planetarias para interpretar una carta?",
      a: (
        <>
          Identifica primero la dignidad de cada <Link href="/#planetes">planeta</Link> en tu carta (domicilio, exaltación, exilio, caída o peregrino). Luego matiza con la <Link href="/#maisons">casa</Link>, los <Link href="/aspects">aspectos</Link> y el nivel de integración. Las dignidades dan el "terreno"; el resto de la carta precisa cómo juega el planeta en ese terreno.
        </>
      ),
    },
  ],
  faqJsonLd: [
    {
      name: "¿Qué es un planeta en domicilio en astrología?",
      text: "Un planeta en domicilio se encuentra en el signo que rige: se expresa de forma natural, fluida y estable. Por ejemplo, Marte está en domicilio en Aries porque su energía de acción e iniciativa resuena perfectamente con el estilo del signo.",
    },
    {
      name: "¿Qué diferencia hay entre exaltación y domicilio en astrología?",
      text: 'El domicilio es el terreno natural del planeta (expresión estable y coherente). La exaltación es un terreno favorable que amplifica el planeta pero de forma más intensa, a veces excesiva. En domicilio, el planeta está "en su casa"; en exaltación, está "puesto en valor".',
    },
    {
      name: "¿Un planeta en exilio o en caída es forzosamente negativo?",
      text: 'No. Un planeta en exilio o en caída no es "débil" ni está condenado. Simplemente exige más conciencia, adaptación y madurez. Con el tiempo y la experiencia, puede convertirse en una fuerza notable en la carta natal.',
    },
    {
      name: "¿Cómo usar las dignidades planetarias para interpretar una carta?",
      text: 'Identifica primero la dignidad de cada planeta en tu carta (domicilio, exaltación, exilio, caída o peregrino). Luego matiza con la casa, los aspectos y el nivel de integración. Las dignidades dan el "terreno"; el resto de la carta precisa cómo juega el planeta en ese terreno.',
    },
  ],
};

export const maitrisesContent: Record<SeoLocale, MaitrisesContent> = { fr, en, es };
