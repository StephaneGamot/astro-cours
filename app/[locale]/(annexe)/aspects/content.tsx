import { Link } from "@/i18n/navigation";
import type { ReactNode } from "react";
import type { SeoLocale } from "@/lib/seo";

/* ====================================================================
   Aspects — contenu localisé (fr / en / es)
   Les clés logiques (slug, angle, kind, tone) sont identiques dans
   chaque langue ; seuls les textes sont traduits.
   ==================================================================== */

export type AspectTone = "harmonique" | "tendu" | "neutre";
export type AspectKind = "majeur" | "mineur";

export type Aspect = {
  slug: string;
  nom: string;
  angle: string;
  kind: AspectKind;
  tone: AspectTone;
  keywords: string[];
  definition: string;
  why: string;
  orbs: { natal: string; transit: string; notes?: string[] };
  howToRead: string[];
  examples: string[];
  pitfalls: string[];
};

export type AspectsContent = {
  meta: { title: string; description: string };
  jsonld: { headline: string; description: string; articleSection: string };
  hero: { eyebrow: string; h1: string; intro: ReactNode; tocLabel: string };
  defBox: { label: string; body: ReactNode };
  appIntro: ReactNode;
  recap: {
    card1Title: string;
    card1Intro: ReactNode;
    card1Items: string[];
    card2Title: string;
    card2Intro: string;
    natalLabel: string;
    natalVal: string;
    transitLabel: string;
    transitVal: string;
  };
  tableTitle: string;
  tableHeaders: { aspect: string; angle: string; type: string; tone: string; keywords: string };
  card: {
    eyebrow: string;
    angleLabel: string;
    defTitle: string;
    whyTitle: string;
    orbTitle: string;
    natalLabel: string;
    transitLabel: string;
    howTitle: string;
    examplesTitle: string;
    pitfallsTitle: string;
    topLabel: string;
  };
  kindLabel: Record<AspectKind, string>;
  toneLabel: Record<AspectTone, string>;
  footer: { next: ReactNode; signs: string; planets: string; houses: string };
  faqTitle: string;
  faq: { q: string; a: ReactNode }[];
  faqJsonLd: { name: string; text: string }[];
  aspects: Aspect[];
};

/* ============================== FR ============================== */
const fr: AspectsContent = {
  meta: {
    title: "Aspects astrologiques — Orbes & interprétation",
    description:
      "Conjonction, sextile, carré, trigone, opposition : définitions, orbes, logique, effets, exemples et méthode d'interprétation claire.",
  },
  jsonld: {
    headline: "Aspects astrologiques — Orbes & interprétation",
    description:
      "Conjonction, sextile, carré, trigone, opposition : définitions, orbes, logique, effets, exemples et méthode d'interprétation claire.",
    articleSection: "Astrologie",
  },
  hero: {
    eyebrow: "Cours d'astrologie — Aspects",
    h1: "Conjonction, sextile, carré, trigone, opposition…",
    intro: (
      <>
        Les aspects décrivent <span className="text-text">la relation</span> entre deux planètes :
        coopération, tension, opportunité, blocage ou maturation. Ici : définitions, orbes, logique
        et méthode d'interprétation (natal & transits).
      </>
    ),
    tocLabel: "Sommaire",
  },
  defBox: {
    label: "Définition",
    body: (
      <>
        Un <strong>aspect astrologique</strong> est l'angle formé entre deux planètes dans un{" "}
        <Link href="/#theme-natal">thème natal</Link> ou en transit : il décrit la nature de leur
        relation (harmonie, tension, fusion) et influence directement l'interprétation du thème.
      </>
    ),
  },
  appIntro: (
    <>
      <strong>Les aspects en astrologie</strong> sont le coeur de toute interprétation, pourtant ils
      restent souvent mal compris par les débutants. Quelle est la différence entre un trigone et un
      sextile ? Comment calculer un orbe ? Cette page vous guide pas à pas à travers les 5 aspects
      majeurs et le quinconce, avec des définitions claires, des orbes précis et une méthode
      d'interprétation applicable immédiatement.
    </>
  ),
  recap: {
    card1Title: "Qu'est-ce qu'un aspect en astrologie ?",
    card1Intro: (
      <>
        Un aspect n'est pas “bien” ou “mal” : il décrit une <span className="text-text">dynamique</span>.
        La qualité vient de la façon dont on l'intègre (signe, maison, dignités, aspects secondaires,
        conscience).
      </>
    ),
    card1Items: [
      "Harmonique = facilite, ouvre, soutient.",
      "Tendu = pousse, teste, structure, fait grandir.",
      "Neutre = amplifie / demande un focus (souvent la conjonction).",
    ],
    card2Title: "Comment calculer les orbes des aspects astrologiques ?",
    card2Intro:
      "Plus l'orbe est serré, plus l'aspect est puissant. En transit, on garde des orbes plus stricts.",
    natalLabel: "Natal",
    natalVal: "tolère plus large (selon planètes)",
    transitLabel: "Transits",
    transitVal: "privilégie serré (0–2°)",
  },
  tableTitle: "Quels sont les 5 aspects majeurs en astrologie ?",
  tableHeaders: { aspect: "Aspect", angle: "Angle", type: "Type", tone: "Tonalité", keywords: "Mots-clés" },
  card: {
    eyebrow: "Aspect",
    angleLabel: "Angle",
    defTitle: "Définition",
    whyTitle: "Pourquoi ça marche comme ça ?",
    orbTitle: "Orbes (repères)",
    natalLabel: "Natal",
    transitLabel: "Transits",
    howTitle: "Comment lire",
    examplesTitle: "Exemples",
    pitfallsTitle: "Erreurs fréquentes",
    topLabel: "↑ Haut",
  },
  kindLabel: { majeur: "majeur", mineur: "mineur" },
  toneLabel: { harmonique: "harmonique", tendu: "tendu", neutre: "neutre" },
  footer: {
    next: (
      <>
        Étape suivante : appliquer les aspects aux <span className="text-text">transits</span> (cas
        pratiques).
      </>
    ),
    signs: "Signes",
    planets: "Planètes",
    houses: "Maisons",
  },
  faqTitle: "Questions fréquentes sur les aspects astrologiques",
  faq: [
    {
      q: "Quelle est la différence entre un trigone et un sextile en astrologie ?",
      a: (
        <>
          Le <strong>trigone</strong> (120°) est un aspect harmonique très fluide, souvent lié à un
          talent naturel. Le <strong>sextile</strong> (60°) est aussi harmonique mais demande une
          action consciente pour en tirer parti. Les deux facilitent la relation entre les{" "}
          <Link href="/#planetes">planètes</Link> concernées, mais le trigone agit de manière plus
          automatique.
        </>
      ),
    },
    {
      q: "Un carré en astrologie est-il toujours négatif ?",
      a: (
        <>
          Non. Le <strong>carré</strong> (90°) crée de la tension, mais cette tension est un moteur
          de croissance. Un carré bien intégré développe de la force, de la compétence et de la
          résilience. C'est l'aspect le plus formateur du{" "}
          <Link href="/#theme-natal">thème natal</Link>.
        </>
      ),
    },
    {
      q: "Comment lire les orbes des aspects dans un thème natal ?",
      a: (
        <>
          L'<strong>orbe</strong> est la marge de tolérance autour de l'angle exact. Plus l'orbe est
          serré (proche de 0°), plus l'aspect est puissant. En natal, on tolère jusqu'à 8-10° pour
          les aspects majeurs impliquant le <strong>Soleil</strong> ou la <strong>Lune</strong>. En{" "}
          <Link href="/transits">transit</Link>, on reste à 1-2° pour une lecture précise.
        </>
      ),
    },
    {
      q: "Qu'est-ce qu'une conjonction en astrologie et comment l'interpréter ?",
      a: (
        <>
          La <strong>conjonction</strong> (0°) fusionne deux planètes au même point du zodiaque.
          Leurs fonctions se mélangent et s'intensifient. Elle n'est ni positive ni négative : elle
          est puissante. L'interprétation dépend des <Link href="/#planetes">planètes</Link>{" "}
          impliquées, du <Link href="/#zodiaque">signe</Link> et de la{" "}
          <Link href="/#maisons">maison</Link> concernée.
        </>
      ),
    },
  ],
  faqJsonLd: [
    {
      name: "Quelle est la différence entre un trigone et un sextile en astrologie ?",
      text: "Le trigone (120°) est un aspect harmonique très fluide, souvent lié à un talent naturel. Le sextile (60°) est aussi harmonique mais demande une action consciente pour en tirer parti. Les deux facilitent la relation entre les planètes concernées, mais le trigone agit de manière plus automatique.",
    },
    {
      name: "Un carré en astrologie est-il toujours négatif ?",
      text: "Non. Le carré (90°) crée de la tension, mais cette tension est un moteur de croissance. Un carré bien intégré développe de la force, de la compétence et de la résilience. C'est l'aspect le plus formateur du thème natal.",
    },
    {
      name: "Comment lire les orbes des aspects dans un thème natal ?",
      text: "L'orbe est la marge de tolérance autour de l'angle exact. Plus l'orbe est serré (proche de 0°), plus l'aspect est puissant. En natal, on tolère jusqu'à 8-10° pour les aspects majeurs impliquant le Soleil ou la Lune. En transit, on reste à 1-2° pour une lecture précise.",
    },
    {
      name: "Qu'est-ce qu'une conjonction en astrologie et comment l'interpréter ?",
      text: "La conjonction (0°) fusionne deux planètes au même point du zodiaque. Leurs fonctions se mélangent et s'intensifient. Elle n'est ni positive ni négative : elle est puissante. L'interprétation dépend des planètes impliquées, du signe et de la maison concernée.",
    },
  ],
  aspects: [
    {
      slug: "conjonction",
      nom: "Conjonction",
      angle: "0°",
      kind: "majeur",
      tone: "neutre",
      keywords: ["fusion", "intensification", "focus", "nouveau cycle"],
      definition:
        "Deux planètes sont au même endroit (ou très proches) : leurs fonctions se mélangent. La conjonction amplifie, concentre et “oblige” à intégrer les deux énergies ensemble.",
      why:
        "À 0°, les symboles n'ont plus de distance : on ne peut pas les séparer. Cela crée un point de densité psychique (natal) ou un événement/virage (transit).",
      orbs: {
        natal: "jusqu'à ~8° (10° si Soleil/Lune)",
        transit: "plutôt serré : ~0–2° (3° max si fort)",
        notes: [
          "Plus l'orbe est serré, plus l'aspect est “audible”.",
          "Une conjonction Soleil/Lune est souvent très structurante.",
        ],
      },
      howToRead: [
        "Identifier les 2 fonctions (planètes) + leur nature (personnelle/sociale/transpersonnelle).",
        "Regarder le signe (style) et la maison (domaine de vie).",
        "Se demander : “qui mène ?” (dignités, vitesse, aspects supplémentaires).",
        "En transit : repérer le thème activé (maison touchée, maîtres concernés).",
      ],
      examples: [
        "Mercure–Mars : parole directe, esprit combatif, décision rapide (ou nervosité).",
        "Vénus–Neptune : idéal amoureux, inspiration artistique (ou illusions).",
        "Saturne–Soleil : consolidation, responsabilités, maturité (ou lourdeur).",
      ],
      pitfalls: [
        "Croire que c'est “bon” ou “mauvais” : c'est surtout puissant.",
        "Oublier l'orbe (une conjonction large peut être secondaire).",
        "Ne pas distinguer natal (structure) vs transit (période).",
      ],
    },
    {
      slug: "sextile",
      nom: "Sextile",
      angle: "60°",
      kind: "majeur",
      tone: "harmonique",
      keywords: ["opportunité", "coopération", "fluidité", "talent"],
      definition:
        "Le sextile crée une facilité dynamique : les planètes se comprennent et ouvrent une porte. C'est souvent un potentiel qui demande un petit effort pour être saisi.",
      why:
        "À 60°, les énergies sont compatibles : elles dialoguent. Le sextile est moins “automatique” que le trigone : il récompense l'initiative.",
      orbs: {
        natal: "~3–5°",
        transit: "~1–2°",
        notes: ["Aspect d'opportunité : il agit si on s'en sert.", "Très utile pour la stratégie et le timing."],
      },
      howToRead: [
        "Repérer l'opportunité : quel domaine (maisons) et quel “outil” (planètes) ?",
        "Traduire en action concrète : qu'est-ce que je peux faire maintenant ?",
        "En transit : observer les synchronicités, les rencontres utiles, les portes qui s'ouvrent.",
      ],
      examples: [
        "Mercure sextile Jupiter : idées larges, études, chance dans les démarches.",
        "Mars sextile Saturne : discipline, efficacité, travail solide.",
        "Vénus sextile Uranus : renouveau relationnel, créativité, surprises agréables.",
      ],
      pitfalls: [
        "Attendre que “ça tombe du ciel” : le sextile demande d'agir.",
        "Le surestimer : c'est un levier, pas un tsunami.",
      ],
    },
    {
      slug: "carre",
      nom: "Carré",
      angle: "90°",
      kind: "majeur",
      tone: "tendu",
      keywords: ["friction", "défi", "croissance", "réajustement"],
      definition:
        "Le carré met les planètes en tension : elles veulent des choses différentes, au même moment. Ça pousse à agir, à trancher, à évoluer.",
      why:
        "À 90°, c'est une différence de rythme et de méthode : la tension est un moteur. Le carré crée de la croissance par confrontation et ajustement.",
      orbs: {
        natal: "~5–7°",
        transit: "~1–2° (3° si très marquant)",
        notes: ["Un carré bien intégré devient une force : compétence, endurance, maîtrise."],
      },
      howToRead: [
        "Nommer le conflit : quelles fonctions se contredisent ?",
        "Voir le terrain : maisons impliquées → où ça coince ?",
        "Chercher la 3e voie : une règle, une stratégie, une maturité.",
        "En transit : réduire la dispersion et choisir une priorité.",
      ],
      examples: [
        "Soleil carré Saturne : pression, maturité, test de solidité.",
        "Vénus carré Mars : désir vs harmonie, tension relationnelle créatrice.",
        "Mercure carré Neptune : confusion mentale, besoin de vérifier les faits.",
      ],
      pitfalls: [
        "Le vivre comme une punition : c'est un entraînement.",
        "Partir en réaction impulsive : le carré veut une décision consciente.",
      ],
    },
    {
      slug: "trigone",
      nom: "Trigone",
      angle: "120°",
      kind: "majeur",
      tone: "harmonique",
      keywords: ["aisance", "talent", "fluidité", "alignement"],
      definition:
        "Le trigone indique une circulation très fluide : les planètes s'entraident naturellement. Souvent un talent, une facilité, un “couloir de réussite”.",
      why:
        "À 120°, les énergies sont du même élément (souvent) : elles parlent le même langage. Ça coule — parfois au point d'oublier de développer.",
      orbs: {
        natal: "~6–8°",
        transit: "~1–2°",
        notes: ["Un trigone est puissant, mais peut devenir “paresseux” si on ne le cultive pas."],
      },
      howToRead: [
        "Identifier le talent : qu'est-ce qui se fait facilement ?",
        "Mettre un objectif : transformer l'aisance en résultat.",
        "En transit : excellent pour lancer, harmoniser, finaliser.",
      ],
      examples: [
        "Soleil trigone Jupiter : confiance, expansion, optimisme, soutien.",
        "Lune trigone Vénus : douceur relationnelle, sens du lien.",
        "Mars trigone Uranus : audace, innovation, efficacité rapide.",
      ],
      pitfalls: [
        "Confondre facilité et destin : il faut quand même agir.",
        "Ne pas muscler ce qui est “facile” : sinon stagnation.",
      ],
    },
    {
      slug: "opposition",
      nom: "Opposition",
      angle: "180°",
      kind: "majeur",
      tone: "tendu",
      keywords: ["miroir", "polarité", "projection", "équilibre"],
      definition:
        "L'opposition met face à face deux énergies : on oscille, on projette, on apprend par l'autre. Elle demande un équilibre conscient.",
      why:
        "À 180°, c'est l'axe : deux pôles se répondent. L'opposition révèle ce qui manque d'intégration et pousse à la coopération plutôt qu'au bras de fer.",
      orbs: {
        natal: "~6–8°",
        transit: "~1–2° (3° si fort)",
        notes: ["Souvent visible dans le relationnel : “l'autre me montre quelque chose”."],
      },
      howToRead: [
        "Nommer les deux pôles (planètes) et leur besoin.",
        "Identifier la projection : qu'est-ce que je mets sur l'autre ?",
        "Chercher la médiation : rythme, règles, alternance, dialogue.",
        "En transit : négociation, choix, repositionnement.",
      ],
      examples: [
        "Soleil opposition Lune : équilibre vie perso/vie publique, besoins vs volonté.",
        "Mars opposition Saturne : accélérer vs freiner, apprentissage de la stratégie.",
        "Vénus opposition Uranus : besoin de liberté vs besoin de lien.",
      ],
      pitfalls: [
        "Rester dans le ping-pong : un jour l'un, un jour l'autre.",
        "Chercher un coupable : l'opposition veut une intégration.",
      ],
    },
    {
      slug: "quinconce",
      nom: "Quinconce",
      angle: "150°",
      kind: "mineur",
      tone: "neutre",
      keywords: ["ajustement", "inconfort", "réglage fin", "hygiène"],
      definition:
        "Le quinconce demande un ajustement : les planètes ne se comprennent pas naturellement. On progresse par réglages, organisation et écoute du corps/du réel.",
      why:
        "À 150°, les symboles sont “hors phase”. C'est moins spectaculaire, mais très parlant dans les détails : habitudes, santé, méthode, priorités.",
      orbs: {
        natal: "~2–3°",
        transit: "~0–1°",
        notes: ["Aspect redoutable pour affiner une pratique ou corriger une dérive."],
      },
      howToRead: [
        "Repérer ce qui est mal réglé : où je compense ?",
        "Simplifier : une action petite mais répétée.",
        "En transit : bon pour corriger, réorganiser, améliorer la routine.",
      ],
      examples: [
        "Mercure quinconce Saturne : clarifier, structurer, réduire le bruit mental.",
        "Vénus quinconce Pluton : régler un attachement, un rapport au contrôle.",
      ],
      pitfalls: ["Le prendre pour un “drame” : c'est souvent un réglage fin."],
    },
  ],
};

/* ============================== EN ============================== */
const en: AspectsContent = {
  meta: {
    title: "Astrological aspects — Orbs & interpretation",
    description:
      "Conjunction, sextile, square, trine, opposition: definitions, orbs, logic, effects, examples and a clear interpretation method.",
  },
  jsonld: {
    headline: "Astrological aspects — Orbs & interpretation",
    description:
      "Conjunction, sextile, square, trine, opposition: definitions, orbs, logic, effects, examples and a clear interpretation method.",
    articleSection: "Astrology",
  },
  hero: {
    eyebrow: "Astrology course — Aspects",
    h1: "Conjunction, sextile, square, trine, opposition…",
    intro: (
      <>
        Aspects describe <span className="text-text">the relationship</span> between two planets:
        cooperation, tension, opportunity, blockage or maturation. Here: definitions, orbs, logic and
        an interpretation method (natal & transits).
      </>
    ),
    tocLabel: "Contents",
  },
  defBox: {
    label: "Definition",
    body: (
      <>
        An <strong>astrological aspect</strong> is the angle formed between two planets in a{" "}
        <Link href="/#theme-natal">natal chart</Link> or in transit: it describes the nature of their
        relationship (harmony, tension, fusion) and directly shapes the interpretation of the chart.
      </>
    ),
  },
  appIntro: (
    <>
      <strong>Aspects in astrology</strong> are the heart of every interpretation, yet they remain
      often misunderstood by beginners. What is the difference between a trine and a sextile? How do
      you calculate an orb? This page guides you step by step through the 5 major aspects and the
      quincunx, with clear definitions, precise orbs and an interpretation method you can apply right
      away.
    </>
  ),
  recap: {
    card1Title: "What is an aspect in astrology?",
    card1Intro: (
      <>
        An aspect is not “good” or “bad”: it describes a <span className="text-text">dynamic</span>.
        Its quality comes from how you integrate it (sign, house, dignities, secondary aspects,
        awareness).
      </>
    ),
    card1Items: [
      "Harmonious = eases, opens, supports.",
      "Tense = pushes, tests, structures, makes you grow.",
      "Neutral = amplifies / demands focus (often the conjunction).",
    ],
    card2Title: "How do you calculate the orbs of astrological aspects?",
    card2Intro:
      "The tighter the orb, the more powerful the aspect. In transit, keep stricter orbs.",
    natalLabel: "Natal",
    natalVal: "tolerates wider (depending on planets)",
    transitLabel: "Transits",
    transitVal: "favour tight (0–2°)",
  },
  tableTitle: "What are the 5 major aspects in astrology?",
  tableHeaders: { aspect: "Aspect", angle: "Angle", type: "Type", tone: "Tone", keywords: "Keywords" },
  card: {
    eyebrow: "Aspect",
    angleLabel: "Angle",
    defTitle: "Definition",
    whyTitle: "Why it works this way",
    orbTitle: "Orbs (guidelines)",
    natalLabel: "Natal",
    transitLabel: "Transits",
    howTitle: "How to read",
    examplesTitle: "Examples",
    pitfallsTitle: "Common mistakes",
    topLabel: "↑ Top",
  },
  kindLabel: { majeur: "major", mineur: "minor" },
  toneLabel: { harmonique: "harmonious", tendu: "tense", neutre: "neutral" },
  footer: {
    next: (
      <>
        Next step: apply the aspects to <span className="text-text">transits</span> (practical cases).
      </>
    ),
    signs: "Signs",
    planets: "Planets",
    houses: "Houses",
  },
  faqTitle: "Frequently asked questions about astrological aspects",
  faq: [
    {
      q: "What is the difference between a trine and a sextile in astrology?",
      a: (
        <>
          The <strong>trine</strong> (120°) is a very fluid harmonious aspect, often linked to a
          natural talent. The <strong>sextile</strong> (60°) is also harmonious but requires
          conscious action to make the most of it. Both ease the relationship between the{" "}
          <Link href="/#planetes">planets</Link> involved, but the trine acts more automatically.
        </>
      ),
    },
    {
      q: "Is a square in astrology always negative?",
      a: (
        <>
          No. The <strong>square</strong> (90°) creates tension, but that tension is an engine of
          growth. A well-integrated square develops strength, competence and resilience. It is the
          most formative aspect of the <Link href="/#theme-natal">natal chart</Link>.
        </>
      ),
    },
    {
      q: "How do you read the orbs of aspects in a natal chart?",
      a: (
        <>
          The <strong>orb</strong> is the margin of tolerance around the exact angle. The tighter the
          orb (close to 0°), the more powerful the aspect. In natal charts, up to 8–10° is tolerated
          for major aspects involving the <strong>Sun</strong> or the <strong>Moon</strong>. In{" "}
          <Link href="/transits">transit</Link>, keep to 1–2° for a precise reading.
        </>
      ),
    },
    {
      q: "What is a conjunction in astrology and how do you interpret it?",
      a: (
        <>
          The <strong>conjunction</strong> (0°) merges two planets at the same point of the zodiac.
          Their functions blend and intensify. It is neither positive nor negative: it is powerful.
          The interpretation depends on the <Link href="/#planetes">planets</Link> involved, the{" "}
          <Link href="/#zodiaque">sign</Link> and the <Link href="/#maisons">house</Link> concerned.
        </>
      ),
    },
  ],
  faqJsonLd: [
    {
      name: "What is the difference between a trine and a sextile in astrology?",
      text: "The trine (120°) is a very fluid harmonious aspect, often linked to a natural talent. The sextile (60°) is also harmonious but requires conscious action to make the most of it. Both ease the relationship between the planets involved, but the trine acts more automatically.",
    },
    {
      name: "Is a square in astrology always negative?",
      text: "No. The square (90°) creates tension, but that tension is an engine of growth. A well-integrated square develops strength, competence and resilience. It is the most formative aspect of the natal chart.",
    },
    {
      name: "How do you read the orbs of aspects in a natal chart?",
      text: "The orb is the margin of tolerance around the exact angle. The tighter the orb (close to 0°), the more powerful the aspect. In natal charts, up to 8–10° is tolerated for major aspects involving the Sun or the Moon. In transit, keep to 1–2° for a precise reading.",
    },
    {
      name: "What is a conjunction in astrology and how do you interpret it?",
      text: "The conjunction (0°) merges two planets at the same point of the zodiac. Their functions blend and intensify. It is neither positive nor negative: it is powerful. The interpretation depends on the planets involved, the sign and the house concerned.",
    },
  ],
  aspects: [
    {
      slug: "conjonction",
      nom: "Conjunction",
      angle: "0°",
      kind: "majeur",
      tone: "neutre",
      keywords: ["fusion", "intensification", "focus", "new cycle"],
      definition:
        "Two planets are in the same place (or very close): their functions blend together. The conjunction amplifies, concentrates and “forces” you to integrate both energies as one.",
      why:
        "At 0°, the symbols no longer have any distance: they cannot be separated. This creates a point of psychic density (natal) or an event/turning point (transit).",
      orbs: {
        natal: "up to ~8° (10° for Sun/Moon)",
        transit: "rather tight: ~0–2° (3° max if strong)",
        notes: [
          "The tighter the orb, the more “audible” the aspect.",
          "A Sun/Moon conjunction is often very structuring.",
        ],
      },
      howToRead: [
        "Identify the 2 functions (planets) + their nature (personal/social/transpersonal).",
        "Look at the sign (style) and the house (area of life).",
        "Ask yourself: “who leads?” (dignities, speed, additional aspects).",
        "In transit: spot the activated theme (house touched, rulers concerned).",
      ],
      examples: [
        "Mercury–Mars: direct speech, combative mind, fast decision (or nervousness).",
        "Venus–Neptune: romantic ideal, artistic inspiration (or illusions).",
        "Saturn–Sun: consolidation, responsibilities, maturity (or heaviness).",
      ],
      pitfalls: [
        "Thinking it is “good” or “bad”: it is above all powerful.",
        "Forgetting the orb (a wide conjunction can be secondary).",
        "Not distinguishing natal (structure) from transit (period).",
      ],
    },
    {
      slug: "sextile",
      nom: "Sextile",
      angle: "60°",
      kind: "majeur",
      tone: "harmonique",
      keywords: ["opportunity", "cooperation", "fluidity", "talent"],
      definition:
        "The sextile creates a dynamic ease: the planets understand each other and open a door. It is often a potential that requires a small effort to be seized.",
      why:
        "At 60°, the energies are compatible: they hold a dialogue. The sextile is less “automatic” than the trine: it rewards initiative.",
      orbs: {
        natal: "~3–5°",
        transit: "~1–2°",
        notes: ["An aspect of opportunity: it works if you use it.", "Very useful for strategy and timing."],
      },
      howToRead: [
        "Spot the opportunity: which area (houses) and which “tool” (planets)?",
        "Translate into concrete action: what can I do now?",
        "In transit: observe synchronicities, useful encounters, doors that open.",
      ],
      examples: [
        "Mercury sextile Jupiter: broad ideas, studies, luck in undertakings.",
        "Mars sextile Saturn: discipline, efficiency, solid work.",
        "Venus sextile Uranus: relational renewal, creativity, pleasant surprises.",
      ],
      pitfalls: [
        "Waiting for it to “fall from the sky”: the sextile requires action.",
        "Overestimating it: it is a lever, not a tsunami.",
      ],
    },
    {
      slug: "carre",
      nom: "Square",
      angle: "90°",
      kind: "majeur",
      tone: "tendu",
      keywords: ["friction", "challenge", "growth", "readjustment"],
      definition:
        "The square puts the planets in tension: they want different things at the same time. It pushes you to act, to decide, to evolve.",
      why:
        "At 90°, it is a difference of rhythm and method: the tension is an engine. The square creates growth through confrontation and adjustment.",
      orbs: {
        natal: "~5–7°",
        transit: "~1–2° (3° if very marked)",
        notes: ["A well-integrated square becomes a strength: competence, endurance, mastery."],
      },
      howToRead: [
        "Name the conflict: which functions contradict each other?",
        "See the ground: houses involved → where does it jam?",
        "Look for the third way: a rule, a strategy, a maturity.",
        "In transit: reduce scattering and choose one priority.",
      ],
      examples: [
        "Sun square Saturn: pressure, maturity, test of solidity.",
        "Venus square Mars: desire vs harmony, creative relational tension.",
        "Mercury square Neptune: mental confusion, need to check the facts.",
      ],
      pitfalls: [
        "Experiencing it as a punishment: it is a training.",
        "Reacting impulsively: the square wants a conscious decision.",
      ],
    },
    {
      slug: "trigone",
      nom: "Trine",
      angle: "120°",
      kind: "majeur",
      tone: "harmonique",
      keywords: ["ease", "talent", "fluidity", "alignment"],
      definition:
        "The trine indicates a very fluid flow: the planets help each other naturally. Often a talent, an ease, a “corridor of success”.",
      why:
        "At 120°, the energies are (often) of the same element: they speak the same language. It flows — sometimes so much that one forgets to develop it.",
      orbs: {
        natal: "~6–8°",
        transit: "~1–2°",
        notes: ["A trine is powerful, but can become “lazy” if you do not cultivate it."],
      },
      howToRead: [
        "Identify the talent: what comes easily?",
        "Set a goal: turn the ease into a result.",
        "In transit: excellent for launching, harmonising, finalising.",
      ],
      examples: [
        "Sun trine Jupiter: confidence, expansion, optimism, support.",
        "Moon trine Venus: relational gentleness, a sense of connection.",
        "Mars trine Uranus: boldness, innovation, fast efficiency.",
      ],
      pitfalls: [
        "Confusing ease with destiny: you still have to act.",
        "Not strengthening what is “easy”: otherwise, stagnation.",
      ],
    },
    {
      slug: "opposition",
      nom: "Opposition",
      angle: "180°",
      kind: "majeur",
      tone: "tendu",
      keywords: ["mirror", "polarity", "projection", "balance"],
      definition:
        "The opposition sets two energies face to face: you oscillate, you project, you learn through the other. It demands a conscious balance.",
      why:
        "At 180°, it is the axis: two poles answer each other. The opposition reveals what lacks integration and pushes toward cooperation rather than a tug-of-war.",
      orbs: {
        natal: "~6–8°",
        transit: "~1–2° (3° if strong)",
        notes: ["Often visible in relationships: “the other shows me something”."],
      },
      howToRead: [
        "Name the two poles (planets) and their need.",
        "Identify the projection: what am I placing onto the other?",
        "Look for mediation: rhythm, rules, alternation, dialogue.",
        "In transit: negotiation, choice, repositioning.",
      ],
      examples: [
        "Sun opposition Moon: balance of private/public life, needs vs will.",
        "Mars opposition Saturn: accelerate vs brake, learning strategy.",
        "Venus opposition Uranus: need for freedom vs need for connection.",
      ],
      pitfalls: [
        "Staying in the ping-pong: one day this, one day that.",
        "Looking for someone to blame: the opposition wants integration.",
      ],
    },
    {
      slug: "quinconce",
      nom: "Quincunx",
      angle: "150°",
      kind: "mineur",
      tone: "neutre",
      keywords: ["adjustment", "discomfort", "fine-tuning", "hygiene"],
      definition:
        "The quincunx calls for adjustment: the planets do not understand each other naturally. You progress through tweaks, organisation and listening to the body/to reality.",
      why:
        "At 150°, the symbols are “out of phase”. It is less spectacular, but very telling in the details: habits, health, method, priorities.",
      orbs: {
        natal: "~2–3°",
        transit: "~0–1°",
        notes: ["A formidable aspect for refining a practice or correcting a drift."],
      },
      howToRead: [
        "Spot what is poorly tuned: where am I compensating?",
        "Simplify: a small but repeated action.",
        "In transit: good for correcting, reorganising, improving the routine.",
      ],
      examples: [
        "Mercury quincunx Saturn: clarify, structure, reduce mental noise.",
        "Venus quincunx Pluto: adjust an attachment, a relationship to control.",
      ],
      pitfalls: ["Taking it for a “drama”: it is often a fine-tuning."],
    },
  ],
};

/* ============================== ES ============================== */
const es: AspectsContent = {
  meta: {
    title: "Aspectos astrológicos — Orbes e interpretación",
    description:
      "Conjunción, sextil, cuadratura, trígono, oposición: definiciones, orbes, lógica, efectos, ejemplos y un método de interpretación claro.",
  },
  jsonld: {
    headline: "Aspectos astrológicos — Orbes e interpretación",
    description:
      "Conjunción, sextil, cuadratura, trígono, oposición: definiciones, orbes, lógica, efectos, ejemplos y un método de interpretación claro.",
    articleSection: "Astrología",
  },
  hero: {
    eyebrow: "Curso de astrología — Aspectos",
    h1: "Conjunción, sextil, cuadratura, trígono, oposición…",
    intro: (
      <>
        Los aspectos describen <span className="text-text">la relación</span> entre dos planetas:
        cooperación, tensión, oportunidad, bloqueo o maduración. Aquí: definiciones, orbes, lógica y
        método de interpretación (natal y tránsitos).
      </>
    ),
    tocLabel: "Índice",
  },
  defBox: {
    label: "Definición",
    body: (
      <>
        Un <strong>aspecto astrológico</strong> es el ángulo formado entre dos planetas en una{" "}
        <Link href="/#theme-natal">carta natal</Link> o en tránsito: describe la naturaleza de su
        relación (armonía, tensión, fusión) e influye directamente en la interpretación de la carta.
      </>
    ),
  },
  appIntro: (
    <>
      <strong>Los aspectos en astrología</strong> son el corazón de toda interpretación y, sin
      embargo, los principiantes suelen entenderlos mal. ¿Cuál es la diferencia entre un trígono y un
      sextil? ¿Cómo se calcula un orbe? Esta página te guía paso a paso por los 5 aspectos mayores y
      el quincuncio, con definiciones claras, orbes precisos y un método de interpretación aplicable
      de inmediato.
    </>
  ),
  recap: {
    card1Title: "¿Qué es un aspecto en astrología?",
    card1Intro: (
      <>
        Un aspecto no es “bueno” ni “malo”: describe una <span className="text-text">dinámica</span>.
        La calidad viene de cómo lo integras (signo, casa, dignidades, aspectos secundarios,
        conciencia).
      </>
    ),
    card1Items: [
      "Armónico = facilita, abre, sostiene.",
      "Tenso = empuja, pone a prueba, estructura, hace crecer.",
      "Neutro = amplifica / exige un foco (a menudo la conjunción).",
    ],
    card2Title: "¿Cómo se calculan los orbes de los aspectos astrológicos?",
    card2Intro:
      "Cuanto más cerrado es el orbe, más potente es el aspecto. En tránsito se mantienen orbes más estrictos.",
    natalLabel: "Natal",
    natalVal: "tolera más amplio (según los planetas)",
    transitLabel: "Tránsitos",
    transitVal: "prefiere cerrado (0–2°)",
  },
  tableTitle: "¿Cuáles son los 5 aspectos mayores en astrología?",
  tableHeaders: { aspect: "Aspecto", angle: "Ángulo", type: "Tipo", tone: "Tonalidad", keywords: "Palabras clave" },
  card: {
    eyebrow: "Aspecto",
    angleLabel: "Ángulo",
    defTitle: "Definición",
    whyTitle: "Por qué funciona así",
    orbTitle: "Orbes (referencias)",
    natalLabel: "Natal",
    transitLabel: "Tránsitos",
    howTitle: "Cómo leer",
    examplesTitle: "Ejemplos",
    pitfallsTitle: "Errores frecuentes",
    topLabel: "↑ Arriba",
  },
  kindLabel: { majeur: "mayor", mineur: "menor" },
  toneLabel: { harmonique: "armónico", tendu: "tenso", neutre: "neutro" },
  footer: {
    next: (
      <>
        Siguiente paso: aplicar los aspectos a los <span className="text-text">tránsitos</span> (casos
        prácticos).
      </>
    ),
    signs: "Signos",
    planets: "Planetas",
    houses: "Casas",
  },
  faqTitle: "Preguntas frecuentes sobre los aspectos astrológicos",
  faq: [
    {
      q: "¿Cuál es la diferencia entre un trígono y un sextil en astrología?",
      a: (
        <>
          El <strong>trígono</strong> (120°) es un aspecto armónico muy fluido, a menudo ligado a un
          talento natural. El <strong>sextil</strong> (60°) también es armónico, pero requiere una
          acción consciente para aprovecharlo. Ambos facilitan la relación entre los{" "}
          <Link href="/#planetes">planetas</Link> implicados, pero el trígono actúa de forma más
          automática.
        </>
      ),
    },
    {
      q: "¿Una cuadratura en astrología es siempre negativa?",
      a: (
        <>
          No. La <strong>cuadratura</strong> (90°) crea tensión, pero esa tensión es un motor de
          crecimiento. Una cuadratura bien integrada desarrolla fuerza, competencia y resiliencia. Es
          el aspecto más formativo de la <Link href="/#theme-natal">carta natal</Link>.
        </>
      ),
    },
    {
      q: "¿Cómo se leen los orbes de los aspectos en una carta natal?",
      a: (
        <>
          El <strong>orbe</strong> es el margen de tolerancia alrededor del ángulo exacto. Cuanto más
          cerrado es el orbe (cerca de 0°), más potente es el aspecto. En natal se tolera hasta 8–10°
          para los aspectos mayores que implican al <strong>Sol</strong> o a la <strong>Luna</strong>.
          En <Link href="/transits">tránsito</Link>, mantén 1–2° para una lectura precisa.
        </>
      ),
    },
    {
      q: "¿Qué es una conjunción en astrología y cómo se interpreta?",
      a: (
        <>
          La <strong>conjunción</strong> (0°) fusiona dos planetas en el mismo punto del zodíaco. Sus
          funciones se mezclan y se intensifican. No es ni positiva ni negativa: es potente. La
          interpretación depende de los <Link href="/#planetes">planetas</Link> implicados, del{" "}
          <Link href="/#zodiaque">signo</Link> y de la <Link href="/#maisons">casa</Link> en cuestión.
        </>
      ),
    },
  ],
  faqJsonLd: [
    {
      name: "¿Cuál es la diferencia entre un trígono y un sextil en astrología?",
      text: "El trígono (120°) es un aspecto armónico muy fluido, a menudo ligado a un talento natural. El sextil (60°) también es armónico, pero requiere una acción consciente para aprovecharlo. Ambos facilitan la relación entre los planetas implicados, pero el trígono actúa de forma más automática.",
    },
    {
      name: "¿Una cuadratura en astrología es siempre negativa?",
      text: "No. La cuadratura (90°) crea tensión, pero esa tensión es un motor de crecimiento. Una cuadratura bien integrada desarrolla fuerza, competencia y resiliencia. Es el aspecto más formativo de la carta natal.",
    },
    {
      name: "¿Cómo se leen los orbes de los aspectos en una carta natal?",
      text: "El orbe es el margen de tolerancia alrededor del ángulo exacto. Cuanto más cerrado es el orbe (cerca de 0°), más potente es el aspecto. En natal se tolera hasta 8–10° para los aspectos mayores que implican al Sol o a la Luna. En tránsito, mantén 1–2° para una lectura precisa.",
    },
    {
      name: "¿Qué es una conjunción en astrología y cómo se interpreta?",
      text: "La conjunción (0°) fusiona dos planetas en el mismo punto del zodíaco. Sus funciones se mezclan y se intensifican. No es ni positiva ni negativa: es potente. La interpretación depende de los planetas implicados, del signo y de la casa en cuestión.",
    },
  ],
  aspects: [
    {
      slug: "conjonction",
      nom: "Conjunción",
      angle: "0°",
      kind: "majeur",
      tone: "neutre",
      keywords: ["fusión", "intensificación", "foco", "nuevo ciclo"],
      definition:
        "Dos planetas están en el mismo lugar (o muy cerca): sus funciones se mezclan. La conjunción amplifica, concentra y “obliga” a integrar las dos energías juntas.",
      why:
        "A 0°, los símbolos ya no tienen distancia: no se pueden separar. Esto crea un punto de densidad psíquica (natal) o un acontecimiento/giro (tránsito).",
      orbs: {
        natal: "hasta ~8° (10° si Sol/Luna)",
        transit: "más bien cerrado: ~0–2° (3° máx. si es fuerte)",
        notes: [
          "Cuanto más cerrado es el orbe, más “audible” es el aspecto.",
          "Una conjunción Sol/Luna suele ser muy estructurante.",
        ],
      },
      howToRead: [
        "Identificar las 2 funciones (planetas) + su naturaleza (personal/social/transpersonal).",
        "Mirar el signo (estilo) y la casa (ámbito de vida).",
        "Preguntarse: “¿quién manda?” (dignidades, velocidad, aspectos adicionales).",
        "En tránsito: detectar el tema activado (casa tocada, regentes implicados).",
      ],
      examples: [
        "Mercurio–Marte: palabra directa, mente combativa, decisión rápida (o nerviosismo).",
        "Venus–Neptuno: ideal amoroso, inspiración artística (o ilusiones).",
        "Saturno–Sol: consolidación, responsabilidades, madurez (o pesadez).",
      ],
      pitfalls: [
        "Creer que es “buena” o “mala”: ante todo es potente.",
        "Olvidar el orbe (una conjunción amplia puede ser secundaria).",
        "No distinguir natal (estructura) de tránsito (periodo).",
      ],
    },
    {
      slug: "sextile",
      nom: "Sextil",
      angle: "60°",
      kind: "majeur",
      tone: "harmonique",
      keywords: ["oportunidad", "cooperación", "fluidez", "talento"],
      definition:
        "El sextil crea una facilidad dinámica: los planetas se entienden y abren una puerta. A menudo es un potencial que requiere un pequeño esfuerzo para ser aprovechado.",
      why:
        "A 60°, las energías son compatibles: dialogan. El sextil es menos “automático” que el trígono: recompensa la iniciativa.",
      orbs: {
        natal: "~3–5°",
        transit: "~1–2°",
        notes: ["Aspecto de oportunidad: actúa si lo aprovechas.", "Muy útil para la estrategia y el timing."],
      },
      howToRead: [
        "Detectar la oportunidad: ¿qué ámbito (casas) y qué “herramienta” (planetas)?",
        "Traducir en acción concreta: ¿qué puedo hacer ahora?",
        "En tránsito: observar las sincronicidades, los encuentros útiles, las puertas que se abren.",
      ],
      examples: [
        "Mercurio sextil Júpiter: ideas amplias, estudios, suerte en las gestiones.",
        "Marte sextil Saturno: disciplina, eficacia, trabajo sólido.",
        "Venus sextil Urano: renovación relacional, creatividad, sorpresas agradables.",
      ],
      pitfalls: [
        "Esperar a que “caiga del cielo”: el sextil exige actuar.",
        "Sobrestimarlo: es una palanca, no un tsunami.",
      ],
    },
    {
      slug: "carre",
      nom: "Cuadratura",
      angle: "90°",
      kind: "majeur",
      tone: "tendu",
      keywords: ["fricción", "desafío", "crecimiento", "reajuste"],
      definition:
        "La cuadratura pone a los planetas en tensión: quieren cosas diferentes al mismo tiempo. Empuja a actuar, a decidir, a evolucionar.",
      why:
        "A 90°, es una diferencia de ritmo y de método: la tensión es un motor. La cuadratura genera crecimiento por confrontación y ajuste.",
      orbs: {
        natal: "~5–7°",
        transit: "~1–2° (3° si es muy marcada)",
        notes: ["Una cuadratura bien integrada se vuelve una fuerza: competencia, resistencia, maestría."],
      },
      howToRead: [
        "Nombrar el conflicto: ¿qué funciones se contradicen?",
        "Ver el terreno: casas implicadas → ¿dónde se atasca?",
        "Buscar la tercera vía: una regla, una estrategia, una madurez.",
        "En tránsito: reducir la dispersión y elegir una prioridad.",
      ],
      examples: [
        "Sol cuadratura Saturno: presión, madurez, prueba de solidez.",
        "Venus cuadratura Marte: deseo vs armonía, tensión relacional creativa.",
        "Mercurio cuadratura Neptuno: confusión mental, necesidad de verificar los hechos.",
      ],
      pitfalls: [
        "Vivirla como un castigo: es un entrenamiento.",
        "Reaccionar de forma impulsiva: la cuadratura quiere una decisión consciente.",
      ],
    },
    {
      slug: "trigone",
      nom: "Trígono",
      angle: "120°",
      kind: "majeur",
      tone: "harmonique",
      keywords: ["soltura", "talento", "fluidez", "alineación"],
      definition:
        "El trígono indica una circulación muy fluida: los planetas se ayudan de forma natural. A menudo un talento, una facilidad, un “corredor de éxito”.",
      why:
        "A 120°, las energías son (a menudo) del mismo elemento: hablan el mismo idioma. Fluye — a veces tanto que se olvida desarrollarlo.",
      orbs: {
        natal: "~6–8°",
        transit: "~1–2°",
        notes: ["Un trígono es potente, pero puede volverse “perezoso” si no se cultiva."],
      },
      howToRead: [
        "Identificar el talento: ¿qué se da con facilidad?",
        "Fijar un objetivo: transformar la soltura en resultado.",
        "En tránsito: excelente para lanzar, armonizar, finalizar.",
      ],
      examples: [
        "Sol trígono Júpiter: confianza, expansión, optimismo, apoyo.",
        "Luna trígono Venus: dulzura relacional, sentido del vínculo.",
        "Marte trígono Urano: audacia, innovación, eficacia rápida.",
      ],
      pitfalls: [
        "Confundir facilidad con destino: hay que actuar igualmente.",
        "No fortalecer lo que es “fácil”: si no, estancamiento.",
      ],
    },
    {
      slug: "opposition",
      nom: "Oposición",
      angle: "180°",
      kind: "majeur",
      tone: "tendu",
      keywords: ["espejo", "polaridad", "proyección", "equilibrio"],
      definition:
        "La oposición pone frente a frente dos energías: uno oscila, proyecta, aprende a través del otro. Exige un equilibrio consciente.",
      why:
        "A 180°, es el eje: dos polos se responden. La oposición revela lo que falta integrar y empuja a la cooperación en lugar del pulso.",
      orbs: {
        natal: "~6–8°",
        transit: "~1–2° (3° si es fuerte)",
        notes: ["A menudo visible en lo relacional: “el otro me muestra algo”."],
      },
      howToRead: [
        "Nombrar los dos polos (planetas) y su necesidad.",
        "Identificar la proyección: ¿qué pongo en el otro?",
        "Buscar la mediación: ritmo, reglas, alternancia, diálogo.",
        "En tránsito: negociación, elección, reposicionamiento.",
      ],
      examples: [
        "Sol oposición Luna: equilibrio vida personal/vida pública, necesidades vs voluntad.",
        "Marte oposición Saturno: acelerar vs frenar, aprendizaje de la estrategia.",
        "Venus oposición Urano: necesidad de libertad vs necesidad de vínculo.",
      ],
      pitfalls: [
        "Quedarse en el ping-pong: un día uno, un día el otro.",
        "Buscar un culpable: la oposición quiere una integración.",
      ],
    },
    {
      slug: "quinconce",
      nom: "Quincuncio",
      angle: "150°",
      kind: "mineur",
      tone: "neutre",
      keywords: ["ajuste", "incomodidad", "afinado", "higiene"],
      definition:
        "El quincuncio pide un ajuste: los planetas no se entienden de forma natural. Se progresa mediante reglajes, organización y escucha del cuerpo/de lo real.",
      why:
        "A 150°, los símbolos están “desfasados”. Es menos espectacular, pero muy elocuente en los detalles: hábitos, salud, método, prioridades.",
      orbs: {
        natal: "~2–3°",
        transit: "~0–1°",
        notes: ["Un aspecto temible para afinar una práctica o corregir una deriva."],
      },
      howToRead: [
        "Detectar lo que está mal ajustado: ¿dónde compenso?",
        "Simplificar: una acción pequeña pero repetida.",
        "En tránsito: bueno para corregir, reorganizar, mejorar la rutina.",
      ],
      examples: [
        "Mercurio quincuncio Saturno: clarificar, estructurar, reducir el ruido mental.",
        "Venus quincuncio Plutón: ajustar un apego, una relación con el control.",
      ],
      pitfalls: ["Tomarlo por un “drama”: a menudo es un afinado."],
    },
  ],
};

export const aspectsContent: Record<SeoLocale, AspectsContent> = { fr, en, es };
