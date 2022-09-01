import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GiftHistoryWhereUniqueInput } from '../gift-history-where-unique/input';
import { Type } from 'class-transformer';
import { GiftHistoryUpdateWithoutExchangedGiftInput } from '../gift-history-update-without-exchanged-gift/input';
import { GiftHistoryCreateWithoutExchangedGiftInput } from '../gift-history-create-without-exchanged-gift/input';

@InputType()
export class GiftHistoryUpsertWithWhereUniqueWithoutExchangedGiftInput {

    @Field(() => GiftHistoryWhereUniqueInput, {nullable:false})
    @Type(() => GiftHistoryWhereUniqueInput)
    where!: GiftHistoryWhereUniqueInput;

    @Field(() => GiftHistoryUpdateWithoutExchangedGiftInput, {nullable:false})
    @Type(() => GiftHistoryUpdateWithoutExchangedGiftInput)
    update!: GiftHistoryUpdateWithoutExchangedGiftInput;

    @Field(() => GiftHistoryCreateWithoutExchangedGiftInput, {nullable:false})
    @Type(() => GiftHistoryCreateWithoutExchangedGiftInput)
    create!: GiftHistoryCreateWithoutExchangedGiftInput;
}
