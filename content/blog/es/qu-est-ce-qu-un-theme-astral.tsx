import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import { AUTHOR_PERSON, PUBLISHER_ORG } from "@/lib/seo";

const SITE_URL = "https://www.astro-cours.com";
const ARTICLE_URL = `${SITE_URL}/blog/qu-est-ce-qu-un-theme-astral`;
const COVER_URL = `${SITE_URL}/images/blog/theme-astral.jpg`;

export const meta = {
  slug: "qu-est-ce-qu-un-theme-astral",
  title:
    "Carta natal: definición y método",
  description:
    "¿Qué es una carta natal? Planetas, signos, casas y aspectos: descubre lo que contiene tu carta del cielo y cómo leerla paso a paso.",
  socialTitle:
    "¿Qué es una carta natal? Definición sencilla y guía completa",
  socialDescription:
    "Entiende por fin qué es una carta natal, lo que realmente contiene y por qué no se reduce ni al signo solar ni al ascendente. Método de lectura incluido.",
  date: "2026-01-05",
  tags: ["bases", "thème astral", "débutant"],
  readingLevel: "débutant" as const,
  cover: "/images/blog/theme-astral.webp",
  ogImage: COVER_URL,
  ogImageAlt: "Ilustración pedagógica de la carta natal",
  type: "article" as const,
  articleSection: "Astrología",
  readingTime: "5–7 min",
};

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
      {children}
    </h2>
  );
}

function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-lg md:text-xl font-semibold tracking-tight leading-tight">
      {children}
    </h3>
  );
}

function Card({
  title,
  icon,
  children,
  subtitle,
}: {
  title: string;
  icon?: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-white/10 bg-black/20 p-6 shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div>
          <H3>
            {icon ? <span className="mr-2">{icon}</span> : null}
            {title}
          </H3>
          {subtitle ? (
            <p className="mt-1 text-sm text-text/60">{subtitle}</p>
          ) : null}
        </div>
      </div>
      <div className="mt-4 space-y-3 text-text/85 leading-relaxed">
        {children}
      </div>
    </section>
  );
}

function Callout({
  kind = "note",
  title,
  children,
}: {
  kind?: "note" | "warn" | "ok";
  title: string;
  children: ReactNode;
}) {
  const box =
    kind === "warn"
      ? "border-yellow-500/30 bg-yellow-500/10"
      : kind === "ok"
      ? "border-emerald-500/30 bg-emerald-500/10"
      : "border-white/10 bg-white/5";

  const emoji = kind === "warn" ? "⚠️" : kind === "ok" ? "✅" : "📌";

  return (
    <div className={`rounded-2xl border p-4 ${box}`}>
      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-text/90">
        <span>{emoji}</span>
        <span>{title}</span>
      </div>
      <div className="space-y-2 text-text/85 leading-relaxed">{children}</div>
    </div>
  );
}

export default function Post() {
  const glow = getGlowFromTags(meta.tags);

  const graphJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: meta.title,
        description: meta.description,
        image: [meta.ogImage],
        datePublished: `${meta.date}T12:00:00Z`,
        dateModified: `${meta.date}T12:00:00Z`,
        inLanguage: "es",
        mainEntityOfPage: ARTICLE_URL,
        articleSection: meta.articleSection,
        keywords: meta.tags.join(", "),
        educationalLevel: meta.readingLevel,
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
            name: "¿Qué es una carta natal?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Una carta natal es una carta del cielo calculada para un instante y un lugar precisos, la mayoría de las veces el nacimiento. Describe una estructura simbólica de funcionamiento y no una predicción.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cuáles son los grandes componentes de una carta natal?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Los cuatro grandes bloques son los planetas, los signos, las casas y los aspectos. Los planetas describen las funciones, los signos el estilo, las casas el área de expresión y los aspectos la dinámica entre las funciones.",
            },
          },
          {
            "@type": "Question",
            name: "¿Una carta natal se reduce al signo solar?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. El signo solar es solo un elemento entre otros. El ascendente, la Luna, las casas y los aspectos modifican profundamente toda la lectura.",
            },
          },
        ],
      },
      {
        "@type": "HowTo",
        name: "Cómo comprender las bases de una carta natal",
        description:
          "Método sencillo para comprender la estructura de una carta natal a través de sus cuatro bloques fundamentales.",
        image: meta.ogImage,
        totalTime: "PT7M",
        step: [
          {
            "@type": "HowToStep",
            name: "Leer el Sol y la Luna",
            text: "Empieza por el Sol para la identidad y la Luna para los reflejos emocionales.",
          },
          {
            "@type": "HowToStep",
            name: "Observar el ascendente",
            text: "Localiza el ascendente para comprender el estilo de contacto con el mundo.",
          },
          {
            "@type": "HowToStep",
            name: "Identificar los planetas dominantes",
            text: "Busca los planetas dominantes, los ángulos y las grandes repeticiones de la carta.",
          },
          {
            "@type": "HowToStep",
            name: "Relacionar función, estilo, área y dinámica",
            text: "Relaciona planetas, signos, casas y aspectos para construir una síntesis coherente.",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphJsonLd) }}
      />

      <div className="space-y-10">
        <header className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-7 shadow-soft">
          <div
            className={`pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl ${glow}`}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-3xl"
            aria-hidden="true"
          />

          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-transparent" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

          <div className="relative">
            <p className="text-sm text-text/60">Curso fundamental • Bases de la astrología</p>

            <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
              Una <strong>carta natal</strong> es una fotografía del cielo
              en el momento exacto de tu nacimiento — planetas, signos y casas
              colocados sobre 360°. ¿Te han dicho «soy{" "}
              <Link href="/signes/balance" className="underline decoration-white/30 hover:decoration-white/60 transition">
                Libra
              </Link>» o «mi{" "}
              <Link href="/blog/comprendre-signe-astrologique-ascendant-12-exemples" className="underline decoration-white/30 hover:decoration-white/60 transition">
                ascendente
              </Link>{" "}
              es Leo» sin entender lo que eso significaba
              realmente? Es normal: el signo solar es solo una pieza del
              rompecabezas. Sin leer el conjunto de tu carta del cielo, te
              pierdes lo esencial. Esta guía te da la definición
              completa, los 4 componentes fundamentales, un método de
              lectura en 7 pasos y los errores que debes evitar.
            </p>

            <section className="mt-5" aria-labelledby="article-summary-title">
              <h2 id="article-summary-title" className="sr-only">
                Resumen del artículo
              </h2>
              <div className="flex flex-wrap gap-2">
                <Pill tone="violet">Nivel: principiante</Pill>
                <Pill tone="sky">≈ {meta.readingTime}</Pill>
              </div>
            </section>

            <section className="mt-3" aria-labelledby="article-tags-title">
              <h2 id="article-tags-title" className="sr-only">
                Palabras clave del artículo
              </h2>
              <TagPillsInline tags={meta.tags} />
            </section>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-text/60">Objetivo</p>
                <p className="mt-1 font-semibold text-text/90">
                  Comprender la estructura
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-text/60">Para recordar</p>
                <p className="mt-1 font-semibold text-text/90">
                  Carta ≠ predicción
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-text/60">Método</p>
                <p className="mt-1 font-semibold text-text/90">
                  Planetas • Signos • Casas • Aspectos
                </p>
              </div>
            </div>
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            {/* APP intro */}
            <p className="text-base leading-relaxed text-text/85 md:text-lg">
              Oyes hablar de la <strong>carta natal</strong> por todas partes, pero ¿no sabes exactamente qué es ni cómo leerla? No eres el único: la mayoría de la gente confunde la carta natal con el horóscopo. Esta guía accesible te explica qué es realmente una carta natal, sus 4 componentes esenciales y un método en 7 pasos para empezar a descifrarla.
            </p>

            <section className="space-y-4">
              <H2>Carta natal: definición y principios fundamentales</H2>

              <Card
                title="La frase más exacta"
                icon="🧭"
                subtitle="Si solo recuerdas una cosa, recuerda esto."
              >
                <p>
                  Una <strong>carta natal</strong> (o <strong>carta del
                  nacimiento</strong>, o <strong>carta del cielo de nacimiento</strong>)
                  es una fotografía del cielo calculada para un{" "}
                  <strong>instante</strong> y un <strong>lugar</strong> precisos
                  — la mayoría de las veces el momento en que naciste. Muestra
                  la posición exacta de los{" "}
                  <Link href="/planetes/soleil" className="underline decoration-white/30 hover:decoration-white/60 transition">
                    planetas
                  </Link>,{" "}
                  de los{" "}
                  <Link href="/signes/belier" className="underline decoration-white/30 hover:decoration-white/60 transition">
                    signos del zodiaco
                  </Link>{" "}
                  y de las{" "}
                  <Link href="/maisons/maison-1" className="underline decoration-white/30 hover:decoration-white/60 transition">
                    casas astrológicas
                  </Link>{" "}
                  en ese instante preciso.
                </p>
                <Callout kind="note" title="Idea central">
                  <p>
                    No es una predicción: es una{" "}
                    <strong>estructura de funcionamiento</strong>. La carta
                    natal describe <em>cómo</em> funcionas, no lo que
                    te va a pasar.
                  </p>
                </Callout>
              </Card>
            </section>

            <section className="space-y-4">
              <H2>Los 4 componentes de una carta natal explicados de forma sencilla</H2>

              <div className="grid gap-6 md:grid-cols-2">
                <Card title="1) Los planetas" icon="☀️" subtitle="¿Qué? (la función psicológica)">
                  <p>
                    Cada planeta simboliza una <strong>función</strong>:
                    el Sol{" "}
                    para la identidad, la Luna{" "}
                    para las emociones, Venus{" "}
                    para los valores y el amor, Marte{" "}
                    para la acción y el deseo…
                  </p>
                  <p className="text-sm text-text/70">
                    Ejemplo:{" "}
                    <Link href="/blog/mars-en-signes-desir-libido-action" className="underline decoration-white/30 hover:decoration-white/60 transition">
                      Marte en los signos
                    </Link>{" "}
                    = tu manera de actuar y de defenderte.
                  </p>
                </Card>

                <Card title="2) Los signos del zodiaco" icon="♈" subtitle="¿Cómo? (el estilo, el tono)">
                  <p>
                    Los{" "}
                    <Link href="/blog/qualites-defauts-12-signes-zodiaque" className="underline decoration-white/30 hover:decoration-white/60 transition">
                      12 signos del zodiaco
                    </Link>{" "}
                    tiñen cada planeta: <strong>tono</strong>,{" "}
                    <strong>estilo</strong>, <strong>reflejo</strong>. Es
                    el "cómo" de la función.
                  </p>
                  <p className="text-sm text-text/70">
                    Ejemplo: Marte en Aries{" "}
                    (fuego, impulsivo) ≠ Marte en Tauro{" "}
                    (tierra, resistente).
                  </p>
                </Card>

                <Card title="3) Las casas astrológicas" icon="🏠" subtitle="¿Dónde? (el área de la vida)">
                  <p>
                    Las 12 casas{" "}
                    muestran <strong>dónde</strong> se expresa el planeta
                    en la vida: la casa VII{" "}
                    para las relaciones, la casa X{" "}
                    para la carrera, la casa IV{" "}
                    para la familia…
                  </p>
                  <Callout kind="ok" title="Miniejemplo">
                    <p>
                      <strong>Mercurio</strong>{" "}
                      en <strong>Casa 10</strong>{" "}
                      : comunicación ligada al <strong>oficio</strong> y
                      a la imagen pública. Ideal para la{" "}
                      <Link href="/blog/orientation-professionnelle-theme-astral" className="underline decoration-white/30 hover:decoration-white/60 transition">
                        orientación profesional
                      </Link>.
                    </p>
                  </Callout>
                </Card>

                <Card title="4) Los aspectos" icon="🔗" subtitle="Dinámica (relaciones entre planetas)">
                  <p>
                    Los{" "}
                    aspectos{" "}
                    describen la relación entre planetas: fluidez,
                    tensión, contradicciones, cooperación.
                  </p>
                  <p className="text-sm text-text/70">
                    Ejemplo: una cuadratura puede "empujar a evolucionar", no "castigar".
                  </p>
                </Card>
              </div>
            </section>

            <section className="space-y-4">
              <H2>Cómo leer una carta natal: método en 7 pasos para principiantes</H2>

              <Card title="El método más sencillo (7 pasos)" icon="🧠">
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    Lee primero el <strong>Sol</strong>{" "}
                    (identidad, ego), luego la <strong>Luna</strong>{" "}
                    (reflejos emocionales, necesidades profundas). Son los
                    perfiles solar{" "}
                    y lunar.
                  </li>
                  <li>
                    Observa el <strong>ascendente</strong>{" "}
                    (puerta de entrada, estilo de contacto con el mundo).
                  </li>
                  <li>
                    Localiza los planetas <strong>dominantes</strong> (angulares,{" "}
                    stelliums,{" "}
                    <Link href="/maitrises" className="underline decoration-white/30 hover:decoration-white/60 transition">
                      regentes de ángulo
                    </Link>).
                  </li>
                  <li>
                    Identifica 2–3 <strong>temas mayores</strong> (casas cargadas,
                    repeticiones).
                  </li>
                  <li>
                    Lee los{" "}
                    <Link href="/aspects" className="underline decoration-white/30 hover:decoration-white/60 transition">
                      <strong>aspectos fuertes</strong>
                    </Link>{" "}
                    (orbes ajustados:{" "}
                    <Link href="/blog/conjonction-melange-des-forces" className="underline decoration-white/30 hover:decoration-white/60 transition">
                      conjunciones
                    </Link>, cuadraturas, oposiciones).
                  </li>
                  <li>
                    Relaciona: "función (planeta) → estilo (signo) → área (casa)
                    → dinámica (aspectos)".
                  </li>
                  <li>
                    Termina con una frase de síntesis: "Esta persona funciona
                    sobre todo a través de…".
                  </li>
                </ol>

                <Callout kind="note" title="Regla de oro">
                  <p>
                    No te pierdas en los detalles: buscas una{" "}
                    <strong>estructura</strong>, y luego afinas después.
                  </p>
                </Callout>
              </Card>
            </section>

            <section className="space-y-4">
              <H2>Lo que la carta natal no predice (y lo que realmente revela)</H2>

              <Card title="Los límites (importante)" icon="🛡️">
                <ul className="list-disc space-y-2 pl-5">
                  <li>una fecha exacta de un acontecimiento</li>
                  <li>un destino obligatorio</li>
                  <li>"lo que va a pasar sí o sí"</li>
                </ul>

                <Callout kind="warn" title="Importante">
                  <p>
                    La carta describe <strong>tendencias</strong> y{" "}
                    <strong>ciclos</strong>. El libre albedrío sigue siendo central.
                  </p>
                </Callout>
              </Card>
            </section>

            <section className="space-y-4">
              <H2>FAQ: preguntas frecuentes sobre la carta natal</H2>

              <div className="grid gap-6 md:grid-cols-2">
                <Card
                  title="¿Por qué dos personas del mismo signo son diferentes?"
                  icon="❓"
                >
                  <p>
                    Porque no tienen el mismo <strong>ascendente</strong>, ni la misma <strong>Luna</strong>, ni las mismas <strong>casas</strong>{" "}
                    ni los mismos <strong>aspectos</strong>.
                    Es exactamente lo que explica el artículo{" "}
                    <Link href="/blog/pourquoi-votre-horoscope-ne-vous-ressemble-pas" className="underline decoration-white/30 hover:decoration-white/60 transition">
                      por qué tu horóscopo no se parece a ti
                    </Link>.
                  </p>
                </Card>

                <Card title="¿La astrología es científica?" icon="🧾">
                  <p>
                    La astrología seria es una <strong>lectura simbólica</strong>{" "}
                    : describe patrones de funcionamiento, no causalidades
                    físicas verificadas. Este curso te enseña un
                    método coherente, no fatalismo.
                  </p>
                </Card>

                <Card title="Carta natal y carta del nacimiento, ¿son lo mismo?" icon="📖">
                  <p>
                    Sí, ambos términos designan la misma carta del cielo —
                    la calculada para tu nacimiento. También se dice «mapa
                    natal». El término «carta natal» es el más habitual.
                    Consulta el{" "}
                    <Link href="/dictionnaire-astrologique" className="underline decoration-white/30 hover:decoration-white/60 transition">
                      diccionario astrológico
                    </Link>{" "}
                    para otras definiciones.
                  </p>
                </Card>

                <Card title="¿Se puede usar la carta natal para predecir el futuro?" icon="🔮">
                  <p>
                    La carta natal es fija. Son los{" "}
                    <Link href="/transits" className="underline decoration-white/30 hover:decoration-white/60 transition">
                      tránsitos planetarios
                    </Link>{" "}
                    (los movimientos actuales de los planetas) y la{" "}
                    <Link href="/revolution-solaire" className="underline decoration-white/30 hover:decoration-white/60 transition">
                      revolución solar
                    </Link>{" "}
                    los que permiten analizar las tendencias futuras — pero
                    nunca son predicciones fatalistas.
                  </p>
                </Card>

                <Card title="¿Se pueden comparar dos cartas natales?" icon="❤️">
                  <p>
                    ¡Sí! Es lo que se llama{" "}
                    <Link href="/synastrie" className="underline decoration-white/30 hover:decoration-white/60 transition">
                      sinastría
                    </Link>{" "}
                    : se superponen dos cartas para analizar la compatibilidad,
                    las zonas de complementariedad y los puntos de fricción.
                    El artículo{" "}
                    <Link href="/blog/amour-fidelite-signes-zodiaque" className="underline decoration-white/30 hover:decoration-white/60 transition">
                      amor y fidelidad según los signos
                    </Link>{" "}
                    da una primera visión general.
                  </p>
                </Card>

                <Card title="Y las finanzas, ¿se pueden ver?" icon="💰">
                  <p>
                    Sí, principalmente a través de la casa II{" "}
                    (recursos, valores) y la casa VIII{" "}
                    (dinero compartido, herencias). El artículo sobre las finanzas en una carta natal{" "}
                    lo detalla todo.
                  </p>
                </Card>
              </div>
            </section>




            <section className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <p className="text-sm text-text/60">¿Quieres continuar?</p>
              <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
                <p className="text-text/85">
                  Continuación lógica: comprender tu signo y tu ascendente.
                </p>
                <Link
                  href="/blog"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-text/90 transition hover:bg-white/10"
                >
                  Todos los artículos
                </Link>
              </div>
            </section>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-sm text-text/60">Plan del curso</p>
              <ul className="mt-3 space-y-2 text-text/85">
                <li>• Definición sencilla</li>
                <li>• Los 4 bloques</li>
                <li>• Método de lectura</li>
                <li>• Límites y errores</li>
                <li>• FAQ</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-sm text-text/60">Para recordar</p>
              <p className="mt-2 text-text/85 leading-relaxed">
                Una carta natal es una <strong>estructura</strong>: explica{" "}
                <strong>cómo</strong> funcionas, no "lo que va a pasar".
              </p>
            </div>


          </aside>
        </div>
      </div>
    </>
  );
}
