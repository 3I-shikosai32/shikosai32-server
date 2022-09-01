import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GiftName } from '../../prisma/gift-name/enum';
import { Int } from '@nestjs/graphql';
import { GiftHistoryUncheckedCreateNestedManyWithoutExchangedGiftInput } from '../../gift-history/gift-history-unchecked-create-nested-many-without-exchanged-gift/input';

@InputType()
export class GiftUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => GiftName, {nullable:false})
    name!: keyof typeof GiftName;

    @Field(() => String, {nullable:false})
    iconUrl!: string;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => Int, {nullable:true})
    remaining?: number;

    @Field(() => GiftHistoryUncheckedCreateNestedManyWithoutExchangedGiftInput, {nullable:true})
    giftHistories?: GiftHistoryUncheckedCreateNestedManyWithoutExchangedGiftInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
