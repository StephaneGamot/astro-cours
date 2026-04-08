import type { ReactNode } from "react";
import Link from "next/link";
import { Pill, TagPillsInline, getGlowFromTags } from "./ui";
import Image from "next/image";
import LunarienImage from "@/public/images/blog/lunarien.webp";
import Lunarien2Image from "@/public/images/blog/lunarien2.webp";
import Lunarien3Image from "@/public/images/blog/lunarien3.webp";

export const meta = {
  slug: "lunarien",
  title:
    "Lunarien : Le Rêveur, Gardien de la Mémoire et de l'Intuition",
  description:
    "Portrait astrologique du Lunarien : mémoire, imagination, intuition, foyer, douceur, Lune affligée, vocation, amour, archétype maternel et morphopsychologie lunaire dans un thème astral.",
  date: "2026-04-06",
  tags: [
    "Lune",
    "lunarien",
    "portrait astrologique",
    "intuition",
    "mémoire",
    "thème astral",
    "psychologie astrologique",
    "foyer",
    "amour",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/lunarien.webp",
};

function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-200">
      <span
        className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-200"
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
        className="mr-4 block h-px w-8 bg-gradient-to-r from-sky-300/60 to-transparent"
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
      box: "border-sky-400/30 bg-sky-400/10 shadow-[0_0_30px_rgba(125,211,252,0.05)]",
      icon: "text-sky-200",
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
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-sm transition-all hover:border-sky-200/30">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-200/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
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
    <div className="group grid grid-cols-1 border-b border-white/10 transition-colors hover:bg-sky-200/[0.03] md:grid-cols-3">
      <div className="p-4 font-serif text-lg text-sky-100/90">{title}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{effect}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{reading}</div>
    </div>
  );
}

export default function LunarienPost() {
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
                  name: "Qu’est-ce qu’un Lunarien en astrologie ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Le Lunarien est un type astrologique marqué par la Lune : mémoire, imagination, réceptivité, douceur, besoin de foyer, sensibilité profonde et vie intérieure très mouvante.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quels métiers conviennent au Lunarien ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Le Lunarien se sent souvent appelé vers la littérature, l’histoire, le récit, l’enfance, le soin, l’hôtellerie, le travail social, l’enseignement ou les métiers liés à l’eau et à la vie intérieure.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quel est le risque principal d’une Lune affligée ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Lorsque la Lune est très affligée, la sensibilité peut se transformer en passivité, fuite du réel, alcoolisation, dépendance affective, faiblesse de volonté ou instabilité chronique.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(125,211,252,0.12)] aspect-[7/3]">
        <Image
          src={LunarienImage}
          alt="Portrait symbolique du tempérament lunarien en astrologie"
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
          className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-sky-200/5 blur-[80px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-200/5 via-transparent to-black/50"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <Kicker>Lune • mémoire • intuition • foyer • douceur</Kicker>

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
            Dans le tumulte de la vie moderne, où l&apos;action et la vitesse (Mars, Mercure) sont portées aux nues, le Lunarien navigue à contre-courant, porté par la marée de ses émotions. Gouverné par la Lune — l&apos;astre de la nuit, de l&apos;inconscient, de l&apos;enfance et de la maternité — le type Lunarien est un être profondément poétique, réceptif et changeant. Découvrez le portrait psychologique, amoureux et morphologique de l&apos;archétype le plus doux, insaisissable et attachant du zodiaque.
          </p>

          <div className="mt-8 border-t border-white/5 pt-6">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-3" aria-label="Points clés du portrait lunarien">
        <Stat label="Force centrale" value="Mémoire & sensibilité" />
        <Stat label="Terrain naturel" value="Foyer & imagination" />
        <Stat label="Ombre principale" value="Passivité & fuite" />
      </section>

      <section className="space-y-6">
        <H2>L&apos;Intellect du Lunarien : La Magie de la Mémoire et de l&apos;Imagination</H2>

        <Card title="L’intellect">
          <p>
            L&apos;intellect du Lunarien ne fonctionne ni par la déduction mathématique (Saturne), ni par la fulgurance logique (Mercure). Son esprit est une immense bibliothèque d&apos;impressions. Ses facultés maîtresses sont l&apos;inspiration, l&apos;imagination, l&apos;intuition et, par-dessus tout, une mémoire absolument exceptionnelle.
          </p>
          <p>
            Le Lunarien n&apos;est généralement pas un assoiffé de connaissances pures. Il n&apos;aime pas &quot;forcer&quot; son esprit. Cependant, il assimile les choses sans effort apparent, car tout ce qui le touche émotionnellement s&apos;imprime en lui pour toujours. C&apos;est l&apos;étudiant capable de sauver son année scolaire grâce à sa capacité inouïe d&apos;apprendre par cœur, compensant ainsi un certain manque d&apos;ardeur ou de ponctualité.
          </p>
          <p>
            L&apos;esprit du Lunarien est fondamentalement contemplatif et tourné vers le passé (en analogie directe avec le signe du Cancer). De ce fait, les froides mathématiques ou les sciences dures le rebutent souvent. Il brillera, en revanche, de mille feux dans :
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>La Littérature et la Poésie : Où son âme rêveuse peut s&apos;épancher librement.</li>
            <li>L&apos;Histoire : Rien ne fascine plus un Lunarien que de plonger dans les souvenirs de l&apos;humanité, l&apos;archéologie, la généalogie ou la sauvegarde du patrimoine.</li>
            <li>Le Journalisme ou la Narration : Partout où il faut faire appel à la sensibilité et au récit de vie.</li>
          </ul>
        </Card>
      </section>

      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(125,211,252,0.12)] aspect-[7/3]">
        <Image
          src={Lunarien2Image}
          alt="Portrait de Selene des temps moderne"
          fill
          priority
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>

      <section className="space-y-6">
        <H2>Vie Sociale et Tempérament : L&apos;Éponge Émotionnelle</H2>

        <Card title="La vie sociale">
          <p>
            Le Lunarien est l&apos;incarnation de la douceur. Sensible, impressionnable, souvent timide et profondément pacifiste, il fuit les discussions animées, les luttes d&apos;ego et les conflits. Son besoin primordial est le calme, la sécurité et la tranquillité.
          </p>
          <p>
            C&apos;est une véritable &quot;éponge émotionnelle&quot;. Dans sa jeunesse, il est essentiel de veiller à son entourage, car il absorbe littéralement l&apos;énergie, les habitudes et parfois même la moralité des personnes qu&apos;il fréquente. Le Lunarien est très modelable : l&apos;empreinte qu&apos;il reçoit de sa famille et de son milieu d&apos;origine conditionne souvent la totalité de sa vie d&apos;adulte.
          </p>
          <p>
            En société, il est très apprécié pour son caractère conciliant. Toutefois, ses relations peuvent parfois être déconcertées par son côté cyclique et lunatique. À l&apos;image des phases de la Lune, son humeur est perpétuellement changeante. Il peut promettre des choses avec un enthousiasme sincère un jour, et &quot;oublier&quot; le lendemain, non par méchanceté, mais par pure négligence ou laisser-aller rêveur. Pourtant, on lui pardonne toujours, tant sa bienveillance naturelle est évidente.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Amour et Sentiments : Le Culte du Foyer</H2>

        <Card title="L’amour">
          <p>
            Dans le domaine sentimental, la vie du Lunarien s&apos;articule autour d&apos;un seul mot : Le Foyer. L&apos;aventure sans lendemain ne l&apos;intéresse pas ; il a soif d&apos;un nid douillet, protecteur et rassurant.
          </p>
          <p>
            Toutefois, sa timidité et son indécision peuvent parfois ralentir la concrétisation de ses amours. Particulièrement attaché à ses racines, il n&apos;est pas rare de voir un Lunarien retarder volontairement son propre mariage par loyauté envers sa famille d&apos;origine (pour s&apos;occuper d&apos;un parent vieillissant, par exemple).
          </p>
          <p>
            Une fois marié, il est l&apos;un des archétypes les plus fidèles du zodiaque. Bienveillant et casanier, il évite les disputes à tout prix. D&apos;ailleurs, avec l&apos;influence de Jupiter, la signature de la Lune enregistre le plus bas taux de divorces en astrologie. S&apos;il y a des tensions conjugales, le Lunarien s&apos;adaptera, courbera l&apos;échine ou se sacrifiera pour ne pas briser le foyer, et surtout pour protéger le bien-être émotionnel de ses enfants, qui seront toujours l&apos;amour absolu de sa vie.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Destinée et Vocation : De la Discrétion à la Faveur des Foules</H2>

        <Card title="La vocation">
          <p>
            La destinée du Lunarien est intimement liée aux rythmes cosmiques (on observe souvent des tournants de vie majeurs liés aux cycles d&apos;environ 28 ans). Professionnellement, il ne supporte pas les ambiances ultra-compétitives. Il lui faut un métier qui ne violente pas sa nature.
          </p>
          <p>
            Il privilégiera souvent des voies sécurisantes : la reprise d&apos;une entreprise familiale, l&apos;enseignement, le travail social, les métiers de la petite enfance (crèche, éducation), l&apos;hôtellerie, ou des professions liées à son élément de prédilection : l&apos;Eau (marins, pêcheurs, océanographes, ou simplement une vie axée autour d&apos;une résidence près d&apos;un point d&apos;eau).
          </p>
          <p>
            Mais attention : l&apos;écart social peut être immense chez les Lunariens. Si la plupart s&apos;épanouissent dans des vies simples et modestes, un thème astral puissamment lunarien (soutenu par le Soleil ou Jupiter) peut propulser l&apos;individu vers une gloire inouïe. La Lune représente &quot;la Foule&quot; et &quot;l&apos;Inconscient collectif&quot;. Un grand Lunarien (acteur de comédie, écrivain, politicien) possède le don magique de captiver la bienveillance des masses. C&apos;est d&apos;ailleurs un indice de victoire redoutable en astrologie politique.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>La Face Sombre (Quand la Lune est affligée)</H2>

        <Callout tone="warn" title="L’ombre de la Lune">
          <p>
            Lorsque la Lune est très mal aspectée dans le thème natal (notamment par des dissonances avec Saturne), la sensibilité devient faiblesse, et le rêve devient fuite.
          </p>
          <p>
            Le Lunarien maléficié est l&apos;archétype du velléitaire paresseux. Incapable de maintenir une ligne de conduite, indécis à l&apos;extrême, il ne finit jamais ce qu&apos;il commence. Sans appui extérieur, il risque de végéter dans l&apos;obscurité, se laissant totalement porter par son partenaire de vie qui devra assumer seule toutes les responsabilités (mener la barque financière et administrative).
          </p>
          <p>
            Pour fuir la dureté du monde réel qu&apos;il ne supporte pas, ce type dissonant peut développer un fort penchant pour l&apos;évasion toxique (notamment l&apos;alcoolisme). La tradition astrologique remarque que dans les destinées très marginales ou chez les &quot;clochards célestes&quot;, la dissonance Saturne-Lune est souvent prédominante, symbolisant un individu écrasé par la réalité et réfugié dans la passivité totale.
          </p>
        </Callout>
      </section>

    <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(125,211,252,0.12)] aspect-[7/3]">
        <Image
          src={Lunarien3Image}
          alt="Statut de Selene dans la mythologie grecque"
          fill
          priority
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>

      <section className="space-y-6">
        <H2>L&apos;Expression Féminine et Yin : L&apos;Archétype Maternel et Poétique</H2>

        <Card title="L’expression Yin">
          <p>
            Dans un thème féminin (ou d&apos;énergie Yin), une belle Lune est considérée par l&apos;astrologie traditionnelle comme la position la plus naturelle et la plus douce. C&apos;est la Mère et l&apos;Épouse par excellence : dévouée, protectrice, capable de transformer n&apos;importe quel lieu en un cocon douillet (le fameux &quot;hygge&quot; est un concept profondément lunaire).
          </p>
          <p>
            Les auteurs anciens affirment que &quot;toute femme est d&apos;abord sous l&apos;influence de la Lune&quot;, tant l&apos;archétype féminin ancestral y est lié. C&apos;est la muse poétique qui, par sa seule présence apaisante, guérit les angoisses de son entourage.
          </p>
          <p>
            Si la Lune est très dissonante, cette même énergie se retourne. L&apos;imagination devient chimérique, voire paranoïaque. La douceur devient commérage. Elle peut alors devenir paresseuse, médisante, envieuse de la vie d&apos;autrui, fuyant ses responsabilités familiales et se complaisant dans le rôle de l&apos;éternelle victime incomprise.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Le Portrait Physique du Lunarien (Morphopsychologie Astrologique)</H2>

        <Card title="Le portrait physique">
          <p>
            La typologie physique du Lunarien est dominée par une seule forme géométrique : la rondeur et la courbe. Le corps physique traduit la douceur de l&apos;âme.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>L&apos;allure générale : Des formes douces, pleines, parfois potelées (&quot;à la Van Loo&quot;). Le Lunarien prend facilement du poids, l&apos;eau et les émotions ayant tendance à stagner dans son organisme.</li>
            <li>Le visage : Un &quot;rond franc&quot;, souvent lunaire. Un crâne arrondi sans angles durs. Le teint est généralement très clair, laiteux ou pâle, craignant le soleil brûlant.</li>
            <li>Le regard : Des grands yeux, souvent ronds ou légèrement globuleux, très humides, donnant une expression constante d&apos;étonnement, de douceur, voire d&apos;enfance prolongée. L&apos;arcade sourcilière décrit une courbe parfaite.</li>
            <li>Les détails : Un front bombé et lisse. Un nez large, court, parfois retroussé ou creusé en son milieu. Une bouche forte et lippue aux teintes pâles, et un menton arrondi qui fond doucement dans l&apos;ovale du visage.</li>
          </ul>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>En conclusion</H2>

        <Callout tone="ok" title="Conclusion">
          <p>
            En conclusion : Dans une société obsédée par la performance, le Lunarien est le gardien de notre humanité et de notre part d&apos;enfance. Avoir une forte dominante Lunaire dans son thème, c&apos;est posséder le don rare de savoir s&apos;émerveiller, de chérir le passé et d&apos;offrir au monde un refuge. Le seul grand défi du Lunarien ? Apprendre à se forger une carapace suffisante pour protéger son extrême sensibilité sans jamais cesser de rêver.
          </p>
        </Callout>
      </section>

      <section
        aria-label="Synthèse du portrait lunarien"
        className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm"
      >
        <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
          <div className="p-5 font-serif text-lg font-medium text-white/90">Axe</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Expression</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Risque</div>
        </div>

        <TableRow
          title="Intellect"
          effect="Mémoire, imagination, inspiration, récit"
          reading="Manque d’effort intellectuel ou fuite des cadres rigides"
        />
        <TableRow
          title="Vie sociale"
          effect="Douceur, réceptivité, conciliation"
          reading="Labilité, influence excessive du milieu"
        />
        <TableRow
          title="Amour"
          effect="Fidélité, foyer, protection, enfants"
          reading="Sacrifice, dépendance, effacement"
        />
        <TableRow
          title="Vocation"
          effect="Éducation, soin, hôtellerie, eau, foule"
          reading="Passivité, alcoolisation, incapacité à tenir seul"
        />
      </section>

      <footer className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md sm:p-12">
        <H3>Pour aller plus loin dans les portraits planétaires</H3>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Pill>Lune</Pill>
          <Pill tone="sky">Portrait astrologique</Pill>
          <Pill tone="violet">Intuition</Pill>
          <Pill tone="emerald">Thème astral</Pill>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/blog/solarien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Lire le portrait du Solarien
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/blog/mercurien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Lire le portrait du Mercurien
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}