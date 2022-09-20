import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GiftHistoryCreateManyExchangedGiftInput } from '../gift-history-create-many-exchanged-gift/input';
import { Type } from 'class-transformer';

@InputType()
export class GiftHistoryCreateManyExchangedGiftInputEnvelope {

    @Field(() => [GiftHistoryCreateManyExchangedGiftInput], {nullable:false})
    @Type(() => GiftHistoryCreateManyExchangedGiftInput)
    data!: Array<GiftHistoryCreateManyExchangedGiftInput>;
}
