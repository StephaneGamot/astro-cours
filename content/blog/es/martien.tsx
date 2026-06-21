import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import Image from "next/image";
import { AUTHOR_PERSON, PUBLISHER_ORG } from "@/lib/seo";
import MartienImage from "@/public/images/blog/martien.webp";
import Martien2Image from "@/public/images/blog/martien2.webp";

export const meta = {
  slug: "martien",
  title:
    "El Marciano: Guerrero y Constructor de la Acción",
  description:
    "Retrato del Marciano en astrología: acción, valor, deporte y amor apasionado. Descubre la influencia del planeta Marte afligido en una carta natal.",
  date: "2026-04-03",
  tags: [
    "mars",
    "martien",
    "portrait astrologique",
    "courage",
    "action",
    "thème astral",
    "psychologie astrologique",
    "vocation",
    "amour",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/martien.webp",
};

function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-300">
      <span
        className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-300"
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
        className="mr-4 block h-px w-8 bg-gradient-to-r from-red-400/60 to-transparent"
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
      box: "border-red-500/30 bg-red-500/10 shadow-[0_0_30px_rgba(239,68,68,0.06)]",
      icon: "text-red-300",
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
      box: "border-red-400/25 bg-red-400/10 shadow-[0_0_30px_rgba(248,113,113,0.05)]",
      icon: "text-red-200",
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
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-sm transition-all hover:border-red-300/30">
      <div className="absolute inset-0 bg-gradient-to-br from-red-300/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
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
    <div className="group grid grid-cols-1 border-b border-white/10 transition-colors hover:bg-red-300/[0.03] md:grid-cols-3">
      <div className="p-4 font-serif text-lg text-red-200/90">{title}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{effect}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{reading}</div>
    </div>
  );
}

export default function MartienPost() {
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
                  name: "¿Qué es un Marciano en astrología?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "El Marciano es un tipo planetario con Marte dominante: energía bruta, valor, competición, acción directa e instinto combativo.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué profesiones convienen a un dominante Marte?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ejército, deporte de alto nivel, cirugía, emprendimiento, oficios del fuego, fuerzas del orden, competición.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué riesgos hay con un Marte afligido?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Violencia, cólera explosiva, autodestrucción, accidentes, impaciencia crónica, conflictos permanentes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo saber si soy Marciano?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Marte angular (Casa I, IV, VII, X), en Aries o Escorpio, aspectos armónicos, stellium en Aries.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(248,113,113,0.12)] aspect-[7/3]">
        <Image
          src={MartienImage}
          alt="Retrato simbólico del temperamento marciano en astrología"
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
          className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-red-300/5 blur-[80px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-red-300/5 via-transparent to-black/50"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <Kicker>Marte • acción • valor • combate • decisión</Kicker>

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

          <div className="mt-8 max-w-3xl rounded-xl border border-red-400/20 bg-red-400/5 p-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-300">Definición</p>
            <p className="mt-2 text-base leading-relaxed text-white/80 sm:text-lg">
              El <strong>Marciano en astrología</strong> designa a un individuo cuyo <Link href="/planetes/mars" className="text-red-300 underline decoration-red-300/30 hover:decoration-red-300">Marte</Link> ocupa una posición dominante en la <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="text-red-300 underline decoration-red-300/30 hover:decoration-red-300">carta natal</Link> (angular, bien aspectado, en Aries o Escorpio). Se caracteriza por una energía bruta, un valor instintivo y una voluntad de hierro que lo empuja a actuar, conquistar y combatir.
            </p>
          </div>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            ¿Tienes <strong>Marte dominante</strong> en tu carta natal y una energía volcánica que nada parece poder contener? Esa fuerza de acción fascina, pero esconde una trampa: violencia, impaciencia, autodestrucción. ¿Dónde está la frontera entre guerrero y bruto? Este retrato completo del <strong>temperamento marciano</strong> — psicología, carrera, amor, morfopsicología — revela las claves de este dominante planetario, del arquetipo de Ares al desafío del dominio de sí mismo.
          </p>

          <div className="mt-8 border-t border-white/5 pt-6">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-3" aria-label="Puntos clave del retrato marciano">
        <Stat label="Fuerza central" value="Acción y valor" />
        <Stat label="Terreno natural" value="Decisión y combate" />
        <Stat label="Sombra principal" value="Brutalidad y temeridad" />
      </section>

      <section className="space-y-6">
        <H2>La esencia del Marciano: más allá del mito de la guerra</H2>

        <Card title="La esencia">
          <p>
            Antes de trazar su retrato, es fundamental desmontar una idea preconcebida tenaz. La tradición astrológica redujo durante mucho tiempo a Marte a la guerra, la destrucción y los conflictos militares. Sin embargo, estudios astrológicos estadísticos (en particular los de Michel Gauquelin o André Barbault) han demostrado una realidad fascinante: si bien Marte está muy presente en los grandes militares, es igualmente dominante en los deportistas de alto nivel, los grandes cirujanos y los jefes de empresa.
          </p>
          <p>
            La verdadera esencia de Marte no es, por tanto, la destrucción, sino la Combatividad, la Decisión y la Acción pura. Para ser un buen cirujano hace falta la audacia de cortar la carne para salvar una vida. Para ser un gran deportista hace falta la rabia de vencer. El Marciano es ante todo el hombre o la mujer que rechaza el estancamiento.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>La inteligencia marciana: instinto, estrategia y espíritu combativo</H2>

        <Card title="El intelecto">
          <p>
            El intelecto del Marciano no se entretiene en florituras. Aunque no tiene la viveza despreocupada del Mercuriano ni la larga paciencia del Saturnino, el Marciano posee una cualidad intelectual temible: el pragmatismo absoluto.
          </p>
          <p>
            Su mente está orientada hacia los datos positivos, tangibles e inmediatamente aplicables en la vida cotidiana. Cuando estudia un tema, hace una selección automática e instintiva: solo retiene lo que es útil para la realización de sus objetivos. Las grandes teorías nebulosas lo aburren.
          </p>
          <p>
            Si se interesa por ámbitos más esotéricos o abstractos (como la astrología o la filosofía), nunca será por mera curiosidad intelectual, sino siempre con una pregunta en mente: "¿Cómo puedo usar esto para dirigir mejor mi vida o alcanzar mis metas?".
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>El Marciano en sociedad: autoridad bruta y lealtad sin concesiones</H2>

        <Card title="La vida social">
          <p>
            En sus relaciones con los demás, el Marciano es un ser entero, directo y espontáneo. Con él, siempre sabes a qué atenerte. Su franqueza es total, a veces incluso demasiado brusca, pues detesta la hipocresía, los sobreentendidos y los formalismos sociales.
          </p>
          <p>
            Es un temperamento fundamentalmente "rápido". Si hay un problema que resolver, el Marciano no se anda con rodeos: se arremanga. Es el amigo servicial y leal por excelencia, ese al que llamas en plena noche cuando todo se derrumba, porque nunca escatimará esfuerzos.
          </p>
          <p>
            ¿Su punto débil? La impaciencia y la cólera. Si se le ataca o critica injustamente, el Marciano explota. Sus enfados son impetuosos, volcánicos, y sus palabras pueden ser de una agresividad contundente. Sin embargo, a diferencia del Plutoniano o del Saturnino, el Marciano no es rencoroso. Una vez pasada la tormenta y terminado el combate (siempre librado limpiamente si su Marte está bien aspectado), pasa a otra cosa con el ánimo ligero.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>El Marciano en el amor: pasión devoradora, celos y conquista</H2>

        <Card title="El amor">
          <p>
            La vida amorosa del Marciano es fiel a su temperamento: impetuosa, rápida y ardiente. Es mucho más carnal y apasionado que sentimental.
          </p>
          <p>
            En el amor, no se anda con rodeos. Si desea a alguien, irá directo al grano, asumiendo plenamente sus deseos. Ese ardor, esa confianza en sí mismo y esa fuerza vital constituyen, por lo demás, sus mejores armas de seducción. Le importa muy poco "el qué dirán" o las convenciones sociales.
          </p>
          <p>
            En pareja, necesita que las cosas avancen rápido. A menudo es él quien toma las decisiones importantes (el matrimonio, la compra de una casa) sin titubear. Si funda una familia, será su cabeza natural, encarnando una autoridad protectora.
          </p>
          <p>
            Para que su pareja dure, lo ideal es que se una a alguien que posea un fuerte dominante Lunar (por la dulzura) o Venusiano (por la diplomacia). Esos perfiles admirarán de forma natural la fuerza del Marciano y, a cambio, el Marciano — a menudo agotado por sus batallas profesionales — encontrará en el hogar el único remanso de paz donde aceptará deponer las armas y mostrarse de una inmensa ternura.
          </p>
        </Card>
      </section>

    <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(248,113,113,0.12)] aspect-[7/3]">
        <Image
          src={Martien2Image}
          alt="Retrato del dios Ares, dios de la guerra, en astrología"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>

      <section className="space-y-6">
        <H2>Profesiones del Marciano: ¿qué carreras para un dominante Marte?</H2>

        <Card title="La vocación">
          <p>
            No nos engañemos: el destino del Marciano nunca es un largo y tranquilo río. A diferencia de Júpiter o Venus, Marte no es un "planeta de suerte". El Marciano no obtiene nada por azar; todo lo que posee lo ha ganado con el sudor de su frente, mediante un trabajo encarnizado e innumerables combates.
          </p>
          <p>
            Por suerte, allí donde otros signos bajarían los brazos ante la adversidad, el Marciano se enciende. El obstáculo es su mejor estímulo. Posee una audacia, un valor y una resiliencia que imponen un respeto absoluto.
          </p>
          <p>
            Profesionalmente, el mundo moderno ya apenas le ofrece campos de batalla épicos (salvo en las carreras militares). El Marciano de hoy encontrará, por tanto, la salida de su poderosa energía en oficios que requieran decisión, fuerza, o el uso de instrumentos cortantes y metálicos:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>El ámbito médico: cirujanos, dentistas, médicos de urgencias.</li>
            <li>El mando: jefes de empresa, jefes de obra, emprendedores independientes.</li>
            <li>La materia dura: ingenieros, escultores, artesanos de la metalurgia, mecánicos de talento.</li>
            <li>El cuerpo físico: deportistas profesionales, bomberos, especialistas de acción.</li>
          </ul>
          <p>
            Si sufre un revés de fortuna o un despido (a menudo debido a un arrebato o a un acto de temeridad impaciente), siempre se levantará. Su vitalidad es indestructible.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Marte afligido en la carta natal: violencia, cólera y autodestrucción</H2>

        <Callout tone="warn" title="La sombra de Marte">
          <p>
            Cuando Marte está gravemente disonante en la carta natal (por malos aspectos con Saturno, Urano o Plutón), la energía vital se corrompe. El valor se vuelve temeridad ciega, y la franqueza se transforma en brutalidad.
          </p>
          <p>
            El "mal" Marciano es un ser peligroso para sí mismo y para los demás. Desprovisto de la nobleza del verdadero guerrero, se convierte en un peleón perpetuo, incapaz de la menor diplomacia. Carente de sentido moral, puede verse tentado a obtener por la fuerza, la intimidación o la violencia lo que los demás obtienen mediante el trabajo.
          </p>
          <p>
            Es el arquetipo del contestatario huraño, de la "cabeza loca" que siembra el desorden en su familia o su empresa por puro afán de oposición, terminando a menudo por aislarse totalmente o por atraer sobre sí graves problemas legales.
          </p>
        </Callout>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>La Marciana en astrología: retrato de la mujer con dominante Marte</H2>

        <Card title="La expresión Yin">
          <p>
            La Marciana armónica es una de las figuras más fascinantes del zodiaco. Es la Mujer Poderosa, la Amazona moderna, la emprendedora indomable.
          </p>
          <p>
            Dotada de un valor a toda prueba, es capaz de mover montañas. Si el destino le impone pruebas (viudez, separación, crisis financiera), hará frente a todas sus obligaciones familiares sin compadecerse jamás de su suerte. En el amor, es una compañera de vida excepcional: no se queda en la sombra de su esposo, lo estimula, lo anima, e incluso lo "impulsa" en los momentos de duda. Suele decirse de ella que "es la mujer que sabría salvar a la tripulación en la balsa de la Medusa".
          </p>
          <p>
            Si Marte está muy disonante en su carta, la convivencia se vuelve un infierno. La combatividad se transforma en celos agresivos y disputas continuas. Injusta, brutal en sus palabras, rechazando toda forma de dulzura que juzga como debilidad, se vuelve incapaz de sociabilidad. Sus historias de amor son a menudo campos de ruinas, y corre el riesgo de agotarse en combates vanos toda su vida.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Morfopsicología del Marciano: retrato físico y apariencia</H2>

        <Card title="El retrato físico">
          <p>
            Físicamente, el Marciano transmite una impresión inmediata de potencia, de densidad y de nerviosidad. El cuerpo está literalmente tallado para la acción:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>El aspecto general: una complexión que realza la masa muscular, incluso en reposo. El torso suele ser más largo que los muslos, con pectorales prominentes. El conjunto da una sensación de anclaje fuerte, listo para saltar. La estatura está a menudo por encima de la media.</li>
            <li>El rostro: transmite una impresión de angularidad. La tez es viva, sanguínea, y enrojece con facilidad bajo el impulso de la emoción. El mentón es cuadrado, voluntarioso, símbolo de tozudez.</li>
            <li>La mirada: los ojos son oscuros, muy abiertos. Pero lo que más marca en el Marciano es su fijeza: cuando escucha o cuando se enfrenta, sostiene la mirada con una intensidad audaz, a veces dura y agresiva, bajo unas cejas espesas y arqueadas.</li>
            <li>Los detalles: la cabeza suele llevarse echada hacia atrás, orgullosa y altiva. La nariz es fuerte (a veces aguileña) con las aletas anchas y dilatadas por el aliento de la acción. La voz es fuerte, ruda, a veces áspera. Sus gestos son siempre decididos, amplios, lo que algunos astrólogos califican con humor de "gestos devastadores", de tanto espacio que ocupa al expresarse.</li>
          </ul>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Lo que hay que recordar del perfil Marciano en astrología</H2>

        <Callout tone="ok" title="Conclusión">
          <p>
            En conclusión: tener un fuerte dominante Marciano en la carta natal es una llamada al heroísmo cotidiano. El Marciano es el Fuego sagrado de la humanidad. Sin él, ninguna conquista habría sido posible, ninguna injusticia sería combatida, ninguna piedra sería levantada. ¿El único gran deber kármico del Marciano? Aprender a dominar su espada, para cortar solo lo que debe cortarse, y proteger lo que debe protegerse.
          </p>
        </Callout>
      </section>

      <section
        aria-label="Síntesis del retrato marciano"
        className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm"
      >
        <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
          <div className="p-5 font-serif text-lg font-medium text-white/90">Eje</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Expresión</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Riesgo</div>
        </div>

        <TableRow
          title="Esencia"
          effect="Combatividad, decisión, acción pura"
          reading="Destrucción u oposición si Marte está mal integrado"
        />
        <TableRow
          title="Vida social"
          effect="Franqueza, lealtad, reacción rápida"
          reading="Impaciencia, cóleras, brutalidad verbal"
        />
        <TableRow
          title="Amor"
          effect="Conquista, fuego, autoridad protectora"
          reading="Dominación, precipitación, falta de delicadeza"
        />
        <TableRow
          title="Vocación"
          effect="Cirugía, deporte, mando, metal"
          reading="Despidos, conflictos, problemas legales"
        />
      </section>

      <section id="faq-martien" className="space-y-6" aria-label="Preguntas frecuentes sobre el Marciano">
        <H2>Preguntas frecuentes sobre el Marciano</H2>

        {[
          {
            q: "¿Qué es un Marciano en astrología?",
            a: "El Marciano es un tipo planetario con Marte dominante: energía bruta, valor, competición, acción directa e instinto combativo.",
          },
          {
            q: "¿Qué profesiones convienen a un dominante Marte?",
            a: "Ejército, deporte de alto nivel, cirugía, emprendimiento, oficios del fuego, fuerzas del orden, competición.",
          },
          {
            q: "¿Qué riesgos hay con un Marte afligido?",
            a: "Violencia, cólera explosiva, autodestrucción, accidentes, impaciencia crónica, conflictos permanentes.",
          },
          {
            q: "¿Cómo saber si soy Marciano?",
            a: "Marte angular (Casa I, IV, VII, X), en Aries o Escorpio, aspectos armónicos, stellium en Aries.",
          },
        ].map(({ q, a }) => (
          <details
            key={q}
            className="group rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md transition-colors open:bg-white/[0.04]"
          >
            <summary className="flex cursor-pointer items-center gap-3 p-5 text-base font-medium text-white/90 hover:text-red-200 md:text-lg">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-300/60 text-sm text-white" aria-hidden="true">?</span>
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
          <Pill>Marte</Pill>
          <Pill tone="sky">Retrato astrológico</Pill>
          <Pill tone="violet">Acción</Pill>
          <Pill tone="emerald">Carta natal</Pill>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/blog/venusien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Leer el retrato del Venusiano
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/blog/jupiterien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Leer el retrato del Jupiterino
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}
