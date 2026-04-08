import type { ReactNode } from "react";
import Link from "next/link";
import { Pill, TagPillsInline, getGlowFromTags } from "./ui";
import Image from "next/image";
import VenusienImage from "@/public/images/blog/venus1.webp";
import VenusienImage2 from "@/public/images/blog/venus2.webp";

export const meta = {
  slug: "venusien",
  title:
    "Le Vénusien : l'Esthète, l'Amant et l'Artisan de la Paix",
  description:
    "Portrait astrologique du Vénusien : charme, amour, beauté, art, harmonie, séduction, Vénus affligée, muse, sirène et morphopsychologie vénusienne dans un thème astral.",
  date: "2026-04-04",
  tags: [
    "Vénus",
    "vénusien",
    "portrait astrologique",
    "amour",
    "beauté",
    "thème astral",
    "psychologie astrologique",
    "séduction",
    "art",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/venus2.webp",
};

function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-rose-300">
      <span
        className="h-1.5 w-1.5 animate-pulse rounded-full bg-rose-300"
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
        className="mr-4 block h-px w-8 bg-gradient-to-r from-rose-400/60 to-transparent"
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
      box: "border-rose-500/30 bg-rose-500/10 shadow-[0_0_30px_rgba(244,114,182,0.05)]",
      icon: "text-rose-300",
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
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-sm transition-all hover:border-rose-300/30">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-300/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
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
    <div className="group grid grid-cols-1 border-b border-white/10 transition-colors hover:bg-rose-300/[0.03] md:grid-cols-3">
      <div className="p-4 font-serif text-lg text-rose-200/90">{title}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{effect}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{reading}</div>
    </div>
  );
}

export default function VenusienPost() {
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
                  name: "Qu’est-ce qu’un Vénusien en astrologie ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Le Vénusien est un type astrologique marqué par Vénus : charme, douceur, beauté, amour, sociabilité, sens artistique, recherche d’harmonie et puissance de séduction.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quels métiers conviennent au Vénusien ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Le Vénusien s’épanouit souvent dans la beauté, la mode, l’hôtellerie, le luxe, les relations publiques, l’événementiel, le chant, le cinéma, la musique, la décoration et tous les métiers où il faut relier, embellir et pacifier.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quel est le risque principal d’une Vénus affligée ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Lorsque Vénus est affligée, la recherche du plaisir peut se transformer en paresse, dépendance affective, dépenses excessives, manipulation par le charme ou hédonisme destructeur.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(244,114,182,0.12)] aspect-[7/3]">
        <Image
          src={VenusienImage}
          alt="Portrait symbolique du tempérament vénusien en astrologie"
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
          className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-rose-300/5 blur-[80px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-rose-300/5 via-transparent to-black/50"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <Kicker>Vénus • beauté • amour • art • harmonie</Kicker>

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
            S&apos;il existe un antidote à la dureté martienne et à l&apos;austérité saturnienne, c&apos;est indéniablement l&apos;énergie de Vénus. Gouverné par l&apos;Étoile du Berger, l&apos;astre de l&apos;Amour, des Arts, de la Beauté et de l&apos;Harmonie (Aphrodite dans la mythologie), le type Vénusien traverse l&apos;existence avec une seule boussole : la quête du plaisir et de la grâce. Loin d&apos;être un simple séducteur superficiel, le Vénusien possède un super-pouvoir indispensable à l&apos;humanité : celui de relier les êtres. Découvrez le portrait psychologique, amoureux et professionnel du charmeur absolu du zodiaque.
          </p>

          <div className="mt-8 border-t border-white/5 pt-6">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-3" aria-label="Points clés du portrait vénusien">
        <Stat label="Force centrale" value="Charme & harmonie" />
        <Stat label="Terrain naturel" value="Amour & beauté" />
        <Stat label="Ombre principale" value="Paresse & hédonisme" />
      </section>

      <section className="space-y-6">
        <H2>L&apos;Intellect du Vénusien : L&apos;Intelligence du Cœur et des Sens</H2>

        <Card title="L’intellect">
          <p>
            La tradition astrologique ancienne a parfois eu la dent dure avec l&apos;intellect du Vénusien, le jugeant léger ou paresseux. Il est temps de rétablir la vérité : le Vénusien n&apos;est pas dépourvu d&apos;intelligence, il possède une intelligence esthétique et émotionnelle.
          </p>
          <p>
            Là où le Saturnien excelle par l&apos;effort et la discipline, le Vénusien fonctionne au &quot;principe de plaisir&quot;. Sur les bancs de l&apos;école, les sciences exactes, l&apos;aridité des hautes mathématiques ou les travaux de longue haleine l&apos;ennuient profondément. Pourquoi ? Parce que pour assimiler une information, le Vénusien a besoin que celle-ci soit belle, harmonieuse ou liée à l&apos;humain.
          </p>
          <p>
            Très tôt, ses études peuvent être &quot;parasitées&quot; par ce qui compte vraiment pour lui : l&apos;art, la musique, et surtout, ses premiers émois amoureux. Le Vénusien est un épicurien de l&apos;esprit. S&apos;il doit fournir un effort intellectuel, il brillera de mille feux dans des domaines créatifs : l&apos;histoire de l&apos;art, la littérature romantique, la musique, le design ou les relations publiques. Il comprend le monde à travers ses sens et ses émotions, ce qui fait de lui un diplomate né, doté d&apos;une finesse psychologique redoutable.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Vie Sociale et Caractère : Le Charmeur Magnétique et Pacifiste</H2>

        <Card title="La vie sociale">
          <p>
            En société, le Vénusien est une bénédiction. Jovial, optimiste, fondamentalement sympathique, il est le ciment qui unit les groupes.
          </p>
          <p>
            La solitude est son pire cauchemar. Il a un besoin vital d&apos;être entouré, d&apos;organiser des réunions, des dîners ou des sorties. Et tout le monde le réclame ! Dès le premier contact, il inspire la sympathie grâce à une aura de douceur et d&apos;indulgence.
          </p>
          <p>
            Le Vénusien a une sainte horreur des conflits. C&apos;est le grand pacifiste du zodiaque. Il déteste les discussions houleuses, les voix qui s&apos;élèvent et les atmosphères tendues. Face à l&apos;agressivité, il ne répondra pas par la violence (comme Mars), mais par le charme, la conciliation, ou au pire, par la fuite. Toujours prêt à rendre service, il pardonne facilement les faiblesses d&apos;autrui car il a lui-même parfaitement conscience des siennes.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Amour et Sentiments : L&apos;Addiction à l&apos;État Amoureux</H2>

        <Card title="L’amour">
          <p>
            Entrons dans le domaine d&apos;excellence du Vénusien : la vie sentimentale. C&apos;est le champion incontesté de l&apos;amour et de la séduction.
          </p>
          <p>
            Le Vénusien ne vit que par et pour l&apos;amour. Dès l&apos;adolescence, ses aventures sont précoces et nombreuses. Il est littéralement intoxiqué par le frisson de la romance. Dès qu&apos;il croise une personne qui répond à son idéal de beauté (physique ou morale), il ne peut s&apos;empêcher d&apos;entrer dans un jeu de séduction, même s&apos;il n&apos;a aucune chance d&apos;aboutir ou si la personne n&apos;est pas libre.
          </p>
          <p>
            Le défi de la fidélité : Le Vénusien est amoureux de l&apos;Amour. De ce fait, s&apos;engager dans une fidélité aveugle et éternelle est son plus grand défi karmique. S&apos;il s&apos;ennuie dans son couple ou s&apos;il se sent négligé, les tentations extérieures (&quot;les coups de canif dans le contrat&quot;) sont fréquentes. Pourtant, la signature vénusienne est insolemment chanceuse : doté d&apos;un tact infini et fuyant les drames, il parvient souvent à préserver son foyer des tempêtes que d&apos;autres signes ne sauraient éviter. S&apos;il trouve très tôt l&apos;épouse ou l&apos;époux de ses rêves — quelqu&apos;un qui sait le rassurer, l&apos;admirer et maintenir la flamme — il deviendra le partenaire le plus tendre et dévoué qui soit.
          </p>
        </Card>
      </section>

       <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(244,114,182,0.12)] aspect-[7/3]">
        <Image
          src={VenusienImage2}
          alt="Portrait de la déesse Vénus en astrologie"
          fill
          priority
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>

      <section className="space-y-6">
        <H2>Destinée et Vocation : L&apos;Artisan de l&apos;Élégance</H2>

        <Card title="La vocation">
          <p>
            Pour que le Vénusien réussisse sa vie professionnelle, il y a une règle d&apos;or : ne jamais le contraindre à des tâches ingrates, sales, violentes ou hyper-compétitives. La dureté du monde des affaires ou la politique politicienne ont tendance à l&apos;écraser.
          </p>
          <p>
            Il lui faut un environnement de travail &quot;propre&quot;, léger, esthétique, ou axé sur le bien-être d&apos;autrui. Il trouvera une réussite brillante et souvent facile (car son réseau relationnel est immense) dans :
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Les métiers de la Beauté et de la Mode : Haute couture, cosmétiques, coiffure, décoration d&apos;intérieur, parfumerie.</li>
            <li>Le lien social : Relations publiques, ressources humaines, agences de voyages, événementiel, hôtellerie de luxe.</li>
            <li>Les Arts et la Scène : La comédie, le cinéma, le chant, la musique. (La quasi-totalité des icônes du cinéma et de la musique possèdent une puissante dominante Vénusienne dans leur thème natal).</li>
          </ul>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>La Face Sombre (Quand Vénus est affligée)</H2>

        <Callout tone="warn" title="L’ombre de Vénus">
          <p>
            Lorsque l&apos;énergie de Vénus est corrompue par de mauvais aspects (notamment avec Saturne, Mars ou Jupiter), la recherche du plaisir se transforme en hédonisme destructeur et en oisiveté.
          </p>
          <p>
            Le Vénusien dissonant glisse dans la facilité absolue. Il devient esclave de ses sens : gourmandise extrême, paresse insurmontable, dépenses compulsives. Dépourvu de volonté, incapable de faire face aux réalités matérielles de la vie, il risque de se transformer en parasite (le &quot;pique-assiette&quot; charmant). Il utilisera alors son plus grand don — son pouvoir de séduction et la flatterie — non plus pour créer de l&apos;harmonie, mais pour manipuler son entourage afin qu&apos;on subvienne à ses besoins, fuyant toute forme d&apos;effort personnel.
          </p>
        </Callout>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>L&apos;Expression Féminine et Yin : De la Muse à la Sirène</H2>

        <Card title="L’expression Yin">
          <p>
            Dans un thème féminin (ou d&apos;énergie Yin), une Vénus harmonieuse donne naissance à l&apos;archétype de la Muse et de l&apos;Épouse Idéale.
          </p>
          <p>
            Douce, aimante et d&apos;un dévouement exquis, elle a le pouvoir de pacifier les caractères les plus rudes. Elle est le cœur battant du foyer, créant autour d&apos;elle un environnement imprégné d&apos;art, de confort et de chaleur. Mais attention, elle fonctionne comme une fleur : sans l&apos;eau quotidienne de l&apos;attention, des compliments et de la tendresse de son partenaire, elle fane... ou se tourne vers le soleil de quelqu&apos;un d&apos;autre.
          </p>
          <p>
            Si Vénus est gravement &quot;maléficiée&quot; (affligée par Pluton ou Mars), elle incarne alors le mythe de la Sirène ou de la Femme Fatale. L&apos;occultiste Péladan la décrivait avec une noirceur poétique : &quot;Courtisane par vocation, elle sait éveiller les sens et s&apos;identifier à eux avec un art prodigieux. C&apos;est elle qu&apos;on aime jusqu&apos;à se tuer.&quot;
          </p>
          <p>
            Psychologiquement, il s&apos;agit d&apos;une personne qui a compris que son pouvoir de séduction est sa seule arme de survie. Elle utilise le désir des autres pour dominer, incapable de s&apos;investir émotionnellement par paresse ou par peur, se laissant enfermer dans le rôle d&apos;un bel objet de désir, souvent au prix de son propre équilibre.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Le Portrait Physique du Vénusien (Morphopsychologie Astrologique)</H2>

        <Card title="Le portrait physique">
          <p>
            Physiquement, le Vénusien est l&apos;incarnation de la grâce, de la symétrie et de la douceur. Le maître mot de sa physionomie est la courbe.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>L&apos;allure générale : Une stature souvent moyenne, mais dotée d&apos;une immense harmonie des proportions. Les formes sont arrondies, souples, parfois légèrement potelées (Vénus aime la bonne chair). La démarche et les gestes sont d&apos;une grâce naturelle, presque dansante.</li>
            <li>Le visage : Un ovale parfait et adouci. Le teint est généralement clair, rosé ou d&apos;une luminosité très douce. Le Vénusien arbore très souvent la fameuse &quot;fossette&quot; au menton ou sur les joues (la marque de fabrique de Vénus).</li>
            <li>Le regard : Des yeux grands, en amande, vivants et souvent humides, encadrés par des cils exceptionnellement longs et épais (les fameux &quot;cils de cinéma&quot;). Le regard n&apos;est jamais perçant, il est caressant, empreint d&apos;une langueur voluptueuse ou d&apos;une tendresse exquise.</li>
            <li>Les détails : Une chevelure abondante, souple, souvent ondulée. Un nez élégant et finement charnu. La bouche est souvent l&apos;atout majeur : petite, dessinée en &quot;arc de Cupidon&quot;, charnue et sensuelle. Enfin, la voix du Vénusien est toujours posée, mélodieuse, comme une musique qui rassure instantanément l&apos;interlocuteur.</li>
          </ul>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>En conclusion</H2>

        <Callout tone="ok" title="Conclusion">
          <p>
            En conclusion : Avoir une forte dominante Vénusienne dans son thème astral est un cadeau du ciel, à condition de ne pas s&apos;endormir sur ses lauriers. Le Vénusien est là pour nous rappeler que la vie ne se résume pas au devoir et à la lutte. Sa véritable mission karmique est spirituelle : injecter de la beauté, de la douceur et de l&apos;amour dans un monde qui en manque cruellement, et prouver que la paix est toujours la plus grande des victoires.
          </p>
        </Callout>
      </section>

      <section
        aria-label="Synthèse du portrait vénusien"
        className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm"
      >
        <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
          <div className="p-5 font-serif text-lg font-medium text-white/90">Axe</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Expression</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Risque</div>
        </div>

        <TableRow
          title="Intellect"
          effect="Intelligence esthétique, émotionnelle, diplomatique"
          reading="Refus de l’effort aride, distraction par le plaisir"
        />
        <TableRow
          title="Vie sociale"
          effect="Charme, pacifisme, lien, indulgence"
          reading="Fuite du conflit, dépendance à l’approbation"
        />
        <TableRow
          title="Amour"
          effect="Séduction, tendresse, romantisme, flamme"
          reading="Infidélité, addiction à l’état amoureux, tentations"
        />
        <TableRow
          title="Vocation"
          effect="Beauté, luxe, art, relations, hôtellerie"
          reading="Paresse, manipulation douce, parasite séduisant"
        />
      </section>

      <footer className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md sm:p-12">
        <H3>Pour aller plus loin dans les portraits planétaires</H3>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Pill>Vénus</Pill>
          <Pill tone="sky">Portrait astrologique</Pill>
          <Pill tone="violet">Amour</Pill>
          <Pill tone="emerald">Thème astral</Pill>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/blog/plutonien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Lire le portrait du Plutonien
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/blog/lunarien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Lire le portrait du Lunarien
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}