import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import Image from "next/image";
import { AUTHOR_PERSON, PUBLISHER_ORG } from "@/lib/seo";
import NeptunienImage from "@/public/images/blog/neptunien.webp";
import Neptunien2Image from "@/public/images/blog/neptunien2.webp";
import Neptunien3Image from "@/public/images/blog/neptunien3.webp";

export const meta = {
  slug: "neptunien",
  title: "El Neptuniano: el visionario inasible",
  description:
    "Retrato del Neptuniano en astrología: intuición, espiritualidad, hipersensibilidad y arte. Explora el impacto del misticismo de Neptuno en una carta natal.",
  date: "2026-03-30",
  tags: [
    "Neptune",
    "neptunien",
    "portrait astrologique",
    "intuition",
    "spiritualité",
    "thème astral",
    "psychologie astrologique",
    "mysticisme",
    "amour",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/neptunien.webp",
};

function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
      <span
        className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400"
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
        className="mr-4 block h-px w-8 bg-gradient-to-r from-amber-500/50 to-transparent"
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
  children,
  subtitle,
}: {
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-md transition-colors hover:bg-white/[0.05]">
      <div>

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
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-sm transition-all hover:border-white/20">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
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
    <div className="group grid grid-cols-1 border-b border-white/10 transition-colors hover:bg-white/[0.02] md:grid-cols-3">
      <div className="p-4 font-serif text-lg text-amber-200/90">{title}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{effect}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{reading}</div>
    </div>
  );
}

export default function NeptunienPost() {
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
                  name: "¿Qué es un Neptuniano en astrología?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Tipo planetario con Neptuno dominante: intuición, imaginación, empatía universal, sensibilidad mediúmnica, permeabilidad a las atmósferas.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué profesiones para una dominante de Neptuno?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Música, cine, fotografía, espiritualidad, oficios del mar, farmacia, cuidados holísticos, poesía.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué riesgos hay con un Neptuno afligido?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Adicciones, mentiras, ilusiones, huida de lo real, confusión de identidad, estafas, manipulación afectiva.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo saber si soy Neptuniano?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Neptuno angular, en Piscis, aspectos al Sol o a la Luna, un cúmulo en Piscis, el Sol en la Casa XII.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(251,191,36,0.1)] aspect-[7/3]">
        <Image
          src={NeptunienImage}
          alt="Retrato simbólico del temperamento neptuniano en astrología"
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
          className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-[80px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/50"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <Kicker>Neptuno • intuición • misticismo • ideal • disolución</Kicker>

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

          <div className="mt-8 rounded-2xl border border-indigo-400/20 bg-indigo-400/[0.04] px-6 py-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-300/80">Definición</p>
            <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
              El <strong>Neptuniano en astrología</strong> designa a un individuo cuyo <Link href="/planetes/neptune" className="underline hover:text-indigo-200">Neptuno</Link> ocupa una posición dominante en la <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline hover:text-indigo-200">carta natal</Link> (angular, bien aspectado, en Piscis o Cáncer). Se caracteriza por una intuición fuera de lo común, una imaginación desbordante y una permeabilidad a los mundos sutiles que lo vuelve a la vez visionario y vulnerable.
            </p>
          </div>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            ¿Tienes <strong>Neptuno dominante</strong> en tu carta natal y el mundo concreto te parece a menudo irreal, ajeno, desfasado? Esta sensibilidad mediúmnica es un don extraordinario, pero también una trampa: confusión, adicciones, huida de la realidad. Este retrato completo del <strong>temperamento neptuniano</strong> — psicología, carrera, amor, morfopsicología — explora las profundidades de esta dominante planetaria inasible, desde el arquetipo de Poseidón hasta el riesgo de la disolución de uno mismo.
          </p>

          <div className="mt-8 border-t border-white/5 pt-6">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-3" aria-label="Puntos clave del retrato neptuniano">
        <Stat label="Fuerza central" value="Intuición y clarividencia" />
        <Stat label="Terreno natural" value="Lo invisible y la inspiración" />
        <Stat label="Sombra principal" value="Huida de lo real" />
      </section>

      <section className="space-y-6">
        <H2>La inteligencia neptuniana: intuición, imaginación y pensamiento simbólico</H2>

        <Card>
          <p>
            Captar la esencia del Neptuniano exige cierta humildad. La tradición astrológica clásica a veces tiene dificultades para definirlo con precisión, y con razón: el Neptuniano no vive en el mundo de las certezas, sino en el de las sensaciones.
          </p>
          <p>
            Allí donde otros tipos planetarios (como el Saturniano o el Mercuriano) se apoyan en la lógica, las matemáticas o el pragmatismo absoluto, el intelecto del Neptuniano funciona como un radar ultrasensible. ¿Su característica principal? Una intuición fulgurante que muy a menudo roza la presciencia o la clarividencia. De hecho, a esta firma astral se le atribuyen naturalmente dones evidentes de mediumnidad o telepatía.
          </p>
          <p>Sobre esta base, es evidente que el mundo material, frío y numérico, lo aburre profundamente. El Neptuniano encuentra su oxígeno en:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>La creación artística: la poesía, la literatura, la pintura o la novela de anticipación e imaginación.</li>
            <li>La exploración de lo invisible: el ocultismo, la astrología, los estudios místicos o las vías iniciáticas.</li>
          </ul>
          <p>
            No es raro que el Neptuniano produzca obras vanguardistas, percibidas como "raras" o incomprensibles por sus contemporáneos. Si es culto, puede formular teorías fulgurantes, dictadas por un destello interior, muy adelantadas a su tiempo. Es el arquetipo mismo del genio incomprendido en vida, cuyo brillo solo suele reconocerse y celebrarse después de su partida de este mundo.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>El Neptuniano en sociedad: empatía universal, vaguedad e idealismo</H2>

        <Card>
          <p>
            En sus relaciones cotidianas, el Neptuniano es un alma de rara dulzura. Conciliador, amable, profundamente compasivo y siempre dispuesto a ayudar, es un oído atento excepcional. Sin embargo, no le pidas en absoluto que tenga los pies en la tierra ni que se ajuste a la norma.
          </p>
          <p>
            El Neptuniano se siente fundamentalmente incómodo en nuestra civilización moderna hipermaterialista, centrada en el consumo, la competencia y la rentabilidad. Es un gran soñador, un idealista absoluto, incluso un utopista.
          </p>
          <p>
            Ante la dureza del mundo, no elige el enfrentamiento guerrero (propio del Marciano), sino más bien el compromiso ideológico. Es muy frecuente encontrar dominantes neptunianas en personas que se adhieren a movimientos políticos idealistas, sindicatos, asociaciones humanitarias o colectivos alternativos (sobre todo si Neptuno está vinculado a Marte en la carta natal). ¿Su motor intelectual y social? La esperanza visceral de sanar a la sociedad y crear un mundo mejor.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>El Neptuniano en el amor: fusión mística, sacrificio e ilusiones sentimentales</H2>

        <Card>
          <p>
            En el plano afectivo, el Neptuniano es una esponja emocional. Ultrasensible e impresionable, no busca una simple alianza de vida: busca la fusión de las almas.
          </p>
          <p>
            Sin embargo, esta búsqueda de un ideal absoluto suele volverlo inestable en la realidad de la pareja. Es propenso a múltiples vacilaciones, dividido entre sus sueños y la realidad prosaica. En el día a día, tiende naturalmente a dejarse llevar. En caso de unión, muy a menudo es su pareja quien toma las riendas, toma las decisiones tajantes y "lleva el timón" del hogar.
          </p>
          <p>
            ¿El talón de Aquiles del Neptuniano en el amor? Lo material. Su falta de aptitud para los asuntos financieros, la administración o la gestión de lo cotidiano puede convertirse en una fuente importante de tensiones conyugales. Si no encuentra una pareja capaz de anclar la relación en la realidad con benevolencia, esta firma planetaria puede traer desilusiones o sacrificios afectivos dolorosos.
          </p>
        </Card>
      </section>

       <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(251,191,36,0.1)] aspect-[7/3]">
        <Image
          src={Neptunien2Image}
          alt="Retrato del Dios de los 7 océanos en astrología"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>

      <section className="space-y-6">
        <H2>Profesiones del Neptuniano: ¿qué carreras para una dominante de Neptuno?</H2>

        <Card>
          <p>
            Aparentemente desprovisto de ambición material (el poder por el poder no le interesa), el Neptuniano tiene una trayectoria de vida a menudo sinuosa. Sin embargo, a veces accede a una inmensa celebridad. Ese éxito no proviene de un plan de carrera calculado, sino que suele surgir por una alineación casi mágica con circunstancias colectivas (el Neptuniano capta el "espíritu de la época" como nadie) o gracias a destellos de genio inexplicables.
          </p>
          <p>En un destino más "ordinario", el Neptuniano florecerá lejos de las oficinas grises y las rutinas alienantes. Encuentra su verdadera vocación en:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>El cuidado y la sanación: la medicina, las profesiones paramédicas, la psicología, la energética.</li>
            <li>El misticismo: las ciencias adivinatorias, la astrología, la cartomancia.</li>
            <li>Las palabras y las imágenes: la colaboración literaria, la fotografía, el cine.</li>
            <li>El elemento Agua: la navegación, la oceanografía, o incluso, de forma más pragmática, las industrias ligadas a los líquidos y los combustibles.</li>
          </ul>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Neptuno afligido en la carta natal: adicciones, mentiras y huida de lo real</H2>

        <Callout tone="warn" title="La sombra de Neptuno">
          <p>
            Como todo arquetipo astrológico, el Neptuniano tiene su parte de sombra. Cuando Neptuno está muy afligido (por disonancias importantes en la carta natal), la hipersensibilidad se convierte en una vulnerabilidad tóxica.
          </p>
          <p>
            Incapaz de soportar la dureza del mundo, el Neptuniano disonante busca escapar. Esta necesidad de huida puede, lamentablemente, conducirlo hacia paraísos artificiales: alcoholismo, toxicomanía o adicciones modernas (pantallas, videojuegos, ilusiones virtuales).
          </p>
          <p>
            En casos extremos, puede desocializarse por completo, incapaz de asegurarse una vida material decente. Psicológicamente, este desequilibrio puede manifestarse en una mentalidad paradójica: un complejo de superioridad espiritual en el que el individuo se cree "demasiado puro" o "demasiado inteligente" para rebajarse a tareas materiales que considera indignas de él.
          </p>
        </Callout>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Morfopsicología del Neptuniano: retrato físico y apariencia</H2>

        <Card>
          <p>
            Nota enciclopédica: La influencia de Neptuno también se lee a escala mundial. No se puede evitar relacionar el tránsito de Neptuno por el signo intenso y transgresor de Escorpio (de 1957 a 1970) con las convulsiones de aquella época. Fue la gran época de la explosión del movimiento hippie, de la banalización de las drogas psicodélicas, de la contestación utópica y de la emergencia de ideales "estrambóticos" que buscaban derribar el orden establecido (en particular durante las cinco oposiciones históricas entre Saturno y Neptuno de aquel periodo).
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>La Neptuniana en astrología: retrato de la mujer con dominante de Neptuno</H2>

        <Card>
          <p>
            En una carta natal donde la energía femenina (el Yin, la interiorización) es predominante, un Neptuno armonioso da lugar a un arquetipo fascinante: el de la sacerdotisa o la musa.
          </p>
          <p>
            La intuición ya no es solo una herramienta, es una guía absoluta. Esta persona nunca construirá su vida sobre razonamientos puramente lógicos o positivistas. Se dejará llevar por "voces interiores", sincronicidades e inspiraciones cuyo origen racional sería incapaz de explicar, pero que resultarán terriblemente acertadas. Tendrá disposiciones excepcionales para el desarrollo espiritual y la videncia.
          </p>
          <p>
            En cambio, si Neptuno está fuertemente maleficiado en esta polaridad, el peligro es la disolución total de la personalidad. Carente de sentido práctico, la persona se vuelve demasiado inestable para mantener un rumbo de vida coherente. La atracción natural por el misterio puede entonces hundirse en esferas más oscuras: miedos irracionales, paranoia, creencia en maldiciones, complejo de persecución o atracción malsana por prácticas mágicas dudosas. Un Neptuno mal aspectado siempre exige un esfuerzo consciente de anclaje para mantener un buen equilibrio mental, sea cual sea el género de la persona.
          </p>
        </Card>
      </section>

     <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(251,191,36,0.1)] aspect-[7/3]">
        <Image
          src={Neptunien3Image}
          alt="Retrato de Neptuno en astrología"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>

      <section className="space-y-6">
        <H2>Lo que hay que recordar del perfil Neptuniano en astrología</H2>

        <Callout tone="ok" title="Dominante neptuniana">
          <p>
            En conclusión: tener una dominante neptuniana en la carta natal es a la vez un desafío material y un inmenso regalo espiritual. Es llevar dentro el océano entero, con sus tempestades invisibles y sus tesoros sumergidos. Para florecer, el Neptuniano solo tiene un deber: encontrar un ancla lo bastante sólida para no ahogarse en sus propios sueños, a fin de poder traer a la superficie las maravillas que solo él es capaz de percibir.
          </p>
        </Callout>
      </section>

      <section
        aria-label="Síntesis del retrato neptuniano"
        className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm"
      >
        <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
          <div className="p-5 font-serif text-lg font-medium text-white/90">Eje</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Expresión</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Riesgo</div>
        </div>

        <TableRow
          title="Intelecto"
          effect="Intuición, clarividencia, destellos"
          reading="Confusión o flotación si Neptuno está afligido"
        />
        <TableRow
          title="Vida social"
          effect="Compasión, utopía, compromiso idealista"
          reading="Desfase con lo material real"
        />
        <TableRow
          title="Amor"
          effect="Fusión, sensibilidad, entrega"
          reading="Desilusiones, dependencia, sacrificio"
        />
        <TableRow
          title="Vocación"
          effect="Arte, cuidado, mística, imagen, agua"
          reading="Trayectoria sinuosa, falta de anclaje"
        />
      </section>

      <section id="faq-neptunien" className="space-y-6">
        <H2>Preguntas frecuentes sobre el Neptuniano</H2>

        <div className="space-y-4">
          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
            <summary className="flex cursor-pointer items-center gap-3 font-serif text-lg font-medium text-white/90 transition-colors hover:text-indigo-200">
              <svg className="h-5 w-5 shrink-0 text-indigo-300/60 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              ¿Qué es un Neptuniano en astrología?
            </summary>
            <p className="mt-4 pl-8 text-sm leading-relaxed text-white/70 md:text-base">
              Tipo planetario con Neptuno dominante: intuición, imaginación, empatía universal, sensibilidad mediúmnica, permeabilidad a las atmósferas.
            </p>
          </details>

          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
            <summary className="flex cursor-pointer items-center gap-3 font-serif text-lg font-medium text-white/90 transition-colors hover:text-indigo-200">
              <svg className="h-5 w-5 shrink-0 text-indigo-300/60 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              ¿Qué profesiones para una dominante de Neptuno?
            </summary>
            <p className="mt-4 pl-8 text-sm leading-relaxed text-white/70 md:text-base">
              Música, cine, fotografía, espiritualidad, oficios del mar, farmacia, cuidados holísticos, poesía.
            </p>
          </details>

          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
            <summary className="flex cursor-pointer items-center gap-3 font-serif text-lg font-medium text-white/90 transition-colors hover:text-indigo-200">
              <svg className="h-5 w-5 shrink-0 text-indigo-300/60 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              ¿Qué riesgos hay con un Neptuno afligido?
            </summary>
            <p className="mt-4 pl-8 text-sm leading-relaxed text-white/70 md:text-base">
              Adicciones, mentiras, ilusiones, huida de lo real, confusión de identidad, estafas, manipulación afectiva.
            </p>
          </details>

          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
            <summary className="flex cursor-pointer items-center gap-3 font-serif text-lg font-medium text-white/90 transition-colors hover:text-indigo-200">
              <svg className="h-5 w-5 shrink-0 text-indigo-300/60 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              ¿Cómo saber si soy Neptuniano?
            </summary>
            <p className="mt-4 pl-8 text-sm leading-relaxed text-white/70 md:text-base">
              Neptuno angular, en Piscis, aspectos al Sol o a la Luna, un cúmulo en Piscis, el Sol en la Casa XII.
            </p>
          </details>
        </div>
      </section>

      <footer className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md sm:p-12">
        <H3>Para profundizar en los retratos planetarios</H3>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Pill>Neptuno</Pill>
          <Pill tone="sky">Retrato astrológico</Pill>
          <Pill tone="violet">Espiritualidad</Pill>
          <Pill tone="emerald">Carta natal</Pill>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/blog/uranien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Leer el retrato del Uraniano
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/blog/plutonien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Leer el retrato del Plutoniano
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}
