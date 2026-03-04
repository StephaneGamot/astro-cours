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
};

export default withMDX(nextConfig);