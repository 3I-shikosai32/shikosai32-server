import { ObjectType, Field, Int } from '@nestjs/graphql';
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
}
