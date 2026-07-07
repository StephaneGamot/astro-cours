import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import PlanetsCardContainer from "@/components/sections/homePage/planetesSection/CardContainer";
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
 * Hub « Les 10 planètes en astrologie » — page pilier (audit SEO 07/2026).
 * Cible « planètes astrologie », « signification des planètes » et
 * redistribue le PageRank des breadcrumbs vers les 10 pages planètes.
 */

const INTERNAL_PATH = "/planetes";

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
      title: "Les 10 planètes en astrologie : significations & interprétation",
      description:
        "Soleil, Lune, Mercure, Vénus, Mars, Jupiter, Saturne, Uranus, Neptune, Pluton : le rôle de chaque planète dans le thème astral et comment l'interpréter.",
    },
    hero: {
      eyebrow: "Cours d'astrologie",
      h1: "Les 10 planètes en astrologie",
      intro1:
        "Les planètes sont les acteurs du thème astral : chacune incarne une fonction psychique précise. Le Soleil veut, la Lune ressent, Mercure pense, Vénus aime, Mars agit, Jupiter élargit, Saturne structure — et les trois transpersonnelles (Uranus, Neptune, Pluton) relient l'individu aux mouvements collectifs de sa génération.",
      intro2:
        "Le signe indique COMMENT la fonction s'exprime, la maison indique OÙ. Chaque fiche ci-dessous détaille la symbolique, la mythologie, les maîtrises, la planète dans les 12 signes et les 12 maisons, ses transits et le profil psychologique associé.",
    },
    method: {
      title: "Comment lire une planète dans un thème",
      body: "Interprétez toujours dans cet ordre : la fonction (quelle planète ?), le style (quel signe ?), le terrain (quelle maison ?), les alliances et tensions (quels aspects ?). Une Vénus en Capricorne en Maison X n'aime pas comme une Vénus en Poissons en Maison V. Hiérarchisez ensuite : les luminaires (Soleil, Lune) et le maître d'Ascendant pèsent plus lourd que le reste.",
    },
    further: {
      title: "Pour aller plus loin",
      links: [
        { href: "/aspects", label: "Les aspects", desc: "Comment les planètes dialoguent" },
        { href: "/retrogrades", label: "Les rétrogrades", desc: "Quand une planète recule" },
        { href: "/maitrises", label: "Les maîtrises", desc: "Dignités et débilités planétaires" },
        { href: "/transits", label: "Les transits", desc: "Les planètes en mouvement" },
      ],
    },
    faqTitle: "Questions fréquentes sur les planètes",
    faq: [
      {
        q: "Quelles sont les 10 planètes utilisées en astrologie ?",
        a: "Le Soleil et la Lune (les luminaires), Mercure, Vénus et Mars (les personnelles), Jupiter et Saturne (les sociales), puis Uranus, Neptune et Pluton (les transpersonnelles). L'astrologie garde Pluton, quelle que soit sa classification astronomique, pour sa valeur symbolique.",
      },
      {
        q: "Quelle est la planète la plus importante du thème ?",
        a: "Aucune ne domine par principe : le Soleil (identité), la Lune (émotions) et le maître de l'Ascendant forment le trio structurant. Une planète devient dominante par sa position (angulaire), ses dignités et ses aspects — c'est l'analyse du thème qui le révèle.",
      },
      {
        q: "Que signifie une planète rétrograde dans un thème natal ?",
        a: "La rétrogradation est un effet d'optique : vue de la Terre, la planète semble reculer. Symboliquement, sa fonction s'intériorise : elle s'exprime de façon plus réfléchie, moins spontanée, souvent mûrie avec l'âge. Ce n'est ni une faiblesse ni une malédiction.",
      },
      {
        q: "Quelle différence entre planètes personnelles et transpersonnelles ?",
        a: "Les personnelles (Soleil à Mars) changent vite de signe et décrivent l'individualité. Les sociales (Jupiter, Saturne) marquent le rapport à la société. Les transpersonnelles (Uranus, Neptune, Pluton) restent des années dans un signe : elles colorent une génération, et ne deviennent très personnelles que fortement aspectées ou angulaires.",
      },
    ],
    breadcrumbHome: "Accueil",
  },
  en: {
    meta: {
      title: "The 10 Planets in Astrology: Meanings & Interpretation",
      description:
        "Sun, Moon, Mercury, Venus, Mars, Jupiter, Saturn, Uranus, Neptune, Pluto: each planet's role in the birth chart and how to interpret it.",
    },
    hero: {
      eyebrow: "Astrology course",
      h1: "The 10 Planets in Astrology",
      intro1:
        "Planets are the actors of the birth chart: each embodies a specific psychic function. The Sun wills, the Moon feels, Mercury thinks, Venus loves, Mars acts, Jupiter expands, Saturn structures — and the three transpersonal planets (Uranus, Neptune, Pluto) connect the individual to the collective movements of their generation.",
      intro2:
        "The sign shows HOW the function expresses itself, the house shows WHERE. Each card below details the symbolism, mythology, rulerships, the planet through the 12 signs and 12 houses, its transits and the associated psychological profile.",
    },
    method: {
      title: "How to read a planet in a chart",
      body: "Always interpret in this order: the function (which planet?), the style (which sign?), the terrain (which house?), the alliances and tensions (which aspects?). A Capricorn Venus in the 10th house does not love like a Pisces Venus in the 5th. Then prioritize: the luminaries (Sun, Moon) and the Ascendant ruler weigh more than the rest.",
    },
    further: {
      title: "Go further",
      links: [
        { href: "/aspects", label: "Aspects", desc: "How planets talk to each other" },
        { href: "/retrogrades", label: "Retrogrades", desc: "When a planet moves backward" },
        { href: "/maitrises", label: "Rulerships", desc: "Planetary dignities and debilities" },
        { href: "/transits", label: "Transits", desc: "Planets in motion" },
      ],
    },
    faqTitle: "Frequently asked questions about the planets",
    faq: [
      {
        q: "Which 10 planets are used in astrology?",
        a: "The Sun and Moon (the luminaries), Mercury, Venus and Mars (the personal planets), Jupiter and Saturn (the social planets), then Uranus, Neptune and Pluto (the transpersonal ones). Astrology keeps Pluto, whatever its astronomical classification, for its symbolic value.",
      },
      {
        q: "Which planet is the most important in a chart?",
        a: "None dominates by principle: the Sun (identity), the Moon (emotions) and the Ascendant ruler form the structuring trio. A planet becomes dominant through its position (angular), dignities and aspects — chart analysis reveals it.",
      },
      {
        q: "What does a retrograde planet mean in a birth chart?",
        a: "Retrogradation is an optical effect: seen from Earth, the planet appears to move backward. Symbolically, its function turns inward: it expresses itself in a more reflective, less spontaneous way, often maturing with age. It is neither a weakness nor a curse.",
      },
      {
        q: "What is the difference between personal and transpersonal planets?",
        a: "Personal planets (Sun to Mars) change sign quickly and describe individuality. Social planets (Jupiter, Saturn) mark the relationship to society. Transpersonal planets (Uranus, Neptune, Pluto) stay years in one sign: they color a generation, and only become deeply personal when strongly aspected or angular.",
      },
    ],
    breadcrumbHome: "Home",
  },
  es: {
    meta: {
      title: "Los 10 planetas en astrología: significados e interpretación",
      description:
        "Sol, Luna, Mercurio, Venus, Marte, Júpiter, Saturno, Urano, Neptuno, Plutón: el papel de cada planeta en la carta natal y cómo interpretarlo.",
    },
    hero: {
      eyebrow: "Curso de astrología",
      h1: "Los 10 planetas en astrología",
      intro1:
        "Los planetas son los actores de la carta natal: cada uno encarna una función psíquica precisa. El Sol quiere, la Luna siente, Mercurio piensa, Venus ama, Marte actúa, Júpiter expande, Saturno estructura — y los tres transpersonales (Urano, Neptuno, Plutón) conectan al individuo con los movimientos colectivos de su generación.",
      intro2:
        "El signo indica CÓMO se expresa la función; la casa indica DÓNDE. Cada ficha detalla la simbología, la mitología, las regencias, el planeta en los 12 signos y las 12 casas, sus tránsitos y el perfil psicológico asociado.",
    },
    method: {
      title: "Cómo leer un planeta en una carta",
      body: "Interpreta siempre en este orden: la función (¿qué planeta?), el estilo (¿qué signo?), el terreno (¿qué casa?), las alianzas y tensiones (¿qué aspectos?). Una Venus en Capricornio en Casa X no ama como una Venus en Piscis en Casa V. Luego jerarquiza: las luminarias (Sol, Luna) y el regente del Ascendente pesan más que el resto.",
    },
    further: {
      title: "Para profundizar",
      links: [
        { href: "/aspects", label: "Los aspectos", desc: "Cómo dialogan los planetas" },
        { href: "/retrogrades", label: "Los retrógrados", desc: "Cuando un planeta retrocede" },
        { href: "/maitrises", label: "Las regencias", desc: "Dignidades y debilidades planetarias" },
        { href: "/transits", label: "Los tránsitos", desc: "Los planetas en movimiento" },
      ],
    },
    faqTitle: "Preguntas frecuentes sobre los planetas",
    faq: [
      {
        q: "¿Cuáles son los 10 planetas usados en astrología?",
        a: "El Sol y la Luna (las luminarias), Mercurio, Venus y Marte (los personales), Júpiter y Saturno (los sociales), y Urano, Neptuno y Plutón (los transpersonales). La astrología conserva a Plutón, sea cual sea su clasificación astronómica, por su valor simbólico.",
      },
      {
        q: "¿Cuál es el planeta más importante de la carta?",
        a: "Ninguno domina por principio: el Sol (identidad), la Luna (emociones) y el regente del Ascendente forman el trío estructurante. Un planeta se vuelve dominante por su posición (angular), sus dignidades y sus aspectos — el análisis de la carta lo revela.",
      },
      {
        q: "¿Qué significa un planeta retrógrado en la carta natal?",
        a: "La retrogradación es un efecto óptico: visto desde la Tierra, el planeta parece retroceder. Simbólicamente, su función se interioriza: se expresa de forma más reflexiva, menos espontánea, y suele madurar con la edad. No es una debilidad ni una maldición.",
      },
      {
        q: "¿Qué diferencia hay entre planetas personales y transpersonales?",
        a: "Los personales (Sol a Marte) cambian rápido de signo y describen la individualidad. Los sociales (Júpiter, Saturno) marcan la relación con la sociedad. Los transpersonales (Urano, Neptuno, Plutón) permanecen años en un signo: tiñen a una generación y solo se vuelven muy personales si están fuertemente aspectados o angulares.",
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

export default async function PlanetsHubPage({
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
    hasPart: cards.planetes.map((p) => ({
      "@type": "Article",
      headline: p.name,
      url: pillarUrl("planetes", p.slug, loc),
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

      {/* GRILLE DES 10 PLANÈTES */}
      <PlanetsCardContainer items={cards.planetes} />

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
