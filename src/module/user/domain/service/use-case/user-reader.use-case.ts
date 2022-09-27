import { ObtainmentStatus } from '../../model/obtainment-status.model';
import { User } from '../../model/user.model';
import { GiftHistory } from '~/gift-history/domain/model/gift-history.model';
import { Item } from '~/item/domain/model/item.model';
import { FindUserArgs } from '~/user/controller/dto/args/find-user.args';
import { FindUsersArgs } from '~/user/controller/dto/args/find-users.args';

export interface UserReaderUseCaseInterface {
  findUser(args: FindUserArgs): Promise<User | null>;
  findUsers(args: FindUsersArgs): Promise<User[]>;
  findItemsByUserId(id: string): Promise<Item[]>;
  findGiftHistoriesByUserId(id: string): Promise<GiftHistory[]>;
  getObtainmentStatuses(args: FindUserArgs): Promise<ObtainmentStatus[]>;
}
