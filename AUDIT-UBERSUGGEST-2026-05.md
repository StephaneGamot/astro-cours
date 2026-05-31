# Audit SEO style Ubersuggest — astro-cours.com

**Date :** 31 mai 2026
**URL auditée :** https://www.astro-cours.com
**Pages échantillonnées :** Home, /signes/belier, /maisons/maison-1, /blog, /blog/longevite-vie-astrologie, /a-propos, /robots.txt, /sitemap.xml

---

## 🟢 Site Health Score — 88 / 100

| Catégorie               | Score   | Statut |
| ----------------------- | ------- | ------ |
| **On-Page SEO**         | 94/100  | 🟢     |
| **Indexabilité**        | 78/100  | 🟡     |
| **Performance (tech)**  | 92/100  | 🟢     |
| **Structured Data**     | 90/100  | 🟢     |
| **Mobile / A11y**       | 88/100  | 🟢     |
| **Sécurité / Headers**  | 85/100  | 🟢     |
| **Profil de liens**     | 60/100  | 🟡     |
| **Maillage interne**    | 75/100  | 🟡     |
| **Profondeur contenu**  | 70/100  | 🟡     |

**Synthèse :** la base technique est excellente (post-audits Screaming Frog v4 + indexation). Les gains restants sont principalement **éditoriaux** (profondeur des pages hubs), **trust** (backlinks, social), et **quelques détails techniques de finition**.

---

## 🚨 Erreurs critiques — 0

Aucune. Pas de 500, 404 internes, broken canonical, mixed content, robots bloquant, HSTS manquant, HTTPS cassé.

---

## ⚠️ Avertissements (à corriger en priorité)

### W1 — Boutons de partage social cassés (impact UX/social signals)
Sur les articles blog, les liens de partage Facebook / LinkedIn / X ont leur paramètre `u=` / `url=` **vide**.
Exemple observé : `https://www.facebook.com/sharer/sharer.php?u=` (sans URL).
**Fix :** passer l'URL canonique de l'article au composant de partage (probablement un bug côté SSR avec `window.location.href` non hydraté).

### W2 — Sitemap : `lastModified = now` pour les pages statiques
`app/sitemap.ts` utilise `new Date()` (timestamp courant) pour toutes les pages sauf les articles. Google considère alors **toutes les pages comme modifiées à chaque crawl** → bruit, perte de signal de fraîcheur sur les vraies mises à jour.
**Fix :** stocker une `lastModified` réelle par page (champ `updated` dans les JSON `signes/maisons/planetes.details.json`).

### W3 — CSP autorise `'unsafe-inline'` sur `script-src`
`Content-Security-Policy: script-src 'self' 'unsafe-inline' https://analytics.ahrefs.com`. Cela neutralise l'essentiel de la CSP côté XSS.
**Fix :** migrer vers une CSP avec **nonce** (Next.js 16 le supporte via `headers()` + middleware) ou hash. Supprimer `'unsafe-inline'`.

### W4 — 12 pages « Détectée, actuellement non indexée » (GSC, depuis 06/01/2026)
Déjà identifié dans `AUDIT-SEO-INDEXATION.md`. Cause principale : pages **maisons** trop courtes (~600–900 mots) avec template identique → quasi-duplicate côté Google.
**Fix prioritaire :** enrichir 3–4 pages maisons à 1 500+ mots utiles (sections originales : ex. carrière par maison, exercices, exemples historiques) **avant** les autres, et observer si Google indexe.

### W5 — Compte Twitter référencé mais probablement inexistant
`twitter:site = "@astro_cours"` et `twitter:creator = "@astro_cours"` dans `app/layout.tsx`. Vérifier que le handle existe — sinon Twitter ignore les cards et c'est un signal négatif.
**Fix :** créer le compte ou retirer les `twitter:site/creator`.

### W6 — Page tag blog (`/blog?tag=…`) : duplicate / thin content possible
Les pages d'articles affichent une rangée de tags qui pointent vers `/blog?tag=longévité`, etc. Si ces URLs renvoient une liste de 1–3 articles avec le même H1 que `/blog`, c'est du **near-duplicate**.
**Fix :** soit `noindex` sur `/blog?tag=*`, soit faire de vraies pages tag (`/blog/tag/[slug]`) avec H1 + intro propre + 5+ articles.

---

## 💡 Recommandations (gains incrémentaux)

### R1 — Schema.org enrichi
- Ajouter `Course` ou `EducationalOccupationalProgram` sur la home (le site se positionne « cours »).
- Ajouter `Organization` au niveau global (logo, sameAs Facebook + futurs réseaux).
- Vérifier que chaque page maison/signe a bien `Article` + `BreadcrumbList` + `FAQPage` (déjà ok d'après audit v4).

### R2 — Profondeur de contenu : viser 1 500+ mots utiles sur les hubs faibles
D'après l'audit indexation, les 12 maisons partagent le même template avec **200–400c** par section prose. Cibles :
- Maisons : ajouter par maison **3 sections originales** (cas concrets, transits notoires, exemples de célébrités, exercice pratique long).
- Planètes : même approche.

### R3 — Maillage interne contextuel (pas seulement footer)
Les articles blog devraient lier **dans le corps** vers :
- la page signe ou maison citée (au moins 2 liens par article),
- 1 ou 2 articles « pillar » connexes.

Outil rapide : grep des MDX pour articles avec < 3 liens internes en `[texte](https://www.astro-cours.com/...)`.

### R4 — Optimiser le LCP image
La home preload une LCP (`astro-cours-l.2c253f15.webp` en `q=70 w=1920`). Vérifier que :
- l'image est marquée `priority` sur le `<Image>` Next.js,
- pas d'image plus grosse que nécessaire au format mobile (`sizes` adapté),
- `fetchpriority="high"` est appliqué.

### R5 — Open Graph dédié par signe/maison
Actuellement `meta-og:image` réutilise des images de l'app (`/images/zodiaque/belier.webp`, etc.). Idéalement créer des **OG cards 1200×630** dédiées avec titre + symbole pour chaque entité → meilleur CTR sur les partages.

### R6 — Stratégie de backlinks (vraie cause du « detected not indexed »)
Domaine jeune (détecté GSC le 6 janv. 2026). Pour pousser l'autorité :
- 2–3 articles invités sur sites lifestyle/spiritualité francophones (Marie Claire Astro, Elle Astro, blogs établis),
- guest post sur HelloAstro, AstroTheme, ou échanges de liens avec confrères astrologues,
- inscription dans annuaires niche (DMOZ-style FR : annuaire-spiritualite, astrologie-club, etc. — éviter les fermes de liens),
- créer un profil **Mastodon** (préférable à X pour ce public) + IG + YouTube minimal pour `sameAs`.

### R7 — Contenu « evergreen » à fort potentiel SEO (mots-clés à forte intent)
Suggestions de pages/articles à créer (en se basant sur la sémantique existante et l'intérêt FR estimé) :

| Sujet                                      | Type      | Volume FR estimé | Difficulté |
| ------------------------------------------ | --------- | ---------------- | ---------- |
| « Calcul thème astral gratuit »            | Outil     | Élevé            | Forte      |
| « Compatibilité amoureuse signes »         | Page hub  | Élevé            | Moyenne    |
| « Ascendant astrologique calcul »          | Outil     | Très élevé       | Forte      |
| « Mercure rétrograde 2026/2027 dates »     | Article   | Élevé saisonnier | Faible     |
| « Pleine lune calendrier 2026 »            | Article   | Très saisonnier  | Faible     |
| « Signe chinois + occidental combiné »     | Article   | Moyen            | Faible     |
| « Lune noire Lilith par signe »            | Pillar    | Moyen            | Faible     |

L'**outil gratuit de calcul de thème** est le levier #1 — c'est l'aimant à backlinks et à trafic récurrent qui manque actuellement.

### R8 — Page « auteur » : enrichir Schema Person
`/auteur/stephane-gamot` existe et est bien étoffée. Ajouter `Person` JSON-LD avec `knowsAbout: ["astrologie", "thème natal", ...]`, `sameAs: [FB, futur IG, futur YT]`, et `alumniOf` si applicable (école / formation Michiels).

### R9 — Hreflang
Site mono-langue FR (`languages: { "fr-FR": SITE_URL }` dans `metadata`). Si pas d'ambition multilingue → OK. Sinon, ajouter `<link rel="alternate" hreflang="x-default">`.

### R10 — Logs serveur / GSC : surveiller le crawl budget
Sur les pages indexées partiellement, vérifier dans GSC > Statistiques sur l'exploration que Googlebot ne perd pas de temps sur :
- les paramètres `?tag=…`,
- les redirections (un `301` déjà en place pour `comprendre-son-signe-astrologique-et-son-ascendant`).

---

## 📈 Détail par catégorie

### On-Page SEO (94/100)

**Forces (confirmées sur l'échantillon)**
- Titles uniques entre 44 et 65 caractères, intégrant marque + sujet.
- Meta descriptions entre 128 et 158 caractères, bien rédigées.
- 1 seul H1 par page, descriptif et orienté entité (« Bélier — Encyclopédie complète… »).
- Hiérarchie H2/H3 propre et sémantique.
- Images en WebP/AVIF via `next/image`, attributs `alt` présents.
- Canonical absolu sur 100 % des pages échantillonnées.
- Open Graph + Twitter card complets.
- Breadcrumbs présents (Maisons : « Accueil / Maisons / Maison I »).

**À corriger**
- `meta-keywords` encore présent sur `/maisons/maison-1` (ignoré par Google mais inutile, à supprimer pour ne pas envoyer de signal « SEO d'il y a 15 ans »).
- Pages maisons : le H1 et le titre principal apparaissent **deux fois** (« # Maison I — L'Ascendant » puis « # Maison I — L'Ascendant » plus loin dans la TOC dupliquée). Une **table des matières est rendue deux fois** sur cette page. Bug d'affichage à corriger.

### Indexabilité (78/100)
- `robots.txt` minimaliste et correct (`Allow: /`, `Disallow: /api/`, sitemap déclaré).
- Sitemap dynamique, 60+ URLs.
- 12 URLs en « Detected not indexed » (cf. W4 / R6).
- Pas de noindex involontaire détecté.

### Performance technique (92/100)
- HSTS + preload activé, `compress: true`, `Vary: Accept-Encoding` forcé.
- `next/image` AVIF/WebP, deviceSizes complets.
- Font Inter (`display: swap`) + Cormorant (`display: optional`) → 0 FOUT/CLS.
- `dns-prefetch` + `preconnect` pour Ahrefs Analytics.
- `optimizeCss: false` après mesure (commentaire détaillé dans `next.config.mjs` — décision justifiée).
- Targets ES2022 → no polyfills.

**À mesurer activement :** lance un Lighthouse mobile en local (`npx lighthouse https://www.astro-cours.com --view`) pour confirmer LCP < 2.5s et CLS < 0.1.

### Structured Data (90/100)
- Article + BreadcrumbList + FAQPage sur les pages maisons. ✅
- Person + Organization sur la page auteur. ✅
- Manque : `Course` sur la home, `WebSite` avec `SearchAction` (sitelinks searchbox).

### Sécurité / Headers (85/100)
- HSTS preload : ✅
- X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy : ✅
- CSP : ⚠️ `'unsafe-inline'` dans `script-src` (cf. W3).

### Profil de liens (60/100)
- Pas mesurable précisément ici (besoin Ahrefs/Majestic). Le domaine étant détecté GSC depuis 4 mois, supposer < 50 referring domains. Cf. R6.

---

## 🎯 Plan d'action prioritaire (1 mois)

| # | Action                                                              | Effort | Impact | Priorité |
| - | ------------------------------------------------------------------- | ------ | ------ | -------- |
| 1 | Corriger les boutons de partage social (W1)                         | 1h     | Faible | P0       |
| 2 | Fix sitemap `lastModified` (W2)                                     | 2h     | Moyen  | P0       |
| 3 | Vérifier/créer @astro_cours (W5) ou retirer les meta                | 30min  | Faible | P0       |
| 4 | Décision sur `/blog?tag=…` : `noindex` ou vraies pages tag (W6)     | 2–4h   | Moyen  | P1       |
| 5 | Enrichir 4 pages maisons à 1 500+ mots utiles (W4 + R2)             | 8h     | Élevé  | P1       |
| 6 | Ajouter Schema `Course` + `WebSite SearchAction` sur la home (R1)   | 1h     | Moyen  | P1       |
| 7 | Migrer CSP vers nonce (W3)                                          | 3h     | Moyen  | P2       |
| 8 | Lancer la conception d'un calculateur de thème (R7)                 | 20j    | Très élevé | P2  |
| 9 | Stratégie backlinks : 3 guest posts + annuaires (R6)                | 5j     | Très élevé | P2  |
| 10| Audit Lighthouse réel + correction LCP image home (R4)              | 2h     | Moyen  | P2       |

---

## 📊 Estimation gain trafic à 6 mois (si plan exécuté)

| Levier                                | Trafic mensuel estimé |
| ------------------------------------- | --------------------- |
| Résolution « detected not indexed »   | +400 à +800 visites   |
| Enrichissement hubs maisons/planètes  | +600 à +1 500 visites |
| Calculateur thème astral (R7)         | +2 000 à +10 000      |
| Articles saisonniers (Mercure R., pleines lunes) | +500 à +3 000 |
| Backlinks (autorité globale)          | Multiplie le tout     |

Hypothèse de base : domaine encore jeune, premières percées attendues entre M+3 et M+6.

---

**Audits précédents toujours valables :** `AUDIT-SCREAMING-FROG.md` (10 mai), `AUDIT-SEO-INDEXATION.md` (18 mai), `AUDIT-SEO-A11Y-PERF.md` (22 avril). Ce rapport-ci se concentre sur les leviers **encore ouverts** au 31 mai 2026.
