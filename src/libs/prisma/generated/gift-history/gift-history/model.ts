import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { User } from '../../user/user/model';
import { Gift } from '../../gift/gift/model';

@ObjectType()
export class GiftHistory {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isDelivered!: boolean;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Gift, {nullable:false})
    exchangedGift?: Gift;

    @Field(() => String, {nullable:false})
    giftId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;
}
