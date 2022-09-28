import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterStatusWhereUniqueInput } from '../character-status-where-unique/input';
import { Type } from 'class-transformer';
import { CharacterStatusUpdateWithoutItemsInput } from '../character-status-update-without-items/input';
import { CharacterStatusCreateWithoutItemsInput } from '../character-status-create-without-items/input';

@InputType()
export class CharacterStatusUpsertWithWhereUniqueWithoutItemsInput {

    @Field(() => CharacterStatusWhereUniqueInput, {nullable:false})
    @Type(() => CharacterStatusWhereUniqueInput)
    where!: CharacterStatusWhereUniqueInput;

    @Field(() => CharacterStatusUpdateWithoutItemsInput, {nullable:false})
    @Type(() => CharacterStatusUpdateWithoutItemsInput)
    update!: CharacterStatusUpdateWithoutItemsInput;

    @Field(() => CharacterStatusCreateWithoutItemsInput, {nullable:false})
    @Type(() => CharacterStatusCreateWithoutItemsInput)
    create!: CharacterStatusCreateWithoutItemsInput;
}
