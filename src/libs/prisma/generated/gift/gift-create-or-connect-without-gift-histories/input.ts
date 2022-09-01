import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GiftWhereUniqueInput } from '../gift-where-unique/input';
import { Type } from 'class-transformer';
import { GiftCreateWithoutGiftHistoriesInput } from '../gift-create-without-gift-histories/input';

@InputType()
export class GiftCreateOrConnectWithoutGiftHistoriesInput {

    @Field(() => GiftWhereUniqueInput, {nullable:false})
    @Type(() => GiftWhereUniqueInput)
    where!: GiftWhereUniqueInput;

    @Field(() => GiftCreateWithoutGiftHistoriesInput, {nullable:false})
    @Type(() => GiftCreateWithoutGiftHistoriesInput)
    create!: GiftCreateWithoutGiftHistoriesInput;
}
