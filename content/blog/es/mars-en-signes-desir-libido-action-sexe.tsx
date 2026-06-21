import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import { AUTHOR_PERSON, PUBLISHER_ORG, SITE_URL } from "@/lib/seo";

export const meta = {
  slug: "mars-en-signes-desir-libido-action",
  title: "Marte en los signos: deseo, libido, sexo, acción",
  description:
    "Entiende Marte en astrología: deseo, libido, energía, ira, forma de actuar y de llegar hasta el final. Fortalezas, trampas y consejos concretos.",
  date: "2026-01-10",
  tags: ["amour", "mars", "désir", "bases", "débutant"],
  readingLevel: "débutant" as const,
  cover: "/images/blog/mars-desir.webp",
};

const ARTICLE_SLUG = meta.slug;
const ARTICLE_URL = `${SITE_URL}/blog/${ARTICLE_SLUG}`;
const COVER_URL = `${SITE_URL}${meta.cover}`;

function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm text-text/65">
      <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
      {children}
    </span>
  );
}

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
      {children}
    </h2>
  );
}

function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-lg md:text-xl font-semibold tracking-tight leading-tight">
      {children}
    </h3>
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

  const emoji = tone === "warn" ? "⚠️" : tone === "ok" ? "✅" : "📌";

  return (
    <div className={`rounded-2xl border p-4 ${box}`}>
      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-text/90">
        <span>{emoji}</span>
        <span>{title}</span>
      </div>
      <div className="text-text/85 leading-relaxed space-y-2">{children}</div>
    </div>
  );
}

function Card({
  title,
  children,
  subtitle,
}: {
  title: ReactNode;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-white/10 bg-black/20 p-6 shadow-soft">
      <div>
        <H3>{title}</H3>
        {subtitle ? <p className="mt-1 text-sm text-text/60">{subtitle}</p> : null}
      </div>
      <div className="mt-4 space-y-3 text-text/85 leading-relaxed">{children}</div>
    </section>
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
  return <hr className="border-white/10" />;
}

function Row({
  a,
  b,
  c,
  d,
}: {
  a: string;
  b: string;
  c: string;
  d: string;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 border-b border-white/10 last:border-b-0">
      <div className="p-4 font-semibold text-text/90">{a}</div>
      <div className="p-4 text-text/85">{b}</div>
      <div className="p-4 text-text/85">{c}</div>
      <div className="p-4 text-text/85">{d}</div>
    </div>
  );
}

export default function Post() {
  const glow = getGlowFromTags(meta.tags);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: meta.title,
        description: meta.description,
        image: COVER_URL,
        datePublished: `${meta.date}T12:00:00Z`,
        dateModified: `${meta.date}T12:00:00Z`,
        url: ARTICLE_URL,
        mainEntityOfPage: { "@type": "WebPage", "@id": ARTICLE_URL },
        author: AUTHOR_PERSON,
        publisher: PUBLISHER_ORG,
        inLanguage: "es",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: meta.title, item: ARTICLE_URL },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Qué representa Marte en astrología?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Marte representa el deseo, el instinto, la libido, la ira y la manera en que pasamos a la acción. Es el planeta que muestra cómo ocupamos nuestro lugar y qué nos motiva.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cómo se lee Marte en una carta natal?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Se observa el signo (estilo de acción), la casa (área de vida implicada), los aspectos (fluidez o tensión), el estado directo o retrógrado, y la combinación con Venus para comprender la dinámica relacional.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cuál es la diferencia entre Marte y Venus en astrología?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Marte representa la manera en que deseamos y actuamos (impulso, conquista). Venus representa la manera en que amamos y atraemos (recepción, placer). Juntos forman la dinámica amorosa completa.",
            },
          },
          {
            "@type": "Question",
            name: "¿Influye Marte en la fidelidad en la pareja?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Marte muestra el impulso, no la fidelidad en sí. La madurez relacional depende de la carta en su conjunto (Saturno, Luna, aspectos). Marte revela cómo gestionamos la frustración, el conflicto y el deseo.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <div className="space-y-10">
      {/* HERO */}
      <header className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-7 shadow-soft">
        {/* glows */}
        <div aria-hidden="true" className={`pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl ${glow}`} />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

        {/* overlays */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-transparent" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        <div className="relative">
          <Kicker>Deseo • Sexualidad • Energía • Acción</Kicker>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            <strong>Marte en los signos</strong> es la clave para comprender qué
            te enciende, qué te enfada y cómo pasas a la acción en
            la cama y en la vida. En tu{" "}
            <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline decoration-white/30 hover:decoration-white/60 transition">carta natal</Link>,
            este planeta revela tu <strong>deseo</strong>, tu{" "}
            <strong>libido</strong>, tu valentía… y tus trampas relacionales.
          </p>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            ¿El problema? La mayoría de las descripciones de Marte se limitan a
            clichés (&laquo; Aries = agresivo &raquo;, &laquo; Escorpio = obsesionado &raquo;). Resultado:
            no te reconoces — y te pierdes lo esencial.
          </p>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            Aquí encontrarás una lectura <strong>honesta</strong> de Marte en
            cada signo: fortalezas reales, trampas concretas, estilo de seducción
            y dinámica sexual — sin filtro, sin juicio.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <Pill tone="violet">Palabra clave: Impulso</Pill>
            <Pill tone="orange">Riesgo: Conflicto</Pill>
            <Pill tone="emerald">Palanca: Dominio</Pill>
            <Pill tone="sky">Nivel: principiante</Pill>
          </div>

          <div className="mt-3">
            <TagPillsInline tags={meta.tags} />
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <Stat label="Planeta" value="Marte" />
            <Stat label="Lo que describe" value="Deseo + acción + libido" />
            <Stat label="Pregunta clave" value="¿Qué me enciende y me motiva?" />
          </div>
        </div>
      </header>

      {/* DEFINITION BOX — Featured Snippet */}
      <div className="rounded-2xl border border-red-400/20 bg-red-400/[0.04] px-6 py-5">
        <p className="text-sm font-semibold uppercase tracking-widest text-red-300/80">Definición</p>
        <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
          <strong>Marte en astrología</strong> gobierna el deseo, la libido, la energía de acción y el estilo sexual. Su posición por signo en tu <Link href="/blog/qu-est-ce-qu-un-theme-astral">carta natal</Link> revela cómo actúas, qué te pone en movimiento y tu relación con el deseo físico.
        </p>
      </div>

      {/* APP INTRO */}
      <p className="text-lg leading-relaxed text-text/85">
        ¿Crees que tu <strong>libido</strong> y tu energía de acción dependen de tu signo solar? Para nada. Es <strong><Link href="/planetes/mars">Marte</Link></strong> quien manda en el deseo, la combatividad y el estilo sexual de tu carta natal. Esta guía analiza Marte en los 12 signos: pulsiones, fortalezas, trampas y dinámica de pareja.
      </p>

      {/* 1) base */}
      <section className="space-y-4">
        <H2>1) Marte en astrología: ¿qué representa este planeta en tu carta?</H2>

        <div className="rounded-2xl border border-white/10 bg-black/20 p-6 leading-relaxed text-text/85 space-y-3">
          <p>
            Marte es tu <strong>motor</strong>. No es solo &ldquo;el
            sexo&rdquo;. También es:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>cómo deseas (atracción, excitación, instinto)</li>
            <li>cómo actúas (toma de iniciativa, valentía)</li>
            <li>cómo te defiendes (ira, conflicto, límites)</li>
            <li>cómo persigues lo que quieres (perseverancia)</li>
          </ul>
        </div>

        <Callout tone="note" title="Frase clave">
          <p>
            Marte = <strong>la manera en que tomas</strong>.{" "}
            <Link href="/blog/venus-en-signes-style-amoureux" className="underline decoration-white/30 hover:decoration-white/60 transition">Venus</Link> ={" "}
            <strong>la manera en que amas</strong>. Juntos dan
            tu dinámica relacional completa.
          </p>
        </Callout>
      </section>

      {/* 2) méthode */}
      <section className="space-y-4">
        <H2>2) Cómo interpretar Marte en tu carta natal</H2>

        <Card title="Método pro en 5 puntos" subtitle="Marte = energía. Así que observamos los hechos.">
          <ol className="list-decimal pl-5 space-y-2">
            <li>El <strong>signo</strong>: estilo de acción / deseo</li>
            <li>La <strong><Link href="/maisons/maison-1" className="underline decoration-white/30 hover:decoration-white/60 transition">casa</Link></strong>: dónde pones tu energía (zona de batalla)</li>
            <li>Los <strong><Link href="/aspects" className="underline decoration-white/30 hover:decoration-white/60 transition">aspectos</Link></strong>: control / exceso / bloqueo / fluidez</li>
            <li>El estado de Marte: directo o <Link href="/retrogrades" className="underline decoration-white/30 hover:decoration-white/60 transition">retrógrado</Link> (si es natal)</li>
            <li>Marte + Venus: atracción + placer = compatibilidad</li>
          </ol>

          <Callout tone="ok" title="Lectura madura">
            <p>
              Marte sano = <strong>afirmación</strong>. Marte tóxico ={" "}
              <strong>dominación</strong>. No es el signo lo que es &ldquo;bueno&rdquo;
              o &ldquo;malo&rdquo;, es el nivel de conciencia.
            </p>
          </Callout>
        </Card>
      </section>

      <Divider />

      {/* 3) tableau rapide */}
      <section className="space-y-4">
        <H2>3) <Link href="/planetes/mars" className="underline decoration-white/30 hover:decoration-white/60 transition">Marte</Link> en los signos: lectura rápida</H2>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <div className="grid grid-cols-1 md:grid-cols-4 border-b border-white/10">
            <div className="p-4 text-sm text-text/60">Marte en…</div>
            <div className="p-4 text-sm text-text/60">Estilo</div>
            <div className="p-4 text-sm text-text/60">Excitación / deseo</div>
            <div className="p-4 text-sm text-text/60">Trampa</div>
          </div>

          <Row a="Aries" b="directo, rápido" c="desafío, conquista" d="impulsividad" />
          <Row a="Tauro" b="lento, constante" c="sensaciones, cuerpo" d="inercia / celos" />
          <Row a="Géminis" b="mental, juguetón" c="juego, palabras, humor" d="dispersión" />
          <Row a="Cáncer" b="protector" c="seguridad emocional" d="pasivo-agresivo" />
          <Row a="Leo" b="orgulloso, solar" c="admiración, pasión" d="ego / control" />
          <Row a="Virgo" b="preciso, útil" c="limpieza, dominio" d="perfeccionismo" />
          <Row a="Libra" b="seductor, con tacto" c="armonía, estética" d="indecisión" />
          <Row a="Escorpio" b="intenso, total" c="fusión, tabú" d="obsesión" />
          <Row a="Sagitario" b="libre, espontáneo" c="aventura, novedad" d="huida" />
          <Row a="Capricornio" b="resistente" c="control, respeto" d="dureza" />
          <Row a="Acuario" b="original" c="diferencia, mental" d="desapego" />
          <Row a="Piscis" b="fluido" c="fantasía, imaginación" d="vaguedad / huida" />
        </div>

        <Callout tone="note" title="Truco para leer rápido">
          <p>
            Para Marte, pregúntate:{" "}
            <strong>&ldquo;¿Cómo consigo lo que quiero?&rdquo;</strong>{" "}
            Suele ser el mejor resumen del signo.
          </p>
        </Callout>
      </section>

      {/* 4) interprétations détaillées */}
      <section className="space-y-4">
        <H2>4) Los 12 Marte (deseo + acción + estilo sexual)</H2>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card title={<>Marte en <Link href="/signes/belier" className="underline decoration-white/30 hover:decoration-white/60 transition">Aries</Link></>} subtitle="deseo rápido, instinto puro">
            <p><strong>Firma:</strong> quiero, tomo, voy.</p>
            <p><strong>Ventaja:</strong> valentía, sexualidad directa.</p>
            <p><strong>Trampa:</strong> actuar antes de sentir.</p>
            <p><strong>Consejo:</strong> aprender a frenar para durar.</p>
          </Card>

          <Card title={<>Marte en <Link href="/signes/taureau" className="underline decoration-white/30 hover:decoration-white/60 transition">Tauro</Link></>} subtitle="deseo constante, muy sensual">
            <p><strong>Firma:</strong> construyo el placer.</p>
            <p><strong>Ventaja:</strong> resistencia, sensualidad fuerte.</p>
            <p><strong>Trampa:</strong> rigidez / posesividad.</p>
            <p><strong>Consejo:</strong> mover el cuerpo (deporte, baile) para liberar la energía.</p>
          </Card>

          <Card title="Marte en Géminis" subtitle="deseo mental, excitación por el juego">
            <p><strong>Firma:</strong> quiero comprender y jugar.</p>
            <p><strong>Ventaja:</strong> coqueteo, creatividad.</p>
            <p><strong>Trampa:</strong> aburrirse rápido.</p>
            <p><strong>Consejo:</strong> la profundidad = también una forma de diversión (cuando te atreves).</p>
          </Card>

          <Card title="Marte en Cáncer" subtitle="deseo protector, emocional">
            <p><strong>Firma:</strong> quiero cuando me siento seguro.</p>
            <p><strong>Ventaja:</strong> gran ternura, lealtad.</p>
            <p><strong>Trampa:</strong> ira reprimida.</p>
            <p><strong>Consejo:</strong> decir las cosas antes de estallar.</p>
          </Card>

          <Card title="Marte en Leo" subtitle="deseo flamante">
            <p><strong>Firma:</strong> quiero brillar y ser elegido.</p>
            <p><strong>Ventaja:</strong> pasión, generosidad.</p>
            <p><strong>Trampa:</strong> ego, pruebas.</p>
            <p><strong>Consejo:</strong> amar sin &ldquo;poner en escena&rdquo; la relación.</p>
          </Card>

          <Card title="Marte en Virgo" subtitle="deseo controlado, preciso">
            <p><strong>Firma:</strong> quiero hacerlo bien.</p>
            <p><strong>Ventaja:</strong> atención al detalle, constancia.</p>
            <p><strong>Trampa:</strong> bloqueo / juicio.</p>
            <p><strong>Consejo:</strong> soltar: el deseo no es un rendimiento.</p>
          </Card>

          <Card title="Marte en Libra" subtitle="deseo a través del encanto">
            <p><strong>Firma:</strong> quiero seducir sin brutalidad.</p>
            <p><strong>Ventaja:</strong> tacto, estética.</p>
            <p><strong>Trampa:</strong> no atreverse a pedir.</p>
            <p><strong>Consejo:</strong> expresar claramente tus deseos.</p>
          </Card>

          <Card title={<>Marte en <Link href="/signes/scorpion" className="underline decoration-white/30 hover:decoration-white/60 transition">Escorpio</Link></>} subtitle="deseo total, magnético">
            <p><strong>Firma:</strong> lo quiero todo, no la mitad.</p>
            <p><strong>Ventaja:</strong> intensidad sexual, transformación.</p>
            <p><strong>Trampa:</strong> obsesión / dominación.</p>
            <p><strong>Consejo:</strong> reemplazar el control por la confianza.</p>
          </Card>

          <Card title="Marte en Sagitario" subtitle="deseo libre, aventurero">
            <p><strong>Firma:</strong> quiero explorar.</p>
            <p><strong>Ventaja:</strong> espontaneidad, humor.</p>
            <p><strong>Trampa:</strong> huida si se vuelve pesado.</p>
            <p><strong>Consejo:</strong> libertad ≠ ausencia de compromiso (se pueden tener ambos).</p>
          </Card>

          <Card title={<>Marte en <Link href="/signes/capricorne" className="underline decoration-white/30 hover:decoration-white/60 transition">Capricornio</Link></>} subtitle="deseo disciplinado, poderoso">
            <p><strong>Firma:</strong> quiero dominar y triunfar.</p>
            <p><strong>Ventaja:</strong> resistencia, eficacia.</p>
            <p><strong>Trampa:</strong> dureza / cierre emocional.</p>
            <p><strong>Consejo:</strong> permítete el placer sin &ldquo;merecerlo&rdquo;.</p>
          </Card>

          <Card title="Marte en Acuario" subtitle="deseo original, mental">
            <p><strong>Firma:</strong> lo quiero de otra manera.</p>
            <p><strong>Ventaja:</strong> sorpresa, apertura.</p>
            <p><strong>Trampa:</strong> distancia / frialdad.</p>
            <p><strong>Consejo:</strong> atreverse a la intimidad (no solo al concepto).</p>
          </Card>

          <Card title="Marte en Piscis" subtitle="deseo imaginario, fusional">
            <p><strong>Firma:</strong> quiero sentir.</p>
            <p><strong>Ventaja:</strong> sensualidad sutil, fantasía rica.</p>
            <p><strong>Trampa:</strong> vaguedad, huida.</p>
            <p><strong>Consejo:</strong> decir claramente tus límites y tus deseos.</p>
          </Card>
        </div>
      </section>

      <Divider />

      {/* 5) compatibilité */}
      <section className="space-y-4">
        <H2>5) Marte en pareja: lo que de verdad cambia</H2>

        <Card title="Lo que Marte muestra en la relación" subtitle="Muy concreto. Muy observable.">
          <ul className="list-disc pl-5 space-y-2">
            <li>cómo gestionas la frustración</li>
            <li>cómo reaccionas ante el conflicto</li>
            <li>cómo expresas el deseo</li>
            <li>qué te vuelve irresistible / qué te enfría</li>
          </ul>

          <Callout tone="warn" title="La trampa clásica">
            <p>
              Creer que Marte = &ldquo;eres fiel / no eres fiel&rdquo;.{" "}
              Marte es el <strong>impulso</strong>. La madurez depende de tu carta en su conjunto (Saturno, Luna,{" "}
            <Link href="/blog/conjonction-melange-des-forces" className="underline decoration-white/30 hover:decoration-white/60 transition">conjunciones</Link>…).
            </p>
          </Callout>
        </Card>

        <Callout tone="ok" title="Combo ganador">
          <p>
            Lo que de verdad funciona: <strong>Venus + Marte</strong>.
            Venus te dice qué llamas &ldquo;amor&rdquo;. Marte te dice qué llamas &ldquo;deseo&rdquo;.
            Si los dos no hablan el mismo idioma, sientes que te &ldquo;falta algo&rdquo;.
            Para comprender esta alquimia entre dos personas, mira la{" "}
            <Link href="/synastrie" className="underline decoration-white/30 hover:decoration-white/60 transition">sinastría</Link>.
          </p>
        </Callout>
      </section>

      {/* 6) résumé */}
      <section className="space-y-4">
        <H2>6) Lo esencial sobre Marte en los signos</H2>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="p-5 border-b md:border-b-0 md:border-r border-white/10">
              <p className="text-sm text-text/60">Esencia</p>
              <p className="mt-2 font-semibold text-text/90">Deseo / Acción</p>
              <p className="mt-2 text-text/80">
                Marte muestra tu motor: lo que te hace moverte, querer, atreverte. Consulta el{" "}
              <Link href="/dictionnaire-astrologique" className="underline decoration-white/30 hover:decoration-white/60 transition">diccionario astrológico</Link>{" "}
              para profundizar.
              </p>
            </div>

            <div className="p-5 border-b md:border-b-0 md:border-r border-white/10">
              <p className="text-sm text-text/60">Riesgo</p>
              <p className="mt-2 font-semibold text-text/90">Conflicto</p>
              <p className="mt-2 text-text/80">
                Impulsividad, dominación, ira mal gestionada, huida. Lee también{" "}
              <Link href="/blog/qualites-defauts-12-signes-zodiaque" className="underline decoration-white/30 hover:decoration-white/60 transition">cualidades y defectos de los 12 signos</Link>.
              </p>
            </div>

            <div className="p-5">
              <p className="text-sm text-text/60">Palanca</p>
              <p className="mt-2 font-semibold text-text/90">Dominio</p>
              <p className="mt-2 text-text/80">
                Canalizar la energía → deseo estable + acción eficaz. Sigue tus{" "}
              <Link href="/transits" className="underline decoration-white/30 hover:decoration-white/60 transition">tránsitos</Link>{" "}
              para saber cuándo actuar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-white/10 bg-black/20 p-6">
        <p className="text-sm text-text/60">Sigue leyendo</p>
        <div className="mt-3 space-y-2 text-text/85">
          <p>
            Descubre{" "}
            <Link href="/blog/amour-fidelite-signes-zodiaque" className="underline decoration-white/30 hover:decoration-white/60 transition font-semibold text-text/95">amor y fidelidad según los signos</Link>{" "}
            o explora{" "}
            <Link href="/blog/martien" className="underline decoration-white/30 hover:decoration-white/60 transition font-semibold text-text/95">el perfil Marciano</Link>{" "}
            para comprender mejor la energía de Marte en el día a día.
          </p>
        </div>
        <div className="mt-4">
          <Link
            href="/blog"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-text/90 hover:bg-white/10 transition"
          >
            ← Todos los artículos
          </Link>
        </div>
      </section>
    </div>
    </>
  );
}
