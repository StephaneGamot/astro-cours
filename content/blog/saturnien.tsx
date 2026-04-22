import type { ReactNode } from "react";
import Link from "next/link";
import { Pill, TagPillsInline, getGlowFromTags } from "./ui";
import Image from "next/image";
import { AUTHOR_PERSON, PUBLISHER_ORG } from "@/lib/seo";
import SaturnienImage from "@/public/images/blog/saturnien.webp";
import Saturnien2Image from "@/public/images/blog/saturnien2.webp";
import Saturnien3Image from "@/public/images/blog/saturnien3.webp";

export const meta = {
  slug: "saturnien",
  title:
    "Saturnien : Le Sage, le Maître du Temps",
  description:
    "Portrait du Saturnien en astrologie : profondeur, loyauté, solitude et sagesse. Découvrez son ambition silencieuse et son impact dans le thème astral.",
  date: "2026-04-01",
  tags: [
    "Saturne",
    "saturnien",
    "portrait astrologique",
    "résilience",
    "temps",
    "thème astral",
    "psychologie astrologique",
    "vocation",
    "amour",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/saturnien.webp",
};

function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-300">
      <span
        className="h-1.5 w-1.5 animate-pulse rounded-full bg-slate-300"
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
        className="mr-4 block h-px w-8 bg-gradient-to-r from-slate-400/60 to-transparent"
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
      box: "border-slate-500/30 bg-slate-500/10 shadow-[0_0_30px_rgba(148,163,184,0.05)]",
      icon: "text-slate-300",
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
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-sm transition-all hover:border-slate-300/30">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-300/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
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
    <div className="group grid grid-cols-1 border-b border-white/10 transition-colors hover:bg-slate-300/[0.03] md:grid-cols-3">
      <div className="p-4 font-serif text-lg text-slate-200/90">{title}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{effect}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{reading}</div>
    </div>
  );
}

export default function SaturnienPost() {
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
                  name: "Qu’est-ce qu’un Saturnien en astrologie ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Le Saturnien désigne un tempérament fortement marqué par Saturne : profondeur, lenteur féconde, rigueur, fidélité, endurance, solitude choisie ou subie, ambition patiente et sens du devoir.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quels métiers conviennent au Saturnien ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Le Saturnien excelle souvent dans les métiers de structure, d’architecture, de gestion, d’archives, de recherche, de terre, de soin difficile, de discipline ou de longue patience.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quel est le risque principal d’un Saturne affligé ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Lorsque Saturne est très affligé, la profondeur peut se transformer en dureté, aigreur, misanthropie, ressentiment, blocages ou sentiment d’injustice permanente.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(148,163,184,0.12)] aspect-[7/3]">
        <Image
          src={SaturnienImage}
          alt="Portrait du Dieu Saturneen astrologie"
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
          className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-slate-300/5 blur-[80px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-300/5 via-transparent to-black/50"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <Kicker>Saturne • temps • structure • endurance • sagesse</Kicker>

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
            Si le monde moderne, impatient et superficiel, glorifie la vitesse de Mercure et l&apos;éclat du Soleil, il oublie souvent de s&apos;incliner devant la majesté de Saturne. Gouverné par la planète du Temps, du Karma, de la structuration et de la sagesse, le Saturnien est un roc au milieu de l&apos;océan. Incompris, souvent jugé trop sévère ou solitaire, il est pourtant le bâtisseur infatigable du zodiaque. Découvrez le portrait psychologique, amoureux et professionnel de cette âme profonde qui, telle un bon vin, révèle toute sa puissance avec les années.
          </p>

          <div className="mt-8 border-t border-white/5 pt-6">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-3" aria-label="Points clés du portrait saturnien">
        <Stat label="Force centrale" value="Profondeur & endurance" />
        <Stat label="Terrain naturel" value="Structure & temps long" />
        <Stat label="Ombre principale" value="Aigreur & isolement" />
      </section>

      <section className="space-y-6">
        <H2>L&apos;Intellect du Saturnien : La Puissance de la Profondeur</H2>

        <Card title="L’intellect">
          <p>
            Ne cherchez pas chez le Saturnien la répartie fulgurante ou l&apos;assimilation instantanée du Mercurien. Son intelligence ne brille pas par sa rapidité, mais par une profondeur et une capacité de concentration absolument hors normes.
          </p>
          <p>
            Face à une nouvelle information, le Saturnien prend son temps. Il décortique, analyse, structure. L&apos;assimilation est lente, certes, mais une fois les notions acquises, elles s&apos;incrustent dans son esprit comme gravées dans le marbre. Il possède une mémoire prodigieuse, défiant souvent les ravages de l&apos;âge.
          </p>
          <p>
            Sur le plan intellectuel, c&apos;est un travailleur acharné. Durant sa scolarité, il n&apos;est que rarement l&apos;enfant &quot;chanceux&quot; qui réussit ses examens au talent. Sa réussite, il ne la doit qu&apos;à lui-même, à son mérite et à sa patience opiniâtre. Face à l&apos;obstacle, là où d&apos;autres abandonnent, le Saturnien s&apos;acharne. Il est naturellement doué pour :
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Les sciences exactes et les mathématiques : Là où la rigueur prime sur l&apos;imagination.</li>
            <li>La recherche de longue haleine : C&apos;est le chercheur capable de passer vingt ans sur le même sujet pour atteindre la vérité.</li>
            <li>Les grandes œuvres philosophiques : Il est d&apos;ailleurs impossible de laisser une trace historique majeure dans la pensée scientifique ou philosophique sans une forte dominante saturnienne dans son thème astral.</li>
          </ul>
          <p>
            Son point faible ? Un déficit d&apos;intuition et de fantaisie. Le Saturnien est un pragmatique de la pensée, il a besoin de concret.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Vie Sociale : L&apos;Authenticité sous la Carapace</H2>

        <Card title="La vie sociale">
          <p>
            La première rencontre avec un Saturnien est rarement un coup de foudre amical. Dépourvu du magnétisme solaire ou du charme jovial du Jupitérien, il apparaît souvent d&apos;un abord rude, distant, voire glacial. Il est l&apos;archétype du grand timide qui se protège.
          </p>
          <p>
            Cependant, s&apos;arrêter à cette première impression serait une erreur fatale. Le Saturnien ne se donne pas au premier venu, il se mérite. C&apos;est au fil du temps (l&apos;allié de toujours de Saturne) que sa véritable nature se dévoile. On découvre alors :
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Un ami d&apos;une loyauté inébranlable : Il parle peu, mais chacune de ses paroles est pesée, sensée et inspirée par une observation redoutable de son environnement.</li>
            <li>Un conseiller hors pair : Son jugement est impartial et d&apos;une lucidité implacable.</li>
            <li>Un collaborateur de confiance : S&apos;il fait une promesse, il la tiendra. C&apos;est le pilier sur lequel on peut se reposer quand tout s&apos;effondre. (À condition de lui fournir un cadre de travail structuré, car il déteste improviser).</li>
          </ul>
        </Card>
      </section>

         <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(148,163,184,0.12)] aspect-[7/3]">
        <Image
          src={Saturnien3Image}
          alt="Portrait symbolique du tempérament saturnien en astrologie"
          fill
          priority
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>

      <section className="space-y-6">
        <H2>Amour et Sentiments : Les Défis du Karma Amoureux</H2>

        <Card title="L’amour">
          <p>
            Il faut l&apos;avouer avec honnêteté : dans le domaine sentimental, la signature de Saturne est réputée comme étant l&apos;une des plus austères. Le Saturnien n&apos;est ni un grand romantique, ni un séducteur enflammé. Son langage amoureux n&apos;est pas fait de grandes effusions, mais de fidélité et d&apos;actes concrets.
          </p>
          <p>
            Peu intéressé par le vagabondage affectif, ses aventures de jeunesse sont souvent rares. Cela s&apos;explique par sa nature : il ne recherche pas l&apos;attention, manque de &quot;savoir-faire&quot; en séduction, et cache souvent un complexe d&apos;infériorité paralysant sous son apparente froideur. Il n&apos;est pas rare que le jeune Saturnien soit initié à l&apos;amour par une personne plus âgée ou dotée d&apos;une forte énergie Martienne/Vénusienne, capable de percer sa carapace et de deviner le feu qui couve sous la glace.
          </p>
        </Card>

        <Card title="Le Mariage Saturnien : L’épreuve du temps">
          <p>
            S&apos;il fournit le plus grand contingent de célibataires (souvent par choix ou résignation), le Saturnien finit souvent par se marier, mais tardivement. C&apos;est le signe des &quot;late bloomers&quot; (ceux qui éclosent sur le tard).
          </p>
          <p>
            Si le ciel astrologique est clément, son union sera paisible, sécurisante et d&apos;une solidité à toute épreuve, chacun respectant ses devoirs. Cependant, en cas de dissonances majeures, l&apos;absence de passion verbale peut créer une lente érosion. Il n&apos;est pas rare de voir des unions saturniennes se dissoudre ou se muer en cohabitations tacites après 20 ou 25 ans de mariage, usées par le poids des habitudes.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Destinée et Vocation : L&apos;Ambition Silencieuse</H2>

        <Card title="La vocation">
          <p>
            Sous ses airs modestes et effacés, le Saturnien abrite une ambition colossale. Il ne cherche pas la gloire éphémère, il cherche la pérennité. Son succès est un escalier qu&apos;il gravit marche après marche, sans jamais se laisser décourager par les échecs, la critique ou la lenteur des résultats.
          </p>
          <p>
            La consécration du Saturnien arrive généralement tard, souvent après 50 ou 60 ans (la fameuse période de la deuxième révolution de Saturne). Professionnellement, il excelle dans :
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Les métiers de structure et d&apos;architecture (Bâtiment, ingénierie).</li>
            <li>La gestion de l&apos;ordre et des chiffres (Expert-comptable, notaire, archiviste, bibliothécaire).</li>
            <li>Le lien avec la Terre et le temps (Agriculture, archéologie, géologie).</li>
            <li>L&apos;élévation spirituelle (La prêtrise, la vie monastique).</li>
          </ul>
          <p>
            Note sociale : Dans des destinées plus modestes, l&apos;immense capacité de résilience du Saturnien l&apos;amène souvent à accepter les tâches les plus ingrates que les autres archétypes fuient. C&apos;est le gardien de nuit solitaire, l&apos;égoutier, le terrassier, le soignant en soins palliatifs. Il accomplit ces métiers difficiles avec une conscience professionnelle absolue et une dignité qui forcent le respect.
          </p>
          <p>
            (Attention toutefois à la position de Saturne au Milieu du Ciel : bien qu&apos;elle n&apos;empêche pas une élévation suprême, elle symbolise souvent le risque d&apos;une chute ou d&apos;un revers de fortune à la fin de la vie).
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>La Face Sombre (Quand Saturne est affligé)</H2>

        <Callout tone="warn" title="L’ombre de Saturne">
          <p>
            Comme toute planète d&apos;une telle densité, un Saturne très dissonant dans le thème natal engendre de lourds blocages. L&apos;introversion se transforme en misanthropie, et la sagesse en aigreur.
          </p>
          <p>
            Le &quot;mauvais&quot; Saturnien est un être hargneux, sournois et profondément envieux du bonheur d&apos;autrui. Se croyant maudit ou éternelle victime d&apos;un destin injuste, il ne se remet jamais en question, préférant récriminer contre son entourage professionnel ou familial. Il se complet dans le rôle du rabat-joie. Dans des cas extrêmes (et historiquement documentés par la tradition), ce sentiment d&apos;injustice, couplé à une soif d&apos;isolement, pouvait mener à la rancœur toxique, la médisance calomnieuse, voire, autrefois, à l&apos;attrait pour la magie sombre (la sorcellerie vengeresse).
          </p>
          <p>
            Il faut cependant lui concéder une chose : la fameuse &quot;poisse&quot; saturnienne n&apos;est pas toujours une illusion. Avec des transits difficiles, c&apos;est l&apos;archétype qui encaisse le plus d&apos;échecs immérités.
          </p>
        </Callout>
      </section>

     <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(148,163,184,0.12)] aspect-[7/3]">
        <Image
          src={Saturnien2Image}
          alt="Portrait du Dieu du temps en astrologie"
          fill
          priority
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>

      <section className="space-y-6">
        <H2>L&apos;Expression Yin et Féminine : L&apos;Archétype du Dévouement</H2>

        <Card title="L’expression Yin">
          <p>
            Chez la femme, ou dans un thème dominé par l&apos;énergie Yin, une belle dominante de Saturne donne l&apos;archétype de la Gardienne. Souvent méfiante envers les passions destructrices, ses aventures de jeunesse sont rares. Elle trouvera son épanouissement dans un mariage de raison, souvent tardif, avec un homme mature, rassurant (ou parfois veuf). Elle s&apos;y révélera une maîtresse de maison hors pair, organisée, dont le travail méticuleux assurera la prospérité du foyer.
          </p>
          <p>
            C&apos;est aussi l&apos;archétype de la femme profondément dévouée : celle qui, autrefois, sacrifiait sa propre vie amoureuse pour rester le pilier bienveillant s&apos;occupant de ses parents âgés ou des autres membres de la famille.
          </p>
          <p>
            Si Saturne est &quot;maléficié&quot;, la tradition, par la plume de l&apos;occultiste Péladan, la décrit avec des mots terribles mais psychologiquement justes : &quot;Une figure taciturne et inquiétante, d&apos;une misanthropie qui ne se dément pas [...] envieuse du bonheur d&apos;autrui&quot;. Devenue tyrannique dans l&apos;intimité du foyer, dirigée par l&apos;avarice et une aigreur constante, elle est celle qui jette un froid par sa simple présence, gagnant parfois le triste surnom de &quot;corbeau&quot; de la famille.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>En conclusion</H2>

        <Callout tone="ok" title="Conclusion">
          <p>
            En conclusion : Avoir une forte dominante saturnienne dans son thème astral n&apos;est pas une malédiction, bien au contraire : c&apos;est un diplôme d&apos;excellence karmique. L&apos;univers confie à cette âme le pouvoir de la résilience. Le Saturnien est comme le charbon soumis à une pression extrême : le processus est long, obscur et douloureux, mais il est le seul zodiaque capable, à la fin de sa vie, de se transformer en un diamant pur et indestructible.
          </p>
        </Callout>
      </section>

      <section
        aria-label="Synthèse du portrait saturnien"
        className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm"
      >
        <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
          <div className="p-5 font-serif text-lg font-medium text-white/90">Axe</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Expression</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Risque</div>
        </div>

        <TableRow
          title="Intellect"
          effect="Concentration, profondeur, mémoire durable"
          reading="Lenteur, rigidité, déficit d’intuition"
        />
        <TableRow
          title="Vie sociale"
          effect="Loyauté, sens du devoir, fiabilité"
          reading="Froideur, distance, isolement"
        />
        <TableRow
          title="Amour"
          effect="Fidélité, solidité, engagement tardif"
          reading="Austérité affective, érosion par habitude"
        />
        <TableRow
          title="Vocation"
          effect="Patience, structure, ambition longue"
          reading="Retards, chutes tardives, lourdeur karmique"
        />
      </section>

      <footer className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md sm:p-12">
        <H3>Pour aller plus loin dans les portraits planétaires</H3>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Pill>Saturne</Pill>
          <Pill tone="sky">Portrait astrologique</Pill>
          <Pill tone="violet">Résilience</Pill>
          <Pill tone="emerald">Thème astral</Pill>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/blog/jupiterien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Lire le portrait du Jupitérien
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/blog/uranien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Lire le portrait de l’Uranien
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}