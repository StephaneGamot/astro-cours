import type { ReactNode } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import CoverImage from "@/public/images/blog/les-dominantes-planetaire.webp";
import GrilleImage from "@/public/images/blog/astrological-chart-wheel-in-pencil.webp";

/** Plantilla de cálculo imprimible (2 páginas A4). */
const FICHE_PDF = "/fiches/plantilla-planeta-dominante.pdf";

export const meta = {
  slug: "planete-dominante-methode-calcul",
  seoTitle: "Planeta dominante: calcúlalo con 7 criterios — Astro Cours",
  title: "Planeta dominante: encontrarlo con la tabla de los siete pesos",
  description:
    "Encuentra tu planeta dominante sin calculadoras opacas: un baremo de 7 criterios, una carta real calculada de principio a fin y la regla para desempatar.",
  date: "2026-09-21",
  tags: [
    "planètes",
    "méthode",
    "thème astral",
    "ascendant",
    "aspects",
    "luminaires",
    "interprétation",
    "exemples",
    "tempéraments",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/les-dominantes-planetaire.webp",
};

/* ────────────────────────────────────────────────────────────
   Componentes de maquetación
   ──────────────────────────────────────────────────────────── */

function H2({ children, id }: { children: ReactNode; id: string }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="relative inline-flex h-7 w-7 shrink-0 items-center justify-center"
        >
          <span className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-200/50 via-violet-300/25 to-transparent blur-[6px]" />
          <span className="relative text-base leading-none text-amber-100/90">
            ⚖
          </span>
        </span>
        <h2
          id={id}
          className="scroll-mt-24 text-2xl md:text-3xl font-semibold tracking-tight leading-tight"
        >
          {children}
        </h2>
      </div>
      <div
        aria-hidden="true"
        className="h-px w-full bg-gradient-to-r from-violet-400/40 via-white/10 to-transparent"
      />
    </div>
  );
}

function H3({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h3
      id={id}
      className="scroll-mt-24 text-lg md:text-xl font-semibold tracking-tight leading-tight"
    >
      {children}
    </h3>
  );
}

function A({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="underline decoration-white/30 hover:decoration-white/60 transition"
    >
      {children}
    </Link>
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
  const box =
    tone === "warn"
      ? "border-yellow-500/30 bg-yellow-500/10"
      : tone === "ok"
        ? "border-emerald-500/30 bg-emerald-500/10"
        : "border-white/10 bg-white/5";

  const emoji = tone === "warn" ? "⚠️" : tone === "ok" ? "✅" : "🔭";

  return (
    <div className={`rounded-2xl border p-5 ${box}`}>
      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-text/90">
        <span aria-hidden="true">{emoji}</span>
        <span>{title}</span>
      </div>
      <div className="space-y-2 leading-relaxed text-text/85">{children}</div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-xs text-text/60">{label}</p>
      <p className="mt-1 font-semibold text-text/90">{value}</p>
    </div>
  );
}

function Divider() {
  return (
    <div className="flex items-center gap-4" aria-hidden="true">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-white/10" />
      <span className="text-sm tracking-[0.3em] text-amber-200/50">♃ ♄ ♇</span>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-white/15 to-white/10" />
    </div>
  );
}

function Box({
  title,
  children,
  tone = "neutral",
}: {
  title: string;
  children: ReactNode;
  tone?: "neutral" | "violet" | "emerald" | "amber";
}) {
  const box =
    tone === "violet"
      ? "border-violet-400/25 bg-violet-500/[0.07]"
      : tone === "emerald"
        ? "border-emerald-400/25 bg-emerald-500/[0.07]"
        : tone === "amber"
          ? "border-amber-400/25 bg-amber-500/[0.07]"
          : "border-white/10 bg-black/20";

  return (
    <div className={`rounded-2xl border p-5 ${box}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-text/70">
        {title}
      </p>
      <div className="mt-3 space-y-2 leading-relaxed text-text/85">
        {children}
      </div>
    </div>
  );
}

/* ── Índice ──────────────────────────────────────────────────── */

const toc = [
  { id: "definicion", label: "Qué es un planeta dominante" },
  { id: "regente", label: "Regente de la carta y dominante" },
  { id: "sin-norma", label: "Por qué ningún cálculo es oficial" },
  { id: "tabla", label: "La tabla de los siete pesos" },
  { id: "carta", label: "La carta de demostración" },
  { id: "calculo", label: "El cálculo, planeta a planeta" },
  { id: "clasificacion", label: "La clasificación y su lectura" },
  { id: "empate", label: "Cómo desempatar" },
  { id: "hora", label: "El control de la hora" },
  { id: "retratos", label: "Los diez tipos planetarios" },
  { id: "limites", label: "Lo que la tabla no dice" },
  { id: "errores", label: "Seis errores frecuentes" },
  { id: "recordar", label: "Lo que hay que recordar" },
  { id: "faq", label: "Preguntas frecuentes" },
];

/* ── FAQ (visible y JSON-LD desde la misma fuente) ───────────── */

const faq = [
  {
    q: "¿Cómo saber cuál es mi planeta dominante?",
    a: "Se puntúa cada planeta de la carta sobre siete criterios: regencia del Ascendente, angularidad, vínculo con los luminares, pertenencia a un cúmulo, dignidad, aspectos recibidos de los puntos fuertes y número total de aspectos. El planeta con más puntos es el dominante. Hace falta una hora de nacimiento fiable.",
  },
  {
    q: "¿El regente de mi carta es mi planeta dominante?",
    a: "No necesariamente, y es la confusión más extendida. El regente de la carta es el planeta que rige tu signo Ascendente: un criterio de siete. Es el más pesado, así que a menudo coinciden, pero un regente peregrino, cadente y sin aspectos pierde sin dificultad frente a un planeta pegado al Medio Cielo.",
  },
  {
    q: "¿Se puede tener dos planetas dominantes?",
    a: "Sí, y es frecuente. Cuando los dos primeros empatan o se separan por un punto, no hay un dominante sino una pareja dominante. Se leen juntos: uno da el motor, el otro el freno o el relevo.",
  },
  {
    q: "¿Puede el Sol ser el planeta dominante?",
    a: "Puede, pero menos de lo que se cree. El Sol solo gana si es angular, si está en Leo o si recibe muchos aspectos. En la carta que se calcula en este artículo el Sol queda octavo de diez: justamente por eso el horóscopo del signo solar casi nunca se parece a nadie.",
  },
  {
    q: "¿Hace falta la hora exacta de nacimiento?",
    a: "Sí. Tres de los siete criterios dependen del Ascendente y del Medio Cielo, que se desplazan alrededor de un grado cada cuatro minutos. En la carta de demostración, una hora de diferencia cambia el dominante de Júpiter a Marte.",
  },
  {
    q: "¿Por qué las calculadoras en línea dan resultados distintos?",
    a: "Porque no usan el mismo baremo y casi nunca lo publican. Unas ponderan mucho los luminares, otras la angularidad, otras cuentan los asteroides. Ninguna está equivocada: responden a preguntas ligeramente distintas.",
  },
  {
    q: "¿El planeta dominante cambia con la edad?",
    a: "La carta natal no se mueve, así que el cálculo tampoco. Lo que cambia es la expresión: un dominante Saturno rara vez se vive igual a los veinte que a los sesenta. Los tránsitos y las revoluciones solares ponen otros planetas por delante durante una temporada, pero no reescriben la clasificación.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

/* ── Datos de la carta de demostración ───────────────────────── */

const positions = [
  { p: "Sol", g: "☉", pos: "8° 17′ Escorpio", h: "XI", note: "Peregrino" },
  { p: "Luna", g: "☽", pos: "16° 52′ Aries", h: "IV", note: "Casa angular" },
  { p: "Mercurio", g: "☿", pos: "22° 47′ Escorpio", h: "XII", note: "Peregrino" },
  { p: "Venus", g: "♀", pos: "25° 28′ Escorpio", h: "XII", note: "Exilio" },
  { p: "Marte", g: "♂", pos: "27° 22′ Acuario", h: "III", note: "Peregrino" },
  { p: "Júpiter", g: "♃", pos: "8° 54′ Sagitario", h: "I", note: "Domicilio · conjunto al ASC 0° 47′" },
  { p: "Saturno", g: "♄", pos: "4° 56′ Géminis ℞", h: "VI", note: "Conjunto al DS 3° 11′" },
  { p: "Urano", g: "♅", pos: "15° 28′ Libra", h: "X", note: "Casa angular" },
  { p: "Neptuno", g: "♆", pos: "1° 54′ Sagitario", h: "XII", note: "Conjunto al ASC 6° 13′" },
  { p: "Plutón", g: "♇", pos: "0° 57′ Libra", h: "IX", note: "Conjunto al MC 2° 08′" },
];

const bareme = [
  {
    n: "1",
    nom: "Regencia del Ascendente",
    quoi: "El planeta que rige el signo del Ascendente, es decir el regente de la carta.",
    pts: "5 pts — o 3 + 3 si el signo tiene dos regentes (Escorpio, Acuario, Piscis).",
  },
  {
    n: "2",
    nom: "Angularidad",
    quoi: "Distancia al más cercano de los cuatro ángulos: ASC, MC, DS, Fondo del Cielo.",
    pts: "4 pts con orbe ≤ 3°, 2 pts entre 3 y 8°. En su defecto, 2 pts por estar en casa I, IV, VII o X.",
  },
  {
    n: "3",
    nom: "Vínculo con los luminares",
    quoi: "El Sol y la Luna, y los planetas que rigen los signos que ocupan.",
    pts: "2 pts por cada luminar · 2 pts al dispositor del Sol · 2 pts al de la Luna (1 + 1 si el signo tiene dos regentes).",
  },
  {
    n: "4",
    nom: "Cúmulo",
    quoi: "Tres planetas o más reunidos en un mismo signo o en una misma casa.",
    pts: "1 pt a cada miembro · 2 pts al regente del signo implicado (1 + 1 si hay dos).",
  },
  {
    n: "5",
    nom: "Dignidad",
    quoi: "La fuerza del planeta en el signo que ocupa.",
    pts: "Domicilio + 3 · exaltación + 2 · peregrino 0 · caída − 1 · exilio − 2.",
  },
  {
    n: "6",
    nom: "Aspectos recibidos de los puntos fuertes",
    quoi: "Aspectos mayores al Sol, a la Luna, al Ascendente o al Medio Cielo.",
    pts: "2 pts por aspecto con orbe ≤ 3°, 1 pt hasta 8° (6° para el sextil). Máximo 4 pts.",
  },
  {
    n: "7",
    nom: "Planeta más aspectado",
    quoi: "El mayor número de aspectos mayores a los demás planetas.",
    pts: "2 pts, repartidos en caso de empate.",
  },
];

const classement = [
  { r: 1, p: "Júpiter", t: 16, d: "Regente del Ascendente (+5), conjunto al Ascendente con 47′ (+4), en domicilio (+3), aspectos a los puntos fuertes (+4)." },
  { r: 2, p: "Plutón", t: 8, d: "Conjunto al Medio Cielo con 2° 08′ (+4 y +2), codispositor del Sol y regente de los dos cúmulos (+3), en caída en Libra (−1)." },
  { r: 3, p: "Neptuno", t: 8, d: "Conjunto al Ascendente con 6° 13′ (+2 y +1), sextil estrecho al Medio Cielo (+2), miembro del cúmulo de la casa XII (+1), empatado como más aspectado (+2)." },
  { r: 4, p: "Marte", t: 7, d: "Dispositor de la Luna (+2) y codispositor del Sol (+1), regente de los dos cúmulos (+2), empatado como más aspectado (+2)." },
  { r: 5, p: "Saturno", t: 7, d: "Conjunto al Descendente con 3° 11′ (+2 y +1), trígono estrecho al Medio Cielo (+2), empatado como más aspectado (+2)." },
  { r: 6, p: "Luna", t: 4, d: "Luminar (+2), en la casa IV angular (+2)." },
  { r: 7, p: "Urano", t: 4, d: "En la casa X angular (+2), oposición estrecha a la Luna (+2)." },
  { r: 8, p: "Sol", t: 3, d: "Luminar (+2), miembro del cúmulo de Escorpio (+1)." },
  { r: 9, p: "Mercurio", t: 2, d: "Miembro de los dos cúmulos (+2)." },
  { r: 10, p: "Venus", t: 0, d: "Miembro de los dos cúmulos (+2), en exilio en Escorpio (−2)." },
];

const portraits = [
  { p: "Sol", slug: "solarien", type: "Solariano", cle: "Brillar, presidir, encarnar" },
  { p: "Luna", slug: "lunarien", type: "Lunariano", cle: "Sentir, proteger, recordar" },
  { p: "Mercurio", slug: "mercurien", type: "Mercuriano", cle: "Conectar, explicar, circular" },
  { p: "Venus", slug: "venusien", type: "Venusiano", cle: "Gustar, armonizar, saborear" },
  { p: "Marte", slug: "martien", type: "Marciano", cle: "Atacar, cortar, avanzar" },
  { p: "Júpiter", slug: "jupiterien", type: "Jupiteriano", cle: "Transmitir, ampliar, dar sentido" },
  { p: "Saturno", slug: "saturnien", type: "Saturniano", cle: "Estructurar, durar, exigir" },
  { p: "Urano", slug: "uranien", type: "Uraniano", cle: "Romper, inventar, liberarse" },
  { p: "Neptuno", slug: "neptunien", type: "Neptuniano", cle: "Disolver, imaginar, compadecer" },
  { p: "Plutón", slug: "plutonien", type: "Plutoniano", cle: "Sondear, transformar, refundar" },
];

/* ────────────────────────────────────────────────────────────
   Artículo
   ──────────────────────────────────────────────────────────── */

export default function Post() {
  const glow = getGlowFromTags(meta.tags);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="space-y-12">
        {/* ── PORTADA (LCP) ────────────────────────────────── */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f13]">
          <Image
            src={CoverImage}
            alt="Balanza antigua pesando símbolos astrológicos luminosos, con un astro dorado claramente más pesado que los demás"
            fill
            sizes="(max-width: 768px) 100vw, 900px"
            priority
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09090b]/80 via-transparent to-transparent"
          />
        </div>

        {/* ── HERO ─────────────────────────────────────────── */}
        <header className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/[0.10] via-black/20 to-black/30 p-7 shadow-soft">
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl ${glow}`}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-3xl"
          />

          <div className="relative">
            <p className="text-sm text-text/65">
              Método · Ponderación · Ejemplo calculado
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-text/85">
              Escribes tu fecha de nacimiento en una calculadora, te anuncia
              «dominante Urano» y no tienes ni idea de cómo ha llegado hasta
              ahí.{" "}
              <strong>
                No es un problema de creencia, es un problema de método.
              </strong>
            </p>

            <p className="mt-3 max-w-2xl leading-relaxed text-text/80">
              Esta es la tabla de ponderación que uso en consulta desde hace
              años: siete criterios, un baremo con cifras y un resultado que
              puedes rehacer a mano. Para que no se quede en teoría, la aplico
              de principio a fin sobre una carta real —la mía— y publico los
              datos de nacimiento para que puedas comprobar cada línea.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <Pill tone="violet">Criterios: 7</Pill>
              <Pill tone="sky">Tiempo: 20 minutos a mano</Pill>
              <Pill tone="emerald">Requisito: carta natal completa</Pill>
              <Pill tone="orange">La trampa: la hora de nacimiento</Pill>
            </div>

            <div className="mt-4">
              <TagPillsInline tags={meta.tags} />
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <Stat label="Qué buscamos" value="El planeta que lleva la carta" />
              <Stat label="Qué medimos" value="Posición, regencia, aspectos" />
              <Stat
                label="La pregunta clave"
                value="¿Qué planeta se echaría más de menos si faltara?"
              />
            </div>
          </div>
        </header>

        {/* ── DEFINICIÓN (respuesta directa) ───────────────── */}
        <div className="relative overflow-hidden rounded-2xl border border-violet-400/25 bg-gradient-to-br from-violet-500/[0.12] via-indigo-500/[0.06] to-transparent px-6 py-5">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-200/10 blur-2xl"
          />
          <p className="relative text-sm font-semibold uppercase tracking-[0.2em] text-amber-200/80">
            Definición
          </p>
          <p className="relative mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
            El <strong>planeta dominante</strong> de una carta natal es el que
            acumula más factores de fuerza: rige el Ascendente, toca un ángulo,
            mantiene un vínculo directo con el Sol o la Luna, ocupa un signo
            donde está en su casa y recibe muchos aspectos. Se encuentra
            puntuando cada planeta sobre esos criterios y sumando. Describe el
            motor principal de la persona: lo que hace de forma espontánea
            cuando nadie le dice qué hacer.
          </p>
        </div>

        {/* ── EN RESUMEN ───────────────────────────────────── */}
        <section
          className="rounded-2xl border border-emerald-400/25 bg-gradient-to-br from-emerald-500/[0.09] via-sky-500/[0.04] to-transparent p-6"
          aria-labelledby="en-resumen"
        >
          <h2
            id="en-resumen"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200/80"
          >
            En resumen
          </h2>
          <ul className="mt-4 space-y-2 leading-relaxed text-text/90">
            <li>
              No existe <strong>ningún baremo oficial</strong>: el que vale es
              el que se publica, porque se puede comprobar.
            </li>
            <li>
              Los dos criterios más pesados son la{" "}
              <strong>regencia del Ascendente</strong> y la{" "}
              <strong>conjunción a un ángulo</strong>.
            </li>
            <li>
              El <strong>regente de tu carta no es automáticamente</strong> tu
              planeta dominante: es un criterio de siete.
            </li>
            <li>
              Una diferencia de <strong>4 puntos o más</strong> entre el primero
              y el segundo indica un dominante claro. Por debajo de 2, hay dos.
            </li>
            <li>
              <strong>
                Sin una hora de nacimiento fiable el cálculo no sirve de nada
              </strong>
              : una hora basta para cambiar el resultado.
            </li>
          </ul>
        </section>

        {/* ── ÍNDICE ───────────────────────────────────────── */}
        <nav
          aria-label="Índice del artículo"
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/[0.07] to-transparent p-6"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200/70">
            Índice
          </p>
          <ol className="mt-4 grid gap-x-8 gap-y-1 sm:grid-cols-2">
            {toc.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="group flex items-baseline gap-3 rounded-lg px-2 py-1.5 transition hover:bg-white/[0.04]"
                >
                  <span className="text-xs font-semibold tabular-nums text-violet-300/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-text/85 underline decoration-white/15 transition group-hover:decoration-violet-300/60">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* ── 1. DEFINICIÓN ────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="definicion">
          <H2 id="definicion">Qué es un planeta dominante</H2>

          <p className="text-lg leading-relaxed text-text/85">
            Un planeta dominante no es tu planeta preferido, ni el regente de tu
            signo solar. Es aquel cuya voz tapa a las demás en la{" "}
            <A href="/blog/qu-est-ce-qu-un-theme-astral">carta natal</A>: impone
            su ritmo, su pregunta, su manera de resolver los problemas. Cuando
            alguien que apenas te conoce te describe en tres palabras, casi
            siempre está describiendo tu dominante, no tu Sol.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <Box title="Lo que es" tone="emerald">
              <ul className="space-y-2">
                <li>El motor: lo que la persona hace por defecto.</li>
                <li>
                  El resultado de una <strong>ponderación</strong>, no de una
                  impresión.
                </li>
                <li>
                  Un actor, designado por un planeta y por tanto por un{" "}
                  <A href="/blog/jupiterien">tipo planetario</A> descrito desde
                  la Antigüedad.
                </li>
                <li>A menudo dos planetas, no uno solo.</li>
              </ul>
            </Box>

            <Box title="Lo que no es" tone="amber">
              <ul className="space-y-2">
                <li>
                  El <A href="/signes-dominants">signo dominante</A>: ese da la
                  manera, no el motor.
                </li>
                <li>
                  La <A href="/maisons-dominantes">casa dominante</A>: esa da el
                  terreno.
                </li>
                <li>El planeta más cercano al Sol, ni el más rápido.</li>
                <li>
                  Una etiqueta fija: describe un funcionamiento, no un valor.
                </li>
              </ul>
            </Box>
          </div>

          <Callout tone="note" title="La prueba de una sola pregunta">
            <p>
              Si quitáramos ese planeta de la carta, ¿qué se vendría abajo
              primero? Un dominante Saturno que desaparece es la columna
              vertebral que cae. Un dominante Mercurio, el vínculo con los
              demás. La prueba no sustituye al cálculo, pero valida su
              resultado.
            </p>
          </Callout>
        </section>

        <Divider />

        {/* ── 2. REGENTE ───────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="regente">
          <H2 id="regente">Regente de la carta y planeta dominante</H2>

          <p className="leading-relaxed text-text/85">
            En español los dos términos se usan como sinónimos con mucha
            frecuencia, y varias calculadoras populares los meten en la misma
            frase. No son lo mismo, y la diferencia importa.
          </p>

          <p className="leading-relaxed text-text/85">
            El <strong>regente de la carta</strong> es el planeta que rige tu
            signo Ascendente. Es un dato único, que se lee en dos segundos y no
            depende de nada más. El <strong>planeta dominante</strong> es el
            resultado de pesar la carta entera. El regente es uno de los siete
            criterios de abajo —el más pesado, 5 puntos—, y por eso coinciden
            tantas veces. Tantas veces no es siempre.
          </p>

          <Callout tone="ok" title="Cuando se separan">
            <p>
              Imagina un Ascendente Virgo cuyo Mercurio está en la casa XII, en
              Leo, sin ningún aspecto mayor: un regente con 5 puntos y nada
              más. Pon ahora Saturno sobre el Medio Cielo, en Capricornio, en
              cuadratura al Sol. Saturno acumula angularidad, dignidad y
              aspectos, y termina muy por delante. El regente sigue describiendo
              la puerta de entrada; Saturno describe a quien la cruza.
            </p>
          </Callout>
        </section>

        <Divider />

        {/* ── 3. NINGÚN CÁLCULO OFICIAL ────────────────────── */}
        <section className="space-y-5" aria-labelledby="sin-norma">
          <H2 id="sin-norma">Por qué ningún cálculo es oficial</H2>

          <p className="leading-relaxed text-text/85">
            Tres calculadoras en línea, tres dominantes distintos para la misma
            carta. La situación es de lo más común y desanima. Tiene una
            explicación sencilla: no existe ninguna autoridad astrológica que
            haya fijado un baremo, como sí existe una norma para un formato de
            papel. Cada escuela construyó el suyo en función de lo que considera
            decisivo.
          </p>

          <p className="leading-relaxed text-text/85">
            Las tradiciones anteriores al siglo XX razonaban en{" "}
            <A href="/maitrises">dignidades</A> y{" "}
            <A href="/significateurs">significadores</A>: un planeta fuerte era
            un planeta en su domicilio o en su exaltación. La astrología del
            siglo XX añadió el peso de la angularidad, la idea de que un planeta
            posado sobre un ángulo se ve en el comportamiento. La astrología
            psicológica privilegia los aspectos a los luminares. Ninguna de las
            tres desmiente a las otras: responden a preguntas ligeramente
            distintas.
          </p>

          <Callout tone="warn" title="Qué exigirle a un baremo">
            <p>
              No que sea verdadero —nadie puede demostrarlo— sino que sea{" "}
              <strong>explícito</strong>. Un baremo publicado se puede discutir,
              corregir y reproducir. Una calculadora que no dice cómo cuenta te
              pide que la creas. La tabla de abajo está publicada entera: puedes
              impugnar cada punto, que es exactamente de lo que se trata.
            </p>
          </Callout>
        </section>

        <Divider />

        {/* ── 4. LA TABLA ──────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="tabla">
          <H2 id="tabla">La tabla de los siete pesos</H2>

          <p className="leading-relaxed text-text/85">
            Siete criterios, cada uno midiendo una manera distinta de ser fuerte
            en una carta. Puntúas los diez planetas en cada fila, sumas y
            clasificas. Basta con una tabla de diez filas y siete columnas, y el
            cálculo completo lleva unos veinte minutos la primera vez.
          </p>

          <p className="mb-2 font-semibold text-white/90">
            El baremo completo, criterio a criterio
          </p>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <div
              className="overflow-x-auto"
              role="region"
              aria-label="Baremo de la tabla de los siete pesos"
              tabIndex={0}
            >
              <table className="min-w-full border-collapse text-sm">
                <caption className="sr-only">
                  Los siete criterios de ponderación y los puntos que otorga
                  cada uno.
                </caption>
                <thead className="bg-white/[0.04]">
                  <tr className="text-left">
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Criterio
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Qué se mira
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Puntos
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {bareme.map((b, i) => (
                    <tr
                      key={b.n}
                      className={`border-t border-white/10 ${i % 2 === 1 ? "bg-white/[0.02]" : ""}`}
                    >
                      <th
                        scope="row"
                        className="px-5 py-4 text-left align-top font-medium text-white"
                      >
                        <span className="text-violet-300/80 tabular-nums">
                          {b.n}.
                        </span>{" "}
                        {b.nom}
                      </th>
                      <td className="px-5 py-4 align-top text-text/85">{b.quoi}</td>
                      <td className="px-5 py-4 align-top text-text/85">{b.pts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <figure className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <Image
              src={GrilleImage}
              alt="Carta astral trazada a mano a lápiz junto a una tabla de puntuación en blanco y un compás de latón"
              sizes="(max-width: 768px) 100vw, 800px"
              className="h-auto w-full"
            />
            <figcaption className="px-5 py-4 text-center text-xs text-text/50">
              La rueda a un lado, la tabla al otro. Esa es exactamente la
              disposición de trabajo, y la que reproduce la plantilla
              imprimible.
            </figcaption>
          </figure>

          <div className="rounded-2xl border border-amber-400/25 bg-gradient-to-br from-amber-500/[0.10] to-transparent p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-200/80">
              Plantilla de cálculo
            </p>
            <p className="mt-2 leading-relaxed text-text/85">
              La tabla en blanco para rellenar a mano: los diez planetas, las
              siete columnas y el baremo completo al dorso. Imprime dos: una
              para tu carta y otra para la de alguien que conozcas bien.
            </p>
            <a
              href={FICHE_PDF}
              download
              className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-xl border border-amber-400/30 bg-amber-400/10 px-4 py-2.5 text-sm font-medium text-amber-100 transition hover:bg-amber-400/20"
            >
              <span aria-hidden="true">↓</span>
              Descargar la plantilla (PDF, 2 páginas A4)
            </a>
          </div>

          <H3>Tres decisiones de baremo, asumidas</H3>

          <p className="leading-relaxed text-text/85">
            <strong>La regencia del Ascendente es lo que más vale.</strong> En
            la tradición, el regente del Ascendente es el regente de toda la
            carta. Un planeta que gobierna la puerta de entrada gobierna lo que
            entra y lo que sale.
          </p>

          <p className="leading-relaxed text-text/85">
            <strong>
              Una conjunción a un ángulo cuenta dos veces, y es deliberado.
            </strong>{" "}
            Puntúa en el criterio 2 (posición) y en el criterio 6 (aspecto
            recibido). Un planeta pegado al Ascendente es lo más inmediatamente
            visible de una carta: se lee en la cara, en la manera de andar, en
            los tres primeros minutos de conversación. Es la única duplicidad
            del baremo.
          </p>

          <p className="leading-relaxed text-text/85">
            <strong>Los luminares no parten como favoritos.</strong> El Sol y la
            Luna reciben una base de 2 puntos cada uno, nada más. Lo que les da
            peso son sus <A href="/maitrises">dispositores</A>, el planeta que
            rige el signo donde se alojan. Un Sol en Escorpio refuerza a Marte y
            a Plutón, no al Sol.
          </p>

          <Callout tone="note" title="Orbes utilizados">
            <p>
              8° para los aspectos mayores que implican al Sol, la Luna, el ASC
              o el MC; 6° entre dos planetas cualesquiera, y 2° menos para el
              sextil. Son orbes clásicos, deliberadamente estrechos: un baremo
              generoso en orbes acaba dando puntos a todo el mundo. En la página
              de <A href="/aspects">aspectos</A> está el detalle.
            </p>
          </Callout>
        </section>

        <Divider />

        {/* ── 5. LA CARTA ──────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="carta">
          <H2 id="carta">La carta de demostración</H2>

          <p className="leading-relaxed text-text/85">
            Una tabla sin un ejemplo terminado no sirve de nada. Aquí está la
            mía, datos de nacimiento incluidos, para que puedas recalcularla en
            el programa que prefieras y comprobar cada línea.
          </p>

          <Box title="Datos de nacimiento" tone="violet">
            <p>
              <strong>
                1 de noviembre de 1971, 10:15, Troyes (Aube, Francia)
              </strong>{" "}
              — 48° 18′ N, 4° 04′ E.
            </p>
            <p>
              La hora legal francesa era UTC+1. Francia no aplicó el horario de
              verano entre 1945 y 1976: solo se restableció mediante el decreto
              n.º 75-866 de 19 de septiembre de 1975, con efecto a partir de
              marzo de 1976. La hora universal de nacimiento es, por tanto,{" "}
              <strong>9:15 TU</strong>, sin ninguna corrección añadida.
            </p>
            <p className="text-text/70">
              Posiciones calculadas con las efemérides Swiss Ephemeris, zodiaco
              tropical, domificación Placidus.
            </p>
          </Box>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <div
              className="overflow-x-auto"
              role="region"
              aria-label="Posiciones planetarias de la carta de demostración"
              tabIndex={0}
            >
              <table className="min-w-full border-collapse text-sm">
                <caption className="sr-only">
                  Posición en signo, en casa y estado de dignidad de los diez
                  planetas de la carta del 1 de noviembre de 1971.
                </caption>
                <thead className="bg-white/[0.04]">
                  <tr className="text-left">
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Planeta
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Posición
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Casa
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      A destacar
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {positions.map((row, i) => (
                    <tr
                      key={row.p}
                      className={`border-t border-white/10 ${i % 2 === 1 ? "bg-white/[0.02]" : ""}`}
                    >
                      <th
                        scope="row"
                        className="whitespace-nowrap px-5 py-4 text-left align-top font-medium text-white"
                      >
                        <span aria-hidden="true" className="mr-2 text-amber-100/80">
                          {row.g}
                        </span>
                        {row.p}
                      </th>
                      <td className="whitespace-nowrap px-5 py-4 align-top text-text/85">
                        {row.pos}
                      </td>
                      <td className="px-5 py-4 align-top tabular-nums text-text/85">
                        {row.h}
                      </td>
                      <td className="px-5 py-4 align-top text-text/85">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="leading-relaxed text-text/85">
            Ascendente <strong>8° 07′ Sagitario</strong>, Medio Cielo{" "}
            <strong>3° 05′ Libra</strong>. Dos cúmulos: tres planetas en
            Escorpio (Sol, Mercurio, Venus) y tres en la casa XII (Mercurio,
            Venus, Neptuno), cuya cúspide cae en Escorpio.
          </p>

          <figure className="rounded-2xl border border-white/10 bg-black/20 p-6">
            <svg
              viewBox="0 0 400 400"
              className="mx-auto h-auto w-full max-w-sm text-violet-100"
              role="img"
              aria-label="Rueda de la carta del 1 de noviembre de 1971: Júpiter está posado sobre el Ascendente, a la izquierda; Plutón bordea el Medio Cielo, arriba a la izquierda; Saturno los enfrenta desde el Descendente."
            >
              <g
                fill="none"
                stroke="currentColor"
                textAnchor="middle"
                dominantBaseline="central"
              >
                <circle cx="200" cy="200" r="170" strokeOpacity="0.35" />
                <circle cx="200" cy="200" r="116" strokeOpacity="0.2" />
                <line x1="84.0" y1="200.0" x2="30.0" y2="200.0" strokeWidth="1.8" strokeOpacity="0.6" />
                <line x1="104.8" y1="266.2" x2="60.4" y2="297.1" strokeWidth="0.7" strokeOpacity="0.2" />
                <line x1="174.8" y1="313.2" x2="163.0" y2="365.9" strokeWidth="0.7" strokeOpacity="0.2" />
                <line x1="249.0" y1="305.2" x2="271.8" y2="354.1" strokeWidth="1.8" strokeOpacity="0.6" />
                <line x1="291.9" y1="270.8" x2="334.6" y2="303.8" strokeWidth="0.7" strokeOpacity="0.2" />
                <line x1="310.9" y1="234.1" x2="362.5" y2="250.0" strokeWidth="0.7" strokeOpacity="0.2" />
                <line x1="316.0" y1="200.0" x2="370.0" y2="200.0" strokeWidth="1.8" strokeOpacity="0.6" />
                <line x1="295.2" y1="133.8" x2="339.6" y2="102.9" strokeWidth="0.7" strokeOpacity="0.2" />
                <line x1="225.2" y1="86.8" x2="237.0" y2="34.1" strokeWidth="0.7" strokeOpacity="0.2" />
                <line x1="151.0" y1="94.8" x2="128.2" y2="45.9" strokeWidth="1.8" strokeOpacity="0.6" />
                <line x1="108.1" y1="129.2" x2="65.4" y2="96.2" strokeWidth="0.7" strokeOpacity="0.2" />
                <line x1="89.1" y1="165.9" x2="37.5" y2="150.0" strokeWidth="0.7" strokeOpacity="0.2" />

                <line x1="82.0" y1="132.4" x2="52.5" y2="115.4" strokeWidth="0.8" strokeOpacity="0.35" />
                <line x1="285.1" y1="306.1" x2="306.4" y2="332.6" strokeWidth="0.8" strokeOpacity="0.35" />
                <line x1="68.8" y1="164.0" x2="36.0" y2="155.1" strokeWidth="0.8" strokeOpacity="0.35" />
                <line x1="82.9" y1="173.7" x2="34.1" y2="162.8" strokeWidth="0.8" strokeOpacity="0.35" />
                <line x1="174.6" y1="333.6" x2="168.3" y2="367.0" strokeWidth="0.8" strokeOpacity="0.35" />
                <line x1="64.0" y1="201.8" x2="30.0" y2="202.3" strokeWidth="0.8" strokeOpacity="0.35" />
                <line x1="335.8" y1="207.6" x2="369.7" y2="209.5" strokeWidth="0.8" strokeOpacity="0.35" />
                <line x1="117.5" y1="91.9" x2="96.9" y2="64.9" strokeWidth="0.8" strokeOpacity="0.35" />
                <line x1="96.6" y1="188.7" x2="31.0" y2="181.6" strokeWidth="0.8" strokeOpacity="0.35" />
                <line x1="147.2" y1="74.7" x2="134.0" y2="43.3" strokeWidth="0.8" strokeOpacity="0.35" />

                <g fill="currentColor" stroke="none" fontSize="16">
                  <text x="74.2" y="127.9">☉</text>
                  <text x="290.7" y="313.1">☽</text>
                  <text x="60.2" y="161.7">☿</text>
                  <text x="74.1" y="171.8">♀</text>
                  <text x="172.9" y="342.5">♂</text>
                  <text x="55.0" y="202.0" className="fill-amber-200">♃</text>
                  <text x="344.8" y="208.1">♄</text>
                  <text x="112.0" y="84.7">♅</text>
                  <text x="87.7" y="187.8">♆</text>
                  <text x="143.7" y="66.4">♇</text>
                </g>

                <g
                  fill="currentColor"
                  stroke="none"
                  fontSize="12"
                  fontWeight="600"
                  className="fill-white/60"
                >
                  <text x="15.0" y="200.0">ASC</text>
                  <text x="121.1" y="30.5">MC</text>
                  <text x="385.0" y="200.0">DS</text>
                  <text x="278.9" y="369.5">FC</text>
                </g>
              </g>
            </svg>
            <figcaption className="mt-5 text-center text-xs text-text/50">
              La carta del 1 de noviembre de 1971 a escala, con el Ascendente a
              la izquierda. Júpiter (♃) está posado sobre el Ascendente; Plutón
              (♇) bordea el Medio Cielo; Saturno (♄) los enfrenta desde el
              Descendente. Tres planetas sobre ángulos: ahí se juega el cálculo.
            </figcaption>
          </figure>
        </section>

        <Divider />

        {/* ── 6. EL CÁLCULO ────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="calculo">
          <H2 id="calculo">El cálculo, planeta a planeta</H2>

          <p className="leading-relaxed text-text/85">
            Solo detallo los cinco primeros: más allá, las puntuaciones ya no
            cambian el resultado. La clasificación completa viene después.
          </p>

          <H3>Júpiter: 16 puntos</H3>
          <p className="leading-relaxed text-text/85">
            El Ascendente está en Sagitario, y Sagitario tiene un único regente:{" "}
            <A href="/planetes/jupiter">Júpiter</A> se lleva los 5 puntos del
            criterio 1. Además está conjunto a ese Ascendente con{" "}
            <strong>47 minutos de arco</strong>, muy por debajo de los 3° del
            baremo: 4 puntos en el criterio 2 y 2 puntos más en el criterio 6
            por ese mismo aspecto. Está en Sagitario, luego en domicilio: 3
            puntos. Quedan un sextil al Medio Cielo y un trígono a la Luna, de 1
            punto cada uno, con lo que el criterio 6 llega a su tope de 4.
          </p>
          <p className="leading-relaxed text-text/85">
            Total: 5 + 4 + 3 + 4 = <strong>16 puntos</strong>. Ningún otro
            planeta llega a la mitad.
          </p>

          <H3>Plutón: 8 puntos</H3>
          <p className="leading-relaxed text-text/85">
            <A href="/planetes/pluton">Plutón</A> bordea el Medio Cielo con 2°
            08′: 4 puntos de angularidad y 2 de aspecto recibido. Como regente
            moderno de Escorpio es codispositor del Sol (1 pt) y regente de los
            dos cúmulos (1 + 1). En cambio está en caída en Libra, lo que le
            resta 1 punto. Total: 8.
          </p>

          <H3>Neptuno: 8 puntos</H3>
          <p className="leading-relaxed text-text/85">
            <A href="/planetes/neptune">Neptuno</A> también está conjunto al
            Ascendente, pero con 6° 13′: entra en el segundo tramo del baremo,
            así que solo 2 puntos, más 1 de aspecto. Su sextil al Medio Cielo,
            en cambio, es estrecho —1° 11′—: 2 puntos. Miembro del cúmulo de la
            casa XII (1 pt), es también uno de los tres planetas más aspectados
            de la carta (2 pts). Total: 8, empatado con Plutón.
          </p>

          <H3>Marte y Saturno: 7 puntos cada uno</H3>
          <p className="leading-relaxed text-text/85">
            <A href="/planetes/mars">Marte</A> no toca ningún ángulo y no tiene
            dignidad alguna, pero rige Aries, donde se aloja la Luna (2 pts),
            comparte la regencia de Escorpio, donde se aloja el Sol (1 pt), es
            regente de los dos cúmulos (2 pts) y figura entre los más
            aspectados (2 pts). Sube
            a 7 sin ser nunca visible: el caso típico de un planeta que pesa por
            las regencias más que por la posición.{" "}
            <A href="/planetes/saturne">Saturno</A> llega al mismo total por el
            camino inverso: conjunto al Descendente con 3° 11′ y en trígono
            estrecho al Medio Cielo.
          </p>
        </section>

        <Divider />

        {/* ── 7. CLASIFICACIÓN ─────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="clasificacion">
          <H2 id="clasificacion">La clasificación y su lectura</H2>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <div
              className="overflow-x-auto"
              role="region"
              aria-label="Clasificación de los diez planetas por puntuación"
              tabIndex={0}
            >
              <table className="min-w-full border-collapse text-sm">
                <caption className="sr-only">
                  Puntuación total de cada planeta y detalle de los puntos
                  obtenidos.
                </caption>
                <thead className="bg-white/[0.04]">
                  <tr className="text-left">
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Puesto
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Planeta
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Total
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      De dónde vienen los puntos
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {classement.map((row) => (
                    <tr
                      key={row.p}
                      className={`border-t border-white/10 ${row.r === 1 ? "bg-amber-400/[0.06]" : row.r % 2 === 1 ? "bg-white/[0.02]" : ""}`}
                    >
                      <td className="px-5 py-4 align-top tabular-nums text-text/70">
                        {row.r}
                      </td>
                      <th
                        scope="row"
                        className="whitespace-nowrap px-5 py-4 text-left align-top font-medium text-white"
                      >
                        {row.p}
                      </th>
                      <td className="px-5 py-4 align-top font-semibold tabular-nums text-white">
                        {row.t}
                      </td>
                      <td className="px-5 py-4 align-top text-text/85">{row.d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <H3>Lee la diferencia, no solo al primero</H3>

          <p className="leading-relaxed text-text/85">
            La cifra que cuenta no es el total del ganador, sino la distancia
            que lo separa del segundo. Tres casos:
          </p>

          <ul className="space-y-2 leading-relaxed text-text/85">
            <li>
              <strong>Diferencia de 4 puntos o más</strong>: dominante claro. Un
              solo planeta manda, y el retrato del tipo correspondiente encaja
              de cerca.
            </li>
            <li>
              <strong>Diferencia de 1 a 3 puntos</strong>: dominante matizado. El
              primero da el motor, el segundo colorea todo lo que produce.
            </li>
            <li>
              <strong>Empate perfecto</strong>: no hay dominante, hay pareja
              dominante. Se leen los dos planetas juntos, y el retrato de un
              solo tipo nunca bastará.
            </li>
          </ul>

          <p className="leading-relaxed text-text/85">
            Aquí la diferencia es de 8 puntos: el dominante es claro y no se
            discute. Lo que sí se discute es el segundo puesto, y a eso voy
            ahora.
          </p>

          <Callout tone="ok" title="Lo que la clasificación dice del Sol">
            <p>
              Octavo de diez, con 3 puntos. Un Sol en casa XI, sin ningún
              aspecto mayor a los demás planetas, en un signo que no rige. Esa
              es, en cifras, la razón por la que{" "}
              <A href="/blog/pourquoi-votre-horoscope-ne-vous-ressemble-pas">
                los horóscopos del signo solar no se parecen a nadie
              </A>
              : comentan a un actor que, en muchísimas cartas, no tiene el papel
              principal.
            </p>
          </Callout>
        </section>

        <Divider />

        {/* ── 8. EMPATE ────────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="empate">
          <H2 id="empate">Cómo desempatar</H2>

          <p className="leading-relaxed text-text/85">
            Plutón y Neptuno salen los dos con 8 puntos. El caso es frecuente, y
            es justo donde la mayoría de los métodos se detienen dejando que el
            lector decida solo. Esta es la regla que aplico, en tres pasos y en
            este orden.
          </p>

          <div className="space-y-4">
            <Box title="Paso 1 — el ángulo manda" tone="violet">
              <p>
                A igualdad de total, pasa delante el planeta más cercano a un
                ángulo. Es el que el entorno ve primero.{" "}
                <strong>
                  Plutón está a 2° 08′ del Medio Cielo y Neptuno a 6° 13′ del
                  Ascendente: Plutón se lleva el segundo puesto.
                </strong>{" "}
                La regla basta aquí, y los dos pasos siguientes no llegan a
                usarse.
              </p>
            </Box>

            <Box title="Paso 2 — la dignidad manda">
              <p>
                Si ninguno de los dos toca un ángulo, pasa delante el que está
                en domicilio o en exaltación: actúa sin intermediarios, mientras
                que un planeta peregrino debe tomar prestados los medios de
                otro.
              </p>
            </Box>

            <Box title="Paso 3 — decide el aspecto más estrecho">
              <p>
                Si nada ha desempatado, se compara el orbe más estrecho hacia el
                Sol, la Luna o el Ascendente. Y si la diferencia sigue por
                debajo de medio minuto de arco: no se desempata. Dos dominantes
                en empate estricto son una información en sí mismos: un
                funcionamiento de dos motores, vivido casi siempre como una
                contradicción interior mucho antes que como una riqueza.
              </p>
            </Box>
          </div>

          <Callout tone="warn" title="El error que no hay que cometer">
            <p>
              Añadir un octavo criterio porque el séptimo no ha desempatado. Es
              la puerta abierta al baremo a medida, el que siempre acaba dando
              el resultado que se esperaba. La regla de desempate se decide{" "}
              <em>antes</em> de conocer las puntuaciones, no después.
            </p>
          </Callout>
        </section>

        <Divider />

        {/* ── 9. LA HORA ───────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="hora">
          <H2 id="hora">El control de la hora</H2>

          <p className="leading-relaxed text-text/85">
            Es el control que nadie hace y el único capaz de invalidar todo el
            cálculo. El Ascendente se desplaza alrededor de un grado cada cuatro
            minutos, y tres de los siete criterios dependen de él directamente.
            He rehecho la tabla completa sobre la misma carta, desplazando la
            hora de nacimiento.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            <Stat label="10:15 (hora registrada)" value="Júpiter 16 — Plutón 8" />
            <Stat label="± 30 minutos" value="Júpiter sigue primero" />
            <Stat label="9:15, una hora antes" value="Marte 11 — Júpiter 7" />
          </div>

          <p className="leading-relaxed text-text/85">
            Una hora antes, el Ascendente deja Sagitario y pasa a Escorpio.
            Júpiter pierde de golpe los 5 puntos de regencia y los 4 de
            conjunción: cae de 16 a 7. Marte, que rige Escorpio, hereda la
            regencia y toma la cabeza con 11 puntos.{" "}
            <strong>Misma carta, mismo baremo, dominante opuesto.</strong>
          </p>

          <Callout tone="warn" title="La regla de prudencia">
            <p>
              Rehaz siempre el cálculo a más y menos treinta minutos. Si el
              dominante aguanta, puedes apoyarte en él. Si cambia, tu hora de
              nacimiento no es lo bastante segura para este cálculo: pide el
              certificado literal de nacimiento, que recoge la hora declarada,
              en lugar de fiarte de un recuerdo familiar.
            </p>
          </Callout>
        </section>

        <Divider />

        {/* ── 10. LOS RETRATOS ─────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="retratos">
          <H2 id="retratos">Los diez tipos planetarios</H2>

          <p className="leading-relaxed text-text/85">
            El cálculo te da un nombre. El retrato te dice qué recubre ese
            nombre: forma de pensar, de trabajar, de amar, y la sombra que
            acompaña a todo ello. Lee el de tu dominante y después el de tu
            segundo: es el cruce de los dos lo que de verdad se parece a
            alguien.
          </p>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <div
              className="overflow-x-auto"
              role="region"
              aria-label="Los diez tipos planetarios y sus retratos"
              tabIndex={0}
            >
              <table className="min-w-full border-collapse text-sm">
                <caption className="sr-only">
                  Correspondencia entre cada planeta dominante, el tipo
                  planetario asociado y su palabra clave.
                </caption>
                <thead className="bg-white/[0.04]">
                  <tr className="text-left">
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Dominante
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Tipo
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Lo que hace por defecto
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {portraits.map((row, i) => (
                    <tr
                      key={row.slug}
                      className={`border-t border-white/10 ${i % 2 === 1 ? "bg-white/[0.02]" : ""}`}
                    >
                      <th
                        scope="row"
                        className="whitespace-nowrap px-5 py-4 text-left align-top font-medium text-white"
                      >
                        {row.p}
                      </th>
                      <td className="whitespace-nowrap px-5 py-4 align-top text-text/85">
                        <A href={`/blog/${row.slug}`}>{row.type}</A>
                      </td>
                      <td className="px-5 py-4 align-top text-text/85">{row.cle}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="leading-relaxed text-text/85">
            En la carta de arriba el dominante es Júpiter y el segundo es
            Plutón. Un <A href="/blog/jupiterien">jupiteriano</A> que transmite y
            amplía, doblado por un <A href="/blog/plutonien">plutoniano</A> que
            excava y refunda: alguien que enseña, pero que no soporta enseñar en
            la superficie.
          </p>
        </section>

        <Divider />

        {/* ── 11. LÍMITES ──────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="limites">
          <H2 id="limites">Lo que la tabla no dice</H2>

          <p className="leading-relaxed text-text/85">
            Un baremo que pretende medirlo todo ya no mide nada. Cuatro límites
            que conviene tener presentes antes de usar el resultado.
          </p>

          <ul className="space-y-3 leading-relaxed text-text/85">
            <li>
              <strong>No dice si el dominante se vive bien.</strong> Un Saturno
              dominante puede dar una columna vertebral o una losa de plomo. La
              puntuación es la misma; los <A href="/aspects">aspectos</A> que
              recibe y la historia de la persona marcan la diferencia.
            </li>
            <li>
              <strong>No sustituye a la lectura de la carta.</strong> El
              dominante es una puerta de entrada, no un resumen. Una carta se lee
              con sus doce <A href="/maisons">casas</A>, sus{" "}
              <A href="/transits">tránsitos</A> y sus contradicciones.
            </li>
            <li>
              <strong>Depende de decisiones técnicas discutibles.</strong>{" "}
              Placidus en vez de otro sistema de{" "}
              <A href="/cuspides-des-maisons">domificación</A>, regencias
              modernas en vez de solo las tradicionales: cambia esas decisiones
              y algunas puntuaciones se mueven.
            </li>
            <li>
              <strong>No es una medida científica.</strong> La astrología no es
              una ciencia y este baremo no es una demostración: es una
              herramienta de lectura, explícita y por tanto criticable. Ilumina
              un funcionamiento, no predice nada y no sustituye a ningún
              dictamen profesional.
            </li>
          </ul>
        </section>

        <Divider />

        {/* ── 12. ERRORES ──────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="errores">
          <H2 id="errores">Seis errores frecuentes</H2>

          <div className="space-y-4">
            <div>
              <H3>1. Confundir planeta dominante y signo dominante</H3>
              <p className="leading-relaxed text-text/85">
                El planeta da el motor, el{" "}
                <A href="/signes-dominants">signo</A> da la manera. Dominante
                Marte en tonalidad Libra: un combativo que negocia. No es la
                misma persona que un dominante Venus en tonalidad Aries.
              </p>
            </div>

            <div>
              <H3>2. Olvidar al regente del Ascendente</H3>
              <p className="leading-relaxed text-text/85">
                Es el criterio más pesado y el que más a menudo se pasa por
                alto, porque exige conocer las{" "}
                <A href="/maitrises">regencias</A>. Sin él, Júpiter habría
                perdido 5 de sus 16 puntos en el ejemplo anterior.
              </p>
            </div>

            <div>
              <H3>3. Contar aspectos sin orbe</H3>
              <p className="leading-relaxed text-text/85">
                Un trígono con 9° no es un trígono. Sin un límite de orbe
                declarado, todos los planetas acaban «muy aspectados» y el
                criterio deja de discriminar nada.
              </p>
            </div>

            <div>
              <H3>4. Meter los puntos ficticios en el baremo</H3>
              <p className="leading-relaxed text-text/85">
                <A href="/lilith">Lilith</A>, los{" "}
                <A href="/noeuds-lunaires">nodos lunares</A>, Quirón y los{" "}
                <A href="/asteroides">asteroides</A> tienen su interés, pero no
                son planetas: añadirlos al cálculo infla artificialmente ciertos
                signos y hace que dos cartas dejen de ser comparables.
              </p>
            </div>

            <div>
              <H3>5. Aceptar un resultado sin conocer el método</H3>
              <p className="leading-relaxed text-text/85">
                Si una calculadora no publica su baremo, su resultado no es
                falso: es incomprobable. No es lo mismo, pero tampoco es mucho
                mejor.
              </p>
            </div>

            <div>
              <H3>6. Calcular sin una hora de nacimiento fiable</H3>
              <p className="leading-relaxed text-text/85">
                Sin hora no hay Ascendente, ni Medio Cielo, ni casas: quedan
                tres criterios de siete. Más vale no concluir que concluir con
                la mitad de los datos. Lo que una carta sin hora aún permite
                leer está en el artículo sobre la{" "}
                <A href="/blog/theme-astral-sans-heure-de-naissance">
                  carta astral sin hora de nacimiento
                </A>
                .
              </p>
            </div>
          </div>
        </section>

        <Divider />

        {/* ── 13. LO QUE HAY QUE RECORDAR ──────────────────── */}
        <section className="space-y-5" aria-labelledby="recordar">
          <H2 id="recordar">Lo que hay que recordar</H2>

          <div className="relative overflow-hidden rounded-2xl border border-emerald-400/25 bg-gradient-to-br from-emerald-500/[0.10] via-sky-500/[0.05] to-transparent p-6">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl"
            />
            <ul className="relative space-y-3 leading-relaxed text-text/90">
              <li>
                ⚖ <strong>Siete criterios, un baremo publicado.</strong> Un
                método vale por lo que se puede comprobar, no por lo antiguo que
                sea.
              </li>
              <li>
                ⚖{" "}
                <strong>
                  La regencia del Ascendente y la angularidad deciden
                </strong>{" "}
                casi siempre al ganador. Empieza por esas dos filas.
              </li>
              <li>
                ⚖ <strong>El regente de tu carta es un criterio</strong>, no la
                respuesta. Gana a menudo, pero tiene que ganar por puntos.
              </li>
              <li>
                ⚖ <strong>Se interpreta la diferencia</strong>, no el total: 4
                puntos o más, dominante claro; menos de 2, pareja dominante.
              </li>
              <li>
                ⚖ <strong>Comprueba siempre a ± 30 minutos.</strong> Una hora
                hizo pasar el ejemplo de Júpiter a Marte.
              </li>
            </ul>
          </div>

          <p className="leading-relaxed text-text/85">
            Aplica la tabla a tu propia carta y después a la de alguien que
            conozcas bien: calcular el dominante de otra persona es como se
            comprueba si el método aguanta. Sobre uno mismo, siempre nos
            reconocemos un poco en todo. La{" "}
            <a
              href={FICHE_PDF}
              download
              className="underline decoration-amber-300/40 transition hover:decoration-amber-300/80"
            >
              plantilla imprimible
            </a>{" "}
            trae la tabla en blanco y el baremo al dorso.
          </p>
        </section>

        {/* ── 14. FAQ ──────────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="faq">
          <H2 id="faq">Preguntas frecuentes sobre el planeta dominante</H2>

          <div className="space-y-4">
            {faq.map((item) => (
              <details
                key={item.q}
                open
                className="group rounded-2xl border border-white/10 bg-black/20 p-5"
              >
                <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">
                  {item.q}
                </summary>
                <p className="leading-relaxed text-text/85">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ── CTA / ENLACES INTERNOS ───────────────────────── */}
        <section className="rounded-2xl border border-white/10 bg-black/20 p-6">
          <p className="text-sm text-text/60">Seguir leyendo</p>
          <div className="mt-3 space-y-3 leading-relaxed text-text/85">
            <p>
              Para aplicar la tabla necesitas antes una carta completa: la
              página <A href="/theme-astral">carta astral</A> explica qué
              contiene, y{" "}
              <A href="/blog/comprendre-signe-astrologique-ascendant-12-exemples">
                Sol y Ascendente en doce ejemplos
              </A>{" "}
              muestra por qué los dos no cuentan la misma historia.
            </p>
            <p>
              Los otros dos dominantes de una carta se calculan igual: el{" "}
              <A href="/signes-dominants">signo dominante</A> para la manera y
              la <A href="/maisons-dominantes">casa dominante</A> para el
              terreno. Los tres juntos dan una lectura de conjunto mucho más
              justa que un signo solar aislado. El{" "}
              <A href="/dictionnaire-astrologique">diccionario astrológico</A>{" "}
              recoge cada término empleado aquí.
            </p>
          </div>
          <div className="mt-5">
            <Link
              href="/blog"
              className="inline-flex rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-text/90 transition hover:bg-white/10"
            >
              ← Todos los artículos
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
