import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../../prisma/string-with-aggregates-filter/input';
import { BoolWithAggregatesFilter } from '../../prisma/bool-with-aggregates-filter/input';
import { DateTimeWithAggregatesFilter } from '../../prisma/date-time-with-aggregates-filter/input';
import { DateTimeNullableWithAggregatesFilter } from '../../prisma/date-time-nullable-with-aggregates-filter/input';

@InputType()
export class GiftHistoryScalarWhereWithAggregatesInput {

    @Field(() => [GiftHistoryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<GiftHistoryScalarWhereWithAggregatesInput>;

    @Field(() => [GiftHistoryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<GiftHistoryScalarWhereWithAggregatesInput>;

    @Field(() => [GiftHistoryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<GiftHistoryScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isDelivered?: BoolWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    giftId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    deliveredAt?: DateTimeNullableWithAggregatesFilter;
}
