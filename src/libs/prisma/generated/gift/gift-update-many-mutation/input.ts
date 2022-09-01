import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GiftName } from '../../prisma/gift-name/enum';
import { Int } from '@nestjs/graphql';

@InputType()
export class GiftUpdateManyMutationInput {

    @Field(() => GiftName, {nullable:true})
    name?: keyof typeof GiftName;

    @Field(() => String, {nullable:true})
    iconUrl?: string;

    @Field(() => Int, {nullable:true})
    price?: number;

    @Field(() => Int, {nullable:true})
    remaining?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
