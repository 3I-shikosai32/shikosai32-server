import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/sort-order/enum';
import { UserOrderByRelationAggregateInput } from '../../user/user-order-by-relation-aggregate/input';

@InputType()
export class ItemOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    url?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    character?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    layer?: keyof typeof SortOrder;

    @Field(() => UserOrderByRelationAggregateInput, {nullable:true})
    users?: UserOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    userIds?: keyof typeof SortOrder;
}
