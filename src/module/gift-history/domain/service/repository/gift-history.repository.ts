import { Prisma } from '@prisma/client';
import { GiftHistoryInterface } from '../model/gift-history.model';
import { BaseRepositoryInterface } from '@/common/repository/base.repository';

export type FindUnique = {
  where: Prisma.GiftHistoryWhereUniqueInput;
};
export type FindMany = {
  where?: Prisma.GiftHistoryWhereInput;
  skip?: number;
  take?: number;
  cursor?: Prisma.GiftHistoryWhereUniqueInput;
  orderBy?: Prisma.GiftHistoryOrderByWithAggregationInput[];
  distinct?: Prisma.GiftHistoryScalarFieldEnum[];
};
export type Create = {
  data: Prisma.GiftHistoryCreateInput;
};
export type Update = {
  where: Prisma.GiftHistoryWhereUniqueInput;
  data: Prisma.GiftHistoryUpdateInput;
};
export type Delete = {
  where: Prisma.GiftHistoryWhereUniqueInput;
};

export type GiftHistoryRepositoryInterface = BaseRepositoryInterface<GiftHistoryInterface, FindUnique, FindMany, Create, Update, Delete>;
