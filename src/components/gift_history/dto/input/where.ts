/* eslint-disable no-use-before-define */
import { InputType, Field } from '@nestjs/graphql';
import NestedGift from '@/components/gift/dto/object/nested';
import UserRelationFilter from '@/components/user/dto/input/relationFilter';
import { BoolFilter } from '@/libs/prisma/generated/prisma/bool-filter/input';
import { DateTimeFilter } from '@/libs/prisma/generated/prisma/date-time-filter/input';
import { StringFilter } from '@/libs/prisma/generated/prisma/string-filter/input';

@InputType()
export default class GiftHistoryWhereInput {
  @Field(() => [GiftHistoryWhereInput], { nullable: true })
  AND?: GiftHistoryWhereInput[];

  @Field(() => [GiftHistoryWhereInput], { nullable: true })
  OR?: GiftHistoryWhereInput[];

  @Field(() => [GiftHistoryWhereInput], { nullable: true })
  NOT?: GiftHistoryWhereInput[];

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => BoolFilter, { nullable: false })
  isDelivered?: BoolFilter;

  @Field(() => UserRelationFilter, { nullable: false })
  user?: UserRelationFilter;

  @Field(() => StringFilter, { nullable: false })
  userId?: StringFilter;

  @Field(() => NestedGift, { nullable: false })
  exchangedGift?: NestedGift;

  @Field(() => StringFilter, { nullable: false })
  giftId?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;
}
