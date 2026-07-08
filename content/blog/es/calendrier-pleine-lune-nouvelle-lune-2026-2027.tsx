import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { LUNATIONS_2026_2027, type Lunation } from "../data/ephemerides-2026-2027";

export const meta = {
  slug: "calendrier-pleine-lune-nouvelle-lune-2026-2027",
  title: "Calendario lunar 2026-2027: lunas llenas y lunas nuevas",
  description:
    "Todas las lunas llenas y nuevas de julio 2026 a diciembre 2027: fechas, horas (París), signos, eclipses — y cómo usar cada lunación.",
  date: "2026-07-07",
  tags: ["Lune", "pleine lune", "nouvelle lune", "calendrier", "cycles", "éclipses", "débutant"],
  readingLevel: "débutant" as const,
  cover: "/images/blog/lune-cycles.webp",
};

const SIGNS = ["Aries", "Tauro", "Géminis", "Cáncer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario", "Capricornio", "Acuario", "Piscis"];

const ECLIPSE_LABEL: Record<NonNullable<Lunation["eclipse"]>, string> = {
  "solar-total": "Eclipse solar total",
  "solar-annular": "Eclipse solar anular",
  "lunar-partial": "Eclipse lunar parcial",
  "lunar-penumbral": "Eclipse lunar penumbral",
};

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-6 mt-12 flex items-center font-serif text-3xl font-light text-white md:text-4xl">
      <span className="mr-4 block h-px w-8 bg-gradient-to-r from-violet-500/50 to-transparent" aria-hidden="true" />
      {children}
    </h2>
  );
}

function P({ children }: { children: ReactNode }) {
  return <p className="mb-4 leading-relaxed text-text/85">{children}</p>;
}

const fmt = (d: string) =>
  new Date(`${d}T12:00:00Z`).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" });

function LunationTable({ year }: { year: "2026" | "2027" }) {
  const rows = LUNATIONS_2026_2027.filter((l) => l.date.startsWith(year));
  return (
    <div className="my-6 overflow-x-auto rounded-2xl border border-white/10">
      <table className="w-full min-w-[560px] text-left text-sm">
        <thead className="bg-white/5 text-text/70">
          <tr>
            <th className="p-3">Fecha (hora de París)</th>
            <th className="p-3">Lunación</th>
            <th className="p-3">Signo</th>
            <th className="p-3">Particularidad</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((l) => (
            <tr key={`${l.date}${l.type}`} className="border-t border-white/10 text-text/85">
              <td className="p-3">
                <strong>{fmt(l.date)}</strong> a las {l.time}
              </td>
              <td className="p-3">{l.type === "NL" ? "🌑 Luna nueva" : "🌕 Luna llena"}</td>
              <td className="p-3">
                {SIGNS[l.signIndex]} {l.degree.toFixed(0)}°
              </td>
              <td className="p-3">{l.eclipse ? <strong className="text-amber-300">{ECLIPSE_LABEL[l.eclipse]}</strong> : "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function CalendarioLunar20262027Post() {
  return (
    <article>
      <P>
        Aquí tienes el <strong>calendario completo de lunaciones</strong> de julio de 2026 a
        diciembre de 2027: cada luna nueva y cada luna llena, con la hora exacta (hora de París),
        el signo ocupado por la <Link href="/planetes/lune">Luna</Link> y los eclipses. Las
        posiciones están calculadas con efemérides astronómicas — no copiadas de un almanaque
        aproximado.
      </P>

      <H2>Cómo usar este calendario</H2>
      <P>
        La lógica del ciclo es simple, y la detallamos en nuestro curso sobre{" "}
        <Link href="/blog/luna-llena-luna-nueva-ciclos-astrologia">los ciclos lunares</Link>: la{" "}
        <strong>luna nueva</strong> (conjunción Sol-Luna) abre el ciclo — el momento de las
        intenciones y los comienzos discretos; la <strong>luna llena</strong> (oposición Sol-Luna)
        lo culmina — momento de visibilidad, balance y soltar. El signo de la lunación colorea el
        ámbito: una luna nueva en Virgo invita a reorganizar lo cotidiano; una luna llena en Aries
        hace estallar lo que se estancaba. Para un uso personal, localiza la{" "}
        <Link href="/maisons">casa</Link> de tu <Link href="/theme-astral">carta natal</Link>{" "}
        donde cae la lunación: ahí es donde el ciclo se juega concretamente para ti.
      </P>

      <H2>Lunaciones de julio a diciembre de 2026</H2>
      <LunationTable year="2026" />
      <P>
        La gran cita del verano: el <strong>eclipse solar total del 12 de agosto de 2026</strong>,
        en la luna nueva de Leo — visible especialmente desde Islandia y España. Los eclipses son
        lunaciones amplificadas: sus efectos simbólicos se despliegan durante varios meses, sobre
        todo si tocan un punto sensible de tu carta. Le sigue un eclipse lunar parcial el 28 de
        agosto, en la luna llena de Piscis.
      </P>

      <H2>Lunaciones de 2027</H2>
      <LunationTable year="2027" />
      <P>
        2027 es un año de eclipses notables: el anular del <strong>6 de febrero</strong> (luna
        nueva en Acuario), y sobre todo el <strong>eclipse solar total del 2 de agosto de 2027</strong>{" "}
        — uno de los más largos del siglo, visible del sur de España al norte de África — en la
        luna nueva de Leo, en el mismo lugar del zodiaco que en agosto de 2026: un verdadero
        «capítulo 2» para las personas marcadas en Leo.
      </P>

      <H2>Tres usos concretos</H2>
      <P>
        <strong>Ritual de intención (luna nueva).</strong> En las 48 horas posteriores a la
        conjunción, formula de una a tres intenciones ligadas al signo y la casa activados —
        escritas, fechadas, releíbles en la luna llena correspondiente seis meses después.
      </P>
      <P>
        <strong>Balance de medio ciclo (luna llena).</strong> La luna llena ilumina lo que ha
        madurado desde la luna nueva del mismo signo: es el momento de finalizar, celebrar o
        cerrar — no de abrir una obra nueva.
      </P>
      <P>
        <strong>Seguimiento de tránsitos.</strong> Una lunación que cae a menos de 3° de uno de
        tus planetas natales es un verdadero detonante: nuestro curso sobre{" "}
        <Link href="/transits">los tránsitos</Link> explica cómo jerarquizar esos contactos, y el
        retrato del <Link href="/blog/lunariano">Lunariano</Link> describe a quienes la Luna les
        marca el tempo de todo el año.
      </P>
    </article>
  );
}
