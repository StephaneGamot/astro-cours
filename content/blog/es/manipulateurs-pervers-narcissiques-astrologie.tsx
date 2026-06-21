import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { TagPillsInline, getGlowFromTags } from "../ui";
import { AUTHOR_PERSON, PUBLISHER_ORG } from "@/lib/seo";

/* ================================================================== */
/*  META / SEO                                                        */
/* ================================================================== */
export const meta = {
  slug: "manipulateurs-pervers-narcissiques-astrologie",
  title:
    "Narcisistas perversos: indicios astrológicos",
  description:
    "Cómo la astrología ayuda a detectar los perfiles manipuladores y narcisistas perversos en una carta natal. Aprende a identificar los indicios clave.",
  date: "2026-04-16",
  tags: [
    "psychologie astrologique",
    "manipulation",
    "pervers narcissique",
    "Pluton",
    "Neptune",
    "aspects",
    "thème astral",
    "relations",
    "protection",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/manipulateurs-pn.webp",
};

/* ================================================================== */
/*  COMPOSANTS LOCAUX                                                 */
/* ================================================================== */
function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-violet-300">
      <span
        className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-300"
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
        className="mr-4 block h-px w-8 bg-gradient-to-r from-violet-400/60 to-transparent"
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
      box: "border-violet-400/25 bg-violet-400/10 shadow-[0_0_30px_rgba(139,92,246,0.05)]",
      icon: "text-violet-200",
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
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-sm transition-all hover:border-violet-300/30 sm:p-5">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-300/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <p className="text-[0.65rem] uppercase tracking-widest text-white/50 sm:text-xs">{label}</p>
      <p className="mt-1.5 font-serif text-lg text-white/90 sm:mt-2 sm:text-xl">{value}</p>
    </div>
  );
}

function Divider() {
  return <hr className="my-10 border-t border-white/10 sm:my-12" aria-hidden="true" />;
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
    <div className="group grid grid-cols-1 border-b border-white/10 transition-colors hover:bg-violet-300/[0.03] md:grid-cols-3">
      <div className="px-3 py-3 font-serif text-base text-violet-200/90 sm:px-4 sm:py-4 sm:text-lg">{title}</div>
      <div className="px-3 py-3 text-sm leading-relaxed text-white/80 sm:px-4 sm:py-4">{effect}</div>
      <div className="px-3 py-3 text-sm leading-relaxed text-white/80 sm:px-4 sm:py-4">{reading}</div>
    </div>
  );
}

function SignCard({
  sign,
  why,
  tone,
}: {
  sign: string;
  why: string;
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
        <p className="font-serif text-base font-semibold text-white/90 sm:text-lg">{sign}</p>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-white/60">{why}</p>
    </div>
  );
}

/* ================================================================== */
/*  ARTICLE                                                           */
/* ================================================================== */
export default function ManipulateursPNPost() {
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
              wordCount: 4500,
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Se puede ver a un narcisista perverso en una carta natal?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La astrología no diagnostica un trastorno psiquiátrico. En cambio, ciertas configuraciones planetarias — en particular Plutón, Neptuno y Lilith en aspectos tensos a los luminares — señalan tendencias manipuladoras, una necesidad de control excesiva o una dificultad para respetar los límites de los demás.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué planetas se relacionan con la manipulación en astrología?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Plutón (poder, control, dominio), Neptuno (ilusión, mentira, confusión) y en menor medida Lilith (transgresión de los límites) son los principales marcadores. Un Marte afligido puede añadir una dimensión de agresividad y dominación.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué perfiles astrológicos atraen a los narcisistas perversos?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Los perfiles con una fuerte dominante de Neptuno o de la Luna (empatía, receptividad, sacrificio), así como Venus o el Sol en signos de agua o en Piscis, son particularmente blanco. El narcisista busca una fuente de energía emocional — le atraen las personalidades luminosas, empáticas y generosas.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Puede la astrología proteger de un manipulador?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La astrología es una herramienta de conciencia, no un escudo mágico. Al identificar en la propia carta las zonas de vulnerabilidad (Neptuno potente, Luna frágil, casa XII cargada) y los tránsitos desencadenantes, se pueden anticipar los periodos de fragilidad emocional y reforzar los propios límites.",
                  },
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
          className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-violet-300/5 blur-[80px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-rose-500/5"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <Kicker>Plutón &bull; Neptuno &bull; Dominio &bull; Protección &bull; Conciencia</Kicker>

          <h2 className="mt-4 font-serif text-2xl font-light leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
            Manipuladores y Narcisistas Perversos&nbsp;:{" "}
            <span className="bg-gradient-to-r from-violet-400 via-rose-400 to-amber-300 bg-clip-text text-transparent">
              Reconocerlos gracias a la Astrología
            </span>
          </h2>

          <div className="mt-6 flex flex-wrap gap-2 text-sm text-white/70 sm:gap-3">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs backdrop-blur-md sm:px-4 sm:py-1.5 sm:text-sm">
              Lectura intermedia
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs backdrop-blur-md sm:px-4 sm:py-1.5 sm:text-sm">
              Psicología astrológica
            </span>
            <span className="rounded-full border border-rose-400/20 bg-rose-500/10 px-3 py-1 text-xs text-rose-200 backdrop-blur-md sm:px-4 sm:py-1.5 sm:text-sm">
              Relaciones tóxicas
            </span>
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-white/70 sm:mt-8 sm:text-base sm:leading-relaxed lg:text-lg">
            La astrología no establece un diagnóstico clínico. Pero ofrece una luz
            poderosa sobre los mecanismos de poder, de dominio y de fascinación que
            ciertos individuos ejercen sobre quienes los rodean. Este artículo explora
            las firmas planetarias de los perfiles manipuladores, los blancos que
            prefieren y las herramientas que la carta natal pone a nuestra
            disposición para protegernos.
          </p>

          <div className="mt-6 border-t border-white/5 pt-5 sm:mt-8 sm:pt-6">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      {/* ── Stats ── */}
      <section className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4" aria-label="Puntos clave">
        <Stat label="Planeta clave" value="Plutón" />
        <Stat label="Planeta cómplice" value="Neptuno" />
        <Stat label="Terreno de caza" value="Casas VII &amp; VIII" />
        <Stat label="Escudo" value="Saturno &amp; Luna" />
      </section>

      {/* ── Définition (Featured Snippet) ── */}
      <section className="rounded-2xl border border-red-400/25 bg-red-400/5 p-5 sm:p-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-red-400 mb-3">Definición</p>
        <p className="text-sm leading-relaxed text-white/80 md:text-base">
          La <strong>astrología y los manipuladores narcisistas</strong>: la carta natal permite identificar ciertas configuraciones planetarias (Plutón-Luna, Neptuno disonante, <Link href="/planetes/pluton" className="text-red-300 underline decoration-red-300/30 underline-offset-2 transition-colors hover:text-red-200">Plutón</Link> en <Link href="/maisons/maison-7" className="text-red-300 underline decoration-red-300/30 underline-offset-2 transition-colors hover:text-red-200">casa VII</Link>) que señalan una vulnerabilidad al dominio o, a la inversa, tendencias manipuladoras. La astrología no acusa a nadie, pero ilumina las dinámicas relacionales.
        </p>
      </section>

      {/* ── APP intro ── */}
      <p className="text-sm leading-relaxed text-white/80 md:text-base">
        ¿Sales de una relación tóxica y te preguntas si tu <strong>carta natal</strong> podía ponerte sobre aviso? Los <strong>narcisistas perversos en astrología</strong> dejan firmas planetarias identificables: configuraciones Plutón-Luna, Neptuno disonante, aspectos de dominación. Esta guía analiza los indicadores astrológicos del dominio, los perfiles vulnerables y las herramientas de protección que tu carta encierra.
      </p>

      {/* ================================================================ */}
      {/*  PARTIE 1 — COMPRENDRE                                          */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>Astrología y manipulación: por qué la carta natal no acusa a nadie</H2>

        <Card title="Una brújula, no un veredicto">
          <p>
            Es esencial establecer un marco claro desde el principio. La astrología es una herramienta simbólica de conocimiento de uno mismo y de observación de las dinámicas relacionales. No tiene ni la pretensión ni la legitimidad de reemplazar un diagnóstico psiquiátrico o psicológico. Una carta natal no convierte a un individuo en un &laquo;&nbsp;narcisista perverso&nbsp;&raquo; &mdash; ese término designa un trastorno de la personalidad reconocido por la psiquiatría, y solo un profesional de la salud mental está capacitado para establecer ese diagnóstico.
          </p>
          <p>
            Dicho esto, la astrología pone de relieve <strong className="text-white/90">tendencias</strong>, <strong className="text-white/90">potencialidades</strong> y <strong className="text-white/90">patrones energéticos</strong> que, cuando no se hacen conscientes, pueden expresarse de formas destructivas. Ahí reside precisamente su valor: ofrece una clave de lectura para reconocer los mecanismos antes de que causen estragos.
          </p>
          <p>
            El objetivo de este artículo no es señalar culpables entre los signos del zodiaco, sino comprender las configuraciones planetarias que favorecen los comportamientos manipuladores &mdash; y, sobre todo, identificar en tu propia carta las zonas de vulnerabilidad que podrían volverte sensible a este tipo de personalidad.
          </p>
        </Card>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTIE 2 — LES PLANÈTES DE L'EMPRISE                          */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>¿Qué planetas revelan una tendencia manipuladora?</H2>

        <Card title="Plutón: el Maestro del Poder invisible" subtitle="El planeta de la transformación... o de la destrucción">
          <p>
            Plutón es el planeta clave cuando se aborda el tema de la manipulación. Regente de Escorpio, gobernador de la casa VIII (la muerte simbólica, las crisis, las herencias emocionales, la sexualidad profunda), Plutón encarna el poder en su forma más cruda.
          </p>
          <p>
            En su expresión elevada, Plutón es la capacidad de transformación interior, la resiliencia, el renacimiento tras la prueba. Es el fénix que renace de sus cenizas. Pero en su expresión oscura, Plutón se convierte en obsesión por el control, dominación psicológica, chantaje emocional y fascinación por el poder sobre los demás.
          </p>
          <p>
            Un Plutón fuertemente aspectado en una carta natal &mdash; en conjunción con el Sol, la Luna, Venus o el Ascendente &mdash; confiere una intensidad magnética innegable. La persona atrae, fascina, hipnotiza. Este poder de fascinación es precisamente la herramienta principal del manipulador. La mirada plutoniana es penetrante, la intuición quirúrgica: detecta instintivamente las grietas del otro y sabe exactamente dónde presionar para obtener lo que quiere.
          </p>
          <p>
            Los aspectos tensos de Plutón (cuadratura, oposición) a los luminares o a Venus indican una gestión problemática del poder en las relaciones íntimas. El nativo puede oscilar entre dos polos: controlar al otro o ser controlado por él. Es el terreno del dominio.
          </p>
        </Card>

        <Card title="Neptuno: el Gran Ilusionista" subtitle="El arte de difuminar la realidad">
          <p>
            Si Plutón controla, Neptuno hechiza. Regente de Piscis y de la casa XII, Neptuno reina sobre lo imaginario, la ilusión, la disolución de las fronteras y el sacrificio. En su expresión armoniosa, Neptuno es la compasión universal, el arte, la espiritualidad, la poesía. Pero en su sombra, Neptuno es la mentira disfrazada de sueño, la confusión deliberada, el gaslighting cósmico.
          </p>
          <p>
            El manipulador neptuniano no opera por la fuerza. Seduce con la neblina. Crea un mundo paralelo en el que la víctima pierde sus referencias: &laquo;&nbsp;Lo soñaste&nbsp;&raquo;, &laquo;&nbsp;Te imaginas cosas&nbsp;&raquo;, &laquo;&nbsp;No es eso lo que dije&nbsp;&raquo;. Todas estas frases son firmas neptunianas. La víctima acaba dudando de su propia percepción de la realidad.
          </p>
          <p>
            Un Neptuno en aspecto duro al Sol, a Mercurio o a la Luna en la carta del manipulador señala una capacidad natural de alterar la verdad sin siquiera darse cuenta a veces &mdash; de tan interiorizada que está la neblina neptuniana. La mentira se vuelve una segunda naturaleza, un reflejo de supervivencia emocional que se vuelve contra quienes lo rodean.
          </p>
        </Card>

        <Card title="Lilith: la Transgresión de los Límites" subtitle="El punto de rebelión absoluta">
          <p>
            Lilith (la Luna negra) no es un planeta sino un punto ficticio de la carta natal. Representa lo que uno se niega a someter, la zona de rebelión absoluta, el deseo crudo no negociable. Bien vivida, Lilith es la afirmación de uno mismo más allá de las convenciones. Mal vivida, es la transgresión sistemática de los límites de los demás.
          </p>
          <p>
            Una Lilith conjunta al Sol, a Marte o a Plutón refuerza considerablemente los mecanismos de dominación. El nativo puede ejercer una seducción turbia, perturbadora, que mezcla atracción e incomodidad &mdash; una firma frecuente entre los perfiles que se califican de &laquo;&nbsp;tóxicos&nbsp;&raquo; en el lenguaje corriente.
          </p>
        </Card>

        <Card title="Marte afligido: la Violencia como Herramienta" subtitle="Cuando la acción se transforma en agresión">
          <p>
            Marte, en su expresión sana, es el valor, la iniciativa, la capacidad de defender los propios límites. Pero un Marte en aspectos muy tensos (cuadratura u oposición a Plutón, cuadratura a Saturno, conjunción a Lilith) puede producir una agresividad fría y calculada, una violencia verbal o psicológica utilizada como instrumento de control.
          </p>
          <p>
            La combinación Marte-Plutón en tensión es particularmente reveladora. Confiere una voluntad de poder que, si no se canaliza (deporte, empresa, compromiso), se vuelve contra los allegados en forma de dominación, intimidación o cóleras frías y devastadoras.
          </p>
        </Card>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTIE 3 — LES ASPECTS RÉVÉLATEURS                             */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>Aspectos planetarios y dominio: las configuraciones a vigilar</H2>

        <Card title="Tabla de aspectos a vigilar">
          <div className="overflow-hidden rounded-xl border border-white/10">
            <div className="hidden border-b border-white/15 bg-white/[0.04] md:grid md:grid-cols-3">
              <div className="p-4 text-xs font-semibold uppercase tracking-widest text-white/60">Aspecto</div>
              <div className="p-4 text-xs font-semibold uppercase tracking-widest text-white/60">Dinámica</div>
              <div className="p-4 text-xs font-semibold uppercase tracking-widest text-white/60">Expresión oscura</div>
            </div>
            <TableRow
              title="Plutón &#9744; Sol"
              effect="Lucha de poder con la identidad profunda"
              reading="Ego desmesurado, necesidad de control absoluto, incapacidad de compartir el poder"
            />
            <TableRow
              title="Plutón &#9744; Luna"
              effect="Control emocional, dominio sobre lo íntimo"
              reading="Manipulación afectiva, chantaje sentimental, celos devoradores"
            />
            <TableRow
              title="Plutón &#9744; Venus"
              effect="Pasión obsesiva, posesión"
              reading="Amor tóxico, sexualidad usada como arma, destrucción de la autoestima del otro"
            />
            <TableRow
              title="Neptuno &#9744; Mercurio"
              effect="Confusión de la comunicación"
              reading="Mentira crónica, doble discurso, gaslighting"
            />
            <TableRow
              title="Neptuno &#9744; Sol"
              effect="Identidad difusa, máscara permanente"
              reading="Mitomanía, falso-yo construido, incapacidad de autenticidad"
            />
            <TableRow
              title="Marte &#9744; Plutón"
              effect="Voluntad de poder extrema"
              reading="Violencia psicológica fría, intimidación, necesidad de aplastar al otro"
            />
            <TableRow
              title="Lilith conj. Sol"
              effect="Rebelión identitaria absoluta"
              reading="Seducción depredadora, transgresión de los límites, rechazo de toda regla relacional"
            />
          </div>

          <p className="mt-4 text-xs italic text-white/50 sm:text-sm">
            &#9744; = cuadratura u oposición. Un solo aspecto nunca basta para concluir. Es la repetición del tema &laquo;&nbsp;poder-control-ilusión&nbsp;&raquo; en varios puntos de la carta lo que crea el patrón.
          </p>
        </Card>

        <Callout tone="warn" title="Atención: un aspecto ≠ un diagnóstico">
          <p>
            Tener una cuadratura Plutón-Sol no te convierte en un narcisista perverso. Millones de personas llevan este aspecto y viven vidas perfectamente sanas. La expresión de un aspecto depende de la <strong className="text-white/90">educación</strong>, del <strong className="text-white/90">libre albedrío</strong>, del <strong className="text-white/90">trabajo personal</strong> y del <strong className="text-white/90">nivel de conciencia</strong> del nativo. La astrología muestra el potencial, no la fatalidad.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTIE 4 — LES MAISONS IMPLIQUÉES                             */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>¿En qué casas astrológicas se juega el dominio?</H2>

        <Card title="Casa VII: el Espejo del Otro">
          <p>
            La casa VII es la casa de las asociaciones, las alianzas y la pareja. Es el terreno de la relación con el otro por excelencia. Cuando Plutón transita o se encuentra natalmente en casa VII, la dinámica relacional es intensa, pasional, a menudo marcada por juegos de poder.
          </p>
          <p>
            Un Plutón en VII puede indicar un nativo que atrae sistemáticamente parejas dominantes o manipuladoras &mdash; o, en la versión proyectada, un nativo que él mismo ejerce un dominio sobre sus parejas sin tener conciencia de ello. La casa VII es un espejo: lo que se ve en el otro suele ser lo que uno se niega a ver en sí mismo.
          </p>
          <p>
            Neptuno en casa VII produce otro tipo de peligro: la idealización de la pareja. El nativo proyecta sobre el otro una imagen soñada, se niega a ver las señales de alerta, excusa comportamientos inaceptables en nombre del &laquo;&nbsp;amor incondicional&nbsp;&raquo;. Es el terreno ideal para un manipulador.
          </p>
        </Card>

        <Card title="Casa VIII: la Arena de las Crisis íntimas">
          <p>
            La casa VIII es el dominio de la muerte simbólica, las transformaciones profundas, la sexualidad, el dinero de los demás y las herencias psicológicas. Es una casa de agua, profunda y a menudo inconsciente.
          </p>
          <p>
            Una concentración planetaria en casa VIII (sobre todo si implica a Plutón, Marte o Neptuno) señala dinámicas relacionales intensas donde el poder, la sexualidad y el dinero se entrelazan. El manipulador con una casa VIII potente usará estas tres palancas &mdash; a menudo de forma simultánea &mdash; para asentar su dominio.
          </p>
        </Card>

        <Card title="Casa XII: los Enemigos ocultos">
          <p>
            La casa XII se llama tradicionalmente la &laquo;&nbsp;casa de los enemigos ocultos&nbsp;&raquo;. Representa el inconsciente colectivo, el karma, el autosabotaje y todo lo que opera en la sombra. Una casa XII cargada (varios planetas) en la carta de una víctima de un narcisista puede indicar una vulnerabilidad a los enemigos invisibles, a las traiciones sordas y a las trampas emocionales.
          </p>
          <p>
            A la inversa, un manipulador con planetas fuertes en XII destaca en el arte de operar entre bastidores, de mover los hilos sin aparecer nunca directamente, de negar toda responsabilidad invocando las circunstancias o las emociones del otro.
          </p>
        </Card>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTIE 5 — LES SIGNES ET LE PN                                */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>¿Qué signos solares tienen tendencias manipuladoras?</H2>

        <Card title="Preámbulo indispensable">
          <p>
            Repitámoslo con fuerza: <strong className="text-white/90">ningún signo del zodiaco produce narcisistas perversos</strong>. El signo solar por sí solo representa solo una fracción de la carta natal. Son los aspectos, las dominantes planetarias y la experiencia vivida del nativo los que determinan la expresión de un potencial.
          </p>
          <p>
            Dicho esto, ciertos signos, <em>cuando los planetas descritos arriba están afligidos</em>, presentan modos operativos característicos que merecen conocerse para reconocerlos mejor.
          </p>
        </Card>

        <Card title="Los modos operativos por elemento">
          <p className="text-white/60 italic">
            Recordatorio: aquí se trata de la expresión oscura de cada elemento, no de su expresión general.
          </p>

          <div className="mt-4 space-y-5">
            <div>
              <p className="font-serif text-lg text-rose-300">Fuego <span className="text-sm text-white/40">(Aries, Leo, Sagitario)</span></p>
              <p className="mt-1">
                El manipulador de Fuego opera por el <strong className="text-white/90">brillo</strong>. Impone su versión de la realidad por la fuerza de su personalidad, mediante cóleras espectaculares o un carisma tan deslumbrante que uno acaba dudando de su propia percepción. Un Leo afligido puede desarrollar un narcisismo flamante: el mundo es un escenario y los demás solo son figurantes al servicio de su gloria.
              </p>
            </div>

            <div>
              <p className="font-serif text-lg text-amber-300">Tierra <span className="text-sm text-white/40">(Tauro, Virgo, Capricornio)</span></p>
              <p className="mt-1">
                El manipulador de Tierra opera por el <strong className="text-white/90">control material</strong>. El dinero, la vivienda, los recursos prácticos se vuelven palancas de dominio. Un Capricornio afligido puede ejercer una dominación fría, metódica, casi administrativa, donde el otro queda progresivamente aislado y vuelto dependiente. El Tauro oscuro puede desarrollar una posesividad absoluta: el otro se vuelve un objeto, una propiedad.
              </p>
            </div>

            <div>
              <p className="font-serif text-lg text-sky-300">Aire <span className="text-sm text-white/40">(Géminis, Libra, Acuario)</span></p>
              <p className="mt-1">
                El manipulador de Aire opera por el <strong className="text-white/90">verbo</strong>. Destaca en el doble discurso, la retórica, la reescritura de la historia. Un Géminis afligido puede pasar de una máscara a otra con una facilidad desconcertante, encantando a cada interlocutor de manera diferente. La Libra oscura usa la apariencia de armonía como una trampa: todo parece perfecto en la superficie mientras el dominio se instala en lo profundo.
              </p>
            </div>

            <div>
              <p className="font-serif text-lg text-emerald-300">Agua <span className="text-sm text-white/40">(Cáncer, Escorpio, Piscis)</span></p>
              <p className="mt-1">
                El manipulador de Agua opera por la <strong className="text-white/90">emoción</strong>. Explota la culpa, la lástima, la deuda afectiva. El Escorpio afligido es el más temido: su conocimiento instintivo del alma humana le permite tocar los puntos débiles con una precisión quirúrgica. El Cáncer oscuro usa a la víctima que lleva dentro para invertir los papeles: es él quien sufre, eres tú quien es culpable. El Piscis afligido ahoga al otro en una niebla emocional donde ya nada es claro.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTIE 6 — LES PROFILS CIBLÉS                                 */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>¿Qué perfiles astrológicos atraen a los narcisistas perversos?</H2>

        <Card title="El terreno de caza del manipulador" subtitle="La energía de la que se nutre">
          <p>
            El narcisista perverso no elige a sus víctimas al azar. Le atraen instintivamente las personalidades que poseen aquello de lo que carece cruelmente: la <strong className="text-white/90">luz emocional</strong>, la <strong className="text-white/90">empatía auténtica</strong>, la <strong className="text-white/90">generosidad natural</strong>. En términos astrológicos, busca una fuente de energía emocional inagotable &mdash; alguien que dará sin medida, perdonará sin cesar y dudará de sí mismo antes de dudar del otro.
          </p>
          <p>
            Estos son los perfiles astrológicos más frecuentemente blanco:
          </p>
        </Card>

        <div className="grid gap-3 sm:grid-cols-2">
          <SignCard
            sign="Dominante Luna / Cáncer"
            why="Empatía natural, necesidad de nutrir al otro, culpa fácil, dificultad para poner límites. La Luna busca la fusión emocional &mdash; el narcisista la convierte en una trampa."
            tone="sky"
          />
          <SignCard
            sign="Dominante Neptuno / Piscis"
            why="Compasión sin fondo, tendencia al sacrificio, idealización de la pareja, percepción difusa de los límites. Neptuno quiere salvar al otro &mdash; el narcisista se presenta como un alma en apuros."
            tone="violet"
          />
          <SignCard
            sign="Venus en Piscis / en XII"
            why="Amor sacrificial, romanticismo absoluto, creencia de que el amor puede curarlo todo. Venus en exaltación lo da todo sin condición &mdash; el narcisista lo toma todo sin devolver nada."
            tone="rose"
          />
          <SignCard
            sign="Sol o Luna en casa XII"
            why="Vulnerabilidad a los enemigos ocultos, tendencia al autosabotaje, dificultad para percibirse con claridad. El nativo puede no ver cómo se instala el dominio."
            tone="amber"
          />
          <SignCard
            sign="Dominante Venus / Libra"
            why="Necesidad de armonía a toda costa, horror al conflicto, tendencia a ceder para preservar la paz. Libra prefiere doblarse que romperse &mdash; el narcisista explota este miedo a la ruptura."
            tone="emerald"
          />
          <SignCard
            sign="Júpiter en aspecto a Venus"
            why="Generosidad sin medida, fe en el otro, optimismo que impide ver las señales de alerta. Júpiter amplifica la benevolencia &mdash; el narcisista se nutre de ella."
            tone="amber"
          />
        </div>

        <Callout tone="note" title="Un perfil sensible no es un perfil débil">
          <p>
            Ser empático, generoso o soñador no es un defecto. Son cualidades magníficas que hacen de ti un ser profundamente humano. El problema nunca es la sensibilidad &mdash; es la <strong className="text-white/90">ausencia de límites</strong>. La astrología te ayuda precisamente a identificar dónde reforzar esos límites en tu carta.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTIE 7 — LES TRANSITS DÉCLENCHEURS                          */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>Tránsitos planetarios y dominio: cuando el cielo te fragiliza</H2>

        <Card title="Periodos de vulnerabilidad">
          <p>
            Incluso una carta natal sólidamente construida puede atravesar periodos de fragilidad. Los tránsitos planetarios crean ventanas temporales donde las defensas naturales se bajan. Conocer estos periodos es poder anticipar y redoblar la vigilancia.
          </p>

          <ul className="mt-3 space-y-3">
            <li>
              <strong className="text-violet-300">Tránsito de Plutón sobre la Luna natal:</strong> periodo de profunda conmoción emocional. El nativo busca inconscientemente la transformación a través del otro &mdash; terreno ideal para un encuentro tóxico que promete el renacimiento.
            </li>
            <li>
              <strong className="text-sky-300">Tránsito de Neptuno sobre la Venus natal:</strong> el discernimiento amoroso está en su punto más bajo. El nativo idealiza, proyecta, se niega a ver la realidad. Suele ser bajo este tránsito cuando uno se enamora perdidamente de una ilusión.
            </li>
            <li>
              <strong className="text-amber-300">Tránsito de Saturno en casa VII:</strong> periodo de soledad, de balance relacional doloroso. El miedo a estar solo puede empujar a aceptar a cualquier pareja, incluido un manipulador.
            </li>
            <li>
              <strong className="text-rose-300">Tránsito de Plutón en casa VII u VIII:</strong> el llamado hacia las relaciones intensas, transformadoras. El peligro es confundir intensidad con amor, pasión con dominio.
            </li>
            <li>
              <strong className="text-emerald-300">Eclipse sobre el eje I-VII:</strong> los eclipses sobre el eje relacional traen encuentros kármicos, cierres y aperturas bruscas. Es un momento bisagra donde la vigilancia es necesaria.
            </li>
          </ul>
        </Card>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTIE 8 — SE PROTÉGER                                        */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>Cómo protegerse de un manipulador gracias a la astrología</H2>

        <Card title="Saturno: el Guardián de las Fronteras" subtitle="Tu mejor aliado contra el dominio">
          <p>
            Si Plutón es el planeta del dominio, <strong className="text-white/90">Saturno es el de la protección</strong>. Saturno encarna el límite, la estructura, el marco, el &laquo;&nbsp;no&nbsp;&raquo; firme y definitivo. Un Saturno bien aspectado en la carta &mdash; sobre todo en relación con la Luna, Venus o el Ascendente &mdash; confiere una capacidad natural de poner límites sanos.
          </p>
          <p>
            Reforzar el propio Saturno es aprender a decir no sin culpa, a observar antes de comprometerse, a exigir la reciprocidad como condición no negociable de una relación. En astrología práctica, esto equivale a conocer la posición de Saturno en la propia carta y a cultivar conscientemente sus cualidades: discernimiento, paciencia, exigencia sana.
          </p>
        </Card>

        <Card title="Reforzar la propia Luna" subtitle="El centro emocional">
          <p>
            La Luna representa nuestra vulnerabilidad emocional, nuestro niño interior, nuestra necesidad de seguridad. Una Luna frágil (Luna en Capricornio, en XII, en cuadratura a Plutón o a Saturno) es un punto de entrada privilegiado para el manipulador, porque indica una necesidad de amor a menudo ligada a heridas antiguas.
          </p>
          <p>
            Reforzar la propia Luna es cuidar el propio equilibrio emocional <em>antes</em> de confiárselo a una pareja. Es construir un espacio interior seguro que no dependa de la validación del otro. En concreto, esto pasa por la terapia, la meditación, el trabajo sobre las heridas familiares &mdash; y por una conciencia clara de la posición y los aspectos de la propia Luna natal.
          </p>
        </Card>

        <Card title="Las Señales de Alerta en una Sinastría">
          <p>
            En sinastría (comparación de dos cartas), ciertos contactos planetarios deben despertar la vigilancia:
          </p>
          <ul className="mt-3 space-y-2">
            <li><strong className="text-white/90">El Plutón de uno conjunto a la Venus o la Luna del otro:</strong> fascinación magnética, riesgo de dominio emocional. La atracción es irresistible pero la relación de fuerzas está desequilibrada.</li>
            <li><strong className="text-white/90">El Neptuno de uno sobre el Sol del otro:</strong> idealización masiva. Uno hechiza, el otro se disuelve. La relación puede parecer mágica al principio y luego volverse confusa y agotadora.</li>
            <li><strong className="text-white/90">La Lilith de uno sobre el Marte del otro:</strong> tensión sexual poderosa, dinámica de dominación-sumisión que puede escapar al control consciente.</li>
            <li><strong className="text-white/90">El Saturno de uno sobre la Luna del otro:</strong> si Saturno está mal aspectado, la relación puede volverse un corsé emocional donde uno asfixia al otro bajo la apariencia de &laquo;&nbsp;protección&nbsp;&raquo;.</li>
          </ul>
          <p>
            Estos contactos no condenan la relación. Pero exigen una conciencia aguda de las dinámicas en juego y una comunicación abierta sobre las relaciones de poder.
          </p>
        </Card>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTIE 9 — LE CYCLE DE L'EMPRISE                              */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>Las 4 fases del dominio narcisista vistas por la astrología</H2>

        <Card title="Las tres fases planetarias">
          <div className="space-y-5">
            <div>
              <p className="font-serif text-lg text-violet-300">Fase 1 &mdash; La Seducción (Neptuno)</p>
              <p className="mt-1">
                El ciclo comienza siempre con una fase neptuniana. El manipulador crea un mundo ideal, un capullo donde todo parece perfecto. Es el love bombing: cumplidos excesivos, atención desmesurada, promesas grandiosas. La víctima queda sumergida por un tsunami de emociones positivas y pierde sus referencias habituales. Neptuno disuelve las fronteras: uno se da por entero, se fusiona, olvida dónde termina el &laquo;&nbsp;yo&nbsp;&raquo; y dónde comienza el &laquo;&nbsp;nosotros&nbsp;&raquo;.
              </p>
            </div>

            <div>
              <p className="font-serif text-lg text-rose-300">Fase 2 &mdash; La Desestabilización (Plutón)</p>
              <p className="mt-1">
                Una vez instalada la dependencia emocional, Plutón entra en escena. La máscara cae progresivamente. Aparecen las críticas, sutiles al principio, luego cada vez más frecuentes. El silencio punitivo alterna con las cóleras frías. La víctima se encuentra en hipervigilancia permanente, buscando desesperadamente recuperar a la &laquo;&nbsp;buena&nbsp;&raquo; pareja de la fase 1. Es la mordedura plutoniana: el control se instala por el miedo a perder el amor prometido.
              </p>
            </div>

            <div>
              <p className="font-serif text-lg text-amber-300">Fase 3 &mdash; La Destrucción / Renacimiento (Marte-Plutón)</p>
              <p className="mt-1">
                La fase final es marte-plutoniana. El dominio alcanza su paroxismo: aislamiento social, destrucción de la autoestima, violencia psicológica (a veces física). La víctima ya no se reconoce. Pero es también ahí &mdash; paradoja plutoniana &mdash; donde puede sobrevenir el renacimiento. El punto de ruptura suele desencadenarlo un tránsito mayor (Urano, Plutón o un eclipse) que rompe el ciclo y libera al nativo del dominio.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTIE 10 — GUÉRIR                                            */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>Tras el dominio: reconstrucción y resiliencia en la carta natal</H2>

        <Card title="Los tránsitos de liberación">
          <p>
            Tras la prueba de una relación tóxica, la carta natal también contiene las llaves de la curación. Ciertos tránsitos facilitan la reconstrucción:
          </p>
          <ul className="mt-3 space-y-2">
            <li><strong className="text-emerald-300">Tránsito de Júpiter sobre la Luna o el Ascendente:</strong> renovación emocional, confianza recuperada, sensación de expansión y de protección.</li>
            <li><strong className="text-emerald-300">Tránsito de Saturno en trígono a Venus o a la Luna:</strong> una capacidad renovada de estructurar las propias emociones, de elegir con discernimiento. Los límites se vuelven sanos y naturales.</li>
            <li><strong className="text-emerald-300">Tránsito de Urano sobre Venus o el Ascendente:</strong> liberación súbita, toma de conciencia electrizante. El nativo se redescubre, se atreve a la independencia, rompe definitivamente con los viejos patrones.</li>
            <li><strong className="text-emerald-300">Tránsito de Plutón en sextil o trígono al Sol:</strong> transformación profunda pero constructiva. El nativo integra la experiencia vivida y sale de ella reforzado, más lúcido, más anclado en su identidad.</li>
          </ul>
        </Card>

        <Card title="Quirón: la Herida que cura" subtitle="El sanador herido de la carta natal">
          <p>
            Quirón, el asteroide del &laquo;&nbsp;sanador herido&nbsp;&raquo;, desempeña un papel esencial en la reconstrucción tras un dominio. Su posición en la carta natal indica la naturaleza de la herida fundamental &mdash; y el camino de la curación.
          </p>
          <p>
            Un Quirón en casa VII señala que la herida pasa por la relación con el otro. La curación vendrá precisamente de la capacidad de construir relaciones sanas, equilibradas y respetuosas &mdash; empezando por la relación con uno mismo.
          </p>
          <p>
            Un Quirón en casa VIII indica que la herida toca la intimidad, el poder compartido, la confianza profunda. La reconstrucción pasará por un trabajo terapéutico sobre los patrones de dependencia emocional y la reconquista del propio poder interior.
          </p>
        </Card>

        <Callout tone="ok" title="Tienes derecho a sanar">
          <p>
            Si te reconoces en estas descripciones &mdash; ya sea como víctima o como portador de ciertos aspectos descritos &mdash; debes saber que la conciencia es el primer paso. La astrología no condena a nadie: ilumina los mecanismos para superarlos mejor. Si atraviesas una situación de dominio, no dudes en consultar a un profesional de la salud mental.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* ── FAQ visible ── */}
      <section className="space-y-6">
        <H2>Preguntas frecuentes: astrología y manipulación narcisista</H2>

        <Card title="¿Se puede ver a un narcisista perverso en una carta natal?">
          <p>
            La astrología no diagnostica un trastorno psiquiátrico. En cambio, ciertas configuraciones planetarias &mdash; en particular Plutón, Neptuno y Lilith en aspectos tensos a los luminares &mdash; señalan tendencias manipuladoras, una necesidad de control excesiva o una dificultad para respetar los límites de los demás.
          </p>
        </Card>

        <Card title="¿Qué planetas se relacionan con la manipulación en astrología?">
          <p>
            <Link href="/planetes/pluton" className="text-violet-300 underline decoration-violet-300/30 underline-offset-2 transition-colors hover:text-violet-200">Plutón</Link> (poder, control, dominio), Neptuno (ilusión, mentira, confusión) y en menor medida Lilith (transgresión de los límites) son los principales marcadores. Un Marte afligido puede añadir una dimensión de agresividad y dominación.
          </p>
        </Card>

        <Card title="¿Qué perfiles astrológicos atraen a los narcisistas perversos?">
          <p>
            Los perfiles con una fuerte dominante de Neptuno o de la Luna (empatía, receptividad, sacrificio), así como Venus o el Sol en signos de agua o en Piscis, son particularmente blanco. El narcisista busca una fuente de energía emocional &mdash; le atraen las personalidades luminosas, empáticas y generosas.
          </p>
        </Card>

        <Card title="¿Puede la astrología proteger de un manipulador?">
          <p>
            La astrología es una herramienta de conciencia, no un escudo mágico. Al identificar en la propia carta las zonas de vulnerabilidad (Neptuno potente, Luna frágil, casa XII cargada) y los tránsitos desencadenantes, se pueden anticipar los periodos de fragilidad emocional y reforzar los propios límites.
          </p>
        </Card>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTIE 11 — CONCLUSION                                        */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>La carta natal como herramienta de vigilancia frente a los manipuladores</H2>

        <Card title="Conocer tu carta es protegerte">
          <p>
            La astrología no es un arma de denuncia. Es un espejo que revela tanto nuestros potenciales luminosos como nuestras zonas de sombra. Comprender las firmas planetarias de la manipulación es darse los medios de reconocerlas &mdash; en el otro, pero también en uno mismo.
          </p>
          <p>
            Conocer la posición de Plutón, Neptuno y Lilith en tu carta natal, saber dónde está tu Luna y en qué estado se encuentra, comprender la fuerza de tu Saturno y de tus límites naturales: todo ello constituye una forma de protección astrológica concreta.
          </p>
          <p>
            El narcisista perverso prospera en la inconsciencia. Explota lo que no ves en ti mismo. La astrología, al iluminar esos puntos ciegos, reduce considerablemente su terreno de juego.
          </p>
          <p>
            Mantente luminoso. Mantente empático. Pero mantente lúcido. Tu carta natal es tu aliado más fiel en esta búsqueda de equilibrio entre apertura y protección.
          </p>
        </Card>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  Maillage interne — Audit 31/05/2026 (R3)                       */}
      {/*  Renforce les liens contextuels vers les hubs cités dans l'article */}
      {/* ================================================================ */}
      <section className="space-y-6">
        <H2>Para profundizar: los pilares astrológicos de este artículo</H2>
        <Card title="Planetas en juego en el dominio y la manipulación">
          <ul className="space-y-2">
            <li>
              <Link href="/planetes/pluton" className="text-red-300 underline decoration-red-300/30 underline-offset-2 transition-colors hover:text-red-200">Plutón</Link>
              {" "}&mdash; poder, control, fascinación magnética
            </li>
            <li>
              <Link href="/planetes/neptune" className="text-red-300 underline decoration-red-300/30 underline-offset-2 transition-colors hover:text-red-200">Neptuno</Link>
              {" "}&mdash; ilusión, confusión de las fronteras, gaslighting
            </li>
            <li>
              <Link href="/planetes/mars" className="text-red-300 underline decoration-red-300/30 underline-offset-2 transition-colors hover:text-red-200">Marte</Link>
              {" "}&mdash; agresividad fría, instrumento de dominación cuando está afligido
            </li>
            <li>
              <Link href="/planetes/lune" className="text-red-300 underline decoration-red-300/30 underline-offset-2 transition-colors hover:text-red-200">La Luna</Link>
              {" "}&mdash; receptividad, vulnerabilidad emocional, blanco privilegiado
            </li>
            <li>
              <Link href="/planetes/saturne" className="text-red-300 underline decoration-red-300/30 underline-offset-2 transition-colors hover:text-red-200">Saturno</Link>
              {" "}&mdash; capacidad de poner límites y de protegerse
            </li>
            <li>
              <Link href="/lilith" className="text-red-300 underline decoration-red-300/30 underline-offset-2 transition-colors hover:text-red-200">Lilith (Luna Negra)</Link>
              {" "}&mdash; transgresión, partes de sombra, seducción turbia
            </li>
          </ul>
        </Card>

        <Card title="Casas y ejes a vigilar">
          <ul className="space-y-2">
            <li>
              <Link href="/maisons/maison-7" className="text-red-300 underline decoration-red-300/30 underline-offset-2 transition-colors hover:text-red-200">Casa VII</Link>
              {" "}&mdash; las parejas, las asociaciones, los &laquo;&nbsp;enemigos declarados&nbsp;&raquo;
            </li>
            <li>
              <Link href="/maisons/maison-8" className="text-red-300 underline decoration-red-300/30 underline-offset-2 transition-colors hover:text-red-200">Casa VIII</Link>
              {" "}&mdash; intimidad, poder compartido, transformaciones profundas
            </li>
            <li>
              <Link href="/maisons/maison-12" className="text-red-300 underline decoration-red-300/30 underline-offset-2 transition-colors hover:text-red-200">Casa XII</Link>
              {" "}&mdash; enemigos ocultos, autosabotajes, retiro forzado
            </li>
          </ul>
        </Card>

        <Card title="Herramientas de análisis complementarias">
          <ul className="space-y-2">
            <li>
              <Link href="/aspects" className="text-red-300 underline decoration-red-300/30 underline-offset-2 transition-colors hover:text-red-200">Los aspectos</Link>
              {" "}&mdash; comprender las cuadraturas y oposiciones Plutón/Luna
            </li>
            <li>
              <Link href="/synastrie" className="text-red-300 underline decoration-red-300/30 underline-offset-2 transition-colors hover:text-red-200">La sinastría</Link>
              {" "}&mdash; leer la dinámica relacional entre dos cartas
            </li>
            <li>
              <Link href="/transits" className="text-red-300 underline decoration-red-300/30 underline-offset-2 transition-colors hover:text-red-200">Los tránsitos</Link>
              {" "}&mdash; detectar los periodos de vulnerabilidad
            </li>
            <li>
              <Link href="/blog/plutonien" className="text-red-300 underline decoration-red-300/30 underline-offset-2 transition-colors hover:text-red-200">Retrato del plutoniano</Link>
              {" "}&mdash; psicología detallada de las dominantes de Plutón
            </li>
          </ul>
        </Card>
      </section>
    </article>
  );
}
