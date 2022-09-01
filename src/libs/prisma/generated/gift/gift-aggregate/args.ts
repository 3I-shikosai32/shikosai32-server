import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GiftWhereInput } from '../gift-where/input';
import { Type } from 'class-transformer';
import { GiftOrderByWithRelationInput } from '../gift-order-by-with-relation/input';
import { GiftWhereUniqueInput } from '../gift-where-unique/input';
import { Int } from '@nestjs/graphql';
import { GiftCountAggregateInput } from '../gift-count-aggregate/input';
import { GiftAvgAggregateInput } from '../gift-avg-aggregate/input';
import { GiftSumAggregateInput } from '../gift-sum-aggregate/input';
import { GiftMinAggregateInput } from '../gift-min-aggregate/input';
import { GiftMaxAggregateInput } from '../gift-max-aggregate/input';

@ArgsType()
export class GiftAggregateArgs {

    @Field(() => GiftWhereInput, {nullable:true})
    @Type(() => GiftWhereInput)
    where?: GiftWhereInput;

    @Field(() => [GiftOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GiftOrderByWithRelationInput>;

    @Field(() => GiftWhereUniqueInput, {nullable:true})
    cursor?: GiftWhereUniqueInput;

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
