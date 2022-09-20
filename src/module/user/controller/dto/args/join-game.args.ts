import { ArgsType, Field } from '@nestjs/graphql';
import { UserWhereUniqueInput } from '../input/user-where-unique.input';
import { Game } from '@/infra/prisma/generated/prisma/game/enum';

@ArgsType()
export class JoinGameArgs {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  where: UserWhereUniqueInput;

  @Field(() => Game, { nullable: false })
  game: keyof typeof Game;
}
