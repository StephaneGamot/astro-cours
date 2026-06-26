import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "../ui";
import { AUTHOR_PERSON, PUBLISHER_ORG, SITE_URL } from "@/lib/seo";

const ARTICLE_URL = `${SITE_URL}/blog/comprendre-signe-astrologique-ascendant-12-exemples`;
const COVER_URL = `${SITE_URL}/images/blog/soleil-et-asc.webp`;

export const meta = {
  slug: "comprendre-signe-astrologique-ascendant-12-exemples",
  title: "Signo astrológico y ascendente: comprender la diferencia",
  description:
    "Comprende la diferencia entre signo solar y ascendente gracias a 12 ejemplos concretos y didácticos. ¡Pon a prueba tus conocimientos ahora mismo!",
  socialTitle:
    "Signo astrológico y ascendente: comprende por fin la diferencia",
  socialDescription:
    "El signo solar y el ascendente no dicen lo mismo. Descubre su diferencia a través de 12 ejemplos claros, concretos y didácticos.",
  date: "2026-03-08",
  tags: ["bases", "signe", "ascendant", "débutant", "exemples"],
  readingLevel: "débutant" as const,
  cover: "/images/blog/soleil-et-asc.webp",
  ogImage: COVER_URL,
  ogImageAlt:
    "Ilustración didáctica sobre la diferencia entre signo astrológico y ascendente",
  type: "article" as const,
  articleSection: "Astrología",
  readingTime: "6–8 min",
  articleUrl: ARTICLE_URL,
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
  subtitle,
  children,
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




function PortraitCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-white/10 bg-black/20 p-6 shadow-soft">
      <h3 className="text-lg md:text-xl font-semibold tracking-tight leading-tight">
        {title}
      </h3>
      <div className="mt-4 space-y-3 text-text/85 leading-relaxed">
        {children}
      </div>
    </section>
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
            name: "¿Cuál es la diferencia entre signo astrológico y ascendente?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "El signo solar describe la identidad profunda, lo que uno busca llegar a ser. El ascendente describe la manera en que uno se presenta al mundo, el estilo visible y el comportamiento espontáneo.",
            },
          },
          {
            "@type": "Question",
            name: "¿Por qué dos personas del mismo signo pueden parecer muy diferentes?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Porque el ascendente modifica la forma de entrar en el mundo. Un Cáncer con ascendente Aries parecerá más directo, mientras que un Cáncer con ascendente Virgo parecerá más discreto. El núcleo puede ser similar, pero la apariencia cambia.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cómo leer la combinación Sol + Ascendente?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "El Sol responde a «¿quién soy en lo profundo?» y el ascendente responde a «¿cómo me presento y reacciono de forma espontánea?». Combinar ambos da una lectura más justa que el signo por sí solo.",
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
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl ${glow}`}
        />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

        <div className="relative">
          <Kicker>Signo solar y Ascendente</Kicker>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            <strong>Signo astrológico y ascendente</strong>: probablemente
            conoces tu signo solar, pero no siempre te reconoces
            en las descripciones generales. Eso suele deberse a
            que no tienes en cuenta tu{" "}
            <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline decoration-white/30 hover:decoration-white/60 transition">ascendente</Link>.
          </p>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            ¿El problema? Sin esta pieza, lees tu{" "}
            <Link href="/planetes/soleil" className="underline decoration-white/30 hover:decoration-white/60 transition">Sol</Link>{" "}
            como si fuera toda la carta. Resultado: te pierdes
            lo que te hace único (y reconocible).
          </p>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            Aquí encontrarás la diferencia entre ambos, y luego{" "}
            <strong>12 combinaciones concretas</strong> para por fin situarte
            — sin clichés, con matices.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <Pill tone="violet">Sol = identidad</Pill>
            <Pill tone="orange">Ascendente = la manera de entrar en el mundo</Pill>
            <Pill tone="emerald">144 combinaciones</Pill>
            <Pill tone="sky">Nivel: principiante</Pill>
          </div>

          <div className="mt-3">
            <TagPillsInline tags={meta.tags} />
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <Stat label="Signo solar" value="Centro de la personalidad" />
            <Stat label="Ascendente" value="Estilo visible / comportamiento" />
            <Stat label="Objetivo" value="Reconocerse concretamente" />
          </div>
        </div>
      </header>

      {/* DEFINITION BOX — Featured Snippet */}
      <div className="rounded-2xl border border-amber-400/20 bg-amber-400/[0.04] px-6 py-5">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-300/80">Definición</p>
        <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
          El <strong>signo astrológico</strong> (o signo solar) corresponde a la posición del Sol en el nacimiento, mientras que el <strong>ascendente</strong> refleja el signo que se levantaba en el horizonte en el momento exacto del nacimiento. Juntos forman el dúo fundamental de toda interpretación de la <Link href="/blog/qu-est-ce-qu-un-theme-astral">carta natal</Link>.
        </p>
      </div>

      {/* APP INTRO */}
      <p className="text-lg leading-relaxed text-text/85">
        ¿Eres Leo pero no te reconoces en absoluto en las descripciones de tu <strong>signo astrológico</strong>? Es probable que tu <strong>ascendente</strong> cuente una historia muy distinta. Esta confusión afecta al 90 % de los principiantes en astrología. Gracias a 12 combinaciones Sol + Ascendente concretas, comprenderás por fin por qué estos dos elementos lo cambian todo.
      </p>

      <section className="space-y-4">
        <H2>1) Signo astrológico: por qué no describe toda tu personalidad</H2>

        <Card title="El Sol es solo una parte de la carta">
          <p>
            El <strong>signo solar</strong> muestra la identidad profunda,
            la manera de existir en el centro, lo que uno busca llegar a ser.
          </p>
          <p>
            Pero en la vida real, los demás no perciben primero tu Sol:
            a menudo se encuentran con tu <strong>ascendente</strong>.
          </p>
          <p>
            Por eso dos personas del mismo signo pueden parecer muy diferentes.
          </p>
        </Card>

        <Callout title="Para recordar">
          El signo solar describe el <strong>centro</strong>.
          El ascendente describe la <strong>puerta de entrada</strong>.
        </Callout>
      </section>

      <section className="space-y-4">
        <H2>2) Signo solar y ascendente: ¿cuál es la verdadera diferencia?</H2>

        <Card title="La combinación que hace viva la lectura">
          <p>
            Un <strong>Cáncer Sol</strong> con <strong>ascendente Aries</strong>
            no abordará el mundo como un <strong>Cáncer Sol</strong> con
            <strong> ascendente Virgo</strong>.
          </p>
          <p>
            El primero podrá parecer más directo, más combativo, más tajante.
            El segundo parecerá a menudo más discreto, más atento, más mesurado.
          </p>
          <p>
            El núcleo puede ser similar, pero la manera de actuar y de mostrarse cambia mucho.
          </p>
        </Card>

        <Callout tone="ok" title="Buen método de lectura">
          Lee siempre así:
          <br />
          <strong>¿Quién soy en lo profundo?</strong> → Sol
          <br />
          <strong>¿Cómo me presento y reacciono de forma espontánea?</strong> → Ascendente
        </Callout>
      </section>

     <section className="space-y-4">
  <H2>3) 12 ejemplos concretos de combinaciones Sol + Ascendente</H2>

  <div className="grid gap-6 lg:grid-cols-2">
    <PortraitCard title="Aries Sol — Ascendente Cáncer">
      <p>
        A primera vista, esta persona no siempre da la imagen de un Aries puro.
        Puede parecer más sensible, más prudente, más protectora que francamente combativa.
        Sin embargo, por dentro existe una voluntad ariana: necesidad de avanzar, de decidir, de no quedarse pasiva.
      </p>
      <p>
        El contraste viene de que el Sol en Aries quiere actuar rápido,
        mientras que el ascendente Cáncer lo filtra todo a través de la emoción y la necesidad de seguridad.
        Resultado: a menudo se trata de alguien que puede parecer dulce o reservado al principio,
        pero que se vuelve sorprendentemente firme cuando se trata de defender a sus seres queridos, su espacio o lo que le importa.
      </p>
      <p>
        La fuerza de esta combinación reside en una alianza rara entre instinto de protección y capacidad de acción.
        El desafío consiste en no alternar entre la contención emocional y las reacciones bruscas.
      </p>
    </PortraitCard>

    <PortraitCard title="Tauro Sol — Ascendente Leo">
      <p>
        Aquí, la estabilidad de Tauro se encuentra con el brillo de Leo.
        La persona busca ante todo algo sólido, duradero, concreto,
        pero lo hace con una presencia más afirmada, más cálida, a veces más visible que un Tauro clásico.
      </p>
      <p>
        El Tauro solar quiere construir, preservar, arraigarse.
        El ascendente Leo, por su parte, da una manera de presentarse que atrae más la atención:
        gusto por lo bello, necesidad de ser estimado, una forma más noble o más expresiva de ocupar el espacio.
      </p>
      <p>
        A menudo se encuentra a alguien fiel a sus valores, apegado a la calidad, pero que no solo quiere poseer:
        también quiere brillar a través de lo que construye. El punto de vigilancia tiene que ver con el orgullo herido,
        o la dificultad de soltar lo que alimenta la imagen de sí mismo.
      </p>
    </PortraitCard>

    <PortraitCard title="Géminis Sol — Ascendente Escorpio">
      <p>
        Esta combinación suele ser más profunda de lo que parece.
        El Sol en Géminis da el gusto por las ideas, los intercambios, el movimiento mental,
        pero el ascendente Escorpio aporta una intensidad, una densidad psicológica y una capacidad de observación que cambian por completo el color del conjunto (un poco como una{" "}
        <Link href="/blog/conjonction-melange-des-forces" className="underline decoration-white/30 hover:decoration-white/60 transition">conjunción</Link>).
      </p>
      <p>
        Vista desde fuera, la persona puede parecer difícil de leer, selectiva, casi secreta.
        Sin embargo, por dentro, la mente se mueve mucho, cuestiona, compara, relaciona.
        No es un Géminis "ligero": es un Géminis que quiere comprender lo que hay detrás de las palabras.
      </p>
      <p>
        La fuerza de esta combinación reside en una inteligencia psicológica muy fina.
        El desafío es no transformar la curiosidad en desconfianza o en sobreanálisis.
      </p>
    </PortraitCard>

    <PortraitCard title="Cáncer Sol — Ascendente Aries">
      <p>
        Es una de las mezclas más interesantes entre sensibilidad y combatividad.
        El Cáncer solar busca la seguridad, el apego, un mundo interior estable.
        El ascendente Aries, por su parte, da una manera mucho más directa de reaccionar y de entrar en el mundo.
      </p>
      <p>
        La persona puede ser muy emotiva, pero no parecer frágil.
        Al contrario, suele mostrarse vivaz, rápida, capaz de tomar decisiones sobre la marcha.
        En lo profundo, sin embargo, es más sensible de lo que deja creer.
      </p>
      <p>
        Esta combinación suele dar muy buenos protectores: personas que no luchan solo por sí mismas,
        sino por lo que aman. El punto de vigilancia tiene que ver con la ira emocional,
        o las reacciones defensivas cuando se toca una herida íntima.
      </p>
    </PortraitCard>

    <PortraitCard title="Leo Sol — Ascendente Virgo">
      <p>
        Leo quiere brillar, crear, expresar su singularidad.
        Pero con un ascendente Virgo, esa luz pasa por un filtro más discreto,
        más controlado, más preocupado por hacerlo bien.
      </p>
      <p>
        Aquí no se tiene un Leo puramente flamante.
        A menudo se trata de alguien que desea ser reconocido, pero que no soporta ser aproximativo.
        La persona quiere brillar, sí, pero sobre algo serio, dominado, digno.
      </p>
      <p>
        Esto puede dar personalidades muy hermosas: creativas pero precisas, generosas pero útiles,
        solares pero no superficiales. El principal desafío (como muestra el{" "}
        <Link href="/dictionnaire-astrologique" className="underline decoration-white/30 hover:decoration-white/60 transition">diccionario astrológico</Link>) es no ahogar el impulso creativo
        por exceso de autocrítica o de perfeccionismo.
      </p>
    </PortraitCard>

    <PortraitCard title="Virgo Sol — Ascendente Sagitario">
      <p>
        He aquí una combinación que busca unir precisión y horizonte.
        El Sol en Virgo quiere comprender, ordenar, mejorar, volver útil.
        El ascendente Sagitario aporta más apertura, franqueza, movimiento y, a veces, un optimismo visible.
      </p>
      <p>
        En el primer contacto, la persona suele parecer más libre o más expansiva que una Virgo clásica.
        Pero en lo profundo, sigue muy atenta a los detalles, a la coherencia, a la calidad real de las cosas.
        Suele ser alguien que necesita sentido, pero también método.
      </p>
      <p>
        Esta combinación puede dar excelentes docentes, acompañantes o perfiles pedagógicos:
        personas capaces de explicar con claridad cosas complejas.
        Descubre también las{" "}
        <Link href="/blog/qualites-defauts-12-signes-zodiaque" className="underline decoration-white/30 hover:decoration-white/60 transition">cualidades y defectos de los 12 signos</Link>.
        El punto de atención reside en la tensión entre el rigor y las ganas de ampliar sin fin.
      </p>
    </PortraitCard>

    <PortraitCard title="Libra Sol — Ascendente Capricornio">
      <p>
        El Libra solar busca la armonía, el equilibrio y la justeza relacional.
        Con un ascendente Capricornio, esta búsqueda se vuelve más contenida, más estructurada, más controlada.
      </p>
      <p>
        La persona no da de inmediato una impresión de ligereza o de sociabilidad.
        Puede parecer seria, sobria, a veces distante.
        Sin embargo, en el fondo, tiene una verdadera necesidad de vínculo, de elegancia relacional, de un acuerdo justo con los demás.
      </p>
      <p>
        Esta mezcla suele dar un gran sentido de la compostura, del respeto, de la responsabilidad en las{" "}
        <Link href="/blog/amour-fidelite-signes-zodiaque" className="underline decoration-white/30 hover:decoration-white/60 transition">relaciones</Link>.
        El desafío consiste en no bloquear demasiado la expresión afectiva, ni confundir el control con la madurez.
      </p>
    </PortraitCard>

    <PortraitCard title="Escorpio Sol — Ascendente Sagitario">
      <p>
        Esta combinación suele ser más abierta en apariencia de lo que se imagina.
        El Escorpio solar vive las cosas intensamente, busca la verdad, rechaza lo superficial.
        El ascendente Sagitario aporta una manera más móvil, más franca, a veces más alegre de entrar en el mundo.
      </p>
      <p>
        Se puede tener delante a alguien que sonríe con facilidad, habla con impulso, da una impresión de movimiento,
        mientras que en lo profundo analiza, siente y atraviesa mucho más de lo que muestra.
        Esto crea a menudo personalidades muy vivas, pero también más complejas de lo que parecen.
      </p>
      <p>
        La fuerza aquí es la capacidad de unir profundidad y aliento.
        El desafío consiste en no huir de la intensidad interior por necesidad de escapatoria o de espacio inmediato.
      </p>
    </PortraitCard>

    <PortraitCard title="Sagitario Sol — Ascendente Piscis">
      <p>
        Sagitario quiere comprender, ir más lejos, ampliar su horizonte.
        El ascendente Piscis añade sensibilidad, intuición, una forma de porosidad al mundo.
      </p>
      <p>
        Esto suele dar personas idealistas, inspiradas, atraídas por la búsqueda de sentido,
        pero menos ruidosas o demostrativas que un Sagitario más "puro fuego".
        Avanzan menos solo por entusiasmo que por sensación interior.
      </p>
      <p>
        Es una hermosa combinación para todo lo que tiene que ver con la transmisión, la espiritualidad,
        el acompañamiento o la creación inspirada. El punto de vigilancia tiene que ver con el riesgo
        de idealizar el camino en lugar de encarnar realmente la dirección elegida.
      </p>
    </PortraitCard>

    <PortraitCard title="Capricornio Sol — Ascendente Libra">
      <p>
        Aquí, la solidez de Capricornio se tiñe de elegancia relacional.
        El Sol en Capricornio quiere construir, sostener, avanzar en el tiempo.
        El ascendente Libra da una manera más suave, más diplomática, más fluida socialmente de presentarse.
      </p>
      <p>
        La persona puede parecer más accesible que un Capricornio clásico,
        sin dejar de mantener una fuerte exigencia interior.
        No avanza de cualquier manera: mide, observa, ajusta y luego avanza.
      </p>
      <p>
        Esta combinación suele dar una bella madurez en las relaciones humanas:
        capacidad de cooperar sin renunciar a sus objetivos. El desafío está en la tendencia a suavizar demasiado las tensiones
        o a sacrificar el propio eje personal para mantener la paz.
      </p>
    </PortraitCard>

    <PortraitCard title="Acuario Sol — Ascendente Tauro">
      <p>
        El Acuario solar busca la libertad, la originalidad, una manera de pensar fuera de los marcos.
        El ascendente Tauro, por su parte, da una presencia mucho más serena, estable, tranquilizadora y encarnada.
      </p>
      <p>
        A menudo se tiene aquí a alguien que parece tranquilo, constante, casi clásico a primera vista,
        mientras que en lo profundo la mente funciona de otra manera, con una verdadera necesidad de independencia y singularidad.
        Esto crea un contraste muy interesante entre el exterior y el interior.
      </p>
      <p>
        La fuerza de esta combinación reside en su capacidad de volver concreto lo que, en otros Acuarios,
        seguiría siendo solo conceptual. El punto de vigilancia tiene que ver con la tensión entre la necesidad de estabilidad y la necesidad de ruptura.
      </p>
    </PortraitCard>

    <PortraitCard title="Piscis Sol — Ascendente Capricornio">
      <p>
        Esta combinación une un mundo interior muy sensible con una fachada más estructurada.
        El Sol en Piscis percibe las atmósferas, siente sutilmente, capta lo que circula entre las personas.
        El ascendente Capricornio, por su parte, da una manera más controlada, seria y reservada de aparecer.
      </p>
      <p>
        La persona puede, por tanto, parecer sólida, casi distante, cuando en realidad es muy receptiva.
        Muestra poco, filtra mucho, pero siente profundamente (la{" "}
        <Link href="/blog/pleine-lune-nouvelle-lune-cycles-astrologie" className="underline decoration-white/30 hover:decoration-white/60 transition">Luna llena</Link>{" "}
        puede amplificar esta sensación).
        Esto suele dar personalidades sensibles que aprendieron pronto a sostenerse en pie.
      </p>
      <p>
        La fuerza de esta combinación reside en la capacidad de dar una forma a la intuición,
        de canalizar lo imaginario, de volver útil una gran sensibilidad.
        El desafío consiste en no endurecer demasiado la protección hasta el punto de ahogar la vida interior.
      </p>
    </PortraitCard>
  </div>
</section>


      <section className="space-y-4">
        <H2>4) Cómo interpretar tu signo y ascendente juntos</H2>

        <Card title="El verdadero sentido de esta lectura">
          <p>
            El signo solar muestra <strong>la dirección interior</strong>.
          </p>
          <p>
            El ascendente muestra <strong>la manera de existir en el mundo visible</strong>.
          </p>
          <p>
            Cuando se combinan ambos (y se añaden los{" "}
            <Link href="/transits" className="underline decoration-white/30 hover:decoration-white/60 transition">tránsitos</Link>), se sale por fin de las descripciones demasiado generales
            y se entra en una astrología más justa, más humana, más reconocible.
            Para ir aún más lejos, explora la{" "}
            <Link href="/synastrie" className="underline decoration-white/30 hover:decoration-white/60 transition">sinastría</Link>{" "}
            (compatibilidad entre cartas).
          </p>
        </Card>

        <Callout tone="warn" title="Un límite importante">
          <p>
            Incluso con 12 ejemplos, no se reemplaza la lectura completa de la carta:
            la{" "}
            <Link href="/planetes/lune" className="underline decoration-white/30 hover:decoration-white/60 transition">Luna</Link>, Mercurio,{" "}
            <Link href="/blog/venus-en-signes-style-amoureux" className="underline decoration-white/30 hover:decoration-white/60 transition">Venus</Link>,{" "}
            <Link href="/blog/mars-en-signes-desir-libido-action" className="underline decoration-white/30 hover:decoration-white/60 transition">Marte</Link>, las{" "}
            <Link href="/maisons/maison-1" className="underline decoration-white/30 hover:decoration-white/60 transition">casas</Link> y los{" "}
            <Link href="/aspects" className="underline decoration-white/30 hover:decoration-white/60 transition">aspectos</Link> modifican fuertemente el conjunto.
          </p>
        </Callout>
      </section>

      <section className="rounded-2xl border border-white/10 bg-black/20 p-6">
        <p className="text-sm text-text/60">Continúa tu lectura</p>
        <div className="mt-3 space-y-2 text-text/85">
          <p>
            Descubre{" "}
            <Link href="/blog/venus-en-signes-style-amoureux" className="underline decoration-white/30 hover:decoration-white/60 transition font-semibold text-text/95">Venus en signos</Link>{" "}
            para comprender tu estilo amoroso, o{" "}
            <Link href="/blog/quel-type-de-sportif-selon-signe-astrologique" className="underline decoration-white/30 hover:decoration-white/60 transition font-semibold text-text/95">qué deportista eres según tu signo</Link>.
          </p>
          <p>
            Y para ir más allá del signo solar, identifica tu{" "}
            <Link href="/signes-dominants" className="underline decoration-white/30 hover:decoration-white/60 transition font-semibold text-text/95">signo dominante</Link>{" "}
            — el color de conjunto de tu carta.
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
