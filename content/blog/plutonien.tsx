import type { ReactNode } from "react";
import Link from "next/link";
import { Pill, TagPillsInline, getGlowFromTags } from "./ui";
import Image from "next/image";
import PlutonienImage from "@/public/images/blog/plutonien.webp";
import Plutonien2Image from "@/public/images/blog/plutonien2.webp";

export const meta = {
  slug: "plutonien",
  title:
    "Plutonien : le Phénix, le Maître de l'Ombre et de la Transformation",
  description:
    "Portrait astrologique du Plutonien : intensité, vérité, fusion, crise, résilience, transformation, Pluton affligé, prêtresse, sorcière et morphopsychologie plutonienne dans un thème astral.",
  date: "2026-03-29",
  tags: [
    "Pluton",
    "plutonien",
    "portrait astrologique",
    "transformation",
    "intensité",
    "thème astral",
    "psychologie astrologique",
    "amour",
    "karma",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/plutonien.webp",
};

function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-fuchsia-300">
      <span
        className="h-1.5 w-1.5 animate-pulse rounded-full bg-fuchsia-300"
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
        className="mr-4 block h-px w-8 bg-gradient-to-r from-fuchsia-500/60 to-transparent"
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
      box: "border-fuchsia-500/30 bg-fuchsia-500/10 shadow-[0_0_30px_rgba(217,70,239,0.06)]",
      icon: "text-fuchsia-300",
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
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-sm transition-all hover:border-fuchsia-300/30">
      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-300/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
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
    <div className="group grid grid-cols-1 border-b border-white/10 transition-colors hover:bg-fuchsia-300/[0.03] md:grid-cols-3">
      <div className="p-4 font-serif text-lg text-fuchsia-200/90">{title}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{effect}</div>
      <div className="p-4 text-sm leading-relaxed text-white/80">{reading}</div>
    </div>
  );
}

export default function PlutonienPost() {
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
                  name: "Qu’est-ce qu’un Plutonien en astrologie ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Le Plutonien est un type astrologique marqué par Pluton : intensité, lucidité radicale, secret, magnétisme, fusion, crise, résilience et capacité de transformation profonde.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quels métiers conviennent au Plutonien ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Le Plutonien s’épanouit souvent dans la psychanalyse, la psychiatrie, la chirurgie, la médecine légale, la gestion de crise, l’audit, l’investigation, la finance souterraine et l’ésotérisme.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quel est le risque principal d’un Pluton affligé ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Lorsque Pluton est lourdement affligé, l’intensité peut basculer vers la paranoïa, la manipulation, la vengeance, la destruction psychologique ou l’auto-sabotage.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(217,70,239,0.12)] aspect-[7/3]">
        <Image
          src={PlutonienImage}
          alt="Portrait symbolique du tempérament plutonien en astrologie"
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
          className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-fuchsia-300/5 blur-[80px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-fuchsia-300/5 via-transparent to-black/50"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <Kicker>Pluton • ombre • vérité • crise • renaissance</Kicker>

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
            S&apos;aventurer sur le territoire du Plutonien, c&apos;est accepter de quitter la surface rassurante des choses pour plonger dans les abysses. Gouverné par Pluton (Hadès dans la mythologie, le Dieu des profondeurs et de l&apos;invisible), le type Plutonien est l&apos;archétype le plus intense, le plus secret et le plus puissant du zodiaque. Là où les autres planètes construisent, communiquent ou brillent, Pluton détruit pour recréer. Découvrez le portrait psychologique, amoureux et karmique de cet alchimiste fascinant, dont l&apos;existence n&apos;obéit qu&apos;à une seule loi : mourir pour renaître.
          </p>

          <div className="mt-8 border-t border-white/5 pt-6">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-3" aria-label="Points clés du portrait plutonien">
        <Stat label="Force centrale" value="Intensité & vérité" />
        <Stat label="Terrain naturel" value="Crise & transformation" />
        <Stat label="Ombre principale" value="Vengeance & contrôle" />
      </section>

      <section className="space-y-6">
        <H2>L&apos;Intellect du Plutonien : La Vision Rayon X et la Quête de Vérité</H2>

        <Card title="L’intellect">
          <p>
            L&apos;esprit du Plutonien est un laser capable de transpercer la matière. S&apos;il n&apos;a pas la légèreté de Mercure ni l&apos;idéalisme de Neptune, il possède une faculté intellectuelle terrifiante pour le commun des mortels : une perspicacité absolue.
          </p>
          <p>
            Le Plutonien est obsédé par ce qui est caché. Les apparences, les discours policés et les politesses de façade l&apos;ennuient profondément, voire le méprisent. Son intellect fonctionne comme celui d&apos;un détective ou d&apos;un psychanalyste : il veut aller au fond des choses, déterrer les secrets, comprendre les tabous, et mettre en lumière ce que la société s&apos;efforce de cacher sous le tapis.
          </p>
          <p>
            Il possède un véritable détecteur de mensonges intégré. Essayer de mentir à un Plutonien est une insulte à son intelligence ; il capte l&apos;inconscient, les non-dits et les failles de ses interlocuteurs en une fraction de seconde. De ce fait, son esprit brille dans l&apos;investigation complexe, la recherche occulte, la criminologie, la stratégie de l&apos;ombre, et l&apos;étude des mystères de la psyché humaine.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Vie Sociale et Caractère : Le Magnétisme du &quot;Tout ou Rien&quot;</H2>

        <Card title="La vie sociale">
          <p>
            En société, le Plutonien ne passe jamais inaperçu, même s&apos;il ne dit pas un mot. Il dégage une aura de mystère, une densité et un magnétisme animal qui polarisent immédiatement son entourage. L&apos;adage est bien connu en astrologie : un Plutonien, on l&apos;adore ou on le déteste, mais il ne laisse personne indifférent.
          </p>
          <p>
            Son tempérament est régi par la loi du &quot;Tout ou Rien&quot;. Le tiède, la demi-mesure et les compromis lui sont insupportables. Dans ses relations, il est d&apos;une exigence extrême. L&apos;amitié d&apos;un Plutonien est un pacte de sang : si vous gagnez sa confiance, il ira en enfer pour vous sauver. Il fera preuve d&apos;une loyauté indestructible et d&apos;un soutien inébranlable dans les pires épreuves.
          </p>
          <p>
            Le revers de la médaille ? La trahison est impardonnable. Si vous brisez sa confiance, le Plutonien ne se contente pas de vous rayer de sa vie, il vous efface de sa réalité. Et s&apos;il se sent menacé, sa capacité de riposte (souvent psychologique) est d&apos;une précision chirurgicale et redoutable.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Amour et Sentiments : La Passion Fusionnelle et le Creuset Alchimique</H2>

        <Card title="L’amour">
          <p>
            La vie sentimentale du Plutonien est tout sauf un long fleuve tranquille. C&apos;est un volcan en éruption. Pour lui, l&apos;amour n&apos;est pas un divertissement, c&apos;est une crise transformatrice.
          </p>
          <p>
            Le Plutonien ne cherche pas un conjoint pour partager les factures et les repas du dimanche ; il cherche la fusion des âmes et des corps. Il désire posséder l&apos;autre autant qu&apos;il désire être possédé. Cette intensité engendre une vie amoureuse passionnelle, charnelle (la sexualité, domaine de Pluton et du Scorpion, est souvent centrale et libératrice pour lui), mais aussi périlleuse.
          </p>
          <p>
            Son plus grand défi est de ne pas sombrer dans l&apos;obsession, la jalousie ou le besoin de contrôle. Le Plutonien a souvent peur d&apos;être abandonné ou vulnérable, ce qui peut le pousser à &quot;tester&quot; son partenaire pour mesurer la solidité de son amour. Mais lorsqu&apos;il trouve un partenaire capable d&apos;accueillir son intensité sans prendre peur, le Plutonien offre l&apos;amour le plus profond, le plus protecteur et le plus transformateur de tout le zodiaque.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Destinée et Vocation : Le Cycle du Phénix (Mourir pour Renaître)</H2>

        <Card title="La vocation">
          <p>
            S&apos;il y a un mot qui résume la destinée d&apos;un Plutonien, c&apos;est la Résilience. La vie de ce natif est souvent jalonnée de crises majeures : deuils symboliques, ruines, effondrements psychologiques ou changements de vie radicaux.
          </p>
          <p>
            Mais là où ces épreuves détruiraient n&apos;importe quel autre signe, le Plutonien y trouve sa véritable force. C&apos;est le mythe du Phénix. Il est conçu pour survivre à l&apos;enfer. Il a besoin que tout brûle pour renaître de ses cendres, plus fort, plus pur et plus lucide qu&apos;avant.
          </p>
          <p>
            Professionnellement, le Plutonien excelle partout où il y a une crise à gérer, un secret à percer ou une transformation à opérer :
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>La psychologie des profondeurs : Psychiatre, psychanalyste, hypnothérapeute.</li>
            <li>Le tranchant et le vital : Chirurgiens, médecins légistes, urgences absolues.</li>
            <li>Le pouvoir occulte et financier : Gestion de patrimoine complexe, audits de crise, trading, investigation fiscale (Pluton régit les richesses souterraines).</li>
            <li>L&apos;ésotérisme : Astrologie karmique, occultisme, chamanisme.</li>
          </ul>
          <p>
            C&apos;est simple : quand tout va bien, le Plutonien s&apos;ennuie ou s&apos;angoisse. Quand tout s&apos;effondre et que tout le monde panique, il prend le contrôle avec un sang-froid absolu.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>La Face Sombre (Quand Pluton est affligé)</H2>

        <Callout tone="warn" title="L’ombre de Pluton">
          <p>
            Lorsque Pluton est lourdement dissonant (par de mauvais aspects avec Mars, la Lune ou le Soleil), l&apos;ombre engloutit la lumière. La soif de vérité devient une paranoïa destructrice, et le besoin de fusion devient une tyrannie psychologique.
          </p>
          <p>
            Le Plutonien affligé est machiavélique. S&apos;il n&apos;arrive pas à sublimer son énergie, il peut développer une véritable fascination pour le pouvoir pur, la manipulation, voire la destruction (de l&apos;autre ou de lui-même). C&apos;est l&apos;archétype du bourreau émotionnel ou de l&apos;auto-saboteur compulsif.
          </p>
          <p>
            Refusant de lâcher prise, il peut s&apos;enfermer dans des rancunes éternelles, cherchant la vengeance plutôt que la guérison. Le karma du Plutonien dissonant est de se rendre compte que le venin qu&apos;il destine aux autres finit toujours par l&apos;empoisonner lui-même.
          </p>
        </Callout>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>L&apos;Expression Féminine et Yin : L&apos;Archétype de la Prêtresse et de la Sorcière</H2>

        <Card title="L’expression Yin">
          <p>
            Dans un thème astral dominé par l&apos;énergie Yin (ou féminine), un beau Pluton donne naissance à l&apos;une des figures les plus puissantes de l&apos;inconscient collectif : La Femme-Médecine, la Sorcière (au sens noble) ou la Prêtresse.
          </p>
          <p>
            Elle possède une intuition viscérale et un charisme hypnotique. On vient vers elle pour être guéri de ses traumas les plus inavouables, car elle dégage une aura de compréhension absolue face à la douleur. Elle n&apos;a pas peur du &quot;sale&quot;, du complexe ou des larmes.
          </p>
          <p>
            C&apos;est souvent une femme fatale malgré elle, dont la simple présence réveille les désirs enfouis et les angoisses de son entourage. Si Pluton est maléficié, elle deviendra la manipulatrice, l&apos;experte des relations toxiques ou la figure de la &quot;veuve noire&quot;, utilisant sa clairvoyance émotionnelle pour asservir plutôt que pour libérer.
          </p>
        </Card>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>Le Portrait Physique du Plutonien (Morphopsychologie Astrologique)</H2>

        <Card title="Le portrait physique">
          <p>
            Le Plutonien ne se reconnaît pas à la forme de son nez ou à sa stature, mais à l&apos;intensité de sa présence.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Le regard : C&apos;est la signature absolue du Plutonien. Le regard est insondable, sombre (même s&apos;il a les yeux clairs), perçant et hypnotique. Lorsqu&apos;il vous fixe, vous avez l&apos;impression étrange qu&apos;il est en train de lire directement dans votre âme, ou de vous mettre à nu.</li>
            <li>L&apos;allure générale : Une aura d&apos;imperméabilité. Le Plutonien dégage une force rentrée, comme un volcan sous la glace. Ses mouvements sont souvent lents, calculés, silencieux. Il peut traverser une pièce sans faire de bruit, mais tout le monde remarquera sa présence.</li>
            <li>Le visage : Les traits sont souvent denses, marqués par une arcade sourcilière lourde (le &quot;regard ténébreux&quot;). Le visage est rarement lisse, il porte les marques d&apos;une intériorité bouillonnante.</li>
            <li>Le style : Il a une forte propension pour les couleurs sombres, le noir (couleur d&apos;absorption de la lumière et du mystère), ou le rouge sang profond. Il fuit tout ce qui est criard, superficiel ou trop à la mode.</li>
          </ul>
        </Card>
      </section>


      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#0f0f13] shadow-[0_0_50px_rgba(217,70,239,0.12)] aspect-[7/3]">
        <Image
          src={Plutonien2Image}
          alt="Portrait de Hades en astrologie"
          fill
          priority
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent" />
      </div>

      <section className="space-y-6">
        <H2>En conclusion</H2>

        <Callout tone="ok" title="Conclusion">
          <p>
            En conclusion : Avoir une forte dominante Plutonienne dans son thème astral est un chemin d&apos;exigence extrême. C&apos;est être chargé d&apos;une mission d&apos;alchimiste spirituel : transformer le plomb en or, et la douleur en puissance. Si le Plutonien accepte de traverser ses propres ténèbres sans s&apos;y complaire, il devient l&apos;être le plus lumineux du zodiaque, prouvant au monde entier qu&apos;aucune nuit n&apos;est éternelle et que l&apos;on peut se relever de tout.
          </p>
        </Callout>
      </section>

      <section
        aria-label="Synthèse du portrait plutonien"
        className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm"
      >
        <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
          <div className="p-5 font-serif text-lg font-medium text-white/90">Axe</div>
          <div className="p-5 font-serif text-lg font-medium text-white/90">Expression</div>
          <div className="p-5 text-lg font-medium text-white/90">Risque</div>
        </div>

        <TableRow
          title="Intellect"
          effect="Perspicacité, vérité cachée, vision rayon X"
          reading="Paranoïa, suspicion, obsession du non-dit"
        />
        <TableRow
          title="Vie sociale"
          effect="Magnétisme, loyauté absolue, intensité"
          reading="Effacement brutal de l’autre, vengeance, rupture totale"
        />
        <TableRow
          title="Amour"
          effect="Fusion, passion, transformation, sexualité centrale"
          reading="Jalousie, contrôle, obsession, tests destructeurs"
        />
        <TableRow
          title="Vocation"
          effect="Crise, psyché, chirurgie, finance occulte, ésotérisme"
          reading="Manipulation, auto-sabotage, fascination pour le pouvoir"
        />
      </section>

      <footer className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md sm:p-12">
        <H3>Pour aller plus loin dans les portraits planétaires</H3>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Pill>Pluton</Pill>
          <Pill tone="sky">Portrait astrologique</Pill>
          <Pill tone="violet">Transformation</Pill>
          <Pill tone="emerald">Thème astral</Pill>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/blog/neptunien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Lire le portrait du Neptunien
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/blog/solarien"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
          >
            Lire le portrait du Solarien
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}