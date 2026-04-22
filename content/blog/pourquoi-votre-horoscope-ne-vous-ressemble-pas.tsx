import type { ReactNode } from "react";
import Link from "next/link";
import { TagPillsInline, getGlowFromTags } from "./ui";
import { AUTHOR_PERSON, PUBLISHER_ORG } from "@/lib/seo";

/* ================================================================== */
/*  META / SEO                                                        */
/* ================================================================== */
export const meta = {
  slug: "pourquoi-votre-horoscope-ne-vous-ressemble-pas",
  title:
    "Pourquoi votre Horoscope ne vous Ressemble pas",
  description:
    "Vous ne vous reconnaissez pas dans votre horoscope quotidien ? Découvrez pourquoi seul votre thème astral révèle qui vous êtes véritablement.",
  date: "2026-04-20",
  tags: [
    "th\u00e8me astral",
    "signe solaire",
    "ascendant",
    "Lune",
    "plan\u00e8tes",
    "horoscope",
    "d\u00e9butant",
    "bases",
  ],
  readingLevel: "d\u00e9butant" as const,
  cover: "/images/blog/horoscope-ne-vous-ressemble-pas.webp",
};

const SITE_URL = "https://www.astro-cours.com";
const ARTICLE_URL = `${SITE_URL}/blog/${meta.slug}`;

/* ================================================================== */
/*  COMPOSANTS LOCAUX                                                 */
/* ================================================================== */
function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-300">
      <span
        className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-300"
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
        className="mr-4 block h-px w-8 bg-gradient-to-r from-sky-400/60 to-transparent"
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
      box: "border-sky-400/25 bg-sky-400/10 shadow-[0_0_30px_rgba(56,189,248,0.05)]",
      icon: "text-sky-200",
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
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-sm transition-all hover:border-sky-300/30 sm:p-5">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-300/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <p className="text-[0.65rem] uppercase tracking-widest text-white/50 sm:text-xs">{label}</p>
      <p className="mt-1.5 font-serif text-lg text-white/90 sm:mt-2 sm:text-xl">{value}</p>
    </div>
  );
}

function Divider() {
  return <hr className="my-10 border-t border-white/10 sm:my-12" aria-hidden="true" />;
}

function PlanetRow({
  planet,
  role,
  example,
}: {
  planet: string;
  role: string;
  example: string;
}) {
  return (
    <div className="group grid grid-cols-1 border-b border-white/10 transition-colors hover:bg-sky-300/[0.03] md:grid-cols-3">
      <div className="px-3 py-3 font-serif text-base text-sky-200/90 sm:px-4 sm:py-4 sm:text-lg">{planet}</div>
      <div className="px-3 py-3 text-sm leading-relaxed text-white/80 sm:px-4 sm:py-4">{role}</div>
      <div className="px-3 py-3 text-sm leading-relaxed text-white/80 sm:px-4 sm:py-4">{example}</div>
    </div>
  );
}

function MythCard({
  myth,
  reality,
  tone,
}: {
  myth: string;
  reality: string;
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
        <p className="font-serif text-base font-semibold text-white/90 sm:text-lg">&laquo;&nbsp;{myth}&nbsp;&raquo;</p>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-white/60">{reality}</p>
    </div>
  );
}

/* ================================================================== */
/*  ARTICLE                                                           */
/* ================================================================== */
export default function HoroscopeNeVousRessemblePasPost() {
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
              image: `${SITE_URL}${meta.cover}`,
              datePublished: meta.date,
              dateModified: meta.date,
              author: AUTHOR_PERSON,
              publisher: PUBLISHER_ORG,
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": ARTICLE_URL,
              },
              inLanguage: "fr-FR",
              keywords: meta.tags.join(", "),
              articleSection: "Astrologie",
              wordCount: 3800,
              about: [
                { "@type": "Thing", name: "Astrologie" },
                { "@type": "Thing", name: "Th\u00e8me natal" },
                { "@type": "Thing", name: "Horoscope" },
                { "@type": "Thing", name: "Signe solaire" },
                { "@type": "Thing", name: "Ascendant" },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Pourquoi je ne me reconnais pas dans mon signe astrologique ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Votre signe solaire ne repr\u00e9sente qu\u2019une fraction de votre identit\u00e9 astrologique. Votre ascendant, la position de votre Lune, de Mercure, V\u00e9nus, Mars et des plan\u00e8tes lentes, les maisons occup\u00e9es et les aspects entre plan\u00e8tes cr\u00e9ent un portrait infiniment plus nuanc\u00e9 que le seul signe solaire utilis\u00e9 par les horoscopes g\u00e9n\u00e9ralistes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quelle est la diff\u00e9rence entre signe solaire et ascendant ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Le signe solaire correspond \u00e0 la position du Soleil au moment de votre naissance et repr\u00e9sente votre identit\u00e9 profonde, votre \u00e9go. L\u2019ascendant est le signe qui se levait \u00e0 l\u2019horizon est \u00e0 l\u2019instant pr\u00e9cis de votre naissance. Il d\u00e9finit votre masque social, votre apparence et la fa\u00e7on dont les autres vous per\u00e7oivent. Il change de signe environ toutes les deux heures.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Est-ce que l\u2019horoscope du journal a une valeur astrologique ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "L\u2019horoscope g\u00e9n\u00e9raliste divise l\u2019humanit\u00e9 en 12 groupes bas\u00e9s sur le seul signe solaire. C\u2019est une simplification extr\u00eame qui ne tient compte ni de l\u2019ascendant, ni de la Lune, ni des plan\u00e8tes personnelles, ni des maisons. Pour un astrologue s\u00e9rieux, il s\u2019agit d\u2019un divertissement, pas d\u2019astrologie.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quel est le r\u00f4le de la Lune dans le th\u00e8me natal ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La Lune repr\u00e9sente vos \u00e9motions, vos besoins affectifs, votre rapport \u00e0 la m\u00e8re et \u00e0 la s\u00e9curit\u00e9 int\u00e9rieure. Elle colore profond\u00e9ment votre mani\u00e8re de r\u00e9agir, d\u2019aimer et de vous sentir en s\u00e9curit\u00e9. Dans de nombreux cas, la Lune influence davantage le ressenti quotidien que le signe solaire.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Combien de facteurs composent un th\u00e8me natal complet ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Un th\u00e8me natal complet comprend 10 plan\u00e8tes (dont le Soleil et la Lune), 12 signes, 12 maisons, l\u2019ascendant, le milieu du ciel, les n\u0153uds lunaires, les aspects entre plan\u00e8tes (conjonction, sextile, carr\u00e9, trigone, opposition) et \u00e9ventuellement les points fictifs comme Lilith. Cela repr\u00e9sente des centaines de combinaisons possibles \u2014 rendant chaque th\u00e8me aussi unique qu\u2019une empreinte digitale.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Puis-je \u00eatre plus marqu\u00e9 par mon ascendant que par mon signe solaire ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolument. Lorsque plusieurs plan\u00e8tes se trouvent dans le signe de l\u2019ascendant ou en maison I, ou lorsque le ma\u00eetre de l\u2019ascendant est tr\u00e8s dominant dans le th\u00e8me, la personne s\u2019identifie souvent davantage \u00e0 son ascendant qu\u2019\u00e0 son signe solaire. C\u2019est une des raisons les plus fr\u00e9quentes du d\u00e9calage ressenti avec l\u2019horoscope.",
                  },
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Accueil",
                  item: SITE_URL,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Blog",
                  item: `${SITE_URL}/blog`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: meta.title,
                  item: ARTICLE_URL,
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
          className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-sky-300/5 blur-[80px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-violet-500/5"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <Kicker>Signe solaire &bull; Ascendant &bull; Lune &bull; Th&egrave;me natal &bull; V&eacute;rit&eacute;</Kicker>

          <h2 className="mt-4 font-serif text-2xl font-light leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
            Pourquoi cet Horoscope quotidien ne vous parle pas&nbsp;:{" "}
            <span className="bg-gradient-to-r from-sky-400 via-violet-400 to-emerald-300 bg-clip-text text-transparent">
              la V&eacute;rit&eacute; cach&eacute;e derri&egrave;re votre Signe
            </span>
          </h2>

          <div className="mt-6 flex flex-wrap gap-2 text-sm text-white/70 sm:gap-3">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs backdrop-blur-md sm:px-4 sm:py-1.5 sm:text-sm">
              Lecture d&eacute;butant
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs backdrop-blur-md sm:px-4 sm:py-1.5 sm:text-sm">
              Bases de l&rsquo;astrologie
            </span>
            <span className="rounded-full border border-sky-400/20 bg-sky-500/10 px-3 py-1 text-xs text-sky-200 backdrop-blur-md sm:px-4 sm:py-1.5 sm:text-sm">
              Th&egrave;me natal complet
            </span>
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-white/70 sm:mt-8 sm:text-base sm:leading-relaxed lg:text-lg">
            &laquo;&nbsp;Je suis G&eacute;meaux mais je ne me reconnais pas du tout.&nbsp;&raquo;
            Cette phrase, tous les astrologues l&rsquo;entendent. Et pour cause&nbsp;: l&rsquo;horoscope
            que vous lisez chaque matin ne repr&eacute;sente qu&rsquo;un douzi&egrave;me de ce que vous
            &ecirc;tes vraiment. D&eacute;couvrez pourquoi votre signe solaire est un r&eacute;sum&eacute;
            trop simpliste, et comment votre th&egrave;me natal complet raconte une histoire infiniment
            plus riche &mdash; la v&ocirc;tre.
          </p>

          <div className="mt-6 border-t border-white/5 pt-5 sm:mt-8 sm:pt-6">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      {/* ── Stats ── */}
      <section className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4" aria-label="Points cl&eacute;s">
        <Stat label="Plan&egrave;tes dans un th&egrave;me" value="10" />
        <Stat label="Maisons astrologiques" value="12" />
        <Stat label="Aspects possibles" value="50+" />
        <Stat label="Combinaisons uniques" value="&infin;" />
      </section>

      {/* ================================================================ */}
      {/*  PARTIE 1 — LE MALENTENDU FONDAMENTAL                           */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>Le Malentendu fondamental&nbsp;: vous n&rsquo;&ecirc;tes pas &laquo;&nbsp;juste&nbsp;&raquo; votre Signe</H2>

        <Card title="L&rsquo;Horoscope, une invention r&eacute;cente" subtitle="Comment un outil de divertissement est devenu le visage de l&rsquo;astrologie">
          <p>
            La plupart des gens confondent <strong className="text-white/90">astrologie</strong> et <strong className="text-white/90">horoscope</strong>. C&rsquo;est un peu comme confondre la m&eacute;decine avec le conseil sant&eacute; imprim&eacute; au dos d&rsquo;une bo&icirc;te de c&eacute;r&eacute;ales. L&rsquo;horoscope tel qu&rsquo;on le conna&icirc;t aujourd&rsquo;hui &mdash; ces quelques lignes class&eacute;es par signe dans les journaux &mdash; est une invention des ann&eacute;es 1930. C&rsquo;est l&rsquo;astrologue britannique R.&nbsp;H.&nbsp;Naylor qui, dans le <em>Sunday Express</em>, a eu l&rsquo;id&eacute;e de d&eacute;couper l&rsquo;humanit&eacute; en 12&nbsp;groupes bas&eacute;s sur le seul signe solaire pour cr&eacute;er une rubrique accessible au grand public.
          </p>
          <p>
            Avant cela, l&rsquo;astrologie n&rsquo;avait jamais fonctionn&eacute; ainsi. Pendant des mill&eacute;naires, de Babylone &agrave; la Renaissance, un astrologue &eacute;tablissait un th&egrave;me complet &mdash; un instantan&eacute; pr&eacute;cis du ciel au moment exact et au lieu exact de la naissance. Aucun astrologue s&eacute;rieux n&rsquo;aurait r&eacute;duit une personne &agrave; son seul signe solaire. C&rsquo;&eacute;tait impensable.
          </p>
          <p>
            Le probl&egrave;me, c&rsquo;est que cette version simplifi&eacute;e a tellement bien fonctionn&eacute; commercialement qu&rsquo;elle est devenue, dans l&rsquo;esprit collectif, <em>l&rsquo;astrologie elle-m&ecirc;me</em>. R&eacute;sultat&nbsp;: des millions de personnes jugent une discipline mill&eacute;naire &agrave; travers un filtre qui n&rsquo;en repr&eacute;sente qu&rsquo;une caricature. Et quand ils ne s&rsquo;y retrouvent pas, au lieu de questionner le filtre, ils rejettent l&rsquo;astrologie tout enti&egrave;re.
          </p>
        </Card>

        <Card title="Le Signe solaire&nbsp;: important, mais pas souverain" subtitle="Un acteur majeur parmi dix">
          <p>
            Votre signe astrologique &mdash; celui que vous connaissez, celui que vous donnez quand on vous le demande &mdash; correspond &agrave; la position du <Link href="/planetes/soleil" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Soleil</Link> dans le zodiaque au moment de votre naissance. C&rsquo;est votre <strong className="text-white/90">signe solaire</strong>. Et il est incontestablement important&nbsp;: le Soleil repr&eacute;sente votre identit&eacute; profonde, votre volont&eacute;, votre &eacute;go, la direction que votre &acirc;me cherche &agrave; emprunter dans cette vie.
          </p>
          <p>
            Mais imaginez un orchestre symphonique o&ugrave; vous n&rsquo;&eacute;couteriez que le premier violon. Ce serait beau, certes &mdash; mais vous manqueriez les cuivres, les bois, les percussions, les contrebasses. Vous perdriez la richesse de l&rsquo;harmonie, les tensions entre les instruments, les silences qui donnent du souffle &agrave; la m&eacute;lodie. Votre signe solaire, c&rsquo;est ce premier violon&nbsp;: essentiel, mais incomplet.
          </p>
          <p>
            Dans un th&egrave;me natal, dix plan&egrave;tes occupent chacune un signe et une maison, et tissent entre elles un r&eacute;seau d&rsquo;aspects (angles g&eacute;om&eacute;triques) qui cr&eacute;ent des harmonies ou des tensions. C&rsquo;est l&rsquo;ensemble de cette partition c&eacute;leste qui fait de vous <em>vous</em> &mdash; pas un seul instrument jou&eacute; en solo.
          </p>
        </Card>

        <Callout tone="note" title="Le saviez-vous ?">
          <p>
            Deux personnes n&eacute;es le m&ecirc;me jour mais &agrave; quelques heures d&rsquo;&eacute;cart peuvent avoir un ascendant compl&egrave;tement diff&eacute;rent, une Lune dans un autre signe, et des maisons r&eacute;organis&eacute;es. Leur v&eacute;cu, leur personnalit&eacute; et leur destin seront radicalement diff&eacute;rents &mdash; malgr&eacute; un signe solaire identique.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTIE 2 — LES VRAIES COUCHES DE VOTRE IDENTITÉ               */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>Les vraies Couches de votre Identit&eacute; astrologique</H2>

        <Card title="L&rsquo;Ascendant&nbsp;: le Masque et le Filtre" subtitle="Ce que le monde voit en premier">
          <p>
            L&rsquo;<Link href="/maisons/maison-1" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">ascendant</Link> est peut-&ecirc;tre le facteur le plus sous-estim&eacute; de l&rsquo;astrologie populaire &mdash; et pourtant, il est d&eacute;terminant. Il correspond au signe qui se levait &agrave; l&rsquo;horizon est &agrave; l&rsquo;instant pr&eacute;cis de votre naissance. Parce qu&rsquo;il change de signe environ toutes les deux heures, il exige de conna&icirc;tre votre heure de naissance exacte &mdash; une donn&eacute;e que l&rsquo;horoscope du matin ne vous demandera jamais.
          </p>
          <p>
            L&rsquo;ascendant joue un triple r&ocirc;le. D&rsquo;abord, il d&eacute;finit votre <strong className="text-white/90">apparence physique et votre allure</strong>&nbsp;: la fa&ccedil;on dont vous entrez dans une pi&egrave;ce, votre gestuelle, l&rsquo;impression que vous produisez au premier regard. Ensuite, il agit comme un <strong className="text-white/90">filtre de perception</strong>&nbsp;: il teinte la mani&egrave;re dont vous appr&eacute;hendez le monde, dont vous r&eacute;agissez spontan&eacute;ment aux &eacute;v&eacute;nements. Enfin, il <strong className="text-white/90">organise toutes les maisons de votre th&egrave;me</strong>, redistribuant les plan&egrave;tes dans les diff&eacute;rents secteurs de votre vie.
          </p>
          <p>
            Prenons un exemple concret. Un Soleil en Cancer (sensible, protecteur, tourn&eacute; vers le foyer) avec un ascendant Capricorne donnera une personne qui, en premi&egrave;re impression, para&icirc;t froide, r&eacute;serv&eacute;e, tr&egrave;s professionnelle. Si cette personne lit l&rsquo;horoscope du Cancer &mdash; qui lui parle de sensibilit&eacute;, de cocon et d&rsquo;&eacute;motions &mdash; elle ne s&rsquo;y reconna&icirc;t pas, parce que le monde ne la voit pas ainsi, et parce qu&rsquo;elle-m&ecirc;me a appris &agrave; filtrer ses &eacute;motions &agrave; travers la rigidit&eacute; capricornienne de son ascendant.
          </p>
          <p>
            C&rsquo;est pourquoi beaucoup d&rsquo;astrologues recommandent de lire l&rsquo;horoscope de son ascendant plut&ocirc;t que celui de son signe solaire. Mais m&ecirc;me cette astuce reste une simplification&nbsp;: elle ne fait que remplacer un bout du puzzle par un autre.
          </p>
        </Card>

        <Card title="La Lune&nbsp;: votre Paysage int&eacute;rieur" subtitle="L&rsquo;\u00e9motion qui vous habite quand personne ne regarde">
          <p>
            Si le Soleil est ce que vous aspirez &agrave; &ecirc;tre et l&rsquo;ascendant ce que vous montrez, la <Link href="/planetes/lune" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Lune</Link> est ce que vous <em>ressentez</em>. Elle repr&eacute;sente vos &eacute;motions profondes, vos r&eacute;flexes affectifs, vos besoins de s&eacute;curit&eacute;, votre rapport &agrave; la m&egrave;re, &agrave; la nourriture, au confort. La Lune, c&rsquo;est vous &agrave; 3&nbsp;heures du matin quand les masques tombent.
          </p>
          <p>
            Et c&rsquo;est pr&eacute;cis&eacute;ment l&agrave; que le d&eacute;calage avec l&rsquo;horoscope devient &eacute;vident. Un Soleil B&eacute;lier (foncer, diriger, conqu&eacute;rir) avec une Lune en Poissons (r&ecirc;ver, absorber, compatir) est une personne profond&eacute;ment paradoxale&nbsp;: en apparence un guerrier, en r&eacute;alit&eacute; un po&egrave;te qui pleure devant un film. L&rsquo;horoscope B&eacute;lier lui parlera de courage et d&rsquo;audace, mais ne touchera jamais cette fibre intime, aquatique, r&ecirc;veuse qui constitue la moiti&eacute; de son &ecirc;tre.
          </p>
          <p>
            La position de la Lune en signe est tout aussi importante que le signe solaire &mdash; et dans la vie quotidienne, elle l&rsquo;est probablement <em>davantage</em>, car elle gouverne les r&eacute;actions automatiques, les habitudes, le confort &eacute;motionnel. Si vous avez l&rsquo;impression de vivre en d&eacute;calage avec votre signe, cherchez votre Lune&nbsp;: il y a de fortes chances qu&rsquo;elle soit la pi&egrave;ce manquante du puzzle.
          </p>
        </Card>

        <Card title="Mercure, V&eacute;nus, Mars&nbsp;: les Plan&egrave;tes personnelles" subtitle="Votre fa&ccedil;on de penser, d&rsquo;aimer et d&rsquo;agir">
          <p>
            Au-del&agrave; du trio Soleil-Lune-Ascendant, trois plan&egrave;tes personnelles colorent de mani&egrave;re tr&egrave;s concr&egrave;te votre quotidien. <Link href="/planetes/mercure" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Mercure</Link> gouverne votre intelligence, votre communication, votre humour. <Link href="/planetes/venus" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">V&eacute;nus</Link> r&egrave;gne sur vos go&ucirc;ts, votre esth&eacute;tique, votre fa&ccedil;on d&rsquo;aimer et d&rsquo;attirer. <Link href="/planetes/mars" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Mars</Link> d&eacute;termine votre &eacute;nergie, votre combativit&eacute;, votre d&eacute;sir et votre mani&egrave;re de passer &agrave; l&rsquo;action.
          </p>
          <p>
            Ces trois plan&egrave;tes ne sont pas forc&eacute;ment dans le m&ecirc;me signe que votre Soleil. Un Taureau avec Mercure en G&eacute;meaux parlera vite, avec esprit et l&eacute;g&egrave;ret&eacute; &mdash; aux antipodes du st&eacute;r&eacute;otype taurien lent et silencieux. Un Scorpion avec V&eacute;nus en Balance sera en amour d&rsquo;une douceur, d&rsquo;une diplomatie et d&rsquo;une &eacute;l&eacute;gance que personne n&rsquo;associe spontan&eacute;ment au Scorpion. Un Poissons avec Mars en Capricorne d&eacute;ploiera une discipline et une ambition qui contrediront totalement l&rsquo;image de r&ecirc;veur passif qu&rsquo;on lui colle.
          </p>
          <p>
            Chacune de ces plan&egrave;tes apporte une <em>nuance</em> d&eacute;terminante. Et comme Mercure et V&eacute;nus ne s&rsquo;&eacute;loignent jamais tr&egrave;s loin du Soleil, elles se trouvent souvent dans le signe pr&eacute;c&eacute;dent ou suivant &mdash; cr&eacute;ant d&eacute;j&agrave;, &agrave; elles seules, un d&eacute;calage significatif avec la description &laquo;&nbsp;pure&nbsp;&raquo; de votre signe.
          </p>
        </Card>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTIE 3 — LE TABLEAU DES PLANÈTES                            */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>Carte d&rsquo;Identit&eacute; plan&eacute;taire&nbsp;: ce que chaque Plan&egrave;te r&eacute;v&egrave;le de vous</H2>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md">
          {/* Header */}
          <div className="grid grid-cols-1 border-b border-white/15 bg-white/[0.04] md:grid-cols-3">
            <div className="px-3 py-3 text-xs font-bold uppercase tracking-widest text-sky-200 sm:px-4 sm:py-4">Plan&egrave;te</div>
            <div className="px-3 py-3 text-xs font-bold uppercase tracking-widest text-sky-200 sm:px-4 sm:py-4">Ce qu&rsquo;elle repr&eacute;sente</div>
            <div className="px-3 py-3 text-xs font-bold uppercase tracking-widest text-sky-200 sm:px-4 sm:py-4">Exemple de d&eacute;calage</div>
          </div>
          <PlanetRow planet="Soleil &#x2609;" role="Identit&eacute;, ego, volont&eacute;, direction de vie" example="Soleil Lion discret si conjoint Saturne" />
          <PlanetRow planet="Lune &#x263D;" role="&Eacute;motions, besoins, m&egrave;re, s&eacute;curit&eacute;" example="Soleil Verseau froid mais Lune Cancer ultra-sensible" />
          <PlanetRow planet="Ascendant" role="Masque social, apparence, filtre du monde" example="Soleil Poissons r&ecirc;veur mais ASC Vierge m&eacute;thodique" />
          <PlanetRow planet="Mercure &#x263F;" role="Pens&eacute;e, communication, humour" example="Soleil Taureau pos&eacute; mais Mercure G&eacute;meaux bavard" />
          <PlanetRow planet="V&eacute;nus &#x2640;" role="Amour, esth&eacute;tique, valeurs, go&ucirc;ts" example="Soleil Scorpion intense mais V&eacute;nus Balance douce" />
          <PlanetRow planet="Mars &#x2642;" role="Action, d&eacute;sir, &eacute;nergie, combativit&eacute;" example="Soleil Balance pacifique mais Mars B&eacute;lier explosif" />
          <PlanetRow planet="Jupiter &#x2643;" role="Expansion, chance, philosophie, exc&egrave;s" example="Jupiter en XII&nbsp;: croissance par l&rsquo;int&eacute;riorit&eacute;" />
          <PlanetRow planet="Saturne &#x2644;" role="Structure, limites, maturit&eacute;, le&ccedil;ons" example="Saturne conjoint Soleil&nbsp;: gravit&eacute; pr&eacute;coce" />
          <PlanetRow planet="Uranus" role="Originalit&eacute;, r&eacute;bellion, &eacute;clairs de g&eacute;nie" example="Uranus en I&nbsp;: personnalit&eacute; atypique, &eacute;lectrique" />
          <PlanetRow planet="Neptune &#x2646;" role="Imagination, spiritualit&eacute;, illusion" example="Neptune conjoint ASC&nbsp;: aura floue, ins&eacute;rissable" />
          <PlanetRow planet="Pluton &#x2647;" role="Transformation, pouvoir, r&eacute;g&eacute;n&eacute;ration" example="Pluton en I&nbsp;: regard magn&eacute;tique, pr&eacute;sence intense" />
        </div>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTIE 4 — LES MAISONS                                         */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>Les Maisons&nbsp;: le D&eacute;cor de votre Vie</H2>

        <Card title="12 Sc&egrave;nes, 12 Domaines de Vie" subtitle="O&ugrave; vos plan&egrave;tes jouent leur r&ocirc;le">
          <p>
            Si les signes sont le <em>comment</em> (de quelle mani&egrave;re une &eacute;nergie s&rsquo;exprime), les maisons sont le <em>o&ugrave;</em> (dans quel domaine de vie elle se manifeste). Les 12&nbsp;maisons astrologiques d&eacute;coupent votre existence en secteurs&nbsp;: l&rsquo;identit&eacute;, les finances, la communication, le foyer, la cr&eacute;ativit&eacute;, le travail, les relations, la transformation, les voyages, la carri&egrave;re, les amiti&eacute;s, l&rsquo;inconscient.
          </p>
          <p>
            Quand votre Soleil est en Lion mais en <Link href="/maisons/maison-12" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">maison&nbsp;XII</Link> (l&rsquo;inconscient, le retrait, la spiritualit&eacute;), votre &eacute;clat solaire ne s&rsquo;exprime pas sur le devant de la sc&egrave;ne. Vous brillez dans l&rsquo;ombre, dans l&rsquo;aide discr&egrave;te, dans la m&eacute;ditation, dans l&rsquo;art solitaire. L&rsquo;horoscope Lion, qui vous parle de projecteurs et d&rsquo;applaudissements, vous semblera totalement &eacute;tranger.
          </p>
          <p>
            &Agrave; l&rsquo;inverse, un Soleil en Poissons en <Link href="/maisons/maison-10" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">maison&nbsp;X</Link> (la carri&egrave;re, la r&eacute;putation publique) poussera ce Poissons r&ecirc;veur vers une visibilit&eacute; professionnelle inattendue. Ce ne sera pas le Poissons effac&eacute; des clich&eacute;s, mais un artiste, un th&eacute;rapeute ou un cr&eacute;atif publiquement reconnu. La maison transforme l&rsquo;expression du signe.
          </p>
        </Card>

        <Callout tone="ok" title="Astuce de lecture">
          <p>
            Pour comprendre pourquoi votre horoscope ne vous parle pas, identifiez dans quelle maison tombe votre Soleil. Un Soleil en maison&nbsp;I ressemblera beaucoup &agrave; la description classique du signe. Un Soleil en maison&nbsp;IV, VII ou XII sera v&eacute;cu tr&egrave;s diff&eacute;remment, car l&rsquo;&eacute;nergie solaire est canalis&eacute;e vers des domaines sp&eacute;cifiques de votre vie, pas vers votre personnalit&eacute; visible.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTIE 5 — LES ASPECTS                                         */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>Les Aspects&nbsp;: quand vos Plan&egrave;tes se parlent entre elles</H2>

        <Card title="La Partition secr&egrave;te du Th&egrave;me natal" subtitle="Harmonies, tensions et contradictions int&eacute;rieures">
          <p>
            Les aspects sont les angles form&eacute;s entre deux plan&egrave;tes dans votre th&egrave;me. Un <Link href="/blog/conjonction-melange-des-forces" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">aspect</Link> comme le trigone (120&deg;) cr&eacute;e une fluidit&eacute; naturelle entre deux &eacute;nergies. Un carr&eacute; (90&deg;) g&eacute;n&egrave;re une tension, un conflit int&eacute;rieur qui pousse &agrave; l&rsquo;action. Une opposition (180&deg;) confronte deux parties de vous qui semblent inconciliables.
          </p>
          <p>
            Ces aspects expliquent souvent pourquoi une personne ne correspond pas &agrave; son signe. Un Soleil en Sagittaire (optimisme, expansion, libert&eacute;) au carr&eacute; de Saturne sera un Sagittaire frein&eacute;, disciplin&eacute;, parfois anxieux &mdash; aux antipodes de l&rsquo;image de l&rsquo;aventurier insouciant. Un Soleil en Vierge (discr&eacute;tion, analyse, modestie) conjoint &agrave; Jupiter deviendra un Vierge expansif, g&eacute;n&eacute;reux, ambitieux &mdash; bien loin du st&eacute;r&eacute;otype maniaque et repli&eacute; sur ses tableaux Excel.
          </p>
          <p>
            Les aspects sont la cl&eacute; la plus fine de la personnalisation de votre th&egrave;me. Ce sont eux qui font que deux Scorpions, deux Taureaux ou deux G&eacute;meaux peuvent &ecirc;tre radicalement diff&eacute;rents. L&rsquo;horoscope ne peut pas en tenir compte &mdash; il faudrait pour cela conna&icirc;tre la position de chaque plan&egrave;te de chaque lecteur, ce qui revient &agrave; &eacute;tablir un th&egrave;me complet.
          </p>
        </Card>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTIE 6 — LA DOMINANTE PLANÉTAIRE                             */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>La Dominante plan&eacute;taire&nbsp;: votre vraie Signature</H2>

        <Card title="Au-del&agrave; du Signe, la Plan&egrave;te qui vous d&eacute;finit" subtitle="Le concept le plus m&eacute;connu &mdash; et le plus r&eacute;v&eacute;lateur">
          <p>
            La dominante plan&eacute;taire est un concept central de l&rsquo;astrologie traditionnelle fran&ccedil;aise, popularis&eacute; par des auteurs comme Jean-Pierre Nicola et Andr&eacute; Barbault. L&rsquo;id&eacute;e est simple&nbsp;: dans tout th&egrave;me natal, une ou deux plan&egrave;tes se d&eacute;tachent par leur position (angulaire, en domicile, fortement aspect&eacute;e) et colorent l&rsquo;ensemble de la personnalit&eacute; plus que le signe solaire lui-m&ecirc;me.
          </p>
          <p>
            Nous avons consacr&eacute; des articles entiers &agrave; chaque dominante plan&eacute;taire &mdash; le <Link href="/blog/solarien" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Solarien</Link>, le <Link href="/blog/lunarien" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Lunarien</Link>, le <Link href="/blog/mercurien" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Mercurien</Link>, le <Link href="/blog/venusien" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">V&eacute;nusien</Link>, le <Link href="/blog/martien" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Martien</Link>, le <Link href="/blog/jupiterien" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Jupiterien</Link>, le <Link href="/blog/saturnien" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Saturnien</Link>, l&rsquo;<Link href="/blog/uranien" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Uranien</Link>, le <Link href="/blog/neptunien" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Neptunien</Link>, le <Link href="/blog/plutonien" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Plutonien</Link>. Si vous ne vous reconnaissez pas dans votre signe, essayez de d&eacute;terminer votre dominante plan&eacute;taire. Il y a fort &agrave; parier que vous vous direz&nbsp;: &laquo;&nbsp;Ah, <em>&ccedil;a</em>, c&rsquo;est moi.&nbsp;&raquo;
          </p>
          <p>
            Par exemple, une personne avec un Soleil en Vierge mais une dominante Neptune (Neptune angulaire, aspect&eacute; &agrave; plusieurs plan&egrave;tes, en Poissons ou en maison XII) se reconn&acirc;tra bien plus dans la description du <Link href="/blog/neptunien" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">type Neptunien</Link> &mdash; r&ecirc;veur, intuitif, artistique, flou &mdash; que dans celle de la Vierge analytique et terre-&agrave;-terre.
          </p>
        </Card>

        <Callout tone="warn" title="Attention au pi&egrave;ge">
          <p>
            D&eacute;terminer une dominante plan&eacute;taire demande une lecture compl&egrave;te du th&egrave;me. Ne vous fiez pas &agrave; un seul facteur (comme la plan&egrave;te la plus proche de l&rsquo;ascendant). Il faut croiser la position en signe, en maison, la ma&icirc;trise, les aspects re&ccedil;us et la dignit&eacute; essentielle. C&rsquo;est un exercice qui demande de la pratique &mdash; ou l&rsquo;accompagnement d&rsquo;un astrologue comp&eacute;tent.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTIE 7 — MYTHES ET RÉALITÉS                                  */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>Mythes &amp; R&eacute;alit&eacute;s&nbsp;: les Id&eacute;es re&ccedil;ues qui vous &eacute;loignent de votre Th&egrave;me</H2>

        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          <MythCard
            myth="Je suis B&eacute;lier, donc je suis aggressif"
            reality="Seulement si Mars est dominant et en aspect tendu. Un B&eacute;lier avec V&eacute;nus conjointe au Soleil peut &ecirc;tre d&rsquo;une douceur d&eacute;sarmante."
            tone="rose"
          />
          <MythCard
            myth="Les Poissons sont tous r&ecirc;veurs et perdus"
            reality="Un Poissons avec Saturne dominant ou un ascendant Capricorne sera hyper-structur&eacute;, pragmatique et ambitieux. Le signe ne fait pas tout."
            tone="sky"
          />
          <MythCard
            myth="Les Vierges sont maniaques et ennuyeuses"
            reality="Une Vierge avec Uranus conjoint au Soleil sera originale, inventive, anticonformiste. Neptune fort y ajoutera une dimension artistique et visionnaire."
            tone="emerald"
          />
          <MythCard
            myth="Les G&eacute;meaux sont superficiels"
            reality="Un G&eacute;meaux avec Pluton aspectant Mercure aura une profondeur psychologique redoutable. La Lune en Scorpion y ajoutera une intensit&eacute; &eacute;motionnelle insoup&ccedil;onn&eacute;e."
            tone="amber"
          />
          <MythCard
            myth="Les Taureaux d&eacute;testent le changement"
            reality="Un Taureau avec plusieurs plan&egrave;tes en signes mutables ou un Uranus dominant sera curieux, adaptable et amoureux de la nouveaut&eacute;."
            tone="violet"
          />
          <MythCard
            myth="Les Scorpions sont sombres et vengeurs"
            reality="Un Scorpion avec Jupiter dominant ou V&eacute;nus en Sagittaire sera g&eacute;n&eacute;reux, rieur, optimiste et passionn&eacute;ment &eacute;pris de libert&eacute;."
            tone="rose"
          />
        </div>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTIE 8 — CAS CONCRETS                                        */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>Cas concrets&nbsp;: quand le Th&egrave;me contredit le Signe</H2>

        <Card title="Marie, Soleil Taureau &mdash; mais rien d&rsquo;un Taureau classique" subtitle="Un cas d&rsquo;&eacute;cole en consultation">
          <p>
            Marie vient en consultation en disant&nbsp;: &laquo;&nbsp;Je suis <Link href="/signes/taureau" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Taureau</Link>, mais je suis tout sauf stable. Je change de travail, de ville, de relation. Je m&rsquo;ennuie vite. L&rsquo;astrologie, c&rsquo;est n&rsquo;importe quoi.&nbsp;&raquo; En regardant son th&egrave;me, tout s&rsquo;&eacute;claire.
          </p>
          <p>
            Son ascendant est en Sagittaire (besoin de mouvement, de d&eacute;couverte, d&rsquo;horizon). Sa Lune est en G&eacute;meaux (curiosit&eacute; insatiable, besoin de stimulation intellectuelle). Son Mars est en Verseau (ind&eacute;pendance farouche, go&ucirc;t pour l&rsquo;exp&eacute;rimentation). Et son Soleil Taureau est en maison VI &mdash; le domaine du travail quotidien, pas de l&rsquo;identit&eacute; visible.
          </p>
          <p>
            Le Taureau est bien l&agrave;, mais il s&rsquo;exprime dans son rapport au travail&nbsp;: Marie a besoin de conditions mat&eacute;rielles confortables, d&rsquo;un salaire s&ucirc;r, d&rsquo;un bureau agr&eacute;able. C&rsquo;est le seul domaine o&ugrave; elle recherche la stabilit&eacute;. Pour le reste, sa nature est domin&eacute;e par le feu, l&rsquo;air et le mouvement &mdash; des &eacute;nergies que l&rsquo;horoscope Taureau ne captera jamais.
          </p>
        </Card>

        <Card title="Thomas, Soleil Cancer &mdash; et aucune sensibilit&eacute; apparente" subtitle="Le poids de Saturne et de l&rsquo;ascendant">
          <p>
            Thomas se d&eacute;crit comme &laquo;&nbsp;rationnel, distant, peu &eacute;motionnel&nbsp;&raquo;. Il d&eacute;teste les effusions et les d&eacute;monstrations affectives. Quand on lui dit qu&rsquo;il est Cancer &mdash; le signe de la sensibilit&eacute;, de la m&egrave;re, du foyer &mdash; il rit&nbsp;: &laquo;&nbsp;Pas du tout moi.&nbsp;&raquo;
          </p>
          <p>
            Son th&egrave;me r&eacute;v&egrave;le un ascendant <Link href="/signes/capricorne" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">Capricorne</Link>, avec Saturne conjoint au Soleil. Cette configuration agit comme un mur de pierre autour de la sensibilit&eacute; canc&eacute;rienne. Les &eacute;motions sont l&agrave;, intenses, profondes, mais verrouill&eacute;es derri&egrave;re un barrage saturnien b&acirc;ti depuis l&rsquo;enfance. La Lune en Verseau confirme&nbsp;: le besoin &eacute;motionnel s&rsquo;intellectualise, se distancie, se met &agrave; distance de s&eacute;curit&eacute;.
          </p>
          <p>
            Thomas <em>est</em> Cancer. Mais il l&rsquo;est de mani&egrave;re invisible, souterraine, prot&eacute;g&eacute;e. Sa sensibilit&eacute; se manifeste dans sa loyaut&eacute; ind&eacute;fectible envers ses proches, dans sa m&eacute;moire &eacute;motionnelle impressionnante, dans sa capacit&eacute; &agrave; sentir quand quelqu&rsquo;un ne va pas bien. Mais jamais il ne le montrera ouvertement. Saturne veille.
          </p>
        </Card>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTIE 9 — ET MAINTENANT ?                                      */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>Et maintenant&nbsp;? Comment lire votre vrai Portrait</H2>

        <Card title="Les &Eacute;tapes pour se reconna&icirc;tre enfin" subtitle="Un guide pratique pour aller au-del&agrave; du signe">
          <p>
            Si cet article vous a parl&eacute;, voici comment aller plus loin. Commencez par calculer votre <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="text-sky-300 underline decoration-sky-300/30 underline-offset-2 transition-colors hover:text-sky-200">th&egrave;me natal complet</Link>. Vous aurez besoin de votre date de naissance, de votre heure de naissance (la plus pr&eacute;cise possible, id&eacute;alement au quart d&rsquo;heure pr&egrave;s) et de votre lieu de naissance.
          </p>
          <p>
            Une fois votre th&egrave;me en main, rep&eacute;rez les &eacute;l&eacute;ments suivants, par ordre de priorit&eacute;. D&rsquo;abord, <strong className="text-white/90">votre ascendant et son ma&icirc;tre</strong>&nbsp;: le signe de l&rsquo;ascendant et la plan&egrave;te qui le gouverne vous en disent souvent plus que votre signe solaire. Ensuite, <strong className="text-white/90">votre Lune</strong>&nbsp;: identifiez son signe et sa maison pour comprendre votre vie &eacute;motionnelle profonde. Puis <strong className="text-white/90">Mercure et V&eacute;nus</strong>&nbsp;: ce sont les cl&eacute;s de votre communication et de votre affectivit&eacute;. Enfin, <strong className="text-white/90">les aspects majeurs &agrave; votre Soleil</strong>&nbsp;: sont-ils harmoniques ou tendus&nbsp;? Un Soleil conjoint &agrave; Saturne ou au carr&eacute; de Neptune ne s&rsquo;exprimera pas comme un Soleil libre de tout aspect.
          </p>
          <p>
            Et si vous voulez aller encore plus loin, explorez votre <strong className="text-white/90">dominante plan&eacute;taire</strong>. C&rsquo;est elle qui, souvent, d&eacute;tient la cl&eacute; de cette impression de d&eacute;calage. Quand on d&eacute;couvre sa dominante, c&rsquo;est comme trouver le bon genre musical pour d&eacute;crire sa vie&nbsp;: tout prend soudain du sens.
          </p>
        </Card>

        <Card title="Pourquoi cette compr&eacute;hension change tout" subtitle="L&rsquo;astrologie comme miroir, pas comme &eacute;tiquette">
          <p>
            Le v&eacute;ritable int&eacute;r&ecirc;t de l&rsquo;astrologie n&rsquo;a jamais &eacute;t&eacute; de pr&eacute;dire l&rsquo;avenir ou de classer les gens dans des bo&icirc;tes. Son g&eacute;nie r&eacute;side dans sa capacit&eacute; &agrave; offrir un <em>miroir symbolique</em> d&rsquo;une pr&eacute;cision troublante &mdash; un miroir qui ne vous dit pas qui vous devez &ecirc;tre, mais qui vous invite &agrave; reconna&icirc;tre qui vous &ecirc;tes d&eacute;j&agrave;.
          </p>
          <p>
            Quand vous passez de &laquo;&nbsp;je suis B&eacute;lier&nbsp;&raquo; &agrave; &laquo;&nbsp;j&rsquo;ai un Soleil B&eacute;lier en maison IX, avec une Lune en Cancer, un ascendant Balance, V&eacute;nus conjointe &agrave; Neptune et Mars en Capricorne&nbsp;&raquo;, vous ne r&eacute;duisez plus votre identit&eacute; &agrave; un mot. Vous d&eacute;couvrez un paysage, une partition, une architecture intérieure. Et dans ce paysage, chaque contradiction, chaque paradoxe, chaque tension a sa place et sa raison d&rsquo;&ecirc;tre.
          </p>
          <p>
            L&rsquo;horoscope de votre journal ne vous ressemble pas. C&rsquo;est normal. Parce que vous n&rsquo;&ecirc;tes pas un douzi&egrave;me de l&rsquo;humanit&eacute;. Vous &ecirc;tes une combinaison unique, un agencement irr&eacute;p&eacute;table de plan&egrave;tes, de signes, de maisons et d&rsquo;aspects qui n&rsquo;existera jamais deux fois dans l&rsquo;histoire de l&rsquo;univers. Et &ccedil;a, aucun horoscope ne pourra le capturer en trois lignes.
          </p>
        </Card>

        <Callout tone="ok" title="En r&eacute;sum&eacute;">
          <p>
            Votre signe solaire est une porte d&rsquo;entr&eacute;e, pas une maison. Pour vous y retrouver, explorez votre ascendant, votre Lune, vos plan&egrave;tes personnelles, vos maisons et vos aspects. C&rsquo;est l&agrave;, dans cette complexit&eacute;, que se trouve enfin le portrait qui vous ressemble.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* ================================================================ */}
      {/*  PARTIE 10 — POUR ALLER PLUS LOIN                               */}
      {/* ================================================================ */}

      <section className="space-y-6">
        <H2>Pour aller plus loin</H2>

        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          <Link
            href="/blog/qu-est-ce-qu-un-theme-astral"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:bg-white/[0.06] sm:p-6"
          >
            <p className="font-serif text-lg text-white/90 transition-colors group-hover:text-sky-200">
              Qu&rsquo;est-ce qu&rsquo;un th&egrave;me astral&nbsp;?
            </p>
            <p className="mt-2 text-sm text-white/50">
              Les bases pour comprendre la carte de votre ciel de naissance.
            </p>
          </Link>

          <Link
            href="/blog/comprendre-signe-astrologique-ascendant-12-exemples"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:bg-white/[0.06] sm:p-6"
          >
            <p className="font-serif text-lg text-white/90 transition-colors group-hover:text-sky-200">
              Comprendre son signe et son ascendant
            </p>
            <p className="mt-2 text-sm text-white/50">
              La diff&eacute;rence entre ces deux piliers de votre identit&eacute; astrologique.
            </p>
          </Link>

          <Link
            href="/blog/venus-en-signes-style-amoureux"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:bg-white/[0.06] sm:p-6"
          >
            <p className="font-serif text-lg text-white/90 transition-colors group-hover:text-sky-200">
              V&eacute;nus en signe&nbsp;: votre style amoureux
            </p>
            <p className="mt-2 text-sm text-white/50">
              D&eacute;couvrez comment V&eacute;nus colore votre mani&egrave;re d&rsquo;aimer.
            </p>
          </Link>

          <Link
            href="/blog/mars-en-signes-desir-libido-action"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:bg-white/[0.06] sm:p-6"
          >
            <p className="font-serif text-lg text-white/90 transition-colors group-hover:text-sky-200">
              Mars en signe&nbsp;: d&eacute;sir, &eacute;nergie, action
            </p>
            <p className="mt-2 text-sm text-white/50">
              Votre mani&egrave;re de foncer, de d&eacute;sirer et de vous affirmer.
            </p>
          </Link>
        </div>
      </section>
    </article>
  );
}
