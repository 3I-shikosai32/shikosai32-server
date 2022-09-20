import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserIncrementPointInput {
  @Field(() => String, { nullable: false })
  id: string;

  @Field(() => Number, { nullable: false })
  increment: number;
}
