import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserWhereUniqueAuthIdInput {
  @Field(() => String, { nullable: false })
  authId: string;
}
