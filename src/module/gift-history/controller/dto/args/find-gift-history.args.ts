import { ArgsType, Field } from '@nestjs/graphql';
import { GiftHistoryWhereUniqueInput } from '../input/gift-history-where-unique.input';

@ArgsType()
export class FindGiftHistoryArgs {
  @Field(() => GiftHistoryWhereUniqueInput, { nullable: false })
  where: GiftHistoryWhereUniqueInput;
}
