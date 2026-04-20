import type { ReactNode } from "react";
import Link from "next/link";
import { Pill, TagPillsInline, getGlowFromTags } from "./ui";

export const meta = {
  slug: "vendre-une-maison-demenager-astrologie-methodes",
  title: "Vente de maison: Que regarder en astrologie ? ",
  description:
    "Guide sérieux pour analyser une vente immobilière ou un déménagement : maisons IV/VII/X, maîtres, transits, progressions, déclencheurs, rétrogrades",
  date: "2026-03-03",
  tags: ["immobilier", "demenagement", "transits", "maisons", "methode"],
  readingLevel: "intermédiaire" as const,
  cover: "/images/blog/immobilier-demenagement.webp",
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
      <div>
        <H3>{title}</H3>
        {subtitle ? <p className="mt-1 text-sm text-text/60">{subtitle}</p> : null}
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

  return (
    <div className="space-y-10">
      {/* HERO */}
      <header className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-7 shadow-soft">
        {/* glows */}
        <div className={`pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl ${glow}`} />
        <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

        {/* overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        <div className="relative">
          <Kicker>Immobilier • Déménagement • Timing • Méthode</Kicker>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            Vendre une maison ou déménager, ce n’est pas “juste un transit”.
            C’est un mélange de <strong>logistique</strong>, de{" "}
            <strong>décisions familiales</strong>, de <strong>juridique</strong>{" "}
            et de <strong>timing</strong>.
          </p>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            Cet article propose une lecture <strong>sérieuse</strong> : où regarder
            dans le thème, comment hiérarchiser les indicateurs, et comment repérer
            les fenêtres favorables — sans promettre l’impossible.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <Pill tone="violet">Mot-clé : Transition</Pill>
            <Pill tone="orange">Risque : Retards</Pill>
            <Pill tone="emerald">Levier : Timing + préparation</Pill>
            <Pill tone="sky">Niveau : {meta.readingLevel}</Pill>
          </div>

          <div className="mt-3">
            <TagPillsInline tags={meta.tags} />
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <Stat label="Sujet" value="Vente / achat / déménagement" />
            <Stat label="Maisons clés" value="IV, VII, X, II/ VIII" />
            <Stat label="Question clé" value="Qu’est-ce qui déclenche + quand ça se concrétise ?" />
          </div>
        </div>
      </header>

      {/* 1) cadre */}
      <section className="space-y-4">
        <H2>1) Le cadre : ce que l’astrologie peut (et ne peut pas) faire</H2>

        <div className="rounded-2xl border border-white/10 bg-black/20 p-6 leading-relaxed text-text/85 space-y-3">
          <p>
            Une carte du ciel ne remplace pas une banque, un notaire, ni un marché
            immobilier. Par contre, elle peut aider à :
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>repérer des <strong>périodes de changement</strong> (transition, rupture, nouveau cycle)</li>
            <li>comprendre <strong>ce qui bloque</strong> (peur, inertie, conflit, contrainte)</li>
            <li>choisir des <strong>fenêtres</strong> plus fluides pour signer, négocier, déménager</li>
            <li>ajuster la stratégie : tempo, communication, préparation</li>
          </ul>
        </div>

        <Callout tone="warn" title="Important (vraiment)">
          <p>
            Si ton dossier comporte de l’indivision, un conflit, ou une procédure,
            l’axe VII / VIII (contrats / partage) devient central, mais le résultat
            dépend aussi du droit et des preuves. L’astrologie aide à gérer le{" "}
            <strong>timing</strong> et la <strong>posture</strong>, pas à contourner la réalité.
          </p>
        </Callout>
      </section>

      {/* 2) où regarder */}
      <section className="space-y-4">
        <H2>2) Où regarder dans un thème natal (les zones “immobilier”)</H2>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card title="Maison IV : maison, racines, foyer" subtitle="Le cœur du sujet">
            <p>
              La IV décrit le <strong>lieu d’ancrage</strong> : maison, famille,
              besoin de sécurité, sentiment de “chez moi”.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>le signe en IV : ton style d’habitat (besoin de calme, d’espace, de contrôle, etc.)</li>
              <li>le maître de IV : où “se joue” la question dans la vie</li>
              <li>les planètes en IV : ce qui charge le sujet (travaux, secrets, famille, déménagements)</li>
            </ul>
          </Card>

          <Card title="Maison VII : contrat, négociation, acheteur / agence" subtitle="Le face-à-face">
            <p>
              La VII = <strong>l’autre partie</strong> : acheteurs, agence, notaire,
              ex-conjoint si indivision, et logique contractuelle.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>conflit / coopération : aspects au maître de VII</li>
              <li>facilité de signature : Vénus / Jupiter vs Saturne / Mars</li>
              <li>si relation tendue : regarder Saturne, Mars, Pluton en aspects</li>
            </ul>
          </Card>

          <Card title="Maison X : statut, passage officiel, calendrier" subtitle="Le concret / l’administration">
            <p>
              La X marque la <strong>formalisation</strong> : décisions officielles,
              rendez-vous, administrations, étapes “visibles”.
            </p>
            <p>
              Très utile pour le <strong>timing</strong> de l’acte / des démarches.
            </p>
          </Card>

          <Card title="Maisons II & VIII : argent, partage, crédit" subtitle="Le nerf de la guerre">
            <p>
              II = tes ressources / ta marge. VIII = banque, dettes, crédit, partage,
              indemnités, indivision, héritage.
            </p>
            <p>
              Quand ça bloque “sans raison”, c’est souvent ici (conditions, garanties,
              délais, paperasse, banque).
            </p>
          </Card>
        </div>

        <Callout tone="note" title="Astuce simple">
          <p>
            Pour une vente/déménagement, commence par :{" "}
            <strong>IV (foyer) + VII (contrat) + X (officialisation)</strong>.  
            Puis ajoute II/VIII si l’argent devient central.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* 3) méthode timing */}
      <section className="space-y-4">
        <H2>3) Timing : comment repérer une “fenêtre” (sans se mentir)</H2>

        <Card
          title="Méthode premium en 4 étages"
          subtitle="On superpose : fond → contexte → déclencheur → date pratique."
        >
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Le fond</strong> (lenteur) : Saturne / Uranus / Pluton / Neptune sur IV/VII/X ou leurs maîtres.
            </li>
            <li>
              <strong>Le contexte</strong> (6–12 mois) : progressions / arcs solaires (si tu utilises).
            </li>
            <li>
              <strong>Le déclencheur</strong> (semaines) : transits rapides (Mars/Vénus/Mercure) sur les points activés.
            </li>
            <li>
              <strong>La date pratique</strong> : choisir un moment “propre” (paperasse ok, agenda ok, rétrograde géré).
            </li>
          </ol>

          <Callout tone="ok" title="Ce qui marche bien en timing">
            <p>
              Une vente se concrétise souvent quand il y a <strong>un double signal</strong> :
              activation de IV/VII/X + un transit facilitateur (Vénus/Jupiter) ou un transit de structuration (Saturne).
            </p>
          </Callout>
        </Card>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-white/10">
            <div className="p-4 text-sm text-text/60">Signal</div>
            <div className="p-4 text-sm text-text/60">Souvent ça veut dire…</div>
            <div className="p-4 text-sm text-text/60">Action concrète</div>
          </div>

          <Row
            a="Jupiter sur IV/VII/X"
            b="ouverture, opportunités, facilité de contact"
            c="multiplier visites, relancer, élargir réseaux"
          />
          <Row
            a="Saturne sur IV/VII/X"
            b="délai, cadrage, responsabilité, procédures"
            c="dossier béton, patience, étapes notaire/banque"
          />
          <Row
            a="Uranus sur IV"
            b="changement rapide, besoin de bouger"
            c="préparer plan B, flexibilité, logistique"
          />
          <Row
            a="Pluton sur IV/VIII"
            b="transformation profonde, tension, enjeux de pouvoir"
            c="clarifier, sécuriser, éviter la guerre d’ego"
          />
          <Row
            a="Mercure rétro (période)"
            b="documents à revoir, délais, malentendus"
            c="relire, vérifier, signer quand tout est clair"
          />
        </div>
      </section>

      {/* 4) rétrogrades */}
      <section className="space-y-4">
        <H2>4) Rétrogrades : faut-il éviter de signer ?</H2>

        <Card title="Approche réaliste (pas superstitieuse)" subtitle="On ne panique pas. On gère.">
          <p>
            Les rétrogrades ne “bloquent” pas par magie. Ils augmentent surtout la probabilité de :
            <strong>retards</strong>, <strong>changements de dernière minute</strong>,
            <strong>révisions</strong> ou <strong>malentendus</strong>.
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Mercure rétro</strong> : contrats, échanges, papiers → relire + vérifier.</li>
            <li><strong>Vénus rétro</strong> : valeurs/prix/esthétique → renégociations, hésitations.</li>
            <li><strong>Mars rétro</strong> : énergie/conflits → tensions, lenteur, fatigue.</li>
          </ul>

          <Callout tone="note" title="Règle pro">
            <p>
              Si tu n’as pas le choix (agenda notaire, banque), ce n’est pas grave :  
              tu compenses par <strong>plus de préparation</strong> et <strong>plus de marge</strong> (temps, clauses, relecture).
            </p>
          </Callout>
        </Card>
      </section>

      <Divider />

      {/* 5) cas fréquents */}
      <section className="space-y-4">
        <H2>5) Les cas fréquents et où regarder</H2>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card title="Ça visite mais ça ne signe pas" subtitle="Le symptôme le plus courant">
            <ul className="list-disc pl-5 space-y-2">
              <li>VII (autre partie) activée mais VIII (banque) en tension</li>
              <li>Mercure/Neptune : flou, manque de clarté, documents incomplets</li>
              <li>Saturne : délai, exigences, étapes</li>
            </ul>
            <p>
              <strong>Action :</strong> dossier ultra-propre, photos, diagnostics, transparence, relance structurée.
            </p>
          </Card>

          <Card title="Indivision / conflit" subtitle="On lit VII + VIII + Saturne/Mars/Pluton">
            <ul className="list-disc pl-5 space-y-2">
              <li>VII : rapport à l’autre (coopération/bras de fer)</li>
              <li>VIII : partage, crédit, notaire, obligations</li>
              <li>Saturne/Mars/Pluton : rigidité, colère, contrôle</li>
            </ul>
            <p>
              <strong>Action :</strong> formaliser, documenter, réduire l’émotion dans l’échange.
            </p>
          </Card>

          <Card title="Je veux déménager, mais je n’y arrive pas" subtitle="Uranus/Neptune = envie ; Saturne = réalité">
            <p>
              Uranus donne l’envie de bouger. Neptune idéalise le “ailleurs”.
              Saturne demande une structure (budget, job, dossier, timing).
            </p>
            <p>
              <strong>Action :</strong> transformer l’envie en plan (3 étapes + dates + pièces).
            </p>
          </Card>

          <Card title="Travaux / rénovation" subtitle="IV + Mars + Saturne (et parfois Pluton)">
            <p>
              Mars : chantier, énergie, imprévus. Saturne : structure, coût, retard.
              Pluton : démolition/reconstruction au sens large.
            </p>
            <p>
              <strong>Action :</strong> marges de temps/argent, priorités, devis comparés.
            </p>
          </Card>
        </div>
      </section>

      {/* 6) checklist */}
      <section className="space-y-4">
        <H2>6) Check-list premium (très concrète)</H2>

        <Card title="Avant de chercher une date astrologique" subtitle="Le timing marche mieux quand le dossier est “propre”.">
          <ul className="list-disc pl-5 space-y-2">
            <li>diagnostics / documents prêts, cohérents, accessibles</li>
            <li>prix aligné marché (comparables + marge de négociation)</li>
            <li>photos + visite : maison “lisible” (ordre, lumière, odeur, neutralité)</li>
            <li>process de relance (agence / visites / feedback)</li>
            <li>plan B (si retard : location, stockage, calendrier)</li>
          </ul>

          <Callout tone="ok" title="Le point clé">
            <p>
              En astrologie appliquée, le “bon moment” n’est pas une date magique :  
              c’est une période où <strong>les conditions sont réunies</strong> + où le ciel est cohérent avec ton mouvement.
            </p>
          </Callout>
        </Card>
      </section>

      {/* 7) conclusion */}
      <section className="space-y-4">
        <H2>7) Résumé pro</H2>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="p-5 border-b md:border-b-0 md:border-r border-white/10">
              <p className="text-sm text-text/60">Le cœur</p>
              <p className="mt-2 font-semibold text-text/90">Maison IV</p>
              <p className="mt-2 text-text/80">
                Le foyer : ce qui doit bouger et pourquoi.
              </p>
            </div>

            <div className="p-5 border-b md:border-b-0 md:border-r border-white/10">
              <p className="text-sm text-text/60">La signature</p>
              <p className="mt-2 font-semibold text-text/90">Maisons VII + X</p>
              <p className="mt-2 text-text/80">
                Contrat + officialisation : étapes, délais, rendez-vous.
              </p>
            </div>

            <div className="p-5">
              <p className="text-sm text-text/60">Le nerf</p>
              <p className="mt-2 font-semibold text-text/90">Maisons II + VIII</p>
              <p className="mt-2 text-text/80">
                Banque, crédit, partage : là où ça se fige… ou se débloque.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* suite */}
      <section className="rounded-2xl border border-white/10 bg-black/20 p-6">
        <p className="text-sm text-text/60">Suite recommandée</p>
        <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
          <p className="text-text/85">
            Pour compléter :{" "}
            <span className="font-semibold text-text/95">
              Les 12 maisons — comprendre où ça se passe dans ta vie
            </span>
          </p>
          <Link
            href="/blog"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-text/90 hover:bg-white/10 transition"
          >
            Retour au blog
          </Link>
        </div>
      </section>

      <Link
        href="/blog"
        className="inline-flex rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-text/90 hover:bg-white/10 transition"
      >
        ← Voir tous les articles
      </Link>
    </div>
  );
}