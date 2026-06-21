import type { ReactNode } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import { AUTHOR_PERSON, PUBLISHER_ORG, SITE_URL } from "@/lib/seo";

const ARTICLE_SLUG = "quel-type-de-sportif-selon-signe-astrologique";
const ARTICLE_URL = `${SITE_URL}/blog/${ARTICLE_SLUG}`;
const COVER_URL = `${SITE_URL}/images/blog/le-sporti-que-vous-etres-selon-votre-signe-astrologique.webp`;

export const meta = {
  slug: ARTICLE_SLUG,
  title: "¿Qué deporte según tu signo astrológico?",
  description:
    "¿Qué deporte elegir según tu signo astrológico? Análisis serio de los 12 signos: relación con el esfuerzo, espíritu competitivo, resistencia y deportes ideales.",
  date: "2026-02-18",
  tags: ["sport", "signe", "psychologie astrologique", "astrologie"],
  readingLevel: "débutant" as const,
  cover: "/images/blog/le-sporti-que-vous-etres-selon-votre-signe-astrologique.webp",
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
        alt: "¿Qué tipo de deportista eres según tu signo astrológico?",
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
      hoverBorder: "group-hover:border-red-400/50",
      iconWrap: "border-red-500/25 bg-red-500/10",
      glow: "from-red-500/10 to-transparent",
      titleHover: "group-hover:text-red-200",
      linkText: "group-hover:text-red-100",
      subtitle: "text-red-200/80",
    };
  }

  if (element === "terre") {
    return {
      border: "border-emerald-500/30",
      hoverBorder: "group-hover:border-emerald-400/50",
      iconWrap: "border-emerald-500/25 bg-emerald-500/10",
      glow: "from-emerald-500/10 to-transparent",
      titleHover: "group-hover:text-emerald-200",
      linkText: "group-hover:text-emerald-100",
      subtitle: "text-emerald-200/80",
    };
  }

  if (element === "air") {
    return {
      border: "border-sky-500/30",
      hoverBorder: "group-hover:border-sky-400/50",
      iconWrap: "border-sky-500/25 bg-sky-500/10",
      glow: "from-sky-500/10 to-transparent",
      titleHover: "group-hover:text-sky-200",
      linkText: "group-hover:text-sky-100",
      subtitle: "text-sky-200/80",
    };
  }

  return {
    border: "border-violet-500/30",
    hoverBorder: "group-hover:border-violet-400/50",
    iconWrap: "border-violet-500/25 bg-violet-500/10",
    glow: "from-violet-500/10 to-transparent",
    titleHover: "group-hover:text-violet-200",
    linkText: "group-hover:text-violet-100",
    subtitle: "text-violet-200/80",
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

function SignSportCard({
  title,
  href,
  imageSrc,
  imageAlt,
  subtitle,
  element,
  children,
}: {
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  subtitle: string;
  element: ZodiacElement;
  children: ReactNode;
}) {
  const titleId = `sport-card-${title.toLowerCase()}`;
  const styles = getElementCardStyles(element);

  return (
    <article aria-labelledby={titleId} className="h-full">
      <Link
        href={href}
        aria-labelledby={titleId}
        aria-describedby={`${titleId}-desc`}
        className={[
          "group relative block h-full overflow-hidden rounded-2xl border bg-black/20 p-6 shadow-soft transition",
          "hover:bg-white/[0.04] focus:outline-none focus-visible:ring-2",
          "focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
          styles.border,
          styles.hoverBorder,
        ].join(" ")}
      >
        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${styles.glow} opacity-0 transition duration-300 group-hover:opacity-100`}
          aria-hidden="true"
        />

        <div className="relative flex items-start gap-4">
          <div
            className={`relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border ${styles.iconWrap}`}
            aria-hidden="true"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={64}
              height={64}
              className="h-auto w-auto object-contain opacity-95 transition group-hover:scale-[1.03]"
              sizes="64px"
            />
          </div>

          <div className="min-w-0 flex-1">
            <h3
              id={titleId}
              className={[
                "text-lg md:text-xl font-semibold tracking-tight leading-tight text-text transition",
                styles.titleHover,
              ].join(" ")}
            >
              {title}
            </h3>
            <p className={`mt-1 text-sm ${styles.subtitle}`}>{subtitle}</p>
          </div>
        </div>

        <div
          id={`${titleId}-desc`}
          className="relative mt-5 space-y-3 text-text/85 leading-relaxed"
        >
          {children}
        </div>

        <div className="relative mt-5 flex items-center justify-end">
          <span className={["text-sm text-text/70 transition", styles.linkText].join(" ")}>
            Leer la ficha del signo →
          </span>
        </div>
      </Link>
    </article>
  );
}

export default function Post() {
  const glow = getGlowFromTags(meta.tags);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: meta.title,
        description: meta.description,
        image: COVER_URL,
        datePublished: `${meta.date}T12:00:00Z`,
        dateModified: `${meta.date}T12:00:00Z`,
        url: ARTICLE_URL,
        inLanguage: "es",
        mainEntityOfPage: { "@type": "WebPage", "@id": ARTICLE_URL },
        author: AUTHOR_PERSON,
        publisher: PUBLISHER_ORG,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: meta.title, item: ARTICLE_URL },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Qué deporte elegir según tu signo astrológico?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Cada signo tiene una relación diferente con el esfuerzo. Los signos de fuego (Aries, Leo, Sagitario) prefieren la intensidad y la competición. Los signos de tierra (Tauro, Virgo, Capricornio) destacan en resistencia. Los signos de aire (Géminis, Libra, Acuario) disfrutan de los deportes técnicos. Los signos de agua (Cáncer, Escorpio, Piscis) buscan la sensación.",
            },
          },
          {
            "@type": "Question",
            name: "¿El signo astrológico determina el rendimiento deportivo?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No, el signo no determina el rendimiento. Ilumina una manera de habitar el esfuerzo: competición, resistencia, técnica o búsqueda de armonía. La carta natal completa (Marte, ascendente, casas) da una visión más precisa.",
            },
          },
          {
            "@type": "Question",
            name: "¿Qué planeta influye en el deporte en astrología?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Marte es el planeta principal del deporte y del esfuerzo físico. Describe cómo pasamos a la acción, la manera en que nos gastamos y el tipo de energía que movilizamos. El signo solar completa esta lectura.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-10">
        <header
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-7 shadow-soft"
        >
          <div
            className={`pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl ${glow}`}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative">
            <p className="text-sm text-text/65">Astrología y personalidad</p>



            <p className="mt-4 max-w-2xl text-text/80 leading-relaxed">
              <strong>¿Qué deporte según tu signo astrológico?</strong> Cada
              signo tiene una relación diferente con el esfuerzo, la competición y el
              placer del movimiento. En tu{" "}
              <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline decoration-white/30 hover:decoration-white/60 transition">carta natal</Link>,
              es sobre todo{" "}
              <Link href="/blog/mars-en-signes-desir-libido-action" className="underline decoration-white/30 hover:decoration-white/60 transition">Marte</Link>{" "}
              quien describe tu manera de gastar energía.
            </p>

            <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
              ¿El problema? Muchas veces te dicen «Aries = boxeo» o «Piscis =
              yoga» sin matices. Resultado: no te reconoces y te pierdes
              una práctica que de verdad te correspondería.
            </p>

            <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
              Aquí, un análisis serio de los 12 perfiles deportivos: relación con el esfuerzo,
              motivación, resistencia, tipo de disciplina ideal — sin clichés.
            </p>

            <div className="mt-5 flex flex-wrap gap-2" aria-label="Resumen del artículo">
              <Pill tone="violet">Deporte y energía</Pill>
              <Pill tone="orange">Temperamento</Pill>
              <Pill tone="emerald">Motivación</Pill>
              <Pill tone="sky">Psicología</Pill>
            </div>

            <div className="mt-4" aria-label="Palabras clave del artículo">
              <TagPillsInline tags={meta.tags} />
            </div>
          </div>
        </header>

        {/* ── Definición (Featured Snippet) ── */}
        <section className="rounded-2xl border border-emerald-400/25 bg-emerald-400/5 p-5 sm:p-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400 mb-3">Definici&oacute;n</p>
          <p className="text-sm leading-relaxed text-text/80 md:text-base">
            El <strong>deporte y la astrolog&iacute;a</strong> est&aacute;n ligados por los elementos (fuego, tierra, aire, agua), la posici&oacute;n de <Link href="/planetes/mars" className="text-emerald-300 underline decoration-emerald-300/30 underline-offset-2 transition-colors hover:text-emerald-200">Marte</Link> y el signo solar. Cada signo del zodiaco posee aptitudes f&iacute;sicas y un temperamento deportivo distintos que orientan de forma natural hacia ciertas disciplinas.
          </p>
        </section>

        {/* ── APP intro ── */}
        <p className="text-text/85 leading-relaxed">
          ¿Qué <strong>deporte practicar según tu signo astrológico</strong>? Más allá del simple entretenimiento, tu signo revela aptitudes físicas y un temperamento deportivo que te predisponen a ciertas disciplinas. Descubre el perfil deportivo de los 12 signos del zodiaco, con recomendaciones concretas y puntos fuertes.
        </p>

        <section className="space-y-4" aria-labelledby="sport-et-astrologie">
          <H2 id="sport-et-astrologie">Deporte y astrología: una lógica de energía</H2>

          <p className="text-text/85 leading-relaxed">
            El deporte no se vive de la misma manera para todo el mundo.
            A algunas personas les gusta la competición frontal, a otras el dominio técnico,
            la duración, la exploración o la fluidez.
          </p>

          <p className="text-text/85 leading-relaxed">
            El signo solar no basta para resumir una carta natal (el <Link href="/blog/comprendre-signe-astrologique-ascendant-12-exemples" className="underline decoration-white/30 hover:decoration-white/60 transition">ascendente</Link> y los{" "}
            <Link href="/aspects" className="underline decoration-white/30 hover:decoration-white/60 transition">aspectos</Link> también cuentan), pero ya da
            una indicación interesante sobre el estilo general con el que una persona
            aborda el esfuerzo y el movimiento.
          </p>
        </section>

        <section className="space-y-6" aria-labelledby="les-12-profils">
          <H2 id="les-12-profils">Los 12 perfiles deportivos según los signos</H2>

          <div className="grid gap-6 lg:grid-cols-2">
            <SignSportCard
              title="Bélier"
              href="/signes/belier"
              imageSrc="/images/zodiaque/belier.webp"
              imageAlt="Símbolo astrológico de Aries"
              subtitle="El competidor instintivo"
              element="feu"
            >
              <p>
                Aries ama la acción inmediata, los desafíos y la intensidad del presente.
                Suele tener una relación espontánea con el deporte: moverse, medirse,
                ganar terreno.
              </p>
              <p>
                Las disciplinas rápidas y competitivas le convienen especialmente:
                artes marciales, sprint, boxeo, cross-training o deportes de equipo intensos.
              </p>
              <p>
                Su principal desafío es canalizar su impulso para no confundir
                rendimiento con precipitación.
              </p>
            </SignSportCard>

            <SignSportCard
              title="Taureau"
              href="/signes/taureau"
              imageSrc="/images/zodiaque/taureau.webp"
              imageAlt="Símbolo astrológico de Tauro"
              subtitle="El deportista de resistencia"
              element="terre"
            >
              <p>
                Tauro avanza menos por la explosión que por la continuidad.
                Puede tardar en arrancar, pero aguanta.
              </p>
              <p>
                Aprecia las disciplinas regulares, concretas, encarnadas:
                senderismo, natación, ciclismo, fortalecimiento muscular, prácticas de duración.
              </p>
              <p>
                Su reto no es tanto la superación brutal como la perseverancia
                y la calidad del ritmo.
              </p>
            </SignSportCard>

            <SignSportCard
              title="Gémeaux"
              href="/signes/gemeaux"
              imageSrc="/images/zodiaque/gemeaux.webp"
              imageAlt="Símbolo astrológico de Géminis"
              subtitle="El deportista ágil"
              element="air"
            >
              <p>
                A Géminis le gustan las actividades que estimulan a la vez el cuerpo
                y la mente. Su energía pasa por el movimiento, la coordinación,
                la rapidez de respuesta.
              </p>
              <p>
                Suele sentirse cómodo en los deportes técnicos, lúdicos
                o móviles: tenis, bádminton, escalada, disciplinas variadas.
              </p>
              <p>
                El desafío es evitar la dispersión y mantener suficiente regularidad
                para progresar de verdad.
              </p>
            </SignSportCard>

            <SignSportCard
              title="Cancer"
              href="/signes/cancer"
              imageSrc="/images/zodiaque/cancer.webp"
              imageAlt="Símbolo astrológico de Cáncer"
              subtitle="El deportista emocional"
              element="eau"
            >
              <p>
                Cáncer rara vez practica una actividad física solo por el rendimiento.
                Necesita sentir un vínculo con el cuerpo, el bienestar o la seguridad interior.
              </p>
              <p>
                Los deportes ligados al agua, a la respiración o al recentramiento suelen convenirle:
                natación, aquagym, marcha, yoga, prácticas de suavidad activa.
              </p>
              <p>
                Su motivación aumenta cuando el deporte se convierte en una manera de cuidarse.
              </p>
            </SignSportCard>

            <SignSportCard
              title="Lion"
              href="/signes/lion"
              imageSrc="/images/zodiaque/lion.webp"
              imageAlt="Símbolo astrológico de Leo"
              subtitle="El deportista espectacular"
              element="feu"
            >
              <p>
                A Leo le gusta expresar su potencia y sentir que brilla a través de su cuerpo.
                Suele necesitar un deporte que le permita superarse con estilo.
              </p>
              <p>
                Danza, atletismo, deportes de equipo, disciplinas de escena o prácticas
                visibles le corresponden bien.
              </p>
              <p>
                Su desafío es aprender que el progreso cuenta tanto como el reconocimiento.
              </p>
            </SignSportCard>

            <SignSportCard
              title="Vierge"
              href="/signes/vierge"
              imageSrc="/images/zodiaque/vierge.webp"
              imageAlt="Símbolo astrológico de Virgo"
              subtitle="El deportista metódico"
              element="terre"
            >
              <p>
                A Virgo le gusta comprender los gestos, mejorar la técnica,
                afinar la eficacia. Suele abordar el deporte con seriedad.
              </p>
              <p>
                Pilates, fitness, deportes técnicos, rutinas de progresión
                y disciplinas de precisión le convienen especialmente.
              </p>
              <p>
                El riesgo es transformar la actividad física en una exigencia excesiva
                o en una autoevaluación permanente.
              </p>
            </SignSportCard>

            <SignSportCard
              title="Balance"
              href="/signes/balance"
              imageSrc="/images/zodiaque/balance.webp"
              imageAlt="Símbolo astrológico de Libra"
              subtitle="El deportista estético"
              element="air"
            >
              <p>
                Libra busca la armonía, el equilibrio y la belleza del movimiento.
                Suele sentirse atraída por las disciplinas donde el gesto cuenta tanto como el esfuerzo.
              </p>
              <p>
                Danza, yoga, patinaje, deportes artísticos o prácticas ligadas a la alineación
                le convienen bien.
              </p>
              <p>
                Su principal motor no es la brutalidad del rendimiento,
                sino la calidad de la forma.
              </p>
            </SignSportCard>

            <SignSportCard
              title="Scorpion"
              href="/signes/scorpion"
              imageSrc="/images/zodiaque/scorpion.webp"
              imageAlt="Símbolo astrológico de Escorpio"
              subtitle="El deportista intenso"
              element="eau"
            >
              <p>
                Escorpio posee una energía profunda, a menudo más potente
                de lo que aparenta. Soporta bien la intensidad y la superación.
              </p>
              <p>
                Deportes de combate, entrenamientos exigentes, esfuerzo intenso,
                prácticas extremas o transformación física le hablan más.
              </p>
              <p>
                Su desafío es no usar el deporte únicamente como descarga,
                sino también como disciplina de dominio.
              </p>
            </SignSportCard>

            <SignSportCard
              title="Sagittaire"
              href="/signes/sagittaire"
              imageSrc="/images/zodiaque/sagittaire.webp"
              imageAlt="Símbolo astrológico de Sagitario"
              subtitle="El deportista explorador"
              element="feu"
            >
              <p>
                Sagitario relaciona de forma natural deporte, libertad y espacio.
                Le gusta moverse al aire libre, sentirse vivo, explorar.
              </p>
              <p>
                Senderismo, esquí, equitación, trail, deportes de aventura o actividades al aire libre
                le corresponden muy bien.
              </p>
              <p>
                Necesita sentido y horizonte: el esfuerzo puro sin apertura le aburre rápido.
              </p>
            </SignSportCard>

            <SignSportCard
              title="Capricorne"
              href="/signes/capricorne"
              imageSrc="/images/zodiaque/capricorne.webp"
              imageAlt="Símbolo astrológico de Capricornio"
              subtitle="El deportista disciplinado"
              element="terre"
            >
              <p>
                Capricornio comprende instintivamente que el progreso requiere tiempo.
                Puede destacar en los deportes que recompensan la constancia.
              </p>
              <p>
                Musculación, resistencia, alpinismo, entrenamiento estructurado,
                trabajo progresivo y objetivos medibles le convienen bien.
              </p>
              <p>
                Su trampa es ser demasiado duro consigo mismo o reducir el deporte al rendimiento.
              </p>
            </SignSportCard>

            <SignSportCard
              title="Verseau"
              href="/signes/verseau"
              imageSrc="/images/zodiaque/verseau.webp"
              imageAlt="Símbolo astrológico de Acuario"
              subtitle="El deportista original"
              element="air"
            >
              <p>
                A Acuario no siempre le gustan los marcos deportivos clásicos.
                Suele preferir prácticas alternativas, originales o más libres.
              </p>
              <p>
                Deportes de deslizamiento, deportes urbanos, nuevas disciplinas, prácticas colectivas atípicas
                o formatos innovadores le atraen más.
              </p>
              <p>
                Necesita sentirse libre en su relación con el movimiento.
              </p>
            </SignSportCard>

            <SignSportCard
              title="Poissons"
              href="/signes/poissons"
              imageSrc="/images/zodiaque/poissons.webp"
              imageAlt="Símbolo astrológico de Piscis"
              subtitle="El deportista intuitivo"
              element="eau"
            >
              <p>
                Piscis suele vivir el deporte como una experiencia de sensación.
                Necesita una práctica que conecte cuerpo, respiración, emoción o imaginación.
              </p>
              <p>
                Natación, danza, yoga, prácticas fluidas, actividades ligadas al agua
                o a la relajación suelen corresponderle.
              </p>
              <p>
                El desafío es mantener un marco lo bastante estable para que la motivación no se disuelva.
              </p>
            </SignSportCard>
          </div>
        </section>

        <section className="space-y-4" aria-labelledby="conclusion-article">
          <H2 id="conclusion-article">Conclusión</H2>

          <p className="text-text/85 leading-relaxed">
            El signo astrológico no determina un único deporte,
            pero ilumina una manera de habitar el esfuerzo:
            competición, resistencia, técnica, exploración o búsqueda de armonía.
            Para una lectura más completa, mira también la posición de tu{" "}
            <Link href="/maisons/maison-1" className="underline decoration-white/30 hover:decoration-white/60 transition">casa 1</Link>{" "}
            (relación con el cuerpo) y tus{" "}
            <Link href="/transits" className="underline decoration-white/30 hover:decoration-white/60 transition">tránsitos</Link>{" "}
            actuales.
          </p>

          <p className="text-text/85 leading-relaxed">
            Comprender esta dinámica permite a menudo elegir una práctica
            más natural, más motivadora y más duradera. Descubre también las{" "}
            <Link href="/blog/qualites-defauts-12-signes-zodiaque" className="underline decoration-white/30 hover:decoration-white/60 transition">cualidades y defectos de los 12 signos</Link>{" "}
            o el{" "}
            <Link href="/dictionnaire-astrologique" className="underline decoration-white/30 hover:decoration-white/60 transition">diccionario astrológico</Link>{" "}
            para profundizar.
          </p>
        </section>

        {/* ── FAQ ── */}
        <section className="space-y-4" aria-labelledby="faq-sport-astrologie">
          <h2 id="faq-sport-astrologie" className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
            Preguntas frecuentes: deporte y astrolog&iacute;a
          </h2>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-6 space-y-5">
            <div>
              <p className="font-semibold text-text/90">¿Qué signo es el más deportista?</p>
              <p className="mt-2 text-text/80 leading-relaxed">
                Aries y Sagitario (signos de fuego, regidos o estimulados por <Link href="/planetes/mars" className="underline decoration-white/30 hover:decoration-white/60 transition">Marte</Link>) suelen ser los más competitivos y los más atraídos por el deporte. Pero cada signo tiene sus propias fortalezas: resistencia para la tierra, técnica para el aire, fluidez para el agua.
              </p>
            </div>

            <div>
              <p className="font-semibold text-text/90">¿Marte influye en las capacidades deportivas?</p>
              <p className="mt-2 text-text/80 leading-relaxed">
                Sí, Marte en signo y en casa indica el tipo de energía física que movilizas. Un Marte en Aries será explosivo, un Marte en Tauro resistente, un Marte en Géminis polivalente.
              </p>
            </div>

            <div>
              <p className="font-semibold text-text/90">¿Se puede llegar a ser bueno en un deporte contrario al propio signo?</p>
              <p className="mt-2 text-text/80 leading-relaxed">
                Sí, el ascendente, la posición de Marte y la voluntad personal también cuentan. El signo solar da una tendencia natural, pero no determina un límite.
              </p>
            </div>

            <div>
              <p className="font-semibold text-text/90">¿Qué elemento tiene más resistencia?</p>
              <p className="mt-2 text-text/80 leading-relaxed">
                La tierra (Tauro, Virgo, Capricornio) destaca en resistencia y aguante. Estos signos aguantan en el tiempo y se recuperan bien gracias a su regularidad natural.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-black/20 p-6">
          <p className="text-sm text-text/60">Continúa tu lectura</p>
          <div className="mt-3 space-y-2 text-text/85">
            <p>
              Explora{" "}
              <Link href="/blog/venus-en-signes-style-amoureux" className="underline decoration-white/30 hover:decoration-white/60 transition font-semibold text-text/95">Venus en los signos</Link>{" "}
              para comprender tu estilo amoroso, o{" "}
              <Link href="/blog/amour-fidelite-signes-zodiaque" className="underline decoration-white/30 hover:decoration-white/60 transition font-semibold text-text/95">amor y fidelidad según los signos</Link>.
            </p>
          </div>
          <div className="mt-4">
            <Link
              href="/blog"
              className="inline-flex rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-text/90 transition hover:bg-white/10"
            >
              ← Todos los artículos
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
