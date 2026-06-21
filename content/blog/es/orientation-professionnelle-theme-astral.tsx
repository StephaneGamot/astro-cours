import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import Image from "next/image";
import { AUTHOR_PERSON, PUBLISHER_ORG } from "@/lib/seo";
import OrientationProImage from "@/public/images/blog/orientation-professionnelle-theme-astral.webp";

export const meta = {
  slug: "orientation-professionnelle-theme-astral",
  title: "Orientación profesional y carta natal",
  description:
    "Analiza la orientación profesional en una carta natal: la Casa X, la Casa I, la Parte de la Fortuna y el Medio Cielo para definir vocación y estatus social.",
  date: "2026-03-28",
  tags: [
    "orientation professionnelle",
    "vocation",
    "métier",
    "carrière",
    "maison X",
    "milieu du ciel",
    "thème astral",
    "interprétation",
    "Mercure",
    "mars",
    "Vénus",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/orientation-professionnelle-theme-astral.webp",
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

export default function OrientationProfessionnelleThemeAstralPost() {
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
                  name: "¿Qué casa mirar para la orientación profesional en astrología?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La Casa X sigue siendo prioritaria para el reconocimiento social y la carrera, pero la Casa I también es esencial para el temperamento, la identidad y la manera de ocupar el propio lugar en la vida.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué planetas dan la naturaleza fundamental de la vocación?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "En este método, Marte, Venus y Mercurio son los tres señores de la acción que describen la naturaleza fundamental de la vocación: acción, arte o intelecto.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Basta el Medio Cielo para encontrar la profesión?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. El Medio Cielo es muy importante, pero una lectura seria también cruza las Casas I, VII, IV, II, VI, la Parte de la Fortuna, los aspectos, el regente del MC y la jerarquía de los planetas implicados.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(251,191,36,0.1)] aspect-[7/3]">
        <Image
          src={OrientationProImage}
          alt="Ilustración simbólica de la orientación profesional en astrología"
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
          <Kicker>Vocación • Profesión • Casa X • Casa I • Medio Cielo</Kicker>

          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="font-serif text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl md:max-w-3xl">
              Encontrar la orientación profesional en una carta natal
            </h2>

            <div className="flex flex-wrap gap-3 text-sm text-white/70">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                Lectura intermedia
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                Método pro
              </span>
            </div>
          </div>

          <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            La <strong className="font-medium text-amber-200">orientación profesional en astrología</strong>{" "}
            no se reduce a "un oficio escrito en el cielo". Los indicadores profesionales
            muestran más bien lo que nos atrae, a veces muy pronto, a veces de forma
            inconsciente, y aquello para lo que desarrollamos más naturalmente ciertas
            competencias. Para leer la vocación, la profesión o la carrera, hay que cruzar la{" "}
            <strong className="font-medium text-white">Casa X</strong>, la{" "}
            <strong className="font-medium text-white">Casa I</strong>, los{" "}
            <strong className="font-medium text-white">señores de la acción</strong>, la{" "}
            <strong className="font-medium text-white">Parte de la Fortuna</strong>, el{" "}
            <strong className="font-medium text-white">Medio Cielo</strong> y la fuerza real
            de los planetas implicados.
          </p>

          <div className="mt-8 border-t border-white/5 pt-6">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-3" aria-label="Puntos clave del artículo">
        <Stat label="Casa prioritaria" value="Casa X" />
        <Stat label="Casa de la identidad" value="Casa I" />
        <Stat label="Planetas clave" value="Marte • Venus • Mercurio" />
      </section>

      <Callout tone="note" title="El ángulo de lectura correcto">
        <p>
          Los indicadores profesionales no dan únicamente un oficio "posible".
          Sobre todo, muestran una{" "}
          <strong className="text-white">naturaleza de acción</strong>, una manera de ponerse
          en movimiento, un tipo de competencia que se desarrolla más fácilmente y un
          estilo de compromiso con el trabajo.
        </p>
        <p>
          Lo ideal es que la profesión real esté en sintonía con la vocación profunda.
          Cuando no es así, suele volverse más difícil florecer de forma duradera.
        </p>
      </Callout>

      <Divider />

      <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 shadow-2xl backdrop-blur-md sm:p-12">
        <div
          className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-amber-500/10 blur-[60px]"
          aria-hidden="true"
        />

        <h2 className="relative z-10 font-serif text-2xl font-medium text-white sm:text-3xl">
          El método completo para buscar la vocación
        </h2>

        <div className="relative z-10 mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "1. Buscar un planeta en la Casa X o en la Casa I",
            "2. En su defecto, mirar la Casa VII y luego la Casa IV",
            "3. Solo entonces, mirar la Casa II y la Casa VI",
            "4. Dar peso a la casa donde se encuentra la Parte de la Fortuna",
            "5. Verificar los aspectos al Medio Cielo o a su regente",
            "6. Examinar los ortos helíacos en torno al nacimiento",
            "7. Mirar las aplicaciones del Sol y de la Luna",
            "8. Verificar las dignidades sobre la Luna, el MC y el Ascendente",
          ].map((item, index) => (
            <div
              key={item}
              className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-black/40 px-5 py-4 transition-colors hover:border-amber-500/30 hover:bg-white/5"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500/10 font-serif text-sm font-bold text-amber-400 group-hover:bg-amber-500/20">
                {index + 1}
              </span>
              <span className="text-sm font-medium text-white/85 sm:text-base">{item.replace(/^\d+\.\s/, "")}</span>
            </div>
          ))}
        </div>
      </section>

      {/* DEFINITION BOX – Featured Snippet */}
      <aside className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6 leading-relaxed text-white/85">
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-emerald-400">Definición</p>
        <p>La <strong>orientación profesional en astrología</strong> se determina mediante el análisis del &laquo;&nbsp;señor de las acciones&nbsp;&raquo; (el planeta más elevado o más dignificado), de la <Link href="/maisons/maison-10">Casa X</Link> (el Medio Cielo), de su regente y de los aspectos que recibe en la <Link href="/blog/qu-est-ce-qu-un-theme-astral">carta natal</Link>.</p>
      </aside>

      {/* APP intro */}
      <p className="text-base leading-relaxed text-white/80 md:text-lg">
        ¿Buscas tu <strong>vocación</strong> y te preguntas si tu carta natal puede guiarte? Olvida tu signo solar: son el <strong>señor de las acciones</strong>, la Casa X y la Parte de la Fortuna los que tienen la respuesta. Esta guía metódica en 8 pasos te enseña a identificar tu camino profesional gracias a la astrología tradicional.
      </p>

      <section className="space-y-6">
        <H2>1) Los tres señores de la acción: cómo identificar tu vocación</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          En este método, tres planetas dan la{" "}
          <strong className="font-medium text-amber-200">naturaleza fundamental de la vocación</strong>.
          Todos los planetas afinan la lectura, pero Marte, Venus y Mercurio
          describen especialmente bien el tipo de acción que el nativo se ve
          impulsado a desarrollar.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Marte" subtitle="Acción • fuerza • compromiso concreto">
            <p>
              Marte favorece los oficios manuales, físicos, técnicos, competitivos,
              operativos, arriesgados o que exigen valentía e iniciativa.
            </p>
            <p>
              También puede apoyar funciones de mando, liderazgo,
              supervisión o toma de decisiones.
            </p>
          </Card>

          <Card title="Venus" subtitle="Arte • estética • placer • calidad">
            <p>
              Venus favorece las actividades artísticas, estéticas, creativas,
              culinarias, vocales, decorativas, relacionales o sensoriales.
            </p>
            <p>
              Habla de gusto, armonía, belleza y elegancia, pero también
              de atractivo y refinamiento.
            </p>
          </Card>

          <Card title="Mercurio" subtitle="Pensamiento • análisis • destreza mental">
            <p>
              Mercurio favorece los oficios en los que se piensa, calcula, analiza,
              comunica, enseña, escribe, organiza, clasifica, traduce o explica.
            </p>
            <p>
              Remite a la inteligencia práctica, al tratamiento de la información
              y a las profesiones basadas en lo mental o en la técnica intelectual.
            </p>
          </Card>
        </div>

        <Callout tone="ok" title="Idea central">
          <p>
            Marte, Venus y Mercurio no dan un título de puesto exacto.
            Más bien dan el{" "}
            <strong className="text-white">tono fundamental de la vocación</strong>:
            actuar, crear o pensar.
          </p>
        </Callout>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>2) ¿Dónde buscar al señor de la acción?</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          La jerarquía de las casas no es neutra. Algunas casas hacen
          que el planeta sea más visible, más operativo, más manifiesto en la vida social
          o en la identidad profunda del nativo.
        </p>

        <section
          aria-label="Jerarquía de las casas"
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
            <div className="p-5 font-serif text-lg font-medium text-white/90">Casa</div>
            <div className="p-5 font-serif text-lg font-medium text-white/90">Rol</div>
            <div className="p-5 font-serif text-lg font-medium text-white/90">Importancia</div>
          </div>

          <TableRow
            title="Casa X"
            effect="Reconocimiento, carrera, éxito, estatus"
            reading="Prioridad máxima para la profesión"
          />
          <TableRow
            title="Casa I"
            effect="Temperamento, identidad, talentos, manera de ser"
            reading="Muy importante para la vocación"
          />
          <TableRow
            title="Casa VII"
            effect="El otro, el mundo exterior, la interacción"
            reading="En segundo plano pero aún útil"
          />
          <TableRow
            title="Casa IV"
            effect="Base íntima, fundamento, arraigo"
            reading="A considerar, pero menos elocuente socialmente"
          />
          <TableRow
            title="Casa II"
            effect="Recursos, apoyo material"
            reading="Sucedente, pero más importante que las demás sucedentes"
          />
          <TableRow
            title="Casa VI"
            effect="Servicio, tareas, cotidianidad, utilidad"
            reading="La única cadente a retener aquí"
          />
        </section>

        <Callout title="Resumen práctico">
          <p>
            Por orden de importancia, miraremos sobre todo la{" "}
            <strong className="text-white">X</strong>, la{" "}
            <strong className="text-white">I</strong>, luego la{" "}
            <strong className="text-white">VII</strong>, la{" "}
            <strong className="text-white">IV</strong>, la{" "}
            <strong className="text-white">II</strong> y por último la{" "}
            <strong className="text-white">VI</strong>.
          </p>
        </Callout>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>3) Casa X y Medio Cielo: por qué no bastan por sí solos</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          La Casa X habla de reconocimiento social, de éxito visible, de
          posición, de logro y de honor. Por eso sigue siendo prioritaria.
          Pero la Casa I también es capital, porque describe la manera
          en que una persona se vive, se manifiesta, actúa de forma espontánea y ocupa su lugar.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Casa X" subtitle="La cima visible">
            <p>
              Muestra la carrera, el estatus, el reconocimiento, la ambición,
              la reputación y la manera en que la acción puede verse públicamente.
            </p>
          </Card>

          <Card title="Casa I" subtitle="El motor encarnado">
            <p>
              Muestra el temperamento, los talentos naturales, la identidad,
              el estilo personal y la forma en que el nativo se implica concretamente en la vida.
            </p>
          </Card>
        </div>

        <Callout tone="warn" title="Error frecuente">
          <p>
            Reducir la profesión únicamente al Medio Cielo empobrece la lectura.
            Una vocación necesita una{" "}
            <strong className="text-white">cima visible</strong>, pero también un{" "}
            <strong className="text-white">soporte identitario</strong>.
          </p>
        </Callout>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>4) Parte de la Fortuna, Medio Cielo y regente del MC</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Una lectura refinada de la orientación profesional no se detiene en las
          casas ocupadas. La <strong className="text-white">Parte de la Fortuna</strong>,
          el <strong className="text-white">Medio Cielo</strong> y el{" "}
          <strong className="text-white">regente del MC</strong> refuerzan o jerarquizan
          ciertos planetas.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Parte de la Fortuna">
            <p>
              La casa donde se encuentra la Parte de la Fortuna merece un peso particular.
              Puede mostrar un sector de realización concreta, de eficacia o
              de logro material.
            </p>
          </Card>

          <Card title="Medio Cielo">
            <p>
              Un planeta que aspecta al MC se vuelve más pertinente para la carrera,
              la visibilidad social y la orientación profesional.
            </p>
          </Card>

          <Card title="Regente del MC">
            <p>
              Un planeta en fuerte vínculo con el regente del MC adquiere más peso
              en la lectura de la vocación y de la trayectoria profesional.
            </p>
          </Card>
        </div>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>5) Sol, Luna y la relación con las luminarias</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Las luminarias refuerzan el alcance profesional de un planeta.
          Un planeta al que la Luna o el Sol aplica, un planeta en aspecto
          exacto con la luminaria que rige la secta, o incluso un planeta fuertemente
          ligado al Sol, puede volverse mucho más importante en la lectura vocacional.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="El Sol" subtitle="Luz pública, autoridad, visibilidad">
            <p>
              El Sol orienta hacia lo heroico, lo público, lo mediático,
              lo valorado, lo centralizado o lo ligado a la voluntad y al brillo.
            </p>
          </Card>

          <Card title="La Luna" subtitle="Protección, adaptación, materia viva">
            <p>
              La Luna remite más a lo particular, lo nutricio,
              lo protector, lo natural, lo sensible, lo subjetivo o lo ligado a las necesidades.
            </p>
          </Card>
        </div>

        <Callout title="Relación útil para recordar">
          <p>
            Un planeta estrechamente ligado al Sol o a la Luna suele volverse más
            elocuente para la profesión, porque recibe mayor{" "}
            <strong className="text-white">peso existencial</strong>.
          </p>
        </Callout>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>6) Dignidades, combustión y estacionamiento</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Un planeta no vale solo por su casa: vale también por su
          fuerza real. Para juzgar la vocación, hay que medir sus dignidades, su
          relación con el Sol, e incluso su estacionamiento en torno al nacimiento.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Lo que refuerza">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-emerald-400">✔</span>
                <span>Un planeta en domicilio actúa más según su propia naturaleza</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-emerald-400">✔</span>
                <span>Un planeta con fuertes dignidades en el MC o el Ascendente se ve reforzado</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-emerald-400">✔</span>
                <span>Un planeta estacionario antes de volver a ser directo cerca del nacimiento puede ser muy poderoso</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-emerald-400">✔</span>
                <span>Un planeta cazimi puede estar excepcionalmente reforzado</span>
              </li>
            </ul>
          </Card>

          <Card title="Lo que debilita">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-red-400">✘</span>
                <span>Un planeta combusto pierde fuerza de expresión</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-red-400">✘</span>
                <span>Una estación cercana a la retrogradación tiende a debilitar al planeta</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-red-400">✘</span>
                <span>Un mal estado celeste reduce la nitidez de las promesas profesionales</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>7) El signo del señor de las acciones</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          El signo en el que se encuentra el señor de las acciones modifica fuertemente
          la manera en que se expresa la vocación. Hay que mirar la naturaleza del signo,
          su tipo, su ritmo y su cuadruplicidad.
        </p>

        <section
          aria-label="Tabla de los tipos de signos"
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
            <div className="p-5 font-serif text-lg font-medium text-white/90">Tipo</div>
            <div className="p-5 font-serif text-lg font-medium text-white/90">Tendencia</div>
            <div className="p-5 font-serif text-lg font-medium text-white/90">Lectura profesional</div>
          </div>

          <TableRow
            title="Cardinal"
            effect="Impacto, movimiento, extraversión, cambio"
            reading="Capacidad de iniciar, lanzar, impulsar, actuar rápido"
          />
          <TableRow
            title="Fijo"
            effect="Estabilidad, profundidad, duración, persistencia"
            reading="Trabajo de fondo, construcción lenta, maestría a largo plazo"
          />
          <TableRow
            title="Mutable"
            effect="Dualidad, mezcla, interacción, adaptación"
            reading="Flexibilidad, polivalencia, ida y vuelta, ajuste continuo"
          />
        </section>

        <Callout tone="ok" title="Ejemplo sencillo">
          <p>
            Un <strong className="text-white">Marte en Cáncer</strong> puede ser valiente,
            útil, activo, protector, a veces mañoso, pero rara vez temerario en
            el sentido bruto del término. El signo siempre matiza la naturaleza del planeta.
          </p>
        </Callout>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>8) Influencia del estatus social y rol de los demás planetas</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Un mismo planeta no dará exactamente la misma profesión según el
          entorno social, las oportunidades reales y la estructura global de la carta.
          El simbolismo se mantiene estable, pero su nivel de manifestación varía.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Marte según el contexto">
            <p>
              Con un estatus elevado, Marte puede orientar hacia jefes militares,
              responsables, decisores o dirigentes. En un contexto más
              modesto, puede favorecer más los oficios manuales, técnicos,
              físicos o de campo.
            </p>
          </Card>

          <Card title="Júpiter, Saturno, Sol, Luna">
            <p>
              <strong className="text-white">Júpiter</strong> orienta hacia el ideal,
              la ley, la verdad, la religión, la transmisión, la visión.
            </p>
            <p>
              <strong className="text-white">Saturno</strong> habla de gestión,
              disciplina, tierra, estructura, administración, control, servicio público,
              recursos, restricciones y responsabilidades.
            </p>
            <p>
              <strong className="text-white">El Sol y la Luna</strong> añaden un peso
              de luz, de estatus, de centralidad o de necesidad vital a la función.
            </p>
          </Card>
        </div>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Síntesis: método completo para analizar la orientación profesional</H2>

        <section className="rounded-[2rem] border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-transparent p-8 shadow-2xl backdrop-blur-md">
          <ol className="list-decimal space-y-4 pl-6 text-lg text-white/90 marker:font-serif marker:font-bold marker:text-emerald-400">
            <li>Localizar los planetas en la Casa X y en la Casa I</li>
            <li>Completar con las Casas VII, IV, II y VI si es necesario</li>
            <li>Identificar a Marte, Venus y Mercurio como señores de la acción</li>
            <li>Mirar la Parte de la Fortuna, el MC y el regente del MC</li>
            <li>Medir los aspectos, las dignidades y los vínculos con las luminarias</li>
            <li>Matizar con el signo, la casa y el estatus social</li>
            <li>
              <strong className="text-emerald-300">
                Hacer una síntesis global entre vocación, profesión y manera de actuar
              </strong>
            </li>
          </ol>
        </section>

        <Callout tone="ok" title="Conclusión profesional">
          <p>
            Una lectura vocacional seria no busca solamente "qué oficio".
            Busca también{" "}
            <strong className="text-white">cómo actúa la persona, por qué actúa,
            y en qué marco puede florecer realmente</strong>.
          </p>
          <p>
            La profesión visible, la vocación profunda y el estilo de acción deben
            leerse juntos. Es este cruce el que hace que la orientación profesional
            astrológica sea útil, concreta e inteligente.
          </p>
        </Callout>
      </section>

      <section className="mt-16 space-y-8">
        <H2>FAQ — Orientación profesional y carta natal</H2>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="¿Qué casa mirar para la carrera?">
            <p>
              La Casa X sigue siendo prioritaria para la carrera, el estatus y el
              reconocimiento. Pero la Casa I es esencial para comprender la
              manera de sostener concretamente esa vocación.
            </p>
          </Card>

          <Card title="¿Bastan Marte, Venus y Mercurio?">
            <p>
              No. Dan la naturaleza fundamental de la acción, pero toda la carta
              debe luego matizarse con los demás planetas, los signos, los aspectos
              y las casas.
            </p>
          </Card>

          <Card title="¿Por qué mirar la Parte de la Fortuna?">
            <p>
              Porque puede señalar un lugar de eficacia, de realización o de
              potencial concreto que sostiene la profesión.
            </p>
          </Card>

          <Card title="¿Se puede ver una vocación no alineada con el oficio real?">
            <p>
              Sí. Es incluso una de las grandes utilidades de esta lectura: mostrar
              la posible distancia entre lo que uno hace y aquello para lo que está
              naturalmente estructurado.
            </p>
          </Card>
        </div>
      </section>

      <footer className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md sm:p-12">
        <H3>Para profundizar en el análisis profesional</H3>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Pill>Casa X</Pill>
          <Pill tone="sky">Medio Cielo</Pill>
          <Pill tone="violet">Vocación</Pill>
          <Pill tone="emerald">Carta natal</Pill>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/blog/qu-est-ce-qu-un-theme-astral"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Comprender la carta natal
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/blog/finances-theme-astral"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Leer el artículo sobre las finanzas
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* ============================================================ */}
        {/*  Maillage interne enrichi — Audit 31/05/2026 (R3)            */}
        {/*  9 liens contextuels supplémentaires vers les hubs concernés */}
        {/* ============================================================ */}
        <div className="mt-12 grid gap-3 text-left sm:grid-cols-2 lg:grid-cols-3">
          <Link href="/maisons/maison-1" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Casa</span>
            <span className="mt-1 block font-medium text-white/90">Casa I — Identidad</span>
            <span className="mt-1 block text-xs text-white/60">Lo que encarnas antes que cualquier oficio</span>
          </Link>
          <Link href="/maisons/maison-6" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Casa</span>
            <span className="mt-1 block font-medium text-white/90">Casa VI — Cotidianidad</span>
            <span className="mt-1 block text-xs text-white/60">El trabajo concreto de cada día</span>
          </Link>
          <Link href="/maisons/maison-10" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Casa</span>
            <span className="mt-1 block font-medium text-white/90">Casa X — Vocación</span>
            <span className="mt-1 block text-xs text-white/60">El corazón de tu dirección social</span>
          </Link>
          <Link href="/planetes/saturne" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Planeta</span>
            <span className="mt-1 block font-medium text-white/90">Saturno — Estructura</span>
            <span className="mt-1 block text-xs text-white/60">Construcción de una carrera larga</span>
          </Link>
          <Link href="/planetes/jupiter" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Planeta</span>
            <span className="mt-1 block font-medium text-white/90">Júpiter — Expansión</span>
            <span className="mt-1 block text-xs text-white/60">Oportunidades de ascenso</span>
          </Link>
          <Link href="/planetes/mars" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Planeta</span>
            <span className="mt-1 block font-medium text-white/90">Marte — Acción</span>
            <span className="mt-1 block text-xs text-white/60">Combatividad, espíritu de iniciativa</span>
          </Link>
          <Link href="/transits" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Método</span>
            <span className="mt-1 block font-medium text-white/90">Los tránsitos</span>
            <span className="mt-1 block text-xs text-white/60">Cronometrar tu cambio de carrera</span>
          </Link>
          <Link href="/revolution-solaire" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Método</span>
            <span className="mt-1 block font-medium text-white/90">Revolución solar</span>
            <span className="mt-1 block text-xs text-white/60">Carta del año — momento clave vocacional</span>
          </Link>
          <Link href="/blog/saturnien" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Artículo</span>
            <span className="mt-1 block font-medium text-white/90">Retrato del saturniano</span>
            <span className="mt-1 block text-xs text-white/60">Ambición silenciosa, construcción larga</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}
