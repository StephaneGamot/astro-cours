/**
 * Course JSON-LD helper for astro-cours.com
 *
 * Génère un nœud Schema.org "Course" prêt à insérer dans un @graph.
 * Conçu pour être appelé depuis :
 *   - app/signes/[slug]/page.tsx
 *   - app/planetes/[slug]/page.tsx
 *   - app/maisons/[slug]/page.tsx
 *   - app/(annexe)/<topic>/page.tsx
 *
 * Le nœud référence l'Organization site-wide via @id (#organization) — il faut
 * donc s'assurer que l'Organization soit déclarée au moins une fois (layout
 * racine recommandé).
 */

import { AUTHOR_PERSON, PUBLISHER_ORG, absoluteUrl } from "@/lib/seo";

interface CourseNodeInput {
  /** URL relative de la page, ex: "/signes/belier" */
  path: string;
  /** Titre du cours (cible SERP), ex: "Bélier — Signe astrologique" */
  name: string;
  /** Description ~150 chars, alignée avec la meta description */
  description: string;
  /** URL relative ou absolue de l'image principale */
  image: string;
  /** Ce que l'apprenant va comprendre / savoir-faire */
  teaches: string;
  /** Sujet principal du cours, ex: "Bélier (signe astrologique)" */
  topicName: string;
  /** Durée de la leçon en minutes (par défaut 30) */
  workloadMinutes?: number;
}

export function buildCourseNode(input: CourseNodeInput) {
  const url = absoluteUrl(input.path);
  const image = input.image.startsWith("http") ? input.image : absoluteUrl(input.image);

  return {
    "@type": "Course",
    "@id": `${url}#course`,
    url,
    name: input.name,
    description: input.description,
    image,
    inLanguage: "fr-FR",
    isAccessibleForFree: true,
    educationalLevel: "Beginner",
    learningResourceType: "Lesson",
    teaches: input.teaches,
    about: { "@type": "Thing", name: input.topicName },
    provider: PUBLISHER_ORG,
    author: AUTHOR_PERSON,
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Online",
      courseWorkload: `PT${input.workloadMinutes ?? 30}M`,
      inLanguage: "fr-FR",
      instructor: AUTHOR_PERSON,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
        category: "free",
        availability: "https://schema.org/InStock",
      },
    },
  };
}
