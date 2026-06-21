import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import Image from "next/image";
import { AUTHOR_PERSON, PUBLISHER_ORG } from "@/lib/seo";
import SolarienImage from "@/public/images/blog/solarien.webp";
import Solarien2Image from "@/public/images/blog/solarien2.webp";
import Solarien3Image from "@/public/images/blog/solarien3.webp";

export const meta = {
  slug: "solarien",
  title:
    "El Solariano: el Soberano, Maestro de la Luz",
  description:
    "Retrato astrológico del Solariano: genio, irradiación, carisma, poder, vocación, amor, grandeza, caída — la dominante solar en una carta natal.",
  date: "2026-04-07",
  tags: [
    "Soleil",
    "solarien",
    "portrait astrologique",
    "charisme",
    "pouvoir",
    "thème astral",
    "psychologie astrologique",
    "vocation",
    "amour",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/solarien.webp",
};

function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-300">
      <span
        className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-300"
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
        className="mr-4 block h-px w-8 bg-gradient-to-r from-amber-400/60 to-transparent"
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
      box: "border-red-500/25 bg-red-500/10 shadow-[0_0_30px_rgba(239,68,68,0.05)]",
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
      box: "border-amber-500/30 bg-amber-500/10 shadow-[0_0_30px_rgba(245,158,11,0.05)]",
      icon: "text-amber-300",
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
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-sm transition-all hover:border-amber-300/30">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-300/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
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
    <div className="group grid grid-cols-1 border-b border-white/10 transition-colors hover:bg-amber-300/[0.03] md:grid-cols-3">
      <div className="p-4 font-serif text-lg text-amber-200/90">{title}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{effect}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{reading}</div>
    </div>
  );
}

export default function SolarienPost() {
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
                  name: "¿Qué es un Solariano en astrología?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "El Solariano es un tipo planetario definido por la dominante del Sol en la carta natal. Carisma, autoridad natural, genio de síntesis y vocación de excelencia caracterizan este perfil, considerado por la tradición astrológica como el más completo y el más raro.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué profesiones convienen a una dominante Sol?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "El Solariano se realiza en los puestos de dirección, la alta estrategia, la magistratura, la política y las artes mayores (dirección cinematográfica, pintura clásica). Sobresale allí donde se requieren amplitud de visión y liderazgo.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuál es el riesgo de un Sol afligido en una carta natal?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Un Sol en aspecto disonante (cuadratura u oposición a Marte, Saturno) puede transformar la grandeza de alma en megalomanía, orgullo destructivo, tiranía y caídas espectaculares — el complejo de Ícaro.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo saber si soy Solariano en mi carta natal?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Comprueba si tu Sol es angular (casa I, IV, VII o X), si recibe aspectos armónicos de Júpiter o de la Luna, y si se encuentra en dignidad (Leo, Aries). Cuantos más de estos criterios se acumulen, más será tu carta de tipo solariano.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(251,191,36,0.12)] aspect-[7/3]">
        <Image
          src={SolarienImage}
          alt="Retrato del Dios Sol"
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
          className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-amber-300/5 blur-[80px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-300/5 via-transparent to-black/50"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <Kicker>Sol • irradiación • autoridad • excelencia • nobleza</Kicker>

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

          {/* ── Bloc définition (Featured Snippet) ── */}
          <div className="mt-8 rounded-2xl border border-amber-400/20 bg-amber-400/[0.04] px-6 py-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-300/80">Definición</p>
            <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
              El <strong>Solariano en astrología</strong> designa a un individuo cuyo <Link href="/planetes/soleil" className="underline decoration-amber-400/40 underline-offset-2 hover:decoration-amber-400">Sol</Link> ocupa una posición dominante en la <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline decoration-amber-400/40 underline-offset-2 hover:decoration-amber-400">carta natal</Link> (angular, bien aspectado, en Leo o en Aries). Se distingue por un carisma natural, un sentido innato del mando y una vocación de excelencia que lo empuja a brillar en todo lo que emprende.
            </p>
          </div>

          {/* ── Introduction APP (Accroche → Problème → Promesse) ── */}
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            ¿Tienes un <strong>Sol dominante</strong> en tu carta natal y sientes arder en ti una llama que nada parece poder apagar? Sin embargo, esa potencia solar sigue siendo un misterio: ¿dónde termina el carisma y dónde empieza el orgullo? ¿Cómo canalizar esta energía regia sin caer en la megalomanía? Este retrato completo del <strong>temperamento solariano</strong> — psicología, carrera, amor, morfopsicología — te revela las claves de esta dominante planetaria rarísima, del arquetipo de Apolo a la caída de Ícaro.
          </p>

          <div className="mt-8 border-t border-white/5 pt-6">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-3" aria-label="Puntos clave del retrato solariano">
        <Stat label="Fuerza central" value="Síntesis e irradiación" />
        <Stat label="Terreno natural" value="Poder y excelencia" />
        <Stat label="Sombra principal" value="Orgullo y caída" />
      </section>

      <section className="space-y-6">
        <H2>¿Por qué domina el Solariano la carta natal?</H2>

        <Card title="El intelecto">
          <p>
            Captar el intelecto del Solariano es comprender que no posee una única forma de inteligencia, sino que es su síntesis suprema. La tradición astrológica considera con razón que la influencia solar reúne lo mejor de las demás dominantes planetarias:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>La vivacidad y el fulgor del Mercuriano.</li>
            <li>La profundidad, la concentración y la memoria del Saturniano.</li>
            <li>El espíritu de organización y la envergadura del Jupiteriano.</li>
            <li>La sensibilidad estética y artística del Venusiano.</li>
          </ul>
          <p>
            Ante semejante alquimia, estamos en presencia del cerebro más poderoso y mejor dotado que existe. El Solariano no se contenta con triunfar: está destinado a emerger, a superar a sus contemporáneos y a marcar su época. Ya se mueva en las altas esferas filosóficas, la investigación científica, la sociología, la estrategia o las artes mayores, no parece posible legar a la posteridad una obra de genio sin una fuerte dominante solar en la carta natal.
          </p>
          <p>
            Una nota enciclopédica esencial: el esoterista y pensador militar Coronel Caslant afirmaba que &quot;El tipo solar se encuentra raramente en la humanidad, por desgracia para ella&quot;. El mundo moderno, a menudo gobernado por la confusión, carece dolorosamente de estos auténticos &quot;reyes espirituales&quot;, estos espíritus superiores capaces de tomar las decisiones en la cumbre con una justeza deslumbrante para evitar el caos. El verdadero Solariano puro es una perla rara.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Carisma y magnetismo: cómo irradia el Solariano en sociedad</H2>

        <Card title="La vida social">
          <p>
            El Solariano posee un magnetismo atractivo de una potencia inaudita. Sin embargo, a diferencia del Venusiano que seduce por la dulzura y el encanto, el Solariano atrae por la admiración y, muy a menudo, por la dominación natural que ejerce.
          </p>
          <p>
            No es de trato fácil. ¿Por qué? Porque su sola presencia, irradiando superioridad y seguridad, tiende a desencadenar un complejo de inferioridad en quienes se le acercan. En sociedad, no es ni hiperexpansivo ni familiar a primera vista. Busca la compañía de sus pares, de las personalidades de primer plano. Huye de la mediocridad, la mezquindad y la vulgaridad como de la peste.
          </p>
          <p>
            Sin embargo, una vez que concede su amistad y su estima (un favor raro que hay que merecer), es un amigo de lealtad absoluta. Consciente de su fuerza, adopta de forma natural el papel de protector hacia quienes ama, utilizando su posición social o su autoridad para elevar a su entorno.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>El Solariano en el amor: ideal inalcanzable y soledad sentimental</H2>

        <Card title="El amor">
          <p>
            Podría creerse que, con tales bazas, la vida amorosa del Solariano es un cuento de hadas perpetuo. En realidad, es su mayor talón de Aquiles.
          </p>
          <p>
            El drama íntimo del Solariano reside en su exigencia. Pone su ideal amoroso tan alto que resulta casi imposible para un ser humano de carne y hueso alcanzarlo. No busca simplemente un cónyuge; busca un alma a su altura, una reina o un rey capaz de compartir su trono.
          </p>
          <p>
            Enfrentado a la rareza de ese perfil, el Solariano se enfrenta a menudo a múltiples desilusiones. Con frecuencia, por desesperación, se resigna a un matrimonio &quot;de razón&quot; o de &quot;prestigio&quot;, eligiendo una pareja que presenta bien socialmente y que apoyará su ascenso. Pero en la intimidad de su corazón guardará a menudo cierta insatisfacción, una melancolía oculta. La compensación kármica de su brillo social es a menudo una profunda soledad amorosa.
          </p>
        </Card>
      </section>

   <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(251,191,36,0.12)] aspect-[7/3]">
        <Image
          src={Solarien3Image}
          alt="Retrato del Dios Sol en astrología"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>

      <section className="space-y-6">
        <H2>Profesiones y vocación del Solariano: ¿qué carreras para una dominante Sol?</H2>

        <Card title="La vocación">
          <p>
            El destino de un Solariano armonioso no puede ser sino brillante. Ya desde el patio del colegio, se detecta en este niño una estofa superior. Sin siquiera tener que alzar la voz, se convierte en el líder natural, atrapando la luz por su magnetismo innato.
          </p>
          <p>
            En el mundo profesional, el Solariano se ahoga si se le obliga a tareas subalternas, a labores repetitivas, o si debe obedecer a superiores que juzga incompetentes. Estas situaciones nunca duran: impulsado por una ambición noble, se eleva rápidamente. Sus ámbitos predilectos son:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>El Poder y la Dirección: la política de alto nivel, los consejos de administración, la dirección de empresa, la magistratura suprema.</li>
            <li>Las Artes Mayores: en particular allí donde se requieren la amplitud y la nobleza (la pintura clásica, la dirección cinematográfica, sobre todo si el Sol está en conjunción con Júpiter en la carta natal).</li>
          </ul>
          <p>
            ¿Su arma secreta? Una vitalidad excepcional. El Solariano goza de una capacidad de recuperación física y nerviosa sin igual, que le permite rendir una suma de trabajo colosal que derribaría instantáneamente a cualquier otro signo. (Cuidado, no obstante: si un revés sobreviene en la madurez para un Solariano, la caída suele ser brutal y definitiva.)
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Sol afligido en la carta natal: la cara oscura del Solariano</H2>

        <Callout tone="warn" title="La sombra del Sol">
          <p>
            Cuando el Sol está fuertemente aspectado por planetas disonantes (en particular Marte o Saturno), la grandeza de alma se transforma en megalomanía destructiva.
          </p>
          <p>
            El &quot;mal&quot; Solariano conserva sus ideas de grandeza, pero ya no tiene la capacidad ni la nobleza para realizarlas. El juicio queda falseado por un orgullo desmesurado y una vanidad cegadora. Se convierte en un tirano doméstico o profesional, incapaz de soportar la menor crítica, aislándose en su propia torre de marfil.
          </p>
          <p>
            Es el complejo de Ícaro: si consigue elevarse mediante alguna estratagema o ilusión de grandeza, acaba inexorablemente por quemarse las alas. La &quot;justicia inmanente&quot; siempre termina por alcanzarlo en forma de caídas espectaculares, escándalos resonantes o una pérdida total de reputación.
          </p>
        </Callout>
      </section>

   <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(251,191,36,0.12)] aspect-[7/3]">
        <Image
          src={Solarien2Image}
          alt="Retrato de Apolo, Dios Sol, en astrología"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>

      <section className="space-y-6">
        <H2>La Solariana en astrología: retrato de la mujer con dominante Sol</H2>

        <Card title="La expresión Yin">
          <p>
            La Solariana armoniosa es una figura majestuosa y rarísima. Como escribía el célebre ocultista Péladan: &quot;Esta mujer ofrece las mejores garantías. Su gran justeza de razonamiento apenas la engaña sobre los méritos de un hombre.&quot;
          </p>
          <p>
            Es la mujer que solo puede amar en la admiración. Es orgánicamente incapaz de enamorarse de un hombre mediocre, cobarde o sin envergadura. Necesita que su pareja lleve en sí la chispa de la gloria. ¿El drama de su vida? A menudo inspira pasiones violentas y devoradoras en hombres &quot;corrientes&quot; a quienes se ve obligada a rechazar, mientras busca la mirada de &quot;poderosos&quot; que se ignoran a sí mismos. Si no encuentra a alguien a su medida, preferirá permanecer solitaria, digna y altiva, desposando su propia carrera o su propia fama antes que comprometerse.
          </p>
          <p>
            Si el Sol está maleficiado, se transforma en una arribista despiadada. Dotada de un carisma peligroso, utiliza su capacidad de inspirar pasiones para manipular, sin dudar en pisotear la moral para satisfacer su inconmensurable necesidad de poder y de reconocimiento social.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Morfopsicología del Solariano: retrato físico y apariencia</H2>

        <Card title="El retrato físico">
          <p>
            La belleza del Solariano es legendaria en la tradición astrológica. Su apariencia física evoca al instante la armonía perfecta, la elegancia y la fuerza tranquila de las estatuas de la Antigüedad griega (siendo el arquetipo absoluto el Apolo de Belvedere).
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>El porte general: un andar noble, desenvuelto, a veces majestuoso. El cuerpo es de una esbeltez armoniosa, que exuda gracia y una formidable vitalidad. El torso suele estar bien desarrollado (el Sol gobierna el corazón y la espalda), con una postura muy erguida, naturalmente arqueada.</li>
            <li>El rostro: un óvalo puro y de raza. El rasgo más llamativo es la frente: vasta, armoniosa, libre de las arrugas de ansiedad o de tensión nerviosa que marcan otros arquetipos. Es la frente del intelectual sereno.</li>
            <li>La mirada: ojos bien abiertos, magnéticos, enmarcados por arcos superciliares suavemente curvados. El iris se adorna a veces con matices o reflejos dorados. Es una mirada que mezcla una energía inquebrantable con una profunda benevolencia (&quot;Solo los ojos anunciaban al gran hombre&quot;, se decía de Napoleón).</li>
            <li>Los detalles: una nariz ligeramente aguileña y fina en el extremo. Una boca admirablemente cincelada que se abre en una sonrisa sobria pero radiante. La voz del Solariano es reposada, sonora, agradable y mesurada. El conjunto desprende una aristocracia natural imposible de imitar.</li>
          </ul>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Lo que hay que recordar del perfil Solariano en astrología</H2>

        <Callout tone="ok" title="Conclusión">
          <p>
            En conclusión: nacer con una poderosa dominante Solar no es solo un privilegio, es una responsabilidad cósmica. El Solariano no está aquí para amasar egoístamente poder, sino para convertirse en un faro. Su verdadera misión kármica es irradiar, calentar y guiar a quienes lo rodean, recordando siempre que la verdadera nobleza no reside en aplastar a los demás, sino en elevar al mundo entero hacia la luz.
          </p>
        </Callout>
      </section>

      <section
        aria-label="Síntesis del retrato solariano"
        className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm"
      >
        <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
          <div className="p-5 font-serif text-lg font-medium text-white/90">Eje</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Expresión</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Riesgo</div>
        </div>

        <TableRow
          title="Intelecto"
          effect="Síntesis, potencia mental, genio, visión"
          reading="Orgullo intelectual o desconexión si el Sol está afligido"
        />
        <TableRow
          title="Vida social"
          effect="Carisma, autoridad natural, protección"
          reading="Distancia, intimidación, soledad relacional"
        />
        <TableRow
          title="Amor"
          effect="Exigencia, ideal, admiración"
          reading="Insatisfacción, melancolía, soledad de la cumbre"
        />
        <TableRow
          title="Vocación"
          effect="Dirección, poder, artes mayores, irradiación"
          reading="Caída espectacular en caso de orgullo o de desalineación"
        />
      </section>

      {/* ── FAQ visible (Featured Snippet + People Also Ask) ── */}
      <section className="space-y-6" aria-labelledby="faq-solarien">
        <H2>Preguntas frecuentes sobre el Solariano</H2>
        <div id="faq-solarien" className="space-y-4">
          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md" open>
            <summary className="cursor-pointer list-none p-6 font-serif text-lg font-medium text-white/90 transition-colors hover:text-amber-200 [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between">
                ¿Qué es un Solariano en astrología?
                <span className="ml-3 text-amber-300/60 transition-transform group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="px-6 pb-6 text-sm leading-relaxed text-white/75 md:text-base">
              El Solariano es un <strong>tipo planetario</strong> definido por la dominante del Sol en la carta natal. Carisma, autoridad natural, genio de síntesis y vocación de excelencia caracterizan este perfil, considerado por la tradición astrológica como el más completo y el más raro.
            </p>
          </details>
          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md">
            <summary className="cursor-pointer list-none p-6 font-serif text-lg font-medium text-white/90 transition-colors hover:text-amber-200 [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between">
                ¿Qué profesiones convienen a una dominante Sol?
                <span className="ml-3 text-amber-300/60 transition-transform group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="px-6 pb-6 text-sm leading-relaxed text-white/75 md:text-base">
              El Solariano se realiza en los puestos de dirección, la alta estrategia, la magistratura, la política y las artes mayores (dirección cinematográfica, pintura clásica). Sobresale allí donde se requieren amplitud de visión y liderazgo.
            </p>
          </details>
          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md">
            <summary className="cursor-pointer list-none p-6 font-serif text-lg font-medium text-white/90 transition-colors hover:text-amber-200 [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between">
                ¿Cuál es el riesgo de un Sol afligido en una carta natal?
                <span className="ml-3 text-amber-300/60 transition-transform group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="px-6 pb-6 text-sm leading-relaxed text-white/75 md:text-base">
              Un Sol en <Link href="/aspects" className="underline decoration-amber-400/40 underline-offset-2 hover:decoration-amber-400">aspecto</Link> disonante (cuadratura u oposición a Marte, Saturno) puede transformar la grandeza de alma en megalomanía, orgullo destructivo, tiranía y caídas espectaculares — el &quot;complejo de Ícaro&quot;.
            </p>
          </details>
          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md">
            <summary className="cursor-pointer list-none p-6 font-serif text-lg font-medium text-white/90 transition-colors hover:text-amber-200 [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between">
                ¿Cómo saber si soy Solariano en mi carta natal?
                <span className="ml-3 text-amber-300/60 transition-transform group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="px-6 pb-6 text-sm leading-relaxed text-white/75 md:text-base">
              Comprueba si tu Sol es angular (en <Link href="/maisons/maison-1" className="underline decoration-amber-400/40 underline-offset-2 hover:decoration-amber-400">casa I</Link>, IV, VII o X), si recibe aspectos armónicos (trígono, sextil) de Júpiter o de la Luna, y si se encuentra en dignidad (Leo, Aries). Cuantos más de estos criterios se acumulen, más será tu <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline decoration-amber-400/40 underline-offset-2 hover:decoration-amber-400">carta</Link> de tipo solariano.
            </p>
          </details>
        </div>
      </section>

      <footer className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md sm:p-12">
        <H3>Para profundizar en los retratos planetarios</H3>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Pill>Sol</Pill>
          <Pill tone="sky">Retrato astrológico</Pill>
          <Pill tone="violet">Carisma</Pill>
          <Pill tone="emerald">Carta natal</Pill>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/blog/plutonien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Leer el retrato del Plutoniano
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/blog/lunarien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Leer el retrato del Lunariano
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}
