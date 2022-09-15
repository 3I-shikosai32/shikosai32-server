import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GiftHistoryUpdateInput {
  @Field(() => Boolean, { nullable: false })
  isDelivered: boolean;
}
