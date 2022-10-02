import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterStatusWhereUniqueInput } from '../character-status-where-unique/input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueCharacterStatusArgs {

    @Field(() => CharacterStatusWhereUniqueInput, {nullable:false})
    @Type(() => CharacterStatusWhereUniqueInput)
    where!: CharacterStatusWhereUniqueInput;
}
