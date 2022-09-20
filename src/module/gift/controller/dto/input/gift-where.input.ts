/* eslint-disable no-use-before-define */
import { Field, InputType } from '@nestjs/graphql';
import { DateTimeFilter } from '@/infra/prisma/generated/prisma/date-time-filter/input';
import { IntFilter } from '@/infra/prisma/generated/prisma/int-filter/input';
import { StringFilter } from '@/infra/prisma/generated/prisma/string-filter/input';
import { GiftHistoryListRelationFilter } from '~/gift-history/controller/dto/input/gift-history-list-relation-filter.input';

@InputType()
export class GiftWhereInput {
  @Field(() => [GiftWhereInput], { nullable: true })
  AND?: GiftWhereInput[];

  @Field(() => [GiftWhereInput], { nullable: true })
  OR?: GiftWhereInput[];

  @Field(() => [GiftWhereInput], { nullable: true })
  NOT?: GiftWhereInput[];

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

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
