This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## IndexNow

La clé IndexNow (publique) est servie depuis `public/<clé>.txt`. Le script `scripts/indexnow.mjs` lit le sitemap **en ligne** et soumet à `api.indexnow.org` (Bing, Yandex, Naver, Seznam, Yep…) les URLs nouvelles, modifiées (`lastmod` différent) ou disparues depuis la dernière exécution.

- **Automatique** : `.github/workflows/indexnow.yml` tourne après chaque mise en production Vercel (statut GitHub « Production » → success). L'état entre deux exécutions est gardé dans le cache GitHub Actions ; sans état, le script prend les URLs modifiées dans les 30 derniers jours. Lancement manuel possible depuis l'onglet *Actions* (mode `changed` ou `all`).
- **Manuel** :
  - `npm run indexnow` — diff depuis la dernière exécution locale (`.indexnow/state.json`, ignoré par git)
  - `npm run indexnow -- --all` — tout le sitemap
  - `npm run indexnow -- --since 2026-10-01` — URLs dont le `lastmod` ≥ date
  - `npm run indexnow -- --url https://www.astro-cours.com/blog/xxx` — URL(s) précise(s)
  - `npm run indexnow -- --dry-run` — affiche la sélection sans rien envoyer

La détection repose sur le `lastmod` du sitemap : quand une page change de manière significative, mettre à jour sa date (`date` d'un article, `STATIC_PAGE_DATES` / `updated` dans `app/sitemap.ts`), sinon l'URL ne sera pas resoumise.
