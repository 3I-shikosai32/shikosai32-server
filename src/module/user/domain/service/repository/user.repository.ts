import { Prisma } from '@prisma/client';
import { User } from '../../model/user.model';
import { BaseRepositoryInterface } from '@/common/repository/base.repository';
import { StrictPropertyCheck } from '@/common/type/strict-property-check.type';
import { GiftHistory } from '~/gift-history/domain/model/gift-history.model';
import { Item } from '~/item/domain/model/item.model';

export type FindUnique = {
  where: Prisma.UserWhereUniqueInput;
};
export type FindMany = {
  where?: Prisma.UserWhereInput;
  skip?: number;
  take?: number;
  cursor?: Prisma.UserWhereUniqueInput;
  orderBy?: Prisma.UserOrderByWithAggregationInput[];
  distinct?: Prisma.UserScalarFieldEnum[];
};
export type Create = {
  data: Prisma.UserCreateInput;
};
export type Update = {
  where: Prisma.UserWhereUniqueInput;
  data: Prisma.UserUpdateInput;
};
export type Delete = {
  where: Prisma.UserWhereUniqueInput;
};

export interface UserRepositoryInterface extends BaseRepositoryInterface<User, FindUnique, FindMany, Create, Update, Delete> {
  findUniqueWithItems<T extends FindUnique>(args: StrictPropertyCheck<T, FindUnique>): Promise<[User, Item[]] | null>;
  findItemsByUserId<T extends FindUnique>(args: StrictPropertyCheck<T, FindUnique>): Promise<Item[]>;
  findGiftHistoriesByUserId<T extends FindUnique>(args: StrictPropertyCheck<T, FindUnique>): Promise<GiftHistory[]>;
}
