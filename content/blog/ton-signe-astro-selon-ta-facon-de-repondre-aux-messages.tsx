import type { ReactNode } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "./ui";
import { AUTHOR_PERSON, PUBLISHER_ORG, SITE_URL } from "@/lib/seo";

const ARTICLE_SLUG = "ton-signe-astro-selon-ta-facon-de-repondre-aux-messages";
const ARTICLE_URL = `${SITE_URL}/blog/${ARTICLE_SLUG}`;
const COVER_URL = `${SITE_URL}/images/blog/ton-signe-astro-selon-ta-facon-de-repondre-aux-messages.webp`;

export const meta = {
  slug: ARTICLE_SLUG,
  title: "Ton signe astro selon ta façon de répondre aux messages",
  seoTitle: "Ton signe selon ta façon de répondre aux SMS — Astro Cours",
  description:
    "Vu, pas vu, vocal de 4 minutes ou réponse en un mot ? Ton signe astro selon ta façon de répondre aux SMS et DM. Léger, drôle, étonnamment juste.",
  date: "2026-05-19",
  tags: ["signe", "zodiaque", "psychologie astrologique", "astrologie"],
  readingLevel: "débutant" as const,
  cover: "/images/blog/ton-signe-astro-selon-ta-facon-de-repondre-aux-messages.webp",
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
        alt: "Ton signe astro selon ta façon de répondre aux messages",
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
      bubbleOut: "bg-red-500/15 border-red-400/30 text-red-50",
    };
  }

  if (element === "terre") {
    return {
      border: "border-emerald-500/30",
      iconWrap: "border-emerald-500/25 bg-emerald-500/10",
      glow: "from-emerald-500/10 to-transparent",
      title: "text-emerald-200",
      bubbleOut: "bg-emerald-500/15 border-emerald-400/30 text-emerald-50",
    };
  }

  if (element === "air") {
    return {
      border: "border-sky-500/30",
      iconWrap: "border-sky-500/25 bg-sky-500/10",
      glow: "from-sky-500/10 to-transparent",
      title: "text-sky-200",
      bubbleOut: "bg-sky-500/15 border-sky-400/30 text-sky-50",
    };
  }

  return {
    border: "border-violet-500/30",
    iconWrap: "border-violet-500/25 bg-violet-500/10",
    glow: "from-violet-500/10 to-transparent",
    title: "text-violet-200",
    bubbleOut: "bg-violet-500/15 border-violet-400/30 text-violet-50",
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

function MessageBubble({
  side,
  meta: bubbleMeta,
  children,
  bubbleClass,
}: {
  side: "in" | "out";
  meta: string;
  children: ReactNode;
  bubbleClass?: string;
}) {
  const isOut = side === "out";

  return (
    <div className={`flex ${isOut ? "justify-end" : "justify-start"}`}>
      <div className="max-w-[85%]">
        <div
          className={[
            "rounded-2xl border px-4 py-3 text-[15px] leading-relaxed shadow-soft",
            isOut
              ? bubbleClass ?? "bg-white/10 border-white/15 text-white/90"
              : "bg-black/30 border-white/10 text-text/85",
            isOut ? "rounded-br-md" : "rounded-bl-md",
          ].join(" ")}
        >
          {children}
        </div>
        <p
          className={[
            "mt-1 text-[11px] uppercase tracking-widest text-text/45",
            isOut ? "text-right" : "text-left",
          ].join(" ")}
        >
          {bubbleMeta}
        </p>
      </div>
    </div>
  );
}

function SignSection({
  id,
  title,
  href,
  imageSrc,
  imageAlt,
  element,
  tagline,
  scenarioMessage,
  scenarioMeta,
  replyMessage,
  replyMeta,
  decryptage,
}: {
  id: string;
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  element: ZodiacElement;
  tagline: string;
  scenarioMessage: ReactNode;
  scenarioMeta: string;
  replyMessage: ReactNode;
  replyMeta: string;
  decryptage: ReactNode;
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

        <div className="relative mt-5 space-y-3">
          <MessageBubble side="in" meta={scenarioMeta}>
            {scenarioMessage}
          </MessageBubble>
          <MessageBubble
            side="out"
            meta={replyMeta}
            bubbleClass={styles.bubbleOut}
          >
            {replyMessage}
          </MessageBubble>
        </div>

        <div className="relative mt-5 rounded-xl border border-white/10 bg-black/30 p-4 text-text/85 leading-relaxed">
          <p className="text-xs font-semibold uppercase tracking-widest text-text/55">
            Décryptage astro
          </p>
          <div className="mt-1 space-y-2">{decryptage}</div>
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
        name: "Mon signe solaire suffit-il pour expliquer ma façon de répondre aux messages ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Non. Le signe solaire donne une grande tendance, mais l'ascendant, la position de Mercure (la communication) et celle de la Lune (les émotions) affinent énormément le style relationnel. Un Bélier ascendant Vierge ne répondra pas comme un Bélier ascendant Sagittaire.",
        },
      },
      {
        "@type": "Question",
        name: "Pourquoi certains signes mettent autant de temps à répondre ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Les signes de Terre (Taureau, Capricorne) prennent leur temps par tempérament : ils répondent quand ils sont disponibles, pas avant. Le Scorpion observe avant d'agir. Le Verseau, lui, oublie tout simplement. Ce n'est pas du désintérêt, c'est un rapport au temps différent.",
        },
      },
      {
        "@type": "Question",
        name: "Quel signe envoie les vocaux interminables ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le Lion, sans hésitation. Il préfère raconter que taper. Le Sagittaire et les Poissons sont aussi de grands amateurs de vocaux, mais pour des raisons différentes : l'un pour l'enthousiasme, l'autre pour l'émotion.",
        },
      },
      {
        "@type": "Question",
        name: "Est-ce que la position de Mercure change vraiment la façon d'écrire ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, énormément. Mercure gouverne la pensée, le langage et la communication. Mercure en signe d'Air (Gémeaux, Balance, Verseau) donne un style rapide, fluide, parfois dispersé. Mercure en signe d'Eau (Cancer, Scorpion, Poissons) donne un style chargé d'émotion, allusif, parfois ambigu.",
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
            <p className="text-sm text-text/65">Astrologie &amp; communication</p>

            <p className="mt-4 max-w-2xl text-text/80 leading-relaxed">
              Vu à 14:32. Vocal de 4 minutes. <strong>Quatre bulles d&apos;affilée</strong>.
              Un &laquo; ok. &raquo; avec un point. Notre façon de répondre aux messages
              en dit souvent plus que le contenu lui-même — et l&apos;astrologie a
              quelques théories très drôles à ce sujet.
            </p>

            <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
              On a passé en revue les 12 signes du zodiaque pour décoder leur
              <strong> style SMS</strong>. Avec un fond sérieux derrière le clin d&apos;œil :
              la communication d&apos;un signe découle vraiment de sa <strong>nature
              élémentaire</strong> et de Mercure.
            </p>

            <div className="mt-5 flex flex-wrap gap-2" aria-label="Thèmes de l'article">
              <Pill tone="rose">Style SMS</Pill>
              <Pill tone="violet">12 archétypes</Pill>
              <Pill tone="sky">Communication</Pill>
              <Pill tone="orange">Léger &amp; drôle</Pill>
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
            La <strong>façon de répondre aux messages</strong> reflète le tempérament astrologique
            d&apos;une personne : les signes de <strong>Feu</strong> répondent vite et fort, les signes
            de <strong>Terre</strong> répondent quand ça les arrange, les signes d&apos;<strong>Air</strong>
            répondent beaucoup et vite, les signes d&apos;<strong>Eau</strong> répondent
            en sous-entendus. Mercure et la Lune affinent ensuite le style individuel.
          </p>
        </div>

        {/* INTRO */}
        <section className="space-y-3" aria-labelledby="intro">
          <H2 id="intro">Pourquoi nos messages trahissent notre signe</H2>
          <p className="text-text/85 leading-relaxed">
            Un message, c&apos;est trois micro-décisions : <strong>quand</strong> répondre,
            <strong> quoi</strong> répondre, <strong>comment</strong> l&apos;écrire. Et ces
            trois décisions sont pilotées par des fonctions psychiques très précises
            — le rapport au temps, à l&apos;autre, à l&apos;émotion. Autrement dit, par les
            <strong> éléments astrologiques</strong> et par la position de
            <Link href="/blog/mercurien" className="underline decoration-white/30 hover:decoration-white/60 transition"> Mercure</Link>.
          </p>
          <p className="text-text/85 leading-relaxed">
            Ce qui suit est volontairement caricatural, mais ne t&apos;y trompe pas :
            chaque description est ancrée dans le tempérament réel du signe. Tu vas
            reconnaître quelqu&apos;un. Probablement toi.
          </p>
        </section>

        {/* 12 SIGNES */}
        <section className="space-y-6" aria-labelledby="les-12-signes">
          <H2 id="les-12-signes">Les 12 signes face à un message non lu</H2>

          <div className="grid gap-6">
            <SignSection
              id="belier"
              title="♈ Bélier — répond avant d'avoir fini de lire"
              href="/signes/belier"
              imageSrc="/images/zodiaque/belier.webp"
              imageAlt="Symbole astrologique du Bélier"
              element="feu"
              tagline="« On bouge ou on bouge pas ? »"
              scenarioMessage={<>Salut, tu fais quoi ce soir ?</>}
              scenarioMeta="Toi · 19:42"
              replyMessage={<>Rien je suis chaud on bouge où</>}
              replyMeta="Bélier · 19:42"
              decryptage={
                <>
                  <p>
                    Onze secondes. Pas de point, pas de virgule, pas de question retour
                    bien formulée. Le <strong>Bélier</strong> ne réfléchit pas, il agit.
                    Mars, sa planète, déteste l&apos;attente.
                  </p>
                  <p className="text-text/70 text-sm">
                    Astuce : si tu veux le voir hésiter, propose-lui trois options. Il en
                    choisira une en moins d&apos;une minute. Une bonne ? Pas forcément.
                  </p>
                </>
              }
            />

            <SignSection
              id="taureau"
              title="♉ Taureau — lit, range, répondra plus tard"
              href="/signes/taureau"
              imageSrc="/images/zodiaque/taureau.webp"
              imageAlt="Symbole astrologique du Taureau"
              element="terre"
              tagline="« Je réponds quand j'ai un moment 🙂 »"
              scenarioMessage={<>Tu as vu mon message d&apos;hier ?</>}
              scenarioMeta="Toi · 09:12"
              replyMessage={
                <>Oui oui je réponds dès que j&apos;ai un moment 🙂</>
              }
              replyMeta="Taureau · 21:38 (12h plus tard)"
              decryptage={
                <>
                  <p>
                    Le <strong>Taureau</strong> a vu. Le Taureau a noté. Le Taureau
                    répondra. Pas maintenant. Vénus en Terre déteste qu&apos;on bouscule
                    son tempo : sa réponse arrivera quand le contexte sera confortable —
                    pas avant.
                  </p>
                  <p className="text-text/70 text-sm">
                    Ne le presse pas. Tu n&apos;accélèreras rien et tu risques le silence
                    radio complet.
                  </p>
                </>
              }
            />

            <SignSection
              id="gemeaux"
              title="♊ Gémeaux — répond en quatre bulles"
              href="/signes/gemeaux"
              imageSrc="/images/zodiaque/gemeaux.webp"
              imageAlt="Symbole astrologique des Gémeaux"
              element="air"
              tagline="« attend / en fait / nan mais en gros »"
              scenarioMessage={<>Tu peux m&apos;expliquer le truc ?</>}
              scenarioMeta="Toi · 14:01"
              replyMessage={
                <>
                  <span className="block">Alors</span>
                  <span className="block">attend</span>
                  <span className="block">en gros c&apos;est ça mais</span>
                  <span className="block">nan en fait ça dépend</span>
                </>
              }
              replyMeta="Gémeaux · 14:01 (×4)"
              decryptage={
                <>
                  <p>
                    Quatre bulles, deux idées, six tangentes. Les
                    <strong> Gémeaux</strong> sont gouvernés par Mercure — la pensée
                    rapide, associative, qui rebondit d&apos;une idée à l&apos;autre. Taper une
                    seule phrase complète serait une trahison de leur style mental.
                  </p>
                  <p className="text-text/70 text-sm">
                    Bonne nouvelle : ils ne t&apos;ignoreront jamais. Mauvaise : ils peuvent
                    aussi répondre à côté de ta question initiale.
                  </p>
                </>
              }
            />

            <SignSection
              id="cancer"
              title="♋ Cancer — « c'est pas grave » (c'est grave)"
              href="/signes/cancer"
              imageSrc="/images/zodiaque/cancer.webp"
              imageAlt="Symbole astrologique du Cancer"
              element="eau"
              tagline="L'émoji qui cache tout"
              scenarioMessage={<>On annule ce soir, je suis crevé.</>}
              scenarioMeta="Toi · 18:55"
              replyMessage={<>Ah ok 😌 c&apos;est pas grave</>}
              replyMeta="Cancer · 18:56"
              decryptage={
                <>
                  <p>
                    &laquo; c&apos;est pas grave &raquo; = c&apos;est grave. L&apos;emoji est un piège.
                    Le <strong>Cancer</strong>, signe d&apos;Eau lunaire, encaisse en silence
                    et te laisse deviner ce qui se passe vraiment.
                  </p>
                  <p className="text-text/70 text-sm">
                    Si tu reçois ce message : appelle. Vraiment. Un vocal de 30 secondes
                    suffit à dissoudre 80 % du malaise.
                  </p>
                </>
              }
            />

            <SignSection
              id="lion"
              title="♌ Lion — répond par un vocal de 4 minutes"
              href="/signes/lion"
              imageSrc="/images/zodiaque/lion.webp"
              imageAlt="Symbole astrologique du Lion"
              element="feu"
              tagline="« Attends je t'envoie un vocal c'est plus simple »"
              scenarioMessage={<>Tu peux me résumer la situation ?</>}
              scenarioMeta="Toi · 11:14"
              replyMessage={<>🎙️ Vocal · 4:12</>}
              replyMeta="Lion · 11:14"
              decryptage={
                <>
                  <p>
                    Le <strong>Lion</strong> ne tape pas, le Lion raconte. Solaire, il a
                    besoin d&apos;exister par sa voix, sa présence, son timing. Le vocal
                    n&apos;est pas un raccourci : c&apos;est une mise en scène.
                  </p>
                  <p className="text-text/70 text-sm">
                    Tu vas écouter, tu vas sourire, tu vas pardonner. C&apos;est le pouvoir
                    du Lion.
                  </p>
                </>
              }
            />

            <SignSection
              id="vierge"
              title="♍ Vierge — corrige ta faute avant de répondre"
              href="/signes/vierge"
              imageSrc="/images/zodiaque/vierge.webp"
              imageAlt="Symbole astrologique de la Vierge"
              element="terre"
              tagline="L'astérisque est une déclaration d'amour"
              scenarioMessage={<>Tu veut venir samedi ?</>}
              scenarioMeta="Toi · 17:00"
              replyMessage={<>*veux. Oui, avec plaisir.</>}
              replyMeta="Vierge · 17:01"
              decryptage={
                <>
                  <p>
                    L&apos;astérisque, c&apos;est de l&apos;amour. La <strong>Vierge</strong>, gouvernée
                    par Mercure en Terre, ne supporte pas l&apos;imprécision. Te corriger,
                    pour elle, c&apos;est te soigner.
                  </p>
                  <p className="text-text/70 text-sm">
                    Petit conseil : ne lui demande pas &laquo; comment tu vas ? &raquo;,
                    elle te répondra vraiment.
                  </p>
                </>
              }
            />

            <SignSection
              id="balance"
              title="♎ Balance — répond en te re-posant la question"
              href="/signes/balance"
              imageSrc="/images/zodiaque/balance.webp"
              imageAlt="Symbole astrologique de la Balance"
              element="air"
              tagline="« Ce que tu préfères toi 🙂 »"
              scenarioMessage={<>Tu préfères quel resto ?</>}
              scenarioMeta="Toi · 12:30"
              replyMessage={
                <>Ce que tu préfères toi ça me va 🙂 et toi tu hésites entre quoi ?</>
              }
              replyMeta="Balance · 13:02"
              decryptage={
                <>
                  <p>
                    La <strong>Balance</strong> ne décide pas, la Balance harmonise. Vénus
                    en Air cherche le consensus avant tout — et préfère parfois ne pas
                    choisir plutôt que de risquer de décevoir.
                  </p>
                  <p className="text-text/70 text-sm">
                    Si tu veux vraiment une réponse : propose <em>deux</em> options
                    fermées. Trois, et tu déclenches une crise existentielle.
                  </p>
                </>
              }
            />

            <SignSection
              id="scorpion"
              title="♏ Scorpion — vu, pas répondu, reste en ligne"
              href="/signes/scorpion"
              imageSrc="/images/zodiaque/scorpion.webp"
              imageAlt="Symbole astrologique du Scorpion"
              element="eau"
              tagline="Vu à 14:32"
              scenarioMessage={<>On peut parler ?</>}
              scenarioMeta="Toi · 14:31"
              replyMessage={<>👁️ Vu à 14:32</>}
              replyMeta="Scorpion · silence"
              decryptage={
                <>
                  <p>
                    Le <strong>Scorpion</strong> observe. Le Scorpion décidera. Pas tout
                    de suite. Pluton, sa planète, déteste répondre dans la précipitation —
                    et adore que tu attendes.
                  </p>
                  <p className="text-text/70 text-sm">
                    Le silence n&apos;est jamais innocent. C&apos;est une réponse. À toi de la
                    lire.
                  </p>
                </>
              }
            />

            <SignSection
              id="sagittaire"
              title="♐ Sagittaire — répond à côté, mais avec enthousiasme"
              href="/signes/sagittaire"
              imageSrc="/images/zodiaque/sagittaire.webp"
              imageAlt="Symbole astrologique du Sagittaire"
              element="feu"
              tagline="« Mdr j'ai oublié, mais sinon tu sais quoi… »"
              scenarioMessage={<>Tu peux m&apos;envoyer le doc qu&apos;on a vu hier ?</>}
              scenarioMeta="Toi · 10:00"
              replyMessage={
                <>
                  Mdr j&apos;ai trop oublié 😅 mais sinon tu sais quoi, j&apos;ai vu un truc
                  dingue ce matin
                </>
              }
              replyMeta="Sagittaire · 10:04"
              decryptage={
                <>
                  <p>
                    Le doc viendra. Peut-être. Demain. La semaine prochaine. Le
                    <strong> Sagittaire</strong>, gouverné par Jupiter, vit dans le grand
                    angle : les petits détails du quotidien lui glissent entre les
                    doigts.
                  </p>
                  <p className="text-text/70 text-sm">
                    Astuce : si tu veux le doc, redemande-le en lui proposant un café.
                    Là il y pensera.
                  </p>
                </>
              }
            />

            <SignSection
              id="capricorne"
              title="♑ Capricorne — répond en un mot"
              href="/signes/capricorne"
              imageSrc="/images/zodiaque/capricorne.webp"
              imageAlt="Symbole astrologique du Capricorne"
              element="terre"
              tagline="« Ok. »"
              scenarioMessage={<>Ça te dit qu&apos;on déjeune demain ?</>}
              scenarioMeta="Toi · 16:45"
              replyMessage={<>Ok.</>}
              replyMeta="Capricorne · 16:46"
              decryptage={
                <>
                  <p>
                    Le <strong>Capricorne</strong> a dit oui. Pas besoin de plus. Sujet
                    clos. Saturne, sa planète, économise l&apos;énergie verbale comme on
                    économise les ressources d&apos;une expédition longue.
                  </p>
                  <p className="text-text/70 text-sm">
                    Ne lis pas de la froideur là où il n&apos;y a que de l&apos;efficacité. Si
                    le Capricorne disait non, tu le saurais.
                  </p>
                </>
              }
            />

            <SignSection
              id="verseau"
              title="♒ Verseau — répond 3 jours plus tard, à un autre sujet"
              href="/signes/verseau"
              imageSrc="/images/zodiaque/verseau.webp"
              imageAlt="Symbole astrologique du Verseau"
              element="air"
              tagline="« Tiens, regarde ce truc »"
              scenarioMessage={<>T&apos;as eu mon message de lundi ?</>}
              scenarioMeta="Toi · jeudi · 10:00"
              replyMessage={
                <>Tiens regarde cet article il est ouf je viens de tomber dessus 👽</>
              }
              replyMeta="Verseau · jeudi · 23:47"
              decryptage={
                <>
                  <p>
                    Le <strong>Verseau</strong> a oublié ton message. Le Verseau a une
                    nouvelle obsession. Uranus, sa planète, vit dans le présent fulgurant —
                    les conversations en cours appartiennent déjà au passé.
                  </p>
                  <p className="text-text/70 text-sm">
                    Ce n&apos;est pas du mépris. C&apos;est juste un cerveau qui change de chaîne
                    sans prévenir.
                  </p>
                </>
              }
            />

            <SignSection
              id="poissons"
              title="♓ Poissons — répond avec un cœur et une émotion existentielle"
              href="/signes/poissons"
              imageSrc="/images/zodiaque/poissons.webp"
              imageAlt="Symbole astrologique des Poissons"
              element="eau"
              tagline="« j'écoute une chanson qui me fait pleurer 💗 »"
              scenarioMessage={<>Tu fais quoi ?</>}
              scenarioMeta="Toi · 22:14"
              replyMessage={
                <>
                  Je sais pas trop, j&apos;écoute une chanson qui me fait pleurer 💗 ça va
                  toi ?
                </>
              }
              replyMeta="Poissons · 22:16"
              decryptage={
                <>
                  <p>
                    Tu n&apos;as pas demandé. Et pourtant, tout est dit. Les
                    <strong> Poissons</strong>, gouvernés par Neptune, ne séparent pas
                    le pratique de l&apos;émotionnel : chaque message est l&apos;occasion d&apos;une
                    micro-confidence.
                  </p>
                  <p className="text-text/70 text-sm">
                    Réponds-leur avec une vraie question. Ils s&apos;ouvriront comme rarement.
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
            Si tu retiens quatre choses sur la façon de répondre aux messages selon
            l&apos;astrologie, ce sont les quatre <strong>éléments</strong>.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-red-300/80">
                Feu · Bélier · Lion · Sagittaire
              </p>
              <p className="mt-2 text-text/85 leading-relaxed">
                Répondent <strong>vite</strong>, <strong>fort</strong>, et souvent
                avant d&apos;avoir fini de lire. Vocaux, exclamations, fautes assumées.
                L&apos;énergie d&apos;abord, la précision après.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300/80">
                Terre · Taureau · Vierge · Capricorne
              </p>
              <p className="mt-2 text-text/85 leading-relaxed">
                Répondent <strong>quand ça les arrange</strong>. Court, propre,
                efficace. Pas de superflu. Si tu reçois un &laquo; ok. &raquo;, ce
                n&apos;est pas froid : c&apos;est un acquiescement complet.
              </p>
            </div>
            <div className="rounded-2xl border border-sky-500/30 bg-sky-500/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-sky-300/80">
                Air · Gémeaux · Balance · Verseau
              </p>
              <p className="mt-2 text-text/85 leading-relaxed">
                Répondent <strong>beaucoup</strong>, en plusieurs bulles, et souvent
                avec une question retour. La conversation est leur élément naturel —
                la conclusion, beaucoup moins.
              </p>
            </div>
            <div className="rounded-2xl border border-violet-500/30 bg-violet-500/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-violet-300/80">
                Eau · Cancer · Scorpion · Poissons
              </p>
              <p className="mt-2 text-text/85 leading-relaxed">
                Répondent <strong>en sous-texte</strong>. Emojis, silences, ambiances.
                Le message dit une chose, l&apos;émotion en dit trois. À lire entre les
                lignes — toujours.
              </p>
            </div>
          </div>

          <p className="text-text/80 leading-relaxed">
            Ce style de communication est encore affiné par la position de
            <Link href="/blog/mercurien" className="underline decoration-white/30 hover:decoration-white/60 transition"> Mercure</Link> et
            celle de la <Link href="/blog/lunarien" className="underline decoration-white/30 hover:decoration-white/60 transition">Lune</Link> dans
            le thème natal. Un Scorpion solaire avec Mercure en Gémeaux ne sera pas
            silencieux — il sera intense <em>et</em> bavard. Tout l&apos;intérêt d&apos;un
            <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline decoration-white/30 hover:decoration-white/60 transition"> thème astral</Link> complet
            est là.
          </p>
        </section>

        {/* CONCLUSION */}
        <section className="space-y-3" aria-labelledby="conclusion">
          <H2 id="conclusion">Et toi, tu te reconnais ?</H2>
          <p className="text-text/85 leading-relaxed">
            Si tu as ri (ou grincé des dents) en lisant ton signe, c&apos;est probablement
            que ton signe solaire est bien dominant chez toi. Si rien ne te
            ressemble, regarde du côté de ton ascendant ou de ta Mercure : c&apos;est
            souvent là que se cache ton vrai style de communication.
          </p>
          <p className="text-text/85 leading-relaxed">
            Et la prochaine fois que quelqu&apos;un te laisse en &laquo; vu &raquo; pendant
            trois heures, demande-toi : c&apos;est peut-être juste un Taureau qui finit
            son repas.
          </p>
        </section>

        {/* FAQ */}
        <section className="space-y-6" aria-labelledby="faq-messages-signes">
          <H2 id="faq-messages-signes">Questions fréquentes</H2>

          <div className="space-y-4">
            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">
                Mon signe solaire suffit-il pour expliquer ma façon de répondre aux messages ?
              </summary>
              <p className="text-text/85 leading-relaxed">
                Non. Le signe solaire donne une grande tendance, mais l&apos;
                <Link href="/blog/comprendre-signe-astrologique-ascendant-12-exemples" className="underline decoration-white/30 hover:decoration-white/60 transition">
                  ascendant
                </Link>, la position de
                <Link href="/blog/mercurien" className="underline decoration-white/30 hover:decoration-white/60 transition"> Mercure</Link> (la communication) et celle de la
                <Link href="/blog/lunarien" className="underline decoration-white/30 hover:decoration-white/60 transition"> Lune</Link> (les émotions) affinent énormément
                le style relationnel. Un Bélier ascendant Vierge ne répondra pas comme
                un Bélier ascendant Sagittaire.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">
                Pourquoi certains signes mettent autant de temps à répondre ?
              </summary>
              <p className="text-text/85 leading-relaxed">
                Les signes de <strong>Terre</strong> (Taureau, Capricorne) prennent leur
                temps par tempérament : ils répondent quand ils sont disponibles, pas
                avant. Le <strong>Scorpion</strong> observe avant d&apos;agir. Le
                <strong> Verseau</strong>, lui, oublie tout simplement. Ce n&apos;est pas du
                désintérêt, c&apos;est un rapport au temps différent.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">
                Quel signe envoie les vocaux interminables ?
              </summary>
              <p className="text-text/85 leading-relaxed">
                Le <strong>Lion</strong>, sans hésitation. Il préfère raconter que taper.
                Le <strong>Sagittaire</strong> et les <strong>Poissons</strong> sont aussi
                de grands amateurs de vocaux, mais pour des raisons différentes :
                l&apos;un pour l&apos;enthousiasme, l&apos;autre pour l&apos;émotion.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">
                Est-ce que la position de Mercure change vraiment la façon d&apos;écrire ?
              </summary>
              <p className="text-text/85 leading-relaxed">
                Oui, énormément. <strong>Mercure</strong> gouverne la pensée, le langage
                et la communication. Mercure en signe d&apos;Air (Gémeaux, Balance, Verseau)
                donne un style rapide, fluide, parfois dispersé. Mercure en signe
                d&apos;Eau (Cancer, Scorpion, Poissons) donne un style chargé d&apos;émotion,
                allusif, parfois ambigu. C&apos;est souvent Mercure, plus que le Soleil, qui
                décide de ton « style SMS ».
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
