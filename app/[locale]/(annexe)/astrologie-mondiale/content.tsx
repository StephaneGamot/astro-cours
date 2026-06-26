import type { ReactNode } from "react";
import type { SeoLocale } from "@/lib/seo";

/* ====================================================================
   Astrologie mondiale (mundane) — contenu localisé (fr / en / es)
   Les clés logiques (id de section, maison "I"…"XII", ordre zodiacal
   des nations) sont identiques dans chaque langue ; seuls les textes
   sont traduits.
   ==================================================================== */

export type AstroMondialeContent = {
  meta: { title: string; description: string };
  jsonld: { headline: string; description: string; articleSection: string };
  hero: { badge: string; title: string; subtitle: string; highlights: string[] };
  tocLabel: string;
  sections: { id: string; label: string }[];
  avertissement: { titre: string; texte: string };
  defBox: { label: string; body: ReactNode };
  intro: ReactNode;
  definition: {
    title: string;
    resumeLabel: string;
    resume: string[];
    notLabel: string;
    ceQueCeNestPas: string[];
  };
  histoire: { title: string; intro: string[]; reperes: { label: string; sens: string }[] };
  cycles: { title: string; intro: string[]; items: { nom: string; periode: string; sens: string }[] };
  nations: { title: string; intro: string[]; elements: string[]; items: { signe: string; pays: string }[] };
  techniques: { title: string; intro: string[]; items: { nom: string; sens: string }[] };
  maisons: { title: string; intro: string[]; houseLabel: string; items: { maison: string; domaine: string }[] };
  exemples: {
    title: string;
    items: { titre: string; texte: string }[];
    erreursLabel: string;
    erreurs: string[];
  };
  faqDataTitle: string;
  faq: { q: string; a: string }[];
  faqVisibleTitle: string;
  faqVisible: { q: string; a: string }[];
  related: { title: string; items: { href: string; label: string }[] };
  footer: { planetes: string; signes: string; transits: string; maisons: string };
};

/* ============================== FR ============================== */
const fr: AstroMondialeContent = {
  meta: {
    title: "Astrologie mondiale : cycles et nations",
    description:
      "Astrologie mondiale : grands cycles planétaires, conjonctions Jupiter-Saturne, éclipses, ingrès et signes des nations. Lecture symbolique de l'histoire.",
  },
  jsonld: {
    headline: "Astrologie mondiale : cycles planétaires, nations et grandes conjonctions",
    description:
      "L'astrologie mondiale (mundane) étudie le ciel des collectivités : cycles des planètes lentes, grandes conjonctions, éclipses, cartes d'ingrès et régences nationales. Approche symbolique et historique.",
    articleSection: "Astrologie",
  },
  hero: {
    badge: "Cours d'astrologie — Collectif & histoire",
    title: "Astrologie mondiale : le ciel des nations",
    subtitle:
      "La branche qui ne lit pas l'individu mais les peuples, les États et les époques. Grands cycles planétaires, conjonctions, éclipses et cartes d'ingrès : une grammaire symbolique de l'histoire collective — jamais une prédiction mécanique.",
    highlights: [
      "Les grands cycles des planètes lentes",
      "Conjonctions Jupiter-Saturne & ères",
      "Éclipses, ingrès et lunaisons",
      "Signes et régences des nations",
    ],
  },
  tocLabel: "Sommaire",
  sections: [
    { id: "definition", label: "Définition" },
    { id: "histoire", label: "Histoire" },
    { id: "cycles", label: "Grands cycles" },
    { id: "techniques", label: "Cartes & éclipses" },
    { id: "nations", label: "Signes des nations" },
    { id: "maisons", label: "Maisons mondiales" },
    { id: "exemples", label: "Exemples" },
    { id: "faq", label: "FAQ" },
  ],
  avertissement: {
    titre: "Lecture symbolique, pas une prophétie",
    texte:
      "L'astrologie mondiale décrit des climats, des tensions et des cycles — elle ne fixe pas l'avenir et ne désigne aucun événement daté à l'avance de façon mécanique. Elle se lit comme une grille de sens sur l'histoire, jamais comme une certitude politique ou financière. Les décisions humaines restent décisives.",
  },
  defBox: {
    label: "Définition express",
    body: (
      <>
        L'<strong>astrologie mondiale</strong> (ou <em>mundane</em>, du latin <em>mundus</em>, « le monde »)
        est la branche qui étudie le ciel des <strong>collectivités</strong> — nations, peuples, institutions,
        économies — plutôt que celui des individus. Elle s'appuie sur les <strong>grands cycles planétaires</strong>,
        les <strong>éclipses</strong> et les <strong>cartes d'ingrès</strong> pour lire les climats d'une époque.
      </>
    ),
  },
  intro: (
    <>
      Avant d'être l'art du thème personnel, l'astrologie fut d'abord <strong>mondiale</strong> : les prêtres
      de Mésopotamie observaient le ciel pour le roi et le royaume, non pour le citoyen. L'astrologie mondiale
      hérite de cette vocation collective. Elle ne demande pas « qui suis-je ? » mais « dans quel climat vit
      une société ? ». Sa matière première : les planètes lentes — Jupiter, Saturne, Uranus, Neptune, Pluton —
      dont les cycles longs scandent les générations et les époques.
    </>
  ),
  definition: {
    title: "Définition",
    resumeLabel: "Ce que c'est",
    resume: [
      "L'étude astrologique des collectivités : nations, peuples, institutions, marchés.",
      "Une lecture des grands cycles planétaires et de leurs phases (conjonction, carré, opposition).",
      "L'analyse des éclipses, des cartes d'ingrès saisonnier et des grandes conjonctions.",
      "Une grammaire de l'histoire : relier des climats symboliques aux époques et aux générations.",
    ],
    notLabel: "Ce que ce n'est pas",
    ceQueCeNestPas: [
      "Une machine à prédire des dates d'événements précis (attentats, krachs, élections).",
      "Un déterminisme : le ciel décrit un climat, les humains gardent leur liberté d'action.",
      "Un horoscope individuel appliqué à la planète entière.",
      "Une science exacte reconnue : c'est une tradition symbolique et historique.",
    ],
  },
  histoire: {
    title: "Une histoire millénaire",
    intro: [
      "L'astrologie mondiale est la plus ancienne de toutes. Dès le IIᵉ millénaire avant notre ère, les scribes mésopotamiens consignent les présages célestes dans des séries comme l'Enūma Anu Enlil, lus pour le roi et l'État.",
      "Les Grecs, puis Ptolémée dans le Tetrabiblos, systématisent une astrologie « universelle » distincte de l'astrologie « généthliaque » (celle de la naissance individuelle). Au Moyen Âge, les astrologues arabes — Abu Ma'shar en tête — élaborent la doctrine des grandes conjonctions Jupiter-Saturne comme horloge des empires et des religions.",
      "À la Renaissance et jusqu'au XXᵉ siècle, l'astrologie mondiale accompagne la lecture des guerres, des crises et des régimes. Elle connaît un renouveau moderne avec l'étude fine des cycles des planètes transsaturniennes.",
    ],
    reperes: [
      { label: "Mésopotamie", sens: "Présages célestes pour le roi et le royaume : la naissance de l'astrologie d'État." },
      { label: "Ptolémée", sens: "Le Tetrabiblos distingue astrologie universelle (mondiale) et généthliaque (individuelle)." },
      { label: "Abu Ma'shar", sens: "Théorie des grandes conjonctions Jupiter-Saturne : l'horloge des empires et des religions." },
      { label: "Époque moderne", sens: "Étude des cycles d'Uranus, Neptune et Pluton comme marqueurs de générations et d'ères." },
    ],
  },
  cycles: {
    title: "Les grands cycles planétaires",
    intro: [
      "Le cœur de l'astrologie mondiale, ce sont les cycles formés par deux planètes lentes : leur conjonction ouvre un cycle, l'opposition en marque l'apogée et la prise de conscience, la conjonction suivante referme la boucle. Chaque cycle est un thème de fond pour une génération.",
      "On suit aussi le passage d'une planète lente dans un signe : Pluton change de signe environ tous les 12 à 20 ans, et chaque ingrès colore une époque entière.",
    ],
    items: [
      { nom: "Jupiter–Saturne", periode: "≈ 20 ans", sens: "La « grande conjonction » : horloge des cycles socio-économiques et politiques. Le changement d'élément (vers l'Air en 2020) marque le passage à une longue ère." },
      { nom: "Saturne–Pluton", periode: "≈ 33–38 ans", sens: "Restructurations de fond, crises de pouvoir et de sécurité, fins d'ordres anciens et bascules géopolitiques." },
      { nom: "Saturne–Neptune", periode: "≈ 36 ans", sens: "Idéologies et illusions collectives, montée et dissolution des croyances, climats d'incertitude économique." },
      { nom: "Uranus–Pluton", periode: "≈ 127 ans (cycle irrégulier)", sens: "Révolutions, ruptures radicales, transformations sociales profondes. Carré actif dans les années 1930 et 2010." },
      { nom: "Uranus–Neptune", periode: "≈ 171 ans", sens: "Grands changements de paradigme spirituel, technologique et culturel ; conjonction des années 1990." },
      { nom: "Neptune–Pluton", periode: "≈ 492 ans", sens: "Le plus long cycle courant : mutations civilisationnelles de très grande échelle, lentes et profondes." },
    ],
  },
  techniques: {
    title: "Cartes d'ingrès, éclipses et lunaisons",
    intro: [
      "Au-delà des cycles, l'astrologie mondiale dispose d'outils ponctuels pour « prendre le ciel » d'un pays à un moment donné. On dresse une carte pour la capitale, à l'instant exact d'un phénomène céleste.",
      "Ces cartes ne prédisent pas un événement isolé : elles décrivent une tonalité dominante pour la période qui s'ouvre.",
    ],
    items: [
      { nom: "Carte d'ingrès (Bélier)", sens: "Le thème dressé à l'entrée du Soleil en Bélier (équinoxe de printemps) pour une capitale : on y lit le climat de l'année à venir. Les ingrès des quatre saisons affinent la lecture." },
      { nom: "Grandes conjonctions", sens: "La carte d'une conjonction Jupiter-Saturne (ou d'une autre paire lente), dressée pour un lieu, sert de thème fondateur pour le cycle ouvert." },
      { nom: "Éclipses solaires & lunaires", sens: "Les éclipses signalent des points de bascule. On regarde leur signe, la maison où elles tombent dans le thème d'une nation, et les zones géographiques où elles sont visibles." },
      { nom: "Lunaisons", sens: "Nouvelles et pleines lunes, en particulier celles qui activent une éclipse ou un degré sensible, rythment le climat mois par mois." },
      { nom: "Thème national", sens: "Beaucoup d'États ont un « thème de fondation » (déclaration d'indépendance, proclamation de la République) que l'on active par transits et progressions." },
    ],
  },
  nations: {
    title: "Signes et régences des nations",
    intro: [
      "La tradition attribue à chaque pays, ville ou région un signe « régent ». Ces attributions varient selon les auteurs (Ptolémée, Lilly, Carter…) et se croisent toujours avec le thème de fondation réel d'un État. Voici quelques correspondances classiques, à prendre comme repères symboliques.",
    ],
    elements: ["Feu", "Terre", "Air", "Eau"],
    items: [
      { signe: "Bélier", pays: "Angleterre, Allemagne, Pologne, Danemark, Syrie. Villes : Naples, Florence, Marseille, Cracovie, Birmingham. Capitales pionnières et martiales." },
      { signe: "Taureau", pays: "Irlande, Chypre, Perse (Iran), Asie Mineure. Villes : Dublin, Leipzig, Palerme, Saint-Louis. Terres agricoles et de stabilité." },
      { signe: "Gémeaux", pays: "Belgique, Pays de Galles, États-Unis, Basse-Égypte, Sardaigne, Arménie. Villes : Londres, San Francisco, Cordoue, Nuremberg. Carrefours et médias." },
      { signe: "Cancer", pays: "Écosse, Pays-Bas, Nouvelle-Zélande, Paraguay, Anatolie. Villes : Amsterdam, Manchester, New York, Istanbul, Stockholm. Nations maritimes et du foyer ; Lune régente." },
      { signe: "Lion", pays: "France, Italie, Roumanie, Bohême, Sicile. Villes : Rome, Prague, Damas, Bombay, Los Angeles. Pouvoirs centralisés et faste." },
      { signe: "Vierge", pays: "Grèce, Suisse, Turquie, Mésopotamie (Irak), Croatie, Antilles. Villes : Paris, Boston, Lyon, Bagdad, Heidelberg. Ordre, précision et administration." },
      { signe: "Balance", pays: "Autriche, Chine, Tibet, Argentine, Birmanie, Haute-Égypte. Villes : Vienne, Lisbonne, Francfort, Copenhague, Anvers, Johannesburg. Diplomatie et équilibre." },
      { signe: "Scorpion", pays: "Maroc, Norvège, Algérie, Bavière, Catalogne. Villes : Liverpool, Washington, La Nouvelle-Orléans, Fès, Gand, Valence. Intensité et ressources cachées." },
      { signe: "Sagittaire", pays: "Espagne, Australie, Hongrie, Arabie, Dalmatie, Moravie, Madagascar. Villes : Tolède, Cologne, Avignon, Budapest, Stuttgart, Toronto. Expansion et grands espaces." },
      { signe: "Capricorne", pays: "Inde, Mexique, Afghanistan, Macédoine, Thrace, Bulgarie, Bosnie, Lituanie, Saxe, Orcades. Villes : Oxford, Bruxelles, Mexico, Delhi, Brandebourg. États, structures et montagnes." },
      { signe: "Verseau", pays: "Russie, Suède, Éthiopie, Prusse, Westphalie. Villes : Moscou, Hambourg, Salzbourg, Brême, Trente. Ruptures, idéaux collectifs et réformes." },
      { signe: "Poissons", pays: "Portugal, Normandie, Galice, Sahara, Nubie, Calabre, îles méditerranéennes. Villes : Alexandrie, Séville, Compostelle, Ratisbonne, Bournemouth. Spiritualité et frontières floues." },
    ],
  },
  maisons: {
    title: "Les maisons en astrologie mondiale",
    intro: [
      "Dans une carte mondiale (ingrès, éclipse, thème national), les douze maisons ne parlent plus d'un individu mais de la vie d'une collectivité. Voici leur sens dominant.",
    ],
    houseLabel: "Maison",
    items: [
      { maison: "I", domaine: "Le peuple, l'état général du pays, son humeur et sa vitalité." },
      { maison: "II", domaine: "L'économie nationale, les finances de l'État, la monnaie." },
      { maison: "III", domaine: "Communications, médias, transports, voisinage et écoles." },
      { maison: "IV", domaine: "Le territoire, l'opposition, l'agriculture, le climat intérieur." },
      { maison: "V", domaine: "Naissances, spectacle, sport, marchés spéculatifs et jeunesse." },
      { maison: "VI", domaine: "Travail, santé publique, armée de métier, services et fonction publique." },
      { maison: "VII", domaine: "Relations extérieures, alliances, traités et conflits ouverts." },
      { maison: "VIII", domaine: "Dette, impôts, crises, mortalité, finances partagées." },
      { maison: "IX", domaine: "Religion, justice supérieure, commerce extérieur, étranger lointain." },
      { maison: "X", domaine: "Le gouvernement, le chef de l'État, le prestige et l'autorité." },
      { maison: "XI", domaine: "Le parlement, les alliés, les projets et les réformes collectives." },
      { maison: "XII", domaine: "Ennemis cachés, prisons, hôpitaux, secrets et crises latentes." },
    ],
  },
  exemples: {
    title: "Lectures et applications",
    items: [
      {
        titre: "Le grand cycle de l'Air",
        texte:
          "La conjonction Jupiter-Saturne de 2020, passée du signe de Terre au signe d'Air (Verseau), est lue comme le seuil d'une longue ère où l'information, les réseaux et le collectif priment sur la matière et la propriété.",
      },
      {
        titre: "Une éclipse sur un thème national",
        texte:
          "Quand une éclipse tombe sur le Soleil ou l'Ascendant du thème de fondation d'un pays, la tradition y voit une année charnière pour son dirigeant ou son identité — un climat de remise en question plutôt qu'un événement fixé.",
      },
      {
        titre: "L'ingrès du printemps",
        texte:
          "Le thème de l'entrée du Soleil en Bélier, dressé pour une capitale, sert de météo symbolique de l'année : l'Ascendant, le maître du thème et la position des lentes en donnent la couleur dominante.",
      },
    ],
    erreursLabel: "Pièges à éviter",
    erreurs: [
      "Annoncer un événement daté précis à partir d'une seule configuration.",
      "Confondre climat symbolique et certitude politique ou financière.",
      "Plaquer un horoscope individuel sur une nation entière.",
      "Ignorer le contexte historique réel et les décisions humaines.",
      "Choisir la régence d'un pays sans tenir compte de son thème de fondation.",
      "Oublier qu'une éclipse décrit une tonalité, pas une catastrophe programmée.",
    ],
  },
  faqDataTitle: "Questions fréquentes sur l'astrologie mondiale",
  faq: [
    { q: "Qu'est-ce que l'astrologie mondiale ?", a: "C'est la branche qui étudie le ciel des collectivités — nations, peuples, institutions, économies — à travers les grands cycles planétaires, les éclipses et les cartes d'ingrès, plutôt que le thème d'un individu." },
    { q: "Pourquoi parle-t-on d'astrologie « mundane » ?", a: "« Mundane » vient du latin mundus, « le monde ». Le terme désigne l'astrologie du monde et des affaires publiques, par opposition à l'astrologie généthliaque (de la naissance individuelle)." },
    { q: "Qu'est-ce qu'une grande conjonction ?", a: "La rencontre de Jupiter et Saturne dans le ciel, environ tous les 20 ans. La tradition en fait l'horloge des cycles politiques et économiques ; le changement d'élément ouvre une ère plus longue." },
    { q: "Les éclipses prédisent-elles des catastrophes ?", a: "Non. Une éclipse marque un point de bascule symbolique. Elle décrit une tonalité pour la période et les zones où elle est visible, jamais un événement daté et inévitable." },
    { q: "Chaque pays a-t-il un signe ?", a: "La tradition attribue un signe régent à chaque pays, mais ces correspondances varient selon les auteurs. On les croise toujours avec le thème de fondation réel de l'État." },
    { q: "L'astrologie mondiale peut-elle prédire l'avenir ?", a: "Elle décrit des climats et des cycles, pas des dates précises. C'est une grille de lecture symbolique de l'histoire, où les décisions humaines restent déterminantes." },
  ],
  faqVisibleTitle: "Questions fréquentes sur l'astrologie mondiale",
  faqVisible: [
    {
      q: "Quelle est la différence entre astrologie mondiale et horoscope ?",
      a: "L'horoscope de presse parle d'un signe individuel au quotidien. L'astrologie mondiale ignore l'individu : elle lit les grands cycles des planètes lentes pour décrire le climat d'une époque, d'une nation ou d'une économie.",
    },
    {
      q: "Pourquoi la conjonction Jupiter-Saturne de 2020 est-elle importante ?",
      a: "Parce qu'elle a quitté la série des signes de Terre pour entrer dans l'Air (Verseau), amorçant un cycle d'environ deux siècles. La tradition y lit un basculement vers l'information, les réseaux et l'organisation collective.",
    },
    {
      q: "Comment dresse-t-on une carte d'ingrès ?",
      a: "On calcule le thème pour l'instant exact où le Soleil entre dans un signe cardinal (Bélier au printemps surtout), à la latitude et la longitude de la capitale concernée. L'Ascendant et le maître du thème en donnent la tonalité.",
    },
    {
      q: "L'astrologie mondiale est-elle reconnue scientifiquement ?",
      a: "Non. Comme toute l'astrologie, elle n'a pas de validité scientifique. On l'étudie comme une tradition symbolique et historique, précieuse pour comprendre la culture et l'histoire des idées, sans valeur prédictive démontrée.",
    },
  ],
  related: {
    title: "À voir aussi",
    items: [
      { href: "/maisons-dominantes", label: "Les maisons dominantes" },
      { href: "/signes-dominants", label: "Les signes dominants" },
    ],
  },
  footer: { planetes: "Planètes", signes: "Signes", transits: "Transits", maisons: "Maisons" },
};

/* ============================== EN ============================== */
const en: AstroMondialeContent = {
  meta: {
    title: "Mundane astrology: cycles and nations",
    description:
      "Mundane astrology: great planetary cycles, Jupiter-Saturn conjunctions, eclipses, ingresses, signs of nations. A symbolic reading of collective history.",
  },
  jsonld: {
    headline: "Mundane astrology: planetary cycles, nations and great conjunctions",
    description:
      "Mundane astrology studies the sky of collectives: cycles of the slow planets, great conjunctions, eclipses, ingress charts and national rulerships. A symbolic and historical approach.",
    articleSection: "Astrology",
  },
  hero: {
    badge: "Astrology course — Collective & history",
    title: "Mundane astrology: the sky of nations",
    subtitle:
      "The branch that reads not the individual but peoples, states and eras. Great planetary cycles, conjunctions, eclipses and ingress charts: a symbolic grammar of collective history — never a mechanical prediction.",
    highlights: [
      "The great cycles of the slow planets",
      "Jupiter-Saturn conjunctions & eras",
      "Eclipses, ingresses & lunations",
      "Signs and rulerships of nations",
    ],
  },
  tocLabel: "Contents",
  sections: [
    { id: "definition", label: "Definition" },
    { id: "histoire", label: "History" },
    { id: "cycles", label: "Great cycles" },
    { id: "techniques", label: "Charts & eclipses" },
    { id: "nations", label: "Signs of nations" },
    { id: "maisons", label: "Mundane houses" },
    { id: "exemples", label: "Examples" },
    { id: "faq", label: "FAQ" },
  ],
  avertissement: {
    titre: "A symbolic reading, not a prophecy",
    texte:
      "Mundane astrology describes climates, tensions and cycles — it does not fix the future and points to no dated event mechanically set in advance. It is read as a grid of meaning over history, never as a political or financial certainty. Human decisions remain decisive.",
  },
  defBox: {
    label: "Quick definition",
    body: (
      <>
        <strong>Mundane astrology</strong> (from the Latin <em>mundus</em>, &laquo;&nbsp;the world&nbsp;&raquo;)
        is the branch that studies the sky of <strong>collectives</strong> — nations, peoples, institutions,
        economies — rather than that of individuals. It relies on the <strong>great planetary cycles</strong>,
        <strong> eclipses</strong> and <strong>ingress charts</strong> to read the climates of an era.
      </>
    ),
  },
  intro: (
    <>
      Before being the art of the personal chart, astrology was first <strong>mundane</strong>: the priests
      of Mesopotamia watched the sky for the king and the kingdom, not for the citizen. Mundane astrology
      inherits this collective vocation. It does not ask &laquo;&nbsp;who am I?&nbsp;&raquo; but
      &laquo;&nbsp;in what climate does a society live?&nbsp;&raquo;. Its raw material: the slow planets —
      Jupiter, Saturn, Uranus, Neptune, Pluto — whose long cycles punctuate generations and eras.
    </>
  ),
  definition: {
    title: "Definition",
    resumeLabel: "What it is",
    resume: [
      "The astrological study of collectives: nations, peoples, institutions, markets.",
      "A reading of the great planetary cycles and their phases (conjunction, square, opposition).",
      "The analysis of eclipses, seasonal ingress charts and great conjunctions.",
      "A grammar of history: linking symbolic climates to eras and generations.",
    ],
    notLabel: "What it is not",
    ceQueCeNestPas: [
      "A machine for predicting precise event dates (attacks, crashes, elections).",
      "A determinism: the sky describes a climate, humans keep their freedom to act.",
      "An individual horoscope applied to the whole planet.",
      "A recognised exact science: it is a symbolic and historical tradition.",
    ],
  },
  histoire: {
    title: "A thousand-year history",
    intro: [
      "Mundane astrology is the oldest of all. As early as the 2nd millennium BCE, Mesopotamian scribes recorded celestial omens in series such as the Enūma Anu Enlil, read for the king and the state.",
      "The Greeks, then Ptolemy in the Tetrabiblos, systematised a 'universal' astrology distinct from 'genethliacal' astrology (that of individual birth). In the Middle Ages, Arab astrologers — Abu Ma'shar foremost — developed the doctrine of the great Jupiter-Saturn conjunctions as the clock of empires and religions.",
      "From the Renaissance to the 20th century, mundane astrology accompanied the reading of wars, crises and regimes. It enjoyed a modern revival with the fine study of the cycles of the trans-Saturnian planets.",
    ],
    reperes: [
      { label: "Mesopotamia", sens: "Celestial omens for the king and the kingdom: the birth of state astrology." },
      { label: "Ptolemy", sens: "The Tetrabiblos distinguishes universal (mundane) from genethliacal (individual) astrology." },
      { label: "Abu Ma'shar", sens: "Theory of the great Jupiter-Saturn conjunctions: the clock of empires and religions." },
      { label: "Modern era", sens: "Study of the cycles of Uranus, Neptune and Pluto as markers of generations and eras." },
    ],
  },
  cycles: {
    title: "The great planetary cycles",
    intro: [
      "The heart of mundane astrology lies in the cycles formed by two slow planets: their conjunction opens a cycle, the opposition marks its peak and awareness, the next conjunction closes the loop. Each cycle is an underlying theme for a generation.",
      "One also follows the passage of a slow planet through a sign: Pluto changes sign roughly every 12 to 20 years, and each ingress colours an entire era.",
    ],
    items: [
      { nom: "Jupiter–Saturn", periode: "≈ 20 years", sens: "The 'great conjunction': the clock of socio-economic and political cycles. The change of element (to Air in 2020) marks the move into a long era." },
      { nom: "Saturn–Pluto", periode: "≈ 33–38 years", sens: "Deep restructurings, crises of power and security, the ends of old orders and geopolitical shifts." },
      { nom: "Saturn–Neptune", periode: "≈ 36 years", sens: "Ideologies and collective illusions, the rise and dissolution of beliefs, climates of economic uncertainty." },
      { nom: "Uranus–Pluto", periode: "≈ 127 years (irregular cycle)", sens: "Revolutions, radical ruptures, deep social transformations. Square active in the 1930s and the 2010s." },
      { nom: "Uranus–Neptune", periode: "≈ 171 years", sens: "Great shifts of spiritual, technological and cultural paradigm; conjunction of the 1990s." },
      { nom: "Neptune–Pluto", periode: "≈ 492 years", sens: "The longest current cycle: very large-scale civilisational mutations, slow and deep." },
    ],
  },
  techniques: {
    title: "Ingress charts, eclipses and lunations",
    intro: [
      "Beyond the cycles, mundane astrology has occasional tools to 'take the sky' of a country at a given moment. A chart is cast for the capital, at the exact instant of a celestial phenomenon.",
      "These charts do not predict an isolated event: they describe a dominant tone for the period that opens.",
    ],
    items: [
      { nom: "Ingress chart (Aries)", sens: "The chart cast at the Sun's entry into Aries (spring equinox) for a capital: it reveals the climate of the coming year. The ingresses of the four seasons refine the reading." },
      { nom: "Great conjunctions", sens: "The chart of a Jupiter-Saturn conjunction (or another slow pair), cast for a place, serves as the founding chart for the cycle opened." },
      { nom: "Solar & lunar eclipses", sens: "Eclipses signal turning points. One looks at their sign, the house they fall in within a nation's chart, and the geographic areas where they are visible." },
      { nom: "Lunations", sens: "New and full moons, especially those that activate an eclipse or a sensitive degree, set the rhythm of the climate month by month." },
      { nom: "National chart", sens: "Many states have a 'founding chart' (declaration of independence, proclamation of the Republic) which is activated by transits and progressions." },
    ],
  },
  nations: {
    title: "Signs and rulerships of nations",
    intro: [
      "Tradition assigns each country, city or region a 'ruling' sign. These attributions vary by author (Ptolemy, Lilly, Carter…) and always cross with the actual founding chart of a state. Here are some classic correspondences, to be taken as symbolic markers.",
    ],
    elements: ["Fire", "Earth", "Air", "Water"],
    items: [
      { signe: "Aries", pays: "England, Germany, Poland, Denmark, Syria. Cities: Naples, Florence, Marseille, Krakow, Birmingham. Pioneering and martial capitals." },
      { signe: "Taurus", pays: "Ireland, Cyprus, Persia (Iran), Asia Minor. Cities: Dublin, Leipzig, Palermo, St Louis. Agricultural lands of stability." },
      { signe: "Gemini", pays: "Belgium, Wales, the United States, Lower Egypt, Sardinia, Armenia. Cities: London, San Francisco, Córdoba, Nuremberg. Crossroads and media." },
      { signe: "Cancer", pays: "Scotland, the Netherlands, New Zealand, Paraguay, Anatolia. Cities: Amsterdam, Manchester, New York, Istanbul, Stockholm. Maritime, home-bound nations; the Moon as ruler." },
      { signe: "Leo", pays: "France, Italy, Romania, Bohemia, Sicily. Cities: Rome, Prague, Damascus, Mumbai, Los Angeles. Centralised powers and splendour." },
      { signe: "Virgo", pays: "Greece, Switzerland, Turkey, Mesopotamia (Iraq), Croatia, the West Indies. Cities: Paris, Boston, Lyon, Baghdad, Heidelberg. Order, precision and administration." },
      { signe: "Libra", pays: "Austria, China, Tibet, Argentina, Burma, Upper Egypt. Cities: Vienna, Lisbon, Frankfurt, Copenhagen, Antwerp, Johannesburg. Diplomacy and balance." },
      { signe: "Scorpio", pays: "Morocco, Norway, Algeria, Bavaria, Catalonia. Cities: Liverpool, Washington, New Orleans, Fez, Ghent, Valencia. Intensity and hidden resources." },
      { signe: "Sagittarius", pays: "Spain, Australia, Hungary, Arabia, Dalmatia, Moravia, Madagascar. Cities: Toledo, Cologne, Avignon, Budapest, Stuttgart, Toronto. Expansion and wide-open spaces." },
      { signe: "Capricorn", pays: "India, Mexico, Afghanistan, Macedonia, Thrace, Bulgaria, Bosnia, Lithuania, Saxony, Orkney. Cities: Oxford, Brussels, Mexico City, Delhi, Brandenburg. States, structures and mountains." },
      { signe: "Aquarius", pays: "Russia, Sweden, Ethiopia, Prussia, Westphalia. Cities: Moscow, Hamburg, Salzburg, Bremen, Trento. Ruptures, collective ideals and reforms." },
      { signe: "Pisces", pays: "Portugal, Normandy, Galicia, the Sahara, Nubia, Calabria, Mediterranean isles. Cities: Alexandria, Seville, Compostela, Regensburg, Bournemouth. Spirituality and blurred borders." },
    ],
  },
  maisons: {
    title: "Houses in mundane astrology",
    intro: [
      "In a mundane chart (ingress, eclipse, national chart), the twelve houses no longer speak of an individual but of the life of a collective. Here is their dominant meaning.",
    ],
    houseLabel: "House",
    items: [
      { maison: "I", domaine: "The people, the general state of the country, its mood and vitality." },
      { maison: "II", domaine: "The national economy, the state's finances, the currency." },
      { maison: "III", domaine: "Communications, media, transport, neighbourhood and schools." },
      { maison: "IV", domaine: "The land, the opposition, agriculture, the domestic climate." },
      { maison: "V", domaine: "Births, entertainment, sport, speculative markets and youth." },
      { maison: "VI", domaine: "Labour, public health, the professional army, services and the civil service." },
      { maison: "VII", domaine: "Foreign relations, alliances, treaties and open conflicts." },
      { maison: "VIII", domaine: "Debt, taxes, crises, mortality, shared finances." },
      { maison: "IX", domaine: "Religion, higher justice, foreign trade, the distant abroad." },
      { maison: "X", domaine: "The government, the head of state, prestige and authority." },
      { maison: "XI", domaine: "Parliament, allies, projects and collective reforms." },
      { maison: "XII", domaine: "Hidden enemies, prisons, hospitals, secrets and latent crises." },
    ],
  },
  exemples: {
    title: "Readings and applications",
    items: [
      {
        titre: "The great Air cycle",
        texte:
          "The Jupiter-Saturn conjunction of 2020, which moved from an Earth sign to an Air sign (Aquarius), is read as the threshold of a long era where information, networks and the collective prevail over matter and property.",
      },
      {
        titre: "An eclipse on a national chart",
        texte:
          "When an eclipse falls on the Sun or Ascendant of a country's founding chart, tradition sees a pivotal year for its leader or identity — a climate of questioning rather than a fixed event.",
      },
      {
        titre: "The spring ingress",
        texte:
          "The chart of the Sun's entry into Aries, cast for a capital, serves as the symbolic weather of the year: the Ascendant, the chart ruler and the position of the slow planets give its dominant colour.",
      },
    ],
    erreursLabel: "Pitfalls to avoid",
    erreurs: [
      "Announcing a precise dated event from a single configuration.",
      "Confusing a symbolic climate with political or financial certainty.",
      "Pasting an individual horoscope onto a whole nation.",
      "Ignoring the real historical context and human decisions.",
      "Choosing a country's rulership without considering its founding chart.",
      "Forgetting that an eclipse describes a tone, not a programmed catastrophe.",
    ],
  },
  faqDataTitle: "Frequently asked questions about mundane astrology",
  faq: [
    { q: "What is mundane astrology?", a: "It is the branch that studies the sky of collectives — nations, peoples, institutions, economies — through the great planetary cycles, eclipses and ingress charts, rather than an individual's chart." },
    { q: "Why is it called 'mundane' astrology?", a: "'Mundane' comes from the Latin mundus, 'the world'. The term refers to the astrology of the world and public affairs, as opposed to genethliacal astrology (of individual birth)." },
    { q: "What is a great conjunction?", a: "The meeting of Jupiter and Saturn in the sky, roughly every 20 years. Tradition makes it the clock of political and economic cycles; the change of element opens a longer era." },
    { q: "Do eclipses predict catastrophes?", a: "No. An eclipse marks a symbolic turning point. It describes a tone for the period and the areas where it is visible, never a dated and inevitable event." },
    { q: "Does each country have a sign?", a: "Tradition assigns a ruling sign to each country, but these correspondences vary by author. They are always crossed with the actual founding chart of the state." },
    { q: "Can mundane astrology predict the future?", a: "It describes climates and cycles, not precise dates. It is a symbolic reading grid over history, where human decisions remain decisive." },
  ],
  faqVisibleTitle: "Frequently asked questions about mundane astrology",
  faqVisible: [
    {
      q: "What is the difference between mundane astrology and a horoscope?",
      a: "The newspaper horoscope speaks of an individual sign day to day. Mundane astrology ignores the individual: it reads the great cycles of the slow planets to describe the climate of an era, a nation or an economy.",
    },
    {
      q: "Why is the 2020 Jupiter-Saturn conjunction important?",
      a: "Because it left the series of Earth signs to enter Air (Aquarius), beginning a cycle of about two centuries. Tradition reads in it a shift towards information, networks and collective organisation.",
    },
    {
      q: "How is an ingress chart cast?",
      a: "The chart is calculated for the exact moment the Sun enters a cardinal sign (Aries in spring above all), at the latitude and longitude of the relevant capital. The Ascendant and the chart ruler give its tone.",
    },
    {
      q: "Is mundane astrology scientifically recognised?",
      a: "No. Like all astrology, it has no scientific validity. It is studied as a symbolic and historical tradition, valuable for understanding culture and the history of ideas, with no demonstrated predictive value.",
    },
  ],
  related: {
    title: "See also",
    items: [
      { href: "/maisons-dominantes", label: "Dominant houses" },
      { href: "/signes-dominants", label: "Dominant signs" },
    ],
  },
  footer: { planetes: "Planets", signes: "Signs", transits: "Transits", maisons: "Houses" },
};

/* ============================== ES ============================== */
const es: AstroMondialeContent = {
  meta: {
    title: "Astrología mundial: ciclos y naciones",
    description:
      "Astrología mundial: grandes ciclos planetarios, conjunciones Júpiter-Saturno, eclipses, ingresos y signos de las naciones. Lectura simbólica de la historia.",
  },
  jsonld: {
    headline: "Astrología mundial: ciclos planetarios, naciones y grandes conjunciones",
    description:
      "La astrología mundial estudia el cielo de las colectividades: ciclos de los planetas lentos, grandes conjunciones, eclipses, cartas de ingreso y regencias nacionales. Un enfoque simbólico e histórico.",
    articleSection: "Astrología",
  },
  hero: {
    badge: "Curso de astrología — Colectivo e historia",
    title: "Astrología mundial: el cielo de las naciones",
    subtitle:
      "La rama que no lee al individuo sino a los pueblos, los Estados y las épocas. Grandes ciclos planetarios, conjunciones, eclipses y cartas de ingreso: una gramática simbólica de la historia colectiva — nunca una predicción mecánica.",
    highlights: [
      "Los grandes ciclos de los planetas lentos",
      "Conjunciones Júpiter-Saturno y eras",
      "Eclipses, ingresos y lunaciones",
      "Signos y regencias de las naciones",
    ],
  },
  tocLabel: "Índice",
  sections: [
    { id: "definition", label: "Definición" },
    { id: "histoire", label: "Historia" },
    { id: "cycles", label: "Grandes ciclos" },
    { id: "techniques", label: "Cartas y eclipses" },
    { id: "nations", label: "Signos de las naciones" },
    { id: "maisons", label: "Casas mundiales" },
    { id: "exemples", label: "Ejemplos" },
    { id: "faq", label: "FAQ" },
  ],
  avertissement: {
    titre: "Una lectura simbólica, no una profecía",
    texte:
      "La astrología mundial describe climas, tensiones y ciclos — no fija el futuro ni señala ningún acontecimiento fechado de antemano de forma mecánica. Se lee como una rejilla de sentido sobre la historia, nunca como una certeza política o financiera. Las decisiones humanas siguen siendo decisivas.",
  },
  defBox: {
    label: "Definición exprés",
    body: (
      <>
        La <strong>astrología mundial</strong> (del latín <em>mundus</em>, &laquo;&nbsp;el mundo&nbsp;&raquo;)
        es la rama que estudia el cielo de las <strong>colectividades</strong> — naciones, pueblos, instituciones,
        economías — más que el de los individuos. Se apoya en los <strong>grandes ciclos planetarios</strong>,
        los <strong>eclipses</strong> y las <strong>cartas de ingreso</strong> para leer los climas de una época.
      </>
    ),
  },
  intro: (
    <>
      Antes de ser el arte de la carta personal, la astrología fue primero <strong>mundial</strong>: los sacerdotes
      de Mesopotamia observaban el cielo para el rey y el reino, no para el ciudadano. La astrología mundial
      hereda esa vocación colectiva. No pregunta &laquo;&nbsp;¿quién soy?&nbsp;&raquo; sino
      &laquo;&nbsp;¿en qué clima vive una sociedad?&nbsp;&raquo;. Su materia prima: los planetas lentos —
      Júpiter, Saturno, Urano, Neptuno, Plutón — cuyos largos ciclos marcan las generaciones y las épocas.
    </>
  ),
  definition: {
    title: "Definición",
    resumeLabel: "Lo que es",
    resume: [
      "El estudio astrológico de las colectividades: naciones, pueblos, instituciones, mercados.",
      "Una lectura de los grandes ciclos planetarios y de sus fases (conjunción, cuadratura, oposición).",
      "El análisis de los eclipses, de las cartas de ingreso estacional y de las grandes conjunciones.",
      "Una gramática de la historia: relacionar climas simbólicos con épocas y generaciones.",
    ],
    notLabel: "Lo que no es",
    ceQueCeNestPas: [
      "Una máquina para predecir fechas precisas de acontecimientos (atentados, cracs, elecciones).",
      "Un determinismo: el cielo describe un clima, los humanos conservan su libertad de acción.",
      "Un horóscopo individual aplicado al planeta entero.",
      "Una ciencia exacta reconocida: es una tradición simbólica e histórica.",
    ],
  },
  histoire: {
    title: "Una historia milenaria",
    intro: [
      "La astrología mundial es la más antigua de todas. Ya en el II milenio antes de nuestra era, los escribas mesopotámicos consignaban los presagios celestes en series como el Enūma Anu Enlil, leídos para el rey y el Estado.",
      "Los griegos, y luego Ptolomeo en el Tetrabiblos, sistematizan una astrología «universal» distinta de la astrología «genetlíaca» (la del nacimiento individual). En la Edad Media, los astrólogos árabes — Abu Ma'shar a la cabeza — elaboran la doctrina de las grandes conjunciones Júpiter-Saturno como reloj de los imperios y las religiones.",
      "Desde el Renacimiento hasta el siglo XX, la astrología mundial acompaña la lectura de las guerras, las crisis y los regímenes. Conoce un renacimiento moderno con el estudio detallado de los ciclos de los planetas transaturninos.",
    ],
    reperes: [
      { label: "Mesopotamia", sens: "Presagios celestes para el rey y el reino: el nacimiento de la astrología de Estado." },
      { label: "Ptolomeo", sens: "El Tetrabiblos distingue astrología universal (mundial) y genetlíaca (individual)." },
      { label: "Abu Ma'shar", sens: "Teoría de las grandes conjunciones Júpiter-Saturno: el reloj de los imperios y las religiones." },
      { label: "Época moderna", sens: "Estudio de los ciclos de Urano, Neptuno y Plutón como marcadores de generaciones y eras." },
    ],
  },
  cycles: {
    title: "Los grandes ciclos planetarios",
    intro: [
      "El corazón de la astrología mundial son los ciclos formados por dos planetas lentos: su conjunción abre un ciclo, la oposición marca su apogeo y la toma de conciencia, la conjunción siguiente cierra el bucle. Cada ciclo es un tema de fondo para una generación.",
      "También se sigue el paso de un planeta lento por un signo: Plutón cambia de signo cada 12 a 20 años aproximadamente, y cada ingreso colorea toda una época.",
    ],
    items: [
      { nom: "Júpiter–Saturno", periode: "≈ 20 años", sens: "La «gran conjunción»: reloj de los ciclos socioeconómicos y políticos. El cambio de elemento (al Aire en 2020) marca el paso a una larga era." },
      { nom: "Saturno–Plutón", periode: "≈ 33–38 años", sens: "Reestructuraciones de fondo, crisis de poder y de seguridad, fines de órdenes antiguos y vuelcos geopolíticos." },
      { nom: "Saturno–Neptuno", periode: "≈ 36 años", sens: "Ideologías e ilusiones colectivas, auge y disolución de las creencias, climas de incertidumbre económica." },
      { nom: "Urano–Plutón", periode: "≈ 127 años (ciclo irregular)", sens: "Revoluciones, rupturas radicales, transformaciones sociales profundas. Cuadratura activa en los años 1930 y 2010." },
      { nom: "Urano–Neptuno", periode: "≈ 171 años", sens: "Grandes cambios de paradigma espiritual, tecnológico y cultural; conjunción de los años 1990." },
      { nom: "Neptuno–Plutón", periode: "≈ 492 años", sens: "El ciclo en curso más largo: mutaciones civilizatorias de gran escala, lentas y profundas." },
    ],
  },
  techniques: {
    title: "Cartas de ingreso, eclipses y lunaciones",
    intro: [
      "Más allá de los ciclos, la astrología mundial dispone de herramientas puntuales para «tomar el cielo» de un país en un momento dado. Se levanta una carta para la capital, en el instante exacto de un fenómeno celeste.",
      "Estas cartas no predicen un acontecimiento aislado: describen una tonalidad dominante para el periodo que se abre.",
    ],
    items: [
      { nom: "Carta de ingreso (Aries)", sens: "La carta levantada en la entrada del Sol en Aries (equinoccio de primavera) para una capital: revela el clima del año por venir. Los ingresos de las cuatro estaciones afinan la lectura." },
      { nom: "Grandes conjunciones", sens: "La carta de una conjunción Júpiter-Saturno (u otro par lento), levantada para un lugar, sirve de carta fundadora del ciclo abierto." },
      { nom: "Eclipses solares y lunares", sens: "Los eclipses señalan puntos de inflexión. Se observa su signo, la casa en la que caen en la carta de una nación, y las zonas geográficas donde son visibles." },
      { nom: "Lunaciones", sens: "Lunas nuevas y llenas, en particular las que activan un eclipse o un grado sensible, marcan el ritmo del clima mes a mes." },
      { nom: "Carta nacional", sens: "Muchos Estados tienen una «carta de fundación» (declaración de independencia, proclamación de la República) que se activa mediante tránsitos y progresiones." },
    ],
  },
  nations: {
    title: "Signos y regencias de las naciones",
    intro: [
      "La tradición atribuye a cada país, ciudad o región un signo «regente». Estas atribuciones varían según los autores (Ptolomeo, Lilly, Carter…) y siempre se cruzan con la carta de fundación real de un Estado. Aquí algunas correspondencias clásicas, a tomar como referencias simbólicas.",
    ],
    elements: ["Fuego", "Tierra", "Aire", "Agua"],
    items: [
      { signe: "Aries", pays: "Inglaterra, Alemania, Polonia, Dinamarca, Siria. Ciudades: Nápoles, Florencia, Marsella, Cracovia, Birmingham. Capitales pioneras y marciales." },
      { signe: "Tauro", pays: "Irlanda, Chipre, Persia (Irán), Asia Menor. Ciudades: Dublín, Leipzig, Palermo, San Luis. Tierras agrícolas y de estabilidad." },
      { signe: "Géminis", pays: "Bélgica, Gales, Estados Unidos, Bajo Egipto, Cerdeña, Armenia. Ciudades: Londres, San Francisco, Córdoba, Núremberg. Cruces de caminos y medios." },
      { signe: "Cáncer", pays: "Escocia, Países Bajos, Nueva Zelanda, Paraguay, Anatolia. Ciudades: Ámsterdam, Mánchester, Nueva York, Estambul, Estocolmo. Naciones marítimas y del hogar; la Luna regente." },
      { signe: "Leo", pays: "Francia, Italia, Rumanía, Bohemia, Sicilia. Ciudades: Roma, Praga, Damasco, Bombay, Los Ángeles. Poderes centralizados y fasto." },
      { signe: "Virgo", pays: "Grecia, Suiza, Turquía, Mesopotamia (Irak), Croacia, Antillas. Ciudades: París, Boston, Lyon, Bagdad, Heidelberg. Orden, precisión y administración." },
      { signe: "Libra", pays: "Austria, China, Tíbet, Argentina, Birmania, Alto Egipto. Ciudades: Viena, Lisboa, Fráncfort, Copenhague, Amberes, Johannesburgo. Diplomacia y equilibrio." },
      { signe: "Escorpio", pays: "Marruecos, Noruega, Argelia, Baviera, Cataluña. Ciudades: Liverpool, Washington, Nueva Orleans, Fez, Gante, Valencia. Intensidad y recursos ocultos." },
      { signe: "Sagitario", pays: "España, Australia, Hungría, Arabia, Dalmacia, Moravia, Madagascar. Ciudades: Toledo, Colonia, Aviñón, Budapest, Stuttgart, Toronto. Expansión y grandes espacios." },
      { signe: "Capricornio", pays: "India, México, Afganistán, Macedonia, Tracia, Bulgaria, Bosnia, Lituania, Sajonia, Orcadas. Ciudades: Oxford, Bruselas, Ciudad de México, Delhi, Brandeburgo. Estados, estructuras y montañas." },
      { signe: "Acuario", pays: "Rusia, Suecia, Etiopía, Prusia, Westfalia. Ciudades: Moscú, Hamburgo, Salzburgo, Bremen, Trento. Rupturas, ideales colectivos y reformas." },
      { signe: "Piscis", pays: "Portugal, Normandía, Galicia, Sáhara, Nubia, Calabria, islas mediterráneas. Ciudades: Alejandría, Sevilla, Compostela, Ratisbona, Bournemouth. Espiritualidad y fronteras difusas." },
    ],
  },
  maisons: {
    title: "Las casas en la astrología mundial",
    intro: [
      "En una carta mundial (ingreso, eclipse, carta nacional), las doce casas ya no hablan de un individuo sino de la vida de una colectividad. Aquí su sentido dominante.",
    ],
    houseLabel: "Casa",
    items: [
      { maison: "I", domaine: "El pueblo, el estado general del país, su humor y su vitalidad." },
      { maison: "II", domaine: "La economía nacional, las finanzas del Estado, la moneda." },
      { maison: "III", domaine: "Comunicaciones, medios, transportes, vecindad y escuelas." },
      { maison: "IV", domaine: "El territorio, la oposición, la agricultura, el clima interior." },
      { maison: "V", domaine: "Nacimientos, espectáculo, deporte, mercados especulativos y juventud." },
      { maison: "VI", domaine: "Trabajo, salud pública, ejército profesional, servicios y función pública." },
      { maison: "VII", domaine: "Relaciones exteriores, alianzas, tratados y conflictos abiertos." },
      { maison: "VIII", domaine: "Deuda, impuestos, crisis, mortalidad, finanzas compartidas." },
      { maison: "IX", domaine: "Religión, justicia superior, comercio exterior, el extranjero lejano." },
      { maison: "X", domaine: "El gobierno, el jefe del Estado, el prestigio y la autoridad." },
      { maison: "XI", domaine: "El parlamento, los aliados, los proyectos y las reformas colectivas." },
      { maison: "XII", domaine: "Enemigos ocultos, prisiones, hospitales, secretos y crisis latentes." },
    ],
  },
  exemples: {
    title: "Lecturas y aplicaciones",
    items: [
      {
        titre: "El gran ciclo del Aire",
        texte:
          "La conjunción Júpiter-Saturno de 2020, que pasó de un signo de Tierra a uno de Aire (Acuario), se lee como el umbral de una larga era en la que la información, las redes y lo colectivo priman sobre la materia y la propiedad.",
      },
      {
        titre: "Un eclipse sobre una carta nacional",
        texte:
          "Cuando un eclipse cae sobre el Sol o el Ascendente de la carta de fundación de un país, la tradición ve en ello un año bisagra para su dirigente o su identidad — un clima de cuestionamiento más que un acontecimiento fijado.",
      },
      {
        titre: "El ingreso de primavera",
        texte:
          "La carta de la entrada del Sol en Aries, levantada para una capital, sirve de meteorología simbólica del año: el Ascendente, el regente de la carta y la posición de los lentos le dan su color dominante.",
      },
    ],
    erreursLabel: "Errores a evitar",
    erreurs: [
      "Anunciar un acontecimiento fechado preciso a partir de una sola configuración.",
      "Confundir clima simbólico con certeza política o financiera.",
      "Aplicar un horóscopo individual a toda una nación.",
      "Ignorar el contexto histórico real y las decisiones humanas.",
      "Elegir la regencia de un país sin tener en cuenta su carta de fundación.",
      "Olvidar que un eclipse describe una tonalidad, no una catástrofe programada.",
    ],
  },
  faqDataTitle: "Preguntas frecuentes sobre la astrología mundial",
  faq: [
    { q: "¿Qué es la astrología mundial?", a: "Es la rama que estudia el cielo de las colectividades — naciones, pueblos, instituciones, economías — a través de los grandes ciclos planetarios, los eclipses y las cartas de ingreso, más que la carta de un individuo." },
    { q: "¿Por qué se habla de astrología «mundana»?", a: "«Mundana» viene del latín mundus, «el mundo». El término designa la astrología del mundo y de los asuntos públicos, por oposición a la astrología genetlíaca (del nacimiento individual)." },
    { q: "¿Qué es una gran conjunción?", a: "El encuentro de Júpiter y Saturno en el cielo, cada 20 años aproximadamente. La tradición la convierte en el reloj de los ciclos políticos y económicos; el cambio de elemento abre una era más larga." },
    { q: "¿Los eclipses predicen catástrofes?", a: "No. Un eclipse marca un punto de inflexión simbólico. Describe una tonalidad para el periodo y las zonas donde es visible, nunca un acontecimiento fechado e inevitable." },
    { q: "¿Cada país tiene un signo?", a: "La tradición atribuye un signo regente a cada país, pero estas correspondencias varían según los autores. Siempre se cruzan con la carta de fundación real del Estado." },
    { q: "¿Puede la astrología mundial predecir el futuro?", a: "Describe climas y ciclos, no fechas precisas. Es una rejilla de lectura simbólica de la historia, donde las decisiones humanas siguen siendo determinantes." },
  ],
  faqVisibleTitle: "Preguntas frecuentes sobre la astrología mundial",
  faqVisible: [
    {
      q: "¿Cuál es la diferencia entre astrología mundial y horóscopo?",
      a: "El horóscopo de prensa habla de un signo individual a diario. La astrología mundial ignora al individuo: lee los grandes ciclos de los planetas lentos para describir el clima de una época, una nación o una economía.",
    },
    {
      q: "¿Por qué es importante la conjunción Júpiter-Saturno de 2020?",
      a: "Porque abandonó la serie de signos de Tierra para entrar en Aire (Acuario), iniciando un ciclo de unos dos siglos. La tradición lee en ello un vuelco hacia la información, las redes y la organización colectiva.",
    },
    {
      q: "¿Cómo se levanta una carta de ingreso?",
      a: "Se calcula la carta para el momento exacto en que el Sol entra en un signo cardinal (Aries en primavera sobre todo), en la latitud y longitud de la capital correspondiente. El Ascendente y el regente de la carta dan su tonalidad.",
    },
    {
      q: "¿Está reconocida científicamente la astrología mundial?",
      a: "No. Como toda la astrología, no tiene validez científica. Se estudia como una tradición simbólica e histórica, valiosa para comprender la cultura y la historia de las ideas, sin valor predictivo demostrado.",
    },
  ],
  related: {
    title: "Ver también",
    items: [
      { href: "/maisons-dominantes", label: "Casas dominantes" },
      { href: "/signes-dominants", label: "Signos dominantes" },
    ],
  },
  footer: { planetes: "Planetas", signes: "Signos", transits: "Tránsitos", maisons: "Casas" },
};

export const astrologieMondialeContent: Record<SeoLocale, AstroMondialeContent> = { fr, en, es };
