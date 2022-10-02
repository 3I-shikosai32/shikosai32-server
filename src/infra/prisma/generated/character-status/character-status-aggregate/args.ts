import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterStatusWhereInput } from '../character-status-where/input';
import { Type } from 'class-transformer';
import { CharacterStatusOrderByWithRelationInput } from '../character-status-order-by-with-relation/input';
import { CharacterStatusWhereUniqueInput } from '../character-status-where-unique/input';
import { Int } from '@nestjs/graphql';
import { CharacterStatusCountAggregateInput } from '../character-status-count-aggregate/input';
import { CharacterStatusAvgAggregateInput } from '../character-status-avg-aggregate/input';
import { CharacterStatusSumAggregateInput } from '../character-status-sum-aggregate/input';
import { CharacterStatusMinAggregateInput } from '../character-status-min-aggregate/input';
import { CharacterStatusMaxAggregateInput } from '../character-status-max-aggregate/input';

@ArgsType()
export class CharacterStatusAggregateArgs {

    @Field(() => CharacterStatusWhereInput, {nullable:true})
    @Type(() => CharacterStatusWhereInput)
    where?: CharacterStatusWhereInput;

    @Field(() => [CharacterStatusOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CharacterStatusOrderByWithRelationInput>;

    @Field(() => CharacterStatusWhereUniqueInput, {nullable:true})
    cursor?: CharacterStatusWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CharacterStatusCountAggregateInput, {nullable:true})
    _count?: CharacterStatusCountAggregateInput;

    @Field(() => CharacterStatusAvgAggregateInput, {nullable:true})
    _avg?: CharacterStatusAvgAggregateInput;

    @Field(() => CharacterStatusSumAggregateInput, {nullable:true})
    _sum?: CharacterStatusSumAggregateInput;

    @Field(() => CharacterStatusMinAggregateInput, {nullable:true})
    _min?: CharacterStatusMinAggregateInput;

    @Field(() => CharacterStatusMaxAggregateInput, {nullable:true})
    _max?: CharacterStatusMaxAggregateInput;
}
