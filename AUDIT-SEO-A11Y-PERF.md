# Audit SEO, Accessibilité & Performance — Astro Cours

**Date :** 22 avril 2026
**Site :** https://www.astro-cours.com
**Stack :** Next.js 16.1.1 · React 19 · Tailwind CSS 4 · TypeScript · App Router

---

## Résumé exécutif

Le projet Astro Cours est déjà d'un très bon niveau technique. L'architecture Server Components, la gestion des images via `next/image`, le SEO structuré (JSON-LD, sitemap, robots) et l'accessibilité de base sont en place. L'audit a identifié **9 corrections directes** appliquées et **des recommandations complémentaires** pour atteindre le 100/100 Lighthouse et maximiser le ranking Google.

---

## PARTIE 1 — Corrections appliquées

### 1. Skip-to-content manquant (WCAG 2.4.1 — Critique)

**Fichier :** `components/layout/header/NavBar.tsx`

Le commentaire `{/* Skip-to-content — WCAG 2.4.1 */}` existait mais le lien était vide. Sans ce lien, les utilisateurs de lecteurs d'écran et de navigation clavier ne peuvent pas sauter la navigation pour accéder directement au contenu. C'est un **critère WCAG niveau A obligatoire**.

**Correction :** Ajout d'un lien `<a href="#main-content">` avec classes `sr-only` + `focus:not-sr-only` pour qu'il soit invisible sauf au focus clavier. Le lien apparaît en violet avec un style premium cohérent avec la charte graphique.

**Impact complémentaire :** Ajout de `id="main-content"` sur la balise `<main>` de **18 pages** qui en étaient dépourvues, garantissant que le skip-to-content fonctionne sur l'intégralité du site.

---

### 2. Template title sans suffixe marque (SEO)

**Fichier :** `app/layout.tsx`

Le template title était `%s` (sans marque). Chaque page enfant qui utilisait `buildTitle()` devait manuellement ajouter ` — Astro Cours`, créant une incohérence. Les pages qui utilisaient `metadata.title` directement n'avaient pas le branding.

**Correction :**
- Template : `%s — Astro Cours`
- Default : `Cours d'astrologie — Astro Cours`

Le suffixe marque renforce la reconnaissance de marque dans les SERP et améliore le CTR.

---

### 3. Balise `<time>` sémantique manquante (SEO + A11y)

**Fichier :** `components/blog/ArticleLayout.tsx`

Les dates d'articles étaient rendues dans un `<span>`, invisible pour les moteurs de recherche et les technologies d'assistance. Google utilise `<time datetime="">` pour comprendre la fraîcheur du contenu (signal de ranking indirect).

**Correction :** Remplacement du `<span>` par `<time dateTime={meta.date}>` avec l'attribut `datetime` au format ISO 8601.

---

### 4. Duplication CSS du sélecteur `strong` (Performance CSS)

**Fichier :** `app/globals.css`

Le sélecteur `strong` était défini deux fois avec des `font-weight` contradictoires (650 puis 600). Le second écrasait le premier, mais la duplication alourdissait le CSS et créait de la confusion.

**Correction :** Fusion en un seul sélecteur avec `font-weight: 650`.

---

### 5. Meta `keywords` obsolète supprimé (SEO)

**Fichier :** `app/signes/[slug]/page.tsx`

Les pages des 12 signes du zodiaque contenaient un tableau `keywords` dans l'objet metadata. Google ignore officiellement cette balise depuis 2009. Pire, elle expose la stratégie de mots-clés aux concurrents.

**Correction :** Suppression complète du champ `keywords`.

---

### 6. Sitemap enrichi avec `changeFrequency` et `priority` (SEO)

**Fichier :** `app/sitemap.ts`

Le sitemap ne contenait que `url` et `lastModified`. Bien que Google affirme ne pas se fier strictement à `priority` et `changeFrequency`, ces champs restent utilisés par d'autres moteurs (Bing, Yandex) et aident le budget de crawl.

**Correction :**
- Homepage : `priority: 1.0`, `changeFrequency: "weekly"`
- Pages signes : `priority: 0.9`, `changeFrequency: "monthly"`
- Pages blog listing : `priority: 0.9`
- Pages maisons/planètes : `priority: 0.8`, `changeFrequency: "monthly"`
- Articles blog : `priority: 0.7`, `changeFrequency: "yearly"`
- Pages légales : `priority: 0.5`, `changeFrequency: "monthly"`

---

### 7. Twitter card title hardcodé corrigé (SEO / Social)

**Fichier :** `app/signes/[slug]/page.tsx`

Le `twitter.title` était hardcodé à `"${data.nom} — Premier signe du Zodiaque"` pour **tous** les signes. La Vierge ou les Poissons ne sont évidemment pas le "premier signe". Cela créait des métadonnées incorrectes sur 11 pages sur 12.

**Correction :** Utilisation de la variable `title` dynamique (identique au `og:title`).

---

### 8. Schema.org Article : `author` Person au lieu d'Organization (E-E-A-T)

**Fichiers :** `app/signes/[slug]/page.tsx`, `app/maisons/[slug]/page.tsx`

L'auteur des articles était déclaré comme `Organization` dans le JSON-LD. Pour E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness), Google recommande explicitement une `Person` avec un lien vers la page profil de l'auteur.

**Correction :**
- `author` changé en `{"@type": "Person", "name": "Stéphane Gamot", "url": "https://www.astro-cours.com/auteur/stephane-gamot"}`
- `publisher.logo` corrigé pour pointer vers le fichier réel (`astro-cours-logo.webp` au lieu de `logo.png`)
- Cohérence avec la page auteur existante qui possède déjà un excellent schema `Person`

---

### 9. ARIA corrigé sur le conteneur social du footer (A11y)

**Fichier :** `components/layout/footer/Footer.tsx`

Le conteneur des réseaux sociaux utilisait `aria-label` sur un `<div>`. L'attribut `aria-label` sur un élément non interactif et sans rôle ARIA est ignoré par les lecteurs d'écran (WCAG 4.1.2).

**Correction :** Remplacement du `<div>` par `<nav aria-label="Réseaux sociaux">`, sémantiquement correct et accessible.

---

### 10. URL logo corrigée dans le JSON-LD homepage

**Fichier :** `app/page.tsx`

Le schema `WebSite` pointait vers `/logo.webp` qui n'existe pas. Le fichier réel est `/astro-cours-logo.webp`.

**Correction :** URL corrigée dans `publisher.logo.url`.

---

## PARTIE 2 — Ce qui est déjà excellent

Le projet possède déjà de nombreuses bonnes pratiques qui méritent d'être soulignées :

**Architecture Next.js :** React Server Components par défaut. Le `"use client"` n'est utilisé que pour NavBar (interactivité) et ScrollReveal (IntersectionObserver). Le footer est un pur Server Component — zero JS shipped.

**Images :** `next/image` avec formats AVIF/WebP, `priority` sur le logo (LCP), `deviceSizes` et `imageSizes` optimisés, cache TTL de 60 jours.

**Fonts :** `next/font/google` avec `display: "swap"` (anti-FOIT), variables CSS pour Tailwind.

**Structured Data :** JSON-LD présent sur homepage (WebSite), signes (Article + FAQPage + BreadcrumbList), maisons, planètes, auteur (Person E-E-A-T complet), blog. La page auteur inclut `knowsAbout`, `alumniOf`, `sameAs`.

**Accessibilité :** `<html lang="fr">`, `aria-hidden` sur les éléments décoratifs, `aria-label` sur les navigations, `sr-only` pour les labels invisibles, `focus-visible` ring sur tous les interactifs, `motion-reduce:transition-none`, headings hierarchy cohérente, FAQ avec `<details>/<summary>` natif.

**SEO :** Canonical URLs absolues, robots.txt, sitemap.xml dynamique, Open Graph et Twitter Cards sur toutes les pages, `metadataBase` configuré.

**Performance :** Critical CSS inlining via `optimizeCss`, `removeConsole` en production, ES2022 target client, `lazyOnload` pour le script analytics.

---

## PARTIE 3 — Recommandations complémentaires (non appliquées)

### Priorité Haute

**3.1 — Ajouter `prefers-reduced-motion` au ScrollReveal**
Le composant ScrollReveal utilise `IntersectionObserver` + `setTimeout` pour animer. Bien que `motion-reduce:transition-none` soit présent dans le CSS, le composant JS ajoute toujours la classe `visible` avec un délai. Il serait préférable de détecter `prefers-reduced-motion` dans le JS et d'appliquer `visible` immédiatement sans animation.

**3.2 — Centraliser la constante auteur pour le JSON-LD**
L'auteur `"Stéphane Gamot"` et l'URL de la page auteur sont répétés dans au moins 4 fichiers (signes, maisons, planètes, blog posts). Créer un objet réutilisable dans `lib/seo.ts` pour éviter les divergences.

**3.3 — Ajouter un `manifest.json` (PWA / Lighthouse)**
Lighthouse vérifie la présence d'un web app manifest. Même sans PWA complète, un `manifest.json` minimal avec `name`, `short_name`, `icons`, `theme_color` améliore le score Best Practices.

**3.4 — Ajouter `<link rel="alternate" hreflang="fr">` dans le layout**
Bien que le site soit monolingue francophone, déclarer explicitement le `hreflang` aide Google à servir le bon résultat aux utilisateurs francophones.

### Priorité Moyenne

**3.5 — Vérifier les images OG**
Le fichier OG par défaut pointe vers `/og/cover.jpg` dans le layout mais `/images/og/default.webp` dans `lib/seo.ts`. Vérifier que les deux fichiers existent et sont cohérents. Privilégier un seul chemin.

**3.6 — Ajouter des breadcrumbs visibles sur les pages**
Les breadcrumbs JSON-LD sont présents, mais aucun breadcrumb n'est visible dans l'UI. Google peut afficher les breadcrumbs dans les SERP, et ils améliorent la navigation utilisateur et le maillage interne.

**3.7 — Ajouter `datePublished` et `dateModified` sur les articles de blog**
Le JSON-LD des articles de blog dans les fichiers `content/blog/*.tsx` devrait inclure des dates de publication cohérentes avec les métadonnées `meta.date`.

**3.8 — Auditer le contraste des couleurs muted**
Les textes en `text-slate-400` sur fond `#09090b` ont un ratio de contraste d'environ 4.2:1. C'est conforme WCAG AA (minimum 4.5:1 pour le texte normal — borderline), mais pas AAA (7:1). Considérer `text-slate-300` pour les textes importants.

### Priorité Basse

**3.9 — Regrouper les injections JSON-LD**
Certaines pages injectent 3 `<script type="application/ld+json">` séparés (Article, FAQ, Breadcrumb). Google supporte un seul script avec un tableau `@graph`, ce qui est plus propre et réduit le DOM.

**3.10 — Ajouter un `not-found.tsx` personnalisé**
Un 404 personnalisé avec maillage interne (liens vers les sections principales) réduit le taux de rebond et aide au crawl budget.

---

## Résumé des fichiers modifiés

| Fichier | Modification |
|---------|-------------|
| `components/layout/header/NavBar.tsx` | Skip-to-content ajouté |
| `app/layout.tsx` | Title template avec marque |
| `components/blog/ArticleLayout.tsx` | `<time>` sémantique + `id="main-content"` + classe `prose` |
| `app/globals.css` | Fusion du double `strong` |
| `app/signes/[slug]/page.tsx` | Keywords supprimé, Twitter title dynamique, auteur Person, logo corrigé |
| `app/maisons/[slug]/page.tsx` | Auteur Person + publisher logo |
| `app/sitemap.ts` | changeFrequency + priority |
| `components/layout/footer/Footer.tsx` | `<nav>` au lieu de `<div>` pour les réseaux sociaux |
| `app/page.tsx` | Logo URL corrigée dans JSON-LD |
| 16 pages (annexe, blog, etc.) | `id="main-content"` ajouté sur `<main>` |
| `app/planetes/[slug]/page.tsx` | `id` harmonisé vers `main-content` |
| `app/(annexe)/retrogrades/page.tsx` | `id="top"` → `id="main-content"` |
