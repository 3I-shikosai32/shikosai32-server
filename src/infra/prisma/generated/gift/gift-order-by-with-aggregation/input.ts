import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/sort-order/enum';
import { GiftCountOrderByAggregateInput } from '../gift-count-order-by-aggregate/input';
import { GiftAvgOrderByAggregateInput } from '../gift-avg-order-by-aggregate/input';
import { GiftMaxOrderByAggregateInput } from '../gift-max-order-by-aggregate/input';
import { GiftMinOrderByAggregateInput } from '../gift-min-order-by-aggregate/input';
import { GiftSumOrderByAggregateInput } from '../gift-sum-order-by-aggregate/input';

@InputType()
export class GiftOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    iconUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    remaining?: keyof typeof SortOrder;

    @Field(() => GiftCountOrderByAggregateInput, {nullable:true})
    _count?: GiftCountOrderByAggregateInput;

    @Field(() => GiftAvgOrderByAggregateInput, {nullable:true})
    _avg?: GiftAvgOrderByAggregateInput;

    @Field(() => GiftMaxOrderByAggregateInput, {nullable:true})
    _max?: GiftMaxOrderByAggregateInput;

    @Field(() => GiftMinOrderByAggregateInput, {nullable:true})
    _min?: GiftMinOrderByAggregateInput;

    @Field(() => GiftSumOrderByAggregateInput, {nullable:true})
    _sum?: GiftSumOrderByAggregateInput;
}
