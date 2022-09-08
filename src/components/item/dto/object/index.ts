import { ObjectType, Field, Int } from '@nestjs/graphql';
import NestedUser from '@/components/user/dto/object/nested';
import { Character } from '@/libs/prisma/generated/prisma/character/enum';

@ObjectType()
export default class Item {
  @Field(() => String, { nullable: false })
  id: string;

  @Field(() => String, { nullable: false })
  url: string;

  @Field(() => Character, { nullable: false })
  character: Character;

  @Field(() => Int, { nullable: false })
  layer: number;

  @Field(() => [NestedUser], { nullable: false })
  users: NestedUser[];

  @Field(() => [String], { nullable: false })
  userIds: string;
}
