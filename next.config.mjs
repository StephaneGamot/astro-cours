import nextMDX from "@next/mdx";

const withMDX = nextMDX({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],

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
    // ✅ CSS critique inline (nécessite `npm install critters`)
    optimizeCss: true,
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
        ],
      },
    ];
  },
};

export default withMDX(nextConfig);