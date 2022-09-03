import { ArgsType, Field } from '@nestjs/graphql';
import UserUpdateInput from '../input/update';
import UserWhereUniqueInput from '../input/whereUnique';

@ArgsType()
export default class UpdateUserArgs {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  where: UserWhereUniqueInput;

  @Field(() => UserUpdateInput, { nullable: false })
  data: UserUpdateInput;
}
