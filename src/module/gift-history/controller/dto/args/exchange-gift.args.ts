import { ArgsType, Field } from '@nestjs/graphql';
import { GiftHistoryCreateInput } from '../input/gift-history-create.input';

@ArgsType()
export class ExchangeGiftArgs {
  @Field(() => GiftHistoryCreateInput, { nullable: false })
  data: GiftHistoryCreateInput;

  @Field(() => Number, { nullable: false })
  exchangeQuantity: number;
}
