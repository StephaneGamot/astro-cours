import nextMDX from "@next/mdx";

const withMDX = nextMDX({
  extension: /\.mdx?$/,
});

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

export default withMDX(nextConfig);