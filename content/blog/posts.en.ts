import type { ReactElement } from "react";

import ThemeAstralPost, {
  meta as themeAstralMeta,
} from "./en/qu-est-ce-qu-un-theme-astral";
import ConjonctionPost, {
  meta as conjonctionMeta,
} from "./en/conjonction-melange-des-forces";
import VenusEnSigne, {
  meta as venusEnSigne,
} from "./en/venus-en-signe-ton-style-amoureux";
import MarsEnSigne, {
  meta as marsEnSigne,
} from "./en/mars-en-signes-desir-libido-action-sexe";
import LuneCyclesPost, {
  meta as luneCyclesMeta,
} from "./en/pleine-lune-nouvelle-lune-cycles-astrologie";
import BestMomentToSellHousePost, {
  meta as BestMomentToSellHouseMeta,
} from "./en/comment-regarder-le-meilleur-moment-pour-vendre-sa-maison-avec-l-astrologie";
import ZodiacSignAndAsc, {
  meta as ZodiacSignAndAscMeta,
} from "./en/comprendre-son-signe-astrologique-et-son-ascendant";
import ZodiacQualitiesPost, {
  meta as zodiacQualitiesMeta,
} from "./en/qualites-defauts-12-signes-zodiaque";
import SportBySignPost, {
  meta as sportBySignMeta,
} from "./en/quel-type-de-sportif-selon-signe-astrologique";
import LoveFidelityPost, {
  meta as loveFidelityMeta,
} from "./en/amour-fidelite-signes-zodiaque";
import FinancesThemeAstralPost, {
  meta as financesThemeAstralMeta,
} from "./en/finances-theme-astral";

import orientationProfessionnelleThemeAstralPost, {
  meta as orientationProfessionnelleThemeAstralMeta,
} from "./en/orientation-professionnelle-theme-astral";

import SolarienPost, { meta as solarienMeta } from "./en/solarien";

import LunarienPost, { meta as lunarienMeta } from "./en/lunarien";

import MartienPost, { meta as martienMeta } from "./en/martien";

import JupiterienPost, { meta as JupiterienMeta } from "./en/jupiterien";

import SaturnienPost, { meta as SaturnienMeta } from "./en/saturnien";

import NeptunienPost, { meta as neptunienMeta } from "./en/neptunien";

import UranienPost, { meta as uranienMeta } from "./en/uranien";

import MercurienienPost, { meta as mercurienMeta } from "./en/mercurien";

import VenusPost, { meta as VenusMeta } from "./en/venusien";
import PlutonienPost, { meta as plutonienMeta } from "./en/plutonien";
import ManipulateursPNPost, {
  meta as manipulateursPNMeta,
} from "./en/manipulateurs-pervers-narcissiques-astrologie";

import HoroscopeNeVousRessemblePasPost, {
  meta as horoscopeNeVousRessemblePasMeta,
} from "./en/pourquoi-votre-horoscope-ne-vous-ressemble-pas";

import SmsSignesPost, {
  meta as smsSignesMeta,
} from "./en/ton-signe-astro-selon-ta-facon-de-repondre-aux-messages";

import LongeviteVieAstrologiePost, {
  meta as longeviteVieAstrologieMeta,
} from "./en/longevite-vie-astrologie";

import ChanceJeuxArgentLoteriePost, {
  meta as chanceJeuxArgentLoterieMeta,
} from "./en/chance-jeux-argent-loterie-astrologie";

import AstrologieMedicaleRenaissancePost, {
  meta as astrologieMedicaleRenaissanceMeta,
} from "./en/astrologie-medicale-renaissance";

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

export const posts_en: PostModule[] = [
  { meta: astrologieMedicaleRenaissanceMeta, Component: AstrologieMedicaleRenaissancePost },
  { meta: chanceJeuxArgentLoterieMeta, Component: ChanceJeuxArgentLoteriePost },
  { meta: longeviteVieAstrologieMeta, Component: LongeviteVieAstrologiePost },
  { meta: smsSignesMeta, Component: SmsSignesPost },
  { meta: horoscopeNeVousRessemblePasMeta, Component: HoroscopeNeVousRessemblePasPost },
  { meta: manipulateursPNMeta, Component: ManipulateursPNPost },
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
