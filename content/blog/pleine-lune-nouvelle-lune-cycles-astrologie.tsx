import type { ReactNode } from "react";
import Link from "next/link";
import { Pill, TagPillsInline, getGlowFromTags } from "./ui";
import { AUTHOR_PERSON, PUBLISHER_ORG, SITE_URL } from "@/lib/seo";

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

const ARTICLE_SLUG = meta.slug;
const ARTICLE_URL = `${SITE_URL}/blog/${ARTICLE_SLUG}`;
const COVER_URL = `${SITE_URL}${meta.cover}`;

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

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: meta.title,
        description: meta.description,
        image: COVER_URL,
        datePublished: meta.date,
        dateModified: meta.date,
        url: ARTICLE_URL,
        mainEntityOfPage: { "@type": "WebPage", "@id": ARTICLE_URL },
        author: AUTHOR_PERSON,
        publisher: PUBLISHER_ORG,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: meta.title, item: ARTICLE_URL },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Quelle est la différence entre Nouvelle Lune et Pleine Lune ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "La Nouvelle Lune est une phase d’introspection et d’intention. La Pleine Lune est une phase de révélation et de libération. Ensemble, elles forment un cycle de 29 jours.",
            },
          },
          {
            "@type": "Question",
            name: "Pourquoi se sent-on bizarre pendant la Pleine Lune ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "La Pleine Lune agit comme un amplificateur émotionnel : sommeil plus léger, hypersensibilité, irritabilité. Elle ne crée pas le problème, elle augmente le volume de ce qui était déjà présent.",
            },
          },
          {
            "@type": "Question",
            name: "Comment utiliser les cycles lunaires au quotidien ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "À la Nouvelle Lune, écris une intention claire et pose un micro-pas concret. À la Pleine Lune, libère ce qui te pèse : habitude, non-dit, charge mentale.",
            },
          },
          {
            "@type": "Question",
            name: "La Lune influence-t-elle vraiment les émotions ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "En astrologie, la Lune représente le climat intérieur : émotions profondes, réactivité instinctive, besoin de sécurité. Les phases lunaires offrent un rythme naturel pour observer et canaliser ses émotions.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <div className="space-y-10">
      {/* HERO */}
      <header className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-7 shadow-soft">
        {/* glows */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl ${glow}`}
        />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

        {/* overlays */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-transparent" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        <div className="relative">
          <Kicker>Émotions • Cycles • Intuition • Énergie intérieure</Kicker>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            La <strong>Pleine Lune</strong> et la <strong>Nouvelle Lune</strong>{" "}
            rythment ton énergie émotionnelle tous les 29 jours. Dans ton{" "}
            <Link href="/blog/qu-est-ce-qu-un-theme-astral" className="underline decoration-white/30 hover:decoration-white/60 transition">thème natal</Link>,
            la <Link href="/planetes/lune" className="underline decoration-white/30 hover:decoration-white/60 transition">Lune</Link>{" "}
            décrit ton <strong>monde intérieur</strong> — et ses cycles agissent
            comme une respiration.
          </p>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            Le problème ? Beaucoup de gens subissent ces phases sans les
            comprendre : sommeil perturbé, nerfs à vif, envie de tout plaquer…
            puis culpabilité de « ne pas gérer ».
          </p>

          <p className="mt-3 max-w-2xl text-text/80 leading-relaxed">
            Ici, tu trouveras une méthode <strong>simple et concrète</strong> pour
            utiliser chaque phase lunaire à ton avantage — sans rituel compliqué,
            sans superstition.
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

      {/* ── D&eacute;finition (Featured Snippet) ── */}
      <section className="rounded-2xl border border-indigo-400/25 bg-indigo-400/5 p-5 sm:p-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-3">D&eacute;finition</p>
        <p className="text-sm leading-relaxed text-text/80 md:text-base">
          Les <strong>cycles lunaires en astrologie</strong> alternent entre <strong>nouvelle lune</strong> (conjonction Soleil-<Link href="/planetes/lune" className="text-indigo-300 underline decoration-indigo-300/30 underline-offset-2 transition-colors hover:text-indigo-200">Lune</Link>) et <strong>pleine lune</strong> (opposition Soleil-Lune). Ce rythme de 29,5 jours influence les &eacute;nergies collectives, les &eacute;motions et les moments propices pour agir ou se retirer.
        </p>
      </section>

      {/* ── APP intro ── */}
      <p className="text-text/85 leading-relaxed">
        Vous vous sentez &laquo;&nbsp;bizarre&nbsp;&raquo; &agrave; chaque <strong>pleine lune</strong> ? Vous n&apos;&ecirc;tes pas fou — l&apos;astrologie l&apos;explique tr&egrave;s bien. Les <strong>cycles lunaires</strong> rythment notre &eacute;nergie, nos &eacute;motions et nos d&eacute;cisions bien plus qu&apos;on ne le croit. Ce guide d&eacute;crypte nouvelle lune et pleine lune, leurs effets r&eacute;els et comment les utiliser concr&egrave;tement.
      </p>

      {/* 1) base */}
      <section className="space-y-4">
        <H2>1) La Lune en astrologie : que repr&eacute;sente-t-elle ?</H2>

        <div className="rounded-2xl border border-white/10 bg-black/20 p-6 leading-relaxed text-text/85 space-y-3">
          <p>
            La Lune parle de ton <strong>climat intérieur</strong>. Elle décrit :
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>tes <strong>émotions profondes</strong> (et leur intensité)</li>
            <li>ta <strong>réactivité instinctive</strong> (ton{" "}
            <Link href="/blog/mars-en-signes-desir-libido-action" className="underline decoration-white/30 hover:decoration-white/60 transition">Mars</Link>{" "}
            y joue aussi)</li>
            <li>ton besoin de <strong>sécurité</strong> (lié à ta{" "}
            <Link href="/maisons/maison-4" className="underline decoration-white/30 hover:decoration-white/60 transition">maison 4</Link>) et de “cocon”</li>
            <li>ta relation au <strong>passé</strong> et aux souvenirs</li>
            <li>ton <strong>rythme</strong> (sommeil, humeur, fluctuations)</li>
          </ul>
        </div>

        <Callout tone="note" title="Phrase clé">
          <p>
            La Lune = ton <strong>monde intérieur</strong>. <Link href="/planetes/soleil" className="underline decoration-white/30 hover:decoration-white/60 transition">Le Soleil</Link> = ton{" "}
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
            <li>avoir une conversation honnête (sans agressivité) — la{" "}
            <Link href="/synastrie" className="underline decoration-white/30 hover:decoration-white/60 transition">synastrie</Link>{" "}
            peut aider à comprendre les tensions</li>
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
            L’astrologie (et la lecture des{" "}
            <Link href="/aspects" className="underline decoration-white/30 hover:decoration-white/60 transition">aspects</Link>) aide quand elle te rend <strong>plus lucide</strong>, pas quand elle te fige.
          </p>
        </Callout>
      </section>

      {/* 8) secret */}
      <section className="space-y-4">
        <H2>8) Le vrai secret des cycles lunaires en astrologie</H2>

        <div className="rounded-2xl border border-white/10 bg-black/20 p-6 leading-relaxed text-text/85 space-y-3">
          <p>
            La Lune ne décide pas à ta place. Elle te montre un rythme — suis tes{" "}
            <Link href="/transits" className="underline decoration-white/30 hover:decoration-white/60 transition">transits</Link>{" "}
            pour le voir en action.
          </p>
          <p>
            Si tu résistes : <strong>tension</strong>.  
            Si tu écoutes : <strong>transformation</strong>.
          </p>
          <p>
            La Lune t’apprend que la vie n’est pas linéaire (comme une{" "}
            <Link href="/blog/conjonction-melange-des-forces" className="underline decoration-white/30 hover:decoration-white/60 transition">conjonction</Link> le montre) : elle est{" "}
            <strong>cyclique</strong>. Et toi aussi.
          </p>
        </div>
      </section>

      {/* 9) résumé */}
      <section className="space-y-4">
        <H2>9) Synth&egrave;se : pleine lune et nouvelle lune en bref</H2>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="p-5 border-b md:border-b-0 md:border-r border-white/10">
              <p className="text-sm text-text/60">Essence</p>
              <p className="mt-2 font-semibold text-text/90">Cycle émotionnel</p>
              <p className="mt-2 text-text/80">
                Nouvelle Lune = intention. Pleine Lune = révélation / libération. Découvre le{" "}
              <Link href="/blog/lunarien" className="underline decoration-white/30 hover:decoration-white/60 transition">profil Lunarien</Link>.
              </p>
            </div>

            <div className="p-5 border-b md:border-b-0 md:border-r border-white/10">
              <p className="text-sm text-text/60">Risque</p>
              <p className="mt-2 font-semibold text-text/90">Réactivité</p>
              <p className="mt-2 text-text/80">
                Fatigue, conflits, surcharge émotionnelle si tu te forces. Lis aussi les{" "}
              <Link href="/blog/qualites-defauts-12-signes-zodiaque" className="underline decoration-white/30 hover:decoration-white/60 transition">qualités et défauts des 12 signes</Link>.
              </p>
            </div>

            <div className="p-5">
              <p className="text-sm text-text/60">Levier</p>
              <p className="mt-2 font-semibold text-text/90">Conscience</p>
              <p className="mt-2 text-text/80">
                Observer → choisir → libérer. Le cycle devient un outil. Consulte le{" "}
              <Link href="/dictionnaire-astrologique" className="underline decoration-white/30 hover:decoration-white/60 transition">dictionnaire astrologique</Link>{" "}
              pour approfondir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ visible ── */}
      <section className="space-y-4">
        <H2>Questions fr&eacute;quentes sur les cycles lunaires</H2>

        <Card title="Quelle est la diff&eacute;rence entre Nouvelle Lune et Pleine Lune ?">
          <p>
            La Nouvelle Lune est une phase d&apos;introspection et d&apos;intention. La Pleine Lune est une phase de r&eacute;v&eacute;lation et de lib&eacute;ration. Ensemble, elles forment un cycle de 29 jours.
          </p>
        </Card>

        <Card title="Pourquoi se sent-on bizarre pendant la Pleine Lune ?">
          <p>
            La Pleine Lune agit comme un amplificateur &eacute;motionnel : sommeil plus l&eacute;ger, hypersensibilit&eacute;, irritabilit&eacute;. Elle ne cr&eacute;e pas le probl&egrave;me, elle augmente le volume de ce qui &eacute;tait d&eacute;j&agrave; pr&eacute;sent.
          </p>
        </Card>

        <Card title="Comment utiliser les cycles lunaires au quotidien ?">
          <p>
            &Agrave; la Nouvelle Lune, &eacute;cris une intention claire et pose un micro-pas concret. &Agrave; la Pleine Lune, lib&egrave;re ce qui te p&egrave;se : habitude, non-dit, charge mentale.
          </p>
        </Card>

        <Card title="La Lune influence-t-elle vraiment les &eacute;motions ?">
          <p>
            En astrologie, la <Link href="/planetes/lune" className="underline decoration-white/30 hover:decoration-white/60 transition">Lune</Link> repr&eacute;sente le climat int&eacute;rieur : &eacute;motions profondes, r&eacute;activit&eacute; instinctive, besoin de s&eacute;curit&eacute;. Les phases lunaires offrent un rythme naturel pour observer et canaliser ses &eacute;motions.
          </p>
        </Card>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-white/10 bg-black/20 p-6">
        <p className="text-sm text-text/60">Continue ta lecture</p>
        <div className="mt-3 space-y-2 text-text/85">
          <p>
            Découvre{" "}
            <Link href="/blog/amour-fidelite-signes-zodiaque" className="underline decoration-white/30 hover:decoration-white/60 transition font-semibold text-text/95">amour et fidélité selon les signes</Link>{" "}
            ou explore{" "}
            <Link href="/blog/venus-en-signes-style-amoureux" className="underline decoration-white/30 hover:decoration-white/60 transition font-semibold text-text/95">Vénus en signes</Link>{" "}
            pour compléter ta compréhension des émotions et de l’amour.
          </p>
        </div>
        <div className="mt-4">
          <Link
            href="/blog"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-text/90 hover:bg-white/10 transition"
          >
            ← Tous les articles
          </Link>
        </div>
      </section>
    </div>
    </>
  );
}
