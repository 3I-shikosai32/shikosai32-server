import { GameAttenders } from '../../model/game-attenders.model';
import { ObtainmentStatus } from '../../model/obtainment-status.model';
import { User } from '../../model/user.model';
import { UserCursor, UserOrderBy, UserWhere } from './port/user-reader.input';
import { Date } from '~/user/controller/dto/enum/date.enum';
import { RankingTarget } from '~/user/controller/dto/enum/ranking-target.enum';

export interface UserReaderUseCaseInterface {
  findUser(userId: string): Promise<User | null>;
  findUsers(where?: UserWhere, orderBy?: UserOrderBy[], cursor?: UserCursor, take?: number, skip?: number): Promise<User[]>;
  getObtainmentStatuses(userId: string): Promise<ObtainmentStatus[]>;
  getRanking(rankingTarget: keyof typeof RankingTarget, date: keyof typeof Date): Promise<User[]>;
  getGameAttenders(): Promise<GameAttenders>;
}
