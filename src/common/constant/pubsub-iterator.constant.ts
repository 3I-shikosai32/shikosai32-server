import { RankingPeriod } from '~/user/controller/dto/enum/date.enum';
import { RankingTarget } from '~/user/controller/dto/enum/ranking-target.enum';

// eslint-disable-next-line no-shadow
export enum PubSubTrigger {
  UPDATED_RANKING = 'UPDATED_RANKING',
  UPDATED_GAME_ATTENDERS = 'UPDATED_GAME_ATTENDERS',
}

export const generateUpdatedRankingTrigger = (rankingTarget: keyof typeof RankingTarget, date: keyof typeof RankingPeriod) =>
  `${PubSubTrigger.UPDATED_RANKING}_${rankingTarget}_${date}`;
