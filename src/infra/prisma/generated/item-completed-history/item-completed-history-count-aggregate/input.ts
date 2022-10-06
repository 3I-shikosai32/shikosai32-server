import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ItemCompletedHistoryCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    isDelivered?: true;

    @Field(() => Boolean, {nullable:true})
    characterStatusId?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    deliveredAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
