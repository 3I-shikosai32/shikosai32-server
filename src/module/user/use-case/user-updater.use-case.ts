import { Inject, Injectable } from '@nestjs/common';
import { Game } from '@prisma/client';
import { User } from '../domain/model/user.model';
import { UserRepositoryInterface } from '../domain/service/repository/user.repository';
import { IncrementPointData, UpdateUserData } from '../domain/service/use-case/port/user-updater.input';
import { UserUpdaterUseCaseInterface } from '../domain/service/use-case/user-updater.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';

@Injectable()
export class UserUpdaterUseCase implements UserUpdaterUseCaseInterface {
  constructor(
    @Inject(InjectionToken.USER_REPOSITORY)
    private readonly userRepository: UserRepositoryInterface,
  ) {}

  async updateUser(userId: string, updateUserData: UpdateUserData) {
    const updatedUser = await this.userRepository.update({
      where: { id: userId },
      data: updateUserData,
    });

    return updatedUser;
  }

  async incrementPoint(incrementUsersData: IncrementPointData[], isBeforeDay2: boolean) {
    const updatedUsers = await Promise.all(
      incrementUsersData.map(async (incrementUserData) => {
        const foundUser = await this.userRepository.findUnique({
          where: { id: incrementUserData.id },
        });
        if (!foundUser) {
          throw new Error('User not found');
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
        }

        return updatedUser;
      }),
    );

    return updatedUsers;
  }
}
