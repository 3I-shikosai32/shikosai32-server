import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GiftWhereUniqueInput {
  @Field(() => String, { nullable: false })
  id: string;
}
