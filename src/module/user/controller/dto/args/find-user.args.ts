import { ArgsType, Field } from '@nestjs/graphql';
import { UserWhereUniqueAuthIdInput } from '../input/user-where-unique-auth-id.input';

@ArgsType()
export class FindUserArgs {
  @Field(() => UserWhereUniqueAuthIdInput, { nullable: false })
  where: UserWhereUniqueAuthIdInput;
}
