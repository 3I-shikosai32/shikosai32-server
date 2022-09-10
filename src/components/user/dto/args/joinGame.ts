import { ArgsType, Field } from '@nestjs/graphql';
import UserWhereUniqueInput from '../input/whereUnique';
import { Game } from '@/libs/prisma/generated/prisma/game/enum';

@ArgsType()
export default class JoinGameArgs {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  where: UserWhereUniqueInput;

  @Field(() => Game, { nullable: false })
  game: keyof typeof Game;
}
