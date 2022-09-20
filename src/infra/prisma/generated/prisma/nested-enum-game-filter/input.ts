import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Game } from '../game/enum';

@InputType()
export class NestedEnumGameFilter {

    @Field(() => Game, {nullable:true})
    equals?: keyof typeof Game;

    @Field(() => [Game], {nullable:true})
    in?: Array<keyof typeof Game>;

    @Field(() => [Game], {nullable:true})
    notIn?: Array<keyof typeof Game>;

    @Field(() => NestedEnumGameFilter, {nullable:true})
    not?: NestedEnumGameFilter;
}
