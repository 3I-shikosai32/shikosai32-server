import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Character } from '@prisma/client';

@ObjectType()
export default class NestedItem {
  @Field(() => String, { nullable: false })
  id: string;

  @Field(() => String, { nullable: false })
  url: string;

  @Field(() => Character, { nullable: false })
  character: Character;

  @Field(() => Int, { nullable: false })
  layer: number;

  @Field(() => [String], { nullable: false })
  userIds: string;
}
