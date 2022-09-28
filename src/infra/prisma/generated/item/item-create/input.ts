import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Character } from '../../prisma/character/enum';
import { Int } from '@nestjs/graphql';
import { CharacterStatusCreateNestedManyWithoutItemsInput } from '../../character-status/character-status-create-nested-many-without-items/input';

@InputType()
export class ItemCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => Character, {nullable:false})
    character!: keyof typeof Character;

    @Field(() => Int, {nullable:false})
    layer!: number;

    @Field(() => CharacterStatusCreateNestedManyWithoutItemsInput, {nullable:true})
    characterStatuses?: CharacterStatusCreateNestedManyWithoutItemsInput;

    @Field(() => [String], {nullable:true})
    characterStatusIds?: Array<string>;
}
