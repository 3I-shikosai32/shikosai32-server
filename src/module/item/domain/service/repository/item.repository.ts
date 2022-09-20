import { Prisma } from '@prisma/client';
import { Item } from '../../model/item.model';
import { BaseRepositoryInterface } from '@/common/repository/base.repository';
import { User } from '~/user/domain/model/user.model';

export type FindUnique = {
  where: Prisma.ItemWhereUniqueInput;
};
export type FindMany = {
  where?: Prisma.ItemWhereInput;
  skip?: number;
  take?: number;
  cursor?: Prisma.ItemWhereUniqueInput;
  orderBy?: Prisma.ItemOrderByWithAggregationInput[];
  distinct?: Prisma.ItemScalarFieldEnum[];
};
export type Create = {
  data: Prisma.ItemCreateInput;
};
export type Update = {
  where: Prisma.ItemWhereUniqueInput;
  data: Prisma.ItemUpdateInput;
};
export type Delete = {
  where: Prisma.ItemWhereUniqueInput;
};

export interface ItemRepositoryInterface extends BaseRepositoryInterface<Item, FindUnique, FindMany, Create, Update, Delete> {
  findUsersByItemId<T extends FindUnique>(args: T): Promise<User[]>;
}
