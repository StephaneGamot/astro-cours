import { Link } from "@/i18n/navigation";
import type { ReactNode } from "react";
import type { SeoLocale } from "@/lib/seo";

/* ====================================================================
   Thème astral — page pilier (audit SEO 07/2026), contenu fr/en/es.
   Cible : « thème astral », « thème natal », « carte du ciel »,
   « birth chart », « carta astral ». 2500+ mots par langue.
   ==================================================================== */

export type ThemeAstralContent = {
  meta: { title: string; description: string };
  jsonld: { headline: string; description: string; articleSection: string };
  breadcrumbHome: string;
  hero: { eyebrow: string; h1: string; intro: ReactNode };
  defBox: { label: string; body: ReactNode };
  sections: { id: string; title: string; body: ReactNode }[];
  faqTitle: string;
  faq: { q: string; a: string }[];
  cta: { title: string; body: string; links: { href: string; label: string }[] };
};

/* ────────────────────────── FR ────────────────────────── */

const fr: ThemeAstralContent = {
  meta: {
    title: "Thème astral : comprendre et lire sa carte du ciel",
    description:
      "Qu'est-ce qu'un thème astral ? Planètes, signes, maisons, aspects : méthode complète pour lire votre carte du ciel de naissance, étape par étape.",
  },
  jsonld: {
    headline: "Le thème astral : comprendre et lire sa carte du ciel de naissance",
    description:
      "Guide complet du thème astral : les quatre briques (planètes, signes, maisons, aspects), la méthode de lecture pas à pas, le trio Soleil-Lune-Ascendant et les erreurs à éviter.",
    articleSection: "Cours d'astrologie",
  },
  breadcrumbHome: "Accueil",
  hero: {
    eyebrow: "Cours d'astrologie — page fondamentale",
    h1: "Le thème astral",
    intro: (
      <>
        Le <strong>thème astral</strong> — ou thème natal, ou carte du ciel — est la photographie
        exacte du ciel au moment et au lieu précis de votre naissance. C&apos;est le document de
        base de toute l&apos;astrologie : un cercle de 360° où se répartissent les{" "}
        <Link href="/planetes">10 planètes</Link>, les <Link href="/signes">12 signes</Link>, les{" "}
        <Link href="/maisons">12 maisons</Link> et les <Link href="/aspects">aspects</Link> qui les
        relient. Cette page vous donne la méthode complète pour le comprendre et commencer à le
        lire vous-même.
      </>
    ),
  },
  defBox: {
    label: "Définition",
    body: (
      <>
        Un <strong>thème astral</strong> est la carte du ciel géocentrique dressée pour une date,
        une heure et un lieu de naissance donnés. Il positionne les planètes dans les signes du
        zodiaque et dans les maisons astrologiques, puis mesure les angles (aspects) qu&apos;elles
        forment entre elles. Contrairement à l&apos;horoscope de magazine, qui ne retient que le
        signe solaire, le thème astral est unique à chaque individu : il faut environ quatre
        minutes pour que le ciel natal change de manière significative.
      </>
    ),
  },
  sections: [
    {
      id: "quatre-briques",
      title: "Les quatre briques du thème astral",
      body: (
        <>
          <p>
            Toute lecture de thème repose sur quatre familles de symboles, toujours les mêmes.
            Les confondre est l&apos;erreur la plus courante du débutant ; les distinguer est le
            premier vrai progrès.
          </p>
          <p>
            <strong>1. Les planètes — les fonctions.</strong> Les{" "}
            <Link href="/planetes">10 planètes</Link> sont les acteurs du thème. Chacune incarne
            une fonction psychique : le Soleil veut, la Lune ressent, Mercure pense, Vénus aime,
            Mars agit, Jupiter élargit, Saturne structure, et les trois transpersonnelles (Uranus,
            Neptune, Pluton) relient l&apos;individu à sa génération. Une planète répond à la
            question <em>« quoi ? »</em> : quelle part de vous s&apos;exprime.
          </p>
          <p>
            <strong>2. Les signes — les styles.</strong> Les{" "}
            <Link href="/signes">12 signes du zodiaque</Link> sont les filtres que les planètes
            traversent. Un même Mars ne combat pas de la même façon en Bélier (frontal) et en
            Poissons (par contournement). Le signe répond à la question <em>« comment ? »</em> :
            dans quel style l&apos;énergie se manifeste. Chaque signe combine un élément (feu,
            terre, air, eau) et un mode (cardinal, fixe, mutable).
          </p>
          <p>
            <strong>3. Les maisons — les terrains.</strong> Les{" "}
            <Link href="/maisons">12 maisons astrologiques</Link> découpent le ciel local de votre
            naissance en douze domaines de vie : identité, argent, communication, foyer, création,
            travail, couple, transformation, horizons, vocation, amitiés, intériorité. La maison
            répond à la question <em>« où ? »</em> : dans quel secteur de l&apos;existence la
            planète investit son énergie. C&apos;est la partie du thème qui exige une heure de
            naissance précise.
          </p>
          <p>
            <strong>4. Les aspects — les dialogues.</strong> Les{" "}
            <Link href="/aspects">aspects</Link> sont les angles significatifs que forment les
            planètes entre elles : conjonction (0°), sextile (60°), carré (90°), trigone (120°),
            opposition (180°), et quelques aspects mineurs. Ils décrivent comment les fonctions
            psychiques coopèrent, se renforcent ou se contrarient. Un thème sans lecture des
            aspects reste une liste de positions ; les aspects en font un système vivant.
          </p>
        </>
      ),
    },
    {
      id: "donnees-necessaires",
      title: "Ce qu'il faut pour calculer un thème astral",
      body: (
        <>
          <p>
            Trois données suffisent, mais leur précision fait toute la différence :
          </p>
          <p>
            <strong>La date de naissance</strong> fixe la position des planètes dans les signes.
            Les planètes lentes bougent peu en un jour ; la Lune, elle, traverse un signe en deux
            jours et demi — une date seule peut donc laisser une ambiguïté sur le signe lunaire.
          </p>
          <p>
            <strong>L&apos;heure de naissance</strong>, la donnée la plus critique. Elle détermine
            l&apos;Ascendant — le signe qui se levait à l&apos;horizon est — et donc tout le
            système des <Link href="/maisons">maisons</Link>, qui pivote d&apos;un signe entier
            environ toutes les deux heures. Sans heure fiable, on peut lire les planètes en signes
            et leurs aspects, mais pas la dimension concrète du thème. L&apos;heure figure sur
            l&apos;acte de naissance intégral, que l&apos;état civil français délivre gratuitement.
          </p>
          <p>
            <strong>Le lieu de naissance</strong> ancre le calcul dans la géographie : latitude et
            longitude modifient l&apos;Ascendant et les <Link href="/cuspides-des-maisons">cuspides
            des maisons</Link>. Deux jumeaux nés à la même heure à Lille et à Marseille
            n&apos;auraient pas exactement le même thème.
          </p>
          <p>
            Une fois le thème dressé, il ne change jamais : c&apos;est votre référentiel de base.
            Ce qui évolue, ce sont les <Link href="/transits">transits</Link> — les positions
            actuelles des planètes qui viennent dialoguer avec vos positions natales — et les
            techniques dérivées comme la <Link href="/revolution-solaire">révolution solaire</Link>.
          </p>
        </>
      ),
    },
    {
      id: "trio-fondamental",
      title: "Soleil, Lune, Ascendant : le trio fondamental",
      body: (
        <>
          <p>
            Face à un thème complet — dix planètes, douze maisons, des dizaines d&apos;aspects —
            on commence toujours par trois points. Ils forment l&apos;ossature de la personnalité
            et suffisent déjà à dépasser très largement l&apos;horoscope de magazine.
          </p>
          <p>
            <strong>Le Soleil</strong> est votre signe « officiel », celui que tout le monde
            connaît. Il décrit l&apos;identité consciente, la volonté, la direction de vie : ce
            que vous cherchez à devenir. Mais il n&apos;est qu&apos;un tiers de l&apos;histoire —
            c&apos;est précisément <em>pourquoi votre horoscope ne vous ressemble pas</em>{" "}
            toujours.
          </p>
          <p>
            <strong>La Lune</strong> décrit le monde intérieur : les émotions, les besoins de
            sécurité, les réactions spontanées, ce qui vous apaise. C&apos;est la part de vous qui
            s&apos;exprime dans l&apos;intimité, quand le personnage social se retire. Beaucoup de
            gens se reconnaissent davantage dans leur signe lunaire que dans leur signe solaire.
          </p>
          <p>
            <strong>L&apos;Ascendant</strong> est le signe qui se levait à l&apos;est au moment de
            votre naissance. Il décrit la manière d&apos;aborder le monde : le style spontané, la
            première impression que vous donnez, l&apos;énergie avec laquelle vous entrez dans une
            pièce. Il ouvre la <Link href="/maisons">Maison I</Link> et oriente tout le reste du
            thème — son maître (la planète qui gouverne le signe de l&apos;Ascendant, voir les{" "}
            <Link href="/maitrises">maîtrises</Link>) est souvent la planète la plus importante du
            thème.
          </p>
          <p>
            La synthèse de ces trois points donne déjà un portrait étonnamment juste : le Soleil
            pour le cap, la Lune pour le cœur, l&apos;Ascendant pour le style. Le reste du thème
            vient nuancer, préciser, complexifier.
          </p>
        </>
      ),
    },
    {
      id: "methode-lecture",
      title: "Comment lire un thème astral : la méthode en 7 étapes",
      body: (
        <>
          <p>
            Il n&apos;existe pas de lecture « automatique » d&apos;un thème : additionner des
            interprétations toutes faites, paragraphe par paragraphe, produit un portrait
            contradictoire et illisible. La méthode ci-dessous va du général au particulier —
            c&apos;est celle que nous suivons dans tous les cours de ce site.
          </p>
          <p>
            <strong>Étape 1 — La vue d&apos;ensemble.</strong> Avant tout symbole, regardez la
            forme : les planètes sont-elles regroupées ou dispersées ? Quels hémisphères, quels
            quadrants sont occupés ? Un thème concentré dans les maisons hautes parle déjà de vie
            sociale et publique ; un thème regroupé sous l&apos;horizon, de vie intérieure.
          </p>
          <p>
            <strong>Étape 2 — Les équilibres élémentaires.</strong> Comptez les planètes par
            élément (feu, terre, air, eau) et par mode (cardinal, fixe, mutable). Un manque ou un
            excès marqué est souvent plus parlant que n&apos;importe quelle position isolée : une
            personne sans planète en terre ne s&apos;organise pas comme une personne à dominante
            terre. Les <Link href="/signes-dominants">signes dominants</Link> affinent cette
            lecture.
          </p>
          <p>
            <strong>Étape 3 — Le trio Soleil / Lune / Ascendant</strong>, comme vu plus haut :
            signe, maison et principaux aspects de chacun. C&apos;est le squelette du portrait.
          </p>
          <p>
            <strong>Étape 4 — Le maître de l&apos;Ascendant.</strong> Identifiez la planète qui
            gouverne le signe ascendant, puis sa position par signe, maison et aspects. Elle
            indique où et comment la vie « se joue » concrètement.
          </p>
          <p>
            <strong>Étape 5 — Les planètes angulaires et les amas.</strong> Une planète collée à
            l&apos;Ascendant, au Milieu du Ciel, au Descendant ou au Fond du Ciel prend une
            puissance particulière. De même, un amas de trois planètes ou plus dans un signe ou une
            maison (stellium) désigne un centre de gravité du thème. Les{" "}
            <Link href="/maisons-dominantes">maisons dominantes</Link> se repèrent ici.
          </p>
          <p>
            <strong>Étape 6 — Les aspects majeurs.</strong> Relevez d&apos;abord les aspects
            exacts (orbe serré) impliquant les luminaires et le maître d&apos;Ascendant. Un carré
            Soleil-Saturne exact structure plus une vie que trois trigones larges. Gardez la
            hiérarchie : <Link href="/aspects">conjonction, opposition, carré, trigone,
            sextile</Link>, avant les aspects mineurs.
          </p>
          <p>
            <strong>Étape 7 — La synthèse.</strong> Revenez à la question de départ (qui est
            cette personne ? qu&apos;est-ce qui la meut ?) et racontez le thème en trois ou quatre
            dynamiques principales, avec leurs tensions et leurs ressources. Un bon portrait
            astrologique tient en une page ; le reste est du commentaire.
          </p>
        </>
      ),
    },
    {
      id: "erreurs-frequentes",
      title: "Les erreurs fréquentes du débutant",
      body: (
        <>
          <p>
            <strong>Lire le thème comme un catalogue.</strong> Enchaîner « Soleil en Lion : vous
            êtes généreux ; Lune en Vierge : vous êtes anxieux » produit des contradictions sans
            hiérarchie. Le thème est un système : chaque position se lit dans son contexte.
          </p>
          <p>
            <strong>Dramatiser les positions « difficiles ».</strong> Saturne, Pluton, les carrés,
            la <Link href="/maisons/maison-8">Maison VIII</Link> ou la{" "}
            <Link href="/maisons/maison-12">Maison XII</Link> ne sont ni des malédictions ni des
            promesses de malheur. Les tensions d&apos;un thème sont ses moteurs : un thème sans
            carré est souvent un thème sans traction.
          </p>
          <p>
            <strong>Oublier l&apos;orbe.</strong> Un aspect à 8° d&apos;écart ne pèse pas comme un
            aspect exact. Débutant, limitez-vous à des orbes serrés (0-4°) : vous lirez moins de
            choses, mais des choses vraies.
          </p>
          <p>
            <strong>Confondre thème natal et transits.</strong> Le thème décrit une structure
            permanente ; les <Link href="/transits">transits</Link> décrivent une météo
            temporaire. « Saturne en Maison VII » n&apos;a pas le même sens selon qu&apos;il
            s&apos;agit de votre position natale ou d&apos;un passage de deux ans et demi.
          </p>
          <p>
            <strong>Chercher la prédiction avant la compréhension.</strong> Le thème astral est
            d&apos;abord un outil de connaissance de soi — c&apos;est toute la démarche de{" "}
            l&apos;<Link href="/astro-psychologie">astro-psychologie</Link>. Les techniques
            prévisionnelles viennent après, et s&apos;appuient sur cette compréhension.
          </p>
        </>
      ),
    },
    {
      id: "aller-plus-loin",
      title: "Au-delà du thème natal",
      body: (
        <>
          <p>
            Le thème natal est le socle, mais l&apos;astrologie dispose de tout un outillage qui
            le prolonge. Les <Link href="/transits">transits</Link> confrontent le ciel du jour à
            vos positions natales : c&apos;est la technique de timing la plus utilisée. La{" "}
            <Link href="/revolution-solaire">révolution solaire</Link> dresse le thème de votre
            année, d&apos;anniversaire en anniversaire. La <Link href="/synastrie">synastrie</Link>{" "}
            superpose deux thèmes pour analyser une relation — amoureuse, amicale ou
            professionnelle. Les <Link href="/noeuds-lunaires">nœuds lunaires</Link>,{" "}
            <Link href="/lilith">Lilith</Link> et les <Link href="/points-fictifs">points
            fictifs</Link> ajoutent des couches de lecture plus fines, à aborder une fois les
            fondamentaux maîtrisés.
          </p>
          <p>
            Notre conseil de progression : maîtrisez d&apos;abord les quatre briques sur votre
            propre thème, vérifiez chaque lecture contre votre expérience vécue, puis élargissez à
            deux ou trois thèmes de proches. L&apos;astrologie s&apos;apprend comme une langue :
            par la pratique régulière sur des cas réels, pas par l&apos;accumulation de
            définitions.
          </p>
        </>
      ),
    },
  ],
  faqTitle: "Questions fréquentes sur le thème astral",
  faq: [
    {
      q: "Quelle est la différence entre thème astral et horoscope ?",
      a: "L'horoscope de presse ne retient qu'une donnée : le signe solaire, partagé par un douzième de l'humanité. Le thème astral intègre les positions des 10 planètes dans les signes et les maisons, plus leurs aspects, calculés pour votre minute et votre lieu de naissance : il est propre à chaque individu.",
    },
    {
      q: "Peut-on calculer un thème astral sans heure de naissance ?",
      a: "Partiellement. Sans heure, on peut lire les planètes en signes et la plupart des aspects, ce qui donne déjà un portrait psychologique utile. Mais l'Ascendant et les maisons — toute la dimension concrète du thème — restent inaccessibles. En France, l'heure figure sur la copie intégrale de l'acte de naissance, délivrée gratuitement par la mairie de naissance.",
    },
    {
      q: "Le thème astral change-t-il au cours de la vie ?",
      a: "Non : le thème natal est fixé une fois pour toutes à la naissance. Ce qui évolue, c'est le dialogue entre ce thème et le ciel en mouvement — les transits, les révolutions solaires, les progressions. C'est ce dialogue que l'astrologie prévisionnelle étudie.",
    },
    {
      q: "Pourquoi mon signe ne me ressemble-t-il pas ?",
      a: "Parce que le signe solaire n'est qu'un élément parmi une quarantaine. Un Ascendant, une Lune ou un maître d'Ascendant très différents du Soleil peuvent dominer le portrait. C'est le cas le plus fréquent chez les personnes qui « ne se reconnaissent pas » dans leur signe.",
    },
    {
      q: "Faut-il connaître l'astronomie pour lire un thème ?",
      a: "Non. Les logiciels calculent toutes les positions à votre place. Ce qu'il faut apprendre, c'est le langage symbolique : la fonction de chaque planète, le style de chaque signe, le terrain de chaque maison et la dynamique de chaque aspect — exactement le programme des cours de ce site.",
    },
    {
      q: "Combien de temps faut-il pour apprendre à lire un thème astral ?",
      a: "Avec une méthode structurée, les fondamentaux (quatre briques + trio Soleil-Lune-Ascendant) s'acquièrent en quelques semaines de pratique régulière. La lecture fine — dignités, dominantes, synthèse — se construit sur des mois. L'essentiel est de pratiquer sur des thèmes réels dès le début.",
    },
  ],
  cta: {
    title: "Continuez le cours",
    body: "Le thème astral se comprend brique par brique. Explorez chaque famille de symboles :",
    links: [
      { href: "/planetes", label: "Les 10 planètes" },
      { href: "/signes", label: "Les 12 signes" },
      { href: "/maisons", label: "Les 12 maisons" },
      { href: "/aspects", label: "Les aspects" },
    ],
  },
};

/* ────────────────────────── EN ────────────────────────── */

const en: ThemeAstralContent = {
  meta: {
    title: "Birth Chart: Understanding and Reading Your Natal Chart",
    description:
      "What is a birth chart? Planets, signs, houses, aspects: a complete method to read your natal chart step by step.",
  },
  jsonld: {
    headline: "The Birth Chart: Understanding and Reading Your Natal Sky",
    description:
      "Complete guide to the birth chart: the four building blocks (planets, signs, houses, aspects), a step-by-step reading method, the Sun-Moon-Ascendant trio and the mistakes to avoid.",
    articleSection: "Astrology course",
  },
  breadcrumbHome: "Home",
  hero: {
    eyebrow: "Astrology course — foundational page",
    h1: "The Birth Chart",
    intro: (
      <>
        The <strong>birth chart</strong> — or natal chart — is the exact photograph of the sky at
        the precise moment and place of your birth. It is the founding document of all astrology:
        a 360° circle where the <Link href="/planetes">10 planets</Link>, the{" "}
        <Link href="/signes">12 signs</Link>, the <Link href="/maisons">12 houses</Link> and the{" "}
        <Link href="/aspects">aspects</Link> connecting them are laid out. This page gives you the
        complete method to understand it and start reading it yourself.
      </>
    ),
  },
  defBox: {
    label: "Definition",
    body: (
      <>
        A <strong>birth chart</strong> is the geocentric map of the sky drawn for a given date,
        time and place of birth. It positions the planets in the zodiac signs and in the
        astrological houses, then measures the angles (aspects) they form with each other. Unlike
        the magazine horoscope, which only keeps the Sun sign, the birth chart is unique to each
        individual: it takes about four minutes for the natal sky to change significantly.
      </>
    ),
  },
  sections: [
    {
      id: "four-blocks",
      title: "The four building blocks of the birth chart",
      body: (
        <>
          <p>
            Every chart reading rests on four families of symbols, always the same. Confusing
            them is the beginner&apos;s most common mistake; telling them apart is the first real
            step forward.
          </p>
          <p>
            <strong>1. The planets — the functions.</strong> The{" "}
            <Link href="/planetes">10 planets</Link> are the actors of the chart. Each embodies a
            psychic function: the Sun wills, the Moon feels, Mercury thinks, Venus loves, Mars
            acts, Jupiter expands, Saturn structures, and the three transpersonal planets (Uranus,
            Neptune, Pluto) connect the individual to their generation. A planet answers the
            question <em>“what?”</em>: which part of you is expressing itself.
          </p>
          <p>
            <strong>2. The signs — the styles.</strong> The{" "}
            <Link href="/signes">12 zodiac signs</Link> are the filters the planets pass through.
            The same Mars does not fight the same way in Aries (head-on) and in Pisces (by
            circumvention). The sign answers the question <em>“how?”</em>: in what style the
            energy manifests. Each sign combines an element (fire, earth, air, water) and a mode
            (cardinal, fixed, mutable).
          </p>
          <p>
            <strong>3. The houses — the terrains.</strong> The{" "}
            <Link href="/maisons">12 astrological houses</Link> divide the local sky of your birth
            into twelve areas of life: identity, money, communication, home, creativity, work,
            partnership, transformation, horizons, vocation, friendships, inner life. The house
            answers the question <em>“where?”</em>: in which sector of existence the planet
            invests its energy. This is the part of the chart that requires a precise birth time.
          </p>
          <p>
            <strong>4. The aspects — the dialogues.</strong> The{" "}
            <Link href="/aspects">aspects</Link> are the significant angles the planets form with
            each other: conjunction (0°), sextile (60°), square (90°), trine (120°), opposition
            (180°), plus a few minor aspects. They describe how the psychic functions cooperate,
            reinforce or thwart one another. A chart without aspect reading remains a list of
            positions; aspects turn it into a living system.
          </p>
        </>
      ),
    },
    {
      id: "required-data",
      title: "What you need to calculate a birth chart",
      body: (
        <>
          <p>Three pieces of data are enough, but their precision makes all the difference:</p>
          <p>
            <strong>The date of birth</strong> sets the planets&apos; positions in the signs. Slow
            planets barely move in a day; the Moon, however, crosses a sign in two and a half days
            — a date alone can leave the Moon sign ambiguous.
          </p>
          <p>
            <strong>The time of birth</strong> is the most critical piece. It determines the
            Ascendant — the sign rising on the eastern horizon — and therefore the whole system of{" "}
            <Link href="/maisons">houses</Link>, which shifts by a full sign roughly every two
            hours. Without a reliable time you can read planets in signs and their aspects, but
            not the concrete dimension of the chart. In most countries the time appears on the
            full birth certificate.
          </p>
          <p>
            <strong>The place of birth</strong> anchors the calculation geographically: latitude
            and longitude change the Ascendant and the{" "}
            <Link href="/cuspides-des-maisons">house cusps</Link>. Two twins born at the same time
            in Lille and Marseille would not have exactly the same chart.
          </p>
          <p>
            Once drawn, the chart never changes: it is your base reference. What evolves are the{" "}
            <Link href="/transits">transits</Link> — the current positions of the planets
            dialoguing with your natal positions — and derived techniques such as the{" "}
            <Link href="/revolution-solaire">solar return</Link>.
          </p>
        </>
      ),
    },
    {
      id: "fundamental-trio",
      title: "Sun, Moon, Ascendant: the fundamental trio",
      body: (
        <>
          <p>
            Faced with a full chart — ten planets, twelve houses, dozens of aspects — you always
            start with three points. They form the backbone of the personality and already take
            you far beyond the magazine horoscope.
          </p>
          <p>
            <strong>The Sun</strong> is your “official” sign, the one everyone knows. It describes
            conscious identity, will, life direction: what you are trying to become. But it is
            only a third of the story — which is precisely why your horoscope doesn&apos;t always
            sound like you.
          </p>
          <p>
            <strong>The Moon</strong> describes the inner world: emotions, security needs,
            spontaneous reactions, what soothes you. It is the part of you that expresses itself
            in intimacy, when the social persona steps back. Many people recognize themselves more
            in their Moon sign than in their Sun sign.
          </p>
          <p>
            <strong>The Ascendant</strong> is the sign that was rising in the east at the moment
            of your birth. It describes your way of approaching the world: spontaneous style,
            first impression, the energy with which you enter a room. It opens the{" "}
            <Link href="/maisons">1st house</Link> and orients the whole chart — its ruler (the
            planet governing the Ascendant sign, see <Link href="/maitrises">rulerships</Link>) is
            often the most important planet of the chart.
          </p>
          <p>
            The synthesis of these three points already gives a strikingly accurate portrait: the
            Sun for the course, the Moon for the heart, the Ascendant for the style. The rest of
            the chart nuances, sharpens, complexifies.
          </p>
        </>
      ),
    },
    {
      id: "reading-method",
      title: "How to read a birth chart: the 7-step method",
      body: (
        <>
          <p>
            There is no “automatic” reading of a chart: stacking ready-made interpretations,
            paragraph after paragraph, produces a contradictory, unreadable portrait. The method
            below goes from the general to the particular — it is the one we follow throughout
            this site&apos;s courses.
          </p>
          <p>
            <strong>Step 1 — The overview.</strong> Before any symbol, look at the shape: are the
            planets clustered or scattered? Which hemispheres, which quadrants are occupied? A
            chart concentrated in the upper houses already speaks of social and public life; a
            chart gathered below the horizon, of inner life.
          </p>
          <p>
            <strong>Step 2 — Elemental balances.</strong> Count the planets by element (fire,
            earth, air, water) and by mode (cardinal, fixed, mutable). A marked lack or excess is
            often more telling than any isolated position: a person with no planet in earth does
            not organize their life like an earth-dominant person.{" "}
            <Link href="/signes-dominants">Dominant signs</Link> refine this reading.
          </p>
          <p>
            <strong>Step 3 — The Sun / Moon / Ascendant trio</strong>, as seen above: sign, house
            and main aspects of each. This is the skeleton of the portrait.
          </p>
          <p>
            <strong>Step 4 — The Ascendant ruler.</strong> Identify the planet ruling the rising
            sign, then its position by sign, house and aspects. It shows where and how life
            concretely “plays out”.
          </p>
          <p>
            <strong>Step 5 — Angular planets and clusters.</strong> A planet glued to the
            Ascendant, Midheaven, Descendant or IC takes on particular power. Likewise, a cluster
            of three or more planets in one sign or house (stellium) marks a center of gravity of
            the chart. <Link href="/maisons-dominantes">Dominant houses</Link> are spotted here.
          </p>
          <p>
            <strong>Step 6 — Major aspects.</strong> First note the exact aspects (tight orb)
            involving the luminaries and the Ascendant ruler. An exact Sun-Saturn square
            structures a life more than three loose trines. Keep the hierarchy:{" "}
            <Link href="/aspects">conjunction, opposition, square, trine, sextile</Link>, before
            minor aspects.
          </p>
          <p>
            <strong>Step 7 — The synthesis.</strong> Return to the initial question (who is this
            person? what drives them?) and tell the chart in three or four main dynamics, with
            their tensions and resources. A good astrological portrait fits on one page; the rest
            is commentary.
          </p>
        </>
      ),
    },
    {
      id: "common-mistakes",
      title: "The beginner's common mistakes",
      body: (
        <>
          <p>
            <strong>Reading the chart like a catalogue.</strong> Stringing together “Sun in Leo:
            you are generous; Moon in Virgo: you are anxious” produces contradictions with no
            hierarchy. The chart is a system: every position is read in context.
          </p>
          <p>
            <strong>Dramatizing the “difficult” positions.</strong> Saturn, Pluto, squares, the{" "}
            <Link href="/maisons/maison-8">8th house</Link> or the{" "}
            <Link href="/maisons/maison-12">12th house</Link> are neither curses nor promises of
            misfortune. A chart&apos;s tensions are its engines: a chart without squares is often
            a chart without traction.
          </p>
          <p>
            <strong>Forgetting the orb.</strong> An aspect 8° apart does not weigh like an exact
            aspect. As a beginner, stick to tight orbs (0-4°): you will read fewer things, but
            true ones.
          </p>
          <p>
            <strong>Confusing natal chart and transits.</strong> The chart describes a permanent
            structure; <Link href="/transits">transits</Link> describe temporary weather. “Saturn
            in the 7th house” does not mean the same thing as a natal position and as a
            two-and-a-half-year passage.
          </p>
          <p>
            <strong>Seeking prediction before understanding.</strong> The birth chart is first a
            tool of self-knowledge — the whole approach of{" "}
            <Link href="/astro-psychologie">astro-psychology</Link>. Predictive techniques come
            later, and rest on that understanding.
          </p>
        </>
      ),
    },
    {
      id: "beyond-natal",
      title: "Beyond the natal chart",
      body: (
        <>
          <p>
            The natal chart is the foundation, but astrology has a whole toolkit extending it.{" "}
            <Link href="/transits">Transits</Link> confront today&apos;s sky with your natal
            positions: the most widely used timing technique. The{" "}
            <Link href="/revolution-solaire">solar return</Link> draws the chart of your year,
            birthday to birthday. <Link href="/synastrie">Synastry</Link> overlays two charts to
            analyse a relationship — romantic, friendly or professional. The{" "}
            <Link href="/noeuds-lunaires">lunar nodes</Link>, <Link href="/lilith">Lilith</Link>{" "}
            and the <Link href="/points-fictifs">fictitious points</Link> add finer layers of
            reading, to approach once the fundamentals are mastered.
          </p>
          <p>
            Our learning advice: first master the four building blocks on your own chart, check
            every reading against your lived experience, then widen to two or three charts of
            people close to you. Astrology is learned like a language: through regular practice on
            real cases, not by piling up definitions.
          </p>
        </>
      ),
    },
  ],
  faqTitle: "Frequently asked questions about the birth chart",
  faq: [
    {
      q: "What is the difference between a birth chart and a horoscope?",
      a: "The press horoscope keeps only one piece of data: the Sun sign, shared by a twelfth of humanity. The birth chart integrates the positions of the 10 planets in the signs and houses, plus their aspects, calculated for your minute and place of birth: it is unique to each individual.",
    },
    {
      q: "Can you calculate a birth chart without a birth time?",
      a: "Partially. Without a time, you can read planets in signs and most aspects, which already gives a useful psychological portrait. But the Ascendant and the houses — the chart's whole concrete dimension — remain out of reach. The time usually appears on the full birth certificate.",
    },
    {
      q: "Does the birth chart change during one's life?",
      a: "No: the natal chart is fixed once and for all at birth. What evolves is the dialogue between this chart and the moving sky — transits, solar returns, progressions. That dialogue is what predictive astrology studies.",
    },
    {
      q: "Why doesn't my sign sound like me?",
      a: "Because the Sun sign is only one element among about forty. An Ascendant, a Moon or an Ascendant ruler very different from the Sun can dominate the portrait. This is the most frequent case among people who 'don't recognize themselves' in their sign.",
    },
    {
      q: "Do you need to know astronomy to read a chart?",
      a: "No. Software calculates all the positions for you. What you need to learn is the symbolic language: each planet's function, each sign's style, each house's terrain and each aspect's dynamic — exactly the programme of this site's courses.",
    },
    {
      q: "How long does it take to learn to read a birth chart?",
      a: "With a structured method, the fundamentals (four building blocks + the Sun-Moon-Ascendant trio) can be acquired in a few weeks of regular practice. Fine reading — dignities, dominants, synthesis — is built over months. The key is to practise on real charts from the start.",
    },
  ],
  cta: {
    title: "Continue the course",
    body: "The birth chart is understood block by block. Explore each family of symbols:",
    links: [
      { href: "/planetes", label: "The 10 planets" },
      { href: "/signes", label: "The 12 signs" },
      { href: "/maisons", label: "The 12 houses" },
      { href: "/aspects", label: "The aspects" },
    ],
  },
};

/* ────────────────────────── ES ────────────────────────── */

const es: ThemeAstralContent = {
  meta: {
    title: "Carta astral: comprender y leer tu carta natal",
    description:
      "¿Qué es una carta astral? Planetas, signos, casas, aspectos: método completo para leer tu carta natal paso a paso.",
  },
  jsonld: {
    headline: "La carta astral: comprender y leer tu cielo de nacimiento",
    description:
      "Guía completa de la carta astral: los cuatro bloques (planetas, signos, casas, aspectos), el método de lectura paso a paso, el trío Sol-Luna-Ascendente y los errores que evitar.",
    articleSection: "Curso de astrología",
  },
  breadcrumbHome: "Inicio",
  hero: {
    eyebrow: "Curso de astrología — página fundamental",
    h1: "La carta astral",
    intro: (
      <>
        La <strong>carta astral</strong> — o carta natal — es la fotografía exacta del cielo en el
        momento y el lugar precisos de tu nacimiento. Es el documento fundador de toda la
        astrología: un círculo de 360° donde se reparten los{" "}
        <Link href="/planetes">10 planetas</Link>, los <Link href="/signes">12 signos</Link>, las{" "}
        <Link href="/maisons">12 casas</Link> y los <Link href="/aspects">aspectos</Link> que los
        conectan. Esta página te da el método completo para comprenderla y empezar a leerla por ti
        mismo.
      </>
    ),
  },
  defBox: {
    label: "Definición",
    body: (
      <>
        Una <strong>carta astral</strong> es el mapa geocéntrico del cielo trazado para una fecha,
        una hora y un lugar de nacimiento dados. Posiciona los planetas en los signos del zodiaco
        y en las casas astrológicas, y mide los ángulos (aspectos) que forman entre sí. A
        diferencia del horóscopo de revista, que solo retiene el signo solar, la carta astral es
        única para cada individuo: bastan unos cuatro minutos para que el cielo natal cambie de
        forma significativa.
      </>
    ),
  },
  sections: [
    {
      id: "cuatro-bloques",
      title: "Los cuatro bloques de la carta astral",
      body: (
        <>
          <p>
            Toda lectura de carta descansa sobre cuatro familias de símbolos, siempre las mismas.
            Confundirlas es el error más común del principiante; distinguirlas es el primer
            progreso real.
          </p>
          <p>
            <strong>1. Los planetas — las funciones.</strong> Los{" "}
            <Link href="/planetes">10 planetas</Link> son los actores de la carta. Cada uno
            encarna una función psíquica: el Sol quiere, la Luna siente, Mercurio piensa, Venus
            ama, Marte actúa, Júpiter expande, Saturno estructura, y los tres transpersonales
            (Urano, Neptuno, Plutón) conectan al individuo con su generación. Un planeta responde
            a la pregunta <em>«¿qué?»</em>: qué parte de ti se expresa.
          </p>
          <p>
            <strong>2. Los signos — los estilos.</strong> Los{" "}
            <Link href="/signes">12 signos del zodiaco</Link> son los filtros que atraviesan los
            planetas. Un mismo Marte no combate igual en Aries (de frente) que en Piscis
            (rodeando). El signo responde a la pregunta <em>«¿cómo?»</em>: con qué estilo se
            manifiesta la energía. Cada signo combina un elemento (fuego, tierra, aire, agua) y un
            modo (cardinal, fijo, mutable).
          </p>
          <p>
            <strong>3. Las casas — los terrenos.</strong> Las{" "}
            <Link href="/maisons">12 casas astrológicas</Link> dividen el cielo local de tu
            nacimiento en doce áreas de vida: identidad, dinero, comunicación, hogar, creatividad,
            trabajo, pareja, transformación, horizontes, vocación, amistades, vida interior. La
            casa responde a la pregunta <em>«¿dónde?»</em>: en qué sector de la existencia
            invierte el planeta su energía. Es la parte de la carta que exige una hora de
            nacimiento precisa.
          </p>
          <p>
            <strong>4. Los aspectos — los diálogos.</strong> Los{" "}
            <Link href="/aspects">aspectos</Link> son los ángulos significativos que forman los
            planetas entre sí: conjunción (0°), sextil (60°), cuadratura (90°), trígono (120°),
            oposición (180°), más algunos aspectos menores. Describen cómo las funciones psíquicas
            cooperan, se refuerzan o se contrarían. Una carta sin lectura de aspectos es una lista
            de posiciones; los aspectos la convierten en un sistema vivo.
          </p>
        </>
      ),
    },
    {
      id: "datos-necesarios",
      title: "Qué se necesita para calcular una carta astral",
      body: (
        <>
          <p>Bastan tres datos, pero su precisión marca toda la diferencia:</p>
          <p>
            <strong>La fecha de nacimiento</strong> fija la posición de los planetas en los
            signos. Los planetas lentos apenas se mueven en un día; la Luna, en cambio, atraviesa
            un signo en dos días y medio — una fecha sola puede dejar ambiguo el signo lunar.
          </p>
          <p>
            <strong>La hora de nacimiento</strong> es el dato más crítico. Determina el Ascendente
            — el signo que salía por el horizonte este — y por tanto todo el sistema de{" "}
            <Link href="/maisons">casas</Link>, que gira un signo entero aproximadamente cada dos
            horas. Sin una hora fiable se pueden leer los planetas en los signos y sus aspectos,
            pero no la dimensión concreta de la carta. La hora suele figurar en el certificado
            literal de nacimiento.
          </p>
          <p>
            <strong>El lugar de nacimiento</strong> ancla el cálculo en la geografía: latitud y
            longitud modifican el Ascendente y las{" "}
            <Link href="/cuspides-des-maisons">cúspides de las casas</Link>. Dos gemelos nacidos a
            la misma hora en Lille y en Marsella no tendrían exactamente la misma carta.
          </p>
          <p>
            Una vez trazada, la carta no cambia nunca: es tu referencia de base. Lo que
            evoluciona son los <Link href="/transits">tránsitos</Link> — las posiciones actuales
            de los planetas que dialogan con tus posiciones natales — y las técnicas derivadas
            como la <Link href="/revolution-solaire">revolución solar</Link>.
          </p>
        </>
      ),
    },
    {
      id: "trio-fundamental",
      title: "Sol, Luna, Ascendente: el trío fundamental",
      body: (
        <>
          <p>
            Ante una carta completa — diez planetas, doce casas, decenas de aspectos — se empieza
            siempre por tres puntos. Forman la osamenta de la personalidad y ya bastan para
            superar con mucho el horóscopo de revista.
          </p>
          <p>
            <strong>El Sol</strong> es tu signo «oficial», el que todos conocen. Describe la
            identidad consciente, la voluntad, la dirección vital: aquello en lo que intentas
            convertirte. Pero es solo un tercio de la historia — precisamente por eso tu horóscopo
            no siempre se parece a ti.
          </p>
          <p>
            <strong>La Luna</strong> describe el mundo interior: las emociones, las necesidades de
            seguridad, las reacciones espontáneas, lo que te calma. Es la parte de ti que se
            expresa en la intimidad, cuando el personaje social se retira. Muchas personas se
            reconocen más en su signo lunar que en su signo solar.
          </p>
          <p>
            <strong>El Ascendente</strong> es el signo que salía por el este en el momento de tu
            nacimiento. Describe tu manera de abordar el mundo: el estilo espontáneo, la primera
            impresión, la energía con la que entras en una habitación. Abre la{" "}
            <Link href="/maisons">Casa I</Link> y orienta el resto de la carta — su regente (el
            planeta que gobierna el signo del Ascendente, ver las{" "}
            <Link href="/maitrises">regencias</Link>) es a menudo el planeta más importante de la
            carta.
          </p>
          <p>
            La síntesis de estos tres puntos da ya un retrato sorprendentemente certero: el Sol
            para el rumbo, la Luna para el corazón, el Ascendente para el estilo. El resto de la
            carta matiza, precisa, complejiza.
          </p>
        </>
      ),
    },
    {
      id: "metodo-lectura",
      title: "Cómo leer una carta astral: el método en 7 pasos",
      body: (
        <>
          <p>
            No existe una lectura «automática» de una carta: acumular interpretaciones
            prefabricadas, párrafo tras párrafo, produce un retrato contradictorio e ilegible. El
            método siguiente va de lo general a lo particular — es el que seguimos en todos los
            cursos de este sitio.
          </p>
          <p>
            <strong>Paso 1 — La visión de conjunto.</strong> Antes de cualquier símbolo, mira la
            forma: ¿los planetas están agrupados o dispersos? ¿Qué hemisferios, qué cuadrantes
            están ocupados? Una carta concentrada en las casas altas habla ya de vida social y
            pública; una carta reunida bajo el horizonte, de vida interior.
          </p>
          <p>
            <strong>Paso 2 — Los equilibrios elementales.</strong> Cuenta los planetas por
            elemento (fuego, tierra, aire, agua) y por modo (cardinal, fijo, mutable). Una
            carencia o un exceso marcados dicen a menudo más que cualquier posición aislada: una
            persona sin planetas en tierra no se organiza como una persona de dominante tierra.
            Los <Link href="/signes-dominants">signos dominantes</Link> afinan esta lectura.
          </p>
          <p>
            <strong>Paso 3 — El trío Sol / Luna / Ascendente</strong>, como se vio arriba: signo,
            casa y aspectos principales de cada uno. Es el esqueleto del retrato.
          </p>
          <p>
            <strong>Paso 4 — El regente del Ascendente.</strong> Identifica el planeta que
            gobierna el signo ascendente, y su posición por signo, casa y aspectos. Indica dónde y
            cómo la vida «se juega» concretamente.
          </p>
          <p>
            <strong>Paso 5 — Los planetas angulares y los cúmulos.</strong> Un planeta pegado al
            Ascendente, al Medio Cielo, al Descendente o al Fondo del Cielo adquiere una potencia
            particular. Igualmente, un cúmulo de tres o más planetas en un signo o una casa
            (stellium) señala un centro de gravedad de la carta. Las{" "}
            <Link href="/maisons-dominantes">casas dominantes</Link> se detectan aquí.
          </p>
          <p>
            <strong>Paso 6 — Los aspectos mayores.</strong> Anota primero los aspectos exactos
            (orbe estrecho) que implican a las luminarias y al regente del Ascendente. Una
            cuadratura Sol-Saturno exacta estructura más una vida que tres trígonos amplios.
            Mantén la jerarquía: <Link href="/aspects">conjunción, oposición, cuadratura,
            trígono, sextil</Link>, antes que los aspectos menores.
          </p>
          <p>
            <strong>Paso 7 — La síntesis.</strong> Vuelve a la pregunta inicial (¿quién es esta
            persona? ¿qué la mueve?) y cuenta la carta en tres o cuatro dinámicas principales, con
            sus tensiones y sus recursos. Un buen retrato astrológico cabe en una página; el resto
            es comentario.
          </p>
        </>
      ),
    },
    {
      id: "errores-frecuentes",
      title: "Los errores frecuentes del principiante",
      body: (
        <>
          <p>
            <strong>Leer la carta como un catálogo.</strong> Encadenar «Sol en Leo: eres generoso;
            Luna en Virgo: eres ansioso» produce contradicciones sin jerarquía. La carta es un
            sistema: cada posición se lee en su contexto.
          </p>
          <p>
            <strong>Dramatizar las posiciones «difíciles».</strong> Saturno, Plutón, las
            cuadraturas, la <Link href="/maisons/maison-8">Casa VIII</Link> o la{" "}
            <Link href="/maisons/maison-12">Casa XII</Link> no son maldiciones ni promesas de
            desgracia. Las tensiones de una carta son sus motores: una carta sin cuadraturas es a
            menudo una carta sin tracción.
          </p>
          <p>
            <strong>Olvidar el orbe.</strong> Un aspecto con 8° de separación no pesa como un
            aspecto exacto. Como principiante, limítate a orbes estrechos (0-4°): leerás menos
            cosas, pero cosas verdaderas.
          </p>
          <p>
            <strong>Confundir carta natal y tránsitos.</strong> La carta describe una estructura
            permanente; los <Link href="/transits">tránsitos</Link> describen un clima temporal.
            «Saturno en Casa VII» no significa lo mismo como posición natal que como un paso de
            dos años y medio.
          </p>
          <p>
            <strong>Buscar la predicción antes que la comprensión.</strong> La carta astral es
            ante todo una herramienta de autoconocimiento — todo el enfoque de la{" "}
            <Link href="/astro-psychologie">astropsicología</Link>. Las técnicas predictivas
            vienen después, y se apoyan en esa comprensión.
          </p>
        </>
      ),
    },
    {
      id: "mas-alla",
      title: "Más allá de la carta natal",
      body: (
        <>
          <p>
            La carta natal es el fundamento, pero la astrología dispone de todo un utillaje que la
            prolonga. Los <Link href="/transits">tránsitos</Link> confrontan el cielo del día con
            tus posiciones natales: la técnica de timing más utilizada. La{" "}
            <Link href="/revolution-solaire">revolución solar</Link> traza la carta de tu año, de
            cumpleaños en cumpleaños. La <Link href="/synastrie">sinastría</Link> superpone dos
            cartas para analizar una relación — amorosa, amistosa o profesional. Los{" "}
            <Link href="/noeuds-lunaires">nodos lunares</Link>, <Link href="/lilith">Lilith</Link>{" "}
            y los <Link href="/points-fictifs">puntos ficticios</Link> añaden capas de lectura más
            finas, que conviene abordar una vez dominados los fundamentos.
          </p>
          <p>
            Nuestro consejo de progresión: domina primero los cuatro bloques sobre tu propia
            carta, verifica cada lectura contra tu experiencia vivida, y amplía luego a dos o tres
            cartas de personas cercanas. La astrología se aprende como un idioma: con práctica
            regular sobre casos reales, no acumulando definiciones.
          </p>
        </>
      ),
    },
  ],
  faqTitle: "Preguntas frecuentes sobre la carta astral",
  faq: [
    {
      q: "¿Cuál es la diferencia entre carta astral y horóscopo?",
      a: "El horóscopo de prensa retiene un solo dato: el signo solar, compartido por una doceava parte de la humanidad. La carta astral integra las posiciones de los 10 planetas en los signos y las casas, más sus aspectos, calculados para tu minuto y lugar de nacimiento: es única para cada individuo.",
    },
    {
      q: "¿Se puede calcular una carta astral sin hora de nacimiento?",
      a: "Parcialmente. Sin hora se pueden leer los planetas en los signos y la mayoría de los aspectos, lo que ya da un retrato psicológico útil. Pero el Ascendente y las casas — toda la dimensión concreta de la carta — quedan inaccesibles. La hora suele figurar en el certificado literal de nacimiento.",
    },
    {
      q: "¿La carta astral cambia a lo largo de la vida?",
      a: "No: la carta natal queda fijada de una vez por todas en el nacimiento. Lo que evoluciona es el diálogo entre esa carta y el cielo en movimiento — tránsitos, revoluciones solares, progresiones. Ese diálogo es lo que estudia la astrología predictiva.",
    },
    {
      q: "¿Por qué mi signo no se parece a mí?",
      a: "Porque el signo solar es solo un elemento entre unos cuarenta. Un Ascendente, una Luna o un regente del Ascendente muy distintos del Sol pueden dominar el retrato. Es el caso más frecuente entre quienes «no se reconocen» en su signo.",
    },
    {
      q: "¿Hace falta saber astronomía para leer una carta?",
      a: "No. Los programas calculan todas las posiciones por ti. Lo que hay que aprender es el lenguaje simbólico: la función de cada planeta, el estilo de cada signo, el terreno de cada casa y la dinámica de cada aspecto — exactamente el programa de los cursos de este sitio.",
    },
    {
      q: "¿Cuánto se tarda en aprender a leer una carta astral?",
      a: "Con un método estructurado, los fundamentos (cuatro bloques + trío Sol-Luna-Ascendente) se adquieren en unas semanas de práctica regular. La lectura fina — dignidades, dominantes, síntesis — se construye en meses. Lo esencial es practicar con cartas reales desde el principio.",
    },
  ],
  cta: {
    title: "Continúa el curso",
    body: "La carta astral se comprende bloque a bloque. Explora cada familia de símbolos:",
    links: [
      { href: "/planetes", label: "Los 10 planetas" },
      { href: "/signes", label: "Los 12 signos" },
      { href: "/maisons", label: "Las 12 casas" },
      { href: "/aspects", label: "Los aspectos" },
    ],
  },
};

export const themeAstralContent: Record<SeoLocale, ThemeAstralContent> = { fr, en, es };
