import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterStatusCreateInput } from '../character-status-create/input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneCharacterStatusArgs {

    @Field(() => CharacterStatusCreateInput, {nullable:false})
    @Type(() => CharacterStatusCreateInput)
    data!: CharacterStatusCreateInput;
}
