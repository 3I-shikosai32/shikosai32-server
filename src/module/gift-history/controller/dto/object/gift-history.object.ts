import { Field, ObjectType } from '@nestjs/graphql';
import { Gift } from '~/gift/controller/dto/object/gift.object';
import { User } from '~/user/controller/dto/object/user.object';

@ObjectType()
export class GiftHistory {
  @Field(() => String, { nullable: false })
  id: string;

  @Field(() => Boolean, { nullable: false })
  isDelivered: boolean;

  @Field(() => User, { nullable: false })
  user: User;

  @Field(() => String, { nullable: false })
  userId: string;

  @Field(() => Gift, { nullable: false })
  exchangedGift: Gift;

  @Field(() => String, { nullable: false })
  giftId: string;

  @Field(() => Date, { nullable: false })
  createdAt: Date;

  @Field(() => Date, { nullable: true })
  deliveredAt: Date | null;
}
