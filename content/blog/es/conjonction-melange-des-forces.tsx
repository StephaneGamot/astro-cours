import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import { AUTHOR_PERSON, PUBLISHER_ORG } from "@/lib/seo";

const SITE_URL = "https://www.astro-cours.com";
const ARTICLE_URL = `${SITE_URL}/blog/conjonction-melange-des-forces`;
const COVER_URL = `${SITE_URL}/images/blog/conjonction.webp`;

export const meta = {
  slug: "conjonction-melange-des-forces",
  title:
    "La conjunción en astrología: significado y efectos",
  // ✅ Ahrefs SERP rewrite — Google usa un guion simple " - Astro Cours".
  seoTitle: "La conjunción en astrología: significado y efectos - Astro Cours",
  description:
    "¿Qué es una conjunción en astrología? Orbes, lectura en carta natal o tránsito, ejemplos y método para interpretar correctamente este aspecto mayor.",
  date: "2026-01-01",
  tags: ["aspects", "bases", "débutant", "thème astral", "transits"],
  readingLevel: "débutant" as const,
  cover: "/images/blog/conjonction.webp",
};

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
      <div className="flex items-start justify-between gap-4">
        <div>
          <H3>{title}</H3>
          {subtitle ? <p className="mt-1 text-sm text-text/60">{subtitle}</p> : null}
        </div>
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

function TwoCols({
  left,
  right,
}: {
  left: ReactNode;
  right: ReactNode;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-6">{left}</div>
      <div className="space-y-6">{right}</div>
    </div>
  );
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

  const graphJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: meta.title,
        description: meta.description,
        image: [COVER_URL],
        datePublished: `${meta.date}T12:00:00Z`,
        dateModified: `${meta.date}T12:00:00Z`,
        inLanguage: "es",
        mainEntityOfPage: ARTICLE_URL,
        articleSection: "Astrología",
        keywords: meta.tags.join(", "),
        educationalLevel: meta.readingLevel,
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
            name: "¿La conjunción es un aspecto bueno o malo?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ni lo uno ni lo otro — la conjunción es neutra por naturaleza. Fusiona y amplifica. El resultado depende por completo de los planetas implicados, del signo y de la casa.",
            },
          },
          {
            "@type": "Question",
            name: "¿Qué diferencia hay entre conjunción y paralelo de declinación?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "La conjunción se mide en longitud (posición sobre el zodíaco). El paralelo concierne a la declinación (norte/sur de la eclíptica). Ambos fusionan, pero la conjunción se usa mucho más en la práctica.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cómo saber si tengo una conjunción en mi carta natal?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Levanta tu carta natal (gratis en muchos sitios) y busca dos símbolos de planetas muy cerca uno del otro — o una tabla de aspectos que indique una distancia de 0 a 6°.",
            },
          },
          {
            "@type": "Question",
            name: "¿Funciona la conjunción en sinastría?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí, e incluso es central en sinastría. Cuando tu Venus está en conjunción con el Marte del otro, la atracción es inmediata. Pero fusionar no significa compatibilidad duradera — los demás aspectos también cuentan.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphJsonLd) }}
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
          <Kicker>Aspecto mayor • Carta natal y tránsitos • Guía paso a paso</Kicker>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            Una <strong>conjunción en astrología</strong> son dos planetas
            que ocupan el mismo grado del zodíaco en tu{" "}
            <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline decoration-white/30 hover:decoration-white/60 transition">
              carta natal
            </Link>{" "}
            — sus energías se fusionan en una sola dinámica, imposible de
            separar. Quizá la hayas detectado en tu carta sin saber
            si era un talento o un nudo por trabajar. El verdadero desafío:
            mal leída, esta fusión parece "buena" o "mala" cuando en realidad
            es neutra — todo depende del contexto. Esta guía te da la definición
            exacta, los{" "}
            orbes, un método de lectura paso a paso (natal <em>y</em>{" "}
            <Link href="/transits" className="underline decoration-white/30 hover:decoration-white/60 transition">
              tránsitos
            </Link>), ejemplos concretos y las trampas que debes evitar.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <Pill tone="violet">Palabra clave: Fusión</Pill>
            <Pill tone="orange">Riesgo: Confusión</Pill>
            <Pill tone="emerald">Palanca: Integración</Pill>
            <Pill tone="sky">Nivel: principiante</Pill>
          </div>

          <div className="mt-3">
            <TagPillsInline tags={meta.tags} />
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <Stat label="Orbe de referencia" value="0–6° (≤3° = muy fuerte)" />
            <Stat label="Pregunta clave" value="¿Quién lidera? ¿Quién matiza?" />
            <Stat label="Para recordar" value="Planeta + signo + casa + aspectos" />
          </div>
        </div>
      </header>

      {/* ── Definición (Featured Snippet) ── */}
      <section className="rounded-2xl border border-violet-400/25 bg-violet-400/5 p-5 sm:p-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-3">Definición</p>
        <p className="text-sm leading-relaxed text-text/80 md:text-base">
          La <strong>conjunción en astrología</strong> es un <Link href="/aspects" className="text-violet-300 underline decoration-violet-300/30 underline-offset-2 transition-colors hover:text-violet-200">aspecto</Link> mayor que se forma cuando dos planetas ocupan el mismo grado (o casi) del zodíaco. Fusiona las energías de los dos planetas implicados, creando una mezcla intensa cuya cualidad depende de la naturaleza de los astros en juego.
        </p>
      </section>

      {/* ── APP intro ── */}
      <p className="text-text/85 leading-relaxed">
        Dos planetas pegados en tu carta natal — ¿qué significa eso? La <strong>conjunción</strong> es el aspecto más poderoso de la astrología y, sin embargo, el más malinterpretado. Ni positiva ni negativa por naturaleza, fusiona dos fuerzas planetarias en una sola. Esta guía completa te enseña a interpretarla correctamente, con orbes, ejemplos y una tabla resumen.
      </p>

      {/* 1) Definición */}
      <section className="space-y-4">
        <H2>1) Conjunción en astrología: definición y principio fundamental</H2>

        <div className="rounded-2xl border border-white/10 bg-black/20 p-6 leading-relaxed text-text/85">
          <p>
            Una <strong>conjunción astrológica</strong> se produce cuando
            dos planetas ocupan la misma zona del zodíaco — en concreto,
            están separados por apenas unos pocos grados. El resultado: sus
            energías se <strong>mezclan</strong> y una casi nunca se
            expresa sin la otra. Es uno de los{" "}
            <Link href="/aspects" className="underline decoration-white/30 hover:decoration-white/60 transition">
              aspectos astrológicos
            </Link>{" "}
            más importantes que comprender cuando se empieza.
          </p>
          <p className="mt-3">
            Cuidado: no es automáticamente "positiva" ni "negativa".
            La conjunción <strong>intensifica y concentra</strong>. Según los
            planetas implicados, puede ser un talento natural, un motor de vida…
            o un nudo por trabajar. Todo depende del contexto — el{" "}
            <Link href="/blog/comprendre-signe-astrologique-ascendant-12-exemples" className="underline decoration-white/30 hover:decoration-white/60 transition">
              signo
            </Link>, la{" "}
            <Link href="/maisons/maison-1" className="underline decoration-white/30 hover:decoration-white/60 transition">
              casa astrológica
            </Link>{" "}
            y los demás aspectos recibidos.
          </p>
        </div>

        <Callout tone="note" title="Imagen mental">
          <p>
            Imagina dos tintas vertidas en el mismo vaso: obtienes un
            color único, imposible de separar. El resultado es estable, rico,
            pero a veces difícil de desentrañar — y precisamente por eso
            hay que aprender a leerlo.
          </p>
        </Callout>
      </section>

      {/* 2) Orbes */}
      <section className="space-y-4">
        <H2>2) Orbe de la conjunción: ¿cuándo "cuenta" de verdad?</H2>

        <p className="text-text/80 leading-relaxed">
          El orbe es la distancia en grados entre los dos planetas. Cuanto más
          ajustado es el orbe, más poderosa es la conjunción. Pero, ¿a partir de
          cuántos grados podemos seguir hablando de conjunción? Aquí tienes una
          referencia sencilla — y fiable — que puedes aplicar siempre.
        </p>

        <TwoCols
          left={
            <Card
              title="Regla sencilla (principiante)"
              subtitle="Una referencia estable para leer sin perderte."
            >
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>≤ 3°</strong>: conjunción muy fuerte — a menudo
                  evidente en el comportamiento y los acontecimientos.
                </li>
                <li>
                  <strong>3–6°</strong>: fuerte a media, depende del signo y
                  de la casa.
                </li>
                <li>
                  <strong>6–8°</strong>: posible pero difusa (¡prudencia!).
                </li>
              </ul>

              <Callout tone="ok" title="Referencia pro (sencilla)">
                <p>
                  Cuanto más ajustado es el orbe, más puedes "construir" sobre
                  él. Si el orbe es amplio, exige más pruebas:{" "}
                  casa angular{" "}
                  (I, IV, VII, X), repeticiones temáticas, aspectos de apoyo.
                </p>
              </Callout>
            </Card>
          }
          right={
            <>
              <Callout tone="warn" title="Error clásico">
                <p>
                  Ver una conjunción y concluir demasiado rápido. Una
                  conjunción sin una casa fuerte y sin repetición puede ser
                  totalmente secundaria. Es una trampa frecuente cuando se{" "}
                  <Link href="/blog/pourquoi-votre-horoscope-ne-vous-ressemble-pas" className="underline decoration-white/30 hover:decoration-white/60 transition">
                    empieza a leer una carta
                  </Link>.
                </p>
              </Callout>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm text-text/60">Consejo</p>
                <p className="mt-2 text-text/85 leading-relaxed">
                  Cuando dudes, hazte esta pregunta:{" "}
                  <strong>"¿En qué ámbito de la vida se nota?"</strong> —
                  es la casa astrológica la que te responde. Si no surge
                  ningún ámbito claro, esta conjunción probablemente no sea central.
                </p>
              </div>
            </>
          }
        />
      </section>

      <Divider />

      {/* 3) Método natal */}
      <section className="space-y-4">
        <H2>3) Cómo interpretar una conjunción en una carta natal</H2>

        <p className="text-text/80 leading-relaxed">
          Aquí tienes un método en 6 pasos que puedes aplicar a <em>todas</em>{" "}
          las conjunciones de tu carta natal. Funciona seas principiante o más avanzado — la
          profundidad llegará con la práctica.
        </p>

        <Card title="Método reproducible" subtitle="La misma rejilla para cada conjunción.">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              Identifica los <strong>2 planetas</strong> en juego — cada uno
              representa una función psicológica.
            </li>
            <li>
              Determina <strong>quién lidera</strong>: por lo general el más lento
              (o el que es{" "}
              <Link href="/maitrises" className="underline decoration-white/30 hover:decoration-white/60 transition">
                regente del signo
              </Link>).
            </li>
            <li>
              Lee el <strong>signo</strong>: es el "estilo" común de la
              fusión — piensa en{" "}
              <Link href="/blog/qualites-defauts-12-signes-zodiaque" className="underline decoration-white/30 hover:decoration-white/60 transition">
                virtudes y defectos del signo
              </Link>.
            </li>
            <li>
              Lee la <strong>casa</strong>: es el ámbito de la vida donde todo
              esto se manifiesta concretamente (finanzas, relaciones, carrera…).
            </li>
            <li>
              Comprueba los <strong>demás aspectos</strong>{" "}
              recibidos: estabilizan, tensan o matizan la conjunción.
            </li>
            <li>
              Reformúlalo en una frase:{" "}
              <strong>"Cuando A se activa, B se activa automáticamente."</strong>
            </li>
          </ol>

          <Callout tone="note" title="Frase tipo (utilísima)">
            <p>
              "El planeta <strong>lento</strong> da la dirección, el planeta{" "}
              <strong>rápido</strong> da la manera. Todo se expresa en{" "}
              <strong>[casa]</strong>."
            </p>
          </Callout>
        </Card>
      </section>

      {/* 4) Matices */}
      <section className="space-y-4">
        <H2>4) Conjunción y tipo de planetas: lo que lo cambia todo</H2>

        <p className="text-text/80 leading-relaxed">
          No todas las conjunciones se viven de la misma manera. La clave
          es saber qué <em>tipo</em> de planetas está implicado. Aquí tienes
          las tres grandes familias — y por qué eso cambia radicalmente
          la interpretación.
        </p>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card title="Planetas personales" subtitle="Subjetivo, psicológico, cotidiano.">
            <p>
              Sol, Luna, Mercurio,{" "}
              <Link href="/planetes/venus" className="underline decoration-white/30 hover:decoration-white/60 transition">Venus</Link>,{" "}
              <Link href="/planetes/mars" className="underline decoration-white/30 hover:decoration-white/60 transition">Marte</Link>{" "}
              : la conjunción habla de identidad, emociones, deseo,
              relaciones y pensamiento. Se siente en el día a día.
            </p>
            <p className="text-sm text-text/70">
              Ejemplo: Luna–Marte = la emoción desencadena la acción
              de inmediato.
            </p>
          </Card>

          <Card title="Júpiter y Saturno" subtitle="Social: marco y expansión.">
            <p>
              Júpiter amplifica y da confianza. Saturno estructura y
              responsabiliza. En conjunción con un planeta personal, da
              un "tema de vida" muy marcado.
            </p>
            <p className="text-sm text-text/70">
              Ejemplo: Mercurio–Saturno = pensamiento riguroso, a veces
              autocensura. Ideal para la{" "}
              <Link href="/blog/orientation-professionnelle-theme-astral" className="underline decoration-white/30 hover:decoration-white/60 transition">
                orientación profesional
              </Link>.
            </p>
          </Card>

          <Card title="Urano / Neptuno / Plutón" subtitle="Transpersonales: lentos y profundos.">
            <p>
              Urano, Neptuno, Plutón: matizan intensamente un
              planeta personal — reorientación, idealización, transformación.
              Se vive por fases, a menudo ligado a tránsitos mayores.
            </p>
            <p className="text-sm text-text/70">
              Ejemplo: Venus–Neptuno = ideal romántico, inspiración pero
              riesgo de proyección ({" "}
              <Link href="/blog/venus-en-signes-style-amoureux" className="underline decoration-white/30 hover:decoration-white/60 transition">
                ver Venus en signos
              </Link>).
            </p>
          </Card>
        </div>
      </section>

      {/* 5) Ejemplos */}
      <section className="space-y-4">
        <H2>5) Ejemplos concretos de conjunciones (con interpretación)</H2>

        <p className="text-text/80 leading-relaxed">
          La teoría está bien, pero nada supera a los ejemplos reales. Aquí tienes
          tres conjunciones muy comunes y cómo leerlas — probablemente las
          encuentres en tu carta o en la de tus seres queridos.
        </p>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card title="Conjunción Luna–Marte" subtitle="Reacción + acción pegadas">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Ventaja</strong>: valor, franqueza, instinto.</li>
              <li><strong>Riesgo</strong>: impulsividad, irritabilidad.</li>
              <li><strong>A observar</strong>: ritmo emocional, gestión de
                la energía e impacto de los ciclos lunares.
              </li>
            </ul>
            <p className="text-sm text-text/70 mt-2">
              Lee también:{" "}
              <Link href="/blog/mars-en-signes-desir-libido-action" className="underline decoration-white/30 hover:decoration-white/60 transition">
                Marte en signos
              </Link>{" "}
              para afinar según el signo ocupado.
            </p>
          </Card>

          <Card title="Conjunción Mercurio–Saturno" subtitle="Pensamiento estructurado">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Ventaja</strong>: rigor, precisión, aprendizaje sólido.</li>
              <li><strong>Riesgo</strong>: rigidez, pesimismo, autocensura.</li>
              <li><strong>Palanca</strong>: rutinas, marco, escritura, método.</li>
            </ul>
            <p className="text-sm text-text/70 mt-2">
              Perfiles asociados:{" "}
              Mercuriano y Saturniano.
            </p>
          </Card>

          <Card title="Conjunción Venus–Neptuno" subtitle="Idealización / inspiración">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Ventaja</strong>: empatía, sentido artístico, romanticismo profundo.</li>
              <li><strong>Riesgo</strong>: proyección, vaguedad, tendencia al "rescate".</li>
              <li><strong>Palanca</strong>: clarificar los valores y poner límites.</li>
            </ul>
            <p className="text-sm text-text/70 mt-2">
              Para profundizar:{" "}
              <Link href="/synastrie" className="underline decoration-white/30 hover:decoration-white/60 transition">
                sinastría
              </Link>{" "}
              y compatibilidad amorosa.
            </p>
          </Card>
        </div>

        <Callout tone="ok" title="El truco que hace ganar tiempo">
          <p>
            Para cada conjunción, identifica tres cosas: el <strong>tema</strong>{" "}
            (palabra clave), el <strong>riesgo</strong> y la <strong>palanca</strong>.
            Es una lectura "funcional" ultraeficaz — y es
            exactamente lo que hacen los astrólogos profesionales cuando
            encadenan consultas.
          </p>
        </Callout>
      </section>

      {/* 6) Tabla */}
      <section className="space-y-4">
        <H2>6) Tabla de las conjunciones más frecuentes</H2>

        <p className="text-text/80 leading-relaxed">
          Esta tabla te da un punto de partida rápido para las conjunciones
          que más a menudo se encuentran en una carta natal. Tenla a
          mano — es un recordatorio que consultarás con frecuencia.
        </p>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-white/10">
            <div className="p-4 text-sm text-text/60">Conjunción</div>
            <div className="p-4 text-sm text-text/60">Ventaja</div>
            <div className="p-4 text-sm text-text/60">Riesgo</div>
          </div>

          <Row a="Sol–Mercurio" b="Claridad mental, expresión fluida" c="Mente demasiado dominante" />
          <Row a="Sol–Venus" b="Encanto natural, valores asumidos" c="Necesidad de aprobación" />
          <Row a="Marte–Júpiter" b="Impulso, audacia, confianza en uno mismo" c="Exceso, sobreestima de uno mismo" />
          <Row a="Luna–Saturno" b="Madurez emocional (con trabajo)" c="Contención, dureza hacia uno mismo" />
          <Row a="Mercurio–Neptuno" b="Imaginación, intuición fina" c="Vaguedad, distracciones" />
          <Row a="Venus–Plutón" b="Intensidad, profundidad, magnetismo" c="Control, celos" />
        </div>

        <Callout tone="note" title="Importante">
          <p>
            Esta tabla te da una dirección, no un veredicto. La lectura
            profesional siempre le añade el signo, el ascendente, la casa
            y los demás aspectos. Es la combinación de todo eso la que crea
            la precisión.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* 7) Tránsitos */}
      <section className="space-y-4">
        <H2>7) Conjunción en tránsito: cuándo se activa en el tiempo</H2>

        <p className="text-text/80 leading-relaxed">
          En la carta natal, la conjunción es "fija". Pero en el cielo
          actual, los planetas se mueven — y cuando un planeta en tránsito viene
          a posarse sobre uno de tus planetas natales, es como un foco
          que se enciende sobre un tema concreto de tu vida.
        </p>

        <TwoCols
          left={
            <Card title="Efecto de una conjunción en tránsito" subtitle="Un foco: imposible de ignorar.">
              <ul className="list-disc pl-5 space-y-2">
                <li>pone un tema en primer plano de tu vida</li>
                <li>desencadena una decisión o una toma de conciencia</li>
                <li>aumenta la intensidad — construye o revela un desequilibrio</li>
              </ul>

              <Callout tone="note" title="Buen reflejo">
                <p>
                  Piensa "período" en lugar de "evento". Un tránsito describe
                  un proceso — a veces repartido a lo largo de meses para los planetas
                  lentos. Mira también la{" "}
                  <Link href="/revolution-solaire" className="underline decoration-white/30 hover:decoration-white/60 transition">
                    revolución solar
                  </Link>{" "}
                  para el análisis anual.
                </p>
              </Callout>
            </Card>
          }
          right={
            <Card title="Lista de control rápida (tránsitos)" subtitle="5 preguntas que a menudo bastan.">
              <ol className="list-decimal pl-5 space-y-2">
                <li>¿Qué planeta transita? (lento = efecto estructurante, rápido = desencadenante)</li>
                <li>¿Qué planeta natal está tocado?</li>
                <li>¿En qué casa ocurre?</li>
                <li>¿Qué aspectos lo apoyan o lo complican?</li>
                <li>¿Qué tema vuelve a tu vida desde hace 2–3 semanas?</li>
              </ol>
            </Card>
          }
        />

        <Callout tone="warn" title="Error frecuente">
          <p>
            Buscar "la fecha exacta" del efecto. Los tránsitos importantes
            tienen a menudo <strong>varios pasos</strong>{" "}
            (acercamiento, exacto, separación) y un efecto progresivo. Los planetas{" "}
            <Link href="/retrogrades" className="underline decoration-white/30 hover:decoration-white/60 transition">
              retrógrados
            </Link>{" "}
            amplifican aún más este fenómeno.
          </p>
        </Callout>
      </section>

      {/* 8) Resumen */}
      <section className="space-y-4">
        <H2>8) Síntesis: lo que hay que recordar sobre la conjunción</H2>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="p-5 border-b md:border-b-0 md:border-r border-white/10">
              <p className="text-sm text-text/60">Esencia</p>
              <p className="mt-2 font-semibold text-text/90">Fusión</p>
              <p className="mt-2 text-text/80">
                Dos funciones actúan juntas, a veces inseparables. Es
                el aspecto más "en bruto" de la astrología.
              </p>
            </div>

            <div className="p-5 border-b md:border-b-0 md:border-r border-white/10">
              <p className="text-sm text-text/60">Riesgo</p>
              <p className="mt-2 font-semibold text-text/90">Saturación</p>
              <p className="mt-2 text-text/80">
                Exceso, confusión, intensidad demasiado concentrada en un mismo lugar.
                Cuando se desborda, puede parecer una obsesión.
              </p>
            </div>

            <div className="p-5">
              <p className="text-sm text-text/60">Palanca</p>
              <p className="mt-2 font-semibold text-text/90">Integración</p>
              <p className="mt-2 text-text/80">
                Clarificar "quién lidera", poner un marco y aprender a canalizar.
                La conciencia marca toda la diferencia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9) FAQ SEO */}
      <section className="space-y-4">
        <H2>9) FAQ: preguntas frecuentes sobre la conjunción en astrología</H2>

        <Card title="¿La conjunción es un aspecto bueno o malo?" subtitle="La pregunta que todo el mundo se hace.">
          <p>
            Ni lo uno ni lo otro — la conjunción es <strong>neutra
            por naturaleza</strong>. Fusiona y amplifica. El resultado depende
            por completo de los planetas implicados, del signo y de la casa.
            Por ejemplo, una conjunción Venus–Júpiter suele ser muy
            agradable, mientras que una conjunción Marte–Plutón exige un verdadero
            trabajo de integración.
          </p>
        </Card>

        <Card title="¿Qué diferencia hay entre conjunción y paralelo de declinación?" subtitle="Para los curiosos.">
          <p>
            La conjunción se mide en <strong>longitud</strong> (posición
            sobre el zodíaco). El paralelo concierne a la{" "}
            <strong>declinación</strong>{" "}
            (norte/sur de la eclíptica). Ambos fusionan, pero la
            conjunción se usa mucho más en la práctica. Para
            profundizar, consulta el{" "}
            <Link href="/dictionnaire-astrologique" className="underline decoration-white/30 hover:decoration-white/60 transition">
              diccionario astrológico
            </Link>.
          </p>
        </Card>

        <Card title="¿Cómo saber si tengo una conjunción en mi carta natal?" subtitle="Lo más sencillo.">
          <p>
            Levanta tu carta natal (gratis en muchos sitios) y
            busca dos símbolos de planetas muy cerca uno del otro —
            o una tabla de aspectos que indique una distancia de 0 a 6°. Si
            empiezas, comienza por comprender tu signo solar y tu
            ascendente.
          </p>
        </Card>

        <Card title="¿Funciona la conjunción en sinastría?" subtitle="Entre dos cartas.">
          <p>
            Sí, e incluso es central en sinastría (comparación de
            cartas). Cuando tu Venus está en conjunción con el Marte del otro,
            la atracción es inmediata. Pero cuidado: fusionar no significa
            compatibilidad duradera — los demás aspectos también cuentan.
          </p>
        </Card>
      </section>

      {/* CTA final */}
      <section className="rounded-2xl border border-white/10 bg-black/20 p-6">
        <p className="text-sm text-text/60">¿Quieres seguir?</p>
        <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
          <p className="text-text/85">
            El siguiente paso lógico: descubrir los demás aspectos astrológicos
            (cuadratura, trígono, oposición…) para completar tu caja de herramientas.
          </p>
          <Link
            href="/blog"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-text/90 hover:bg-white/10 transition"
          >
            Todos los artículos
          </Link>
        </div>
      </section>
    </div>
    </>
  );
}
