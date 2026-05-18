# Audit SEO — Pages "Détectée, actuellement non indexée"

**Site :** astro-cours.com
**Date d'audit :** 18 mai 2026
**Première détection du problème (GSC) :** 6 janvier 2026
**Pages concernées :** 12

---

## 1. Ce que veut dire « Détectée, actuellement non indexée »

Google connaît l'existence de ces URL (il les a trouvées via le sitemap ou un lien) mais a décidé de **ne pas les explorer maintenant**. La dernière exploration est « Sans objet » : le robot n'est même jamais passé sur la page. Ce n'est pas une pénalité, c'est un **arbitrage de budget de crawl**.

Les déclencheurs les plus fréquents :

1. **Site jeune / autorité de domaine faible.** Google rationne le budget de crawl en fonction de la confiance qu'il a dans le domaine. Un site de 4 mois doit gagner cette confiance.
2. **Pages perçues comme à faible valeur ajoutée.** Soit parce qu'elles sont fines, soit parce qu'elles ressemblent trop à d'autres pages du même site (templates).
3. **Maillage interne insuffisant.** Si une page n'est citée que dans le sitemap et le footer, Google la considère comme accessoire.
4. **Pages utilitaires** (mentions légales, confidentialité). Google les déprioritise systématiquement car elles ne sont presque jamais ce que cherche un utilisateur.

Bonne nouvelle : ton site est **techniquement très propre**. Le diagnostic ci-dessous montre que le problème est principalement **contextuel** (jeunesse + signaux de valeur), pas un bug technique.

---

## 2. Diagnostic

### Ce qui est solide

| Élément | État | Note |
|---|---|---|
| `sitemap.xml` généré dynamiquement | OK | 60+ URL, lastModified, priorités cohérentes |
| `robots.txt` | OK | `allow: /`, sitemap déclaré |
| Balises meta (`generateMetadata`) | OK | Titres uniques, descriptions clampées à 155, canonical absolu |
| JSON-LD | OK | Article + BreadcrumbList + FAQPage sur les maisons, Person + Org sur l'auteur |
| Open Graph / Twitter | OK | Images 1200×630 systématiques |
| Performance (`next/image`, AVIF/WebP, `optimizeCss`, `lazyOnload`) | OK | Très bonne base technique |
| HTTPS / HSTS / CSP | OK | Headers de sécurité présents |
| Pages E-E-A-T (auteur, à propos) | OK | Page auteur ~2 500 mots, crédentiels astro + dev |
| Footer riche en liens internes | OK | 12 maisons + 12 signes + planètes + annexes + 5 derniers articles |

### Les vraies causes probables

#### Cause 1 — Effet « nouveau site » (impact : élevé)

Le projet a été détecté pour la première fois le **6 janvier 2026**. À 4 mois, le domaine n'a quasiment aucun historique pour Google. Sur un site neuf, c'est **normal** que Google diffère l'indexation de pages secondaires. Ce facteur explique probablement la moitié du problème, et il se résout en grande partie avec le temps + des signaux externes (backlinks).

#### Cause 2 — Pages maisons rendues sous le seuil de valeur perçue (impact : élevé)

Le template `app/maisons/[slug]/page.tsx` est très bien construit (TOC, JSON-LD, FAQ, sections multiples). Mais quand on regarde le contenu réel injecté depuis `data/maisons.details.json`, les champs prose sont courts :

- `significationTraditionnelle` : 200–400 caractères par maison
- `conceptionModerne` : ~200–300 caractères
- `niveauLecture.fonction` : ~150 caractères

Une fois le template rendu, chaque page maison fait sans doute **600–900 mots utiles**. C'est *juste* au-dessus du seuil typique des « thin pages », et toutes les 12 partagent **exactement la même structure** — Google les voit comme des quasi-doublons d'un template.

À comparer avec un de tes articles de blog : `mars-en-signes-...` fait 3 500–4 000 mots et est indexé. La corrélation est nette.

#### Cause 3 — Maillage contextuel faible *à l'intérieur des articles* (impact : moyen)

`components/blog/ArticleLayout.tsx` n'injecte aucune section automatique de type « articles liés » ou « maisons associées ». Les liens internes existent uniquement quand tu les écris à la main dans le corps de l'article. Conséquence : Google ne perçoit pas de « grappe sémantique » forte autour des pages maisons.

Le footer compense partiellement, mais un lien depuis le footer ne pèse pas autant qu'un lien contextuel dans le corps d'un article.

#### Cause 4 — Articles de blog non indexés (impact : moyen)

Les 4 articles listés (`mars-en-signes`, `pleine-lune-nouvelle-lune`, `quel-type-de-sportif`, `vendre-une-maison-demenager`) sont pourtant **riches** (3 500 à 5 500 mots). S'ils ne sont pas indexés malgré leur qualité, c'est probablement parce que :

- ils sont récents (publiés entre janvier et avril 2026)
- ils ne reçoivent que peu de liens internes contextuels depuis d'autres articles
- ils n'ont pas encore reçu de signal externe (partage, backlink)

#### Cause 5 — Pages légales (impact : faible, attendu)

`confidentialite` et `mentions-legales` non indexées : c'est **normal et sans conséquence SEO**. Google déprioritise systématiquement ces pages. Tu peux les ignorer dans ce diagnostic.

#### Observation sur le pattern des maisons non indexées

Le rapport GSC montre que **maison-1, maison-2 et maison-6 à maison-9 sont indexées**, mais pas **maison-3, 4, 5, 10, 11, 12**. Ce n'est pas aléatoire : ce sont les maisons à signification *plus secondaire* dans l'astrologie populaire (la III, la IV, la V, la X, la XI, la XII versus l'Ascendant, le MC, la VII…). Google a probablement priorisé les pages qui correspondent à des requêtes populaires et différé les autres. Ça confirme que c'est bien un arbitrage de valeur perçue, pas un bug.

---

## 3. Plan d'action priorisé

Légende : `[impact]/[effort]` — `H` = haut, `M` = moyen, `L` = bas.

### 🔴 Priorité 1 — À faire cette semaine (gains rapides, effort modéré)

**1.1 — Soumettre manuellement les URL via Google Search Console** `H/L`

Pour chacune des 10 URL utiles (oublie les 2 pages légales), va dans GSC → Inspection d'URL → « Demander une indexation ». Ça ne marche pas à tous les coups mais ça force Google à mettre l'URL dans la file prioritaire.

**1.2 — Décider du sort des pages légales** `L/L`

Deux options défendables :

- **Laisser tel quel** (recommandé pour un site jeune) : la présence de mentions légales indexables est un *signal de confiance* pour Google. Elles finiront par être explorées et n'ont aucun impact négatif.
- **Forcer `noindex, follow`** : libère un peu de budget de crawl, mais perd ce signal de confiance. À ne faire que si le crawl budget devient un vrai goulot d'étranglement (ce qui n'est pas le cas aujourd'hui).

Mon avis : laisse-les telles quelles et ignore-les dans ce diagnostic.

**1.3 — Ajouter un bloc « Articles liés » dans `ArticleLayout.tsx`** `H/M`

C'est le levier le plus efficace pour booster le maillage interne sans réécrire de contenu. À la fin de chaque article, injecter automatiquement 3–4 cards vers d'autres posts qui partagent un tag, plus 2 cards vers des maisons/signes/planètes mentionnés dans le tableau `tags`. Gain double : meilleur signal sémantique pour Google + meilleur temps passé sur le site.

**1.4 — Vérifier que le sitemap est bien soumis dans GSC** `H/L`

Search Console → Sitemaps → vérifier que `https://www.astro-cours.com/sitemap.xml` est listé en statut « Réussite ». Si non, le soumettre.

### 🟠 Priorité 2 — À faire ce mois-ci (impact fort, effort plus long)

**2.1 — Densifier le contenu rendu des 12 pages maisons** `H/H`

C'est le chantier le plus rentable mais le plus long. Objectif : passer chaque page maison de ~700 mots à **1 500–2 000 mots utiles**. Trois leviers :

- Étendre les champs `significationTraditionnelle` et `conceptionModerne` dans `data/maisons.details.json` (passer de 200–400 caractères à 800–1 200 par champ, en gardant un ton pédagogique différencié pour chaque maison)
- Ajouter une section **« Études de cas »** : 2 exemples concrets par maison (« Quand cette maison est habitée par Saturne pour une personne née en… »)
- Ajouter une section **« Maison X et signes »** : commentaire spécifique sur le signe le plus représentatif de cette maison (la maison V et le Lion, la maison VII et la Balance, etc.)

À faire d'abord pour `maison-3` à `maison-6` (les plus consultées en astrologie populaire), puis 7 à 12.

**2.2 — Ajouter un widget « Maisons connexes » sur les pages maisons** `M/M`

En bas de chaque page maison, afficher :

- les 2 maisons du même quadrant
- la maison opposée (axe complémentaire)
- les 3 planètes les plus associées (la Lune pour la IV, Vénus pour la VII, etc.)

Tu as déjà toutes les données dans `maisons.details.json` (`axe`, `quadrant`, `triangle`, `carre`). C'est juste un composant à écrire.

**2.3 — Ajouter du contenu original aux pages signes et planètes** `M/H`

Pour éviter qu'elles tombent dans la même catégorie « Détectée, non indexée » plus tard. Même logique que pour les maisons : 1 500 mots minimum + études de cas + maillage contextuel.

### 🟡 Priorité 3 — En continu (signaux long terme)

**3.1 — Construire des backlinks** `H/H`

C'est ce qui te manque le plus. Le site est techniquement parfait mais aucune autorité externe ne pointe vers lui (sinon Google n'aurait pas ce comportement de prudence). Pistes :

- Forums d'astrologie (Astrotheme, Astrodienst, forums Facebook FR) : participer, signer avec un lien
- Échange d'articles invités avec d'autres blogs d'astrologie francophones
- Demander à Jean-Marie Michiels (AstroCours.be, ton formateur cité sur la page auteur) un lien depuis son site — c'est un lien thématiquement parfait

**3.2 — Publier 1 article approfondi par mois** `M/M`

Mieux que 4 articles moyens. Vise des recherches longue traîne (« interprétation Vénus en maison 5 », « transit de Saturne sur l'ascendant en Vierge ») : moins concurrentielles, plus précises, idéales pour un site jeune.

**3.3 — Configurer un suivi GSC mensuel** `M/L`

Une fois par mois : Search Console → Pages → exporter le rapport « Pourquoi des pages ne sont pas indexées ». Comparer avec le mois précédent. Si les mêmes URL restent en « Détectée, non indexée » après 3 mois malgré les actions ci-dessus, c'est qu'il faut creuser plus.

**3.4 — Données structurées plus profondes** `L/M`

Tu as déjà Article + BreadcrumbList + FAQPage sur les maisons. Tu peux ajouter sur la home un schéma `Course` ou `EducationalOrganization` qui clarifie pour Google que tu proposes un *cursus pédagogique d'astrologie*, pas un site de divination. Ça aide le classement dans les requêtes éducationnelles.

---

## 4. Ce qu'il ne faut PAS faire

- **Ne pas supprimer ni rediriger les pages non indexées.** Elles seront indexées avec le temps + les actions ci-dessus.
- **Ne pas multiplier les pages.** Le site a déjà beaucoup d'URL (60+) pour un domaine de 4 mois. Renforcer celles qui existent avant d'en créer de nouvelles.
- **Ne pas changer la structure d'URL.** Tout est propre, kebab-case, slugs lisibles. Y toucher casserait l'historique de crawl.
- **Pas de soumission massive forcée via outils tiers** (services qui « pingent » Google). Inefficace et risque de signal négatif.

---

## 5. Pronostic

Avec l'application des priorités 1 et 2 :

- **Sous 2 à 4 semaines** : les pages soumises manuellement dans GSC sont explorées et probablement indexées.
- **Sous 2 à 3 mois** : la densification des pages maisons les fait passer dans l'index complet, et les 12 commencent à se positionner sur des requêtes longue traîne (« maison 5 astrologie signification », etc.).
- **Sous 6 à 12 mois** : avec un rythme régulier de publication + quelques backlinks, le domaine accumule l'autorité nécessaire pour que ce type d'incident ne se reproduise plus.

Le site est bien construit. Le problème est principalement un problème de **jeunesse** et de **densité perçue**, pas un problème technique. La trajectoire est bonne.
