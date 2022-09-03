import { InputType, Field } from '@nestjs/graphql';

@InputType()
export default class GiftWhereUniqueInput {
  @Field(() => String, { nullable: false })
  id: string;
}
