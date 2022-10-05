import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemCompletedHistoryWhereInput } from '../item-completed-history-where/input';
import { Type } from 'class-transformer';
import { ItemCompletedHistoryOrderByWithAggregationInput } from '../item-completed-history-order-by-with-aggregation/input';
import { ItemCompletedHistoryScalarFieldEnum } from '../item-completed-history-scalar-field/enum';
import { ItemCompletedHistoryScalarWhereWithAggregatesInput } from '../item-completed-history-scalar-where-with-aggregates/input';
import { Int } from '@nestjs/graphql';
import { ItemCompletedHistoryCountAggregateInput } from '../item-completed-history-count-aggregate/input';
import { ItemCompletedHistoryMinAggregateInput } from '../item-completed-history-min-aggregate/input';
import { ItemCompletedHistoryMaxAggregateInput } from '../item-completed-history-max-aggregate/input';

@ArgsType()
export class ItemCompletedHistoryGroupByArgs {

    @Field(() => ItemCompletedHistoryWhereInput, {nullable:true})
    @Type(() => ItemCompletedHistoryWhereInput)
    where?: ItemCompletedHistoryWhereInput;

    @Field(() => [ItemCompletedHistoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ItemCompletedHistoryOrderByWithAggregationInput>;

    @Field(() => [ItemCompletedHistoryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ItemCompletedHistoryScalarFieldEnum>;

    @Field(() => ItemCompletedHistoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: ItemCompletedHistoryScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ItemCompletedHistoryCountAggregateInput, {nullable:true})
    _count?: ItemCompletedHistoryCountAggregateInput;

    @Field(() => ItemCompletedHistoryMinAggregateInput, {nullable:true})
    _min?: ItemCompletedHistoryMinAggregateInput;

    @Field(() => ItemCompletedHistoryMaxAggregateInput, {nullable:true})
    _max?: ItemCompletedHistoryMaxAggregateInput;
}
