import type { ReactNode } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import { AUTHOR_PERSON, PUBLISHER_ORG, SITE_URL } from "@/lib/seo";

const ARTICLE_SLUG = "comment-seduire-chaque-signe-du-zodiaque";
const LOCALIZED_SLUG = "como-seducir-a-cada-signo-del-zodiaco";
const ARTICLE_URL = `${SITE_URL}/es/blog/${LOCALIZED_SLUG}`;
const COVER_URL = `${SITE_URL}/images/blog/comment-seduire-chaque-signe-du-zodiaque.webp`;

export const meta = {
  slug: ARTICLE_SLUG,
  title: "Cómo seducir a cada signo del zodiaco",
  seoTitle: "Cómo seducir a cada signo del zodiaco — Astro Cours",
  description:
    "Desafío para Aries, paciencia para Capricornio, verdad para Escorpio… Lo que hace caer a cada signo del zodiaco, lo que lo hace huir, y la frase que funciona. Guía de seducción signo por signo.",
  date: "2026-07-21",
  tags: ["amour", "séduction", "zodiaque", "signe"],
  readingLevel: "débutant" as const,
  cover: "/images/blog/comment-seduire-chaque-signe-du-zodiaque.webp",
};

export const metadata = {
  title: `${meta.title} | Astro Cours`,
  description: meta.description,
  alternates: {
    canonical: `/blog/${meta.slug}`,
  },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: ARTICLE_URL,
    type: "article",
    siteName: "Astro Cours",
    locale: "es_ES",
    publishedTime: `${meta.date}T12:00:00Z`,
    images: [
      {
        url: COVER_URL,
        width: 1200,
        height: 630,
        alt: "Cómo seducir a cada signo del zodiaco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
    images: [COVER_URL],
  },
};

type ZodiacElement = "feu" | "terre" | "air" | "eau";

function getElementCardStyles(element: ZodiacElement) {
  if (element === "feu") {
    return {
      border: "border-red-500/30",
      iconWrap: "border-red-500/25 bg-red-500/10",
      glow: "from-red-500/10 to-transparent",
      title: "text-red-200",
      quote: "border-red-400/30 bg-red-500/10 text-red-50",
    };
  }

  if (element === "terre") {
    return {
      border: "border-emerald-500/30",
      iconWrap: "border-emerald-500/25 bg-emerald-500/10",
      glow: "from-emerald-500/10 to-transparent",
      title: "text-emerald-200",
      quote: "border-emerald-400/30 bg-emerald-500/10 text-emerald-50",
    };
  }

  if (element === "air") {
    return {
      border: "border-sky-500/30",
      iconWrap: "border-sky-500/25 bg-sky-500/10",
      glow: "from-sky-500/10 to-transparent",
      title: "text-sky-200",
      quote: "border-sky-400/30 bg-sky-500/10 text-sky-50",
    };
  }

  return {
    border: "border-violet-500/30",
    iconWrap: "border-violet-500/25 bg-violet-500/10",
    glow: "from-violet-500/10 to-transparent",
    title: "text-violet-200",
    quote: "border-violet-400/30 bg-violet-500/10 text-violet-50",
  };
}

function H2({ children, id }: { children: ReactNode; id: string }) {
  return (
    <h2
      id={id}
      className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight"
    >
      {children}
    </h2>
  );
}

function SeduireSection({
  id,
  title,
  href,
  imageSrc,
  imageAlt,
  element,
  tagline,
  phrase,
  phraseContext,
  craquer,
  fuir,
  rdv,
}: {
  id: string;
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  element: ZodiacElement;
  tagline: string;
  phrase: ReactNode;
  phraseContext: string;
  craquer: ReactNode;
  fuir: ReactNode;
  rdv: ReactNode;
}) {
  const styles = getElementCardStyles(element);

  return (
    <section aria-labelledby={id} className="scroll-mt-20">
      <article
        className={[
          "relative overflow-hidden rounded-2xl border bg-black/20 p-6 shadow-soft",
          styles.border,
        ].join(" ")}
      >
        <div
          className={`pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-gradient-to-br ${styles.glow} blur-3xl`}
          aria-hidden="true"
        />

        <header className="relative flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3
              id={id}
              className={[
                "text-xl md:text-2xl font-semibold tracking-tight leading-tight",
                styles.title,
              ].join(" ")}
            >
              {title}
            </h3>
            <p className="mt-1 text-sm text-text/70 italic">{tagline}</p>
          </div>
          <div
            className={[
              "shrink-0 relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border",
              styles.iconWrap,
            ].join(" ")}
            aria-hidden="true"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={64}
              height={64}
              className="h-auto w-auto object-contain opacity-95"
              sizes="64px"
            />
          </div>
        </header>

        <blockquote
          className={[
            "relative mt-5 rounded-2xl rounded-bl-md border px-5 py-4 text-lg leading-relaxed shadow-soft",
            styles.quote,
          ].join(" ")}
        >
          <p>{phrase}</p>
          <footer className="mt-1 text-[11px] uppercase tracking-widest opacity-60">
            {phraseContext}
          </footer>
        </blockquote>

        <div className="relative mt-5 rounded-xl border border-white/10 bg-black/30 p-4 text-text/85 leading-relaxed">
          <p className="text-xs font-semibold uppercase tracking-widest text-text/55">
            Lo que le hace caer
          </p>
          <div className="mt-1 space-y-2">{craquer}</div>
        </div>

        <div className="relative mt-3 rounded-xl border border-white/10 bg-black/30 p-4 text-text/80 leading-relaxed">
          <p className="text-xs font-semibold uppercase tracking-widest text-text/55">
            Lo que le hace huir
          </p>
          <div className="mt-1 text-sm space-y-2">{fuir}</div>
        </div>

        <div className="relative mt-3 rounded-xl border border-white/10 bg-black/30 p-4 text-text/80 leading-relaxed">
          <p className="text-xs font-semibold uppercase tracking-widest text-text/55">
            La cita que recordará
          </p>
          <div className="mt-1 text-sm space-y-2">{rdv}</div>
        </div>

        <div className="relative mt-4 flex justify-end">
          <Link
            href={href}
            className="text-sm text-text/70 underline decoration-white/30 hover:decoration-white/60 transition"
          >
            Leer la ficha del signo →
          </Link>
        </div>
      </article>
    </section>
  );
}

export default function Post() {
  const glow = getGlowFromTags(meta.tags);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    image: [COVER_URL],
    datePublished: `${meta.date}T12:00:00Z`,
    dateModified: `${meta.date}T12:00:00Z`,
    inLanguage: "es-ES",
    mainEntityOfPage: ARTICLE_URL,
    author: AUTHOR_PERSON,
    publisher: PUBLISHER_ORG,
    keywords: meta.tags.join(", "),
    articleSection: "Astrología",
    educationalLevel: meta.readingLevel,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/es/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: meta.title,
        item: ARTICLE_URL,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cómo seducir a alguien según su signo del zodiaco?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hablando a su elemento: los signos de Fuego (Aries, Leo, Sagitario) se conquistan con desafío y entusiasmo, los de Tierra (Tauro, Virgo, Capricornio) con los sentidos y la constancia, los de Aire (Géminis, Libra, Acuario) con conversación y ligereza, los de Agua (Cáncer, Escorpio, Piscis) con emoción y confianza. El signo indica lo que la persona necesita sentir para abrirse — no es una fórmula mágica.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuál es el signo más difícil de seducir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ningún signo es imposible de seducir, pero tres se toman su tiempo: Capricornio (pone a prueba la fiabilidad antes de abrirse), Escorpio (comprueba que no juegas con él) y Acuario (rechaza cualquier guion impuesto). A cambio, suelen ser los vínculos más sólidos una vez instalada la confianza.",
        },
      },
      {
        "@type": "Question",
        name: "¿Hay que mirar el signo solar o Venus para seducir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ambos. El signo solar da el temperamento general y la primera clave de lectura. Pero en el amor, Venus describe la manera de amar y de ser tocado, y Marte la naturaleza del deseo. Si la persona no reacciona como sugiere su signo solar, su Venus probablemente está en otro signo.",
        },
      },
      {
        "@type": "Question",
        name: "¿La compatibilidad astrológica garantiza que la seducción funcione?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. La astrología ofrece una clave de lectura de los temperamentos, no una garantía. Dos signos «incompatibles» pueden vivir una gran historia, y dos signos «hechos el uno para el otro» pueden aburrirse. El signo ayuda a entender cómo acercarse a alguien — la sinceridad hace el resto.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <article className="space-y-10">
        {/* HEADER */}
        <header className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-7 shadow-soft">
          <div
            className={`pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl ${glow}`}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative">
            <p className="text-sm text-text/65">Amor &amp; seducción</p>

            <p className="mt-4 max-w-2xl text-text/80 leading-relaxed">
              Lo has intentado todo: el restaurante perfecto, el mensaje releído
              doce veces, el silencio estratégico de 48 horas. Y nada. Quizá el
              problema no es <em>lo que</em> haces — sino <strong>a
              quién</strong> se lo haces.
            </p>

            <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
              Porque no se seduce a un Escorpio como se seduce a un Géminis.
              Uno quiere que le digan la verdad, el otro quiere reír — y
              confundirlos es la vía rápida hacia el &laquo; estuvo
              bien &raquo;. Aquí tienes <strong>cómo seducir a cada signo del
              zodiaco</strong>: lo que le hace caer, lo que le hace huir, y la
              cita que se queda en la memoria.
            </p>

            <div className="mt-5 flex flex-wrap gap-2" aria-label="Temas del artículo">
              <Pill tone="rose">12 manuales de uso</Pill>
              <Pill tone="violet">Lo que hace caer</Pill>
              <Pill tone="orange">Lo que hace huir</Pill>
              <Pill tone="sky">Frases que funcionan</Pill>
            </div>

            <div className="mt-4" aria-label="Palabras clave del artículo">
              <TagPillsInline tags={meta.tags} />
            </div>
          </div>
        </header>

        {/* DEFINITION BOX — Featured Snippet */}
        <div className="rounded-2xl border border-rose-400/20 bg-rose-400/[0.04] px-6 py-5">
          <p className="text-sm font-semibold uppercase tracking-widest text-rose-300/80">
            En resumen
          </p>
          <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
            Para <strong>seducir según el signo del zodiaco</strong>, habla a su
            elemento: los signos de <strong>Fuego</strong> se conquistan con
            desafío e impulso (Aries, Leo, Sagitario), los de
            <strong> Tierra</strong> con los sentidos y la constancia (Tauro,
            Virgo, Capricornio), los de <strong>Aire</strong> con palabras y
            ligereza (Géminis, Libra, Acuario), los de <strong>Agua</strong> con
            emoción y confianza (Cáncer, Escorpio, Piscis).
          </p>
        </div>

        {/* INTRO */}
        <section className="space-y-3" aria-labelledby="intro">
          <H2 id="intro">Por qué la seducción depende del signo</H2>
          <p className="text-text/85 leading-relaxed">
            Seducir no es recitar técnicas: es hacer sentir a alguien que puede
            <strong> abrirse sin peligro</strong>. Y lo que cada uno necesita
            para abrirse depende de su temperamento — en astrología, de su
            <strong> elemento</strong> y de su planeta regente. El Fuego
            necesita intensidad, la Tierra pruebas, el Aire espacio, el Agua
            confianza.
          </p>
          <p className="text-text/85 leading-relaxed">
            Dos planetas dirigen la función entre bastidores:
            <Link href="/blog/venus-en-signes-style-amoureux" className="underline decoration-white/30 hover:decoration-white/60 transition"> Venus, que describe la manera de amar</Link>,
            y
            <Link href="/blog/mars-en-signes-desir-libido-action" className="underline decoration-white/30 hover:decoration-white/60 transition"> Marte, que describe la naturaleza del deseo</Link>.
            El signo solar da la puerta de entrada: la manera en que la persona
            quiere ser <em>abordada</em>. Esa es la puerta que abrimos aquí,
            signo por signo.
          </p>
          <p className="text-text/85 leading-relaxed">
            Un consejo antes de empezar: nada de lo que sigue sustituye a la
            sinceridad. Estos retratos — deliberadamente afilados, como
            nuestras
            <Link href="/blog/qualites-defauts-12-signes-zodiaque" className="underline decoration-white/30 hover:decoration-white/60 transition"> cualidades y defectos de los 12 signos</Link> —
            te ayudan a entender al otro, no a manipularlo. El matiz importa.
          </p>
        </section>

        {/* 12 SIGNOS */}
        <section className="space-y-6" aria-labelledby="les-12-signes">
          <H2 id="les-12-signes">Seducir a cada signo, manual de uso</H2>

          <div className="grid gap-6">
            <SeduireSection
              id="belier"
              title="♈ Aries — Provócale, le encanta"
              href="/signes/belier"
              imageSrc="/images/zodiaque/belier.webp"
              imageAlt="Símbolo astrológico de Aries"
              element="feu"
              tagline="Se seduce a primera vista o nunca"
              phrase={<>&laquo; No tengo ganas de esperar al sábado para volver a verte. <strong>¿Mañana a las 19h?</strong> &raquo;</>}
              phraseContext="Dícelo a un Aries · efecto inmediato"
              craquer={
                <>
                  <p>
                    <strong>Aries</strong> está regido por Marte: cae ante la
                    audacia, la franqueza y una pizca de desafío. Di lo que
                    piensas, di lo que quieres, y no pidas perdón por existir.
                    No busca a alguien cómodo — busca a alguien
                    <em> vivo</em>.
                  </p>
                  <p>
                    Y déjale territorio por conquistar: sé sincero sin estar ya
                    ganado. Un Aries sin nada que conquistar se duerme; un
                    Aries estimulado mueve montañas.
                  </p>
                </>
              }
              fuir={
                <>
                  <p>
                    La tibieza. Los &laquo; ya veremos &raquo;, las respuestas a
                    los tres días, las estrategias de desgaste. Si juegas al
                    desgaste con un Aries, no te esperará: ya estará en otra
                    parte, sin mirar atrás.
                  </p>
                </>
              }
              rdv={
                <>
                  <p>
                    Movimiento: un partido, una ruta, karts, un bar de pie —
                    cualquier cosa menos tres horas sentados frente a frente.
                    Aries se enamora en acción, no en una entrevista de
                    trabajo.
                  </p>
                </>
              }
            />

            <SeduireSection
              id="taureau"
              title="♉ Tauro — Aliméntale, en todos los sentidos"
              href="/signes/taureau"
              imageSrc="/images/zodiaque/taureau.webp"
              imageAlt="Símbolo astrológico de Tauro"
              element="terre"
              tagline="Lento al arrancar, inolvidable después"
              phrase={<>&laquo; Quédate un poco más. <strong>He hecho postre.</strong> &raquo;</>}
              phraseContext="Dícelo a un Tauro · victoria asegurada"
              craquer={
                <>
                  <p>
                    <strong>Tauro</strong> es el protegido de Venus: se seduce
                    por los <strong>cinco sentidos</strong>. Una buena comida,
                    un perfume, una voz serena, una mano que roza la suya sin
                    prisa. En él, el cuerpo decide antes que la cabeza — pero
                    despacio, y sin vuelta atrás.
                  </p>
                  <p>
                    La otra clave: la constancia. Está ahí cuando dices que
                    estarás. Cada promesa cumplida es un ladrillo; Tauro no se
                    enamora de una persona, se enamora de un edificio.
                  </p>
                </>
              }
              fuir={
                <>
                  <p>
                    La prisa y el caos. Presionarle, cambiar los planes en el
                    último minuto, soplar frío y caliente: solo obtendrás un
                    muro. Y un Tauro amurallado puede durar años.
                  </p>
                </>
              }
              rdv={
                <>
                  <p>
                    Una cena — cocinada por ti si es posible, en un lugar
                    cálido si no. O un mercado por la mañana, un paseo por la
                    naturaleza, todo lo que se saborea sin reloj. El lujo de
                    Tauro es el tiempo.
                  </p>
                </>
              }
            />

            <SeduireSection
              id="gemeaux"
              title="♊ Géminis — Haz trabajar su mente"
              href="/signes/gemeaux"
              imageSrc="/images/zodiaque/gemeaux.webp"
              imageAlt="Símbolo astrológico de Géminis"
              element="air"
              tagline="Se enamora de una conversación"
              phrase={<>&laquo; He pensado en ti leyendo algo absurdo. <strong>Espera, te cuento.</strong> &raquo;</>}
              phraseContext="Dícelo a un Géminis · ya tiene curiosidad"
              craquer={
                <>
                  <p>
                    <strong>Géminis</strong> pertenece a Mercurio: su principal
                    zona erógena es el <strong>cerebro</strong>. Hazle reír,
                    sorpréndele, replícale con ingenio. Una conversación que
                    rebota vale más que todas las cenas a la luz de las velas
                    del mundo.
                  </p>
                  <p>
                    Y cultiva el movimiento: propón, improvisa, cambia de
                    escenario. Géminis no huye del compromiso — huye de la
                    repetición. Mientras sigas siendo una historia cuyo final
                    no conoce, se queda.
                  </p>
                </>
              }
              fuir={
                <>
                  <p>
                    El aburrimiento y la posesividad. Los silencios pesados,
                    las noches idénticas, el &laquo; ¿dónde estabas? &raquo;.
                    Encierra a un Géminis y se convertirá en corriente de aire.
                  </p>
                </>
              }
              rdv={
                <>
                  <p>
                    Dos sitios en la misma noche — un comienzo previsto, una
                    continuación improvisada. Una expo rara, un bar escondido,
                    una apuesta tonta por el camino. Lo importante no es el
                    lugar: es que haya una historia que contar después.
                  </p>
                </>
              }
            />

            <SeduireSection
              id="cancer"
              title="♋ Cáncer — Abre tu puerta primero"
              href="/signes/cancer"
              imageSrc="/images/zodiaque/cancer.webp"
              imageAlt="Símbolo astrológico de Cáncer"
              element="eau"
              tagline="Se gana con dulzura, se pierde con brusquedad"
              phrase={<>&laquo; Este es mi lugar favorito. <strong>Casi nunca traigo a nadie aquí.</strong> &raquo;</>}
              phraseContext="Dícelo a un Cáncer · acabas de entrar en el círculo"
              craquer={
                <>
                  <p>
                    <strong>Cáncer</strong> es el hijo de la Luna: necesita
                    <strong> seguridad emocional</strong> antes que nada. Para
                    seducirle, muéstrate vulnerable primero. Cuenta un recuerdo
                    de verdad, una duda de verdad — no tu currículum. Cada
                    confidencia que le ofreces es una llave que guarda.
                  </p>
                  <p>
                    Atiende a los detalles que va sembrando: Cáncer pone a
                    prueba en silencio. Recordar que odia el cilantro vale diez
                    cumplidos.
                  </p>
                </>
              }
              fuir={
                <>
                  <p>
                    La ironía sobre sus emociones y la inconstancia. Un
                    &laquo; eres demasiado sensible &raquo; puede cerrar la
                    historia antes de que empiece. Cáncer perdona mucho, pero
                    no olvida nada — es prácticamente su especialidad.
                  </p>
                </>
              }
              rdv={
                <>
                  <p>
                    Un refugio: un pequeño restaurante familiar, una cocina
                    compartida, un sofá y una película que ama desde la
                    infancia. Cáncer no quiere que le impresionen — quiere que
                    le <em>acojan</em>.
                  </p>
                </>
              }
            />

            <SeduireSection
              id="lion"
              title="♌ Leo — Admírale, pero de verdad"
              href="/signes/lion"
              imageSrc="/images/zodiaque/lion.webp"
              imageAlt="Símbolo astrológico de Leo"
              element="feu"
              tagline="Ve a través de la adulación, se derrite ante la admiración sincera"
              phrase={<>&laquo; Todo el mundo te miró al entrar. <strong>Yo solo te vi a ti.</strong> &raquo;</>}
              phraseContext="Dícelo a un Leo · acaba de salir el sol"
              craquer={
                <>
                  <p>
                    <strong>Leo</strong> está regido por el Sol: necesita
                    brillar — y sobre todo ser <strong>visto</strong>. Pero
                    cuidado: la adulación en serie no funciona. Fíjate en
                    aquello de lo que está orgulloso de verdad, en lo que ha
                    construido, en lo que le costó. La admiración precisa es su
                    lengua materna.
                  </p>
                  <p>
                    Y ten porte tú también: Leo quiere una pareja de la que
                    estar orgulloso, no un espectador. Brilla a su lado — nunca
                    en su lugar.
                  </p>
                </>
              }
              fuir={
                <>
                  <p>
                    La indiferencia y la mezquindad. Mirarle por encima del
                    hombro, llevar la cuenta, minimizar sus logros delante de
                    otros: cae el telón, y no vuelve a levantarse. Un Leo
                    humillado no se venga — te borra.
                  </p>
                </>
              }
              rdv={
                <>
                  <p>
                    Un lugar con un poco de teatro: un buen restaurante, un
                    concierto, una terraza al atardecer. Arréglate — para Leo,
                    el esfuerzo en el vestir es una declaración.
                  </p>
                </>
              }
            />

            <SeduireSection
              id="vierge"
              title="♍ Virgo — Sedúcele con los detalles"
              href="/signes/vierge"
              imageSrc="/images/zodiaque/vierge.webp"
              imageAlt="Símbolo astrológico de Virgo"
              element="terre"
              tagline="No cree en las palabras, cree en las pruebas"
              phrase={<>&laquo; He reservado a las 20h, es tranquilo, y te he guardado <strong>el sitio junto a la pared — lo prefieres</strong>. &raquo;</>}
              phraseContext="Dícelo a un Virgo · notó que lo notaste"
              craquer={
                <>
                  <p>
                    <strong>Virgo</strong>, regido por Mercurio, no se deja
                    deslumbrar: <strong>observa</strong>. Lo que le toca son los
                    detalles que demuestran que prestas atención — la hora
                    respetada, la preferencia recordada, el mensaje posterior
                    bien escrito. Para él, el amor es una suma de pequeñas
                    cosas exactas.
                  </p>
                  <p>
                    Háblale de verdad: de ideas, de proyectos, de lo que te
                    mueve. Bajo su aire reservado, Virgo es deliciosamente
                    divertido — pero hay que ganarse su segundo grado.
                  </p>
                </>
              }
              fuir={
                <>
                  <p>
                    Las grandes declaraciones vacías y el desorden. Prometer la
                    luna la primera noche, llegar tarde, ser impreciso: no dirá
                    nada, pero la casilla del &laquo; no &raquo; ya está
                    marcada. A lápiz, cierto. Pero marcada.
                  </p>
                </>
              }
              rdv={
                <>
                  <p>
                    Un lugar tranquilo donde se pueda hablar, elegido con
                    cuidado, sin exceso. Virgo no juzga el precio — juzga la
                    <em> pertinencia</em>. Un sitio que le corresponde vale más
                    que todos los palacios.
                  </p>
                </>
              }
            />

            <SeduireSection
              id="balance"
              title="♎ Libra — Encántale, y te encantará"
              href="/signes/balance"
              imageSrc="/images/zodiaque/balance.webp"
              imageAlt="Símbolo astrológico de Libra"
              element="air"
              tagline="Cae ante la elegancia — la de los gestos y las palabras"
              phrase={<>&laquo; Me encanta cómo ves siempre <strong>los dos lados de cada cosa</strong>. Pero ahora, elígeme a mí. &raquo;</>}
              phraseContext="Dícelo a un Libra · sonrisa garantizada, el corazón sigue"
              craquer={
                <>
                  <p>
                    <strong>Libra</strong> es la otra protegida de Venus: se
                    seduce por la <strong>belleza</strong> — de los lugares, de
                    los modales, de las conversaciones. Sé elegante en sentido
                    amplio: atento, cortés, divertido sin crueldad. Nota todo
                    lo que es armonioso, y todo lo que no lo es.
                  </p>
                  <p>
                    Y juega al juego del encanto a dos: Libra adora el arte de
                    la seducción en sí, ese tenis delicado de miradas y
                    sobreentendidos. No te saltes etapas — la danza es
                    precisamente lo que ama.
                  </p>
                </>
              }
              fuir={
                <>
                  <p>
                    La vulgaridad y la presión. Los gritos, los ultimátums, el
                    &laquo; decídete ya &raquo;. Libra necesita tiempo para
                    elegir — atosígala y elegirá la salida, con una sonrisa,
                    pero para siempre.
                  </p>
                </>
              }
              rdv={
                <>
                  <p>
                    Algo bello: una exposición, una azotea, un restaurante de
                    luz suave. Cuida la estética de todo — incluida la tuya.
                    Para un Libra, un marco fallido es un mensaje fallido.
                  </p>
                </>
              }
            />

            <SeduireSection
              id="scorpion"
              title="♏ Escorpio — No juegues. Nunca."
              href="/signes/scorpion"
              imageSrc="/images/zodiaque/scorpion.webp"
              imageAlt="Símbolo astrológico de Escorpio"
              element="eau"
              tagline="Detecta la mentira antes de que termines de contarla"
              phrase={<>&laquo; Yo no juego. <strong>Si estoy aquí, es porque quiero estar.</strong> &raquo;</>}
              phraseContext="Dícelo a un Escorpio · su guardia acaba de bajar un milímetro"
              craquer={
                <>
                  <p>
                    <strong>Escorpio</strong>, regido por Plutón, no quiere un
                    flirteo: quiere lo <strong>auténtico</strong>. Lo que le
                    hace caer es la intensidad tranquila — alguien que sostiene
                    su mirada, responde con franqueza, y no teme los temas
                    profundos desde la primera noche.
                  </p>
                  <p>
                    Guarda también tu parte de misterio: a Escorpio le encanta
                    descifrar. Entrégate por capas, con sinceridad pero
                    progresivamente. El agua profunda atrae al agua profunda.
                  </p>
                </>
              }
              fuir={
                <>
                  <p>
                    Los juegos y las medias verdades. Coquetear con otros para
                    darle celos, mentir sobre un detalle insignificante: lo
                    sabrá — siempre lo sabe — y la confianza no volverá. Con
                    un Escorpio solo tienes una primera oportunidad.
                  </p>
                </>
              }
              rdv={
                <>
                  <p>
                    Un cara a cara, luz baja, sin multitud y sin testigos.
                    Escorpio no quiere verte socializar — quiere verte a
                    <em> ti</em>. Una conversación de verdad a la 1 de la
                    madrugada vale más que diez salidas brillantes.
                  </p>
                </>
              }
            />

            <SeduireSection
              id="sagittaire"
              title="♐ Sagitario — Ofrécele un horizonte"
              href="/signes/sagittaire"
              imageSrc="/images/zodiaque/sagittaire.webp"
              imageAlt="Símbolo astrológico de Sagitario"
              element="feu"
              tagline="Se ata a quien no intenta atarle"
              phrase={<>&laquo; Tengo dos billetes. <strong>No te digo para dónde.</strong> ¿Vienes? &raquo;</>}
              phraseContext="Dícelo a un Sagitario · ya está haciendo la maleta"
              craquer={
                <>
                  <p>
                    <strong>Sagitario</strong>, hijo de Júpiter, cae ante la
                    <strong> aventura</strong> y ante quienes son una. Hazle
                    reír, llévale a otra parte, háblale de lo que quieres vivir
                    y no de lo que quieres poseer. No busca una media
                    naranja — busca un compañero de ruta.
                  </p>
                  <p>
                    Y sobre todo: ten tu propia vida. Tus pasiones, tus viajes,
                    tus proyectos. Sagitario se ata precisamente a quienes no
                    le necesitan para ser felices.
                  </p>
                </>
              }
              fuir={
                <>
                  <p>
                    Los celos y los planes quinquenales. El &laquo; ¿a dónde
                    vamos tú y yo? &raquo; en la tercera semana, los reproches
                    sobre su libertad: verás una nube de polvo y una silueta a
                    lo lejos.
                  </p>
                </>
              }
              rdv={
                <>
                  <p>
                    Fuera, en otra parte, de pie: una escapada sorpresa, un
                    festival, una cocina del fin del mundo. Si la cita parece
                    un mini-viaje, has ganado.
                  </p>
                </>
              }
            />

            <SeduireSection
              id="capricorne"
              title="♑ Capricornio — Demuestra, no prometas"
              href="/signes/capricorne"
              imageSrc="/images/zodiaque/capricorne.webp"
              imageAlt="Símbolo astrológico de Capricornio"
              element="terre"
              tagline="El más lento en abrirse, el más sólido después"
              phrase={<>&laquo; Tómate tu tiempo. <strong>No tengo prisa, voy en serio.</strong> &raquo;</>}
              phraseContext="Dícelo a un Capricornio · algo acaba de desbloquearse"
              craquer={
                <>
                  <p>
                    <strong>Capricornio</strong>, regido por Saturno, pone a
                    prueba antes de amar. Lo que le seduce: la
                    <strong> fiabilidad demostrada</strong>. Llegar a la hora,
                    hacer lo que dijiste, mantenerte constante durante tres
                    semanas — es espectacularmente banal, y es exactamente lo
                    que casi nunca ha visto.
                  </p>
                  <p>
                    Descubre también su humor: seco, impasible, reservado a
                    quienes lo merecen. El día que un Capricornio bromea
                    contigo, sábelo: es una declaración.
                  </p>
                </>
              }
              fuir={
                <>
                  <p>
                    El drama y la inconsecuencia. Las crisis, las pruebas
                    emocionales, los cambios de plan permanentes. Capricornio
                    no combate el caos: se retira de él, educadamente, y
                    reinvierte su tiempo en otra parte.
                  </p>
                </>
              }
              rdv={
                <>
                  <p>
                    Sobrio y de calidad: un buen restaurante sin ostentación,
                    un paseo con una conversación de verdad. Llega puntual.
                    Pregunta por lo que está construyendo. Verás fundirse la
                    montaña — despacio, pero para siempre.
                  </p>
                </>
              }
            />

            <SeduireSection
              id="verseau"
              title="♒ Acuario — Sé su amigo, luego su misterio"
              href="/signes/verseau"
              imageSrc="/images/zodiaque/verseau.webp"
              imageAlt="Símbolo astrológico de Acuario"
              element="air"
              tagline="Huye del romanticismo de manual, cae ante lo inesperado"
              phrase={<>&laquo; Nunca te he oído decir nada banal. <strong>Es sospechoso.</strong> &raquo;</>}
              phraseContext="Dícelo a un Acuario · le intrigas, que es exactamente el objetivo"
              craquer={
                <>
                  <p>
                    <strong>Acuario</strong>, regido por Urano, no sigue el
                    manual — tira el tuyo también, por cierto. Se seduce por la
                    <strong> mente</strong> y la originalidad: ideas
                    inesperadas, causas que te importan, una conversación que
                    despega a las 23h y aterriza a las 3 de la madrugada sin
                    que nadie haya visto pasar el tiempo.
                  </p>
                  <p>
                    Y empieza por la amistad — de verdad. Acuario se enamora de
                    su mejor amigo una de cada dos veces. Su desconfianza no es
                    hacia el amor: es hacia los roles impuestos.
                  </p>
                </>
              }
              fuir={
                <>
                  <p>
                    Los celos y las convenciones. La cena a la luz de las velas
                    obligatoria, las etapas que validar, el &laquo; así se
                    hace &raquo;. Impónle un guion e improvisará una salida de
                    emergencia.
                  </p>
                </>
              }
              rdv={
                <>
                  <p>
                    Insólito: un lugar raro, una charla improbable, una noche
                    rehaciendo el mundo en una azotea. Acuario no recuerda los
                    restaurantes — recuerda las conversaciones.
                  </p>
                </>
              }
            />

            <SeduireSection
              id="poissons"
              title="♓ Piscis — Sueña con él, no en su lugar"
              href="/signes/poissons"
              imageSrc="/images/zodiaque/poissons.webp"
              imageAlt="Símbolo astrológico de Piscis"
              element="eau"
              tagline="Se gana con ternura, se pierde con cinismo"
              phrase={<>&laquo; He pensado en ti al oír esta canción. <strong>Escúchala y dime a dónde te lleva.</strong> &raquo;</>}
              phraseContext="Dícelo a un Piscis · ya está soñando contigo"
              craquer={
                <>
                  <p>
                    <strong>Piscis</strong>, hijos de Neptuno, se seducen por
                    la <strong>poesía de lo cotidiano</strong>: una canción
                    compartida, un mensaje que llega en el momento justo, una
                    escucha verdadera. No quieren ser conquistados — quieren
                    ser <em>adivinados</em>. Atiende a lo que no dicen: ahí es
                    donde viven.
                  </p>
                  <p>
                    Ofréceles dulzura sin cursilería, y un poco de magia:
                    Piscis todavía cree que el amor es una historia
                    extraordinaria. Con ellos, puede llegar a serlo.
                  </p>
                </>
              }
              fuir={
                <>
                  <p>
                    El cinismo y la brutalidad pragmática. Burlarse de sus
                    sueños, reducir sus intuiciones a &laquo; cosas
                    raras &raquo;, llevarlo todo a la lógica. Piscis no dará un
                    portazo — se evaporará.
                  </p>
                </>
              }
              rdv={
                <>
                  <p>
                    Cerca del agua si es posible, con música seguro: un
                    concierto íntimo, un paseo junto al río, un cine de autor.
                    Deja una parte del plan en el aire — en lo difuso es donde
                    mejor nadan los Piscis.
                  </p>
                </>
              }
            />
          </div>
        </section>

        {/* SÍNTESIS POR ELEMENTO */}
        <section className="space-y-4" aria-labelledby="synthese-elements">
          <H2 id="synthese-elements">El resumen por elemento</H2>

          <p className="text-text/85 leading-relaxed">
            Detrás de los 12 enfoques, cuatro <strong>lenguajes de
            seducción</strong> — uno por elemento.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-red-300/80">
                Fuego · Aries · Leo · Sagitario
              </p>
              <p className="mt-2 text-text/85 leading-relaxed">
                Se conquistan con el <strong>impulso</strong>: el desafío
                (Aries), la admiración (Leo), la aventura (Sagitario). Sé
                directo, vivo, entusiasta. El Fuego solo se apaga de una
                manera: con el aburrimiento.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5">
              <p className="mt-0 text-sm font-semibold uppercase tracking-widest text-emerald-300/80">
                Tierra · Tauro · Virgo · Capricornio
              </p>
              <p className="mt-2 text-text/85 leading-relaxed">
                Se conquistan con <strong>pruebas</strong>: los sentidos
                (Tauro), los detalles (Virgo), la fiabilidad (Capricornio).
                Tómate tu tiempo, cumple tus promesas. La Tierra no escucha lo
                que dices — mira lo que haces.
              </p>
            </div>
            <div className="rounded-2xl border border-sky-500/30 bg-sky-500/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-sky-300/80">
                Aire · Géminis · Libra · Acuario
              </p>
              <p className="mt-2 text-text/85 leading-relaxed">
                Se conquistan con las <strong>palabras</strong>: el humor
                (Géminis), el encanto (Libra), las ideas (Acuario). Conversa,
                sorprende, deja espacio. El Aire se ata a quien no intenta
                retenerlo.
              </p>
            </div>
            <div className="rounded-2xl border border-violet-500/30 bg-violet-500/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-violet-300/80">
                Agua · Cáncer · Escorpio · Piscis
              </p>
              <p className="mt-2 text-text/85 leading-relaxed">
                Se conquistan con la <strong>confianza</strong>: la seguridad
                (Cáncer), la verdad (Escorpio), la ternura (Piscis). Ábrete
                primero, sé paciente, no juegues jamás. El Agua lo da todo —
                pero solo a quien ha demostrado que no huirá.
              </p>
            </div>
          </div>
        </section>

        {/* MÁS ALLÁ DEL SIGNO SOLAR */}
        <section className="space-y-3" aria-labelledby="au-dela-du-signe">
          <H2 id="au-dela-du-signe">Si no funciona: mira su Venus</H2>
          <p className="text-text/85 leading-relaxed">
            ¿Lo aplicas todo al pie de la letra y la persona no reacciona como
            esperabas? Normal: el signo solar solo es la puerta de entrada. En
            el amor,
            <Link href="/blog/venus-en-signes-style-amoureux" className="underline decoration-white/30 hover:decoration-white/60 transition"> Venus describe la manera de amar</Link> y
            <Link href="/blog/mars-en-signes-desir-libido-action" className="underline decoration-white/30 hover:decoration-white/60 transition"> Marte describe el deseo</Link> —
            un Capricornio con Venus en Piscis se seduce mucho más con ternura
            que con pruebas. El
            <Link href="/blog/comprendre-signe-astrologique-ascendant-12-exemples" className="underline decoration-white/30 hover:decoration-white/60 transition"> ascendente</Link> también
            colorea la primera impresión. Para la foto completa, hace falta una
            <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline decoration-white/30 hover:decoration-white/60 transition"> carta natal</Link>.
          </p>
          <p className="text-text/85 leading-relaxed">
            Y una vez lograda la seducción, dos preguntas llegan rápido: ¿se
            entienden nuestros signos? — respuesta en nuestras
            <Link href="/compatibilite" className="underline decoration-white/30 hover:decoration-white/60 transition"> compatibilidades amorosas entre signos</Link> —
            ¿y va a durar? — respuesta en nuestro artículo sobre
            <Link href="/blog/amour-fidelite-signes-zodiaque" className="underline decoration-white/30 hover:decoration-white/60 transition"> el amor y la fidelidad según los signos</Link>.
          </p>
        </section>

        {/* CONCLUSIÓN */}
        <section className="space-y-3" aria-labelledby="conclusion">
          <H2 id="conclusion">Seducir es traducir</H2>
          <p className="text-text/85 leading-relaxed">
            En el fondo, esta guía dice una sola cosa: la seducción no es una
            actuación, es una <strong>traducción</strong>. El mismo &laquo; me
            importas &raquo; se dice como desafío a un Aries, como postre a un
            Tauro, como verdad a un Escorpio, como canción a un Piscis. Fallar
            una seducción suele ser solo hablar el idioma equivocado a la
            persona correcta.
          </p>
          <p className="text-text/85 leading-relaxed">
            Así que aprende su idioma — pero conserva tu voz. Porque el momento
            en que el otro cae de verdad, sea cual sea el signo, es cuando
            entiende que no estás interpretando un papel. Incluso el Géminis.
            Sobre todo el Escorpio. Y si quieres saber qué te ocultará después,
            también hemos catalogado
            <Link href="/blog/mensonge-prefere-chaque-signe-zodiaque" className="underline decoration-white/30 hover:decoration-white/60 transition"> la mentira favorita de cada signo</Link>.
          </p>
        </section>

        {/* FAQ */}
        <section className="space-y-6" aria-labelledby="faq-seduire-signes">
          <H2 id="faq-seduire-signes">Preguntas frecuentes</H2>

          <div className="space-y-4">
            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">
                ¿Cómo seducir a alguien según su signo del zodiaco?
              </summary>
              <p className="text-text/85 leading-relaxed">
                Hablando a su <strong>elemento</strong>: los signos de Fuego se
                conquistan con desafío y entusiasmo, los de Tierra con los
                sentidos y la constancia, los de Aire con conversación y
                ligereza, los de Agua con emoción y confianza. El signo indica
                lo que la persona necesita <em>sentir</em> para abrirse — no es
                una fórmula mágica.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">
                ¿Cuál es el signo más difícil de seducir?
              </summary>
              <p className="text-text/85 leading-relaxed">
                Ningún signo es imposible de seducir, pero tres se toman su
                tiempo: <strong>Capricornio</strong> (pone a prueba la
                fiabilidad antes de abrirse), <strong>Escorpio</strong>
                (comprueba que no juegas con él) y <strong>Acuario</strong>
                (rechaza cualquier guion impuesto). A cambio, suelen ser los
                vínculos más sólidos una vez instalada la confianza.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">
                ¿Hay que mirar el signo solar o Venus para seducir?
              </summary>
              <p className="text-text/85 leading-relaxed">
                Ambos. El signo solar da el temperamento general y la primera
                clave de lectura. Pero en el amor,
                <Link href="/blog/venus-en-signes-style-amoureux" className="underline decoration-white/30 hover:decoration-white/60 transition"> Venus describe la manera de amar</Link> y
                <Link href="/blog/mars-en-signes-desir-libido-action" className="underline decoration-white/30 hover:decoration-white/60 transition"> Marte la naturaleza del deseo</Link>.
                Si la persona no reacciona como sugiere su signo solar, su
                Venus probablemente está en otro signo.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">
                ¿La compatibilidad astrológica garantiza que la seducción
                funcione?
              </summary>
              <p className="text-text/85 leading-relaxed">
                No. La astrología ofrece una clave de lectura de los
                temperamentos, no una garantía. Dos signos
                &laquo; incompatibles &raquo; pueden vivir una gran historia, y
                dos signos &laquo; hechos el uno para el otro &raquo; pueden
                aburrirse. Consulta nuestras
                <Link href="/compatibilite" className="underline decoration-white/30 hover:decoration-white/60 transition"> compatibilidades entre signos</Link> como
                una lente — la sinceridad hace el resto.
              </p>
            </details>
          </div>
        </section>

        <nav aria-label="Navegación de fin de artículo">
          <Link
            href="/blog"
            className="inline-flex rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-text/90 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            ← Ver todos los artículos
          </Link>
        </nav>
      </article>
    </>
  );
}
