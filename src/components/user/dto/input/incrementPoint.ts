import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export default class UserIncrementPointInput {
  @Field(() => String, { nullable: false })
  id: string;

  @Field(() => Number, { nullable: false })
  increment: number;
}
