import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    email!: number;

    @Field(() => Int, {nullable:false})
    role!: number;

    @Field(() => Int, {nullable:false})
    totalPointDay1!: number;

    @Field(() => Int, {nullable:false})
    totalPointDay2!: number;

    @Field(() => Int, {nullable:false})
    consumablePoint!: number;

    @Field(() => Int, {nullable:false})
    character!: number;

    @Field(() => Int, {nullable:false})
    iconUrl!: number;

    @Field(() => Int, {nullable:false})
    avatarUrl!: number;

    @Field(() => Int, {nullable:false})
    itemIds!: number;

    @Field(() => Int, {nullable:false})
    participateGame!: number;

    @Field(() => Int, {nullable:false})
    pullableGachaTimes!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
