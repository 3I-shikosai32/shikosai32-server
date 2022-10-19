import { GameAttenders } from '../../model/game-attenders.model';
import { Ranking } from '../../model/ranking.model';
import { RankingTarget } from '~/user/controller/dto/enum/ranking-target.enum';

export interface UserPublisherUseCaseInterface {
  publishRanking(rankingTarget: keyof typeof RankingTarget, isBeforeDay2: boolean): Promise<Ranking[]>;
  publishUpdatedGameAttenders(): Promise<GameAttenders>;
}
