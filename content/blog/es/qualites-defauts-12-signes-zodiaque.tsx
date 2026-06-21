import type { ReactNode } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import { AUTHOR_PERSON, PUBLISHER_ORG } from "@/lib/seo";

const SITE_URL = "https://www.astro-cours.com";
const ARTICLE_URL = `${SITE_URL}/blog/qualites-defauts-12-signes-zodiaque`;
const COVER_URL = `${SITE_URL}/images/blog/sun-moon.webp`;

export const meta = {
  slug: "qualites-defauts-12-signes-zodiaque",
  title: "Virtudes y defectos de los 12 signos del zodiaco",
  // ✅ Ahrefs SERP rewrite — Google usa un guion simple " - Astro Cours".
  seoTitle: "Virtudes y defectos de los 12 signos del zodiaco - Astro Cours",
  description:
    "Estudio serio, matizado y pedagógico de los 12 signos del zodiaco: virtudes, defectos, posibles excesos, dinámica psicológica y pistas de evolución.",
  date: "2026-03-11",
  tags: ["bases", "signe", "psychologie astrologique", "astrologie"],
  readingLevel: "débutant" as const,
  cover: "/images/blog/qualite-et-defaut-de-chaque-signe-du-zodiaque.webp",
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
        url: `${SITE_URL}/images/blog/sun-moon.webp`,
        width: 1200,
        height: 630,
        alt: "Ilustración de las virtudes y defectos de los 12 signos del zodiaco",
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
    };
  }

  return {
    border: "border-violet-500/30",
    hoverBorder: "group-hover:border-violet-400/50",
    iconWrap: "border-violet-500/25 bg-violet-500/10",
    glow: "from-violet-500/10 to-transparent",
    titleHover: "group-hover:text-violet-200",
    linkText: "group-hover:text-violet-100",
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

function Card({
  title,
  href,
  imageSrc,
  imageAlt,
  element,
  children,
}: {
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  element: ZodiacElement;
  children: ReactNode;
}) {
  const cardTitleId = `card-title-${title.toLowerCase()}`;
  const styles = getElementCardStyles(element);

  return (
    <article aria-labelledby={cardTitleId} className="h-full">
      <Link
        href={href}
        aria-labelledby={cardTitleId}
        aria-describedby={`${cardTitleId}-desc`}
        className={[
          "group relative block h-full overflow-hidden rounded-2xl border bg-black/20 p-6 shadow-soft transition",
          "hover:bg-white/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
          styles.border,
          styles.hoverBorder,
        ].join(" ")}
      >
        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${styles.glow} opacity-0 transition duration-300 group-hover:opacity-100`}
          aria-hidden="true"
        />

        <div className="relative flex justify-between">

          <h3
            id={cardTitleId}
            className={[
              "mt-4 text-lg md:text-xl font-semibold tracking-tight leading-tight text-text transition",
              styles.titleHover,
            ].join(" ")}
          >
            {title}
          </h3>
          <div
            className={`relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border ${styles.iconWrap}`}
            aria-hidden="true"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={72}
              height={72}
              className="h-auto w-auto object-contain opacity-95 transition group-hover:scale-[1.03]"
              sizes="72px"
            />
          </div>

        </div>

        <div
          id={`${cardTitleId}-desc`}
          className="relative mt-4 space-y-3 text-text/85 leading-relaxed"
        >
          {children}
        </div>

        <div className="relative mt-5 flex items-center justify-end">
          <span className={["text-sm text-text/70 transition", styles.linkText].join(" ")}>
            Leer la ficha del signo
          </span>
        </div>
      </Link>
    </article>
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

      <article className="space-y-10" >
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
            <p className="text-sm text-text/65">Astrología fundamental</p>



            <p className="mt-4 max-w-2xl text-text/80 leading-relaxed">
              Cada signo del zodiaco representa una manera particular
              de relacionarse con el mundo. Estas dinámicas poseen
              siempre dos caras:
              <strong> una fuerza constructiva</strong> y
              <strong> un posible exceso</strong>.
            </p>

            <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
              Comprender estas polaridades permite salir de las caricaturas
              y abordar los signos astrológicos como verdaderas
              <strong> estructuras psicológicas</strong>.
            </p>

            <div
              className="mt-5 flex flex-wrap gap-2"
              aria-label="Resumen de los temas del artículo"
            >
              <Pill tone="violet">12 arquetipos</Pill>
              <Pill tone="orange">Fortalezas</Pill>
              <Pill tone="emerald">Posibles excesos</Pill>
              <Pill tone="sky">Lectura psicológica</Pill>
            </div>

            <div className="mt-4" aria-label="Palabras clave del artículo">
              <TagPillsInline tags={meta.tags} />
            </div>
          </div>
        </header>

        {/* DEFINITION BOX — Featured Snippet */}
        <div className="rounded-2xl border border-violet-400/20 bg-violet-400/[0.04] px-6 py-5">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-300/80">Definición</p>
          <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
            Las <strong>virtudes y defectos de los signos del zodiaco</strong> corresponden a los rasgos psicológicos asociados a cada signo solar en astrología. Cada uno de los 12 signos posee fortalezas naturales y zonas de sombra que tiñen la personalidad, las relaciones y las decisiones de vida.
          </p>
        </div>

        {/* APP INTRO */}
        <p className="text-lg leading-relaxed text-text/85">
          Conoces tu <strong>signo astrológico</strong>, pero ¿sabes realmente cuáles son sus puntos fuertes y sus debilidades? Más allá de los clichés, cada signo del zodiaco posee un cóctel único de <strong>virtudes y defectos</strong> que moldea su personalidad profunda. Esta guía repasa los 12 signos con lucidez: fortalezas, fallas y pistas de evolución.
        </p>

        <section className="space-y-4" aria-labelledby="comprendre-dualite">
          <H2 id="comprendre-dualite">Comprender la dualidad de los signos</H2>

          <p className="text-text/85 leading-relaxed">
            Ningún signo astrológico es &ldquo;bueno&rdquo; ni &ldquo;malo&rdquo;.
            Cada signo representa una función de la vida.
            Cuando está equilibrada, se convierte en una virtud.
            Cuando se lleva al exceso o se integra mal,
            puede transformarse en un defecto.
          </p>

          <p className="text-text/85 leading-relaxed">
            La astrología tradicional habla a menudo de
            <strong> virtudes y vicios</strong>, no para juzgar a la persona,
            sino para mostrar cómo una misma energía puede evolucionar hacia su
            forma constructiva o hacia su caricatura.
          </p>
        </section>

        <section className="space-y-6" aria-labelledby="les-12-signes">
          <H2 id="les-12-signes">Virtudes y defectos de los 12 signos</H2>

          <div
            className="grid gap-6 lg:grid-cols-2"
            role="list"
            aria-label="Lista de los 12 signos del zodiaco"
          >
            <Card
              title="Aries"
              href="/signes/belier"
              imageSrc="/images/zodiaque/belier.webp"
              imageAlt="Símbolo astrológico de Aries"
              element="feu"
            >
              <p>
                <strong>Virtudes:</strong> valor, iniciativa, espontaneidad,
                capacidad de acción rápida.
              </p>
              <p>
                Aries representa el impulso inicial. Aporta la energía de
                empezar, de lanzarse, de tomar decisiones cuando los
                demás dudan.
              </p>
              <p>
                <strong>Posibles defectos:</strong> impulsividad, impaciencia,
                reacciones demasiado rápidas.
              </p>
              <p>
                Cuando la energía de Aries no se domina, la acción puede
                volverse precipitación o conflicto inútil.
              </p>
            </Card>

            <Card
              title="Tauro"
              href="/signes/taureau"
              imageSrc="/images/zodiaque/taureau.webp"
              imageAlt="Símbolo astrológico de Tauro"
              element="terre"
            >
              <p>
                <strong>Virtudes:</strong> estabilidad, constancia, resistencia,
                sentido de lo concreto.
              </p>
              <p>
                Tauro representa la capacidad de construir a largo plazo,
                de preservar y de dar solidez a las cosas.
              </p>
              <p>
                <strong>Posibles defectos:</strong> rigidez, inercia,
                apego excesivo.
              </p>
              <p>
                Cuando la estabilidad se vuelve fijación, la persona puede resistirse
                al cambio incluso cuando se hace necesario.
              </p>
            </Card>

            <Card
              title="Géminis"
              href="/signes/gemeaux"
              imageSrc="/images/zodiaque/gemeaux.webp"
              imageAlt="Símbolo astrológico de Géminis"
              element="air"
            >
              <p>
                <strong>Virtudes:</strong> inteligencia viva, curiosidad,
                adaptabilidad, comunicación.
              </p>
              <p>
                Géminis simboliza la mente en movimiento, capaz de observar,
                de relacionar y de comprender con rapidez.
              </p>
              <p>
                <strong>Posibles defectos:</strong> dispersión, superficialidad,
                agitación mental.
              </p>
              <p>
                El exceso de movimiento puede impedir la profundización.
              </p>
            </Card>

            <Card
              title="Cáncer"
              href="/signes/cancer"
              imageSrc="/images/zodiaque/cancer.webp"
              imageAlt="Símbolo astrológico de Cáncer"
              element="eau"
            >
              <p>
                <strong>Virtudes:</strong> sensibilidad, intuición, protección,
                apego.
              </p>
              <p>
                Cáncer representa el hogar emocional, la memoria y la capacidad
                de nutrir los vínculos.
              </p>
              <p>
                <strong>Posibles defectos:</strong> susceptibilidad, repliegue,
                dependencia afectiva.
              </p>
              <p>
                Cuando la seguridad se vuelve miedo al mundo, la emoción puede conducir
                al retiro.
              </p>
            </Card>

            <Card
              title="Leo"
              href="/signes/lion"
              imageSrc="/images/zodiaque/lion.webp"
              imageAlt="Símbolo astrológico de Leo"
              element="feu"
            >
              <p>
                <strong>Virtudes:</strong> generosidad, creatividad, liderazgo,
                irradiación.
              </p>
              <p>
                Leo representa la expresión de la individualidad y la capacidad
                de inspirar a los demás.
              </p>
              <p>
                <strong>Posibles defectos:</strong> orgullo, necesidad excesiva
                de atención.
              </p>
              <p>
                Cuando la necesidad de reconocimiento domina, la creatividad puede
                transformarse en una búsqueda de validación.
              </p>
            </Card>

            <Card
              title="Virgo"
              href="/signes/vierge"
              imageSrc="/images/zodiaque/vierge.webp"
              imageAlt="Símbolo astrológico de Virgo"
              element="terre"
            >
              <p>
                <strong>Virtudes:</strong> análisis, precisión, sentido del detalle,
                eficacia.
              </p>
              <p>
                Virgo representa la inteligencia práctica que mejora y
                organiza el mundo concreto.
              </p>
              <p>
                <strong>Posibles defectos:</strong> crítica excesiva, ansiedad,
                perfeccionismo.
              </p>
              <p>
                La búsqueda de precisión puede convertirse en una dificultad para aceptar
                la imperfección.
              </p>
            </Card>

            <Card
              title="Libra"
              href="/signes/balance"
              imageSrc="/images/zodiaque/balance.webp"
              imageAlt="Símbolo astrológico de Libra"
              element="air"
            >
              <p>
                <strong>Virtudes:</strong> diplomacia, sentido de la justicia,
                armonía relacional.
              </p>
              <p>
                Libra simboliza la conciencia del otro y la búsqueda
                de equilibrio en las relaciones.
              </p>
              <p>
                <strong>Posibles defectos:</strong> indecisión, dependencia de
                la mirada ajena.
              </p>
              <p>
                El exceso de búsqueda de armonía puede llevar a evitar los conflictos
                necesarios.
              </p>
            </Card>

            <Card
              title="Escorpio"
              href="/signes/scorpion"
              imageSrc="/images/zodiaque/scorpion.webp"
              imageAlt="Símbolo astrológico de Escorpio"
              element="eau"
            >
              <p>
                <strong>Virtudes:</strong> lucidez, profundidad psicológica,
                fuerza de transformación.
              </p>
              <p>
                Escorpio representa la capacidad de atravesar las crisis y de
                acceder a lo que está oculto.
              </p>
              <p>
                <strong>Posibles defectos:</strong> desconfianza, control,
                intensidad excesiva.
              </p>
              <p>
                Cuando la intensidad se vuelve obsesión, puede conducir a
                relaciones conflictivas.
              </p>
            </Card>

            <Card
              title="Sagitario"
              href="/signes/sagittaire"
              imageSrc="/images/zodiaque/sagittaire.webp"
              imageAlt="Símbolo astrológico de Sagitario"
              element="feu"
            >
              <p>
                <strong>Virtudes:</strong> optimismo, visión amplia, espíritu
                de aventura.
              </p>
              <p>
                Sagitario simboliza la expansión de la conciencia, la búsqueda
                de sentido y la exploración del mundo.
              </p>
              <p>
                <strong>Posibles defectos:</strong> exceso, impaciencia, tendencia
                a huir de los límites.
              </p>
              <p>
                El entusiasmo puede volverse imprudencia cuando la mesura desaparece.
              </p>
            </Card>

            <Card
              title="Capricornio"
              href="/signes/capricorne"
              imageSrc="/images/zodiaque/capricorne.webp"
              imageAlt="Símbolo astrológico de Capricornio"
              element="terre"
            >
              <p>
                <strong>Virtudes:</strong> disciplina, perseverancia, sentido de
                la responsabilidad.
              </p>
              <p>
                Capricornio representa la construcción paciente y la capacidad de
                alcanzar un objetivo a largo plazo.
              </p>
              <p>
                <strong>Posibles defectos:</strong> rigidez, dureza, pesimismo.
              </p>
              <p>
                Cuando la prudencia se vuelve cierre, la persona puede perder el
                contacto con la espontaneidad.
              </p>
            </Card>

            <Card
              title="Acuario"
              href="/signes/verseau"
              imageSrc="/images/zodiaque/verseau.webp"
              imageAlt="Símbolo astrológico de Acuario"
              element="air"
            >
              <p>
                <strong>Virtudes:</strong> independencia, originalidad, visión
                colectiva.
              </p>
              <p>
                Acuario representa la capacidad de pensar de otra manera y de imaginar
                nuevas estructuras para la sociedad.
              </p>
              <p>
                <strong>Posibles defectos:</strong> distancia emocional,
                imprevisibilidad.
              </p>
              <p>
                La independencia puede volverse desapego excesivo o dificultad para
                implicarse en las relaciones.
              </p>
            </Card>

            <Card
              title="Piscis"
              href="/signes/poissons"
              imageSrc="/images/zodiaque/poissons.webp"
              imageAlt="Símbolo astrológico de Piscis"
              element="eau"
            >
              <p>
                <strong>Virtudes:</strong> empatía, imaginación, intuición.
              </p>
              <p>
                Piscis representa la sensibilidad al mundo invisible, a las
                emociones colectivas y a la dimensión espiritual de la vida.
              </p>
              <p>
                <strong>Posibles defectos:</strong> confusión, huida, falta de
                límites.
              </p>
              <p>
                Cuando la sensibilidad se vuelve demasiado grande, la persona puede tener
                dificultades para distinguir sus propias emociones de las de los demás.
              </p>
            </Card>
          </div>
        </section>

        <section className="space-y-4" aria-labelledby="conclusion-article">
          <H2 id="conclusion-article">Conclusión</H2>

          <p className="text-text/85 leading-relaxed">
            Los signos astrológicos no describen a una persona entera, sino
            una <strong>energía fundamental</strong> que atraviesa su personalidad.
          </p>

          <p className="text-text/85 leading-relaxed">
            La madurez consiste en desarrollar las virtudes del propio signo a la vez que
            se reconocen sus posibles excesos.
          </p>

          <p className="text-text/85 leading-relaxed">
            Es en esa tensión entre fuerza y exceso donde se construye
            la evolución personal.
          </p>
        </section>

        {/* FAQ */}
        <section className="space-y-6" aria-labelledby="faq-qualites-defauts">
          <H2 id="faq-qualites-defauts">Preguntas frecuentes sobre las virtudes y defectos de los signos</H2>

          <div className="space-y-4">
            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">¿Cuál es el signo más inteligente?</summary>
              <p className="text-text/85 leading-relaxed">
                No existe una respuesta única. <Link href="/signes/gemeaux" className="underline decoration-white/30 hover:decoration-white/60 transition">Géminis</Link> brilla por su viveza mental, <Link href="/signes/scorpion" className="underline decoration-white/30 hover:decoration-white/60 transition">Escorpio</Link> por su profundidad de análisis, <Link href="/signes/vierge" className="underline decoration-white/30 hover:decoration-white/60 transition">Virgo</Link> por su rigor analítico y <Link href="/signes/verseau" className="underline decoration-white/30 hover:decoration-white/60 transition">Acuario</Link> por su sentido de la innovación. La inteligencia toma formas distintas según cada signo.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">¿Qué signo tiene más defectos?</summary>
              <p className="text-text/85 leading-relaxed">
                Ningún signo tiene más defectos que otro. Cada signo posee fortalezas y fallas equilibradas. Lo que cuenta es la conciencia de los propios patrones y la dinámica global de la <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline decoration-white/30 hover:decoration-white/60 transition">carta natal</Link> completa.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">¿Cambian las virtudes de un signo con el ascendente?</summary>
              <p className="text-text/85 leading-relaxed">
                Sí, el ascendente matiza fuertemente la personalidad del signo solar. Un Aries con ascendente Virgo no expresará las mismas virtudes que un Aries con ascendente Sagitario. Consulta nuestra guía sobre el <Link href="/blog/comprendre-signe-astrologique-ascendant-12-exemples" className="underline decoration-white/30 hover:decoration-white/60 transition">signo y el ascendente</Link> para profundizar.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">¿Se pueden mejorar los defectos del propio signo?</summary>
              <p className="text-text/85 leading-relaxed">
                Sí. La conciencia de los propios patrones es el primer paso hacia la evolución. La <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline decoration-white/30 hover:decoration-white/60 transition">carta natal</Link> completa ofrece pistas de evolución concretas, y los <Link href="/transits" className="underline decoration-white/30 hover:decoration-white/60 transition">tránsitos</Link> muestran los periodos favorables para ese trabajo sobre uno mismo.
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
