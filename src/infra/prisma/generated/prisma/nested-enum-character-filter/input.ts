import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Character } from '../character/enum';

@InputType()
export class NestedEnumCharacterFilter {

    @Field(() => Character, {nullable:true})
    equals?: keyof typeof Character;

    @Field(() => [Character], {nullable:true})
    in?: Array<keyof typeof Character>;

    @Field(() => [Character], {nullable:true})
    notIn?: Array<keyof typeof Character>;

    @Field(() => NestedEnumCharacterFilter, {nullable:true})
    not?: NestedEnumCharacterFilter;
}
