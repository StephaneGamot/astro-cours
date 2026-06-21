import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

/**
 * Navigation next-intl.
 *
 * - `usePathname` renvoie le chemin INTERNE (dé-localisé) → les comparaisons
 *   d'état actif restent valides quelle que soit la langue.
 * - `Link` est un wrapper "intelligent" (voir ./SmartLink) qui localise
 *   automatiquement n'importe quel href string selon la table `pathnames`.
 *   Aucun appelant à modifier.
 */
const nav = createNavigation(routing);

export const usePathname = nav.usePathname;
export const useRouter = nav.useRouter;
export const redirect = nav.redirect;
export const getPathname = nav.getPathname;

export { Link } from "./SmartLink";
