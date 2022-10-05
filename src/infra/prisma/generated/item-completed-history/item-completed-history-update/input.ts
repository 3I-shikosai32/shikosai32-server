import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterStatusUpdateOneRequiredWithoutItemCompletedHistoriesNestedInput } from '../../character-status/character-status-update-one-required-without-item-completed-histories-nested/input';

@InputType()
export class ItemCompletedHistoryUpdateInput {

    @Field(() => Boolean, {nullable:true})
    isDelivered?: boolean;

    @Field(() => CharacterStatusUpdateOneRequiredWithoutItemCompletedHistoriesNestedInput, {nullable:true})
    characterStatus?: CharacterStatusUpdateOneRequiredWithoutItemCompletedHistoriesNestedInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deliveredAt?: Date | string;
}
