import { Link } from "@/i18n/navigation";
import type { ReactNode } from "react";
import type { SeoLocale } from "@/lib/seo";

/* ====================================================================
   Astro-psychologie — contenu localisé (fr / en / es)
   Les clés logiques sont identiques dans chaque langue ; seuls les
   textes sont traduits. Clés logiques conservées en l'état :
   - section `id`, hrefs (<Link>), codes MBTI, chiffres romains des
     maisons, clés de la légende (E/I/S/N/T/F/J/P), clés couleur
     (`couleur`).
   - GROUPE_COLOR et ELEMENT_COLOR (dans page.tsx) indexent sur les
     valeurs FR de `groupe` ("Luminaire", …) et `element`
     ("Feu", "Terre", "Air", "Eau"). Ces deux champs RESTENT donc en
     français dans toutes les langues (clés logiques). On ajoute des
     champs d'affichage traduits : `groupeLabel` et `elementLabel`.
   ==================================================================== */

export type AstroPsyContent = {
  meta: { title: string; description: string };
  jsonld: { headline: string; description: string; articleSection: string };
  hero: { badge: string; title: string; subtitle: string; highlights: string[] };
  defBoxBody: ReactNode;
  introBody: ReactNode;
  sections: { id: string; label: string }[];
  labels: {
    toc: string;
    defEyebrow: string;
    resume: string;
    ceQueCeNestPas: string;
    maison: string;
    etapes: string;
    limites: string;
    footerPlanetes: string;
    footerAspects: string;
    footerSignificateurs: string;
    footerMaisons: string;
    h2Definition: string;
    h2Origines: string;
    h2Principes: string;
    h2Concepts: string;
    h2Fonctions: string;
    h2Elements: string;
    h2Triade: string;
    h2Lettres: string;
    h2Types16: string;
    h2Aspects: string;
    h2MaisonsPsy: string;
    h2Ombre: string;
    h2Cycles: string;
    h2Tradition: string;
    h2Pratique: string;
    h2Exemples: string;
    h2FaqData: string;
    h2FaqVisible: string;
  };
  definition: { resume: string[]; ceQueCeNestPas: string[] };
  origines: { intro: string[]; reperes: { label: string; sens: string }[] };
  principes: { intro: string[]; items: { label: string; sens: string }[] };
  concepts: { intro: string[]; items: { terme: string; def: string }[] };
  planetesFonctions: {
    intro: string[];
    table: { astre: string; groupe: string; groupeLabel: string; fonction: string }[];
  };
  elementsFonctions: {
    intro: string[];
    items: {
      element: string;
      elementLabel: string;
      fonction: string;
      signes: string;
      sens: string;
    }[];
    note: string;
  };
  triade: { intro: string[]; items: { label: string; sens: string }[] };
  lettres: {
    intro: string[];
    axes: {
      paire: string;
      titre: string;
      question: string;
      couleur: string;
      poles: { lettre: string; nom: string; sens: string }[];
      astro: string;
    }[];
    note: string;
  };
  legende: Record<string, string>;
  types16: {
    intro: string[];
    familles: {
      nom: string;
      couleur: string;
      resonance: string;
      types: {
        code: string;
        surnom: string;
        dominante: string;
        trait: string;
        synthese: string;
        astro: string;
      }[];
    }[];
    note: string;
  };
  aspects: { intro: string[]; items: { label: string; sens: string }[] };
  maisonsPsy: { intro: string[]; items: { maison: string; theme: string }[] };
  cyclesVie: {
    intro: string[];
    items: { age: string; nom: string; sens: string }[];
    note: string;
  };
  ombreProjection: { intro: string[]; items: { label: string; sens: string }[] };
  traditionVsPsy: { intro: string[]; items: { label: string; sens: string }[] };
  pratique: { intro: string[]; etapes: string[] };
  exemplesLecture: { titre: string; texte: string }[];
  limites: string[];
  faq: { q: string; a: string }[];
  faqVisible: { q: string; a: string }[];
};

/* ============================== FR ============================== */
const fr: AstroPsyContent = {
  meta: {
    title: "Astro-psychologie : le thème et la psyché",
    description:
      "Astro-psychologie : approche jungienne. Fonctions psychiques, 16 types (MBTI), maisons psychologiques, ombre et individuation. Cours complet !",
  },
  jsonld: {
    headline: "Astro-psychologie : le thème comme carte de la psyché",
    description:
      "Astro-psychologie : approche jungienne et humaniste de l'astrologie. Fonctions psychiques, typologie jungienne et 16 types (MBTI), maisons psychologiques, ombre et individuation.",
    articleSection: "Astrologie",
  },
  hero: {
    badge: "Cours d’astrologie — Approche moderne",
    title: "Astro-psychologie : la carte de la psyché",
    subtitle:
      "Lire le thème non comme un destin écrit, mais comme une carte du fonctionnement intérieur. Une astrologie tournée vers la connaissance de soi, héritière de Jung, Rudhyar et Liz Greene.",
    highlights: [
      "Les planètes comme fonctions psychiques",
      "Typologie jungienne & archétypes",
      "Maisons psychologiques & cycles de vie",
      "Ombre, projection & individuation",
    ],
  },
  defBoxBody: (
    <>
      L’<strong>astro-psychologie</strong> lit le <Link href="/theme-astral">thème astral</Link> comme une carte de la
      psyché : un portrait des dynamiques intérieures et des potentiels de croissance, plutôt qu’une prédiction.
    </>
  ),
  introBody: (
    <>
      Et si le thème ne disait pas <em>ce qui va arriver</em>, mais <em>qui l’on est</em> ? L’
      <strong>astro-psychologie</strong> — héritière de Carl Jung, Dane Rudhyar et Liz Greene — déplace l’astrologie du
      terrain de la divination vers celui de la connaissance de soi. Les planètes y deviennent des fonctions psychiques,
      les aspects des dynamiques intérieures, et le thème, un chemin d’individuation.
    </>
  ),
  sections: [
    { id: "definition", label: "Définition" },
    { id: "origines", label: "Origines" },
    { id: "principes", label: "Principes" },
    { id: "concepts", label: "Concepts clés" },
    { id: "fonctions", label: "Planètes & psyché" },
    { id: "elements", label: "Typologie jungienne" },
    { id: "triade", label: "Triade" },
    { id: "lettres", label: "Les 4 lettres" },
    { id: "types16", label: "16 types (MBTI)" },
    { id: "aspects", label: "Aspects" },
    { id: "maisons-psy", label: "Maisons psy" },
    { id: "ombre", label: "Ombre & projection" },
    { id: "cycles", label: "Cycles de vie" },
    { id: "tradition", label: "Tradition vs psy" },
    { id: "pratique", label: "Pratique" },
    { id: "exemples", label: "Exemples" },
    { id: "faq", label: "FAQ" },
  ],
  labels: {
    toc: "Sommaire",
    defEyebrow: "Définition",
    resume: "Résumé",
    ceQueCeNestPas: "Ce que ce n’est pas",
    maison: "Maison",
    etapes: "Étapes",
    limites: "Limites & précautions",
    footerPlanetes: "Planètes",
    footerAspects: "Aspects",
    footerSignificateurs: "Significateurs",
    footerMaisons: "Maisons",
    h2Definition: "Qu’est-ce que l’astro-psychologie ?",
    h2Origines: "Origines : Jung, Rudhyar, Liz Greene",
    h2Principes: "Les principes clés",
    h2Concepts: "Les concepts jungiens essentiels",
    h2Fonctions: "Les planètes comme fonctions psychiques",
    h2Elements: "Typologie jungienne : éléments & fonctions",
    h2Triade: "La triade Soleil – Lune – Ascendant",
    h2Lettres: "Les 4 lettres : décoder un type",
    h2Types16: "Les 16 types (typologie jungienne / MBTI)",
    h2Aspects: "Les aspects comme dynamiques internes",
    h2MaisonsPsy: "Les maisons comme domaines d’expérience",
    h2Ombre: "Ombre, projection et individuation",
    h2Cycles: "Les grands cycles de vie",
    h2Tradition: "Astro-psychologie ou astrologie traditionnelle ?",
    h2Pratique: "Lire son thème : une trame en six temps",
    h2Exemples: "Exemples de lecture psychologique",
    h2FaqData: "Questions fréquentes sur l’astro-psychologie",
    h2FaqVisible: "Questions fréquentes sur l’astro-psychologie",
  },
  definition: {
    resume: [
      "L’astro-psychologie envisage le thème comme une carte de la psyché : un portrait des dynamiques intérieures, des besoins et des potentiels.",
      "Elle déplace la question de « que va-t-il m’arriver ? » vers « qui suis-je et comment puis-je grandir ? ».",
      "Née de la rencontre entre astrologie et psychologie des profondeurs (Carl Jung), elle privilégie le sens, l’archétype et l’individuation.",
    ],
    ceQueCeNestPas: [
      "Une prédiction déterministe : le thème décrit des potentiels, pas un destin figé.",
      "Un substitut à une thérapie ou à un suivi psychologique professionnel.",
      "Un diagnostic : aucun placement ne « cause » un trouble mental.",
    ],
  },
  origines: {
    intro: [
      "L’astro-psychologie est une école récente (XXe siècle) qui relit l’astrologie classique à la lumière de la psychologie des profondeurs.",
    ],
    reperes: [
      {
        label: "Carl Gustav Jung",
        sens: "Apporte les notions d’archétype, d’inconscient collectif, d’ombre et de synchronicité, terreau conceptuel de l’approche.",
      },
      {
        label: "Dane Rudhyar",
        sens: "Fonde l’astrologie « humaniste » : le thème devient un outil de croissance personnelle et d’accomplissement du potentiel.",
      },
      {
        label: "Liz Greene",
        sens: "Développe l’astrologie psychologique moderne, en croisant mythe, archétype et pratique clinique (Centre for Psychological Astrology).",
      },
    ],
  },
  principes: {
    intro: ["Quelques principes distinguent l’astro-psychologie des approches plus prédictives."],
    items: [
      { label: "Le thème = potentiel, pas destin", sens: "On lit des tendances et des défis, que la conscience peut orienter." },
      { label: "Libre arbitre", sens: "Le placement décrit une énergie ; la façon de la vivre dépend du niveau de conscience." },
      { label: "Intériorité avant événements", sens: "On cherche d’abord le sens intérieur d’un placement plutôt qu’un fait extérieur." },
      { label: "Croissance & individuation", sens: "Le but est d’intégrer toutes les parties du thème en un soi plus entier." },
    ],
  },
  concepts: {
    intro: [
      "Quelques notions jungiennes reviennent constamment en astro-psychologie. Les maîtriser éclaire toute la lecture.",
    ],
    items: [
      { terme: "Inconscient collectif", def: "Couche profonde et partagée de la psyché humaine, réservoir des archétypes communs à toute l’humanité." },
      { terme: "Archétype", def: "Motif universel et structurant (le Héros, la Mère, le Sage…) que signes et planètes viennent incarner." },
      { terme: "Persona", def: "Le masque social, l’image que l’on présente — souvent liée à l’Ascendant et au Milieu du Ciel." },
      { terme: "Ombre", def: "Tout ce que le moi refuse ou ignore de lui-même ; énergie refoulée qui demande à être intégrée." },
      { terme: "Anima / Animus", def: "L’image intérieure du féminin (chez l’homme) ou du masculin (chez la femme), souvent projetée sur le partenaire." },
      { terme: "Le Soi", def: "Le centre total de la psyché, au-delà du moi : but de l’individuation, parfois associé au thème pris comme un tout." },
      { terme: "Synchronicité", def: "Coïncidence signifiante entre un état intérieur et un événement extérieur : le pont symbolique que suppose l’astrologie." },
      { terme: "Individuation", def: "Processus de toute une vie : devenir soi-même en intégrant conscient et inconscient, lumière et ombre." },
    ],
  },
  planetesFonctions: {
    intro: [
      "En astro-psychologie, chaque planète représente une fonction psychique : une manière dont l’énergie psychique s’exprime. On les regroupe par portée.",
    ],
    table: [
      { astre: "Soleil", groupe: "Luminaire", groupeLabel: "Luminaire", fonction: "Le moi conscient, l’identité, le projet de vie, ce que l’on cherche à devenir." },
      { astre: "Lune", groupe: "Luminaire", groupeLabel: "Luminaire", fonction: "Le monde émotionnel, les besoins, la sécurité, l’enfant intérieur, l’inconscient personnel." },
      { astre: "Mercure", groupe: "Personnelle", groupeLabel: "Personnelle", fonction: "Le mental, la pensée, le langage, la façon d’apprendre et de relier." },
      { astre: "Vénus", groupe: "Personnelle", groupeLabel: "Personnelle", fonction: "Les valeurs, le rapport à l’amour, au plaisir, à l’estime de soi, à la beauté." },
      { astre: "Mars", groupe: "Personnelle", groupeLabel: "Personnelle", fonction: "Le désir, l’affirmation, la colère, la capacité à agir et à poser des limites." },
      { astre: "Jupiter", groupe: "Sociale", groupeLabel: "Sociale", fonction: "Le sens, la croyance, la confiance, le besoin de croissance et d’horizon." },
      { astre: "Saturne", groupe: "Sociale", groupeLabel: "Sociale", fonction: "La structure, la peur, l’autorité intérieure, la maturation par la limite." },
      { astre: "Uranus", groupe: "Transpersonnelle", groupeLabel: "Transpersonnelle", fonction: "L’individualité, le besoin de liberté, les ruptures, l’éveil." },
      { astre: "Neptune", groupe: "Transpersonnelle", groupeLabel: "Transpersonnelle", fonction: "L’imaginaire, l’idéal, la dissolution des frontières, le spirituel et l’illusion." },
      { astre: "Pluton", groupe: "Transpersonnelle", groupeLabel: "Transpersonnelle", fonction: "Les profondeurs, le pouvoir, la mort/renaissance psychique, la transformation." },
      { astre: "Chiron", groupe: "Point sensible", groupeLabel: "Point sensible", fonction: "La blessure fondatrice et le don de guérisseur qu’elle révèle : là où l’on souffre et où l’on peut aider." },
      { astre: "Nœuds lunaires", groupe: "Axe d’évolution", groupeLabel: "Axe d’évolution", fonction: "Nœud Sud : acquis et zone de confort ; Nœud Nord : direction de croissance à développer." },
    ],
  },
  elementsFonctions: {
    intro: [
      "Jung distingue quatre fonctions psychologiques. L’astro-psychologie les fait correspondre aux quatre éléments : un pont direct entre typologie jungienne et thème astral.",
    ],
    items: [
      { element: "Feu", elementLabel: "Feu", fonction: "Intuition", signes: "Bélier, Lion, Sagittaire", sens: "Perception des possibles, élan, vision, enthousiasme ; saisit le sens global avant les détails." },
      { element: "Terre", elementLabel: "Terre", fonction: "Sensation", signes: "Taureau, Vierge, Capricorne", sens: "Ancrage dans le concret, le corps, le réel, l’utile ; fait confiance à ce qui se touche et se vérifie." },
      { element: "Air", elementLabel: "Air", fonction: "Pensée", signes: "Gémeaux, Balance, Verseau", sens: "Logique, mise en relation, objectivité, langage ; comprend en reliant les idées." },
      { element: "Eau", elementLabel: "Eau", fonction: "Sentiment", signes: "Cancer, Scorpion, Poissons", sens: "Évaluation par le ressenti, empathie, valeur affective ; sait ce qui compte émotionnellement." },
    ],
    note: "Un élément absent ou dominant dans le thème signale une fonction peu développée ou hypertrophiée — une piste précieuse pour l’équilibre intérieur.",
  },
  triade: {
    intro: [
      "Trois points forment le noyau de la personnalité psychologique : on les lit ensemble, comme un trio en dialogue.",
    ],
    items: [
      { label: "Soleil", sens: "Ce que je cherche à devenir : l’axe conscient, le héros de mon histoire." },
      { label: "Lune", sens: "Ce dont j’ai besoin pour me sentir en sécurité : le terreau émotionnel, souvent inconscient." },
      { label: "Ascendant", sens: "Ma façon d’aborder le monde et de me montrer : le masque (persona), mais aussi la porte d’entrée du parcours." },
    ],
  },
  lettres: {
    intro: [
      "Un type se note par quatre lettres, une par axe. Chaque lettre marque une préférence — pas une case étanche — et fait écho à une polarité bien connue de l’astrologie.",
      "Lire ces quatre lettres, c’est déjà esquisser un tempérament : d’où vient l’énergie, comment on perçoit, comment on décide, comment on s’organise.",
    ],
    axes: [
      {
        paire: "E / I",
        titre: "Orientation de l’énergie",
        question: "Où vais-je puiser mon énergie ?",
        couleur: "sky",
        poles: [
          { lettre: "E", nom: "Extraversion", sens: "Tournée vers le monde extérieur, l’action, les autres ; se recharge au contact." },
          { lettre: "I", nom: "Introversion", sens: "Tournée vers le monde intérieur, la réflexion, l’intimité ; se recharge au calme." },
        ],
        astro: "Écho à l’hémisphère du thème (Est/Ouest) et à la tonalité Feu-Air (plutôt extravertie) face à Terre-Eau (plutôt introvertie).",
      },
      {
        paire: "S / N",
        titre: "Perception",
        question: "Comment je recueille l’information ?",
        couleur: "amber",
        poles: [
          { lettre: "S", nom: "Sensation", sens: "Faits concrets, détails, présent, expérience tangible et vérifiable." },
          { lettre: "N", nom: "iNtuition", sens: "Sens global, possibles, liens, vision d’ensemble avant les détails." },
        ],
        astro: "Les deux fonctions de perception de Jung : Sensation = élément Terre ; iNtuition = élément Feu.",
      },
      {
        paire: "T / F",
        titre: "Décision",
        question: "Comment je tranche ?",
        couleur: "indigo",
        poles: [
          { lettre: "T", nom: "Pensée (Thinking)", sens: "Logique, objectivité, cohérence, justice impersonnelle." },
          { lettre: "F", nom: "Sentiment (Feeling)", sens: "Valeurs, harmonie, impact humain, empathie." },
        ],
        astro: "Les deux fonctions de jugement de Jung : Pensée = élément Air ; Sentiment = élément Eau.",
      },
      {
        paire: "J / P",
        titre: "Style de vie",
        question: "Comment j’aborde le monde extérieur ?",
        couleur: "emerald",
        poles: [
          { lettre: "J", nom: "Jugement (Judging)", sens: "Planifié, structuré, décidé ; aime conclure et organiser." },
          { lettre: "P", nom: "Perception (Perceiving)", sens: "Souple, ouvert, spontané ; aime garder les options ouvertes." },
        ],
        astro: "J évoque les signes cardinaux/fixes et Saturne (structure) ; P les signes mutables et Jupiter/Uranus (souplesse).",
      },
    ],
    note: "Les deux lettres centrales (perception + décision) forment la « paire de fonctions » au cœur du type — d’où les familles NT, NF, SJ et SP.",
  },
  legende: {
    E: "Extraversion — énergie tournée vers l’extérieur, l’action, les autres.",
    I: "Introversion — énergie tournée vers l’intérieur, la réflexion, l’intimité.",
    S: "Sensation — perçoit par les faits concrets, le présent, le tangible.",
    N: "iNtuition — perçoit par le sens global, les liens, les possibles.",
    T: "Pensée (Thinking) — décide par la logique et l’objectivité.",
    F: "Sentiment (Feeling) — décide par les valeurs et l’impact humain.",
    J: "Jugement (Judging) — vit de façon structurée, planifiée, décidée.",
    P: "Perception (Perceiving) — vit de façon souple, ouverte, spontanée.",
  },
  types16: {
    intro: [
      "La typologie de Jung a donné naissance, via Myers & Briggs, aux 16 profils (MBTI). Comme l’astro-psychologie, ils reposent sur les mêmes fonctions (Pensée/Sentiment, Sensation/Intuition) et sur l’axe introversion/extraversion.",
      "Chaque type a une fonction « dominante » (la plus utilisée). On en donne ici une résonance astrologique — analogique, jamais une correspondance exacte signe ↔ type.",
    ],
    familles: [
      {
        nom: "Analystes (NT)",
        couleur: "violet",
        resonance: "Tonalité Air / Feu — intuition + pensée. Affinités Verseau, Gémeaux, Sagittaire.",
        types: [
          { code: "INTJ", surnom: "L’Architecte", dominante: "Intuition introvertie (Ni)", trait: "Vision stratégique, intériorité, plans à long terme ; autonomie et exigence.", synthese: "I + N + T + J : une intuition stratégique tournée vers l’intérieur (Ni), mise en ordre par la logique et la planification. D’où un visionnaire autonome qui construit sur le long terme.", astro: "Saturne–Pluton, tonalité Capricorne/Scorpion : le stratège visionnaire." },
          { code: "INTP", surnom: "Le Logicien", dominante: "Pensée introvertie (Ti)", trait: "Analyse, curiosité conceptuelle, indépendance d’esprit ; goût des systèmes.", synthese: "I + N + T + P : l’intuition nourrit une logique interne (Ti) qui reste ouverte et exploratoire. D’où un théoricien curieux qui dissèque les systèmes sans se presser de conclure.", astro: "Mercure–Uranus, Verseau/Gémeaux : le penseur abstrait." },
          { code: "ENTJ", surnom: "Le Commandant", dominante: "Pensée extravertie (Te)", trait: "Leadership, organisation, ambition structurante ; décide et exécute.", synthese: "E + N + T + J : une logique tournée vers l’action (Te) qui met en œuvre une vision d’ensemble. D’où un meneur décidé qui structure et exécute.", astro: "Mars–Saturne, Capricorne/Bélier : le bâtisseur d’organisations." },
          { code: "ENTP", surnom: "L’Innovateur", dominante: "Intuition extravertie (Ne)", trait: "Idées, débat, exploration des possibles ; avocat du diable enthousiaste.", synthese: "E + N + T + P : l’intuition explore tous azimuts (Ne) au service du débat et des idées. D’où un inventeur qui aime remettre en question l’évidence.", astro: "Mercure–Uranus, Gémeaux/Sagittaire : l’inventeur touche-à-tout." },
        ],
      },
      {
        nom: "Diplomates (NF)",
        couleur: "fuchsia",
        resonance: "Tonalité Eau / Feu — intuition + sentiment. Affinités Poissons, Cancer, Sagittaire.",
        types: [
          { code: "INFJ", surnom: "L’Avocat", dominante: "Intuition introvertie (Ni)", trait: "Idéalisme, profondeur, sens du symbole et de l’autre ; conviction tranquille.", synthese: "I + N + F + J : une intuition profonde et intérieure (Ni) guidée par les valeurs et le souci de l’autre, dans un cadre structuré. D’où un idéaliste à la conviction tranquille.", astro: "Neptune–Saturne, Poissons/Scorpion : le visionnaire empathique." },
          { code: "INFP", surnom: "Le Médiateur", dominante: "Sentiment introverti (Fi)", trait: "Valeurs intérieures, imaginaire, quête d’authenticité ; fidèle à son monde.", synthese: "I + N + F + P : des valeurs intimes très fortes (Fi) éclairées par l’imaginaire, sans rigidité. D’où un rêveur authentique, fidèle à son monde intérieur.", astro: "Neptune–Lune, Poissons/Cancer : l’idéaliste sensible." },
          { code: "ENFJ", surnom: "Le Protagoniste", dominante: "Sentiment extraverti (Fe)", trait: "Inspiration, charisme, soin du collectif ; sait fédérer et élever.", synthese: "E + N + F + J : un sentiment tourné vers les autres (Fe) porté par une vision inspirante et organisée. D’où un meneur chaleureux qui fédère et élève.", astro: "Soleil–Vénus, Lion/Balance : le meneur chaleureux." },
          { code: "ENFP", surnom: "L’Inspirateur", dominante: "Intuition extravertie (Ne)", trait: "Enthousiasme, lien, possibilités humaines ; éclaireur spontané.", synthese: "E + N + F + P : une intuition foisonnante (Ne) au service du lien humain et de l’enthousiasme, en restant ouvert. D’où un éclaireur qui ouvre des possibles.", astro: "Jupiter–Mercure, Sagittaire/Gémeaux : l’éclaireur enthousiaste." },
        ],
      },
      {
        nom: "Sentinelles (SJ)",
        couleur: "emerald",
        resonance: "Tonalité Terre — sensation + jugement. Affinités Capricorne, Vierge, Taureau.",
        types: [
          { code: "ISTJ", surnom: "Le Logisticien", dominante: "Sensation introvertie (Si)", trait: "Fiabilité, méthode, sens du devoir ; mémoire du concret et des règles.", synthese: "I + S + T + J : une mémoire fidèle du concret (Si) organisée par la logique et le devoir. D’où un gardien fiable de l’ordre établi.", astro: "Saturne, Capricorne/Vierge : le gardien fiable." },
          { code: "ISFJ", surnom: "Le Défenseur", dominante: "Sensation introvertie (Si)", trait: "Loyauté, soin discret, attention aux besoins ; protège ce qui dure.", synthese: "I + S + F + J : la même attention au concret (Si) mise au service des autres et de l’harmonie. D’où un protecteur dévoué et discret.", astro: "Lune–Saturne, Cancer/Vierge : le protecteur dévoué." },
          { code: "ESTJ", surnom: "Le Directeur", dominante: "Pensée extravertie (Te)", trait: "Ordre, gestion, autorité pratique ; structure les groupes.", synthese: "E + S + T + J : une logique tournée vers l’action (Te) appliquée au réel et aux règles. D’où un organisateur, une figure d’autorité pratique.", astro: "Saturne–Mars, Capricorne/Lion : l’organisateur, figure d’autorité." },
          { code: "ESFJ", surnom: "Le Consul", dominante: "Sentiment extraverti (Fe)", trait: "Sociabilité, soutien, sens de l’harmonie sociale ; ciment du groupe.", synthese: "E + S + F + J : un sentiment tourné vers le groupe (Fe) ancré dans le concret et les traditions. D’où un pilier social attentionné.", astro: "Vénus–Lune, Cancer/Balance : le pilier social attentionné." },
        ],
      },
      {
        nom: "Explorateurs (SP)",
        couleur: "amber",
        resonance: "Tonalité Feu / Terre — sensation + spontanéité. Affinités Bélier, Lion, Taureau.",
        types: [
          { code: "ISTP", surnom: "Le Virtuose", dominante: "Pensée introvertie (Ti)", trait: "Habileté concrète, sang-froid, goût du réel ; résout en silence.", synthese: "I + S + T + P : une logique interne (Ti) appliquée au concret, avec sang-froid et souplesse. D’où un artisan pragmatique qui résout en silence.", astro: "Mars–Mercure, Vierge/Scorpion : l’artisan pragmatique." },
          { code: "ISFP", surnom: "L’Aventurier", dominante: "Sentiment introverti (Fi)", trait: "Sensibilité esthétique, liberté, présence à l’instant ; discret mais ferme sur ses valeurs.", synthese: "I + S + F + P : des valeurs intimes (Fi) vécues dans le sensible et l’instant présent, sans contrainte. D’où un esthète libre, discret mais ferme sur ce qui compte.", astro: "Vénus–Lune, Taureau/Poissons : l’esthète sensible." },
          { code: "ESTP", surnom: "L’Entrepreneur", dominante: "Sensation extravertie (Se)", trait: "Action, audace, sens de l’opportunité ; vit dans le présent.", synthese: "E + S + T + P : une sensation tournée vers l’action (Se) doublée d’un sens tactique. D’où un fonceur joueur qui saisit l’opportunité.", astro: "Mars–Soleil, Bélier/Lion : le fonceur joueur." },
          { code: "ESFP", surnom: "L’Amuseur", dominante: "Sensation extravertie (Se)", trait: "Énergie, plaisir, contact chaleureux ; met de la vie partout.", synthese: "E + S + F + P : une sensation vive du présent (Se) au service du plaisir partagé. D’où un bon vivant rayonnant qui met de la vie partout.", astro: "Vénus–Soleil, Lion/Taureau : le bon vivant rayonnant." },
        ],
      },
    ],
    note: "À lire comme un pont entre deux langages typologiques : aucun type ne « correspond » exactement à un signe. C’est la dominante de fonction et d’attitude qui crée la résonance.",
  },
  aspects: {
    intro: [
      "Les aspects ne sont plus « bons » ou « mauvais » mais des dynamiques internes entre deux fonctions psychiques.",
    ],
    items: [
      { label: "Conjonction", sens: "Fusion de deux fonctions : elles agissent ensemble, parfois sans recul." },
      { label: "Trigone & sextile", sens: "Talents fluides, ressources disponibles — au risque de la facilité non travaillée." },
      { label: "Carré", sens: "Tension motrice : friction interne qui pousse à l’effort et à la croissance." },
      { label: "Opposition", sens: "Polarité à intégrer : deux besoins qui se projettent souvent sur autrui avant d’être réconciliés." },
    ],
  },
  maisonsPsy: {
    intro: [
      "En lecture psychologique, les maisons sont les grands domaines d’expérience où les fonctions s’incarnent et où se jouent les projections.",
    ],
    items: [
      { maison: "I", theme: "L’identité naissante, l’image de soi, la façon spontanée d’aborder la vie." },
      { maison: "II", theme: "L’estime de soi, le rapport au corps, aux ressources et à ce qui a de la valeur." },
      { maison: "III", theme: "Le mental concret, l’apprentissage, la communication, la fratrie intérieure." },
      { maison: "IV", theme: "Les racines, la famille intériorisée, le sentiment d’appartenance, le foyer psychique." },
      { maison: "V", theme: "La créativité, le jeu, l’expression spontanée du moi, l’enfant créateur." },
      { maison: "VI", theme: "Le quotidien, le corps-instrument, le service, l’ajustement et l’hygiène de vie." },
      { maison: "VII", theme: "L’autre, le miroir, la projection, ce que je cherche et fuis dans la relation." },
      { maison: "VIII", theme: "L’intimité profonde, les crises, la transformation, ce qui meurt et renaît en soi." },
      { maison: "IX", theme: "Le sens, les croyances, l’ouverture, la quête de vision et d’horizon." },
      { maison: "X", theme: "La vocation, l’accomplissement, la persona publique, la figure d’autorité intériorisée." },
      { maison: "XI", theme: "Les idéaux, l’appartenance au groupe, le moi tourné vers le collectif et l’avenir." },
      { maison: "XII", theme: "L’inconscient, l’ombre, le refoulé, ce qui se dissout et demande à être conscientisé." },
    ],
  },
  cyclesVie: {
    intro: [
      "L’astrologie « développementale » lit les grands transits comme des étapes de maturation psychique. Quelques rendez-vous structurent presque toutes les vies.",
    ],
    items: [
      { age: "≈ 29–30 ans", nom: "Retour de Saturne", sens: "Premier passage à l’âge adulte : on quitte les modèles hérités pour bâtir une structure qui nous ressemble." },
      { age: "≈ 38–43 ans", nom: "Opposition d’Uranus", sens: "« Crise du milieu de vie » : besoin de réveil, de liberté et d’authenticité face à ce qui est devenu trop étroit." },
      { age: "≈ 49–51 ans", nom: "Retour de Chiron", sens: "Retour sur la blessure fondatrice : occasion d’en faire une sagesse et un don pour autrui." },
      { age: "≈ 58–60 ans", nom: "Second retour de Saturne", sens: "Bilan de maturité : transmettre, alléger, assumer l’autorité d’une vie traversée." },
    ],
    note: "Ces cycles ne « causent » rien mécaniquement : ils marquent des fenêtres de maturation que la conscience peut saisir.",
  },
  ombreProjection: {
    intro: ["Trois notions jungiennes sont centrales pour comprendre comment un thème se vit concrètement."],
    items: [
      { label: "L’ombre", sens: "Les parties refoulées ou non assumées du thème (souvent les planètes mal aimées) : ce qu’on n’ose pas vivre." },
      { label: "La projection", sens: "Voir chez l’autre ce qu’on ne reconnaît pas en soi : un Mars refoulé est perçu comme l’agressivité des autres." },
      { label: "L’individuation", sens: "Le processus d’intégration : faire dialoguer toutes les fonctions du thème pour devenir plus entier." },
    ],
  },
  traditionVsPsy: {
    intro: ["L’astro-psychologie ne nie pas l’astrologie classique : elle en change la finalité."],
    items: [
      { label: "Astrologie traditionnelle", sens: "Vise souvent l’événement, le timing, le « oui/non » ; le thème décrit un sort." },
      { label: "Astro-psychologie", sens: "Vise la compréhension intérieure et la croissance ; le thème décrit un potentiel à conscientiser." },
      { label: "Complémentarité", sens: "Beaucoup d’astrologues combinent les deux : la rigueur technique au service du sens psychologique." },
    ],
  },
  pratique: {
    intro: ["Comment lire concrètement un thème dans une optique psychologique ? Voici une trame en six temps."],
    etapes: [
      "1) Poser le décor : élément et fonction dominants, équilibre des quatre éléments (où est l’aisance, où le manque ?).",
      "2) Lire la triade Soleil / Lune / Ascendant comme un dialogue entre identité, besoins et persona.",
      "3) Situer Saturne : la peur structurante, l’autorité intérieure, le chantier de maturité.",
      "4) Repérer les fonctions en tension (carrés, oppositions) : les frictions qui poussent à grandir.",
      "5) Chercher l’ombre : planètes refoulées, maison XII, ce qui est projeté sur autrui.",
      "6) Replacer le tout dans le temps : où en suis-je dans mes grands cycles de vie ?",
    ],
  },
  exemplesLecture: [
    { titre: "Lune en Capricorne", texte: "Plutôt qu’« émotions froides », on lit un besoin de sécurité par la maîtrise et la responsabilité, souvent un enfant intérieur qui a appris tôt à se contrôler. Le travail consiste à autoriser la vulnérabilité." },
    { titre: "Carré Soleil–Saturne", texte: "Non pas une malédiction, mais une tension entre l’élan d’être soi (Soleil) et une autorité intérieure critique (Saturne). Bien intégré, il donne discipline, endurance et autorité légitime." },
    { titre: "Mars en maison XII", texte: "Une affirmation peu consciente, parfois refoulée et projetée (« les autres sont agressifs »). L’enjeu : récupérer son Mars, oser le désir et la colère saine au lieu de les enfouir." },
    { titre: "Manque d’élément Terre", texte: "La fonction Sensation est peu développée : idées brillantes (Air/Feu) mais difficulté à incarner, à structurer le concret. Le chemin passe par le corps, le réel et la patience." },
    { titre: "Nœud Nord en Balance", texte: "Acquis de l’indépendance (Nœud Sud Bélier), croissance vers la relation, l’écoute et le compromis. Non pas renier son autonomie, mais apprendre à la partager." },
    { titre: "Vénus opposée à Pluton", texte: "Deux fonctions polarisées : le besoin d’harmonie (Vénus) et l’intensité transformatrice (Pluton). Souvent vécu d’abord par projection dans des relations fusionnelles ; à intégrer en profondeur affective consentie." },
  ],
  limites: [
    "Confondre lecture psychologique et diagnostic clinique : l’astro-psychologie n’est pas de la psychologie scientifique.",
    "Ne pas remplacer un accompagnement professionnel en cas de souffrance réelle.",
    "Éviter le déterminisme déguisé (« je suis comme ça à cause de mon thème »).",
    "Ne pas tout réduire à l’ombre ou à l’enfance : garder une lecture nuancée.",
    "Rester prudent : la validité scientifique de l’astrologie n’est pas établie ; il s’agit d’un outil de réflexion symbolique.",
  ],
  faq: [
    { q: "Qu’est-ce que l’astro-psychologie ?", a: "Une approche qui lit le thème comme une carte de la psyché plutôt que comme une prédiction. Elle s’appuie sur la psychologie des profondeurs (Jung) pour favoriser la connaissance de soi." },
    { q: "Quel rapport avec Carl Jung ?", a: "Jung a fourni les concepts clés — archétype, inconscient collectif, ombre, individuation, synchronicité — qui servent de cadre à la lecture psychologique du thème." },
    { q: "L’astro-psychologie prédit-elle l’avenir ?", a: "Non. Elle décrit des potentiels et des dynamiques intérieures que la conscience peut orienter. Elle insiste sur le libre arbitre plutôt que sur le destin." },
    { q: "Remplace-t-elle une thérapie ?", a: "Non. Elle peut accompagner une démarche d’introspection, mais ne remplace ni un psychologue ni un médecin. En cas de souffrance, consultez un professionnel." },
    { q: "Que signifie « ombre » en astrologie psychologique ?", a: "Les parties refoulées du thème — souvent des planètes mal vécues — que l’on n’assume pas et que l’on projette parfois sur autrui." },
    { q: "Comment les éléments correspondent-ils aux fonctions de Jung ?", a: "Feu = Intuition, Terre = Sensation, Air = Pensée, Eau = Sentiment. L’équilibre des éléments du thème indique quelles fonctions psychiques sont aisées ou à développer." },
    { q: "Qu’est-ce que le retour de Saturne ?", a: "Vers 29-30 ans, Saturne revient à sa position de naissance : une étape de maturation où l’on bâtit une vie plus authentique, classiquement lue comme un passage à l’âge adulte." },
    { q: "Quelle est la différence avec l’astrologie traditionnelle ?", a: "La traditionnelle vise souvent l’événement et le timing ; l’astro-psychologie vise le sens intérieur et la croissance. Les deux peuvent se compléter." },
    { q: "Quel rapport entre les 16 types (MBTI) et l’astrologie ?", a: "Les 16 types du MBTI dérivent de la typologie de Jung (fonctions Pensée/Sentiment, Sensation/Intuition + introversion/extraversion), les mêmes fonctions que l’astro-psychologie relie aux quatre éléments. Le rapprochement est analogique : aucun type ne correspond exactement à un signe." },
  ],
  faqVisible: [
    { q: "Faut-il croire au destin pour pratiquer l’astro-psychologie ?", a: "Non, au contraire. Cette approche repose sur le libre arbitre : le thème décrit des énergies et des potentiels, mais la manière de les vivre dépend du niveau de conscience et des choix de la personne." },
    { q: "Quelles planètes sont les plus importantes en lecture psychologique ?", a: "On commence par la triade Soleil (identité consciente), Lune (besoins émotionnels) et Ascendant (rapport au monde), avant d’explorer Saturne (peurs et maturation) et les planètes lentes pour les enjeux profonds." },
    { q: "L’astro-psychologie est-elle scientifique ?", a: "Non. La validité prédictive de l’astrologie n’est pas démontrée scientifiquement. L’astro-psychologie se présente comme un langage symbolique et un outil d’introspection, à manier avec discernement." },
    { q: "Comment utiliser concrètement son thème pour mieux se connaître ?", a: "On repère les fonctions en tension (aspects difficiles), les besoins peu écoutés (Lune, maisons d’eau) et les parties d’ombre, puis on cherche à les conscientiser et à les intégrer plutôt qu’à les subir ou à les projeter." },
    { q: "Qu’est-ce que l’individuation et comment le thème y aide-t-il ?", a: "L’individuation est le processus de toute une vie consistant à devenir pleinement soi en intégrant conscient et inconscient. Le thème en offre une carte : il montre les fonctions à développer, l’ombre à reconnaître et la direction de croissance (Nœud Nord)." },
  ],
};

/* ============================== EN ============================== */
const en: AstroPsyContent = {
  meta: {
    title: "Astro-psychology: the chart as a map of the psyche",
    description:
      "Astro-psychology: a Jungian approach. Psychic functions, the 16 MBTI types, psychological houses, shadow and individuation. A complete course!",
  },
  jsonld: {
    headline: "Astro-psychology: the chart as a map of the psyche",
    description:
      "Astro-psychology: a Jungian and humanistic approach to astrology. Psychic functions, Jungian typology and the 16 types (MBTI), psychological houses, shadow and individuation.",
    articleSection: "Astrology",
  },
  hero: {
    badge: "Astrology course — Modern approach",
    title: "Astro-psychology: the map of the psyche",
    subtitle:
      "Reading the chart not as a fixed destiny, but as a map of how we work inside. An astrology turned toward self-knowledge, heir to Jung, Rudhyar and Liz Greene.",
    highlights: [
      "Planets as psychic functions",
      "Jungian typology & archetypes",
      "Psychological houses & life cycles",
      "Shadow, projection & individuation",
    ],
  },
  defBoxBody: (
    <>
      <strong>Astro-psychology</strong> reads the <Link href="/theme-astral">natal chart</Link> as a map of the psyche: a
      portrait of inner dynamics and growth potentials, rather than a prediction.
    </>
  ),
  introBody: (
    <>
      What if the chart did not say <em>what is going to happen</em>, but <em>who we are</em>?{" "}
      <strong>Astro-psychology</strong> — heir to Carl Jung, Dane Rudhyar and Liz Greene — moves astrology away from
      divination toward self-knowledge. Here the planets become psychic functions, the aspects inner dynamics, and the
      chart a path of individuation.
    </>
  ),
  sections: [
    { id: "definition", label: "Definition" },
    { id: "origines", label: "Origins" },
    { id: "principes", label: "Principles" },
    { id: "concepts", label: "Key concepts" },
    { id: "fonctions", label: "Planets & psyche" },
    { id: "elements", label: "Jungian typology" },
    { id: "triade", label: "Triad" },
    { id: "lettres", label: "The 4 letters" },
    { id: "types16", label: "16 types (MBTI)" },
    { id: "aspects", label: "Aspects" },
    { id: "maisons-psy", label: "Psychological houses" },
    { id: "ombre", label: "Shadow & projection" },
    { id: "cycles", label: "Life cycles" },
    { id: "tradition", label: "Tradition vs psyche" },
    { id: "pratique", label: "Practice" },
    { id: "exemples", label: "Examples" },
    { id: "faq", label: "FAQ" },
  ],
  labels: {
    toc: "Contents",
    defEyebrow: "Definition",
    resume: "Summary",
    ceQueCeNestPas: "What it is not",
    maison: "House",
    etapes: "Steps",
    limites: "Limits & cautions",
    footerPlanetes: "Planets",
    footerAspects: "Aspects",
    footerSignificateurs: "Significators",
    footerMaisons: "Houses",
    h2Definition: "What is astro-psychology?",
    h2Origines: "Origins: Jung, Rudhyar, Liz Greene",
    h2Principes: "The key principles",
    h2Concepts: "The essential Jungian concepts",
    h2Fonctions: "Planets as psychic functions",
    h2Elements: "Jungian typology: elements & functions",
    h2Triade: "The Sun – Moon – Ascendant triad",
    h2Lettres: "The 4 letters: decoding a type",
    h2Types16: "The 16 types (Jungian typology / MBTI)",
    h2Aspects: "Aspects as inner dynamics",
    h2MaisonsPsy: "Houses as fields of experience",
    h2Ombre: "Shadow, projection and individuation",
    h2Cycles: "The great life cycles",
    h2Tradition: "Astro-psychology or traditional astrology?",
    h2Pratique: "Reading your chart: a six-step framework",
    h2Exemples: "Examples of psychological reading",
    h2FaqData: "Frequently asked questions about astro-psychology",
    h2FaqVisible: "Frequently asked questions about astro-psychology",
  },
  definition: {
    resume: [
      "Astro-psychology sees the chart as a map of the psyche: a portrait of inner dynamics, needs and potentials.",
      "It shifts the question from “what is going to happen to me?” to “who am I and how can I grow?”.",
      "Born from the meeting of astrology and depth psychology (Carl Jung), it favours meaning, archetype and individuation.",
    ],
    ceQueCeNestPas: [
      "A deterministic prediction: the chart describes potentials, not a fixed fate.",
      "A substitute for therapy or professional psychological support.",
      "A diagnosis: no placement “causes” a mental disorder.",
    ],
  },
  origines: {
    intro: [
      "Astro-psychology is a recent school (20th century) that re-reads classical astrology in the light of depth psychology.",
    ],
    reperes: [
      {
        label: "Carl Gustav Jung",
        sens: "Provides the notions of archetype, collective unconscious, shadow and synchronicity — the conceptual ground of the approach.",
      },
      {
        label: "Dane Rudhyar",
        sens: "Founds “humanistic” astrology: the chart becomes a tool for personal growth and the fulfilment of one’s potential.",
      },
      {
        label: "Liz Greene",
        sens: "Develops modern psychological astrology, weaving together myth, archetype and clinical practice (Centre for Psychological Astrology).",
      },
    ],
  },
  principes: {
    intro: ["A few principles set astro-psychology apart from more predictive approaches."],
    items: [
      { label: "The chart = potential, not fate", sens: "We read tendencies and challenges that awareness can steer." },
      { label: "Free will", sens: "A placement describes an energy; how it is lived depends on the level of awareness." },
      { label: "Inwardness before events", sens: "We first look for the inner meaning of a placement rather than an outer fact." },
      { label: "Growth & individuation", sens: "The goal is to integrate every part of the chart into a more whole self." },
    ],
  },
  concepts: {
    intro: [
      "A few Jungian notions come up constantly in astro-psychology. Mastering them illuminates the whole reading.",
    ],
    items: [
      { terme: "Collective unconscious", def: "A deep, shared layer of the human psyche, a reservoir of the archetypes common to all humanity." },
      { terme: "Archetype", def: "A universal, structuring pattern (the Hero, the Mother, the Sage…) that signs and planets come to embody." },
      { terme: "Persona", def: "The social mask, the image we present — often linked to the Ascendant and the Midheaven." },
      { terme: "Shadow", def: "Everything the ego refuses or ignores about itself; a repressed energy that asks to be integrated." },
      { terme: "Anima / Animus", def: "The inner image of the feminine (in a man) or the masculine (in a woman), often projected onto the partner." },
      { terme: "The Self", def: "The total centre of the psyche, beyond the ego: the goal of individuation, sometimes linked to the chart taken as a whole." },
      { terme: "Synchronicity", def: "A meaningful coincidence between an inner state and an outer event: the symbolic bridge that astrology assumes." },
      { terme: "Individuation", def: "A lifelong process: becoming oneself by integrating the conscious and the unconscious, light and shadow." },
    ],
  },
  planetesFonctions: {
    intro: [
      "In astro-psychology, each planet represents a psychic function: a way in which psychic energy expresses itself. They are grouped by reach.",
    ],
    table: [
      { astre: "Sun", groupe: "Luminaire", groupeLabel: "Luminary", fonction: "The conscious self, identity, the life project, what we are seeking to become." },
      { astre: "Moon", groupe: "Luminaire", groupeLabel: "Luminary", fonction: "The emotional world, needs, security, the inner child, the personal unconscious." },
      { astre: "Mercury", groupe: "Personnelle", groupeLabel: "Personal", fonction: "The mind, thought, language, the way we learn and connect." },
      { astre: "Venus", groupe: "Personnelle", groupeLabel: "Personal", fonction: "Values, the relationship to love, pleasure, self-esteem and beauty." },
      { astre: "Mars", groupe: "Personnelle", groupeLabel: "Personal", fonction: "Desire, assertion, anger, the capacity to act and to set boundaries." },
      { astre: "Jupiter", groupe: "Sociale", groupeLabel: "Social", fonction: "Meaning, belief, confidence, the need for growth and horizon." },
      { astre: "Saturn", groupe: "Sociale", groupeLabel: "Social", fonction: "Structure, fear, inner authority, maturation through limits." },
      { astre: "Uranus", groupe: "Transpersonnelle", groupeLabel: "Transpersonal", fonction: "Individuality, the need for freedom, ruptures, awakening." },
      { astre: "Neptune", groupe: "Transpersonnelle", groupeLabel: "Transpersonal", fonction: "Imagination, the ideal, the dissolution of boundaries, the spiritual and illusion." },
      { astre: "Pluto", groupe: "Transpersonnelle", groupeLabel: "Transpersonal", fonction: "The depths, power, psychic death/rebirth, transformation." },
      { astre: "Chiron", groupe: "Point sensible", groupeLabel: "Sensitive point", fonction: "The founding wound and the healer’s gift it reveals: where we suffer and where we can help." },
      { astre: "Lunar nodes", groupe: "Axe d’évolution", groupeLabel: "Axis of growth", fonction: "South Node: what is acquired and the comfort zone; North Node: the direction of growth to develop." },
    ],
  },
  elementsFonctions: {
    intro: [
      "Jung distinguishes four psychological functions. Astro-psychology maps them onto the four elements: a direct bridge between Jungian typology and the natal chart.",
    ],
    items: [
      { element: "Feu", elementLabel: "Fire", fonction: "Intuition", signes: "Aries, Leo, Sagittarius", sens: "Perception of possibilities, momentum, vision, enthusiasm; grasps the overall meaning before the details." },
      { element: "Terre", elementLabel: "Earth", fonction: "Sensation", signes: "Taurus, Virgo, Capricorn", sens: "Grounded in the concrete, the body, the real, the useful; trusts what can be touched and verified." },
      { element: "Air", elementLabel: "Air", fonction: "Thinking", signes: "Gemini, Libra, Aquarius", sens: "Logic, connection, objectivity, language; understands by linking ideas together." },
      { element: "Eau", elementLabel: "Water", fonction: "Feeling", signes: "Cancer, Scorpio, Pisces", sens: "Evaluation through felt sense, empathy, emotional value; knows what matters emotionally." },
    ],
    note: "An absent or dominant element in the chart signals an underdeveloped or overdeveloped function — a precious clue for inner balance.",
  },
  triade: {
    intro: [
      "Three points form the core of the psychological personality: they are read together, as a trio in dialogue.",
    ],
    items: [
      { label: "Sun", sens: "What I am seeking to become: the conscious axis, the hero of my story." },
      { label: "Moon", sens: "What I need to feel safe: the emotional ground, often unconscious." },
      { label: "Ascendant", sens: "My way of meeting the world and showing myself: the mask (persona), but also the gateway into the journey." },
    ],
  },
  lettres: {
    intro: [
      "A type is written with four letters, one per axis. Each letter marks a preference — not a sealed box — and echoes a polarity well known to astrology.",
      "Reading these four letters already sketches a temperament: where the energy comes from, how we perceive, how we decide, how we organise ourselves.",
    ],
    axes: [
      {
        paire: "E / I",
        titre: "Orientation of energy",
        question: "Where do I draw my energy from?",
        couleur: "sky",
        poles: [
          { lettre: "E", nom: "Extraversion", sens: "Turned toward the outer world, action, others; recharges through contact." },
          { lettre: "I", nom: "Introversion", sens: "Turned toward the inner world, reflection, intimacy; recharges in quiet." },
        ],
        astro: "Echoes the hemisphere of the chart (East/West) and the Fire-Air tone (rather extraverted) versus Earth-Water (rather introverted).",
      },
      {
        paire: "S / N",
        titre: "Perception",
        question: "How do I gather information?",
        couleur: "amber",
        poles: [
          { lettre: "S", nom: "Sensation", sens: "Concrete facts, details, the present, tangible and verifiable experience." },
          { lettre: "N", nom: "iNtuition", sens: "Overall meaning, possibilities, connections, the big picture before the details." },
        ],
        astro: "Jung’s two perceiving functions: Sensation = Earth element; iNtuition = Fire element.",
      },
      {
        paire: "T / F",
        titre: "Decision",
        question: "How do I decide?",
        couleur: "indigo",
        poles: [
          { lettre: "T", nom: "Thinking", sens: "Logic, objectivity, consistency, impersonal justice." },
          { lettre: "F", nom: "Feeling", sens: "Values, harmony, human impact, empathy." },
        ],
        astro: "Jung’s two judging functions: Thinking = Air element; Feeling = Water element.",
      },
      {
        paire: "J / P",
        titre: "Lifestyle",
        question: "How do I approach the outer world?",
        couleur: "emerald",
        poles: [
          { lettre: "J", nom: "Judging", sens: "Planned, structured, decided; likes to conclude and organise." },
          { lettre: "P", nom: "Perceiving", sens: "Flexible, open, spontaneous; likes to keep options open." },
        ],
        astro: "J evokes the cardinal/fixed signs and Saturn (structure); P the mutable signs and Jupiter/Uranus (flexibility).",
      },
    ],
    note: "The two central letters (perception + decision) form the “function pair” at the heart of the type — hence the NT, NF, SJ and SP families.",
  },
  legende: {
    E: "Extraversion — energy turned outward, toward action and others.",
    I: "Introversion — energy turned inward, toward reflection and intimacy.",
    S: "Sensation — perceives through concrete facts, the present, the tangible.",
    N: "iNtuition — perceives through overall meaning, connections, possibilities.",
    T: "Thinking — decides through logic and objectivity.",
    F: "Feeling — decides through values and human impact.",
    J: "Judging — lives in a structured, planned, decided way.",
    P: "Perceiving — lives in a flexible, open, spontaneous way.",
  },
  types16: {
    intro: [
      "Jung’s typology gave rise, through Myers & Briggs, to the 16 profiles (MBTI). Like astro-psychology, they rest on the same functions (Thinking/Feeling, Sensation/Intuition) and on the introversion/extraversion axis.",
      "Each type has a “dominant” function (the most used). Here we give an astrological resonance — analogical, never an exact sign ↔ type correspondence.",
    ],
    familles: [
      {
        nom: "Analysts (NT)",
        couleur: "violet",
        resonance: "Air / Fire tone — intuition + thinking. Affinities with Aquarius, Gemini, Sagittarius.",
        types: [
          { code: "INTJ", surnom: "The Architect", dominante: "Introverted intuition (Ni)", trait: "Strategic vision, inwardness, long-term plans; autonomy and high standards.", synthese: "I + N + T + J: a strategic intuition turned inward (Ni), ordered by logic and planning. Hence an autonomous visionary who builds for the long term.", astro: "Saturn–Pluto, Capricorn/Scorpio tone: the visionary strategist." },
          { code: "INTP", surnom: "The Logician", dominante: "Introverted thinking (Ti)", trait: "Analysis, conceptual curiosity, independence of mind; a taste for systems.", synthese: "I + N + T + P: intuition feeds an inner logic (Ti) that stays open and exploratory. Hence a curious theorist who dissects systems without rushing to conclude.", astro: "Mercury–Uranus, Aquarius/Gemini: the abstract thinker." },
          { code: "ENTJ", surnom: "The Commander", dominante: "Extraverted thinking (Te)", trait: "Leadership, organisation, structuring ambition; decides and executes.", synthese: "E + N + T + J: a logic turned toward action (Te) that puts an overall vision into practice. Hence a decisive leader who structures and executes.", astro: "Mars–Saturn, Capricorn/Aries: the builder of organisations." },
          { code: "ENTP", surnom: "The Innovator", dominante: "Extraverted intuition (Ne)", trait: "Ideas, debate, exploration of possibilities; an enthusiastic devil’s advocate.", synthese: "E + N + T + P: intuition explores in all directions (Ne) in the service of debate and ideas. Hence an inventor who loves to question the obvious.", astro: "Mercury–Uranus, Gemini/Sagittarius: the all-rounder inventor." },
        ],
      },
      {
        nom: "Diplomats (NF)",
        couleur: "fuchsia",
        resonance: "Water / Fire tone — intuition + feeling. Affinities with Pisces, Cancer, Sagittarius.",
        types: [
          { code: "INFJ", surnom: "The Advocate", dominante: "Introverted intuition (Ni)", trait: "Idealism, depth, a sense of symbol and of the other; quiet conviction.", synthese: "I + N + F + J: a deep, inner intuition (Ni) guided by values and care for the other, within a structured frame. Hence an idealist of quiet conviction.", astro: "Neptune–Saturn, Pisces/Scorpio: the empathic visionary." },
          { code: "INFP", surnom: "The Mediator", dominante: "Introverted feeling (Fi)", trait: "Inner values, imagination, a quest for authenticity; faithful to one’s world.", synthese: "I + N + F + P: very strong intimate values (Fi) lit by imagination, without rigidity. Hence an authentic dreamer, faithful to an inner world.", astro: "Neptune–Moon, Pisces/Cancer: the sensitive idealist." },
          { code: "ENFJ", surnom: "The Protagonist", dominante: "Extraverted feeling (Fe)", trait: "Inspiration, charisma, care for the collective; able to unite and uplift.", synthese: "E + N + F + J: a feeling turned toward others (Fe) carried by an inspiring, organised vision. Hence a warm leader who unites and uplifts.", astro: "Sun–Venus, Leo/Libra: the warm leader." },
          { code: "ENFP", surnom: "The Inspirer", dominante: "Extraverted intuition (Ne)", trait: "Enthusiasm, connection, human possibilities; a spontaneous trailblazer.", synthese: "E + N + F + P: an abundant intuition (Ne) in the service of human connection and enthusiasm, staying open. Hence a trailblazer who opens up possibilities.", astro: "Jupiter–Mercury, Sagittarius/Gemini: the enthusiastic trailblazer." },
        ],
      },
      {
        nom: "Sentinels (SJ)",
        couleur: "emerald",
        resonance: "Earth tone — sensation + judgment. Affinities with Capricorn, Virgo, Taurus.",
        types: [
          { code: "ISTJ", surnom: "The Logistician", dominante: "Introverted sensation (Si)", trait: "Reliability, method, a sense of duty; memory for the concrete and for rules.", synthese: "I + S + T + J: a faithful memory of the concrete (Si) organised by logic and duty. Hence a reliable guardian of the established order.", astro: "Saturn, Capricorn/Virgo: the reliable guardian." },
          { code: "ISFJ", surnom: "The Defender", dominante: "Introverted sensation (Si)", trait: "Loyalty, discreet care, attention to needs; protects what lasts.", synthese: "I + S + F + J: the same attention to the concrete (Si) placed in the service of others and harmony. Hence a devoted, discreet protector.", astro: "Moon–Saturn, Cancer/Virgo: the devoted protector." },
          { code: "ESTJ", surnom: "The Director", dominante: "Extraverted thinking (Te)", trait: "Order, management, practical authority; structures groups.", synthese: "E + S + T + J: a logic turned toward action (Te) applied to the real and to rules. Hence an organiser, a figure of practical authority.", astro: "Saturn–Mars, Capricorn/Leo: the organiser, a figure of authority." },
          { code: "ESFJ", surnom: "The Consul", dominante: "Extraverted feeling (Fe)", trait: "Sociability, support, a sense of social harmony; the glue of the group.", synthese: "E + S + F + J: a feeling turned toward the group (Fe) anchored in the concrete and in traditions. Hence a caring social pillar.", astro: "Venus–Moon, Cancer/Libra: the caring social pillar." },
        ],
      },
      {
        nom: "Explorers (SP)",
        couleur: "amber",
        resonance: "Fire / Earth tone — sensation + spontaneity. Affinities with Aries, Leo, Taurus.",
        types: [
          { code: "ISTP", surnom: "The Virtuoso", dominante: "Introverted thinking (Ti)", trait: "Concrete skill, composure, a taste for the real; solves in silence.", synthese: "I + S + T + P: an inner logic (Ti) applied to the concrete, with composure and flexibility. Hence a pragmatic craftsman who solves in silence.", astro: "Mars–Mercury, Virgo/Scorpio: the pragmatic craftsman." },
          { code: "ISFP", surnom: "The Adventurer", dominante: "Introverted feeling (Fi)", trait: "Aesthetic sensitivity, freedom, presence to the moment; discreet but firm on values.", synthese: "I + S + F + P: intimate values (Fi) lived through the senses and the present moment, without constraint. Hence a free aesthete, discreet but firm on what matters.", astro: "Venus–Moon, Taurus/Pisces: the sensitive aesthete." },
          { code: "ESTP", surnom: "The Entrepreneur", dominante: "Extraverted sensation (Se)", trait: "Action, daring, a sense of opportunity; lives in the present.", synthese: "E + S + T + P: a sensation turned toward action (Se) coupled with a tactical sense. Hence a playful go-getter who seizes the opportunity.", astro: "Mars–Sun, Aries/Leo: the playful go-getter." },
          { code: "ESFP", surnom: "The Entertainer", dominante: "Extraverted sensation (Se)", trait: "Energy, pleasure, warm contact; brings life everywhere.", synthese: "E + S + F + P: a vivid sensation of the present (Se) in the service of shared pleasure. Hence a radiant bon vivant who brings life everywhere.", astro: "Venus–Sun, Leo/Taurus: the radiant bon vivant." },
        ],
      },
    ],
    note: "To be read as a bridge between two typological languages: no type “corresponds” exactly to a sign. It is the dominant function and attitude that create the resonance.",
  },
  aspects: {
    intro: [
      "Aspects are no longer “good” or “bad” but inner dynamics between two psychic functions.",
    ],
    items: [
      { label: "Conjunction", sens: "Fusion of two functions: they act together, sometimes without distance." },
      { label: "Trine & sextile", sens: "Fluid talents, available resources — at the risk of an unworked ease." },
      { label: "Square", sens: "Driving tension: inner friction that pushes toward effort and growth." },
      { label: "Opposition", sens: "A polarity to integrate: two needs that are often projected onto others before being reconciled." },
    ],
  },
  maisonsPsy: {
    intro: [
      "In a psychological reading, the houses are the great fields of experience where the functions take form and where projections play out.",
    ],
    items: [
      { maison: "I", theme: "The emerging identity, the self-image, the spontaneous way of approaching life." },
      { maison: "II", theme: "Self-esteem, the relationship to the body, to resources and to what has value." },
      { maison: "III", theme: "The concrete mind, learning, communication, the inner siblings." },
      { maison: "IV", theme: "The roots, the internalised family, the sense of belonging, the psychic home." },
      { maison: "V", theme: "Creativity, play, the spontaneous expression of the self, the creative child." },
      { maison: "VI", theme: "Daily life, the body-as-instrument, service, adjustment and lifestyle." },
      { maison: "VII", theme: "The other, the mirror, projection, what I seek and flee in relationship." },
      { maison: "VIII", theme: "Deep intimacy, crises, transformation, what dies and is reborn within." },
      { maison: "IX", theme: "Meaning, beliefs, openness, the quest for vision and horizon." },
      { maison: "X", theme: "Vocation, fulfilment, the public persona, the internalised figure of authority." },
      { maison: "XI", theme: "Ideals, belonging to the group, the self turned toward the collective and the future." },
      { maison: "XII", theme: "The unconscious, the shadow, the repressed, what dissolves and asks to be made conscious." },
    ],
  },
  cyclesVie: {
    intro: [
      "“Developmental” astrology reads the major transits as stages of psychic maturation. A few milestones shape almost every life.",
    ],
    items: [
      { age: "≈ 29–30 years", nom: "Saturn return", sens: "First passage into adulthood: we leave inherited models behind to build a structure that resembles us." },
      { age: "≈ 38–43 years", nom: "Uranus opposition", sens: "The “midlife crisis”: a need for awakening, freedom and authenticity in the face of what has grown too narrow." },
      { age: "≈ 49–51 years", nom: "Chiron return", sens: "A return to the founding wound: a chance to turn it into wisdom and a gift for others." },
      { age: "≈ 58–60 years", nom: "Second Saturn return", sens: "A maturity review: to transmit, to lighten, to assume the authority of a life lived through." },
    ],
    note: "These cycles do not “cause” anything mechanically: they mark windows of maturation that awareness can seize.",
  },
  ombreProjection: {
    intro: ["Three Jungian notions are central to understanding how a chart is actually lived."],
    items: [
      { label: "The shadow", sens: "The repressed or unowned parts of the chart (often the disliked planets): what we do not dare to live." },
      { label: "Projection", sens: "Seeing in others what we do not recognise in ourselves: a repressed Mars is perceived as other people’s aggression." },
      { label: "Individuation", sens: "The process of integration: bringing all the functions of the chart into dialogue to become more whole." },
    ],
  },
  traditionVsPsy: {
    intro: ["Astro-psychology does not deny classical astrology: it changes its purpose."],
    items: [
      { label: "Traditional astrology", sens: "Often aims at the event, the timing, the “yes/no”; the chart describes a fate." },
      { label: "Astro-psychology", sens: "Aims at inner understanding and growth; the chart describes a potential to be made conscious." },
      { label: "Complementarity", sens: "Many astrologers combine the two: technical rigour in the service of psychological meaning." },
    ],
  },
  pratique: {
    intro: ["How do you read a chart concretely from a psychological angle? Here is a six-step framework."],
    etapes: [
      "1) Set the scene: dominant element and function, the balance of the four elements (where is the ease, where the lack?).",
      "2) Read the Sun / Moon / Ascendant triad as a dialogue between identity, needs and persona.",
      "3) Locate Saturn: the structuring fear, the inner authority, the maturity work.",
      "4) Spot the functions in tension (squares, oppositions): the frictions that push toward growth.",
      "5) Look for the shadow: repressed planets, the 12th house, what is projected onto others.",
      "6) Place it all in time: where am I within my great life cycles?",
    ],
  },
  exemplesLecture: [
    { titre: "Moon in Capricorn", texte: "Rather than “cold emotions”, we read a need for security through mastery and responsibility, often an inner child who learned early to control itself. The work is to allow vulnerability." },
    { titre: "Sun–Saturn square", texte: "Not a curse, but a tension between the drive to be oneself (Sun) and a critical inner authority (Saturn). Well integrated, it gives discipline, endurance and legitimate authority." },
    { titre: "Mars in the 12th house", texte: "An assertion that is barely conscious, sometimes repressed and projected (“other people are aggressive”). The challenge: to reclaim one’s Mars, to dare desire and healthy anger instead of burying them." },
    { titre: "Lack of Earth element", texte: "The Sensation function is underdeveloped: brilliant ideas (Air/Fire) but difficulty embodying and structuring the concrete. The path runs through the body, the real and patience." },
    { titre: "North Node in Libra", texte: "Independence already mastered (South Node in Aries), growth toward relationship, listening and compromise. Not to deny one’s autonomy, but to learn to share it." },
    { titre: "Venus opposite Pluto", texte: "Two polarised functions: the need for harmony (Venus) and transformative intensity (Pluto). Often lived first through projection in fusional relationships; to be integrated as a consented emotional depth." },
  ],
  limites: [
    "Confusing a psychological reading with a clinical diagnosis: astro-psychology is not scientific psychology.",
    "Do not replace professional support in case of real suffering.",
    "Avoid disguised determinism (“I am like this because of my chart”).",
    "Do not reduce everything to the shadow or to childhood: keep a nuanced reading.",
    "Stay cautious: the scientific validity of astrology is not established; it is a tool for symbolic reflection.",
  ],
  faq: [
    { q: "What is astro-psychology?", a: "An approach that reads the chart as a map of the psyche rather than as a prediction. It draws on depth psychology (Jung) to foster self-knowledge." },
    { q: "What is its connection with Carl Jung?", a: "Jung supplied the key concepts — archetype, collective unconscious, shadow, individuation, synchronicity — that frame the psychological reading of the chart." },
    { q: "Does astro-psychology predict the future?", a: "No. It describes potentials and inner dynamics that awareness can steer. It insists on free will rather than on fate." },
    { q: "Does it replace therapy?", a: "No. It can accompany a path of introspection, but it replaces neither a psychologist nor a doctor. In case of suffering, consult a professional." },
    { q: "What does “shadow” mean in psychological astrology?", a: "The repressed parts of the chart — often poorly lived planets — that we do not own and sometimes project onto others." },
    { q: "How do the elements correspond to Jung’s functions?", a: "Fire = Intuition, Earth = Sensation, Air = Thinking, Water = Feeling. The balance of the chart’s elements shows which psychic functions come easily or need developing." },
    { q: "What is the Saturn return?", a: "Around age 29–30, Saturn returns to its birth position: a stage of maturation where one builds a more authentic life, classically read as a passage into adulthood." },
    { q: "What is the difference with traditional astrology?", a: "Traditional astrology often aims at the event and the timing; astro-psychology aims at inner meaning and growth. The two can complement each other." },
    { q: "What is the link between the 16 types (MBTI) and astrology?", a: "The 16 MBTI types derive from Jung’s typology (Thinking/Feeling, Sensation/Intuition functions + introversion/extraversion), the same functions that astro-psychology links to the four elements. The connection is analogical: no type corresponds exactly to a sign." },
  ],
  faqVisible: [
    { q: "Do you have to believe in fate to practise astro-psychology?", a: "No, quite the opposite. This approach rests on free will: the chart describes energies and potentials, but how they are lived depends on the person’s level of awareness and choices." },
    { q: "Which planets are most important in a psychological reading?", a: "We begin with the triad of Sun (conscious identity), Moon (emotional needs) and Ascendant (relationship to the world), before exploring Saturn (fears and maturation) and the slow planets for the deeper issues." },
    { q: "Is astro-psychology scientific?", a: "No. The predictive validity of astrology has not been scientifically demonstrated. Astro-psychology presents itself as a symbolic language and a tool for introspection, to be handled with discernment." },
    { q: "How do you concretely use your chart to know yourself better?", a: "You spot the functions in tension (difficult aspects), the needs that go unheard (Moon, water houses) and the shadow parts, then you seek to make them conscious and integrate them rather than suffer or project them." },
    { q: "What is individuation and how does the chart help with it?", a: "Individuation is the lifelong process of becoming fully oneself by integrating the conscious and the unconscious. The chart offers a map of it: it shows the functions to develop, the shadow to acknowledge and the direction of growth (North Node)." },
  ],
};

/* ============================== ES ============================== */
const es: AstroPsyContent = {
  meta: {
    title: "Astropsicología: la carta como mapa de la psique",
    description:
      "Astropsicología: enfoque junguiano de la astrología. Funciones psíquicas, los 16 tipos (MBTI), casas psicológicas, sombra e individuación. ¡Curso completo!",
  },
  jsonld: {
    headline: "Astropsicología: la carta como mapa de la psique",
    description:
      "Astropsicología: enfoque junguiano y humanista de la astrología. Funciones psíquicas, tipología junguiana y los 16 tipos (MBTI), casas psicológicas, sombra e individuación.",
    articleSection: "Astrología",
  },
  hero: {
    badge: "Curso de astrología — Enfoque moderno",
    title: "Astropsicología: el mapa de la psique",
    subtitle:
      "Leer la carta no como un destino escrito, sino como un mapa del funcionamiento interior. Una astrología orientada al autoconocimiento, heredera de Jung, Rudhyar y Liz Greene.",
    highlights: [
      "Los planetas como funciones psíquicas",
      "Tipología junguiana y arquetipos",
      "Casas psicológicas y ciclos de vida",
      "Sombra, proyección e individuación",
    ],
  },
  defBoxBody: (
    <>
      La <strong>astropsicología</strong> lee la <Link href="/theme-astral">carta astral</Link> como un mapa de la psique:
      un retrato de las dinámicas interiores y de los potenciales de crecimiento, más que una predicción.
    </>
  ),
  introBody: (
    <>
      ¿Y si la carta no dijera <em>lo que va a ocurrir</em>, sino <em>quiénes somos</em>? La{" "}
      <strong>astropsicología</strong> — heredera de Carl Jung, Dane Rudhyar y Liz Greene — desplaza la astrología del
      terreno de la adivinación al del autoconocimiento. En ella los planetas se vuelven funciones psíquicas, los aspectos
      dinámicas interiores y la carta, un camino de individuación.
    </>
  ),
  sections: [
    { id: "definition", label: "Definición" },
    { id: "origines", label: "Orígenes" },
    { id: "principes", label: "Principios" },
    { id: "concepts", label: "Conceptos clave" },
    { id: "fonctions", label: "Planetas y psique" },
    { id: "elements", label: "Tipología junguiana" },
    { id: "triade", label: "Tríada" },
    { id: "lettres", label: "Las 4 letras" },
    { id: "types16", label: "16 tipos (MBTI)" },
    { id: "aspects", label: "Aspectos" },
    { id: "maisons-psy", label: "Casas psicológicas" },
    { id: "ombre", label: "Sombra y proyección" },
    { id: "cycles", label: "Ciclos de vida" },
    { id: "tradition", label: "Tradición vs psique" },
    { id: "pratique", label: "Práctica" },
    { id: "exemples", label: "Ejemplos" },
    { id: "faq", label: "FAQ" },
  ],
  labels: {
    toc: "Índice",
    defEyebrow: "Definición",
    resume: "Resumen",
    ceQueCeNestPas: "Lo que no es",
    maison: "Casa",
    etapes: "Etapas",
    limites: "Límites y precauciones",
    footerPlanetes: "Planetas",
    footerAspects: "Aspectos",
    footerSignificateurs: "Significadores",
    footerMaisons: "Casas",
    h2Definition: "¿Qué es la astropsicología?",
    h2Origines: "Orígenes: Jung, Rudhyar, Liz Greene",
    h2Principes: "Los principios clave",
    h2Concepts: "Los conceptos junguianos esenciales",
    h2Fonctions: "Los planetas como funciones psíquicas",
    h2Elements: "Tipología junguiana: elementos y funciones",
    h2Triade: "La tríada Sol – Luna – Ascendente",
    h2Lettres: "Las 4 letras: descifrar un tipo",
    h2Types16: "Los 16 tipos (tipología junguiana / MBTI)",
    h2Aspects: "Los aspectos como dinámicas internas",
    h2MaisonsPsy: "Las casas como ámbitos de experiencia",
    h2Ombre: "Sombra, proyección e individuación",
    h2Cycles: "Los grandes ciclos de vida",
    h2Tradition: "¿Astropsicología o astrología tradicional?",
    h2Pratique: "Leer tu carta: un guion en seis tiempos",
    h2Exemples: "Ejemplos de lectura psicológica",
    h2FaqData: "Preguntas frecuentes sobre la astropsicología",
    h2FaqVisible: "Preguntas frecuentes sobre la astropsicología",
  },
  definition: {
    resume: [
      "La astropsicología concibe la carta como un mapa de la psique: un retrato de las dinámicas interiores, las necesidades y los potenciales.",
      "Desplaza la pregunta de «¿qué me va a pasar?» hacia «¿quién soy y cómo puedo crecer?».",
      "Nacida del encuentro entre la astrología y la psicología profunda (Carl Jung), privilegia el sentido, el arquetipo y la individuación.",
    ],
    ceQueCeNestPas: [
      "Una predicción determinista: la carta describe potenciales, no un destino fijado.",
      "Un sustituto de una terapia o de un seguimiento psicológico profesional.",
      "Un diagnóstico: ninguna posición «causa» un trastorno mental.",
    ],
  },
  origines: {
    intro: [
      "La astropsicología es una escuela reciente (siglo XX) que relee la astrología clásica a la luz de la psicología profunda.",
    ],
    reperes: [
      {
        label: "Carl Gustav Jung",
        sens: "Aporta las nociones de arquetipo, inconsciente colectivo, sombra y sincronicidad, el sustrato conceptual del enfoque.",
      },
      {
        label: "Dane Rudhyar",
        sens: "Funda la astrología «humanista»: la carta se vuelve una herramienta de crecimiento personal y de realización del potencial.",
      },
      {
        label: "Liz Greene",
        sens: "Desarrolla la astrología psicológica moderna, cruzando mito, arquetipo y práctica clínica (Centre for Psychological Astrology).",
      },
    ],
  },
  principes: {
    intro: ["Algunos principios distinguen a la astropsicología de los enfoques más predictivos."],
    items: [
      { label: "La carta = potencial, no destino", sens: "Se leen tendencias y desafíos que la conciencia puede orientar." },
      { label: "Libre albedrío", sens: "La posición describe una energía; la forma de vivirla depende del nivel de conciencia." },
      { label: "Interioridad antes que acontecimientos", sens: "Se busca primero el sentido interior de una posición más que un hecho exterior." },
      { label: "Crecimiento e individuación", sens: "El objetivo es integrar todas las partes de la carta en un sí mismo más entero." },
    ],
  },
  concepts: {
    intro: [
      "Algunas nociones junguianas reaparecen constantemente en astropsicología. Dominarlas ilumina toda la lectura.",
    ],
    items: [
      { terme: "Inconsciente colectivo", def: "Capa profunda y compartida de la psique humana, reservorio de los arquetipos comunes a toda la humanidad." },
      { terme: "Arquetipo", def: "Motivo universal y estructurante (el Héroe, la Madre, el Sabio…) que signos y planetas vienen a encarnar." },
      { terme: "Persona", def: "La máscara social, la imagen que presentamos — a menudo ligada al Ascendente y al Medio Cielo." },
      { terme: "Sombra", def: "Todo lo que el yo rechaza o ignora de sí mismo; energía reprimida que pide ser integrada." },
      { terme: "Ánima / Ánimus", def: "La imagen interior de lo femenino (en el hombre) o de lo masculino (en la mujer), a menudo proyectada sobre la pareja." },
      { terme: "El Sí mismo", def: "El centro total de la psique, más allá del yo: meta de la individuación, a veces asociado a la carta tomada como un todo." },
      { terme: "Sincronicidad", def: "Coincidencia significativa entre un estado interior y un acontecimiento exterior: el puente simbólico que supone la astrología." },
      { terme: "Individuación", def: "Proceso de toda una vida: llegar a ser uno mismo integrando consciente e inconsciente, luz y sombra." },
    ],
  },
  planetesFonctions: {
    intro: [
      "En astropsicología, cada planeta representa una función psíquica: una manera en que la energía psíquica se expresa. Se agrupan por alcance.",
    ],
    table: [
      { astre: "Sol", groupe: "Luminaire", groupeLabel: "Luminaria", fonction: "El yo consciente, la identidad, el proyecto de vida, lo que se busca llegar a ser." },
      { astre: "Luna", groupe: "Luminaire", groupeLabel: "Luminaria", fonction: "El mundo emocional, las necesidades, la seguridad, el niño interior, el inconsciente personal." },
      { astre: "Mercurio", groupe: "Personnelle", groupeLabel: "Personal", fonction: "La mente, el pensamiento, el lenguaje, la forma de aprender y de vincular." },
      { astre: "Venus", groupe: "Personnelle", groupeLabel: "Personal", fonction: "Los valores, la relación con el amor, el placer, la autoestima y la belleza." },
      { astre: "Marte", groupe: "Personnelle", groupeLabel: "Personal", fonction: "El deseo, la afirmación, la ira, la capacidad de actuar y de poner límites." },
      { astre: "Júpiter", groupe: "Sociale", groupeLabel: "Social", fonction: "El sentido, la creencia, la confianza, la necesidad de crecimiento y de horizonte." },
      { astre: "Saturno", groupe: "Sociale", groupeLabel: "Social", fonction: "La estructura, el miedo, la autoridad interior, la maduración a través del límite." },
      { astre: "Urano", groupe: "Transpersonnelle", groupeLabel: "Transpersonal", fonction: "La individualidad, la necesidad de libertad, las rupturas, el despertar." },
      { astre: "Neptuno", groupe: "Transpersonnelle", groupeLabel: "Transpersonal", fonction: "El imaginario, el ideal, la disolución de las fronteras, lo espiritual y la ilusión." },
      { astre: "Plutón", groupe: "Transpersonnelle", groupeLabel: "Transpersonal", fonction: "Las profundidades, el poder, la muerte/renacimiento psíquico, la transformación." },
      { astre: "Quirón", groupe: "Point sensible", groupeLabel: "Punto sensible", fonction: "La herida fundadora y el don de sanador que revela: allí donde se sufre y donde se puede ayudar." },
      { astre: "Nodos lunares", groupe: "Axe d’évolution", groupeLabel: "Eje de evolución", fonction: "Nodo Sur: lo adquirido y la zona de confort; Nodo Norte: la dirección de crecimiento a desarrollar." },
    ],
  },
  elementsFonctions: {
    intro: [
      "Jung distingue cuatro funciones psicológicas. La astropsicología las hace corresponder con los cuatro elementos: un puente directo entre tipología junguiana y carta astral.",
    ],
    items: [
      { element: "Feu", elementLabel: "Fuego", fonction: "Intuición", signes: "Aries, Leo, Sagitario", sens: "Percepción de los posibles, impulso, visión, entusiasmo; capta el sentido global antes que los detalles." },
      { element: "Terre", elementLabel: "Tierra", fonction: "Sensación", signes: "Tauro, Virgo, Capricornio", sens: "Anclaje en lo concreto, el cuerpo, lo real, lo útil; confía en lo que se toca y se verifica." },
      { element: "Air", elementLabel: "Aire", fonction: "Pensamiento", signes: "Géminis, Libra, Acuario", sens: "Lógica, puesta en relación, objetividad, lenguaje; comprende vinculando las ideas." },
      { element: "Eau", elementLabel: "Agua", fonction: "Sentimiento", signes: "Cáncer, Escorpio, Piscis", sens: "Evaluación por el sentir, empatía, valor afectivo; sabe lo que cuenta emocionalmente." },
    ],
    note: "Un elemento ausente o dominante en la carta señala una función poco desarrollada o hipertrofiada — una pista valiosa para el equilibrio interior.",
  },
  triade: {
    intro: [
      "Tres puntos forman el núcleo de la personalidad psicológica: se leen juntos, como un trío en diálogo.",
    ],
    items: [
      { label: "Sol", sens: "Lo que busco llegar a ser: el eje consciente, el héroe de mi historia." },
      { label: "Luna", sens: "Lo que necesito para sentirme seguro: el sustrato emocional, a menudo inconsciente." },
      { label: "Ascendente", sens: "Mi forma de abordar el mundo y de mostrarme: la máscara (persona), pero también la puerta de entrada del recorrido." },
    ],
  },
  lettres: {
    intro: [
      "Un tipo se anota con cuatro letras, una por eje. Cada letra marca una preferencia — no una casilla estanca — y hace eco a una polaridad bien conocida de la astrología.",
      "Leer estas cuatro letras es ya esbozar un temperamento: de dónde viene la energía, cómo se percibe, cómo se decide, cómo se organiza uno.",
    ],
    axes: [
      {
        paire: "E / I",
        titre: "Orientación de la energía",
        question: "¿De dónde extraigo mi energía?",
        couleur: "sky",
        poles: [
          { lettre: "E", nom: "Extraversión", sens: "Vuelta hacia el mundo exterior, la acción, los demás; se recarga en el contacto." },
          { lettre: "I", nom: "Introversión", sens: "Vuelta hacia el mundo interior, la reflexión, la intimidad; se recarga en la calma." },
        ],
        astro: "Eco al hemisferio de la carta (Este/Oeste) y a la tonalidad Fuego-Aire (más bien extravertida) frente a Tierra-Agua (más bien introvertida).",
      },
      {
        paire: "S / N",
        titre: "Percepción",
        question: "¿Cómo recojo la información?",
        couleur: "amber",
        poles: [
          { lettre: "S", nom: "Sensación", sens: "Hechos concretos, detalles, presente, experiencia tangible y verificable." },
          { lettre: "N", nom: "iNtuición", sens: "Sentido global, posibles, vínculos, visión de conjunto antes que los detalles." },
        ],
        astro: "Las dos funciones de percepción de Jung: Sensación = elemento Tierra; iNtuición = elemento Fuego.",
      },
      {
        paire: "T / F",
        titre: "Decisión",
        question: "¿Cómo decido?",
        couleur: "indigo",
        poles: [
          { lettre: "T", nom: "Pensamiento (Thinking)", sens: "Lógica, objetividad, coherencia, justicia impersonal." },
          { lettre: "F", nom: "Sentimiento (Feeling)", sens: "Valores, armonía, impacto humano, empatía." },
        ],
        astro: "Las dos funciones de juicio de Jung: Pensamiento = elemento Aire; Sentimiento = elemento Agua.",
      },
      {
        paire: "J / P",
        titre: "Estilo de vida",
        question: "¿Cómo abordo el mundo exterior?",
        couleur: "emerald",
        poles: [
          { lettre: "J", nom: "Juicio (Judging)", sens: "Planificado, estructurado, decidido; le gusta concluir y organizar." },
          { lettre: "P", nom: "Percepción (Perceiving)", sens: "Flexible, abierto, espontáneo; le gusta mantener las opciones abiertas." },
        ],
        astro: "J evoca los signos cardinales/fijos y a Saturno (estructura); P los signos mutables y a Júpiter/Urano (flexibilidad).",
      },
    ],
    note: "Las dos letras centrales (percepción + decisión) forman la «pareja de funciones» en el corazón del tipo — de ahí las familias NT, NF, SJ y SP.",
  },
  legende: {
    E: "Extraversión — energía vuelta hacia el exterior, la acción, los demás.",
    I: "Introversión — energía vuelta hacia el interior, la reflexión, la intimidad.",
    S: "Sensación — percibe por los hechos concretos, el presente, lo tangible.",
    N: "iNtuición — percibe por el sentido global, los vínculos, los posibles.",
    T: "Pensamiento (Thinking) — decide por la lógica y la objetividad.",
    F: "Sentimiento (Feeling) — decide por los valores y el impacto humano.",
    J: "Juicio (Judging) — vive de forma estructurada, planificada, decidida.",
    P: "Percepción (Perceiving) — vive de forma flexible, abierta, espontánea.",
  },
  types16: {
    intro: [
      "La tipología de Jung dio lugar, a través de Myers y Briggs, a los 16 perfiles (MBTI). Como la astropsicología, se basan en las mismas funciones (Pensamiento/Sentimiento, Sensación/Intuición) y en el eje introversión/extraversión.",
      "Cada tipo tiene una función «dominante» (la más usada). Aquí se da una resonancia astrológica — analógica, nunca una correspondencia exacta signo ↔ tipo.",
    ],
    familles: [
      {
        nom: "Analistas (NT)",
        couleur: "violet",
        resonance: "Tonalidad Aire / Fuego — intuición + pensamiento. Afinidades con Acuario, Géminis, Sagitario.",
        types: [
          { code: "INTJ", surnom: "El Arquitecto", dominante: "Intuición introvertida (Ni)", trait: "Visión estratégica, interioridad, planes a largo plazo; autonomía y exigencia.", synthese: "I + N + T + J: una intuición estratégica vuelta hacia el interior (Ni), ordenada por la lógica y la planificación. De ahí un visionario autónomo que construye a largo plazo.", astro: "Saturno–Plutón, tonalidad Capricornio/Escorpio: el estratega visionario." },
          { code: "INTP", surnom: "El Lógico", dominante: "Pensamiento introvertido (Ti)", trait: "Análisis, curiosidad conceptual, independencia de espíritu; gusto por los sistemas.", synthese: "I + N + T + P: la intuición alimenta una lógica interna (Ti) que se mantiene abierta y exploratoria. De ahí un teórico curioso que disecciona los sistemas sin apresurarse a concluir.", astro: "Mercurio–Urano, Acuario/Géminis: el pensador abstracto." },
          { code: "ENTJ", surnom: "El Comandante", dominante: "Pensamiento extravertido (Te)", trait: "Liderazgo, organización, ambición estructurante; decide y ejecuta.", synthese: "E + N + T + J: una lógica vuelta hacia la acción (Te) que pone en práctica una visión de conjunto. De ahí un líder decidido que estructura y ejecuta.", astro: "Marte–Saturno, Capricornio/Aries: el constructor de organizaciones." },
          { code: "ENTP", surnom: "El Innovador", dominante: "Intuición extravertida (Ne)", trait: "Ideas, debate, exploración de los posibles; abogado del diablo entusiasta.", synthese: "E + N + T + P: la intuición explora en todas las direcciones (Ne) al servicio del debate y de las ideas. De ahí un inventor al que le gusta cuestionar lo evidente.", astro: "Mercurio–Urano, Géminis/Sagitario: el inventor todoterreno." },
        ],
      },
      {
        nom: "Diplomáticos (NF)",
        couleur: "fuchsia",
        resonance: "Tonalidad Agua / Fuego — intuición + sentimiento. Afinidades con Piscis, Cáncer, Sagitario.",
        types: [
          { code: "INFJ", surnom: "El Abogado", dominante: "Intuición introvertida (Ni)", trait: "Idealismo, profundidad, sentido del símbolo y del otro; convicción serena.", synthese: "I + N + F + J: una intuición profunda e interior (Ni) guiada por los valores y el cuidado del otro, en un marco estructurado. De ahí un idealista de convicción serena.", astro: "Neptuno–Saturno, Piscis/Escorpio: el visionario empático." },
          { code: "INFP", surnom: "El Mediador", dominante: "Sentimiento introvertido (Fi)", trait: "Valores interiores, imaginario, búsqueda de autenticidad; fiel a su mundo.", synthese: "I + N + F + P: unos valores íntimos muy fuertes (Fi) iluminados por el imaginario, sin rigidez. De ahí un soñador auténtico, fiel a su mundo interior.", astro: "Neptuno–Luna, Piscis/Cáncer: el idealista sensible." },
          { code: "ENFJ", surnom: "El Protagonista", dominante: "Sentimiento extravertido (Fe)", trait: "Inspiración, carisma, cuidado del colectivo; sabe unir y elevar.", synthese: "E + N + F + J: un sentimiento vuelto hacia los demás (Fe) sostenido por una visión inspiradora y organizada. De ahí un líder cálido que une y eleva.", astro: "Sol–Venus, Leo/Libra: el líder cálido." },
          { code: "ENFP", surnom: "El Inspirador", dominante: "Intuición extravertida (Ne)", trait: "Entusiasmo, vínculo, posibilidades humanas; explorador espontáneo.", synthese: "E + N + F + P: una intuición desbordante (Ne) al servicio del vínculo humano y del entusiasmo, manteniéndose abierto. De ahí un explorador que abre posibles.", astro: "Júpiter–Mercurio, Sagitario/Géminis: el explorador entusiasta." },
        ],
      },
      {
        nom: "Centinelas (SJ)",
        couleur: "emerald",
        resonance: "Tonalidad Tierra — sensación + juicio. Afinidades con Capricornio, Virgo, Tauro.",
        types: [
          { code: "ISTJ", surnom: "El Logista", dominante: "Sensación introvertida (Si)", trait: "Fiabilidad, método, sentido del deber; memoria de lo concreto y de las reglas.", synthese: "I + S + T + J: una memoria fiel de lo concreto (Si) organizada por la lógica y el deber. De ahí un guardián fiable del orden establecido.", astro: "Saturno, Capricornio/Virgo: el guardián fiable." },
          { code: "ISFJ", surnom: "El Defensor", dominante: "Sensación introvertida (Si)", trait: "Lealtad, cuidado discreto, atención a las necesidades; protege lo que perdura.", synthese: "I + S + F + J: la misma atención a lo concreto (Si) puesta al servicio de los demás y de la armonía. De ahí un protector entregado y discreto.", astro: "Luna–Saturno, Cáncer/Virgo: el protector entregado." },
          { code: "ESTJ", surnom: "El Director", dominante: "Pensamiento extravertido (Te)", trait: "Orden, gestión, autoridad práctica; estructura los grupos.", synthese: "E + S + T + J: una lógica vuelta hacia la acción (Te) aplicada a lo real y a las reglas. De ahí un organizador, una figura de autoridad práctica.", astro: "Saturno–Marte, Capricornio/Leo: el organizador, figura de autoridad." },
          { code: "ESFJ", surnom: "El Cónsul", dominante: "Sentimiento extravertido (Fe)", trait: "Sociabilidad, apoyo, sentido de la armonía social; cemento del grupo.", synthese: "E + S + F + J: un sentimiento vuelto hacia el grupo (Fe) anclado en lo concreto y en las tradiciones. De ahí un pilar social atento.", astro: "Venus–Luna, Cáncer/Libra: el pilar social atento." },
        ],
      },
      {
        nom: "Exploradores (SP)",
        couleur: "amber",
        resonance: "Tonalidad Fuego / Tierra — sensación + espontaneidad. Afinidades con Aries, Leo, Tauro.",
        types: [
          { code: "ISTP", surnom: "El Virtuoso", dominante: "Pensamiento introvertido (Ti)", trait: "Habilidad concreta, sangre fría, gusto por lo real; resuelve en silencio.", synthese: "I + S + T + P: una lógica interna (Ti) aplicada a lo concreto, con sangre fría y flexibilidad. De ahí un artesano pragmático que resuelve en silencio.", astro: "Marte–Mercurio, Virgo/Escorpio: el artesano pragmático." },
          { code: "ISFP", surnom: "El Aventurero", dominante: "Sentimiento introvertido (Fi)", trait: "Sensibilidad estética, libertad, presencia en el instante; discreto pero firme en sus valores.", synthese: "I + S + F + P: unos valores íntimos (Fi) vividos en lo sensible y en el instante presente, sin imposición. De ahí un esteta libre, discreto pero firme en lo que cuenta.", astro: "Venus–Luna, Tauro/Piscis: el esteta sensible." },
          { code: "ESTP", surnom: "El Emprendedor", dominante: "Sensación extravertida (Se)", trait: "Acción, audacia, sentido de la oportunidad; vive en el presente.", synthese: "E + S + T + P: una sensación vuelta hacia la acción (Se) acompañada de un sentido táctico. De ahí un lanzado juguetón que aprovecha la oportunidad.", astro: "Marte–Sol, Aries/Leo: el lanzado juguetón." },
          { code: "ESFP", surnom: "El Animador", dominante: "Sensación extravertida (Se)", trait: "Energía, placer, contacto cálido; pone vida en todas partes.", synthese: "E + S + F + P: una sensación viva del presente (Se) al servicio del placer compartido. De ahí un bon vivant radiante que pone vida en todas partes.", astro: "Venus–Sol, Leo/Tauro: el bon vivant radiante." },
        ],
      },
    ],
    note: "A leer como un puente entre dos lenguajes tipológicos: ningún tipo «corresponde» exactamente a un signo. Es la dominante de función y de actitud la que crea la resonancia.",
  },
  aspects: {
    intro: [
      "Los aspectos ya no son «buenos» o «malos» sino dinámicas internas entre dos funciones psíquicas.",
    ],
    items: [
      { label: "Conjunción", sens: "Fusión de dos funciones: actúan juntas, a veces sin perspectiva." },
      { label: "Trígono y sextil", sens: "Talentos fluidos, recursos disponibles — con el riesgo de la facilidad no trabajada." },
      { label: "Cuadratura", sens: "Tensión motriz: fricción interna que impulsa al esfuerzo y al crecimiento." },
      { label: "Oposición", sens: "Polaridad a integrar: dos necesidades que a menudo se proyectan sobre los demás antes de reconciliarse." },
    ],
  },
  maisonsPsy: {
    intro: [
      "En lectura psicológica, las casas son los grandes ámbitos de experiencia donde las funciones se encarnan y donde se juegan las proyecciones.",
    ],
    items: [
      { maison: "I", theme: "La identidad naciente, la imagen de sí, la forma espontánea de abordar la vida." },
      { maison: "II", theme: "La autoestima, la relación con el cuerpo, con los recursos y con lo que tiene valor." },
      { maison: "III", theme: "La mente concreta, el aprendizaje, la comunicación, la hermandad interior." },
      { maison: "IV", theme: "Las raíces, la familia interiorizada, el sentimiento de pertenencia, el hogar psíquico." },
      { maison: "V", theme: "La creatividad, el juego, la expresión espontánea del yo, el niño creador." },
      { maison: "VI", theme: "El día a día, el cuerpo-instrumento, el servicio, el ajuste y la higiene de vida." },
      { maison: "VII", theme: "El otro, el espejo, la proyección, lo que busco y rehúyo en la relación." },
      { maison: "VIII", theme: "La intimidad profunda, las crisis, la transformación, lo que muere y renace en uno." },
      { maison: "IX", theme: "El sentido, las creencias, la apertura, la búsqueda de visión y de horizonte." },
      { maison: "X", theme: "La vocación, la realización, la persona pública, la figura de autoridad interiorizada." },
      { maison: "XI", theme: "Los ideales, la pertenencia al grupo, el yo vuelto hacia el colectivo y el futuro." },
      { maison: "XII", theme: "El inconsciente, la sombra, lo reprimido, lo que se disuelve y pide ser hecho consciente." },
    ],
  },
  cyclesVie: {
    intro: [
      "La astrología «evolutiva» lee los grandes tránsitos como etapas de maduración psíquica. Algunas citas estructuran casi todas las vidas.",
    ],
    items: [
      { age: "≈ 29–30 años", nom: "Retorno de Saturno", sens: "Primer paso a la edad adulta: se dejan los modelos heredados para construir una estructura que se nos parezca." },
      { age: "≈ 38–43 años", nom: "Oposición de Urano", sens: "La «crisis de la mitad de la vida»: necesidad de despertar, de libertad y de autenticidad ante lo que se ha vuelto demasiado estrecho." },
      { age: "≈ 49–51 años", nom: "Retorno de Quirón", sens: "Vuelta a la herida fundadora: ocasión de convertirla en sabiduría y en un don para los demás." },
      { age: "≈ 58–60 años", nom: "Segundo retorno de Saturno", sens: "Balance de madurez: transmitir, aligerar, asumir la autoridad de una vida atravesada." },
    ],
    note: "Estos ciclos no «causan» nada de forma mecánica: marcan ventanas de maduración que la conciencia puede aprovechar.",
  },
  ombreProjection: {
    intro: ["Tres nociones junguianas son centrales para entender cómo se vive concretamente una carta."],
    items: [
      { label: "La sombra", sens: "Las partes reprimidas o no asumidas de la carta (a menudo los planetas mal queridos): lo que no nos atrevemos a vivir." },
      { label: "La proyección", sens: "Ver en el otro lo que no reconocemos en nosotros: un Marte reprimido se percibe como la agresividad de los demás." },
      { label: "La individuación", sens: "El proceso de integración: hacer dialogar todas las funciones de la carta para volverse más entero." },
    ],
  },
  traditionVsPsy: {
    intro: ["La astropsicología no niega la astrología clásica: le cambia la finalidad."],
    items: [
      { label: "Astrología tradicional", sens: "Apunta a menudo al acontecimiento, al timing, al «sí/no»; la carta describe una suerte." },
      { label: "Astropsicología", sens: "Apunta a la comprensión interior y al crecimiento; la carta describe un potencial a hacer consciente." },
      { label: "Complementariedad", sens: "Muchos astrólogos combinan ambas: el rigor técnico al servicio del sentido psicológico." },
    ],
  },
  pratique: {
    intro: ["¿Cómo leer concretamente una carta desde una óptica psicológica? Aquí va un guion en seis tiempos."],
    etapes: [
      "1) Plantar el decorado: elemento y función dominantes, equilibrio de los cuatro elementos (¿dónde está la soltura, dónde la falta?).",
      "2) Leer la tríada Sol / Luna / Ascendente como un diálogo entre identidad, necesidades y persona.",
      "3) Situar a Saturno: el miedo estructurante, la autoridad interior, la obra de madurez.",
      "4) Detectar las funciones en tensión (cuadraturas, oposiciones): las fricciones que impulsan a crecer.",
      "5) Buscar la sombra: planetas reprimidos, casa XII, lo que se proyecta sobre los demás.",
      "6) Volver a situarlo todo en el tiempo: ¿en qué punto estoy de mis grandes ciclos de vida?",
    ],
  },
  exemplesLecture: [
    { titre: "Luna en Capricornio", texte: "Más que «emociones frías», se lee una necesidad de seguridad por el dominio y la responsabilidad, a menudo un niño interior que aprendió pronto a controlarse. El trabajo consiste en permitirse la vulnerabilidad." },
    { titre: "Cuadratura Sol–Saturno", texte: "No una maldición, sino una tensión entre el impulso de ser uno mismo (Sol) y una autoridad interior crítica (Saturno). Bien integrada, da disciplina, resistencia y autoridad legítima." },
    { titre: "Marte en casa XII", texte: "Una afirmación poco consciente, a veces reprimida y proyectada («los demás son agresivos»). El reto: recuperar el propio Marte, atreverse con el deseo y la ira sana en lugar de enterrarlos." },
    { titre: "Falta de elemento Tierra", texte: "La función Sensación está poco desarrollada: ideas brillantes (Aire/Fuego) pero dificultad para encarnar y estructurar lo concreto. El camino pasa por el cuerpo, lo real y la paciencia." },
    { titre: "Nodo Norte en Libra", texte: "Independencia ya adquirida (Nodo Sur en Aries), crecimiento hacia la relación, la escucha y el compromiso. No renegar de la propia autonomía, sino aprender a compartirla." },
    { titre: "Venus opuesta a Plutón", texte: "Dos funciones polarizadas: la necesidad de armonía (Venus) y la intensidad transformadora (Plutón). A menudo vivida primero por proyección en relaciones fusionales; a integrar en una profundidad afectiva consentida." },
  ],
  limites: [
    "Confundir lectura psicológica con diagnóstico clínico: la astropsicología no es psicología científica.",
    "No reemplazar un acompañamiento profesional en caso de sufrimiento real.",
    "Evitar el determinismo disfrazado («soy así por culpa de mi carta»).",
    "No reducirlo todo a la sombra o a la infancia: mantener una lectura matizada.",
    "Mantenerse prudente: la validez científica de la astrología no está establecida; se trata de una herramienta de reflexión simbólica.",
  ],
  faq: [
    { q: "¿Qué es la astropsicología?", a: "Un enfoque que lee la carta como un mapa de la psique más que como una predicción. Se apoya en la psicología profunda (Jung) para favorecer el autoconocimiento." },
    { q: "¿Qué relación tiene con Carl Jung?", a: "Jung aportó los conceptos clave — arquetipo, inconsciente colectivo, sombra, individuación, sincronicidad — que sirven de marco a la lectura psicológica de la carta." },
    { q: "¿La astropsicología predice el futuro?", a: "No. Describe potenciales y dinámicas interiores que la conciencia puede orientar. Insiste en el libre albedrío más que en el destino." },
    { q: "¿Sustituye a una terapia?", a: "No. Puede acompañar un trabajo de introspección, pero no reemplaza ni a un psicólogo ni a un médico. En caso de sufrimiento, consulta a un profesional." },
    { q: "¿Qué significa «sombra» en astrología psicológica?", a: "Las partes reprimidas de la carta — a menudo planetas mal vividos — que no asumimos y que a veces proyectamos sobre los demás." },
    { q: "¿Cómo corresponden los elementos a las funciones de Jung?", a: "Fuego = Intuición, Tierra = Sensación, Aire = Pensamiento, Agua = Sentimiento. El equilibrio de los elementos de la carta indica qué funciones psíquicas son fáciles o están por desarrollar." },
    { q: "¿Qué es el retorno de Saturno?", a: "Hacia los 29-30 años, Saturno vuelve a su posición de nacimiento: una etapa de maduración en la que se construye una vida más auténtica, leída clásicamente como un paso a la edad adulta." },
    { q: "¿Cuál es la diferencia con la astrología tradicional?", a: "La tradicional apunta a menudo al acontecimiento y al timing; la astropsicología apunta al sentido interior y al crecimiento. Las dos pueden complementarse." },
    { q: "¿Qué relación hay entre los 16 tipos (MBTI) y la astrología?", a: "Los 16 tipos del MBTI derivan de la tipología de Jung (funciones Pensamiento/Sentimiento, Sensación/Intuición + introversión/extraversión), las mismas funciones que la astropsicología vincula a los cuatro elementos. El acercamiento es analógico: ningún tipo corresponde exactamente a un signo." },
  ],
  faqVisible: [
    { q: "¿Hay que creer en el destino para practicar la astropsicología?", a: "No, al contrario. Este enfoque se basa en el libre albedrío: la carta describe energías y potenciales, pero la manera de vivirlos depende del nivel de conciencia y de las elecciones de la persona." },
    { q: "¿Qué planetas son los más importantes en la lectura psicológica?", a: "Se empieza por la tríada Sol (identidad consciente), Luna (necesidades emocionales) y Ascendente (relación con el mundo), antes de explorar a Saturno (miedos y maduración) y los planetas lentos para los asuntos profundos." },
    { q: "¿Es científica la astropsicología?", a: "No. La validez predictiva de la astrología no está demostrada científicamente. La astropsicología se presenta como un lenguaje simbólico y una herramienta de introspección, a manejar con discernimiento." },
    { q: "¿Cómo usar concretamente tu carta para conocerte mejor?", a: "Se detectan las funciones en tensión (aspectos difíciles), las necesidades poco escuchadas (Luna, casas de agua) y las partes de sombra, y luego se busca hacerlas conscientes e integrarlas en lugar de padecerlas o proyectarlas." },
    { q: "¿Qué es la individuación y cómo ayuda la carta?", a: "La individuación es el proceso de toda una vida que consiste en llegar a ser plenamente uno mismo integrando consciente e inconsciente. La carta ofrece un mapa: muestra las funciones a desarrollar, la sombra a reconocer y la dirección de crecimiento (Nodo Norte)." },
  ],
};

export const astroPsyContent: Record<SeoLocale, AstroPsyContent> = { fr, en, es };
