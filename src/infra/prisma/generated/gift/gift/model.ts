import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GiftHistory } from '../../gift-history/gift-history/model';
import { GiftCount } from '../gift-count/output';

@ObjectType()
export class Gift {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    iconUrl!: string;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => Int, {nullable:false})
    remaining!: number;

    @Field(() => [GiftHistory], {nullable:true})
    giftHistories?: Array<GiftHistory>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => GiftCount, {nullable:false})
    _count?: GiftCount;
}
