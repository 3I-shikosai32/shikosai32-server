import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GiftCreateNestedOneWithoutGiftHistoriesInput } from '../../gift/gift-create-nested-one-without-gift-histories/input';

@InputType()
export class GiftHistoryCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => GiftCreateNestedOneWithoutGiftHistoriesInput, {nullable:false})
    exchangedGift!: GiftCreateNestedOneWithoutGiftHistoriesInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
