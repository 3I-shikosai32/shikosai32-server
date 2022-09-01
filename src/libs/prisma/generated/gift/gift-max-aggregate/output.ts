import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GiftName } from '../../prisma/gift-name/enum';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class GiftMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

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
