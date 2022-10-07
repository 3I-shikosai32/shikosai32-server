import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ItemCompletedHistoryObjectEqualityInput {

    @Field(() => Boolean, {nullable:false})
    isDelivered!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    deliveredAt?: Date | string;
}
