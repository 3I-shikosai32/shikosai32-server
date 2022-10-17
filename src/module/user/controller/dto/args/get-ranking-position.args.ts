import { ArgsType, Field } from '@nestjs/graphql';
import { UserWhereUniqueInput } from '../input/user-where-unique.input';

@ArgsType()
export class GetRankingPositionArgs {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  where: UserWhereUniqueInput;
}
