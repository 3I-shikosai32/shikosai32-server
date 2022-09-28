import { Inject, Injectable } from '@nestjs/common';
import { UserRepositoryInterface } from '../domain/service/repository/user.repository';
import { UpdateUserData } from '../domain/service/use-case/port/user-updater.input';
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
}
