import { Link } from "@/i18n/navigation";
import type { ReactNode } from "react";
import type { SeoLocale } from "@/lib/seo";

/* ====================================================================
   Cuspides des maisons — contenu localisé (fr / en / es)
   Les clés logiques (slug, element, numéros de maison, position du
   chiffre romain dans masterInHouse.titre) sont identiques dans chaque
   langue ; seuls les textes affichés sont traduits.
   ==================================================================== */

export type Angle = { maison: number; nom: string; titre: string; texte: string };
export type MaisonItem = { maison: number; titre: string; texte: string };
export type Signe = { signe: string; texte: string };
export type SignGroup = { element: string; elementLabel: string; signes: Signe[] };
export type ConjunctionExample = { titre: string; texte: string };
export type CaseStudy = { titre: string; porte: string; gerant: string; interpretation: string };
export type MasterInHouse = { titre: string; texte: string };
export type MasterAspect = { titre: string; texte: string };
export type FaqItem = { question: string; answer: string };

export type ArticleData = {
  slug: string;
  title: string;
  description: string;
  meta: { title: string; description: string };
  defBox: { label: string; body: ReactNode };
  appIntro: ReactNode;
  badge: string;
  introTitle: string;
  natureTitle: string;
  caseLabel: string;
  doorLabel: string;
  managerLabel: string;
  verdictLabel: string;
  cuspideLabel: string;
  hiddenEnergyLabel: string;
  introduction: string[];
  definition: string[];
  anglesTitle: string;
  anglesIntro: string;
  angles: Angle[];
  maisonsTitle: string;
  maisons: MaisonItem[];
  signesTitle: string;
  signesIntro: string;
  signesParElement: SignGroup[];
  conjunctionsTitle: string;
  conjunctionsIntro: string;
  conjunctions: ConjunctionExample[];
  maitreTitle: string;
  maitreIntro: string[];
  caseStudiesTitle: string;
  caseStudies: CaseStudy[];
  masterInHouseTitle: string;
  masterInHouse: MasterInHouse[];
  masterAspectsTitle: string;
  masterAspects: MasterAspect[];
  interceptedTitle: string;
  intercepted: string[];
  conclusionTitle: string;
  conclusion: string[];
  methodeTitle: string;
  methode: string[];
  faqTitle: string;
  faq: FaqItem[];
  breadcrumb: { home: string; articles: string };
};

/* ============================== FR ============================== */
const fr: ArticleData = {
  slug: "cuspides-des-maisons",
  title: "Les Cuspides des Maisons en Astrologie",
  description:
    "Cuspides des maisons en astrologie : angles du thème, maître de maison, interceptions et dynamique des domaines de vie. Explorez notre cours complet !",
  meta: {
    title: "Les Cuspides des Maisons en Astrologie",
    description:
      "Cuspides des maisons en astrologie : angles du thème, maître de maison, interceptions et dynamique des domaines de vie. Explorez notre cours complet !",
  },
  defBox: {
    label: "Définition",
    body: (
      <>
        Les <strong>cuspides des maisons</strong> sont les degrés exacts du zodiaque où commence chaque <Link href="/#maisons">maison astrologique</Link>, déterminant le signe qui colore chaque domaine de vie et le maître de maison qui en oriente l'énergie.
      </>
    ),
  },
  appIntro: (
    <>
      Vous cherchez à comprendre le rôle des <strong>cuspides des maisons en astrologie</strong> dans l'interprétation d'un thème natal ? Beaucoup d'étudiants se limitent aux planètes en signes sans exploiter cette clé fondamentale. Ce guide encyclopédique vous révèle comment lire les 4 angles, les 12 cuspides, les maîtres de maison et les signes interceptés.
    </>
  ),
  badge: "Encyclopédie Astrologique",
  introTitle: "Introduction",
  natureTitle: "Nature des Cuspides",
  caseLabel: "Cas pratique",
  doorLabel: "La Porte (Cuspide)",
  managerLabel: "Le Gérant (Maître)",
  verdictLabel: "Verdict de l'Astrologue",
  cuspideLabel: "Cuspide",
  hiddenEnergyLabel: "L'Énergie \nCachée",
  introduction: [
    "En astrologie, si les planètes représentent les acteurs et les signes représentent le caractère ou le costume de ces acteurs, les maisons représentent la scène où l’action se déroule. Chaque maison décrit un domaine précis de l’existence : l’identité, l’argent, le foyer, le couple, la carrière, la spiritualité, et ainsi de suite.",
    "La cuspide est le point d’entrée de cette scène. Elle agit comme une porte : elle indique la manière dont l’expérience d’une maison commence, se présente et se colore dans la vie du sujet.",
    "Analyser une cuspide ne consiste donc pas seulement à lire un secteur abstrait du thème. C’est comprendre comment un domaine de vie s’ouvre, quel signe le teinte, quelle planète en détient la clé, et vers quelle autre maison cette énergie se projette.",
  ],
  definition: [
    "La cuspide est le degré précis du zodiaque où commence une maison astrologique. Dans la majorité des systèmes de domification, comme Placidus, Koch ou Regiomontanus, les maisons n’ont pas toutes la même taille. La cuspide devient alors le point de référence essentiel pour interpréter le domaine concerné.",
    "La cuspide d’une maison est généralement considérée comme le point le plus sensible de cette maison. Le signe qui s’y trouve donne la tonalité, la manière, l’ambiance et parfois la stratégie par laquelle le sujet vit ce domaine de vie.",
    "La planète qui gouverne le signe de la cuspide devient le maître de la maison. C’est elle qui indique où l’énergie de cette maison se déplace, se concrétise ou se complique dans le thème.",
  ],
  anglesTitle: "Les quatre piliers : les angles du thème",
  anglesIntro:
    "Les maisons angulaires sont les plus puissantes. Elles forment l’ossature de la vie terrestre. Une planète située près de l’une de ces cuspides acquiert une grande visibilité dans l’existence.",
  angles: [
    {
      maison: 1,
      nom: "L’Ascendant",
      titre: "L’émergence",
      texte:
        "La cuspide de la maison I décrit le moi extérieur, la vitalité, le tempérament, la manière d’entrer dans la vie et l’allure générale. Tout ce qui touche l’Ascendant affecte directement le corps, la présence et la façon d’initier l’expérience.",
    },
    {
      maison: 4,
      nom: "Le Fond du Ciel",
      titre: "L’ancrage",
      texte:
        "La cuspide de la maison IV renvoie aux racines, à la base émotionnelle, à l’héritage familial, au foyer, à la sécurité intérieure et à la fin de vie. C’est le point le plus privé du thème.",
    },
    {
      maison: 7,
      nom: "Le Descendant",
      titre: "L’altérité",
      texte:
        "La cuspide de la maison VII représente la rencontre avec l’autre. Elle décrit le type de partenaire recherché, la manière d’entrer en relation, les associations et les engagements légaux.",
    },
    {
      maison: 10,
      nom: "Le Milieu du Ciel",
      titre: "L’accomplissement",
      texte:
        "La cuspide de la maison X montre la vocation, le sommet social, la carrière, la réputation et la contribution au monde. C’est le point le plus public et souvent le plus visible du thème.",
    },
  ],
  maisonsTitle: "Signification des 12 cuspides",
  maisons: [
    { maison: 1, titre: "L’identité", texte: "Définit la personnalité apparente, la constitution physique, le tempérament de base et la manière d’entrer dans la vie." },
    { maison: 2, titre: "Les ressources", texte: "Indique comment l’individu gagne sa vie, ses valeurs matérielles et morales, son rapport à la sécurité et à l’estime de soi." },
    { maison: 3, titre: "La communication", texte: "Régit l’intellect pratique, l’entourage proche, les frères et sœurs, les études de base, les échanges et les petits déplacements." },
    { maison: 4, titre: "Le foyer", texte: "Représente la base émotionnelle, le foyer, la famille, l’héritage intérieur, l’immobilier et le jardin secret." },
    { maison: 5, titre: "La créativité", texte: "Concerne les amours, les enfants, les plaisirs, les jeux, la scène et l’expression créative de soi." },
    { maison: 6, titre: "Le quotidien", texte: "Décrit le travail de routine, la santé physique, le service, l’hygiène de vie, les subalternes et les animaux domestiques." },
    { maison: 7, titre: "L’altérité", texte: "Montre le type de partenaire recherché, la capacité à s’associer, la vie conjugale et les engagements formels." },
    { maison: 8, titre: "Les transformations", texte: "Régit les crises, la sexualité, les héritages, l’argent des autres, les pertes, les métamorphoses et l’occulte." },
    { maison: 9, titre: "L’expansion", texte: "Concerne les hautes études, la philosophie, la religion, les voyages lointains, la loi et la quête de sens." },
    { maison: 10, titre: "La réussite", texte: "Parle de l’ambition, du statut social, de la carrière, de l’autorité et de l’image publique." },
    { maison: 11, titre: "Les projets", texte: "Montre les amitiés, les appuis, les espoirs, les projets collectifs et la place dans les groupes." },
    { maison: 12, titre: "L’inconscient", texte: "Régit les épreuves cachées, la solitude, le retrait, la spiritualité, le karma et tout ce qui échappe à la pleine visibilité." },
  ],
  signesTitle: "Les cuspides à travers les 12 signes",
  signesIntro:
    "Le signe placé sur la cuspide montre la manière dont le domaine de la maison sera vécu. Il ne change pas le thème fondamental de la maison, mais il en modifie fortement le style d’expression.",
  signesParElement: [
    {
      element: "Signes de Feu",
      elementLabel: "Signes de Feu",
      signes: [
        { signe: "Bélier", texte: "Apporte de l’impulsivité, de l’énergie, une manière directe d’aborder le domaine de la maison, avec besoin d’initiative, d’action et parfois de combat." },
        { signe: "Lion", texte: "Apporte de la noblesse, un besoin de reconnaissance, une volonté de rayonner et d’être fier de ce domaine de vie." },
        { signe: "Sagittaire", texte: "Apporte de l’optimisme, un goût d’expansion, un besoin d’apprendre, de grandir ou de voyager dans ce domaine." },
      ],
    },
    {
      element: "Signes de Terre",
      elementLabel: "Signes de Terre",
      signes: [
        { signe: "Taureau", texte: "Apporte de la stabilité, de la lenteur, un besoin de sécurité matérielle, de confort et de durée." },
        { signe: "Vierge", texte: "Apporte de l’analyse, du perfectionnisme, de la méthode et un sens du service ou de l’utilité." },
        { signe: "Capricorne", texte: "Apporte de la structure, de la discipline, une logique d’effort et une ambition à long terme." },
      ],
    },
    {
      element: "Signes d’Air",
      elementLabel: "Signes d’Air",
      signes: [
        { signe: "Gémeaux", texte: "Apporte de la curiosité, de la polyvalence, de la communication et un besoin de mouvement ou d’échange." },
        { signe: "Balance", texte: "Apporte un besoin d’harmonie, de justice, de diplomatie et de compromis." },
        { signe: "Verseau", texte: "Apporte de l’originalité, de l’indépendance, une vision futuriste et le besoin de se démarquer ou d’innover." },
      ],
    },
    {
      element: "Signes d’Eau",
      elementLabel: "Signes d’Eau",
      signes: [
        { signe: "Cancer", texte: "Apporte de la sensibilité, de la protection, une mémoire émotionnelle et un besoin de refuge ou de sécurité affective." },
        { signe: "Scorpion", texte: "Apporte de l’intensité, du secret, de la profondeur et un besoin de transformation ou de contrôle." },
        { signe: "Poissons", texte: "Apporte de l’intuition, de l’empathie, du flou, une porosité psychique et parfois un besoin de fusion ou d’évasion." },
      ],
    },
  ],
  conjunctionsTitle: "Planètes en conjonction aux cuspides",
  conjunctionsIntro:
    "Lorsqu’une planète se trouve à proximité immédiate d’une cuspide, elle colore fortement tout le domaine de vie concerné. Elle agit comme un filtre direct, une force de passage entre la maison et l’expérience vécue.",
  conjunctions: [
    { titre: "Jupiter conjoint à l’Ascendant", texte: "Confère une aura d’optimisme, de chance, de générosité et de bienveillance. Le corps peut aller vers l’expansion. La personnalité apparaît protectrice, large ou charismatique." },
    { titre: "Pluton conjoint au Milieu du Ciel", texte: "Marque un destin professionnel intense, traversé par des crises, des renaissances, des enjeux de pouvoir ou de transformation radicale du statut social." },
    { titre: "Le Soleil dans une maison", texte: "Là où se trouve le Soleil, c’est là où l’être doit briller. Ce domaine nourrit la vitalité, la conscience de soi et le besoin d’accomplissement." },
  ],
  maitreTitle: "La dynamique du maître de maison",
  maitreIntro: [
    "Le signe sur la cuspide donne la couleur du domaine. Le maître du signe montre où cette énergie se déplace dans le thème.",
    "Autrement dit, la cuspide indique l’ambiance de départ, mais la position du maître en maison révèle la destination de l’énergie et la manière dont le domaine se réalise concrètement.",
    "La lecture d’une maison devient donc beaucoup plus précise lorsqu’on relie la cuspide, son signe, son maître, la maison où se trouve ce maître et les aspects qu’il reçoit.",
  ],
  caseStudiesTitle: "Analyse de cinq cas pratiques",
  caseStudies: [
    { titre: "Maison II en Capricorne + Saturne en Maison VI en Gémeaux", porte: "Les finances sont abordées avec sérieux, prudence, lenteur et besoin de sécurité construite.", gerant: "Saturne en VI en Gémeaux indique un gain lié au travail quotidien, à la technique, à la communication, à la méthode ou à l’habileté intellectuelle.", interpretation: "L’argent vient de la persévérance, d’une discipline de travail, d’une compétence répétée ou d’un savoir-faire méthodique." },
    { titre: "Maisons V et VI en Taureau + Vénus en Scorpion en Maison XII", porte: "Le sujet cherche la stabilité et le confort sensoriel dans ses amours, ses plaisirs et son travail quotidien.", gerant: "Vénus en Scorpion en XII introduit une profondeur cachée, une vie affective intense, secrète ou complexe, ainsi qu’un rapport plus invisible au travail.", interpretation: "Les amours peuvent être clandestines, intérieures ou tourmentées ; la créativité et le travail peuvent se nourrir de solitude, de retrait ou de profondeur psychique." },
    { titre: "Maison X en Balance + Vénus en Scorpion en Maison XII", porte: "L’image publique semble diplomate, raffinée, relationnelle ou esthétique.", gerant: "Vénus en Scorpion en XII déplace la réussite sociale dans des forces cachées, des épreuves transformatrices, des sacrifices ou un travail de l’ombre.", interpretation: "La carrière peut être liée à la psychologie, à la stratégie, au secret, à la discrétion ou à une profonde métamorphose de réputation." },
    { titre: "Maison VII en Gémeaux + Mercure en Scorpion en Maison XII", porte: "On attire des partenaires communicatifs, mobiles, jeunes d’esprit ou intellectuels.", gerant: "Mercure en Scorpion en XII donne au partenaire une face secrète, un esprit complexe, profond ou difficile à lire.", interpretation: "Les relations peuvent être marquées par les non-dits, une communication souterraine, des liens karmiques ou des enjeux psychologiques cachés." },
    { titre: "Maison IV en Sagittaire + Jupiter en Maison I en Bélier", porte: "Le foyer est vécu comme un lieu d’expansion, d’aventure, de philosophie ou d’ouverture.", gerant: "Jupiter en I en Bélier renforce directement l’identité, la confiance, l’élan et la capacité à s’affirmer.", interpretation: "L’héritage familial a pu transmettre confiance, vision, foi ou énergie d’action. La personne porte ses racines en elle avec force." },
  ],
  masterInHouseTitle: "Le maître de la cuspide en maison",
  masterInHouse: [
    { titre: "Maître de I en X", texte: "La vie est fortement tournée vers l’accomplissement, la vocation, la réussite sociale et la construction d’une réputation." },
    { titre: "Maître de II en VIII", texte: "L’argent personnel est lié aux ressources des autres, aux héritages, aux dettes, aux crises ou aux enjeux de dépendance matérielle." },
    { titre: "Maître de IV en VII", texte: "La vie privée, le foyer ou la famille dépendent fortement du partenaire, du mariage ou des contrats." },
    { titre: "Maître de VII en XII", texte: "Le partenaire peut devenir une source d’épreuve, de secret, de retrait ou de lien karmique." },
  ],
  masterAspectsTitle: "Les aspects entre maîtres de maisons",
  masterAspects: [
    { titre: "Trigone ou sextile entre maître de II et maître de X", texte: "Signature classique d’une relative facilité financière par la profession. Le flux entre argent et carrière circule plus facilement." },
    { titre: "Carré entre maître de I et maître de VII", texte: "Tension entre les besoins du moi et les exigences du couple ou du partenariat. Des ajustements permanents sont souvent nécessaires." },
    { titre: "Opposition entre maître de IV et maître de X", texte: "Dilemme classique entre vie privée et vie publique, entre foyer et carrière, entre sécurité intérieure et ambition sociale." },
  ],
  interceptedTitle: "Les maisons interceptées",
  intercepted: [
    "Dans certains systèmes de domification, surtout pour les naissances éloignées de l’équateur, un signe entier peut se retrouver contenu dans une maison sans qu’aucune cuspide n’y tombe. On parle alors de signe intercepté.",
    "L’énergie de ce signe est souvent plus difficile d’accès, comme retenue, intériorisée, ralentie ou bloquée jusqu’à ce qu’un travail de conscience permette de la libérer.",
    "À l’inverse, lorsqu’un même axe de signes accueille deux cuspides, cela suggère que certains domaines de vie sont étroitement dépendants l’un de l’autre et se répondent plus directement.",
  ],
  conclusionTitle: "Conclusion",
  conclusion: [
    "La cuspide est le point de contact entre le zodiaque immuable et l’expérience humaine terrestre. Elle marque l’entrée vivante d’un domaine de vie dans le thème natal.",
    "Analyser la cuspide, son signe et son maître permet de comprendre non seulement ce que représente la maison, mais aussi la manière dont elle sera vécue, et vers quel autre domaine son énergie se déplacera.",
    "L’astrologie ne lit pas des facteurs isolés. Elle lit des réseaux de connexions. Les cuspides sont des portes, les maîtres de maisons sont les gérants de ces portes, et les aspects montrent les alliances, les tensions ou les détours du destin.",
  ],
  methodeTitle: "Méthode d’interprétation",
  methode: [
    "Regardez la cuspide : quel est le signe ? C’est l’ambiance du domaine.",
    "Regardez s’il y a une planète près de la cuspide : elle agit comme filtre immédiat.",
    "Cherchez le maître du signe de la cuspide : dans quelle maison se trouve-t-il ? C’est la destination de l’énergie.",
    "Analysez ses aspects : ils montrent si cette énergie est soutenue, contrariée, amplifiée ou compliquée.",
  ],
  faqTitle: "Questions fréquentes",
  faq: [
    { question: "Qu’est-ce qu’une cuspide en astrologie ?", answer: "Une cuspide est le degré précis où commence une maison astrologique. Elle agit comme la porte d’entrée d’un domaine de vie." },
    { question: "Pourquoi le signe sur la cuspide est-il important ?", answer: "Parce qu’il colore toute l’expérience de la maison. Il indique la manière, l’ambiance et le style selon lesquels ce domaine de vie sera vécu." },
    { question: "Qu’est-ce que le maître de maison ?", answer: "C’est la planète qui gouverne le signe placé sur la cuspide. Elle montre où l’énergie de la maison se déplace et se réalise dans le thème." },
    { question: "Une planète sur une cuspide est-elle importante ?", answer: "Oui. Une planète proche d’une cuspide agit souvent comme un filtre très fort du domaine concerné et devient particulièrement visible dans la vie." },
  ],
  breadcrumb: { home: "Accueil", articles: "Articles" },
};

/* ============================== EN ============================== */
const en: ArticleData = {
  slug: "cuspides-des-maisons",
  title: "House Cusps in Astrology",
  description:
    "House cusps in astrology: the angles of the chart, the house ruler, interceptions and the dynamics of life areas. Explore our complete course!",
  meta: {
    title: "House Cusps in Astrology",
    description:
      "House cusps in astrology: the angles of the chart, the house ruler, interceptions and the dynamics of life areas. Explore our complete course!",
  },
  defBox: {
    label: "Definition",
    body: (
      <>
        The <strong>house cusps</strong> are the exact degrees of the zodiac where each <Link href="/#maisons">astrological house</Link> begins, determining the sign that colours each area of life and the house ruler that steers its energy.
      </>
    ),
  },
  appIntro: (
    <>
      Are you trying to understand the role of <strong>house cusps in astrology</strong> in the interpretation of a natal chart? Many students limit themselves to planets in signs without making use of this fundamental key. This encyclopedic guide reveals how to read the 4 angles, the 12 cusps, the house rulers and the intercepted signs.
    </>
  ),
  badge: "Astrological Encyclopedia",
  introTitle: "Introduction",
  natureTitle: "The Nature of Cusps",
  caseLabel: "Case study",
  doorLabel: "The Door (Cusp)",
  managerLabel: "The Manager (Ruler)",
  verdictLabel: "The Astrologer’s Verdict",
  cuspideLabel: "Cusp",
  hiddenEnergyLabel: "The Hidden \nEnergy",
  introduction: [
    "In astrology, if the planets represent the actors and the signs represent the character or costume of those actors, the houses represent the stage on which the action unfolds. Each house describes a precise area of life: identity, money, home, relationships, career, spirituality, and so on.",
    "The cusp is the entry point of that stage. It acts like a door: it indicates the way the experience of a house begins, presents itself and takes on colour in the subject’s life.",
    "Analysing a cusp is therefore not merely reading an abstract sector of the chart. It is understanding how an area of life opens, which sign tints it, which planet holds its key, and toward which other house that energy is projected.",
  ],
  definition: [
    "The cusp is the precise degree of the zodiac where an astrological house begins. In most house systems, such as Placidus, Koch or Regiomontanus, the houses are not all the same size. The cusp then becomes the essential point of reference for interpreting the area concerned.",
    "The cusp of a house is generally considered the most sensitive point of that house. The sign found there gives the tone, the manner, the atmosphere and sometimes the strategy through which the subject experiences that area of life.",
    "The planet that rules the sign of the cusp becomes the ruler of the house. It is the one that indicates where the energy of that house moves, takes shape or becomes complicated within the chart.",
  ],
  anglesTitle: "The four pillars: the angles of the chart",
  anglesIntro:
    "The angular houses are the most powerful. They form the backbone of earthly life. A planet located near one of these cusps gains great visibility in one’s existence.",
  angles: [
    {
      maison: 1,
      nom: "The Ascendant",
      titre: "Emergence",
      texte:
        "The cusp of house I describes the outer self, vitality, temperament, the way of entering life and one’s general bearing. Everything touching the Ascendant directly affects the body, presence and the way experience is initiated.",
    },
    {
      maison: 4,
      nom: "The Imum Coeli",
      titre: "Rootedness",
      texte:
        "The cusp of house IV relates to roots, the emotional foundation, family heritage, the home, inner security and the end of life. It is the most private point of the chart.",
    },
    {
      maison: 7,
      nom: "The Descendant",
      titre: "Otherness",
      texte:
        "The cusp of house VII represents the encounter with the other. It describes the type of partner sought, the way of entering into relationships, partnerships and legal commitments.",
    },
    {
      maison: 10,
      nom: "The Midheaven",
      titre: "Achievement",
      texte:
        "The cusp of house X shows vocation, social peak, career, reputation and contribution to the world. It is the most public and often the most visible point of the chart.",
    },
  ],
  maisonsTitle: "Meaning of the 12 cusps",
  maisons: [
    { maison: 1, titre: "Identity", texte: "Defines the apparent personality, the physical constitution, the basic temperament and the way of entering life." },
    { maison: 2, titre: "Resources", texte: "Indicates how the individual earns a living, their material and moral values, and their relationship to security and self-esteem." },
    { maison: 3, titre: "Communication", texte: "Governs the practical intellect, the immediate surroundings, siblings, basic studies, exchanges and short journeys." },
    { maison: 4, titre: "The home", texte: "Represents the emotional foundation, the home, the family, the inner heritage, real estate and the secret garden." },
    { maison: 5, titre: "Creativity", texte: "Concerns love affairs, children, pleasures, games, the stage and creative self-expression." },
    { maison: 6, titre: "Daily life", texte: "Describes routine work, physical health, service, lifestyle, subordinates and domestic animals." },
    { maison: 7, titre: "Otherness", texte: "Shows the type of partner sought, the capacity to form partnerships, married life and formal commitments." },
    { maison: 8, titre: "Transformations", texte: "Governs crises, sexuality, inheritances, other people’s money, losses, metamorphoses and the occult." },
    { maison: 9, titre: "Expansion", texte: "Concerns higher studies, philosophy, religion, distant travels, the law and the quest for meaning." },
    { maison: 10, titre: "Success", texte: "Speaks of ambition, social status, career, authority and public image." },
    { maison: 11, titre: "Projects", texte: "Shows friendships, support, hopes, collective projects and one’s place within groups." },
    { maison: 12, titre: "The unconscious", texte: "Governs hidden trials, solitude, withdrawal, spirituality, karma and everything that escapes full visibility." },
  ],
  signesTitle: "The cusps through the 12 signs",
  signesIntro:
    "The sign placed on the cusp shows the way in which the area of the house will be experienced. It does not change the fundamental theme of the house, but it strongly modifies its style of expression.",
  signesParElement: [
    {
      element: "Signes de Feu",
      elementLabel: "Fire Signs",
      signes: [
        { signe: "Aries", texte: "Brings impulsiveness, energy and a direct way of approaching the area of the house, with a need for initiative, action and sometimes combat." },
        { signe: "Leo", texte: "Brings nobility, a need for recognition, a will to shine and to be proud of this area of life." },
        { signe: "Sagittarius", texte: "Brings optimism, a taste for expansion, a need to learn, grow or travel within this area." },
      ],
    },
    {
      element: "Signes de Terre",
      elementLabel: "Earth Signs",
      signes: [
        { signe: "Taurus", texte: "Brings stability, slowness, a need for material security, comfort and durability." },
        { signe: "Virgo", texte: "Brings analysis, perfectionism, method and a sense of service or usefulness." },
        { signe: "Capricorn", texte: "Brings structure, discipline, a logic of effort and a long-term ambition." },
      ],
    },
    {
      element: "Signes d’Air",
      elementLabel: "Air Signs",
      signes: [
        { signe: "Gemini", texte: "Brings curiosity, versatility, communication and a need for movement or exchange." },
        { signe: "Libra", texte: "Brings a need for harmony, justice, diplomacy and compromise." },
        { signe: "Aquarius", texte: "Brings originality, independence, a futuristic vision and the need to stand out or innovate." },
      ],
    },
    {
      element: "Signes d’Eau",
      elementLabel: "Water Signs",
      signes: [
        { signe: "Cancer", texte: "Brings sensitivity, protection, an emotional memory and a need for refuge or emotional security." },
        { signe: "Scorpio", texte: "Brings intensity, secrecy, depth and a need for transformation or control." },
        { signe: "Pisces", texte: "Brings intuition, empathy, vagueness, a psychic porosity and sometimes a need for fusion or escape." },
      ],
    },
  ],
  conjunctionsTitle: "Planets conjunct the cusps",
  conjunctionsIntro:
    "When a planet sits in the immediate vicinity of a cusp, it strongly colours the entire area of life concerned. It acts as a direct filter, a force of passage between the house and lived experience.",
  conjunctions: [
    { titre: "Jupiter conjunct the Ascendant", texte: "Confers an aura of optimism, luck, generosity and benevolence. The body may tend toward expansion. The personality appears protective, broad or charismatic." },
    { titre: "Pluto conjunct the Midheaven", texte: "Marks an intense professional destiny, shot through with crises, rebirths, power struggles or radical transformation of social status." },
    { titre: "The Sun in a house", texte: "Wherever the Sun is found is where the being must shine. That area nourishes vitality, self-awareness and the need for fulfilment." },
  ],
  maitreTitle: "The dynamic of the house ruler",
  maitreIntro: [
    "The sign on the cusp gives the colour of the area. The ruler of the sign shows where that energy moves within the chart.",
    "In other words, the cusp indicates the starting atmosphere, but the position of the ruler in a house reveals the destination of the energy and the way the area is concretely realised.",
    "Reading a house therefore becomes much more precise when you connect the cusp, its sign, its ruler, the house where that ruler is located and the aspects it receives.",
  ],
  caseStudiesTitle: "Analysis of five case studies",
  caseStudies: [
    { titre: "House II in Capricorn + Saturn in House VI in Gemini", porte: "Finances are approached with seriousness, caution, slowness and a need for security that is built up over time.", gerant: "Saturn in VI in Gemini indicates earnings linked to daily work, technique, communication, method or intellectual skill.", interpretation: "Money comes from perseverance, a discipline of work, a repeated competence or a methodical know-how." },
    { titre: "Houses V and VI in Taurus + Venus in Scorpio in House XII", porte: "The subject seeks stability and sensory comfort in their love life, their pleasures and their daily work.", gerant: "Venus in Scorpio in XII introduces a hidden depth, an intense, secret or complex emotional life, as well as a more invisible relationship to work.", interpretation: "Love affairs may be clandestine, inward or tormented; creativity and work may feed on solitude, withdrawal or psychic depth." },
    { titre: "House X in Libra + Venus in Scorpio in House XII", porte: "The public image appears diplomatic, refined, relational or aesthetic.", gerant: "Venus in Scorpio in XII shifts social success toward hidden forces, transformative trials, sacrifices or behind-the-scenes work.", interpretation: "The career may be linked to psychology, strategy, secrecy, discretion or a profound metamorphosis of reputation." },
    { titre: "House VII in Gemini + Mercury in Scorpio in House XII", porte: "One attracts communicative, mobile, young-minded or intellectual partners.", gerant: "Mercury in Scorpio in XII gives the partner a secret side, a complex, deep or hard-to-read mind.", interpretation: "Relationships may be marked by the unspoken, an underground communication, karmic bonds or hidden psychological stakes." },
    { titre: "House IV in Sagittarius + Jupiter in House I in Aries", porte: "The home is experienced as a place of expansion, adventure, philosophy or openness.", gerant: "Jupiter in I in Aries directly strengthens identity, confidence, momentum and the capacity to assert oneself.", interpretation: "The family heritage may have transmitted confidence, vision, faith or energy for action. The person carries their roots within themselves with strength." },
  ],
  masterInHouseTitle: "The cusp ruler in a house",
  masterInHouse: [
    { titre: "Ruler of I in X", texte: "Life is strongly turned toward achievement, vocation, social success and the building of a reputation." },
    { titre: "Ruler of II in VIII", texte: "Personal money is linked to other people’s resources, inheritances, debts, crises or issues of material dependence." },
    { titre: "Ruler of IV in VII", texte: "Private life, the home or the family depend strongly on the partner, marriage or contracts." },
    { titre: "Ruler of VII in XII", texte: "The partner may become a source of trial, secrecy, withdrawal or a karmic bond." },
  ],
  masterAspectsTitle: "Aspects between house rulers",
  masterAspects: [
    { titre: "Trine or sextile between the ruler of II and the ruler of X", texte: "A classic signature of relative financial ease through one’s profession. The flow between money and career circulates more easily." },
    { titre: "Square between the ruler of I and the ruler of VII", texte: "Tension between the needs of the self and the demands of the couple or partnership. Constant adjustments are often necessary." },
    { titre: "Opposition between the ruler of IV and the ruler of X", texte: "The classic dilemma between private and public life, between home and career, between inner security and social ambition." },
  ],
  interceptedTitle: "Intercepted houses",
  intercepted: [
    "In some house systems, especially for births far from the equator, an entire sign may end up contained within a house without any cusp falling in it. This is called an intercepted sign.",
    "The energy of that sign is often harder to access, as if held back, internalised, slowed down or blocked until conscious work allows it to be released.",
    "Conversely, when the same axis of signs hosts two cusps, it suggests that certain areas of life are closely dependent on each other and respond to one another more directly.",
  ],
  conclusionTitle: "Conclusion",
  conclusion: [
    "The cusp is the point of contact between the immutable zodiac and earthly human experience. It marks the living entrance of an area of life into the natal chart.",
    "Analysing the cusp, its sign and its ruler allows you to understand not only what the house represents, but also the way it will be experienced, and toward which other area its energy will move.",
    "Astrology does not read isolated factors. It reads networks of connections. The cusps are doors, the house rulers are the managers of those doors, and the aspects show the alliances, tensions or detours of destiny.",
  ],
  methodeTitle: "Interpretation method",
  methode: [
    "Look at the cusp: what is the sign? That is the atmosphere of the area.",
    "Check whether there is a planet near the cusp: it acts as an immediate filter.",
    "Find the ruler of the cusp’s sign: in which house is it located? That is the destination of the energy.",
    "Analyse its aspects: they show whether this energy is supported, hindered, amplified or complicated.",
  ],
  faqTitle: "Frequently asked questions",
  faq: [
    { question: "What is a cusp in astrology?", answer: "A cusp is the precise degree where an astrological house begins. It acts as the entrance door to an area of life." },
    { question: "Why is the sign on the cusp important?", answer: "Because it colours the whole experience of the house. It indicates the manner, atmosphere and style according to which that area of life will be experienced." },
    { question: "What is the house ruler?", answer: "It is the planet that rules the sign placed on the cusp. It shows where the energy of the house moves and is realised within the chart." },
    { question: "Is a planet on a cusp important?", answer: "Yes. A planet near a cusp often acts as a very strong filter of the area concerned and becomes particularly visible in one’s life." },
  ],
  breadcrumb: { home: "Home", articles: "Articles" },
};

/* ============================== ES ============================== */
const es: ArticleData = {
  slug: "cuspides-des-maisons",
  title: "Las Cúspides de las Casas en Astrología",
  description:
    "Cúspides de las casas en astrología: ángulos de la carta, regente de la casa, interceptaciones y dinámica de los ámbitos de vida. ¡Explora nuestro curso completo!",
  meta: {
    title: "Las Cúspides de las Casas en Astrología",
    description:
      "Cúspides de las casas en astrología: ángulos de la carta, regente de la casa, interceptaciones y dinámica de los ámbitos de vida. ¡Explora nuestro curso completo!",
  },
  defBox: {
    label: "Definición",
    body: (
      <>
        Las <strong>cúspides de las casas</strong> son los grados exactos del zodíaco donde comienza cada <Link href="/#maisons">casa astrológica</Link>, y determinan el signo que colorea cada ámbito de vida y el regente de la casa que orienta su energía.
      </>
    ),
  },
  appIntro: (
    <>
      ¿Buscas comprender el papel de las <strong>cúspides de las casas en astrología</strong> en la interpretación de una carta natal? Muchos estudiantes se limitan a los planetas en signos sin aprovechar esta clave fundamental. Esta guía enciclopédica te revela cómo leer los 4 ángulos, las 12 cúspides, los regentes de las casas y los signos interceptados.
    </>
  ),
  badge: "Enciclopedia Astrológica",
  introTitle: "Introducción",
  natureTitle: "Naturaleza de las Cúspides",
  caseLabel: "Caso práctico",
  doorLabel: "La Puerta (Cúspide)",
  managerLabel: "El Gestor (Regente)",
  verdictLabel: "Veredicto del Astrólogo",
  cuspideLabel: "Cúspide",
  hiddenEnergyLabel: "La Energía \nOculta",
  introduction: [
    "En astrología, si los planetas representan a los actores y los signos representan el carácter o el vestuario de esos actores, las casas representan el escenario donde se desarrolla la acción. Cada casa describe un ámbito preciso de la existencia: la identidad, el dinero, el hogar, la pareja, la carrera, la espiritualidad, y así sucesivamente.",
    "La cúspide es el punto de entrada de ese escenario. Actúa como una puerta: indica la manera en que la experiencia de una casa comienza, se presenta y se colorea en la vida del sujeto.",
    "Analizar una cúspide no consiste, por tanto, solo en leer un sector abstracto de la carta. Es comprender cómo se abre un ámbito de vida, qué signo lo tiñe, qué planeta posee su llave y hacia qué otra casa se proyecta esa energía.",
  ],
  definition: [
    "La cúspide es el grado preciso del zodíaco donde comienza una casa astrológica. En la mayoría de los sistemas de domificación, como Placidus, Koch o Regiomontano, las casas no tienen todas el mismo tamaño. La cúspide se convierte entonces en el punto de referencia esencial para interpretar el ámbito en cuestión.",
    "La cúspide de una casa se considera generalmente el punto más sensible de esa casa. El signo que se encuentra en ella da la tonalidad, la manera, el ambiente y a veces la estrategia con que el sujeto vive ese ámbito de vida.",
    "El planeta que gobierna el signo de la cúspide se convierte en el regente de la casa. Es el que indica adónde se desplaza, se concreta o se complica la energía de esa casa dentro de la carta.",
  ],
  anglesTitle: "Los cuatro pilares: los ángulos de la carta",
  anglesIntro:
    "Las casas angulares son las más potentes. Forman la estructura de la vida terrenal. Un planeta situado cerca de una de estas cúspides adquiere una gran visibilidad en la existencia.",
  angles: [
    {
      maison: 1,
      nom: "El Ascendente",
      titre: "La emergencia",
      texte:
        "La cúspide de la casa I describe el yo exterior, la vitalidad, el temperamento, la manera de entrar en la vida y el porte general. Todo lo que afecta al Ascendente repercute directamente en el cuerpo, la presencia y la forma de iniciar la experiencia.",
    },
    {
      maison: 4,
      nom: "El Fondo del Cielo",
      titre: "El arraigo",
      texte:
        "La cúspide de la casa IV remite a las raíces, a la base emocional, a la herencia familiar, al hogar, a la seguridad interior y al final de la vida. Es el punto más privado de la carta.",
    },
    {
      maison: 7,
      nom: "El Descendente",
      titre: "La alteridad",
      texte:
        "La cúspide de la casa VII representa el encuentro con el otro. Describe el tipo de pareja buscada, la manera de entrar en relación, las asociaciones y los compromisos legales.",
    },
    {
      maison: 10,
      nom: "El Medio Cielo",
      titre: "La realización",
      texte:
        "La cúspide de la casa X muestra la vocación, la cima social, la carrera, la reputación y la contribución al mundo. Es el punto más público y a menudo el más visible de la carta.",
    },
  ],
  maisonsTitle: "Significado de las 12 cúspides",
  maisons: [
    { maison: 1, titre: "La identidad", texte: "Define la personalidad aparente, la constitución física, el temperamento de base y la manera de entrar en la vida." },
    { maison: 2, titre: "Los recursos", texte: "Indica cómo se gana la vida el individuo, sus valores materiales y morales, su relación con la seguridad y la autoestima." },
    { maison: 3, titre: "La comunicación", texte: "Rige el intelecto práctico, el entorno cercano, los hermanos, los estudios básicos, los intercambios y los desplazamientos cortos." },
    { maison: 4, titre: "El hogar", texte: "Representa la base emocional, el hogar, la familia, la herencia interior, los bienes inmuebles y el jardín secreto." },
    { maison: 5, titre: "La creatividad", texte: "Concierne a los amores, los hijos, los placeres, los juegos, el escenario y la expresión creativa de uno mismo." },
    { maison: 6, titre: "Lo cotidiano", texte: "Describe el trabajo rutinario, la salud física, el servicio, la higiene de vida, los subordinados y los animales domésticos." },
    { maison: 7, titre: "La alteridad", texte: "Muestra el tipo de pareja buscada, la capacidad de asociarse, la vida conyugal y los compromisos formales." },
    { maison: 8, titre: "Las transformaciones", texte: "Rige las crisis, la sexualidad, las herencias, el dinero de los demás, las pérdidas, las metamorfosis y lo oculto." },
    { maison: 9, titre: "La expansión", texte: "Concierne a los estudios superiores, la filosofía, la religión, los viajes lejanos, la ley y la búsqueda de sentido." },
    { maison: 10, titre: "El éxito", texte: "Habla de la ambición, el estatus social, la carrera, la autoridad y la imagen pública." },
    { maison: 11, titre: "Los proyectos", texte: "Muestra las amistades, los apoyos, las esperanzas, los proyectos colectivos y el lugar dentro de los grupos." },
    { maison: 12, titre: "El inconsciente", texte: "Rige las pruebas ocultas, la soledad, el retiro, la espiritualidad, el karma y todo lo que escapa a la plena visibilidad." },
  ],
  signesTitle: "Las cúspides a través de los 12 signos",
  signesIntro:
    "El signo situado en la cúspide muestra la manera en que se vivirá el ámbito de la casa. No cambia el tema fundamental de la casa, pero modifica con fuerza su estilo de expresión.",
  signesParElement: [
    {
      element: "Signes de Feu",
      elementLabel: "Signos de Fuego",
      signes: [
        { signe: "Aries", texte: "Aporta impulsividad, energía, una manera directa de abordar el ámbito de la casa, con necesidad de iniciativa, de acción y a veces de combate." },
        { signe: "Leo", texte: "Aporta nobleza, una necesidad de reconocimiento, una voluntad de brillar y de sentirse orgulloso de ese ámbito de vida." },
        { signe: "Sagitario", texte: "Aporta optimismo, gusto por la expansión, una necesidad de aprender, crecer o viajar en ese ámbito." },
      ],
    },
    {
      element: "Signes de Terre",
      elementLabel: "Signos de Tierra",
      signes: [
        { signe: "Tauro", texte: "Aporta estabilidad, lentitud, una necesidad de seguridad material, de confort y de duración." },
        { signe: "Virgo", texte: "Aporta análisis, perfeccionismo, método y un sentido del servicio o de la utilidad." },
        { signe: "Capricornio", texte: "Aporta estructura, disciplina, una lógica de esfuerzo y una ambición a largo plazo." },
      ],
    },
    {
      element: "Signes d’Air",
      elementLabel: "Signos de Aire",
      signes: [
        { signe: "Géminis", texte: "Aporta curiosidad, polivalencia, comunicación y una necesidad de movimiento o de intercambio." },
        { signe: "Libra", texte: "Aporta una necesidad de armonía, de justicia, de diplomacia y de compromiso." },
        { signe: "Acuario", texte: "Aporta originalidad, independencia, una visión futurista y la necesidad de destacar o de innovar." },
      ],
    },
    {
      element: "Signes d’Eau",
      elementLabel: "Signos de Agua",
      signes: [
        { signe: "Cáncer", texte: "Aporta sensibilidad, protección, una memoria emocional y una necesidad de refugio o de seguridad afectiva." },
        { signe: "Escorpio", texte: "Aporta intensidad, secreto, profundidad y una necesidad de transformación o de control." },
        { signe: "Piscis", texte: "Aporta intuición, empatía, difuminado, una porosidad psíquica y a veces una necesidad de fusión o de evasión." },
      ],
    },
  ],
  conjunctionsTitle: "Planetas en conjunción con las cúspides",
  conjunctionsIntro:
    "Cuando un planeta se encuentra en la proximidad inmediata de una cúspide, colorea con fuerza todo el ámbito de vida en cuestión. Actúa como un filtro directo, una fuerza de paso entre la casa y la experiencia vivida.",
  conjunctions: [
    { titre: "Júpiter en conjunción con el Ascendente", texte: "Confiere un aura de optimismo, de suerte, de generosidad y de benevolencia. El cuerpo puede tender a la expansión. La personalidad aparece protectora, amplia o carismática." },
    { titre: "Plutón en conjunción con el Medio Cielo", texte: "Marca un destino profesional intenso, atravesado por crisis, renacimientos, luchas de poder o una transformación radical del estatus social." },
    { titre: "El Sol en una casa", texte: "Allí donde se encuentra el Sol es donde el ser debe brillar. Ese ámbito nutre la vitalidad, la conciencia de sí y la necesidad de realización." },
  ],
  maitreTitle: "La dinámica del regente de la casa",
  maitreIntro: [
    "El signo en la cúspide da el color del ámbito. El regente del signo muestra adónde se desplaza esa energía dentro de la carta.",
    "Dicho de otro modo, la cúspide indica el ambiente de partida, pero la posición del regente en una casa revela el destino de la energía y la manera en que el ámbito se realiza concretamente.",
    "La lectura de una casa se vuelve, por tanto, mucho más precisa cuando se relacionan la cúspide, su signo, su regente, la casa donde se encuentra ese regente y los aspectos que recibe.",
  ],
  caseStudiesTitle: "Análisis de cinco casos prácticos",
  caseStudies: [
    { titre: "Casa II en Capricornio + Saturno en Casa VI en Géminis", porte: "Las finanzas se abordan con seriedad, prudencia, lentitud y necesidad de una seguridad construida.", gerant: "Saturno en VI en Géminis indica una ganancia ligada al trabajo cotidiano, a la técnica, a la comunicación, al método o a la habilidad intelectual.", interpretation: "El dinero proviene de la perseverancia, de una disciplina de trabajo, de una competencia repetida o de un saber hacer metódico." },
    { titre: "Casas V y VI en Tauro + Venus en Escorpio en Casa XII", porte: "El sujeto busca la estabilidad y el confort sensorial en sus amores, sus placeres y su trabajo cotidiano.", gerant: "Venus en Escorpio en XII introduce una profundidad oculta, una vida afectiva intensa, secreta o compleja, así como una relación más invisible con el trabajo.", interpretation: "Los amores pueden ser clandestinos, interiores o atormentados; la creatividad y el trabajo pueden nutrirse de soledad, de retiro o de profundidad psíquica." },
    { titre: "Casa X en Libra + Venus en Escorpio en Casa XII", porte: "La imagen pública parece diplomática, refinada, relacional o estética.", gerant: "Venus en Escorpio en XII desplaza el éxito social hacia fuerzas ocultas, pruebas transformadoras, sacrificios o un trabajo de sombra.", interpretation: "La carrera puede estar ligada a la psicología, a la estrategia, al secreto, a la discreción o a una profunda metamorfosis de la reputación." },
    { titre: "Casa VII en Géminis + Mercurio en Escorpio en Casa XII", porte: "Se atrae a parejas comunicativas, móviles, de espíritu joven o intelectuales.", gerant: "Mercurio en Escorpio en XII da a la pareja una cara secreta, una mente compleja, profunda o difícil de descifrar.", interpretation: "Las relaciones pueden estar marcadas por los no dichos, una comunicación subterránea, vínculos kármicos o cuestiones psicológicas ocultas." },
    { titre: "Casa IV en Sagitario + Júpiter en Casa I en Aries", porte: "El hogar se vive como un lugar de expansión, de aventura, de filosofía o de apertura.", gerant: "Júpiter en I en Aries refuerza directamente la identidad, la confianza, el impulso y la capacidad de afirmarse.", interpretation: "La herencia familiar pudo transmitir confianza, visión, fe o energía de acción. La persona lleva sus raíces consigo con fuerza." },
  ],
  masterInHouseTitle: "El regente de la cúspide en una casa",
  masterInHouse: [
    { titre: "Regente de I en X", texte: "La vida está fuertemente orientada hacia la realización, la vocación, el éxito social y la construcción de una reputación." },
    { titre: "Regente de II en VIII", texte: "El dinero personal está ligado a los recursos de los demás, a las herencias, a las deudas, a las crisis o a cuestiones de dependencia material." },
    { titre: "Regente de IV en VII", texte: "La vida privada, el hogar o la familia dependen fuertemente de la pareja, del matrimonio o de los contratos." },
    { titre: "Regente de VII en XII", texte: "La pareja puede convertirse en una fuente de prueba, de secreto, de retiro o de vínculo kármico." },
  ],
  masterAspectsTitle: "Los aspectos entre regentes de casas",
  masterAspects: [
    { titre: "Trígono o sextil entre el regente de II y el regente de X", texte: "Firma clásica de una relativa facilidad financiera a través de la profesión. El flujo entre el dinero y la carrera circula con mayor facilidad." },
    { titre: "Cuadratura entre el regente de I y el regente de VII", texte: "Tensión entre las necesidades del yo y las exigencias de la pareja o de la asociación. A menudo son necesarios ajustes permanentes." },
    { titre: "Oposición entre el regente de IV y el regente de X", texte: "Dilema clásico entre la vida privada y la vida pública, entre el hogar y la carrera, entre la seguridad interior y la ambición social." },
  ],
  interceptedTitle: "Las casas interceptadas",
  intercepted: [
    "En algunos sistemas de domificación, sobre todo en nacimientos alejados del ecuador, un signo entero puede quedar contenido dentro de una casa sin que ninguna cúspide caiga en él. Se habla entonces de signo interceptado.",
    "La energía de ese signo suele ser más difícil de acceder, como retenida, interiorizada, ralentizada o bloqueada hasta que un trabajo de conciencia permite liberarla.",
    "A la inversa, cuando un mismo eje de signos acoge dos cúspides, ello sugiere que ciertos ámbitos de vida son estrechamente dependientes uno del otro y se responden de manera más directa.",
  ],
  conclusionTitle: "Conclusión",
  conclusion: [
    "La cúspide es el punto de contacto entre el zodíaco inmutable y la experiencia humana terrenal. Marca la entrada viva de un ámbito de vida en la carta natal.",
    "Analizar la cúspide, su signo y su regente permite comprender no solo lo que representa la casa, sino también la manera en que será vivida y hacia qué otro ámbito se desplazará su energía.",
    "La astrología no lee factores aislados. Lee redes de conexiones. Las cúspides son puertas, los regentes de las casas son los gestores de esas puertas, y los aspectos muestran las alianzas, las tensiones o los rodeos del destino.",
  ],
  methodeTitle: "Método de interpretación",
  methode: [
    "Mira la cúspide: ¿cuál es el signo? Es el ambiente del ámbito.",
    "Comprueba si hay un planeta cerca de la cúspide: actúa como filtro inmediato.",
    "Busca el regente del signo de la cúspide: ¿en qué casa se encuentra? Es el destino de la energía.",
    "Analiza sus aspectos: muestran si esa energía está sostenida, contrariada, amplificada o complicada.",
  ],
  faqTitle: "Preguntas frecuentes",
  faq: [
    { question: "¿Qué es una cúspide en astrología?", answer: "Una cúspide es el grado preciso donde comienza una casa astrológica. Actúa como la puerta de entrada de un ámbito de vida." },
    { question: "¿Por qué es importante el signo en la cúspide?", answer: "Porque colorea toda la experiencia de la casa. Indica la manera, el ambiente y el estilo con que se vivirá ese ámbito de vida." },
    { question: "¿Qué es el regente de la casa?", answer: "Es el planeta que gobierna el signo situado en la cúspide. Muestra adónde se desplaza y se realiza la energía de la casa dentro de la carta." },
    { question: "¿Es importante un planeta sobre una cúspide?", answer: "Sí. Un planeta cerca de una cúspide actúa a menudo como un filtro muy fuerte del ámbito en cuestión y se vuelve especialmente visible en la vida." },
  ],
  breadcrumb: { home: "Inicio", articles: "Artículos" },
};

export const cuspidesContent: Record<SeoLocale, ArticleData> = { fr, en, es };
