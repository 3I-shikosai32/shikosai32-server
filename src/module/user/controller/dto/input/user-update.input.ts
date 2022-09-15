import { Field, InputType, Int } from '@nestjs/graphql';
import { Game } from '@/infra/prisma/generated/prisma/game/enum';
import { Role } from '@/infra/prisma/generated/prisma/role/enum';

@InputType()
export class UserUpdateInput {
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
