import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GiftHistoryCreateWithoutExchangedGiftInput } from '../gift-history-create-without-exchanged-gift/input';
import { Type } from 'class-transformer';
import { GiftHistoryCreateOrConnectWithoutExchangedGiftInput } from '../gift-history-create-or-connect-without-exchanged-gift/input';
import { GiftHistoryCreateManyExchangedGiftInputEnvelope } from '../gift-history-create-many-exchanged-gift-input-envelope/input';
import { GiftHistoryWhereUniqueInput } from '../gift-history-where-unique/input';

@InputType()
export class GiftHistoryCreateNestedManyWithoutExchangedGiftInput {

    @Field(() => [GiftHistoryCreateWithoutExchangedGiftInput], {nullable:true})
    @Type(() => GiftHistoryCreateWithoutExchangedGiftInput)
    create?: Array<GiftHistoryCreateWithoutExchangedGiftInput>;

    @Field(() => [GiftHistoryCreateOrConnectWithoutExchangedGiftInput], {nullable:true})
    @Type(() => GiftHistoryCreateOrConnectWithoutExchangedGiftInput)
    connectOrCreate?: Array<GiftHistoryCreateOrConnectWithoutExchangedGiftInput>;

    @Field(() => GiftHistoryCreateManyExchangedGiftInputEnvelope, {nullable:true})
    @Type(() => GiftHistoryCreateManyExchangedGiftInputEnvelope)
    createMany?: GiftHistoryCreateManyExchangedGiftInputEnvelope;

    @Field(() => [GiftHistoryWhereUniqueInput], {nullable:true})
    @Type(() => GiftHistoryWhereUniqueInput)
    connect?: Array<GiftHistoryWhereUniqueInput>;
}
