import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UserIncrementPointInput {
  @Field(() => String, { nullable: false })
  id: string;

  @Field(() => Int, { nullable: false })
  increment: number;
}
