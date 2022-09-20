import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GiftHistoryWhereUniqueInput {
  @Field(() => String, { nullable: false })
  id: string;
}
