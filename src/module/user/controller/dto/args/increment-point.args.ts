import { ArgsType, Field } from '@nestjs/graphql';
import { UserIncrementPointInput } from '../input/user-increment-point.input';

@ArgsType()
export class IncrementPointArgs {
  @Field(() => [UserIncrementPointInput], { nullable: false })
  users: UserIncrementPointInput[];
}
