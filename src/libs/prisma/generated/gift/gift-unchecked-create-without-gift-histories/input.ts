import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GiftName } from '../../prisma/gift-name/enum';
import { Int } from '@nestjs/graphql';

@InputType()
export class GiftUncheckedCreateWithoutGiftHistoriesInput {

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

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
