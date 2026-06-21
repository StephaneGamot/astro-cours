import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import Image from "next/image";
import { AUTHOR_PERSON, PUBLISHER_ORG } from "@/lib/seo";
import MercurienImage from "@/public/images/blog/mercurien.webp";
import Mercurien2Image from "@/public/images/blog/mercurien2.webp";

export const meta = {
  slug: "mercurien",
  title:
    "El Mercuriano: el maestro de la comunicación",
  // ✅ Ahrefs SERP rewrite — versión extendida (Google deduce este rótulo del contenido de la página).
  seoTitle: "El Mercuriano: maestro de la comunicación — Astro Cours",
  description:
    "Retrato astrológico del Mercuriano: inteligencia, comunicación, curiosidad y adaptación. Descubre la influencia de Mercurio en el amor y la carrera.",
  date: "2026-04-05",
  tags: [
    "Mercure",
    "mercurien",
    "portrait astrologique",
    "communication",
    "intellect",
    "thème astral",
    "psychologie astrologique",
    "carrière",
    "amour",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/mercurien.webp",
};

function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-300">
      <span
        className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-300"
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
        className="mr-4 block h-px w-8 bg-gradient-to-r from-sky-400/60 to-transparent"
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
      box: "border-sky-500/30 bg-sky-500/10 shadow-[0_0_30px_rgba(56,189,248,0.05)]",
      icon: "text-sky-400",
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
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-sm transition-all hover:border-sky-400/30">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
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
    <div className="group grid grid-cols-1 border-b border-white/10 transition-colors hover:bg-sky-400/[0.03] md:grid-cols-3">
      <div className="p-4 font-serif text-lg text-sky-200/90">{title}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{effect}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{reading}</div>
    </div>
  );
}

export default function MercurienPost() {
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
                  name: "¿Qué es un Mercuriano en astrología?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "El Mercuriano es un tipo planetario cuya carta natal está dominada por Mercurio. Se distingue por una inteligencia rápida, una elocuencia natural, una curiosidad permanente y una gran adaptabilidad social y profesional.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué profesiones convienen a una dominante de Mercurio?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Las carreras ideales para un Mercuriano incluyen el comercio, el periodismo, la enseñanza, la escritura, la diplomacia, la interpretación y, en general, todas las profesiones de comunicación y negociación.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuáles son los riesgos de un Mercurio afligido?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Un Mercurio mal aspectado puede generar nerviosismo, tendencia a la mentira, dispersión crónica, inestabilidad emocional, manipulación verbal y superficialidad tanto en las relaciones como en los proyectos.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo saber si soy Mercuriano en mi carta natal?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Comprueba si Mercurio es angular (casas I, IV, VII o X), bien aspectado, situado en Géminis o en Virgo, o si posees un cúmulo planetario en Géminis. Un astrólogo puede confirmar esta dominante con tu carta natal completa.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(56,189,248,0.12)] aspect-[7/3]">
        <Image
          src={MercurienImage}
          alt="Retrato simbólico del temperamento mercuriano en astrología"
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
          className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-sky-400/5 blur-[80px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-400/5 via-transparent to-black/50"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <Kicker>Mercurio • movimiento • comunicación • curiosidad • juventud</Kicker>

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

          {/* ── Bloque definición (Featured Snippet) ── */}
          <div className="mt-8 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.04] px-6 py-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300/80">Definición</p>
            <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
              El <strong>Mercuriano en astrología</strong> designa a un individuo cuyo <Link href="/planetes/mercure" className="underline decoration-emerald-400/40 underline-offset-2 hover:decoration-emerald-400">Mercurio</Link> ocupa una posición dominante en la <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline decoration-emerald-400/40 underline-offset-2 hover:decoration-emerald-400">carta natal</Link> (angular, bien aspectado, en Géminis o Virgo). Se caracteriza por una inteligencia viva, una elocuencia temible y una curiosidad insaciable que le empuja a comprenderlo todo, analizarlo todo y comunicarlo todo.
            </p>
          </div>

          {/* ── Introducción APP (Gancho → Problema → Promesa) ── */}
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            ¿Tienes <strong>Mercurio dominante</strong> en tu carta natal y tu mente funciona a la velocidad del rayo? Esta agilidad mental fascina, pero esconde una trampa: dispersión, nerviosismo, dificultad para profundizar. ¿Dónde está la frontera entre el genio comunicador y la superficialidad crónica? Este retrato completo del <strong>temperamento mercuriano</strong> — psicología, carrera, amor, morfopsicología — descifra los engranajes de esta dominante planetaria, del arquetipo de Hermes al síndrome del que abarca demasiado.
          </p>

          <div className="mt-8 border-t border-white/5 pt-6">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-3" aria-label="Puntos clave del retrato mercuriano">
        <Stat label="Fuerza central" value="Vivacidad mental" />
        <Stat label="Terreno natural" value="Comunicación y movimiento" />
        <Stat label="Sombra principal" value="Inestabilidad y dispersión" />
      </section>

      <section className="space-y-6">
        <H2>La inteligencia mercuriana: vivacidad, elocuencia y astucia</H2>

        <Card title="El intelecto">
          <p>
            Si buscas a alguien capaz de comprender una idea compleja antes incluso de que termines tu frase, dirígete a un Mercuriano. La mente de este tipo planetario es un verdadero fuego de artificio. Su rasgo principal es una comprensión fulgurante unida a una capacidad de asimilación excepcional.
          </p>
          <p>
            El Mercuriano no necesita esfuerzos sobrehumanos para aprender; absorbe la información como una esponja. Sin embargo, esta facilidad natural tiene su reverso. Arrastrado por su curiosidad insaciable, el Mercuriano mariposea. Pasa de un tema a otro a la velocidad del rayo, lo que lo convierte en poseedor de un saber enciclopédico, pero a veces superficial.
          </p>
          <p>
            Los estudios austeros, el trabajo de laboratorio solitario o las matemáticas avanzadas y áridas le aburren profundamente. ¡Necesita ritmo, contacto, materia viva! Su mente brillante y flexible florece en:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Las palabras y las letras: la literatura, la poesía, la escritura creativa.</li>
            <li>La información: el periodismo, los medios, la creación de contenidos, donde su necesidad de actualidad queda colmada.</li>
            <li>La expresión escénica: la comedia, el humor, el teatro.</li>
          </ul>
          <p>
            Dato fascinante: esta vivacidad mental tiene un impacto directo en su cuerpo. El Mercuriano conserva una mente tan juguetona y curiosa que parece disfrutar de una verdadera fuente de juventud. El Mercuriano casi siempre aparenta menos edad de la que tiene, de tanto que su mirada chispea con una picardía adolescente.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>El Mercuriano en sociedad: seductor verbal y camaleón social</H2>

        <Card title="La vida social">
          <p>
            En sociedad, el Mercuriano es la persona que todos se disputan. Posee una conversación viva, agradable, divertida y siempre punzante. Es quien insufla animación en una comida familiar o quien relaja el ambiente en una reunión tensa.
          </p>
          <p>
            Dotado de un sentido psicológico temible, lee a sus interlocutores con una facilidad desconcertante. Esta ingeniosidad lo convierte en el rey de las adaptaciones. Es un diplomático nato, un intermediario excepcional y un conciliador natural. Incluso ante un problema que no compete a sus competencias, siempre encontrará un ángulo de enfoque innovador para aconsejarte.
          </p>
          <p>
            No obstante, no le pidas una fidelidad inquebrantable si la relación se vuelve rutinaria. El Mercuriano tiene un santo horror al aburrimiento. Le atraen la novedad, los nuevos encuentros y el cambio. Su amistad es deliciosa, pero exige ser estimulada constantemente.
          </p>
        </Card>
      </section>

    <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(56,189,248,0.12)] aspect-[7/3]">
        <Image
          src={Mercurien2Image}
          alt="Retrato del dios Mercurio en astrología"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>

      <section className="space-y-6">
        <H2>El Mercuriano en el amor: ¿voluble, cerebral o sinceramente curioso?</H2>

        <Card title="El amor">
          <p>
            Esa ligereza que caracteriza su intelecto se encuentra rasgo a rasgo en su vida sentimental. El Mercuriano no es el signo de las pasiones pesadas y destructoras (como el Plutoniano) ni de la lealtad rígida (como el Saturniano). Concibe el amor como un intercambio, un juego intelectual, una complicidad alegre.
          </p>
          <p>
            Comprometerse de forma duradera es a menudo su mayor desafío. Tiende a multiplicar los afectos superficiales o los flirteos antes de asentarse. La idea misma del matrimonio tradicional, con sus obligaciones legales y sus deberes rutinarios, puede ahogarlo. No es raro ver esta firma astrológica asociada a varias uniones a lo largo de una misma vida.
          </p>
          <p>
            En el amor, es lo que se llama un &quot;sapiosexual&quot; (atraído por la inteligencia), pero también se siente vitalmente atraído por la juventud. A menudo buscará una pareja más joven, o al menos una pareja con un alma fresca y dinámica, capaz de seguirlo en sus perpetuos movimientos.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Profesiones del Mercuriano: ¿qué carreras para una dominante de Mercurio?</H2>

        <Card title="La vocación">
          <p>
            El destino de un Mercuriano armonioso rara vez es trágico, pues es el arquetipo mismo del ingenio práctico. Siempre encontrará una oportunidad, una rendija, un contacto para rebotar y sacar provecho de una situación.
          </p>
          <p>Su campo de acción profesional es inmenso:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>El comercio y la negociación: venta, representación, importación-exportación, marketing. No hay mejor demostrador que él.</li>
            <li>El movimiento: las agencias de viajes, el turismo, los transportes, la logística.</li>
            <li>El arte y la escena: es casi imposible subirse a las tablas o convertirse en un artista/cantante célebre sin una fuerte dominante mercuriana en la carta natal.</li>
          </ul>
          <p>
            Nota esotérica: la tradición astrológica considera a menudo a Mercurio como un planeta neutro. Sin embargo, el místico Maestro Eckhart atribuía la Suerte a Mercurio. Las investigaciones astrológicas modernas tienden a confirmar este punto: Mercurio actúa a menudo como un planeta sumamente benéfico (al igual que Júpiter o Venus), ofreciendo a sus protegidos la oportunidad de abrir las puertas del éxito gracias a su simple labia y a su red de contactos.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Mercurio afligido en la carta natal: nerviosismo, mentira y dispersión</H2>

        <Callout tone="warn" title="La sombra de Mercurio">
          <p>
            Cuando la energía de Mercurio está bloqueada o muy mal aspectada en la carta, la hermosa agilidad mental se transforma en vicio. El comunicador brillante se convierte en un charlatán inagotable y en un fanfarrón.
          </p>
          <p>
            El mito antiguo nos recuerda que Hermes (Mercurio) era el dios de los viajeros, pero también... de los ladrones. Un Mercuriano disonante puede desarrollar una moralidad muy elástica. La mentira se convierte en una segunda naturaleza, y el respeto por los bienes ajenos en una noción abstracta.
          </p>
          <p>
            Psicológicamente, es un ser inestable, veleidoso y caprichoso, incapaz de imponerse la menor disciplina de vida, lo que a menudo lo condena a vegetar. En un entorno de grupo (empresa, familia), puede convertirse en el peor de los elementos: un sembrador de cizaña que propaga chismes, calumnias y maledicencias, a veces por el simple &quot;placer&quot; de crear caos y divertirse con ello.
          </p>
        </Callout>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>La Mercuriana en astrología: retrato de la mujer con dominante de Mercurio</H2>

        <Card title="La expresión Yin">
          <p>
            En una carta donde domina la energía femenina o receptiva (Yin), un bello Mercurio da lugar a una personalidad fascinante: la colaboradora de genio y la musa diplomática.
          </p>
          <p>
            Seductora no por artificios dramáticos sino por su ingenio chispeante, adivina los pensamientos ajenos antes incluso de que sean formulados. Es casi imposible mentirle. En el día a día, sabe obtener exactamente lo que quiere de su entorno gracias a un tacto y una psicología impecables. Brilla en los puestos de comunicación, de secretaría de alta dirección, o bajo los focos como actriz. (A tener en cuenta: siempre preferirá la compañía de personas jóvenes y dinámicas, huyendo de la pesadez de las mentalidades que envejecen.)
          </p>
          <p>
            Si Mercurio está muy disonante, esta misma inteligencia se transforma en cálculo. El arquetipo pasa a ser el de la intrigante. Péladan, célebre ocultista, describía a la perfección esta cara oscura: &quot;Aprovecharse de los demás, pedirlo todo a la habilidad y nada al trabajo, vivir de los incautos y como parásito.&quot; Sin escrúpulos, huyendo de las responsabilidades familiares o matrimoniales, utiliza su fina psicología para manipular, estafar intelectualmente o sacar partido de las debilidades de los más apasionados.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Morfopsicología del Mercuriano: retrato físico y apariencia</H2>

        <Card title="El retrato físico">
          <p>
            La astrología tradicional ha definido con gran precisión los rasgos físicos asociados a la firma mercuriana. El cuerpo refleja la rapidez de la mente:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Aspecto general: formas finas, esbeltas, sinuosas. Una estatura media o pequeña, pero siempre con un cuerpo delgado y un andar particularmente ligero y aéreo.</li>
            <li>El rostro: un óvalo alargado, con una frente convexa y finamente abultada (signo de inteligencia). La tez suele ser pálida, grisácea o melosa, pero tiene la particularidad de animarse intensamente a la menor emoción.</li>
            <li>Los rasgos: arcos superciliares prominentes que albergan ojos vivos. Cejas largas y finas. La nariz es típica: fina, bastante larga y ligeramente aguileña. Los labios suelen ser finos, el mentón pequeño y puntiagudo.</li>
            <li>La expresión: el Mercuriano se reconoce sobre todo por su comportamiento: una dicción viva, nítida, acompañada de gestos numerosos, rápidos y de una gran destreza manual.</li>
          </ul>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Lo que hay que recordar del perfil Mercuriano en astrología</H2>

        <Callout tone="ok" title="Conclusión">
          <p>
            En conclusión: el Mercuriano es el mensajero indispensable de nuestra humanidad. Une las ideas, conecta a los seres y hace circular la vida. Tener una dominante Mercuriana es recibir el don de la eterna juventud del espíritu. ¿Su único verdadero trabajo kármico? Aprender a frenar de vez en cuando, para transformar sus miles de informaciones recogidas en una verdadera sabiduría.
          </p>
        </Callout>
      </section>

      <section
        aria-label="Síntesis del retrato mercuriano"
        className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm"
      >
        <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
          <div className="p-5 font-serif text-lg font-medium text-white/90">Eje</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Expresión</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Riesgo</div>
        </div>

        <TableRow
          title="Intelecto"
          effect="Comprensión fulgurante, curiosidad, asimilación rápida"
          reading="Superficialidad, dispersión, mariposeo"
        />
        <TableRow
          title="Vida social"
          effect="Conversación viva, diplomacia, humor, adaptación"
          reading="Inestabilidad relacional si se instala el aburrimiento"
        />
        <TableRow
          title="Amor"
          effect="Complicidad, juego, estímulo mental"
          reading="Dificultad con la duración, el marco y la rutina"
        />
        <TableRow
          title="Vocación"
          effect="Comercio, medios, escena, movilidad, red de contactos"
          reading="Agitación, astucia, falta de disciplina si Mercurio está afligido"
        />
      </section>

      {/* ── FAQ visible ── */}
      <section className="space-y-4">
        <H2>Preguntas frecuentes sobre el Mercuriano</H2>
        {[
          {
            q: "¿Qué es un Mercuriano en astrología?",
            a: "El Mercuriano es un tipo planetario cuya carta natal está dominada por Mercurio. Se distingue por una inteligencia rápida, una elocuencia natural, una curiosidad permanente y una gran adaptabilidad social y profesional.",
          },
          {
            q: "¿Qué profesiones convienen a una dominante de Mercurio?",
            a: "Las carreras ideales para un Mercuriano incluyen el comercio, el periodismo, la enseñanza, la escritura, la diplomacia, la interpretación y, en general, todas las profesiones de comunicación y negociación.",
          },
          {
            q: "¿Cuáles son los riesgos de un Mercurio afligido?",
            a: "Un Mercurio mal aspectado puede generar nerviosismo, tendencia a la mentira, dispersión crónica, inestabilidad emocional, manipulación verbal y superficialidad tanto en las relaciones como en los proyectos.",
          },
          {
            q: "¿Cómo saber si soy Mercuriano en mi carta natal?",
            a: "Comprueba si Mercurio es angular (casas I, IV, VII o X), bien aspectado, situado en Géminis o en Virgo, o si posees un cúmulo planetario en Géminis. Un astrólogo puede confirmar esta dominante con tu carta natal completa.",
          },
        ].map(({ q, a }) => (
          <details
            key={q}
            className="group rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 backdrop-blur-md transition-colors hover:bg-white/[0.04]"
          >
            <summary className="flex cursor-pointer items-center justify-between text-base font-medium text-white/90 sm:text-lg [&::-webkit-details-marker]:hidden">
              {q}
              <span className="ml-4 text-xl leading-none text-emerald-300/60 transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">{a}</p>
          </details>
        ))}
      </section>

      <footer className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md sm:p-12">
        <H3>Para ir más lejos en los retratos planetarios</H3>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Pill>Mercurio</Pill>
          <Pill tone="sky">Retrato astrológico</Pill>
          <Pill tone="violet">Comunicación</Pill>
          <Pill tone="emerald">Carta natal</Pill>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/blog/lunarien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Leer el retrato del Lunariano
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/blog/venusien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Leer el retrato del Venusiano
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}
