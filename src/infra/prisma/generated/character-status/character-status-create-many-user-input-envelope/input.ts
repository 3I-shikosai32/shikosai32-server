import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterStatusCreateManyUserInput } from '../character-status-create-many-user/input';
import { Type } from 'class-transformer';

@InputType()
export class CharacterStatusCreateManyUserInputEnvelope {

    @Field(() => [CharacterStatusCreateManyUserInput], {nullable:false})
    @Type(() => CharacterStatusCreateManyUserInput)
    data!: Array<CharacterStatusCreateManyUserInput>;
}
