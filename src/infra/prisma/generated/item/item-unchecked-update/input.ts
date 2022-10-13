import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Character } from '../../prisma/character/enum';
import { Int } from '@nestjs/graphql';
import { CharacterStatusUncheckedUpdateManyWithoutItemsNestedInput } from '../../character-status/character-status-unchecked-update-many-without-items-nested/input';

@InputType()
export class ItemUncheckedUpdateInput {

    @Field(() => String, {nullable:true})
    iconUrl?: string;

    @Field(() => String, {nullable:true})
    layerUrl?: string;

    @Field(() => Character, {nullable:true})
    character?: keyof typeof Character;

    @Field(() => Int, {nullable:true})
    layer?: number;

    @Field(() => CharacterStatusUncheckedUpdateManyWithoutItemsNestedInput, {nullable:true})
    characterStatuses?: CharacterStatusUncheckedUpdateManyWithoutItemsNestedInput;

    @Field(() => [String], {nullable:true})
    characterStatusIds?: Array<string>;
}
