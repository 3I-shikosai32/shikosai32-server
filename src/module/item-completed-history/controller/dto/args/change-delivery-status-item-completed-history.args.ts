import { ArgsType, Field } from '@nestjs/graphql';
import { ItemCompletedHistoryUpdateInput } from '../input/item-completed-history-update.input';
import { ItemCompletedHistoryWhereUniqueInput } from '../input/item-completed-history-where-unique.input';

@ArgsType()
export class ChangeDeliveryStatusItemCompletedHistoryArgs {
  @Field(() => ItemCompletedHistoryWhereUniqueInput, { nullable: false })
  where: ItemCompletedHistoryWhereUniqueInput;

  @Field(() => ItemCompletedHistoryUpdateInput, { nullable: false })
  data: ItemCompletedHistoryUpdateInput;
}
