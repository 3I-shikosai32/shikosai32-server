import { ArgsType, Field } from '@nestjs/graphql';
import UserWhereUniqueInput from '../input/whereUnique';

@ArgsType()
export default class ExitGameArgs {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  where: UserWhereUniqueInput;
}
