import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import NavBAr from "@/components/layout/header/NavBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.astro-cours.com"),
  title: {
    default: "Astro Cours",
    template: "%s — Astro Cours",
  },
  description: "Cours d’astrologie clairs, structurés et modernes.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Astro Cours",
    description: "Cours d’astrologie clairs, structurés et modernes.",
    url: "https://www.astro-cours.com",
    siteName: "Astro Cours",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Astro Cours",
    description: "Cours d’astrologie clairs, structurés et modernes.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="JNM0DqC2SHxBN/ZLlVz+xA"
          strategy="afterInteractive"
        />
      </head>

      <body>
        <NavBAr />
        {children}
      </body>
    </html>
  );
}
