import { Prisma } from '@prisma/client';
import { GiftHistory } from '../../model/gift-history.model';
import { BaseRepositoryInterface } from '@/common/base/repository/base.repository';
import { StrictPropertyCheck } from '@/common/type/strict-property-check.type';

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

export interface GiftHistoryRepositoryInterface extends BaseRepositoryInterface<GiftHistory, FindUnique, FindMany, Create, Update, Delete> {
  createMany<T extends Create>(argsList: Array<StrictPropertyCheck<T, Create>>): Promise<GiftHistory[]>;
}
