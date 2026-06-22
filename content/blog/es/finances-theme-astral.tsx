import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import Image from "next/image";
import { AUTHOR_PERSON, PUBLISHER_ORG } from "@/lib/seo";
import FinanceAstroImage from "@/public/images/blog/finances-theme-astral.webp";

export const meta = {
  slug: "finances-theme-astral",
  title: "Las finanzas en la carta natal: guía completa",
  description:
    "Analiza tus finanzas con la carta natal: el estudio de la Casa II, sus planetas y aspectos para comprender ganancias y pérdidas económicas.",
  date: "2026-03-27",
  tags: [
    "finances",
    "argent",
    "maison II",
    "thème astral",
    "astrologie financière",
    "interprétation",
    "aspects",
    "maisons astrologiques",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/finances-theme-astral.webp",
};

// -- COMPONENTES DE INTERFAZ PREMIUM --

function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" aria-hidden="true" />
      {children}
    </span>
  );
}

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-6 flex items-center font-serif text-3xl font-light text-white md:text-4xl">
      <span className="mr-4 block h-px w-8 bg-gradient-to-r from-amber-500/50 to-transparent" aria-hidden="true" />
      {children}
    </h2>
  );
}

function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-serif text-2xl font-medium text-white/90">
      {children}
    </h3>
  );
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
    },
    ok: {
      box: "border-emerald-500/30 bg-emerald-500/10 shadow-[0_0_30px_rgba(16,185,129,0.05)]",
      icon: "text-emerald-400",
      svg: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    note: {
      box: "border-sky-500/30 bg-sky-500/10 shadow-[0_0_30px_rgba(56,189,248,0.05)]",
      icon: "text-sky-400",
      svg: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  };

  const current = styles[tone];

  return (
    <aside aria-label={title} className={`relative overflow-hidden rounded-2xl border p-6 backdrop-blur-md ${current.box}`}>
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-current opacity-30 to-transparent" />
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

export default function FinancesThemeAstralPost() {
  const glow = getGlowFromTags(meta.tags);

  return (
    <article className="mx-auto max-w-4xl space-y-12 pb-20 pt-8 text-white">
      {/* DATOS ESTRUCTURADOS (SEO) */}
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
                  name: "¿Qué casa hay que mirar para el dinero en una carta natal?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Por lo general se empieza por la Casa II, su signo en la cúspide, su regente, los planetas que ocupan la Casa II y los aspectos que reciben.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿El regente de la Casa II es más importante que un planeta en la Casa II?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Son dos informaciones distintas. El regente muestra el origen y la lógica profunda de las finanzas; el planeta en la Casa II muestra lo que actúa directamente en ese ámbito.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Se puede ver la estabilidad financiera en una carta natal?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, en parte, cruzando la Casa II, su regente, la calidad de los planetas, los signos, los aspectos y la repetición de los indicios en la carta.",
                  },
                },
              ],
            },
          ]),
        }}
      />
<div className="relative w-full aspect-[7/3] rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(251,191,36,0.1)] bg-[#0f0f13] flex items-center justify-center">
              <Image src={FinanceAstroImage} alt="Un símbolo astrológico rodeado de monedas" fill sizes="100vw" priority className="object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent z-10 pointer-events-none" />
            </div>
      {/* SECCIÓN HERO DEL BLOG */}
      <header className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
        {/* Efectos de resplandor */}
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
          <Kicker>
            Dinero • Casa II • Ingresos • Estabilidad
          </Kicker>

          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="font-serif text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl md:max-w-3xl">
              La Casa II, su regente, los aspectos y el método de interpretación
            </h2>

            <div className="flex flex-wrap gap-3 text-sm text-white/70">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                Lectura intermedia
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                Método profesional
              </span>
            </div>
          </div>

          <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            Para valorar las <strong className="font-medium text-amber-200">finanzas en una carta natal</strong>,
            no basta con mirar "un planeta del dinero" o un simple indicio
            aislado. Una lectura seria se apoya primero en la{" "}
            <strong className="font-medium text-white">Casa II</strong>, luego en el{" "}
            <strong className="font-medium text-white">signo de su cúspide</strong>, el{" "}
            <strong className="font-medium text-white">regente de la Casa II</strong>, los{" "}
            <strong className="font-medium text-white">planetas presentes en la Casa II</strong>, sus{" "}
            <strong className="font-medium text-white">aspectos</strong>, así como las casas que
            rigen. Es esta jerarquía la que permite comprender cómo una
            persona gana, conserva, asegura o debilita su dinero.
          </p>

          <div className="mt-8 pt-6 border-t border-white/5">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>



      {/* ESTADÍSTICAS RÁPIDAS */}
      <section className="grid gap-4 sm:grid-cols-3" aria-label="Puntos clave del artículo">
        <Stat label="Casa clave" value="Casa II" />
        <Stat label="Eje del análisis" value="El regente de la II" />
        <Stat label="Error frecuente" value="Presencia ≠ Regencia" />
      </section>

      {/* CALLOUT DE INTRODUCCIÓN */}
      <Callout tone="note" title="El punto de partida correcto">
        <p>
          En algunos manuales se lee que un planeta presente en una casa
          "prevalece" sobre el regente de esa casa. En realidad, son{" "}
          <strong className="text-white">dos informaciones distintas</strong>.
        </p>
        <p>
          El planeta situado en la Casa II muestra{" "}
          <strong className="text-white">lo que actúa directamente</strong> en las finanzas.
          El regente de la Casa II muestra{" "}
          <strong className="text-white">el origen, la motivación y la lógica profunda</strong>{" "}
          del funcionamiento financiero.
        </p>
      </Callout>

      <Divider />


{/* MÉTODO RÁPIDO */}
      <section aria-labelledby="methode-titre" className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 shadow-2xl backdrop-blur-md sm:p-12">
        <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-amber-500/10 blur-[60px]" aria-hidden="true" />

        <h2 id="methode-titre" className="relative z-10 font-serif text-2xl font-medium text-white sm:text-3xl">
          El método completo para analizar el dinero en una carta
        </h2>

        <div className="relative z-10 mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "1. Leer el signo de la cúspide de la Casa II",
            "2. Estudiar el regente de la Casa II",
            "3. Comprobar si la Casa II está ocupada",
            "4. Valorar el estado celeste del planeta en la II",
            "5. Mirar el signo de ese planeta",
            "6. Examinar los aspectos recibidos",
            "7. Ver qué casas lleva consigo",
            "8. Hacer una síntesis jerarquizada",
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

      {/* CAJA DE DEFINICIÓN – Featured Snippet */}
      <aside className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-6 leading-relaxed text-white/85">
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-amber-400">Definición</p>
        <p>Las <strong>finanzas en la carta natal</strong> se analizan principalmente a través de la <Link href="/maisons/maison-2">Casa II</Link> (ingresos, bienes), su signo en la cúspide, los planetas que la ocupan y los aspectos que reciben. Este estudio revela tu relación natural con el dinero, tus fuentes de ganancia y tus zonas de fragilidad financiera.</p>
      </aside>

      {/* APP intro */}
      <p className="text-base leading-relaxed text-white/80 md:text-lg">
        ¿Quieres comprender tu relación con el <strong>dinero</strong> a través de la astrología? La respuesta no está en tu signo solar, sino en la <strong>Casa II</strong> de tu <Link href="/blog/qu-est-ce-qu-un-theme-astral">carta natal</Link>. Esta guía metódica te enseña a analizar tus finanzas en 7 pasos, desde el signo de la cúspide hasta los aspectos recibidos, para descifrar ganancias, pérdidas y potencial financiero.
      </p>

      {/* 1. SIGNO DE LA CÚSPIDE */}
      <section className="space-y-6">
        <H2>1) El signo en la cúspide de la Casa II: tu relación natural con el dinero</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          El signo situado en la cúspide de la Casa II indica la{" "}
          <strong className="font-medium text-amber-200">concepción personal del dinero</strong>:
          cómo imaginas la seguridad material, cómo te tranquilizas, cómo
          gastas, cómo proteges tus recursos y con qué espíritu quieres
          ganarte la vida.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card
            title="Lo que revela el signo"
            subtitle="El signo da el estilo financiero y la psicología de base."
          >
            <p>
              Todavía no dice de dónde viene el dinero, ni si las finanzas serán
              fáciles o difíciles. Sobre todo muestra{" "}
              <strong className="text-white">la manera de vivir el tema</strong>:
              prudencia, miedo a que falte, necesidad de control, gusto por el confort,
              búsqueda de libertad, necesidad de seguridad o predisposición al riesgo.
            </p>
          </Card>

          <Card
            title="Dos ejemplos sencillos"
            subtitle="Dos cúspides, dos lógicas de dinero muy diferentes."
          >
            <p className="mb-3">
              <strong className="text-white">Escorpio en la Casa II</strong>:
              miedo a perder, necesidad de blindar, necesidad de seguridad antes de
              gastar, una estrategia de protección.
            </p>
            <p>
              <strong className="text-white">Acuario en la Casa II</strong>:
              el dinero está ligado a la libertad, al margen de maniobra, a veces
              con una confianza instintiva en la capacidad de volver a encontrar soluciones.
            </p>
          </Card>
        </div>

        <Callout tone="ok" title="Reflejo de lectura">
          <p>
            El signo de la Casa II describe ante todo{" "}
            <strong className="text-white">una relación subjetiva con el dinero</strong>.
            Por sí solo no basta para concluir sobre el nivel real de riqueza.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* 2. REGENTE DE LA CASA II */}
      <section className="space-y-6">
        <H2>2) El regente de la Casa II</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          El regente de la Casa II es central. Muestra{" "}
          <strong className="font-medium text-amber-200">el origen de las finanzas</strong>, la motivación
          profunda para ganar dinero, así como el ámbito concreto a través del cual
          los recursos se construyen, se activan o se complican.
        </p>

        <Card
          title="Regla fundamental"
          subtitle="El origen y la motivación de una casa están donde se encuentra su regente."
        >
          <div className="space-y-4">
            <p>
              <span className="text-amber-400">✦</span> Si el regente de la Casa II se encuentra en la <strong className="text-white">Casa V</strong>, las finanzas pueden
              estar ligadas a los hijos, las pasiones, las creaciones, el ocio, la
              visibilidad personal, el arte o una producción inspirada por el placer.
            </p>
            <p>
              <span className="text-amber-400">✦</span> Si el regente de la II está en la <strong className="text-white">Casa X</strong>, el dinero puede venir de la carrera,
              el estatus, la función social, la reputación o la autoridad.
            </p>
            <p>
              <span className="text-amber-400">✦</span> Si el regente de la II está en la <strong className="text-white">Casa VI</strong>, los ingresos llegan más fácilmente
              a través del trabajo diario, el servicio, la utilidad concreta, las rutinas o
              la disciplina profesional.
            </p>
          </div>
        </Card>

        <Callout title="Lo que hay que hacer después">
          <p>
            Localizar el regente de la II no basta. También hay que{" "}
            <strong className="text-white">analizar la casa donde se encuentra</strong>,
            su signo, su calidad y sus aspectos. Ahí es donde está el motor
            real de las finanzas.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* 3. CASA OCUPADA */}
      <section className="space-y-6">
        <H2>3) ¿La Casa II está ocupada por un planeta?</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Cuando un planeta se encuentra en la Casa II, se vuelve activo en el
          ámbito financiero. Actúa directamente sobre los ingresos, la gestión del
          dinero, los gastos, las prioridades materiales o la estabilidad financiera.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card
            title="Lo que significa"
            subtitle="El planeta se vuelve determinante en los asuntos de la Casa II."
          >
            <p className="mb-3">
              Un planeta en la Casa II muestra un actor concreto en la cuestión
              financiera. Tiñe la manera de ganar, gastar, proteger o
              transformar los recursos.
            </p>
            <p>
              Su estado celeste se vuelve, por tanto, capital: un planeta fuerte no promete
              lo mismo que un planeta débil, contrariado o mal apoyado.
            </p>
          </Card>

          <Card
            title="Lo que hay que valorar"
            subtitle="La sola presencia nunca basta."
          >
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-emerald-400">✔</span>
                <span><strong className="text-white">Domicilio o exaltación:</strong> mayor facilidad para cumplir sus promesas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-sky-400">✔</span>
                <span><strong className="text-white">Término o triplicidad:</strong> apoyo útil pero más moderado</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-amber-400">✔</span>
                <span><strong className="text-white">Buen vínculo con su regente:</strong> mayor coherencia</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-red-400">✘</span>
                <span><strong className="text-white">Mal estado celeste:</strong> resultados más frágiles o inestables</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      <Divider />

      {/* 4. SIGNO DEL PLANETA EN LA II */}
      <section className="space-y-6">
        <H2>4) El signo del planeta situado en la Casa II</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          El signo del planeta en la Casa II modifica la forma en que los acontecimientos
          financieros se manifiestan en el tiempo. Informa sobre la estabilidad, la
          frecuencia de los cambios y la durabilidad de los resultados.
        </p>

        <section aria-label="Tabla de los signos" className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm">
          <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
            <div className="p-5 font-serif text-lg font-medium text-white/90">Tipo de signo</div>
            <div className="p-5 font-serif text-lg font-medium text-white/90">Efecto dominante</div>
            <div className="p-5 font-serif text-lg font-medium text-white/90">Lectura financiera</div>
          </div>

          <TableRow
            title="Cardinal (Aries, Cáncer...)"
            effect="Desencadena, mueve, reacciona rápido"
            reading="Intensidad y arranque rápido, pero no siempre duradero"
          />
          <TableRow
            title="Fijo (Tauro, Leo...)"
            effect="Estabiliza, conserva, consolida"
            reading="Durabilidad, mayor capacidad de conservación"
          />
          <TableRow
            title="Mutable (Géminis, Virgo...)"
            effect="Adapta, varía, cambia a menudo"
            reading="Flexibilidad real, pero riesgo de inestabilidad o de fluctuaciones"
          />
        </section>

        <Callout tone="warn" title="Un matiz importante">
          <p>
            Un signo mutable no es "malo" para las finanzas. Indica más bien
            una lógica de variación, de adaptación, de cambio frecuente o de
            movilidad. Conviene entonces compensar con una buena estructura en otra parte de la carta.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* 5. CASA SUCEDENTE */}
      <section className="space-y-6">
        <H2>5) La Casa II es una casa sucedente</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          La Casa II es una casa de consolidación. Retiene, organiza,
          estabiliza, acumula y asegura más que lanza. En la tradición,
          un planeta en casa sucedente no siempre despliega toda su fuerza
          de manera inmediata.
        </p>

        <Card
          title="Consecuencia de lectura"
          subtitle="La Casa II habla de construcción, de mantenimiento y de solidificación."
        >
          <p className="mb-3">
            Un planeta en la Casa II actúa, sin duda, pero a menudo de forma más
            progresiva, más asentada, más material. Construye más de lo que
            irrumpe.
          </p>
          <p>
            En cambio, si el{" "}
            <strong className="font-medium text-amber-200">regente de la Casa II está él mismo situado en la Casa II</strong>,
            gana en potencia: entonces puede cumplir más fácilmente los
            atributos de la casa.
          </p>
        </Card>
      </section>

      <Divider />

      {/* 6. ASPECTOS RECIBIDOS */}
      <section className="space-y-6">
        <H2>6) Los aspectos recibidos por el planeta en la Casa II</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Los aspectos muestran si el planeta presente en la Casa II está apoyado,
          reforzado, complicado, ralentizado o combatido. Hay que juzgar a la vez la
          naturaleza del aspecto, la calidad del planeta que lo envía y la casa
          desde la que habla.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Lectura general de los planetas">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-white/50">✦</span>
                <span><strong className="text-white">Júpiter y Venus</strong> tienden a reforzar las finanzas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-white/50">✦</span>
                <span><strong className="text-white">Sol, Luna, Mercurio</strong> pueden ayudar de forma moderada</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-white/50">✦</span>
                <span><strong className="text-white">Marte y Saturno</strong> crean más a menudo tensiones o restricciones</span>
              </li>
            </ul>
          </Card>

          <Card title="Lectura general de los aspectos">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-emerald-400">△</span>
                <span><strong className="text-white">Trígono:</strong> muy favorable, circulación más natural</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-sky-400">✱</span>
                <span><strong className="text-white">Sextil:</strong> positivo, ayuda real pero más modesta</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-amber-400">□</span>
                <span><strong className="text-white">Cuadratura:</strong> tensión, esfuerzo, gasto, lucha o inestabilidad</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-red-400">☍</span>
                <span><strong className="text-white">Oposición:</strong> polarización, bloqueo, posibles pérdidas</span>
              </li>
            </ul>
          </Card>
        </div>

        <section aria-label="Tabla de los estados celestes" className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm">
          <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
            <div className="p-5 font-serif text-lg font-medium text-white/90">Situación del aspecto</div>
            <div className="p-5 font-serif text-lg font-medium text-white/90">Efecto</div>
            <div className="p-5 font-serif text-lg font-medium text-white/90">Lectura</div>
          </div>

          <TableRow
            title="Benéfica bien dispuesta"
            effect="Refuerza con claridad"
            reading="Apoyo real, promesa más sólida"
          />
          <TableRow
            title="Benéfica mal dispuesta"
            effect="Ayuda debilitada"
            reading="Apoyo parcial, resultados menos estables"
          />
          <TableRow
            title="Maléfica bien dispuesta"
            effect="Frena sin romperlo todo"
            reading="Dificultad manejable, estructura posible"
          />
          <TableRow
            title="Maléfica mal dispuesta"
            effect="Debilita claramente"
            reading="Fuerte tensión, presión o bloqueos más pesados"
          />
        </section>

        <Callout title="La casa de la que viene el aspecto lo cambia todo">
          <p>
            La casa ocupada por el planeta que envía el aspecto muestra{" "}
            <strong className="text-white">el ámbito de vida que ayuda o entorpece las finanzas</strong>.
          </p>
          <p>
            Un buen aspecto de Júpiter desde la Casa X puede apoyar las finanzas
            a través de la carrera, el estatus o el reconocimiento. Un aspecto útil de Venus
            puede favorecer el dinero a través de los vínculos, la imagen, el arte, las relaciones o
            el apoyo social, según la casa implicada.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* 7. REGENCIA DEL PLANETA */}
      <section className="space-y-6">
        <H2>7) La regencia del planeta en la Casa II: ¿de dónde viene el dinero?</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Una regla clásica dice que{" "}
          <strong className="font-medium text-amber-200">el regente de una casa lleva su casa consigo</strong>.
          Dicho de otro modo, el planeta presente en la Casa II trae consigo los
          significados de las casas que rige.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Un ejemplo de interpretación">
            <p>
              Si un planeta situado en la Casa II rige la <strong className="text-white">Casa XII</strong>, puede
              introducir en las finanzas cargas pesadas, pérdidas, pruebas,
              gastos ocultos, frenos o una forma de erosión.
            </p>
          </Card>

          <Card title="Lectura de fondo">
            <p>
              La casa o las casas regidas por el planeta en la II se convierten a menudo
              en la <strong className="font-medium text-amber-200">causa</strong> del funcionamiento financiero:
              lo que nutre, motiva, perturba, abre o bloquea el dinero.
            </p>
          </Card>
        </div>
      </section>

      <Divider />

      {/* SÍNTESIS GLOBAL */}
      <section className="space-y-6">
        <H2>Síntesis: método completo para analizar las finanzas en una carta</H2>

        <section className="rounded-[2rem] border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-transparent p-8 shadow-2xl backdrop-blur-md">
          <ol className="list-decimal space-y-4 pl-6 text-lg text-white/90 marker:font-serif marker:font-bold marker:text-emerald-400">
            <li>Leer el signo de la cúspide de la Casa II</li>
            <li>Estudiar el regente de la Casa II y la casa donde se encuentra</li>
            <li>Comprobar la posible presencia de un planeta en la Casa II</li>
            <li>Valorar su calidad celeste y su signo</li>
            <li>Analizar los aspectos que recibe</li>
            <li>Examinar las casas que rige</li>
            <li><strong className="text-emerald-300">Hacer una síntesis global, sin aislar nunca un solo factor.</strong></li>
          </ol>
        </section>

        <Callout tone="ok" title="Conclusión profesional">
          <p>
            Una buena lectura del dinero en astrología nunca se apoya en un solo
            indicio. Se apoya en una{" "}
            <strong className="text-white">lectura jerarquizada y cruzada</strong>.
          </p>
          <p>
            La Casa II dice <em>cómo</em> se plantea la cuestión financiera. Su regente dice
            <em> de dónde</em> viene. El planeta en la II dice <em>qué</em> actúa directamente. Los aspectos
            dicen lo que la <em>apoya o contraría</em>. Las regencias dicen lo que es
            <em> su causa profunda</em>.
          </p>
        </Callout>
      </section>

      {/* FAQ */}
      <section className="mt-16 space-y-8">
        <H2>FAQ — Dinero y carta natal</H2>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="¿Qué casa hay que mirar para el dinero?">
            <p>
              La base es la <strong className="text-white">Casa II</strong>. Luego,
              según la pregunta, se puede completar con la Casa VIII (dinero del otro/bancos), la Casa X (carrera)
              u otras casas de la carta.
            </p>
          </Card>

          <Card title="¿Un planeta en la Casa II es siempre favorable?">
            <p>
              No. Todo depende de su naturaleza, de su estado celeste, de su signo, de
              sus aspectos y de las casas que rige. Una maléfica afligida puede significar fugas de dinero.
            </p>
          </Card>

          <Card title="¿El regente de la II es más importante que el planeta en la II?">
            <p>
              No dicen lo mismo. Hay que leerlos juntos, y no
              oponerlos mecánicamente. El regente muestra la raíz, el planeta muestra la acción.
            </p>
          </Card>

          <Card title="¿Se puede ver la estabilidad financiera?">
            <p>
              Sí, parcialmente, cruzando la Casa II, su regente, la naturaleza de los
              signos (fijos = duraderos), los aspectos y la repetición de los indicios en la carta.
            </p>
          </Card>
        </div>
      </section>

      {/* PARA PROFUNDIZAR */}
      <footer className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md sm:p-12">
        <H3>Para profundizar en tu análisis</H3>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Pill>Casa II</Pill>
          <Pill tone="sky">Casas astrológicas</Pill>
          <Pill tone="violet">Aspectos</Pill>
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
            href="/blog/conjonction-melange-des-forces"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Dominar la conjunción
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* ============================================================ */}
        {/*  Malla interna enriquecida — Auditoría 31/05/2026 (R3)        */}
        {/*  9 enlaces contextuales adicionales a los hubs implicados     */}
        {/* ============================================================ */}
        <div className="mt-12 grid gap-3 text-left sm:grid-cols-2 lg:grid-cols-3">
          <Link href="/maisons/maison-2" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Casa</span>
            <span className="mt-1 block font-medium text-white/90">Casa II — Recursos</span>
            <span className="mt-1 block text-xs text-white/60">Dinero ganado, valores personales</span>
          </Link>
          <Link href="/maisons/maison-8" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Casa</span>
            <span className="mt-1 block font-medium text-white/90">Casa VIII — Dinero compartido</span>
            <span className="mt-1 block text-xs text-white/60">Herencias, impuestos, deudas comunes</span>
          </Link>
          <Link href="/maisons/maison-10" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Casa</span>
            <span className="mt-1 block font-medium text-white/90">Casa X — Vocación</span>
            <span className="mt-1 block text-xs text-white/60">El ingreso ligado al estatus social</span>
          </Link>
          <Link href="/planetes/venus" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Planeta</span>
            <span className="mt-1 block font-medium text-white/90">Venus — Placer y valores</span>
            <span className="mt-1 block text-xs text-white/60">Regente natural de Tauro / Casa II</span>
          </Link>
          <Link href="/planetes/jupiter" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Planeta</span>
            <span className="mt-1 block font-medium text-white/90">Júpiter — Expansión</span>
            <span className="mt-1 block text-xs text-white/60">Oportunidades, ganancias, suerte financiera</span>
          </Link>
          <Link href="/planetes/saturne" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Planeta</span>
            <span className="mt-1 block font-medium text-white/90">Saturno — Construcción</span>
            <span className="mt-1 block text-xs text-white/60">Paciencia, patrimonio, disciplina</span>
          </Link>
          <Link href="/transits" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Método</span>
            <span className="mt-1 block font-medium text-white/90">Los tránsitos</span>
            <span className="mt-1 block text-xs text-white/60">Anticipar las ventanas financieras</span>
          </Link>
          <Link href="/aspects" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Método</span>
            <span className="mt-1 block font-medium text-white/90">Los aspectos</span>
            <span className="mt-1 block text-xs text-white/60">Cuadraturas y trígonos al regente de la II</span>
          </Link>
          <Link href="/blog/orientation-professionnelle-theme-astral" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Artículo</span>
            <span className="mt-1 block font-medium text-white/90">Orientación profesional &amp; carta</span>
            <span className="mt-1 block text-xs text-white/60">La Casa X y la vocación rentable</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}
