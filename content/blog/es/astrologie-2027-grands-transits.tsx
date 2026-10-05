import type { ReactNode } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";

export const meta = {
  slug: "astrologie-2027-grands-transits",
  seoTitle: "Astrología 2027: los grandes tránsitos y dónde caen",
  title: "Astrología 2027: dónde caen los grandes tránsitos en tu carta",
  description:
    "Marte retrógrado, Saturno en Aries, Júpiter en Virgo, el eclipse del 2 de agosto: los tránsitos de 2027 en hora peninsular y dónde cae cada uno en tu carta.",
  date: "2026-10-04",
  tags: [
    "transits",
    "2027",
    "méthode",
    "éclipses",
    "rétrograde",
    "Saturne",
    "Jupiter",
    "Uranus",
    "maisons astrologiques",
    "thème astral",
    "exemples",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/astrologie-2027-grands-transits.webp",
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
            ◐
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

/** Enlace saliente a una fuente primaria (sin nofollow: fuentes institucionales). */
function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="underline decoration-white/30 hover:decoration-white/60 transition"
    >
      {children}
    </a>
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

/** Tabla accesible: leyenda, cabeceras de columna y de fila, región desplazable con el teclado. */
function DataTable({
  label,
  caption,
  head,
  rows,
}: {
  label: string;
  caption: string;
  head: string[];
  rows: ReactNode[][];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
      <div
        className="overflow-x-auto"
        role="region"
        aria-label={label}
        tabIndex={0}
      >
        <table className="min-w-full border-collapse text-sm">
          <caption className="sr-only">{caption}</caption>
          <thead className="bg-white/[0.04]">
            <tr className="text-left">
              {head.map((h) => (
                <th
                  key={h}
                  scope="col"
                  className="px-5 py-4 font-semibold text-white"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr
                key={i}
                className={`border-t border-white/10 ${i % 2 === 1 ? "bg-white/[0.02]" : ""}`}
              >
                {r.map((cell, k) =>
                  k === 0 ? (
                    <th
                      key={k}
                      scope="row"
                      className="px-5 py-4 text-left align-top font-medium text-white"
                    >
                      {cell}
                    </th>
                  ) : (
                    <td key={k} className="px-5 py-4 align-top text-text/85">
                      {cell}
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ── Índice ──────────────────────────────────────────────────── */

const toc = [
  { id: "seis-movimientos", label: "2027 en seis movimientos" },
  { id: "marte-retrogrado", label: "Marte retrógrado, del 10 de enero al 1 de abril" },
  { id: "saturno-aries", label: "Saturno en Aries todo el año" },
  { id: "jupiter", label: "Júpiter: de Leo a Virgo el 26 de julio" },
  { id: "planetas-lentos", label: "Urano, Neptuno, Plutón: el fondo del año" },
  { id: "eclipses", label: "Los dos eclipses solares" },
  { id: "grados-sensibles", label: "El mapa de grados sensibles de 2027" },
  { id: "metodo", label: "Leer 2027 en tu carta en cuatro pasos" },
  { id: "ejemplo", label: "El ejemplo: 2027 sobre una carta real" },
  { id: "faq", label: "Preguntas frecuentes" },
];

/* ── FAQ (visualización y JSON-LD desde la misma fuente) ─────── */

const faq = [
  {
    q: "¿Necesito mi hora de nacimiento para usar este calendario?",
    a: "No para el Sol ni para los planetas: la fecha basta para situarlos al grado, salvo la Luna. La hora se vuelve necesaria en cuanto quieres saber qué casa natal atraviesa un tránsito, o sus contactos con el Ascendente y el Medio Cielo. Sin ella, lee el mapa de grados sensibles solo con tus planetas y deja las casas de lado.",
  },
  {
    q: "¿Qué orbe hay que usar para un tránsito?",
    a: "Tres grados para una conjunción, una oposición o una cuadratura de Saturno, Urano, Neptuno o Plutón; dos grados para sus trígonos y sextiles; un grado para Marte y para las lunaciones. En todos los casos, lo que ocurre se concentra alrededor de las fechas exactas y de las estaciones, cuando el planeta frena hasta quedarse quieto.",
  },
  {
    q: "¿Cuenta un tránsito que no toca ningún punto de mi carta?",
    a: "Sí, pero de otra manera. Tiñe la casa natal que atraviesa, es decir, un ámbito de la vida, durante toda su estancia: Saturno en la casa IV durante todo 2027, por ejemplo, pesa sobre el hogar y las bases aunque no forme ningún aspecto exacto. Lo que no produce es un periodo fechado, como sí lo hace un contacto con un planeta o con un ángulo.",
  },
  {
    q: "¿Por qué las fechas cambian de una web a otra?",
    a: "Por tres razones. El huso horario: Neptuno se detiene el 10 de julio a las 0:41 en hora peninsular, pero el 9 de julio a las 23:41 en Canarias. El acontecimiento elegido: la estación retrógrada, el cambio de signo y el aspecto exacto no caen el mismo día. Y la efeméride usada, que puede mover una hora unos minutos. Las fechas de este artículo están calculadas con Swiss Ephemeris y dadas en hora peninsular.",
  },
  {
    q: "¿Marte retrógrado en 2027 es «malo» para Leo y Virgo?",
    a: "No. Un tránsito no apunta a un signo, pasa por grados: aquí, entre 20° 56′ Leo y 10° 26′ Virgo. Por conjunción afecta a quienes nacieron entre el 13 de agosto y el 3 de septiembre, y por aspecto tenso a quienes tienen un punto natal en los mismos grados de Acuario, Piscis, Tauro, Géminis, Escorpio o Sagitario. Un Leo del 25 de julio no queda tocado por conjunción.",
  },
  {
    q: "¿Me afecta el eclipse del 2 de agosto si no lo veo?",
    a: "La visibilidad es cosa de astronomía: la totalidad cruza el extremo sur de Andalucía, Gibraltar, el norte de África y Egipto. En astrología cuenta el grado, 9° 55′ Leo, se vea o no desde tu casa. El eclipse toca una carta si un punto natal está a menos de tres grados de ese punto, de su opuesto o de sus cuadraturas.",
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

/* ── Los seis movimientos de 2027 ────────────────────────────── */

const movimientos = [
  {
    que: "Marte retrógrado",
    cuando: "10 de enero → 1 de abril",
    donde: "10° 26′ Virgo → 20° 56′ Leo",
    nota: "El único del año. Zona recorrida tres veces, del 5 de noviembre de 2026 al 8 de junio de 2027.",
  },
  {
    que: "Júpiter cambia de signo",
    cuando: "26 de julio, 6:49",
    donde: "Leo → Virgo",
    nota: "Directo el 13 de abril a 17° 00′ Leo; en Virgo hasta el 24 de agosto de 2028.",
  },
  {
    que: "Saturno en Aries",
    cuando: "Todo el año",
    donde: "8° 20′ → 27° 53′ Aries",
    nota: "Retrógrado del 9 de agosto al 24 de diciembre; deja Aries el 13 de abril de 2028.",
  },
  {
    que: "Urano en Géminis",
    cuando: "Todo el año",
    donde: "1° 41′ → 9° 57′ Géminis",
    nota: "Directo el 8 de febrero, retrógrado el 15 de septiembre.",
  },
  {
    que: "Neptuno en Aries, Plutón en Acuario",
    cuando: "Todo el año",
    donde: "1° 43′ → 6° 40′ Aries · 4° 21′ → 7° 11′ Acuario",
    nota: "Neptuno retrógrado del 10 de julio al 15 de diciembre; Plutón, del 8 de mayo al 18 de octubre.",
  },
  {
    que: "Dos eclipses solares",
    cuando: "6 de febrero · 2 de agosto",
    donde: "17° 38′ Acuario · 9° 55′ Leo",
    nota: "Anular y después total; tres eclipses lunares penumbrales (21 de febrero, 18 de julio, 17 de agosto).",
  },
];

/* ── Mapa de grados sensibles de 2027 ────────────────────────── */

const mapa = [
  {
    transito: "Marte retrógrado (10 ene. → 1 abr.)",
    grados: "20° 56′ Leo → 10° 26′ Virgo, recorridos tres veces (5 nov. 2026 → 8 jun. 2027)",
    conj: "Nacidos del 13 de agosto al 3 de septiembre",
    tensos: "Oposición: 9 de febrero → 1 de marzo · Cuadraturas: 11 de mayo → 1 de junio, 12 de noviembre → 3 de diciembre",
  },
  {
    transito: "Saturno en Aries (todo el año)",
    grados: "8° 20′ → 27° 53′ Aries; triple paso de 21° 01′ a 27° 53′ (4 may. 2027 → 27 mar. 2028)",
    conj: "Nacidos del 28 de marzo al 18 de abril",
    tensos: "Oposición: 1 → 22 de octubre · Cuadraturas: 29 de junio → 21 de julio, 29 de diciembre → 19 de enero",
  },
  {
    transito: "Júpiter en Leo (hasta el 26 jul.)",
    grados: "17° 00′ → 27° 18′ Leo; triple paso de 17° a 27° (sept. 2026 → jul. 2027)",
    conj: "Nacidos del 9 al 21 de agosto",
    tensos: "Oposición: 5 → 17 de febrero · Cuadraturas: 7 → 19 de mayo, 9 → 20 de noviembre",
  },
  {
    transito: "Júpiter en Virgo (desde el 26 jul.)",
    grados: "0° → 27° 18′ Virgo; triple paso de 17° 32′ a 27° 31′ (oct. 2027 → ago. 2028)",
    conj: "Nacidos del 22 de agosto al 21 de septiembre",
    tensos: "Oposición: 18 de febrero → 18 de marzo · Cuadraturas: 20 de mayo → 19 de junio, 21 de noviembre → 20 de diciembre",
  },
  {
    transito: "Urano en Géminis",
    grados: "1° 41′ → 9° 57′ Géminis; triple paso de 5° 56′ a 9° 57′ (may. 2027 → may. 2028)",
    conj: "Nacidos del 22 de mayo al 1 de junio",
    tensos: "Oposición: 23 de noviembre → 2 de diciembre · Cuadraturas: 20 de febrero → 1 de marzo, 24 de agosto → 3 de septiembre",
  },
  {
    transito: "Neptuno en Aries",
    grados: "1° 43′ → 6° 40′ Aries; triple paso de 3° 51′ a 6° 40′ (mar. 2027 → abr. 2028)",
    conj: "Nacidos del 21 al 28 de marzo",
    tensos: "Oposición: 24 → 30 de septiembre · Cuadraturas: 22 → 29 de junio, 23 → 29 de diciembre",
  },
  {
    transito: "Plutón en Acuario",
    grados: "4° 21′ → 7° 11′ Acuario; triple paso de 4° 45′ a 7° 11′ (ene. 2027 → feb. 2028)",
    conj: "Nacidos del 24 al 28 de enero",
    tensos: "Oposición: 27 → 31 de julio · Cuadraturas: 24 → 28 de abril, 27 → 31 de octubre",
  },
  {
    transito: "Eclipse anular del 6 de febrero",
    grados: "17° 38′ Acuario, orbe de 3°",
    conj: "Nacidos del 3 al 10 de febrero",
    tensos: "Oposición: 6 → 14 de agosto · Cuadraturas: 4 → 12 de mayo, 6 → 13 de noviembre",
  },
  {
    transito: "Eclipse total del 2 de agosto",
    grados: "9° 55′ Leo, orbe de 3°",
    conj: "Nacidos del 29 de julio al 6 de agosto",
    tensos: "Oposición: 26 de enero → 2 de febrero · Cuadraturas: 26 de abril → 4 de mayo, 29 de octubre → 6 de noviembre",
  },
];

/* ── El ejemplo: 1 de noviembre de 1971, 10:15, Troyes ───────── */

const ejemplo = [
  {
    puesto: "1",
    transito: "Urano en oposición al Ascendente (8° 07′ Sagitario) y a Júpiter (8° 54′ Sagitario)",
    fechas: "8 de julio y 25 de noviembre de 2027, después 27 de abril de 2028 · 26 de julio y 6 de noviembre de 2027, después 11 de mayo de 2028",
    porque: "Planeta lento, ángulo de la carta, triple paso: se cumplen los tres criterios. Urano se instala sobre el Descendente natal (8° 07′ Géminis) y se queda ahí hasta la primavera de 2028.",
  },
  {
    puesto: "2",
    transito: "Saturno en conjunción con la Luna (16° 52′ Aries, casa IV)",
    fechas: "1 de abril de 2027, paso único; precedido por Saturno en oposición a Urano natal (15° 28′ Libra) el 21 de marzo",
    porque: "Un solo paso, pero sobre una luminaria en una casa angular. Saturno recorre la casa IV todo el año: las bases, el hogar, aquello en lo que uno se apoya.",
  },
  {
    puesto: "3",
    transito: "Plutón en trígono a Saturno natal (4° 56′ Géminis, casa VI)",
    fechas: "19 de enero, 19 de septiembre y 15 de noviembre de 2027",
    porque: "Lento y triple, pero armónico: un apoyo de fondo más que un acontecimiento. Plutón en cuadratura al Sol natal (8° 17′ Escorpio) se acerca a 1° 07′ el 8 de mayo, sin ser exacto antes del 21 de marzo de 2028.",
  },
  {
    puesto: "4",
    transito: "Eclipse total a 9° 55′ Leo, casa VIII",
    fechas: "2 de agosto de 2027",
    porque: "En cuadratura al Sol natal a 1° 38′, en trígono al Ascendente y a Júpiter. Una lunación de peso en la casa de lo compartido, las deudas y las transformaciones.",
  },
  {
    puesto: "5",
    transito: "Marte retrógrado en oposición a Marte natal (27° 22′ Acuario, casa III)",
    fechas: "19 de noviembre de 2026, 28 de febrero y 7 de mayo de 2027",
    porque: "Triple paso, pero planeta rápido: siete meses en los que el impulso se vuelve a jugar, en las casas VIII y IX de la carta, sin el alcance de un tránsito lento.",
  },
  {
    puesto: "6",
    transito: "Júpiter en Virgo, casa IX; en cuadratura al Ascendente y a Júpiter natal",
    fechas: "2 y 5 de septiembre de 2027, paso único",
    porque: "Un contacto breve de Júpiter con su propio lugar natal y con el Ascendente: conviene anotarlo, sin sobrevalorarlo.",
  },
  {
    puesto: "7",
    transito: "Neptuno en oposición al Medio Cielo (3° 05′ Libra)",
    fechas: "26 de febrero de 2027, tercer y último paso (tras el 25 de abril y el 22 de septiembre de 2026)",
    porque: "Un tránsito que termina: 2027 escribe su última línea, no la primera.",
  },
];

/* ── Línea de tiempo: los hitos de 2027 (posiciones calculadas sobre 365 días) ─ */

const ticks = [
  { x: 60, l: "ene." },
  { x: 126.6, l: "feb." },
  { x: 185, l: "mar." },
  { x: 249.5, l: "abr." },
  { x: 312, l: "may." },
  { x: 376.5, l: "jun." },
  { x: 439, l: "jul." },
  { x: 503.5, l: "ago." },
  { x: 568, l: "sept." },
  { x: 630.5, l: "oct." },
  { x: 695, l: "nov." },
  { x: 757.5, l: "dic." },
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
        {/* ── IMAGEN DE PORTADA (LCP) ──────────────────────── */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f13]">
          <Image
            src={meta.cover}
            alt="Rueda de carta astral en papel sobre un escritorio de noche, un compás y una regla de latón trazan un arco entre dos posiciones, un calendario anual al fondo"
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
              Fechas calculadas · Método · Carta real
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-text/85">
              Calendarios astrológicos de 2027 hay por todas partes: fechas,
              grados, un párrafo por signo. Lo que casi nunca encontrarás es la
              pregunta que lo cambia todo:{" "}
              <strong>
                ¿dónde caen esos tránsitos en tu carta, y cuáles merecen de
                verdad tu atención?
              </strong>
            </p>

            <p className="mt-3 max-w-2xl leading-relaxed text-text/80">
              Este artículo da las fechas de 2027 en hora peninsular,
              calculadas con efemérides, y después un método en cuatro pasos
              para leerlas en tu propia carta: el mapa de grados sensibles, las
              zonas de triple paso, la casa natal que se atraviesa. Con una
              carta real, la mía, para mostrar el razonamiento de principio a
              fin.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <Pill tone="violet">Hora peninsular</Pill>
              <Pill tone="sky">Seis movimientos</Pill>
              <Pill tone="emerald">Método en cuatro pasos</Pill>
              <Pill tone="orange">Sin predicciones por signo</Pill>
            </div>

            <div className="mt-4">
              <TagPillsInline tags={meta.tags} />
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <Stat label="El único Marte retrógrado" value="10 de enero → 1 de abril" />
              <Stat label="El giro del año" value="Júpiter entra en Virgo el 26 de julio" />
              <Stat label="El eclipse" value="2 de agosto, 9° 55′ Leo, total" />
            </div>
          </div>
        </header>

        {/* ── RESPUESTA DIRECTA ────────────────────────────── */}
        <div className="relative overflow-hidden rounded-2xl border border-violet-400/25 bg-gradient-to-br from-violet-500/[0.12] via-indigo-500/[0.06] to-transparent px-6 py-5">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-200/10 blur-2xl"
          />
          <p className="relative text-sm font-semibold uppercase tracking-[0.2em] text-amber-200/80">
            La respuesta corta
          </p>
          <p className="relative mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
            En <strong>astrología, 2027</strong> se resume en seis
            movimientos: Marte retrógrado en Virgo y Leo del 10 de enero al 1
            de abril, el único del año; Júpiter, que deja Leo por Virgo el 26
            de julio; Saturno en Aries de principio a fin, retrógrado del 9 de
            agosto al 24 de diciembre; Urano en Géminis, Neptuno en Aries y
            Plutón en Acuario, que siguen su camino; dos eclipses solares,
            anular el 6 de febrero a 17° 38′ Acuario y total el 2 de agosto a
            9° 55′ Leo, visible desde el sur de Andalucía; y ninguna Venus
            retrógrada. Ninguna de esas fechas te afecta igual que a tu
            vecino: todo depende del grado en el que cae en tu carta. Eso es lo
            que este artículo te enseña a leer.
          </p>
        </div>

        {/* ── LO ESENCIAL ──────────────────────────────────── */}
        <section
          className="rounded-2xl border border-emerald-400/25 bg-gradient-to-br from-emerald-500/[0.09] via-sky-500/[0.04] to-transparent p-6"
          aria-labelledby="lo-esencial"
        >
          <h2
            id="lo-esencial"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200/80"
          >
            Lo esencial
          </h2>
          <ul className="mt-4 space-y-2 leading-relaxed text-text/90">
            <li>
              Un tránsito no apunta a un signo, pasa por{" "}
              <strong>grados</strong>. Toca tu carta si llega a menos de 3° de
              un planeta o de un ángulo natal, en conjunción, oposición o
              cuadratura.
            </li>
            <li>
              <strong>El mapa de grados sensibles</strong> reúne, para cada
              tránsito de 2027, los grados que recorre y las fechas de
              nacimiento cuyo Sol está en su camino.
            </li>
            <li>
              Los tránsitos que pesan son los que pasan{" "}
              <strong>tres veces</strong> por el mismo grado, por la
              retrogradación. Cada apartado indica esa zona.
            </li>
            <li>
              Cuatro pasos: <strong>anotar</strong> tus grados,{" "}
              <strong>superponer</strong> el mapa, <strong>situar</strong> la
              casa natal, <strong>jerarquizar</strong> con la regla de los tres
              pasos.
            </li>
            <li>
              Sin predicciones por signo solar: un Leo del 25 de julio y un Leo
              del 15 de agosto no viven el mismo Marte retrógrado.
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

        {/* ── 1. SEIS MOVIMIENTOS ──────────────────────────── */}
        <section className="space-y-5" aria-labelledby="seis-movimientos">
          <H2 id="seis-movimientos">2027 en seis movimientos</H2>

          <p className="text-lg leading-relaxed text-text/85">
            Seis movimientos dan forma al año: un Marte retrógrado en invierno,
            un cambio de signo de Júpiter en verano, Saturno que avanza y luego
            retrocede en Aries, tres planetas lentos que prolongan una estancia
            empezada en 2026 y dos eclipses solares en el eje Acuario-Leo.
            Mercurio retrograda tres veces; Venus, ninguna.
          </p>

          <DataTable
            label="Los seis movimientos astrológicos de 2027"
            caption="Para cada movimiento de 2027, el periodo en hora peninsular, los grados implicados y un detalle útil."
            head={["Movimiento", "Cuándo", "Dónde", "Conviene saber"]}
            rows={movimientos.map((m) => [m.que, m.cuando, m.donde, m.nota])}
          />

          <figure className="rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-6">
            <div
              className="overflow-x-auto"
              role="region"
              aria-label="Línea de tiempo de los hitos astrológicos de 2027"
              tabIndex={0}
            >
              <svg
                viewBox="0 0 840 290"
                role="img"
                aria-label="Línea de tiempo de 2027: Marte retrógrado del 10 de enero al 1 de abril; Júpiter en Leo hasta el 26 de julio y después en Virgo; Saturno en Aries todo el año, retrógrado del 9 de agosto al 24 de diciembre; Mercurio retrógrado del 9 de febrero al 3 de marzo, del 10 de junio al 4 de julio y del 7 al 28 de octubre; eclipses solares el 6 de febrero y el 2 de agosto."
                className="min-w-[640px] w-full"
              >
                <g fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="12" fill="#d4d4d8">
                  {ticks.map((t) => (
                    <g key={t.l}>
                      <line x1={t.x} y1={40} x2={t.x} y2={262} stroke="#ffffff" strokeOpacity="0.08" />
                      <text x={t.x + 4} y={32} fill="#a1a1aa">{t.l}</text>
                    </g>
                  ))}
                  <line x1={820} y1={40} x2={820} y2={262} stroke="#ffffff" strokeOpacity="0.08" />

                  {/* Marte retrógrado: 10 ene. → 1 abr. */}
                  <text x={4} y={74} fontWeight="600">Marte ℞</text>
                  <rect x={80.8} y={62} width={168.7} height={16} rx={8} fill="#f87171" fillOpacity="0.85" />
                  <text x={258} y={74} fill="#fca5a5">10 ene. → 1 abr.</text>

                  {/* Júpiter: Leo hasta el 26 jul., luego Virgo */}
                  <text x={4} y={118} fontWeight="600">Júpiter</text>
                  <rect x={60} y={106} width={431} height={16} rx={8} fill="#fbbf24" fillOpacity="0.8" />
                  <rect x={491} y={106} width={329} height={16} rx={8} fill="#34d399" fillOpacity="0.8" />
                  <text x={200} y={118} fill="#1c1917" fontWeight="600">Leo</text>
                  <text x={620} y={118} fill="#052e16" fontWeight="600">Virgo (26 jul.)</text>

                  {/* Saturno: Aries todo el año, ℞ 9 ago. → 24 dic. */}
                  <text x={4} y={162} fontWeight="600">Saturno</text>
                  <rect x={60} y={153} width={760} height={6} rx={3} fill="#a78bfa" fillOpacity="0.45" />
                  <rect x={520} y={150} width={285} height={16} rx={8} fill="#a78bfa" fillOpacity="0.9" />
                  <text x={530} y={162} fill="#1e1b4b" fontWeight="600">℞ 9 ago. → 24 dic.</text>
                  <text x={70} y={147} fill="#c4b5fd">Aries todo el año</text>

                  {/* Mercurio retrógrado ×3 */}
                  <text x={4} y={206} fontWeight="600">Mercurio ℞</text>
                  <rect x={143.3} y={194} width={45.7} height={16} rx={8} fill="#60a5fa" fillOpacity="0.85" />
                  <rect x={395} y={194} width={50} height={16} rx={8} fill="#60a5fa" fillOpacity="0.85" />
                  <rect x={643} y={194} width={44} height={16} rx={8} fill="#60a5fa" fillOpacity="0.85" />
                  <text x={196} y={206} fill="#93c5fd">9 feb. → 3 mar.</text>
                  <text x={452} y={206} fill="#93c5fd">10 jun. → 4 jul.</text>
                  <text x={694} y={206} fill="#93c5fd">7 → 28 oct.</text>

                  {/* Eclipses solares */}
                  <text x={4} y={250} fontWeight="600">Eclipses</text>
                  <circle cx={137} cy={246} r={7} fill="none" stroke="#fde68a" strokeWidth="2.5" />
                  <text x={150} y={250} fill="#fde68a">6 feb. · anular · 17° 38′ ♒</text>
                  <circle cx={505.5} cy={246} r={7} fill="#fde68a" />
                  <text x={518} y={250} fill="#fde68a">2 ago. · total · 9° 55′ ♌</text>
                </g>
              </svg>
            </div>
            <figcaption className="mt-3 text-center text-xs text-text/50">
              Los hitos de 2027 en una sola línea de tiempo, situados a partir
              de las fechas reales, en hora peninsular.
            </figcaption>
          </figure>

          <p className="leading-relaxed text-text/85">
            Las tres retrogradaciones de Mercurio (9 de febrero → 3 de marzo,
            10 de junio → 4 de julio, 7 → 28 de octubre) tienen{" "}
            <A href="/blog/mercure-retrograde-2027-dates">su propio artículo</A>,
            con fechas y sombras. Las lunas nuevas y llenas están en el{" "}
            <A href="/blog/calendrier-pleine-lune-nouvelle-lune-2026-2027">
              calendario lunar 2026-2027
            </A>
            . Aquí nos ocupamos de lo que dura: los tránsitos de los planetas
            lentos, el Marte retrógrado, los eclipses y, sobre todo, la manera
            de llevarlos a tu carta.
          </p>
        </section>

        {/* ── 2. MARTE RETRÓGRADO ──────────────────────────── */}
        <section className="space-y-5" aria-labelledby="marte-retrogrado">
          <H2 id="marte-retrogrado">Marte retrógrado, del 10 de enero al 1 de abril</H2>

          <p className="text-lg leading-relaxed text-text/85">
            Marte se detiene el 10 de enero a las 13:59, a 10° 26′ Virgo,
            retrocede hasta entrar en Leo el 21 de febrero y vuelve a avanzar
            el 1 de abril a las 16:08, a 20° 56′ Leo. Es el único Marte
            retrógrado de 2027 y el último antes de 2029. Entre ambas fechas,
            el 19 de febrero, Marte está en oposición al Sol, y al día
            siguiente lo más cerca de la Tierra: brilla toda la noche, más que
            en ningún otro momento del año.
          </p>

          <p className="leading-relaxed text-text/85">
            Doce semanas de retrogradación, pero la zona afectada está ocupada
            mucho más tiempo. Marte llega a 20° 56′ Leo el 5 de noviembre de
            2026, alcanza 10° 26′ Virgo el 10 de enero, vuelve a 20° 56′ Leo el
            1 de abril y cruza de nuevo 10° 26′ Virgo el 8 de junio. Quien tenga
            un punto natal entre esos dos grados ve pasar a Marte por encima{" "}
            <strong>tres veces en siete meses</strong>. Es lo primero que hay
            que comprobar, antes de cualquier comentario sobre el signo.
          </p>

          <Box title="Lo que pide Marte retrógrado" tone="amber">
            <p>
              Marte es el impulso: la decisión, la acción, la capacidad de
              imponerse. Retrógrado, ese impulso se vuelve hacia lo que ya se
              puso en marcha. Los proyectos empezados en noviembre y diciembre
              de 2026 vuelven a la mesa, y los desacuerdos que quedaron
              pendientes, también. Se avanza menos rápido y con más tino. En
              Virgo, eso pasa por el detalle y el trabajo; en Leo, a partir del
              21 de febrero, por el orgullo y por lo que uno quiere mostrar.
            </p>
          </Box>

          <H3>Dónde cae en tu carta</H3>
          <p className="leading-relaxed text-text/85">
            Por conjunción, Marte retrógrado toca cualquier punto natal situado
            entre 20° 56′ Leo y 10° 26′ Virgo. Para el Sol, eso corresponde a
            quienes nacieron <strong>del 13 de agosto al 3 de septiembre</strong>,
            sea cual sea el año. Por oposición, a los mismos grados de Acuario
            y Piscis (nacidos del 9 de febrero al 1 de marzo); por cuadratura,
            de Tauro y Géminis (11 de mayo → 1 de junio) y de Escorpio y
            Sagitario (12 de noviembre → 3 de diciembre). La casa natal que
            contiene el final de Leo y el principio de Virgo indica, por su
            parte, el ámbito de la vida implicado.
          </p>
        </section>

        {/* ── 3. SATURNO EN ARIES ──────────────────────────── */}
        <section className="space-y-5" aria-labelledby="saturno-aries">
          <H2 id="saturno-aries">Saturno en Aries todo el año</H2>

          <p className="text-lg leading-relaxed text-text/85">
            Saturno empieza 2027 a 8° 20′ Aries y lo termina a 21° 04′. Entre
            medias sube hasta 27° 53′, donde se detiene el 9 de agosto a las
            20:05, y luego retrocede hasta el 24 de diciembre a las 3:47, a
            21° 01′. Entró en Aries el 14 de febrero de 2026 y pasará a Tauro
            el 13 de abril de 2028: 2027 es el año central de esa estancia.
          </p>

          <p className="leading-relaxed text-text/85">
            Se suceden dos ritmos. De enero a principios de mayo, Saturno
            recorre los grados 8 a 21 de Aries en un solo paso, sin volver
            atrás. A partir del 4 de mayo entra en la zona que visitará tres
            veces, <strong>de 21° 01′ a 27° 53′</strong>: hacia delante hasta
            el 9 de agosto, retrógrado hasta el 24 de diciembre y de nuevo
            directo hasta el 27 de marzo de 2028. Un punto natal en esa zona
            vive un tránsito de Saturno de once meses; un punto entre 8° y 21°
            vive un paso más breve, pero un paso de Saturno sigue siendo un
            paso de Saturno.
          </p>

          <Box title="Lo que pide Saturno en Aries" tone="violet">
            <p>
              Saturno es la estructura: el marco, la duración, la
              responsabilidad que uno acaba aceptando. Aries es el signo de la
              iniciativa, el que empieza sin esperar. Los dos no se entienden
              de forma espontánea: Saturno está ahí en{" "}
              <A href="/maitrises">caída</A>. El tránsito pide aprender a
              empezar con método, a sostener lo que se ha lanzado, a aceptar
              estar solo al principio. Su aliado del año es Júpiter, en trígono
              exacto el 3 de abril y el 12 de julio: la confianza que sostiene
              el esfuerzo.
            </p>
          </Box>

          <H3>Dónde cae en tu carta</H3>
          <p className="leading-relaxed text-text/85">
            Un Sol natal entre 8° y 28° de Aries, es decir, un nacimiento{" "}
            <strong>del 28 de marzo al 18 de abril</strong>, recibe a Saturno
            en conjunción a lo largo del año. Quien nació entre el 1 y el 22 de
            octubre lo recibe en oposición, y quien nació entre el 29 de junio
            y el 21 de julio o entre el 29 de diciembre y el 19 de enero, en
            cuadratura. Para todos los demás, Saturno atraviesa una casa natal
            durante todo el año, y es esa casa la que hay que mirar: los{" "}
            <A href="/transits">tránsitos de Saturno por casa</A> están
            descritos en el curso.
          </p>
        </section>

        {/* ── 4. JÚPITER ───────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="jupiter">
          <H2 id="jupiter">Júpiter: de Leo a Virgo el 26 de julio</H2>

          <p className="text-lg leading-relaxed text-text/85">
            Júpiter está en Leo desde el 30 de junio de 2026 y retrógrado desde
            el 13 de diciembre, a 27° 01′. Retoma la marcha directa el 13 de
            abril de 2027 a 17° 00′ Leo, vuelve a 27° el 11 de julio y entra en
            Virgo el 26 de julio a las 6:49. Termina el año ahí, a 27° 16′, y
            se queda hasta el 24 de agosto de 2028.
          </p>

          <p className="leading-relaxed text-text/85">
            Los grados 17 a 27 de Leo se recorren, por tanto, tres veces, de
            septiembre de 2026 a julio de 2027. El mismo mecanismo se repite al
            otro lado: Júpiter se detendrá el 12 de enero de 2028 a 27° 31′
            Virgo y retrocederá hasta 17° 32′, lo que convierte los grados 17 a
            27 de Virgo en una zona de triple paso entre octubre de 2027 y
            agosto de 2028. Los grados 0 a 17 de Virgo, recorridos de finales
            de julio a mediados de octubre de 2027, solo reciben una visita.
          </p>

          <Box title="Lo que cambia el paso a Virgo" tone="emerald">
            <p>
              Júpiter amplía lo que toca: el sentido, la confianza, las
              oportunidades. En Leo amplía la visibilidad y la creación, lo que
              uno firma con su nombre. En Virgo amplía el oficio, la salud, el
              servicio, el arte de hacer bien las cosas. El año pasa del foco
              al banco de trabajo. El 10 de septiembre, Júpiter en Virgo forma
              una cuadratura exacta con Urano en Géminis, a 9° 57′: el
              encuentro entre un método que se amplía y una novedad que
              descoloca.
            </p>
          </Box>

          <H3>Dónde cae en tu carta</H3>
          <p className="leading-relaxed text-text/85">
            Júpiter en Leo afecta por conjunción a los nacidos del 9 al 21 de
            agosto; Júpiter en Virgo, a los nacidos del 22 de agosto al 21 de
            septiembre. Por oposición, respectivamente, a los nacidos del 5 al
            17 de febrero y del 18 de febrero al 18 de marzo. Júpiter es
            rápido: un contacto único dura dos o tres semanas; un contacto
            triple se extiende a lo largo de casi diez meses. Las dos casas
            natales atravesadas, la que contiene el final de Leo y la que
            contiene Virgo, reciben cada una un año de su atención.
          </p>
        </section>

        {/* ── 5. LOS PLANETAS LENTOS ───────────────────────── */}
        <section className="space-y-5" aria-labelledby="planetas-lentos">
          <H2 id="planetas-lentos">Urano, Neptuno, Plutón: el fondo del año</H2>

          <p className="text-lg leading-relaxed text-text/85">
            Los tres planetas lentos no son la noticia de 2027: lo fueron entre
            2024 y 2026, cuando los tres cambiaron de signo. Urano está en
            Géminis desde el 26 de abril de 2026, Neptuno en Aries desde el 26
            de enero de 2026 y Plutón en Acuario desde el 19 de noviembre de
            2024. En 2027 avanzan entre tres y ocho grados, y eso es
            precisamente lo que los hace poderosos para quien tenga un punto
            natal en su camino: sus tránsitos duran de doce a dieciocho meses,
            casi siempre en tres pasos.
          </p>

          <DataTable
            label="Los tres planetas lentos en 2027"
            caption="Para Urano, Neptuno y Plutón: los grados recorridos en 2027, el periodo retrógrado y la zona recorrida tres veces."
            head={["Planeta", "Grados en 2027", "Retrógrado", "Zona de triple paso"]}
            rows={[
              ["Urano en Géminis", "1° 41′ → 9° 57′", "15 de septiembre → 13 de febrero de 2028", "5° 56′ → 9° 57′ (mayo de 2027 → mayo de 2028)"],
              ["Neptuno en Aries", "1° 43′ → 6° 40′", "10 de julio → 15 de diciembre", "3° 51′ → 6° 40′ (marzo de 2027 → abril de 2028)"],
              ["Plutón en Acuario", "4° 21′ → 7° 11′", "8 de mayo → 18 de octubre", "4° 45′ → 7° 11′ (enero de 2027 → febrero de 2028)"],
            ]}
          />

          <p className="leading-relaxed text-text/85">
            Entre ellos, los tres se llevan bien. Urano y Plutón forman un
            trígono exacto el 15 de junio, a 6° 52′ de Géminis y de Acuario:
            dos signos de aire, la novedad técnica y la transformación
            colectiva tirando en la misma dirección. Urano y Neptuno están en
            sextil exacto el 15 de enero y el 6 de junio; Neptuno y Plutón, el
            29 de junio y el 16 de octubre. Son acuerdos de fondo, que se leen
            a escala de una generación más que de un año; adquieren un sentido
            personal cuando uno de los tres toca tu carta.
          </p>

          <H3>Dónde cae en tu carta</H3>
          <p className="leading-relaxed text-text/85">
            Urano en conjunción para los nacidos del 22 de mayo al 1 de junio;
            Neptuno, del 21 al 28 de marzo; Plutón, del 24 al 28 de enero. En
            oposición, Urano apunta a los nacidos del 23 de noviembre al 2 de
            diciembre; Neptuno, del 24 al 30 de septiembre; Plutón, del 27 al
            31 de julio. Las cuadraturas están en el mapa de más abajo. Más
            allá del Sol, el mismo razonamiento vale para la Luna, el
            Ascendente y cada planeta: entonces hace falta la carta calculada.
            Los significados por planeta están en los cursos sobre{" "}
            <A href="/planetes/uranus">Urano</A>,{" "}
            <A href="/planetes/neptune">Neptuno</A> y{" "}
            <A href="/planetes/pluton">Plutón</A>.
          </p>
        </section>

        {/* ── 6. ECLIPSES ──────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="eclipses">
          <H2 id="eclipses">Los dos eclipses solares</H2>

          <p className="text-lg leading-relaxed text-text/85">
            El 6 de febrero a las 16:59, la luna nueva de Acuario es un eclipse
            anular, a 17° 38′ del signo, visible desde Sudamérica y África
            occidental, no desde Europa. El 2 de agosto a las 12:06, la luna
            nueva de Leo es un eclipse total, a 9° 55′: uno de los más largos
            del siglo, algo más de seis minutos de noche en pleno día en su
            máximo, en Egipto. Su franja de totalidad cruza el extremo sur de
            Andalucía, en las provincias de Cádiz y Málaga, y después
            Gibraltar, Tánger, el norte de África, Libia y Egipto.
          </p>

          <Box title="Dos eclipses totales en España en menos de un año" tone="amber">
            <p>
              El 12 de agosto de 2026, la franja de totalidad cruzó la
              península de oeste a este, de A Coruña a Palma. El 2 de agosto de
              2027 vuelve a tocar suelo español, esta vez por el sur. Para la
              astrología, los dos caen en el mismo signo, Leo, a diez grados de
              distancia: quien tenga planetas en la primera mitad de Leo o de
              Acuario vive el segundo capítulo de una misma historia.
            </p>
          </Box>

          <p className="leading-relaxed text-text/85">
            Los dos eclipses de 2027 se responden en el eje Acuario-Leo, por
            donde circulan los{" "}
            <A href="/noeuds-lunaires">nodos lunares</A> en 2027 (de 22° 51′ a
            3° 34′ de Acuario para el nodo medio). Los tres eclipses lunares del
            año, el 21 de febrero a 2° Virgo, el 18 de julio a 26° Capricornio y
            el 17 de agosto a 24° Acuario, son penumbrales: apúntalos en el
            calendario, sin darles el peso de un eclipse total.
          </p>

          <Callout tone="note" title="Cómo leer un eclipse en una carta">
            <p>
              Un eclipse es una lunación de mucho peso. Cuenta para ti si su
              grado cae a menos de tres grados de un punto natal, en
              conjunción, oposición o cuadratura, y la casa natal en la que se
              produce dice el ámbito implicado. El resto del tiempo es una luna
              nueva algo más marcada que las demás. Que se vea o no desde tu
              casa no cambia nada en el cálculo.
            </p>
          </Callout>

          <H3>Dónde cae en tu carta</H3>
          <p className="leading-relaxed text-text/85">
            Con un orbe de tres grados, el eclipse del 6 de febrero afecta por
            conjunción a los nacidos del 3 al 10 de febrero; por oposición, a
            los nacidos del 6 al 14 de agosto; por cuadratura, a los nacidos
            del 4 al 12 de mayo y del 6 al 13 de noviembre. El del 2 de agosto
            afecta por conjunción a los nacidos del 29 de julio al 6 de agosto;
            por oposición, a los nacidos del 26 de enero al 2 de febrero; por
            cuadratura, a los nacidos del 26 de abril al 4 de mayo y del 29 de
            octubre al 6 de noviembre. El punto del eclipse sigue sensible
            durante meses: Marte lo reactiva en cuadratura, desde Escorpio, el
            17 de septiembre de 2027.
          </p>
        </section>

        {/* ── 7. MAPA DE GRADOS SENSIBLES ──────────────────── */}
        <section className="space-y-5" aria-labelledby="grados-sensibles">
          <H2 id="grados-sensibles">El mapa de grados sensibles de 2027</H2>

          <p className="text-lg leading-relaxed text-text/85">
            Todo lo anterior cabe en una tabla. Para cada tránsito, la columna
            «Grados recorridos» da el tramo del zodiaco que barre en 2027 y,
            cuando la hay, la zona recorrida tres veces. Las dos últimas
            columnas traducen esos grados a <strong>fechas de nacimiento</strong>{" "}
            para el Sol: el único punto de la carta que todo el mundo conoce
            sin hacer cálculos.
          </p>

          <DataTable
            label="Mapa de grados sensibles de 2027"
            caption="Para cada tránsito de 2027: los grados recorridos, las fechas de nacimiento cuyo Sol queda tocado por conjunción y las tocadas por oposición o cuadratura. Ventanas válidas con un día de margen para cualquier año de nacimiento."
            head={["Tránsito", "Grados recorridos", "Sol tocado por conjunción", "Por oposición o cuadratura"]}
            rows={mapa.map((r) => [r.transito, r.grados, r.conj, r.tensos])}
          />

          <p className="leading-relaxed text-text/85">
            Las ventanas de fechas están calculadas sobre los años 1950 a 2010
            y valen, con un día de margen, para cualquier año de nacimiento. Una
            fecha dentro de una ventana significa que el Sol natal está en el
            camino del tránsito en algún momento de 2027; la fecha exacta del
            contacto depende del grado preciso, que te da cualquier programa de
            cartas. Para los demás puntos de tu carta (la Luna, el Ascendente,
            los planetas), lee la columna de los grados con tus posiciones
            delante.
          </p>

          <figure className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <Image
              src="/images/blog/degres-sensibles-2027-roue.webp"
              alt="Rueda zodiacal trazada con tinta sobre papel crema, arcos a la acuarela resaltan tramos del círculo, una mano apoya un transportador de latón contra su borde"
              width={1600}
              height={900}
              sizes="(max-width: 768px) 100vw, 800px"
              className="h-auto w-full"
            />
            <figcaption className="px-5 py-4 text-center text-xs text-text/50">
              Marca en tu propia rueda los tramos recorridos en 2027: lo que
              queda tocado salta a la vista.
            </figcaption>
          </figure>
        </section>

        {/* ── 8. MÉTODO ────────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="metodo">
          <H2 id="metodo">Leer 2027 en tu carta en cuatro pasos</H2>

          <p className="text-lg leading-relaxed text-text/85">
            El método cabe en cuatro verbos: anotar, superponer, situar,
            jerarquizar. Veinte minutos con tu carta delante y sabrás qué
            tránsitos de 2027 te afectan, en qué fechas y en qué orden de
            importancia.
          </p>

          <H3>1. Anotar tus grados</H3>
          <p className="leading-relaxed text-text/85">
            Anota la posición de tus doce puntos: Sol, Luna, Mercurio, Venus,
            Marte, Júpiter, Saturno, Urano, Neptuno, Plutón, Ascendente y Medio
            Cielo, en grado y minuto de signo. Una{" "}
            <A href="/theme-astral">carta astral</A> calculada te los da todos.
            Sin hora de nacimiento faltan el Ascendente, el Medio Cielo y las
            casas: el artículo sobre la{" "}
            <A href="/blog/theme-astral-sans-heure-de-naissance">
              carta astral sin hora de nacimiento
            </A>{" "}
            explica qué sigue siendo legible.
          </p>

          <H3>2. Superponer el mapa</H3>
          <p className="leading-relaxed text-text/85">
            En cada línea del mapa de grados sensibles, un punto natal queda
            tocado si está a menos de 3° de un grado recorrido (conjunción), a
            menos de 3° del mismo grado en el signo opuesto (oposición) o en uno
            de los dos signos a 90° (cuadratura). Los trígonos y los sextiles
            cuentan con un orbe de 2°: sostienen más de lo que provocan
            acontecimientos. Para Marte, redúcelo todo a 1°.
          </p>

          <H3>3. Situar la casa natal</H3>
          <p className="leading-relaxed text-text/85">
            Busca en qué casa de tu carta caen los grados recorridos. Las{" "}
            <A href="/cuspides-des-maisons">cúspides</A> de tu carta dividen el
            zodiaco en doce ámbitos; un tránsito lento tiñe el que atraviesa
            durante toda su estancia, forme o no un aspecto exacto. Saturno en
            la casa II durante todo 2027 habla de dinero y de recursos; en la
            VII, de pareja y de contratos; en la X, de carrera. El curso sobre
            las <A href="/maisons">doce casas</A> detalla cada una.
          </p>

          <H3>4. Jerarquizar con la regla de los tres pasos</H3>
          <p className="leading-relaxed text-text/85">
            Ya tienes una lista, a veces larga. Tres criterios la ordenan, en
            este orden. <strong>La velocidad</strong>: Saturno, Urano, Neptuno y
            Plutón van antes que Júpiter, que va antes que Marte y que los
            eclipses. <strong>El objetivo</strong>: un contacto con el Sol, la
            Luna, el Ascendente o el Medio Cielo va antes que un contacto con
            otro planeta; una conjunción o una oposición, antes que una
            cuadratura, y esta, antes que un trígono.{" "}
            <strong>El número de pasos</strong>: un tránsito que pasa tres
            veces por el mismo grado, gracias a la retrogradación, va antes que
            un paso único. Quédate con los dos o tres primeros: son los
            tránsitos de tu año. El resto son notas a pie de página.
          </p>

          <aside className="rounded-2xl border border-amber-400/25 bg-amber-500/[0.07] p-5">
            <p className="text-lg leading-relaxed text-amber-100/90">
              «Un tránsito que pasa tres veces no es tres veces más fuerte. Es
              tres veces más largo, y es la duración la que transforma».
            </p>
          </aside>

          <Callout tone="warn" title="Lo que el método no hace">
            <p>
              No predice acontecimientos. Un tránsito de Saturno a la Luna
              describe un periodo en el que la seguridad afectiva se pone a
              prueba con el tiempo; no dice ni cómo, ni con quién, ni si saldrá
              bien. La astrología no es una ciencia experimental, y yo la uso
              como un calendario de atención, no como un oráculo. El curso sobre
              los <A href="/transits">tránsitos</A> da la lectura de cada
              planeta en tránsito, planeta por planeta y casa por casa.
            </p>
          </Callout>
        </section>

        {/* ── 9. EJEMPLO ───────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="ejemplo">
          <H2 id="ejemplo">El ejemplo: 2027 sobre una carta real</H2>

          <p className="text-lg leading-relaxed text-text/85">
            La carta es la mía, la que publiqué para el{" "}
            <A href="/blog/planete-dominante-methode-calcul">
              método del planeta dominante
            </A>
            : 1 de noviembre de 1971, 10:15, Troyes (Francia). Ascendente
            8° 07′ Sagitario, Medio Cielo 3° 05′ Libra, casas Placidus. La pasé
            por el mapa de grados sensibles y después por la regla de los tres
            pasos. El resultado es la lista de abajo, en el orden en el que me
            la quedo.
          </p>

          <DataTable
            label="Los tránsitos de 2027 sobre la carta del 1 de noviembre de 1971, ordenados"
            caption="Para la carta de referencia, los tránsitos de 2027 ordenados por la regla de los tres pasos: el tránsito, sus fechas exactas en hora peninsular y el motivo de su puesto."
            head={["Puesto", "Tránsito", "Fechas exactas", "Por qué este puesto"]}
            rows={ejemplo.map((r) => [r.puesto, r.transito, r.fechas, r.porque])}
          />

          <p className="leading-relaxed text-text/85">
            Lo primero que me enseña la lista es lo que no está en ella. Mi Sol
            está a 8° 17′ Escorpio: ningún tránsito lento lo toca de forma
            exacta en 2027. Plutón se le acerca a un grado en mayo y el eclipse
            del 2 de agosto le hace una cuadratura a grado y medio, pero la
            verdadera cita, Plutón en cuadratura al Sol, espera a marzo de
            2028. Un lector con prisa que mirara mi signo solar concluiría que
            2027 es un año tranquilo. El mapa dice lo contrario: Urano sobre el
            Descendente todo el año, Saturno sobre la Luna en primavera.
          </p>

          <p className="leading-relaxed text-text/85">
            Después, el orden. Marte retrógrado se opone a mi Marte natal tres
            veces, de noviembre de 2026 a mayo de 2027, y aun así es el quinto
            de la lista: la velocidad manda. Al revés, Saturno solo toca mi
            Luna una vez, el 1 de abril, y es el segundo: un planeta lento sobre
            una luminaria, en una casa angular, pesa más que un tránsito rápido
            repetido. Para eso sirve la regla: para no dejarse impresionar por
            el número de líneas.
          </p>

          <p className="leading-relaxed text-text/85">
            Lo que hago con ello, por último. No predigo nada. Anoto que el año
            habla del otro, de las asociaciones y los contratos (Urano en la
            casa VII), y de las bases y la seguridad (Saturno en la IV, sobre la
            Luna), y que esos dos temas se cruzan en abril y en julio. Releo los
            dos cursos que tocan, apunto mis fechas y dejo que el año se ocupe
            del resto. Es exactamente el uso que recomiendo a todo el mundo: un
            calendario de atención, llevado con rigor y leído con modestia.
          </p>
        </section>

        {/* ── 10. FAQ ──────────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="faq">
          <H2 id="faq">Preguntas frecuentes sobre la astrología de 2027</H2>

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

        {/* ── FUENTES ──────────────────────────────────────── */}
        <section className="rounded-2xl border border-white/10 bg-black/20 p-6" aria-labelledby="fuentes">
          <h2 id="fuentes" className="text-sm font-semibold uppercase tracking-[0.18em] text-text/70">
            Fuentes
          </h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-text/75">
            <li>
              Posiciones, estaciones, cambios de signo, aspectos exactos y
              ventanas de fechas de nacimiento: cálculos del autor con{" "}
              <Ext href="https://www.astro.com/swisseph/swephinfo_e.htm">
                Swiss Ephemeris
              </Ext>{" "}
              (Astrodienst), en hora peninsular española. En Canarias, resta
              una hora. Las horas son exactas con unos minutos de margen según
              la efeméride utilizada.
            </li>
            <li>
              <Ext href="https://promenade.imcce.fr/fr/images/pdf/eclsol-2aout2027.pdf">
                <span lang="fr">Éclipse totale de Soleil du 2 août 2027</span>
              </Ext>{" "}
              (IMCCE, Observatorio de París): circunstancias, franja de
              totalidad, magnitud.
            </li>
            <li>
              <Ext href="https://eclipses.ign.es/eclipse-total-sol-de-12-de-agosto-2026.html">
                El eclipse total del 12 de agosto de 2026
              </Ext>{" "}
              (Instituto Geográfico Nacional): franja de totalidad en España.
            </li>
            <li>
              <Ext href="https://eclipse.gsfc.nasa.gov/SEgoogle/SEgoogle2001/SE2027Feb06Agoogle.html">
                <span lang="en">Annular Solar Eclipse of 2027 Feb 06</span>
              </Ext>{" "}
              (NASA, Goddard Space Flight Center): trayectoria y duración de la
              anularidad.
            </li>
            <li>
              Significados de los tránsitos por planeta y por casa: el curso{" "}
              <A href="/transits">Tránsitos: guía completa</A> de esta web.
            </li>
          </ul>
        </section>

        {/* ── CTA / ENLAZADO ───────────────────────────────── */}
        <section className="rounded-2xl border border-white/10 bg-black/20 p-6">
          <p className="text-sm text-text/60">Sigue leyendo</p>
          <div className="mt-3 space-y-3 leading-relaxed text-text/85">
            <p>
              Para aplicar el método necesitas tus grados: la página{" "}
              <A href="/theme-astral">carta astral</A> explica cómo obtenerlos y
              qué contienen. El curso sobre los{" "}
              <A href="/transits">tránsitos</A> da después la lectura de cada
              planeta que pasa, y el de los{" "}
              <A href="/retrogrades">planetas retrógrados</A> explica por qué un
              tránsito pasa tres veces.
            </p>
            <p>
              Las fechas finas del año están en{" "}
              <A href="/blog/mercure-retrograde-2027-dates">
                Mercurio retrógrado 2027
              </A>{" "}
              y en el{" "}
              <A href="/blog/calendrier-pleine-lune-nouvelle-lune-2026-2027">
                calendario lunar 2026-2027
              </A>
              . El{" "}
              <A href="/dictionnaire-astrologique">diccionario astrológico</A>{" "}
              recoge cada término utilizado aquí.
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
