import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import Image from "next/image";
import { AUTHOR_PERSON, PUBLISHER_ORG } from "@/lib/seo";
import LunarienImage from "@/public/images/blog/lunarien.webp";
import Lunarien2Image from "@/public/images/blog/lunarien2.webp";
import Lunarien3Image from "@/public/images/blog/lunarien3.webp";

export const meta = {
  slug: "lunarien",
  title:
    "El tipo lunar en astrología: memoria e intuición",
  // ✅ Ahrefs SERP rewrite — título que Google muestra, sin el sufijo " — Astro Cours".
  seoTitle: "El tipo lunar: soñador, guardián de la memoria y la intuición",
  description:
    "Retrato del tipo lunar en astrología: memoria, intuición, hogar y dulzura. Descubre el impacto de la Luna en el amor, la vocación y la carta natal",
  date: "2026-04-06",
  tags: [
    "lune",
    "lunarien",
    "portrait astrologique",
    "intuition",
    "mémoire",
    "thème astral",
    "psychologie astrologique",
    "foyer",
    "amour",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/lunarien.webp",
};

function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-200">
      <span
        className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-200"
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
        className="mr-4 block h-px w-8 bg-gradient-to-r from-sky-300/60 to-transparent"
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
      box: "border-sky-400/30 bg-sky-400/10 shadow-[0_0_30px_rgba(125,211,252,0.05)]",
      icon: "text-sky-200",
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
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-sm transition-all hover:border-sky-200/30">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-200/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
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
    <div className="group grid grid-cols-1 border-b border-white/10 transition-colors hover:bg-sky-200/[0.03] md:grid-cols-3">
      <div className="p-4 font-serif text-lg text-sky-100/90">{title}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{effect}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{reading}</div>
    </div>
  );
}

export default function LunarienPost() {
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
                  name: "¿Qué es un tipo lunar en astrología?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "El tipo lunar es un tipo planetario definido por la dominancia de la Luna en la carta natal. La sensibilidad extrema, la memoria notable, la imaginación poderosa y la necesidad de seguridad emocional caracterizan este perfil, a menudo considerado el más receptivo del zodiaco.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué profesiones convienen a una persona con dominante Luna?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "El tipo lunar destaca en las profesiones ligadas al cuidado, la escucha y la creatividad: psicología, literatura, poesía, historia, arqueología, periodismo narrativo, primera infancia y todo oficio donde la empatía sea una baza fundamental.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuáles son los riesgos de una Luna afligida?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Una Luna en aspecto disonante (cuadratura u oposición a Saturno, Marte) puede generar pasividad, dependencia afectiva, inestabilidad emocional, huida de la realidad y vulnerabilidad a las adicciones — el tipo lunar pierde entonces el contacto con la realidad.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo saber si soy un tipo lunar en mi carta natal?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Comprueba si tu Luna es angular (en casa I, IV, VII o X), si recibe aspectos armónicos (trígono, sextil) y si está en dignidad (Cáncer, Tauro). Un cúmulo de planetas en Cáncer también refuerza el perfil lunar.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(125,211,252,0.12)] aspect-[7/3]">
        <Image
          src={LunarienImage}
          alt="Retrato simbólico del temperamento lunar en astrología"
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
          className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-sky-200/5 blur-[80px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-200/5 via-transparent to-black/50"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <Kicker>Luna • memoria • intuición • hogar • dulzura</Kicker>

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

          {/* ── Bloque de definición (Featured Snippet) ── */}
          <div className="mt-8 rounded-2xl border border-sky-400/20 bg-sky-400/[0.04] px-6 py-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-300/80">Definición</p>
            <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
              El <strong>tipo lunar en astrología</strong> designa a un individuo cuya <Link href="/planetes/lune" className="underline decoration-sky-400/40 underline-offset-2 hover:decoration-sky-400">Luna</Link> ocupa una posición dominante en la <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline decoration-sky-400/40 underline-offset-2 hover:decoration-sky-400">carta natal</Link> (angular, bien aspectada, en Cáncer o en Tauro). Se distingue por una sensibilidad extrema, una imaginación desbordante y una necesidad visceral de seguridad emocional.
            </p>
          </div>

          {/* ── Introducción APP (Gancho → Problema → Promesa) ── */}
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            ¿Tienes una <strong>Luna dominante</strong> en tu carta natal y tu mundo interior se asemeja a un océano sin fondo? Esta hipersensibilidad, unas veces don mediúmnico, otras veces prisión emocional, sigue siendo a menudo mal comprendida — incluso por quien la vive. Este retrato completo del <strong>temperamento lunar</strong> — psicología, carrera, amor, morfopsicología — te ayuda a transformar esta fragilidad aparente en una fuerza profunda, desde el arquetipo de Selene hasta las trampas de la dependencia afectiva.
          </p>

          <div className="mt-8 border-t border-white/5 pt-6">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-3" aria-label="Puntos clave del retrato lunar">
        <Stat label="Fuerza central" value="Memoria y sensibilidad" />
        <Stat label="Terreno natural" value="Hogar e imaginación" />
        <Stat label="Sombra principal" value="Pasividad y huida" />
      </section>

      <section className="space-y-6">
        <H2>Cómo influye la Luna en la inteligencia y la memoria del tipo lunar</H2>

        <Card title="El intelecto">
          <p>
            El intelecto del tipo lunar no funciona ni por deducción matemática (Saturno) ni por fulgor lógico (Mercurio). Su mente es una inmensa biblioteca de impresiones. Sus facultades maestras son la inspiración, la imaginación, la intuición y, por encima de todo, una memoria absolutamente excepcional.
          </p>
          <p>
            El tipo lunar no suele ser un sediento de conocimientos puros. No le gusta &quot;forzar&quot; su mente. Sin embargo, asimila las cosas sin esfuerzo aparente, porque todo lo que le conmueve emocionalmente se imprime en él para siempre. Es el estudiante capaz de salvar su curso escolar gracias a su capacidad asombrosa de aprender de memoria, compensando así cierta falta de empuje o de puntualidad.
          </p>
          <p>
            La mente del tipo lunar es fundamentalmente contemplativa y vuelta hacia el pasado (en analogía directa con el signo de Cáncer). Por ello, las frías matemáticas o las ciencias duras suelen rechazarle. En cambio, brillará con mil destellos en:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>La literatura y la poesía: donde su alma soñadora puede derramarse libremente.</li>
            <li>La historia: nada fascina más a un tipo lunar que sumergirse en los recuerdos de la humanidad, la arqueología, la genealogía o la salvaguarda del patrimonio.</li>
            <li>El periodismo o la narración: allí donde hay que recurrir a la sensibilidad y al relato de vida.</li>
          </ul>
        </Card>
      </section>

      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(125,211,252,0.12)] aspect-[7/3]">
        <Image
          src={Lunarien2Image}
          alt="Retrato de una Selene de los tiempos modernos"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>

      <section className="space-y-6">
        <H2>Sensibilidad y vida social: por qué el tipo lunar absorbe las emociones</H2>

        <Card title="La vida social">
          <p>
            El tipo lunar es la encarnación de la dulzura. Sensible, impresionable, a menudo tímido y profundamente pacifista, huye de las discusiones acaloradas, de las luchas de ego y de los conflictos. Su necesidad primordial es la calma, la seguridad y la tranquilidad.
          </p>
          <p>
            Es una auténtica &quot;esponja emocional&quot;. En su juventud, es esencial vigilar su entorno, pues absorbe literalmente la energía, los hábitos y a veces incluso la moralidad de las personas con las que se relaciona. El tipo lunar es muy moldeable: la huella que recibe de su familia y de su medio de origen condiciona a menudo la totalidad de su vida adulta.
          </p>
          <p>
            En sociedad, es muy apreciado por su carácter conciliador. Sin embargo, sus relaciones pueden a veces desconcertarse por su lado cíclico y lunático. A imagen de las fases de la Luna, su humor cambia perpetuamente. Puede prometer cosas con sincero entusiasmo un día y &quot;olvidarlo&quot; al siguiente, no por maldad, sino por pura negligencia o por dejadez soñadora. Y aun así, siempre se le perdona, tan evidente es su bondad natural.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>El tipo lunar en el amor: fusional, protector y dependiente afectivo</H2>

        <Card title="El amor">
          <p>
            En el terreno sentimental, la vida del tipo lunar gira en torno a una sola palabra: el hogar. La aventura sin futuro no le interesa; tiene sed de un nido acogedor, protector y tranquilizador.
          </p>
          <p>
            Sin embargo, su timidez y su indecisión pueden a veces frenar la concreción de sus amores. Particularmente apegado a sus raíces, no es raro ver a un tipo lunar retrasar voluntariamente su propio matrimonio por lealtad hacia su familia de origen (para ocuparse de un progenitor que envejece, por ejemplo).
          </p>
          <p>
            Una vez casado, es uno de los arquetipos más fieles del zodiaco. Bondadoso y hogareño, evita las disputas a toda costa. De hecho, con la influencia de Júpiter, la firma de la Luna registra la tasa de divorcios más baja en astrología. Si hay tensiones conyugales, el tipo lunar se adaptará, agachará la cabeza o se sacrificará para no romper el hogar, y sobre todo para proteger el bienestar emocional de sus hijos, que serán siempre el amor absoluto de su vida.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Profesiones del tipo lunar: ¿qué carreras para una dominante Luna?</H2>

        <Card title="La vocación">
          <p>
            El destino del tipo lunar está íntimamente ligado a los ritmos cósmicos (a menudo se observan grandes giros vitales relacionados con ciclos de unos 28 años). Profesionalmente, no soporta los ambientes ultracompetitivos. Necesita un oficio que no violente su naturaleza.
          </p>
          <p>
            Suele preferir vías seguras: la continuidad de una empresa familiar, la enseñanza, el trabajo social, las profesiones de la primera infancia (guardería, educación), la hostelería, o profesiones ligadas a su elemento predilecto: el agua (marinos, pescadores, oceanógrafos, o simplemente una vida centrada en torno a una residencia cerca de un punto de agua).
          </p>
          <p>
            Pero cuidado: la brecha social puede ser inmensa entre los tipos lunares. Si la mayoría florecen en vidas sencillas y modestas, una carta natal poderosamente lunar (apoyada por el Sol o Júpiter) puede impulsar al individuo hacia una gloria inaudita. La Luna representa &quot;la Multitud&quot; y &quot;el inconsciente colectivo&quot;. Un gran tipo lunar (actor de comedia, escritor, político) posee el don mágico de cautivar la benevolencia de las masas. Es, además, un indicio de victoria formidable en astrología política.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Luna afligida en la carta natal: los peligros del temperamento lunar</H2>

        <Callout tone="warn" title="La sombra de la Luna">
          <p>
            Cuando la Luna está muy mal aspectada en la carta natal (en especial por disonancias con Saturno), la sensibilidad se vuelve debilidad, y el sueño se vuelve huida.
          </p>
          <p>
            El tipo lunar maleficiado es el arquetipo del veleidoso perezoso. Incapaz de mantener una línea de conducta, indeciso en extremo, nunca termina lo que empieza. Sin apoyo exterior, corre el riesgo de vegetar en la oscuridad, dejándose llevar por completo por su pareja, que deberá asumir sola todas las responsabilidades (llevar el timón financiero y administrativo).
          </p>
          <p>
            Para huir de la dureza del mundo real que no soporta, este tipo disonante puede desarrollar una fuerte inclinación a la evasión tóxica (en especial el alcoholismo). La tradición astrológica observa que en los destinos muy marginales o entre los &quot;vagabundos celestes&quot;, la disonancia Saturno-Luna suele ser predominante, simbolizando a un individuo aplastado por la realidad y refugiado en la pasividad total.
          </p>
        </Callout>
      </section>

    <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(125,211,252,0.12)] aspect-[7/3]">
        <Image
          src={Lunarien3Image}
          alt="Estatua de Selene en la mitología griega"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>

      <section className="space-y-6">
        <H2>La mujer lunar en astrología: retrato de la mujer con dominante Luna</H2>

        <Card title="La expresión Yin">
          <p>
            En una carta femenina (o de energía Yin), una bella Luna es considerada por la astrología tradicional como la posición más natural y dulce. Es la Madre y la Esposa por excelencia: entregada, protectora, capaz de transformar cualquier lugar en un capullo acogedor (el famoso &quot;hygge&quot; es un concepto profundamente lunar).
          </p>
          <p>
            Los autores antiguos afirman que &quot;toda mujer está primero bajo la influencia de la Luna&quot;, tan ligado está a ella el arquetipo femenino ancestral. Es la musa poética que, por su sola presencia apaciguadora, sana las angustias de quienes la rodean.
          </p>
          <p>
            Si la Luna es muy disonante, esa misma energía se vuelve en contra. La imaginación se vuelve quimérica, incluso paranoica. La dulzura se vuelve chismorreo. Puede entonces volverse perezosa, maldiciente, envidiosa de la vida ajena, huyendo de sus responsabilidades familiares y complaciéndose en el papel de la eterna víctima incomprendida.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Morfopsicología del tipo lunar: retrato físico y apariencia</H2>

        <Card title="El retrato físico">
          <p>
            La tipología física del tipo lunar está dominada por una sola forma geométrica: la redondez y la curva. El cuerpo físico traduce la dulzura del alma.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>El aspecto general: formas suaves, llenas, a veces rellenitas (&quot;a la Van Loo&quot;). El tipo lunar engorda con facilidad, pues el agua y las emociones tienden a estancarse en su organismo.</li>
            <li>El rostro: un &quot;redondo franco&quot;, a menudo lunar. Un cráneo redondeado sin ángulos duros. La tez suele ser muy clara, lechosa o pálida, temerosa del sol abrasador.</li>
            <li>La mirada: ojos grandes, a menudo redondos o ligeramente saltones, muy húmedos, que dan una expresión constante de asombro, de dulzura, incluso de infancia prolongada. El arco superciliar describe una curva perfecta.</li>
            <li>Los detalles: una frente abombada y lisa. Una nariz ancha, corta, a veces respingona o hundida en su parte media. Una boca fuerte y carnosa de tonos pálidos, y un mentón redondeado que se funde suavemente en el óvalo del rostro.</li>
          </ul>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Qué hay que recordar del perfil lunar en astrología</H2>

        <Callout tone="ok" title="Conclusión">
          <p>
            En conclusión: en una sociedad obsesionada por el rendimiento, el tipo lunar es el guardián de nuestra humanidad y de nuestra parte de infancia. Tener una fuerte dominante lunar en la carta es poseer el don raro de saber maravillarse, de atesorar el pasado y de ofrecer al mundo un refugio. ¿El único gran desafío del tipo lunar? Aprender a forjarse una coraza suficiente para proteger su extrema sensibilidad sin dejar jamás de soñar.
          </p>
        </Callout>
      </section>

      <section
        aria-label="Síntesis del retrato lunar"
        className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm"
      >
        <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
          <div className="p-5 font-serif text-lg font-medium text-white/90">Eje</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Expresión</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Riesgo</div>
        </div>

        <TableRow
          title="Intelecto"
          effect="Memoria, imaginación, inspiración, relato"
          reading="Falta de esfuerzo intelectual o huida de los marcos rígidos"
        />
        <TableRow
          title="Vida social"
          effect="Dulzura, receptividad, conciliación"
          reading="Labilidad, influencia excesiva del entorno"
        />
        <TableRow
          title="Amor"
          effect="Fidelidad, hogar, protección, hijos"
          reading="Sacrificio, dependencia, autoanulación"
        />
        <TableRow
          title="Vocación"
          effect="Educación, cuidado, hostelería, agua, multitud"
          reading="Pasividad, alcoholización, incapacidad de sostenerse solo"
        />
      </section>

      {/* ── FAQ visible (Featured Snippet + People Also Ask) ── */}
      <section className="space-y-6" aria-labelledby="faq-lunarien">
        <H2>Preguntas frecuentes sobre el tipo lunar</H2>
        <div id="faq-lunarien" className="space-y-4">
          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md" open>
            <summary className="cursor-pointer list-none p-6 font-serif text-lg font-medium text-white/90 transition-colors hover:text-sky-200 [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between">
                ¿Qué es un tipo lunar en astrología?
                <span className="ml-3 text-sky-300/60 transition-transform group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="px-6 pb-6 text-sm leading-relaxed text-white/75 md:text-base">
              El tipo lunar es un <strong>tipo planetario</strong> definido por la dominancia de la Luna en la carta natal. La sensibilidad extrema, la memoria notable, la imaginación poderosa y la necesidad de seguridad emocional caracterizan este perfil, a menudo considerado el más receptivo del zodiaco.
            </p>
          </details>
          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md">
            <summary className="cursor-pointer list-none p-6 font-serif text-lg font-medium text-white/90 transition-colors hover:text-sky-200 [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between">
                ¿Qué profesiones convienen a una dominante Luna?
                <span className="ml-3 text-sky-300/60 transition-transform group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="px-6 pb-6 text-sm leading-relaxed text-white/75 md:text-base">
              El tipo lunar destaca en las profesiones ligadas al cuidado, la escucha y la creatividad: psicología, literatura, poesía, historia, arqueología, periodismo narrativo, primera infancia y todo oficio donde la empatía sea una baza fundamental.
            </p>
          </details>
          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md">
            <summary className="cursor-pointer list-none p-6 font-serif text-lg font-medium text-white/90 transition-colors hover:text-sky-200 [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between">
                ¿Cuáles son los riesgos de una Luna afligida?
                <span className="ml-3 text-sky-300/60 transition-transform group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="px-6 pb-6 text-sm leading-relaxed text-white/75 md:text-base">
              Una Luna en aspecto disonante (cuadratura u oposición a Saturno, Marte) puede generar pasividad, dependencia afectiva, inestabilidad emocional, huida de la realidad y vulnerabilidad a las adicciones — el tipo lunar pierde entonces el contacto con la realidad.
            </p>
          </details>
          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md">
            <summary className="cursor-pointer list-none p-6 font-serif text-lg font-medium text-white/90 transition-colors hover:text-sky-200 [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between">
                ¿Cómo saber si soy un tipo lunar en mi carta natal?
                <span className="ml-3 text-sky-300/60 transition-transform group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="px-6 pb-6 text-sm leading-relaxed text-white/75 md:text-base">
              Comprueba si tu Luna es angular (en casa I, IV, VII o X), si recibe aspectos armónicos (trígono, sextil) y si está en dignidad (Cáncer, Tauro). Un cúmulo de planetas en Cáncer también refuerza el perfil lunar.
            </p>
          </details>
        </div>
      </section>

      <footer className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md sm:p-12">
        <H3>Para profundizar en los retratos planetarios</H3>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Pill>Luna</Pill>
          <Pill tone="sky">Retrato astrológico</Pill>
          <Pill tone="violet">Intuición</Pill>
          <Pill tone="emerald">Carta natal</Pill>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/blog/solarien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Leer el retrato del tipo solar
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/blog/mercurien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Leer el retrato del tipo mercurial
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}
