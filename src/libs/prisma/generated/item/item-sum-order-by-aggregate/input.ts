import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/sort-order/enum';

@InputType()
export class ItemSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    layer?: keyof typeof SortOrder;
}
