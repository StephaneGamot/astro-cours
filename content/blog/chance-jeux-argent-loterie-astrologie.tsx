import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Pill, TagPillsInline, getGlowFromTags } from "./ui";
import { AUTHOR_PERSON, PUBLISHER_ORG, SITE_URL } from "@/lib/seo";
import ChanceImage from "@/public/images/blog/chance-jeux-argent-loterie.webp";

export const meta = {
  slug: "chance-jeux-argent-loterie-astrologie",
  title: "Chance au jeu en astrologie : maisons & Jupiter",
  description:
    "Loterie, paris, jeux d'argent : ce que l'astrologie dit de la chance. Maison V, maison II, Jupiter, Part de Fortune et transits. Jeu responsable.",
  date: "2026-06-13",
  tags: [
    "chance",
    "jeux d'argent",
    "loterie",
    "maison V",
    "maison II",
    "Jupiter",
    "Part de Fortune",
    "spéculation",
    "transits",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/chance-jeux-argent-loterie.webp",
};

// -- COMPOSANTS D'INTERFACE PREMIUM --

function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" aria-hidden="true" />
      {children}
    </span>
  );
}

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-6 flex items-center font-serif text-3xl font-light text-white md:text-4xl">
      <span className="mr-4 block h-px w-8 bg-gradient-to-r from-amber-500/50 to-transparent" aria-hidden="true" />
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
    },
    ok: {
      box: "border-emerald-500/30 bg-emerald-500/10 shadow-[0_0_30px_rgba(16,185,129,0.05)]",
      icon: "text-emerald-400",
      svg: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    note: {
      box: "border-sky-500/30 bg-sky-500/10 shadow-[0_0_30px_rgba(56,189,248,0.05)]",
      icon: "text-sky-400",
      svg: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  };

  const current = styles[tone];

  return (
    <aside aria-label={title} className={`relative overflow-hidden rounded-2xl border p-6 backdrop-blur-md ${current.box}`}>
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-current opacity-30 to-transparent" />
      <div className={`mb-3 flex items-center gap-3 font-serif text-lg font-medium ${current.icon}`}>
        {current.svg}
        <span>{title}</span>
      </div>
      <div className="space-y-3 text-sm leading-relaxed text-white/80 md:text-base">{children}</div>
    </aside>
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
    <section className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-md transition-colors hover:bg-white/[0.05]">
      <div>
        <H3>{title}</H3>
        {subtitle && <p className="mt-2 text-sm text-white/50">{subtitle}</p>}
      </div>
      <div className="mt-5 space-y-4 text-sm leading-relaxed text-white/80 md:text-base">{children}</div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-sm transition-all hover:border-white/20">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
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
    <div className="group grid grid-cols-1 border-b border-white/10 transition-colors hover:bg-white/[0.02] md:grid-cols-3">
      <div className="p-4 font-serif text-lg text-amber-200/90">{title}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{effect}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{reading}</div>
    </div>
  );
}

export default function ChanceJeuxArgentLoteriePost() {
  const glow = getGlowFromTags(meta.tags);

  return (
    <article className="mx-auto max-w-4xl space-y-12 pb-20 pt-8 text-white">
      {/* DONNÉES STRUCTURÉES (SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: meta.title,
              description: meta.description,
              image: `${SITE_URL}${meta.cover}`,
              datePublished: `${meta.date}T12:00:00Z`,
              dateModified: `${meta.date}T12:00:00Z`,
              author: AUTHOR_PERSON,
              publisher: PUBLISHER_ORG,
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `${SITE_URL}/blog/${meta.slug}`,
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
                  name: "Quelle maison regarder pour la chance au jeu en astrologie ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La maison V gouverne le jeu, les paris et la spéculation. On la croise avec la maison II (gains) et la maison VIII (argent inattendu), Jupiter, Vénus et la Part de Fortune.",
                  },
                },
                {
                  "@type": "Question",
                  name: "L'astrologie permet-elle de gagner à la loterie ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Non. L'astrologie ne prédit pas de numéros gagnants et ne garantit aucun gain. Les jeux d'argent reposent sur le hasard. Le thème décrit au mieux un rapport symbolique au risque, pas un résultat.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Jupiter rend-il chanceux au jeu ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Jupiter symbolise l'expansion, l'optimisme et les opportunités. Bien placé, il décrit une attitude confiante et généreuse, mais il n'assure pas de gains : c'est un indice symbolique, pas une promesse de victoire.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      {/* IMAGE DE COUVERTURE */}
      <div className="relative w-full aspect-[7/3] rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(251,191,36,0.1)] bg-[#0f0f13] flex items-center justify-center">
        <Image src={ChanceImage} alt="Chance au jeu en astrologie : Jupiter, dés et pièces d'or sur fond cosmique" fill sizes="100vw" priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent z-10 pointer-events-none" />
      </div>

      {/* HERO */}
      <header className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
        <div
          className={`pointer-events-none absolute -right-24 -top-24 h-[500px] w-[500px] rounded-full opacity-30 mix-blend-screen blur-[100px] ${glow}`}
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-[80px]" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/50" aria-hidden="true" />

        <div className="relative z-10">
          <Kicker>Chance • Maison V • Jupiter • Spéculation</Kicker>

          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="font-serif text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl md:max-w-3xl">
              Loterie, paris, jeux d&apos;argent : ce que le thème révèle vraiment
            </h2>

            <div className="flex flex-wrap gap-3 text-sm text-white/70">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">Lecture intermédiaire</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">Jeu responsable</span>
            </div>
          </div>

          <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            « Suis-je chanceux au jeu ? » est l&apos;une des questions les plus posées à l&apos;astrologie. La réponse honnête tient en deux temps :
            le thème décrit un <strong className="font-medium text-amber-200">rapport au hasard, au risque et à la spéculation</strong> — via la{" "}
            <strong className="font-medium text-white">maison V</strong>, la <strong className="font-medium text-white">maison II</strong>,{" "}
            <strong className="font-medium text-white">Jupiter</strong> et la <strong className="font-medium text-white">Part de Fortune</strong> — mais il ne
            prédit aucun numéro gagnant et ne garantit aucun gain. Voici comment lire ces indices avec méthode, et avec lucidité.
          </p>

          <div className="mt-8 pt-6 border-t border-white/5">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      {/* AVERTISSEMENT JEU RESPONSABLE */}
      <Callout tone="warn" title="À lire avant tout : le jeu reste un hasard">
        <p>
          Les jeux d&apos;argent (loterie, grattage, paris, casino) reposent sur le <strong className="text-white">hasard</strong>. Aucune
          technique astrologique ne permet de prévoir un tirage ni de « forcer » un gain. Cet article décrit un{" "}
          <strong className="text-white">symbolisme</strong>, pas une méthode pour gagner de l&apos;argent.
        </p>
        <p>
          Jouez uniquement de l&apos;argent que vous pouvez perdre, fixez-vous des limites, et ne cherchez jamais à « vous refaire ». Si le jeu
          devient une source de stress, de dettes ou d&apos;envies irrépressibles, c&apos;est un signal à prendre au sérieux. En France,{" "}
          <strong className="text-white">Joueurs Info Service (09 74 75 13 13)</strong> propose une aide gratuite, anonyme et confidentielle.
        </p>
      </Callout>

      {/* STATS RAPIDES */}
      <section className="grid gap-4 sm:grid-cols-3" aria-label="Points clés de l'article">
        <Stat label="Maison clé" value="Maison V" />
        <Stat label="Planète de chance" value="Jupiter" />
        <Stat label="Ce que ça n'est pas" value="Une prédiction de gains" />
      </section>

      {/* DEFINITION BOX */}
      <aside className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-6 leading-relaxed text-white/85">
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-amber-400">Définition</p>
        <p>
          En astrologie, la <strong>chance au jeu</strong> s&apos;observe via la <Link href="/maisons/maison-5">maison V</Link> (jeux, paris,
          spéculation, prise de risque), la <Link href="/maisons/maison-2">maison II</Link> (gains), la{" "}
          <Link href="/maisons/maison-8">maison VIII</Link> (argent inattendu), <Link href="/planetes/jupiter">Jupiter</Link> et la Part de
          Fortune. Ces indices décrivent une <strong>attitude face au risque</strong> — pas un résultat garanti.
        </p>
      </aside>

      {/* INTRO */}
      <p className="text-base leading-relaxed text-white/80 md:text-lg">
        Avant de chercher la « chance », il faut comprendre ce que l&apos;astrologie peut réellement éclairer : votre{" "}
        <strong>tempérament de joueur</strong>, votre rapport au risque, les domaines où vous avez tendance à oser ou à vous brûler, et les{" "}
        <strong>périodes</strong> où l&apos;élan spéculatif est plus fort. C&apos;est une lecture psychologique et symbolique, à croiser toujours avec
        le bon sens.
      </p>

      {/* 1. MAISON V */}
      <section className="space-y-6">
        <H2>1) La maison V : le terrain du jeu et du pari</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          La <strong className="font-medium text-amber-200">maison V</strong> gouverne tout ce qu&apos;on entreprend « pour voir » : les jeux, les
          paris, la spéculation, les coups de cœur risqués. C&apos;est la maison du plaisir et de la prise de risque créative — celle où l&apos;on mise,
          au sens propre comme au figuré.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Ce que la maison V révèle" subtitle="Le rapport spontané au risque et au jeu.">
            <p>
              Son signe de cuspide et son maître montrent <strong className="text-white">comment</strong> vous jouez : prudemment, par impulsion,
              par superstition, par calcul ou par besoin de sensations. Une maison V soutenue par Jupiter ou Vénus décrit un joueur optimiste ;
              tendue par Saturne, un rapport plus craintif ou plus discipliné.
            </p>
          </Card>

          <Card title="Le maître de la maison V" subtitle="Où il se place oriente le terrain de jeu.">
            <p>
              Le maître de la V en maison II peut lier le jeu à l&apos;argent personnel ; en VIII, à des gains (ou pertes) soudains ; en XII, à un
              risque d&apos;excès ou d&apos;auto-sabotage. La <strong className="text-white">maison où il atterrit</strong> raconte l&apos;histoire.
            </p>
          </Card>
        </div>

        <Callout tone="note" title="Réflexe de lecture">
          <p>
            La maison V décrit un <strong className="text-white">style de jeu</strong>, pas une garantie de gain. Un beau placement n&apos;annonce pas
            le jackpot : il décrit une attitude, une fréquence, une motivation.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* 2. MAISONS II ET VIII */}
      <section className="space-y-6">
        <H2>2) Maisons II et VIII : par où l&apos;argent entre</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Le jeu se joue en V, mais l&apos;argent se loge ailleurs. La <Link href="/maisons/maison-2">maison II</Link> concerne ce que l&apos;on gagne et
          conserve par soi-même ; la <Link href="/maisons/maison-8">maison VIII</Link> concerne l&apos;argent <em>des autres</em> et les sommes{" "}
          <strong className="font-medium text-amber-200">inattendues</strong> : héritages, remboursements… et, symboliquement, les gains soudains.
        </p>

        <section aria-label="Tableau des maisons d'argent" className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm">
          <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
            <div className="p-5 font-serif text-lg font-medium text-white/90">Maison</div>
            <div className="p-5 font-serif text-lg font-medium text-white/90">Domaine</div>
            <div className="p-5 font-serif text-lg font-medium text-white/90">Lecture « jeu »</div>
          </div>

          <TableRow title="Maison II" effect="Argent gagné & conservé" reading="Capacité à transformer un gain en ressource durable" />
          <TableRow title="Maison V" effect="Jeu, pari, spéculation" reading="Attitude et fréquence de la prise de risque" />
          <TableRow title="Maison VIII" effect="Argent soudain & d'autrui" reading="Gains inattendus… mais aussi pertes brutales" />
        </section>

        <Callout tone="warn" title="Le revers de la VIII">
          <p>
            La maison VIII gouverne autant les <strong className="text-white">gains soudains</strong> que les <strong className="text-white">pertes
            brutales</strong> et les dettes. C&apos;est exactement pourquoi le jeu y est ambivalent : la même porte laisse entrer et sortir l&apos;argent.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* 3. JUPITER ET VENUS */}
      <section className="space-y-6">
        <H2>3) Jupiter et Vénus : les « bénéfiques »</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          <Link href="/planetes/jupiter">Jupiter</Link> est la planète de l&apos;<strong className="font-medium text-amber-200">expansion, de
          l&apos;optimisme et des opportunités</strong>. La tradition l&apos;appelle le « grand bénéfique ». Vénus, le « petit bénéfique », adoucit et
          attire. Reliées à la V, à la II ou à la Part de Fortune, ces planètes décrivent une tonalité favorable — une confiance, une aisance.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Jupiter bien placé">
            <p>
              Optimisme, sens de l&apos;opportunité, générosité, capacité à rebondir. Attention toutefois : Jupiter peut aussi pousser à{" "}
              <strong className="text-white">surestimer ses chances</strong> et à miser trop gros. L&apos;excès est son revers.
            </p>
          </Card>

          <Card title="Vénus en appui">
            <p>
              Goût du plaisir, du beau coup, des situations agréables. Elle décrit souvent une chance « relationnelle » (gains liés aux autres,
              aux cadeaux, aux à-côtés) plus qu&apos;une chance brute au tirage.
            </p>
          </Card>
        </div>

        <Callout tone="ok" title="Nuance essentielle">
          <p>
            « Bénéfique » ne veut pas dire « gagnant ». Jupiter décrit une <strong className="text-white">attitude</strong> et un{" "}
            <strong className="text-white">climat</strong> intérieur, pas un résultat de loterie. Un Jupiter rayonnant rend confiant — ce qui n&apos;a
            jamais changé les probabilités d&apos;un tirage.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* 4. PART DE FORTUNE */}
      <section className="space-y-6">
        <H2>4) La Part de Fortune : le point de « chance »</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          La <strong className="font-medium text-amber-200">Part de Fortune</strong> est un point calculé (à partir du Soleil, de la Lune et de
          l&apos;Ascendant) que la tradition associe au bien-être matériel et à une forme de chance « qui coule de source ». Sa maison indique le
          domaine où l&apos;abondance vient le plus naturellement.
        </p>

        <Card title="Comment la lire" subtitle="La maison de la Part de Fortune oriente le domaine porteur.">
          <div className="space-y-4">
            <p>
              <span className="text-amber-400">✦</span> En <strong className="text-white">maison II</strong> : aisance à générer ses propres
              ressources.
            </p>
            <p>
              <span className="text-amber-400">✦</span> En <strong className="text-white">maison V</strong> : un terrain de chance lié au jeu, à la
              création, aux enfants ou aux plaisirs — à manier avec prudence côté jeu d&apos;argent.
            </p>
            <p>
              <span className="text-amber-400">✦</span> En <strong className="text-white">maison VIII ou XI</strong> : gains via autrui, soutiens,
              réseaux ou rentrées inattendues.
            </p>
          </div>
        </Card>

        <p className="text-sm leading-relaxed text-white/70">
          Pour le calcul exact et les autres points calculés, voir notre annexe sur les{" "}
          <Link href="/points-fictifs" className="text-amber-200 underline-offset-4 hover:underline">points fictifs (Parts, Vertex…)</Link>.
        </p>
      </section>

      <Divider />

      {/* 5. TRANSITS / TIMING */}
      <section className="space-y-6">
        <H2>5) Les transits : des « fenêtres », pas des certitudes</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Le <Link href="/transits">timing</Link> est la dimension la plus demandée — et la plus surinterprétée. Quand Jupiter transite votre
          maison II ou V, ou forme un bon aspect au maître de ces maisons, la tradition parle d&apos;une{" "}
          <strong className="font-medium text-amber-200">fenêtre favorable</strong> : un climat d&apos;ouverture, d&apos;opportunités, de confiance.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Ce qu'un transit favorable décrit">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-emerald-400">✔</span>
                <span>Un état d&apos;esprit plus confiant et ouvert aux occasions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-emerald-400">✔</span>
                <span>Une période où l&apos;on tente, on lance, on ose davantage</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-emerald-400">✔</span>
                <span>Un contexte symbolique d&apos;expansion (II, V, VIII, XI)</span>
              </li>
            </ul>
          </Card>

          <Card title="Ce qu'un transit ne fait jamais">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-red-400">✘</span>
                <span>Garantir un gain ou « débloquer » un jackpot</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-red-400">✘</span>
                <span>Indiquer des numéros, une grille ou un cheval</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-red-400">✘</span>
                <span>Justifier de miser plus que de raison</span>
              </li>
            </ul>
          </Card>
        </div>

        <Callout tone="warn" title="Le piège du « bon moment »">
          <p>
            Croire qu&apos;un transit « autorise » à jouer gros est l&apos;une des erreurs les plus coûteuses. Un bon transit ne modifie pas les
            probabilités d&apos;un jeu de hasard. Au mieux, il décrit votre <strong className="text-white">humeur</strong> — pas le résultat.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* 6. LIMITES */}
      <section className="space-y-6">
        <H2>6) Ce que l&apos;astrologie ne dira jamais</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Soyons clairs, car c&apos;est ce qui sépare une lecture sérieuse d&apos;une illusion. L&apos;astrologie est un langage{" "}
          <strong className="font-medium text-amber-200">symbolique et psychologique</strong>. Sa validité prédictive n&apos;est pas démontrée
          scientifiquement, et elle est totalement impuissante face à un tirage aléatoire.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Aucun numéro gagnant">
            <p>
              Personne ne peut tirer de numéros de loterie d&apos;un thème. Toute promesse de ce genre est une{" "}
              <strong className="text-white">arnaque</strong> ou une illusion. Méfiez-vous des « voyants » qui vendent des grilles.
            </p>
          </Card>

          <Card title="Le hasard reste le hasard">
            <p>
              Un jeu d&apos;argent a une espérance mathématique négative : sur la durée, on perd statistiquement. Aucun astre ne change cette
              réalité. La seule décision vraiment « gagnante » est de jouer <strong className="text-white">peu et pour le plaisir</strong>.
            </p>
          </Card>
        </div>
      </section>

      <Divider />

      {/* SYNTHESE */}
      <section className="space-y-6">
        <H2>Synthèse : lire la « chance au jeu » avec méthode</H2>

        <section className="rounded-[2rem] border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-transparent p-8 shadow-2xl backdrop-blur-md">
          <ol className="list-decimal space-y-4 pl-6 text-lg text-white/90 marker:font-serif marker:font-bold marker:text-emerald-400">
            <li>Lire la maison V (signe de cuspide, maître, planètes) : le style de jeu</li>
            <li>Croiser avec la maison II (gains durables) et la VIII (gains/pertes soudains)</li>
            <li>Évaluer Jupiter et Vénus : la tonalité, l&apos;optimisme, l&apos;excès possible</li>
            <li>Situer la Part de Fortune : le domaine où l&apos;abondance vient le plus aisément</li>
            <li>Regarder les transits comme des fenêtres d&apos;humeur, jamais comme des garanties</li>
            <li><strong className="text-emerald-300">Conclure sur un tempérament, pas sur un résultat.</strong></li>
          </ol>
        </section>

        <Callout tone="ok" title="Conclusion lucide">
          <p>
            Le thème peut décrire un <strong className="text-white">joueur</strong> : prudent ou audacieux, superstitieux ou stratège, attiré par le
            risque ou rebuté par lui. C&apos;est précieux pour se connaître.
          </p>
          <p>
            Mais il ne décrit pas un <strong className="text-white">gagnant</strong>. La meilleure « chance », astrologiquement comme
            humainement, c&apos;est de garder la main : jouer pour le plaisir, avec des limites, sans jamais miser son équilibre.
          </p>
        </Callout>
      </section>

      {/* FAQ */}
      <section className="mt-16 space-y-8">
        <H2>FAQ — Chance, jeu et astrologie</H2>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Quelle maison pour la chance au jeu ?">
            <p>
              La <strong className="text-white">maison V</strong> (jeu, pari, spéculation), croisée avec la II (gains), la VIII (argent soudain),
              Jupiter et la Part de Fortune.
            </p>
          </Card>

          <Card title="Peut-on prédire un gain à la loterie ?">
            <p>
              Non. Aucune méthode astrologique ne prédit un tirage. Le jeu d&apos;argent est un <strong className="text-white">hasard</strong> ; le
              thème décrit une attitude, pas un résultat.
            </p>
          </Card>

          <Card title="Jupiter en maison V rend-il chanceux ?">
            <p>
              Il décrit un joueur optimiste et confiant, parfois trop. C&apos;est un indice de tempérament favorable — pas une promesse de gain, et un
              risque d&apos;excès à surveiller.
            </p>
          </Card>

          <Card title="Et si le jeu devient un problème ?">
            <p>
              C&apos;est un signal à prendre au sérieux. En France, <strong className="text-white">Joueurs Info Service (09 74 75 13 13)</strong> offre
              une aide gratuite et anonyme. Parler à un proche ou à un professionnel aide aussi.
            </p>
          </Card>
        </div>
      </section>

      {/* POUR ALLER PLUS LOIN */}
      <footer className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md sm:p-12">
        <H3>Pour aller plus loin dans votre analyse</H3>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Pill tone="yellow">Maison V</Pill>
          <Pill>Maison II</Pill>
          <Pill tone="violet">Jupiter</Pill>
          <Pill tone="orange">Transits</Pill>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/blog/finances-theme-astral"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Les finances dans le thème
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/blog/qu-est-ce-qu-un-theme-astral"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Comprendre le thème astral
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="mt-12 grid gap-3 text-left sm:grid-cols-2 lg:grid-cols-3">
          <Link href="/maisons/maison-5" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Maison</span>
            <span className="mt-1 block font-medium text-white/90">Maison V — Jeu &amp; plaisir</span>
            <span className="mt-1 block text-xs text-white/60">Paris, spéculation, prise de risque</span>
          </Link>
          <Link href="/maisons/maison-2" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Maison</span>
            <span className="mt-1 block font-medium text-white/90">Maison II — Ressources</span>
            <span className="mt-1 block text-xs text-white/60">Gains conservés, valeurs</span>
          </Link>
          <Link href="/maisons/maison-8" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Maison</span>
            <span className="mt-1 block font-medium text-white/90">Maison VIII — Argent soudain</span>
            <span className="mt-1 block text-xs text-white/60">Gains inattendus, pertes brutales</span>
          </Link>
          <Link href="/planetes/jupiter" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Planète</span>
            <span className="mt-1 block font-medium text-white/90">Jupiter — Expansion</span>
            <span className="mt-1 block text-xs text-white/60">Optimisme, opportunités, excès</span>
          </Link>
          <Link href="/planetes/venus" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Planète</span>
            <span className="mt-1 block font-medium text-white/90">Vénus — Plaisir</span>
            <span className="mt-1 block text-xs text-white/60">Chance relationnelle, à-côtés</span>
          </Link>
          <Link href="/points-fictifs" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Annexe</span>
            <span className="mt-1 block font-medium text-white/90">Part de Fortune</span>
            <span className="mt-1 block text-xs text-white/60">Points fictifs &amp; calcul</span>
          </Link>
          <Link href="/transits" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Méthode</span>
            <span className="mt-1 block font-medium text-white/90">Les transits</span>
            <span className="mt-1 block text-xs text-white/60">Fenêtres de timing</span>
          </Link>
          <Link href="/aspects" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Méthode</span>
            <span className="mt-1 block font-medium text-white/90">Les aspects</span>
            <span className="mt-1 block text-xs text-white/60">Liens au maître de la V</span>
          </Link>
          <Link href="/blog/orientation-professionnelle-theme-astral" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Article</span>
            <span className="mt-1 block font-medium text-white/90">Orientation pro &amp; thème</span>
            <span className="mt-1 block text-xs text-white/60">Maison X et revenus</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}
