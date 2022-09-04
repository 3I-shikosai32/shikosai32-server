import { ArgsType, Field } from '@nestjs/graphql';
import GiftHistoryUpdateInput from '../input/update';
import GiftHistoryWhereUniqueInput from '../input/whereUnique';

@ArgsType()
export default class UpdateGiftHistoryArgs {
  @Field(() => GiftHistoryWhereUniqueInput, { nullable: false })
  where: GiftHistoryWhereUniqueInput;

  @Field(() => GiftHistoryUpdateInput, { nullable: false })
  data: GiftHistoryUpdateInput;
}
