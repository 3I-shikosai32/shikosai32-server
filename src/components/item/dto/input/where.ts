/* eslint-disable no-use-before-define */
import { InputType, Field } from '@nestjs/graphql';
import UserListRelationFilter from '@/components/user/dto/input/listRelationFilter';
import { EnumCharacterFilter } from '@/libs/prisma/generated/prisma/enum-character-filter/input';
import { IntFilter } from '@/libs/prisma/generated/prisma/int-filter/input';
import { StringFilter } from '@/libs/prisma/generated/prisma/string-filter/input';
import { StringNullableListFilter } from '@/libs/prisma/generated/prisma/string-nullable-list-filter/input';

@InputType()
export default class ItemWhereInput {
  @Field(() => [ItemWhereInput], { nullable: true })
  AND?: ItemWhereInput[];

  @Field(() => [ItemWhereInput], { nullable: true })
  OR?: ItemWhereInput[];

  @Field(() => [ItemWhereInput], { nullable: true })
  NOT?: ItemWhereInput[];

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  url?: StringFilter;

  @Field(() => EnumCharacterFilter, { nullable: true })
  character?: EnumCharacterFilter;

  @Field(() => IntFilter, { nullable: true })
  layer?: IntFilter;

  @Field(() => UserListRelationFilter, { nullable: true })
  users?: UserListRelationFilter;

  @Field(() => StringNullableListFilter, { nullable: true })
  userIds?: StringNullableListFilter;
}
