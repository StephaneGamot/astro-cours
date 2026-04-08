import type { ReactNode } from "react";
import Link from "next/link";
import { Pill, TagPillsInline, getGlowFromTags } from "./ui";
import Image from "next/image";
import UranienImage from "@/public/images/blog/uranien.webp";
import Uranien2Image from "@/public/images/blog/uranien2.webp";

export const meta = {
  slug: "uranien",
  title:
    "Uranien : l'Éveilleur, le Rebelle et le Visionnaire",
  description:
    "Portrait astrologique de l’Uranien : indépendance, originalité, rébellion, vocation, rupture, destin, Uranus affligé, pionnière et morphopsychologie uranienne dans un thème astral.",
  date: "2026-03-31",
  tags: [
    "Uranus",
    "uranien",
    "portrait astrologique",
    "originalité",
    "indépendance",
    "thème astral",
    "psychologie astrologique",
    "vocation",
    "révolution",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/uranien.webp",
};

function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-violet-300">
      <span
        className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-300"
        aria-hidden="true"
      />
      {children}
    </span>
  );
}

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-6 flex items-center font-serif text-3xl font-light text-white md:text-4xl">
      <span
        className="mr-4 block h-px w-8 bg-gradient-to-r from-violet-400/60 to-transparent"
        aria-hidden="true"
      />
      {children}
    </h2>
  );
}

function H3({ children }: { children: ReactNode }) {
  return <h3 className="font-serif text-2xl font-medium text-white/90">{children}</h3>;
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
  const styles = {
    warn: {
      box: "border-amber-500/30 bg-amber-500/10 shadow-[0_0_30px_rgba(245,158,11,0.05)]",
      icon: "text-amber-400",
      svg: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
    },
    ok: {
      box: "border-emerald-500/30 bg-emerald-500/10 shadow-[0_0_30px_rgba(16,185,129,0.05)]",
      icon: "text-emerald-400",
      svg: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    note: {
      box: "border-violet-500/30 bg-violet-500/10 shadow-[0_0_30px_rgba(167,139,250,0.05)]",
      icon: "text-violet-300",
      svg: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  };

  const current = styles[tone];

  return (
    <aside
      aria-label={title}
      className={`relative overflow-hidden rounded-2xl border p-6 backdrop-blur-md ${current.box}`}
    >
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-current opacity-30 to-transparent" />
      <div className={`mb-3 flex items-center gap-3 font-serif text-lg font-medium ${current.icon}`}>
        {current.svg}
        <span>{title}</span>
      </div>
      <div className="space-y-3 text-sm leading-relaxed text-white/80 md:text-base">
        {children}
      </div>
    </aside>
  );
}

function Card({
  title,
  children,
  subtitle,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-md transition-colors hover:bg-white/[0.05]">
      <div>
        <H3>{title}</H3>
        {subtitle && <p className="mt-2 text-sm text-white/50">{subtitle}</p>}
      </div>
      <div className="mt-5 space-y-4 text-sm leading-relaxed text-white/80 md:text-base">
        {children}
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-sm transition-all hover:border-violet-300/30">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-300/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <p className="text-xs uppercase tracking-widest text-white/50">{label}</p>
      <p className="mt-2 font-serif text-xl text-white/90">{value}</p>
    </div>
  );
}

function Divider() {
  return <hr className="my-12 border-t border-white/10" aria-hidden="true" />;
}

function TableRow({
  title,
  effect,
  reading,
}: {
  title: string;
  effect: string;
  reading: string;
}) {
  return (
    <div className="group grid grid-cols-1 border-b border-white/10 transition-colors hover:bg-violet-300/[0.03] md:grid-cols-3">
      <div className="p-4 font-serif text-lg text-violet-200/90">{title}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{effect}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{reading}</div>
    </div>
  );
}

export default function UranienPost() {
  const glow = getGlowFromTags(meta.tags);

  return (
    <article className="mx-auto max-w-4xl space-y-12 pb-20 pt-8 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: meta.title,
              description: meta.description,
              image: `https://www.astro-cours.com${meta.cover}`,
              datePublished: meta.date,
              dateModified: meta.date,
              author: {
                "@type": "Person",
                name: "Stéphane Gamot",
              },
              publisher: {
                "@type": "Organization",
                name: "Astro Cours",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.astro-cours.com/logo.png",
                },
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `https://www.astro-cours.com/blog/${meta.slug}`,
              },
              inLanguage: "fr-FR",
              keywords: meta.tags.join(", "),
              articleSection: "Astrologie",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Qu’est-ce qu’un Uranien en astrologie ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "L’Uranien est un type astrologique marqué par Uranus : indépendance, originalité, besoin de rupture, invention, vision du futur, refus de la norme et vocation à réveiller le monde.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quels métiers conviennent à l’Uranien ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "L’Uranien s’épanouit dans l’avant-garde, la technologie, l’astrologie, les neurosciences, la réforme sociale, les arts novateurs, le militantisme et toutes les disciplines tournées vers le futur.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quel est le risque principal d’un Uranus affligé ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Lorsque Uranus est lourdement affligé, le besoin de liberté peut se transformer en marginalité stérile, contestation permanente, isolement, cynisme ou incapacité à transformer réellement le monde.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(167,139,250,0.12)] aspect-[7/3]">
        <Image
          src={UranienImage}
          alt="Portrait symbolique du tempérament uranien en astrologie"
          fill
          priority
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>

      <header className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
        <div
          className={`pointer-events-none absolute -right-24 -top-24 h-[500px] w-[500px] rounded-full opacity-30 mix-blend-screen blur-[100px] ${glow}`}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-violet-300/5 blur-[80px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-300/5 via-transparent to-black/50"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <Kicker>Uranus • futur • rupture • indépendance • vision</Kicker>

          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
         

            <div className="flex flex-wrap gap-3 text-sm text-white/70">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                Lecture intermédiaire
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                Portrait psychologique
              </span>
            </div>
          </div>

          <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            Si Saturne marque la limite de ce que l&apos;œil humain peut voir dans le ciel étoilé, Uranus est la première planète de l&apos;invisible. Sous le regard des étoiles, parrainé par Uranie, la muse de l&apos;astronomie et du Cosmos, l&apos;Uranien est l&apos;archétype du futur. Il est celui qui fait le pont entre le passé figé et ce qui dort encore dans le giron de l&apos;avenir. Découvrez le portrait psychologique, professionnel et amoureux de ce génie insoumis, le véritable Prométhée du zodiaque.
          </p>

          <div className="mt-8 border-t border-white/5 pt-6">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-3" aria-label="Points clés du portrait uranien">
        <Stat label="Force centrale" value="Indépendance & originalité" />
        <Stat label="Terrain naturel" value="Futur & rupture" />
        <Stat label="Ombre principale" value="Isolement & marginalité" />
      </section>

      <section className="space-y-6">
        <H2>L&apos;Intellect et l&apos;Essence de l&apos;Uranien : Le Refus du Moule</H2>

        <Card title="L’essence">
          <p>
            Pour comprendre l&apos;Uranien, il faut graver deux mots en lettres de feu dans son esprit : Indépendance et Originalité.
          </p>
          <p>
            Le problème majeur de l&apos;individu fortement marqué par Uranus dans son thème astral est un besoin viscéral, presque vital, de s&apos;arracher à ses racines. L&apos;Uranien étouffe dans la norme. Pour exister, il doit échapper à ses origines, à son milieu social, à ses cadres formateurs, mais aussi aux coutumes, aux usages et aux lois en vigueur.
          </p>
          <p>
            Cependant, il ne s&apos;agit pas d&apos;une rébellion adolescente sans fondement. L&apos;Uranien possède une logique interne implacable. Il repense le monde par lui-même. Il refuse d&apos;accepter une idée, une règle ou un concept dont il n&apos;aurait pas longuement discuté la validité dans l&apos;intimité de son propre esprit. Cette affirmation d&apos;hyper-individualité est un chemin ardu, qui se déroule presque toujours en deux grandes phases karmiques.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Le Cycle de l&apos;Uranien : Les Deux Phases de l&apos;Individuation</H2>

        <Card title="La Première Phase : L&apos;Exil Volontaire et la Condensation (Avant 40 ans)">
          <p>
            Dans la première partie de sa vie, l&apos;Uranien traverse souvent une période que l&apos;on pourrait qualifier de négative ou d&apos;introvertie, mais qui est en réalité un tremplin indispensable. Face à un monde qu&apos;il juge obsolète ou étouffant, l&apos;Uranien opère une mise en retrait.
          </p>
          <p>
            Il prend ses distances avec son entourage. Attention à ne pas s&apos;y tromper : il ne s&apos;agit en aucun cas d&apos;une démission ou d&apos;une dépression. C&apos;est un mouvement stratégique. L&apos;Uranien ramasse toutes ses forces intérieures. Pour survivre à l&apos;incompréhension générale, il condense son être autour de son noyau. Il se fait, pour reprendre l&apos;image traditionnelle, &quot;dur comme un roc et étroit comme une lame&quot; pour mieux imposer sa puissance future.
          </p>
          <p>
            Durant cette période, l&apos;Uranien fait souvent figure d&apos;inadapté, d&apos;excentrique ou de marginal. Par profonde intransigeance, il refuse d&apos;être &quot;quelqu&apos;un&quot; si cela implique d&apos;être &quot;comme tout le monde&quot;.
          </p>
        </Card>

        <Card title="Le Cap des 42 ans : L&apos;Opposition d&apos;Uranus et la Révélation">
          <p>
            Le virage majeur dans la destinée de l&apos;Uranien survient presque toujours autour de 42 ans. En astrologie, cela correspond à l&apos;opposition d&apos;Uranus céleste à Uranus natal (souvent appelée &quot;la crise de la quarantaine&quot;). C&apos;est l&apos;étincelle qui met le feu aux poudres.
          </p>
        </Card>

        <Card title="La Seconde Phase : Le Bâtisseur du Futur (Après 42 ans)">
          <p>
            Cette seconde phase est éminemment positive, active et constructive. L&apos;excentrique inadapté d&apos;hier a fini de totaliser ses forces : il devient &quot;Quelqu&apos;un&quot;. Il s&apos;est ramassé sur lui-même et entre dans son absolu comme dans un château fort. Il est devenu sa propre forteresse.
          </p>
          <p>
            Le problème crucial de l&apos;Uranien est enfin résolu : puisqu&apos;il ne pouvait pas s&apos;intégrer d&apos;emblée à la société par la conformité, il s&apos;y intègre en obligeant la société à admettre sa valeur. C&apos;est la sublimation réussie. Ne pas être &quot;comme les autres&quot; exige une puissance colossale, car on ne peut faire admettre l&apos;inhabituel et l&apos;avant-garde qu&apos;à la condition stricte de le rendre réel, utile et brillant.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Amour et Vie Sociale : L&apos;Indépendance à Deux</H2>

        <Card title="L’amour et la relation">
          <p>
            Dans le domaine sentimental, l&apos;Uranien est un partenaire déconcertant, fascinant, mais exigeant. Le modèle du couple traditionnel, fusionnel, possessif ou routinier lui donne de l&apos;urticaire.
          </p>
          <p>
            Il conçoit l&apos;amour comme une alliance entre deux esprits libres. Pour séduire et retenir un Uranien, il ne faut jamais chercher à l&apos;enfermer dans une cage, même dorée. Il a besoin d&apos;admirer intellectuellement son partenaire et réclame un respect absolu de son jardin secret et de son espace personnel. En retour, c&apos;est un partenaire d&apos;une incroyable tolérance, dénué de préjugés, qui encouragera toujours l&apos;autre à s&apos;émanciper et à devenir la meilleure version de lui-même.
          </p>
          <p>
            Amitiés fulgurantes, coups de foudre inattendus, ou ruptures nettes et sans appel : sa vie relationnelle est souvent marquée par le sceau de la surprise.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Destinée et Vocation : L&apos;Homme au Destin Marqué</H2>

        <Card title="La vocation">
          <p>
            L&apos;Uranien ne choisit pas un métier pour payer ses factures ; il répond à une vocation. C&apos;est l&apos;homme ou la femme au destin marqué, l&apos;individu qui a reçu une mission.
          </p>
          <p>
            La portée de l&apos;influence d&apos;Uranus est telle qu&apos;elle agit comme un amplificateur génétique : elle permet à l&apos;individu de forcer l&apos;expression de ses talents latents et de les porter à leur maximum d&apos;efficacité. L&apos;Uranien excelle partout où il faut détruire l&apos;ancien pour bâtir le nouveau :
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>La technologie et l&apos;avant-garde : Ingénierie spatiale, informatique, intelligence artificielle, sciences de pointe.</li>
            <li>Les disciplines de l&apos;invisible : L&apos;astrologie (Uranus en est la planète maîtresse), la psychologie cognitive, les neurosciences.</li>
            <li>La réforme sociale : La politique (dans son sens révolutionnaire), le militantisme, les droits civiques, l&apos;humanitaire.</li>
            <li>Les arts visuels : Le cinéma d&apos;anticipation, l&apos;art abstrait ou conceptuel, la musique électronique.</li>
          </ul>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>La Face Sombre : Le Prométhée Enchaîné</H2>

        <Callout tone="warn" title="L’ombre d’Uranus">
          <p>
            Mais que se passe-t-il si l&apos;Uranien échoue ? Si Uranus est lourdement dissonant dans le thème (affligé par Saturne ou une planète lourde), l&apos;exigence de liberté se transforme en marginalité stérile.
          </p>
          <p>
            Le mythe de Prométhée — celui qui vola le feu aux Dieux pour le donner aux hommes — illustre parfaitement l&apos;archétype uranien. Tous les Uraniens ne parviennent pas à distribuer leur feu. S&apos;il échoue dans sa sublimation sociale, l&apos;Uranien risque un destin tragique.
          </p>
          <p>
            Comme Prométhée enchaîné à son rocher, il sera rongé par l&apos;aigle de la sécheresse affective et de l&apos;amertume. Incapable de se plier au monde, mais incapable de le transformer, il s&apos;enferme dans un destin sclérosé, devenant un contestataire perpétuel, cynique, orgueilleux, et dramatiquement isolé face à la mer, sous le regard glacial des étoiles.
          </p>
        </Callout>
      </section>

    <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(167,139,250,0.12)] aspect-[7/3]">
        <Image
          src={Uranien2Image}
          alt="Portrait de Ouranos en astrologie"
          fill
          priority
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>

      <section className="space-y-6">
        <H2>L&apos;Expression Féminine et Yin : L&apos;Archétype de la Pionnière</H2>

        <Card title="L’expression Yin">
          <p>
            La femme Uranienne (ou l&apos;énergie Yin uranienne) est une force de la nature qui pulvérise les plafonds de verre. Elle est l&apos;archétype de la Pionnière, de la Suffragette, de la femme de science ou de l&apos;innovatrice.
          </p>
          <p>
            Refusant catégoriquement de se soumettre aux diktats patriarcaux ou aux attentes traditionnelles liées à son genre, elle invente ses propres règles. Qu&apos;elle choisisse d&apos;être une mère de famille aux méthodes d&apos;éducation alternatives et avant-gardistes, ou une femme d&apos;affaires implacable, elle le fera toujours à sa manière. Elle dérange autant qu&apos;elle fascine par son refus total de compromettre sa liberté intellectuelle.
          </p>
          <p>
            Si Uranus est maléficié, cette soif d&apos;émancipation peut devenir chaotique. Elle risque de saboter toutes ses relations par une peur panique de l&apos;engagement, confondant indépendance et fuite en avant.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Le Portrait Physique de l&apos;Uranien (Morphopsychologie Astrologique)</H2>

        <Card title="Le portrait physique">
          <p>
            Physiquement, l&apos;Uranien ne passe jamais inaperçu, non pas par des critères de beauté classiques, mais par une &quot;aura&quot; électrique et magnétique indéniable.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>L&apos;allure générale : Une silhouette souvent longiligne, tendue, animée par une énergie nerveuse. Sa démarche est rapide, saccadée, parfois imprévisible.</li>
            <li>Le regard : C&apos;est son trait le plus distinctif. Le regard uranien est perçant, clair, brillant, parfois qualifié de &quot;regard d&apos;aigle&quot;. Il semble toujours fixer un point à l&apos;horizon céleste que les autres ne voient pas.</li>
            <li>Le visage : Des traits anguleux, asymétriques ou originaux. Le front est souvent haut et proéminent, signalant une hyper-cérébralité.</li>
            <li>Le style : Le style vestimentaire de l&apos;Uranien est fait de contrastes. Il peut être d&apos;une excentricité totalement assumée (précurseur de modes) ou, au contraire, d&apos;un utilitarisme absolu (le fameux col roulé noir identique porté tous les jours par Steve Jobs, figure uranienne par excellence, pour ne pas perdre de temps à choisir ses vêtements).</li>
          </ul>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>En conclusion</H2>

        <Callout tone="ok" title="Conclusion">
          <p>
            En conclusion : L&apos;Uranien est le paratonnerre de l&apos;humanité. Avoir une dominante Uranienne dans son thème astral n&apos;est pas de tout repos, c&apos;est accepter de vivre traversé par l&apos;électricité cosmique. Sa mission n&apos;est pas de rassurer, mais de réveiller. Sans les Uraniens, l&apos;humanité en serait encore à s&apos;éclairer à la bougie, effrayée par les ténèbres, incapable de regarder vers les étoiles.
          </p>
        </Callout>
      </section>

      <section
        aria-label="Synthèse du portrait uranien"
        className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm"
      >
        <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
          <div className="p-5 font-serif text-lg font-medium text-white/90">Axe</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Expression</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Risque</div>
        </div>

        <TableRow
          title="Essence"
          effect="Indépendance, originalité, refus du moule"
          reading="Marginalité stérile, intransigeance improductive"
        />
        <TableRow
          title="Cycle de vie"
          effect="Retrait stratégique puis affirmation brillante"
          reading="Échec d’intégration, isolement durable"
        />
        <TableRow
          title="Amour"
          effect="Alliance libre, admiration mentale, respect de l’espace"
          reading="Ruptures nettes, peur de l’enfermement"
        />
        <TableRow
          title="Vocation"
          effect="Avant-garde, réforme, technologie, futur"
          reading="Contestataire perpétuel sans œuvre réelle"
        />
      </section>

      <footer className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md sm:p-12">
        <H3>Pour aller plus loin dans les portraits planétaires</H3>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Pill>Uranus</Pill>
          <Pill tone="sky">Portrait astrologique</Pill>
          <Pill tone="violet">Vision</Pill>
          <Pill tone="emerald">Thème astral</Pill>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/blog/saturnien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Lire le portrait du Saturnien
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/blog/neptunien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Lire le portrait du Neptunien
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}