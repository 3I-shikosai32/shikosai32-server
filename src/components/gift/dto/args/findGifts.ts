import { ArgsType, Field, Int } from '@nestjs/graphql';
import GiftOrderInput from '../input/order';
import GiftWhereInput from '../input/where';
import GiftWhereUniqueInput from '../input/whereUnique';

@ArgsType()
export default class FindGiftsArgs {
  @Field(() => GiftWhereInput, { nullable: true })
  where?: GiftWhereInput;

  @Field(() => [GiftOrderInput], { nullable: true })
  orderBy?: GiftOrderInput[];

  @Field(() => GiftWhereUniqueInput, { nullable: true })
  cursor?: GiftWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;
}
