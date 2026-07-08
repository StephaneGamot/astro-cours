import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { PAIRS, pairKey, pairSlugFor } from "@/lib/compatibility";
import { PAIR_CONTENTS } from "./pairs";
import {
  buildMeta,
  localizedPathUrl,
  pathLanguageAlternates,
  toSeoLocale,
  AUTHOR_PERSON,
  PUBLISHER_ORG,
  SITE_URL,
  type SeoLocale,
} from "@/lib/seo";

/**
 * Hub « Compatibilité amoureuse des signes » (audit SEO 07/2026).
 * Liste les paires publiées ; s'étendra vers les 78 combinaisons.
 */

const INTERNAL_PATH = "/compatibilite";

type HubText = {
  meta: { title: string; description: string };
  eyebrow: string;
  h1: string;
  intro1: string;
  intro2: string;
  method: { title: string; body: string };
  pairsTitle: string;
  synastryCta: { title: string; body: string; label: string };
  breadcrumbHome: string;
  faqTitle: string;
  faq: { q: string; a: string }[];
};

const TEXTS: Record<SeoLocale, HubText> = {
  fr: {
    meta: {
      title: "Compatibilité amoureuse des signes astrologiques",
      description:
        "Compatibilité entre signes du zodiaque : analyses détaillées par paire — amour, sexualité, amitié, travail — et méthode sérieuse au-delà du signe solaire.",
    },
    eyebrow: "Amour & relations",
    h1: "Compatibilité des signes astrologiques",
    intro1:
      "Quels signes s'accordent, et pourquoi ? Nos analyses par paire vont au-delà des clichés : dynamique élément par élément, forces réelles, points de friction, sexualité, amitié et travail — avec, pour chaque duo, les vraies questions à poser à la synastrie.",
    intro2:
      "Un rappel d'honnêteté astrologique : le signe solaire n'est qu'un premier repère. Deux personnes ne se résument pas à deux signes — la compatibilité complète se lit entre deux thèmes astraux entiers. Nos pages vous donnent le repère ET la méthode pour aller plus loin.",
    method: {
      title: "Comment lire une compatibilité de signes",
      body: "Les éléments donnent la première grille : feu et air s'attisent, terre et eau se nourrissent, tandis que les couples feu-eau ou air-terre demandent plus d'ajustements. Les aspects entre signes affinent : trigone (même élément) = fluidité, sextile = complicité facile, carré = friction stimulante, opposition = attirance des contraires. Ensuite seulement viennent les vraies questions : Lunes compatibles ? Vénus et Mars en dialogue ? Saturne qui engage ou qui fige ? C'est le travail de la synastrie.",
    },
    pairsTitle: "Les compatibilités analysées",
    synastryCta: {
      title: "Pour aller au fond : la synastrie",
      body: "La vraie compatibilité se calcule entre deux thèmes complets : superposition des planètes, aspects croisés, maisons activées. Notre cours de synastrie vous donne la méthode complète.",
      label: "Le cours de synastrie",
    },
    breadcrumbHome: "Accueil",
    faqTitle: "Questions fréquentes",
    faq: [
      {
        q: "Quels sont les signes les plus compatibles entre eux ?",
        a: "Les paires de même élément (trigones) sont les plus fluides : Bélier-Lion-Sagittaire (feu), Taureau-Vierge-Capricorne (terre), Gémeaux-Balance-Verseau (air), Cancer-Scorpion-Poissons (eau). Les sextiles (feu-air, terre-eau) suivent de près. Mais une synastrie complète peut rendre excellent un couple de signes « incompatibles ».",
      },
      {
        q: "La compatibilité des signes solaires est-elle fiable ?",
        a: "C'est un premier indicateur, pas un verdict : le signe solaire ne représente qu'une position sur une quarantaine dans le thème. Lune, Vénus, Mars et l'Ascendant pèsent autant sinon plus dans la vie de couple. Utilisez nos pages comme une porte d'entrée, la synastrie comme l'analyse sérieuse.",
      },
      {
        q: "Deux signes « incompatibles » peuvent-ils former un couple heureux ?",
        a: "Absolument. Un carré entre Soleils (ex. Bélier-Cancer) crée de la friction, mais des Lunes en trigone, une Vénus conjointe à Mars ou des nœuds lunaires connectés peuvent en faire une des relations les plus structurantes qui soient. C'est tout l'intérêt de dépasser le seul signe solaire.",
      },
    ],
  },
  en: {
    meta: {
      title: "Zodiac Sign Love Compatibility",
      description:
        "Compatibility between zodiac signs: detailed analyses by pair — love, sexuality, friendship, work — and a serious method beyond the Sun sign.",
    },
    eyebrow: "Love & relationships",
    h1: "Zodiac Sign Compatibility",
    intro1:
      "Which signs get along, and why? Our pair-by-pair analyses go beyond clichés: element dynamics, real strengths, friction points, sexuality, friendship and work — with, for each duo, the real questions to ask the synastry.",
    intro2:
      "A note of astrological honesty: the Sun sign is only a first marker. Two people cannot be reduced to two signs — full compatibility is read between two complete birth charts. Our pages give you the marker AND the method to go further.",
    method: {
      title: "How to read sign compatibility",
      body: "The elements give the first grid: fire and air fan each other, earth and water nourish each other, while fire-water or air-earth couples require more adjustments. Aspects between signs refine it: trine (same element) = flow, sextile = easy complicity, square = stimulating friction, opposition = attraction of opposites. Only then come the real questions: compatible Moons? Venus and Mars in dialogue? A Saturn that commits or freezes? That is the work of synastry.",
    },
    pairsTitle: "Analysed compatibilities",
    synastryCta: {
      title: "To go deeper: synastry",
      body: "Real compatibility is calculated between two complete charts: overlay of planets, cross-aspects, activated houses. Our synastry course gives you the full method.",
      label: "The synastry course",
    },
    breadcrumbHome: "Home",
    faqTitle: "Frequently asked questions",
    faq: [
      {
        q: "Which signs are most compatible with each other?",
        a: "Same-element pairs (trines) are the most fluid: Aries-Leo-Sagittarius (fire), Taurus-Virgo-Capricorn (earth), Gemini-Libra-Aquarius (air), Cancer-Scorpio-Pisces (water). Sextiles (fire-air, earth-water) follow closely. But a full synastry can make an 'incompatible' sign couple excellent.",
      },
      {
        q: "Is Sun-sign compatibility reliable?",
        a: "It is a first indicator, not a verdict: the Sun sign is only one position among about forty in the chart. Moon, Venus, Mars and the Ascendant weigh as much if not more in couple life. Use our pages as an entrance door, synastry as the serious analysis.",
      },
      {
        q: "Can two 'incompatible' signs form a happy couple?",
        a: "Absolutely. A square between Suns (e.g. Aries-Cancer) creates friction, but Moons in trine, a Venus conjunct Mars or connected lunar nodes can make it one of the most structuring relationships there is. That is the whole point of going beyond the Sun sign.",
      },
    ],
  },
  es: {
    meta: {
      title: "Compatibilidad amorosa de los signos del zodiaco",
      description:
        "Compatibilidad entre signos del zodiaco: análisis detallados por pareja — amor, sexualidad, amistad, trabajo — y un método serio más allá del signo solar.",
    },
    eyebrow: "Amor y relaciones",
    h1: "Compatibilidad de los signos del zodiaco",
    intro1:
      "¿Qué signos se entienden, y por qué? Nuestros análisis por pareja van más allá de los clichés: dinámica de elementos, fortalezas reales, puntos de fricción, sexualidad, amistad y trabajo — con, para cada dúo, las verdaderas preguntas que hacerle a la sinastría.",
    intro2:
      "Una nota de honestidad astrológica: el signo solar es solo una primera referencia. Dos personas no se reducen a dos signos — la compatibilidad completa se lee entre dos cartas astrales enteras. Nuestras páginas te dan la referencia Y el método para ir más lejos.",
    method: {
      title: "Cómo leer una compatibilidad de signos",
      body: "Los elementos dan la primera cuadrícula: fuego y aire se avivan, tierra y agua se nutren, mientras que las parejas fuego-agua o aire-tierra piden más ajustes. Los aspectos entre signos afinan: trígono (mismo elemento) = fluidez, sextil = complicidad fácil, cuadratura = fricción estimulante, oposición = atracción de contrarios. Solo después vienen las verdaderas preguntas: ¿Lunas compatibles? ¿Venus y Marte en diálogo? ¿Un Saturno que compromete o que congela? Ese es el trabajo de la sinastría.",
    },
    pairsTitle: "Compatibilidades analizadas",
    synastryCta: {
      title: "Para ir al fondo: la sinastría",
      body: "La verdadera compatibilidad se calcula entre dos cartas completas: superposición de planetas, aspectos cruzados, casas activadas. Nuestro curso de sinastría te da el método completo.",
      label: "El curso de sinastría",
    },
    breadcrumbHome: "Inicio",
    faqTitle: "Preguntas frecuentes",
    faq: [
      {
        q: "¿Cuáles son los signos más compatibles entre sí?",
        a: "Las parejas del mismo elemento (trígonos) son las más fluidas: Aries-Leo-Sagitario (fuego), Tauro-Virgo-Capricornio (tierra), Géminis-Libra-Acuario (aire), Cáncer-Escorpio-Piscis (agua). Los sextiles (fuego-aire, tierra-agua) siguen de cerca. Pero una sinastría completa puede hacer excelente una pareja de signos «incompatibles».",
      },
      {
        q: "¿Es fiable la compatibilidad de los signos solares?",
        a: "Es un primer indicador, no un veredicto: el signo solar es solo una posición entre unas cuarenta de la carta. La Luna, Venus, Marte y el Ascendente pesan igual o más en la vida de pareja. Usa nuestras páginas como puerta de entrada, y la sinastría como el análisis serio.",
      },
      {
        q: "¿Dos signos «incompatibles» pueden formar una pareja feliz?",
        a: "Absolutamente. Una cuadratura entre Soles (ej. Aries-Cáncer) crea fricción, pero unas Lunas en trígono, una Venus conjunta a Marte o unos nodos lunares conectados pueden hacer de ella una de las relaciones más estructurantes que existen. Ese es el interés de superar el solo signo solar.",
      },
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = toSeoLocale(locale);
  const t = TEXTS[loc];
  return buildMeta({
    title: t.meta.title,
    description: t.meta.description,
    canonicalPath: INTERNAL_PATH,
    type: "website",
    locale: loc,
    canonicalUrl: localizedPathUrl(INTERNAL_PATH, loc),
    languages: pathLanguageAlternates(INTERNAL_PATH),
  });
}

export default async function CompatibilityHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const loc = toSeoLocale(locale);
  const t = TEXTS[loc];
  const pageUrl = localizedPathUrl(INTERNAL_PATH, loc);

  const pairs = PAIRS.map(([a, b]) => {
    const c = PAIR_CONTENTS[pairKey(a, b)]?.[loc];
    return c ? { a, b, slug: pairSlugFor(a, b, loc), c } : null;
  }).filter((x): x is NonNullable<typeof x> => Boolean(x));

  const COLLECTION_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: t.meta.title,
    description: t.meta.description,
    inLanguage: loc,
    url: pageUrl,
    isPartOf: { "@type": "WebSite", url: SITE_URL, name: "Astro Cours" },
    author: AUTHOR_PERSON,
    publisher: PUBLISHER_ORG,
  };

  const BREADCRUMB_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t.breadcrumbHome, item: localizedPathUrl("/", loc) },
      { "@type": "ListItem", position: 2, name: t.h1, item: pageUrl },
    ],
  };

  const FAQ_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main id="main-content" className="mx-auto max-w-5xl px-6 pb-16 pt-10 text-text">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(COLLECTION_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />

      {/* HERO */}
      <header className="mb-10 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-7 sm:p-10">
        <p className="text-xs uppercase tracking-[0.18em] text-muted">{t.eyebrow}</p>
        <h1 className="mt-3 font-serif text-4xl sm:text-5xl">{t.h1}</h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-text/80 sm:text-base">{t.intro1}</p>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-text/80 sm:text-base">{t.intro2}</p>
      </header>

      {/* PAIRES */}
      <section>
        <h2 className="font-serif text-2xl sm:text-3xl">{t.pairsTitle}</h2>
        <ul role="list" className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pairs.map(({ slug, c }) => (
            <li key={slug}>
              <Link
                href={`/compatibilite/${slug}`}
                className="group block h-full rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-rose-400/30 hover:bg-white/[0.04]"
              >
                <span className="font-serif text-xl text-text transition-colors group-hover:text-rose-300">
                  {c.names.a} + {c.names.b}
                </span>
                <span className="mt-1 block text-sm text-text/70">{c.tagline}</span>
                <span aria-hidden="true" className="mt-3 block text-sm tracking-widest text-rose-300">
                  {"♥".repeat(c.scores.amour)}
                  <span className="text-white/20">{"♥".repeat(5 - c.scores.amour)}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* MÉTHODE */}
      <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
        <h2 className="font-serif text-2xl sm:text-3xl">{t.method.title}</h2>
        <p className="mt-4 text-sm leading-relaxed text-text/80 sm:text-base">{t.method.body}</p>
      </section>

      {/* CTA SYNASTRIE */}
      <section className="mt-8 rounded-3xl border border-violet-400/20 bg-violet-500/[0.06] p-6 sm:p-8">
        <h2 className="font-serif text-2xl text-violet-200 sm:text-3xl">{t.synastryCta.title}</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-text/80">{t.synastryCta.body}</p>
        <Link
          href="/synastrie"
          className="mt-5 inline-block rounded-full border border-violet-400/30 bg-white/5 px-5 py-2 text-sm font-medium text-violet-200 transition hover:bg-violet-400/10"
        >
          {t.synastryCta.label} →
        </Link>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="font-serif text-2xl sm:text-3xl">{t.faqTitle}</h2>
        <dl className="mt-6 space-y-4">
          {t.faq.map((f) => (
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
