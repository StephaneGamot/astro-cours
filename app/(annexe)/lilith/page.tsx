import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

/**
 * Page "Lilith / Lune Noire" — cours premium
 * - SEO + JSON-LD
 * - Sommaire (ancres)
 * - Sections pédagogiques + repères d'interprétation
 * - Style cohérent avec tes pages (cards, pills, glow)
 */

export const metadata: Metadata = {
  title: "Lilith (Lune Noire) — Vraie vs moyenne, sens & méthode",
  description:
    "Lilith (Lune Noire) en astrologie : définition, vraie vs moyenne, symbolique et lecture par signe, maison et aspects. Explorez notre cours complet !",
  alternates: { canonical: "https://www.astro-cours.com/lilith" },
  openGraph: {
    title: "Lilith (Lune Noire) — Vraie vs moyenne, sens & méthode",
    description:
      "Lilith (Lune Noire) en astrologie : définition, vraie vs moyenne, symbolique et lecture par signe, maison et aspects. Explorez notre cours complet !",
    url: "https://www.astro-cours.com/lilith",
    type: "article",
    siteName: "Astro Cours",
    locale: "fr_FR",
    images: [{ url: "https://www.astro-cours.com/og/cover.jpg", width: 1200, height: 630, alt: "Astro Cours" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lilith (Lune Noire) — Vraie vs moyenne, sens & méthode",
    description:
      "Lilith (Lune Noire) en astrologie : définition, vraie vs moyenne, symbolique et lecture par signe, maison et aspects. Explorez notre cours complet !",
    images: ["https://www.astro-cours.com/og/cover.jpg"],
  },
};


const pill =
  "rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-text/90 hover:bg-white/10";
const card =
  "rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur";
const h2 =
  "font-serif text-2xl sm:text-3xl flex items-center gap-3 scroll-mt-24";
const dot = "inline-block h-2 w-2 rounded-full bg-violet-400/70";
const accentBorder = "border-violet-400/25";
const accentGlow = "shadow-[0_0_0_1px_rgba(167,139,250,0.12)]";
const accentLine = "bg-violet-400/40";
const accentRing = "focus-visible:ring-violet-400/35";

const SECTIONS = [
  { id: "definition", label: "Définition" },
  { id: "vraie-moyenne", label: "Vraie vs Moyenne" },
  { id: "symbolique", label: "Symbolique" },
  { id: "methodo", label: "Méthode" },
  { id: "signe", label: "Lilith par signe" },
  { id: "maison", label: "Lilith par maison" },
  { id: "aspects", label: "Lilith en aspects" },
  { id: "erreurs", label: "Erreurs fréquentes" },
  { id: "exemples", label: "Cas pratiques" },
];

function Anchor({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <a href={`#${id}`} className={pill}>
      {children}
    </a>
  );
}

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className={h2}>
      <span className={dot} />
      {children}
    </h2>
  );
}

export default function LilithPage() {
  // Optionnel : mets cette image dans public/images/points/lilith.webp
  const heroSrc = "/images/points/lilith.webp";

  return (
    <main id="main-content" className="mx-auto max-w-5xl px-6 pb-16 pt-10 text-text">
      {/* HERO */}
      <header className={`mb-10 overflow-hidden rounded-[2.5rem] border ${accentBorder} bg-white/5 ${accentGlow}`}>
        <div className="grid gap-6 p-7 sm:grid-cols-[1.2fr_.8fr] sm:p-10">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted">
              Cours d'astrologie — Points sensibles
            </p>

            <h1 className="mt-3 font-serif text-4xl sm:text-5xl">
              Lilith <span className="text-text/70">(Lune Noire)</span>
            </h1>

            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-text/80">
              Lilith n'est pas une planète : c'est un <span className="text-text">point</span> (lié à l'orbite lunaire)
              qui met en lumière ce qui est <span className="text-text">brut, intolérable, non négociable</span> :
              désir, manque, rejet, honte, pulsion de vérité, et la manière dont on reprend du pouvoir
              quand on cesse de &quot;faire semblant&quot;.
            </p>

            {/* Sommaire */}
            <nav aria-label="Sommaire" className="mt-6 flex flex-wrap gap-2">
              {SECTIONS.map((s) => (
                <Anchor key={s.id} id={s.id}>
                  {s.label}
                </Anchor>
              ))}
            </nav>
          </div>

          {/* Image hero (optionnelle) */}
          <div className="relative hidden sm:block">
            <div className={`relative h-full min-h-[260px] overflow-hidden rounded-3xl border ${accentBorder} bg-black/20`}>
              <Image
                src={heroSrc}
                alt="Illustration Lilith (Lune Noire)"
                fill
                className="object-cover"
                sizes="420px"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
              <div className={`pointer-events-none absolute bottom-0 left-0 h-1 w-full ${accentLine}`} />
            </div>
          </div>
        </div>
        <div className={`h-1 w-full ${accentLine}`} />
      </header>

      {/* Définition SEO */}
      <div className="mt-8 rounded-2xl border border-violet-400/20 bg-violet-400/[0.04] px-6 py-5">
        <p className="text-sm font-semibold uppercase tracking-widest text-violet-300/80">Définition</p>
        <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
          <strong>Lilith</strong> (ou <strong>Lune Noire</strong>) est un point fictif en astrologie correspondant à l'apogée de l'orbite lunaire. Elle révèle dans le <Link href="/#theme-natal">thème natal</Link> les zones de désir brut, de vérité intime et de limites non négociables.
        </p>
      </div>

      {/* APP Intro */}
      <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
        <strong>Lilith en astrologie</strong> fascine autant qu'elle intrigue, mais rares sont les cours qui l'expliquent clairement. Faut-il utiliser la Lilith vraie ou moyenne ? Que signifie-t-elle dans chaque signe ou maison ? Ce guide complet vous donne une méthode fiable pour interpréter la Lune Noire dans votre thème, avec des exemples concrets et des repères professionnels.
      </p>

      {/* DEFINITION */}
      <section className="mb-10">
        <H2 id="definition">Qu'est-ce que Lilith (Lune Noire) en astrologie ?</H2>
        <div className={`${card} mt-4`}>
          <p className="text-sm leading-relaxed text-text/85">
            En astrologie, <span className="text-text">Lilith / Lune Noire</span> correspond à l'<span className="text-text">apogée</span>
            de l'orbite lunaire (le point le plus éloigné de la Terre). C'est un repère symbolique :
            <span className="text-text"> le lieu du manque</span> (ce qu'on ne veut plus mendier),
            et du <span className="text-text">désir non domestiqué</span> (ce qu'on refuse de réduire pour plaire).
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-xs uppercase tracking-wide text-muted">Fonction</p>
              <p className="mt-2 text-sm text-text/85">
                Mettre en évidence un endroit &quot;sensible&quot; : vérité, pulsion, limite, non-négociable.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-xs uppercase tracking-wide text-muted">Quand elle pique</p>
              <p className="mt-2 text-sm text-text/85">
                Quand on se renie, qu'on se censure, ou qu'on s'abandonne pour garder l'amour/la paix.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-xs uppercase tracking-wide text-muted">Quand elle élève</p>
              <p className="mt-2 text-sm text-text/85">
                Quand on assume une vérité intime, sans violence, mais sans compromis intérieur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VRAIE VS MOYENNE */}
      <section className="mb-10">
        <H2 id="vraie-moyenne">Quelle différence entre Lilith vraie et Lilith moyenne ?</H2>
        <div className={`${card} mt-4`}>
          <p className="text-sm leading-relaxed text-text/85">
            Tu verras souvent deux positions : <span className="text-text">Lilith vraie</span> et{" "}
            <span className="text-text">Lilith moyenne</span>. Elles sont proches, mais pas identiques.
          </p>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className={`rounded-3xl border ${accentBorder} bg-white/5 p-5 ${accentGlow}`}>
              <p className="text-xs uppercase tracking-wide text-muted">Vraie (True / Osculating)</p>
              <p className="mt-2 text-sm leading-relaxed text-text/85">
                Plus "nerveuse" : peut bouger plus vite, donner des nuances, parfois plus tranchée dans le vécu.
                Utile si tu veux une lecture fine.
              </p>
            </div>
            <div className={`rounded-3xl border ${accentBorder} bg-white/5 p-5 ${accentGlow}`}>
              <p className="text-xs uppercase tracking-wide text-muted">Moyenne (Mean)</p>
              <p className="mt-2 text-sm leading-relaxed text-text/85">
                Plus "stable" : excellente pour enseigner et pour des grilles pédagogiques.
                Si tu hésites : commence par la moyenne.
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm text-text/75">
            Conseil : dans ton site, affiche la <span className="text-text">moyenne</span> par défaut, et propose un toggle &quot;vraie&quot;.
          </p>
        </div>
      </section>

      {/* Mythologie & traditions */}
      <section className="mb-10">
        <H2 id="mythologie">D'où vient le mythe de Lilith en astrologie ?</H2>

        <div className={`${card} mt-4`}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-xs uppercase tracking-wide text-muted">Origines du nom</p>
              <p className="mt-2 text-sm leading-relaxed text-text/85">
                Le mot &quot;Lilith&quot; apparaît dans des traditions anciennes du Proche-Orient (racines liées à la nuit / aux esprits
                nocturnes selon les cultures). En astrologie moderne, le terme a été repris pour nommer la &quot;Lune Noire&quot;
                (un point astronomique), mais il ne s&apos;agit pas d&apos;une planète ni d&apos;un astre.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-xs uppercase tracking-wide text-muted">Bible : attention aux raccourcis</p>
              <p className="mt-2 text-sm leading-relaxed text-text/85">
                Le personnage &quot;Lilith&quot; n&apos;est pas présenté clairement comme un personnage biblique dans la Bible canonique.
                On le rencontre surtout dans la tradition juive post-biblique (commentaires, midrash, folklore).
                Certaines traductions d&apos;Isaïe 34:14 utilisent parfois &quot;Lilith&quot;, mais selon les versions,
                cela peut être traduit autrement (créature nocturne, hibou, etc.).
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="text-xs uppercase tracking-wide text-muted">Pourquoi c&apos;est intéressant (côté cours)</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-text/85">
              <li>
                La figure mythique de Lilith sert de <span className="text-text">miroir culturel</span> : désir, transgression,
                autonomie, rejet, pouvoir.
              </li>
              <li>
                En astrologie, on ne &quot;prouve&quot; pas un mythe : on l&apos;utilise comme <span className="text-text">langage symbolique</span>
                pour enseigner des dynamiques psychologiques.
              </li>
              <li>
                Méthode pro : garder la distinction entre <span className="text-text">astronomie</span> (point orbital) et{" "}
                <span className="text-text">mythologie</span> (récits).
              </li>
            </ul>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {[
              ["Mythe", "Récit / figure culturelle (désir, rejet, autonomie…)."],
              ["Astro", "Point (apogée lunaire) : zone sensible, non-négociable, vérité intime."],
              ["Lecture", "Signe = style • Maison = domaine • Aspects = déclencheurs / intégration."],
            ].map(([t, v]) => (
              <div key={t} className={`rounded-3xl border ${accentBorder} bg-white/5 p-5 ${accentGlow}`}>
                <p className="text-xs uppercase tracking-wide text-muted">{t}</p>
                <p className="mt-2 text-sm text-text/85">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYMBOLIQUE */}
      <section className="mb-10">
        <H2 id="symbolique">Que symbolise Lilith dans un thème natal ?</H2>
        <div className={`${card} mt-4`}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-xs uppercase tracking-wide text-muted">Thèmes</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-text/85">
                <li>Le désir brut et la vérité intime (ce qu'on ne &quot;réduit&quot; plus).</li>
                <li>La honte, le rejet, l'ombre sociale (ce qui a été jugé/interdit).</li>
                <li>Le pouvoir personnel : reprendre son axe sans écraser l'autre.</li>
                <li>La frontière : ce que je ne négocie plus, même &quot;gentiment&quot;.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-xs uppercase tracking-wide text-muted">Le piège</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-text/85">
                <li>Se couper / se durcir : &quot;je n'ai besoin de personne&quot;.</li>
                <li>Provoquer par défense : tester l'autre avant qu'il ne parte.</li>
                <li>Confondre vérité et violence (dire vrai ≠ blesser).</li>
                <li>Répéter le rejet : choisir ce qui n'est pas disponible.</li>
              </ul>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="text-xs uppercase tracking-wide text-muted">Phrase mémo</p>
            <p className="mt-2 font-serif text-xl text-text/90">
              « Là où est Lilith, je ne veux plus mendier. Je veux être vrai. »
            </p>
          </div>
        </div>
      </section>

      {/* METHODO */}
      <section className="mb-10">
        <H2 id="methodo">Comment interpréter Lilith dans un thème astral ?</H2>
        <div className={`${card} mt-4`}>
          <ol className="space-y-3 text-sm leading-relaxed text-text/85">
            <li>
              <span className="text-text">1) Signe</span> : le style du désir / de la vérité (comment Lilith s'exprime).
            </li>
            <li>
              <span className="text-text">2) Maison</span> : la zone de vie où ça se joue (où tu refuses le compromis).
            </li>
            <li>
              <span className="text-text">3) Aspects</span> : la manière dont le thème s'active (tension / facilité / obsession / intégration).
            </li>
            <li>
              <span className="text-text">4) Dispositrice</span> (maître du signe de Lilith) : &quot;qui pilote la scène&quot;.
            </li>
            <li>
              <span className="text-text">5) Niveau</span> : blessure → défense → conscience → puissance calme.
            </li>
          </ol>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {[
              ["Blessure", "Je me renie pour être accepté."],
              ["Défense", "Je deviens dur / je teste / je coupe."],
              ["Intégration", "Je dis vrai, je pose une limite, je reste humain."],
            ].map(([t, v]) => (
              <div key={t} className={`rounded-3xl border ${accentBorder} bg-white/5 p-5 ${accentGlow}`}>
                <p className="text-xs uppercase tracking-wide text-muted">{t}</p>
                <p className="mt-2 text-sm text-text/85">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAR SIGNE */}
      <section className="mb-10">
        <H2 id="signe">Que signifie Lilith dans chaque signe du zodiaque ?</H2>
        <div className={`${card} mt-4`}>
          <p className="text-sm text-text/75">
            Ici c'est une base de cours. Sur ton site, tu pourras générer une page dynamique comme tes signes.
          </p>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {[
              ["Bélier", 'Vérité directe, refus de la soumission. Ombre : impulsivité, "je prends ou je casse".'],
              ["Taureau", "Désir intense de sécurité/plaisir. Ombre : fixation, jalousie, contrôle par la matière."],
              ["Gémeaux", "Vérité mentale, besoin de dire. Ombre : double discours, agitation, provocation verbale."],
              ["Cancer", "Vérité émotionnelle, besoin de protection. Ombre : fusion/rettrait, tests affectifs."],
              ["Lion", "Vérité du cœur, fierté. Ombre : drame, besoin d'être choisi/adoré."],
              ["Vierge", "Vérité du discernement. Ombre : hyper-contrôle, critique, pureté impossible."],
              ["Balance", "Vérité relationnelle. Ombre : dépendance, séduction, peur de déplaire."],
              ["Scorpion", "Vérité des profondeurs. Ombre : possession, secrets, pouvoir, obsession."],
              ["Sagittaire", `Vérité du sens. Ombre : dogmatisme, fuite, "j'ai raison".`],
              ["Capricorne", "Vérité de la dignité/structure. Ombre : froid, exigence, dureté."],
              ["Verseau", "Vérité de liberté. Ombre : détachement, rupture, supériorité."],
              ["Poissons", "Vérité mystique. Ombre : confusion, sauvetage, dissolution des limites."],
            ].map(([sign, txt]) => (
              <div key={sign} className="rounded-3xl border border-white/10 bg-black/20 p-5">
                <p className="font-serif text-2xl">{sign}</p>
                <p className="mt-2 text-sm leading-relaxed text-text/85">{txt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAR MAISON */}
      <section className="mb-10">
        <H2 id="maison">Lilith dans les 12 maisons astrologiques : où agit-elle ?</H2>
        <div className={`${card} mt-4`}>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Maison I", "Image / identité : je refuse d'être défini par les autres."],
              ["Maison II", "Valeur / argent : je ne mendie plus la sécurité."],
              ["Maison III", "Parole : je dis ce que j'ai toujours retenu."],
              ["Maison IV", "Famille : loyautés invisibles, besoin d'un refuge vrai."],
              ["Maison V", "Amour / création : désir assumé, peur d'être jugé."],
              ["Maison VI", "Contrôle / routine : exigence, rapport au corps et au service."],
              ["Maison VII", "Couple : tests, peur de l'abandon, vérité relationnelle."],
              ["Maison VIII", "Intimité : fusion/pouvoir, transformation, secrets."],
              ["Maison IX", "Croyances : vérité personnelle, rejet des dogmes."],
              ["Maison X", 'Statut : dignité, réputation, "je ne me vends plus".'],
              ["Maison XI", "Groupe : appartenance, différence, liberté."],
              ["Maison XII", "Inconscient : exil intérieur, compassion, limites à reconstruire."],
            ].map(([m, txt]) => (
              <div key={m} className={`rounded-3xl border ${accentBorder} bg-white/5 p-5 ${accentGlow}`}>
                <p className="text-xs uppercase tracking-wide text-muted">{m}</p>
                <p className="mt-2 text-sm text-text/85">{txt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ASPECTS */}
      <section className="mb-10">
        <H2 id="aspects">Comment lire les aspects de Lilith aux planètes ?</H2>
        <div className={`${card} mt-4`}>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Conjonction", 'Sujet central : intensifie et rend "inévitable" la thématique.'],
              ["Opposition", "Projection : l'autre révèle ce que je n'assume pas encore."],
              ["Carré", "Tension : déclencheurs, crises utiles, nécessité d'intégrer."],
              ["Trigone", "Fluidité : talent de vérité, mais risque de confort (pas de travail conscient)."],
              ["Sextile", "Opportunité : ouverture par choix, apprentissage progressif."],
            ].map(([asp, txt]) => (
              <div key={asp} className="rounded-3xl border border-white/10 bg-black/20 p-5">
                <p className="font-serif text-2xl">{asp}</p>
                <p className="mt-2 text-sm leading-relaxed text-text/85">{txt}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="text-xs uppercase tracking-wide text-muted">Astuce pro</p>
            <p className="mt-2 text-sm text-text/85">
              Commence par les aspects à <span className="text-text">Soleil</span>, <span className="text-text">Lune</span>,{" "}
              <span className="text-text">Vénus</span> et <span className="text-text">Mars</span> : ce sont ceux qui parlent
              le plus directement du vécu (identité, sécurité, désir, relation, pulsion).
            </p>
          </div>
        </div>
      </section>

      {/* ERREURS */}
      <section className="mb-10">
        <H2 id="erreurs">Quelles erreurs éviter avec Lilith en astrologie ?</H2>
        <div className={`${card} mt-4`}>
          <ul className="list-disc space-y-2 pl-5 text-sm text-text/85">
            <li>Faire de Lilith &quot;le mal&quot; : c'est un point de vérité, pas une condamnation.</li>
            <li>La réduire à la sexualité : elle parle surtout de désir + limite + dignité.</li>
            <li>Oublier la dispositrice : le maître du signe explique &quot;comment ça se gère&quot;.</li>
            <li>Interpréter sans la maison : sans contexte de vie, on part dans l'abstrait.</li>
            <li>Lire Lilith seule : elle fonctionne mieux avec Lune / Vénus / Mars / Pluton.</li>
          </ul>
        </div>
      </section>

      {/* EXEMPLES */}
      <section className="mb-10">
        <H2 id="exemples">Exemples concrets d'interprétation de Lilith</H2>
        <div className={`${card} mt-4`}>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [
                "Lilith en Maison VII",
                "Relations comme miroir : tests, peur de l'abandon, besoin de vérité. Travail : dire les limites tôt, ne pas manipuler par retrait.",
              ],
              [
                "Lilith conjointe Vénus",
                "Désir et valeurs intensifiés : attirances fortes, refus du tiède. Travail : distinguer amour vs manque, ne pas confondre intensité et compatibilité.",
              ],
              [
                "Lilith carré Lune",
                'Conflit besoin/souhait : hypersensibilité au rejet. Travail : re-parenting, sécurité interne, ne pas "punir" l\'autre pour une ancienne blessure.',
              ],
              [
                "Lilith trigone Soleil",
                "Force de vérité et charisme : on assume plus facilement. Vigilance : éviter l'arrogance morale, garder le cœur ouvert.",
              ],
            ].map(([t, txt]) => (
              <div key={t} className={`rounded-3xl border ${accentBorder} bg-white/5 p-5 ${accentGlow}`}>
                <p className="font-serif text-2xl">{t}</p>
                <p className="mt-2 text-sm leading-relaxed text-text/85">{txt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Navigation */}
     <footer className="mt-14 border-t border-white/10 pt-10">
  <div className="grid gap-6 lg:grid-cols-3">
    {/* Col 1 */}
    <div className={`${card} ${accentGlow}`}>
      <p className="text-xs uppercase tracking-[0.18em] text-muted">Aller plus loin</p>
      <p className="mt-3 text-sm leading-relaxed text-text/80">
        Prochaine étape logique : intégrer Lilith aux <span className="text-text">maisons</span> et aux{" "}
        <span className="text-text">aspects</span>, puis comparer avec la <span className="text-text">Lune</span> et{" "}
        <span className="text-text">Vénus/Mars</span> pour distinguer besoin, désir et limite.
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        <Link className={pill} href="/aspects">Aspects</Link>
        <Link className={pill} href="/#maisons">Maisons</Link>
        <Link className={pill} href="/#planetes">Planètes</Link>
      </div>
    </div>

    {/* Col 2 */}
    <div className={`${card} ${accentGlow}`}>
      <p className="text-xs uppercase tracking-[0.18em] text-muted">À retenir</p>
      <ul className="mt-4 space-y-2 text-sm text-text/85">
        <li className="flex gap-3">
          <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
          <span>Lilith = point sensible : désir, vérité intime, limite.</span>
        </li>
        <li className="flex gap-3">
          <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
          <span>Maison : où ça se joue • Signe : comment • Aspects : quand/avec qui.</span>
        </li>
        <li className="flex gap-3">
          <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
          <span>Traduire "intensité" en choix simples = intégration.</span>
        </li>
      </ul>

      <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
        <p className="text-xs uppercase tracking-wide text-muted">Mini-exercice</p>
        <p className="mt-2 text-sm text-text/85">
          Écris une phrase : <span className="text-text">&quot;Je ne mendie plus …&quot;</span> puis ajoute{" "}
          <span className="text-text">&quot;Je choisis …&quot;</span> (version adulte).
        </p>
      </div>
    </div>

    {/* Col 3 */}
    <div className={`${card} ${accentGlow}`}>
      <p className="text-xs uppercase tracking-[0.18em] text-muted">Navigation</p>
      <p className="mt-3 text-sm text-text/75">
        Continue ton cours avec les pages fondamentales :
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        <Link className={pill} href="/#zodiaque">Signes</Link>
        <Link className={pill} href="/#planetes">Planètes</Link>
        <Link className={pill} href="/#maisons">Maisons</Link>
        <Link className={pill} href="/maitrises">Dignités</Link>
      </div>

      <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
        <p className="text-xs uppercase tracking-wide text-muted">Suggestion</p>
        <p className="mt-2 text-sm text-text/85">
          Si tu veux une lecture ultra claire : commence par <span className="text-text">Lilith + Maison</span>,
          puis ajoute <span className="text-text">un seul aspect majeur</span>.
        </p>
      </div>
    </div>
  </div>

  {/* bas de footer */}
  <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6">
    <p className="text-xs text-text/60">
      © {new Date().getFullYear()} — Cours d'astrologie • Lilith (Lune Noire)
    </p>
    <div className="flex flex-wrap gap-2">
      <a className={pill} href="#definition">↑ Haut de page</a>
      <a className={pill} href="#mythologie">Mythologie</a>
    </div>
  </div>
</footer>


      {/* FAQ visible */}
      <section className="mt-16 space-y-6" aria-labelledby="faq-lilith">
        <h2 id="faq-lilith" className={h2}>
          <span className={dot} />
          Questions fréquentes sur Lilith (Lune Noire)
        </h2>
        <div className="space-y-4">
          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md" open>
            <summary className="cursor-pointer list-none p-6 font-serif text-lg font-medium text-white/90 [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between">
                Lilith est-elle une planète en astrologie ?
                <span className="ml-3 text-violet-300/60 transition-transform group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="px-6 pb-6 text-sm leading-relaxed text-white/75 md:text-base">Non. <strong>Lilith</strong> (Lune Noire) n'est pas une planète ni un astre physique. C'est un <strong>point fictif</strong> correspondant à l'apogée de l'orbite de la <Link href="/#planetes">Lune</Link> autour de la Terre. Elle fonctionne comme un repère symbolique dans le thème natal.</p>
          </details>
          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md">
            <summary className="cursor-pointer list-none p-6 font-serif text-lg font-medium text-white/90 [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between">
                Comment trouver sa Lilith dans son thème natal ?
                <span className="ml-3 text-violet-300/60 transition-transform group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="px-6 pb-6 text-sm leading-relaxed text-white/75 md:text-base">La plupart des logiciels d'astrologie (Astro.com, etc.) calculent la position de <strong>Lilith moyenne</strong> par défaut. Repérez son <Link href="/#zodiaque">signe</Link> et sa <Link href="/#maisons">maison</Link>, puis observez ses aspects aux planètes personnelles pour une première interprétation fiable.</p>
          </details>
          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md">
            <summary className="cursor-pointer list-none p-6 font-serif text-lg font-medium text-white/90 [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between">
                Quelle est la signification de Lilith en maison 7 ?
                <span className="ml-3 text-violet-300/60 transition-transform group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="px-6 pb-6 text-sm leading-relaxed text-white/75 md:text-base"><strong>Lilith en maison VII</strong> place la vérité brute dans le domaine des relations. Elle indique des tests relationnels, une peur de l'abandon et un besoin profond de vérité dans le couple. Le travail consiste à poser ses limites tôt et à ne pas manipuler par le retrait.</p>
          </details>
          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md">
            <summary className="cursor-pointer list-none p-6 font-serif text-lg font-medium text-white/90 [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between">
                Faut-il utiliser Lilith vraie ou Lilith moyenne ?
                <span className="ml-3 text-violet-300/60 transition-transform group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="px-6 pb-6 text-sm leading-relaxed text-white/75 md:text-base">Pour débuter, la <strong>Lilith moyenne</strong> (Mean) est recommandée : elle est plus stable et plus facile à enseigner. La <strong>Lilith vraie</strong> (True) donne des nuances plus fines mais peut être plus volatile. Les deux positions sont souvent proches dans le <Link href="/#theme-natal">thème natal</Link>.</p>
          </details>
        </div>
      </section>

      {/* JSON-LD FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Lilith est-elle une planète en astrologie ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Non. Lilith (Lune Noire) n'est pas une planète ni un astre physique. C'est un point fictif correspondant à l'apogée de l'orbite de la Lune autour de la Terre. Elle fonctionne comme un repère symbolique dans le thème natal."
                }
              },
              {
                "@type": "Question",
                name: "Comment trouver sa Lilith dans son thème natal ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "La plupart des logiciels d'astrologie (Astro.com, etc.) calculent la position de Lilith moyenne par défaut. Repérez son signe et sa maison, puis observez ses aspects aux planètes personnelles pour une première interprétation fiable."
                }
              },
              {
                "@type": "Question",
                name: "Quelle est la signification de Lilith en maison 7 ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Lilith en maison VII place la vérité brute dans le domaine des relations. Elle indique des tests relationnels, une peur de l'abandon et un besoin profond de vérité dans le couple. Le travail consiste à poser ses limites tôt et à ne pas manipuler par le retrait."
                }
              },
              {
                "@type": "Question",
                name: "Faut-il utiliser Lilith vraie ou Lilith moyenne ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Pour débuter, la Lilith moyenne (Mean) est recommandée : elle est plus stable et plus facile à enseigner. La Lilith vraie (True) donne des nuances plus fines mais peut être plus volatile. Les deux positions sont souvent proches dans le thème natal."
                }
              }
            ]
          })
        }}
      />

      {/* JSON-LD SEO */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Lilith (Lune Noire) — Sens, thèmes & interprétation",
            description:
              "Cours complet sur Lilith (Lune Noire) : définition, vraie vs moyenne, symbolique, lectures par signe/maison/aspects + méthode d'interprétation.",
            mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.astro-cours.com/lilith" },
            author: { "@type": "Person", name: "Stéphane Gamot", url: "https://www.astro-cours.com/auteur/stephane-gamot" },
            publisher: { "@type": "Organization", name: "Astro Cours", url: "https://www.astro-cours.com", logo: { "@type": "ImageObject", url: "https://www.astro-cours.com/astro-cours-logo.webp" } },
            datePublished: "2026-04-09",
            dateModified: "2026-04-22",
            inLanguage: "fr",
            articleSection: "Astrologie",
          }),
        }}
      />
    </main>
  );
}
