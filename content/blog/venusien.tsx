import type { ReactNode } from "react";
import Link from "next/link";
import { Pill, TagPillsInline, getGlowFromTags } from "./ui";
import Image from "next/image";
import VenusienImage from "@/public/images/blog/venus1.webp";
import VenusienImage2 from "@/public/images/blog/venus2.webp";

export const meta = {
  slug: "venusien",
  title: "Le Vénusien : portrait astrologique complet",
  description:
    "Portrait astrologique du Vénusien : psychologie, charme, amour, séduction, sociabilité, carrière, art, paresse, sensualité, fidélité, Vénus bénéfique ou dissonante dans un thème astral.",
  date: "2026-04-06",
  tags: [
    "Vénus",
    "vénusien",
    "portrait astrologique",
    "séduction",
    "amour",
    "thème astral",
    "psychologie astrologique",
    "art",
    "relations",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/venus1.webp",
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
                    text: "Le Vénusien désigne un tempérament fortement marqué par Vénus : charme, sociabilité, besoin d’affection, goût du plaisir, attrait pour l’art, la beauté, les relations et l’agrément de la vie.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quels métiers conviennent au Vénusien ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Les signatures vénusiennes favorisent souvent l’art, la musique, le chant, la comédie, la décoration, la coiffure, la mode, la vente, la représentation, le spectacle, le tourisme et certaines activités de charme ou de relation.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quel est le défaut principal d’un Vénusien mal équilibré ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Lorsque Vénus est très dissonante, le tempérament peut basculer vers la paresse, la dépendance au plaisir, l’infidélité, la flatterie intéressée, le manque de volonté ou la recherche excessive de satisfaction sensorielle.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(251,191,36,0.1)] aspect-[7/3]">
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
          className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-[80px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/50"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <Kicker>Vénus • charme • amour • art • sociabilité</Kicker>

          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h1 className="font-serif text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl md:max-w-3xl">
              Le Vénusien : portrait astrologique complet
            </h1>

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
            Le <strong className="font-medium text-amber-200">Vénusien</strong> est d’abord
            un être d’<strong className="font-medium text-white">attraction</strong>, de{" "}
            <strong className="font-medium text-white">charme</strong>, de{" "}
            <strong className="font-medium text-white">lien</strong> et de{" "}
            <strong className="font-medium text-white">plaisir</strong>. Il cherche
            instinctivement ce qui adoucit l’existence, embellit le quotidien, apaise
            les rapports et nourrit le cœur. Quand Vénus est harmonieuse, elle donne
            grâce, sociabilité, élégance, talent relationnel et sens artistique. Quand
            elle est fortement déformée, elle peut entraîner vers la facilité, la paresse,
            l’infidélité ou la dépendance aux satisfactions sensorielles.
          </p>

          <div className="mt-8 border-t border-white/5 pt-6">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-3" aria-label="Points clés du portrait vénusien">
        <Stat label="Force centrale" value="Charme & sociabilité" />
        <Stat label="Terrain naturel" value="Amour & art" />
        <Stat label="Ombre principale" value="Paresse & sensualité" />
      </section>

      <Callout tone="note" title="Le centre du type vénusien">
        <p>
          Le Vénusien n’est pas d’abord tourné vers l’effort dur, la tension ou la conquête.
          Il cherche avant tout l’<strong className="text-white">agrément</strong>, la{" "}
          <strong className="text-white">relation</strong>, la{" "}
          <strong className="text-white">beauté</strong>, la{" "}
          <strong className="text-white">sympathie</strong> et les formes de vie qui
          rendent l’existence plus douce, plus séduisante ou plus agréable.
        </p>
      </Callout>

      <Divider />

      <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 shadow-2xl backdrop-blur-md sm:p-12">
        <div
          className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-amber-500/10 blur-[60px]"
          aria-hidden="true"
        />

        <h2 className="relative z-10 font-serif text-2xl font-medium text-white sm:text-3xl">
          Les grands axes du tempérament vénusien
        </h2>

        <div className="relative z-10 mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Besoin d’amour, d’attention et de proximité affective",
            "Goût du beau, du confortable et de l’harmonieux",
            "Forte sociabilité et facilité relationnelle",
            "Attrait pour l’art, la musique, le chant ou la scène",
            "Tendance à fuir l’effort pénible ou ingrat",
            "Séduction instinctive et besoin de plaire",
            "Indulgence, douceur et conciliation",
            "Risque de facilité, de paresse ou d’infidélité si Vénus est dissonante",
          ].map((item, index) => (
            <div
              key={item}
              className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-black/40 px-5 py-4 transition-colors hover:border-amber-500/30 hover:bg-white/5"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500/10 font-serif text-sm font-bold text-amber-400 group-hover:bg-amber-500/20">
                {index + 1}
              </span>
              <span className="text-sm font-medium text-white/85 sm:text-base">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <H2>1) Intelligence, école et fonctionnement mental du Vénusien</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Le Vénusien n’est pas forcément défavorisé intellectuellement, mais son esprit
          se détourne plus facilement de ce qui lui paraît sec, abstrait ou trop exigeant.
          Il se sent souvent moins attiré par les sciences exactes, les structures rigides
          ou les disciplines qui demandent une patience prolongée sans gratification immédiate.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Pourquoi ses études peuvent sembler inégales" subtitle="Pas toujours un manque de dons, souvent un manque d’intérêt">
            <p>
              Le problème n’est pas nécessairement une faiblesse intellectuelle brute.
              Il s’agit souvent plutôt d’un manque d’élan pour ce qui ne nourrit ni le cœur,
              ni l’imaginaire, ni le plaisir de vivre.
            </p>
            <p>
              Très tôt, l’art, la musique, la scène, les jeux de charme ou les préoccupations
              affectives peuvent prendre plus de place que les efforts scolaires classiques.
            </p>
          </Card>

          <Card title="Ses vrais terrains de facilité" subtitle="Quand Vénus aime, elle apprend mieux">
            <p>
              Musique, chant, dessin, peinture, esthétique, expression, douceur du style,
              parfois littérature sensible, tout ce qui passe par la sensibilité, la grâce
              ou l’émotion.
            </p>
          </Card>
        </div>

        <Callout tone="ok" title="Nuance importante">
          <p>
            Le Vénusien n’est pas “moins intelligent” par essence. Il est surtout plus
            naturellement orienté vers ce qui est{" "}
            <strong className="text-white">vivant, sensible, harmonieux ou désirable</strong>.
          </p>
        </Callout>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>2) Le grand thème du Vénusien : amour, séduction et besoin de plaire</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          S’il y a un domaine où le Vénusien excelle presque instinctivement, c’est
          celui de l’attraction affective et du jeu amoureux. Il cherche le lien, la
          sympathie, l’échange tendre, la présence sensible et l’émotion partagée.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="La face lumineuse" subtitle="Charme, attrait, fluidité relationnelle">
            <p>
              Il plaît facilement, attire la sympathie dès le premier contact, crée vite
              une atmosphère douce, agréable et légère. Son besoin d’aimer et d’être aimé
              est fort, constant, quotidien.
            </p>
          </Card>

          <Card title="La zone sensible" subtitle="Le désir de séduire peut devenir envahissant">
            <p>
              Lorsqu’il voit une personne qui répond à son idéal, il lui devient difficile
              de rester neutre. Le besoin de séduire, de plaire ou de tenter sa chance peut
              être très fort, même lorsque le contexte est déjà compliqué.
            </p>
          </Card>
        </div>

        <Callout tone="warn" title="Le vrai risque vénusien">
          <p>
            Le Vénusien peut aimer l’amour au point de devenir dépendant de l’émotion qu’il
            provoque. Dans ce cas, la séduction cesse d’être un échange et devient une forme
            d’<strong className="text-white">intoxication affective</strong>.
          </p>
        </Callout>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>3) Sociabilité, sympathie et vie relationnelle</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Le Vénusien inspire souvent la sympathie très rapidement. Il est agréable à
          fréquenter, conciliant, doux dans le ton, indulgent envers les faiblesses
          d’autrui et peu attiré par les conflits.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Sociable">
            <p>
              Il se lie facilement, aime la compagnie, cherche des relations vivantes,
              des échanges doux, des contextes où l’on peut partager, sortir, s’amuser
              ou se détendre.
            </p>
          </Card>

          <Card title="Conciliant">
            <p>
              Il n’aime pas envenimer les situations. Il préfère lisser, arrondir,
              pacifier, charmer, faire baisser la tension plutôt que trancher sèchement.
            </p>
          </Card>

          <Card title="Aimable">
            <p>
              Il sait rendre service, montrer de la chaleur humaine, faire preuve
              d’indulgence et apporter une qualité de présence souvent très appréciée.
            </p>
          </Card>
        </div>

        <Callout title="Signature sociale">
          <p>
            Le Vénusien est probablement l’un des types qui se fait le plus aisément des
            relations amicales, parce qu’il apporte très vite une sensation de{" "}
            <strong className="text-white">douceur, de charme et d’accessibilité</strong>.
          </p>
        </Callout>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>4) Quels métiers conviennent au Vénusien ?</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          En dehors de l’art pur, le Vénusien a besoin d’activités qui restent supportables,
          propres, fluides, esthétiques, relationnelles ou plaisantes. Il se fatigue plus
          vite dans les travaux lourds, pénibles, brutaux ou ingrats.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Professions naturelles" subtitle="Là où Vénus s’exprime avec élégance">
            <p>
              Musique, chant, comédie, spectacle, danse, mode, décoration, esthétique,
              coiffure, beauté, stylisme, accueil, représentation, vente, tourisme,
              relation clientèle, organisation de loisirs ou d’agrément.
            </p>
          </Card>

          <Card title="Expression plus haute" subtitle="Quand Vénus devient très visible">
            <p>
              Comédien, chanteur, musicien, compositeur, figure publique du monde artistique,
              parfois peintre, parfois écrivain d’un registre plus sensible, séduisant ou élégant.
            </p>
          </Card>
        </div>

        <section
          aria-label="Lecture professionnelle du vénusien"
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
            <div className="p-5 font-serif text-lg font-medium text-white/90">Niveau</div>
            <div className="p-5 font-serif text-lg font-medium text-white/90">Expression</div>
            <div className="p-5 font-serif text-lg font-medium text-white/90">Lecture</div>
          </div>

          <TableRow
            title="Expression simple"
            effect="Vente, accueil, coiffure, décoration, relation"
            reading="Besoin de contact, de douceur, d’un cadre agréable"
          />
          <TableRow
            title="Expression artistique"
            effect="Musique, chant, scène, image, création"
            reading="Vénus visible, inspirée, expressive"
          />
          <TableRow
            title="Expression mondaine"
            effect="Représentation, élégance, art de recevoir"
            reading="Charme social, sens du lien et de l’apparence"
          />
        </section>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>5) Vie amoureuse, fidélité et tentations</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          La vie sentimentale du Vénusien est rarement vide. Même lorsqu’il s’installe
          dans une relation heureuse, le besoin d’attention, de séduction et de chaleur
          affective demeure très vivant.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Vénus harmonieuse" subtitle="Douceur, attachement, besoin d’amour constant">
            <p>
              Le besoin de sympathie, de tendresse et de présence peut être quotidien.
              Dans une relation nourrissante, le Vénusien s’apaise souvent et donne le meilleur
              de sa douceur.
            </p>
          </Card>

          <Card title="Vénus dissonante" subtitle="La tentation devient plus difficile à contenir">
            <p>
              Si l’attention manque, si la relation se refroidit ou si le besoin de plaire
              reprend le dessus, la fidélité peut devenir fragile. Non par goût du conflit,
              mais par faiblesse devant la sollicitation affective ou sensuelle.
            </p>
          </Card>
        </div>

        <Callout tone="warn" title="Point sensible du type vénusien">
          <p>
            Le Vénusien supporte mal la sécheresse affective. Quand il se sent négligé,
            il peut chercher ailleurs ce qui lui manque :{" "}
            <strong className="text-white">attention, douceur, désir ou validation</strong>.
          </p>
        </Callout>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>6) Le bon Vénusien et le Vénusien dissonant</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Comme pour tous les types planétaires, il existe une expression lumineuse
          et une expression déformée de Vénus. Le symbole de base reste le même,
          mais sa qualité change tout.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Le Vénusien bénéfique" subtitle="Charme, douceur, aptitude au bonheur partagé">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-emerald-400">✔</span>
                <span>Très sociable, aimable, doux et conciliant</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-emerald-400">✔</span>
                <span>Excellent sens du lien, de l’élégance et de la présence agréable</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-emerald-400">✔</span>
                <span>Peut devenir un partenaire tendre, artistique et harmonisant</span>
              </li>
            </ul>
          </Card>

          <Card title="Le Vénusien mal équilibré" subtitle="Plaisir sans maîtrise, flatterie, dépendance">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-red-400">✘</span>
                <span>Paresse, manque de volonté, recherche de facilité</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-red-400">✘</span>
                <span>Hyper-sensualité, infidélité, besoin excessif d’être désiré</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-red-400">✘</span>
                <span>Flatterie, dépendance, faiblesse devant les sollicitations</span>
              </li>
            </ul>
          </Card>
        </div>

        <Callout title="La vraie ombre de Vénus">
          <p>
            L’ombre vénusienne n’est pas la violence. C’est plutôt{" "}
            <strong className="text-white">la perte de tenue intérieure</strong> :
            trop céder, trop se laisser porter, trop dépendre du plaisir, de l’approbation
            ou du désir d’être aimé.
          </p>
        </Callout>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>7) La Vénusienne : douceur, élégance… ou dérive du désir</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Dans les descriptions classiques, la femme fortement marquée par Vénus apparaît
          souvent comme un type d’élégance, de séduction et de maîtrise relationnelle.
          Mais, selon l’état de Vénus, cette même énergie peut aussi devenir beaucoup plus
          problématique.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Vénusienne harmonieuse" subtitle="Présence idéale, charme, art de vivre">
            <p>
              Elle peut être très courtisée, très féminine, très agréable à vivre,
              apte à créer une atmosphère douce, belle et raffinée, et à tempérer
              des caractères plus durs ou plus rugueux.
            </p>
          </Card>

          <Card title="Vénusienne infortunée" subtitle="Quand l’art de plaire se dégrade">
            <p>
              Si Vénus est très mal soutenue, la recherche d’amour, de confort ou de
              valorisation peut basculer vers des scénarios plus troubles : manipulation
              affective, dépendance, galanterie intéressée, instabilité matérielle ou
              liaisons destructrices.
            </p>
          </Card>
        </div>

        <Callout tone="warn" title="Nuance essentielle">
          <p>
            Ces descriptions extrêmes relèvent de la tradition symbolique. Dans la pratique,
            il faut toujours replacer Vénus dans l’ensemble du thème, avec ses aspects,
            ses maîtrises et les autres signatures planétaires.
          </p>
        </Callout>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>8) Aspect physique attribué au type vénusien</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Le type vénusien est traditionnellement associé à l’harmonie des formes,
          à la douceur du regard, à la souplesse du geste, à une certaine grâce
          charnelle et à un charme immédiatement perceptible.
        </p>

        <section
          aria-label="Traits physiques du vénusien"
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
            <div className="p-5 font-serif text-lg font-medium text-white/90">Zone</div>
            <div className="p-5 font-serif text-lg font-medium text-white/90">Tendance</div>
            <div className="p-5 font-serif text-lg font-medium text-white/90">Impression générale</div>
          </div>

          <TableRow
            title="Visage"
            effect="Ovale arrondi, traits doux, bouche dessinée"
            reading="Charme, souplesse, sensualité visible"
          />
          <TableRow
            title="Regard"
            effect="Yeux humides, grands, vivants, très expressifs"
            reading="Tendresse, langueur, pouvoir de séduction"
          />
          <TableRow
            title="Corps & allure"
            effect="Harmonie des formes, gestes gracieux, voix mélodieuse"
            reading="Présence agréable, esthétique, naturellement attirante"
          />
        </section>

        <Callout title="Précaution d’usage">
          <p>
            Comme toujours, ces indices physiques appartiennent à la tradition symbolique.
            Ils peuvent nourrir l’observation, mais ne remplacent jamais l’étude complète
            du thème ni la singularité réelle de la personne.
          </p>
        </Callout>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Synthèse : reconnaître une forte signature de Vénus</H2>

        <section className="rounded-[2rem] border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-transparent p-8 shadow-2xl backdrop-blur-md">
          <ol className="list-decimal space-y-4 pl-6 text-lg text-white/90 marker:font-serif marker:font-bold marker:text-emerald-400">
            <li>Un besoin fort d’affection, de lien et de douceur</li>
            <li>Une sociabilité naturelle et un vrai talent de sympathie</li>
            <li>Un goût marqué pour l’art, la beauté et les plaisirs de la vie</li>
            <li>Une difficulté à supporter le rude, le sec ou l’ingrat</li>
            <li>Un fort pouvoir de séduction, souvent très spontané</li>
            <li>Une fidélité variable selon la qualité de Vénus et la nourriture affective reçue</li>
            <li>
              <strong className="text-emerald-300">
                Un risque de facilité ou de dépendance au plaisir si Vénus est déformée
              </strong>
            </li>
          </ol>
        </section>

        <Callout tone="ok" title="Conclusion astrologique">
          <p>
            Le Vénusien bien construit n’est pas seulement séduisant. Il rend la vie plus
            douce, plus habitable, plus humaine. Il relie, adoucit, embellit, attire et apaise.
          </p>
          <p>
            Quand Vénus est harmonieuse, elle donne le charme. Quand elle est déformée,
            elle donne surtout le besoin de plaire. Toute la différence se joue dans la tenue intérieure.
          </p>
        </Callout>
      </section>

      <section className="mt-16 space-y-8">
        <H2>FAQ — Le Vénusien en astrologie</H2>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Qu’est-ce qu’un Vénusien ?">
            <p>
              C’est un tempérament fortement marqué par Vénus : charme, douceur,
              sociabilité, besoin d’affection, goût de l’art, du plaisir et des relations.
            </p>
          </Card>

          <Card title="Quels métiers lui conviennent le mieux ?">
            <p>
              Art, musique, chant, scène, esthétique, décoration, vente, accueil,
              tourisme, beauté, relation clientèle et tout ce qui demande du charme
              ou du sens de l’agrément.
            </p>
          </Card>

          <Card title="Le Vénusien est-il toujours fidèle ?">
            <p>
              Pas nécessairement. Tout dépend de la qualité de Vénus et du reste du thème.
              Il a souvent besoin d’attention et supporte mal le désert affectif.
            </p>
          </Card>

          <Card title="Quelle est l’ombre principale de Vénus ?">
            <p>
              La facilité : paresse, dépendance au plaisir, recherche de validation,
              faiblesse devant la sollicitation et manque de tenue si Vénus est très dissonante.
            </p>
          </Card>
        </div>
      </section>

      <footer className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md sm:p-12">
        <H3>Pour aller plus loin dans les portraits planétaires</H3>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Pill>Vénus</Pill>
          <Pill tone="sky">Portrait astrologique</Pill>
          <Pill tone="violet">Séduction</Pill>
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
            href="/blog/orientation-professionnelle-theme-astral"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Lire l’article sur la vocation
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}