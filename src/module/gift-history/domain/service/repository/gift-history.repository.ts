import { Prisma } from '@prisma/client';
import { GiftHistory } from '../../model/gift-history.model';
import { BaseRepositoryInterface } from '@/common/repository/base.repository';
import { Gift } from '~/gift/domain/model/gift.model';
import { User } from '~/user/domain/model/user.model';

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
  findUserByGiftHistoryId<T extends FindUnique>(args: T): Promise<User | null>;
  findGiftByGiftHistoryId<T extends FindUnique>(args: T): Promise<Gift | null>;
}
