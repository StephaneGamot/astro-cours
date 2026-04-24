import type { ReactNode } from "react";
import Link from "next/link";
import { Pill, TagPillsInline, getGlowFromTags } from "./ui";

export const meta = {
  slug: "pleine-lune-nouvelle-lune-cycles-astrologie",
  title: "Pleine & Nouvelle Lune : Les Cycles Lunaires",
  description:
    "Nouvelle Lune et Pleine Lune en astrologie : émotions, cycles, intentions, libération, sommeil, hypersensibilité. Une méthode simple et concrète.",
  date: "2026-02-07",
  tags: ["lune", "émotions", "cycles", "bases", "débutant"],
  readingLevel: "débutant" as const,
  cover: "/images/blog/lune-cycles.jpg",
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
  d,
}: {
  a: string;
  b: string;
  c: string;
  d: string;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 border-b border-white/10 last:border-b-0">
      <div className="p-4 font-semibold text-text/90">{a}</div>
      <div className="p-4 text-text/85">{b}</div>
      <div className="p-4 text-text/85">{c}</div>
      <div className="p-4 text-text/85">{d}</div>
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
        <div
          className={`pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl ${glow}`}
        />
        <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

        {/* overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        <div className="relative">
          <Kicker>Émotions • Cycles • Intuition • Énergie intérieure</Kicker>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            En astrologie, la <strong>Lune</strong> décrit ton{" "}
            <strong>monde émotionnel</strong>, ta manière de chercher la{" "}
            <strong>sécurité</strong> et ton ressenti instinctif. Mais au-delà du
            thème natal, la Lune forme un <strong>cycle permanent</strong> entre{" "}
            <strong>Nouvelle Lune</strong> et <strong>Pleine Lune</strong>.
          </p>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            Même sans “y croire”, tu peux le ressentir : sommeil, nervosité,
            hypersensibilité, envie d’introspection… La Lune agit comme une{" "}
            <strong>respiration énergétique</strong> :
            <br />
            <strong>Nouvelle Lune = inspiration</strong> 🌑 •{" "}
            <strong>Pleine Lune = expiration</strong> 🌕
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <Pill tone="violet">Mot-clé : Cycle</Pill>
            <Pill tone="orange">Risque : Réactivité</Pill>
            <Pill tone="emerald">Levier : Conscience</Pill>
            <Pill tone="sky">Niveau : {meta.readingLevel}</Pill>
          </div>

          <div className="mt-3">
            <TagPillsInline tags={meta.tags} />
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <Stat label="Astre" value="La Lune" />
            <Stat label="Ce qu’elle décrit" value="Émotions + sécurité + intuition" />
            <Stat label="Question clé" value="Qu’est-ce que je ressens (vraiment) ?" />
          </div>
        </div>
      </header>

      {/* 1) base */}
      <section className="space-y-4">
        <H2>1) La Lune, ça représente quoi ?</H2>

        <div className="rounded-2xl border border-white/10 bg-black/20 p-6 leading-relaxed text-text/85 space-y-3">
          <p>
            La Lune parle de ton <strong>climat intérieur</strong>. Elle décrit :
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>tes <strong>émotions profondes</strong> (et leur intensité)</li>
            <li>ta <strong>réactivité instinctive</strong> (sans filtre)</li>
            <li>ton besoin de <strong>sécurité</strong> et de “cocon”</li>
            <li>ta relation au <strong>passé</strong> et aux souvenirs</li>
            <li>ton <strong>rythme</strong> (sommeil, humeur, fluctuations)</li>
          </ul>
        </div>

        <Callout tone="note" title="Phrase clé">
          <p>
            La Lune = ton <strong>monde intérieur</strong>. Le Soleil = ton{" "}
            <strong>identité consciente</strong>. Les phases lunaires = une{" "}
            <strong>météo émotionnelle</strong> partagée.
          </p>
        </Callout>
      </section>

      {/* 2) méthode */}
      <section className="space-y-4">
        <H2>2) Le cycle lunaire expliqué simplement</H2>

        <Card title="Une vague de 29 jours" subtitle="Ça monte, ça culmine, ça redescend. Comme toi.">
          <p>
            Un cycle complet dure environ <strong>29 jours</strong>. La Lune se
            comporte comme une <strong>vague</strong> : elle monte (construction),
            atteint un sommet (révélation), puis redescend (tri / libération).
          </p>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <div className="grid grid-cols-1 md:grid-cols-4 border-b border-white/10">
              <div className="p-4 text-sm text-text/60">Phase</div>
              <div className="p-4 text-sm text-text/60">Énergie</div>
              <div className="p-4 text-sm text-text/60">Ressenti</div>
              <div className="p-4 text-sm text-text/60">Focus</div>
            </div>

            <Row a="🌑 Nouvelle Lune" b="début" c="introspection" d="intention" />
            <Row a="🌓 Premier Quartier" b="tension" c="décision" d="action" />
            <Row a="🌕 Pleine Lune" b="pic" c="émotions amplifiées" d="révélation" />
            <Row a="🌗 Dernier Quartier" b="descente" c="tri / fatigue" d="libération" />
          </div>

          <Callout tone="ok" title="Astuce utile">
            <p>
              Observe-toi : tu n’as pas besoin d’être “mystique”.  
              Tu as juste besoin d’être <strong>honnête</strong> sur ton état intérieur.
            </p>
          </Callout>
        </Card>
      </section>

      <Divider />

      {/* 3) Nouvelle Lune */}
      <section className="space-y-4">
        <H2>3) La Nouvelle Lune 🌑</H2>

        <Card title="Énergie : recommencer, semer, intérioriser" subtitle="Le vide fertile. Peu visible, très puissant.">
          <p>
            La Nouvelle Lune, c’est une phase de <strong>silence</strong>. Ça
            peut donner une impression de “rien”, mais en réalité tout se{" "}
            <strong>prépare</strong>.
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>besoin de calme / de retrait</li>
            <li>fatigue mentale ou envie de lenteur</li>
            <li>intuition plus fine</li>
            <li>besoin de clarté intérieure</li>
          </ul>

          <Callout tone="warn" title="Erreur classique">
            <p>
              Vouloir des résultats immédiats.  
              La Nouvelle Lune n’est pas une phase d’“exploit” : c’est une phase de{" "}
              <strong>préparation</strong>.
            </p>
          </Callout>
        </Card>

        <Callout tone="note" title="À faire (simple, efficace)">
          <ul className="list-disc pl-5 space-y-2">
            <li>écrire 1 intention (une seule) claire</li>
            <li>poser une action minimale (un micro-pas)</li>
            <li>ranger / simplifier (espace = énergie)</li>
          </ul>
        </Callout>
      </section>

      {/* 4) Pleine Lune */}
      <section className="space-y-4">
        <H2>4) La Pleine Lune 🌕</H2>

        <Card title="Énergie : révélation, intensité, culmination" subtitle="Amplificateur émotionnel. Tout devient visible.">
          <p>
            La Pleine Lune met en lumière ce que tu évitais. Elle agit comme un{" "}
            <strong>projecteur</strong> : émotions, tensions, vérités, besoins.
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>émotions amplifiées / impatience</li>
            <li>sommeil plus léger, rêves intenses</li>
            <li>prises de conscience rapides</li>
            <li>conflits qui éclatent si ça couvait</li>
          </ul>

          <Callout tone="ok" title="Lecture mature">
            <p>
              La Pleine Lune ne “crée” pas le chaos.  
              Elle <strong>révèle</strong> ce qui est déjà là — et te pousse à regarder.
            </p>
          </Callout>
        </Card>

        <Callout tone="note" title="À faire (libérer plutôt que lutter)">
          <ul className="list-disc pl-5 space-y-2">
            <li>écrire ce que tu ne veux plus porter</li>
            <li>avoir une conversation honnête (sans agressivité)</li>
            <li>couper une habitude qui te vide</li>
          </ul>
        </Callout>
      </section>

      <Divider />

      {/* 5) comparaison */}
      <section className="space-y-4">
        <H2>5) Nouvelle Lune vs Pleine Lune (la vraie différence)</H2>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <div className="grid grid-cols-1 md:grid-cols-4 border-b border-white/10">
            <div className="p-4 text-sm text-text/60">Phase</div>
            <div className="p-4 text-sm text-text/60">Orientation</div>
            <div className="p-4 text-sm text-text/60">Mouvement</div>
            <div className="p-4 text-sm text-text/60">But</div>
          </div>

          <Row a="Nouvelle Lune 🌑" b="intérieur" c="commencer" d="intention" />
          <Row a="Pleine Lune 🌕" b="extérieur" c="culminer" d="révélation / libération" />
          <Row a="Entre deux" b="construction" c="ajuster" d="tenir le cap" />
          <Row a="Fin de cycle" b="tri" c="lâcher" d="simplifier" />
        </div>

        <Callout tone="note" title="Astuce simple">
          <p>
            Si tu ne sais pas quoi faire :  
            Nouvelle Lune = <strong>je choisis</strong>. Pleine Lune ={" "}
            <strong>je libère</strong>.
          </p>
        </Callout>
      </section>

      {/* 6) pourquoi on ressent */}
      <section className="space-y-4">
        <H2>6) Pourquoi on se sent “bizarre” pendant les Pleines Lunes ?</H2>

        <Card
          title="Parce que la Lune amplifie ton système"
          subtitle="Sommeil, émotions, réactivité… ça se voit vite."
        >
          <p>
            Beaucoup de personnes remarquent : agitation, sommeil plus léger,
            hypersensibilité, irritabilité… La Pleine Lune agit comme un{" "}
            <strong>amplificateur</strong>.
          </p>
          <p>
            Le point clé : elle ne “crée” pas un problème, elle{" "}
            <strong>augmente le volume</strong> de ce qui était déjà présent.
          </p>

          <Callout tone="ok" title="Approche intelligente">
            <p>
              Au lieu de te battre contre l’émotion, demande-toi :{" "}
              <strong>“Qu’est-ce que ça veut me montrer ?”</strong>
            </p>
          </Callout>
        </Card>
      </section>

      <Divider />

      {/* 7) méthode concrète */}
      <section className="space-y-4">
        <H2>7) Comment utiliser les cycles lunaires dans la vraie vie</H2>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card title="Nouvelle Lune : intention (1 phrase)">
            <p>
              Pas besoin de rituel compliqué. Écris une intention claire :
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>“Je veux sortir d’un schéma relationnel.”</li>
              <li>“Je prends soin de mon corps.”</li>
              <li>“Je lance ce projet sans me surcharger.”</li>
            </ul>
            <p>
              Ajoute un <strong>micro-pas</strong> (10 minutes max) : c’est ça qui ancre.
            </p>
          </Card>

          <Card title="Pleine Lune : libération (tri + vérité)">
            <p>
              La Pleine Lune est parfaite pour “vider le sac” sans violence :
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>écrire ce que tu lâches (peur, charge mentale)</li>
              <li>couper une habitude qui t’épuise</li>
              <li>exprimer un non-dit (calmement, clairement)</li>
            </ul>
            <p>
              But : <strong>désencombrer</strong> ton énergie.
            </p>
          </Card>
        </div>

        <Callout tone="warn" title="Le piège">
          <p>
            Sur-ritualiser pour éviter d’agir.  
            L’astrologie aide quand elle te rend <strong>plus lucide</strong>, pas quand elle te fige.
          </p>
        </Callout>
      </section>

      {/* 8) secret */}
      <section className="space-y-4">
        <H2>8) Le vrai secret du cycle lunaire</H2>

        <div className="rounded-2xl border border-white/10 bg-black/20 p-6 leading-relaxed text-text/85 space-y-3">
          <p>
            La Lune ne décide pas à ta place. Elle te montre un rythme.
          </p>
          <p>
            Si tu résistes : <strong>tension</strong>.  
            Si tu écoutes : <strong>transformation</strong>.
          </p>
          <p>
            La Lune t’apprend que la vie n’est pas linéaire : elle est{" "}
            <strong>cyclique</strong>. Et toi aussi.
          </p>
        </div>
      </section>

      {/* 9) résumé */}
      <section className="space-y-4">
        <H2>9) Résumé pro</H2>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="p-5 border-b md:border-b-0 md:border-r border-white/10">
              <p className="text-sm text-text/60">Essence</p>
              <p className="mt-2 font-semibold text-text/90">Cycle émotionnel</p>
              <p className="mt-2 text-text/80">
                Nouvelle Lune = intention. Pleine Lune = révélation / libération.
              </p>
            </div>

            <div className="p-5 border-b md:border-b-0 md:border-r border-white/10">
              <p className="text-sm text-text/60">Risque</p>
              <p className="mt-2 font-semibold text-text/90">Réactivité</p>
              <p className="mt-2 text-text/80">
                Fatigue, conflits, surcharge émotionnelle si tu te forces.
              </p>
            </div>

            <div className="p-5">
              <p className="text-sm text-text/60">Levier</p>
              <p className="mt-2 font-semibold text-text/90">Conscience</p>
              <p className="mt-2 text-text/80">
                Observer → choisir → libérer. Le cycle devient un outil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-white/10 bg-black/20 p-6">
        <p className="text-sm text-text/60">Suite recommandée</p>
        <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
          <p className="text-text/85">
            Pour aller plus loin :{" "}
            <span className="font-semibold text-text/95">
              La Lune en signes & maisons — comprendre ton besoin de sécurité
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
