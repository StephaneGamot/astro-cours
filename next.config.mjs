import nextMDX from "@next/mdx";
import createNextIntlPlugin from "next-intl/plugin";

const withMDX = nextMDX({
  extension: /\.mdx?$/,
});

// ✅ Plugin next-intl : branche i18n/request.ts (locale + messages par requête)
const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

/**
 * ✅ Redirections 308 « slug de paire non canonique → canonique » (audit Ahrefs 08/07/2026).
 *
 * PROBLÈME : les pages /compatibilite/[pair] appellent permanentRedirect() quand
 * le slug n'est pas celui de la locale (langue croisée ou ordre inversé). Or ces
 * slugs ne sont PAS prérendus (generateStaticParams ne sort que le slug canonique
 * par locale). Ils sont donc rendus à la demande, et un redirect() pendant la
 * génération statique à la demande ne peut PAS émettre un statut HTTP 3xx : Next
 * injecte alors une balise <meta http-equiv="refresh"> dans une page 200 mise en
 * cache → Ahrefs remonte « Meta refresh redirect ».
 *
 * SOLUTION : émettre de vraies 308 côté serveur AVANT tout rendu, via next.config.
 * On génère ici toutes les variantes (langues croisées + ordre inversé) → slug
 * canonique de la locale cible. Source unique de vérité dupliquée volontairement
 * (next.config ne peut pas importer les tables TS avec les alias @/).
 */
function compatibilityRedirects() {
  const SIGNS = {
    belier: { fr: "belier", en: "aries", es: "aries" },
    taureau: { fr: "taureau", en: "taurus", es: "tauro" },
    gemeaux: { fr: "gemeaux", en: "gemini", es: "geminis" },
    cancer: { fr: "cancer", en: "cancer", es: "cancer" },
    lion: { fr: "lion", en: "leo", es: "leo" },
    balance: { fr: "balance", en: "libra", es: "libra" },
    scorpion: { fr: "scorpion", en: "scorpio", es: "escorpio" },
    poissons: { fr: "poissons", en: "pisces", es: "piscis" },
  };
  // Paires publiées (mêmes clés que lib/compatibility.ts → PAIRS).
  const PAIRS = [
    ["belier", "lion"],
    ["taureau", "cancer"],
    ["gemeaux", "balance"],
    ["cancer", "scorpion"],
    ["scorpion", "poissons"],
  ];
  const LOCS = ["fr", "en", "es"];
  const HUB = { fr: "/compatibilite", en: "/compatibility", es: "/compatibilidad" };
  const PREFIX = { fr: "", en: "/en", es: "/es" }; // localePrefix "as-needed" → fr sans préfixe
  const slug = (sign, loc) => SIGNS[sign][loc];
  const path = (loc, s) => `${PREFIX[loc]}${HUB[loc]}/${s}`;

  const seen = new Set();
  const out = [];
  for (const [a, b] of PAIRS) {
    for (const loc of LOCS) {
      const canonSlug = `${slug(a, loc)}-${slug(b, loc)}`;
      const destination = path(loc, canonSlug);
      const variants = new Set();
      for (const [x, y] of [[a, b], [b, a]]) {
        for (const la of LOCS) for (const lb of LOCS) {
          variants.add(`${slug(x, la)}-${slug(y, lb)}`);
        }
      }
      for (const v of variants) {
        if (v === canonSlug) continue;
        const source = path(loc, v);
        if (source === destination || seen.has(source)) continue;
        seen.add(source);
        out.push({ source, destination, permanent: true });
      }
    }
  }
  return out;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],

  // ✅ Compression gzip/brotli au niveau Next (défensif).
  //    Sur Vercel, l'edge compresse normalement, mais on a observé en mai 2026
  //    que les pages prérendées /planetes/[slug] étaient servies depuis le
  //    blob storage (Content-Disposition: inline, Accept-Ranges: bytes) SANS
  //    Content-Encoding ni Vary: Accept-Encoding. Forcer `compress: true`
  //    rebascule Next sur sa pipeline de compression.
  compress: true,

  // ✅ Force Turbopack à utiliser la racine du projet
  turbopack: {
    root: new URL(".", import.meta.url).pathname,
  },

  // ✅ Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 192, 256, 320, 384],
    qualities: [40, 50, 60, 70, 75],
    minimumCacheTTL: 5184000,
  },

  experimental: {
    // ⚠️ optimizeCss désactivé après audit Lighthouse (mai 2026) :
    //    beasties/critters inlineait le CSS critique dans le HTML, ce qui
    //    GONFLAIT le HTML (33 KiB) et retardait le preload de l'image LCP
    //    (« Délai de chargement de la ressource » passait de 90ms à 900ms).
    //    Sur ce site, le coût de l'inline > gain de render-blocking.
    //    À ré-évaluer si la home devient ultra-légère.
    optimizeCss: false,
    // ✅ Tree-shaking agressif pour les barrel exports (icônes)
    //    NavBar n'utilise plus HeadlessUI/Heroicons, mais lucide-react
    //    reste utilisé sur les pages slugs (planètes, maisons, blog…).
    optimizePackageImports: [
      "lucide-react",
    ],
  },

  // ✅ Cible navigateurs modernes pour éliminer les polyfills
  //    (Array.prototype.at, Object.fromEntries, etc.)
  compiler: {
    // Supprime les console.log en production (garde console.error)
    removeConsole: process.env.NODE_ENV === "production"
      ? { exclude: ["error", "warn"] }
      : false,
  },

  // ✅ Webpack : cible ES2022 pour le code client
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.target = ["web", "es2022"];
    }
    return config;
  },

  // ✅ 301 redirects pour anciennes URLs (préserve l'équité SEO).
  async redirects() {
    return [
      {
        source: "/blog/comprendre-son-signe-astrologique-et-son-ascendant",
        destination: "/blog/comprendre-signe-astrologique-ascendant-12-exemples",
        permanent: true,
      },
      // ✅ Compatibilité : slugs non canoniques → 308 serveur (remplace les
      //    <meta refresh> auto-générés par permanentRedirect à la demande).
      ...compatibilityRedirects(),
    ];
  },

  // ✅ Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://analytics.ahrefs.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://analytics.ahrefs.com; frame-ancestors 'none';" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          // ✅ Force le CDN à différencier le cache par encodage (gzip/br/identity).
          //    Sans ça, Vercel peut servir la version non compressée stockée en cache
          //    à des clients qui demandent br/gzip → -100% de gain de compression.
          { key: "Vary", value: "Accept-Encoding" },
        ],
      },
    ];
  },
};

export default withNextIntl(withMDX(nextConfig));