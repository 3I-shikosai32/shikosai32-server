import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GiftHistoryUncheckedUpdateManyWithoutExchangedGiftNestedInput } from '../../gift-history/gift-history-unchecked-update-many-without-exchanged-gift-nested/input';

@InputType()
export class GiftUncheckedUpdateInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    iconUrl?: string;

    @Field(() => Int, {nullable:true})
    price?: number;

    @Field(() => Int, {nullable:true})
    remaining?: number;

    @Field(() => GiftHistoryUncheckedUpdateManyWithoutExchangedGiftNestedInput, {nullable:true})
    giftHistories?: GiftHistoryUncheckedUpdateManyWithoutExchangedGiftNestedInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
