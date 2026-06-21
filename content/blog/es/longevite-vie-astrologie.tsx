import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import { AUTHOR_PERSON, PUBLISHER_ORG, SITE_URL } from "@/lib/seo";

export const meta = {
  slug: "longevite-vie-astrologie",
  // ⚠ Title court : 43 chars + " — Astro Cours" (14) = 57 chars total
  //   Avant : 81 chars → SERP tronqué + signalé "Title too long" par Ahrefs.
  title: "Longevidad en astrología: Hyleg y Alcocoden",
  // ⚠ Meta description : 152 chars (max recommandé : 155).
  //   Avant : 165 chars → tronquée par Google en SERP.
  description:
    "Evaluar la longevidad en astrología tradicional: Hyleg, Alcocoden, luminarias, casas I y VIII. Método e indicadores concretos para cruzar.",
  date: "2026-05-27",
  tags: [
    "longévité",
    "vitalité",
    "Hyleg",
    "Alcocoden",
    "maison I",
    "maison VIII",
    "luminaires",
    "Saturne",
    "thème astral",
    "interprétation",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/longevite-vie-astrologie.webp",
};

// -- COMPOSANTS D'INTERFACE PREMIUM --

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
  return (
    <h3 className="font-serif text-2xl font-medium text-white/90">{children}</h3>
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
    <section className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-md transition-colors hover:bg-white/[0.05]">
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

export default function LongeviteVieAstrologiePost() {
  const glow = getGlowFromTags(meta.tags);
  const ARTICLE_URL = `${SITE_URL}/blog/${meta.slug}`;
  const COVER_URL = `${SITE_URL}${meta.cover}`;

  return (
    <article className="mx-auto max-w-4xl space-y-12 pb-20 pt-8 text-white">
      {/* DONNÉES STRUCTURÉES (SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: meta.title,
              name: meta.title,
              description: meta.description,
              image: {
                "@type": "ImageObject",
                url: COVER_URL,
                width: 1024,
                height: 439,
                caption: meta.title,
              },
              datePublished: `${meta.date}T12:00:00Z`,
              dateModified: `${meta.date}T12:00:00Z`,
              author: AUTHOR_PERSON,
              publisher: PUBLISHER_ORG,
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": ARTICLE_URL,
              },
              url: ARTICLE_URL,
              inLanguage: "es",
              isAccessibleForFree: true,
              keywords: meta.tags.join(", "),
              articleSection: "Astrología",
              wordCount: 1500,
              about: [
                { "@type": "Thing", name: "Longevidad" },
                { "@type": "Thing", name: "Astrología tradicional" },
                { "@type": "Thing", name: "Hyleg" },
                { "@type": "Thing", name: "Alcocoden" },
              ],
              audience: {
                "@type": "Audience",
                audienceType: "Lectores interesados en la astrología",
              },
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
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Cómo evalúa la astrología la longevidad de la vida?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La astrología tradicional evalúa la longevidad a partir del Hyleg (el dador de vida), del Alcocoden (el dador de años), del estado de las luminarias (Sol y Luna), de la casa I (vitalidad) y de la casa VIII (pruebas, finales de ciclo).",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuáles son los principales indicadores astrológicos de vitalidad?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Los principales indicadores son la fuerza del Sol, el estado de la Luna, la calidad del ascendente y de su regente, los planetas que ocupan la casa I, así como los aspectos recibidos por las luminarias (favorables o contrariados).",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Se puede predecir la edad exacta de la muerte con la astrología?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. Incluso los astrólogos tradicionales consideran que solo se puede estimar una probabilidad de duración de vida, nunca una fecha precisa. La longevidad también depende del estilo de vida, de la medicina y de la genética.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Basta con el Sol para juzgar la vitalidad en una carta?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. El Sol es central, pero debe cruzarse con la Luna, el ascendente, la casa I y la calidad de Saturno para obtener una imagen completa de la vitalidad.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué papel juega Saturno en la longevidad?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Saturno es el planeta de la duración, de la estructura ósea y de la resistencia en el tiempo. Un Saturno fuerte y bien aspectado suele señalar una buena capacidad de resistencia y una longevidad estructural.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      {/* HERO SECTION BLOG */}
      <header className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
        <div
          className={`pointer-events-none absolute -right-24 -top-24 h-[500px] w-[500px] rounded-full opacity-30 mix-blend-screen blur-[100px] ${glow}`}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-[80px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/50"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <Kicker>Longevidad • Vitalidad • Hyleg • Luminarias</Kicker>

          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            {/* ⚠ h1 → h2 (Ahrefs flag "Multiple H1") :
                ArticleLayout rend déjà meta.title comme h1 unique en haut
                de page. On garde un h2 sémantique pour la hiérarchie SEO. */}
            <h2 className="font-serif text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl md:max-w-3xl">
              Cómo observa la astrología la longevidad: los indicadores esenciales
            </h2>

            <div className="flex flex-wrap gap-3 text-sm text-white/70">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                Lectura intermedia
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                Método tradicional
              </span>
            </div>
          </div>

          <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            La cuestión de la <strong className="font-medium text-amber-200">longevidad de la vida</strong> es una
            de las más antiguas y delicadas de la astrología. Nunca se lee
            a partir de un solo indicio: se observa a través de un conjunto
            de <strong className="font-medium text-white">indicadores cruzados</strong> — el{" "}
            <strong className="font-medium text-white">Hyleg</strong> (el dador de vida), el{" "}
            <strong className="font-medium text-white">Alcocoden</strong> (el dador de años), el estado de las{" "}
            <strong className="font-medium text-white">luminarias</strong>, la calidad de la{" "}
            <strong className="font-medium text-white">casa I</strong>, y la naturaleza de los{" "}
            <strong className="font-medium text-white">aspectos</strong> recibidos. Esta guía te muestra
            cómo leer estos signos con rigor, sin caer en la predicción
            mecánica.
          </p>

          <div className="mt-8 pt-6 border-t border-white/5">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      {/* STATS RAPIDES */}
      <section className="grid gap-4 sm:grid-cols-3" aria-label="Puntos clave del artículo">
        <Stat label="Dador de vida" value="El Hyleg" />
        <Stat label="Dador de años" value="El Alcocoden" />
        <Stat label="Casa clave" value="Casa I y VIII" />
      </section>

      {/* CALLOUT D'INTRODUCTION */}
      <Callout tone="warn" title="Advertencia ética previa">
        <p>
          La astrología tradicional habla de la longevidad como una{" "}
          <strong className="text-white">tendencia probable</strong>, nunca como una
          certeza. Ninguna carta fija una fecha de muerte. Lo que se observa es
          un <strong className="text-white">terreno de vitalidad</strong>, fuerzas
          y fragilidades, que siempre deben cruzarse con el estilo de vida,
          la medicina y la genética.
        </p>
      </Callout>

      <Divider />

      {/* DEFINITION BOX */}
      <aside className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-6 leading-relaxed text-white/85">
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-amber-400">Definición</p>
        <p>
          La <strong>longevidad en astrología</strong> se analiza a partir de un
          conjunto coherente: el <strong>Hyleg</strong> (punto vital, generalmente el
          Sol de día, la Luna de noche, o el ascendente), el{" "}
          <strong>Alcocoden</strong> (regente del signo del Hyleg, que distribuye los
          años), el estado general de la <Link href="/maisons/maison-1">casa I</Link>{" "}
          y los <Link href="/blog/conjonction-melange-des-forces">aspectos</Link>{" "}
          recibidos por las luminarias.
        </p>
      </aside>

      {/* INTRO */}
      <p className="text-base leading-relaxed text-white/80 md:text-lg">
        Antes de entrar en la técnica, hay que comprender una cosa: la
        longevidad no depende de un solo planeta. Se apoya en la{" "}
        <strong>solidez global de la carta</strong>. Un Hyleg bien situado pero
        contrariado por los maléficos puede indicar una vitalidad fuerte pero
        exigida. Un Hyleg débil pero sostenido puede dar una salud frágil pero
        una duración correcta. Todo es cuestión de equilibrio.
      </p>

      {/* 1. LE HYLEG */}
      <section className="space-y-6">
        <H2>1) El Hyleg: el punto vital de la carta</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          El <strong className="font-medium text-amber-200">Hyleg</strong> (también
          llamado <em>afeta</em> o <em>dador de vida</em>) es el punto de la carta
          que porta la fuerza vital. Es a él a quien se observa en primer lugar
          para juzgar la vitalidad, la resistencia y la duración potencial de vida.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="¿Cómo determinarlo?" subtitle="Orden tradicional de selección.">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-amber-400">✦</span>
                <span><strong className="text-white">De día</strong>: primero se mira el Sol si está bien situado (casas I, VII, X, XI, IX).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-amber-400">✦</span>
                <span><strong className="text-white">De noche</strong>: primero se mira la Luna en las mismas condiciones.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-amber-400">✦</span>
                <span>Si no, se toma el <strong className="text-white">ascendente</strong>, y luego la <strong className="text-white">Parte de la Fortuna</strong>.</span>
              </li>
            </ul>
          </Card>

          <Card title="Lo que revela" subtitle="La calidad del Hyleg = la calidad del terreno.">
            <p className="mb-3">
              Un Hyleg fuerte (en dignidad, bien aspectado, en una casa angular)
              indica un <strong className="text-white">capital vital generoso</strong>.
            </p>
            <p>
              Un Hyleg afligido (cuadratura u oposición de Marte o Saturno, combusto,
              en caída) señala <strong className="text-white">fragilidades que vigilar</strong>,
              sin por ello condenar la duración de vida.
            </p>
          </Card>
        </div>
      </section>

      <Divider />

      {/* 2. ALCOCODEN */}
      <section className="space-y-6">
        <H2>2) El Alcocoden: el dador de años</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Una vez encontrado el Hyleg, se identifica su{" "}
          <strong className="font-medium text-amber-200">regente</strong>: es
          el <strong>Alcocoden</strong>. Según la tradición (Ptolomeo, Bonatti, Lilly),
          atribuye un número de años en función de su dignidad esencial.
        </p>

        <section aria-label="Tabla de los años concedidos" className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm">
          <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
            <div className="p-5 font-serif text-lg font-medium text-white/90">Dignidad del Alcocoden</div>
            <div className="p-5 font-serif text-lg font-medium text-white/90">Tipo de años</div>
            <div className="p-5 font-serif text-lg font-medium text-white/90">Lectura</div>
          </div>

          <TableRow
            title="En domicilio"
            effect="Grandes años"
            reading="Indica una longevidad potencialmente importante"
          />
          <TableRow
            title="En exaltación"
            effect="Grandes años"
            reading="Fuerza vital sostenida, buena resistencia"
          />
          <TableRow
            title="En triplicidad"
            effect="Años medios"
            reading="Duración correcta, vitalidad equilibrada"
          />
          <TableRow
            title="En término / faz"
            effect="Años menores"
            reading="Vitalidad media, a sostener con el estilo de vida"
          />
          <TableRow
            title="En caída / exilio"
            effect="Años disminuidos"
            reading="Fragilidades a compensar, se requiere prudencia"
          />
        </section>

        <Callout tone="note" title="A tener en cuenta">
          <p>
            Estos números nunca son predicciones exactas. Sirven para
            <strong className="text-white"> jerarquizar</strong> los indicios: un
            Alcocoden fuerte refuerza al Hyleg, un Alcocoden débil exige más
            vigilancia preventiva.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* 3. LUMINAIRES */}
      <section className="space-y-6">
        <H2>3) El estado de las luminarias: Sol y Luna</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Más allá del Hyleg, el <strong>Sol</strong> y la <strong>Luna</strong>{" "}
          son los dos grandes indicadores de vitalidad. El Sol porta la energía
          de fondo, el soplo vital; la Luna porta la regulación del cuerpo, los
          ritmos, la inmunidad, los humores.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Sol fuerte" subtitle="Signos positivos.">
            <p>
              El Sol en Leo, en Aries (exaltación), bien aspectado por Júpiter o
              Venus, en casa angular: señala una{" "}
              <strong className="text-white">vitalidad fundamental</strong> bien
              anclada, una buena capacidad de recuperación.
            </p>
          </Card>

          <Card title="Luna fuerte" subtitle="Signos positivos.">
            <p>
              La Luna en Cáncer, en Tauro (exaltación), bien aspectada, libre de combustión:
              indica una <strong className="text-white">regulación corporal estable</strong>,
              buenas defensas, un sueño y una digestión equilibrados.
            </p>
          </Card>

          <Card title="Sol afligido" subtitle="Signos de vigilancia.">
            <p>
              El Sol en Acuario (exilio), Libra (caída), sitiado entre Marte y
              Saturno, en cuadratura u oposición con los maléficos: puede señalar una{" "}
              <strong className="text-white">energía de fondo más baja</strong>, o
              tensiones cardíacas que vigilar.
            </p>
          </Card>

          <Card title="Luna afligida" subtitle="Signos de vigilancia.">
            <p>
              La Luna en Escorpio (caída), Capricornio (exilio), combusta, mal aspectada
              por Saturno o Marte: puede indicar{" "}
              <strong className="text-white">fragilidades inmunitarias, digestivas</strong>
              {" "}o emocionales que acompañar.
            </p>
          </Card>
        </div>
      </section>

      <Divider />

      {/* 4. MAISON I */}
      <section className="space-y-6">
        <H2>4) La casa I: la constitución física</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          La <Link href="/maisons/maison-1" className="text-amber-200 underline-offset-2 hover:underline">casa I</Link>{" "}
          es la casa del cuerpo, de la constitución, del temperamento. Su calidad
          determina la base sobre la que el Hyleg puede apoyarse.
        </p>

        <Card title="Lo que hay que observar">
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="mt-1 text-emerald-400">✔</span>
              <span><strong className="text-white">El signo del ascendente</strong>: da la complexión (caliente/frío, seco/húmedo).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-emerald-400">✔</span>
              <span><strong className="text-white">El regente del ascendente</strong>: su dignidad, su casa, sus aspectos.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-emerald-400">✔</span>
              <span><strong className="text-white">Los planetas en la casa I</strong>: su naturaleza refuerza o fragiliza el cuerpo.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-red-400">✘</span>
              <span><strong className="text-white">Marte o Saturno en I, mal dispuestos</strong>: tensión, accidentes, una estructura más frágil.</span>
            </li>
          </ul>
        </Card>
      </section>

      <Divider />

      {/* 5. MAISON VIII */}
      <section className="space-y-6">
        <H2>5) La casa VIII: las pruebas y los finales de ciclo</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          La <strong>casa VIII</strong> es tradicionalmente la casa de las
          crisis, de las transformaciones profundas y, en la lectura clásica, del
          final de la vida. No predice la muerte, pero señala el{" "}
          <strong className="font-medium text-amber-200">tipo de pruebas</strong>{" "}
          que la persona podría atravesar y la manera en que puede
          regenerarse en ellas.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Casa VIII sostenida">
            <p>
              Cúspide en signo estable, regente bien situado, aspectos armónicos:
              fuerte <strong className="text-white">capacidad de regeneración</strong>,
              travesía de las crisis más fluida.
            </p>
          </Card>
          <Card title="Casa VIII afligida">
            <p>
              Regente en caída, maléficos mal dispuestos en VIII: crisis más
              <strong className="text-white"> intensas o repetidas</strong>, mayor vigilancia
              sobre la prevención.
            </p>
          </Card>
        </div>
      </section>

      <Divider />

      {/* 6. SATURNE */}
      <section className="space-y-6">
        <H2>6) Saturno: el planeta de la duración</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          <strong>Saturno</strong> es el planeta que estructura el tiempo, los huesos,
          la duración. Un <strong className="font-medium text-amber-200">Saturno fuerte</strong>{" "}
          (en Capricornio, Acuario, Libra) y bien aspectado señala a menudo una{" "}
          <strong>capacidad de resistencia</strong> y una longevidad estructural.
          Un Saturno frágil (en Aries, Cáncer, Leo) o contrariado puede indicar
          por el contrario límites óseos, articulares o de resistencia.
        </p>

        <Callout tone="ok" title="La paradoja saturnina">
          <p>
            Las longevidades excepcionales suelen ir acompañadas de un Saturno
            <strong className="text-white"> exigente pero estructurado</strong>. La
            disciplina, la sobriedad y la regularidad — cualidades saturninas — son
            ellas mismas factores concretos de longevidad.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* METHODE COMPLETE */}
      <section aria-labelledby="methode-titre" className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 shadow-2xl backdrop-blur-md sm:p-12">
        <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-amber-500/10 blur-[60px]" aria-hidden="true" />

        <h2 id="methode-titre" className="relative z-10 font-serif text-2xl font-medium text-white sm:text-3xl">
          El método completo para evaluar la longevidad en una carta
        </h2>

        <div className="relative z-10 mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Determinar el Hyleg según la diurnidad de la carta",
            "Identificar el Alcocoden (regente del Hyleg) y juzgar su dignidad",
            "Evaluar la fuerza del Sol (energía de fondo)",
            "Evaluar la fuerza de la Luna (regulación corporal)",
            "Leer la casa I: signo, regente, planetas presentes",
            "Examinar la casa VIII y su regente",
            "Medir la calidad de Saturno (estructura y duración)",
            "Sintetizar los indicios: una tendencia global, no una fecha",
          ].map((item, index) => (
            <div
              key={item}
              className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-black/40 px-5 py-4 transition-colors hover:border-amber-500/30 hover:bg-white/5"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500/10 font-serif text-sm font-bold text-amber-400 group-hover:bg-amber-500/20">
                {index + 1}
              </span>
              <span className="text-sm font-medium text-white/85 sm:text-base">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SYNTHESE */}
      <section className="space-y-6">
        <H2>Síntesis: cruzar los indicios, nunca aislar uno</H2>

        <section className="rounded-[2rem] border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-transparent p-8 shadow-2xl backdrop-blur-md">
          <p className="text-lg text-white/90">
            La longevidad en astrología es una{" "}
            <strong className="text-emerald-300">lectura de terreno</strong>, no una
            predicción. Un Hyleg fuerte, un Alcocoden bien dignificado, luminarias
            sostenidas, una casa I sólida y un Saturno estructurado dibujan un{" "}
            <strong className="text-white">terreno de vitalidad duradera</strong>.
            A la inversa, varios indicios contrariados exigen más{" "}
            <strong className="text-white">prevención</strong> — hábitos de vida,
            seguimiento médico, gestión del estrés.
          </p>
        </section>

        <Callout tone="ok" title="Conclusión responsable">
          <p>
            La astrología de la longevidad ilumina{" "}
            <strong className="text-white">tendencias</strong>, nunca destinos.
            Invita a conocer las propias fragilidades para sostenerlas mejor, y las propias
            fuerzas para cultivarlas mejor.
          </p>
        </Callout>
      </section>

      {/* FAQ */}
      <section className="mt-16 space-y-8">
        <H2>FAQ — Longevidad y astrología</H2>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="¿Se puede leer la edad de la muerte en una carta?">
            <p>
              No. Los astrólogos serios rechazan este tipo de predicción. Se lee
              una <strong className="text-white">calidad de vitalidad</strong> y
              periodos más sensibles, nunca una fecha.
            </p>
          </Card>

          <Card title="¿Basta con el Sol para juzgar la vitalidad?">
            <p>
              No. El Sol es central, pero hay que cruzarlo con la Luna,
              el ascendente, la casa I y la calidad de Saturno para tener una
              imagen completa.
            </p>
          </Card>

          <Card title="¿Qué hacer si mi carta muestra fragilidades?">
            <p>
              Verlo como una <strong className="text-white">información preventiva</strong>:
              cuidar los hábitos de vida, el sueño, la alimentación, el seguimiento
              médico. La astrología nunca reemplaza a la medicina.
            </p>
          </Card>

          <Card title="¿Juegan algún papel los tránsitos?">
            <p>
              Sí. Los tránsitos mayores de Saturno, Urano y Plutón sobre los
              puntos sensibles de la carta marcan a menudo{" "}
              <strong className="text-white">periodos clave</strong> que
              acompañar con atención.
            </p>
          </Card>
        </div>
      </section>

      {/* POUR ALLER PLUS LOIN */}
      <footer className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md sm:p-12">
        <H3>Para profundizar en tu análisis</H3>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Pill>Hyleg</Pill>
          <Pill tone="sky">Casa I</Pill>
          <Pill tone="violet">Aspectos</Pill>
          <Pill tone="emerald">Luminarias</Pill>
          <Pill tone="yellow">Saturno</Pill>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/blog/qu-est-ce-qu-un-theme-astral"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Comprender la carta natal
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/blog/conjonction-melange-des-forces"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Dominar los aspectos
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}
