import { ArgsType, Field } from '@nestjs/graphql';
import GiftWhereUniqueInput from '../input/whereUnique';

@ArgsType()
export default class FindGiftArgs {
  @Field(() => GiftWhereUniqueInput, { nullable: false })
  where: GiftWhereUniqueInput;
}
