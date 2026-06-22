import { Link } from "@/i18n/navigation";
import type { ReactNode } from "react";
import type { SeoLocale } from "@/lib/seo";

/* ====================================================================
   Astrologie médicale — contenu localisé (fr / en / es)
   Les clés logiques (id de section, maison "I/VI/VIII/XII") sont
   identiques dans chaque langue ; seuls les textes sont traduits.
   ==================================================================== */

export type AstroMedicaleContent = {
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
  hommeZodiacal: { title: string; intro: string[]; signes: { signe: string; partie: string }[] };
  temperaments: {
    title: string;
    intro: string[];
    humeurLabel: string;
    items: {
      nom: string;
      qualites: string;
      humeur: string;
      element: string;
      planetes: string;
      traits: string;
    }[];
  };
  planetes: { title: string; intro: string[]; items: { astre: string; qualites: string; domaine: string }[] };
  maisons: { title: string; houseLabel: string; items: { maison: string; domaine: string }[] };
  decombiture: { title: string; intro: string[]; elements: { label: string; sens: string }[] };
  joursCritiques: { title: string; intro: string[]; reglesLabel: string; regles: string[] };
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
  footer: { planetes: string; signes: string; horaire: string; maisons: string };
};

/* ============================== FR ============================== */
const fr: AstroMedicaleContent = {
  meta: {
    title: "Astrologie médicale : tempéraments et humeurs",
    description:
      "Astrologie médicale : tradition complète. Homme zodiacal, tempéraments, humeurs, planètes, maisons de la santé. Cours symbolique (non médical) !",
  },
  jsonld: {
    headline: "Astrologie médicale : tempéraments, humeurs et homme zodiacal",
    description:
      "Astrologie médicale : homme zodiacal, tempéraments, quatre humeurs, planètes, maisons de la santé et décombiture. Approche symbolique et historique, non médicale.",
    articleSection: "Astrologie",
  },
  hero: {
    badge: "Cours d’astrologie — Tradition & histoire",
    title: "Astrologie médicale : le corps et le ciel",
    subtitle:
      "La plus ancienne des branches appliquées : relier signes, planètes et humeurs aux parties du corps et aux tempéraments. Une lecture symbolique et historique de la santé — jamais un diagnostic.",
    highlights: [
      "L’homme zodiacal (signes → corps)",
      "Les quatre tempéraments & humeurs",
      "Planètes et qualités (chaud/froid/sec/humide)",
      "Maisons de la santé & décombiture",
    ],
  },
  tocLabel: "Sommaire",
  sections: [
    { id: "definition", label: "Définition" },
    { id: "histoire", label: "Histoire & humeurs" },
    { id: "homme-zodiacal", label: "Homme zodiacal" },
    { id: "temperaments", label: "Tempéraments" },
    { id: "planetes", label: "Planètes" },
    { id: "maisons", label: "Maisons de la santé" },
    { id: "decombiture", label: "Décombiture" },
    { id: "jours-critiques", label: "Jours critiques" },
    { id: "exemples", label: "Exemples" },
    { id: "faq", label: "FAQ" },
  ],
  avertissement: {
    titre: "Avertissement important",
    texte:
      "L’astrologie médicale est une tradition symbolique et historique. Elle ne constitue ni un diagnostic, ni un avis médical, ni un traitement. Elle ne remplace en aucun cas l’avis d’un médecin ou d’un professionnel de santé. En cas de symptôme ou d’inquiétude, consultez un soignant qualifié.",
  },
  defBox: {
    label: "Définition",
    body: (
      <>
        L’<strong>astrologie médicale</strong> est la tradition qui relie les signes, les{" "}
        <Link href="/#planetes">planètes</Link> et les <Link href="/#maisons">maisons</Link> aux parties du corps, aux
        tempéraments et aux quatre humeurs. C’est un système symbolique et historique, non un outil de diagnostic.
      </>
    ),
  },
  intro: (
    <>
      De l’Antiquité à la Renaissance, médecine et astrologie étaient inséparables : la santé se pensait comme l’équilibre
      de quatre <strong>humeurs</strong>, et chaque signe gouvernait une région du corps. Ce cours présente l’
      <strong>astrologie médicale</strong> en tant que patrimoine symbolique — l’homme zodiacal, les tempéraments, les
      correspondances planétaires et la décombiture — sans jamais se substituer à la médecine.
    </>
  ),
  definition: {
    title: "Qu’est-ce que l’astrologie médicale ?",
    resumeLabel: "Résumé",
    resume: [
      "L’astrologie médicale (iatromathématique) relie les signes, planètes et maisons aux parties du corps, aux tempéraments et aux rythmes de la vitalité.",
      "Branche la plus ancienne de l’astrologie appliquée, elle a structuré la médecine d’Hippocrate à la Renaissance via la théorie des humeurs.",
      "Aujourd’hui, on l’étudie comme un système symbolique et culturel : une façon de penser l’équilibre, pas une science médicale.",
    ],
    notLabel: "Ce que ce n’est pas",
    ceQueCeNestPas: [
      "Un diagnostic ou un substitut à la consultation médicale.",
      "Une méthode pour prescrire ou interrompre un traitement.",
      "Une prédiction certaine de maladie ou de guérison.",
    ],
  },
  histoire: {
    title: "Histoire : la médecine des humeurs",
    intro: [
      "La médecine antique et médiévale reposait sur la théorie des humeurs : la santé était l’équilibre de quatre fluides, le déséquilibre étant la maladie.",
      "Les astres signalaient et rythmaient ces équilibres. On choisissait même les moments favorables aux soins (élection) selon la Lune.",
    ],
    reperes: [
      { label: "Hippocrate & Galien", sens: "Fondent la doctrine des quatre humeurs et des tempéraments, socle de la médecine pendant deux millénaires." },
      { label: "Médecine médiévale & arabe", sens: "Intègre l’astrologie aux soins : moments d’élection, calendriers de saignée, choix des remèdes." },
      { label: "Renaissance — Culpeper", sens: "Nicholas Culpeper relie chaque plante à une planète et publie une herboristerie astrologique très diffusée." },
    ],
  },
  hommeZodiacal: {
    title: "L’homme zodiacal : les signes et le corps",
    intro: [
      "La melothésie, ou « homme zodiacal », attribue à chaque signe une région du corps, de la tête (Bélier) aux pieds (Poissons). C’est la grille de correspondances la plus connue.",
    ],
    signes: [
      { signe: "Bélier", partie: "Tête, visage, cerveau, yeux" },
      { signe: "Taureau", partie: "Gorge, cou, nuque, thyroïde, cordes vocales" },
      { signe: "Gémeaux", partie: "Épaules, bras, mains, poumons, système nerveux" },
      { signe: "Cancer", partie: "Poitrine, seins, estomac, système digestif" },
      { signe: "Lion", partie: "Cœur, dos, colonne vertébrale, circulation" },
      { signe: "Vierge", partie: "Intestins, abdomen, assimilation, rate" },
      { signe: "Balance", partie: "Reins, lombaires, peau, équilibre acido-basique" },
      { signe: "Scorpion", partie: "Organes génitaux, vessie, côlon, élimination" },
      { signe: "Sagittaire", partie: "Hanches, cuisses, foie, nerf sciatique" },
      { signe: "Capricorne", partie: "Genoux, os, articulations, peau, dents" },
      { signe: "Verseau", partie: "Mollets, chevilles, circulation, système nerveux" },
      { signe: "Poissons", partie: "Pieds, système lymphatique, immunité" },
    ],
  },
  temperaments: {
    title: "Les quatre tempéraments et humeurs",
    intro: [
      "Chaque tempérament résulte de la combinaison de deux qualités primaires (chaud/froid et sec/humide) et correspond à une humeur, un élément et des planètes.",
    ],
    humeurLabel: "Humeur",
    items: [
      { nom: "Sanguin", qualites: "Chaud & humide", humeur: "Sang", element: "Air", planetes: "Jupiter, Vénus", traits: "Sociable, optimiste, vital ; excès vers la dispersion et la pléthore." },
      { nom: "Colérique (bilieux)", qualites: "Chaud & sec", humeur: "Bile jaune", element: "Feu", planetes: "Mars, Soleil", traits: "Énergique, ardent, prompt ; excès vers l’inflammation, la fièvre, l’irritabilité." },
      { nom: "Mélancolique", qualites: "Froid & sec", humeur: "Bile noire", element: "Terre", planetes: "Saturne, Mercure", traits: "Réfléchi, endurant, méthodique ; excès vers la rigidité, la sécheresse, l’abattement." },
      { nom: "Flegmatique", qualites: "Froid & humide", humeur: "Phlegme (lymphe)", element: "Eau", planetes: "Lune, Vénus", traits: "Calme, réceptif, posé ; excès vers la lenteur, la rétention, la congestion." },
    ],
  },
  planetes: {
    title: "Les planètes et leurs domaines physiologiques",
    intro: [
      "Chaque planète porte des qualités et gouverne des fonctions et organes. On les lit en appui des signes pour nuancer un tempérament.",
    ],
    items: [
      { astre: "Soleil", qualites: "Chaud & sec", domaine: "Vitalité, cœur, force vitale, yeux (droit chez l’homme)." },
      { astre: "Lune", qualites: "Froid & humide", domaine: "Fluides, estomac, rythmes, fertilité, système lymphatique." },
      { astre: "Mercure", qualites: "Variable (froid & sec)", domaine: "Système nerveux, langage, poumons, mains, coordination." },
      { astre: "Vénus", qualites: "Chaud & humide", domaine: "Reins, gorge, peau, hormones, équilibre, douceur." },
      { astre: "Mars", qualites: "Chaud & sec", domaine: "Sang, muscles, inflammations, fièvres, chirurgie, accidents." },
      { astre: "Jupiter", qualites: "Chaud & humide", domaine: "Foie, croissance, abondance, métabolisme, excès." },
      { astre: "Saturne", qualites: "Froid & sec", domaine: "Os, dents, peau, rate, chronicité, blocages, contraction." },
    ],
  },
  maisons: {
    title: "Les maisons de la santé",
    houseLabel: "Maison",
    items: [
      { maison: "I", domaine: "Le corps, la constitution, la vitalité générale, l’Ascendant comme racine de la santé." },
      { maison: "VI", domaine: "La maladie, les affections courantes, le terrain, l’hygiène de vie, les soignants." },
      { maison: "VIII", domaine: "Les crises, les opérations lourdes, ce qui transforme, la fin de vie." },
      { maison: "XII", domaine: "L’hospitalisation, l’isolement, les maux cachés ou psychiques, la convalescence." },
    ],
  },
  decombiture: {
    title: "La décombiture : le thème de l’alitement",
    intro: [
      "La décombiture est le thème dressé pour le moment où le malade s’alite (ou pour la première urine examinée). C’est l’outil horaire de l’astrologie médicale traditionnelle.",
      "On y juge la nature de la maladie, son siège, son évolution et les moments de crise.",
    ],
    elements: [
      { label: "Significateur du malade", sens: "Maître de l’Ascendant et la Lune : la force vitale et le terrain." },
      { label: "Significateur de la maladie", sens: "Souvent le maître de la maison VI, ou la planète affligeant le significateur de vie." },
      { label: "La Lune", sens: "Décrit le déroulement jour après jour ; sa course rythme les phases de la maladie." },
      { label: "Les angles", sens: "Planètes angulaires = facteurs agissants ; cadentes = facteurs en retrait." },
    ],
  },
  joursCritiques: {
    title: "Les jours critiques et la Lune",
    intro: [
      "La tradition (héritée d’Hippocrate et de Galien) repère des « jours critiques » où la maladie connaît un tournant, calés sur la course de la Lune depuis la décombiture.",
    ],
    reglesLabel: "Principes traditionnels",
    regles: [
      "On suit la Lune à partir de sa position au moment de l’alitement.",
      "Les aspects que la Lune forme aux maléfiques (Mars, Saturne) marquent les passages difficiles.",
      "Ses aspects aux bénéfiques (Jupiter, Vénus) ou au Soleil signalent les phases d’amélioration.",
      "Les points de crise classiques se situent autour des quadratures successives de la Lune (env. 7, 14, 21 jours).",
    ],
  },
  exemples: {
    title: "Exemples de lecture symbolique",
    items: [
      {
        titre: "Constitution & terrain",
        texte: "On lit le signe de l’Ascendant, son maître et les planètes en maison I pour décrire la constitution (robuste, nerveuse, lymphatique…). Saturne fort à l’ASC oriente vers un terrain plutôt froid et sec ; la Lune ou Vénus, vers un terrain humide.",
      },
      {
        titre: "Tempérament dominant",
        texte: "En pondérant signe de l’ASC, position de son maître, signe de la Lune et saison de naissance, on dégage un mélange de qualités (ex. chaud-humide à dominante sanguine) plutôt qu’un type pur.",
      },
      {
        titre: "Zone du corps sollicitée",
        texte: "Une planète tendue dans un signe oriente vers la région correspondante : Mars en Bélier attire l’attention sur la tête ; Saturne en Capricorne sur les os, genoux et articulations. Symbolique, jamais diagnostique.",
      },
    ],
    erreursLabel: "Erreurs fréquentes à éviter",
    erreurs: [
      "Confondre correspondance symbolique et diagnostic médical.",
      "Conclure à une maladie à partir d’un seul placement planétaire.",
      "Négliger l’avertissement : reporter ou éviter une consultation à cause d’un thème.",
      "Oublier que le tempérament est un mélange, pas un type pur.",
      "Lire la décombiture sans connaître le moment réel de l’alitement.",
      "Traiter une lecture symbolique comme une certitude pronostique.",
    ],
  },
  faqDataTitle: "Questions fréquentes sur l’astrologie médicale",
  faq: [
    { q: "L’astrologie médicale permet-elle de poser un diagnostic ?", a: "Non. C’est un système symbolique et historique. Elle ne diagnostique rien et ne remplace jamais un médecin. Tout symptôme doit être évalué par un professionnel de santé." },
    { q: "Qu’est-ce que l’homme zodiacal ?", a: "La melothésie : une grille traditionnelle qui associe chaque signe à une partie du corps, du Bélier (tête) aux Poissons (pieds)." },
    { q: "Que sont les quatre humeurs ?", a: "Sang, bile jaune, bile noire et phlegme. Leur équilibre définissait la santé dans la médecine ancienne, et chaque humeur correspond à un tempérament et à des qualités." },
    { q: "Qu’est-ce qu’une décombiture ?", a: "Le thème dressé pour le moment où le malade s’alite. C’est l’outil horaire utilisé par la tradition pour suivre l’évolution d’une maladie." },
    { q: "Quelles maisons concernent la santé ?", a: "Surtout la I (corps, vitalité) et la VI (maladie, terrain) ; secondairement la VIII (crises) et la XII (hospitalisation, convalescence)." },
    { q: "Comment déterminer un tempérament ?", a: "On combine le signe de l’Ascendant et son maître, le signe de la Lune et la saison, pour estimer un mélange de qualités chaud/froid et sec/humide — non un type unique." },
  ],
  faqVisibleTitle: "Questions fréquentes sur l’astrologie médicale",
  faqVisible: [
    {
      q: "L’astrologie médicale est-elle reconnue par la médecine ?",
      a: "Non. La médecine moderne repose sur la biologie et les preuves cliniques. L’astrologie médicale est étudiée comme une tradition culturelle et historique, intéressante pour comprendre l’histoire des idées, mais sans valeur diagnostique.",
    },
    {
      q: "D’où vient la théorie des humeurs ?",
      a: "Elle remonte à Hippocrate et a été systématisée par Galien. Pendant près de deux mille ans, santé et maladie y étaient pensées comme l’équilibre ou le déséquilibre de quatre humeurs reliées aux éléments et aux astres.",
    },
    {
      q: "Pourquoi les anciens choisissaient-ils un moment selon la Lune pour se soigner ?",
      a: "On évitait certains soins (comme la saignée) quand la Lune traversait le signe gouvernant la zone concernée, par prudence symbolique. C’est une pratique d’élection traditionnelle, sans fondement médical actuel.",
    },
    {
      q: "Qui était Nicholas Culpeper ?",
      a: "Un herboriste anglais du XVIIe siècle qui relia chaque plante médicinale à une planète et publia une herboristerie astrologique très populaire, emblématique du lien historique entre astrologie et soin.",
    },
  ],
  footer: { planetes: "Planètes", signes: "Signes", horaire: "Astrologie horaire", maisons: "Maisons" },
};

/* ============================== EN ============================== */
const en: AstroMedicaleContent = {
  meta: {
    title: "Medical astrology: temperaments & humours",
    description:
      "Medical astrology: the complete tradition. Zodiac man, temperaments, the four humours, planets, houses of health. A symbolic course (not medical)!",
  },
  jsonld: {
    headline: "Medical astrology: temperaments, humours and the zodiac man",
    description:
      "Medical astrology: zodiac man, temperaments, the four humours, planets, houses of health and decumbiture. A symbolic and historical approach, not a medical one.",
    articleSection: "Astrology",
  },
  hero: {
    badge: "Astrology course — Tradition & history",
    title: "Medical astrology: the body and the sky",
    subtitle:
      "The oldest of the applied branches: linking signs, planets and humours to parts of the body and to temperaments. A symbolic and historical reading of health — never a diagnosis.",
    highlights: [
      "The zodiac man (signs → body)",
      "The four temperaments & humours",
      "Planets and qualities (hot/cold/dry/moist)",
      "Houses of health & decumbiture",
    ],
  },
  tocLabel: "Contents",
  sections: [
    { id: "definition", label: "Definition" },
    { id: "histoire", label: "History & humours" },
    { id: "homme-zodiacal", label: "Zodiac man" },
    { id: "temperaments", label: "Temperaments" },
    { id: "planetes", label: "Planets" },
    { id: "maisons", label: "Houses of health" },
    { id: "decombiture", label: "Decumbiture" },
    { id: "jours-critiques", label: "Critical days" },
    { id: "exemples", label: "Examples" },
    { id: "faq", label: "FAQ" },
  ],
  avertissement: {
    titre: "Important disclaimer",
    texte:
      "Medical astrology is a symbolic and historical tradition. It is neither a diagnosis, nor medical advice, nor a treatment. It in no way replaces the opinion of a doctor or a health professional. If you have any symptom or concern, consult a qualified caregiver.",
  },
  defBox: {
    label: "Definition",
    body: (
      <>
        <strong>Medical astrology</strong> is the tradition that links the signs, the{" "}
        <Link href="/#planetes">planets</Link> and the <Link href="/#maisons">houses</Link> to parts of the body, to
        temperaments and to the four humours. It is a symbolic and historical system, not a diagnostic tool.
      </>
    ),
  },
  intro: (
    <>
      From Antiquity to the Renaissance, medicine and astrology were inseparable: health was conceived as the balance of
      four <strong>humours</strong>, and each sign governed a region of the body. This course presents{" "}
      <strong>medical astrology</strong> as a symbolic heritage — the zodiac man, the temperaments, the planetary
      correspondences and decumbiture — without ever standing in for medicine.
    </>
  ),
  definition: {
    title: "What is medical astrology?",
    resumeLabel: "Summary",
    resume: [
      "Medical astrology (iatromathematics) links the signs, planets and houses to parts of the body, to temperaments and to the rhythms of vitality.",
      "The oldest branch of applied astrology, it shaped medicine from Hippocrates to the Renaissance through the theory of the humours.",
      "Today it is studied as a symbolic and cultural system: a way of thinking about balance, not a medical science.",
    ],
    notLabel: "What it is not",
    ceQueCeNestPas: [
      "A diagnosis or a substitute for a medical consultation.",
      "A method for prescribing or interrupting a treatment.",
      "A certain prediction of illness or recovery.",
    ],
  },
  histoire: {
    title: "History: the medicine of the humours",
    intro: [
      "Ancient and medieval medicine rested on the theory of the humours: health was the balance of four fluids, imbalance being illness.",
      "The stars signalled and paced these balances. People even chose favourable moments for care (election) according to the Moon.",
    ],
    reperes: [
      { label: "Hippocrates & Galen", sens: "They founded the doctrine of the four humours and temperaments, the bedrock of medicine for two millennia." },
      { label: "Medieval & Arabic medicine", sens: "It integrated astrology into care: elective moments, bloodletting calendars, the choice of remedies." },
      { label: "Renaissance — Culpeper", sens: "Nicholas Culpeper linked each plant to a planet and published a widely circulated astrological herbal." },
    ],
  },
  hommeZodiacal: {
    title: "The zodiac man: the signs and the body",
    intro: [
      "Melothesia, or the “zodiac man”, assigns each sign a region of the body, from the head (Aries) to the feet (Pisces). It is the best-known grid of correspondences.",
    ],
    signes: [
      { signe: "Aries", partie: "Head, face, brain, eyes" },
      { signe: "Taurus", partie: "Throat, neck, nape, thyroid, vocal cords" },
      { signe: "Gemini", partie: "Shoulders, arms, hands, lungs, nervous system" },
      { signe: "Cancer", partie: "Chest, breasts, stomach, digestive system" },
      { signe: "Leo", partie: "Heart, back, spine, circulation" },
      { signe: "Virgo", partie: "Intestines, abdomen, assimilation, spleen" },
      { signe: "Libra", partie: "Kidneys, lower back, skin, acid-base balance" },
      { signe: "Scorpio", partie: "Genitals, bladder, colon, elimination" },
      { signe: "Sagittarius", partie: "Hips, thighs, liver, sciatic nerve" },
      { signe: "Capricorn", partie: "Knees, bones, joints, skin, teeth" },
      { signe: "Aquarius", partie: "Calves, ankles, circulation, nervous system" },
      { signe: "Pisces", partie: "Feet, lymphatic system, immunity" },
    ],
  },
  temperaments: {
    title: "The four temperaments and humours",
    intro: [
      "Each temperament results from the combination of two primary qualities (hot/cold and dry/moist) and corresponds to a humour, an element and planets.",
    ],
    humeurLabel: "Humour",
    items: [
      { nom: "Sanguine", qualites: "Hot & moist", humeur: "Blood", element: "Air", planetes: "Jupiter, Venus", traits: "Sociable, optimistic, vital; excess tends toward scattering and plethora." },
      { nom: "Choleric (bilious)", qualites: "Hot & dry", humeur: "Yellow bile", element: "Fire", planetes: "Mars, Sun", traits: "Energetic, ardent, quick; excess tends toward inflammation, fever, irritability." },
      { nom: "Melancholic", qualites: "Cold & dry", humeur: "Black bile", element: "Earth", planetes: "Saturn, Mercury", traits: "Thoughtful, enduring, methodical; excess tends toward rigidity, dryness, dejection." },
      { nom: "Phlegmatic", qualites: "Cold & moist", humeur: "Phlegm (lymph)", element: "Water", planetes: "Moon, Venus", traits: "Calm, receptive, composed; excess tends toward slowness, retention, congestion." },
    ],
  },
  planetes: {
    title: "The planets and their physiological domains",
    intro: [
      "Each planet carries qualities and governs functions and organs. They are read alongside the signs to nuance a temperament.",
    ],
    items: [
      { astre: "Sun", qualites: "Hot & dry", domaine: "Vitality, heart, life force, eyes (the right one in men)." },
      { astre: "Moon", qualites: "Cold & moist", domaine: "Fluids, stomach, rhythms, fertility, lymphatic system." },
      { astre: "Mercury", qualites: "Variable (cold & dry)", domaine: "Nervous system, speech, lungs, hands, coordination." },
      { astre: "Venus", qualites: "Hot & moist", domaine: "Kidneys, throat, skin, hormones, balance, gentleness." },
      { astre: "Mars", qualites: "Hot & dry", domaine: "Blood, muscles, inflammation, fevers, surgery, accidents." },
      { astre: "Jupiter", qualites: "Hot & moist", domaine: "Liver, growth, abundance, metabolism, excess." },
      { astre: "Saturn", qualites: "Cold & dry", domaine: "Bones, teeth, skin, spleen, chronicity, blockages, contraction." },
    ],
  },
  maisons: {
    title: "The houses of health",
    houseLabel: "House",
    items: [
      { maison: "I", domaine: "The body, the constitution, general vitality, the Ascendant as the root of health." },
      { maison: "VI", domaine: "Illness, common ailments, the terrain, lifestyle, caregivers." },
      { maison: "VIII", domaine: "Crises, major operations, what transforms, the end of life." },
      { maison: "XII", domaine: "Hospitalisation, isolation, hidden or psychic ailments, convalescence." },
    ],
  },
  decombiture: {
    title: "Decumbiture: the chart of taking to bed",
    intro: [
      "The decumbiture is the chart cast for the moment the patient takes to bed (or for the first urine examined). It is the horary tool of traditional medical astrology.",
      "From it one judges the nature of the illness, its seat, its course and the moments of crisis.",
    ],
    elements: [
      { label: "Significator of the patient", sens: "Ruler of the Ascendant and the Moon: the life force and the terrain." },
      { label: "Significator of the illness", sens: "Often the ruler of the sixth house, or the planet afflicting the significator of life." },
      { label: "The Moon", sens: "Describes the course day by day; its motion paces the phases of the illness." },
      { label: "The angles", sens: "Angular planets = acting factors; cadent ones = factors in the background." },
    ],
  },
  joursCritiques: {
    title: "Critical days and the Moon",
    intro: [
      "The tradition (inherited from Hippocrates and Galen) identifies “critical days” when the illness reaches a turning point, calibrated on the Moon’s course since the decumbiture.",
    ],
    reglesLabel: "Traditional principles",
    regles: [
      "The Moon is followed from its position at the moment of taking to bed.",
      "The aspects the Moon forms to the malefics (Mars, Saturn) mark the difficult passages.",
      "Its aspects to the benefics (Jupiter, Venus) or to the Sun signal the phases of improvement.",
      "The classic crisis points fall around the Moon’s successive squares (about 7, 14, 21 days).",
    ],
  },
  exemples: {
    title: "Examples of symbolic reading",
    items: [
      {
        titre: "Constitution & terrain",
        texte: "One reads the sign of the Ascendant, its ruler and the planets in the first house to describe the constitution (robust, nervous, lymphatic…). A strong Saturn on the ASC points to a rather cold and dry terrain; the Moon or Venus, to a moist one.",
      },
      {
        titre: "Dominant temperament",
        texte: "By weighing the sign of the ASC, the position of its ruler, the sign of the Moon and the season of birth, one draws out a blend of qualities (e.g. hot-moist with a sanguine dominance) rather than a pure type.",
      },
      {
        titre: "Body zone involved",
        texte: "A stressed planet in a sign points to the corresponding region: Mars in Aries draws attention to the head; Saturn in Capricorn to the bones, knees and joints. Symbolic, never diagnostic.",
      },
    ],
    erreursLabel: "Common mistakes to avoid",
    erreurs: [
      "Confusing symbolic correspondence with medical diagnosis.",
      "Concluding to an illness from a single planetary placement.",
      "Neglecting the disclaimer: postponing or avoiding a consultation because of a chart.",
      "Forgetting that temperament is a blend, not a pure type.",
      "Reading the decumbiture without knowing the real moment of taking to bed.",
      "Treating a symbolic reading as a prognostic certainty.",
    ],
  },
  faqDataTitle: "Frequently asked questions about medical astrology",
  faq: [
    { q: "Can medical astrology make a diagnosis?", a: "No. It is a symbolic and historical system. It diagnoses nothing and never replaces a doctor. Any symptom must be assessed by a health professional." },
    { q: "What is the zodiac man?", a: "Melothesia: a traditional grid that associates each sign with a part of the body, from Aries (head) to Pisces (feet)." },
    { q: "What are the four humours?", a: "Blood, yellow bile, black bile and phlegm. Their balance defined health in ancient medicine, and each humour corresponds to a temperament and to qualities." },
    { q: "What is a decumbiture?", a: "The chart cast for the moment the patient takes to bed. It is the horary tool used by the tradition to follow the course of an illness." },
    { q: "Which houses concern health?", a: "Above all the first (body, vitality) and the sixth (illness, terrain); secondarily the eighth (crises) and the twelfth (hospitalisation, convalescence)." },
    { q: "How do you determine a temperament?", a: "You combine the sign of the Ascendant and its ruler, the sign of the Moon and the season, to estimate a blend of hot/cold and dry/moist qualities — not a single type." },
  ],
  faqVisibleTitle: "Frequently asked questions about medical astrology",
  faqVisible: [
    {
      q: "Is medical astrology recognised by medicine?",
      a: "No. Modern medicine rests on biology and clinical evidence. Medical astrology is studied as a cultural and historical tradition, interesting for understanding the history of ideas, but with no diagnostic value.",
    },
    {
      q: "Where does the theory of the humours come from?",
      a: "It goes back to Hippocrates and was systematised by Galen. For nearly two thousand years, health and illness were conceived there as the balance or imbalance of four humours linked to the elements and the stars.",
    },
    {
      q: "Why did the ancients choose a moment according to the Moon for treatment?",
      a: "Certain treatments (such as bloodletting) were avoided when the Moon was crossing the sign governing the area concerned, out of symbolic caution. It is a traditional elective practice, with no current medical basis.",
    },
    {
      q: "Who was Nicholas Culpeper?",
      a: "A seventeenth-century English herbalist who linked each medicinal plant to a planet and published a very popular astrological herbal, emblematic of the historical link between astrology and care.",
    },
  ],
  footer: { planetes: "Planets", signes: "Signs", horaire: "Horary astrology", maisons: "Houses" },
};

/* ============================== ES ============================== */
const es: AstroMedicaleContent = {
  meta: {
    title: "Astrología médica: temperamentos y humores",
    description:
      "Astrología médica: tradición completa. Hombre zodiacal, temperamentos, humores, planetas, casas de la salud. Curso simbólico (no médico).",
  },
  jsonld: {
    headline: "Astrología médica: temperamentos, humores y hombre zodiacal",
    description:
      "Astrología médica: hombre zodiacal, temperamentos, los cuatro humores, planetas, casas de la salud y decumbitura. Enfoque simbólico e histórico, no médico.",
    articleSection: "Astrología",
  },
  hero: {
    badge: "Curso de astrología — Tradición e historia",
    title: "Astrología médica: el cuerpo y el cielo",
    subtitle:
      "La más antigua de las ramas aplicadas: relacionar signos, planetas y humores con las partes del cuerpo y los temperamentos. Una lectura simbólica e histórica de la salud — nunca un diagnóstico.",
    highlights: [
      "El hombre zodiacal (signos → cuerpo)",
      "Los cuatro temperamentos y humores",
      "Planetas y cualidades (caliente/frío/seco/húmedo)",
      "Casas de la salud y decumbitura",
    ],
  },
  tocLabel: "Índice",
  sections: [
    { id: "definition", label: "Definición" },
    { id: "histoire", label: "Historia y humores" },
    { id: "homme-zodiacal", label: "Hombre zodiacal" },
    { id: "temperaments", label: "Temperamentos" },
    { id: "planetes", label: "Planetas" },
    { id: "maisons", label: "Casas de la salud" },
    { id: "decombiture", label: "Decumbitura" },
    { id: "jours-critiques", label: "Días críticos" },
    { id: "exemples", label: "Ejemplos" },
    { id: "faq", label: "FAQ" },
  ],
  avertissement: {
    titre: "Aviso importante",
    texte:
      "La astrología médica es una tradición simbólica e histórica. No constituye ni un diagnóstico, ni un consejo médico, ni un tratamiento. No sustituye en ningún caso la opinión de un médico o de un profesional de la salud. Ante cualquier síntoma o inquietud, consulta a un profesional cualificado.",
  },
  defBox: {
    label: "Definición",
    body: (
      <>
        La <strong>astrología médica</strong> es la tradición que relaciona los signos, los{" "}
        <Link href="/#planetes">planetas</Link> y las <Link href="/#maisons">casas</Link> con las partes del cuerpo, los
        temperamentos y los cuatro humores. Es un sistema simbólico e histórico, no una herramienta de diagnóstico.
      </>
    ),
  },
  intro: (
    <>
      De la Antigüedad al Renacimiento, medicina y astrología eran inseparables: la salud se concebía como el equilibrio
      de cuatro <strong>humores</strong>, y cada signo gobernaba una región del cuerpo. Este curso presenta la{" "}
      <strong>astrología médica</strong> como patrimonio simbólico — el hombre zodiacal, los temperamentos, las
      correspondencias planetarias y la decumbitura — sin sustituir jamás a la medicina.
    </>
  ),
  definition: {
    title: "¿Qué es la astrología médica?",
    resumeLabel: "Resumen",
    resume: [
      "La astrología médica (iatromatemática) relaciona los signos, planetas y casas con las partes del cuerpo, los temperamentos y los ritmos de la vitalidad.",
      "Rama más antigua de la astrología aplicada, estructuró la medicina desde Hipócrates hasta el Renacimiento a través de la teoría de los humores.",
      "Hoy se estudia como un sistema simbólico y cultural: una forma de pensar el equilibrio, no una ciencia médica.",
    ],
    notLabel: "Lo que no es",
    ceQueCeNestPas: [
      "Un diagnóstico o un sustituto de la consulta médica.",
      "Un método para prescribir o interrumpir un tratamiento.",
      "Una predicción segura de enfermedad o de curación.",
    ],
  },
  histoire: {
    title: "Historia: la medicina de los humores",
    intro: [
      "La medicina antigua y medieval se basaba en la teoría de los humores: la salud era el equilibrio de cuatro fluidos, y el desequilibrio, la enfermedad.",
      "Los astros señalaban y marcaban el ritmo de estos equilibrios. Incluso se elegían los momentos favorables para los cuidados (elección) según la Luna.",
    ],
    reperes: [
      { label: "Hipócrates y Galeno", sens: "Fundan la doctrina de los cuatro humores y de los temperamentos, base de la medicina durante dos milenios." },
      { label: "Medicina medieval y árabe", sens: "Integra la astrología en los cuidados: momentos de elección, calendarios de sangría, elección de los remedios." },
      { label: "Renacimiento — Culpeper", sens: "Nicholas Culpeper relaciona cada planta con un planeta y publica un herbario astrológico muy difundido." },
    ],
  },
  hommeZodiacal: {
    title: "El hombre zodiacal: los signos y el cuerpo",
    intro: [
      "La melotesia, u «hombre zodiacal», atribuye a cada signo una región del cuerpo, de la cabeza (Aries) a los pies (Piscis). Es la tabla de correspondencias más conocida.",
    ],
    signes: [
      { signe: "Aries", partie: "Cabeza, rostro, cerebro, ojos" },
      { signe: "Tauro", partie: "Garganta, cuello, nuca, tiroides, cuerdas vocales" },
      { signe: "Géminis", partie: "Hombros, brazos, manos, pulmones, sistema nervioso" },
      { signe: "Cáncer", partie: "Pecho, senos, estómago, sistema digestivo" },
      { signe: "Leo", partie: "Corazón, espalda, columna vertebral, circulación" },
      { signe: "Virgo", partie: "Intestinos, abdomen, asimilación, bazo" },
      { signe: "Libra", partie: "Riñones, zona lumbar, piel, equilibrio ácido-base" },
      { signe: "Escorpio", partie: "Órganos genitales, vejiga, colon, eliminación" },
      { signe: "Sagitario", partie: "Caderas, muslos, hígado, nervio ciático" },
      { signe: "Capricornio", partie: "Rodillas, huesos, articulaciones, piel, dientes" },
      { signe: "Acuario", partie: "Pantorrillas, tobillos, circulación, sistema nervioso" },
      { signe: "Piscis", partie: "Pies, sistema linfático, inmunidad" },
    ],
  },
  temperaments: {
    title: "Los cuatro temperamentos y humores",
    intro: [
      "Cada temperamento resulta de la combinación de dos cualidades primarias (caliente/frío y seco/húmedo) y corresponde a un humor, un elemento y unos planetas.",
    ],
    humeurLabel: "Humor",
    items: [
      { nom: "Sanguíneo", qualites: "Caliente y húmedo", humeur: "Sangre", element: "Aire", planetes: "Júpiter, Venus", traits: "Sociable, optimista, vital; el exceso tiende a la dispersión y a la plétora." },
      { nom: "Colérico (bilioso)", qualites: "Caliente y seco", humeur: "Bilis amarilla", element: "Fuego", planetes: "Marte, Sol", traits: "Enérgico, ardiente, pronto; el exceso tiende a la inflamación, la fiebre, la irritabilidad." },
      { nom: "Melancólico", qualites: "Frío y seco", humeur: "Bilis negra", element: "Tierra", planetes: "Saturno, Mercurio", traits: "Reflexivo, resistente, metódico; el exceso tiende a la rigidez, la sequedad, el abatimiento." },
      { nom: "Flemático", qualites: "Frío y húmedo", humeur: "Flema (linfa)", element: "Agua", planetes: "Luna, Venus", traits: "Tranquilo, receptivo, sereno; el exceso tiende a la lentitud, la retención, la congestión." },
    ],
  },
  planetes: {
    title: "Los planetas y sus dominios fisiológicos",
    intro: [
      "Cada planeta porta cualidades y gobierna funciones y órganos. Se leen como apoyo de los signos para matizar un temperamento.",
    ],
    items: [
      { astre: "Sol", qualites: "Caliente y seco", domaine: "Vitalidad, corazón, fuerza vital, ojos (el derecho en el hombre)." },
      { astre: "Luna", qualites: "Frío y húmedo", domaine: "Fluidos, estómago, ritmos, fertilidad, sistema linfático." },
      { astre: "Mercurio", qualites: "Variable (frío y seco)", domaine: "Sistema nervioso, lenguaje, pulmones, manos, coordinación." },
      { astre: "Venus", qualites: "Caliente y húmedo", domaine: "Riñones, garganta, piel, hormonas, equilibrio, dulzura." },
      { astre: "Marte", qualites: "Caliente y seco", domaine: "Sangre, músculos, inflamaciones, fiebres, cirugía, accidentes." },
      { astre: "Júpiter", qualites: "Caliente y húmedo", domaine: "Hígado, crecimiento, abundancia, metabolismo, exceso." },
      { astre: "Saturno", qualites: "Frío y seco", domaine: "Huesos, dientes, piel, bazo, cronicidad, bloqueos, contracción." },
    ],
  },
  maisons: {
    title: "Las casas de la salud",
    houseLabel: "Casa",
    items: [
      { maison: "I", domaine: "El cuerpo, la constitución, la vitalidad general, el Ascendente como raíz de la salud." },
      { maison: "VI", domaine: "La enfermedad, las afecciones corrientes, el terreno, la higiene de vida, los cuidadores." },
      { maison: "VIII", domaine: "Las crisis, las operaciones graves, lo que transforma, el final de la vida." },
      { maison: "XII", domaine: "La hospitalización, el aislamiento, los males ocultos o psíquicos, la convalecencia." },
    ],
  },
  decombiture: {
    title: "La decumbitura: la carta del encamamiento",
    intro: [
      "La decumbitura es la carta levantada para el momento en que el enfermo se acuesta (o para la primera orina examinada). Es la herramienta horaria de la astrología médica tradicional.",
      "En ella se juzga la naturaleza de la enfermedad, su sede, su evolución y los momentos de crisis.",
    ],
    elements: [
      { label: "Significador del enfermo", sens: "Regente del Ascendente y la Luna: la fuerza vital y el terreno." },
      { label: "Significador de la enfermedad", sens: "A menudo el regente de la casa VI, o el planeta que aflige al significador de vida." },
      { label: "La Luna", sens: "Describe el desarrollo día a día; su recorrido marca el ritmo de las fases de la enfermedad." },
      { label: "Los ángulos", sens: "Planetas angulares = factores que actúan; cadentes = factores en segundo plano." },
    ],
  },
  joursCritiques: {
    title: "Los días críticos y la Luna",
    intro: [
      "La tradición (heredada de Hipócrates y de Galeno) identifica «días críticos» en los que la enfermedad alcanza un punto de inflexión, calibrados sobre el recorrido de la Luna desde la decumbitura.",
    ],
    reglesLabel: "Principios tradicionales",
    regles: [
      "Se sigue a la Luna a partir de su posición en el momento del encamamiento.",
      "Los aspectos que la Luna forma con los maléficos (Marte, Saturno) marcan los pasos difíciles.",
      "Sus aspectos con los benéficos (Júpiter, Venus) o con el Sol señalan las fases de mejoría.",
      "Los puntos de crisis clásicos se sitúan en torno a las cuadraturas sucesivas de la Luna (aprox. 7, 14, 21 días).",
    ],
  },
  exemples: {
    title: "Ejemplos de lectura simbólica",
    items: [
      {
        titre: "Constitución y terreno",
        texte: "Se lee el signo del Ascendente, su regente y los planetas en la casa I para describir la constitución (robusta, nerviosa, linfática…). Un Saturno fuerte en el ASC orienta hacia un terreno más bien frío y seco; la Luna o Venus, hacia un terreno húmedo.",
      },
      {
        titre: "Temperamento dominante",
        texte: "Ponderando el signo del ASC, la posición de su regente, el signo de la Luna y la estación de nacimiento, se extrae una mezcla de cualidades (p. ej. caliente-húmedo con dominante sanguínea) más que un tipo puro.",
      },
      {
        titre: "Zona del cuerpo implicada",
        texte: "Un planeta tenso en un signo orienta hacia la región correspondiente: Marte en Aries llama la atención sobre la cabeza; Saturno en Capricornio sobre los huesos, las rodillas y las articulaciones. Simbólico, nunca diagnóstico.",
      },
    ],
    erreursLabel: "Errores frecuentes que evitar",
    erreurs: [
      "Confundir la correspondencia simbólica con el diagnóstico médico.",
      "Concluir una enfermedad a partir de una sola posición planetaria.",
      "Descuidar el aviso: posponer o evitar una consulta a causa de una carta.",
      "Olvidar que el temperamento es una mezcla, no un tipo puro.",
      "Leer la decumbitura sin conocer el momento real del encamamiento.",
      "Tratar una lectura simbólica como una certeza pronóstica.",
    ],
  },
  faqDataTitle: "Preguntas frecuentes sobre la astrología médica",
  faq: [
    { q: "¿La astrología médica permite establecer un diagnóstico?", a: "No. Es un sistema simbólico e histórico. No diagnostica nada y nunca sustituye a un médico. Todo síntoma debe ser evaluado por un profesional de la salud." },
    { q: "¿Qué es el hombre zodiacal?", a: "La melotesia: una tabla tradicional que asocia cada signo a una parte del cuerpo, de Aries (cabeza) a Piscis (pies)." },
    { q: "¿Cuáles son los cuatro humores?", a: "Sangre, bilis amarilla, bilis negra y flema. Su equilibrio definía la salud en la medicina antigua, y cada humor corresponde a un temperamento y a unas cualidades." },
    { q: "¿Qué es una decumbitura?", a: "La carta levantada para el momento en que el enfermo se acuesta. Es la herramienta horaria utilizada por la tradición para seguir la evolución de una enfermedad." },
    { q: "¿Qué casas conciernen a la salud?", a: "Sobre todo la I (cuerpo, vitalidad) y la VI (enfermedad, terreno); en segundo lugar la VIII (crisis) y la XII (hospitalización, convalecencia)." },
    { q: "¿Cómo determinar un temperamento?", a: "Se combina el signo del Ascendente y su regente, el signo de la Luna y la estación, para estimar una mezcla de cualidades caliente/frío y seco/húmedo — no un tipo único." },
  ],
  faqVisibleTitle: "Preguntas frecuentes sobre la astrología médica",
  faqVisible: [
    {
      q: "¿Está reconocida la astrología médica por la medicina?",
      a: "No. La medicina moderna se basa en la biología y en las pruebas clínicas. La astrología médica se estudia como una tradición cultural e histórica, interesante para comprender la historia de las ideas, pero sin valor diagnóstico.",
    },
    {
      q: "¿De dónde viene la teoría de los humores?",
      a: "Se remonta a Hipócrates y fue sistematizada por Galeno. Durante casi dos mil años, la salud y la enfermedad se concebían como el equilibrio o el desequilibrio de cuatro humores relacionados con los elementos y los astros.",
    },
    {
      q: "¿Por qué los antiguos elegían un momento según la Luna para curarse?",
      a: "Se evitaban ciertos cuidados (como la sangría) cuando la Luna atravesaba el signo que gobierna la zona afectada, por prudencia simbólica. Es una práctica de elección tradicional, sin fundamento médico actual.",
    },
    {
      q: "¿Quién fue Nicholas Culpeper?",
      a: "Un herbolario inglés del siglo XVII que relacionó cada planta medicinal con un planeta y publicó un herbario astrológico muy popular, emblemático del vínculo histórico entre astrología y cuidado.",
    },
  ],
  footer: { planetes: "Planetas", signes: "Signos", horaire: "Astrología horaria", maisons: "Casas" },
};

export const astrologieMedicaleContent: Record<SeoLocale, AstroMedicaleContent> = { fr, en, es };
