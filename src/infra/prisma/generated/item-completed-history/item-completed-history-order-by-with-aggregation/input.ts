import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/sort-order/enum';
import { ItemCompletedHistoryCountOrderByAggregateInput } from '../item-completed-history-count-order-by-aggregate/input';
import { ItemCompletedHistoryMaxOrderByAggregateInput } from '../item-completed-history-max-order-by-aggregate/input';
import { ItemCompletedHistoryMinOrderByAggregateInput } from '../item-completed-history-min-order-by-aggregate/input';

@InputType()
export class ItemCompletedHistoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isDelivered?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    characterStatusId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deliveredAt?: keyof typeof SortOrder;

    @Field(() => ItemCompletedHistoryCountOrderByAggregateInput, {nullable:true})
    _count?: ItemCompletedHistoryCountOrderByAggregateInput;

    @Field(() => ItemCompletedHistoryMaxOrderByAggregateInput, {nullable:true})
    _max?: ItemCompletedHistoryMaxOrderByAggregateInput;

    @Field(() => ItemCompletedHistoryMinOrderByAggregateInput, {nullable:true})
    _min?: ItemCompletedHistoryMinOrderByAggregateInput;
}
