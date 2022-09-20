import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Character } from '../character/enum';
import { NestedIntFilter } from '../nested-int-filter/input';
import { NestedEnumCharacterFilter } from '../nested-enum-character-filter/input';

@InputType()
export class NestedEnumCharacterWithAggregatesFilter {

    @Field(() => Character, {nullable:true})
    equals?: keyof typeof Character;

    @Field(() => [Character], {nullable:true})
    in?: Array<keyof typeof Character>;

    @Field(() => [Character], {nullable:true})
    notIn?: Array<keyof typeof Character>;

    @Field(() => NestedEnumCharacterWithAggregatesFilter, {nullable:true})
    not?: NestedEnumCharacterWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumCharacterFilter, {nullable:true})
    _min?: NestedEnumCharacterFilter;

    @Field(() => NestedEnumCharacterFilter, {nullable:true})
    _max?: NestedEnumCharacterFilter;
}
