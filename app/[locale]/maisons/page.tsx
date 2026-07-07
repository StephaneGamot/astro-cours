import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import MaisonsCardContainer from "@/components/sections/homePage/maisonsSection/CardContainer";
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
 * Hub « Les 12 maisons astrologiques » — page pilier (audit SEO 07/2026).
 * Cible « maisons astrologiques », « les 12 maisons » et redistribue le
 * PageRank des breadcrumbs vers les 12 pages maisons (avant : /#maisons).
 */

const INTERNAL_PATH = "/maisons";

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
      title: "Les 12 maisons astrologiques : signification & interprétation",
      description:
        "Les 12 maisons du thème astral expliquées : sens traditionnel et moderne, axes, planètes en maison, exercices. Cours complet pour interpréter chaque maison.",
    },
    hero: {
      eyebrow: "Cours d'astrologie",
      h1: "Les 12 maisons astrologiques",
      intro1:
        "Si les signes décrivent COMMENT une énergie s'exprime, les maisons décrivent OÙ : dans quel domaine de vie. Les douze maisons découpent le ciel local de votre naissance — calculé à partir de l'heure et du lieu exacts — en douze territoires : l'identité, l'argent, la communication, le foyer, la création, le travail, le couple, la transformation, les horizons, la vocation, les amitiés, l'intériorité.",
      intro2:
        "C'est le système le plus concret de l'astrologie : une planète en Maison X parle de carrière, la même planète en Maison IV parle de foyer. Chaque fiche détaille le sens traditionnel (Ptolémée, Fludd, Gadbury), la lecture moderne, l'axe, les 10 planètes dans la maison, des exercices pratiques et une FAQ.",
    },
    method: {
      title: "Comment lire une maison dans un thème",
      body: "Trois questions suffisent pour commencer : quel signe occupe la cuspide de la maison (le style du domaine) ? Quelles planètes y résident (les fonctions qui s'y investissent) ? Où est le maître de la maison (le domaine se joue-t-il ailleurs) ? Une maison vide n'est pas un domaine vide : elle s'interprète par son maître. Commencez par les quatre angles — Maisons I, IV, VII et X — qui structurent tout le thème.",
    },
    further: {
      title: "Pour aller plus loin",
      links: [
        { href: "/cuspides-des-maisons", label: "Les cuspides", desc: "Les portes d'entrée des maisons" },
        { href: "/maisons-derivees", label: "Maisons dérivées", desc: "Le thème de votre entourage" },
        { href: "/maisons-dominantes", label: "Maisons dominantes", desc: "Repérer les domaines clés" },
        { href: "/transits", label: "Les transits", desc: "Quand les maisons s'activent" },
      ],
    },
    faqTitle: "Questions fréquentes sur les maisons",
    faq: [
      {
        q: "Que représentent les 12 maisons en astrologie ?",
        a: "Chaque maison gouverne un domaine de vie : I l'identité, II les ressources, III la communication, IV les racines, V la création, VI le quotidien et la santé, VII le couple, VIII la transformation, IX les horizons, X la vocation, XI le collectif, XII l'intériorité. Les planètes qui les occupent montrent comment ces domaines se vivent.",
      },
      {
        q: "Pourquoi faut-il l'heure de naissance pour les maisons ?",
        a: "Les maisons dépendent de la rotation de la Terre : l'Ascendant (début de la Maison I) change de signe environ toutes les deux heures. Sans heure précise, la répartition des planètes en maisons — et donc toute la dimension concrète du thème — reste incertaine.",
      },
      {
        q: "Que signifie une maison vide ?",
        a: "Rien d'inquiétant : avec 10 planètes pour 12 maisons, plusieurs maisons sont toujours vides. Le domaine s'interprète alors par la planète maîtresse du signe de la cuspide : sa position par signe, maison et aspects décrit comment ce domaine se vit.",
      },
      {
        q: "Quelle est la différence entre une maison et un signe ?",
        a: "Le signe est un style d'énergie universel (tout le monde né la même semaine a le même Soleil) ; la maison est un territoire personnel, calculé sur l'heure et le lieu exacts de naissance. Le signe colore, la maison localise : c'est leur combinaison qui individualise le thème.",
      },
    ],
    breadcrumbHome: "Accueil",
  },
  en: {
    meta: {
      title: "The 12 Astrological Houses: Meaning & Interpretation",
      description:
        "The 12 houses of the birth chart explained: traditional and modern meaning, axes, planets in houses, exercises. A complete course to interpret each house.",
    },
    hero: {
      eyebrow: "Astrology course",
      h1: "The 12 Astrological Houses",
      intro1:
        "If signs describe HOW an energy expresses itself, houses describe WHERE: in which area of life. The twelve houses divide the local sky of your birth — computed from the exact time and place — into twelve territories: identity, money, communication, home, creativity, work, partnership, transformation, horizons, vocation, friendships, inner life.",
      intro2:
        "It is astrology's most concrete system: a planet in the 10th house speaks of career, the same planet in the 4th speaks of home. Each card details the traditional meaning (Ptolemy, Fludd, Gadbury), the modern reading, the axis, the 10 planets in the house, practical exercises and a FAQ.",
    },
    method: {
      title: "How to read a house in a chart",
      body: "Three questions are enough to start: which sign sits on the house cusp (the style of the domain)? Which planets reside there (the functions invested in it)? Where is the house ruler (does the domain play out elsewhere)? An empty house is not an empty domain: it is read through its ruler. Start with the four angles — houses I, IV, VII and X — which structure the whole chart.",
    },
    further: {
      title: "Go further",
      links: [
        { href: "/cuspides-des-maisons", label: "House cusps", desc: "The entry doors of the houses" },
        { href: "/maisons-derivees", label: "Derived houses", desc: "The chart of your entourage" },
        { href: "/maisons-dominantes", label: "Dominant houses", desc: "Spotting the key domains" },
        { href: "/transits", label: "Transits", desc: "When houses get activated" },
      ],
    },
    faqTitle: "Frequently asked questions about the houses",
    faq: [
      {
        q: "What do the 12 houses represent in astrology?",
        a: "Each house rules an area of life: I identity, II resources, III communication, IV roots, V creativity, VI daily life and health, VII partnership, VIII transformation, IX horizons, X vocation, XI community, XII inner life. The planets occupying them show how these areas are lived.",
      },
      {
        q: "Why is the birth time needed for the houses?",
        a: "Houses depend on the Earth's rotation: the Ascendant (start of the 1st house) changes sign roughly every two hours. Without a precise time, the distribution of planets across houses — and thus the chart's whole concrete dimension — remains uncertain.",
      },
      {
        q: "What does an empty house mean?",
        a: "Nothing worrying: with 10 planets for 12 houses, several houses are always empty. The domain is then read through the ruling planet of the cusp sign: its position by sign, house and aspects describes how that domain is lived.",
      },
      {
        q: "What is the difference between a house and a sign?",
        a: "A sign is a universal energy style (everyone born the same week shares the same Sun); a house is a personal territory, computed from the exact birth time and place. The sign colors, the house localizes: their combination is what individualizes the chart.",
      },
    ],
    breadcrumbHome: "Home",
  },
  es: {
    meta: {
      title: "Las 12 casas astrológicas: significado e interpretación",
      description:
        "Las 12 casas de la carta natal explicadas: sentido tradicional y moderno, ejes, planetas en las casas, ejercicios. Curso completo para interpretar cada casa.",
    },
    hero: {
      eyebrow: "Curso de astrología",
      h1: "Las 12 casas astrológicas",
      intro1:
        "Si los signos describen CÓMO se expresa una energía, las casas describen DÓNDE: en qué área de la vida. Las doce casas dividen el cielo local de tu nacimiento — calculado con la hora y el lugar exactos — en doce territorios: identidad, dinero, comunicación, hogar, creatividad, trabajo, pareja, transformación, horizontes, vocación, amistades, vida interior.",
      intro2:
        "Es el sistema más concreto de la astrología: un planeta en la Casa X habla de carrera; el mismo planeta en la Casa IV habla del hogar. Cada ficha detalla el sentido tradicional (Ptolomeo, Fludd, Gadbury), la lectura moderna, el eje, los 10 planetas en la casa, ejercicios prácticos y una FAQ.",
    },
    method: {
      title: "Cómo leer una casa en una carta",
      body: "Tres preguntas bastan para empezar: ¿qué signo ocupa la cúspide de la casa (el estilo del ámbito)? ¿Qué planetas residen en ella (las funciones que se invierten)? ¿Dónde está el regente de la casa (¿el ámbito se juega en otra parte?)? Una casa vacía no es un ámbito vacío: se interpreta por su regente. Empieza por los cuatro ángulos — casas I, IV, VII y X — que estructuran toda la carta.",
    },
    further: {
      title: "Para profundizar",
      links: [
        { href: "/cuspides-des-maisons", label: "Las cúspides", desc: "Las puertas de entrada de las casas" },
        { href: "/maisons-derivees", label: "Casas derivadas", desc: "La carta de tu entorno" },
        { href: "/maisons-dominantes", label: "Casas dominantes", desc: "Detectar los ámbitos clave" },
        { href: "/transits", label: "Los tránsitos", desc: "Cuándo se activan las casas" },
      ],
    },
    faqTitle: "Preguntas frecuentes sobre las casas",
    faq: [
      {
        q: "¿Qué representan las 12 casas en astrología?",
        a: "Cada casa rige un área de la vida: I la identidad, II los recursos, III la comunicación, IV las raíces, V la creatividad, VI lo cotidiano y la salud, VII la pareja, VIII la transformación, IX los horizontes, X la vocación, XI lo colectivo, XII la vida interior. Los planetas que las ocupan muestran cómo se viven esas áreas.",
      },
      {
        q: "¿Por qué se necesita la hora de nacimiento para las casas?",
        a: "Las casas dependen de la rotación de la Tierra: el Ascendente (inicio de la Casa I) cambia de signo aproximadamente cada dos horas. Sin una hora precisa, la distribución de los planetas en las casas — y toda la dimensión concreta de la carta — queda incierta.",
      },
      {
        q: "¿Qué significa una casa vacía?",
        a: "Nada preocupante: con 10 planetas para 12 casas, siempre hay varias casas vacías. El ámbito se interpreta entonces por el planeta regente del signo de la cúspide: su posición por signo, casa y aspectos describe cómo se vive ese ámbito.",
      },
      {
        q: "¿Cuál es la diferencia entre una casa y un signo?",
        a: "El signo es un estilo de energía universal (todos los nacidos la misma semana comparten el mismo Sol); la casa es un territorio personal, calculado con la hora y el lugar exactos del nacimiento. El signo colorea, la casa localiza: su combinación individualiza la carta.",
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

export default async function HousesHubPage({
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
    hasPart: cards.maisons.map((m) => ({
      "@type": "Article",
      headline: m.name,
      url: pillarUrl("maisons", m.slug, loc),
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

      {/* GRILLE DES 12 MAISONS */}
      <MaisonsCardContainer items={cards.maisons} />

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
