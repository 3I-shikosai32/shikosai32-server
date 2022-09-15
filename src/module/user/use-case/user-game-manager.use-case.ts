import { Inject, Injectable } from '@nestjs/common';
import { Game } from '@prisma/client';
import { ExitGameArgs } from '../controller/dto/args/exit-game.args';
import { JoinGameArgs } from '../controller/dto/args/join-game.args';
import { UserRepositoryInterface } from '../domain/service/repository/user.repository';
import { UserGameManagerUseCaseInterface } from '../domain/service/use-case/user-game-manager.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';

@Injectable()
export class UserGameManagerUseCase implements UserGameManagerUseCaseInterface {
  constructor(
    @Inject(InjectionToken.USER_REPOSITORY)
    private readonly userRepository: UserRepositoryInterface,
  ) {}

  async joinGame(args: JoinGameArgs) {
    const updatedUser = await this.userRepository.update({
      where: args.where,
      data: {
        participateGame: args.game,
      },
    });

    return updatedUser;
  }

  async exitGame(args: ExitGameArgs) {
    const updatedUser = await this.userRepository.update({
      where: args.where,
      data: {
        participateGame: Game.NONE,
      },
    });

    return updatedUser;
  }
}
