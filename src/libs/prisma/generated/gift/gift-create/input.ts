import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GiftName } from '../../prisma/gift-name/enum';
import { Int } from '@nestjs/graphql';
import { GiftHistoryCreateNestedManyWithoutExchangedGiftInput } from '../../gift-history/gift-history-create-nested-many-without-exchanged-gift/input';

@InputType()
export class GiftCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => GiftName, {nullable:false})
    name!: keyof typeof GiftName;

    @Field(() => String, {nullable:false})
    iconUrl!: string;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => Int, {nullable:false})
    remaining!: number;

    @Field(() => GiftHistoryCreateNestedManyWithoutExchangedGiftInput, {nullable:true})
    giftHistories?: GiftHistoryCreateNestedManyWithoutExchangedGiftInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
