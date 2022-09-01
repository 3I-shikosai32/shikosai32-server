import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class GiftHistoryCreateManyUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Boolean, {nullable:true})
    isDelivered?: boolean;

    @Field(() => String, {nullable:false})
    giftId!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
