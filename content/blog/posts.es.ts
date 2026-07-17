import type { ReactElement } from "react";

import ThemeAstralPost, {
  meta as themeAstralMeta,
} from "./es/qu-est-ce-qu-un-theme-astral";
import ConjonctionPost, {
  meta as conjonctionMeta,
} from "./es/conjonction-melange-des-forces";
import VenusEnSigne, {
  meta as venusEnSigne,
} from "./es/venus-en-signe-ton-style-amoureux";
import MarsEnSigne, {
  meta as marsEnSigne,
} from "./es/mars-en-signes-desir-libido-action-sexe";
import LuneCyclesPost, {
  meta as luneCyclesMeta,
} from "./es/pleine-lune-nouvelle-lune-cycles-astrologie";
import BestMomentToSellHousePost, {
  meta as BestMomentToSellHouseMeta,
} from "./es/comment-regarder-le-meilleur-moment-pour-vendre-sa-maison-avec-l-astrologie";
import ZodiacSignAndAsc, {
  meta as ZodiacSignAndAscMeta,
} from "./es/comprendre-son-signe-astrologique-et-son-ascendant";
import ZodiacQualitiesPost, {
  meta as zodiacQualitiesMeta,
} from "./es/qualites-defauts-12-signes-zodiaque";
import SportBySignPost, {
  meta as sportBySignMeta,
} from "./es/quel-type-de-sportif-selon-signe-astrologique";
import LoveFidelityPost, {
  meta as loveFidelityMeta,
} from "./es/amour-fidelite-signes-zodiaque";
import FinancesThemeAstralPost, {
  meta as financesThemeAstralMeta,
} from "./es/finances-theme-astral";

import orientationProfessionnelleThemeAstralPost, {
  meta as orientationProfessionnelleThemeAstralMeta,
} from "./es/orientation-professionnelle-theme-astral";

import SolarienPost, { meta as solarienMeta } from "./es/solarien";

import LunarienPost, { meta as lunarienMeta } from "./es/lunarien";

import MartienPost, { meta as martienMeta } from "./es/martien";

import JupiterienPost, { meta as JupiterienMeta } from "./es/jupiterien";

import SaturnienPost, { meta as SaturnienMeta } from "./es/saturnien";

import NeptunienPost, { meta as neptunienMeta } from "./es/neptunien";

import UranienPost, { meta as uranienMeta } from "./es/uranien";

import MercurienienPost, { meta as mercurienMeta } from "./es/mercurien";

import VenusPost, { meta as VenusMeta } from "./es/venusien";
import PlutonienPost, { meta as plutonienMeta } from "./es/plutonien";
import ManipulateursPNPost, {
  meta as manipulateursPNMeta,
} from "./es/manipulateurs-pervers-narcissiques-astrologie";

import HoroscopeNeVousRessemblePasPost, {
  meta as horoscopeNeVousRessemblePasMeta,
} from "./es/pourquoi-votre-horoscope-ne-vous-ressemble-pas";

import SmsSignesPost, {
  meta as smsSignesMeta,
} from "./es/ton-signe-astro-selon-ta-facon-de-repondre-aux-messages";

import LongeviteVieAstrologiePost, {
  meta as longeviteVieAstrologieMeta,
} from "./es/longevite-vie-astrologie";

import ChanceJeuxArgentLoteriePost, {
  meta as chanceJeuxArgentLoterieMeta,
} from "./es/chance-jeux-argent-loterie-astrologie";

import AstrologieMedicaleRenaissancePost, {
  meta as astrologieMedicaleRenaissanceMeta,
} from "./es/astrologie-medicale-renaissance";

import MercureRetro2027Post, {
  meta as mercureRetro2027Meta,
} from "./es/mercure-retrograde-2027-dates";
import MensongePrefereSignesPost, {
  meta as mensongePrefereSignesMeta,
} from "./es/mensonge-prefere-chaque-signe-zodiaque";
import CalendrierLunaire20262027Post, {
  meta as calendrierLunaire20262027Meta,
} from "./es/calendrier-pleine-lune-nouvelle-lune-2026-2027";

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

export const posts_es: PostModule[] = [
  { meta: mensongePrefereSignesMeta, Component: MensongePrefereSignesPost },
  { meta: mercureRetro2027Meta, Component: MercureRetro2027Post },
  { meta: calendrierLunaire20262027Meta, Component: CalendrierLunaire20262027Post },
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
