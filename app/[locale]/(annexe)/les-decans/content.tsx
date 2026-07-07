import type { SeoLocale } from "@/lib/seo";

/* ====================================================================
   Les décans — contenu localisé (fr / en / es)
   Les clés logiques (signe.id, decan.numero, decan.planete, degres)
   sont identiques dans chaque langue ; seuls les textes sont traduits.
   La planète (decan.planete) reste en FR car elle sert de clé logique
   pour getPlanetColor() ; son libellé d'affichage est traduit via
   planetLabel.
   ==================================================================== */

export type Utilisation = { domaine: string; texte: string };

export type Decan = {
  numero: number;
  degres: string;
  planete: string; // clé logique FR (Mars, Soleil, Vénus, Mercure, Lune, Saturne, Jupiter)
  titre: string; // "Titre principal / Sous-titre"
  texte: string;
  facilites: string;
  difficultes: string;
};

export type Signe = {
  id: string; // anchor id constant (ex: "belier")
  nom: string;
  essence: string;
  decans: Decan[];
};

export type DecansContent = {
  meta: { title: string; description: string };
  jsonld: { headline: string; description: string };
  hero: { badge: string; title: string; description: string; heroImageAlt: string };
  defBox: {
    label: string;
    bodyLead: string;
    bodyLeadStrong: string;
    bodyAfterStrong: string;
    bodyZodiacLink: string;
    bodyTail: string;
  };
  appIntro: { lead: string; tail: string };
  histoireTitle: string;
  introduction: string[];
  matriceTitle: string;
  definition: string[];
  utilisationsTitle: string;
  utilisationsIntro: string;
  utilisations: Utilisation[];
  roueImageAlt: string;
  signesTitle: string;
  signesIntro: string;
  decanCard: { forcesLabel: string; defisLabel: string };
  planetLabel: Record<string, string>;
  faqTitle: string;
  faq: { q: string; a: { lead: string; link?: { href: string; label: string }; tail?: string } }[];
  faqJsonLd: { name: string; text: string }[];
  footer: { back: string };
  signes: Signe[];
};

/* ============================== FR ============================== */
const fr: DecansContent = {
  meta: {
    title: "Les 36 Décans : Nuances Cachées du Zodiaque",
    description:
      "Découvrez l'usage astrologique des 36 décans. Plongez dans les sous-influences planétaires de chaque signe pour affiner l'interprétation du thème natal.",
  },
  jsonld: {
    headline: "Les 36 Décans : Nuances Cachées du Zodiaque",
    description:
      "Découvrez l'usage astrologique des 36 décans. Plongez dans les sous-influences planétaires de chaque signe pour affiner l'interprétation du thème natal.",
  },
  hero: {
    badge: "Précision Astrologique",
    title: "Les 36 Décans : Nuances Cachées du Zodiaque",
    description:
      "Découvrez l'usage astrologique des 36 décans. Plongez dans les sous-influences planétaires de chaque signe pour affiner l'interprétation du thème natal.",
    heroImageAlt: "Le zodiaque de Denderah illustrant l'origine égyptienne des 36 décans",
  },
  defBox: {
    label: "Définition",
    bodyLead: "Un ",
    bodyLeadStrong: "décan en astrologie",
    bodyAfterStrong: " est une subdivision de chaque ",
    bodyZodiacLink: "signe du zodiaque",
    bodyTail:
      " en trois parties de 10°, soit 36 décans au total. Chaque décan est gouverné par une planète qui nuance l'expression du signe.",
  },
  appIntro: {
    lead:
      "apportent une précision souvent ignorée dans les horoscopes classiques. Pourquoi deux natifs du même signe peuvent-ils avoir des personnalités si différentes ? La réponse se trouve dans les décans. Découvrez ici les 36 décans du zodiaque, leurs planètes maîtresses et leur influence concrète sur votre thème.",
    tail: "Les décans astrologiques",
  },
  histoireTitle: "D'où viennent les décans en astrologie ?",
  introduction: [
    "L’origine des décans (parfois appelés faces ou décanates) est extrêmement ancienne. Dès 2100 ans avant J.-C., les prêtres et astronomes égyptiens utilisaient déjà 36 groupes d’étoiles pour mesurer le temps. Chaque décan apparaissait à l’aube du côté de l'ascendant pour une durée d'une dizaine de jours.",
    "L'année comptait alors 36 décans totalisant 360 jours, auxquels s'ajoutaient cinq jours épagomènes. À cette époque, ces étoiles n'étaient pas de simples marqueurs : elles étaient liées à des divinités protectrices et à de puissantes pratiques de magie et de guérison.",
    "Vers le 2e siècle avant J.-C., ce système égyptien a été absorbé par l'astrologie hellénistique. Le zodiaque des 12 signes a été mathématiquement divisé en trois parties égales de 10 degrés chacune. Cela nous donne notre matrice parfaite : 3 décans par signe, soit 36 décans pour l'ensemble de la roue zodiacale.",
  ],
  matriceTitle: "La Matrice Mathématique",
  definition: [
    "Aujourd’hui, les décans sont principalement utilisés pour apporter de la nuance au sein d’un même signe. Une planète en Bélier ne s'exprimera pas de la même façon à 2° (1er décan) qu'à 25° (3e décan).",
    "Chaque décan est associé à une planète gouvernante secondaire. Le système le plus fiable et le plus ancien est basé sur l'Ordre Chaldéen des planètes, de la plus lente à la plus rapide : Saturne, Jupiter, Mars, Soleil, Vénus, Mercure, et la Lune.",
    "Dans le calcul complexe des dignités essentielles (pour trouver l'Almuten d'un thème), une planète située dans son propre décan (ou 'face') bénéficie d'une dignité mineure, lui accordant 1 point de force.",
  ],
  utilisationsTitle: "L'Utilisation Technique des Décans",
  utilisationsIntro:
    "Les décans ne servent pas uniquement à la psychologie, ils sont des outils techniques de haute volée en astrologie traditionnelle et médicale.",
  utilisations: [
    {
      domaine: "L'Ascendant et la Morphologie",
      texte:
        "Dans l’étude de la Maison I, le décan où se trouve le degré de l'Ascendant donnera des détails cruciaux pour décrire l'apparence physique et la morphologie intime du natif.",
    },
    {
      domaine: "L'Astrologie Médicale (Décombitures)",
      texte:
        "Bien qu'il n'y ait pas de partie du corps stricte attribuée aux décans, l'astrologue médical s'en sert pour ajuster son diagnostic lors de l'étude du thème de la maladie (la décombiture).",
    },
    {
      domaine: "Le Calcul de la Durée (Alcocoden)",
      texte:
        "Dans les techniques médiévales prédictives, la position du donneur d'années (Alcocoden) en décan permet d'affiner l'espérance de vie et la vitalité à long terme.",
    },
    {
      domaine: "Les Profections Annuelles",
      texte:
        "Dans cette technique prédictive reine, on observe la position exacte du maître de l'année au sein de son décan pour colorer les événements des 12 mois à venir.",
    },
  ],
  roueImageAlt: "Roue astrologique affichant les 36 décans et leurs maîtres planétaires",
  signesTitle: "L'Encyclopédie des 36 Décans",
  signesIntro:
    "Voici l'analyse des 36 décans basée sur le système chaldéen, enrichie par les travaux de Manilius et les synthèses hermétiques de C.C. Zain.",
  decanCard: { forcesLabel: "Forces", defisLabel: "Défis" },
  planetLabel: {
    Mars: "Mars",
    Soleil: "Soleil",
    Vénus: "Vénus",
    Mercure: "Mercure",
    Lune: "Lune",
    Saturne: "Saturne",
    Jupiter: "Jupiter",
  },
  faqTitle: "Questions fréquentes sur les décans",
  faq: [
    {
      q: "Comment connaître son décan en astrologie ?",
      a: {
        lead: "Pour connaître votre décan, repérez votre date de naissance dans les degrés de votre ",
        link: { href: "/signes", label: "signe solaire" },
        tail:
          ". Le 1er décan couvre les 10 premiers degrés (0-10°), le 2e décan les degrés 10-20°, et le 3e décan les degrés 20-30°. Chaque décan est associé à une planète maîtresse qui nuance votre profil.",
      },
    },
    {
      q: "Combien y a-t-il de décans dans le zodiaque ?",
      a: {
        lead:
          "Il y a 36 décans au total dans le zodiaque : 3 décans par signe, pour les 12 signes. Ce système remonte à l'Egypte ancienne et a été intégré dans l'astrologie occidentale pour affiner l'interprétation de chaque signe.",
      },
    },
    {
      q: "Les décans changent-ils l'interprétation d'un signe ?",
      a: {
        lead: "Oui. Deux personnes du même ",
        link: { href: "/signes", label: "signe" },
        tail:
          " mais de décans différents auront des nuances distinctes. La planète maîtresse du décan colore l'expression du signe : un Bélier 1er décan (Mars) sera plus impulsif qu'un Bélier 3e décan (Jupiter) qui sera plus expansif et philosophe.",
      },
    },
    {
      q: "Les décans sont-ils utilisés dans les horoscopes ?",
      a: {
        lead:
          "Certains horoscopes utilisent les décans pour affiner les prévisions et différencier les natifs d'un même signe. En astrologie professionnelle, les décans servent surtout en thème natal pour préciser les degrés des ",
        link: { href: "/planetes", label: "planètes" },
        tail: " et dans l'étude des aspects exacts.",
      },
    },
  ],
  faqJsonLd: [
    {
      name: "Comment connaître son décan en astrologie ?",
      text:
        "Pour connaître votre décan, repérez votre date de naissance dans les degrés de votre signe solaire. Le 1er décan couvre les 10 premiers degrés (0-10°), le 2e décan les degrés 10-20°, et le 3e décan les degrés 20-30°. Chaque décan est associé à une planète maîtresse qui nuance votre profil.",
    },
    {
      name: "Combien y a-t-il de décans dans le zodiaque ?",
      text:
        "Il y a 36 décans au total dans le zodiaque : 3 décans par signe, pour les 12 signes. Ce système remonte à l'Egypte ancienne et a été intégré dans l'astrologie occidentale pour affiner l'interprétation de chaque signe.",
    },
    {
      name: "Les décans changent-ils l'interprétation d'un signe ?",
      text:
        "Oui. Deux personnes du même signe mais de décans différents auront des nuances distinctes. La planète maîtresse du décan colore l'expression du signe : un Bélier 1er décan (Mars) sera plus impulsif qu'un Bélier 3e décan (Jupiter) qui sera plus expansif et philosophe.",
    },
    {
      name: "Les décans sont-ils utilisés dans les horoscopes ?",
      text:
        "Certains horoscopes utilisent les décans pour affiner les prévisions et différencier les natifs d'un même signe. En astrologie professionnelle, les décans servent surtout en thème natal pour préciser les degrés des planètes et dans l'étude des aspects exacts.",
    },
  ],
  footer: { back: "Retour à l'encyclopédie" },
  signes: [
    {
      id: "belier",
      nom: "Bélier",
      essence: "L’envie viscérale de démarrer, d’entreprendre et de conquérir.",
      decans: [
        { numero: 1, degres: "0° à 10°", planete: "Mars", titre: "Le Pionnier / L'Activité", texte: "L’énergie brute. L’impulsion est franche, c’est le guerrier éclaireur, celui qui ouvre la voie sans demander la permission. Enthousiasme, ardeur, parfois vengeance.", facilites: "Capacité de démarrage phénoménale. Idéal pour lancer des projets ou briser des tabous.", difficultes: "Apprendre la patience et canaliser l'irritabilité. Sans cible, c'est de la pure agitation." },
        { numero: 2, degres: "10° à 20°", planete: "Soleil", titre: "Le Leader / L'Exaltation", texte: "L’influence solaire apporte une dimension sociale et noble. Ce n’est plus seulement agir, c’est personnifier l'action. Amour du pouvoir, magnanimité, commandement.", facilites: "Charisme naturel et grande loyauté. Il sait inspirer les foules.", difficultes: "L’orgueil. Le besoin viscéral de reconnaissance." },
        { numero: 3, degres: "20° à 30°", planete: "Vénus", titre: "L’Artiste Passionné / La Propagande", texte: "L’impulsion est adoucie par une recherche de beauté. Les énergies sont orientées vers un idéal, une philosophie ou l'amour passionnel.", facilites: "Grande créativité et idéalisme. Brûler pour une cause avec élégance.", difficultes: "L’instabilité émotionnelle. Le conflit entre action martienne et douceur vénusienne." },
      ],
    },
    {
      id: "taureau",
      nom: "Taureau",
      essence: "Agit paisiblement, consolide, et ancre la matière avec endurance.",
      decans: [
        { numero: 1, degres: "0° à 10°", planete: "Mercure", titre: "L'Esprit Pratique / La Détermination", texte: "L'intelligence appliquée à la matière. Le constructeur qui réfléchit avant d’agir. Souci des richesses, parfois au point d'en être timide ou secret.", facilites: "Analyse concrète, habileté commerciale et intuition matérielle.", difficultes: "Sur-intellectualiser ses besoins ou céder à la peur de manquer." },
        { numero: 2, degres: "10° à 20°", planete: "Lune", titre: "Le Protecteur / La Lutte", texte: "Le sommet du lien avec la nature et la famille. Besoin d’un foyer sécurisant. Fixité dans les objectifs et grand potentiel artistique.", facilites: "Grande empathie, talent pour créer la paix et succès politique potentiel.", difficultes: "Attachement excessif au passé et obsession du confort matériel." },
        { numero: 3, degres: "20° à 30°", planete: "Saturne", titre: "Le Bâtisseur / La Maîtrise", texte: "La structure et l’endurance absolue. C'est le travailleur acharné. Confère de remarquables aptitudes initiatiques s'il triomphe des limites physiques.", facilites: "Autorité naturelle, projets à très long terme, immense ambition.", difficultes: "La solitude engendrée par une trop grande exigence envers soi-même." },
      ],
    },
    {
      id: "gemeaux",
      nom: "Gémeaux",
      essence: "Le mouvement perpétuel, la circulation de l'information et des idées.",
      decans: [
        { numero: 1, degres: "0° à 10°", planete: "Jupiter", titre: "L'Explorateur / L'Intuition", texte: "La soif de connaissances vastes. Assimilation facile, c'est le décan des géants intellectuels qui cherchent le 'pourquoi' de toute chose.", facilites: "Aisance sociale, optimisme, capacité à voir des opportunités partout.", difficultes: "Tendance à l’exagération et à l'éparpillement." },
        { numero: 2, degres: "10° à 20°", planete: "Mars", titre: "Le Jouteur / La Fidélité", texte: "Le feu rencontre l’air. Personnalité dynamique, prompte à la répartie. La communication est une arme, mais guidée par une forte conscience et fidélité à l'idéal.", facilites: "Esprit combatif, exécution rapide, talent pour convaincre.", difficultes: "Impatience verbale et ironie blessante." },
        { numero: 3, degres: "20° à 30°", planete: "Soleil", titre: "Le Luminaire / La Raison", texte: "Le Soleil illumine le mental. Ce décan cherche à briller par ses idées et son réseau. Intelligence aiguë et grande clarté conceptuelle.", facilites: "Clarté d’expression, rayonnement intellectuel, sens de l’organisation.", difficultes: "Besoin de trop briller par l’esprit pour contenter un ego insécurisé." },
      ],
    },
    {
      id: "cancer",
      nom: "Cancer",
      essence: "L’émotion pure, la mémoire karmique et le besoin viscéral de protection.",
      decans: [
        { numero: 1, degres: "0° à 10°", planete: "Vénus", titre: "L'Âme Sensible / Les Caprices", texte: "Vénus adoucit la nature lunaire. Amour profond du foyer, grande sensibilité dramatique et poétique. Intrigues amoureuses fréquentes.", facilites: "Sens de l’accueil réconfortant, dévouement absolu envers les siens.", difficultes: "Dépendance affective marquée et difficulté chronique à dire 'non'." },
        { numero: 2, degres: "10° à 20°", planete: "Mercure", titre: "Le Conteur / La Révélation", texte: "Une vivacité d’esprit qui analyse les émotions. C’est le décan des écrivains et des médiums. Énergie et ressources insoupçonnées.", facilites: "Capacité remarquable à mettre des mots sur les ressentis profonds.", difficultes: "Nervosité intérieure. Nécessité de séparer le mental du tumulte émotionnel." },
        { numero: 3, degres: "20° à 30°", planete: "Lune", titre: "Le Rêveur / La Recherche", texte: "La Lune dans son domicile absolu. Mystère, imagination débordante, amour de la nature et de ses secrets enfouis.", facilites: "Intuition frôlant la voyance, mémoire émotionnelle hors du commun.", difficultes: "Humeur extrêmement changeante (lunatique) et insatisfaction latente." },
      ],
    },
    {
      id: "lion",
      nom: "Lion",
      essence: "L'énergie du rayonnement, la fierté d'être et la force créatrice.",
      decans: [
        { numero: 1, degres: "0° à 10°", planete: "Saturne", titre: "Le Souverain / Le Commandement", texte: "La chaleur du Lion structurée par Saturne. Ambition sérieuse, sens des responsabilités. C'est le bâtisseur d'empire qui commande avec fougue.", facilites: "Volonté inébranlable et persévérance supérieure à la moyenne.", difficultes: "Austérité apparente, peur de l’échec cachée sous le besoin d’admiration." },
        { numero: 2, degres: "10° à 20°", planete: "Jupiter", titre: "Le Magnanime / La Réforme", texte: "Le Lion à son apogée sociale. Enthousiasme, honneurs. Courage des opinions et aptitude à convaincre pour réformer la société.", facilites: "Charisme irrésistible, générosité, capacité d'influence massive.", difficultes: "Excès de confiance, orgueil et théâtralité excessive." },
        { numero: 3, degres: "20° à 30°", planete: "Mars", titre: "Le Champion / L'Ambition", texte: "Le feu solaire s’unit au feu guerrier. Il n’attend pas la couronne, il la conquiert. Amour du pouvoir combiné au talent de meneur d'hommes.", facilites: "Énergie inépuisable pour défendre ses proches ou ses idéaux.", difficultes: "Susceptibilité extrême. Ne supporte aucune forme de résistance." },
      ],
    },
    {
      id: "vierge",
      nom: "Vierge",
      essence: "L’analyse méthodique, la purification et le dévouement absolu au service.",
      decans: [
        { numero: 1, degres: "0° à 10°", planete: "Soleil", titre: "Le Perfectionniste / L'Achèvement", texte: "Volonté de perfectionner son environnement. La Vierge qui cherche à briller par la qualité irréprochable de son travail. Esprit en perpétuelle activité.", facilites: "Sens du détail hors pair, loyauté totale, assimilation parfaite.", difficultes: "Autocritique paralysante. Le besoin d'être indispensable fatigue son entourage." },
        { numero: 2, degres: "10° à 20°", planete: "Vénus", titre: "L'Artisan / L'Expérience", texte: "Le charme et la diplomatie s'allient à la méthode. Goût pour la beauté, le soin. Aptitudes à entreprendre des travaux expérimentaux gigantesques.", facilites: "Diplomatie naturelle, talent pour harmoniser le quotidien.", difficultes: "Pudeur excessive, difficulté à exprimer ses vulnérabilités." },
        { numero: 3, degres: "20° à 30°", planete: "Mercure", titre: "L'Expert / La Renonciation", texte: "Mercure en exaltation et domicile. Radar intellectuel absolu. Ce décan prédispose au travail acharné pour autrui, parfois jusqu'au sacrifice.", facilites: "Logique mathématique, analyse fulgurante, expertise technique.", difficultes: "Anxiété chronique, nervosité et tendance hypocondriaque." },
      ],
    },
    {
      id: "balance",
      nom: "Balance",
      essence: "La quête d'équilibre, l’harmonie sociale et l'esthétisme de la relation.",
      decans: [
        { numero: 1, degres: "0° à 10°", planete: "Lune", titre: "Le Conciliateur / La Politique", texte: "Réceptivité immense aux ambiances. Besoin viscéral de paix. Énergie créatrice dans l'association humaine. Ne supporte pas la solitude.", facilites: "Charme désarmant, douceur, grande intelligence sociale.", difficultes: "Humeur fluctuante, incapacité à trancher par peur de déplaire." },
        { numero: 2, degres: "10° à 20°", planete: "Saturne", titre: "L'Arbitre / L'Indépendance", texte: "Saturne (exalté ici) apporte une intégrité de fer. C'est la Balance qui défend la Loi. Révolte contre la contrainte et militantisme.", facilites: "Sagesse d'arbitrage, responsabilité, fidélité aux principes.", difficultes: "Froideur émotionnelle et niveau d'exigence invivable en couple." },
        { numero: 3, degres: "20° à 30°", planete: "Jupiter", titre: "Le Rassembleur / L'Expiation", texte: "Décan extraverti, mondain et optimiste. Goût pour les plaisirs. Voisinage astrologique du Scorpion qui demande parfois de lourds sacrifices.", facilites: "Générosité, talent d'organisateur, succès littéraire ou mondain.", difficultes: "Snobisme, dépenses luxueuses, superficialité relationnelle." },
      ],
    },
    {
      id: "scorpion",
      nom: "Scorpion",
      essence: "L’énergie intérieure brute, la transformation, la mort et la régénération.",
      decans: [
        { numero: 1, degres: "0° à 10°", planete: "Mars", titre: "Le Survivant / L'Abondance", texte: "Mars en domicile nocturne. Énergie brute, instinctive. Impulsions sexuelles fortes et magnétisme vital offrant des dons de guérison.", facilites: "Capacité inouïe à surmonter les traumatismes. Force de frappe redoutable.", difficultes: "Agressivité défensive, paranoïa et rancune tenace." },
        { numero: 2, degres: "10° à 20°", planete: "Soleil", titre: "Le Stratège / La Responsabilité", texte: "Le Soleil éclaire les abysses. Présence intimidante, grand besoin de contrôle. Appelé à sacrifier la partie animale pour s'élever.", facilites: "Charisme silencieux, loyauté absolue, pouvoir d'attraction mafieux.", difficultes: "Orgueil occulte, soif de pouvoir dévorante et manipulatrice." },
        { numero: 3, degres: "20° à 30°", planete: "Vénus", titre: "L'Alchimiste / Le Talent", texte: "Romantisme noir et passion dévastatrice. Émotions extrêmes. Si la pulsion est sublimée, elle mène aux sommets du talent artistique et spirituel.", facilites: "Immense capacité d'aimer, esthétisme profond, sublimation.", difficultes: "Jalousie maladive, autodestruction par peur de l'abandon." },
      ],
    },
    {
      id: "sagittaire",
      nom: "Sagittaire",
      essence: "L’expansion spatiale et spirituelle, la quête de sens et l'enthousiasme.",
      decans: [
        { numero: 1, degres: "0° à 10°", planete: "Mercure", titre: "Le Chercheur / La Piété", texte: "L'étudiant éternel. Curiosité, langues, transmission. Porte à la conscience cosmique et à un amour inconditionnel du vivant.", facilites: "Agilité intellectuelle, talent d'orateur et ouverture d'esprit.", difficultes: "Éparpillement chronique, parole plus rapide que la pensée." },
        { numero: 2, degres: "10° à 20°", planete: "Lune", titre: "Le Nomade / L'Exploration", texte: "Dimension instinctive. Instinct migrateur et pionnier. Voyage sans cesse (physiquement ou mentalement) pour trouver son foyer cosmique.", facilites: "Intuition philosophique, adaptabilité culturelle totale.", difficultes: "Fuite en avant dès que le quotidien devient lourd ou routinier." },
        { numero: 3, degres: "20° à 30°", planete: "Saturne", titre: "Le Sage / L'Illumination", texte: "Saturne stabilise la flamme. Sagesse, loi, dogme. Le plus haut état de conscience s'il transmute son énergie animale en vérité durable.", facilites: "Persévérance rare, autorité morale, talent d'enseignant supérieur.", difficultes: "Sévérité, dogmatisme et complexe de supériorité spirituelle." },
      ],
    },
    {
      id: "capricorne",
      nom: "Capricorne",
      essence: "L’ambition verticale, la structure du temps et l'accomplissement social.",
      decans: [
        { numero: 1, degres: "0° à 10°", planete: "Jupiter", titre: "Le PDG / L'Organisation", texte: "Vision large couplée au pragmatisme. Précurseur de systèmes. Il sait saisir la chance pour gravir la montagne sociale.", facilites: "Sens aiguisé des affaires, organisation politique ou corporative.", difficultes: "Opportunisme froid, insatisfaction malgré les victoires matérielles." },
        { numero: 2, degres: "10° à 20°", planete: "Mars", titre: "Le Forçat / Le Martyre", texte: "Mars en exaltation. Bourreau de travail infatigable. Tire parti de toute ambiance et peut se sacrifier pour l'évolution d'une œuvre.", facilites: "Endurance physique et résilience mentale littéralement surhumaines.", difficultes: "Dureté extrême envers lui-même, risque majeur de burn-out." },
        { numero: 3, degres: "20° à 30°", planete: "Saturne", titre: "L'Ermite / L'Idéalisme", texte: "Saturne en double dignité. Sobriété, intégrité, patience absolue. Aptitude à concrétiser l'idéal par un labeur solitaire intense.", facilites: "Fiabilité infaillible, sagesse qui s'embellit avec la vieillesse.", difficultes: "Pessimisme, froideur et isolement du monde des plaisirs." },
      ],
    },
    {
      id: "verseau",
      nom: "Verseau",
      essence: "L’innovation radicale, la fraternité humaine et la liberté intellectuelle.",
      decans: [
        { numero: 1, degres: "0° à 10°", planete: "Vénus", titre: "Le Réformateur / L'Originalité", texte: "Besoin de plaire tout en restant indépendant. Amitiés amoureuses. Inventivité folle pour rendre la société plus belle et libre.", facilites: "Tolérance totale, charme hors-norme, vision esthétique d'avant-garde.", difficultes: "Déchirement permanent entre besoin d'attachement et soif de liberté." },
        { numero: 2, degres: "10° à 20°", planete: "Mercure", titre: "L'Inventeur / L'Inspiration", texte: "Agilité mentale décuplée. L'intellectuel en avance sur son temps. Ressources inépuisables et informations 'téléchargées' de l'invisible.", facilites: "Génie technologique, solutions foudroyantes face aux impasses.", difficultes: "Froideur cynique, nervosité cérébrale, déconnexion du corps." },
        { numero: 3, degres: "20° à 30°", planete: "Lune", titre: "L'Humaniste / La Répression", texte: "Émotion injectée dans la rébellion. S'investit corps et âme pour le collectif. Répression des désirs charnels au profit de la 'cause'.", facilites: "Dévouement écologique ou social sincère, imagination utopiste.", difficultes: "Humeur erratique, instabilité et refus du bonheur individuel." },
      ],
    },
    {
      id: "poissons",
      nom: "Poissons",
      essence: "La dissolution de l'ego, l'océan mystique et l'empathie universelle.",
      decans: [
        { numero: 1, degres: "0° à 10°", planete: "Saturne", titre: "L'Initié / La Vérité", texte: "Sagesse silencieuse. Saturne structure le flou des Poissons. Mysticisme, voyance latente, et compréhension ésotérique des phénomènes.", facilites: "Concentration méditative profonde, intégrité spirituelle.", difficultes: "Mélancolie, phobies, repli autistique pour se protéger du monde." },
        { numero: 2, degres: "10° à 20°", planete: "Jupiter", titre: "Le Guérisseur / Le Sacrifice", texte: "Jupiter en domicile. Bienveillance infinie, foi inébranlable. Mission de soulager les maux physiques et moraux d'autrui.", facilites: "Optimisme salvateur, dons de soin, canalisation spirituelle.", difficultes: "Aucune frontière psychique : syndrome du sauveur/martyr épuisant." },
        { numero: 3, degres: "20° à 30°", planete: "Mars", titre: "L'Engagé / Les Vicissitudes", texte: "Mars active le rêveur. Il incarne ses visions avec passion. Multiplicité des carrières, adaptabilité miraculeuse à toutes les vicissitudes.", facilites: "Créativité agissante, force insoupçonnable sous l'apparente douceur.", difficultes: "Tempêtes émotionnelles, chaos existentiel et autosabotage." },
      ],
    },
  ],
};

/* ============================== EN ============================== */
const en: DecansContent = {
  meta: {
    title: "The 36 Decans: Hidden Nuances of the Zodiac",
    description:
      "Discover the astrological use of the 36 decans. Dive into the planetary sub-influences of each sign to refine the interpretation of the natal chart.",
  },
  jsonld: {
    headline: "The 36 Decans: Hidden Nuances of the Zodiac",
    description:
      "Discover the astrological use of the 36 decans. Dive into the planetary sub-influences of each sign to refine the interpretation of the natal chart.",
  },
  hero: {
    badge: "Astrological Precision",
    title: "The 36 Decans: Hidden Nuances of the Zodiac",
    description:
      "Discover the astrological use of the 36 decans. Dive into the planetary sub-influences of each sign to refine the interpretation of the natal chart.",
    heroImageAlt: "The Dendera zodiac illustrating the Egyptian origin of the 36 decans",
  },
  defBox: {
    label: "Definition",
    bodyLead: "A ",
    bodyLeadStrong: "decan in astrology",
    bodyAfterStrong: " is a subdivision of each ",
    bodyZodiacLink: "zodiac sign",
    bodyTail:
      " into three parts of 10°, making 36 decans in total. Each decan is ruled by a planet that nuances the expression of the sign.",
  },
  appIntro: {
    lead:
      "bring a precision often ignored in classic horoscopes. Why can two natives of the same sign have such different personalities? The answer lies in the decans. Discover here the 36 decans of the zodiac, their ruling planets and their concrete influence on your chart.",
    tail: "Astrological decans",
  },
  histoireTitle: "Where do the decans come from in astrology?",
  introduction: [
    "The origin of the decans (sometimes called faces or decanates) is extremely ancient. As early as 2100 BC, Egyptian priests and astronomers were already using 36 groups of stars to measure time. Each decan rose at dawn on the side of the ascendant for a period of about ten days.",
    "The year then counted 36 decans totalling 360 days, to which five epagomenal days were added. At that time, these stars were not mere markers: they were linked to protective deities and to powerful practices of magic and healing.",
    "Around the 2nd century BC, this Egyptian system was absorbed by Hellenistic astrology. The zodiac of 12 signs was mathematically divided into three equal parts of 10 degrees each. This gives us our perfect matrix: 3 decans per sign, that is 36 decans for the whole zodiacal wheel.",
  ],
  matriceTitle: "The Mathematical Matrix",
  definition: [
    "Today, the decans are mainly used to bring nuance within a single sign. A planet in Aries will not express itself in the same way at 2° (1st decan) as at 25° (3rd decan).",
    "Each decan is associated with a secondary ruling planet. The most reliable and oldest system is based on the Chaldean Order of the planets, from the slowest to the fastest: Saturn, Jupiter, Mars, the Sun, Venus, Mercury, and the Moon.",
    "In the complex calculation of essential dignities (to find the Almuten of a chart), a planet located in its own decan (or 'face') gains a minor dignity, granting it 1 point of strength.",
  ],
  utilisationsTitle: "The Technical Use of the Decans",
  utilisationsIntro:
    "The decans are not only used in psychology; they are high-level technical tools in traditional and medical astrology.",
  utilisations: [
    {
      domaine: "The Ascendant and Morphology",
      texte:
        "In the study of House I, the decan in which the degree of the Ascendant falls provides crucial details to describe the physical appearance and the intimate morphology of the native.",
    },
    {
      domaine: "Medical Astrology (Decumbitures)",
      texte:
        "Although no strict part of the body is assigned to the decans, the medical astrologer uses them to fine-tune their diagnosis when studying the chart of the illness (the decumbiture).",
    },
    {
      domaine: "Calculating Lifespan (Alcocoden)",
      texte:
        "In medieval predictive techniques, the position of the giver of years (Alcocoden) in a decan helps to refine life expectancy and long-term vitality.",
    },
    {
      domaine: "Annual Profections",
      texte:
        "In this leading predictive technique, you observe the exact position of the lord of the year within its decan to colour the events of the 12 months ahead.",
    },
  ],
  roueImageAlt: "Astrological wheel displaying the 36 decans and their planetary rulers",
  signesTitle: "The Encyclopedia of the 36 Decans",
  signesIntro:
    "Here is the analysis of the 36 decans based on the Chaldean system, enriched by the work of Manilius and the hermetic syntheses of C.C. Zain.",
  decanCard: { forcesLabel: "Strengths", defisLabel: "Challenges" },
  planetLabel: {
    Mars: "Mars",
    Soleil: "Sun",
    Vénus: "Venus",
    Mercure: "Mercury",
    Lune: "Moon",
    Saturne: "Saturn",
    Jupiter: "Jupiter",
  },
  faqTitle: "Frequently asked questions about the decans",
  faq: [
    {
      q: "How do you find your decan in astrology?",
      a: {
        lead: "To find your decan, locate your birth date within the degrees of your ",
        link: { href: "/signes", label: "solar sign" },
        tail:
          ". The 1st decan covers the first 10 degrees (0-10°), the 2nd decan degrees 10-20°, and the 3rd decan degrees 20-30°. Each decan is associated with a ruling planet that nuances your profile.",
      },
    },
    {
      q: "How many decans are there in the zodiac?",
      a: {
        lead:
          "There are 36 decans in total in the zodiac: 3 decans per sign, for the 12 signs. This system goes back to ancient Egypt and was integrated into Western astrology to refine the interpretation of each sign.",
      },
    },
    {
      q: "Do the decans change the interpretation of a sign?",
      a: {
        lead: "Yes. Two people of the same ",
        link: { href: "/signes", label: "sign" },
        tail:
          " but of different decans will have distinct nuances. The ruling planet of the decan colours the expression of the sign: an Aries of the 1st decan (Mars) will be more impulsive than an Aries of the 3rd decan (Jupiter), who will be more expansive and philosophical.",
      },
    },
    {
      q: "Are the decans used in horoscopes?",
      a: {
        lead:
          "Some horoscopes use the decans to refine forecasts and differentiate natives of the same sign. In professional astrology, the decans are mainly used in the natal chart to specify the degrees of the ",
        link: { href: "/planetes", label: "planets" },
        tail: " and in the study of exact aspects.",
      },
    },
  ],
  faqJsonLd: [
    {
      name: "How do you find your decan in astrology?",
      text:
        "To find your decan, locate your birth date within the degrees of your solar sign. The 1st decan covers the first 10 degrees (0-10°), the 2nd decan degrees 10-20°, and the 3rd decan degrees 20-30°. Each decan is associated with a ruling planet that nuances your profile.",
    },
    {
      name: "How many decans are there in the zodiac?",
      text:
        "There are 36 decans in total in the zodiac: 3 decans per sign, for the 12 signs. This system goes back to ancient Egypt and was integrated into Western astrology to refine the interpretation of each sign.",
    },
    {
      name: "Do the decans change the interpretation of a sign?",
      text:
        "Yes. Two people of the same sign but of different decans will have distinct nuances. The ruling planet of the decan colours the expression of the sign: an Aries of the 1st decan (Mars) will be more impulsive than an Aries of the 3rd decan (Jupiter), who will be more expansive and philosophical.",
    },
    {
      name: "Are the decans used in horoscopes?",
      text:
        "Some horoscopes use the decans to refine forecasts and differentiate natives of the same sign. In professional astrology, the decans are mainly used in the natal chart to specify the degrees of the planets and in the study of exact aspects.",
    },
  ],
  footer: { back: "Back to the encyclopedia" },
  signes: [
    {
      id: "belier",
      nom: "Aries",
      essence: "The visceral urge to begin, to undertake and to conquer.",
      decans: [
        { numero: 1, degres: "0° à 10°", planete: "Mars", titre: "The Pioneer / Activity", texte: "Raw energy. The impulse is forthright; this is the scout-warrior, the one who clears the path without asking permission. Enthusiasm, ardour, sometimes vengeance.", facilites: "A phenomenal capacity to get started. Ideal for launching projects or breaking taboos.", difficultes: "Learning patience and channelling irritability. Without a target, it is pure agitation." },
        { numero: 2, degres: "10° à 20°", planete: "Soleil", titre: "The Leader / Exaltation", texte: "The solar influence brings a social and noble dimension. It is no longer only about acting, but about embodying action. Love of power, magnanimity, command.", facilites: "Natural charisma and great loyalty. Able to inspire crowds.", difficultes: "Pride. The visceral need for recognition." },
        { numero: 3, degres: "20° à 30°", planete: "Vénus", titre: "The Passionate Artist / Propaganda", texte: "The impulse is softened by a search for beauty. The energies are directed toward an ideal, a philosophy or passionate love.", facilites: "Great creativity and idealism. Burning for a cause with elegance.", difficultes: "Emotional instability. The conflict between Martian action and Venusian gentleness." },
      ],
    },
    {
      id: "taureau",
      nom: "Taurus",
      essence: "Acts calmly, consolidates, and anchors matter with endurance.",
      decans: [
        { numero: 1, degres: "0° à 10°", planete: "Mercure", titre: "The Practical Mind / Determination", texte: "Intelligence applied to matter. The builder who thinks before acting. A concern for wealth, sometimes to the point of being shy or secretive about it.", facilites: "Concrete analysis, commercial skill and material intuition.", difficultes: "Over-intellectualising one's needs or giving in to the fear of lack." },
        { numero: 2, degres: "10° à 20°", planete: "Lune", titre: "The Protector / The Struggle", texte: "The peak of the bond with nature and family. A need for a secure home. Fixity in goals and great artistic potential.", facilites: "Great empathy, a talent for creating peace and potential political success.", difficultes: "Excessive attachment to the past and an obsession with material comfort." },
        { numero: 3, degres: "20° à 30°", planete: "Saturne", titre: "The Builder / Mastery", texte: "Structure and absolute endurance. This is the relentless worker. It grants remarkable initiatory aptitudes if it overcomes physical limits.", facilites: "Natural authority, very long-term projects, immense ambition.", difficultes: "The loneliness brought on by too high a demand on oneself." },
      ],
    },
    {
      id: "gemeaux",
      nom: "Gemini",
      essence: "Perpetual movement, the circulation of information and ideas.",
      decans: [
        { numero: 1, degres: "0° à 10°", planete: "Jupiter", titre: "The Explorer / Intuition", texte: "A thirst for vast knowledge. Easy assimilation; this is the decan of intellectual giants who seek the 'why' of everything.", facilites: "Social ease, optimism, the ability to see opportunities everywhere.", difficultes: "A tendency to exaggerate and to scatter oneself." },
        { numero: 2, degres: "10° à 20°", planete: "Mars", titre: "The Jouster / Loyalty", texte: "Fire meets air. A dynamic personality, quick with repartee. Communication is a weapon, but guided by a strong conscience and fidelity to the ideal.", facilites: "A combative spirit, fast execution, a talent for persuasion.", difficultes: "Verbal impatience and wounding irony." },
        { numero: 3, degres: "20° à 30°", planete: "Soleil", titre: "The Luminary / Reason", texte: "The Sun illuminates the mind. This decan seeks to shine through its ideas and its network. Sharp intelligence and great conceptual clarity.", facilites: "Clarity of expression, intellectual radiance, a sense of organisation.", difficultes: "A need to shine too much through the mind to satisfy an insecure ego." },
      ],
    },
    {
      id: "cancer",
      nom: "Cancer",
      essence: "Pure emotion, karmic memory and the visceral need for protection.",
      decans: [
        { numero: 1, degres: "0° à 10°", planete: "Vénus", titre: "The Sensitive Soul / Whims", texte: "Venus softens the lunar nature. A deep love of the home, great dramatic and poetic sensitivity. Frequent romantic intrigues.", facilites: "A gift for comforting hospitality, absolute devotion to one's loved ones.", difficultes: "Marked emotional dependence and a chronic difficulty saying 'no'." },
        { numero: 2, degres: "10° à 20°", planete: "Mercure", titre: "The Storyteller / Revelation", texte: "A liveliness of mind that analyses emotions. This is the decan of writers and mediums. Unsuspected energy and resources.", facilites: "A remarkable ability to put words to deep feelings.", difficultes: "Inner nervousness. The need to separate the mind from emotional turmoil." },
        { numero: 3, degres: "20° à 30°", planete: "Lune", titre: "The Dreamer / The Quest", texte: "The Moon in its absolute home. Mystery, overflowing imagination, a love of nature and its buried secrets.", facilites: "Intuition bordering on clairvoyance, an extraordinary emotional memory.", difficultes: "Extremely changeable moods (moody) and a latent dissatisfaction." },
      ],
    },
    {
      id: "lion",
      nom: "Leo",
      essence: "The energy of radiance, the pride of being and creative force.",
      decans: [
        { numero: 1, degres: "0° à 10°", planete: "Saturne", titre: "The Sovereign / Command", texte: "The warmth of Leo structured by Saturn. Serious ambition, a sense of responsibility. This is the empire-builder who commands with fervour.", facilites: "Unshakeable will and above-average perseverance.", difficultes: "Apparent austerity, a fear of failure hidden beneath the need for admiration." },
        { numero: 2, degres: "10° à 20°", planete: "Jupiter", titre: "The Magnanimous / Reform", texte: "Leo at its social peak. Enthusiasm, honours. The courage of one's opinions and the ability to persuade in order to reform society.", facilites: "Irresistible charisma, generosity, a capacity for massive influence.", difficultes: "Overconfidence, pride and excessive theatricality." },
        { numero: 3, degres: "20° à 30°", planete: "Mars", titre: "The Champion / Ambition", texte: "Solar fire unites with the fire of the warrior. He does not wait for the crown, he conquers it. Love of power combined with a talent for leading people.", facilites: "Inexhaustible energy to defend his loved ones or his ideals.", difficultes: "Extreme touchiness. Tolerates no form of resistance." },
      ],
    },
    {
      id: "vierge",
      nom: "Virgo",
      essence: "Methodical analysis, purification and absolute devotion to service.",
      decans: [
        { numero: 1, degres: "0° à 10°", planete: "Soleil", titre: "The Perfectionist / Completion", texte: "A will to perfect one's environment. The Virgo who seeks to shine through the impeccable quality of their work. A mind in perpetual activity.", facilites: "An unparalleled eye for detail, total loyalty, perfect assimilation.", difficultes: "Paralysing self-criticism. The need to be indispensable wears out those around them." },
        { numero: 2, degres: "10° à 20°", planete: "Vénus", titre: "The Artisan / Experience", texte: "Charm and diplomacy ally with method. A taste for beauty and for care. Aptitudes for undertaking gigantic experimental work.", facilites: "Natural diplomacy, a talent for harmonising daily life.", difficultes: "Excessive modesty, difficulty expressing one's vulnerabilities." },
        { numero: 3, degres: "20° à 30°", planete: "Mercure", titre: "The Expert / Renunciation", texte: "Mercury in exaltation and domicile. An absolute intellectual radar. This decan predisposes to relentless work for others, sometimes to the point of sacrifice.", facilites: "Mathematical logic, lightning analysis, technical expertise.", difficultes: "Chronic anxiety, nervousness and a hypochondriac tendency." },
      ],
    },
    {
      id: "balance",
      nom: "Libra",
      essence: "The quest for balance, social harmony and the aesthetics of relationship.",
      decans: [
        { numero: 1, degres: "0° à 10°", planete: "Lune", titre: "The Conciliator / Politics", texte: "An immense receptivity to atmospheres. A visceral need for peace. Creative energy in human association. Cannot bear solitude.", facilites: "Disarming charm, gentleness, great social intelligence.", difficultes: "Fluctuating moods, an inability to decide out of fear of displeasing." },
        { numero: 2, degres: "10° à 20°", planete: "Saturne", titre: "The Arbiter / Independence", texte: "Saturn (exalted here) brings an iron integrity. This is the Libra who defends the Law. Revolt against constraint and activism.", facilites: "The wisdom of arbitration, responsibility, fidelity to principles.", difficultes: "Emotional coldness and a level of demand unliveable in a couple." },
        { numero: 3, degres: "20° à 30°", planete: "Jupiter", titre: "The Gatherer / Atonement", texte: "An extroverted, worldly and optimistic decan. A taste for pleasures. The astrological neighbourhood of Scorpio sometimes demands heavy sacrifices.", facilites: "Generosity, a talent for organising, literary or social success.", difficultes: "Snobbery, luxurious spending, relational superficiality." },
      ],
    },
    {
      id: "scorpion",
      nom: "Scorpio",
      essence: "Raw inner energy, transformation, death and regeneration.",
      decans: [
        { numero: 1, degres: "0° à 10°", planete: "Mars", titre: "The Survivor / Abundance", texte: "Mars in its nocturnal domicile. Raw, instinctive energy. Strong sexual impulses and a vital magnetism offering gifts of healing.", facilites: "An incredible capacity to overcome traumas. A formidable striking force.", difficultes: "Defensive aggression, paranoia and tenacious resentment." },
        { numero: 2, degres: "10° à 20°", planete: "Soleil", titre: "The Strategist / Responsibility", texte: "The Sun lights up the abyss. An intimidating presence, a great need for control. Called to sacrifice the animal part in order to rise.", facilites: "Silent charisma, absolute loyalty, a mafioso power of attraction.", difficultes: "Occult pride, a devouring and manipulative thirst for power." },
        { numero: 3, degres: "20° à 30°", planete: "Vénus", titre: "The Alchemist / Talent", texte: "Dark romanticism and devastating passion. Extreme emotions. If the drive is sublimated, it leads to the heights of artistic and spiritual talent.", facilites: "An immense capacity to love, profound aesthetics, sublimation.", difficultes: "Morbid jealousy, self-destruction out of fear of abandonment." },
      ],
    },
    {
      id: "sagittaire",
      nom: "Sagittarius",
      essence: "Spatial and spiritual expansion, the quest for meaning and enthusiasm.",
      decans: [
        { numero: 1, degres: "0° à 10°", planete: "Mercure", titre: "The Seeker / Piety", texte: "The eternal student. Curiosity, languages, transmission. It leads to cosmic consciousness and an unconditional love of life.", facilites: "Intellectual agility, a talent for oratory and open-mindedness.", difficultes: "Chronic scattering, speech faster than thought." },
        { numero: 2, degres: "10° à 20°", planete: "Lune", titre: "The Nomad / Exploration", texte: "An instinctive dimension. A migratory and pioneering instinct. Travels ceaselessly (physically or mentally) to find its cosmic home.", facilites: "Philosophical intuition, total cultural adaptability.", difficultes: "A flight forward as soon as daily life becomes heavy or routine." },
        { numero: 3, degres: "20° à 30°", planete: "Saturne", titre: "The Sage / Illumination", texte: "Saturn stabilises the flame. Wisdom, law, dogma. The highest state of consciousness if it transmutes its animal energy into lasting truth.", facilites: "Rare perseverance, moral authority, a superior teaching talent.", difficultes: "Severity, dogmatism and a complex of spiritual superiority." },
      ],
    },
    {
      id: "capricorne",
      nom: "Capricorn",
      essence: "Vertical ambition, the structure of time and social achievement.",
      decans: [
        { numero: 1, degres: "0° à 10°", planete: "Jupiter", titre: "The CEO / Organisation", texte: "A broad vision coupled with pragmatism. A precursor of systems. He knows how to seize his chance to climb the social mountain.", facilites: "A sharp business sense, political or corporate organisation.", difficultes: "Cold opportunism, dissatisfaction despite material victories." },
        { numero: 2, degres: "10° à 20°", planete: "Mars", titre: "The Convict / Martyrdom", texte: "Mars in exaltation. A tireless workaholic. Makes the most of any atmosphere and can sacrifice himself for the evolution of a work.", facilites: "Literally superhuman physical endurance and mental resilience.", difficultes: "Extreme harshness toward himself, a major risk of burn-out." },
        { numero: 3, degres: "20° à 30°", planete: "Saturne", titre: "The Hermit / Idealism", texte: "Saturn in double dignity. Sobriety, integrity, absolute patience. The ability to make the ideal concrete through intense solitary labour.", facilites: "Unfailing reliability, a wisdom that grows more beautiful with age.", difficultes: "Pessimism, coldness and isolation from the world of pleasures." },
      ],
    },
    {
      id: "verseau",
      nom: "Aquarius",
      essence: "Radical innovation, human brotherhood and intellectual freedom.",
      decans: [
        { numero: 1, degres: "0° à 10°", planete: "Vénus", titre: "The Reformer / Originality", texte: "A need to please while remaining independent. Romantic friendships. A wild inventiveness to make society more beautiful and free.", facilites: "Total tolerance, extraordinary charm, an avant-garde aesthetic vision.", difficultes: "A permanent tearing between the need for attachment and a thirst for freedom." },
        { numero: 2, degres: "10° à 20°", planete: "Mercure", titre: "The Inventor / Inspiration", texte: "Tenfold mental agility. The intellectual ahead of their time. Inexhaustible resources and information 'downloaded' from the invisible.", facilites: "Technological genius, lightning solutions in the face of dead ends.", difficultes: "Cynical coldness, cerebral nervousness, disconnection from the body." },
        { numero: 3, degres: "20° à 30°", planete: "Lune", titre: "The Humanist / Repression", texte: "Emotion injected into rebellion. Invests body and soul in the collective. The repression of carnal desires for the benefit of the 'cause'.", facilites: "Sincere ecological or social devotion, a utopian imagination.", difficultes: "Erratic moods, instability and a refusal of individual happiness." },
      ],
    },
    {
      id: "poissons",
      nom: "Pisces",
      essence: "The dissolution of the ego, the mystical ocean and universal empathy.",
      decans: [
        { numero: 1, degres: "0° à 10°", planete: "Saturne", titre: "The Initiate / Truth", texte: "Silent wisdom. Saturn structures the haze of Pisces. Mysticism, latent clairvoyance, and an esoteric understanding of phenomena.", facilites: "Deep meditative concentration, spiritual integrity.", difficultes: "Melancholy, phobias, an autistic withdrawal to protect oneself from the world." },
        { numero: 2, degres: "10° à 20°", planete: "Jupiter", titre: "The Healer / Sacrifice", texte: "Jupiter in domicile. Infinite benevolence, unshakeable faith. A mission to relieve the physical and moral ills of others.", facilites: "Saving optimism, gifts of care, spiritual channelling.", difficultes: "No psychic boundaries: an exhausting saviour/martyr syndrome." },
        { numero: 3, degres: "20° à 30°", planete: "Mars", titre: "The Committed / Vicissitudes", texte: "Mars activates the dreamer. He embodies his visions with passion. A multiplicity of careers, a miraculous adaptability to all vicissitudes.", facilites: "Active creativity, an unsuspected strength beneath the apparent gentleness.", difficultes: "Emotional storms, existential chaos and self-sabotage." },
      ],
    },
  ],
};

/* ============================== ES ============================== */
const es: DecansContent = {
  meta: {
    title: "Los 36 Decanos: Matices Ocultos del Zodíaco",
    description:
      "Descubre el uso astrológico de los 36 decanos. Sumérgete en las subinfluencias planetarias de cada signo para afinar la interpretación de la carta natal.",
  },
  jsonld: {
    headline: "Los 36 Decanos: Matices Ocultos del Zodíaco",
    description:
      "Descubre el uso astrológico de los 36 decanos. Sumérgete en las subinfluencias planetarias de cada signo para afinar la interpretación de la carta natal.",
  },
  hero: {
    badge: "Precisión Astrológica",
    title: "Los 36 Decanos: Matices Ocultos del Zodíaco",
    description:
      "Descubre el uso astrológico de los 36 decanos. Sumérgete en las subinfluencias planetarias de cada signo para afinar la interpretación de la carta natal.",
    heroImageAlt: "El zodíaco de Dendera que ilustra el origen egipcio de los 36 decanos",
  },
  defBox: {
    label: "Definición",
    bodyLead: "Un ",
    bodyLeadStrong: "decano en astrología",
    bodyAfterStrong: " es una subdivisión de cada ",
    bodyZodiacLink: "signo del zodíaco",
    bodyTail:
      " en tres partes de 10°, es decir, 36 decanos en total. Cada decano está gobernado por un planeta que matiza la expresión del signo.",
  },
  appIntro: {
    lead:
      "aportan una precisión a menudo ignorada en los horóscopos clásicos. ¿Por qué dos nativos del mismo signo pueden tener personalidades tan diferentes? La respuesta está en los decanos. Descubre aquí los 36 decanos del zodíaco, sus planetas regentes y su influencia concreta en tu carta.",
    tail: "Los decanos astrológicos",
  },
  histoireTitle: "¿De dónde vienen los decanos en astrología?",
  introduction: [
    "El origen de los decanos (a veces llamados caras o decanatos) es extremadamente antiguo. Ya desde 2100 años antes de J.-C., los sacerdotes y astrónomos egipcios utilizaban 36 grupos de estrellas para medir el tiempo. Cada decano aparecía al alba del lado del ascendente durante una decena de días.",
    "El año contaba entonces con 36 decanos que totalizaban 360 días, a los que se añadían cinco días epagómenos. En aquella época, estas estrellas no eran simples marcadores: estaban ligadas a divinidades protectoras y a poderosas prácticas de magia y de sanación.",
    "Hacia el siglo II antes de J.-C., este sistema egipcio fue absorbido por la astrología helenística. El zodíaco de los 12 signos se dividió matemáticamente en tres partes iguales de 10 grados cada una. Esto nos da nuestra matriz perfecta: 3 decanos por signo, es decir, 36 decanos para el conjunto de la rueda zodiacal.",
  ],
  matriceTitle: "La Matriz Matemática",
  definition: [
    "Hoy, los decanos se utilizan principalmente para aportar matiz dentro de un mismo signo. Un planeta en Aries no se expresará de la misma manera a 2° (1er decano) que a 25° (3er decano).",
    "Cada decano está asociado a un planeta regente secundario. El sistema más fiable y más antiguo se basa en el Orden Caldeo de los planetas, del más lento al más rápido: Saturno, Júpiter, Marte, el Sol, Venus, Mercurio y la Luna.",
    "En el cálculo complejo de las dignidades esenciales (para hallar el Almuten de una carta), un planeta situado en su propio decano (o 'cara') obtiene una dignidad menor, que le otorga 1 punto de fuerza.",
  ],
  utilisationsTitle: "El Uso Técnico de los Decanos",
  utilisationsIntro:
    "Los decanos no sirven únicamente para la psicología, son herramientas técnicas de alto nivel en la astrología tradicional y médica.",
  utilisations: [
    {
      domaine: "El Ascendente y la Morfología",
      texte:
        "En el estudio de la Casa I, el decano en el que se encuentra el grado del Ascendente aportará detalles cruciales para describir la apariencia física y la morfología íntima del nativo.",
    },
    {
      domaine: "La Astrología Médica (Decumbituras)",
      texte:
        "Aunque no haya una parte estricta del cuerpo atribuida a los decanos, el astrólogo médico los utiliza para ajustar su diagnóstico al estudiar la carta de la enfermedad (la decumbitura).",
    },
    {
      domaine: "El Cálculo de la Duración (Alcocoden)",
      texte:
        "En las técnicas medievales predictivas, la posición del dador de años (Alcocoden) en un decano permite afinar la esperanza de vida y la vitalidad a largo plazo.",
    },
    {
      domaine: "Las Profecciones Anuales",
      texte:
        "En esta técnica predictiva reina, se observa la posición exacta del señor del año dentro de su decano para colorear los acontecimientos de los 12 meses venideros.",
    },
  ],
  roueImageAlt: "Rueda astrológica que muestra los 36 decanos y sus regentes planetarios",
  signesTitle: "La Enciclopedia de los 36 Decanos",
  signesIntro:
    "He aquí el análisis de los 36 decanos basado en el sistema caldeo, enriquecido por los trabajos de Manilio y las síntesis herméticas de C.C. Zain.",
  decanCard: { forcesLabel: "Fortalezas", defisLabel: "Desafíos" },
  planetLabel: {
    Mars: "Marte",
    Soleil: "Sol",
    Vénus: "Venus",
    Mercure: "Mercurio",
    Lune: "Luna",
    Saturne: "Saturno",
    Jupiter: "Júpiter",
  },
  faqTitle: "Preguntas frecuentes sobre los decanos",
  faq: [
    {
      q: "¿Cómo conocer tu decano en astrología?",
      a: {
        lead: "Para conocer tu decano, ubica tu fecha de nacimiento en los grados de tu ",
        link: { href: "/signes", label: "signo solar" },
        tail:
          ". El 1er decano cubre los 10 primeros grados (0-10°), el 2.º decano los grados 10-20°, y el 3er decano los grados 20-30°. Cada decano está asociado a un planeta regente que matiza tu perfil.",
      },
    },
    {
      q: "¿Cuántos decanos hay en el zodíaco?",
      a: {
        lead:
          "Hay 36 decanos en total en el zodíaco: 3 decanos por signo, para los 12 signos. Este sistema se remonta al antiguo Egipto y fue integrado en la astrología occidental para afinar la interpretación de cada signo.",
      },
    },
    {
      q: "¿Cambian los decanos la interpretación de un signo?",
      a: {
        lead: "Sí. Dos personas del mismo ",
        link: { href: "/signes", label: "signo" },
        tail:
          " pero de decanos diferentes tendrán matices distintos. El planeta regente del decano colorea la expresión del signo: un Aries de 1er decano (Marte) será más impulsivo que un Aries de 3er decano (Júpiter), que será más expansivo y filósofo.",
      },
    },
    {
      q: "¿Se utilizan los decanos en los horóscopos?",
      a: {
        lead:
          "Algunos horóscopos utilizan los decanos para afinar las previsiones y diferenciar a los nativos de un mismo signo. En astrología profesional, los decanos sirven sobre todo en la carta natal para precisar los grados de los ",
        link: { href: "/planetes", label: "planetas" },
        tail: " y en el estudio de los aspectos exactos.",
      },
    },
  ],
  faqJsonLd: [
    {
      name: "¿Cómo conocer tu decano en astrología?",
      text:
        "Para conocer tu decano, ubica tu fecha de nacimiento en los grados de tu signo solar. El 1er decano cubre los 10 primeros grados (0-10°), el 2.º decano los grados 10-20°, y el 3er decano los grados 20-30°. Cada decano está asociado a un planeta regente que matiza tu perfil.",
    },
    {
      name: "¿Cuántos decanos hay en el zodíaco?",
      text:
        "Hay 36 decanos en total en el zodíaco: 3 decanos por signo, para los 12 signos. Este sistema se remonta al antiguo Egipto y fue integrado en la astrología occidental para afinar la interpretación de cada signo.",
    },
    {
      name: "¿Cambian los decanos la interpretación de un signo?",
      text:
        "Sí. Dos personas del mismo signo pero de decanos diferentes tendrán matices distintos. El planeta regente del decano colorea la expresión del signo: un Aries de 1er decano (Marte) será más impulsivo que un Aries de 3er decano (Júpiter), que será más expansivo y filósofo.",
    },
    {
      name: "¿Se utilizan los decanos en los horóscopos?",
      text:
        "Algunos horóscopos utilizan los decanos para afinar las previsiones y diferenciar a los nativos de un mismo signo. En astrología profesional, los decanos sirven sobre todo en la carta natal para precisar los grados de los planetas y en el estudio de los aspectos exactos.",
    },
  ],
  footer: { back: "Volver a la enciclopedia" },
  signes: [
    {
      id: "belier",
      nom: "Aries",
      essence: "El deseo visceral de arrancar, de emprender y de conquistar.",
      decans: [
        { numero: 1, degres: "0° à 10°", planete: "Mars", titre: "El Pionero / La Actividad", texte: "La energía bruta. El impulso es franco, es el guerrero explorador, el que abre el camino sin pedir permiso. Entusiasmo, ardor, a veces venganza.", facilites: "Capacidad de arranque fenomenal. Ideal para lanzar proyectos o romper tabúes.", difficultes: "Aprender la paciencia y canalizar la irritabilidad. Sin un blanco, es pura agitación." },
        { numero: 2, degres: "10° à 20°", planete: "Soleil", titre: "El Líder / La Exaltación", texte: "La influencia solar aporta una dimensión social y noble. Ya no se trata solo de actuar, sino de personificar la acción. Amor al poder, magnanimidad, mando.", facilites: "Carisma natural y gran lealtad. Sabe inspirar a las multitudes.", difficultes: "El orgullo. La necesidad visceral de reconocimiento." },
        { numero: 3, degres: "20° à 30°", planete: "Vénus", titre: "El Artista Apasionado / La Propaganda", texte: "El impulso se suaviza por una búsqueda de belleza. Las energías se orientan hacia un ideal, una filosofía o el amor pasional.", facilites: "Gran creatividad e idealismo. Arder por una causa con elegancia.", difficultes: "La inestabilidad emocional. El conflicto entre la acción marciana y la dulzura venusina." },
      ],
    },
    {
      id: "taureau",
      nom: "Tauro",
      essence: "Actúa con calma, consolida y ancla la materia con resistencia.",
      decans: [
        { numero: 1, degres: "0° à 10°", planete: "Mercure", titre: "El Espíritu Práctico / La Determinación", texte: "La inteligencia aplicada a la materia. El constructor que reflexiona antes de actuar. Preocupación por las riquezas, a veces hasta volverse tímido o reservado.", facilites: "Análisis concreto, habilidad comercial e intuición material.", difficultes: "Sobreintelectualizar sus necesidades o ceder al miedo a la carencia." },
        { numero: 2, degres: "10° à 20°", planete: "Lune", titre: "El Protector / La Lucha", texte: "La cumbre del vínculo con la naturaleza y la familia. Necesidad de un hogar seguro. Fijeza en los objetivos y gran potencial artístico.", facilites: "Gran empatía, talento para crear paz y un posible éxito político.", difficultes: "Apego excesivo al pasado y obsesión por el confort material." },
        { numero: 3, degres: "20° à 30°", planete: "Saturne", titre: "El Constructor / La Maestría", texte: "La estructura y la resistencia absoluta. Es el trabajador incansable. Confiere notables aptitudes iniciáticas si triunfa sobre los límites físicos.", facilites: "Autoridad natural, proyectos a muy largo plazo, inmensa ambición.", difficultes: "La soledad engendrada por una exigencia demasiado grande hacia uno mismo." },
      ],
    },
    {
      id: "gemeaux",
      nom: "Géminis",
      essence: "El movimiento perpetuo, la circulación de la información y de las ideas.",
      decans: [
        { numero: 1, degres: "0° à 10°", planete: "Jupiter", titre: "El Explorador / La Intuición", texte: "La sed de conocimientos vastos. Asimilación fácil, es el decano de los gigantes intelectuales que buscan el 'porqué' de todo.", facilites: "Soltura social, optimismo, capacidad de ver oportunidades por todas partes.", difficultes: "Tendencia a la exageración y a la dispersión." },
        { numero: 2, degres: "10° à 20°", planete: "Mars", titre: "El Justador / La Fidelidad", texte: "El fuego encuentra el aire. Personalidad dinámica, presta para la réplica. La comunicación es un arma, pero guiada por una fuerte conciencia y fidelidad al ideal.", facilites: "Espíritu combativo, ejecución rápida, talento para convencer.", difficultes: "Impaciencia verbal e ironía hiriente." },
        { numero: 3, degres: "20° à 30°", planete: "Soleil", titre: "El Luminar / La Razón", texte: "El Sol ilumina la mente. Este decano busca brillar por sus ideas y su red. Inteligencia aguda y gran claridad conceptual.", facilites: "Claridad de expresión, irradiación intelectual, sentido de la organización.", difficultes: "Necesidad de brillar demasiado por el ingenio para contentar a un ego inseguro." },
      ],
    },
    {
      id: "cancer",
      nom: "Cáncer",
      essence: "La emoción pura, la memoria kármica y la necesidad visceral de protección.",
      decans: [
        { numero: 1, degres: "0° à 10°", planete: "Vénus", titre: "El Alma Sensible / Los Caprichos", texte: "Venus suaviza la naturaleza lunar. Amor profundo al hogar, gran sensibilidad dramática y poética. Intrigas amorosas frecuentes.", facilites: "Sentido de la acogida reconfortante, devoción absoluta hacia los suyos.", difficultes: "Dependencia afectiva marcada y dificultad crónica para decir 'no'." },
        { numero: 2, degres: "10° à 20°", planete: "Mercure", titre: "El Narrador / La Revelación", texte: "Una vivacidad de espíritu que analiza las emociones. Es el decano de los escritores y de los médiums. Energía y recursos insospechados.", facilites: "Capacidad notable para poner palabras a los sentimientos profundos.", difficultes: "Nerviosismo interior. Necesidad de separar la mente del tumulto emocional." },
        { numero: 3, degres: "20° à 30°", planete: "Lune", titre: "El Soñador / La Búsqueda", texte: "La Luna en su domicilio absoluto. Misterio, imaginación desbordante, amor a la naturaleza y a sus secretos ocultos.", facilites: "Intuición rozando la videncia, memoria emocional fuera de lo común.", difficultes: "Humor extremadamente cambiante (lunático) e insatisfacción latente." },
      ],
    },
    {
      id: "lion",
      nom: "Leo",
      essence: "La energía de la irradiación, el orgullo de ser y la fuerza creadora.",
      decans: [
        { numero: 1, degres: "0° à 10°", planete: "Saturne", titre: "El Soberano / El Mando", texte: "El calor de Leo estructurado por Saturno. Ambición seria, sentido de las responsabilidades. Es el constructor de imperios que manda con fogosidad.", facilites: "Voluntad inquebrantable y perseverancia superior a la media.", difficultes: "Austeridad aparente, miedo al fracaso oculto bajo la necesidad de admiración." },
        { numero: 2, degres: "10° à 20°", planete: "Jupiter", titre: "El Magnánimo / La Reforma", texte: "Leo en su apogeo social. Entusiasmo, honores. Valor de las opiniones y aptitud para convencer con el fin de reformar la sociedad.", facilites: "Carisma irresistible, generosidad, capacidad de influencia masiva.", difficultes: "Exceso de confianza, orgullo y teatralidad excesiva." },
        { numero: 3, degres: "20° à 30°", planete: "Mars", titre: "El Campeón / La Ambición", texte: "El fuego solar se une al fuego guerrero. No espera la corona, la conquista. Amor al poder combinado con el talento de líder de hombres.", facilites: "Energía inagotable para defender a los suyos o sus ideales.", difficultes: "Susceptibilidad extrema. No soporta ninguna forma de resistencia." },
      ],
    },
    {
      id: "vierge",
      nom: "Virgo",
      essence: "El análisis metódico, la purificación y la devoción absoluta al servicio.",
      decans: [
        { numero: 1, degres: "0° à 10°", planete: "Soleil", titre: "El Perfeccionista / La Culminación", texte: "Voluntad de perfeccionar su entorno. La Virgo que busca brillar por la calidad irreprochable de su trabajo. Mente en perpetua actividad.", facilites: "Sentido del detalle sin par, lealtad total, asimilación perfecta.", difficultes: "Autocrítica paralizante. La necesidad de ser indispensable agota a su entorno." },
        { numero: 2, degres: "10° à 20°", planete: "Vénus", titre: "El Artesano / La Experiencia", texte: "El encanto y la diplomacia se alían con el método. Gusto por la belleza, por el cuidado. Aptitudes para emprender trabajos experimentales gigantescos.", facilites: "Diplomacia natural, talento para armonizar lo cotidiano.", difficultes: "Pudor excesivo, dificultad para expresar sus vulnerabilidades." },
        { numero: 3, degres: "20° à 30°", planete: "Mercure", titre: "El Experto / La Renuncia", texte: "Mercurio en exaltación y domicilio. Radar intelectual absoluto. Este decano predispone al trabajo incansable por los demás, a veces hasta el sacrificio.", facilites: "Lógica matemática, análisis fulgurante, pericia técnica.", difficultes: "Ansiedad crónica, nerviosismo y tendencia hipocondríaca." },
      ],
    },
    {
      id: "balance",
      nom: "Libra",
      essence: "La búsqueda de equilibrio, la armonía social y el esteticismo de la relación.",
      decans: [
        { numero: 1, degres: "0° à 10°", planete: "Lune", titre: "El Conciliador / La Política", texte: "Receptividad inmensa a los ambientes. Necesidad visceral de paz. Energía creadora en la asociación humana. No soporta la soledad.", facilites: "Encanto desarmante, dulzura, gran inteligencia social.", difficultes: "Humor fluctuante, incapacidad para decidir por miedo a desagradar." },
        { numero: 2, degres: "10° à 20°", planete: "Saturne", titre: "El Árbitro / La Independencia", texte: "Saturno (exaltado aquí) aporta una integridad de hierro. Es la Libra que defiende la Ley. Rebeldía contra la coacción y militancia.", facilites: "Sabiduría de arbitraje, responsabilidad, fidelidad a los principios.", difficultes: "Frialdad emocional y un nivel de exigencia invivible en pareja." },
        { numero: 3, degres: "20° à 30°", planete: "Jupiter", titre: "El Aglutinador / La Expiación", texte: "Decano extrovertido, mundano y optimista. Gusto por los placeres. La vecindad astrológica de Escorpio que exige a veces pesados sacrificios.", facilites: "Generosidad, talento de organizador, éxito literario o mundano.", difficultes: "Esnobismo, gastos lujosos, superficialidad relacional." },
      ],
    },
    {
      id: "scorpion",
      nom: "Escorpio",
      essence: "La energía interior bruta, la transformación, la muerte y la regeneración.",
      decans: [
        { numero: 1, degres: "0° à 10°", planete: "Mars", titre: "El Superviviente / La Abundancia", texte: "Marte en domicilio nocturno. Energía bruta, instintiva. Impulsos sexuales fuertes y un magnetismo vital que ofrece dones de sanación.", facilites: "Capacidad inaudita para superar los traumas. Fuerza de golpe temible.", difficultes: "Agresividad defensiva, paranoia y rencor tenaz." },
        { numero: 2, degres: "10° à 20°", planete: "Soleil", titre: "El Estratega / La Responsabilidad", texte: "El Sol ilumina los abismos. Presencia intimidante, gran necesidad de control. Llamado a sacrificar la parte animal para elevarse.", facilites: "Carisma silencioso, lealtad absoluta, un poder de atracción mafioso.", difficultes: "Orgullo oculto, sed de poder devoradora y manipuladora." },
        { numero: 3, degres: "20° à 30°", planete: "Vénus", titre: "El Alquimista / El Talento", texte: "Romanticismo negro y pasión devastadora. Emociones extremas. Si la pulsión se sublima, conduce a las cimas del talento artístico y espiritual.", facilites: "Inmensa capacidad de amar, esteticismo profundo, sublimación.", difficultes: "Celos enfermizos, autodestrucción por miedo al abandono." },
      ],
    },
    {
      id: "sagittaire",
      nom: "Sagitario",
      essence: "La expansión espacial y espiritual, la búsqueda de sentido y el entusiasmo.",
      decans: [
        { numero: 1, degres: "0° à 10°", planete: "Mercure", titre: "El Buscador / La Piedad", texte: "El estudiante eterno. Curiosidad, lenguas, transmisión. Conduce a la conciencia cósmica y a un amor incondicional por lo vivo.", facilites: "Agilidad intelectual, talento de orador y apertura de mente.", difficultes: "Dispersión crónica, palabra más rápida que el pensamiento." },
        { numero: 2, degres: "10° à 20°", planete: "Lune", titre: "El Nómada / La Exploración", texte: "Dimensión instintiva. Instinto migratorio y pionero. Viaja sin cesar (física o mentalmente) para encontrar su hogar cósmico.", facilites: "Intuición filosófica, adaptabilidad cultural total.", difficultes: "Huida hacia adelante en cuanto lo cotidiano se vuelve pesado o rutinario." },
        { numero: 3, degres: "20° à 30°", planete: "Saturne", titre: "El Sabio / La Iluminación", texte: "Saturno estabiliza la llama. Sabiduría, ley, dogma. El más alto estado de conciencia si transmuta su energía animal en verdad duradera.", facilites: "Perseverancia rara, autoridad moral, talento de maestro superior.", difficultes: "Severidad, dogmatismo y complejo de superioridad espiritual." },
      ],
    },
    {
      id: "capricorne",
      nom: "Capricornio",
      essence: "La ambición vertical, la estructura del tiempo y la realización social.",
      decans: [
        { numero: 1, degres: "0° à 10°", planete: "Jupiter", titre: "El Director / La Organización", texte: "Visión amplia unida al pragmatismo. Precursor de sistemas. Sabe aprovechar la suerte para escalar la montaña social.", facilites: "Sentido agudo de los negocios, organización política o corporativa.", difficultes: "Oportunismo frío, insatisfacción a pesar de las victorias materiales." },
        { numero: 2, degres: "10° à 20°", planete: "Mars", titre: "El Forzado / El Martirio", texte: "Marte en exaltación. Adicto al trabajo infatigable. Saca partido de cualquier ambiente y puede sacrificarse por la evolución de una obra.", facilites: "Resistencia física y resiliencia mental literalmente sobrehumanas.", difficultes: "Dureza extrema hacia sí mismo, riesgo mayor de burn-out." },
        { numero: 3, degres: "20° à 30°", planete: "Saturne", titre: "El Ermitaño / El Idealismo", texte: "Saturno en doble dignidad. Sobriedad, integridad, paciencia absoluta. Aptitud para concretar el ideal mediante un labor solitario intenso.", facilites: "Fiabilidad infalible, sabiduría que se embellece con la vejez.", difficultes: "Pesimismo, frialdad y aislamiento del mundo de los placeres." },
      ],
    },
    {
      id: "verseau",
      nom: "Acuario",
      essence: "La innovación radical, la fraternidad humana y la libertad intelectual.",
      decans: [
        { numero: 1, degres: "0° à 10°", planete: "Vénus", titre: "El Reformador / La Originalidad", texte: "Necesidad de agradar a la vez que de permanecer independiente. Amistades amorosas. Inventiva desbordante para hacer la sociedad más bella y libre.", facilites: "Tolerancia total, encanto fuera de lo común, visión estética de vanguardia.", difficultes: "Desgarro permanente entre la necesidad de apego y la sed de libertad." },
        { numero: 2, degres: "10° à 20°", planete: "Mercure", titre: "El Inventor / La Inspiración", texte: "Agilidad mental multiplicada. El intelectual adelantado a su tiempo. Recursos inagotables e información 'descargada' de lo invisible.", facilites: "Genio tecnológico, soluciones fulminantes ante los callejones sin salida.", difficultes: "Frialdad cínica, nerviosismo cerebral, desconexión del cuerpo." },
        { numero: 3, degres: "20° à 30°", planete: "Lune", titre: "El Humanista / La Represión", texte: "Emoción inyectada en la rebelión. Se entrega en cuerpo y alma al colectivo. Represión de los deseos carnales en favor de la 'causa'.", facilites: "Devoción ecológica o social sincera, imaginación utópica.", difficultes: "Humor errático, inestabilidad y rechazo de la felicidad individual." },
      ],
    },
    {
      id: "poissons",
      nom: "Piscis",
      essence: "La disolución del ego, el océano místico y la empatía universal.",
      decans: [
        { numero: 1, degres: "0° à 10°", planete: "Saturne", titre: "El Iniciado / La Verdad", texte: "Sabiduría silenciosa. Saturno estructura la difuminación de Piscis. Misticismo, videncia latente y comprensión esotérica de los fenómenos.", facilites: "Concentración meditativa profunda, integridad espiritual.", difficultes: "Melancolía, fobias, repliegue autista para protegerse del mundo." },
        { numero: 2, degres: "10° à 20°", planete: "Jupiter", titre: "El Sanador / El Sacrificio", texte: "Júpiter en domicilio. Benevolencia infinita, fe inquebrantable. Misión de aliviar los males físicos y morales de los demás.", facilites: "Optimismo salvador, dones de cuidado, canalización espiritual.", difficultes: "Ninguna frontera psíquica: un agotador síndrome del salvador/mártir." },
        { numero: 3, degres: "20° à 30°", planete: "Mars", titre: "El Comprometido / Las Vicisitudes", texte: "Marte activa al soñador. Encarna sus visiones con pasión. Multiplicidad de carreras, adaptabilidad milagrosa a todas las vicisitudes.", facilites: "Creatividad actuante, una fuerza insospechada bajo la aparente dulzura.", difficultes: "Tormentas emocionales, caos existencial y autosabotaje." },
      ],
    },
  ],
};

export const decansContent: Record<SeoLocale, DecansContent> = { fr, en, es };
