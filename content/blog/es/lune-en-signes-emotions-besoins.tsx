import type { ReactNode } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";

export const meta = {
  slug: "lune-en-signes-emotions-besoins",
  seoTitle: "Luna en signos: la guía completa de las 12 Lunas",
  title: "La Luna en los signos: emociones y necesidad de seguridad",
  description:
    "La Luna en los signos revela tu necesidad emocional, tu seguridad interior y tus reflejos de protección. La guía completa de las 12 Lunas, signo a signo.",
  date: "2026-09-06",
  tags: [
    "Lune",
    "émotions",
    "sécurité affective",
    "psychologie astrologique",
    "thème astral",
    "bases",
  ],
  readingLevel: "débutant" as const,
  cover: "/images/blog/lunarien2.webp",
};

/* ────────────────────────────────────────────────────────────
   Componentes de maquetación
   ──────────────────────────────────────────────────────────── */

function MoonGlyph({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M15.6 3.2a9 9 0 1 0 5.2 12.2A7.2 7.2 0 0 1 15.6 3.2Z"
        fill="#F3DFAE"
      />
    </svg>
  );
}

function H2({ children, id }: { children: ReactNode; id: string }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="relative inline-flex h-7 w-7 shrink-0 items-center justify-center"
        >
          <span className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-200/60 via-indigo-300/25 to-transparent blur-[6px]" />
          <MoonGlyph className="relative h-4 w-4" />
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
        className="h-px w-full bg-gradient-to-r from-indigo-400/40 via-white/10 to-transparent"
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

  const emoji = tone === "warn" ? "⚠️" : tone === "ok" ? "✅" : "🌙";

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
      <span className="text-sm tracking-[0.3em] text-amber-200/50">☾ ☽</span>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-white/15 to-white/10" />
    </div>
  );
}

type BoxTone =
  | "neutral"
  | "amber"
  | "teal"
  | "fuchsia"
  | "sky"
  | "red"
  | "rose"
  | "violet"
  | "emerald"
  | "indigo";

const BOX_TONES: Record<BoxTone, string> = {
  neutral: "border-white/10 bg-black/20",
  amber:
    "border-amber-400/25 bg-gradient-to-br from-amber-400/[0.08] to-transparent",
  teal: "border-teal-400/25 bg-gradient-to-br from-teal-400/[0.08] to-transparent",
  fuchsia:
    "border-fuchsia-400/25 bg-gradient-to-br from-fuchsia-400/[0.08] to-transparent",
  sky: "border-sky-400/25 bg-gradient-to-br from-sky-400/[0.08] to-transparent",
  red: "border-red-400/25 bg-gradient-to-br from-red-400/[0.08] to-transparent",
  rose: "border-rose-400/25 bg-gradient-to-br from-rose-400/[0.08] to-transparent",
  violet:
    "border-violet-400/25 bg-gradient-to-br from-violet-400/[0.08] to-transparent",
  emerald:
    "border-emerald-400/25 bg-gradient-to-br from-emerald-400/[0.08] to-transparent",
  indigo:
    "border-indigo-400/25 bg-gradient-to-br from-indigo-400/[0.08] to-transparent",
};

function Box({
  title,
  children,
  id,
  tone = "neutral",
}: {
  title: string;
  children: ReactNode;
  id?: string;
  tone?: BoxTone;
}) {
  return (
    <section
      className={`rounded-2xl border p-6 shadow-soft ${BOX_TONES[tone]}`}
    >
      <H3 id={id}>{title}</H3>
      <div className="mt-4 space-y-3 leading-relaxed text-text/85">
        {children}
      </div>
    </section>
  );
}

/* ── Couleur d'élément par signe (pastilles du tableau) ──────── */

const SIGN_TONE: Record<string, { dot: string; pill: string }> = {
  belier: { dot: "bg-red-400", pill: "border-red-400/25 bg-red-400/10 text-red-100" },
  taureau: { dot: "bg-emerald-400", pill: "border-emerald-400/25 bg-emerald-400/10 text-emerald-100" },
  gemeaux: { dot: "bg-sky-400", pill: "border-sky-400/25 bg-sky-400/10 text-sky-100" },
  cancer: { dot: "bg-violet-400", pill: "border-violet-400/25 bg-violet-400/10 text-violet-100" },
  lion: { dot: "bg-red-400", pill: "border-red-400/25 bg-red-400/10 text-red-100" },
  vierge: { dot: "bg-emerald-400", pill: "border-emerald-400/25 bg-emerald-400/10 text-emerald-100" },
  balance: { dot: "bg-sky-400", pill: "border-sky-400/25 bg-sky-400/10 text-sky-100" },
  scorpion: { dot: "bg-violet-400", pill: "border-violet-400/25 bg-violet-400/10 text-violet-100" },
  sagittaire: { dot: "bg-red-400", pill: "border-red-400/25 bg-red-400/10 text-red-100" },
  capricorne: { dot: "bg-emerald-400", pill: "border-emerald-400/25 bg-emerald-400/10 text-emerald-100" },
  verseau: { dot: "bg-sky-400", pill: "border-sky-400/25 bg-sky-400/10 text-sky-100" },
  poissons: { dot: "bg-violet-400", pill: "border-violet-400/25 bg-violet-400/10 text-violet-100" },
};

/* ── Frise des 8 phases lunaires (SVG pur) ───────────────────── */

const PHASE_RX = 31.82;
const PHASE_SHAPES: { key: string; d: string | null; mirror: boolean }[] = [
  { key: "new", d: null, mirror: false },
  { key: "waxing-crescent", d: `M 50 5 A 45 45 0 0 1 50 95 A ${PHASE_RX} 45 0 0 0 50 5 Z`, mirror: false },
  { key: "first-quarter", d: "M 50 5 A 45 45 0 0 1 50 95 Z", mirror: false },
  { key: "waxing-gibbous", d: `M 50 5 A 45 45 0 0 1 50 95 A ${PHASE_RX} 45 0 0 1 50 5 Z`, mirror: false },
  { key: "full", d: "FULL", mirror: false },
  { key: "waning-gibbous", d: `M 50 5 A 45 45 0 0 1 50 95 A ${PHASE_RX} 45 0 0 1 50 5 Z`, mirror: true },
  { key: "last-quarter", d: "M 50 5 A 45 45 0 0 1 50 95 Z", mirror: true },
  { key: "waning-crescent", d: `M 50 5 A 45 45 0 0 1 50 95 A ${PHASE_RX} 45 0 0 0 50 5 Z`, mirror: true },
];

function PhaseStrip({ labels, caption }: { labels: string[]; caption: string }) {
  return (
    <figure className="rounded-2xl border border-white/10 bg-gradient-to-b from-indigo-500/[0.08] to-transparent p-6">
      <svg width="0" height="0" aria-hidden="true" className="absolute">
        <defs>
          <radialGradient id="moonGold" cx="35%" cy="30%">
            <stop offset="0%" stopColor="#FFF6DF" />
            <stop offset="60%" stopColor="#F5D998" />
            <stop offset="100%" stopColor="#D9B15F" />
          </radialGradient>
        </defs>
      </svg>

      <div className="grid grid-cols-4 gap-4 sm:grid-cols-8">
        {PHASE_SHAPES.map((phase, i) => (
          <div key={phase.key} className="flex flex-col items-center gap-2">
            <svg
              viewBox="0 0 100 100"
              className="h-12 w-12 sm:h-14 sm:w-14"
              role="img"
              aria-label={labels[i]}
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="#0E1430"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="1.5"
              />
              {phase.d === "FULL" ? (
                <circle cx="50" cy="50" r="45" fill="url(#moonGold)" />
              ) : phase.d ? (
                <path
                  d={phase.d}
                  fill="url(#moonGold)"
                  transform={phase.mirror ? "translate(100,0) scale(-1,1)" : undefined}
                />
              ) : null}
            </svg>
            <span className="text-center text-[11px] leading-tight text-text/65">
              {labels[i]}
            </span>
          </div>
        ))}
      </div>

      <figcaption className="mt-5 text-center text-xs text-text/50">
        {caption}
      </figcaption>
    </figure>
  );
}

/* ── Tarjeta de signo, coloreada por elemento ────────────────── */

type ZodiacElement = "fuego" | "tierra" | "aire" | "agua";

function elementStyles(element: ZodiacElement) {
  if (element === "fuego")
    return {
      border: "border-red-500/30",
      hoverBorder: "group-hover:border-red-400/50",
      iconWrap: "border-red-500/25 bg-red-500/10",
      glow: "from-red-500/10 to-transparent",
      titleHover: "group-hover:text-red-200",
      linkText: "group-hover:text-red-100",
      label: "text-red-200/80",
    };
  if (element === "tierra")
    return {
      border: "border-emerald-500/30",
      hoverBorder: "group-hover:border-emerald-400/50",
      iconWrap: "border-emerald-500/25 bg-emerald-500/10",
      glow: "from-emerald-500/10 to-transparent",
      titleHover: "group-hover:text-emerald-200",
      linkText: "group-hover:text-emerald-100",
      label: "text-emerald-200/80",
    };
  if (element === "aire")
    return {
      border: "border-sky-500/30",
      hoverBorder: "group-hover:border-sky-400/50",
      iconWrap: "border-sky-500/25 bg-sky-500/10",
      glow: "from-sky-500/10 to-transparent",
      titleHover: "group-hover:text-sky-200",
      linkText: "group-hover:text-sky-100",
      label: "text-sky-200/80",
    };
  return {
    border: "border-violet-500/30",
    hoverBorder: "group-hover:border-violet-400/50",
    iconWrap: "border-violet-500/25 bg-violet-500/10",
    glow: "from-violet-500/10 to-transparent",
    titleHover: "group-hover:text-violet-200",
    linkText: "group-hover:text-violet-100",
    label: "text-violet-200/80",
  };
}

function Line({ label, children }: { label: string; children: ReactNode }) {
  return (
    <p>
      <strong className="text-text/95">{label}:</strong> {children}
    </p>
  );
}

function MoonCard({
  sign,
  slug,
  element,
  modality,
  motto,
  children,
}: {
  sign: string;
  slug: string;
  element: ZodiacElement;
  modality: string;
  motto: string;
  children: ReactNode;
}) {
  const id = `luna-en-${slug}`;
  const styles = elementStyles(element);

  return (
    <article
      id={id}
      aria-labelledby={`${id}-title`}
      className="h-full scroll-mt-24"
    >
      <div
        className={[
          "group relative flex h-full flex-col overflow-hidden rounded-2xl",
          "border bg-black/20 p-6 shadow-soft transition hover:bg-white/[0.04]",
          styles.border,
          styles.hoverBorder,
        ].join(" ")}
      >
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${styles.glow} opacity-0 transition duration-300 group-hover:opacity-100`}
        />

        <div className="relative flex items-start justify-between gap-4">
          <div>
            <p className={`text-xs uppercase tracking-widest ${styles.label}`}>
              {element} · {modality}
            </p>
            <h3
              id={`${id}-title`}
              className={[
                "mt-2 text-xl font-semibold tracking-tight leading-tight text-text transition",
                styles.titleHover,
              ].join(" ")}
            >
              Luna en {sign}
            </h3>
            <p className="mt-1 text-sm italic text-text/65">«{motto}»</p>
          </div>

          <div
            aria-hidden="true"
            className={`relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border ${styles.iconWrap}`}
          >
            <Image
              src={`/images/zodiaque/${slug}.webp`}
              alt=""
              width={64}
              height={64}
              className="h-auto w-auto object-contain opacity-95 transition group-hover:scale-[1.03]"
              sizes="64px"
            />
          </div>
        </div>

        <div className="relative mt-4 space-y-2 leading-relaxed text-text/85">
          {children}
        </div>

        <div className="relative mt-5 flex items-center justify-end">
          <Link
            href={`/signes/${slug}`}
            className={[
              "text-sm text-text/70 underline decoration-white/20 transition hover:decoration-white/50",
              styles.linkText,
            ].join(" ")}
          >
            Leer la ficha de {sign} →
          </Link>
        </div>
      </div>
    </article>
  );
}

/* ── Datos de la tabla resumen ───────────────────────────────── */

const overview = [
  {
    sign: "Aries",
    slug: "belier",
    need: "Actuar ahora mismo",
    safe: "Puede reaccionar sin pedir permiso",
    shuts: "La frenan o la tratan como a un niño",
    word: "Impulso",
  },
  {
    sign: "Tauro",
    slug: "taureau",
    need: "Que nada se mueva",
    safe: "La rutina es estable y el cuerpo está tranquilo",
    shuts: "Cambio brusco, inseguridad material",
    word: "Constancia",
  },
  {
    sign: "Géminis",
    slug: "gemeaux",
    need: "Poner palabras",
    safe: "Entiende lo que pasa y puede contarlo",
    shuts: "Silencio, sobreentendidos, puertas cerradas",
    word: "Explicación",
  },
  {
    sign: "Cáncer",
    slug: "cancer",
    need: "Pertenecer",
    safe: "Hay un lugar, gente, continuidad",
    shuts: "Rechazo, indiferencia, desarraigo",
    word: "Apego",
  },
  {
    sign: "Leo",
    slug: "lion",
    need: "Importarle a alguien",
    safe: "La ven, la eligen, la reconocen",
    shuts: "Humillación, indiferencia, comparación",
    word: "Reconocimiento",
  },
  {
    sign: "Virgo",
    slug: "vierge",
    need: "Ser útil y que todo esté en orden",
    safe: "Las cosas son ordenadas y previsibles",
    shuts: "Caos, imprevisto, sensación de inutilidad",
    word: "Ajuste",
  },
  {
    sign: "Libra",
    slug: "balance",
    need: "La armonía del vínculo",
    safe: "El otro está bien y el ambiente es agradable",
    shuts: "Conflicto abierto, tensión, brusquedad",
    word: "Acuerdo",
  },
  {
    sign: "Escorpio",
    slug: "scorpion",
    need: "La verdad, sin filtros",
    safe: "Nada está oculto y el vínculo es total",
    shuts: "Mentira, tibieza, traición",
    word: "Profundidad",
  },
  {
    sign: "Sagitario",
    slug: "sagittaire",
    need: "Espacio y sentido",
    safe: "El horizonte sigue abierto",
    shuts: "Encierro, control, mezquindad",
    word: "Impulso vital",
  },
  {
    sign: "Capricornio",
    slug: "capricorne",
    need: "Sostenerse sola",
    safe: "Controla, asume, no depende de nadie",
    shuts: "Dependencia impuesta, desbordamiento afectivo",
    word: "Dominio",
  },
  {
    sign: "Acuario",
    slug: "verseau",
    need: "Conservar su libertad y su lucidez",
    safe: "Puede tomar distancia cuando quiere",
    shuts: "Posesión, fusión, chantaje afectivo",
    word: "Distancia",
  },
  {
    sign: "Piscis",
    slug: "poissons",
    need: "Conectar con algo más grande",
    safe: "El vínculo es suave, poroso, sin agresión",
    shuts: "Dureza, cinismo, brutalidad de lo real",
    word: "Fusión",
  },
];

const toc = [
  { id: "definicion", label: "Lo que la Luna describe de verdad" },
  { id: "sol-luna-ascendente", label: "Sol, Luna, Ascendente: quién hace qué" },
  { id: "metodo", label: "Leer tu Luna en 5 pasos" },
  { id: "encontrar-tu-luna", label: "Encontrar tu Luna (y la trampa de la hora)" },
  { id: "tabla", label: "Las 12 Lunas en una tabla" },
  { id: "las-12-lunas", label: "Las 12 Lunas en profundidad" },
  { id: "luna-sol", label: "Cuando la Luna contradice al Sol" },
  { id: "luna-casas", label: "La Luna en las casas" },
  { id: "aspectos", label: "Los aspectos que lo cambian todo" },
  { id: "fase", label: "Tu fase lunar de nacimiento" },
  { id: "dignidades", label: "Domicilio, exaltación, exilio, caída" },
  { id: "ciclos", label: "Los ciclos: tránsitos y Luna progresada" },
  { id: "errores", label: "Los 6 errores más frecuentes" },
  { id: "recordar", label: "Lo que hay que recordar" },
  { id: "faq", label: "Preguntas frecuentes" },
];

/* ── FAQ (visible + JSON-LD desde la misma fuente) ───────────── */

const faq = [
  {
    q: "¿Cómo saber en qué signo está mi Luna?",
    a: "Hay que calcular la carta natal a partir de la fecha, la hora y el lugar de nacimiento. La Luna cambia de signo cada dos días y medio aproximadamente: la fecha sola no basta, la hora suele ser decisiva.",
  },
  {
    q: "¿Qué representa la Luna en una carta natal?",
    a: "La Luna describe la necesidad emocional básica, la forma de sentirse seguro, los reflejos de protección y la memoria afectiva. Donde el Sol dice quién quieres llegar a ser, la Luna dice qué necesitas para estar bien.",
  },
  {
    q: "¿Cuál es la diferencia entre el Sol, la Luna y el Ascendente?",
    a: "El Sol es la dirección consciente y la identidad. La Luna es la necesidad íntima y el reflejo emocional. El Ascendente es la manera de entrar en contacto con el mundo exterior. Los tres se leen juntos, nunca por separado.",
  },
  {
    q: "¿Puede la Luna estar en el mismo signo que el Sol?",
    a: "Sí. Significa que la persona nació alrededor de una luna nueva. Identidad y necesidad van entonces en la misma dirección: mucha coherencia interior, pero menos distancia respecto de uno mismo y poco contrapeso interno.",
  },
  {
    q: "¿Cuál es la Luna más difícil del zodiaco?",
    a: "Ninguna Luna es mala. La tradición habla de exilio en Capricornio y de caída en Escorpio porque la necesidad de seguridad es la menos alimentada de forma espontánea. Suelen ser las Lunas más sólidas en la edad adulta, una vez comprendido el mecanismo.",
  },
  {
    q: "¿La Luna describe la relación con la madre?",
    a: "Describe cómo se recibió e integró el cuidado en la infancia, lo que incluye a la figura materna pero no se reduce a ella. Habla del clima afectivo de origen y de lo que aprendiste a hacer para sentirte seguro.",
  },
  {
    q: "¿Cuánto tiempo permanece la Luna en un signo?",
    a: "Unos dos días y medio. Recorre los doce signos en 27,3 días y avanza entre 12 y 15 grados al día, lo que la convierte en el astro más rápido de la carta natal.",
  },
  {
    q: "¿Qué hago si no sé mi hora de nacimiento?",
    a: "Se calcula la carta para las 12 h. Si la Luna no cambia de signo ese día, su signo es fiable. Si cambia, hay que decidir entre las dos hipótesis según lo vivido, o hacer rectificar la hora de nacimiento.",
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
        {/* ── HERO ─────────────────────────────────────────── */}
        <header className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/[0.10] via-black/20 to-black/30 p-7 shadow-soft">
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl ${glow}`}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 top-6 hidden h-40 w-40 opacity-[0.18] sm:block"
          >
            <MoonGlyph className="h-full w-full" />
          </div>

          <div className="relative">
            <p className="text-sm text-text/65">
              Emociones · Seguridad interior · Memoria afectiva
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-text/85">
              Está la persona que eres cuando todo va bien. Y está la que
              aparece a las 23 h, cuando estás cansado, herido o inquieto.{" "}
              <strong>Esa segunda persona es tu Luna.</strong>
            </p>

            <p className="mt-3 max-w-2xl leading-relaxed text-text/80">
              El signo solar describe en quién quieres convertirte. La Luna
              describe lo que <em>necesitas</em> para mantenerte en pie, y lo
              que haces de forma automática cuando esa necesidad no está
              cubierta. Es la parte menos elegida de la{" "}
              <A href="/blog/qu-est-ce-qu-un-theme-astral">carta natal</A> y, de
              lejos, la más decisiva en el día a día.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <Pill tone="violet">Palabra clave: Necesidad</Pill>
              <Pill tone="sky">Ritmo: 2,5 días por signo</Pill>
              <Pill tone="emerald">Palanca: Seguridad interior</Pill>
              <Pill tone="orange">Riesgo: Reflejo automático</Pill>
            </div>

            <div className="mt-4">
              <TagPillsInline tags={meta.tags} />
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <Stat label="Astro" value="La Luna" />
              <Stat label="Lo que describe" value="La necesidad emocional" />
              <Stat
                label="Pregunta clave"
                value="¿Qué necesito para sentirme seguro?"
              />
            </div>
          </div>
        </header>

        {/* ── DEFINICIÓN (fragmento destacado) ─────────────── */}
        <div className="relative overflow-hidden rounded-2xl border border-indigo-400/25 bg-gradient-to-br from-indigo-500/[0.12] via-violet-500/[0.06] to-transparent px-6 py-5">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-200/10 blur-2xl"
          />
          <p className="relative text-sm font-semibold uppercase tracking-[0.2em] text-amber-200/80">
            Definición
          </p>
          <p className="relative mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
            <strong>La Luna en astrología</strong> representa la necesidad
            emocional fundamental, la forma de sentirse seguro y los reflejos de
            protección. Su posición por signo en la carta natal indica{" "}
            <strong>qué necesita una persona para estar bien</strong> y cómo
            reacciona cuando esa necesidad no se cubre. La Luna cambia de signo
            cada dos días y medio aproximadamente: dos personas nacidas el mismo
            día pueden tener dos Lunas distintas.
          </p>
        </div>

        {/* ── ÍNDICE ───────────────────────────────────────── */}
        <nav
          aria-label="Índice del artículo"
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/[0.07] to-transparent p-6"
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
                  <span className="text-xs font-semibold tabular-nums text-indigo-300/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-text/85 underline decoration-white/15 transition group-hover:decoration-indigo-300/60">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* ── 1. LO QUE LA LUNA DESCRIBE ───────────────────── */}
        <section className="space-y-5" aria-labelledby="definicion">
          <H2 id="definicion">
            Lo que la Luna describe de verdad (y lo que no describe)
          </H2>

          <p className="text-lg leading-relaxed text-text/85">
            La mayoría de los artículos te dirán que la{" "}
            <A href="/planetes/lune">Luna</A> representa «las emociones». Es
            cierto, pero demasiado vago para servir de algo. Una definición más
            precisa cabe en una frase:{" "}
            <strong>
              la Luna describe lo que haces automáticamente para sentirte
              seguro.
            </strong>
          </p>

          <p className="leading-relaxed text-text/85">
            No es una elección. Es un reflejo instalado muy pronto, antes del
            lenguaje, que se dispara sin pasar por la reflexión. Cuando alguien
            está cansado, dolido, preocupado o enamorado, no reacciona con su
            signo solar: reacciona con su Luna. Por eso la Luna es el elemento
            de la carta más fácil de verificar en la vida real, y a menudo el
            más inquietante de descubrir.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <Box title="Lo que la Luna describe">
              <ul className="list-disc space-y-2 pl-5">
                <li>la necesidad afectiva de base, la que no se negocia</li>
                <li>cómo te tranquilizas, cómo te consuelas, cómo te retiras</li>
                <li>
                  la memoria emocional: lo que el cuerpo retuvo de la infancia
                </li>
                <li>el clima interior, el humor de fondo, el ritmo</li>
                <li>
                  la forma de cuidar a los demás: solemos cuidar como nos
                  gustaría que nos cuidaran
                </li>
              </ul>
            </Box>

            <Box title="Lo que la Luna no describe">
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  tu humor de hoy: eso es la Luna en{" "}
                  <A href="/transits">tránsito</A>, no la Luna natal
                </li>
                <li>
                  tu estilo amoroso: eso es{" "}
                  <A href="/blog/venus-en-signes-style-amoureux">Venus</A>
                </li>
                <li>
                  tu forma de desear y de pasar a la acción: eso es{" "}
                  <A href="/blog/mars-en-signes-desir-libido-action">Marte</A>
                </li>
                <li>
                  tu personalidad visible: eso es el{" "}
                  <A href="/blog/comprendre-signe-astrologique-ascendant-12-exemples">
                    Ascendente
                  </A>
                </li>
                <li>tu valor, tu madurez o tu salud mental</li>
              </ul>
            </Box>
          </div>

          <Callout tone="note" title="La frase que hay que retener">
            <p>
              El Sol dice <strong>«ahí es adonde voy»</strong>. La Luna dice{" "}
              <strong>«esto es lo que necesito para llegar»</strong>. Cuando la
              Luna no está alimentada, el Sol deja de avanzar. Así de simple.
            </p>
          </Callout>
        </section>

        {/* ── 2. SOL / LUNA / ASCENDENTE ───────────────────── */}
        <section className="space-y-5" aria-labelledby="sol-luna-ascendente">
          <H2 id="sol-luna-ascendente">
            Sol, Luna, Ascendente: quién hace qué en tu carta
          </H2>

          <p className="leading-relaxed text-text/85">
            Estos tres puntos forman el trípode de cualquier carta natal.
            Confundirlos es el error más habitual, y la razón por la que{" "}
            <A href="/blog/pourquoi-votre-horoscope-ne-vous-ressemble-pas">
              los horóscopos no se parecen a nadie
            </A>
            .
          </p>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-sm">
                <thead className="bg-white/[0.04]">
                  <tr className="text-left">
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Punto
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Responde a…
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Cuándo se ve
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Si se ignora
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-white/10">
                    <td className="px-5 py-4 align-top font-medium text-white">
                      <A href="/planetes/soleil">Sol</A>
                    </td>
                    <td className="px-5 py-4 align-top text-text/85">
                      En quién quiero convertirme
                    </td>
                    <td className="px-5 py-4 align-top text-text/85">
                      En las decisiones de vida, a largo plazo
                    </td>
                    <td className="px-5 py-4 align-top text-text/85">
                      Aburrimiento, sensación de vivir al lado de tu vida
                    </td>
                  </tr>
                  <tr className="border-t border-white/10 bg-white/[0.02]">
                    <td className="px-5 py-4 align-top font-medium text-white">
                      <A href="/planetes/lune">Luna</A>
                    </td>
                    <td className="px-5 py-4 align-top text-text/85">
                      Qué necesito para sentirme bien
                    </td>
                    <td className="px-5 py-4 align-top text-text/85">
                      Cuando estás cansado, herido, en pareja, enfermo
                    </td>
                    <td className="px-5 py-4 align-top text-text/85">
                      Agotamiento, somatización, los mismos conflictos en bucle
                    </td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-5 py-4 align-top font-medium text-white">
                      Ascendente
                    </td>
                    <td className="px-5 py-4 align-top text-text/85">
                      Cómo abordo el mundo
                    </td>
                    <td className="px-5 py-4 align-top text-text/85">
                      En los primeros cinco minutos de un encuentro
                    </td>
                    <td className="px-5 py-4 align-top text-text/85">
                      Nunca sentirte comprendido a la primera
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="leading-relaxed text-text/85">
            Un ejemplo elocuente: alguien con Sol en{" "}
            <A href="/signes/sagittaire">Sagitario</A> y Luna en{" "}
            <A href="/signes/cancer">Cáncer</A> sueña con irse seis meses a
            Asia… y llora al tercer día porque echa de menos su cocina. Las dos
            cosas son ciertas. No es una contradicción, es una arquitectura.
          </p>
        </section>

        <Divider />

        {/* ── 3. MÉTODO ────────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="metodo">
          <H2 id="metodo">Leer tu Luna en 5 pasos (el método completo)</H2>

          <p className="leading-relaxed text-text/85">
            Una Luna nunca se lee solo por el signo. Este es el orden de lectura
            que usan los astrólogos serios, de lo más general a lo más preciso.
            Tenlo a mano: sirve para cualquier planeta.
          </p>

          <div className="space-y-4">
            <Box title="1. El signo — el color de la necesidad">
              <p>
                Da la <strong>naturaleza</strong> de la necesidad: seguridad
                material, verdad, libertad, reconocimiento. Es lo que detalla la
                gran sección siguiente. El signo responde a la pregunta:{" "}
                <em>¿qué necesito?</em>
              </p>
            </Box>

            <Box title="2. La casa — el terreno donde se juega la necesidad">
              <p>
                Indica <strong>dónde</strong>, en concreto, la persona busca su
                seguridad: la pareja, el trabajo, la casa, el grupo. Una Luna en{" "}
                <A href="/signes/verseau">Acuario</A> en{" "}
                <A href="/maisons/maison-4">casa 4</A> y esa misma Luna en{" "}
                <A href="/maisons/maison-10">casa 10</A> no producen la misma
                vida. La casa responde a: <em>¿dónde voy a buscarlo?</em>
              </p>
            </Box>

            <Box title="3. Los aspectos — la facilidad o la fricción">
              <p>
                Los <A href="/aspects">aspectos</A> dicen si la necesidad
                circula libremente o topa con un obstáculo interior. Una Luna
                dulce en <A href="/signes/poissons">Piscis</A> en cuadratura con{" "}
                <A href="/planetes/saturne">Saturno</A> sigue siendo una Luna en
                Piscis, pero con un freno permanente. Los aspectos responden a:{" "}
                <em>¿qué me ayuda y qué me bloquea?</em>
              </p>
            </Box>

            <Box title="4. La fase — la relación con el Sol">
              <p>
                La distancia angular entre la Luna y el{" "}
                <A href="/planetes/soleil">Sol</A> en el momento del nacimiento
                da la <strong>fase lunar natal</strong>: luna nueva, cuarto
                creciente, luna llena, etc. Describe la relación entre identidad
                y necesidad, entre instinto y conciencia. Casi todas las
                lecturas la olvidan; es un error.
              </p>
            </Box>

            <Box title="5. La dignidad y la velocidad — el estado de la Luna">
              <p>
                ¿Está la Luna en su casa (Cáncer), exaltada (Tauro), en exilio
                (Capricornio), en caída (Escorpio)? ¿Se movía deprisa o despacio
                el día del nacimiento? Estos detalles técnicos afinan la
                interpretación. Consulta las{" "}
                <A href="/maitrises">regencias planetarias</A>.
              </p>
            </Box>
          </div>

          <Callout tone="ok" title="La regla de oro">
            <p>
              El <strong>signo da la necesidad</strong>, la{" "}
              <strong>casa da el terreno</strong>, los{" "}
              <strong>aspectos dan la realidad vivida</strong>. Una lectura que
              se salta dos de esos tres pisos no es una interpretación, es un
              horóscopo.
            </p>
          </Callout>
        </section>

        {/* ── 4. ENCONTRAR TU LUNA ─────────────────────────── */}
        <section className="space-y-5" aria-labelledby="encontrar-tu-luna">
          <H2 id="encontrar-tu-luna">
            Encontrar tu Luna — y la trampa de la hora de nacimiento
          </H2>

          <p className="leading-relaxed text-text/85">
            La Luna es el astro más rápido del cielo: avanza entre 12 y 15
            grados al día y atraviesa un signo en{" "}
            <strong>unos dos días y medio</strong>. Completa el zodiaco en 27,3
            días. Consecuencia directa:{" "}
            <strong>
              tu Luna no se deduce solo de tu fecha de nacimiento
            </strong>
            .
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <Stat label="Velocidad media" value="≈ 13° al día" />
            <Stat label="Estancia en un signo" value="≈ 2 días y medio" />
            <Stat label="Vuelta completa al zodiaco" value="27,3 días" />
          </div>

          <p className="leading-relaxed text-text/85">
            Si naciste un día en que la Luna cambiaba de signo, una hora de
            diferencia basta para pasar de una Luna en Leo a una Luna en Virgo:
            dos universos afectivos opuestos. Ocurre en aproximadamente uno de
            cada tres nacimientos. De ahí el procedimiento:
          </p>

          <div className="space-y-4">
            <Box title="Conoces tu hora de nacimiento">
              <p>
                Calcula tu <A href="/theme-astral">carta natal</A>: la posición
                de la Luna será exacta al grado y podrás leer también su casa y
                sus aspectos. Es la única lectura completa.
              </p>
            </Box>

            <Box title="No la conoces">
              <p>
                Calcula la carta para las <strong>12 h</strong>. Dos casos:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong>
                    La Luna permanece todo el día en el mismo signo
                  </strong>{" "}
                  — tu Luna por signo es fiable y puedes leer esta guía sin
                  reservas. Solo te faltará la casa.
                </li>
                <li>
                  <strong>La Luna cambia de signo ese día</strong> — lee los dos
                  retratos y comprueba cuál describe lo que haces{" "}
                  <em>cuando estás mal</em>, no lo que te gustaría ser. La
                  respuesta casi siempre es evidente.
                </li>
              </ul>
            </Box>
          </div>

          <Callout tone="warn" title="La prueba que no falla">
            <p>
              Para identificar una Luna, nunca preguntes «¿cómo eres?».
              Pregunta:{" "}
              <strong>
                «¿qué haces, en concreto, en los diez minutos siguientes a un
                disgusto?»
              </strong>{" "}
              ¿Llamas a alguien, ordenas, sales a caminar, comes, te callas,
              analizas, das un portazo? Esa reacción en bruto, sin filtrar, es
              tu Luna.
            </p>
          </Callout>
        </section>

        <Divider />

        {/* ── 5. TABLA ─────────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="tabla">
          <H2 id="tabla">Las 12 Lunas en una tabla</H2>

          <p className="leading-relaxed text-text/85">
            Vista de conjunto, para leer en diagonal. Cada línea se despliega
            después en un retrato completo.
          </p>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-soft">
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-sm">
                <thead className="bg-white/[0.04]">
                  <tr className="text-left">
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Luna en…
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Necesidad vital
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Se siente segura cuando…
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Se cierra cuando…
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Palabra clave
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {overview.map((row, i) => (
                    <tr
                      key={row.slug}
                      className={
                        i % 2 === 0
                          ? "border-t border-white/10"
                          : "border-t border-white/10 bg-white/[0.02]"
                      }
                    >
                      <td className="px-5 py-4 align-top">
                        <span className="inline-flex items-center gap-2">
                          <span
                            aria-hidden="true"
                            className={`h-2 w-2 shrink-0 rounded-full ${SIGN_TONE[row.slug].dot}`}
                          />
                          <a
                            href={`#luna-en-${row.slug}`}
                            className="font-medium text-white underline decoration-white/20 transition hover:decoration-white/60"
                          >
                            {row.sign}
                          </a>
                        </span>
                      </td>
                      <td className="px-5 py-4 align-top text-text/85">
                        {row.need}
                      </td>
                      <td className="px-5 py-4 align-top text-text/85">
                        {row.safe}
                      </td>
                      <td className="px-5 py-4 align-top text-text/85">
                        {row.shuts}
                      </td>
                      <td className="px-5 py-4 align-top">
                        <span
                          className={`inline-flex rounded-full border px-2.5 py-1 text-xs ${SIGN_TONE[row.slug].pill}`}
                        >
                          {row.word}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-text/65">
            Esta tabla da el color general. No sustituye a la lectura de la casa
            y de los aspectos: dos personas con la misma Luna por signo pueden
            tener vidas afectivas muy distintas.
          </p>
        </section>

        <Divider />

        {/* ── 6. LAS 12 LUNAS ──────────────────────────────── */}
        <section className="space-y-6" aria-labelledby="las-12-lunas">
          <H2 id="las-12-lunas">Las 12 Lunas en profundidad</H2>

          <p className="leading-relaxed text-text/85">
            Cada retrato sigue el mismo esquema: la necesidad, lo que
            tranquiliza, lo que hace saltar, la forma de amar, la memoria de
            infancia, la trampa, la palanca — y la frase que se le dice sin
            razón. Lee primero la tuya; después la de la persona con quien
            vives. Ahí suele encenderse la luz.
          </p>

          <div className="grid gap-6 lg:grid-cols-2">
            <MoonCard
              sign="Aries"
              slug="belier"
              element="fuego"
              modality="cardinal"
              motto="Reacciono, luego estoy bien"
            >
              <p>
                La emoción llega de golpe, sin aviso, y se va igual de rápido.
                Esta Luna no rumia: descarga. Necesita que algo <em>se mueva</em>{" "}
                para sentirse viva, y confunde con facilidad la intensidad con
                la seguridad.
              </p>
              <Line label="Necesidad vital">
                poder actuar de inmediato, sin pedir permiso.
              </Line>
              <Line label="Segura cuando">
                es libre de decir que no, de irse, de zanjar.
              </Line>
              <Line label="Salta cuando">
                la frenan, la sobreprotegen o le piden que espere.
              </Line>
              <Line label="En pareja">
                franca hasta la brusquedad, incapaz de fingir. Enfado rápido,
                rencor nulo. Necesita que le respondan, no que la calmen.
              </Line>
              <Line label="La memoria">
                un entorno donde había que reaccionar deprisa, defenderse solo y
                no mostrar miedo.
              </Line>
              <Line label="La trampa">
                tratar cada emoción como una urgencia que resolver en el
                minuto.
              </Line>
              <Line label="La palanca">
                veinte segundos entre lo que siente y lo que hace. Veinte
                segundos bastan.
              </Line>
              <Line label="Se le dice sin razón">
                «eres agresivo». No: es <em>rápido</em>, y la lentitud de los
                demás le da miedo.
              </Line>
            </MoonCard>

            <MoonCard
              sign="Tauro"
              slug="taureau"
              element="tierra"
              modality="fijo"
              motto="Mientras nada se mueva, estoy bien"
            >
              <p>
                Es la Luna más sólida del zodiaco: la tradición la considera{" "}
                <strong>exaltada</strong>, es decir, en su mejor versión. Digiere
                despacio, no se altera y devuelve toda emoción a lo concreto: el
                cuerpo, la comida, la cama, la cuenta bancaria.
              </p>
              <Line label="Necesidad vital">
                la continuidad. Que mañana se parezca a hoy.
              </Line>
              <Line label="Segura cuando">
                la rutina es estable, el cuerpo está tranquilo y la casa en
                orden.
              </Line>
              <Line label="Salta cuando">
                el cambio es brusco, impuesto o toca la seguridad material.
              </Line>
              <Line label="En pareja">
                la tranquiliza la regularidad mucho más que las declaraciones.
                Mide el amor en presencia, en gestos repetidos, en piel.
              </Line>
              <Line label="La memoria">
                la seguridad se contó en presencia física y en cosas tangibles —
                o faltó cruelmente.
              </Line>
              <Line label="La trampa">
                confundir comodidad con felicidad y quedarse diez años en una
                situación que ya no duele, pero tampoco hace nada.
              </Line>
              <Line label="La palanca">
                rituales elegidos en lugar de padecidos: alimentan de verdad sin
                inmovilizar.
              </Line>
              <Line label="Se le dice sin razón">
                «eres materialista». No: necesita suelo bajo los pies para poder
                sentir algo.
              </Line>
            </MoonCard>

            <MoonCard
              sign="Géminis"
              slug="gemeaux"
              element="aire"
              modality="mutable"
              motto="Si puedo explicarlo, puedo soportarlo"
            >
              <p>
                Esta Luna hace pasar toda emoción por el lenguaje. Nombra,
                comenta, cuenta, y se calma al comprender. Su inquietud es
                mental: da vueltas, busca la información que falta, no duerme
                mientras quede algo sin decir.
              </p>
              <Line label="Necesidad vital">
                poner palabras. A todo. Ya.
              </Line>
              <Line label="Segura cuando">
                entiende lo que pasa y puede contárselo a alguien.
              </Line>
              <Line label="Salta cuando">
                los demás callan, se enfurruñan o le ocultan algo.
              </Line>
              <Line label="En pareja">
                necesita hablar para sentirse querida. Una conversación vale un
                abrazo. El silencio prolongado se vive como un abandono.
              </Line>
              <Line label="La memoria">
                un niño que tranquilizaba a su entorno explicando, traduciendo,
                haciendo de puente entre los adultos.
              </Line>
              <Line label="La trampa">
                comentar la emoción en lugar de atravesarla. Se puede hablar
                durante años al lado de lo que uno siente.
              </Line>
              <Line label="La palanca">
                escribir en vez de darle vueltas, y aceptar quedarse diez
                minutos en una sensación sin nombrarla.
              </Line>
              <Line label="Se le dice sin razón">
                «eres superficial». No: gestiona el dolor por arriba, porque es
                el único sitio donde sabe manejarlo.
              </Line>
            </MoonCard>

            <MoonCard
              sign="Cáncer"
              slug="cancer"
              element="agua"
              modality="cardinal"
              motto="Pertenezco, luego existo"
            >
              <p>
                Aquí la Luna está <strong>en su casa</strong>: es su{" "}
                <A href="/maitrises">regencia</A>. Todo se amplifica: la
                sensibilidad, la memoria, el instinto de protección. Esta Luna
                siente antes de comprender, y rara vez se equivoca.
              </p>
              <Line label="Necesidad vital">
                pertenecer a alguien, a un lugar, a una historia.
              </Line>
              <Line label="Segura cuando">
                el vínculo es estable y hay una casa a la que volver.
              </Line>
              <Line label="Salta cuando">
                nota un enfriamiento, por mínimo que sea. Su radar es
                implacable.
              </Line>
              <Line label="En pareja">
                cuida, anticipa, protege. Da mucho y espera que adivinen lo que
                no se atreve a pedir.
              </Line>
              <Line label="La memoria">
                hipertrofiada. Recuerda el tono exacto de una frase dicha hace
                quince años, y la ropa que llevaba ese día.
              </Line>
              <Line label="La trampa">
                alimentar al otro para que no la deje, y luego reprocharle en
                silencio no recibir lo mismo.
              </Line>
              <Line label="La palanca">
                pedir con claridad, una vez, en lugar de esperar mucho tiempo.
              </Line>
              <Line label="Se le dice sin razón">
                «eres frágil». No: suele ser la persona más sólida de la familia
                cuando llega la crisis.
              </Line>
            </MoonCard>

            <MoonCard
              sign="Leo"
              slug="lion"
              element="fuego"
              modality="fijo"
              motto="Si cuento para ti, todo va bien"
            >
              <p>
                Esta Luna necesita una mirada. No un público: una mirada. Se
                calienta cuando la eligen y se hiela cuando se siente
                prescindible. Su generosidad es real, y siempre va dirigida a
                alguien.
              </p>
              <Line label="Necesidad vital">
                importarle a alguien, y saberlo.
              </Line>
              <Line label="Segura cuando">
                la ven, la nombran, la prefieren.
              </Line>
              <Line label="Salta cuando">
                la humillan, la ignoran o la comparan con otro.
              </Line>
              <Line label="En pareja">
                leal, cálida, algo teatral. Necesita admiración recíproca, y el
                silencio le cuesta más que el conflicto.
              </Line>
              <Line label="La memoria">
                existió por lo que daba, por lo que conseguía, por lo que hacía
                brillar en los demás.
              </Line>
              <Line label="La trampa">
                confundir atención con amor, y pedir siempre un poco más para
                asegurarse.
              </Line>
              <Line label="La palanca">
                pedir el reconocimiento en vez de intentar merecerlo en bucle.
              </Line>
              <Line label="Se le dice sin razón">
                «eres egocéntrico». No: necesita ser visto para poder dar, y da
                muchísimo.
              </Line>
            </MoonCard>

            <MoonCard
              sign="Virgo"
              slug="vierge"
              element="tierra"
              modality="mutable"
              motto="Si está en orden, puedo respirar"
            >
              <p>
                La ansiedad de esta Luna no se dice: se organiza. Ordenar,
                clasificar, corregir, prever son sus gestos de calma. Expresa el
                afecto mediante el servicio, y se siente querida cuando alguien
                cuida los detalles que le conciernen.
              </p>
              <Line label="Necesidad vital">
                ser útil y que las cosas estén limpias.
              </Line>
              <Line label="Segura cuando">
                el marco es previsible y tiene una tarea que cumplir.
              </Line>
              <Line label="Salta cuando">
                todo es caos, imprevisto, o se siente inútil.
              </Line>
              <Line label="En pareja">
                demuestra el amor con actos concretos y soporta mal las grandes
                palabras. Corrige lo que le molesta en lugar de decir que tiene
                miedo.
              </Line>
              <Line label="La memoria">
                aprendió muy pronto que el afecto se ganaba portándose bien,
                siendo servicial e irreprochable.
              </Line>
              <Line label="La trampa">
                la crítica, la suya y la de los demás. Es la inquietud la que
                habla, nunca el desprecio.
              </Line>
              <Line label="La palanca">
                nombrar la inquietud en voz alta antes de corregir al otro. El
                cuerpo también habla deprisa por ella.
              </Line>
              <Line label="Se le dice sin razón">
                «eres fría». No: es pudorosa, y ya te ha preparado la cena.
              </Line>
            </MoonCard>

            <MoonCard
              sign="Libra"
              slug="balance"
              element="aire"
              modality="cardinal"
              motto="Si el ambiente es bueno, estoy bien"
            >
              <p>
                Esta Luna se regula según el otro, como un termostato. Capta al
                instante una tensión en la habitación y se encarga de
                disolverla. Su necesidad no es ser querida: es que el aire sea
                respirable.
              </p>
              <Line label="Necesidad vital">
                la armonía del vínculo, la elegancia en el trato.
              </Line>
              <Line label="Segura cuando">
                el otro está bien y nada chirría.
              </Line>
              <Line label="Salta cuando">
                estalla el conflicto o hay que elegir decepcionando a alguien.
              </Line>
              <Line label="En pareja">
                atenta, conciliadora, muy dotada para el ajuste. Dice que sí
                demasiado rápido y pasa la factura mucho después.
              </Line>
              <Line label="La memoria">
                un niño mediador, situado a menudo entre dos adultos cuyo humor
                vigilaba.
              </Line>
              <Line label="La trampa">
                dejar de saber qué siente cuando está sola, sin nadie sobre
                quien regularse.
              </Line>
              <Line label="La palanca">
                decir el desacuerdo pronto y en pequeño, antes de que se
                convierta en ruptura.
              </Line>
              <Line label="Se le dice sin razón">
                «eres indecisa». No: está pesando el coste relacional de cada
                opción, y ese coste existe.
              </Line>
            </MoonCard>

            <MoonCard
              sign="Escorpio"
              slug="scorpion"
              element="agua"
              modality="fijo"
              motto="Dime la verdad, aunque duela"
            >
              <p>
                La tradición habla de <strong>caída</strong>: la necesidad de
                seguridad es la peor alojada aquí. Esta Luna no conoce las
                medias tintas. Lo siente todo con una intensidad extrema, y lo
                muestra lo menos posible.
              </p>
              <Line label="Necesidad vital">
                la verdad y la profundidad. Lo superficial la asfixia.
              </Line>
              <Line label="Segura cuando">
                nada está oculto y el vínculo llega hasta el final.
              </Line>
              <Line label="Salta cuando">
                detecta una mentira, una tibieza, una puerta de salida.
              </Line>
              <Line label="En pareja">
                fusión o nada. Pone a prueba, a menudo sin saberlo, para
                comprobar que el otro se queda. Su lealtad, una vez dada, es
                total.
              </Line>
              <Line label="La memoria">
                un no dicho en la infancia: un secreto, una desaparición, un
                tema prohibido que percibió sin que se lo contaran.
              </Line>
              <Line label="La trampa">
                el control, los celos, y después el corte radical y definitivo.
                No da un portazo: tapia la puerta.
              </Line>
              <Line label="La palanca">
                decir la intensidad en vez de cargarla sola. Verbalizada, se
                convierte en una fuerza poco común.
              </Line>
              <Line label="Se le dice sin razón">
                «eres tóxica». No: exige una autenticidad que muy poca gente
                sabe sostener.
              </Line>
            </MoonCard>

            <MoonCard
              sign="Sagitario"
              slug="sagittaire"
              element="fuego"
              modality="mutable"
              motto="Mientras haya horizonte, respiro"
            >
              <p>
                Esta Luna se tranquiliza con el sentido. Convierte una pena en
                lección, un fracaso en experiencia, una ruptura en viaje. Es una
                fuerza real, y a veces una huida muy bien disfrazada.
              </p>
              <Line label="Necesidad vital">
                espacio, movimiento y una razón para creer que merece la pena.
              </Line>
              <Line label="Segura cuando">
                el horizonte sigue abierto y siempre hay una puerta posible.
              </Line>
              <Line label="Salta cuando">
                la encierran, la vigilan o le achican el mundo.
              </Line>
              <Line label="En pareja">
                cálida, generosa, divertida. Quiere mucho, a condición de no
                sentirse atada.
              </Line>
              <Line label="La memoria">
                una familia que se mudaba mucho, o al contrario un mundo cerrado
                del que hubo que escapar con la imaginación.
              </Line>
              <Line label="La trampa">
                convertir toda tristeza en proyecto y no sentarse nunca en lo
                que duele.
              </Line>
              <Line label="La palanca">
                quedarse. Una hora, una noche. Sin irse, sin relativizar, sin
                hacer un chiste.
              </Line>
              <Line label="Se le dice sin razón">
                «te da igual». No: encaja avanzando, porque pararse le da miedo.
              </Line>
            </MoonCard>

            <MoonCard
              sign="Capricornio"
              slug="capricorne"
              element="tierra"
              modality="cardinal"
              motto="Yo me ocupo, no te preocupes por mí"
            >
              <p>
                La tradición la sitúa <strong>en exilio</strong>: la necesidad
                afectiva es la que menos se expresa espontáneamente. Esta Luna
                cierra el grifo y aguanta. De adulta suele ser la más fiable del
                zodiaco, y la más sola.
              </p>
              <Line label="Necesidad vital">
                sostenerse en pie sin depender de nadie.
              </Line>
              <Line label="Segura cuando">
                controla, asume, tiene una responsabilidad clara.
              </Line>
              <Line label="Salta cuando">
                la colocan en posición de dependencia o de desbordamiento
                emocional.
              </Line>
              <Line label="En pareja">
                poco demostrativa, extremadamente fiel. Demuestra con el tiempo
                lo que nunca dirá con palabras.
              </Line>
              <Line label="La memoria">
                creció demasiado rápido. Un progenitor ausente, enfermo o
                desbordado, o una exigencia de seriedad muy temprana.
              </Line>
              <Line label="La trampa">
                creer que pedir ayuda es admitir una debilidad, y derrumbarse
                sola, en silencio, muy tarde.
              </Line>
              <Line label="La palanca">
                aceptar una ayuda por semana. Una sola. Es entrenamiento, no
                rendición.
              </Line>
              <Line label="Se le dice sin razón">
                «eres insensible». No: es pudorosa, y seguirá ahí dentro de
                veinte años cuando los demás se hayan ido.
              </Line>
            </MoonCard>

            <MoonCard
              sign="Acuario"
              slug="verseau"
              element="aire"
              modality="fijo"
              motto="Déjame respirar y vuelvo"
            >
              <p>
                Esta Luna observa su propia emoción desde el techo. Comprende
                perfectamente lo que siente, y lo siente con un ligero desfase,
                como si le ocurriera a otra persona. Es su protección.
              </p>
              <Line label="Necesidad vital">
                libertad y lucidez. Poder tomar distancia cuando quiera.
              </Line>
              <Line label="Segura cuando">
                nadie le pide cuentas de lo que siente.
              </Line>
              <Line label="Salta cuando">
                la poseen, la agobian o le hacen chantaje afectivo.
              </Line>
              <Line label="En pareja">
                amistad amorosa, fidelidad elegida más que debida. Necesita un
                espacio propio para poder estar presente.
              </Line>
              <Line label="La memoria">
                se sintió diferente muy pronto: familia atípica, o un clima
                afectivo extrañamente frío que hubo que racionalizar.
              </Line>
              <Line label="La trampa">
                intelectualizar hasta no sentir nada, y luego romper de golpe,
                limpiamente, sin vuelta atrás.
              </Line>
              <Line label="La palanca">
                cinco minutos en el cuerpo, sin comentarios. La respiración
                antes del análisis.
              </Line>
              <Line label="Se le dice sin razón">
                «eres distante». No: mantiene lejos lo que le llega demasiado
                adentro, y le llega muy adentro.
              </Line>
            </MoonCard>

            <MoonCard
              sign="Piscis"
              slug="poissons"
              element="agua"
              modality="mutable"
              motto="Lo siento todo, incluso lo que no es mío"
            >
              <p>
                Esponja emocional. Esta Luna capta el estado de una habitación
                al entrar en ella y no siempre distingue lo que le pertenece de
                lo que ha absorbido. De ahí una compasión inmensa, y un cansancio
                difícil de explicar.
              </p>
              <Line label="Necesidad vital">
                conectar con algo más grande: el arte, el cuidado, el silencio,
                el amor.
              </Line>
              <Line label="Segura cuando">
                el vínculo es suave, poroso, sin agresión ni exigencia.
              </Line>
              <Line label="Salta cuando">
                lo real se vuelve duro, cínico o brutal. Se disuelve.
              </Line>
              <Line label="En pareja">
                entregada, intuitiva, novelesca. Ve al otro tal como podría
                llegar a ser, lo cual es tan hermoso como peligroso.
              </Line>
              <Line label="La memoria">
                captó muy pronto las emociones de la casa, incluidas las que
                nadie formulaba.
              </Line>
              <Line label="La trampa">
                cargar con la emoción de los demás, salvar, y luego escapar: al
                sueño, a la idealización o a algo peor.
              </Line>
              <Line label="La palanca">
                una pregunta, varias veces al día: <em>¿esto es mío?</em> Todo
                cambia cuando la respuesta es no.
              </Line>
              <Line label="Se le dice sin razón">
                «eres débil». No: absorbe lo que la mayoría ni siquiera percibe.
              </Line>
            </MoonCard>
          </div>

          <Callout tone="note" title="Una precisión que lo cambia todo">
            <p>
              Ninguno de estos retratos es una fatalidad. Son{" "}
              <strong>mecanismos de protección</strong>, aprendidos cuando no
              teníamos otra opción. Reconocerlos ya es dejar de padecerlos: se
              puede conservar la necesidad y cambiar el reflejo. Eso es,
              exactamente, lo que trabaja la{" "}
              <A href="/astro-psychologie">astropsicología</A>.
            </p>
          </Callout>
        </section>

        <Divider />

        {/* ── 7. LUNA / SOL ────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="luna-sol">
          <H2 id="luna-sol">
            Cuando la Luna contradice al Sol: la tensión más útil de la carta
          </H2>

          <p className="leading-relaxed text-text/85">
            Aquí es donde la astrología se vuelve realmente interesante. El Sol
            marca una dirección; la Luna, una necesidad. Cuando ambos están en
            elementos incompatibles, la persona se pasa la vida queriendo una
            cosa y necesitando la contraria. No es un defecto de fábrica: es el
            motor de una vida.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <Box title="Sol y Luna en el mismo elemento">
              <p>
                Gran coherencia interior: lo que la persona quiere y lo que
                necesita van en la misma dirección. Avanza rápido, se conoce
                bien… y a veces le falta contrapeso. Poco conflicto interior
                significa también poca distancia respecto de uno mismo.
              </p>
            </Box>

            <Box title="Fuego con Aire, Tierra con Agua">
              <p>
                Elementos cómplices. El Fuego necesita Aire para arder, la
                Tierra necesita Agua para ser fértil. La Luna sostiene el impulso
                solar en lugar de frenarlo: es cómodo, y da personas
                sorprendentemente constantes.
              </p>
            </Box>

            <Box title="Fuego con Agua, Tierra con Aire">
              <p>
                Tensión fecunda. Un Sol en <A href="/signes/belier">Aries</A> con
                Luna en <A href="/signes/cancer">Cáncer</A> se lanza y luego
                necesita volver a casa. Un Sol en{" "}
                <A href="/signes/capricorne">Capricornio</A> con Luna en{" "}
                <A href="/signes/poissons">Piscis</A> construye una carrera
                sólida soñando con dejarlo todo. La vida consiste en darle su
                lugar a cada uno, por turnos; nunca en elegir.
              </p>
            </Box>

            <Box title="Sol y Luna en el mismo signo">
              <p>
                Nacimiento alrededor de una <strong>luna nueva</strong>:
                identidad y necesidad se funden. Mucho instinto y una dirección
                muy clara, pero poca distancia respecto de uno mismo. Estas
                personas suelen descubrirse tarde, de golpe y con mucha fuerza.
              </p>
            </Box>
          </div>

          <Callout tone="ok" title="El diagnóstico exprés">
            <p>
              Si te agotas dentro de una vida que, sobre el papel, coincide con
              tus objetivos:{" "}
              <strong>mira tu Luna, no tu Sol</strong>. Nueve de cada diez
              veces, la necesidad lunar no está alimentada en ningún punto de tu
              agenda.
            </p>
          </Callout>
        </section>

        {/* ── 8. LUNA EN LAS CASAS ─────────────────────────── */}
        <section className="space-y-5" aria-labelledby="luna-casas">
          <H2 id="luna-casas">
            La Luna en las casas: dónde buscas tu seguridad
          </H2>

          <p className="leading-relaxed text-text/85">
            El signo dice <em>qué</em> necesitas. La{" "}
            <A href="/maisons">casa</A> dice <em>dónde</em> vas a buscarlo, y
            suele ser la información más operativa de la carta. Estos son los
            doce terrenos, en una línea cada uno.
          </p>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <ul className="divide-y divide-white/10">
              <li className="p-4 text-text/85">
                <strong className="text-white">
                  <A href="/maisons/maison-1">Casa 1</A>
                </strong>{" "}
                — la seguridad pasa por la expresión directa de uno mismo. El
                humor se ve en la cara, al instante.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">
                  <A href="/maisons/maison-2">Casa 2</A>
                </strong>{" "}
                — se tranquiliza con lo concreto, el dinero, lo que es suyo. La{" "}
                <A href="/blog/finances-theme-astral">relación con las finanzas</A>{" "}
                es emocional antes que racional.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">
                  <A href="/maisons/maison-3">Casa 3</A>
                </strong>{" "}
                — necesita hablar, intercambiar, circular. El silencio es un
                castigo.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">
                  <A href="/maisons/maison-4">Casa 4</A>
                </strong>{" "}
                — posición de fuerza: el hogar, la familia y las raíces
                alimentan directamente la necesidad. La casa no es un decorado,
                es un órgano.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">
                  <A href="/maisons/maison-5">Casa 5</A>
                </strong>{" "}
                — se recarga creando, jugando, amando, con los niños.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">
                  <A href="/maisons/maison-6">Casa 6</A>
                </strong>{" "}
                — la seguridad pasa por la rutina ordenada, el trabajo útil, el
                cuerpo. Aquí emociones y salud están muy ligadas.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">
                  <A href="/maisons/maison-7">Casa 7</A>
                </strong>{" "}
                — necesita al otro para sentirse entera. La pareja es el lugar
                donde se juega todo; ver la{" "}
                <A href="/synastrie">sinastría</A>.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">
                  <A href="/maisons/maison-8">Casa 8</A>
                </strong>{" "}
                — seguridad por la intensidad, la transformación, lo que se
                comparte en profundidad. Nada tibio la alimenta.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">
                  <A href="/maisons/maison-9">Casa 9</A>
                </strong>{" "}
                — necesita sentido, otros lugares, creencias. Se cura ampliando
                el horizonte.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">
                  <A href="/maisons/maison-10">Casa 10</A>
                </strong>{" "}
                — lo emocional se juega en público, en el oficio, en la
                reputación. Ver la{" "}
                <A href="/blog/orientation-professionnelle-theme-astral">
                  orientación profesional
                </A>
                .
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">
                  <A href="/maisons/maison-11">Casa 11</A>
                </strong>{" "}
                — se tranquiliza en el grupo, los amigos, los proyectos
                colectivos.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">
                  <A href="/maisons/maison-12">Casa 12</A>
                </strong>{" "}
                — necesita retiro, silencio, interioridad. Una sensibilidad
                inmensa, rara vez mostrada.
              </li>
            </ul>
          </div>
        </section>

        <Divider />

        {/* ── 9. ASPECTOS ──────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="aspectos">
          <H2 id="aspectos">Los aspectos de la Luna: lo que lo cambia todo</H2>

          <p className="leading-relaxed text-text/85">
            Un <A href="/aspects">aspecto</A> es un ángulo entre dos planetas.
            Aplicado a la Luna, indica qué facilita o complica el acceso a la
            necesidad. Los ángulos <em>duros</em> (cuadratura, oposición) no son
            maldiciones: obligan a construir conscientemente lo que otros
            reciben sin esfuerzo.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <Box tone="amber" title="Luna – Saturno">
              <p>
                Contracción de la necesidad. Se aprendió a no molestar, a no
                pedir. Contención, seriedad, sensación de soledad temprana, y una
                madurez afectiva real después de los 30. Ver{" "}
                <A href="/blog/saturnien">el perfil saturniano</A>.
              </p>
            </Box>
            <Box tone="teal" title="Luna – Neptuno">
              <p>
                Porosidad máxima. Compasión, intuición, arte, pero fronteras
                difusas, idealización y dificultad para saber qué es propio.
                Terreno clásico de las relaciones de rescate.
              </p>
            </Box>
            <Box tone="fuchsia" title="Luna – Plutón">
              <p>
                Intensidad extrema y cuestiones de control. El apego lo
                compromete todo. Son Lunas que atraviesan transformaciones
                afectivas radicales; ver también{" "}
                <A href="/blog/manipulateurs-pervers-narcissiques-astrologie">
                  las dinámicas de dominación
                </A>
                .
              </p>
            </Box>
            <Box tone="sky" title="Luna – Urano">
              <p>
                Necesidad de independencia imprevisible. Rupturas limpias,
                humores en dientes de sierra, horror a la rutina afectiva. Gran
                libertad interior, siempre que se asuma el ritmo.
              </p>
            </Box>
            <Box tone="red" title="Luna – Marte">
              <p>
                Reactividad inmediata. La emoción sale rápido y sin rodeos, a
                veces demasiado. Mucho valor afectivo, poca paciencia.
              </p>
            </Box>
            <Box tone="rose" title="Luna – Venus">
              <p>
                Dulzura y gusto por el vínculo armonioso. Encanto real,
                necesidad de gustar, poca tolerancia a la fealdad relacional.
              </p>
            </Box>
          </div>

          <p className="text-sm leading-relaxed text-text/65">
            Un aspecto nunca sustituye al signo: lo modula. Una Luna en Tauro en
            cuadratura con Urano sigue siendo una Luna en Tauro; simplemente su
            estabilidad se pondrá a prueba con regularidad.
          </p>
        </section>

        {/* ── 10. FASE ─────────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="fase">
          <H2 id="fase">Tu fase lunar de nacimiento</H2>

          <p className="leading-relaxed text-text/85">
            La fase es la distancia angular entre el Sol y la Luna en el momento
            del nacimiento. Describe la <strong>relación</strong> entre la
            identidad y la necesidad, una capa de interpretación que casi todas
            las lecturas divulgativas ignoran, aunque habla de inmediato. Para el
            mecanismo completo, ver{" "}
            <A href="/blog/pleine-lune-nouvelle-lune-cycles-astrologie">
              los ciclos de la Luna
            </A>
            .
          </p>

          <PhaseStrip
            labels={["Nueva", "Creciente", "Cuarto creciente", "Gibosa", "Llena", "Diseminante", "Cuarto menguante", "Balsámica"]}
            caption="Las ocho fases del ciclo lunar, de la luna nueva a la luna balsámica."
          />

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <ul className="divide-y divide-white/10">
              <li className="p-4 text-text/85">
                <strong className="text-white">Luna nueva (0–45°)</strong> —
                instinto, impulso, arranque. Actúa primero y comprende después.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">Creciente (45–90°)</strong> —
                lucha contra el pasado, voluntad de emancipación.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">
                  Cuarto creciente (90–135°)
                </strong>{" "}
                — crisis fértil, necesidad de construir, gusto por la acción.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">Gibosa (135–180°)</strong> —
                perfeccionamiento, análisis, búsqueda del sentido justo.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">Luna llena (180–225°)</strong> —
                conciencia a través del otro. Todo se juega en relación, en
                espejo.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">Diseminante (225–270°)</strong> —
                necesidad de transmitir, enseñar, compartir lo comprendido.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">
                  Cuarto menguante (270–315°)
                </strong>{" "}
                — cuestionamiento de los valores heredados, reorientación.
              </li>
              <li className="p-4 text-text/85">
                <strong className="text-white">Balsámica (315–360°)</strong> —
                cierre, interioridad, sensibilidad a los finales de ciclo. A
                menudo mística.
              </li>
            </ul>
          </div>
        </section>

        {/* ── 11. DIGNIDADES ───────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="dignidades">
          <H2 id="dignidades">
            Domicilio, exaltación, exilio, caída: qué significan de verdad
          </H2>

          <p className="leading-relaxed text-text/85">
            Estas cuatro palabras asustan a los principiantes. Solo describen la{" "}
            <strong>comodidad</strong> de un planeta en un signo determinado; no
            su valor, y menos aún el tuyo.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <Box tone="violet" title="Domicilio — Luna en Cáncer">
              <p>
                La Luna está en su casa. La necesidad se expresa con
                naturalidad, la sensibilidad fluye, el instinto es fiable. Reverso:
                poca distancia, dificultad para desapegarse.
              </p>
            </Box>
            <Box tone="emerald" title="Exaltación — Luna en Tauro">
              <p>
                La posición más estable del zodiaco. La necesidad es fácil de
                alimentar, el humor regular, la presencia calmante. Reverso: la
                inercia.
              </p>
            </Box>
            <Box tone="amber" title="Exilio — Luna en Capricornio">
              <p>
                La necesidad afectiva no encuentra expresión espontánea. Se
                aprende a prescindir de lo que no se recibió. Reverso positivo:
                una fiabilidad y una resistencia afectivas poco comunes.
              </p>
            </Box>
            <Box tone="fuchsia" title="Caída — Luna en Escorpio">
              <p>
                La necesidad se vive con una intensidad difícil de regular. Nada
                es ligero. Reverso positivo: una profundidad y una lucidez
                psicológicas que nada sustituye.
              </p>
            </Box>
          </div>

          <Callout tone="warn" title="No confundir">
            <p>
              Exilio y caída <strong>no</strong> significan «mala persona» ni
              «vida difícil». Señalan una necesidad que habrá que construir
              conscientemente en lugar de recibirla. En la práctica, suelen ser
              las Lunas más fuertes en la edad adulta.
            </p>
          </Callout>
        </section>

        {/* ── 12. CICLOS ───────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="ciclos">
          <H2 id="ciclos">
            Los ciclos: Luna en tránsito, retorno lunar, Luna progresada
          </H2>

          <div className="space-y-4">
            <Box title="La Luna en tránsito — el ritmo de dos días y medio">
              <p>
                Cada dos días y medio, la Luna del cielo cambia de signo y tiñe
                el humor colectivo. Eso explica esos días en que «todo el mundo
                está de los nervios» sin motivo identificable. No tiene nada que
                ver con tu Luna natal: es el tiempo que hace, no el clima. Sigue
                las fechas en el{" "}
                <A href="/blog/calendrier-pleine-lune-nouvelle-lune-2026-2027">
                  calendario lunar 2026-2027
                </A>
                .
              </p>
            </Box>

            <Box title="El retorno lunar — cada 27,3 días">
              <p>
                Cada mes la Luna vuelve exactamente a su posición de nacimiento.
                Muchas personas sensibles notan un pico emocional o una claridad
                particular en torno a esa fecha. Es el ciclo más corto y más
                verificable de los <A href="/transits">tránsitos</A>.
              </p>
            </Box>

            <Box title="La Luna progresada — el ciclo de 27 años">
              <p>
                En progresiones secundarias, la Luna avanza alrededor de un signo
                cada <strong>dos años y medio</strong> y completa su vuelta en 27
                o 28 años. Describe el <em>clima afectivo</em> de un periodo de
                vida: lo que necesitas ahora, que no es lo que necesitabas hace
                tres años. Es una de las herramientas predictivas más fiables, y
                de las más suaves.
              </p>
            </Box>
          </div>
        </section>

        <Divider />

        {/* ── 13. ERRORES ──────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="errores">
          <H2 id="errores">Los 6 errores más frecuentes sobre la Luna</H2>

          <div className="space-y-3">
            <Box title="1. Tomar la Luna por «tu verdadero signo»">
              <p>
                La Luna no es un signo oculto más auténtico que el Sol. Es una
                función distinta. No se sustituye uno por otro: se leen juntos.
              </p>
            </Box>
            <Box title="2. Confundir la Luna natal con la Luna del día">
              <p>
                Tu Luna natal no se mueve nunca. La Luna del cielo cambia cada
                dos días y medio. Los horóscopos diarios hablan de la segunda;
                esta guía habla de la primera.
              </p>
            </Box>
            <Box title="3. Leer la Luna sin la casa">
              <p>
                El signo sin la casa es una necesidad sin dirección postal. Sabes
                qué necesita la persona, pero no dónde va a buscarlo, así que no
                puedes aconsejarle nada útil.
              </p>
            </Box>
            <Box title="4. Reducir la Luna a la madre">
              <p>
                La Luna describe la <em>función de cuidado</em> tal como se
                recibió e integró. Eso incluye a la madre, pero también el clima
                general de la infancia y, a veces, a otra persona distinta.
              </p>
            </Box>
            <Box title="5. Creer que una Luna difícil condena">
              <p>
                Un aspecto duro describe un aprendizaje, no una sentencia. La
                parte más limitada de una carta es muy a menudo aquella en la que
                la persona acaba siendo más competente.
              </p>
            </Box>
            <Box title="6. Interpretar la Luna de otro en su lugar">
              <p>
                Dos personas con la misma Luna por signo no viven lo mismo. La
                historia, la casa y los aspectos hacen el resto. La carta da la
                estructura, nunca el guion.
              </p>
            </Box>
          </div>
        </section>

        {/* ── 14. LO QUE HAY QUE RECORDAR ──────────────────── */}
        <section className="space-y-5" aria-labelledby="recordar">
          <H2 id="recordar">Lo que hay que recordar</H2>

          <div className="relative overflow-hidden rounded-2xl border border-emerald-400/25 bg-gradient-to-br from-emerald-500/[0.10] via-sky-500/[0.05] to-transparent p-6">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl"
            />
            <ul className="relative space-y-3 leading-relaxed text-text/90">
              <li>
                🌙 <strong>La Luna es la necesidad</strong>, no el humor. Dice
                qué te hace falta para mantenerte en pie.
              </li>
              <li>
                🌙 <strong>Se ve cuando estás mal</strong>, no cuando todo va
                bien. Es la mejor prueba de identificación.
              </li>
              <li>
                🌙 <strong>Cambia de signo cada 2 días y medio</strong>: sin la
                hora de nacimiento, la lectura sigue siendo incierta.
              </li>
              <li>
                🌙 <strong>Signo + casa + aspectos</strong>: tres pisos, y
                ninguno es opcional.
              </li>
              <li>
                🌙 <strong>Ninguna Luna es mala.</strong> Exilio y caída
                describen una necesidad por construir, no un defecto.
              </li>
              <li>
                🌙{" "}
                <strong>
                  Cuando la Luna no está alimentada, nada más funciona
                </strong>{" "}
                — ni la pareja, ni el trabajo, ni los proyectos del Sol.
              </li>
            </ul>
          </div>

          <p className="leading-relaxed text-text/85">
            Si de todo este artículo solo te quedaras con una pregunta, que sea
            esta:{" "}
            <strong>
              ¿qué hago, en concreto, esta semana, para alimentar mi Luna?
            </strong>{" "}
            No simbólicamente. En concreto. Una Luna en Tauro necesita una
            comida de verdad y una noche de sueño de verdad; una Luna en Géminis,
            una conversación; una Luna en Capricornio, el derecho a no ocuparse
            de nada por una vez.
          </p>
        </section>

        {/* ── 15. FAQ ──────────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="faq">
          <H2 id="faq">Preguntas frecuentes sobre la Luna en los signos</H2>

          <div className="space-y-4">
            {faq.map((item) => (
              <details
                key={item.q}
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

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="rounded-2xl border border-white/10 bg-black/20 p-6">
          <p className="text-sm text-text/60">Sigue leyendo</p>
          <div className="mt-3 space-y-3 leading-relaxed text-text/85">
            <p>
              Para completar el retrato afectivo, lee{" "}
              <A href="/blog/venus-en-signes-style-amoureux">
                Venus en los signos: tu estilo amoroso
              </A>{" "}
              y{" "}
              <A href="/blog/mars-en-signes-desir-libido-action">
                Marte en los signos: deseo y paso a la acción
              </A>
              . Luna, Venus y Marte forman el triángulo completo de la vida
              relacional: la necesidad, el gusto, el impulso.
            </p>
            <p>
              Si la Luna es dominante en tu carta, el retrato detallado del{" "}
              <A href="/blog/lunarien">tipo lunar</A> te concierne directamente.
              Y para situar tu Luna en el conjunto, empieza por{" "}
              <A href="/blog/qu-est-ce-qu-un-theme-astral">
                qué es una carta natal
              </A>{" "}
              o explora el{" "}
              <A href="/dictionnaire-astrologique">diccionario astrológico</A>.
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
