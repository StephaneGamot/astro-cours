# Audit SEO — astro-cours.com — Juillet 2026

**Date :** 7 juillet 2026
**Méthode :** fetch live (home + /maisons/maison-8) + analyse du code (maillage, i18n, sitemap) + croisement avec les 5 audits précédents.
**Objectif :** trafic récurrent et durable (mots-clés, maillage interne, autorité).

---

## 1. État des lieux — ce qui est FAIT et déployé ✅

Vérifié en production le 07/07 :

| Chantier (audits V1/V2) | Statut live |
| --- | --- |
| Enrichissement maisons (+5550 mots, transits, carrière, FAQ, personnages) | ✅ déployé (vérifié maison-8) |
| 20 pages annexes (aspects, transits, synastrie, lilith, décans…) | ✅ déployées + header/footer |
| Vraies pages tags `/blog/tag/[slug]` (fin du `?tag=` thin) | ✅ |
| i18n FR/EN/ES + hreflang HTML/sitemap propres, slugs traduits | ✅ (28/29 articles traduits) |
| ShareBar cassée supprimée, tags normalisés, handles Twitter retirés | ✅ |
| Sitemap `lastModified` réels, redirections 308 anciens slugs | ✅ |
| RelatedPosts (articles liés par tags) sur le blog | ✅ |
| Schemas Course/Org/FAQ/Breadcrumb | ✅ |

La base technique et la profondeur de contenu sont maintenant très bonnes. **Les leviers restants sont structurels (hubs, maillage transversal) et externes (backlinks).**

---

## 2. Restes à corriger (issus des audits précédents) 🔧

### R-1 — Lien footer creation-site-internet-pays-basque.com — RÉSOLU : follow assumé ✅
Contexte corrigé le 07/07 : ce n'est PAS un lien partenaire, c'est le second site de Stéphane (crédit « réalisé par »). Lien follow légitime, conservé tel quel. Le sitewide compte ~comme 1 lien (déduplication par domaine + discount footer) ; l'ancre exact-match est tolérable à cette échelle.
**Reco complémentaire :** ajouter un lien contextuel follow dans le corps de `/auteur/stephane-gamot` (lien éditorial E-E-A-T, plus de valeur que le footer) + mettre astro-cours en portfolio sur le site agence avec lien retour.

### R-2 — « Chargement… » dans le HTML SSR 🟡 P1 — 1 h
Toujours visible en prod (home ET maison-8) entre « Ouvrir le menu » et le footer. C'est du texte parasite indexable sur toutes les pages (fallback du MobileDrawer).
**Fix :** `<Suspense fallback={null}>` autour du drawer, ou ne pas le rendre côté serveur.

### R-3 — CSP `'unsafe-inline'` sur script-src 🟢 P2 — 3 h
`next.config.mjs:87`. Impact SEO nul, impact sécurité réel. Migrer vers nonce quand tu as le temps.

### R-4 — GSC : re-vérifier les 12 pages « Détectée, non indexée » 🔴 P0 — 10 min
L'enrichissement est déployé depuis fin juin : va dans GSC > Pages > vérifier si les 12 URLs sont passées en « Indexée ». Sinon, « Demander une indexation » une par une (elles le méritent maintenant).

---

## 3. NOUVEAU — Pages hub manquantes : `/maisons`, `/signes`, `/planetes` 🔴 P0

**Le constat le plus important de cet audit.** Il n'existe aucune page de liste :

- Le breadcrumb « Maisons » pointe vers `https://www.astro-cours.com/#maisons` (ancre de la home) ;
- idem « Signes » et « Planètes » ;
- le lien « thème natal » dans le corps des pages maisons pointe aussi vers `/#maisons`.

Conséquences :

1. **Requêtes hub perdues.** « les 12 maisons astrologiques » , « maisons astrologiques signification », « les 12 signes du zodiaque », « planètes en astrologie » sont des requêtes à volume qui méritent chacune une vraie page dédiée (intro 800–1200 mots + grille des 12 cartes + FAQ). Actuellement, c'est la home qui doit ranker sur tout — elle est diluée.
2. **PageRank interne dilué.** Toute l'autorité des breadcrumbs (~40 pages × 3 langues) part vers la home au lieu de nourrir un hub thématique qui redistribuerait vers les 12 pages filles — exactement ce qui manquait aux 12 pages « détectée, non indexée ».
3. **Schema BreadcrumbList dégradé** : un niveau intermédiaire qui pointe vers une ancre est un signal faible.

**Fix :** créer `/maisons`, `/signes`, `/planetes` (et les slugs EN/ES dans `i18n/routing.ts`), y déplacer les grilles de la home, brancher les breadcrumbs dessus. Effort : ~1 jour. Impact : élevé.

---

## 4. Maillage interne — diagnostic et plan 🕸️

### Ce qui va bien
- Header + footer : excellente couverture (54 pages linkées sitewide).
- Blog → piliers : 28/29 articles FR linkent vers maisons/signes/planètes. Ancres descriptives (~90 %), pas de « cliquez ici ».
- Blog ↔ blog : RelatedPosts (par tags) sur chaque article + liens contextuels dans 6 articles.
- Maisons : bloc « Maisons en résonance » (opposée + triangle) + prev/next. Très bien.

### Ce qui manque (par ordre d'impact)

**M-1 — Piliers → blog : ZÉRO lien 🔴 P1.** Aucune page maison/signe/planète/annexe ne linke un article de blog (`grep href="/blog/` = 0 dans `app/[locale]/`). Le blog pousse les piliers mais rien ne redescend : les nouveaux articles ne reçoivent d'autorité que du footer « Derniers articles » (volatil).
**Fix :** composant `RelatedArticles` réutilisable sur les pages piliers, basé sur un mapping entité → tags (ex. maison-8 → tags `heritage`, `transformation` ; Vénus → `amour` ; maison-2 → `finances`). Le contenu existe déjà : `finances-theme-astral`, `amour-fidelite-signes-zodiaque`, `orientation-professionnelle-theme-astral`, les portraits (`martien`, `lunarien`…) se branchent naturellement sur les 10 planètes. Effort : ~1 jour, gros gain de crawl pour le blog.

**M-2 — Portraits planétaires isolés 🟡 P1.** Les 6 articles « portraits » (martien, lunarien, mercurien, jupitérien, neptunien…) devraient être linkés en dur depuis la page planète correspondante (« Êtes-vous un profil martien ? → lire le portrait ») et se linker entre eux (série). C'est le cas typique des articles jamais crawlés en profondeur.

**M-3 — Annexes ↔ piliers à sens unique 🟡 P2.** Seul `planetes/[slug]` linke des annexes. Les pages signes et maisons devraient pointer vers les annexes pertinentes (signe → décans, maîtrises, signes-dominants ; maison → cuspides, maisons-dérivées, maisons-dominantes) et réciproquement dans le corps du texte des annexes.

**M-4 — Liens contextuels dans le corps des textes 🟢 P2.** Les contenus enrichis des maisons citent Pluton, Saturne, les transits, la synastrie… sans les linker. 3–5 liens contextuels par page (dans le texte, pas en bloc) = le signal de pertinence le plus fort qui existe. À faire progressivement, page par page.

---

## 5. Mots-clés & contenu — où est le trafic 🎯

### A. Le levier n°1 reste l'outil « thème astral gratuit » (inchangé depuis V1)
« thème astral gratuit » et « calcul ascendant » sont les 2 plus grosses requêtes transactionnelles du secteur FR (dominées par Astrotheme, astrologie.fr). Un calculateur gratuit, même simple (date/heure/lieu → positions + ascendant, liens vers tes 54 pages d'interprétation) :
- capte du trafic récurrent (les gens reviennent tester des proches) — **exactement ton objectif** ;
- est le seul vrai aimant à backlinks naturels du site ;
- transforme chaque résultat en 10+ liens internes vers tes pages.

Effort : ~15–20 j (lib d'éphémérides type Swiss Ephemeris/astronomy-engine). C'est le chantier qui change la trajectoire du site.

### B. Page pilier `/theme-astral` (P1, 2–3 j)
Il n'y a pas de page dédiée « thème astral » — l'article `qu-est-ce-qu-un-theme-astral` (1311 mots) joue ce rôle en fond de blog. Créer une vraie page pilier 2500+ mots (qu'est-ce, comment le lire, les 4 éléments : signes/planètes/maisons/aspects, FAQ), future maison du calculateur. Toutes les pages du site peuvent la linker avec l'ancre « thème astral/thème natal » (aujourd'hui gaspillée sur `/#maisons`).

### C. Longue traîne « compatibilité » (P2, progressif)
Tu as déjà `/synastrie`. La déclinaison « compatibilité amoureuse [signe] + [signe] » = 78 combinaisons à concurrence faible, intent fort, très partageable. Commencer par les 10–15 paires les plus recherchées (bélier-lion, cancer-scorpion…), template riche + liens vers les 2 signes + synastrie.

### D. Saisonnier récurrent (P2, 1 j/article, chaque année)
« Mercure rétrograde 2026 dates », « pleine lune calendrier 2026 », « [planète] en [signe] 2026 » : volume élevé, difficulté faible, trafic qui revient chaque cycle — et ton site est le seul cadre pédagogique pour l'expliquer. 3–4 articles/an suffisent.

### E. Ascendants (P3)
12 pages « ascendant [signe] » (requêtes « ascendant vierge signification »…) une fois le calculateur en ligne — il alimentera ces pages en trafic interne.

### F. EN/ES : laisser mûrir (P3)
La surface ×3 est en place depuis 2 semaines. Ne pas investir plus avant d'avoir des données GSC par langue (3 mois). Vérifier simplement dans GSC que les versions EN/ES s'indexent sans erreur hreflang.

---

## 6. Backlinks — toujours le maillon faible (60/100) 🔗

Rien n'a bougé depuis V1 et c'est désormais le principal plafond de verre : le site est techniquement meilleur que beaucoup de concurrents qui rankent devant lui uniquement à l'autorité de domaine. Plan minimal (1–2 j étalés) :

1. 2–3 articles invités sur blogs spiritualité/bien-être FR (avec lien vers une annexe pointue, pas la home) ;
2. profils annuaires niche propres + la page Facebook existante alimentée 1×/semaine avec liens vers les nouveaux contenus ;
3. le calculateur (§5A) comme produit d'appel : c'est lui qu'on cite spontanément, pas un cours.

---

## 7. Plan d'action priorisé

| # | Action | Effort | Impact | Priorité | Statut 07/07 |
| - | --- | --- | --- | --- | --- |
| 1 | GSC : vérifier/forcer indexation des 12 pages enrichies + 3 hubs | 10 min | Élevé | 🔴 P0 | ⏳ à faire (Stéphane, après déploiement) |
| 2 | Créer les hubs `/maisons` `/signes` `/planetes` + breadcrumbs | 1 j | Élevé | 🔴 P0 | ✅ fait (code, à déployer) |
| 3 | Lien footer site agence | 2 min | Moyen | 🟡 P1 | ✅ résolu : follow conservé (site à Stéphane) + lien éditorial page auteur |
| 4 | Fix « Chargement… » SSR | 1 h | Faible | 🟡 P1 | ✅ fait (setRequestLocale ×31 + spinner sans texte) |
| 5 | Bloc `RelatedArticles` sur pages piliers (M-1, M-2) | 1 j | Élevé | 🟡 P1 | ✅ fait (34 pages, mapping lib/pillarArticles.ts) |
| 6 | Page pilier `/theme-astral` 2500+ mots | 2–3 j | Élevé | 🟡 P1 | ✅ fait (FR/EN/ES, ~2200 mots/langue, FAQ, JSON-LD, footer + 10 ancres internes rebranchées) |
| 7 | Liens contextuels annexes ↔ piliers (M-3, M-4) | progressif | Moyen | 🟢 P2 | 🔶 partiel : ~90 ancres /#… rebranchées sur les hubs ; liens fins vers pages individuelles à faire au fil de l'eau |
| 8 | 2 articles saisonniers (Mercure rétro 2027, lunaisons) | 2 j | Moyen | 🟢 P2 | ⏳ à faire |
| 9 | 3 guest posts / backlinks | 1–2 j | Très élevé | 🟢 P2 | ⏳ à faire (Stéphane) + portfolio astro-cours sur le site agence |
| 10 | Pages compatibilité (top 10 paires) | progressif | Élevé | 🟢 P2 | ⏳ à faire |
| 11 | **Calculateur de thème astral gratuit** | 15–20 j | 🚀 Décisif | 🟢 P2–P3 | ⏳ à faire |
| 12 | CSP nonce | 3 h | Nul (SEO) | 🟢 P3 | ⏳ à faire (sécurité, pas SEO) |

**Préalable à tout : `npm run build` local, commit, déploiement Vercel** (les fixes 2–5 sont dans le code uniquement).

**Séquence recommandée :** semaine 1 = actions 1–4 (une demi-journée au total). Semaines 2–3 = actions 5–6 (le maillage descendant + la page thème astral débloquent le crawl du blog et l'ancre la plus précieuse du site). Ensuite, alterner contenu (8, 10) et autorité (9), en gardant le calculateur (11) comme objectif du trimestre.

---

**Historique :** AUDIT-SEO-A11Y-PERF (22/04) → SCREAMING-FROG (10/05) → SEO-INDEXATION (18/05) → UBERSUGGEST V1+V2 (31/05) → **ce document (07/07)**.
