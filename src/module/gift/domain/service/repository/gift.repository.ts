import { Prisma } from '@prisma/client';
import { Gift } from '../../model/gift.model';
import { BaseRepositoryInterface } from '@/common/repository/base.repository';
import { StrictPropertyCheck } from '@/common/type/strict-property-check.type';
import { GiftHistory } from '~/gift-history/domain/model/gift-history.model';

export type FindUnique = {
  where: Prisma.GiftWhereUniqueInput;
};
export type FindMany = {
  where?: Prisma.GiftWhereInput;
  skip?: number;
  take?: number;
  cursor?: Prisma.GiftWhereUniqueInput;
  orderBy?: Prisma.GiftOrderByWithAggregationInput[];
  distinct?: Prisma.GiftScalarFieldEnum[];
};
export type Create = {
  data: Prisma.GiftCreateInput;
};
export type Update = {
  where: Prisma.GiftWhereUniqueInput;
  data: Prisma.GiftUpdateInput;
};
export type Delete = {
  where: Prisma.GiftWhereUniqueInput;
};

export interface GiftRepositoryInterface extends BaseRepositoryInterface<Gift, FindUnique, FindMany, Create, Update, Delete> {
  findGiftHistoriesByGiftId<T extends FindUnique>(args: StrictPropertyCheck<T, FindUnique>): Promise<GiftHistory[]>;
}
