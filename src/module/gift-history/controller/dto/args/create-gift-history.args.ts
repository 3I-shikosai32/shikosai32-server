import { ArgsType, Field } from '@nestjs/graphql';
import { GiftHistoryCreateInput } from '../input/gift-history-create.input';

@ArgsType()
export class CreateGiftHistoryArgs {
  @Field(() => GiftHistoryCreateInput, { nullable: false })
  data: GiftHistoryCreateInput;
}
