import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterStatusWhereUniqueInput } from '../character-status-where-unique/input';
import { Type } from 'class-transformer';
import { CharacterStatusCreateWithoutItemsInput } from '../character-status-create-without-items/input';

@InputType()
export class CharacterStatusCreateOrConnectWithoutItemsInput {

    @Field(() => CharacterStatusWhereUniqueInput, {nullable:false})
    @Type(() => CharacterStatusWhereUniqueInput)
    where!: CharacterStatusWhereUniqueInput;

    @Field(() => CharacterStatusCreateWithoutItemsInput, {nullable:false})
    @Type(() => CharacterStatusCreateWithoutItemsInput)
    create!: CharacterStatusCreateWithoutItemsInput;
}
