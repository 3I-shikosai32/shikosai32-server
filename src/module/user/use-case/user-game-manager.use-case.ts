import { Inject, Injectable } from '@nestjs/common';
import { Game } from '@prisma/client';
import { User } from '../domain/model/user.model';
import { UserRepositoryInterface } from '../domain/service/repository/user.repository';
import { IncrementPointData } from '../domain/service/use-case/port/user-game-manager.input';
import { UserGameManagerUseCaseInterface } from '../domain/service/use-case/user-game-manager.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';
import { CharacterStatusRepositoryInterface } from '~/character-status/domain/service/repository/character-status.repository';

@Injectable()
export class UserGameManagerUseCase implements UserGameManagerUseCaseInterface {
  constructor(
    @Inject(InjectionToken.USER_REPOSITORY)
    private readonly userRepository: UserRepositoryInterface,
    @Inject(InjectionToken.CHARACTER_STATUS_REPOSITORY)
    private readonly characterStatusRepository: CharacterStatusRepositoryInterface,
  ) {}

  async incrementPoint(incrementUsersData: IncrementPointData[], isBeforeDay2: boolean) {
    const updatedUsers = await Promise.all(
      incrementUsersData.map(async (incrementUserData) => {
        const foundUser = await this.userRepository.findUnique({
          where: { id: incrementUserData.id },
        });
        if (!foundUser) {
          throw new Error('User not found');
        }

        const foundCharacterStatus = await this.characterStatusRepository.findActiveByUserId(foundUser.id);
        if (!foundCharacterStatus) {
          throw new Error('Character status not found');
        }

        let updatedUser: User;
        if (isBeforeDay2) {
          updatedUser = await this.userRepository.update({
            where: { id: incrementUserData.id },
            data: {
              totalPointDay1: foundUser.totalPointDay1 + incrementUserData.increment,
              consumablePoint: foundUser.consumablePoint + incrementUserData.increment,
              pullableGachaTimes: foundUser.pullableGachaTimes + 1,
              participateGame: Game.NONE,
            },
          });
          await this.characterStatusRepository.update({
            where: { id: foundCharacterStatus.id },
            data: {
              characterPointDay1: foundCharacterStatus.characterPointDay1 + incrementUserData.increment,
            },
          });
        } else {
          updatedUser = await this.userRepository.update({
            where: { id: incrementUserData.id },
            data: {
              totalPointDay2: foundUser.totalPointDay2 + incrementUserData.increment,
              consumablePoint: foundUser.consumablePoint + incrementUserData.increment,
              pullableGachaTimes: foundUser.pullableGachaTimes + 1,
              participateGame: Game.NONE,
            },
          });
          await this.characterStatusRepository.update({
            where: { id: foundCharacterStatus.id },
            data: {
              characterPointDay2: foundCharacterStatus.characterPointDay2 + incrementUserData.increment,
            },
          });
        }

        return updatedUser;
      }),
    );

    return updatedUsers;
  }

  async joinGame(userId: string, game: Game) {
    const updatedUser = await this.userRepository.update({
      where: { authId: userId },
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
