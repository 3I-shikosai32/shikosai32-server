import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/sort-order/enum';
import { CharacterStatusOrderByWithRelationInput } from '../../character-status/character-status-order-by-with-relation/input';

@InputType()
export class ItemCompletedHistoryOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isDelivered?: keyof typeof SortOrder;

    @Field(() => CharacterStatusOrderByWithRelationInput, {nullable:true})
    characterStatus?: CharacterStatusOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    characterStatusId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deliveredAt?: keyof typeof SortOrder;
}
