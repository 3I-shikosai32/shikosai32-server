import { ArgsType, Field, Int } from '@nestjs/graphql';
import { ItemCompletedHistoryOrderInput } from '../input/item-completed-history-order.input';
import { ItemCompletedHistoryWhereUniqueInput } from '../input/item-completed-history-where-unique.input';
import { ItemCompletedHistoryWhereInput } from '../input/item-completed-history-where.input';

@ArgsType()
export class FindItemCompletedHistoriesArgs {
  @Field(() => ItemCompletedHistoryWhereInput, { nullable: true })
  where?: ItemCompletedHistoryWhereInput;

  @Field(() => [ItemCompletedHistoryOrderInput], { nullable: true })
  orderBy?: ItemCompletedHistoryOrderInput[];

  @Field(() => ItemCompletedHistoryWhereUniqueInput, { nullable: true })
  cursor?: ItemCompletedHistoryWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;
}
