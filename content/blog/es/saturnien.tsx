import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import Image from "next/image";
import { AUTHOR_PERSON, PUBLISHER_ORG } from "@/lib/seo";
import SaturnienImage from "@/public/images/blog/saturnien.webp";
import Saturnien2Image from "@/public/images/blog/saturnien2.webp";
import Saturnien3Image from "@/public/images/blog/saturnien3.webp";

export const meta = {
  slug: "saturnien",
  title:
    "El Saturnino: el Sabio, el Maestro del Tiempo",
  description:
    "Retrato del Saturnino en astrología: profundidad, lealtad, soledad y sabiduría. Descubre su ambición silenciosa y su impacto en la carta natal.",
  date: "2026-04-01",
  tags: [
    "Saturne",
    "saturnien",
    "portrait astrologique",
    "résilience",
    "temps",
    "thème astral",
    "psychologie astrologique",
    "vocation",
    "amour",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/saturnien.webp",
};

function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-300">
      <span
        className="h-1.5 w-1.5 animate-pulse rounded-full bg-slate-300"
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
        className="mr-4 block h-px w-8 bg-gradient-to-r from-slate-400/60 to-transparent"
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
      box: "border-slate-500/30 bg-slate-500/10 shadow-[0_0_30px_rgba(148,163,184,0.05)]",
      icon: "text-slate-300",
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
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-sm transition-all hover:border-slate-300/30">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-300/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
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
    <div className="group grid grid-cols-1 border-b border-white/10 transition-colors hover:bg-slate-300/[0.03] md:grid-cols-3">
      <div className="p-4 font-serif text-lg text-slate-200/90">{title}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{effect}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{reading}</div>
    </div>
  );
}

export default function SaturnienPost() {
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
                  name: "¿Qué es un Saturnino en astrología?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "El Saturnino es un tipo planetario con Saturno dominante: rigor, profundidad, resistencia, sentido del deber y madurez precoz.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué profesiones convienen a un dominante Saturno?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ciencias exactas, investigación, arquitectura, derecho, administración, agricultura, arqueología, geología.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué riesgos hay con un Saturno afligido?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Depresión, rigidez mental, aislamiento crónico, pesimismo, avaricia, frialdad afectiva.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo saber si soy Saturnino?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Saturno angular, en Capricornio o Acuario, aspectos al Sol o a la Luna, stellium en Capricornio.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(148,163,184,0.12)] aspect-[7/3]">
        <Image
          src={SaturnienImage}
          alt="Retrato del dios Saturno en astrología"
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
          className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-slate-300/5 blur-[80px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-300/5 via-transparent to-black/50"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <Kicker>Saturno • tiempo • estructura • resistencia • sabiduría</Kicker>

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

          <div className="mt-8 max-w-3xl rounded-xl border border-slate-400/20 bg-slate-400/5 p-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-300">Definición</p>
            <p className="mt-2 text-base leading-relaxed text-white/80 sm:text-lg">
              El <strong>Saturnino en astrología</strong> designa a un individuo cuyo <Link href="/planetes/saturne" className="text-slate-300 underline decoration-slate-300/30 hover:decoration-slate-300">Saturno</Link> ocupa una posición dominante en la <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="text-slate-300 underline decoration-slate-300/30 hover:decoration-slate-300">carta natal</Link> (angular, bien aspectado, en Capricornio o Acuario). Se caracteriza por una profundidad intelectual excepcional, un agudo sentido del deber y una capacidad de concentración que el tiempo no hace sino reforzar.
            </p>
          </div>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            ¿Tienes <strong>Saturno dominante</strong> en tu carta natal y la sensación de haber cargado siempre el mundo sobre tus hombros? Esa gravedad natural impone respeto, pero esconde una trampa: aislamiento, rigidez, depresión crónica. Este retrato completo del <strong>temperamento saturnino</strong> — psicología, carrera, amor, morfopsicología — explora los resortes de este dominante planetario, del arquetipo de Cronos al desafío de aligerar la carga interior.
          </p>

          <div className="mt-8 border-t border-white/5 pt-6">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-3" aria-label="Puntos clave del retrato saturnino">
        <Stat label="Fuerza central" value="Profundidad y resistencia" />
        <Stat label="Terreno natural" value="Estructura y largo plazo" />
        <Stat label="Sombra principal" value="Amargura y aislamiento" />
      </section>

      <section className="space-y-6">
        <H2>La inteligencia saturnina: profundidad, rigor y pensamiento sistémico</H2>

        <Card title="El intelecto">
          <p>
            No busques en el Saturnino la réplica fulgurante ni la asimilación instantánea del Mercuriano. Su inteligencia no brilla por su rapidez, sino por una profundidad y una capacidad de concentración absolutamente fuera de lo común.
          </p>
          <p>
            Ante una nueva información, el Saturnino se toma su tiempo. Descompone, analiza, estructura. La asimilación es lenta, cierto, pero una vez adquiridos los conceptos, se incrustan en su mente como grabados en mármol. Posee una memoria prodigiosa, que a menudo desafía los estragos de la edad.
          </p>
          <p>
            En el plano intelectual, es un trabajador incansable. Durante su escolaridad, rara vez es el niño "afortunado" que aprueba sus exámenes por talento. Su éxito solo se lo debe a sí mismo, a su mérito y a su paciencia tenaz. Ante el obstáculo, donde otros abandonan, el Saturnino se obstina. Está naturalmente dotado para:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Las ciencias exactas y las matemáticas: donde el rigor prima sobre la imaginación.</li>
            <li>La investigación de largo aliento: es el investigador capaz de pasar veinte años sobre el mismo tema para alcanzar la verdad.</li>
            <li>Las grandes obras filosóficas: es imposible, por lo demás, dejar una huella histórica mayor en el pensamiento científico o filosófico sin un fuerte dominante saturnino en la carta natal.</li>
          </ul>
          <p>
            ¿Su punto débil? Un déficit de intuición y de fantasía. El Saturnino es un pragmático del pensamiento; necesita lo concreto.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>El Saturnino en sociedad: soledad elegida, integridad y gravedad</H2>

        <Card title="La vida social">
          <p>
            El primer encuentro con un Saturnino rara vez es un flechazo de amistad. Desprovisto del magnetismo solar o del encanto jovial del Jupiteriano, suele aparecer de trato áspero, distante, incluso glacial. Es el arquetipo del gran tímido que se protege.
          </p>
          <p>
            Sin embargo, quedarse en esa primera impresión sería un error fatal. El Saturnino no se entrega al primero que llega; hay que merecerlo. Es con el paso del tiempo (el aliado eterno de Saturno) cuando se revela su verdadera naturaleza. Se descubre entonces:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Un amigo de una lealtad inquebrantable: habla poco, pero cada una de sus palabras está sopesada, es sensata e inspirada por una observación temible de su entorno.</li>
            <li>Un consejero sin igual: su juicio es imparcial y de una lucidez implacable.</li>
            <li>Un colaborador de confianza: si hace una promesa, la cumplirá. Es el pilar en el que apoyarse cuando todo se derrumba. (A condición de proporcionarle un marco de trabajo estructurado, pues detesta improvisar.)</li>
          </ul>
        </Card>
      </section>

         <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(148,163,184,0.12)] aspect-[7/3]">
        <Image
          src={Saturnien3Image}
          alt="Retrato simbólico del temperamento saturnino en astrología"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>

      <section className="space-y-6">
        <H2>El Saturnino en el amor: fidelidad austera, pudor y compromiso duradero</H2>

        <Card title="El amor">
          <p>
            Hay que reconocerlo con honestidad: en el terreno sentimental, la firma de Saturno tiene fama de ser una de las más austeras. El Saturnino no es ni un gran romántico ni un seductor apasionado. Su lenguaje amoroso no está hecho de grandes efusiones, sino de fidelidad y de actos concretos.
          </p>
          <p>
            Poco interesado en el vagabundeo afectivo, sus aventuras de juventud son a menudo escasas. Esto se explica por su naturaleza: no busca la atención, carece de "saber hacer" en la seducción y a menudo esconde un complejo de inferioridad paralizante bajo su aparente frialdad. No es raro que el joven Saturnino sea iniciado en el amor por una persona mayor, o dotada de una fuerte energía Marciana/Venusiana, capaz de perforar su caparazón y de adivinar el fuego que arde bajo el hielo.
          </p>
        </Card>

        <Card title="El matrimonio saturnino: la prueba del tiempo">
          <p>
            Si bien aporta el mayor contingente de solteros (a menudo por elección o resignación), el Saturnino suele terminar casándose, pero tarde. Es el signo de los "late bloomers" (los que florecen tardíamente).
          </p>
          <p>
            Si el cielo astrológico es clemente, su unión será apacible, segura y de una solidez a toda prueba, respetando cada uno sus deberes. Sin embargo, en caso de disonancias mayores, la ausencia de pasión verbal puede crear una lenta erosión. No es raro ver uniones saturninas disolverse o convertirse en convivencias tácitas tras 20 o 25 años de matrimonio, desgastadas por el peso de la costumbre.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Profesiones del Saturnino: ¿qué carreras para un dominante Saturno?</H2>

        <Card title="La vocación">
          <p>
            Bajo sus aires modestos y discretos, el Saturnino alberga una ambición colosal. No busca la gloria efímera; busca la perennidad. Su éxito es una escalera que asciende peldaño a peldaño, sin dejarse desanimar jamás por los fracasos, la crítica o la lentitud de los resultados.
          </p>
          <p>
            La consagración del Saturnino llega generalmente tarde, a menudo después de los 50 o 60 años (el famoso periodo de la segunda revolución de Saturno). Profesionalmente, destaca en:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Las profesiones de estructura y arquitectura (construcción, ingeniería).</li>
            <li>La gestión del orden y de las cifras (contable, notario, archivero, bibliotecario).</li>
            <li>El vínculo con la Tierra y el tiempo (agricultura, arqueología, geología).</li>
            <li>La elevación espiritual (el sacerdocio, la vida monástica).</li>
          </ul>
          <p>
            Nota social: en destinos más modestos, la inmensa capacidad de resiliencia del Saturnino lo lleva a menudo a aceptar las tareas más ingratas que otros arquetipos rehúyen. Es el vigilante nocturno solitario, el trabajador de las alcantarillas, el peón, el cuidador de cuidados paliativos. Lleva a cabo estos oficios difíciles con una conciencia profesional absoluta y una dignidad que imponen respeto.
          </p>
          <p>
            (Atención, no obstante, a la posición de Saturno en el Medio Cielo: aunque no impide una elevación suprema, simboliza a menudo el riesgo de una caída o de un revés de fortuna al final de la vida.)
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Saturno afligido en la carta natal: depresión, rigidez y aislamiento</H2>

        <Callout tone="warn" title="La sombra de Saturno">
          <p>
            Como todo planeta de tal densidad, un Saturno muy disonante en la carta natal engendra pesados bloqueos. La introversión se transforma en misantropía, y la sabiduría en amargura.
          </p>
          <p>
            El "mal" Saturnino es un ser huraño, solapado y profundamente envidioso de la felicidad ajena. Creyéndose maldito o eterna víctima de un destino injusto, nunca se cuestiona, prefiriendo recriminar a su entorno profesional o familiar. Se regodea en el papel de aguafiestas. En casos extremos (e históricamente documentados por la tradición), ese sentimiento de injusticia, unido a una sed de aislamiento, podía conducir al rencor tóxico, a la maledicencia calumniosa, incluso, antaño, a la atracción por la magia oscura (la brujería vengativa).
          </p>
          <p>
            Hay que concederle, sin embargo, una cosa: la famosa "mala suerte" saturnina no siempre es una ilusión. Con tránsitos difíciles, es el arquetipo que más fracasos inmerecidos encaja.
          </p>
        </Callout>
      </section>

     <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(148,163,184,0.12)] aspect-[7/3]">
        <Image
          src={Saturnien2Image}
          alt="Retrato del dios del tiempo en astrología"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>

      <section className="space-y-6">
        <H2>La Saturnina en astrología: retrato de la mujer con dominante Saturno</H2>

        <Card title="La expresión Yin">
          <p>
            En la mujer, o en una carta dominada por la energía Yin, un bello dominante de Saturno da el arquetipo de la Guardiana. A menudo desconfiada de las pasiones destructivas, sus aventuras de juventud son escasas. Encontrará su realización en un matrimonio de razón, a menudo tardío, con un hombre maduro, tranquilizador (o a veces viudo). Allí se revelará una ama de casa sin igual, organizada, cuyo trabajo meticuloso asegurará la prosperidad del hogar.
          </p>
          <p>
            Es también el arquetipo de la mujer profundamente entregada: aquella que, antaño, sacrificaba su propia vida amorosa para seguir siendo el pilar benévolo que se ocupaba de sus padres ancianos o de otros miembros de la familia.
          </p>
          <p>
            Si Saturno está "maleficiado", la tradición, por la pluma del ocultista Péladan, la describe con palabras terribles pero psicológicamente certeras: "Una figura taciturna e inquietante, de una misantropía que no se desmiente [...] envidiosa de la felicidad ajena". Vuelta tiránica en la intimidad del hogar, dirigida por la avaricia y una amargura constante, es la que enfría con su sola presencia, ganándose a veces el triste apodo de "cuervo" de la familia.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Lo que hay que recordar del perfil Saturnino en astrología</H2>

        <Callout tone="ok" title="Conclusión">
          <p>
            En conclusión: tener un fuerte dominante saturnino en la carta natal no es una maldición, todo lo contrario: es un diploma de excelencia kármica. El universo confía a esta alma el poder de la resiliencia. El Saturnino es como el carbón sometido a una presión extrema: el proceso es largo, oscuro y doloroso, pero es el único del zodiaco capaz, al final de su vida, de transformarse en un diamante puro e indestructible.
          </p>
        </Callout>
      </section>

      <section
        aria-label="Síntesis del retrato saturnino"
        className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm"
      >
        <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
          <div className="p-5 font-serif text-lg font-medium text-white/90">Eje</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Expresión</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Riesgo</div>
        </div>

        <TableRow
          title="Intelecto"
          effect="Concentración, profundidad, memoria duradera"
          reading="Lentitud, rigidez, déficit de intuición"
        />
        <TableRow
          title="Vida social"
          effect="Lealtad, sentido del deber, fiabilidad"
          reading="Frialdad, distancia, aislamiento"
        />
        <TableRow
          title="Amor"
          effect="Fidelidad, solidez, compromiso tardío"
          reading="Austeridad afectiva, erosión por la costumbre"
        />
        <TableRow
          title="Vocación"
          effect="Paciencia, estructura, ambición de largo plazo"
          reading="Retrasos, caídas tardías, pesadez kármica"
        />
      </section>

      <section id="faq-saturnien" className="space-y-6" aria-label="Preguntas frecuentes sobre el Saturnino">
        <H2>Preguntas frecuentes sobre el Saturnino</H2>

        {[
          {
            q: "¿Qué es un Saturnino en astrología?",
            a: "El Saturnino es un tipo planetario con Saturno dominante: rigor, profundidad, resistencia, sentido del deber y madurez precoz.",
          },
          {
            q: "¿Qué profesiones convienen a un dominante Saturno?",
            a: "Ciencias exactas, investigación, arquitectura, derecho, administración, agricultura, arqueología, geología.",
          },
          {
            q: "¿Qué riesgos hay con un Saturno afligido?",
            a: "Depresión, rigidez mental, aislamiento crónico, pesimismo, avaricia, frialdad afectiva.",
          },
          {
            q: "¿Cómo saber si soy Saturnino?",
            a: "Saturno angular, en Capricornio o Acuario, aspectos al Sol o a la Luna, stellium en Capricornio.",
          },
        ].map(({ q, a }) => (
          <details
            key={q}
            className="group rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md transition-colors open:bg-white/[0.04]"
          >
            <summary className="flex cursor-pointer items-center gap-3 p-5 text-base font-medium text-white/90 hover:text-slate-200 md:text-lg">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-300/60 text-sm text-white" aria-hidden="true">?</span>
              {q}
            </summary>
            <div className="px-5 pb-5 pl-14 text-sm leading-relaxed text-white/70 md:text-base">
              {a}
            </div>
          </details>
        ))}
      </section>

      <footer className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md sm:p-12">
        <H3>Para profundizar en los retratos planetarios</H3>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Pill>Saturno</Pill>
          <Pill tone="sky">Retrato astrológico</Pill>
          <Pill tone="violet">Resiliencia</Pill>
          <Pill tone="emerald">Carta natal</Pill>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/blog/jupiterien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Leer el retrato del Jupiterino
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/blog/uranien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Leer el retrato del Uraniano
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}
