import type { ReactNode } from "react";
import Link from "next/link";
import { Pill, TagPillsInline, getGlowFromTags } from "./ui";
import Image from "next/image";
import MercurienImage from "@/public/images/blog/mercurien.webp";
import Mercurien2Image from "@/public/images/blog/mercurien2.webp";

export const meta = {
  slug: "mercurien",
  title:
    "Mercurien : Le Maître de la Communication et l'Éternel Adolescent",
  description:
    "Portrait astrologique du Mercurien : intelligence vive, communication, curiosité, commerce, humour, adaptation, amour, carrière, face sombre et morphopsychologie astrologique de Mercure.",
  date: "2026-04-05",
  tags: [
    "Mercure",
    "mercurien",
    "portrait astrologique",
    "communication",
    "intellect",
    "thème astral",
    "psychologie astrologique",
    "carrière",
    "amour",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/mercurien.webp",
};

function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-300">
      <span
        className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-300"
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
        className="mr-4 block h-px w-8 bg-gradient-to-r from-sky-400/60 to-transparent"
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
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-sm transition-all hover:border-sky-400/30">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
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
    <div className="group grid grid-cols-1 border-b border-white/10 transition-colors hover:bg-sky-400/[0.03] md:grid-cols-3">
      <div className="p-4 font-serif text-lg text-sky-200/90">{title}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{effect}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{reading}</div>
    </div>
  );
}

export default function MercurienPost() {
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
                  name: "Qu’est-ce qu’un Mercurien en astrologie ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Le Mercurien est un type astrologique marqué par Mercure : vivacité mentale, communication, curiosité, souplesse, humour, adaptabilité et besoin constant de nouveauté.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quels métiers conviennent au Mercurien ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Le Mercurien se sent particulièrement à l’aise dans le commerce, la négociation, les médias, l’écriture, la comédie, la vente, les transports, le tourisme, la logistique et les métiers où le mouvement et l’échange sont centraux.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quel est le défaut principal d’un Mercure affligé ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Lorsque Mercure est très affligé, l’agilité mentale peut se transformer en instabilité, mensonge, vantardise, zizanie, absence de discipline ou manipulation verbale.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(56,189,248,0.12)] aspect-[7/3]">
        <Image
          src={MercurienImage}
          alt="Portrait symbolique du tempérament mercurien en astrologie"
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
          className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-sky-400/5 blur-[80px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-400/5 via-transparent to-black/50"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <Kicker>Mercure • mouvement • communication • curiosité • jeunesse</Kicker>

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
            S&apos;il fallait résumer le Mercurien en un seul mot, ce serait : le Mouvement. Gouverné par Mercure, la planète de l&apos;intellect, des échanges, du commerce et de la vivacité, le type Mercurien est le véritable caméléon du zodiaque. Là où le Soleil irradie et où Saturne creuse en profondeur, Mercure, lui, virevolte. Découvrez le portrait psychologique, professionnel et affectif de cet esprit brillant, insaisissable et perpétuellement en quête de nouveauté.
          </p>

          <div className="mt-8 border-t border-white/5 pt-6">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-3" aria-label="Points clés du portrait mercurien">
        <Stat label="Force centrale" value="Vivacité mentale" />
        <Stat label="Terrain naturel" value="Communication & mouvement" />
        <Stat label="Ombre principale" value="Instabilité & dispersion" />
      </section>

      <section className="space-y-6">
        <H2>L&apos;Intellect du Mercurien : Une Vivacité Fulgurante</H2>

        <Card title="L’intellect">
          <p>
            Si vous cherchez quelqu&apos;un capable de comprendre une idée complexe avant même que vous n&apos;ayez fini votre phrase, adressez-vous à un Mercurien. L&apos;esprit de ce type planétaire est un véritable feu d&apos;artifice. Sa caractéristique majeure est une compréhension fulgurante couplée à une faculté d&apos;assimilation exceptionnelle.
          </p>
          <p>
            Le Mercurien n&apos;a pas besoin de fournir des efforts surhumains pour apprendre ; il absorbe l&apos;information comme une éponge. Cependant, cette aisance naturelle possède son revers de médaille. Emporté par son insatiable curiosité, le Mercurien papillonne. Il passe d&apos;un sujet à l&apos;autre à la vitesse de l&apos;éclair, ce qui fait de lui un détenteur d&apos;un savoir encyclopédique, mais parfois superficiel.
          </p>
          <p>
            Les études austères, le travail en laboratoire solitaire ou les hautes mathématiques rébarbatives l&apos;ennuient profondément. Il lui faut du rythme, du contact, de la matière vivante ! Son esprit brillant et souple s&apos;épanouit dans :
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Les mots et les lettres : La littérature, la poésie, l&apos;écriture créative.</li>
            <li>L&apos;information : Le journalisme, les médias, la création de contenu, où son besoin d&apos;actualité est comblé.</li>
            <li>L&apos;expression scénique : La comédie, l&apos;humour, le théâtre.</li>
          </ul>
          <p>
            Fait fascinant : cette vivacité mentale a un impact direct sur son corps. Le Mercurien garde un esprit tellement enjoué et curieux qu&apos;il semble bénéficier d&apos;une véritable fontaine de jouvence. Le Mercurien fait presque toujours plus jeune que son âge civil, tant son regard pétille d&apos;une malice adolescente.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Vie Sociale : Le Caméléon et le Diplomate</H2>

        <Card title="La vie sociale">
          <p>
            En société, le Mercurien est la personne que tout le monde s&apos;arrache. Il possède une conversation vive, agréable, drôle et toujours piquante. Il est celui qui insuffle de l&apos;animation dans un repas de famille ou qui détend l&apos;atmosphère lors d&apos;une réunion tendue.
          </p>
          <p>
            Doté d&apos;un sens psychologique redoutable, il lit ses interlocuteurs avec une facilité déconcertante. Cette ingéniosité fait de lui le roi des adaptations. C&apos;est un diplomate né, un intermédiaire hors pair et un conciliateur naturel. Même face à un problème qui ne relève pas de ses compétences, il trouvera toujours un angle d&apos;approche innovant pour vous conseiller.
          </p>
          <p>
            Toutefois, ne lui demandez pas une fidélité inébranlable si la relation devient routinière. Le Mercurien a une sainte horreur de l&apos;ennui. Il est attiré par la nouveauté, les nouvelles rencontres et le changement. Son amitié est délicieuse, mais elle demande à être constamment stimulée.
          </p>
        </Card>
      </section>

    <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(56,189,248,0.12)] aspect-[7/3]">
        <Image
          src={Mercurien2Image}
          alt="Portrait du Dieu Mercure en astrologie"
          fill
          priority
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>

      <section className="space-y-6">
        <H2>Amour et Sentiments : La Quête de l&apos;Esprit (et le vertige de l&apos;engagement)</H2>

        <Card title="L’amour">
          <p>
            Cette légèreté qui caractérise son intellect se retrouve trait pour trait dans sa vie sentimentale. Le Mercurien n&apos;est pas le signe des passions lourdes et destructrices (comme le Plutonien) ou de la loyauté rigide (comme le Saturnien). Il conçoit l&apos;amour comme un échange, un jeu intellectuel, une complicité joyeuse.
          </p>
          <p>
            S&apos;engager de façon durable est souvent son plus grand défi. Il a tendance à multiplier les affections superficielles ou les flirts avant de se fixer. L&apos;idée même du mariage traditionnel, avec ses obligations légales et ses devoirs routiniers, peut l&apos;étouffer. Il n&apos;est pas rare de voir cette signature astrologique associée à plusieurs unions au cours d&apos;une même vie.
          </p>
          <p>
            En amour, il est ce qu&apos;on appelle un &quot;sapiosexuel&quot; (attiré par l&apos;intelligence), mais il est aussi vitalement attiré par la jeunesse. Il cherchera souvent un partenaire plus jeune, ou du moins un partenaire possédant une âme fraîche et dynamique, capable de le suivre dans ses perpétuels mouvements.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Destinée et Vocation : L&apos;Art de Tomber sur ses Pattes</H2>

        <Card title="La vocation">
          <p>
            La destinée d&apos;un Mercurien harmonieux est rarement tragique, car c&apos;est l&apos;archétype même de la débrouillardise. Il trouvera toujours une opportunité, une faille, un contact pour rebondir et tirer parti d&apos;une situation.
          </p>
          <p>Son champ d&apos;action professionnel est immense :</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Le commerce et la négociation : Vente, représentation, import-export, marketing. Il n&apos;y a pas de meilleur démonstrateur que lui.</li>
            <li>Le mouvement : Les agences de voyages, le tourisme, les transports, la logistique.</li>
            <li>L&apos;Art et la scène : Il est quasiment impossible de monter sur les planches ou de devenir un artiste/chanteur célèbre sans une forte dominante mercurienne dans son thème astral.</li>
          </ul>
          <p>
            Note ésotérique : La tradition astrologique considère souvent Mercure comme une planète neutre. Pourtant, le mystique Maître Eckhart attribuait la Chance à Mercure. Les recherches astrologiques modernes tendent à confirmer ce point : Mercure agit souvent comme une planète hautement bénéfique (au même titre que Jupiter ou Vénus), offrant à ses protégés l&apos;opportunité d&apos;ouvrir les portes du succès par leur simple bagout et leur réseau.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>La Face Sombre (Quand Mercure est affligé)</H2>

        <Callout tone="warn" title="L’ombre de Mercure">
          <p>
            Lorsque l&apos;énergie de Mercure est bloquée ou très mal aspectée dans le thème, la belle agilité mentale se transforme en vice. Le communicateur brillant devient un bavard intarissable et un vantard.
          </p>
          <p>
            Le mythe antique nous rappelle qu&apos;Hermès (Mercure) était le dieu des voyageurs, mais aussi... des voleurs. Un Mercurien dissonant peut développer une moralité très élastique. Le mensonge devient une seconde nature, et le respect du bien d&apos;autrui une notion abstraite.
          </p>
          <p>
            Psychologiquement, c&apos;est un être instable, velléitaire et capricieux, incapable de s&apos;imposer la moindre discipline de vie, ce qui le condamne souvent à végéter. Dans un environnement de groupe (entreprise, famille), il peut devenir le pire des éléments : un semeur de zizanie qui propage ragots, calomnies et médisances, parfois pour le simple &quot;plaisir&quot; de créer du chaos et de s&apos;en amuser.
          </p>
        </Callout>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>L&apos;Expression Féminine et Yin : De la Muse à la Stratège</H2>

        <Card title="L’expression Yin">
          <p>
            Dans un thème où l&apos;énergie féminine ou réceptive (Yin) domine, un beau Mercure donne naissance à une personnalité fascinante : la collaboratrice de génie et la muse diplomate.
          </p>
          <p>
            Séduisante non pas par des artifices dramatiques mais par son esprit pétillant, elle devine les pensées d&apos;autrui avant même qu&apos;elles ne soient formulées. Il est presque impossible de lui mentir. Au quotidien, elle sait obtenir exactement ce qu&apos;elle veut de son entourage grâce à un tact et une psychologie sans faille. Elle brille dans les postes de communication, de secrétariat de haute direction, ou sous les projecteurs en tant qu&apos;actrice. (À noter : elle préférera toujours la compagnie de personnes jeunes et dynamiques, fuyant la lourdeur des mentalités vieillissantes).
          </p>
          <p>
            Si Mercure est très dissonant, cette même intelligence se mue en calcul. L&apos;archétype devient celui de l&apos;intrigante. Péladan, célèbre occultiste, décrivait parfaitement cette face sombre : &quot;Profiter d&apos;autrui, demander tout à l&apos;habileté et rien au travail, vivre sur les dupes et en parasite&quot;. Sans scrupules, fuyant les responsabilités familiales ou matrimoniales, elle utilise sa fine psychologie pour manipuler, escroquer intellectuellement ou tirer parti des faiblesses des plus passionnés.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Le Portrait Physique du Mercurien (Morphopsychologie Astrologique)</H2>

        <Card title="Le portrait physique">
          <p>
            L&apos;astrologie traditionnelle a défini avec une grande précision les traits physiques associés à la signature mercurienne. Le corps reflète la rapidité de l&apos;esprit :
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Allure générale : Des formes fines, déliées, sinueuses. Une stature moyenne ou petite, mais toujours avec un corps mince et une démarche particulièrement légère et aérienne.</li>
            <li>Le visage : Un ovale allongé, avec un front convexe et finement bosselé (signe d&apos;intelligence). Le teint est souvent pâle, grisâtre ou mielleux, mais il a la particularité de s&apos;animer intensément à la moindre émotion.</li>
            <li>Les traits : Des arcades sourcilières proéminentes abritant des yeux vifs. Des sourcils longs et minces. Le nez est typique : fin, assez long et légèrement busqué. Les lèvres sont souvent minces, le menton petit et pointu.</li>
            <li>L&apos;expression : Le Mercurien se reconnaît surtout à son comportement : une diction vive, nette, accompagnée de gestes nombreux, rapides et d&apos;une grande adresse manuelle.</li>
          </ul>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>En conclusion</H2>

        <Callout tone="ok" title="Conclusion">
          <p>
            En conclusion : Le Mercurien est le messager indispensable de notre humanité. Il relie les idées, connecte les êtres et fait circuler la vie. Avoir une dominante Mercurienne, c&apos;est recevoir le don de l&apos;éternelle jeunesse de l&apos;esprit. Son seul véritable travail karmique ? Apprendre à ralentir de temps en temps, pour transformer ses milliers d&apos;informations récoltées en une véritable sagesse.
          </p>
        </Callout>
      </section>

      <section
        aria-label="Synthèse du portrait mercurien"
        className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm"
      >
        <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
          <div className="p-5 font-serif text-lg font-medium text-white/90">Axe</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Expression</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Risque</div>
        </div>

        <TableRow
          title="Intellect"
          effect="Compréhension fulgurante, curiosité, assimilation rapide"
          reading="Superficialité, dispersion, papillonnage"
        />
        <TableRow
          title="Vie sociale"
          effect="Conversation vive, diplomatie, humour, adaptation"
          reading="Instabilité relationnelle si l’ennui s’installe"
        />
        <TableRow
          title="Amour"
          effect="Complicité, jeu, stimulation mentale"
          reading="Difficulté avec la durée, le cadre et la routine"
        />
        <TableRow
          title="Vocation"
          effect="Commerce, médias, scène, mobilité, réseau"
          reading="Agitation, ruse, manque de discipline si Mercure est affligé"
        />
      </section>

      <footer className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md sm:p-12">
        <H3>Pour aller plus loin dans les portraits planétaires</H3>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Pill>Mercure</Pill>
          <Pill tone="sky">Portrait astrologique</Pill>
          <Pill tone="violet">Communication</Pill>
          <Pill tone="emerald">Thème astral</Pill>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/blog/lunarien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Lire le portrait du Lunarien
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/blog/venusien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Lire le portrait du Vénusien
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}