import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GiftName } from '../../prisma/gift-name/enum';
import { Int } from '@nestjs/graphql';
import { GiftCountAggregate } from '../gift-count-aggregate/output';
import { GiftAvgAggregate } from '../gift-avg-aggregate/output';
import { GiftSumAggregate } from '../gift-sum-aggregate/output';
import { GiftMinAggregate } from '../gift-min-aggregate/output';
import { GiftMaxAggregate } from '../gift-max-aggregate/output';

@ObjectType()
export class GiftGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => GiftName, {nullable:false})
    name!: keyof typeof GiftName;

    @Field(() => String, {nullable:false})
    iconUrl!: string;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => Int, {nullable:false})
    remaining!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => GiftCountAggregate, {nullable:true})
    _count?: GiftCountAggregate;

    @Field(() => GiftAvgAggregate, {nullable:true})
    _avg?: GiftAvgAggregate;

    @Field(() => GiftSumAggregate, {nullable:true})
    _sum?: GiftSumAggregate;

    @Field(() => GiftMinAggregate, {nullable:true})
    _min?: GiftMinAggregate;

    @Field(() => GiftMaxAggregate, {nullable:true})
    _max?: GiftMaxAggregate;
}
