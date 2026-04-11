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

  // ✅ Image optimization — limit generated sizes for faster builds + smaller downloads
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 192, 256, 384],
  },

  // ✅ Experimental CSS optimization (inline critical CSS)
  experimental: {
    optimizeCss: true,
  },
};

export default withMDX(nextConfig);