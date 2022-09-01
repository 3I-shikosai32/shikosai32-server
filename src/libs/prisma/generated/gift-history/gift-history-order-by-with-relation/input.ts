import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/sort-order/enum';
import { UserOrderByWithRelationInput } from '../../user/user-order-by-with-relation/input';
import { GiftOrderByWithRelationInput } from '../../gift/gift-order-by-with-relation/input';

@InputType()
export class GiftHistoryOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isDelivered?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => GiftOrderByWithRelationInput, {nullable:true})
    exchangedGift?: GiftOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    giftId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
}
