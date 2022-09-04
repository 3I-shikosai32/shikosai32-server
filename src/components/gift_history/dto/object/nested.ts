import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export default class NestedGiftHistory {
  @Field(() => String, { nullable: false })
  id: string;

  @Field(() => Boolean, { nullable: false })
  isDelivered: boolean;

  @Field(() => String, { nullable: false })
  userId: string;

  @Field(() => String, { nullable: false })
  giftId: string;

  @Field(() => Date, { nullable: false })
  createdAt: Date;
}
