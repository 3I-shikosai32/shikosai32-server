import { ArgsType, Field, Int } from '@nestjs/graphql';
import { GiftHistoryOrderInput } from '../input/gift-history-order.input';
import { GiftHistoryWhereUniqueInput } from '../input/gift-history-where-unique.input';
import { GiftHistoryWhereInput } from '../input/gift-history-where.input';

@ArgsType()
export class FindGiftHistoriesArgs {
  @Field(() => GiftHistoryWhereInput, { nullable: true })
  where?: GiftHistoryWhereInput;

  @Field(() => [GiftHistoryOrderInput], { nullable: true })
  orderBy?: GiftHistoryOrderInput[];

  @Field(() => GiftHistoryWhereUniqueInput, { nullable: true })
  cursor?: GiftHistoryWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;
}
