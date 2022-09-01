import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GiftName } from '../../prisma/gift-name/enum';
import { Int } from '@nestjs/graphql';
import { GiftHistoryUpdateManyWithoutExchangedGiftNestedInput } from '../../gift-history/gift-history-update-many-without-exchanged-gift-nested/input';

@InputType()
export class GiftUpdateInput {

    @Field(() => GiftName, {nullable:true})
    name?: keyof typeof GiftName;

    @Field(() => String, {nullable:true})
    iconUrl?: string;

    @Field(() => Int, {nullable:true})
    price?: number;

    @Field(() => Int, {nullable:true})
    remaining?: number;

    @Field(() => GiftHistoryUpdateManyWithoutExchangedGiftNestedInput, {nullable:true})
    giftHistories?: GiftHistoryUpdateManyWithoutExchangedGiftNestedInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
