import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ItemCompletedHistoryCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    isDelivered!: number;

    @Field(() => Int, {nullable:false})
    characterStatusId!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    deliveredAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
