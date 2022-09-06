/* eslint-disable no-use-before-define */
import { InputType, Field } from '@nestjs/graphql';
import GiftHistoryListRelationFilter from '@/components/gift_history/dto/input/listRelationFilter';
import { DateTimeFilter } from '@/libs/prisma/generated/prisma/date-time-filter/input';
import { EnumGiftNameFilter } from '@/libs/prisma/generated/prisma/enum-gift-name-filter/input';
import { IntFilter } from '@/libs/prisma/generated/prisma/int-filter/input';
import { StringFilter } from '@/libs/prisma/generated/prisma/string-filter/input';

@InputType()
export default class GiftWhereInput {
  @Field(() => [GiftWhereInput], { nullable: true })
  AND?: GiftWhereInput[];

  @Field(() => [GiftWhereInput], { nullable: true })
  OR?: GiftWhereInput[];

  @Field(() => [GiftWhereInput], { nullable: true })
  NOT?: GiftWhereInput[];

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => EnumGiftNameFilter, { nullable: true })
  name?: EnumGiftNameFilter;

  @Field(() => StringFilter, { nullable: true })
  iconUrl?: StringFilter;

  @Field(() => IntFilter, { nullable: true })
  price?: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  remaining?: IntFilter;

  @Field(() => GiftHistoryListRelationFilter, { nullable: true })
  giftHistories?: GiftHistoryListRelationFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;
}
