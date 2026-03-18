import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Pill, TagPillsInline, getGlowFromTags } from "./ui";

const SITE_URL = "https://www.astro-cours.com";
const ARTICLE_URL = `${SITE_URL}/blog/qualites-defauts-12-signes-zodiaque`;
const COVER_URL = `${SITE_URL}/images/blog/sun-moon.jpg`;

export const meta = {
  slug: "qualites-defauts-12-signes-zodiaque",
  title: "Qualités et défauts des 12 signes du zodiaque",
  description:
    "Étude sérieuse, nuancée et pédagogique des 12 signes du zodiaque : qualités, défauts, dérives possibles, dynamique psychologique et pistes d’évolution.",
  date: "2026-03-11",
  tags: ["bases", "signe", "psychologie", "astrologie"],
  readingLevel: "débutant" as const,
  cover: "/images/blog/qualite-et-defaut-de-chaque-signe-du-zodiaque.webp",
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
        url: "https://www.astro-cours.com/images/blog/sun-moon.jpg",
        width: 1200,
        height: 630,
        alt: "Illustration des qualités et défauts des 12 signes du zodiaque",
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
          "group relative block h-full overflow-hidden rounded-2xl border bg-black/20 p-6 shadow-soft transition",
          "hover:bg-white/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
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
    author: {
      "@type": "Organization",
      name: "Astro Cours",
    },
    publisher: {
      "@type": "Organization",
      name: "Astro Cours",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.png`,
      },
    },
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

      <article className="space-y-10" >
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
            <p className="text-sm text-text/65">Astrologie fondamentale</p>

          

            <p className="mt-4 max-w-2xl text-text/80 leading-relaxed">
              Chaque signe du zodiaque représente une manière particulière
              d’entrer en relation avec le monde. Ces dynamiques possèdent
              toujours deux faces :
              <strong> une force constructive</strong> et
              <strong> une dérive possible</strong>.
            </p>

            <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
              Comprendre ces polarités permet de sortir des caricatures
              et d’aborder les signes astrologiques comme de véritables
              <strong> structures psychologiques</strong>.
            </p>

            <div
              className="mt-5 flex flex-wrap gap-2"
              aria-label="Résumé des thèmes de l’article"
            >
              <Pill tone="violet">12 archétypes</Pill>
              <Pill tone="orange">Forces</Pill>
              <Pill tone="emerald">Dérives possibles</Pill>
              <Pill tone="sky">Lecture psychologique</Pill>
            </div>

            <div className="mt-4" aria-label="Mots-clés de l’article">
              <TagPillsInline tags={meta.tags} />
            </div>
          </div>
        </header>

        <section className="space-y-4" aria-labelledby="comprendre-dualite">
          <H2 id="comprendre-dualite">Comprendre la dualité des signes</H2>

          <p className="text-text/85 leading-relaxed">
            Aucun signe astrologique n’est “bon” ou “mauvais”.
            Chaque signe représente une fonction de la vie.
            Lorsqu’elle est équilibrée, elle devient une qualité.
            Lorsqu’elle est poussée à l’excès ou mal intégrée,
            elle peut se transformer en défaut.
          </p>

          <p className="text-text/85 leading-relaxed">
            L’astrologie traditionnelle parle souvent de
            <strong> vertus et de vices</strong>, non pour juger la personne,
            mais pour montrer comment une même énergie peut évoluer vers sa
            forme constructive ou vers sa caricature.
          </p>
        </section>

        <section className="space-y-6" aria-labelledby="les-12-signes">
          <H2 id="les-12-signes">Qualités et défauts des 12 signes</H2>

          <div
            className="grid gap-6 lg:grid-cols-2"
            role="list"
            aria-label="Liste des 12 signes du zodiaque"
          >
            <Card
              title="Bélier"
              href="/signes/belier"
              imageSrc="/images/zodiaque/belier.webp"
              imageAlt="Symbole astrologique du Bélier"
              element="feu"
            >
              <p>
                <strong>Qualités :</strong> courage, initiative, spontanéité,
                capacité d’action rapide.
              </p>
              <p>
                Le Bélier représente l’élan initial. Il donne l’énergie de
                commencer, de se lancer, de prendre des décisions lorsque les
                autres hésitent.
              </p>
              <p>
                <strong>Défauts possibles :</strong> impulsivité, impatience,
                réactions trop rapides.
              </p>
              <p>
                Lorsque l’énergie du Bélier n’est pas maîtrisée, l’action peut
                devenir précipitation ou conflit inutile.
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
                <strong>Qualités :</strong> stabilité, constance, endurance,
                sens du concret.
              </p>
              <p>
                Le Taureau représente la capacité à construire dans la durée,
                à préserver et à donner de la solidité aux choses.
              </p>
              <p>
                <strong>Défauts possibles :</strong> rigidité, inertie,
                attachement excessif.
              </p>
              <p>
                Lorsque la stabilité devient fixation, la personne peut résister
                au changement même lorsqu’il devient nécessaire.
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
                <strong>Qualités :</strong> intelligence vive, curiosité,
                adaptabilité, communication.
              </p>
              <p>
                Les Gémeaux symbolisent l’esprit en mouvement, capable d’observer,
                de relier et de comprendre rapidement.
              </p>
              <p>
                <strong>Défauts possibles :</strong> dispersion, superficialité,
                agitation mentale.
              </p>
              <p>
                L’excès de mouvement peut empêcher l’approfondissement.
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
                <strong>Qualités :</strong> sensibilité, intuition, protection,
                attachement.
              </p>
              <p>
                Le Cancer représente le foyer émotionnel, la mémoire et la capacité
                de nourrir les liens.
              </p>
              <p>
                <strong>Défauts possibles :</strong> susceptibilité, repli,
                dépendance affective.
              </p>
              <p>
                Lorsque la sécurité devient peur du monde, l’émotion peut conduire
                au retrait.
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
                <strong>Qualités :</strong> générosité, créativité, leadership,
                rayonnement.
              </p>
              <p>
                Le Lion représente l’expression de l’individualité et la capacité
                à inspirer les autres.
              </p>
              <p>
                <strong>Défauts possibles :</strong> orgueil, besoin excessif
                d’attention.
              </p>
              <p>
                Lorsque le besoin de reconnaissance domine, la créativité peut se
                transformer en quête de validation.
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
                <strong>Qualités :</strong> analyse, précision, sens du détail,
                efficacité.
              </p>
              <p>
                La Vierge représente l’intelligence pratique qui améliore et
                organise le monde concret.
              </p>
              <p>
                <strong>Défauts possibles :</strong> critique excessive, anxiété,
                perfectionnisme.
              </p>
              <p>
                La recherche de précision peut devenir une difficulté à accepter
                l’imperfection.
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
                <strong>Qualités :</strong> diplomatie, sens de la justice,
                harmonie relationnelle.
              </p>
              <p>
                La Balance symbolise la conscience de l’autre et la recherche
                d’équilibre dans les relations.
              </p>
              <p>
                <strong>Défauts possibles :</strong> indécision, dépendance au
                regard extérieur.
              </p>
              <p>
                L’excès de recherche d’harmonie peut conduire à éviter les conflits
                nécessaires.
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
                <strong>Qualités :</strong> lucidité, profondeur psychologique,
                force de transformation.
              </p>
              <p>
                Le Scorpion représente la capacité à traverser les crises et à
                accéder à ce qui est caché.
              </p>
              <p>
                <strong>Défauts possibles :</strong> méfiance, contrôle,
                intensité excessive.
              </p>
              <p>
                Lorsque l’intensité devient obsession, elle peut conduire à des
                relations conflictuelles.
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
                <strong>Qualités :</strong> optimisme, vision large, esprit
                d’aventure.
              </p>
              <p>
                Le Sagittaire symbolise l’expansion de la conscience, la quête de
                sens et l’exploration du monde.
              </p>
              <p>
                <strong>Défauts possibles :</strong> excès, impatience, tendance à
                fuir les limites.
              </p>
              <p>
                L’enthousiasme peut devenir imprudence lorsque la mesure disparaît.
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
                <strong>Qualités :</strong> discipline, persévérance, sens des
                responsabilités.
              </p>
              <p>
                Le Capricorne représente la construction patiente et la capacité à
                atteindre un objectif sur le long terme.
              </p>
              <p>
                <strong>Défauts possibles :</strong> rigidité, dureté, pessimisme.
              </p>
              <p>
                Lorsque la prudence devient fermeture, la personne peut perdre le
                contact avec la spontanéité.
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
                <strong>Qualités :</strong> indépendance, originalité, vision
                collective.
              </p>
              <p>
                Le Verseau représente la capacité à penser autrement et à imaginer
                des structures nouvelles pour la société.
              </p>
              <p>
                <strong>Défauts possibles :</strong> distance émotionnelle,
                imprévisibilité.
              </p>
              <p>
                L’indépendance peut devenir détachement excessif ou difficulté à
                s’impliquer dans les relations.
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
                <strong>Qualités :</strong> empathie, imagination, intuition.
              </p>
              <p>
                Les Poissons représentent la sensibilité au monde invisible, aux
                émotions collectives et à la dimension spirituelle de la vie.
              </p>
              <p>
                <strong>Défauts possibles :</strong> confusion, fuite, manque de
                limites.
              </p>
              <p>
                Lorsque la sensibilité devient trop grande, la personne peut avoir
                du mal à distinguer ses propres émotions de celles des autres.
              </p>
            </Card>
          </div>
        </section>

        <section className="space-y-4" aria-labelledby="conclusion-article">
          <H2 id="conclusion-article">Conclusion</H2>

          <p className="text-text/85 leading-relaxed">
            Les signes astrologiques ne décrivent pas une personne entière, mais
            une <strong>énergie fondamentale</strong> qui traverse sa personnalité.
          </p>

          <p className="text-text/85 leading-relaxed">
            La maturité consiste à développer les qualités de son signe tout en
            reconnaissant ses excès possibles.
          </p>

          <p className="text-text/85 leading-relaxed">
            C’est dans cette tension entre force et dérive que se construit
            l’évolution personnelle.
          </p>
        </section>

        <nav aria-label="Navigation de fin d’article">
          <Link
            href="/blog"
            className="inline-flex rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-text/90 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            ← Voir tous les articles
          </Link>
        </nav>
      </article>
    </>
  );
}