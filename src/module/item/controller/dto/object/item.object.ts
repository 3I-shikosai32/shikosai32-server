import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Character } from '@/infra/prisma/generated/prisma/character/enum';
import { NestedUser } from '~/user/controller/dto/object/nested-user.object';

@ObjectType()
export class Item {
  @Field(() => String, { nullable: false })
  id: string;

  @Field(() => String, { nullable: false })
  url: string;

  @Field(() => Character, { nullable: false })
  character: keyof typeof Character;

  @Field(() => Int, { nullable: false })
  layer: number;

  @Field(() => [NestedUser], { nullable: false })
  users: NestedUser[];

  @Field(() => [String], { nullable: false })
  userIds: string[];
}
