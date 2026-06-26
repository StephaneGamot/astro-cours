import type { ReactNode } from "react";
import type { SeoLocale } from "@/lib/seo";

/* ====================================================================
   Les 12 signes dominants — contenu localisé (fr / en / es)
   Rédaction française complète ; en/es pointent provisoirement sur le
   français (à traduire ultérieurement).
   ==================================================================== */

export type SignesDominantsContent = {
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
  solaire: {
    title: string;
    intro: string[];
    solaireLabel: string;
    solaireText: string;
    dominantLabel: string;
    dominantText: string;
  };
  reperer: { title: string; intro: string[]; criteresLabel: string; criteres: { label: string; sens: string }[]; astuceLabel: string; astuce: string };
  signes: {
    title: string;
    intro: string[];
    elementLabels: string[];
    apporteLabel: string;
    ombreLabel: string;
    items: { signe: string; apporte: string; ombre: string }[];
  };
  elements: {
    title: string;
    intro: string[];
    items: { nom: string; sens: string }[];
    modesLabel: string;
    modes: { nom: string; sens: string }[];
  };
  exemples: { title: string; items: { titre: string; texte: string }[]; erreursLabel: string; erreurs: string[] };
  faqDataTitle: string;
  faq: { q: string; a: string }[];
  faqVisibleTitle: string;
  faqVisible: { q: string; a: string }[];
  related: { title: string; items: { href: string; label: string }[] };
  footer: { signes: string; planetes: string; maisons: string; dominantes: string };
};

/* ============================== FR ============================== */
const fr: SignesDominantsContent = {
  meta: {
    title: "Les 12 signes dominants : sens et repérage",
    description:
      "Signe dominant : pourquoi il diffère du signe solaire, comment le trouver (Soleil, Lune, Ascendant, maître) et ce que chaque signe apporte quand il domine.",
  },
  jsonld: {
    headline: "Les 12 signes dominants : repérage et signification",
    description:
      "Le signe dominant, distinct du signe solaire : définition, méthode de repérage (Soleil, Lune, Ascendant, maître du thème, amas, angularité) et profil des douze signes quand ils dominent.",
    articleSection: "Astrologie",
  },
  hero: {
    badge: "Cours d'astrologie — Lecture du thème",
    title: "Les 12 signes dominants",
    subtitle:
      "Ton signe solaire n'est qu'une pièce du puzzle. Le signe dominant, lui, est la couleur d'ensemble de ton thème — celle qui ressort quand on pèse le Soleil, la Lune, l'Ascendant et tout le reste. Apprends à le repérer, puis découvre ce que chaque signe apporte quand il domine.",
    highlights: [
      "Signe dominant ≠ signe solaire",
      "Soleil, Lune, Ascendant & maître",
      "Les 12 profils (force & ombre)",
      "Élément & mode dominants",
    ],
  },
  tocLabel: "Sommaire",
  sections: [
    { id: "definition", label: "Définition" },
    { id: "solaire", label: "≠ signe solaire" },
    { id: "reperer", label: "Comment le repérer" },
    { id: "signes", label: "Les 12 profils" },
    { id: "elements", label: "Élément & mode" },
    { id: "exemples", label: "Exemples" },
    { id: "faq", label: "FAQ" },
  ],
  defBox: {
    label: "Définition express",
    body: (
      <>
        Le <strong>signe dominant</strong> est le signe le plus mis en valeur dans l'ensemble d'un thème —
        par le <strong>Soleil</strong>, la <strong>Lune</strong>, l'<strong>Ascendant</strong>, son{" "}
        <strong>maître</strong>, un <strong>amas de planètes</strong> ou la proximité d'un{" "}
        <strong>angle</strong>. C'est la teinte générale de la personnalité, qui ne se réduit pas au seul
        signe solaire.
      </>
    ),
  },
  intro: (
    <>
      Quand on demande « tu es quel signe ? », on répond par son <strong>signe solaire</strong> — la position
      du Soleil à la naissance. Mais un thème compte une dizaine de planètes, deux luminaires et un Ascendant :
      souvent, c'est un <em>autre</em> signe qui ressort de l'ensemble. Ce signe dominant donne le ton réel de
      la personnalité. Voici comment le trouver, puis ce que chacun des douze apporte quand il prend le dessus.
    </>
  ),
  definition: {
    title: "Qu'est-ce qu'un signe dominant ?",
    resumeLabel: "Ce que c'est",
    resume: [
      "La couleur d'ensemble du thème, issue d'une pondération de tous les points forts.",
      "Le signe le plus « chargé » par le Soleil, la Lune, l'Ascendant, son maître et les amas.",
      "Un fil conducteur qui nuance, complète ou parfois éclipse le signe solaire.",
      "Un repère précieux quand le signe solaire « ne ressemble pas » à la personne.",
    ],
    notLabel: "Ce que ce n'est pas",
    ceQueCeNestPas: [
      "Le signe solaire : celui-ci ne compte qu'une planète, le Soleil.",
      "Forcément le signe qui contient le plus de planètes (l'Ascendant et le maître pèsent lourd).",
      "Une étiquette unique : on a souvent un signe et un élément dominants.",
      "Un signe « meilleur » : chaque dominante a sa force et son ombre.",
    ],
  },
  solaire: {
    title: "Signe dominant ≠ signe solaire",
    intro: [
      "C'est la confusion la plus fréquente. Le signe solaire répond à « où était le Soleil ? ». Le signe dominant répond à « quelle est la tonalité de tout le thème ? ». Les deux coïncident parfois, mais souvent non — et c'est ce décalage qui explique pourquoi ton horoscope solaire « ne te ressemble pas » toujours.",
    ],
    solaireLabel: "Signe solaire",
    solaireText:
      "La position du Soleil seul, le jour de la naissance. C'est ce qu'on lit dans les horoscopes. Il décrit l'identité profonde et l'élan vital, mais une seule planète sur l'ensemble du thème.",
    dominantLabel: "Signe dominant",
    dominantText:
      "La synthèse pondérée de tout le thème : Soleil, Lune, Ascendant, maître, amas, angles. Il décrit la teinte générale perçue par l'entourage. On peut être Soleil Vierge mais dominante Lion (Ascendant Lion + amas).",
  },
  reperer: {
    title: "Comment repérer son signe dominant",
    intro: [
      "Comme pour la maison dominante, on additionne des indices. Quand ils convergent vers un même signe, il domine nettement ; sinon, c'est plutôt un élément ou un mode qui ressort (voir plus bas).",
    ],
    criteresLabel: "Les critères, du plus fort au plus fin",
    criteres: [
      { label: "Le trio Soleil – Lune – Ascendant", sens: "Les trois piliers du thème. Leurs signes pèsent le plus lourd : commence toujours par eux." },
      { label: "Le maître de l'Ascendant", sens: "La planète qui gouverne l'Ascendant : son signe (et sa force) renforce nettement la dominante." },
      { label: "L'amas (stellium)", sens: "Trois planètes ou plus dans un même signe concentrent l'énergie et tirent la dominante vers ce signe." },
      { label: "L'angularité", sens: "Une planète proche d'un angle (Ascendant, Fond du Ciel, Descendant, Milieu du Ciel) met son signe en avant." },
      { label: "Les dignités", sens: "Une planète dans son domicile ou son exaltation est plus forte : elle renforce le signe qu'elle occupe." },
    ],
    astuceLabel: "Astuce",
    astuce:
      "Attribue des points par signe (Soleil/Lune/Ascendant = 3, maître ou angle = 2, autre planète = 1, +1 si dignité) et additionne. Le signe en tête est ta dominante ; regarde aussi quel élément et quel mode reviennent le plus.",
  },
  signes: {
    title: "Les 12 signes dominants, un à un",
    intro: [
      "Pour chaque signe : ce qu'il apporte quand il domine le thème, et son revers quand il prend trop de place. À nuancer toujours par la maison où il se concentre et par les planètes concernées.",
    ],
    elementLabels: ["Feu", "Terre", "Air", "Eau"],
    apporteLabel: "Ce que ça apporte",
    ombreLabel: "L'ombre",
    items: [
      { signe: "Bélier", apporte: "Élan, courage, franchise et esprit d'initiative. Une personne directe, qui démarre vite et ose ouvrir la voie.", ombre: "Impulsivité, impatience, agressivité, difficulté à finir." },
      { signe: "Taureau", apporte: "Constance, sens concret, sensualité et fiabilité. On bâtit du solide, on tient dans la durée.", ombre: "Entêtement, possessivité, inertie, résistance au changement." },
      { signe: "Gémeaux", apporte: "Vivacité d'esprit, curiosité, aisance verbale et adaptabilité. Le contact et l'apprentissage sont faciles.", ombre: "Dispersion, superficialité, inconstance, mental qui ne se pose pas." },
      { signe: "Cancer", apporte: "Sensibilité, empathie, mémoire et sens de la protection. Une grande richesse émotionnelle et intuitive.", ombre: "Susceptibilité, repli, dépendance affective, humeurs changeantes." },
      { signe: "Lion", apporte: "Rayonnement, générosité, confiance et créativité. Une présence chaleureuse et un vrai sens du cœur.", ombre: "Orgueil, besoin d'admiration, autoritarisme, susceptibilité de l'ego." },
      { signe: "Vierge", apporte: "Précision, méthode, sens du service et discernement. Une efficacité tranquille et utile.", ombre: "Critique, anxiété, perfectionnisme, tendance à se rabaisser." },
      { signe: "Balance", apporte: "Diplomatie, sens esthétique, équité et charme. L'art de relier, d'apaiser et d'harmoniser.", ombre: "Indécision, dépendance au regard d'autrui, fuite du conflit." },
      { signe: "Scorpion", apporte: "Intensité, profondeur psychologique, lucidité et résilience. Un magnétisme et une force de régénération rares.", ombre: "Jalousie, contrôle, rancune, attirance pour l'extrême." },
      { signe: "Sagittaire", apporte: "Optimisme, foi, goût de l'aventure et des grandes visions. On voit loin et on entraîne.", ombre: "Excès, imprudence, prosélytisme, fuite en avant." },
      { signe: "Capricorne", apporte: "Rigueur, endurance, sens des responsabilités et maturité. On construit patiemment et durablement.", ombre: "Rigidité, pessimisme, froideur, ambition au détriment de soi." },
      { signe: "Verseau", apporte: "Originalité, indépendance, vision sociale et esprit de fraternité. On invente et on relie au collectif.", ombre: "Détachement, rébellion gratuite, froideur émotionnelle, distance." },
      { signe: "Poissons", apporte: "Compassion, intuition, créativité et sensibilité spirituelle. Une grande porosité au monde et aux autres.", ombre: "Confusion, fuite, sacrifice de soi, manque de limites." },
    ],
  },
  elements: {
    title: "Quand c'est un élément ou un mode qui domine",
    intro: [
      "Souvent, aucun signe ne se détache vraiment, mais un élément (Feu, Terre, Air, Eau) ou un mode (cardinal, fixe, mutable) revient sans cesse. Cette « dominante élargie » est tout aussi parlante qu'un signe unique.",
    ],
    items: [
      { nom: "Feu — Bélier, Lion, Sagittaire", sens: "Élan, enthousiasme, action et inspiration. Un tempérament chaleureux, spontané, tourné vers l'avenir." },
      { nom: "Terre — Taureau, Vierge, Capricorne", sens: "Concret, patience, sens pratique et fiabilité. On agit dans le réel et on bâtit du durable." },
      { nom: "Air — Gémeaux, Balance, Verseau", sens: "Idées, échanges, recul et relations. Un tempérament mental, sociable et porté sur le sens." },
      { nom: "Eau — Cancer, Scorpion, Poissons", sens: "Émotion, intuition, profondeur et empathie. On ressent avant de penser, on capte les ambiances." },
    ],
    modesLabel: "Les trois modes",
    modes: [
      { nom: "Cardinal — Bélier, Cancer, Balance, Capricorne", sens: "Initier, lancer, décider. Énergie d'impulsion et de commencement." },
      { nom: "Fixe — Taureau, Lion, Scorpion, Verseau", sens: "Stabiliser, tenir, approfondir. Énergie de persévérance et de volonté." },
      { nom: "Mutable — Gémeaux, Vierge, Sagittaire, Poissons", sens: "Adapter, transformer, relier. Énergie de souplesse et d'ajustement." },
    ],
  },
  exemples: {
    title: "Exemples de lecture",
    items: [
      {
        titre: "Soleil Vierge, dominante Lion",
        texte:
          "Ascendant Lion, Soleil et Vénus en Lion en maison I : malgré un Soleil en Vierge, la personne dégage une présence chaleureuse et solaire toute léonine.",
      },
      {
        titre: "Dominante d'Eau",
        texte:
          "Lune en Cancer, Ascendant Poissons, Mars en Scorpion : aucun signe unique ne domine, mais l'élément Eau imprègne tout — sensibilité, intuition, profondeur.",
      },
      {
        titre: "Dominante cardinale",
        texte:
          "Soleil Bélier, Lune Capricorne, Ascendant Balance : trois signes cardinaux. Un tempérament qui initie sans cesse, mène et décide.",
      },
    ],
    erreursLabel: "Pièges à éviter",
    erreurs: [
      "Confondre signe dominant et signe solaire.",
      "Ne compter que les planètes et oublier l'Ascendant et son maître.",
      "Donner le même poids à une lente lointaine et au Soleil.",
      "Chercher un signe unique alors qu'un élément ou un mode domine.",
      "Croire qu'une dominante est « meilleure » : chacune a son ombre.",
      "Lire le signe dominant sans la maison où il se concentre.",
    ],
  },
  faqDataTitle: "Questions fréquentes sur le signe dominant",
  faq: [
    { q: "Qu'est-ce qu'un signe dominant ?", a: "C'est le signe le plus mis en valeur dans l'ensemble du thème — par le Soleil, la Lune, l'Ascendant, son maître, un amas ou l'angularité. C'est la teinte générale de la personnalité, au-delà du seul signe solaire." },
    { q: "Quelle différence avec le signe solaire ?", a: "Le signe solaire ne compte qu'une planète : le Soleil. Le signe dominant synthétise tout le thème (Soleil, Lune, Ascendant, maître, amas, angles). Les deux peuvent différer." },
    { q: "Comment trouver mon signe dominant ?", a: "On pondère les indices : Soleil, Lune et Ascendant en tête, puis le maître du thème, les amas, l'angularité et les dignités. Le signe qui cumule le plus de poids domine." },
    { q: "Peut-on avoir deux signes dominants ?", a: "Oui. Beaucoup de thèmes ont une co-dominance, ou bien c'est un élément ou un mode qui ressort plutôt qu'un signe unique." },
    { q: "Pourquoi mon horoscope ne me ressemble pas ?", a: "Parce qu'il se base sur le seul signe solaire. Si ta dominante est un autre signe, tu te reconnaîtras davantage dans celle-ci que dans ton horoscope habituel." },
    { q: "Le signe dominant change-t-il ?", a: "Non : le thème natal est fixe, donc la dominante de fond reste. Les transits peuvent activer temporairement d'autres signes, mais ne modifient pas la dominante de naissance." },
  ],
  faqVisibleTitle: "Questions fréquentes sur le signe dominant",
  faqVisible: [
    {
      q: "Signe dominant ou signe solaire : lequel me décrit le mieux ?",
      a: "Les deux comptent. Le signe solaire décrit ton identité profonde et ton élan vital. Le signe dominant décrit la tonalité d'ensemble que perçoit ton entourage. Quand les deux diffèrent, beaucoup de gens se reconnaissent davantage dans leur dominante.",
    },
    {
      q: "Comment l'Ascendant influence-t-il le signe dominant ?",
      a: "L'Ascendant est l'un des trois piliers (avec le Soleil et la Lune) et il désigne le maître du thème. Son signe, et celui du maître, comptent donc énormément dans le calcul de la dominante.",
    },
    {
      q: "Qu'est-ce qu'une dominante d'élément ou de mode ?",
      a: "Quand aucun signe ne se détache, on regarde si un élément (Feu, Terre, Air, Eau) ou un mode (cardinal, fixe, mutable) revient le plus souvent. Cette dominante élargie décrit le tempérament tout aussi bien qu'un signe unique.",
    },
    {
      q: "Faut-il un logiciel pour trouver son signe dominant ?",
      a: "Un thème calculé suffit. Ensuite, un simple comptage pondéré (Soleil/Lune/Ascendant, maître, amas, angles, dignités) permet de dégager le signe — ou l'élément — dominant à la main.",
    },
  ],
  related: {
    title: "À voir aussi",
    items: [
      { href: "/maisons-dominantes", label: "Les maisons dominantes" },
      { href: "/astrologie-mondiale", label: "L'astrologie mondiale" },
    ],
  },
  footer: { signes: "Les signes", planetes: "Planètes", maisons: "Maisons", dominantes: "Maisons dominantes" },
};

/* ============================== EN ============================== */
const en: SignesDominantsContent = {
  meta: {
    title: "The 12 dominant signs: meaning & spotting",
    description:
      "Dominant sign: why it differs from the Sun sign, how to find it (Sun, Moon, Ascendant, ruler) and what each sign brings when it dominates.",
  },
  jsonld: {
    headline: "The 12 dominant signs: spotting and meaning",
    description:
      "The dominant sign, distinct from the Sun sign: definition, how to spot it (Sun, Moon, Ascendant, chart ruler, stellium, angularity) and the profile of the twelve signs when they dominate.",
    articleSection: "Astrology",
  },
  hero: {
    badge: "Astrology course — Reading the chart",
    title: "The 12 dominant signs",
    subtitle:
      "Your Sun sign is only one piece of the puzzle. The dominant sign is the overall colour of your chart — the one that stands out when you weigh the Sun, the Moon, the Ascendant and everything else. Learn to spot it, then discover what each sign brings when it dominates.",
    highlights: [
      "Dominant sign ≠ Sun sign",
      "Sun, Moon, Ascendant & ruler",
      "The 12 profiles (gift & shadow)",
      "Dominant element & mode",
    ],
  },
  tocLabel: "Contents",
  sections: [
    { id: "definition", label: "Definition" },
    { id: "solaire", label: "≠ Sun sign" },
    { id: "reperer", label: "How to spot it" },
    { id: "signes", label: "The 12 profiles" },
    { id: "elements", label: "Element & mode" },
    { id: "exemples", label: "Examples" },
    { id: "faq", label: "FAQ" },
  ],
  defBox: {
    label: "Quick definition",
    body: (
      <>
        The <strong>dominant sign</strong> is the sign most emphasised across a whole chart — through the{" "}
        <strong>Sun</strong>, the <strong>Moon</strong>, the <strong>Ascendant</strong>, its{" "}
        <strong>ruler</strong>, a <strong>stellium</strong> or closeness to an <strong>angle</strong>. It is
        the general hue of the personality, which is not reducible to the Sun sign alone.
      </>
    ),
  },
  intro: (
    <>
      When someone asks &laquo;&nbsp;what&apos;s your sign?&nbsp;&raquo;, you answer with your{" "}
      <strong>Sun sign</strong> — the Sun&apos;s position at birth. But a chart has around ten planets, two
      luminaries and an Ascendant: often it is <em>another</em> sign that stands out overall. This dominant
      sign sets the real tone of the personality. Here is how to find it, then what each of the twelve brings
      when it takes the lead.
    </>
  ),
  definition: {
    title: "What is a dominant sign?",
    resumeLabel: "What it is",
    resume: [
      "The overall colour of the chart, drawn from a weighting of all the strong points.",
      "The sign most 'loaded' by the Sun, the Moon, the Ascendant, its ruler and the stelliums.",
      "A through-line that nuances, completes or sometimes eclipses the Sun sign.",
      "A valuable marker when the Sun sign 'doesn't look like' the person.",
    ],
    notLabel: "What it is not",
    ceQueCeNestPas: [
      "The Sun sign: that one counts only a single planet, the Sun.",
      "Necessarily the sign with the most planets (the Ascendant and ruler weigh heavily).",
      "A single label: you often have both a dominant sign and a dominant element.",
      "A 'better' sign: each dominant has its gift and its shadow.",
    ],
  },
  solaire: {
    title: "Dominant sign ≠ Sun sign",
    intro: [
      "This is the most common confusion. The Sun sign answers 'where was the Sun?'. The dominant sign answers 'what is the tone of the whole chart?'. The two sometimes coincide, but often not — and this gap is why your Sun-sign horoscope doesn't always 'sound like you'.",
    ],
    solaireLabel: "Sun sign",
    solaireText:
      "The Sun's position alone, on the day of birth. It's what horoscopes read. It describes the deep identity and life drive, but a single planet out of the whole chart.",
    dominantLabel: "Dominant sign",
    dominantText:
      "The weighted synthesis of the whole chart: Sun, Moon, Ascendant, ruler, stelliums, angles. It describes the general hue perceived by those around you. You can be a Virgo Sun but a Leo dominant (Leo Ascendant + stellium).",
  },
  reperer: {
    title: "How to spot your dominant sign",
    intro: [
      "As with the dominant house, you add up clues. When they converge on one sign, it clearly dominates; otherwise, it's rather an element or a mode that stands out (see below).",
    ],
    criteresLabel: "The criteria, from strongest to finest",
    criteres: [
      { label: "The Sun–Moon–Ascendant trio", sens: "The three pillars of the chart. Their signs weigh the most: always start with them." },
      { label: "The chart ruler", sens: "The planet that rules the Ascendant: its sign (and its strength) markedly reinforces the dominant." },
      { label: "The stellium", sens: "Three planets or more in the same sign concentrate the energy and pull the dominant towards that sign." },
      { label: "Angularity", sens: "A planet close to an angle (Ascendant, IC, Descendant, Midheaven) brings its sign to the fore." },
      { label: "Dignities", sens: "A planet in its domicile or exaltation is stronger: it reinforces the sign it occupies." },
    ],
    astuceLabel: "Tip",
    astuce:
      "Assign points per sign (Sun/Moon/Ascendant = 3, ruler or angle = 2, other planet = 1, +1 for a dignity) and add them up. The leading sign is your dominant; also see which element and which mode recur the most.",
  },
  signes: {
    title: "The 12 dominant signs, one by one",
    intro: [
      "For each sign: what it brings when it dominates the chart, and its downside when it takes up too much room. Always nuance it by the house where it concentrates and by the planets involved.",
    ],
    elementLabels: ["Fire", "Earth", "Air", "Water"],
    apporteLabel: "What it brings",
    ombreLabel: "The shadow",
    items: [
      { signe: "Aries", apporte: "Drive, courage, frankness and initiative. A direct person who starts quickly and dares to lead the way.", ombre: "Impulsiveness, impatience, aggressiveness, difficulty finishing." },
      { signe: "Taurus", apporte: "Constancy, a concrete sense, sensuality and reliability. You build something solid and last over time.", ombre: "Stubbornness, possessiveness, inertia, resistance to change." },
      { signe: "Gemini", apporte: "Quick wit, curiosity, verbal ease and adaptability. Contact and learning come easily.", ombre: "Scattering, superficiality, inconstancy, a mind that won't settle." },
      { signe: "Cancer", apporte: "Sensitivity, empathy, memory and a protective sense. Great emotional and intuitive richness.", ombre: "Touchiness, withdrawal, emotional dependence, changing moods." },
      { signe: "Leo", apporte: "Radiance, generosity, confidence and creativity. A warm presence and a true sense of heart.", ombre: "Pride, need for admiration, authoritarianism, a touchy ego." },
      { signe: "Virgo", apporte: "Precision, method, a sense of service and discernment. A quiet, useful efficiency.", ombre: "Criticism, anxiety, perfectionism, a tendency to belittle oneself." },
      { signe: "Libra", apporte: "Diplomacy, aesthetic sense, fairness and charm. The art of connecting, soothing and harmonising.", ombre: "Indecision, dependence on others' opinion, avoidance of conflict." },
      { signe: "Scorpio", apporte: "Intensity, psychological depth, lucidity and resilience. A rare magnetism and power of regeneration.", ombre: "Jealousy, control, resentment, attraction to extremes." },
      { signe: "Sagittarius", apporte: "Optimism, faith, a taste for adventure and grand visions. You see far and carry others along.", ombre: "Excess, recklessness, proselytising, headlong flight." },
      { signe: "Capricorn", apporte: "Rigour, endurance, a sense of responsibility and maturity. You build patiently and durably.", ombre: "Rigidity, pessimism, coldness, ambition at one's own expense." },
      { signe: "Aquarius", apporte: "Originality, independence, social vision and a spirit of fellowship. You invent and connect to the collective.", ombre: "Detachment, gratuitous rebellion, emotional coldness, distance." },
      { signe: "Pisces", apporte: "Compassion, intuition, creativity and spiritual sensitivity. A great porosity to the world and to others.", ombre: "Confusion, escape, self-sacrifice, lack of boundaries." },
    ],
  },
  elements: {
    title: "When an element or a mode dominates",
    intro: [
      "Often, no single sign really stands out, but an element (Fire, Earth, Air, Water) or a mode (cardinal, fixed, mutable) keeps recurring. This 'broad dominant' is just as telling as a single sign.",
    ],
    items: [
      { nom: "Fire — Aries, Leo, Sagittarius", sens: "Drive, enthusiasm, action and inspiration. A warm, spontaneous temperament turned towards the future." },
      { nom: "Earth — Taurus, Virgo, Capricorn", sens: "Concreteness, patience, practical sense and reliability. You act in the real world and build to last." },
      { nom: "Air — Gemini, Libra, Aquarius", sens: "Ideas, exchanges, perspective and relationships. A mental, sociable temperament drawn to meaning." },
      { nom: "Water — Cancer, Scorpio, Pisces", sens: "Emotion, intuition, depth and empathy. You feel before you think and pick up on atmospheres." },
    ],
    modesLabel: "The three modes",
    modes: [
      { nom: "Cardinal — Aries, Cancer, Libra, Capricorn", sens: "Initiate, launch, decide. Energy of impulse and beginning." },
      { nom: "Fixed — Taurus, Leo, Scorpio, Aquarius", sens: "Stabilise, hold, deepen. Energy of perseverance and will." },
      { nom: "Mutable — Gemini, Virgo, Sagittarius, Pisces", sens: "Adapt, transform, connect. Energy of flexibility and adjustment." },
    ],
  },
  exemples: {
    title: "Reading examples",
    items: [
      {
        titre: "Virgo Sun, Leo dominant",
        texte:
          "Leo Ascendant, Sun and Venus in Leo in the 1st house: despite a Virgo Sun, the person gives off a warm, solar, thoroughly Leonine presence.",
      },
      {
        titre: "A Water dominant",
        texte:
          "Moon in Cancer, Pisces Ascendant, Mars in Scorpio: no single sign dominates, but the Water element pervades everything — sensitivity, intuition, depth.",
      },
      {
        titre: "A cardinal dominant",
        texte:
          "Aries Sun, Capricorn Moon, Libra Ascendant: three cardinal signs. A temperament that constantly initiates, leads and decides.",
      },
    ],
    erreursLabel: "Pitfalls to avoid",
    erreurs: [
      "Confusing the dominant sign with the Sun sign.",
      "Counting only the planets and forgetting the Ascendant and its ruler.",
      "Giving a distant slow planet the same weight as the Sun.",
      "Looking for a single sign when an element or a mode dominates.",
      "Believing a dominant is 'better': each has its shadow.",
      "Reading the dominant sign without the house where it concentrates.",
    ],
  },
  faqDataTitle: "Frequently asked questions about the dominant sign",
  faq: [
    { q: "What is a dominant sign?", a: "It is the sign most emphasised across the whole chart — through the Sun, the Moon, the Ascendant, its ruler, a stellium or angularity. It is the general hue of the personality, beyond the Sun sign alone." },
    { q: "What's the difference from the Sun sign?", a: "The Sun sign counts only one planet: the Sun. The dominant sign synthesises the whole chart (Sun, Moon, Ascendant, ruler, stelliums, angles). The two can differ." },
    { q: "How do I find my dominant sign?", a: "You weight the clues: Sun, Moon and Ascendant first, then the chart ruler, the stelliums, angularity and dignities. The sign that gathers the most weight dominates." },
    { q: "Can you have two dominant signs?", a: "Yes. Many charts have a co-dominance, or it's an element or a mode that stands out rather than a single sign." },
    { q: "Why doesn't my horoscope sound like me?", a: "Because it is based on the Sun sign alone. If your dominant is another sign, you'll recognise yourself more in that one than in your usual horoscope." },
    { q: "Does the dominant sign change?", a: "No: the natal chart is fixed, so the underlying dominant remains. Transits can temporarily activate other signs, but they do not change the dominant of birth." },
  ],
  faqVisibleTitle: "Frequently asked questions about the dominant sign",
  faqVisible: [
    {
      q: "Dominant sign or Sun sign: which describes me best?",
      a: "Both matter. The Sun sign describes your deep identity and life drive. The dominant sign describes the overall tone those around you perceive. When the two differ, many people recognise themselves more in their dominant.",
    },
    {
      q: "How does the Ascendant influence the dominant sign?",
      a: "The Ascendant is one of the three pillars (with the Sun and the Moon) and it designates the chart ruler. Its sign, and that of the ruler, therefore count enormously in calculating the dominant.",
    },
    {
      q: "What is an element or mode dominant?",
      a: "When no single sign stands out, you look at whether an element (Fire, Earth, Air, Water) or a mode (cardinal, fixed, mutable) recurs most often. This broad dominant describes the temperament just as well as a single sign.",
    },
    {
      q: "Do you need software to find your dominant sign?",
      a: "A calculated chart is enough. Then a simple weighted count (Sun/Moon/Ascendant, ruler, stelliums, angles, dignities) lets you bring out the dominant sign — or element — by hand.",
    },
  ],
  related: {
    title: "See also",
    items: [
      { href: "/maisons-dominantes", label: "Dominant houses" },
      { href: "/astrologie-mondiale", label: "Mundane astrology" },
    ],
  },
  footer: { signes: "The signs", planetes: "Planets", maisons: "Houses", dominantes: "Dominant houses" },
};

/* ============================== ES ============================== */
const es: SignesDominantsContent = {
  meta: {
    title: "Los 12 signos dominantes: significado y método",
    description:
      "Signo dominante: por qué difiere del signo solar, cómo encontrarlo (Sol, Luna, Ascendente, regente) y qué aporta cada signo cuando domina.",
  },
  jsonld: {
    headline: "Los 12 signos dominantes: detección y significado",
    description:
      "El signo dominante, distinto del signo solar: definición, cómo detectarlo (Sol, Luna, Ascendente, regente de la carta, stellium, angularidad) y el perfil de los doce signos cuando dominan.",
    articleSection: "Astrología",
  },
  hero: {
    badge: "Curso de astrología — Lectura de la carta",
    title: "Los 12 signos dominantes",
    subtitle:
      "Tu signo solar es solo una pieza del puzle. El signo dominante es el color de conjunto de tu carta — el que resalta cuando se pesan el Sol, la Luna, el Ascendente y todo lo demás. Aprende a detectarlo y descubre qué aporta cada signo cuando domina.",
    highlights: [
      "Signo dominante ≠ signo solar",
      "Sol, Luna, Ascendente y regente",
      "Los 12 perfiles (don y sombra)",
      "Elemento y modo dominantes",
    ],
  },
  tocLabel: "Índice",
  sections: [
    { id: "definition", label: "Definición" },
    { id: "solaire", label: "≠ signo solar" },
    { id: "reperer", label: "Cómo detectarlo" },
    { id: "signes", label: "Los 12 perfiles" },
    { id: "elements", label: "Elemento y modo" },
    { id: "exemples", label: "Ejemplos" },
    { id: "faq", label: "FAQ" },
  ],
  defBox: {
    label: "Definición exprés",
    body: (
      <>
        El <strong>signo dominante</strong> es el signo más realzado en el conjunto de una carta — por el{" "}
        <strong>Sol</strong>, la <strong>Luna</strong>, el <strong>Ascendente</strong>, su{" "}
        <strong>regente</strong>, un <strong>stellium</strong> o la cercanía a un <strong>ángulo</strong>. Es
        el tinte general de la personalidad, que no se reduce solo al signo solar.
      </>
    ),
  },
  intro: (
    <>
      Cuando preguntan &laquo;&nbsp;¿de qué signo eres?&nbsp;&raquo;, se responde con el{" "}
      <strong>signo solar</strong> — la posición del Sol al nacer. Pero una carta tiene una decena de
      planetas, dos luminarias y un Ascendente: a menudo es <em>otro</em> signo el que resalta en el
      conjunto. Ese signo dominante da el tono real de la personalidad. Aquí tienes cómo encontrarlo y luego
      qué aporta cada uno de los doce cuando toma la delantera.
    </>
  ),
  definition: {
    title: "¿Qué es un signo dominante?",
    resumeLabel: "Lo que es",
    resume: [
      "El color de conjunto de la carta, surgido de una ponderación de todos los puntos fuertes.",
      "El signo más «cargado» por el Sol, la Luna, el Ascendente, su regente y los stelliums.",
      "Un hilo conductor que matiza, completa o a veces eclipsa al signo solar.",
      "Una referencia valiosa cuando el signo solar «no se parece» a la persona.",
    ],
    notLabel: "Lo que no es",
    ceQueCeNestPas: [
      "El signo solar: ese solo cuenta un planeta, el Sol.",
      "Necesariamente el signo con más planetas (el Ascendente y el regente pesan mucho).",
      "Una etiqueta única: a menudo se tiene un signo y un elemento dominantes.",
      "Un signo «mejor»: cada dominante tiene su don y su sombra.",
    ],
  },
  solaire: {
    title: "Signo dominante ≠ signo solar",
    intro: [
      "Es la confusión más frecuente. El signo solar responde a «¿dónde estaba el Sol?». El signo dominante responde a «¿cuál es la tonalidad de toda la carta?». Ambos a veces coinciden, pero a menudo no — y ese desfase explica por qué tu horóscopo solar no siempre «se te parece».",
    ],
    solaireLabel: "Signo solar",
    solaireText:
      "La posición del Sol solo, el día del nacimiento. Es lo que se lee en los horóscopos. Describe la identidad profunda y el impulso vital, pero un solo planeta del conjunto de la carta.",
    dominantLabel: "Signo dominante",
    dominantText:
      "La síntesis ponderada de toda la carta: Sol, Luna, Ascendente, regente, stelliums, ángulos. Describe el tinte general que percibe el entorno. Se puede ser Sol en Virgo pero dominante Leo (Ascendente Leo + stellium).",
  },
  reperer: {
    title: "Cómo detectar tu signo dominante",
    intro: [
      "Como con la casa dominante, se suman pistas. Cuando convergen hacia un mismo signo, este domina con claridad; si no, es más bien un elemento o un modo el que resalta (ver más abajo).",
    ],
    criteresLabel: "Los criterios, del más fuerte al más fino",
    criteres: [
      { label: "El trío Sol – Luna – Ascendente", sens: "Los tres pilares de la carta. Sus signos pesan lo máximo: empieza siempre por ellos." },
      { label: "El regente de la carta", sens: "El planeta que gobierna el Ascendente: su signo (y su fuerza) refuerza notablemente la dominante." },
      { label: "El stellium", sens: "Tres planetas o más en un mismo signo concentran la energía y tiran de la dominante hacia ese signo." },
      { label: "La angularidad", sens: "Un planeta cercano a un ángulo (Ascendente, Fondo del Cielo, Descendente, Medio Cielo) pone su signo por delante." },
      { label: "Las dignidades", sens: "Un planeta en su domicilio o su exaltación es más fuerte: refuerza el signo que ocupa." },
    ],
    astuceLabel: "Truco",
    astuce:
      "Asigna puntos por signo (Sol/Luna/Ascendente = 3, regente o ángulo = 2, otro planeta = 1, +1 si hay dignidad) y suma. El signo a la cabeza es tu dominante; mira también qué elemento y qué modo se repiten más.",
  },
  signes: {
    title: "Los 12 signos dominantes, uno a uno",
    intro: [
      "Para cada signo: qué aporta cuando domina la carta y su reverso cuando ocupa demasiado espacio. Matízalo siempre por la casa donde se concentra y por los planetas implicados.",
    ],
    elementLabels: ["Fuego", "Tierra", "Aire", "Agua"],
    apporteLabel: "Lo que aporta",
    ombreLabel: "La sombra",
    items: [
      { signe: "Aries", apporte: "Impulso, valor, franqueza y espíritu de iniciativa. Una persona directa, que arranca rápido y se atreve a abrir camino.", ombre: "Impulsividad, impaciencia, agresividad, dificultad para terminar." },
      { signe: "Tauro", apporte: "Constancia, sentido concreto, sensualidad y fiabilidad. Se construye algo sólido y se aguanta en el tiempo.", ombre: "Terquedad, posesividad, inercia, resistencia al cambio." },
      { signe: "Géminis", apporte: "Viveza mental, curiosidad, soltura verbal y adaptabilidad. El contacto y el aprendizaje son fáciles.", ombre: "Dispersión, superficialidad, inconstancia, una mente que no se asienta." },
      { signe: "Cáncer", apporte: "Sensibilidad, empatía, memoria y sentido de la protección. Una gran riqueza emocional e intuitiva.", ombre: "Susceptibilidad, repliegue, dependencia afectiva, humores cambiantes." },
      { signe: "Leo", apporte: "Irradiación, generosidad, confianza y creatividad. Una presencia cálida y un verdadero sentido del corazón.", ombre: "Orgullo, necesidad de admiración, autoritarismo, susceptibilidad del ego." },
      { signe: "Virgo", apporte: "Precisión, método, sentido del servicio y discernimiento. Una eficacia tranquila y útil.", ombre: "Crítica, ansiedad, perfeccionismo, tendencia a rebajarse." },
      { signe: "Libra", apporte: "Diplomacia, sentido estético, equidad y encanto. El arte de relacionar, apaciguar y armonizar.", ombre: "Indecisión, dependencia de la mirada ajena, huida del conflicto." },
      { signe: "Escorpio", apporte: "Intensidad, profundidad psicológica, lucidez y resiliencia. Un magnetismo y una fuerza de regeneración raros.", ombre: "Celos, control, rencor, atracción por lo extremo." },
      { signe: "Sagitario", apporte: "Optimismo, fe, gusto por la aventura y las grandes visiones. Se ve lejos y se arrastra a los demás.", ombre: "Exceso, imprudencia, proselitismo, huida hacia adelante." },
      { signe: "Capricornio", apporte: "Rigor, resistencia, sentido de la responsabilidad y madurez. Se construye con paciencia y durabilidad.", ombre: "Rigidez, pesimismo, frialdad, ambición en detrimento de uno mismo." },
      { signe: "Acuario", apporte: "Originalidad, independencia, visión social y espíritu de fraternidad. Se inventa y se conecta con lo colectivo.", ombre: "Desapego, rebeldía gratuita, frialdad emocional, distancia." },
      { signe: "Piscis", apporte: "Compasión, intuición, creatividad y sensibilidad espiritual. Una gran porosidad al mundo y a los demás.", ombre: "Confusión, huida, sacrificio de sí, falta de límites." },
    ],
  },
  elements: {
    title: "Cuando domina un elemento o un modo",
    intro: [
      "A menudo ningún signo se destaca realmente, pero un elemento (Fuego, Tierra, Aire, Agua) o un modo (cardinal, fijo, mutable) se repite sin cesar. Esta «dominante ampliada» es tan reveladora como un signo único.",
    ],
    items: [
      { nom: "Fuego — Aries, Leo, Sagitario", sens: "Impulso, entusiasmo, acción e inspiración. Un temperamento cálido, espontáneo, orientado al futuro." },
      { nom: "Tierra — Tauro, Virgo, Capricornio", sens: "Concreto, paciencia, sentido práctico y fiabilidad. Se actúa en lo real y se construye lo duradero." },
      { nom: "Aire — Géminis, Libra, Acuario", sens: "Ideas, intercambios, perspectiva y relaciones. Un temperamento mental, sociable y volcado en el sentido." },
      { nom: "Agua — Cáncer, Escorpio, Piscis", sens: "Emoción, intuición, profundidad y empatía. Se siente antes de pensar, se captan los ambientes." },
    ],
    modesLabel: "Los tres modos",
    modes: [
      { nom: "Cardinal — Aries, Cáncer, Libra, Capricornio", sens: "Iniciar, lanzar, decidir. Energía de impulso y de comienzo." },
      { nom: "Fijo — Tauro, Leo, Escorpio, Acuario", sens: "Estabilizar, sostener, profundizar. Energía de perseverancia y de voluntad." },
      { nom: "Mutable — Géminis, Virgo, Sagitario, Piscis", sens: "Adaptar, transformar, relacionar. Energía de flexibilidad y de ajuste." },
    ],
  },
  exemples: {
    title: "Ejemplos de lectura",
    items: [
      {
        titre: "Sol en Virgo, dominante Leo",
        texte:
          "Ascendente Leo, Sol y Venus en Leo en la casa I: pese a un Sol en Virgo, la persona desprende una presencia cálida y solar, plenamente leonina.",
      },
      {
        titre: "Dominante de Agua",
        texte:
          "Luna en Cáncer, Ascendente Piscis, Marte en Escorpio: ningún signo único domina, pero el elemento Agua lo impregna todo — sensibilidad, intuición, profundidad.",
      },
      {
        titre: "Dominante cardinal",
        texte:
          "Sol en Aries, Luna en Capricornio, Ascendente Libra: tres signos cardinales. Un temperamento que inicia sin cesar, dirige y decide.",
      },
    ],
    erreursLabel: "Errores a evitar",
    erreurs: [
      "Confundir signo dominante y signo solar.",
      "Contar solo los planetas y olvidar el Ascendente y su regente.",
      "Dar el mismo peso a un lento lejano que al Sol.",
      "Buscar un signo único cuando domina un elemento o un modo.",
      "Creer que una dominante es «mejor»: cada una tiene su sombra.",
      "Leer el signo dominante sin la casa donde se concentra.",
    ],
  },
  faqDataTitle: "Preguntas frecuentes sobre el signo dominante",
  faq: [
    { q: "¿Qué es un signo dominante?", a: "Es el signo más realzado en el conjunto de la carta — por el Sol, la Luna, el Ascendente, su regente, un stellium o la angularidad. Es el tinte general de la personalidad, más allá del signo solar solo." },
    { q: "¿Qué diferencia hay con el signo solar?", a: "El signo solar cuenta solo un planeta: el Sol. El signo dominante sintetiza toda la carta (Sol, Luna, Ascendente, regente, stelliums, ángulos). Ambos pueden diferir." },
    { q: "¿Cómo encuentro mi signo dominante?", a: "Se ponderan las pistas: Sol, Luna y Ascendente a la cabeza, luego el regente de la carta, los stelliums, la angularidad y las dignidades. El signo que reúne más peso domina." },
    { q: "¿Se pueden tener dos signos dominantes?", a: "Sí. Muchas cartas tienen una codominancia, o bien es un elemento o un modo el que resalta más que un signo único." },
    { q: "¿Por qué mi horóscopo no se me parece?", a: "Porque se basa solo en el signo solar. Si tu dominante es otro signo, te reconocerás más en ese que en tu horóscopo habitual." },
    { q: "¿Cambia el signo dominante?", a: "No: la carta natal es fija, así que la dominante de fondo permanece. Los tránsitos pueden activar temporalmente otros signos, pero no modifican la dominante de nacimiento." },
  ],
  faqVisibleTitle: "Preguntas frecuentes sobre el signo dominante",
  faqVisible: [
    {
      q: "Signo dominante o signo solar: ¿cuál me describe mejor?",
      a: "Ambos cuentan. El signo solar describe tu identidad profunda y tu impulso vital. El signo dominante describe la tonalidad de conjunto que percibe tu entorno. Cuando ambos difieren, mucha gente se reconoce más en su dominante.",
    },
    {
      q: "¿Cómo influye el Ascendente en el signo dominante?",
      a: "El Ascendente es uno de los tres pilares (con el Sol y la Luna) y designa al regente de la carta. Su signo, y el del regente, cuentan, por tanto, muchísimo en el cálculo de la dominante.",
    },
    {
      q: "¿Qué es una dominante de elemento o de modo?",
      a: "Cuando ningún signo se destaca, se mira si un elemento (Fuego, Tierra, Aire, Agua) o un modo (cardinal, fijo, mutable) se repite con más frecuencia. Esta dominante ampliada describe el temperamento igual de bien que un signo único.",
    },
    {
      q: "¿Hace falta un programa para encontrar el signo dominante?",
      a: "Basta con una carta calculada. Luego, un simple conteo ponderado (Sol/Luna/Ascendente, regente, stelliums, ángulos, dignidades) permite extraer el signo — o el elemento — dominante a mano.",
    },
  ],
  related: {
    title: "Ver también",
    items: [
      { href: "/maisons-dominantes", label: "Casas dominantes" },
      { href: "/astrologie-mondiale", label: "Astrología mundial" },
    ],
  },
  footer: { signes: "Los signos", planetes: "Planetas", maisons: "Casas", dominantes: "Casas dominantes" },
};

export const signesDominantsContent: Record<SeoLocale, SignesDominantsContent> = { fr, en, es };
