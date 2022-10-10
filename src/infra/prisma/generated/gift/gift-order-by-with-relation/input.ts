import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/sort-order/enum';
import { GiftHistoryOrderByRelationAggregateInput } from '../../gift-history/gift-history-order-by-relation-aggregate/input';

@InputType()
export class GiftOrderByWithRelationInput {

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

    @Field(() => GiftHistoryOrderByRelationAggregateInput, {nullable:true})
    giftHistories?: GiftHistoryOrderByRelationAggregateInput;
}
