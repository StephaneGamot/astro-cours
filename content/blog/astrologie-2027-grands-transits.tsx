import type { ReactNode } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "./ui";

export const meta = {
  slug: "astrologie-2027-grands-transits",
  seoTitle: "Astrologie 2027 : les grands transits de l’année",
  title: "Astrologie 2027 : où les grands transits tombent dans votre thème",
  description:
    "Mars rétrograde, Saturne en Bélier, Jupiter en Vierge, éclipse du 2 août : les transits de 2027 en heure de Paris, et où chacun tombe dans votre thème.",
  date: "2026-10-04",
  tags: [
    "transits",
    "2027",
    "méthode",
    "éclipses",
    "rétrograde",
    "Saturne",
    "Jupiter",
    "Uranus",
    "maisons astrologiques",
    "thème astral",
    "exemples",
    "intermédiaire",
  ],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/degres-sensibles-2027-roue.webp",
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
            ◐
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

/** Lien sortant vers une source primaire (pas de nofollow : sources institutionnelles). */
function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="underline decoration-white/30 hover:decoration-white/60 transition"
    >
      {children}
    </a>
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

/** Tableau accessible : légende, en-têtes de colonnes et de lignes, région défilante au clavier. */
function DataTable({
  label,
  caption,
  head,
  rows,
}: {
  label: string;
  caption: string;
  head: string[];
  rows: ReactNode[][];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
      <div
        className="overflow-x-auto"
        role="region"
        aria-label={label}
        tabIndex={0}
      >
        <table className="min-w-full border-collapse text-sm">
          <caption className="sr-only">{caption}</caption>
          <thead className="bg-white/[0.04]">
            <tr className="text-left">
              {head.map((h) => (
                <th
                  key={h}
                  scope="col"
                  className="px-5 py-4 font-semibold text-white"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr
                key={i}
                className={`border-t border-white/10 ${i % 2 === 1 ? "bg-white/[0.02]" : ""}`}
              >
                {r.map((cell, k) =>
                  k === 0 ? (
                    <th
                      key={k}
                      scope="row"
                      className="px-5 py-4 text-left align-top font-medium text-white"
                    >
                      {cell}
                    </th>
                  ) : (
                    <td key={k} className="px-5 py-4 align-top text-text/85">
                      {cell}
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ── Sommaire ────────────────────────────────────────────────── */

const toc = [
  { id: "annee", label: "2027 en six mouvements" },
  { id: "mars-retrograde", label: "Mars rétrograde, du 10 janvier au 1ᵉʳ avril" },
  { id: "saturne-belier", label: "Saturne en Bélier toute l’année" },
  { id: "jupiter", label: "Jupiter : du Lion à la Vierge le 26 juillet" },
  { id: "lentes", label: "Uranus, Neptune, Pluton : le fond de l’année" },
  { id: "eclipses", label: "Les deux éclipses solaires" },
  { id: "degres-sensibles", label: "La carte des degrés sensibles de 2027" },
  { id: "methode", label: "Lire 2027 dans votre thème en quatre étapes" },
  { id: "exemple", label: "L’exemple : 2027 sur un thème réel" },
  { id: "faq", label: "Questions fréquentes" },
];

/* ── FAQ (affichage + JSON-LD depuis la même source) ─────────── */

const faq = [
  {
    q: "Faut-il connaître son heure de naissance pour utiliser ce calendrier ?",
    a: "Pas pour le Soleil ni pour les planètes : la date suffit à les placer au degré près, Lune mise à part. L’heure devient nécessaire dès qu’on veut la maison natale traversée par un transit, et les contacts à l’Ascendant ou au Milieu du Ciel. Sans heure, lisez la carte des degrés sensibles avec vos planètes seulement, et laissez les maisons de côté.",
  },
  {
    q: "Quel orbe utiliser pour un transit ?",
    a: "Trois degrés pour une conjonction, une opposition ou un carré de Saturne, Uranus, Neptune ou Pluton ; deux degrés pour leurs trigones et sextiles ; un degré pour Mars et pour les lunaisons. Dans tous les cas, ce qui se passe se concentre autour des dates exactes et des stations, quand la planète ralentit jusqu’à s’immobiliser.",
  },
  {
    q: "Un transit qui ne touche aucun point de mon thème compte-t-il ?",
    a: "Oui, mais autrement. Il colore la maison natale qu’il traverse, c’est-à-dire un domaine de vie, pendant toute la durée de son séjour : Saturne en maison IV toute l’année 2027, par exemple, pèse sur le foyer et les bases même sans aspect exact. Il ne produit pas, en revanche, de période datée comme le fait un contact à une planète ou à un angle.",
  },
  {
    q: "Pourquoi les dates diffèrent-elles d’un site à l’autre ?",
    a: "Trois raisons. Le fuseau horaire : un événement à 23 h en temps universel tombe le lendemain en heure de Paris. L’événement choisi : la station rétrograde, le changement de signe et l’aspect exact ne tombent pas le même jour. Enfin l’éphéméride utilisée, qui peut décaler une heure de quelques minutes. Les dates de cet article sont calculées sur Swiss Ephemeris et converties en heure de Paris.",
  },
  {
    q: "Mars rétrograde en 2027 est-il « mauvais » pour les Lion et les Vierge ?",
    a: "Non. Un transit ne vise pas un signe, il passe sur des degrés : entre 20° 56′ Lion et 10° 26′ Vierge pour ce Mars rétrograde. Il concerne en conjonction les personnes nées entre le 13 août et le 3 septembre, et par aspect dur celles qui ont un point natal aux mêmes degrés du Verseau, des Poissons, du Taureau, des Gémeaux, du Scorpion ou du Sagittaire. Un Lion du 25 juillet n’est pas concerné par conjonction.",
  },
  {
    q: "L’éclipse du 2 août me concerne-t-elle si je ne la vois pas ?",
    a: "La visibilité est une question d’astronomie : la totalité traverse l’extrême sud de l’Andalousie, Gibraltar, le Maghreb et l’Égypte. En astrologie, c’est le degré qui compte, 9° 55′ Lion, visible ou non depuis chez vous. L’éclipse touche un thème si un point natal se trouve à moins de trois degrés de ce point, de son opposé ou de ses carrés.",
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

/* ── Les six mouvements de 2027 ──────────────────────────────── */

const mouvements = [
  {
    quoi: "Mars rétrograde",
    quand: "10 janvier → 1ᵉʳ avril",
    ou: "10° 26′ Vierge → 20° 56′ Lion",
    note: "Le seul de l’année. Zone parcourue trois fois, du 5 novembre 2026 au 8 juin 2027.",
  },
  {
    quoi: "Jupiter change de signe",
    quand: "26 juillet, 6 h 49",
    ou: "Lion → Vierge",
    note: "Direct le 13 avril à 17° 00′ Lion ; en Vierge jusqu’au 24 août 2028.",
  },
  {
    quoi: "Saturne en Bélier",
    quand: "Toute l’année",
    ou: "8° 20′ → 27° 53′ Bélier",
    note: "Rétrograde du 9 août au 24 décembre ; quitte le Bélier le 13 avril 2028.",
  },
  {
    quoi: "Uranus en Gémeaux",
    quand: "Toute l’année",
    ou: "1° 41′ → 9° 57′ Gémeaux",
    note: "Direct le 8 février, rétrograde le 15 septembre.",
  },
  {
    quoi: "Neptune en Bélier, Pluton en Verseau",
    quand: "Toute l’année",
    ou: "1° 43′ → 6° 40′ Bélier · 4° 21′ → 7° 11′ Verseau",
    note: "Neptune rétrograde du 10 juillet au 15 décembre ; Pluton du 8 mai au 18 octobre.",
  },
  {
    quoi: "Deux éclipses solaires",
    quand: "6 février · 2 août",
    ou: "17° 38′ Verseau · 9° 55′ Lion",
    note: "Annulaire, puis totale ; trois éclipses lunaires pénombrales (21 février, 18 juillet, 17 août).",
  },
];

/* ── Carte des degrés sensibles de 2027 ──────────────────────── */

const carte = [
  {
    transit: "Mars rétrograde (10 janv. → 1ᵉʳ avr.)",
    degres: "20° 56′ Lion → 10° 26′ Vierge, parcourus trois fois (5 nov. 2026 → 8 juin 2027)",
    conj: "Nés du 13 août au 3 septembre",
    dur: "Opposition : 9 février → 1ᵉʳ mars · Carrés : 11 mai → 1ᵉʳ juin, 12 novembre → 3 décembre",
  },
  {
    transit: "Saturne en Bélier (toute l’année)",
    degres: "8° 20′ → 27° 53′ Bélier ; triple passage de 21° 01′ à 27° 53′ (4 mai 2027 → 27 mars 2028)",
    conj: "Nés du 28 mars au 18 avril",
    dur: "Opposition : 1ᵉʳ → 22 octobre · Carrés : 29 juin → 21 juillet, 29 décembre → 19 janvier",
  },
  {
    transit: "Jupiter en Lion (jusqu’au 26 juil.)",
    degres: "17° 00′ → 27° 18′ Lion ; triple passage de 17° à 27° (sept. 2026 → juil. 2027)",
    conj: "Nés du 9 au 21 août",
    dur: "Opposition : 5 → 17 février · Carrés : 7 → 19 mai, 9 → 20 novembre",
  },
  {
    transit: "Jupiter en Vierge (dès le 26 juil.)",
    degres: "0° → 27° 18′ Vierge ; triple passage de 17° 32′ à 27° 31′ (oct. 2027 → août 2028)",
    conj: "Nés du 22 août au 21 septembre",
    dur: "Opposition : 18 février → 18 mars · Carrés : 20 mai → 19 juin, 21 novembre → 20 décembre",
  },
  {
    transit: "Uranus en Gémeaux",
    degres: "1° 41′ → 9° 57′ Gémeaux ; triple passage de 5° 56′ à 9° 57′ (mai 2027 → mai 2028)",
    conj: "Nés du 22 mai au 1ᵉʳ juin",
    dur: "Opposition : 23 novembre → 2 décembre · Carrés : 20 février → 1ᵉʳ mars, 24 août → 3 septembre",
  },
  {
    transit: "Neptune en Bélier",
    degres: "1° 43′ → 6° 40′ Bélier ; triple passage de 3° 51′ à 6° 40′ (mars 2027 → avr. 2028)",
    conj: "Nés du 21 au 28 mars",
    dur: "Opposition : 24 → 30 septembre · Carrés : 22 → 29 juin, 23 → 29 décembre",
  },
  {
    transit: "Pluton en Verseau",
    degres: "4° 21′ → 7° 11′ Verseau ; triple passage de 4° 45′ à 7° 11′ (janv. 2027 → févr. 2028)",
    conj: "Nés du 24 au 28 janvier",
    dur: "Opposition : 27 → 31 juillet · Carrés : 24 → 28 avril, 27 → 31 octobre",
  },
  {
    transit: "Éclipse annulaire du 6 février",
    degres: "17° 38′ Verseau, orbe de 3°",
    conj: "Nés du 3 au 10 février",
    dur: "Opposition : 6 → 14 août · Carrés : 4 → 12 mai, 6 → 13 novembre",
  },
  {
    transit: "Éclipse totale du 2 août",
    degres: "9° 55′ Lion, orbe de 3°",
    conj: "Nés du 29 juillet au 6 août",
    dur: "Opposition : 26 janvier → 2 février · Carrés : 26 avril → 4 mai, 29 octobre → 6 novembre",
  },
];

/* ── L’exemple : 1ᵉʳ novembre 1971, 10 h 15, Troyes ───────────── */

const exemple = [
  {
    rang: "1",
    transit: "Uranus opposé à l’Ascendant (8° 07′ Sagittaire) et à Jupiter (8° 54′ Sagittaire)",
    dates: "8 juillet et 25 novembre 2027, puis 27 avril 2028 · 26 juillet et 6 novembre 2027, puis 11 mai 2028",
    pourquoi: "Planète lente, angle du thème, triple passage : les trois critères réunis. Uranus se pose sur le Descendant natal (8° 07′ Gémeaux) et y reste jusqu’au printemps 2028.",
  },
  {
    rang: "2",
    transit: "Saturne conjoint à la Lune (16° 52′ Bélier, maison IV)",
    dates: "1ᵉʳ avril 2027, passage unique ; précédé de Saturne opposé à Uranus natal (15° 28′ Balance) le 21 mars",
    pourquoi: "Un seul passage, mais un luminaire dans une maison angulaire. Saturne traverse la maison IV toute l’année : les bases, le foyer, ce sur quoi on s’appuie.",
  },
  {
    rang: "3",
    transit: "Pluton trigone à Saturne natal (4° 56′ Gémeaux, maison VI)",
    dates: "19 janvier, 19 septembre et 15 novembre 2027",
    pourquoi: "Lent et triple, mais harmonique : un appui de fond plutôt qu’un événement. Pluton carré au Soleil natal (8° 17′ Scorpion) s’approche à 1° 07′ le 8 mai, sans être exact avant le 21 mars 2028.",
  },
  {
    rang: "4",
    transit: "Éclipse totale à 9° 55′ Lion, maison VIII",
    dates: "2 août 2027",
    pourquoi: "Carré au Soleil natal à 1° 38′, trigone à l’Ascendant et à Jupiter. Une lunaison à fort coefficient dans la maison des partages, des dettes et des transformations.",
  },
  {
    rang: "5",
    transit: "Mars rétrograde opposé à Mars natal (27° 22′ Verseau, maison III)",
    dates: "19 novembre 2026, 28 février et 7 mai 2027",
    pourquoi: "Triple passage, mais planète rapide : sept mois où l’élan se rejoue, dans les maisons VIII et IX du thème, sans la portée d’un transit lent.",
  },
  {
    rang: "6",
    transit: "Jupiter en Vierge, maison IX ; carré à l’Ascendant et à Jupiter natal",
    dates: "2 et 5 septembre 2027, passage unique",
    pourquoi: "Un contact bref de Jupiter à son propre lieu natal et à l’Ascendant : à noter, sans le surévaluer.",
  },
  {
    rang: "7",
    transit: "Neptune opposé au Milieu du Ciel (3° 05′ Balance)",
    dates: "26 février 2027, troisième et dernier passage (après le 25 avril et le 22 septembre 2026)",
    pourquoi: "Un transit qui se termine : 2027 en écrit la dernière ligne, pas la première.",
  },
];

/* ── Frise : les repères de 2027 (positions calculées sur 365 jours) ─ */

const ticks = [
  { x: 60, l: "janv." },
  { x: 126.6, l: "févr." },
  { x: 185, l: "mars" },
  { x: 249.5, l: "avr." },
  { x: 312, l: "mai" },
  { x: 376.5, l: "juin" },
  { x: 439, l: "juil." },
  { x: 503.5, l: "août" },
  { x: 568, l: "sept." },
  { x: 630.5, l: "oct." },
  { x: 695, l: "nov." },
  { x: 757.5, l: "déc." },
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
            src={meta.cover}
            alt="Roue zodiacale tracée à l’encre sur papier crème, des arcs à l’aquarelle surlignent des portions du cercle, une main pose un rapporteur en laiton contre son bord"
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
              Dates calculées · Méthode · Thème réel
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-text/85">
              Un calendrier astrologique de 2027, vous en trouverez partout&nbsp;:
              des dates, des degrés, un paragraphe par signe. Ce qu’on trouve
              rarement, c’est la question qui change tout&nbsp;:{" "}
              <strong>
                où ces transits tombent-ils dans votre thème, et lesquels
                méritent votre attention&#8239;?
              </strong>
            </p>

            <p className="mt-3 max-w-2xl leading-relaxed text-text/80">
              Cet article donne les dates de 2027 en heure de Paris, calculées
              sur éphémérides, puis une méthode en quatre étapes pour les lire
              chez vous&nbsp;: la carte des degrés sensibles, les zones à triple
              passage, la maison natale traversée. Avec un thème réel, le mien,
              pour montrer le raisonnement de bout en bout.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <Pill tone="violet">Heure de Paris</Pill>
              <Pill tone="sky">Six mouvements</Pill>
              <Pill tone="emerald">Méthode en quatre étapes</Pill>
              <Pill tone="orange">Zéro paragraphe par signe</Pill>
            </div>

            <div className="mt-4">
              <TagPillsInline tags={meta.tags} />
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <Stat label="Le seul Mars rétrograde" value="10 janvier → 1ᵉʳ avril" />
              <Stat label="Le pivot de l’année" value="Jupiter en Vierge le 26 juillet" />
              <Stat label="L’éclipse" value="2 août, 9° 55′ Lion, totale" />
            </div>
          </div>
        </header>

        {/* ── RÉPONSE DIRECTE ──────────────────────────────── */}
        <div className="relative overflow-hidden rounded-2xl border border-violet-400/25 bg-gradient-to-br from-violet-500/[0.12] via-indigo-500/[0.06] to-transparent px-6 py-5">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-200/10 blur-2xl"
          />
          <p className="relative text-sm font-semibold uppercase tracking-[0.2em] text-amber-200/80">
            La réponse courte
          </p>
          <p className="relative mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
            En <strong>astrologie, 2027</strong> tient en six mouvements&nbsp;:
            Mars rétrograde en Vierge et en Lion du 10 janvier au 1ᵉʳ avril, le
            seul de l’année&#8239;; Jupiter qui quitte le Lion pour la Vierge le
            26 juillet&#8239;; Saturne en Bélier d’un bout à l’autre, rétrograde
            du 9 août au 24 décembre&#8239;; Uranus en Gémeaux, Neptune en
            Bélier et Pluton en Verseau qui poursuivent leur chemin&#8239;; deux
            éclipses solaires, annulaire le 6 février à 17° 38′ Verseau et
            totale le 2 août à 9° 55′ Lion&#8239;; et aucune Vénus rétrograde.
            Aucune de ces dates ne vous concerne de la même façon que votre
            voisin&nbsp;: tout dépend du degré où elle tombe dans votre thème.
            C’est ce que cet article apprend à lire.
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
              Un transit ne vise pas un signe, il passe sur des{" "}
              <strong>degrés</strong>. Il touche votre thème s’il arrive à
              moins de 3° d’une planète ou d’un angle natal, en conjonction,
              en opposition ou en carré.
            </li>
            <li>
              <strong>La carte des degrés sensibles</strong> réunit, pour
              chaque transit de 2027, les degrés balayés et les dates de
              naissance dont le Soleil s’y trouve.
            </li>
            <li>
              Les transits qui pèsent sont ceux qui repassent{" "}
              <strong>trois fois</strong> sur le même degré, à cause de la
              rétrogradation. Chaque section indique cette zone.
            </li>
            <li>
              Quatre étapes&nbsp;: <strong>relever</strong> vos degrés,{" "}
              <strong>superposer</strong> la carte, <strong>situer</strong> la
              maison natale, <strong>hiérarchiser</strong> avec la règle des
              trois passages.
            </li>
            <li>
              Pas de prédiction par signe solaire&nbsp;: un Lion du 25 juillet
              et un Lion du 15 août ne vivent pas le même Mars rétrograde.
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

        {/* ── 1. SIX MOUVEMENTS ────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="annee">
          <H2 id="annee">2027 en six mouvements</H2>

          <p className="text-lg leading-relaxed text-text/85">
            Six mouvements structurent l’année&nbsp;: un Mars rétrograde en
            hiver, un changement de signe de Jupiter en été, Saturne qui
            avance puis recule dans le Bélier, trois planètes lentes qui
            poursuivent un séjour commencé en 2026, et deux éclipses solaires
            sur l’axe Verseau-Lion. Mercure rétrograde trois fois, Vénus
            jamais.
          </p>

          <DataTable
            label="Les six mouvements astrologiques de 2027"
            caption="Pour chaque mouvement de 2027, la période en heure de Paris, les degrés concernés et une précision utile."
            head={["Mouvement", "Quand", "Où", "À savoir"]}
            rows={mouvements.map((m) => [m.quoi, m.quand, m.ou, m.note])}
          />

          <figure className="rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-6">
            <div
              className="overflow-x-auto"
              role="region"
              aria-label="Frise chronologique des repères astrologiques de 2027"
              tabIndex={0}
            >
              <svg
                viewBox="0 0 840 290"
                role="img"
                aria-label="Frise de l’année 2027 : Mars rétrograde du 10 janvier au 1er avril ; Jupiter en Lion jusqu’au 26 juillet puis en Vierge ; Saturne en Bélier toute l’année, rétrograde du 9 août au 24 décembre ; Mercure rétrograde du 9 février au 3 mars, du 10 juin au 4 juillet et du 7 au 28 octobre ; éclipses solaires le 6 février et le 2 août."
                className="min-w-[640px] w-full"
              >
                <g fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="12" fill="#d4d4d8">
                  {ticks.map((t) => (
                    <g key={t.l}>
                      <line x1={t.x} y1={40} x2={t.x} y2={262} stroke="#ffffff" strokeOpacity="0.08" />
                      <text x={t.x + 4} y={32} fill="#a1a1aa">{t.l}</text>
                    </g>
                  ))}
                  <line x1={820} y1={40} x2={820} y2={262} stroke="#ffffff" strokeOpacity="0.08" />

                  {/* Mars rétrograde : 10 janv. → 1er avr. */}
                  <text x={4} y={74} fontWeight="600">Mars ℞</text>
                  <rect x={80.8} y={62} width={168.7} height={16} rx={8} fill="#f87171" fillOpacity="0.85" />
                  <text x={258} y={74} fill="#fca5a5">10 janv. → 1ᵉʳ avr.</text>

                  {/* Jupiter : Lion jusqu'au 26 juil., puis Vierge */}
                  <text x={4} y={118} fontWeight="600">Jupiter</text>
                  <rect x={60} y={106} width={431} height={16} rx={8} fill="#fbbf24" fillOpacity="0.8" />
                  <rect x={491} y={106} width={329} height={16} rx={8} fill="#34d399" fillOpacity="0.8" />
                  <text x={200} y={118} fill="#1c1917" fontWeight="600">Lion</text>
                  <text x={620} y={118} fill="#052e16" fontWeight="600">Vierge (26 juil.)</text>

                  {/* Saturne : Bélier toute l'année, ℞ 9 août → 24 déc. */}
                  <text x={4} y={162} fontWeight="600">Saturne</text>
                  <rect x={60} y={153} width={760} height={6} rx={3} fill="#a78bfa" fillOpacity="0.45" />
                  <rect x={520} y={150} width={285} height={16} rx={8} fill="#a78bfa" fillOpacity="0.9" />
                  <text x={530} y={162} fill="#1e1b4b" fontWeight="600">℞ 9 août → 24 déc.</text>
                  <text x={70} y={147} fill="#c4b5fd">Bélier toute l’année</text>

                  {/* Mercure rétrograde ×3 */}
                  <text x={4} y={206} fontWeight="600">Mercure ℞</text>
                  <rect x={143.3} y={194} width={45.7} height={16} rx={8} fill="#60a5fa" fillOpacity="0.85" />
                  <rect x={395} y={194} width={50} height={16} rx={8} fill="#60a5fa" fillOpacity="0.85" />
                  <rect x={643} y={194} width={44} height={16} rx={8} fill="#60a5fa" fillOpacity="0.85" />
                  <text x={196} y={206} fill="#93c5fd">9 févr. → 3 mars</text>
                  <text x={452} y={206} fill="#93c5fd">10 juin → 4 juil.</text>
                  <text x={694} y={206} fill="#93c5fd">7 → 28 oct.</text>

                  {/* Éclipses solaires */}
                  <text x={4} y={250} fontWeight="600">Éclipses</text>
                  <circle cx={137} cy={246} r={7} fill="none" stroke="#fde68a" strokeWidth="2.5" />
                  <text x={150} y={250} fill="#fde68a">6 févr. · annulaire · 17° 38′ ♒</text>
                  <circle cx={505.5} cy={246} r={7} fill="#fde68a" />
                  <text x={518} y={250} fill="#fde68a">2 août · totale · 9° 55′ ♌</text>
                </g>
              </svg>
            </div>
            <figcaption className="mt-3 text-center text-xs text-text/50">
              Les repères de 2027 sur une seule ligne de temps. Positions
              calculées à partir des dates réelles, heure de Paris.
            </figcaption>
          </figure>

          <p className="leading-relaxed text-text/85">
            Les trois rétrogradations de Mercure (9 février → 3 mars, 10 juin
            → 4 juillet, 7 → 28 octobre) ont{" "}
            <A href="/blog/mercure-retrograde-2027-dates">leur propre article</A>,
            dates et ombres comprises. Les nouvelles et pleines lunes sont dans
            le{" "}
            <A href="/blog/calendrier-pleine-lune-nouvelle-lune-2026-2027">
              calendrier lunaire 2026-2027
            </A>
            . Ici, on s’occupe de ce qui dure&nbsp;: les transits des planètes
            lentes, le Mars rétrograde, les éclipses, et surtout la façon de
            les rapporter à votre thème.
          </p>
        </section>

        {/* ── 2. MARS RÉTROGRADE ───────────────────────────── */}
        <section className="space-y-5" aria-labelledby="mars-retrograde">
          <H2 id="mars-retrograde">Mars rétrograde, du 10 janvier au 1ᵉʳ avril</H2>

          <p className="text-lg leading-relaxed text-text/85">
            Mars s’immobilise le 10 janvier à 13 h 59, à 10° 26′ de la Vierge,
            recule jusque dans le Lion le 21 février, et repart en marche
            directe le 1ᵉʳ avril à 16 h 08, à 20° 56′ du Lion. C’est le seul
            Mars rétrograde de 2027, et le dernier avant 2029. Entre les deux
            dates, le 19 février, Mars est à l’opposition du
            Soleil, et le lendemain au plus près de la Terre&nbsp;: il brille
            alors toute la nuit, plus fort qu’à aucun autre moment de l’année.
          </p>

          <p className="leading-relaxed text-text/85">
            Douze semaines de rétrogradation, mais la zone concernée est
            occupée bien plus longtemps. Mars entre à 20° 56′ Lion le 5
            novembre 2026, atteint 10° 26′ Vierge le 10 janvier, revient à
            20° 56′ Lion le 1ᵉʳ avril, puis repasse 10° 26′ Vierge le 8 juin.
            Quiconque possède un point natal entre ces deux degrés voit Mars
            passer dessus <strong>trois fois en sept mois</strong>. C’est la
            première chose à vérifier, avant tout commentaire sur le signe.
          </p>

          <Box title="Ce que Mars rétrograde demande" tone="amber">
            <p>
              Mars, c’est l’élan&nbsp;: la décision, l’action, la capacité à
              s’imposer. Rétrograde, l’élan se retourne vers ce qui a déjà été
              lancé. Les projets commencés en novembre et décembre 2026
              reviennent sur la table, les désaccords laissés en suspens aussi.
              On avance moins vite, on avance plus juste. En Vierge, cela
              passe par le détail et le travail&#8239;; en Lion, à partir du 21
              février, par la fierté et ce qu’on veut montrer.
            </p>
          </Box>

          <H3>Où ça tombe chez vous</H3>
          <p className="leading-relaxed text-text/85">
            Par conjonction, Mars rétrograde touche tout point natal situé
            entre 20° 56′ Lion et 10° 26′ Vierge. Pour le Soleil, cela
            correspond aux personnes nées <strong>du 13 août au 3 septembre</strong>,
            toutes années confondues. Par opposition, aux mêmes degrés du
            Verseau et des Poissons (nés du 9 février au 1ᵉʳ mars)&#8239;; par
            carré, du Taureau et des Gémeaux (11 mai → 1ᵉʳ juin), du Scorpion
            et du Sagittaire (12 novembre → 3 décembre). La maison natale qui
            contient la fin du Lion et le début de la Vierge dit, elle, le
            domaine de vie concerné.
          </p>
        </section>

        {/* ── 3. SATURNE EN BÉLIER ─────────────────────────── */}
        <section className="space-y-5" aria-labelledby="saturne-belier">
          <H2 id="saturne-belier">Saturne en Bélier toute l’année</H2>

          <p className="text-lg leading-relaxed text-text/85">
            Saturne commence 2027 à 8° 20′ du Bélier et le termine à 21° 04′.
            Entre les deux, il monte jusqu’à 27° 53′, où il s’arrête le 9 août
            à 20 h 05, puis redescend jusqu’au 24 décembre, 3 h 47, à 21° 01′.
            Il est entré dans le Bélier le 14 février 2026 et le quittera pour
            le Taureau le 13 avril 2028&nbsp;: 2027 est l’année centrale de ce
            séjour.
          </p>

          <p className="leading-relaxed text-text/85">
            Deux rythmes se succèdent. De janvier au début de mai, Saturne
            parcourt les degrés 8 à 21 du Bélier en un seul passage, sans
            revenir. À partir du 4 mai, il entre dans la zone qu’il visitera
            trois fois, <strong>de 21° 01′ à 27° 53′</strong>&nbsp;: à l’aller
            jusqu’au 9 août, en rétrograde jusqu’au 24 décembre, puis à
            nouveau en marche directe jusqu’au 27 mars 2028. Un point natal
            dans cette zone vit un transit de Saturne de onze mois&#8239;; un
            point entre 8° et 21° vit un passage plus bref, mais un passage de
            Saturne reste un passage de Saturne.
          </p>

          <Box title="Ce que Saturne en Bélier demande" tone="violet">
            <p>
              Saturne, c’est la structure&nbsp;: le cadre, la durée, la
              responsabilité qu’on finit par accepter. Le Bélier est le signe
              de l’initiative, celui où l’on commence sans attendre. Les deux
              ne s’aiment pas spontanément&nbsp;: Saturne y est en{" "}
              <A href="/maitrises">chute</A>. Le transit demande d’apprendre à
              commencer avec méthode, à tenir ce qu’on a lancé, à accepter
              d’être seul au départ. Son allié de l’année est Jupiter, en
              trigone exact les 3 avril et 12 juillet&nbsp;: la confiance qui
              soutient l’effort.
            </p>
          </Box>

          <H3>Où ça tombe chez vous</H3>
          <p className="leading-relaxed text-text/85">
            Un Soleil natal entre 8° et 28° du Bélier, soit une naissance{" "}
            <strong>du 28 mars au 18 avril</strong>, reçoit Saturne en
            conjonction au cours de l’année. Une naissance du 1ᵉʳ au 22
            octobre le reçoit par opposition, une naissance du 29 juin au 21
            juillet ou du 29 décembre au 19 janvier par carré. Pour tous les
            autres, Saturne traverse une maison natale pendant toute l’année,
            et c’est cette maison qu’il faut regarder&nbsp;: les{" "}
            <A href="/transits">transits de Saturne par maison</A> sont décrits
            dans le cours.
          </p>
        </section>

        {/* ── 4. JUPITER ───────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="jupiter">
          <H2 id="jupiter">Jupiter&nbsp;: du Lion à la Vierge le 26 juillet</H2>

          <p className="text-lg leading-relaxed text-text/85">
            Jupiter est en Lion depuis le 30 juin 2026 et rétrograde depuis le
            13 décembre, à 27° 01′. Il reprend sa marche directe le 13 avril
            2027 à 17° 00′ du Lion, revient à 27° le 11 juillet, puis entre
            dans la Vierge le 26 juillet à 6 h 49. Il y finit l’année à 27° 16′ et y
            reste jusqu’au 24 août 2028.
          </p>

          <p className="leading-relaxed text-text/85">
            Les degrés 17 à 27 du Lion sont donc parcourus trois fois, de
            septembre 2026 à juillet 2027. Même mécanique de l’autre
            côté&nbsp;: Jupiter s’arrêtera le 12 janvier 2028 à 27° 31′ Vierge
            et reculera jusqu’à 17° 32′, ce qui fait des degrés 17 à 27 de la
            Vierge une zone à triple passage entre octobre 2027 et août 2028.
            Les degrés 0 à 17 de la Vierge, parcourus de fin juillet à
            mi-octobre 2027, ne sont visités qu’une fois.
          </p>

          <Box title="Ce que le passage en Vierge change" tone="emerald">
            <p>
              Jupiter élargit ce qu’il touche&nbsp;: le sens, la confiance,
              les occasions. En Lion, il élargit la visibilité et la création,
              ce qu’on signe de son nom. En Vierge, il élargit le métier, la
              santé, le service rendu, l’art de faire bien. L’année passe du
              projecteur à l’établi. Le 10 septembre, Jupiter en Vierge forme
              un carré exact à Uranus en Gémeaux, à 9° 57′&nbsp;: la rencontre
              d’une méthode qui s’élargit et d’une nouveauté qui bouscule.
            </p>
          </Box>

          <H3>Où ça tombe chez vous</H3>
          <p className="leading-relaxed text-text/85">
            Jupiter en Lion concerne par conjonction les naissances du 9 au 21
            août&#8239;; Jupiter en Vierge, celles du 22 août au 21 septembre.
            Par opposition, respectivement les naissances du 5 au 17 février
            et du 18 février au 18 mars. Jupiter est rapide&nbsp;: un contact
            unique dure deux à trois semaines, un contact triple s’étale sur
            près de dix mois. Les deux maisons natales traversées, celle qui
            contient la fin du Lion et celle qui contient la Vierge, reçoivent
            chacune un an de son attention.
          </p>
        </section>

        {/* ── 5. LES TROIS LENTES ──────────────────────────── */}
        <section className="space-y-5" aria-labelledby="lentes">
          <H2 id="lentes">Uranus, Neptune, Pluton&nbsp;: le fond de l’année</H2>

          <p className="text-lg leading-relaxed text-text/85">
            Les trois planètes lentes ne font pas l’événement en 2027&nbsp;:
            elles l’ont fait entre 2024 et 2026,
            en changeant toutes de signe. Uranus est
            en Gémeaux depuis le 26 avril 2026, Neptune en Bélier depuis le 26
            janvier 2026, Pluton en Verseau depuis le 19 novembre 2024. En 2027,
            elles avancent de trois à huit degrés, et c’est précisément ce qui
            les rend puissantes pour qui a un point natal sur leur chemin&nbsp;:
            leurs transits durent de douze à dix-huit mois, presque toujours
            en trois passages.
          </p>

          <DataTable
            label="Les trois planètes lentes en 2027"
            caption="Pour Uranus, Neptune et Pluton : les degrés parcourus en 2027, la période de rétrogradation et la zone parcourue trois fois."
            head={["Planète", "Degrés en 2027", "Rétrograde", "Zone à triple passage"]}
            rows={[
              ["Uranus en Gémeaux", "1° 41′ → 9° 57′", "15 septembre → 13 février 2028", "5° 56′ → 9° 57′ (mai 2027 → mai 2028)"],
              ["Neptune en Bélier", "1° 43′ → 6° 40′", "10 juillet → 15 décembre", "3° 51′ → 6° 40′ (mars 2027 → avril 2028)"],
              ["Pluton en Verseau", "4° 21′ → 7° 11′", "8 mai → 18 octobre", "4° 45′ → 7° 11′ (janvier 2027 → février 2028)"],
            ]}
          />

          <p className="leading-relaxed text-text/85">
            Entre elles, les trois s’entendent. Uranus et Pluton forment un
            trigone exact le 15 juin, à 6° 52′ des Gémeaux et du Verseau&nbsp;:
            deux signes d’air, la nouveauté technique et la transformation
            collective qui tirent dans le même sens. Uranus et Neptune sont en
            sextile exact les 15 janvier et 6 juin, Neptune et Pluton les 29
            juin et 16 octobre. Ce sont des accords de fond, qui se lisent à
            l’échelle d’une génération plus qu’à celle d’une année&nbsp;; ils
            prennent un sens personnel quand l’une des trois planètes touche
            votre thème.
          </p>

          <H3>Où ça tombe chez vous</H3>
          <p className="leading-relaxed text-text/85">
            Uranus en conjonction pour les naissances du 22 mai au 1ᵉʳ juin,
            Neptune du 21 au 28 mars, Pluton du 24 au 28 janvier. En
            opposition, Uranus vise les naissances du 23 novembre au 2
            décembre, Neptune du 24 au 30 septembre, Pluton du 27 au 31
            juillet. Les carrés sont dans la carte ci-dessous. Hors Soleil, le
            même raisonnement vaut pour la Lune, l’Ascendant et chaque
            planète&nbsp;: il faut alors le thème calculé. Les significations
            par planète sont dans les cours sur{" "}
            <A href="/planetes/uranus">Uranus</A>,{" "}
            <A href="/planetes/neptune">Neptune</A> et{" "}
            <A href="/planetes/pluton">Pluton</A>.
          </p>
        </section>

        {/* ── 6. ÉCLIPSES ──────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="eclipses">
          <H2 id="eclipses">Les deux éclipses solaires</H2>

          <p className="text-lg leading-relaxed text-text/85">
            Le 6 février à 16 h 59, la nouvelle lune de Verseau est une
            éclipse annulaire, à 17° 38′ du signe, visible depuis l’Amérique du Sud et l’Afrique de
            l’Ouest, pas depuis l’Europe. Le 2 août à
            12 h 06, la nouvelle lune du Lion est une éclipse totale, à
            9° 55′&nbsp;: l’une des plus longues du siècle, un peu plus de six
            minutes de nuit en plein jour au maximum, en Égypte. Sa bande de
            totalité traverse l’extrême sud de l’Andalousie, les provinces de
            Cadix et de Malaga, Gibraltar, puis Tanger, le Maghreb, la Libye et
            l’Égypte.
          </p>

          <p className="leading-relaxed text-text/85">
            Les deux éclipses se répondent sur l’axe Verseau-Lion, là où
            circulent les{" "}
            <A href="/noeuds-lunaires">nœuds lunaires</A> en 2027 (de 22° 51′ à
            3° 34′ du Verseau pour le nœud moyen). Celle du 2 août tombe au
            même endroit du zodiaque que l’éclipse totale du 12 août 2026, dix
            degrés plus bas dans le signe&nbsp;: les personnes marquées dans la
            première moitié du Lion ou du Verseau ont déjà commencé le
            chapitre. Les trois éclipses lunaires
            de l’année, le 21 février à 2° Vierge, le 18 juillet à 26°
            Capricorne et le 17 août à 24° Verseau, sont pénombrales&nbsp;: à
            noter dans le calendrier, sans leur prêter la portée d’une éclipse
            totale.
          </p>

          <Callout tone="note" title="Comment lire une éclipse dans un thème">
            <p>
              Une éclipse est une lunaison à fort coefficient. Elle compte
              pour vous si son degré tombe à moins de trois degrés d’un point
              natal, en conjonction, en opposition ou en carré, et la maison
              natale où elle se produit dit le domaine concerné. Le reste du
              temps, c’est une nouvelle lune un peu plus marquée que les
              autres. Visible ou non depuis chez vous ne change rien au
              calcul.
            </p>
          </Callout>

          <H3>Où ça tombe chez vous</H3>
          <p className="leading-relaxed text-text/85">
            Avec un orbe de trois degrés, l’éclipse du 6 février concerne par
            conjonction les naissances du 3 au 10 février, par opposition
            celles du 6 au 14 août, par carré celles du 4 au 12 mai et du 6 au
            13 novembre. Celle du 2 août concerne par conjonction les
            naissances du 29 juillet au 6 août, par opposition celles du 26
            janvier au 2 février, par carré celles du 26 avril au 4 mai et du
            29 octobre au 6 novembre. Le point d’éclipse reste sensible
            plusieurs mois&nbsp;: Mars le réactive par carré, depuis le
            Scorpion, le 17 septembre 2027 pour celui du 2 août.
          </p>
        </section>

        {/* ── 7. CARTE DES DEGRÉS SENSIBLES ────────────────── */}
        <section className="space-y-5" aria-labelledby="degres-sensibles">
          <H2 id="degres-sensibles">La carte des degrés sensibles de 2027</H2>

          <p className="text-lg leading-relaxed text-text/85">
            Tout ce qui précède tient dans un tableau. Pour chaque transit, la
            colonne «&#8239;Degrés&#8239;» donne la portion de zodiaque
            balayée en 2027 et, quand il y en a une, la zone parcourue trois
            fois. Les deux dernières colonnes traduisent ces degrés en{" "}
            <strong>dates de naissance</strong>, pour le Soleil&nbsp;: le seul
            point du thème que tout le monde connaît sans calcul.
          </p>

          <DataTable
            label="Carte des degrés sensibles de 2027"
            caption="Pour chaque transit de 2027 : les degrés balayés, puis les dates de naissance dont le Soleil est touché par conjonction, et celles touchées par opposition ou par carré. Fenêtres valables à un jour près pour toute année de naissance."
            head={["Transit", "Degrés balayés", "Soleil touché par conjonction", "Par opposition ou carré"]}
            rows={carte.map((r) => [r.transit, r.degres, r.conj, r.dur])}
          />

          <p className="leading-relaxed text-text/85">
            Les fenêtres de dates sont calculées sur les années 1950 à 2010 et
            valent à un jour près pour n’importe quelle année de naissance. Une
            date dans une fenêtre signifie que le Soleil natal est sur le
            chemin du transit au cours de 2027&nbsp;; la date exacte du contact
            dépend du degré précis, que n’importe quel logiciel de thème vous
            donne. Pour les autres points du thème, la Lune, l’Ascendant, les
            planètes, lisez la colonne des degrés avec vos positions sous les
            yeux.
          </p>
        </section>

        {/* ── 8. MÉTHODE ───────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="methode">
          <H2 id="methode">Lire 2027 dans votre thème en quatre étapes</H2>

          <p className="text-lg leading-relaxed text-text/85">
            La méthode tient en quatre verbes&nbsp;: relever, superposer,
            situer, hiérarchiser. Vingt minutes avec votre thème sous les
            yeux, et vous savez quels transits de 2027 vous concernent, à
            quelles dates, et dans quel ordre d’importance.
          </p>

          <H3>1. Relever vos degrés</H3>
          <p className="leading-relaxed text-text/85">
            Notez la position de vos douze points&nbsp;: Soleil, Lune, Mercure,
            Vénus, Mars, Jupiter, Saturne, Uranus, Neptune, Pluton, Ascendant,
            Milieu du Ciel, en degré et minute de signe. Un{" "}
            <A href="/theme-astral">thème astral</A> calculé les donne tous.
            Sans heure de naissance, l’Ascendant, le Milieu du Ciel et les
            maisons manquent&nbsp;: l’article sur le{" "}
            <A href="/blog/theme-astral-sans-heure-de-naissance">
              thème sans heure de naissance
            </A>{" "}
            explique ce qui reste lisible.
          </p>

          <H3>2. Superposer la carte</H3>
          <p className="leading-relaxed text-text/85">
            Pour chaque ligne de la carte des degrés sensibles, un point natal
            est touché s’il se trouve à moins de 3° d’un degré balayé
            (conjonction), à moins de 3° du même degré dans le signe opposé
            (opposition), ou dans l’un des deux signes à 90° (carré). Les
            trigones et les sextiles comptent avec un orbe de 2°&#8239;: ils
            soutiennent plus qu’ils n’événementialisent. Pour Mars, réduisez
            tout à 1°.
          </p>

          <H3>3. Situer la maison natale</H3>
          <p className="leading-relaxed text-text/85">
            Repérez dans quelle maison de votre thème tombent les degrés
            balayés. Les{" "}
            <A href="/cuspides-des-maisons">cuspides</A> de votre thème
            découpent le zodiaque en douze domaines&nbsp;; un transit lent
            colore celui qu’il traverse pendant tout son séjour, qu’il forme un
            aspect exact ou non. Saturne en maison II toute l’année 2027 parle
            d’argent et de ressources, en maison VII de couple et de contrats,
            en maison X de carrière. Le cours sur les{" "}
            <A href="/maisons">douze maisons</A> détaille chacune.
          </p>

          <H3>4. Hiérarchiser avec la règle des trois passages</H3>
          <p className="leading-relaxed text-text/85">
            Vous avez maintenant une liste, parfois longue. Trois critères la
            trient, dans cet ordre. <strong>La vitesse</strong>&nbsp;: Saturne,
            Uranus, Neptune et Pluton passent avant Jupiter, qui passe avant
            Mars et les éclipses. <strong>La cible</strong>&nbsp;: un contact au
            Soleil, à la Lune, à l’Ascendant ou au Milieu du Ciel passe avant
            un contact à une autre planète&#8239;; une conjonction ou une
            opposition passe avant un carré, qui passe avant un trigone.{" "}
            <strong>Le nombre de passages</strong>&nbsp;: un transit qui repasse
            trois fois sur le même degré, grâce à la rétrogradation, passe
            avant un passage unique. Gardez les deux ou trois premiers de la
            liste&nbsp;: ce sont les transits de votre année. Les autres sont
            des notes de bas de page.
          </p>

          <aside className="rounded-2xl border border-amber-400/25 bg-amber-500/[0.07] p-5">
            <p className="text-lg leading-relaxed text-amber-100/90">
              «&#8239;Un transit qui passe trois fois n’est pas trois fois plus
              fort. Il est trois fois plus long, et c’est la durée qui
              transforme.&#8239;»
            </p>
          </aside>

          <Callout tone="warn" title="Ce que la méthode ne fait pas">
            <p>
              Elle ne prédit pas d’événement. Un transit de Saturne à la Lune
              décrit une période où la sécurité affective passe à l’épreuve de
              la durée&#8239;; il ne dit ni comment, ni avec qui, ni si cela
              se passera bien. L’astrologie n’est pas une science
              expérimentale, et je m’en sers comme d’un calendrier
              d’attention, pas comme d’un oracle. Le cours sur les{" "}
              <A href="/transits">transits</A> donne la lecture de chaque
              planète en transit, planète par planète et maison par maison.
            </p>
          </Callout>
        </section>

        {/* ── 9. EXEMPLE ───────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="exemple">
          <H2 id="exemple">L’exemple&nbsp;: 2027 sur un thème réel</H2>

          <p className="text-lg leading-relaxed text-text/85">
            Le thème est le mien, celui que j’ai publié pour la{" "}
            <A href="/blog/planete-dominante-methode-calcul">
              méthode de la planète dominante
            </A>
            &nbsp;: 1ᵉʳ novembre 1971, 10 h 15, Troyes. Ascendant 8° 07′
            Sagittaire, Milieu du Ciel 3° 05′ Balance, domification Placidus.
            Je l’ai passé à la carte des degrés sensibles, puis à la règle des
            trois passages. Le résultat est la liste ci-dessous, dans l’ordre
            où je la retiens.
          </p>

          <DataTable
            label="Les transits de 2027 sur le thème du 1er novembre 1971, classés"
            caption="Pour le thème de référence, les transits de 2027 classés par la règle des trois passages : le transit, ses dates exactes en heure de Paris, et la raison du rang."
            head={["Rang", "Transit", "Dates exactes", "Pourquoi ce rang"]}
            rows={exemple.map((r) => [r.rang, r.transit, r.dates, r.pourquoi])}
          />

          <p className="leading-relaxed text-text/85">
            Ce que la liste m’apprend, d’abord, c’est ce qui n’y est pas. Mon
            Soleil est à 8° 17′ du Scorpion&nbsp;: aucun transit lent ne le
            touche exactement en 2027. Pluton s’en approche à un degré en mai,
            l’éclipse du 2 août le carre à un degré et demi, mais le vrai
            rendez-vous, Pluton carré Soleil, attend mars 2028. Un lecteur
            pressé qui regarderait mon signe solaire conclurait que 2027 est
            une année calme. La carte dit l’inverse&nbsp;: Uranus sur le
            Descendant toute l’année, Saturne sur la Lune au printemps.
          </p>

          <p className="leading-relaxed text-text/85">
            Ensuite, l’ordre. Mars rétrograde oppose mon Mars natal trois fois,
            de novembre 2026 à mai 2027, et c’est pourtant le cinquième de la
            liste&nbsp;: la vitesse prime. À l’inverse, Saturne ne touche ma
            Lune qu’une fois, le 1ᵉʳ avril, et c’est le deuxième&nbsp;: une
            planète lente sur un luminaire, dans une maison angulaire, pèse
            plus qu’un transit rapide répété. La règle sert à ça, à ne pas se
            laisser impressionner par le nombre de lignes.
          </p>

          <p className="leading-relaxed text-text/85">
            Ce que j’en fais, enfin. Je ne prédis rien. Je note que l’année
            porte sur l’autre, les partenariats et les contrats (Uranus en
            maison VII), sur les bases et la sécurité (Saturne en IV, sur la
            Lune), et que ces deux thèmes se croisent en avril et en juillet.
            Je relis les deux cours concernés, je prends mes dates, et je
            laisse l’année se charger de la suite. C’est exactement l’usage
            que je recommande à chacun&nbsp;: un calendrier d’attention, tenu
            avec rigueur, lu avec modestie.
          </p>
        </section>

        {/* ── 10. FAQ ──────────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="faq">
          <H2 id="faq">Questions fréquentes sur l’astrologie de 2027</H2>

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

        {/* ── SOURCES ──────────────────────────────────────── */}
        <section className="rounded-2xl border border-white/10 bg-black/20 p-6" aria-labelledby="sources">
          <h2 id="sources" className="text-sm font-semibold uppercase tracking-[0.18em] text-text/70">
            Sources
          </h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-text/75">
            <li>
              Positions, stations, changements de signe, aspects exacts et
              fenêtres de dates de naissance&nbsp;: calculs de l’auteur avec{" "}
              <Ext href="https://www.astro.com/swisseph/swephinfo_e.htm">
                Swiss Ephemeris
              </Ext>{" "}
              (Astrodienst), convertis en heure de Paris. Les heures sont
              exactes à quelques minutes près selon l’éphéméride utilisée.
            </li>
            <li>
              <Ext href="https://promenade.imcce.fr/fr/images/pdf/eclsol-2aout2027.pdf">
                Éclipse totale de Soleil du 2 août 2027
              </Ext>{" "}
              (IMCCE, Observatoire de Paris)&nbsp;: circonstances, bande de
              totalité, grandeur.
            </li>
            <li>
              <Ext href="https://eclipse.gsfc.nasa.gov/SEgoogle/SEgoogle2001/SE2027Feb06Agoogle.html">
                Annular Solar Eclipse of 2027 Feb 06
              </Ext>{" "}
              (NASA, Goddard Space Flight Center)&nbsp;: trajet et durée de
              l’annularité.
            </li>
            <li>
              Significations des transits par planète et par maison&nbsp;: le
              cours <A href="/transits">Transits&nbsp;: guide complet</A> de ce
              site.
            </li>
          </ul>
        </section>

        {/* ── CTA / MAILLAGE ───────────────────────────────── */}
        <section className="rounded-2xl border border-white/10 bg-black/20 p-6">
          <p className="text-sm text-text/60">Continuer la lecture</p>
          <div className="mt-3 space-y-3 leading-relaxed text-text/85">
            <p>
              Pour appliquer la méthode, il vous faut vos degrés&nbsp;: la page{" "}
              <A href="/theme-astral">thème astral</A> explique comment les
              obtenir et ce qu’ils contiennent. Le cours sur les{" "}
              <A href="/transits">transits</A> donne ensuite la lecture de
              chaque planète qui passe, et celui sur les{" "}
              <A href="/retrogrades">planètes rétrogrades</A> explique pourquoi
              un transit repasse trois fois.
            </p>
            <p>
              Les dates fines de l’année sont dans{" "}
              <A href="/blog/mercure-retrograde-2027-dates">
                Mercure rétrograde 2027
              </A>{" "}
              et dans le{" "}
              <A href="/blog/calendrier-pleine-lune-nouvelle-lune-2026-2027">
                calendrier lunaire 2026-2027
              </A>
              . Le{" "}
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
