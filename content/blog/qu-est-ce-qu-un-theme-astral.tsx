import type { ReactNode } from "react";
import Link from "next/link";
import { Pill, TagPillsInline, getGlowFromTags } from "./ui";

export const meta = {
  slug: "qu-est-ce-qu-un-theme-astral",
  title: "Qu’est-ce qu’un thème astral ?",
  description:
    "Définition claire du thème astral : à quoi il sert, ce qu’il contient vraiment, et pourquoi il est bien plus qu’un signe astrologique.",
  date: "2026-01-05",
  tags: ["bases", "thème astral", "débutant"],
  readingLevel: "débutant" as const,
  cover: "/images/blog/theme-astral.webp",
};

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

function Card({
  title,
  icon,
  children,
  subtitle,
}: {
  title: string;
  icon?: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-white/10 bg-black/20 p-6 shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div>
          <H3>
            {icon ? <span className="mr-2">{icon}</span> : null}
            {title}
          </H3>
          {subtitle ? (
            <p className="mt-1 text-sm text-text/60">{subtitle}</p>
          ) : null}
        </div>
      </div>
      <div className="mt-4 space-y-3 text-text/85 leading-relaxed">
        {children}
      </div>
    </section>
  );
}

function Callout({
  kind = "note",
  title,
  children,
}: {
  kind?: "note" | "warn" | "ok";
  title: string;
  children: ReactNode;
}) {
  const box =
    kind === "warn"
      ? "border-yellow-500/30 bg-yellow-500/10"
      : kind === "ok"
      ? "border-emerald-500/30 bg-emerald-500/10"
      : "border-white/10 bg-white/5";

  const emoji = kind === "warn" ? "⚠️" : kind === "ok" ? "✅" : "📌";

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

export default function Post() {
  const glow = getGlowFromTags(meta.tags);

  return (
    <div className="space-y-10">
      {/* HERO “MAGAZINE” */}
      <header className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-7 shadow-soft">
        {/* glows */}
        <div
          className={`pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl ${glow}`}
        />
        <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

        {/* overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

        <div className="relative">
          <p className="text-sm text-text/60">Cours • Bases</p>

    

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            La définition simple + la méthode “4 briques” pour comprendre ce que
            contient vraiment un thème astral (et éviter les pièges débutants).
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <Pill tone="violet">Niveau : {meta.readingLevel}</Pill>
            <Pill tone="sky">≈ 5–7 min</Pill>
          </div>

          <div className="mt-3">
            <TagPillsInline tags={meta.tags} />
          </div>

          {/* mini plan premium */}
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs text-text/60">Objectif</p>
              <p className="mt-1 font-semibold text-text/90">
                Comprendre la structure
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs text-text/60">À retenir</p>
              <p className="mt-1 font-semibold text-text/90">
                Carte ≠ prédiction
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs text-text/60">Méthode</p>
              <p className="mt-1 font-semibold text-text/90">
                Planètes • Signes • Maisons • Aspects
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN GRID */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <section className="space-y-4">
            <H2>Définition simple</H2>

            <Card
              title="La phrase la plus juste"
              icon="🧭"
              subtitle="Si tu ne retiens qu’une chose, retiens ça."
            >
              <p>
                Un <strong>thème astral</strong> est une{" "}
                <strong>carte du ciel</strong> calculée pour un{" "}
                <strong>instant</strong> et un <strong>lieu</strong> précis (le plus
                souvent : la naissance).
              </p>
              <Callout kind="note" title="Idée centrale">
                <p>
                  Ce n’est pas une prédiction : c’est une{" "}
                  <strong>structure de fonctionnement</strong>.
                </p>
              </Callout>
            </Card>
          </section>

          <section className="space-y-4">
            <H2>Les 4 briques d’un thème astral</H2>

            <div className="grid gap-6 md:grid-cols-2">
              <Card title="1) Planètes" icon="☀️" subtitle="Quoi ? (fonction)">
                <p>
                  Les planètes symbolisent des <strong>fonctions</strong> :
                  identité, émotions, désir, pensée, valeurs, expansion, limites…
                </p>
                <p className="text-sm text-text/70">
                  Exemple : <strong>Mars</strong> = action / désir / manière de se
                  défendre.
                </p>
              </Card>

              <Card title="2) Signes" icon="♈" subtitle="Comment ? (style)">
                <p>
                  Les signes colorent la planète : <strong>ton</strong>,{" "}
                  <strong>style</strong>, <strong>réflexe</strong>.
                </p>
                <p className="text-sm text-text/70">
                  Exemple : Mars en signe de Feu ≠ Mars en signe de Terre.
                </p>
              </Card>

              <Card title="3) Maisons" icon="🏠" subtitle="Où ? (domaine)">
                <p>
                  Les maisons montrent <strong>où</strong> la planète s’exprime
                  dans la vie : relation, carrière, famille, intimité, etc.
                </p>
                <Callout kind="ok" title="Mini-exemple">
                  <p>
                    <strong>Mercure</strong> en <strong>Maison 10</strong> :
                    communication liée au <strong>métier</strong> et à l’image
                    publique.
                  </p>
                </Callout>
              </Card>

              <Card title="4) Aspects" icon="🔗" subtitle="Dynamique (relations)">
                <p>
                  Les aspects décrivent la relation entre planètes : fluidité,
                  tension, contradictions, coopération.
                </p>
                <p className="text-sm text-text/70">
                  Exemple : un carré peut “pousser à évoluer”, pas “punir”.
                </p>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <H2>Comment lire un thème (méthode débutant)</H2>

            <Card title="La méthode la plus simple (7 étapes)" icon="🧠">
              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  Lis d’abord le <strong>Soleil</strong> (identité), puis la{" "}
                  <strong>Lune</strong> (réflexes émotionnels).
                </li>
                <li>
                  Regarde l’<strong>Ascendant</strong> (porte d’entrée, style,
                  corps).
                </li>
                <li>
                  Repère les planètes <strong>dominantes</strong> (angulaires,
                  stelliums, maîtres d’angle).
                </li>
                <li>
                  Identifie 2–3 <strong>thèmes majeurs</strong> (maisons chargées,
                  répétitions).
                </li>
                <li>
                  Lis les <strong>aspects forts</strong> (orbes serrés,
                  conjonctions, carrés, oppositions).
                </li>
                <li>
                  Relie : “fonction (planète) → style (signe) → domaine (maison)
                  → dynamique (aspects)”.
                </li>
                <li>
                  Termine par une phrase synthèse : “Cette personne fonctionne
                  surtout via…”.
                </li>
              </ol>

              <Callout kind="note" title="Règle d’or">
                <p>
                  Ne te perds pas dans les détails : tu cherches une{" "}
                  <strong>structure</strong>, puis tu affines ensuite.
                </p>
              </Callout>
            </Card>
          </section>

          <section className="space-y-4">
            <H2>Ce que le thème astral ne dit PAS</H2>

            <Card title="Les limites (important)" icon="🛡️">
              <ul className="list-disc pl-5 space-y-2">
                <li>une date exacte d’événement</li>
                <li>un destin obligatoire</li>
                <li>“ce qui va forcément arriver”</li>
              </ul>

              <Callout kind="warn" title="Important">
                <p>
                  Le thème décrit des <strong>tendances</strong> et des{" "}
                  <strong>cycles</strong>. Le libre arbitre reste central.
                </p>
              </Callout>
            </Card>
          </section>

          <section className="space-y-4">
            <H2>Mini FAQ (questions fréquentes)</H2>

            <div className="grid gap-6 md:grid-cols-2">
              <Card
                title="Pourquoi deux personnes du même signe sont différentes ?"
                icon="❓"
              >
                <p>
                  Parce qu’elles n’ont pas le même <strong>Ascendant</strong>, pas
                  la même <strong>Lune</strong>, pas les mêmes{" "}
                  <strong>maisons</strong> et pas les mêmes{" "}
                  <strong>aspects</strong>.
                </p>
                <p className="text-sm text-text/70">
                  Le signe solaire est une pièce du puzzle, pas la carte entière.
                </p>
              </Card>

              <Card title="Est-ce que c’est “scientifique” ?" icon="🧾">
                <p>
                  L’astrologie sérieuse est une <strong>lecture symbolique</strong>{" "}
                  : elle décrit des patterns, pas des causalités physiques
                  vérifiées.
                </p>
                <p className="text-sm text-text/70">
                  Ce cours t’apprend une méthode cohérente, pas du fatalisme.
                </p>
              </Card>
            </div>
          </section>

          {/* CTA fin */}
          <section className="rounded-2xl border border-white/10 bg-black/20 p-6">
            <p className="text-sm text-text/60">Prochain cours recommandé</p>
            <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
              <p className="text-text/85">
                Suite logique :{" "}
                <span className="font-semibold text-text/95">
                  Pourquoi l’Ascendant change tout
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
        </div>

        {/* SIDEBAR PREMIUM */}
        <aside className="space-y-4">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="text-sm text-text/60">Plan du cours</p>
            <ul className="mt-3 space-y-2 text-text/85">
              <li>• Définition simple</li>
              <li>• Les 4 briques</li>
              <li>• Méthode de lecture</li>
              <li>• Limites & erreurs</li>
              <li>• FAQ</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="text-sm text-text/60">À retenir</p>
            <p className="mt-2 text-text/85 leading-relaxed">
              Un thème astral est une <strong>structure</strong> : il explique{" "}
              <strong>comment</strong> tu fonctionnes, pas “ce qui va arriver”.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="text-sm text-text/60">Continuer</p>
            <div className="mt-3 space-y-2">
              <Link
                href="/blog"
                className="block rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-text/90 hover:bg-white/10 transition"
              >
                Voir tous les cours
              </Link>
              <Link
                href="/planetes"
                className="block rounded-xl border border-white/10 bg-black/20 px-4 py-2 text-sm text-text/80 hover:bg-white/10 transition"
              >
                Explorer les planètes
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
