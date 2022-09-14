import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GiftHistoryCreateWithoutExchangedGiftInput } from '../gift-history-create-without-exchanged-gift/input';
import { Type } from 'class-transformer';
import { GiftHistoryCreateOrConnectWithoutExchangedGiftInput } from '../gift-history-create-or-connect-without-exchanged-gift/input';
import { GiftHistoryUpsertWithWhereUniqueWithoutExchangedGiftInput } from '../gift-history-upsert-with-where-unique-without-exchanged-gift/input';
import { GiftHistoryCreateManyExchangedGiftInputEnvelope } from '../gift-history-create-many-exchanged-gift-input-envelope/input';
import { GiftHistoryWhereUniqueInput } from '../gift-history-where-unique/input';
import { GiftHistoryUpdateWithWhereUniqueWithoutExchangedGiftInput } from '../gift-history-update-with-where-unique-without-exchanged-gift/input';
import { GiftHistoryUpdateManyWithWhereWithoutExchangedGiftInput } from '../gift-history-update-many-with-where-without-exchanged-gift/input';
import { GiftHistoryScalarWhereInput } from '../gift-history-scalar-where/input';

@InputType()
export class GiftHistoryUpdateManyWithoutExchangedGiftNestedInput {

    @Field(() => [GiftHistoryCreateWithoutExchangedGiftInput], {nullable:true})
    @Type(() => GiftHistoryCreateWithoutExchangedGiftInput)
    create?: Array<GiftHistoryCreateWithoutExchangedGiftInput>;

    @Field(() => [GiftHistoryCreateOrConnectWithoutExchangedGiftInput], {nullable:true})
    @Type(() => GiftHistoryCreateOrConnectWithoutExchangedGiftInput)
    connectOrCreate?: Array<GiftHistoryCreateOrConnectWithoutExchangedGiftInput>;

    @Field(() => [GiftHistoryUpsertWithWhereUniqueWithoutExchangedGiftInput], {nullable:true})
    @Type(() => GiftHistoryUpsertWithWhereUniqueWithoutExchangedGiftInput)
    upsert?: Array<GiftHistoryUpsertWithWhereUniqueWithoutExchangedGiftInput>;

    @Field(() => GiftHistoryCreateManyExchangedGiftInputEnvelope, {nullable:true})
    @Type(() => GiftHistoryCreateManyExchangedGiftInputEnvelope)
    createMany?: GiftHistoryCreateManyExchangedGiftInputEnvelope;

    @Field(() => [GiftHistoryWhereUniqueInput], {nullable:true})
    @Type(() => GiftHistoryWhereUniqueInput)
    set?: Array<GiftHistoryWhereUniqueInput>;

    @Field(() => [GiftHistoryWhereUniqueInput], {nullable:true})
    @Type(() => GiftHistoryWhereUniqueInput)
    disconnect?: Array<GiftHistoryWhereUniqueInput>;

    @Field(() => [GiftHistoryWhereUniqueInput], {nullable:true})
    @Type(() => GiftHistoryWhereUniqueInput)
    delete?: Array<GiftHistoryWhereUniqueInput>;

    @Field(() => [GiftHistoryWhereUniqueInput], {nullable:true})
    @Type(() => GiftHistoryWhereUniqueInput)
    connect?: Array<GiftHistoryWhereUniqueInput>;

    @Field(() => [GiftHistoryUpdateWithWhereUniqueWithoutExchangedGiftInput], {nullable:true})
    @Type(() => GiftHistoryUpdateWithWhereUniqueWithoutExchangedGiftInput)
    update?: Array<GiftHistoryUpdateWithWhereUniqueWithoutExchangedGiftInput>;

    @Field(() => [GiftHistoryUpdateManyWithWhereWithoutExchangedGiftInput], {nullable:true})
    @Type(() => GiftHistoryUpdateManyWithWhereWithoutExchangedGiftInput)
    updateMany?: Array<GiftHistoryUpdateManyWithWhereWithoutExchangedGiftInput>;

    @Field(() => [GiftHistoryScalarWhereInput], {nullable:true})
    @Type(() => GiftHistoryScalarWhereInput)
    deleteMany?: Array<GiftHistoryScalarWhereInput>;
}
