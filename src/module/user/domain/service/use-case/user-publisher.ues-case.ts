import { GameAttenders } from '../../model/game-attenders.model';
import { User } from '../../model/user.model';
import { RankingTarget } from '~/user/controller/dto/enum/ranking-target.enum';

export interface UserPublisherUseCaseInterface {
  publishRanking(rankingTarget: keyof typeof RankingTarget, isBeforeDay2: boolean): Promise<User[]>;
  publishUpdatedGameAttenders(): Promise<GameAttenders>;
}
