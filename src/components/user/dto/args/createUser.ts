import { ArgsType, Field } from '@nestjs/graphql';
import UserCreateInput from '../input/create';

@ArgsType()
export default class CreateUserArgs {
  @Field(() => UserCreateInput, { nullable: false })
  data: UserCreateInput;
}
