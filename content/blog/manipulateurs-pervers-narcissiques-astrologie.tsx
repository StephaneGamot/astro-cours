import type { ReactNode } from "react";
import { TagPillsInline, getGlowFromTags } from "./ui";

/* ================================================================== */
/*  META / SEO                                                        */
/* ================================================================== */
export const meta = {
  slug: "manipulateurs-pervers-narcissiques-astrologie",
  title:
    "Manipulateurs et Pervers Narcissiques : les Reconnaître grâce à l'Astrologie",
  description:
    "Comment l'astrologie peut aider à identifier les profils manipulateurs et pervers narcissiques dans un thème natal : planètes, aspects, maisons, signes ciblés et mécanismes de protection.",
  date: "2026-04-16",
  tags: [
    "psychologie astrologique",
    "manipulation",
    "pervers narcissique",
    "Pluton",
    "Neptune",
    "aspects",
    "thème astral",
    "relations",
    "protection",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/manipulateurs-pn.webp",
};

/* ================================================================== */
/*  COMPOSANTS LOCAUX                                                 */
/* ================================================================== */
function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-violet-300">
      <span
        className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-300"
        aria-hidden="true"
      />
      {children}
    </span>
  );
}

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-6 flex items-center font-serif text-2xl font-light text-white sm:text-3xl md:text-4xl">
      <span
        className="mr-4 block h-px w-8 bg-gradient-to-r from-violet-400/60 to-transparent"
        aria-hidden="true"
      />
      {children}
    </h2>
  );
}

function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-serif text-xl font-medium text-white/90 sm:text-2xl">
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
      box: "border-red-500/30 bg-red-500/10 shadow-[0_0_30px_rgba(239,68,68,0.06)]",
      icon: "text-red-300",
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
      box: "border-violet-400/25 bg-violet-400/10 shadow-[0_0_30px_rgba(139,92,246,0.05)]",
      icon: "text-violet-200",
      svg: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  };
  const current = styles[tone];

  return (
    <aside
      aria-label={title}
      className={`relative overflow-hidden rounded-2xl border p-5 backdrop-blur-md sm:p-6 ${current.box}`}
    >
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-current opacity-30 to-transparent" />
      <div className={`mb-3 flex items-center gap-3 font-serif text-base font-medium sm:text-lg ${current.icon}`}>
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
    <section className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md transition-colors hover:bg-white/[0.05] sm:rounded-3xl sm:p-7">
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
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-sm transition-all hover:border-violet-300/30 sm:p-5">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-300/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <p className="text-[0.65rem] uppercase tracking-widest text-white/50 sm:text-xs">{label}</p>
      <p className="mt-1.5 font-serif text-lg text-white/90 sm:mt-2 sm:text-xl">{value}</p>
    </div>
  );
}

function Divider() {
  return <hr className="my-10 border-t border-white/10 sm:my-12" aria-hidden="true" />;
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
    <div className="group grid grid-cols-1 border-b border-white/10 transition-colors hover:bg-violet-300/[0.03] md:grid-cols-3">
      <div className="px-3 py-3 font-serif text-base text-violet-200/90 sm:px-4 sm:py-4 sm:text-lg">{title}</div>
      <div className="px-3 py-3 text-sm leading-relaxed text-white/80 sm:px-4 sm:py-4">{effect}</div>
      <div className="px-3 py-3 text-sm leading-relaxed text-white/80 sm:px-4 sm:py-4">{reading}</div>
    </div>
  );
}

function SignCard({
  sign,
  why,
  tone,
}: {
  sign: string;
  why: string;
  tone: "rose" | "sky" | "amber" | "emerald" | "violet";
}) {
  const colors = {
    rose: "border-rose-400/20 bg-rose-500/[0.06] hover:border-rose-400/30",
    sky: "border-sky-400/20 bg-sky-500/[0.06] hover:border-sky-400/30",
    amber: "border-amber-400/20 bg-amber-500/[0.06] hover:border-amber-400/30",
    emerald: "border-emerald-400/20 bg-emerald-500/[0.06] hover:border-emerald-400/30",
    violet: "border-violet-400/20 bg-violet-500/[0.06] hover:border-violet-400/30",
  };
  const dots = {
    rose: "bg-rose-400",
    sky: "bg-sky-400",
    amber: "bg-amber-400",
    emerald: "bg-emerald-400",
    violet: "bg-violet-400",
  };
  return (
    <div className={`rounded-xl border p-4 transition-colors sm:p-5 ${colors[tone]}`}>
      <div className="flex items-center gap-2">
        <span className={`h-2 w-2 rounded-full ${dots[tone]}`} aria-hidden />
        <p className="font-serif text-base font-semibold text-white/90 sm:text-lg">{sign}</p>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-white/60">{why}</p>
    </div>
  );
}

/* ================================================================== */
/*  ARTICLE                                                           */
/* ================================================================== */
export default function ManipulateursPNPost() {
  const glow = getGlowFromTags(meta.tags);

  return (
    <article className="mx-auto max-w-4xl space-y-10 pb-20 pt-8 text-white sm:space-y-12">
      {/* ── Schema.org ── */}
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
              wordCount: 4500,
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Peut-on voir un pervers narcissique dans un thème astral ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "L'astrologie ne diagnostique pas un trouble psychiatrique. En revanche, certaines configurations planétaires — notamment Pluton, Neptune et Lilith en aspects tendus aux luminaires — signalent des tendances manipulatrices, un besoin de contrôle excessif ou une difficulté à respecter les limites d'autrui.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quelles planètes sont liées à la manipulation en astrologie ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Pluton (pouvoir, contrôle, emprise), Neptune (illusion, mensonge, confusion) et dans une moindre mesure Lilith (transgression des limites) sont les principaux marqueurs. Mars afflligé peut ajouter une dimension d'agressivité et de domination.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quels profils astrologiques attirent les pervers narcissiques ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Les profils à forte dominante Neptune ou Lune (empathie, réceptivité, sacrifice) ainsi que les Vénus ou Soleil en signes d'eau ou en Poissons sont particulièrement ciblés. Le PN cherche une source d'énergie émotionnelle — il est attiré par les personnalités lumineuses, empathiques et généreuses.",
                  },
                },
                {
                  "@type": "Question",
                  name: "L'astrologie peut-elle protéger d'un manipulateur ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "L'astrologie est un outil de conscience, pas un bouclier magique. En identifiant dans son propre thème les zones de vulnérabilité (Neptune puissant, Lune fragile, maison XII chargée) et les transits déclencheurs, on peut anticiper les périodes de fragilité émotionnelle et renforcer ses limites.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      {/* ── Header ── */}
      <header className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6 shadow-2xl backdrop-blur-xl sm:rounded-[2.5rem] sm:p-8 md:p-12">
        <div
          className={`pointer-events-none absolute -right-24 -top-24 h-[500px] w-[500px] rounded-full opacity-30 mix-blend-screen blur-[100px] ${glow}`}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-violet-300/5 blur-[80px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-rose-500/5"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <Kicker>Pluton &bull; Neptune &bull; Emprise &bull; Protection &bull; Conscience</Kicker>

          <h1 className="mt-4 font-serif text-2xl font-light leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
            Manipulateurs et Pervers Narcissiques&nbsp;:{" "}
            <span className="bg-gradient-to-r from-violet-400 via-rose-400 to-amber-300 bg-clip-text text-transparent">
              les Reconna&icirc;tre gr&acirc;ce &agrave; l&rsquo;Astrologie
            </span>
          </h1>

          <div className="mt-6 flex flex-wrap gap-2 text-sm text-white/70 sm:gap-3">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs backdrop-blur-md sm:px-4 sm:py-1.5 sm:text-sm">
              Lecture interm&eacute;diaire
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs backdrop-blur-md sm:px-4 sm:py-1.5 sm:text-sm">
              Psychologie astrologique
            </span>
            <span className="rounded-full border border-rose-400/20 bg-rose-500/10 px-3 py-1 text-xs text-rose-200 backdrop-blur-md sm:px-4 sm:py-1.5 sm:text-sm">
              Relations toxiques
            </span>
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-white/70 sm:mt-8 sm:text-base sm:leading-relaxed lg:text-lg">
            L&rsquo;astrologie ne pose pas de diagnostic clinique. Mais elle offre un &eacute;clairage
            puissant sur les m&eacute;canismes de pouvoir, d&rsquo;emprise et de fascination que
            certains individus exercent sur leur entourage. Cet article explore les signatures
            plan&eacute;taires des profils manipulateurs, les cibles qu&rsquo;ils privil&eacute;gient
            et les outils que le th&egrave;me natal met &agrave; notre disposition pour se
            prot&eacute;ger.
          </p>

          <div className="mt-6 border-t border-white/5 pt-5 sm:mt-8 sm:pt-6">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      {/* ── Stats ── */}
      <section className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4" aria-label="Points cl&eacute;s">
        <Stat label="Plan&egrave;te cl&eacute;" value="Pluton" />
        <Stat label="Plan&egrave;te complice" value="Neptune" />
        <Stat label="Terrain de chasse" value="Maisons VII &amp; VIII" />
        <Stat label="Bouclier" value="Saturne &amp; Lune" />
      </section>

      {/* ================================================================ */}
      {/*  PARTIE 1 — COMPRENDRE                                          */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>Avant-propos : l&rsquo;Astrologie n&rsquo;est pas un Tribunal</H2>

        <Card title="Une boussole, pas un verdict">
          <p>
            Il est essentiel de poser un cadre clair d&egrave;s le d&eacute;part. L&rsquo;astrologie est un outil symbolique de connaissance de soi et d&rsquo;observation des dynamiques relationnelles. Elle n&rsquo;a ni la pr&eacute;tention ni la l&eacute;gitimit&eacute; de remplacer un diagnostic psychiatrique ou psychologique. Un th&egrave;me natal ne fait pas d&rsquo;un individu un &laquo;&nbsp;pervers narcissique&nbsp;&raquo; &mdash; ce terme d&eacute;signe un trouble de la personnalit&eacute; reconnu par la psychiatrie, et seul un professionnel de sant&eacute; mentale est habilit&eacute; &agrave; poser ce diagnostic.
          </p>
          <p>
            Cela pos&eacute;, l&rsquo;astrologie met en lumi&egrave;re des <strong className="text-white/90">tendances</strong>, des <strong className="text-white/90">potentialit&eacute;s</strong> et des <strong className="text-white/90">sch&eacute;mas &eacute;nerg&eacute;tiques</strong> qui, lorsqu&rsquo;ils ne sont pas conscientis&eacute;s, peuvent s&rsquo;exprimer sous des formes destructrices. C&rsquo;est pr&eacute;cis&eacute;ment l&agrave; que r&eacute;side sa valeur&nbsp;: elle offre une grille de lecture pour reconna&icirc;tre les m&eacute;canismes avant qu&rsquo;ils ne fassent des ravages.
          </p>
          <p>
            L&rsquo;objectif de cet article n&rsquo;est pas de d&eacute;signer des coupables parmi les signes du zodiaque, mais de comprendre les configurations plan&eacute;taires qui favorisent les comportements manipulateurs &mdash; et surtout, d&rsquo;identifier dans votre propre th&egrave;me les zones de vuln&eacute;rabilit&eacute; qui pourraient vous rendre sensible &agrave; ce type de personnalit&eacute;.
          </p>
        </Card>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTIE 2 — LES PLANÈTES DE L'EMPRISE                          */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>Les Plan&egrave;tes de l&rsquo;Emprise</H2>

        <Card title="Pluton : le Ma&icirc;tre du Pouvoir invisible" subtitle="La plan&egrave;te de la transformation... ou de la destruction">
          <p>
            Pluton est la plan&egrave;te cl&eacute; lorsque l&rsquo;on aborde le sujet de la manipulation. Ma&icirc;tre du Scorpion, gouverneur de la maison VIII (la mort symbolique, les crises, les h&eacute;ritages &eacute;motionnels, la sexualit&eacute; profonde), Pluton incarne le pouvoir sous sa forme la plus brute.
          </p>
          <p>
            Dans son expression &eacute;lev&eacute;e, Pluton est la capacit&eacute; de transformation int&eacute;rieure, la r&eacute;silience, la renaissance apr&egrave;s l&rsquo;&eacute;preuve. C&rsquo;est le ph&eacute;nix qui rena&icirc;t de ses cendres. Mais dans son expression sombre, Pluton devient obsession du contr&ocirc;le, domination psychologique, chantage &eacute;motionnel et fascination pour le pouvoir sur autrui.
          </p>
          <p>
            Un Pluton fortement aspectant dans un th&egrave;me natal &mdash; en conjonction au Soleil, &agrave; la Lune, &agrave; V&eacute;nus ou &agrave; l&rsquo;Ascendant &mdash; conf&egrave;re une intensit&eacute; magn&eacute;tique ind&eacute;niable. La personne attire, fascine, hypnotise. Ce pouvoir de fascination est pr&eacute;cis&eacute;ment l&rsquo;outil premier du manipulateur. Le regard plutonien est p&eacute;n&eacute;trant, l&rsquo;intuition chirurgicale&nbsp;: il d&eacute;tecte instinctivement les failles de l&rsquo;autre et sait exactement o&ugrave; appuyer pour obtenir ce qu&rsquo;il veut.
          </p>
          <p>
            Les aspects tendus de Pluton (carr&eacute;, opposition) aux luminaires ou &agrave; V&eacute;nus indiquent une gestion probl&eacute;matique du pouvoir dans les relations intimes. Le natif peut osciller entre deux p&ocirc;les&nbsp;: contr&ocirc;ler l&rsquo;autre ou &ecirc;tre contr&ocirc;l&eacute; par lui. C&rsquo;est le terrain de l&rsquo;emprise.
          </p>
        </Card>

        <Card title="Neptune : le Grand Illusionniste" subtitle="L&rsquo;art de brouiller la r&eacute;alit&eacute;">
          <p>
            Si Pluton contr&ocirc;le, Neptune envo&ucirc;te. Ma&icirc;tre des Poissons et de la maison XII, Neptune r&egrave;gne sur l&rsquo;imaginaire, l&rsquo;illusion, la dissolution des fronti&egrave;res et le sacrifice. Dans son expression harmonieuse, Neptune est la compassion universelle, l&rsquo;art, la spiritualit&eacute;, la po&eacute;sie. Mais dans son ombre, Neptune est le mensonge d&eacute;guis&eacute; en r&ecirc;ve, la confusion d&eacute;lib&eacute;r&eacute;e, le gaslighting cosmique.
          </p>
          <p>
            Le manipulateur neptunien n&rsquo;op&egrave;re pas par la force. Il s&eacute;duit par le flou. Il cr&eacute;e un monde parall&egrave;le o&ugrave; la victime perd ses rep&egrave;res&nbsp;: &laquo;&nbsp;Tu as r&ecirc;v&eacute;&nbsp;&raquo;, &laquo;&nbsp;Tu te fais des id&eacute;es&nbsp;&raquo;, &laquo;&nbsp;Ce n&rsquo;est pas ce que j&rsquo;ai dit&nbsp;&raquo;. Toutes ces phrases sont des signatures neptuniennes. La victime finit par douter de sa propre perception de la r&eacute;alit&eacute;.
          </p>
          <p>
            Un Neptune en aspect dur au Soleil, &agrave; Mercure ou &agrave; la Lune dans le th&egrave;me du manipulateur signale une capacit&eacute; naturelle &agrave; alt&eacute;rer la v&eacute;rit&eacute; sans m&ecirc;me s&rsquo;en rendre compte parfois &mdash; tant le flou neptunien est int&eacute;rioris&eacute;. Le mensonge devient une seconde nature, un r&eacute;flexe de survie &eacute;motionnelle qui se retourne contre l&rsquo;entourage.
          </p>
        </Card>

        <Card title="Lilith : la Transgression des Limites" subtitle="Le point de r&eacute;bellion absolue">
          <p>
            Lilith (la Lune noire) n&rsquo;est pas une plan&egrave;te mais un point fictif du th&egrave;me natal. Elle repr&eacute;sente ce que l&rsquo;on refuse de soumettre, la zone de r&eacute;bellion absolue, le d&eacute;sir brut non n&eacute;gociable. Bien v&eacute;cue, Lilith est l&rsquo;affirmation de soi au-del&agrave; des conventions. Mal v&eacute;cue, elle est la transgression syst&eacute;matique des limites d&rsquo;autrui.
          </p>
          <p>
            Une Lilith conjoint au Soleil, &agrave; Mars ou &agrave; Pluton renforce consid&eacute;rablement les m&eacute;canismes de domination. Le natif peut exercer une s&eacute;duction trouble, d&eacute;rangeante, qui m&ecirc;le attirance et malaise &mdash; une signature fr&eacute;quente chez les profils que l&rsquo;on qualifie de &laquo;&nbsp;toxiques&nbsp;&raquo; en langage courant.
          </p>
        </Card>

        <Card title="Mars afflig&eacute; : la Violence comme Outil" subtitle="Quand l&rsquo;action se transforme en agression">
          <p>
            Mars, dans son expression saine, est le courage, l&rsquo;initiative, la capacit&eacute; de d&eacute;fendre ses limites. Mais un Mars en aspects tr&egrave;s tendus (carr&eacute; ou opposition &agrave; Pluton, carr&eacute; &agrave; Saturne, conjonction &agrave; Lilith) peut produire une agressivit&eacute; froide et calcul&eacute;e, une violence verbale ou psychologique utilis&eacute;e comme instrument de contr&ocirc;le.
          </p>
          <p>
            La combinaison Mars-Pluton en tension est particuli&egrave;rement r&eacute;v&eacute;latrice. Elle conf&egrave;re une volont&eacute; de puissance qui, si elle n&rsquo;est pas canalis&eacute;e (sport, entreprise, engagement), se retourne contre les proches sous forme de domination, d&rsquo;intimidation ou de col&egrave;res froides et d&eacute;vastatrices.
          </p>
        </Card>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTIE 3 — LES ASPECTS RÉVÉLATEURS                             */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>Les Aspects et Configurations R&eacute;v&eacute;lateurs</H2>

        <Card title="Tableau des aspects &agrave; surveiller">
          <div className="overflow-hidden rounded-xl border border-white/10">
            <div className="hidden border-b border-white/15 bg-white/[0.04] md:grid md:grid-cols-3">
              <div className="p-4 text-xs font-semibold uppercase tracking-widest text-white/60">Aspect</div>
              <div className="p-4 text-xs font-semibold uppercase tracking-widest text-white/60">Dynamique</div>
              <div className="p-4 text-xs font-semibold uppercase tracking-widest text-white/60">Expression sombre</div>
            </div>
            <TableRow
              title="Pluton &#9744; Soleil"
              effect="Lutte de pouvoir avec l&rsquo;identit&eacute; profonde"
              reading="Ego d&eacute;mesur&eacute;, besoin de contr&ocirc;le absolu, incapacit&eacute; &agrave; partager le pouvoir"
            />
            <TableRow
              title="Pluton &#9744; Lune"
              effect="Contr&ocirc;le &eacute;motionnel, emprise sur l&rsquo;intime"
              reading="Manipulation affective, chantage sentimental, jalousie d&eacute;vorante"
            />
            <TableRow
              title="Pluton &#9744; V&eacute;nus"
              effect="Passion obsessionnelle, possession"
              reading="Amour toxique, sexualit&eacute; utilis&eacute;e comme arme, destruction de l&rsquo;estime de l&rsquo;autre"
            />
            <TableRow
              title="Neptune &#9744; Mercure"
              effect="Brouillage de la communication"
              reading="Mensonge chronique, double discours, gaslighting"
            />
            <TableRow
              title="Neptune &#9744; Soleil"
              effect="Identit&eacute; floue, masque permanent"
              reading="Mythomanie, faux-self construit, incapacit&eacute; &agrave; l&rsquo;authenticit&eacute;"
            />
            <TableRow
              title="Mars &#9744; Pluton"
              effect="Volont&eacute; de puissance extr&ecirc;me"
              reading="Violence psychologique froide, intimidation, besoin d&rsquo;&eacute;craser l&rsquo;autre"
            />
            <TableRow
              title="Lilith conj. Soleil"
              effect="R&eacute;bellion identitaire absolue"
              reading="S&eacute;duction pr&eacute;datrice, transgression des limites, refus de toute r&egrave;gle relationnelle"
            />
          </div>

          <p className="mt-4 text-xs italic text-white/50 sm:text-sm">
            &#9744; = carr&eacute; ou opposition. Un seul aspect ne suffit jamais &agrave; conclure. C&rsquo;est la r&eacute;p&eacute;tition du th&egrave;me &laquo;&nbsp;pouvoir-contr&ocirc;le-illusion&nbsp;&raquo; sur plusieurs points du th&egrave;me qui cr&eacute;e le sch&eacute;ma.
          </p>
        </Card>

        <Callout tone="warn" title="Attention : un aspect ≠ un diagnostic">
          <p>
            Avoir un carr&eacute; Pluton-Soleil ne fait pas de vous un pervers narcissique. Des millions de personnes portent cet aspect et vivent des vies parfaitement saines. L&rsquo;expression d&rsquo;un aspect d&eacute;pend de l&rsquo;<strong className="text-white/90">&eacute;ducation</strong>, du <strong className="text-white/90">libre arbitre</strong>, du <strong className="text-white/90">travail sur soi</strong> et du <strong className="text-white/90">niveau de conscience</strong> du natif. L&rsquo;astrologie montre le potentiel, pas la fatalit&eacute;.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTIE 4 — LES MAISONS IMPLIQUÉES                             */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>Les Maisons Astrologiques en Jeu</H2>

        <Card title="Maison VII : le Miroir de l&rsquo;Autre">
          <p>
            La maison VII est la maison des associations, des partenariats et du couple. C&rsquo;est le terrain de la relation &agrave; l&rsquo;autre par excellence. Lorsque Pluton transite ou se trouve natalement en maison VII, la dynamique relationnelle est intense, passionnelle, souvent marqu&eacute;e par des jeux de pouvoir.
          </p>
          <p>
            Un Pluton en VII peut indiquer un natif qui attire syst&eacute;matiquement des partenaires dominants ou manipulateurs &mdash; ou, dans la version projet&eacute;e, un natif qui exerce lui-m&ecirc;me une emprise sur ses partenaires sans en avoir conscience. La maison VII est un miroir&nbsp;: ce qu&rsquo;on y voit chez l&rsquo;autre est souvent ce qu&rsquo;on refuse de voir en soi.
          </p>
          <p>
            Neptune en maison VII produit un autre type de danger&nbsp;: l&rsquo;id&eacute;alisation du partenaire. Le natif projette sur l&rsquo;autre une image r&ecirc;v&eacute;e, refuse de voir les signaux d&rsquo;alerte, excuse les comportements inacceptables au nom de l&rsquo;&laquo;&nbsp;amour inconditionnel&nbsp;&raquo;. C&rsquo;est le terrain id&eacute;al pour un manipulateur.
          </p>
        </Card>

        <Card title="Maison VIII : l&rsquo;Arène des Crises intimes">
          <p>
            La maison VIII est le domaine de la mort symbolique, des transformations profondes, de la sexualit&eacute;, de l&rsquo;argent des autres et des h&eacute;ritages psychologiques. C&rsquo;est une maison d&rsquo;eau, profonde et souvent inconsciente.
          </p>
          <p>
            Une concentration plan&eacute;taire en maison VIII (surtout impliquant Pluton, Mars ou Neptune) signale des dynamiques relationnelles intenses o&ugrave; le pouvoir, la sexualit&eacute; et l&rsquo;argent s&rsquo;entrem&ecirc;lent. Le manipulateur avec une maison VIII puissante utilisera ces trois leviers &mdash; souvent simultan&eacute;ment &mdash; pour asseoir son emprise.
          </p>
        </Card>

        <Card title="Maison XII : les Ennemis cach&eacute;s">
          <p>
            La maison XII est traditionnellement appel&eacute;e la &laquo;&nbsp;maison des ennemis cach&eacute;s&nbsp;&raquo;. Elle repr&eacute;sente l&rsquo;inconscient collectif, le karma, l&rsquo;auto-sabotage et tout ce qui op&egrave;re dans l&rsquo;ombre. Une maison XII charg&eacute;e (plusieurs plan&egrave;tes) dans le th&egrave;me d&rsquo;une victime de PN peut indiquer une vuln&eacute;rabilit&eacute; aux ennemis invisibles, aux trahisons sourdes et aux pi&egrave;ges &eacute;motionnels.
          </p>
          <p>
            Inversement, un manipulateur avec des plan&egrave;tes fortes en XII excelle dans l&rsquo;art d&rsquo;op&eacute;rer en coulisses, de tirer les ficelles sans jamais appara&icirc;tre directement, de nier toute responsabilit&eacute; en invoquant les circonstances ou les &eacute;motions de l&rsquo;autre.
          </p>
        </Card>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTIE 5 — LES SIGNES ET LE PN                                */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>Signes Solaires et Tendances Manipulatrices</H2>

        <Card title="Pr&eacute;ambule indispensable">
          <p>
            R&eacute;p&eacute;tons-le avec force&nbsp;: <strong className="text-white/90">aucun signe du zodiaque ne produit de pervers narcissiques</strong>. Le signe solaire seul ne repr&eacute;sente qu&rsquo;une fraction du th&egrave;me natal. Ce sont les aspects, les dominantes plan&eacute;taires et le v&eacute;cu du natif qui d&eacute;terminent l&rsquo;expression d&rsquo;un potentiel.
          </p>
          <p>
            Cela dit, certains signes, <em>lorsque les plan&egrave;tes d&eacute;crites plus haut sont afflig&eacute;es</em>, pr&eacute;sentent des modes op&eacute;ratoires caract&eacute;ristiques qui m&eacute;ritent d&rsquo;&ecirc;tre connus pour mieux les reconna&icirc;tre.
          </p>
        </Card>

        <Card title="Les modes op&eacute;ratoires par &eacute;l&eacute;ment">
          <p className="text-white/60 italic">
            Rappel&nbsp;: il s&rsquo;agit ici de l&rsquo;expression sombre de chaque &eacute;l&eacute;ment, pas de son expression g&eacute;n&eacute;rale.
          </p>

          <div className="mt-4 space-y-5">
            <div>
              <p className="font-serif text-lg text-rose-300">Feu <span className="text-sm text-white/40">(B&eacute;lier, Lion, Sagittaire)</span></p>
              <p className="mt-1">
                Le manipulateur de Feu op&egrave;re par l&rsquo;<strong className="text-white/90">&eacute;clat</strong>. Il impose sa version de la r&eacute;alit&eacute; par la force de sa personnalit&eacute;, par des col&egrave;res spectaculaires ou par un charisme si &eacute;blouissant qu&rsquo;on finit par douter de sa propre perception. Le Lion afflig&eacute; peut d&eacute;velopper un narcissisme flamboyant&nbsp;: le monde est une sc&egrave;ne et les autres ne sont que des figurants au service de sa gloire.
              </p>
            </div>

            <div>
              <p className="font-serif text-lg text-amber-300">Terre <span className="text-sm text-white/40">(Taureau, Vierge, Capricorne)</span></p>
              <p className="mt-1">
                Le manipulateur de Terre op&egrave;re par le <strong className="text-white/90">contr&ocirc;le mat&eacute;riel</strong>. L&rsquo;argent, le logement, les ressources pratiques deviennent des leviers d&rsquo;emprise. Le Capricorne afflig&eacute; peut exercer une domination froide, m&eacute;thodique, presque administrative, o&ugrave; l&rsquo;autre est progressivement isol&eacute; et rendu d&eacute;pendant. Le Taureau sombre peut d&eacute;velopper une possessivit&eacute; absolue&nbsp;: l&rsquo;autre devient un objet, une propri&eacute;t&eacute;.
              </p>
            </div>

            <div>
              <p className="font-serif text-lg text-sky-300">Air <span className="text-sm text-white/40">(G&eacute;meaux, Balance, Verseau)</span></p>
              <p className="mt-1">
                Le manipulateur d&rsquo;Air op&egrave;re par le <strong className="text-white/90">verbe</strong>. Il excelle dans le double discours, la rhétorique, la r&eacute;&eacute;criture de l&rsquo;histoire. Le G&eacute;meaux afflig&eacute; peut passer d&rsquo;un masque &agrave; l&rsquo;autre avec une aisance d&eacute;concertante, charmant chaque interlocuteur diff&eacute;remment. La Balance sombre utilise l&rsquo;apparence d&rsquo;harmonie comme un pi&egrave;ge&nbsp;: tout semble parfait en surface alors que l&rsquo;emprise s&rsquo;installe en profondeur.
              </p>
            </div>

            <div>
              <p className="font-serif text-lg text-emerald-300">Eau <span className="text-sm text-white/40">(Cancer, Scorpion, Poissons)</span></p>
              <p className="mt-1">
                Le manipulateur d&rsquo;Eau op&egrave;re par l&rsquo;<strong className="text-white/90">&eacute;motion</strong>. Il exploite la culpabilit&eacute;, la piti&eacute;, la dette affective. Le Scorpion afflig&eacute; est le plus redout&eacute;&nbsp;: sa connaissance instinctive de l&rsquo;&acirc;me humaine lui permet de toucher les points faibles avec une pr&eacute;cision chirurgicale. Le Cancer sombre utilise la victime en lui pour inverser les r&ocirc;les&nbsp;: c&rsquo;est lui qui souffre, c&rsquo;est vous qui &ecirc;tes coupable. Le Poissons afflig&eacute; noie l&rsquo;autre dans un brouillard &eacute;motionnel o&ugrave; plus rien n&rsquo;est clair.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTIE 6 — LES PROFILS CIBLÉS                                 */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>Quels Profils Astrologiques Attirent les PN&nbsp;?</H2>

        <Card title="Le terrain de chasse du manipulateur" subtitle="L&rsquo;&eacute;nergie dont il se nourrit">
          <p>
            Le pervers narcissique ne choisit pas ses victimes au hasard. Il est instinctivement attir&eacute; par les personnalit&eacute;s qui poss&egrave;dent ce dont il manque cruellement&nbsp;: la <strong className="text-white/90">lumi&egrave;re &eacute;motionnelle</strong>, l&rsquo;<strong className="text-white/90">empathie authentique</strong>, la <strong className="text-white/90">g&eacute;n&eacute;rosit&eacute; naturelle</strong>. En termes astrologiques, il cherche une source d&rsquo;&eacute;nergie &eacute;motionnelle inépuisable &mdash; quelqu&rsquo;un qui donnera sans compter, pardonnera sans cesse et doutera de lui-m&ecirc;me avant de douter de l&rsquo;autre.
          </p>
          <p>
            Voici les profils astrologiques les plus fr&eacute;quemment cibl&eacute;s&nbsp;:
          </p>
        </Card>

        <div className="grid gap-3 sm:grid-cols-2">
          <SignCard
            sign="Dominante Lune / Cancer"
            why="Empathie naturelle, besoin de nourrir l&rsquo;autre, culpabilit&eacute; facile, difficult&eacute; &agrave; poser des limites. La Lune cherche la fusion &eacute;motionnelle &mdash; le PN en fait un pi&egrave;ge."
            tone="sky"
          />
          <SignCard
            sign="Dominante Neptune / Poissons"
            why="Compassion sans fond, tendance au sacrifice, id&eacute;alisation du partenaire, perception floue des limites. Neptune veut sauver l&rsquo;autre &mdash; le PN se pr&eacute;sente comme une &acirc;me en d&eacute;tresse."
            tone="violet"
          />
          <SignCard
            sign="V&eacute;nus en Poissons / en XII"
            why="Amour sacrificiel, romantisme absolu, croyance que l&rsquo;amour peut tout gu&eacute;rir. V&eacute;nus en exaltation donne tout sans condition &mdash; le PN prend tout sans retour."
            tone="rose"
          />
          <SignCard
            sign="Soleil ou Lune en maison XII"
            why="Vuln&eacute;rabilit&eacute; aux ennemis cach&eacute;s, tendance &agrave; l&rsquo;auto-sabotage, difficult&eacute; &agrave; se percevoir clairement. Le natif peut ne pas voir l&rsquo;emprise s&rsquo;installer."
            tone="amber"
          />
          <SignCard
            sign="Dominante V&eacute;nus / Balance"
            why="Besoin d&rsquo;harmonie &agrave; tout prix, horreur du conflit, tendance &agrave; c&eacute;der pour pr&eacute;server la paix. La Balance pr&eacute;f&egrave;re plier que rompre &mdash; le PN exploite cette peur de la rupture."
            tone="emerald"
          />
          <SignCard
            sign="Jupiter en aspect &agrave; V&eacute;nus"
            why="G&eacute;n&eacute;rosit&eacute; sans mesure, foi en l&rsquo;autre, optimisme qui emp&ecirc;che de voir les signaux d&rsquo;alerte. Jupiter amplifie la bienveillance &mdash; le PN s&rsquo;en nourrit."
            tone="amber"
          />
        </div>

        <Callout tone="note" title="Un profil sensible n&rsquo;est pas un profil faible">
          <p>
            &Ecirc;tre empathique, g&eacute;n&eacute;reux ou r&ecirc;veur n&rsquo;est pas un d&eacute;faut. Ce sont des qualit&eacute;s magnifiques qui font de vous un &ecirc;tre humain profond&eacute;ment humain. Le probl&egrave;me n&rsquo;est jamais la sensibilit&eacute; &mdash; c&rsquo;est l&rsquo;<strong className="text-white/90">absence de limites</strong>. L&rsquo;astrologie vous aide pr&eacute;cis&eacute;ment &agrave; identifier o&ugrave; renforcer ces limites dans votre th&egrave;me.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTIE 7 — LES TRANSITS DÉCLENCHEURS                          */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>Les Transits D&eacute;clencheurs&nbsp;: Quand le Ciel fragilise</H2>

        <Card title="P&eacute;riodes de vuln&eacute;rabilit&eacute;">
          <p>
            M&ecirc;me un th&egrave;me natal solidement construit peut traverser des p&eacute;riodes de fragilit&eacute;. Les transits plan&eacute;taires cr&eacute;ent des fen&ecirc;tres temporaires o&ugrave; les d&eacute;fenses naturelles s&rsquo;abaissent. Conna&icirc;tre ces p&eacute;riodes, c&rsquo;est pouvoir anticiper et redoubler de vigilance.
          </p>

          <ul className="mt-3 space-y-3">
            <li>
              <strong className="text-violet-300">Transit de Pluton sur la Lune natale&nbsp;:</strong> p&eacute;riode de bouleversement &eacute;motionnel profond. Le natif cherche inconsciemment la transformation &agrave; travers l&rsquo;autre &mdash; terrain id&eacute;al pour une rencontre toxique qui promet la renaissance.
            </li>
            <li>
              <strong className="text-sky-300">Transit de Neptune sur V&eacute;nus natale&nbsp;:</strong> le discernement amoureux est au plus bas. Le natif id&eacute;alise, projette, refuse de voir la r&eacute;alit&eacute;. C&rsquo;est souvent sous ce transit que l&rsquo;on tombe &eacute;perdument amoureux d&rsquo;une illusion.
            </li>
            <li>
              <strong className="text-amber-300">Transit de Saturne en maison VII&nbsp;:</strong> p&eacute;riode de solitude, de bilan relationnel douloureux. La peur d&rsquo;&ecirc;tre seul peut pousser &agrave; accepter n&rsquo;importe quel partenaire, y compris un manipulateur.
            </li>
            <li>
              <strong className="text-rose-300">Transit de Pluton en maison VII ou VIII&nbsp;:</strong> l&rsquo;appel vers les relations intenses, transformatrices. Le danger est de confondre intensit&eacute; et amour, passion et emprise.
            </li>
            <li>
              <strong className="text-emerald-300">&Eacute;clipse sur l&rsquo;axe I-VII&nbsp;:</strong> les &eacute;clipses sur l&rsquo;axe relationnel apportent des rencontres karmiques, des fermetures et des ouvertures brutales. C&rsquo;est un moment charnière o&ugrave; la vigilance est de mise.
            </li>
          </ul>
        </Card>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTIE 8 — SE PROTÉGER                                        */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>Se Prot&eacute;ger gr&acirc;ce &agrave; son Th&egrave;me Natal</H2>

        <Card title="Saturne : le Gardien des Fronti&egrave;res" subtitle="Votre meilleur alli&eacute; contre l&rsquo;emprise">
          <p>
            Si Pluton est la plan&egrave;te de l&rsquo;emprise, <strong className="text-white/90">Saturne est celle de la protection</strong>. Saturne incarne la limite, la structure, le cadre, le &laquo;&nbsp;non&nbsp;&raquo; ferme et d&eacute;finitif. Un Saturne bien aspect&eacute; dans le th&egrave;me &mdash; surtout en lien avec la Lune, V&eacute;nus ou l&rsquo;Ascendant &mdash; conf&egrave;re une capacit&eacute; naturelle &agrave; poser des limites saines.
          </p>
          <p>
            Renforcer son Saturne, c&rsquo;est apprendre &agrave; dire non sans culpabilit&eacute;, &agrave; observer avant de s&rsquo;engager, &agrave; exiger la r&eacute;ciprocit&eacute; comme condition non n&eacute;gociable d&rsquo;une relation. En astrologie pratique, cela revient &agrave; conna&icirc;tre la position de Saturne dans son th&egrave;me et &agrave; cultiver consciemment ses qualit&eacute;s&nbsp;: discernement, patience, exigence saine.
          </p>
        </Card>

        <Card title="Renforcer sa Lune" subtitle="Le centre &eacute;motionnel">
          <p>
            La Lune repr&eacute;sente notre vuln&eacute;rabilit&eacute; &eacute;motionnelle, notre enfant int&eacute;rieur, notre besoin de s&eacute;curit&eacute;. Une Lune fragile (Lune en Capricorne, en XII, carr&eacute;e &agrave; Pluton ou &agrave; Saturne) est un point d&rsquo;entr&eacute;e privil&eacute;gi&eacute; pour le manipulateur, car elle indique un besoin d&rsquo;amour souvent li&eacute; &agrave; des blessures anciennes.
          </p>
          <p>
            Renforcer sa Lune, c&rsquo;est prendre soin de son &eacute;quilibre &eacute;motionnel <em>avant</em> de le confier &agrave; un partenaire. C&rsquo;est construire un espace int&eacute;rieur s&ucirc;r qui ne d&eacute;pend pas de la validation de l&rsquo;autre. Concr&egrave;tement, cela passe par la th&eacute;rapie, la m&eacute;ditation, le travail sur les blessures familiales &mdash; et par une conscience claire de la position et des aspects de sa Lune natale.
          </p>
        </Card>

        <Card title="Les Signaux d&rsquo;Alerte dans une Synastrie">
          <p>
            En synastrie (comparaison de deux th&egrave;mes), certains contacts plan&eacute;taires doivent &eacute;veiller la vigilance&nbsp;:
          </p>
          <ul className="mt-3 space-y-2">
            <li><strong className="text-white/90">Pluton de l&rsquo;un conjoint V&eacute;nus ou Lune de l&rsquo;autre&nbsp;:</strong> fascination magn&eacute;tique, risque d&rsquo;emprise &eacute;motionnelle. L&rsquo;attirance est irr&eacute;sistible mais le rapport de force est d&eacute;s&eacute;quilibr&eacute;.</li>
            <li><strong className="text-white/90">Neptune de l&rsquo;un sur le Soleil de l&rsquo;autre&nbsp;:</strong> id&eacute;alisation massive. L&rsquo;un envo&ucirc;te, l&rsquo;autre se dissout. La relation peut sembler magique au d&eacute;but puis devenir confuse et &eacute;puisante.</li>
            <li><strong className="text-white/90">Lilith de l&rsquo;un sur Mars de l&rsquo;autre&nbsp;:</strong> tension sexuelle puissante, dynamique de domination-soumission qui peut &eacute;chapper au contr&ocirc;le conscient.</li>
            <li><strong className="text-white/90">Saturne de l&rsquo;un sur la Lune de l&rsquo;autre&nbsp;:</strong> si Saturne est mal asp&eacute;ct&eacute;, la relation peut devenir un carcan &eacute;motionnel o&ugrave; l&rsquo;un &eacute;touffe l&rsquo;autre sous couvert de &laquo;&nbsp;protection&nbsp;&raquo;.</li>
          </ul>
          <p>
            Ces contacts ne condamnent pas la relation. Mais ils exigent une conscience aigu&euml; des dynamiques en jeu et une communication ouverte sur les rapports de pouvoir.
          </p>
        </Card>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTIE 9 — LE CYCLE DE L'EMPRISE                              */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>Le Cycle de l&rsquo;Emprise lu par l&rsquo;Astrologie</H2>

        <Card title="Les trois phases plan&eacute;taires">
          <div className="space-y-5">
            <div>
              <p className="font-serif text-lg text-violet-300">Phase 1 &mdash; La S&eacute;duction (Neptune)</p>
              <p className="mt-1">
                Le cycle commence toujours par une phase neptunienne. Le manipulateur cr&eacute;e un monde id&eacute;al, un cocon o&ugrave; tout semble parfait. C&rsquo;est le love bombing&nbsp;: compliments excessifs, attention d&eacute;mesur&eacute;e, promesses grandioses. La victime est submerg&eacute;e par un tsunami d&rsquo;&eacute;motions positives et perd ses rep&egrave;res habituels. Neptune dissout les fronti&egrave;res&nbsp;: on se donne enti&egrave;rement, on fusionne, on oublie o&ugrave; finit le &laquo;&nbsp;je&nbsp;&raquo; et o&ugrave; commence le &laquo;&nbsp;nous&nbsp;&raquo;.
              </p>
            </div>

            <div>
              <p className="font-serif text-lg text-rose-300">Phase 2 &mdash; La D&eacute;stabilisation (Pluton)</p>
              <p className="mt-1">
                Une fois la d&eacute;pendance &eacute;motionnelle install&eacute;e, Pluton entre en sc&egrave;ne. Le masque tombe progressivement. Les critiques apparaissent, d&rsquo;abord subtiles, puis de plus en plus fr&eacute;quentes. Le silence punitif alterne avec les col&egrave;res froides. La victime se retrouve en hypervigilance permanente, cherchant d&eacute;sesp&eacute;r&eacute;ment &agrave; retrouver le &laquo;&nbsp;bon&nbsp;&raquo; partenaire de la phase 1. C&rsquo;est la morsure plutonienne&nbsp;: le contr&ocirc;le s&rsquo;installe par la peur de perdre l&rsquo;amour promis.
              </p>
            </div>

            <div>
              <p className="font-serif text-lg text-amber-300">Phase 3 &mdash; La Destruction / Renaissance (Mars-Pluton)</p>
              <p className="mt-1">
                La phase finale est mars-plutonienne. L&rsquo;emprise atteint son paroxysme&nbsp;: isolement social, destruction de l&rsquo;estime de soi, violence psychologique (parfois physique). La victime ne se reconna&icirc;t plus. Mais c&rsquo;est aussi l&agrave; &mdash; paradoxe plutonien &mdash; que la renaissance peut survenir. Le point de rupture est souvent d&eacute;clench&eacute; par un transit majeur (Uranus, Pluton ou une &eacute;clipse) qui brise le cycle et lib&egrave;re le natif de l&rsquo;emprise.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTIE 10 — GUÉRIR                                            */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>Apr&egrave;s l&rsquo;Emprise&nbsp;: R&eacute;silience et Reconstruction</H2>

        <Card title="Les transits de lib&eacute;ration">
          <p>
            Apr&egrave;s l&rsquo;&eacute;preuve d&rsquo;une relation toxique, le th&egrave;me natal porte &eacute;galement les cl&eacute;s de la gu&eacute;rison. Certains transits facilitent la reconstruction&nbsp;:
          </p>
          <ul className="mt-3 space-y-2">
            <li><strong className="text-emerald-300">Transit de Jupiter sur la Lune ou l&rsquo;Ascendant&nbsp;:</strong> renouveau &eacute;motionnel, confiance retrouv&eacute;e, sentiment d&rsquo;expansion et de protection.</li>
            <li><strong className="text-emerald-300">Transit de Saturne trigone V&eacute;nus ou Lune&nbsp;:</strong> capacit&eacute; renouvel&eacute;e &agrave; structurer ses &eacute;motions, &agrave; choisir avec discernement. Les limites deviennent saines et naturelles.</li>
            <li><strong className="text-emerald-300">Transit d&rsquo;Uranus sur V&eacute;nus ou l&rsquo;Ascendant&nbsp;:</strong> lib&eacute;ration soudaine, prise de conscience &eacute;lectrisante. Le natif se red&eacute;couvre, ose l&rsquo;ind&eacute;pendance, rompt d&eacute;finitivement avec les anciens sch&eacute;mas.</li>
            <li><strong className="text-emerald-300">Transit de Pluton sextile ou trigone au Soleil&nbsp;:</strong> transformation profonde mais constructive. Le natif int&egrave;gre l&rsquo;exp&eacute;rience v&eacute;cue et en sort renforc&eacute;, plus lucide, plus ancr&eacute; dans son identit&eacute;.</li>
          </ul>
        </Card>

        <Card title="Chiron : la Blessure qui gu&eacute;rit" subtitle="Le gu&eacute;risseur bless&eacute; du th&egrave;me natal">
          <p>
            Chiron, l&rsquo;ast&eacute;ro&iuml;de du &laquo;&nbsp;gu&eacute;risseur bless&eacute;&nbsp;&raquo;, joue un r&ocirc;le essentiel dans la reconstruction apr&egrave;s une emprise. Sa position dans le th&egrave;me natal indique la nature de la blessure fondamentale &mdash; et le chemin de gu&eacute;rison.
          </p>
          <p>
            Un Chiron en maison VII signale que la blessure passe par la relation &agrave; l&rsquo;autre. La gu&eacute;rison viendra pr&eacute;cis&eacute;ment de la capacit&eacute; &agrave; construire des relations saines, &eacute;quilibr&eacute;es et respectueuses &mdash; en commen&ccedil;ant par la relation &agrave; soi-m&ecirc;me.
          </p>
          <p>
            Un Chiron en maison VIII indique que la blessure touche &agrave; l&rsquo;intimit&eacute;, au pouvoir partag&eacute;, &agrave; la confiance profonde. La reconstruction passera par un travail th&eacute;rapeutique sur les sch&eacute;mas de d&eacute;pendance &eacute;motionnelle et la reconqu&ecirc;te de son propre pouvoir int&eacute;rieur.
          </p>
        </Card>

        <Callout tone="ok" title="Vous avez le droit de gu&eacute;rir">
          <p>
            Si vous vous reconnaissez dans ces descriptions &mdash; que ce soit comme victime ou comme porteur de certains aspects d&eacute;crits &mdash; sachez que la conscience est le premier pas. L&rsquo;astrologie ne condamne personne&nbsp;: elle &eacute;claire les m&eacute;canismes pour mieux les d&eacute;passer. Si vous traversez une situation d&rsquo;emprise, n&rsquo;h&eacute;sitez pas &agrave; consulter un professionnel de sant&eacute; mentale.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTIE 11 — CONCLUSION                                        */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>Conclusion&nbsp;: le Th&egrave;me Natal comme Outil de Vigilance</H2>

        <Card title="Conna&icirc;tre son th&egrave;me, c&rsquo;est se prot&eacute;ger">
          <p>
            L&rsquo;astrologie n&rsquo;est pas une arme de d&eacute;nonciation. Elle est un miroir qui r&eacute;v&egrave;le nos potentiels lumineux autant que nos zones d&rsquo;ombre. Comprendre les signatures plan&eacute;taires de la manipulation, c&rsquo;est se donner les moyens de les reconna&icirc;tre &mdash; chez l&rsquo;autre, mais aussi en soi-m&ecirc;me.
          </p>
          <p>
            Conna&icirc;tre la position de Pluton, Neptune et Lilith dans votre th&egrave;me natal, savoir o&ugrave; se trouve votre Lune et dans quel &eacute;tat elle se trouve, comprendre la force de votre Saturne et de vos limites naturelles&nbsp;: tout cela constitue une forme de protection astrologique concr&egrave;te.
          </p>
          <p>
            Le pervers narcissique prosp&egrave;re dans l&rsquo;inconscience. Il exploite ce que vous ne voyez pas en vous. L&rsquo;astrologie, en &eacute;clairant ces angles morts, r&eacute;duit consid&eacute;rablement son terrain de jeu.
          </p>
          <p>
            Restez lumineux. Restez empathiques. Mais restez lucides. Votre th&egrave;me natal est votre alli&eacute; le plus fid&egrave;le dans cette qu&ecirc;te d&rsquo;&eacute;quilibre entre ouverture et protection.
          </p>
        </Card>
      </section>
    </article>
  );
}
