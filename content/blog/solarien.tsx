import type { ReactNode } from "react";
import Link from "next/link";
import { Pill, TagPillsInline, getGlowFromTags } from "./ui";
import Image from "next/image";
import SolarienImage from "@/public/images/blog/solarien.webp";
import Solarien2Image from "@/public/images/blog/solarien2.webp";
import Solarien3Image from "@/public/images/blog/solarien3.webp";

export const meta = {
  slug: "solarien",
  title:
    "Solarien : le Souverain, Maître de la Lumière",
  description:
    "Portrait astrologique du Solarien : génie, rayonnement, charisme, pouvoir, vocation, amour, grandeur, chute, la dominante solaire dans un thème astral.",
  date: "2026-04-07",
  tags: [
    "Soleil",
    "solarien",
    "portrait astrologique",
    "charisme",
    "pouvoir",
    "thème astral",
    "psychologie astrologique",
    "vocation",
    "amour",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/solarien.webp",
};

function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-300">
      <span
        className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-300"
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
        className="mr-4 block h-px w-8 bg-gradient-to-r from-amber-400/60 to-transparent"
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
      box: "border-red-500/25 bg-red-500/10 shadow-[0_0_30px_rgba(239,68,68,0.05)]",
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
      box: "border-amber-500/30 bg-amber-500/10 shadow-[0_0_30px_rgba(245,158,11,0.05)]",
      icon: "text-amber-300",
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
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-sm transition-all hover:border-amber-300/30">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-300/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
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
    <div className="group grid grid-cols-1 border-b border-white/10 transition-colors hover:bg-amber-300/[0.03] md:grid-cols-3">
      <div className="p-4 font-serif text-lg text-amber-200/90">{title}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{effect}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{reading}</div>
    </div>
  );
}

export default function SolarienPost() {
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
                  name: "Qu’est-ce qu’un Solarien en astrologie ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Le Solarien est un type astrologique marqué par le Soleil : rayonnement, synthèse, autorité naturelle, excellence, magnétisme, leadership et vocation d’élévation.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quels métiers conviennent au Solarien ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Le Solarien se sent particulièrement appelé vers le pouvoir, la direction, la haute stratégie, la magistrature, les grandes responsabilités et certains arts majeurs où l’ampleur et la noblesse sont requises.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quel est le risque principal d’un Soleil affligé ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Lorsque le Soleil est lourdement affligé, la grandeur d’âme peut se déformer en mégalomanie, orgueil destructeur, tyrannie, illusions de grandeur et chutes spectaculaires.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(251,191,36,0.12)] aspect-[7/3]">
        <Image
          src={SolarienImage}
          alt="Portrait du Dieu soleil"
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
          className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-amber-300/5 blur-[80px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-300/5 via-transparent to-black/50"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <Kicker>Soleil • rayonnement • autorité • excellence • noblesse</Kicker>

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
            Dans la grande symphonie du zodiaque, si chaque planète joue une partition unique, le Soleil en est le chef d&apos;orchestre incontesté. Gouverné par l&apos;Astre Roi, le cœur battant de notre système, le Solarien incarne la quintessence de la nature humaine aboutie. Rayonnant, naturellement fait pour diriger et inspirer, cet archétype fascine autant qu&apos;il intimide. Découvrez le portrait psychologique, professionnel, amoureux et physique de l&apos;être le plus complet — mais aussi l&apos;un des plus rares — de l&apos;astrologie.
          </p>

          <div className="mt-8 border-t border-white/5 pt-6">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-3" aria-label="Points clés du portrait solarien">
        <Stat label="Force centrale" value="Synthèse & rayonnement" />
        <Stat label="Terrain naturel" value="Pouvoir & excellence" />
        <Stat label="Ombre principale" value="Orgueil & chute" />
      </section>

      <section className="space-y-6">
        <H2>L&apos;Intellect du Solarien : La Synthèse Absolue du Génie</H2>

        <Card title="L’intellect">
          <p>
            Saisir l&apos;intellect du Solarien, c&apos;est comprendre qu&apos;il ne possède pas une seule forme d&apos;intelligence, mais qu&apos;il en est la synthèse suprême. La tradition astrologique considère à juste titre que l&apos;influence solaire rassemble le meilleur des autres dominantes planétaires :
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>La vivacité et la fulgurance du Mercurien.</li>
            <li>La profondeur, la concentration et la mémoire du Saturnien.</li>
            <li>L&apos;esprit d&apos;organisation et l&apos;envergure du Jupitérien.</li>
            <li>La sensibilité esthétique et artistique du Vénusien.</li>
          </ul>
          <p>
            Face à une telle alchimie, nous sommes en présence du cerveau le plus puissant et le mieux doué qui soit. Le Solarien ne se contente pas de réussir : il est destiné à émerger, à dépasser ses contemporains et à marquer son époque. Qu&apos;il évolue dans les hautes sphères philosophiques, la recherche scientifique, la sociologie, la stratégie ou les arts majeurs, il ne semble pas possible de laisser une œuvre de génie à la postérité sans une forte dominante solaire dans le thème astral.
          </p>
          <p>
            Une note encyclopédique essentielle : L&apos;ésotériste et penseur militaire Colonel Caslant affirmait que &quot;Le type solarien se rencontre rarement dans l&apos;humanité, malheureusement pour elle&quot;. Le monde moderne, souvent gouverné par la confusion, manque cruellement de ces authentiques &quot;rois spirituels&quot;, ces esprits supérieurs capables de prendre les décisions au sommet avec une justesse éblouissante pour éviter le chaos. Le véritable Solarien pur est une perle rare.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Charisme et Vie Sociale : L&apos;Aura de l&apos;Empereur</H2>

        <Card title="La vie sociale">
          <p>
            Le Solarien possède un magnétisme attractif d&apos;une puissance inouïe. Cependant, contrairement au Vénusien qui séduit par la douceur et le charme, le Solarien attire par l&apos;admiration, et bien souvent, par la domination naturelle qu&apos;il exerce.
          </p>
          <p>
            Il n&apos;est pas d&apos;un abord facile. Pourquoi ? Parce que sa simple présence, rayonnante de supériorité et d&apos;assurance, tend à déclencher un complexe d&apos;infériorité chez ceux qui l&apos;approchent. En société, il n&apos;est ni hyper-expansif, ni familier au premier regard. Il recherche la compagnie de ses pairs, des personnalités de premier plan. Il fuit la médiocrité, la mesquinerie et la vulgarité comme la peste.
          </p>
          <p>
            Cependant, une fois qu&apos;il accorde son amitié et son estime (une faveur rare qu&apos;il faut mériter), c&apos;est un ami d&apos;une loyauté absolue. Conscient de sa force, il adopte naturellement le rôle de protecteur envers ceux qu&apos;il aime, utilisant sa position sociale ou son autorité pour élever son entourage.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Amour et Sentiments : La Solitude du Sommet et le Piège de l&apos;Idéal</H2>

        <Card title="L’amour">
          <p>
            On pourrait croire qu&apos;avec de tels atouts, la vie amoureuse du Solarien est un conte de fées perpétuel. C&apos;est en réalité son plus grand talon d&apos;Achille.
          </p>
          <p>
            Le drame intime du Solarien réside dans son exigence. Il place son idéal amoureux tellement haut qu&apos;il est presque impossible pour un être humain de chair et de sang de l&apos;atteindre. Il ne cherche pas simplement un conjoint ; il cherche une âme à sa hauteur, une reine ou un roi capable de partager son trône.
          </p>
          <p>
            Confronté à la rareté de ce profil, le Solarien fait souvent face à de multiples désillusions. Bien souvent, en désespoir de cause, il se résigne à faire un mariage &quot;de raison&quot; ou de &quot;prestige&quot;, choisissant un partenaire qui présente bien socialement et qui soutiendra son ascension. Mais dans l&apos;intimité de son cœur, il gardera souvent une certaine insatisfaction, une mélancolie cachée. La compensation karmique de sa brillance sociale est souvent une profonde solitude amoureuse.
          </p>
        </Card>
      </section>

   <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(251,191,36,0.12)] aspect-[7/3]">
        <Image
          src={Solarien3Image}
          alt="Portrait du Dieu Soleil en astrologie"
          fill
          priority
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>

      <section className="space-y-6">
        <H2>Destinée et Vocation : Une Trajectoire Météorique</H2>

        <Card title="La vocation">
          <p>
            La destinée d&apos;un Solarien harmonieux ne peut être que brillante. Dès la cour d&apos;école, on repère chez cet enfant une étoffe supérieure. Sans même avoir à hausser la voix, il devient le chef de file naturel, attrapant la lumière par son magnétisme inné.
          </p>
          <p>
            Dans le monde professionnel, le Solarien étouffe s&apos;il est contraint aux tâches subalternes, aux besognes répétitives, ou s&apos;il doit obéir à des supérieurs qu&apos;il juge incompétents. Ces situations ne durent jamais : propulsé par une ambition noble, il s&apos;élève rapidement. Ses domaines de prédilection sont :
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Le Pouvoir et la Direction : La politique de haut niveau, les conseils d&apos;administration, la direction d&apos;entreprise, la magistrature suprême.</li>
            <li>Les Arts Majeurs : Particulièrement là où l&apos;ampleur et la noblesse sont requises (La peinture classique, la réalisation cinématographique, surtout si le Soleil est conjoint à Jupiter dans le thème natal).</li>
          </ul>
          <p>
            Son arme secrète ? Une vitalité exceptionnelle. Le Solarien bénéficie d&apos;une capacité de récupération physique et nerveuse sans égale, lui permettant de fournir une somme de travail colossal qui terrasserait instantanément n&apos;importe quel autre signe. (Attention toutefois : si un revers survient à l&apos;âge mûr pour un Solarien, la chute est souvent brutale et définitive).
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>La Face Sombre (Quand le Soleil est affligé)</H2>

        <Callout tone="warn" title="L’ombre du Soleil">
          <p>
            Lorsque le Soleil est lourdement aspecté par des planètes dissonantes (notamment Mars ou Saturne), la grandeur d&apos;âme se transforme en mégalomanie destructrice.
          </p>
          <p>
            Le &quot;mauvais&quot; Solarien conserve ses idées de grandeur, mais n&apos;a plus les capacités ni la noblesse pour les réaliser. Le jugement est faussé par un orgueil démesuré et une vanité aveuglante. Il devient un tyran domestique ou professionnel, incapable de supporter la moindre critique, s&apos;isolant dans sa propre tour d&apos;ivoire.
          </p>
          <p>
            C&apos;est le complexe d&apos;Icare : s&apos;il parvient à s&apos;élever par quelque stratagème ou illusion de grandeur, il finit inexorablement par se brûler les ailes. La &quot;justice immanente&quot; finit toujours par le rattraper sous la forme de chutes spectaculaires, de scandales retentissants ou d&apos;une perte totale de réputation.
          </p>
        </Callout>
      </section>

   <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(251,191,36,0.12)] aspect-[7/3]">
        <Image
          src={Solarien2Image}
          alt="Portrait d'Apollon Dieu soleil en astrologie"
          fill
          priority
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>

      <section className="space-y-6">
        <H2>L&apos;Expression Féminine et Yin : L&apos;Archétype de la Souveraine</H2>

        <Card title="L’expression Yin">
          <p>
            La Solarienne harmonieuse est une figure majestueuse et rarissime. Comme l&apos;écrivait le célèbre occultiste Péladan : &quot;Cette femme présente les plus belles garanties. Sa grande justesse de raisonnement ne la trompe guère sur les mérites d&apos;un homme.&quot;
          </p>
          <p>
            C&apos;est la femme qui ne peut aimer que dans l&apos;admiration. Elle est organiquement incapable de s&apos;éprendre d&apos;un homme médiocre, lâche ou sans envergure. Elle a besoin que son partenaire porte en lui l&apos;étincelle de la gloire. Le drame de sa vie ? Elle inspire souvent des passions violentes et dévorantes à des hommes &quot;ordinaires&quot; qu&apos;elle est contrainte d&apos;éconduire, tandis qu&apos;elle cherche le regard de &quot;puissants&quot; qui s&apos;ignorent. Si elle ne trouve pas chaussure à son pied, elle préférera rester solitaire, digne et hautaine, épousant sa propre carrière ou sa propre renommée plutôt que de se compromettre.
          </p>
          <p>
            Si le Soleil est maléficié, elle se mue en impitoyable arriviste. Dotée d&apos;un charisme dangereux, elle utilise sa capacité à inspirer des passions pour manipuler, n&apos;hésitant pas à piétiner la morale pour satisfaire son incommensurable besoin de pouvoir et de reconnaissance sociale.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Le Portrait Physique du Solarien (Morphopsychologie Astrologique)</H2>

        <Card title="Le portrait physique">
          <p>
            La beauté du Solarien est légendaire dans la tradition astrologique. Son apparence physique évoque instantanément l&apos;harmonie parfaite, l&apos;élégance et la force tranquille des statues de l&apos;Antiquité grecque (l&apos;archétype absolu étant l&apos;Apollon du Belvédère).
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>L&apos;allure générale : Une démarche noble, aisée, parfois majestueuse. Le corps est d&apos;une sveltesse harmonieuse, exsudant la grâce et une formidable vitalité. Le torse est souvent bien développé (le Soleil gouverne le cœur et le dos), avec une posture très droite, naturellement cambrée.</li>
            <li>Le visage : Un ovale pur et racé. Le trait le plus frappant est le front : vaste, harmonieux, dépourvu des rides d&apos;anxiété ou de tension nerveuse qui marquent d&apos;autres archétypes. C&apos;est le front de l&apos;intellectuel serein.</li>
            <li>Le regard : Des yeux bien ouverts, magnétiques, encadrés par des arcades sourcilières doucement incurvées. L&apos;iris s&apos;y pare parfois de nuances ou de reflets dorés. C&apos;est un regard qui mêle une énergie inébranlable à une profonde bienveillance (&quot;Les yeux seuls annonçaient le grand homme&quot;, disait-on de Napoléon).</li>
            <li>Les détails : Un nez légèrement aquilin et fin à l&apos;extrémité. Une bouche admirablement ciselée s&apos;ouvrant sur un sourire sobre mais radieux. La voix du Solarien est posée, sonore, agréable et mesurée. L&apos;ensemble dégage une aristocratie naturelle impossible à imiter.</li>
          </ul>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>En conclusion</H2>

        <Callout tone="ok" title="Conclusion">
          <p>
            En conclusion : Naître avec une puissante dominante Solaire n&apos;est pas seulement un privilège, c&apos;est une responsabilité cosmique. Le Solarien n&apos;est pas là pour amasser égoïstement du pouvoir, mais pour devenir un phare. Sa véritable mission karmique est de rayonner, de réchauffer et de guider ceux qui l&apos;entourent, en se rappelant toujours que la véritable noblesse ne réside pas dans l&apos;écrasement des autres, mais dans l&apos;élévation du monde entier vers la lumière.
          </p>
        </Callout>
      </section>

      <section
        aria-label="Synthèse du portrait solarien"
        className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm"
      >
        <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
          <div className="p-5 font-serif text-lg font-medium text-white/90">Axe</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Expression</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Risque</div>
        </div>

        <TableRow
          title="Intellect"
          effect="Synthèse, puissance mentale, génie, vision"
          reading="Orgueil intellectuel ou déconnexion si Soleil affligé"
        />
        <TableRow
          title="Vie sociale"
          effect="Charisme, autorité naturelle, protection"
          reading="Distance, intimidation, solitude relationnelle"
        />
        <TableRow
          title="Amour"
          effect="Exigence, idéal, admiration"
          reading="Insatisfaction, mélancolie, solitude du sommet"
        />
        <TableRow
          title="Vocation"
          effect="Direction, pouvoir, arts majeurs, rayonnement"
          reading="Chute spectaculaire en cas d’orgueil ou de désalignement"
        />
      </section>

      <footer className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md sm:p-12">
        <H3>Pour aller plus loin dans les portraits planétaires</H3>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Pill>Soleil</Pill>
          <Pill tone="sky">Portrait astrologique</Pill>
          <Pill tone="violet">Charisme</Pill>
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