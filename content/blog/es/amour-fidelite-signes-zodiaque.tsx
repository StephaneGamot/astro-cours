import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import Image from "next/image";
import { AUTHOR_PERSON, PUBLISHER_ORG } from "@/lib/seo";

const SITE_URL = "https://www.astro-cours.com";
const ARTICLE_URL = `${SITE_URL}/blog/amour-fidelite-signes-zodiaque`;
const COVER_URL = `${SITE_URL}/images/blog/amour-fidelite-signes-zodiaque.webp`;

export const meta = {
  slug: "amour-fidelite-signes-zodiaque",
  title: "Amor y fidelidad de los 12 signos del zodiaco",
  description:
    "Cómo vive cada signo del zodiaco el amor y la fidelidad: necesidades afectivas, compatibilidades amorosas. Descubre los patrones amorosos de tu signo.",
  date: "2026-03-18",
  tags: ["amour", "relations", "signe", "psychologie astrologique", "compatibilité"],
  readingLevel: "débutant" as const,
  cover: "/images/blog/amour-fidelite-signes-zodiaque.webp",
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
        alt: "Amor y fidelidad según los signos del zodiaco",
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
          "group relative block h-full overflow-hidden rounded-2xl",
          "border bg-black/20 p-6 shadow-soft transition",
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

type CompatibilityTone =
  | "feu"
  | "terre"
  | "air"
  | "eau"
  | "feu-air"
  | "terre-eau";

  function getCompatibilityStyles(tone: CompatibilityTone) {
  if (tone === "feu") {
    return {
      border: "border-red-500/30",
      bg: "bg-red-500/[0.06]",
      badge: "border-red-500/25 bg-red-500/10 text-red-200",
      title: "text-red-100",
      glow: "from-red-500/10 to-transparent",
    };
  }

  if (tone === "terre") {
    return {
      border: "border-emerald-500/30",
      bg: "bg-emerald-500/[0.06]",
      badge: "border-emerald-500/25 bg-emerald-500/10 text-emerald-200",
      title: "text-emerald-100",
      glow: "from-emerald-500/10 to-transparent",
    };
  }

  if (tone === "air") {
    return {
      border: "border-sky-500/30",
      bg: "bg-sky-500/[0.06]",
      badge: "border-sky-500/25 bg-sky-500/10 text-sky-200",
      title: "text-sky-100",
      glow: "from-sky-500/10 to-transparent",
    };
  }

  if (tone === "eau") {
    return {
      border: "border-violet-500/30",
      bg: "bg-violet-500/[0.06]",
      badge: "border-violet-500/25 bg-violet-500/10 text-violet-200",
      title: "text-violet-100",
      glow: "from-violet-500/10 to-transparent",
    };
  }

  if (tone === "feu-air") {
    return {
      border: "border-orange-400/30",
      bg: "bg-gradient-to-br from-red-500/[0.06] to-sky-500/[0.06]",
      badge: "border-orange-400/25 bg-orange-400/10 text-orange-100",
      title: "text-orange-100",
      glow: "from-orange-400/10 to-transparent",
    };
  }

  return {
    border: "border-teal-400/30",
    bg: "bg-gradient-to-br from-emerald-500/[0.06] to-violet-500/[0.06]",
    badge: "border-teal-400/25 bg-teal-400/10 text-teal-100",
    title: "text-teal-100",
    glow: "from-teal-400/10 to-transparent",
  };
}

function Badge({
  children,
  tone = "default",
  className = "",
}: {
  children: ReactNode;
  tone?: "default" | "soft" | "strong";
  className?: string;
}) {
  const styles =
    tone === "strong"
      ? "border-white/20 bg-white/10 text-white"
      : tone === "soft"
        ? "border-white/10 bg-white/5 text-text/85"
        : "border-white/10 bg-black/20 text-text/90";

  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium tracking-wide ${styles} ${className}`}
    >
      {children}
    </span>
  );
}

const signsOverview = [
  {
    sign: "Aries",
    href: "/signes/belier",
    fidelity: "Media a fuerte",
    need: "Pasión, movimiento, intensidad",
    risk: "Impulsividad, aburrimiento rápido",
  },
  {
    sign: "Tauro",
    href: "/signes/taureau",
    fidelity: "Muy fuerte",
    need: "Seguridad, estabilidad, sensualidad",
    risk: "Posesividad, inercia",
  },
  {
    sign: "Géminis",
    href: "/signes/gemeaux",
    fidelity: "Variable",
    need: "Diálogo, ligereza, estímulo",
    risk: "Dispersión, ambigüedad",
  },
  {
    sign: "Cáncer",
    href: "/signes/cancer",
    fidelity: "Fuerte",
    need: "Protección, vínculo emocional, ternura",
    risk: "Dependencia afectiva, repliegue",
  },
  {
    sign: "Leo",
    href: "/signes/lion",
    fidelity: "Fuerte si el corazón está nutrido",
    need: "Admiración, calor, lealtad",
    risk: "Orgullo, necesidad excesiva de atención",
  },
  {
    sign: "Virgo",
    href: "/signes/vierge",
    fidelity: "Fuerte",
    need: "Confianza, coherencia, estabilidad cotidiana",
    risk: "Crítica, retención afectiva",
  },
  {
    sign: "Libra",
    href: "/signes/balance",
    fidelity: "Media a fuerte",
    need: "Armonía, elegancia relacional, diálogo",
    risk: "Indecisión, seducción difusa",
  },
  {
    sign: "Escorpio",
    href: "/signes/scorpion",
    fidelity: "Muy fuerte o ruptura tajante",
    need: "Fusión, verdad, intensidad emocional",
    risk: "Celos, control, obsesión",
  },
  {
    sign: "Sagitario",
    href: "/signes/sagittaire",
    fidelity: "Buena si es libre",
    need: "Espacio, entusiasmo, horizonte común",
    risk: "Huida, inestabilidad, rechazo de las ataduras",
  },
  {
    sign: "Capricornio",
    href: "/signes/capricorne",
    fidelity: "Muy fuerte",
    need: "Compromiso, solidez, respeto mutuo",
    risk: "Frialdad, rigidez emocional",
  },
  {
    sign: "Acuario",
    href: "/signes/verseau",
    fidelity: "Particular pero real",
    need: "Libertad, complicidad mental, singularidad",
    risk: "Distancia, imprevisibilidad",
  },
  {
    sign: "Piscis",
    href: "/signes/poissons",
    fidelity: "Sensible pero cambiante",
    need: "Fusión, dulzura, inspiración, empatía",
    risk: "Vaguedad, idealización, ausencia de límites",
  },
];

const compatibilities = [
  {
    title: "Las uniones de fuego: pasión e impulso",
    signs: "Aries, Leo, Sagitario",
    tone: "feu" as const,
    text: "Entre signos de fuego, el amor se nutre de entusiasmo, de deseo, de impulso vital y de admiración mutua. Estas relaciones pueden ser muy vivas, muy estimulantes, pero también más inestables si nadie regula la intensidad o el ego.",
  },
  {
    title: "Las uniones de tierra: estabilidad y construcción",
    signs: "Tauro, Virgo, Capricornio",
    tone: "terre" as const,
    text: "Los signos de tierra buscan a menudo relaciones serias, concretas y duraderas. El apego se expresa mediante la fiabilidad, la continuidad y la presencia. El vínculo es sólido, pero puede carecer de espontaneidad si la relación se vuelve demasiado previsible.",
  },
  {
    title: "Las uniones de aire: intercambio y afinidad mental",
    signs: "Géminis, Libra, Acuario",
    tone: "air" as const,
    text: "Los signos de aire se encuentran a través del diálogo, la inteligencia relacional y la circulación de las ideas. El amor nace a menudo de una complicidad mental. El riesgo es quedarse en la relación conceptual o social sin descender siempre lo bastante hondo en la emoción.",
  },
  {
    title: "Las uniones de agua: sensibilidad y profundidad",
    signs: "Cáncer, Escorpio, Piscis",
    tone: "eau" as const,
    text: "Entre signos de agua, el vínculo afectivo puede ser poderoso, intuitivo y muy envolvente. Existe una fuerte necesidad de fusión, de confianza y de compartir emocionalmente. Estas relaciones suelen ser profundas, pero pueden volverse demasiado intensas o demasiado fusionales sin un marco claro.",
  },
  {
    title: "Fuego y aire: atracción natural",
    signs: "Aries/Leo/Sagitario con Géminis/Libra/Acuario",
    tone: "feu-air" as const,
    text: "El fuego suele ser estimulado por el aire. Uno aporta el impulso, el otro el movimiento y el pensamiento. Esta combinación favorece la seducción, la movilidad y la ligereza. Funciona muy bien cuando no se descuida la profundidad emocional.",
  },
  {
    title: "Tierra y agua: compatibilidad constructiva",
    signs: "Tauro/Virgo/Capricornio con Cáncer/Escorpio/Piscis",
    tone: "terre-eau" as const,
    text: "La tierra da seguridad al agua, y el agua humaniza a la tierra. Es una de las combinaciones más fecundas para construir a largo plazo: uno aporta la estructura, el otro la sensibilidad. El reto consiste en evitar el exceso de dependencia o de control afectivo.",
  },
];

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
        name: "¿Qué signo astrológico es el más fiel en el amor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No existe un signo universalmente más fiel. En astrología, la fidelidad depende de la estructura del signo, pero también de la carta natal, de la madurez afectiva y de la manera en que la relación responde a sus necesidades profundas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Son los signos de agua más enamoradizos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Los signos de agua expresan a menudo el amor con más sensibilidad, profundidad emocional y necesidad de fusión. Eso no significa que amen mejor, sino que aman de forma diferente.",
        },
      },
      {
        "@type": "Question",
        name: "¿La compatibilidad amorosa depende solo del signo solar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. El signo solar da una primera indicación, pero un estudio serio de la compatibilidad exige también examinar Venus, Marte, la Luna, el Ascendente y la dinámica global de la carta natal.",
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
        {/* HERO */}
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
            <p className="text-sm text-text/65">Astrología relacional</p>



            <p className="mt-4 max-w-2xl text-text/80 leading-relaxed">
              Amar no significa lo mismo para todos. Algunos signos buscan ante
              todo la
              <strong> seguridad afectiva</strong>, otros la
              <strong> pasión</strong>, la
              <strong> libertad</strong>, la
              <strong> profundidad psicológica</strong> o la
              <strong> fusión emocional</strong>.
            </p>

            <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
              Observar el amor a través de los signos del zodiaco permite
              comprender mejor la manera en que cada uno se vincula, se
              compromete, protege, desea o a veces se aparta de la relación.
            </p>

            <div
              className="mt-5 flex flex-wrap gap-2"
              aria-label="Resumen de los temas del artículo"
            >
              <Pill tone="rose">Amor</Pill>
              <Pill tone="violet">Fidelidad</Pill>
              <Pill tone="sky">Compatibilidades</Pill>
              <Pill tone="emerald">Lectura psicológica</Pill>
            </div>

            <div className="mt-4" aria-label="Palabras clave del artículo">
              <TagPillsInline tags={meta.tags} />
            </div>
          </div>
        </header>

        {/* DEFINITION BOX — Featured Snippet */}
        <div className="rounded-2xl border border-rose-400/20 bg-rose-400/[0.04] px-6 py-5">
          <p className="text-sm font-semibold uppercase tracking-widest text-rose-300/80">Definición</p>
          <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
            El <strong>amor y la fidelidad en astrología</strong> se analizan a través del signo solar, la posición de <Link href="/planetes/venus">Venus</Link> y la <Link href="/maisons/maison-7">casa VII</Link> de la <Link href="/blog/qu-est-ce-qu-un-theme-astral">carta natal</Link>. Cada signo del zodiaco posee un patrón afectivo distinto que influye profundamente en su forma de amar, de comprometerse y de mantenerse fiel.
          </p>
        </div>

        {/* APP INTRO */}
        <p className="text-lg leading-relaxed text-text/85">
          ¿Es tu pareja <strong>fiel según su signo astrológico</strong>? Esta pregunta candente merece algo mejor que los tópicos de siempre. En realidad, cada signo del zodiaco vive el amor según un patrón afectivo que le es propio — y la fidelidad no significa lo mismo para un Aries que para un Escorpio. Descubre los 12 retratos amorosos completos, con necesidades afectivas, puntos fuertes y zonas de fragilidad.
        </p>

        {/* INTRO */}
        <section className="space-y-4" aria-labelledby="intro-article">
          <H2 id="intro-article">Amar no es solo sentir</H2>

          <p className="text-text/85 leading-relaxed">
            En astrología, el amor no se reduce a un sentimiento abstracto. Se
            expresa a través de una estructura psicológica: la manera de desear,
            de vincularse, de confiar, de soportar la duración o de aceptar la
            libertad del otro.
          </p>

          <p className="text-text/85 leading-relaxed">
            La fidelidad, a su vez, adopta varias formas. Para algunos signos,
            significa continuidad y seguridad. Para otros, supone ante todo
            sinceridad, intensidad o lealtad interior, aunque la relación deba
            seguir siendo móvil para no apagarse.
          </p>
        </section>

        {/* TABLEAU */}
        <section className="space-y-6" aria-labelledby="tableau-comparatif">
          <H2 id="tableau-comparatif">
            Tabla comparativa: fidelidad, necesidad afectiva y riesgo relacional
          </H2>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-soft">
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-sm">
                <thead className="bg-white/[0.04]">
                  <tr className="text-left">
                    <th scope="col" className="px-5 py-4 font-semibold text-white">Signo</th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Fidelidad
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Necesidad principal
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Riesgo relacional
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {signsOverview.map((item, index) => (
                    <tr
                      key={item.sign}
                      className={
                        index % 2 === 0
                          ? "border-t border-white/10"
                          : "border-t border-white/10 bg-white/[0.02]"
                      }
                    >
                      <td className="px-5 py-4 align-top">
                        <Link
                          href={item.href}
                          className="font-medium text-white transition hover:text-text"
                        >
                          {item.sign}
                        </Link>
                      </td>
                      <td className="px-5 py-4 align-top text-text/85">
                        {item.fidelity}
                      </td>
                      <td className="px-5 py-4 align-top text-text/85">
                        {item.need}
                      </td>
                      <td className="px-5 py-4 align-top text-text/85">
                        {item.risk}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-sm text-text/65 leading-relaxed">
            Esta tabla ofrece una visión de conjunto. En la práctica, un análisis
            amoroso más serio exige también observar Venus, Marte, la Luna, el
            Ascendente y los aspectos de la carta natal.
          </p>
        </section>

        {/* LES 12 SIGNES */}
        <section className="space-y-6" aria-labelledby="les-12-signes">
          <H2 id="les-12-signes">Cómo vive cada signo el amor y la fidelidad</H2>

          <div className="grid gap-6 lg:grid-cols-2">
      <Card
  title="Aries"
  href="/signes/belier"
  imageSrc="/images/zodiaque/belier.webp"
  imageAlt="Símbolo astrológico de Aries"
  element="feu"
>
              <p>
                Aries ama con franqueza, intensidad e inmediatez. Busca el fuego
                vivo de la relación, el impulso, la conquista, la sensación de
                estar plenamente comprometido en algo que vibra.
              </p>
              <p>
                Su fidelidad existe cuando se siente vivo dentro del vínculo.
                Este signo no es necesariamente infiel por naturaleza, pero
                soporta mal la rutina, la pasividad o el estancamiento afectivo.
              </p>
              <p>
                <strong>Necesidad esencial:</strong> pasión, verdad directa,
                energía compartida.
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
                Tauro ama en la duración. Busca un vínculo concreto, tranquilo,
                encarnado, estable. Su amor se expresa a menudo a través de la
                presencia, la constancia, la sensualidad y la capacidad de
                sostener.
              </p>
              <p>
                Es uno de los signos más naturalmente fieles cuando está
                profundamente apegado. No le gusta la inestabilidad y prefiere
                construir antes que dispersar su energía.
              </p>
              <p>
                <strong>Necesidad esencial:</strong> seguridad, confianza,
                continuidad afectiva.
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
                Géminis se enamora a menudo por la mente. La palabra, la
                curiosidad, la vivacidad del intercambio, el humor y la sensación
                de movimiento les resultan esenciales.
              </p>
              <p>
                Su fidelidad depende en gran medida de la calidad del vínculo
                mental. Si la relación se vuelve pesada, repetitiva o cerrada,
                pueden distanciarse, no por falta de corazón, sino por necesidad
                de aire y de renovación.
              </p>
              <p>
                <strong>Necesidad esencial:</strong> diálogo, movilidad,
                estímulo intelectual.
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
                Cáncer ama profundamente, afectivamente, a menudo con una gran
                memoria emocional. Invierte en el vínculo como un espacio de
                protección, de confianza y de pertenencia.
              </p>
              <p>
                Su fidelidad es generalmente fuerte cuando se siente seguro.
                Necesita un amor que tranquilice, envuelva y respete su
                sensibilidad.
              </p>
              <p>
                <strong>Necesidad esencial:</strong> ternura, apego,
                seguridad emocional.
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
                Leo ama con calor, nobleza, generosidad e intensidad de corazón.
                Necesita vivir un amor claro, asumido, orgulloso, que dé sentido
                a su irradiación.
              </p>
              <p>
                Puede ser muy fiel cuando se siente amado, admirado y elegido con
                sinceridad. Pero sufre cuando el amor se vuelve tibio, banal o
                desvalorizante.
              </p>
              <p>
                <strong>Necesidad esencial:</strong> lealtad, admiración, calor
                del corazón.
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
                Virgo ama de manera más discreta, más fina, a veces más
                contenida. Muestra su apego mediante la constancia, el cuidado,
                la atención al detalle, la fiabilidad.
              </p>
              <p>
                Su fidelidad suele ser real, fundada en la coherencia y la
                seriedad. Sin embargo, necesita un vínculo claro, honesto,
                estable, que no le obligue a vivir en la incertidumbre.
              </p>
              <p>
                <strong>Necesidad esencial:</strong> confianza, precisión,
                seguridad del día a día.
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
                Libra vive el amor a través de la relación misma: el diálogo, el
                equilibrio, la elegancia afectiva, la búsqueda de armonía y la
                reciprocidad.
              </p>
              <p>
                Aspira a menudo sinceramente a la fidelidad, pero puede sentirse
                perturbada cuando la relación pierde su belleza, su dulzura o su
                calidad de vínculo. La necesidad de ser amada y validada juega un
                papel central.
              </p>
              <p>
                <strong>Necesidad esencial:</strong> armonía, refinamiento
                relacional, equilibrio.
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
                Escorpio ama con intensidad, profundidad, totalidad. No busca un
                vínculo superficial sino una relación que comprometa el alma, el
                deseo, la confianza y la verdad interior.
              </p>
              <p>
                Cuando se compromete, su fidelidad puede ser muy fuerte. Pero
                soporta mal la traición, la ambivalencia o lo falso. Para él, el
                amor debe ser verdadero o no ser.
              </p>
              <p>
                <strong>Necesidad esencial:</strong> fusión, verdad, intensidad
                emocional.
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
                Sagitario ama con entusiasmo, espontaneidad y apertura. Necesita
                que la relación sea un espacio vivo, evolutivo, libre, capaz de
                acompañar su impulso hacia algo más grande.
              </p>
              <p>
                Puede ser fiel, pero rara vez dentro de un marco asfixiante. Su
                lealtad crece cuando la pareja deja respirar, explorar, aprender
                y crecer.
              </p>
              <p>
                <strong>Necesidad esencial:</strong> libertad, alegría, horizonte
                común.
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
                Capricornio ama en serio. No siempre entra rápido en la relación,
                pero cuando se compromete, aporta peso, aplomo, continuidad y
                responsabilidad.
              </p>
              <p>
                Su fidelidad figura entre las más sólidas del zodiaco. Le gusta
                construir un vínculo duradero, exigente pero digno de confianza.
              </p>
              <p>
                <strong>Necesidad esencial:</strong> compromiso, respeto, solidez
                del vínculo.
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
                Acuario ama de forma singular. Necesita una relación que respete
                su autonomía, su libertad de pensamiento y su manera a veces
                atípica de crear vínculo.
              </p>
              <p>
                Su fidelidad no siempre es demostrativa o posesiva, pero puede
                ser muy real en el plano de la lealtad mental, moral o amistosa.
                Sobre todo, huye del encierro.
              </p>
              <p>
                <strong>Necesidad esencial:</strong> libertad, complicidad
                mental, espacio interior.
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
                Piscis ama con sensibilidad, imaginación, dulzura y profundidad.
                Busca a menudo una forma de comunión afectiva, espiritual o
                intuitiva.
              </p>
              <p>
                Su fidelidad depende mucho de su equilibrio interior. Puede ser
                muy entregado, pero también perderse en la vaguedad, el sueño o la
                idealización si la relación carece de un marco.
              </p>
              <p>
                <strong>Necesidad esencial:</strong> fusión, empatía, dulzura,
                inspiración.
              </p>
            </Card>
          </div>
        </section>

        {/* COMPATIBILITÉS */}
        <section className="space-y-6" aria-labelledby="compatibilites-amoureuses">
          <H2 id="compatibilites-amoureuses">Compatibilidades amorosas entre los signos</H2>

          <p className="text-text/85 leading-relaxed">
            La compatibilidad amorosa nunca se reduce a una simple receta. Se
            apoya en una alquimia entre las necesidades, los ritmos, los valores
            y la manera en que cada uno soporta el compromiso, la cercanía y la
            diferencia. El signo solar ofrece una primera tendencia útil, sobre
            todo para comprender el clima general de una relación.
          </p>

     <div className="grid gap-6 lg:grid-cols-2">
  {compatibilities.map((item) => {
    const styles = getCompatibilityStyles(item.tone);

    return (
      <section
        key={item.title}
        className={[
          "relative overflow-hidden rounded-2xl border p-6 shadow-soft",
          styles.border,
          styles.bg,
        ].join(" ")}
      >
        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${styles.glow} opacity-80`}
          aria-hidden="true"
        />

        <div className="relative">
          <h3 className={`text-lg md:text-xl font-semibold tracking-tight ${styles.title}`}>
            {item.title}
          </h3>

          <div className="mt-3">
            <Badge className={styles.badge}>{item.signs}</Badge>
          </div>

          <p className="mt-4 text-text/85 leading-relaxed">
            {item.text}
          </p>
        </div>
      </section>
    );
  })}
</div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-lg md:text-xl font-semibold tracking-tight text-white">
              Lo que hay que recordar
            </h3>
            <p className="mt-4 text-text/85 leading-relaxed">
              Algunas combinaciones parecen más naturales, pero ninguna
              compatibilidad está garantizada ni condenada de antemano. Una
              relación fuerte depende también de la madurez, del contexto de
              vida, de la capacidad de comunicarse y de la voluntad real de
              construir.
            </p>
            <p className="mt-3 text-text/85 leading-relaxed">
              En astrología seria, las compatibilidades se leen siempre con mayor
              precisión a través de la sinastría y el estudio de la carta natal
              completa.
            </p>
          </div>
        </section>

        {/* FAQ / CONCLUSION */}
        <section className="space-y-4" aria-labelledby="conclusion-article">
          <H2 id="conclusion-article">Conclusión</H2>

          <p className="text-text/85 leading-relaxed">
            Ningún signo ama de manera superior a los demás. Cada uno ama según
            su naturaleza: por el corazón, por la seguridad, por la mente, por la
            fusión, por la libertad o por el compromiso.
          </p>

          <p className="text-text/85 leading-relaxed">
            Comprender la lógica amorosa de los signos permite captar mejor lo
            que cada uno espera de una relación, lo que puede ofrecer y las
            tensiones que aparecen cuando una necesidad esencial no es
            reconocida.
          </p>

          <p className="text-text/85 leading-relaxed">
            Para ir más lejos, hay que superar el solo signo solar y observar el
            conjunto de la carta natal. Es a menudo ahí donde la realidad
            afectiva se vuelve mucho más fina, mucho más justa y mucho más
            reveladora.
          </p>
        </section>

        {/* FAQ */}
        <section className="space-y-6" aria-labelledby="faq-amour-fidelite">
          <H2 id="faq-amour-fidelite">Preguntas frecuentes sobre el amor y la fidelidad de los signos</H2>

          <div className="space-y-4">
            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">¿Cuál es el signo más fiel en el amor?</summary>
              <p className="text-text/85 leading-relaxed">
                <Link href="/signes/taureau" className="underline decoration-white/30 hover:decoration-white/60 transition">Tauro</Link>, <Link href="/signes/scorpion" className="underline decoration-white/30 hover:decoration-white/60 transition">Escorpio</Link> y <Link href="/signes/cancer" className="underline decoration-white/30 hover:decoration-white/60 transition">Cáncer</Link> se consideran generalmente los signos más fieles. Tauro por necesidad de estabilidad, Escorpio por la intensidad del vínculo, y Cáncer por un apego emocional profundo.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">¿Qué signo engaña más?</summary>
              <p className="text-text/85 leading-relaxed">
                <Link href="/signes/gemeaux" className="underline decoration-white/30 hover:decoration-white/60 transition">Géminis</Link>, <Link href="/signes/sagittaire" className="underline decoration-white/30 hover:decoration-white/60 transition">Sagitario</Link> y <Link href="/signes/verseau" className="underline decoration-white/30 hover:decoration-white/60 transition">Acuario</Link> se citan a menudo, pero esa reputación es reductora. La posición de <Link href="/planetes/venus">Venus</Link> en la carta natal influye mucho más en el comportamiento amoroso que el solo signo solar.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">¿La fidelidad depende únicamente del signo solar?</summary>
              <p className="text-text/85 leading-relaxed">
                No. La fidelidad en astrología se analiza a través de varios factores: la posición de <Link href="/planetes/venus">Venus</Link>, la <Link href="/maisons/maison-7">casa VII</Link>, los aspectos planetarios y la dinámica global de la <Link href="/blog/qu-est-ce-qu-un-theme-astral">carta natal</Link>. El signo solar por sí solo no basta para determinar el comportamiento amoroso.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">¿Qué signos son los más compatibles en el amor?</summary>
              <p className="text-text/85 leading-relaxed">
                Los elementos compatibles forman buenas bases: fuego (Aries, Leo, Sagitario) con aire (Géminis, Libra, Acuario), y tierra (Tauro, Virgo, Capricornio) con agua (Cáncer, Escorpio, Piscis). Pero una <Link href="/synastrie" className="underline decoration-white/30 hover:decoration-white/60 transition">sinastría</Link> completa sigue siendo indispensable para evaluar la compatibilidad real.
              </p>
            </details>
          </div>
        </section>

        <nav aria-label="Navegación de fin de artículo">
          <Link
            href="/blog"
            className="inline-flex rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-text/90 hover:bg-white/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            ← Ver todos los artículos
          </Link>
        </nav>
      </article>
    </>
  );
}
