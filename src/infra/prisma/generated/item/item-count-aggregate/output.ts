import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ItemCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    iconUrl!: number;

    @Field(() => Int, {nullable:false})
    layerUrl!: number;

    @Field(() => Int, {nullable:false})
    character!: number;

    @Field(() => Int, {nullable:false})
    layer!: number;

    @Field(() => Int, {nullable:false})
    characterStatusIds!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
