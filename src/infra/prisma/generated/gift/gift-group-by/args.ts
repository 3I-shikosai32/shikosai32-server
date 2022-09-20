import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GiftWhereInput } from '../gift-where/input';
import { Type } from 'class-transformer';
import { GiftOrderByWithAggregationInput } from '../gift-order-by-with-aggregation/input';
import { GiftScalarFieldEnum } from '../gift-scalar-field/enum';
import { GiftScalarWhereWithAggregatesInput } from '../gift-scalar-where-with-aggregates/input';
import { Int } from '@nestjs/graphql';
import { GiftCountAggregateInput } from '../gift-count-aggregate/input';
import { GiftAvgAggregateInput } from '../gift-avg-aggregate/input';
import { GiftSumAggregateInput } from '../gift-sum-aggregate/input';
import { GiftMinAggregateInput } from '../gift-min-aggregate/input';
import { GiftMaxAggregateInput } from '../gift-max-aggregate/input';

@ArgsType()
export class GiftGroupByArgs {

    @Field(() => GiftWhereInput, {nullable:true})
    @Type(() => GiftWhereInput)
    where?: GiftWhereInput;

    @Field(() => [GiftOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<GiftOrderByWithAggregationInput>;

    @Field(() => [GiftScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof GiftScalarFieldEnum>;

    @Field(() => GiftScalarWhereWithAggregatesInput, {nullable:true})
    having?: GiftScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => GiftCountAggregateInput, {nullable:true})
    _count?: GiftCountAggregateInput;

    @Field(() => GiftAvgAggregateInput, {nullable:true})
    _avg?: GiftAvgAggregateInput;

    @Field(() => GiftSumAggregateInput, {nullable:true})
    _sum?: GiftSumAggregateInput;

    @Field(() => GiftMinAggregateInput, {nullable:true})
    _min?: GiftMinAggregateInput;

    @Field(() => GiftMaxAggregateInput, {nullable:true})
    _max?: GiftMaxAggregateInput;
}
