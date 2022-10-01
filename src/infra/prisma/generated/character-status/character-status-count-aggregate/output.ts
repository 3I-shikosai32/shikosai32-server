import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CharacterStatusCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    character!: number;

    @Field(() => Int, {nullable:false})
    iconUrl!: number;

    @Field(() => Int, {nullable:false})
    avatarUrl!: number;

    @Field(() => Int, {nullable:false})
    isActive!: number;

    @Field(() => Int, {nullable:false})
    characterPointDay1!: number;

    @Field(() => Int, {nullable:false})
    characterPointDay2!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    itemIds!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
