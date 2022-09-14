import { Prisma } from '@prisma/client';
import { GiftInterface } from '../model/gift.model';
import { BaseRepositoryInterface } from '@/common/repository/base.repository';

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

export type GiftRepositoryInterface = BaseRepositoryInterface<GiftInterface, FindUnique, FindMany, Create, Update, Delete>;
