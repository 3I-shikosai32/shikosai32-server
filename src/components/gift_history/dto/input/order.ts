import { InputType, Field } from '@nestjs/graphql';
import { SortOrder } from '@/libs/prisma/generated/prisma/sort-order/enum';

@InputType()
export default class GiftHistoryOrderInput {
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  deliveredAt?: keyof typeof SortOrder;
}
