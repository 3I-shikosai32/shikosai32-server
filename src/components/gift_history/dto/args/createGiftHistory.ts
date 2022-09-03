import { ArgsType, Field } from '@nestjs/graphql';
import GiftHistoryCreateInput from '../input/create';

@ArgsType()
export default class CreateGiftHistoryArgs {
  @Field(() => GiftHistoryCreateInput, { nullable: false })
  data: GiftHistoryCreateInput;
}
