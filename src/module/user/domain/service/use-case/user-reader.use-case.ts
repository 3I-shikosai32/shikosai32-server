import { ObtainmentStatus } from '../../model/obtainment-status.model';
import { User } from '../../model/user.model';
import { UserCursor, UserOrderBy, UserWhere } from './port/user-reader.input';

export interface UserReaderUseCaseInterface {
  findUser(userId: string): Promise<User | null>;
  findUsers(where?: UserWhere, orderBy?: UserOrderBy[], cursor?: UserCursor, take?: number, skip?: number): Promise<User[]>;
  getObtainmentStatuses(userId: string): Promise<ObtainmentStatus[]>;
}
