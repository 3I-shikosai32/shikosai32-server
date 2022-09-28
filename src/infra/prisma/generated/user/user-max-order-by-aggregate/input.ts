import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/sort-order/enum';

@InputType()
export class UserMaxOrderByAggregateInput {

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
    participateGame?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pullableGachaTimes?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
}
