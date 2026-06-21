import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  /**
   * Le middleware s'applique à toutes les routes SAUF :
   *   • /api          → routes API (non localisées)
   *   • /_next, /_vercel → internes Next/Vercel
   *   • tout chemin contenant un "." → fichiers statiques
   *     (sitemap.xml, robots.txt, favicon.ico, /og/*, /images/*, etc.)
   *
   * "/" est bien couvert par ce matcher (la home FR).
   */
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
