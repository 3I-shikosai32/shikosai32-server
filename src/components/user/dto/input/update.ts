import { InputType, Field, Int } from '@nestjs/graphql';
import { Game } from '@/libs/prisma/generated/prisma/game/enum';
import { Role } from '@/libs/prisma/generated/prisma/role/enum';

@InputType()
export default class UserUpdateInput {
  @Field(() => Role, { nullable: true })
  role?: keyof typeof Role;

  @Field(() => Int, { nullable: true })
  totalPointDay1?: number;

  @Field(() => Int, { nullable: true })
  totalPointDay2?: number;

  @Field(() => Int, { nullable: true })
  consumablePoint?: number;

  @Field(() => [String], { nullable: true })
  itemIds?: string[];

  @Field(() => Game, { nullable: true })
  participateGame?: keyof typeof Game;

  @Field(() => Int, { nullable: true })
  pullableGachaTimes?: number;
}
