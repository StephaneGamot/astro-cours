import type { Metadata } from "next";
import {
  Sparkles,
  BookOpen,
  GraduationCap,
  Compass,
  Shield,
  Eye,
  Lock,
  Heart,
  Target,
  Layers,
  Brain,
  Code,
  Leaf,
} from "lucide-react";
import { SITE_NAME, SITE_URL, absoluteUrl, buildTitle } from "@/lib/seo";

/* ================================================================== */
/*  SEO — Metadata Next.js                                            */
/* ================================================================== */
const CANONICAL = "/auteur/stephane-gamot";
const TITLE = "St\u00e9phane Gamot — Astrologue & Auteur";
const DESCRIPTION =
  "Passionn\u00e9 d\u2019astrologie depuis plus de 40\u00a0ans, form\u00e9 pendant 3\u00a0ans aupr\u00e8s de Jean-Marie Michiels. D\u00e9couvrez mon parcours, ma m\u00e9thode et ma vision d\u2019une astrologie rigoureuse, \u00e9thique et ancr\u00e9e dans le r\u00e9el.";

export const metadata: Metadata = {
  title: buildTitle(TITLE),
  description: DESCRIPTION,
  alternates: { canonical: absoluteUrl(CANONICAL) },
  robots: { index: true, follow: true },

  openGraph: {
    title: buildTitle(TITLE),
    description: DESCRIPTION,
    url: absoluteUrl(CANONICAL),
    siteName: SITE_NAME,
    locale: "fr_FR",
    type: "profile",
    images: [
      {
        url: absoluteUrl("/og/cover.jpg"),
        width: 1200,
        height: 630,
        alt: TITLE,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: buildTitle(TITLE),
    description: DESCRIPTION,
    images: [absoluteUrl("/og/cover.jpg")],
  },
};

/* ================================================================== */
/*  JSON-LD — Schema.org Person (E-E-A-T)                             */
/* ================================================================== */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "St\u00e9phane Gamot",
  url: absoluteUrl(CANONICAL),
  sameAs: [
    absoluteUrl("/a-propos"),
    "https://www.facebook.com/profile.php?id=61577719253973",
  ],
  jobTitle: "Astrologue & Ing\u00e9nieur logiciel",
  description: DESCRIPTION,
  knowsAbout: [
    "Astrologie natale",
    "Astrologie pr\u00e9visionnelle",
    "Astrologie horaire",
    "Astro-psychologie",
    "Th\u00e8me astral",
    "Transits plan\u00e9taires",
    "R\u00e9volution solaire",
    "Directions primaires",
    "M\u00e9decine traditionnelle chinoise",
    "Shiatsu",
    "D\u00e9veloppement logiciel",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "AstroCours.be",
        "url": "https://www.astrocours.be",
    description:
      "Formation compl\u00e8te en astrologie dirig\u00e9e par Jean-Marie Michiels",
      
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": absoluteUrl(CANONICAL),
  },
  worksFor: {
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  },
};

/* ================================================================== */
/*  Donn\u00e9es — Sections                                           */
/* ================================================================== */

const FORMATION_THEMES = [
  "Calcul et lecture d\u2019un th\u00e8me natal",
  "Plan\u00e8tes, signes, maisons et aspects",
  "Domification, ma\u00eetrises et dignit\u00e9s",
  "Dominantes plan\u00e9taires et almuten",
  "R\u00e8gles d\u2019interpr\u00e9tation traditionnelle",
  "Techniques pr\u00e9visionnelles\u00a0: transits, r\u00e9volutions solaires et lunaires, directions",
  "Points fictifs\u00a0: n\u0153uds lunaires, Lune Noire, parts arabes",
  "Astrologie horaire, m\u00e9dicale et ast\u00e9ro\u00efdes",
];

const ETHIQUE = [
  {
    icon: Shield,
    title: "Responsabilit\u00e9",
    text: "L\u2019astrologie est un outil puissant. Je ne traite pas les sujets li\u00e9s \u00e0 la mort ou aux maladies graves. Je ne dis pas aux gens quoi faire et ne remplace jamais leur propre jugement.",
  },
  {
    icon: Eye,
    title: "Transparence",
    text: "L\u2019astrologie permet de voir des tendances, des dynamiques, des potentiels. Elle ne pr\u00e9dit pas un destin fig\u00e9. Il est important d\u2019\u00eatre clair l\u00e0-dessus d\u00e8s le d\u00e9part.",
  },
  {
    icon: Lock,
    title: "Confidentialit\u00e9",
    text: "Les donn\u00e9es de naissance ne sont pas anodines. Elles restent strictement confidentielles, ne sont ni conserv\u00e9es inutilement, ni partag\u00e9es.",
  },
];

/* ================================================================== */
/*  Composants internes                                               */
/* ================================================================== */

function SectionBlock({
  icon: Icon,
  badge,
  badgeColor,
  title,
  children,
}: {
  icon: React.ElementType;
  badge: string;
  badgeColor: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="relative rounded-2xl border border-white/[0.06] bg-surface/60 backdrop-blur-sm px-5 py-6 transition-all duration-300 hover:border-white/[0.12] hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] sm:px-7 sm:py-8">
      <div className="mb-4 flex flex-wrap items-center gap-2 sm:gap-3">
        <span
          className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-0.5 text-[0.7rem] font-semibold uppercase tracking-wider ${badgeColor}`}
        >
          <Icon className="h-3 w-3" />
          {badge}
        </span>
        <h2 className="font-serif text-lg font-semibold tracking-tight text-text sm:text-xl">
          {title}
        </h2>
      </div>
      <div className="space-y-4 text-[0.92rem] leading-[1.78] text-text/70 sm:text-[0.935rem]">
        {children}
      </div>
    </section>
  );
}

/* ================================================================== */
/*  Page                                                              */
/* ================================================================== */

export default function AuteurPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="relative mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        {/* ── Glow d\u00e9coratif ── */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(108,124,255,.45) 0%, rgba(139,92,246,.25) 40%, transparent 70%)",
          }}
        />

        {/* ── En-t\u00eate ──────────────────────────────────────────── */}
        <header className="relative mb-10 space-y-5 text-center sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span className="text-xs font-medium tracking-wide text-accent">
              Auteur
            </span>
          </div>

          <h1 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem]">
            St&eacute;phane{" "}
            <span className="bg-gradient-to-r from-violet-400 via-accent to-sky-400 bg-clip-text text-transparent">
              Gamot
            </span>
          </h1>

          <p className="mx-auto max-w-xl text-sm leading-relaxed text-text/55 sm:text-[0.94rem]">
            Ing&eacute;nieur en d&eacute;veloppement logiciel. Passionn&eacute;
            d&apos;astrologie depuis plus de quarante ans. Form&eacute; en
            astrologie traditionnelle, pr&eacute;visionnelle et en
            astro-psychologie. &Eacute;tudiant en m&eacute;decine traditionnelle
            chinoise et shiatsu. Auteur du site{" "}
            <span className="font-medium text-accent/80">Astro&nbsp;Cours</span>.
          </p>

          {/* Chiffres cl\u00e9s */}
          <div className="mx-auto flex max-w-md justify-center gap-6 pt-2 sm:gap-10">
            {[
              { value: "40+", label: "ans de pratique" },
              { value: "3", label: "ans de formation" },
              { value: "60+", label: "sujets enseign\u00e9s" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-2xl font-bold text-text sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-[0.7rem] uppercase tracking-wider text-text/40 sm:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </header>

        {/* ── Contenu ───────────────────────────────────────────────── */}
        <div className="space-y-6 sm:space-y-8">
          {/* ─── Ma philosophie ─── */}
          <SectionBlock
            icon={Heart}
            badge="Philosophie"
            badgeColor="bg-rose-500/10 text-rose-400"
            title="Comprendre qui nous sommes"
          >
            <p>
              Pour moi, l&apos;astrologie sert avant tout &agrave; comprendre
              qui nous sommes. Comprendre ce que nous avons travers&eacute;
              &mdash;&nbsp;le pourquoi, &agrave; cause de quoi, dans quel but.
              Mieux comprendre les &eacute;preuves que nous traversons
              aujourd&apos;hui. Et nous pr&eacute;parer, avec lucidit&eacute;,
              aux &eacute;preuves &eacute;ventuelles que nous traverserons
              demain.
            </p>
            <p>
              C&apos;est avant tout un outil pour mieux nous comprendre et
              nous pr&eacute;parer &agrave; la vie. C&apos;est cette vision que
              je d&eacute;veloppe aujourd&apos;hui &agrave; travers Astro Cours.
            </p>
            <p>
              Avec le temps, je r&eacute;alise que l&apos;approche qui me
              parle le plus profond&eacute;ment est
              l&apos;<strong className="text-text/90">astro-psychologie</strong>&nbsp;:
              la rencontre entre l&apos;analyse du th&egrave;me astral et la
              compr&eacute;hension psychologique de l&apos;individu.
            </p>

            {/* Astro-psychologie — principes */}
            <div className="mt-3 rounded-xl border border-rose-400/10 bg-rose-500/[0.04] px-5 py-4">
              <p className="mb-3 text-sm font-semibold text-text/85">
                Principes cl&eacute;s de l&apos;astro-psychologie
              </p>
              <div className="space-y-2 text-[0.82rem] leading-relaxed text-text/60">
                <p>
                  Le th&egrave;me natal est lu comme une carte des
                  fonctionnements psychologiques&nbsp;: les besoins profonds,
                  les m&eacute;canismes de d&eacute;fense, les &eacute;lans
                  contradictoires, les sch&eacute;mas r&eacute;p&eacute;titifs.
                  Plut&ocirc;t que de d&eacute;cr&eacute;ter un
                  &laquo;&nbsp;destin&nbsp;&raquo;, elle &eacute;claire des
                  dynamiques int&eacute;rieures que l&apos;on ressent
                  d&eacute;j&agrave; sans toujours pouvoir les nommer.
                </p>
                <p>
                  Les transits et progressions ne sont pas des
                  pr&eacute;dictions, mais des p&eacute;riodes de maturation
                  psychologique&nbsp;: des moments o&ugrave; certaines parties de
                  nous sont appel&eacute;es &agrave; &eacute;voluer.
                </p>
                <p>
                  L&apos;objectif n&apos;est pas de donner des
                  r&eacute;ponses, mais d&apos;offrir un miroir&nbsp;: mieux se
                  conna&icirc;tre, accepter ses tensions internes et
                  transformer ses potentiels en forces conscientes.
                </p>
              </div>
            </div>

            <p className="mt-3 text-[0.82rem] leading-relaxed text-text/50 italic">
              Note de transparence&nbsp;: l&apos;astrologie, y compris sa branche
              psychologique, n&apos;est pas reconnue comme une science par le
              milieu acad&eacute;mique. Elle est cependant per&ccedil;ue par ses
              praticiens comme une d&eacute;marche
              &laquo;&nbsp;th&eacute;rapeutique&nbsp;&raquo; au sens large
              &mdash;&nbsp;un outil de compr&eacute;hension de soi, pas un
              substitut &agrave; un suivi m&eacute;dical ou psychologique.
            </p>
          </SectionBlock>

          {/* ─── Parcours parall\u00e8le ─── */}
          <SectionBlock
            icon={Code}
            badge="Profil"
            badgeColor="bg-cyan-500/10 text-cyan-400"
            title="Un parcours entre logique et intuition"
          >
            <p>
              Dans la vie professionnelle, je suis{" "}
              <strong className="text-text/90">
                ing&eacute;nieur en d&eacute;veloppement logiciel
              </strong>.
              Ce m&eacute;tier m&apos;a appris la rigueur analytique, la
              structuration des id&eacute;es et l&apos;importance de la
              m&eacute;thode. Ce sont des qualit&eacute;s que
              j&apos;applique directement &agrave; ma pratique astrologique&nbsp;:
              v&eacute;rifier, recouper, ne rien affirmer &agrave; la
              l&eacute;g&egrave;re.
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <div className="flex gap-3 rounded-xl border border-cyan-400/10 bg-cyan-500/[0.04] px-4 py-3.5">
                <Code className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400/70" />
                <div>
                  <p className="text-sm font-semibold text-text/85">
                    Ing&eacute;nierie logicielle
                  </p>
                  <p className="mt-1 text-[0.82rem] leading-relaxed text-text/55">
                    Approche rationnelle, structur&eacute;e et
                    m&eacute;thodique. La logique au service de la clart&eacute;.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 rounded-xl border border-cyan-400/10 bg-cyan-500/[0.04] px-4 py-3.5">
                <Leaf className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400/70" />
                <div>
                  <p className="text-sm font-semibold text-text/85">
                    MTC &amp; Shiatsu
                  </p>
                  <p className="mt-1 text-[0.82rem] leading-relaxed text-text/55">
                    &Eacute;tude de la m&eacute;decine traditionnelle chinoise et
                    du shiatsu&nbsp;: une autre lecture &eacute;nerg&eacute;tique
                    du corps et de l&apos;esprit.
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-3">
              Ces deux univers &mdash;&nbsp;l&apos;ing&eacute;nierie et les
              pratiques &eacute;nerg&eacute;tiques&nbsp;&mdash; peuvent sembler
              oppos&eacute;s. En r&eacute;alit&eacute;, ils se compl&egrave;tent.
              L&apos;un m&apos;ancre dans la logique et la v&eacute;rification,
              l&apos;autre m&apos;ouvre &agrave; une compr&eacute;hension plus
              globale de l&apos;&ecirc;tre humain. L&apos;astrologie, telle que
              je la pratique, se situe exactement &agrave; cette intersection.
            </p>
          </SectionBlock>

          {/* ─── La naissance de cette passion ─── */}
          <SectionBlock
            icon={Sparkles}
            badge="Origines"
            badgeColor="bg-amber-500/10 text-amber-400"
            title="La naissance d&apos;une passion"
          >
            <p>
              Tout commence &agrave; l&apos;&acirc;ge de dix ans. Je suis
              fascin&eacute; par la mythologie grecque et romaine&nbsp;: Zeus,
              Ar&egrave;s, Aphrodite, Herm&egrave;s&hellip; Chaque dieu porte
              le nom d&apos;une plan&egrave;te, chaque r&eacute;cit
              r&eacute;v&egrave;le un arch&eacute;type. Les relations entre
              ces divinit&eacute;s &mdash; leurs alliances, leurs conflits,
              leurs trahisons &mdash; pr&eacute;figurent ce que
              l&apos;astrologie appelle les aspects.
            </p>
            <p>
              Tr&egrave;s vite, cette curiosit&eacute; me conduit &agrave;
              l&apos;astrologie comme une suite logique, presque une
              &eacute;vidence. Les livres semblent arriver d&apos;eux-m&ecirc;mes.
              Georges Antar&egrave;s, Andr&eacute; Barbault, Liz Greene,
              Henri-Joseph Gouchon&hellip; Chaque ouvrage en appelle un autre.
              Ce qui &eacute;tait une fascination d&apos;enfant devient
              rapidement une pratique quotidienne et m&eacute;thodique.
            </p>
          </SectionBlock>

          {/* ─── Formation ─── */}
          <SectionBlock
            icon={GraduationCap}
            badge="Formation"
            badgeColor="bg-violet-500/10 text-violet-400"
            title="Trois ann&eacute;es de formation structur&eacute;e"
          >
            <p>
              Je me suis form&eacute; pendant trois ans aupr&egrave;s de{" "}
              <strong className="text-text/90">Jean-Marie Michiels</strong>,
              astrologue, chercheur et p&eacute;dagogue belge, au sein
              d&apos;AstroCours.be. Cette formation a profond&eacute;ment
              transform&eacute; ma mani&egrave;re d&apos;aborder l&apos;astrologie.
              J&apos;y ai appris &agrave; sortir des interpr&eacute;tations
              rapides, &agrave; ne jamais isoler un &eacute;l&eacute;ment de
              son contexte, &agrave; consid&eacute;rer le th&egrave;me comme
              un ensemble coh&eacute;rent o&ugrave; tout se r&eacute;pond.
            </p>
            <p>Le programme couvrait un spectre large et exigeant&nbsp;:</p>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {FORMATION_THEMES.map((t) => (
                <div
                  key={t}
                  className="flex items-start gap-2 rounded-lg border border-violet-400/10 bg-violet-500/[0.04] px-3 py-2"
                >
                  <BookOpen className="mt-0.5 h-3.5 w-3.5 shrink-0 text-violet-400/60" />
                  <span className="text-[0.82rem] leading-snug text-text/60">
                    {t}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-3">
              Ce que cette formation m&apos;a surtout appris, c&apos;est la
              rigueur. La rigueur de ne rien affirmer qu&apos;on ne puisse
              d&eacute;montrer dans le th&egrave;me. La rigueur de toujours
              recouper, v&eacute;rifier, contextualiser. Et la conviction que
              l&apos;astrologie, pour &ecirc;tre cr&eacute;dible, doit
              s&apos;enseigner avec clart&eacute; et honn&ecirc;tet&eacute;
              intellectuelle.
            </p>
          </SectionBlock>

          {/* ─── Pourquoi ─── */}
          <SectionBlock
            icon={Compass}
            badge="Motivation"
            badgeColor="bg-sky-500/10 text-sky-400"
            title="Pourquoi je fais &ccedil;a"
          >
            <p>
              Parce que l&apos;astrologie, bien utilis&eacute;e, ne donne pas
              de r&eacute;ponses toutes faites. Elle pose de meilleures
              questions. Elle met en lumi&egrave;re des fonctionnements que
              l&apos;on ressent d&eacute;j&agrave;, sans toujours pouvoir les
              nommer.
            </p>
            <p>
              Elle &eacute;claire des tensions internes, des &eacute;lans
              contradictoires, des sch&eacute;mas r&eacute;currents. Et
              parfois, simplement, elle permet de se comprendre un peu mieux
              &mdash;&nbsp;sans se juger.
            </p>
            <p>
              C&apos;est cette utilit&eacute;-l&agrave; qui m&apos;int&eacute;resse.
              Pas l&apos;astrologie spectacle. Pas les horoscopes de magazine.
              Une astrologie qui aide &agrave; vivre de fa&ccedil;on plus
              consciente.
            </p>
          </SectionBlock>

          {/* ─── Approche et m\u00e9thode ─── */}
          <SectionBlock
            icon={Target}
            badge="M\u00e9thode"
            badgeColor="bg-emerald-500/10 text-emerald-400"
            title="Mon approche"
          >
            <p>
              Je d&eacute;fends une astrologie ancr&eacute;e dans le
              r&eacute;el. Pas de phrases vagues. Pas de raccourcis du type
              &laquo;&nbsp;vous &ecirc;tes Poissons donc vous &ecirc;tes
              r&ecirc;veur&nbsp;&raquo;. Pas d&apos;interpr&eacute;tations
              sorties de leur contexte.
            </p>
            <p>
              Un th&egrave;me astral est un ensemble coh&eacute;rent. Chaque
              &eacute;l&eacute;ment &mdash;&nbsp;plan&egrave;te, signe, maison,
              aspect&nbsp;&mdash; prend son sens uniquement en relation avec les
              autres. Mon travail consiste &agrave; lire cette coh&eacute;rence,
              pas &agrave; simplifier.
            </p>
            <p>
              Avec le temps, j&apos;ai structur&eacute; une mani&egrave;re de
              travailler claire et reproductible. Une interpr&eacute;tation
              s&eacute;rieuse ne repose jamais sur un seul &eacute;l&eacute;ment
              isol&eacute;. Elle repose sur l&apos;ensemble du th&egrave;me, ses
              r&eacute;p&eacute;titions, ses tensions, ses dominantes. C&apos;est
              cette m&eacute;thode que je partage &agrave; travers chaque page
              d&apos;Astro Cours.
            </p>
          </SectionBlock>

          {/* ─── \u00c9thique ─── */}
          <SectionBlock
            icon={Layers}
            badge="\u00c9thique"
            badgeColor="bg-indigo-500/10 text-indigo-400"
            title="Ma charte &eacute;thique"
          >
            <p>
              L&apos;astrologie peut &ecirc;tre un outil puissant. C&apos;est
              pr&eacute;cis&eacute;ment pour cela qu&apos;elle doit &ecirc;tre
              utilis&eacute;e avec responsabilit&eacute;. Voici les principes
              qui guident ma pratique&nbsp;:
            </p>
            <div className="mt-3 space-y-3">
              {ETHIQUE.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-3 rounded-xl border border-indigo-400/10 bg-indigo-500/[0.04] px-4 py-3.5"
                >
                  <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400/70" />
                  <div>
                    <p className="text-sm font-semibold text-text/85">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[0.82rem] leading-relaxed text-text/55">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </SectionBlock>

          {/* ─── Ce que je cherche \u00e0 faire ─── */}
          <SectionBlock
            icon={Compass}
            badge="Mission"
            badgeColor="bg-teal-500/10 text-teal-400"
            title="Ce que je cherche &agrave; transmettre"
          >
            <p>
              &Agrave; travers Astro Cours, je cherche &agrave; proposer une
              astrologie diff&eacute;rente&nbsp;: plus claire, plus
              structur&eacute;e, plus honn&ecirc;te. Une astrologie qui aide
              &agrave; comprendre, qui pr&eacute;pare &agrave; ce qui vient
              &mdash;&nbsp;pas une astrologie qui cr&eacute;e de la
              d&eacute;pendance.
            </p>
            <p>
              L&apos;objectif est simple&nbsp;: donner &agrave; chacun les
              cl&eacute;s pour comprendre le langage du ciel par lui-m&ecirc;me.
              Apprendre &agrave; lire un th&egrave;me, saisir les cycles
              plan&eacute;taires, relier les symboles &agrave; la vie
              r&eacute;elle. Sans d&eacute;pendre d&apos;un interpr&egrave;te.
            </p>
          </SectionBlock>
        </div>

        {/* ── Citation de cl\u00f4ture ─────────────────────────────── */}
        <footer className="mt-8 sm:mt-12">
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-violet-500/[0.06] via-accent/[0.04] to-sky-500/[0.06] px-6 py-8 text-center sm:px-10 sm:py-10">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 0%, rgba(108,124,255,.15) 0%, transparent 60%)",
              }}
            />
            <blockquote className="relative mx-auto max-w-md font-serif text-base italic leading-relaxed text-text/60 sm:text-lg">
              &laquo;&nbsp;L&apos;astrologie est un langage. Si vous comprenez
              ce langage, le ciel vous parle.&nbsp;&raquo;
            </blockquote>
            <p className="relative mt-3 text-xs font-medium tracking-wide text-text/30 sm:text-sm">
              &mdash; Dane Rudhyar
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
