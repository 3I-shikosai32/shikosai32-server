/* eslint-disable no-use-before-define */
import { Field, InputType } from '@nestjs/graphql';
import { EnumCharacterFilter } from '@/infra/prisma/generated/prisma/enum-character-filter/input';
import { IntFilter } from '@/infra/prisma/generated/prisma/int-filter/input';
import { StringFilter } from '@/infra/prisma/generated/prisma/string-filter/input';
import { StringNullableListFilter } from '@/infra/prisma/generated/prisma/string-nullable-list-filter/input';
import { ItemListRelationFilter } from '~/item/controller/dto/input/item-list-relation-filter.input';
import { UserRelationFilter } from '~/user/controller/dto/input/user-relation-filter.input';

@InputType()
export class CharacterStatusWhereInput {
  @Field(() => [CharacterStatusWhereInput], { nullable: true })
  AND?: CharacterStatusWhereInput[];

  @Field(() => [CharacterStatusWhereInput], { nullable: true })
  OR?: CharacterStatusWhereInput[];

  @Field(() => [CharacterStatusWhereInput], { nullable: true })
  NOT?: CharacterStatusWhereInput[];

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => EnumCharacterFilter, { nullable: true })
  character?: EnumCharacterFilter;

  @Field(() => StringFilter, { nullable: true })
  iconUrl?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  avatarUrl?: StringFilter;

  @Field(() => IntFilter, { nullable: true })
  characterPointDay1?: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  characterPointDay2?: IntFilter;

  @Field(() => UserRelationFilter, { nullable: true })
  user?: UserRelationFilter;

  @Field(() => StringFilter, { nullable: true })
  userId?: StringFilter;

  @Field(() => ItemListRelationFilter, { nullable: true })
  items?: ItemListRelationFilter;

  @Field(() => StringNullableListFilter, { nullable: true })
  itemIds?: StringNullableListFilter;
}
