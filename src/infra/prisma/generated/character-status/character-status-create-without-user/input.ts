import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Character } from '../../prisma/character/enum';
import { Int } from '@nestjs/graphql';
import { ItemCreateNestedManyWithoutCharacterStatusesInput } from '../../item/item-create-nested-many-without-character-statuses/input';
import { ItemCompletedHistoryNullableCreateEnvelopeInput } from '../../prisma/item-completed-history-nullable-create-envelope/input';

@InputType()
export class CharacterStatusCreateWithoutUserInput {

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

    @Field(() => ItemCreateNestedManyWithoutCharacterStatusesInput, {nullable:true})
    items?: ItemCreateNestedManyWithoutCharacterStatusesInput;

    @Field(() => [String], {nullable:true})
    itemIds?: Array<string>;

    @Field(() => ItemCompletedHistoryNullableCreateEnvelopeInput, {nullable:true})
    itemCompletedHistory?: ItemCompletedHistoryNullableCreateEnvelopeInput;
}
