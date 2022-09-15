import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '@/infra/prisma/generated/prisma/sort-order/enum';

@InputType()
export class GiftHistoryOrderInput {
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  deliveredAt?: keyof typeof SortOrder;
}
