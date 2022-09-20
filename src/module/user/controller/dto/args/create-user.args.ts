import { ArgsType, Field } from '@nestjs/graphql';
import { UserCreateInput } from '../input/user-create.input';

@ArgsType()
export class CreateUserArgs {
  @Field(() => UserCreateInput, { nullable: false })
  data: UserCreateInput;
}
