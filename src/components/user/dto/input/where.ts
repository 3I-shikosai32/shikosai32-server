/* eslint-disable no-use-before-define */
import { InputType, Field } from '@nestjs/graphql';
import GiftHistoryListRelationFilter from '@/components/gift_history/dto/input/listRelationFilter';
import ItemListRelationFilter from '@/components/item/dto/input/listRelationFilter';
import { DateTimeFilter } from '@/libs/prisma/generated/prisma/date-time-filter/input';
import { EnumCharacterFilter } from '@/libs/prisma/generated/prisma/enum-character-filter/input';
import { EnumGameFilter } from '@/libs/prisma/generated/prisma/enum-game-filter/input';
import { EnumRoleFilter } from '@/libs/prisma/generated/prisma/enum-role-filter/input';
import { IntFilter } from '@/libs/prisma/generated/prisma/int-filter/input';
import { StringFilter } from '@/libs/prisma/generated/prisma/string-filter/input';
import { StringNullableListFilter } from '@/libs/prisma/generated/prisma/string-nullable-list-filter/input';

@InputType()
export default class UserWhereInput {
  @Field(() => [UserWhereInput], { nullable: true })
  AND?: UserWhereInput[];

  @Field(() => [UserWhereInput], { nullable: true })
  OR?: UserWhereInput[];

  @Field(() => [UserWhereInput], { nullable: true })
  NOT?: UserWhereInput[];

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  email?: StringFilter;

  @Field(() => EnumRoleFilter, { nullable: true })
  role?: EnumRoleFilter;

  @Field(() => IntFilter, { nullable: true })
  totalPointDay1?: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  totalPointDay2?: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  consumablePoint?: IntFilter;

  @Field(() => EnumCharacterFilter, { nullable: true })
  character?: EnumCharacterFilter;

  @Field(() => StringFilter, { nullable: true })
  iconUrl?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  avatarUrl?: StringFilter;

  @Field(() => ItemListRelationFilter, { nullable: true })
  items?: ItemListRelationFilter;

  @Field(() => StringNullableListFilter, { nullable: true })
  itemIds?: StringNullableListFilter;

  @Field(() => EnumGameFilter, { nullable: true })
  participateGame?: EnumGameFilter;

  @Field(() => IntFilter, { nullable: true })
  pullableGachaTimes?: IntFilter;

  @Field(() => GiftHistoryListRelationFilter, { nullable: true })
  giftHistories?: GiftHistoryListRelationFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;
}
