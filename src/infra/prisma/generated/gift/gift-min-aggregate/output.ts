import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class GiftMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    iconUrl?: string;

    @Field(() => Int, {nullable:true})
    price?: number;

    @Field(() => Int, {nullable:true})
    remaining?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
