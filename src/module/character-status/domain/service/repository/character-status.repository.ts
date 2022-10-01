import { Prisma } from '@prisma/client';
import { CharacterStatus } from '../../model/character-status.model';
import { BaseRepositoryInterface } from '@/common/base/repository/base.repository';
import { StrictPropertyCheck } from '@/common/type/strict-property-check.type';
import { Item } from '~/item/domain/model/item.model';
import { User } from '~/user/domain/model/user.model';

export type FindUnique = {
  where: Prisma.CharacterStatusWhereUniqueInput;
};
export type FindMany = {
  where?: Prisma.CharacterStatusWhereInput;
  skip?: number;
  take?: number;
  cursor?: Prisma.CharacterStatusWhereUniqueInput;
  orderBy?: Prisma.CharacterStatusOrderByWithAggregationInput[];
  distinct?: Prisma.CharacterStatusScalarFieldEnum[];
};
export type Create = {
  data: Prisma.CharacterStatusCreateInput;
};
export type Update = {
  where: Prisma.CharacterStatusWhereUniqueInput;
  data: Prisma.CharacterStatusUpdateInput;
};
export type Delete = {
  where: Prisma.CharacterStatusWhereUniqueInput;
};

export interface CharacterStatusRepositoryInterface extends BaseRepositoryInterface<CharacterStatus, FindUnique, FindMany, Create, Update, Delete> {
  findActiveByUserId(userId: string): Promise<CharacterStatus | null>;
  findUniqueWithUserAndItems<T extends FindUnique>(args: StrictPropertyCheck<T, FindUnique>): Promise<[CharacterStatus, User, Item[]] | null>;
}
