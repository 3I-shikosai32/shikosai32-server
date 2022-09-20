import { ArgsType, Field, Int } from '@nestjs/graphql';
import { GiftOrderInput } from '../input/gift-order.input';
import { GiftWhereUniqueInput } from '../input/gift-where-unique.input';
import { GiftWhereInput } from '../input/gift-where.input';

@ArgsType()
export class FindGiftsArgs {
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
