import { Prisma } from '@prisma/client';
import { CharacterStatus } from '../../model/character-status.model';
import { BaseRepositoryInterface } from '@/common/base/repository/base.repository';
import { User } from '~/user/domain/model/user.model';

export type FindUnique = {
  where: Prisma.CharacterStatusWhereUniqueInput;
};
export type FindMany = {
  where?: Prisma.CharacterStatusWhereInput;
  skip?: number;
  take?: number;
  cursor?: Prisma.CharacterStatusWhereUniqueInput;
  orderBy?: Prisma.CharacterStatusOrderByWithRelationInput[];
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
  findManyWithUser(args: FindMany): Promise<[CharacterStatus, User][]>;
}
