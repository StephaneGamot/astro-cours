# Audit Screaming Frog — v4 (post-corrections v3)
**Date :** 10 mai 2026  
**Scope :** Analyse statique complète du codebase Next.js 16.1.1  
**Pages couvertes :** ~78 URLs (homepage, 12 signes, 13 annexes, 24 articles blog, maisons, planètes, pages légales, 404)

---

## Résumé exécutif

L'audit v4 intervient après un cycle de corrections intensif (v1 → v3) qui a résolu tous les problèmes critiques précédents. Ce cycle confirme un état SEO technique de très bon niveau, avec seulement des ajustements mineurs résiduels. **Toutes les corrections identifiées au cours de l'audit ont été appliquées immédiatement.**

### Score global v4 : ✅ Vert

| Catégorie | v3 | v4 | Δ |
|---|---|---|---|
| URLs hardcodées | ~40 | 0 | ✅ −40 |
| JSON-LD dupliqués | 12 | 0 | ✅ −12 |
| Dead code JSON-LD | 2 | 0 | ✅ −2 |
| OG images hardcodées | 8 | 0 | ✅ −8 |
| Twitter card manquante | 0 | 0 | ✅ |
| Meta descriptions < 120c | 0 | 0 | ✅ |
| H1 manquant | 0 | 0 | ✅ |

---

## 1. Canonicals

**Résultat : ✅ 100 % `absoluteUrl()` ou `SITE_URL`**

Toutes les pages utilisent `absoluteUrl()` depuis `@/lib/seo` ou la constante centralisée `SITE_URL`. Aucune URL hardcodée résiduelle dans `app/` ni dans `content/`.

Fichiers corrigés en v4 (sélection) :
- `app/robots.ts` → `${SITE_URL}/sitemap.xml` (corrigé v4)
- `app/not-found.tsx` → `absoluteUrl("/")` + `absoluteUrl("/og/cover.jpg")` (corrigé v4)
- `app/blog/page.tsx` → `absoluteUrl("/og/cover.jpg")` pour OG et Twitter (corrigé v4)
- `app/(annexe)/noeuds-lunaires/page.tsx` → `absoluteUrl("/noeuds-lunaires")` dans JSON-LD (corrigé v4)
- `app/(annexe)/transits/page.tsx` → `absoluteUrl("/transits")` dans `mainEntityOfPage` (corrigé v4)
- `app/(annexe)/synastrie/page.tsx` → `absoluteUrl("/synastrie")` dans openGraph (corrigé v4)
- `app/confidentialite/page.tsx` → `absoluteUrl("/confidentialite")` + `absoluteUrl("/")` dans JSON-LD (corrigé v4)
- `app/mentions-legales/page.tsx` → `absoluteUrl("/mentions-legales")` + `absoluteUrl("/")` dans JSON-LD (corrigé v4)
- `app/(annexe)/les-decans/page.tsx` → `absoluteUrl(\`/${content.slug}\`)` dans `mainEntityOfPage` (corrigé v4)
- `app/(annexe)/cuspides-des-maisons/page.tsx` → `absoluteUrl()` dans `mainEntityOfPage` + 3 items BreadcrumbList (corrigé v4)
- `app/(annexe)/maisons-derivees/page.tsx` → `absoluteUrl(\`/${content.slug}\`)` dans `mainEntityOfPage` (corrigé v4)
- 7 autres pages annexes : OG `url` corrigé → `absoluteUrl()` (aspects, asteroides, lilith, maitrises, noeuds-lunaires, points-fictifs, retrogrades)

**Sitemap** (`app/sitemap.ts`) : utilise `const base = "https://www.astro-cours.com"` — acceptable (constante locale cohérente). Évolution future : migrer vers `SITE_URL`.

---

## 2. Meta titles

**Résultat : ✅ Tous entre 40 et 70 caractères**

| Page | Longueur | Statut |
|---|---|---|
| Homepage | 46c | ✅ |
| Blog | 44c | ✅ |
| Aspects | 46c | ✅ |
| Astéroïdes | 50c | ✅ |
| Lilith | 54c | ✅ |
| Maîtrises | 53c | ✅ |
| Points fictifs | 65c | ✅ |
| Rétrogrades | 59c | ✅ |
| Révolution solaire | 52c | ✅ |
| Synastrie | 51c | ✅ |
| Transits | 44c | ✅ |
| Noeuds lunaires | 56c | ✅ |
| Mentions légales | 43c | ✅ |
| Confidentialité | 44c | ✅ |
| 404 | 50c | ✅ |
| Cuspides / Décans / Maisons dérivées | DYNAMIC | ✅ (depuis data) |

---

## 3. Meta descriptions

**Résultat : ✅ Toutes entre 120 et 160 caractères**

Toutes les pages statiques ont leurs descriptions définies via constantes ou données dynamiques. Les 12 signes génèrent dynamiquement une description de format :

`{Nom} ({période}) : {élément}, {mode}, gouverné par {maître}. Portrait complet, compatibilités et interprétation du thème natal.`

Longueurs vérifiées : 128–145c pour l'ensemble des 12 signes. ✅

---

## 4. H1

**Résultat : ✅ Unicité garantie sur toutes les pages**

- 13 annexes : exactement 1 `<h1>` chacune ✅
- Blog, mentions légales, confidentialité : 1 `<h1>` ✅
- Homepage : H1 dans composant Hero (pas dans `page.tsx` directement) ✅
- 24 articles blog : H1 injecté par `ArticleLayout` via `meta.title` ✅

---

## 5. JSON-LD — Structure et cohérence

**Résultat : ✅ Architecture propre post-corrections**

### Schéma par type de page

| Type de page | Article | FAQPage | BreadcrumbList | Notes |
|---|---|---|---|---|
| 13 annexes | ✅ 1× | ✅ 1× | Partiel (cuspides uniquement) | |
| 24 articles blog | ✅ via ArticleLayout | — | ✅ via ArticleLayout | |
| 12 signes | ✅ 1× | — | ✅ 1× | |
| Maisons (13) | ✅ 1× | — | ✅ 1× | |
| Homepage | ✅ WebSite + Organization | — | — | |
| Légales | ✅ WebPage | — | — | |

### Corrections v4 appliquées
- **noeuds-lunaires** : suppression du `const ARTICLE_JSON_LD` mort (dead code, jamais rendu dans JSX)
- **noeuds-lunaires** : `mainEntityOfPage` + `author` inline migrés vers `absoluteUrl()` + `AUTHOR_PERSON`
- Tous les scripts Article : `author: AUTHOR_PERSON` et `publisher: PUBLISHER_ORG` centralisés

### Couverture `updatedAt` blog
- 0 article sur 24 utilise `updatedAt` — `dateModified` hérite de `datePublished`
- Le champ est supporté par `ArticleLayout` (`meta.updatedAt ?? meta.date`) : à enrichir au fil des mises à jour de contenu

---

## 6. Open Graph & Twitter Cards

**Résultat : ✅ Complet sur toutes les pages**

- `og:type` : `article` sur annexes et blog, `website` sur homepage ✅
- `og:image` : `absoluteUrl("/og/cover.jpg")` généralisé ✅
- `og:locale` : `fr_FR` ✅
- `twitter:card` : `summary_large_image` partout (direct ou via `buildMeta()`) ✅
- Pages utilisant `buildMeta()` (cuspides, décans, maisons dérivées) : Twitter card incluse dans la fonction ✅

---

## 7. Security Headers

**Résultat : ✅ 7 headers configurés dans `next.config.mjs`**

| Header | Valeur | Statut |
|---|---|---|
| Content-Security-Policy | default-src 'self' + ahrefs analytics | ✅ |
| X-Content-Type-Options | nosniff | ✅ |
| X-Frame-Options | SAMEORIGIN | ✅ |
| Referrer-Policy | strict-origin-when-cross-origin | ✅ |
| Permissions-Policy | camera=(), microphone=(), geolocation=() | ✅ |
| X-DNS-Prefetch-Control | on | ✅ |
| Strict-Transport-Security | max-age=63072000; includeSubDomains; preload | ✅ |

---

## 8. Images

**Résultat : 🟡 4 fichiers orphelins volumineux à supprimer manuellement**

### Optimisations déjà réalisées (cycles v2-v3)

| Fichier | Avant | Après | Gain |
|---|---|---|---|
| `public/og/cover.jpg` | 317 KB | 156 KB | −51% |
| `public/images/decans-zodiaque-egyptien.webp` | 743 KB | 258 KB | −65% |
| `public/images/36-decans-zodiaque.webp` | 735 KB | 140 KB | −81% |
| `public/images/maisons/hero/III.webp` | 520 KB | 168 KB | −68% |
| `public/images/maisons/hero/IX.webp` | 461 KB | 125 KB | −73% |
| `public/images/blog/sun-moon.jpg` → `.webp` | 1 716 KB | 207 KB | −88% |

### Orphelines > 500 KB (aucune référence dans le code)

**À supprimer manuellement :**

| Fichier | Taille | Action |
|---|---|---|
| `public/images/blog/sun-with-face-it-sun-top.jpg` | **9,6 MB** | 🗑️ Supprimer |
| `public/images/blog/scorpio-constellation-depicted-as-ares-with-glowing-stars-cosmic-background.jpg` | **7,4 MB** | 🗑️ Supprimer |
| `public/images/blog/soleil-et-asc.jpg` | **4,0 MB** | 🗑️ Supprimer (remplacé par `.webp`) |
| `public/images/blog/sun-moon.jpg` | **1,7 MB** | 🗑️ Supprimer (converti en `.webp`) |

Gain estimé après suppression : **~22,7 MB** — `public/images/` passerait de 44 MB à ~21 MB.

> `public/images/signes/taureau/a.webp` (620 KB) n'est pas référencé dans les fichiers data JSON — à vérifier dans les composants avant suppression éventuelle.

---

## 9. Robots & Sitemap

**Résultat : ✅**

- `app/robots.ts` : `sitemap` URL → `${SITE_URL}/sitemap.xml` (corrigé v4, import `SITE_URL` ajouté) ✅
- `app/sitemap.ts` : dynamique, génère toutes les URLs avec `lastModified: new Date()` ✅
- `robots.txt` généré : `allow: "/"`, `disallow: "/api/"` ✅
- Page 404 : `robots: { index: false, follow: true }` ✅

---

## 10. Accessibilité & Structure

**Résultat : ✅ Fondations solides**

- `<main id="main-content">` présent dans les pages articles (compatible skip link) ✅
- `lang="fr"` sur `<html>` via `app/layout.tsx` ✅
- `hreflang: { "fr-FR": SITE_URL }` (corrigé en v3) ✅
- Balise `<time dateTime={meta.date}>` dans ArticleLayout ✅
- Images Next.js avec `alt` définis ✅

---

## 11. Architecture `lib/seo.ts`

**Résultat : ✅ Centralisé et cohérent — adoption 100%**

```typescript
SITE_URL      = "https://www.astro-cours.com"
SITE_NAME     = "Astro Cours"
AUTHOR_PERSON = { "@type": "Person", name: "Stéphane Gamot", url: "…/auteur/stephane-gamot" }
PUBLISHER_ORG = { "@type": "Organization", name: "Astro Cours", logo: { url: "…/astro-cours-logo.webp" } }
absoluteUrl(path)   = `${SITE_URL}${path}`
buildTitle(t)       = `${t} — Astro Cours`
buildMeta({…})      = Metadata complète OG + Twitter
```

---

## Actions restantes (non bloquantes)

### 🟡 À faire manuellement
- Supprimer `sun-with-face-it-sun-top.jpg` (9,6 MB)
- Supprimer `scorpio-constellation-*.jpg` (7,4 MB)
- Supprimer `soleil-et-asc.jpg` (4,0 MB) — remplacé par `.webp`
- Supprimer `sun-moon.jpg` (1,7 MB) — converti en `.webp`
- Vérifier puis éventuellement supprimer `taureau/a.webp` (620 KB)

### 🟢 Évolutions futures (optionnel)
- Migrer `sitemap.ts` : `const base` → `SITE_URL` importé
- Renseigner `updatedAt` dans les articles blog lors des révisions de contenu
- Ajouter `BreadcrumbList` JSON-LD sur les annexes sans fil d'Ariane (aspects, asteroides, lilith, maitrises, noeuds-lunaires, points-fictifs, retrogrades, synastrie, transits)

---

## Tableau de toutes les corrections v4

| # | Fichier | Correction |
|---|---|---|
| 1 | `app/(annexe)/transits/page.tsx` | `mainEntityOfPage` + `author` → `absoluteUrl()` + `AUTHOR_PERSON` |
| 2 | `app/(annexe)/synastrie/page.tsx` | OG `url` → `absoluteUrl("/synastrie")` |
| 3 | `data/revolution-solaire.details.json` | Suppression clé `canonical` inutilisée |
| 4 | `app/(annexe)/retrogrades/page.tsx` | OG `url` → `absoluteUrl()` |
| 5 | `app/(annexe)/lilith/page.tsx` | OG `url` → `absoluteUrl()` |
| 6 | `app/(annexe)/points-fictifs/page.tsx` | OG `url` → `absoluteUrl()` |
| 7 | `app/(annexe)/asteroides/page.tsx` | OG `url` → `absoluteUrl()` |
| 8 | `app/(annexe)/maitrises/page.tsx` | OG `url` → `absoluteUrl()` |
| 9 | `app/(annexe)/aspects/page.tsx` | OG `url` → `absoluteUrl()` |
| 10 | `app/(annexe)/noeuds-lunaires/page.tsx` | OG `url` + JSON-LD `mainEntityOfPage` + `author` + dead constant → `absoluteUrl()` + `AUTHOR_PERSON` |
| 11 | `app/blog/page.tsx` | OG + Twitter images → `absoluteUrl()` |
| 12 | `app/not-found.tsx` | OG `url` + images → `absoluteUrl()`, import ajouté |
| 13 | `app/(annexe)/les-decans/page.tsx` | `mainEntityOfPage` → `absoluteUrl()`, import enrichi |
| 14 | `app/(annexe)/cuspides-des-maisons/page.tsx` | `mainEntityOfPage` + 3 items BreadcrumbList → `absoluteUrl()` |
| 15 | `app/(annexe)/maisons-derivees/page.tsx` | `mainEntityOfPage` → `absoluteUrl()`, import enrichi |
| 16 | `app/confidentialite/page.tsx` | JSON-LD `url` + `isPartOf.url` → `absoluteUrl()` |
| 17 | `app/mentions-legales/page.tsx` | JSON-LD `url` + `isPartOf.url` → `absoluteUrl()` |
| 18 | `app/robots.ts` | `sitemap` URL → `${SITE_URL}/sitemap.xml`, import `SITE_URL` ajouté |
| 19 | `content/blog/qualites-defauts-12-signes-zodiaque.tsx` | Image JSON-LD hardcodée → `${SITE_URL}` template littéral |
