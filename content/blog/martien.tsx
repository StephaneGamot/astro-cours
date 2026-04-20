import type { ReactNode } from "react";
import Link from "next/link";
import { Pill, TagPillsInline, getGlowFromTags } from "./ui";
import Image from "next/image";
import MartienImage from "@/public/images/blog/martien.webp";
import Martien2Image from "@/public/images/blog/martien2.webp";

export const meta = {
  slug: "martien",
  title:
    "Martien : Guerrier, Bâtisseur de l'Action & du Courage",
  description:
    "Portrait astrologique du Martien : action, courage, combativité, amour passionné, vocation, chirurgie, sport, Mars affligé, Amazone & la martienne dans un thème astral.",
  date: "2026-04-03",
  tags: [
    "Mars",
    "martien",
    "portrait astrologique",
    "courage",
    "action",
    "thème astral",
    "psychologie astrologique",
    "vocation",
    "amour",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/martien.webp",
};

function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-300">
      <span
        className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-300"
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
        className="mr-4 block h-px w-8 bg-gradient-to-r from-red-400/60 to-transparent"
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
      box: "border-red-500/30 bg-red-500/10 shadow-[0_0_30px_rgba(239,68,68,0.06)]",
      icon: "text-red-300",
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
      box: "border-red-400/25 bg-red-400/10 shadow-[0_0_30px_rgba(248,113,113,0.05)]",
      icon: "text-red-200",
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
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-sm transition-all hover:border-red-300/30">
      <div className="absolute inset-0 bg-gradient-to-br from-red-300/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
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
    <div className="group grid grid-cols-1 border-b border-white/10 transition-colors hover:bg-red-300/[0.03] md:grid-cols-3">
      <div className="p-4 font-serif text-lg text-red-200/90">{title}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{effect}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{reading}</div>
    </div>
  );
}

export default function MartienPost() {
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
                  name: "Qu’est-ce qu’un Martien en astrologie ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Le Martien est un type astrologique marqué par Mars : action, combativité, courage, décision, pragmatisme, énergie physique et besoin d’aller droit au but.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quels métiers conviennent au Martien ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Le Martien s’épanouit souvent dans la chirurgie, le sport, le commandement, l’ingénierie, la métallurgie, l’entreprise, les métiers d’urgence ou toutes les activités demandant force, tranchant et décision.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quel est le risque principal d’un Mars affligé ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Lorsque Mars est très affligé, le courage peut se transformer en brutalité, témérité, querelle permanente, violence, besoin d’opposition ou problèmes légaux.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(248,113,113,0.12)] aspect-[7/3]">
        <Image
          src={MartienImage}
          alt="Portrait symbolique du tempérament martien en astrologie"
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
          className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-red-300/5 blur-[80px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-red-300/5 via-transparent to-black/50"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <Kicker>Mars • action • courage • combat • décision</Kicker>

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
            Dans la grande horlogerie de l&apos;astrologie, si le Soleil donne la vie et Saturne donne le temps, Mars donne l&apos;Étincelle. Gouverné par la planète rouge — traditionnellement associée au Dieu de la Guerre — le type Martien est l&apos;archétype absolu de l&apos;Action. Loin des clichés qui le réduisent à un simple bagarreur, le véritable Martien est le moteur du zodiaque, le pionnier sans qui aucune entreprise humaine ne pourrait voir le jour. Découvrez le portrait psychologique, professionnel et amoureux de cette âme ardente et indomptable.
          </p>

          <div className="mt-8 border-t border-white/5 pt-6">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-3" aria-label="Points clés du portrait martien">
        <Stat label="Force centrale" value="Action & courage" />
        <Stat label="Terrain naturel" value="Décision & combat" />
        <Stat label="Ombre principale" value="Brutalité & témérité" />
      </section>

      <section className="space-y-6">
        <H2>L&apos;Essence du Martien : Au-delà du Mythe de la Guerre</H2>

        <Card title="L’essence">
          <p>
            Avant de dresser son portrait, il est fondamental de tordre le cou à une idée reçue tenace. La tradition astrologique a longtemps réduit Mars à la guerre, à la destruction et aux conflits militaires. Pourtant, des études astrologiques statistiques (notamment celles de Michel Gauquelin ou d&apos;André Barbault) ont démontré une réalité fascinante : si Mars est bien présent chez les grands militaires, il est tout aussi dominant chez les sportifs de haut niveau, les grands chirurgiens et les chefs d&apos;entreprise.
          </p>
          <p>
            La véritable essence de Mars n&apos;est donc pas la destruction, mais la Combativité, la Décision et l&apos;Action pure. Pour être un bon chirurgien, il faut l&apos;audace de trancher la chair pour sauver une vie. Pour être un grand sportif, il faut la rage de vaincre. Le Martien est avant tout l&apos;homme ou la femme qui refuse la stagnation.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>L&apos;Intellect du Martien : Le Pragmatisme de l&apos;Efficacité</H2>

        <Card title="L’intellect">
          <p>
            L&apos;intellect du Martien ne s&apos;embarrasse d&apos;aucune fioriture. S&apos;il n&apos;a pas la vivacité insouciante du Mercurien ni la longue patience du Saturnien, le Martien possède une qualité intellectuelle redoutable : le Pragmatisme absolu.
          </p>
          <p>
            Son esprit est orienté vers les données positives, tangibles et immédiatement applicables dans la vie courante. Lorsqu&apos;il étudie un sujet, il opère un tri automatique et instinctif : il ne retient que ce qui est utile à la réalisation de ses objectifs. Les grandes théories nébuleuses l&apos;ennuient.
          </p>
          <p>
            S&apos;il s&apos;intéresse à des domaines plus ésotériques ou abstraits (comme l&apos;astrologie ou la philosophie), ce ne sera jamais par simple curiosité intellectuelle, mais toujours avec une question en tête : &quot;Comment puis-je utiliser cela pour mieux diriger ma vie ou atteindre mes buts ?&quot;
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Vie Sociale et Caractère : La Franchise à l&apos;État Pur</H2>

        <Card title="La vie sociale">
          <p>
            Dans ses relations avec autrui, le Martien est un être entier, direct et spontané. Avec lui, vous savez toujours à quoi vous en tenir. Sa franchise est totale, parfois même trop brusque, car il déteste l&apos;hypocrisie, les sous-entendus et les mondanités.
          </p>
          <p>
            C&apos;est un tempérament fondamentalement &quot;Rapide&quot;. S&apos;il y a un problème à résoudre, le Martien ne tergiverse pas : il retrousse ses manches. C&apos;est l&apos;ami serviable et loyal par excellence, celui que l&apos;on appelle en pleine nuit quand tout s&apos;effondre, car il ne ménagera jamais sa peine.
          </p>
          <p>
            Son point faible ? L&apos;impatience et la colère. S&apos;il est attaqué ou critiqué injustement, le Martien explose. Ses colères sont impétueuses, volcaniques, et ses mots peuvent être d&apos;une agressivité percutante. Cependant, à la différence du Plutonien ou du Saturnien, le Martien n&apos;est pas rancunier. Une fois l&apos;orage passé et le combat terminé (toujours mené à la loyale si son Mars est bien aspecté), il passe à autre chose, l&apos;esprit léger.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Amour et Sentiments : Le Feu de la Conquête</H2>

        <Card title="L’amour">
          <p>
            La vie amoureuse du Martien est à l&apos;image de son tempérament : impétueuse, rapide et brûlante. Il est bien plus charnel et passionné que sentimental.
          </p>
          <p>
            En amour, il ne passe pas par quatre chemins. S&apos;il désire quelqu&apos;un, il ira franchement au but, assumant pleinement ses envies. Cette ardeur, cette confiance en soi et cette force vitale constituent d&apos;ailleurs ses meilleurs atouts de séduction. Il se soucie très peu du &quot;qu&apos;en-dira-t-on&quot; ou des conventions sociales.
          </p>
          <p>
            En couple, il a besoin que les choses avancent vite. C&apos;est souvent lui qui prend les décisions majeures (le mariage, l&apos;achat d&apos;une maison) sans hésiter. S&apos;il fonde une famille, il en sera le chef naturel, incarnant une autorité protectrice.
          </p>
          <p>
            Pour que son couple dure, il est idéal qu&apos;il s&apos;unisse à un partenaire possédant une forte dominante Lunaire (pour la douceur) ou Vénusienne (pour la diplomatie). Ces profils seront naturellement admiratifs de la force du Martien, et en retour, le Martien — souvent épuisé par ses batailles professionnelles — trouvera au foyer le seul havre de paix où il acceptera de déposer les armes et de se montrer d&apos;une immense tendresse.
          </p>
        </Card>
      </section>

    <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(248,113,113,0.12)] aspect-[7/3]">
        <Image
          src={Martien2Image}
          alt="Portrait du Dieu Ares, Dieu de la guerre en astrologie"
          fill
          priority
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>

      <section className="space-y-6">
        <H2>Destinée et Vocation : Le Héros Face à l&apos;Obstacle</H2>

        <Card title="La vocation">
          <p>
            Ne nous y trompons pas : la destinée du Martien n&apos;est jamais un long fleuve tranquille. Contrairement à Jupiter ou Vénus, Mars n&apos;est pas une &quot;planète de chance&quot;. Le Martien n&apos;obtient rien par hasard ; tout ce qu&apos;il possède, il l&apos;a gagné à la sueur de son front, par un travail acharné et d&apos;innombrables combats.
          </p>
          <p>
            Heureusement, là où d&apos;autres signes baisseraient les bras face à l&apos;adversité, le Martien s&apos;embrase. L&apos;obstacle est son meilleur stimulant. Il possède une audace, un courage et une résilience qui forcent le respect absolu.
          </p>
          <p>
            Professionnellement, le monde moderne ne lui offre plus guère de champs de bataille épiques (sauf dans les carrières militaires). Le Martien d&apos;aujourd&apos;hui trouvera donc l&apos;exutoire de sa puissante énergie dans des métiers nécessitant décision, force, ou usage d&apos;instruments tranchants et métalliques :
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Le milieu médical : Chirurgiens, dentistes, urgentistes.</li>
            <li>Le commandement : Chefs d&apos;entreprise, directeurs de travaux, entrepreneurs indépendants.</li>
            <li>La matière dure : Ingénieurs, sculpteurs, artisans de la métallurgie, mécaniciens de génie.</li>
            <li>Le corps physique : Sportifs professionnels, pompiers, cascadeurs.</li>
          </ul>
          <p>
            S&apos;il subit un revers de fortune ou un licenciement (souvent dû à un coup de tête ou à un acte de témérité impatiente), il se relèvera toujours. Sa vitalité est indestructible.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>La Face Sombre (Quand Mars est affligé)</H2>

        <Callout tone="warn" title="L’ombre de Mars">
          <p>
            Lorsque Mars est gravement dissonant dans le thème natal (par de mauvais aspects avec Saturne, Uranus ou Pluton), l&apos;énergie vitale se corrompt. Le courage devient témérité aveugle, et la franchise se mue en brutalité.
          </p>
          <p>
            Le &quot;mauvais&quot; Martien est un être dangereux pour lui-même et pour les autres. Dépourvu de la noblesse du vrai guerrier, il devient un querelleur perpétuel, incapable de la moindre diplomatie. Dénué de sens moral, il peut être tenté d&apos;obtenir par la force, l&apos;intimidation ou la violence ce que les autres obtiennent par le travail.
          </p>
          <p>
            C&apos;est l&apos;archétype du contestataire hargneux, de la &quot;tête brûlée&quot; qui sème le désordre dans sa famille ou son entreprise par pur besoin d&apos;opposition, finissant souvent par s&apos;isoler totalement ou attirer sur lui de lourds problèmes légaux.
          </p>
        </Callout>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>L&apos;Expression Féminine et Yin : L&apos;Archétype de l&apos;Amazone</H2>

        <Card title="L’expression Yin">
          <p>
            La Martienne harmonique est l&apos;une des figures les plus fascinantes du zodiaque. C&apos;est la Femme Puissante, l&apos;Amazone moderne, l&apos;entrepreneuse indomptable.
          </p>
          <p>
            Dotée d&apos;un courage à toute épreuve, elle est capable de soulever des montagnes. Si le destin lui impose des épreuves (veuvage, séparation, crise financière), elle fera face à toutes ses obligations familiales sans jamais s&apos;apitoyer sur son sort. En amour, c&apos;est une partenaire de vie exceptionnelle : elle ne reste pas dans l&apos;ombre de son époux, elle le stimule, l&apos;encourage, voire le &quot;booste&quot; dans les moments de doute. On dit souvent d&apos;elle que &quot;c&apos;est la femme qui saurait sauver l&apos;équipage sur le radeau de la Méduse&quot;.
          </p>
          <p>
            Si Mars est très dissonant dans son thème, la cohabitation devient un enfer. La combativité se transforme en jalousie agressive et en disputes continuelles. Injuste, brutale dans ses paroles, rejetant toute forme de douceur qu&apos;elle juge comme de la faiblesse, elle devient incapable de sociabilité. Ses histoires d&apos;amour sont souvent des champs de ruines, et elle risque de s&apos;épuiser dans des combats vains toute sa vie.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Le Portrait Physique du Martien (Morphopsychologie Astrologique)</H2>

        <Card title="Le portrait physique">
          <p>
            Physiquement, le Martien dégage une impression immédiate de puissance, de densité et de nervosité. Le corps est littéralement taillé pour l&apos;action :
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>L&apos;allure générale : Une carnation qui met en valeur la masse musculaire, même au repos. Le torse est souvent plus long que les cuisses, avec des pectoraux saillants. L&apos;ensemble donne une sensation d&apos;ancrage fort, prêt à bondir. La stature est souvent au-dessus de la moyenne.</li>
            <li>Le visage : Il dégage une impression d&apos;angularité. Le teint est vif, sanguin, et rougit facilement sous le coup de l&apos;émotion. Le menton est carré, volontaire, symbole d&apos;entêtement.</li>
            <li>Le regard : Les yeux sont foncés, largement ouverts. Mais ce qui marque le plus chez le Martien, c&apos;est sa fixité : lorsqu&apos;il écoute ou lorsqu&apos;il affronte, il soutient le regard avec une intensité audacieuse, parfois dure et agressive, sous des sourcils épais et arqués.</li>
            <li>Les détails : Le port de tête est souvent rejeté en arrière, fier et altier. Le nez est fort (parfois aquilin) avec des narines larges et dilatées par le souffle de l&apos;action. La voix est forte, rude, parfois rocailleuse. Ses gestes sont toujours décidés, amples, que certains astrologues qualifient avec humour de &quot;gestes dévastateurs&quot; tant il prend d&apos;espace en s&apos;exprimant.</li>
          </ul>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>En conclusion</H2>

        <Callout tone="ok" title="Conclusion">
          <p>
            En conclusion : Avoir une forte dominante Martienne dans son thème astral est un appel à l&apos;héroïsme au quotidien. Le Martien est le Feu sacré de l&apos;humanité. Sans lui, aucune conquête n&apos;aurait été possible, aucune injustice ne serait combattue, aucune pierre ne serait soulevée. Le seul grand devoir karmique du Martien ? Apprendre à maîtriser son épée, pour ne trancher que ce qui doit l&apos;être, et protéger ce qui doit l&apos;être.
          </p>
        </Callout>
      </section>

      <section
        aria-label="Synthèse du portrait martien"
        className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm"
      >
        <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
          <div className="p-5 font-serif text-lg font-medium text-white/90">Axe</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Expression</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Risque</div>
        </div>

        <TableRow
          title="Essence"
          effect="Combativité, décision, action pure"
          reading="Destruction ou opposition si Mars est mal intégré"
        />
        <TableRow
          title="Vie sociale"
          effect="Franchise, loyauté, réaction rapide"
          reading="Impatience, colères, brutalité verbale"
        />
        <TableRow
          title="Amour"
          effect="Conquête, feu, autorité protectrice"
          reading="Domination, précipitation, manque de délicatesse"
        />
        <TableRow
          title="Vocation"
          effect="Chirurgie, sport, commandement, métal"
          reading="Licenciements, conflits, problèmes légaux"
        />
      </section>

      <footer className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md sm:p-12">
        <H3>Pour aller plus loin dans les portraits planétaires</H3>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Pill>Mars</Pill>
          <Pill tone="sky">Portrait astrologique</Pill>
          <Pill tone="violet">Action</Pill>
          <Pill tone="emerald">Thème astral</Pill>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/blog/venusien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Lire le portrait du Vénusien
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/blog/jupiterien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Lire le portrait du Jupiterien
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}