import { Link } from "@/i18n/navigation";
import type { ReactNode } from "react";
import type { SeoLocale } from "@/lib/seo";

/* ====================================================================
   Maisons dérivées — contenu localisé (fr / en / es)
   Les clés logiques (slug, maisonNatale, dates, images, href) sont
   identiques dans chaque langue ; seuls les textes sont traduits.
   ==================================================================== */

export type Regle = { etape: number; nom: string; texte: string };
export type Application = { maisonNatale: number; derivation: string; titre: string; texte: string };
export type Membre = { nom: string; maison: string; texte: string };
export type FamilleGroup = { groupe: string; membres: Membre[] };
export type CaseStudy = { titre: string; question: string; donnees: string; interpretation: string };
export type FaqItem = { question: string; answer: string };

export type MaisonsDeriveesContent = {
  meta: { title: string; description: string };
  jsonld: { headline: string; description: string };
  slug: string;
  title: string;
  description: string;
  hero: { badge: string };
  defBox: { label: string; body: ReactNode };
  appIntro: ReactNode;
  introHeading: string;
  introduction: string[];
  definitionHeading: string;
  definition: string[];
  reglesTitle: string;
  reglesIntro: string;
  regles: Regle[];
  applicationsTitle: string;
  applicationsIntro: string;
  applications: Application[];
  familleTitle: string;
  familleIntro: string;
  famille: FamilleGroup[];
  caseStudiesTitle: string;
  caseLabels: { tag: string; question: string; data: string; analysis: string };
  caseStudies: CaseStudy[];
  limitesTitle: string;
  limites: string[];
  redLine: ReactNode;
  conclusionTitle: string;
  conclusion: string[];
  faqTitle: string;
  faq: FaqItem[];
  synastrieFaq: { question: string; answer: ReactNode };
  synastrieFaqJsonLd: { question: string; answer: string };
  footer: { cta: string; brand: string };
};

/* ============================== FR ============================== */
const fr: MaisonsDeriveesContent = {
  meta: {
    title: "Les Maisons Dérivées dans le Thème Astral",
    description:
      "Découvrez la technique des maisons dérivées en astrologie. Apprenez à lire le destin de vos proches grâce à la rotation du zodiaque dans votre thème.",
  },
  jsonld: {
    headline: "Les Maisons Dérivées dans le Thème Astral",
    description:
      "Découvrez la technique des maisons dérivées en astrologie. Apprenez à lire le destin de vos proches grâce à la rotation du zodiaque dans votre thème.",
  },
  slug: "maisons-derivees",
  title: "Les Maisons Dérivées dans le Thème Astral",
  description:
    "Découvrez la technique des maisons dérivées en astrologie. Apprenez à lire le destin de vos proches grâce à la rotation du zodiaque dans votre thème.",
  hero: { badge: "Encyclopédie Astrologique" },
  defBox: {
    label: "Définition",
    body: (
      <>
        Les <strong>maisons dérivées</strong> sont une technique astrologique qui consiste à compter
        depuis une <Link href="/#maisons">maison natale</Link> pour obtenir des informations sur les
        proches, les finances d'autrui ou les événements liés à un tiers dans le thème.
      </>
    ),
  },
  appIntro: (
    <>
      Vous souhaitez comprendre comment fonctionnent les{" "}
      <strong>maisons dérivées en astrologie</strong> ? Beaucoup d'astrologues ignorent cette
      technique pourtant essentielle pour lire les événements touchant l'entourage dans un thème
      natal. Ce guide complet vous enseigne la règle de comptage, les dérivations fondamentales et la
      cartographie familiale complète.
    </>
  ),
  introHeading: "Comment les maisons dérivées révèlent un hologramme cosmique",
  introduction: [
    "Imaginez que votre thème astral ne soit pas seulement une carte de votre propre psyché, mais un hologramme cosmique contenant les vies de tous ceux qui vous entourent. C'est exactement la promesse de la technique astrologique des maisons dérivées.",
    "Issue de la tradition hellénistique et popularisée par l'astrologie horaire et médiévale, cette méthode permet de transformer n'importe quelle maison astrologique en un nouvel Ascendant (Maison I). Ainsi, la roue du zodiaque pivote pour révéler les finances de votre partenaire, la carrière de votre mère, ou même les secrets de votre oncle.",
    "Bien que redoutablement puissante, cette technique demande une rigueur mathématique et une grande clarté d'esprit. Plongeons dans cette mécanique céleste pour en maîtriser toutes les arborescences.",
  ],
  definitionHeading: "Axiome et Définition",
  definition: [
    "Les Maisons dérivées reposent sur un axiome fondamental : chaque Maison astrologique de votre thème natal peut être considérée comme la Maison I d'une autre personne.",
    "Pour utiliser cette technique, on compte à partir de la maison 'Pivot' (celle qui représente la personne étudiée) en l'incluant toujours comme la Maison 1 de cette personne.",
    "Par exemple, si vous voulez connaître les finances de votre conjoint, vous prenez la Maison VII (le conjoint) comme point de départ. Ses finances correspondent à sa Maison II. Vous comptez donc deux maisons à partir de la VII (VII compte pour 1, VIII compte pour 2). Les finances du conjoint se lisent donc dans votre Maison VIII natale.",
  ],
  reglesTitle: "La Règle d'Or du Comptage",
  reglesIntro:
    "La principale erreur des étudiants en astrologie réside dans le calcul. En astrologie, le comptage est toujours inclusif. Il n'y a pas de 'zéro'.",
  regles: [
    {
      etape: 1,
      nom: "Le Pivot Principal",
      texte:
        "Identifiez la maison qui représente la personne visée. Ex: La Maison III pour un frère, la Maison X pour la mère, la Maison VI pour un employé.",
    },
    {
      etape: 2,
      nom: "L'Objet de la Question",
      texte:
        "Que cherchez-vous à savoir sur cette personne ? Sa santé (VI), son argent (II), ses enfants (V) ou ses secrets (XII) ?",
    },
    {
      etape: 3,
      nom: "Le Comptage Inclusif",
      texte:
        "Commencez à compter sur la roue zodiacale. La maison Pivot est TOUJOURS la maison numéro 1. Tournez dans le sens inverse des aiguilles d'une montre.",
    },
    {
      etape: 4,
      nom: "La Maison Dérivée",
      texte:
        "Le point d'arrivée est la Maison Dérivée. Analysez son signe, son maître planétaire et les planètes qui s'y trouvent dans votre thème.",
    },
  ],
  applicationsTitle: "L'Encyclopédie des Dérivations",
  applicationsIntro:
    "Voici une liste des dérivations les plus validées par des siècles de pratique astrologique.",
  applications: [
    {
      maisonNatale: 8,
      derivation: "Maison II de la VII",
      titre: "Les Finances du Partenaire",
      texte:
        "La Maison VIII représente l'argent de votre conjoint. Si Jupiter s'y trouve, votre partenaire pourrait être financièrement aisé. Si Saturne s'y trouve, il pourrait traverser des crises financières qui impacteront votre couple.",
    },
    {
      maisonNatale: 11,
      derivation: "Maison II de la X",
      titre: "Les Fruits de la Carrière",
      texte:
        "La Maison XI (les projets) est aussi la Maison II de la X. Elle décrit très concrètement l'argent généré par votre profession ou les primes reçues de votre hiérarchie.",
    },
    {
      maisonNatale: 12,
      derivation: "Maison VI de la VII",
      titre: "La Santé du Conjoint",
      texte:
        "Votre douzième maison (épreuves cachées) est la sixième maison (maladie) de votre partenaire. De lourds transits planétaires dans votre XII coïncident souvent avec la maladie de l'être aimé.",
    },
    {
      maisonNatale: 4,
      derivation: "Maison X de la VII",
      titre: "La Réputation du Conjoint",
      texte:
        "Votre foyer (Maison IV) représente la place dans le monde (Maison X) de votre conjoint. Votre équilibre intime dépend souvent de sa réussite extérieure.",
    },
  ],
  familleTitle: "La Grande Cartographie Familiale",
  familleIntro:
    "Le thème natal est un arbre généalogique codé. Voici comment retrouver n'importe quel membre, de l'ex-femme au neveu, avec une précision mathématique.",
  famille: [
    {
      groupe: "L'Ascendance & Les Oncles",
      membres: [
        { nom: "La Mère", maison: "Maison X", texte: "L'autorité (tradition moderne) ou la Maison IV (tradition hellénistique)." },
        { nom: "Le Père", maison: "Maison IV", texte: "Les racines (tradition moderne) ou la Maison X (tradition hellénistique)." },
        { nom: "Oncles & Tantes Maternels", maison: "Maison XII", texte: "Les frères/sœurs de la mère. (Maison III comptée à partir de la X = Maison XII)." },
        { nom: "Oncles & Tantes Paternels", maison: "Maison VI", texte: "Les frères/sœurs du père. (Maison III comptée à partir de la IV = Maison VI)." },
      ],
    },
    {
      groupe: "La Fratrie & La Descendance",
      membres: [
        { nom: "Le 1er Enfant", maison: "Maison V", texte: "Le premier enfant conçu ou la première grossesse." },
        { nom: "Le 2ème Enfant", maison: "Maison VII", texte: "Vu comme le frère (III) du premier enfant (V). 3 maisons après la V = Maison VII." },
        { nom: "Le 3ème Enfant", maison: "Maison IX", texte: "Vu comme le frère du 2ème enfant. 3 maisons après la VII = Maison IX." },
        { nom: "Le Neveu / La Nièce", maison: "Maison VII", texte: "Les enfants (V) de vos frères/sœurs (III). 5 maisons après la III = Maison VII." },
      ],
    },
    {
      groupe: "Les Alliances & Les Ex",
      membres: [
        { nom: "Le Conjoint (Actuel)", maison: "Maison VII", texte: "Le partenaire officiel principal." },
        { nom: "L'Ex-Femme / L'Ex-Mari", maison: "Maison VII ou IX", texte: "L'Ex reste en VII pour les conflits de divorce. S'il y a un 2e mariage, le nouveau partenaire va en IX, et l'Ex reste le '1er' en VII." },
        { nom: "Beau-frère / Belle-sœur", maison: "Maison IX", texte: "Le frère ou la sœur (III) du conjoint (VII). 3 maisons après la VII = Maison IX." },
        { nom: "Les Beaux-Parents", maison: "Maisons X et IV", texte: "Les parents de votre conjoint. (La IV de la VII = Maison X)." },
      ],
    },
  ],
  caseStudiesTitle: "Masterclass : 5 Études de Cas Pratiques",
  caseLabels: {
    tag: "Cas Pratique",
    question: "Question posée",
    data: "Données Célestes",
    analysis: "Analyse Astrologique",
  },
  caseStudies: [
    {
      titre: "Cas #1 : La Faillite de l'Ex-Mari",
      question: "Mon ex-mari, avec qui je suis en conflit financier, va-t-il faire faillite ?",
      donnees: "Maison VII en Bélier. Maison VIII (2 de 7) en Taureau, occupée par Uranus affligé par Saturne.",
      interpretation:
        "L'ex-mari (1er époux) reste en VII. Ses finances se lisent en Maison VIII (la Maison II dérivée à partir de la VII). Uranus très affligé par Saturne dans cette maison indique une restriction drastique et soudaine de son patrimoine, confirmant une faillite qui pourrait bloquer vos pensions.",
    },
    {
      titre: "Cas #2 : La Réussite du Deuxième Enfant",
      question: "Mon deuxième enfant trouvera-t-il enfin sa voie professionnelle ?",
      donnees: "Maison VII (2e enfant) en Sagittaire. Maison IV natale (10 de 7) en Poissons avec Jupiter au Milieu du Ciel.",
      interpretation:
        "Le deuxième enfant est signifié par la Maison VII. Sa carrière est sa propre Maison X (10 de 7), ce qui nous amène à votre Maison IV natale. Jupiter (succès, expansion) très fort indique que ce deuxième enfant connaîtra une ascension professionnelle spectaculaire.",
    },
    {
      titre: "Cas #3 : Le Secret du Beau-Frère",
      question: "Le frère de mon mari (mon beau-frère) nous cache-t-il des choses graves ?",
      donnees: "Maison IX (beau-frère) en Vierge. Maison VIII natale (12 de 9) abritant Neptune mal aspecté.",
      interpretation:
        "Le beau-frère (Maison III à partir de la VII = Maison IX). Ses secrets se lisent dans sa propre Maison XII (12 de 9), ce qui correspond à votre Maison VIII natale. Neptune (le mensonge, la dissimulation) y est très mal aspecté. Le verdict est sans appel : il dissimule une réalité (souvent financière ou liée à des dettes vu la nature de la maison 8).",
    },
    {
      titre: "Cas #4 : L'Héritage du Neveu",
      question: "Mon neveu va-t-il s'enrichir grâce à la succession de son père ?",
      donnees: "Maison VII (le neveu) en Balance. Maison II natale (8 de 7) en Taureau avec Vénus et Pluton conjoints.",
      interpretation:
        "Le neveu (enfant du frère : 5 de 3) se trouve en Maison VII. Son héritage se lit dans sa Maison VIII. En comptant 8 maisons depuis la VII, on tombe sur votre Maison II. La conjonction Vénus/Pluton (richesse extrême) confirme un afflux massif de capitaux pour ce neveu.",
    },
    {
      titre: "Cas #5 : La Santé de la Tante Maternelle",
      question: "Ma tante du côté de ma mère va-t-elle se remettre de son opération ?",
      donnees: "Maison XII (tante maternelle) en Scorpion. Maison V natale (6 de 12) avec Mars en chute en Cancer.",
      interpretation:
        "La tante maternelle (sœur de la mère : 3 de 10) est la Maison XII. Sa santé se lit dans sa Maison VI (6 de 12), soit votre Maison V natale. Mars (chirurgie, inflammation) en chute indique que l'opération sera compliquée et que la convalescence demandera beaucoup de temps et d'énergie.",
    },
  ],
  limitesTitle: "Avertissements et Éthique",
  limites: [
    "La dilution du symbole : Théoriquement, on peut chercher 'le chien de l'ex-femme de mon oncle'. En pratique, au-delà de deux dérivations, le sens astrologique devient flou. Restez concentré sur les liens directs.",
    "La question éthique : Fouiller dans les finances de votre ex-femme ou les secrets de votre beau-frère sans leur consentement relève du voyeurisme. L'astrologie exige de la noblesse d'âme.",
    "Le Thème Natal Prime Toujours : Une maison dérivée montre VOTRE perception d'une personne à travers votre propre thème. Elle ne remplacera jamais le vrai thème astral de cette personne.",
  ],
  redLine: (
    <>
      Ligne Rouge <br /> Astrologique
    </>
  ),
  conclusionTitle: "La Matrice Intégrale",
  conclusion: [
    "Les Maisons dérivées transforment l'astrologie en un langage holographique époustouflant. Une simple roue de 12 secteurs suffit à raconter l'histoire d'une famille entière.",
    "Comprendre cette technique, c'est toucher du doigt une réalité spirituelle fondamentale : rien n'est séparé. La santé de votre tante maternelle et l'argent de votre ex-mari font partie du même grand algorithme céleste.",
  ],
  faqTitle: "Questions Fréquentes (FAQ)",
  faq: [
    {
      question: "Si j'ai trois frères, comment la Maison III peut-elle tous les décrire ?",
      answer:
        "La Maison III décrit la fratrie en général. Pour individualiser, la tradition donne la III pour l'aîné(e), puis on saute de 2 en 2 (Maison V pour le second, Maison VII pour le troisième).",
    },
    {
      question: "Les nœuds lunaires sont-ils pris en compte dans les maisons dérivées ?",
      answer:
        "Oui. Un Nœud Sud dans la maison dérivée des finances de votre ex-conjoint peut indiquer qu'il subit une perte karmique ou matérielle inévitable.",
    },
    {
      question: "Faut-il utiliser Placidus ou les Signes Entiers ?",
      answer:
        "Les maisons dérivées fonctionnent mieux avec le système des Signes Entiers (Whole Signs), car la technique a été pensée à l'époque hellénistique où 1 Maison = 1 Signe.",
    },
  ],
  synastrieFaq: {
    question: "Peut-on utiliser les maisons dérivées en synastrie ?",
    answer: (
      <>
        Oui, les maisons dérivées enrichissent considérablement l'analyse en{" "}
        <Link href="/synastrie">synastrie</Link>. Par exemple, la Maison VIII (dérivée de la VII)
        représente les finances du partenaire, et la Maison IX (dérivée 3 de la VII) sa fratrie.
        Cette technique permet de lire dans votre propre thème des informations sur les proches de
        votre conjoint.
      </>
    ),
  },
  synastrieFaqJsonLd: {
    question: "Peut-on utiliser les maisons dérivées en synastrie ?",
    answer:
      "Oui, les maisons dérivées enrichissent considérablement l'analyse en synastrie. Par exemple, la Maison VIII (dérivée de la VII) représente les finances du partenaire, et la Maison IX (dérivée 3 de la VII) sa fratrie. Cette technique permet de lire dans votre propre thème des informations sur les proches de votre conjoint.",
  },
  footer: { cta: "Explorer d'autres concepts", brand: "Astro Cours — L'Encyclopédie" },
};

/* ============================== EN ============================== */
const en: MaisonsDeriveesContent = {
  meta: {
    title: "Derived Houses in the Natal Chart",
    description:
      "Discover the technique of derived houses in astrology. Learn to read the destiny of those close to you through the rotation of the zodiac within your chart.",
  },
  jsonld: {
    headline: "Derived Houses in the Natal Chart",
    description:
      "Discover the technique of derived houses in astrology. Learn to read the destiny of those close to you through the rotation of the zodiac within your chart.",
  },
  slug: "maisons-derivees",
  title: "Derived Houses in the Natal Chart",
  description:
    "Discover the technique of derived houses in astrology. Learn to read the destiny of those close to you through the rotation of the zodiac within your chart.",
  hero: { badge: "Astrological Encyclopaedia" },
  defBox: {
    label: "Definition",
    body: (
      <>
        <strong>Derived houses</strong> are an astrological technique that consists of counting from a{" "}
        <Link href="/#maisons">natal house</Link> to obtain information about loved ones, the finances
        of others, or events involving a third party in the chart.
      </>
    ),
  },
  appIntro: (
    <>
      Want to understand how <strong>derived houses in astrology</strong> work? Many astrologers
      overlook this technique, yet it is essential for reading the events affecting those around you
      in a natal chart. This complete guide teaches you the counting rule, the fundamental
      derivations and the full family mapping.
    </>
  ),
  introHeading: "How derived houses reveal a cosmic hologram",
  introduction: [
    "Imagine that your natal chart is not merely a map of your own psyche, but a cosmic hologram containing the lives of everyone around you. That is exactly the promise of the astrological technique of derived houses.",
    "Stemming from the Hellenistic tradition and popularised by horary and medieval astrology, this method makes it possible to turn any astrological house into a new Ascendant (House I). The wheel of the zodiac thus pivots to reveal your partner's finances, your mother's career, or even your uncle's secrets.",
    "Though formidably powerful, this technique demands mathematical rigour and great clarity of mind. Let us dive into this celestial mechanism to master all its branches.",
  ],
  definitionHeading: "Axiom and Definition",
  definition: [
    "Derived houses rest on a fundamental axiom: each astrological House in your natal chart can be regarded as House I of another person.",
    "To use this technique, you count from the 'Pivot' house (the one representing the person studied), always including it as House 1 of that person.",
    "For example, if you want to know your spouse's finances, you take House VII (the spouse) as the starting point. Their finances correspond to their House II. So you count two houses from House VII (VII counts as 1, VIII counts as 2). Your spouse's finances are therefore read in your natal House VIII.",
  ],
  reglesTitle: "The Golden Rule of Counting",
  reglesIntro:
    "The main mistake astrology students make lies in the calculation. In astrology, counting is always inclusive. There is no 'zero'.",
  regles: [
    {
      etape: 1,
      nom: "The Main Pivot",
      texte:
        "Identify the house that represents the person concerned. E.g. House III for a brother, House X for the mother, House VI for an employee.",
    },
    {
      etape: 2,
      nom: "The Subject of the Question",
      texte:
        "What are you trying to learn about this person? Their health (VI), their money (II), their children (V) or their secrets (XII)?",
    },
    {
      etape: 3,
      nom: "Inclusive Counting",
      texte:
        "Start counting on the zodiac wheel. The Pivot house is ALWAYS house number 1. Turn counter-clockwise.",
    },
    {
      etape: 4,
      nom: "The Derived House",
      texte:
        "The point of arrival is the Derived House. Analyse its sign, its planetary ruler and the planets it contains in your chart.",
    },
  ],
  applicationsTitle: "The Encyclopaedia of Derivations",
  applicationsIntro:
    "Here is a list of the derivations most validated by centuries of astrological practice.",
  applications: [
    {
      maisonNatale: 8,
      derivation: "House II of the VII",
      titre: "The Partner's Finances",
      texte:
        "House VIII represents your spouse's money. If Jupiter is there, your partner could be financially comfortable. If Saturn is there, they could go through financial crises that will affect your relationship.",
    },
    {
      maisonNatale: 11,
      derivation: "House II of the X",
      titre: "The Fruits of the Career",
      texte:
        "House XI (projects) is also House II of the X. It describes very concretely the money generated by your profession or the bonuses received from your superiors.",
    },
    {
      maisonNatale: 12,
      derivation: "House VI of the VII",
      titre: "The Spouse's Health",
      texte:
        "Your twelfth house (hidden trials) is the sixth house (illness) of your partner. Heavy planetary transits in your XII often coincide with the illness of your beloved.",
    },
    {
      maisonNatale: 4,
      derivation: "House X of the VII",
      titre: "The Spouse's Reputation",
      texte:
        "Your home (House IV) represents your spouse's standing in the world (House X). Your intimate balance often depends on their outer success.",
    },
  ],
  familleTitle: "The Great Family Mapping",
  familleIntro:
    "The natal chart is a coded family tree. Here is how to locate any member, from the ex-wife to the nephew, with mathematical precision.",
  famille: [
    {
      groupe: "Ancestry & Uncles",
      membres: [
        { nom: "The Mother", maison: "House X", texte: "Authority (modern tradition) or House IV (Hellenistic tradition)." },
        { nom: "The Father", maison: "House IV", texte: "Roots (modern tradition) or House X (Hellenistic tradition)." },
        { nom: "Maternal Uncles & Aunts", maison: "House XII", texte: "The mother's siblings. (House III counted from the X = House XII)." },
        { nom: "Paternal Uncles & Aunts", maison: "House VI", texte: "The father's siblings. (House III counted from the IV = House VI)." },
      ],
    },
    {
      groupe: "Siblings & Descendants",
      membres: [
        { nom: "The 1st Child", maison: "House V", texte: "The first child conceived or the first pregnancy." },
        { nom: "The 2nd Child", maison: "House VII", texte: "Seen as the sibling (III) of the first child (V). 3 houses after the V = House VII." },
        { nom: "The 3rd Child", maison: "House IX", texte: "Seen as the sibling of the 2nd child. 3 houses after the VII = House IX." },
        { nom: "The Nephew / Niece", maison: "House VII", texte: "The children (V) of your siblings (III). 5 houses after the III = House VII." },
      ],
    },
    {
      groupe: "Unions & Exes",
      membres: [
        { nom: "The (Current) Spouse", maison: "House VII", texte: "The main official partner." },
        { nom: "The Ex-Wife / Ex-Husband", maison: "House VII or IX", texte: "The Ex stays in VII for divorce conflicts. If there is a 2nd marriage, the new partner goes to IX, and the Ex remains the '1st' in VII." },
        { nom: "Brother-in-law / Sister-in-law", maison: "House IX", texte: "The brother or sister (III) of the spouse (VII). 3 houses after the VII = House IX." },
        { nom: "The In-Laws", maison: "Houses X and IV", texte: "Your spouse's parents. (House IV of the VII = House X)." },
      ],
    },
  ],
  caseStudiesTitle: "Masterclass: 5 Practical Case Studies",
  caseLabels: {
    tag: "Case Study",
    question: "Question asked",
    data: "Celestial Data",
    analysis: "Astrological Analysis",
  },
  caseStudies: [
    {
      titre: "Case #1: The Ex-Husband's Bankruptcy",
      question: "Will my ex-husband, with whom I am in a financial dispute, go bankrupt?",
      donnees: "House VII in Aries. House VIII (2 of 7) in Taurus, occupied by Uranus afflicted by Saturn.",
      interpretation:
        "The ex-husband (1st spouse) stays in VII. His finances are read in House VIII (House II derived from the VII). Uranus severely afflicted by Saturn in this house indicates a drastic and sudden restriction of his assets, confirming a bankruptcy that could block your alimony.",
    },
    {
      titre: "Case #2: The Second Child's Success",
      question: "Will my second child finally find their professional path?",
      donnees: "House VII (2nd child) in Sagittarius. Natal House IV (10 of 7) in Pisces with Jupiter at the Midheaven.",
      interpretation:
        "The second child is signified by House VII. Their career is their own House X (10 of 7), which brings us to your natal House IV. A very strong Jupiter (success, expansion) indicates that this second child will enjoy a spectacular professional rise.",
    },
    {
      titre: "Case #3: The Brother-in-law's Secret",
      question: "Is my husband's brother (my brother-in-law) hiding serious things from us?",
      donnees: "House IX (brother-in-law) in Virgo. Natal House VIII (12 of 9) housing Neptune badly aspected.",
      interpretation:
        "The brother-in-law (House III from the VII = House IX). His secrets are read in his own House XII (12 of 9), which corresponds to your natal House VIII. Neptune (lies, concealment) is very badly aspected there. The verdict is final: he is hiding a reality (often financial or debt-related given the nature of the 8th house).",
    },
    {
      titre: "Case #4: The Nephew's Inheritance",
      question: "Will my nephew grow rich through his father's estate?",
      donnees: "House VII (the nephew) in Libra. Natal House II (8 of 7) in Taurus with Venus and Pluto conjunct.",
      interpretation:
        "The nephew (child of the sibling: 5 of 3) is found in House VII. His inheritance is read in his House VIII. Counting 8 houses from the VII, we land on your natal House II. The Venus/Pluto conjunction (extreme wealth) confirms a massive influx of capital for this nephew.",
    },
    {
      titre: "Case #5: The Maternal Aunt's Health",
      question: "Will my aunt on my mother's side recover from her operation?",
      donnees: "House XII (maternal aunt) in Scorpio. Natal House V (6 of 12) with Mars in fall in Cancer.",
      interpretation:
        "The maternal aunt (the mother's sister: 3 of 10) is House XII. Her health is read in her House VI (6 of 12), namely your natal House V. Mars (surgery, inflammation) in fall indicates that the operation will be complicated and that recovery will require a great deal of time and energy.",
    },
  ],
  limitesTitle: "Warnings and Ethics",
  limites: [
    "Dilution of the symbol: In theory, one could look for 'my uncle's ex-wife's dog'. In practice, beyond two derivations the astrological meaning becomes blurred. Stay focused on direct links.",
    "The ethical question: Prying into your ex-wife's finances or your brother-in-law's secrets without their consent is voyeurism. Astrology demands nobility of soul.",
    "The Natal Chart Always Prevails: A derived house shows YOUR perception of a person through your own chart. It will never replace that person's actual natal chart.",
  ],
  redLine: (
    <>
      Astrological <br /> Red Line
    </>
  ),
  conclusionTitle: "The Integral Matrix",
  conclusion: [
    "Derived houses turn astrology into a breathtaking holographic language. A simple wheel of 12 sectors is enough to tell the story of an entire family.",
    "To understand this technique is to touch a fundamental spiritual reality: nothing is separate. Your maternal aunt's health and your ex-husband's money are part of the same great celestial algorithm.",
  ],
  faqTitle: "Frequently Asked Questions (FAQ)",
  faq: [
    {
      question: "If I have three brothers, how can House III describe them all?",
      answer:
        "House III describes siblings in general. To individualise, tradition assigns the III to the eldest, then you jump in twos (House V for the second, House VII for the third).",
    },
    {
      question: "Are the lunar nodes taken into account in derived houses?",
      answer:
        "Yes. A South Node in the derived house of your ex-spouse's finances may indicate that they are undergoing an inevitable karmic or material loss.",
    },
    {
      question: "Should you use Placidus or Whole Signs?",
      answer:
        "Derived houses work better with the Whole Signs system, because the technique was conceived in the Hellenistic era when 1 House = 1 Sign.",
    },
  ],
  synastrieFaq: {
    question: "Can derived houses be used in synastry?",
    answer: (
      <>
        Yes, derived houses considerably enrich the analysis in{" "}
        <Link href="/synastrie">synastry</Link>. For example, House VIII (derived from the VII)
        represents the partner's finances, and House IX (3rd derived from the VII) their siblings.
        This technique lets you read, within your own chart, information about your spouse's loved
        ones.
      </>
    ),
  },
  synastrieFaqJsonLd: {
    question: "Can derived houses be used in synastry?",
    answer:
      "Yes, derived houses considerably enrich the analysis in synastry. For example, House VIII (derived from the VII) represents the partner's finances, and House IX (3rd derived from the VII) their siblings. This technique lets you read, within your own chart, information about your spouse's loved ones.",
  },
  footer: { cta: "Explore other concepts", brand: "Astro Cours — The Encyclopaedia" },
};

/* ============================== ES ============================== */
const es: MaisonsDeriveesContent = {
  meta: {
    title: "Las Casas Derivadas en la Carta Natal",
    description:
      "Descubre la técnica de las casas derivadas en astrología. Aprende a leer el destino de tus seres queridos gracias a la rotación del zodíaco dentro de tu carta.",
  },
  jsonld: {
    headline: "Las Casas Derivadas en la Carta Natal",
    description:
      "Descubre la técnica de las casas derivadas en astrología. Aprende a leer el destino de tus seres queridos gracias a la rotación del zodíaco dentro de tu carta.",
  },
  slug: "maisons-derivees",
  title: "Las Casas Derivadas en la Carta Natal",
  description:
    "Descubre la técnica de las casas derivadas en astrología. Aprende a leer el destino de tus seres queridos gracias a la rotación del zodíaco dentro de tu carta.",
  hero: { badge: "Enciclopedia Astrológica" },
  defBox: {
    label: "Definición",
    body: (
      <>
        Las <strong>casas derivadas</strong> son una técnica astrológica que consiste en contar desde
        una <Link href="/#maisons">casa natal</Link> para obtener información sobre los seres
        queridos, las finanzas de otros o los acontecimientos relacionados con un tercero en la carta.
      </>
    ),
  },
  appIntro: (
    <>
      ¿Quieres entender cómo funcionan las <strong>casas derivadas en astrología</strong>? Muchos
      astrólogos ignoran esta técnica, sin embargo, esencial para leer los acontecimientos que
      afectan al entorno en una carta natal. Esta guía completa te enseña la regla de conteo, las
      derivaciones fundamentales y la cartografía familiar completa.
    </>
  ),
  introHeading: "Cómo las casas derivadas revelan un holograma cósmico",
  introduction: [
    "Imagina que tu carta natal no es solo un mapa de tu propia psique, sino un holograma cósmico que contiene las vidas de todos quienes te rodean. Esa es exactamente la promesa de la técnica astrológica de las casas derivadas.",
    "Surgida de la tradición helenística y popularizada por la astrología horaria y medieval, este método permite transformar cualquier casa astrológica en un nuevo Ascendente (Casa I). Así, la rueda del zodíaco gira para revelar las finanzas de tu pareja, la carrera de tu madre o incluso los secretos de tu tío.",
    "Aunque temiblemente poderosa, esta técnica exige rigor matemático y una gran claridad mental. Sumerjámonos en esta mecánica celeste para dominar todas sus ramificaciones.",
  ],
  definitionHeading: "Axioma y Definición",
  definition: [
    "Las Casas derivadas se basan en un axioma fundamental: cada Casa astrológica de tu carta natal puede considerarse como la Casa I de otra persona.",
    "Para usar esta técnica, se cuenta a partir de la casa 'Pivote' (la que representa a la persona estudiada), incluyéndola siempre como la Casa 1 de esa persona.",
    "Por ejemplo, si quieres conocer las finanzas de tu cónyuge, tomas la Casa VII (el cónyuge) como punto de partida. Sus finanzas corresponden a su Casa II. Cuentas entonces dos casas a partir de la VII (la VII cuenta como 1, la VIII cuenta como 2). Las finanzas del cónyuge se leen, por tanto, en tu Casa VIII natal.",
  ],
  reglesTitle: "La Regla de Oro del Conteo",
  reglesIntro:
    "El principal error de los estudiantes de astrología reside en el cálculo. En astrología, el conteo siempre es inclusivo. No hay 'cero'.",
  regles: [
    {
      etape: 1,
      nom: "El Pivote Principal",
      texte:
        "Identifica la casa que representa a la persona en cuestión. Ej.: la Casa III para un hermano, la Casa X para la madre, la Casa VI para un empleado.",
    },
    {
      etape: 2,
      nom: "El Objeto de la Pregunta",
      texte:
        "¿Qué buscas saber sobre esta persona? ¿Su salud (VI), su dinero (II), sus hijos (V) o sus secretos (XII)?",
    },
    {
      etape: 3,
      nom: "El Conteo Inclusivo",
      texte:
        "Empieza a contar en la rueda zodiacal. La casa Pivote es SIEMPRE la casa número 1. Gira en sentido contrario a las agujas del reloj.",
    },
    {
      etape: 4,
      nom: "La Casa Derivada",
      texte:
        "El punto de llegada es la Casa Derivada. Analiza su signo, su regente planetario y los planetas que se encuentran en ella en tu carta.",
    },
  ],
  applicationsTitle: "La Enciclopedia de las Derivaciones",
  applicationsIntro:
    "Aquí tienes una lista de las derivaciones más validadas por siglos de práctica astrológica.",
  applications: [
    {
      maisonNatale: 8,
      derivation: "Casa II de la VII",
      titre: "Las Finanzas de la Pareja",
      texte:
        "La Casa VIII representa el dinero de tu cónyuge. Si Júpiter está allí, tu pareja podría gozar de holgura económica. Si Saturno está allí, podría atravesar crisis financieras que afectarán a vuestra relación.",
    },
    {
      maisonNatale: 11,
      derivation: "Casa II de la X",
      titre: "Los Frutos de la Carrera",
      texte:
        "La Casa XI (los proyectos) es también la Casa II de la X. Describe de forma muy concreta el dinero generado por tu profesión o las primas recibidas de tus superiores.",
    },
    {
      maisonNatale: 12,
      derivation: "Casa VI de la VII",
      titre: "La Salud del Cónyuge",
      texte:
        "Tu duodécima casa (pruebas ocultas) es la sexta casa (enfermedad) de tu pareja. Los tránsitos planetarios pesados en tu XII suelen coincidir con la enfermedad del ser amado.",
    },
    {
      maisonNatale: 4,
      derivation: "Casa X de la VII",
      titre: "La Reputación del Cónyuge",
      texte:
        "Tu hogar (Casa IV) representa el lugar en el mundo (Casa X) de tu cónyuge. Tu equilibrio íntimo depende a menudo de su éxito exterior.",
    },
  ],
  familleTitle: "La Gran Cartografía Familiar",
  familleIntro:
    "La carta natal es un árbol genealógico codificado. Así puedes encontrar a cualquier miembro, desde la exesposa hasta el sobrino, con precisión matemática.",
  famille: [
    {
      groupe: "La Ascendencia & Los Tíos",
      membres: [
        { nom: "La Madre", maison: "Casa X", texte: "La autoridad (tradición moderna) o la Casa IV (tradición helenística)." },
        { nom: "El Padre", maison: "Casa IV", texte: "Las raíces (tradición moderna) o la Casa X (tradición helenística)." },
        { nom: "Tíos y Tías Maternos", maison: "Casa XII", texte: "Los hermanos/as de la madre. (Casa III contada a partir de la X = Casa XII)." },
        { nom: "Tíos y Tías Paternos", maison: "Casa VI", texte: "Los hermanos/as del padre. (Casa III contada a partir de la IV = Casa VI)." },
      ],
    },
    {
      groupe: "La Fratría & La Descendencia",
      membres: [
        { nom: "El 1.er Hijo", maison: "Casa V", texte: "El primer hijo concebido o el primer embarazo." },
        { nom: "El 2.º Hijo", maison: "Casa VII", texte: "Visto como el hermano (III) del primer hijo (V). 3 casas después de la V = Casa VII." },
        { nom: "El 3.er Hijo", maison: "Casa IX", texte: "Visto como el hermano del 2.º hijo. 3 casas después de la VII = Casa IX." },
        { nom: "El Sobrino / La Sobrina", maison: "Casa VII", texte: "Los hijos (V) de tus hermanos/as (III). 5 casas después de la III = Casa VII." },
      ],
    },
    {
      groupe: "Las Alianzas & Los Ex",
      membres: [
        { nom: "El Cónyuge (Actual)", maison: "Casa VII", texte: "La pareja oficial principal." },
        { nom: "La Exesposa / El Exesposo", maison: "Casa VII o IX", texte: "El Ex permanece en la VII para los conflictos de divorcio. Si hay un 2.º matrimonio, la nueva pareja va a la IX, y el Ex sigue siendo el '1.º' en la VII." },
        { nom: "Cuñado / Cuñada", maison: "Casa IX", texte: "El hermano o la hermana (III) del cónyuge (VII). 3 casas después de la VII = Casa IX." },
        { nom: "Los Suegros", maison: "Casas X y IV", texte: "Los padres de tu cónyuge. (La IV de la VII = Casa X)." },
      ],
    },
  ],
  caseStudiesTitle: "Masterclass: 5 Estudios de Caso Prácticos",
  caseLabels: {
    tag: "Caso Práctico",
    question: "Pregunta planteada",
    data: "Datos Celestes",
    analysis: "Análisis Astrológico",
  },
  caseStudies: [
    {
      titre: "Caso #1: La Quiebra del Exmarido",
      question: "Mi exmarido, con quien tengo un conflicto financiero, ¿va a quebrar?",
      donnees: "Casa VII en Aries. Casa VIII (2 de 7) en Tauro, ocupada por Urano afligido por Saturno.",
      interpretation:
        "El exmarido (1.er esposo) permanece en la VII. Sus finanzas se leen en la Casa VIII (la Casa II derivada a partir de la VII). Urano muy afligido por Saturno en esta casa indica una restricción drástica y repentina de su patrimonio, lo que confirma una quiebra que podría bloquear tus pensiones.",
    },
    {
      titre: "Caso #2: El Éxito del Segundo Hijo",
      question: "¿Encontrará por fin mi segundo hijo su camino profesional?",
      donnees: "Casa VII (2.º hijo) en Sagitario. Casa IV natal (10 de 7) en Piscis con Júpiter en el Medio Cielo.",
      interpretation:
        "El segundo hijo está significado por la Casa VII. Su carrera es su propia Casa X (10 de 7), lo que nos lleva a tu Casa IV natal. Un Júpiter (éxito, expansión) muy fuerte indica que este segundo hijo conocerá un ascenso profesional espectacular.",
    },
    {
      titre: "Caso #3: El Secreto del Cuñado",
      question: "El hermano de mi marido (mi cuñado), ¿nos oculta cosas graves?",
      donnees: "Casa IX (cuñado) en Virgo. Casa VIII natal (12 de 9) albergando a Neptuno mal aspectado.",
      interpretation:
        "El cuñado (Casa III a partir de la VII = Casa IX). Sus secretos se leen en su propia Casa XII (12 de 9), que corresponde a tu Casa VIII natal. Neptuno (la mentira, el ocultamiento) está muy mal aspectado allí. El veredicto es contundente: oculta una realidad (a menudo financiera o ligada a deudas, dada la naturaleza de la casa 8).",
    },
    {
      titre: "Caso #4: La Herencia del Sobrino",
      question: "¿Se enriquecerá mi sobrino gracias a la sucesión de su padre?",
      donnees: "Casa VII (el sobrino) en Libra. Casa II natal (8 de 7) en Tauro con Venus y Plutón en conjunción.",
      interpretation:
        "El sobrino (hijo del hermano: 5 de 3) se encuentra en la Casa VII. Su herencia se lee en su Casa VIII. Contando 8 casas desde la VII, caemos en tu Casa II natal. La conjunción Venus/Plutón (riqueza extrema) confirma una afluencia masiva de capital para este sobrino.",
    },
    {
      titre: "Caso #5: La Salud de la Tía Materna",
      question: "Mi tía por parte de mi madre, ¿se recuperará de su operación?",
      donnees: "Casa XII (tía materna) en Escorpio. Casa V natal (6 de 12) con Marte en caída en Cáncer.",
      interpretation:
        "La tía materna (hermana de la madre: 3 de 10) es la Casa XII. Su salud se lee en su Casa VI (6 de 12), es decir, tu Casa V natal. Marte (cirugía, inflamación) en caída indica que la operación será complicada y que la convalecencia exigirá mucho tiempo y energía.",
    },
  ],
  limitesTitle: "Advertencias y Ética",
  limites: [
    "La dilución del símbolo: En teoría, se podría buscar 'el perro de la exesposa de mi tío'. En la práctica, más allá de dos derivaciones, el sentido astrológico se vuelve difuso. Concéntrate en los vínculos directos.",
    "La cuestión ética: Husmear en las finanzas de tu exesposa o en los secretos de tu cuñado sin su consentimiento es voyerismo. La astrología exige nobleza de alma.",
    "La Carta Natal Siempre Prevalece: Una casa derivada muestra TU percepción de una persona a través de tu propia carta. Nunca reemplazará la verdadera carta natal de esa persona.",
  ],
  redLine: (
    <>
      Línea Roja <br /> Astrológica
    </>
  ),
  conclusionTitle: "La Matriz Integral",
  conclusion: [
    "Las Casas derivadas convierten la astrología en un lenguaje holográfico asombroso. Una simple rueda de 12 sectores basta para contar la historia de una familia entera.",
    "Comprender esta técnica es rozar con la mano una realidad espiritual fundamental: nada está separado. La salud de tu tía materna y el dinero de tu exmarido forman parte del mismo gran algoritmo celeste.",
  ],
  faqTitle: "Preguntas Frecuentes (FAQ)",
  faq: [
    {
      question: "Si tengo tres hermanos, ¿cómo puede la Casa III describirlos a todos?",
      answer:
        "La Casa III describe la fratría en general. Para individualizar, la tradición asigna la III al mayor, y luego se salta de dos en dos (Casa V para el segundo, Casa VII para el tercero).",
    },
    {
      question: "¿Se tienen en cuenta los nodos lunares en las casas derivadas?",
      answer:
        "Sí. Un Nodo Sur en la casa derivada de las finanzas de tu excónyuge puede indicar que sufre una pérdida kármica o material inevitable.",
    },
    {
      question: "¿Hay que usar Placidus o los Signos Enteros?",
      answer:
        "Las casas derivadas funcionan mejor con el sistema de Signos Enteros (Whole Signs), porque la técnica se concibió en la época helenística, cuando 1 Casa = 1 Signo.",
    },
  ],
  synastrieFaq: {
    question: "¿Se pueden usar las casas derivadas en sinastría?",
    answer: (
      <>
        Sí, las casas derivadas enriquecen considerablemente el análisis en{" "}
        <Link href="/synastrie">sinastría</Link>. Por ejemplo, la Casa VIII (derivada de la VII)
        representa las finanzas de la pareja, y la Casa IX (3.ª derivada de la VII) sus hermanos.
        Esta técnica permite leer, en tu propia carta, información sobre los seres queridos de tu
        cónyuge.
      </>
    ),
  },
  synastrieFaqJsonLd: {
    question: "¿Se pueden usar las casas derivadas en sinastría?",
    answer:
      "Sí, las casas derivadas enriquecen considerablemente el análisis en sinastría. Por ejemplo, la Casa VIII (derivada de la VII) representa las finanzas de la pareja, y la Casa IX (3.ª derivada de la VII) sus hermanos. Esta técnica permite leer, en tu propia carta, información sobre los seres queridos de tu cónyuge.",
  },
  footer: { cta: "Explorar otros conceptos", brand: "Astro Cours — La Enciclopedia" },
};

export const maisonsDeriveesContent: Record<SeoLocale, MaisonsDeriveesContent> = { fr, en, es };
