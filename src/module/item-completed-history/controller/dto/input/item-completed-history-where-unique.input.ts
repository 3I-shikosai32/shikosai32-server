import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ItemCompletedHistoryWhereUniqueInput {
  @Field(() => String, { nullable: false })
  id: string;
}
