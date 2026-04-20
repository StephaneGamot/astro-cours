import type { ReactNode } from "react";
import Link from "next/link";
import { Pill, TagPillsInline, getGlowFromTags } from "./ui";

export const meta = {
  slug: "venus-en-signes-style-amoureux",
  title: "Vénus en signes : ton style amoureux",
  description:
    "Comprendre Vénus en astrologie : style amoureux, besoin affectif, façon de séduire, langage de l’amour, forces, pièges signe par signe.",
  date: "2026-01-08",
  tags: ["amour", "venus", "bases", "débutant"],
  readingLevel: "débutant" as const,
  cover: "/images/blog/cupidon.webp",
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
        <div className={`pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl ${glow}`} />
        <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        <div className="relative">
          <Kicker>Amour • Séduction • Relations • Lecture concrète</Kicker>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            En astrologie, <strong>Vénus</strong> ne décrit pas “avec qui tu vas finir”.
            Elle décrit <strong>comment tu aimes</strong> : ton style affectif, ta manière de séduire,
            ce qui te rassure, ce qui te fait fuir… et ce que tu recherches vraiment.
            Ici : une lecture signe par signe <strong>sans clichés</strong>, avec forces, pièges
            et conseils concrets.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <Pill tone="violet">Mot-clé : Valeurs</Pill>
            <Pill tone="orange">Risque : Projection</Pill>
            <Pill tone="emerald">Levier : Relation mature</Pill>
            <Pill tone="sky">Niveau : {meta.readingLevel}</Pill>
          </div>

          <div className="mt-3">
            <TagPillsInline tags={meta.tags} />
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <Stat label="Planète" value="Vénus" />
            <Stat label="Ce qu’elle décrit" value="Style amoureux + séduction" />
            <Stat label="Question clé" value="Qu’est-ce qui me fait dire OUI ?" />
          </div>
        </div>
      </header>

      {/* 1) base */}
      <section className="space-y-4">
        <H2>1) Vénus, c’est quoi exactement ?</H2>

        <div className="rounded-2xl border border-white/10 bg-black/20 p-6 leading-relaxed text-text/85 space-y-3">
          <p>
            Vénus représente ton <strong>rapport au plaisir</strong>, à l’amour,
            à la beauté et au lien. Elle décrit :
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>ta manière de séduire (ou d’attirer)</li>
            <li>ce qui te donne confiance en amour</li>
            <li>tes goûts, tes valeurs, ton besoin d’harmonie</li>
            <li>le type de relation qui te nourrit</li>
          </ul>
        </div>

        <Callout tone="note" title="Sans cliché">
          <p>
            Vénus ne dit pas “tu es romantique” ou “tu es fidèle”. Elle dit :
            <strong>qu’est-ce que tu considères comme de l’amour</strong>.
          </p>
        </Callout>
      </section>

      {/* 2) méthode */}
      <section className="space-y-4">
        <H2>2) Lire Vénus correctement (méthode rapide)</H2>

        <Card title="Lecture pro en 4 points" subtitle="Simple, mais extrêmement fiable.">
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong>Signe</strong> = le style (comment tu aimes)</li>
            <li><strong>Maison</strong> = le domaine de vie (où tu vis l’amour)</li>
            <li><strong>Aspects</strong> = facilité / tension / répétitions</li>
            <li><strong>Vénus + Mars</strong> = amour + désir (combo indispensable)</li>
          </ol>

          <Callout tone="ok" title="Règle en or">
            <p>
              Tu peux avoir une Vénus très douce… mais des aspects très durs.
              Donc : <strong>le signe donne la couleur</strong>, les aspects donnent la réalité.
            </p>
          </Callout>
        </Card>
      </section>

      <Divider />

      {/* 3) tableau signes */}
      <section className="space-y-4">
        <H2>3) Vénus en signes : ton style amoureux</H2>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <div className="grid grid-cols-1 md:grid-cols-4 border-b border-white/10 display-none lg:display-grid">
            <div className="p-4 text-sm text-text/60">Vénus en…</div>
            <div className="p-4 text-sm text-text/60">Style</div>
            <div className="p-4 text-sm text-text/60">Besoin</div>
            <div className="p-4 text-sm text-text/60">Piège</div>
          </div>

          <Row a="Bélier" b="direct, spontané" c="frisson, désir" d="se lasser vite" />
          <Row a="Taureau" b="sensuel, stable" c="sécurité, constance" d="possession" />
          <Row a="Gémeaux" b="léger, curieux" c="échange, humour" d="inconstance" />
          <Row a="Cancer" b="protecteur, tendre" c="attachement, foyer" d="dépendance" />
          <Row a="Lion" b="chaleureux, fier" c="admiration, loyauté" d="ego / drama" />
          <Row a="Vierge" b="discret, utile" c="preuve concrète" d="critique, retenue" />
          <Row a="Balance" b="harmonieux, social" c="couple, élégance" d="éviter le conflit" />
          <Row a="Scorpion" b="fusionnel, intense" c="vérité, profondeur" d="contrôle" />
          <Row a="Sagittaire" b="libre, enthousiaste" c="aventure, sens" d="peur de l’engagement" />
          <Row a="Capricorne" b="sérieux, loyal" c="durée, respect" d="froideur / prudence" />
          <Row a="Verseau" b="différent, mental" c="liberté, amitié" d="distance" />
          <Row a="Poissons" b="romantique, inspiré" c="âme, connexion" d="illusion / sauvetage" />
        </div>

        <Callout tone="note" title="Ultra important">
          <p>
            Le signe donne le <strong>style</strong> mais la maison indique le “terrain”.
            Par exemple : Vénus en Scorpion <strong>Maison 10</strong> : relations + statut / image.
          </p>
        </Callout>
      </section>

      {/* 4) interprétations */}
      <section className="space-y-4">
        <H2>4) Les 12 Vénus (interprétation + conseils)</H2>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card title="Vénus en Bélier" subtitle="aime vite, aime fort">
            <p><strong>Signature :</strong> amour = désir + mouvement.</p>
            <p><strong>Atout :</strong> franchise, passion.</p>
            <p><strong>Piège :</strong> confondre excitation et amour.</p>
            <p><strong>Conseil :</strong> choisir quelqu’un qui suit le rythme, sans drame.</p>
          </Card>

          <Card title="Vénus en Taureau" subtitle="aime avec le corps et la stabilité">
            <p><strong>Signature :</strong> amour = sécurité + sensualité.</p>
            <p><strong>Atout :</strong> fidélité, patience.</p>
            <p><strong>Piège :</strong> possessivité.</p>
            <p><strong>Conseil :</strong> nourrir le lien par des rituels simples.</p>
          </Card>

          <Card title="Vénus en Gémeaux" subtitle="aime par l’esprit">
            <p><strong>Signature :</strong> amour = échange.</p>
            <p><strong>Atout :</strong> légèreté, humour.</p>
            <p><strong>Piège :</strong> fuir la profondeur.</p>
            <p><strong>Conseil :</strong> apprendre à rester quand ça devient sérieux.</p>
          </Card>

          <Card title="Vénus en Cancer" subtitle="aime en prenant soin">
            <p><strong>Signature :</strong> amour = attachement.</p>
            <p><strong>Atout :</strong> tendresse, dévotion.</p>
            <p><strong>Piège :</strong> dépendance / peur d’abandon.</p>
            <p><strong>Conseil :</strong> sécuriser d’abord l’intérieur, ensuite la relation.</p>
          </Card>

          <Card title="Vénus en Lion" subtitle="aime en grand">
            <p><strong>Signature :</strong> amour = fierté + chaleur.</p>
            <p><strong>Atout :</strong> loyauté, générosité.</p>
            <p><strong>Piège :</strong> besoin d’admiration constante.</p>
            <p><strong>Conseil :</strong> aimer sans tester l’autre.</p>
          </Card>

          <Card title="Vénus en Vierge" subtitle="aime avec discrétion">
            <p><strong>Signature :</strong> amour = utilité + fiabilité.</p>
            <p><strong>Atout :</strong> attention au détail.</p>
            <p><strong>Piège :</strong> trop analyser.</p>
            <p><strong>Conseil :</strong> dire ce que tu ressens, pas seulement ce que tu fais.</p>
          </Card>

          <Card title="Vénus en Balance" subtitle="aime la beauté du couple">
            <p><strong>Signature :</strong> amour = duo.</p>
            <p><strong>Atout :</strong> diplomatie.</p>
            <p><strong>Piège :</strong> se perdre dans l’autre.</p>
            <p><strong>Conseil :</strong> apprendre à choisir même si ça déplaît.</p>
          </Card>

          <Card title="Vénus en Scorpion" subtitle="aime en profondeur">
            <p><strong>Signature :</strong> amour = vérité + fusion.</p>
            <p><strong>Atout :</strong> magnétisme.</p>
            <p><strong>Piège :</strong> jalousie / contrôle.</p>
            <p><strong>Conseil :</strong> remplacer le contrôle par la transparence.</p>
          </Card>

          <Card title="Vénus en Sagittaire" subtitle="aime avec liberté">
            <p><strong>Signature :</strong> amour = aventure.</p>
            <p><strong>Atout :</strong> enthousiasme.</p>
            <p><strong>Piège :</strong> peur de l’enfermement.</p>
            <p><strong>Conseil :</strong> un couple n’est pas une prison si l’espace est clair.</p>
          </Card>

          <Card title="Vénus en Capricorne" subtitle="aime sérieusement">
            <p><strong>Signature :</strong> amour = durée.</p>
            <p><strong>Atout :</strong> stabilité.</p>
            <p><strong>Piège :</strong> pudeur excessive.</p>
            <p><strong>Conseil :</strong> exprimer l’affection sans attendre d’être “sûr”.</p>
          </Card>

          <Card title="Vénus en Verseau" subtitle="aime autrement">
            <p><strong>Signature :</strong> amour = amitié + liberté.</p>
            <p><strong>Atout :</strong> modernité, ouverture.</p>
            <p><strong>Piège :</strong> distance émotionnelle.</p>
            <p><strong>Conseil :</strong> rester original sans éviter l’intimité.</p>
          </Card>

          <Card title="Vénus en Poissons" subtitle="aime l’âme">
            <p><strong>Signature :</strong> amour = magie.</p>
            <p><strong>Atout :</strong> romantisme, compassion.</p>
            <p><strong>Piège :</strong> illusion / sauvetage.</p>
            <p><strong>Conseil :</strong> distinguer amour et scénario.</p>
          </Card>
        </div>
      </section>

      {/* 5) conclusion */}
      <section className="space-y-4">
        <H2>5) Résumé (ultra clair)</H2>

        <Callout tone="ok" title="Ce que Vénus dit vraiment">
          <p>
            Vénus décrit ton <strong>langage de l’amour</strong>. Quand tu comprends ça,
            tu arrêtes de chercher “la bonne personne” et tu comprends comment
            <strong>tu construis une relation stable</strong>.
          </p>
        </Callout>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-white/10 bg-black/20 p-6">
        <p className="text-sm text-text/60">Suite recommandée</p>
        <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
          <p className="text-text/85">
            Pour compléter :{" "}
            <span className="font-semibold text-text/95">
              Mars en signes — désir, libido et façon d’agir
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
