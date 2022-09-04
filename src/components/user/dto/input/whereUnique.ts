import { InputType, Field } from '@nestjs/graphql';

@InputType()
export default class UserWhereUniqueInput {
  @Field(() => String, { nullable: false })
  id: string;
}
