import { InputType, Field, Int } from '@nestjs/graphql';
import { CaharacterItem } from '@/libs/prisma/generated/caharacter-item/caharacter-item/model';
import { Game } from '@/libs/prisma/generated/prisma/game/enum';
import { Role } from '@/libs/prisma/generated/prisma/role/enum';

@InputType()
export default class UserUpdateInput {
  @Field(() => Role, { nullable: true })
  role?: Role;

  @Field(() => Int, { nullable: true })
  totalPointDay1?: number;

  @Field(() => Int, { nullable: true })
  totalPointDay2?: number;

  @Field(() => Int, { nullable: true })
  consumablePoint?: number;

  @Field(() => [CaharacterItem], { nullable: true })
  characterItems?: CaharacterItem[];

  @Field(() => Game, { nullable: true })
  participateGame?: Game;

  @Field(() => Int, { nullable: true })
  pullableGachaTimes?: number;
}
