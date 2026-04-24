import type { ReactNode } from "react";
import Link from "next/link";
import { Pill, TagPillsInline, getGlowFromTags } from "./ui";
import Image from "next/image";
import { AUTHOR_PERSON, PUBLISHER_ORG } from "@/lib/seo";

const SITE_URL = "https://www.astro-cours.com";
const ARTICLE_URL = `${SITE_URL}/blog/amour-fidelite-signes-zodiaque`;
const COVER_URL = `${SITE_URL}/images/blog/amour-fidelite-signes.webp`;

export const meta = {
  slug: "amour-fidelite-signes-zodiaque",
  title: "Amour et fidélité selon les 12 signes du zodiaque",
  description:
    "Comment chaque signe du zodiaque vit l’amour et la fidélité : besoins affectifs, compatibilités amoureuses",
  date: "2026-03-18",
  tags: ["amour", "relation", "signe", "psychologie", "compatibilité"],
  readingLevel: "débutant" as const,
  cover: "/images/blog/amour-fidelite-signes-zodiaque.webp",
};

export const metadata = {
  title: `${meta.title} | Astro Cours`,
  description: meta.description,
  alternates: {
    canonical: `/blog/${meta.slug}`,
  },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: ARTICLE_URL,
    type: "article",
    siteName: "Astro Cours",
    locale: "fr_FR",
    publishedTime: meta.date,
    images: [
      {
        url: COVER_URL,
        width: 1200,
        height: 630,
        alt: "Amour et fidélité selon les signes du zodiaque",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
    images: [COVER_URL],
  },
};

function H2({
  children,
  id,
}: {
  children: ReactNode;
  id: string;
}) {
  return (
    <h2
      id={id}
      className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight"
    >
      {children}
    </h2>
  );
}
type ZodiacElement = "feu" | "terre" | "air" | "eau";

function getElementCardStyles(element: ZodiacElement) {
  if (element === "feu") {
    return {
      border: "border-red-500/30",
      hoverBorder: "group-hover:border-red-400/50",
      iconWrap: "border-red-500/25 bg-red-500/10",
      glow: "from-red-500/10 to-transparent",
      titleHover: "group-hover:text-red-200",
      linkText: "group-hover:text-red-100",
    };
  }

  if (element === "terre") {
    return {
      border: "border-emerald-500/30",
      hoverBorder: "group-hover:border-emerald-400/50",
      iconWrap: "border-emerald-500/25 bg-emerald-500/10",
      glow: "from-emerald-500/10 to-transparent",
      titleHover: "group-hover:text-emerald-200",
      linkText: "group-hover:text-emerald-100",
    };
  }

  if (element === "air") {
    return {
      border: "border-sky-500/30",
      hoverBorder: "group-hover:border-sky-400/50",
      iconWrap: "border-sky-500/25 bg-sky-500/10",
      glow: "from-sky-500/10 to-transparent",
      titleHover: "group-hover:text-sky-200",
      linkText: "group-hover:text-sky-100",
    };
  }

  return {
    border: "border-violet-500/30",
    hoverBorder: "group-hover:border-violet-400/50",
    iconWrap: "border-violet-500/25 bg-violet-500/10",
    glow: "from-violet-500/10 to-transparent",
    titleHover: "group-hover:text-violet-200",
    linkText: "group-hover:text-violet-100",
  };
}

function Card({
  title,
  href,
  imageSrc,
  imageAlt,
  element,
  children,
}: {
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  element: ZodiacElement;
  children: ReactNode;
}) {
  const cardTitleId = `card-title-${title.toLowerCase()}`;
  const styles = getElementCardStyles(element);

  return (
    <article aria-labelledby={cardTitleId} className="h-full">
      <Link
        href={href}
        aria-labelledby={cardTitleId}
        aria-describedby={`${cardTitleId}-desc`}
        className={[
          "group relative block h-full overflow-hidden rounded-2xl",
          "border bg-black/20 p-6 shadow-soft transition",
          "hover:bg-white/[0.04] focus:outline-none focus-visible:ring-2",
          "focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
          styles.border,
          styles.hoverBorder,
        ].join(" ")}
      >
        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${styles.glow} opacity-0 transition duration-300 group-hover:opacity-100`}
          aria-hidden="true"
        />

        <div className="relative flex justify-between">
                      <h3
            id={cardTitleId}
            className={[
              "mt-4 text-lg md:text-xl font-semibold tracking-tight leading-tight text-text transition",
              styles.titleHover,
            ].join(" ")}
          >
            {title}
          </h3>
          <div
            className={`relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border ${styles.iconWrap}`}
            aria-hidden="true"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={72}
              height={72}
              className="h-auto w-auto object-contain opacity-95 transition group-hover:scale-[1.03]"
              sizes="72px"
            />
          </div>


        </div>

        <div
          id={`${cardTitleId}-desc`}
          className="relative mt-4 space-y-3 text-text/85 leading-relaxed"
        >
          {children}
        </div>

        <div className="relative mt-5 flex items-center justify-end">
          <span className={["text-sm text-text/70 transition", styles.linkText].join(" ")}>
            Lire la fiche du signe
          </span>
        </div>
      </Link>
    </article>
  );
}

type CompatibilityTone =
  | "feu"
  | "terre"
  | "air"
  | "eau"
  | "feu-air"
  | "terre-eau";

  function getCompatibilityStyles(tone: CompatibilityTone) {
  if (tone === "feu") {
    return {
      border: "border-red-500/30",
      bg: "bg-red-500/[0.06]",
      badge: "border-red-500/25 bg-red-500/10 text-red-200",
      title: "text-red-100",
      glow: "from-red-500/10 to-transparent",
    };
  }

  if (tone === "terre") {
    return {
      border: "border-emerald-500/30",
      bg: "bg-emerald-500/[0.06]",
      badge: "border-emerald-500/25 bg-emerald-500/10 text-emerald-200",
      title: "text-emerald-100",
      glow: "from-emerald-500/10 to-transparent",
    };
  }

  if (tone === "air") {
    return {
      border: "border-sky-500/30",
      bg: "bg-sky-500/[0.06]",
      badge: "border-sky-500/25 bg-sky-500/10 text-sky-200",
      title: "text-sky-100",
      glow: "from-sky-500/10 to-transparent",
    };
  }

  if (tone === "eau") {
    return {
      border: "border-violet-500/30",
      bg: "bg-violet-500/[0.06]",
      badge: "border-violet-500/25 bg-violet-500/10 text-violet-200",
      title: "text-violet-100",
      glow: "from-violet-500/10 to-transparent",
    };
  }

  if (tone === "feu-air") {
    return {
      border: "border-orange-400/30",
      bg: "bg-gradient-to-br from-red-500/[0.06] to-sky-500/[0.06]",
      badge: "border-orange-400/25 bg-orange-400/10 text-orange-100",
      title: "text-orange-100",
      glow: "from-orange-400/10 to-transparent",
    };
  }

  return {
    border: "border-teal-400/30",
    bg: "bg-gradient-to-br from-emerald-500/[0.06] to-violet-500/[0.06]",
    badge: "border-teal-400/25 bg-teal-400/10 text-teal-100",
    title: "text-teal-100",
    glow: "from-teal-400/10 to-transparent",
  };
}

function Badge({
  children,
  tone = "default",
  className = "",
}: {
  children: ReactNode;
  tone?: "default" | "soft" | "strong";
  className?: string;
}) {
  const styles =
    tone === "strong"
      ? "border-white/20 bg-white/10 text-white"
      : tone === "soft"
        ? "border-white/10 bg-white/5 text-text/85"
        : "border-white/10 bg-black/20 text-text/90";

  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium tracking-wide ${styles} ${className}`}
    >
      {children}
    </span>
  );
}

const signsOverview = [
  {
    sign: "Bélier",
    href: "/signes/belier",
    fidelity: "Moyenne à forte",
    need: "Passion, mouvement, intensité",
    risk: "Impulsivité, ennui rapide",
  },
  {
    sign: "Taureau",
    href: "/signes/taureau",
    fidelity: "Très forte",
    need: "Sécurité, stabilité, sensualité",
    risk: "Possessivité, inertie",
  },
  {
    sign: "Gémeaux",
    href: "/signes/gemeaux",
    fidelity: "Variable",
    need: "Dialogue, légèreté, stimulation",
    risk: "Dispersion, ambiguïté",
  },
  {
    sign: "Cancer",
    href: "/signes/cancer",
    fidelity: "Forte",
    need: "Protection, lien émotionnel, tendresse",
    risk: "Dépendance affective, repli",
  },
  {
    sign: "Lion",
    href: "/signes/lion",
    fidelity: "Forte si le cœur est nourri",
    need: "Admiration, chaleur, loyauté",
    risk: "Orgueil, besoin excessif d’attention",
  },
  {
    sign: "Vierge",
    href: "/signes/vierge",
    fidelity: "Forte",
    need: "Confiance, cohérence, stabilité quotidienne",
    risk: "Critique, retenue affective",
  },
  {
    sign: "Balance",
    href: "/signes/balance",
    fidelity: "Moyenne à forte",
    need: "Harmonie, élégance relationnelle, dialogue",
    risk: "Indécision, séduction diffuse",
  },
  {
    sign: "Scorpion",
    href: "/signes/scorpion",
    fidelity: "Très forte ou rupture nette",
    need: "Fusion, vérité, intensité émotionnelle",
    risk: "Jalousie, contrôle, obsession",
  },
  {
    sign: "Sagittaire",
    href: "/signes/sagittaire",
    fidelity: "Bonne si libre",
    need: "Espace, enthousiasme, horizon commun",
    risk: "Fuite, instabilité, refus des contraintes",
  },
  {
    sign: "Capricorne",
    href: "/signes/capricorne",
    fidelity: "Très forte",
    need: "Engagement, solidité, respect mutuel",
    risk: "Froideur, rigidité émotionnelle",
  },
  {
    sign: "Verseau",
    href: "/signes/verseau",
    fidelity: "Particulière mais réelle",
    need: "Liberté, complicité mentale, singularité",
    risk: "Distance, imprévisibilité",
  },
  {
    sign: "Poissons",
    href: "/signes/poissons",
    fidelity: "Sensible mais mouvante",
    need: "Fusion, douceur, inspiration, empathie",
    risk: "Flou, idéalisation, absence de limites",
  },
];

const compatibilities = [
  {
    title: "Les unions de feu : passion et élan",
    signs: "Bélier, Lion, Sagittaire",
    tone: "feu" as const,
    text: "Entre signes de feu, l’amour se nourrit d’enthousiasme, de désir, d’élan vital et d’admiration mutuelle. Ces relations peuvent être très vivantes, très stimulantes, mais aussi plus instables si personne ne régule l’intensité ou l’ego.",
  },
  {
    title: "Les unions de terre : stabilité et construction",
    signs: "Taureau, Vierge, Capricorne",
    tone: "terre" as const,
    text: "Les signes de terre recherchent souvent des relations sérieuses, concrètes et durables. L’attachement s’exprime par la fiabilité, la continuité et la présence. Le lien est solide, mais peut manquer de spontanéité si la relation devient trop prévisible.",
  },
  {
    title: "Les unions d’air : échange et affinité mentale",
    signs: "Gémeaux, Balance, Verseau",
    tone: "air" as const,
    text: "Les signes d’air se rejoignent par le dialogue, l’intelligence relationnelle et la circulation des idées. L’amour naît souvent d’une complicité mentale. Le risque est de rester dans la relation conceptuelle ou sociale sans toujours descendre assez profondément dans l’émotion.",
  },
  {
    title: "Les unions d’eau : sensibilité et profondeur",
    signs: "Cancer, Scorpion, Poissons",
    tone: "eau" as const,
    text: "Entre signes d’eau, le lien affectif peut être puissant, intuitif et très enveloppant. Il existe un fort besoin de fusion, de confiance et de partage émotionnel. Ces relations sont souvent profondes, mais elles peuvent devenir trop intenses ou trop fusionnelles sans cadre clair.",
  },
  {
    title: "Feu et air : attraction naturelle",
    signs: "Bélier/Lion/Sagittaire avec Gémeaux/Balance/Verseau",
    tone: "feu-air" as const,
    text: "Le feu est souvent stimulé par l’air. L’un apporte l’élan, l’autre le mouvement et la pensée. Cette combinaison favorise la séduction, la mobilité et la légèreté. Elle fonctionne très bien lorsque la profondeur émotionnelle n’est pas négligée.",
  },
  {
    title: "Terre et eau : compatibilité constructive",
    signs: "Taureau/Vierge/Capricorne avec Cancer/Scorpion/Poissons",
    tone: "terre-eau" as const,
    text: "La terre sécurise l’eau, et l’eau humanise la terre. C’est l’une des combinaisons les plus fécondes pour construire dans la durée : l’un apporte la structure, l’autre la sensibilité. Le défi consiste à éviter l’excès de dépendance ou de contrôle affectif.",
  },
];

export default function Post() {
  const glow = getGlowFromTags(meta.tags);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    image: [COVER_URL],
    datePublished: meta.date,
    dateModified: meta.date,
    inLanguage: "fr-FR",
    mainEntityOfPage: ARTICLE_URL,
    author: AUTHOR_PERSON,
    publisher: PUBLISHER_ORG,
    keywords: meta.tags.join(", "),
    articleSection: "Astrologie",
    educationalLevel: meta.readingLevel,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: meta.title,
        item: ARTICLE_URL,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quel signe astrologique est le plus fidèle en amour ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Il n’existe pas un signe universellement le plus fidèle. En astrologie, la fidélité dépend de la structure du signe, mais aussi du thème natal, de la maturité affective et de la manière dont la relation répond à ses besoins profonds.",
        },
      },
      {
        "@type": "Question",
        name: "Les signes d’eau sont-ils plus amoureux ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Les signes d’eau expriment souvent l’amour avec davantage de sensibilité, de profondeur émotionnelle et de besoin de fusion. Cela ne veut pas dire qu’ils aiment mieux, mais qu’ils aiment différemment.",
        },
      },
      {
        "@type": "Question",
        name: "La compatibilité amoureuse dépend-elle seulement du signe solaire ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Non. Le signe solaire donne une première indication, mais une étude sérieuse de la compatibilité demande aussi d’examiner Vénus, Mars, la Lune, l’Ascendant et la dynamique globale du thème astral.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <article className="space-y-10">
        {/* HERO */}
        <header
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-7 shadow-soft"
         
        >
          <div
            className={`pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl ${glow}`}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative">
            <p className="text-sm text-text/65">Astrologie relationnelle</p>

        

            <p className="mt-4 max-w-2xl text-text/80 leading-relaxed">
              Aimer ne signifie pas la même chose pour tous. Certains signes
              recherchent avant tout la
              <strong> sécurité affective</strong>, d’autres la
              <strong> passion</strong>, la
              <strong> liberté</strong>, la
              <strong> profondeur psychologique</strong> ou la
              <strong> fusion émotionnelle</strong>.
            </p>

            <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
              Observer l’amour à travers les signes du zodiaque permet de mieux
              comprendre la manière dont chacun s’attache, s’engage, protège,
              désire ou parfois se détourne de la relation.
            </p>

            <div
              className="mt-5 flex flex-wrap gap-2"
              aria-label="Résumé des thèmes de l’article"
            >
              <Pill tone="rose">Amour</Pill>
              <Pill tone="violet">Fidélité</Pill>
              <Pill tone="sky">Compatibilités</Pill>
              <Pill tone="emerald">Lecture psychologique</Pill>
            </div>

            <div className="mt-4" aria-label="Mots-clés de l’article">
              <TagPillsInline tags={meta.tags} />
            </div>
          </div>
        </header>

        {/* INTRO */}
        <section className="space-y-4" aria-labelledby="intro-article">
          <H2 id="intro-article">Aimer n’est pas seulement ressentir</H2>

          <p className="text-text/85 leading-relaxed">
            En astrologie, l’amour n’est pas réduit à un sentiment abstrait. Il
            s’exprime à travers une structure psychologique : la manière de
            désirer, de s’attacher, de faire confiance, de supporter la durée
            ou d’accepter la liberté de l’autre.
          </p>

          <p className="text-text/85 leading-relaxed">
            La fidélité, elle aussi, prend plusieurs formes. Pour certains
            signes, elle signifie continuité et sécurité. Pour d’autres, elle
            suppose avant tout sincérité, intensité ou loyauté intérieure, même
            si la relation doit rester mobile pour ne pas s’éteindre.
          </p>
        </section>

        {/* TABLEAU */}
        <section className="space-y-6" aria-labelledby="tableau-comparatif">
          <H2 id="tableau-comparatif">
            Tableau comparatif : fidélité, besoin affectif et risque relationnel
          </H2>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-soft">
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-sm">
                <thead className="bg-white/[0.04]">
                  <tr className="text-left">
                    <th scope="col" className="px-5 py-4 font-semibold text-white">Signe</th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Fidélité
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Besoin principal
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Risque relationnel
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {signsOverview.map((item, index) => (
                    <tr
                      key={item.sign}
                      className={
                        index % 2 === 0
                          ? "border-t border-white/10"
                          : "border-t border-white/10 bg-white/[0.02]"
                      }
                    >
                      <td className="px-5 py-4 align-top">
                        <Link
                          href={item.href}
                          className="font-medium text-white transition hover:text-text"
                        >
                          {item.sign}
                        </Link>
                      </td>
                      <td className="px-5 py-4 align-top text-text/85">
                        {item.fidelity}
                      </td>
                      <td className="px-5 py-4 align-top text-text/85">
                        {item.need}
                      </td>
                      <td className="px-5 py-4 align-top text-text/85">
                        {item.risk}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-sm text-text/65 leading-relaxed">
            Ce tableau donne une vue d’ensemble. En pratique, une analyse
            amoureuse plus sérieuse demande aussi d’observer Vénus, Mars, la
            Lune, l’Ascendant et les aspects du thème natal.
          </p>
        </section>

        {/* LES 12 SIGNES */}
        <section className="space-y-6" aria-labelledby="les-12-signes">
          <H2 id="les-12-signes">Comment chaque signe vit l’amour et la fidélité</H2>

          <div className="grid gap-6 lg:grid-cols-2">
      <Card
  title="Bélier"
  href="/signes/belier"
  imageSrc="/images/zodiaque/belier.webp"
  imageAlt="Symbole astrologique du Bélier"
  element="feu"
>
              <p>
                Le Bélier aime avec franchise, intensité et immédiateté. Il
                cherche le feu vivant de la relation, l’élan, la conquête, le
                sentiment d’être pleinement engagé dans quelque chose qui vibre.
              </p>
              <p>
                Sa fidélité existe lorsqu’il se sent vivant dans le lien. Ce
                signe n’est pas forcément infidèle par nature, mais il supporte
                mal la routine, la passivité ou la stagnation affective.
              </p>
              <p>
                <strong>Besoin essentiel :</strong> passion, vérité directe,
                énergie partagée.
              </p>
            </Card>

         <Card
  title="Taureau"
  href="/signes/taureau"
  imageSrc="/images/zodiaque/taureau.webp"
  imageAlt="Symbole astrologique du Taureau"
  element="terre"
>
              <p>
                Le Taureau aime dans la durée. Il recherche un lien concret,
                rassurant, incarné, stable. Son amour s’exprime souvent par la
                présence, la constance, la sensualité et la capacité à tenir.
              </p>
              <p>
                C’est l’un des signes les plus naturellement fidèles lorsqu’il
                est profondément attaché. Il n’aime pas l’instabilité et préfère
                construire plutôt que disperser son énergie.
              </p>
              <p>
                <strong>Besoin essentiel :</strong> sécurité, confiance,
                continuité affective.
              </p>
            </Card>

           <Card
  title="Gémeaux"
  href="/signes/gemeaux"
  imageSrc="/images/zodiaque/gemeaux.webp"
  imageAlt="Symbole astrologique des Gémeaux"
   element="air"
>
              <p>
                Les Gémeaux tombent souvent amoureux par l’esprit. La parole, la
                curiosité, la vivacité de l’échange, l’humour et la sensation de
                mouvement sont essentiels pour eux.
              </p>
              <p>
                Leur fidélité dépend largement de la qualité du lien mental. Si
                la relation devient lourde, répétitive ou fermée, ils peuvent se
                détacher, non par absence de cœur, mais par besoin d’air et de
                renouvellement.
              </p>
              <p>
                <strong>Besoin essentiel :</strong> dialogue, mobilité,
                stimulation intellectuelle.
              </p>
            </Card>

            <Card
  title="Cancer"
  href="/signes/cancer"
  imageSrc="/images/zodiaque/cancer.webp"
  imageAlt="Symbole astrologique du Cancer"
  element="eau"
>
              <p>
                Le Cancer aime profondément, affectivement, souvent avec une
                grande mémoire émotionnelle. Il investit le lien comme un espace
                de protection, de confiance et d’appartenance.
              </p>
              <p>
                Sa fidélité est généralement forte lorsqu’il se sent en
                sécurité. Il a besoin d’un amour qui rassure, enveloppe et
                respecte sa sensibilité.
              </p>
              <p>
                <strong>Besoin essentiel :</strong> tendresse, attachement,
                sécurité émotionnelle.
              </p>
            </Card>

           <Card
  title="Lion"
  href="/signes/lion"
  imageSrc="/images/zodiaque/lion.webp"
  imageAlt="Symbole astrologique du Lion"
  element="feu"
>
              <p>
                Le Lion aime avec chaleur, noblesse, générosité et intensité de
                cœur. Il a besoin de vivre un amour clair, assumé, fier, qui
                donne du sens à son rayonnement.
              </p>
              <p>
                Il peut être très fidèle lorsqu’il se sent aimé, admiré et
                choisi avec sincérité. Mais il souffre lorsque l’amour devient
                tiède, banal ou dévalorisant.
              </p>
              <p>
                <strong>Besoin essentiel :</strong> loyauté, admiration, chaleur
                du cœur.
              </p>
            </Card>

           <Card
  title="Vierge"
  href="/signes/vierge"
  imageSrc="/images/zodiaque/vierge.webp"
  imageAlt="Symbole astrologique de la Vierge"
  element="terre"
>
              <p>
                La Vierge aime de manière plus discrète, plus fine, parfois plus
                retenue. Elle montre son attachement par la constance, le soin,
                l’attention au détail, la fiabilité.
              </p>
              <p>
                Sa fidélité est souvent réelle, fondée sur la cohérence et le
                sérieux. Elle a cependant besoin d’un lien clair, honnête,
                stable, qui ne l’oblige pas à vivre dans le flou.
              </p>
              <p>
                <strong>Besoin essentiel :</strong> confiance, précision,
                sécurité du quotidien.
              </p>
            </Card>

            <Card
  title="Balance"
  href="/signes/balance"
  imageSrc="/images/zodiaque/balance.webp"
  imageAlt="Symbole astrologique de la Balance"
   element="air"
>
              <p>
                La Balance vit l’amour à travers la relation elle-même : le
                dialogue, l’équilibre, l’élégance affective, la recherche
                d’harmonie et la réciprocité.
              </p>
              <p>
                Elle aspire souvent sincèrement à la fidélité, mais elle peut
                être troublée lorsque la relation perd sa beauté, sa douceur ou
                sa qualité de lien. Le besoin d’être aimée et validée joue un
                rôle central.
              </p>
              <p>
                <strong>Besoin essentiel :</strong> harmonie, raffinement
                relationnel, équilibre.
              </p>
            </Card>

          <Card
  title="Scorpion"
  href="/signes/scorpion"
  imageSrc="/images/zodiaque/scorpion.webp"
  imageAlt="Symbole astrologique du Scorpion"
    element="eau"
>
              <p>
                Le Scorpion aime avec intensité, profondeur, totalité. Il ne
                cherche pas un lien superficiel mais une relation qui engage
                l’âme, le désir, la confiance et la vérité intérieure.
              </p>
              <p>
                Lorsqu’il s’engage, sa fidélité peut être très forte. Mais il
                supporte mal la trahison, l’ambivalence ou le faux. Pour lui,
                l’amour doit être vrai ou ne pas être.
              </p>
              <p>
                <strong>Besoin essentiel :</strong> fusion, vérité, intensité
                émotionnelle.
              </p>
            </Card>

            <Card
  title="Sagittaire"
  href="/signes/sagittaire"
  imageSrc="/images/zodiaque/sagittaire.webp"
  imageAlt="Symbole astrologique du Sagittaire"
  element="feu"
>
              <p>
                Le Sagittaire aime avec enthousiasme, spontanéité et ouverture.
                Il a besoin que la relation soit un espace vivant, évolutif,
                libre, capable d’accompagner son élan vers plus grand.
              </p>
              <p>
                Il peut être fidèle, mais rarement dans un cadre étouffant. Sa
                loyauté grandit quand le couple laisse respirer, explorer,
                apprendre et grandir.
              </p>
              <p>
                <strong>Besoin essentiel :</strong> liberté, joie, horizon
                commun.
              </p>
            </Card>

         <Card
  title="Capricorne"
  href="/signes/capricorne"
  imageSrc="/images/zodiaque/capricorne.webp"
  imageAlt="Symbole astrologique du Capricorne"
  element="terre"
>
              <p>
                Le Capricorne aime sérieusement. Il n’entre pas toujours vite
                dans la relation, mais lorsqu’il s’engage, il donne du poids, de
                la tenue, de la continuité et de la responsabilité.
              </p>
              <p>
                Sa fidélité compte parmi les plus solides du zodiaque. Il aime
                bâtir un lien durable, exigeant mais digne de confiance.
              </p>
              <p>
                <strong>Besoin essentiel :</strong> engagement, respect, solidité
                du lien.
              </p>
            </Card>

      <Card
  title="Verseau"
  href="/signes/verseau"
  imageSrc="/images/zodiaque/verseau.webp"
  imageAlt="Symbole astrologique du Verseau"
   element="air"
>
              <p>
                Le Verseau aime de façon singulière. Il a besoin d’une relation
                qui respecte son autonomie, sa liberté de pensée et sa manière
                parfois atypique de créer du lien.
              </p>
              <p>
                Sa fidélité n’est pas toujours démonstrative ou possessive, mais
                elle peut être très réelle sur le plan de la loyauté mentale,
                morale ou amicale. Il fuit surtout l’enfermement.
              </p>
              <p>
                <strong>Besoin essentiel :</strong> liberté, complicité mentale,
                espace intérieur.
              </p>
            </Card>

      <Card
  title="Poissons"
  href="/signes/poissons"
  imageSrc="/images/zodiaque/poissons.webp"
  imageAlt="Symbole astrologique des Poissons"
    element="eau"
>
              <p>
                Les Poissons aiment avec sensibilité, imagination, douceur et
                profondeur. Ils recherchent souvent une forme de communion
                affective, spirituelle ou intuitive.
              </p>
              <p>
                Leur fidélité dépend beaucoup de leur équilibre intérieur. Ils
                peuvent être très dévoués, mais aussi se perdre dans le flou, le
                rêve ou l’idéalisation si la relation manque de cadre.
              </p>
              <p>
                <strong>Besoin essentiel :</strong> fusion, empathie, douceur,
                inspiration.
              </p>
            </Card>
          </div>
        </section>

        {/* COMPATIBILITÉS */}
        <section className="space-y-6" aria-labelledby="compatibilites-amoureuses">
          <H2 id="compatibilites-amoureuses">Compatibilités amoureuses entre les signes</H2>

          <p className="text-text/85 leading-relaxed">
            La compatibilité amoureuse ne se réduit jamais à une simple recette.
            Elle repose sur une alchimie entre les besoins, les rythmes, les
            valeurs et la manière dont chacun supporte l’engagement, la
            proximité et la différence. Le signe solaire donne une première
            tendance utile, surtout pour comprendre le climat général d’une
            relation.
          </p>

     <div className="grid gap-6 lg:grid-cols-2">
  {compatibilities.map((item) => {
    const styles = getCompatibilityStyles(item.tone);

    return (
      <section
        key={item.title}
        className={[
          "relative overflow-hidden rounded-2xl border p-6 shadow-soft",
          styles.border,
          styles.bg,
        ].join(" ")}
      >
        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${styles.glow} opacity-80`}
          aria-hidden="true"
        />

        <div className="relative">
          <h3 className={`text-lg md:text-xl font-semibold tracking-tight ${styles.title}`}>
            {item.title}
          </h3>

          <div className="mt-3">
            <Badge className={styles.badge}>{item.signs}</Badge>
          </div>

          <p className="mt-4 text-text/85 leading-relaxed">
            {item.text}
          </p>
        </div>
      </section>
    );
  })}
</div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-lg md:text-xl font-semibold tracking-tight text-white">
              Ce qu’il faut retenir
            </h3>
            <p className="mt-4 text-text/85 leading-relaxed">
              Certaines combinaisons semblent plus naturelles, mais aucune
              compatibilité n’est garantie ou condamnée d’avance. Une relation
              forte dépend aussi de la maturité, du contexte de vie, de la
              capacité à communiquer et de la volonté réelle de construire.
            </p>
            <p className="mt-3 text-text/85 leading-relaxed">
              En astrologie sérieuse, les compatibilités se lisent toujours avec
              davantage de précision à travers la synastrie et l’étude du thème
              natal complet.
            </p>
          </div>
        </section>

        {/* FAQ / CONCLUSION */}
        <section className="space-y-4" aria-labelledby="conclusion-article">
          <H2 id="conclusion-article">Conclusion</H2>

          <p className="text-text/85 leading-relaxed">
            Aucun signe n’aime de manière supérieure aux autres. Chacun aime
            selon sa nature : par le cœur, par la sécurité, par l’esprit, par la
            fusion, par la liberté ou par l’engagement.
          </p>

          <p className="text-text/85 leading-relaxed">
            Comprendre la logique amoureuse des signes permet de mieux saisir ce
            que chacun attend d’une relation, ce qu’il peut offrir, et les
            tensions qui apparaissent lorsqu’un besoin essentiel n’est pas
            reconnu.
          </p>

          <p className="text-text/85 leading-relaxed">
            Pour aller plus loin, il faut dépasser le seul signe solaire et
            observer l’ensemble du thème astral. C’est souvent là que la réalité
            affective devient beaucoup plus fine, beaucoup plus juste, et
            beaucoup plus révélatrice.
          </p>
        </section>

        <nav aria-label="Navigation de fin d’article">
          <Link
            href="/blog"
            className="inline-flex rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-text/90 hover:bg-white/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            ← Voir tous les articles
          </Link>
        </nav>
      </article>
    </>
  );
}