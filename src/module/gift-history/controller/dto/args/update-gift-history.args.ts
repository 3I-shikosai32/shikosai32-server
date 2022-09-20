import { ArgsType, Field } from '@nestjs/graphql';
import { GiftHistoryUpdateInput } from '../input/gift-history-update.input';
import { GiftHistoryWhereUniqueInput } from '../input/gift-history-where-unique.input';

@ArgsType()
export class UpdateGiftHistoryArgs {
  @Field(() => GiftHistoryWhereUniqueInput, { nullable: false })
  where: GiftHistoryWhereUniqueInput;

  @Field(() => GiftHistoryUpdateInput, { nullable: false })
  data: GiftHistoryUpdateInput;
}
