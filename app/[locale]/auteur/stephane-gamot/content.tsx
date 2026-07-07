import type { ReactNode } from "react";
import type { SeoLocale } from "@/lib/seo";

/* ====================================================================
   Auteur — Stéphane Gamot — contenu localisé (fr / en / es)
   Les clés logiques (sections, icônes, couleurs) restent identiques ;
   seuls les textes sont traduits. Les noms propres et entités ne le
   sont pas (Stéphane Gamot, Jean-Marie Michiels, AstroCours.be…).
   ==================================================================== */

export type AuteurContent = {
  meta: { title: string; description: string };
  jsonld: {
    jobTitle: string;
    description: string;
    knowsAbout: string[];
    alumniDescription: string;
  };
  badge: string;
  h1: { first: string; highlight: string; subtitle: string };
  intro: ReactNode;
  stats: { value: string; label: string }[];
  sections: {
    philosophy: {
      badge: string;
      title: string;
      body: ReactNode;
      principlesTitle: string;
      principles: ReactNode;
      note: ReactNode;
    };
    profile: {
      badge: string;
      title: string;
      intro: ReactNode;
      cardEngTitle: string;
      cardEngText: string;
      cardTcmTitle: string;
      cardTcmText: ReactNode;
      outro: ReactNode;
    };
    origins: {
      badge: string;
      title: string;
      body: ReactNode;
    };
    formation: {
      badge: string;
      title: string;
      intro: ReactNode;
      themesLead: string;
      themes: string[];
      outro: string;
    };
    motivation: {
      badge: string;
      title: string;
      body: ReactNode;
    };
    method: {
      badge: string;
      title: string;
      body: ReactNode;
    };
    ethics: {
      badge: string;
      title: string;
      intro: string;
      items: { title: string; text: string }[];
    };
    mission: {
      badge: string;
      title: string;
      body: ReactNode;
    };
  };
  quote: string;
  quoteAuthor: string;
};

/* ============================== FR ============================== */
const fr: AuteurContent = {
  meta: {
    title: "Stéphane Gamot — Astrologue & Auteur",
    description:
      "Passionné d'astrologie depuis 40 ans, formé 3 ans auprès de Jean-Marie Michiels. Découvrez ma vision d'une astrologie traditionnelle modernisée.",
  },
  jsonld: {
    jobTitle: "Astrologue & Ingénieur logiciel",
    description:
      "Passionné d'astrologie depuis 40 ans, formé 3 ans auprès de Jean-Marie Michiels. Découvrez ma vision d'une astrologie traditionnelle modernisée.",
    knowsAbout: [
      "Astrologie natale",
      "Astrologie prévisionnelle",
      "Astrologie horaire",
      "Astro-psychologie",
      "Thème astral",
      "Transits planétaires",
      "Révolution solaire",
      "Directions primaires",
      "Médecine traditionnelle chinoise",
      "Shiatsu",
      "Développement logiciel",
    ],
    alumniDescription:
      "Formation complète en astrologie dirigée par Jean-Marie Michiels",
  },
  badge: "Auteur",
  h1: {
    first: "Stéphane",
    highlight: "Gamot",
    subtitle: "Astrologue, auteur & pédagogue",
  },
  intro: (
    <>
      Ingénieur en développement logiciel. Passionné d&apos;astrologie depuis plus de quarante ans.
      Formé en astrologie traditionnelle, prévisionnelle et en astro-psychologie. Étudiant en
      médecine traditionnelle chinoise et shiatsu. Auteur du site{" "}
      <span className="font-medium text-accent/80">Astro&nbsp;Cours</span>.
    </>
  ),
  stats: [
    { value: "40+", label: "ans de pratique" },
    { value: "3", label: "ans de formation" },
    { value: "60+", label: "sujets enseignés" },
  ],
  sections: {
    philosophy: {
      badge: "Philosophie",
      title: "Comprendre qui nous sommes",
      body: (
        <>
          <p>
            Pour moi, l&apos;astrologie sert avant tout à comprendre qui nous sommes. Comprendre ce
            que nous avons traversé —&nbsp;le pourquoi, à cause de quoi, dans quel but. Mieux
            comprendre les épreuves que nous traversons aujourd&apos;hui. Et nous préparer, avec
            lucidité, aux épreuves éventuelles que nous traverserons demain.
          </p>
          <p>
            C&apos;est avant tout un outil pour mieux nous comprendre et nous préparer à la vie.
            C&apos;est cette vision que je développe aujourd&apos;hui à travers Astro Cours.
          </p>
          <p>
            Avec le temps, je réalise que l&apos;approche qui me parle le plus profondément est l&apos;
            <strong className="text-text/90">astro-psychologie</strong>&nbsp;: la rencontre entre
            l&apos;analyse du thème astral et la compréhension psychologique de l&apos;individu.
          </p>
        </>
      ),
      principlesTitle: "Principes clés de l'astro-psychologie",
      principles: (
        <>
          <p>
            Le thème natal est lu comme une carte des fonctionnements psychologiques&nbsp;: les besoins
            profonds, les mécanismes de défense, les élans contradictoires, les schémas répétitifs.
            Plutôt que de décréter un «&nbsp;destin&nbsp;», elle éclaire des dynamiques intérieures que
            l&apos;on ressent déjà sans toujours pouvoir les nommer.
          </p>
          <p>
            Les transits et progressions ne sont pas des prédictions, mais des périodes de maturation
            psychologique&nbsp;: des moments où certaines parties de nous sont appelées à évoluer.
          </p>
          <p>
            L&apos;objectif n&apos;est pas de donner des réponses, mais d&apos;offrir un miroir&nbsp;:
            mieux se connaître, accepter ses tensions internes et transformer ses potentiels en forces
            conscientes.
          </p>
        </>
      ),
      note: (
        <>
          Note de transparence&nbsp;: l&apos;astrologie, y compris sa branche psychologique, n&apos;est
          pas reconnue comme une science par le milieu académique. Elle est cependant perçue par ses
          praticiens comme une démarche «&nbsp;thérapeutique&nbsp;» au sens large —&nbsp;un outil de
          compréhension de soi, pas un substitut à un suivi médical ou psychologique.
        </>
      ),
    },
    profile: {
      badge: "Profil",
      title: "Un parcours entre logique et intuition",
      intro: (
        <>
          Dans la vie professionnelle, je suis{" "}
          <strong className="text-text/90">ingénieur en développement logiciel</strong> et je conçois
          des sites web sur mesure via mon studio de{" "}
          <a
            href="https://www.creation-site-internet-pays-basque.com/fr"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent/80 underline decoration-1 underline-offset-2 hover:text-accent"
          >
            création de sites internet au Pays Basque
          </a>
          &nbsp;— Astro Cours en est d&apos;ailleurs une réalisation. Ce métier m&apos;a appris la
          rigueur analytique, la structuration des idées et l&apos;importance de la méthode. Ce sont
          des qualités que j&apos;applique directement à ma pratique astrologique&nbsp;: vérifier,
          recouper, ne rien affirmer à la légère.
        </>
      ),
      cardEngTitle: "Ingénierie logicielle",
      cardEngText:
        "Approche rationnelle, structurée et méthodique. La logique au service de la clarté.",
      cardTcmTitle: "MTC & Shiatsu",
      cardTcmText: (
        <>
          Étude de la médecine traditionnelle chinoise et du shiatsu&nbsp;: une autre lecture
          énergétique du corps et de l&apos;esprit.
        </>
      ),
      outro: (
        <>
          Ces deux univers —&nbsp;l&apos;ingénierie et les pratiques énergétiques&nbsp;— peuvent
          sembler opposés. En réalité, ils se complètent. L&apos;un m&apos;ancre dans la logique et la
          vérification, l&apos;autre m&apos;ouvre à une compréhension plus globale de l&apos;être
          humain. L&apos;astrologie, telle que je la pratique, se situe exactement à cette
          intersection.
        </>
      ),
    },
    origins: {
      badge: "Origines",
      title: "La naissance d'une passion",
      body: (
        <>
          <p>
            Tout commence à l&apos;âge de dix ans. Je suis fasciné par la mythologie grecque et
            romaine&nbsp;: Zeus, Arès, Aphrodite, Hermès… Chaque dieu porte le nom d&apos;une planète,
            chaque récit révèle un archétype. Les relations entre ces divinités — leurs alliances,
            leurs conflits, leurs trahisons — préfigurent ce que l&apos;astrologie appelle les aspects.
          </p>
          <p>
            Très vite, cette curiosité me conduit à l&apos;astrologie comme une suite logique, presque
            une évidence. Les livres semblent arriver d&apos;eux-mêmes. Georges Antarès, André
            Barbault, Liz Greene, Henri-Joseph Gouchon… Chaque ouvrage en appelle un autre. Ce qui
            était une fascination d&apos;enfant devient rapidement une pratique quotidienne et
            méthodique.
          </p>
        </>
      ),
    },
    formation: {
      badge: "Formation",
      title: "Trois années de formation structurée",
      intro: (
        <>
          Je me suis formé pendant trois ans auprès de{" "}
          <strong className="text-text/90">Jean-Marie Michiels</strong>, astrologue, chercheur et
          pédagogue belge, au sein d&apos;AstroCours.be. Cette formation a profondément transformé ma
          manière d&apos;aborder l&apos;astrologie. J&apos;y ai appris à sortir des interprétations
          rapides, à ne jamais isoler un élément de son contexte, à considérer le thème comme un
          ensemble cohérent où tout se répond.
        </>
      ),
      themesLead: "Le programme couvrait un spectre large et exigeant :",
      themes: [
        "Calcul et lecture d’un thème natal",
        "Planètes, signes, maisons et aspects",
        "Domification, maîtrises et dignités",
        "Dominantes planétaires et almuten",
        "Règles d’interprétation traditionnelle",
        "Techniques prévisionnelles : transits, révolutions solaires et lunaires, directions",
        "Points fictifs : nœuds lunaires, Lune Noire, parts arabes",
        "Astrologie horaire, médicale et astéroïdes",
      ],
      outro:
        "Ce que cette formation m'a surtout appris, c'est la rigueur. La rigueur de ne rien affirmer qu'on ne puisse démontrer dans le thème. La rigueur de toujours recouper, vérifier, contextualiser. Et la conviction que l'astrologie, pour être crédible, doit s'enseigner avec clarté et honnêteté intellectuelle.",
    },
    motivation: {
      badge: "Motivation",
      title: "Pourquoi je fais ça",
      body: (
        <>
          <p>
            Parce que l&apos;astrologie, bien utilisée, ne donne pas de réponses toutes faites. Elle
            pose de meilleures questions. Elle met en lumière des fonctionnements que l&apos;on ressent
            déjà, sans toujours pouvoir les nommer.
          </p>
          <p>
            Elle éclaire des tensions internes, des élans contradictoires, des schémas récurrents. Et
            parfois, simplement, elle permet de se comprendre un peu mieux —&nbsp;sans se juger.
          </p>
          <p>
            C&apos;est cette utilité-là qui m&apos;intéresse. Pas l&apos;astrologie spectacle. Pas les
            horoscopes de magazine. Une astrologie qui aide à vivre de façon plus consciente.
          </p>
        </>
      ),
    },
    method: {
      badge: "Méthode",
      title: "Mon approche",
      body: (
        <>
          <p>
            Je défends une astrologie ancrée dans le réel. Pas de phrases vagues. Pas de raccourcis du
            type «&nbsp;vous êtes Poissons donc vous êtes rêveur&nbsp;». Pas d&apos;interprétations
            sorties de leur contexte.
          </p>
          <p>
            Un thème astral est un ensemble cohérent. Chaque élément —&nbsp;planète, signe, maison,
            aspect&nbsp;— prend son sens uniquement en relation avec les autres. Mon travail consiste à
            lire cette cohérence, pas à simplifier.
          </p>
          <p>
            Avec le temps, j&apos;ai structuré une manière de travailler claire et reproductible. Une
            interprétation sérieuse ne repose jamais sur un seul élément isolé. Elle repose sur
            l&apos;ensemble du thème, ses répétitions, ses tensions, ses dominantes. C&apos;est cette
            méthode que je partage à travers chaque page d&apos;Astro Cours.
          </p>
        </>
      ),
    },
    ethics: {
      badge: "Éthique",
      title: "Ma charte éthique",
      intro:
        "L'astrologie peut être un outil puissant. C'est précisément pour cela qu'elle doit être utilisée avec responsabilité. Voici les principes qui guident ma pratique :",
      items: [
        {
          title: "Responsabilité",
          text: "L'astrologie est un outil puissant. Je ne traite pas les sujets liés à la mort ou aux maladies graves. Je ne dis pas aux gens quoi faire et ne remplace jamais leur propre jugement.",
        },
        {
          title: "Transparence",
          text: "L'astrologie permet de voir des tendances, des dynamiques, des potentiels. Elle ne prédit pas un destin figé. Il est important d'être clair là-dessus dès le départ.",
        },
        {
          title: "Confidentialité",
          text: "Les données de naissance ne sont pas anodines. Elles restent strictement confidentielles, ne sont ni conservées inutilement, ni partagées.",
        },
      ],
    },
    mission: {
      badge: "Mission",
      title: "Ce que je cherche à transmettre",
      body: (
        <>
          <p>
            À travers Astro Cours, je cherche à proposer une astrologie différente&nbsp;: plus claire,
            plus structurée, plus honnête. Une astrologie qui aide à comprendre, qui prépare à ce qui
            vient —&nbsp;pas une astrologie qui crée de la dépendance.
          </p>
          <p>
            L&apos;objectif est simple&nbsp;: donner à chacun les clés pour comprendre le langage du
            ciel par lui-même. Apprendre à lire un thème, saisir les cycles planétaires, relier les
            symboles à la vie réelle. Sans dépendre d&apos;un interprète.
          </p>
        </>
      ),
    },
  },
  quote: "« L'astrologie est un langage. Si vous comprenez ce langage, le ciel vous parle. »",
  quoteAuthor: "— Dane Rudhyar",
};

/* ============================== EN ============================== */
const en: AuteurContent = {
  meta: {
    title: "Stéphane Gamot — Astrologer & Author",
    description:
      "Passionate about astrology for 40 years, trained for 3 years with Jean-Marie Michiels. Discover my vision of a modernised traditional astrology.",
  },
  jsonld: {
    jobTitle: "Astrologer & Software Engineer",
    description:
      "Passionate about astrology for 40 years, trained for 3 years with Jean-Marie Michiels. Discover my vision of a modernised traditional astrology.",
    knowsAbout: [
      "Natal astrology",
      "Predictive astrology",
      "Horary astrology",
      "Astro-psychology",
      "Natal chart",
      "Planetary transits",
      "Solar return",
      "Primary directions",
      "Traditional Chinese medicine",
      "Shiatsu",
      "Software development",
    ],
    alumniDescription: "Complete astrology training led by Jean-Marie Michiels",
  },
  badge: "Author",
  h1: {
    first: "Stéphane",
    highlight: "Gamot",
    subtitle: "Astrologer, author & teacher",
  },
  intro: (
    <>
      Software development engineer. Passionate about astrology for more than forty years. Trained in
      traditional, predictive astrology and in astro-psychology. Student of traditional Chinese
      medicine and shiatsu. Author of the website{" "}
      <span className="font-medium text-accent/80">Astro&nbsp;Cours</span>.
    </>
  ),
  stats: [
    { value: "40+", label: "years of practice" },
    { value: "3", label: "years of training" },
    { value: "60+", label: "subjects taught" },
  ],
  sections: {
    philosophy: {
      badge: "Philosophy",
      title: "Understanding who we are",
      body: (
        <>
          <p>
            For me, astrology serves above all to understand who we are. To understand what we have
            been through —&nbsp;the why, because of what, for what purpose. To better understand the
            trials we are going through today. And to prepare ourselves, with clarity, for the possible
            trials we will face tomorrow.
          </p>
          <p>
            It is above all a tool to understand ourselves better and to prepare for life. This is the
            vision I am developing today through Astro Cours.
          </p>
          <p>
            Over time, I realise that the approach that speaks to me most deeply is{" "}
            <strong className="text-text/90">astro-psychology</strong>&nbsp;: the meeting point between
            the analysis of the natal chart and the psychological understanding of the individual.
          </p>
        </>
      ),
      principlesTitle: "Key principles of astro-psychology",
      principles: (
        <>
          <p>
            The natal chart is read as a map of psychological patterns&nbsp;: deep needs, defence
            mechanisms, contradictory impulses, recurring patterns. Rather than decreeing a
            «&nbsp;destiny&nbsp;», it sheds light on inner dynamics that we already feel without always
            being able to name them.
          </p>
          <p>
            Transits and progressions are not predictions, but periods of psychological
            maturation&nbsp;: moments when certain parts of us are called to evolve.
          </p>
          <p>
            The goal is not to give answers, but to offer a mirror&nbsp;: to know oneself better, to
            accept one&apos;s inner tensions and to turn one&apos;s potential into conscious strengths.
          </p>
        </>
      ),
      note: (
        <>
          Note on transparency&nbsp;: astrology, including its psychological branch, is not recognised
          as a science by the academic world. It is, however, perceived by its practitioners as a
          «&nbsp;therapeutic&nbsp;» approach in the broad sense —&nbsp;a tool for self-understanding,
          not a substitute for medical or psychological care.
        </>
      ),
    },
    profile: {
      badge: "Profile",
      title: "A path between logic and intuition",
      intro: (
        <>
          In my professional life, I am a{" "}
          <strong className="text-text/90">software development engineer</strong> and I build custom
          websites through my{" "}
          <a
            href="https://www.creation-site-internet-pays-basque.com/fr"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent/80 underline decoration-1 underline-offset-2 hover:text-accent"
          >
            web design studio in the French Basque Country
          </a>
          &nbsp;— Astro Cours is one of its creations. This work has taught me analytical rigour,
          the structuring of ideas and the importance of method. These are qualities I apply
          directly to my astrological practice&nbsp;: checking, cross-referencing, never asserting
          anything lightly.
        </>
      ),
      cardEngTitle: "Software engineering",
      cardEngText:
        "A rational, structured and methodical approach. Logic in the service of clarity.",
      cardTcmTitle: "TCM & Shiatsu",
      cardTcmText: (
        <>
          The study of traditional Chinese medicine and shiatsu&nbsp;: another energetic reading of the
          body and the mind.
        </>
      ),
      outro: (
        <>
          These two worlds —&nbsp;engineering and the energetic practices&nbsp;— may seem opposed. In
          reality, they complement each other. One anchors me in logic and verification, the other
          opens me to a more holistic understanding of the human being. Astrology, as I practise it,
          sits exactly at this intersection.
        </>
      ),
    },
    origins: {
      badge: "Origins",
      title: "The birth of a passion",
      body: (
        <>
          <p>
            It all begins at the age of ten. I am fascinated by Greek and Roman mythology&nbsp;: Zeus,
            Ares, Aphrodite, Hermes… Each god bears the name of a planet, each tale reveals an
            archetype. The relationships between these deities — their alliances, their conflicts, their
            betrayals — foreshadow what astrology calls aspects.
          </p>
          <p>
            Very quickly, this curiosity leads me to astrology as a logical sequel, almost a matter of
            course. The books seem to arrive on their own. Georges Antarès, André Barbault, Liz Greene,
            Henri-Joseph Gouchon… Each work calls for another. What was a childhood fascination quickly
            becomes a daily, methodical practice.
          </p>
        </>
      ),
    },
    formation: {
      badge: "Training",
      title: "Three years of structured training",
      intro: (
        <>
          I trained for three years with{" "}
          <strong className="text-text/90">Jean-Marie Michiels</strong>, a Belgian astrologer,
          researcher and teacher, within AstroCours.be. This training profoundly transformed the way I
          approach astrology. There I learned to move beyond quick interpretations, never to isolate an
          element from its context, and to regard the chart as a coherent whole where everything echoes
          everything else.
        </>
      ),
      themesLead: "The programme covered a broad and demanding range :",
      themes: [
        "Calculating and reading a natal chart",
        "Planets, signs, houses and aspects",
        "House division, rulerships and dignities",
        "Planetary dominants and almuten",
        "Rules of traditional interpretation",
        "Predictive techniques : transits, solar and lunar returns, directions",
        "Fictitious points : lunar nodes, Black Moon, Arabic parts",
        "Horary and medical astrology, and asteroids",
      ],
      outro:
        "What this training taught me above all is rigour. The rigour of never asserting anything you cannot demonstrate in the chart. The rigour of always cross-referencing, verifying, contextualising. And the conviction that astrology, to be credible, must be taught with clarity and intellectual honesty.",
    },
    motivation: {
      badge: "Motivation",
      title: "Why I do this",
      body: (
        <>
          <p>
            Because astrology, used well, does not give ready-made answers. It asks better questions.
            It brings to light patterns that we already sense, without always being able to name them.
          </p>
          <p>
            It sheds light on inner tensions, contradictory impulses, recurring patterns. And
            sometimes, simply, it allows us to understand ourselves a little better —&nbsp;without
            judging ourselves.
          </p>
          <p>
            It is that usefulness that interests me. Not show astrology. Not magazine horoscopes. An
            astrology that helps us live more consciously.
          </p>
        </>
      ),
    },
    method: {
      badge: "Method",
      title: "My approach",
      body: (
        <>
          <p>
            I stand for an astrology rooted in reality. No vague phrases. No shortcuts like
            «&nbsp;you&apos;re a Pisces so you&apos;re a dreamer&nbsp;». No interpretations torn from
            their context.
          </p>
          <p>
            A natal chart is a coherent whole. Each element —&nbsp;planet, sign, house, aspect&nbsp;—
            takes on meaning only in relation to the others. My work consists in reading that
            coherence, not in simplifying.
          </p>
          <p>
            Over time, I have structured a clear and reproducible way of working. A serious
            interpretation never rests on a single isolated element. It rests on the whole chart, its
            repetitions, its tensions, its dominants. This is the method I share through every page of
            Astro Cours.
          </p>
        </>
      ),
    },
    ethics: {
      badge: "Ethics",
      title: "My code of ethics",
      intro:
        "Astrology can be a powerful tool. That is precisely why it must be used responsibly. Here are the principles that guide my practice :",
      items: [
        {
          title: "Responsibility",
          text: "Astrology is a powerful tool. I do not address subjects related to death or serious illness. I do not tell people what to do and never replace their own judgement.",
        },
        {
          title: "Transparency",
          text: "Astrology lets us see trends, dynamics, potentials. It does not predict a fixed destiny. It is important to be clear about this from the outset.",
        },
        {
          title: "Confidentiality",
          text: "Birth data is not trivial. It remains strictly confidential, is neither kept unnecessarily nor shared.",
        },
      ],
    },
    mission: {
      badge: "Mission",
      title: "What I aim to pass on",
      body: (
        <>
          <p>
            Through Astro Cours, I aim to offer a different astrology&nbsp;: clearer, more structured,
            more honest. An astrology that helps you understand, that prepares you for what is coming
            —&nbsp;not an astrology that creates dependence.
          </p>
          <p>
            The goal is simple&nbsp;: to give everyone the keys to understand the language of the sky
            for themselves. To learn to read a chart, to grasp the planetary cycles, to connect the
            symbols to real life. Without depending on an interpreter.
          </p>
        </>
      ),
    },
  },
  quote: "“Astrology is a language. If you understand this language, the sky speaks to you.”",
  quoteAuthor: "— Dane Rudhyar",
};

/* ============================== ES ============================== */
const es: AuteurContent = {
  meta: {
    title: "Stéphane Gamot — Astrólogo y Autor",
    description:
      "Apasionado por la astrología desde hace 40 años, formado 3 años junto a Jean-Marie Michiels. Descubre mi visión de una astrología tradicional modernizada.",
  },
  jsonld: {
    jobTitle: "Astrólogo e Ingeniero de software",
    description:
      "Apasionado por la astrología desde hace 40 años, formado 3 años junto a Jean-Marie Michiels. Descubre mi visión de una astrología tradicional modernizada.",
    knowsAbout: [
      "Astrología natal",
      "Astrología predictiva",
      "Astrología horaria",
      "Astro-psicología",
      "Carta natal",
      "Tránsitos planetarios",
      "Revolución solar",
      "Direcciones primarias",
      "Medicina tradicional china",
      "Shiatsu",
      "Desarrollo de software",
    ],
    alumniDescription:
      "Formación completa en astrología dirigida por Jean-Marie Michiels",
  },
  badge: "Autor",
  h1: {
    first: "Stéphane",
    highlight: "Gamot",
    subtitle: "Astrólogo, autor y pedagogo",
  },
  intro: (
    <>
      Ingeniero de desarrollo de software. Apasionado por la astrología desde hace más de cuarenta
      años. Formado en astrología tradicional, predictiva y en astro-psicología. Estudiante de
      medicina tradicional china y shiatsu. Autor del sitio{" "}
      <span className="font-medium text-accent/80">Astro&nbsp;Cours</span>.
    </>
  ),
  stats: [
    { value: "40+", label: "años de práctica" },
    { value: "3", label: "años de formación" },
    { value: "60+", label: "temas enseñados" },
  ],
  sections: {
    philosophy: {
      badge: "Filosofía",
      title: "Comprender quiénes somos",
      body: (
        <>
          <p>
            Para mí, la astrología sirve ante todo para comprender quiénes somos. Comprender lo que
            hemos atravesado —&nbsp;el porqué, a causa de qué, con qué fin. Comprender mejor las pruebas
            que atravesamos hoy. Y prepararnos, con lucidez, para las posibles pruebas que atravesaremos
            mañana.
          </p>
          <p>
            Es ante todo una herramienta para comprendernos mejor y prepararnos para la vida. Es esta
            visión la que desarrollo hoy a través de Astro Cours.
          </p>
          <p>
            Con el tiempo, me doy cuenta de que el enfoque que más me llega en lo profundo es la{" "}
            <strong className="text-text/90">astro-psicología</strong>&nbsp;: el encuentro entre el
            análisis de la carta natal y la comprensión psicológica del individuo.
          </p>
        </>
      ),
      principlesTitle: "Principios clave de la astro-psicología",
      principles: (
        <>
          <p>
            La carta natal se lee como un mapa de los funcionamientos psicológicos&nbsp;: las
            necesidades profundas, los mecanismos de defensa, los impulsos contradictorios, los
            patrones repetitivos. En lugar de decretar un «&nbsp;destino&nbsp;», ilumina dinámicas
            interiores que ya sentimos sin poder siempre nombrarlas.
          </p>
          <p>
            Los tránsitos y las progresiones no son predicciones, sino periodos de maduración
            psicológica&nbsp;: momentos en que ciertas partes de nosotros están llamadas a evolucionar.
          </p>
          <p>
            El objetivo no es dar respuestas, sino ofrecer un espejo&nbsp;: conocerse mejor, aceptar las
            tensiones internas y transformar los propios potenciales en fuerzas conscientes.
          </p>
        </>
      ),
      note: (
        <>
          Nota de transparencia&nbsp;: la astrología, incluida su rama psicológica, no está reconocida
          como ciencia por el ámbito académico. Sin embargo, sus practicantes la perciben como un
          enfoque «&nbsp;terapéutico&nbsp;» en sentido amplio —&nbsp;una herramienta de comprensión de
          uno mismo, no un sustituto de un seguimiento médico o psicológico.
        </>
      ),
    },
    profile: {
      badge: "Perfil",
      title: "Una trayectoria entre lógica e intuición",
      intro: (
        <>
          En la vida profesional, soy{" "}
          <strong className="text-text/90">ingeniero de desarrollo de software</strong> y diseño
          sitios web a medida a través de mi{" "}
          <a
            href="https://www.creation-site-internet-pays-basque.com/fr"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent/80 underline decoration-1 underline-offset-2 hover:text-accent"
          >
            estudio de creación de sitios web en el País Vasco francés
          </a>
          &nbsp;— Astro Cours es, de hecho, una de sus realizaciones. Este oficio me enseñó el rigor
          analítico, la estructuración de las ideas y la importancia del método. Son cualidades que
          aplico directamente a mi práctica astrológica&nbsp;: verificar, cotejar, no afirmar nada a
          la ligera.
        </>
      ),
      cardEngTitle: "Ingeniería de software",
      cardEngText:
        "Un enfoque racional, estructurado y metódico. La lógica al servicio de la claridad.",
      cardTcmTitle: "MTC y Shiatsu",
      cardTcmText: (
        <>
          El estudio de la medicina tradicional china y del shiatsu&nbsp;: otra lectura energética del
          cuerpo y de la mente.
        </>
      ),
      outro: (
        <>
          Estos dos universos —&nbsp;la ingeniería y las prácticas energéticas&nbsp;— pueden parecer
          opuestos. En realidad, se complementan. Uno me ancla en la lógica y la verificación, el otro
          me abre a una comprensión más global del ser humano. La astrología, tal como la practico, se
          sitúa exactamente en esta intersección.
        </>
      ),
    },
    origins: {
      badge: "Orígenes",
      title: "El nacimiento de una pasión",
      body: (
        <>
          <p>
            Todo comienza a los diez años. Me fascina la mitología griega y romana&nbsp;: Zeus, Ares,
            Afrodita, Hermes… Cada dios lleva el nombre de un planeta, cada relato revela un arquetipo.
            Las relaciones entre estas divinidades — sus alianzas, sus conflictos, sus traiciones —
            prefiguran lo que la astrología llama los aspectos.
          </p>
          <p>
            Muy pronto, esta curiosidad me conduce a la astrología como una continuación lógica, casi
            una evidencia. Los libros parecen llegar por sí solos. Georges Antarès, André Barbault, Liz
            Greene, Henri-Joseph Gouchon… Cada obra llama a otra. Lo que era una fascinación infantil se
            convierte rápidamente en una práctica diaria y metódica.
          </p>
        </>
      ),
    },
    formation: {
      badge: "Formación",
      title: "Tres años de formación estructurada",
      intro: (
        <>
          Me formé durante tres años junto a{" "}
          <strong className="text-text/90">Jean-Marie Michiels</strong>, astrólogo, investigador y
          pedagogo belga, dentro de AstroCours.be. Esta formación transformó profundamente mi manera de
          abordar la astrología. Allí aprendí a salir de las interpretaciones rápidas, a no aislar nunca
          un elemento de su contexto, a considerar la carta como un conjunto coherente donde todo se
          responde.
        </>
      ),
      themesLead: "El programa cubría un espectro amplio y exigente :",
      themes: [
        "Cálculo y lectura de una carta natal",
        "Planetas, signos, casas y aspectos",
        "Domificación, regencias y dignidades",
        "Dominantes planetarias y almuten",
        "Reglas de interpretación tradicional",
        "Técnicas predictivas : tránsitos, revoluciones solares y lunares, direcciones",
        "Puntos ficticios : nodos lunares, Luna Negra, partes árabes",
        "Astrología horaria, médica y asteroides",
      ],
      outro:
        "Lo que esta formación me enseñó sobre todo es el rigor. El rigor de no afirmar nada que no se pueda demostrar en la carta. El rigor de cotejar, verificar y contextualizar siempre. Y la convicción de que la astrología, para ser creíble, debe enseñarse con claridad y honestidad intelectual.",
    },
    motivation: {
      badge: "Motivación",
      title: "Por qué hago esto",
      body: (
        <>
          <p>
            Porque la astrología, bien utilizada, no da respuestas hechas. Plantea mejores preguntas.
            Pone de relieve funcionamientos que ya sentimos, sin poder siempre nombrarlos.
          </p>
          <p>
            Ilumina tensiones internas, impulsos contradictorios, patrones recurrentes. Y a veces,
            simplemente, permite comprenderse un poco mejor —&nbsp;sin juzgarse.
          </p>
          <p>
            Es esa utilidad la que me interesa. No la astrología espectáculo. No los horóscopos de
            revista. Una astrología que ayuda a vivir de forma más consciente.
          </p>
        </>
      ),
    },
    method: {
      badge: "Método",
      title: "Mi enfoque",
      body: (
        <>
          <p>
            Defiendo una astrología anclada en lo real. Nada de frases vagas. Nada de atajos del tipo
            «&nbsp;eres Piscis, así que eres soñador&nbsp;». Nada de interpretaciones sacadas de su
            contexto.
          </p>
          <p>
            Una carta natal es un conjunto coherente. Cada elemento —&nbsp;planeta, signo, casa,
            aspecto&nbsp;— cobra sentido únicamente en relación con los demás. Mi trabajo consiste en
            leer esa coherencia, no en simplificar.
          </p>
          <p>
            Con el tiempo, he estructurado una manera de trabajar clara y reproducible. Una
            interpretación seria nunca se apoya en un solo elemento aislado. Se apoya en el conjunto de
            la carta, sus repeticiones, sus tensiones, sus dominantes. Es este método el que comparto a
            través de cada página de Astro Cours.
          </p>
        </>
      ),
    },
    ethics: {
      badge: "Ética",
      title: "Mi código ético",
      intro:
        "La astrología puede ser una herramienta poderosa. Precisamente por eso debe utilizarse con responsabilidad. Estos son los principios que guían mi práctica :",
      items: [
        {
          title: "Responsabilidad",
          text: "La astrología es una herramienta poderosa. No trato los temas relacionados con la muerte o las enfermedades graves. No le digo a la gente qué hacer y nunca sustituyo su propio juicio.",
        },
        {
          title: "Transparencia",
          text: "La astrología permite ver tendencias, dinámicas, potenciales. No predice un destino fijo. Es importante ser claro al respecto desde el principio.",
        },
        {
          title: "Confidencialidad",
          text: "Los datos de nacimiento no son insignificantes. Permanecen estrictamente confidenciales, no se conservan innecesariamente ni se comparten.",
        },
      ],
    },
    mission: {
      badge: "Misión",
      title: "Lo que busco transmitir",
      body: (
        <>
          <p>
            A través de Astro Cours, busco proponer una astrología diferente&nbsp;: más clara, más
            estructurada, más honesta. Una astrología que ayuda a comprender, que prepara para lo que
            viene —&nbsp;no una astrología que crea dependencia.
          </p>
          <p>
            El objetivo es simple&nbsp;: dar a cada persona las claves para comprender el lenguaje del
            cielo por sí misma. Aprender a leer una carta, captar los ciclos planetarios, vincular los
            símbolos con la vida real. Sin depender de un intérprete.
          </p>
        </>
      ),
    },
  },
  quote: "«La astrología es un lenguaje. Si comprendes este lenguaje, el cielo te habla.»",
  quoteAuthor: "— Dane Rudhyar",
};

export const auteurContent: Record<SeoLocale, AuteurContent> = { fr, en, es };
