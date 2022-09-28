import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterStatusWhereInput } from '../character-status-where/input';

@InputType()
export class CharacterStatusListRelationFilter {

    @Field(() => CharacterStatusWhereInput, {nullable:true})
    every?: CharacterStatusWhereInput;

    @Field(() => CharacterStatusWhereInput, {nullable:true})
    some?: CharacterStatusWhereInput;

    @Field(() => CharacterStatusWhereInput, {nullable:true})
    none?: CharacterStatusWhereInput;
}
