import { ArgsType, Field } from '@nestjs/graphql';
import { UserUpdateInput } from '../input/user-update.input';
import { UserWhereUniqueInput } from '../input/user-where-unique.input';

@ArgsType()
export class UpdateUserArgs {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  where: UserWhereUniqueInput;

  @Field(() => UserUpdateInput, { nullable: false })
  data: UserUpdateInput;
}
