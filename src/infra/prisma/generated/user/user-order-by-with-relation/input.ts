import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/sort-order/enum';
import { ItemOrderByRelationAggregateInput } from '../../item/item-order-by-relation-aggregate/input';
import { GiftHistoryOrderByRelationAggregateInput } from '../../gift-history/gift-history-order-by-relation-aggregate/input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    totalPointDay1?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    totalPointDay2?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    consumablePoint?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    character?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    iconUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    avatarUrl?: keyof typeof SortOrder;

    @Field(() => ItemOrderByRelationAggregateInput, {nullable:true})
    items?: ItemOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    itemIds?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    participateGame?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pullableGachaTimes?: keyof typeof SortOrder;

    @Field(() => GiftHistoryOrderByRelationAggregateInput, {nullable:true})
    giftHistories?: GiftHistoryOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
}
