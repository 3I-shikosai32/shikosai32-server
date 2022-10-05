import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Character } from '../../prisma/character/enum';
import { Int } from '@nestjs/graphql';
import { ItemUncheckedCreateNestedManyWithoutCharacterStatusesInput } from '../../item/item-unchecked-create-nested-many-without-character-statuses/input';

@InputType()
export class CharacterStatusUncheckedCreateWithoutItemCompletedHistoriesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Character, {nullable:false})
    character!: keyof typeof Character;

    @Field(() => String, {nullable:false})
    iconUrl!: string;

    @Field(() => String, {nullable:false})
    avatarUrl!: string;

    @Field(() => Boolean, {nullable:false})
    isActive!: boolean;

    @Field(() => Int, {nullable:true})
    characterPointDay1?: number;

    @Field(() => Int, {nullable:true})
    characterPointDay2?: number;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => ItemUncheckedCreateNestedManyWithoutCharacterStatusesInput, {nullable:true})
    items?: ItemUncheckedCreateNestedManyWithoutCharacterStatusesInput;

    @Field(() => [String], {nullable:true})
    itemIds?: Array<string>;
}
