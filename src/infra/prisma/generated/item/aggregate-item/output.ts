import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ItemCountAggregate } from '../item-count-aggregate/output';
import { ItemAvgAggregate } from '../item-avg-aggregate/output';
import { ItemSumAggregate } from '../item-sum-aggregate/output';
import { ItemMinAggregate } from '../item-min-aggregate/output';
import { ItemMaxAggregate } from '../item-max-aggregate/output';

@ObjectType()
export class AggregateItem {

    @Field(() => ItemCountAggregate, {nullable:true})
    _count?: ItemCountAggregate;

    @Field(() => ItemAvgAggregate, {nullable:true})
    _avg?: ItemAvgAggregate;

    @Field(() => ItemSumAggregate, {nullable:true})
    _sum?: ItemSumAggregate;

    @Field(() => ItemMinAggregate, {nullable:true})
    _min?: ItemMinAggregate;

    @Field(() => ItemMaxAggregate, {nullable:true})
    _max?: ItemMaxAggregate;
}
