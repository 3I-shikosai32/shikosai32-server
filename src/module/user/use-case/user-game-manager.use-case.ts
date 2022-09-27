import { Inject, Injectable } from '@nestjs/common';
import { Game } from '@prisma/client';
import { UserRepositoryInterface } from '../domain/service/repository/user.repository';
import { UserGameManagerUseCaseInterface } from '../domain/service/use-case/user-game-manager.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';

@Injectable()
export class UserGameManagerUseCase implements UserGameManagerUseCaseInterface {
  constructor(
    @Inject(InjectionToken.USER_REPOSITORY)
    private readonly userRepository: UserRepositoryInterface,
  ) {}

  async joinGame(userId: string, game: Game) {
    const updatedUser = await this.userRepository.update({
      where: { id: userId },
      data: {
        participateGame: game,
      },
    });

    return updatedUser;
  }

  async exitGame(userId: string) {
    const updatedUser = await this.userRepository.update({
      where: { id: userId },
      data: {
        participateGame: Game.NONE,
      },
    });

    return updatedUser;
  }
}
