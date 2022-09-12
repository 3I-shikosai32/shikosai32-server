import { InputType, Field } from '@nestjs/graphql';

@InputType()
export default class UserIncrementPointInput {
  @Field(() => String, { nullable: false })
  id: string;

  @Field(() => Number, { nullable: false })
  increment: number;
}
