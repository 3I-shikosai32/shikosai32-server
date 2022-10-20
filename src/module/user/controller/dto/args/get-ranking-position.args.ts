import { ArgsType, Field } from '@nestjs/graphql';
import { UserWhereUniqueAuthIdInput } from '../input/user-where-unique-auth-id.input';

@ArgsType()
export class GetRankingPositionArgs {
  @Field(() => UserWhereUniqueAuthIdInput, { nullable: false })
  where: UserWhereUniqueAuthIdInput;
}
