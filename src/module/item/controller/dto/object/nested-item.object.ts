import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Character } from '@/infra/prisma/generated/prisma/character/enum';

@ObjectType()
export class NestedItem {
  @Field(() => String, { nullable: false })
  id: string;

  @Field(() => String, { nullable: false })
  url: string;

  @Field(() => Character, { nullable: false })
  character: keyof typeof Character;

  @Field(() => Int, { nullable: false })
  layer: number;

  @Field(() => [String], { nullable: false })
  userIds: string[];
}
