import type { ReactNode } from "react";
import Link from "next/link";
import { Pill, TagPillsInline, getGlowFromTags } from "./ui";
import Image from "next/image";
import JupiterienImage1 from "@/public/images/blog/jupiterien1.webp";
import JupiterienImage2 from "@/public/images/blog/jupiterien2.webp";

export const meta = {
  slug: "jupiterien",
  title: "Le Jupitérien : portrait astrologique complet",
  description:
    "Portrait astrologique du Jupitérien : psychologie, intelligence, vocation, rapport au pouvoir, argent, amour, vie sociale, excès, ombres et qualités de Jupiter dans un thème astral.",
  date: "2026-04-02",
  tags: [
    "Jupiter",
    "jupitérien",
    "portrait astrologique",
    "tempérament",
    "thème astral",
    "psychologie astrologique",
    "vocation",
    "carrière",
    "amour",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/jupiterien1.webp",
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

export default function JupiterienPost() {
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
                  name: "Qu’est-ce qu’un Jupitérien en astrologie ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Le Jupitérien désigne un tempérament fortement marqué par Jupiter : sens moral, générosité, goût de l’ordre, vision large, besoin de respect, aptitude à guider, organiser ou représenter.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quels métiers conviennent au Jupitérien ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Les signatures jupitériennes favorisent souvent le droit, l’administration, la gestion, la direction, la transmission, les affaires institutionnelles, la philosophie, la religion, la sociologie ou certaines fonctions de représentation.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quel est le défaut principal d’un Jupitérien mal équilibré ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Lorsque Jupiter est dissonant ou mal intégré, le tempérament peut basculer vers la prétention, l’orgueil, la surévaluation de soi, la dépense de prestige, le besoin excessif de reconnaissance ou le jugement faussé.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(251,191,36,0.1)] aspect-[7/3]">
        <Image
          src={JupiterienImage1}
          alt="Portrait symbolique du tempérament jupitérien en astrologie"
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
          <Kicker>Jupiter • prestige • générosité • vocation • réussite</Kicker>

          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h1 className="font-serif text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl md:max-w-3xl">
              Le Jupitérien : portrait astrologique complet
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
            Le <strong className="font-medium text-amber-200">Jupitérien</strong> n’est pas seulement
            un tempérament optimiste ou sociable. C’est un type astrologique fondé sur
            le <strong className="font-medium text-white">discernement</strong>, le{" "}
            <strong className="font-medium text-white">jugement</strong>, le{" "}
            <strong className="font-medium text-white">sens de l’ordre</strong>, la{" "}
            <strong className="font-medium text-white">mesure</strong> et la capacité à
            protéger, représenter, conseiller ou administrer. Lorsqu’il est bien équilibré,
            Jupiter élève, stabilise et donne de la noblesse. Lorsqu’il est déformé,
            il peut nourrir l’orgueil, les prétentions, les dépenses de prestige ou les
            ambitions mal calibrées.
          </p>

          <div className="mt-8 border-t border-white/5 pt-6">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-3" aria-label="Points clés du portrait jupitérien">
        <Stat label="Force mentale" value="Jugement & méthode" />
        <Stat label="Qualité sociale" value="Bienveillance & autorité" />
        <Stat label="Ombre principale" value="Orgueil & prétention" />
      </section>

      <Callout tone="note" title="Le centre du type jupitérien">
        <p>
          Si le Mercurien brille par la vitesse d’assimilation et si le Solaire impressionne
          par l’ampleur de sa vision, le Jupitérien se distingue surtout par{" "}
          <strong className="text-white">le sens du jugement</strong>, la capacité à ordonner
          les idées, à structurer les connaissances et à décider avec méthode.
        </p>
      </Callout>

      <Divider />

      <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 shadow-2xl backdrop-blur-md sm:p-12">
        <div
          className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-amber-500/10 blur-[60px]"
          aria-hidden="true"
        />

        <h2 className="relative z-10 font-serif text-2xl font-medium text-white sm:text-3xl">
          Les grands axes du tempérament jupitérien
        </h2>

        <div className="relative z-10 mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Esprit ordonné, méthodique et structuré",
            "Goût naturel pour l’organisation et la hiérarchie",
            "Tempérament protecteur, sincère et loyal",
            "Aptitude à diriger, représenter ou conseiller",
            "Besoin fort d’honneur et de considération",
            "Attirance pour la stabilité, la légalité et l’aisance",
            "Goût du confort, mais normalement avec mesure",
            "Risque d’orgueil si Jupiter est mal équilibré",
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
        <H2>1) Intelligence et fonctionnement mental du Jupitérien</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Le cerveau jupitérien n’est pas forcément le plus rapide ni le plus spectaculaire.
          En revanche, il compte parmi les plus{" "}
          <strong className="font-medium text-amber-200">ordonnés, méthodiques et fiables</strong>.
          Il sait classer, hiérarchiser, retrouver une information, structurer un ensemble
          et faire tenir les idées dans une architecture cohérente.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Ses points forts intellectuels" subtitle="Ordre, méthode, discernement">
            <p>
              Le Jupitérien apprend souvent avec régularité. Il n’a pas besoin d’un éclat
              de génie permanent pour bien réussir : il avance avec constance, jugement
              et sens de la bonne méthode.
            </p>
            <p>
              Il est souvent à l’aise dans les domaines où il faut organiser des notions,
              comprendre un cadre, gérer un ensemble, administrer ou arbitrer.
            </p>
          </Card>

          <Card title="Domaines d’excellence" subtitle="Les savoirs où Jupiter se sent chez lui">
            <p>
              Droit, administration, gestion, économie, finance, organisation, philosophie,
              sociologie, religion, théologie, transmission structurée, parfois peinture
              ou activités de représentation.
            </p>
          </Card>
        </div>

        <Callout tone="ok" title="Lecture simple">
          <p>
            Le Jupitérien n’est pas seulement “intelligent” : il est souvent{" "}
            <strong className="text-white">bien organisé intérieurement</strong>, ce qui lui
            permet de tenir sur la durée et de revenir facilement à l’information utile.
          </p>
        </Callout>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>2) Rapport aux études, à l’école et à l’apprentissage</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          La période scolaire se passe souvent correctement chez un bon Jupitérien,
          non parce qu’il serait toujours le plus brillant, mais parce qu’il sait suivre
          une ligne, respecter une méthode et tirer profit d’un cadre bien posé.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Pourquoi il réussit souvent bien">
            <p>
              Il est généralement plus ponctuel, plus discipliné, plus apte à suivre
              des consignes structurées et à travailler dans la continuité.
            </p>
            <p>
              Il bénéficie souvent d’une forme de chance dans les examens ou les validations,
              surtout quand Jupiter est bien relié au thème.
            </p>
          </Card>

          <Card title="Sa façon d’apprendre">
            <p>
              Il préfère comprendre une logique d’ensemble, situer les éléments dans un ordre,
              voir l’utilité d’un savoir et en maîtriser les principes plutôt que d’absorber
              de façon désordonnée.
            </p>
          </Card>
        </div>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>3) Comportement social : générosité, protection, bonhomie</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Le Jupitérien bien intégré inspire souvent confiance. Il dégage une impression
          de largeur, de stabilité, de bienveillance et de solidité morale. Son contact
          peut être chaleureux, franc, rassurant et protecteur.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Bon cœur">
            <p>
              Il aide volontiers, protège facilement, conseille avec sincérité et se montre
              sensible aux injustices ou à la vulnérabilité d’autrui.
            </p>
          </Card>

          <Card title="Présence agréable">
            <p>
              Il peut contribuer à l’ambiance d’un groupe, apporter de la confiance,
              de la jovialité, de la détente et un certain sens de l’hospitalité.
            </p>
          </Card>

          <Card title="Fiabilité">
            <p>
              Comme collègue, associé, partenaire ou collaborateur, il donne souvent
              une image de stabilité, de loyauté et de solidité.
            </p>
          </Card>
        </div>

        <Callout title="La tonalité jupitérienne">
          <p>
            Le bon Jupitérien aime généralement se sentir{" "}
            <strong className="text-white">utile, respectable et digne de confiance</strong>.
            Il préfère construire, protéger, encadrer ou élever plutôt que détruire.
          </p>
        </Callout>
      </section>

      <Divider />
 <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(251,191,36,0.1)] aspect-[7/3]">
        <Image
          src={JupiterienImage2}
          alt="Portrait symbolique du tempérament jupitérien en astrologie"
          fill
          priority
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>
      <section className="space-y-6">
        <H2>4) Vocation, carrière et statut social</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          La signature jupitérienne pousse rarement vers les tâches purement subies ou
          les fonctions sans portée. Elle cherche plutôt à se déployer dans des rôles
          où il y a de la responsabilité, de l’encadrement, de la représentation ou
          un enjeu de valeur sociale.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Professions favorisées" subtitle="Les terrains naturels de Jupiter">
            <p>
              Direction, administration, encadrement, gestion, banque, droit, conseil,
              représentation, magistrature, affaires publiques, enseignement élevé,
              spiritualité structurée, institutions, postes de responsabilité.
            </p>
          </Card>

          <Card title="Ce que Jupiter cherche dans le travail" subtitle="Plus qu’un revenu : une position">
            <p>
              Jupiter ne veut pas seulement gagner sa vie : il veut aussi exercer une
              fonction qui ait du sens, de la tenue, une dignité ou une forme de légitimité.
            </p>
          </Card>
        </div>

        <section
          aria-label="Lecture professionnelle du jupitérien"
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
            <div className="p-5 font-serif text-lg font-medium text-white/90">Niveau</div>
            <div className="p-5 font-serif text-lg font-medium text-white/90">Expression</div>
            <div className="p-5 font-serif text-lg font-medium text-white/90">Lecture</div>
          </div>

          <TableRow
            title="Expression simple"
            effect="Encadrement, caisse, atelier, gestion concrète"
            reading="Compétence d’organisation et de fiabilité"
          />
          <TableRow
            title="Expression élevée"
            effect="Direction, administration, conseil, institution"
            reading="Autorité, représentation, sens du cadre"
          />
          <TableRow
            title="Expression rare"
            effect="Politique, haute administration, religion, grande influence"
            reading="Jupiter très fort, reconnu et soutenu"
          />
        </section>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>5) Rapport au confort, à l’argent et aux plaisirs</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Le Jupitérien aime souvent vivre dans de bonnes conditions. Il apprécie
          le confort, la qualité, la belle maison, la bonne table, les plaisirs sains,
          l’aisance matérielle et une certaine ampleur de vie.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Jupiter équilibré">
            <p>
              Il sait profiter sans sombrer. Il garde normalement le sens de la mesure,
              aime les bonnes choses sans forcément les transformer en excès constants.
            </p>
          </Card>

          <Card title="Jupiter dissonant">
            <p>
              Les excès de table, l’embonpoint, la gourmandise, les dépenses de confort
              ou la recherche de prestige peuvent devenir plus visibles quand Jupiter est
              contrarié ou mêlé à d’autres facteurs de démesure.
            </p>
          </Card>
        </div>

        <Callout tone="warn" title="La vraie ombre de Jupiter">
          <p>
            L’excès jupitérien n’est pas seulement alimentaire. Il peut être aussi{" "}
            <strong className="text-white">moral, matériel ou social</strong> :
            trop de confiance, trop d’assurance, trop de dépenses de représentation,
            trop de certitude sur sa propre valeur.
          </p>
        </Callout>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>6) Honneur, prestige et besoin de considération</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Le point sensible du Jupitérien, même lorsqu’il est bon, reste souvent la
          question de l’honneur. Il veut être reconnu comme quelqu’un de valable,
          de respectable, de droit et de moralement digne.
        </p>

        <Card title="Pourquoi il réagit fortement" subtitle="Le respect fait partie de son équilibre">
          <p>
            Mettre en doute ses intentions, lui faire un reproche injuste ou salir son
            image peut le blesser beaucoup plus profondément qu’il ne le montre.
          </p>
          <p>
            Sous sa bonhomie, il y a souvent une parcelle d’orgueil, une vraie sensibilité
            à la flatterie et un besoin réel de considération sociale.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>7) Vie sentimentale, union et famille</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          La vie affective du bon Jupitérien est souvent plus régulière qu’agitée.
          Non qu’il manque d’attrait, mais il préfère généralement les formes stables,
          reconnues, légales et durables de l’union.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Jupiter harmonieux">
            <p>
              L’union légale peut se faire assez tôt et dans de bonnes conditions.
              La vie familiale tend alors vers la durée, la protection, une certaine
              aisance et une place importante donnée aux enfants.
            </p>
          </Card>

          <Card title="Jupiter déformé">
            <p>
              Lorsque l’orgueil, le prestige ou les dépenses déraisonnables prennent le
              dessus, les tensions matérielles, les écarts de conduite ou les ruptures
              peuvent devenir plus fréquents.
            </p>
          </Card>
        </div>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>8) Le bon Jupitérien et le mauvais Jupitérien</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Comme toujours en astrologie, une signature n’est jamais purement “bonne”
          ou “mauvaise”. Tout dépend de la qualité de Jupiter, de ses aspects, de son
          état céleste et de la manière dont le sujet l’incarne.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Le bon type jupitérien" subtitle="Noblesse, largeur, sens du juste">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-emerald-400">✔</span>
                <span>Généreux, protecteur, loyal, fiable</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-emerald-400">✔</span>
                <span>Capable d’organiser, diriger, rassurer, conseiller</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-emerald-400">✔</span>
                <span>Attaché à l’ordre, au cadre, à la légalité et à la mesure</span>
              </li>
            </ul>
          </Card>

          <Card title="Le type jupitérien mal équilibré" subtitle="Prétention, illusion, surévaluation de soi">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-red-400">✘</span>
                <span>Prétentions insupportables, sentiment que tout lui est dû</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-red-400">✘</span>
                <span>Projets trop grands pour ses moyens réels</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-red-400">✘</span>
                <span>Bluff, prestige, dépenses déraisonnables, jugement faussé</span>
              </li>
            </ul>
          </Card>
        </div>

        <Callout tone="warn" title="Point clé de diagnostic">
          <p>
            Le mauvais Jupitérien ne perd pas forcément le goût de la grandeur.
            Il garde souvent l’ambition, mais perd la{" "}
            <strong className="text-white">justesse de mesure</strong> qui permettrait
            de la rendre féconde.
          </p>
        </Callout>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>9) Aspect physique attribué au type jupitérien</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Dans les descriptions classiques, le type jupitérien est souvent associé
          à une présence pleine, charnue, assurée, avec une certaine largeur corporelle
          et un air de confiance paisible.
        </p>

        <section
          aria-label="Traits physiques du jupitérien"
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
            <div className="p-5 font-serif text-lg font-medium text-white/90">Zone</div>
            <div className="p-5 font-serif text-lg font-medium text-white/90">Tendance</div>
            <div className="p-5 font-serif text-lg font-medium text-white/90">Impression générale</div>
          </div>

          <TableRow
            title="Corps"
            effect="Stature moyenne à large, tendance à l’embonpoint"
            reading="Présence ample, rassurante, solide"
          />
          <TableRow
            title="Visage"
            effect="Teint frais, traits charnus, regard ouvert"
            reading="Expression optimiste, bienveillante, assurée"
          />
          <TableRow
            title="Voix et allure"
            effect="Voix grave, diction nette, allure modérée"
            reading="Autorité calme, présence de représentation"
          />
        </section>

        <Callout title="Précaution d’usage">
          <p>
            Ces portraits physiques appartiennent à la tradition symbolique. Ils peuvent
            inspirer une observation, mais ne remplacent jamais l’étude complète du thème
            ni la réalité concrète de la personne.
          </p>
        </Callout>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Synthèse : reconnaître une forte signature de Jupiter</H2>

        <section className="rounded-[2rem] border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-transparent p-8 shadow-2xl backdrop-blur-md">
          <ol className="list-decimal space-y-4 pl-6 text-lg text-white/90 marker:font-serif marker:font-bold marker:text-emerald-400">
            <li>Un esprit plus ordonné que rapide</li>
            <li>Un besoin de sens, de cadre et de respectabilité</li>
            <li>Une générosité réelle et un ton protecteur</li>
            <li>Une aptitude naturelle à organiser, représenter, encadrer</li>
            <li>Un goût du confort, mais normalement avec mesure</li>
            <li>Une sensibilité forte à l’honneur et à l’image morale</li>
            <li>
              <strong className="text-emerald-300">
                Un risque d’orgueil ou de prétention si Jupiter est mal tenu
              </strong>
            </li>
          </ol>
        </section>

        <Callout tone="ok" title="Conclusion astrologique">
          <p>
            Le Jupitérien bien construit n’est pas seulement “chanceux”. Il incarne
            une forme de <strong className="text-white">maîtrise tranquille</strong> :
            il sait ordonner, protéger, faire grandir, représenter et donner une forme
            sociale digne à ce qu’il entreprend.
          </p>
          <p>
            Quand Jupiter est beau, il élève. Quand il est déformé, il grossit.
            Toute la différence est là.
          </p>
        </Callout>
      </section>

      <section className="mt-16 space-y-8">
        <H2>FAQ — Le Jupitérien en astrologie</H2>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Qu’est-ce qu’un Jupitérien ?">
            <p>
              C’est un tempérament fortement marqué par Jupiter : goût de l’ordre,
              sens moral, bienveillance, besoin de reconnaissance, aptitude à guider,
              administrer, représenter ou protéger.
            </p>
          </Card>

          <Card title="Quels métiers lui conviennent le mieux ?">
            <p>
              Droit, administration, gestion, banque, représentation, encadrement,
              philosophie, religion, transmission, direction, conseil ou postes de dignité.
            </p>
          </Card>

          <Card title="Pourquoi les Jupitériens aiment-ils tant le respect ?">
            <p>
              Parce que Jupiter touche à la valeur morale, à l’honneur, à la dignité
              sociale et à l’estime. Leur équilibre dépend souvent fortement de cette reconnaissance.
            </p>
          </Card>

          <Card title="Quelle est l’ombre de Jupiter ?">
            <p>
              La démesure : se croire au-dessus, exiger les honneurs, dépenser pour paraître,
              surestimer ses moyens ou remplacer la vraie valeur par le prestige.
            </p>
          </Card>
        </div>
      </section>

      <footer className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md sm:p-12">
        <H3>Pour aller plus loin dans les portraits planétaires</H3>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Pill>Jupiter</Pill>
          <Pill tone="sky">Portrait astrologique</Pill>
          <Pill tone="violet">Psychologie</Pill>
          <Pill tone="emerald">Thème astral</Pill>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/blog/orientation-professionnelle-theme-astral"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Lire l’article sur la vocation
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/blog/finances-theme-astral"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Lire l’article sur les finances
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}