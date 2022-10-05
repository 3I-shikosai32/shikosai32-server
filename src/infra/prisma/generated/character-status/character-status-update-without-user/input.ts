import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Character } from '../../prisma/character/enum';
import { Int } from '@nestjs/graphql';
import { ItemUpdateManyWithoutCharacterStatusesNestedInput } from '../../item/item-update-many-without-character-statuses-nested/input';
import { ItemCompletedHistoryUpdateManyWithoutCharacterStatusNestedInput } from '../../item-completed-history/item-completed-history-update-many-without-character-status-nested/input';

@InputType()
export class CharacterStatusUpdateWithoutUserInput {

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

    @Field(() => ItemUpdateManyWithoutCharacterStatusesNestedInput, {nullable:true})
    items?: ItemUpdateManyWithoutCharacterStatusesNestedInput;

    @Field(() => [String], {nullable:true})
    itemIds?: Array<string>;

    @Field(() => ItemCompletedHistoryUpdateManyWithoutCharacterStatusNestedInput, {nullable:true})
    ItemCompletedHistories?: ItemCompletedHistoryUpdateManyWithoutCharacterStatusNestedInput;
}
