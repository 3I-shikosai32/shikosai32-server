import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterStatusWhereInput } from '../character-status-where/input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyCharacterStatusArgs {

    @Field(() => CharacterStatusWhereInput, {nullable:true})
    @Type(() => CharacterStatusWhereInput)
    where?: CharacterStatusWhereInput;
}
