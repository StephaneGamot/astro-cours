import type { ReactNode } from "react";
import type { SeoLocale } from "@/lib/seo";

/* ====================================================================
   À propos — contenu localisé (fr / en / es)
   Les clés logiques (chapitres, couleurs, icônes) restent identiques ;
   seuls les textes sont traduits.
   ==================================================================== */

export type AProposContent = {
  meta: { title: string; description: string };
  jsonld: { name: string; description: string };
  badge: string;
  h1: { before: string; highlight: string; after: string };
  intro: ReactNode;
  stats: { value: string; label: string }[];
  chapters: {
    label: string;
    title: string;
    body: ReactNode;
  }[];
  authorsIntro: ReactNode;
  authors: { name: string; note: string }[];
  quote: string;
  quoteAuthor: string;
};

/* ============================== FR ============================== */
const fr: AProposContent = {
  meta: {
    title: "À propos : plus de 40 ans d'astrologie",
    description:
      "Découvrez le parcours de Stéphane Gamot, passionné d'astrologie depuis plus de 40 ans : de la mythologie grecque à une pratique rigoureuse et pédagogique.",
  },
  jsonld: {
    name: "À propos d'Astro Cours",
    description:
      "Découvrez le parcours de Stéphane Gamot, passionné d'astrologie depuis plus de 40 ans : de la mythologie grecque à une pratique rigoureuse et pédagogique.",
  },
  badge: "Le passeur",
  h1: { before: "Plus de ", highlight: "quarante ans", after: " de passion" },
  intro: (
    <>
      Un chemin qui mène de la mythologie des dieux anciens à&nbsp;une astrologie rigoureuse, vivante
      et transmissible.
    </>
  ),
  stats: [
    { value: "40+", label: "ans de pratique" },
    { value: "3", label: "ans de formation" },
    { value: "5", label: "auteurs de référence" },
  ],
  chapters: [
    {
      label: "L’éveil",
      title: "Quand les dieux portaient le nom des planètes",
      body: (
        <>
          <p>
            Tout commence à l&apos;âge de dix ans, par un émerveillement simple&nbsp;: la mythologie
            grecque et romaine. Zeus, Arès, Aphrodite, Hermès… Derrière chaque récit se cache une
            planète, derrière chaque planète un archétype.
          </p>
          <p>
            Sans le savoir encore, l&apos;enfant qui dévore ces mythes pose les premières pierres
            d&apos;un langage qu&apos;il ne cessera plus d&apos;approfondir — un fil rouge qui court
            depuis l&apos;Antiquité jusqu&apos;à l&apos;astrologie d&apos;aujourd&apos;hui.
          </p>
        </>
      ),
    },
    {
      label: "La rencontre",
      title: "Les livres qui trouvent leur lecteur",
      body: (
        <>
          <p>
            À l&apos;adolescence, les premiers ouvrages d&apos;astrologie arrivent presque
            d&apos;eux-mêmes — offerts, trouvés, découverts au hasard d&apos;une étagère. Ce qui est
            sûr, c&apos;est que chaque livre en appelle un autre, et que la curiosité se transforme
            vite en passion méthodique.
          </p>
          <p>
            Premières lectures, premières interprétations, premiers thèmes montés à la main&nbsp;:
            l&apos;astrologie cesse d&apos;être un sujet de fascination pour devenir une pratique
            quotidienne.
          </p>
        </>
      ),
    },
    {
      label: "La formation",
      title: "Trois années auprès de Jean-Marie Michiels",
      body: (
        <>
          <p>
            Vient ensuite le temps de la rigueur. Pendant trois ans, Stéphane suit la formation
            dispensée par{" "}
            <strong className="text-text/90">Jean-Marie Michiels</strong>, astrologue, chercheur et
            pédagogue belge reconnu. Fondateur d&apos;une plateforme d&apos;enseignement complète,
            Michiels enseigne aussi bien l&apos;astrologie natale que l&apos;astrologie médicale,
            horaire et prévisionnelle.
          </p>
          <p>
            Ce parcours structuré consolide les bases, affine la méthode d&apos;interprétation et
            ancre la conviction que l&apos;astrologie, pour être crédible, doit s&apos;enseigner avec
            clarté, exigence et honnêteté intellectuelle.
          </p>
        </>
      ),
    },
    {
      label: "Les racines",
      title: "Des maîtres à penser",
      body: (
        <p>
          Au fil des années, certains auteurs deviennent des compagnons de route. Leurs ouvrages, lus
          et relus, forment le socle d&apos;une pratique à la fois traditionnelle et ouverte&nbsp;:
        </p>
      ),
    },
    {
      label: "La vision",
      title: "L’esprit d’Astro Cours",
      body: (
        <>
          <p>
            Astro Cours est né de cette conviction&nbsp;: l&apos;astrologie mérite d&apos;être
            transmise avec la même rigueur qu&apos;elle demande à être pratiquée. Pas de prédictions
            sensationnelles ni de promesses invérifiables — une méthode pédagogique claire et
            structurée, des repères solides et des exemples concrets.
          </p>
          <p>
            L&apos;objectif est simple&nbsp;: donner à chacun les clés pour comprendre le langage du
            ciel par lui-même. Apprendre à lire un thème, saisir les cycles planétaires, relier les
            symboles à la vie réelle — sans dépendre d&apos;un interprète.
          </p>
          <p>
            C&apos;est cette exigence, forgée par plus de quarante ans de pratique, de formation et de
            lectures, qui guide chaque page de ce site.
          </p>
        </>
      ),
    },
  ],
  authorsIntro: null,
  authors: [
    { name: "André Barbault", note: "Pionnier de l’astrologie mondiale et prévisionnelle" },
    { name: "Liz Greene", note: "Pont entre Jung et le thème natal, astrologie psychologique" },
    { name: "Denis Labouré", note: "Historien et gardien de la tradition astrologique classique" },
    { name: "Georges Antarès", note: "Astrologue belge, auteur du Manuel pratique d’astrologie" },
    {
      name: "Henri-Joseph Gouchon",
      note: "Référence technique, auteur du Dictionnaire astrologique",
    },
  ],
  quote: "« L'astrologie est un langage. Si vous comprenez ce langage, le ciel vous parle. »",
  quoteAuthor: "— Dane Rudhyar",
};

/* ============================== EN ============================== */
const en: AProposContent = {
  meta: {
    title: "About: more than 40 years of astrology",
    description:
      "Discover the journey of Stéphane Gamot, passionate about astrology for more than 40 years: from Greek mythology to a rigorous, teaching-focused practice.",
  },
  jsonld: {
    name: "About Astro Cours",
    description:
      "Discover the journey of Stéphane Gamot, passionate about astrology for more than 40 years: from Greek mythology to a rigorous, teaching-focused practice.",
  },
  badge: "The guide",
  h1: { before: "More than ", highlight: "forty years", after: " of passion" },
  intro: (
    <>
      A path that leads from the mythology of the ancient gods to a rigorous, living and transmissible
      astrology.
    </>
  ),
  stats: [
    { value: "40+", label: "years of practice" },
    { value: "3", label: "years of training" },
    { value: "5", label: "reference authors" },
  ],
  chapters: [
    {
      label: "The awakening",
      title: "When the gods bore the names of the planets",
      body: (
        <>
          <p>
            It all begins at the age of ten, with a simple sense of wonder: Greek and Roman mythology.
            Zeus, Ares, Aphrodite, Hermes… Behind every tale hides a planet, and behind every planet an
            archetype.
          </p>
          <p>
            Without knowing it yet, the child who devours these myths is laying the first stones of a
            language he will never stop deepening — a common thread running from Antiquity all the way
            to today&apos;s astrology.
          </p>
        </>
      ),
    },
    {
      label: "The encounter",
      title: "The books that find their reader",
      body: (
        <>
          <p>
            In adolescence, the first astrology books arrive almost on their own — given, found,
            stumbled upon by chance on a shelf. What is certain is that each book calls for another,
            and curiosity quickly turns into a methodical passion.
          </p>
          <p>
            First readings, first interpretations, first charts drawn by hand: astrology stops being a
            subject of fascination and becomes a daily practice.
          </p>
        </>
      ),
    },
    {
      label: "The training",
      title: "Three years with Jean-Marie Michiels",
      body: (
        <>
          <p>
            Then comes the time for rigour. For three years, Stéphane followed the course taught by{" "}
            <strong className="text-text/90">Jean-Marie Michiels</strong>, a respected Belgian
            astrologer, researcher and teacher. Founder of a complete teaching platform, Michiels
            teaches natal astrology as well as medical, horary and predictive astrology.
          </p>
          <p>
            This structured path consolidates the foundations, refines the interpretation method and
            anchors the conviction that astrology, to be credible, must be taught with clarity, high
            standards and intellectual honesty.
          </p>
        </>
      ),
    },
    {
      label: "The roots",
      title: "Guiding masters",
      body: (
        <p>
          Over the years, certain authors become companions on the road. Their works, read and reread,
          form the bedrock of a practice that is both traditional and open:
        </p>
      ),
    },
    {
      label: "The vision",
      title: "The spirit of Astro Cours",
      body: (
        <>
          <p>
            Astro Cours was born of this conviction: astrology deserves to be passed on with the same
            rigour it demands to be practised. No sensational predictions, no unverifiable promises — a
            clear, structured teaching method, solid landmarks and concrete examples.
          </p>
          <p>
            The goal is simple: to give everyone the keys to understand the language of the sky for
            themselves. Learning to read a chart, grasping the planetary cycles, connecting the symbols
            to real life — without depending on an interpreter.
          </p>
          <p>
            It is this demanding standard, forged by more than forty years of practice, training and
            reading, that guides every page of this site.
          </p>
        </>
      ),
    },
  ],
  authorsIntro: null,
  authors: [
    { name: "André Barbault", note: "Pioneer of mundane and predictive astrology" },
    { name: "Liz Greene", note: "Bridge between Jung and the natal chart, psychological astrology" },
    { name: "Denis Labouré", note: "Historian and guardian of the classical astrological tradition" },
    { name: "Georges Antarès", note: "Belgian astrologer, author of the Practical Manual of Astrology" },
    {
      name: "Henri-Joseph Gouchon",
      note: "Technical reference, author of the Astrological Dictionary",
    },
  ],
  quote: "“Astrology is a language. If you understand this language, the sky speaks to you.”",
  quoteAuthor: "— Dane Rudhyar",
};

/* ============================== ES ============================== */
const es: AProposContent = {
  meta: {
    title: "Acerca de: más de 40 años de astrología",
    description:
      "Descubre la trayectoria de Stéphane Gamot, apasionado por la astrología desde hace más de 40 años: de la mitología griega a una práctica rigurosa.",
  },
  jsonld: {
    name: "Acerca de Astro Cours",
    description:
      "Descubre la trayectoria de Stéphane Gamot, apasionado por la astrología desde hace más de 40 años: de la mitología griega a una práctica rigurosa.",
  },
  badge: "El transmisor",
  h1: { before: "Más de ", highlight: "cuarenta años", after: " de pasión" },
  intro: (
    <>
      Un camino que lleva de la mitología de los dioses antiguos a una astrología rigurosa, viva y
      transmisible.
    </>
  ),
  stats: [
    { value: "40+", label: "años de práctica" },
    { value: "3", label: "años de formación" },
    { value: "5", label: "autores de referencia" },
  ],
  chapters: [
    {
      label: "El despertar",
      title: "Cuando los dioses llevaban el nombre de los planetas",
      body: (
        <>
          <p>
            Todo comienza a los diez años, con un asombro sencillo: la mitología griega y romana. Zeus,
            Ares, Afrodita, Hermes… Detrás de cada relato se esconde un planeta, y detrás de cada
            planeta, un arquetipo.
          </p>
          <p>
            Sin saberlo todavía, el niño que devora estos mitos coloca las primeras piedras de un
            lenguaje que nunca dejará de profundizar — un hilo conductor que recorre desde la Antigüedad
            hasta la astrología de hoy.
          </p>
        </>
      ),
    },
    {
      label: "El encuentro",
      title: "Los libros que encuentran a su lector",
      body: (
        <>
          <p>
            En la adolescencia, los primeros libros de astrología llegan casi por sí solos — regalados,
            encontrados, descubiertos al azar en una estantería. Lo que es seguro es que cada libro
            llama a otro, y que la curiosidad se transforma pronto en una pasión metódica.
          </p>
          <p>
            Primeras lecturas, primeras interpretaciones, primeras cartas levantadas a mano: la
            astrología deja de ser un tema de fascinación para convertirse en una práctica diaria.
          </p>
        </>
      ),
    },
    {
      label: "La formación",
      title: "Tres años junto a Jean-Marie Michiels",
      body: (
        <>
          <p>
            Llega después el tiempo del rigor. Durante tres años, Stéphane sigue la formación impartida
            por{" "}
            <strong className="text-text/90">Jean-Marie Michiels</strong>, astrólogo, investigador y
            pedagogo belga reconocido. Fundador de una plataforma de enseñanza completa, Michiels enseña
            tanto la astrología natal como la astrología médica, horaria y predictiva.
          </p>
          <p>
            Esta trayectoria estructurada consolida las bases, afina el método de interpretación y
            arraiga la convicción de que la astrología, para ser creíble, debe enseñarse con claridad,
            exigencia y honestidad intelectual.
          </p>
        </>
      ),
    },
    {
      label: "Las raíces",
      title: "Maestros del pensamiento",
      body: (
        <p>
          Con el paso de los años, algunos autores se convierten en compañeros de camino. Sus obras,
          leídas y releídas, forman la base de una práctica a la vez tradicional y abierta:
        </p>
      ),
    },
    {
      label: "La visión",
      title: "El espíritu de Astro Cours",
      body: (
        <>
          <p>
            Astro Cours nació de esta convicción: la astrología merece transmitirse con el mismo rigor
            que exige al practicarse. Sin predicciones sensacionalistas ni promesas inverificables — un
            método pedagógico claro y estructurado, referencias sólidas y ejemplos concretos.
          </p>
          <p>
            El objetivo es simple: dar a cada persona las claves para comprender el lenguaje del cielo
            por sí misma. Aprender a leer una carta, captar los ciclos planetarios, vincular los
            símbolos con la vida real — sin depender de un intérprete.
          </p>
          <p>
            Es esta exigencia, forjada por más de cuarenta años de práctica, formación y lecturas, la
            que guía cada página de este sitio.
          </p>
        </>
      ),
    },
  ],
  authorsIntro: null,
  authors: [
    { name: "André Barbault", note: "Pionero de la astrología mundial y predictiva" },
    { name: "Liz Greene", note: "Puente entre Jung y la carta natal, astrología psicológica" },
    { name: "Denis Labouré", note: "Historiador y guardián de la tradición astrológica clásica" },
    { name: "Georges Antarès", note: "Astrólogo belga, autor del Manual práctico de astrología" },
    {
      name: "Henri-Joseph Gouchon",
      note: "Referencia técnica, autor del Diccionario astrológico",
    },
  ],
  quote: "«La astrología es un lenguaje. Si comprendes este lenguaje, el cielo te habla.»",
  quoteAuthor: "— Dane Rudhyar",
};

export const aProposContent: Record<SeoLocale, AProposContent> = { fr, en, es };
