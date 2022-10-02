import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterStatusWhereUniqueInput } from '../character-status-where-unique/input';
import { Type } from 'class-transformer';
import { CharacterStatusCreateWithoutUserInput } from '../character-status-create-without-user/input';

@InputType()
export class CharacterStatusCreateOrConnectWithoutUserInput {

    @Field(() => CharacterStatusWhereUniqueInput, {nullable:false})
    @Type(() => CharacterStatusWhereUniqueInput)
    where!: CharacterStatusWhereUniqueInput;

    @Field(() => CharacterStatusCreateWithoutUserInput, {nullable:false})
    @Type(() => CharacterStatusCreateWithoutUserInput)
    create!: CharacterStatusCreateWithoutUserInput;
}
