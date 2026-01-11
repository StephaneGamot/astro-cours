import type { ReactNode } from "react";
import Link from "next/link";
import { Pill, TagPillsInline, getGlowFromTags } from "./ui";

export const meta = {
  slug: "mars-en-signes-desir-libido-action",
  title: "Mars en signes : désir, libido, façon d’agir",
  description:
    "Comprendre Mars en astrologie : désir, libido, énergie, colère, façon d’agir et d’aller au bout des choses. Lecture claire signe par signe, forces, pièges et conseils concrets.",
  date: "2026-01-13",
  tags: ["amour", "mars", "désir", "bases", "débutant"],
  readingLevel: "débutant" as const,
  cover: "/images/blog/mars-desir.webp",
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
        <div className={`pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl ${glow}`} />
        <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

        {/* overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        <div className="relative">
          <Kicker>Désir • Sexualité • Énergie • Action</Kicker>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            En astrologie, <strong>Mars</strong> est la planète du{" "}
            <strong>désir</strong>, de l’<strong>instinct</strong> et de la
            manière dont tu <strong>passes à l’action</strong>. Elle parle aussi
            de ta colère, de ta libido, de ton courage et de ta capacité à
            “prendre ta place”.
          </p>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            Ici : lecture signe par signe (sans clichés), forces, pièges, style
            de séduction, dynamique sexuelle et conseils concrets.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <Pill tone="violet">Mot-clé : Impulsion</Pill>
            <Pill tone="orange">Risque : Conflit</Pill>
            <Pill tone="emerald">Levier : Maîtrise</Pill>
            <Pill tone="sky">Niveau : {meta.readingLevel}</Pill>
          </div>

          <div className="mt-3">
            <TagPillsInline tags={meta.tags} />
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <Stat label="Planète" value="Mars" />
            <Stat label="Ce qu’elle décrit" value="Désir + action + libido" />
            <Stat label="Question clé" value="Qu’est-ce qui m’allume et me motive ?" />
          </div>
        </div>
      </header>

      {/* 1) base */}
      <section className="space-y-4">
        <H2>1) Mars, ça représente quoi ?</H2>

        <div className="rounded-2xl border border-white/10 bg-black/20 p-6 leading-relaxed text-text/85 space-y-3">
          <p>
            Mars c’est ton <strong>moteur</strong>. Ce n’est pas seulement “le
            sexe”. C’est aussi :
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>comment tu désires (attirance, excitation, instinct)</li>
            <li>comment tu agis (prise d’initiative, courage)</li>
            <li>comment tu te défends (colère, conflit, limites)</li>
            <li>comment tu poursuis ce que tu veux (persévérance)</li>
          </ul>
        </div>

        <Callout tone="note" title="Phrase clé">
          <p>
            Mars = <strong>la manière dont tu prends</strong>. Vénus ={" "}
            <strong>la manière dont tu aimes</strong>. Les deux ensemble donnent
            ta dynamique relationnelle complète.
          </p>
        </Callout>
      </section>

      {/* 2) méthode */}
      <section className="space-y-4">
        <H2>2) Comment lire Mars (sans fantasmes ni clichés)</H2>

        <Card title="Méthode pro en 5 points" subtitle="Mars = énergie. Donc on observe les faits.">
          <ol className="list-decimal pl-5 space-y-2">
            <li>Le <strong>signe</strong> : style d’action / désir</li>
            <li>La <strong>maison</strong> : où tu mets ton énergie (zone de bataille)</li>
            <li>Les <strong>aspects</strong> : contrôle / excès / blocage / fluidité</li>
            <li>L’état de Mars : direct ou rétrograde (si natal)</li>
            <li>Mars + Vénus : attraction + plaisir = compatibilité</li>
          </ol>

          <Callout tone="ok" title="Lecture mature">
            <p>
              Mars sain = <strong>affirmation</strong>. Mars toxique ={" "}
              <strong>domination</strong>. Ce n’est pas le signe qui est “bon”
              ou “mauvais”, c’est le niveau de conscience.
            </p>
          </Callout>
        </Card>
      </section>

      <Divider />

      {/* 3) tableau rapide */}
      <section className="space-y-4">
        <H2>3) Mars en signes : lecture rapide</H2>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <div className="grid grid-cols-1 md:grid-cols-4 border-b border-white/10">
            <div className="p-4 text-sm text-text/60">Mars en…</div>
            <div className="p-4 text-sm text-text/60">Style</div>
            <div className="p-4 text-sm text-text/60">Excitation / désir</div>
            <div className="p-4 text-sm text-text/60">Piège</div>
          </div>

          <Row a="Bélier" b="direct, rapide" c="challenge, conquête" d="impulsivité" />
          <Row a="Taureau" b="lent, constant" c="sensations, corps" d="inertie / jalousie" />
          <Row a="Gémeaux" b="mental, joueur" c="jeu, mots, humour" d="dispersion" />
          <Row a="Cancer" b="protecteur" c="sécurité émotionnelle" d="passif-agressif" />
          <Row a="Lion" b="fier, solaire" c="admiration, passion" d="ego / contrôle" />
          <Row a="Vierge" b="précis, utile" c="propreté, maîtrise" d="perfectionnisme" />
          <Row a="Balance" b="séducteur, tact" c="harmonie, esthétique" d="indécision" />
          <Row a="Scorpion" b="intense, total" c="fusion, tabou" d="obsession" />
          <Row a="Sagittaire" b="libre, spontané" c="aventure, nouveauté" d="fuite" />
          <Row a="Capricorne" b="endurant" c="contrôle, respect" d="dureté" />
          <Row a="Verseau" b="original" c="différence, mental" d="détachement" />
          <Row a="Poissons" b="fluide" c="fantasme, imagination" d="flou / fuite" />
        </div>

        <Callout tone="note" title="Astuce pour lire vite">
          <p>
            Pour Mars, demande-toi :{" "}
            <strong>“Comment j’obtiens ce que je veux ?”</strong>  
            C’est souvent le meilleur résumé du signe.
          </p>
        </Callout>
      </section>

      {/* 4) interprétations détaillées */}
      <section className="space-y-4">
        <H2>4) Les 12 Mars (désir + action + style sexuel)</H2>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card title="Mars en Bélier" subtitle="désir rapide, instinct pur">
            <p><strong>Signature :</strong> je veux, je prends, j’y vais.</p>
            <p><strong>Atout :</strong> courage, sexualité directe.</p>
            <p><strong>Piège :</strong> agir avant de ressentir.</p>
            <p><strong>Conseil :</strong> apprendre à ralentir pour durer.</p>
          </Card>

          <Card title="Mars en Taureau" subtitle="désir constant, très sensuel">
            <p><strong>Signature :</strong> je construis le plaisir.</p>
            <p><strong>Atout :</strong> endurance, sensualité forte.</p>
            <p><strong>Piège :</strong> rigidité / possessivité.</p>
            <p><strong>Conseil :</strong> bouger le corps (sport, danse) pour libérer l’énergie.</p>
          </Card>

          <Card title="Mars en Gémeaux" subtitle="désir mental, excitation par le jeu">
            <p><strong>Signature :</strong> je veux comprendre et jouer.</p>
            <p><strong>Atout :</strong> flirt, créativité.</p>
            <p><strong>Piège :</strong> se lasser vite.</p>
            <p><strong>Conseil :</strong> profondeur = aussi une forme de fun (quand on ose).</p>
          </Card>

          <Card title="Mars en Cancer" subtitle="désir protecteur, émotionnel">
            <p><strong>Signature :</strong> je veux quand je me sens en sécurité.</p>
            <p><strong>Atout :</strong> grande tendresse, loyauté.</p>
            <p><strong>Piège :</strong> colère rentrée.</p>
            <p><strong>Conseil :</strong> dire les choses avant d’exploser.</p>
          </Card>

          <Card title="Mars en Lion" subtitle="désir flamboyant">
            <p><strong>Signature :</strong> je veux briller et être choisi.</p>
            <p><strong>Atout :</strong> passion, générosité.</p>
            <p><strong>Piège :</strong> ego, tests.</p>
            <p><strong>Conseil :</strong> aimer sans “mettre en scène” la relation.</p>
          </Card>

          <Card title="Mars en Vierge" subtitle="désir maîtrisé, précis">
            <p><strong>Signature :</strong> je veux bien faire.</p>
            <p><strong>Atout :</strong> attention aux détails, constance.</p>
            <p><strong>Piège :</strong> blocage / jugement.</p>
            <p><strong>Conseil :</strong> lâcher prise : le désir n’est pas une performance.</p>
          </Card>

          <Card title="Mars en Balance" subtitle="désir par le charme">
            <p><strong>Signature :</strong> je veux séduire sans brutalité.</p>
            <p><strong>Atout :</strong> tact, esthétique.</p>
            <p><strong>Piège :</strong> ne pas oser demander.</p>
            <p><strong>Conseil :</strong> exprimer clairement tes envies.</p>
          </Card>

          <Card title="Mars en Scorpion" subtitle="désir total, magnétique">
            <p><strong>Signature :</strong> je veux tout, pas moitié.</p>
            <p><strong>Atout :</strong> intensité sexuelle, transformation.</p>
            <p><strong>Piège :</strong> obsession / domination.</p>
            <p><strong>Conseil :</strong> remplacer le contrôle par la confiance.</p>
          </Card>

          <Card title="Mars en Sagittaire" subtitle="désir libre, aventureux">
            <p><strong>Signature :</strong> je veux explorer.</p>
            <p><strong>Atout :</strong> spontanéité, humour.</p>
            <p><strong>Piège :</strong> fuite si ça devient lourd.</p>
            <p><strong>Conseil :</strong> liberté ≠ absence d’engagement (on peut faire les deux).</p>
          </Card>

          <Card title="Mars en Capricorne" subtitle="désir discipliné, puissant">
            <p><strong>Signature :</strong> je veux maîtriser et réussir.</p>
            <p><strong>Atout :</strong> endurance, efficacité.</p>
            <p><strong>Piège :</strong> dureté / fermeture émotionnelle.</p>
            <p><strong>Conseil :</strong> autorise le plaisir sans le “mériter”.</p>
          </Card>

          <Card title="Mars en Verseau" subtitle="désir original, mental">
            <p><strong>Signature :</strong> je veux autrement.</p>
            <p><strong>Atout :</strong> surprise, ouverture.</p>
            <p><strong>Piège :</strong> distance / froideur.</p>
            <p><strong>Conseil :</strong> oser l’intimité (pas seulement le concept).</p>
          </Card>

          <Card title="Mars en Poissons" subtitle="désir imaginaire, fusionnel">
            <p><strong>Signature :</strong> je veux ressentir.</p>
            <p><strong>Atout :</strong> sensualité subtile, fantasme riche.</p>
            <p><strong>Piège :</strong> flou, fuite.</p>
            <p><strong>Conseil :</strong> dire clairement tes limites et tes envies.</p>
          </Card>
        </div>
      </section>

      <Divider />

      {/* 5) compatibilité */}
      <section className="space-y-4">
        <H2>5) Mars en couple : ce que ça change vraiment</H2>

        <Card title="Ce que Mars montre en relation" subtitle="Très concret. Très observable.">
          <ul className="list-disc pl-5 space-y-2">
            <li>comment tu gères la frustration</li>
            <li>comment tu réagis au conflit</li>
            <li>comment tu exprimes le désir</li>
            <li>ce qui te rend irrésistible / ce qui te refroidit</li>
          </ul>

          <Callout tone="warn" title="Le piège classique">
            <p>
              Croire que Mars = “t’es fidèle / pas fidèle”.  
              Mars, c’est l’<strong>impulsion</strong>. La maturité dépend de ton thème global (Saturne, Lune, aspects…).
            </p>
          </Callout>
        </Card>

        <Callout tone="ok" title="Combo gagnant">
          <p>
            Le vrai truc qui marche : <strong>Vénus + Mars</strong>.
            Vénus te dit ce que tu appelles “amour”. Mars te dit ce que tu appelles “désir”.
            Si les deux ne parlent pas la même langue, tu as le sentiment de “manquer quelque chose”.
          </p>
        </Callout>
      </section>

      {/* 6) résumé */}
      <section className="space-y-4">
        <H2>6) Résumé pro</H2>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="p-5 border-b md:border-b-0 md:border-r border-white/10">
              <p className="text-sm text-text/60">Essence</p>
              <p className="mt-2 font-semibold text-text/90">Désir / Action</p>
              <p className="mt-2 text-text/80">
                Mars montre ton moteur : ce qui te fait bouger, vouloir, oser.
              </p>
            </div>

            <div className="p-5 border-b md:border-b-0 md:border-r border-white/10">
              <p className="text-sm text-text/60">Risque</p>
              <p className="mt-2 font-semibold text-text/90">Conflit</p>
              <p className="mt-2 text-text/80">
                Impulsivité, domination, colère mal gérée, fuite.
              </p>
            </div>

            <div className="p-5">
              <p className="text-sm text-text/60">Levier</p>
              <p className="mt-2 font-semibold text-text/90">Maîtrise</p>
              <p className="mt-2 text-text/80">
                Canaliser l’énergie → désir stable + action efficace.
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
              Compatibilité amoureuse — la méthode simple (Synastrie)
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
