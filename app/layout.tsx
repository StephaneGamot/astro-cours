import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import NavBAr from "@/components/layout/header/NavBar";
import Footer from "@/components/layout/footer/Footer";

const SITE_URL = "https://www.astro-cours.com";
const SITE_NAME = "Astro Cours";
const DEFAULT_DESC =
  "Cours d'astrologie clairs, structurés et modernes : signes, planètes, maisons, aspects et transits.";

const OG_IMAGE = `${SITE_URL}/og/cover.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: `Cours d'astrologie — ${SITE_NAME}`,
    template: `%s`,
  },

  description: DEFAULT_DESC,
  applicationName: SITE_NAME,

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
    title: SITE_NAME,
    description: DEFAULT_DESC,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — cours d'astrologie`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: DEFAULT_DESC,
    images: [OG_IMAGE],
  },

  manifest: "/manifest.json",

  alternates: {
    canonical: SITE_URL,
    languages: { "fr": SITE_URL },
  },

  other: {
    "theme-color": "#8B5CF6",
  },
};

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${cormorant.variable}`}>
      <body>
        {/* ✅ lazyOnload : ne charge qu'après que la page est totalement prête */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="JNM0DqC2SHxBN/ZLlVz+xA"
          strategy="lazyOnload"
        />
        <NavBAr />
        {children}
        <Footer />
      </body>
    </html>
  );
}