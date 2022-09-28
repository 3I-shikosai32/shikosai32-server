import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/sort-order/enum';
import { CharacterStatusCountOrderByAggregateInput } from '../character-status-count-order-by-aggregate/input';
import { CharacterStatusAvgOrderByAggregateInput } from '../character-status-avg-order-by-aggregate/input';
import { CharacterStatusMaxOrderByAggregateInput } from '../character-status-max-order-by-aggregate/input';
import { CharacterStatusMinOrderByAggregateInput } from '../character-status-min-order-by-aggregate/input';
import { CharacterStatusSumOrderByAggregateInput } from '../character-status-sum-order-by-aggregate/input';

@InputType()
export class CharacterStatusOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    character?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    iconUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    avatarUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    characterPointDay1?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    characterPointDay2?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    itemIds?: keyof typeof SortOrder;

    @Field(() => CharacterStatusCountOrderByAggregateInput, {nullable:true})
    _count?: CharacterStatusCountOrderByAggregateInput;

    @Field(() => CharacterStatusAvgOrderByAggregateInput, {nullable:true})
    _avg?: CharacterStatusAvgOrderByAggregateInput;

    @Field(() => CharacterStatusMaxOrderByAggregateInput, {nullable:true})
    _max?: CharacterStatusMaxOrderByAggregateInput;

    @Field(() => CharacterStatusMinOrderByAggregateInput, {nullable:true})
    _min?: CharacterStatusMinOrderByAggregateInput;

    @Field(() => CharacterStatusSumOrderByAggregateInput, {nullable:true})
    _sum?: CharacterStatusSumOrderByAggregateInput;
}
