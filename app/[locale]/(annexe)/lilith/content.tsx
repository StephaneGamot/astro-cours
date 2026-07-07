import { Link } from "@/i18n/navigation";
import type { ReactNode } from "react";
import type { SeoLocale } from "@/lib/seo";

/* ====================================================================
   Lilith (Lune Noire) — contenu localisé (fr / en / es)
   Les clés logiques (section id, slug d'ancre) sont identiques dans
   chaque langue ; seuls les textes (label / contenu) sont traduits.
   ==================================================================== */

export type LilithSection = { id: string; label: string };

export type Pair = [string, string];

export type LilithContent = {
  meta: { title: string; description: string };
  jsonld: { headline: string; description: string; articleSection: string };
  hero: {
    eyebrow: string;
    h1: ReactNode;
    intro: ReactNode;
    tocLabel: string;
    imgAlt: string;
  };
  sections: LilithSection[];
  defBox: { label: string; body: ReactNode };
  appIntro: ReactNode;
  definition: {
    title: string;
    body: ReactNode;
    fonctionLabel: string;
    fonction: string;
    piqueLabel: string;
    pique: string;
    eleveLabel: string;
    eleve: string;
  };
  vraieMoyenne: {
    title: string;
    intro: ReactNode;
    vraieLabel: string;
    vraie: string;
    moyenneLabel: string;
    moyenne: string;
    conseil: ReactNode;
  };
  mythologie: {
    title: string;
    originLabel: string;
    origin: ReactNode;
    bibleLabel: string;
    bible: ReactNode;
    whyLabel: string;
    whyItems: ReactNode[];
    cards: Pair[];
  };
  symbolique: {
    title: string;
    themesLabel: string;
    themes: string[];
    piegeLabel: string;
    piege: string[];
    memoLabel: string;
    memo: string;
  };
  methodo: {
    title: string;
    steps: ReactNode[];
    levels: Pair[];
  };
  signe: {
    title: string;
    intro: string;
    items: Pair[];
  };
  maison: {
    title: string;
    items: Pair[];
  };
  aspects: {
    title: string;
    items: Pair[];
    tipLabel: string;
    tip: ReactNode;
  };
  erreurs: {
    title: string;
    items: string[];
  };
  exemples: {
    title: string;
    items: Pair[];
  };
  footer: {
    col1Label: string;
    col1Body: ReactNode;
    col1Aspects: string;
    col1Maisons: string;
    col1Planetes: string;
    col2Label: string;
    col2Items: string[];
    col2ExerciseLabel: string;
    col2Exercise: ReactNode;
    col3Label: string;
    col3Body: string;
    col3Signes: string;
    col3Planetes: string;
    col3Maisons: string;
    col3Dignites: string;
    col3SuggestionLabel: string;
    col3Suggestion: ReactNode;
    copyright: string;
    topLabel: string;
    mythologieLabel: string;
  };
  faqTitle: string;
  faq: { q: string; a: ReactNode }[];
  faqJsonLd: { name: string; text: string }[];
};

/* ============================== FR ============================== */
const fr: LilithContent = {
  meta: {
    title: "Lilith (Lune Noire) — Vraie vs moyenne, sens & méthode",
    description:
      "Lilith (Lune Noire) en astrologie : définition, vraie vs moyenne, symbolique et lecture par signe, maison et aspects. Explorez notre cours complet !",
  },
  jsonld: {
    headline: "Lilith (Lune Noire) — Vraie vs moyenne, sens & méthode",
    description:
      "Lilith (Lune Noire) en astrologie : définition, vraie vs moyenne, symbolique et lecture par signe, maison et aspects.",
    articleSection: "Astrologie",
  },
  hero: {
    eyebrow: "Cours d'astrologie — Points sensibles",
    h1: (
      <>
        Lilith <span className="text-text/70">(Lune Noire)</span>
      </>
    ),
    intro: (
      <>
        Lilith n'est pas une planète : c'est un <span className="text-text">point</span> (lié à l'orbite lunaire)
        qui met en lumière ce qui est <span className="text-text">brut, intolérable, non négociable</span> :
        désir, manque, rejet, honte, pulsion de vérité, et la manière dont on reprend du pouvoir
        quand on cesse de &quot;faire semblant&quot;.
      </>
    ),
    tocLabel: "Sommaire",
    imgAlt: "Illustration Lilith (Lune Noire)",
  },
  sections: [
    { id: "definition", label: "Définition" },
    { id: "vraie-moyenne", label: "Vraie vs Moyenne" },
    { id: "symbolique", label: "Symbolique" },
    { id: "methodo", label: "Méthode" },
    { id: "signe", label: "Lilith par signe" },
    { id: "maison", label: "Lilith par maison" },
    { id: "aspects", label: "Lilith en aspects" },
    { id: "erreurs", label: "Erreurs fréquentes" },
    { id: "exemples", label: "Cas pratiques" },
  ],
  defBox: {
    label: "Définition",
    body: (
      <>
        <strong>Lilith</strong> (ou <strong>Lune Noire</strong>) est un point fictif en astrologie correspondant à l'apogée de l'orbite lunaire. Elle révèle dans le <Link href="/#theme-natal">thème natal</Link> les zones de désir brut, de vérité intime et de limites non négociables.
      </>
    ),
  },
  appIntro: (
    <>
      <strong>Lilith en astrologie</strong> fascine autant qu'elle intrigue, mais rares sont les cours qui l'expliquent clairement. Faut-il utiliser la Lilith vraie ou moyenne ? Que signifie-t-elle dans chaque signe ou maison ? Ce guide complet vous donne une méthode fiable pour interpréter la Lune Noire dans votre thème, avec des exemples concrets et des repères professionnels.
    </>
  ),
  definition: {
    title: "Qu'est-ce que Lilith (Lune Noire) en astrologie ?",
    body: (
      <>
        En astrologie, <span className="text-text">Lilith / Lune Noire</span> correspond à l'<span className="text-text">apogée</span>
        de l'orbite lunaire (le point le plus éloigné de la Terre). C'est un repère symbolique :
        <span className="text-text"> le lieu du manque</span> (ce qu'on ne veut plus mendier),
        et du <span className="text-text">désir non domestiqué</span> (ce qu'on refuse de réduire pour plaire).
      </>
    ),
    fonctionLabel: "Fonction",
    fonction: "Mettre en évidence un endroit \"sensible\" : vérité, pulsion, limite, non-négociable.",
    piqueLabel: "Quand elle pique",
    pique: "Quand on se renie, qu'on se censure, ou qu'on s'abandonne pour garder l'amour/la paix.",
    eleveLabel: "Quand elle élève",
    eleve: "Quand on assume une vérité intime, sans violence, mais sans compromis intérieur.",
  },
  vraieMoyenne: {
    title: "Quelle différence entre Lilith vraie et Lilith moyenne ?",
    intro: (
      <>
        Tu verras souvent deux positions : <span className="text-text">Lilith vraie</span> et{" "}
        <span className="text-text">Lilith moyenne</span>. Elles sont proches, mais pas identiques.
      </>
    ),
    vraieLabel: "Vraie (True / Osculating)",
    vraie:
      "Plus \"nerveuse\" : peut bouger plus vite, donner des nuances, parfois plus tranchée dans le vécu. Utile si tu veux une lecture fine.",
    moyenneLabel: "Moyenne (Mean)",
    moyenne:
      "Plus \"stable\" : excellente pour enseigner et pour des grilles pédagogiques. Si tu hésites : commence par la moyenne.",
    conseil: (
      <>
        Conseil : dans ton site, affiche la <span className="text-text">moyenne</span> par défaut, et propose un toggle &quot;vraie&quot;.
      </>
    ),
  },
  mythologie: {
    title: "D'où vient le mythe de Lilith en astrologie ?",
    originLabel: "Origines du nom",
    origin: (
      <>
        Le mot &quot;Lilith&quot; apparaît dans des traditions anciennes du Proche-Orient (racines liées à la nuit / aux esprits
        nocturnes selon les cultures). En astrologie moderne, le terme a été repris pour nommer la &quot;Lune Noire&quot;
        (un point astronomique), mais il ne s&apos;agit pas d&apos;une planète ni d&apos;un astre.
      </>
    ),
    bibleLabel: "Bible : attention aux raccourcis",
    bible: (
      <>
        Le personnage &quot;Lilith&quot; n&apos;est pas présenté clairement comme un personnage biblique dans la Bible canonique.
        On le rencontre surtout dans la tradition juive post-biblique (commentaires, midrash, folklore).
        Certaines traductions d&apos;Isaïe 34:14 utilisent parfois &quot;Lilith&quot;, mais selon les versions,
        cela peut être traduit autrement (créature nocturne, hibou, etc.).
      </>
    ),
    whyLabel: "Pourquoi c'est intéressant (côté cours)",
    whyItems: [
      <>
        La figure mythique de Lilith sert de <span className="text-text">miroir culturel</span> : désir, transgression,
        autonomie, rejet, pouvoir.
      </>,
      <>
        En astrologie, on ne &quot;prouve&quot; pas un mythe : on l&apos;utilise comme <span className="text-text">langage symbolique</span>
        pour enseigner des dynamiques psychologiques.
      </>,
      <>
        Méthode pro : garder la distinction entre <span className="text-text">astronomie</span> (point orbital) et{" "}
        <span className="text-text">mythologie</span> (récits).
      </>,
    ],
    cards: [
      ["Mythe", "Récit / figure culturelle (désir, rejet, autonomie…)."],
      ["Astro", "Point (apogée lunaire) : zone sensible, non-négociable, vérité intime."],
      ["Lecture", "Signe = style • Maison = domaine • Aspects = déclencheurs / intégration."],
    ],
  },
  symbolique: {
    title: "Que symbolise Lilith dans un thème natal ?",
    themesLabel: "Thèmes",
    themes: [
      "Le désir brut et la vérité intime (ce qu'on ne \"réduit\" plus).",
      "La honte, le rejet, l'ombre sociale (ce qui a été jugé/interdit).",
      "Le pouvoir personnel : reprendre son axe sans écraser l'autre.",
      "La frontière : ce que je ne négocie plus, même \"gentiment\".",
    ],
    piegeLabel: "Le piège",
    piege: [
      "Se couper / se durcir : \"je n'ai besoin de personne\".",
      "Provoquer par défense : tester l'autre avant qu'il ne parte.",
      "Confondre vérité et violence (dire vrai ≠ blesser).",
      "Répéter le rejet : choisir ce qui n'est pas disponible.",
    ],
    memoLabel: "Phrase mémo",
    memo: "« Là où est Lilith, je ne veux plus mendier. Je veux être vrai. »",
  },
  methodo: {
    title: "Comment interpréter Lilith dans un thème astral ?",
    steps: [
      <>
        <span className="text-text">1) Signe</span> : le style du désir / de la vérité (comment Lilith s'exprime).
      </>,
      <>
        <span className="text-text">2) Maison</span> : la zone de vie où ça se joue (où tu refuses le compromis).
      </>,
      <>
        <span className="text-text">3) Aspects</span> : la manière dont le thème s'active (tension / facilité / obsession / intégration).
      </>,
      <>
        <span className="text-text">4) Dispositrice</span> (maître du signe de Lilith) : &quot;qui pilote la scène&quot;.
      </>,
      <>
        <span className="text-text">5) Niveau</span> : blessure → défense → conscience → puissance calme.
      </>,
    ],
    levels: [
      ["Blessure", "Je me renie pour être accepté."],
      ["Défense", "Je deviens dur / je teste / je coupe."],
      ["Intégration", "Je dis vrai, je pose une limite, je reste humain."],
    ],
  },
  signe: {
    title: "Que signifie Lilith dans chaque signe du zodiaque ?",
    intro:
      "Ici c'est une base de cours. Sur ton site, tu pourras générer une page dynamique comme tes signes.",
    items: [
      ["Bélier", 'Vérité directe, refus de la soumission. Ombre : impulsivité, "je prends ou je casse".'],
      ["Taureau", "Désir intense de sécurité/plaisir. Ombre : fixation, jalousie, contrôle par la matière."],
      ["Gémeaux", "Vérité mentale, besoin de dire. Ombre : double discours, agitation, provocation verbale."],
      ["Cancer", "Vérité émotionnelle, besoin de protection. Ombre : fusion/rettrait, tests affectifs."],
      ["Lion", "Vérité du cœur, fierté. Ombre : drame, besoin d'être choisi/adoré."],
      ["Vierge", "Vérité du discernement. Ombre : hyper-contrôle, critique, pureté impossible."],
      ["Balance", "Vérité relationnelle. Ombre : dépendance, séduction, peur de déplaire."],
      ["Scorpion", "Vérité des profondeurs. Ombre : possession, secrets, pouvoir, obsession."],
      ["Sagittaire", `Vérité du sens. Ombre : dogmatisme, fuite, "j'ai raison".`],
      ["Capricorne", "Vérité de la dignité/structure. Ombre : froid, exigence, dureté."],
      ["Verseau", "Vérité de liberté. Ombre : détachement, rupture, supériorité."],
      ["Poissons", "Vérité mystique. Ombre : confusion, sauvetage, dissolution des limites."],
    ],
  },
  maison: {
    title: "Lilith dans les 12 maisons astrologiques : où agit-elle ?",
    items: [
      ["Maison I", "Image / identité : je refuse d'être défini par les autres."],
      ["Maison II", "Valeur / argent : je ne mendie plus la sécurité."],
      ["Maison III", "Parole : je dis ce que j'ai toujours retenu."],
      ["Maison IV", "Famille : loyautés invisibles, besoin d'un refuge vrai."],
      ["Maison V", "Amour / création : désir assumé, peur d'être jugé."],
      ["Maison VI", "Contrôle / routine : exigence, rapport au corps et au service."],
      ["Maison VII", "Couple : tests, peur de l'abandon, vérité relationnelle."],
      ["Maison VIII", "Intimité : fusion/pouvoir, transformation, secrets."],
      ["Maison IX", "Croyances : vérité personnelle, rejet des dogmes."],
      ["Maison X", 'Statut : dignité, réputation, "je ne me vends plus".'],
      ["Maison XI", "Groupe : appartenance, différence, liberté."],
      ["Maison XII", "Inconscient : exil intérieur, compassion, limites à reconstruire."],
    ],
  },
  aspects: {
    title: "Comment lire les aspects de Lilith aux planètes ?",
    items: [
      ["Conjonction", 'Sujet central : intensifie et rend "inévitable" la thématique.'],
      ["Opposition", "Projection : l'autre révèle ce que je n'assume pas encore."],
      ["Carré", "Tension : déclencheurs, crises utiles, nécessité d'intégrer."],
      ["Trigone", "Fluidité : talent de vérité, mais risque de confort (pas de travail conscient)."],
      ["Sextile", "Opportunité : ouverture par choix, apprentissage progressif."],
    ],
    tipLabel: "Astuce pro",
    tip: (
      <>
        Commence par les aspects à <span className="text-text">Soleil</span>, <span className="text-text">Lune</span>,{" "}
        <span className="text-text">Vénus</span> et <span className="text-text">Mars</span> : ce sont ceux qui parlent
        le plus directement du vécu (identité, sécurité, désir, relation, pulsion).
      </>
    ),
  },
  erreurs: {
    title: "Quelles erreurs éviter avec Lilith en astrologie ?",
    items: [
      "Faire de Lilith \"le mal\" : c'est un point de vérité, pas une condamnation.",
      "La réduire à la sexualité : elle parle surtout de désir + limite + dignité.",
      "Oublier la dispositrice : le maître du signe explique \"comment ça se gère\".",
      "Interpréter sans la maison : sans contexte de vie, on part dans l'abstrait.",
      "Lire Lilith seule : elle fonctionne mieux avec Lune / Vénus / Mars / Pluton.",
    ],
  },
  exemples: {
    title: "Exemples concrets d'interprétation de Lilith",
    items: [
      [
        "Lilith en Maison VII",
        "Relations comme miroir : tests, peur de l'abandon, besoin de vérité. Travail : dire les limites tôt, ne pas manipuler par retrait.",
      ],
      [
        "Lilith conjointe Vénus",
        "Désir et valeurs intensifiés : attirances fortes, refus du tiède. Travail : distinguer amour vs manque, ne pas confondre intensité et compatibilité.",
      ],
      [
        "Lilith carré Lune",
        'Conflit besoin/souhait : hypersensibilité au rejet. Travail : re-parenting, sécurité interne, ne pas "punir" l\'autre pour une ancienne blessure.',
      ],
      [
        "Lilith trigone Soleil",
        "Force de vérité et charisme : on assume plus facilement. Vigilance : éviter l'arrogance morale, garder le cœur ouvert.",
      ],
    ],
  },
  footer: {
    col1Label: "Aller plus loin",
    col1Body: (
      <>
        Prochaine étape logique : intégrer Lilith aux <span className="text-text">maisons</span> et aux{" "}
        <span className="text-text">aspects</span>, puis comparer avec la <span className="text-text">Lune</span> et{" "}
        <span className="text-text">Vénus/Mars</span> pour distinguer besoin, désir et limite.
      </>
    ),
    col1Aspects: "Aspects",
    col1Maisons: "Maisons",
    col1Planetes: "Planètes",
    col2Label: "À retenir",
    col2Items: [
      "Lilith = point sensible : désir, vérité intime, limite.",
      "Maison : où ça se joue • Signe : comment • Aspects : quand/avec qui.",
      "Traduire \"intensité\" en choix simples = intégration.",
    ],
    col2ExerciseLabel: "Mini-exercice",
    col2Exercise: (
      <>
        Écris une phrase : <span className="text-text">&quot;Je ne mendie plus …&quot;</span> puis ajoute{" "}
        <span className="text-text">&quot;Je choisis …&quot;</span> (version adulte).
      </>
    ),
    col3Label: "Navigation",
    col3Body: "Continue ton cours avec les pages fondamentales :",
    col3Signes: "Signes",
    col3Planetes: "Planètes",
    col3Maisons: "Maisons",
    col3Dignites: "Dignités",
    col3SuggestionLabel: "Suggestion",
    col3Suggestion: (
      <>
        Si tu veux une lecture ultra claire : commence par <span className="text-text">Lilith + Maison</span>,
        puis ajoute <span className="text-text">un seul aspect majeur</span>.
      </>
    ),
    copyright: "Cours d'astrologie • Lilith (Lune Noire)",
    topLabel: "↑ Haut de page",
    mythologieLabel: "Mythologie",
  },
  faqTitle: "Questions fréquentes sur Lilith (Lune Noire)",
  faq: [
    {
      q: "Lilith est-elle une planète en astrologie ?",
      a: (
        <>
          Non. <strong>Lilith</strong> (Lune Noire) n'est pas une planète ni un astre physique. C'est un <strong>point fictif</strong> correspondant à l'apogée de l'orbite de la <Link href="/planetes">Lune</Link> autour de la Terre. Elle fonctionne comme un repère symbolique dans le thème natal.
        </>
      ),
    },
    {
      q: "Comment trouver sa Lilith dans son thème natal ?",
      a: (
        <>
          La plupart des logiciels d'astrologie (Astro.com, etc.) calculent la position de <strong>Lilith moyenne</strong> par défaut. Repérez son <Link href="/signes">signe</Link> et sa <Link href="/maisons">maison</Link>, puis observez ses aspects aux planètes personnelles pour une première interprétation fiable.
        </>
      ),
    },
    {
      q: "Quelle est la signification de Lilith en maison 7 ?",
      a: (
        <>
          <strong>Lilith en maison VII</strong> place la vérité brute dans le domaine des relations. Elle indique des tests relationnels, une peur de l'abandon et un besoin profond de vérité dans le couple. Le travail consiste à poser ses limites tôt et à ne pas manipuler par le retrait.
        </>
      ),
    },
    {
      q: "Faut-il utiliser Lilith vraie ou Lilith moyenne ?",
      a: (
        <>
          Pour débuter, la <strong>Lilith moyenne</strong> (Mean) est recommandée : elle est plus stable et plus facile à enseigner. La <strong>Lilith vraie</strong> (True) donne des nuances plus fines mais peut être plus volatile. Les deux positions sont souvent proches dans le <Link href="/#theme-natal">thème natal</Link>.
        </>
      ),
    },
  ],
  faqJsonLd: [
    {
      name: "Lilith est-elle une planète en astrologie ?",
      text: "Non. Lilith (Lune Noire) n'est pas une planète ni un astre physique. C'est un point fictif correspondant à l'apogée de l'orbite de la Lune autour de la Terre. Elle fonctionne comme un repère symbolique dans le thème natal.",
    },
    {
      name: "Comment trouver sa Lilith dans son thème natal ?",
      text: "La plupart des logiciels d'astrologie (Astro.com, etc.) calculent la position de Lilith moyenne par défaut. Repérez son signe et sa maison, puis observez ses aspects aux planètes personnelles pour une première interprétation fiable.",
    },
    {
      name: "Quelle est la signification de Lilith en maison 7 ?",
      text: "Lilith en maison VII place la vérité brute dans le domaine des relations. Elle indique des tests relationnels, une peur de l'abandon et un besoin profond de vérité dans le couple. Le travail consiste à poser ses limites tôt et à ne pas manipuler par le retrait.",
    },
    {
      name: "Faut-il utiliser Lilith vraie ou Lilith moyenne ?",
      text: "Pour débuter, la Lilith moyenne (Mean) est recommandée : elle est plus stable et plus facile à enseigner. La Lilith vraie (True) donne des nuances plus fines mais peut être plus volatile. Les deux positions sont souvent proches dans le thème natal.",
    },
  ],
};

/* ============================== EN ============================== */
const en: LilithContent = {
  meta: {
    title: "Lilith (Black Moon) — True vs mean, meaning & method",
    description:
      "Black Moon Lilith in astrology: definition, true vs mean, symbolism and reading by sign, house and aspects. Explore our complete course!",
  },
  jsonld: {
    headline: "Lilith (Black Moon) — True vs mean, meaning & method",
    description:
      "Black Moon Lilith in astrology: definition, true vs mean, symbolism and reading by sign, house and aspects.",
    articleSection: "Astrology",
  },
  hero: {
    eyebrow: "Astrology course — Sensitive points",
    h1: (
      <>
        Lilith <span className="text-text/70">(Black Moon)</span>
      </>
    ),
    intro: (
      <>
        Lilith is not a planet: it is a <span className="text-text">point</span> (tied to the lunar orbit)
        that brings to light what is <span className="text-text">raw, intolerable, non-negotiable</span>:
        desire, lack, rejection, shame, the urge for truth, and the way we reclaim our power
        when we stop &quot;pretending&quot;.
      </>
    ),
    tocLabel: "Contents",
    imgAlt: "Black Moon Lilith illustration",
  },
  sections: [
    { id: "definition", label: "Definition" },
    { id: "vraie-moyenne", label: "True vs Mean" },
    { id: "symbolique", label: "Symbolism" },
    { id: "methodo", label: "Method" },
    { id: "signe", label: "Lilith by sign" },
    { id: "maison", label: "Lilith by house" },
    { id: "aspects", label: "Lilith in aspects" },
    { id: "erreurs", label: "Common mistakes" },
    { id: "exemples", label: "Case studies" },
  ],
  defBox: {
    label: "Definition",
    body: (
      <>
        <strong>Lilith</strong> (or the <strong>Black Moon</strong>) is a fictitious point in astrology corresponding to the apogee of the lunar orbit. In the <Link href="/#theme-natal">natal chart</Link>, it reveals the zones of raw desire, intimate truth and non-negotiable boundaries.
      </>
    ),
  },
  appIntro: (
    <>
      <strong>Lilith in astrology</strong> fascinates as much as it intrigues, yet few courses explain it clearly. Should you use true or mean Lilith? What does it mean in each sign or house? This complete guide gives you a reliable method to interpret the Black Moon in your chart, with concrete examples and professional benchmarks.
    </>
  ),
  definition: {
    title: "What is Lilith (the Black Moon) in astrology?",
    body: (
      <>
        In astrology, <span className="text-text">Lilith / the Black Moon</span> corresponds to the <span className="text-text">apogee</span>
        of the lunar orbit (the point farthest from Earth). It is a symbolic marker:
        <span className="text-text"> the place of lack</span> (what we no longer want to beg for),
        and of <span className="text-text">undomesticated desire</span> (what we refuse to shrink in order to please).
      </>
    ),
    fonctionLabel: "Function",
    fonction: "To highlight a \"sensitive\" spot: truth, drive, boundary, non-negotiable.",
    piqueLabel: "When it stings",
    pique: "When we deny ourselves, censor ourselves, or give ourselves up to keep love/peace.",
    eleveLabel: "When it elevates",
    eleve: "When we own an intimate truth, without violence, but without inner compromise.",
  },
  vraieMoyenne: {
    title: "What is the difference between true and mean Lilith?",
    intro: (
      <>
        You will often see two positions: <span className="text-text">true Lilith</span> and{" "}
        <span className="text-text">mean Lilith</span>. They are close, but not identical.
      </>
    ),
    vraieLabel: "True (Osculating)",
    vraie:
      "More \"jittery\": it can move faster, offer nuances, and feel sharper in lived experience. Useful if you want a fine-grained reading.",
    moyenneLabel: "Mean",
    moyenne:
      "More \"stable\": excellent for teaching and for educational grids. If you are unsure: start with the mean.",
    conseil: (
      <>
        Tip: on your site, show the <span className="text-text">mean</span> by default, and offer a &quot;true&quot; toggle.
      </>
    ),
  },
  mythologie: {
    title: "Where does the myth of Lilith in astrology come from?",
    originLabel: "Origins of the name",
    origin: (
      <>
        The word &quot;Lilith&quot; appears in ancient Near Eastern traditions (roots linked to the night / to nocturnal
        spirits depending on the culture). In modern astrology, the term was adopted to name the &quot;Black Moon&quot;
        (an astronomical point), but it is not a planet or a celestial body.
      </>
    ),
    bibleLabel: "The Bible: beware of shortcuts",
    bible: (
      <>
        The figure of &quot;Lilith&quot; is not clearly presented as a biblical character in the canonical Bible.
        She is mostly found in post-biblical Jewish tradition (commentaries, midrash, folklore).
        Some translations of Isaiah 34:14 sometimes use &quot;Lilith&quot;, but depending on the version,
        it may be rendered differently (a nocturnal creature, an owl, etc.).
      </>
    ),
    whyLabel: "Why it is interesting (for the course)",
    whyItems: [
      <>
        The mythical figure of Lilith serves as a <span className="text-text">cultural mirror</span>: desire, transgression,
        autonomy, rejection, power.
      </>,
      <>
        In astrology, we do not &quot;prove&quot; a myth: we use it as a <span className="text-text">symbolic language</span>
        to teach psychological dynamics.
      </>,
      <>
        Pro method: keep the distinction between <span className="text-text">astronomy</span> (an orbital point) and{" "}
        <span className="text-text">mythology</span> (stories).
      </>,
    ],
    cards: [
      ["Myth", "A story / cultural figure (desire, rejection, autonomy…)."],
      ["Astro", "A point (lunar apogee): a sensitive, non-negotiable zone, intimate truth."],
      ["Reading", "Sign = style • House = domain • Aspects = triggers / integration."],
    ],
  },
  symbolique: {
    title: "What does Lilith symbolise in a natal chart?",
    themesLabel: "Themes",
    themes: [
      "Raw desire and intimate truth (what we no longer \"shrink\").",
      "Shame, rejection, the social shadow (what was judged/forbidden).",
      "Personal power: reclaiming your axis without crushing the other.",
      "The boundary: what I no longer negotiate, even \"nicely\".",
    ],
    piegeLabel: "The trap",
    piege: [
      "Cutting yourself off / hardening: \"I don't need anyone\".",
      "Provoking out of defence: testing the other before they leave.",
      "Confusing truth with violence (speaking truth ≠ hurting).",
      "Repeating rejection: choosing what is not available.",
    ],
    memoLabel: "Memo phrase",
    memo: "\"Where Lilith is, I no longer want to beg. I want to be true.\"",
  },
  methodo: {
    title: "How do you interpret Lilith in a birth chart?",
    steps: [
      <>
        <span className="text-text">1) Sign</span>: the style of desire / of truth (how Lilith expresses itself).
      </>,
      <>
        <span className="text-text">2) House</span>: the area of life where it plays out (where you refuse compromise).
      </>,
      <>
        <span className="text-text">3) Aspects</span>: how the chart activates (tension / ease / obsession / integration).
      </>,
      <>
        <span className="text-text">4) Dispositor</span> (ruler of Lilith's sign): &quot;who runs the scene&quot;.
      </>,
      <>
        <span className="text-text">5) Level</span>: wound → defence → awareness → calm power.
      </>,
    ],
    levels: [
      ["Wound", "I deny myself in order to be accepted."],
      ["Defence", "I become hard / I test / I cut off."],
      ["Integration", "I speak true, I set a boundary, I stay human."],
    ],
  },
  signe: {
    title: "What does Lilith mean in each sign of the zodiac?",
    intro:
      "This is a course foundation. On your site, you'll be able to generate a dynamic page just like your signs.",
    items: [
      ["Aries", 'Direct truth, refusal of submission. Shadow: impulsiveness, "I take it or I break it".'],
      ["Taurus", "Intense desire for security/pleasure. Shadow: fixation, jealousy, control through matter."],
      ["Gemini", "Mental truth, a need to speak. Shadow: double talk, restlessness, verbal provocation."],
      ["Cancer", "Emotional truth, a need for protection. Shadow: fusion/withdrawal, affective tests."],
      ["Leo", "Truth of the heart, pride. Shadow: drama, a need to be chosen/adored."],
      ["Virgo", "Truth of discernment. Shadow: hyper-control, criticism, impossible purity."],
      ["Libra", "Relational truth. Shadow: dependency, seduction, fear of displeasing."],
      ["Scorpio", "Truth of the depths. Shadow: possession, secrets, power, obsession."],
      ["Sagittarius", `Truth of meaning. Shadow: dogmatism, escape, "I'm right".`],
      ["Capricorn", "Truth of dignity/structure. Shadow: coldness, demand, harshness."],
      ["Aquarius", "Truth of freedom. Shadow: detachment, rupture, superiority."],
      ["Pisces", "Mystical truth. Shadow: confusion, rescuing, dissolution of boundaries."],
    ],
  },
  maison: {
    title: "Lilith in the 12 astrological houses: where does it act?",
    items: [
      ["House I", "Image / identity: I refuse to be defined by others."],
      ["House II", "Worth / money: I no longer beg for security."],
      ["House III", "Speech: I say what I have always held back."],
      ["House IV", "Family: invisible loyalties, a need for a true refuge."],
      ["House V", "Love / creation: owned desire, fear of being judged."],
      ["House VI", "Control / routine: demand, relationship to the body and to service."],
      ["House VII", "Partnership: tests, fear of abandonment, relational truth."],
      ["House VIII", "Intimacy: fusion/power, transformation, secrets."],
      ["House IX", "Beliefs: personal truth, rejection of dogmas."],
      ["House X", 'Status: dignity, reputation, "I no longer sell myself".'],
      ["House XI", "Group: belonging, difference, freedom."],
      ["House XII", "The unconscious: inner exile, compassion, boundaries to rebuild."],
    ],
  },
  aspects: {
    title: "How do you read Lilith's aspects to the planets?",
    items: [
      ["Conjunction", 'Central theme: it intensifies and makes the topic "inevitable".'],
      ["Opposition", "Projection: the other reveals what I do not yet own."],
      ["Square", "Tension: triggers, useful crises, the need to integrate."],
      ["Trine", "Fluidity: a talent for truth, but a risk of comfort (no conscious work)."],
      ["Sextile", "Opportunity: opening through choice, gradual learning."],
    ],
    tipLabel: "Pro tip",
    tip: (
      <>
        Start with aspects to the <span className="text-text">Sun</span>, <span className="text-text">Moon</span>,{" "}
        <span className="text-text">Venus</span> and <span className="text-text">Mars</span>: these speak
        most directly about lived experience (identity, security, desire, relationship, drive).
      </>
    ),
  },
  erreurs: {
    title: "What mistakes should you avoid with Lilith in astrology?",
    items: [
      "Making Lilith \"the evil one\": it is a point of truth, not a condemnation.",
      "Reducing it to sexuality: it speaks above all of desire + boundary + dignity.",
      "Forgetting the dispositor: the sign's ruler explains \"how it is handled\".",
      "Interpreting without the house: with no context of life, you drift into the abstract.",
      "Reading Lilith alone: it works better with the Moon / Venus / Mars / Pluto.",
    ],
  },
  exemples: {
    title: "Concrete examples of interpreting Lilith",
    items: [
      [
        "Lilith in House VII",
        "Relationships as a mirror: tests, fear of abandonment, a need for truth. Work: state your boundaries early, do not manipulate through withdrawal.",
      ],
      [
        "Lilith conjunct Venus",
        "Desire and values intensified: strong attractions, refusal of the lukewarm. Work: distinguish love from lack, do not confuse intensity with compatibility.",
      ],
      [
        "Lilith square Moon",
        'Conflict between need and wish: hypersensitivity to rejection. Work: re-parenting, inner security, do not "punish" the other for an old wound.',
      ],
      [
        "Lilith trine Sun",
        "A force of truth and charisma: you own it more easily. Caution: avoid moral arrogance, keep your heart open.",
      ],
    ],
  },
  footer: {
    col1Label: "Go further",
    col1Body: (
      <>
        The logical next step: integrate Lilith with the <span className="text-text">houses</span> and the{" "}
        <span className="text-text">aspects</span>, then compare it with the <span className="text-text">Moon</span> and{" "}
        <span className="text-text">Venus/Mars</span> to distinguish need, desire and boundary.
      </>
    ),
    col1Aspects: "Aspects",
    col1Maisons: "Houses",
    col1Planetes: "Planets",
    col2Label: "Key takeaways",
    col2Items: [
      "Lilith = a sensitive point: desire, intimate truth, boundary.",
      "House: where it plays out • Sign: how • Aspects: when/with whom.",
      "Translating \"intensity\" into simple choices = integration.",
    ],
    col2ExerciseLabel: "Mini-exercise",
    col2Exercise: (
      <>
        Write a sentence: <span className="text-text">&quot;I no longer beg for …&quot;</span> then add{" "}
        <span className="text-text">&quot;I choose …&quot;</span> (the adult version).
      </>
    ),
    col3Label: "Navigation",
    col3Body: "Continue your course with the foundational pages:",
    col3Signes: "Signs",
    col3Planetes: "Planets",
    col3Maisons: "Houses",
    col3Dignites: "Dignities",
    col3SuggestionLabel: "Suggestion",
    col3Suggestion: (
      <>
        If you want an ultra-clear reading: start with <span className="text-text">Lilith + House</span>,
        then add <span className="text-text">a single major aspect</span>.
      </>
    ),
    copyright: "Astrology course • Lilith (Black Moon)",
    topLabel: "↑ Back to top",
    mythologieLabel: "Mythology",
  },
  faqTitle: "Frequently asked questions about Lilith (the Black Moon)",
  faq: [
    {
      q: "Is Lilith a planet in astrology?",
      a: (
        <>
          No. <strong>Lilith</strong> (the Black Moon) is not a planet or a physical celestial body. It is a <strong>fictitious point</strong> corresponding to the apogee of the <Link href="/planetes">Moon</Link>'s orbit around the Earth. It works as a symbolic marker in the natal chart.
        </>
      ),
    },
    {
      q: "How do you find your Lilith in your natal chart?",
      a: (
        <>
          Most astrology software (Astro.com, etc.) calculates the position of <strong>mean Lilith</strong> by default. Locate its <Link href="/signes">sign</Link> and its <Link href="/maisons">house</Link>, then observe its aspects to the personal planets for a first reliable interpretation.
        </>
      ),
    },
    {
      q: "What is the meaning of Lilith in the 7th house?",
      a: (
        <>
          <strong>Lilith in House VII</strong> places raw truth in the realm of relationships. It indicates relational tests, a fear of abandonment and a deep need for truth in partnership. The work consists of setting your boundaries early and not manipulating through withdrawal.
        </>
      ),
    },
    {
      q: "Should you use true or mean Lilith?",
      a: (
        <>
          To start out, <strong>mean Lilith</strong> is recommended: it is more stable and easier to teach. <strong>True Lilith</strong> gives finer nuances but can be more volatile. The two positions are often close in the <Link href="/#theme-natal">natal chart</Link>.
        </>
      ),
    },
  ],
  faqJsonLd: [
    {
      name: "Is Lilith a planet in astrology?",
      text: "No. Lilith (the Black Moon) is not a planet or a physical celestial body. It is a fictitious point corresponding to the apogee of the Moon's orbit around the Earth. It works as a symbolic marker in the natal chart.",
    },
    {
      name: "How do you find your Lilith in your natal chart?",
      text: "Most astrology software (Astro.com, etc.) calculates the position of mean Lilith by default. Locate its sign and its house, then observe its aspects to the personal planets for a first reliable interpretation.",
    },
    {
      name: "What is the meaning of Lilith in the 7th house?",
      text: "Lilith in House VII places raw truth in the realm of relationships. It indicates relational tests, a fear of abandonment and a deep need for truth in partnership. The work consists of setting your boundaries early and not manipulating through withdrawal.",
    },
    {
      name: "Should you use true or mean Lilith?",
      text: "To start out, mean Lilith is recommended: it is more stable and easier to teach. True Lilith gives finer nuances but can be more volatile. The two positions are often close in the natal chart.",
    },
  ],
};

/* ============================== ES ============================== */
const es: LilithContent = {
  meta: {
    title: "Lilith (Luna Negra) — Verdadera vs media, sentido y método",
    description:
      "Lilith (Luna Negra) en astrología: definición, verdadera vs media, simbolismo y lectura por signo, casa y aspectos. ¡Explora nuestro curso completo!",
  },
  jsonld: {
    headline: "Lilith (Luna Negra) — Verdadera vs media, sentido y método",
    description:
      "Lilith (Luna Negra) en astrología: definición, verdadera vs media, simbolismo y lectura por signo, casa y aspectos.",
    articleSection: "Astrología",
  },
  hero: {
    eyebrow: "Curso de astrología — Puntos sensibles",
    h1: (
      <>
        Lilith <span className="text-text/70">(Luna Negra)</span>
      </>
    ),
    intro: (
      <>
        Lilith no es un planeta: es un <span className="text-text">punto</span> (ligado a la órbita lunar)
        que pone de relieve lo que es <span className="text-text">crudo, intolerable, no negociable</span>:
        deseo, carencia, rechazo, vergüenza, pulsión de verdad, y la forma en que recuperamos el poder
        cuando dejamos de &quot;fingir&quot;.
      </>
    ),
    tocLabel: "Índice",
    imgAlt: "Ilustración de Lilith (Luna Negra)",
  },
  sections: [
    { id: "definition", label: "Definición" },
    { id: "vraie-moyenne", label: "Verdadera vs Media" },
    { id: "symbolique", label: "Simbolismo" },
    { id: "methodo", label: "Método" },
    { id: "signe", label: "Lilith por signo" },
    { id: "maison", label: "Lilith por casa" },
    { id: "aspects", label: "Lilith en aspectos" },
    { id: "erreurs", label: "Errores frecuentes" },
    { id: "exemples", label: "Casos prácticos" },
  ],
  defBox: {
    label: "Definición",
    body: (
      <>
        <strong>Lilith</strong> (o la <strong>Luna Negra</strong>) es un punto ficticio en astrología que corresponde al apogeo de la órbita lunar. En la <Link href="/#theme-natal">carta natal</Link> revela las zonas de deseo crudo, de verdad íntima y de límites no negociables.
      </>
    ),
  },
  appIntro: (
    <>
      <strong>Lilith en astrología</strong> fascina tanto como intriga, pero pocos cursos la explican con claridad. ¿Hay que usar la Lilith verdadera o la media? ¿Qué significa en cada signo o casa? Esta guía completa te da un método fiable para interpretar la Luna Negra en tu carta, con ejemplos concretos y referencias profesionales.
    </>
  ),
  definition: {
    title: "¿Qué es Lilith (la Luna Negra) en astrología?",
    body: (
      <>
        En astrología, <span className="text-text">Lilith / la Luna Negra</span> corresponde al <span className="text-text">apogeo</span>
        de la órbita lunar (el punto más alejado de la Tierra). Es una referencia simbólica:
        <span className="text-text"> el lugar de la carencia</span> (lo que ya no queremos mendigar),
        y del <span className="text-text">deseo no domesticado</span> (lo que nos negamos a reducir para agradar).
      </>
    ),
    fonctionLabel: "Función",
    fonction: "Poner en evidencia un lugar \"sensible\": verdad, pulsión, límite, no negociable.",
    piqueLabel: "Cuándo pincha",
    pique: "Cuando uno se reniega, se censura o se abandona para conservar el amor/la paz.",
    eleveLabel: "Cuándo eleva",
    eleve: "Cuando uno asume una verdad íntima, sin violencia, pero sin compromiso interior.",
  },
  vraieMoyenne: {
    title: "¿Qué diferencia hay entre la Lilith verdadera y la media?",
    intro: (
      <>
        Verás a menudo dos posiciones: <span className="text-text">Lilith verdadera</span> y{" "}
        <span className="text-text">Lilith media</span>. Son cercanas, pero no idénticas.
      </>
    ),
    vraieLabel: "Verdadera (True / Osculating)",
    vraie:
      "Más \"nerviosa\": puede moverse más rápido, aportar matices, a veces más tajante en lo vivido. Útil si quieres una lectura fina.",
    moyenneLabel: "Media (Mean)",
    moyenne:
      "Más \"estable\": excelente para enseñar y para esquemas pedagógicos. Si dudas: empieza por la media.",
    conseil: (
      <>
        Consejo: en tu web, muestra la <span className="text-text">media</span> por defecto, y ofrece un selector &quot;verdadera&quot;.
      </>
    ),
  },
  mythologie: {
    title: "¿De dónde viene el mito de Lilith en astrología?",
    originLabel: "Orígenes del nombre",
    origin: (
      <>
        La palabra &quot;Lilith&quot; aparece en antiguas tradiciones del Próximo Oriente (con raíces ligadas a la noche / a los espíritus
        nocturnos según las culturas). En la astrología moderna, el término se retomó para nombrar la &quot;Luna Negra&quot;
        (un punto astronómico), pero no se trata de un planeta ni de un astro.
      </>
    ),
    bibleLabel: "La Biblia: cuidado con los atajos",
    bible: (
      <>
        El personaje de &quot;Lilith&quot; no se presenta claramente como un personaje bíblico en la Biblia canónica.
        Se encuentra sobre todo en la tradición judía posbíblica (comentarios, midrash, folclore).
        Algunas traducciones de Isaías 34:14 emplean a veces &quot;Lilith&quot;, pero según las versiones,
        puede traducirse de otra forma (criatura nocturna, búho, etc.).
      </>
    ),
    whyLabel: "Por qué es interesante (para el curso)",
    whyItems: [
      <>
        La figura mítica de Lilith sirve de <span className="text-text">espejo cultural</span>: deseo, transgresión,
        autonomía, rechazo, poder.
      </>,
      <>
        En astrología no se &quot;demuestra&quot; un mito: se usa como <span className="text-text">lenguaje simbólico</span>
        para enseñar dinámicas psicológicas.
      </>,
      <>
        Método pro: mantener la distinción entre <span className="text-text">astronomía</span> (punto orbital) y{" "}
        <span className="text-text">mitología</span> (relatos).
      </>,
    ],
    cards: [
      ["Mito", "Relato / figura cultural (deseo, rechazo, autonomía…)."],
      ["Astro", "Punto (apogeo lunar): zona sensible, no negociable, verdad íntima."],
      ["Lectura", "Signo = estilo • Casa = ámbito • Aspectos = detonantes / integración."],
    ],
  },
  symbolique: {
    title: "¿Qué simboliza Lilith en una carta natal?",
    themesLabel: "Temas",
    themes: [
      "El deseo crudo y la verdad íntima (lo que ya no \"reducimos\").",
      "La vergüenza, el rechazo, la sombra social (lo que fue juzgado/prohibido).",
      "El poder personal: recuperar el propio eje sin aplastar al otro.",
      "La frontera: lo que ya no negocio, ni siquiera \"con amabilidad\".",
    ],
    piegeLabel: "La trampa",
    piege: [
      "Aislarse / endurecerse: \"no necesito a nadie\".",
      "Provocar por defensa: poner a prueba al otro antes de que se vaya.",
      "Confundir verdad y violencia (decir la verdad ≠ herir).",
      "Repetir el rechazo: elegir lo que no está disponible.",
    ],
    memoLabel: "Frase memo",
    memo: "«Donde está Lilith, ya no quiero mendigar. Quiero ser verdadero.»",
  },
  methodo: {
    title: "¿Cómo interpretar Lilith en una carta astral?",
    steps: [
      <>
        <span className="text-text">1) Signo</span>: el estilo del deseo / de la verdad (cómo se expresa Lilith).
      </>,
      <>
        <span className="text-text">2) Casa</span>: la zona de vida donde se juega (dónde rechazas el compromiso).
      </>,
      <>
        <span className="text-text">3) Aspectos</span>: la forma en que la carta se activa (tensión / facilidad / obsesión / integración).
      </>,
      <>
        <span className="text-text">4) Dispositor</span> (regente del signo de Lilith): &quot;quién dirige la escena&quot;.
      </>,
      <>
        <span className="text-text">5) Nivel</span>: herida → defensa → conciencia → poder sereno.
      </>,
    ],
    levels: [
      ["Herida", "Me reniego para ser aceptado."],
      ["Defensa", "Me vuelvo duro / pongo a prueba / corto."],
      ["Integración", "Digo la verdad, pongo un límite, sigo siendo humano."],
    ],
  },
  signe: {
    title: "¿Qué significa Lilith en cada signo del zodíaco?",
    intro:
      "Aquí tienes una base de curso. En tu web podrás generar una página dinámica como tus signos.",
    items: [
      ["Aries", 'Verdad directa, rechazo de la sumisión. Sombra: impulsividad, "lo tomo o lo rompo".'],
      ["Tauro", "Deseo intenso de seguridad/placer. Sombra: fijación, celos, control por lo material."],
      ["Géminis", "Verdad mental, necesidad de decir. Sombra: doble discurso, agitación, provocación verbal."],
      ["Cáncer", "Verdad emocional, necesidad de protección. Sombra: fusión/retirada, pruebas afectivas."],
      ["Leo", "Verdad del corazón, orgullo. Sombra: drama, necesidad de ser elegido/adorado."],
      ["Virgo", "Verdad del discernimiento. Sombra: hipercontrol, crítica, pureza imposible."],
      ["Libra", "Verdad relacional. Sombra: dependencia, seducción, miedo a desagradar."],
      ["Escorpio", "Verdad de las profundidades. Sombra: posesión, secretos, poder, obsesión."],
      ["Sagitario", `Verdad del sentido. Sombra: dogmatismo, huida, "yo tengo razón".`],
      ["Capricornio", "Verdad de la dignidad/estructura. Sombra: frialdad, exigencia, dureza."],
      ["Acuario", "Verdad de libertad. Sombra: desapego, ruptura, superioridad."],
      ["Piscis", "Verdad mística. Sombra: confusión, salvamento, disolución de los límites."],
    ],
  },
  maison: {
    title: "Lilith en las 12 casas astrológicas: ¿dónde actúa?",
    items: [
      ["Casa I", "Imagen / identidad: me niego a ser definido por los demás."],
      ["Casa II", "Valor / dinero: ya no mendigo la seguridad."],
      ["Casa III", "Palabra: digo lo que siempre he callado."],
      ["Casa IV", "Familia: lealtades invisibles, necesidad de un refugio verdadero."],
      ["Casa V", "Amor / creación: deseo asumido, miedo a ser juzgado."],
      ["Casa VI", "Control / rutina: exigencia, relación con el cuerpo y con el servicio."],
      ["Casa VII", "Pareja: pruebas, miedo al abandono, verdad relacional."],
      ["Casa VIII", "Intimidad: fusión/poder, transformación, secretos."],
      ["Casa IX", "Creencias: verdad personal, rechazo de los dogmas."],
      ["Casa X", 'Estatus: dignidad, reputación, "ya no me vendo".'],
      ["Casa XI", "Grupo: pertenencia, diferencia, libertad."],
      ["Casa XII", "El inconsciente: exilio interior, compasión, límites por reconstruir."],
    ],
  },
  aspects: {
    title: "¿Cómo leer los aspectos de Lilith a los planetas?",
    items: [
      ["Conjunción", 'Tema central: intensifica y hace "inevitable" la temática.'],
      ["Oposición", "Proyección: el otro revela lo que aún no asumo."],
      ["Cuadratura", "Tensión: detonantes, crisis útiles, necesidad de integrar."],
      ["Trígono", "Fluidez: talento de verdad, pero riesgo de comodidad (sin trabajo consciente)."],
      ["Sextil", "Oportunidad: apertura por elección, aprendizaje progresivo."],
    ],
    tipLabel: "Consejo pro",
    tip: (
      <>
        Empieza por los aspectos al <span className="text-text">Sol</span>, la <span className="text-text">Luna</span>,{" "}
        <span className="text-text">Venus</span> y <span className="text-text">Marte</span>: son los que hablan
        más directamente de lo vivido (identidad, seguridad, deseo, relación, pulsión).
      </>
    ),
  },
  erreurs: {
    title: "¿Qué errores evitar con Lilith en astrología?",
    items: [
      "Hacer de Lilith \"el mal\": es un punto de verdad, no una condena.",
      "Reducirla a la sexualidad: habla sobre todo de deseo + límite + dignidad.",
      "Olvidar el dispositor: el regente del signo explica \"cómo se gestiona\".",
      "Interpretar sin la casa: sin contexto de vida, se cae en lo abstracto.",
      "Leer Lilith sola: funciona mejor con Luna / Venus / Marte / Plutón.",
    ],
  },
  exemples: {
    title: "Ejemplos concretos de interpretación de Lilith",
    items: [
      [
        "Lilith en Casa VII",
        "Relaciones como espejo: pruebas, miedo al abandono, necesidad de verdad. Trabajo: decir los límites pronto, no manipular por la retirada.",
      ],
      [
        "Lilith en conjunción con Venus",
        "Deseo y valores intensificados: atracciones fuertes, rechazo de lo tibio. Trabajo: distinguir amor y carencia, no confundir intensidad con compatibilidad.",
      ],
      [
        "Lilith en cuadratura con la Luna",
        'Conflicto necesidad/deseo: hipersensibilidad al rechazo. Trabajo: re-parentalización, seguridad interna, no "castigar" al otro por una herida antigua.',
      ],
      [
        "Lilith en trígono con el Sol",
        "Fuerza de verdad y carisma: se asume con más facilidad. Vigilancia: evitar la arrogancia moral, mantener el corazón abierto.",
      ],
    ],
  },
  footer: {
    col1Label: "Ir más lejos",
    col1Body: (
      <>
        Siguiente paso lógico: integrar Lilith con las <span className="text-text">casas</span> y los{" "}
        <span className="text-text">aspectos</span>, y luego compararla con la <span className="text-text">Luna</span> y{" "}
        <span className="text-text">Venus/Marte</span> para distinguir necesidad, deseo y límite.
      </>
    ),
    col1Aspects: "Aspectos",
    col1Maisons: "Casas",
    col1Planetes: "Planetas",
    col2Label: "Para recordar",
    col2Items: [
      "Lilith = punto sensible: deseo, verdad íntima, límite.",
      "Casa: dónde se juega • Signo: cómo • Aspectos: cuándo/con quién.",
      "Traducir \"intensidad\" en decisiones simples = integración.",
    ],
    col2ExerciseLabel: "Mini-ejercicio",
    col2Exercise: (
      <>
        Escribe una frase: <span className="text-text">&quot;Ya no mendigo …&quot;</span> y añade luego{" "}
        <span className="text-text">&quot;Elijo …&quot;</span> (la versión adulta).
      </>
    ),
    col3Label: "Navegación",
    col3Body: "Continúa tu curso con las páginas fundamentales:",
    col3Signes: "Signos",
    col3Planetes: "Planetas",
    col3Maisons: "Casas",
    col3Dignites: "Dignidades",
    col3SuggestionLabel: "Sugerencia",
    col3Suggestion: (
      <>
        Si quieres una lectura ultra clara: empieza por <span className="text-text">Lilith + Casa</span>,
        y añade luego <span className="text-text">un solo aspecto mayor</span>.
      </>
    ),
    copyright: "Curso de astrología • Lilith (Luna Negra)",
    topLabel: "↑ Arriba",
    mythologieLabel: "Mitología",
  },
  faqTitle: "Preguntas frecuentes sobre Lilith (la Luna Negra)",
  faq: [
    {
      q: "¿Lilith es un planeta en astrología?",
      a: (
        <>
          No. <strong>Lilith</strong> (la Luna Negra) no es un planeta ni un astro físico. Es un <strong>punto ficticio</strong> que corresponde al apogeo de la órbita de la <Link href="/planetes">Luna</Link> alrededor de la Tierra. Funciona como una referencia simbólica en la carta natal.
        </>
      ),
    },
    {
      q: "¿Cómo encontrar tu Lilith en tu carta natal?",
      a: (
        <>
          La mayoría de los programas de astrología (Astro.com, etc.) calculan la posición de <strong>Lilith media</strong> por defecto. Localiza su <Link href="/signes">signo</Link> y su <Link href="/maisons">casa</Link>, y observa luego sus aspectos a los planetas personales para una primera interpretación fiable.
        </>
      ),
    },
    {
      q: "¿Cuál es el significado de Lilith en la casa 7?",
      a: (
        <>
          <strong>Lilith en la casa VII</strong> sitúa la verdad cruda en el ámbito de las relaciones. Indica pruebas relacionales, un miedo al abandono y una necesidad profunda de verdad en la pareja. El trabajo consiste en poner los límites pronto y no manipular mediante la retirada.
        </>
      ),
    },
    {
      q: "¿Hay que usar la Lilith verdadera o la media?",
      a: (
        <>
          Para empezar, se recomienda la <strong>Lilith media</strong> (Mean): es más estable y más fácil de enseñar. La <strong>Lilith verdadera</strong> (True) aporta matices más finos pero puede ser más volátil. Las dos posiciones suelen estar cercanas en la <Link href="/#theme-natal">carta natal</Link>.
        </>
      ),
    },
  ],
  faqJsonLd: [
    {
      name: "¿Lilith es un planeta en astrología?",
      text: "No. Lilith (la Luna Negra) no es un planeta ni un astro físico. Es un punto ficticio que corresponde al apogeo de la órbita de la Luna alrededor de la Tierra. Funciona como una referencia simbólica en la carta natal.",
    },
    {
      name: "¿Cómo encontrar tu Lilith en tu carta natal?",
      text: "La mayoría de los programas de astrología (Astro.com, etc.) calculan la posición de Lilith media por defecto. Localiza su signo y su casa, y observa luego sus aspectos a los planetas personales para una primera interpretación fiable.",
    },
    {
      name: "¿Cuál es el significado de Lilith en la casa 7?",
      text: "Lilith en la casa VII sitúa la verdad cruda en el ámbito de las relaciones. Indica pruebas relacionales, un miedo al abandono y una necesidad profunda de verdad en la pareja. El trabajo consiste en poner los límites pronto y no manipular mediante la retirada.",
    },
    {
      name: "¿Hay que usar la Lilith verdadera o la media?",
      text: "Para empezar, se recomienda la Lilith media (Mean): es más estable y más fácil de enseñar. La Lilith verdadera (True) aporta matices más finos pero puede ser más volátil. Las dos posiciones suelen estar cercanas en la carta natal.",
    },
  ],
};

export const lilithContent: Record<SeoLocale, LilithContent> = { fr, en, es };
