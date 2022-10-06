import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemCompletedHistoryWhereInput } from '../item-completed-history-where/input';
import { Type } from 'class-transformer';
import { ItemCompletedHistoryOrderByWithRelationInput } from '../item-completed-history-order-by-with-relation/input';
import { ItemCompletedHistoryWhereUniqueInput } from '../item-completed-history-where-unique/input';
import { Int } from '@nestjs/graphql';
import { ItemCompletedHistoryCountAggregateInput } from '../item-completed-history-count-aggregate/input';
import { ItemCompletedHistoryMinAggregateInput } from '../item-completed-history-min-aggregate/input';
import { ItemCompletedHistoryMaxAggregateInput } from '../item-completed-history-max-aggregate/input';

@ArgsType()
export class ItemCompletedHistoryAggregateArgs {

    @Field(() => ItemCompletedHistoryWhereInput, {nullable:true})
    @Type(() => ItemCompletedHistoryWhereInput)
    where?: ItemCompletedHistoryWhereInput;

    @Field(() => [ItemCompletedHistoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ItemCompletedHistoryOrderByWithRelationInput>;

    @Field(() => ItemCompletedHistoryWhereUniqueInput, {nullable:true})
    cursor?: ItemCompletedHistoryWhereUniqueInput;

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
