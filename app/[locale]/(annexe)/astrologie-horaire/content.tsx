import { Link } from "@/i18n/navigation";
import type { ReactNode } from "react";
import type { SeoLocale } from "@/lib/seo";

/* ====================================================================
   Astrologie horaire — contenu localisé (fr / en / es)
   Les clés logiques (section id, slug des mouvements de lumière,
   chiffres romains des maisons, scores des dignités, href des liens)
   sont identiques dans chaque langue ; seuls les textes sont traduits.
   ==================================================================== */

export type HoraireContent = {
  meta: { title: string; description: string };
  jsonld: { headline: string; description: string; articleSection: string };
  hero: { badge: string; title: string; subtitle: string; highlights: string[] };
  defBoxBody: ReactNode;
  introBody: ReactNode;
  sections: { id: string; label: string }[];
  labels: {
    h2Definition: string;
    h2Principe: string;
    h2Validite: string;
    h2Significateurs: string;
    h2Maisons: string;
    h2Lumiere: string;
    h2Dignites: string;
    h2Lune: string;
    h2Receptions: string;
    h2Timing: string;
    h2Exemples: string;
    h2Faq: string;
    defEyebrow: string;
    resume: string;
    ceQueCeNestPas: string;
    conditions: string;
    digEssentielles: string;
    accFortifiantes: string;
    accDebilitantes: string;
    reglesEstimation: string;
    exemple: string;
    erreurs: string;
    maisonPrefix: string;
    faqVisibleTitle: string;
    tocAria: string;
    footerAspects: string;
    footerPlanetes: string;
    footerMaitrises: string;
    footerMaisons: string;
  };
  definition: { resume: string[]; ceQueCeNestPas: string[] };
  principe: { intro: string[]; conditions: string[] };
  validite: { intro: string[]; strictures: { label: string; sens: string }[]; note: string };
  significateurs: { intro: string[]; regles: { label: string; sens: string }[]; aspectsCles: string };
  maisonsQuestions: { maison: string; domaine: string; exemples: string }[];
  mouvementsLumiere: { intro: string[]; items: { nom: string; slug: string; sens: string; cle: string }[] };
  dignites: {
    intro: string[];
    essentielles: { label: string; score: string; sens: string }[];
    accidentelles: { fortifiantes: string[]; debilitantes: string[] };
  };
  lune: { intro: string[]; points: { label: string; sens: string }[] };
  receptions: { intro: string[]; items: { label: string; sens: string }[]; note: string };
  timing: { intro: string[]; regles: string[]; exemple: string };
  exemplesLecture: { titre: string; texte: string }[];
  erreurs: string[];
  faq: { q: string; a: string }[];
  faqVisible: { q: string; a: string }[];
};

/* ============================== FR ============================== */
const fr: HoraireContent = {
  meta: {
    title: "Astrologie horaire : la méthode complète",
    description:
      "Astrologie horaire : méthode complète. Significateurs, maisons des questions, mouvements de lumière, dignités, Lune et timing. Cours gratuit.",
  },
  jsonld: {
    headline: "Astrologie horaire : poser une question, lire la réponse",
    description:
      "Astrologie horaire : méthode complète. Conditions de validité, significateurs, maisons des questions, mouvements de lumière, dignités, Lune et timing.",
    articleSection: "Astrologie",
  },
  hero: {
    badge: "Cours d’astrologie — Tradition classique",
    title: "Astrologie horaire : la carte d’une question",
    subtitle:
      "Dresser un thème pour l’instant exact d’une question précise, puis lire la réponse dans la mécanique du ciel. La technique la plus ancienne et la plus exigeante de l’astrologie occidentale.",
    highlights: [
      "Conditions de validité (radicalité)",
      "Significateurs : qui est qui dans la carte",
      "Maisons des questions (1 à 12)",
      "Mouvements de lumière & timing",
    ],
  },
  defBoxBody: (
    <>
      L’<strong>astrologie horaire</strong> est la technique traditionnelle qui répond à une question précise en dressant
      le <Link href="/#planetes">thème astrologique</Link> de l’instant et du lieu où la question est posée et comprise.
    </>
  ),
  introBody: (
    <>
      Vous voulez savoir si une affaire aboutira, si une personne reviendra, si un objet perdu sera retrouvé ? L’
      <strong>astrologie horaire</strong> (de l’ancienne tradition de Bonatti et William Lilly) ne décrit pas un caractère
      comme le thème natal : elle juge une <strong>situation concrète</strong> à partir de la carte du ciel au moment exact
      de la question. Ce cours complet vous guide des conditions de validité jusqu’au calcul du délai de réalisation.
    </>
  ),
  sections: [
    { id: "definition", label: "Définition" },
    { id: "principe", label: "Principe" },
    { id: "validite", label: "Validité" },
    { id: "significateurs", label: "Significateurs" },
    { id: "maisons", label: "Maisons & questions" },
    { id: "lumiere", label: "Mouvements de lumière" },
    { id: "dignites", label: "Dignités" },
    { id: "lune", label: "La Lune" },
    { id: "receptions", label: "Réceptions" },
    { id: "timing", label: "Timing" },
    { id: "exemples", label: "Exemples" },
    { id: "faq", label: "FAQ" },
  ],
  labels: {
    h2Definition: "Qu’est-ce que l’astrologie horaire ?",
    h2Principe: "Le principe : la carte d’un instant",
    h2Validite: "La carte est-elle valable ? (radicalité)",
    h2Significateurs: "Les significateurs : qui est qui dans la carte",
    h2Maisons: "Quelle maison pour quelle question ?",
    h2Lumiere: "Les mouvements de lumière entre planètes",
    h2Dignites: "Dignités essentielles et accidentelles",
    h2Lune: "Le rôle central de la Lune",
    h2Receptions: "Les réceptions : la disposition des planètes",
    h2Timing: "Le timing : quand cela arrivera-t-il ?",
    h2Exemples: "Exemples concrets de questions horaires",
    h2Faq: "Questions fréquentes sur l’astrologie horaire",
    defEyebrow: "Définition",
    resume: "Résumé",
    ceQueCeNestPas: "Ce que ce n’est pas",
    conditions: "Conditions d’une bonne question",
    digEssentielles: "Dignités essentielles (force intrinsèque)",
    accFortifiantes: "Accidentelles fortifiantes",
    accDebilitantes: "Accidentelles débilitantes",
    reglesEstimation: "Règles d’estimation",
    exemple: "Exemple",
    erreurs: "Erreurs fréquentes à éviter",
    maisonPrefix: "Maison",
    faqVisibleTitle: "Questions fréquentes sur l’astrologie horaire",
    tocAria: "Sommaire",
    footerAspects: "Aspects",
    footerPlanetes: "Planètes",
    footerMaitrises: "Maîtrises",
    footerMaisons: "Maisons",
  },
  definition: {
    resume: [
      "L’astrologie horaire répond à une question précise en dressant le thème de l’instant et du lieu où la question est comprise par l’astrologue.",
      "Elle ne décrit pas une personnalité (comme le thème natal) mais juge une situation : oui/non, et comment cela se déroulera.",
      "C’est une astrologie de tradition (Bonatti, William Lilly, XVIIe siècle), fondée sur des règles strictes plutôt que sur l’intuition.",
    ],
    ceQueCeNestPas: [
      "Un thème natal ou une révolution solaire.",
      "Une boule de cristal : la question doit être sincère, urgente et concrète.",
      "Une méthode pour reposer dix fois la même question jusqu’à obtenir la réponse souhaitée.",
    ],
  },
  principe: {
    intro: [
      "Le moment de référence n’est pas celui de l’événement, mais celui où l’astrologue reçoit et comprend réellement la question.",
      "Le lieu est celui de l’astrologue. La carte ainsi obtenue contient, selon la tradition, l’image symbolique de la situation et de son issue.",
    ],
    conditions: [
      "Question unique, claire et tranchable (idéalement par oui/non ou par « comment »).",
      "Question sincère : on veut vraiment savoir, et l’enjeu existe réellement.",
      "Une seule question à la fois — on ne mélange pas plusieurs sujets dans une même carte.",
      "On ne repose pas une question déjà jugée, sauf si les circonstances ont réellement changé.",
    ],
  },
  validite: {
    intro: [
      "Avant de juger, on vérifie que la carte est « radicale », c’est-à-dire apte à être lue. Ces avertissements (strictures) signalent une carte douteuse ou prématurée.",
    ],
    strictures: [
      { label: "Ascendant trop précoce (< 3°)", sens: "La question est prématurée : la situation n’est pas encore mûre, ou il manque des éléments." },
      { label: "Ascendant trop tardif (> 27°)", sens: "Il est trop tard pour agir, l’affaire est déjà jouée, ou la question est mal posée." },
      { label: "Lune Via Combusta", sens: "Lune entre 15° Balance et 15° Scorpion : circonstances troublées, jugement à manier avec prudence." },
      { label: "Lune vide de course (void of course)", sens: "La Lune ne forme plus d’aspect majeur avant de changer de signe : souvent « rien ne se passera »." },
      { label: "Saturne en maison I ou à l’Ascendant", sens: "L’astrologue se trompe, ou l’affaire est entravée, retardée, plombée." },
      { label: "Saturne en maison VII", sens: "Met en garde l’astrologue lui-même : jugement à risque d’erreur." },
      { label: "Maître de l’heure et maître de l’Ascendant discordants", sens: "Incohérence interne : on revérifie l’heure et la sincérité de la question." },
    ],
    note: "Une stricture n’interdit pas toujours le jugement : elle invite à la prudence et oriente souvent le sens de la réponse (retard, empêchement, question prématurée).",
  },
  significateurs: {
    intro: [
      "Tout repose sur l’attribution correcte des significateurs : les planètes qui représentent chaque acteur ou chaque chose de la question.",
      "On identifie d’abord la maison du sujet, puis on prend le maître (régent) de cette maison comme significateur principal.",
    ],
    regles: [
      { label: "Le querent (celui qui pose la question)", sens: "Maison I et son maître ; la Lune est co-significateur du querent dans presque toutes les questions." },
      { label: "Le quésited (la chose ou personne demandée)", sens: "La maison du sujet (ex. VII pour le partenaire, II pour l’argent) et son maître." },
      { label: "La Lune", sens: "Toujours importante : elle décrit le déroulement, l’ambiance et les événements en chemin." },
      { label: "Planètes naturelles", sens: "Vénus pour l’amour, Mercure pour les documents/voleurs, Mars pour les conflits, etc. — en appui du significateur de maison." },
    ],
    aspectsCles: "Le jugement « oui/non » se lit surtout dans un aspect applicatif (qui se forme) entre le significateur du querent et celui du quésited, ou via la Lune.",
  },
  maisonsQuestions: [
    { maison: "I", domaine: "Le querent, le corps, le « je », le navire, l’assiégé", exemples: "« Vais-je guérir ? », « Suis-je en danger ? »" },
    { maison: "II", domaine: "Argent, biens mobiliers, ressources, objet perdu de valeur", exemples: "« Récupérerai-je cet argent ? », « Retrouverai-je ma bague ? »" },
    { maison: "III", domaine: "Frères et sœurs, voisins, courts trajets, rumeurs, courriers", exemples: "« Cette nouvelle est-elle vraie ? »" },
    { maison: "IV", domaine: "Père, foyer, immobilier, terre, fin des choses, trésor caché", exemples: "« Dois-je acheter cette maison ? », « Où est l’objet perdu ? »" },
    { maison: "V", domaine: "Enfants, grossesse, plaisirs, jeux, spectacle, messagers", exemples: "« Suis-je enceinte ? », « Aurai-je un enfant ? »" },
    { maison: "VI", domaine: "Maladie, petits animaux, employés, travail subalterne", exemples: "« Quelle est la cause de ce mal ? »" },
    { maison: "VII", domaine: "Partenaire, conjoint, adversaire, procès, voleur, autrui en général", exemples: "« M’épousera-t-il ? », « Gagnerai-je ce procès ? »" },
    { maison: "VIII", domaine: "Mort, héritage, argent du partenaire, peurs, dettes d’autrui", exemples: "« Toucherai-je cet héritage ? »" },
    { maison: "IX", domaine: "Longs voyages, étranger, études supérieures, religion, songes", exemples: "« Ce voyage se fera-t-il ? »" },
    { maison: "X", domaine: "Carrière, statut, autorité, gouvernement, le roi, l’employeur", exemples: "« Obtiendrai-je ce poste / cette promotion ? »" },
    { maison: "XI", domaine: "Amis, espoirs, souhaits, alliés, gains de l’employeur", exemples: "« Mon vœu se réalisera-t-il ? »" },
    { maison: "XII", domaine: "Ennemis cachés, prison, gros animaux, épreuves, auto-sabotage", exemples: "« Qui me veut du mal ? »" },
  ],
  mouvementsLumiere: {
    intro: [
      "Les significateurs n’agissent pas seulement par aspect direct : la tradition décrit plusieurs « mouvements de lumière » qui colorent ou produisent la réponse.",
    ],
    items: [
      { nom: "Aspect applicatif", slug: "application", sens: "Une planète plus rapide se rapproche d’un aspect exact avec une autre. C’est ce qui « fait advenir » la chose.", cle: "Promesse en cours de réalisation." },
      { nom: "Aspect séparatif", slug: "separation", sens: "L’aspect est déjà passé : il décrit ce qui vient d’avoir lieu, plus une cause qu’un futur.", cle: "Affaire déjà jouée / passée." },
      { nom: "Translation de lumière", slug: "translation", sens: "Une planète rapide se sépare d’un significateur puis s’applique à l’autre, portant la lumière de l’un vers l’autre.", cle: "Un intermédiaire rapproche les parties." },
      { nom: "Collection de lumière", slug: "collection", sens: "Une troisième planète, plus lente, reçoit les aspects des deux significateurs qui ne se voient pas directement.", cle: "Un tiers réunit les parties." },
      { nom: "Prohibition", slug: "prohibition", sens: "Une troisième planète intervient et fait son aspect avant que les deux significateurs ne se rejoignent.", cle: "Quelque chose ou quelqu’un empêche." },
      { nom: "Frustration", slug: "frustration", sens: "Un significateur change de signe ou est devancé juste avant la perfection de l’aspect attendu.", cle: "L’affaire échoue de peu." },
      { nom: "Refranation", slug: "refranation", sens: "Une planète devient rétrograde avant de parfaire l’aspect : la partie se retire.", cle: "Quelqu’un se rétracte au dernier moment." },
    ],
  },
  dignites: {
    intro: [
      "La force d’un significateur se mesure par ses dignités essentielles (sa qualité intrinsèque selon sa position zodiacale) et accidentelles (sa situation dans la carte). C’est le cœur du jugement horaire.",
    ],
    essentielles: [
      { label: "Domicile", score: "+5", sens: "La planète est chez elle : forte, à l’aise, fiable." },
      { label: "Exaltation", score: "+4", sens: "Honorée, valorisée — parfois un peu présomptueuse." },
      { label: "Triplicité", score: "+3", sens: "Bien intégrée, soutenue par son élément." },
      { label: "Terme", score: "+2", sens: "Légère dignité, donne un peu de moyens." },
      { label: "Face / Décan", score: "+1", sens: "Dignité minimale : à peine de quoi sauver les apparences." },
      { label: "Détriment", score: "−5", sens: "Signe opposé au domicile : affaiblie, mal à l’aise, en difficulté." },
      { label: "Chute", score: "−4", sens: "Signe opposé à l’exaltation : dévalorisée, sans crédit." },
      { label: "Pérégrine", score: "0", sens: "Aucune dignité essentielle : sans ressources propres, peut « errer » et mal agir (souvent retenue contre un voleur)." },
    ],
    accidentelles: {
      fortifiantes: [
        "Angulaire (maisons I, IV, VII, X) : pouvoir d’agir.",
        "Directe et de bonne vitesse.",
        "Aspect favorable de Jupiter ou Vénus.",
        "Conjonction aux étoiles fixes bénéfiques (ex. Regulus, Spica).",
      ],
      debilitantes: [
        "Cadente (maisons III, VI, IX, XII) : sans prise sur les événements.",
        "Rétrograde : recul, retour en arrière, hésitation.",
        "Combuste (à moins de 8°30 du Soleil, même signe) : aveuglée, accablée, gravement affaiblie.",
        "Assiégée par les maléfiques (entre Mars et Saturne) : prise en étau.",
        "Lente ou stationnaire : paralysée.",
      ],
    },
  },
  lune: {
    intro: [
      "La Lune est la planète clé de l’horaire : co-significateur du querent et fil conducteur du récit.",
    ],
    points: [
      { label: "Dernier aspect", sens: "Ce dont on se sépare : la cause, le passé récent, ce qui a mené à la question." },
      { label: "Prochain aspect", sens: "Ce vers quoi on va : l’événement à venir le plus immédiat." },
      { label: "Vide de course", sens: "Aucun aspect majeur avant le changement de signe : souvent « rien ne se produira », l’affaire n’aboutit pas." },
      { label: "Phase et vitesse", sens: "Lune rapide et croissante : choses qui s’accélèrent ; lente et décroissante : ralentissement." },
      { label: "Via Combusta", sens: "Entre 15° Balance et 15° Scorpion : zone agitée, émotions et circonstances instables." },
    ],
  },
  receptions: {
    intro: [
      "La réception décrit l’attitude des significateurs l’un envers l’autre : sont-ils bien disposés, hostiles, ou indifférents ?",
    ],
    items: [
      { label: "Réception mutuelle par domicile", sens: "Chaque planète est dans le signe de l’autre : forte coopération, on se rend service — souvent un « oui » même sans aspect parfait." },
      { label: "Réception par exaltation", sens: "Considération, respect : l’un valorise l’autre." },
      { label: "Réception mineure (triplicité, terme, face)", sens: "Sympathie ou bonne volonté, mais moyens limités." },
      { label: "Réception négative (détriment/chute)", sens: "L’un place l’autre en position de faiblesse : méfiance, mépris, hostilité." },
    ],
    note: "Un aspect parfait sans réception peut produire un résultat… mais désagréable. Un aspect avec bonne réception donne un oui de bonne grâce.",
  },
  timing: {
    intro: [
      "Quand l’horaire promet un événement, on estime le délai à partir du nombre de degrés qui séparent les significateurs de leur aspect parfait, modulé par la nature des signes et des maisons.",
    ],
    regles: [
      "Nombre de degrés jusqu’à la perfection = nombre d’unités de temps.",
      "Signes cardinaux → unités courtes (jours/semaines) ; fixes → longues (mois/années) ; mutables → intermédiaires.",
      "Maisons angulaires → court ; succédentes → moyen ; cadentes → long.",
      "Le bon sens prime : un délai doit rester réaliste par rapport à la question posée.",
    ],
    exemple: "Significateurs à 5° d’un trigone exact, en signes mutables, maison succédente : on traduira souvent par « environ 5 semaines/mois » selon le contexte.",
  },
  exemplesLecture: [
    {
      titre: "M’épousera-t-il ?",
      texte: "Querent en maison I, l’aimé en VII. Si les maîtres de I et VII s’appliquent en aspect avec bonne réception, et que la Lune renforce le lien, la promesse est favorable. Une refranation (rétrogradation avant perfection) signalerait un recul de l’autre.",
    },
    {
      titre: "Où est mon objet perdu ?",
      texte: "On regarde la maison II (bien de valeur) et la IV (lieu, retrouvailles). Le signe et la maison du significateur indiquent la direction et le type d’endroit ; une planète angulaire et directe favorise la récupération.",
    },
    {
      titre: "Obtiendrai-je le poste ?",
      texte: "Querent en I, l’emploi/l’employeur en X. Un aspect applicatif entre les maîtres de I et X, le significateur du querent dignifié et angulaire, plaident pour le oui. Combustion ou cadence du significateur affaiblissent les chances.",
    },
  ],
  erreurs: [
    "Poser une question vague ou multiple : la carte devient illisible.",
    "Reposer sans cesse la même question : seule la première carte sincère compte.",
    "Oublier de vérifier la radicalité avant de juger.",
    "Confondre aspect séparatif (passé) et applicatif (futur).",
    "Négliger les réceptions et ne lire que les aspects.",
    "Forcer un « oui » alors que la Lune est vide de course.",
  ],
  faq: [
    { q: "Quelle différence entre astrologie horaire et thème natal ?", a: "Le thème natal décrit une personne pour toute sa vie. L’horaire dresse la carte d’un instant pour répondre à une question précise et juger une situation ponctuelle." },
    { q: "Faut-il connaître sa date de naissance pour une question horaire ?", a: "Non. L’horaire utilise l’heure et le lieu où la question est posée et comprise, pas la naissance du querent." },
    { q: "Quel moment exact prend-on pour la carte ?", a: "L’instant où l’astrologue reçoit et comprend réellement la question, au lieu où il se trouve." },
    { q: "Peut-on reposer une question si la réponse ne plaît pas ?", a: "Non. Seule la première carte sincère est valable. Reposer la question ne fournit qu’une carte non radicale, sauf si la situation a vraiment changé." },
    { q: "Qu’est-ce qu’une carte « radicale » ?", a: "Une carte apte à être jugée : sans avertissement majeur (Ascendant trop précoce/tardif, Lune vide de course, Saturne mal placé…) qui en compromettrait la lecture." },
    { q: "L’astrologie horaire est-elle fiable ?", a: "C’est une technique traditionnelle codifiée (Bonatti, Lilly). Sa fiabilité dépend d’une question sincère, bien posée, et d’une lecture rigoureuse des règles. Elle reste un outil de réflexion, pas une certitude." },
  ],
  faqVisible: [
    {
      q: "Comment formuler une bonne question horaire ?",
      a: "Une question doit être unique, sincère et concrète, idéalement tranchable par oui/non ou par « comment ». Évitez de mélanger plusieurs sujets et de demander une prédiction générale sur l’avenir.",
    },
    {
      q: "Quelle est l’origine de l’astrologie horaire ?",
      a: "Elle remonte à l’Antiquité et a été codifiée au Moyen Âge par Guido Bonatti, puis magistralement exposée au XVIIe siècle par l’Anglais William Lilly dans Christian Astrology, référence encore utilisée aujourd’hui.",
    },
    {
      q: "Que signifie une Lune vide de course en horaire ?",
      a: "Quand la Lune ne forme plus d’aspect majeur avant de quitter son signe, la tradition lit souvent « rien ne se passera » : l’affaire n’aboutit pas, ou suit son cours sans changement notable.",
    },
    {
      q: "Faut-il des dignités fortes pour un « oui » ?",
      a: "Un aspect applicatif entre significateurs donne le résultat ; les dignités et les réceptions en décrivent la qualité. Un oui peut exister avec des significateurs faibles, mais l’issue sera laborieuse ou décevante.",
    },
  ],
};

/* ============================== EN ============================== */
const en: HoraireContent = {
  meta: {
    title: "Horary astrology: the complete method",
    description:
      "Horary astrology: the complete method. Significators, houses of questions, movements of light, dignities, the Moon and timing. A free course.",
  },
  jsonld: {
    headline: "Horary astrology: ask a question, read the answer",
    description:
      "Horary astrology: the complete method. Radicality conditions, significators, houses of questions, movements of light, dignities, the Moon and timing.",
    articleSection: "Astrology",
  },
  hero: {
    badge: "Astrology course — Classical tradition",
    title: "Horary astrology: the chart of a question",
    subtitle:
      "Cast a chart for the exact moment of a specific question, then read the answer in the mechanics of the sky. The oldest and most demanding technique in Western astrology.",
    highlights: [
      "Radicality conditions",
      "Significators: who is who in the chart",
      "Houses of questions (1 to 12)",
      "Movements of light & timing",
    ],
  },
  defBoxBody: (
    <>
      <strong>Horary astrology</strong> is the traditional technique that answers a specific question by casting the{" "}
      <Link href="/#planetes">astrological chart</Link> of the moment and place where the question is asked and understood.
    </>
  ),
  introBody: (
    <>
      Do you want to know whether a matter will succeed, whether someone will return, whether a lost object will be found?{" "}
      <strong>Horary astrology</strong> (from the old tradition of Bonatti and William Lilly) does not describe a character
      like the natal chart: it judges a <strong>concrete situation</strong> from the chart of the sky at the exact moment
      of the question. This complete course guides you from the conditions of validity all the way to estimating when the
      outcome will occur.
    </>
  ),
  sections: [
    { id: "definition", label: "Definition" },
    { id: "principe", label: "Principle" },
    { id: "validite", label: "Radicality" },
    { id: "significateurs", label: "Significators" },
    { id: "maisons", label: "Houses & questions" },
    { id: "lumiere", label: "Movements of light" },
    { id: "dignites", label: "Dignities" },
    { id: "lune", label: "The Moon" },
    { id: "receptions", label: "Receptions" },
    { id: "timing", label: "Timing" },
    { id: "exemples", label: "Examples" },
    { id: "faq", label: "FAQ" },
  ],
  labels: {
    h2Definition: "What is horary astrology?",
    h2Principe: "The principle: the chart of a moment",
    h2Validite: "Is the chart valid? (radicality)",
    h2Significateurs: "Significators: who is who in the chart",
    h2Maisons: "Which house for which question?",
    h2Lumiere: "Movements of light between planets",
    h2Dignites: "Essential and accidental dignities",
    h2Lune: "The central role of the Moon",
    h2Receptions: "Receptions: how the planets are disposed",
    h2Timing: "Timing: when will it happen?",
    h2Exemples: "Concrete examples of horary questions",
    h2Faq: "Frequently asked questions about horary astrology",
    defEyebrow: "Definition",
    resume: "Summary",
    ceQueCeNestPas: "What it is not",
    conditions: "Conditions for a good question",
    digEssentielles: "Essential dignities (intrinsic strength)",
    accFortifiantes: "Accidental — strengthening",
    accDebilitantes: "Accidental — debilitating",
    reglesEstimation: "Rules of estimation",
    exemple: "Example",
    erreurs: "Common mistakes to avoid",
    maisonPrefix: "House",
    faqVisibleTitle: "Frequently asked questions about horary astrology",
    tocAria: "Contents",
    footerAspects: "Aspects",
    footerPlanetes: "Planets",
    footerMaitrises: "Rulerships",
    footerMaisons: "Houses",
  },
  definition: {
    resume: [
      "Horary astrology answers a specific question by casting the chart of the moment and place where the question is understood by the astrologer.",
      "It does not describe a personality (as the natal chart does) but judges a situation: yes/no, and how it will unfold.",
      "It is a traditional astrology (Bonatti, William Lilly, 17th century), founded on strict rules rather than on intuition.",
    ],
    ceQueCeNestPas: [
      "A natal chart or a solar return.",
      "A crystal ball: the question must be sincere, pressing and concrete.",
      "A way to ask the same question ten times until you get the answer you want.",
    ],
  },
  principe: {
    intro: [
      "The reference moment is not that of the event, but the one when the astrologer genuinely receives and understands the question.",
      "The place is that of the astrologer. The chart thus obtained contains, according to tradition, the symbolic image of the situation and its outcome.",
    ],
    conditions: [
      "A single, clear question that can be settled (ideally by yes/no or by “how”).",
      "A sincere question: you truly want to know, and something real is at stake.",
      "One question at a time — you do not mix several subjects in the same chart.",
      "You do not re-ask a question already judged, unless circumstances have genuinely changed.",
    ],
  },
  validite: {
    intro: [
      "Before judging, you check that the chart is “radical”, that is, fit to be read. These warnings (strictures) flag a doubtful or premature chart.",
    ],
    strictures: [
      { label: "Ascendant too early (< 3°)", sens: "The question is premature: the situation is not yet ripe, or elements are missing." },
      { label: "Ascendant too late (> 27°)", sens: "It is too late to act, the matter is already decided, or the question is poorly framed." },
      { label: "Moon in the Via Combusta", sens: "Moon between 15° Libra and 15° Scorpio: troubled circumstances, a judgement to handle with caution." },
      { label: "Void-of-course Moon", sens: "The Moon forms no further major aspect before changing sign: often “nothing will happen”." },
      { label: "Saturn in the 1st house or on the Ascendant", sens: "The astrologer is mistaken, or the matter is hindered, delayed, weighed down." },
      { label: "Saturn in the 7th house", sens: "A warning to the astrologer himself: the judgement is at risk of error." },
      { label: "Lord of the hour and lord of the Ascendant disagreeing", sens: "Internal inconsistency: re-check the time and the sincerity of the question." },
    ],
    note: "A stricture does not always forbid judgement: it calls for caution and often shapes the meaning of the answer (delay, impediment, premature question).",
  },
  significateurs: {
    intro: [
      "Everything rests on the correct assignment of significators: the planets that represent each actor or each thing in the question.",
      "You first identify the house of the matter, then take the lord (ruler) of that house as the principal significator.",
    ],
    regles: [
      { label: "The querent (the one who asks the question)", sens: "The 1st house and its lord; the Moon is co-significator of the querent in almost every question." },
      { label: "The quesited (the thing or person asked about)", sens: "The house of the matter (e.g. 7th for the partner, 2nd for money) and its lord." },
      { label: "The Moon", sens: "Always important: it describes the unfolding, the mood and the events along the way." },
      { label: "Natural significators", sens: "Venus for love, Mercury for documents/thieves, Mars for conflicts, etc. — supporting the house significator." },
    ],
    aspectsCles: "The “yes/no” judgement is read above all in an applying aspect (one that is forming) between the significator of the querent and that of the quesited, or via the Moon.",
  },
  maisonsQuestions: [
    { maison: "I", domaine: "The querent, the body, the “self”, the ship, the besieged party", exemples: "“Will I recover?”, “Am I in danger?”" },
    { maison: "II", domaine: "Money, movable goods, resources, a lost object of value", exemples: "“Will I get this money back?”, “Will I find my ring?”" },
    { maison: "III", domaine: "Siblings, neighbours, short journeys, rumours, letters", exemples: "“Is this news true?”" },
    { maison: "IV", domaine: "Father, home, real estate, land, the end of matters, hidden treasure", exemples: "“Should I buy this house?”, “Where is the lost object?”" },
    { maison: "V", domaine: "Children, pregnancy, pleasures, games, entertainment, messengers", exemples: "“Am I pregnant?”, “Will I have a child?”" },
    { maison: "VI", domaine: "Illness, small animals, employees, subordinate work", exemples: "“What is the cause of this ailment?”" },
    { maison: "VII", domaine: "Partner, spouse, opponent, lawsuits, the thief, other people in general", exemples: "“Will he marry me?”, “Will I win this lawsuit?”" },
    { maison: "VIII", domaine: "Death, inheritance, the partner’s money, fears, other people’s debts", exemples: "“Will I receive this inheritance?”" },
    { maison: "IX", domaine: "Long journeys, foreign lands, higher studies, religion, dreams", exemples: "“Will this journey take place?”" },
    { maison: "X", domaine: "Career, status, authority, government, the king, the employer", exemples: "“Will I get this post / this promotion?”" },
    { maison: "XI", domaine: "Friends, hopes, wishes, allies, the employer’s gains", exemples: "“Will my wish come true?”" },
    { maison: "XII", domaine: "Hidden enemies, prison, large animals, ordeals, self-sabotage", exemples: "“Who wishes me harm?”" },
  ],
  mouvementsLumiere: {
    intro: [
      "Significators do not act only by direct aspect: tradition describes several “movements of light” that colour or produce the answer.",
    ],
    items: [
      { nom: "Applying aspect", slug: "application", sens: "A faster planet draws toward an exact aspect with another. This is what “brings the matter about”.", cle: "A promise in the course of fulfilment." },
      { nom: "Separating aspect", slug: "separation", sens: "The aspect is already past: it describes what has just happened, a cause rather than a future.", cle: "A matter already settled / past." },
      { nom: "Translation of light", slug: "translation", sens: "A swift planet separates from one significator then applies to the other, carrying the light from one to the other.", cle: "An intermediary brings the parties together." },
      { nom: "Collection of light", slug: "collection", sens: "A third, slower planet receives the aspects of the two significators who do not behold each other directly.", cle: "A third party unites the parties." },
      { nom: "Prohibition", slug: "prohibition", sens: "A third planet intervenes and completes its aspect before the two significators can join.", cle: "Something or someone prevents it." },
      { nom: "Frustration", slug: "frustration", sens: "A significator changes sign or is overtaken just before the perfection of the expected aspect.", cle: "The matter fails by a hair." },
      { nom: "Refranation", slug: "refranation", sens: "A planet turns retrograde before perfecting the aspect: the party withdraws.", cle: "Someone backs out at the last moment." },
    ],
  },
  dignites: {
    intro: [
      "The strength of a significator is measured by its essential dignities (its intrinsic quality according to its zodiacal position) and its accidental ones (its situation in the chart). This is the heart of horary judgement.",
    ],
    essentielles: [
      { label: "Domicile", score: "+5", sens: "The planet is at home: strong, at ease, reliable." },
      { label: "Exaltation", score: "+4", sens: "Honoured, valued — sometimes a little presumptuous." },
      { label: "Triplicity", score: "+3", sens: "Well integrated, supported by its element." },
      { label: "Term", score: "+2", sens: "A slight dignity, giving a little means." },
      { label: "Face / Decan", score: "+1", sens: "Minimal dignity: barely enough to save appearances." },
      { label: "Detriment", score: "−5", sens: "The sign opposite to domicile: weakened, ill at ease, struggling." },
      { label: "Fall", score: "−4", sens: "The sign opposite to exaltation: devalued, without credit." },
      { label: "Peregrine", score: "0", sens: "No essential dignity: without resources of its own, it may “wander” and act badly (often held against a thief)." },
    ],
    accidentelles: {
      fortifiantes: [
        "Angular (houses I, IV, VII, X): power to act.",
        "Direct and of good speed.",
        "A favourable aspect from Jupiter or Venus.",
        "Conjunct beneficial fixed stars (e.g. Regulus, Spica).",
      ],
      debilitantes: [
        "Cadent (houses III, VI, IX, XII): no grip on events.",
        "Retrograde: regression, going back, hesitation.",
        "Combust (within 8°30 of the Sun, same sign): blinded, overwhelmed, gravely weakened.",
        "Besieged by the malefics (between Mars and Saturn): caught in a vice.",
        "Slow or stationary: paralysed.",
      ],
    },
  },
  lune: {
    intro: [
      "The Moon is the key planet of horary: co-significator of the querent and the thread running through the story.",
    ],
    points: [
      { label: "Last aspect", sens: "What is being left behind: the cause, the recent past, what led to the question." },
      { label: "Next aspect", sens: "What we are heading toward: the most immediate event to come." },
      { label: "Void of course", sens: "No major aspect before the change of sign: often “nothing will happen”, the matter comes to nothing." },
      { label: "Phase and speed", sens: "A fast, waxing Moon: things speeding up; slow and waning: a slowing down." },
      { label: "Via Combusta", sens: "Between 15° Libra and 15° Scorpio: a turbulent zone, unstable emotions and circumstances." },
    ],
  },
  receptions: {
    intro: [
      "Reception describes the attitude of the significators toward one another: are they well disposed, hostile, or indifferent?",
    ],
    items: [
      { label: "Mutual reception by domicile", sens: "Each planet is in the other’s sign: strong cooperation, mutual help — often a “yes” even without a perfect aspect." },
      { label: "Reception by exaltation", sens: "Esteem, respect: one values the other." },
      { label: "Minor reception (triplicity, term, face)", sens: "Sympathy or goodwill, but limited means." },
      { label: "Negative reception (detriment/fall)", sens: "One places the other in a position of weakness: distrust, contempt, hostility." },
    ],
    note: "A perfect aspect without reception can produce a result… but an unpleasant one. An aspect with good reception gives a willing “yes”.",
  },
  timing: {
    intro: [
      "When the horary promises an event, you estimate the delay from the number of degrees separating the significators from their perfect aspect, modulated by the nature of the signs and houses.",
    ],
    regles: [
      "Number of degrees to perfection = number of units of time.",
      "Cardinal signs → short units (days/weeks); fixed → long (months/years); mutable → intermediate.",
      "Angular houses → short; succedent → medium; cadent → long.",
      "Common sense prevails: a delay must stay realistic relative to the question asked.",
    ],
    exemple: "Significators 5° from an exact trine, in mutable signs, a succedent house: this is often rendered as “about 5 weeks/months” depending on the context.",
  },
  exemplesLecture: [
    {
      titre: "Will he marry me?",
      texte: "The querent in the 1st house, the beloved in the 7th. If the lords of the 1st and 7th apply in aspect with good reception, and the Moon reinforces the link, the promise is favourable. A refranation (turning retrograde before perfection) would signal the other party drawing back.",
    },
    {
      titre: "Where is my lost object?",
      texte: "You look at the 2nd house (valuable goods) and the 4th (place, recovery). The sign and house of the significator indicate the direction and the type of location; an angular, direct planet favours recovery.",
    },
    {
      titre: "Will I get the job?",
      texte: "The querent in the 1st, the job/employer in the 10th. An applying aspect between the lords of the 1st and 10th, with the querent’s significator dignified and angular, argue for yes. Combustion or cadency of the significator weaken the chances.",
    },
  ],
  erreurs: [
    "Asking a vague or multiple question: the chart becomes unreadable.",
    "Endlessly re-asking the same question: only the first sincere chart counts.",
    "Forgetting to check radicality before judging.",
    "Confusing a separating aspect (the past) with an applying one (the future).",
    "Neglecting the receptions and reading only the aspects.",
    "Forcing a “yes” when the Moon is void of course.",
  ],
  faq: [
    { q: "What is the difference between horary astrology and the natal chart?", a: "The natal chart describes a person for their whole life. Horary casts the chart of a single moment to answer a specific question and judge a particular situation." },
    { q: "Do you need your date of birth for a horary question?", a: "No. Horary uses the time and place where the question is asked and understood, not the querent’s birth." },
    { q: "What exact moment is taken for the chart?", a: "The moment when the astrologer genuinely receives and understands the question, at the place where they are." },
    { q: "Can you re-ask a question if you do not like the answer?", a: "No. Only the first sincere chart is valid. Re-asking yields only a non-radical chart, unless the situation has truly changed." },
    { q: "What is a “radical” chart?", a: "A chart fit to be judged: free of any major warning (Ascendant too early/late, void-of-course Moon, badly placed Saturn…) that would compromise the reading." },
    { q: "Is horary astrology reliable?", a: "It is a codified traditional technique (Bonatti, Lilly). Its reliability depends on a sincere, well-framed question and a rigorous reading of the rules. It remains a tool for reflection, not a certainty." },
  ],
  faqVisible: [
    {
      q: "How do you frame a good horary question?",
      a: "A question should be single, sincere and concrete, ideally settled by yes/no or by “how”. Avoid mixing several subjects and asking for a general prediction about the future.",
    },
    {
      q: "What is the origin of horary astrology?",
      a: "It goes back to Antiquity and was codified in the Middle Ages by Guido Bonatti, then masterfully set out in the 17th century by the Englishman William Lilly in Christian Astrology, a reference still used today.",
    },
    {
      q: "What does a void-of-course Moon mean in horary?",
      a: "When the Moon forms no further major aspect before leaving its sign, tradition often reads “nothing will happen”: the matter comes to nothing, or runs its course with no notable change.",
    },
    {
      q: "Do you need strong dignities for a “yes”?",
      a: "An applying aspect between significators delivers the result; dignities and receptions describe its quality. A yes can exist with weak significators, but the outcome will be laborious or disappointing.",
    },
  ],
};

/* ============================== ES ============================== */
const es: HoraireContent = {
  meta: {
    title: "Astrología horaria: el método completo",
    description:
      "Astrología horaria: método completo. Significadores, casas de las preguntas, movimientos de luz, dignidades, Luna y timing. Curso gratuito.",
  },
  jsonld: {
    headline: "Astrología horaria: hacer una pregunta, leer la respuesta",
    description:
      "Astrología horaria: método completo. Condiciones de radicalidad, significadores, casas de las preguntas, movimientos de luz, dignidades, Luna y timing.",
    articleSection: "Astrología",
  },
  hero: {
    badge: "Curso de astrología — Tradición clásica",
    title: "Astrología horaria: la carta de una pregunta",
    subtitle:
      "Levantar una carta para el instante exacto de una pregunta precisa y leer la respuesta en la mecánica del cielo. La técnica más antigua y exigente de la astrología occidental.",
    highlights: [
      "Condiciones de radicalidad",
      "Significadores: quién es quién en la carta",
      "Casas de las preguntas (1 a 12)",
      "Movimientos de luz y timing",
    ],
  },
  defBoxBody: (
    <>
      La <strong>astrología horaria</strong> es la técnica tradicional que responde a una pregunta precisa levantando la{" "}
      <Link href="/#planetes">carta astrológica</Link> del instante y del lugar donde la pregunta se formula y se comprende.
    </>
  ),
  introBody: (
    <>
      ¿Quieres saber si un asunto saldrá adelante, si una persona volverá, si se hallará un objeto perdido? La{" "}
      <strong>astrología horaria</strong> (de la antigua tradición de Bonatti y William Lilly) no describe un carácter como
      la carta natal: juzga una <strong>situación concreta</strong> a partir de la carta del cielo en el momento exacto de
      la pregunta. Este curso completo te guía desde las condiciones de validez hasta el cálculo del plazo de realización.
    </>
  ),
  sections: [
    { id: "definition", label: "Definición" },
    { id: "principe", label: "Principio" },
    { id: "validite", label: "Radicalidad" },
    { id: "significateurs", label: "Significadores" },
    { id: "maisons", label: "Casas y preguntas" },
    { id: "lumiere", label: "Movimientos de luz" },
    { id: "dignites", label: "Dignidades" },
    { id: "lune", label: "La Luna" },
    { id: "receptions", label: "Recepciones" },
    { id: "timing", label: "Timing" },
    { id: "exemples", label: "Ejemplos" },
    { id: "faq", label: "FAQ" },
  ],
  labels: {
    h2Definition: "¿Qué es la astrología horaria?",
    h2Principe: "El principio: la carta de un instante",
    h2Validite: "¿Es válida la carta? (radicalidad)",
    h2Significateurs: "Los significadores: quién es quién en la carta",
    h2Maisons: "¿Qué casa para qué pregunta?",
    h2Lumiere: "Los movimientos de luz entre planetas",
    h2Dignites: "Dignidades esenciales y accidentales",
    h2Lune: "El papel central de la Luna",
    h2Receptions: "Las recepciones: la disposición de los planetas",
    h2Timing: "El timing: ¿cuándo ocurrirá?",
    h2Exemples: "Ejemplos concretos de preguntas horarias",
    h2Faq: "Preguntas frecuentes sobre la astrología horaria",
    defEyebrow: "Definición",
    resume: "Resumen",
    ceQueCeNestPas: "Lo que no es",
    conditions: "Condiciones de una buena pregunta",
    digEssentielles: "Dignidades esenciales (fuerza intrínseca)",
    accFortifiantes: "Accidentales fortalecedoras",
    accDebilitantes: "Accidentales debilitantes",
    reglesEstimation: "Reglas de estimación",
    exemple: "Ejemplo",
    erreurs: "Errores frecuentes que evitar",
    maisonPrefix: "Casa",
    faqVisibleTitle: "Preguntas frecuentes sobre la astrología horaria",
    tocAria: "Índice",
    footerAspects: "Aspectos",
    footerPlanetes: "Planetas",
    footerMaitrises: "Regencias",
    footerMaisons: "Casas",
  },
  definition: {
    resume: [
      "La astrología horaria responde a una pregunta precisa levantando la carta del instante y del lugar donde el astrólogo comprende la pregunta.",
      "No describe una personalidad (como la carta natal) sino que juzga una situación: sí/no, y cómo se desarrollará.",
      "Es una astrología de tradición (Bonatti, William Lilly, siglo XVII), fundada en reglas estrictas más que en la intuición.",
    ],
    ceQueCeNestPas: [
      "Una carta natal o una revolución solar.",
      "Una bola de cristal: la pregunta debe ser sincera, urgente y concreta.",
      "Un método para repetir diez veces la misma pregunta hasta obtener la respuesta deseada.",
    ],
  },
  principe: {
    intro: [
      "El momento de referencia no es el del acontecimiento, sino aquel en que el astrólogo recibe y comprende realmente la pregunta.",
      "El lugar es el del astrólogo. La carta así obtenida contiene, según la tradición, la imagen simbólica de la situación y de su desenlace.",
    ],
    conditions: [
      "Pregunta única, clara y resoluble (idealmente por sí/no o por «cómo»).",
      "Pregunta sincera: se quiere saber de verdad y existe algo realmente en juego.",
      "Una sola pregunta a la vez — no se mezclan varios temas en una misma carta.",
      "No se vuelve a plantear una pregunta ya juzgada, salvo que las circunstancias hayan cambiado de verdad.",
    ],
  },
  validite: {
    intro: [
      "Antes de juzgar, se comprueba que la carta sea «radical», es decir, apta para ser leída. Estas advertencias (strictures) señalan una carta dudosa o prematura.",
    ],
    strictures: [
      { label: "Ascendente demasiado temprano (< 3°)", sens: "La pregunta es prematura: la situación aún no ha madurado, o faltan elementos." },
      { label: "Ascendente demasiado tardío (> 27°)", sens: "Es demasiado tarde para actuar, el asunto ya está decidido, o la pregunta está mal planteada." },
      { label: "Luna en la Vía Combusta", sens: "Luna entre 15° de Libra y 15° de Escorpio: circunstancias turbias, juicio que hay que manejar con prudencia." },
      { label: "Luna vacía de curso (void of course)", sens: "La Luna no forma ya ningún aspecto mayor antes de cambiar de signo: a menudo «no pasará nada»." },
      { label: "Saturno en la casa I o en el Ascendente", sens: "El astrólogo se equivoca, o el asunto está entorpecido, retrasado, lastrado." },
      { label: "Saturno en la casa VII", sens: "Advierte al propio astrólogo: el juicio corre riesgo de error." },
      { label: "Regente de la hora y regente del Ascendente discordantes", sens: "Incoherencia interna: se revisa la hora y la sinceridad de la pregunta." },
    ],
    note: "Una stricture no siempre prohíbe el juicio: invita a la prudencia y a menudo orienta el sentido de la respuesta (retraso, impedimento, pregunta prematura).",
  },
  significateurs: {
    intro: [
      "Todo descansa en la asignación correcta de los significadores: los planetas que representan a cada actor o cada cosa de la pregunta.",
      "Primero se identifica la casa del asunto y luego se toma el regente de esa casa como significador principal.",
    ],
    regles: [
      { label: "El consultante (quien plantea la pregunta)", sens: "La casa I y su regente; la Luna es co-significadora del consultante en casi todas las preguntas." },
      { label: "El quesited (la cosa o persona preguntada)", sens: "La casa del asunto (p. ej. VII para la pareja, II para el dinero) y su regente." },
      { label: "La Luna", sens: "Siempre importante: describe el desarrollo, el ambiente y los acontecimientos por el camino." },
      { label: "Significadores naturales", sens: "Venus para el amor, Mercurio para los documentos/ladrones, Marte para los conflictos, etc. — en apoyo del significador de casa." },
    ],
    aspectsCles: "El juicio «sí/no» se lee sobre todo en un aspecto aplicativo (que se está formando) entre el significador del consultante y el del quesited, o a través de la Luna.",
  },
  maisonsQuestions: [
    { maison: "I", domaine: "El consultante, el cuerpo, el «yo», la nave, el sitiado", exemples: "«¿Me curaré?», «¿Estoy en peligro?»" },
    { maison: "II", domaine: "Dinero, bienes muebles, recursos, objeto perdido de valor", exemples: "«¿Recuperaré ese dinero?», «¿Encontraré mi anillo?»" },
    { maison: "III", domaine: "Hermanos, vecinos, trayectos cortos, rumores, correspondencia", exemples: "«¿Es cierta esta noticia?»" },
    { maison: "IV", domaine: "Padre, hogar, inmuebles, tierra, el fin de las cosas, tesoro oculto", exemples: "«¿Debo comprar esta casa?», «¿Dónde está el objeto perdido?»" },
    { maison: "V", domaine: "Hijos, embarazo, placeres, juegos, espectáculo, mensajeros", exemples: "«¿Estoy embarazada?», «¿Tendré un hijo?»" },
    { maison: "VI", domaine: "Enfermedad, animales pequeños, empleados, trabajo subalterno", exemples: "«¿Cuál es la causa de este mal?»" },
    { maison: "VII", domaine: "Pareja, cónyuge, adversario, pleitos, el ladrón, los demás en general", exemples: "«¿Se casará conmigo?», «¿Ganaré este pleito?»" },
    { maison: "VIII", domaine: "Muerte, herencia, dinero de la pareja, miedos, deudas ajenas", exemples: "«¿Recibiré esta herencia?»" },
    { maison: "IX", domaine: "Viajes largos, el extranjero, estudios superiores, religión, sueños", exemples: "«¿Se hará este viaje?»" },
    { maison: "X", domaine: "Carrera, estatus, autoridad, gobierno, el rey, el empleador", exemples: "«¿Conseguiré ese puesto / ese ascenso?»" },
    { maison: "XI", domaine: "Amigos, esperanzas, deseos, aliados, ganancias del empleador", exemples: "«¿Se cumplirá mi deseo?»" },
    { maison: "XII", domaine: "Enemigos ocultos, prisión, animales grandes, pruebas, autosabotaje", exemples: "«¿Quién me quiere mal?»" },
  ],
  mouvementsLumiere: {
    intro: [
      "Los significadores no actúan solo por aspecto directo: la tradición describe varios «movimientos de luz» que matizan o producen la respuesta.",
    ],
    items: [
      { nom: "Aspecto aplicativo", slug: "application", sens: "Un planeta más rápido se acerca a un aspecto exacto con otro. Es lo que «hace que la cosa suceda».", cle: "Promesa en vías de realización." },
      { nom: "Aspecto separativo", slug: "separation", sens: "El aspecto ya ha pasado: describe lo que acaba de ocurrir, más una causa que un futuro.", cle: "Asunto ya decidido / pasado." },
      { nom: "Traslación de luz", slug: "translation", sens: "Un planeta rápido se separa de un significador y luego se aplica al otro, llevando la luz de uno a otro.", cle: "Un intermediario acerca a las partes." },
      { nom: "Colección de luz", slug: "collection", sens: "Un tercer planeta, más lento, recibe los aspectos de los dos significadores que no se ven directamente.", cle: "Un tercero reúne a las partes." },
      { nom: "Prohibición", slug: "prohibition", sens: "Un tercer planeta interviene y completa su aspecto antes de que los dos significadores se junten.", cle: "Algo o alguien lo impide." },
      { nom: "Frustración", slug: "frustration", sens: "Un significador cambia de signo o es adelantado justo antes de la perfección del aspecto esperado.", cle: "El asunto fracasa por muy poco." },
      { nom: "Refranación", slug: "refranation", sens: "Un planeta se vuelve retrógrado antes de perfeccionar el aspecto: la parte se retira.", cle: "Alguien se retracta en el último momento." },
    ],
  },
  dignites: {
    intro: [
      "La fuerza de un significador se mide por sus dignidades esenciales (su calidad intrínseca según su posición zodiacal) y accidentales (su situación en la carta). Es el corazón del juicio horario.",
    ],
    essentielles: [
      { label: "Domicilio", score: "+5", sens: "El planeta está en su casa: fuerte, a gusto, fiable." },
      { label: "Exaltación", score: "+4", sens: "Honrado, valorado — a veces algo presuntuoso." },
      { label: "Triplicidad", score: "+3", sens: "Bien integrado, sostenido por su elemento." },
      { label: "Término", score: "+2", sens: "Dignidad leve, aporta algunos medios." },
      { label: "Faz / Decanato", score: "+1", sens: "Dignidad mínima: apenas para salvar las apariencias." },
      { label: "Detrimento", score: "−5", sens: "Signo opuesto al domicilio: debilitado, incómodo, en dificultad." },
      { label: "Caída", score: "−4", sens: "Signo opuesto a la exaltación: desvalorizado, sin crédito." },
      { label: "Peregrina", score: "0", sens: "Sin ninguna dignidad esencial: sin recursos propios, puede «errar» y obrar mal (a menudo se toma en contra de un ladrón)." },
    ],
    accidentelles: {
      fortifiantes: [
        "Angular (casas I, IV, VII, X): poder para actuar.",
        "Directa y de buena velocidad.",
        "Aspecto favorable de Júpiter o Venus.",
        "Conjunción con estrellas fijas benéficas (p. ej. Regulus, Spica).",
      ],
      debilitantes: [
        "Cadente (casas III, VI, IX, XII): sin dominio sobre los acontecimientos.",
        "Retrógrada: retroceso, vuelta atrás, vacilación.",
        "Combusta (a menos de 8°30 del Sol, mismo signo): cegada, abrumada, gravemente debilitada.",
        "Sitiada por los maléficos (entre Marte y Saturno): atrapada entre dos fuegos.",
        "Lenta o estacionaria: paralizada.",
      ],
    },
  },
  lune: {
    intro: [
      "La Luna es el planeta clave de la horaria: co-significadora del consultante e hilo conductor del relato.",
    ],
    points: [
      { label: "Último aspecto", sens: "Aquello de lo que uno se separa: la causa, el pasado reciente, lo que condujo a la pregunta." },
      { label: "Próximo aspecto", sens: "Aquello hacia lo que vamos: el acontecimiento por venir más inmediato." },
      { label: "Vacía de curso", sens: "Ningún aspecto mayor antes del cambio de signo: a menudo «no pasará nada», el asunto no llega a término." },
      { label: "Fase y velocidad", sens: "Luna rápida y creciente: cosas que se aceleran; lenta y menguante: ralentización." },
      { label: "Vía Combusta", sens: "Entre 15° de Libra y 15° de Escorpio: zona agitada, emociones y circunstancias inestables." },
    ],
  },
  receptions: {
    intro: [
      "La recepción describe la actitud de los significadores entre sí: ¿están bien dispuestos, hostiles o indiferentes?",
    ],
    items: [
      { label: "Recepción mutua por domicilio", sens: "Cada planeta está en el signo del otro: fuerte cooperación, se prestan ayuda mutua — a menudo un «sí» incluso sin aspecto perfecto." },
      { label: "Recepción por exaltación", sens: "Consideración, respeto: uno valora al otro." },
      { label: "Recepción menor (triplicidad, término, faz)", sens: "Simpatía o buena voluntad, pero con medios limitados." },
      { label: "Recepción negativa (detrimento/caída)", sens: "Uno coloca al otro en posición de debilidad: desconfianza, desprecio, hostilidad." },
    ],
    note: "Un aspecto perfecto sin recepción puede dar un resultado… pero desagradable. Un aspecto con buena recepción da un sí de buen grado.",
  },
  timing: {
    intro: [
      "Cuando la horaria promete un acontecimiento, se estima el plazo a partir del número de grados que separan a los significadores de su aspecto perfecto, modulado por la naturaleza de los signos y las casas.",
    ],
    regles: [
      "Número de grados hasta la perfección = número de unidades de tiempo.",
      "Signos cardinales → unidades cortas (días/semanas); fijos → largas (meses/años); mutables → intermedias.",
      "Casas angulares → corto; sucedentes → medio; cadentes → largo.",
      "El sentido común prima: un plazo debe seguir siendo realista respecto a la pregunta planteada.",
    ],
    exemple: "Significadores a 5° de un trígono exacto, en signos mutables, casa sucedente: se traducirá a menudo por «unas 5 semanas/meses» según el contexto.",
  },
  exemplesLecture: [
    {
      titre: "¿Se casará conmigo?",
      texte: "El consultante en la casa I, el ser amado en la VII. Si los regentes de I y VII se aplican en aspecto con buena recepción, y la Luna refuerza el vínculo, la promesa es favorable. Una refranación (retrogradación antes de la perfección) señalaría un retroceso del otro.",
    },
    {
      titre: "¿Dónde está mi objeto perdido?",
      texte: "Se observa la casa II (bien de valor) y la IV (lugar, recuperación). El signo y la casa del significador indican la dirección y el tipo de sitio; un planeta angular y directo favorece la recuperación.",
    },
    {
      titre: "¿Conseguiré el puesto?",
      texte: "El consultante en la I, el empleo/el empleador en la X. Un aspecto aplicativo entre los regentes de I y X, con el significador del consultante dignificado y angular, abogan por el sí. La combustión o la cadencia del significador debilitan las posibilidades.",
    },
  ],
  erreurs: [
    "Plantear una pregunta vaga o múltiple: la carta se vuelve ilegible.",
    "Repetir sin cesar la misma pregunta: solo cuenta la primera carta sincera.",
    "Olvidar comprobar la radicalidad antes de juzgar.",
    "Confundir el aspecto separativo (pasado) con el aplicativo (futuro).",
    "Descuidar las recepciones y leer únicamente los aspectos.",
    "Forzar un «sí» cuando la Luna está vacía de curso.",
  ],
  faq: [
    { q: "¿Qué diferencia hay entre la astrología horaria y la carta natal?", a: "La carta natal describe a una persona para toda su vida. La horaria levanta la carta de un instante para responder a una pregunta precisa y juzgar una situación puntual." },
    { q: "¿Hace falta conocer la fecha de nacimiento para una pregunta horaria?", a: "No. La horaria usa la hora y el lugar donde se formula y se comprende la pregunta, no el nacimiento del consultante." },
    { q: "¿Qué momento exacto se toma para la carta?", a: "El instante en que el astrólogo recibe y comprende realmente la pregunta, en el lugar donde se encuentra." },
    { q: "¿Se puede repetir una pregunta si la respuesta no gusta?", a: "No. Solo la primera carta sincera es válida. Repetir la pregunta solo proporciona una carta no radical, salvo que la situación haya cambiado de verdad." },
    { q: "¿Qué es una carta «radical»?", a: "Una carta apta para ser juzgada: sin ninguna advertencia mayor (Ascendente demasiado temprano/tardío, Luna vacía de curso, Saturno mal situado…) que comprometa la lectura." },
    { q: "¿Es fiable la astrología horaria?", a: "Es una técnica tradicional codificada (Bonatti, Lilly). Su fiabilidad depende de una pregunta sincera, bien planteada, y de una lectura rigurosa de las reglas. Sigue siendo una herramienta de reflexión, no una certeza." },
  ],
  faqVisible: [
    {
      q: "¿Cómo formular una buena pregunta horaria?",
      a: "Una pregunta debe ser única, sincera y concreta, idealmente resoluble por sí/no o por «cómo». Evita mezclar varios temas y pedir una predicción general sobre el futuro.",
    },
    {
      q: "¿Cuál es el origen de la astrología horaria?",
      a: "Se remonta a la Antigüedad y fue codificada en la Edad Media por Guido Bonatti, y luego expuesta magistralmente en el siglo XVII por el inglés William Lilly en Christian Astrology, una referencia todavía utilizada hoy.",
    },
    {
      q: "¿Qué significa una Luna vacía de curso en horaria?",
      a: "Cuando la Luna no forma ya ningún aspecto mayor antes de abandonar su signo, la tradición suele leer «no pasará nada»: el asunto no llega a término, o sigue su curso sin cambios notables.",
    },
    {
      q: "¿Hacen falta dignidades fuertes para un «sí»?",
      a: "Un aspecto aplicativo entre significadores da el resultado; las dignidades y las recepciones describen su calidad. Un sí puede existir con significadores débiles, pero el desenlace será laborioso o decepcionante.",
    },
  ],
};

export const horaireContent: Record<SeoLocale, HoraireContent> = { fr, en, es };
