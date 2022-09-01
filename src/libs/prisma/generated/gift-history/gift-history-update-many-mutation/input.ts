import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class GiftHistoryUpdateManyMutationInput {

    @Field(() => Boolean, {nullable:true})
    isDelivered?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
