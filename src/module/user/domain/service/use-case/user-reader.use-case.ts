import { User } from '../../model/user.model';
import { UserCursor, UserOrderBy, UserWhere } from './port/user-reader.input';
import { GiftHistory } from '~/gift-history/domain/model/gift-history.model';
import { Item } from '~/item/domain/model/item.model';

export interface UserReaderUseCaseInterface {
  findUser(userId: string): Promise<User | null>;
  findUsers(where?: UserWhere, orderBy?: UserOrderBy[], cursor?: UserCursor, take?: number, skip?: number): Promise<User[]>;
  findItemsByUserId(id: string): Promise<Item[]>;
  findGiftHistoriesByUserId(id: string): Promise<GiftHistory[]>;
}
