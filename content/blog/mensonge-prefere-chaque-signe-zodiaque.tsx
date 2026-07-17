import type { ReactNode } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "./ui";
import { AUTHOR_PERSON, PUBLISHER_ORG, SITE_URL } from "@/lib/seo";

const ARTICLE_SLUG = "mensonge-prefere-chaque-signe-zodiaque";
const ARTICLE_URL = `${SITE_URL}/blog/${ARTICLE_SLUG}`;
const COVER_URL = `${SITE_URL}/images/blog/mensonge-prefere-chaque-signe-zodiaque.webp`;

export const meta = {
  slug: ARTICLE_SLUG,
  title: "Le mensonge préféré de chaque signe du zodiaque",
  seoTitle: "Le mensonge préféré de chaque signe astro — Astro Cours",
  description:
    "« Je suis calme », « Je t'ai pardonné », « J'arrive »… Le mensonge préféré de chaque signe du zodiaque — et la vérité qui se cache derrière. Drôle, piquant, étonnamment juste.",
  date: "2026-07-17",
  tags: ["signe", "zodiaque", "psychologie astrologique", "astrologie"],
  readingLevel: "débutant" as const,
  cover: "/images/blog/mensonge-prefere-chaque-signe-zodiaque.webp",
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
    publishedTime: `${meta.date}T12:00:00Z`,
    images: [
      {
        url: COVER_URL,
        width: 1200,
        height: 630,
        alt: "Le mensonge préféré de chaque signe du zodiaque",
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
      iconWrap: "border-red-500/25 bg-red-500/10",
      glow: "from-red-500/10 to-transparent",
      title: "text-red-200",
      quote: "border-red-400/30 bg-red-500/10 text-red-50",
    };
  }

  if (element === "terre") {
    return {
      border: "border-emerald-500/30",
      iconWrap: "border-emerald-500/25 bg-emerald-500/10",
      glow: "from-emerald-500/10 to-transparent",
      title: "text-emerald-200",
      quote: "border-emerald-400/30 bg-emerald-500/10 text-emerald-50",
    };
  }

  if (element === "air") {
    return {
      border: "border-sky-500/30",
      iconWrap: "border-sky-500/25 bg-sky-500/10",
      glow: "from-sky-500/10 to-transparent",
      title: "text-sky-200",
      quote: "border-sky-400/30 bg-sky-500/10 text-sky-50",
    };
  }

  return {
    border: "border-violet-500/30",
    iconWrap: "border-violet-500/25 bg-violet-500/10",
    glow: "from-violet-500/10 to-transparent",
    title: "text-violet-200",
    quote: "border-violet-400/30 bg-violet-500/10 text-violet-50",
  };
}

function H2({ children, id }: { children: ReactNode; id: string }) {
  return (
    <h2
      id={id}
      className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight"
    >
      {children}
    </h2>
  );
}

function LieSection({
  id,
  title,
  href,
  imageSrc,
  imageAlt,
  element,
  tagline,
  lie,
  lieContext,
  verite,
  reperage,
}: {
  id: string;
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  element: ZodiacElement;
  tagline: string;
  lie: ReactNode;
  lieContext: string;
  verite: ReactNode;
  reperage: ReactNode;
}) {
  const styles = getElementCardStyles(element);

  return (
    <section aria-labelledby={id} className="scroll-mt-20">
      <article
        className={[
          "relative overflow-hidden rounded-2xl border bg-black/20 p-6 shadow-soft",
          styles.border,
        ].join(" ")}
      >
        <div
          className={`pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-gradient-to-br ${styles.glow} blur-3xl`}
          aria-hidden="true"
        />

        <header className="relative flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3
              id={id}
              className={[
                "text-xl md:text-2xl font-semibold tracking-tight leading-tight",
                styles.title,
              ].join(" ")}
            >
              {title}
            </h3>
            <p className="mt-1 text-sm text-text/70 italic">{tagline}</p>
          </div>
          <div
            className={[
              "shrink-0 relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border",
              styles.iconWrap,
            ].join(" ")}
            aria-hidden="true"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={64}
              height={64}
              className="h-auto w-auto object-contain opacity-95"
              sizes="64px"
            />
          </div>
        </header>

        <blockquote
          className={[
            "relative mt-5 rounded-2xl rounded-bl-md border px-5 py-4 text-lg leading-relaxed shadow-soft",
            styles.quote,
          ].join(" ")}
        >
          <p>{lie}</p>
          <footer className="mt-1 text-[11px] uppercase tracking-widest opacity-60">
            {lieContext}
          </footer>
        </blockquote>

        <div className="relative mt-5 rounded-xl border border-white/10 bg-black/30 p-4 text-text/85 leading-relaxed">
          <p className="text-xs font-semibold uppercase tracking-widest text-text/55">
            La vérité derrière
          </p>
          <div className="mt-1 space-y-2">{verite}</div>
        </div>

        <div className="relative mt-3 rounded-xl border border-white/10 bg-black/30 p-4 text-text/80 leading-relaxed">
          <p className="text-xs font-semibold uppercase tracking-widest text-text/55">
            Comment le repérer
          </p>
          <div className="mt-1 text-sm space-y-2">{reperage}</div>
        </div>

        <div className="relative mt-4 flex justify-end">
          <Link
            href={href}
            className="text-sm text-text/70 underline decoration-white/30 hover:decoration-white/60 transition"
          >
            Lire la fiche du signe →
          </Link>
        </div>
      </article>
    </section>
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
    datePublished: `${meta.date}T12:00:00Z`,
    dateModified: `${meta.date}T12:00:00Z`,
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
        name: "Quel est le signe astrologique qui ment le plus ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Aucun signe ne ment « plus » que les autres : chacun ment différemment. Les Gémeaux enjolivent, les Poissons fuient dans le flou, le Scorpion cache, la Balance arrange la vérité pour préserver l'harmonie. Le mensonge d'un signe reflète sa fragilité principale, pas un défaut moral propre à ce signe.",
        },
      },
      {
        "@type": "Question",
        name: "Pourquoi chaque signe a-t-il un mensonge « préféré » ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Parce que le mensonge le plus fréquent d'une personne protège ce qui compte le plus pour elle : son image (Lion), son indépendance (Verseau), son confort (Taureau) ou sa vulnérabilité (Cancer, Scorpion). En astrologie, ce point sensible correspond à la nature élémentaire du signe et à sa planète maîtresse.",
        },
      },
      {
        "@type": "Question",
        name: "Peut-on détecter un mensonge grâce à l'astrologie ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Non — l'astrologie n'est pas un détecteur de mensonges. En revanche, connaître le tempérament d'un signe aide à comprendre ce qu'il protège quand il ment : un « ça va » de Cancer ne signifie pas la même chose qu'un « ça va » de Capricorne. C'est une grille de lecture, pas une preuve.",
        },
      },
      {
        "@type": "Question",
        name: "Mentir souvent, est-ce écrit dans le thème astral ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le thème natal ne condamne personne au mensonge. Certaines positions (Mercure ou Neptune en aspect dissonant) donnent une facilité à embellir ou à esquiver, mais l'usage qu'on en fait reste un choix. Un thème montre des tendances, jamais des fatalités.",
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
        {/* HEADER */}
        <header className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-7 shadow-soft">
          <div
            className={`pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl ${glow}`}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative">
            <p className="text-sm text-text/65">Astrologie &amp; psychologie</p>

            <p className="mt-4 max-w-2xl text-text/80 leading-relaxed">
              &laquo; Je suis calme. &raquo; &laquo; Je t&apos;ai pardonné. &raquo;
              &laquo; J&apos;arrive, je suis à 10 minutes. &raquo; Nous avons tous
              <strong> un mensonge fétiche</strong> — celui qu&apos;on répète si souvent
              qu&apos;on a fini par y croire nous-mêmes.
            </p>

            <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
              Et ce mensonge n&apos;est pas choisi au hasard : il protège exactement
              ce que chaque signe a de plus fragile. Voici le
              <strong> mensonge préféré des 12 signes du zodiaque</strong> — avec la
              vérité qui se cache derrière, et comment le repérer.
            </p>

            <div className="mt-5 flex flex-wrap gap-2" aria-label="Thèmes de l'article">
              <Pill tone="violet">12 mensonges</Pill>
              <Pill tone="rose">Petites failles</Pill>
              <Pill tone="sky">Psychologie astro</Pill>
              <Pill tone="orange">Léger &amp; piquant</Pill>
            </div>

            <div className="mt-4" aria-label="Mots-clés de l'article">
              <TagPillsInline tags={meta.tags} />
            </div>
          </div>
        </header>

        {/* DEFINITION BOX — Featured Snippet */}
        <div className="rounded-2xl border border-violet-400/20 bg-violet-400/[0.04] px-6 py-5">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-300/80">
            En bref
          </p>
          <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
            Le <strong>mensonge préféré d&apos;un signe</strong> protège son point
            sensible : les signes de <strong>Feu</strong> mentent sur leurs émotions
            (&laquo; je suis calme &raquo;), les signes de <strong>Terre</strong> sur
            leur disponibilité (&laquo; je m&apos;en occupe &raquo;), les signes
            d&apos;<strong>Air</strong> sur leur détachement (&laquo; ça m&apos;est
            égal &raquo;), les signes d&apos;<strong>Eau</strong> sur leur
            vulnérabilité (&laquo; ça va &raquo;).
          </p>
        </div>

        {/* INTRO */}
        <section className="space-y-3" aria-labelledby="intro">
          <H2 id="intro">Pourquoi nos mensonges trahissent notre signe</H2>
          <p className="text-text/85 leading-relaxed">
            Un mensonge du quotidien n&apos;est presque jamais une tromperie
            calculée : c&apos;est un <strong>réflexe de protection</strong>. On ment
            pour préserver son image, sa tranquillité, ou l&apos;harmonie d&apos;une
            relation. Et ce qu&apos;on cherche à protéger dépend directement du
            tempérament — donc, en astrologie, de l&apos;<strong>élément</strong> du
            signe et de sa planète maîtresse, comme
            <Link href="/blog/mercurien" className="underline decoration-white/30 hover:decoration-white/60 transition"> Mercure</Link>,
            la planète du langage.
          </p>
          <p className="text-text/85 leading-relaxed">
            Ce qui suit est volontairement caricatural — comme nos
            <Link href="/blog/qualites-defauts-12-signes-zodiaque" className="underline decoration-white/30 hover:decoration-white/60 transition"> qualités et défauts des 12 signes</Link> —
            mais chaque mensonge est ancré dans la vraie mécanique du signe. Tu vas
            reconnaître quelqu&apos;un. Probablement toi.
          </p>
        </section>

        {/* 12 SIGNES */}
        <section className="space-y-6" aria-labelledby="les-12-mensonges">
          <H2 id="les-12-mensonges">Les 12 signes, un mensonge chacun</H2>

          <div className="grid gap-6">
            <LieSection
              id="belier"
              title="♈ Bélier — « Je suis calme. »"
              href="/signes/belier"
              imageSrc="/images/zodiaque/belier.webp"
              imageAlt="Symbole astrologique du Bélier"
              element="feu"
              tagline="Dit en serrant la mâchoire"
              lie={<>&laquo; Non mais c&apos;est bon, je suis <strong>très calme</strong>. &raquo;</>}
              lieContext="Bélier · volume sonore : +20 %"
              verite={
                <>
                  <p>
                    Le <strong>Bélier</strong> n&apos;est pas calme. Le Bélier bout.
                    Mars, sa planète, transforme chaque contrariété en urgence
                    nationale — mais admettre qu&apos;il s&apos;emporte, c&apos;est
                    admettre qu&apos;il a perdu le contrôle. Impensable.
                  </p>
                </>
              }
              reperage={
                <>
                  <p>
                    Plus il répète &laquo; je suis calme &raquo;, moins il l&apos;est.
                    Bonus : la phrase est généralement suivie d&apos;un claquement de
                    porte très calme.
                  </p>
                </>
              }
            />

            <LieSection
              id="taureau"
              title="♉ Taureau — « J'arrive, je me lève. »"
              href="/signes/taureau"
              imageSrc="/images/zodiaque/taureau.webp"
              imageAlt="Symbole astrologique du Taureau"
              element="terre"
              tagline="N'a pas bougé d'un centimètre"
              lie={<>&laquo; Oui oui, <strong>je me lève</strong>, cinq minutes. &raquo;</>}
              lieContext="Taureau · toujours sous le plaid"
              verite={
                <>
                  <p>
                    Le <strong>Taureau</strong> ne ment pas par malice : il ment par
                    optimisme sur sa propre inertie. Vénus en Terre adore le confort
                    présent — et &laquo; cinq minutes &raquo; est une unité de temps
                    vénusienne qui peut contenir un film entier.
                  </p>
                </>
              }
              reperage={
                <>
                  <p>
                    S&apos;il précise &laquo; promis &raquo;, ajoute une heure. La seule
                    chose qui le lève vraiment : une odeur de nourriture.
                  </p>
                </>
              }
            />

            <LieSection
              id="gemeaux"
              title="♊ Gémeaux — « Je ne le dirai à personne. »"
              href="/signes/gemeaux"
              imageSrc="/images/zodiaque/gemeaux.webp"
              imageAlt="Symbole astrologique des Gémeaux"
              element="air"
              tagline="Déjà en train de composer le message"
              lie={<>&laquo; T&apos;inquiète, <strong>ça reste entre nous</strong>. &raquo;</>}
              lieContext="Gémeaux · 3 conversations ouvertes"
              verite={
                <>
                  <p>
                    Les <strong>Gémeaux</strong> sont sincères… au moment où ils le
                    disent. Mais Mercure, planète de la circulation de
                    l&apos;information, considère qu&apos;une bonne histoire
                    <em> doit</em> circuler. Ce n&apos;est pas de la trahison, c&apos;est
                    de la logistique.
                  </p>
                </>
              }
              reperage={
                <>
                  <p>
                    Si l&apos;info est vraiment croustillante, elle aura fait le tour du
                    groupe avant minuit — avec des améliorations narratives.
                  </p>
                </>
              }
            />

            <LieSection
              id="cancer"
              title="♋ Cancer — « Ça va, je vais bien. »"
              href="/signes/cancer"
              imageSrc="/images/zodiaque/cancer.webp"
              imageAlt="Symbole astrologique du Cancer"
              element="eau"
              tagline="Ne va pas bien du tout"
              lie={<>&laquo; Ça va, <strong>je vais bien</strong> 🙂 &raquo;</>}
              lieContext="Cancer · au bord des larmes"
              verite={
                <>
                  <p>
                    Le <strong>Cancer</strong> ne va pas bien, et il espère secrètement
                    que tu insistes. Signe lunaire, il protège sa vulnérabilité derrière
                    une carapace — mais laisse toujours un indice dépasser, au cas où
                    quelqu&apos;un l&apos;aimerait assez pour creuser.
                  </p>
                </>
              }
              reperage={
                <>
                  <p>
                    Le &laquo; 🙂 &raquo; est le drapeau rouge. Un Cancer qui va bien
                    raconte sa journée ; un Cancer qui &laquo; va bien &raquo; répond en
                    trois mots.
                  </p>
                </>
              }
            />

            <LieSection
              id="lion"
              title="♌ Lion — « Je me fiche de ce qu'on pense de moi. »"
              href="/signes/lion"
              imageSrc="/images/zodiaque/lion.webp"
              imageAlt="Symbole astrologique du Lion"
              element="feu"
              tagline="Vérifie ses notifications toutes les 4 minutes"
              lie={<>&laquo; Franchement, <strong>l&apos;avis des gens</strong>, ça ne m&apos;atteint pas. &raquo;</>}
              lieContext="Lion · vient de relire ses commentaires"
              verite={
                <>
                  <p>
                    Le <strong>Lion</strong> est solaire : il a <em>besoin</em> de
                    rayonner et d&apos;être vu. L&apos;indifférence affichée est une
                    couronne de secours — parce qu&apos;admettre qu&apos;un avis
                    l&apos;a blessé, c&apos;est descendre de scène.
                  </p>
                </>
              }
              reperage={
                <>
                  <p>
                    Il se souvient mot pour mot de la critique reçue il y a trois ans.
                    Mais ça ne l&apos;atteint pas, hein.
                  </p>
                </>
              }
            />

            <LieSection
              id="vierge"
              title="♍ Vierge — « C'est bon, je lâche prise. »"
              href="/signes/vierge"
              imageSrc="/images/zodiaque/vierge.webp"
              imageAlt="Symbole astrologique de la Vierge"
              element="terre"
              tagline="Vient de refaire la liste une troisième fois"
              lie={<>&laquo; Non non, <strong>je lâche prise</strong>, advienne que pourra. &raquo;</>}
              lieContext="Vierge · a un plan B, C et D"
              verite={
                <>
                  <p>
                    La <strong>Vierge</strong> ne lâche jamais prise : elle délègue à
                    son cerveau nocturne. Mercure en Terre analyse tout, tout le temps —
                    le &laquo; lâcher-prise &raquo; est juste la version silencieuse de
                    son contrôle qualité.
                  </p>
                </>
              }
              reperage={
                <>
                  <p>
                    Demande-lui &laquo; donc on improvise ? &raquo; et regarde son œil
                    gauche. Il tressaille.
                  </p>
                </>
              }
            />

            <LieSection
              id="balance"
              title="♎ Balance — « Ça m'est égal, choisis toi. »"
              href="/signes/balance"
              imageSrc="/images/zodiaque/balance.webp"
              imageAlt="Symbole astrologique de la Balance"
              element="air"
              tagline="A une préférence très précise"
              lie={<>&laquo; Vraiment, <strong>ça m&apos;est égal</strong>, comme tu veux 🙂 &raquo;</>}
              lieContext="Balance · déteste l'option que tu vas choisir"
              verite={
                <>
                  <p>
                    La <strong>Balance</strong> a une préférence. Elle l&apos;a depuis
                    le début. Mais Vénus en Air place l&apos;harmonie au-dessus de tout :
                    imposer son choix risquerait de créer une friction, et la friction
                    est son ennemie intime.
                  </p>
                </>
              }
              reperage={
                <>
                  <p>
                    Choisis &laquo; au hasard &raquo; et observe le micro-silence. S&apos;il
                    dure plus de deux secondes, tu as choisi la mauvaise option.
                  </p>
                </>
              }
            />

            <LieSection
              id="scorpion"
              title="♏ Scorpion — « Je t'ai pardonné. »"
              href="/signes/scorpion"
              imageSrc="/images/zodiaque/scorpion.webp"
              imageAlt="Symbole astrologique du Scorpion"
              element="eau"
              tagline="Dossier archivé, jamais supprimé"
              lie={<>&laquo; C&apos;est oublié, <strong>je t&apos;ai pardonné</strong>. &raquo;</>}
              lieContext="Scorpion · date, heure et témoins mémorisés"
              verite={
                <>
                  <p>
                    Le <strong>Scorpion</strong> a peut-être pardonné. Mais oublié ?
                    Jamais. Pluton archive chaque blessure dans un dossier daté,
                    classé, consultable à la moindre récidive. Le pardon est réel —
                    c&apos;est la période d&apos;essai qui est éternelle.
                  </p>
                </>
              }
              reperage={
                <>
                  <p>
                    Six mois plus tard, en pleine discussion : &laquo; comme le 14 mars,
                    tu veux dire ? &raquo;. Voilà.
                  </p>
                </>
              }
            />

            <LieSection
              id="sagittaire"
              title="♐ Sagittaire — « J'arrive, je suis à 10 minutes. »"
              href="/signes/sagittaire"
              imageSrc="/images/zodiaque/sagittaire.webp"
              imageAlt="Symbole astrologique du Sagittaire"
              element="feu"
              tagline="Sort de la douche"
              lie={<>&laquo; <strong>J&apos;arrive</strong> ! Je suis à 10 minutes max. &raquo;</>}
              lieContext="Sagittaire · cheveux mouillés, chaussettes dépareillées"
              verite={
                <>
                  <p>
                    Le <strong>Sagittaire</strong> croit sincèrement être à 10 minutes.
                    Jupiter dilate tout — l&apos;enthousiasme, les projets, et surtout
                    sa perception du temps. Dans sa tête, il est déjà avec toi. Son
                    corps, lui, cherche encore ses clés.
                  </p>
                </>
              }
              reperage={
                <>
                  <p>
                    &laquo; 10 minutes &raquo; = 40. &laquo; Je pars maintenant &raquo; =
                    il va d&apos;abord manger un truc. Prévois un livre.
                  </p>
                </>
              }
            />

            <LieSection
              id="capricorne"
              title="♑ Capricorne — « Le travail, c'est pas toute ma vie. »"
              href="/signes/capricorne"
              imageSrc="/images/zodiaque/capricorne.webp"
              imageAlt="Symbole astrologique du Capricorne"
              element="terre"
              tagline="Répond à un mail pendant qu'il le dit"
              lie={<>&laquo; Tu sais, <strong>le travail c&apos;est pas toute ma vie</strong>. &raquo;</>}
              lieContext="Capricorne · dimanche, 22h47, ordinateur ouvert"
              verite={
                <>
                  <p>
                    Le <strong>Capricorne</strong> aimerait que ce soit vrai. Mais
                    Saturne mesure la valeur d&apos;une journée à ce qu&apos;elle a
                    construit — et le repos sans objectif lui donne des démangeaisons.
                    Ses vacances ont un planning. Son planning a des sous-sections.
                  </p>
                </>
              }
              reperage={
                <>
                  <p>
                    Demande-lui de te raconter son dernier week-end &laquo; sans rien
                    faire &raquo;. Il y aura un tableau comparatif.
                  </p>
                </>
              }
            />

            <LieSection
              id="verseau"
              title="♒ Verseau — « Ça ne me touche pas. »"
              href="/signes/verseau"
              imageSrc="/images/zodiaque/verseau.webp"
              imageAlt="Symbole astrologique du Verseau"
              element="air"
              tagline="Y repensera à 3h du matin"
              lie={<>&laquo; Les émotions, tout ça… <strong>ça ne me touche pas</strong> plus que ça. &raquo;</>}
              lieContext="Verseau · en pleine analyse du truc qui ne le touche pas"
              verite={
                <>
                  <p>
                    Le <strong>Verseau</strong> ressent tout — mais en différé, et par
                    voie intellectuelle. Uranus préfère transformer l&apos;émotion en
                    concept : c&apos;est plus propre, plus maîtrisable, moins…
                    humide. Le détachement est sa combinaison de protection.
                  </p>
                </>
              }
              reperage={
                <>
                  <p>
                    Trois jours plus tard, il t&apos;envoie un article de psychologie
                    &laquo; sans rapport &raquo;. C&apos;est sa façon de dire que ça
                    l&apos;a touché.
                  </p>
                </>
              }
            />

            <LieSection
              id="poissons"
              title="♓ Poissons — « Oui oui, j'écoutais. »"
              href="/signes/poissons"
              imageSrc="/images/zodiaque/poissons.webp"
              imageAlt="Symbole astrologique des Poissons"
              element="eau"
              tagline="Était sur une autre planète"
              lie={<>&laquo; Bien sûr que <strong>j&apos;écoutais</strong> ! Tu disais que… euh… &raquo;</>}
              lieContext="Poissons · de retour d'un voyage intérieur"
              verite={
                <>
                  <p>
                    Les <strong>Poissons</strong> t&apos;écoutaient… au début. Puis un
                    mot a déclenché une image, l&apos;image un souvenir, le souvenir un
                    monde entier. Neptune ne coupe jamais vraiment le contact avec
                    l&apos;océan intérieur — ta phrase était juste la porte
                    d&apos;embarquement.
                  </p>
                </>
              }
              reperage={
                <>
                  <p>
                    Le regard flou et le hochement de tête à contretemps. Redis ta
                    dernière phrase : la vraie écoute commence maintenant.
                  </p>
                </>
              }
            />
          </div>
        </section>

        {/* SYNTHÈSE PAR ÉLÉMENT */}
        <section className="space-y-4" aria-labelledby="synthese-elements">
          <H2 id="synthese-elements">Le résumé par élément</H2>

          <p className="text-text/85 leading-relaxed">
            Derrière les 12 mensonges, quatre <strong>stratégies de
            protection</strong> — une par élément.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-red-300/80">
                Feu · Bélier · Lion · Sagittaire
              </p>
              <p className="mt-2 text-text/85 leading-relaxed">
                Mentent pour protéger leur <strong>image de force</strong> :
                &laquo; je suis calme &raquo;, &laquo; ça ne m&apos;atteint
                pas &raquo;, &laquo; j&apos;arrive &raquo;. Le Feu ne veut jamais
                paraître dépassé — ni par ses émotions, ni par l&apos;horloge.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5">
              <p className="mt-0 text-sm font-semibold uppercase tracking-widest text-emerald-300/80">
                Terre · Taureau · Vierge · Capricorne
              </p>
              <p className="mt-2 text-text/85 leading-relaxed">
                Mentent pour protéger leur <strong>tempo et leur contrôle</strong> :
                &laquo; je me lève &raquo;, &laquo; je lâche prise &raquo;,
                &laquo; le travail c&apos;est pas toute ma vie &raquo;. La Terre
                promet le changement… pour rester exactement où elle est.
              </p>
            </div>
            <div className="rounded-2xl border border-sky-500/30 bg-sky-500/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-sky-300/80">
                Air · Gémeaux · Balance · Verseau
              </p>
              <p className="mt-2 text-text/85 leading-relaxed">
                Mentent pour protéger leur <strong>légèreté</strong> :
                &laquo; ça reste entre nous &raquo;, &laquo; ça m&apos;est
                égal &raquo;, &laquo; ça ne me touche pas &raquo;. L&apos;Air esquive
                tout ce qui pourrait l&apos;alourdir : le conflit, l&apos;engagement,
                l&apos;émotion brute.
              </p>
            </div>
            <div className="rounded-2xl border border-violet-500/30 bg-violet-500/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-violet-300/80">
                Eau · Cancer · Scorpion · Poissons
              </p>
              <p className="mt-2 text-text/85 leading-relaxed">
                Mentent pour protéger leur <strong>vulnérabilité</strong> :
                &laquo; ça va &raquo;, &laquo; je t&apos;ai pardonné &raquo;,
                &laquo; j&apos;écoutais &raquo;. L&apos;Eau ne ment pas sur les faits —
                elle ment sur la profondeur de ce qu&apos;elle ressent.
              </p>
            </div>
          </div>

          <p className="text-text/80 leading-relaxed">
            Comme toujours, le signe solaire n&apos;est qu&apos;une partie de
            l&apos;histoire : l&apos;
            <Link href="/blog/comprendre-signe-astrologique-ascendant-12-exemples" className="underline decoration-white/30 hover:decoration-white/60 transition">ascendant</Link>,
            la <Link href="/blog/lunarien" className="underline decoration-white/30 hover:decoration-white/60 transition">Lune</Link> et
            <Link href="/blog/mercurien" className="underline decoration-white/30 hover:decoration-white/60 transition"> Mercure</Link> affinent
            beaucoup la façon de dire — ou de ne pas dire — la vérité. Tout
            l&apos;intérêt d&apos;un
            <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline decoration-white/30 hover:decoration-white/60 transition"> thème astral</Link> complet.
          </p>
        </section>

        {/* NUANCE */}
        <section className="space-y-3" aria-labelledby="mensonge-vs-manipulation">
          <H2 id="mensonge-vs-manipulation">Petit mensonge ou vraie manipulation ?</H2>
          <p className="text-text/85 leading-relaxed">
            Les mensonges de cet article sont des <strong>mensonges de
            protection</strong> : ils défendent une fragilité, pas un intérêt. La
            manipulation, elle, vise à obtenir quelque chose de l&apos;autre — et
            c&apos;est un tout autre sujet, que nous avons traité dans notre article
            sur les
            <Link href="/blog/manipulateurs-pervers-narcissiques-astrologie" className="underline decoration-white/30 hover:decoration-white/60 transition"> manipulateurs et pervers narcissiques en astrologie</Link>.
            Si les mensonges de quelqu&apos;un te coûtent plus qu&apos;ils ne le
            protègent, ce n&apos;est plus de l&apos;astrologie amusante : c&apos;est un
            signal.
          </p>
        </section>

        {/* CONCLUSION */}
        <section className="space-y-3" aria-labelledby="conclusion">
          <H2 id="conclusion">Et toi, c&apos;est lequel ton mensonge ?</H2>
          <p className="text-text/85 leading-relaxed">
            Si tu as souri jaune en lisant ton signe, c&apos;est bon signe : ton
            Soleil fonctionne à plein régime. Si rien ne te ressemble, regarde ton
            ascendant ou ta Lune — nos petits arrangements avec la vérité viennent
            souvent de là. Et si ton
            <Link href="/blog/pourquoi-votre-horoscope-ne-vous-ressemble-pas" className="underline decoration-white/30 hover:decoration-white/60 transition"> horoscope ne te ressemble pas du tout</Link>,
            on a aussi une explication.
          </p>
          <p className="text-text/85 leading-relaxed">
            La prochaine fois qu&apos;on te dit &laquo; je suis calme &raquo; avec les
            dents serrées, tu sauras : ce n&apos;est pas un mensonge. C&apos;est un
            Bélier qui fait de son mieux.
          </p>
        </section>

        {/* FAQ */}
        <section className="space-y-6" aria-labelledby="faq-mensonges-signes">
          <H2 id="faq-mensonges-signes">Questions fréquentes</H2>

          <div className="space-y-4">
            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">
                Quel est le signe astrologique qui ment le plus ?
              </summary>
              <p className="text-text/85 leading-relaxed">
                Aucun signe ne ment &laquo; plus &raquo; que les autres : chacun ment
                <strong> différemment</strong>. Les Gémeaux enjolivent, les Poissons
                fuient dans le flou, le Scorpion cache, la Balance arrange la vérité
                pour préserver l&apos;harmonie. Le mensonge d&apos;un signe reflète sa
                fragilité principale, pas un défaut moral propre à ce signe.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">
                Pourquoi chaque signe a-t-il un mensonge &laquo; préféré &raquo; ?
              </summary>
              <p className="text-text/85 leading-relaxed">
                Parce que le mensonge le plus fréquent d&apos;une personne protège ce
                qui compte le plus pour elle : son <strong>image</strong> (Lion), son
                <strong> indépendance</strong> (Verseau), son <strong>confort</strong>
                (Taureau) ou sa <strong>vulnérabilité</strong> (Cancer, Scorpion). En
                astrologie, ce point sensible correspond à la nature élémentaire du
                signe et à sa planète maîtresse.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">
                Peut-on détecter un mensonge grâce à l&apos;astrologie ?
              </summary>
              <p className="text-text/85 leading-relaxed">
                Non — l&apos;astrologie n&apos;est pas un détecteur de mensonges. En
                revanche, connaître le tempérament d&apos;un signe aide à comprendre
                <strong> ce qu&apos;il protège</strong> quand il ment : un
                &laquo; ça va &raquo; de Cancer ne signifie pas la même chose
                qu&apos;un &laquo; ça va &raquo; de Capricorne. C&apos;est une grille
                de lecture, pas une preuve.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">
                Mentir souvent, est-ce écrit dans le thème astral ?
              </summary>
              <p className="text-text/85 leading-relaxed">
                Le <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline decoration-white/30 hover:decoration-white/60 transition">thème natal</Link> ne
                condamne personne au mensonge. Certaines positions
                (<Link href="/blog/mercurien" className="underline decoration-white/30 hover:decoration-white/60 transition">Mercure</Link> ou
                <Link href="/blog/neptunien" className="underline decoration-white/30 hover:decoration-white/60 transition"> Neptune</Link> en
                aspect dissonant) donnent une facilité à embellir ou à esquiver, mais
                l&apos;usage qu&apos;on en fait reste un choix. Un thème montre des
                tendances, jamais des fatalités.
              </p>
            </details>
          </div>
        </section>

        <nav aria-label="Navigation de fin d'article">
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
