import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GiftHistoryWhereInput } from '../gift-history-where/input';
import { Type } from 'class-transformer';
import { GiftHistoryOrderByWithAggregationInput } from '../gift-history-order-by-with-aggregation/input';
import { GiftHistoryScalarFieldEnum } from '../gift-history-scalar-field/enum';
import { GiftHistoryScalarWhereWithAggregatesInput } from '../gift-history-scalar-where-with-aggregates/input';
import { Int } from '@nestjs/graphql';
import { GiftHistoryCountAggregateInput } from '../gift-history-count-aggregate/input';
import { GiftHistoryMinAggregateInput } from '../gift-history-min-aggregate/input';
import { GiftHistoryMaxAggregateInput } from '../gift-history-max-aggregate/input';

@ArgsType()
export class GiftHistoryGroupByArgs {

    @Field(() => GiftHistoryWhereInput, {nullable:true})
    @Type(() => GiftHistoryWhereInput)
    where?: GiftHistoryWhereInput;

    @Field(() => [GiftHistoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<GiftHistoryOrderByWithAggregationInput>;

    @Field(() => [GiftHistoryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof GiftHistoryScalarFieldEnum>;

    @Field(() => GiftHistoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: GiftHistoryScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => GiftHistoryCountAggregateInput, {nullable:true})
    _count?: GiftHistoryCountAggregateInput;

    @Field(() => GiftHistoryMinAggregateInput, {nullable:true})
    _min?: GiftHistoryMinAggregateInput;

    @Field(() => GiftHistoryMaxAggregateInput, {nullable:true})
    _max?: GiftHistoryMaxAggregateInput;
}
