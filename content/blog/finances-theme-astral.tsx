import type { ReactNode } from "react";
import Link from "next/link";
import { Pill, TagPillsInline, getGlowFromTags } from "./ui";
import Image from "next/image";
import { AUTHOR_PERSON, PUBLISHER_ORG } from "@/lib/seo";
import FinanceAstroImage from "@/public/images/blog/finances-theme-astral.webp";

export const meta = {
  slug: "finances-theme-astral",
  title: "Les finances dans un thème astral",
  description:
    "Apprenez à analyser vos finances grâce au thème astral : étude de la Maison II, de ses planètes et aspects pour comprendre gains et pertes financières.",
  date: "2026-03-27",
  tags: [
    "finances",
    "argent",
    "maison II",
    "maison 2",
    "thème astral",
    "astrologie financière",
    "interprétation",
    "aspects",
    "maisons astrologiques",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/finances-theme-astral.webp",
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
  return (
    <h3 className="font-serif text-2xl font-medium text-white/90">
      {children}
    </h3>
  );
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

export default function FinancesThemeAstralPost() {
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
                  name: "Quelle maison regarder pour l’argent dans un thème astral ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "On commence généralement par la maison II, son signe de cuspide, son maître, les planètes qui occupent la maison II et les aspects qu’elles reçoivent.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Le maître de la maison II est-il plus important qu’une planète en maison II ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ce sont deux informations différentes. Le maître montre l’origine et la logique profonde des finances ; la planète en maison II montre ce qui agit directement dans ce domaine.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Peut-on voir la stabilité financière dans un thème astral ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Oui, en partie, en croisant la maison II, le maître de II, la qualité des planètes, les signes, les aspects et la répétition des indices dans le thème.",
                  },
                },
              ],
            },
          ]),
        }}
      />
<div className="relative w-full aspect-[7/3] rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(251,191,36,0.1)] bg-[#0f0f13] flex items-center justify-center">
              <Image src={FinanceAstroImage} alt="Un symbole astro avec des pieces de monnaie" fill priority className="object-cover" /> 
            
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent z-10 pointer-events-none" />
            </div>
      {/* HERO SECTION BLOG */}
      <header className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
        {/* Effets de lueur */}
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
          <Kicker>
            Argent • Maison II • Revenus • Stabilité
          </Kicker>

          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="font-serif text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl md:max-w-3xl">
              Maison II, maître, aspects et méthode d’interprétation
            </h2>

            <div className="flex flex-wrap gap-3 text-sm text-white/70">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                Lecture intermédiaire
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                Méthode pro
              </span>
            </div>
          </div>

          <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            Pour juger les <strong className="font-medium text-amber-200">finances dans un thème astral</strong>,
            il ne suffit pas de regarder “une planète d’argent” ou un simple indice
            isolé. Une lecture sérieuse repose d’abord sur la{" "}
            <strong className="font-medium text-white">maison II</strong>, puis sur le{" "}
            <strong className="font-medium text-white">signe de sa cuspide</strong>, le{" "}
            <strong className="font-medium text-white">maître de la maison II</strong>, les{" "}
            <strong className="font-medium text-white">planètes présentes en maison II</strong>, leurs{" "}
            <strong className="font-medium text-white">aspects</strong>, ainsi que les maisons qu’elles
            gouvernent. C’est cette hiérarchie qui permet de comprendre comment une
            personne gagne, conserve, sécurise ou fragilise son argent.
          </p>

          <div className="mt-8 pt-6 border-t border-white/5">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      
  
      {/* STATS RAPIDES */}
      <section className="grid gap-4 sm:grid-cols-3" aria-label="Points clés de l'article">
        <Stat label="Maison clé" value="Maison II" />
        <Stat label="Pivot d’analyse" value="Le maître de la II" />
        <Stat label="Erreur fréquente" value="Présence ≠ Maîtrise" />
      </section>

      {/* CALLOUT D'INTRODUCTION */}
      <Callout tone="note" title="Le point de départ juste">
        <p>
          Dans certains manuels, on lit qu’une planète présente dans une maison
          “prime” sur le maître de cette maison. En réalité, ce sont{" "}
          <strong className="text-white">deux informations différentes</strong>.
        </p>
        <p>
          La planète située en maison II montre{" "}
          <strong className="text-white">ce qui agit directement</strong> dans les finances.
          Le maître de la maison II montre{" "}
          <strong className="text-white">l’origine, la motivation et la logique profonde</strong>{" "}
          du fonctionnement financier.
        </p>
      </Callout>

      <Divider />


{/* METHODE RAPIDE */}
      <section aria-labelledby="methode-titre" className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 shadow-2xl backdrop-blur-md sm:p-12">
        <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-amber-500/10 blur-[60px]" aria-hidden="true" />
        
        <h2 id="methode-titre" className="relative z-10 font-serif text-2xl font-medium text-white sm:text-3xl">
          La méthode complète pour analyser l’argent dans un thème
        </h2>
        
        <div className="relative z-10 mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "1. Lire le signe de la cuspide de la maison II",
            "2. Étudier le maître de la maison II",
            "3. Vérifier si la maison II est occupée",
            "4. Juger l’état céleste de la planète en II",
            "5. Regarder le signe de cette planète",
            "6. Examiner les aspects reçus",
            "7. Voir quelles maisons elle emporte avec elle",
            "8. Faire une synthèse hiérarchisée",
          ].map((item, index) => (
            <div
              key={item}
              className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-black/40 px-5 py-4 transition-colors hover:border-amber-500/30 hover:bg-white/5"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500/10 font-serif text-sm font-bold text-amber-400 group-hover:bg-amber-500/20">
                {index + 1}
              </span>
              <span className="text-sm font-medium text-white/85 sm:text-base">{item.replace(/^\d+\.\s/, "")}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 1. SIGNE CUSPIDE */}
      <section className="space-y-6">
        <H2>1) Le signe de la cuspide de la maison II</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Le signe placé à la cuspide de la maison II indique la{" "}
          <strong className="font-medium text-amber-200">conception personnelle de l’argent</strong> :
          comment on imagine la sécurité matérielle, comment on se rassure, comment
          on dépense, comment on protège ses ressources, et dans quel esprit on veut
          gagner sa vie.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card
            title="Ce que le signe révèle"
            subtitle="Le signe donne le style financier et la psychologie de base."
          >
            <p>
              Il ne dit pas encore d’où vient l’argent, ni si les finances seront
              faciles ou difficiles. Il montre surtout{" "}
              <strong className="text-white">la manière de vivre le sujet</strong> :
              prudence, peur de manquer, besoin de contrôle, goût du confort,
              recherche de liberté, besoin de sécurité ou prise de risque.
            </p>
          </Card>

          <Card
            title="Deux exemples simples"
            subtitle="Deux cuspides, deux logiques d’argent très différentes."
          >
            <p className="mb-3">
              <strong className="text-white">Scorpion en maison II</strong> :
              peur de perdre, besoin de verrouiller, besoin de sécurité avant de
              dépenser, stratégie de protection.
            </p>
            <p>
              <strong className="text-white">Verseau en maison II</strong> :
              l’argent est lié à la liberté, à la marge de manœuvre, avec parfois
              une confiance instinctive dans la capacité à retrouver des solutions.
            </p>
          </Card>
        </div>

        <Callout tone="ok" title="Réflexe de lecture">
          <p>
            Le signe de la maison II décrit d’abord{" "}
            <strong className="text-white">un rapport subjectif à l’argent</strong>.
            Il ne suffit pas, à lui seul, pour conclure sur le niveau réel de richesse.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* 2. MAITRE MAISON II */}
      <section className="space-y-6">
        <H2>2) Le maître de la maison II</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Le maître de la maison II est central. Il montre{" "}
          <strong className="font-medium text-amber-200">l’origine des finances</strong>, la motivation
          profonde à gagner de l’argent, ainsi que le domaine concret à travers lequel
          les ressources se construisent, se déclenchent ou se compliquent.
        </p>

        <Card
          title="Règle fondamentale"
          subtitle="L’origine et la motivation d’une maison sont là où se trouve son maître."
        >
          <div className="space-y-4">
            <p>
              <span className="text-amber-400">✦</span> Si le maître de la maison II se trouve en <strong className="text-white">maison V</strong>, les finances peuvent
              être liées aux enfants, aux passions, aux créations, aux loisirs, à la
              visibilité personnelle, à l’art ou à une production inspirée du plaisir.
            </p>
            <p>
              <span className="text-amber-400">✦</span> Si le maître de II est en <strong className="text-white">maison X</strong>, l’argent peut venir de la carrière,
              du statut, de la fonction sociale, de la réputation ou de l’autorité.
            </p>
            <p>
              <span className="text-amber-400">✦</span> Si le maître de II est en <strong className="text-white">maison VI</strong>, les revenus passent plus facilement
              par le travail quotidien, le service, l’utilité concrète, les routines ou
              la discipline professionnelle.
            </p>
          </div>
        </Card>

        <Callout title="Ce qu’il faut faire ensuite">
          <p>
            Repérer le maître de II ne suffit pas. Il faut aussi{" "}
            <strong className="text-white">analyser la maison où il se trouve</strong>,
            son signe, sa qualité et ses aspects. C’est là que se trouve le moteur
            réel des finances.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* 3. MAISON OCCUPEE */}
      <section className="space-y-6">
        <H2>3) La maison II est-elle occupée par une planète ?</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Lorsqu’une planète se trouve en maison II, elle devient active dans le
          domaine financier. Elle agit directement sur les revenus, la gestion de
          l’argent, les dépenses, les priorités matérielles ou la stabilité financière.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card
            title="Ce que cela signifie"
            subtitle="La planète devient déterminée envers les affaires de la maison II."
          >
            <p className="mb-3">
              Une planète en maison II montre un acteur concret dans la question
              financière. Elle colore la manière de gagner, dépenser, protéger ou
              transformer les ressources.
            </p>
            <p>
              Son état céleste devient donc capital : une planète forte ne promet pas
              la même chose qu’une planète faible, contrariée ou mal soutenue.
            </p>
          </Card>

          <Card
            title="Ce qu’il faut juger"
            subtitle="La présence seule ne suffit jamais."
          >
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-emerald-400">✔</span>
                <span><strong className="text-white">Domicile ou exaltation :</strong> plus de facilité à tenir ses promesses</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-sky-400">✔</span>
                <span><strong className="text-white">Terme ou triplicité :</strong> appui utile mais plus modéré</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-amber-400">✔</span>
                <span><strong className="text-white">Bon lien avec son maître :</strong> meilleure cohérence</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-red-400">✘</span>
                <span><strong className="text-white">Mauvais état céleste :</strong> résultats plus fragiles ou instables</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      <Divider />

      {/* 4. SIGNE DE LA PLANETE EN II */}
      <section className="space-y-6">
        <H2>4) Le signe de la planète située en maison II</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Le signe de la planète en maison II modifie la façon dont les événements
          financiers se manifestent dans le temps. Il renseigne sur la stabilité, la
          fréquence des changements et la durabilité des résultats.
        </p>

        <section aria-label="Tableau des signes" className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm">
          <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
            <div className="p-5 font-serif text-lg font-medium text-white/90">Type de signe</div>
            <div className="p-5 font-serif text-lg font-medium text-white/90">Effet dominant</div>
            <div className="p-5 font-serif text-lg font-medium text-white/90">Lecture financière</div>
          </div>

          <TableRow
            title="Cardinal (Bélier, Cancer...)"
            effect="Déclenche, bouge, réagit vite"
            reading="Intensité et démarrage rapide, mais pas toujours durable"
          />
          <TableRow
            title="Fixe (Taureau, Lion...)"
            effect="Stabilise, garde, consolide"
            reading="Durabilité, meilleure capacité de conservation"
          />
          <TableRow
            title="Mutable (Gémeaux, Vierge...)"
            effect="Adapte, varie, change souvent"
            reading="Souplesse réelle, mais risque d’instabilité ou de fluctuations"
          />
        </section>

        <Callout tone="warn" title="Nuance importante">
          <p>
            Un signe mutable n’est pas “mauvais” pour les finances. Il indique plutôt
            une logique de variation, d’adaptation, de changement fréquent ou de
            mobilité. Il faut alors compenser par une bonne structure ailleurs dans le thème.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* 5. MAISON SUCCEDANTE */}
      <section className="space-y-6">
        <H2>5) La maison II est une maison succédante</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          La maison II est une maison de consolidation. Elle retient, organise,
          stabilise, accumule et sécurise plus qu’elle ne lance. Dans la tradition,
          une planète en maison succédante ne déploie pas toujours toute sa force
          de manière immédiate.
        </p>

        <Card
          title="Conséquence de lecture"
          subtitle="La maison II parle de construction, de maintien et de solidification."
        >
          <p className="mb-3">
            Une planète en maison II agit bel et bien, mais souvent de façon plus
            progressive, plus installée, plus matérielle. Elle construit plus qu’elle
            ne jaillit.
          </p>
          <p>
            En revanche, si le{" "}
            <strong className="font-medium text-amber-200">maître de la maison II est lui-même placé en maison II</strong>,
            il gagne en puissance : il peut alors accomplir plus facilement les
            attributs de la maison.
          </p>
        </Card>
      </section>

      <Divider />

      {/* 6. ASPECTS RECUS */}
      <section className="space-y-6">
        <H2>6) Les aspects reçus par la planète en maison II</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Les aspects montrent si la planète présente en maison II est soutenue,
          renforcée, compliquée, ralentie ou combattue. Il faut juger à la fois la
          nature de l’aspect, la qualité de la planète qui l’envoie et la maison
          d’où elle parle.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Lecture générale des planètes">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-white/50">✦</span>
                <span><strong className="text-white">Jupiter et Vénus</strong> tendent à renforcer les finances</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-white/50">✦</span>
                <span><strong className="text-white">Soleil, Lune, Mercure</strong> peuvent aider de façon modérée</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-white/50">✦</span>
                <span><strong className="text-white">Mars et Saturne</strong> créent plus souvent des tensions ou des restrictions</span>
              </li>
            </ul>
          </Card>

          <Card title="Lecture générale des aspects">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-emerald-400">△</span>
                <span><strong className="text-white">Trigone :</strong> très favorable, circulation plus naturelle</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-sky-400">✱</span>
                <span><strong className="text-white">Sextile :</strong> positif, aide réelle mais plus modeste</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-amber-400">□</span>
                <span><strong className="text-white">Carré :</strong> tension, effort, dépense, lutte ou instabilité</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-red-400">☍</span>
                <span><strong className="text-white">Opposition :</strong> polarisation, blocage, pertes possibles</span>
              </li>
            </ul>
          </Card>
        </div>

        <section aria-label="Tableau des états célestes" className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm">
          <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
            <div className="p-5 font-serif text-lg font-medium text-white/90">Situation de l'aspect</div>
            <div className="p-5 font-serif text-lg font-medium text-white/90">Effet</div>
            <div className="p-5 font-serif text-lg font-medium text-white/90">Lecture</div>
          </div>

          <TableRow
            title="Bénéfique bien disposée"
            effect="Renforce franchement"
            reading="Soutien réel, promesse plus solide"
          />
          <TableRow
            title="Bénéfique mal disposée"
            effect="Aide affaiblie"
            reading="Appui partiel, résultats moins stables"
          />
          <TableRow
            title="Maléfique bien disposée"
            effect="Freine sans tout casser"
            reading="Difficulté gérable, structure possible"
          />
          <TableRow
            title="Maléfique mal disposée"
            effect="Déforce nettement"
            reading="Tension forte, pression ou blocages plus lourds"
          />
        </section>

        <Callout title="La maison d’où vient l’aspect change tout">
          <p>
            La maison occupée par la planète qui envoie l’aspect montre{" "}
            <strong className="text-white">le domaine de vie qui aide ou entrave les finances</strong>.
          </p>
          <p>
            Un bon aspect de Jupiter depuis la maison X peut soutenir les finances
            par la carrière, le statut ou la reconnaissance. Un aspect utile de Vénus
            peut favoriser l’argent via les liens, l’image, l’art, les relations ou
            le soutien social, selon la maison concernée.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* 7. MAITRISE DE LA PLANETE */}
      <section className="space-y-6">
        <H2>7) Que maîtrise la planète située en maison II ?</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Une règle classique dit que{" "}
          <strong className="font-medium text-amber-200">le maître d’une maison emporte sa maison avec lui</strong>.
          Autrement dit, la planète présente en maison II apporte avec elle les
          significations des maisons qu’elle gouverne.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Exemple d’interprétation">
            <p>
              Si une planète placée en maison II maîtrise la <strong className="text-white">maison XII</strong>, elle peut
              faire entrer dans les finances des charges lourdes, des pertes, des
              épreuves, des dépenses cachées, des freins ou une forme d’érosion.
            </p>
          </Card>

          <Card title="Lecture de fond">
            <p>
              La ou les maisons gouvernées par la planète en II deviennent souvent
              la <strong className="font-medium text-amber-200">cause</strong> du fonctionnement financier :
              ce qui nourrit, motive, perturbe, ouvre ou bloque l’argent.
            </p>
          </Card>
        </div>
      </section>

      <Divider />

      {/* SYNTHESE GLOBALE */}
      <section className="space-y-6">
        <H2>Synthèse : l’ordre juste pour juger les finances</H2>

        <section className="rounded-[2rem] border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-transparent p-8 shadow-2xl backdrop-blur-md">
          <ol className="list-decimal space-y-4 pl-6 text-lg text-white/90 marker:font-serif marker:font-bold marker:text-emerald-400">
            <li>Lire le signe de la cuspide de la maison II</li>
            <li>Étudier le maître de la maison II et la maison où il se trouve</li>
            <li>Vérifier la présence éventuelle d’une planète en maison II</li>
            <li>Juger sa qualité céleste et son signe</li>
            <li>Analyser les aspects qu’elle reçoit</li>
            <li>Examiner les maisons qu’elle gouverne</li>
            <li><strong className="text-emerald-300">Faire une synthèse globale, sans jamais isoler un seul facteur.</strong></li>
          </ol>
        </section>

        <Callout tone="ok" title="Conclusion professionnelle">
          <p>
            Une bonne lecture de l’argent en astrologie ne repose jamais sur un seul
            indice. Elle repose sur une{" "}
            <strong className="text-white">lecture hiérarchisée et croisée</strong>.
          </p>
          <p>
            La maison II dit <em>comment</em> la question financière se pose. Son maître dit
            <em> d’où</em> elle vient. La planète en II dit <em>ce qui</em> agit directement. Les aspects
            disent ce qui <em>soutient ou contrarie</em>. Les maîtrises disent ce qui en est
            <em> la cause profonde</em>.
          </p>
        </Callout>
      </section>

      {/* FAQ */}
      <section className="mt-16 space-y-8">
        <H2>FAQ — Argent et thème astral</H2>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Quelle maison regarder pour l’argent ?">
            <p>
              La base est la <strong className="text-white">maison II</strong>. Ensuite,
              selon la question, on peut compléter avec la maison VIII (argent de l'autre/banques), la maison X (carrière)
              ou d’autres maisons du thème.
            </p>
          </Card>

          <Card title="Une planète en maison II est-elle toujours favorable ?">
            <p>
              Non. Tout dépend de sa nature, de son état céleste, de son signe, de
              ses aspects et des maisons qu’elle gouverne. Une maléfique affligée peut signifier des fuites d'argent.
            </p>
          </Card>

          <Card title="Le maître de II est-il plus important que la planète en II ?">
            <p>
              Ils ne disent pas la même chose. Il faut les lire ensemble, et non
              les opposer mécaniquement. Le maître montre la racine, la planète montre l'action.
            </p>
          </Card>

          <Card title="Peut-on voir la stabilité financière ?">
            <p>
              Oui, partiellement, en croisant la maison II, son maître, la nature des
              signes (fixes = durables), les aspects et la répétition des indices dans le thème.
            </p>
          </Card>
        </div>
      </section>

      {/* POUR ALLER PLUS LOIN */}
      <footer className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md sm:p-12">
        <H3>Pour aller plus loin dans votre analyse</H3>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Pill>Maison II</Pill>
          <Pill tone="sky">Maisons astrologiques</Pill>
          <Pill tone="violet">Aspects</Pill>
          <Pill tone="emerald">Thème astral</Pill>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/blog/qu-est-ce-qu-un-theme-astral"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Comprendre le thème astral
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/blog/conjonction-melange-des-forces"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Maîtriser la conjonction
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}