import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GiftCreateWithoutGiftHistoriesInput } from '../gift-create-without-gift-histories/input';
import { Type } from 'class-transformer';
import { GiftCreateOrConnectWithoutGiftHistoriesInput } from '../gift-create-or-connect-without-gift-histories/input';
import { GiftUpsertWithoutGiftHistoriesInput } from '../gift-upsert-without-gift-histories/input';
import { GiftWhereUniqueInput } from '../gift-where-unique/input';
import { GiftUpdateWithoutGiftHistoriesInput } from '../gift-update-without-gift-histories/input';

@InputType()
export class GiftUpdateOneRequiredWithoutGiftHistoriesNestedInput {

    @Field(() => GiftCreateWithoutGiftHistoriesInput, {nullable:true})
    @Type(() => GiftCreateWithoutGiftHistoriesInput)
    create?: GiftCreateWithoutGiftHistoriesInput;

    @Field(() => GiftCreateOrConnectWithoutGiftHistoriesInput, {nullable:true})
    @Type(() => GiftCreateOrConnectWithoutGiftHistoriesInput)
    connectOrCreate?: GiftCreateOrConnectWithoutGiftHistoriesInput;

    @Field(() => GiftUpsertWithoutGiftHistoriesInput, {nullable:true})
    @Type(() => GiftUpsertWithoutGiftHistoriesInput)
    upsert?: GiftUpsertWithoutGiftHistoriesInput;

    @Field(() => GiftWhereUniqueInput, {nullable:true})
    @Type(() => GiftWhereUniqueInput)
    connect?: GiftWhereUniqueInput;

    @Field(() => GiftUpdateWithoutGiftHistoriesInput, {nullable:true})
    @Type(() => GiftUpdateWithoutGiftHistoriesInput)
    update?: GiftUpdateWithoutGiftHistoriesInput;
}
