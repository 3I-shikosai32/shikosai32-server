import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/sort-order/enum';
import { CharacterStatusOrderByRelationAggregateInput } from '../../character-status/character-status-order-by-relation-aggregate/input';

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

    @Field(() => CharacterStatusOrderByRelationAggregateInput, {nullable:true})
    characterStatuses?: CharacterStatusOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    characterStatusIds?: keyof typeof SortOrder;
}
