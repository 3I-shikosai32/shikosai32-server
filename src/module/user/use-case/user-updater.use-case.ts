import { Inject, Injectable } from '@nestjs/common';
import { UpdateUserArgs } from '../controller/dto/args/update-user.args';
import { UserRepositoryInterface } from '../domain/service/repository/user.repository';
import { UserUpdaterUseCaseInterface } from '../domain/service/use-case/user-updater.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';

@Injectable()
export class UserUpdaterUseCase implements UserUpdaterUseCaseInterface {
  constructor(
    @Inject(InjectionToken.USER_REPOSITORY)
    private readonly userRepository: UserRepositoryInterface,
  ) {}

  async updateUser(args: UpdateUserArgs) {
    const updatedUser = await this.userRepository.update(args);

    return updatedUser;
  }
}
