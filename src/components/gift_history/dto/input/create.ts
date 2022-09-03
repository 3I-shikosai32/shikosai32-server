import { InputType, Field } from '@nestjs/graphql';

@InputType()
export default class GiftHistoryCreateInput {
  @Field(() => String, { nullable: false })
  id: string;

  @Field(() => Boolean, { nullable: true, defaultValue: false })
  isDelivered: boolean;

  @Field(() => String, { nullable: false })
  userId: string;

  @Field(() => String, { nullable: false })
  giftId: string;
}
