import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutGiftHistoriesInput } from '../../user/user-create-nested-one-without-gift-histories/input';
import { GiftCreateNestedOneWithoutGiftHistoriesInput } from '../../gift/gift-create-nested-one-without-gift-histories/input';

@InputType()
export class GiftHistoryCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Boolean, {nullable:true})
    isDelivered?: boolean;

    @Field(() => UserCreateNestedOneWithoutGiftHistoriesInput, {nullable:false})
    user!: UserCreateNestedOneWithoutGiftHistoriesInput;

    @Field(() => GiftCreateNestedOneWithoutGiftHistoriesInput, {nullable:false})
    exchangedGift!: GiftCreateNestedOneWithoutGiftHistoriesInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
