import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GiftUpdateOneRequiredWithoutGiftHistoriesNestedInput } from '../../gift/gift-update-one-required-without-gift-histories-nested/input';

@InputType()
export class GiftHistoryUpdateWithoutUserInput {

    @Field(() => Boolean, {nullable:true})
    isDelivered?: boolean;

    @Field(() => GiftUpdateOneRequiredWithoutGiftHistoriesNestedInput, {nullable:true})
    exchangedGift?: GiftUpdateOneRequiredWithoutGiftHistoriesNestedInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
