import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterStatusCreateNestedOneWithoutItemCompletedHistoriesInput } from '../../character-status/character-status-create-nested-one-without-item-completed-histories/input';

@InputType()
export class ItemCompletedHistoryCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Boolean, {nullable:true})
    isDelivered?: boolean;

    @Field(() => CharacterStatusCreateNestedOneWithoutItemCompletedHistoriesInput, {nullable:false})
    characterStatus!: CharacterStatusCreateNestedOneWithoutItemCompletedHistoriesInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deliveredAt?: Date | string;
}
