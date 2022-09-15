/* eslint-disable no-use-before-define */
import { Field, InputType } from '@nestjs/graphql';
import { BoolFilter } from '@/infra/prisma/generated/prisma/bool-filter/input';
import { DateTimeFilter } from '@/infra/prisma/generated/prisma/date-time-filter/input';
import { StringFilter } from '@/infra/prisma/generated/prisma/string-filter/input';
import { GiftRelationFilter } from '~/gift/controller/dto/input/gift-relation-filter.input';
import { UserRelationFilter } from '~/user/controller/dto/input/user-relation-filter.input';

@InputType()
export class GiftHistoryWhereInput {
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

  @Field(() => GiftRelationFilter, { nullable: false })
  exchangedGift?: GiftRelationFilter;

  @Field(() => StringFilter, { nullable: false })
  giftId?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;
}
