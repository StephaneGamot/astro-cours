import type { ReactNode } from "react";
import Link from "next/link";
import { Pill, TagPillsInline, getGlowFromTags } from "./ui";
import { AUTHOR_PERSON, PUBLISHER_ORG, SITE_URL } from "@/lib/seo";

export const meta = {
  slug: "longevite-vie-astrologie",
  // ⚠ Title court : 43 chars + " — Astro Cours" (14) = 57 chars total
  //   Avant : 81 chars → SERP tronqué + signalé "Title too long" par Ahrefs.
  title: "Longévité en astrologie : Hyleg & Alcocoden",
  // ⚠ Meta description : 152 chars (max recommandé : 155).
  //   Avant : 165 chars → tronquée par Google en SERP.
  description:
    "Évaluer la longévité en astrologie traditionnelle : Hyleg, Alcocoden, luminaires, maisons I et VIII. Méthode et indicateurs concrets à croiser.",
  date: "2026-05-27",
  tags: [
    "longévité",
    "vitalité",
    "Hyleg",
    "Alcocoden",
    "maison I",
    "maison VIII",
    "luminaires",
    "Saturne",
    "thème astral",
    "interprétation",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/longevite-vie-astrologie.webp",
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
    <h3 className="font-serif text-2xl font-medium text-white/90">{children}</h3>
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

export default function LongeviteVieAstrologiePost() {
  const glow = getGlowFromTags(meta.tags);
  const ARTICLE_URL = `${SITE_URL}/blog/${meta.slug}`;
  const COVER_URL = `${SITE_URL}${meta.cover}`;

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
              name: meta.title,
              description: meta.description,
              image: {
                "@type": "ImageObject",
                url: COVER_URL,
                width: 1024,
                height: 439,
                caption: meta.title,
              },
              datePublished: meta.date,
              dateModified: meta.date,
              author: AUTHOR_PERSON,
              publisher: PUBLISHER_ORG,
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": ARTICLE_URL,
              },
              url: ARTICLE_URL,
              inLanguage: "fr-FR",
              isAccessibleForFree: true,
              keywords: meta.tags.join(", "),
              articleSection: "Astrologie",
              wordCount: 1500,
              about: [
                { "@type": "Thing", name: "Longévité" },
                { "@type": "Thing", name: "Astrologie traditionnelle" },
                { "@type": "Thing", name: "Hyleg" },
                { "@type": "Thing", name: "Alcocoden" },
              ],
              audience: {
                "@type": "Audience",
                audienceType: "Lecteurs intéressés par l'astrologie",
              },
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
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Comment l'astrologie évalue-t-elle la longévité de vie ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "L'astrologie traditionnelle évalue la longévité à partir du Hyleg (le donneur de vie), de l'Alcocoden (le donneur d'années), de l'état des luminaires (Soleil et Lune), de la maison I (vitalité) et de la maison VIII (épreuves, fins de cycle).",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quels sont les principaux indicateurs astrologiques de vitalité ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Les principaux indicateurs sont la force du Soleil, l'état de la Lune, la qualité de l'Ascendant et de son maître, les planètes occupant la maison I, ainsi que les aspects reçus par les luminaires (favorables ou contrariés).",
                  },
                },
                {
                  "@type": "Question",
                  name: "Peut-on prédire l'âge exact de la mort avec l'astrologie ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Non. Même les astrologues traditionnels considèrent qu'on ne peut estimer qu'une probabilité de durée de vie, jamais une date précise. La longévité résulte aussi du mode de vie, de la médecine et de la génétique.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Le Soleil suffit-il à juger la vitalité dans un thème ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Non. Le Soleil est central, mais il doit être croisé avec la Lune, l'Ascendant, la maison I et la qualité de Saturne pour obtenir une image complète de la vitalité.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quel rôle joue Saturne dans la longévité ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Saturne est la planète de la durée, de la structure osseuse et de la résistance dans le temps. Une Saturne forte et bien aspectée signale souvent une bonne capacité d'endurance et une longévité structurelle.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      {/* HERO SECTION BLOG */}
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
          <Kicker>Longévité • Vitalité • Hyleg • Luminaires</Kicker>

          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            {/* ⚠ h1 → h2 (Ahrefs flag "Multiple H1") :
                ArticleLayout rend déjà meta.title comme h1 unique en haut
                de page. On garde un h2 sémantique pour la hiérarchie SEO. */}
            <h2 className="font-serif text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl md:max-w-3xl">
              Comment l&apos;astrologie observe la longévité : les indicateurs essentiels
            </h2>

            <div className="flex flex-wrap gap-3 text-sm text-white/70">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                Lecture intermédiaire
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                Méthode traditionnelle
              </span>
            </div>
          </div>

          <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            La question de la <strong className="font-medium text-amber-200">longévité de vie</strong> est l&apos;une
            des plus anciennes et des plus délicates de l&apos;astrologie. Elle ne se lit
            jamais sur un seul indice : elle s&apos;observe à travers un faisceau
            d&apos;<strong className="font-medium text-white">indicateurs croisés</strong> — le{" "}
            <strong className="font-medium text-white">Hyleg</strong> (le donneur de vie), l&apos;
            <strong className="font-medium text-white">Alcocoden</strong> (le donneur d&apos;années), l&apos;état des{" "}
            <strong className="font-medium text-white">luminaires</strong>, la qualité de la{" "}
            <strong className="font-medium text-white">maison I</strong>, et la nature des{" "}
            <strong className="font-medium text-white">aspects</strong> reçus. Ce guide vous montre
            comment lire ces signes avec rigueur, sans tomber dans la prédiction
            mécanique.
          </p>

          <div className="mt-8 pt-6 border-t border-white/5">
            <TagPillsInline tags={meta.tags} />
          </div>
        </div>
      </header>

      {/* STATS RAPIDES */}
      <section className="grid gap-4 sm:grid-cols-3" aria-label="Points clés de l'article">
        <Stat label="Donneur de vie" value="Le Hyleg" />
        <Stat label="Donneur d’années" value="L’Alcocoden" />
        <Stat label="Maison clé" value="Maison I & VIII" />
      </section>

      {/* CALLOUT D'INTRODUCTION */}
      <Callout tone="warn" title="Avertissement éthique préalable">
        <p>
          L&apos;astrologie traditionnelle évoque la longévité comme une{" "}
          <strong className="text-white">tendance probable</strong>, jamais comme une
          certitude. Aucun thème ne fixe une date de mort. Ce qui s&apos;observe, c&apos;est
          un <strong className="text-white">terrain de vitalité</strong>, des forces
          et des fragilités, qui doivent toujours être croisées avec le mode de vie,
          la médecine et la génétique.
        </p>
      </Callout>

      <Divider />

      {/* DEFINITION BOX */}
      <aside className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-6 leading-relaxed text-white/85">
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-amber-400">Définition</p>
        <p>
          La <strong>longévité en astrologie</strong> s&apos;analyse à partir d&apos;un
          ensemble cohérent : le <strong>Hyleg</strong> (point vital, généralement le
          Soleil de jour, la Lune de nuit, ou l&apos;Ascendant), l&apos;
          <strong>Alcocoden</strong> (maître du signe du Hyleg, qui distribue les
          années), l&apos;état général de la <Link href="/maisons/maison-1">maison I</Link>{" "}
          et les <Link href="/blog/conjonction-melange-des-forces">aspects</Link>{" "}
          reçus par les luminaires.
        </p>
      </aside>

      {/* INTRO */}
      <p className="text-base leading-relaxed text-white/80 md:text-lg">
        Avant d&apos;entrer dans la technique, il faut comprendre une chose : la
        longévité ne dépend pas d&apos;une planète unique. Elle repose sur la{" "}
        <strong>solidité globale du thème</strong>. Un Hyleg bien placé mais
        contrarié par les maléfiques peut indiquer une vitalité forte mais
        éprouvée. Un Hyleg faible mais soutenu peut donner une santé fragile mais
        une durée correcte. Tout est question d&apos;équilibre.
      </p>

      {/* 1. LE HYLEG */}
      <section className="space-y-6">
        <H2>1) Le Hyleg : le point vital du thème</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Le <strong className="font-medium text-amber-200">Hyleg</strong> (aussi
          appelé <em>aphète</em> ou <em>donneur de vie</em>) est le point du thème
          qui porte la force vitale. C&apos;est lui qu&apos;on observe en priorité
          pour juger la vitalité, la résistance et la durée potentielle de vie.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Comment le déterminer ?" subtitle="Ordre traditionnel de sélection.">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-amber-400">✦</span>
                <span><strong className="text-white">De jour</strong> : on regarde d&apos;abord le Soleil s&apos;il est bien placé (maisons I, VII, X, XI, IX).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-amber-400">✦</span>
                <span><strong className="text-white">De nuit</strong> : on regarde d&apos;abord la Lune dans les mêmes conditions.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-amber-400">✦</span>
                <span>Sinon, on prend l&apos;<strong className="text-white">Ascendant</strong>, puis le <strong className="text-white">Lot de Fortune</strong>.</span>
              </li>
            </ul>
          </Card>

          <Card title="Ce qu’il révèle" subtitle="La qualité du Hyleg = la qualité du terrain.">
            <p className="mb-3">
              Un Hyleg fort (en dignité, bien aspecté, dans une maison angulaire)
              indique un <strong className="text-white">capital vital généreux</strong>.
            </p>
            <p>
              Un Hyleg affligé (carré ou opposition de Mars ou Saturne, combuste,
              en chute) signale des <strong className="text-white">fragilités à surveiller</strong>,
              sans pour autant condamner la durée de vie.
            </p>
          </Card>
        </div>
      </section>

      <Divider />

      {/* 2. ALCOCODEN */}
      <section className="space-y-6">
        <H2>2) L&apos;Alcocoden : le donneur d&apos;années</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Une fois le Hyleg trouvé, on identifie son{" "}
          <strong className="font-medium text-amber-200">maître</strong> : c&apos;est
          l&apos;<strong>Alcocoden</strong>. Selon la tradition (Ptolémée, Bonatti, Lilly),
          il attribue un nombre d&apos;années en fonction de sa dignité essentielle.
        </p>

        <section aria-label="Tableau des années accordées" className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm">
          <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.05] md:grid-cols-3">
            <div className="p-5 font-serif text-lg font-medium text-white/90">Dignité de l’Alcocoden</div>
            <div className="p-5 font-serif text-lg font-medium text-white/90">Type d’années</div>
            <div className="p-5 font-serif text-lg font-medium text-white/90">Lecture</div>
          </div>

          <TableRow
            title="En domicile"
            effect="Grandes années"
            reading="Indique une longévité potentiellement importante"
          />
          <TableRow
            title="En exaltation"
            effect="Grandes années"
            reading="Force vitale soutenue, bonne résistance"
          />
          <TableRow
            title="En triplicité"
            effect="Années moyennes"
            reading="Durée correcte, vitalité équilibrée"
          />
          <TableRow
            title="En terme / face"
            effect="Petites années"
            reading="Vitalité moyenne, à soutenir par le mode de vie"
          />
          <TableRow
            title="En chute / exil"
            effect="Années diminuées"
            reading="Fragilités à compenser, prudence requise"
          />
        </section>

        <Callout tone="note" title="À garder en tête">
          <p>
            Ces nombres ne sont jamais des prédictions exactes. Ils servent à
            <strong className="text-white"> hiérarchiser</strong> les indices : un
            Alcocoden fort renforce le Hyleg, un Alcocoden faible appelle à plus
            de vigilance préventive.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* 3. LUMINAIRES */}
      <section className="space-y-6">
        <H2>3) L&apos;état des luminaires : Soleil et Lune</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          Au-delà du Hyleg, le <strong>Soleil</strong> et la <strong>Lune</strong>{" "}
          sont les deux grands indicateurs de vitalité. Le Soleil porte l&apos;énergie
          de fond, le souffle vital ; la Lune porte la régulation du corps, les
          rythmes, l&apos;immunité, les humeurs.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Soleil fort" subtitle="Signes positifs.">
            <p>
              Soleil en Lion, en Bélier (exaltation), bien aspecté par Jupiter ou
              Vénus, en maison angulaire : signale une{" "}
              <strong className="text-white">vitalité fondamentale</strong> bien
              ancrée, une bonne capacité de récupération.
            </p>
          </Card>

          <Card title="Lune forte" subtitle="Signes positifs.">
            <p>
              Lune en Cancer, en Taureau (exaltation), bien aspectée, hors combustion :
              indique une <strong className="text-white">régulation corporelle stable</strong>,
              de bonnes défenses, un sommeil et une digestion équilibrés.
            </p>
          </Card>

          <Card title="Soleil affligé" subtitle="Signes de vigilance.">
            <p>
              Soleil en Verseau (exil), Balance (chute), assiégé entre Mars et
              Saturne, carré ou opposé aux maléfiques : peut signaler une{" "}
              <strong className="text-white">énergie de fond plus basse</strong>, ou des
              tensions cardiaques à surveiller.
            </p>
          </Card>

          <Card title="Lune affligée" subtitle="Signes de vigilance.">
            <p>
              Lune en Scorpion (chute), Capricorne (exil), combuste, mal aspectée
              par Saturne ou Mars : peut indiquer des{" "}
              <strong className="text-white">fragilités immunitaires</strong>, digestives
              ou émotionnelles à accompagner.
            </p>
          </Card>
        </div>
      </section>

      <Divider />

      {/* 4. MAISON I */}
      <section className="space-y-6">
        <H2>4) La maison I : la constitution physique</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          La <Link href="/maisons/maison-1" className="text-amber-200 underline-offset-2 hover:underline">maison I</Link>{" "}
          est la maison du corps, de la constitution, du tempérament. Sa qualité
          détermine la base sur laquelle le Hyleg peut s&apos;appuyer.
        </p>

        <Card title="Ce qu’il faut observer">
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="mt-1 text-emerald-400">✔</span>
              <span><strong className="text-white">Le signe de l&apos;Ascendant</strong> : il donne la complexion (chaud/froid, sec/humide).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-emerald-400">✔</span>
              <span><strong className="text-white">Le maître de l&apos;Ascendant</strong> : sa dignité, sa maison, ses aspects.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-emerald-400">✔</span>
              <span><strong className="text-white">Les planètes en maison I</strong> : leur nature renforce ou fragilise le corps.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-red-400">✘</span>
              <span><strong className="text-white">Mars ou Saturne en I, mal disposés</strong> : tension, accidents, structure plus fragile.</span>
            </li>
          </ul>
        </Card>
      </section>

      <Divider />

      {/* 5. MAISON VIII */}
      <section className="space-y-6">
        <H2>5) La maison VIII : les épreuves et les fins de cycle</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          La <strong>maison VIII</strong> est traditionnellement la maison des
          crises, des transformations profondes et, dans la lecture classique, de
          la fin de vie. Elle ne prédit pas la mort, mais elle signale le{" "}
          <strong className="font-medium text-amber-200">type d&apos;épreuves</strong>{" "}
          que la personne pourrait traverser et la manière dont elle peut s&apos;y
          régénérer.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Maison VIII soutenue">
            <p>
              Cuspide en signe stable, maître bien placé, aspects harmoniques :
              <strong className="text-white"> capacité de régénération</strong> forte,
              traversée des crises plus fluide.
            </p>
          </Card>
          <Card title="Maison VIII affligée">
            <p>
              Maître en chute, maléfiques mal disposés en VIII : crises plus
              <strong className="text-white"> intenses ou répétées</strong>, vigilance accrue
              sur la prévention.
            </p>
          </Card>
        </div>
      </section>

      <Divider />

      {/* 6. SATURNE */}
      <section className="space-y-6">
        <H2>6) Saturne : la planète de la durée</H2>

        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          <strong>Saturne</strong> est la planète qui structure le temps, les os,
          la durée. Une <strong className="font-medium text-amber-200">Saturne forte</strong>{" "}
          (en Capricorne, Verseau, Balance) et bien aspectée signale souvent une{" "}
          <strong>capacité d&apos;endurance</strong> et une longévité structurelle.
          Une Saturne fragile (en Bélier, Cancer, Lion) ou contrariée peut indiquer
          au contraire des limites osseuses, articulaires ou de résistance.
        </p>

        <Callout tone="ok" title="Le paradoxe saturnien">
          <p>
            Les longévités exceptionnelles s&apos;accompagnent souvent d&apos;une Saturne
            <strong className="text-white"> exigeante mais structurée</strong>. La
            discipline, la sobriété et la régularité — qualités saturniennes — sont
            elles-mêmes des facteurs concrets de longévité.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* METHODE COMPLETE */}
      <section aria-labelledby="methode-titre" className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 shadow-2xl backdrop-blur-md sm:p-12">
        <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-amber-500/10 blur-[60px]" aria-hidden="true" />

        <h2 id="methode-titre" className="relative z-10 font-serif text-2xl font-medium text-white sm:text-3xl">
          La méthode complète pour évaluer la longévité dans un thème
        </h2>

        <div className="relative z-10 mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Déterminer le Hyleg selon la diurnité du thème",
            "Identifier l'Alcocoden (maître du Hyleg) et juger sa dignité",
            "Évaluer la force du Soleil (énergie de fond)",
            "Évaluer la force de la Lune (régulation corporelle)",
            "Lire la maison I : signe, maître, planètes présentes",
            "Examiner la maison VIII et son maître",
            "Mesurer la qualité de Saturne (structure et durée)",
            "Synthétiser les indices : tendance globale, pas une date",
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

      {/* SYNTHESE */}
      <section className="space-y-6">
        <H2>Synthèse : croiser les indices, ne jamais en isoler un</H2>

        <section className="rounded-[2rem] border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-transparent p-8 shadow-2xl backdrop-blur-md">
          <p className="text-lg text-white/90">
            La longévité en astrologie est une{" "}
            <strong className="text-emerald-300">lecture de terrain</strong>, pas une
            prédiction. Un Hyleg fort, un Alcocoden bien dignifié, des luminaires
            soutenus, une maison I solide et une Saturne structurée dessinent un{" "}
            <strong className="text-white">terrain de vitalité durable</strong>.
            Inversement, plusieurs indices contrariés appellent à plus de{" "}
            <strong className="text-white">prévention</strong> — hygiène de vie,
            suivi médical, gestion du stress.
          </p>
        </section>

        <Callout tone="ok" title="Conclusion responsable">
          <p>
            L&apos;astrologie de la longévité éclaire des{" "}
            <strong className="text-white">tendances</strong>, jamais des destins.
            Elle invite à connaître ses fragilités pour mieux les soutenir, et ses
            forces pour mieux les cultiver.
          </p>
        </Callout>
      </section>

      {/* FAQ */}
      <section className="mt-16 space-y-8">
        <H2>FAQ — Longévité et astrologie</H2>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Peut-on lire l’âge de la mort dans un thème ?">
            <p>
              Non. Les astrologues sérieux refusent ce type de prédiction. On lit
              une <strong className="text-white">qualité de vitalité</strong> et des
              périodes plus sensibles, jamais une date.
            </p>
          </Card>

          <Card title="Le Soleil suffit-il à juger la vitalité ?">
            <p>
              Non. Le Soleil est central, mais il faut le croiser avec la Lune,
              l&apos;Ascendant, la maison I et la qualité de Saturne pour avoir une
              image complète.
            </p>
          </Card>

          <Card title="Que faire si mon thème montre des fragilités ?">
            <p>
              Le voir comme une <strong className="text-white">information préventive</strong> :
              soigner l&apos;hygiène de vie, le sommeil, l&apos;alimentation, le suivi
              médical. L&apos;astrologie ne remplace jamais la médecine.
            </p>
          </Card>

          <Card title="Les transits jouent-ils un rôle ?">
            <p>
              Oui. Les transits majeurs de Saturne, d&apos;Uranus et de Pluton sur les
              points sensibles du thème marquent souvent des{" "}
              <strong className="text-white">périodes charnières</strong> à
              accompagner avec attention.
            </p>
          </Card>
        </div>
      </section>

      {/* POUR ALLER PLUS LOIN */}
      <footer className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md sm:p-12">
        <H3>Pour aller plus loin dans votre analyse</H3>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Pill>Hyleg</Pill>
          <Pill tone="sky">Maison I</Pill>
          <Pill tone="violet">Aspects</Pill>
          <Pill tone="emerald">Luminaires</Pill>
          <Pill tone="yellow">Saturne</Pill>
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
            Maîtriser les aspects
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}
