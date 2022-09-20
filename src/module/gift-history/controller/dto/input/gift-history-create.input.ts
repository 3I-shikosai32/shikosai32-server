import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GiftHistoryCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Boolean, { nullable: true, defaultValue: false })
  isDelivered: boolean;

  @Field(() => String, { nullable: false })
  userId: string;

  @Field(() => String, { nullable: false })
  giftId: string;
}
