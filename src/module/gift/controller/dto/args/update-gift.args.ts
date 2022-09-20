import { ArgsType, Field } from '@nestjs/graphql';
import { GiftUpdateInput } from '../input/gift-update.input';
import { GiftWhereUniqueInput } from '../input/gift-where-unique.input';

@ArgsType()
export class UpdateGiftArgs {
  @Field(() => GiftWhereUniqueInput, { nullable: false })
  where: GiftWhereUniqueInput;

  @Field(() => GiftUpdateInput, { nullable: false })
  data: GiftUpdateInput;
}
