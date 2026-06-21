import type { ReactNode } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import { AUTHOR_PERSON, PUBLISHER_ORG, SITE_URL } from "@/lib/seo";

const ARTICLE_SLUG = "ton-signe-astro-selon-ta-facon-de-repondre-aux-messages";
const ARTICLE_URL = `${SITE_URL}/blog/${ARTICLE_SLUG}`;
const COVER_URL = `${SITE_URL}/images/blog/ton-signe-astro-selon-ta-facon-de-repondre-aux-messages.webp`;

export const meta = {
  slug: ARTICLE_SLUG,
  title: "Tu signo del zodiaco según cómo respondes a los mensajes",
  seoTitle: "Tu signo según cómo respondes a los SMS — Astro Cours",
  description:
    "¿Visto, sin contestar, un audio de 4 minutos o una respuesta de una palabra? Tu signo del zodiaco según cómo respondes a los SMS y DM. Ligero, divertido, sorprendentemente acertado.",
  date: "2026-05-19",
  tags: ["signe", "zodiaque", "psychologie astrologique", "astrologie"],
  readingLevel: "débutant" as const,
  cover: "/images/blog/ton-signe-astro-selon-ta-facon-de-repondre-aux-messages.webp",
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
        alt: "Tu signo del zodiaco según cómo respondes a los mensajes",
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
      bubbleOut: "bg-red-500/15 border-red-400/30 text-red-50",
    };
  }

  if (element === "terre") {
    return {
      border: "border-emerald-500/30",
      iconWrap: "border-emerald-500/25 bg-emerald-500/10",
      glow: "from-emerald-500/10 to-transparent",
      title: "text-emerald-200",
      bubbleOut: "bg-emerald-500/15 border-emerald-400/30 text-emerald-50",
    };
  }

  if (element === "air") {
    return {
      border: "border-sky-500/30",
      iconWrap: "border-sky-500/25 bg-sky-500/10",
      glow: "from-sky-500/10 to-transparent",
      title: "text-sky-200",
      bubbleOut: "bg-sky-500/15 border-sky-400/30 text-sky-50",
    };
  }

  return {
    border: "border-violet-500/30",
    iconWrap: "border-violet-500/25 bg-violet-500/10",
    glow: "from-violet-500/10 to-transparent",
    title: "text-violet-200",
    bubbleOut: "bg-violet-500/15 border-violet-400/30 text-violet-50",
  };
}

function H2({
  children,
  id,
}: {
  children: ReactNode;
  id: string;
}) {
  return (
    <h2
      id={id}
      className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight"
    >
      {children}
    </h2>
  );
}

function MessageBubble({
  side,
  meta: bubbleMeta,
  children,
  bubbleClass,
}: {
  side: "in" | "out";
  meta: string;
  children: ReactNode;
  bubbleClass?: string;
}) {
  const isOut = side === "out";

  return (
    <div className={`flex ${isOut ? "justify-end" : "justify-start"}`}>
      <div className="max-w-[85%]">
        <div
          className={[
            "rounded-2xl border px-4 py-3 text-[15px] leading-relaxed shadow-soft",
            isOut
              ? bubbleClass ?? "bg-white/10 border-white/15 text-white/90"
              : "bg-black/30 border-white/10 text-text/85",
            isOut ? "rounded-br-md" : "rounded-bl-md",
          ].join(" ")}
        >
          {children}
        </div>
        <p
          className={[
            "mt-1 text-[11px] uppercase tracking-widest text-text/45",
            isOut ? "text-right" : "text-left",
          ].join(" ")}
        >
          {bubbleMeta}
        </p>
      </div>
    </div>
  );
}

function SignSection({
  id,
  title,
  href,
  imageSrc,
  imageAlt,
  element,
  tagline,
  scenarioMessage,
  scenarioMeta,
  replyMessage,
  replyMeta,
  decryptage,
}: {
  id: string;
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  element: ZodiacElement;
  tagline: string;
  scenarioMessage: ReactNode;
  scenarioMeta: string;
  replyMessage: ReactNode;
  replyMeta: string;
  decryptage: ReactNode;
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

        <div className="relative mt-5 space-y-3">
          <MessageBubble side="in" meta={scenarioMeta}>
            {scenarioMessage}
          </MessageBubble>
          <MessageBubble
            side="out"
            meta={replyMeta}
            bubbleClass={styles.bubbleOut}
          >
            {replyMessage}
          </MessageBubble>
        </div>

        <div className="relative mt-5 rounded-xl border border-white/10 bg-black/30 p-4 text-text/85 leading-relaxed">
          <p className="text-xs font-semibold uppercase tracking-widest text-text/55">
            Análisis astrológico
          </p>
          <div className="mt-1 space-y-2">{decryptage}</div>
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
    inLanguage: "es",
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
        item: `${SITE_URL}/blog`,
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
        name: "¿Basta mi signo solar para explicar cómo respondo a los mensajes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. El signo solar marca una gran tendencia, pero el ascendente, la posición de Mercurio (la comunicación) y la de la Luna (las emociones) afinan enormemente el estilo relacional. Un Aries con ascendente Virgo no responderá igual que un Aries con ascendente Sagitario.",
        },
      },
      {
        "@type": "Question",
        name: "¿Por qué algunos signos tardan tanto en responder?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Los signos de Tierra (Tauro, Capricornio) se toman su tiempo por temperamento: responden cuando están disponibles, no antes. Escorpio observa antes de actuar. Acuario, simplemente, lo olvida. No es desinterés, es una relación distinta con el tiempo.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué signo envía los audios interminables?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Leo, sin dudarlo. Prefiere contar que escribir. Sagitario y Piscis también son grandes aficionados a los audios, pero por razones distintas: uno por entusiasmo, el otro por emoción.",
        },
      },
      {
        "@type": "Question",
        name: "¿La posición de Mercurio cambia realmente la forma de escribir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, enormemente. Mercurio rige el pensamiento, el lenguaje y la comunicación. Mercurio en signo de Aire (Géminis, Libra, Acuario) da un estilo rápido, fluido, a veces disperso. Mercurio en signo de Agua (Cáncer, Escorpio, Piscis) da un estilo cargado de emoción, alusivo, a veces ambiguo.",
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
            <p className="text-sm text-text/65">Astrología y comunicación</p>

            <p className="mt-4 max-w-2xl text-text/80 leading-relaxed">
              Visto a las 14:32. Audio de 4 minutos. <strong>Cuatro burbujas seguidas</strong>.
              Un &laquo; ok. &raquo; con punto. Nuestra forma de responder a los mensajes
              suele decir más que el propio contenido — y la astrología tiene
              algunas teorías muy divertidas al respecto.
            </p>

            <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
              Repasamos los 12 signos del zodiaco para descifrar su
              <strong> estilo de SMS</strong>. Con un fondo serio tras el guiño:
              la comunicación de un signo nace de verdad de su <strong>naturaleza
              elemental</strong> y de Mercurio.
            </p>

            <div className="mt-5 flex flex-wrap gap-2" aria-label="Temas del artículo">
              <Pill tone="rose">Estilo de SMS</Pill>
              <Pill tone="violet">12 arquetipos</Pill>
              <Pill tone="sky">Comunicación</Pill>
              <Pill tone="orange">Ligero y divertido</Pill>
            </div>

            <div className="mt-4" aria-label="Palabras clave del artículo">
              <TagPillsInline tags={meta.tags} />
            </div>
          </div>
        </header>

        {/* DEFINITION BOX — Featured Snippet */}
        <div className="rounded-2xl border border-violet-400/20 bg-violet-400/[0.04] px-6 py-5">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-300/80">
            En resumen
          </p>
          <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
            La <strong>forma de responder a los mensajes</strong> refleja el temperamento astrológico
            de una persona: los signos de <strong>Fuego</strong> responden rápido y fuerte, los signos
            de <strong>Tierra</strong> responden cuando les conviene, los signos de <strong>Aire</strong>
            responden mucho y deprisa, los signos de <strong>Agua</strong> responden
            con sobreentendidos. Mercurio y la Luna afinan después el estilo individual.
          </p>
        </div>

        {/* INTRO */}
        <section className="space-y-3" aria-labelledby="intro">
          <H2 id="intro">Por qué nuestros mensajes delatan nuestro signo</H2>
          <p className="text-text/85 leading-relaxed">
            Un mensaje son tres microdecisiones: <strong>cuándo</strong> responder,
            <strong> qué</strong> responder, <strong>cómo</strong> escribirlo. Y esas
            tres decisiones las gobiernan funciones psíquicas muy precisas
            — la relación con el tiempo, con los demás, con la emoción. Es decir, los
            <strong> elementos astrológicos</strong> y la posición de
            <Link href="/blog/mercurien" className="underline decoration-white/30 hover:decoration-white/60 transition"> Mercurio</Link>.
          </p>
          <p className="text-text/85 leading-relaxed">
            Lo que sigue es deliberadamente caricaturesco, pero no te equivoques:
            cada descripción está anclada en el temperamento real del signo. Vas a
            reconocer a alguien. Probablemente a ti.
          </p>
        </section>

        {/* 12 SIGNES */}
        <section className="space-y-6" aria-labelledby="les-12-signes">
          <H2 id="les-12-signes">Los 12 signos frente a un mensaje sin leer</H2>

          <div className="grid gap-6">
            <SignSection
              id="belier"
              title="♈ Aries — responde antes de terminar de leer"
              href="/signes/belier"
              imageSrc="/images/zodiaque/belier.webp"
              imageAlt="Símbolo astrológico de Aries"
              element="feu"
              tagline="«¿Salimos o no salimos?»"
              scenarioMessage={<>Hola, ¿qué haces esta noche?</>}
              scenarioMeta="Tú · 19:42"
              replyMessage={<>Nada me apunto a dónde vamos</>}
              replyMeta="Aries · 19:42"
              decryptage={
                <>
                  <p>
                    Once segundos. Sin punto, sin coma, sin una pregunta de vuelta
                    bien formulada. <strong>Aries</strong> no piensa, actúa.
                    Marte, su planeta, detesta la espera.
                  </p>
                  <p className="text-text/70 text-sm">
                    Truco: si quieres verlo dudar, proponle tres opciones. Elegirá
                    una en menos de un minuto. ¿Una buena? No necesariamente.
                  </p>
                </>
              }
            />

            <SignSection
              id="taureau"
              title="♉ Tauro — lo lee, ordena, responderá más tarde"
              href="/signes/taureau"
              imageSrc="/images/zodiaque/taureau.webp"
              imageAlt="Símbolo astrológico de Tauro"
              element="terre"
              tagline="«Respondo cuando tenga un momento 🙂»"
              scenarioMessage={<>¿Viste mi mensaje de ayer?</>}
              scenarioMeta="Tú · 09:12"
              replyMessage={
                <>Sí sí respondo en cuanto tenga un momento 🙂</>
              }
              replyMeta="Tauro · 21:38 (12h después)"
              decryptage={
                <>
                  <p>
                    <strong>Tauro</strong> lo vio. Tauro tomó nota. Tauro
                    responderá. Ahora no. A Venus en Tierra le molesta que le metan
                    prisa con su ritmo: su respuesta llegará cuando el contexto sea cómodo —
                    no antes.
                  </p>
                  <p className="text-text/70 text-sm">
                    No lo apremies. No acelerarás nada y te arriesgas al silencio
                    total.
                  </p>
                </>
              }
            />

            <SignSection
              id="gemeaux"
              title="♊ Géminis — responde en cuatro burbujas"
              href="/signes/gemeaux"
              imageSrc="/images/zodiaque/gemeaux.webp"
              imageAlt="Símbolo astrológico de Géminis"
              element="air"
              tagline="«espera / en realidad / no pero a grandes rasgos»"
              scenarioMessage={<>¿Me puedes explicar el tema?</>}
              scenarioMeta="Tú · 14:01"
              replyMessage={
                <>
                  <span className="block">A ver</span>
                  <span className="block">espera</span>
                  <span className="block">en resumen es esto pero</span>
                  <span className="block">no en realidad depende</span>
                </>
              }
              replyMeta="Géminis · 14:01 (×4)"
              decryptage={
                <>
                  <p>
                    Cuatro burbujas, dos ideas, seis tangentes. Los
                    <strong> Géminis</strong> están regidos por Mercurio — el pensamiento
                    rápido, asociativo, que salta de una idea a otra. Escribir
                    una sola frase completa sería una traición a su estilo mental.
                  </p>
                  <p className="text-text/70 text-sm">
                    Buena noticia: nunca te ignorarán. Mala: también pueden
                    responder a algo distinto de tu pregunta inicial.
                  </p>
                </>
              }
            />

            <SignSection
              id="cancer"
              title="♋ Cáncer — «no pasa nada» (sí pasa)"
              href="/signes/cancer"
              imageSrc="/images/zodiaque/cancer.webp"
              imageAlt="Símbolo astrológico de Cáncer"
              element="eau"
              tagline="El emoji que lo esconde todo"
              scenarioMessage={<>Cancelamos esta noche, estoy reventado.</>}
              scenarioMeta="Tú · 18:55"
              replyMessage={<>Ah vale 😌 no pasa nada</>}
              replyMeta="Cáncer · 18:56"
              decryptage={
                <>
                  <p>
                    &laquo; no pasa nada &raquo; = sí pasa. El emoji es una trampa.
                    <strong>Cáncer</strong>, signo de Agua lunar, encaja en silencio
                    y te deja adivinar lo que ocurre de verdad.
                  </p>
                  <p className="text-text/70 text-sm">
                    Si recibes este mensaje: llama. En serio. Un audio de 30 segundos
                    basta para disolver el 80 % del malestar.
                  </p>
                </>
              }
            />

            <SignSection
              id="lion"
              title="♌ Leo — responde con un audio de 4 minutos"
              href="/signes/lion"
              imageSrc="/images/zodiaque/lion.webp"
              imageAlt="Símbolo astrológico de Leo"
              element="feu"
              tagline="«Espera te mando un audio que es más fácil»"
              scenarioMessage={<>¿Me puedes resumir la situación?</>}
              scenarioMeta="Tú · 11:14"
              replyMessage={<>🎙️ Audio · 4:12</>}
              replyMeta="Leo · 11:14"
              decryptage={
                <>
                  <p>
                    <strong>Leo</strong> no escribe, Leo narra. Solar, necesita
                    existir por su voz, su presencia, su timing. El audio
                    no es un atajo: es una puesta en escena.
                  </p>
                  <p className="text-text/70 text-sm">
                    Vas a escuchar, vas a sonreír, vas a perdonar. Ese es el poder
                    de Leo.
                  </p>
                </>
              }
            />

            <SignSection
              id="vierge"
              title="♍ Virgo — corrige tu falta antes de responder"
              href="/signes/vierge"
              imageSrc="/images/zodiaque/vierge.webp"
              imageAlt="Símbolo astrológico de Virgo"
              element="terre"
              tagline="El asterisco es una declaración de amor"
              scenarioMessage={<>¿Quieres benir el sábado?</>}
              scenarioMeta="Tú · 17:00"
              replyMessage={<>*venir. Sí, con mucho gusto.</>}
              replyMeta="Virgo · 17:01"
              decryptage={
                <>
                  <p>
                    El asterisco es amor. <strong>Virgo</strong>, regido
                    por Mercurio en Tierra, no soporta la imprecisión. Corregirte,
                    para él, es cuidarte.
                  </p>
                  <p className="text-text/70 text-sm">
                    Pequeño consejo: no le preguntes &laquo; ¿cómo estás? &raquo;,
                    te responderá de verdad.
                  </p>
                </>
              }
            />

            <SignSection
              id="balance"
              title="♎ Libra — responde devolviéndote la pregunta"
              href="/signes/balance"
              imageSrc="/images/zodiaque/balance.webp"
              imageAlt="Símbolo astrológico de Libra"
              element="air"
              tagline="«Lo que tú prefieras 🙂»"
              scenarioMessage={<>¿Qué restaurante prefieres?</>}
              scenarioMeta="Tú · 12:30"
              replyMessage={
                <>Lo que tú prefieras me vale 🙂 ¿y tú entre cuáles dudas?</>
              }
              replyMeta="Libra · 13:02"
              decryptage={
                <>
                  <p>
                    <strong>Libra</strong> no decide, Libra armoniza. Venus
                    en Aire busca el consenso ante todo — y a veces prefiere no
                    elegir antes que arriesgarse a decepcionar.
                  </p>
                  <p className="text-text/70 text-sm">
                    Si de verdad quieres una respuesta: propón <em>dos</em> opciones
                    cerradas. Tres, y desencadenas una crisis existencial.
                  </p>
                </>
              }
            />

            <SignSection
              id="scorpion"
              title="♏ Escorpio — visto, sin responder, sigue en línea"
              href="/signes/scorpion"
              imageSrc="/images/zodiaque/scorpion.webp"
              imageAlt="Símbolo astrológico de Escorpio"
              element="eau"
              tagline="Visto a las 14:32"
              scenarioMessage={<>¿Podemos hablar?</>}
              scenarioMeta="Tú · 14:31"
              replyMessage={<>👁️ Visto a las 14:32</>}
              replyMeta="Escorpio · silencio"
              decryptage={
                <>
                  <p>
                    <strong>Escorpio</strong> observa. Escorpio decidirá. No de
                    inmediato. Plutón, su planeta, detesta responder con prisas —
                    y adora que esperes.
                  </p>
                  <p className="text-text/70 text-sm">
                    El silencio nunca es inocente. Es una respuesta. A ti te toca
                    leerla.
                  </p>
                </>
              }
            />

            <SignSection
              id="sagittaire"
              title="♐ Sagitario — responde a otra cosa, pero con entusiasmo"
              href="/signes/sagittaire"
              imageSrc="/images/zodiaque/sagittaire.webp"
              imageAlt="Símbolo astrológico de Sagitario"
              element="feu"
              tagline="«Jaja se me olvidó, pero oye ¿sabes qué…»"
              scenarioMessage={<>¿Me puedes enviar el documento que vimos ayer?</>}
              scenarioMeta="Tú · 10:00"
              replyMessage={
                <>
                  Jaja se me olvidó del todo 😅 pero oye ¿sabes qué?, vi una cosa
                  alucinante esta mañana
                </>
              }
              replyMeta="Sagitario · 10:04"
              decryptage={
                <>
                  <p>
                    El documento llegará. Quizá. Mañana. La semana que viene.
                    <strong> Sagitario</strong>, regido por Júpiter, vive en el gran
                    angular: los pequeños detalles del día a día se le escurren entre los
                    dedos.
                  </p>
                  <p className="text-text/70 text-sm">
                    Truco: si quieres el documento, vuelve a pedírselo proponiéndole un café.
                    Ahí sí lo recordará.
                  </p>
                </>
              }
            />

            <SignSection
              id="capricorne"
              title="♑ Capricornio — responde con una palabra"
              href="/signes/capricorne"
              imageSrc="/images/zodiaque/capricorne.webp"
              imageAlt="Símbolo astrológico de Capricornio"
              element="terre"
              tagline="«Ok.»"
              scenarioMessage={<>¿Te apetece que comamos mañana?</>}
              scenarioMeta="Tú · 16:45"
              replyMessage={<>Ok.</>}
              replyMeta="Capricornio · 16:46"
              decryptage={
                <>
                  <p>
                    <strong>Capricornio</strong> dijo que sí. No hace falta más. Tema
                    cerrado. Saturno, su planeta, ahorra energía verbal como se
                    ahorran los recursos de una expedición larga.
                  </p>
                  <p className="text-text/70 text-sm">
                    No leas frialdad donde solo hay eficiencia. Si
                    Capricornio dijera no, lo sabrías.
                  </p>
                </>
              }
            />

            <SignSection
              id="verseau"
              title="♒ Acuario — responde 3 días después, sobre otro tema"
              href="/signes/verseau"
              imageSrc="/images/zodiaque/verseau.webp"
              imageAlt="Símbolo astrológico de Acuario"
              element="air"
              tagline="«Toma, mira esto»"
              scenarioMessage={<>¿Recibiste mi mensaje del lunes?</>}
              scenarioMeta="Tú · jueves · 10:00"
              replyMessage={
                <>Toma mira este artículo es una pasada acabo de encontrarlo 👽</>
              }
              replyMeta="Acuario · jueves · 23:47"
              decryptage={
                <>
                  <p>
                    <strong>Acuario</strong> olvidó tu mensaje. Acuario tiene una
                    nueva obsesión. Urano, su planeta, vive en el presente fulgurante —
                    las conversaciones en curso ya pertenecen al pasado.
                  </p>
                  <p className="text-text/70 text-sm">
                    No es desprecio. Es solo un cerebro que cambia de canal
                    sin avisar.
                  </p>
                </>
              }
            />

            <SignSection
              id="poissons"
              title="♓ Piscis — responde con un corazón y una emoción existencial"
              href="/signes/poissons"
              imageSrc="/images/zodiaque/poissons.webp"
              imageAlt="Símbolo astrológico de Piscis"
              element="eau"
              tagline="«estoy escuchando una canción que me hace llorar 💗»"
              scenarioMessage={<>¿Qué haces?</>}
              scenarioMeta="Tú · 22:14"
              replyMessage={
                <>
                  No sé muy bien, estoy escuchando una canción que me hace llorar 💗 ¿y tú
                  qué tal?
                </>
              }
              replyMeta="Piscis · 22:16"
              decryptage={
                <>
                  <p>
                    No lo preguntaste. Y, sin embargo, todo está dicho. Los
                    <strong> Piscis</strong>, regidos por Neptuno, no separan
                    lo práctico de lo emocional: cada mensaje es ocasión para
                    una microconfidencia.
                  </p>
                  <p className="text-text/70 text-sm">
                    Respóndeles con una pregunta de verdad. Se abrirán como pocas veces.
                  </p>
                </>
              }
            />
          </div>
        </section>

        {/* SYNTHÈSE PAR ÉLÉMENT */}
        <section className="space-y-4" aria-labelledby="synthese-elements">
          <H2 id="synthese-elements">El resumen por elemento</H2>

          <p className="text-text/85 leading-relaxed">
            Si te quedas con cuatro cosas sobre cómo se responde a los mensajes según
            la astrología, son los cuatro <strong>elementos</strong>.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-red-300/80">
                Fuego · Aries · Leo · Sagitario
              </p>
              <p className="mt-2 text-text/85 leading-relaxed">
                Responden <strong>rápido</strong>, <strong>fuerte</strong>, y a menudo
                antes de terminar de leer. Audios, exclamaciones, faltas asumidas.
                Primero la energía, después la precisión.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300/80">
                Tierra · Tauro · Virgo · Capricornio
              </p>
              <p className="mt-2 text-text/85 leading-relaxed">
                Responden <strong>cuando les conviene</strong>. Corto, limpio,
                eficaz. Sin florituras. Si recibes un &laquo; ok. &raquo;, no
                es frialdad: es un asentimiento total.
              </p>
            </div>
            <div className="rounded-2xl border border-sky-500/30 bg-sky-500/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-sky-300/80">
                Aire · Géminis · Libra · Acuario
              </p>
              <p className="mt-2 text-text/85 leading-relaxed">
                Responden <strong>mucho</strong>, en varias burbujas, y a menudo
                con una pregunta de vuelta. La conversación es su elemento natural —
                la conclusión, mucho menos.
              </p>
            </div>
            <div className="rounded-2xl border border-violet-500/30 bg-violet-500/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-violet-300/80">
                Agua · Cáncer · Escorpio · Piscis
              </p>
              <p className="mt-2 text-text/85 leading-relaxed">
                Responden <strong>con subtexto</strong>. Emojis, silencios, ambientes.
                El mensaje dice una cosa, la emoción dice tres. Para leer entre
                líneas — siempre.
              </p>
            </div>
          </div>

          <p className="text-text/80 leading-relaxed">
            Este estilo de comunicación se afina aún más por la posición de
            <Link href="/blog/mercurien" className="underline decoration-white/30 hover:decoration-white/60 transition"> Mercurio</Link> y
            la de la <Link href="/blog/lunarien" className="underline decoration-white/30 hover:decoration-white/60 transition">Luna</Link> en
            la carta natal. Un Escorpio solar con Mercurio en Géminis no será
            silencioso — será intenso <em>y</em> hablador. Todo el interés de una
            <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline decoration-white/30 hover:decoration-white/60 transition"> carta natal</Link> completa
            está ahí.
          </p>
        </section>

        {/* CONCLUSION */}
        <section className="space-y-3" aria-labelledby="conclusion">
          <H2 id="conclusion">Y tú, ¿te reconoces?</H2>
          <p className="text-text/85 leading-relaxed">
            Si te has reído (o has apretado los dientes) al leer tu signo, es probablemente
            porque tu signo solar es bien dominante en ti. Si nada se te
            parece, mira hacia tu ascendente o tu Mercurio: ahí es
            donde suele esconderse tu verdadero estilo de comunicación.
          </p>
          <p className="text-text/85 leading-relaxed">
            Y la próxima vez que alguien te deje en &laquo; visto &raquo; durante
            tres horas, pregúntate: quizá sea solo un Tauro terminando
            su comida.
          </p>
        </section>

        {/* FAQ */}
        <section className="space-y-6" aria-labelledby="faq-messages-signes">
          <H2 id="faq-messages-signes">Preguntas frecuentes</H2>

          <div className="space-y-4">
            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">
                ¿Basta mi signo solar para explicar cómo respondo a los mensajes?
              </summary>
              <p className="text-text/85 leading-relaxed">
                No. El signo solar marca una gran tendencia, pero el
                <Link href="/blog/comprendre-signe-astrologique-ascendant-12-exemples" className="underline decoration-white/30 hover:decoration-white/60 transition">
                  ascendente
                </Link>, la posición de
                <Link href="/blog/mercurien" className="underline decoration-white/30 hover:decoration-white/60 transition"> Mercurio</Link> (la comunicación) y la de la
                <Link href="/blog/lunarien" className="underline decoration-white/30 hover:decoration-white/60 transition"> Luna</Link> (las emociones) afinan enormemente
                el estilo relacional. Un Aries con ascendente Virgo no responderá igual que
                un Aries con ascendente Sagitario.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">
                ¿Por qué algunos signos tardan tanto en responder?
              </summary>
              <p className="text-text/85 leading-relaxed">
                Los signos de <strong>Tierra</strong> (Tauro, Capricornio) se toman su
                tiempo por temperamento: responden cuando están disponibles, no
                antes. <strong>Escorpio</strong> observa antes de actuar.
                <strong> Acuario</strong>, simplemente, lo olvida. No es
                desinterés, es una relación distinta con el tiempo.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">
                ¿Qué signo envía los audios interminables?
              </summary>
              <p className="text-text/85 leading-relaxed">
                <strong>Leo</strong>, sin dudarlo. Prefiere contar que escribir.
                <strong>Sagitario</strong> y <strong>Piscis</strong> también son
                grandes aficionados a los audios, pero por razones distintas:
                uno por entusiasmo, el otro por emoción.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">
                ¿La posición de Mercurio cambia realmente la forma de escribir?
              </summary>
              <p className="text-text/85 leading-relaxed">
                Sí, enormemente. <strong>Mercurio</strong> rige el pensamiento, el lenguaje
                y la comunicación. Mercurio en signo de Aire (Géminis, Libra, Acuario)
                da un estilo rápido, fluido, a veces disperso. Mercurio en signo
                de Agua (Cáncer, Escorpio, Piscis) da un estilo cargado de emoción,
                alusivo, a veces ambiguo. A menudo es Mercurio, más que el Sol, quien
                decide tu “estilo de SMS”.
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
