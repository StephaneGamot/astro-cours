import type { ReactNode } from "react";
import Link from "next/link";
import { Pill, TagPillsInline, getGlowFromTags } from "./ui";

export const meta = {
  slug: "comprendre-signe-astrologique-ascendant-144-exemples",
  title: "Comprendre son signe astrologique et son ascendant",
  description:
    "Comprendre la différence entre signe solaire et ascendant à travers 12 exemples concrets, sérieux et pédagogiques.",
  date: "2026-03-08",
  tags: ["bases", "signe", "ascendant", "débutant", "exemples"],
  readingLevel: "débutant" as const,
  cover: "/images/blog/soleil-et-asc.webp",
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

  return (
    <div className="space-y-10">
      {/* HERO */}
      <header className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-7 shadow-soft">
        <div
          className={`pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl ${glow}`}
        />
        <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

        <div className="relative">
          <Kicker>Signe solaire & Ascendant</Kicker>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            Beaucoup de gens connaissent leur <strong>signe astrologique</strong>,
            mais se reconnaissent mal dans les descriptions générales.
            C’est souvent parce qu’ils ne tiennent pas compte de leur{" "}
            <strong>ascendant</strong>.
          </p>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            Cet article t’aide à comprendre la différence entre les deux, puis
            te donne <strong>144 exemples</strong> pour mieux te situer.
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

      <section className="space-y-4">
        <H2>1) Le signe astrologique, ce n’est pas toute la personnalité</H2>

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
        <H2>2) Pourquoi le duo signe + ascendant change tout</H2>

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
  <H2>4) 12 combinaisons Soleil + Ascendant vraiment parlantes</H2>

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
        mais l’ascendant Scorpion apporte une intensité, une densité psychologique et une capacité d’observation qui changent complètement la couleur de l’ensemble.
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
        solaires mais pas superficielles. Le défi principal est de ne pas étouffer l’élan créatif
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
        Ce mélange donne souvent un grand sens de la tenue, du respect, de la responsabilité dans les relations.
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
        Elle montre peu, filtre beaucoup, mais ressent profondément.
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
        <H2>4) Ce qu’il faut retenir après ces 12 exemples</H2>

        <Card title="Le vrai sens de cette lecture">
          <p>
            Le signe solaire montre <strong>la direction intérieure</strong>.
          </p>
          <p>
            L’ascendant montre <strong>la manière d’exister dans le monde visible</strong>.
          </p>
          <p>
            Quand on combine les deux, on sort enfin des descriptions trop générales
            et on entre dans une astrologie plus juste, plus humaine, plus reconnaissable.
          </p>
        </Card>

        <Callout tone="warn" title="Limite importante">
          <p>
            Même avec 12 exemples, on ne remplace pas la lecture complète du thème :
            la Lune, Mercure, Vénus, Mars, les maisons et les aspects modifient fortement l’ensemble.
          </p>
        </Callout>
      </section>

      <section className="rounded-2xl border border-white/10 bg-black/20 p-6">
        <p className="text-sm text-text/60">Suite recommandée</p>

        <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
          <p className="text-text/85">
            Pour aller plus loin :
            <span className="font-semibold text-text/95">
              {" "}Le trio fondamental : Soleil, Lune, Ascendant
            </span>
          </p>

          <Link
            href="/blog"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-text/90 hover:bg-white/10 transition"
          >
            Retour au blog
          </Link>
        </div>
      </section>

      <Link
        href="/blog"
        className="inline-flex rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-text/90 hover:bg-white/10 transition"
      >
        ← Voir tous les articles
      </Link>
    </div>
  );
}