import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemWhereInput } from '../item-where/input';
import { Type } from 'class-transformer';
import { ItemOrderByWithAggregationInput } from '../item-order-by-with-aggregation/input';
import { ItemScalarFieldEnum } from '../item-scalar-field/enum';
import { ItemScalarWhereWithAggregatesInput } from '../item-scalar-where-with-aggregates/input';
import { Int } from '@nestjs/graphql';
import { ItemCountAggregateInput } from '../item-count-aggregate/input';
import { ItemAvgAggregateInput } from '../item-avg-aggregate/input';
import { ItemSumAggregateInput } from '../item-sum-aggregate/input';
import { ItemMinAggregateInput } from '../item-min-aggregate/input';
import { ItemMaxAggregateInput } from '../item-max-aggregate/input';

@ArgsType()
export class ItemGroupByArgs {

    @Field(() => ItemWhereInput, {nullable:true})
    @Type(() => ItemWhereInput)
    where?: ItemWhereInput;

    @Field(() => [ItemOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ItemOrderByWithAggregationInput>;

    @Field(() => [ItemScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ItemScalarFieldEnum>;

    @Field(() => ItemScalarWhereWithAggregatesInput, {nullable:true})
    having?: ItemScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ItemCountAggregateInput, {nullable:true})
    _count?: ItemCountAggregateInput;

    @Field(() => ItemAvgAggregateInput, {nullable:true})
    _avg?: ItemAvgAggregateInput;

    @Field(() => ItemSumAggregateInput, {nullable:true})
    _sum?: ItemSumAggregateInput;

    @Field(() => ItemMinAggregateInput, {nullable:true})
    _min?: ItemMinAggregateInput;

    @Field(() => ItemMaxAggregateInput, {nullable:true})
    _max?: ItemMaxAggregateInput;
}
