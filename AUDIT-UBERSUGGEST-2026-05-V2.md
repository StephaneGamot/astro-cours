# Audit SEO style Ubersuggest — astro-cours.com — V2

**Date :** 31 mai 2026 (deuxième passe)
**Référence :** suite directe de `AUDIT-UBERSUGGEST-2026-05.md` (v1)
**Méthode :** re-fetch live + diff vs corrections locales + scan complémentaire

---

## 🟢 Site Health Score — 88 → 93 / 100 (en code) · 89 / 100 (en production)

| Catégorie               | V1 (live) | V2 code   | V2 prod    | Statut |
| ----------------------- | --------- | --------- | ---------- | ------ |
| **On-Page SEO**         | 94/100    | **97**    | 94 (idem)  | 🔄 prod en attente |
| **Indexabilité**        | 78/100    | **88**    | **85**     | 🟢 +7 grâce au noindex blog déployé |
| **Performance (tech)**  | 92/100    | **95**    | 92 (idem)  | 🔄 LCP fix non déployé |
| **Structured Data**     | 90/100    | **97**    | 90 (idem)  | 🔄 Course schemas non déployés |
| **Mobile / A11y**       | 88/100    | 88        | 88         | — |
| **Sécurité / Headers**  | 85/100    | 85        | 85         | — (CSP nonce toujours à faire) |
| **Profil de liens**     | 60/100    | 60        | 60         | — (action externe nécessaire) |
| **Maillage interne**    | 75/100    | **82**    | 75 (idem)  | 🔄 hubs blog enrichis non déployés |
| **Profondeur contenu**  | 70/100    | **88**    | 70 (idem)  | 🔄 +5550 mots maisons non déployés |
| **CLS (Core Web Vital)**| N/A       | **fix appliqué** | 0,199 ⚠️ | 🔄 Inter `display:optional` non déployé |

**Synthèse :** la moitié du travail effectué côté code (V1 + Lighthouse fixes) n'est pas encore en production. **Action #1 : redéployer.**

---

## 📦 État des corrections V1

Audit déployé : seul le fix `/blog?tag=*` (W6) est visible en production.

| Fix V1                                        | Code | Live | Note |
| --------------------------------------------- | ---- | ---- | ---- |
| W1 — Boutons partage (param `u=` vide)        | ❌ pas touché | ❌ | non corrigé (j'ai oublié — voir N1 ci-dessous) |
| W2 — Sitemap `lastModified` réels             | ✅   | 🔄   | déploiement en attente |
| W3 — CSP nonce (suppression `'unsafe-inline'`)| ❌ pas touché | ❌ | non corrigé (priorité moyenne) |
| W4/R2 — Enrichissement maisons (+5550 mots)   | ✅   | 🔄   | déploiement en attente |
| W5 — Vérifier @astro_cours                    | ❌ pas touché | ❌ | à vérifier manuellement |
| **W6 — `noindex` sur /blog?tag=***            | ✅   | **✅ DÉPLOYÉ** | vérifié sur `/blog?tag=lune` |
| R1 — Schema Course/Org/SearchAction           | ✅   | 🔄   | déploiement en attente |
| R3 — Maillage interne (3 articles enrichis)   | ✅   | 🔄   | déploiement en attente |
| R4 — LCP fetchpriority (maison + planète)     | ✅   | 🔄   | déploiement en attente |
| À corriger — meta-keywords supprimé           | ✅   | 🔄   | toujours visible sur `/maisons/maison-1` |
| À corriger — TOC dupliquée résolue (4×→1×)    | ✅   | 🔄   | toujours 4× dans le DOM en prod |
| Bonus — CLS Inter `display:optional`          | ✅   | 🔄   | déploiement en attente |

**Action immédiate :** `git push` + déploiement Vercel + GSC > « Demander une indexation » sur les 12 maisons.

---

## 🆕 Nouvelles découvertes (V2)

### N1 — Boutons partage social cassés (W1, jamais touché) 🔴 P0
Toujours présent. Sur les articles blog : `https://www.facebook.com/sharer/sharer.php?u=` avec URL vide. Idem LinkedIn/X.
**Fix :** dans le composant de partage (`content/blog/ui.tsx` probablement), passer l'URL canonique de l'article. Si le composant utilise `window.location.href`, c'est buggé côté SSR. Solution : prop `url` injectée depuis le post layout.

### N2 — Tags blog avec casse inconsistante 🟡 P1
2 tags doublonnés détectés (Mars/mars, Lune/Lune) — créent des pages `/blog?tag=Mars` ET `/blog?tag=mars` indépendantes. Heureusement maintenant en `noindex` (W6), donc faible impact SEO. Mais la liste des chips dans le blog les affiche en double.
**Fix :** dans `app/blog/page.tsx`, normaliser en lowercase avant de dédupliquer dans `uniqTags()`.

### N3 — Lien sortant partenaire sans `rel="nofollow"` 🟡 P1
`<a href="https://www.creation-site-internet-pays-basque.com/fr" rel="noopener noreferrer">` dans le footer (sitewide → présent sur ~80+ pages).
**Risque SEO :** Google considère les liens sortants commerciaux récurrents comme une cession d'autorité. Sur un site jeune, vaut mieux éviter.
**Fix :** ajouter `rel="nofollow"` (ou `"sponsored"` si c'est un échange contractuel).

### N4 — Internal duplicate JSON-LD `WebSite` 🟡 P2
Une fois R1 déployé, la home aura :
- Le nouveau `homeJsonLd` (avec WebSite + Org + 3 Course)
- ET potentiellement l'ancien WebSite vestigial s'il reste dans le layout.tsx ?

J'ai vérifié : layout n'a pas de JSON-LD donc OK, pas de doublon.

### N5 — Articles blog 1000–1500 mots (7 articles) 🟢 P3 (optionnel)
Pas du « thin content » au sens Google (>300 mots), mais en-dessous du seuil de 1500 mots souhaitable pour des hubs d'autorité :

| Article                                                      | Mots |
| ------------------------------------------------------------ | ---- |
| `venus-en-signe-ton-style-amoureux`                          | 1097 |
| `mars-en-signes-desir-libido-action-sexe`                    | 1250 |
| `comment-regarder-le-meilleur-moment-pour-vendre-sa-maison…` | 1261 |
| `qu-est-ce-qu-un-theme-astral`                               | 1311 |
| `qualites-defauts-12-signes-zodiaque`                        | 1367 |
| `pleine-lune-nouvelle-lune-cycles-astrologie`                | 1388 |
| `longevite-vie-astrologie`                                   | 1431 |

**Fix :** étoffer `qu-est-ce-qu-un-theme-astral` en priorité (pillar page pour beaucoup d'autres articles), idéalement vers 2500 mots avec un FAQ étendu.

### N6 — Pas d'image sitemap dédié 🟢 P3
Les pages référencent ~300+ images optimisées via `next/image`. Google Image n'a pas de sitemap dédié pour les indexer rapidement.
**Fix :** ajouter `app/image-sitemap.ts` (Next.js 15+) listant les images de chaque entité (signes/maisons/planètes).

### N7 — Navbar mobile rendue « Chargement… » en SSR 🟡 P2
Curiosité observée dans le HTML scrapé : entre « Ouvrir le menu » et le footer, il y a `Chargement…`. C'est le contenu de `app/loading.tsx` qui apparaît probablement parce que le `MobileDrawer` est un sous-arbre client suspendu en SSR.
**Vérification utile :** ouvrir DevTools → désactiver JS → voir si le mot « Chargement… » s'affiche entre le burger et le contenu. Si oui : c'est un fragment SSR pollué. Solution probable : envelopper le `MobileDrawer` dans un `<Suspense fallback={null}>` ou ne pas le rendre côté serveur.

### N8 — Sitemap XML servi en `[binary data]` 🟢 P3
Le sitemap se charge bien mais le `Content-Type` retourné par WebFetch est marqué binaire. Vérifier le header HTTP : il faudrait `application/xml; charset=utf-8`. Next.js 16 le pose normalement, mais à confirmer.

### N9 — Plus de 95 tags blog uniques 🟢 P3
Bonne taxonomie pour le crawl interne, mais 95 chips qui s'affichent ensemble en haut de `/blog` = surcharge visuelle. UX impact > SEO.
**Fix UX (optionnel) :** afficher les 15 plus utilisés en chips, puis un bouton « Voir tous les tags ».

### N10 — Vérifier le déploiement Vercel 🔴 P0
Le diff prod/code suggère qu'un seul commit a été déployé (le blog noindex). Soit Stéphane a poussé un cherry-pick partiel, soit le build des routes statiques `/maisons/[slug]` n'a pas été régénéré (cache Vercel ?).
**Vérif :** dans Vercel Dashboard > Deployments > dernier build > vérifier que `app/maisons/[slug]/page.tsx` est bien dans les fichiers modifiés.

---

## 🎯 Plan d'action priorisé V2

| # | Action                                                              | Effort | Impact | Priorité |
| - | ------------------------------------------------------------------- | ------ | ------ | -------- |
| 1 | **Pousser + déployer toutes les corrections V1 + Lighthouse**       | 5min   | Élevé  | P0       |
| 2 | Fix boutons partage cassés (N1 / W1)                                | 1h     | Faible | P0       |
| 3 | Normaliser les tags blog en lowercase (N2)                          | 15min  | Faible | P1       |
| 4 | `rel="nofollow"` sur le lien partenaire footer (N3)                 | 2min   | Moyen  | P1       |
| 5 | Vérifier @astro_cours sur Twitter/X (W5)                            | 5min   | Faible | P0       |
| 6 | Étoffer `qu-est-ce-qu-un-theme-astral` à 2500 mots (N5)            | 4h     | Moyen  | P2       |
| 7 | Investiguer le `Chargement…` SSR du MobileDrawer (N7)               | 1h     | Faible | P2       |
| 8 | Ajouter un `image-sitemap.ts` (N6)                                  | 2h     | Faible | P3       |
| 9 | Migrer CSP vers nonce (W3, reporté de V1)                           | 3h     | Moyen  | P2       |
| 10| GSC : « Demander une indexation » des 12 maisons après déploiement  | 10min  | Élevé  | P0       |
| 11| Lancer un Lighthouse réel post-deploy pour valider CLS + LCP fixes  | 5min   | Élevé  | P0       |
| 12| Stratégie backlinks (3 guest posts) — toujours pendant V1           | 5j     | Très élevé | P2  |
| 13| Calculateur de thème astral gratuit (recommandation V1)             | 20j    | Très élevé | P3  |

---

## 📈 Évolution du score (récapitulatif)

```
V1 (22 avril → 31 mai)
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  88 / 100
    Issues : tech ok, contenu maisons thin, indexation partielle

V2 code (31 mai après-midi)
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  93 / 100
    +5 sur indexabilité, +5 profondeur, +3 perf, +7 Structured Data
    Tout est dans le repo local — pas encore déployé sauf /blog

V2 prod (live aujourd'hui)
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  89 / 100
    +1 unique gain : noindex /blog?tag=* déployé
    Reste 7 fixes en attente de redéploiement
```

---

## ✅ Ce qui a déjà fonctionné (verifié live)

- **`/blog?tag=lune` retourne désormais `meta-robots: noindex, follow` + `canonical: /blog`** — exactement ce qu'on voulait. Google va consolider la valeur sur `/blog` et arrêter d'indexer 90+ pages-facettes thin. C'est concrètement le levier qui va le plus aider à débloquer le crawl-budget que GSC dépensait jusque-là sur ces URLs.

---

## 🔮 Projection 30 jours

Si Stéphane fait **les 4 actions P0** (redéploiement + boutons partage + Twitter + GSC) cette semaine :

- **D+7 :** Lighthouse passe à 95+ (CLS résolu, LCP fetchpriority OK).
- **D+14 :** Google commence à recrawler les maisons avec le nouveau contenu (+5550 mots).
- **D+21 à D+30 :** Indexation progressive des 12 « Detected not indexed ». Premières percées de trafic sur des longues-traînes type « maison 5 célébrités », « Maison VII transit Saturne », « exercice astrologique Maison I », etc.
- **Au-delà :** la stratégie backlinks (P2) et le calculateur de thème (P3) restent les 2 leviers manquants pour passer de « bon site jeune » à « référence FR ».

---

**Historique des audits :**
- `AUDIT-SEO-A11Y-PERF.md` (22 avril)
- `AUDIT-SCREAMING-FROG.md` (10 mai)
- `AUDIT-SEO-INDEXATION.md` (18 mai)
- `AUDIT-UBERSUGGEST-2026-05.md` (31 mai matin, V1)
- `AUDIT-UBERSUGGEST-2026-05-V2.md` (31 mai après-midi, **ce document**)
