import { Prisma } from '@prisma/client';
import { ItemCompletedHistory } from '../../model/item-completed-history.model';
import { BaseRepositoryInterface } from '@/common/base/repository/base.repository';

export type FindUnique = {
  where: Prisma.ItemCompletedHistoryWhereUniqueInput;
};
export type FindMany = {
  where?: Prisma.ItemCompletedHistoryWhereInput;
  skip?: number;
  take?: number;
  cursor?: Prisma.ItemCompletedHistoryWhereUniqueInput;
  orderBy?: Prisma.ItemCompletedHistoryOrderByWithAggregationInput[];
  distinct?: Prisma.ItemCompletedHistoryScalarFieldEnum[];
};
export type Create = {
  data: Prisma.ItemCompletedHistoryCreateInput;
};
export type Update = {
  where: Prisma.ItemCompletedHistoryWhereUniqueInput;
  data: Prisma.ItemCompletedHistoryUpdateInput;
};
export type Delete = {
  where: Prisma.ItemCompletedHistoryWhereUniqueInput;
};

export type ItemCompletedHistoryRepositoryInterface = BaseRepositoryInterface<ItemCompletedHistory, FindUnique, FindMany, Create, Update, Delete>;
