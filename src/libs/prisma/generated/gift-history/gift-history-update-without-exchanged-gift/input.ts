import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutGiftHistoriesNestedInput } from '../../user/user-update-one-required-without-gift-histories-nested/input';

@InputType()
export class GiftHistoryUpdateWithoutExchangedGiftInput {

    @Field(() => UserUpdateOneRequiredWithoutGiftHistoriesNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutGiftHistoriesNestedInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
