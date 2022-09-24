import { Inject, Injectable } from '@nestjs/common';
import { Game } from '@prisma/client';
import { ExitGameArgs } from '../controller/dto/args/exit-game.args';
import { IncrementPointArgs } from '../controller/dto/args/increment-point.args';
import { JoinGameArgs } from '../controller/dto/args/join-game.args';
import { User } from '../domain/model/user.model';
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

  async incrementPoint(args: IncrementPointArgs, isBeforeDay2: boolean) {
    const updatedUsers = await Promise.all(
      args.users.map(async (arg) => {
        const foundUser = await this.userRepository.findUnique({
          where: { id: arg.id },
        });
        if (!foundUser) {
          throw new Error('User not found');
        }

        let updatedUser: User;
        if (isBeforeDay2) {
          updatedUser = await this.userRepository.update({
            where: { id: arg.id },
            data: {
              totalPointDay1: foundUser.totalPointDay1 + arg.increment,
              consumablePoint: foundUser.consumablePoint + arg.increment,
              pullableGachaTimes: foundUser.pullableGachaTimes + 1,
              participateGame: Game.NONE,
            },
          });
        } else {
          updatedUser = await this.userRepository.update({
            where: { id: arg.id },
            data: {
              totalPointDay2: foundUser.totalPointDay2 + arg.increment,
              consumablePoint: foundUser.consumablePoint + arg.increment,
              pullableGachaTimes: foundUser.pullableGachaTimes + 1,
              participateGame: Game.NONE,
            },
          });
        }

        return updatedUser;
      }),
    );

    return updatedUsers;
  }
}
