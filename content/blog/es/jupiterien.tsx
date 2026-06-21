import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import Image from "next/image";
import { AUTHOR_PERSON, PUBLISHER_ORG } from "@/lib/seo";
import JupiterienImage from "@/public/images/blog/jupiterien1.webp";
import JupiterienImage2 from "@/public/images/blog/jupiterien2.webp";

export const meta = {
  slug: "jupiterien",
  title:
    "El Jupiteriano: el Guía y el Benefactor",
  description:
    "Retrato astrológico del Jupiteriano: abundancia, ley, optimismo y poder. Descubre la influencia y los excesos de Júpiter en una carta natal.",
  date: "2026-04-02",
  tags: [
    "Jupiter",
    "jupiterien",
    "portrait astrologique",
    "thème astral",
    "psychologie astrologique",
    "vocation",
    "amour",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/jupiterien1.webp",
};

function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-300">
      <span
        className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-300"
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
        className="mr-4 block h-px w-8 bg-gradient-to-r from-amber-400/60 to-transparent"
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
      box: "border-red-500/30 bg-red-500/10 shadow-[0_0_30px_rgba(239,68,68,0.06)]",
      icon: "text-red-300",
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
      box: "border-amber-500/30 bg-amber-500/10 shadow-[0_0_30px_rgba(245,158,11,0.05)]",
      icon: "text-amber-300",
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
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-sm transition-all hover:border-amber-300/30">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-300/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
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
    <div className="group grid grid-cols-1 border-b border-white/10 transition-colors hover:bg-amber-300/[0.03] md:grid-cols-3">
      <div className="p-4 font-serif text-lg text-amber-200/90">{title}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{effect}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{reading}</div>
    </div>
  );
}

export default function JupiterienPost() {
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
                  name: "¿Qué es un Jupiteriano en astrología?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "El Jupiteriano es un tipo planetario con Júpiter dominante: visión, generosidad, autoridad benevolente, optimismo y amplitud intelectual.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué profesiones convienen a un Júpiter dominante?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La magistratura, la enseñanza superior, la diplomacia, la banca, la gran empresa, la religión, la edición.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué riesgos hay con un Júpiter afligido?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Megalomanía, exceso en todo, despilfarro, arrogancia, promesas incumplidas, pleitos.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo saber si soy Jupiteriano?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Júpiter angular, en Sagitario o Piscis, trígono/sextil al Sol o a la Luna, un cúmulo en Sagitario.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(245,158,11,0.12)] aspect-[7/3]">
        <Image
          src={JupiterienImage}
          alt="Retrato simbólico del temperamento jupiteriano en astrología"
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
          className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-amber-300/5 blur-[80px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-300/5 via-transparent to-black/50"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <Kicker>Júpiter • orden • ley • abundancia • protección</Kicker>

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

          <div className="mt-8 max-w-3xl rounded-xl border border-violet-400/20 bg-violet-400/5 p-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet-300">Definición</p>
            <p className="mt-2 text-base leading-relaxed text-white/80 sm:text-lg">
              El <strong>Jupiteriano en astrología</strong> designa a un individuo cuyo <Link href="/planetes/jupiter" className="text-violet-300 underline decoration-violet-300/30 hover:decoration-violet-300">Júpiter</Link> ocupa una posición dominante en la <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="text-violet-300 underline decoration-violet-300/30 hover:decoration-violet-300">carta natal</Link> (angular, bien aspectado, en Sagitario o Piscis). Se distingue por una visión amplia, un sentido natural de la justicia y una generosidad expansiva que lo impulsa hacia las altas responsabilidades.
            </p>
          </div>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            ¿Tienes <strong>Júpiter dominante</strong> en tu carta natal y un optimismo a toda prueba que te empuja hacia las cumbres? Esta amplitud natural inspira confianza, pero esconde una trampa: exceso, arrogancia, despilfarro de recursos. Este retrato completo del <strong>temperamento jupiteriano</strong> — psicología, carrera, amor, morfopsicología — revela los resortes de esta dominante planetaria mayor, del arquetipo de Zeus al riesgo de la hibris.
          </p>

          <div className="mt-8 border-t border-white/5 pt-6">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-3" aria-label="Puntos clave del retrato jupiteriano">
        <Stat label="Fuerza central" value="Orden y abundancia" />
        <Stat label="Terreno natural" value="Protección y organización" />
        <Stat label="Sombra principal" value="Exceso y presunción" />
      </section>

      <section className="space-y-6">
        <H2>La inteligencia jupiteriana: visión global, síntesis y optimismo</H2>

        <Card title="El intelecto">
          <p>
            La inteligencia del Jupiteriano no tiene ni la fulguración hiperactiva del Mercuriano ni la aridez del Saturniano. Su mente se distingue por tres cualidades mayores: el discernimiento, el juicio y el método.
          </p>
          <p>
            Es uno de los cerebros mejor organizados del zodíaco. Si no siempre posee una memoria fotográfica instantánea, eso no tiene la menor importancia: su mente funciona como una biblioteca perfectamente clasificada. Ante un problema complejo, el Jupiteriano nunca se deja llevar por el pánico. Clasifica, jerarquiza, separa lo esencial de lo superfluo y encuentra la solución con una evidencia desconcertante.
          </p>
          <p>
            Durante su juventud y su escolaridad, es el estudiante al que todo le sale bien (de hecho, tiene fama de ser &quot;afortunado&quot; en los exámenes). En realidad, esa suerte es a menudo el resultado de su respeto innato por las directrices y de un sentido común absoluto. Su sed de aprender es vasta, pero brilla en particular en los campos que estructuran la sociedad:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>La Ley y la Justicia: el derecho, la magistratura, la diplomacia.</li>
            <li>La Organización: la administración pública, la gestión de grandes empresas, la economía financiera.</li>
            <li>La Elevación del Pensamiento: la sociología, la filosofía, la teología o las altas responsabilidades religiosas.</li>
          </ul>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>El Jupiteriano en sociedad: generosidad, prestigio y sentido del mando</H2>

        <Card title="La vida social">
          <p>
            En sociedad, el Jupiteriano irradia una bonhomía natural, sinceridad y tolerancia. Es el pilar en torno al cual se reúnen los demás. Adopta de forma natural (y a veces inconsciente) un tono protector.
          </p>
          <p>
            Tiene el corazón en la mano. Si ha logrado triunfar en su propia vida (lo cual suele ser el caso), pondrá un punto de honor en utilizar su influencia o su dinero para proteger a los más débiles, aconsejar con utilidad o consolar. La astrología tradicional afirma, con razón, que sin los Jupiterianos no existirían ni asociaciones benéficas ni fundaciones filantrópicas. Son ellos quienes liman las asperezas de un mundo a menudo demasiado duro.
          </p>
          <p>
            ¿Su talón de Aquiles? El orgullo y la necesidad de consideración. El Jupiteriano es muy quisquilloso con su honor y su respetabilidad. Profundamente generoso, le gusta que lo noten y que se lo agradezcan. Para conservar su amistad y sus favores, hay que evitar a toda costa criticarlo en público o dudar de su probidad. Es, hay que reconocerlo, muy sensible a la adulación, pues está convencido (a menudo con razón) de su propio valor moral.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>El Jupiteriano en el amor: grandeza de alma, fidelidad y necesidad de admiración</H2>

        <Card title="El amor">
          <p>
            La vida sentimental del Jupiteriano es el reflejo de su vida social: ordenada, cálida y respetuosa de la opinión pública. Siente un santo horror por los escándalos amorosos.
          </p>
          <p>
            El Jupiteriano ama la regularidad, el confort y la legalidad. Por ello, es una firma astral que conduce muy a menudo al matrimonio, y en excelentes condiciones. El hogar de un Jupiteriano se concibe como un remanso de paz, marcado a menudo por una amplia holgura material, hermosas recepciones y una gran mesa abierta a los amigos. Los hijos ocupan en él un lugar central.
          </p>
          <p>
            Es muy ciertamente bajo la égida de Júpiter donde se cuenta el índice más bajo de divorcios y separaciones estrepitosas. Incluso en caso de un brillante ascenso social que lo exponga a múltiples tentaciones, el Jupiteriano preferirá siempre preservar el equilibrio, el prestigio y el confort de su hogar legal antes que destruirlo todo por una aventura pasajera.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Profesiones del Jupiteriano: ¿qué carreras para un Júpiter dominante?</H2>

        <Card title="La vocación">
          <p>
            El destino de un buen Jupiteriano se sitúa casi siempre &quot;por encima de la media&quot;. No es el signo de las tareas ingratas y oscuras. Su realización natural se halla en la dirección, la gestión y el poder.
          </p>
          <p>
            Lo encontraremos con una facilidad desconcertante en puestos de dirección: directores generales, altos ejecutivos, banqueros, administradores, u hombres y mujeres políticos de alto rango. (Un hecho histórico apasionante: la astrología mundial asocia a menudo los periodos de gran prosperidad, como la &quot;Belle Époque&quot;, con ciclos jupiterianos, caracterizados por la expansión económica y la diplomacia, en oposición a los ciclos de Marte o Saturno, que engendran guerras y crisis).
          </p>
          <p>
            Es, evidentemente, un &quot;bon vivant&quot;. Ama el confort de una hermosa morada, los placeres de la mesa, los buenos vinos y los viajes de placer, sabiendo a la vez (si está equilibrado) conservar el sentido de la mesura.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Júpiter afligido en la carta natal: exceso, megalomanía y despilfarro</H2>

        <Callout tone="warn" title="La sombra de Júpiter">
          <p>
            Cuando Júpiter está gravemente disonante en la carta (en cuadratura u oposición con planetas difíciles), el optimismo se transforma en presunción, y la abundancia se vuelve exceso.
          </p>
          <p>
            El &quot;mal&quot; Jupiteriano sufre de un complejo de superioridad insoportable. Su juicio falseado lo empuja a sobreestimar sus capacidades. Elabora proyectos grandiosos y megalómanos que terminan por derrumbarse, arrastrando a la ruina a sus colaboradores o a su familia (cuya culpa siempre recaerá, según él, en los demás o en la &quot;mala suerte&quot;).
          </p>
          <p>
            Si no alcanza la posición social que estima que le corresponde por derecho divino, este tipo disonante puede volverse cínico. En lugar de ser un pilar de la ley, puede dejarse tentar por la estafa financiera, el &quot;farol&quot; intelectual, o transformarse en revolucionario de salón, buscando destruir un sistema que se negó a coronarlo. Es también en estas configuraciones donde se hallan los excesos físicos mayores: glotonería irreprimible, obesidad o adicción al lujo.
          </p>
        </Callout>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>La Jupiteriana en astrología: retrato de la mujer con Júpiter dominante</H2>

        <Card title="La expresión Yin">
          <p>
            En una carta natal de fuerte dominante Yin, o en la mujer, una hermosa firma jupiteriana encarna a la &quot;Gran Dama&quot;, la organizadora brillante y la perfecta señora de la casa.
          </p>
          <p>
            El ocultista francés Péladan decía de ella: &quot;Al evocar a las mujeres de la corte de Luis XIV, se tienen los más bellos ejemplares de esta influencia. Reúne las cualidades de seriedad y elegancia necesarias para toda representación.&quot;
          </p>
          <p>
            Hoy, si no secunda la carrera de un esposo influyente, la Jupiteriana toma ella misma las riendas. Sobresale en las carreras liberales, la magistratura o la dirección de empresa. Impone respeto por su autoridad natural, siempre matizada de benevolencia.
          </p>
          <p>
            Si Júpiter está maleficiado, el orgullo se impone. Convencida de que &quot;todo se le debe&quot;, exige a la vida honores y un tren de vida lujoso sin querer aportar el esfuerzo. Puede arruinar su hogar con gastos de prestigio desmedidos (el famoso &quot;aparentar a toda costa&quot;) y clamar contra la injusticia cósmica si se le niega la menor de sus exigencias.
          </p>
        </Card>
      </section>

        <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(245,158,11,0.12)] aspect-[7/3]">
        <Image
          src={JupiterienImage2}
          alt="Retrato de Zeus en astrología"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>

      <section className="space-y-6">
        <H2>Morfopsicología del Jupiteriano: retrato físico y apariencia</H2>

        <Card title="El retrato físico">
          <p>
            La morfología del Jupiteriano rezuma abundancia, autoridad tranquila y salud. Todo en él está concebido a la escala de la expansión:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>El porte general: formas poderosas, amplias y majestuosas. Una corpulencia a menudo imponente, que tiende de forma natural a la obesidad con los años (Júpiter dilata lo que toca). Su andar es mesurado, anclado, nunca precipitado.</li>
            <li>El rostro: una carnación carnosa, a menudo rosada o fresca. El contorno del rostro recuerda a un trapecio. La frente es amplia, ligeramente convexa, señal de una gran capacidad de síntesis intelectual.</li>
            <li>La mirada: ojos grandes, bien abiertos, risueños y profundamente benevolentes. Las cejas suelen estar muy desarrolladas, a veces dibujadas en &quot;acento circunflejo&quot;, dando al rostro una expresión de autoridad natural.</li>
            <li>Los detalles: una nariz carnosa, una boca grande y sinuosa de labios coloridos y golosos (la firma por excelencia de los bons vivants). La voz del Jupiteriano es inolvidable: grave, cálida, con una dicción nítida y a veces algo enfática, ideal para cautivar a un auditorio. (En el hombre, el uso de la barba — que recuerda a la figura mitológica de Zeus — es muy frecuente).</li>
          </ul>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Lo que hay que recordar del perfil Jupiteriano en astrología</H2>

        <Callout tone="ok" title="Conclusión">
          <p>
            En conclusión: tener una fuerte dominante Jupiteriana en la carta natal es un inmenso privilegio, pero también una gran responsabilidad social. El Jupiteriano es el pastor del zodíaco. Su verdadera misión kármica no es solo acumular éxitos y comodidad para sí mismo, sino velar por que la prosperidad, la justicia y el calor humano se derramen sobre todos aquellos que se cruzan en su camino.
          </p>
        </Callout>
      </section>

      <section
        aria-label="Síntesis del retrato jupiteriano"
        className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm"
      >
        <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
          <div className="p-5 font-serif text-lg font-medium text-white/90">Eje</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Expresión</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Riesgo</div>
        </div>

        <TableRow
          title="Intelecto"
          effect="Método, discernimiento, síntesis, juicio"
          reading="Sobreestimación, certezas excesivas, suficiencia"
        />
        <TableRow
          title="Vida social"
          effect="Protección, generosidad, calidez, influencia"
          reading="Orgullo, necesidad de consideración, adulación"
        />
        <TableRow
          title="Amor"
          effect="Hogar estable, respetabilidad, paz, confort"
          reading="Rigidez social, apego excesivo al prestigio"
        />
        <TableRow
          title="Vocación"
          effect="Dirección, ley, administración, diplomacia"
          reading="Megalomanía, farol, excesos materiales y lujo"
        />
      </section>

      <section id="faq-jupiterien" className="space-y-6" aria-label="Preguntas frecuentes sobre el Jupiteriano">
        <H2>Preguntas frecuentes sobre el Jupiteriano</H2>

        {[
          {
            q: "¿Qué es un Jupiteriano en astrología?",
            a: "El Jupiteriano es un tipo planetario con Júpiter dominante: visión, generosidad, autoridad benevolente, optimismo y amplitud intelectual.",
          },
          {
            q: "¿Qué profesiones convienen a un Júpiter dominante?",
            a: "La magistratura, la enseñanza superior, la diplomacia, la banca, la gran empresa, la religión, la edición.",
          },
          {
            q: "¿Qué riesgos hay con un Júpiter afligido?",
            a: "Megalomanía, exceso en todo, despilfarro, arrogancia, promesas incumplidas, pleitos.",
          },
          {
            q: "¿Cómo saber si soy Jupiteriano?",
            a: "Júpiter angular, en Sagitario o Piscis, trígono/sextil al Sol o a la Luna, un cúmulo en Sagitario.",
          },
        ].map(({ q, a }) => (
          <details
            key={q}
            className="group rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md transition-colors open:bg-white/[0.04]"
          >
            <summary className="flex cursor-pointer items-center gap-3 p-5 text-base font-medium text-white/90 hover:text-violet-200 md:text-lg">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-300/60 text-sm text-white" aria-hidden="true">?</span>
              {q}
            </summary>
            <div className="px-5 pb-5 pl-14 text-sm leading-relaxed text-white/70 md:text-base">
              {a}
            </div>
          </details>
        ))}
      </section>

      <footer className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md sm:p-12">
        <H3>Para profundizar en los retratos planetarios</H3>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Pill>Júpiter</Pill>
          <Pill tone="sky">Retrato astrológico</Pill>
          <Pill tone="violet">Organización</Pill>
          <Pill tone="emerald">Carta natal</Pill>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/blog/martien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Leer el retrato del Marciano
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/blog/saturnien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Leer el retrato del Saturniano
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}
