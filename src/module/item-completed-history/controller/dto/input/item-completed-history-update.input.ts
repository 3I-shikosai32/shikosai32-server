import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ItemCompletedHistoryUpdateInput {
  @Field(() => Boolean, { nullable: false })
  isDelivered: boolean;
}
