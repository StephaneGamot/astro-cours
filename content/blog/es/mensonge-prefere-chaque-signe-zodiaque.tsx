import type { ReactNode } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import { AUTHOR_PERSON, PUBLISHER_ORG, SITE_URL } from "@/lib/seo";

const ARTICLE_SLUG = "mensonge-prefere-chaque-signe-zodiaque";
const LOCALIZED_SLUG = "mentira-favorita-de-cada-signo-zodiaco";
const ARTICLE_URL = `${SITE_URL}/es/blog/${LOCALIZED_SLUG}`;
const COVER_URL = `${SITE_URL}/images/blog/mensonge-prefere-chaque-signe-zodiaque.webp`;

export const meta = {
  slug: ARTICLE_SLUG,
  title: "La mentira favorita de cada signo del zodíaco",
  seoTitle: "La mentira favorita de cada signo del zodíaco — Astro Cours",
  description:
    "«Estoy tranquilo», «Te perdoné», «Ya voy»… La mentira favorita de cada signo del zodíaco — y la verdad que se esconde detrás. Divertido, punzante, sorprendentemente certero.",
  date: "2026-07-17",
  tags: ["signe", "zodiaque", "psychologie astrologique", "astrologie"],
  readingLevel: "débutant" as const,
  cover: "/images/blog/mensonge-prefere-chaque-signe-zodiaque.webp",
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
        alt: "La mentira favorita de cada signo del zodíaco",
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

function LieSection({
  id,
  title,
  href,
  imageSrc,
  imageAlt,
  element,
  tagline,
  lie,
  lieContext,
  verite,
  reperage,
}: {
  id: string;
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  element: ZodiacElement;
  tagline: string;
  lie: ReactNode;
  lieContext: string;
  verite: ReactNode;
  reperage: ReactNode;
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
          <p>{lie}</p>
          <footer className="mt-1 text-[11px] uppercase tracking-widest opacity-60">
            {lieContext}
          </footer>
        </blockquote>

        <div className="relative mt-5 rounded-xl border border-white/10 bg-black/30 p-4 text-text/85 leading-relaxed">
          <p className="text-xs font-semibold uppercase tracking-widest text-text/55">
            La verdad detrás
          </p>
          <div className="mt-1 space-y-2">{verite}</div>
        </div>

        <div className="relative mt-3 rounded-xl border border-white/10 bg-black/30 p-4 text-text/80 leading-relaxed">
          <p className="text-xs font-semibold uppercase tracking-widest text-text/55">
            Cómo detectarla
          </p>
          <div className="mt-1 text-sm space-y-2">{reperage}</div>
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
        item: `${SITE_URL}/es`,
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
        name: "¿Cuál es el signo del zodíaco que más miente?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ningún signo miente «más» que los demás: cada uno miente de forma diferente. Géminis adorna, Piscis huye hacia lo difuso, Escorpio oculta, Libra arregla la verdad para preservar la armonía. La mentira de un signo refleja su fragilidad principal, no un defecto moral propio de ese signo.",
        },
      },
      {
        "@type": "Question",
        name: "¿Por qué cada signo tiene una mentira «favorita»?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Porque la mentira más frecuente de una persona protege lo que más le importa: su imagen (Leo), su independencia (Acuario), su comodidad (Tauro) o su vulnerabilidad (Cáncer, Escorpio). En astrología, ese punto sensible corresponde a la naturaleza elemental del signo y a su planeta regente.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se puede detectar una mentira gracias a la astrología?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No — la astrología no es un detector de mentiras. En cambio, conocer el temperamento de un signo ayuda a comprender qué protege cuando miente: un «estoy bien» de Cáncer no significa lo mismo que un «estoy bien» de Capricornio. Es una clave de lectura, no una prueba.",
        },
      },
      {
        "@type": "Question",
        name: "¿Mentir a menudo está escrito en la carta natal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La carta natal no condena a nadie a mentir. Algunas posiciones (Mercurio o Neptuno en aspecto disonante) facilitan embellecer o esquivar, pero el uso que se hace de ellas sigue siendo una elección. Una carta muestra tendencias, nunca fatalidades.",
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
            <p className="text-sm text-text/65">Astrología &amp; psicología</p>

            <p className="mt-4 max-w-2xl text-text/80 leading-relaxed">
              &laquo;Estoy tranquilo.&raquo; &laquo;Te perdoné.&raquo;
              &laquo;Ya voy, estoy a 10 minutos.&raquo; Todos tenemos
              <strong> una mentira de cabecera</strong> — esa que repetimos tan a
              menudo que hemos acabado creyéndola nosotros mismos.
            </p>

            <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
              Y esa mentira no se elige al azar: protege exactamente lo más frágil
              de cada signo. Aquí tienes la
              <strong> mentira favorita de los 12 signos del zodíaco</strong> — con
              la verdad que se esconde detrás, y cómo detectarla.
            </p>

            <div className="mt-5 flex flex-wrap gap-2" aria-label="Temas del artículo">
              <Pill tone="violet">12 mentiras</Pill>
              <Pill tone="rose">Pequeñas grietas</Pill>
              <Pill tone="sky">Psicología astro</Pill>
              <Pill tone="orange">Ligero &amp; punzante</Pill>
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
            La <strong>mentira favorita de un signo</strong> protege su punto
            sensible: los signos de <strong>Fuego</strong> mienten sobre sus
            emociones (&laquo;estoy tranquilo&raquo;), los de <strong>Tierra</strong> sobre
            su disponibilidad (&laquo;ya me ocupo&raquo;), los de
            <strong> Aire</strong> sobre su desapego (&laquo;me da igual&raquo;), los
            de <strong>Agua</strong> sobre su vulnerabilidad (&laquo;estoy
            bien&raquo;).
          </p>
        </div>

        {/* INTRO */}
        <section className="space-y-3" aria-labelledby="intro">
          <H2 id="intro">Por qué nuestras mentiras delatan nuestro signo</H2>
          <p className="text-text/85 leading-relaxed">
            Una mentira cotidiana casi nunca es un engaño calculado: es un
            <strong> reflejo de protección</strong>. Mentimos para preservar nuestra
            imagen, nuestra tranquilidad o la armonía de una relación. Y lo que
            intentamos proteger depende directamente del temperamento — en
            astrología, del <strong>elemento</strong> del signo y de su planeta
            regente, como
            <Link href="/blog/mercurien" className="underline decoration-white/30 hover:decoration-white/60 transition"> Mercurio</Link>,
            el planeta del lenguaje.
          </p>
          <p className="text-text/85 leading-relaxed">
            Lo que sigue es voluntariamente caricaturesco — como nuestras
            <Link href="/blog/qualites-defauts-12-signes-zodiaque" className="underline decoration-white/30 hover:decoration-white/60 transition"> cualidades y defectos de los 12 signos</Link> —
            pero cada mentira está anclada en la verdadera mecánica del signo. Vas a
            reconocer a alguien. Probablemente a ti.
          </p>
        </section>

        {/* 12 SIGNOS */}
        <section className="space-y-6" aria-labelledby="las-12-mentiras">
          <H2 id="las-12-mentiras">Los 12 signos, una mentira cada uno</H2>

          <div className="grid gap-6">
            <LieSection
              id="aries"
              title="♈ Aries — «Estoy tranquilo.»"
              href="/signes/belier"
              imageSrc="/images/zodiaque/belier.webp"
              imageAlt="Símbolo astrológico de Aries"
              element="feu"
              tagline="Dicho apretando la mandíbula"
              lie={<>&laquo;Que no, que estoy <strong>tranquilísimo</strong>.&raquo;</>}
              lieContext="Aries · volumen: +20 %"
              verite={
                <>
                  <p>
                    <strong>Aries</strong> no está tranquilo. Aries hierve. Marte, su
                    planeta, convierte cada contrariedad en emergencia nacional —
                    pero admitir que se ha alterado es admitir que ha perdido el
                    control. Impensable.
                  </p>
                </>
              }
              reperage={
                <>
                  <p>
                    Cuanto más repite &laquo;estoy tranquilo&raquo;, menos lo está.
                    Bonus: la frase suele ir seguida de un portazo muy tranquilo.
                  </p>
                </>
              }
            />

            <LieSection
              id="tauro"
              title="♉ Tauro — «Ya voy, me estoy levantando.»"
              href="/signes/taureau"
              imageSrc="/images/zodiaque/taureau.webp"
              imageAlt="Símbolo astrológico de Tauro"
              element="terre"
              tagline="No se ha movido ni un centímetro"
              lie={<>&laquo;Sí sí, <strong>me estoy levantando</strong>, cinco minutos.&raquo;</>}
              lieContext="Tauro · sigue bajo la manta"
              verite={
                <>
                  <p>
                    <strong>Tauro</strong> no miente por malicia: miente por optimismo
                    sobre su propia inercia. Venus en Tierra adora el confort presente
                    — y &laquo;cinco minutos&raquo; es una unidad de tiempo venusina
                    que puede contener una película entera.
                  </p>
                </>
              }
              reperage={
                <>
                  <p>
                    Si añade &laquo;prometido&raquo;, suma una hora. Lo único que lo
                    levanta de verdad: el olor a comida.
                  </p>
                </>
              }
            />

            <LieSection
              id="geminis"
              title="♊ Géminis — «No se lo diré a nadie.»"
              href="/signes/gemeaux"
              imageSrc="/images/zodiaque/gemeaux.webp"
              imageAlt="Símbolo astrológico de Géminis"
              element="air"
              tagline="Ya está redactando el mensaje"
              lie={<>&laquo;Tranquilo, <strong>esto queda entre nosotros</strong>.&raquo;</>}
              lieContext="Géminis · 3 chats abiertos"
              verite={
                <>
                  <p>
                    <strong>Géminis</strong> es sincero… en el momento en que lo dice.
                    Pero Mercurio, planeta de la circulación de la información,
                    considera que una buena historia <em>debe</em> circular. No es
                    traición, es logística.
                  </p>
                </>
              }
              reperage={
                <>
                  <p>
                    Si la información es realmente jugosa, habrá dado la vuelta al
                    grupo antes de medianoche — con mejoras narrativas.
                  </p>
                </>
              }
            />

            <LieSection
              id="cancer"
              title="♋ Cáncer — «Estoy bien.»"
              href="/signes/cancer"
              imageSrc="/images/zodiaque/cancer.webp"
              imageAlt="Símbolo astrológico de Cáncer"
              element="eau"
              tagline="No está nada bien"
              lie={<>&laquo;Todo bien, <strong>estoy bien</strong> 🙂&raquo;</>}
              lieContext="Cáncer · al borde de las lágrimas"
              verite={
                <>
                  <p>
                    <strong>Cáncer</strong> no está bien, y espera en secreto que
                    insistas. Signo lunar, protege su vulnerabilidad tras un
                    caparazón — pero siempre deja asomar una pista, por si alguien lo
                    quiere lo suficiente como para indagar.
                  </p>
                </>
              }
              reperage={
                <>
                  <p>
                    El &laquo;🙂&raquo; es la señal de alarma. Un Cáncer que está bien
                    te cuenta su día; un Cáncer que &laquo;está bien&raquo; responde
                    en tres palabras.
                  </p>
                </>
              }
            />

            <LieSection
              id="leo"
              title="♌ Leo — «Me da igual lo que piensen de mí.»"
              href="/signes/lion"
              imageSrc="/images/zodiaque/lion.webp"
              imageAlt="Símbolo astrológico de Leo"
              element="feu"
              tagline="Mira sus notificaciones cada 4 minutos"
              lie={<>&laquo;Sinceramente, <strong>la opinión de la gente</strong> no me afecta.&raquo;</>}
              lieContext="Leo · acaba de releer sus comentarios"
              verite={
                <>
                  <p>
                    <strong>Leo</strong> es solar: <em>necesita</em> brillar y ser
                    visto. La indiferencia exhibida es una corona de repuesto —
                    porque admitir que una opinión le ha dolido es bajarse del
                    escenario.
                  </p>
                </>
              }
              reperage={
                <>
                  <p>
                    Recuerda palabra por palabra la crítica que recibió hace tres
                    años. Pero no le afecta, claro.
                  </p>
                </>
              }
            />

            <LieSection
              id="virgo"
              title="♍ Virgo — «Tranquilo, estoy soltando el control.»"
              href="/signes/vierge"
              imageSrc="/images/zodiaque/vierge.webp"
              imageAlt="Símbolo astrológico de Virgo"
              element="terre"
              tagline="Acaba de rehacer la lista por tercera vez"
              lie={<>&laquo;No no, <strong>estoy soltando</strong>, que sea lo que tenga que ser.&raquo;</>}
              lieContext="Virgo · tiene un plan B, C y D"
              verite={
                <>
                  <p>
                    <strong>Virgo</strong> nunca suelta el control: lo delega a su
                    cerebro del turno de noche. Mercurio en Tierra lo analiza todo,
                    todo el tiempo — el &laquo;soltar&raquo; es solo la versión
                    silenciosa de su control de calidad.
                  </p>
                </>
              }
              reperage={
                <>
                  <p>
                    Pregúntale &laquo;¿entonces improvisamos?&raquo; y mira su ojo
                    izquierdo. Tiembla.
                  </p>
                </>
              }
            />

            <LieSection
              id="libra"
              title="♎ Libra — «Me da igual, elige tú.»"
              href="/signes/balance"
              imageSrc="/images/zodiaque/balance.webp"
              imageAlt="Símbolo astrológico de Libra"
              element="air"
              tagline="Tiene una preferencia muy precisa"
              lie={<>&laquo;De verdad, <strong>me da igual</strong>, como tú quieras 🙂&raquo;</>}
              lieContext="Libra · odia la opción que vas a elegir"
              verite={
                <>
                  <p>
                    <strong>Libra</strong> tiene una preferencia. La tiene desde el
                    principio. Pero Venus en Aire pone la armonía por encima de todo:
                    imponer su elección podría crear una fricción, y la fricción es
                    su enemiga íntima.
                  </p>
                </>
              }
              reperage={
                <>
                  <p>
                    Elige &laquo;al azar&raquo; y observa el microsilencio. Si dura
                    más de dos segundos, elegiste la opción equivocada.
                  </p>
                </>
              }
            />

            <LieSection
              id="escorpio"
              title="♏ Escorpio — «Te perdoné.»"
              href="/signes/scorpion"
              imageSrc="/images/zodiaque/scorpion.webp"
              imageAlt="Símbolo astrológico de Escorpio"
              element="eau"
              tagline="Expediente archivado, nunca borrado"
              lie={<>&laquo;Está olvidado, <strong>te perdoné</strong>.&raquo;</>}
              lieContext="Escorpio · fecha, hora y testigos memorizados"
              verite={
                <>
                  <p>
                    <strong>Escorpio</strong> quizá haya perdonado. ¿Pero olvidado?
                    Jamás. Plutón archiva cada herida en un expediente fechado,
                    clasificado, consultable a la mínima reincidencia. El perdón es
                    real — lo eterno es el período de prueba.
                  </p>
                </>
              }
              reperage={
                <>
                  <p>
                    Seis meses después, en plena conversación: &laquo;¿como el 14 de
                    marzo, quieres decir?&raquo;. Ahí está.
                  </p>
                </>
              }
            />

            <LieSection
              id="sagitario"
              title="♐ Sagitario — «Ya voy, estoy a 10 minutos.»"
              href="/signes/sagittaire"
              imageSrc="/images/zodiaque/sagittaire.webp"
              imageAlt="Símbolo astrológico de Sagitario"
              element="feu"
              tagline="Sale de la ducha"
              lie={<>&laquo;¡<strong>Ya voy</strong>! 10 minutos como mucho.&raquo;</>}
              lieContext="Sagitario · pelo mojado, calcetines desparejados"
              verite={
                <>
                  <p>
                    <strong>Sagitario</strong> cree sinceramente estar a 10 minutos.
                    Júpiter lo dilata todo — el entusiasmo, los proyectos y, sobre
                    todo, su percepción del tiempo. En su cabeza, ya está contigo. Su
                    cuerpo aún busca las llaves.
                  </p>
                </>
              }
              reperage={
                <>
                  <p>
                    &laquo;10 minutos&raquo; = 40. &laquo;Salgo ahora&raquo; =
                    primero va a comer algo. Llévate un libro.
                  </p>
                </>
              }
            />

            <LieSection
              id="capricornio"
              title="♑ Capricornio — «El trabajo no es toda mi vida.»"
              href="/signes/capricorne"
              imageSrc="/images/zodiaque/capricorne.webp"
              imageAlt="Símbolo astrológico de Capricornio"
              element="terre"
              tagline="Responde un correo mientras lo dice"
              lie={<>&laquo;Sabes, <strong>el trabajo no es toda mi vida</strong>.&raquo;</>}
              lieContext="Capricornio · domingo, 22:47, portátil abierto"
              verite={
                <>
                  <p>
                    A <strong>Capricornio</strong> le gustaría que fuera verdad. Pero
                    Saturno mide el valor de un día por lo que ha construido — y el
                    descanso sin objetivo le produce urticaria. Sus vacaciones tienen
                    planificación. Su planificación tiene subsecciones.
                  </p>
                </>
              }
              reperage={
                <>
                  <p>
                    Pídele que te cuente su último fin de semana &laquo;sin hacer
                    nada&raquo;. Habrá una tabla comparativa.
                  </p>
                </>
              }
            />

            <LieSection
              id="acuario"
              title="♒ Acuario — «No me afecta.»"
              href="/signes/verseau"
              imageSrc="/images/zodiaque/verseau.webp"
              imageAlt="Símbolo astrológico de Acuario"
              element="air"
              tagline="Volverá a pensarlo a las 3 de la madrugada"
              lie={<>&laquo;Las emociones, todo eso… <strong>no me afecta</strong> tanto.&raquo;</>}
              lieContext="Acuario · en pleno análisis de eso que no le afecta"
              verite={
                <>
                  <p>
                    <strong>Acuario</strong> lo siente todo — pero en diferido, y por
                    vía intelectual. Urano prefiere transformar la emoción en
                    concepto: es más limpio, más manejable, menos… húmedo. El
                    desapego es su traje de protección.
                  </p>
                </>
              }
              reperage={
                <>
                  <p>
                    Tres días después te envía un artículo de psicología &laquo;sin
                    relación&raquo; con nada. Es su manera de decir que le tocó.
                  </p>
                </>
              }
            />

            <LieSection
              id="piscis"
              title="♓ Piscis — «Sí sí, te estaba escuchando.»"
              href="/signes/poissons"
              imageSrc="/images/zodiaque/poissons.webp"
              imageAlt="Símbolo astrológico de Piscis"
              element="eau"
              tagline="Estaba en otro planeta"
              lie={<>&laquo;¡Claro que <strong>te escuchaba</strong>! Decías que… eh…&raquo;</>}
              lieContext="Piscis · de vuelta de un viaje interior"
              verite={
                <>
                  <p>
                    <strong>Piscis</strong> te escuchaba… al principio. Luego una
                    palabra desencadenó una imagen, la imagen un recuerdo, el
                    recuerdo un mundo entero. Neptuno nunca corta del todo el
                    contacto con el océano interior — tu frase solo era la puerta de
                    embarque.
                  </p>
                </>
              }
              reperage={
                <>
                  <p>
                    La mirada difusa y el asentimiento a destiempo. Repite tu última
                    frase: la verdadera escucha empieza ahora.
                  </p>
                </>
              }
            />
          </div>
        </section>

        {/* SÍNTESIS POR ELEMENTO */}
        <section className="space-y-4" aria-labelledby="sintesis-elementos">
          <H2 id="sintesis-elementos">El resumen por elemento</H2>

          <p className="text-text/85 leading-relaxed">
            Detrás de las 12 mentiras, cuatro <strong>estrategias de
            protección</strong> — una por elemento.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-red-300/80">
                Fuego · Aries · Leo · Sagitario
              </p>
              <p className="mt-2 text-text/85 leading-relaxed">
                Mienten para proteger su <strong>imagen de fuerza</strong>:
                &laquo;estoy tranquilo&raquo;, &laquo;no me afecta&raquo;,
                &laquo;ya voy&raquo;. El Fuego nunca quiere parecer desbordado — ni
                por sus emociones ni por el reloj.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300/80">
                Tierra · Tauro · Virgo · Capricornio
              </p>
              <p className="mt-2 text-text/85 leading-relaxed">
                Mienten para proteger su <strong>ritmo y su control</strong>:
                &laquo;me estoy levantando&raquo;, &laquo;estoy soltando&raquo;,
                &laquo;el trabajo no es toda mi vida&raquo;. La Tierra promete el
                cambio… para quedarse exactamente donde está.
              </p>
            </div>
            <div className="rounded-2xl border border-sky-500/30 bg-sky-500/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-sky-300/80">
                Aire · Géminis · Libra · Acuario
              </p>
              <p className="mt-2 text-text/85 leading-relaxed">
                Mienten para proteger su <strong>ligereza</strong>: &laquo;queda
                entre nosotros&raquo;, &laquo;me da igual&raquo;, &laquo;no me
                afecta&raquo;. El Aire esquiva todo lo que podría volverlo pesado:
                el conflicto, el compromiso, la emoción en bruto.
              </p>
            </div>
            <div className="rounded-2xl border border-violet-500/30 bg-violet-500/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-violet-300/80">
                Agua · Cáncer · Escorpio · Piscis
              </p>
              <p className="mt-2 text-text/85 leading-relaxed">
                Mienten para proteger su <strong>vulnerabilidad</strong>:
                &laquo;estoy bien&raquo;, &laquo;te perdoné&raquo;, &laquo;te
                escuchaba&raquo;. El Agua no miente sobre los hechos — miente sobre
                la profundidad de lo que siente.
              </p>
            </div>
          </div>

          <p className="text-text/80 leading-relaxed">
            Como siempre, el signo solar es solo una parte de la historia: el
            <Link href="/blog/comprendre-signe-astrologique-ascendant-12-exemples" className="underline decoration-white/30 hover:decoration-white/60 transition"> ascendente</Link>,
            la <Link href="/blog/lunarien" className="underline decoration-white/30 hover:decoration-white/60 transition">Luna</Link> y
            <Link href="/blog/mercurien" className="underline decoration-white/30 hover:decoration-white/60 transition"> Mercurio</Link> afinan
            mucho la manera de decir — o de no decir — la verdad. Ahí está todo el
            interés de una
            <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline decoration-white/30 hover:decoration-white/60 transition"> carta natal</Link> completa.
          </p>
        </section>

        {/* MATIZ */}
        <section className="space-y-3" aria-labelledby="mentira-vs-manipulacion">
          <H2 id="mentira-vs-manipulacion">¿Pequeña mentira o verdadera manipulación?</H2>
          <p className="text-text/85 leading-relaxed">
            Las mentiras de este artículo son <strong>mentiras de
            protección</strong>: defienden una fragilidad, no un interés. La
            manipulación, en cambio, busca obtener algo del otro — un tema muy
            distinto, que tratamos en nuestro artículo sobre los
            <Link href="/blog/manipulateurs-pervers-narcissiques-astrologie" className="underline decoration-white/30 hover:decoration-white/60 transition"> manipuladores y narcisistas en astrología</Link>.
            Si las mentiras de alguien te cuestan más de lo que lo protegen, ya no
            es astrología divertida: es una señal.
          </p>
        </section>

        {/* CONCLUSIÓN */}
        <section className="space-y-3" aria-labelledby="conclusion">
          <H2 id="conclusion">Y tú, ¿cuál es tu mentira?</H2>
          <p className="text-text/85 leading-relaxed">
            Si has sonreído con incomodidad al leer tu signo, buena señal: tu Sol
            funciona a pleno rendimiento. Si nada te suena, mira tu ascendente o tu
            Luna — nuestros pequeños arreglos con la verdad suelen venir de ahí. Y
            si tu
            <Link href="/blog/pourquoi-votre-horoscope-ne-vous-ressemble-pas" className="underline decoration-white/30 hover:decoration-white/60 transition"> horóscopo no se parece nada a ti</Link>,
            también tenemos una explicación.
          </p>
          <p className="text-text/85 leading-relaxed">
            La próxima vez que alguien te diga &laquo;estoy tranquilo&raquo; con los
            dientes apretados, ya lo sabrás: no es una mentira. Es un Aries haciendo
            todo lo que puede.
          </p>
        </section>

        {/* FAQ */}
        <section className="space-y-6" aria-labelledby="faq-mentiras-signos">
          <H2 id="faq-mentiras-signos">Preguntas frecuentes</H2>

          <div className="space-y-4">
            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">
                ¿Cuál es el signo del zodíaco que más miente?
              </summary>
              <p className="text-text/85 leading-relaxed">
                Ningún signo miente &laquo;más&raquo; que los demás: cada uno miente
                <strong> de forma diferente</strong>. Géminis adorna, Piscis huye
                hacia lo difuso, Escorpio oculta, Libra arregla la verdad para
                preservar la armonía. La mentira de un signo refleja su fragilidad
                principal, no un defecto moral propio de ese signo.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">
                ¿Por qué cada signo tiene una mentira &laquo;favorita&raquo;?
              </summary>
              <p className="text-text/85 leading-relaxed">
                Porque la mentira más frecuente de una persona protege lo que más le
                importa: su <strong>imagen</strong> (Leo), su
                <strong> independencia</strong> (Acuario), su
                <strong> comodidad</strong> (Tauro) o su
                <strong> vulnerabilidad</strong> (Cáncer, Escorpio). En astrología,
                ese punto sensible corresponde a la naturaleza elemental del signo y
                a su planeta regente.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">
                ¿Se puede detectar una mentira gracias a la astrología?
              </summary>
              <p className="text-text/85 leading-relaxed">
                No — la astrología no es un detector de mentiras. En cambio, conocer
                el temperamento de un signo ayuda a comprender <strong>qué
                protege</strong> cuando miente: un &laquo;estoy bien&raquo; de Cáncer
                no significa lo mismo que un &laquo;estoy bien&raquo; de Capricornio.
                Es una clave de lectura, no una prueba.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">
                ¿Mentir a menudo está escrito en la carta natal?
              </summary>
              <p className="text-text/85 leading-relaxed">
                La <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline decoration-white/30 hover:decoration-white/60 transition">carta natal</Link> no
                condena a nadie a mentir. Algunas posiciones
                (<Link href="/blog/mercurien" className="underline decoration-white/30 hover:decoration-white/60 transition">Mercurio</Link> o
                <Link href="/blog/neptunien" className="underline decoration-white/30 hover:decoration-white/60 transition"> Neptuno</Link> en
                aspecto disonante) facilitan embellecer o esquivar, pero el uso que
                se hace de ellas sigue siendo una elección. Una carta muestra
                tendencias, nunca fatalidades.
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
