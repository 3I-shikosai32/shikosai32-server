import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Character } from '../../prisma/character/enum';
import { Int } from '@nestjs/graphql';
import { CharacterStatusUpdateManyWithoutItemsNestedInput } from '../../character-status/character-status-update-many-without-items-nested/input';

@InputType()
export class ItemUpdateInput {

    @Field(() => String, {nullable:true})
    url?: string;

    @Field(() => Character, {nullable:true})
    character?: keyof typeof Character;

    @Field(() => Int, {nullable:true})
    layer?: number;

    @Field(() => CharacterStatusUpdateManyWithoutItemsNestedInput, {nullable:true})
    characterStatuses?: CharacterStatusUpdateManyWithoutItemsNestedInput;

    @Field(() => [String], {nullable:true})
    characterStatusIds?: Array<string>;
}
