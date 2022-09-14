import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Character } from '../../prisma/character/enum';
import { Int } from '@nestjs/graphql';
import { ItemCountAggregate } from '../item-count-aggregate/output';
import { ItemAvgAggregate } from '../item-avg-aggregate/output';
import { ItemSumAggregate } from '../item-sum-aggregate/output';
import { ItemMinAggregate } from '../item-min-aggregate/output';
import { ItemMaxAggregate } from '../item-max-aggregate/output';

@ObjectType()
export class ItemGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => Character, {nullable:false})
    character!: keyof typeof Character;

    @Field(() => Int, {nullable:false})
    layer!: number;

    @Field(() => [String], {nullable:true})
    userIds?: Array<string>;

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
