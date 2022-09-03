import { InputType, Field } from '@nestjs/graphql';

@InputType()
export default class GiftHistoryWhereUniqueInput {
  @Field(() => String, { nullable: false })
  id: string;
}
