/* eslint-disable no-use-before-define */
import { Field, InputType } from '@nestjs/graphql';
import { BoolFilter } from '@/infra/prisma/generated/prisma/bool-filter/input';
import { DateTimeFilter } from '@/infra/prisma/generated/prisma/date-time-filter/input';
import { StringFilter } from '@/infra/prisma/generated/prisma/string-filter/input';
import { CharacterStatusRelationFilter } from '~/character-status/controller/dto/input/character-status-relation-filter.input';

@InputType()
export class ItemCompletedHistoryWhereInput {
  @Field(() => [ItemCompletedHistoryWhereInput], { nullable: true })
  AND?: ItemCompletedHistoryWhereInput[];

  @Field(() => [ItemCompletedHistoryWhereInput], { nullable: true })
  OR?: ItemCompletedHistoryWhereInput[];

  @Field(() => [ItemCompletedHistoryWhereInput], { nullable: true })
  NOT?: ItemCompletedHistoryWhereInput[];

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => BoolFilter, { nullable: true })
  isDelivered?: BoolFilter;

  @Field(() => CharacterStatusRelationFilter, { nullable: true })
  characterStatus?: CharacterStatusRelationFilter;

  @Field(() => StringFilter, { nullable: true })
  characterStatusId?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;
}
