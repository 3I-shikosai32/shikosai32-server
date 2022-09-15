import { Field, ObjectType } from '@nestjs/graphql';
import { NestedGift } from '~/gift/controller/dto/object/nested-gift.object';
import { NestedUser } from '~/user/controller/dto/object/nested-user.object';

@ObjectType()
export class GiftHistory {
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

  @Field(() => Date, { nullable: true })
  deliveredAt: Date | null;
}
