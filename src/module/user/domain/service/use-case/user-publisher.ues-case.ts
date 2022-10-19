import { GameAttenders } from '../../model/game-attenders.model';
import { Ranking } from '../../model/ranking.model';
import { Date } from '~/user/controller/dto/enum/date.enum';
import { RankingTarget } from '~/user/controller/dto/enum/ranking-target.enum';

export interface UserPublisherUseCaseInterface {
  publishRanking(rankingTarget: keyof typeof RankingTarget, date: Date): Promise<Ranking[]>;
  publishUpdatedGameAttenders(): Promise<GameAttenders>;
}
