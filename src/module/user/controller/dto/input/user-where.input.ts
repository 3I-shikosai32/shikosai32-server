/* eslint-disable no-use-before-define */
import { Field, InputType } from '@nestjs/graphql';
import { DateTimeFilter } from '@/infra/prisma/generated/prisma/date-time-filter/input';
import { EnumGameFilter } from '@/infra/prisma/generated/prisma/enum-game-filter/input';
import { EnumRoleFilter } from '@/infra/prisma/generated/prisma/enum-role-filter/input';
import { IntFilter } from '@/infra/prisma/generated/prisma/int-filter/input';
import { StringFilter } from '@/infra/prisma/generated/prisma/string-filter/input';
import { GiftHistoryListRelationFilter } from '~/gift-history/controller/dto/input/gift-history-list-relation-filter.input';

@InputType()
export class UserWhereInput {
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

  @Field(() => EnumGameFilter, { nullable: true })
  participateGame?: EnumGameFilter;

  @Field(() => IntFilter, { nullable: true })
  pullableGachaTimes?: IntFilter;

  @Field(() => GiftHistoryListRelationFilter, { nullable: true })
  giftHistories?: GiftHistoryListRelationFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;
}
