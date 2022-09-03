import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Character } from '@/libs/prisma/generated/prisma/character/enum';
import { Game } from '@/libs/prisma/generated/prisma/game/enum';
import { Role } from '@/libs/prisma/generated/prisma/role/enum';

@ObjectType()
export default class NestedUser {
  @Field(() => String, { nullable: false })
  id: string;

  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: false })
  email: string;

  @Field(() => Role, { nullable: false })
  role: Role;

  @Field(() => Int, { nullable: false })
  totalPointDay1: number;

  @Field(() => Int, { nullable: false })
  totalPointDay2: number;

  @Field(() => Int, { nullable: false })
  consumablePoint: number;

  @Field(() => Character, { nullable: false })
  character: Character;

  @Field(() => String, { nullable: false })
  iconUrl: string;

  @Field(() => String, { nullable: false })
  avatarUrl: string;

  @Field(() => Game, { nullable: false })
  participateGame: Game;

  @Field(() => Int, { nullable: false })
  pullableGachaTimes: number;

  @Field(() => Date, { nullable: false })
  createdAt: Date;
}
