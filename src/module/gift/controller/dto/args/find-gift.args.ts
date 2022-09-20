import { ArgsType, Field } from '@nestjs/graphql';
import { GiftWhereUniqueInput } from '../input/gift-where-unique.input';

@ArgsType()
export class FindGiftArgs {
  @Field(() => GiftWhereUniqueInput, { nullable: false })
  where: GiftWhereUniqueInput;
}
