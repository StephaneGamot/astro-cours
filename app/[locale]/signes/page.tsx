import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import ZodiacCardContainer from "@/components/sections/homePage/zodiaqueSection/CardContainer";
import { getHomeCards } from "@/lib/homeCards";
import {
  buildMeta,
  localizedPathUrl,
  pathLanguageAlternates,
  pillarUrl,
  toSeoLocale,
  AUTHOR_PERSON,
  PUBLISHER_ORG,
  SITE_URL,
  type SeoLocale,
} from "@/lib/seo";

/**
 * Hub « Les 12 signes du zodiaque » — page pilier (audit SEO 07/2026).
 * Cible les requêtes de liste (« les 12 signes du zodiaque », « signes
 * astrologiques ») et redistribue le PageRank des breadcrumbs vers les
 * 12 pages signes (avant : ancre /#zodiaque sur la home).
 */

const INTERNAL_PATH = "/signes";

type HubContent = {
  meta: { title: string; description: string };
  hero: { eyebrow: string; h1: string; intro1: string; intro2: string };
  method: { title: string; body: string };
  further: { title: string; links: { href: string; label: string; desc: string }[] };
  faqTitle: string;
  faq: { q: string; a: string }[];
  breadcrumbHome: string;
};

const CONTENT: Record<SeoLocale, HubContent> = {
  fr: {
    meta: {
      title: "Les 12 signes du zodiaque : significations & interprétation",
      description:
        "Les 12 signes astrologiques expliqués : élément, mode, planète maîtresse, forces et ombres. Cours complet pour interpréter chaque signe dans un thème natal.",
    },
    hero: {
      eyebrow: "Cours d'astrologie",
      h1: "Les 12 signes du zodiaque",
      intro1:
        "Le zodiaque découpe l'écliptique en douze secteurs de 30° : douze manières d'être au monde, douze styles d'énergie que les planètes viennent colorer. Connaître son signe solaire est un point de départ — mais en astrologie sérieuse, chaque signe est surtout un filtre que TOUTES les planètes du thème peuvent traverser : une Lune en Scorpion, un Mercure en Gémeaux, une Vénus en Poissons.",
      intro2:
        "Chaque fiche ci-dessous détaille l'essentiel pour interpréter : élément (feu, terre, air, eau), mode (cardinal, fixe, mutable), planète maîtresse, mythologie, forces, ombres et compatibilités. C'est la base de toute lecture de thème natal.",
    },
    method: {
      title: "Comment lire un signe dans un thème",
      body: "Un signe ne décrit jamais une personne à lui seul. Demandez-vous toujours : quelle planète est dans ce signe (quelle fonction psychique ?), dans quelle maison (quel domaine de vie ?), et quels aspects elle reçoit. Le signe donne le style, la planète donne la fonction, la maison donne le terrain. Commencez par le trio Soleil / Lune / Ascendant, puis élargissez.",
    },
    further: {
      title: "Pour aller plus loin",
      links: [
        { href: "/les-decans", label: "Les décans", desc: "Les 36 subdivisions du zodiaque" },
        { href: "/maitrises", label: "Les maîtrises", desc: "Quelle planète gouverne quel signe" },
        { href: "/signes-dominants", label: "Signes dominants", desc: "Au-delà du signe solaire" },
        { href: "/synastrie", label: "La synastrie", desc: "Compatibilité entre deux thèmes" },
      ],
    },
    faqTitle: "Questions fréquentes sur les signes",
    faq: [
      {
        q: "Quels sont les 12 signes du zodiaque dans l'ordre ?",
        a: "Bélier, Taureau, Gémeaux, Cancer, Lion, Vierge, Balance, Scorpion, Sagittaire, Capricorne, Verseau et Poissons. L'ordre suit le cycle des saisons depuis l'équinoxe de printemps, chaque signe occupant 30° de l'écliptique.",
      },
      {
        q: "Quelle est la différence entre signe solaire et ascendant ?",
        a: "Le signe solaire est la position du Soleil à votre naissance : il décrit l'identité profonde et la direction de vie. L'ascendant est le signe qui se levait à l'horizon est au moment précis de la naissance : il décrit l'apparence, le style spontané et la manière d'aborder le monde.",
      },
      {
        q: "Que signifient les éléments et les modes des signes ?",
        a: "Les quatre éléments décrivent le tempérament : feu (action), terre (concret), air (mental), eau (émotion). Les trois modes décrivent la dynamique : cardinal (initier), fixe (stabiliser), mutable (adapter). Chaque signe combine un élément et un mode uniques.",
      },
      {
        q: "Un signe peut-il être « mauvais » ou incompatible avec un autre ?",
        a: "Non. Chaque signe a des forces et des ombres, et les compatibilités dépendent de l'ensemble des deux thèmes (Lune, Vénus, Mars, aspects croisés), pas seulement des signes solaires. La synastrie étudie précisément ces interactions.",
      },
    ],
    breadcrumbHome: "Accueil",
  },
  en: {
    meta: {
      title: "The 12 Zodiac Signs: Meanings & Interpretation",
      description:
        "The 12 astrological signs explained: element, mode, ruling planet, strengths and shadows. A complete course to interpret each sign in a birth chart.",
    },
    hero: {
      eyebrow: "Astrology course",
      h1: "The 12 Zodiac Signs",
      intro1:
        "The zodiac divides the ecliptic into twelve 30° sectors: twelve ways of being in the world, twelve styles of energy that planets come to color. Knowing your Sun sign is a starting point — but in serious astrology, each sign is above all a filter that ANY planet in the chart can pass through: a Scorpio Moon, a Gemini Mercury, a Pisces Venus.",
      intro2:
        "Each card below covers the essentials for interpretation: element (fire, earth, air, water), mode (cardinal, fixed, mutable), ruling planet, mythology, strengths, shadows and compatibilities. This is the foundation of any birth chart reading.",
    },
    method: {
      title: "How to read a sign in a chart",
      body: "A sign never describes a person on its own. Always ask: which planet sits in this sign (which psychic function?), in which house (which life area?), and which aspects it receives. The sign gives the style, the planet gives the function, the house gives the terrain. Start with the Sun / Moon / Ascendant trio, then widen.",
    },
    further: {
      title: "Go further",
      links: [
        { href: "/les-decans", label: "The decans", desc: "The 36 subdivisions of the zodiac" },
        { href: "/maitrises", label: "Rulerships", desc: "Which planet rules which sign" },
        { href: "/signes-dominants", label: "Dominant signs", desc: "Beyond the Sun sign" },
        { href: "/synastrie", label: "Synastry", desc: "Compatibility between two charts" },
      ],
    },
    faqTitle: "Frequently asked questions about the signs",
    faq: [
      {
        q: "What are the 12 zodiac signs in order?",
        a: "Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius and Pisces. The order follows the cycle of seasons from the spring equinox, each sign spanning 30° of the ecliptic.",
      },
      {
        q: "What is the difference between Sun sign and Ascendant?",
        a: "The Sun sign is the Sun's position at your birth: it describes core identity and life direction. The Ascendant is the sign rising on the eastern horizon at the exact time of birth: it describes appearance, spontaneous style and how you approach the world.",
      },
      {
        q: "What do the elements and modes of the signs mean?",
        a: "The four elements describe temperament: fire (action), earth (practicality), air (mind), water (emotion). The three modes describe dynamics: cardinal (initiating), fixed (stabilizing), mutable (adapting). Each sign combines a unique element and mode.",
      },
      {
        q: "Can a sign be “bad” or incompatible with another?",
        a: "No. Every sign has strengths and shadows, and compatibility depends on both charts as a whole (Moon, Venus, Mars, cross-aspects), not just Sun signs. Synastry studies precisely these interactions.",
      },
    ],
    breadcrumbHome: "Home",
  },
  es: {
    meta: {
      title: "Los 12 signos del zodiaco: significados e interpretación",
      description:
        "Los 12 signos astrológicos explicados: elemento, modo, planeta regente, fortalezas y sombras. Curso completo para interpretar cada signo en la carta natal.",
    },
    hero: {
      eyebrow: "Curso de astrología",
      h1: "Los 12 signos del zodiaco",
      intro1:
        "El zodiaco divide la eclíptica en doce sectores de 30°: doce maneras de estar en el mundo, doce estilos de energía que los planetas vienen a colorear. Conocer tu signo solar es un punto de partida — pero en astrología seria, cada signo es sobre todo un filtro que CUALQUIER planeta de la carta puede atravesar: una Luna en Escorpio, un Mercurio en Géminis, una Venus en Piscis.",
      intro2:
        "Cada ficha detalla lo esencial para interpretar: elemento (fuego, tierra, aire, agua), modo (cardinal, fijo, mutable), planeta regente, mitología, fortalezas, sombras y compatibilidades. Es la base de toda lectura de carta natal.",
    },
    method: {
      title: "Cómo leer un signo en una carta",
      body: "Un signo nunca describe a una persona por sí solo. Pregúntate siempre: qué planeta está en ese signo (¿qué función psíquica?), en qué casa (¿qué área de vida?) y qué aspectos recibe. El signo da el estilo, el planeta la función, la casa el terreno. Empieza por el trío Sol / Luna / Ascendente y luego amplía.",
    },
    further: {
      title: "Para profundizar",
      links: [
        { href: "/les-decans", label: "Los decanos", desc: "Las 36 subdivisiones del zodiaco" },
        { href: "/maitrises", label: "Las regencias", desc: "Qué planeta rige cada signo" },
        { href: "/signes-dominants", label: "Signos dominantes", desc: "Más allá del signo solar" },
        { href: "/synastrie", label: "La sinastría", desc: "Compatibilidad entre dos cartas" },
      ],
    },
    faqTitle: "Preguntas frecuentes sobre los signos",
    faq: [
      {
        q: "¿Cuáles son los 12 signos del zodiaco en orden?",
        a: "Aries, Tauro, Géminis, Cáncer, Leo, Virgo, Libra, Escorpio, Sagitario, Capricornio, Acuario y Piscis. El orden sigue el ciclo de las estaciones desde el equinoccio de primavera; cada signo ocupa 30° de la eclíptica.",
      },
      {
        q: "¿Cuál es la diferencia entre signo solar y ascendente?",
        a: "El signo solar es la posición del Sol en tu nacimiento: describe la identidad profunda y la dirección vital. El ascendente es el signo que salía por el horizonte este en el momento exacto del nacimiento: describe la apariencia, el estilo espontáneo y la forma de abordar el mundo.",
      },
      {
        q: "¿Qué significan los elementos y los modos de los signos?",
        a: "Los cuatro elementos describen el temperamento: fuego (acción), tierra (concreción), aire (mente), agua (emoción). Los tres modos describen la dinámica: cardinal (iniciar), fijo (estabilizar), mutable (adaptar). Cada signo combina un elemento y un modo únicos.",
      },
      {
        q: "¿Puede un signo ser «malo» o incompatible con otro?",
        a: "No. Cada signo tiene fortalezas y sombras, y la compatibilidad depende del conjunto de ambas cartas (Luna, Venus, Marte, aspectos cruzados), no solo de los signos solares. La sinastría estudia precisamente esas interacciones.",
      },
    ],
    breadcrumbHome: "Inicio",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = toSeoLocale(locale);
  const c = CONTENT[loc];
  return buildMeta({
    title: c.meta.title,
    description: c.meta.description,
    canonicalPath: INTERNAL_PATH,
    type: "website",
    locale: loc,
    canonicalUrl: localizedPathUrl(INTERNAL_PATH, loc),
    languages: pathLanguageAlternates(INTERNAL_PATH),
  });
}

export default async function SignsHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const loc = toSeoLocale(locale);
  const c = CONTENT[loc];
  const cards = getHomeCards(locale);
  const pageUrl = localizedPathUrl(INTERNAL_PATH, loc);

  const COLLECTION_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: c.meta.title,
    description: c.meta.description,
    inLanguage: loc,
    url: pageUrl,
    isPartOf: { "@type": "WebSite", url: SITE_URL, name: "Astro Cours" },
    author: AUTHOR_PERSON,
    publisher: PUBLISHER_ORG,
    hasPart: cards.zodiaque.map((s) => ({
      "@type": "Article",
      headline: s.name,
      url: pillarUrl("signes", s.slug, loc),
    })),
  };

  const BREADCRUMB_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: c.breadcrumbHome, item: localizedPathUrl("/", loc) },
      { "@type": "ListItem", position: 2, name: c.hero.h1, item: pageUrl },
    ],
  };

  const FAQ_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main id="main-content" className="text-text">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(COLLECTION_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />

      {/* HERO */}
      <header className="mx-auto max-w-5xl px-6 pt-10">
        <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-7 sm:p-10">
          <p className="text-xs uppercase tracking-[0.18em] text-muted">{c.hero.eyebrow}</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl">{c.hero.h1}</h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-text/80">{c.hero.intro1}</p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-text/80">{c.hero.intro2}</p>
        </div>
      </header>

      {/* GRILLE DES 12 SIGNES */}
      <ZodiacCardContainer items={cards.zodiaque} />

      {/* MÉTHODE */}
      <section className="mx-auto max-w-5xl px-6 pb-4">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
          <h2 className="font-serif text-2xl sm:text-3xl">{c.method.title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-text/80">{c.method.body}</p>
        </div>
      </section>

      {/* MAILLAGE — ANNEXES LIÉES */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="font-serif text-2xl sm:text-3xl">{c.further.title}</h2>
        <ul role="list" className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {c.further.links.map((l) => (
            <li key={l.href}>
              <Link
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                href={l.href as any}
                className="block h-full rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:border-violet-400/30 hover:bg-white/[0.04]"
              >
                <span className="font-medium text-violet-200">{l.label} →</span>
                <span className="mt-1 block text-xs text-text/70">{l.desc}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="font-serif text-2xl sm:text-3xl">{c.faqTitle}</h2>
        <dl className="mt-6 space-y-4">
          {c.faq.map((f) => (
            <div key={f.q} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <dt className="font-medium text-text">{f.q}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-text/80">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}
