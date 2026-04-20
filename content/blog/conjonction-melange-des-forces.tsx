import type { ReactNode } from "react";
import Link from "next/link";
import { Pill, TagPillsInline, getGlowFromTags } from "./ui";

export const meta = {
  slug: "conjonction-melange-des-forces",
  title: "Comprendre la conjonction",
  description:
    "Définition claire de la conjonction, méthode de lecture natal & transits, orbes, exemples concrets, nuances par planète, pièges fréquents & check-lists.",
  date: "2026-01-01",
  tags: ["aspects", "bases", "débutant"],
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
          <Kicker>Aspects majeurs • Natal & transits • Méthode progressive</Kicker>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            La conjonction est l’aspect le plus “fusionnel” : deux planètes se
            collent et agissent comme une seule dynamique. C’est puissant, très
            visible… et parfois confus. Ici : définition, orbes, méthode, exemples
            et check-lists.
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
        <H2>1) Définition simple (et correcte)</H2>

        <div className="rounded-2xl border border-white/10 bg-black/20 p-6 leading-relaxed text-text/85">
          <p>
            Une <strong>conjonction</strong> se produit lorsque deux planètes sont
            dans la même zone du zodiaque (proches en degrés). Elles se
            <strong> mélangent</strong> : l’une ne s’exprime presque jamais sans
            l’autre.
          </p>
          <p className="mt-3">
            Ce n’est pas automatiquement “positif”. La conjonction intensifie,
            concentre et rend un thème <strong>plus visible</strong>. Selon les
            planètes, elle peut être un talent, un moteur… ou un nœud.
          </p>
        </div>

        <Callout tone="note" title="Image mentale">
          <p>
            Deux encres versées dans le même verre : tu obtiens une couleur
            unique. Le résultat est stable, mais parfois difficile à “démêler”.
          </p>
        </Callout>
      </section>

      {/* 2) Orbes */}
      <section className="space-y-4">
        <H2>2) L’orbe : quand est-ce que ça “compte” vraiment ?</H2>

        <TwoCols
          left={
            <Card
              title="Règle simple (débutant)"
              subtitle="Un repère stable pour lire sans te perdre."
            >
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>≤ 3°</strong> : conjonction très forte (souvent
                  évidente).
                </li>
                <li>
                  <strong>3–6°</strong> : forte à moyenne, dépend du contexte.
                </li>
                <li>
                  <strong>6–8°</strong> : possible mais plus diffuse (à traiter
                  avec prudence).
                </li>
              </ul>

              <Callout tone="ok" title="Repère pro (simple)">
                <p>
                  Plus l’orbe est serré, plus tu peux “construire” dessus. Si
                  l’orbe est large, exige davantage de preuves (maison angulaire,
                  répétitions, aspects soutenants).
                </p>
              </Callout>
            </Card>
          }
          right={
            <>
              <Callout tone="warn" title="Erreur classique">
                <p>
                  Voir une conjonction et conclure trop vite. Une conjonction
                  sans maison forte et sans répétition peut être secondaire.
                </p>
              </Callout>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm text-text/60">Astuce</p>
                <p className="mt-2 text-text/85 leading-relaxed">
                  Quand tu hésites, pose une question :{" "}
                  <strong>“Dans quel domaine de vie ça se voit ?”</strong> (la
                  maison). Si tu ne vois aucun domaine clair, relis : ce n’est
                  peut-être pas central.
                </p>
              </div>
            </>
          }
        />
      </section>

      <Divider />

      {/* 3) Méthode natal */}
      <section className="space-y-4">
        <H2>3) Lecture en thème natal : méthode en 6 étapes</H2>

        <Card title="Méthode reproductible" subtitle="La même pour toutes les conjonctions.">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              Identifie les <strong>2 planètes</strong> : deux fonctions.
            </li>
            <li>
              Détermine <strong>qui mène</strong> : souvent la plus lente (ou la
              plus structurante / angulaire).
            </li>
            <li>
              Lis le <strong>signe</strong> : le “style” commun de la fusion.
            </li>
            <li>
              Lis la <strong>maison</strong> : où cela se manifeste dans la vie.
            </li>
            <li>
              Check les <strong>aspects</strong> reçus : stabilisation, tension,
              contradictions.
            </li>
            <li>
              Reformule :{" "}
              <strong>“Quand A s’active, B s’active automatiquement.”</strong>
            </li>
          </ol>

          <Callout tone="note" title="Phrase type (ultra utile)">
            <p>
              “La planète <strong>lente</strong> donne la direction, la planète{" "}
              <strong>rapide</strong> donne la manière. Le tout s’exprime en{" "}
              <strong>[maison]</strong>.”
            </p>
          </Callout>
        </Card>
      </section>

      {/* 4) Nuances */}
      <section className="space-y-4">
        <H2>4) Nuances importantes (ce qui fait pro)</H2>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card title="Planètes personnelles" subtitle="Plus subjectif, plus “psychologique”.">
            <p>
              Soleil, Lune, Mercure, Vénus, Mars : la conjonction parle souvent
              d’identité, d’émotions, de désir, de relation, de pensée.
            </p>
            <p className="text-sm text-text/70">
              Exemple : Lune–Mars = émotion → action immédiate.
            </p>
          </Card>

          <Card title="Saturne/Jupiter" subtitle="Social : cadre & expansion.">
            <p>
              Jupiter amplifie et donne confiance. Saturne structure, limite,
              responsabilise. En conjonction, ça donne un “thème de vie” très
              visible.
            </p>
            <p className="text-sm text-text/70">
              Exemple : Mercure–Saturne = pensée rigoureuse, parfois auto-censure.
            </p>
          </Card>

          <Card title="Uranus/Neptune/Pluton" subtitle="Transpersonnelles : plus lentes, plus marquantes.">
            <p>
              Elles colorent fortement une planète personnelle : réorientation,
              idéalisation, intensité, transformation. Souvent vécu par phases.
            </p>
            <p className="text-sm text-text/70">
              Exemple : Vénus–Neptune = idéal romantique, inspiration, risque de projection.
            </p>
          </Card>
        </div>
      </section>

      {/* 5) Exemples */}
      <section className="space-y-4">
        <H2>5) Exemples concrets (avec lecture)</H2>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card title="Lune–Mars" subtitle="Réaction + action collées">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Atout</strong> : courage, franchise, instinct.</li>
              <li><strong>Risque</strong> : impulsivité, irritabilité.</li>
              <li><strong>À observer</strong> : rythme émotionnel et gestion de l’énergie.</li>
            </ul>
          </Card>

          <Card title="Mercure–Saturne" subtitle="Pensée structurée">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Atout</strong> : rigueur, précision, apprentissage solide.</li>
              <li><strong>Risque</strong> : rigidité, pessimisme, auto-censure.</li>
              <li><strong>Levier</strong> : routines, cadre, écriture, méthode.</li>
            </ul>
          </Card>

          <Card title="Vénus–Neptune" subtitle="Idéalisation / inspiration">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Atout</strong> : empathie, sens artistique, romantisme.</li>
              <li><strong>Risque</strong> : projection, flou, “sauvetage”.</li>
              <li><strong>Levier</strong> : clarifier les valeurs et les limites.</li>
            </ul>
          </Card>
        </div>

        <Callout tone="ok" title="Truc qui fait gagner du temps">
          <p>
            Si tu veux aller vite : identifie l’<strong>enjeu</strong> (mot-clé),
            puis le <strong>risque</strong>, puis le <strong>levier</strong>.
            C’est une lecture “fonctionnelle” très efficace.
          </p>
        </Callout>
      </section>

      {/* 6) Tableau */}
      <section className="space-y-4">
        <H2>6) Conjonctions fréquentes : lecture rapide</H2>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-white/10">
            <div className="p-4 text-sm text-text/60">Conjonction</div>
            <div className="p-4 text-sm text-text/60">Atout</div>
            <div className="p-4 text-sm text-text/60">Risque</div>
          </div>

          <Row a="Soleil–Mercure" b="Clarté mentale, expression" c="Mental trop dominant" />
          <Row a="Soleil–Vénus" b="Charme, valeurs assumées" c="Besoin d’approbation" />
          <Row a="Mars–Jupiter" b="Élan, audace, confiance" c="Excès, surestime" />
          <Row a="Lune–Saturne" b="Maturité émotionnelle (avec travail)" c="Retenue, dureté" />
          <Row a="Mercure–Neptune" b="Imagination, intuition" c="Flou, distractions" />
          <Row a="Vénus–Pluton" b="Intensité, profondeur, magnétisme" c="Contrôle, jalousie" />
        </div>

        <Callout tone="note" title="Important">
          <p>
            Le tableau te donne une direction. La lecture pro ajoute :{" "}
            <strong>maison</strong> + <strong>signe</strong> + <strong>aspects</strong>.
          </p>
        </Callout>
      </section>

      <Divider />

      {/* 7) Transits */}
      <section className="space-y-4">
        <H2>7) Lecture en transit : quand ça s’active dans le temps</H2>

        <TwoCols
          left={
            <Card title="Ce que fait une conjonction en transit" subtitle="Un projecteur : tu ne peux pas l’ignorer.">
              <ul className="list-disc pl-5 space-y-2">
                <li>met un sujet au premier plan</li>
                <li>déclenche une décision / prise de conscience</li>
                <li>augmente l’intensité (construit ou révèle un déséquilibre)</li>
              </ul>

              <Callout tone="note" title="Bon réflexe">
                <p>
                  Pense “période” plutôt que “événement”. Un transit décrit un
                  processus.
                </p>
              </Callout>
            </Card>
          }
          right={
            <Card title="Check-list rapide (transits)" subtitle="5 questions qui suffisent souvent.">
              <ol className="list-decimal pl-5 space-y-2">
                <li>Quelle planète transite ? (lente = structurant)</li>
                <li>Quelle planète natale est touchée ?</li>
                <li>Dans quelle maison ça se passe ?</li>
                <li>Quels aspects soutiennent / compliquent ?</li>
                <li>Quel thème revient depuis 2–3 semaines ?</li>
              </ol>
            </Card>
          }
        />

        <Callout tone="warn" title="Erreur fréquente">
          <p>
            Chercher “la date exacte”. Les transits importants ont souvent{" "}
            <strong>plusieurs passages</strong> (approche, exact, séparation),
            et un effet progressif.
          </p>
        </Callout>
      </section>

      {/* 8) Résumé */}
      <section className="space-y-4">
        <H2>8) À retenir (résumé pro)</H2>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="p-5 border-b md:border-b-0 md:border-r border-white/10">
              <p className="text-sm text-text/60">Essence</p>
              <p className="mt-2 font-semibold text-text/90">Fusion</p>
              <p className="mt-2 text-text/80">
                Deux fonctions agissent ensemble, parfois indissociables.
              </p>
            </div>

            <div className="p-5 border-b md:border-b-0 md:border-r border-white/10">
              <p className="text-sm text-text/60">Risque</p>
              <p className="mt-2 font-semibold text-text/90">Saturation</p>
              <p className="mt-2 text-text/80">
                Excès, confusion, intensité trop concentrée au même endroit.
              </p>
            </div>

            <div className="p-5">
              <p className="text-sm text-text/60">Levier</p>
              <p className="mt-2 font-semibold text-text/90">Intégration</p>
              <p className="mt-2 text-text/80">
                Clarifier “qui mène”, poser un cadre, apprendre à canaliser.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA fin */}
      <section className="rounded-2xl border border-white/10 bg-black/20 p-6">
        <p className="text-sm text-text/60">Suite recommandée</p>
        <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
          <p className="text-text/85">
            Cours suivant logique :{" "}
            <span className="font-semibold text-text/95">
              Le carré : tension, friction et évolution
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

      {/* lien final */}
      <Link
        href="/blog"
        className="inline-flex rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-text/90 hover:bg-white/10 transition"
      >
        ← Voir tous les articles
      </Link>
    </div>
  );
}
