import { Link } from "@/i18n/navigation";
import type { ReactNode } from "react";
import type { SeoLocale } from "@/lib/seo";

/* ====================================================================
   Significateurs — contenu localisé (fr / en / es)
   Les clés logiques (id de section, slug des types) sont identiques
   dans chaque langue ; seuls les textes sont traduits.
   ==================================================================== */

export type SignificateursContent = {
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
  types: {
    title: string;
    intro: string[];
    items: { nom: string; slug: string; sens: string; cle: string }[];
  };
  methode: {
    title: string;
    intro: string[];
    etapesLabel: string;
    etapes: string[];
    regleCle: string;
  };
  querentQuesite: { title: string; intro: string[]; items: { label: string; sens: string }[] };
  naturels: { title: string; intro: string[]; table: { domaine: string; astre: string }[] };
  force: {
    title: string;
    intro: string[];
    essentielleLabel: string;
    essentielle: string[];
    accidentelleLabel: string;
    accidentelle: string[];
    lien: string;
    lienCta: string;
  };
  accidentels: { title: string; intro: string[]; items: { label: string; sens: string }[] };
  maisonsDerivees: {
    title: string;
    intro: string[];
    exemplesLabel: string;
    exemples: string[];
    lien: string;
    lienCta: string;
  };
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
  footer: { maitrises: string; horaire: string; maisonsDerivees: string; aspects: string };
};

/* ============================== FR ============================== */
const fr: SignificateursContent = {
  meta: {
    title: "Les significateurs en astrologie",
    description:
      "Les significateurs en astrologie : significateur principal, co-significateur, significateurs naturels, almuten, force et réceptions. Cours complet !",
  },
  jsonld: {
    headline: "Les significateurs : qui représente quoi dans un thème",
    description:
      "Les significateurs en astrologie : significateur principal et co-significateur, significateurs naturels, almuten, méthode d'attribution, force et réceptions.",
    articleSection: "Astrologie",
  },
  hero: {
    badge: "Cours d’astrologie — Méthode",
    title: "Les significateurs : qui représente quoi",
    subtitle:
      "Avant toute interprétation, il faut savoir quelle planète représente quelle personne, quel objet, quelle question. C’est le geste fondateur de l’astrologie traditionnelle.",
    highlights: [
      "Significateur principal & co-significateur",
      "Significateurs naturels par domaine",
      "Méthode d’attribution pas à pas",
      "Force, réceptions & almuten",
    ],
  },
  tocLabel: "Sommaire",
  sections: [
    { id: "definition", label: "Définition" },
    { id: "types", label: "Types" },
    { id: "methode", label: "Méthode" },
    { id: "querent", label: "Querent & quésité" },
    { id: "naturels", label: "Significateurs naturels" },
    { id: "force", label: "Force" },
    { id: "accidentels", label: "Témoins accidentels" },
    { id: "maisons-derivees", label: "Maisons dérivées" },
    { id: "exemples", label: "Exemples" },
    { id: "faq", label: "FAQ" },
  ],
  defBox: {
    label: "Définition",
    body: (
      <>
        Un <strong>significateur</strong> est la <Link href="/#planetes">planète</Link> qui représente un acteur ou une
        chose dans un thème : on l’identifie à partir de la <Link href="/#maisons">maison</Link> qui gouverne le sujet,
        avant toute interprétation.
      </>
    ),
  },
  intro: (
    <>
      Avant d’interpréter quoi que ce soit, l’astrologue traditionnel se pose une question simple : <strong>qui représente
      qui ?</strong> Le consultant, le partenaire, l’argent, le voyage… chacun a son <strong>significateur</strong>. Ce
      cours vous apprend à les attribuer correctement, à distinguer significateur principal, co-significateur et
      significateur naturel, puis à juger leur force.
    </>
  ),
  definition: {
    title: "Qu’est-ce qu’un significateur ?",
    resumeLabel: "Résumé",
    resume: [
      "Un significateur est la planète (ou le point) qui « représente » un acteur ou une chose dans un thème : le consultant, un partenaire, l’argent, un voyage…",
      "Identifier correctement les significateurs est l’étape qui précède toute interprétation : sans elle, on lit au hasard.",
      "Le principe est universel (natal, horaire, électionnel), mais c’est en astrologie horaire qu’il est le plus rigoureux.",
    ],
    notLabel: "Ce que ce n’est pas",
    ceQueCeNestPas: [
      "Une simple « planète importante » du thème.",
      "Un symbole fixe : un même astre peut signifier des choses différentes selon la question.",
      "Une étiquette définitive : un significateur se choisit en fonction du sujet précis.",
    ],
  },
  types: {
    title: "Les quatre types de significateurs",
    intro: [
      "Plusieurs planètes peuvent signifier un même sujet, à des titres différents. On distingue quatre grandes catégories.",
    ],
    items: [
      { nom: "Significateur principal", slug: "principal", sens: "Le maître (régent) de la maison qui gouverne le sujet. Pour le consultant : maître de la maison I. Pour l’argent : maître de la maison II, etc.", cle: "Le maître de la maison du sujet." },
      { nom: "Co-significateur — la Lune", slug: "lune", sens: "La Lune accompagne presque toujours le consultant et décrit le déroulement de l’affaire. C’est le second significateur du querent.", cle: "La Lune, témoin du parcours." },
      { nom: "Significateur naturel", slug: "naturel", sens: "Une planète symbolise naturellement un domaine, indépendamment des maisons : Vénus pour l’amour, Mercure pour les écrits, Mars pour les conflits.", cle: "Le symbolisme propre de la planète." },
      { nom: "Almuten", slug: "almuten", sens: "La planète qui détient le plus de dignités essentielles sur un degré donné (Ascendant, Lune…). Elle peut renforcer ou départager les significateurs.", cle: "Le « maître pondéré » d’un point." },
    ],
  },
  methode: {
    title: "Méthode : attribuer un significateur",
    intro: [
      "Attribuer un significateur suit toujours le même enchaînement, du sujet vers la planète.",
    ],
    etapesLabel: "Étapes",
    etapes: [
      "1) Formuler précisément le sujet : qui ou quoi ai-je besoin de représenter ?",
      "2) Trouver la maison qui gouverne ce sujet (ex. partenaire → VII, carrière → X).",
      "3) Prendre le maître de cette maison : c’est le significateur principal.",
      "4) Ajouter la Lune comme co-significateur (surtout pour le consultant).",
      "5) Repérer le significateur naturel du domaine pour confirmer ou nuancer.",
      "6) Évaluer ensuite la force de ces significateurs (dignités, maisons, aspects).",
    ],
    regleCle:
      "Une planète peut cumuler les rôles : si Vénus est à la fois significateur naturel de l’amour ET maître de la maison VII, le témoignage est doublement fort.",
  },
  querentQuesite: {
    title: "Querent et quésité : les deux pôles",
    intro: [
      "En astrologie horaire, on oppose toujours deux pôles : celui qui pose la question et ce qu’il demande.",
    ],
    items: [
      { label: "Le querent (celui qui demande)", sens: "Maison I et son maître, plus la Lune. C’est « moi » dans la question." },
      { label: "Le quésité (ce qui est demandé)", sens: "La maison du sujet et son maître. C’est « l’autre » ou « la chose »." },
      { label: "La relation entre eux", sens: "Un aspect applicatif entre les deux significateurs (ou via la Lune) montre comment l’affaire se noue." },
    ],
  },
  naturels: {
    title: "Table des significateurs naturels",
    intro: [
      "Voici les significateurs naturels les plus utilisés. Ils servent d’appui au maître de maison.",
    ],
    table: [
      { domaine: "Amour, affection, plaisir", astre: "Vénus" },
      { domaine: "Désir, conflit, chirurgie, action", astre: "Mars" },
      { domaine: "Écrits, contrats, messages, commerce", astre: "Mercure" },
      { domaine: "Argent, chance, expansion, justice", astre: "Jupiter" },
      { domaine: "Temps, limites, deuils, biens immobiliers, ancien", astre: "Saturne" },
      { domaine: "Autorité, père, vitalité, honneurs", astre: "Soleil" },
      { domaine: "Mère, foule, fluides, voyages courts, quotidien", astre: "Lune" },
      { domaine: "Ruptures, imprévus, technologie, liberté", astre: "Uranus" },
      { domaine: "Illusion, mer, secrets, spiritualité, flou", astre: "Neptune" },
      { domaine: "Pouvoir, transformation, dettes, profondeurs", astre: "Pluton" },
    ],
  },
  force: {
    title: "La force d’un significateur",
    intro: [
      "Une fois les significateurs identifiés, on juge leur capacité à agir. Un bon significateur faible promet sans pouvoir tenir.",
    ],
    essentielleLabel: "Dignité essentielle",
    essentielle: [
      "Dignités essentielles (domicile, exaltation, triplicité…) : la qualité propre de la planète.",
      "Détriment ou chute : significateur affaibli, mal disposé.",
      "Pérégrin : sans ressources, il « erre ».",
    ],
    accidentelleLabel: "Dignité accidentelle",
    accidentelle: [
      "Maison occupée : angulaire (fort, agissant) / succédente / cadente (sans prise).",
      "Vitesse et direction : direct et rapide (efficace) vs rétrograde ou lent (recul, hésitation).",
      "Combustion (trop près du Soleil) : significateur accablé, aveuglé.",
      "Aspects reçus des bénéfiques (Jupiter, Vénus) ou des maléfiques (Mars, Saturne).",
    ],
    lien: "Pour le détail des dignités, voir le cours dédié aux maîtrises planétaires.",
    lienCta: "Voir les maîtrises planétaires →",
  },
  accidentels: {
    title: "Les témoins accidentels d’un sujet",
    intro: [
      "Au-delà du maître de maison, d’autres planètes apportent leur témoignage sur un sujet.",
    ],
    items: [
      { label: "Planète occupant la maison", sens: "Une planète posée dans la maison du sujet la « colore » fortement, parfois autant que son maître." },
      { label: "Planète aspectant le significateur", sens: "Les aspects reçus décrivent les influences extérieures sur l’acteur représenté." },
      { label: "Maître naturel présent", sens: "Si le significateur naturel du domaine est aussi impliqué, le témoignage se renforce." },
    ],
  },
  maisonsDerivees: {
    title: "Significateurs des tiers : tourner les maisons",
    intro: [
      "Pour les tiers (la sœur de mon ami, l’argent de mon associé…), on « tourne » le thème : la maison du tiers devient la nouvelle maison I, et l’on prend les significateurs à partir de là.",
    ],
    exemplesLabel: "Exemples",
    exemples: [
      "L’argent du conjoint : maison II à partir de la VII = maison VIII radicale.",
      "Le travail de mon enfant : maison VI à partir de la V = maison X radicale.",
      "On prend ensuite le maître de la maison dérivée comme significateur du sujet.",
    ],
    lien: "Voir le cours sur les maisons dérivées pour la méthode complète.",
    lienCta: "Voir les maisons dérivées →",
  },
  exemples: {
    title: "Exemples d’attribution des significateurs",
    items: [
      {
        titre: "« M’aime-t-il ? »",
        texte: "Consultant = maître de I + Lune. L’aimé = maître de VII. Significateur naturel : Vénus. Si Vénus est aussi maîtresse de la VII, le témoignage amoureux est doublé ; on lit alors l’aspect entre les deux significateurs.",
      },
      {
        titre: "« Vais-je récupérer cet argent ? »",
        texte: "Mon argent = maître de la maison II + Jupiter (significateur naturel). On regarde si le maître de la II revient vers le maître de I (l’argent qui revient) ou s’en éloigne (perte).",
      },
      {
        titre: "« Aurai-je le poste ? »",
        texte: "Moi = maître de I. L’emploi/employeur = maître de la X + Soleil. Un significateur de carrière dignifié et angulaire, en aspect applicatif avec le maître de I, plaide pour le oui.",
      },
    ],
    erreursLabel: "Erreurs fréquentes à éviter",
    erreurs: [
      "Choisir un significateur avant d’avoir défini précisément le sujet.",
      "Oublier la Lune comme co-significateur du consultant.",
      "Confondre significateur naturel et maître de maison (ils se complètent).",
      "Juger une promesse sans vérifier la force du significateur.",
      "Pour un tiers, lire le thème radical au lieu de tourner les maisons.",
      "Multiplier les significateurs jusqu’à pouvoir « prouver » n’importe quoi.",
    ],
  },
  faqDataTitle: "Questions fréquentes sur les significateurs",
  faq: [
    { q: "Qu’est-ce qu’un significateur en astrologie ?", a: "C’est la planète ou le point qui représente un acteur ou une chose dans un thème : le consultant, un partenaire, l’argent, un voyage. On l’identifie avant toute interprétation." },
    { q: "Comment trouver le significateur d’un sujet ?", a: "On repère la maison qui gouverne le sujet, puis on prend le maître (régent) de cette maison. On y ajoute la Lune et le significateur naturel du domaine." },
    { q: "Quelle différence entre significateur principal et naturel ?", a: "Le principal est le maître de la maison du sujet, propre à chaque thème. Le naturel est le symbolisme fixe d’une planète (Vénus = amour) valable partout." },
    { q: "Pourquoi la Lune est-elle un co-significateur ?", a: "Parce qu’elle accompagne le consultant et décrit le déroulement de l’affaire. En horaire, elle est presque toujours le second significateur du querent." },
    { q: "Qu’est-ce que l’almuten ?", a: "La planète qui détient le plus de dignités essentielles sur un degré donné (souvent l’Ascendant). Elle peut renforcer ou départager les significateurs principaux." },
    { q: "Une planète peut-elle être plusieurs significateurs à la fois ?", a: "Oui. Si une planète cumule plusieurs rôles (maître de maison + significateur naturel), son témoignage en est d’autant renforcé." },
  ],
  faqVisibleTitle: "Questions fréquentes sur les significateurs",
  faqVisible: [
    {
      q: "Le maître de maison est-il toujours le significateur principal ?",
      a: "Oui, c’est la règle de base : on prend le maître (régent) de la maison qui gouverne le sujet. On le complète ensuite par la Lune et par le significateur naturel du domaine pour affiner la lecture.",
    },
    {
      q: "Comment représenter une autre personne que le consultant ?",
      a: "On utilise la maison qui la décrit (VII pour le partenaire ou l’adversaire, X pour l’employeur, III pour la fratrie…) et l’on prend le maître de cette maison comme significateur de cette personne.",
    },
    {
      q: "Faut-il maîtriser les dignités pour utiliser les significateurs ?",
      a: "Identifier les significateurs suffit pour savoir « qui est qui ». Mais pour juger s’ils peuvent agir, il faut évaluer leur force via les dignités essentielles et accidentelles : c’est l’étape suivante de l’analyse.",
    },
    {
      q: "Les significateurs servent-ils seulement en astrologie horaire ?",
      a: "Non. Le principe vaut aussi en thème natal et en astrologie électionnelle. Mais c’est en horaire que l’attribution des significateurs est la plus codifiée et la plus décisive pour le jugement.",
    },
  ],
  footer: { maitrises: "Maîtrises", horaire: "Astrologie horaire", maisonsDerivees: "Maisons dérivées", aspects: "Aspects" },
};

/* ============================== EN ============================== */
const en: SignificateursContent = {
  meta: {
    title: "Significators: who represents what in a chart",
    description:
      "Significators in astrology: principal significator, co-significator, natural significators, almuten, strength and receptions. A full course!",
  },
  jsonld: {
    headline: "Significators: who represents what in a chart",
    description:
      "Significators in astrology: principal significator and co-significator, natural significators, almuten, the method of attribution, strength and receptions.",
    articleSection: "Astrology",
  },
  hero: {
    badge: "Astrology course — Method",
    title: "Significators: who represents what",
    subtitle:
      "Before any interpretation, you must know which planet represents which person, which object, which question. It is the founding gesture of traditional astrology.",
    highlights: [
      "Principal significator & co-significator",
      "Natural significators by domain",
      "A step-by-step method of attribution",
      "Strength, receptions & almuten",
    ],
  },
  tocLabel: "Contents",
  sections: [
    { id: "definition", label: "Definition" },
    { id: "types", label: "Types" },
    { id: "methode", label: "Method" },
    { id: "querent", label: "Querent & quesited" },
    { id: "naturels", label: "Natural significators" },
    { id: "force", label: "Strength" },
    { id: "accidentels", label: "Accidental testimonies" },
    { id: "maisons-derivees", label: "Derived houses" },
    { id: "exemples", label: "Examples" },
    { id: "faq", label: "FAQ" },
  ],
  defBox: {
    label: "Definition",
    body: (
      <>
        A <strong>significator</strong> is the <Link href="/#planetes">planet</Link> that represents an actor or a thing
        in a chart: it is identified from the <Link href="/#maisons">house</Link> that governs the subject, before any
        interpretation.
      </>
    ),
  },
  intro: (
    <>
      Before interpreting anything, the traditional astrologer asks a simple question: <strong>who represents whom?</strong>{" "}
      The querent, the partner, money, a journey… each has its <strong>significator</strong>. This course teaches you to
      assign them correctly, to distinguish principal significator, co-significator and natural significator, then to
      judge their strength.
    </>
  ),
  definition: {
    title: "What is a significator?",
    resumeLabel: "Summary",
    resume: [
      "A significator is the planet (or point) that “represents” an actor or a thing in a chart: the querent, a partner, money, a journey…",
      "Correctly identifying the significators is the step that precedes any interpretation: without it, you read at random.",
      "The principle is universal (natal, horary, electional), but it is in horary astrology that it is the most rigorous.",
    ],
    notLabel: "What it is not",
    ceQueCeNestPas: [
      "Simply an “important planet” in the chart.",
      "A fixed symbol: the same star can mean different things depending on the question.",
      "A definitive label: a significator is chosen according to the precise subject.",
    ],
  },
  types: {
    title: "The four types of significator",
    intro: [
      "Several planets can signify the same subject, in different capacities. We distinguish four broad categories.",
    ],
    items: [
      { nom: "Principal significator", slug: "principal", sens: "The ruler of the house that governs the subject. For the querent: ruler of the first house. For money: ruler of the second house, etc.", cle: "The ruler of the subject’s house." },
      { nom: "Co-significator — the Moon", slug: "lune", sens: "The Moon almost always accompanies the querent and describes the unfolding of the matter. It is the second significator of the querent.", cle: "The Moon, witness of the course." },
      { nom: "Natural significator", slug: "naturel", sens: "A planet naturally symbolises a domain, independently of the houses: Venus for love, Mercury for writings, Mars for conflicts.", cle: "The planet’s own symbolism." },
      { nom: "Almuten", slug: "almuten", sens: "The planet that holds the most essential dignities over a given degree (Ascendant, Moon…). It can reinforce or arbitrate between significators.", cle: "The “weighted ruler” of a point." },
    ],
  },
  methode: {
    title: "Method: assigning a significator",
    intro: [
      "Assigning a significator always follows the same sequence, from the subject to the planet.",
    ],
    etapesLabel: "Steps",
    etapes: [
      "1) State the subject precisely: who or what do I need to represent?",
      "2) Find the house that governs this subject (e.g. partner → VII, career → X).",
      "3) Take the ruler of that house: this is the principal significator.",
      "4) Add the Moon as co-significator (especially for the querent).",
      "5) Identify the natural significator of the domain to confirm or nuance.",
      "6) Then assess the strength of these significators (dignities, houses, aspects).",
    ],
    regleCle:
      "A planet can hold several roles at once: if Venus is both the natural significator of love AND ruler of the seventh house, the testimony is doubly strong.",
  },
  querentQuesite: {
    title: "Querent and quesited: the two poles",
    intro: [
      "In horary astrology, two poles are always set against each other: the one who asks the question and what they are asking about.",
    ],
    items: [
      { label: "The querent (the one who asks)", sens: "The first house and its ruler, plus the Moon. It is “me” in the question." },
      { label: "The quesited (what is asked)", sens: "The house of the subject and its ruler. It is “the other” or “the thing”." },
      { label: "The relationship between them", sens: "An applying aspect between the two significators (or via the Moon) shows how the matter comes together." },
    ],
  },
  naturels: {
    title: "Table of natural significators",
    intro: [
      "Here are the most commonly used natural significators. They support the ruler of the house.",
    ],
    table: [
      { domaine: "Love, affection, pleasure", astre: "Venus" },
      { domaine: "Desire, conflict, surgery, action", astre: "Mars" },
      { domaine: "Writings, contracts, messages, commerce", astre: "Mercury" },
      { domaine: "Money, luck, expansion, justice", astre: "Jupiter" },
      { domaine: "Time, limits, bereavements, real estate, the old", astre: "Saturn" },
      { domaine: "Authority, father, vitality, honours", astre: "Sun" },
      { domaine: "Mother, crowds, fluids, short journeys, daily life", astre: "Moon" },
      { domaine: "Ruptures, the unexpected, technology, freedom", astre: "Uranus" },
      { domaine: "Illusion, the sea, secrets, spirituality, the blurred", astre: "Neptune" },
      { domaine: "Power, transformation, debts, the depths", astre: "Pluto" },
    ],
  },
  force: {
    title: "The strength of a significator",
    intro: [
      "Once the significators are identified, you judge their capacity to act. A good but weak significator promises without being able to deliver.",
    ],
    essentielleLabel: "Essential dignity",
    essentielle: [
      "Essential dignities (domicile, exaltation, triplicity…): the planet’s own quality.",
      "Detriment or fall: a weakened, ill-disposed significator.",
      "Peregrine: without resources, it “wanders”.",
    ],
    accidentelleLabel: "Accidental dignity",
    accidentelle: [
      "House occupied: angular (strong, acting) / succedent / cadent (without grip).",
      "Speed and direction: direct and fast (effective) vs retrograde or slow (withdrawal, hesitation).",
      "Combustion (too close to the Sun): an overwhelmed, blinded significator.",
      "Aspects received from the benefics (Jupiter, Venus) or the malefics (Mars, Saturn).",
    ],
    lien: "For the detail of the dignities, see the course dedicated to planetary rulerships.",
    lienCta: "See the planetary rulerships →",
  },
  accidentels: {
    title: "The accidental testimonies of a subject",
    intro: [
      "Beyond the ruler of the house, other planets bring their testimony on a subject.",
    ],
    items: [
      { label: "Planet occupying the house", sens: "A planet placed in the subject’s house strongly “colours” it, sometimes as much as its ruler." },
      { label: "Planet aspecting the significator", sens: "The aspects received describe the external influences on the actor represented." },
      { label: "Natural ruler present", sens: "If the natural significator of the domain is also involved, the testimony is reinforced." },
    ],
  },
  maisonsDerivees: {
    title: "Significators of third parties: turning the houses",
    intro: [
      "For third parties (my friend’s sister, my partner’s money…), you “turn” the chart: the third party’s house becomes the new first house, and you take the significators from there.",
    ],
    exemplesLabel: "Examples",
    exemples: [
      "The spouse’s money: the second house from the seventh = the radical eighth house.",
      "My child’s work: the sixth house from the fifth = the radical tenth house.",
      "You then take the ruler of the derived house as the significator of the subject.",
    ],
    lien: "See the course on derived houses for the complete method.",
    lienCta: "See the derived houses →",
  },
  exemples: {
    title: "Examples of assigning significators",
    items: [
      {
        titre: "“Does he love me?”",
        texte: "Querent = ruler of I + Moon. The beloved = ruler of VII. Natural significator: Venus. If Venus is also ruler of the VII, the testimony of love is doubled; you then read the aspect between the two significators.",
      },
      {
        titre: "“Will I recover this money?”",
        texte: "My money = ruler of the second house + Jupiter (natural significator). You look at whether the ruler of the II is returning toward the ruler of I (money coming back) or moving away from it (loss).",
      },
      {
        titre: "“Will I get the job?”",
        texte: "Me = ruler of I. The job/employer = ruler of the X + Sun. A career significator that is dignified and angular, in an applying aspect with the ruler of I, argues for a yes.",
      },
    ],
    erreursLabel: "Common mistakes to avoid",
    erreurs: [
      "Choosing a significator before having precisely defined the subject.",
      "Forgetting the Moon as co-significator of the querent.",
      "Confusing natural significator and ruler of the house (they complement each other).",
      "Judging a promise without checking the strength of the significator.",
      "For a third party, reading the radical chart instead of turning the houses.",
      "Multiplying significators until you can “prove” anything at all.",
    ],
  },
  faqDataTitle: "Frequently asked questions about significators",
  faq: [
    { q: "What is a significator in astrology?", a: "It is the planet or point that represents an actor or a thing in a chart: the querent, a partner, money, a journey. It is identified before any interpretation." },
    { q: "How do you find the significator of a subject?", a: "You identify the house that governs the subject, then take the ruler of that house. You add the Moon and the natural significator of the domain." },
    { q: "What is the difference between a principal and a natural significator?", a: "The principal is the ruler of the subject’s house, specific to each chart. The natural is the fixed symbolism of a planet (Venus = love) valid everywhere." },
    { q: "Why is the Moon a co-significator?", a: "Because it accompanies the querent and describes the unfolding of the matter. In horary, it is almost always the second significator of the querent." },
    { q: "What is the almuten?", a: "The planet that holds the most essential dignities over a given degree (often the Ascendant). It can reinforce or arbitrate between the principal significators." },
    { q: "Can a planet be several significators at once?", a: "Yes. If a planet holds several roles (ruler of a house + natural significator), its testimony is all the more reinforced." },
  ],
  faqVisibleTitle: "Frequently asked questions about significators",
  faqVisible: [
    {
      q: "Is the ruler of the house always the principal significator?",
      a: "Yes, this is the basic rule: you take the ruler of the house that governs the subject. You then complete it with the Moon and the natural significator of the domain to refine the reading.",
    },
    {
      q: "How do you represent someone other than the querent?",
      a: "You use the house that describes them (VII for the partner or adversary, X for the employer, III for siblings…) and take the ruler of that house as the significator of that person.",
    },
    {
      q: "Do you need to master the dignities to use significators?",
      a: "Identifying the significators is enough to know “who is who”. But to judge whether they can act, you must assess their strength through the essential and accidental dignities: that is the next step of the analysis.",
    },
    {
      q: "Are significators used only in horary astrology?",
      a: "No. The principle also applies in the natal chart and in electional astrology. But it is in horary that the attribution of significators is the most codified and the most decisive for the judgement.",
    },
  ],
  footer: { maitrises: "Rulerships", horaire: "Horary astrology", maisonsDerivees: "Derived houses", aspects: "Aspects" },
};

/* ============================== ES ============================== */
const es: SignificateursContent = {
  meta: {
    title: "Los significadores en astrología",
    description:
      "Los significadores en astrología: significador principal, co-significador, significadores naturales, almuten, fuerza y recepciones. Curso completo.",
  },
  jsonld: {
    headline: "Los significadores: quién representa qué en una carta",
    description:
      "Los significadores en astrología: significador principal y co-significador, significadores naturales, almuten, método de atribución, fuerza y recepciones.",
    articleSection: "Astrología",
  },
  hero: {
    badge: "Curso de astrología — Método",
    title: "Los significadores: quién representa qué",
    subtitle:
      "Antes de toda interpretación, hay que saber qué planeta representa a qué persona, a qué objeto, a qué pregunta. Es el gesto fundador de la astrología tradicional.",
    highlights: [
      "Significador principal y co-significador",
      "Significadores naturales por dominio",
      "Método de atribución paso a paso",
      "Fuerza, recepciones y almuten",
    ],
  },
  tocLabel: "Índice",
  sections: [
    { id: "definition", label: "Definición" },
    { id: "types", label: "Tipos" },
    { id: "methode", label: "Método" },
    { id: "querent", label: "Querente y quesito" },
    { id: "naturels", label: "Significadores naturales" },
    { id: "force", label: "Fuerza" },
    { id: "accidentels", label: "Testimonios accidentales" },
    { id: "maisons-derivees", label: "Casas derivadas" },
    { id: "exemples", label: "Ejemplos" },
    { id: "faq", label: "FAQ" },
  ],
  defBox: {
    label: "Definición",
    body: (
      <>
        Un <strong>significador</strong> es el <Link href="/#planetes">planeta</Link> que representa a un actor o a una
        cosa en una carta: se identifica a partir de la <Link href="/#maisons">casa</Link> que gobierna el sujeto, antes
        de toda interpretación.
      </>
    ),
  },
  intro: (
    <>
      Antes de interpretar nada, el astrólogo tradicional se hace una pregunta sencilla: <strong>¿quién representa a
      quién?</strong> El consultante, la pareja, el dinero, el viaje… cada uno tiene su <strong>significador</strong>. Este
      curso te enseña a atribuirlos correctamente, a distinguir significador principal, co-significador y significador
      natural, y luego a juzgar su fuerza.
    </>
  ),
  definition: {
    title: "¿Qué es un significador?",
    resumeLabel: "Resumen",
    resume: [
      "Un significador es el planeta (o el punto) que «representa» a un actor o a una cosa en una carta: el consultante, una pareja, el dinero, un viaje…",
      "Identificar correctamente los significadores es el paso que precede a toda interpretación: sin él, se lee al azar.",
      "El principio es universal (natal, horaria, electiva), pero es en la astrología horaria donde resulta más riguroso.",
    ],
    notLabel: "Lo que no es",
    ceQueCeNestPas: [
      "Un simple «planeta importante» de la carta.",
      "Un símbolo fijo: un mismo astro puede significar cosas diferentes según la pregunta.",
      "Una etiqueta definitiva: un significador se elige en función del sujeto concreto.",
    ],
  },
  types: {
    title: "Los cuatro tipos de significadores",
    intro: [
      "Varios planetas pueden significar un mismo sujeto, a títulos diferentes. Se distinguen cuatro grandes categorías.",
    ],
    items: [
      { nom: "Significador principal", slug: "principal", sens: "El regente de la casa que gobierna el sujeto. Para el consultante: regente de la casa I. Para el dinero: regente de la casa II, etc.", cle: "El regente de la casa del sujeto." },
      { nom: "Co-significador — la Luna", slug: "lune", sens: "La Luna acompaña casi siempre al consultante y describe el desarrollo del asunto. Es el segundo significador del querente.", cle: "La Luna, testigo del recorrido." },
      { nom: "Significador natural", slug: "naturel", sens: "Un planeta simboliza naturalmente un dominio, independientemente de las casas: Venus para el amor, Mercurio para los escritos, Marte para los conflictos.", cle: "El simbolismo propio del planeta." },
      { nom: "Almuten", slug: "almuten", sens: "El planeta que posee más dignidades esenciales sobre un grado dado (Ascendente, Luna…). Puede reforzar o dirimir entre los significadores.", cle: "El «regente ponderado» de un punto." },
    ],
  },
  methode: {
    title: "Método: atribuir un significador",
    intro: [
      "Atribuir un significador sigue siempre el mismo encadenamiento, del sujeto hacia el planeta.",
    ],
    etapesLabel: "Pasos",
    etapes: [
      "1) Formular con precisión el sujeto: ¿a quién o a qué necesito representar?",
      "2) Encontrar la casa que gobierna ese sujeto (p. ej. pareja → VII, carrera → X).",
      "3) Tomar el regente de esa casa: es el significador principal.",
      "4) Añadir la Luna como co-significador (sobre todo para el consultante).",
      "5) Localizar el significador natural del dominio para confirmar o matizar.",
      "6) Evaluar luego la fuerza de esos significadores (dignidades, casas, aspectos).",
    ],
    regleCle:
      "Un planeta puede acumular roles: si Venus es a la vez significador natural del amor Y regente de la casa VII, el testimonio es doblemente fuerte.",
  },
  querentQuesite: {
    title: "Querente y quesito: los dos polos",
    intro: [
      "En astrología horaria, siempre se oponen dos polos: el que plantea la pregunta y aquello que pregunta.",
    ],
    items: [
      { label: "El querente (el que pregunta)", sens: "Casa I y su regente, más la Luna. Es el «yo» en la pregunta." },
      { label: "El quesito (lo que se pregunta)", sens: "La casa del sujeto y su regente. Es «el otro» o «la cosa»." },
      { label: "La relación entre ellos", sens: "Un aspecto aplicativo entre los dos significadores (o a través de la Luna) muestra cómo se anuda el asunto." },
    ],
  },
  naturels: {
    title: "Tabla de los significadores naturales",
    intro: [
      "Estos son los significadores naturales más utilizados. Sirven de apoyo al regente de la casa.",
    ],
    table: [
      { domaine: "Amor, afecto, placer", astre: "Venus" },
      { domaine: "Deseo, conflicto, cirugía, acción", astre: "Marte" },
      { domaine: "Escritos, contratos, mensajes, comercio", astre: "Mercurio" },
      { domaine: "Dinero, suerte, expansión, justicia", astre: "Júpiter" },
      { domaine: "Tiempo, límites, duelos, bienes inmuebles, lo antiguo", astre: "Saturno" },
      { domaine: "Autoridad, padre, vitalidad, honores", astre: "Sol" },
      { domaine: "Madre, multitud, fluidos, viajes cortos, lo cotidiano", astre: "Luna" },
      { domaine: "Rupturas, imprevistos, tecnología, libertad", astre: "Urano" },
      { domaine: "Ilusión, mar, secretos, espiritualidad, lo difuso", astre: "Neptuno" },
      { domaine: "Poder, transformación, deudas, lo profundo", astre: "Plutón" },
    ],
  },
  force: {
    title: "La fuerza de un significador",
    intro: [
      "Una vez identificados los significadores, se juzga su capacidad de actuar. Un buen significador débil promete sin poder cumplir.",
    ],
    essentielleLabel: "Dignidad esencial",
    essentielle: [
      "Dignidades esenciales (domicilio, exaltación, triplicidad…): la cualidad propia del planeta.",
      "Detrimento o caída: significador debilitado, mal dispuesto.",
      "Peregrino: sin recursos, «vaga».",
    ],
    accidentelleLabel: "Dignidad accidental",
    accidentelle: [
      "Casa ocupada: angular (fuerte, que actúa) / sucedente / cadente (sin agarre).",
      "Velocidad y dirección: directo y rápido (eficaz) vs retrógrado o lento (retroceso, vacilación).",
      "Combustión (demasiado cerca del Sol): significador agobiado, cegado.",
      "Aspectos recibidos de los benéficos (Júpiter, Venus) o de los maléficos (Marte, Saturno).",
    ],
    lien: "Para el detalle de las dignidades, consulta el curso dedicado a las regencias planetarias.",
    lienCta: "Ver las regencias planetarias →",
  },
  accidentels: {
    title: "Los testimonios accidentales de un sujeto",
    intro: [
      "Más allá del regente de la casa, otros planetas aportan su testimonio sobre un sujeto.",
    ],
    items: [
      { label: "Planeta que ocupa la casa", sens: "Un planeta situado en la casa del sujeto la «colorea» fuertemente, a veces tanto como su regente." },
      { label: "Planeta que aspecta al significador", sens: "Los aspectos recibidos describen las influencias exteriores sobre el actor representado." },
      { label: "Regente natural presente", sens: "Si el significador natural del dominio también está implicado, el testimonio se refuerza." },
    ],
  },
  maisonsDerivees: {
    title: "Significadores de terceros: girar las casas",
    intro: [
      "Para los terceros (la hermana de mi amigo, el dinero de mi socio…), se «gira» la carta: la casa del tercero se convierte en la nueva casa I, y se toman los significadores a partir de ahí.",
    ],
    exemplesLabel: "Ejemplos",
    exemples: [
      "El dinero del cónyuge: casa II a partir de la VII = casa VIII radical.",
      "El trabajo de mi hijo: casa VI a partir de la V = casa X radical.",
      "Luego se toma el regente de la casa derivada como significador del sujeto.",
    ],
    lien: "Consulta el curso sobre las casas derivadas para el método completo.",
    lienCta: "Ver las casas derivadas →",
  },
  exemples: {
    title: "Ejemplos de atribución de los significadores",
    items: [
      {
        titre: "«¿Me quiere?»",
        texte: "Consultante = regente de I + Luna. El amado = regente de VII. Significador natural: Venus. Si Venus es también regente de la VII, el testimonio amoroso se duplica; se lee entonces el aspecto entre los dos significadores.",
      },
      {
        titre: "«¿Recuperaré ese dinero?»",
        texte: "Mi dinero = regente de la casa II + Júpiter (significador natural). Se observa si el regente de la II vuelve hacia el regente de I (el dinero que regresa) o se aleja de él (pérdida).",
      },
      {
        titre: "«¿Conseguiré el puesto?»",
        texte: "Yo = regente de I. El empleo/empleador = regente de la X + Sol. Un significador de carrera dignificado y angular, en aspecto aplicativo con el regente de I, aboga por el sí.",
      },
    ],
    erreursLabel: "Errores frecuentes que evitar",
    erreurs: [
      "Elegir un significador antes de haber definido con precisión el sujeto.",
      "Olvidar la Luna como co-significador del consultante.",
      "Confundir significador natural y regente de la casa (se complementan).",
      "Juzgar una promesa sin verificar la fuerza del significador.",
      "Para un tercero, leer la carta radical en lugar de girar las casas.",
      "Multiplicar los significadores hasta poder «probar» cualquier cosa.",
    ],
  },
  faqDataTitle: "Preguntas frecuentes sobre los significadores",
  faq: [
    { q: "¿Qué es un significador en astrología?", a: "Es el planeta o el punto que representa a un actor o a una cosa en una carta: el consultante, una pareja, el dinero, un viaje. Se identifica antes de toda interpretación." },
    { q: "¿Cómo encontrar el significador de un sujeto?", a: "Se localiza la casa que gobierna el sujeto, luego se toma el regente de esa casa. Se le añade la Luna y el significador natural del dominio." },
    { q: "¿Qué diferencia hay entre significador principal y natural?", a: "El principal es el regente de la casa del sujeto, propio de cada carta. El natural es el simbolismo fijo de un planeta (Venus = amor) válido en todas partes." },
    { q: "¿Por qué la Luna es un co-significador?", a: "Porque acompaña al consultante y describe el desarrollo del asunto. En horaria, casi siempre es el segundo significador del querente." },
    { q: "¿Qué es el almuten?", a: "El planeta que posee más dignidades esenciales sobre un grado dado (a menudo el Ascendente). Puede reforzar o dirimir entre los significadores principales." },
    { q: "¿Puede un planeta ser varios significadores a la vez?", a: "Sí. Si un planeta acumula varios roles (regente de casa + significador natural), su testimonio se refuerza aún más." },
  ],
  faqVisibleTitle: "Preguntas frecuentes sobre los significadores",
  faqVisible: [
    {
      q: "¿El regente de la casa es siempre el significador principal?",
      a: "Sí, es la regla básica: se toma el regente de la casa que gobierna el sujeto. Luego se completa con la Luna y con el significador natural del dominio para afinar la lectura.",
    },
    {
      q: "¿Cómo representar a otra persona distinta del consultante?",
      a: "Se utiliza la casa que la describe (VII para la pareja o el adversario, X para el empleador, III para los hermanos…) y se toma el regente de esa casa como significador de esa persona.",
    },
    {
      q: "¿Hay que dominar las dignidades para usar los significadores?",
      a: "Identificar los significadores basta para saber «quién es quién». Pero para juzgar si pueden actuar, hay que evaluar su fuerza mediante las dignidades esenciales y accidentales: es el paso siguiente del análisis.",
    },
    {
      q: "¿Los significadores sirven solo en astrología horaria?",
      a: "No. El principio vale también en la carta natal y en la astrología electiva. Pero es en horaria donde la atribución de los significadores está más codificada y resulta más decisiva para el juicio.",
    },
  ],
  footer: { maitrises: "Regencias", horaire: "Astrología horaria", maisonsDerivees: "Casas derivadas", aspects: "Aspectos" },
};

export const significateursContent: Record<SeoLocale, SignificateursContent> = { fr, en, es };
