import type { ReactNode } from "react";
import Link from "next/link";
import { Pill, TagPillsInline, getGlowFromTags } from "./ui";
import { AUTHOR_PERSON, PUBLISHER_ORG } from "@/lib/seo";

const SITE_URL = "https://www.astro-cours.com";
const ARTICLE_URL = `${SITE_URL}/blog/conjonction-melange-des-forces`;
const COVER_URL = `${SITE_URL}/images/blog/conjonction.webp`;

export const meta = {
  slug: "conjonction-melange-des-forces",
  title:
    "La conjonction en astrologie : sens & effets",
  description:
    "Qu'est-ce qu'une conjonction en astrologie ? Orbes, lecture en thème natal ou transit, exemples et méthode pour bien interpréter cet aspect majeur.",
  date: "2026-01-01",
  tags: ["aspects", "bases", "débutant", "thème natal", "transits"],
  readingLevel: "débutant" as const,
  cover: "/images/blog/conjonction.webp",
};

function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm text-text/65">
      <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
      {children}
    </span>
  );
}

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
      {children}
    </h2>
  );
}

function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-lg md:text-xl font-semibold tracking-tight leading-tight">
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
  const box =
    tone === "warn"
      ? "border-yellow-500/30 bg-yellow-500/10"
      : tone === "ok"
      ? "border-emerald-500/30 bg-emerald-500/10"
      : "border-white/10 bg-white/5";

  const emoji = tone === "warn" ? "⚠️" : tone === "ok" ? "✅" : "📌";

  return (
    <div className={`rounded-2xl border p-4 ${box}`}>
      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-text/90">
        <span>{emoji}</span>
        <span>{title}</span>
      </div>
      <div className="text-text/85 leading-relaxed space-y-2">{children}</div>
    </div>
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
    <section className="rounded-2xl border border-white/10 bg-black/20 p-6 shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div>
          <H3>{title}</H3>
          {subtitle ? <p className="mt-1 text-sm text-text/60">{subtitle}</p> : null}
        </div>
      </div>
      <div className="mt-4 space-y-3 text-text/85 leading-relaxed">{children}</div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-xs text-text/60">{label}</p>
      <p className="mt-1 font-semibold text-text/90">{value}</p>
    </div>
  );
}

function Divider() {
  return <hr className="border-white/10" />;
}

function TwoCols({
  left,
  right,
}: {
  left: ReactNode;
  right: ReactNode;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-6">{left}</div>
      <div className="space-y-6">{right}</div>
    </div>
  );
}

function Row({
  a,
  b,
  c,
}: {
  a: string;
  b: string;
  c: string;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 border-b border-white/10 last:border-b-0">
      <div className="p-4 font-semibold text-text/90">{a}</div>
      <div className="p-4 text-text/85">{b}</div>
      <div className="p-4 text-text/85">{c}</div>
    </div>
  );
}

export default function Post() {
  const glow = getGlowFromTags(meta.tags);

  const graphJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: meta.title,
        description: meta.description,
        image: [COVER_URL],
        datePublished: meta.date,
        dateModified: meta.date,
        inLanguage: "fr-FR",
        mainEntityOfPage: ARTICLE_URL,
        articleSection: "Astrologie",
        keywords: meta.tags.join(", "),
        educationalLevel: meta.readingLevel,
        author: AUTHOR_PERSON,
        publisher: PUBLISHER_ORG,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: meta.title, item: ARTICLE_URL },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "La conjonction est-elle un bon ou un mauvais aspect ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ni l'un ni l'autre — la conjonction est neutre par nature. Elle fusionne et amplifie. Le résultat dépend entièrement des planètes impliquées, du signe et de la maison.",
            },
          },
          {
            "@type": "Question",
            name: "Quelle différence entre conjonction et parallèle de déclinaison ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "La conjonction se mesure en longitude (position sur le zodiaque). Le parallèle concerne la déclinaison (nord/sud de l'écliptique). Les deux fusionnent, mais la conjonction est beaucoup plus utilisée en pratique.",
            },
          },
          {
            "@type": "Question",
            name: "Comment savoir si j'ai une conjonction dans mon thème natal ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Monte ton thème astral (gratuit sur beaucoup de sites) et cherche deux symboles de planètes très proches l'un de l'autre — ou un tableau d'aspects qui indique un écart de 0 à 6°.",
            },
          },
          {
            "@type": "Question",
            name: "La conjonction fonctionne-t-elle en synastrie ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Oui, et elle est même centrale en synastrie. Quand ta Vénus est en conjonction avec le Mars de l'autre, l'attraction est immédiate. Mais fusion ne signifie pas compatibilité durable — les autres aspects comptent aussi.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphJsonLd) }}
      />

      <div className="space-y-10">
      {/* HERO */}
      <header className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-7 shadow-soft">
        {/* glows */}
        <div aria-hidden="true" className={`pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl ${glow}`} />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

        {/* overlays */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-transparent" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        <div className="relative">
          <Kicker>Aspect majeur • Thème natal & transits • Guide pas-à-pas</Kicker>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            Une <strong>conjonction en astrologie</strong>, c'est deux planètes
            qui occupent le même degré du zodiaque dans ton{" "}
            <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline decoration-white/30 hover:decoration-white/60 transition">
              thème astral
            </Link>{" "}
            — leurs énergies fusionnent en une seule dynamique, impossible à
            séparer. Tu l'as peut-être repérée dans ta carte du ciel sans savoir
            si c'était un talent ou un nœud à travailler. Le vrai défi : mal
            lue, cette fusion semble "bonne" ou "mauvaise" alors qu'elle est
            neutre — tout dépend du contexte. Ce guide te donne la définition
            exacte, les{" "}
            orbes, une méthode de lecture pas-à-pas (natal <em>et</em>{" "}
            <Link href="/transits" className="underline decoration-white/30 hover:decoration-white/60 transition">
              transits
            </Link>), des exemples concrets et les pièges à éviter.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <Pill tone="violet">Mot-clé : Fusion</Pill>
            <Pill tone="orange">Risque : Confusion</Pill>
            <Pill tone="emerald">Levier : Intégration</Pill>
            <Pill tone="sky">Niveau : {meta.readingLevel}</Pill>
          </div>

          <div className="mt-3">
            <TagPillsInline tags={meta.tags} />
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <Stat label="Orbe repère" value="0–6° (≤3° = très fort)" />
            <Stat label="Question clé" value="Qui mène ? Qui colore ?" />
            <Stat label="À retenir" value="Planète + signe + maison + aspects" />
          </div>
        </div>
      </header>

      {/* 1) Définition */}
      <section className="space-y-4">
        <H2>1) C'est quoi une conjonction en astrologie ?</H2>

        <div className="rounded-2xl border border-white/10 bg-black/20 p-6 leading-relaxed text-text/85">
          <p>
            Une <strong>conjonction astrologique</strong> se produit lorsque
            deux planètes occupent la même zone du zodiaque — concrètement,
            elles sont séparées par quelques degrés à peine. Résultat : leurs
            énergies se <strong>mélangent</strong> et l'une ne s'exprime
            presque jamais sans l'autre. C'est l'un des{" "}
            <Link href="/aspects" className="underline decoration-white/30 hover:decoration-white/60 transition">
              aspects astrologiques
            </Link>{" "}
            les plus importants à comprendre quand on débute.
          </p>
          <p className="mt-3">
            Attention : ce n'est pas automatiquement "positif" ou "négatif".
            La conjonction <strong>intensifie et concentre</strong>. Selon les
            planètes impliquées, elle peut être un talent naturel, un moteur de vie…
            ou un nœud à travailler. Tout dépend du contexte — le{" "}
            <Link href="/blog/comprendre-signe-astrologique-ascendant-12-exemples" className="underline decoration-white/30 hover:decoration-white/60 transition">
              signe
            </Link>, la{" "}
            <Link href="/maisons/maison-1" className="underline decoration-white/30 hover:decoration-white/60 transition">
              maison astrologique
            </Link>{" "}
            et les autres aspects reçus.
          </p>
        </div>

        <Callout tone="note" title="Image mentale">
          <p>
            Imagine deux encres versées dans le même verre : tu obtiens une
            couleur unique, impossible à séparer. Le résultat est stable, riche,
            mais parfois difficile à démêler — et c'est justement pour ça qu'il
            faut apprendre à le lire.
          </p>
        </Callout>
      </section>

      {/* 2) Orbes */}
      <section className="space-y-4">
        <H2>2) Orbe de la conjonction : quand est-ce que ça "compte" vraiment ?</H2>

        <p className="text-text/80 leading-relaxed">
          L'orbe, c'est l'écart en degrés entre les deux planètes. Plus l'orbe
          est serré, plus la conjonction est puissante. Mais au-delà de combien
          de degrés peut-on encore parler de conjonction ? Voici un repère
          simple — et fiable — que tu peux appliquer à chaque fois.
        </p>

        <TwoCols
          left={
            <Card
              title="Règle simple (débutant)"
              subtitle="Un repère stable pour lire sans te perdre."
            >
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>≤ 3°</strong> : conjonction très forte — souvent
                  évidente dans le comportement et les événements.
                </li>
                <li>
                  <strong>3–6°</strong> : forte à moyenne, dépend du signe et
                  de la maison.
                </li>
                <li>
                  <strong>6–8°</strong> : possible mais diffuse (prudence !).
                </li>
              </ul>

              <Callout tone="ok" title="Repère pro (simple)">
                <p>
                  Plus l'orbe est serré, plus tu peux "construire" dessus. Si
                  l'orbe est large, exige davantage de preuves :{" "}
                  maison angulaire{" "}
                  (I, IV, VII, X), répétitions thématiques, aspects soutenants.
                </p>
              </Callout>
            </Card>
          }
          right={
            <>
              <Callout tone="warn" title="Erreur classique">
                <p>
                  Voir une conjonction et conclure trop vite. Une conjonction
                  sans maison forte et sans répétition peut être tout à fait
                  secondaire. C'est un piège fréquent quand on{" "}
                  <Link href="/blog/pourquoi-votre-horoscope-ne-vous-ressemble-pas" className="underline decoration-white/30 hover:decoration-white/60 transition">
                    débute la lecture d'un thème
                  </Link>.
                </p>
              </Callout>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm text-text/60">Astuce</p>
                <p className="mt-2 text-text/85 leading-relaxed">
                  Quand tu hésites, pose-toi cette question :{" "}
                  <strong>"Dans quel domaine de vie ça se voit ?"</strong> —
                  c'est la maison astrologique qui te répond. Si aucun domaine clair n'émerge, cette
                  conjonction n'est probablement pas centrale.
                </p>
              </div>
            </>
          }
        />
      </section>

      <Divider />

      {/* 3) Méthode natal */}
      <section className="space-y-4">
        <H2>3) Comment interpréter une conjonction dans un thème natal</H2>

        <p className="text-text/80 leading-relaxed">
          Voici une méthode en 6 étapes que tu peux appliquer à <em>toutes</em>{" "}
          les conjonctions de ton thème astral. Elle fonctionne que tu sois débutant ou plus avancé — la
          profondeur viendra avec la pratique.
        </p>

        <Card title="Méthode reproductible" subtitle="La même grille pour chaque conjonction.">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              Identifie les <strong>2 planètes</strong> en jeu — chacune
              représente une fonction psychologique.
            </li>
            <li>
              Détermine <strong>qui mène</strong> : en général la plus lente
              (ou celle qui est{" "}
              <Link href="/maitrises" className="underline decoration-white/30 hover:decoration-white/60 transition">
                maîtresse du signe
              </Link>).
            </li>
            <li>
              Lis le <strong>signe</strong> : c'est le "style" commun de la
              fusion — pense{" "}
              <Link href="/blog/qualites-defauts-12-signes-zodiaque" className="underline decoration-white/30 hover:decoration-white/60 transition">
                qualités et défauts du signe
              </Link>.
            </li>
            <li>
              Lis la <strong>maison</strong> : c'est le domaine de vie où tout
              ça se manifeste concrètement (finances, relations, carrière…).
            </li>
            <li>
              Check les <strong>autres aspects</strong>{" "}
              reçus : ils stabilisent, tendent ou nuancent la conjonction.
            </li>
            <li>
              Reformule en une phrase :{" "}
              <strong>"Quand A s'active, B s'active automatiquement."</strong>
            </li>
          </ol>

          <Callout tone="note" title="Phrase type (ultra utile)">
            <p>
              "La planète <strong>lente</strong> donne la direction, la planète{" "}
              <strong>rapide</strong> donne la manière. Le tout s'exprime en{" "}
              <strong>[maison]</strong>."
            </p>
          </Callout>
        </Card>
      </section>

      {/* 4) Nuances */}
      <section className="space-y-4">
        <H2>4) Conjonction et type de planètes : ce qui change tout</H2>

        <p className="text-text/80 leading-relaxed">
          Toutes les conjonctions ne se vivent pas de la même façon. La clé,
          c'est de savoir quel <em>type</em> de planètes est impliqué. Voici
          les trois grandes familles — et pourquoi ça change radicalement
          l'interprétation.
        </p>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card title="Planètes personnelles" subtitle="Subjectif, psychologique, quotidien.">
            <p>
              Soleil, Lune, Mercure,{" "}
              <Link href="/planetes/venus" className="underline decoration-white/30 hover:decoration-white/60 transition">Vénus</Link>,{" "}
              <Link href="/planetes/mars" className="underline decoration-white/30 hover:decoration-white/60 transition">Mars</Link>{" "}
              : la conjonction parle d'identité, d'émotions, de désir, de
              relations et de pensée. On la ressent au quotidien.
            </p>
            <p className="text-sm text-text/70">
              Exemple : Lune–Mars = l'émotion déclenche l'action
              immédiatement.
            </p>
          </Card>

          <Card title="Jupiter & Saturne" subtitle="Social : cadre & expansion.">
            <p>
              Jupiter amplifie et donne confiance. Saturne structure et
              responsabilise. En conjonction avec une planète personnelle, ça donne
              un "thème de vie" très marqué.
            </p>
            <p className="text-sm text-text/70">
              Exemple : Mercure–Saturne = pensée rigoureuse, parfois
              auto-censure. Idéal pour l'{" "}
              <Link href="/blog/orientation-professionnelle-theme-astral" className="underline decoration-white/30 hover:decoration-white/60 transition">
                orientation professionnelle
              </Link>.
            </p>
          </Card>

          <Card title="Uranus / Neptune / Pluton" subtitle="Transpersonnelles : lentes et profondes.">
            <p>
              Uranus, Neptune, Pluton : elles colorent intensément une
              planète personnelle — réorientation, idéalisation, transformation.
              Vécu par phases, souvent lié à des transits majeurs.
            </p>
            <p className="text-sm text-text/70">
              Exemple : Vénus–Neptune = idéal romantique, inspiration mais
              risque de projection ({" "}
              <Link href="/blog/venus-en-signes-style-amoureux" className="underline decoration-white/30 hover:decoration-white/60 transition">
                voir Vénus en signes
              </Link>).
            </p>
          </Card>
        </div>
      </section>

      {/* 5) Exemples */}
      <section className="space-y-4">
        <H2>5) Exemples concrets de conjonctions (avec interprétation)</H2>

        <p className="text-text/80 leading-relaxed">
          La théorie c'est bien, mais rien ne vaut des exemples réels. Voici
          trois conjonctions très courantes et comment les lire — tu les
          retrouveras probablement dans ton thème ou celui de tes proches.
        </p>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card title="Conjonction Lune–Mars" subtitle="Réaction + action collées">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Atout</strong> : courage, franchise, instinct.</li>
              <li><strong>Risque</strong> : impulsivité, irritabilité.</li>
              <li><strong>À observer</strong> : rythme émotionnel, gestion de
                l'énergie et impact des cycles lunaires.
              </li>
            </ul>
            <p className="text-sm text-text/70 mt-2">
              Lis aussi :{" "}
              <Link href="/blog/mars-en-signes-desir-libido-action" className="underline decoration-white/30 hover:decoration-white/60 transition">
                Mars en signes
              </Link>{" "}
              pour affiner selon le signe occupé.
            </p>
          </Card>

          <Card title="Conjonction Mercure–Saturne" subtitle="Pensée structurée">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Atout</strong> : rigueur, précision, apprentissage solide.</li>
              <li><strong>Risque</strong> : rigidité, pessimisme, auto-censure.</li>
              <li><strong>Levier</strong> : routines, cadre, écriture, méthode.</li>
            </ul>
            <p className="text-sm text-text/70 mt-2">
              Profils associés :{" "}
              Mercurien & Saturnien.
            </p>
          </Card>

          <Card title="Conjonction Vénus–Neptune" subtitle="Idéalisation / inspiration">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Atout</strong> : empathie, sens artistique, romantisme profond.</li>
              <li><strong>Risque</strong> : projection, flou, tendance au "sauvetage".</li>
              <li><strong>Levier</strong> : clarifier ses valeurs et poser des limites.</li>
            </ul>
            <p className="text-sm text-text/70 mt-2">
              Pour aller plus loin :{" "}
              <Link href="/synastrie" className="underline decoration-white/30 hover:decoration-white/60 transition">
                synastrie
              </Link>{" "}
              et compatibilité amoureuse.
            </p>
          </Card>
        </div>

        <Callout tone="ok" title="L'astuce qui fait gagner du temps">
          <p>
            Pour chaque conjonction, identifie trois choses : l'<strong>enjeu</strong>{" "}
            (mot-clé), le <strong>risque</strong> et le <strong>levier</strong>.
            C'est une lecture "fonctionnelle" ultra-efficace — et c'est
            exactement ce que font les astrologues professionnels quand ils
            enchaînent les consultations.
          </p>
        </Callout>
      </section>

      {/* 6) Tableau */}
      <section className="space-y-4">
        <H2>6) Tableau des conjonctions les plus fréquentes</H2>

        <p className="text-text/80 leading-relaxed">
          Ce tableau te donne un point de départ rapide pour les conjonctions
          que l'on retrouve le plus souvent en thème natal. Garde-le sous la
          main — c'est un mémo que tu consulteras régulièrement.
        </p>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-white/10">
            <div className="p-4 text-sm text-text/60">Conjonction</div>
            <div className="p-4 text-sm text-text/60">Atout</div>
            <div className="p-4 text-sm text-text/60">Risque</div>
          </div>

          <Row a="Soleil–Mercure" b="Clarté mentale, expression fluide" c="Mental trop dominant" />
          <Row a="Soleil–Vénus" b="Charme naturel, valeurs assumées" c="Besoin d'approbation" />
          <Row a="Mars–Jupiter" b="Élan, audace, confiance en soi" c="Excès, surestime de soi" />
          <Row a="Lune–Saturne" b="Maturité émotionnelle (avec travail)" c="Retenue, dureté envers soi" />
          <Row a="Mercure–Neptune" b="Imagination, intuition fine" c="Flou, distractions" />
          <Row a="Vénus–Pluton" b="Intensité, profondeur, magnétisme" c="Contrôle, jalousie" />
        </div>

        <Callout tone="note" title="Important">
          <p>
            Ce tableau te donne une direction, pas un verdict. La lecture
            professionnelle y ajoute toujours le signe, l'ascendant, la maison
            et les autres aspects. C'est la combinaison de tout ça qui fait
            la précision.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* 7) Transits */}
      <section className="space-y-4">
        <H2>7) Conjonction en transit : quand ça s'active dans le temps</H2>

        <p className="text-text/80 leading-relaxed">
          Dans le thème natal, la conjonction est "fixe". Mais dans le ciel
          actuel, les planètes bougent — et quand une planète en transit vient
          se poser sur l'une de tes planètes natales, c'est comme un projecteur
          qui s'allume sur un sujet précis de ta vie.
        </p>

        <TwoCols
          left={
            <Card title="Effet d'une conjonction en transit" subtitle="Un projecteur : impossible à ignorer.">
              <ul className="list-disc pl-5 space-y-2">
                <li>met un sujet au premier plan de ta vie</li>
                <li>déclenche une décision ou une prise de conscience</li>
                <li>augmente l'intensité — construit ou révèle un déséquilibre</li>
              </ul>

              <Callout tone="note" title="Bon réflexe">
                <p>
                  Pense "période" plutôt que "événement". Un transit décrit
                  un processus — parfois étalé sur des mois pour les planètes
                  lentes. Voir aussi la{" "}
                  <Link href="/revolution-solaire" className="underline decoration-white/30 hover:decoration-white/60 transition">
                    révolution solaire
                  </Link>{" "}
                  pour l'analyse annuelle.
                </p>
              </Callout>
            </Card>
          }
          right={
            <Card title="Check-list rapide (transits)" subtitle="5 questions qui suffisent souvent.">
              <ol className="list-decimal pl-5 space-y-2">
                <li>Quelle planète transite ? (lente = effet structurant, rapide = déclencheur)</li>
                <li>Quelle planète natale est touchée ?</li>
                <li>Dans quelle maison ça se passe ?</li>
                <li>Quels aspects soutiennent ou compliquent ?</li>
                <li>Quel thème revient dans ta vie depuis 2–3 semaines ?</li>
              </ol>
            </Card>
          }
        />

        <Callout tone="warn" title="Erreur fréquente">
          <p>
            Chercher "la date exacte" de l'effet. Les transits importants
            ont souvent <strong>plusieurs passages</strong>{" "}
            (approche, exact, séparation) et un effet progressif. Les planètes{" "}
            <Link href="/retrogrades" className="underline decoration-white/30 hover:decoration-white/60 transition">
              rétrogrades
            </Link>{" "}
            amplifient encore ce phénomène.
          </p>
        </Callout>
      </section>

      {/* 8) Résumé */}
      <section className="space-y-4">
        <H2>8) Ce qu'il faut retenir sur la conjonction</H2>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="p-5 border-b md:border-b-0 md:border-r border-white/10">
              <p className="text-sm text-text/60">Essence</p>
              <p className="mt-2 font-semibold text-text/90">Fusion</p>
              <p className="mt-2 text-text/80">
                Deux fonctions agissent ensemble, parfois indissociables. C'est
                l'aspect le plus "brut" en astrologie.
              </p>
            </div>

            <div className="p-5 border-b md:border-b-0 md:border-r border-white/10">
              <p className="text-sm text-text/60">Risque</p>
              <p className="mt-2 font-semibold text-text/90">Saturation</p>
              <p className="mt-2 text-text/80">
                Excès, confusion, intensité trop concentrée au même endroit.
                Quand ça déborde, ça peut ressembler à de l'obsession.
              </p>
            </div>

            <div className="p-5">
              <p className="text-sm text-text/60">Levier</p>
              <p className="mt-2 font-semibold text-text/90">Intégration</p>
              <p className="mt-2 text-text/80">
                Clarifier "qui mène", poser un cadre et apprendre à canaliser.
                La conscience fait toute la différence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9) FAQ SEO */}
      <section className="space-y-4">
        <H2>9) Questions fréquentes sur la conjonction</H2>

        <Card title="La conjonction est-elle un bon ou un mauvais aspect ?" subtitle="La question que tout le monde se pose.">
          <p>
            Ni l'un ni l'autre — la conjonction est <strong>neutre par
            nature</strong>. Elle fusionne et amplifie. Le résultat dépend
            entièrement des planètes impliquées, du signe et de la maison.
            Par exemple, une conjonction Vénus–Jupiter est souvent très
            agréable, tandis qu'une conjonction Mars–Pluton demande un vrai
            travail d'intégration.
          </p>
        </Card>

        <Card title="Quelle différence entre conjonction et parallèle de déclinaison ?" subtitle="Pour les curieux.">
          <p>
            La conjonction se mesure en <strong>longitude</strong> (position
            sur le zodiaque). Le parallèle concerne la{" "}
            <strong>déclinaison</strong>{" "}
            (nord/sud de l'écliptique). Les deux fusionnent, mais la
            conjonction est beaucoup plus utilisée en pratique. Pour
            approfondir, consulte le{" "}
            <Link href="/dictionnaire-astrologique" className="underline decoration-white/30 hover:decoration-white/60 transition">
              dictionnaire astrologique
            </Link>.
          </p>
        </Card>

        <Card title="Comment savoir si j'ai une conjonction dans mon thème natal ?" subtitle="Le plus simple.">
          <p>
            Monte ton thème astral (gratuit sur beaucoup de sites) et
            cherche deux symboles de planètes très proches l'un de l'autre —
            ou un tableau d'aspects qui indique un écart de 0 à 6°. Si tu
            débutes, commence par comprendre ton signe solaire et ton
            ascendant.
          </p>
        </Card>

        <Card title="La conjonction fonctionne-t-elle en synastrie ?" subtitle="Entre deux thèmes.">
          <p>
            Oui, et elle est même centrale en synastrie (comparaison de
            thèmes). Quand ta Vénus est en conjonction avec le Mars de l'autre,
            l'attraction est immédiate. Mais attention : fusion ne signifie pas
            compatibilité durable — les autres aspects comptent aussi.
          </p>
        </Card>
      </section>

      {/* CTA fin */}
      <section className="rounded-2xl border border-white/10 bg-black/20 p-6">
        <p className="text-sm text-text/60">Envie de continuer ?</p>
        <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
          <p className="text-text/85">
            Prochaine étape logique : découvrir les autres aspects astrologiques
            (carré, trigone, opposition…) pour compléter ta boîte à outils.
          </p>
          <Link
            href="/blog"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-text/90 hover:bg-white/10 transition"
          >
            Tous les articles
          </Link>
        </div>
      </section>
    </div>
    </>
  );
}
