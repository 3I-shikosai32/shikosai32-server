import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GiftHistoryUpdateManyWithoutExchangedGiftNestedInput } from '../../gift-history/gift-history-update-many-without-exchanged-gift-nested/input';

@InputType()
export class GiftUpdateInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    iconUrl?: string;

    @Field(() => Int, {nullable:true})
    price?: number;

    @Field(() => Int, {nullable:true})
    remaining?: number;

    @Field(() => GiftHistoryUpdateManyWithoutExchangedGiftNestedInput, {nullable:true})
    giftHistories?: GiftHistoryUpdateManyWithoutExchangedGiftNestedInput;
}
