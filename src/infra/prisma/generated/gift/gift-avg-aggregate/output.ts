import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class GiftAvgAggregate {

    @Field(() => Float, {nullable:true})
    price?: number;

    @Field(() => Float, {nullable:true})
    remaining?: number;
}
