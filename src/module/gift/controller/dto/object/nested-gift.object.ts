import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class NestedGift {
  @Field(() => String, { nullable: false })
  id: string;

  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: false })
  iconUrl: string;

  @Field(() => Int, { nullable: false })
  price: number;

  @Field(() => Int, { nullable: false })
  remaining: number;

  @Field(() => Date, { nullable: false })
  createdAt: Date;
}
