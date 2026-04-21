import type { ReactNode } from "react";
import Link from "next/link";
import { Pill, TagPillsInline, getGlowFromTags } from "./ui";
import Image from "next/image";
import OrientationProImage from "@/public/images/blog/orientation-professionnelle-theme-astral.webp";

export const meta = {
  slug: "orientation-professionnelle-theme-astral",
  title: "Orientation professionnelle dans un thème astral",
  description:
    "Comment analyser l’orientation professionnelle dans un thème astral : seigneur de l’action, maison X, maison I, Part de Fortune, maître du MC, vocation, métier & statut social.",
  date: "2026-03-28",
  tags: [
    "orientation professionnelle",
    "vocation",
    "métier",
    "carrière",
    "maison X",
    "milieu du ciel",
    "thème astral",
    "interprétation",
    "Mercure",
    "Mars",
    "Vénus",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/orientation-professionnelle-theme-astral.webp",
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

export default function OrientationProfessionnelleThemeAstralPost() {
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
                  name: "Quelle maison regarder pour l’orientation professionnelle en astrologie ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La maison X reste prioritaire pour la reconnaissance sociale et la carrière, mais la maison I est aussi essentielle pour le tempérament, l’identité et la manière de prendre sa place dans la vie.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quelles planètes donnent la nature fondamentale de la vocation ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dans cette méthode, Mars, Vénus et Mercure sont les trois seigneurs de l’action qui décrivent la nature fondamentale de la vocation : action, art ou intellect.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Le Milieu du Ciel suffit-il pour trouver la profession ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Non. Le Milieu du Ciel est très important, mais une lecture sérieuse croise aussi les maisons I, VII, IV, II, VI, la Part de Fortune, les aspects, le maître du MC et la hiérarchie des planètes impliquées.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(251,191,36,0.1)] aspect-[7/3]">
        <Image
          src={OrientationProImage}
          alt="Illustration symbolique de l’orientation professionnelle en astrologie"
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
          <Kicker>Vocation • Profession • Maison X • Maison I • Milieu du Ciel</Kicker>

          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="font-serif text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl md:max-w-3xl">
              Trouver l’orientation professionnelle dans un thème astral
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
            L’<strong className="font-medium text-amber-200">orientation professionnelle en astrologie</strong>{" "}
            ne se réduit pas à “un métier écrit dans le ciel”. Les indicateurs professionnels
            montrent plutôt ce qui nous attire, parfois très tôt, parfois de façon inconsciente,
            et ce pour quoi nous développons plus naturellement certaines compétences. Pour lire
            la vocation, la profession ou la carrière, il faut croiser la{" "}
            <strong className="font-medium text-white">maison X</strong>, la{" "}
            <strong className="font-medium text-white">maison I</strong>, les{" "}
            <strong className="font-medium text-white">seigneurs de l’action</strong>, la{" "}
            <strong className="font-medium text-white">Part de Fortune</strong>, le{" "}
            <strong className="font-medium text-white">Milieu du Ciel</strong> et la force réelle
            des planètes concernées.
          </p>

          <div className="mt-8 border-t border-white/5 pt-6">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-3" aria-label="Points clés de l'article">
        <Stat label="Maison prioritaire" value="Maison X" />
        <Stat label="Maison d’identité" value="Maison I" />
        <Stat label="Planètes clés" value="Mars • Vénus • Mercure" />
      </section>

      <Callout tone="note" title="Le bon angle de lecture">
        <p>
          Les indicateurs professionnels ne donnent pas seulement un métier “possible”.
          Ils montrent surtout une{" "}
          <strong className="text-white">nature d’action</strong>, une manière de se mettre
          en mouvement, un type de compétence que l’on développe plus facilement et un
          style d’engagement envers le travail.
        </p>
        <p>
          L’idéal est que la profession réelle soit en accord avec la vocation profonde.
          Quand ce n’est pas le cas, il devient souvent plus difficile de s’épanouir durablement.
        </p>
      </Callout>

      <Divider />

      <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 shadow-2xl backdrop-blur-md sm:p-12">
        <div
          className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-amber-500/10 blur-[60px]"
          aria-hidden="true"
        />

        <h2 className="relative z-10 font-serif text-2xl font-medium text-white sm:text-3xl">
          La méthode complète pour chercher la vocation
        </h2>

        <div className="relative z-10 mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "1. Chercher une planète en maison X ou en maison I",
            "2. À défaut, regarder la maison VII puis la maison IV",
            "3. Ensuite seulement, regarder la maison II et la maison VI",
            "4. Donner du poids à la maison où se trouve la Part de Fortune",
            "5. Vérifier les aspects au Milieu du Ciel ou à son maître",
            "6. Examiner les levers héliaques autour de la naissance",
            "7. Regarder les applications du Soleil et de la Lune",
            "8. Vérifier les dignités sur la Lune, le MC et l’Ascendant",
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

      <section className="space-y-6">
        <H2>1) Les trois seigneurs de l’action</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Dans cette méthode, trois planètes donnent la{" "}
          <strong className="font-medium text-amber-200">nature fondamentale de la vocation</strong>.
          Toutes les planètes affinent la lecture, mais Mars, Vénus et Mercure
          décrivent particulièrement bien le type d’action que le natif est poussé
          à développer.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Mars" subtitle="Action • force • engagement concret">
            <p>
              Mars favorise les métiers manuels, physiques, techniques, compétitifs,
              opérationnels, risqués ou exigeant du courage et de l’initiative.
            </p>
            <p>
              Il peut aussi soutenir des fonctions de commandement, de leadership,
              d’encadrement ou de prise de décision.
            </p>
          </Card>

          <Card title="Vénus" subtitle="Art • esthétique • plaisir • qualité">
            <p>
              Vénus favorise les activités artistiques, esthétiques, créatives,
              culinaires, vocales, décoratives, relationnelles ou sensorielles.
            </p>
            <p>
              Elle parle de goût, d’harmonie, de beauté, d’élégance, mais aussi
              d’attractivité et de raffinement.
            </p>
          </Card>

          <Card title="Mercure" subtitle="Pensée • analyse • savoir-faire mental">
            <p>
              Mercure favorise les métiers où l’on pense, calcule, analyse,
              communique, enseigne, écrit, organise, classe, traduit ou explique.
            </p>
            <p>
              Il renvoie à l’intelligence pratique, au traitement de l’information
              et aux professions fondées sur le mental ou la technique intellectuelle.
            </p>
          </Card>
        </div>

        <Callout tone="ok" title="Idée centrale">
          <p>
            Mars, Vénus et Mercure ne donnent pas un intitulé de poste exact.
            Ils donnent plutôt le{" "}
            <strong className="text-white">ton fondamental de la vocation</strong> :
            agir, créer ou penser.
          </p>
        </Callout>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>2) Où chercher le seigneur de l’action ?</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          La hiérarchie des maisons n’est pas neutre. Certaines maisons rendent
          la planète plus visible, plus opérante, plus manifeste dans la vie sociale
          ou dans l’identité profonde du natif.
        </p>

        <section
          aria-label="Hiérarchie des maisons"
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
            <div className="p-5 font-serif text-lg font-medium text-white/90">Maison</div>
            <div className="p-5 font-serif text-lg font-medium text-white/90">Rôle</div>
            <div className="p-5 font-serif text-lg font-medium text-white/90">Importance</div>
          </div>

          <TableRow
            title="Maison X"
            effect="Reconnaissance, carrière, réussite, statut"
            reading="Priorité maximale pour la profession"
          />
          <TableRow
            title="Maison I"
            effect="Tempérament, identité, talents, manière d’être"
            reading="Très importante pour la vocation"
          />
          <TableRow
            title="Maison VII"
            effect="Vis-à-vis, monde extérieur, interaction"
            reading="Second plan mais encore utile"
          />
          <TableRow
            title="Maison IV"
            effect="Base intime, fondation, enracinement"
            reading="À considérer, mais moins parlante socialement"
          />
          <TableRow
            title="Maison II"
            effect="Ressources, soutien matériel"
            reading="Succédente, mais plus importante que les autres succédentes"
          />
          <TableRow
            title="Maison VI"
            effect="Service, tâches, quotidien, utilité"
            reading="Seule cadente à retenir ici"
          />
        </section>

        <Callout title="Résumé pratique">
          <p>
            Par ordre d’importance, on regardera surtout la{" "}
            <strong className="text-white">X</strong>, la{" "}
            <strong className="text-white">I</strong>, puis la{" "}
            <strong className="text-white">VII</strong>, la{" "}
            <strong className="text-white">IV</strong>, la{" "}
            <strong className="text-white">II</strong> et enfin la{" "}
            <strong className="text-white">VI</strong>.
          </p>
        </Callout>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>3) Pourquoi la maison X ne suffit pas à elle seule</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          La maison X parle de reconnaissance sociale, de réussite visible, de
          position, d’accomplissement et d’honneur. Elle reste donc prioritaire.
          Mais la maison I est, elle aussi, capitale, parce qu’elle décrit la manière
          dont une personne se vit, se manifeste, agit spontanément et prend sa place.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Maison X" subtitle="Le sommet visible">
            <p>
              Elle montre la carrière, le statut, la reconnaissance, l’ambition,
              la réputation et la manière dont l’action peut être vue publiquement.
            </p>
          </Card>

          <Card title="Maison I" subtitle="Le moteur incarné">
            <p>
              Elle montre le tempérament, les talents naturels, l’identité,
              le style personnel et la façon dont le natif s’engage concrètement dans la vie.
            </p>
          </Card>
        </div>

        <Callout tone="warn" title="Erreur fréquente">
          <p>
            Réduire la profession au seul Milieu du Ciel appauvrit la lecture.
            Une vocation a besoin d’un{" "}
            <strong className="text-white">sommet visible</strong>, mais aussi d’un{" "}
            <strong className="text-white">support identitaire</strong>.
          </p>
        </Callout>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>4) Part de Fortune, Milieu du Ciel et maître du MC</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Une lecture raffinée de l’orientation professionnelle ne s’arrête pas aux
          maisons occupées. La <strong className="text-white">Part de Fortune</strong>,
          le <strong className="text-white">Milieu du Ciel</strong> et le{" "}
          <strong className="text-white">maître du MC</strong> renforcent ou hiérarchisent
          certaines planètes.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Part de Fortune">
            <p>
              La maison où se trouve la Part de Fortune mérite un poids particulier.
              Elle peut montrer un secteur de réalisation concrète, d’efficacité ou
              d’accomplissement matériel.
            </p>
          </Card>

          <Card title="Milieu du Ciel">
            <p>
              Une planète qui aspecte le MC devient plus pertinente pour la carrière,
              la visibilité sociale et l’orientation professionnelle.
            </p>
          </Card>

          <Card title="Maître du MC">
            <p>
              Une planète en lien fort avec le maître du MC prend davantage de poids
              dans la lecture de la vocation et de la trajectoire professionnelle.
            </p>
          </Card>
        </div>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>5) Soleil, Lune et relation aux lumières</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Les luminaires renforcent la portée professionnelle d’une planète.
          Une planète à laquelle la Lune ou le Soleil applique, une planète en aspect
          exact avec le luminaire maître de la secte, ou encore une planète fortement
          liée au Soleil peut devenir beaucoup plus importante dans la lecture vocationnelle.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Le Soleil" subtitle="Lumière publique, autorité, visibilité">
            <p>
              Le Soleil oriente vers les choses héroïques, publiques, médiatisées,
              valorisées, centralisées ou liées à la volonté et au rayonnement.
            </p>
          </Card>

          <Card title="La Lune" subtitle="Protection, adaptation, matière vivante">
            <p>
              La Lune renvoie davantage aux choses particulières, nourricières,
              protectrices, naturelles, sensibles, subjectives ou liées aux besoins.
            </p>
          </Card>
        </div>

        <Callout title="Relation utile à retenir">
          <p>
            Une planète liée de près au Soleil ou à la Lune devient souvent plus
            parlante pour la profession, parce qu’elle reçoit davantage de{" "}
            <strong className="text-white">poids existentiel</strong>.
          </p>
        </Callout>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>6) Dignités, combustion et stationnement</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Une planète ne vaut pas seulement par sa maison : elle vaut aussi par sa
          force réelle. Pour juger la vocation, il faut mesurer ses dignités, sa
          relation au Soleil, et même son stationnement autour de la naissance.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Ce qui renforce">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-emerald-400">✔</span>
                <span>Une planète en domicile agit plus selon sa nature propre</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-emerald-400">✔</span>
                <span>Une planète ayant de fortes dignités au MC ou à l’Ascendant est renforcée</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-emerald-400">✔</span>
                <span>Une planète stationnaire avant de redevenir directe près de la naissance peut être très puissante</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-emerald-400">✔</span>
                <span>Une planète cazimi peut être exceptionnellement renforcée</span>
              </li>
            </ul>
          </Card>

          <Card title="Ce qui affaiblit">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-red-400">✘</span>
                <span>Une planète combuste perd en force d’expression</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-red-400">✘</span>
                <span>Une station proche de la rétrogradation tend à affaiblir la planète</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-red-400">✘</span>
                <span>Un mauvais état céleste réduit la netteté des promesses professionnelles</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>7) Le signe du seigneur des actions</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Le signe dans lequel se trouve le seigneur des actions modifie fortement
          la manière dont la vocation s’exprime. Il faut regarder la nature du signe,
          son type, son rythme et sa quadruplicité.
        </p>

        <section
          aria-label="Tableau des types de signes"
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
            <div className="p-5 font-serif text-lg font-medium text-white/90">Type</div>
            <div className="p-5 font-serif text-lg font-medium text-white/90">Tendance</div>
            <div className="p-5 font-serif text-lg font-medium text-white/90">Lecture pro</div>
          </div>

          <TableRow
            title="Cardinal"
            effect="Impact, mouvement, extraversion, changement"
            reading="Capacité à initier, lancer, impulser, agir vite"
          />
          <TableRow
            title="Fixe"
            effect="Stabilité, profondeur, durée, persistance"
            reading="Travail de fond, construction lente, maîtrise à long terme"
          />
          <TableRow
            title="Mutable"
            effect="Dualité, mélange, interaction, adaptation"
            reading="Souplesse, polyvalence, aller-retour, ajustement continu"
          />
        </section>

        <Callout tone="ok" title="Exemple simple">
          <p>
            Un <strong className="text-white">Mars en Cancer</strong> peut être courageux,
            utile, actif, protecteur, parfois bricoleur, mais rarement téméraire au
            sens brut du terme. Le signe nuance toujours la nature de la planète.
          </p>
        </Callout>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>8) Influence du statut social et rôle des autres planètes</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Une même planète ne donnera pas exactement la même profession selon le
          milieu social, les opportunités réelles et la structure globale du thème.
          Le symbolisme reste stable, mais son niveau de manifestation varie.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Mars selon le contexte">
            <p>
              Avec un statut élevé, Mars peut orienter vers des chefs militaires,
              des responsables, des décideurs ou des dirigeants. Dans un contexte plus
              modeste, il peut davantage favoriser les métiers manuels, techniques,
              physiques ou de terrain.
            </p>
          </Card>

          <Card title="Jupiter, Saturne, Soleil, Lune">
            <p>
              <strong className="text-white">Jupiter</strong> oriente vers l’idéal,
              la loi, la vérité, la religion, la transmission, la vision.
            </p>
            <p>
              <strong className="text-white">Saturne</strong> parle de gestion,
              discipline, terre, structure, administration, contrôle, service public,
              ressources, contraintes et responsabilités.
            </p>
            <p>
              <strong className="text-white">Soleil et Lune</strong> ajoutent un poids
              de lumière, de statut, de centralité ou de nécessité vitale à la fonction.
            </p>
          </Card>
        </div>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Synthèse : l’ordre juste pour juger l’orientation professionnelle</H2>

        <section className="rounded-[2rem] border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-transparent p-8 shadow-2xl backdrop-blur-md">
          <ol className="list-decimal space-y-4 pl-6 text-lg text-white/90 marker:font-serif marker:font-bold marker:text-emerald-400">
            <li>Repérer les planètes en maison X et en maison I</li>
            <li>Compléter par les maisons VII, IV, II et VI si nécessaire</li>
            <li>Identifier Mars, Vénus et Mercure comme seigneurs de l’action</li>
            <li>Regarder la Part de Fortune, le MC et le maître du MC</li>
            <li>Mesurer les aspects, les dignités et les liens aux luminaires</li>
            <li>Nuancer par le signe, la maison et le statut social</li>
            <li>
              <strong className="text-emerald-300">
                Faire une synthèse globale entre vocation, profession et manière d’agir
              </strong>
            </li>
          </ol>
        </section>

        <Callout tone="ok" title="Conclusion professionnelle">
          <p>
            Une lecture vocationnelle sérieuse ne cherche pas seulement “quel métier”.
            Elle cherche aussi{" "}
            <strong className="text-white">comment la personne agit, pourquoi elle agit,
            et dans quel cadre elle peut réellement s’épanouir</strong>.
          </p>
          <p>
            La profession visible, la vocation profonde et le style d’action doivent
            être lus ensemble. C’est ce croisement qui rend l’orientation professionnelle
            astrologique utile, concrète et intelligente.
          </p>
        </Callout>
      </section>

      <section className="mt-16 space-y-8">
        <H2>FAQ — Orientation professionnelle et thème astral</H2>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Quelle maison regarder pour la carrière ?">
            <p>
              La maison X reste prioritaire pour la carrière, le statut et la
              reconnaissance. Mais la maison I est essentielle pour comprendre la
              manière de porter concrètement cette vocation.
            </p>
          </Card>

          <Card title="Mars, Vénus et Mercure suffisent-ils ?">
            <p>
              Non. Ils donnent la nature fondamentale de l’action, mais toute la carte
              doit ensuite être nuancée par les autres planètes, les signes, les aspects
              et les maisons.
            </p>
          </Card>

          <Card title="Pourquoi regarder la Part de Fortune ?">
            <p>
              Parce qu’elle peut désigner un lieu d’efficacité, de réalisation ou de
              potentiel concret qui soutient la profession.
            </p>
          </Card>

          <Card title="Peut-on voir une vocation non alignée avec le métier réel ?">
            <p>
              Oui. C’est même une des grandes utilités de cette lecture : montrer
              l’écart éventuel entre ce que l’on fait et ce pour quoi l’on est
              naturellement structuré.
            </p>
          </Card>
        </div>
      </section>

      <footer className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md sm:p-12">
        <H3>Pour aller plus loin dans l’analyse professionnelle</H3>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Pill>Maison X</Pill>
          <Pill tone="sky">Milieu du Ciel</Pill>
          <Pill tone="violet">Vocation</Pill>
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