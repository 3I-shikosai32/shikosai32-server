import { ObjectType, Field } from '@nestjs/graphql';
import NestedGift from '@/components/gift/dto/object/nested';
import NestedUser from '@/components/user/dto/object/nested';

@ObjectType()
export default class GiftHistory {
  @Field(() => String, { nullable: false })
  id: string;

  @Field(() => Boolean, { nullable: false })
  isDelivered: boolean;

  @Field(() => NestedUser, { nullable: false })
  user: NestedUser;

  @Field(() => String, { nullable: false })
  userId: string;

  @Field(() => NestedGift, { nullable: false })
  exchangedGift: NestedGift;

  @Field(() => String, { nullable: false })
  giftId: string;

  @Field(() => Date, { nullable: false })
  createdAt: Date;
}
