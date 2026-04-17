"use client";

import { useEffect } from "react";
import { ENTRIES } from "@/lib/dictionnaire";
import { absoluteUrl } from "@/lib/seo";

const CANONICAL = "/dictionnaire";
const DESCRIPTION =
  "Dictionnaire astrologique complet : définitions claires et accessibles des termes essentiels de l'astrologie — planètes, signes, maisons, aspects, transits et plus encore.";

/**
 * Injecte le JSON-LD après le premier rendu (requestIdleCallback)
 * pour ne pas bloquer le LCP avec un script inline de ~100 KiB.
 * Google le voit quand même car Googlebot exécute le JS.
 */
export default function JsonLdScript() {
  useEffect(() => {
    const inject = () => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "DefinedTermSet",
        name: "Dictionnaire astrologique — Astro Cours",
        description: DESCRIPTION,
        url: absoluteUrl(CANONICAL),
        inLanguage: "fr-FR",
        hasDefinedTerm: ENTRIES.map((e) => ({
          "@type": "DefinedTerm",
          name: e.term,
          description: e.short,
          url: `${absoluteUrl(CANONICAL)}#${e.slug}`,
          inDefinedTermSet: absoluteUrl(CANONICAL),
        })),
      });
      document.head.appendChild(script);
    };

    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(inject);
    } else {
      setTimeout(inject, 100);
    }
  }, []);

  return null;
}