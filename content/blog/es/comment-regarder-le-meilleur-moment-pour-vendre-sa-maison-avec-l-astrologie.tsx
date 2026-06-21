import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import { AUTHOR_PERSON, PUBLISHER_ORG, SITE_URL } from "@/lib/seo";

export const meta = {
  slug: "vendre-une-maison-demenager-astrologie-methodes",
  title: "Venta de casa: ¿qué mirar en astrología?",
  description:
    "Guía seria para analizar una venta inmobiliaria o una mudanza: casas IV/VII/X, regentes, tránsitos, progresiones, desencadenantes, retrógrados",
  date: "2026-03-03",
  tags: ["immobilier", "déménagement", "transits", "maisons astrologiques", "méthode"],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/immobilier-demenagement.webp",
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
  title: string;
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
}: {
  a: string;
  b: string;
  c: string;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 border-b border-white/10 last:border-b-0">
      <div className="p-4 font-semibold text-text/90">{a}</div>
      <div className="p-4 text-text/85">{b}</div>
      <div className="p-4 text-text/85">{c}</div>
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
        inLanguage: "es",
        url: ARTICLE_URL,
        mainEntityOfPage: { "@type": "WebPage", "@id": ARTICLE_URL },
        author: AUTHOR_PERSON,
        publisher: PUBLISHER_ORG,
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
            name: "¿Se puede usar la astrología para vender una casa?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "La astrología no sustituye a un notario ni a un agente inmobiliario, pero puede ayudar a detectar períodos de cambio, comprender qué bloquea y elegir ventanas más fluidas para firmar o mudarse.",
            },
          },
          {
            "@type": "Question",
            name: "¿Qué casas astrológicas mirar para una mudanza?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Las casas clave son la IV (hogar, arraigo), la VII (contratos, negociación), la X (oficialización) y las II/VIII (finanzas, crédito, reparto). La IV es el corazón del tema inmobiliario.",
            },
          },
          {
            "@type": "Question",
            name: "¿Hay que evitar firmar durante Mercurio retrógrado?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Los retrógrados no impiden firmar, pero aumentan la probabilidad de retrasos o malentendidos. Si no tienes elección, compénsalo con más preparación, relectura y márgenes de tiempo.",
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
          <Kicker>Inmobiliario • Mudanza • Timing • Método</Kicker>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            <strong>Vender una casa con la astrología</strong>: ¿cómo
            detectar el buen momento para firmar, mudarse o emprender
            obras? En tu{" "}
            <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline decoration-white/30 hover:decoration-white/60 transition">carta natal</Link>,
            son las{" "}
            <Link href="/maisons/maison-4" className="underline decoration-white/30 hover:decoration-white/60 transition">casas IV</Link>, VII y X
            las que sostienen el tema inmobiliario.
          </p>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            ¿El problema? La mayoría de las guías astro se limitan a
            «evita Mercurio retrógrado» sin explicar dónde mirar
            ni cómo jerarquizar los indicadores.
          </p>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            Aquí, un método <strong>serio</strong> en 7 pasos: zonas
            clave de la carta, timing, retrógrados, casos concretos y una lista de control
            — sin prometer lo imposible.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <Pill tone="violet">Palabra clave: Transición</Pill>
            <Pill tone="orange">Riesgo: Retrasos</Pill>
            <Pill tone="emerald">Palanca: Timing + preparación</Pill>
            <Pill tone="sky">Nivel: intermedio</Pill>
          </div>

          <div className="mt-3">
            <TagPillsInline tags={meta.tags} />
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <Stat label="Tema" value="Venta / compra / mudanza" />
            <Stat label="Casas clave" value="IV, VII, X, II/VIII" />
            <Stat label="Pregunta clave" value="¿Qué lo desencadena + cuándo se concreta?" />
          </div>
        </div>
      </header>

      {/* DEFINITION BOX – Featured Snippet */}
      <aside className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6 leading-relaxed text-text/85">
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-emerald-400">Definición</p>
        <p>La <strong>astrología inmobiliaria</strong> utiliza los <Link href="/transits">tránsitos</Link> planetarios, la <Link href="/maisons/maison-4">casa IV</Link> (hogar, patrimonio) y la <Link href="/maisons/maison-2">casa II</Link> (finanzas) de la carta natal para identificar los períodos favorables a la venta de un inmueble.</p>
      </aside>

      {/* APP intro */}
      <p className="text-base leading-relaxed text-text/85 md:text-lg">
        ¿Quieres <strong>vender tu casa</strong> y te preguntas si la astrología puede ayudarte a elegir el buen momento? No es magia: los <strong>tránsitos planetarios</strong> sobre tus casas IV y II crean ventanas más o menos favorables a las transacciones inmobiliarias. Esta guía concreta te muestra dónde mirar en tu carta natal, qué tránsitos vigilar y cómo usar los ciclos planetarios a tu favor.
      </p>

      {/* 1) marco */}
      <section className="space-y-4">
        <H2>1) Astrología e inmobiliario: lo que la carta natal puede (y no puede) predecir</H2>

        <div className="rounded-2xl border border-white/10 bg-black/20 p-6 leading-relaxed text-text/85 space-y-3">
          <p>
            Una carta del cielo no sustituye a un banco, a un notario, ni a un mercado
            inmobiliario. En cambio, puede ayudar a:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>detectar <strong>períodos de cambio</strong> (transición, ruptura, nuevo ciclo)</li>
            <li>comprender <strong>qué bloquea</strong> (miedo, inercia, conflicto, limitación)</li>
            <li>elegir <strong>ventanas</strong> más fluidas para firmar, negociar, mudarse</li>
            <li>ajustar la estrategia: ritmo, comunicación, preparación</li>
          </ul>
        </div>

        <Callout tone="warn" title="Importante (de verdad)">
          <p>
            Si tu caso incluye una copropiedad, un conflicto o un procedimiento,
            el eje{" "}
            <Link href="/maisons/maison-7" className="underline decoration-white/30 hover:decoration-white/60 transition">VII</Link> / VIII (contratos / reparto) se vuelve central, pero el resultado
            depende también del derecho y de las pruebas. La astrología (como explica nuestro artículo sobre los{" "}
            <Link href="/blog/pleine-lune-nouvelle-lune-cycles-astrologie" className="underline decoration-white/30 hover:decoration-white/60 transition">ciclos lunares</Link>) ayuda a gestionar el{" "}
            <strong>timing</strong> y la <strong>actitud</strong>, no a sortear la realidad.
          </p>
        </Callout>
      </section>

      {/* 2) dónde mirar */}
      <section className="space-y-4">
        <H2>2) Casa IV y casa II: las zonas «&nbsp;inmobiliario&nbsp;» de tu carta</H2>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card title="Casa IV: casa, raíces, hogar" subtitle="El corazón del tema">
            <p>
              La IV describe el <strong>lugar de arraigo</strong>: hogar, familia,
              necesidad de seguridad, sentimiento de "mi hogar".
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>el signo en IV: tu estilo de vivienda (necesidad de calma, de espacio, de control, etc.)</li>
              <li>el regente de IV: dónde "se juega" la cuestión en la vida</li>
              <li>los planetas en IV: lo que carga el tema (obras, secretos, familia, mudanzas)</li>
            </ul>
          </Card>

          <Card title="Casa VII: contrato, negociación, comprador / agencia" subtitle="El cara a cara">
            <p>
              La VII = <strong>la otra parte</strong>: compradores, agencia, notario,
              excónyuge si hay copropiedad, y la lógica contractual.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>conflicto / cooperación:{" "}
              <Link href="/aspects" className="underline decoration-white/30 hover:decoration-white/60 transition">aspectos</Link> al regente de VII</li>
              <li>facilidad de firma: Venus / Júpiter vs Saturno / Marte</li>
              <li>si la relación es tensa: mirar Saturno, Marte, Plutón en aspectos</li>
            </ul>
          </Card>

          <Card title="Casa X: estatus, paso oficial, calendario" subtitle="Lo concreto / la administración">
            <p>
              La X marca la <strong>formalización</strong>: decisiones oficiales,
              citas, administraciones, etapas "visibles".
            </p>
            <p>
              Muy útil para el <strong>timing</strong> del acto / de los trámites.
            </p>
          </Card>

          <Card title="Casas II y VIII: dinero, reparto, crédito" subtitle="El nervio de la guerra">
            <p>
              II = tus recursos / tu margen. VIII = banco, deudas, crédito, reparto,
              indemnizaciones, copropiedad, herencia.
            </p>
            <p>
              Cuando se bloquea "sin razón", a menudo es aquí (condiciones, garantías,
              plazos, papeleo, banco).
            </p>
          </Card>
        </div>

        <Callout tone="note" title="Consejo sencillo">
          <p>
            Para una venta/mudanza, empieza por:{" "}
            <strong>IV (hogar) + VII (contrato) + X (oficialización)</strong>.
            Luego añade II/VIII si el dinero se vuelve central.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* 3) método timing */}
      <section className="space-y-4">
        <H2>3) Tránsitos y timing: cómo detectar el buen momento para vender</H2>

        <Card
          title="Método premium en 4 capas"
          subtitle="Superponemos: fondo → contexto → desencadenante → fecha práctica."
        >
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>El fondo</strong> (lentitud): Saturno / Urano / Plutón / Neptuno sobre IV/VII/X o sus regentes.
            </li>
            <li>
              <strong>El contexto</strong> (6–12 meses): progresiones / arcos solares (si los usas).
            </li>
            <li>
              <strong>El desencadenante</strong> (semanas):{" "}
            <Link href="/transits" className="underline decoration-white/30 hover:decoration-white/60 transition">tránsitos</Link>{" "}
            rápidos (Marte/Venus/Mercurio) sobre los puntos activados.
            </li>
            <li>
              <strong>La fecha práctica</strong>: elegir un momento "limpio" (papeleo ok, agenda ok, retrógrado gestionado).
            </li>
          </ol>

          <Callout tone="ok" title="Lo que funciona bien en timing">
            <p>
              Una venta se concreta a menudo cuando hay <strong>una doble señal</strong>:
              activación de IV/VII/X (una{" "}
              <Link href="/blog/conjonction-melange-des-forces" className="underline decoration-white/30 hover:decoration-white/60 transition">conjunción</Link>{" "}
              puede bastar) + un tránsito facilitador ({" "}
              <Link href="/blog/venus-en-signes-style-amoureux" className="underline decoration-white/30 hover:decoration-white/60 transition">Venus</Link>/Júpiter) o un tránsito de estructuración (Saturno).
            </p>
          </Callout>
        </Card>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-white/10">
            <div className="p-4 text-sm text-text/60">Señal</div>
            <div className="p-4 text-sm text-text/60">A menudo significa…</div>
            <div className="p-4 text-sm text-text/60">Acción concreta</div>
          </div>

          <Row
            a="Júpiter sobre IV/VII/X"
            b="apertura, oportunidades, facilidad de contacto"
            c="multiplicar visitas, hacer seguimiento, ampliar redes"
          />
          <Row
            a="Saturno sobre IV/VII/X"
            b="plazo, encuadre, responsabilidad, procedimientos"
            c="expediente sólido, paciencia, etapas notario/banco"
          />
          <Row
            a="Urano sobre IV"
            b="cambio rápido, necesidad de moverse"
            c="preparar plan B, flexibilidad, logística"
          />
          <Row
            a="Plutón sobre IV/VIII"
            b="transformación profunda, tensión, juegos de poder"
            c="clarificar, asegurar, evitar la guerra de egos"
          />
          <Row
            a="Mercurio retro (período)"
            b="documentos por revisar, retrasos, malentendidos"
            c="releer, verificar, firmar cuando todo está claro"
          />
        </div>
      </section>

      {/* 4) retrógrados */}
      <section className="space-y-4">
        <H2>4) <Link href="/retrogrades" className="underline decoration-white/30 hover:decoration-white/60 transition">Retrógrados</Link>: ¿hay que evitar firmar?</H2>

        <Card title="Enfoque realista (no supersticioso)" subtitle="No cundir el pánico. Se gestiona.">
          <p>
            Los retrógrados no "bloquean" por magia. Sobre todo aumentan la probabilidad de:
            <strong>retrasos</strong>, <strong>cambios de última hora</strong>,
            <strong>revisiones</strong> o <strong>malentendidos</strong>.
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Mercurio retro</strong>: contratos, intercambios, papeles → releer + verificar.</li>
            <li><strong>Venus retro</strong>: valores/precios/estética → renegociaciones, dudas.</li>
            <li><strong><Link href="/blog/mars-en-signes-desir-libido-action" className="underline decoration-white/30 hover:decoration-white/60 transition">Marte</Link> retro</strong>: energía/conflictos → tensiones, lentitud, fatiga.</li>
          </ul>

          <Callout tone="note" title="Regla pro">
            <p>
              Si no tienes elección (agenda del notario, banco), no pasa nada:
              lo compensas con <strong>más preparación</strong> y <strong>más margen</strong> (tiempo, cláusulas, relectura).
            </p>
          </Callout>
        </Card>
      </section>

      <Divider />

      {/* 5) casos frecuentes */}
      <section className="space-y-4">
        <H2>5) Las configuraciones astrológicas más frecuentes en la venta inmobiliaria</H2>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card title="Hay visitas pero no se firma" subtitle="El síntoma más común">
            <ul className="list-disc pl-5 space-y-2">
              <li>VII (otra parte) activada pero VIII (banco) en tensión</li>
              <li>Mercurio/Neptuno: vaguedad, falta de claridad, documentos incompletos</li>
              <li>Saturno: plazo, exigencias, etapas</li>
            </ul>
            <p>
              <strong>Acción:</strong> expediente impecable, fotos, diagnósticos, transparencia, seguimiento estructurado.
            </p>
          </Card>

          <Card title="Copropiedad / conflicto" subtitle="Se lee VII + VIII + Saturno/Marte/Plutón">
            <ul className="list-disc pl-5 space-y-2">
              <li>VII: la relación con el otro ({" "}
              <Link href="/synastrie" className="underline decoration-white/30 hover:decoration-white/60 transition">sinastría</Link> / pulso de fuerzas)</li>
              <li>VIII: reparto, crédito, notario, obligaciones</li>
              <li>Saturno/Marte/Plutón: rigidez, ira, control</li>
            </ul>
            <p>
              <strong>Acción:</strong> formalizar, documentar, reducir la emoción en el intercambio.
            </p>
          </Card>

          <Card title="Quiero mudarme, pero no lo consigo" subtitle="Urano/Neptuno = deseo; Saturno = realidad">
            <p>
              Urano da las ganas de moverse. Neptuno idealiza el "en otra parte".
              Saturno pide una estructura (presupuesto, trabajo, expediente, timing).
            </p>
            <p>
              <strong>Acción:</strong> transformar el deseo en un plan (ver también{" "}
            <Link href="/blog/comprendre-signe-astrologique-ascendant-12-exemples" className="underline decoration-white/30 hover:decoration-white/60 transition">signo y ascendente</Link>) (3 pasos + fechas + documentos).
            </p>
          </Card>

          <Card title="Obras / reforma" subtitle="IV + Marte + Saturno (y a veces Plutón)">
            <p>
              Marte: la obra, energía, imprevistos. Saturno: estructura, coste, retraso.
              Plutón: demolición/reconstrucción en sentido amplio.
            </p>
            <p>
              <strong>Acción:</strong> márgenes de tiempo/dinero, prioridades, presupuestos comparados.
            </p>
          </Card>
        </div>
      </section>

      {/* 6) checklist */}
      <section className="space-y-4">
        <H2>6) Lista de control astrológica antes de vender tu inmueble</H2>

        <Card title="Antes de buscar una fecha astrológica" subtitle="El timing funciona mejor cuando el expediente está 'limpio'.">
          <ul className="list-disc pl-5 space-y-2">
            <li>diagnósticos / documentos listos, coherentes, accesibles</li>
            <li>precio alineado con el mercado (comparables + margen de negociación)</li>
            <li>fotos + visita: una casa "legible" (orden, luz, olor, neutralidad)</li>
            <li>proceso de seguimiento (agencia / visitas / feedback)</li>
            <li>plan B (si hay retraso: alquiler, almacenamiento, calendario)</li>
          </ul>

          <Callout tone="ok" title="El punto clave">
            <p>
              En astrología aplicada, el "buen momento" no es una fecha mágica:
              es un período en el que <strong>se dan las condiciones</strong> + en el que el cielo es coherente con tu movimiento.
            </p>
          </Callout>
        </Card>
      </section>

      {/* 7) conclusión */}
      <section className="space-y-4">
        <H2>7) Síntesis: vender tu casa con la astrología</H2>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="p-5 border-b md:border-b-0 md:border-r border-white/10">
              <p className="text-sm text-text/60">El corazón</p>
              <p className="mt-2 font-semibold text-text/90">Casa IV</p>
              <p className="mt-2 text-text/80">
                El hogar: lo que debe moverse y por qué.
              </p>
            </div>

            <div className="p-5 border-b md:border-b-0 md:border-r border-white/10">
              <p className="text-sm text-text/60">La firma</p>
              <p className="mt-2 font-semibold text-text/90">Casas VII + X</p>
              <p className="mt-2 text-text/80">
                Contrato + oficialización: etapas, plazos, citas.
              </p>
            </div>

            <div className="p-5">
              <p className="text-sm text-text/60">El nervio</p>
              <p className="mt-2 font-semibold text-text/90">Casas II + VIII</p>
              <p className="mt-2 text-text/80">
                Banco, crédito, reparto: donde se congela… o se desbloquea. Consulta el{" "}
              <Link href="/dictionnaire-astrologique" className="underline decoration-white/30 hover:decoration-white/60 transition">diccionario astrológico</Link>{" "}
              para profundizar.
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
            Explora{" "}
            <Link href="/blog/finances-theme-astral" className="underline decoration-white/30 hover:decoration-white/60 transition font-semibold text-text/95">finanzas y carta natal</Link>{" "}
            o descubre{" "}
            <Link href="/blog/qualites-defauts-12-signes-zodiaque" className="underline decoration-white/30 hover:decoration-white/60 transition font-semibold text-text/95">virtudes y defectos de los 12 signos</Link>.
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
