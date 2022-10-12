import { ArgsType, Field } from '@nestjs/graphql';
import { GiftHistoryChangeDeliveryStateInput } from '../input/gift-history-change-delivery-state.input';
import { GiftHistoryWhereUniqueInput } from '../input/gift-history-where-unique.input';

@ArgsType()
export class ChangeDeliveryStateGiftHistoryArgs {
  @Field(() => GiftHistoryWhereUniqueInput, { nullable: false })
  where: GiftHistoryWhereUniqueInput;

  @Field(() => GiftHistoryChangeDeliveryStateInput, { nullable: false })
  data: GiftHistoryChangeDeliveryStateInput;
}
