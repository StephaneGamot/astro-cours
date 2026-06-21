import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import Image from "next/image";
import { AUTHOR_PERSON, PUBLISHER_ORG } from "@/lib/seo";
import PlutonienImage from "@/public/images/blog/plutonien.webp";
import Plutonien2Image from "@/public/images/blog/plutonien2.webp";

export const meta = {
  slug: "plutonien",
  title:
    "El plutoniano: señor de la sombra y la renovación",
  description:
    "Retrato del plutoniano en astrología: intensidad, verdad, crisis y resiliencia. Descubre la transformación y el impacto de Plutón en una carta natal.",
  date: "2026-03-29",
  tags: [
    "Pluton",
    "plutonien",
    "portrait astrologique",
    "transformation",
    "intensité",
    "thème astral",
    "psychologie astrologique",
    "amour",
    "karma",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/plutonien.webp",
};

function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-fuchsia-300">
      <span
        className="h-1.5 w-1.5 animate-pulse rounded-full bg-fuchsia-300"
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
        className="mr-4 block h-px w-8 bg-gradient-to-r from-fuchsia-500/60 to-transparent"
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
      box: "border-fuchsia-500/30 bg-fuchsia-500/10 shadow-[0_0_30px_rgba(217,70,239,0.06)]",
      icon: "text-fuchsia-300",
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
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-sm transition-all hover:border-fuchsia-300/30">
      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-300/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
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
    <div className="group grid grid-cols-1 border-b border-white/10 transition-colors hover:bg-fuchsia-300/[0.03] md:grid-cols-3">
      <div className="p-4 font-serif text-lg text-fuchsia-200/90">{title}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{effect}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{reading}</div>
    </div>
  );
}

export default function PlutonienPost() {
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
                  name: "¿Qué es un plutoniano en astrología?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Un tipo planetario con Plutón dominante: intensidad, magnetismo, penetración psicológica, capacidad de regeneración y poder de transformación.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué profesiones convienen a un dominante de Plutón?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Psicoanálisis, investigación, cirugía, criminología, finanzas de crisis, ocultismo y los oficios de la sombra y del poder.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué riesgos conlleva un Plutón afligido?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Manipulación, obsesiones destructivas, paranoia, dominación psicológica, violencia subterránea y autodestrucción.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo sé si soy plutoniano?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Plutón angular, en Escorpio, en aspecto al Sol o al Ascendente, un stellium en Escorpio, o el Sol en la casa VIII.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(217,70,239,0.12)] aspect-[7/3]">
        <Image
          src={PlutonienImage}
          alt="Retrato simbólico del temperamento plutoniano en astrología"
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
          className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-fuchsia-300/5 blur-[80px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-fuchsia-300/5 via-transparent to-black/50"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <Kicker>Plutón • sombra • verdad • crisis • renacimiento</Kicker>

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

          <div className="mt-8 rounded-2xl border border-purple-400/20 bg-purple-400/[0.04] px-6 py-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-purple-300/80">Definición</p>
            <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
              El <strong>plutoniano en astrología</strong> designa a una persona cuyo <Link href="/planetes/pluton" className="underline hover:text-purple-200">Plutón</Link> ocupa una posición dominante en la <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline hover:text-purple-200">carta natal</Link> (angular, bien aspectado, en Escorpio). Se caracteriza por una intensidad psicológica fuera de lo común, un magnetismo hipnótico y una capacidad de regeneración que lo empuja a atravesar — y transformar — las crisis más profundas.
            </p>
          </div>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            ¿Tienes <strong>Plutón dominante</strong> en tu carta natal y una mirada que parece atravesar las almas? Este poder magnético fascina e incomoda a partes iguales: manipulación, obsesión, pulsiones destructivas. Este retrato completo del <strong>temperamento plutoniano</strong> — psicología, carrera, amor, morfopsicología — se sumerge en las profundidades de este dominante planetario extremo, desde el arquetipo de Hades hasta el reto de la transmutación interior.
          </p>

          <div className="mt-8 border-t border-white/5 pt-6">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-3" aria-label="Puntos clave del retrato plutoniano">
        <Stat label="Fuerza central" value="Intensidad y verdad" />
        <Stat label="Terreno natural" value="Crisis y transformación" />
        <Stat label="Sombra principal" value="Venganza y control" />
      </section>

      <section className="space-y-6">
        <H2>La inteligencia plutoniana: penetración psicológica y pensamiento abismal</H2>

        <Card title="El intelecto">
          <p>
            La mente del plutoniano es un láser capaz de atravesar la materia. Aunque no tiene la ligereza de Mercurio ni el idealismo de Neptuno, posee una facultad intelectual aterradora para el común de los mortales: una perspicacia absoluta.
          </p>
          <p>
            El plutoniano está obsesionado con lo que permanece oculto. Las apariencias, los discursos pulidos y las cortesías de fachada lo aburren profundamente, e incluso lo desprecian. Su intelecto funciona como el de un detective o un psicoanalista: quiere llegar al fondo de las cosas, desenterrar los secretos, comprender los tabúes y sacar a la luz todo lo que la sociedad se esfuerza en esconder bajo la alfombra.
          </p>
          <p>
            Posee un auténtico detector de mentiras incorporado. Intentar mentirle a un plutoniano es un insulto a su inteligencia; capta el inconsciente, lo no dicho y las grietas de sus interlocutores en una fracción de segundo. Por eso su mente brilla en la investigación compleja, la búsqueda oculta, la criminología, la estrategia de la sombra y el estudio de los misterios de la psique humana.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>El plutoniano en sociedad: magnetismo oscuro, poder e intimidación</H2>

        <Card title="La vida social">
          <p>
            En sociedad, el plutoniano nunca pasa inadvertido, aunque no pronuncie una sola palabra. Desprende un aura de misterio, una densidad y un magnetismo animal que polarizan de inmediato a quienes lo rodean. El refrán es bien conocido en astrología: a un plutoniano se le adora o se le detesta, pero no deja indiferente a nadie.
          </p>
          <p>
            Su temperamento se rige por la ley del &quot;Todo o Nada&quot;. Lo tibio, la media tinta y los compromisos le resultan insoportables. En sus relaciones es de una exigencia extrema. La amistad de un plutoniano es un pacto de sangre: si te ganas su confianza, irá al infierno para salvarte. Mostrará una lealtad indestructible y un apoyo inquebrantable en las peores pruebas.
          </p>
          <p>
            ¿El reverso de la moneda? La traición es imperdonable. Si rompes su confianza, el plutoniano no se limita a borrarte de su vida: te borra de su realidad. Y si se siente amenazado, su capacidad de respuesta (a menudo psicológica) es de una precisión quirúrgica y temible.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>El plutoniano en el amor: pasión total, dominio y transformación</H2>

        <Card title="El amor">
          <p>
            La vida sentimental del plutoniano es cualquier cosa menos un río tranquilo. Es un volcán en erupción. Para él, el amor no es un entretenimiento, es una crisis transformadora.
          </p>
          <p>
            El plutoniano no busca una pareja para compartir las facturas y las comidas del domingo; busca la fusión de las almas y de los cuerpos. Desea poseer al otro tanto como desea ser poseído. Esta intensidad engendra una vida amorosa pasional, carnal (la sexualidad, dominio de Plutón y de Escorpio, suele ser central y liberadora para él), pero también peligrosa.
          </p>
          <p>
            Su mayor reto es no hundirse en la obsesión, los celos o la necesidad de control. El plutoniano suele temer al abandono o a la vulnerabilidad, lo que puede llevarlo a &quot;poner a prueba&quot; a su pareja para medir la solidez de su amor. Pero cuando encuentra a alguien capaz de acoger su intensidad sin asustarse, el plutoniano ofrece el amor más profundo, más protector y más transformador de todo el zodiaco.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Profesiones del plutoniano: ¿qué carreras para un dominante de Plutón?</H2>

        <Card title="La vocación">
          <p>
            Si hay una palabra que resume el destino de un plutoniano, es la Resiliencia. La vida de este nativo suele estar jalonada de crisis mayores: duelos simbólicos, ruinas, desplomes psicológicos o cambios de vida radicales.
          </p>
          <p>
            Pero allí donde esas pruebas destruirían a cualquier otro signo, el plutoniano encuentra en ellas su verdadera fuerza. Es el mito del Fénix. Está hecho para sobrevivir al infierno. Necesita que todo arda para renacer de sus cenizas, más fuerte, más puro y más lúcido que antes.
          </p>
          <p>
            En lo profesional, el plutoniano destaca allá donde haya una crisis que gestionar, un secreto que descifrar o una transformación que llevar a cabo:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>La psicología de las profundidades: psiquiatra, psicoanalista, hipnoterapeuta.</li>
            <li>Lo cortante y lo vital: cirujanos, médicos forenses, urgencias absolutas.</li>
            <li>El poder oculto y financiero: gestión de patrimonio complejo, auditorías de crisis, trading, investigación fiscal (Plutón rige las riquezas subterráneas).</li>
            <li>El esoterismo: astrología kármica, ocultismo, chamanismo.</li>
          </ul>
          <p>
            Es simple: cuando todo va bien, el plutoniano se aburre o se angustia. Cuando todo se derrumba y todo el mundo entra en pánico, él toma el control con una sangre fría absoluta.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Plutón afligido en la carta natal: obsesiones, manipulación y autodestrucción</H2>

        <Callout tone="warn" title="La sombra de Plutón">
          <p>
            Cuando Plutón está fuertemente disonante (por malos aspectos con Marte, la Luna o el Sol), la sombra engulle la luz. La sed de verdad se convierte en una paranoia destructiva, y la necesidad de fusión se convierte en una tiranía psicológica.
          </p>
          <p>
            El plutoniano afligido es maquiavélico. Si no logra sublimar su energía, puede desarrollar una verdadera fascinación por el poder puro, la manipulación, e incluso la destrucción (del otro o de sí mismo). Es el arquetipo del verdugo emocional o del autosaboteador compulsivo.
          </p>
          <p>
            Negándose a soltar, puede encerrarse en rencores eternos, buscando la venganza en lugar de la sanación. El karma del plutoniano disonante es darse cuenta de que el veneno que destina a los demás siempre acaba envenenándolo a él mismo.
          </p>
        </Callout>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>La plutoniana en astrología: retrato de la mujer con dominante de Plutón</H2>

        <Card title="La expresión Yin">
          <p>
            En una carta natal dominada por la energía Yin (o femenina), un buen Plutón da a luz a una de las figuras más poderosas del inconsciente colectivo: la Mujer-Medicina, la Bruja (en el sentido noble) o la Sacerdotisa.
          </p>
          <p>
            Posee una intuición visceral y un carisma hipnótico. Acuden a ella para ser sanados de sus traumas más inconfesables, porque desprende un aura de comprensión absoluta frente al dolor. No le teme a lo &quot;sucio&quot;, a lo complejo ni a las lágrimas.
          </p>
          <p>
            A menudo es una mujer fatal a su pesar, cuya simple presencia despierta los deseos enterrados y las angustias de quienes la rodean. Si Plutón está maleficiado, se convertirá en la manipuladora, la experta en relaciones tóxicas o la figura de la &quot;viuda negra&quot;, utilizando su clarividencia emocional para someter en lugar de liberar.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Morfopsicología del plutoniano: retrato físico y apariencia</H2>

        <Card title="El retrato físico">
          <p>
            Al plutoniano no se le reconoce por la forma de su nariz ni por su estatura, sino por la intensidad de su presencia.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>La mirada: es la firma absoluta del plutoniano. La mirada es insondable, oscura (aunque tenga los ojos claros), penetrante e hipnótica. Cuando te fija, tienes la extraña sensación de que está leyendo directamente en tu alma, o de que te está desnudando.</li>
            <li>El porte general: un aura de impenetrabilidad. El plutoniano desprende una fuerza contenida, como un volcán bajo el hielo. Sus movimientos suelen ser lentos, calculados, silenciosos. Puede atravesar una habitación sin hacer ruido, pero todo el mundo notará su presencia.</li>
            <li>El rostro: los rasgos suelen ser densos, marcados por un arco superciliar pronunciado (la &quot;mirada tenebrosa&quot;). El rostro rara vez es liso; lleva las huellas de una interioridad en ebullición.</li>
            <li>El estilo: una fuerte inclinación por los colores oscuros, el negro (color de absorción de la luz y del misterio), o el rojo sangre profundo. Huye de todo lo chillón, superficial o demasiado de moda.</li>
          </ul>
        </Card>
      </section>


      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(217,70,239,0.12)] aspect-[7/3]">
        <Image
          src={Plutonien2Image}
          alt="Retrato de Hades en astrología"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>

      <section className="space-y-6">
        <H2>Lo que hay que recordar del perfil plutoniano en astrología</H2>

        <Callout tone="ok" title="Conclusión">
          <p>
            En conclusión: tener un fuerte dominante plutoniano en la carta natal es un camino de exigencia extrema. Es estar investido de la misión de un alquimista espiritual: transformar el plomo en oro, y el dolor en poder. Si el plutoniano acepta atravesar sus propias tinieblas sin recrearse en ellas, se convierte en el ser más luminoso del zodiaco, demostrando al mundo entero que ninguna noche es eterna y que se puede uno levantar de cualquier cosa.
          </p>
        </Callout>
      </section>

      <section
        aria-label="Síntesis del retrato plutoniano"
        className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm"
      >
        <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
          <div className="p-5 font-serif text-lg font-medium text-white/90">Eje</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Expresión</div>
          <div className="p-5 text-lg font-medium text-white/90">Riesgo</div>
        </div>

        <TableRow
          title="Intelecto"
          effect="Perspicacia, verdad oculta, visión de rayos X"
          reading="Paranoia, suspicacia, obsesión por lo no dicho"
        />
        <TableRow
          title="Vida social"
          effect="Magnetismo, lealtad absoluta, intensidad"
          reading="Borrado brutal del otro, venganza, ruptura total"
        />
        <TableRow
          title="Amor"
          effect="Fusión, pasión, transformación, sexualidad central"
          reading="Celos, control, obsesión, pruebas destructivas"
        />
        <TableRow
          title="Vocación"
          effect="Crisis, psique, cirugía, finanzas ocultas, esoterismo"
          reading="Manipulación, autosabotaje, fascinación por el poder"
        />
      </section>

      <section id="faq-plutonien" className="space-y-6">
        <H2>Preguntas frecuentes sobre el plutoniano</H2>

        <div className="space-y-4">
          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
            <summary className="flex cursor-pointer items-center gap-3 font-serif text-lg font-medium text-white/90 transition-colors hover:text-purple-200">
              <svg className="h-5 w-5 shrink-0 text-purple-300/60 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              ¿Qué es un plutoniano en astrología?
            </summary>
            <p className="mt-4 pl-8 text-sm leading-relaxed text-white/70 md:text-base">
              Un tipo planetario con Plutón dominante: intensidad, magnetismo, penetración psicológica, capacidad de regeneración y poder de transformación.
            </p>
          </details>

          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
            <summary className="flex cursor-pointer items-center gap-3 font-serif text-lg font-medium text-white/90 transition-colors hover:text-purple-200">
              <svg className="h-5 w-5 shrink-0 text-purple-300/60 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              ¿Qué profesiones convienen a un dominante de Plutón?
            </summary>
            <p className="mt-4 pl-8 text-sm leading-relaxed text-white/70 md:text-base">
              Psicoanálisis, investigación, cirugía, criminología, finanzas de crisis, ocultismo, los oficios de la sombra y del poder.
            </p>
          </details>

          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
            <summary className="flex cursor-pointer items-center gap-3 font-serif text-lg font-medium text-white/90 transition-colors hover:text-purple-200">
              <svg className="h-5 w-5 shrink-0 text-purple-300/60 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              ¿Qué riesgos conlleva un Plutón afligido?
            </summary>
            <p className="mt-4 pl-8 text-sm leading-relaxed text-white/70 md:text-base">
              Manipulación, obsesiones destructivas, paranoia, dominación psicológica, violencia subterránea, autodestrucción.
            </p>
          </details>

          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
            <summary className="flex cursor-pointer items-center gap-3 font-serif text-lg font-medium text-white/90 transition-colors hover:text-purple-200">
              <svg className="h-5 w-5 shrink-0 text-purple-300/60 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              ¿Cómo sé si soy plutoniano?
            </summary>
            <p className="mt-4 pl-8 text-sm leading-relaxed text-white/70 md:text-base">
              Plutón angular, en Escorpio, en aspecto al Sol o al Ascendente, un stellium en Escorpio, o el Sol en la casa VIII.
            </p>
          </details>
        </div>
      </section>

      <footer className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md sm:p-12">
        <H3>Para profundizar en los retratos planetarios</H3>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Pill>Plutón</Pill>
          <Pill tone="sky">Retrato astrológico</Pill>
          <Pill tone="violet">Transformación</Pill>
          <Pill tone="emerald">Carta natal</Pill>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/blog/neptunien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Leer el retrato del neptuniano
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/blog/solarien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Leer el retrato del solariano
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}