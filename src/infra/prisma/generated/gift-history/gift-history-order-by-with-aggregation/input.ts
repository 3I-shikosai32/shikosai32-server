import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/sort-order/enum';
import { GiftHistoryCountOrderByAggregateInput } from '../gift-history-count-order-by-aggregate/input';
import { GiftHistoryMaxOrderByAggregateInput } from '../gift-history-max-order-by-aggregate/input';
import { GiftHistoryMinOrderByAggregateInput } from '../gift-history-min-order-by-aggregate/input';

@InputType()
export class GiftHistoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isDelivered?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    giftId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deliveredAt?: keyof typeof SortOrder;

    @Field(() => GiftHistoryCountOrderByAggregateInput, {nullable:true})
    _count?: GiftHistoryCountOrderByAggregateInput;

    @Field(() => GiftHistoryMaxOrderByAggregateInput, {nullable:true})
    _max?: GiftHistoryMaxOrderByAggregateInput;

    @Field(() => GiftHistoryMinOrderByAggregateInput, {nullable:true})
    _min?: GiftHistoryMinOrderByAggregateInput;
}
