import type { ReactElement } from "react";

import ThemeAstralPost, { meta as themeAstralMeta } from "./qu-est-ce-qu-un-theme-astral";
import ConjonctionPost, { meta as conjonctionMeta } from "./conjonction-melange-des-forces";
import VenusEnSigne, { meta as venusEnSigne } from "./venus-en-signe-ton-style-amoureux";
import MarsEnSigne, { meta as marsEnSigne } from "./mars-en-signes-desir-libido-action-sexe";
import LuneCyclesPost, { meta as luneCyclesMeta } from "./pleine-lune-nouvelle-lune-cycles-astrologie";

export type PostMeta = typeof themeAstralMeta;
export type PostModule = { meta: PostMeta; Component: () => ReactElement };

export const posts: PostModule[] = [
  { meta: luneCyclesMeta, Component: LuneCyclesPost },
  { meta: venusEnSigne, Component: VenusEnSigne },
  { meta: marsEnSigne, Component: MarsEnSigne },
  { meta: themeAstralMeta, Component: ThemeAstralPost },
  { meta: conjonctionMeta, Component: ConjonctionPost },
];
