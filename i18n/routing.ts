import { defineRouting } from "next-intl/routing";

/**
 * Configuration i18n centrale.
 *
 * - defaultLocale "fr" + localePrefix "as-needed" :
 *     FR à la racine (/, /blog…), EN/ES préfixés (/en, /es).
 * - localeDetection false : pas de redirection auto selon le navigateur.
 * - alternateLinks false : on DÉSACTIVE les en-têtes HTTP `Link` hreflang
 *     générés par le middleware next-intl. Raison (audit Ahrefs 22/06/2026) :
 *     next-intl traduit le SEGMENT mais PAS la valeur du [slug], donc il
 *     émettait des hreflang vers des URL non-canoniques (ex:
 *     /en/houses/casa-8 au lieu de /en/houses/house-8). Ces en-têtes
 *     entraient en conflit avec les hreflang corrects déjà présents dans le
 *     <head> (metadata.alternates) et dans le sitemap.xml → erreurs
 *     « Hreflang to non-canonical », « More than one page for same language »
 *     et « Missing reciprocal hreflang ». Les bons hreflang restent servis
 *     via le HTML et le sitemap.
 * - pathnames : SEGMENTS d'URL traduits par langue (ex: /signes → /en/signs,
 *     /es/signos). Le folder de route reste en interne (FR) ; le middleware
 *     réécrit l'URL localisée vers l'interne. La VALEUR du slug ([slug]) n'est
 *     pas traduite par pathnames (gérée séparément si besoin).
 */
export const routing = defineRouting({
  locales: ["fr", "en", "es"],
  defaultLocale: "fr",
  localePrefix: "as-needed",
  localeDetection: false,
  alternateLinks: false,
  pathnames: {
    "/": "/",
    "/blog": "/blog",
    "/blog/[slug]": "/blog/[slug]",
    "/blog/tag/[slug]": "/blog/tag/[slug]",

    "/signes/[slug]": {
      fr: "/signes/[slug]",
      en: "/signs/[slug]",
      es: "/signos/[slug]",
    },
    "/planetes/[slug]": {
      fr: "/planetes/[slug]",
      en: "/planets/[slug]",
      es: "/planetas/[slug]",
    },
    "/maisons/[slug]": {
      fr: "/maisons/[slug]",
      en: "/houses/[slug]",
      es: "/casas/[slug]",
    },

    "/dictionnaire-astrologique": {
      fr: "/dictionnaire-astrologique",
      en: "/astrology-dictionary",
      es: "/diccionario-astrologico",
    },
    "/a-propos": { fr: "/a-propos", en: "/about", es: "/acerca-de" },
    "/confidentialite": { fr: "/confidentialite", en: "/privacy", es: "/privacidad" },
    "/mentions-legales": { fr: "/mentions-legales", en: "/legal-notice", es: "/aviso-legal" },
    "/auteur/stephane-gamot": {
      fr: "/auteur/stephane-gamot",
      en: "/author/stephane-gamot",
      es: "/autor/stephane-gamot",
    },

    "/aspects": { fr: "/aspects", en: "/aspects", es: "/aspectos" },
    "/transits": { fr: "/transits", en: "/transits", es: "/transitos" },
    "/synastrie": { fr: "/synastrie", en: "/synastry", es: "/sinastria" },
    "/lilith": { fr: "/lilith", en: "/lilith", es: "/lilith" },
    "/maitrises": { fr: "/maitrises", en: "/rulerships", es: "/regencias" },
    "/retrogrades": { fr: "/retrogrades", en: "/retrogrades", es: "/retrogrados" },
    "/points-fictifs": { fr: "/points-fictifs", en: "/fictitious-points", es: "/puntos-ficticios" },
    "/noeuds-lunaires": { fr: "/noeuds-lunaires", en: "/lunar-nodes", es: "/nodos-lunares" },
    "/cuspides-des-maisons": { fr: "/cuspides-des-maisons", en: "/house-cusps", es: "/cuspides-casas" },
    "/maisons-derivees": { fr: "/maisons-derivees", en: "/derived-houses", es: "/casas-derivadas" },
    "/revolution-solaire": { fr: "/revolution-solaire", en: "/solar-return", es: "/revolucion-solar" },
    "/asteroides": { fr: "/asteroides", en: "/asteroids", es: "/asteroides" },
    "/les-decans": { fr: "/les-decans", en: "/decans", es: "/decanos" },
    "/astro-psychologie": { fr: "/astro-psychologie", en: "/astro-psychology", es: "/astro-psicologia" },
    "/astrologie-horaire": { fr: "/astrologie-horaire", en: "/horary-astrology", es: "/astrologia-horaria" },
    "/astrologie-medicale": { fr: "/astrologie-medicale", en: "/medical-astrology", es: "/astrologia-medica" },
    "/astrologie-mondiale": { fr: "/astrologie-mondiale", en: "/mundane-astrology", es: "/astrologia-mundial" },
    "/maisons-dominantes": { fr: "/maisons-dominantes", en: "/dominant-houses", es: "/casas-dominantes" },
    "/signes-dominants": { fr: "/signes-dominants", en: "/dominant-signs", es: "/signos-dominantes" },
    "/significateurs": { fr: "/significateurs", en: "/significators", es: "/significadores" },
  },
});

export type Locale = (typeof routing.locales)[number];
export type AppPathnames = keyof typeof routing.pathnames;
