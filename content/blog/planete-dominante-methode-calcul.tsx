import type { ReactNode } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "./ui";
import CoverImage from "@/public/images/blog/les-dominantes-planetaire.webp";
import GrilleImage from "@/public/images/blog/astrological-chart-wheel-in-pencil.webp";

/** Fiche de calcul imprimable (2 pages A4). */
const FICHE_PDF = "/fiches/fiche-calcul-planete-dominante.pdf";

export const meta = {
  slug: "planete-dominante-methode-calcul",
  seoTitle: "Planète dominante : la calculer en 7 critères — Astro Cours",
  title: "Planète dominante : la trouver avec la grille des sept poids",
  description:
    "Trouver sa planète dominante sans calculateur opaque : un barème en 7 critères, un thème réel calculé de bout en bout et la règle pour départager deux ex æquo.",
  date: "2026-09-21",
  tags: [
    "planètes",
    "méthode",
    "thème astral",
    "ascendant",
    "aspects",
    "luminaires",
    "interprétation",
    "exemples",
    "tempéraments",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/les-dominantes-planetaire.webp",
};

/* ────────────────────────────────────────────────────────────
   Composants de mise en page
   ──────────────────────────────────────────────────────────── */

function H2({ children, id }: { children: ReactNode; id: string }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="relative inline-flex h-7 w-7 shrink-0 items-center justify-center"
        >
          <span className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-200/50 via-violet-300/25 to-transparent blur-[6px]" />
          <span className="relative text-base leading-none text-amber-100/90">
            ⚖
          </span>
        </span>
        <h2
          id={id}
          className="scroll-mt-24 text-2xl md:text-3xl font-semibold tracking-tight leading-tight"
        >
          {children}
        </h2>
      </div>
      <div
        aria-hidden="true"
        className="h-px w-full bg-gradient-to-r from-violet-400/40 via-white/10 to-transparent"
      />
    </div>
  );
}

function H3({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h3
      id={id}
      className="scroll-mt-24 text-lg md:text-xl font-semibold tracking-tight leading-tight"
    >
      {children}
    </h3>
  );
}

function A({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="underline decoration-white/30 hover:decoration-white/60 transition"
    >
      {children}
    </Link>
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

  const emoji = tone === "warn" ? "⚠️" : tone === "ok" ? "✅" : "🔭";

  return (
    <div className={`rounded-2xl border p-5 ${box}`}>
      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-text/90">
        <span aria-hidden="true">{emoji}</span>
        <span>{title}</span>
      </div>
      <div className="space-y-2 leading-relaxed text-text/85">{children}</div>
    </div>
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
  return (
    <div className="flex items-center gap-4" aria-hidden="true">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-white/10" />
      <span className="text-sm tracking-[0.3em] text-amber-200/50">♃ ♄ ♇</span>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-white/15 to-white/10" />
    </div>
  );
}

function Box({
  title,
  children,
  tone = "neutral",
}: {
  title: string;
  children: ReactNode;
  tone?: "neutral" | "violet" | "emerald" | "amber";
}) {
  const box =
    tone === "violet"
      ? "border-violet-400/25 bg-violet-500/[0.07]"
      : tone === "emerald"
        ? "border-emerald-400/25 bg-emerald-500/[0.07]"
        : tone === "amber"
          ? "border-amber-400/25 bg-amber-500/[0.07]"
          : "border-white/10 bg-black/20";

  return (
    <div className={`rounded-2xl border p-5 ${box}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-text/70">
        {title}
      </p>
      <div className="mt-3 space-y-2 leading-relaxed text-text/85">
        {children}
      </div>
    </div>
  );
}

/* ── Sommaire ────────────────────────────────────────────────── */

const toc = [
  { id: "definition", label: "Ce qu’est une planète dominante" },
  { id: "pas-officiel", label: "Pourquoi aucun calcul n’est officiel" },
  { id: "grille", label: "La grille des sept poids" },
  { id: "theme", label: "Le thème de démonstration" },
  { id: "calcul", label: "Le calcul, planète par planète" },
  { id: "classement", label: "Le classement et sa lecture" },
  { id: "ex-aequo", label: "Départager deux ex æquo" },
  { id: "heure", label: "Le contrôle de l’heure" },
  { id: "portraits", label: "Les dix portraits planétaires" },
  { id: "limites", label: "Ce que la grille ne dit pas" },
  { id: "erreurs", label: "Six erreurs fréquentes" },
  { id: "retenir", label: "Ce qu’il faut retenir" },
  { id: "faq", label: "Questions fréquentes" },
];

/* ── FAQ (affichage + JSON-LD depuis la même source) ─────────── */

const faq = [
  {
    q: "Comment trouver sa planète dominante ?",
    a: "On note chaque planète du thème sur sept critères : maîtrise de l’Ascendant, angularité, lien aux luminaires, appartenance à un amas, dignité, aspects reçus par les points forts, et nombre total d’aspects. La planète qui totalise le plus de points est la dominante. Le calcul demande une heure de naissance fiable.",
  },
  {
    q: "Quelle différence entre planète dominante et signe dominant ?",
    a: "La planète dominante est un acteur : elle décrit ce que la personne fait, son moteur. Le signe dominant est une couleur : il décrit la manière. On peut être dominante Mars dans un thème à tonalité Balance — un combatif qui négocie.",
  },
  {
    q: "Peut-on avoir deux planètes dominantes ?",
    a: "Oui, et c’est fréquent. Quand les deux premières sont à égalité ou à un point d’écart, il n’y a pas une dominante mais un couple dominant. On lit alors les deux ensemble : l’une dit le moteur, l’autre dit le frein ou le relais.",
  },
  {
    q: "Le Soleil peut-il être la planète dominante ?",
    a: "Oui, mais moins souvent qu’on ne le croit. Le Soleil ne l’emporte que s’il est angulaire, en Lion, ou très aspecté. Dans le thème de démonstration de cet article, le Soleil arrive huitième sur dix : c’est exactement pourquoi un horoscope de signe solaire tombe si souvent à côté.",
  },
  {
    q: "Faut-il connaître son heure de naissance exacte ?",
    a: "Oui. Trois des sept critères dépendent de l’Ascendant et du Milieu du Ciel, qui se déplacent d’environ un degré toutes les quatre minutes. Dans le thème de démonstration, une heure d’écart fait passer la dominante de Jupiter à Mars.",
  },
  {
    q: "Pourquoi les calculateurs en ligne donnent-ils des résultats différents ?",
    a: "Parce qu’ils n’utilisent pas le même barème et qu’ils le publient rarement. Certains pondèrent lourdement les luminaires, d’autres l’angularité, d’autres comptent les astéroïdes. Aucun n’est faux : ils répondent simplement à des questions légèrement différentes.",
  },
  {
    q: "La planète dominante change-t-elle avec l’âge ?",
    a: "Le thème natal ne bouge pas, donc le calcul non plus. Ce qui change, c’est l’expression : une dominante Saturne se vit rarement de la même façon à vingt ans et à soixante. Les transits et les révolutions solaires mettent en avant, par périodes, d’autres planètes que la dominante.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

/* ── Données du thème de démonstration ───────────────────────── */

const positions = [
  { p: "Soleil", g: "☉", pos: "8° 17′ Scorpion", h: "XI", note: "Pérégrin" },
  { p: "Lune", g: "☽", pos: "16° 52′ Bélier", h: "IV", note: "Maison angulaire" },
  { p: "Mercure", g: "☿", pos: "22° 47′ Scorpion", h: "XII", note: "Pérégrin" },
  { p: "Vénus", g: "♀", pos: "25° 28′ Scorpion", h: "XII", note: "Exil" },
  { p: "Mars", g: "♂", pos: "27° 22′ Verseau", h: "III", note: "Pérégrin" },
  { p: "Jupiter", g: "♃", pos: "8° 54′ Sagittaire", h: "I", note: "Domicile · conjoint ASC 0° 47′" },
  { p: "Saturne", g: "♄", pos: "4° 56′ Gémeaux ℞", h: "VI", note: "Conjoint DS 3° 11′" },
  { p: "Uranus", g: "♅", pos: "15° 28′ Balance", h: "X", note: "Maison angulaire" },
  { p: "Neptune", g: "♆", pos: "1° 54′ Sagittaire", h: "XII", note: "Conjoint ASC 6° 13′" },
  { p: "Pluton", g: "♇", pos: "0° 57′ Balance", h: "IX", note: "Conjoint MC 2° 08′" },
];

const bareme = [
  {
    n: "1",
    nom: "Maîtrise de l’Ascendant",
    quoi: "La planète qui gouverne le signe de l’Ascendant.",
    pts: "5 pts — ou 3 + 3 si le signe a deux maîtres (Scorpion, Verseau, Poissons).",
  },
  {
    n: "2",
    nom: "Angularité",
    quoi: "Distance à l’un des quatre angles : Ascendant, Milieu du Ciel, Descendant, Fond du Ciel.",
    pts: "4 pts si l’orbe est ≤ 3°, 2 pts entre 3 et 8°. À défaut, 2 pts pour une planète en maison I, IV, VII ou X.",
  },
  {
    n: "3",
    nom: "Lien aux luminaires",
    quoi: "Le Soleil et la Lune eux-mêmes, et les planètes qui gouvernent leurs signes (leurs dispositeurs).",
    pts: "2 pts pour chaque luminaire · 2 pts au dispositeur du Soleil · 2 pts au dispositeur de la Lune (1 + 1 si le signe a deux maîtres).",
  },
  {
    n: "4",
    nom: "Amas",
    quoi: "Trois planètes ou plus réunies dans un même signe ou dans une même maison.",
    pts: "1 pt à chaque membre de l’amas · 2 pts au maître du signe concerné (1 + 1 s’il y en a deux).",
  },
  {
    n: "5",
    nom: "Dignité",
    quoi: "La force de la planète dans le signe qu’elle occupe.",
    pts: "Domicile + 3 · exaltation + 2 · pérégrin 0 · chute − 1 · exil − 2.",
  },
  {
    n: "6",
    nom: "Aspects reçus des points forts",
    quoi: "Aspects majeurs au Soleil, à la Lune, à l’Ascendant ou au Milieu du Ciel.",
    pts: "2 pts par aspect d’orbe ≤ 3°, 1 pt jusqu’à 8° (6° pour le sextile). Total plafonné à 4 pts.",
  },
  {
    n: "7",
    nom: "Planète la plus aspectée",
    quoi: "Le plus grand nombre d’aspects majeurs aux autres planètes.",
    pts: "2 pts, partagés en cas d’égalité.",
  },
];

const classement = [
  { r: 1, p: "Jupiter", t: 16, d: "Maître de l’Ascendant (+5), conjoint à l’Ascendant à 47′ (+4), en domicile (+3), aspects aux points forts (+4)." },
  { r: 2, p: "Pluton", t: 8, d: "Conjoint au Milieu du Ciel à 2° 08′ (+4 et +2), co-dispositeur du Soleil et maître des deux amas (+3), chute en Balance (−1)." },
  { r: 3, p: "Neptune", t: 8, d: "Conjoint à l’Ascendant à 6° 13′ (+2 et +1), sextile serré au Milieu du Ciel (+2), membre de l’amas de maison XII (+1), ex æquo la plus aspectée (+2)." },
  { r: 4, p: "Mars", t: 7, d: "Dispositeur de la Lune (+2) et co-dispositeur du Soleil (+1), maître des deux amas (+2), ex æquo la plus aspectée (+2)." },
  { r: 5, p: "Saturne", t: 7, d: "Conjoint au Descendant à 3° 11′ (+2 et +1), trigone serré au Milieu du Ciel (+2), ex æquo la plus aspectée (+2)." },
  { r: 6, p: "Lune", t: 4, d: "Luminaire (+2), en maison IV angulaire (+2)." },
  { r: 7, p: "Uranus", t: 4, d: "En maison X angulaire (+2), opposition serrée à la Lune (+2)." },
  { r: 8, p: "Soleil", t: 3, d: "Luminaire (+2), membre de l’amas du Scorpion (+1)." },
  { r: 9, p: "Mercure", t: 2, d: "Membre des deux amas (+2)." },
  { r: 10, p: "Vénus", t: 0, d: "Membre des deux amas (+2), exil en Scorpion (−2)." },
];

const portraits = [
  { p: "Soleil", slug: "solarien", type: "Solarien", cle: "Rayonner, présider, incarner" },
  { p: "Lune", slug: "lunarien", type: "Lunarien", cle: "Ressentir, protéger, se souvenir" },
  { p: "Mercure", slug: "mercurien", type: "Mercurien", cle: "Relier, expliquer, circuler" },
  { p: "Vénus", slug: "venusien", type: "Vénusien", cle: "Plaire, harmoniser, savourer" },
  { p: "Mars", slug: "martien", type: "Martien", cle: "Attaquer, trancher, avancer" },
  { p: "Jupiter", slug: "jupiterien", type: "Jupitérien", cle: "Transmettre, élargir, donner du sens" },
  { p: "Saturne", slug: "saturnien", type: "Saturnien", cle: "Structurer, durer, exiger" },
  { p: "Uranus", slug: "uranien", type: "Uranien", cle: "Rompre, inventer, s’affranchir" },
  { p: "Neptune", slug: "neptunien", type: "Neptunien", cle: "Dissoudre, imaginer, compatir" },
  { p: "Pluton", slug: "plutonien", type: "Plutonien", cle: "Sonder, transformer, refonder" },
];

/* ────────────────────────────────────────────────────────────
   Article
   ──────────────────────────────────────────────────────────── */

export default function Post() {
  const glow = getGlowFromTags(meta.tags);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="space-y-12">
        {/* ── IMAGE DE COUVERTURE (LCP) ────────────────────── */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f13]">
          <Image
            src={CoverImage}
            alt="Balance ancienne pesant des symboles astrologiques lumineux, dont un astre doré nettement plus lourd que les autres"
            fill
            sizes="(max-width: 768px) 100vw, 900px"
            priority
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09090b]/80 via-transparent to-transparent"
          />
        </div>

        {/* ── HERO ─────────────────────────────────────────── */}
        <header className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/[0.10] via-black/20 to-black/30 p-7 shadow-soft">
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl ${glow}`}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-3xl"
          />

          <div className="relative">
            <p className="text-sm text-text/65">
              Méthode · Pondération · Exemple chiffré
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-text/85">
              Vous tapez votre date de naissance dans un calculateur, il vous
              annonce «&#8239;dominante Uranus&#8239;», et vous n’avez aucune
              idée de la façon dont il est arrivé là.{" "}
              <strong>
                Ce n’est pas un problème de croyance, c’est un problème de
                méthode.
              </strong>
            </p>

            <p className="mt-3 max-w-2xl leading-relaxed text-text/80">
              Voici la grille de pondération que j’utilise en consultation
              depuis des années&nbsp;: sept critères, un barème chiffré, et un
              résultat que vous pouvez refaire à la main. Pour qu’elle ne reste
              pas théorique, je la fais tourner d’un bout à l’autre sur un
              thème réel — le mien — dont je publie les données de naissance
              pour que vous puissiez vérifier chaque ligne.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <Pill tone="violet">Critères&nbsp;: 7</Pill>
              <Pill tone="sky">Durée&nbsp;: 20 minutes à la main</Pill>
              <Pill tone="emerald">Prérequis&nbsp;: thème natal complet</Pill>
              <Pill tone="orange">Piège&nbsp;: l’heure de naissance</Pill>
            </div>

            <div className="mt-4">
              <TagPillsInline tags={meta.tags} />
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <Stat label="Ce qu’on cherche" value="La planète qui mène le thème" />
              <Stat label="Ce qu’on mesure" value="Position, maîtrise, aspects" />
              <Stat
                label="Question clé"
                value="Quelle planète paierait le plus cher son absence ?"
              />
            </div>
          </div>
        </header>

        {/* ── DÉFINITION (réponse directe) ─────────────────── */}
        <div className="relative overflow-hidden rounded-2xl border border-violet-400/25 bg-gradient-to-br from-violet-500/[0.12] via-indigo-500/[0.06] to-transparent px-6 py-5">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-200/10 blur-2xl"
          />
          <p className="relative text-sm font-semibold uppercase tracking-[0.2em] text-amber-200/80">
            Définition
          </p>
          <p className="relative mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
            La <strong>planète dominante</strong> d’un thème astral est celle
            qui accumule le plus de facteurs de force&nbsp;: elle gouverne
            l’Ascendant, touche un angle, entretient un lien direct avec le
            Soleil ou la Lune, occupe un signe où elle est chez elle et reçoit
            beaucoup d’aspects. On la trouve en notant chaque planète sur ces
            critères et en additionnant. Elle décrit le moteur principal de la
            personne — ce qu’elle fait spontanément quand personne ne lui dit
            quoi faire.
          </p>
        </div>

        {/* ── À RETENIR ────────────────────────────────────── */}
        <section
          className="rounded-2xl border border-emerald-400/25 bg-gradient-to-br from-emerald-500/[0.09] via-sky-500/[0.04] to-transparent p-6"
          aria-labelledby="a-retenir"
        >
          <h2
            id="a-retenir"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200/80"
          >
            À retenir
          </h2>
          <ul className="mt-4 space-y-2 leading-relaxed text-text/90">
            <li>
              Il n’existe <strong>aucun barème officiel</strong>&nbsp;: celui
              qui compte est celui qui est publié, donc vérifiable.
            </li>
            <li>
              Les deux critères les plus lourds sont la{" "}
              <strong>maîtrise de l’Ascendant</strong> et la{" "}
              <strong>conjonction à un angle</strong>.
            </li>
            <li>
              Le <strong>Soleil est rarement dominant</strong> — c’est la raison
              de fond pour laquelle l’horoscope de signe solaire tombe à côté.
            </li>
            <li>
              Un écart de <strong>4 points ou plus</strong> entre la première et
              la deuxième signe une dominante franche. En dessous de 2, il y a
              deux dominantes.
            </li>
            <li>
              <strong>
                Sans heure de naissance fiable, le calcul ne vaut rien
              </strong>
              &nbsp;: une heure d’écart suffit à changer le résultat.
            </li>
          </ul>
        </section>

        {/* ── SOMMAIRE ─────────────────────────────────────── */}
        <nav
          aria-label="Sommaire de l’article"
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/[0.07] to-transparent p-6"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200/70">
            Sommaire
          </p>
          <ol className="mt-4 grid gap-x-8 gap-y-1 sm:grid-cols-2">
            {toc.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="group flex items-baseline gap-3 rounded-lg px-2 py-1.5 transition hover:bg-white/[0.04]"
                >
                  <span className="text-xs font-semibold tabular-nums text-violet-300/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-text/85 underline decoration-white/15 transition group-hover:decoration-violet-300/60">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* ── 1. DÉFINITION ────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="definition">
          <H2 id="definition">Ce qu’est une planète dominante</H2>

          <p className="text-lg leading-relaxed text-text/85">
            Une planète dominante n’est pas la planète que vous préférez, ni
            celle de votre signe solaire. C’est celle dont la voix couvre les
            autres dans le{" "}
            <A href="/blog/qu-est-ce-qu-un-theme-astral">thème natal</A>&nbsp;:
            elle impose son rythme, sa question, sa façon de résoudre les
            problèmes. Quand quelqu’un vous décrit en trois mots sans vous
            connaître, il décrit presque toujours votre dominante — pas votre
            Soleil.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <Box title="Ce que c’est" tone="emerald">
              <ul className="space-y-2">
                <li>Le moteur&nbsp;: ce que la personne fait par défaut.</li>
                <li>
                  Le résultat d’une <strong>pondération</strong>, pas d’une
                  impression.
                </li>
                <li>
                  Un acteur, désigné par une planète — et donc par un{" "}
                  <A href="/blog/jupiterien">type planétaire</A> décrit depuis
                  l’Antiquité.
                </li>
                <li>Souvent deux planètes plutôt qu’une seule.</li>
              </ul>
            </Box>

            <Box title="Ce que ce n’est pas" tone="amber">
              <ul className="space-y-2">
                <li>
                  Le <A href="/signes-dominants">signe dominant</A>&nbsp;: lui
                  donne la manière, pas le moteur.
                </li>
                <li>
                  La <A href="/maisons-dominantes">maison dominante</A>&nbsp;:
                  elle donne le terrain.
                </li>
                <li>La planète la plus proche du Soleil, ni la plus rapide.</li>
                <li>
                  Une étiquette figée&nbsp;: elle dit un fonctionnement, pas
                  une valeur.
                </li>
              </ul>
            </Box>
          </div>

          <Callout tone="note" title="Le test en une question">
            <p>
              Si l’on retirait cette planète du thème, qu’est-ce qui
              s’effondrerait en premier&#8239;? Une dominante Saturne qui
              disparaît, c’est la colonne vertébrale qui tombe. Une dominante
              Mercure, c’est le lien avec les autres. Ce test ne remplace pas le
              calcul, mais il valide son résultat.
            </p>
          </Callout>
        </section>

        <Divider />

        {/* ── 2. PAS DE CALCUL OFFICIEL ────────────────────── */}
        <section className="space-y-5" aria-labelledby="pas-officiel">
          <H2 id="pas-officiel">Pourquoi aucun calcul n’est officiel</H2>

          <p className="leading-relaxed text-text/85">
            Trois calculateurs en ligne, trois dominantes différentes pour le
            même thème&nbsp;: la situation est banale et elle décourage. Elle
            a une explication simple. Il n’existe pas d’autorité astrologique
            qui aurait fixé un barème, comme il existe une norme pour un format
            de papier. Chaque école a construit le sien, en fonction de ce
            qu’elle juge décisif.
          </p>

          <p className="leading-relaxed text-text/85">
            Les traditions antérieures au XXᵉ siècle raisonnaient en{" "}
            <A href="/maitrises">dignités</A> et en{" "}
            <A href="/significateurs">significateurs</A>&nbsp;: une planète
            forte était une planète dans son domicile ou son exaltation.
            L’astrologie du XXᵉ siècle a ajouté le poids de l’angularité —
            l’idée qu’une planète posée sur un angle se voit dans le
            comportement. L’astrologie psychologique, elle, privilégie les
            aspects aux luminaires. Ces trois écoles ne se trompent pas les unes
            les autres&nbsp;: elles répondent à des questions légèrement
            différentes.
          </p>

          <Callout tone="warn" title="Ce qu’il faut exiger d’un barème">
            <p>
              Pas qu’il soit vrai — personne ne peut le démontrer — mais qu’il
              soit <strong>explicite</strong>. Un barème publié est discutable,
              corrigeable, reproductible par n’importe qui. Un calculateur qui
              ne dit pas comment il compte vous demande de le croire sur parole.
              La grille ci-dessous est publiée entièrement&nbsp;: vous pouvez
              en contester chaque point, ce qui est exactement l’intérêt.
            </p>
          </Callout>
        </section>

        <Divider />

        {/* ── 3. LA GRILLE ─────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="grille">
          <H2 id="grille">La grille des sept poids</H2>

          <p className="leading-relaxed text-text/85">
            Sept critères, chacun mesurant une manière différente d’être fort
            dans un thème. Vous notez les dix planètes sur chaque ligne, vous
            additionnez, vous classez. Un tableau de dix lignes et sept
            colonnes suffit, et le calcul complet prend une vingtaine de
            minutes la première fois.
          </p>

          <p className="mb-2 font-semibold text-white/90">
            Le barème complet, critère par critère
          </p>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <div
              className="overflow-x-auto"
              role="region"
              aria-label="Barème de la grille des sept poids"
              tabIndex={0}
            >
              <table className="min-w-full border-collapse text-sm">
                <caption className="sr-only">
                  Les sept critères de pondération et le nombre de points
                  attribué à chacun.
                </caption>
                <thead className="bg-white/[0.04]">
                  <tr className="text-left">
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Critère
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Ce qu’on regarde
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Points
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {bareme.map((b, i) => (
                    <tr
                      key={b.n}
                      className={`border-t border-white/10 ${i % 2 === 1 ? "bg-white/[0.02]" : ""}`}
                    >
                      <th
                        scope="row"
                        className="px-5 py-4 text-left align-top font-medium text-white"
                      >
                        <span className="text-violet-300/80 tabular-nums">
                          {b.n}.
                        </span>{" "}
                        {b.nom}
                      </th>
                      <td className="px-5 py-4 align-top text-text/85">{b.quoi}</td>
                      <td className="px-5 py-4 align-top text-text/85">{b.pts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <figure className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <Image
              src={GrilleImage}
              alt="Thème astral tracé à la main au crayon, à côté d’une grille de notation vierge et d’un compas en laiton"
              sizes="(max-width: 768px) 100vw, 800px"
              className="h-auto w-full"
            />
            <figcaption className="px-5 py-4 text-center text-xs text-text/50">
              La roue d’un côté, la grille de l’autre. C’est exactement la
              disposition de travail — et c’est elle que reprend la fiche à
              imprimer.
            </figcaption>
          </figure>

          <div className="rounded-2xl border border-amber-400/25 bg-gradient-to-br from-amber-500/[0.10] to-transparent p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-200/80">
              Fiche de calcul
            </p>
            <p className="mt-2 leading-relaxed text-text/85">
              Le tableau vierge à remplir à la main&nbsp;: les dix planètes, les
              sept colonnes, le barème complet au dos. Imprimez-en deux — une
              pour votre thème, une pour celui d’un proche.
            </p>
            <a
              href={FICHE_PDF}
              download
              className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-xl border border-amber-400/30 bg-amber-400/10 px-4 py-2.5 text-sm font-medium text-amber-100 transition hover:bg-amber-400/20"
            >
              <span aria-hidden="true">↓</span>
              Télécharger la fiche de calcul (PDF, 2 pages A4)
            </a>
          </div>

          <H3>Trois décisions de barème, assumées</H3>

          <p className="leading-relaxed text-text/85">
            <strong>La maîtrise de l’Ascendant vaut le plus cher.</strong> Le
            maître de l’Ascendant est, dans la tradition, le maître du thème
            entier. Une planète qui gouverne la porte d’entrée gouverne ce qui
            entre et ce qui sort.
          </p>

          <p className="leading-relaxed text-text/85">
            <strong>
              Une conjonction à un angle compte deux fois, et c’est volontaire.
            </strong>{" "}
            Elle marque des points au critère 2 (position) et au critère 6
            (aspect reçu). Une planète collée à l’Ascendant est ce qu’il y a de
            plus immédiatement visible dans un thème&nbsp;: on la lit sur le
            visage, dans la démarche, dans les trois premières minutes d’une
            conversation. Ce doublon est le seul du barème.
          </p>

          <p className="leading-relaxed text-text/85">
            <strong>Les luminaires ne partent pas gagnants.</strong> Le Soleil
            et la Lune reçoivent un socle de 2 points chacun, pas davantage. Ce
            qui leur donne du poids, ce sont leurs{" "}
            <A href="/maitrises">dispositeurs</A> — la planète qui gouverne le
            signe où ils logent. Un Soleil en Scorpion renforce Mars et Pluton,
            pas le Soleil.
          </p>

          <Callout tone="note" title="Orbes utilisés">
            <p>
              8° pour les aspects majeurs impliquant le Soleil, la Lune,
              l’Ascendant ou le Milieu du Ciel, 6° entre deux autres planètes,
              et 2° de moins pour le sextile. Ce sont des orbes classiques,
              volontairement serrés&nbsp;: un barème généreux en orbes finit
              par donner des points à tout le monde. Voir la page{" "}
              <A href="/aspects">aspects</A> pour le détail.
            </p>
          </Callout>
        </section>

        <Divider />

        {/* ── 4. LE THÈME ──────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="theme">
          <H2 id="theme">Le thème de démonstration</H2>

          <p className="leading-relaxed text-text/85">
            Une grille sans exemple abouti ne sert à rien. Voici donc le mien,
            données de naissance comprises, pour que vous puissiez le recalculer
            dans le logiciel de votre choix et vérifier chaque ligne.
          </p>

          <Box title="Données de naissance" tone="violet">
            <p>
              <strong>1ᵉʳ novembre 1971, 10 h 15, Troyes (Aube, France)</strong>{" "}
              — 48° 18′ N, 4° 04′ E.
            </p>
            <p>
              Heure légale française&nbsp;: UTC+1. La France n’a pas pratiqué
              l’heure d’été entre 1945 et 1976 — elle n’a été rétablie que par
              le décret n° 75-866 du 19 septembre 1975, applicable à partir de
              mars 1976. Le temps universel de naissance est donc{" "}
              <strong>9 h 15 TU</strong>, sans correction supplémentaire.
            </p>
            <p className="text-text/70">
              Positions calculées avec les éphémérides Swiss Ephemeris, zodiaque
              tropical, domification Placidus.
            </p>
          </Box>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <div
              className="overflow-x-auto"
              role="region"
              aria-label="Positions planétaires du thème de démonstration"
              tabIndex={0}
            >
              <table className="min-w-full border-collapse text-sm">
                <caption className="sr-only">
                  Position en signe, en maison et état de dignité des dix
                  planètes du thème du 1ᵉʳ novembre 1971.
                </caption>
                <thead className="bg-white/[0.04]">
                  <tr className="text-left">
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Planète
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Position
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Maison
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      À noter
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {positions.map((row, i) => (
                    <tr
                      key={row.p}
                      className={`border-t border-white/10 ${i % 2 === 1 ? "bg-white/[0.02]" : ""}`}
                    >
                      <th
                        scope="row"
                        className="whitespace-nowrap px-5 py-4 text-left align-top font-medium text-white"
                      >
                        <span aria-hidden="true" className="mr-2 text-amber-100/80">
                          {row.g}
                        </span>
                        {row.p}
                      </th>
                      <td className="whitespace-nowrap px-5 py-4 align-top text-text/85">
                        {row.pos}
                      </td>
                      <td className="px-5 py-4 align-top tabular-nums text-text/85">
                        {row.h}
                      </td>
                      <td className="px-5 py-4 align-top text-text/85">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="leading-relaxed text-text/85">
            Ascendant <strong>8° 07′ Sagittaire</strong>, Milieu du Ciel{" "}
            <strong>3° 05′ Balance</strong>. Deux amas&nbsp;: trois planètes en
            Scorpion (Soleil, Mercure, Vénus) et trois planètes en maison XII
            (Mercure, Vénus, Neptune), dont la cuspide est en Scorpion.
          </p>

          <figure className="rounded-2xl border border-white/10 bg-black/20 p-6">
            <svg
              viewBox="0 0 400 400"
              className="mx-auto h-auto w-full max-w-sm text-violet-100"
              role="img"
              aria-label="Roue du thème du 1er novembre 1971 : Jupiter est posé sur l’Ascendant, à gauche ; Pluton est près du Milieu du Ciel, en haut à gauche ; Saturne est face à Jupiter, sur le Descendant."
            >
              <g
                fill="none"
                stroke="currentColor"
                textAnchor="middle"
                dominantBaseline="central"
              >
                <circle cx="200" cy="200" r="170" strokeOpacity="0.35" />
                <circle cx="200" cy="200" r="116" strokeOpacity="0.2" />
                <line x1="84.0" y1="200.0" x2="30.0" y2="200.0" strokeWidth="1.8" strokeOpacity="0.6" />
                <line x1="104.8" y1="266.2" x2="60.4" y2="297.1" strokeWidth="0.7" strokeOpacity="0.2" />
                <line x1="174.8" y1="313.2" x2="163.0" y2="365.9" strokeWidth="0.7" strokeOpacity="0.2" />
                <line x1="249.0" y1="305.2" x2="271.8" y2="354.1" strokeWidth="1.8" strokeOpacity="0.6" />
                <line x1="291.9" y1="270.8" x2="334.6" y2="303.8" strokeWidth="0.7" strokeOpacity="0.2" />
                <line x1="310.9" y1="234.1" x2="362.5" y2="250.0" strokeWidth="0.7" strokeOpacity="0.2" />
                <line x1="316.0" y1="200.0" x2="370.0" y2="200.0" strokeWidth="1.8" strokeOpacity="0.6" />
                <line x1="295.2" y1="133.8" x2="339.6" y2="102.9" strokeWidth="0.7" strokeOpacity="0.2" />
                <line x1="225.2" y1="86.8" x2="237.0" y2="34.1" strokeWidth="0.7" strokeOpacity="0.2" />
                <line x1="151.0" y1="94.8" x2="128.2" y2="45.9" strokeWidth="1.8" strokeOpacity="0.6" />
                <line x1="108.1" y1="129.2" x2="65.4" y2="96.2" strokeWidth="0.7" strokeOpacity="0.2" />
                <line x1="89.1" y1="165.9" x2="37.5" y2="150.0" strokeWidth="0.7" strokeOpacity="0.2" />

                <line x1="82.0" y1="132.4" x2="52.5" y2="115.4" strokeWidth="0.8" strokeOpacity="0.35" />
                <line x1="285.1" y1="306.1" x2="306.4" y2="332.6" strokeWidth="0.8" strokeOpacity="0.35" />
                <line x1="68.8" y1="164.0" x2="36.0" y2="155.1" strokeWidth="0.8" strokeOpacity="0.35" />
                <line x1="82.9" y1="173.7" x2="34.1" y2="162.8" strokeWidth="0.8" strokeOpacity="0.35" />
                <line x1="174.6" y1="333.6" x2="168.3" y2="367.0" strokeWidth="0.8" strokeOpacity="0.35" />
                <line x1="64.0" y1="201.8" x2="30.0" y2="202.3" strokeWidth="0.8" strokeOpacity="0.35" />
                <line x1="335.8" y1="207.6" x2="369.7" y2="209.5" strokeWidth="0.8" strokeOpacity="0.35" />
                <line x1="117.5" y1="91.9" x2="96.9" y2="64.9" strokeWidth="0.8" strokeOpacity="0.35" />
                <line x1="96.6" y1="188.7" x2="31.0" y2="181.6" strokeWidth="0.8" strokeOpacity="0.35" />
                <line x1="147.2" y1="74.7" x2="134.0" y2="43.3" strokeWidth="0.8" strokeOpacity="0.35" />

                <g fill="currentColor" stroke="none" fontSize="16">
                  <text x="74.2" y="127.9">☉</text>
                  <text x="290.7" y="313.1">☽</text>
                  <text x="60.2" y="161.7">☿</text>
                  <text x="74.1" y="171.8">♀</text>
                  <text x="172.9" y="342.5">♂</text>
                  <text x="55.0" y="202.0" className="fill-amber-200">♃</text>
                  <text x="344.8" y="208.1">♄</text>
                  <text x="112.0" y="84.7">♅</text>
                  <text x="87.7" y="187.8">♆</text>
                  <text x="143.7" y="66.4">♇</text>
                </g>

                <g
                  fill="currentColor"
                  stroke="none"
                  fontSize="12"
                  fontWeight="600"
                  className="fill-white/60"
                >
                  <text x="15.0" y="200.0">ASC</text>
                  <text x="121.1" y="30.5">MC</text>
                  <text x="385.0" y="200.0">DS</text>
                  <text x="278.9" y="369.5">FC</text>
                </g>
              </g>
            </svg>
            <figcaption className="mt-5 text-center text-xs text-text/50">
              Le thème du 1ᵉʳ novembre 1971 à l’échelle, Ascendant à gauche.
              Jupiter (♃) est posé sur l’Ascendant&#8239;; Pluton (♇) borde le
              Milieu du Ciel&#8239;; Saturne (♄) leur fait face depuis le
              Descendant. Trois planètes sur des angles&nbsp;: le calcul se
              joue là.
            </figcaption>
          </figure>
        </section>

        <Divider />

        {/* ── 5. LE CALCUL ─────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="calcul">
          <H2 id="calcul">Le calcul, planète par planète</H2>

          <p className="leading-relaxed text-text/85">
            Je ne détaille ici que les cinq premières&nbsp;: au-delà, les
            scores ne changent plus le résultat. Le classement complet suit.
          </p>

          <H3>Jupiter&nbsp;: 16 points</H3>
          <p className="leading-relaxed text-text/85">
            L’Ascendant est en Sagittaire, et le Sagittaire n’a qu’un maître
            — <A href="/planetes/jupiter">Jupiter</A> prend les 5 points du
            critère 1. Il est par ailleurs conjoint à cet Ascendant à{" "}
            <strong>47 minutes d’arc</strong>, soit largement sous les 3° du
            barème&nbsp;: 4 points au critère 2, puis 2 points au critère 6
            pour ce même aspect. Il est en Sagittaire, donc en domicile&nbsp;:
            3 points. Restent un sextile au Milieu du Ciel et un trigone à la
            Lune, à 1 point chacun, ce qui plafonne le critère 6 à 4.
          </p>
          <p className="leading-relaxed text-text/85">
            Total&nbsp;: 5 + 4 + 3 + 4 = <strong>16 points</strong>. Aucune
            autre planète n’en obtient la moitié.
          </p>

          <H3>Pluton&nbsp;: 8 points</H3>
          <p className="leading-relaxed text-text/85">
            <A href="/planetes/pluton">Pluton</A> borde le Milieu du Ciel à 2°
            08′&nbsp;: 4 points d’angularité, 2 points d’aspect reçu. Comme
            maître moderne du Scorpion, il est co-dispositeur du Soleil (1 pt)
            et maître des deux amas (1 + 1). Il est en revanche en chute en
            Balance, ce qui lui retire 1 point. Total&nbsp;: 8.
          </p>

          <H3>Neptune&nbsp;: 8 points</H3>
          <p className="leading-relaxed text-text/85">
            <A href="/planetes/neptune">Neptune</A> est conjoint à l’Ascendant,
            mais à 6° 13′ — dans la seconde tranche du barème, donc 2 points
            seulement, et 1 point d’aspect. Son sextile au Milieu du Ciel, lui,
            est serré à 1° 11′&nbsp;: 2 points. Membre de l’amas de maison XII
            (1 pt), il est aussi l’une des trois planètes les plus aspectées du
            thème (2 pts). Total&nbsp;: 8, à égalité avec Pluton.
          </p>

          <H3>Mars et Saturne&nbsp;: 7 points chacun</H3>
          <p className="leading-relaxed text-text/85">
            <A href="/planetes/mars">Mars</A> ne touche aucun angle et n’a
            aucune dignité, mais il gouverne le Bélier où loge la Lune (2 pts),
            co-gouverne le Scorpion où loge le Soleil (1 pt), maîtrise les deux
            amas (2 pts) et compte parmi les plus aspectées (2 pts). Il monte à
            7 sans jamais être visible — cas typique d’une planète qui pèse par
            les maîtrises plus que par la position.{" "}
            <A href="/planetes/saturne">Saturne</A>, lui, arrive au même total
            par le chemin inverse&nbsp;: conjoint au Descendant à 3° 11′ et en
            trigone serré au Milieu du Ciel.
          </p>
        </section>

        <Divider />

        {/* ── 6. CLASSEMENT ────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="classement">
          <H2 id="classement">Le classement et sa lecture</H2>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <div
              className="overflow-x-auto"
              role="region"
              aria-label="Classement des dix planètes par score"
              tabIndex={0}
            >
              <table className="min-w-full border-collapse text-sm">
                <caption className="sr-only">
                  Score total de chaque planète et détail des points obtenus.
                </caption>
                <thead className="bg-white/[0.04]">
                  <tr className="text-left">
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Rang
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Planète
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Total
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      D’où viennent les points
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {classement.map((row) => (
                    <tr
                      key={row.p}
                      className={`border-t border-white/10 ${row.r === 1 ? "bg-amber-400/[0.06]" : row.r % 2 === 1 ? "bg-white/[0.02]" : ""}`}
                    >
                      <td className="px-5 py-4 align-top tabular-nums text-text/70">
                        {row.r}
                      </td>
                      <th
                        scope="row"
                        className="whitespace-nowrap px-5 py-4 text-left align-top font-medium text-white"
                      >
                        {row.p}
                      </th>
                      <td className="px-5 py-4 align-top font-semibold tabular-nums text-white">
                        {row.t}
                      </td>
                      <td className="px-5 py-4 align-top text-text/85">{row.d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <H3>Lire l’écart, pas seulement le premier</H3>

          <p className="leading-relaxed text-text/85">
            Le chiffre qui compte n’est pas le total du vainqueur, c’est la
            distance qui le sépare du deuxième. Trois cas de figure&nbsp;:
          </p>

          <ul className="space-y-2 leading-relaxed text-text/85">
            <li>
              <strong>Écart de 4 points ou plus</strong>&nbsp;: dominante
              franche. Une seule planète mène, et le portrait du type
              correspondant colle de près.
            </li>
            <li>
              <strong>Écart de 1 à 3 points</strong>&nbsp;: dominante nuancée.
              La première donne le moteur, la deuxième colore tout ce qu’il
              produit.
            </li>
            <li>
              <strong>Égalité parfaite</strong>&nbsp;: pas de dominante, un
              couple dominant. On lit les deux planètes ensemble, et le portrait
              d’un seul type ne suffira jamais.
            </li>
          </ul>

          <p className="leading-relaxed text-text/85">
            Ici, l’écart est de 8 points&nbsp;: la dominante est franche et ne
            se discute pas. Ce qui se discute, c’est la deuxième place — j’y
            viens.
          </p>

          <Callout tone="ok" title="Ce que le classement dit du Soleil">
            <p>
              Huitième sur dix, avec 3 points. Un Soleil en maison XI, sans
              aucun aspect majeur aux autres planètes, dans un signe qu’il ne
              gouverne pas. C’est, en chiffres, la raison pour laquelle{" "}
              <A href="/blog/pourquoi-votre-horoscope-ne-vous-ressemble-pas">
                les horoscopes de signe solaire ne ressemblent à personne
              </A>
              &nbsp;: ils commentent un acteur qui, dans bien des thèmes, n’a
              pas le premier rôle.
            </p>
          </Callout>
        </section>

        <Divider />

        {/* ── 7. EX ÆQUO ───────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="ex-aequo">
          <H2 id="ex-aequo">Départager deux ex æquo</H2>

          <p className="leading-relaxed text-text/85">
            Pluton et Neptune sortent tous les deux à 8 points. Le cas est
            fréquent, et c’est celui où la plupart des méthodes s’arrêtent en
            laissant le lecteur décider seul. Voici la règle que j’applique, en
            trois étapes, dans cet ordre.
          </p>

          <div className="space-y-4">
            <Box title="Étape 1 — L’angle l’emporte" tone="violet">
              <p>
                À total égal, la planète la plus proche d’un angle passe devant.
                C’est elle que l’entourage voit en premier.{" "}
                <strong>
                  Pluton est à 2° 08′ du Milieu du Ciel, Neptune à 6° 13′ de
                  l’Ascendant&nbsp;: Pluton prend la deuxième place.
                </strong>{" "}
                La règle suffit ici, les deux suivantes n’ont pas à servir.
              </p>
            </Box>

            <Box title="Étape 2 — La dignité l’emporte">
              <p>
                Si aucune des deux ne touche un angle, celle qui est en domicile
                ou en exaltation passe devant&nbsp;: elle agit sans
                intermédiaire, là où une planète pérégrine doit emprunter les
                moyens d’une autre.
              </p>
            </Box>

            <Box title="Étape 3 — L’aspect le plus serré tranche">
              <p>
                Si rien n’a départagé, on compare l’orbe le plus serré vers le
                Soleil, la Lune ou l’Ascendant. Et si l’écart reste inférieur à
                une demi-minute d’arc&nbsp;: on ne tranche pas. Deux dominantes
                à égalité stricte, c’est une information en soi — celle d’un
                fonctionnement à deux moteurs, souvent vécu comme une
                contradiction intérieure avant d’être vécu comme une richesse.
              </p>
            </Box>
          </div>

          <Callout tone="warn" title="L’erreur à ne pas commettre">
            <p>
              Ajouter un huitième critère parce que le septième n’a pas
              départagé. C’est la porte ouverte au barème sur mesure, celui qui
              finit toujours par donner le résultat qu’on espérait. La règle
              d’arbitrage doit être décidée <em>avant</em> de connaître les
              scores, pas après.
            </p>
          </Callout>
        </section>

        <Divider />

        {/* ── 8. CONTRÔLE DE L'HEURE ───────────────────────── */}
        <section className="space-y-5" aria-labelledby="heure">
          <H2 id="heure">Le contrôle de l’heure</H2>

          <p className="leading-relaxed text-text/85">
            C’est le contrôle que personne ne fait, et c’est le seul qui peut
            invalider tout le calcul. L’Ascendant se déplace d’environ un degré
            toutes les quatre minutes&nbsp;: trois des sept critères en
            dépendent directement. J’ai refait la grille complète sur le même
            thème, en déplaçant l’heure de naissance.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            <Stat label="10 h 15 (heure retenue)" value="Jupiter 16 — Pluton 8" />
            <Stat label="± 30 minutes" value="Jupiter reste premier" />
            <Stat label="9 h 15, une heure plus tôt" value="Mars 11 — Jupiter 7" />
          </div>

          <p className="leading-relaxed text-text/85">
            À une heure d’écart, l’Ascendant quitte le Sagittaire pour le
            Scorpion. Jupiter perd d’un coup les 5 points de maîtrise et les 4
            points de conjonction&nbsp;: il tombe de 16 à 7. Mars, qui
            gouverne le Scorpion, hérite de la maîtrise et prend la tête avec 11
            points. <strong>Même thème, même barème, dominante opposée.</strong>
          </p>

          <Callout tone="warn" title="La règle de prudence">
            <p>
              Refaites toujours le calcul à plus et moins trente minutes. Si la
              dominante tient, vous pouvez vous appuyer dessus. Si elle change,
              votre heure de naissance n’est pas assez sûre pour ce calcul —
              demandez la copie intégrale de votre acte de naissance, qui porte
              l’heure déclarée, plutôt que de vous fier à un souvenir de
              famille.
            </p>
          </Callout>
        </section>

        <Divider />

        {/* ── 9. LES PORTRAITS ─────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="portraits">
          <H2 id="portraits">Les dix portraits planétaires</H2>

          <p className="leading-relaxed text-text/85">
            Le calcul vous donne un nom. Le portrait vous dit ce que ce nom
            recouvre&nbsp;: façon de penser, de travailler, d’aimer, et l’ombre
            qui va avec. Prenez celui de votre dominante, puis celui de votre
            deuxième — c’est le croisement des deux qui ressemble le plus à
            quelqu’un.
          </p>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <div
              className="overflow-x-auto"
              role="region"
              aria-label="Les dix types planétaires et leurs portraits"
              tabIndex={0}
            >
              <table className="min-w-full border-collapse text-sm">
                <caption className="sr-only">
                  Correspondance entre chaque planète dominante, le type
                  planétaire associé et son mot-clé.
                </caption>
                <thead className="bg-white/[0.04]">
                  <tr className="text-left">
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Dominante
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Type
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Ce qu’il fait par défaut
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {portraits.map((row, i) => (
                    <tr
                      key={row.slug}
                      className={`border-t border-white/10 ${i % 2 === 1 ? "bg-white/[0.02]" : ""}`}
                    >
                      <th
                        scope="row"
                        className="whitespace-nowrap px-5 py-4 text-left align-top font-medium text-white"
                      >
                        {row.p}
                      </th>
                      <td className="whitespace-nowrap px-5 py-4 align-top text-text/85">
                        <A href={`/blog/${row.slug}`}>{row.type}</A>
                      </td>
                      <td className="px-5 py-4 align-top text-text/85">{row.cle}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="leading-relaxed text-text/85">
            Dans le thème ci-dessus, la dominante est Jupiter, la deuxième est
            Pluton. Un <A href="/blog/jupiterien">jupitérien</A> qui transmet et
            élargit, doublé d’un <A href="/blog/plutonien">plutonien</A> qui
            creuse et refonde&nbsp;: quelqu’un qui enseigne, mais ne supporte
            pas d’enseigner en surface.
          </p>
        </section>

        <Divider />

        {/* ── 10. LIMITES ──────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="limites">
          <H2 id="limites">Ce que la grille ne dit pas</H2>

          <p className="leading-relaxed text-text/85">
            Un barème qui prétend tout mesurer ne mesure plus rien. Quatre
            limites, à garder en tête avant d’utiliser le résultat.
          </p>

          <ul className="space-y-3 leading-relaxed text-text/85">
            <li>
              <strong>Elle ne dit pas si la dominante est bien vécue.</strong>{" "}
              Un Saturne dominant peut donner une colonne vertébrale ou une
              chape de plomb. Le score est identique&#8239;; les{" "}
              <A href="/aspects">aspects</A> reçus et l’histoire de la personne
              font la différence.
            </li>
            <li>
              <strong>Elle ne remplace pas la lecture du thème.</strong> La
              dominante est une entrée, pas un résumé. Un thème se lit avec ses
              douze <A href="/maisons">maisons</A>, ses{" "}
              <A href="/transits">transits</A> et ses contradictions.
            </li>
            <li>
              <strong>Elle dépend de choix techniques discutables.</strong>{" "}
              Placidus plutôt qu’un autre système de{" "}
              <A href="/cuspides-des-maisons">domification</A>, maîtrises
              modernes plutôt que traditionnelles seules&nbsp;: changez ces
              choix et certains scores bougent.
            </li>
            <li>
              <strong>Ce n’est pas une mesure scientifique.</strong>{" "}
              L’astrologie n’est pas une science, et ce barème n’est pas une
              démonstration&nbsp;: c’est un outil de lecture, explicite et
              donc critiquable. Il éclaire un fonctionnement, il ne prédit rien
              et ne remplace aucun avis professionnel.
            </li>
          </ul>
        </section>

        <Divider />

        {/* ── 11. ERREURS ──────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="erreurs">
          <H2 id="erreurs">Six erreurs fréquentes</H2>

          <div className="space-y-4">
            <div>
              <H3>1. Confondre planète dominante et signe dominant</H3>
              <p className="leading-relaxed text-text/85">
                La planète dit le moteur, le{" "}
                <A href="/signes-dominants">signe</A> dit la manière. Dominante
                Mars en tonalité Balance&nbsp;: un combatif qui négocie. Ce
                n’est pas la même personne qu’un dominante Vénus en tonalité
                Bélier.
              </p>
            </div>

            <div>
              <H3>2. Oublier le maître de l’Ascendant</H3>
              <p className="leading-relaxed text-text/85">
                C’est le critère le plus lourd et le plus souvent passé sous
                silence, parce qu’il demande de connaître les{" "}
                <A href="/maitrises">maîtrises</A>. Sans lui, Jupiter perdait 5
                points sur 16 dans l’exemple ci-dessus.
              </p>
            </div>

            <div>
              <H3>3. Compter les aspects sans orbe</H3>
              <p className="leading-relaxed text-text/85">
                Un trigone à 9° n’est pas un trigone. Sans limite d’orbe
                déclarée, toutes les planètes finissent «&#8239;très
                aspectées&#8239;» et le critère ne discrimine plus rien.
              </p>
            </div>

            <div>
              <H3>4. Faire entrer les points fictifs dans le barème</H3>
              <p className="leading-relaxed text-text/85">
                <A href="/lilith">Lilith</A>, les{" "}
                <A href="/noeuds-lunaires">nœuds lunaires</A>, Chiron et les{" "}
                <A href="/asteroides">astéroïdes</A> ont leur intérêt, mais ils
                ne sont pas des planètes&nbsp;: les ajouter au calcul gonfle
                artificiellement certains signes et rend deux thèmes
                incomparables.
              </p>
            </div>

            <div>
              <H3>5. Accepter un résultat sans connaître la méthode</H3>
              <p className="leading-relaxed text-text/85">
                Si un calculateur ne publie pas son barème, son résultat n’est
                pas faux&nbsp;: il est invérifiable. Ce n’est pas la même
                chose, mais ce n’est pas beaucoup mieux.
              </p>
            </div>

            <div>
              <H3>6. Calculer sans heure de naissance fiable</H3>
              <p className="leading-relaxed text-text/85">
                Sans heure, pas d’Ascendant, pas de Milieu du Ciel, pas de
                maisons — il ne reste que trois critères sur sept. Mieux vaut
                alors ne pas conclure que conclure sur la moitié des données.
                Ce qu’un thème sans heure permet encore de lire est détaillé
                dans{" "}
                <A href="/blog/theme-astral-sans-heure-de-naissance">
                  l’article sur le thème astral sans heure de naissance
                </A>
                .
              </p>
            </div>
          </div>
        </section>

        <Divider />

        {/* ── 12. À RETENIR ────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="retenir">
          <H2 id="retenir">Ce qu’il faut retenir</H2>

          <div className="relative overflow-hidden rounded-2xl border border-emerald-400/25 bg-gradient-to-br from-emerald-500/[0.10] via-sky-500/[0.05] to-transparent p-6">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl"
            />
            <ul className="relative space-y-3 leading-relaxed text-text/90">
              <li>
                ⚖ <strong>Sept critères, un barème publié.</strong> La valeur
                d’une méthode tient à ce qu’elle soit vérifiable, pas à ce
                qu’elle soit ancienne.
              </li>
              <li>
                ⚖ <strong>Maîtrise de l’Ascendant et angularité décident</strong>{" "}
                presque toujours du vainqueur. Commencez par ces deux lignes.
              </li>
              <li>
                ⚖ <strong>C’est l’écart qui s’interprète</strong>, pas le
                total&nbsp;: 4 points ou plus, dominante franche&#8239;; moins
                de 2, couple dominant.
              </li>
              <li>
                ⚖ <strong>L’ex æquo se tranche par l’angle</strong>, puis par la
                dignité, puis par l’orbe — règle décidée avant de voir les
                scores.
              </li>
              <li>
                ⚖ <strong>Vérifiez toujours à ± 30 minutes.</strong> Une heure
                d’écart a fait passer l’exemple de Jupiter à Mars.
              </li>
            </ul>
          </div>

          <p className="leading-relaxed text-text/85">
            Reprenez la grille sur votre propre thème, puis sur celui d’un
            proche que vous connaissez bien&nbsp;: c’est en calculant la
            dominante de quelqu’un d’autre qu’on mesure si la méthode tient.
            Sur soi, on se reconnaît toujours un peu partout. La{" "}
            <a
              href={FICHE_PDF}
              download
              className="underline decoration-amber-300/40 transition hover:decoration-amber-300/80"
            >
              fiche de calcul imprimable
            </a>{" "}
            contient le tableau vierge et le barème au dos.
          </p>
        </section>

        {/* ── 13. FAQ ──────────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="faq">
          <H2 id="faq">Questions fréquentes sur la planète dominante</H2>

          <div className="space-y-4">
            {faq.map((item) => (
              <details
                key={item.q}
                open
                className="group rounded-2xl border border-white/10 bg-black/20 p-5"
              >
                <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">
                  {item.q}
                </summary>
                <p className="leading-relaxed text-text/85">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ── CTA / MAILLAGE ───────────────────────────────── */}
        <section className="rounded-2xl border border-white/10 bg-black/20 p-6">
          <p className="text-sm text-text/60">Continuer la lecture</p>
          <div className="mt-3 space-y-3 leading-relaxed text-text/85">
            <p>
              Pour appliquer la grille, il vous faut d’abord un thème
              complet&nbsp;: la page{" "}
              <A href="/theme-astral">thème astral</A> explique ce qu’il
              contient, et{" "}
              <A href="/blog/comprendre-signe-astrologique-ascendant-12-exemples">
                Soleil et Ascendant en douze exemples
              </A>{" "}
              montre pourquoi les deux ne racontent pas la même histoire.
            </p>
            <p>
              Les deux autres dominantes d’un thème se calculent de la même
              façon&nbsp;: le <A href="/signes-dominants">signe dominant</A>{" "}
              pour la manière, la{" "}
              <A href="/maisons-dominantes">maison dominante</A> pour le
              terrain. Les trois ensemble donnent une lecture d’ensemble bien
              plus juste qu’un signe solaire isolé. Le{" "}
              <A href="/dictionnaire-astrologique">dictionnaire astrologique</A>{" "}
              reprend chaque terme employé ici.
            </p>
          </div>
          <div className="mt-5">
            <Link
              href="/blog"
              className="inline-flex rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-text/90 transition hover:bg-white/10"
            >
              ← Tous les articles
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
