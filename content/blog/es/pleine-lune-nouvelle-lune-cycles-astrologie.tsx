import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import { AUTHOR_PERSON, PUBLISHER_ORG, SITE_URL } from "@/lib/seo";

export const meta = {
  slug: "pleine-lune-nouvelle-lune-cycles-astrologie",
  title: "Luna Llena y Luna Nueva: Los Ciclos Lunares",
  description:
    "Luna Nueva y Luna Llena en astrología: emociones, ciclos, intenciones, liberación, sueño, hipersensibilidad. Un método simple y concreto.",
  date: "2026-02-07",
  tags: ["lune", "émotions", "cycles", "bases", "débutant"],
  readingLevel: "débutant" as const,
  cover: "/images/blog/lune-cycles.jpg",
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
            name: "¿Cuál es la diferencia entre Luna Nueva y Luna Llena?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "La Luna Nueva es una fase de introspección e intención. La Luna Llena es una fase de revelación y liberación. Juntas forman un ciclo de 29 días.",
            },
          },
          {
            "@type": "Question",
            name: "¿Por qué nos sentimos raros durante la Luna Llena?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "La Luna Llena actúa como un amplificador emocional: sueño más ligero, hipersensibilidad, irritabilidad. No crea el problema, sube el volumen de lo que ya estaba presente.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cómo usar los ciclos lunares en el día a día?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "En la Luna Nueva, escribe una intención clara y da un micropaso concreto. En la Luna Llena, libera lo que te pesa: un hábito, un no dicho, carga mental.",
            },
          },
          {
            "@type": "Question",
            name: "¿La Luna influye realmente en las emociones?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "En astrología, la Luna representa el clima interior: emociones profundas, reactividad instintiva, necesidad de seguridad. Las fases lunares ofrecen un ritmo natural para observar y canalizar las emociones.",
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
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl ${glow}`}
        />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

        {/* overlays */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-transparent" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        <div className="relative">
          <Kicker>Emociones • Ciclos • Intuición • Energía interior</Kicker>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            La <strong>Luna Llena</strong> y la <strong>Luna Nueva</strong>{" "}
            marcan el ritmo de tu energía emocional cada 29 días. En tu{" "}
            <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline decoration-white/30 hover:decoration-white/60 transition">carta natal</Link>,
            la <Link href="/planetes/lune" className="underline decoration-white/30 hover:decoration-white/60 transition">Luna</Link>{" "}
            describe tu <strong>mundo interior</strong> — y sus ciclos actúan
            como una respiración.
          </p>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            ¿El problema? Mucha gente sufre estas fases sin
            comprenderlas: sueño alterado, nervios a flor de piel, ganas de mandarlo todo a paseo…
            y luego la culpa de «no saber gestionarlo».
          </p>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            Aquí encontrarás un método <strong>simple y concreto</strong> para
            usar cada fase lunar a tu favor — sin ritual complicado,
            sin superstición.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <Pill tone="violet">Palabra clave: Ciclo</Pill>
            <Pill tone="orange">Riesgo: Reactividad</Pill>
            <Pill tone="emerald">Palanca: Conciencia</Pill>
            <Pill tone="sky">Nivel: principiante</Pill>
          </div>

          <div className="mt-3">
            <TagPillsInline tags={meta.tags} />
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <Stat label="Astro" value="La Luna" />
            <Stat label="Lo que describe" value="Emociones + seguridad + intuición" />
            <Stat label="Pregunta clave" value="¿Qué siento (de verdad)?" />
          </div>
        </div>
      </header>

      {/* ── D&eacute;finition (Featured Snippet) ── */}
      <section className="rounded-2xl border border-indigo-400/25 bg-indigo-400/5 p-5 sm:p-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-3">Definición</p>
        <p className="text-sm leading-relaxed text-text/80 md:text-base">
          Los <strong>ciclos lunares en astrología</strong> alternan entre la <strong>luna nueva</strong> (conjunción Sol-<Link href="/planetes/lune" className="text-indigo-300 underline decoration-indigo-300/30 underline-offset-2 transition-colors hover:text-indigo-200">Luna</Link>) y la <strong>luna llena</strong> (oposición Sol-Luna). Este ritmo de 29,5 días influye en las energías colectivas, las emociones y los momentos propicios para actuar o retirarse.
        </p>
      </section>

      {/* ── APP intro ── */}
      <p className="text-text/85 leading-relaxed">
        ¿Te sientes &laquo;&nbsp;raro&nbsp;&raquo; en cada <strong>luna llena</strong>? No estás loco — la astrología lo explica muy bien. Los <strong>ciclos lunares</strong> marcan el ritmo de nuestra energía, nuestras emociones y nuestras decisiones mucho más de lo que creemos. Esta guía descifra la luna nueva y la luna llena, sus efectos reales y cómo usarlos de forma concreta.
      </p>

      {/* 1) base */}
      <section className="space-y-4">
        <H2>1) La Luna en astrología: ¿qué representa?</H2>

        <div className="rounded-2xl border border-white/10 bg-black/20 p-6 leading-relaxed text-text/85 space-y-3">
          <p>
            La Luna habla de tu <strong>clima interior</strong>. Describe:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>tus <strong>emociones profundas</strong> (y su intensidad)</li>
            <li>tu <strong>reactividad instintiva</strong> (tu{" "}
            <Link href="/blog/mars-en-signes-desir-libido-action" className="underline decoration-white/30 hover:decoration-white/60 transition">Marte</Link>{" "}
            también interviene)</li>
            <li>tu necesidad de <strong>seguridad</strong> (ligada a tu{" "}
            <Link href="/maisons/maison-4" className="underline decoration-white/30 hover:decoration-white/60 transition">casa 4</Link>) y de “refugio”</li>
            <li>tu relación con el <strong>pasado</strong> y los recuerdos</li>
            <li>tu <strong>ritmo</strong> (sueño, humor, fluctuaciones)</li>
          </ul>
        </div>

        <Callout tone="note" title="Frase clave">
          <p>
            La Luna = tu <strong>mundo interior</strong>. <Link href="/planetes/soleil" className="underline decoration-white/30 hover:decoration-white/60 transition">El Sol</Link> = tu{" "}
            <strong>identidad consciente</strong>. Las fases lunares = una{" "}
            <strong>meteorología emocional</strong> compartida.
          </p>
        </Callout>
      </section>

      {/* 2) méthode */}
      <section className="space-y-4">
        <H2>2) El ciclo lunar explicado de forma sencilla</H2>

        <Card title="Una ola de 29 días" subtitle="Sube, culmina, baja. Como tú.">
          <p>
            Un ciclo completo dura unos <strong>29 días</strong>. La Luna se
            comporta como una <strong>ola</strong>: sube (construcción),
            alcanza una cima (revelación), luego baja (criba / liberación).
          </p>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <div className="grid grid-cols-1 md:grid-cols-4 border-b border-white/10">
              <div className="p-4 text-sm text-text/60">Fase</div>
              <div className="p-4 text-sm text-text/60">Energía</div>
              <div className="p-4 text-sm text-text/60">Sensación</div>
              <div className="p-4 text-sm text-text/60">Foco</div>
            </div>

            <Row a="🌑 Luna Nueva" b="inicio" c="introspección" d="intención" />
            <Row a="🌓 Cuarto Creciente" b="tensión" c="decisión" d="acción" />
            <Row a="🌕 Luna Llena" b="pico" c="emociones amplificadas" d="revelación" />
            <Row a="🌗 Cuarto Menguante" b="descenso" c="criba / fatiga" d="liberación" />
          </div>

          <Callout tone="ok" title="Truco útil">
            <p>
              Obsérvate: no necesitas ser “místico”.
              Solo necesitas ser <strong>honesto</strong> sobre tu estado interior.
            </p>
          </Callout>
        </Card>
      </section>

      <Divider />

      {/* 3) Nouvelle Lune */}
      <section className="space-y-4">
        <H2>3) La Luna Nueva 🌑</H2>

        <Card title="Energía: recomenzar, sembrar, interiorizar" subtitle="El vacío fértil. Poco visible, muy poderoso.">
          <p>
            La Luna Nueva es una fase de <strong>silencio</strong>. Puede
            dar la impresión de “nada”, pero en realidad todo se{" "}
            <strong>prepara</strong>.
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>necesidad de calma / de retiro</li>
            <li>fatiga mental o ganas de lentitud</li>
            <li>intuición más afinada</li>
            <li>necesidad de claridad interior</li>
          </ul>

          <Callout tone="warn" title="Error clásico">
            <p>
              Querer resultados inmediatos.
              La Luna Nueva no es una fase de “hazaña”: es una fase de{" "}
              <strong>preparación</strong>.
            </p>
          </Callout>
        </Card>

        <Callout tone="note" title="Qué hacer (simple, eficaz)">
          <ul className="list-disc pl-5 space-y-2">
            <li>escribir 1 intención (una sola) clara</li>
            <li>dar una acción mínima (un micropaso)</li>
            <li>ordenar / simplificar (espacio = energía)</li>
          </ul>
        </Callout>
      </section>

      {/* 4) Pleine Lune */}
      <section className="space-y-4">
        <H2>4) La Luna Llena 🌕</H2>

        <Card title="Energía: revelación, intensidad, culminación" subtitle="Amplificador emocional. Todo se hace visible.">
          <p>
            La Luna Llena pone en evidencia lo que evitabas. Actúa como un{" "}
            <strong>foco</strong>: emociones, tensiones, verdades, necesidades.
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>emociones amplificadas / impaciencia</li>
            <li>sueño más ligero, sueños intensos</li>
            <li>tomas de conciencia rápidas</li>
            <li>conflictos que estallan si estaban latentes</li>
          </ul>

          <Callout tone="ok" title="Lectura madura">
            <p>
              La Luna Llena no “crea” el caos.
              <strong> Revela</strong> lo que ya está ahí — y te empuja a mirar.
            </p>
          </Callout>
        </Card>

        <Callout tone="note" title="Qué hacer (liberar en lugar de luchar)">
          <ul className="list-disc pl-5 space-y-2">
            <li>escribir lo que ya no quieres cargar</li>
            <li>tener una conversación honesta (sin agresividad) — la{" "}
            <Link href="/synastrie" className="underline decoration-white/30 hover:decoration-white/60 transition">sinastría</Link>{" "}
            puede ayudar a entender las tensiones</li>
            <li>cortar un hábito que te vacía</li>
          </ul>
        </Callout>
      </section>

      <Divider />

      {/* 5) comparaison */}
      <section className="space-y-4">
        <H2>5) Luna Nueva vs Luna Llena (la verdadera diferencia)</H2>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <div className="grid grid-cols-1 md:grid-cols-4 border-b border-white/10">
            <div className="p-4 text-sm text-text/60">Fase</div>
            <div className="p-4 text-sm text-text/60">Orientación</div>
            <div className="p-4 text-sm text-text/60">Movimiento</div>
            <div className="p-4 text-sm text-text/60">Objetivo</div>
          </div>

          <Row a="Luna Nueva 🌑" b="interior" c="comenzar" d="intención" />
          <Row a="Luna Llena 🌕" b="exterior" c="culminar" d="revelación / liberación" />
          <Row a="Entre las dos" b="construcción" c="ajustar" d="mantener el rumbo" />
          <Row a="Fin de ciclo" b="criba" c="soltar" d="simplificar" />
        </div>

        <Callout tone="note" title="Truco sencillo">
          <p>
            Si no sabes qué hacer:
            Luna Nueva = <strong>elijo</strong>. Luna Llena ={" "}
            <strong>libero</strong>.
          </p>
        </Callout>
      </section>

      {/* 6) pourquoi on ressent */}
      <section className="space-y-4">
        <H2>6) ¿Por qué nos sentimos “raros” durante las Lunas Llenas?</H2>

        <Card
          title="Porque la Luna amplifica tu sistema"
          subtitle="Sueño, emociones, reactividad… se nota enseguida."
        >
          <p>
            Mucha gente lo nota: agitación, sueño más ligero,
            hipersensibilidad, irritabilidad… La Luna Llena actúa como un{" "}
            <strong>amplificador</strong>.
          </p>
          <p>
            El punto clave: no “crea” un problema, <strong>sube el volumen</strong> de lo que ya estaba presente.
          </p>

          <Callout tone="ok" title="Enfoque inteligente">
            <p>
              En lugar de luchar contra la emoción, pregúntate:{" "}
              <strong>“¿Qué quiere mostrarme esto?”</strong>
            </p>
          </Callout>
        </Card>
      </section>

      <Divider />

      {/* 7) méthode concrète */}
      <section className="space-y-4">
        <H2>7) Cómo usar los ciclos lunares en la vida real</H2>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card title="Luna Nueva: intención (1 frase)">
            <p>
              No hace falta un ritual complicado. Escribe una intención clara:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>“Quiero salir de un patrón relacional.”</li>
              <li>“Cuido mi cuerpo.”</li>
              <li>“Lanzo este proyecto sin sobrecargarme.”</li>
            </ul>
            <p>
              Añade un <strong>micropaso</strong> (10 minutos máximo): eso es lo que lo ancla.
            </p>
          </Card>

          <Card title="Luna Llena: liberación (criba + verdad)">
            <p>
              La Luna Llena es perfecta para “vaciar la mochila” sin violencia:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>escribir lo que sueltas (miedo, carga mental)</li>
              <li>cortar un hábito que te agota</li>
              <li>expresar un no dicho (con calma, con claridad)</li>
            </ul>
            <p>
              Objetivo: <strong>descongestionar</strong> tu energía.
            </p>
          </Card>
        </div>

        <Callout tone="warn" title="La trampa">
          <p>
            Sobrerritualizar para evitar actuar.
            La astrología (y la lectura de los{" "}
            <Link href="/aspects" className="underline decoration-white/30 hover:decoration-white/60 transition">aspectos</Link>) ayuda cuando te vuelve <strong>más lúcido</strong>, no cuando te paraliza.
          </p>
        </Callout>
      </section>

      {/* 8) secret */}
      <section className="space-y-4">
        <H2>8) El verdadero secreto de los ciclos lunares en astrología</H2>

        <div className="rounded-2xl border border-white/10 bg-black/20 p-6 leading-relaxed text-text/85 space-y-3">
          <p>
            La Luna no decide por ti. Te muestra un ritmo — sigue tus{" "}
            <Link href="/transits" className="underline decoration-white/30 hover:decoration-white/60 transition">tránsitos</Link>{" "}
            para verlo en acción.
          </p>
          <p>
            Si resistes: <strong>tensión</strong>.
            Si escuchas: <strong>transformación</strong>.
          </p>
          <p>
            La Luna te enseña que la vida no es lineal (como lo muestra una{" "}
            <Link href="/blog/conjonction-melange-des-forces" className="underline decoration-white/30 hover:decoration-white/60 transition">conjunción</Link>): es{" "}
            <strong>cíclica</strong>. Y tú también.
          </p>
        </div>
      </section>

      {/* 9) résumé */}
      <section className="space-y-4">
        <H2>9) Síntesis: luna llena y luna nueva en resumen</H2>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="p-5 border-b md:border-b-0 md:border-r border-white/10">
              <p className="text-sm text-text/60">Esencia</p>
              <p className="mt-2 font-semibold text-text/90">Ciclo emocional</p>
              <p className="mt-2 text-text/80">
                Luna Nueva = intención. Luna Llena = revelación / liberación. Descubre el{" "}
              <Link href="/blog/lunarien" className="underline decoration-white/30 hover:decoration-white/60 transition">perfil Lunariano</Link>.
              </p>
            </div>

            <div className="p-5 border-b md:border-b-0 md:border-r border-white/10">
              <p className="text-sm text-text/60">Riesgo</p>
              <p className="mt-2 font-semibold text-text/90">Reactividad</p>
              <p className="mt-2 text-text/80">
                Fatiga, conflictos, sobrecarga emocional si te fuerzas. Lee también las{" "}
              <Link href="/blog/qualites-defauts-12-signes-zodiaque" className="underline decoration-white/30 hover:decoration-white/60 transition">cualidades y defectos de los 12 signos</Link>.
              </p>
            </div>

            <div className="p-5">
              <p className="text-sm text-text/60">Palanca</p>
              <p className="mt-2 font-semibold text-text/90">Conciencia</p>
              <p className="mt-2 text-text/80">
                Observar → elegir → liberar. El ciclo se convierte en una herramienta. Consulta el{" "}
              <Link href="/dictionnaire-astrologique" className="underline decoration-white/30 hover:decoration-white/60 transition">diccionario astrológico</Link>{" "}
              para profundizar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ visible ── */}
      <section className="space-y-4">
        <H2>Preguntas frecuentes sobre los ciclos lunares</H2>

        <Card title="¿Cuál es la diferencia entre Luna Nueva y Luna Llena?">
          <p>
            La Luna Nueva es una fase de introspección e intención. La Luna Llena es una fase de revelación y liberación. Juntas forman un ciclo de 29 días.
          </p>
        </Card>

        <Card title="¿Por qué nos sentimos raros durante la Luna Llena?">
          <p>
            La Luna Llena actúa como un amplificador emocional: sueño más ligero, hipersensibilidad, irritabilidad. No crea el problema, sube el volumen de lo que ya estaba presente.
          </p>
        </Card>

        <Card title="¿Cómo usar los ciclos lunares en el día a día?">
          <p>
            En la Luna Nueva, escribe una intención clara y da un micropaso concreto. En la Luna Llena, libera lo que te pesa: un hábito, un no dicho, carga mental.
          </p>
        </Card>

        <Card title="¿La Luna influye realmente en las emociones?">
          <p>
            En astrología, la <Link href="/planetes/lune" className="underline decoration-white/30 hover:decoration-white/60 transition">Luna</Link> representa el clima interior: emociones profundas, reactividad instintiva, necesidad de seguridad. Las fases lunares ofrecen un ritmo natural para observar y canalizar las emociones.
          </p>
        </Card>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-white/10 bg-black/20 p-6">
        <p className="text-sm text-text/60">Sigue leyendo</p>
        <div className="mt-3 space-y-2 text-text/85">
          <p>
            Descubre{" "}
            <Link href="/blog/amour-fidelite-signes-zodiaque" className="underline decoration-white/30 hover:decoration-white/60 transition font-semibold text-text/95">amor y fidelidad según los signos</Link>{" "}
            o explora{" "}
            <Link href="/blog/venus-en-signes-style-amoureux" className="underline decoration-white/30 hover:decoration-white/60 transition font-semibold text-text/95">Venus en signos</Link>{" "}
            para completar tu comprensión de las emociones y del amor.
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
