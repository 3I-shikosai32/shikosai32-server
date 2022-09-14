import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GiftUpdateWithoutGiftHistoriesInput } from '../gift-update-without-gift-histories/input';
import { Type } from 'class-transformer';
import { GiftCreateWithoutGiftHistoriesInput } from '../gift-create-without-gift-histories/input';

@InputType()
export class GiftUpsertWithoutGiftHistoriesInput {

    @Field(() => GiftUpdateWithoutGiftHistoriesInput, {nullable:false})
    @Type(() => GiftUpdateWithoutGiftHistoriesInput)
    update!: GiftUpdateWithoutGiftHistoriesInput;

    @Field(() => GiftCreateWithoutGiftHistoriesInput, {nullable:false})
    @Type(() => GiftCreateWithoutGiftHistoriesInput)
    create!: GiftCreateWithoutGiftHistoriesInput;
}
