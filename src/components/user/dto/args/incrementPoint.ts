import { ArgsType, Field } from '@nestjs/graphql';
import UserIncrementPointInput from '../input/incrementPoint';

@ArgsType()
export default class IncrementPointArgs {
  @Field(() => [UserIncrementPointInput], { nullable: false })
  users: UserIncrementPointInput[];
}
