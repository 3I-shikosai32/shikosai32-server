import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GiftHistoryWhereUniqueInput } from '../gift-history-where-unique/input';
import { Type } from 'class-transformer';
import { GiftHistoryCreateWithoutExchangedGiftInput } from '../gift-history-create-without-exchanged-gift/input';

@InputType()
export class GiftHistoryCreateOrConnectWithoutExchangedGiftInput {

    @Field(() => GiftHistoryWhereUniqueInput, {nullable:false})
    @Type(() => GiftHistoryWhereUniqueInput)
    where!: GiftHistoryWhereUniqueInput;

    @Field(() => GiftHistoryCreateWithoutExchangedGiftInput, {nullable:false})
    @Type(() => GiftHistoryCreateWithoutExchangedGiftInput)
    create!: GiftHistoryCreateWithoutExchangedGiftInput;
}
