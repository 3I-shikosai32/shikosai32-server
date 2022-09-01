import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/sort-order/enum';

@InputType()
export class UserAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    totalPointDay1?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    totalPointDay2?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    consumablePoint?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pullableGachaTimes?: keyof typeof SortOrder;
}
