import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class GiftHistoryUncheckedUpdateManyWithoutGiftHistoriesInput {

    @Field(() => String, {nullable:true})
    giftId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
