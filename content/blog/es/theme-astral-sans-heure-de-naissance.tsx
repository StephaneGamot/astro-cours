import type { ReactNode } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import CoverImage from "@/public/images/blog/theme-astral-sans-heure-de-naissance.webp";
import RegistreImage from "@/public/images/blog/registre-etat-civil-heure-naissance.webp";
import BandeauImage from "@/public/images/blog/montre-sans-aiguilles-bandeau.webp";

export const meta = {
  slug: "theme-astral-sans-heure-de-naissance",
  seoTitle: "Carta astral sin hora de nacimiento: qué se puede leer",
  title: "Carta astral sin hora de nacimiento: qué aguanta y qué se cae",
  description:
    "¿No sabes tu hora de nacimiento? Dónde encontrarla en España, Francia y Bélgica, qué dice aún una carta sin hora y qué no hay que deducir de ella.",
  date: "2026-10-03",
  tags: [
    "thème astral",
    "méthode",
    "bases",
    "ascendant",
    "lune",
    "maisons astrologiques",
    "signe solaire",
    "exemples",
    "débutant",
  ],
  readingLevel: "débutant" as const,
  cover: "/images/blog/theme-astral-sans-heure-de-naissance.webp",
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

function Divider() {
  return (
    <div className="flex items-center gap-4" aria-hidden="true">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-white/10" />
      <span className="text-sm tracking-[0.3em] text-amber-200/50">☉ ☽ ☿</span>
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
  { id: "recuperar-la-hora", label: "Recuperar la hora antes de renunciar a ella" },
  { id: "que-aguanta", label: "Qué aguanta y qué se cae" },
  { id: "dos-medianoches", label: "La prueba de las dos medianoches" },
  { id: "ejemplo", label: "Un ejemplo sorteado" },
  { id: "luna", label: "La Luna, un caso aparte" },
  { id: "convenciones", label: "Carta de mediodía, carta solar" },
  { id: "rectificacion", label: "La rectificación" },
  { id: "lista", label: "La lista de comprobación" },
  { id: "faq", label: "Preguntas frecuentes" },
];

/* ── FAQ (visualización + JSON-LD desde la misma fuente) ─────── */

const faq = [
  {
    q: "¿Se puede hacer la carta astral sin hora de nacimiento?",
    a: "Sí, pero a medias. La fecha basta para situar el Sol y los planetas en sus signos y para leer sus aspectos, lo que ya da un retrato psicológico. El Ascendente, el Medio Cielo y las casas quedan desconocidos, y la Luna cambia de signo el 44 % de los días: compruébala con la prueba de las dos medianoches.",
  },
  {
    q: "¿Cómo saber mi Ascendente sin hora de nacimiento?",
    a: "No se puede deducir. El Ascendente recorre todo el zodiaco en veinticuatro horas y, en la España peninsular, permanece en cada signo entre algo más de una hora y unas dos horas y media, según el signo y la latitud. Sin hora, ningún signo supera el 11 % de probabilidad. Solo queda recuperar la hora o reconstruirla mediante la rectificación.",
  },
  {
    q: "¿Dónde encuentro mi hora de nacimiento?",
    a: "En tu inscripción de nacimiento. En España, pide el certificado literal de nacimiento en el Registro Civil o en la sede electrónica del Ministerio de Justicia: es gratuito, y la ley establece que la inscripción hace fe de la hora. Si naciste en Francia, pide la copie intégrale; en Bélgica, la copia del acta.",
  },
  {
    q: "¿Qué hora pongo en el programa si no la sé?",
    a: "Por convención, las 12:00: es la hora que limita el error sobre la Luna, a ocho grados como mucho. Ignora entonces el Ascendente, el Medio Cielo y las casas que muestre el programa, y comprueba los signos calculando la carta para las 00:00 y las 23:59. Lo que cambia entre ambas sigue siendo incierto.",
  },
  {
    q: "¿Es fiable la hora del certificado de nacimiento?",
    a: "Es la hora declarada en el Registro, en hora legal de la época, y la mejor fuente disponible. Una hora redonda, las 10:00 o las 15:30, puede haberse redondeado: rehaz los cálculos delicados media hora antes y media hora después. Introdúcela tal cual, con el lugar: un buen programa aplica el historial del horario de verano.",
  },
  {
    q: "¿La carta solar sustituye a la carta natal?",
    a: "No. Coloca el Sol en el Ascendente y deduce de ahí unas casas simbólicas, idénticas para todos los nacidos con pocos días de diferencia. Es una plantilla cómoda para seguir los tránsitos, la de los horóscopos de prensa, no una descripción de tu vida concreta.",
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

/* ── Dónde está la hora, país por país ───────────────────────── */

const paises = [
  {
    pais: "España",
    doc: "Certificado literal de nacimiento",
    lang: undefined,
    donde: "Registro Civil del lugar de nacimiento, o en línea en la sede electrónica del Ministerio de Justicia.",
    nota: "Gratuito. Pide el literal, copia exacta de la inscripción, y no el extracto.",
  },
  {
    pais: "Francia",
    doc: "Copie intégrale de l’acte de naissance",
    lang: "fr",
    donde: "Ayuntamiento (mairie) del lugar de nacimiento, en persona, por correo o en línea en service-public.gouv.fr. Nacidos en el extranjero: Service central d’état civil, en Nantes.",
    nota: "Gratuita. Reservada a la persona mayor de edad, su representante legal, su cónyuge o pareja de hecho (Pacs), sus ascendientes y descendientes.",
  },
  {
    pais: "Bélgica",
    doc: "Copia del acta de nacimiento",
    lang: undefined,
    donde: "Cualquier municipio, a veces en línea. Actas anteriores al 31 de marzo de 2019: el municipio de nacimiento.",
    nota: "Desde 2019, las actas están en la BAEC, la base nacional del registro civil. La copia reproduce el acta entera; el extracto la resume.",
  },
];

/* ── Qué aguanta y qué se cae ────────────────────────────────── */

const aguanta = [
  {
    el: "Sol en signo",
    veredicto: "Fiable",
    porque: "1° al día. Cambia de signo doce días al año (el 3,3 % de los días): solo esos días hay duda.",
    ok: true,
  },
  {
    el: "Mercurio, Venus, Marte en signo",
    veredicto: "Fiables casi siempre",
    porque: "Cambian de signo el 4,1 %, el 3,5 % y el 1,9 % de los días.",
    ok: true,
  },
  {
    el: "De Júpiter a Plutón",
    veredicto: "Fiables",
    porque: "Unas centésimas de grado al día, a veces menos.",
    ok: true,
  },
  {
    el: "Aspectos entre planetas (sin la Luna)",
    veredicto: "Fiables",
    porque: "En veinticuatro horas, las distancias entre planetas varían uno o dos grados como mucho.",
    ok: true,
  },
  {
    el: "Luna en signo",
    veredicto: "Un día de cada dos",
    porque: "De 12 a 15° al día: cambia de signo el 43,9 % de los días.",
    ok: false,
  },
  {
    el: "Aspectos de la Luna",
    veredicto: "Con prudencia",
    porque: "Su posición oscila de seis a ocho grados alrededor del mediodía: los aspectos ajustados pueden existir o no.",
    ok: false,
  },
  {
    el: "Ascendente, Medio Cielo",
    veredicto: "Desconocidos",
    porque: "Dan la vuelta completa al zodiaco en veinticuatro horas.",
    ok: false,
  },
  {
    el: "Casas",
    veredicto: "Desconocidas",
    porque: "Se cuentan a partir del Ascendente.",
    ok: false,
  },
  {
    el: "Planeta dominante",
    veredicto: "Incalculable",
    porque: "Tres de los siete criterios dependen de los ángulos de la carta.",
    ok: false,
  },
  {
    el: "Tránsitos a los ángulos, revolución solar",
    veredicto: "Inutilizables",
    porque: "Se apoyan en el Ascendente, el Medio Cielo y las casas.",
    ok: false,
  },
];

/* ── El ejemplo sorteado: 25 de febrero de 1966, Clermont-Ferrand ─ */

const posiciones = [
  { p: "Sol", g: "☉", a: "5° 53′ Piscis", b: "6° 53′ Piscis", v: "Aguanta", ok: true },
  { p: "Luna", g: "☽", a: "25° 27′ Aries", b: "7° 47′ Tauro", v: "Se cae: Tauro desde las 8:53", ok: false },
  { p: "Mercurio", g: "☿", a: "20° 51′ Piscis", b: "22° 31′ Piscis", v: "Aguanta", ok: true },
  { p: "Venus", g: "♀", a: "29° 49′ Capricornio", b: "0° 10′ Acuario", v: "Se cae: Acuario desde las 11:54", ok: false },
  { p: "Marte", g: "♂", a: "20° 11′ Piscis", b: "20° 58′ Piscis", v: "Aguanta", ok: true },
  { p: "Júpiter", g: "♃", a: "21° 24′ Géminis", b: "21° 26′ Géminis", v: "Aguanta", ok: true },
  { p: "Saturno", g: "♄", a: "18° 09′ Piscis", b: "18° 16′ Piscis", v: "Aguanta", ok: true },
  { p: "Urano", g: "♅", a: "18° 05′ Virgo ℞", b: "18° 03′ Virgo ℞", v: "Aguanta", ok: true },
  { p: "Neptuno", g: "♆", a: "22° 10′ Escorpio ℞", b: "22° 10′ Escorpio ℞", v: "Aguanta", ok: true },
  { p: "Plutón", g: "♇", a: "17° 27′ Virgo ℞", b: "17° 26′ Virgo ℞", v: "Aguanta", ok: true },
  { p: "Ascendente", g: "AS", a: "9° 19′ Escorpio", b: "9° 52′ Escorpio", v: "Se cae: los doce signos desfilan entretanto", ok: false },
];

/* ── El componente ───────────────────────────────────────────── */

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
            src={CoverImage}
            alt="Reloj de bolsillo abierto con la esfera sin agujas, entre un sol dorado y una luna creciente que se reflejan en su cristal"
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
              Respuesta directa · Lista de comprobación · Ejemplo calculado
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-text/85">
              Quieres tu carta astral, el programa te pide la hora de
              nacimiento y nadie en la familia se acuerda.{" "}
              <strong>
                Buena noticia: una carta sin hora todavía se lee a medias. Mejor
                noticia: la hora casi siempre se puede recuperar.
              </strong>
            </p>

            <p className="mt-3 max-w-2xl leading-relaxed text-text/80">
              Este artículo reúne lo que rara vez se encuentra en un mismo
              sitio: dónde conseguir la hora en España, Francia y Bélgica, una
              prueba sencilla para saber qué sigue siendo legible en tu carta,
              y un ejemplo sorteado, calculado de principio a fin, con lo que
              yo diría de él y lo que me negaría a decir.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <Pill tone="violet">Países: España, Francia, Bélgica</Pill>
              <Pill tone="sky">Prueba: dos minutos</Pill>
              <Pill tone="emerald">Datos: 21&#8239;915 días</Pill>
              <Pill tone="orange">Trampa: la Luna</Pill>
            </div>

            <div className="mt-4">
              <TagPillsInline tags={meta.tags} />
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <Stat label="Lo que sigue legible" value="Signos y aspectos de los planetas" />
              <Stat label="Lo que desaparece" value="Ascendente, ángulos, casas" />
              <Stat label="Dónde está la hora" value="En el certificado literal" />
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
            Sí, se puede leer una <strong>carta astral sin hora de
            nacimiento</strong>, pero a medias. La fecha basta para situar el
            Sol, Mercurio, Venus, Marte y los planetas lentos en sus signos, y
            para leer sus aspectos. Sin la hora no hay Ascendente, ni Medio
            Cielo, ni casas, y la Luna cambia de signo el 44&nbsp;% de los
            días. Antes de renunciar, pide tu certificado literal de
            nacimiento: en España, la inscripción hace fe de la hora.
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
              La hora figura en el <strong>certificado literal</strong> en
              España, en la <strong lang="fr">copie intégrale</strong> en
              Francia y en la <strong>copia del acta</strong> en Bélgica. Es
              gratis.
            </li>
            <li>
              Sin hora se leen los <strong>planetas en signo y sus
              aspectos</strong>. No el Ascendente, no las casas, no el planeta
              dominante.
            </li>
            <li>
              <strong>La prueba de las dos medianoches</strong>: calcula la
              carta para las 00:00 y las 23:59. Lee solo lo que coincide en
              ambas.
            </li>
            <li>
              <strong>Un día de cada dos</strong> (el 50,9&nbsp;% entre 1950 y
              2009), la Luna o un planeta personal cambia de signo.
            </li>
            <li>
              La carta de mediodía y la carta solar son{" "}
              <strong>convenciones</strong>: útiles, siempre que sepas qué
              deciden por ti.
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

        {/* ── 1. RECUPERAR LA HORA ─────────────────────────── */}
        <section className="space-y-5" aria-labelledby="recuperar-la-hora">
          <H2 id="recuperar-la-hora">Recuperar la hora antes de renunciar a ella</H2>

          <p className="text-lg leading-relaxed text-text/85">
            Casi siempre, la hora no se ha perdido: está escrita en tu
            inscripción de nacimiento. En España, la Ley del Registro Civil
            establece que la inscripción hace fe de la fecha, la hora y el
            lugar del nacimiento; Francia lo exige desde 1803 y Bélgica
            también la anota. Basta con pedir el documento adecuado, el
            certificado literal y no el extracto. Es gratuito y se puede hacer
            en línea.
          </p>

          <p className="leading-relaxed text-text/85">
            El modelo oficial de certificación literal del Ministerio de
            Justicia incluye un campo «Hora de nacimiento». El extracto resume
            la inscripción; el literal la reproduce entera.
          </p>

          <p className="mb-2 font-semibold text-white/90">
            El documento que hay que pedir, país por país
          </p>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <div
              className="overflow-x-auto"
              role="region"
              aria-label="Dónde conseguir la hora de nacimiento en España, Francia y Bélgica"
              tabIndex={0}
            >
              <table className="min-w-full border-collapse text-sm">
                <caption className="sr-only">
                  Para cada país, el documento del registro civil que recoge la
                  hora de nacimiento, dónde pedirlo y qué conviene saber.
                </caption>
                <thead className="bg-white/[0.04]">
                  <tr className="text-left">
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      País
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Documento
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Dónde pedirlo
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Conviene saber
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paises.map((r, i) => (
                    <tr
                      key={r.pais}
                      className={`border-t border-white/10 ${i % 2 === 1 ? "bg-white/[0.02]" : ""}`}
                    >
                      <th
                        scope="row"
                        className="px-5 py-4 text-left align-top font-medium text-white"
                      >
                        {r.pais}
                      </th>
                      <td className="px-5 py-4 align-top text-text/85" lang={r.lang}>
                        {r.doc}
                      </td>
                      <td className="px-5 py-4 align-top text-text/85">{r.donde}</td>
                      <td className="px-5 py-4 align-top text-text/85">{r.nota}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <figure className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <Image
              src={RegistreImage}
              alt="Antiguo libro de registro civil abierto sobre un escritorio de madera, con una lupa sobre una columna manuscrita, junto a una pluma estilográfica y un reloj de bolsillo"
              sizes="(max-width: 768px) 100vw, 800px"
              className="h-auto w-full"
            />
            <figcaption className="px-5 py-4 text-center text-xs text-text/50">
              La hora suele dormir en un registro: basta con pedir el
              documento adecuado para recuperarla.
            </figcaption>
          </figure>

          <H3>Si el certificado no basta</H3>
          <p className="leading-relaxed text-text/85">
            Ocurre sobre todo con nacimientos en el extranjero, cuando el acta
            local no recogía la hora: las normas cambian de un país a otro.
            Quedan tres pistas, de la más segura a la más frágil.
          </p>
          <ul className="list-disc space-y-2 pl-5 leading-relaxed text-text/85">
            <li>
              <strong>La historia clínica del hospital.</strong> Los centros no
              la guardan para siempre: la ley estatal de autonomía del paciente
              exige conservarla al menos cinco años desde el alta, y algunas
              comunidades autónomas fijan plazos más largos. Pasado ese tiempo,
              nada garantiza que exista, pero preguntar solo cuesta una carta.
            </li>
            <li>
              <strong>Los papeles familiares.</strong> Recordatorios de
              nacimiento, cartas, el álbum del bebé: a veces una hora, a menudo
              una aproximación.
            </li>
            <li>
              <strong>La memoria de tus padres.</strong> «Por la mañana»,
              «justo después de comer»: no es una hora, sino una franja.
              Apúntala, te servirá más adelante.
            </li>
          </ul>

          <H3>Comprueba la hora que tienes</H3>
          <p className="leading-relaxed text-text/85">
            La hora del certificado es la hora legal de la época, la del reloj
            del paritorio. Introdúcela tal cual, con el lugar de nacimiento: un
            buen programa aplica él solo el historial del horario de verano. No
            la conviertas a mano, es la primera fuente de error. España tiene
            sus particularidades: la península usa la hora de Europa Central
            desde 1940, la hora se cambia cada año desde 1974 y Canarias lleva
            una hora menos. Desconfía de las horas redondas, las 10:00 o las
            15:30: pueden estar redondeadas.
          </p>
        </section>

        <Divider />

        {/* ── 2. QUÉ AGUANTA Y QUÉ SE CAE ──────────────────── */}
        <section className="space-y-5" aria-labelledby="que-aguanta">
          <H2 id="que-aguanta">Lo que una carta sin hora aún dice, y lo que ya no</H2>

          <p className="text-lg leading-relaxed text-text/85">
            Sin hora, desaparece todo lo que depende de la rotación de la
            Tierra: el Ascendente, el Medio Cielo y las doce casas dan una
            vuelta completa en veinticuatro horas. Lo que depende del
            movimiento de los planetas sigue siendo legible, porque avanzan
            despacio: el Sol, un grado al día; Plutón, unas centésimas.
          </p>

          <p className="leading-relaxed text-text/85">
            En los términos de la página{" "}
            <A href="/theme-astral">carta astral</A>: sin hora conservas los
            actores (los planetas), sus estilos (los signos) y sus diálogos
            (los <A href="/aspects">aspectos</A>). Pierdes los escenarios
            donde actúan: las <A href="/maisons">casas</A>.
          </p>

          <aside className="rounded-2xl border border-amber-400/25 bg-amber-500/[0.06] px-6 py-5">
            <p className="text-lg font-semibold leading-relaxed text-amber-100/90 sm:text-xl">
              Sin hora se lee quién eres, no dónde se juega.
            </p>
          </aside>

          <p className="mb-2 font-semibold text-white/90">
            Elemento por elemento, lo que sigue siendo fiable sin hora de
            nacimiento
          </p>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <div
              className="overflow-x-auto"
              role="region"
              aria-label="Fiabilidad de cada elemento de la carta sin hora de nacimiento"
              tabIndex={0}
            >
              <table className="min-w-full border-collapse text-sm">
                <caption className="sr-only">
                  Para cada elemento de la carta astral, su fiabilidad cuando
                  se desconoce la hora de nacimiento, y el motivo.
                </caption>
                <thead className="bg-white/[0.04]">
                  <tr className="text-left">
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Elemento
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Sin hora
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Por qué
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {aguanta.map((r, i) => (
                    <tr
                      key={r.el}
                      className={`border-t border-white/10 ${i % 2 === 1 ? "bg-white/[0.02]" : ""}`}
                    >
                      <th
                        scope="row"
                        className="px-5 py-4 text-left align-top font-medium text-white"
                      >
                        {r.el}
                      </th>
                      <td
                        className={`px-5 py-4 align-top font-semibold ${r.ok ? "text-emerald-300" : "text-amber-300"}`}
                      >
                        <span aria-hidden="true">{r.ok ? "✓ " : "✗ "}</span>
                        {r.veredicto}
                      </td>
                      <td className="px-5 py-4 align-top text-text/85">{r.porque}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="leading-relaxed text-text/85">
            La astrología no es una ciencia experimental: razón de más para no
            inventarse los datos que faltan. Una carta sin hora honesta dice
            menos cosas, pero no dice nada falso.
          </p>
        </section>

        <Divider />

        {/* ── 3. LA PRUEBA DE LAS DOS MEDIANOCHES ──────────── */}
        <section className="space-y-5" aria-labelledby="dos-medianoches">
          <H2 id="dos-medianoches">La prueba de las dos medianoches</H2>

          <p className="text-lg leading-relaxed text-text/85">
            Calcula tu carta dos veces para tu lugar de nacimiento: para las
            00:00 y para las 23:59 del día en que naciste. Todo lo que coincide
            en ambas cartas es legible. Todo lo que cambia, un signo o un
            aspecto, queda abierto. La prueba lleva dos minutos.
          </p>

          <figure className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <Image
              src={BandeauImage}
              alt="Reloj de bolsillo con la esfera vacía y sin agujas, a la derecha de un cielo añil cruzado por un arco de luz dorada"
              sizes="(max-width: 768px) 100vw, 800px"
              className="h-auto w-full"
            />
            <figcaption className="px-5 py-4 text-center text-xs text-text/50">
              Sin hora, la esfera queda en blanco: la prueba solo lee lo que el
              cielo mantiene igual del primer al último instante del día.
            </figcaption>
          </figure>

          <ol className="list-decimal space-y-2 pl-5 leading-relaxed text-text/85">
            <li>
              Introduce tu fecha y tu lugar de nacimiento con la hora 00:00.
              Apunta el signo de cada planeta.
            </li>
            <li>Repite con las 23:59.</li>
            <li>
              Compara línea por línea. Mismo signo: dato seguro. Signo
              distinto: guarda las dos hipótesis.
            </li>
            <li>
              No mires el Ascendente, el Medio Cielo ni las casas de ninguna de
              las dos cartas: por fuerza son distintos, y ninguno es el tuyo.
            </li>
          </ol>

          <p className="leading-relaxed text-text/85">
            Si tu familia te ha dado una franja, «por la mañana», por ejemplo,
            la prueba se afina: calcula el principio y el final de la franja,
            las 06:00 y las 12:00, en lugar de las dos medianoches. Cuanto más
            estrecha sea la franja, más cosas quedan por leer.
          </p>

          <p className="leading-relaxed text-text/85">
            Para medir cuánto sirve la prueba, la apliqué a sesenta años de
            calendario: cada día del 1 de enero de 1950 al 31 de diciembre de
            2009, con la biblioteca de efemérides Swiss Ephemeris. Las cifras
            son las mismas contando los días en hora de Madrid, de París o de
            Londres.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            <Stat label="Días estudiados" value={"21 915 (1950-2009)"} />
            <Stat label="La Luna cambia de signo" value={"43,9 % de los días"} />
            <Stat label="Luna, Sol, Mercurio, Venus o Marte" value={"50,9 % de los días"} />
          </div>

          <p className="leading-relaxed text-text/85">
            Dicho de otro modo: una de cada dos personas que no saben su hora
            no puede estar segura del signo de su Luna o de un planeta
            personal. Sin contar la Luna, el riesgo baja al 12,3&nbsp;% de los
            días. La prueba te dice en qué mitad estás.
          </p>
        </section>

        <Divider />

        {/* ── 4. EL EJEMPLO ────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="ejemplo">
          <H2 id="ejemplo">Un ejemplo sorteado: el 25 de febrero de 1966</H2>

          <p className="text-lg leading-relaxed text-text/85">
            Para mostrar la prueba con un caso que no elegí yo, sorteé una
            fecha entre 1950 y 2005 y una ciudad francesa: el 25 de febrero de
            1966, en Clermont-Ferrand, hora desconocida. No es la carta de
            nadie en concreto: es la de todos los niños nacidos ese día en la
            zona. El azar hizo bien su trabajo: es un caso difícil.
          </p>

          <p className="mb-2 font-semibold text-white/90">
            La carta del 25 de febrero de 1966 a las 00:00 y a las 23:59
          </p>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <div
              className="overflow-x-auto"
              role="region"
              aria-label="Posiciones del 25 de febrero de 1966 a medianoche y a las 23:59"
              tabIndex={0}
            >
              <table className="min-w-full border-collapse text-sm">
                <caption className="sr-only">
                  Posición de cada planeta al principio y al final del 25 de
                  febrero de 1966, hora de París, y lo que sigue siendo legible
                  sin hora.
                </caption>
                <thead className="bg-white/[0.04]">
                  <tr className="text-left">
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Planeta
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      00:00
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      23:59
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Sin hora
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {posiciones.map((r, i) => (
                    <tr
                      key={r.p}
                      className={`border-t border-white/10 ${i % 2 === 1 ? "bg-white/[0.02]" : ""}`}
                    >
                      <th
                        scope="row"
                        className="whitespace-nowrap px-5 py-4 text-left align-top font-medium text-white"
                      >
                        <span aria-hidden="true" className="mr-2 text-violet-300/80">
                          {r.g}
                        </span>
                        {r.p}
                      </th>
                      <td className="whitespace-nowrap px-5 py-4 align-top text-text/85">{r.a}</td>
                      <td className="whitespace-nowrap px-5 py-4 align-top text-text/85">{r.b}</td>
                      <td
                        className={`px-5 py-4 align-top font-semibold ${r.ok ? "text-emerald-300" : "text-amber-300"}`}
                      >
                        {r.v}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-xs leading-relaxed text-text/55">
            Posiciones calculadas con Swiss Ephemeris, zodiaco tropical, hora
            legal francesa de 1966 (UTC+1, sin horario de verano). Ascendente
            en casas Placidus para Clermont-Ferrand. ℞: retrógrado.
          </p>

          <p className="leading-relaxed text-text/85">
            Fíjate en la última fila: el Ascendente está en Escorpio en las dos
            medianoches, después de haber dado la vuelta completa al zodiaco
            entretanto. Por eso la prueba lo descarta de entrada, aunque los
            dos extremos parezcan coincidir.
          </p>

          <p className="leading-relaxed text-text/85">
            Ocho de los diez astros no cambian de signo. Dos se caen, y no
            cualquiera: la Luna pasa de Aries a Tauro a las 8:53, y Venus, que
            acababa de retroceder a Capricornio, vuelve a Acuario a las 11:54.
            El día se parte en tres cartas posibles.
          </p>

          <figure className="rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-6">
            <div
              className="overflow-x-auto"
              role="region"
              aria-label="Cronología del 25 de febrero de 1966"
              tabIndex={0}
            >
              <svg
                viewBox="0 0 720 222"
                className="h-auto w-full min-w-[640px] text-violet-100"
                role="img"
                aria-label="Cronología hora a hora del 25 de febrero de 1966. La Luna está en Aries hasta las 8:53 y después en Tauro. Venus está en Capricornio hasta las 11:54 y después en Acuario. El Ascendente recorre los doce signos durante el día. La línea del mediodía cae seis minutos después del cambio de signo de Venus."
              >
                <g fontSize="13" dominantBaseline="central">
                  {/* Etiquetas de las filas */}
                  <g fill="currentColor" className="fill-white/70" fontWeight="600">
                    <text x="8" y="43">Luna</text>
                    <text x="8" y="97">Venus</text>
                    <text x="8" y="163">Ascendente</text>
                  </g>

                  {/* Luna */}
                  <rect x="96" y="28" width="225" height="30" rx="4" className="fill-amber-400/25" />
                  <rect x="321" y="28" width="383" height="30" rx="4" className="fill-emerald-400/20" />
                  <g fill="currentColor" className="fill-white/85" textAnchor="middle">
                    <text x="208.5" y="43">Aries</text>
                    <text x="512.5" y="43">Tauro</text>
                  </g>
                  <text x="321" y="70" textAnchor="middle" fontSize="11" fill="currentColor" className="fill-amber-200/80">
                    8:53
                  </text>

                  {/* Venus */}
                  <rect x="96" y="82" width="301.5" height="30" rx="4" className="fill-sky-400/20" />
                  <rect x="397.5" y="82" width="306.5" height="30" rx="4" className="fill-violet-400/30" />
                  <g fill="currentColor" className="fill-white/85" textAnchor="middle">
                    <text x="246.8" y="97">Capricornio</text>
                    <text x="550.8" y="97">Acuario</text>
                  </g>
                  <text x="393" y="124" textAnchor="end" fontSize="11" fill="currentColor" className="fill-amber-200/80">
                    11:54
                  </text>

                  {/* Ascendente: desfilan los doce signos */}
                  <g>
                    <rect x="96.0" y="148" width="46.4" height="30" rx="3" className="fill-violet-400/25" />
                    <rect x="142.4" y="148" width="61.7" height="30" rx="3" className="fill-violet-400/10" />
                    <rect x="204.1" y="148" width="46.9" height="30" rx="3" className="fill-violet-400/25" />
                    <rect x="251.0" y="148" width="33.3" height="30" rx="3" className="fill-violet-400/10" />
                    <rect x="284.3" y="148" width="26.6" height="30" rx="3" className="fill-violet-400/25" />
                    <rect x="310.9" y="148" width="27.0" height="30" rx="3" className="fill-violet-400/10" />
                    <rect x="337.9" y="148" width="33.4" height="30" rx="3" className="fill-violet-400/25" />
                    <rect x="371.3" y="148" width="46.9" height="30" rx="3" className="fill-violet-400/10" />
                    <rect x="418.2" y="148" width="61.2" height="30" rx="3" className="fill-violet-400/25" />
                    <rect x="479.4" y="148" width="67.5" height="30" rx="3" className="fill-violet-400/10" />
                    <rect x="546.9" y="148" width="67.2" height="30" rx="3" className="fill-violet-400/25" />
                    <rect x="614.1" y="148" width="67.5" height="30" rx="3" className="fill-violet-400/10" />
                    <rect x="681.6" y="148" width="22.4" height="30" rx="3" className="fill-violet-400/25" />
                  </g>
                  <g fill="currentColor" className="fill-white/75" textAnchor="middle" fontSize="11">
                    <text x="119.2" y="163">Esc</text>
                    <text x="173.2" y="163">Sag</text>
                    <text x="227.6" y="163">Cap</text>
                    <text x="267.6" y="163">Acu</text>
                    <text x="297.6" y="163">Pis</text>
                    <text x="324.4" y="163">Ari</text>
                    <text x="354.6" y="163">Tau</text>
                    <text x="385" y="163">Gém</text>
                    <text x="448.8" y="163">Cán</text>
                    <text x="513.1" y="163">Leo</text>
                    <text x="580.5" y="163">Vir</text>
                    <text x="647.9" y="163">Lib</text>
                  </g>

                  {/* Línea del mediodía */}
                  <line x1="400" y1="18" x2="400" y2="186" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className="stroke-amber-200/80" />
                  <text x="406" y="12" fontSize="11" fill="currentColor" className="fill-amber-200/90">
                    mediodía
                  </text>

                  {/* Eje horario */}
                  <line x1="96" y1="192" x2="704" y2="192" stroke="currentColor" strokeOpacity="0.3" />
                  <g fill="currentColor" className="fill-white/55" textAnchor="middle" fontSize="11">
                    <text x="96" y="208">0:00</text>
                    <text x="172" y="208">3:00</text>
                    <text x="248" y="208">6:00</text>
                    <text x="324" y="208">9:00</text>
                    <text x="400" y="208">12:00</text>
                    <text x="476" y="208">15:00</text>
                    <text x="552" y="208">18:00</text>
                    <text x="628" y="208">21:00</text>
                    <text x="704" y="208">24:00</text>
                  </g>
                </g>
              </svg>
            </div>
            <figcaption className="mt-4 text-center text-xs leading-relaxed text-text/50">
              El 25 de febrero de 1966 en Clermont-Ferrand. Tres combinaciones
              posibles: Luna en Aries y Venus en Capricornio antes de las 8:53
              (el 37&nbsp;% del día), Luna en Tauro y Venus en Capricornio
              hasta las 11:54 (el 12,6&nbsp;%) y Luna en Tauro y Venus en
              Acuario después (el 50,4&nbsp;%). El Ascendente, por su parte,
              pasa por los doce signos.
            </figcaption>
          </figure>

          <div className="grid gap-4 md:grid-cols-2">
            <Box title="Lo que diría" tone="emerald">
              <p>
                <strong>Cuatro astros en Piscis</strong>: el Sol, Mercurio,
                Marte y Saturno. Un mismo signo tiñe la identidad, el
                pensamiento, la acción y el sentido del deber. Alguien que
                percibe antes de analizar y que actúa mejor llevado por una
                causa que por un plan.
              </p>
              <p>
                <strong>Marte conjunto a Saturno</strong>, a menos de tres
                grados: una energía que se contiene, se endurece en el esfuerzo
                y puede darle muchas vueltas a algo antes de pasar a la acción.
                Mercurio se suma, a uno o dos grados de Marte: una palabra
                medida, a veces cortante cuando sale.
              </p>
              <p>
                <strong>Júpiter en Géminis en cuadratura con todo el
                grupo</strong>: la tentación de dispersarse, demasiadas pistas
                abiertas a la vez. <strong>Neptuno en Escorpio en
                trígono</strong> con Mercurio y Marte: la imaginación alimenta
                la acción en lugar de diluirla.
              </p>
            </Box>

            <Box title="Lo que me negaría a decir" tone="amber">
              <p>
                <strong>El Ascendente.</strong> En Clermont-Ferrand, ese día,
                pasa 63 minutos en Piscis y 163 en Escorpio: ningún signo supera
                el 11,3&nbsp;% de probabilidad.
              </p>
              <p>
                <strong>El escenario.</strong> ¿Hablan estos cuatro Piscis del
                trabajo, de la pareja, de la familia? Eso lo dicen las casas, y
                faltan.
              </p>
              <p>
                <strong>El planeta dominante.</strong> Marte y Saturno sobre un
                ángulo o escondidos en la casa XII no son la misma carta. La{" "}
                <A href="/blog/planete-dominante-methode-calcul">
                  tabla de los siete pesos
                </A>{" "}
                no se puede aplicar sin hora.
              </p>
              <p>
                <strong>La Luna y Venus.</strong> Una Luna en Aries descarga
                rápido; una Luna en Tauro encaja despacio. Una{" "}
                <A href="/blog/venus-en-signes-style-amoureux">Venus</A> en
                Capricornio ama comprometiéndose; una Venus en Acuario, sin
                renunciar a su libertad. Aquí, elegir sería adivinar.
              </p>
            </Box>
          </div>

          <Callout tone="warn" title="La trampa de los planetas lentos">
            <p>
              Esta carta muestra también a Urano y Plutón conjuntos en Virgo,
              con Saturno enfrente. Llamativo, pero nada personal: Urano y
              Plutón están a menos de un grado el uno del otro para todos los
              niños nacidos entre finales de enero y mediados de agosto de
              1966, y Saturno se les opone, a menos de tres grados, de
              principios de febrero a mediados de marzo. Neptuno está en
              Escorpio de 1957 a 1970.
            </p>
            <p>
              Cuanto más se apoya una lectura en los planetas lentos, menos te
              describe a ti. Sin hora, es la trampa principal, porque casi no
              queda otra cosa: lo que distingue un día de otro son el Sol, la
              Luna, Mercurio, Venus y Marte.
            </p>
          </Callout>
        </section>

        <Divider />

        {/* ── 5. LA LUNA ───────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="luna">
          <H2 id="luna">La Luna, el caso que se juega a cara o cruz</H2>

          <p className="text-lg leading-relaxed text-text/85">
            La Luna avanza de 12 a 15 grados al día. Si se queda en el mismo
            signo desde el primer hasta el último instante del día en que
            naciste, lo que ocurre el 56&nbsp;% de los días, tu signo lunar es
            seguro. Solo baila su grado, de seis a ocho grados a cada lado de
            su posición del mediodía.
          </p>

          <p className="leading-relaxed text-text/85">
            En ese caso puedes leer tu{" "}
            <A href="/blog/lune-en-signes-emotions-besoins">Luna en signo</A>{" "}
            sin reservas. Sus aspectos piden más cuidado: quédate solo con los
            que existen en las dos medianoches. Una cuadratura con un orbe de
            3° al mediodía puede perfectamente no existir por la mañana.
          </p>

          <p className="leading-relaxed text-text/85">
            Si cambia de signo, tienes dos Lunas posibles. Lee los dos
            retratos y hazte la pregunta del artículo sobre la Luna: ¿qué
            haces, en concreto, en los diez minutos que siguen a un disgusto?
            La respuesta suele orientar. Aun así, guarda cierta reserva: uno
            se reconoce fácilmente un poco en todas partes, y un indicio no es
            una prueba. Si conoces una franja horaria, la prueba de las dos
            medianoches aplicada a esa franja a veces zanja la cuestión por
            ti.
          </p>
        </section>

        <Divider />

        {/* ── 6. LAS CONVENCIONES ──────────────────────────── */}
        <section className="space-y-5" aria-labelledby="convenciones">
          <H2 id="convenciones">
            Carta de mediodía, carta solar: dos convenciones y lo que deciden
            por ti
          </H2>

          <p className="text-lg leading-relaxed text-text/85">
            Sin hora, dominan dos convenciones. La carta de mediodía sitúa los
            planetas en su posición media del día: limita el error sobre la
            Luna. La carta solar coloca el Sol en el Ascendente y deduce de ahí
            unas casas simbólicas. Las dos son legítimas, siempre que no se
            lean nunca como una carta de verdad.
          </p>

          <H3>La carta de mediodía</H3>
          <p className="leading-relaxed text-text/85">
            Es la convención más extendida, y es razonable para los grados. Su
            defecto está en otra parte: zanja las preguntas abiertas sin
            decírtelo. En el ejemplo, la carta de mediodía muestra la Luna a
            1°&nbsp;35′ de Tauro y Venus a 0°&nbsp;00′ de Acuario, signo en el
            que había entrado seis minutos antes. También muestra un
            Ascendente a 19° de Géminis, que no vale nada.
          </p>

          <aside className="rounded-2xl border border-amber-400/25 bg-amber-500/[0.06] px-6 py-5">
            <p className="text-lg font-semibold leading-relaxed text-amber-100/90 sm:text-xl">
              La carta de mediodía parece responder. En realidad, lo ha echado a
              cara o cruz.
            </p>
          </aside>

          <p className="leading-relaxed text-text/85">
            La buena práctica cabe en una frase: los grados del mediodía, los
            signos de la prueba de las dos medianoches y una raya mental sobre
            el Ascendente y las casas.
          </p>

          <H3>La carta solar</H3>
          <p className="leading-relaxed text-text/85">
            Se toma el grado del Sol como Ascendente ficticio y se cuentan doce
            casas de 30° a partir de él. En el ejemplo, el Sol a 6° de Piscis
            abre la casa solar I: allí caen el Sol, Mercurio, Marte y Saturno;
            Júpiter, en la IV; Urano y Plutón, en la VII; Neptuno, en la IX, y
            Venus, en la XI en las dos hipótesis. Hay quien prefiere calcular
            la carta para la hora de la salida del sol, lo que viene a ser casi
            lo mismo.
          </p>
          <p className="leading-relaxed text-text/85">
            Es, más afinada, la plantilla de los horóscopos de prensa, que
            toman tu signo solar como casa I. Sirve para seguir los tránsitos
            de forma simbólica. No describe tu vida, porque todas las personas
            nacidas con pocos días de diferencia tienen las mismas casas
            solares. Es una de las razones por las que{" "}
            <A href="/blog/pourquoi-votre-horoscope-ne-vous-ressemble-pas">
              tu horóscopo no se parece a ti
            </A>
            .
          </p>
        </section>

        <Divider />

        {/* ── 7. LA RECTIFICACIÓN ──────────────────────────── */}
        <section className="space-y-5" aria-labelledby="rectificacion">
          <H2 id="rectificacion">La rectificación: recuperar la hora a partir de la vida</H2>

          <p className="leading-relaxed text-text/85">
            La rectificación reconstruye la hora de nacimiento a partir de la
            biografía. Se parte de una franja, aunque sea amplia, y de una
            lista de acontecimientos fechados al día: boda, nacimiento de un
            hijo, muerte del padre o de la madre, mudanza, accidente, cambio de
            profesión. Para cada hora candidata se calculan los ángulos de la
            carta, el Ascendente y el Medio Cielo, únicos puntos que se mueven
            con la hora, y se comprueba si los acontecimientos coinciden con{" "}
            <A href="/transits">tránsitos</A>, progresiones o direcciones
            sobre esos ángulos. La franja se estrecha eliminando las horas que
            explican menos acontecimientos, hasta quedarse con la que explica
            más con menos excepciones. El resultado es una hora de trabajo, que
            hay que contrastar después con nuevos acontecimientos, no un dato
            del Registro Civil.
          </p>
        </section>

        <Divider />

        {/* ── 8. LA LISTA ──────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="lista">
          <H2 id="lista">La lista de comprobación antes de leer una carta sin hora</H2>

          <p className="leading-relaxed text-text/85">
            Siete pasos, por orden. Los dos primeros suelen bastar para no
            necesitar los otros cinco.
          </p>

          <div className="relative overflow-hidden rounded-2xl border border-emerald-400/25 bg-gradient-to-br from-emerald-500/[0.10] via-sky-500/[0.05] to-transparent p-6">
            <ol className="relative list-decimal space-y-3 pl-5 leading-relaxed text-text/90">
              <li>
                <strong>Pide el certificado.</strong> Certificado literal en
                España, <span lang="fr">copie intégrale</span> en Francia,
                copia del acta en Bélgica.
              </li>
              <li>
                <strong>Introduce la hora tal cual</strong>, con el lugar. El
                programa se ocupa del horario de verano; tú no conviertes nada.
              </li>
              <li>
                <strong>¿No hay hora?</strong> Apunta la franja que recuerde tu
                familia, aunque sea vaga.
              </li>
              <li>
                <strong>Haz la prueba de las dos medianoches</strong>, o la de
                la franja.
              </li>
              <li>
                <strong>Lee lo que aguanta</strong>: el Sol, los planetas en
                signo, los aspectos presentes en los dos extremos.
              </li>
              <li>
                <strong>Trata la Luna aparte</strong>: un signo si la prueba lo
                confirma; dos hipótesis si no.
              </li>
              <li>
                <strong>Tacha el resto</strong>: Ascendente, Medio Cielo, casas,
                planeta dominante, tránsitos a los ángulos.
              </li>
            </ol>
          </div>

          <p className="leading-relaxed text-text/85">
            Mándale esta lista a ese amigo que «no sabe su hora»: casi siempre,
            el paso 1 lo resuelve en pocos días.
          </p>
        </section>

        {/* ── 9. FAQ ───────────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="faq">
          <H2 id="faq">Preguntas frecuentes sobre la carta astral sin hora de nacimiento</H2>

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
              <Ext href="https://www.boe.es/buscar/act.php?id=BOE-A-2011-12628">
                Ley 20/2011 del Registro Civil
              </Ext>
              , artículo 44 (BOE): la inscripción hace fe de la fecha, la hora
              y el lugar del nacimiento.
            </li>
            <li>
              <Ext href="https://www.mjusticia.gob.es/es/Ciudadano/justicia-accesible/Documents/Certificaci%C3%B3n%20literal%20de%20inscrip%20de%20nacimiento.pdf">
                Modelo de certificación literal de inscripción de nacimiento
              </Ext>{" "}
              (Ministerio de Justicia), con el campo «Hora de nacimiento».
            </li>
            <li>
              Ley 41/2002, básica reguladora de la autonomía del paciente,
              artículo 17: conservación de la historia clínica.
            </li>
            <li>
              <Ext href="https://maldita.es/clima/20250330/huso-horario-espana-hora-polonia-portugal">
                La historia del huso horario de España
              </Ext>{" "}
              (Maldita.es): la orden de 1940 y los cambios de hora desde 1974.
            </li>
            <li>
              <Ext href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043896203">
                <span lang="fr">Code civil</span>, artículo 57
              </Ext>{" "}
              (Légifrance) y{" "}
              <Ext href="https://www.rijksregister.fgov.be/sites/default/files/documents/fr/baec/FAQ_BAEC_FR_20200701.pdf">
                preguntas frecuentes de la BAEC
              </Ext>{" "}
              (Registro Nacional de Bélgica).
            </li>
            <li>
              Posiciones y estadísticas: cálculos del autor con Swiss Ephemeris
              (Astrodienst), cada día del 1 de enero de 1950 al 31 de diciembre
              de 2009.
            </li>
          </ul>
        </section>

        {/* ── CTA / ENLAZADO INTERNO ───────────────────────── */}
        <section className="rounded-2xl border border-white/10 bg-black/20 p-6">
          <p className="text-sm text-text/60">Seguir leyendo</p>
          <div className="mt-3 space-y-3 leading-relaxed text-text/85">
            <p>
              Una vez recuperada la hora, se abre toda la carta: la página{" "}
              <A href="/theme-astral">carta astral</A> explica lo que contiene,
              y{" "}
              <A href="/blog/comprendre-signe-astrologique-ascendant-12-exemples">
                Sol y Ascendente en doce ejemplos
              </A>{" "}
              muestra lo que cambia el Ascendente en la lectura.
            </p>
            <p>
              Si te inicias, empieza por{" "}
              <A href="/blog/qu-est-ce-qu-un-theme-astral">
                qué es una carta natal
              </A>{" "}
              y sigue con las <A href="/maisons">doce casas</A>, la parte de la
              carta a la que da acceso la hora de nacimiento. El{" "}
              <A href="/dictionnaire-astrologique">diccionario astrológico</A>{" "}
              recoge cada término usado aquí.
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
