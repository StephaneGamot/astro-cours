import type { ReactNode } from "react";
import Link from "next/link";
import { Pill, TagPillsInline, getGlowFromTags } from "./ui";
import Image from "next/image";
import { AUTHOR_PERSON, PUBLISHER_ORG } from "@/lib/seo";
import NeptunienImage from "@/public/images/blog/neptunien.webp";
import Neptunien2Image from "@/public/images/blog/neptunien2.webp";
import Neptunien3Image from "@/public/images/blog/neptunien3.webp";

export const meta = {
  slug: "neptunien",
  title: "Neptunien : Le Visionnaire Insaisissable",
  description:
    "Portrait du Neptunien en astrologie : intuition, spiritualité, hypersensibilité et art. Explorez l'impact du mysticisme de Neptune dans un thème astral.",
  date: "2026-03-30",
  tags: [
    "Neptune",
    "neptunien",
    "portrait astrologique",
    "intuition",
    "spiritualité",
    "thème astral",
    "psychologie astrologique",
    "mysticisme",
    "amour",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/neptunien.webp",
};

function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
      <span
        className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400"
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
        className="mr-4 block h-px w-8 bg-gradient-to-r from-amber-500/50 to-transparent"
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
      box: "border-sky-500/30 bg-sky-500/10 shadow-[0_0_30px_rgba(56,189,248,0.05)]",
      icon: "text-sky-400",
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
  children,
  subtitle,
}: {
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-md transition-colors hover:bg-white/[0.05]">
      <div>

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

export default function NeptunienPost() {
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
              author: AUTHOR_PERSON,
              publisher: PUBLISHER_ORG,
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
                  name: "Qu’est-ce qu’un Neptunien en astrologie ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Le Neptunien est un type astrologique marqué par Neptune : intuition, hypersensibilité, spiritualité, imagination, compassion, idéalisme et rapport complexe au réel.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quels métiers conviennent au Neptunien ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Le Neptunien s’épanouit souvent dans le soin, la psychologie, les sciences divinatoires, l’astrologie, la littérature, la photographie, le cinéma, la création artistique et les métiers liés à l’élément Eau.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quel est le risque principal d’un Neptune affligé ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Lorsque Neptune est très affligé, l’hypersensibilité peut conduire à la fuite du réel, aux addictions, à la désorganisation matérielle, à la confusion psychique ou à une dissolution de la personnalité.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(251,191,36,0.1)] aspect-[7/3]">
        <Image
          src={NeptunienImage}
          alt="Portrait symbolique du tempérament neptunien en astrologie"
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
          className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-[80px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/50"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <Kicker>Neptune • intuition • mysticisme • idéal • dissolution</Kicker>

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
            Comprendre le type Neptunien en astrologie, c’est accepter de plonger dans un océan sans fond. Gouverné par Neptune, la planète des brumes, des illusions, de la spiritualité et de l&apos;inconscient collectif, le Neptunien échappe par nature à toutes les étiquettes. Fascinant, complexe et souvent incompris, découvrez le portrait théorique et psychologique de ce mystique du zodiaque.
          </p>

          <div className="mt-8 border-t border-white/5 pt-6">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-3" aria-label="Points clés du portrait neptunien">
        <Stat label="Force centrale" value="Intuition & clairvoyance" />
        <Stat label="Terrain naturel" value="Invisible & inspiration" />
        <Stat label="Ombre principale" value="Fuite du réel" />
      </section>

      <section className="space-y-6">
        <H2>L&apos;Intellect du Neptunien : Entre Intuition Pure et Clairvoyance</H2>

        <Card>
          <p>
            Saisir l&apos;essence du Neptunien demande une certaine humilité. La tradition astrologique classique peine parfois à le définir avec précision, et pour cause : le Neptunien ne vit pas dans le monde des certitudes, mais dans celui des ressentis.
          </p>
          <p>
            Là où d&apos;autres types planétaires (comme le Saturnien ou le Mercurien) s&apos;appuient sur la logique, les mathématiques ou le pragmatisme absolu, l&apos;intellect du Neptunien fonctionne comme un radar ultra-sensible. Sa caractéristique principale ? Une intuition fulgurante qui frôle bien souvent la prescience ou la clairvoyance. On attribue d&apos;ailleurs naturellement à cette signature astrale des dons évidents de médiumnité ou de télépathie.
          </p>
          <p>Sur ces bases, il est évident que le monde matériel, froid et chiffré, l&apos;ennuie profondément. Le Neptunien trouve son oxygène dans :</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>La création artistique : La poésie, la littérature, la peinture ou encore le roman d&apos;anticipation et d&apos;imagination.</li>
            <li>L&apos;exploration de l&apos;invisible : L&apos;occultisme, l&apos;astrologie, les études mystiques ou les voies initiatiques.</li>
          </ul>
          <p>
            Il n&apos;est pas rare que le Neptunien produise des œuvres avant-gardistes, perçues comme &quot;perchées&quot; ou incompréhensibles par ses contemporains. S&apos;il est cultivé, il peut émettre des théories fulgurantes, dictées par une fulgurance intérieure, très en avance sur son temps. C&apos;est l&apos;archétype même du génie incompris de son vivant, dont la brillance n&apos;est souvent reconnue et célébrée qu&apos;après son départ de ce monde.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Vie Sociale et Valeurs : L&apos;Utopiste au Grand Cœur</H2>

        <Card>
          <p>
            Dans ses relations quotidiennes, le Neptunien est une âme d&apos;une rare douceur. Conciliant, aimable, profondément compatissant et toujours prêt à rendre service, il est une oreille attentive exceptionnelle. Cependant, ne lui demandez surtout pas d&apos;avoir les pieds sur terre ou de se conformer à la norme.
          </p>
          <p>
            Le Neptunien est fondamentalement mal à l&apos;aise dans notre civilisation moderne hyper-matérialiste, axée sur la consommation, la compétition et la rentabilité. C&apos;est un grand rêveur, un idéaliste absolu, voire un utopiste.
          </p>
          <p>
            Face à la dureté du monde, il ne choisit pas l&apos;affrontement guerrier (propre au Martien), mais plutôt l&apos;engagement idéologique. Il est très fréquent de retrouver des dominantes neptuniennes chez les personnes qui adhèrent à des mouvements politiques idéalistes, des syndicats, des associations humanitaires ou des collectifs alternatifs (surtout si Neptune est relié à Mars dans le thème astral). Son moteur intellectuel et social ? L&apos;espoir viscéral de guérir la société et de créer un monde meilleur.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Amour et Sentiments : La Quête de la Fusion (et ses écueils)</H2>

        <Card>
          <p>
            Sur le plan affectif, le Neptunien est une éponge émotionnelle. Ultra-sensible et impressionnable, il ne cherche pas un simple partenariat de vie : il cherche la fusion des âmes.
          </p>
          <p>
            Cependant, cette quête d&apos;idéal absolu le rend souvent instable dans la réalité du couple. Il est sujet à de multiples hésitations, tiraillé entre ses rêves et la réalité prosaïque. Au quotidien, il a naturellement tendance à se laisser porter. En cas d&apos;union, c’est très souvent son ou sa partenaire qui prend les rênes, prend les décisions tranchées et &quot;mène la barque&quot; du foyer.
          </p>
          <p>
            Le talon d&apos;Achille du Neptunien en amour ? Le matériel. Son manque d&apos;aptitude pour les affaires financières, l&apos;administration ou la gestion du quotidien peut devenir une source majeure de tensions conjugales. S&apos;il ne trouve pas un partenaire capable d&apos;ancrer le couple dans la réalité avec bienveillance, cette signature planétaire peut amener des désillusions ou des sacrifices affectifs douloureux.
          </p>
        </Card>
      </section>

       <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(251,191,36,0.1)] aspect-[7/3]">
        <Image
          src={Neptunien2Image}
          alt="Portrait du Dieu des 7 océans en astrologie"
          fill
          priority
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>

      <section className="space-y-6">
        <H2>Destinée et Vocation : De l&apos;Ombre à la Lumière</H2>

        <Card>
          <p>
            Apparemment dénué d&apos;ambition matérielle (le pouvoir pour le pouvoir ne l&apos;intéresse pas), le Neptunien a une trajectoire de vie souvent sinueuse. Pourtant, il lui arrive d&apos;accéder à une immense célébrité. Ce succès ne vient pas d&apos;un plan de carrière calculé, mais surgit souvent par un alignement presque magique avec des circonstances collectives (le Neptunien capte &quot;l&apos;air du temps&quot; comme personne) ou grâce à des fulgurances de génie inexpliquées.
          </p>
          <p>Dans une destinée plus &quot;ordinaire&quot;, le Neptunien s&apos;épanouira loin des bureaux gris et des routines aliénantes. Il trouve sa véritable vocation dans :</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Le soin et la guérison : La médecine, les professions paramédicales, la psychologie, l&apos;énergétique.</li>
            <li>Le mysticisme : Les sciences divinatoires, l&apos;astrologie, la tarologie.</li>
            <li>Les mots et les images : La collaboration littéraire, la photographie, le cinéma.</li>
            <li>L&apos;élément Eau : La navigation, l&apos;océanographie, ou même, plus pragmatiquement, les industries liées aux liquides et aux carburants.</li>
          </ul>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>La Face Sombre du Neptunien (Quand Neptune est affligé)</H2>

        <Callout tone="warn" title="L'ombre de Neptune">
          <p>
            Comme tout archétype astrologique, le Neptunien possède sa part d&apos;ombre. Lorsque Neptune est très affligé (par des dissonances majeures dans le thème natal), l&apos;hypersensibilité devient une vulnérabilité toxique.
          </p>
          <p>
            Incapable de supporter la dureté du monde, le Neptunien dissonant cherche à s&apos;échapper. Ce besoin de fuite peut malheureusement le conduire vers des paradis artificiels : alcoolisme, toxicomanie, ou addictions modernes (écrans, jeux vidéo, illusions virtuelles).
          </p>
          <p>
            Dans les cas extrêmes, il peut se désociabiliser totalement, incapable de s&apos;assurer une vie matérielle décente. Psychologiquement, ce déséquilibre peut se manifester par une mentalité paradoxale : un complexe de supériorité spirituelle où l&apos;individu se croit &quot;trop pur&quot; ou &quot;trop intelligent&quot; pour s&apos;abaisser à des besognes matérielles qu&apos;il juge indignes de lui.
          </p>
        </Callout>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>L&apos;Impact Générationnel : Neptune en Scorpion (1957-1970)</H2>

        <Card>
          <p>
            Note encyclopédique : L&apos;influence de Neptune se lit aussi à l&apos;échelle mondiale. On ne peut s&apos;empêcher de faire le lien entre le transit de Neptune dans le signe intense et transgressif du Scorpion (de 1957 à 1970) et les bouleversements de cette époque. Ce fut la grande époque de l&apos;explosion du mouvement hippie, de la banalisation des drogues psychédéliques, de la contestation utopiste et de l&apos;émergence d&apos;idéaux &quot;farfelus&quot; cherchant à renverser l&apos;ordre établi (notamment lors des cinq oppositions historiques entre Saturne et Neptune de cette période).
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>L&apos;Expression Yin du Neptunien (L&apos;archétype de la Prêtresse)</H2>

        <Card>
          <p>
            Dans un thème astral où l&apos;énergie féminine (le Yin, l&apos;intériorisation) est prédominante, un Neptune harmonieux donne naissance à un archétype fascinant : celui de la prêtresse ou de la muse.
          </p>
          <p>
            L&apos;intuition n&apos;est plus seulement un outil, c&apos;est un guide absolu. Cette personne ne construira jamais sa vie sur des raisonnements purement logiques ou positifs. Elle se laissera porter par des &quot;voix intérieures&quot;, des synchronicités et des inspirations dont elle serait incapable d&apos;expliquer l&apos;origine rationnelle, mais qui se révéleront redoutablement justes. Elle possèdera des dispositions exceptionnelles pour le développement spirituel et la voyance.
          </p>
          <p>
            En revanche, si Neptune est fortement maléficié dans cette polarité, le danger est la dissolution totale de la personnalité. Dépourvue de sens pratique, la personne devient trop instable pour maintenir un cap de vie cohérent. L&apos;attrait naturel pour le mystère peut alors sombrer dans des sphères plus sombres : peurs irrationnelles, paranoïa, croyance en des malédictions, complexe de persécution ou attrait malsain pour les pratiques magiques douteuses. Neptune mal aspecté demande toujours un effort conscient d&apos;ancrage pour maintenir un bon équilibre mental, quel que soit le genre de la personne.
          </p>
        </Card>
      </section>

     <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(251,191,36,0.1)] aspect-[7/3]">
        <Image
          src={Neptunien3Image}
          alt="Portrait de Neptune en astrologie"
          fill
          priority
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>

      <section className="space-y-6">
        <H2>En conclusion</H2>

        <Callout tone="ok" title="Dominante neptunienne">
          <p>
            En conclusion : Avoir une dominante Neptunienne dans son thème astral est à la fois un défi matériel et un immense cadeau spirituel. C&apos;est porter en soi l&apos;océan tout entier, avec ses tempêtes invisibles et ses trésors engloutis. Pour s&apos;épanouir, le Neptunien n&apos;a qu&apos;un seul devoir : trouver une ancre suffisamment solide pour ne pas se noyer dans ses propres rêves, afin de pouvoir ramener à la surface les merveilles qu&apos;il est le seul à percevoir.
          </p>
        </Callout>
      </section>

      <section
        aria-label="Synthèse du portrait neptunien"
        className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm"
      >
        <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
          <div className="p-5 font-serif text-lg font-medium text-white/90">Axe</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Expression</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Risque</div>
        </div>

        <TableRow
          title="Intellect"
          effect="Intuition, clairvoyance, fulgurance"
          reading="Confusion ou flottement si Neptune est affligé"
        />
        <TableRow
          title="Vie sociale"
          effect="Compassion, utopie, engagement idéaliste"
          reading="Décalage avec le réel matériel"
        />
        <TableRow
          title="Amour"
          effect="Fusion, sensibilité, abandon"
          reading="Désillusions, dépendance, sacrifice"
        />
        <TableRow
          title="Vocation"
          effect="Art, soin, mystique, image, eau"
          reading="Trajectoire sinueuse, manque d’ancrage"
        />
      </section>

      <footer className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md sm:p-12">
        <H3>Pour aller plus loin dans les portraits planétaires</H3>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Pill>Neptune</Pill>
          <Pill tone="sky">Portrait astrologique</Pill>
          <Pill tone="violet">Spiritualité</Pill>
          <Pill tone="emerald">Thème astral</Pill>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/blog/uranien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Lire le portrait de l’Uranien
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/blog/plutonien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Lire le portrait du Plutonien
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}