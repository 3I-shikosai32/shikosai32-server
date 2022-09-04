import { ArgsType, Field } from '@nestjs/graphql';
import GiftHistoryWhereUniqueInput from '../input/whereUnique';

@ArgsType()
export default class FindGiftHistoryArgs {
  @Field(() => GiftHistoryWhereUniqueInput, { nullable: false })
  where: GiftHistoryWhereUniqueInput;
}
