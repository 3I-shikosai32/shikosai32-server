import { ArgsType, Field } from '@nestjs/graphql';
import UserWhereUniqueInput from '../input/whereUnique';

@ArgsType()
export default class IncrementTotalPointArgs {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  where: UserWhereUniqueInput;

  @Field(() => Number, { nullable: false })
  increment: number;
}
