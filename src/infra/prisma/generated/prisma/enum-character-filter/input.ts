import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Character } from '../character/enum';
import { NestedEnumCharacterFilter } from '../nested-enum-character-filter/input';

@InputType()
export class EnumCharacterFilter {

    @Field(() => Character, {nullable:true})
    equals?: keyof typeof Character;

    @Field(() => [Character], {nullable:true})
    in?: Array<keyof typeof Character>;

    @Field(() => [Character], {nullable:true})
    notIn?: Array<keyof typeof Character>;

    @Field(() => NestedEnumCharacterFilter, {nullable:true})
    not?: NestedEnumCharacterFilter;
}
