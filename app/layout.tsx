import "./globals.css";

/**
 * Root layout MINIMAL.
 *
 * Avec next-intl + App Router, le vrai layout (html / body / fonts /
 * providers / metadata) vit dans `app/[locale]/layout.tsx`, car il a
 * besoin de connaître la locale.
 *
 * Ce layout racine ne fait que :
 *   • importer le CSS global (les imports CSS sont globaux quel que soit
 *     l'endroit où ils sont déclarés),
 *   • transmettre les enfants.
 *
 * Il NE rend volontairement PAS de <html>/<body> : c'est le layout
 * `[locale]` qui s'en charge (pattern officiel next-intl).
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
