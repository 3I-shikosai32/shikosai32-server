import { ArgsType, Field, Int } from '@nestjs/graphql';
import { GiftHistoryCreateInput } from '../input/gift-history-create.input';

@ArgsType()
export class ExchangeGiftArgs {
  @Field(() => GiftHistoryCreateInput, { nullable: false })
  data: GiftHistoryCreateInput;

  @Field(() => Int, { nullable: false })
  exchangeQuantity: number;
}
