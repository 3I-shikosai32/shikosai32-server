import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterStatusWhereInput } from '../character-status-where/input';
import { Type } from 'class-transformer';
import { CharacterStatusOrderByWithAggregationInput } from '../character-status-order-by-with-aggregation/input';
import { CharacterStatusScalarFieldEnum } from '../character-status-scalar-field/enum';
import { CharacterStatusScalarWhereWithAggregatesInput } from '../character-status-scalar-where-with-aggregates/input';
import { Int } from '@nestjs/graphql';
import { CharacterStatusCountAggregateInput } from '../character-status-count-aggregate/input';
import { CharacterStatusAvgAggregateInput } from '../character-status-avg-aggregate/input';
import { CharacterStatusSumAggregateInput } from '../character-status-sum-aggregate/input';
import { CharacterStatusMinAggregateInput } from '../character-status-min-aggregate/input';
import { CharacterStatusMaxAggregateInput } from '../character-status-max-aggregate/input';

@ArgsType()
export class CharacterStatusGroupByArgs {

    @Field(() => CharacterStatusWhereInput, {nullable:true})
    @Type(() => CharacterStatusWhereInput)
    where?: CharacterStatusWhereInput;

    @Field(() => [CharacterStatusOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CharacterStatusOrderByWithAggregationInput>;

    @Field(() => [CharacterStatusScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CharacterStatusScalarFieldEnum>;

    @Field(() => CharacterStatusScalarWhereWithAggregatesInput, {nullable:true})
    having?: CharacterStatusScalarWhereWithAggregatesInput;

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
