import { ArgsType, Field } from '@nestjs/graphql';
import { UserUpdateBioInput } from '../input/user-update-bio.input';
import { UserWhereUniqueAuthIdInput } from '../input/user-where-unique-auth-id.input';

@ArgsType()
export class UpdateUserBioArgs {
  @Field(() => UserWhereUniqueAuthIdInput, { nullable: false })
  where: UserWhereUniqueAuthIdInput;

  @Field(() => UserUpdateBioInput, { nullable: false })
  data: UserUpdateBioInput;
}
