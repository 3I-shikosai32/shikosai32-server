import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class NestedGiftHistory {
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

  @Field(() => Date, { nullable: true })
  deliveredAt: Date | null;
}
