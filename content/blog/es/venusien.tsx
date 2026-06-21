import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import Image from "next/image";
import { AUTHOR_PERSON, PUBLISHER_ORG } from "@/lib/seo";
import VenusienImage from "@/public/images/blog/venus1.webp";
import VenusienImage2 from "@/public/images/blog/venus2.webp";

export const meta = {
  slug: "venusien",
  title:
    "El Venusiano: esteta, amante y artista",
  description:
    "Retrato astrológico del Venusiano: encanto, amor, belleza, arte, armonía, seducción, musa, sirena y la Venusiana. Explora este perfil en tu carta.",
  date: "2026-04-04",
  tags: [
    "Vénus",
    "vénusien",
    "portrait astrologique",
    "amour",
    "beauté",
    "thème astral",
    "psychologie astrologique",
    "séduction",
    "art",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/venus2.webp",
};

function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-rose-300">
      <span
        className="h-1.5 w-1.5 animate-pulse rounded-full bg-rose-300"
        aria-hidden="true"
      />
      {children}
    </span>
  );
}

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-6 flex items-center font-serif text-3xl font-light text-white md:text-4xl">
      <span
        className="mr-4 block h-px w-8 bg-gradient-to-r from-rose-400/60 to-transparent"
        aria-hidden="true"
      />
      {children}
    </h2>
  );
}

function H3({ children }: { children: ReactNode }) {
  return <h3 className="font-serif text-2xl font-medium text-white/90">{children}</h3>;
}

function Callout({
  tone = "note",
  title,
  children,
}: {
  tone?: "note" | "warn" | "ok";
  title: string;
  children: ReactNode;
}) {
  const styles = {
    warn: {
      box: "border-amber-500/30 bg-amber-500/10 shadow-[0_0_30px_rgba(245,158,11,0.05)]",
      icon: "text-amber-400",
      svg: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
    },
    ok: {
      box: "border-emerald-500/30 bg-emerald-500/10 shadow-[0_0_30px_rgba(16,185,129,0.05)]",
      icon: "text-emerald-400",
      svg: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    note: {
      box: "border-rose-500/30 bg-rose-500/10 shadow-[0_0_30px_rgba(244,114,182,0.05)]",
      icon: "text-rose-300",
      svg: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  };

  const current = styles[tone];

  return (
    <aside
      aria-label={title}
      className={`relative overflow-hidden rounded-2xl border p-6 backdrop-blur-md ${current.box}`}
    >
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-current opacity-30 to-transparent" />
      <div className={`mb-3 flex items-center gap-3 font-serif text-lg font-medium ${current.icon}`}>
        {current.svg}
        <span>{title}</span>
      </div>
      <div className="space-y-3 text-sm leading-relaxed text-white/80 md:text-base">
        {children}
      </div>
    </aside>
  );
}

function Card({
  title,
  children,
  subtitle,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-md transition-colors hover:bg-white/[0.05]">
      <div>
        <H3>{title}</H3>
        {subtitle && <p className="mt-2 text-sm text-white/50">{subtitle}</p>}
      </div>
      <div className="mt-5 space-y-4 text-sm leading-relaxed text-white/80 md:text-base">
        {children}
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-sm transition-all hover:border-rose-300/30">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-300/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <p className="text-xs uppercase tracking-widest text-white/50">{label}</p>
      <p className="mt-2 font-serif text-xl text-white/90">{value}</p>
    </div>
  );
}

function Divider() {
  return <hr className="my-12 border-t border-white/10" aria-hidden="true" />;
}

function TableRow({
  title,
  effect,
  reading,
}: {
  title: string;
  effect: string;
  reading: string;
}) {
  return (
    <div className="group grid grid-cols-1 border-b border-white/10 transition-colors hover:bg-rose-300/[0.03] md:grid-cols-3">
      <div className="p-4 font-serif text-lg text-rose-200/90">{title}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{effect}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{reading}</div>
    </div>
  );
}

export default function VenusienPost() {
  const glow = getGlowFromTags(meta.tags);

  return (
    <article className="mx-auto max-w-4xl space-y-12 pb-20 pt-8 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: meta.title,
              description: meta.description,
              image: `https://www.astro-cours.com${meta.cover}`,
              datePublished: `${meta.date}T12:00:00Z`,
              dateModified: `${meta.date}T12:00:00Z`,
              author: AUTHOR_PERSON,
              publisher: PUBLISHER_ORG,
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `https://www.astro-cours.com/blog/${meta.slug}`,
              },
              inLanguage: "es",
              keywords: meta.tags.join(", "),
              articleSection: "Astrología",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué es un Venusiano en astrología?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "El Venusiano es un tipo planetario en quien Venus domina la carta natal. Se caracteriza por un sentido estético refinado, un encanto natural, una búsqueda constante de armonía y una necesidad profunda de amor y belleza en todas las esferas de su vida.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué profesiones convienen a una dominante de Venus?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Una dominante de Venus florece en las artes, la moda, el diseño, la diplomacia, la gastronomía, la estética, el lujo, la joyería, las relaciones públicas y todas las profesiones donde hay que embellecer, conectar y crear armonía.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué riesgos hay con una Venus afligida?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Una Venus afligida en la carta natal puede generar pereza, celos, dependencia afectiva, manipulación sentimental y complacencia, transformando la búsqueda del placer en un hedonismo destructivo.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo saber si soy Venusiano?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Probablemente eres Venusiano si Venus es angular en tu carta (en conjunción al Ascendente, al Medio Cielo, al Descendente o al Fondo del Cielo), si está en Tauro o en Libra, si recibe trígonos o sextiles armoniosos, o si tienes un cúmulo planetario en Tauro o en Libra.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(244,114,182,0.12)] aspect-[7/3]">
        <Image
          src={VenusienImage}
          alt="Retrato simbólico del temperamento venusiano en astrología"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>

      <header className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
        <div
          className={`pointer-events-none absolute -right-24 -top-24 h-[500px] w-[500px] rounded-full opacity-30 mix-blend-screen blur-[100px] ${glow}`}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-rose-300/5 blur-[80px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-rose-300/5 via-transparent to-black/50"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <Kicker>Venus • belleza • amor • arte • armonía</Kicker>

          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">


            <div className="flex flex-wrap gap-3 text-sm text-white/70">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                Lectura intermedia
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                Retrato psicológico
              </span>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-rose-400/30 bg-rose-400/10 p-5 shadow-[0_0_30px_rgba(251,113,133,0.06)]">
            <p className="text-sm font-medium text-rose-300 mb-2">Definición</p>
            <p className="text-sm leading-relaxed text-white/80 sm:text-base">
              El <strong>Venusiano en astrología</strong> designa a un individuo en quien <Link href="/planetes/venus" className="text-rose-300 underline decoration-rose-300/30 hover:decoration-rose-300/60 transition-colors">Venus</Link> ocupa una posición dominante en la <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="text-rose-300 underline decoration-rose-300/30 hover:decoration-rose-300/60 transition-colors">carta natal</Link> (angular, bien aspectada, en Tauro o Libra). Se distingue por un sentido estético refinado, un poderoso magnetismo afectivo y una necesidad profunda de armonía en todas las esferas de su vida.
            </p>
          </div>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            ¿Tienes a <strong>Venus dominante</strong> en tu carta natal y la belleza, el amor y la armonía guían cada una de tus decisiones? Este magnetismo afectivo es un don raro, pero esconde un reverso: dependencia de la mirada ajena, pereza seductora, huida ante los conflictos. Este retrato completo del <strong>temperamento venusiano</strong> — psicología, carrera, amor, morfopsicología — explora las múltiples facetas de esta dominante planetaria, del arquetipo de Afrodita a la trampa de la complacencia.
          </p>

          <div className="mt-8 border-t border-white/5 pt-6">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-3" aria-label="Puntos clave del retrato venusiano">
        <Stat label="Fuerza central" value="Encanto y armonía" />
        <Stat label="Terreno natural" value="Amor y belleza" />
        <Stat label="Sombra principal" value="Pereza y hedonismo" />
      </section>

      <section className="space-y-6">
        <H2>La inteligencia venusiana: sensibilidad estética y pensamiento armonioso</H2>

        <Card title="El intelecto">
          <p>
            La antigua tradición astrológica a veces ha sido dura con el intelecto del Venusiano, juzgándolo ligero o perezoso. Es hora de restablecer la verdad: el Venusiano no carece de inteligencia, posee una inteligencia estética y emocional.
          </p>
          <p>
            Allí donde el Saturniano sobresale por el esfuerzo y la disciplina, el Venusiano funciona según el "principio del placer". En los bancos de la escuela, las ciencias exactas, la aridez de las matemáticas superiores o los trabajos de largo aliento lo aburren profundamente. ¿Por qué? Porque, para asimilar una información, el Venusiano necesita que sea bella, armoniosa o ligada a lo humano.
          </p>
          <p>
            Muy pronto, sus estudios pueden verse "parasitados" por lo que de verdad le importa: el arte, la música y, sobre todo, sus primeros enamoramientos. El Venusiano es un epicúreo del espíritu. Si debe hacer un esfuerzo intelectual, brillará con mil luces en ámbitos creativos: la historia del arte, la literatura romántica, la música, el diseño o las relaciones públicas. Comprende el mundo a través de sus sentidos y sus emociones, lo que lo convierte en un diplomático nato, dotado de una finura psicológica temible.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>El Venusiano en sociedad: encanto, seducción y arte de agradar</H2>

        <Card title="La vida social">
          <p>
            En sociedad, el Venusiano es una bendición. Jovial, optimista, fundamentalmente simpático, es el cemento que une a los grupos.
          </p>
          <p>
            La soledad es su peor pesadilla. Tiene una necesidad vital de estar rodeado, de organizar reuniones, cenas o salidas. ¡Y todo el mundo lo reclama! Desde el primer contacto, inspira simpatía gracias a un aura de dulzura e indulgencia.
          </p>
          <p>
            El Venusiano siente un horror sagrado por los conflictos. Es el gran pacifista del zodíaco. Detesta las discusiones acaloradas, las voces que se alzan y los ambientes tensos. Ante la agresividad, no responderá con violencia (como Marte), sino con encanto, conciliación o, en el peor de los casos, con la huida. Siempre dispuesto a ayudar, perdona con facilidad las debilidades ajenas porque él mismo es perfectamente consciente de las suyas.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>El Venusiano en el amor: romanticismo, sensualidad e ideal de belleza</H2>

        <Card title="El amor">
          <p>
            Entremos en el dominio de excelencia del Venusiano: la vida sentimental. Es el campeón indiscutible del amor y la seducción.
          </p>
          <p>
            El Venusiano solo vive por y para el amor. Desde la adolescencia, sus aventuras son precoces y numerosas. Está literalmente intoxicado por el escalofrío del romance. En cuanto se cruza con alguien que responde a su ideal de belleza (física o moral), no puede evitar entrar en un juego de seducción, aunque no tenga ninguna posibilidad de prosperar o aunque la persona no esté libre.
          </p>
          <p>
            El desafío de la fidelidad: el Venusiano está enamorado del Amor. Por ello, comprometerse con una fidelidad ciega y eterna es su mayor desafío kármico. Si se aburre en su pareja o se siente desatendido, las tentaciones exteriores ("las escapadas al contrato") son frecuentes. Sin embargo, la firma venusiana es insolentemente afortunada: dotado de un tacto infinito y huyendo de los dramas, a menudo logra preservar su hogar de las tormentas que otros signos no sabrían evitar. Si encuentra muy pronto a la esposa o al esposo de sus sueños — alguien que sepa tranquilizarlo, admirarlo y mantener viva la llama — se convertirá en la pareja más tierna y entregada que exista.
          </p>
        </Card>
      </section>

       <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(244,114,182,0.12)] aspect-[7/3]">
        <Image
          src={VenusienImage2}
          alt="Retrato de la diosa Venus en astrología"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>

      <section className="space-y-6">
        <H2>Profesiones del Venusiano: ¿qué carreras para una dominante de Venus?</H2>

        <Card title="La vocación">
          <p>
            Para que el Venusiano triunfe en su vida profesional, hay una regla de oro: no obligarlo nunca a tareas ingratas, sucias, violentas o hipercompetitivas. La dureza del mundo de los negocios o la política partidista tiende a aplastarlo.
          </p>
          <p>
            Necesita un entorno de trabajo "limpio", ligero, estético o centrado en el bienestar ajeno. Encontrará un éxito brillante y a menudo fácil (porque su red de contactos es inmensa) en:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Las profesiones de la belleza y la moda: alta costura, cosmética, peluquería, decoración de interiores, perfumería.</li>
            <li>El vínculo social: relaciones públicas, recursos humanos, agencias de viajes, eventos, hostelería de lujo.</li>
            <li>Las artes y la escena: la actuación, el cine, el canto, la música. (La práctica totalidad de los iconos del cine y la música poseen una poderosa dominante venusiana en su carta natal.)</li>
          </ul>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Venus afligida en la carta natal: pereza, celos y manipulación</H2>

        <Callout tone="warn" title="La sombra de Venus">
          <p>
            Cuando la energía de Venus se corrompe por aspectos difíciles (en especial con Saturno, Marte o Júpiter), la búsqueda del placer se transforma en hedonismo destructivo y en ociosidad.
          </p>
          <p>
            El Venusiano disonante se desliza hacia la facilidad absoluta. Se vuelve esclavo de sus sentidos: gula extrema, pereza insuperable, gastos compulsivos. Carente de voluntad, incapaz de afrontar las realidades materiales de la vida, corre el riesgo de transformarse en un parásito (el encantador "gorrón"). Usará entonces su mayor don — su poder de seducción y la adulación — ya no para crear armonía, sino para manipular a su entorno con el fin de que cubran sus necesidades, huyendo de toda forma de esfuerzo personal.
          </p>
        </Callout>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>La Venusiana en astrología: retrato de la mujer con dominante de Venus</H2>

        <Card title="La expresión Yin">
          <p>
            En una carta femenina (o de energía Yin), una Venus armoniosa da nacimiento al arquetipo de la Musa y la Esposa Ideal.
          </p>
          <p>
            Dulce, amorosa y de una entrega exquisita, tiene el poder de pacificar los caracteres más rudos. Es el corazón palpitante del hogar, creando a su alrededor un entorno impregnado de arte, confort y calidez. Pero cuidado, funciona como una flor: sin el agua cotidiana de la atención, los cumplidos y la ternura de su pareja, se marchita… o se vuelve hacia el sol de otra persona.
          </p>
          <p>
            Si Venus está gravemente "maleficada" (afligida por Plutón o Marte), encarna entonces el mito de la Sirena o la Mujer Fatal. El ocultista Péladan la describía con una negrura poética: "Cortesana por vocación, sabe despertar los sentidos e identificarse con ellos con un arte prodigioso. Es a ella a quien se ama hasta matarse."
          </p>
          <p>
            Psicológicamente, se trata de una persona que ha comprendido que su poder de seducción es su única arma de supervivencia. Utiliza el deseo de los demás para dominar, incapaz de implicarse emocionalmente por pereza o por miedo, dejándose encerrar en el papel de un bello objeto de deseo, a menudo a costa de su propio equilibrio.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Morfopsicología del Venusiano: retrato físico y apariencia</H2>

        <Card title="El retrato físico">
          <p>
            Físicamente, el Venusiano es la encarnación de la gracia, la simetría y la dulzura. La palabra maestra de su fisonomía es la curva.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>El aspecto general: una estatura a menudo media, pero dotada de una inmensa armonía de proporciones. Las formas son redondeadas, flexibles, a veces ligeramente rellenitas (a Venus le gusta la buena carne). El andar y los gestos tienen una gracia natural, casi danzante.</li>
            <li>El rostro: un óvalo perfecto y suavizado. La tez es generalmente clara, rosada o de una luminosidad muy suave. El Venusiano luce muy a menudo el famoso "hoyuelo" en el mentón o en las mejillas (la marca de fábrica de Venus).</li>
            <li>La mirada: ojos grandes, almendrados, vivos y a menudo húmedos, enmarcados por pestañas excepcionalmente largas y espesas (las famosas "pestañas de cine"). La mirada nunca es penetrante, es acariciadora, impregnada de una languidez voluptuosa o de una ternura exquisita.</li>
            <li>Los detalles: una cabellera abundante, flexible, a menudo ondulada. Una nariz elegante y finamente carnosa. La boca suele ser el principal atractivo: pequeña, dibujada en "arco de Cupido", carnosa y sensual. Por último, la voz del Venusiano es siempre pausada, melodiosa, como una música que tranquiliza al instante al interlocutor.</li>
          </ul>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Lo que hay que recordar del perfil Venusiano en astrología</H2>

        <Callout tone="ok" title="Conclusión">
          <p>
            En conclusión: tener una fuerte dominante venusiana en la carta natal es un regalo del cielo, siempre que uno no se duerma en los laureles. El Venusiano está aquí para recordarnos que la vida no se reduce al deber y a la lucha. Su verdadera misión kármica es espiritual: inyectar belleza, dulzura y amor en un mundo que carece cruelmente de ellos, y demostrar que la paz es siempre la mayor de las victorias.
          </p>
        </Callout>
      </section>

      <section
        aria-label="Síntesis del retrato venusiano"
        className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm"
      >
        <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
          <div className="p-5 font-serif text-lg font-medium text-white/90">Eje</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Expresión</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Riesgo</div>
        </div>

        <TableRow
          title="Intelecto"
          effect="Inteligencia estética, emocional, diplomática"
          reading="Rechazo del esfuerzo árido, distracción por el placer"
        />
        <TableRow
          title="Vida social"
          effect="Encanto, pacifismo, vínculo, indulgencia"
          reading="Huida del conflicto, dependencia de la aprobación"
        />
        <TableRow
          title="Amor"
          effect="Seducción, ternura, romanticismo, llama"
          reading="Infidelidad, adicción al estado de enamoramiento, tentaciones"
        />
        <TableRow
          title="Vocación"
          effect="Belleza, lujo, arte, relaciones, hostelería"
          reading="Pereza, manipulación suave, parásito seductor"
        />
      </section>

      <section id="faq-venusien" className="space-y-6" aria-label="Preguntas frecuentes sobre el Venusiano">
        <H2>Preguntas frecuentes sobre el Venusiano</H2>

        <div className="divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md">
          <details className="group">
            <summary className="flex cursor-pointer items-center gap-4 p-6 text-left font-serif text-lg font-medium text-white/90 transition-colors hover:text-rose-200">
              <svg className="h-5 w-5 shrink-0 text-rose-300/60 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              ¿Qué es un Venusiano en astrología?
            </summary>
            <div className="px-6 pb-6 pl-[3.25rem] text-sm leading-relaxed text-white/70 md:text-base">
              El Venusiano es un tipo planetario en quien Venus domina la carta natal. Se caracteriza por un sentido estético refinado, un encanto natural, una búsqueda constante de armonía y una necesidad profunda de amor y belleza en todas las esferas de su vida.
            </div>
          </details>

          <details className="group">
            <summary className="flex cursor-pointer items-center gap-4 p-6 text-left font-serif text-lg font-medium text-white/90 transition-colors hover:text-rose-200">
              <svg className="h-5 w-5 shrink-0 text-rose-300/60 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              ¿Qué profesiones convienen a una dominante de Venus?
            </summary>
            <div className="px-6 pb-6 pl-[3.25rem] text-sm leading-relaxed text-white/70 md:text-base">
              Una dominante de Venus florece en las artes, la moda, el diseño, la diplomacia, la gastronomía, la estética, el lujo, la joyería, las relaciones públicas y todas las profesiones donde hay que embellecer, conectar y crear armonía.
            </div>
          </details>

          <details className="group">
            <summary className="flex cursor-pointer items-center gap-4 p-6 text-left font-serif text-lg font-medium text-white/90 transition-colors hover:text-rose-200">
              <svg className="h-5 w-5 shrink-0 text-rose-300/60 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              ¿Qué riesgos hay con una Venus afligida?
            </summary>
            <div className="px-6 pb-6 pl-[3.25rem] text-sm leading-relaxed text-white/70 md:text-base">
              Una Venus afligida en la carta natal puede generar pereza, celos, dependencia afectiva, manipulación sentimental y complacencia, transformando la búsqueda del placer en un hedonismo destructivo.
            </div>
          </details>

          <details className="group">
            <summary className="flex cursor-pointer items-center gap-4 p-6 text-left font-serif text-lg font-medium text-white/90 transition-colors hover:text-rose-200">
              <svg className="h-5 w-5 shrink-0 text-rose-300/60 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              ¿Cómo saber si soy Venusiano?
            </summary>
            <div className="px-6 pb-6 pl-[3.25rem] text-sm leading-relaxed text-white/70 md:text-base">
              Probablemente eres Venusiano si Venus es angular en tu carta (en conjunción al Ascendente, al Medio Cielo, al Descendente o al Fondo del Cielo), si está en Tauro o en Libra, si recibe trígonos o sextiles armoniosos, o si tienes un cúmulo planetario en Tauro o en Libra.
            </div>
          </details>
        </div>
      </section>

      <footer className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md sm:p-12">
        <H3>Para profundizar en los retratos planetarios</H3>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Pill>Venus</Pill>
          <Pill tone="sky">Retrato astrológico</Pill>
          <Pill tone="violet">Amor</Pill>
          <Pill tone="emerald">Carta natal</Pill>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/blog/mercurien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Leer el retrato del Mercuriano
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/blog/martien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Leer el retrato del Marciano
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}
