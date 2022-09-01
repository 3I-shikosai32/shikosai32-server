import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class GiftHistoryUncheckedUpdateWithoutExchangedGiftInput {

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
