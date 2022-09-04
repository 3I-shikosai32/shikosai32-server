import { InputType, Field } from '@nestjs/graphql';
import { SortOrder } from '@/libs/prisma/generated/prisma/sort-order/enum';

@InputType()
export default class GiftOrderInput {
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  price?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  remaining?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
}
