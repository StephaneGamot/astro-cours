import type { ReactElement } from "react";
import type { StaticImageData } from "next/image";

import ThemeAstralPost, {
  meta as themeAstralMeta,
} from "./qu-est-ce-qu-un-theme-astral";
import ConjonctionPost, {
  meta as conjonctionMeta,
} from "./conjonction-melange-des-forces";
import VenusEnSigne, {
  meta as venusEnSigne,
} from "./venus-en-signe-ton-style-amoureux";
import MarsEnSigne, {
  meta as marsEnSigne,
} from "./mars-en-signes-desir-libido-action-sexe";
import LuneCyclesPost, {
  meta as luneCyclesMeta,
} from "./pleine-lune-nouvelle-lune-cycles-astrologie";
import BestMomentToSellHousePost, {
  meta as BestMomentToSellHouseMeta,
} from "./comment-regarder-le-meilleur-moment-pour-vendre-sa-maison-avec-l-astrologie";
import ZodiacSignAndAsc, {
  meta as ZodiacSignAndAscMeta,
} from "./comprendre-son-signe-astrologique-et-son-ascendant";
import ZodiacQualitiesPost, {
  meta as zodiacQualitiesMeta,
} from "./qualites-defauts-12-signes-zodiaque";
import SportBySignPost, {
  meta as sportBySignMeta,
} from "./quel-type-de-sportif-selon-signe-astrologique";
import LoveFidelityPost, {
  meta as loveFidelityMeta,
} from "./amour-fidelite-signes-zodiaque";

export type ReadingLevel = "débutant" | "intermédiaire" | "avancé";

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingLevel: ReadingLevel;
  cover?: string;
};

export type PostModule = {
  meta: PostMeta;
  Component: () => ReactElement;
};

export const posts: PostModule[] = [
  { meta: loveFidelityMeta, Component: LoveFidelityPost },
  { meta: zodiacQualitiesMeta, Component: ZodiacQualitiesPost },
  { meta: sportBySignMeta, Component: SportBySignPost },
  { meta: ZodiacSignAndAscMeta, Component: ZodiacSignAndAsc },
  { meta: luneCyclesMeta, Component: LuneCyclesPost },
  { meta: venusEnSigne, Component: VenusEnSigne },
  { meta: marsEnSigne, Component: MarsEnSigne },
  { meta: themeAstralMeta, Component: ThemeAstralPost },
  { meta: conjonctionMeta, Component: ConjonctionPost },
  { meta: BestMomentToSellHouseMeta, Component: BestMomentToSellHousePost },
];