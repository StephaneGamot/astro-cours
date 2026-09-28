import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { routing } from "./i18n/routing";
import { canonicalSlugRedirect, legacyBlogTagRedirect } from "./i18n/canonicalRedirect";

const intlMiddleware = createMiddleware(routing);

export default function proxy(request: NextRequest) {
  // ✅ Slug d'une autre langue (blog, tags, signes/planètes/maisons) → vraie
  //    308 serveur, au lieu du <meta refresh> en page 200 généré par
  //    permanentRedirect() pendant le streaming (Search Console 09/2026).
  const { pathname, searchParams } = request.nextUrl;

  // ✅ Anciennes URL /blog?tag=… → page de tag localisée (308, sans query).
  const rawTag = searchParams.get("tag");
  const legacy = rawTag !== null ? legacyBlogTagRedirect(pathname, rawTag) : null;
  if (legacy) {
    const url = request.nextUrl.clone();
    url.pathname = legacy;
    url.search = "";
    return NextResponse.redirect(url, 308);
  }

  const target = canonicalSlugRedirect(pathname);
  if (target) {
    const url = request.nextUrl.clone();
    url.pathname = target;
    return NextResponse.redirect(url, 308);
  }
  return intlMiddleware(request);
}

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
