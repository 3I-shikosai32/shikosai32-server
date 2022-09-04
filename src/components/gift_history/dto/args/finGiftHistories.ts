import { ArgsType, Field, Int } from '@nestjs/graphql';
import GiftHistoryOrderInput from '../input/order';
import GiftHistoryWhereInput from '../input/where';
import GiftHistoryWhereUniqueInput from '../input/whereUnique';

@ArgsType()
export default class FindGiftHistoriesArgs {
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
