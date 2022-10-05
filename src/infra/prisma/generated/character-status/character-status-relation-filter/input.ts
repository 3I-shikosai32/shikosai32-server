import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterStatusWhereInput } from '../character-status-where/input';

@InputType()
export class CharacterStatusRelationFilter {

    @Field(() => CharacterStatusWhereInput, {nullable:true})
    is?: CharacterStatusWhereInput;

    @Field(() => CharacterStatusWhereInput, {nullable:true})
    isNot?: CharacterStatusWhereInput;
}
