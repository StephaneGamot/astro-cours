import type { ReactElement } from "react";

import ThemeAstralPost, { meta as themeAstralMeta } from "./qu-est-ce-qu-un-theme-astral";
import ConjonctionPost, { meta as conjonctionMeta } from "./conjonction-melange-des-forces";
import VenusEnSigne, { meta as venusEnSigne } from "./venus-en-signe-ton-style-amoureux";

export type PostMeta = typeof themeAstralMeta;
export type PostModule = { meta: PostMeta; Component: () => ReactElement };

export const posts: PostModule[] = [
  { meta: venusEnSigne, Component: VenusEnSigne },
  { meta: themeAstralMeta, Component: ThemeAstralPost },
  { meta: conjonctionMeta, Component: ConjonctionPost },
];
