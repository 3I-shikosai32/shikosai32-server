import { ArgsType, Field } from '@nestjs/graphql';
import UserWhereUniqueInput from '../input/whereUnique';

@ArgsType()
export default class PullGachaArgs {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  where: UserWhereUniqueInput;
}
