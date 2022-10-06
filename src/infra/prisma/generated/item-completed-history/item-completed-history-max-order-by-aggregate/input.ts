import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/sort-order/enum';

@InputType()
export class ItemCompletedHistoryMaxOrderByAggregateInput {

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
}
