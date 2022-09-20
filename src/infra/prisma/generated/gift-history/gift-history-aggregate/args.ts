import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GiftHistoryWhereInput } from '../gift-history-where/input';
import { Type } from 'class-transformer';
import { GiftHistoryOrderByWithRelationInput } from '../gift-history-order-by-with-relation/input';
import { GiftHistoryWhereUniqueInput } from '../gift-history-where-unique/input';
import { Int } from '@nestjs/graphql';
import { GiftHistoryCountAggregateInput } from '../gift-history-count-aggregate/input';
import { GiftHistoryMinAggregateInput } from '../gift-history-min-aggregate/input';
import { GiftHistoryMaxAggregateInput } from '../gift-history-max-aggregate/input';

@ArgsType()
export class GiftHistoryAggregateArgs {

    @Field(() => GiftHistoryWhereInput, {nullable:true})
    @Type(() => GiftHistoryWhereInput)
    where?: GiftHistoryWhereInput;

    @Field(() => [GiftHistoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GiftHistoryOrderByWithRelationInput>;

    @Field(() => GiftHistoryWhereUniqueInput, {nullable:true})
    cursor?: GiftHistoryWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => GiftHistoryCountAggregateInput, {nullable:true})
    _count?: GiftHistoryCountAggregateInput;

    @Field(() => GiftHistoryMinAggregateInput, {nullable:true})
    _min?: GiftHistoryMinAggregateInput;

    @Field(() => GiftHistoryMaxAggregateInput, {nullable:true})
    _max?: GiftHistoryMaxAggregateInput;
}
