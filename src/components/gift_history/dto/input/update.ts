import { InputType, Field } from '@nestjs/graphql';

@InputType()
export default class GiftHistoryUpdateInput {
  @Field(() => Boolean, { nullable: false })
  isDelivered: boolean;
}