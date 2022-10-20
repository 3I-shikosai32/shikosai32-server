import { ArgsType, Field } from '@nestjs/graphql';
import { UserWhereUniqueAuthIdInput } from '../input/user-where-unique-auth-id.input';
import { Game } from '@/infra/prisma/generated/prisma/game/enum';

@ArgsType()
export class JoinGameArgs {
  @Field(() => UserWhereUniqueAuthIdInput, { nullable: false })
  where: UserWhereUniqueAuthIdInput;

  @Field(() => Game, { nullable: false })
  game: keyof typeof Game;
}
