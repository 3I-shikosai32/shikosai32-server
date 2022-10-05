import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/sort-order/enum';
import { UserOrderByWithRelationInput } from '../../user/user-order-by-with-relation/input';
import { ItemOrderByRelationAggregateInput } from '../../item/item-order-by-relation-aggregate/input';
import { ItemCompletedHistoryOrderByRelationAggregateInput } from '../../item-completed-history/item-completed-history-order-by-relation-aggregate/input';

@InputType()
export class CharacterStatusOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    character?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    iconUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    avatarUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isActive?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    characterPointDay1?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    characterPointDay2?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => ItemOrderByRelationAggregateInput, {nullable:true})
    items?: ItemOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    itemIds?: keyof typeof SortOrder;

    @Field(() => ItemCompletedHistoryOrderByRelationAggregateInput, {nullable:true})
    ItemCompletedHistories?: ItemCompletedHistoryOrderByRelationAggregateInput;
}
