import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/sort-order/enum';

@InputType()
export class CharacterStatusAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    characterPointDay1?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    characterPointDay2?: keyof typeof SortOrder;
}
