/* eslint-disable no-use-before-define */
import { Field, InputType } from '@nestjs/graphql';
import { EnumCharacterFilter } from '@/infra/prisma/generated/prisma/enum-character-filter/input';
import { IntFilter } from '@/infra/prisma/generated/prisma/int-filter/input';
import { StringFilter } from '@/infra/prisma/generated/prisma/string-filter/input';
import { StringNullableListFilter } from '@/infra/prisma/generated/prisma/string-nullable-list-filter/input';
import { UserListRelationFilter } from '@/module/user/controller/dto/input/user-list-relation-filter.input';

@InputType()
export class ItemWhereInput {
  @Field(() => [ItemWhereInput], { nullable: true })
  AND?: ItemWhereInput[];

  @Field(() => [ItemWhereInput], { nullable: true })
  OR?: ItemWhereInput[];

  @Field(() => [ItemWhereInput], { nullable: true })
  NOT?: ItemWhereInput[];

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  iconUrl?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  layerUrl?: StringFilter;

  @Field(() => EnumCharacterFilter, { nullable: true })
  character?: EnumCharacterFilter;

  @Field(() => IntFilter, { nullable: true })
  layer?: IntFilter;

  @Field(() => UserListRelationFilter, { nullable: true })
  users?: UserListRelationFilter;

  @Field(() => StringNullableListFilter, { nullable: true })
  userIds?: StringNullableListFilter;
}
