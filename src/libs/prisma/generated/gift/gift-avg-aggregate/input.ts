import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class GiftAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    price?: true;

    @Field(() => Boolean, {nullable:true})
    remaining?: true;
}
