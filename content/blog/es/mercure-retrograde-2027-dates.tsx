import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { MERCURY_RX, NEXT_RX_2028 } from "../data/ephemerides-2026-2027";

export const meta = {
  slug: "mercure-retrograde-2027-dates",
  title: "Mercurio retrógrado 2027: fechas exactas y signos",
  description:
    "Las 3 retrogradaciones de Mercurio en 2027: fechas precisas (hora de París), signos recorridos, sombras pre/post y consejos concretos — sin pánico inútil.",
  date: "2026-07-07",
  tags: ["Mercure", "rétrograde", "transits", "2027", "calendrier", "débutant"],
  readingLevel: "débutant" as const,
  cover: "/images/blog/mercurien2.webp",
};

const SIGNS = ["Aries", "Tauro", "Géminis", "Cáncer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario", "Capricornio", "Acuario", "Piscis"];

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-6 mt-12 flex items-center font-serif text-3xl font-light text-white md:text-4xl">
      <span className="mr-4 block h-px w-8 bg-gradient-to-r from-sky-500/50 to-transparent" aria-hidden="true" />
      {children}
    </h2>
  );
}

function P({ children }: { children: ReactNode }) {
  return <p className="mb-4 leading-relaxed text-text/85">{children}</p>;
}

function Callout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="my-6 rounded-2xl border border-sky-400/20 bg-sky-500/[0.06] p-5">
      <p className="mb-2 text-sm font-semibold text-sky-200">📌 {title}</p>
      <div className="space-y-2 leading-relaxed text-text/85">{children}</div>
    </div>
  );
}

const fmt = (d: string) =>
  new Date(`${d}T12:00:00Z`).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" });

function RxTable() {
  const rows = MERCURY_RX.filter((r) => r.start.startsWith("2027"));
  return (
    <div className="my-6 overflow-x-auto rounded-2xl border border-white/10">
      <table className="w-full min-w-[560px] text-left text-sm">
        <thead className="bg-white/5 text-text/70">
          <tr>
            <th className="p-3">Retrógrado desde</th>
            <th className="p-3">hasta</th>
            <th className="p-3">Recorrido zodiacal</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.start} className="border-t border-white/10 text-text/85">
              <td className="p-3">
                <strong>{fmt(r.start)}</strong> a las {r.startTime} (hora de París)
              </td>
              <td className="p-3">
                <strong>{fmt(r.end)}</strong> a las {r.endTime}
              </td>
              <td className="p-3">
                {SIGNS[r.startSignIndex]} {r.startDegree.toFixed(0)}° → {SIGNS[r.endSignIndex]}{" "}
                {r.endDegree.toFixed(0)}°
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function MercurioRetrogrado2027Post() {
  const rx2026 = MERCURY_RX[0];
  return (
    <article>
      <P>
        Unas tres veces al año, <Link href="/planetes/mercure">Mercurio</Link> parece retroceder
        en el zodiaco — un simple efecto óptico visto desde la Tierra, pero una cita que todo
        aficionado a la astrología vigila. Aquí tienes las <strong>fechas exactas de las
        retrogradaciones de Mercurio en 2027</strong>, calculadas en hora de París, con los signos
        recorridos y, sobre todo, la manera inteligente de vivirlas.
      </P>
      <Callout title="Todavía en 2026">
        <p>
          Antes de 2027, una última retrogradación va del <strong>{fmt(rx2026.start)}</strong> al{" "}
          <strong>{fmt(rx2026.end)}</strong>, íntegramente en {SIGNS[rx2026.startSignIndex]} (
          {rx2026.startDegree.toFixed(0)}° → {rx2026.endDegree.toFixed(0)}°).
        </p>
      </Callout>

      <H2>¿Por qué Mercurio «retrocede»? La mecánica</H2>
      <P>
        Ningún planeta da marcha atrás: la retrogradación es una ilusión de perspectiva.
        Mercurio orbita el Sol en 88 días; la Tierra, en 365. Aproximadamente cada 116 días (su
        ciclo sinódico), Mercurio nos adelanta «por el interior» — como un coche más rápido en el
        carril de al lado que, en el momento del adelantamiento, <em>parece</em> retroceder
        respecto al paisaje. Visto desde la Tierra, su posición proyectada sobre el zodiaco se
        frena, se detiene (la <strong>estación</strong>), retrocede unas tres semanas, se detiene
        de nuevo y reemprende la marcha directa. Por eso hay tres retrogradaciones al año (a
        veces cuatro), y por eso ocurren siempre cuando Mercurio pasa <em>entre</em> la Tierra y
        el Sol — nunca en otro momento.
      </P>
      <P>
        Un detalle que importa para la interpretación: en sus estaciones, Mercurio está casi
        inmóvil en el zodiaco. En astrología, un planeta estacionario se considera{" "}
        <strong>más poderoso</strong> — su simbolismo satura el grado que ocupa. Los días de
        estación (las fechas de la tabla siguiente) son, por tanto, los momentos más sensibles de
        cada periodo, mucho más que la mitad de la retrogradación.
      </P>

      <H2>Las 3 retrogradaciones de Mercurio en 2027</H2>
      <RxTable />
      <P>
        Dato notable de 2027: los tres periodos comienzan en <strong>signos de agua</strong>{" "}
        (Piscis, Cáncer, Escorpio) y retroceden cada uno hacia el signo de aire o de agua
        anterior. La mente colectiva no tropieza tanto con la logística pura como con lo que se
        dice <em>entre</em> líneas: emociones mal formuladas, recuerdos que resurgen,
        conversaciones que retomar con más tacto.
      </P>

      <H2>La clave de lectura: el bucle en TU carta</H2>
      <P>
        Esto es lo que las listas de fechas nunca cuentan: una retrogradación de Mercurio no
        significa lo mismo para todo el mundo. Lo que cuenta es la <strong>zona del zodiaco
        barrida tres veces</strong> (ida, vuelta, ida de nuevo) — el «bucle» — y dónde cae en tu
        carta. El método en tres pasos:
      </P>
      <P>
        <strong>1. Localiza la casa.</strong> Toma los grados del bucle (ej. 21° Acuario → 6°
        Piscis para febrero de 2027) y busca qué <Link href="/maisons">casa</Link> de tu{" "}
        <Link href="/theme-astral">carta natal</Link> contiene esos grados. En la casa III, la
        retrogradación hablará de contratos y papeleo; en la VII, conversaciones de pareja que
        retomar; en la X, un expediente profesional que vuelve a la mesa. Es la casa, no el
        signo, la que da el ámbito concreto.
      </P>
      <P>
        <strong>2. Busca los contactos exactos.</strong> Si el bucle pasa sobre uno de tus
        planetas natales (a menos de 2-3°), Mercurio lo «visita» tres veces: el tema
        correspondiente vuelve también tres veces — a menudo como problema / reexamen /
        resolución. ¿Una cuadratura a tu Venus natal? Tres episodios de una misma conversación
        afectiva. ¿Nada sobre tus puntos sensibles? El periodo será probablemente anodino para
        ti.
      </P>
      <P>
        <strong>3. Verifica tu Mercurio natal.</strong> Aproximadamente una persona de cada cinco
        nació con Mercurio retrógrado. Para ellas, estos periodos suelen ser más cómodos que para
        el resto: la mente funciona «en su sentido». Nuestro retrato del{" "}
        <Link href="/blog/mercuriano">Mercuriano</Link> profundiza en esta configuración.
      </P>

      <H2>Febrero – marzo: Piscis → Acuario</H2>
      <P>
        Del <strong>9 de febrero al 3 de marzo de 2027</strong>, Mercurio retrograda de Piscis
        (6°) a Acuario (21°). Fase ideal para retomar un proyecto creativo o un expediente que
        quedó difuso, reformular lo que se entendió mal, aclarar un malentendido entre amigos
        (registro Acuario). A evitar: firmar en la niebla — Piscis retrógrado convierte los
        contratos en poesía imprecisa.
      </P>

      <P>
        Ejemplo de lectura: si 21° Acuario – 6° Piscis cae en tu casa II, espera re-verificar una
        factura, renegociar una suscripción, recuperar una suma olvidada. En la casa IX, es un
        viaje lejano o una formación lo que se reprograma. Mismo simbolismo mercuriano, terrenos
        totalmente distintos.
      </P>

      <H2>Junio – julio: Cáncer → Géminis</H2>
      <P>
        Del <strong>10 de junio al 4 de julio de 2027</strong>, Mercurio retrocede de Cáncer (6°)
        a Géminis (28°) — su propio domicilio. Conversaciones familiares que reabrir, recuerdos y
        archivos que ordenar, expedientes inmobiliarios que re-verificar (registro Cáncer). El
        regreso a Géminis al final del periodo devuelve el foco a trayectos, correos y reservas
        duplicadas: léelo todo dos veces.
      </P>

      <H2>Octubre: Escorpio → Libra</H2>
      <P>
        Del <strong>7 al 28 de octubre de 2027</strong>, Mercurio retrograda de Escorpio (5°) a
        Libra (19°). Secretos que salen a la luz, cuentas comunes que reexaminar, negociaciones y
        contratos que reequilibrar (registro Libra). Es la retrogradación más «estratégica» del
        año: excelente para renegociar, arriesgada para zanjar un conflicto en caliente.
      </P>

      <H2>Sombras pre y post-retrógradas</H2>
      <P>
        La zona real de turbulencias supera las fechas oficiales: Mercurio atraviesa primero en
        marcha directa los grados que va a retrogradar (<em>sombra pre</em>, ~2 semanas antes), y
        los vuelve a cruzar una tercera vez tras su estación directa (<em>sombra post</em>, ~2
        semanas después). Si un asunto sensible descarrila justo «antes de las fechas», suele
        jugarse ahí. Nuestro curso sobre <Link href="/retrogrades">las retrogradaciones</Link>{" "}
        detalla este mecanismo.
      </P>

      <H2>Lo que Mercurio retrógrado NO significa</H2>
      <P>
        No, el mundo no se detiene tres veces al año. Mercurio retrógrado no prohíbe ni firmar,
        ni viajar, ni lanzar un proyecto — millones de contratos se firman perfectamente durante
        estos periodos. Simbólicamente, la función mercuriana se interioriza: es un tiempo de{" "}
        <strong>re-</strong> (releer, revisar, renegociar, reconectar, retomar) más que de
        primeras veces. En una <Link href="/theme-astral">carta natal</Link>, todo depende además
        de los <Link href="/transits">tránsitos</Link> exactos sobre TUS planetas: una
        retrogradación que no toca ningún punto sensible de tu carta pasará desapercibida.
      </P>

      <Callout title="Lista de control para los periodos retrógrados">
        <p>Hacer copias de seguridad y confirmar las citas por escrito.</p>
        <p>Leer los contratos dos veces — y aceptar que los plazos se deslizan.</p>
        <p>Aprovechar el clima «re-»: reconectar, revisar, terminar lo inacabado.</p>
        <p>No dramatizar nada: observar, anotar, verificar en tu propia carta.</p>
      </Callout>

      <P>
        Próxima cita después de 2027: Mercurio vuelve a estacionar retrógrado el{" "}
        <strong>{fmt(NEXT_RX_2028.start)}</strong> en {SIGNS[NEXT_RX_2028.signIndex]}. Para
        entender cómo vive estas fases un perfil fuertemente mercuriano, lee nuestro retrato del{" "}
        <Link href="/blog/mercuriano">Mercuriano</Link>.
      </P>
    </article>
  );
}
