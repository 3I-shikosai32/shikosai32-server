import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GiftHistoryChangeDeliveryStateInput {
  @Field(() => Boolean, { nullable: false })
  isDelivered: boolean;
}
