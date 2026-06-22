import { Link } from "@/i18n/navigation";
import type { ReactNode } from "react";
import type { SeoLocale } from "@/lib/seo";

/* ====================================================================
   Rétrogrades — contenu localisé (fr / en / es)
   Les clés logiques (slug, tone) sont identiques dans chaque langue ;
   seuls les textes sont traduits.
   ==================================================================== */

export type Tone = "mental" | "affectif" | "action" | "social" | "transpersonnel";

export type RetroBlock = {
  slug: string;
  nom: string;
  tone: Tone;
  keywords: string[];
  whatItDoes: string;
  retroMeaningNatal: string;
  retroMeaningTransit: string;
  stations: string[];
  greenFlags: string[];
  redFlags: string[];
  howToWorkWithIt: string[];
};

export type RetrogradesContent = {
  meta: { title: string; description: string };
  jsonld: { headline: string; description: string; articleSection: string };
  hero: { eyebrow: string; h1: string; intro: ReactNode; tocLabel: string; faqLabel: string };
  defBox: { label: string; body: ReactNode };
  appIntro: ReactNode;
  basics: {
    card1Title: string;
    card1Intro: ReactNode;
    card1Items: ReactNode[];
    card2Title: string;
    card2Items: string[];
  };
  card: {
    eyebrow: string;
    natalTitle: string;
    transitTitle: string;
    stationsTitle: string;
    greenTitle: string;
    redTitle: string;
    howTitle: string;
    topLabel: string;
  };
  toneLabel: Record<Tone, string>;
  footer: { next: ReactNode; aspects: string; planets: string; houses: string };
  faqTitle: string;
  faq: { q: string; a: ReactNode }[];
  faqJsonLd: { name: string; text: string }[];
  retro: RetroBlock[];
};

/* ============================== FR ============================== */
const fr: RetrogradesContent = {
  meta: {
    title: "Planètes rétrogrades : méthode et lecture",
    description:
      "Rétrogrades en astrologie : définition, stations, natal vs transit, effets concrets et erreurs fréquentes. Explorez notre lecture planète par planète !",
  },
  jsonld: {
    headline: "Planètes rétrogrades — Natal vs transit, stations & méthode",
    description:
      "Rétrogrades en astrologie : définition, stations, natal vs transit, effets concrets et erreurs fréquentes. Lecture planète par planète.",
    articleSection: "Astrologie",
  },
  hero: {
    eyebrow: "Cours d’astrologie — Rétrogradations",
    h1: "Planètes rétrogrades : sens réel & interprétation",
    intro: (
      <>
        Rétrograde = <span className="text-text">changement de rythme</span> : on réévalue, on révise,
        on intègre. Ici : méthode claire + lecture <span className="text-text">natal</span> /{" "}
        <span className="text-text">transit</span> + planète par planète.
      </>
    ),
    tocLabel: "Sommaire",
    faqLabel: "FAQ",
  },
  defBox: {
    label: "Définition",
    body: (
      <>
        Une <strong>planète rétrograde</strong> est une planète qui semble reculer dans le zodiaque par effet de perspective ; en astrologie, cette phase invite à la révision, l'intériorisation et la maturation des thèmes liés à la <Link href="/transits">planète en transit</Link>.
      </>
    ),
  },
  appIntro: (
    <>
      Vous cherchez à comprendre ce que signifie vraiment une <strong>planète rétrograde</strong> dans votre thème natal ou en transit ? Beaucoup de contenus en ligne se limitent à des mises en garde vagues sans méthode concrète. Cette page vous donne une lecture claire, planète par planète, avec les stations, les bonnes pratiques et les erreurs à éviter.
    </>
  ),
  basics: {
    card1Title: "Qu’est-ce qu’une planète rétrograde en astrologie ?",
    card1Intro: (
      <>
        La rétrogradation est un <span className="text-text">effet apparent</span> : une planète semble
        reculer sur le zodiaque. Astrologiquement :{" "}
        <span className="text-text">intériorisation</span>, révision, maturation.
      </>
    ),
    card1Items: [
      <>• <span className="text-text">Natal</span> : style intérieur durable.</>,
      <>• <span className="text-text">Transit</span> : timing d’ajustement, retours, relectures.</>,
      <>• <span className="text-text">Stations</span> : moments plus visibles.</>,
    ],
    card2Title: "Comment interpréter une rétrogradation planétaire ?",
    card2Items: [
      "1) Planète = fonction (quoi).",
      "2) Signe = style (comment).",
      "3) Maison = domaine (où).",
      "4) Aspects = dynamique (tension/aide).",
      "5) Transit : orb + station + retours sur les mêmes degrés.",
    ],
  },
  card: {
    eyebrow: "Planète rétrograde",
    natalTitle: "Natal",
    transitTitle: "Transit",
    stationsTitle: "Stations",
    greenTitle: "Version haute",
    redTitle: "Dérives",
    howTitle: "Comment travailler avec",
    topLabel: "↑ Haut",
  },
  toneLabel: {
    mental: "mental",
    affectif: "affectif",
    action: "action",
    social: "social",
    transpersonnel: "transpersonnel",
  },
  footer: {
    next: (
      <>
        Ensuite : relier les rétrogradations aux <span className="text-text">transits</span> (cas pratiques) et aux{" "}
        <span className="text-text">aspects</span>.
      </>
    ),
    aspects: "Aspects",
    planets: "Planètes",
    houses: "Maisons",
  },
  faqTitle: "Questions fréquentes sur les planètes rétrogrades",
  faq: [
    {
      q: "Que signifie une planète rétrograde dans un thème natal ?",
      a: (
        <>
          Une <strong>planète rétrograde en natal</strong> indique une intériorisation de la fonction planétaire : la pensée, l'action ou le désir s'expriment de manière plus réfléchie et personnelle. Ce n'est ni un blocage ni un défaut, mais un <strong>style intérieur</strong> qui demande souvent plus de temps pour se déployer. Consultez notre section sur les <Link href="/aspects">aspects</Link> pour comprendre les interactions avec le reste du thème.
        </>
      ),
    },
    {
      q: "Mercure rétrograde : faut-il vraiment tout arrêter ?",
      a: (
        <>
          Non. <strong>Mercure rétrograde</strong> est une période idéale pour réviser, corriger et simplifier : relire un contrat, auditer un process, reprendre un dossier. L'erreur serait de forcer des lancements ou des signatures sans vérification. Découvrez aussi comment les <Link href="/transits">transits</Link> modifient le timing de vos projets.
        </>
      ),
    },
    {
      q: "Quelle est la différence entre une rétrograde natale et en transit ?",
      a: (
        <>
          En <strong>natal</strong>, la rétrograde décrit un trait durable : un mode de fonctionnement intériorisé. En <strong>transit</strong>, elle marque une période temporaire d'ajustement dans un domaine précis (défini par la <Link href="/#maisons">maison</Link> activée). Les deux se complètent mais ne se lisent pas de la même manière.
        </>
      ),
    },
    {
      q: "Pourquoi les stations rétrogrades sont-elles si puissantes ?",
      a: (
        <>
          Aux <strong>stations</strong> (rétrograde et directe), la planète semble immobile : son symbolisme devient plus intense et perceptible. Les jours autour d'une station sont souvent les plus marquants d'un cycle rétrograde. C'est aussi le moment où les <Link href="/aspects">aspects</Link> exacts ont le plus d'impact.
        </>
      ),
    },
  ],
  faqJsonLd: [
    {
      name: "Que signifie une planète rétrograde dans un thème natal ?",
      text: "Une planète rétrograde en natal indique une intériorisation de la fonction planétaire : la pensée, l'action ou le désir s'expriment de manière plus réfléchie et personnelle. Ce n'est ni un blocage ni un défaut, mais un style intérieur qui demande souvent plus de temps pour se déployer.",
    },
    {
      name: "Mercure rétrograde : faut-il vraiment tout arrêter ?",
      text: "Non. Mercure rétrograde est une période idéale pour réviser, corriger et simplifier : relire un contrat, auditer un process, reprendre un dossier. L'erreur serait de forcer des lancements ou des signatures sans vérification.",
    },
    {
      name: "Quelle est la différence entre une rétrograde natale et en transit ?",
      text: "En natal, la rétrograde décrit un trait durable : un mode de fonctionnement intériorisé. En transit, elle marque une période temporaire d'ajustement dans un domaine précis. Les deux se complètent mais ne se lisent pas de la même manière.",
    },
    {
      name: "Pourquoi les stations rétrogrades sont-elles si puissantes ?",
      text: "Aux stations (rétrograde et directe), la planète semble immobile : son symbolisme devient plus intense et perceptible. Les jours autour d'une station sont souvent les plus marquants d'un cycle rétrograde.",
    },
  ],
  retro: [
    {
      slug: "mercure",
      nom: "Mercure rétrograde",
      tone: "mental",
      keywords: ["révision", "relecture", "retour d’infos", "bugs", "réorganisation"],
      whatItDoes:
        "Mercure = pensée, langage, échanges, apprentissage, contrats, déplacements, outils du quotidien.",
      retroMeaningNatal:
        "En natal, Mercure rétrograde indique une pensée plus intérieure : on traite l’info en profondeur, parfois à contre-temps. Besoin de relire, reformuler, vérifier. Potentiel : nuance, précision. Défi : rumination si l’ancrage manque.",
      retroMeaningTransit:
        "En transit, Mercure rétrograde = révision : dossiers, messages, contrats, outils. Idéal pour corriger et simplifier. Moins idéal pour signer vite sans relecture.",
      stations: [
        "Station rétrograde : ralentir, relire, éviter les décisions sous stress.",
        "Cœur de rétro : corriger, reprendre un dossier, nettoyer l’info.",
        "Station directe : clarifier, valider, lancer ce qui a été ajusté.",
      ],
      greenFlags: [
        "Audit des process, du site, des contrats, des contenus.",
        "Retrouver une idée oubliée, faire une V2 plus propre.",
        "Revenir aux bases et apprendre autrement.",
      ],
      redFlags: [
        "Signer sans relire / mal communiquer / s’énerver sur des retards.",
        "Multiplier les changements au lieu d’optimiser l’existant.",
        "Confondre ralentissement et échec.",
      ],
      howToWorkWithIt: [
        "Avant : sauvegardes, check-lists, marges de délai.",
        "Pendant : relecture, tests, QA, tri mails/notes.",
        "Après : mise en ligne / signature / lancement si tout est clair.",
      ],
    },
    {
      slug: "venus",
      nom: "Vénus rétrograde",
      tone: "affectif",
      keywords: ["valeurs", "désir", "relation", "estime", "réévaluation"],
      whatItDoes:
        "Vénus = amour, attirance, valeurs, plaisir, argent “relationnel”, esthétique, accord/compromis.",
      retroMeaningNatal:
        "En natal, Vénus rétrograde : désir plus intérieur, critères personnels, besoin d’authenticité. Travail fréquent : estime, dépendance affective, valeur personnelle.",
      retroMeaningTransit:
        "En transit : réévaluer relations, choix affectifs, plaisirs, dépenses. Anciennes histoires peuvent revenir pour clarifier. On ajuste les limites et les standards.",
      stations: [
        "Station rétrograde : éviter les décisions radicales à chaud.",
        "Cœur de rétro : aligner valeurs ↔ actions.",
        "Station directe : décisions plus stables et assumées.",
      ],
      greenFlags: [
        "Redéfinir tes standards amoureux et tes limites.",
        "Rebranding / style plus cohérent.",
        "Dépenses plaisir : mieux et moins.",
      ],
      redFlags: [
        "Retour par manque plutôt que par lucidité.",
        "Validation externe au lieu d’estime interne.",
        "Achats impulsifs pour compenser.",
      ],
      howToWorkWithIt: [
        "Lister : non-négociables / compromis possibles.",
        "Tri financier (abonnements, achats).",
        "Décisions importantes après la station directe si possible.",
      ],
    },
    {
      slug: "mars",
      nom: "Mars rétrograde",
      tone: "action",
      keywords: ["ralentissement", "stratégie", "colère", "recalibrage", "endurance"],
      whatItDoes: "Mars = action, désir, courage, conflit, capacité à trancher.",
      retroMeaningNatal:
        "En natal : action plus stratégique, timing important. Potentiel : endurance, puissance contrôlée. Défi : colère accumulée si refoulée.",
      retroMeaningTransit:
        "En transit : recaler l’élan, revoir la stratégie. Bien pour corriger une méthode, reprendre un objectif. Moins bon pour foncer tête baissée.",
      stations: [
        "Station rétrograde : irritation/fatigue → choisir une priorité.",
        "Cœur de rétro : discipline et révision d’objectifs.",
        "Station directe : reprise progressive, action plus juste.",
      ],
      greenFlags: [
        "Reprendre une discipline avec méthode.",
        "Améliorer ton pipeline pro (process, priorités).",
        "Dire non sans exploser.",
      ],
      redFlags: ["Forcer malgré l’usure", "Conflits inutiles", "Décisions impulsives"],
      howToWorkWithIt: [
        "Petits pas constants.",
        "Décharger le stress (corps) + clarifier la colère.",
        "Planifier : objectifs, étapes, métriques.",
      ],
    },
    {
      slug: "jupiter",
      nom: "Jupiter rétrograde",
      tone: "social",
      keywords: ["révision de croyances", "sens", "éthique", "croissance intérieure"],
      whatItDoes: "Jupiter = expansion, vision, sens, opportunités, enseignement.",
      retroMeaningNatal:
        "En natal : quête de sens intérieure, sagesse par expérience. Défi : hésiter à prendre sa place.",
      retroMeaningTransit:
        "En transit : revoir une direction (études, projet, vision). Consolidation > gonflement. On corrige le cap avant d’accélérer.",
      stations: [
        "Station rétrograde : ralentir l’expansion, revoir le cap.",
        "Cœur de rétro : cohérence valeurs ↔ objectifs.",
        "Station directe : croissance plus alignée.",
      ],
      greenFlags: ["Refaire un plan propre", "Clarifier positionnement/offre", "Approfondir l’apprentissage"],
      redFlags: ["Promettre trop", "Se disperser", "Se raconter une histoire"],
      howToWorkWithIt: ["Audit vision/objectifs", "Limiter à 1–2 axes", "Mesurer le réel (faits)"],
    },
    {
      slug: "saturne",
      nom: "Saturne rétrograde",
      tone: "social",
      keywords: ["responsabilité", "structure", "maturité", "réparation", "autorité intérieure"],
      whatItDoes: "Saturne = limites, cadre, engagements, construction durable.",
      retroMeaningNatal:
        "En natal : autorité intérieure, rigueur. Défi : auto-critique, peur de mal faire, devoir prouver.",
      retroMeaningTransit:
        "En transit : réparer une structure (contrat, cadre, organisation). On consolide ce qui doit durer.",
      stations: [
        "Station rétrograde : pression → revoir les fondations.",
        "Cœur de rétro : simplifier, réparer, recadrer.",
        "Station directe : on repart sur du solide.",
      ],
      greenFlags: ["Assainir finances/planning", "Stabiliser un projet", "Limites claires"],
      redFlags: ["Rigidité", "Pessimisme", "Tout porter seul"],
      howToWorkWithIt: ["Moins mais mieux", "Renégocier si besoin", "Créer des routines/process"],
    },
    {
      slug: "uranus",
      nom: "Uranus rétrograde",
      tone: "transpersonnel",
      keywords: ["liberté intérieure", "déclic", "mise à jour", "désidentification"],
      whatItDoes: "Uranus = rupture, liberté, innovation, réveil.",
      retroMeaningNatal:
        "En natal : singularité intérieure, autonomie. Défi : instabilité nerveuse, se sentir différent.",
      retroMeaningTransit:
        "En transit : changement interne (mise à jour du “logiciel”). Le mouvement externe vient après.",
      stations: [
        "Station rétrograde : nervosité → réduire la surcharge.",
        "Cœur de rétro : tester petit, itérer.",
        "Station directe : mise en acte plus visible si prêt.",
      ],
      greenFlags: ["Moderniser sans tout casser", "Se libérer d’une identité", "Innovation progressive"],
      redFlags: ["Changer pour fuir", "Sur-stimulation", "Rupture impulsive"],
      howToWorkWithIt: ["Tester à petite échelle", "Garder une base stable", "Intuition + vérif"],
    },
    {
      slug: "neptune",
      nom: "Neptune rétrograde",
      tone: "transpersonnel",
      keywords: ["clarification", "désillusion", "inspiration", "sensibilité", "vérité"],
      whatItDoes: "Neptune = idéal, inspiration, compassion, imagination.",
      retroMeaningNatal:
        "En natal : hypersensibilité, imagination, intuition. Défi : frontières floues, idéalisation.",
      retroMeaningTransit:
        "En transit : enlever le brouillard. On clarifie un rêve, une foi, une relation à l’idéal.",
      stations: [
        "Station rétrograde : hygiène, sommeil, limites.",
        "Cœur de rétro : réel vs fantasme.",
        "Station directe : inspiration plus incarnée.",
      ],
      greenFlags: ["Clarifier un idéal", "Nettoyer dépendances", "Créer avec vérité"],
      redFlags: ["Fuite", "Projection", "Promesses vagues", "Sauveur/victime"],
      howToWorkWithIt: ["Vérifier les faits", "Limiter l’énergie donnée", "Ancrage corps/routine"],
    },
    {
      slug: "pluton",
      nom: "Pluton rétrograde",
      tone: "transpersonnel",
      keywords: ["transformation", "détox", "pouvoir", "mue", "vérité profonde"],
      whatItDoes: "Pluton = crise, mue, intensité, vérité, régénération.",
      retroMeaningNatal:
        "En natal : puissance intérieure, lucidité. Défi : contrôle, peur de perdre, obsession.",
      retroMeaningTransit:
        "En transit : détox profonde et lente. Effets subtils au départ, très nets sur la durée.",
      stations: [
        "Station rétrograde : observer sans forcer.",
        "Cœur de rétro : nettoyage (habitudes, attachements).",
        "Station directe : décisions irréversibles si mûres.",
      ],
      greenFlags: ["Thérapie/purge", "Reprendre son pouvoir", "Alignement profond"],
      redFlags: ["Jeux de pouvoir", "Manipulation", "Tout brûler"],
      howToWorkWithIt: ["Nommer la vérité", "Détox progressive", "Discipline + choix clairs"],
    },
  ],
};

/* ============================== EN ============================== */
const en: RetrogradesContent = {
  meta: {
    title: "Retrograde planets: method & reading",
    description:
      "Retrogrades in astrology: definition, stations, natal vs transit, concrete effects and common mistakes. Explore our planet-by-planet reading!",
  },
  jsonld: {
    headline: "Retrograde planets — Natal vs transit, stations & method",
    description:
      "Retrogrades in astrology: definition, stations, natal vs transit, concrete effects and common mistakes. A planet-by-planet reading.",
    articleSection: "Astrology",
  },
  hero: {
    eyebrow: "Astrology course — Retrogrades",
    h1: "Retrograde planets: real meaning & interpretation",
    intro: (
      <>
        Retrograde = <span className="text-text">a change of rhythm</span>: you reassess, you review,
        you integrate. Here: a clear method + a <span className="text-text">natal</span> /{" "}
        <span className="text-text">transit</span> reading + planet by planet.
      </>
    ),
    tocLabel: "Contents",
    faqLabel: "FAQ",
  },
  defBox: {
    label: "Definition",
    body: (
      <>
        A <strong>retrograde planet</strong> is a planet that appears to move backward through the zodiac due to a perspective effect; in astrology, this phase invites review, internalisation and the maturing of the themes tied to the <Link href="/transits">transiting planet</Link>.
      </>
    ),
  },
  appIntro: (
    <>
      Trying to understand what a <strong>retrograde planet</strong> really means in your natal chart or in transit? A lot of online content stops at vague warnings without any concrete method. This page gives you a clear reading, planet by planet, with the stations, the best practices and the mistakes to avoid.
    </>
  ),
  basics: {
    card1Title: "What is a retrograde planet in astrology?",
    card1Intro: (
      <>
        Retrogradation is an <span className="text-text">apparent effect</span>: a planet seems to move
        backward through the zodiac. Astrologically:{" "}
        <span className="text-text">internalisation</span>, review, maturation.
      </>
    ),
    card1Items: [
      <>• <span className="text-text">Natal</span>: a lasting inner style.</>,
      <>• <span className="text-text">Transit</span>: a timing for adjustment, returns and reviews.</>,
      <>• <span className="text-text">Stations</span>: more visible moments.</>,
    ],
    card2Title: "How do you interpret a planetary retrogradation?",
    card2Items: [
      "1) Planet = function (what).",
      "2) Sign = style (how).",
      "3) House = area (where).",
      "4) Aspects = dynamic (tension/support).",
      "5) Transit: orb + station + returns over the same degrees.",
    ],
  },
  card: {
    eyebrow: "Retrograde planet",
    natalTitle: "Natal",
    transitTitle: "Transit",
    stationsTitle: "Stations",
    greenTitle: "High expression",
    redTitle: "Pitfalls",
    howTitle: "How to work with it",
    topLabel: "↑ Top",
  },
  toneLabel: {
    mental: "mental",
    affectif: "emotional",
    action: "action",
    social: "social",
    transpersonnel: "transpersonal",
  },
  footer: {
    next: (
      <>
        Next: link retrogrades to <span className="text-text">transits</span> (practical cases) and to{" "}
        <span className="text-text">aspects</span>.
      </>
    ),
    aspects: "Aspects",
    planets: "Planets",
    houses: "Houses",
  },
  faqTitle: "Frequently asked questions about retrograde planets",
  faq: [
    {
      q: "What does a retrograde planet mean in a natal chart?",
      a: (
        <>
          A <strong>retrograde planet in the natal chart</strong> indicates an internalisation of the planetary function: thought, action or desire is expressed in a more reflective and personal way. It is neither a blockage nor a flaw, but an <strong>inner style</strong> that often needs more time to unfold. See our section on <Link href="/aspects">aspects</Link> to understand the interactions with the rest of the chart.
        </>
      ),
    },
    {
      q: "Mercury retrograde: do you really have to stop everything?",
      a: (
        <>
          No. <strong>Mercury retrograde</strong> is an ideal period to review, correct and simplify: re-reading a contract, auditing a process, picking a file back up. The mistake would be to force launches or signatures without checking. Discover too how <Link href="/transits">transits</Link> shift the timing of your projects.
        </>
      ),
    },
    {
      q: "What is the difference between a natal and a transit retrograde?",
      a: (
        <>
          In the <strong>natal chart</strong>, a retrograde describes a lasting trait: an internalised way of functioning. In <strong>transit</strong>, it marks a temporary period of adjustment in a specific area (defined by the activated <Link href="/#maisons">house</Link>). The two complement each other but are not read in the same way.
        </>
      ),
    },
    {
      q: "Why are retrograde stations so powerful?",
      a: (
        <>
          At the <strong>stations</strong> (retrograde and direct), the planet appears motionless: its symbolism becomes more intense and perceptible. The days around a station are often the most significant of a retrograde cycle. It is also when exact <Link href="/aspects">aspects</Link> have the greatest impact.
        </>
      ),
    },
  ],
  faqJsonLd: [
    {
      name: "What does a retrograde planet mean in a natal chart?",
      text: "A retrograde planet in the natal chart indicates an internalisation of the planetary function: thought, action or desire is expressed in a more reflective and personal way. It is neither a blockage nor a flaw, but an inner style that often needs more time to unfold.",
    },
    {
      name: "Mercury retrograde: do you really have to stop everything?",
      text: "No. Mercury retrograde is an ideal period to review, correct and simplify: re-reading a contract, auditing a process, picking a file back up. The mistake would be to force launches or signatures without checking.",
    },
    {
      name: "What is the difference between a natal and a transit retrograde?",
      text: "In the natal chart, a retrograde describes a lasting trait: an internalised way of functioning. In transit, it marks a temporary period of adjustment in a specific area. The two complement each other but are not read in the same way.",
    },
    {
      name: "Why are retrograde stations so powerful?",
      text: "At the stations (retrograde and direct), the planet appears motionless: its symbolism becomes more intense and perceptible. The days around a station are often the most significant of a retrograde cycle.",
    },
  ],
  retro: [
    {
      slug: "mercure",
      nom: "Mercury retrograde",
      tone: "mental",
      keywords: ["review", "re-reading", "feedback", "bugs", "reorganisation"],
      whatItDoes:
        "Mercury = thought, language, exchanges, learning, contracts, travel, everyday tools.",
      retroMeaningNatal:
        "In the natal chart, Mercury retrograde indicates a more inward way of thinking: information is processed in depth, sometimes against the grain. A need to re-read, rephrase, double-check. Potential: nuance, precision. Challenge: rumination if grounding is missing.",
      retroMeaningTransit:
        "In transit, Mercury retrograde = review: files, messages, contracts, tools. Ideal for correcting and simplifying. Less ideal for signing quickly without re-reading.",
      stations: [
        "Retrograde station: slow down, re-read, avoid decisions made under stress.",
        "Heart of the retrograde: correct, pick a file back up, clean up the information.",
        "Direct station: clarify, validate, launch what has been adjusted.",
      ],
      greenFlags: [
        "Audit your processes, site, contracts, content.",
        "Recover a forgotten idea, build a cleaner V2.",
        "Go back to basics and learn in a new way.",
      ],
      redFlags: [
        "Signing without re-reading / communicating poorly / getting angry over delays.",
        "Multiplying changes instead of optimising what exists.",
        "Mistaking a slowdown for a failure.",
      ],
      howToWorkWithIt: [
        "Before: backups, checklists, time margins.",
        "During: re-reading, testing, QA, sorting emails/notes.",
        "After: going live / signing / launching once everything is clear.",
      ],
    },
    {
      slug: "venus",
      nom: "Venus retrograde",
      tone: "affectif",
      keywords: ["values", "desire", "relationship", "self-worth", "reassessment"],
      whatItDoes:
        "Venus = love, attraction, values, pleasure, “relational” money, aesthetics, agreement/compromise.",
      retroMeaningNatal:
        "In the natal chart, Venus retrograde: a more inward desire, personal criteria, a need for authenticity. Frequent work: self-esteem, emotional dependency, personal worth.",
      retroMeaningTransit:
        "In transit: reassessing relationships, emotional choices, pleasures, spending. Old stories may resurface to be clarified. You adjust your boundaries and standards.",
      stations: [
        "Retrograde station: avoid radical decisions made in the heat of the moment.",
        "Heart of the retrograde: align values ↔ actions.",
        "Direct station: more stable, fully owned decisions.",
      ],
      greenFlags: [
        "Redefine your standards in love and your boundaries.",
        "Rebranding / a more coherent style.",
        "Pleasure spending: better and less.",
      ],
      redFlags: [
        "Coming back out of lack rather than out of clarity.",
        "External validation instead of inner self-esteem.",
        "Impulse buying to compensate.",
      ],
      howToWorkWithIt: [
        "List: non-negotiables / possible compromises.",
        "Financial cleanup (subscriptions, purchases).",
        "Important decisions after the direct station if possible.",
      ],
    },
    {
      slug: "mars",
      nom: "Mars retrograde",
      tone: "action",
      keywords: ["slowdown", "strategy", "anger", "recalibration", "endurance"],
      whatItDoes: "Mars = action, desire, courage, conflict, the ability to decide.",
      retroMeaningNatal:
        "In the natal chart: more strategic action, timing matters. Potential: endurance, controlled power. Challenge: accumulated anger if repressed.",
      retroMeaningTransit:
        "In transit: recalibrate momentum, rethink strategy. Good for correcting a method, picking an objective back up. Less good for charging in head down.",
      stations: [
        "Retrograde station: irritation/fatigue → choose one priority.",
        "Heart of the retrograde: discipline and a review of objectives.",
        "Direct station: a gradual restart, more accurate action.",
      ],
      greenFlags: [
        "Take up a discipline again with method.",
        "Improve your professional pipeline (processes, priorities).",
        "Say no without blowing up.",
      ],
      redFlags: ["Pushing despite the wear", "Pointless conflicts", "Impulsive decisions"],
      howToWorkWithIt: [
        "Small, consistent steps.",
        "Release the stress (body) + clarify the anger.",
        "Plan: objectives, steps, metrics.",
      ],
    },
    {
      slug: "jupiter",
      nom: "Jupiter retrograde",
      tone: "social",
      keywords: ["reviewing beliefs", "meaning", "ethics", "inner growth"],
      whatItDoes: "Jupiter = expansion, vision, meaning, opportunities, teaching.",
      retroMeaningNatal:
        "In the natal chart: an inward quest for meaning, wisdom through experience. Challenge: hesitating to claim your place.",
      retroMeaningTransit:
        "In transit: rethinking a direction (studies, project, vision). Consolidation > inflation. You correct the course before accelerating.",
      stations: [
        "Retrograde station: slow the expansion, review the course.",
        "Heart of the retrograde: coherence between values ↔ objectives.",
        "Direct station: more aligned growth.",
      ],
      greenFlags: ["Redo a clean plan", "Clarify positioning/offer", "Deepen your learning"],
      redFlags: ["Promising too much", "Scattering yourself", "Telling yourself a story"],
      howToWorkWithIt: ["Audit your vision/objectives", "Limit to 1–2 axes", "Measure reality (facts)"],
    },
    {
      slug: "saturne",
      nom: "Saturn retrograde",
      tone: "social",
      keywords: ["responsibility", "structure", "maturity", "repair", "inner authority"],
      whatItDoes: "Saturn = limits, framework, commitments, lasting construction.",
      retroMeaningNatal:
        "In the natal chart: inner authority, rigour. Challenge: self-criticism, fear of doing it wrong, having to prove yourself.",
      retroMeaningTransit:
        "In transit: repairing a structure (contract, framework, organisation). You consolidate what is meant to last.",
      stations: [
        "Retrograde station: pressure → review the foundations.",
        "Heart of the retrograde: simplify, repair, reframe.",
        "Direct station: you set off again on solid ground.",
      ],
      greenFlags: ["Clean up finances/schedule", "Stabilise a project", "Clear boundaries"],
      redFlags: ["Rigidity", "Pessimism", "Carrying everything alone"],
      howToWorkWithIt: ["Less but better", "Renegotiate if needed", "Create routines/processes"],
    },
    {
      slug: "uranus",
      nom: "Uranus retrograde",
      tone: "transpersonnel",
      keywords: ["inner freedom", "click", "update", "de-identification"],
      whatItDoes: "Uranus = rupture, freedom, innovation, awakening.",
      retroMeaningNatal:
        "In the natal chart: inner singularity, autonomy. Challenge: nervous instability, feeling different.",
      retroMeaningTransit:
        "In transit: an internal change (an update of the “software”). The external movement comes afterward.",
      stations: [
        "Retrograde station: nervousness → reduce the overload.",
        "Heart of the retrograde: test small, iterate.",
        "Direct station: a more visible enactment if you are ready.",
      ],
      greenFlags: ["Modernise without breaking everything", "Free yourself from an identity", "Gradual innovation"],
      redFlags: ["Changing to escape", "Over-stimulation", "Impulsive rupture"],
      howToWorkWithIt: ["Test on a small scale", "Keep a stable base", "Intuition + verification"],
    },
    {
      slug: "neptune",
      nom: "Neptune retrograde",
      tone: "transpersonnel",
      keywords: ["clarification", "disillusion", "inspiration", "sensitivity", "truth"],
      whatItDoes: "Neptune = ideal, inspiration, compassion, imagination.",
      retroMeaningNatal:
        "In the natal chart: hypersensitivity, imagination, intuition. Challenge: blurry boundaries, idealisation.",
      retroMeaningTransit:
        "In transit: clearing the fog. You clarify a dream, a faith, a relationship to the ideal.",
      stations: [
        "Retrograde station: hygiene, sleep, boundaries.",
        "Heart of the retrograde: reality vs fantasy.",
        "Direct station: more embodied inspiration.",
      ],
      greenFlags: ["Clarify an ideal", "Clean up dependencies", "Create with truth"],
      redFlags: ["Escapism", "Projection", "Vague promises", "Saviour/victim"],
      howToWorkWithIt: ["Check the facts", "Limit the energy given", "Grounding through body/routine"],
    },
    {
      slug: "pluton",
      nom: "Pluto retrograde",
      tone: "transpersonnel",
      keywords: ["transformation", "detox", "power", "molting", "deep truth"],
      whatItDoes: "Pluto = crisis, molting, intensity, truth, regeneration.",
      retroMeaningNatal:
        "In the natal chart: inner power, lucidity. Challenge: control, fear of losing, obsession.",
      retroMeaningTransit:
        "In transit: a deep, slow detox. Subtle effects at first, very clear over time.",
      stations: [
        "Retrograde station: observe without forcing.",
        "Heart of the retrograde: cleanup (habits, attachments).",
        "Direct station: irreversible decisions if they are ripe.",
      ],
      greenFlags: ["Therapy/purge", "Reclaim your power", "Deep alignment"],
      redFlags: ["Power games", "Manipulation", "Burning it all down"],
      howToWorkWithIt: ["Name the truth", "Gradual detox", "Discipline + clear choices"],
    },
  ],
};

/* ============================== ES ============================== */
const es: RetrogradesContent = {
  meta: {
    title: "Planetas retrógrados: método y lectura",
    description:
      "Retrógrados en astrología: definición, estaciones, natal vs tránsito, efectos concretos y errores frecuentes. ¡Explora nuestra lectura planeta por planeta!",
  },
  jsonld: {
    headline: "Planetas retrógrados — Natal vs tránsito, estaciones y método",
    description:
      "Retrógrados en astrología: definición, estaciones, natal vs tránsito, efectos concretos y errores frecuentes. Lectura planeta por planeta.",
    articleSection: "Astrología",
  },
  hero: {
    eyebrow: "Curso de astrología — Retrogradaciones",
    h1: "Planetas retrógrados: sentido real e interpretación",
    intro: (
      <>
        Retrógrado = <span className="text-text">cambio de ritmo</span>: se reevalúa, se revisa,
        se integra. Aquí: método claro + lectura <span className="text-text">natal</span> /{" "}
        <span className="text-text">tránsito</span> + planeta por planeta.
      </>
    ),
    tocLabel: "Índice",
    faqLabel: "FAQ",
  },
  defBox: {
    label: "Definición",
    body: (
      <>
        Un <strong>planeta retrógrado</strong> es un planeta que parece retroceder en el zodíaco por un efecto de perspectiva; en astrología, esta fase invita a la revisión, la interiorización y la maduración de los temas ligados al <Link href="/transits">planeta en tránsito</Link>.
      </>
    ),
  },
  appIntro: (
    <>
      ¿Quieres entender lo que significa realmente un <strong>planeta retrógrado</strong> en tu carta natal o en tránsito? Mucho contenido en línea se limita a advertencias vagas sin un método concreto. Esta página te ofrece una lectura clara, planeta por planeta, con las estaciones, las buenas prácticas y los errores que conviene evitar.
    </>
  ),
  basics: {
    card1Title: "¿Qué es un planeta retrógrado en astrología?",
    card1Intro: (
      <>
        La retrogradación es un <span className="text-text">efecto aparente</span>: un planeta parece
        retroceder en el zodíaco. Astrológicamente:{" "}
        <span className="text-text">interiorización</span>, revisión, maduración.
      </>
    ),
    card1Items: [
      <>• <span className="text-text">Natal</span>: estilo interior duradero.</>,
      <>• <span className="text-text">Tránsito</span>: momento de ajuste, retornos, relecturas.</>,
      <>• <span className="text-text">Estaciones</span>: momentos más visibles.</>,
    ],
    card2Title: "¿Cómo interpretar una retrogradación planetaria?",
    card2Items: [
      "1) Planeta = función (qué).",
      "2) Signo = estilo (cómo).",
      "3) Casa = ámbito (dónde).",
      "4) Aspectos = dinámica (tensión/ayuda).",
      "5) Tránsito: orbe + estación + retornos sobre los mismos grados.",
    ],
  },
  card: {
    eyebrow: "Planeta retrógrado",
    natalTitle: "Natal",
    transitTitle: "Tránsito",
    stationsTitle: "Estaciones",
    greenTitle: "Versión alta",
    redTitle: "Desvíos",
    howTitle: "Cómo trabajar con él",
    topLabel: "↑ Arriba",
  },
  toneLabel: {
    mental: "mental",
    affectif: "afectivo",
    action: "acción",
    social: "social",
    transpersonnel: "transpersonal",
  },
  footer: {
    next: (
      <>
        Después: vincular las retrogradaciones a los <span className="text-text">tránsitos</span> (casos prácticos) y a los{" "}
        <span className="text-text">aspectos</span>.
      </>
    ),
    aspects: "Aspectos",
    planets: "Planetas",
    houses: "Casas",
  },
  faqTitle: "Preguntas frecuentes sobre los planetas retrógrados",
  faq: [
    {
      q: "¿Qué significa un planeta retrógrado en una carta natal?",
      a: (
        <>
          Un <strong>planeta retrógrado en natal</strong> indica una interiorización de la función planetaria: el pensamiento, la acción o el deseo se expresan de forma más reflexiva y personal. No es ni un bloqueo ni un defecto, sino un <strong>estilo interior</strong> que a menudo necesita más tiempo para desplegarse. Consulta nuestra sección sobre los <Link href="/aspects">aspectos</Link> para entender las interacciones con el resto de la carta.
        </>
      ),
    },
    {
      q: "Mercurio retrógrado: ¿de verdad hay que parar todo?",
      a: (
        <>
          No. <strong>Mercurio retrógrado</strong> es un periodo ideal para revisar, corregir y simplificar: releer un contrato, auditar un proceso, retomar un expediente. El error sería forzar lanzamientos o firmas sin verificación. Descubre también cómo los <Link href="/transits">tránsitos</Link> modifican el timing de tus proyectos.
        </>
      ),
    },
    {
      q: "¿Cuál es la diferencia entre una retrógrada natal y en tránsito?",
      a: (
        <>
          En <strong>natal</strong>, la retrógrada describe un rasgo duradero: un modo de funcionamiento interiorizado. En <strong>tránsito</strong>, marca un periodo temporal de ajuste en un ámbito concreto (definido por la <Link href="/#maisons">casa</Link> activada). Ambas se complementan, pero no se leen de la misma manera.
        </>
      ),
    },
    {
      q: "¿Por qué las estaciones retrógradas son tan potentes?",
      a: (
        <>
          En las <strong>estaciones</strong> (retrógrada y directa), el planeta parece inmóvil: su simbolismo se vuelve más intenso y perceptible. Los días en torno a una estación suelen ser los más marcados de un ciclo retrógrado. Es también cuando los <Link href="/aspects">aspectos</Link> exactos tienen mayor impacto.
        </>
      ),
    },
  ],
  faqJsonLd: [
    {
      name: "¿Qué significa un planeta retrógrado en una carta natal?",
      text: "Un planeta retrógrado en natal indica una interiorización de la función planetaria: el pensamiento, la acción o el deseo se expresan de forma más reflexiva y personal. No es ni un bloqueo ni un defecto, sino un estilo interior que a menudo necesita más tiempo para desplegarse.",
    },
    {
      name: "Mercurio retrógrado: ¿de verdad hay que parar todo?",
      text: "No. Mercurio retrógrado es un periodo ideal para revisar, corregir y simplificar: releer un contrato, auditar un proceso, retomar un expediente. El error sería forzar lanzamientos o firmas sin verificación.",
    },
    {
      name: "¿Cuál es la diferencia entre una retrógrada natal y en tránsito?",
      text: "En natal, la retrógrada describe un rasgo duradero: un modo de funcionamiento interiorizado. En tránsito, marca un periodo temporal de ajuste en un ámbito concreto. Ambas se complementan, pero no se leen de la misma manera.",
    },
    {
      name: "¿Por qué las estaciones retrógradas son tan potentes?",
      text: "En las estaciones (retrógrada y directa), el planeta parece inmóvil: su simbolismo se vuelve más intenso y perceptible. Los días en torno a una estación suelen ser los más marcados de un ciclo retrógrado.",
    },
  ],
  retro: [
    {
      slug: "mercure",
      nom: "Mercurio retrógrado",
      tone: "mental",
      keywords: ["revisión", "relectura", "retorno de información", "fallos", "reorganización"],
      whatItDoes:
        "Mercurio = pensamiento, lenguaje, intercambios, aprendizaje, contratos, desplazamientos, herramientas del día a día.",
      retroMeaningNatal:
        "En natal, Mercurio retrógrado indica un pensamiento más interior: se procesa la información en profundidad, a veces a contracorriente. Necesidad de releer, reformular, verificar. Potencial: matiz, precisión. Reto: rumiación si falta el anclaje.",
      retroMeaningTransit:
        "En tránsito, Mercurio retrógrado = revisión: expedientes, mensajes, contratos, herramientas. Ideal para corregir y simplificar. Menos ideal para firmar deprisa sin releer.",
      stations: [
        "Estación retrógrada: frenar, releer, evitar las decisiones bajo estrés.",
        "Corazón de la retrógrada: corregir, retomar un expediente, depurar la información.",
        "Estación directa: clarificar, validar, lanzar lo que se ha ajustado.",
      ],
      greenFlags: [
        "Auditar los procesos, el sitio, los contratos, los contenidos.",
        "Recuperar una idea olvidada, hacer una V2 más limpia.",
        "Volver a lo básico y aprender de otra manera.",
      ],
      redFlags: [
        "Firmar sin releer / comunicar mal / irritarse por los retrasos.",
        "Multiplicar los cambios en lugar de optimizar lo existente.",
        "Confundir la ralentización con el fracaso.",
      ],
      howToWorkWithIt: [
        "Antes: copias de seguridad, listas de control, márgenes de plazo.",
        "Durante: relectura, pruebas, QA, clasificación de correos/notas.",
        "Después: publicación / firma / lanzamiento si todo está claro.",
      ],
    },
    {
      slug: "venus",
      nom: "Venus retrógrado",
      tone: "affectif",
      keywords: ["valores", "deseo", "relación", "autoestima", "reevaluación"],
      whatItDoes:
        "Venus = amor, atracción, valores, placer, dinero “relacional”, estética, acuerdo/compromiso.",
      retroMeaningNatal:
        "En natal, Venus retrógrado: deseo más interior, criterios personales, necesidad de autenticidad. Trabajo frecuente: autoestima, dependencia afectiva, valor personal.",
      retroMeaningTransit:
        "En tránsito: reevaluar relaciones, decisiones afectivas, placeres, gastos. Antiguas historias pueden volver para clarificar. Se ajustan los límites y los estándares.",
      stations: [
        "Estación retrógrada: evitar las decisiones radicales en caliente.",
        "Corazón de la retrógrada: alinear valores ↔ acciones.",
        "Estación directa: decisiones más estables y asumidas.",
      ],
      greenFlags: [
        "Redefinir tus estándares amorosos y tus límites.",
        "Rebranding / un estilo más coherente.",
        "Gastos de placer: mejor y menos.",
      ],
      redFlags: [
        "Volver por carencia más que por lucidez.",
        "Validación externa en lugar de autoestima interna.",
        "Compras impulsivas para compensar.",
      ],
      howToWorkWithIt: [
        "Enumerar: innegociables / compromisos posibles.",
        "Limpieza financiera (suscripciones, compras).",
        "Decisiones importantes tras la estación directa si es posible.",
      ],
    },
    {
      slug: "mars",
      nom: "Marte retrógrado",
      tone: "action",
      keywords: ["ralentización", "estrategia", "ira", "recalibrado", "resistencia"],
      whatItDoes: "Marte = acción, deseo, coraje, conflicto, capacidad de decidir.",
      retroMeaningNatal:
        "En natal: acción más estratégica, el timing importa. Potencial: resistencia, fuerza controlada. Reto: ira acumulada si se reprime.",
      retroMeaningTransit:
        "En tránsito: recalibrar el impulso, revisar la estrategia. Bueno para corregir un método, retomar un objetivo. Menos bueno para lanzarse a ciegas.",
      stations: [
        "Estación retrógrada: irritación/fatiga → elegir una prioridad.",
        "Corazón de la retrógrada: disciplina y revisión de objetivos.",
        "Estación directa: retoma progresiva, acción más justa.",
      ],
      greenFlags: [
        "Retomar una disciplina con método.",
        "Mejorar tu pipeline profesional (procesos, prioridades).",
        "Decir no sin estallar.",
      ],
      redFlags: ["Forzar pese al desgaste", "Conflictos inútiles", "Decisiones impulsivas"],
      howToWorkWithIt: [
        "Pequeños pasos constantes.",
        "Descargar el estrés (cuerpo) + clarificar la ira.",
        "Planificar: objetivos, etapas, métricas.",
      ],
    },
    {
      slug: "jupiter",
      nom: "Júpiter retrógrado",
      tone: "social",
      keywords: ["revisión de creencias", "sentido", "ética", "crecimiento interior"],
      whatItDoes: "Júpiter = expansión, visión, sentido, oportunidades, enseñanza.",
      retroMeaningNatal:
        "En natal: búsqueda de sentido interior, sabiduría por experiencia. Reto: dudar a la hora de ocupar tu lugar.",
      retroMeaningTransit:
        "En tránsito: revisar una dirección (estudios, proyecto, visión). Consolidación > inflación. Se corrige el rumbo antes de acelerar.",
      stations: [
        "Estación retrógrada: frenar la expansión, revisar el rumbo.",
        "Corazón de la retrógrada: coherencia valores ↔ objetivos.",
        "Estación directa: crecimiento más alineado.",
      ],
      greenFlags: ["Rehacer un plan limpio", "Clarificar posicionamiento/oferta", "Profundizar el aprendizaje"],
      redFlags: ["Prometer demasiado", "Dispersarse", "Contarse una historia"],
      howToWorkWithIt: ["Auditar visión/objetivos", "Limitar a 1–2 ejes", "Medir lo real (hechos)"],
    },
    {
      slug: "saturne",
      nom: "Saturno retrógrado",
      tone: "social",
      keywords: ["responsabilidad", "estructura", "madurez", "reparación", "autoridad interior"],
      whatItDoes: "Saturno = límites, marco, compromisos, construcción duradera.",
      retroMeaningNatal:
        "En natal: autoridad interior, rigor. Reto: autocrítica, miedo a hacerlo mal, tener que demostrar.",
      retroMeaningTransit:
        "En tránsito: reparar una estructura (contrato, marco, organización). Se consolida lo que debe durar.",
      stations: [
        "Estación retrógrada: presión → revisar los cimientos.",
        "Corazón de la retrógrada: simplificar, reparar, reencuadrar.",
        "Estación directa: se vuelve a partir sobre algo sólido.",
      ],
      greenFlags: ["Sanear finanzas/agenda", "Estabilizar un proyecto", "Límites claros"],
      redFlags: ["Rigidez", "Pesimismo", "Cargar con todo solo"],
      howToWorkWithIt: ["Menos pero mejor", "Renegociar si hace falta", "Crear rutinas/procesos"],
    },
    {
      slug: "uranus",
      nom: "Urano retrógrado",
      tone: "transpersonnel",
      keywords: ["libertad interior", "chispazo", "actualización", "desidentificación"],
      whatItDoes: "Urano = ruptura, libertad, innovación, despertar.",
      retroMeaningNatal:
        "En natal: singularidad interior, autonomía. Reto: inestabilidad nerviosa, sentirse diferente.",
      retroMeaningTransit:
        "En tránsito: cambio interno (actualización del “software”). El movimiento externo viene después.",
      stations: [
        "Estación retrógrada: nerviosismo → reducir la sobrecarga.",
        "Corazón de la retrógrada: probar en pequeño, iterar.",
        "Estación directa: puesta en práctica más visible si estás listo.",
      ],
      greenFlags: ["Modernizar sin romperlo todo", "Liberarse de una identidad", "Innovación progresiva"],
      redFlags: ["Cambiar para huir", "Sobreestimulación", "Ruptura impulsiva"],
      howToWorkWithIt: ["Probar a pequeña escala", "Mantener una base estable", "Intuición + verificación"],
    },
    {
      slug: "neptune",
      nom: "Neptuno retrógrado",
      tone: "transpersonnel",
      keywords: ["clarificación", "desilusión", "inspiración", "sensibilidad", "verdad"],
      whatItDoes: "Neptuno = ideal, inspiración, compasión, imaginación.",
      retroMeaningNatal:
        "En natal: hipersensibilidad, imaginación, intuición. Reto: fronteras difusas, idealización.",
      retroMeaningTransit:
        "En tránsito: disipar la niebla. Se clarifica un sueño, una fe, una relación con el ideal.",
      stations: [
        "Estación retrógrada: higiene, sueño, límites.",
        "Corazón de la retrógrada: lo real vs la fantasía.",
        "Estación directa: inspiración más encarnada.",
      ],
      greenFlags: ["Clarificar un ideal", "Limpiar dependencias", "Crear con verdad"],
      redFlags: ["Huida", "Proyección", "Promesas vagas", "Salvador/víctima"],
      howToWorkWithIt: ["Verificar los hechos", "Limitar la energía entregada", "Anclaje cuerpo/rutina"],
    },
    {
      slug: "pluton",
      nom: "Plutón retrógrado",
      tone: "transpersonnel",
      keywords: ["transformación", "detox", "poder", "muda", "verdad profunda"],
      whatItDoes: "Plutón = crisis, muda, intensidad, verdad, regeneración.",
      retroMeaningNatal:
        "En natal: poder interior, lucidez. Reto: control, miedo a perder, obsesión.",
      retroMeaningTransit:
        "En tránsito: detox profunda y lenta. Efectos sutiles al principio, muy nítidos con el tiempo.",
      stations: [
        "Estación retrógrada: observar sin forzar.",
        "Corazón de la retrógrada: limpieza (hábitos, apegos).",
        "Estación directa: decisiones irreversibles si están maduras.",
      ],
      greenFlags: ["Terapia/purga", "Recuperar tu poder", "Alineación profunda"],
      redFlags: ["Juegos de poder", "Manipulación", "Quemarlo todo"],
      howToWorkWithIt: ["Nombrar la verdad", "Detox progresiva", "Disciplina + decisiones claras"],
    },
  ],
};

export const retrogradesContent: Record<SeoLocale, RetrogradesContent> = { fr, en, es };
