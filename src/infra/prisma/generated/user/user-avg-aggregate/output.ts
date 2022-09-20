import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class UserAvgAggregate {

    @Field(() => Float, {nullable:true})
    totalPointDay1?: number;

    @Field(() => Float, {nullable:true})
    totalPointDay2?: number;

    @Field(() => Float, {nullable:true})
    consumablePoint?: number;

    @Field(() => Float, {nullable:true})
    pullableGachaTimes?: number;
}
