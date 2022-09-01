import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutGiftHistoriesNestedInput } from '../../user/user-update-one-required-without-gift-histories-nested/input';
import { GiftUpdateOneRequiredWithoutGiftHistoriesNestedInput } from '../../gift/gift-update-one-required-without-gift-histories-nested/input';

@InputType()
export class GiftHistoryUpdateInput {

    @Field(() => Boolean, {nullable:true})
    isDelivered?: boolean;

    @Field(() => UserUpdateOneRequiredWithoutGiftHistoriesNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutGiftHistoriesNestedInput;

    @Field(() => GiftUpdateOneRequiredWithoutGiftHistoriesNestedInput, {nullable:true})
    exchangedGift?: GiftUpdateOneRequiredWithoutGiftHistoriesNestedInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
