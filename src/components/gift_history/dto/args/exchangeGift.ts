import { ArgsType, Field } from '@nestjs/graphql';
import GiftHistoryCreateInput from '../input/create';

@ArgsType()
export default class ExchangeGiftHistoryArgs {
  @Field(() => GiftHistoryCreateInput, { nullable: false })
  data: GiftHistoryCreateInput;

  @Field(() => Number, { nullable: false })
  exchangeQuantity: number;
}
