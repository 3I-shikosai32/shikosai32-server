import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Character } from '../../prisma/character/enum';
import { Int } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutCharacterStatusesNestedInput } from '../../user/user-update-one-required-without-character-statuses-nested/input';
import { ItemCompletedHistoryNullableUpdateEnvelopeInput } from '../../prisma/item-completed-history-nullable-update-envelope/input';

@InputType()
export class CharacterStatusUpdateWithoutItemsInput {

    @Field(() => Character, {nullable:true})
    character?: keyof typeof Character;

    @Field(() => String, {nullable:true})
    iconUrl?: string;

    @Field(() => String, {nullable:true})
    avatarUrl?: string;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @Field(() => Int, {nullable:true})
    characterPointDay1?: number;

    @Field(() => Int, {nullable:true})
    characterPointDay2?: number;

    @Field(() => UserUpdateOneRequiredWithoutCharacterStatusesNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutCharacterStatusesNestedInput;

    @Field(() => [String], {nullable:true})
    itemIds?: Array<string>;

    @Field(() => ItemCompletedHistoryNullableUpdateEnvelopeInput, {nullable:true})
    itemCompletedHistory?: ItemCompletedHistoryNullableUpdateEnvelopeInput;
}
