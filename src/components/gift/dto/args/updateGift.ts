import { ArgsType, Field } from '@nestjs/graphql';
import GiftUpdateInput from '../input/update';
import GiftWhereUniqueInput from '../input/whereUnique';

@ArgsType()
export default class UpdateGiftArgs {
  @Field(() => GiftWhereUniqueInput, { nullable: false })
  where: GiftWhereUniqueInput;

  @Field(() => GiftUpdateInput, { nullable: false })
  data: GiftUpdateInput;
}
