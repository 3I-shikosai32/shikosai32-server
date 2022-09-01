import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class GiftHistoryUncheckedUpdateManyInput {

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => String, {nullable:true})
    giftId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
