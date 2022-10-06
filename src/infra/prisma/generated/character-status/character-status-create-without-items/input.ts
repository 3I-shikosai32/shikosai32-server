import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Character } from '../../prisma/character/enum';
import { Int } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutCharacterStatusesInput } from '../../user/user-create-nested-one-without-character-statuses/input';
import { ItemCompletedHistoryCreateNestedManyWithoutCharacterStatusInput } from '../../item-completed-history/item-completed-history-create-nested-many-without-character-status/input';

@InputType()
export class CharacterStatusCreateWithoutItemsInput {

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

    @Field(() => UserCreateNestedOneWithoutCharacterStatusesInput, {nullable:false})
    user!: UserCreateNestedOneWithoutCharacterStatusesInput;

    @Field(() => [String], {nullable:true})
    itemIds?: Array<string>;

    @Field(() => ItemCompletedHistoryCreateNestedManyWithoutCharacterStatusInput, {nullable:true})
    ItemCompletedHistories?: ItemCompletedHistoryCreateNestedManyWithoutCharacterStatusInput;
}
