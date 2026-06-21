import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import Image from "next/image";
import { AUTHOR_PERSON, PUBLISHER_ORG } from "@/lib/seo";
import UranienImage from "@/public/images/blog/uranien.webp";
import Uranien2Image from "@/public/images/blog/uranien2.webp";

export const meta = {
  slug: "uranien",
  title:
    "El Uraniano: el Despertador y el Visionario",
  description:
    "Retrato astrológico del Uraniano: independencia, originalidad, rebeldía, vocación, ruptura, destino, la pionera, la uraniana en una carta natal.",
  date: "2026-03-31",
  tags: [
    "Uranus",
    "uranien",
    "portrait astrologique",
    "originalité",
    "indépendance",
    "thème astral",
    "psychologie astrologique",
    "vocation",
    "révolution",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/uranien.webp",
};

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
    <h2 className="mb-6 flex items-center font-serif text-3xl font-light text-white md:text-4xl">
      <span
        className="mr-4 block h-px w-8 bg-gradient-to-r from-violet-400/60 to-transparent"
        aria-hidden="true"
      />
      {children}
    </h2>
  );
}

function H3({ children }: { children: ReactNode }) {
  return <h3 className="font-serif text-2xl font-medium text-white/90">{children}</h3>;
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
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
    },
    ok: {
      box: "border-emerald-500/30 bg-emerald-500/10 shadow-[0_0_30px_rgba(16,185,129,0.05)]",
      icon: "text-emerald-400",
      svg: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    note: {
      box: "border-violet-500/30 bg-violet-500/10 shadow-[0_0_30px_rgba(167,139,250,0.05)]",
      icon: "text-violet-300",
      svg: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  };

  const current = styles[tone];

  return (
    <aside
      aria-label={title}
      className={`relative overflow-hidden rounded-2xl border p-6 backdrop-blur-md ${current.box}`}
    >
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-current opacity-30 to-transparent" />
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
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-sm transition-all hover:border-violet-300/30">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-300/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
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
    <div className="group grid grid-cols-1 border-b border-white/10 transition-colors hover:bg-violet-300/[0.03] md:grid-cols-3">
      <div className="p-4 font-serif text-lg text-violet-200/90">{title}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{effect}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{reading}</div>
    </div>
  );
}

export default function UranienPost() {
  const glow = getGlowFromTags(meta.tags);

  return (
    <article className="mx-auto max-w-4xl space-y-12 pb-20 pt-8 text-white">
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
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué es un Uraniano en astrología?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Tipo planetario con Urano dominante: fulgurancia intelectual, espíritu revolucionario, originalidad, necesidad radical de libertad y visión de futuro.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué profesiones para una dominante de Urano?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Investigación científica, nuevas tecnologías, astrología, aviación, electrónica, invención, reformas sociales, informática.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué riesgos con un Urano afligido?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Inestabilidad crónica, excentricidad destructiva, rupturas repetidas, marginalidad, provocaciones inútiles, caos relacional.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo saber si soy Uraniano?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Urano angular (casa I, IV, VII, X), en Acuario, aspectos al Sol o al Ascendente, cúmulo en Acuario.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(167,139,250,0.12)] aspect-[7/3]">
        <Image
          src={UranienImage}
          alt="Retrato simbólico del temperamento uraniano en astrología"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>

      <header className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
        <div
          className={`pointer-events-none absolute -right-24 -top-24 h-[500px] w-[500px] rounded-full opacity-30 mix-blend-screen blur-[100px] ${glow}`}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-violet-300/5 blur-[80px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-300/5 via-transparent to-black/50"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <Kicker>Urano • futuro • ruptura • independencia • visión</Kicker>

          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">


            <div className="flex flex-wrap gap-3 text-sm text-white/70">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                Lectura intermedia
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                Retrato psicológico
              </span>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.04] px-6 py-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300/80">Definición</p>
            <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
              El <strong>Uraniano en astrología</strong> designa a un individuo cuyo <Link href="/planetes/uranus" className="underline decoration-cyan-400/40 underline-offset-2 hover:decoration-cyan-400">Urano</Link> ocupa una posición dominante en la <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline decoration-cyan-400/40 underline-offset-2 hover:decoration-cyan-400">carta natal</Link> (angular, bien aspectado, en Acuario o Escorpio). Se caracteriza por una inteligencia fulgurante, un espíritu revolucionario y una necesidad irreprimible de libertad que lo sitúa siempre por delante de su época.
            </p>
          </div>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            ¿Tienes <strong>Urano dominante</strong> en tu carta natal y la tenaz sensación de no encajar nunca en este mundo? Esta fulgurancia intelectual fascina tanto como aísla: excentricidad, inestabilidad, rupturas en serie. Este retrato completo del <strong>temperamento uraniano</strong> — psicología, carrera, amor, morfopsicología — descifra los mecanismos de esta dominante planetaria fuera de lo común, del arquetipo de Prometeo a la trampa de la marginalidad estéril.
          </p>

          <div className="mt-8 border-t border-white/5 pt-6">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-3" aria-label="Puntos clave del retrato uraniano">
        <Stat label="Fuerza central" value="Independencia y originalidad" />
        <Stat label="Terreno natural" value="Futuro y ruptura" />
        <Stat label="Sombra principal" value="Aislamiento y marginalidad" />
      </section>

      <section className="space-y-6">
        <H2>La inteligencia uraniana: fulgurancia, innovación y visión de vanguardia</H2>

        <Card title="La esencia">
          <p>
            Para comprender al Uraniano, hay que grabar dos palabras en letras de fuego en su mente: Independencia y Originalidad.
          </p>
          <p>
            El problema principal del individuo fuertemente marcado por Urano en su carta natal es una necesidad visceral, casi vital, de arrancarse de sus raíces. El Uraniano se asfixia en la norma. Para existir, debe escapar de sus orígenes, de su medio social, de sus marcos formadores, pero también de las costumbres, los usos y las leyes vigentes.
          </p>
          <p>
            Sin embargo, no se trata de una rebeldía adolescente sin fundamento. El Uraniano posee una lógica interna implacable. Repiensa el mundo por sí mismo. Se niega a aceptar una idea, una regla o un concepto cuya validez no haya debatido largamente en la intimidad de su propia mente. Esta afirmación de hiperindividualidad es un camino arduo, que se desarrolla casi siempre en dos grandes fases kármicas.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>El Ciclo del Uraniano: las dos fases de la individuación</H2>

        <Card title="La primera fase: el exilio voluntario y la condensación (antes de los 40)">
          <p>
            En la primera parte de su vida, el Uraniano atraviesa a menudo un periodo que podría calificarse de negativo o introvertido, pero que en realidad es un trampolín indispensable. Ante un mundo que juzga obsoleto o asfixiante, el Uraniano se repliega.
          </p>
          <p>
            Toma distancia con su entorno. Cuidado con equivocarse: no se trata en absoluto de una dimisión ni de una depresión. Es un movimiento estratégico. El Uraniano reúne todas sus fuerzas interiores. Para sobrevivir a la incomprensión general, condensa su ser en torno a su núcleo. Se vuelve, para retomar la imagen tradicional, &quot;duro como una roca y estrecho como una hoja&quot; para imponer mejor su poder futuro.
          </p>
          <p>
            Durante este periodo, el Uraniano suele dar la figura de un inadaptado, de un excéntrico o de un marginal. Por profunda intransigencia, se niega a ser &quot;alguien&quot; si eso implica ser &quot;como todo el mundo&quot;.
          </p>
        </Card>

        <Card title="El umbral de los 42 años: la oposición de Urano y la revelación">
          <p>
            El viraje principal en el destino del Uraniano sobreviene casi siempre en torno a los 42 años. En astrología, esto corresponde a la oposición de Urano celeste a Urano natal (a menudo llamada &quot;la crisis de la mediana edad&quot;). Es la chispa que prende la mecha.
          </p>
        </Card>

        <Card title="La segunda fase: el constructor del futuro (después de los 42)">
          <p>
            Esta segunda fase es eminentemente positiva, activa y constructiva. El excéntrico inadaptado de ayer ha terminado de totalizar sus fuerzas: se convierte en &quot;Alguien&quot;. Se ha recogido sobre sí mismo y entra en su absoluto como en un castillo fuerte. Se ha convertido en su propia fortaleza.
          </p>
          <p>
            El problema crucial del Uraniano queda por fin resuelto: puesto que no podía integrarse de entrada en la sociedad por la conformidad, se integra en ella obligando a la sociedad a admitir su valor. Es la sublimación lograda. No ser &quot;como los demás&quot; exige un poder colosal, pues solo se puede hacer admitir lo inhabitual y la vanguardia a condición estricta de volverlo real, útil y brillante.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>El Uraniano en sociedad: marginal, provocador y librepensador</H2>

        <Card title="El amor y la relación">
          <p>
            En el terreno sentimental, el Uraniano es una pareja desconcertante, fascinante, pero exigente. El modelo de la pareja tradicional, fusional, posesiva o rutinaria le produce urticaria.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>El Uraniano en el amor: libertad radical, rupturas y amor atípico</H2>

        <Card title="El amor y la relación">
          <p>
            Concibe el amor como una alianza entre dos espíritus libres. Para seducir y retener a un Uraniano, nunca hay que tratar de encerrarlo en una jaula, aunque sea dorada. Necesita admirar intelectualmente a su pareja y reclama un respeto absoluto por su jardín secreto y su espacio personal. A cambio, es una pareja de una tolerancia increíble, sin prejuicios, que siempre animará al otro a emanciparse y a convertirse en la mejor versión de sí mismo.
          </p>
          <p>
            Amistades fulgurantes, flechazos inesperados, o rupturas tajantes y sin apelación: su vida relacional está a menudo marcada por el sello de la sorpresa.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Profesiones del Uraniano: ¿qué carreras para una dominante de Urano?</H2>

        <Card title="La vocación">
          <p>
            El Uraniano no elige un oficio para pagar sus facturas; responde a una vocación. Es el hombre o la mujer de destino marcado, el individuo que ha recibido una misión.
          </p>
          <p>
            El alcance de la influencia de Urano es tal que actúa como un amplificador genético: permite al individuo forzar la expresión de sus talentos latentes y llevarlos a su máxima eficacia. El Uraniano sobresale allí donde hay que destruir lo antiguo para construir lo nuevo:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>La tecnología y la vanguardia: ingeniería espacial, informática, inteligencia artificial, ciencias de punta.</li>
            <li>Las disciplinas de lo invisible: la astrología (Urano es su planeta regente), la psicología cognitiva, las neurociencias.</li>
            <li>La reforma social: la política (en su sentido revolucionario), el activismo, los derechos civiles, lo humanitario.</li>
            <li>Las artes visuales: el cine de anticipación, el arte abstracto o conceptual, la música electrónica.</li>
          </ul>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Urano afligido en la carta natal: inestabilidad, excentricidad y caos</H2>

        <Callout tone="warn" title="La sombra de Urano">
          <p>
            Pero ¿qué ocurre si el Uraniano fracasa? Si Urano está fuertemente disonante en la carta (afligido por Saturno o un planeta pesado), la exigencia de libertad se transforma en marginalidad estéril.
          </p>
          <p>
            El mito de Prometeo — el que robó el fuego a los Dioses para dárselo a los hombres — ilustra a la perfección el arquetipo uraniano. No todos los Uranianos logran repartir su fuego. Si fracasa en su sublimación social, el Uraniano corre el riesgo de un destino trágico.
          </p>
          <p>
            Como Prometeo encadenado a su roca, será carcomido por el águila de la sequedad afectiva y de la amargura. Incapaz de plegarse al mundo, pero incapaz de transformarlo, se encierra en un destino esclerótico, convirtiéndose en un contestatario perpetuo, cínico, orgulloso y dramáticamente aislado frente al mar, bajo la mirada glacial de las estrellas.
          </p>
        </Callout>
      </section>

    <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(167,139,250,0.12)] aspect-[7/3]">
        <Image
          src={Uranien2Image}
          alt="Retrato de Urano (Ouranos) en astrología"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>

      <section className="space-y-6">
        <H2>La Uraniana en astrología: retrato de la mujer con dominante de Urano</H2>

        <Card title="La expresión Yin">
          <p>
            La mujer Uraniana (o la energía Yin uraniana) es una fuerza de la naturaleza que pulveriza los techos de cristal. Es el arquetipo de la Pionera, de la Sufragista, de la mujer de ciencia o de la innovadora.
          </p>
          <p>
            Negándose categóricamente a someterse a los dictados patriarcales o a las expectativas tradicionales ligadas a su género, inventa sus propias reglas. Ya elija ser una madre de familia con métodos de educación alternativos y vanguardistas, o una mujer de negocios implacable, siempre lo hará a su manera. Incomoda tanto como fascina por su rechazo total a comprometer su libertad intelectual.
          </p>
          <p>
            Si Urano está maleficiado, esta sed de emancipación puede volverse caótica. Corre el riesgo de sabotear todas sus relaciones por un pánico al compromiso, confundiendo independencia con huida hacia adelante.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Morfopsicología del Uraniano: retrato físico y apariencia</H2>

        <Card title="El retrato físico">
          <p>
            Físicamente, el Uraniano nunca pasa inadvertido, no por criterios de belleza clásicos, sino por un &quot;aura&quot; eléctrica y magnética innegable.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>El aspecto general: una silueta a menudo longilínea, tensa, animada por una energía nerviosa. Su andar es rápido, entrecortado, a veces imprevisible.</li>
            <li>La mirada: es su rasgo más distintivo. La mirada uraniana es penetrante, clara, brillante, a veces calificada de &quot;mirada de águila&quot;. Parece fijar siempre un punto en el horizonte celeste que los demás no ven.</li>
            <li>El rostro: rasgos angulosos, asimétricos u originales. La frente suele ser alta y prominente, señal de una hipercerebralidad.</li>
            <li>El estilo: el estilo de vestir del Uraniano está hecho de contrastes. Puede ser de una excentricidad totalmente asumida (precursor de modas) o, al contrario, de un utilitarismo absoluto (el famoso jersey de cuello alto negro idéntico que llevaba cada día Steve Jobs, figura uraniana por excelencia, para no perder tiempo eligiendo su ropa).</li>
          </ul>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Lo que hay que recordar del perfil Uraniano en astrología</H2>

        <Callout tone="ok" title="Conclusión">
          <p>
            En conclusión: el Uraniano es el pararrayos de la humanidad. Tener una dominante Uraniana en la carta natal no es nada cómodo, es aceptar vivir atravesado por la electricidad cósmica. Su misión no es tranquilizar, sino despertar. Sin los Uranianos, la humanidad seguiría alumbrándose con velas, asustada por las tinieblas, incapaz de mirar hacia las estrellas.
          </p>
        </Callout>
      </section>

      <section
        aria-label="Síntesis del retrato uraniano"
        className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm"
      >
        <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
          <div className="p-5 font-serif text-lg font-medium text-white/90">Eje</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Expresión</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Riesgo</div>
        </div>

        <TableRow
          title="Esencia"
          effect="Independencia, originalidad, rechazo del molde"
          reading="Marginalidad estéril, intransigencia improductiva"
        />
        <TableRow
          title="Ciclo de vida"
          effect="Repliegue estratégico y luego afirmación brillante"
          reading="Fracaso de integración, aislamiento duradero"
        />
        <TableRow
          title="Amor"
          effect="Alianza libre, admiración mental, respeto del espacio"
          reading="Rupturas tajantes, miedo al encierro"
        />
        <TableRow
          title="Vocación"
          effect="Vanguardia, reforma, tecnología, futuro"
          reading="Contestatario perpetuo sin obra real"
        />
      </section>

      <section id="faq-uranien" className="space-y-6">
        <H2>Preguntas frecuentes sobre el Uraniano</H2>

        <div className="space-y-4">
          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
            <summary className="flex cursor-pointer items-center gap-3 font-serif text-lg font-medium text-white/90 transition-colors hover:text-cyan-200">
              <svg className="h-5 w-5 shrink-0 text-cyan-300/60 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              ¿Qué es un Uraniano en astrología?
            </summary>
            <p className="mt-4 pl-8 text-sm leading-relaxed text-white/70 md:text-base">
              Tipo planetario con Urano dominante: fulgurancia intelectual, espíritu revolucionario, originalidad, necesidad radical de libertad y visión de futuro.
            </p>
          </details>

          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
            <summary className="flex cursor-pointer items-center gap-3 font-serif text-lg font-medium text-white/90 transition-colors hover:text-cyan-200">
              <svg className="h-5 w-5 shrink-0 text-cyan-300/60 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              ¿Qué profesiones para una dominante de Urano?
            </summary>
            <p className="mt-4 pl-8 text-sm leading-relaxed text-white/70 md:text-base">
              Investigación científica, nuevas tecnologías, astrología, aviación, electrónica, invención, reformas sociales, informática.
            </p>
          </details>

          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
            <summary className="flex cursor-pointer items-center gap-3 font-serif text-lg font-medium text-white/90 transition-colors hover:text-cyan-200">
              <svg className="h-5 w-5 shrink-0 text-cyan-300/60 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              ¿Qué riesgos con un Urano afligido?
            </summary>
            <p className="mt-4 pl-8 text-sm leading-relaxed text-white/70 md:text-base">
              Inestabilidad crónica, excentricidad destructiva, rupturas repetidas, marginalidad, provocaciones inútiles, caos relacional.
            </p>
          </details>

          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
            <summary className="flex cursor-pointer items-center gap-3 font-serif text-lg font-medium text-white/90 transition-colors hover:text-cyan-200">
              <svg className="h-5 w-5 shrink-0 text-cyan-300/60 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              ¿Cómo saber si soy Uraniano?
            </summary>
            <p className="mt-4 pl-8 text-sm leading-relaxed text-white/70 md:text-base">
              Urano angular (casa I, IV, VII, X), en Acuario, aspectos al Sol o al Ascendente, cúmulo en Acuario.
            </p>
          </details>
        </div>
      </section>

      <footer className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md sm:p-12">
        <H3>Para ir más lejos en los retratos planetarios</H3>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Pill>Urano</Pill>
          <Pill tone="sky">Retrato astrológico</Pill>
          <Pill tone="violet">Visión</Pill>
          <Pill tone="emerald">Carta natal</Pill>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/blog/saturnien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Leer el retrato del Saturniano
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/blog/neptunien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Leer el retrato del Neptuniano
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}
