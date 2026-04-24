import type { ReactNode } from "react";
import Link from "next/link";
import { Pill, TagPillsInline, getGlowFromTags } from "./ui";
import { AUTHOR_PERSON, PUBLISHER_ORG, SITE_URL } from "@/lib/seo";

const ARTICLE_URL = `${SITE_URL}/blog/comprendre-signe-astrologique-ascendant-12-exemples`;
const COVER_URL = `${SITE_URL}/images/blog/soleil-et-asc.jpg`;

export const meta = {
  slug: "comprendre-signe-astrologique-ascendant-12-exemples",
  title: "Signe astrologique et ascendant : comprendre",
  description:
    "Comprenez la différence entre signe solaire et ascendant grâce à 12 exemples concrets et pédagogiques. Testez vos connaissances dès maintenant !",
  socialTitle:
    "Signe astrologique et ascendant : comprendre enfin la différence",
  socialDescription:
    "Le signe solaire et l’ascendant ne disent pas la même chose. Découvrez leur différence à travers 12 exemples clairs, concrets et pédagogiques.",
  date: "2026-03-08",
  tags: ["bases", "signe", "ascendant", "débutant", "exemples"],
  readingLevel: "débutant" as const,
  cover: "/images/blog/soleil-et-asc.jpg",
  ogImage: COVER_URL,
  ogImageAlt:
    "Illustration pédagogique sur la différence entre signe astrologique et ascendant",
  type: "article" as const,
  articleSection: "Astrologie",
  readingTime: "6–8 min",
  articleUrl: ARTICLE_URL,
};



function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm text-text/65">
      <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
      {children}
    </span>
  );
}

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
      {children}
    </h2>
  );
}

function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-lg md:text-xl font-semibold tracking-tight leading-tight">
      {children}
    </h3>
  );
}

function Callout({
  tone = "note",
  title,
  children,
}: {
  tone?: "note" | "warn" | "ok";
  title: string;
  children: ReactNode;
}) {
  const box =
    tone === "warn"
      ? "border-yellow-500/30 bg-yellow-500/10"
      : tone === "ok"
      ? "border-emerald-500/30 bg-emerald-500/10"
      : "border-white/10 bg-white/5";

  const emoji = tone === "warn" ? "⚠️" : tone === "ok" ? "✅" : "📌";

  return (
    <div className={`rounded-2xl border p-4 ${box}`}>
      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-text/90">
        <span>{emoji}</span>
        <span>{title}</span>
      </div>
      <div className="text-text/85 leading-relaxed space-y-2">{children}</div>
    </div>
  );
}

function Card({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-white/10 bg-black/20 p-6 shadow-soft">
      <div>
        <H3>{title}</H3>
        {subtitle ? <p className="mt-1 text-sm text-text/60">{subtitle}</p> : null}
      </div>
      <div className="mt-4 space-y-3 text-text/85 leading-relaxed">{children}</div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-xs text-text/60">{label}</p>
      <p className="mt-1 font-semibold text-text/90">{value}</p>
    </div>
  );
}




function PortraitCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-white/10 bg-black/20 p-6 shadow-soft">
      <h3 className="text-lg md:text-xl font-semibold tracking-tight leading-tight">
        {title}
      </h3>
      <div className="mt-4 space-y-3 text-text/85 leading-relaxed">
        {children}
      </div>
    </section>
  );
}
export default function Post() {
  const glow = getGlowFromTags(meta.tags);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: meta.title,
        description: meta.description,
        image: COVER_URL,
        datePublished: meta.date,
        dateModified: meta.date,
        url: ARTICLE_URL,
        mainEntityOfPage: { "@type": "WebPage", "@id": ARTICLE_URL },
        author: AUTHOR_PERSON,
        publisher: PUBLISHER_ORG,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: meta.title, item: ARTICLE_URL },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Quelle est la différence entre signe astrologique et ascendant ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Le signe solaire décrit l’identité profonde, ce que l’on cherche à devenir. L’ascendant décrit la manière dont on se présente au monde, le style visible et le comportement spontané.",
            },
          },
          {
            "@type": "Question",
            name: "Pourquoi deux personnes du même signe peuvent sembler très différentes ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Parce que l’ascendant modifie la façon d’entrer dans le monde. Un Cancer ascendant Bélier paraîtra plus direct, tandis qu’un Cancer ascendant Vierge semblera plus discret. Le cœur peut être similaire, mais l’apparence change.",
            },
          },
          {
            "@type": "Question",
            name: "Comment lire la combinaison Soleil + Ascendant ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Le Soleil répond à « qui suis-je profondément ? » et l’ascendant répond à « comment je me présente et réagis spontanément ? ». Combiner les deux donne une lecture plus juste que le signe seul.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <div className="space-y-10">
      {/* HERO */}
      <header className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-7 shadow-soft">
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl ${glow}`}
        />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

        <div className="relative">
          <Kicker>Signe solaire & Ascendant</Kicker>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            <strong>Signe astrologique et ascendant</strong> : tu connais
            probablement ton signe solaire, mais tu ne te reconnais pas
            toujours dans les descriptions générales. C’est souvent parce
            que tu ne tiens pas compte de ton{" "}
            <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline decoration-white/30 hover:decoration-white/60 transition">ascendant</Link>.
          </p>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            Le problème ? Sans cette pièce, tu lis ton{" "}
            <Link href="/planetes/soleil" className="underline decoration-white/30 hover:decoration-white/60 transition">Soleil</Link>{" "}
            comme si c’était tout le thème. Résultat : tu passes à côté
            de ce qui te rend unique (et reconnaissable).
          </p>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            Ici, tu trouveras la différence entre les deux, puis{" "}
            <strong>12 combinaisons concrètes</strong> pour enfin te situer
            — sans cliché, avec nuance.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <Pill tone="violet">Soleil = identité</Pill>
            <Pill tone="orange">Ascendant = manière d’entrer dans le monde</Pill>
            <Pill tone="emerald">144 combinaisons</Pill>
            <Pill tone="sky">Niveau : {meta.readingLevel}</Pill>
          </div>

          <div className="mt-3">
            <TagPillsInline tags={meta.tags} />
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <Stat label="Signe solaire" value="Centre de la personnalité" />
            <Stat label="Ascendant" value="Style visible / comportement" />
            <Stat label="Objectif" value="Se reconnaître concrètement" />
          </div>
        </div>
      </header>

      {/* DEFINITION BOX — Featured Snippet */}
      <div className="rounded-2xl border border-amber-400/20 bg-amber-400/[0.04] px-6 py-5">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-300/80">Définition</p>
        <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
          Le <strong>signe astrologique</strong> (ou signe solaire) correspond à la position du Soleil à la naissance, tandis que l&apos;<strong>ascendant</strong> reflète le signe qui se levait à l&apos;horizon au moment exact de la naissance. Ensemble, ils forment le duo fondamental de toute interprétation du <Link href="/blog/qu-est-ce-qu-un-theme-astral">thème natal</Link>.
        </p>
      </div>

      {/* APP INTRO */}
      <p className="text-lg leading-relaxed text-text/85">
        Vous êtes Lion mais vous ne vous reconnaissez absolument pas dans les descriptions de votre <strong>signe astrologique</strong> ? C&apos;est probablement parce que votre <strong>ascendant</strong> raconte une toute autre histoire. Cette confusion touche 90 % des débutants en astrologie. Grâce à 12 combinaisons Soleil + Ascendant concrètes, vous comprendrez enfin pourquoi ces deux éléments changent tout.
      </p>

      <section className="space-y-4">
        <H2>1) Signe astrologique : pourquoi il ne décrit pas toute votre personnalité</H2>

        <Card title="Le Soleil n’est qu’une partie du thème">
          <p>
            Le <strong>signe solaire</strong> montre l’identité profonde,
            la manière d’exister au centre, ce que l’on cherche à devenir.
          </p>
          <p>
            Mais dans la vie réelle, les autres ne perçoivent pas d’abord ton Soleil :
            ils rencontrent souvent ton <strong>ascendant</strong>.
          </p>
          <p>
            C’est pourquoi deux personnes du même signe peuvent sembler très différentes.
          </p>
        </Card>

        <Callout title="À retenir">
          Le signe solaire décrit le <strong>centre</strong>.  
          L’ascendant décrit la <strong>porte d’entrée</strong>.
        </Callout>
      </section>

      <section className="space-y-4">
        <H2>2) Signe solaire et ascendant : quelle est la vraie différence ?</H2>

        <Card title="La combinaison qui rend la lecture vivante">
          <p>
            Un <strong>Cancer Soleil</strong> avec <strong>ascendant Bélier</strong>
            n’abordera pas le monde comme un <strong>Cancer Soleil</strong> avec
            <strong> ascendant Vierge</strong>.
          </p>
          <p>
            Le premier pourra paraître plus direct, plus combatif, plus tranchant.
            Le second semblera souvent plus discret, plus attentif, plus mesuré.
          </p>
          <p>
            Le cœur peut être similaire, mais la manière d’agir et de se montrer change beaucoup.
          </p>
        </Card>

        <Callout tone="ok" title="Bonne méthode de lecture">
          Lis toujours ainsi :
          <br />
          <strong>Qui je suis profondément ?</strong> → Soleil  
          <br />
          <strong>Comment je me présente et réagis spontanément ?</strong> → Ascendant
        </Callout>
      </section>

     <section className="space-y-4">
  <H2>3) 12 exemples concrets de combinaisons Soleil + Ascendant</H2>

  <div className="grid gap-6 lg:grid-cols-2">
    <PortraitCard title="Bélier Soleil — Ascendant Cancer">
      <p>
        Au premier regard, cette personne ne donne pas toujours l’image d’un Bélier pur.
        Elle peut sembler plus sensible, plus prudente, plus protectrice que franchement combative.
        Pourtant, à l’intérieur, il existe bien une volonté bélier : besoin d’avancer, de trancher, de ne pas rester passive.
      </p>
      <p>
        Le contraste vient du fait que le Soleil en Bélier veut agir vite,
        tandis que l’ascendant Cancer filtre tout à travers l’émotion et le besoin de sécurité.
        Résultat : on a souvent quelqu’un qui peut paraître doux ou réservé au début,
        mais qui devient étonnamment ferme lorsqu’il s’agit de défendre ses proches, son espace ou ce qui lui tient à cœur.
      </p>
      <p>
        La force de cette combinaison réside dans une alliance rare entre instinct de protection et capacité d’action.
        Le défi, lui, consiste à ne pas alterner entre retenue émotionnelle et réactions brusques.
      </p>
    </PortraitCard>

    <PortraitCard title="Taureau Soleil — Ascendant Lion">
      <p>
        Ici, la stabilité du Taureau rencontre le rayonnement du Lion.
        La personne cherche avant tout du solide, du durable, du concret,
        mais elle le fait avec une présence plus affirmée, plus chaleureuse, parfois plus visible qu’un Taureau classique.
      </p>
      <p>
        Le Taureau solaire veut construire, préserver, s’ancrer.
        L’ascendant Lion, lui, donne une manière de se présenter qui attire davantage l’attention :
        goût du beau, besoin d’être estimé, façon plus noble ou plus expressive d’occuper l’espace.
      </p>
      <p>
        On retrouve souvent quelqu’un de fidèle à ses valeurs, attaché à la qualité, mais qui ne veut pas seulement posséder :
        il veut aussi rayonner à travers ce qu’il construit. Le point de vigilance concerne l’orgueil blessé,
        ou la difficulté à lâcher ce qui nourrit l’image de soi.
      </p>
    </PortraitCard>

    <PortraitCard title="Gémeaux Soleil — Ascendant Scorpion">
      <p>
        Cette combinaison est souvent plus profonde qu’elle n’en a l’air.
        Le Soleil en Gémeaux donne le goût des idées, des échanges, du mouvement mental,
        mais l’ascendant Scorpion apporte une intensité, une densité psychologique et une capacité d’observation qui changent complètement la couleur de l’ensemble (un peu comme une{" "}
        <Link href="/blog/conjonction-melange-des-forces" className="underline decoration-white/30 hover:decoration-white/60 transition">conjonction</Link>).
      </p>
      <p>
        Vu de l’extérieur, la personne peut sembler difficile à lire, sélective, presque secrète.
        Pourtant, à l’intérieur, l’esprit bouge beaucoup, questionne, compare, relie.
        Ce n’est pas un Gémeaux “léger” : c’est un Gémeaux qui veut comprendre ce qu’il y a derrière les mots.
      </p>
      <p>
        La force de cette combinaison réside dans une intelligence psychologique très fine.
        Le défi est de ne pas transformer la curiosité en méfiance ou en sur-analyse.
      </p>
    </PortraitCard>

    <PortraitCard title="Cancer Soleil — Ascendant Bélier">
      <p>
        C’est l’un des mélanges les plus intéressants entre sensibilité et combativité.
        Le Cancer solaire cherche la sécurité, l’attachement, un monde intérieur stable.
        L’ascendant Bélier, lui, donne une manière beaucoup plus directe de réagir et d’entrer dans le monde.
      </p>
      <p>
        La personne peut être très émotive, mais ne pas apparaître fragile.
        Au contraire, elle se montre souvent vive, rapide, capable de prendre des décisions sur le moment.
        En profondeur pourtant, elle est plus sensible qu’elle ne le laisse croire.
      </p>
      <p>
        Cette combinaison donne souvent de très bons protecteurs : des personnes qui ne se battent pas seulement pour elles,
        mais pour ce qu’elles aiment. Le point de vigilance concerne la colère émotionnelle,
        ou les réactions défensives quand une blessure intime est touchée.
      </p>
    </PortraitCard>

    <PortraitCard title="Lion Soleil — Ascendant Vierge">
      <p>
        Le Lion veut rayonner, créer, exprimer sa singularité.
        Mais avec un ascendant Vierge, cette lumière passe par un filtre plus discret,
        plus contrôlé, plus soucieux de bien faire.
      </p>
      <p>
        On n’a pas ici un Lion purement flamboyant.
        On a souvent quelqu’un qui souhaite être reconnu, mais qui ne supporte pas d’être approximatif.
        La personne veut briller, oui, mais sur quelque chose de sérieux, de maîtrisé, de digne.
      </p>
      <p>
        Cela peut donner de très belles personnalités : créatives mais précises, généreuses mais utiles,
        solaires mais pas superficielles. Le défi principal (comme le montre le{" "}
        <Link href="/dictionnaire-astrologique" className="underline decoration-white/30 hover:decoration-white/60 transition">dictionnaire astrologique</Link>) est de ne pas étouffer l’élan créatif
        par excès d’auto-critique ou de perfectionnisme.
      </p>
    </PortraitCard>

    <PortraitCard title="Vierge Soleil — Ascendant Sagittaire">
      <p>
        Voilà une combinaison qui cherche à relier précision et horizon.
        Le Soleil en Vierge veut comprendre, trier, améliorer, rendre utile.
        L’ascendant Sagittaire, lui, apporte plus d’ouverture, de franchise, de mouvement et parfois d’optimisme visible.
      </p>
      <p>
        Au premier contact, la personne paraît souvent plus libre ou plus expansive qu’une Vierge classique.
        Mais en profondeur, elle reste très attentive aux détails, à la cohérence, à la qualité réelle des choses.
        C’est souvent quelqu’un qui a besoin de sens, mais aussi de méthode.
      </p>
      <p>
        Cette combinaison peut donner d’excellents enseignants, accompagnants ou profils pédagogiques :
        des personnes capables d’expliquer clairement des choses complexes.
        Découvre aussi les{" "}
        <Link href="/blog/qualites-defauts-12-signes-zodiaque" className="underline decoration-white/30 hover:decoration-white/60 transition">qualités et défauts des 12 signes</Link>.
        Le point d’attention réside dans la tension entre rigueur et envie d’élargir sans fin.
      </p>
    </PortraitCard>

    <PortraitCard title="Balance Soleil — Ascendant Capricorne">
      <p>
        La Balance solaire cherche l’harmonie, l’équilibre et la justesse relationnelle.
        Avec un ascendant Capricorne, cette quête devient plus retenue, plus structurée, plus maîtrisée.
      </p>
      <p>
        La personne ne donne pas immédiatement une impression de légèreté ou de sociabilité.
        Elle peut sembler sérieuse, sobre, parfois distante.
        Pourtant, au fond, elle a un vrai besoin de lien, d’élégance relationnelle, d’accord juste avec les autres.
      </p>
      <p>
        Ce mélange donne souvent un grand sens de la tenue, du respect, de la responsabilité dans les{" "}
        <Link href="/blog/amour-fidelite-signes-zodiaque" className="underline decoration-white/30 hover:decoration-white/60 transition">relations</Link>.
        Le défi consiste à ne pas trop verrouiller l’expression affective, ni à confondre contrôle et maturité.
      </p>
    </PortraitCard>

    <PortraitCard title="Scorpion Soleil — Ascendant Sagittaire">
      <p>
        Cette combinaison est souvent plus ouverte en apparence qu’on ne l’imagine.
        Le Scorpion solaire vit les choses intensément, cherche la vérité, refuse le superficiel.
        L’ascendant Sagittaire apporte une manière plus mobile, plus franche, parfois plus joyeuse d’entrer dans le monde.
      </p>
      <p>
        On peut avoir face à soi quelqu’un qui sourit facilement, parle avec élan, donne une impression de mouvement,
        alors qu’en profondeur il analyse, ressent et traverse bien plus qu’il ne le montre.
        Cela crée souvent des personnalités très vivantes, mais aussi plus complexes qu’elles n’en ont l’air.
      </p>
      <p>
        La force ici, c’est la capacité à allier profondeur et souffle.
        Le défi consiste à ne pas fuir l’intensité intérieure par besoin d’échappée ou d’espace immédiat.
      </p>
    </PortraitCard>

    <PortraitCard title="Sagittaire Soleil — Ascendant Poissons">
      <p>
        Le Sagittaire veut comprendre, aller plus loin, élargir son horizon.
        L’ascendant Poissons ajoute de la sensibilité, de l’intuition, une forme de porosité au monde.
      </p>
      <p>
        Cela donne souvent des personnes idéalistes, inspirées, attirées par la quête de sens,
        mais moins bruyantes ou démonstratives qu’un Sagittaire plus “pur feu”.
        Elles avancent moins seulement par enthousiasme que par ressenti intérieur.
      </p>
      <p>
        C’est une belle combinaison pour tout ce qui touche à la transmission, à la spiritualité,
        à l’accompagnement ou à la création inspirée. Le point de vigilance concerne le risque
        d’idéaliser le chemin au lieu d’incarner réellement la direction choisie.
      </p>
    </PortraitCard>

    <PortraitCard title="Capricorne Soleil — Ascendant Balance">
      <p>
        Ici, la solidité du Capricorne se teinte d’élégance relationnelle.
        Le Soleil en Capricorne veut construire, tenir, avancer dans le temps.
        L’ascendant Balance donne une manière plus douce, plus diplomate, plus socialement fluide de se présenter.
      </p>
      <p>
        La personne peut sembler plus accessible qu’un Capricorne classique,
        tout en gardant une exigence intérieure forte.
        Elle ne fonce pas n’importe comment : elle mesure, observe, ajuste, puis avance.
      </p>
      <p>
        Cette combinaison donne souvent une belle maturité dans les rapports humains :
        capacité à coopérer sans renoncer à ses objectifs. Le défi se situe dans la tendance à trop lisser les tensions
        ou à sacrifier son axe personnel pour maintenir la paix.
      </p>
    </PortraitCard>

    <PortraitCard title="Verseau Soleil — Ascendant Taureau">
      <p>
        Le Verseau solaire cherche la liberté, l’originalité, une manière de penser en dehors des cadres.
        L’ascendant Taureau, lui, donne une présence beaucoup plus posée, stable, rassurante et incarnée.
      </p>
      <p>
        On a souvent ici quelqu’un qui paraît calme, constant, presque classique au premier abord,
        alors qu’en profondeur l’esprit fonctionne autrement, avec un vrai besoin d’indépendance et de singularité.
        Cela crée un contraste très intéressant entre l’extérieur et l’intérieur.
      </p>
      <p>
        La force de cette combinaison réside dans sa capacité à rendre concret ce qui, chez d’autres Verseaux,
        resterait seulement conceptuel. Le point de vigilance concerne la tension entre besoin de stabilité et besoin de rupture.
      </p>
    </PortraitCard>

    <PortraitCard title="Poissons Soleil — Ascendant Capricorne">
      <p>
        Cette combinaison unit un monde intérieur très sensible à une façade plus structurée.
        Le Soleil en Poissons perçoit les ambiances, ressent subtilement, capte ce qui circule entre les êtres.
        L’ascendant Capricorne, lui, donne une manière plus contrôlée, sérieuse et réservée d’apparaître.
      </p>
      <p>
        La personne peut donc sembler solide, presque distante, alors qu’elle est en réalité très réceptive.
        Elle montre peu, filtre beaucoup, mais ressent profondément (la{" "}
        <Link href="/blog/pleine-lune-nouvelle-lune-cycles-astrologie" className="underline decoration-white/30 hover:decoration-white/60 transition">Pleine Lune</Link>{" "}
        peut amplifier ce ressenti).
        Cela donne souvent des personnalités sensibles qui ont appris tôt à tenir debout.
      </p>
      <p>
        La force de cette combinaison réside dans la capacité à donner une forme à l’intuition,
        à canaliser l’imaginaire, à rendre utile une grande sensibilité.
        Le défi consiste à ne pas trop durcir la protection au point d’étouffer la vie intérieure.
      </p>
    </PortraitCard>
  </div>
</section>
       

      <section className="space-y-4">
        <H2>4) Comment interpréter votre signe et ascendant ensemble</H2>

        <Card title="Le vrai sens de cette lecture">
          <p>
            Le signe solaire montre <strong>la direction intérieure</strong>.
          </p>
          <p>
            L’ascendant montre <strong>la manière d’exister dans le monde visible</strong>.
          </p>
          <p>
            Quand on combine les deux (et qu’on ajoute les{" "}
            <Link href="/transits" className="underline decoration-white/30 hover:decoration-white/60 transition">transits</Link>), on sort enfin des descriptions trop générales
            et on entre dans une astrologie plus juste, plus humaine, plus reconnaissable.
            Pour aller encore plus loin, explore la{" "}
            <Link href="/synastrie" className="underline decoration-white/30 hover:decoration-white/60 transition">synastrie</Link>{" "}
            (compatibilité entre thèmes).
          </p>
        </Card>

        <Callout tone="warn" title="Limite importante">
          <p>
            Même avec 12 exemples, on ne remplace pas la lecture complète du thème :
            la{" "}
            <Link href="/planetes/lune" className="underline decoration-white/30 hover:decoration-white/60 transition">Lune</Link>, Mercure,{" "}
            <Link href="/blog/venus-en-signes-style-amoureux" className="underline decoration-white/30 hover:decoration-white/60 transition">Vénus</Link>,{" "}
            <Link href="/blog/mars-en-signes-desir-libido-action" className="underline decoration-white/30 hover:decoration-white/60 transition">Mars</Link>, les{" "}
            <Link href="/maisons/maison-1" className="underline decoration-white/30 hover:decoration-white/60 transition">maisons</Link> et les{" "}
            <Link href="/aspects" className="underline decoration-white/30 hover:decoration-white/60 transition">aspects</Link> modifient fortement l’ensemble.
          </p>
        </Callout>
      </section>

      <section className="rounded-2xl border border-white/10 bg-black/20 p-6">
        <p className="text-sm text-text/60">Continue ta lecture</p>
        <div className="mt-3 space-y-2 text-text/85">
          <p>
            Découvre{" "}
            <Link href="/blog/venus-en-signes-style-amoureux" className="underline decoration-white/30 hover:decoration-white/60 transition font-semibold text-text/95">Vénus en signes</Link>{" "}
            pour comprendre ton style amoureux, ou{" "}
            <Link href="/blog/quel-type-de-sportif-selon-signe-astrologique" className="underline decoration-white/30 hover:decoration-white/60 transition font-semibold text-text/95">quel sportif selon ton signe</Link>.
          </p>
        </div>
        <div className="mt-4">
          <Link
            href="/blog"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-text/90 hover:bg-white/10 transition"
          >
            ← Tous les articles
          </Link>
        </div>
      </section>

    </div>
    </>
  );
}