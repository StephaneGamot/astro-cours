import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import { AUTHOR_PERSON, PUBLISHER_ORG, SITE_URL } from "@/lib/seo";
import ChanceImage from "@/public/images/blog/chance-jeux-argent-loterie.webp";

export const meta = {
  slug: "chance-jeux-argent-loterie-astrologie",
  title: "La suerte en el juego en astrología: casas y Júpiter",
  description:
    "Lotería, apuestas, juegos de azar: lo que la astrología dice (y no dice) sobre la suerte. Casa V, casa II, Júpiter, Parte de la Fortuna y tránsitos. Guía y juego responsable.",
  date: "2026-06-13",
  tags: [
    "chance",
    "jeux d'argent",
    "loterie",
    "maison V",
    "maison II",
    "Jupiter",
    "Part de Fortune",
    "spéculation",
    "transits",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/chance-jeux-argent-loterie.webp",
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
      <div className="space-y-3 text-sm leading-relaxed text-white/80 md:text-base">{children}</div>
    </aside>
  );
}

function Card({
  title,
  subtitle,
  children,
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
      <div className="mt-5 space-y-4 text-sm leading-relaxed text-white/80 md:text-base">{children}</div>
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

export default function ChanceJeuxArgentLoteriePost() {
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
              image: `${SITE_URL}${meta.cover}`,
              datePublished: `${meta.date}T12:00:00Z`,
              dateModified: `${meta.date}T12:00:00Z`,
              author: AUTHOR_PERSON,
              publisher: PUBLISHER_ORG,
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `${SITE_URL}/blog/${meta.slug}`,
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
                  name: "¿Qué casa hay que mirar para la suerte en el juego en astrología?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La casa V gobierna el juego, las apuestas y la especulación. Se lee junto con la casa II (ganancias) y la casa VIII (dinero inesperado), Júpiter, Venus y la Parte de la Fortuna.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Permite la astrología ganar la lotería?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. La astrología no predice números ganadores y no garantiza ninguna ganancia. Los juegos de azar se basan en el azar. La carta describe, en el mejor de los casos, una relación simbólica con el riesgo, no un resultado.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Júpiter da suerte en el juego?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Júpiter simboliza la expansión, el optimismo y las oportunidades. Bien situado, describe una actitud confiada y generosa, pero no asegura ganancias: es un indicio simbólico, no una promesa de victoria.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      {/* IMAGEN DE PORTADA */}
      <div className="relative w-full aspect-[7/3] rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(251,191,36,0.1)] bg-[#0f0f13] flex items-center justify-center">
        <Image src={ChanceImage} alt="La suerte en el juego en astrología: Júpiter, dados y monedas de oro sobre fondo cósmico" fill sizes="100vw" priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent z-10 pointer-events-none" />
      </div>

      {/* HERO */}
      <header className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
        <div
          className={`pointer-events-none absolute -right-24 -top-24 h-[500px] w-[500px] rounded-full opacity-30 mix-blend-screen blur-[100px] ${glow}`}
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-[80px]" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/50" aria-hidden="true" />

        <div className="relative z-10">
          <Kicker>Suerte • Casa V • Júpiter • Especulación</Kicker>

          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="font-serif text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl md:max-w-3xl">
              Lotería, apuestas, juegos de azar: lo que la carta revela de verdad
            </h2>

            <div className="flex flex-wrap gap-3 text-sm text-white/70">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">Lectura intermedia</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">Juego responsable</span>
            </div>
          </div>

          <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            &laquo; ¿Tengo suerte en el juego? &raquo; es una de las preguntas que más se le hacen a la astrología. La respuesta honesta tiene dos partes:
            la carta describe una <strong className="font-medium text-amber-200">relación con el azar, el riesgo y la especulación</strong> — a través de la{" "}
            <strong className="font-medium text-white">casa V</strong>, la <strong className="font-medium text-white">casa II</strong>,{" "}
            <strong className="font-medium text-white">Júpiter</strong> y la <strong className="font-medium text-white">Parte de la Fortuna</strong> — pero no
            predice ningún número ganador ni garantiza ninguna ganancia. Así se leen estos indicios con método, y con lucidez.
          </p>

          <div className="mt-8 pt-6 border-t border-white/5">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      {/* ADVERTENCIA JUEGO RESPONSABLE */}
      <Callout tone="warn" title="Léelo antes que nada: el juego sigue siendo azar">
        <p>
          Los juegos de azar (lotería, rascas, apuestas, casino) se basan en el <strong className="text-white">azar</strong>. Ninguna
          técnica astrológica permite prever un sorteo ni &laquo; forzar &raquo; una ganancia. Este artículo describe un{" "}
          <strong className="text-white">simbolismo</strong>, no un método para ganar dinero.
        </p>
        <p>
          Juega únicamente con dinero que puedas perder, ponte límites y nunca intentes &laquo; recuperarte &raquo;. Si el juego
          se convierte en una fuente de estrés, de deudas o de impulsos irrefrenables, es una señal que hay que tomar en serio. En Francia,{" "}
          <strong className="text-white">Joueurs Info Service (09 74 75 13 13)</strong> ofrece ayuda gratuita, anónima y confidencial.
        </p>
      </Callout>

      {/* DATOS RÁPIDOS */}
      <section className="grid gap-4 sm:grid-cols-3" aria-label="Puntos clave del artículo">
        <Stat label="Casa clave" value="Casa V" />
        <Stat label="Planeta de la suerte" value="Júpiter" />
        <Stat label="Lo que no es" value="Una predicción de ganancias" />
      </section>

      {/* CAJA DE DEFINICIÓN */}
      <aside className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-6 leading-relaxed text-white/85">
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-amber-400">Definición</p>
        <p>
          En astrología, la <strong>suerte en el juego</strong> se observa a través de la <Link href="/maisons/maison-5">casa V</Link> (juego, apuestas,
          especulación, toma de riesgos), la <Link href="/maisons/maison-2">casa II</Link> (ganancias), la{" "}
          <Link href="/maisons/maison-8">casa VIII</Link> (dinero inesperado), <Link href="/planetes/jupiter">Júpiter</Link> y la Parte de la
          Fortuna. Estos indicios describen una <strong>actitud frente al riesgo</strong> — no un resultado garantizado.
        </p>
      </aside>

      {/* INTRO */}
      <p className="text-base leading-relaxed text-white/80 md:text-lg">
        Antes de buscar la &laquo; suerte &raquo;, hay que entender lo que la astrología puede realmente iluminar: tu{" "}
        <strong>temperamento de jugador</strong>, tu relación con el riesgo, los terrenos donde tiendes a atreverte o a quemarte, y los{" "}
        <strong>periodos</strong> en los que el impulso especulativo es más fuerte. Es una lectura psicológica y simbólica, que siempre debe contrastarse con
        el sentido común.
      </p>

      {/* 1. CASA V */}
      <section className="space-y-6">
        <H2>1) La casa V: el terreno del juego y de la apuesta</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          La <strong className="font-medium text-amber-200">casa V</strong> gobierna todo lo que emprendemos &laquo; por ver qué pasa &raquo;: los juegos, las
          apuestas, la especulación, los arrebatos arriesgados. Es la casa del placer y de la toma de riesgos creativa — aquella donde apostamos,
          en sentido literal y figurado.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Lo que revela la casa V" subtitle="La relación espontánea con el riesgo y el juego.">
            <p>
              Su signo en la cúspide y su regente muestran <strong className="text-white">cómo</strong> juegas: con prudencia, por impulso,
              por superstición, por cálculo o por necesidad de emociones fuertes. Una casa V apoyada por Júpiter o Venus describe a un jugador optimista;
              tensionada por Saturno, una relación más temerosa o más disciplinada.
            </p>
          </Card>

          <Card title="El regente de la casa V" subtitle="Dónde se ubica orienta el terreno de juego.">
            <p>
              El regente de la V en la casa II puede vincular el juego al dinero personal; en la VIII, a ganancias (o pérdidas) repentinas; en la XII, a un
              riesgo de exceso o de autosabotaje. La <strong className="text-white">casa donde aterriza</strong> cuenta la historia.
            </p>
          </Card>
        </div>

        <Callout tone="note" title="Reflejo de lectura">
          <p>
            La casa V describe un <strong className="text-white">estilo de juego</strong>, no una garantía de ganancia. Una buena posición no anuncia
            el premio gordo: describe una actitud, una frecuencia, una motivación.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* 2. CASAS II Y VIII */}
      <section className="space-y-6">
        <H2>2) Casas II y VIII: por dónde entra el dinero</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          El juego se juega en la V, pero el dinero se aloja en otro lugar. La <Link href="/maisons/maison-2">casa II</Link> concierne a lo que ganamos y
          conservamos por nosotros mismos; la <Link href="/maisons/maison-8">casa VIII</Link> concierne al dinero <em>de los demás</em> y a las sumas{" "}
          <strong className="font-medium text-amber-200">inesperadas</strong>: herencias, reembolsos… y, simbólicamente, las ganancias repentinas.
        </p>

        <section aria-label="Tabla de las casas del dinero" className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm">
          <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
            <div className="p-5 font-serif text-lg font-medium text-white/90">Casa</div>
            <div className="p-5 font-serif text-lg font-medium text-white/90">Dominio</div>
            <div className="p-5 font-serif text-lg font-medium text-white/90">Lectura &laquo; juego &raquo;</div>
          </div>

          <TableRow title="Casa II" effect="Dinero ganado y conservado" reading="Capacidad de convertir una ganancia en recurso duradero" />
          <TableRow title="Casa V" effect="Juego, apuesta, especulación" reading="Actitud y frecuencia de la toma de riesgos" />
          <TableRow title="Casa VIII" effect="Dinero repentino y ajeno" reading="Ganancias inesperadas… pero también pérdidas brutales" />
        </section>

        <Callout tone="warn" title="El reverso de la VIII">
          <p>
            La casa VIII gobierna tanto las <strong className="text-white">ganancias repentinas</strong> como las <strong className="text-white">pérdidas
            brutales</strong> y las deudas. Por eso exactamente el juego es ambivalente aquí: la misma puerta deja entrar y salir el dinero.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* 3. JÚPITER Y VENUS */}
      <section className="space-y-6">
        <H2>3) Júpiter y Venus: los &laquo; benéficos &raquo;</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          <Link href="/planetes/jupiter">Júpiter</Link> es el planeta de la <strong className="font-medium text-amber-200">expansión, el
          optimismo y las oportunidades</strong>. La tradición lo llama el &laquo; gran benéfico &raquo;. Venus, el &laquo; pequeño benéfico &raquo;, suaviza y
          atrae. Vinculados a la V, a la II o a la Parte de la Fortuna, estos planetas describen una tonalidad favorable — una confianza, una soltura.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Júpiter bien situado">
            <p>
              Optimismo, sentido de la oportunidad, generosidad, capacidad de remontar. Cuidado, sin embargo: Júpiter también puede empujar a{" "}
              <strong className="text-white">sobrestimar las propias posibilidades</strong> y a apostar demasiado fuerte. El exceso es su reverso.
            </p>
          </Card>

          <Card title="Venus de apoyo">
            <p>
              Gusto por el placer, por la buena jugada, por las situaciones agradables. A menudo describe una suerte &laquo; relacional &raquo; (ganancias ligadas a los demás,
              a los regalos, a los extras) más que una suerte pura en el sorteo.
            </p>
          </Card>
        </div>

        <Callout tone="ok" title="Matiz esencial">
          <p>
            &laquo; Benéfico &raquo; no quiere decir &laquo; ganador &raquo;. Júpiter describe una <strong className="text-white">actitud</strong> y un{" "}
            <strong className="text-white">clima</strong> interior, no un resultado de lotería. Un Júpiter radiante da confianza — lo que nunca
            ha cambiado las probabilidades de un sorteo.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* 4. PARTE DE LA FORTUNA */}
      <section className="space-y-6">
        <H2>4) La Parte de la Fortuna: el punto de &laquo; suerte &raquo;</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          La <strong className="font-medium text-amber-200">Parte de la Fortuna</strong> es un punto calculado (a partir del Sol, la Luna y el
          Ascendente) que la tradición asocia al bienestar material y a una forma de suerte &laquo; que fluye sola &raquo;. Su casa indica el
          terreno donde la abundancia llega de manera más natural.
        </p>

        <Card title="Cómo leerla" subtitle="La casa de la Parte de la Fortuna orienta el terreno favorable.">
          <div className="space-y-4">
            <p>
              <span className="text-amber-400">✦</span> En <strong className="text-white">casa II</strong>: soltura para generar los propios
              recursos.
            </p>
            <p>
              <span className="text-amber-400">✦</span> En <strong className="text-white">casa V</strong>: un terreno de suerte ligado al juego, a la
              creación, a los hijos o a los placeres — que hay que manejar con prudencia en lo relativo al juego de azar.
            </p>
            <p>
              <span className="text-amber-400">✦</span> En <strong className="text-white">casa VIII u XI</strong>: ganancias a través de los demás, apoyos,
              redes o ingresos inesperados.
            </p>
          </div>
        </Card>

        <p className="text-sm leading-relaxed text-white/70">
          Para el cálculo exacto y los demás puntos calculados, consulta nuestro anexo sobre los{" "}
          <Link href="/points-fictifs" className="text-amber-200 underline-offset-4 hover:underline">puntos ficticios (Partes, Vértex…)</Link>.
        </p>
      </section>

      <Divider />

      {/* 5. TRÁNSITOS / TIMING */}
      <section className="space-y-6">
        <H2>5) Los tránsitos: &laquo; ventanas &raquo;, no certezas</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          El <Link href="/transits">timing</Link> es la dimensión más solicitada — y la más sobreinterpretada. Cuando Júpiter transita tu
          casa II o V, o forma un buen aspecto al regente de esas casas, la tradición habla de una{" "}
          <strong className="font-medium text-amber-200">ventana favorable</strong>: un clima de apertura, de oportunidades, de confianza.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Lo que describe un tránsito favorable">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-emerald-400">✔</span>
                <span>Un estado de ánimo más confiado y abierto a las ocasiones</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-emerald-400">✔</span>
                <span>Un periodo en el que uno intenta, se lanza, se atreve más</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-emerald-400">✔</span>
                <span>Un contexto simbólico de expansión (II, V, VIII, XI)</span>
              </li>
            </ul>
          </Card>

          <Card title="Lo que un tránsito nunca hace">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-red-400">✘</span>
                <span>Garantizar una ganancia o &laquo; desbloquear &raquo; un premio gordo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-red-400">✘</span>
                <span>Indicar números, una combinación o un caballo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-red-400">✘</span>
                <span>Justificar apostar más de lo razonable</span>
              </li>
            </ul>
          </Card>
        </div>

        <Callout tone="warn" title="La trampa del &laquo; buen momento &raquo;">
          <p>
            Creer que un tránsito &laquo; autoriza &raquo; a apostar fuerte es uno de los errores más costosos. Un buen tránsito no modifica las
            probabilidades de un juego de azar. En el mejor de los casos, describe tu <strong className="text-white">estado de ánimo</strong> — no el resultado.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* 6. LÍMITES */}
      <section className="space-y-6">
        <H2>6) Lo que la astrología nunca dirá</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Seamos claros, porque es lo que separa una lectura seria de una ilusión. La astrología es un lenguaje{" "}
          <strong className="font-medium text-amber-200">simbólico y psicológico</strong>. Su validez predictiva no está demostrada
          científicamente, y es totalmente impotente ante un sorteo aleatorio.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Ningún número ganador">
            <p>
              Nadie puede sacar números de lotería de una carta. Toda promesa de ese tipo es una{" "}
              <strong className="text-white">estafa</strong> o una ilusión. Desconfía de los &laquo; videntes &raquo; que venden combinaciones.
            </p>
          </Card>

          <Card title="El azar sigue siendo azar">
            <p>
              Un juego de azar tiene una esperanza matemática negativa: a la larga, estadísticamente se pierde. Ningún astro cambia esa
              realidad. La única decisión verdaderamente &laquo; ganadora &raquo; es jugar <strong className="text-white">poco y por placer</strong>.
            </p>
          </Card>
        </div>
      </section>

      <Divider />

      {/* SÍNTESIS */}
      <section className="space-y-6">
        <H2>Síntesis: leer la &laquo; suerte en el juego &raquo; con método</H2>

        <section className="rounded-[2rem] border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-transparent p-8 shadow-2xl backdrop-blur-md">
          <ol className="list-decimal space-y-4 pl-6 text-lg text-white/90 marker:font-serif marker:font-bold marker:text-emerald-400">
            <li>Leer la casa V (signo en la cúspide, regente, planetas): el estilo de juego</li>
            <li>Contrastar con la casa II (ganancias duraderas) y la VIII (ganancias/pérdidas repentinas)</li>
            <li>Evaluar Júpiter y Venus: la tonalidad, el optimismo, el posible exceso</li>
            <li>Situar la Parte de la Fortuna: el terreno donde la abundancia llega con más facilidad</li>
            <li>Mirar los tránsitos como ventanas de ánimo, jamás como garantías</li>
            <li><strong className="text-emerald-300">Concluir sobre un temperamento, no sobre un resultado.</strong></li>
          </ol>
        </section>

        <Callout tone="ok" title="Conclusión lúcida">
          <p>
            La carta puede describir a un <strong className="text-white">jugador</strong>: prudente o audaz, supersticioso o estratega, atraído por el
            riesgo o rechazado por él. Es valioso para conocerse.
          </p>
          <p>
            Pero no describe a un <strong className="text-white">ganador</strong>. La mejor &laquo; suerte &raquo;, astrológica y
            humanamente, es mantener el control: jugar por placer, con límites, sin apostar jamás el propio equilibrio.
          </p>
        </Callout>
      </section>

      {/* FAQ */}
      <section className="mt-16 space-y-8">
        <H2>FAQ — Suerte, juego y astrología</H2>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="¿Qué casa para la suerte en el juego?">
            <p>
              La <strong className="text-white">casa V</strong> (juego, apuesta, especulación), contrastada con la II (ganancias), la VIII (dinero repentino),
              Júpiter y la Parte de la Fortuna.
            </p>
          </Card>

          <Card title="¿Se puede predecir una ganancia en la lotería?">
            <p>
              No. Ningún método astrológico predice un sorteo. El juego de azar es <strong className="text-white">azar</strong>; la
              carta describe una actitud, no un resultado.
            </p>
          </Card>

          <Card title="¿Júpiter en casa V da suerte?">
            <p>
              Describe a un jugador optimista y confiado, a veces demasiado. Es un indicio de temperamento favorable — no una promesa de ganancia, y un
              riesgo de exceso que hay que vigilar.
            </p>
          </Card>

          <Card title="¿Y si el juego se convierte en un problema?">
            <p>
              Es una señal que hay que tomar en serio. En Francia, <strong className="text-white">Joueurs Info Service (09 74 75 13 13)</strong> ofrece
              ayuda gratuita y anónima. Hablar con un ser querido o con un profesional también ayuda.
            </p>
          </Card>
        </div>
      </section>

      {/* PARA SABER MÁS */}
      <footer className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md sm:p-12">
        <H3>Para profundizar en tu análisis</H3>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Pill tone="yellow">Casa V</Pill>
          <Pill>Casa II</Pill>
          <Pill tone="violet">Júpiter</Pill>
          <Pill tone="orange">Tránsitos</Pill>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/blog/finances-theme-astral"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Las finanzas en la carta natal
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/blog/qu-est-ce-qu-un-theme-astral"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Entender la carta natal
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="mt-12 grid gap-3 text-left sm:grid-cols-2 lg:grid-cols-3">
          <Link href="/maisons/maison-5" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Casa</span>
            <span className="mt-1 block font-medium text-white/90">Casa V — Juego y placer</span>
            <span className="mt-1 block text-xs text-white/60">Apuestas, especulación, toma de riesgos</span>
          </Link>
          <Link href="/maisons/maison-2" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Casa</span>
            <span className="mt-1 block font-medium text-white/90">Casa II — Recursos</span>
            <span className="mt-1 block text-xs text-white/60">Ganancias conservadas, valores</span>
          </Link>
          <Link href="/maisons/maison-8" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Casa</span>
            <span className="mt-1 block font-medium text-white/90">Casa VIII — Dinero repentino</span>
            <span className="mt-1 block text-xs text-white/60">Ganancias inesperadas, pérdidas brutales</span>
          </Link>
          <Link href="/planetes/jupiter" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Planeta</span>
            <span className="mt-1 block font-medium text-white/90">Júpiter — Expansión</span>
            <span className="mt-1 block text-xs text-white/60">Optimismo, oportunidades, exceso</span>
          </Link>
          <Link href="/planetes/venus" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Planeta</span>
            <span className="mt-1 block font-medium text-white/90">Venus — Placer</span>
            <span className="mt-1 block text-xs text-white/60">Suerte relacional, extras</span>
          </Link>
          <Link href="/points-fictifs" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Anexo</span>
            <span className="mt-1 block font-medium text-white/90">Parte de la Fortuna</span>
            <span className="mt-1 block text-xs text-white/60">Puntos ficticios y cálculo</span>
          </Link>
          <Link href="/transits" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Método</span>
            <span className="mt-1 block font-medium text-white/90">Los tránsitos</span>
            <span className="mt-1 block text-xs text-white/60">Ventanas de timing</span>
          </Link>
          <Link href="/aspects" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Método</span>
            <span className="mt-1 block font-medium text-white/90">Los aspectos</span>
            <span className="mt-1 block text-xs text-white/60">Vínculos con el regente de la V</span>
          </Link>
          <Link href="/blog/orientation-professionnelle-theme-astral" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Artículo</span>
            <span className="mt-1 block font-medium text-white/90">Orientación profesional y carta</span>
            <span className="mt-1 block text-xs text-white/60">Casa X e ingresos</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}
