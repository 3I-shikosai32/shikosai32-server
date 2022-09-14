import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GiftCreateWithoutGiftHistoriesInput } from '../gift-create-without-gift-histories/input';
import { Type } from 'class-transformer';
import { GiftCreateOrConnectWithoutGiftHistoriesInput } from '../gift-create-or-connect-without-gift-histories/input';
import { GiftWhereUniqueInput } from '../gift-where-unique/input';

@InputType()
export class GiftCreateNestedOneWithoutGiftHistoriesInput {

    @Field(() => GiftCreateWithoutGiftHistoriesInput, {nullable:true})
    @Type(() => GiftCreateWithoutGiftHistoriesInput)
    create?: GiftCreateWithoutGiftHistoriesInput;

    @Field(() => GiftCreateOrConnectWithoutGiftHistoriesInput, {nullable:true})
    @Type(() => GiftCreateOrConnectWithoutGiftHistoriesInput)
    connectOrCreate?: GiftCreateOrConnectWithoutGiftHistoriesInput;

    @Field(() => GiftWhereUniqueInput, {nullable:true})
    @Type(() => GiftWhereUniqueInput)
    connect?: GiftWhereUniqueInput;
}
