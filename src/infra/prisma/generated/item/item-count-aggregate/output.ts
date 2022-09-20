import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ItemCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    url!: number;

    @Field(() => Int, {nullable:false})
    character!: number;

    @Field(() => Int, {nullable:false})
    layer!: number;

    @Field(() => Int, {nullable:false})
    userIds!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
