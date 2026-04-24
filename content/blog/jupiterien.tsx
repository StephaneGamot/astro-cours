import type { ReactNode } from "react";
import Link from "next/link";
import { Pill, TagPillsInline, getGlowFromTags } from "./ui";
import Image from "next/image";
import { AUTHOR_PERSON, PUBLISHER_ORG } from "@/lib/seo";
import JupiterienImage from "@/public/images/blog/jupiterien1.webp";
import JupiterienImage2 from "@/public/images/blog/jupiterien2.webp";

export const meta = {
  slug: "jupiterien",
  title:
    "Jupitérien : le Guide & le Bienfaiteur",
  description:
    "Portrait astrologique du Jupitérien : abondance, loi, optimisme et pouvoir. Découvrez l'influence et les excès de Jupiter dans un thème astral.",
  date: "2026-04-02",
  tags: [
    "Jupiter",
    "jupiterien",
    "portrait astrologique",
    "thème astral",
    "psychologie astrologique",
    "vocation",
    "amour",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/jupiterien1.webp",
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
                  name: "Qu’est-ce qu’un Jupitérien en astrologie ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Le Jupitérien est un type planétaire à Jupiter dominant : vision, générosité, autorité bienveillante, optimisme et envergure intellectuelle.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quels métiers pour une dominante Jupiter ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Magistrature, enseignement supérieur, diplomatie, banque, grande entreprise, religion, édition.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quels risques avec un Jupiter affligé ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mégalomanie, excès en tout, gaspillage, arrogance, promesses non tenues, procès.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Comment savoir si je suis Jupitérien ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Jupiter angulaire, en Sagittaire ou Poissons, trigone/sextile au Soleil ou à la Lune, amas en Sagittaire.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(245,158,11,0.12)] aspect-[7/3]">
        <Image
          src={JupiterienImage}
          alt="Portrait symbolique du tempérament jupitérien en astrologie"
          fill
          sizes="100vw"
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
          <Kicker>Jupiter • ordre • loi • abondance • protection</Kicker>

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

          <div className="mt-8 max-w-3xl rounded-xl border border-violet-400/20 bg-violet-400/5 p-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet-300">Définition</p>
            <p className="mt-2 text-base leading-relaxed text-white/80 sm:text-lg">
              Le <strong>Jupitérien en astrologie</strong> désigne un individu dont <Link href="/planetes/jupiter" className="text-violet-300 underline decoration-violet-300/30 hover:decoration-violet-300">Jupiter</Link> occupe une position dominante dans le <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="text-violet-300 underline decoration-violet-300/30 hover:decoration-violet-300">thème natal</Link> (angulaire, bien aspecté, en Sagittaire ou Poissons). Il se distingue par une vision élargie, un sens naturel de la justice et une générosité expansive qui le pousse vers les hautes responsabilités.
            </p>
          </div>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            Vous avez <strong>Jupiter dominant</strong> dans votre thème astral et un optimisme à toute épreuve qui vous pousse vers les sommets ? Cette envergure naturelle inspire la confiance, mais elle recèle un piège : excès, arrogance, gaspillage de ressources. Ce portrait complet du <strong>tempérament jupitérien</strong> — psychologie, carrière, amour, morphopsychologie — dévoile les ressorts de cette dominante planétaire majeure, de l&apos;archétype de Zeus au risque de l&apos;hubris.
          </p>

          <div className="mt-8 border-t border-white/5 pt-6">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-3" aria-label="Points clés du portrait jupitérien">
        <Stat label="Force centrale" value="Ordre & abondance" />
        <Stat label="Terrain naturel" value="Protection & organisation" />
        <Stat label="Ombre principale" value="Excès & prétention" />
      </section>

      <section className="space-y-6">
        <H2>L&apos;intelligence jupitérienne : vision globale, synthèse et optimisme</H2>

        <Card title="L’intellect">
          <p>
            L&apos;intelligence du Jupitérien n&apos;a ni la fulgurance hyperactive du Mercurien, ni l&apos;aridité du Saturnien. Son esprit se distingue par trois qualités majeures : le discernement, le jugement et la méthode.
          </p>
          <p>
            C&apos;est l&apos;un des cerveaux les mieux organisés du zodiaque. S&apos;il n&apos;a pas toujours une mémoire photographique instantanée, cela n&apos;a aucune importance : son esprit fonctionne comme une bibliothèque parfaitement classée. Face à un problème complexe, le Jupitérien ne panique jamais. Il trie, hiérarchise, sépare l&apos;essentiel du superflu et trouve la solution avec une évidence déconcertante.
          </p>
          <p>
            Durant sa jeunesse et sa scolarité, c&apos;est l&apos;étudiant à qui tout réussit (il a d&apos;ailleurs la réputation d&apos;être &quot;chanceux&quot; aux examens). En réalité, cette chance est souvent le résultat de son respect inné pour les directives et d&apos;un bon sens absolu. Sa soif d&apos;apprendre est vaste, mais il brille particulièrement dans les domaines qui structurent la société :
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>La Loi et la Justice : Le droit, la magistrature, la diplomatie.</li>
            <li>L&apos;Organisation : L&apos;administration publique, la gestion de grandes entreprises, l&apos;économie financière.</li>
            <li>L&apos;Élévation de la Pensée : La sociologie, la philosophie, la théologie ou les hautes responsabilités religieuses.</li>
          </ul>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Le Jupitérien en société : générosité, prestige et sens du commandement</H2>

        <Card title="La vie sociale">
          <p>
            En société, le Jupitérien rayonne d&apos;une bonhomie naturelle, de sincérité et de tolérance. C&apos;est le pilier autour duquel les autres se rassemblent. Il adopte naturellement (et parfois inconsciemment) un ton protecteur.
          </p>
          <p>
            Il a le cœur sur la main. S&apos;il a réussi sa propre vie (ce qui est généralement le cas), il mettra un point d&apos;honneur à utiliser son influence ou son argent pour protéger les plus faibles, conseiller utilement ou consoler. L&apos;astrologie traditionnelle affirme à juste titre que sans les Jupitériens, il n&apos;existerait ni associations caritatives, ni fondations philanthropiques. Ce sont eux qui arrondissent les angles d&apos;un monde souvent trop dur.
          </p>
          <p>
            Son talon d&apos;Achille ? L&apos;Orgueil et le besoin de considération. Le Jupitérien est très pointilleux sur son honneur et sa respectabilité. Foncièrement généreux, il aime qu&apos;on le remarque et qu&apos;on le remercie. Pour garder son amitié et ses faveurs, il faut éviter à tout prix de le critiquer en public ou de douter de sa probité. Il est, avouons-le, très sensible à la flatterie, car il est convaincu (souvent à raison) de sa propre valeur morale.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Le Jupitérien en amour : grandeur d&apos;âme, fidélité et besoin d&apos;admiration</H2>

        <Card title="L’amour">
          <p>
            La vie sentimentale du Jupitérien est le reflet de sa vie sociale : ordonnée, chaleureuse et respectueuse de l&apos;opinion publique. Il a une sainte horreur des scandales amoureux.
          </p>
          <p>
            Le Jupitérien aime la régularité, le confort et la légalité. De ce fait, c&apos;est une signature astrale qui mène très souvent au mariage, et ce, dans d&apos;excellentes conditions. Le foyer d&apos;un Jupitérien est pensé comme un havre de paix, souvent marqué par une large aisance matérielle, de belles réceptions et une grande table ouverte aux amis. Les enfants y tiennent une place centrale.
          </p>
          <p>
            C&apos;est très certainement sous l&apos;égide de Jupiter que l&apos;on compte le taux le plus bas de divorces et de séparations fracassantes. Même en cas de brillante ascension sociale l&apos;exposant à de multiples tentations, le Jupitérien préfèrera toujours préserver l&apos;équilibre, le prestige et le confort de son foyer légal plutôt que de tout détruire pour une aventure passagère.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Métiers du Jupitérien : quelles carrières pour une dominante Jupiter ?</H2>

        <Card title="La vocation">
          <p>
            La destinée d&apos;un bon Jupitérien se place presque toujours &quot;au-dessus de la moyenne&quot;. Ce n&apos;est pas le signe des tâches ingrates de l&apos;ombre. Son épanouissement naturel se trouve dans la direction, la gestion et le pouvoir.
          </p>
          <p>
            On le retrouvera avec une facilité déconcertante aux postes de direction : PDG, cadres supérieurs, banquiers, administrateurs, ou hommes et femmes politiques de haut rang. (Fait historique passionnant : L&apos;astrologie mondiale associe souvent les périodes de grande prospérité, comme la &quot;Belle Époque&quot;, à des cycles jupitériens, caractérisés par l&apos;expansion économique et la diplomatie, par opposition aux cycles de Mars ou Saturne qui engendrent des guerres et des crises).
          </p>
          <p>
            C&apos;est évidemment un &quot;bon vivant&quot;. Il aime le confort d&apos;une belle demeure, les plaisirs de la table, les bons vins et les voyages d&apos;agrément, tout en sachant (s&apos;il est équilibré) garder le sens de la mesure.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Jupiter affligé dans le thème natal : excès, mégalomanie et gaspillage</H2>

        <Callout tone="warn" title="L’ombre de Jupiter">
          <p>
            Lorsque Jupiter est gravement dissonant dans le thème (en carré ou opposition avec des planètes difficiles), l&apos;optimisme se mue en prétention, et l&apos;abondance devient excès.
          </p>
          <p>
            Le &quot;mauvais&quot; Jupitérien souffre d&apos;un complexe de supériorité insupportable. Son jugement faussé le pousse à surestimer ses capacités. Il élabore des projets grandioses et mégalomanes qui finissent par s&apos;effondrer, entraînant la ruine de ses collaborateurs ou de sa famille (dont il rejettera toujours la faute sur les autres ou sur la &quot;malchance&quot;).
          </p>
          <p>
            S&apos;il n&apos;atteint pas la position sociale qu&apos;il estime lui être due de droit divin, ce type dissonant peut devenir cynique. Au lieu d&apos;être un pilier de la loi, il peut être tenté par l&apos;escroquerie financière, le &quot;bluff&quot; intellectuel, ou se transformer en révolutionnaire de salon, cherchant à détruire un système qui a refusé de le couronner. C&apos;est également dans ces configurations que l&apos;on trouve les excès physiques majeurs : gourmandise irrépressible, obésité ou addiction au luxe.
          </p>
        </Callout>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>La Jupitérienne en astrologie : portrait de la femme à dominante Jupiter</H2>

        <Card title="L’expression Yin">
          <p>
            Dans un thème astral à forte dominante Yin ou chez la femme, une belle signature jupitérienne incarne la &quot;Grande Dame&quot;, l&apos;organisatrice brillante et la parfaite maîtresse de maison.
          </p>
          <p>
            L&apos;occultiste français Péladan disait d&apos;elle : &quot;En évoquant les femmes de la cour de Louis XIV, on a les plus beaux spécimens de cette influence. Elle réunit les qualités de sérieux et d&apos;élégance nécessaires à toute représentation.&quot;
          </p>
          <p>
            Aujourd&apos;hui, si elle ne seconde pas la carrière d&apos;un époux influent, la Jupitérienne prend elle-même les rênes. Elle excelle dans les carrières libérales, la magistrature ou la direction d&apos;entreprise. Elle impose le respect par son autorité naturelle, toujours mâtinée de bienveillance.
          </p>
          <p>
            Si Jupiter est maléficié, l&apos;orgueil prend le dessus. Convaincue que &quot;tout lui est dû&quot;, elle exige de la vie des honneurs et un train de vie luxueux sans vouloir en fournir l&apos;effort. Elle peut ruiner son ménage par des dépenses de prestige inconsidérées (le fameux &quot;paraître à tout prix&quot;) et crier à l&apos;injustice cosmique si on lui refuse la moindre de ses exigences.
          </p>
        </Card>
      </section>

        <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(245,158,11,0.12)] aspect-[7/3]">
        <Image
          src={JupiterienImage2}
          alt="Portrait de Zeus en astrologie"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>

      <section className="space-y-6">
        <H2>Morphopsychologie du Jupitérien : portrait physique et apparence</H2>

        <Card title="Le portrait physique">
          <p>
            La morphologie du Jupitérien transpire l&apos;abondance, l&apos;autorité tranquille et la santé. Tout chez lui est pensé à l&apos;échelle de l&apos;expansion :
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>L&apos;allure générale : Des formes puissantes, amples et majestueuses. Une carrure souvent imposante, tendant naturellement vers l&apos;embonpoint avec les années (Jupiter dilate ce qu&apos;il touche). Sa démarche est modérée, ancrée, jamais précipitée.</li>
            <li>Le visage : Une carnation charnue, souvent rosée ou fraîche. Le contour du visage rappelle un trapèze. Le front est vaste, légèrement convexe, signalant une grande capacité de synthèse intellectuelle.</li>
            <li>Le regard : Des yeux grands, bien ouverts, riants et profondément bienveillants. Les sourcils sont généralement très développés, parfois dessinés en &quot;accent circonflexe&quot;, donnant au visage une expression d&apos;autorité naturelle.</li>
            <li>Les détails : Un nez charnu, une bouche grande et sinueuse aux lèvres colorées et gourmandes (le signe par excellence des bons vivants). La voix du Jupitérien est inoubliable : grave, chaleureuse, avec une diction nette et parfois un brin emphatique, idéale pour captiver un auditoire. (Chez l&apos;homme, le port de la barbe — rappelant la figure mythologique de Zeus — est très fréquent).</li>
          </ul>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Ce qu&apos;il faut retenir du profil Jupitérien en astrologie</H2>

        <Callout tone="ok" title="Conclusion">
          <p>
            En conclusion : Avoir une forte dominante Jupitérienne dans son thème astral est un immense privilège, mais aussi une grande responsabilité sociale. Le Jupitérien est le berger du zodiaque. Sa véritable mission karmique n&apos;est pas seulement d&apos;accumuler les succès et le confort pour lui-même, mais de veiller à ce que la prospérité, la justice et la chaleur humaine ruissellent sur tous ceux qui croisent son chemin.
          </p>
        </Callout>
      </section>

      <section
        aria-label="Synthèse du portrait jupitérien"
        className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm"
      >
        <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
          <div className="p-5 font-serif text-lg font-medium text-white/90">Axe</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Expression</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Risque</div>
        </div>

        <TableRow
          title="Intellect"
          effect="Méthode, discernement, synthèse, jugement"
          reading="Surestimation, certitudes excessives, suffisance"
        />
        <TableRow
          title="Vie sociale"
          effect="Protection, générosité, chaleur, influence"
          reading="Orgueil, besoin de considération, flatterie"
        />
        <TableRow
          title="Amour"
          effect="Foyer stable, respectabilité, paix, confort"
          reading="Rigidité sociale, attachement excessif au prestige"
        />
        <TableRow
          title="Vocation"
          effect="Direction, loi, administration, diplomatie"
          reading="Mégalomanie, bluff, excès matériels et luxe"
        />
      </section>

      <section id="faq-jupiterien" className="space-y-6" aria-label="Questions fréquentes sur le Jupitérien">
        <H2>Questions fréquentes sur le Jupitérien</H2>

        {[
          {
            q: "Qu\u2019est-ce qu\u2019un Jupitérien en astrologie ?",
            a: "Le Jupitérien est un type planétaire à Jupiter dominant : vision, générosité, autorité bienveillante, optimisme et envergure intellectuelle.",
          },
          {
            q: "Quels métiers pour une dominante Jupiter ?",
            a: "Magistrature, enseignement supérieur, diplomatie, banque, grande entreprise, religion, édition.",
          },
          {
            q: "Quels risques avec un Jupiter affligé ?",
            a: "Mégalomanie, excès en tout, gaspillage, arrogance, promesses non tenues, procès.",
          },
          {
            q: "Comment savoir si je suis Jupitérien ?",
            a: "Jupiter angulaire, en Sagittaire ou Poissons, trigone/sextile au Soleil ou à la Lune, amas en Sagittaire.",
          },
        ].map(({ q, a }) => (
          <details
            key={q}
            className="group rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md transition-colors open:bg-white/[0.04]"
          >
            <summary className="flex cursor-pointer items-center gap-3 p-5 text-base font-medium text-white/90 hover:text-violet-200 md:text-lg">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-300/60 text-sm text-white" aria-hidden="true">?</span>
              {q}
            </summary>
            <div className="px-5 pb-5 pl-14 text-sm leading-relaxed text-white/70 md:text-base">
              {a}
            </div>
          </details>
        ))}
      </section>

      <footer className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md sm:p-12">
        <H3>Pour aller plus loin dans les portraits planétaires</H3>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Pill>Jupiter</Pill>
          <Pill tone="sky">Portrait astrologique</Pill>
          <Pill tone="violet">Organisation</Pill>
          <Pill tone="emerald">Thème astral</Pill>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/blog/martien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Lire le portrait du Martien
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/blog/saturnien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Lire le portrait du Saturnien
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}