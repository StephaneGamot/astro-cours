import Link from "next/link";
import type { Metadata } from "next";

/**
 * Page “Aspects astrologiques”
 * - Cours premium : définitions + logique + orbes + usages concrets
 * - Sommaire + SEO + JSON-LD
 * - Table récap + cartes détaillées
 */

export const metadata: Metadata = {
  title: "Aspects astrologiques — Conjonction, sextile, carré, trigone, opposition",
  description:
    "Cours clair et complet sur les aspects : conjonction, sextile, carré, trigone, opposition (et plus). Définition, orbes, effets, exemples et conseils d’interprétation.",
  alternates: { canonical: "/aspects" },
  openGraph: {
    title: "Aspects astrologiques — Cours complet",
    description:
      "Définition + orbes + logique et interprétation des aspects majeurs : conjonction, sextile, carré, trigone, opposition.",
    url: "/aspects",
    type: "article",
  },
};

type AspectTone = "harmonique" | "tendu" | "neutre";
type AspectKind = "majeur" | "mineur";

type Aspect = {
  slug: string;
  nom: string;
  angle: string; // "0°" etc
  kind: AspectKind;
  tone: AspectTone;
  keywords: string[];
  definition: string;
  why: string; // “pourquoi ça marche comme ça”
  orbs: {
    natal: string;
    transit: string;
    notes?: string[];
  };
  howToRead: string[]; // méthode d'interprétation
  examples: string[]; // exemples concrets
  pitfalls: string[]; // erreurs fréquentes
};

const pill =
  "rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-text/90";
const card = "rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur";
const h2 =
  "font-serif text-2xl sm:text-3xl flex items-center gap-3";
const dot = "inline-block h-2 w-2 rounded-full bg-white/60";

function toneBadge(tone: AspectTone) {
  switch (tone) {
    case "harmonique":
      return "bg-emerald-500/10 text-emerald-200 border-emerald-400/20";
    case "tendu":
      return "bg-rose-500/10 text-rose-200 border-rose-400/20";
    default:
      return "bg-sky-500/10 text-sky-200 border-sky-400/20";
  }
}

function kindBadge(kind: AspectKind) {
  return kind === "majeur"
    ? "bg-violet-500/10 text-violet-200 border-violet-400/20"
    : "bg-amber-500/10 text-amber-200 border-amber-400/20";
}

/**
 * Aspects “cours”
 * (Tu pourras ensuite les mettre en JSON si tu veux, mais là on va vite/propre.)
 */
const ASPECTS: Aspect[] = [
  {
    slug: "conjonction",
    nom: "Conjonction",
    angle: "0°",
    kind: "majeur",
    tone: "neutre",
    keywords: ["fusion", "intensification", "focus", "nouveau cycle"],
    definition:
      "Deux planètes sont au même endroit (ou très proches) : leurs fonctions se mélangent. La conjonction amplifie, concentre et “oblige” à intégrer les deux énergies ensemble.",
    why:
      "À 0°, les symboles n’ont plus de distance : on ne peut pas les séparer. Cela crée un point de densité psychique (natal) ou un événement/virage (transit).",
    orbs: {
      natal: "jusqu’à ~8° (10° si Soleil/Lune)",
      transit: "plutôt serré : ~0–2° (3° max si fort)",
      notes: [
        "Plus l’orbe est serré, plus l’aspect est “audible”.",
        "Une conjonction Soleil/Lune est souvent très structurante.",
      ],
    },
    howToRead: [
      "Identifier les 2 fonctions (planètes) + leur nature (personnelle/sociale/transpersonnelle).",
      "Regarder le signe (style) et la maison (domaine de vie).",
      "Se demander : “qui mène ?” (dignités, vitesse, aspects supplémentaires).",
      "En transit : repérer le thème activé (maison touchée, maîtres concernés).",
    ],
    examples: [
      "Mercure–Mars : parole directe, esprit combatif, décision rapide (ou nervosité).",
      "Vénus–Neptune : idéal amoureux, inspiration artistique (ou illusions).",
      "Saturne–Soleil : consolidation, responsabilités, maturité (ou lourdeur).",
    ],
    pitfalls: [
      "Croire que c’est “bon” ou “mauvais” : c’est surtout puissant.",
      "Oublier l’orbe (une conjonction large peut être secondaire).",
      "Ne pas distinguer natal (structure) vs transit (période).",
    ],
  },
  {
    slug: "sextile",
    nom: "Sextile",
    angle: "60°",
    kind: "majeur",
    tone: "harmonique",
    keywords: ["opportunité", "coopération", "fluidité", "talent"],
    definition:
      "Le sextile crée une facilité dynamique : les planètes se comprennent et ouvrent une porte. C’est souvent un potentiel qui demande un petit effort pour être saisi.",
    why:
      "À 60°, les énergies sont compatibles : elles dialoguent. Le sextile est moins “automatique” que le trigone : il récompense l’initiative.",
    orbs: {
      natal: "~3–5°",
      transit: "~1–2°",
      notes: [
        "Aspect d’opportunité : il agit si on s’en sert.",
        "Très utile pour la stratégie et le timing.",
      ],
    },
    howToRead: [
      "Repérer l’opportunité : quel domaine (maisons) et quel “outil” (planètes) ?",
      "Traduire en action concrète : qu’est-ce que je peux faire maintenant ?",
      "En transit : observer les synchronicités, les rencontres utiles, les portes qui s’ouvrent.",
    ],
    examples: [
      "Mercure sextile Jupiter : idées larges, études, chance dans les démarches.",
      "Mars sextile Saturne : discipline, efficacité, travail solide.",
      "Vénus sextile Uranus : renouveau relationnel, créativité, surprises agréables.",
    ],
    pitfalls: [
      "Attendre que “ça tombe du ciel” : le sextile demande d’agir.",
      "Le surestimer : c’est un levier, pas un tsunami.",
    ],
  },
  {
    slug: "carre",
    nom: "Carré",
    angle: "90°",
    kind: "majeur",
    tone: "tendu",
    keywords: ["friction", "défi", "croissance", "réajustement"],
    definition:
      "Le carré met les planètes en tension : elles veulent des choses différentes, au même moment. Ça pousse à agir, à trancher, à évoluer.",
    why:
      "À 90°, c’est une différence de rythme et de méthode : la tension est un moteur. Le carré crée de la croissance par confrontation et ajustement.",
    orbs: {
      natal: "~5–7°",
      transit: "~1–2° (3° si très marquant)",
      notes: [
        "Un carré bien intégré devient une force : compétence, endurance, maîtrise.",
      ],
    },
    howToRead: [
      "Nommer le conflit : quelles fonctions se contredisent ?",
      "Voir le terrain : maisons impliquées → où ça coince ?",
      "Chercher la 3e voie : une règle, une stratégie, une maturité.",
      "En transit : réduire la dispersion et choisir une priorité.",
    ],
    examples: [
      "Soleil carré Saturne : pression, maturité, test de solidité.",
      "Vénus carré Mars : désir vs harmonie, tension relationnelle créatrice.",
      "Mercure carré Neptune : confusion mentale, besoin de vérifier les faits.",
    ],
    pitfalls: [
      "Le vivre comme une punition : c’est un entraînement.",
      "Partir en réaction impulsive : le carré veut une décision consciente.",
    ],
  },
  {
    slug: "trigone",
    nom: "Trigone",
    angle: "120°",
    kind: "majeur",
    tone: "harmonique",
    keywords: ["aisance", "talent", "fluidité", "alignement"],
    definition:
      "Le trigone indique une circulation très fluide : les planètes s’entraident naturellement. Souvent un talent, une facilité, un “couloir de réussite”.",
    why:
      "À 120°, les énergies sont du même élément (souvent) : elles parlent le même langage. Ça coule — parfois au point d’oublier de développer.",
    orbs: {
      natal: "~6–8°",
      transit: "~1–2°",
      notes: [
        "Un trigone est puissant, mais peut devenir “paresseux” si on ne le cultive pas.",
      ],
    },
    howToRead: [
      "Identifier le talent : qu’est-ce qui se fait facilement ?",
      "Mettre un objectif : transformer l’aisance en résultat.",
      "En transit : excellent pour lancer, harmoniser, finaliser.",
    ],
    examples: [
      "Soleil trigone Jupiter : confiance, expansion, optimisme, soutien.",
      "Lune trigone Vénus : douceur relationnelle, sens du lien.",
      "Mars trigone Uranus : audace, innovation, efficacité rapide.",
    ],
    pitfalls: [
      "Confondre facilité et destin : il faut quand même agir.",
      "Ne pas muscler ce qui est “facile” : sinon stagnation.",
    ],
  },
  {
    slug: "opposition",
    nom: "Opposition",
    angle: "180°",
    kind: "majeur",
    tone: "tendu",
    keywords: ["miroir", "polarité", "projection", "équilibre"],
    definition:
      "L’opposition met face à face deux énergies : on oscille, on projette, on apprend par l’autre. Elle demande un équilibre conscient.",
    why:
      "À 180°, c’est l’axe : deux pôles se répondent. L’opposition révèle ce qui manque d’intégration et pousse à la coopération plutôt qu’au bras de fer.",
    orbs: {
      natal: "~6–8°",
      transit: "~1–2° (3° si fort)",
      notes: [
        "Souvent visible dans le relationnel : “l’autre me montre quelque chose”.",
      ],
    },
    howToRead: [
      "Nommer les deux pôles (planètes) et leur besoin.",
      "Identifier la projection : qu’est-ce que je mets sur l’autre ?",
      "Chercher la médiation : rythme, règles, alternance, dialogue.",
      "En transit : négociation, choix, repositionnement.",
    ],
    examples: [
      "Soleil opposition Lune : équilibre vie perso/vie publique, besoins vs volonté.",
      "Mars opposition Saturne : accélérer vs freiner, apprentissage de la stratégie.",
      "Vénus opposition Uranus : besoin de liberté vs besoin de lien.",
    ],
    pitfalls: [
      "Rester dans le ping-pong : un jour l’un, un jour l’autre.",
      "Chercher un coupable : l’opposition veut une intégration.",
    ],
  },

  // Bonus (facultatif mais pro)
  {
    slug: "quinconce",
    nom: "Quinconce",
    angle: "150°",
    kind: "mineur",
    tone: "neutre",
    keywords: ["ajustement", "inconfort", "réglage fin", "hygiène"],
    definition:
      "Le quinconce demande un ajustement : les planètes ne se comprennent pas naturellement. On progresse par réglages, organisation et écoute du corps/du réel.",
    why:
      "À 150°, les symboles sont “hors phase”. C’est moins spectaculaire, mais très parlant dans les détails : habitudes, santé, méthode, priorités.",
    orbs: {
      natal: "~2–3°",
      transit: "~0–1°",
      notes: ["Aspect redoutable pour affiner une pratique ou corriger une dérive."],
    },
    howToRead: [
      "Repérer ce qui est mal réglé : où je compense ?",
      "Simplifier : une action petite mais répétée.",
      "En transit : bon pour corriger, réorganiser, améliorer la routine.",
    ],
    examples: [
      "Mercure quinconce Saturne : clarifier, structurer, réduire le bruit mental.",
      "Vénus quinconce Pluton : régler un attachement, un rapport au contrôle.",
    ],
    pitfalls: ["Le prendre pour un “drame” : c’est souvent un réglage fin."],
  },
];

/* ---------------- SEO helpers ---------------- */
function aspectHref(a: Aspect) {
  return `#${a.slug}`;
}

export default function AspectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 pb-16 pt-10 text-text">
      {/* HERO */}
      <header className="mb-10 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5">
        <div className="p-7 sm:p-10">
          <p className="text-xs uppercase tracking-[0.18em] text-muted">
            Cours d’astrologie — Aspects
          </p>

          <h1 className="mt-3 font-serif text-4xl sm:text-5xl">
            Conjonction, sextile, carré, trigone, opposition…
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-text/80">
            Les aspects décrivent <span className="text-text">la relation</span> entre deux planètes :
            coopération, tension, opportunité, blocage ou maturation. Ici : définitions, orbes,
            logique et méthode d’interprétation (natal & transits).
          </p>

          {/* Sommaire */}
          <nav aria-label="Sommaire" className="mt-6 flex flex-wrap gap-2">
            {ASPECTS.map((a) => (
              <a key={a.slug} href={aspectHref(a)} className={`${pill} hover:bg-white/10`}>
                {a.nom}
              </a>
            ))}
          </nav>
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-emerald-400/35 via-sky-400/35 to-rose-400/35" />
      </header>

      {/* Récap rapide */}
      <section className="mb-10 grid gap-4 sm:grid-cols-2">
        <div className={card}>
          <h2 className="font-serif text-2xl">Idée clé</h2>
          <p className="mt-3 text-sm leading-relaxed text-text/80">
            Un aspect n’est pas “bien” ou “mal” : il décrit une{" "}
            <span className="text-text">dynamique</span>. La qualité vient de la façon dont on l’intègre
            (signe, maison, dignités, aspects secondaires, conscience).
          </p>
          <ul className="mt-4 space-y-2 text-sm text-text/80">
            <li>• Harmonique = facilite, ouvre, soutient.</li>
            <li>• Tendu = pousse, teste, structure, fait grandir.</li>
            <li>• Neutre = amplifie / demande un focus (souvent la conjonction).</li>
          </ul>
        </div>

        <div className={card}>
          <h2 className="font-serif text-2xl">Orbes (règle simple)</h2>
          <p className="mt-3 text-sm leading-relaxed text-text/80">
            Plus l’orbe est serré, plus l’aspect est puissant. En transit, on garde des orbes plus stricts.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-xs uppercase tracking-wide text-muted">Natal</p>
              <p className="mt-1 text-sm text-text/85">tolère plus large (selon planètes)</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-xs uppercase tracking-wide text-muted">Transits</p>
              <p className="mt-1 text-sm text-text/85">privilégie serré (0–2°)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Table récap pro */}
      <section className={`${card} mb-10`}>
        <h2 className="font-serif text-2xl">Tableau récapitulatif</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[720px] border-separate border-spacing-0">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-muted">
                <th className="border-b border-white/10 py-3 pr-4">Aspect</th>
                <th className="border-b border-white/10 py-3 pr-4">Angle</th>
                <th className="border-b border-white/10 py-3 pr-4">Type</th>
                <th className="border-b border-white/10 py-3 pr-4">Tonalité</th>
                <th className="border-b border-white/10 py-3 pr-4">Mots-clés</th>
              </tr>
            </thead>
            <tbody>
              {ASPECTS.map((a) => (
                <tr key={a.slug} className="align-top">
                  <td className="border-b border-white/10 py-4 pr-4">
                    <a href={aspectHref(a)} className="font-serif text-lg hover:underline">
                      {a.nom}
                    </a>
                  </td>
                  <td className="border-b border-white/10 py-4 pr-4 text-sm text-text/80">
                    {a.angle}
                  </td>
                  <td className="border-b border-white/10 py-4 pr-4">
                    <span className={`inline-flex rounded-full border px-3 py-1 text-xs ${kindBadge(a.kind)}`}>
                      {a.kind}
                    </span>
                  </td>
                  <td className="border-b border-white/10 py-4 pr-4">
                    <span className={`inline-flex rounded-full border px-3 py-1 text-xs ${toneBadge(a.tone)}`}>
                      {a.tone}
                    </span>
                  </td>
                  <td className="border-b border-white/10 py-4 pr-4">
                    <div className="flex flex-wrap gap-2">
                      {a.keywords.slice(0, 4).map((k) => (
                        <span key={k} className={pill}>
                          {k}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Cartes détaillées */}
      <div className="space-y-8">
        {ASPECTS.map((a) => (
          <section key={a.slug} id={a.slug} className={`scroll-mt-24 ${card}`}>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted">Aspect</p>
                <h2 className="mt-2 font-serif text-4xl">{a.nom}</h2>

                <div className="mt-3 flex flex-wrap gap-2">
                  <span className={pill}>Angle : {a.angle}</span>
                  <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm ${kindBadge(a.kind)}`}>
                    <span className="h-2 w-2 rounded-full bg-white/60" />
                    {a.kind}
                  </span>
                  <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm ${toneBadge(a.tone)}`}>
                    <span className="h-2 w-2 rounded-full bg-white/60" />
                    {a.tone}
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {a.keywords.map((k) => (
                    <span key={k} className={pill}>
                      {k}
                    </span>
                  ))}
                </div>
              </div>

              <a href="#top" className={`${pill} hover:bg-white/10`}>
                ↑ Haut
              </a>
            </div>

            {/* Définition */}
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
                <h3 className={h2}>
                  <span className={dot} /> Définition
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text/85">{a.definition}</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
                <h3 className={h2}>
                  <span className={dot} /> Pourquoi ça marche comme ça ?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text/85">{a.why}</p>
              </div>
            </div>

            {/* Orbes */}
            <div className="mt-4 rounded-3xl border border-white/10 bg-black/20 p-6">
              <h3 className={h2}>
                <span className={dot} /> Orbes (repères)
              </h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-wide text-muted">Natal</p>
                  <p className="mt-1 text-sm text-text/85">{a.orbs.natal}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-wide text-muted">Transits</p>
                  <p className="mt-1 text-sm text-text/85">{a.orbs.transit}</p>
                </div>
              </div>
              {a.orbs.notes?.length ? (
                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-text/80">
                  {a.orbs.notes.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              ) : null}
            </div>

            {/* Méthode + Exemples + Erreurs */}
            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className={h2}>
                  <span className={dot} /> Comment lire
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-text/85">
                  {a.howToRead.map((x) => (
                    <li key={x} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className={h2}>
                  <span className={dot} /> Exemples
                </h3>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
                  {a.examples.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className={h2}>
                  <span className={dot} /> Erreurs fréquentes
                </h3>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
                  {a.pitfalls.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-14 border-t border-white/10 pt-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-text/70">
            Étape suivante : appliquer les aspects aux <span className="text-text">transits</span> (cas pratiques).
          </p>
          <div className="flex flex-wrap gap-2">
            <Link className={`${pill} hover:bg-white/10`} href="/#zodiaque">Signes</Link>
            <Link className={`${pill} hover:bg-white/10`} href="/#planetes">Planètes</Link>
            <Link className={`${pill} hover:bg-white/10`} href="/#maisons">Maisons</Link>
          </div>
        </div>
      </footer>

      {/* JSON-LD SEO */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Aspects astrologiques — Conjonction, sextile, carré, trigone, opposition",
            description:
              "Cours complet sur les aspects : définitions, orbes, logique, méthode d’interprétation et exemples.",
            mainEntityOfPage: { "@type": "WebPage", "@id": "/aspects" },
            author: { "@type": "Person", name: "Stéphane Gamot" },
          }),
        }}
      />
    </main>
  );
}
