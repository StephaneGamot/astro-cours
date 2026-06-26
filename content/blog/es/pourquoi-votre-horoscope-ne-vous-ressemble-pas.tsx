import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { TagPillsInline, getGlowFromTags } from "../ui";
import { AUTHOR_PERSON, PUBLISHER_ORG } from "@/lib/seo";

/* ================================================================== */
/*  META / SEO                                                        */
/* ================================================================== */
export const meta = {
  slug: "pourquoi-votre-horoscope-ne-vous-ressemble-pas",
  title:
    "Por qué tu horóscopo no se te parece",
  description:
    "¿No te reconoces en tu horóscopo diario? Descubre por qué solo tu carta natal revela quién eres en verdad.",
  date: "2026-04-20",
  tags: [
    "thème astral",
    "signe solaire",
    "ascendant",
    "lune",
    "planètes",
    "horoscope",
    "débutant",
    "bases",
  ],
  readingLevel: "débutant" as const,
  cover: "/images/blog/horoscope-ne-vous-ressemble-pas.webp",
};

const SITE_URL = "https://www.astro-cours.com";
const ARTICLE_URL = `${SITE_URL}/blog/${meta.slug}`;

/* ================================================================== */
/*  COMPONENTES LOCALES                                               */
/* ================================================================== */
function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-300">
      <span
        className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-300"
        aria-hidden="true"
      />
      {children}
    </span>
  );
}

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-6 flex items-center font-serif text-2xl font-light text-white sm:text-3xl md:text-4xl">
      <span
        className="mr-4 block h-px w-8 bg-gradient-to-r from-sky-400/60 to-transparent"
        aria-hidden="true"
      />
      {children}
    </h2>
  );
}

function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-serif text-xl font-medium text-white/90 sm:text-2xl">
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
      box: "border-red-500/30 bg-red-500/10 shadow-[0_0_30px_rgba(239,68,68,0.06)]",
      icon: "text-red-300",
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
      box: "border-sky-400/25 bg-sky-400/10 shadow-[0_0_30px_rgba(56,189,248,0.05)]",
      icon: "text-sky-200",
      svg: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  };
  const current = styles[tone];

  return (
    <aside
      aria-label={title}
      className={`relative overflow-hidden rounded-2xl border p-5 backdrop-blur-md sm:p-6 ${current.box}`}
    >
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-current opacity-30 to-transparent" />
      <div className={`mb-3 flex items-center gap-3 font-serif text-base font-medium sm:text-lg ${current.icon}`}>
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
    <section className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md transition-colors hover:bg-white/[0.05] sm:rounded-3xl sm:p-7">
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
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-sm transition-all hover:border-sky-300/30 sm:p-5">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-300/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <p className="text-[0.65rem] uppercase tracking-widest text-white/50 sm:text-xs">{label}</p>
      <p className="mt-1.5 font-serif text-lg text-white/90 sm:mt-2 sm:text-xl">{value}</p>
    </div>
  );
}

function Divider() {
  return <hr className="my-10 border-t border-white/10 sm:my-12" aria-hidden="true" />;
}

function PlanetRow({
  planet,
  role,
  example,
}: {
  planet: string;
  role: string;
  example: string;
}) {
  return (
    <div className="group grid grid-cols-1 border-b border-white/10 transition-colors hover:bg-sky-300/[0.03] md:grid-cols-3">
      <div className="px-3 py-3 font-serif text-base text-sky-200/90 sm:px-4 sm:py-4 sm:text-lg">{planet}</div>
      <div className="px-3 py-3 text-sm leading-relaxed text-white/80 sm:px-4 sm:py-4">{role}</div>
      <div className="px-3 py-3 text-sm leading-relaxed text-white/80 sm:px-4 sm:py-4">{example}</div>
    </div>
  );
}

function MythCard({
  myth,
  reality,
  tone,
}: {
  myth: string;
  reality: string;
  tone: "rose" | "sky" | "amber" | "emerald" | "violet";
}) {
  const colors = {
    rose: "border-rose-400/20 bg-rose-500/[0.06] hover:border-rose-400/30",
    sky: "border-sky-400/20 bg-sky-500/[0.06] hover:border-sky-400/30",
    amber: "border-amber-400/20 bg-amber-500/[0.06] hover:border-amber-400/30",
    emerald: "border-emerald-400/20 bg-emerald-500/[0.06] hover:border-emerald-400/30",
    violet: "border-violet-400/20 bg-violet-500/[0.06] hover:border-violet-400/30",
  };
  const dots = {
    rose: "bg-rose-400",
    sky: "bg-sky-400",
    amber: "bg-amber-400",
    emerald: "bg-emerald-400",
    violet: "bg-violet-400",
  };
  return (
    <div className={`rounded-xl border p-4 transition-colors sm:p-5 ${colors[tone]}`}>
      <div className="flex items-center gap-2">
        <span className={`h-2 w-2 rounded-full ${dots[tone]}`} aria-hidden />
        <p className="font-serif text-base font-semibold text-white/90 sm:text-lg">&laquo;&nbsp;{myth}&nbsp;&raquo;</p>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-white/60">{reality}</p>
    </div>
  );
}

/* ================================================================== */
/*  ARTÍCULO                                                          */
/* ================================================================== */
export default function HoroscopeNeVousRessemblePasPost() {
  const glow = getGlowFromTags(meta.tags);

  return (
    <article className="mx-auto max-w-4xl space-y-10 pb-20 pt-8 text-white sm:space-y-12">
      {/* ── Schema.org ── */}
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
                "@id": ARTICLE_URL,
              },
              inLanguage: "es",
              keywords: meta.tags.join(", "),
              articleSection: "Astrología",
              wordCount: 3800,
              about: [
                { "@type": "Thing", name: "Astrología" },
                { "@type": "Thing", name: "Carta natal" },
                { "@type": "Thing", name: "Horóscopo" },
                { "@type": "Thing", name: "Signo solar" },
                { "@type": "Thing", name: "Ascendente" },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Por qué no me reconozco en mi signo del zodíaco?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Tu signo solar representa solo una fracción de tu identidad astrológica. Tu ascendente, la posición de tu Luna, de Mercurio, Venus, Marte y los planetas lentos, las casas ocupadas y los aspectos entre planetas crean un retrato infinitamente más matizado que el signo solar por sí solo, el único que utilizan los horóscopos generalistas.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuál es la diferencia entre signo solar y ascendente?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "El signo solar corresponde a la posición del Sol en el momento de tu nacimiento y representa tu identidad profunda, tu ego. El ascendente es el signo que se elevaba en el horizonte este en el instante preciso de tu nacimiento. Define tu máscara social, tu apariencia y la manera en que los demás te perciben. Cambia de signo aproximadamente cada dos horas.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Tiene el horóscopo del periódico algún valor astrológico?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "El horóscopo generalista divide a la humanidad en 12 grupos basados únicamente en el signo solar. Es una simplificación extrema que no tiene en cuenta ni el ascendente, ni la Luna, ni los planetas personales, ni las casas. Para un astrólogo serio, se trata de un entretenimiento, no de astrología.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuál es el papel de la Luna en la carta natal?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La Luna representa tus emociones, tus necesidades afectivas, tu relación con la madre y con la seguridad interior. Colorea profundamente tu manera de reaccionar, de amar y de sentirte a salvo. En muchos casos, la Luna influye más en la vivencia cotidiana que el propio signo solar.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuántos factores componen una carta natal completa?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Una carta natal completa comprende 10 planetas (entre ellos el Sol y la Luna), 12 signos, 12 casas, el ascendente, el Medio Cielo, los nodos lunares, los aspectos entre planetas (conjunción, sextil, cuadratura, trígono, oposición) y eventualmente los puntos ficticios como Lilith. Esto representa cientos de combinaciones posibles, lo que hace que cada carta sea tan única como una huella dactilar.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Puedo estar más marcado por mi ascendente que por mi signo solar?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Por supuesto. Cuando varios planetas se encuentran en el signo del ascendente o en la casa I, o cuando el regente del ascendente es muy dominante en la carta, la persona se identifica a menudo más con su ascendente que con su signo solar. Es una de las razones más frecuentes del desajuste que se siente con el horóscopo.",
                  },
                },
              ],
            },
            {
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
            },
          ]),
        }}
      />

      {/* ── Header ── */}
      <header className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6 shadow-2xl backdrop-blur-xl sm:rounded-[2.5rem] sm:p-8 md:p-12">
        <div
          className={`pointer-events-none absolute -right-24 -top-24 h-[500px] w-[500px] rounded-full opacity-30 mix-blend-screen blur-[100px] ${glow}`}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-sky-300/5 blur-[80px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-violet-500/5"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <Kicker>Signo solar &bull; Ascendente &bull; Luna &bull; Carta natal &bull; Verdad</Kicker>

          <h2 className="mt-4 font-serif text-2xl font-light leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
            Por qué este Horóscopo diario no te habla&nbsp;:{" "}
            <span className="bg-gradient-to-r from-sky-400 via-violet-400 to-emerald-300 bg-clip-text text-transparent">
              la Verdad oculta detrás de tu Signo
            </span>
          </h2>

          <div className="mt-6 flex flex-wrap gap-2 text-sm text-white/70 sm:gap-3">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs backdrop-blur-md sm:px-4 sm:py-1.5 sm:text-sm">
              Lectura principiante
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs backdrop-blur-md sm:px-4 sm:py-1.5 sm:text-sm">
              Fundamentos de la astrología
            </span>
            <span className="rounded-full border border-sky-400/20 bg-sky-500/10 px-3 py-1 text-xs text-sky-200 backdrop-blur-md sm:px-4 sm:py-1.5 sm:text-sm">
              Carta natal completa
            </span>
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-white/70 sm:mt-8 sm:text-base sm:leading-relaxed lg:text-lg">
            &laquo;&nbsp;Soy Géminis pero no me reconozco en absoluto.&nbsp;&raquo;
            Esta frase, todos los astrólogos la escuchan. Y con razón: el horóscopo
            que lees cada mañana representa solo una doceava parte de lo que
            eres realmente. Descubre por qué tu signo solar es un resumen
            demasiado simplista, y cómo tu carta natal completa cuenta una historia infinitamente
            más rica &mdash; la tuya.
          </p>

          <div className="mt-6 border-t border-white/5 pt-5 sm:mt-8 sm:pt-6">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      {/* ── Stats ── */}
      <section className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4" aria-label="Puntos clave">
        <Stat label="Planetas en una carta" value="10" />
        <Stat label="Casas astrológicas" value="12" />
        <Stat label="Aspectos posibles" value="50+" />
        <Stat label="Combinaciones únicas" value="&infin;" />
      </section>

      {/* ── Definición (Featured Snippet) ── */}
      <section className="rounded-2xl border border-amber-400/25 bg-amber-400/5 p-5 sm:p-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-400 mb-3">Definición</p>
        <p className="text-sm leading-relaxed text-white/80 md:text-base">
          El <strong>horóscopo</strong> se basa únicamente en el signo solar, mientras que la <strong><Link href="/blog/qu-est-ce-qu-un-theme-astral" className="text-amber-300 underline decoration-amber-300/30 underline-offset-2 transition-colors hover:text-amber-200">carta natal</Link></strong> tiene en cuenta la posición de todos los planetas, el ascendente, las casas y los aspectos. Por eso la mayoría de la gente no se reconoce en su horóscopo diario.
        </p>
      </section>

      {/* ── APP intro ── */}
      <p className="text-sm leading-relaxed text-white/80 md:text-base">
        ¿Lees tu <strong>horóscopo</strong> cada mañana y no encuentras absolutamente nada de ti en él? No eres el único — y, sobre todo, no te equivocas. El problema es que el horóscopo reduce tu identidad a un solo signo de doce. Esta guía te muestra por qué tu <strong>carta natal completa</strong> es la única clave fiable de tu personalidad astrológica.
      </p>

      {/* ================================================================ */}
      {/*  PARTE 1 — EL MALENTENDIDO FUNDAMENTAL                          */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>Por qué no eres &laquo;&nbsp;solo&nbsp;&raquo; tu signo solar</H2>

        <Card title="El Horóscopo, un invento reciente" subtitle="Cómo una herramienta de entretenimiento se convirtió en el rostro de la astrología">
          <p>
            La mayoría de la gente confunde <strong className="text-white/90">astrología</strong> con <strong className="text-white/90">horóscopo</strong>. Es un poco como confundir la medicina con el consejo de salud impreso en el reverso de una caja de cereales. El horóscopo tal como lo conocemos hoy &mdash; esas pocas líneas ordenadas por signo en los periódicos &mdash; es un invento de los años treinta. Fue el astrólogo británico R.&nbsp;H.&nbsp;Naylor quien, en el <em>Sunday Express</em>, tuvo la idea de dividir a la humanidad en 12&nbsp;grupos basados únicamente en el signo solar para crear una sección accesible al gran público.
          </p>
          <p>
            Antes de eso, la astrología nunca había funcionado así. Durante milenios, de Babilonia al Renacimiento, un astrólogo establecía una carta completa &mdash; una instantánea precisa del cielo en el momento exacto y en el lugar exacto del nacimiento. Ningún astrólogo serio habría reducido a una persona a su signo solar por sí solo. Era impensable.
          </p>
          <p>
            El problema es que esta versión simplificada funcionó tan bien comercialmente que se convirtió, en el imaginario colectivo, en <em>la astrología misma</em>. Resultado: millones de personas juzgan una disciplina milenaria a través de un filtro que no es más que una caricatura de ella. Y cuando no se reconocen en ella, en lugar de cuestionar el filtro, rechazan la astrología entera.
          </p>
        </Card>

        <Card title="El Signo solar: importante, pero no soberano" subtitle="Un actor mayor entre diez">
          <p>
            Tu signo astrológico &mdash; el que conoces, el que das cuando te lo preguntan &mdash; corresponde a la posición del <Link href="/planetes/soleil" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Sol</Link> en el zodíaco en el momento de tu nacimiento. Es tu <strong className="text-white/90">signo solar</strong>. Y es, sin duda, importante: el Sol representa tu identidad profunda, tu voluntad, tu ego, la dirección que tu alma busca tomar en esta vida.
          </p>
          <p>
            Pero imagina una orquesta sinfónica en la que solo escucharas el primer violín. Sería hermoso, ciertamente &mdash; pero te perderías los metales, las maderas, las percusiones, los contrabajos. Perderías la riqueza de la armonía, las tensiones entre los instrumentos, los silencios que dan aliento a la melodía. Tu signo solar es ese primer violín: esencial, pero incompleto.
          </p>
          <p>
            En una carta natal, diez planetas ocupan cada uno un signo y una casa, y tejen entre sí una red de aspectos (ángulos geométricos) que crean armonías o tensiones. Es el conjunto de esta partitura celeste lo que te hace ser <em>tú</em> &mdash; no un solo instrumento tocado en solitario.
          </p>
        </Card>

        <Callout tone="note" title="¿Lo sabías?">
          <p>
            Dos personas nacidas el mismo día pero con unas pocas horas de diferencia pueden tener un ascendente completamente distinto, una Luna en otro signo y las casas reorganizadas. Su vivencia, su personalidad y su destino serán radicalmente diferentes &mdash; pese a un signo solar idéntico.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTE 2 — LAS VERDADERAS CAPAS DE TU IDENTIDAD                 */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>Las distintas capas de tu identidad astrológica</H2>

        <Card title="El Ascendente: la Máscara y el Filtro" subtitle="Lo que el mundo ve primero">
          <p>
            El <Link href="/maisons/maison-1" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">ascendente</Link> es quizá el factor más subestimado de la astrología popular &mdash; y, sin embargo, es determinante. Corresponde al signo que se elevaba en el horizonte este en el instante preciso de tu nacimiento. Como cambia de signo aproximadamente cada dos horas, exige conocer tu hora de nacimiento exacta &mdash; un dato que el horóscopo de la mañana nunca te pedirá.
          </p>
          <p>
            El ascendente desempeña un triple papel. Primero, define tu <strong className="text-white/90">apariencia física y tu porte</strong>: la manera en que entras en una sala, tu gestualidad, la impresión que produces a primera vista. Luego, actúa como un <strong className="text-white/90">filtro de percepción</strong>: tiñe la manera en que aprehendes el mundo, en que reaccionas espontáneamente ante los acontecimientos. Por último, <strong className="text-white/90">organiza todas las casas de tu carta</strong>, redistribuyendo los planetas en los distintos sectores de tu vida.
          </p>
          <p>
            Tomemos un ejemplo concreto. Un Sol en Cáncer (sensible, protector, volcado hacia el hogar) con un ascendente Capricornio dará una persona que, a primera impresión, parece fría, reservada, muy profesional. Si esa persona lee el horóscopo de Cáncer &mdash; que le habla de sensibilidad, de refugio y de emociones &mdash; no se reconoce en él, porque el mundo no la ve así, y porque ella misma ha aprendido a filtrar sus emociones a través de la rigidez capricorniana de su ascendente.
          </p>
          <p>
            Por eso muchos astrólogos recomiendan leer el horóscopo del ascendente en lugar del signo solar. Pero incluso ese truco sigue siendo una simplificación: no hace más que reemplazar una pieza del rompecabezas por otra.
          </p>
        </Card>

        <Card title="La Luna: tu Paisaje interior" subtitle="La emoción que te habita cuando nadie te mira">
          <p>
            Si el Sol es lo que aspiras a ser y el ascendente lo que muestras, la <Link href="/planetes/lune" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Luna</Link> es lo que <em>sientes</em>. Representa tus emociones profundas, tus reflejos afectivos, tus necesidades de seguridad, tu relación con la madre, con la comida, con el confort. La Luna eres tú a las 3&nbsp;de la madrugada, cuando caen las máscaras.
          </p>
          <p>
            Y es precisamente ahí donde el desajuste con el horóscopo se vuelve evidente. Un Sol en Aries (lanzarse, dirigir, conquistar) con una Luna en Piscis (soñar, absorber, compadecer) es una persona profundamente paradójica: en apariencia un guerrero, en realidad un poeta que llora ante una película. El horóscopo de Aries le hablará de coraje y de audacia, pero nunca tocará esa fibra íntima, acuática, soñadora que constituye la mitad de su ser.
          </p>
          <p>
            La posición de la Luna en signo es tan importante como el signo solar &mdash; y en la vida cotidiana lo es probablemente <em>más</em>, pues gobierna las reacciones automáticas, los hábitos, el confort emocional. Si tienes la impresión de vivir desajustado con tu signo, busca tu Luna: hay muchas probabilidades de que sea la pieza que falta del rompecabezas.
          </p>
        </Card>

        <Card title="Mercurio, Venus, Marte: los Planetas personales" subtitle="Tu manera de pensar, de amar y de actuar">
          <p>
            Más allá del trío Sol-Luna-Ascendente, tres planetas personales colorean de manera muy concreta tu día a día. <Link href="/planetes/mercure" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Mercurio</Link> gobierna tu inteligencia, tu comunicación, tu humor. <Link href="/planetes/venus" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Venus</Link> reina sobre tus gustos, tu estética, tu manera de amar y de atraer. <Link href="/planetes/mars" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Marte</Link> determina tu energía, tu combatividad, tu deseo y tu manera de pasar a la acción.
          </p>
          <p>
            Estos tres planetas no están necesariamente en el mismo signo que tu Sol. Un Tauro con Mercurio en Géminis hablará deprisa, con ingenio y ligereza &mdash; en las antípodas del estereotipo taurino lento y silencioso. Un Escorpio con Venus en Libra será, en el amor, de una dulzura, una diplomacia y una elegancia que nadie asocia espontáneamente con Escorpio. Un Piscis con Marte en Capricornio desplegará una disciplina y una ambición que contradicen totalmente la imagen de soñador pasivo que se le suele atribuir.
          </p>
          <p>
            Cada uno de estos planetas aporta un <em>matiz</em> determinante. Y como Mercurio y Venus nunca se alejan demasiado del Sol, se encuentran a menudo en el signo anterior o siguiente &mdash; creando ya, por sí solos, un desajuste significativo con la descripción &laquo;&nbsp;pura&nbsp;&raquo; de tu signo.
          </p>
        </Card>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTE 3 — LA TABLA DE LOS PLANETAS                             */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>¿Qué revela cada planeta en tu carta natal?</H2>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md">
          {/* Header */}
          <div className="grid grid-cols-1 border-b border-white/15 bg-white/[0.04] md:grid-cols-3">
            <div className="px-3 py-3 text-xs font-bold uppercase tracking-widest text-sky-200 sm:px-4 sm:py-4">Planeta</div>
            <div className="px-3 py-3 text-xs font-bold uppercase tracking-widest text-sky-200 sm:px-4 sm:py-4">Lo que representa</div>
            <div className="px-3 py-3 text-xs font-bold uppercase tracking-widest text-sky-200 sm:px-4 sm:py-4">Ejemplo de desajuste</div>
          </div>
          <PlanetRow planet="Sol &#x2609;" role="Identidad, ego, voluntad, dirección de vida" example="Un Sol Leo discreto si está conjunto a Saturno" />
          <PlanetRow planet="Luna &#x263D;" role="Emociones, necesidades, madre, seguridad" example="Un Sol Acuario frío pero una Luna Cáncer ultrasensible" />
          <PlanetRow planet="Ascendente" role="Máscara social, apariencia, filtro del mundo" example="Un Sol Piscis soñador pero un ASC Virgo metódico" />
          <PlanetRow planet="Mercurio &#x263F;" role="Pensamiento, comunicación, humor" example="Un Sol Tauro sereno pero un Mercurio Géminis parlanchín" />
          <PlanetRow planet="Venus &#x2640;" role="Amor, estética, valores, gustos" example="Un Sol Escorpio intenso pero una Venus Libra dulce" />
          <PlanetRow planet="Marte &#x2642;" role="Acción, deseo, energía, combatividad" example="Un Sol Libra pacífico pero un Marte Aries explosivo" />
          <PlanetRow planet="Júpiter &#x2643;" role="Expansión, suerte, filosofía, exceso" example="Júpiter en la XII: crecimiento por la interioridad" />
          <PlanetRow planet="Saturno &#x2644;" role="Estructura, límites, madurez, lecciones" example="Saturno conjunto al Sol: gravedad precoz" />
          <PlanetRow planet="Urano" role="Originalidad, rebelión, destellos de genio" example="Urano en la I: personalidad atípica, eléctrica" />
          <PlanetRow planet="Neptuno &#x2646;" role="Imaginación, espiritualidad, ilusión" example="Neptuno conjunto al ASC: aura difusa, escurridiza" />
          <PlanetRow planet="Plutón &#x2647;" role="Transformación, poder, regeneración" example="Plutón en la I: mirada magnética, presencia intensa" />
        </div>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTE 4 — LAS CASAS                                            */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>Las 12 casas astrológicas: el decorado de tu vida</H2>

        <Card title="12 Escenas, 12 Ámbitos de Vida" subtitle="Dónde tus planetas representan su papel">
          <p>
            Si los signos son el <em>cómo</em> (de qué manera una energía se expresa), las casas son el <em>dónde</em> (en qué ámbito de la vida se manifiesta). Las 12&nbsp;casas astrológicas dividen tu existencia en sectores: la identidad, las finanzas, la comunicación, el hogar, la creatividad, el trabajo, las relaciones, la transformación, los viajes, la carrera, las amistades, el inconsciente.
          </p>
          <p>
            Cuando tu Sol está en Leo pero en la <Link href="/maisons/maison-12" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">casa XII</Link> (el inconsciente, el retiro, la espiritualidad), tu resplandor solar no se expresa en el centro del escenario. Brillas en la sombra, en la ayuda discreta, en la meditación, en el arte solitario. El horóscopo de Leo, que te habla de focos y de aplausos, te parecerá totalmente ajeno.
          </p>
          <p>
            A la inversa, un Sol en Piscis en la <Link href="/maisons/maison-10" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">casa X</Link> (la carrera, la reputación pública) empujará a ese Piscis soñador hacia una visibilidad profesional inesperada. No será el Piscis apagado de los clichés, sino un artista, un terapeuta o un creativo públicamente reconocido. La casa transforma la expresión del signo.
          </p>
        </Card>

        <Callout tone="ok" title="Consejo de lectura">
          <p>
            Para entender por qué tu horóscopo no te habla, identifica en qué casa cae tu Sol. Un Sol en casa I se parecerá mucho a la descripción clásica del signo. Un Sol en casa IV, VII o XII se vivirá de manera muy distinta, porque la energía solar se canaliza hacia ámbitos específicos de tu vida, no hacia tu personalidad visible.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTE 5 — LOS ASPECTOS                                         */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>Los aspectos planetarios: cuando tus planetas dialogan</H2>

        <Card title="La Partitura secreta de la Carta natal" subtitle="Armonías, tensiones y contradicciones interiores">
          <p>
            Los aspectos son los ángulos formados entre dos planetas en tu carta. Un <Link href="/blog/conjonction-melange-des-forces" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">aspecto</Link> como el trígono (120&deg;) crea una fluidez natural entre dos energías. Una cuadratura (90&deg;) genera una tensión, un conflicto interior que empuja a la acción. Una oposición (180&deg;) confronta dos partes de ti que parecen irreconciliables.
          </p>
          <p>
            Estos aspectos explican a menudo por qué una persona no corresponde a su signo. Un Sol en Sagitario (optimismo, expansión, libertad) en cuadratura con Saturno será un Sagitario frenado, disciplinado, a veces ansioso &mdash; en las antípodas de la imagen del aventurero despreocupado. Un Sol en Virgo (discreción, análisis, modestia) conjunto a Júpiter se convertirá en un Virgo expansivo, generoso, ambicioso &mdash; muy lejos del estereotipo maniático y encerrado en sus hojas de cálculo de Excel.
          </p>
          <p>
            Los aspectos son la clave más fina de la personalización de tu carta. Son ellos los que hacen que dos Escorpios, dos Tauros o dos Géminis puedan ser radicalmente diferentes. El horóscopo no puede tenerlos en cuenta &mdash; para ello habría que conocer la posición de cada planeta de cada lector, lo que equivale a establecer una carta completa.
          </p>
        </Card>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTE 6 — LA DOMINANTE PLANETARIA                              */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>La dominante planetaria: tu firma astrológica profunda</H2>

        <Card title="Más allá del Signo, el Planeta que te define" subtitle="El concepto menos conocido &mdash; y el más revelador">
          <p>
            La dominante planetaria es un concepto central de la astrología tradicional francesa, popularizado por autores como Jean-Pierre Nicola y André Barbault. La idea es simple: en toda carta natal, uno o dos planetas se destacan por su posición (angular, en domicilio, fuertemente aspectado) y colorean el conjunto de la personalidad más que el propio signo solar.
          </p>
          <p>
            Hemos dedicado artículos enteros a cada dominante planetaria &mdash; el <Link href="/blog/solarien" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Solariano</Link>, el <Link href="/blog/lunarien" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Lunariano</Link>, el <Link href="/blog/mercurien" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Mercuriano</Link>, el <Link href="/blog/venusien" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Venusiano</Link>, el <Link href="/blog/martien" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Marciano</Link>, el <Link href="/blog/jupiterien" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Jupiteriano</Link>, el <Link href="/blog/saturnien" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Saturniano</Link>, el <Link href="/blog/uranien" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Uraniano</Link>, el <Link href="/blog/neptunien" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Neptuniano</Link>, el <Link href="/blog/plutonien" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Plutoniano</Link>. Si no te reconoces en tu signo, intenta determinar tu dominante planetaria. Es muy probable que acabes diciéndote: &laquo;&nbsp;Ah, <em>eso</em> sí soy yo.&nbsp;&raquo;
          </p>
          <p>
            Por ejemplo, una persona con un Sol en Virgo pero una dominante Neptuno (Neptuno angular, aspectado a varios planetas, en Piscis o en la casa XII) se reconocerá mucho más en la descripción del <Link href="/blog/neptunien" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">tipo Neptuniano</Link> &mdash; soñador, intuitivo, artístico, difuso &mdash; que en la del Virgo analítico y pragmático.
          </p>
          <p>
            Y más allá de la dominante planetaria, el cielo también señala un <Link href="/signes-dominants" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">signo dominante</Link> &mdash; el color de conjunto de tu carta, a menudo distinto de tu signo solar. A veces es ese signo, y no el Sol, el que por fin se te parece.
          </p>
        </Card>

        <Callout tone="warn" title="Cuidado con la trampa">
          <p>
            Determinar una dominante planetaria exige una lectura completa de la carta. No te fíes de un solo factor (como el planeta más cercano al ascendente). Hay que cruzar la posición en signo, en casa, la regencia, los aspectos recibidos y la dignidad esencial. Es un ejercicio que requiere práctica &mdash; o el acompañamiento de un astrólogo competente.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTE 7 — MITOS Y REALIDADES                                   */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>Mitos sobre la astrología: las ideas preconcebidas que hay que olvidar</H2>

        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          <MythCard
            myth="Soy Aries, así que soy agresivo"
            reality="Solo si Marte es dominante y está en aspecto tenso. Un Aries con Venus conjunta al Sol puede ser de una dulzura desarmante."
            tone="rose"
          />
          <MythCard
            myth="Los Piscis son todos soñadores y perdidos"
            reality="Un Piscis con Saturno dominante o un ascendente Capricornio será hiperestructurado, pragmático y ambicioso. El signo no lo hace todo."
            tone="sky"
          />
          <MythCard
            myth="Los Virgo son maniáticos y aburridos"
            reality="Una Virgo con Urano conjunto al Sol será original, inventiva, anticonformista. Un Neptuno fuerte le añadirá una dimensión artística y visionaria."
            tone="emerald"
          />
          <MythCard
            myth="Los Géminis son superficiales"
            reality="Un Géminis con Plutón aspectando a Mercurio tendrá una profundidad psicológica temible. La Luna en Escorpio le añadirá una intensidad emocional insospechada."
            tone="amber"
          />
          <MythCard
            myth="Los Tauro detestan el cambio"
            reality="Un Tauro con varios planetas en signos mutables o un Urano dominante será curioso, adaptable y enamorado de la novedad."
            tone="violet"
          />
          <MythCard
            myth="Los Escorpio son sombríos y vengativos"
            reality="Un Escorpio con Júpiter dominante o Venus en Sagitario será generoso, risueño, optimista y apasionadamente enamorado de la libertad."
            tone="rose"
          />
        </div>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTE 8 — CASOS CONCRETOS                                      */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>Ejemplos concretos: cuando la carta contradice al signo solar</H2>

        <Card title="Marie, Sol Tauro &mdash; pero nada de un Tauro clásico" subtitle="Un caso de manual en consulta">
          <p>
            Marie llega a consulta diciendo: &laquo;&nbsp;Soy <Link href="/signes/taureau" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Tauro</Link>, pero soy todo menos estable. Cambio de trabajo, de ciudad, de relación. Me aburro enseguida. La astrología es un disparate.&nbsp;&raquo; Al mirar su carta, todo se aclara.
          </p>
          <p>
            Su ascendente está en Sagitario (necesidad de movimiento, de descubrimiento, de horizonte). Su Luna está en Géminis (curiosidad insaciable, necesidad de estimulación intelectual). Su Marte está en Acuario (independencia feroz, gusto por la experimentación). Y su Sol Tauro está en la casa VI &mdash; el ámbito del trabajo cotidiano, no de la identidad visible.
          </p>
          <p>
            El Tauro está ahí, pero se expresa en su relación con el trabajo: Marie necesita condiciones materiales cómodas, un salario seguro, una oficina agradable. Es el único ámbito en el que busca la estabilidad. Para el resto, su naturaleza está dominada por el fuego, el aire y el movimiento &mdash; energías que el horóscopo de Tauro nunca captará.
          </p>
        </Card>

        <Card title="Thomas, Sol Cáncer &mdash; y ninguna sensibilidad aparente" subtitle="El peso de Saturno y del ascendente">
          <p>
            Thomas se describe como &laquo;&nbsp;racional, distante, poco emocional.&nbsp;&raquo; Detesta las efusiones y las demostraciones afectivas. Cuando le dicen que es Cáncer &mdash; el signo de la sensibilidad, de la madre, del hogar &mdash; se ríe: &laquo;&nbsp;Para nada soy yo.&nbsp;&raquo;
          </p>
          <p>
            Su carta revela un ascendente <Link href="/signes/capricorne" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Capricornio</Link>, con Saturno conjunto al Sol. Esta configuración actúa como un muro de piedra alrededor de la sensibilidad canceriana. Las emociones están ahí, intensas, profundas, pero encerradas tras un dique saturniano construido desde la infancia. La Luna en Acuario lo confirma: la necesidad emocional se intelectualiza, se distancia, se mantiene a una distancia de seguridad.
          </p>
          <p>
            Thomas <em>es</em> Cáncer. Pero lo es de manera invisible, subterránea, protegida. Su sensibilidad se manifiesta en su lealtad inquebrantable hacia sus seres queridos, en su impresionante memoria emocional, en su capacidad para sentir cuándo alguien no está bien. Pero nunca lo mostrará abiertamente. Saturno vela.
          </p>
        </Card>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTE 9 — ¿Y AHORA QUÉ?                                        */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>Cómo leer tu verdadero retrato astrológico</H2>

        <Card title="Los Pasos para reconocerte por fin" subtitle="Una guía práctica para ir más allá del signo">
          <p>
            Si este artículo te ha hablado, así es como puedes ir más allá. Empieza por calcular tu <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">carta natal completa</Link>. Necesitarás tu fecha de nacimiento, tu hora de nacimiento (lo más precisa posible, idealmente al cuarto de hora) y tu lugar de nacimiento.
          </p>
          <p>
            Una vez que tengas tu carta en la mano, localiza los siguientes elementos, por orden de prioridad. Primero, <strong className="text-white/90">tu ascendente y su regente</strong>: el signo del ascendente y el planeta que lo gobierna te dicen a menudo más que tu signo solar. Luego, <strong className="text-white/90">tu Luna</strong>: identifica su signo y su casa para comprender tu vida emocional profunda. Después, <strong className="text-white/90">Mercurio y Venus</strong>: son las claves de tu comunicación y de tu afectividad. Por último, <strong className="text-white/90">los aspectos mayores a tu Sol</strong>: ¿son armónicos o tensos? Un Sol conjunto a Saturno o en cuadratura con Neptuno no se expresará como un Sol libre de todo aspecto.
          </p>
          <p>
            Y si quieres ir aún más lejos, explora tu <strong className="text-white/90">dominante planetaria</strong>. Es ella la que, a menudo, guarda la clave de esa impresión de desajuste. Cuando uno descubre su dominante, es como encontrar el género musical adecuado para describir su vida: todo cobra de pronto sentido.
          </p>
        </Card>

        <Card title="Por qué esta comprensión lo cambia todo" subtitle="La astrología como espejo, no como etiqueta">
          <p>
            El verdadero interés de la astrología nunca ha sido predecir el futuro ni clasificar a la gente en cajones. Su genio reside en su capacidad de ofrecer un <em>espejo simbólico</em> de una precisión perturbadora &mdash; un espejo que no te dice quién debes ser, sino que te invita a reconocer quién ya eres.
          </p>
          <p>
            Cuando pasas de &laquo;&nbsp;soy Aries&nbsp;&raquo; a &laquo;&nbsp;tengo un Sol Aries en casa IX, con una Luna en Cáncer, un ascendente Libra, Venus conjunta a Neptuno y Marte en Capricornio&nbsp;&raquo;, dejas de reducir tu identidad a una sola palabra. Descubres un paisaje, una partitura, una arquitectura interior. Y en ese paisaje, cada contradicción, cada paradoja, cada tensión tiene su lugar y su razón de ser.
          </p>
          <p>
            El horóscopo de tu periódico no se te parece. Es normal. Porque no eres una doceava parte de la humanidad. Eres una combinación única, una disposición irrepetible de planetas, signos, casas y aspectos que nunca existirá dos veces en la historia del universo. Y eso, ningún horóscopo podrá capturarlo en tres líneas.
          </p>
        </Card>

        <Callout tone="ok" title="En resumen">
          <p>
            Tu signo solar es una puerta de entrada, no una casa. Para encontrarte, explora tu ascendente, tu Luna, tus planetas personales, tus casas y tus aspectos. Es ahí, en esa complejidad, donde se encuentra por fin el retrato que se te parece.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* ── FAQ visible ── */}
      <section className="space-y-6">
        <H2>Preguntas frecuentes sobre el horóscopo y la carta natal</H2>

        <Card title="¿Por qué no me reconozco en mi signo del zodíaco?">
          <p>
            Tu signo solar representa solo una fracción de tu identidad astrológica. Tu ascendente, la posición de tu Luna, de Mercurio, Venus, Marte y los planetas lentos, las casas ocupadas y los aspectos entre planetas crean un retrato infinitamente más matizado que el signo solar por sí solo, el único que utilizan los horóscopos generalistas.
          </p>
        </Card>

        <Card title="¿Cuál es la diferencia entre signo solar y ascendente?">
          <p>
            El signo solar corresponde a la posición del Sol en el momento de tu nacimiento y representa tu identidad profunda. El ascendente es el signo que se elevaba en el horizonte este en el instante preciso de tu nacimiento. Define tu máscara social, tu apariencia y la manera en que los demás te perciben. Cambia de signo aproximadamente cada dos horas.
          </p>
        </Card>

        <Card title="¿Tiene el horóscopo del periódico algún valor astrológico?">
          <p>
            El horóscopo generalista divide a la humanidad en 12 grupos basados únicamente en el signo solar. Es una simplificación extrema que no tiene en cuenta ni el ascendente, ni la Luna, ni los planetas personales, ni las casas. Para un astrólogo serio, se trata de un entretenimiento, no de astrología.
          </p>
        </Card>

        <Card title="¿Puedo estar más marcado por mi ascendente que por mi signo solar?">
          <p>
            Por supuesto. Cuando varios planetas se encuentran en el signo del ascendente o en la casa I, o cuando el regente del ascendente es muy dominante en la carta, la persona se identifica a menudo más con su ascendente que con su signo solar. Es una de las razones más frecuentes del desajuste que se siente con el horóscopo.
          </p>
        </Card>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTE 10 — PARA PROFUNDIZAR                                    */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>Para profundizar en tu carta natal</H2>

        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          <Link
            href="/blog/qu-est-ce-qu-un-theme-astral"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:bg-white/[0.06] sm:p-6"
          >
            <p className="font-serif text-lg text-white/90 transition-colors group-hover:text-sky-200">
              ¿Qué es una carta natal?
            </p>
            <p className="mt-2 text-sm text-white/50">
              Las bases para comprender el mapa de tu cielo de nacimiento.
            </p>
          </Link>

          <Link
            href="/blog/comprendre-signe-astrologique-ascendant-12-exemples"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:bg-white/[0.06] sm:p-6"
          >
            <p className="font-serif text-lg text-white/90 transition-colors group-hover:text-sky-200">
              Comprender tu signo y tu ascendente
            </p>
            <p className="mt-2 text-sm text-white/50">
              La diferencia entre estos dos pilares de tu identidad astrológica.
            </p>
          </Link>

          <Link
            href="/blog/venus-en-signes-style-amoureux"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:bg-white/[0.06] sm:p-6"
          >
            <p className="font-serif text-lg text-white/90 transition-colors group-hover:text-sky-200">
              Venus en signo: tu estilo amoroso
            </p>
            <p className="mt-2 text-sm text-white/50">
              Descubre cómo Venus colorea tu manera de amar.
            </p>
          </Link>

          <Link
            href="/blog/mars-en-signes-desir-libido-action"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:bg-white/[0.06] sm:p-6"
          >
            <p className="font-serif text-lg text-white/90 transition-colors group-hover:text-sky-200">
              Marte en signo: deseo, energía, acción
            </p>
            <p className="mt-2 text-sm text-white/50">
              Tu manera de lanzarte, de desear y de afirmarte.
            </p>
          </Link>
        </div>
      </section>
    </article>
  );
}
