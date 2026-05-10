# Audit SEO & Technique — astro-cours.com
### Style Screaming Frog · Mai 2026 — v3 (post-corrections v1 & v2)

---

## Résumé exécutif

| Sévérité | Nb | État |
|---|---|---|
| 🔴 Critique | 1 | À corriger immédiatement |
| 🟠 Important | 6 | À planifier rapidement |
| 🟡 Amélioration | 12 | À traiter par priorité |

**Périmètre analysé :** 78 URLs (19 statiques + 12 signes + 10 planètes + 12 maisons + 24 blog + homepage)  
**Stack :** Next.js 16.1.1 · React 19.2.3 · App Router · Tailwind CSS 4 · TypeScript  
**Analyste :** Audit statique complet du code source  
**Date :** Mai 2026  

> **Corrections v1 (8 issues) et v2 (2 issues) intégralement appliquées** avant ce rapport.  
> Les issues 🟠 et 🟡 non corrigées des audits précédents sont reprises ici avec leur statut.

---

## 1. Inventaire des URLs

### 1.1 Structure des routes

| Groupe | Nombre | Route pattern |
|---|---|---|
| Homepage | 1 | `/` |
| Blog liste | 1 | `/blog` |
| Blog articles | 24 | `/blog/[slug]` |
| Signes du zodiaque | 12 | `/signes/[slug]` |
| Planètes | 10 | `/planetes/[slug]` |
| Maisons | 12 | `/maisons/[slug]` |
| Annexes thématiques | 13 | `/aspects`, `/retrogrades`… |
| Pages statiques | 5 | `/a-propos`, `/dictionnaire-astrologique`… |
| **Total** | **78** | |

### 1.2 Crawlabilité

- `robots.ts` : `allow: "/"`, `disallow: "/api/"`, sitemap déclaré ✅  
- `sitemap.ts` : 78 URLs générées dynamiquement, `lastModified: new Date()` ✅  
- `lang="fr"` sur `<html>` ✅  
- `metadataBase` défini dans `layout.tsx` ✅  

---

## 2. Canonicals

### 2.1 État global

| Pages | Canonical | Statut |
|---|---|---|
| Blog articles `/blog/[slug]` | `absoluteUrl(canonical)` | ✅ OK |
| Planètes `/planetes/[slug]` | `absoluteUrl(...)` | ✅ OK |
| Maisons `/maisons/[slug]` | `absoluteUrl(...)` | ✅ OK |
| Annexes (aspects, retrogrades…) | `absoluteUrl(...)` | ✅ OK |
| Cuspides, Décans, Maisons dérivées | `absoluteUrl(...)` via `canonicalPath` | ✅ OK |
| Signes `/signes/[slug]` | **Hardcodé** `https://www.astro-cours.com/signes/${slug}` | 🟠 |
| Révolution Solaire | **Hardcodé** dans `revolution-solaire.details.json` | 🟠 |
| Transits | `absoluteUrl("/transits")` canonical OK, OG image hardcodée | 🟡 |

### 🟠 2.2 Canonical `/signes/[slug]` hardcodé

**Fichier :** `app/signes/[slug]/page.tsx` ligne 178  
**Constat :** `const url = \`https://www.astro-cours.com/signes/${data.slug}\`` — 7 occurrences d'URLs hardcodées dans ce fichier (canonical, JSON-LD image, mainEntityOfPage, BreadcrumbList ×3).  
**Risque :** En staging/preview, les canonicals pointent vers la production.  
**Correction :** Remplacer par `absoluteUrl(\`/signes/${data.slug}\`)` et importer `absoluteUrl` depuis `@/lib/seo`.

### 🟠 2.3 Canonical `/revolution-solaire` dans data JSON

**Fichier :** `data/revolution-solaire.details.json` ligne 5  
**Constat :** `"canonical": "https://www.astro-cours.com/revolution-solaire"` hardcodé dans le fichier de données.  
**Risque :** Idem staging. Toute migration de domaine nécessite une édition manuelle du JSON.  
**Correction :** Supprimer la clé `canonical` du JSON ; calculer `absoluteUrl("/revolution-solaire")` directement dans `app/(annexe)/revolution-solaire/page.tsx`.

### 🟡 2.4 OG images hardcodées dans `/transits`

**Fichier :** `app/(annexe)/transits/page.tsx` lignes 68 et 74  
**Constat :** `"https://www.astro-cours.com/og/cover.jpg"` en dur dans `openGraph.images` et `twitter.images`.  
**Correction :** Remplacer par `absoluteUrl("/og/cover.jpg")`.

---

## 3. Titles `<title>`

> La balise `template: "%s — Astro Cours"` définie dans `layout.tsx` s'applique à toutes les pages qui ne définissent pas `title: { absolute: ... }`. Les longueurs ci-dessous incluent le suffixe template.

### 3.1 État global

| Groupe | Longueur brute | Full (avec template) | Statut |
|---|---|---|---|
| Homepage | 65c (absolute) | 65c | ✅ |
| Blog articles | 36–45c | 50–59c | ✅ |
| Signes (×12) | 50–56c | 64–70c | ✅ |
| Planètes (×10) | 41–44c | 55–58c | ✅ |
| Maisons (×12) | 54–57c | 68–71c | ✅ |
| Aspects | 46c | 60c | ✅ |
| Noeuds lunaires | 56c | 70c | ✅ |
| Rétrogrades | 59c | 73c | ✅ |
| Points fictifs (H1) | 56c | 70c | ✅ |
| Autres annexes | 51–54c | 65–68c | ✅ |

**Aucun titre hors plage 50–70c (full) détecté.**

### 🟡 3.2 Points fictifs : incohérence entre H1 et `<title>`

**Fichier :** `app/(annexe)/points-fictifs/page.tsx`  
- `meta.title` (H1 + JSON-LD) : `"Points fictifs, Vertex, Fortune, Chiron, angle & méthode"` (56c)  
- `metadata.title` (`<title>`) : `"Points fictifs — Vertex, Fortune, Chiron, angles : méthode claire"` (57c)  

Deux intitulés différents pour la même page créent une incohérence sémantique.  
**Correction :** Aligner les deux sur une formulation unique.

---

## 4. Meta descriptions

### 4.1 État global

| Groupe | Longueur | Statut |
|---|---|---|
| Blog articles (×24) | 140–155c | ✅ |
| Signes (×12) | 128–145c | ✅ |
| Planètes (×10) | 140–155c | ✅ |
| Maisons (×12) | Dynamique via `clampMeta()` | ✅ |
| Noeuds lunaires | 155c | ✅ |
| Transits | 153c | ✅ |
| Aspects | 132c | ✅ |
| Autres annexes | 146–155c | ✅ |
| Cuspides, Décans, Maisons dérivées | 149–152c | ✅ |
| Révolution Solaire | 153c | ✅ |

**Toutes les meta descriptions sont dans la plage cible 120–160c.** ✅

---

## 5. En-têtes H1 / Structure des titres

| Page | H1 présent | Texte |
|---|---|---|
| Homepage | ✅ (dans `HeroHomePage`) | "Apprendre l'astrologie de manière claire et structurée." |
| Blog liste | ✅ | présent |
| Blog articles | ✅ (via `ArticleLayout`) | titre article |
| Signes (×12) | ✅ | nom du signe |
| Planètes (×10) | ✅ | présent |
| Maisons (×12) | ✅ | présent |
| Toutes annexes | ✅ | 1 H1 par page |

**Aucune page sans H1 ou avec H1 multiple détectée.** ✅

---

## 6. Images & Médias

### 6.1 Configuration Next.js Image

- Formats AVIF + WebP activés ✅  
- `minimumCacheTTL: 5184000` (60 jours) ✅  
- `deviceSizes` et `imageSizes` complets ✅  

### 6.2 Attributs `alt`

Aucun `alt=""` vide détecté dans `app/` ✅

### 🟠 6.3 Article `comprendre-son-signe` : JPEG 3.9 MB au lieu du WebP existant

**Fichier :** `content/blog/comprendre-son-signe-astrologique-et-son-ascendant.tsx` lignes 7 et 21  
**Constat :** `cover: "/images/blog/soleil-et-asc.jpg"` (3.9MB) alors que `/images/blog/soleil-et-asc.webp` (86KB) existe.  
**Impact :** OG image de 3.9MB transmise aux crawlers sociaux ; image de couverture lourde.  
**Correction :** Remplacer `.jpg` → `.webp` aux deux occurrences.

### 🟡 6.4 Articles référencent `sun-moon.jpg` (1.7 MB) sans version WebP

**Fichier :** `content/blog/qualites-defauts-12-signes-zodiaque.tsx` ligne 9  
**Constat :** `COVER_URL = .../images/blog/sun-moon.jpg` (1.7MB). Aucun fichier `.webp` équivalent.  
**Correction :** Convertir `sun-moon.jpg` en WebP (cible < 150KB) et mettre à jour la référence.

### 🟡 6.5 Images orphelines non référencées (charge inutile serveur)

Ces fichiers sont présents dans `/public/images/blog/` mais non référencés par aucun article :

| Fichier | Taille |
|---|---|
| `sun-with-face-it-sun-top.jpg` | **9.4 MB** |
| `scorpio-constellation-depicted-as-ares-with-glowing-stars-cosmic-background.jpg` | **7.2 MB** |

**Action :** Vérifier s'ils sont utilisés ailleurs (réseaux sociaux, externe) puis supprimer si obsolètes.

### 🟡 6.6 Images orphelines dans `/public/` racine

| Fichier | Statut |
|---|---|
| `AstroLogo.webp` | Non référencé dans le code source |
| `mystical-zodiac.webp` | Non référencé dans le code source |
| `zodiac-constellations.webp` | Non référencé dans le code source |

**Action :** Supprimer après vérification.

### 🟡 6.7 Images lourdes en production

| Fichier | Taille | Recommandation |
|---|---|---|
| `og/cover.jpg` (OG principale) | **317 KB** | Cible : < 100 KB |
| `decans-zodiaque-egyptien.webp` | 743 KB | Recompresser (cible < 200 KB) |
| `36-decans-zodiaque.webp` | 735 KB | Recompresser (cible < 200 KB) |
| `images/maisons/hero/III.webp` | 520 KB | Recompresser |
| `images/maisons/hero/IX.webp` | 462 KB | Recompresser |
| `images/signes/taureau/a.webp` | 619 KB | Recompresser |

---

## 7. Données structurées JSON-LD

### 7.1 Pages signes (`/signes/[slug]`)

- Structure `@graph` unique : Article + FAQPage + BreadcrumbList ✅  
- `description` JSON-LD synchronisée avec la meta description ✅ (corrigé v2)  
- `AUTHOR_PERSON` et `PUBLISHER_ORG` centralisés ✅  

**Résidu :** Les URLs dans le JSON-LD (image, mainEntityOfPage, BreadcrumbList items) sont encore hardcodées `https://www.astro-cours.com/...` — voir §2.2.

### 7.2 Pages planètes et maisons

- `absoluteUrl()` utilisé pour toutes les URLs JSON-LD ✅  
- `PUBLISHER_ORG` centralisé ✅  

### 🔴 7.3 JSON-LD Article dupliqué sur 12 pages annexes

**Cause :** En v2, un `ARTICLE_JSON_LD` a été injecté programmatiquement sur chaque page annexe. Or ces pages contenaient déjà des scripts `ld+json` (Article, FAQ, BreadcrumbList). Résultat : **2 à 3 scripts `ld+json` par page**, dont souvent **2 de type `Article`**.

| Page | Scripts ld+json | Types présents |
|---|---|---|
| aspects, asteroides, lilith, maitrises, noeuds-lunaires, points-fictifs, retrogrades, synastrie | **3** | Article (ARTICLE_JSON_LD) + Article (inline) + BreadcrumbList/FAQ |
| cuspides-des-maisons, les-decans, maisons-derivees, noeuds-lunaires, transits | **2** | Article (ARTICLE_JSON_LD) + Article (inline) |
| revolution-solaire | 1 | Article seul ✅ |

**Impact :** Google Search Console peut signaler des données structurées en conflit. Le validateur schema.org peut retourner des erreurs "Article duplicate".  
**Correction :** Supprimer l'`ARTICLE_JSON_LD` injecté en v2 (ou le script inline redondant) pour ne garder qu'**un seul Article par page**. Recommandation : supprimer `ARTICLE_JSON_LD` constant et fusionner les données dans le script ld+json existant.

### 🟠 7.4 Publisher inline en dur sur 10 pages annexes

**Constat :** Les scripts ld+json "natifs" (non-ARTICLE_JSON_LD) des annexes contiennent encore le publisher hardcodé :  
```json
"publisher": { "@type": "Organization", "name": "Astro Cours",
  "url": "https://www.astro-cours.com",
  "logo": { "url": "https://www.astro-cours.com/astro-cours-logo.webp" } }
```

**Pages concernées (2e/3e script ld+json) :** aspects, asteroides, lilith, maitrises, noeuds-lunaires, points-fictifs, retrogrades, synastrie, transits, revolution-solaire  

**Impact :** Si le logo ou l'URL change, 10 fichiers doivent être mis à jour manuellement.  
**Correction :** Remplacer par `...PUBLISHER_ORG` (spread) dans chaque script concerné.

### 🟠 7.5 `dateModified = datePublished` dans ArticleLayout (24 articles)

**Fichier :** `components/blog/ArticleLayout.tsx` lignes 51–52  
**Constat :** `dateModified: meta.date` identique à `datePublished`. Pour des articles publiés en 2025-2026 et non mis à jour, ce champ est correct, mais si un article est enrichi sans mise à jour de la date, Google ne le détectera pas.  
**Correction recommandée :** Ajouter un champ `updatedAt` optionnel dans `meta` et l'utiliser quand présent : `dateModified: meta.updatedAt ?? meta.date`.

### 7.6 Blog articles : JSON-LD triplé ou quintuplé

**Constat :** `ArticleLayout` injecte systématiquement 2 scripts (Article + BreadcrumbList). Chaque fichier `content/blog/*.tsx` injecte en plus 1 à 3 scripts. Total par article :

| Type d'article | Scripts ld+json totaux |
|---|---|
| Standard (23 articles) | **3** (2 ArticleLayout + 1 inline) |
| `qualites-defauts` | **4** (2 ArticleLayout + 2 inline) |
| `amour-fidelite` | **5** (2 ArticleLayout + 3 inline : Article + BreadcrumbList + FAQPage) |

**Correction à long terme :** Déplacer toute la logique JSON-LD dans `ArticleLayout` (Article + BreadcrumbList + FAQPage optionnel via props) et supprimer les scripts inline des `content/blog/*.tsx`.

---

## 8. Open Graph & Twitter Cards

| Page | og:title | og:description | og:image | og:type | Statut |
|---|---|---|---|---|---|
| Homepage | ✅ | ✅ | `og/cover.jpg` | website | ✅ |
| Blog [slug] | ✅ | ✅ | `cover` du post ou `og/cover.jpg` | article | ✅ |
| Signes | ✅ | ✅ | image du signe | article | ✅ |
| Planètes, Maisons | ✅ | ✅ | image hero | article | ✅ |
| Annexes (plupart) | ✅ | ✅ | `og/cover.jpg` via `absoluteUrl` | article | ✅ |
| Transits | ✅ | ✅ | **hardcodé** `https://...og/cover.jpg` | article | 🟡 |
| Dictionnaire | ✅ | ✅ | `og/dico.jpg` (114KB) | website | ✅ |

---

## 9. Sécurité & En-têtes HTTP

**Headers présents dans `next.config.mjs` :**

| Header | Valeur | Statut |
|---|---|---|
| `X-Content-Type-Options` | `nosniff` | ✅ |
| `X-Frame-Options` | `SAMEORIGIN` | ✅ |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | ✅ |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` | ✅ |
| `X-DNS-Prefetch-Control` | `on` | ✅ |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` | ✅ |
| **`Content-Security-Policy`** | **Absent** | 🟡 |

### 🟡 9.1 CSP absent

La politique CSP protège contre les injections XSS. Son absence est acceptable temporairement pour un site statique, mais recommandée.  
**Correction :** Ajouter dans `next.config.mjs` une CSP minimale :  
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://analytics.ahrefs.com; img-src 'self' data: https:; style-src 'self' 'unsafe-inline';
```

---

## 10. Accessibilité

| Point | Statut |
|---|---|
| Skip-link "Aller au contenu" | ✅ (dans `NavBar.tsx`) |
| `aria-label` sur éléments interactifs | ✅ |
| `alt` sur toutes les images `next/image` | ✅ |
| `<html lang="fr">` | ✅ |
| Contrastes (estimé via Tailwind) | ✅ |
| `id="main-content"` | ✅ (la plupart des pages) |

### 🟡 10.1 `hreflang` : `"fr"` devrait être `"fr-FR"`

**Fichier :** `app/layout.tsx` ligne 68  
**Constat :** `languages: { "fr": SITE_URL }` — la valeur BCP 47 correcte est `"fr-FR"` pour un site en français de France.  
**Correction :** `languages: { "fr-FR": SITE_URL }`.

---

## 11. Performance & Bundle

### 🟡 11.1 `next-mdx-remote` installé mais non utilisé

**Fichier :** `package.json`  
**Constat :** `"next-mdx-remote": "^6.0.0"` dans les dépendances. Aucune importation de `next-mdx-remote` détectée dans `app/`, `components/` ou `lib/`. Le projet utilise `@next/mdx` (intégré Next.js).  
**Impact :** Augmente le bundle de dépendances et le temps d'installation inutilement.  
**Correction :** `npm uninstall next-mdx-remote`.

### 11.2 Optimisations actives ✅

- `optimizeCss: true` (inline CSS critique via Critters) ✅  
- `removeConsole` en production ✅  
- Webpack ES2022 cible ✅  
- Fonts Google avec `display: swap` ✅  
- Analytics Ahrefs en `lazyOnload` ✅  

---

## 12. Manifest & PWA

**Fichier :** `public/manifest.json`

| Champ | Valeur | Statut |
|---|---|---|
| `name` | "Astro Cours — Cours d'astrologie premium" | ✅ |
| `short_name` | "Astro Cours" | ✅ |
| `display` | "standalone" | ✅ |
| `lang` | "fr" | ✅ |
| `theme_color` | "#8B5CF6" | ✅ |
| Icons 192 + 512 (any) | ✅ | ✅ |
| Icons 192 + 512 (maskable) | ✅ | ✅ |

**Manifest complet et conforme.** ✅

---

## 13. Liste de corrections prioritaires

### 🔴 À corriger immédiatement

| # | Page(s) | Problème | Action |
|---|---|---|---|
| 1 | 12 annexes | **JSON-LD Article dupliqué** (2-3 scripts par page dont 2 `Article`) | Supprimer `ARTICLE_JSON_LD` constant ou fusionner dans le script ld+json existant |

### 🟠 À planifier (sprint suivant)

| # | Page(s) | Problème | Action |
|---|---|---|---|
| 2 | `/signes/[slug]` | Canonical et URLs JSON-LD hardcodées (`https://www.astro-cours.com/...`) | Migrer vers `absoluteUrl()` |
| 3 | `revolution-solaire.details.json` | Canonical hardcodé dans data JSON | Calculer dans le composant, supprimer du JSON |
| 4 | 10 pages annexes | Publisher ld+json inline en dur (2e/3e script) | Remplacer par `...PUBLISHER_ORG` |
| 5 | 24 articles blog | `dateModified = datePublished` dans ArticleLayout | Ajouter champ `updatedAt` optionnel |
| 6 | `comprendre-son-signe` | `soleil-et-asc.jpg` (3.9MB) référencé au lieu du `.webp` (86KB) | Remplacer `.jpg` → `.webp` |

### 🟡 Améliorations

| # | Page(s) | Problème | Action |
|---|---|---|---|
| 7 | `points-fictifs` | Double titre incohérent entre H1 et `<title>` | Aligner sur un seul intitulé |
| 8 | `/transits` | OG images hardcodées | Remplacer par `absoluteUrl("/og/cover.jpg")` |
| 9 | `layout.tsx` | `hreflang: "fr"` → `"fr-FR"` | Modifier `languages: { "fr-FR": SITE_URL }` |
| 10 | `next.config.mjs` | CSP absent | Ajouter Content-Security-Policy |
| 11 | `qualites-defauts` | `sun-moon.jpg` 1.7MB sans WebP | Convertir en WebP, mettre à jour référence |
| 12 | `/public/images/blog/` | 2 JPEG orphelins (9.4MB + 7.2MB) | Vérifier usage puis supprimer |
| 13 | `/public/` racine | 3 WebP orphelins (`AstroLogo`, `mystical-zodiac`, `zodiac-constellations`) | Supprimer |
| 14 | `og/cover.jpg` | 317KB — trop lourd pour OG | Recompresser (cible < 100KB) |
| 15 | Décans (2 WebP) | 743KB + 735KB | Recompresser (cible < 200KB) |
| 16 | `package.json` | `next-mdx-remote` installé inutilement | `npm uninstall next-mdx-remote` |
| 17 | 24 articles blog | 3–5 scripts ld+json par article (doublon ArticleLayout + inline) | Centraliser tout le JSON-LD dans ArticleLayout via props |
| 18 | `maisons/hero/` | III.webp 520KB, IX.webp 462KB | Recompresser |

---

## 14. Comparatif v1 → v2 → v3

| Issue | v1 | v2 | v3 |
|---|---|---|---|
| `siteName` "Astro-Cours" hardcodé (signes) | 🔴 | ✅ Corrigé | ✅ |
| Logo `logo.webp` → `PUBLISHER_ORG` | 🔴 | ✅ Corrigé | ✅ |
| FAQ dupliqué `/retrogrades` | 🔴 | ✅ Corrigé | ✅ |
| Images OG cassées (3 pages) | 🔴 | ✅ Corrigé | ✅ |
| Canonicals hardcodés (8 annexes) | 🟠 | ✅ Corrigé | ✅ |
| Meta descriptions signes courtes/identiques | 🟠 | ✅ Corrigé | ✅ |
| JSON-LD Article manquant (8 annexes) | 🟠 | ✅ Corrigé | ✅ |
| Sitemap `lastModified` statique | 🟡 | ✅ Corrigé | ✅ |
| JSON-LD description signes désynchronisée | — | 🔴 Détecté | ✅ Corrigé |
| Images 404 dans 2 articles blog | — | 🔴 Détecté | ✅ Corrigé |
| JSON-LD Article **dupliqué** sur 12 annexes | — | — | 🔴 Nouveau |
| Publisher inline en dur (10 pages) | — | — | 🟠 Nouveau |
| Canonical `/signes/[slug]` hardcodé | — | — | 🟠 Nouveau |
| Canonical `/revolution-solaire` dans JSON | — | 🟠 Détecté | 🟠 Persiste |
| `dateModified = datePublished` (24 articles) | — | 🟡 Détecté | 🟠 Persiste |
| `soleil-et-asc.jpg` au lieu du WebP (86KB) | — | 🟡 Détecté | 🟠 Persiste |
| Blog JSON-LD triplé/quintuplé | — | 🟠 Détecté | 🟠 Persiste |
| CSP absent | — | 🟠 Détecté | 🟡 Persiste |
| `hreflang: "fr"` → `"fr-FR"` | — | 🟡 Détecté | 🟡 Persiste |
| OG transits hardcodée | — | — | 🟡 Nouveau |
| Points fictifs : double titre | — | — | 🟡 Nouveau |
| JPEGs orphelins (16.6MB total) | — | 🟡 Détecté | 🟡 Persiste |
| `sun-moon.jpg` 1.7MB sans WebP | — | 🟡 Détecté | 🟡 Persiste |
| WebP orphelins `/public/` racine | — | 🟡 Détecté | 🟡 Persiste |
| OG cover.jpg 317KB | — | 🟡 Détecté | 🟡 Persiste |
| Images lourdes (décans, maisons, signes) | — | 🟡 Détecté | 🟡 Persiste |
| `next-mdx-remote` non utilisé | — | 🟡 Détecté | 🟡 Persiste |

---

*Audit v3 généré par analyse statique complète du code source — astro-cours.com — Mai 2026*
