import type { ReactElement } from "react";

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
import FinancesThemeAstralPost, {
  meta as financesThemeAstralMeta,
} from "./finances-theme-astral";

import orientationProfessionnelleThemeAstralPost, {
  meta as orientationProfessionnelleThemeAstralMeta,
} from "./orientation-professionnelle-theme-astral";

import SolarienPost, { meta as solarienMeta } from "./solarien";

import LunarienPost, { meta as lunarienMeta } from "./lunarien";

import MartienPost, { meta as martienMeta } from "./martien";

import JupiterienPost, { meta as JupiterienMeta } from "./jupiterien";

import SaturnienPost, { meta as SaturnienMeta } from "./saturnien";

import NeptunienPost, { meta as neptunienMeta } from "./neptunien";

import UranienPost, { meta as uranienMeta } from "./uranien";

import MercurienienPost, { meta as mercurienMeta } from "./mercurien";

import VenusPost, { meta as VenusMeta } from "./venusien";
import PlutonienPost, { meta as plutonienMeta } from "./plutonien";

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
  { meta: martienMeta, Component: MartienPost },
  { meta: solarienMeta, Component: SolarienPost },
  { meta: lunarienMeta, Component: LunarienPost },
  { meta: mercurienMeta, Component: MercurienienPost },
  { meta: neptunienMeta, Component: NeptunienPost },
  { meta: VenusMeta, Component: VenusPost },
  { meta: JupiterienMeta, Component: JupiterienPost },
  { meta: SaturnienMeta, Component: SaturnienPost },
  { meta: uranienMeta, Component: UranienPost },
  { meta: plutonienMeta, Component: PlutonienPost },
  { meta: orientationProfessionnelleThemeAstralMeta, Component: orientationProfessionnelleThemeAstralPost},
  { meta: financesThemeAstralMeta, Component: FinancesThemeAstralPost },
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
