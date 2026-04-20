import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Pill, TagPillsInline, getGlowFromTags } from "./ui";

const SITE_URL = "https://www.astro-cours.com";
const ARTICLE_SLUG = "quel-type-de-sportif-selon-signe-astrologique";
const ARTICLE_URL = `${SITE_URL}/blog/${ARTICLE_SLUG}`;
const COVER_URL = `${SITE_URL}/images/blog/sport-signe-astrologique.webp`;

export const meta = {
  slug: ARTICLE_SLUG,
  title: "Quel type de sportif êtes-vous selon votre signe astrologique ?",
  description:
    "Quel sport choisir selon son signe astrologique ? Analyse sérieuse des 12 signes : rapport à l’effort, esprit de compétition, endurance et sports idéaux.",
  date: "2026-02-18",
  tags: ["sport", "signe", "psychologie", "astrologie"],
  readingLevel: "débutant" as const,
  cover: "/images/blog/le-sporti-que-vous-etres-selon-votre-signe-astrologique.webp",
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
        alt: "Quel type de sportif êtes-vous selon votre signe astrologique ?",
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
      subtitle: "text-red-200/80",
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
      subtitle: "text-emerald-200/80",
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
      subtitle: "text-sky-200/80",
    };
  }

  return {
    border: "border-violet-500/30",
    hoverBorder: "group-hover:border-violet-400/50",
    iconWrap: "border-violet-500/25 bg-violet-500/10",
    glow: "from-violet-500/10 to-transparent",
    titleHover: "group-hover:text-violet-200",
    linkText: "group-hover:text-violet-100",
    subtitle: "text-violet-200/80",
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

function SignSportCard({
  title,
  href,
  imageSrc,
  imageAlt,
  subtitle,
  element,
  children,
}: {
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  subtitle: string;
  element: ZodiacElement;
  children: ReactNode;
}) {
  const titleId = `sport-card-${title.toLowerCase()}`;
  const styles = getElementCardStyles(element);

  return (
    <article aria-labelledby={titleId} className="h-full">
      <Link
        href={href}
        aria-labelledby={titleId}
        aria-describedby={`${titleId}-desc`}
        className={[
          "group relative block h-full overflow-hidden rounded-2xl border bg-black/20 p-6 shadow-soft transition",
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

        <div className="relative flex items-start gap-4">
          <div
            className={`relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border ${styles.iconWrap}`}
            aria-hidden="true"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={64}
              height={64}
              className="h-auto w-auto object-contain opacity-95 transition group-hover:scale-[1.03]"
              sizes="64px"
            />
          </div>

          <div className="min-w-0 flex-1">
            <h3
              id={titleId}
              className={[
                "text-lg md:text-xl font-semibold tracking-tight leading-tight text-text transition",
                styles.titleHover,
              ].join(" ")}
            >
              {title}
            </h3>
            <p className={`mt-1 text-sm ${styles.subtitle}`}>{subtitle}</p>
          </div>
        </div>

        <div
          id={`${titleId}-desc`}
          className="relative mt-5 space-y-3 text-text/85 leading-relaxed"
        >
          {children}
        </div>

        <div className="relative mt-5 flex items-center justify-end">
          <span className={["text-sm text-text/70 transition", styles.linkText].join(" ")}>
            Lire la fiche du signe →
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

      <article className="space-y-10">
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
            <p className="text-sm text-text/65">Astrologie & personnalité</p>

         

            <p className="mt-4 max-w-2xl text-text/80 leading-relaxed">
              L’astrologie peut aussi éclairer la manière dont une personne vit l’effort,
              la discipline, la compétition ou le plaisir du mouvement.
            </p>

            <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
              Certains signes ont besoin de défi immédiat, d’autres de régularité,
              de technique, d’exploration ou d’une harmonie entre corps et ressenti.
            </p>

            <div className="mt-5 flex flex-wrap gap-2" aria-label="Résumé de l’article">
              <Pill tone="violet">Sport & énergie</Pill>
              <Pill tone="orange">Tempérament</Pill>
              <Pill tone="emerald">Motivation</Pill>
              <Pill tone="sky">Psychologie</Pill>
            </div>

            <div className="mt-4" aria-label="Mots-clés de l’article">
              <TagPillsInline tags={meta.tags} />
            </div>
          </div>
        </header>

        <section className="space-y-4" aria-labelledby="sport-et-astrologie">
          <H2 id="sport-et-astrologie">Sport et astrologie : une logique d’énergie</H2>

          <p className="text-text/85 leading-relaxed">
            Le sport ne se vit pas de la même manière pour tout le monde.
            Certaines personnes aiment la compétition frontale, d’autres la maîtrise technique,
            la durée, l’exploration ou la fluidité.
          </p>

          <p className="text-text/85 leading-relaxed">
            Le signe solaire ne suffit pas à résumer un thème natal, mais il donne déjà
            une indication intéressante sur le style général avec lequel une personne
            aborde l’effort et le mouvement.
          </p>
        </section>

        <section className="space-y-6" aria-labelledby="les-12-profils">
          <H2 id="les-12-profils">Les 12 profils sportifs selon les signes</H2>

          <div className="grid gap-6 lg:grid-cols-2">
            <SignSportCard
              title="Bélier"
              href="/signes/belier"
              imageSrc="/images/zodiaque/belier.webp"
              imageAlt="Symbole astrologique du Bélier"
              subtitle="Le compétiteur instinctif"
              element="feu"
            >
              <p>
                Le Bélier aime l’action immédiate, les défis et l’intensité du présent.
                Il possède souvent un rapport spontané au sport : bouger, se mesurer,
                gagner du terrain.
              </p>
              <p>
                Les disciplines rapides et compétitives lui conviennent particulièrement :
                arts martiaux, sprint, boxe, cross-training ou sports collectifs nerveux.
              </p>
              <p>
                Son principal défi est de canaliser son impulsion pour ne pas confondre
                performance et précipitation.
              </p>
            </SignSportCard>

            <SignSportCard
              title="Taureau"
              href="/signes/taureau"
              imageSrc="/images/zodiaque/taureau.webp"
              imageAlt="Symbole astrologique du Taureau"
              subtitle="Le sportif d’endurance"
              element="terre"
            >
              <p>
                Le Taureau avance moins dans l’explosion que dans la continuité.
                Il peut mettre du temps à démarrer, mais il tient.
              </p>
              <p>
                Il apprécie les disciplines régulières, concrètes, incarnées :
                randonnée, natation, cyclisme, renforcement musculaire, pratiques de durée.
              </p>
              <p>
                Son enjeu n’est pas tant le dépassement brutal que la persévérance
                et la qualité du rythme.
              </p>
            </SignSportCard>

            <SignSportCard
              title="Gémeaux"
              href="/signes/gemeaux"
              imageSrc="/images/zodiaque/gemeaux.webp"
              imageAlt="Symbole astrologique des Gémeaux"
              subtitle="Le sportif agile"
              element="air"
            >
              <p>
                Les Gémeaux aiment les activités qui stimulent à la fois le corps
                et l’esprit. Leur énergie passe par le mouvement, la coordination,
                la rapidité de réponse.
              </p>
              <p>
                Ils se sentent souvent à l’aise dans les sports techniques, ludiques
                ou mobiles : tennis, badminton, escalade, disciplines variées.
              </p>
              <p>
                Le défi est d’éviter la dispersion et de garder assez de régularité
                pour progresser réellement.
              </p>
            </SignSportCard>

            <SignSportCard
              title="Cancer"
              href="/signes/cancer"
              imageSrc="/images/zodiaque/cancer.webp"
              imageAlt="Symbole astrologique du Cancer"
              subtitle="Le sportif émotionnel"
              element="eau"
            >
              <p>
                Le Cancer pratique rarement une activité physique seulement pour la performance.
                Il a besoin de sentir un lien avec le corps, le bien-être ou la sécurité intérieure.
              </p>
              <p>
                Les sports liés à l’eau, au souffle ou au recentrage lui conviennent souvent :
                natation, aquagym, marche, yoga, pratiques de douceur active.
              </p>
              <p>
                Sa motivation augmente quand le sport devient une manière de prendre soin de lui.
              </p>
            </SignSportCard>

            <SignSportCard
              title="Lion"
              href="/signes/lion"
              imageSrc="/images/zodiaque/lion.webp"
              imageAlt="Symbole astrologique du Lion"
              subtitle="Le sportif spectaculaire"
              element="feu"
            >
              <p>
                Le Lion aime exprimer sa puissance et sentir qu’il rayonne à travers son corps.
                Il a souvent besoin d’un sport qui lui permette de se dépasser avec panache.
              </p>
              <p>
                Danse, athlétisme, sports collectifs, disciplines de scène ou pratiques
                visibles lui correspondent bien.
              </p>
              <p>
                Son défi est d’apprendre que la progression compte autant que la reconnaissance.
              </p>
            </SignSportCard>

            <SignSportCard
              title="Vierge"
              href="/signes/vierge"
              imageSrc="/images/zodiaque/vierge.webp"
              imageAlt="Symbole astrologique de la Vierge"
              subtitle="Le sportif méthodique"
              element="terre"
            >
              <p>
                La Vierge aime comprendre les gestes, améliorer la technique,
                affiner l’efficacité. Elle aborde souvent le sport avec sérieux.
              </p>
              <p>
                Pilates, fitness, sports techniques, routines de progression
                et disciplines de précision lui conviennent particulièrement.
              </p>
              <p>
                Le risque est de transformer l’activité physique en exigence excessive
                ou en auto-évaluation permanente.
              </p>
            </SignSportCard>

            <SignSportCard
              title="Balance"
              href="/signes/balance"
              imageSrc="/images/zodiaque/balance.webp"
              imageAlt="Symbole astrologique de la Balance"
              subtitle="Le sportif esthétique"
              element="air"
            >
              <p>
                La Balance recherche l’harmonie, l’équilibre et la beauté du mouvement.
                Elle est souvent attirée par les disciplines où le geste compte autant que l’effort.
              </p>
              <p>
                Danse, yoga, patinage, sports artistiques ou pratiques liées à l’alignement
                lui conviennent bien.
              </p>
              <p>
                Son principal moteur n’est pas la brutalité de la performance,
                mais la qualité de la forme.
              </p>
            </SignSportCard>

            <SignSportCard
              title="Scorpion"
              href="/signes/scorpion"
              imageSrc="/images/zodiaque/scorpion.webp"
              imageAlt="Symbole astrologique du Scorpion"
              subtitle="Le sportif intense"
              element="eau"
            >
              <p>
                Le Scorpion possède une énergie profonde, souvent plus puissante
                qu’elle n’en a l’air. Il supporte bien l’intensité et le dépassement.
              </p>
              <p>
                Sports de combat, entraînements engagés, effort intense,
                pratiques extrêmes ou transformation physique lui parlent davantage.
              </p>
              <p>
                Son défi est de ne pas utiliser le sport uniquement comme décharge,
                mais aussi comme discipline de maîtrise.
              </p>
            </SignSportCard>

            <SignSportCard
              title="Sagittaire"
              href="/signes/sagittaire"
              imageSrc="/images/zodiaque/sagittaire.webp"
              imageAlt="Symbole astrologique du Sagittaire"
              subtitle="Le sportif explorateur"
              element="feu"
            >
              <p>
                Le Sagittaire relie naturellement sport, liberté et espace.
                Il aime bouger dehors, se sentir vivant, explorer.
              </p>
              <p>
                Randonnée, ski, équitation, trail, sports d’aventure ou activités de plein air
                lui correspondent très bien.
              </p>
              <p>
                Il a besoin de sens et d’horizon : l’effort pur sans ouverture l’ennuie vite.
              </p>
            </SignSportCard>

            <SignSportCard
              title="Capricorne"
              href="/signes/capricorne"
              imageSrc="/images/zodiaque/capricorne.webp"
              imageAlt="Symbole astrologique du Capricorne"
              subtitle="Le sportif discipliné"
              element="terre"
            >
              <p>
                Le Capricorne comprend instinctivement que la progression demande du temps.
                Il peut exceller dans les sports qui récompensent la constance.
              </p>
              <p>
                Musculation, endurance, alpinisme, entraînement structuré,
                travail progressif et objectifs mesurables lui conviennent bien.
              </p>
              <p>
                Son piège est d’être trop dur avec lui-même ou de réduire le sport à la performance.
              </p>
            </SignSportCard>

            <SignSportCard
              title="Verseau"
              href="/signes/verseau"
              imageSrc="/images/zodiaque/verseau.webp"
              imageAlt="Symbole astrologique du Verseau"
              subtitle="Le sportif original"
              element="air"
            >
              <p>
                Le Verseau n’aime pas toujours les cadres sportifs classiques.
                Il préfère souvent des pratiques alternatives, originales ou plus libres.
              </p>
              <p>
                Glisse, sports urbains, nouvelles disciplines, pratiques collectives atypiques
                ou formats innovants l’attirent davantage.
              </p>
              <p>
                Il a besoin de se sentir libre dans son rapport au mouvement.
              </p>
            </SignSportCard>

            <SignSportCard
              title="Poissons"
              href="/signes/poissons"
              imageSrc="/images/zodiaque/poissons.webp"
              imageAlt="Symbole astrologique des Poissons"
              subtitle="Le sportif intuitif"
              element="eau"
            >
              <p>
                Les Poissons vivent souvent le sport comme une expérience de ressenti.
                Ils ont besoin d’une pratique qui relie corps, souffle, émotion ou imaginaire.
              </p>
              <p>
                Natation, danse, yoga, pratiques fluides, activités liées à l’eau
                ou au relâchement leur correspondent souvent.
              </p>
              <p>
                Le défi est de garder un cadre assez stable pour que la motivation ne se dissolve pas.
              </p>
            </SignSportCard>
          </div>
        </section>

        <section className="space-y-4" aria-labelledby="conclusion-article">
          <H2 id="conclusion-article">Conclusion</H2>

          <p className="text-text/85 leading-relaxed">
            Le signe astrologique ne détermine pas un sport unique,
            mais il éclaire une manière d’habiter l’effort :
            compétition, endurance, technique, exploration ou recherche d’harmonie.
          </p>

          <p className="text-text/85 leading-relaxed">
            Comprendre cette dynamique permet souvent de choisir une pratique
            plus naturelle, plus motivante et plus durable.
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