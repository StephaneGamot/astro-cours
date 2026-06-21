import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import { AUTHOR_PERSON, PUBLISHER_ORG, SITE_URL } from "@/lib/seo";

export const meta = {
  slug: "venus-en-signes-style-amoureux",
  title: "Venus en los signos: tu estilo amoroso",
  description:
    "Entiende Venus en astrología: estilo amoroso, necesidad afectiva, forma de seducir y lenguaje del amor. Fortalezas y trampas, signo por signo.",
  date: "2026-01-08",
  tags: ["amour", "Vénus", "bases", "débutant"],
  readingLevel: "débutant" as const,
  cover: "/images/blog/cupidon.webp",
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
            name: "¿Qué representa Venus en astrología?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Venus representa el estilo amoroso, la manera de seducir, los valores afectivos y lo que consideramos amor. Describe cómo amamos, no con quién terminamos.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cómo se lee Venus en una carta natal?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Se observa el signo (estilo amoroso), la casa (ámbito de vida), los aspectos (facilidad o tensión) y la combinación Venus-Marte para comprender la dinámica amor-deseo.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cuál es la diferencia entre Venus y Marte en el amor?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Venus describe lo que llamamos amor (recepción, placer, valores). Marte describe lo que llamamos deseo (impulso, conquista, acción). Juntos forman la dinámica relacional completa.",
            },
          },
          {
            "@type": "Question",
            name: "¿Determina Venus la fidelidad?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Venus muestra el estilo amoroso y las necesidades afectivas, no la fidelidad en sí. La fidelidad depende de la carta en su conjunto, en especial Saturno, la Luna y los aspectos.",
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
        <div aria-hidden="true" className={`pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl ${glow}`} />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-transparent" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        <div className="relative">
          <Kicker>Amor • Seducción • Relaciones • Lectura concreta</Kicker>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            <strong>Venus en los signos</strong> revela cómo amas, qué te
            seduce y qué llamas &laquo; amor &raquo;. En tu{" "}
            <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline decoration-white/30 hover:decoration-white/60 transition">carta natal</Link>,
            este planeta describe tu <strong>estilo afectivo</strong>, tu
            manera de seducir y el tipo de relación que de verdad te nutre.
          </p>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            ¿El problema? A menudo reducimos Venus a &laquo; eres
            romántico &raquo; o &laquo; eres fiel &raquo;. En realidad, responde a una
            pregunta mucho más profunda: <strong>¿qué consideras
            que es el amor?</strong>
          </p>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            Aquí: una lectura signo por signo <strong>sin clichés</strong>, con
            fortalezas, trampas y consejos concretos para comprender (por fin) tu
            lenguaje amoroso.
          </p>

<div className="mt-5 flex flex-wrap gap-2">
            <Pill tone="violet">Palabra clave: Valores</Pill>
            <Pill tone="orange">Riesgo: Proyección</Pill>
            <Pill tone="emerald">Palanca: Relación madura</Pill>
            <Pill tone="sky">Nivel: principiante</Pill>
          </div>

          <div className="mt-3">
            <TagPillsInline tags={meta.tags} />
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <Stat label="Planeta" value="Venus" />
            <Stat label="Lo que describe" value="Estilo amoroso + seducción" />
            <Stat label="Pregunta clave" value="¿Qué me hace decir SÍ?" />
          </div>
        </div>
      </header>

      {/* DEFINITION BOX — Featured Snippet */}
      <div className="rounded-2xl border border-rose-400/20 bg-rose-400/[0.04] px-6 py-5">
        <p className="text-sm font-semibold uppercase tracking-widest text-rose-300/80">Definición</p>
        <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
          <strong>Venus en astrología</strong> representa el estilo amoroso, las necesidades afectivas y la manera de seducir. Su posición por signo en tu <Link href="/blog/qu-est-ce-qu-un-theme-astral">carta natal</Link> revela cómo amas, qué buscas en una relación y tu lenguaje del amor natural.
        </p>
      </div>

      {/* APP INTRO */}
      <p className="text-lg leading-relaxed text-text/85">
        ¿Todavía confundes tu <strong>signo solar</strong> con tu estilo amoroso? Error clásico. Es <strong><Link href="/planetes/venus">Venus</Link></strong> quien dicta tus necesidades afectivas, tu forma de seducir y tu lenguaje del amor — no el Sol. Esta guía descifra Venus en los 12 signos con interpretación, fortalezas, trampas y consejos concretos.
      </p>

      {/* 1) base */}
      <section className="space-y-4">
        <H2>1) Venus en astrología: ¿qué representa en tu carta?</H2>

        <div className="rounded-2xl border border-white/10 bg-black/20 p-6 leading-relaxed text-text/85 space-y-3">
          <p>
            Venus representa tu <strong>relación con el placer</strong>, con el amor,
            con la belleza y con el vínculo. Describe:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>tu manera de seducir (o de atraer)</li>
            <li>lo que te da confianza en el amor</li>
            <li>tus gustos, tus valores, tu necesidad de armonía</li>
            <li>el tipo de relación que te nutre</li>
          </ul>
        </div>

        <Callout tone="note" title="Sin clichés">
          <p>
            Venus no dice &ldquo;eres romántico&rdquo; o &ldquo;eres fiel&rdquo;. Dice:
            <strong>qué consideras que es el amor</strong>.
          </p>
        </Callout>
      </section>

      {/* 2) méthode */}
      <section className="space-y-4">
        <H2>2) Cómo interpretar Venus en tu carta natal</H2>

        <Card title="Lectura pro en 4 puntos" subtitle="Simple, pero extremadamente fiable.">
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong>Signo</strong> = el estilo (cómo amas)</li>
            <li><strong><Link href="/maisons/maison-1" className="underline decoration-white/30 hover:decoration-white/60 transition">Casa</Link></strong> = el ámbito de vida (dónde vives el amor)</li>
            <li><strong><Link href="/aspects" className="underline decoration-white/30 hover:decoration-white/60 transition">Aspectos</Link></strong> = facilidad / tensión / repeticiones</li>
            <li><strong>Venus + <Link href="/blog/mars-en-signes-desir-libido-action" className="underline decoration-white/30 hover:decoration-white/60 transition">Marte</Link></strong> = amor + deseo (combo indispensable)</li>
          </ol>

          <Callout tone="ok" title="Regla de oro">
            <p>
              Puedes tener una Venus muy dulce… pero aspectos muy duros.
              Por eso: <strong>el signo da el color</strong>, los aspectos dan la realidad.
            </p>
          </Callout>
        </Card>
      </section>

      <Divider />

      {/* 3) tableau signes */}
      <section className="space-y-4">
        <H2>3) Venus en los signos: tu estilo amoroso descifrado</H2>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <div className="grid grid-cols-1 md:grid-cols-4 border-b border-white/10 display-none lg:display-grid">
            <div className="p-4 text-sm text-text/60">Venus en…</div>
            <div className="p-4 text-sm text-text/60">Estilo</div>
            <div className="p-4 text-sm text-text/60">Necesidad</div>
            <div className="p-4 text-sm text-text/60">Trampa</div>
          </div>

          <Row a="Aries" b="directo, espontáneo" c="emoción, deseo" d="aburrirse rápido" />
          <Row a="Tauro" b="sensual, estable" c="seguridad, constancia" d="posesión" />
          <Row a="Géminis" b="ligero, curioso" c="intercambio, humor" d="inconstancia" />
          <Row a="Cáncer" b="protector, tierno" c="apego, hogar" d="dependencia" />
          <Row a="Leo" b="cálido, orgulloso" c="admiración, lealtad" d="ego / drama" />
          <Row a="Virgo" b="discreto, útil" c="prueba concreta" d="crítica, reserva" />
          <Row a="Libra" b="armonioso, social" c="pareja, elegancia" d="evitar el conflicto" />
          <Row a="Escorpio" b="fusional, intenso" c="verdad, profundidad" d="control" />
          <Row a="Sagitario" b="libre, entusiasta" c="aventura, sentido" d="miedo al compromiso" />
          <Row a="Capricornio" b="serio, leal" c="duración, respeto" d="frialdad / prudencia" />
          <Row a="Acuario" b="diferente, mental" c="libertad, amistad" d="distancia" />
          <Row a="Piscis" b="romántico, inspirado" c="alma, conexión" d="ilusión / rescate" />
        </div>

        <Callout tone="note" title="Ultra importante">
          <p>
            El signo da el <strong>estilo</strong> (explora las{" "}
            <Link href="/blog/qualites-defauts-12-signes-zodiaque" className="underline decoration-white/30 hover:decoration-white/60 transition">cualidades y defectos de los 12 signos</Link>) pero la casa indica el &ldquo;terreno&rdquo;.
            Por ejemplo: Venus en Escorpio <strong><Link href="/maisons/maison-10" className="underline decoration-white/30 hover:decoration-white/60 transition">Casa 10</Link></strong>: relaciones + estatus / imagen.
          </p>
        </Callout>
      </section>

      {/* 4) interprétations */}
      <section className="space-y-4">
        <H2>4) Las 12 Venus (interpretación + consejos)</H2>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card title={<>Venus en <Link href="/signes/belier" className="underline decoration-white/30 hover:decoration-white/60 transition">Aries</Link></>} subtitle="ama rápido, ama fuerte">
            <p><strong>Firma:</strong> amor = deseo + movimiento.</p>
            <p><strong>Ventaja:</strong> franqueza, pasión.</p>
            <p><strong>Trampa:</strong> confundir excitación con amor.</p>
            <p><strong>Consejo:</strong> elegir a alguien que siga el ritmo, sin drama.</p>
          </Card>

          <Card title={<>Venus en <Link href="/signes/taureau" className="underline decoration-white/30 hover:decoration-white/60 transition">Tauro</Link></>} subtitle="ama con el cuerpo y la estabilidad">
            <p><strong>Firma:</strong> amor = seguridad + sensualidad.</p>
            <p><strong>Ventaja:</strong> fidelidad, paciencia.</p>
            <p><strong>Trampa:</strong> posesividad.</p>
            <p><strong>Consejo:</strong> nutrir el vínculo con rituales sencillos.</p>
          </Card>

          <Card title="Venus en Géminis" subtitle="ama con la mente">
            <p><strong>Firma:</strong> amor = intercambio.</p>
            <p><strong>Ventaja:</strong> ligereza, humor.</p>
            <p><strong>Trampa:</strong> huir de la profundidad.</p>
            <p><strong>Consejo:</strong> aprender a quedarse cuando se pone serio.</p>
          </Card>

          <Card title="Venus en Cáncer" subtitle="ama cuidando">
            <p><strong>Firma:</strong> amor = apego.</p>
            <p><strong>Ventaja:</strong> ternura, devoción.</p>
            <p><strong>Trampa:</strong> dependencia / miedo al abandono.</p>
            <p><strong>Consejo:</strong> asegurar primero el interior, luego la relación.</p>
          </Card>

          <Card title="Venus en Leo" subtitle="ama a lo grande">
            <p><strong>Firma:</strong> amor = orgullo + calidez.</p>
            <p><strong>Ventaja:</strong> lealtad, generosidad.</p>
            <p><strong>Trampa:</strong> necesidad de admiración constante.</p>
            <p><strong>Consejo:</strong> amar sin poner a prueba al otro.</p>
          </Card>

          <Card title="Venus en Virgo" subtitle="ama con discreción">
            <p><strong>Firma:</strong> amor = utilidad + fiabilidad.</p>
            <p><strong>Ventaja:</strong> atención al detalle.</p>
            <p><strong>Trampa:</strong> analizar demasiado.</p>
            <p><strong>Consejo:</strong> decir lo que sientes, no solo lo que haces.</p>
          </Card>

          <Card title="Venus en Libra" subtitle="ama la belleza de la pareja">
            <p><strong>Firma:</strong> amor = dúo.</p>
            <p><strong>Ventaja:</strong> diplomacia.</p>
            <p><strong>Trampa:</strong> perderse en el otro.</p>
            <p><strong>Consejo:</strong> aprender a elegir aunque desagrade.</p>
          </Card>

          <Card title={<>Venus en <Link href="/signes/scorpion" className="underline decoration-white/30 hover:decoration-white/60 transition">Escorpio</Link></>} subtitle="ama en profundidad">
            <p><strong>Firma:</strong> amor = verdad + fusión.</p>
            <p><strong>Ventaja:</strong> magnetismo.</p>
            <p><strong>Trampa:</strong> celos / control.</p>
            <p><strong>Consejo:</strong> reemplazar el control por la transparencia.</p>
          </Card>

          <Card title="Venus en Sagitario" subtitle="ama con libertad">
            <p><strong>Firma:</strong> amor = aventura.</p>
            <p><strong>Ventaja:</strong> entusiasmo.</p>
            <p><strong>Trampa:</strong> miedo al encierro.</p>
            <p><strong>Consejo:</strong> una pareja no es una prisión si el espacio es claro.</p>
          </Card>

          <Card title="Venus en Capricornio" subtitle="ama en serio">
            <p><strong>Firma:</strong> amor = duración.</p>
            <p><strong>Ventaja:</strong> estabilidad.</p>
            <p><strong>Trampa:</strong> pudor excesivo.</p>
            <p><strong>Consejo:</strong> expresar el afecto sin esperar a estar &ldquo;seguro&rdquo;.</p>
          </Card>

          <Card title="Venus en Acuario" subtitle="ama de otra manera">
            <p><strong>Firma:</strong> amor = amistad + libertad.</p>
            <p><strong>Ventaja:</strong> modernidad, apertura.</p>
            <p><strong>Trampa:</strong> distancia emocional.</p>
            <p><strong>Consejo:</strong> seguir siendo original sin evitar la intimidad.</p>
          </Card>

          <Card title={<>Venus en <Link href="/signes/poissons" className="underline decoration-white/30 hover:decoration-white/60 transition">Piscis</Link></>} subtitle="ama el alma">
            <p><strong>Firma:</strong> amor = magia.</p>
            <p><strong>Ventaja:</strong> romanticismo, compasión.</p>
            <p><strong>Trampa:</strong> ilusión / rescate.</p>
            <p><strong>Consejo:</strong> distinguir el amor del guion.</p>
          </Card>
        </div>
      </section>

      {/* 5) conclusion */}
      <section className="space-y-4">
        <H2>5) Lo esencial sobre Venus en los signos</H2>

        <Callout tone="ok" title="Lo que Venus dice de verdad">
          <p>
            Venus describe tu <strong>lenguaje del amor</strong>. Cuando lo entiendes,
            dejas de buscar &ldquo;a la persona correcta&rdquo; y comprendes cómo
            <strong>construyes una relación estable</strong>. Sigue tus{" "}
            <Link href="/transits" className="underline decoration-white/30 hover:decoration-white/60 transition">tránsitos</Link>{" "}
            para comprender los periodos clave, y para ir más
            lejos, explora la{" "}
            <Link href="/synastrie" className="underline decoration-white/30 hover:decoration-white/60 transition">sinastría</Link>{" "}
            (compatibilidad entre dos cartas) o consulta el{" "}
            <Link href="/dictionnaire-astrologique" className="underline decoration-white/30 hover:decoration-white/60 transition">diccionario astrológico</Link>.
          </p>
        </Callout>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-white/10 bg-black/20 p-6">
        <p className="text-sm text-text/60">Sigue leyendo</p>
        <div className="mt-3 space-y-2 text-text/85">
          <p>
            Descubre{" "}
            <Link href="/blog/amour-fidelite-signes-zodiaque" className="underline decoration-white/30 hover:decoration-white/60 transition font-semibold text-text/95">amor y fidelidad según los signos</Link>{" "}
            o lee{" "}
            <Link href="/blog/venusien" className="underline decoration-white/30 hover:decoration-white/60 transition font-semibold text-text/95">el perfil Venusino</Link>{" "}
            para comprender la energía de Venus en el día a día.
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
