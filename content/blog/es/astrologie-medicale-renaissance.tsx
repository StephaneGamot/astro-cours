import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import { AUTHOR_PERSON, PUBLISHER_ORG, SITE_URL } from "@/lib/seo";
import CoverImage from "@/public/images/blog/astrologie-medicale-renaissance.webp";

export const meta = {
  slug: "astrologie-medicale-renaissance",
  title: "Por qué los médicos del Renacimiento leían el cielo",
  description:
    "Por qué los médicos de la Edad Media y del Renacimiento consultaban el cielo antes de curar: humores, hombre zodiacal, días críticos (no médico).",
  date: "2026-06-19",
  tags: [
    "astrologie médicale",
    "histoire",
    "Renaissance",
    "humeurs",
    "homme zodiacal",
    "tempéraments",
    "tradition",
    "Lune",
    "débutant",
  ],
  readingLevel: "débutant" as const,
  cover: "/images/blog/astrologie-medicale-renaissance.webp",
};

// -- COMPOSANTS D'INTERFACE PREMIUM --

function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" aria-hidden="true" />
      {children}
    </span>
  );
}

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-6 flex items-center font-serif text-3xl font-light text-white md:text-4xl">
      <span className="mr-4 block h-px w-8 bg-gradient-to-r from-amber-500/50 to-transparent" aria-hidden="true" />
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
    },
    ok: {
      box: "border-emerald-500/30 bg-emerald-500/10 shadow-[0_0_30px_rgba(16,185,129,0.05)]",
      icon: "text-emerald-400",
      svg: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    note: {
      box: "border-sky-500/30 bg-sky-500/10 shadow-[0_0_30px_rgba(56,189,248,0.05)]",
      icon: "text-sky-400",
      svg: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  };

  const current = styles[tone];

  return (
    <aside aria-label={title} className={`relative overflow-hidden rounded-2xl border p-6 backdrop-blur-md ${current.box}`}>
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-current opacity-30 to-transparent" />
      <div className={`mb-3 flex items-center gap-3 font-serif text-lg font-medium ${current.icon}`}>
        {current.svg}
        <span>{title}</span>
      </div>
      <div className="space-y-3 text-sm leading-relaxed text-white/80 md:text-base">{children}</div>
    </aside>
  );
}

function Card({
  title,
  subtitle,
  children,
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
      <div className="mt-5 space-y-4 text-sm leading-relaxed text-white/80 md:text-base">{children}</div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-sm transition-all hover:border-white/20">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
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
    <div className="group grid grid-cols-1 border-b border-white/10 transition-colors hover:bg-white/[0.02] md:grid-cols-3">
      <div className="p-4 font-serif text-lg text-amber-200/90">{title}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{effect}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{reading}</div>
    </div>
  );
}

export default function AstrologieMedicaleRenaissancePost() {
  const glow = getGlowFromTags(meta.tags);

  return (
    <article className="mx-auto max-w-4xl space-y-12 pb-20 pt-8 text-white">
      {/* DONNÉES STRUCTURÉES (SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: meta.title,
              description: meta.description,
              image: `${SITE_URL}${meta.cover}`,
              datePublished: `${meta.date}T12:00:00Z`,
              dateModified: `${meta.date}T12:00:00Z`,
              author: AUTHOR_PERSON,
              publisher: PUBLISHER_ORG,
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `${SITE_URL}/blog/${meta.slug}`,
              },
              inLanguage: "es",
              keywords: meta.tags.join(", "),
              articleSection: "Historia de la astrología",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Por qué los médicos del Renacimiento utilizaban la astrología?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Porque la medicina de la época se basaba en la teoría de los humores heredada de Hipócrates y de Galeno. El cielo era visto como un cuadrante que regulaba el equilibrio de los humores: se consultaban, por tanto, los astros para elegir el momento de una sangría, de una purga o de un remedio.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué es el hombre zodiacal (homo signorum)?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es una imagen, omnipresente en los almanaques medievales y del Renacimiento, que asocia cada signo del zodiaco a una parte del cuerpo, desde Aries (la cabeza) hasta Piscis (los pies). Servía de recordatorio para evitar tratar un órgano cuando la Luna atravesaba su signo.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Es la astrología médica una medicina reconocida hoy en día?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. La astrología médica es un objeto de historia y de simbolismo, no una práctica de cuidado validada. Ninguna decisión de salud debe apoyarse en ella. En caso de síntoma o de duda médica, hay que consultar a un médico.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      {/* IMAGE DE COUVERTURE */}
      <div className="relative w-full aspect-[7/3] rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(251,191,36,0.1)] bg-[#0f0f13] flex items-center justify-center">
        <Image src={CoverImage} alt="Un médico del Renacimiento consultando una carta del cielo y un hombre zodiacal a la luz de una vela" fill sizes="100vw" priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent z-10 pointer-events-none" />
      </div>

      {/* HERO */}
      <header className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
        <div
          className={`pointer-events-none absolute -right-24 -top-24 h-[500px] w-[500px] rounded-full opacity-30 mix-blend-screen blur-[100px] ${glow}`}
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-[80px]" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/50" aria-hidden="true" />

        <div className="relative z-10">
          <Kicker>Historia • Humores • Hombre zodiacal</Kicker>

          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="font-serif text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl md:max-w-3xl">
              Cuando curar era, ante todo, leer el cielo
            </h2>

            <div className="flex flex-wrap gap-3 text-sm text-white/70">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">Relato histórico</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">No médico</span>
            </div>
          </div>

          <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            Durante casi quince siglos, un médico europeo digno de ese nombre no se contentaba con examinar a su paciente: también
            consultaba una <strong className="font-medium text-amber-200">carta del cielo</strong>. Lejos de ser un capricho de
            charlatán, la <strong className="font-medium text-white">astrología médica</strong> se enseñaba en la universidad,
            cosida al pensamiento erudito desde Hipócrates hasta el Renacimiento. Esta es la historia de esa alianza entre el cielo y el
            cuerpo — y las razones, perfectamente lógicas para la época, que la hacían imprescindible.
          </p>

          <div className="mt-8 pt-6 border-t border-white/5">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      {/* AVERTISSEMENT MÉDICAL */}
      <Callout tone="warn" title="Léelo antes que nada: esto es historia, no un consejo de salud">
        <p>
          Este artículo relata una <strong className="text-white">práctica del pasado</strong> y su simbolismo. La astrología médica
          no es una medicina: no diagnostica nada, no cura nada y en ningún caso reemplaza una opinión profesional.
        </p>
        <p>
          En caso de síntoma, dolor, duda o pregunta sobre un tratamiento, <strong className="text-white">consulta a un
          médico</strong>. Nunca modifiques un tratamiento sobre la base de una lectura astrológica.
        </p>
      </Callout>

      {/* STATS RAPIDES */}
      <section className="grid gap-4 sm:grid-cols-3" aria-label="Puntos clave del artículo">
        <Stat label="Marco de pensamiento" value="Los 4 humores" />
        <Stat label="Herramienta emblemática" value="El hombre zodiacal" />
        <Stat label="Astro clave del timing" value="La Luna" />
      </section>

      {/* DEFINITION BOX */}
      <aside className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-6 leading-relaxed text-white/85">
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-amber-400">Definición</p>
        <p>
          La <strong>astrología médica</strong> (o <em>iatromatemática</em>) es la rama histórica de la astrología que
          vinculaba el cuerpo humano, los <Link href="/astrologie-medicale">temperamentos y los humores</Link> al movimiento de los planetas y
          de los signos. Estructuró la medicina occidental desde la Antigüedad griega hasta el siglo XVII, antes de ser
          apartada por la medicina experimental.
        </p>
      </aside>

      {/* INTRO */}
      <p className="text-base leading-relaxed text-white/80 md:text-lg">
        Para comprender por qué un doctor de 1550 abría sus efemérides antes que su maletín, hay que olvidar la medicina moderna y entrar
        en una visión del mundo en la que todo se sostiene: el cielo y la tierra, el gran universo y el pequeño universo que es el cuerpo humano.
        En esa lógica, leer los astros no era «creer en el horóscopo» — era aplicar la ciencia más
        seria de su tiempo.
      </p>

      {/* 1. LE CADRE DE PENSÉE */}
      <section className="space-y-6">
        <H2>1) El cuerpo como «pequeño mundo»</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          La idea maestra cabe en una palabra: <strong className="font-medium text-amber-200">correspondencia</strong>. Para los sabios
          medievales y del Renacimiento, el ser humano era un <em>microcosmos</em>, un universo en miniatura que reflejaba el gran
          <em> macrocosmos</em> del cielo. Lo que se jugaba allá arriba resonaba forzosamente aquí abajo, en la carne.
        </p>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Esta intuición no tenía nada de absurdo a la observación. El Sol regula las estaciones, y por tanto las fiebres y las
          cosechas. La <Link href="/planetes/lune">Luna</Link> gobierna las mareas: ¿por qué no, entonces, los «humores»
          líquidos del cuerpo? De este razonamiento analógico nace una medicina en la que el cielo sirve de <strong>calendario</strong> y de{" "}
          <strong>brújula</strong>.
        </p>
      </section>

      <Divider />

      {/* 2. LES HUMEURS */}
      <section className="space-y-6">
        <H2>2) Los cuatro humores, base de toda la medicina</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Antes de la astrología, hay una teoría médica: la de los <strong className="font-medium text-amber-200">humores</strong>,
          heredada de <strong className="text-white">Hipócrates</strong> (siglo V a. C.) y luego codificada por{" "}
          <strong className="text-white">Galeno</strong> en el siglo II. Según ella, la salud es el equilibrio de cuatro fluidos;
          la enfermedad, su desequilibrio. Todo el trabajo del médico consistía en <em>restablecer la balanza</em>.
        </p>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
          <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.04] md:grid-cols-3">
            <div className="p-4 text-xs font-semibold uppercase tracking-widest text-white/50">Humor</div>
            <div className="p-4 text-xs font-semibold uppercase tracking-widest text-white/50">Temperamento y elemento</div>
            <div className="p-4 text-xs font-semibold uppercase tracking-widest text-white/50">Cualidades asociadas</div>
          </div>
          <TableRow title="La sangre" effect="Sanguíneo — Aire" reading="Caliente y húmedo; jovial, sociable, ligado a Júpiter y a la primavera." />
          <TableRow title="La bilis amarilla" effect="Colérico — Fuego" reading="Caliente y seco; vivo, irritable, ligado a Marte y al verano." />
          <TableRow title="La bilis negra" effect="Melancólico — Tierra" reading="Frío y seco; pensativo, sombrío, ligado a Saturno y al otoño." />
          <TableRow title="La flema" effect="Flemático — Agua" reading="Frío y húmedo; tranquilo, lento, ligado a la Luna y al invierno." />
        </div>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Reconocemos ahí un vocabulario todavía vivo: decir de alguien que es «sanguíneo»,
          «flemático» o «melancólico» es hablar de humores sin saberlo. Es precisamente ahí donde
          la astrología se conecta con la medicina: cada planeta y cada signo portan las mismas{" "}
          <strong className="text-white">cualidades</strong> — caliente/frío, seco/húmedo — que los humores. El cielo se convierte en una rejilla
          de lectura del temperamento del paciente.
        </p>

        <Callout tone="note" title="El puente entre cielo y cuerpo">
          <p>
            Si Saturno es «frío y seco» como la bilis negra, entonces una carta marcada por Saturno señala un terreno{" "}
            <em>melancólico</em> que vigilar. El razonamiento no era «mágico»: aplicaba al cielo la misma
            física de las cualidades que regía, se creía, el cuerpo. Todo el sistema era coherente desde dentro.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* 3. L'HOMME ZODIACAL */}
      <section className="space-y-6">
        <H2>3) El hombre zodiacal: el cuerpo cartografiado por los signos</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          La imagen más célebre de esta medicina es el <strong className="font-medium text-amber-200">«hombre
          zodiacal»</strong> (<em>homo signorum</em>, el «hombre de los signos»). Se encuentra por todas partes: en los
          manuscritos iluminados, como las <em>Très Riches Heures del Duque de Berry</em>, y luego en los almanaques impresos vendidos por millares.
          El principio es simple y visual: cada signo gobierna una región del cuerpo, de arriba abajo.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="De la cabeza a los pies" subtitle="El zodiaco superpuesto a la anatomía.">
            <p>
              <strong className="text-white">Aries</strong> rige la cabeza, <strong className="text-white">Tauro</strong> la garganta,{" "}
              <strong className="text-white">Géminis</strong> los brazos y los pulmones, <strong className="text-white">Cáncer</strong> el
              pecho… y así sucesivamente hasta <strong className="text-white">Piscis</strong>, que gobierna los pies. El
              cuerpo entero quedaba así cubierto, signo tras signo.
            </p>
          </Card>

          <Card title="Un recordatorio, no un adorno" subtitle="Para qué servía realmente esta imagen.">
            <p>
              El hombre zodiacal era un <strong className="text-white">recordatorio práctico</strong>. La regla de oro:
              intervenir sobre una parte del cuerpo solo cuando la <Link href="/planetes/lune">Luna</Link> no atravesaba el signo
              que la gobierna. Se evitaba, por ejemplo, sangrar el brazo cuando la Luna estaba en Géminis.
            </p>
          </Card>
        </div>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Esta correspondencia signos-órganos sigue siendo la osamenta de la tradición. Se la encuentra, explicada en detalle, en el{" "}
          <Link href="/astrologie-medicale">dosier completo sobre la astrología médica</Link>, junto a los temperamentos y las
          casas llamadas «de la salud».
        </p>
      </section>

      <Divider />

      {/* 4. LE TIMING : LUNE, JOURS CRITIQUES, DÉCOMBITURE */}
      <section className="space-y-6">
        <H2>4) Elegir el momento adecuado: la Luna y los «días críticos»</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          El gran asunto de la astrología médica no era tanto el <em>qué</em> como el <em>cuándo</em>. Sangría, purga,
          administración de un remedio, recolección de plantas: cada gesto tenía su momento favorable, y la{" "}
          <strong className="font-medium text-amber-200">Luna</strong>, el astro más rápido, era su gran reguladora.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Los días críticos" subtitle="Heredados de Hipócrates, leídos en el cielo.">
            <p>
              Hipócrates ya había observado que las fiebres evolucionaban por etapas — los famosos <strong className="text-white">días
              críticos</strong>. Los médicos astrólogos los vincularon al ciclo lunar: como la Luna vuelve cada siete días aproximadamente
              a un aspecto mayor, veían en ello la clave de las fases de agravamiento o de mejora.
            </p>
          </Card>

          <Card title="La decumbitura" subtitle="Una carta para el instante en que se cae enfermo.">
            <p>
              Práctica más técnica, la <strong className="text-white">decumbitura</strong> consistía en levantar una carta del cielo para
              el momento exacto en que el paciente se acostaba (o para la toma de orina). En ella se buscaba el pronóstico: curación,
              recaída o desenlace grave. El médico inglés Nicholas Culpeper dejó, en el siglo XVII, ejemplos detallados.
            </p>
          </Card>
        </div>

        <Callout tone="note" title="Una medicina del calendario">
          <p>
            Se comprende mejor el atractivo del sistema: a falta de poder medir gran cosa, ofrecía al médico un{" "}
            <strong className="text-white">método</strong>, puntos de referencia temporales y un lenguaje común con el paciente. El cielo jugaba el
            papel que hoy tienen los protocolos y los análisis.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* 5. POURQUOI ÇA A DURÉ — ET LA RENAISSANCE */}
      <section className="space-y-6">
        <H2>5) Por qué el Renacimiento creyó en ella con tanta fuerza</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Lejos de retroceder, la astrología médica conoce su <strong className="font-medium text-amber-200">apogeo</strong> en los siglos XV y
          XVI. La imprenta difunde almanaques y calendarios de sangría a gran escala; las universidades — Bolonia, París,
          Montpellier — enseñan la astrología a los futuros médicos como una disciplina normal del plan de estudios.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Ficino y la melancolía">
            <p>
              En Florencia, <strong className="text-white">Marsilio Ficino</strong> escribe el <em>De vita</em>, manual de salud para los
              intelectuales «saturninos», en busca de remedios joviales y solares para el exceso de bilis negra.
            </p>
          </Card>
          <Card title="Paracelso, el iconoclasta">
            <p>
              <strong className="text-white">Paracelso</strong> sacude a Galeno pero conserva el cielo: para él, el médico debe conocer
              la astronomía tanto como la química de los remedios. El astro y el mineral se responden.
            </p>
          </Card>
          <Card title="Una obligación erudita">
            <p>
              Ciertas facultades exigían nociones de astrología para ejercer. Consultar el cielo no era marginal:
              era la <strong className="text-white">norma</strong> del médico letrado.
            </p>
          </Card>
        </div>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          ¿Por qué esa adhesión? Porque el sistema era <strong>coherente, enseñable y socialmente útil</strong>. Daba
          sentido a la enfermedad, tranquilizaba al enfermo, proporcionaba un pronóstico y conectaba el cuerpo con un orden cósmico compartido por
          toda la cultura de la época — teología, música y arquitectura incluidas.
        </p>
      </section>

      <Divider />

      {/* 6. LE DÉCLIN ET CE QU'ON EN GARDE */}
      <section className="space-y-6">
        <H2>6) El declive — y lo que queda de él</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          A partir del siglo XVII, todo cambia. El <strong className="font-medium text-amber-200">método experimental</strong>, el
          descubrimiento de la circulación de la sangre por Harvey, y luego el auge de la anatomía y de la química vuelven la teoría de los
          humores progresivamente insostenible. El cielo deja de ser un instrumento de cuidado para convertirse en un objeto de astronomía pura.
        </p>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Pero la herencia no se borra del todo. Sobrevive en la <strong>lengua</strong> (un carácter
          «lunático», «saturnino», «jovial»), en la <strong>historia de las ideas</strong>, y en
          el simbolismo que la astrología contemporánea sigue explorando — no para curar, sino para describir{" "}
          <em>temperamentos</em> y <em>terrenos</em> psicológicos.
        </p>

        <Callout tone="ok" title="Lo que la astrología médica puede (y no puede) iluminar hoy">
          <p>
            <strong className="text-white">Lo que ilumina:</strong> una historia apasionante, un vocabulario de los
            temperamentos, una rejilla simbólica que enlaza signos, planetas y partes del cuerpo.
          </p>
          <p>
            <strong className="text-white">Lo que no hace:</strong> diagnosticar, predecir una enfermedad u orientar un
            tratamiento. Para eso, un solo interlocutor — tu médico.
          </p>
        </Callout>
      </section>

      {/* RAPPEL FINAL */}
      <Callout tone="warn" title="Recordatorio">
        <p>
          Este relato es <strong className="text-white">histórico y simbólico</strong>. No constituye ni un diagnóstico, ni un consejo
          médico. Toda cuestión de salud corresponde a un <strong className="text-white">profesional de la salud</strong>: en caso de
          duda, consulta a un médico.
        </p>
      </Callout>

      {/* POUR ALLER PLUS LOIN */}
      <footer className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md sm:p-12">
        <H3>Para profundizar</H3>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Pill tone="yellow">Humores</Pill>
          <Pill tone="violet">Hombre zodiacal</Pill>
          <Pill tone="sky">Temperamentos</Pill>
          <Pill tone="orange">Tradición</Pill>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/astrologie-medicale"
            className="group relative inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-6 py-3 text-sm font-medium text-amber-100 backdrop-blur-md transition-all hover:border-amber-400/60 hover:bg-amber-400/20"
          >
            El dosier completo: astrología médica
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/blog/qu-est-ce-qu-un-theme-astral"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Comprender la carta natal
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="mt-12 grid gap-3 text-left sm:grid-cols-2 lg:grid-cols-3">
          <Link href="/astrologie-medicale" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Dosier</span>
            <span className="mt-1 block font-medium text-white/90">Astrología médica</span>
            <span className="mt-1 block text-xs text-white/60">Humores, temperamentos, hombre zodiacal</span>
          </Link>
          <Link href="/planetes/lune" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Planeta</span>
            <span className="mt-1 block font-medium text-white/90">La Luna</span>
            <span className="mt-1 block text-xs text-white/60">El astro del timing y de la flema</span>
          </Link>
          <Link href="/planetes/saturne" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Planeta</span>
            <span className="mt-1 block font-medium text-white/90">Saturno</span>
            <span className="mt-1 block text-xs text-white/60">El frío, lo seco, la melancolía</span>
          </Link>
          <Link href="/blog/saturnien" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Artículo</span>
            <span className="mt-1 block font-medium text-white/90">El tipo saturnino</span>
            <span className="mt-1 block text-xs text-white/60">Temperamento melancólico</span>
          </Link>
          <Link href="/blog/lunarien" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Artículo</span>
            <span className="mt-1 block font-medium text-white/90">El tipo lunariano</span>
            <span className="mt-1 block text-xs text-white/60">Temperamento flemático</span>
          </Link>
          <Link href="/signes" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Referencia</span>
            <span className="mt-1 block font-medium text-white/90">Los 12 signos</span>
            <span className="mt-1 block text-xs text-white/60">De Aries (la cabeza) a Piscis (los pies)</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}
