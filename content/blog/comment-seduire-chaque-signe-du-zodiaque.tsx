import type { ReactNode } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "./ui";
import { AUTHOR_PERSON, PUBLISHER_ORG, SITE_URL } from "@/lib/seo";

const ARTICLE_SLUG = "comment-seduire-chaque-signe-du-zodiaque";
const ARTICLE_URL = `${SITE_URL}/blog/${ARTICLE_SLUG}`;
const COVER_URL = `${SITE_URL}/images/blog/comment-seduire-chaque-signe-du-zodiaque.webp`;

export const meta = {
  slug: ARTICLE_SLUG,
  title: "Comment séduire chaque signe du zodiaque",
  seoTitle: "Comment séduire chaque signe astrologique — Astro Cours",
  description:
    "Défi pour le Bélier, patience pour le Capricorne, vérité pour le Scorpion… Ce qui fait craquer chaque signe du zodiaque, ce qui le fait fuir, et la phrase qui marche. Guide de séduction signe par signe.",
  date: "2026-07-21",
  tags: ["amour", "séduction", "zodiaque", "signe"],
  readingLevel: "débutant" as const,
  cover: "/images/blog/comment-seduire-chaque-signe-du-zodiaque.webp",
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
        alt: "Comment séduire chaque signe du zodiaque",
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

function SeduireSection({
  id,
  title,
  href,
  imageSrc,
  imageAlt,
  element,
  tagline,
  phrase,
  phraseContext,
  craquer,
  fuir,
  rdv,
}: {
  id: string;
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  element: ZodiacElement;
  tagline: string;
  phrase: ReactNode;
  phraseContext: string;
  craquer: ReactNode;
  fuir: ReactNode;
  rdv: ReactNode;
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
          <p>{phrase}</p>
          <footer className="mt-1 text-[11px] uppercase tracking-widest opacity-60">
            {phraseContext}
          </footer>
        </blockquote>

        <div className="relative mt-5 rounded-xl border border-white/10 bg-black/30 p-4 text-text/85 leading-relaxed">
          <p className="text-xs font-semibold uppercase tracking-widest text-text/55">
            Ce qui le fait craquer
          </p>
          <div className="mt-1 space-y-2">{craquer}</div>
        </div>

        <div className="relative mt-3 rounded-xl border border-white/10 bg-black/30 p-4 text-text/80 leading-relaxed">
          <p className="text-xs font-semibold uppercase tracking-widest text-text/55">
            Ce qui le fait fuir
          </p>
          <div className="mt-1 text-sm space-y-2">{fuir}</div>
        </div>

        <div className="relative mt-3 rounded-xl border border-white/10 bg-black/30 p-4 text-text/80 leading-relaxed">
          <p className="text-xs font-semibold uppercase tracking-widest text-text/55">
            Le rendez-vous qui marque
          </p>
          <div className="mt-1 text-sm space-y-2">{rdv}</div>
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
        name: "Comment séduire quelqu'un grâce à son signe astrologique ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En s'adressant à son élément : les signes de Feu (Bélier, Lion, Sagittaire) se séduisent par le défi et l'enthousiasme, les signes de Terre (Taureau, Vierge, Capricorne) par les sens et la constance, les signes d'Air (Gémeaux, Balance, Verseau) par la conversation et la légèreté, les signes d'Eau (Cancer, Scorpion, Poissons) par l'émotion et la confiance. Le signe indique ce que la personne a besoin de sentir pour s'ouvrir — pas une formule magique.",
        },
      },
      {
        "@type": "Question",
        name: "Quel est le signe le plus difficile à séduire ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Aucun signe n'est impossible à séduire, mais trois prennent leur temps : le Capricorne (il teste la fiabilité avant de s'ouvrir), le Scorpion (il vérifie qu'on ne joue pas avec lui) et le Verseau (il refuse tout scénario imposé). En contrepartie, ce sont souvent les attachements les plus solides une fois la confiance installée.",
        },
      },
      {
        "@type": "Question",
        name: "Faut-il regarder le signe solaire ou la Vénus pour séduire ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Les deux. Le signe solaire donne le tempérament général et la première grille de lecture. Mais en amour, Vénus décrit la façon d'aimer et d'être touché, et Mars la nature du désir. Si la personne ne réagit pas comme son signe solaire le suggère, sa Vénus est probablement dans un autre signe.",
        },
      },
      {
        "@type": "Question",
        name: "La compatibilité astrologique garantit-elle qu'une séduction fonctionne ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Non. L'astrologie offre une grille de lecture des tempéraments, pas une garantie. Deux signes « incompatibles » peuvent vivre une grande histoire, et deux signes « faits l'un pour l'autre » peuvent s'ennuyer. Le signe aide à comprendre comment approcher quelqu'un — la sincérité fait le reste.",
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
            <p className="text-sm text-text/65">Amour &amp; séduction</p>

            <p className="mt-4 max-w-2xl text-text/80 leading-relaxed">
              Tu as tout essayé : le restaurant parfait, le message relu douze
              fois, le silence stratégique de 48 heures. Et rien. Peut-être que
              le problème n&apos;est pas <em>ce que</em> tu fais — mais
              <strong> à qui</strong> tu le fais.
            </p>

            <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
              Parce qu&apos;on ne séduit pas un Scorpion comme on séduit un
              Gémeaux. L&apos;un veut qu&apos;on lui dise la vérité, l&apos;autre
              veut qu&apos;on le fasse rire — et confondre les deux, c&apos;est le
              meilleur moyen de finir en &laquo; c&apos;était sympa &raquo;. Voici
              <strong> comment séduire chaque signe du zodiaque</strong> : ce qui
              le fait craquer, ce qui le fait fuir, et le rendez-vous qui reste
              en mémoire.
            </p>

            <div className="mt-5 flex flex-wrap gap-2" aria-label="Thèmes de l'article">
              <Pill tone="rose">12 modes d&apos;emploi</Pill>
              <Pill tone="violet">Ce qui fait craquer</Pill>
              <Pill tone="orange">Ce qui fait fuir</Pill>
              <Pill tone="sky">Phrases qui marchent</Pill>
            </div>

            <div className="mt-4" aria-label="Mots-clés de l'article">
              <TagPillsInline tags={meta.tags} />
            </div>
          </div>
        </header>

        {/* DEFINITION BOX — Featured Snippet */}
        <div className="rounded-2xl border border-rose-400/20 bg-rose-400/[0.04] px-6 py-5">
          <p className="text-sm font-semibold uppercase tracking-widest text-rose-300/80">
            En bref
          </p>
          <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
            Pour <strong>séduire selon le signe astrologique</strong>, adresse-toi
            à l&apos;élément : les signes de <strong>Feu</strong> se conquièrent
            par le défi et l&apos;élan (Bélier, Lion, Sagittaire), les signes de
            <strong> Terre</strong> par les sens et la constance (Taureau, Vierge,
            Capricorne), les signes d&apos;<strong>Air</strong> par les mots et la
            légèreté (Gémeaux, Balance, Verseau), les signes d&apos;
            <strong>Eau</strong> par l&apos;émotion et la confiance (Cancer,
            Scorpion, Poissons).
          </p>
        </div>

        {/* INTRO */}
        <section className="space-y-3" aria-labelledby="intro">
          <H2 id="intro">Pourquoi la séduction dépend du signe</H2>
          <p className="text-text/85 leading-relaxed">
            Séduire, ce n&apos;est pas réciter des techniques : c&apos;est faire
            sentir à quelqu&apos;un qu&apos;il peut <strong>s&apos;ouvrir sans
            danger</strong>. Or ce dont chacun a besoin pour s&apos;ouvrir dépend
            de son tempérament — donc, en astrologie, de son
            <strong> élément</strong> et de sa planète maîtresse. Le Feu a besoin
            d&apos;intensité, la Terre de preuves, l&apos;Air d&apos;espace,
            l&apos;Eau de confiance.
          </p>
          <p className="text-text/85 leading-relaxed">
            Deux planètes orchestrent tout cela en coulisses :
            <Link href="/blog/venus-en-signes-style-amoureux" className="underline decoration-white/30 hover:decoration-white/60 transition"> Vénus, qui décrit la façon d&apos;aimer</Link>,
            et
            <Link href="/blog/mars-en-signes-desir-libido-action" className="underline decoration-white/30 hover:decoration-white/60 transition"> Mars, qui décrit la nature du désir</Link>.
            Le signe solaire, lui, donne la porte d&apos;entrée : la manière dont
            la personne veut être <em>approchée</em>. C&apos;est cette porte
            d&apos;entrée que nous ouvrons ici, signe par signe.
          </p>
          <p className="text-text/85 leading-relaxed">
            Un conseil avant de commencer : rien de ce qui suit ne remplace la
            sincérité. Ces portraits — volontairement affûtés, comme nos
            <Link href="/blog/qualites-defauts-12-signes-zodiaque" className="underline decoration-white/30 hover:decoration-white/60 transition"> qualités et défauts des 12 signes</Link> —
            t&apos;aident à comprendre l&apos;autre, pas à le manipuler. La
            nuance a son importance.
          </p>
        </section>

        {/* 12 SIGNES */}
        <section className="space-y-6" aria-labelledby="les-12-signes">
          <H2 id="les-12-signes">Séduire chaque signe, mode d&apos;emploi</H2>

          <div className="grid gap-6">
            <SeduireSection
              id="belier"
              title="♈ Bélier — Provoque-le, il adore ça"
              href="/signes/belier"
              imageSrc="/images/zodiaque/belier.webp"
              imageAlt="Symbole astrologique du Bélier"
              element="feu"
              tagline="Se séduit au premier regard ou jamais"
              phrase={<>&laquo; J&apos;ai pas envie d&apos;attendre samedi pour te revoir. <strong>Demain, 19h ?</strong> &raquo;</>}
              phraseContext="À dire à un Bélier · effet immédiat"
              craquer={
                <>
                  <p>
                    Le <strong>Bélier</strong> est gouverné par Mars : il tombe
                    pour l&apos;audace, la franchise et un soupçon de défi. Dis-lui
                    ce que tu penses, ce que tu veux, et ne t&apos;excuse pas
                    d&apos;exister. Il ne cherche pas quelqu&apos;un de
                    confortable — il cherche quelqu&apos;un de <em>vivant</em>.
                  </p>
                  <p>
                    Et laisse-lui un territoire à conquérir : sois sincère sans
                    être acquis. Un Bélier qui n&apos;a plus rien à gagner
                    s&apos;endort ; un Bélier stimulé déplace des montagnes.
                  </p>
                </>
              }
              fuir={
                <>
                  <p>
                    La tiédeur. Les &laquo; on verra &raquo;, les réponses en
                    trois jours, les stratégies d&apos;usure. Si tu joues la
                    montre avec un Bélier, il ne t&apos;attendra pas : il sera
                    déjà ailleurs, et sans regarder en arrière.
                  </p>
                </>
              }
              rdv={
                <>
                  <p>
                    Du mouvement : un match, une randonnée, un karting, un bar
                    debout — n&apos;importe quoi sauf trois heures assis face à
                    face. Le Bélier tombe amoureux en action, pas en entretien
                    d&apos;embauche.
                  </p>
                </>
              }
            />

            <SeduireSection
              id="taureau"
              title="♉ Taureau — Nourris-le, au sens large"
              href="/signes/taureau"
              imageSrc="/images/zodiaque/taureau.webp"
              imageAlt="Symbole astrologique du Taureau"
              element="terre"
              tagline="Lent au démarrage, inoubliable ensuite"
              phrase={<>&laquo; Reste encore un peu. <strong>J&apos;ai fait un dessert.</strong> &raquo;</>}
              phraseContext="À dire à un Taureau · victoire assurée"
              craquer={
                <>
                  <p>
                    Le <strong>Taureau</strong> est le protégé de Vénus : il se
                    séduit par les <strong>cinq sens</strong>. Un bon repas, un
                    parfum, une voix posée, une main qui frôle la sienne sans se
                    presser. Chez lui, le corps décide avant la tête — mais
                    lentement, et sans retour en arrière.
                  </p>
                  <p>
                    L&apos;autre clé : la constance. Sois là quand tu dis que tu
                    seras là. Chaque promesse tenue est une brique ; le Taureau
                    ne tombe pas amoureux d&apos;une personne, il tombe amoureux
                    d&apos;un édifice.
                  </p>
                </>
              }
              fuir={
                <>
                  <p>
                    La précipitation et le chaos. Le presser, changer les plans à
                    la dernière minute, souffler le chaud et le froid : tu
                    n&apos;obtiendras qu&apos;un mur. Et un Taureau muré, ça peut
                    durer des années.
                  </p>
                </>
              }
              rdv={
                <>
                  <p>
                    Un dîner — cuisiné par toi si possible, dans un lieu
                    chaleureux sinon. Ou un marché le matin, une balade en
                    nature, tout ce qui se savoure sans montre. Le luxe du
                    Taureau, c&apos;est le temps.
                  </p>
                </>
              }
            />

            <SeduireSection
              id="gemeaux"
              title="♊ Gémeaux — Fais travailler sa tête"
              href="/signes/gemeaux"
              imageSrc="/images/zodiaque/gemeaux.webp"
              imageAlt="Symbole astrologique des Gémeaux"
              element="air"
              tagline="Tombe amoureux d'une conversation"
              phrase={<>&laquo; J&apos;ai pensé à toi en lisant un truc improbable. <strong>Attends, je te raconte.</strong> &raquo;</>}
              phraseContext="À dire à un Gémeaux · il est déjà curieux"
              craquer={
                <>
                  <p>
                    Le <strong>Gémeaux</strong> appartient à Mercure : sa zone
                    érogène principale, c&apos;est le <strong>cerveau</strong>.
                    Fais-le rire, surprends-le, relance-le, contredis-le avec
                    esprit. Une conversation qui rebondit vaut tous les dîners
                    aux chandelles du monde.
                  </p>
                  <p>
                    Et cultive le mouvement : propose, improvise, change de
                    décor. Le Gémeaux ne fuit pas l&apos;engagement — il fuit la
                    répétition. Tant que tu restes une histoire dont il ne
                    connaît pas la suite, il reste.
                  </p>
                </>
              }
              fuir={
                <>
                  <p>
                    L&apos;ennui et la possessivité. Les silences lourds, les
                    soirées identiques, le &laquo; tu étais où ? &raquo;. Enferme
                    un Gémeaux et il devient un courant d&apos;air.
                  </p>
                </>
              }
              rdv={
                <>
                  <p>
                    Deux endroits dans la même soirée — un début prévu, une
                    suite improvisée. Une expo étrange, un bar caché, un pari
                    stupide en chemin. L&apos;important n&apos;est pas le lieu :
                    c&apos;est qu&apos;il y ait une histoire à raconter après.
                  </p>
                </>
              }
            />

            <SeduireSection
              id="cancer"
              title="♋ Cancer — Ouvre-lui ta porte d'abord"
              href="/signes/cancer"
              imageSrc="/images/zodiaque/cancer.webp"
              imageAlt="Symbole astrologique du Cancer"
              element="eau"
              tagline="Se séduit à la douceur, se perd à la brusquerie"
              phrase={<>&laquo; Ici, c&apos;est mon endroit préféré. <strong>Je n&apos;y amène presque personne.</strong> &raquo;</>}
              phraseContext="À dire à un Cancer · tu viens d'entrer dans le cercle"
              craquer={
                <>
                  <p>
                    Le <strong>Cancer</strong> est l&apos;enfant de la Lune : il a
                    besoin de <strong>sécurité émotionnelle</strong> avant toute
                    chose. Pour le séduire, montre-toi vulnérable en premier.
                    Raconte un vrai souvenir, un vrai doute — pas ton CV. Chaque
                    confidence que tu lui offres est une clé qu&apos;il garde.
                  </p>
                  <p>
                    Sois attentif aux détails qu&apos;il sème : le Cancer teste
                    en silence. Se souvenir qu&apos;il déteste la coriandre vaut
                    dix compliments.
                  </p>
                </>
              }
              fuir={
                <>
                  <p>
                    L&apos;ironie sur ses émotions et l&apos;inconstance. Un
                    &laquo; tu es trop sensible &raquo; peut clore l&apos;histoire
                    avant qu&apos;elle commence. Le Cancer pardonne beaucoup,
                    mais il n&apos;oublie rien — c&apos;est même sa spécialité.
                  </p>
                </>
              }
              rdv={
                <>
                  <p>
                    Un cocon : un petit restaurant familier, une cuisine
                    partagée, un canapé et un film qu&apos;il aime depuis
                    l&apos;enfance. Le Cancer ne veut pas être impressionné — il
                    veut être <em>accueilli</em>.
                  </p>
                </>
              }
            />

            <SeduireSection
              id="lion"
              title="♌ Lion — Admire-le, mais pour de vrai"
              href="/signes/lion"
              imageSrc="/images/zodiaque/lion.webp"
              imageAlt="Symbole astrologique du Lion"
              element="feu"
              tagline="Voit clair dans la flatterie, fond devant l'admiration sincère"
              phrase={<>&laquo; Tout le monde t&apos;a remarqué en entrant. <strong>Moi, je n&apos;ai vu que toi.</strong> &raquo;</>}
              phraseContext="À dire à un Lion · le soleil vient de se lever"
              craquer={
                <>
                  <p>
                    Le <strong>Lion</strong> est gouverné par le Soleil : il a
                    besoin de briller — et surtout d&apos;être <strong>vu</strong>.
                    Mais attention : la flatterie de série ne marche pas.
                    Remarque ce dont il est vraiment fier, ce qu&apos;il a
                    construit, ce qui lui a coûté. L&apos;admiration précise est
                    sa langue maternelle.
                  </p>
                  <p>
                    Et aie de l&apos;allure toi aussi : le Lion veut un
                    partenaire dont il est fier, pas un spectateur. Brille à ses
                    côtés — jamais à sa place.
                  </p>
                </>
              }
              fuir={
                <>
                  <p>
                    L&apos;indifférence et la mesquinerie. Le regarder de haut,
                    compter les points, minimiser ses réussites devant les
                    autres : le rideau tombe, et il ne se relève pas. Un Lion
                    humilié ne se venge pas — il t&apos;efface.
                  </p>
                </>
              }
              rdv={
                <>
                  <p>
                    Un endroit avec un peu de théâtre : un beau restaurant, un
                    concert, une terrasse au coucher du soleil. Mets-toi sur ton
                    trente-et-un — pour lui, l&apos;effort vestimentaire est une
                    déclaration.
                  </p>
                </>
              }
            />

            <SeduireSection
              id="vierge"
              title="♍ Vierge — Séduis-la par les détails"
              href="/signes/vierge"
              imageSrc="/images/zodiaque/vierge.webp"
              imageAlt="Symbole astrologique de la Vierge"
              element="terre"
              tagline="Ne croit pas les mots, croit les preuves"
              phrase={<>&laquo; J&apos;ai réservé à 20h, c&apos;est calme, et je t&apos;ai gardé <strong>la place côté mur — tu préfères</strong>. &raquo;</>}
              phraseContext="À dire à une Vierge · elle a remarqué que tu as remarqué"
              craquer={
                <>
                  <p>
                    La <strong>Vierge</strong>, gouvernée par Mercure, ne se
                    laisse pas éblouir : elle <strong>observe</strong>. Ce qui la
                    touche, ce sont les détails qui prouvent que tu fais
                    attention — l&apos;heure respectée, la préférence retenue, le
                    message d&apos;après-rendez-vous bien tourné. Chez elle,
                    l&apos;amour est une somme de petites choses exactes.
                  </p>
                  <p>
                    Parle-lui vraiment : d&apos;idées, de projets, de ce qui
                    t&apos;anime. Sous ses airs réservés, la Vierge est
                    délicieusement drôle — encore faut-il mériter son second
                    degré.
                  </p>
                </>
              }
              fuir={
                <>
                  <p>
                    Les grandes déclarations vides et le désordre. Promettre la
                    lune au premier soir, arriver en retard, être approximatif :
                    elle ne dira rien, mais la case &laquo; non &raquo; est déjà
                    cochée. Au crayon, certes. Mais cochée.
                  </p>
                </>
              }
              rdv={
                <>
                  <p>
                    Un lieu calme où l&apos;on s&apos;entend parler, choisi avec
                    soin, sans démesure. La Vierge ne juge pas le prix — elle
                    juge la <em>pertinence</em>. Un endroit qui lui correspond
                    vaut tous les palaces.
                  </p>
                </>
              }
            />

            <SeduireSection
              id="balance"
              title="♎ Balance — Charme-la, elle te charmera"
              href="/signes/balance"
              imageSrc="/images/zodiaque/balance.webp"
              imageAlt="Symbole astrologique de la Balance"
              element="air"
              tagline="Tombe pour l'élégance — celle des gestes et des mots"
              phrase={<>&laquo; J&apos;adore ta façon de voir <strong>les deux côtés de chaque chose</strong>. Mais là, choisis-moi. &raquo;</>}
              phraseContext="À dire à une Balance · sourire garanti, cœur qui suit"
              craquer={
                <>
                  <p>
                    La <strong>Balance</strong> est l&apos;autre protégée de
                    Vénus : elle se séduit par la <strong>beauté</strong> — des
                    lieux, des manières, des conversations. Sois élégant au sens
                    large : attentionné, courtois, drôle sans cruauté. Elle
                    remarque tout ce qui est harmonieux, et tout ce qui ne
                    l&apos;est pas.
                  </p>
                  <p>
                    Et joue le jeu du charme à deux : la Balance adore l&apos;art
                    de la séduction lui-même, ce tennis délicat de regards et de
                    sous-entendus. Ne brûle pas les étapes — c&apos;est justement
                    la danse qu&apos;elle aime.
                  </p>
                </>
              }
              fuir={
                <>
                  <p>
                    La vulgarité et la pression. Les éclats de voix, les
                    ultimatums, le &laquo; décide-toi &raquo;. La Balance a
                    besoin de temps pour choisir — bouscule-la et elle choisira
                    la sortie, avec le sourire, mais définitivement.
                  </p>
                </>
              }
              rdv={
                <>
                  <p>
                    Du beau : une expo, un rooftop, un restaurant à la lumière
                    douce. Soigne l&apos;esthétique de tout — y compris la
                    tienne. Pour une Balance, un cadre raté est un message raté.
                  </p>
                </>
              }
            />

            <SeduireSection
              id="scorpion"
              title="♏ Scorpion — Ne joue pas. Jamais."
              href="/signes/scorpion"
              imageSrc="/images/zodiaque/scorpion.webp"
              imageAlt="Symbole astrologique du Scorpion"
              element="eau"
              tagline="Détecte le mensonge avant que tu l'aies fini"
              phrase={<>&laquo; Je ne joue pas. <strong>Si je suis là, c&apos;est que j&apos;ai envie d&apos;y être.</strong> &raquo;</>}
              phraseContext="À dire à un Scorpion · il vient de baisser la garde d'un millimètre"
              craquer={
                <>
                  <p>
                    Le <strong>Scorpion</strong>, gouverné par Pluton, ne veut
                    pas d&apos;un flirt : il veut du <strong>vrai</strong>. Ce qui
                    le fait craquer, c&apos;est l&apos;intensité tranquille —
                    quelqu&apos;un qui soutient son regard, répond avec
                    franchise, et n&apos;a pas peur des sujets profonds dès le
                    premier soir.
                  </p>
                  <p>
                    Garde aussi ta part de mystère : le Scorpion aime déchiffrer.
                    Livre-toi par couches, sincèrement mais progressivement.
                    L&apos;eau profonde attire l&apos;eau profonde.
                  </p>
                </>
              }
              fuir={
                <>
                  <p>
                    Les jeux et les demi-vérités. Flirter avec d&apos;autres pour
                    le rendre jaloux, mentir sur un détail insignifiant : il le
                    saura — il sait toujours — et la confiance ne reviendra
                    pas. Avec un Scorpion, on n&apos;a qu&apos;une seule première
                    chance.
                  </p>
                </>
              }
              rdv={
                <>
                  <p>
                    Un tête-à-tête, lumière basse, sans foule et sans témoin. Le
                    Scorpion ne veut pas te voir socialiser — il veut te voir
                    <em> toi</em>. Une vraie conversation à 1h du matin vaut dix
                    sorties brillantes.
                  </p>
                </>
              }
            />

            <SeduireSection
              id="sagittaire"
              title="♐ Sagittaire — Propose-lui un horizon"
              href="/signes/sagittaire"
              imageSrc="/images/zodiaque/sagittaire.webp"
              imageAlt="Symbole astrologique du Sagittaire"
              element="feu"
              tagline="S'attache à qui ne cherche pas à l'attacher"
              phrase={<>&laquo; J&apos;ai deux billets. <strong>Je ne te dis pas pour où.</strong> Tu viens ? &raquo;</>}
              phraseContext="À dire à un Sagittaire · il est déjà en train de faire son sac"
              craquer={
                <>
                  <p>
                    Le <strong>Sagittaire</strong>, fils de Jupiter, tombe pour
                    l&apos;<strong>aventure</strong> et pour ceux qui en sont
                    une. Fais-le rire, emmène-le ailleurs, parle-lui de ce que tu
                    veux vivre plutôt que de ce que tu veux posséder. Il ne
                    cherche pas une moitié — il cherche un compagnon de route.
                  </p>
                  <p>
                    Et surtout : aie ta propre vie. Tes passions, tes voyages,
                    tes projets. Le Sagittaire s&apos;attache précisément à ceux
                    qui n&apos;ont pas besoin de lui pour être heureux.
                  </p>
                </>
              }
              fuir={
                <>
                  <p>
                    La jalousie et les plans quinquennaux. Le &laquo; on en est
                    où tous les deux ? &raquo; à la troisième semaine, les
                    reproches sur sa liberté : tu verras un nuage de poussière
                    et une silhouette au loin.
                  </p>
                </>
              }
              rdv={
                <>
                  <p>
                    Dehors, ailleurs, debout : une escapade surprise, un
                    festival, une cuisine du bout du monde. Si le rendez-vous
                    ressemble à un mini-voyage, c&apos;est gagné.
                  </p>
                </>
              }
            />

            <SeduireSection
              id="capricorne"
              title="♑ Capricorne — Prouve, ne promets pas"
              href="/signes/capricorne"
              imageSrc="/images/zodiaque/capricorne.webp"
              imageAlt="Symbole astrologique du Capricorne"
              element="terre"
              tagline="Le plus lent à s'ouvrir, le plus solide ensuite"
              phrase={<>&laquo; Prends ton temps. <strong>Je ne suis pas pressé, je suis sérieux.</strong> &raquo;</>}
              phraseContext="À dire à un Capricorne · quelque chose vient de se débloquer"
              craquer={
                <>
                  <p>
                    Le <strong>Capricorne</strong>, gouverné par Saturne, teste
                    avant d&apos;aimer. Ce qui le séduit : la
                    <strong> fiabilité démontrée</strong>. Être à l&apos;heure,
                    faire ce qu&apos;on a dit, rester constant sur trois
                    semaines — c&apos;est spectaculairement banal, et c&apos;est
                    exactement ce qu&apos;il n&apos;a presque jamais vu.
                  </p>
                  <p>
                    Découvre aussi son humour : sec, pince-sans-rire, réservé à
                    ceux qui le méritent. Le jour où un Capricorne fait des
                    blagues avec toi, sache-le : c&apos;est une déclaration.
                  </p>
                </>
              }
              fuir={
                <>
                  <p>
                    Le drama et l&apos;inconséquence. Les crises, les tests
                    émotionnels, les changements de programme permanents. Le
                    Capricorne n&apos;affronte pas le chaos : il s&apos;en
                    retire, poliment, et réinvestit son temps ailleurs.
                  </p>
                </>
              }
              rdv={
                <>
                  <p>
                    Sobre et de qualité : un bon restaurant sans esbroufe, une
                    marche avec une vraie conversation. Arrive à l&apos;heure.
                    Pose des questions sur ce qu&apos;il construit. Tu verras la
                    montagne fondre — lentement, mais pour de bon.
                  </p>
                </>
              }
            />

            <SeduireSection
              id="verseau"
              title="♒ Verseau — Deviens son ami, puis son mystère"
              href="/signes/verseau"
              imageSrc="/images/zodiaque/verseau.webp"
              imageAlt="Symbole astrologique du Verseau"
              element="air"
              tagline="Fuit le romantisme formaté, tombe pour l'inattendu"
              phrase={<>&laquo; Je ne t&apos;ai jamais entendu dire un truc banal. <strong>C&apos;est louche.</strong> &raquo;</>}
              phraseContext="À dire à un Verseau · tu l'intrigues, c'est exactement le but"
              craquer={
                <>
                  <p>
                    Le <strong>Verseau</strong>, gouverné par Uranus, ne suit pas
                    le manuel — le tien non plus, d&apos;ailleurs, jette-le. Il
                    se séduit par l&apos;<strong>esprit</strong> et
                    l&apos;originalité : des idées inattendues, des causes qui te
                    tiennent, une conversation qui part à 23h et atterrit à 3h du
                    matin sans qu&apos;on ait vu le temps passer.
                  </p>
                  <p>
                    Et commence par l&apos;amitié — vraiment. Le Verseau tombe
                    amoureux de son meilleur ami une fois sur deux. Sa méfiance
                    ne porte pas sur l&apos;amour : elle porte sur les rôles
                    imposés.
                  </p>
                </>
              }
              fuir={
                <>
                  <p>
                    La jalousie et les conventions. Le dîner aux chandelles
                    obligatoire, les étapes à valider, le &laquo; c&apos;est
                    comme ça qu&apos;on fait &raquo;. Impose-lui un scénario et
                    il improvisera une sortie de secours.
                  </p>
                </>
              }
              rdv={
                <>
                  <p>
                    Insolite : un lieu bizarre, une conférence improbable, une
                    nuit à refaire le monde sur un toit. Le Verseau ne se
                    souvient pas des restaurants — il se souvient des
                    conversations.
                  </p>
                </>
              }
            />

            <SeduireSection
              id="poissons"
              title="♓ Poissons — Rêve avec lui, pas à sa place"
              href="/signes/poissons"
              imageSrc="/images/zodiaque/poissons.webp"
              imageAlt="Symbole astrologique des Poissons"
              element="eau"
              tagline="Se séduit à la tendresse et se perd au cynisme"
              phrase={<>&laquo; J&apos;ai pensé à toi en entendant cette chanson. <strong>Écoute-la et dis-moi où elle t&apos;emmène.</strong> &raquo;</>}
              phraseContext="À dire à un Poissons · il est déjà en train de rêver de toi"
              craquer={
                <>
                  <p>
                    Les <strong>Poissons</strong>, enfants de Neptune, se
                    séduisent par la <strong>poésie du quotidien</strong> : une
                    chanson partagée, un message qui tombe juste, une écoute
                    vraie. Ils ne veulent pas être conquis — ils veulent être
                    <em> devinés</em>. Sois attentif à ce qu&apos;ils ne disent
                    pas : c&apos;est là qu&apos;ils habitent.
                  </p>
                  <p>
                    Offre-leur de la douceur sans mièvrerie, et un peu de
                    magie : les Poissons croient encore que l&apos;amour est une
                    histoire extraordinaire. Avec eux, ça peut le devenir.
                  </p>
                </>
              }
              fuir={
                <>
                  <p>
                    Le cynisme et la brutalité pragmatique. Se moquer de leurs
                    rêves, réduire leurs intuitions à des &laquo; trucs
                    bizarres &raquo;, tout ramener à la logique. Le Poissons ne
                    claquera pas la porte — il s&apos;évaporera.
                  </p>
                </>
              }
              rdv={
                <>
                  <p>
                    Près de l&apos;eau si possible, en musique sûrement : un
                    concert intimiste, une promenade au bord d&apos;un fleuve, un
                    ciné d&apos;auteur. Laisse une part de flou au programme —
                    c&apos;est dans le flou que les Poissons nagent le mieux.
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
            Derrière les 12 approches, quatre <strong>langages de
            séduction</strong> — un par élément.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-red-300/80">
                Feu · Bélier · Lion · Sagittaire
              </p>
              <p className="mt-2 text-text/85 leading-relaxed">
                Se séduisent par l&apos;<strong>élan</strong> : le défi
                (Bélier), l&apos;admiration (Lion), l&apos;aventure
                (Sagittaire). Sois direct, vivant, enthousiaste. Le Feu ne
                s&apos;éteint que d&apos;une façon : l&apos;ennui.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5">
              <p className="mt-0 text-sm font-semibold uppercase tracking-widest text-emerald-300/80">
                Terre · Taureau · Vierge · Capricorne
              </p>
              <p className="mt-2 text-text/85 leading-relaxed">
                Se séduisent par les <strong>preuves</strong> : les sens
                (Taureau), les détails (Vierge), la fiabilité (Capricorne).
                Prends ton temps, tiens tes promesses. La Terre n&apos;écoute
                pas ce que tu dis — elle regarde ce que tu fais.
              </p>
            </div>
            <div className="rounded-2xl border border-sky-500/30 bg-sky-500/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-sky-300/80">
                Air · Gémeaux · Balance · Verseau
              </p>
              <p className="mt-2 text-text/85 leading-relaxed">
                Se séduisent par les <strong>mots</strong> : l&apos;humour
                (Gémeaux), le charme (Balance), les idées (Verseau). Converse,
                surprends, laisse de l&apos;espace. L&apos;Air s&apos;attache à
                qui ne cherche pas à le retenir.
              </p>
            </div>
            <div className="rounded-2xl border border-violet-500/30 bg-violet-500/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-violet-300/80">
                Eau · Cancer · Scorpion · Poissons
              </p>
              <p className="mt-2 text-text/85 leading-relaxed">
                Se séduisent par la <strong>confiance</strong> : la sécurité
                (Cancer), la vérité (Scorpion), la tendresse (Poissons).
                Ouvre-toi en premier, sois patient, ne joue jamais. L&apos;Eau
                donne tout — mais seulement à qui a prouvé qu&apos;il ne
                fuirait pas.
              </p>
            </div>
          </div>
        </section>

        {/* AU-DELÀ DU SIGNE SOLAIRE */}
        <section className="space-y-3" aria-labelledby="au-dela-du-signe">
          <H2 id="au-dela-du-signe">Si ça ne marche pas : regarde sa Vénus</H2>
          <p className="text-text/85 leading-relaxed">
            Tu appliques tout à la lettre et la personne ne réagit pas comme
            prévu ? Normal : le signe solaire n&apos;est que la porte
            d&apos;entrée. En amour, c&apos;est
            <Link href="/blog/venus-en-signes-style-amoureux" className="underline decoration-white/30 hover:decoration-white/60 transition"> Vénus qui décrit la façon d&apos;aimer</Link> et
            <Link href="/blog/mars-en-signes-desir-libido-action" className="underline decoration-white/30 hover:decoration-white/60 transition"> Mars qui décrit le désir</Link> —
            un Capricorne avec une Vénus en Poissons se séduit bien plus à la
            tendresse qu&apos;aux preuves. L&apos;
            <Link href="/blog/comprendre-signe-astrologique-ascendant-12-exemples" className="underline decoration-white/30 hover:decoration-white/60 transition">ascendant</Link> colore
            aussi la première impression. Pour la photo complète, il faut un
            <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline decoration-white/30 hover:decoration-white/60 transition"> thème astral</Link>.
          </p>
          <p className="text-text/85 leading-relaxed">
            Et une fois la séduction réussie, deux questions arrivent vite :
            est-ce que nos signes s&apos;entendent — réponse dans nos
            <Link href="/compatibilite" className="underline decoration-white/30 hover:decoration-white/60 transition"> compatibilités amoureuses entre signes</Link> —
            et est-ce que ça va durer — réponse dans notre article sur
            <Link href="/blog/amour-fidelite-signes-zodiaque" className="underline decoration-white/30 hover:decoration-white/60 transition"> l&apos;amour et la fidélité selon les signes</Link>.
          </p>
        </section>

        {/* CONCLUSION */}
        <section className="space-y-3" aria-labelledby="conclusion">
          <H2 id="conclusion">Séduire, c&apos;est traduire</H2>
          <p className="text-text/85 leading-relaxed">
            Au fond, ce guide dit une seule chose : la séduction n&apos;est pas
            une performance, c&apos;est une <strong>traduction</strong>. Le même
            &laquo; je tiens à toi &raquo; se dit en défi pour un Bélier, en
            dessert pour un Taureau, en vérité pour un Scorpion, en chanson pour
            un Poissons. Rater une séduction, ce n&apos;est souvent que parler
            la mauvaise langue à la bonne personne.
          </p>
          <p className="text-text/85 leading-relaxed">
            Alors apprends sa langue — mais garde ta voix. Parce que le moment
            où l&apos;autre craque vraiment, tous signes confondus, c&apos;est
            celui où il comprend que tu ne joues pas un rôle. Même le Gémeaux.
            Surtout le Scorpion. Et si tu veux savoir ce qu&apos;il te cachera
            ensuite, on a aussi répertorié
            <Link href="/blog/mensonge-prefere-chaque-signe-zodiaque" className="underline decoration-white/30 hover:decoration-white/60 transition"> le mensonge préféré de chaque signe</Link>.
          </p>
        </section>

        {/* FAQ */}
        <section className="space-y-6" aria-labelledby="faq-seduire-signes">
          <H2 id="faq-seduire-signes">Questions fréquentes</H2>

          <div className="space-y-4">
            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">
                Comment séduire quelqu&apos;un grâce à son signe astrologique ?
              </summary>
              <p className="text-text/85 leading-relaxed">
                En t&apos;adressant à son <strong>élément</strong> : les signes de
                Feu se séduisent par le défi et l&apos;enthousiasme, les signes
                de Terre par les sens et la constance, les signes d&apos;Air par
                la conversation et la légèreté, les signes d&apos;Eau par
                l&apos;émotion et la confiance. Le signe indique ce que la
                personne a besoin de <em>sentir</em> pour s&apos;ouvrir — pas une
                formule magique.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">
                Quel est le signe le plus difficile à séduire ?
              </summary>
              <p className="text-text/85 leading-relaxed">
                Aucun signe n&apos;est impossible à séduire, mais trois prennent
                leur temps : le <strong>Capricorne</strong> (il teste la
                fiabilité avant de s&apos;ouvrir), le <strong>Scorpion</strong>
                (il vérifie qu&apos;on ne joue pas avec lui) et le
                <strong> Verseau</strong> (il refuse tout scénario imposé). En
                contrepartie, ce sont souvent les attachements les plus solides
                une fois la confiance installée.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">
                Faut-il regarder le signe solaire ou la Vénus pour séduire ?
              </summary>
              <p className="text-text/85 leading-relaxed">
                Les deux. Le signe solaire donne le tempérament général et la
                première grille de lecture. Mais en amour,
                <Link href="/blog/venus-en-signes-style-amoureux" className="underline decoration-white/30 hover:decoration-white/60 transition"> Vénus décrit la façon d&apos;aimer</Link> et
                <Link href="/blog/mars-en-signes-desir-libido-action" className="underline decoration-white/30 hover:decoration-white/60 transition"> Mars la nature du désir</Link>.
                Si la personne ne réagit pas comme son signe solaire le suggère,
                sa Vénus est probablement dans un autre signe.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">
                La compatibilité astrologique garantit-elle qu&apos;une séduction
                fonctionne ?
              </summary>
              <p className="text-text/85 leading-relaxed">
                Non. L&apos;astrologie offre une grille de lecture des
                tempéraments, pas une garantie. Deux signes
                &laquo; incompatibles &raquo; peuvent vivre une grande histoire,
                et deux signes &laquo; faits l&apos;un pour l&apos;autre &raquo;
                peuvent s&apos;ennuyer. Consulte nos
                <Link href="/compatibilite" className="underline decoration-white/30 hover:decoration-white/60 transition"> compatibilités entre signes</Link> comme
                un éclairage — la sincérité fait le reste.
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
