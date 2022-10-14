import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Character } from '@/infra/prisma/generated/prisma/character/enum';
import { User } from '~/user/controller/dto/object/user.object';

@ObjectType()
export class Item {
  @Field(() => String, { nullable: false })
  id: string;

  @Field(() => String, { nullable: false })
  iconUrl: string;

  @Field(() => String, { nullable: false })
  layerUrl: string;

  @Field(() => Character, { nullable: false })
  character: keyof typeof Character;

  @Field(() => Int, { nullable: false })
  layer: number;

  @Field(() => [User], { nullable: false })
  users: User[];

  @Field(() => [String], { nullable: false })
  userIds: string[];
}
