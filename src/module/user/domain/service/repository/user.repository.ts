import { Prisma } from '@prisma/client';
import { User } from '../../model/user.model';
import { BaseRepositoryInterface } from '@/common/repository/base.repository';

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

export type UserRepositoryInterface = BaseRepositoryInterface<User, FindUnique, FindMany, Create, Update, Delete>;
