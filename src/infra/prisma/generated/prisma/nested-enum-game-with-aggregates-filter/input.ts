import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Game } from '../game/enum';
import { NestedIntFilter } from '../nested-int-filter/input';
import { NestedEnumGameFilter } from '../nested-enum-game-filter/input';

@InputType()
export class NestedEnumGameWithAggregatesFilter {

    @Field(() => Game, {nullable:true})
    equals?: keyof typeof Game;

    @Field(() => [Game], {nullable:true})
    in?: Array<keyof typeof Game>;

    @Field(() => [Game], {nullable:true})
    notIn?: Array<keyof typeof Game>;

    @Field(() => NestedEnumGameWithAggregatesFilter, {nullable:true})
    not?: NestedEnumGameWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumGameFilter, {nullable:true})
    _min?: NestedEnumGameFilter;

    @Field(() => NestedEnumGameFilter, {nullable:true})
    _max?: NestedEnumGameFilter;
}
