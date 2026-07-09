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

      <H2>La mecánica: por qué 29,5 días</H2>
      <P>
        Una lunación es el ciclo completo de las fases: 29 días, 12 horas y 44 minutos de media
        (el «mes sinódico»). La <strong>luna nueva</strong> es el momento exacto en que la Luna
        entra en <strong>conjunción</strong> con el Sol — mismo grado del zodiaco, cara iluminada
        vuelta hacia el Sol, y por tanto invisible para nosotros. La <strong>luna llena</strong>{" "}
        es la <strong>oposición</strong> exacta: la Tierra entre los dos astros, disco totalmente
        iluminado. No son «días» sino instantes precisos — de ahí las horas al minuto en nuestras
        tablas. Y como la Luna avanza unos 12° al día, el signo indicado es el del instante
        exacto: unas horas más tarde puede haber cambiado ya de signo.
      </P>
      <P>
        Simbólicamente, la astrología lee este ciclo como una respiración: la conjunción fusiona
        voluntad (Sol) y necesidad (Luna) — se siembra sin ver todavía; la oposición las pone
        frente a frente — lo sembrado se hace visible, se cosecha o se corrige. Nuestro curso
        sobre <Link href="/blog/luna-llena-luna-nueva-ciclos-astrologia">los ciclos lunares</Link>{" "}
        desarrolla las ocho fases intermedias.
      </P>

      <H2>Luna nueva, luna llena: qué cambia concretamente</H2>
      <P>
        La <strong>luna nueva</strong> abre el ciclo. Energía baja, vuelta hacia dentro: mal
        momento para lanzar con fanfarria, excelente momento para decidir en silencio. El signo
        de la conjunción da el tono: una luna nueva en Virgo (31 de agosto de 2027) favorece las
        decisiones de organización, salud, método; en Escorpio (29 de octubre de 2027), las
        decisiones de fondo — cortar, sanear, transformar.
      </P>
      <P>
        La <strong>luna llena</strong> culmina el ciclo abierto por la luna nueva del mismo signo
        seis meses antes — esa es la verdadera pareja a observar. La luna llena de Tauro del 14
        de noviembre de 2027 ilumina lo sembrado en la luna nueva de Tauro del 6 de mayo de 2027.
        Emocionalmente, la oposición Sol-Luna tensa el hilo entre dos polos de tu vida (yo/el
        otro, trabajo/hogar según el eje de signos): de ahí las noches agitadas y las decisiones
        impulsivas de las lunas llenas — culmina, celebra, termina, pero evita zanjar en caliente.
      </P>

      <H2>Encontrar la casa activada en tu carta: el método</H2>
      <P>
        El signo da el ambiente general, pero es la <Link href="/maisons">casa</Link> de tu{" "}
        <Link href="/theme-astral">carta natal</Link> la que dice <em>dónde ocurre para ti</em>.
        El método: toma el grado de la lunación en la tabla (ej. luna llena del 14 de noviembre
        de 2027 a 21° Tauro), abre tu carta y busca entre qué cúspides cae 21° Tauro. ¿Tu casa
        II?: culminación financiera — entrada de dinero, factura, toma de conciencia sobre tus
        recursos. ¿Casa VII?: un asunto de pareja llega a su madurez. ¿Casa XII?: cansancio,
        necesidad de retiro, fin de un ciclo interior. Una misma luna llena cuenta doce historias
        distintas según la carta — por eso los horóscopos genéricos fallan tan a menudo.
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

      <H2>¿Por qué hay eclipses unos meses y otros no?</H2>
      <P>
        Hay una luna nueva cada mes, pero un eclipse solar solo unas dos veces al año. La razón:
        la órbita de la Luna está inclinada 5° respecto a la de la Tierra. La mayor parte del
        tiempo, la conjunción ocurre «por encima» o «por debajo» del Sol — sin alineación
        perfecta, no hay eclipse. Dos veces al año, la lunación se produce cerca de los{" "}
        <Link href="/noeuds-lunaires">nodos lunares</Link> — los puntos donde ambas órbitas se
        cruzan — y ahí la alineación es real: luna nueva cerca del nodo = eclipse solar, luna
        llena cerca del nodo = eclipse lunar. Por eso los eclipses van en parejas con quince días
        de diferencia (mira agosto de 2026 en la tabla) y vuelven por «temporadas» cada seis
        meses aproximadamente.
      </P>
      <P>
        En interpretación, un eclipse es una lunación con coeficiente alto: al implicar el eje de
        los nodos — el eje evolutivo de la carta —, se le atribuyen efectos que se despliegan de
        seis meses a un año, con giros más marcados de lo habitual (comienzos, finales,
        revelaciones). Consejo práctico contraintuitivo: un eclipse no se «ritualiza» como una
        luna nueva ordinaria. Su energía se considera inestable — observa, anota lo que se
        activa, y deja reposar las decisiones unos días.
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

      <H2>Qué activa cada signo de lunación</H2>
      <P>
        Mini-guía para leer las tablas anteriores. <strong>Aries</strong>: impulsos, decisiones
        rápidas, lo que exige valor. <strong>Tauro</strong>: dinero, cuerpo, lo que debe durar.{" "}
        <strong>Géminis</strong>: intercambios, contratos, hermanos, información.{" "}
        <strong>Cáncer</strong>: familia, hogar, memoria, seguridad afectiva.{" "}
        <strong>Leo</strong>: creación, visibilidad, hijos, orgullo. <strong>Virgo</strong>:
        trabajo cotidiano, salud, orden y método. <strong>Libra</strong>: pareja, contratos,
        equilibrios que renegociar. <strong>Escorpio</strong>: finanzas compartidas, intimidad,
        lo que debe terminar. <strong>Sagitario</strong>: estudios, viajes, sentido, horizontes.{" "}
        <strong>Capricornio</strong>: carrera, estructuras, responsabilidades.{" "}
        <strong>Acuario</strong>: amistades, proyectos colectivos, libertades.{" "}
        <strong>Piscis</strong>: descanso, espiritualidad, cierres de ciclo. Cruza este registro
        con la casa de tu carta (método arriba) para obtener una lectura realmente personal.
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
