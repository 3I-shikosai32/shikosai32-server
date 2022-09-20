import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class GiftUpdateInput {
  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  iconUrl?: string;

  @Field(() => Int, { nullable: true })
  price?: number;

  @Field(() => Int, { nullable: true })
  remaining?: number;
}
