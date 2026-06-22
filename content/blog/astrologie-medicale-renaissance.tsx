import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Pill, TagPillsInline, getGlowFromTags } from "./ui";
import { AUTHOR_PERSON, PUBLISHER_ORG, SITE_URL } from "@/lib/seo";
import CoverImage from "@/public/images/blog/astrologie-medicale-renaissance.webp";

export const meta = {
  slug: "astrologie-medicale-renaissance",
  title: "Pourquoi les médecins de la Renaissance lisaient le ciel",
  description:
    "Pourquoi les médecins du Moyen Âge et de la Renaissance consultaient le ciel avant de soigner : humeurs, homme zodiacal, jours critiques.",
  date: "2026-06-19",
  tags: [
    "astrologie médicale",
    "histoire",
    "Renaissance",
    "humeurs",
    "homme zodiacal",
    "tempéraments",
    "tradition",
    "Lune",
    "débutant",
  ],
  readingLevel: "débutant" as const,
  cover: "/images/blog/astrologie-medicale-renaissance.webp",
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
      <div className="space-y-3 text-sm leading-relaxed text-white/80 md:text-base">{children}</div>
    </aside>
  );
}

function Card({
  title,
  subtitle,
  children,
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
      <div className="mt-5 space-y-4 text-sm leading-relaxed text-white/80 md:text-base">{children}</div>
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

export default function AstrologieMedicaleRenaissancePost() {
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
              image: `${SITE_URL}${meta.cover}`,
              datePublished: `${meta.date}T12:00:00Z`,
              dateModified: `${meta.date}T12:00:00Z`,
              author: AUTHOR_PERSON,
              publisher: PUBLISHER_ORG,
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `${SITE_URL}/blog/${meta.slug}`,
              },
              inLanguage: "fr-FR",
              keywords: meta.tags.join(", "),
              articleSection: "Histoire de l'astrologie",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Pourquoi les médecins de la Renaissance utilisaient-ils l'astrologie ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Parce que la médecine de l'époque reposait sur la théorie des humeurs héritée d'Hippocrate et de Galien. Le ciel était vu comme un cadran réglant l'équilibre des humeurs : on consultait donc les astres pour choisir le moment d'une saignée, d'une purge ou d'un remède.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Qu'est-ce que l'homme zodiacal (homo signorum) ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "C'est une image, omniprésente dans les almanachs médiévaux et de la Renaissance, qui associe chaque signe du zodiaque à une partie du corps, du Bélier (la tête) aux Poissons (les pieds). Elle servait de mémo pour éviter de soigner un organe quand la Lune traversait son signe.",
                  },
                },
                {
                  "@type": "Question",
                  name: "L'astrologie médicale est-elle une médecine reconnue aujourd'hui ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Non. L'astrologie médicale est un objet d'histoire et de symbolique, pas une pratique de soin validée. Aucune décision de santé ne doit s'appuyer dessus. En cas de symptôme ou de question médicale, il faut consulter un médecin.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      {/* IMAGE DE COUVERTURE */}
      <div className="relative w-full aspect-[7/3] rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(251,191,36,0.1)] bg-[#0f0f13] flex items-center justify-center">
        <Image src={CoverImage} alt="Médecin de la Renaissance consultant une carte du ciel et un homme zodiacal à la lumière d'une bougie" fill sizes="100vw" priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent z-10 pointer-events-none" />
      </div>

      {/* HERO */}
      <header className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
        <div
          className={`pointer-events-none absolute -right-24 -top-24 h-[500px] w-[500px] rounded-full opacity-30 mix-blend-screen blur-[100px] ${glow}`}
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-[80px]" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/50" aria-hidden="true" />

        <div className="relative z-10">
          <Kicker>Histoire • Humeurs • Homme zodiacal</Kicker>

          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="font-serif text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl md:max-w-3xl">
              Quand soigner, c&apos;était d&apos;abord lire le ciel
            </h2>

            <div className="flex flex-wrap gap-3 text-sm text-white/70">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">Récit historique</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">Non médical</span>
            </div>
          </div>

          <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            Pendant près de quinze siècles, un médecin européen digne de ce nom ne se contentait pas d&apos;examiner son patient : il
            consultait aussi une <strong className="font-medium text-amber-200">carte du ciel</strong>. Loin d&apos;être une lubie de
            charlatan, l&apos;<strong className="font-medium text-white">astrologie médicale</strong> était enseignée à l&apos;université,
            cousue dans la pensée savante d&apos;Hippocrate à la Renaissance. Voici l&apos;histoire de cette alliance entre le ciel et le
            corps — et les raisons, parfaitement logiques pour l&apos;époque, qui la rendaient incontournable.
          </p>

          <div className="mt-8 pt-6 border-t border-white/5">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      {/* AVERTISSEMENT MÉDICAL */}
      <Callout tone="warn" title="À lire avant tout : ceci est de l'histoire, pas un conseil de santé">
        <p>
          Cet article raconte une <strong className="text-white">pratique du passé</strong> et sa symbolique. L&apos;astrologie médicale
          n&apos;est pas une médecine : elle ne diagnostique rien, ne soigne rien et ne remplace en aucun cas un avis professionnel.
        </p>
        <p>
          En cas de symptôme, de douleur, de doute ou de question sur un traitement, <strong className="text-white">consultez un
          médecin</strong>. Ne modifiez jamais une prise en charge sur la base d&apos;une lecture astrologique.
        </p>
      </Callout>

      {/* STATS RAPIDES */}
      <section className="grid gap-4 sm:grid-cols-3" aria-label="Points clés de l'article">
        <Stat label="Cadre de pensée" value="Les 4 humeurs" />
        <Stat label="Outil emblématique" value="L'homme zodiacal" />
        <Stat label="Astre clé du timing" value="La Lune" />
      </section>

      {/* DEFINITION BOX */}
      <aside className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-6 leading-relaxed text-white/85">
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-amber-400">Définition</p>
        <p>
          L&apos;<strong>astrologie médicale</strong> (ou <em>iatromathématique</em>) est la branche historique de l&apos;astrologie qui
          reliait le corps humain, les <Link href="/astrologie-medicale">tempéraments et les humeurs</Link> au mouvement des planètes et
          des signes. Elle a structuré la médecine occidentale de l&apos;Antiquité grecque jusqu&apos;au XVIIᵉ siècle, avant d&apos;être
          écartée par la médecine expérimentale.
        </p>
      </aside>

      {/* INTRO */}
      <p className="text-base leading-relaxed text-white/80 md:text-lg">
        Pour comprendre pourquoi un docteur de 1550 ouvrait son éphéméride avant sa trousse, il faut oublier la médecine moderne et entrer
        dans une vision du monde où tout se tient : le ciel et la terre, le grand univers et le petit univers qu&apos;est le corps humain.
        Dans cette logique, lire les astres n&apos;était pas «&nbsp;croire à son horoscope&nbsp;» — c&apos;était appliquer la science la
        plus sérieuse de son temps.
      </p>

      {/* 1. LE CADRE DE PENSÉE */}
      <section className="space-y-6">
        <H2>1) Le corps comme «&nbsp;petit monde&nbsp;»</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          L&apos;idée maîtresse tient en un mot : <strong className="font-medium text-amber-200">correspondance</strong>. Pour les savants
          médiévaux et de la Renaissance, l&apos;être humain était un <em>microcosme</em>, un univers en miniature qui reflétait le grand
          <em> macrocosme</em> du ciel. Ce qui se jouait là-haut résonnait forcément ici-bas, dans la chair.
        </p>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Cette intuition n&apos;avait rien d&apos;absurde à l&apos;observation. Le Soleil règle les saisons, donc les fièvres et les
          récoltes. La <Link href="/planetes/lune">Lune</Link> gouverne les marées&nbsp;: pourquoi pas, alors, les «&nbsp;humeurs&nbsp;»
          liquides du corps&nbsp;? De ce raisonnement analogique naît une médecine où le ciel sert de <strong>calendrier</strong> et de{" "}
          <strong>boussole</strong>.
        </p>
      </section>

      <Divider />

      {/* 2. LES HUMEURS */}
      <section className="space-y-6">
        <H2>2) Les quatre humeurs, socle de toute la médecine</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Avant l&apos;astrologie, il y a une théorie médicale : celle des <strong className="font-medium text-amber-200">humeurs</strong>,
          héritée d&apos;<strong className="text-white">Hippocrate</strong> (Vᵉ&nbsp;siècle av. J.-C.) puis codifiée par{" "}
          <strong className="text-white">Galien</strong> au IIᵉ&nbsp;siècle. Selon elle, la santé est l&apos;équilibre de quatre fluides ;
          la maladie, leur déséquilibre. Tout le travail du médecin consistait à <em>rétablir la balance</em>.
        </p>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
          <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.04] md:grid-cols-3">
            <div className="p-4 text-xs font-semibold uppercase tracking-widest text-white/50">Humeur</div>
            <div className="p-4 text-xs font-semibold uppercase tracking-widest text-white/50">Tempérament &amp; élément</div>
            <div className="p-4 text-xs font-semibold uppercase tracking-widest text-white/50">Qualités associées</div>
          </div>
          <TableRow title="Le sang" effect="Sanguin — Air" reading="Chaud et humide ; jovial, sociable, lié à Jupiter et au printemps." />
          <TableRow title="La bile jaune" effect="Colérique — Feu" reading="Chaud et sec ; vif, irritable, lié à Mars et à l'été." />
          <TableRow title="La bile noire" effect="Mélancolique — Terre" reading="Froid et sec ; pensif, sombre, lié à Saturne et à l'automne." />
          <TableRow title="Le phlegme" effect="Flegmatique — Eau" reading="Froid et humide ; calme, lent, lié à la Lune et à l'hiver." />
        </div>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          On reconnaît là un vocabulaire toujours vivant : dire de quelqu&apos;un qu&apos;il est «&nbsp;sanguin&nbsp;»,
          «&nbsp;flegmatique&nbsp;» ou «&nbsp;mélancolique&nbsp;», c&apos;est parler humeurs sans le savoir. C&apos;est précisément là que
          l&apos;astrologie se branche sur la médecine : chaque planète et chaque signe portent les mêmes{" "}
          <strong className="text-white">qualités</strong> — chaud/froid, sec/humide — que les humeurs. Le ciel devient une grille de
          lecture du tempérament du patient.
        </p>

        <Callout tone="note" title="Le pont entre ciel et corps">
          <p>
            Si Saturne est «&nbsp;froid et sec&nbsp;» comme la bile noire, alors un thème marqué par Saturne signale un terrain{" "}
            <em>mélancolique</em> à surveiller. Le raisonnement n&apos;était pas «&nbsp;magique&nbsp;» : il appliquait au ciel la même
            physique des qualités qui régissait, croyait-on, le corps. Tout le système était cohérent de l&apos;intérieur.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* 3. L'HOMME ZODIACAL */}
      <section className="space-y-6">
        <H2>3) L&apos;homme zodiacal : le corps cartographié par les signes</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          L&apos;image la plus célèbre de cette médecine est le <strong className="font-medium text-amber-200">«&nbsp;homme
          zodiacal&nbsp;»</strong> (<em>homo signorum</em>, l&apos;«&nbsp;homme des signes&nbsp;»). On la trouve partout : dans les
          manuscrits enluminés, comme les <em>Très Riches Heures du duc de Berry</em>, puis dans les almanachs imprimés vendus par milliers.
          Le principe est simple et visuel : chaque signe gouverne une région du corps, de haut en bas.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="De la tête aux pieds" subtitle="Le zodiaque plaqué sur l'anatomie.">
            <p>
              <strong className="text-white">Bélier</strong> régit la tête, <strong className="text-white">Taureau</strong> la gorge,{" "}
              <strong className="text-white">Gémeaux</strong> les bras et poumons, <strong className="text-white">Cancer</strong> la
              poitrine… et ainsi de suite jusqu&apos;aux <strong className="text-white">Poissons</strong>, qui gouvernent les pieds. Le
              corps entier était ainsi couvert, signe après signe.
            </p>
          </Card>

          <Card title="Un mémo, pas une décoration" subtitle="À quoi servait vraiment cette image.">
            <p>
              L&apos;homme zodiacal était un <strong className="text-white">aide-mémoire pratique</strong>. La règle d&apos;or :
              n&apos;intervenir sur une partie du corps que lorsque la <Link href="/planetes/lune">Lune</Link> ne traversait pas le signe
              qui la gouverne. On évitait, par exemple, de saigner le bras quand la Lune était en Gémeaux.
            </p>
          </Card>
        </div>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Cette correspondance signes-organes reste l&apos;ossature de la tradition. On la retrouve, expliquée en détail, dans le{" "}
          <Link href="/astrologie-medicale">dossier complet sur l&apos;astrologie médicale</Link>, aux côtés des tempéraments et des
          maisons dites «&nbsp;de la santé&nbsp;».
        </p>
      </section>

      <Divider />

      {/* 4. LE TIMING : LUNE, JOURS CRITIQUES, DÉCOMBITURE */}
      <section className="space-y-6">
        <H2>4) Choisir le bon moment : la Lune et les «&nbsp;jours critiques&nbsp;»</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          La grande affaire de l&apos;astrologie médicale n&apos;était pas tant le <em>quoi</em> que le <em>quand</em>. Saignée, purge,
          administration d&apos;un remède, cueillette des plantes : chaque geste avait son moment favorable, et la{" "}
          <strong className="font-medium text-amber-200">Lune</strong>, astre le plus rapide, en était le grand régulateur.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Les jours critiques" subtitle="Hériter d'Hippocrate, lus dans le ciel.">
            <p>
              Hippocrate avait déjà observé que les fièvres évoluaient par paliers — les fameux <strong className="text-white">jours
              critiques</strong>. Les médecins astrologues les rattachèrent au cycle lunaire : la Lune revenant tous les sept jours environ
              à un aspect majeur, on y voyait la clé des phases d&apos;aggravation ou d&apos;amélioration.
            </p>
          </Card>

          <Card title="La décombiture" subtitle="Une carte pour l'instant où l'on tombe malade.">
            <p>
              Pratique plus technique, la <strong className="text-white">décombiture</strong> consistait à dresser une carte du ciel pour
              le moment exact où le patient s&apos;alitait (ou pour le prélèvement d&apos;urine). On y cherchait le pronostic : guérison,
              rechute, ou issue grave. Le médecin anglais Nicholas Culpeper en laissa, au XVIIᵉ siècle, des exemples détaillés.
            </p>
          </Card>
        </div>

        <Callout tone="note" title="Une médecine du calendrier">
          <p>
            On comprend mieux l&apos;attrait du système : faute de pouvoir mesurer grand-chose, il offrait au médecin une{" "}
            <strong className="text-white">méthode</strong>, des repères temporels et un langage commun avec le patient. Le ciel jouait le
            rôle qu&apos;ont aujourd&apos;hui les protocoles et les analyses.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* 5. POURQUOI ÇA A DURÉ — ET LA RENAISSANCE */}
      <section className="space-y-6">
        <H2>5) Pourquoi la Renaissance y a cru si fort</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Loin de reculer, l&apos;astrologie médicale connaît son <strong className="font-medium text-amber-200">apogée</strong> aux XVᵉ et
          XVIᵉ siècles. L&apos;imprimerie diffuse almanachs et calendriers de saignée à grande échelle ; les universités — Bologne, Paris,
          Montpellier — enseignent l&apos;astrologie aux futurs médecins comme une discipline normale du cursus.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Ficin et la mélancolie">
            <p>
              À Florence, <strong className="text-white">Marsile Ficin</strong> écrit le <em>De vita</em>, manuel de santé pour les
              intellectuels «&nbsp;saturniens&nbsp;», cherchant des remèdes joviaux et solaires à l&apos;excès de bile noire.
            </p>
          </Card>
          <Card title="Paracelse, l'iconoclaste">
            <p>
              <strong className="text-white">Paracelse</strong> bouscule Galien mais garde le ciel : pour lui, le médecin doit connaître
              l&apos;astronomie autant que la chimie des remèdes. L&apos;astre et le minéral se répondent.
            </p>
          </Card>
          <Card title="Une obligation savante">
            <p>
              Certaines facultés exigeaient des notions d&apos;astrologie pour exercer. Consulter le ciel n&apos;était pas marginal :
              c&apos;était la <strong className="text-white">norme</strong> du médecin lettré.
            </p>
          </Card>
        </div>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Pourquoi cette adhésion&nbsp;? Parce que le système était <strong>cohérent, enseignable et utile socialement</strong>. Il
          donnait du sens à la maladie, rassurait le malade, fournissait un pronostic et reliait le corps à un ordre cosmique partagé par
          toute la culture de l&apos;époque — théologie, musique, architecture comprises.
        </p>
      </section>

      <Divider />

      {/* 6. LE DÉCLIN ET CE QU'ON EN GARDE */}
      <section className="space-y-6">
        <H2>6) Le déclin — et ce qu&apos;il en reste</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          À partir du XVIIᵉ siècle, tout change. La <strong className="font-medium text-amber-200">méthode expérimentale</strong>, la
          découverte de la circulation du sang par Harvey, puis l&apos;essor de l&apos;anatomie et de la chimie rendent la théorie des
          humeurs progressivement intenable. Le ciel cesse d&apos;être un instrument de soin pour devenir un objet d&apos;astronomie pure.
        </p>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Mais l&apos;héritage ne s&apos;efface pas complètement. Il survit dans la <strong>langue</strong> (un caractère
          «&nbsp;lunatique&nbsp;», «&nbsp;saturnien&nbsp;», «&nbsp;jovial&nbsp;»), dans l&apos;<strong>histoire des idées</strong>, et dans
          la symbolique que l&apos;astrologie contemporaine continue d&apos;explorer — non pour soigner, mais pour décrire des{" "}
          <em>tempéraments</em> et des <em>terrains</em> psychologiques.
        </p>

        <Callout tone="ok" title="Ce que l'astrologie médicale peut (et ne peut pas) éclairer aujourd'hui">
          <p>
            <strong className="text-white">Ce qu&apos;elle éclaire&nbsp;:</strong> une histoire passionnante, un vocabulaire des
            tempéraments, une grille symbolique reliant signes, planètes et parties du corps.
          </p>
          <p>
            <strong className="text-white">Ce qu&apos;elle ne fait pas&nbsp;:</strong> diagnostiquer, prédire une maladie ou orienter un
            traitement. Pour cela, un seul interlocuteur — votre médecin.
          </p>
        </Callout>
      </section>

      {/* RAPPEL FINAL */}
      <Callout tone="warn" title="Rappel">
        <p>
          Ce récit est <strong className="text-white">historique et symbolique</strong>. Il ne constitue ni un diagnostic, ni un conseil
          médical. Toute question de santé relève d&apos;un <strong className="text-white">professionnel de santé</strong> : en cas de
          doute, consultez un médecin.
        </p>
      </Callout>

      {/* POUR ALLER PLUS LOIN */}
      <footer className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md sm:p-12">
        <H3>Pour aller plus loin</H3>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Pill tone="yellow">Humeurs</Pill>
          <Pill tone="violet">Homme zodiacal</Pill>
          <Pill tone="sky">Tempéraments</Pill>
          <Pill tone="orange">Tradition</Pill>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/astrologie-medicale"
            className="group relative inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-6 py-3 text-sm font-medium text-amber-100 backdrop-blur-md transition-all hover:border-amber-400/60 hover:bg-amber-400/20"
          >
            Le dossier complet : astrologie médicale
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/blog/qu-est-ce-qu-un-theme-astral"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Comprendre le thème astral
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="mt-12 grid gap-3 text-left sm:grid-cols-2 lg:grid-cols-3">
          <Link href="/astrologie-medicale" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Dossier</span>
            <span className="mt-1 block font-medium text-white/90">Astrologie médicale</span>
            <span className="mt-1 block text-xs text-white/60">Humeurs, tempéraments, homme zodiacal</span>
          </Link>
          <Link href="/planetes/lune" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Planète</span>
            <span className="mt-1 block font-medium text-white/90">La Lune</span>
            <span className="mt-1 block text-xs text-white/60">L&apos;astre du timing et du flegme</span>
          </Link>
          <Link href="/planetes/saturne" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Planète</span>
            <span className="mt-1 block font-medium text-white/90">Saturne</span>
            <span className="mt-1 block text-xs text-white/60">Le froid, le sec, la mélancolie</span>
          </Link>
          <Link href="/blog/saturnien" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Article</span>
            <span className="mt-1 block font-medium text-white/90">Le type saturnien</span>
            <span className="mt-1 block text-xs text-white/60">Tempérament mélancolique</span>
          </Link>
          <Link href="/blog/lunarien" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Article</span>
            <span className="mt-1 block font-medium text-white/90">Le type lunarien</span>
            <span className="mt-1 block text-xs text-white/60">Tempérament flegmatique</span>
          </Link>
          <Link href="/#zodiaque" className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.06]">
            <span className="block text-xs uppercase tracking-wide text-white/50">Référence</span>
            <span className="mt-1 block font-medium text-white/90">Les 12 signes</span>
            <span className="mt-1 block text-xs text-white/60">Du Bélier (tête) aux Poissons (pieds)</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}
