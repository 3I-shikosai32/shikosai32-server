import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutGiftHistoriesInput } from '../../user/user-create-nested-one-without-gift-histories/input';

@InputType()
export class GiftHistoryCreateWithoutExchangedGiftInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Boolean, {nullable:true})
    isDelivered?: boolean;

    @Field(() => UserCreateNestedOneWithoutGiftHistoriesInput, {nullable:false})
    user!: UserCreateNestedOneWithoutGiftHistoriesInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deliveredAt?: Date | string;
}
