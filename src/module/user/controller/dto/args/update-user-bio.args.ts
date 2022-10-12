import { ArgsType, Field } from '@nestjs/graphql';
import { UserUpdateBioInput } from '../input/user-update-bio.input';
import { UserWhereUniqueInput } from '../input/user-where-unique.input';

@ArgsType()
export class UpdateUserBioArgs {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  where: UserWhereUniqueInput;

  @Field(() => UserUpdateBioInput, { nullable: false })
  data: UserUpdateBioInput;
}
