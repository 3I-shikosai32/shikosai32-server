import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ItemCompletedHistoryUncheckedUpdateInput {

    @Field(() => Boolean, {nullable:true})
    isDelivered?: boolean;

    @Field(() => String, {nullable:true})
    characterStatusId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deliveredAt?: Date | string;
}
