import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '@/infra/prisma/generated/prisma/sort-order/enum';

@InputType()
export class UserOrderInput {
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  totalPointDay1?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  totalPointDay2?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
}
